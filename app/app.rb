require 'sinatra/base'
require_relative 'data_mapper_setup'
require_relative 'models/thermostat'
require 'data_mapper'

ENV["RACK_ENV"] ||= "development"

class App < Sinatra::Base
  get '/' do
    erb(:index)
  end

  post '/thermostat' do
    Thermostat.first_or_create(:id=>1).update(temperature: params[:temperature], power_saving_mode: params[:power_saving_mode])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
