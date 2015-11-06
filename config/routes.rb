Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    namespace :v1 do
      get "memorial/search", to: "memorials#search"
    end
  end
end
