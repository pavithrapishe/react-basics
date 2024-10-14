import { act } from 'react'
import RestaurantMenu from '../../components/RestaurantMenu'
import { render, fireEvent, screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/RestaurantMenu_Mock.json'
import { Provider } from 'react-redux'
import appStore from '../../utils/appStore'
import Header from '../../components/Header'
import { BrowserRouter } from 'react-router-dom'
import Cartt from '../../components/Cartt'
import '@testing-library/jest-dom'

// jest.fn is a mock function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
)

it('should load Restaurant Menu component', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header></Header>
                    <RestaurantMenu />
                    <Cartt />
                </Provider>
            </BrowserRouter>
        )
    )

    const accordionHeader = screen.getByText('Hunan Paneer Dry')
    fireEvent.click(accordionHeader)

    const foodItems = screen.getAllByTestId('foodItems')

    expect(foodItems.length).toBe(11)

    const addBtns = screen.getAllByRole('button', { name: 'Add +' })

    fireEvent.click(addBtns[0])

    expect(screen.getByText('🛒 (1)')).toBeInTheDocument()

    fireEvent.click(addBtns[1])

    expect(screen.getByText('🛒 (2)')).toBeInTheDocument()

    // To check if your cart page has 2 items

    expect(screen.getAllByTestId('foodItems').length).toBe(13)

    fireEvent.click(screen.getByRole('button', { name: 'Clear cart' }))

    expect(screen.getAllByTestId('foodItems').length).toBe(11)

    expect(
        screen.getByText('Cart is empty! Add items to the cart!')
    ).toBeInTheDocument()
})
