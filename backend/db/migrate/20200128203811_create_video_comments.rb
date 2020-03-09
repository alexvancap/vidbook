class CreateVideoComments < ActiveRecord::Migration[6.0]
  def change
    create_table :video_comments do |t|
      t.integer(:user_id)
      t.integer(:user_that_commented_id)
      t.string(:comment)
    end
  end
end
