import React, { Component, Fragment } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { connect } from "react-redux";
import { globalStyle } from "../../../../../config";

class PaginationComp extends Component {
	render() {
		let lastPage, hasNextPage, hasPreviousPage, currentPage;
		if (this.props.orders) {
			lastPage = this.props.orders.lastPage;
			hasNextPage = this.props.orders.hasNextPage;
			hasPreviousPage = this.props.orders.hasPreviousPage;
			currentPage = this.props.orders.currentPage;
		}

		const renderPagination = () => {
			if (lastPage) {
				return Array.from(Array(lastPage), (item, index) => {
					let isActive;
					if (this.props.orders && index + 1 === currentPage) {
						isActive = `${globalStyle.backgroundColor}`;
					} else {
						isActive = "transparent";
					}

					return (
						<PaginationItem>
							<PaginationLink
								style={{
									backgroundColor: isActive
								}}
								onClick={() => {
									if (this.props.orders) {
										this.props.submitCallback(null, index + 1);
									}
								}}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					);
				});
			}
		};

		return (
			<div>
				<Pagination aria-label="Page navigation example">
					{hasPreviousPage && (
						<PaginationItem>
							<PaginationLink
								previous
								onClick={() => {
									if (this.props.orders) {
										this.props.submitCallback(
											null,
											this.props.orders.currentPage - 1
										);

										console.log(this.props.orders.currentPage - 1);
									}
								}}
							/>
						</PaginationItem>
					)}

					{renderPagination()}

					{hasNextPage && (
						<PaginationItem>
							<PaginationLink
								next
								onClick={() => {
									if (this.props.orders) {
										this.props.submitCallback(
											null,
											this.props.orders.currentPage + 1
										);

										console.log(this.props.orders.currentPage + 1);
									}
								}}
							/>
						</PaginationItem>
					)}
				</Pagination>
			</div>
		);
	}
}

export default PaginationComp;
