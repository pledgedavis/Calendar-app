class DaysController < ApplicationController
    before_action :month_inst, only: [:show, :update, :destroy]

    def index
         days = Day.all
        render json: days
    end

    def show
        render json: @day
    end
    

    def update 
      if @day.update(day_params)
         render json: @day
      end
    end
     


    private 

  def day_inst
     @day = Day.find(params[:id])
  end

  def day_params
       params.require(:day).permit(:name, :task, :month_id, :priority, :length)
  end
end
