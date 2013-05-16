class AddTypeToCompany < ActiveRecord::Migration
  def change
    add_column :adverts, :type, :string
    add_column :companies, :type, :string
  end
end
