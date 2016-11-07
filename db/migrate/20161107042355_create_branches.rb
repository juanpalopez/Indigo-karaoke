class CreateBranches < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.text :description

      t.timestamps null: false
    end
  end
end
