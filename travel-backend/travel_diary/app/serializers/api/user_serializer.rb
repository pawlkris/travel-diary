class Api::UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :trips
end
