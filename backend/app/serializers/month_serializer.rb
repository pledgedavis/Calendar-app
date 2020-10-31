class MonthSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
   attributes :name, :year, :priority, :length 
end