class PostImage < ActiveRecord::Base
  attr_accessible :image, :post_id, :remote_image_url
  mount_uploader :image, ImageUploader
  belongs_to :post
end
