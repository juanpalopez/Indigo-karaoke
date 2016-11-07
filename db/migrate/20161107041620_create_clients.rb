class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :first_lastname
      t.string :second_lastname
      t.string :dni
      t.string :phone

      t.timestamps null: false
    end
  end
end
