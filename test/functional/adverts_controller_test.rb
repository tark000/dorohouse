require 'test_helper'

class AdvertsControllerTest < ActionController::TestCase
  setup do
    @advert = adverts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:adverts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create advert" do
    assert_difference('Advert.count') do
      post :create, advert: { area: @advert.area, city_district_id: @advert.city_district_id, city_id: @advert.city_id, description: @advert.description, district: @advert.district, floor: @advert.floor, height: @advert.height, house: @advert.house, house_type_id: @advert.house_type_id, image: @advert.image, layout: @advert.layout, price: @advert.price, region_id: @advert.region_id, room_number: @advert.room_number, state_id: @advert.state_id, street: @advert.street, title: @advert.title, type_id: @advert.type_id, user_id: @advert.user_id, video: @advert.video }
    end

    assert_redirected_to advert_path(assigns(:advert))
  end

  test "should show advert" do
    get :show, id: @advert
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @advert
    assert_response :success
  end

  test "should update advert" do
    put :update, id: @advert, advert: { area: @advert.area, city_district_id: @advert.city_district_id, city_id: @advert.city_id, description: @advert.description, district: @advert.district, floor: @advert.floor, height: @advert.height, house: @advert.house, house_type_id: @advert.house_type_id, image: @advert.image, layout: @advert.layout, price: @advert.price, region_id: @advert.region_id, room_number: @advert.room_number, state_id: @advert.state_id, street: @advert.street, title: @advert.title, type_id: @advert.type_id, user_id: @advert.user_id, video: @advert.video }
    assert_redirected_to advert_path(assigns(:advert))
  end

  test "should destroy advert" do
    assert_difference('Advert.count', -1) do
      delete :destroy, id: @advert
    end

    assert_redirected_to adverts_path
  end
end
