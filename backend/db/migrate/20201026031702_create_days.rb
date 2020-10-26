class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.string :name
      t.string :task
      t.string :month_id
      t.string :priority
      t.string :time

      t.timestamps
    end
  end
end
