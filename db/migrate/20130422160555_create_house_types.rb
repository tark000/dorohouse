class CreateHouseTypes < ActiveRecord::Migration
  def change
    create_table :house_types do |t|
      t.string :title

      t.timestamps
    end
  end
end
