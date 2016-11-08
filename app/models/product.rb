class Product < ActiveRecord::Base
  belongs_to :measure_unit
  belongs_to :product_category
end
