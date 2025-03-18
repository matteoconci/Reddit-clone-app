import React from 'react'
import Header from '../Header/Header'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <Header />
        <main>
            <LeftSideBar />
            <Outlet />
        </main>
    </>
  )
}

export default Root