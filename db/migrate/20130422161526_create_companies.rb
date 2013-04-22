class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :title
      t.string :address
      t.string :phone
      t.string :mail
      t.string :site
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
