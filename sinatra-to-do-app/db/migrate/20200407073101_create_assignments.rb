class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |a|
      a.string :name
      a.string :quantity
      a.integer :note_id
    end
  end
end
