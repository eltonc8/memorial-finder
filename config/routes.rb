Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    namespace :v1 do
      get "memorials/search", to: "memorials#search"
      get "memorials/:id", to: "memorials#show"
    end
  end
end
