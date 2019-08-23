import React, { Component } from "react";

class index extends Component {
	render() {
		const { collection } = this.props;

		return (
			<section>
				<div className="">
					<h5 className="text-center  display-4">{collection.name}</h5>
					<img
						src={collection.image}
						style={{
							cursor: "pointer"
						}}
						className="img-fluid my-2  shadow"
						onClick={() => {
							this.props.push(
								`/collection/?type=collections&id=${collection._id}`
							);
						}}
					/>
				</div>
			</section>
		);
	}
}

export default index;
