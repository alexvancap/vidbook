class User < ActiveRecord::Base
    has_many :posts
    has_many :post_likes
    has_many :post_comments
    has_many :video_likes
    has_many :video_comments
    has_many :connections
    has_many :friends, through: :connections

    has_one_attached :profile_pic
    has_one_attached :header_pic
    has_one_attached :profile_video
    has_secure_password
end