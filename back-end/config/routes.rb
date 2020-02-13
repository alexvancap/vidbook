Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  default_url_options :host => '172.16.0.121:3000'

  post '/login', to: 'users#login'
  post '/register', to: 'users#create'
  get '/get-user-info', to: 'users#get_user_info'
  get '/logout', to: 'users#logout'
  post '/upload-img/:id', to: 'users#upload_image'
  get '/get-user', to: 'users#get_user'
  post '/update-user-info', to: 'users#update_user_info'
  post '/update-info', to: 'users#update'
  get '/get-all-users', to: 'users#index'
  post '/like-or-unlike-video', to: 'video_likes#like_or_unlike'
  post '/create-comment', to: 'video_comments#create'
  post '/upload-video/:id', to: 'users#upload_video'
  get '/get-specific-user/:id', to: 'users#get_specific'
  post '/delete-file', to: 'users#delete_file'
end
