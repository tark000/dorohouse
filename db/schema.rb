# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130515104740) do

  create_table "advert_images", :force => true do |t|
    t.string   "image"
    t.integer  "advert_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "adverts", :force => true do |t|
    t.string   "title"
    t.float    "price"
    t.integer  "function_type_id"
    t.integer  "region_id"
    t.integer  "city_id"
    t.float    "area"
    t.string   "street_id"
    t.string   "house"
    t.integer  "city_district_id"
    t.integer  "room_number"
    t.integer  "house_type_id"
    t.string   "floor"
    t.float    "height"
    t.integer  "state_id"
    t.text     "description"
    t.string   "image"
    t.string   "layout"
    t.string   "video"
    t.integer  "user_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "category"
  end

  create_table "cities", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "city_districts", :force => true do |t|
    t.string   "title"
    t.integer  "city_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "companies", :force => true do |t|
    t.string   "title"
    t.string   "address"
    t.string   "phone"
    t.string   "mail"
    t.string   "site"
    t.string   "image"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "category"
  end

  create_table "function_types", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "house_types", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "layouts", :force => true do |t|
    t.string   "image"
    t.integer  "advert_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "post_images", :force => true do |t|
    t.string   "image"
    t.integer  "post_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "posts", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "image"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "category"
  end

  create_table "regions", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "searches", :force => true do |t|
    t.string   "title"
    t.string   "category"
    t.integer  "city_id"
    t.decimal  "min_price",   :precision => 10, :scale => 0
    t.decimal  "max_price",   :precision => 10, :scale => 0
    t.decimal  "min_area",    :precision => 10, :scale => 0
    t.decimal  "max_area",    :precision => 10, :scale => 0
    t.integer  "state_id"
    t.integer  "room_number"
    t.float    "floor"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
  end

  create_table "states", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "streets", :force => true do |t|
    t.string   "title"
    t.integer  "city_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

end
