class TitleToImage < ActiveRecord::Migration
  def up
    rename_column :advert_images, :title, :image
  end

  def down
  end
end
