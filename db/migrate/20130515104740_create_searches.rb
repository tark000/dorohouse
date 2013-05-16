class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :title
      t.string :category
      t.integer :city_id
      t.decimal :min_price
      t.decimal :max_price
      t.decimal :min_area
      t.decimal :max_area
      t.integer :state_id
      t.integer :room_number
      t.float :floor

      t.timestamps
    end
  end
end
