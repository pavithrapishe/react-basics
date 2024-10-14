import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../mocks/RestaurantCard_Mock.json'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('should render Restaurant Card component ', () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText('Imperio Restaurant')
    expect(name).toBeInTheDocument()
})

xit('should render Restaurant Card component with Im Open! label', () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const labelText = screen.getByText('Im Open!')
    expect(labelText).toBeInTheDocument()
})
