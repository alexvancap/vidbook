# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:19006'
    origins 'http://192.168.1.40:19006'

    resource '*',
      credentials: true,
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
