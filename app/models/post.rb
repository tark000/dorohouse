class Post < ActiveRecord::Base
  attr_accessible :description, :image, :type, :title, :remote_image_url, :post_images_attributes
  has_many :post_images
  accepts_nested_attributes_for :post_images, allow_destroy: true
  mount_uploader :image, ImageUploader

end
