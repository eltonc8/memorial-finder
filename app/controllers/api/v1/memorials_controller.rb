class Api::V1::MemorialsController < ApplicationController
  def search
    @memorials = Memorial.search(params)
    render json: @memorials
  end
end
