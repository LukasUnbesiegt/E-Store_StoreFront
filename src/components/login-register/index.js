import React, { Component, Fragment } from "react";
import styles from "./index.module.css";

import LoginRegisterForm from "./Form/index";

class LoginRegister extends Component {
	render() {
		return (
			<Fragment>
				<div className={`${styles.loginformWrapper}`}>
					<LoginRegisterForm />
				</div>
			</Fragment>
		);
	}
}

export default LoginRegister;
