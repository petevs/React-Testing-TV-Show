import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Episodes from './Episodes'
import { showData } from '../mockData/showData'


const episodes = showData.data._embedded.episodes

test("renders without errors", () => {
    render(<Episodes episodes={episodes}/>)
})