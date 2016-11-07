class SongListsController < ApplicationController
  before_action :set_song_list, only: [:show, :edit, :update, :destroy]

  # GET /song_lists
  # GET /song_lists.json
  def index
    @song_lists = SongList.all
  end

  # GET /song_lists/1
  # GET /song_lists/1.json
  def show
  end

  # GET /song_lists/new
  def new
    @song_list = SongList.new
  end

  # GET /song_lists/1/edit
  def edit
  end

  # POST /song_lists
  # POST /song_lists.json
  def create
    @song_list = SongList.new(song_list_params)

    respond_to do |format|
      if @song_list.save
        format.html { redirect_to @song_list, notice: 'Song list was successfully created.' }
        format.json { render :show, status: :created, location: @song_list }
      else
        format.html { render :new }
        format.json { render json: @song_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /song_lists/1
  # PATCH/PUT /song_lists/1.json
  def update
    respond_to do |format|
      if @song_list.update(song_list_params)
        format.html { redirect_to @song_list, notice: 'Song list was successfully updated.' }
        format.json { render :show, status: :ok, location: @song_list }
      else
        format.html { render :edit }
        format.json { render json: @song_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /song_lists/1
  # DELETE /song_lists/1.json
  def destroy
    @song_list.destroy
    respond_to do |format|
      format.html { redirect_to song_lists_url, notice: 'Song list was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song_list
      @song_list = SongList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def song_list_params
      params.require(:song_list).permit(:date, :hour, :client_id)
    end
end
