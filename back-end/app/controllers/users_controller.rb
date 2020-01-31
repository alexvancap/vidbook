class UsersController < ApplicationController
    def login
        user = User.find_by({ username: params[:username] })
        if (user)
            if user.authenticate(params[:password])
                session[:user_id] = user.id
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

    def get_user
        render json: current_user
    end

    def logout
        p '??????????????????????????????????????????'
        p '------------------------------------------'
        p session
        p '------------------------------------------'
        p '??????????????????????????????????????????'
        p session[:user_id]
        session[:user_id] = nil
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
    params.permit(:user).permit(:profile_pic, :header_pic, :profile_image)
end