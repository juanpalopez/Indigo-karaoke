class Reservation < ActiveRecord::Base
  belongs_to :branch
  belongs_to :room
  belongs_to :client
end
