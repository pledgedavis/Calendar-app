class Day < ApplicationRecord
    belongs_to :month

    validates :name, :day_number, :task, :priority, :length, presence: true
    validates :name, length: { maximum: 9 }
    validates :task, length: { maximum: 30 }
    validates :length, length: { maximum: 20 }
    




end

