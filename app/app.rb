require 'sinatra/base'
require 'JSON'
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

  get '/thermostat' do
    content_type :json
    { temperature: Thermostat.first.temperature,
      power_saving_mode: Thermostat.first.power_saving_mode }.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
