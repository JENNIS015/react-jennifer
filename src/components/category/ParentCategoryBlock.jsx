import React from 'react'
import { Link } from "react-router-dom";
import { DEFAULT_CATEGORY_IMG_URL } from '../constants/constant';
function ParentCategoryBlock(category) {
 
	return (
      
		<div className="product mb-5">
	
        	<Link to={`/category/${category.category.slug}`}>
					<img
						className=""
						src={ category?.category.image?.sourceUrl ?? '' }
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=DEFAULT_CATEGORY_IMG_URL
                          }}
			
						altText={category.category.slug}
					/>
					<div className="product-title">
						<h3>{category.category.name}</h3>
						<span className="shop-now text-sm">+ Explore</span>
					</div>
		
			</Link>
		</div>
	);
}

export default ParentCategoryBlock