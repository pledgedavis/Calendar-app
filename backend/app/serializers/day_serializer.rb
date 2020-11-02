class DaySerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
   attribute :name, :task, :month
  
end