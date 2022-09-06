import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
// react-router-dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { auth } from "./firebase";

import {useDispatch,useSelector} from "react-redux";
import {selectUser, login, logout} from "./features/userSlice";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if(userAuth){
				dispatch(login({
					uid : userAuth.uid,
					email : userAuth.email
				}));
			}else{
				// always write dispatch(logout()) // bcz without logout() it didnt logout directly
				dispatch(logout());
			}
		})
		return unsubscribe;
	},[dispatch]);
	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route path='/' element={<HomeScreen></HomeScreen>}>
						</Route>

						<Route path="/profile" element={<ProfileScreen></ProfileScreen>}>
							
						</Route>
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;