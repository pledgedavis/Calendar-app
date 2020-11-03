class CreateMonths < ActiveRecord::Migration[6.0]
  def change
    create_table :months do |t|
      t.string :name
      t.integer :year
      t.timestamps
    end
  end
end
