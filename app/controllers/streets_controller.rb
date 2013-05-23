class StreetsController < ApplicationController
  def index
    @streets = Street.order(:title).where("title like ?", "%#{params[:street_title]}%")
    render json: @streets.map(&:title)
  end
end
