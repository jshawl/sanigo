class Comment < ApplicationRecord
  belongs_to :location
  # consider adding validations
end
