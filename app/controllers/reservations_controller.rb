class ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
    
        respond_to do |format|
            if @reservation.save
                format.html { redirect_to pages_reservation_path, notice: 'Se generó la reserva satifactoriamente.' }
                format.json { render :show, status: :created, location: @reservation }
            else
                format.html { render :new }
                format.json { render json: @reservation.errors, status: :unprocessable_entity }
            end
        end
    end
    
    private
    
    def reservation_params
      params.require(:reservation).permit(:date, :hour, :description, :branch, :room, :client)
    end
    
end
