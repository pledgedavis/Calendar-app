class DaySerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
   attribute :name, :task, :month
   belongs_to :month
end