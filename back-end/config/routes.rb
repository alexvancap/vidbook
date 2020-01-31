Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'users#login'
  post '/register', to: 'users#create'
  get '/get-user', to: 'users#get_user'
  get '/logout', to: 'users#logout'
end
