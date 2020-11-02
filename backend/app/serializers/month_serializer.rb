class MonthSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
   attributes :name, :year, :priority, :length 
   belongs_to :day
end