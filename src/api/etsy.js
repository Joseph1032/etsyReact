import store from '../store'
import $ from 'jquery'

export function getItems() {
	$.getJSON("https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?", function(data){
		console.log('data', data)
		store.dispatch({
			type: 'GET_ITEMS',
			items: data.results
		})
	})
}