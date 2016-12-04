class AddBranchToEvent < ActiveRecord::Migration
  def change
    add_reference :events, :branch, index: true, foreign_key: true
  end
end
