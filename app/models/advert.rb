class Advert < ActiveRecord::Base
  attr_accessible :category, :street_title, :area, :city_district_id, :city_id, :description, :district, :floor, :height, :house, :house_type_id, :image, :layout, :price, :region_id, :room_number, :state_id, :street_id, :title, :function_type_id, :user_id, :video, :remote_image_url, :advert_images_attributes, :layouts_attributes, :remote_layout_url
  mount_uploader :image, ImageUploader
  mount_uploader :layout, ImageUploader
  has_many :advert_images
  accepts_nested_attributes_for :advert_images, allow_destroy: true
  has_many :layouts
  accepts_nested_attributes_for :layouts, allow_destroy: true
  belongs_to :city
  belongs_to :city_district
  belongs_to :street
  belongs_to :house_type
  belongs_to :function_type
  belongs_to :user
  belongs_to :state

  scope :advert_category, lambda { |*category| where(:category => category) }


  scope :search, lambda{ |b = nil| where('id = ?', "#{b}") if b.present? }

  scope :category_search, lambda{ |b| where(:category => b)}
  scope :city_search , lambda{|b| where(:city_id => b)}
  scope :room_number_search, lambda{|b| where(:room_number => b)}
  scope :floor_search, lambda{|b| where(:floor => b)}
  scope :state_search, lambda{|b| where(:state_id=> b)}
  scope :min_price_search, lambda{|b| where("price >= ?", b)}
  scope :max_price_search, lambda{|b| where("price <= ?", b)}
  scope :min_area_search, lambda{|b| where("area >= ?", b)}
  scope :max_area_search, lambda{|b| where("area <= ?", b)}


  def street_title
    street.try(:title)
  end

  def street_title=(title)
    self.street = Street.find_by_title(title) if title.present?
  end


end
