import {
	LOGIN_USER,
	AUTH_USER,
	REGISTER_USER,
	USER_SERVER,
	LOGOUT_USER,
	GET_ERRORS
} from "./types";
import { toastr } from "react-redux-toastr";
import { reset, change } from "redux-form";
import authService from "../services/authService";
import axiosService from "../services/axiosService";
import { asyncActionStart, asyncActionFinish } from "./asyncActions";
import { push, replace } from "connected-react-router";
import axios from "axios";
import { isEmpty } from "../utils/isEmpty";
import { endpoint, prodEndpoint } from "../config";
import { getProductsToTable } from "./productsActions";

const URL = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint;
const axiosInstance = axiosService.getInstance();

export function loginUser(dataToSubmit, callback) {
	return async dispatch => {
		try {
			const response = await axios.post(
				`${URL}api/v1/users/login`,
				dataToSubmit
			);
			callback(response.data.token);
		} catch (error) {
			dispatch({
				type: GET_ERRORS,
				payload: error.response.data.errors
			});
			toastr.error("something wrong");
			dispatch(reset("admin-login-register"));
		}
	};
}

export function accountKitLogin(code) {
	return async dispatch => {
		axiosInstance
			.post(`${URL}api/v1/users/accountkit`, { code })

			.then(async response => {
				await authService.setToken(response.data.token);
				dispatch(auth());
			})

			.catch(err => {
				console.log(err);
			});
	};
}

export function auth() {
	return dispatch => {
		axiosInstance.get("/users/auth").then(response => {
			dispatch({
				type: AUTH_USER,
				payload: response.data
			});
		});
	};
}

export const logoutUser = () => dispatch => {
	authService.deleteToken();
	dispatch(push("/"));
	window.location.reload();
};
