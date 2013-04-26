class Advert < ActiveRecord::Base
  attr_accessible :area, :city_district_id, :city_id, :description, :district, :floor, :height, :house, :house_type_id, :image, :layout, :price, :region_id, :room_number, :state_id, :street_id, :title, :type_id, :user_id, :video, :remote_image_url, :advert_images_attributes, :layouts_attributes
  mount_uploader :image, ImageUploader
  has_many :advert_images
  accepts_nested_attributes_for :advert_images, allow_destroy: true
  has_many :layouts
  accepts_nested_attributes_for :layouts, allow_destroy: true
  belongs_to :city
  belongs_to :city_district
  belongs_to :streets
  belongs_to :house_type
  belongs_to :type
  belongs_to :user
  belongs_to :state
end
