require 'spec_helper'
require_relative '../../models/thermostat'
require 'json'

describe App do

  def app
    described_class
  end

  it "persists temperature to the database" do
    post '/thermostat', temperature: 18
    expect(Thermostat.first.temperature).to eq(18)
  end

  it "persists power save mode to the database" do
    post '/thermostat', power_saving_mode:"true"
    expect(Thermostat.first.power_saving_mode).to eq("true")
  end

  before do
    post '/thermostat', {temperature: 24, power_saving_mode:"false"}
  end

  it "gets data from server" do
    get '/thermostat'
    expect(last_response.body).to eq({temperature: 24, power_saving_mode:"false"}.to_json)
  end

end
