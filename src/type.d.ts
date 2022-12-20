/* interface ICountry {
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
  
  type DispatchType = (args: CountryAction) => CountryAction */

  interface IUser {
    name: string
    email: string
    cpf: string
    age: number
    date: string
  }
  
  type UserState = {
    user: IUser
  }
  
  type UserAction = {
    type: string
    user: UserState
  }
  
  type DispatchType = (args: UserAction) => UserAction