class Api::TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location_id, :user_id, :start_date, :end_date, :people_involved, :photos, :events
end
