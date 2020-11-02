class DaySerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
   attributes :name, :task, :priority, :length 
   
end