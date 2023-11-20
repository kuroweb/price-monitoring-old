require "sidekiq/web"

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :products
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check

  mount Sidekiq::Web, at: "/sidekiq" if Rails.env.development?
end
