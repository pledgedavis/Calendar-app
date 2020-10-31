class MonthsController < ApplicationController

    def index 
         months =  Month.all 
         render json: months, include: [:days]
        #  line produces a specific set of data meaning the months and days including all of their attributes
    end

    def show 
     month = Month.find(params[:id]) 
    end 
end
