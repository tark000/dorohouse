class State < ActiveRecord::Base
  attr_accessible :title
  has_many :adverts
end
