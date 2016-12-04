class PosController < ApplicationController
  before_action :set_products, only: [:index, :orders]
  before_action :set_product_categories, only: [:index, :orders]
  layout 'pos_layout'

  def index
  end

  def orders
    set_product_categories
  end

  def payments
  end
  
  private
    def set_products
      @products = Product.all
    end
    
    def set_product_categories
      @product_categories = ProductCategory.all
    end
end
