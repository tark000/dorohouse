class RemoveType < ActiveRecord::Migration
  def up
    remove_column :posts, :type
    remove_column :companies, :type
  end

  def down
  end
end
