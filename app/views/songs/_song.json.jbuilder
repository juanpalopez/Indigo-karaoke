json.extract! song, :id, :name, :author,:time, :icon, :created_at, :updated_at
json.url song_url(song, format: :json)