class BusinessInvoice < ActiveRecord::Base
  belongs_to :order
  belongs_to :business
end
