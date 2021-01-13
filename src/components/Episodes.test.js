import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Episodes from './Episodes'
import { showData } from '../mockData/showData'


const episodes = showData.data._embedded.episodes

test("renders without errors", () => {
    render(<Episodes episodes={episodes}/>)
})

test("shows list of episode names", () => {
    render(<Episodes episodes={episodes}/>)
    const episodeList = screen.queryAllByTestId('episode')
    expect(episodeList[0]).toHaveTextContent(/chapter one/i)
    expect(episodeList[0]).toHaveTextContent(/episode 1/i)
    expect(episodeList[0]).toHaveTextContent(/60 minutes/i)
}) 