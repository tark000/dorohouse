class Post < ActiveRecord::Base
  attr_accessible :description, :image, :category, :title, :remote_image_url, :post_images_attributes
  has_many :post_images
  accepts_nested_attributes_for :post_images, allow_destroy: true
  mount_uploader :image, ImageUploader

  scope :search, lambda { |*category| where(:category => category) }

  def self.pagin(page, category)
    self.search(category).paginate(:per_page => 3, :page => page)
  end

  def self.all_pagin(page)
    self.paginate(:per_page => 3, :page => page)
  end

end
