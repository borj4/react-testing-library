import react from 'react'
import { render } from '@testing-library/react'
import { List } from './List'
import { prettyDOM } from '@testing-library/react';
import axios from 'axios'
import "@testing-library/jest-dom"


jest.mock('axios')

describe("Test globales de List", () => {

    test("Se hace la petición en List", async () => {
        const component = await render(<List />)
        console.log(prettyDOM(component.container));

        // expect(component.getByText(/qui est esse/i)).toBeInTheDocument()
})
})