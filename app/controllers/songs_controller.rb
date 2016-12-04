class SongsController < ApplicationController
    respond_to :html, :json
    # GET /branches
    # GET /branches.json
    def index 
        @songs = Song.all
    end
end
