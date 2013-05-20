class ChangeTypeStringToInteger < ActiveRecord::Migration
  def up
    change_column :adverts, :function_type_id, :integer
    change_column :adverts, :region_id, :integer
    change_column :adverts, :city_id, :integer
    change_column :adverts, :city_district_id, :integer
    change_column :adverts, :house_type_id, :integer
    change_column :adverts, :state_id, :integer
    change_column :adverts, :user_id, :integer
    change_column :adverts, :street_id, :integer
    change_column :city_districts, :city_id, :integer
    change_column :streets, :city_id, :integer
    change_column :advert_images, :advert_id, :integer
    change_column :layouts, :advert_id, :integer
    change_column :post_images, :post_id, :integer
  end

  def down
  end
end
