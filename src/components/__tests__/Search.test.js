import Body from '../../components/Body'
import MOCK_DATA from '../mocks/RestaurantList_Mock.json'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

// mock fetch function
// fetch returns a promise and that promise returns a JSON. then that json has the data.\
// Test
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    })
})

it('should search res list for burger text input', async () => {
    // this "render" its not rendering on browser.
    // Its on JSDom which is browser lke and therefore it doesnt get the access to
    // fetch sicne its coming from browser. so we have to mock "Fetch" function.
    await act(async () =>
        render(
            <BrowserRouter>
                <Body></Body>
            </BrowserRouter>
        )
    )

    const cardsBeforeSearch = screen.getAllByTestId('resCard')
    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole('button', { name: 'Search' })

    // given by data-testid
    const searchInput = screen.getByTestId('searchInput')

    // this is because we are giving "e" event with target and typing value "pizza" inside it
    fireEvent.change(searchInput, { target: { value: 'pizza' } })
    fireEvent.click(searchBtn)
    expect(searchBtn).toBeInTheDocument()

    // screen should load 3 cards
    const cardsAfterSearch = screen.getAllByTestId('resCard')
    expect(cardsAfterSearch.length).toBe(3)
})
