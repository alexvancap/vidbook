class VideoLikesController < ApplicationController
    def like_or_unlike
        like = VideoLike.find_by({user_id: params[:user_id], liked_user_id: params[:liked_user_id]})
        like_count = VideoLike.all.select do |vl|
            vl.user_id = params[:user_id]
        end


        if like
            like.destroy()
            render json: {liked: false, like_count: like_count.length-1}
        else
            VideoLike.create({user_id: params[:user_id], liked_user_id: params[:liked_user_id]})
            render json: {liked: true, like_count: like_count.length+1}
        end
    end

    def find
        likes = VideoLike.all.select do |like|
            like.user_id = params[:user_id]
        end
        render json: likes
    end
end