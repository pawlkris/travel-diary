Rails.application.routes.draw do
  namespace :api do
    resources :locations
    resources :users
    resources :trips
  end
end
