class Search < ActiveRecord::Base
  attr_accessible :category, :city_id, :floor, :max_area, :max_price, :min_area, :min_price, :room_number, :state_id, :title
  def adverts
    @adverts ||= find_adverts
  end

  private

  def find_adverts
    adverts = Advert.order(:title)
    adverts = adverts.where(:category => category) if category.present?
    adverts = adverts.where(:city_id => city_id) if city_id.present?
    adverts = adverts.where(:room_number => room_number) if room_number.present?
    adverts = adverts.where(:state_id=> state_id) if state_id.present?
    adverts = adverts.where("price >= ?", min_price) if min_price.present?
    adverts = adverts.where("price <= ?", max_price) if max_price.present?
    adverts = adverts.where("area >= ?", min_area) if min_area.present?
    adverts = adverts.where("area <= ?", max_area) if max_area.present?
    adverts
  end
end
