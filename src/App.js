import React, { lazy, Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'

import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from './utils/UserContext'
import { useState } from 'react'

import Cartt from './components/Cartt'

import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const Grocery = lazy(() => import('./components/Grocery'))

const About = lazy(() => import('./components/About'))

// fucntional compoent => that returns a piece of JSX
const AppComponent = () => {
    // assume some authentication api and save it below
    const [userName, setUserName] = useState()

    useEffect(() => {
        // make api call
        const data = { name: 'Pavithra Pishe' }
        setUserName(data.name)
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider
                value={{ loggedInUser: userName, setUserName }}
            >
                <div className="app">
                    {/* <UserContext.Provider value={{ loggedInUser: 'Elon Musk' }}> */}
                    <Header />
                    {/* </UserContext.Provider> */}

                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={() => <h1>im also loading...</h1>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={() => <h1>Loading....</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: <Cartt />,
            },
        ],
    },
])

const mainRoot = ReactDOM.createRoot(document.getElementById('root'))

mainRoot.render(<RouterProvider router={appRouter} />)
