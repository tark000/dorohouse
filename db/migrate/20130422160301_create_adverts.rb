class CreateAdverts < ActiveRecord::Migration
  def change
    create_table :adverts do |t|
      t.string :title
      t.float :price
      t.integer :type_id
      t.string :region_id
      t.string :city_id
      t.string :district
      t.float :area
      t.string :street
      t.string :house
      t.string :city_district_id
      t.integer :room_number
      t.string :house_type_id
      t.string :floor
      t.float :height
      t.string :state_id
      t.text :description
      t.string :image
      t.string :layout
      t.string :video
      t.string :user_id

      t.timestamps
    end
  end
end
