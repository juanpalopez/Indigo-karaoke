class CreateSongListLines < ActiveRecord::Migration
  def change
    create_table :song_list_lines do |t|
      t.references :song_list, index: true, foreign_key: true
      t.references :song, index: true, foreign_key: true
      t.integer :song_list_order

      t.timestamps null: false
    end
  end
end
