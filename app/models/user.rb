class User < ActiveRecord::Base
  attr_accessible :email, :name, :pass
  has_many :adverts
end
