json.extract! song_list, :id, :date, :hour, :client_id, :created_at, :updated_at
json.url song_list_url(song_list, format: :json)