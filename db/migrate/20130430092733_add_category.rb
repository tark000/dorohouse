class AddCategory < ActiveRecord::Migration
  def up
    add_column :companies, :category, :string
    add_column :posts, :category, :string
  end

  def down
    remove_column :posts, :type
    remove_column :companies, :type
  end
end
