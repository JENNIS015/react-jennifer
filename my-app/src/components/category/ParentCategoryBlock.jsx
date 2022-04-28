import React from 'react'
import Link from 'next/link';
import { DEFAULT_CATEGORY_IMG_URL } from '../constants/constant';
function ParentCategoryBlock(props) {
 const { category } = props;

 console.log(props)
	return (
      
		<div className="col l5 m5 s12">
	     <Link href={`/category/${category?.slug}`}>
        	<a>
					<img
						className=""
						src={ category?.image?.sourceUrl ?? '' }
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=DEFAULT_CATEGORY_IMG_URL
                          }}
			
						altText={category?.slug}
					/>
					<div className="product-title">
						<h3>{category?.name}</h3>
						<span className="shop-now text-sm">+ Explore</span>
					</div></a>
			</Link>
		</div>
	);
}

export default ParentCategoryBlock