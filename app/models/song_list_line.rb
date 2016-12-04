class SongListLine < ActiveRecord::Base
  belongs_to :song_list
  belongs_to :song
end
