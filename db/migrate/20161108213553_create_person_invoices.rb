class CreatePersonInvoices < ActiveRecord::Migration
  def change
    create_table :person_invoices do |t|
      t.float :total
      t.references :order, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
