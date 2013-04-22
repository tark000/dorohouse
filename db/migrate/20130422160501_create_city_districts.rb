class CreateCityDistricts < ActiveRecord::Migration
  def change
    create_table :city_districts do |t|
      t.string :title
      t.string :city_id

      t.timestamps
    end
  end
end
