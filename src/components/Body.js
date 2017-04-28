// Dummy data 

import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className='bodyContainer'>
                <main id="firstRow">
                    <div id="web"><img alt="" src="https://t4.ftcdn.net/jpg/01/28/69/67/500_F_128696794_BctCd7ngKUrcxhQAY8DqtXiZK666DZkE.jpg"/>
                        <h3>Computer Items</h3>
                        <h5>19,532 Items</h5>
                    </div>
                    <div id="road"><img alt="" src="http://37.media.tumblr.com/5a322738a30614ed0b4637a945534149/tumblr_n80ku7qgzc1sa9tk9o1_500.jpg"/>
                        <h3 id="travel">Travel</h3>
                        <h5 id="travelItems">6,433 Items</h5>
                    </div>
                    <div id="matrix"><img alt="" src="http://bashooka.com/wp-content/uploads/2014/01/geometric-patterns-bshk-24.jpg"/>
                        <h3 id="geo">Geometric Designs</h3>
                        <h5 id="geoItems">4,966 Items</h5>
                    </div> 
                </main>
                <main id="secondRow">
                    <div id="jsc"><img alt="" src="https://s-media-cache-ak0.pinimg.com/736x/1c/ba/25/1cba25bf257cea850ed5c2502c41563c.jpg"/>
                        <h3 id="code">Coding</h3>
                        <h5 id="codeItems">2,983 Items</h5>
                    </div>
                    <div id="digi"><img alt="" src="https://ueberschaubarerelevanz.files.wordpress.com/2013/07/matrix1.jpg"/>
                        <h3 id="matrix">Matrix</h3>
                        <h5 id="matrixItems">1,697 Items</h5>
                    </div>
                    <div id="cssPic"><img alt="" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHNCiCSZnCxdyRR8-btrmMwQy0Cpp5Wd2avgSUeykoUUCe07HW"/>
                        <h3 id="css">Tricking</h3>
                        <h5 id="cssItems">1,481 Items</h5>
                    </div>
                    <div id="comp"><img alt="" src="https://s-media-cache-ak0.pinimg.com/736x/45/f3/81/45f38170627106c5a1bf70416ca4c8f6.jpg"/>
                        <h3 id="script">Arsenal</h3>
                        <h5 id="scriptItems">1,337 Items</h5>
                    </div>
                </main>

                <div id="mainLine"></div>
                
                <ul id="mainCenter"></ul>
            </div>
        )
    }
})