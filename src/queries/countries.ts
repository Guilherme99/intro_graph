import { gql } from '@apollo/client';

export const QUERY_CONTINENT_COUNTRIES = gql`
    query continent($code: String!) {
        continents(filter: {code: {in : [$code]}}){
          countries{
            code
            name 
            currency
          }
        }
      }
`;