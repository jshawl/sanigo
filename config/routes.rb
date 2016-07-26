Rails.application.routes.draw do
  root :to => redirect('/locations.json') # nice!
  resources :locations do
    resources :comments
  end
end
