class AddFalsDefaultToWorkLeisureBeachFriendsFamilyInTrips < ActiveRecord::Migration[5.1]
  def change
    change_column :trips, :work, :boolean, default: true
    change_column :trips, :leisure, :boolean, default: true
    change_column :trips, :beach, :boolean, default: true
    change_column :trips, :friends, :boolean, default: true
    change_column :trips, :family, :boolean, default: true
  end
end
