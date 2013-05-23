class ChangeStreetsName < ActiveRecord::Migration
  def up
      rename_column :adverts, :streets, :street_id
  end

  def down
  end
end
