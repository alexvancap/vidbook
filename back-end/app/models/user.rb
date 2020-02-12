class User < ActiveRecord::Base
    include Rails.application.routes.url_helpers 

    has_many :posts
    has_many :post_likes
    has_many :post_comments

    has_many :video_likes
    has_many :liked_users, through: :video_likes

    has_many :video_comments
    has_many :user_that_commented, through: :video_comments
    
    has_many :connections
    has_many :friends, through: :connections

    has_one_attached :profile_pic
    has_one_attached :header_pic
    has_one_attached :profile_video
    has_secure_password

    def profile_url
        begin
            url_for(self.profile_pic)
        rescue => error
            ""
        end
    end
    def header_url
        begin
            url_for(self.header_pic)
        rescue => error
            ""
        end
    end
    def video_url
        begin
            url_for(self.profile_video)
        rescue => error
            ""
        end
    end 
end