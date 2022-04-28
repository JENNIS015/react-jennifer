import React from 'react'

function BannerIcons() {

const content = [
{ title: "Free Shipping",
description:"Online Only. Exclusions Apply",
image: "/image/home/free-shipping.png"
},
{ title: "Best Price",
description:"If You Find a Lower Price",
image: "/image/home/price.png"
},
{ title: "Credit Card",
description:"Online Only. Exclusions Apply",
image: "/image/home/credit-card.png"
},
{ title: "Support 24/7",
description:"Contact us 24 hours a day",
image: "/image/home/support.png"
}
]
return (


<div className='row'>
    {content.map(banner=>
    <div className='col l3 m6 s6'>
 
 
        <div class="advertising banner">
            <div class="advertising__info--icons">
                <span class="advertising__info__title--icons">{banner.title}</span><br></br>
                <span class="advertising__info__title">{banner.description}</span>
            </div>

            <div class="advertising__image--icons">

                <img src={banner.image} alt="" className='banner__image' />
            </div>
        </div>
 

    </div>
    )}

</div>
)
}

export default BannerIcons