json.extract! city, :id, :name, :lat, :lon, :weather, :created_at, :updated_at
json.url city_url(city, format: :json)