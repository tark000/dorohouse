class Company < ActiveRecord::Base
  attr_accessible :category, :address, :description, :image, :mail, :phone, :site, :title, :remote_image_url
  mount_uploader :image, ImageUploader
end
