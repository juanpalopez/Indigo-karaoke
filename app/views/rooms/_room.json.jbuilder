json.extract! room, :id, :name, :capacity, :description, :branch_id, :created_at, :updated_at
json.url room_url(room, format: :json)