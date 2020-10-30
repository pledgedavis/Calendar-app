class MonthSerializer < ActiveModel::Serializer
   attributes :name, :year, :priority, :length 
end