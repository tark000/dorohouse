class Company < ActiveRecord::Base
  attr_accessible :address, :description, :image, :mail, :phone, :site, :title
end
