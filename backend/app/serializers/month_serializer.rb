class MonthSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
 
    attribute :name, :year
    has_many :days
end