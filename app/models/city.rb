class City < ActiveRecord::Base
  validates :lat, :lon, presence: true
  before_validation :geocode

  public
  
    def weather
      if self.lat
        forecast = ForecastIO.forecast(self.lat, self.lon, params: { units: 'si'})     
        result = {}
        result[:summary] = forecast.currently.summary
        result[:current_temp] = forecast.currently.temperature
        result[:current_tempMin] = forecast.currently.temperatureMin
        result[:current_tempMax] = forecast.currently.tempMax
        result[:current_pressure] = forecast.currently.pressure
        result[:current_wind] = forecast.currently.windSpeed
        result[:icon] = forecast.currently.icon
        result
      else
        'unknown'
      end

    end
  
  private
  
  def geocode
    places = Nominatim.search.city(self.name).limit(1)
    if places.first
      self.lat = places.first.lat
      self.lon = places.first.lon
    end
  end
  
end