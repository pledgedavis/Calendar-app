require 'pry'
class DaysController < ApplicationController
    before_action :day_inst, only: [:show, :update, :destroy]

    def index
         days = Day.all
        render json: days, include: [:month]
      
    end

    def show
        render json: @day
    end
    
    def create 
        # binding.pry
        day = Day.new(day_params)
        if day.valid?
         day.save
         render json: day, status: :created, location: day
       end
     end

    def update 
      if @day.update(day_params)
         render json: @day
      end
    end

    def destroy
        @day.destroy 
    end
     
    private 

  def day_inst
     @day = Day.find(params[:id])
  end

  def day_params
       params.require(:day).permit(:name, :task, :priority, :length, :month_id)
  end
end
