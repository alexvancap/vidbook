class UsersController < ApplicationController
    def login
        user = User.find_by({ username: params[:username] })
        if (user)
            if user.authenticate(params[:password])
                p session[:user_id] = user.id
                render json: user.id
            else
                render json: {error: "Wrong password!"}
            end
        else
            render json: {error: "User not found."}
        end
    end

    def create
        user = User.create(allowedParams)
        render json: {
            username: user.username, 
            email: user.email, 
            adress: user.adress, 
            first_name: user.first_name, 
            last_name: user.last_name
        }
    end

    def get_user_info
        render json: current_user
    end

    def logout
        p session[:user_id] = nil
    end

    def allowedParams
        params.permit(
            :username,
            :password,
            :adress,
            :first_name,
            :last_name,
            :email
        )
    end
    
    def upload_image
        # byebug
        user = User.find(params[:id])
        if params[:type] === 'profile'
            if user.profile_pic.attached?
                user.profile_pic.purge
            end
            img = user.profile_pic.attach(params[:img])

        elsif params[:type] === 'header'
            if user.header_pic.attached?
                user.header_pic.purge
            end
            img = user.header_pic.attach(params[:img])
        end
        render json: user.header_pic
    end


    def user_params
        params.require(:post).permit(:username, :password, :header_pic, :profile_pic)
      end
end