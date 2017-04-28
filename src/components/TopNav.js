import React from 'react'


export default React.createClass({
    render() {
        return (
            <div className='container'>
                <div id="head">
		<header id="etsy">Etsy</header>
			<div id="searchArea">
				<div id="searchBox">
					<form id="search">
						<input type="text" placeholder="Search for items or shops"/>
						<button id="clickSearch">Search</button>
					</form>
				</div>
				
				 <div id="links">
					<ul id="rightCorner">
						<li><a href='#'>Sell On Etsy</a></li>
						<li><a href='#'>Register</a></li>
						<button id="sign">Sign In</button>
					</ul>
				</div>
			</div> 
		</div> 
	<div id="topLine"></div>
	<div id="navigation">
		<ul id="topCategories">
			<li id="clothes"><a href='#'>Clothing &amp; Accessories</a></li>
			<li id="jewelry"><a href='#'>Jewelry</a></li>
			<li id="tools"><a href='#'>Craft Supplies &amp; Tools</a></li>
			<li id="wedding"><a href='#'>Weddings</a></li>
			<li id="ent"><a href='#'>Entertainment</a></li>
			<li id="home"><a href='#'>Home &amp; Living</a></li>
			<li id="tots"><a href='#'>Kids &amp; Baby</a></li>
			<li id="aged"><a href='#'>Vintage</a></li>
		</ul>
	</div> 
	<div id="topLine2"></div>
            </div>
        )
    }
})