import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

// you can nest describe block as well.
describe('Contact Us Page test cases', () => {
    // test or it one and the same.

    it('Should load Contact Us component', () => {
        render(<Contact />)

        // Query
        const heading = screen.getByRole('heading')

        // Assertion
        expect(heading).toBeInTheDocument()
    })

    it('Should load Button inside Contact Us component', () => {
        render(<Contact />)

        const button = screen.getByRole('button')
        // for textbox give "textbox" not "input"
        // getAllBy.... will give an array of JSX element(Object)

        expect(button).toBeInTheDocument()
    })

    test('Should load Button inside Contact Us component', () => {
        render(<Contact />)

        const inputName = screen.getByPlaceholderText('name')

        expect(inputName).toBeInTheDocument()
    })

    test('Should load 2 input boxes inside Contact Us component', () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole('textbox')

        expect(inputBoxes.length).toBe(2)
        expect(inputBoxes.length).not.toBe(3)
    })
})
