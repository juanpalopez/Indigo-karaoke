class RemoveArtistFromSong < ActiveRecord::Migration
  def change
    remove_reference :songs, :artist, index: true, foreign_key: true
  end
end
