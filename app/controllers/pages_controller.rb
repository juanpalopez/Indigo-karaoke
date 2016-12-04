class PagesController < ApplicationController
  layout 'index', only: [:index]
  layout 'bare', only: [:login]
  layout 'admin', only: [:dashboard]
  
   before_action :authenticate_user!, only: [:reservation]

  def index
  end

  def albums
    @songs = Song.order("RANDOM()").limit(12)
  end

  def events
    @events = Event.all
  end
  
  def about_us
  end 
  
  def reservation
    @reservation = Reservation.new
  end
  
  
end
