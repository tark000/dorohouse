class CreateStreets < ActiveRecord::Migration
  def change
    create_table :streets do |t|
      t.string :title
      t.string :city_id

      t.timestamps
    end
  end
end
