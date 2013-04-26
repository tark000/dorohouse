class Post < ActiveRecord::Base
  attr_accessible :description, :image, :category_id, :title, :remote_image_url
  mount_uploader :image, ImageUploader
  belongs_to :category

end
