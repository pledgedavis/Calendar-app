class MonthsController < ApplicationController

    def index 
         months =  Month.all 
         render json: months, include: [:days]
    end
end
