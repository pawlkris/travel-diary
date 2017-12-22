class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :description
      t.belongs_to :location, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.string :people_involved
      t.string :photos
      t.string :events

      t.timestamps
    end
  end
end
