class MonthSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
 
    attribute :name
    has_many :days
end