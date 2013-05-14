class AddCategoryToAdvert < ActiveRecord::Migration
  def change
    add_column :adverts, :category, :string
    remove_column :adverts, :type
  end
end
