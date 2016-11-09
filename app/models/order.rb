class Order < ActiveRecord::Base
  belongs_to :client
  has_one :business_invoice
  has_one :person_invoice
  has_many :order_lines
  has_many :products, :through => :order_lines
end
