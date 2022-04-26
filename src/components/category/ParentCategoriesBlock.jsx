import ParentCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = ( {productCategories }) => {

 console.log("productCategories", productCategories.length)

	return (
		<div className="product-categories">
            
			{ productCategories.length ? (
				productCategories.map( ( productCategory, index ) => <ParentCategoryBlock key={ productCategory.id }  category={ productCategory }/> )
			) : '' }
		</div>
	)

};

export default ParentCategoriesBlock;