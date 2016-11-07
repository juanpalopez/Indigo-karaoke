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

ActiveRecord::Schema.define(version: 20161107060850) do

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

end
