class Advert < ActiveRecord::Base
  attr_accessible :area, :city_district_id, :city_id, :description, :district, :floor, :height, :house, :house_type_id, :image, :layout, :price, :region_id, :room_number, :state_id, :street, :title, :type_id, :user_id, :video
  has_many :images
  has_many :layouts
  belongs_to :city
  belongs_to :city_district
  belongs_to :streets
  belongs_to :house_type
  belongs_to :type
  belongs_to :user
  belongs_to :state
end
