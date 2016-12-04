class Branch < ActiveRecord::Base
	has_many :rooms
	has_many :reservations
	has_many :events
end
