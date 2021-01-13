import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { showData } from './mockData/showData'

//Import fetchShows function under different name
import { fetchShow as mockFetchShow} from './api/fetchShow'

jest.mock('./api/fetchShow')

const mockData = showData

test('app fetches and renders data', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData)
    render(<App />)

    await waitFor(() => {
        const showName = screen.getByTestId('showName')
        const description = screen.getByText(/a love letter/i)
        const select = screen.getByText(/select a season/i)
        expect(showName).toHaveTextContent("Stranger Things")
        expect(description)
        expect(select)
    })



    // const seasonOne = screen.getByText('/season 1/i')
        // expect(seasonOne)
        // fireEvent.click(seasonOne)

        // const episodes = screen.getAllByTestId('episode')
})