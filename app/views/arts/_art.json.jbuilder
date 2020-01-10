json.extract! art, :id, :title, :description, :author, :year, :photo, :district_id, :category_id, :created_at, :updated_at
json.url art_url(art, format: :json)
