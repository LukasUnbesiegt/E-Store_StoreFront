import React from "react";
import "./FooterBottom.css";

function FooterBottom(props) {
	return (
		<div id="footer-bottom">
			<div className="container-fluid">
				<div id="footer-copyrights">
					<div>
						<p>
							Copyrights &copy; 2019 All Rights Reserved by{" "}
							{props.store ? `${props.store.company}` : "sample name"}
						</p>
					</div>
					<div>
						<span style={{ fontSize: "15px" }}>
							made with <span style={{ color: "#e25555" }}>&hearts;</span> by{" "}
							<a
								target="_blank"
								style={{ textDecoration: "none" }}
								href="https://www.facebook.com/profile.php?id=1012194292"
							>
								blackhelios
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterBottom;
