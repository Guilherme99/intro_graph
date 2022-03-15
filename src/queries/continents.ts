import { gql } from '@apollo/client';

export const QUERY_CONTINENTS = gql`
    query continents{
        continents{
            name
            code
        }  
    }
`;