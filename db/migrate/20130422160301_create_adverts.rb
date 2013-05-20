class CreateAdverts < ActiveRecord::Migration
  def change
    create_table :adverts do |t|
      t.string :title
      t.float :price
      t.integer :type_id
      t.integer :region_id
      t.integer :city_id
      t.string :district
      t.float :area
      t.string :street
      t.string :house
      t.integer :city_district_id
      t.integer :room_number
      t.integer :house_type_id
      t.string :floor
      t.float :height
      t.integer :state_id
      t.text :description
      t.string :image
      t.string :layout
      t.string :video
      t.integer :user_id

      t.timestamps
    end
  end
end
