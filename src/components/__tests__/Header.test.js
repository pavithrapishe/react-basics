import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import appStore from '../../utils/appStore'

it('Should load Header component with Login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
})

it('Should load Header component with cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText('🛒 (0)')
    expect(cartItems).toBeInTheDocument()
})

it('Should load Header component with cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/🛒/) // This uses Regex
    expect(cartItems).toBeInTheDocument()
})

it('Should change Login button to Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'Login' })

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button', { name: 'Logout' })

    expect(logoutButton).toBeInTheDocument()
})
