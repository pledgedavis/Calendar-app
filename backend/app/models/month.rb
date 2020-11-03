class Month < ApplicationRecord
    has_many :days 
    # belongs_to :day
end
