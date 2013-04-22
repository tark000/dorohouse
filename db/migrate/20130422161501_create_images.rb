class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.string :advert_id

      t.timestamps
    end
  end
end
