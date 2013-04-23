class Street < ActiveRecord::Base
  attr_accessible :city_id, :title
  belongs_to :city
  has_many :adverts
end
