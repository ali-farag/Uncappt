@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :beer_id, :user_id, :review, :rating,
                           :image_url, :location, :user, :beer,
                           :created_at, :likes, :user_likes
  end
end
