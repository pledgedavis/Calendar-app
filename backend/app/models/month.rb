class Month < ApplicationRecord
    has_many :days 
    # validates :month, :name, uniqueness: true 
    # belongs_to :day
end
