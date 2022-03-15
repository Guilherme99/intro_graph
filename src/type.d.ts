interface ICountry {
    code: number
    name: string
    currency: string
  }
  
  type CountriesState = {
    countries: ICountry[]
  }
  
  type CountryAction = {
    type: string
    countries: CountriesState
  }
  
  type DispatchType = (args: CountryAction) => CountryAction