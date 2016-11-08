class CreateOrderLines < ActiveRecord::Migration
  def change
    create_table :order_lines do |t|
      t.integer :item_order
      t.integer :quantity
      t.references :product, index: true, foreign_key: true
      t.float :subtotal

      t.timestamps null: false
    end
  end
end
