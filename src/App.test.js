import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { showData } from './mockData/showData'

//Import fetchShows function under different name
import { fetchShow as mockFetchShow} from './api/fetchShow'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

jest.mock('./api/fetchShow')

const mockData = showData

test("renders with data", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const {rerender, getByText } = render(<App />)
    screen.debug();
    // await act(async () => {
    //     await rerender(<App />);
    //     screen.debug();
    // })

    //Alternative way to do it...
    await waitFor( async () => {
        screen.debug();
    })
    const showName = screen.getByTestId('showName')
    const description = screen.getByText(/a love letter/i)
    const dropDown = getByText(/select a season/i)
    userEvent.click(dropDown)
    screen.debug()
    const seasonOne = getByText(/season 1/i)
    expect(seasonOne)
    expect(showName)
    expect(description)

    const episodes = screen.getAllByTestId('episode')
    expect(episodes)
})