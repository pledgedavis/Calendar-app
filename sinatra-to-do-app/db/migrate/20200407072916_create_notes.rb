class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |n|
      n.string :name
      n.string :description
      n.string :date
      n.integer :user_id
    end
  end
end
