class AdvertsController < ApplicationController
  # GET /adverts
  # GET /adverts.json

  helper_method :sort_column, :sort_direction
  def index
    @adverts = Advert.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 3, :page => params[:page])
    if params[:rend] == "all" || params[:rend] == nil
      @adverts = Advert.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 3, :page => params[:page])
    else
      @adverts = Advert.where(:category => params[:rend]).search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 3, :page => params[:page])
    end

    @adverts = @adverts.category_search(params[:category]) if params[:category].present?
    @adverts = @adverts.city_search(params[:city_id]) if params[:city_id].present?
    @adverts = @adverts.state_search(params[:state_id]) if params[:state_id].present?
    @adverts = @adverts.floor_search(params[:floor]) if params[:floor].present?
    @adverts = @adverts.room_number_search(params[:room_number]) if params[:room_number].present?
    @adverts = @adverts.min_price_search(params[:min_price]) if params[:min_price].present?
    @adverts = @adverts.max_price_search(params[:max_price]) if params[:max_price].present?
    @adverts = @adverts.min_area_search(params[:min_area])if params[:min_area].present?
    @adverts = @adverts.max_area_search(params[:max_area])if params[:max_area].present?
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @adverts }
    end
  end

  def search
    @adverts = @adverts.category_search(params[:category]) if params[:category].present?
    @adverts = @adverts.city_search(params[:city_id]) if params[:city_id].present?
    @adverts = @adverts.state_search(params[:state_id]) if params[:state_id].present?
    @adverts = @adverts.floor_search(params[:floor]) if params[:floor].present?
    @adverts = @adverts.room_number_search(params[:room_number]) if params[:room_number].present?
    @adverts = @adverts.min_price_search(params[:min_price]) if params[:min_price].present?
    @adverts = @adverts.max_price_search(params[:max_price]) if params[:max_price].present?
    @adverts = @adverts.min_area_search(params[:min_area])if params[:min_area].present?
    @adverts = @adverts.max_area_search(params[:max_area])if params[:max_area].present?
  end

  # GET /adverts/1
  # GET /adverts/1.json
  def show
    @advert = Advert.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @advert }
    end
  end

  # GET /adverts/new
  # GET /adverts/new.json
  def new
    @advert = Advert.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @advert }
    end


  end



  # GET /adverts/1/edit
  def edit
    @advert = Advert.find(params[:id])



  end

  # POST /adverts
  # POST /adverts.json
  def create
    @advert = Advert.new(params[:advert])
    @advert.user = current_user
    respond_to do |format|
      if @advert.save
        format.html { redirect_to @advert, notice: 'Advert was successfully created.' }
        format.json { render json: @advert, status: :created, location: @advert }
      else
        format.html { render action: "new" }
        format.json { render json: @advert.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /adverts/1
  # PUT /adverts/1.json
  def update
    @advert = Advert.find(params[:id])
    @advert.user_id = current_user.id
    respond_to do |format|
      if @advert.update_attributes(params[:advert])
        format.html { redirect_to @advert, notice: 'Advert was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @advert.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /adverts/1
  # DELETE /adverts/1.json
  def destroy
    @advert = Advert.find(params[:id])
    @advert.destroy

    respond_to do |format|
      format.html { redirect_to adverts_url }
      format.json { head :no_content }
    end
  end


  private

  def sort_column
     params[:sort] || "title"
  end

  def sort_direction
    params[:direction] || "asc"
  end
end
