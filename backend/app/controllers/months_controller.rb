class MonthsController < ApplicationController
    before_action :month_inst, only: [:show, :update, :destroy]

    def index 
         months =  Month.all 
         render json: months, include: [:days]
        #  line produces a specific set of data meaning the months and days including all of their attributes
    end

    def show 
    render json: @month
    end 

    def create 
       month = Month.new(month_params)
       if month.valid?
        month.save
        render json:month, status: :created, location: month  
      end
    end

    def destroy
         @month.destroy
    end 

    def update 
      if @month.update(month_params)
         render json: @month
      else

      end 
    end

    private 

     def month_inst
        @month = Month.find(params[:id]) 
     end

     def month_params 
      params.require(:month).permit(:name)
     end
end
