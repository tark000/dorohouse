class TypeId < ActiveRecord::Migration
  def up


    rename_column :adverts, :function_type_id, :function_type_id_int
    add_column :adverts, :function_type_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:function_type_id, c.function_type_id_int) }
    remove_column :adverts, :function_type_id_int




    rename_column :adverts, :region_id, :region_id_int
    add_column :adverts, :region_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:region_id, c.region_id_int) }
    remove_column :adverts, :region_id_int




    rename_column :adverts, :city_id, :city_id_int
    add_column :adverts, :city_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:city_id, c.city_id_int) }
    remove_column :adverts, :city_id_int



    rename_column :adverts, :city_district_id, :city_district_id_int
    add_column :adverts, :city_district_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:city_district_id, c.city_district_id_int) }
    remove_column :adverts, :city_district_id_int



    rename_column :adverts, :house_type_id, :house_type_id_int
    add_column :adverts, :house_type_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:house_type_id, c.house_type_id_int) }
    remove_column :adverts, :house_type_id_int



    rename_column :adverts, :state_id, :state_id_int
    add_column :adverts, :state_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:state_id, c.state_id_int) }
    remove_column :adverts, :state_id_int


    rename_column :adverts, :user_id, :user_id_int
    add_column :adverts, :user_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:user_id, c.user_id_int) }
    remove_column :adverts, :user_id_int


    rename_column :adverts, :street_id, :street_id_integer

    rename_column :adverts, :street_id, :street_id_int
    add_column :adverts, :street_id, :integer

    Advert.reset_column_information
    Advert.find_each { |c| c.update_attribute(:street_id, c.street_id_int) }
    remove_column :adverts, :street_id_int


    rename_column :city_districts, :city_id, :city_id_int
    add_column :city_districts, :city_id, :integer

    CityDistrict.reset_column_information
    CityDistrict.find_each { |c| c.update_attribute(:city_id, c.city_id_int) }
    remove_column :city_districts, :city_id_int



    rename_column :streets, :city_id, :city_id_int
    add_column :streets, :city_id, :integer

    Street.reset_column_information
    Street.find_each { |c| c.update_attribute(:city_id, c.city_id_int) }
    remove_column :streets, :city_id_int


    rename_column :advert_images, :advert_id, :advert_id_int
    add_column :advert_images, :advert_id, :integer

    AdvertImage.reset_column_information
    AdvertImage.find_each { |c| c.update_attribute(:advert_id, c.advert_id_int) }
    remove_column :advert_images, :advert_id_int


    rename_column :layouts, :advert_id, :advert_id_integer

    rename_column :layouts, :advert_id, :advert_id_int
    add_column :layouts, :advert_id, :integer

    Layout.reset_column_information
    Layout.find_each { |c| c.update_attribute(:advert_id, c.advert_id_int) }
    remove_column :layouts, :advert_id_int



    rename_column :adverts, :post_id, :post_id_int
    add_column :adverts, :post_id, :integer

    PostImage.reset_column_information
    PostImage.find_each { |c| c.update_attribute(:post_id, c.post_id_int) }
    remove_column :adverts, :post_id_int

  end

  def down
  end
end
