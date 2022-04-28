import Layout from '../src/components/Layout';
import client from '../src/components/apoloClient';
import ParentCategoriesBlock from '../src/components/category/ParentCategoriesBlock';
import GET_CATEGORIES from '../src/components/query/get_categories';


export default function Categories ( props ) {

	const { productCategories } = props;

	return (
		<Layout>
		
        <div className="container">
			<div className="row">
                <div className="col l4 m6 s12"> 
				<h2 className="">Categories</h2>
				<ParentCategoriesBlock productCategories={ productCategories }/>
			</div>
            </div>
            </div>
		</Layout>
	)
};

export async function getStaticProps() {

	const {data} = await client.query({
		query: GET_CATEGORIES,
	});

	return {
		props: {
			productCategories: data?.productCategories?.nodes || []
		},
		revalidate: 1
	}

};