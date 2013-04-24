class City < ActiveRecord::Base
  attr_accessible :title
  has_many :city_districts
  has_many :streets
  has_many :adverts

end
