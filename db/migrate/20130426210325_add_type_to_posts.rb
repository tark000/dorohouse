class AddTypeToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :type, :string

  end

  def down
    remove_column :posts, :category_id
  end
end
