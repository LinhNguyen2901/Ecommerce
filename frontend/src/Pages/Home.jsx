import React from 'react'
import Main from '../Component/Main/Main'
import WomenPopular from '../Component/WomenPopular/WomenPopular'
import NewCollection from '../Component/NewCollection/NewCollection'
import Subscribe from '../Component/Subscribe/Subscribe'

export default function Home() {
  return (
    <div>
      <Main/>
      <WomenPopular/>
      <NewCollection/>
      <Subscribe/>
    </div>
  )
}
