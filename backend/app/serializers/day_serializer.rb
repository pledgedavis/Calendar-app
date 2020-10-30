class DaySerializer < ActiveModel::Serializer
   attribute :name, :task, :month
   belongs_to :month
end