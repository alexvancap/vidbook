class VideoComment < ActiveRecord::Base
    belongs_to :user_that_commented, :class_name => 'User'
    belongs_to :user, :class_name =>  'User'
end