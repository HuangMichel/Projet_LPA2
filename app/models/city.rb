class City < ActiveRecord::Base
  before_create :geocode

  public
  
    def forecast_io
      forecast = ForecastIO.forecast(self.lat, self.lon, params: { units: 'si'})

      result={}    

      result[:current_wind]=forecast.currently.windSpeed

      result[:icon]=forecast.currently.icon

      result[:summary]=forecast.currently.summary

      result[:current_temp]=forecast.currently.temperature

result
    end
  
  private
  
  def geocode
    places = Nominatim.search.city(self.name).limit(1)
    self.lat = places.first.lat
    self.lon = places.first.lon
  end
  
end
