import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, gql } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { LOAD_USER } from "../Graphql/query"

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`graphqlError ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({ uri: "https://graphqlzero.almansi.me/api" })
])


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

const GetUser = () => {

    const { error, data, loading } = useQuery(LOAD_USER)
    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>halo</div>
    )

}

const GraphqlComponent = () => {
    return (
        <ApolloProvider client={client}>
            <GetUser />
        </ApolloProvider>
    )
}

export default GraphqlComponent
