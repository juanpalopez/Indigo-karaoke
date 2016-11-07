require 'test_helper'

class SongListsControllerTest < ActionController::TestCase
  setup do
    @song_list = song_lists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:song_lists)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create song_list" do
    assert_difference('SongList.count') do
      post :create, song_list: { client_id: @song_list.client_id, date: @song_list.date, hour: @song_list.hour }
    end

    assert_redirected_to song_list_path(assigns(:song_list))
  end

  test "should show song_list" do
    get :show, id: @song_list
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @song_list
    assert_response :success
  end

  test "should update song_list" do
    patch :update, id: @song_list, song_list: { client_id: @song_list.client_id, date: @song_list.date, hour: @song_list.hour }
    assert_redirected_to song_list_path(assigns(:song_list))
  end

  test "should destroy song_list" do
    assert_difference('SongList.count', -1) do
      delete :destroy, id: @song_list
    end

    assert_redirected_to song_lists_path
  end
end
