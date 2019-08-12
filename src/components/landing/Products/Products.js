import React, { Component, Fragment } from "react";
import * as queryString from "query-string";
import Footer from "../footer/Footer";
import SmallNav from "../SmallNav/SmallNav";
import Navigator from "../../navigation/Navigator";
import Authenticated from "../../misc/HOC/Authenticated";
import Product from "./Product/Product";
import CheckBoxFilter from "../../misc/filters/CheckBoxFilter/CheckBoxFilter";
import { connect } from "react-redux";
import { price } from "../../misc/filters/fixedSelectors";
import {
	getCategories,
	getProductsForShop,
	addLike
} from "../../../actions/productsActions";
import RadioFilter from "../../misc/filters/RadioFilter/RadioFilter";
import { push } from "connected-react-router";
import CategoriesSliders from "./CategorySliders/CategorySliders";
import PaginationComp from "../CustomerAccount/CustomerOrders/OrderTable/Pagination";
import { globalStyle } from "../../../config";
import { object } from "prop-types";

class Products extends Component {
	state = {
		page: 1,
		filters: {
			category: [],
			brand: [],
			price: [],
			likes: [],
			collections: [],
			promo: []
		},
		name: ""
	};

	componentDidMount = () => {
		if (this.props.router.location.search.length > 0) {
			let obj = queryString.parse(this.props.router.location.search);

			for (const key in obj) {
				const element = obj[key];
				if (key === "collections") {
					console.log("happen");
					this.props.getProductsForShop(
						1,
						{ key: [element] },
						null,
						`/products/${this.props.router.location.search}`
					);
				} else {
					console.log("happen collection");
					this.props.getProductsForShop(
						1,
						obj,
						null,
						`/products/${this.props.router.location.search}`
					);
				}
			}
		} else {
			this.props.getProductsForShop();
		}
	};

	inputChangeHandler = e => {
		e.persist();
		console.log("in callback");
		console.log(e.target.value);

		this.setState(function(prevState, props) {
			console.log("in async callback");
			console.log({ isNull: e.target === null });

			console.log(e.target.value);

			return {
				name: e.target.value
			};
		});
	};

	addLikeHandler = productId => {
		this.props.addLike(productId);
	};

	renderSearchComp = () => {
		const { page, filters, name } = this.state;
		return (
			<Fragment>
				<div className="col-md-10 col-sm-12 py-2">
					<div className="form-group">
						<div className="input-group mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="ni ni-zoom-split-in" />
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Search"
								type="text"
								name="name"
								onChange={this.inputChangeHandler}
							/>
						</div>
					</div>
				</div>

				<div className="col-md-2 col-sm-12  py-2">
					<button
						className="btn "
						style={{ backgroundColor: `${globalStyle.backgroundColor}` }}
						onClick={() => {
							this.props.getProductsForShop(page, filters, name);
						}}
					>
						Search
					</button>
				</div>
			</Fragment>
		);
	};

	showFilteredResults = (page, filters) => {
		this.props.getProductsForShop(page, filters);
	};

	handlePrice = selectedId => {
		const data = price;
		console.log(selectedId);
		let array = [];

		for (let key in data) {
			if (data[key]._id === parseInt(selectedId, 10)) {
				array = data[key].array;
			}
		}

		return array;
	};

	handleFilters = (filters, category) => {
		const newFilters = { ...this.state.filters };
		newFilters[category] = filters;

		if (category === "price") {
			let priceValues = this.handlePrice(filters);
			newFilters[category] = priceValues;
		}

		this.showFilteredResults(this.state.page, newFilters);
		this.setState({
			filters: newFilters
		});
	};

	renderFiltersComp = () => {
		return (
			<div>
				{/* <CheckBoxFilter
                    title="categories"
                    list={this.props.categories}
                    handleFilters={(filters) => { this.handleFilters(filters, 'category') }}

                /> */}
				{/* <CheckBoxFilter
                    title="brands"
                    list={this.props.brands}
                    handleFilters={(filters) => { this.handleFilters(filters, 'brand') }}

                /> */}

				<div className="my-2 py-2 text-center">
					<span className="my-1 py-1">Categories</span>
					<CategoriesSliders
						categories={this.props.categories || []}
						handleFilters={this.handleFilters}
						type="category"
					/>
				</div>
				<div className="my-2 py-2 text-center">
					<span className="my-1 py-1">Brands</span>
					<CategoriesSliders
						categories={this.props.brands || []}
						handleFilters={this.handleFilters}
						type="brand"
					/>
				</div>
				<CheckBoxFilter
					title="collections"
					list={this.props.collections}
					handleFilters={filters => {
						this.handleFilters(filters, "collections");
					}}
				/>
				<CheckBoxFilter
					title="onsale deals"
					list={this.props.promocollections}
					handleFilters={filters => {
						this.handleFilters(filters, "promo");
					}}
				/>

				<RadioFilter
					title="price"
					handleFilters={filters => {
						this.handleFilters(filters, "price");
					}}
					list={price}
				/>

				{/* TO-DO BUG DETAILS  */}

				{/* TO-DO BUG DETAILS  */}
			</div>
		);
	};

	renderResultProducts = () => {
		const { productsToShop } = this.props;

		if (productsToShop && productsToShop.products.length > 0) {
			return productsToShop.products.map((product, i) => {
				return (
					<div className="col-md-4 col-lg-4" key={i}>
						<Product product={product} addLike={this.addLikeHandler} />
					</div>
				);
			});
		} else {
		}
	};

	paginateHandler = (dont, page) => {
		this.setState(
			{
				page: page
			},
			() => {
				this.showFilteredResults(page, 10, this.state.filters);
			}
		);
	};

	render() {
		const renderPagination = () => {
			if (
				this.props.productsToShop &&
				this.props.productsToShop.products.length > 0
			) {
				return (
					<PaginationComp
						orders={this.props.productsToShop}
						submitCallback={this.paginateHandler}
					/>
				);
			} else {
				return <h4>Loading..... please wait</h4>;
			}
		};

		return (
			<Fragment>
				<SmallNav
					browser={this.props.browser}
					store={this.props.site && this.props.site.store}
				/>
				<Navigator user={this.props.user} />

				<div className="container my-5">
					<h4 className="display-4 py-4 my-3 text-center">Shop Products</h4>
					<div className="row">{this.renderSearchComp()}</div>

					<div className="row">
						<div className="col-lg-3">{this.renderFiltersComp()}</div>
						<div className="col-lg-9">
							<div className="m-3">{renderPagination()}</div>

							<div className="row">{this.renderResultProducts()}</div>
						</div>
					</div>
				</div>

				<Footer store={this.props.site && this.props.site.store} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.products.categories,
	brands: state.products.brands,
	collections: state.products ? state.products.collections : null,
	promocollections: state.products ? state.products.promocollections : null,
	productsToShop: state.products.productsToShop,
	router: state.router
});

const mapDispatchToProps = {
	getProductsForShop,
	addLike
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Products, true));
