class MonthSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
 
    attribute :name, :year, :day_id
   belongs_to :day
end