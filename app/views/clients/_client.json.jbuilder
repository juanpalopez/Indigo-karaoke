json.extract! client, :id, :name, :first_lastname, :second_lastname, :dni, :phone, :created_at, :updated_at
json.url client_url(client, format: :json)