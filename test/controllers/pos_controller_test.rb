require 'test_helper'

class PosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get order" do
    get :order
    assert_response :success
  end

  test "should get payment" do
    get :payment
    assert_response :success
  end

end
