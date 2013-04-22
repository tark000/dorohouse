class Advert < ActiveRecord::Base
  attr_accessible :area, :city_district_id, :city_id, :description, :district, :floor, :height, :house, :house_type_id, :image, :layout, :price, :region_id, :room_number, :state_id, :street, :title, :type_id, :user_id, :video
end
