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
        expect(screen.getByTestId('showName'))
    })
})