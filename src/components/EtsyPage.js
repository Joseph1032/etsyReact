import React from 'react'
import store from '../store'
import {getItems} from '../api/etsy'

class EtsyPage extends React.Component {
	constructor() {
		super()
		this.state = {
			items: []
		}
	}
	componentWillMount() {
	  store.subscribe(() => {
		  const appState = store.getState()
		  this.setState({
			  items: appState.items[0]
		  })
	  })
	  getItems()
}
	render() {
		return (
			<div id="mainCenter">
				{this.state.items.map(item =>(
					<div key={item.listing_id} className="pics">
						<div><img alt="" src={item.Images[0].url_570xN} /></div>
						<div id="description"> 
							<p className="about">{item.title}</p> 
							<p className="shop">{item.Shop.shop_name}</p>
							<p className="price">{'$' + item.price}</p>
						</div>
					</div>
				))}
			</div>
		)
	}
}



export default EtsyPage 