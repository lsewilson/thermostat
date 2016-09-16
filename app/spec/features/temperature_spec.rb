require 'spec_helper'
require_relative '../../models/thermostat'

describe App do

  def app
    described_class
  end

  it "persists temperature to the database" do
    expect{post '/thermostat', temperature:18}.to change{Thermostat.count}.by(1)
  end

  it "persists power save mode to the database" do
    post '/thermostat', power_saving_mode:"true"
    expect(Thermostat.first.power_saving_mode).to eq("true")
  end
end
