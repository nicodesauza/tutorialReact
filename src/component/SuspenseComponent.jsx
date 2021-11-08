import React, { useEffect, Suspense } from 'react'
import axios from 'axios'

const fetchData = () => {
    const userPromise = fetchUser()
    // const postsPromise = fetchPost()

    return {
        user: wrapPromise(userPromise),
        // post: wrapPromise(postsPromise)
    }
}

const wrapPromise = (promise) => {
    let status = 'pendings';
    let result;
    let suspender = promise.then(
        res => {
            console.log('res')
            status = 'success';
            result = res
        },
        err => {
            console.log('err')
            status = 'error';
            result = err
        }
    )
    console.log(status, "status")

    return {
        read() {
            // throw suspender
            if (status === 'pendings') {
                console.log(1)
                throw suspender
            } else if (status === 'error') {
                console.log(2)
                throw result
            } else if (status === 'success') {
                console.log(3)
                return result
            }
        }
    }
}

const fetchUser = async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => err)
}

const fetchPost = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).catch(err => console.log(err))
}

const resource = fetchData()
const AllUsers = () => {
    const users = resource.user.read()
    return (
        // <div>haloo gais</div>
        // users.map(user => {
        <div className="font-bold text-blue-900">{users.name}</div>
        // })
    )
}

const SuspenseComponent = () => {
    return (
        <Suspense fallback={<h1>Loading User..</h1>}>
            <AllUsers />
        </Suspense>
    )
}

export default SuspenseComponent
