class RenameImagesToAdvertImages < ActiveRecord::Migration
  def up
    rename_table :images, :advert_images
  end

  def down
  end
end
