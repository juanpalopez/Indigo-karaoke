class PagesController < ApplicationController
  layout 'index', only: [:index]
  layout 'bare', only: [:login]
  layout 'admin', only: [:dashboard]

  def index
  end

  def albumns
  end

  def events
  end
  
  def reservation
    @reservation = Reservation.new
  end
  
  
end
