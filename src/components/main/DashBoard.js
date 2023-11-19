import React from 'react'
import Sidebar from '../common/Sidebar'
import SubHeader from '../common/SubHeader'
import DashContent from './DashContent'

export default function DashBoard() {
  return (
    <>
        <Sidebar/>
        <section class="home-section">
            <SubHeader/>
            <DashContent/>
        </section>
    </>
  )
}
