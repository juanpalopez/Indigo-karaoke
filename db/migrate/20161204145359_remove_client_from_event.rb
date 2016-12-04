class RemoveClientFromEvent < ActiveRecord::Migration
  def change
    remove_reference :events, :client, index: true, foreign_key: true
  end
end
