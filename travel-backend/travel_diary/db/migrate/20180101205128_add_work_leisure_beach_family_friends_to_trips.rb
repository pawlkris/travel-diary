class AddWorkLeisureBeachFamilyFriendsToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :work, :boolean
    add_column :trips, :leisure, :boolean
    add_column :trips, :beach, :boolean
    add_column :trips, :family, :boolean
    add_column :trips, :friends, :boolean
  end
end
