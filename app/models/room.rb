class Room < ActiveRecord::Base
  belongs_to :branch
  has_many :comments
  has_many :reservations
  has_many :events
end
