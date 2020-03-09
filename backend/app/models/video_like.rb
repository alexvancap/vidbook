class VideoLike < ActiveRecord::Base
    belongs_to :liked_user, :class_name => 'User'
    belongs_to :user, :class_name =>  'User'
end