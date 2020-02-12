class UsersController < ApplicationController

    def index
        users = User.all


        # img_url = url_for(user.profile_pic)
        # render :json => {url: img_url}

        render json: users.to_json({:include => [:video_likes, :video_comments], methods: [:profile_url, :header_url, :video_url]})

    end

    def get_specific
        user = User.find(params[:id])

        render json: user.to_json({methods: [:profile_url, :header_url, :video_url]})
    end

    def login
        user = User.find_by({ username: params[:username] })
        if user != nil && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user.id
        else
            render json: { error: "wrong password!"}
        end
        # user = User.find_by({ username: params[:username] })
        # if (user)
        #     if user.authenticate(params[:password])
        #         session[:user_id] = user.id
        #         render json: user.id
        #     else
        #         render json: {error: "Wrong password!"}
        #     end
        # else
        #     render json: {error: "User not found."}
        # end
    end

    def create
        user = User.create(user_params)
        render json: {
            username: user.username, 
            email: user.email, 
            adress: user.adress, 
            first_name: user.first_name, 
            last_name: user.last_name
        }
    end

    def update
        user = User.find(session[:user_id])
        User.update(user_params)
        render json: user
    end

    def get_user
        User.find(session[:user_id])
        user = User.find(session[:user_id])

        img_url = url_for(user.profile_pic)
        if user
            render json: user.to_json(methods: [:profile_url, :header_url, :video_url])
        else
            render json: {error: 'user not found'}
        end
    end

    def logout
        session[:user_id] = nil
    end

    def user_params
        params.permit(
            :username,
            :password,
            :adress,
            :first_name,
            :last_name,
            :email,
            :current_role,
            :degree,
            :school,
            :introduction
        )
    end
    
    def upload_image

        user = User.find(params[:id])

        decoded_image = Base64.decode64(params[:img])
        imageIO = StringIO.new(decoded_image) 

        filename = params[:id] + '-' + params[:type] + '.jpg'

        if params[:type] === 'profile_url'
            if user.profile_pic.attached?
                user.profile_pic.purge
            end
            img = user.profile_pic.attach(io: imageIO, filename: filename)
            img_url = url_for(user.profile_pic)
            render :json => {url: img_url}

        elsif params[:type] === 'header_url'
            if user.header_pic.attached?
                user.header_pic.purge
            end
            img = user.header_pic.attach(io: imageIO, filename: filename)
            img_url = url_for(user.profile_pic)
            render :json => {url: img_url}
        end

    end

    def upload_video
        user = User.find(params[:id])

        decoded_video = Base64.decode64(params[:video])
        videoIO = StringIO.new(decoded_video) 
        
        filename = params[:id] + '-' + 'video' + '.mov'

        if user.profile_video.attached?
            user.profile_video.purge
        end
        user.profile_video.attach(io: videoIO, filename: filename)
        render json: user.to_json({methods: [:video_url]})

    end

    def update_user_info
        user = User.find(session[:user_id])
        user.update({
            introduction: params[:introduction],
            current_role: params[:current_role],
            degree: params[:degree],
            school: params[:school],
            skills: params[:skills]
        })
    end
end