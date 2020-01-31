class CreateVideoLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :video_likes do |t|
      t.integer(:user_id)
      t.integer(:video_id)
    end
  end
end


# post_likes_controller PostLikesController