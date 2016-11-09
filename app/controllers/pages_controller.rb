class PagesController < ApplicationController
  layout 'bare', only: [:login]
  layout 'admin', only: [:dashboard]

  def index
  end

  def about_us
  end

  def contact_us
  end
  
  def login
  end
  
  def dashboard
  end


end
