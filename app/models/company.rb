class Company < ActiveRecord::Base
  attr_accessible :category, :address, :description, :image, :mail, :phone, :site, :title, :remote_image_url
  mount_uploader :image, ImageUploader

  scope :search, lambda { |*category| where(:category => category) }

  def self.pagin(page, category)
    self.search(category).paginate(:per_page => 3, :page => page)
  end

  def self.all_pagin(page)
    self.paginate(:per_page => 3, :page => page)
  end
end
