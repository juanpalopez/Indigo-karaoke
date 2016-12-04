class AddAttachmentIconToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :icon
    end
  end

  def self.down
    remove_attachment :songs, :icon
  end
end
