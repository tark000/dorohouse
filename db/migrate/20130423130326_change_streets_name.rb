class ChangeStreetsName < ActiveRecord::Migration
  def up
      rename_column :adverts, :street, :street_id
  end

  def down
  end
end
