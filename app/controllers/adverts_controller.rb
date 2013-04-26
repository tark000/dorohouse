class AdvertsController < ApplicationController
  # GET /adverts
  # GET /adverts.json
  def index
    @adverts = Advert.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @adverts }
    end
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

    @city = []
    City.all.each do |n|
      @city << n.title
    end

    @city_district = []
    CityDistrict.all.each do |n|
      @city_district << n.title
    end

    @house_type = []
    City.all.each do |n|
      @house_type << n.title
    end

    @region = []
    Region.all.each do |n|
      @region << n.title
    end

    @state = []
    State.all.each do |n|
      @state << n.title
    end

    @street = []
    Street.all.each do |n|
      @street << n.title
    end

    @type = []
    Type.all.each do |n|
      @type << n.title
    end

    @user = []
    User.all.each do |n|
      @user << n.name
    end

  end



  # GET /adverts/1/edit
  def edit
    @advert = Advert.find(params[:id])


    @city = []
    City.all.each do |n|
      @city << n.title
    end

    @city_district = []
    CityDistrict.all.each do |n|
      @city_district << n.title
    end

    @house_type = []
    City.all.each do |n|
      @house_type << n.title
    end

    @region = []
    Region.all.each do |n|
      @region << n.title
    end

    @state = []
    State.all.each do |n|
      @state << n.title
    end

    @street = []
    Street.all.each do |n|
      @street << n.title
    end

    @type = []
    Type.all.each do |n|
      @type << n.title
    end

    @user = []
    User.all.each do |n|
      @user << n.name
    end

  end

  # POST /adverts
  # POST /adverts.json
  def create
    @advert = Advert.new(params[:advert])

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
end
