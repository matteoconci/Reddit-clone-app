import React from 'react'
import Header from '../Header/Header'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import { Outlet } from 'react-router-dom'
import PostList from '../PostList/PostList'

const Root = () => {
  return (
    <>
        <Header />
        <main>
            <LeftSideBar />
            <PostList />
            <Outlet />
        </main>
    </>
  )
}

export default Root