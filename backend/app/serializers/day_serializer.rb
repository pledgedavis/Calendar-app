class DaySerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
   attributes :name, :task, :priority, :length, :month_id
   belongs_to :month
end