class Api::V1::MemorialsController < ApplicationController
  def search
    begin
      @memorials = Memorial.search(params)
      render json: @memorials
    rescue
      render json: ["error with request"], status: :bad_request
    end
  end

  def show
    begin
      @memorial = Memorial.show(params[:id])

      if @memorial
        render json: @memorial
      else
        render json: ["cannot find memorial, id given: #{ params[:id] }"],
          status: :not_found
      end
    rescue
      render json: ["error with request"], status: :bad_request
    end
  end
end
