import ParentCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = ( {productCategories }) => {

 

	return (
		<div className="product-categories">
            
			{ productCategories.length ? (
				productCategories.map( ( productCategory, index ) => <ParentCategoryBlock key={ productCategory?.id ?? index }  category={ productCategory }/>)
			) : '' }
		</div>
	)

};

export default ParentCategoriesBlock;