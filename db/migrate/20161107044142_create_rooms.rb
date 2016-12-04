class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :capacity
      t.text :description
      t.references :branch, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
