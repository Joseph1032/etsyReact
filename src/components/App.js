import React from 'react';
import EtsyPage from './EtsyPage'
import TopNav from './TopNav'
import SideNav from './SideNav'
import Body from './Body'
import '../assets/styles.css'


class App extends React.Component {
  render() {

    return (
    <div>
      <EtsyPage />
      <TopNav />
      <SideNav />
      <Body />
    </div>
    )
  }
}

export default App
  
