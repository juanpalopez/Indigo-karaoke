class CreateSongLists < ActiveRecord::Migration
  def change
    create_table :song_lists do |t|
      t.string :name
      t.date :date
      t.time :hour
      t.references :client, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
