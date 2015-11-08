class Api::V1::MemorialsController < ApplicationController
  def search
    @memorials = Memorial.search(params)
    render json: @memorials
  end

  def show
    @memorial = Memorial.show(params[:id])

    if @memorial
      render json: @memorial
    else
      render json: ["cannot find memorial, id given: #{ params[:id] }"],
        status: :not_found
    end
  end
end
