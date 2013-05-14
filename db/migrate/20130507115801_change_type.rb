class ChangeType < ActiveRecord::Migration
  def up
    rename_column :adverts, :type_id, :function_type_id
    rename_table :types, :function_types
  end

  def down
  end
end
