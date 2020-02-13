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
        User.update(
            username: params[:username],
            email: params[:email],
            adress: params[:address],
            password: params[:password]
        )
        

        render json: user
    end

    def get_user
        user = User.find(session[:user_id])
        # img_url = url_for(user.profile_pic)
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

        if params[:type] === 'profile_url'
            user.update({ profile_pic: params[:photo] })
            img_url = url_for(user.profile_pic)
            render :json => {url: img_url}

        elsif params[:type] === 'header_url'
            user.update({ header_pic: params[:photo] })
            img_url = url_for(user.header_pic)
            render :json => {url: img_url}
        end
    end

    def upload_video
        user = User.find(params[:id])

        user.update({ profile_video: params[:video] })

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

    def delete_file
        p user = User.find(session[:user_id])
        p user.update({params[:fileType] => nil})
    end
end