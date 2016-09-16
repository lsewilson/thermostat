require 'data_mapper'
require 'dm-postgres-adapter'

class Thermostat

  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :power_saving_mode, String

end
