class CreateBusinessInvoices < ActiveRecord::Migration
  def change
    create_table :business_invoices do |t|
      t.float :subtotal
      t.float :tax
      t.float :total
      t.references :order, index: true, foreign_key: true
      t.references :business, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
