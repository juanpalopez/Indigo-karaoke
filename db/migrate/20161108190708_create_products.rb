class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.float :stock
      t.references :measure_unit, index: true, foreign_key: true
      t.references :product_category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
