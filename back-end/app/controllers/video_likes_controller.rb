class VideoLikesController < ApplicationController
    def like_or_unlike
        like = VideoLike.find_by({user_id: params[:user_id], liked_user_id: params[:liked_user_id]})

        if like
            like.destroy()
            render json: {liked: false}
        else
            VideoLike.create({user_id: params[:user_id], liked_user_id: params[:liked_user_id]})
            render json: {liked: true}
        end
    end
end