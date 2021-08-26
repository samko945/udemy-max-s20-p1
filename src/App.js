// switch prevents rendering all "matching routes"
// e.g: /products/productId will render both /products and /products/productId
// switch makes it so it only renders the first match
// you can give a Route componenent an "exact" property to make it only render if it's am exact match
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import MainHeader from "./components/MainHeader";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/welcome" />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
