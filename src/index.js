import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, history } from "./store";
import ReduxToastr from "react-redux-toastr";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes";

// CSS INJECTIONS
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

ReactDOM.render(
	<Provider store={configureStore().store}>
		<ConnectedRouter history={configureStore().history}>
			<div>
				<ReduxToastr
					position="bottom-right"
					transitionIn="fadeIn"
					transitionOut="fadeOut"
				/>

				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>,

	document.getElementById("root")
);
