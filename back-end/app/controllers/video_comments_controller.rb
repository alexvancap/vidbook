class VideoCommentsController < ApplicationController
    def create
        comment = VideoComment.create({
            user_id: params[:user_id], 
            user_that_commented_id: params[:user_who_commented_id],
            comment: params[:content]
        })
        render json: comment
    end
end