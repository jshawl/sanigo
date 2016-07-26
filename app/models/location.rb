class Location < ApplicationRecord
  has_many :comments, dependent: :destroy


  geocoded_by :address # excellent!
  after_validation :geocode

end
