class Product < ActiveRecord::Base
  belongs_to :measure_unit
  belongs_to :product_category
  has_many :order_lines
  has_many :orders, :through => :order_lines
end
