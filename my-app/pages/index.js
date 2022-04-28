import Image from 'next/image';
import SliderItem from '../src/components/home/SliderItem';
import Banner from '../src/components/home/Banner';
import BannerIcons from "../src/components/home/BannerIcons"
import Link from 'next/link'
import Layout from '../src/components/Layout';
import ParentCategoriesBlock from '../src/components/category/ParentCategoriesBlock';
import PRODUCTS_AND_CATEGORIES_QUERY from '../src/components/query/PRODUCTS_AND_CATEGORIES_QUERY';
import client from '../src/components/apoloClient';
export default function Home(props) {

	const {  productCategories } = props || {};


	return (
 
		<Layout>
			<div className="carousel carousel-slider">
				<Link className="carousel-item" href="/productos">
					<SliderItem />
				</Link>
			</div>

			<br />
			<div className="container">
				<BannerIcons />
				<Banner />
				<div class="title-container">
					<h3 class="title">Best Sellers</h3>
					<p class="description">Add bestselling products to weekly line up</p>
				</div>
				{/* <ItemListContainer /> */}
			


			{/*Categories*/ }
				<div className="row">

					<h2><span>Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div>
				</div>
		</Layout>
   
	);
}
export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			// products: data?.products?.nodes ? data.products.nodes : [],
			// heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};