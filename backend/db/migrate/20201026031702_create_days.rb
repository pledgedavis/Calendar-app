class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.string :name
      t.integer :day_number
      t.string :task
      t.string :priority
      t.string :length
      t.integer :month_id
      t.timestamps
    end
  end
end
