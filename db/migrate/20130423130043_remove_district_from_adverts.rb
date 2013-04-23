class RemoveDistrictFromAdverts < ActiveRecord::Migration
  def up
    remove_column :adverts, :district
  end

  def down
    add_column :adverts, :district, :string
  end
end
