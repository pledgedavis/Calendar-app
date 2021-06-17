class Day < ApplicationRecord
    belongs_to :month

    validates :name, :day_number, :task, :priority, :length, presence: true
end

