class ApplicationController < ActionController::API

    def current_user
        if session[:user_id]
            p "i exist"
            User.find(session[:user_id])
        else
            nil
        end
    end

end