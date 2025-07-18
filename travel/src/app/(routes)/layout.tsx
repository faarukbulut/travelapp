import Footer from '@/components/sections/footer/footer'
import Header from '@/components/sections/header/header'
import React from 'react'

interface RouteLayoutProps{
    children: React.ReactNode;
}

const RouteLayout = ({children} : RouteLayoutProps) => {
  return (
    <div>
        <Header/>
        
        <div className='min-h-screen'>
          {children}
        </div>
        <div className="min-h-64"></div>

        <Footer/>
    </div>
  )
}

export default RouteLayout