import {gql} from "@apollo/client";

export const LOAD_USER = gql `
    query{
        albums{
            data{
                title,
                id
            }
        }
    }
`