class DaysController < ApplicationController

    def index
         days = Day.all
        render json: days
    end

    def show
        
    end







    private 

  def day_inst
     @day = Day.find(params[:id])
  end

  def day_params
       params.require(:day).permit(:name, :task, :month_id, :priority, :length)
  end
end
