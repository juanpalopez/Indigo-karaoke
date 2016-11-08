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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161108215157) do

  create_table "artists", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "branches", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "phone"
    t.string   "email"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "business_invoices", force: :cascade do |t|
    t.float    "subtotal"
    t.float    "tax"
    t.float    "total"
    t.integer  "order_id"
    t.integer  "business_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "business_invoices", ["business_id"], name: "index_business_invoices_on_business_id"
  add_index "business_invoices", ["order_id"], name: "index_business_invoices_on_order_id"

  create_table "businesses", force: :cascade do |t|
    t.string   "ruc"
    t.string   "name"
    t.string   "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string   "name"
    t.string   "first_lastname"
    t.string   "second_lastname"
    t.string   "dni"
    t.string   "phone"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body"
    t.integer  "client_id"
    t.integer  "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["client_id"], name: "index_comments_on_client_id"
  add_index "comments", ["room_id"], name: "index_comments_on_room_id"

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.date     "date"
    t.time     "hour"
    t.text     "description"
    t.integer  "capacity"
    t.integer  "room_id"
    t.integer  "client_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "events", ["client_id"], name: "index_events_on_client_id"
  add_index "events", ["room_id"], name: "index_events_on_room_id"

  create_table "measure_units", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_lines", force: :cascade do |t|
    t.integer  "item_order"
    t.integer  "quantity"
    t.integer  "product_id"
    t.float    "subtotal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "order_lines", ["product_id"], name: "index_order_lines_on_product_id"

  create_table "orders", force: :cascade do |t|
    t.date     "date"
    t.time     "time"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "orders", ["client_id"], name: "index_orders_on_client_id"

  create_table "person_invoices", force: :cascade do |t|
    t.float    "total"
    t.integer  "order_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "person_invoices", ["order_id"], name: "index_person_invoices_on_order_id"

  create_table "product_categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.float    "price"
    t.float    "stock"
    t.integer  "measure_unit_id"
    t.integer  "product_category_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "products", ["measure_unit_id"], name: "index_products_on_measure_unit_id"
  add_index "products", ["product_category_id"], name: "index_products_on_product_category_id"

  create_table "reservations", force: :cascade do |t|
    t.date     "date"
    t.time     "hour"
    t.text     "description"
    t.integer  "room_id"
    t.integer  "client_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reservations", ["client_id"], name: "index_reservations_on_client_id"
  add_index "reservations", ["room_id"], name: "index_reservations_on_room_id"

  create_table "rooms", force: :cascade do |t|
    t.string   "name"
    t.integer  "capacity"
    t.text     "description"
    t.integer  "branch_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "rooms", ["branch_id"], name: "index_rooms_on_branch_id"

  create_table "song_list_lines", force: :cascade do |t|
    t.integer  "song_list_id"
    t.integer  "song_id"
    t.integer  "song_list_order"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "song_list_lines", ["song_id"], name: "index_song_list_lines_on_song_id"
  add_index "song_list_lines", ["song_list_id"], name: "index_song_list_lines_on_song_list_id"

  create_table "song_lists", force: :cascade do |t|
    t.string   "name"
    t.date     "date"
    t.time     "hour"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "song_lists", ["client_id"], name: "index_song_lists_on_client_id"

  create_table "songs", force: :cascade do |t|
    t.string   "name"
    t.integer  "artist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "songs", ["artist_id"], name: "index_songs_on_artist_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
