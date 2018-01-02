class Api::TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :city, :state, :country, :user_id, :start_date, :end_date, :people_involved, :photos, :events, :work, :leisure, :beach, :family, :friends
end
