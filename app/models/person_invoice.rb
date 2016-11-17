class PersonInvoice < ActiveRecord::Base
  belongs_to :order
end
