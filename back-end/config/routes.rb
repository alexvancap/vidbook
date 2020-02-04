Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'users#login'
  post '/register', to: 'users#create'
  get '/get-user-info', to: 'users#get_user_info'
  get '/logout', to: 'users#logout'
  post '/upload-img/:id', to: 'users#upload_image'
end
