class Event < ActiveRecord::Base
  belongs_to :room
  belongs_to :branch
end
