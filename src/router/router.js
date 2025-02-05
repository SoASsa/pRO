import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom'; //  , Switch
import * as URL from './url';
import Home from '../components/screens/home';
// import Shop from '../components/screens/shop';
// import Cart from '../components/screens/cart';

const Shop = lazy(() => import('../components/screens/shop'));
const Cart = lazy(() => import('../components/screens/cart'));
// const Product = lazy(() => import('../components/screens/product/product'));
// const Checkout = lazy(() => import('../components/screens/checkout/checkout'));
// const Beds = lazy(() => import('../components/screens/cart/beds'));

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path={ URL.SHOP } component={Shop} />
		<Route exact path={ URL.SHOP_C } component={Shop} />
		<Route exact path={ URL.CART } component={Cart} />
		<Route exact path={ URL.PROD_DETAILS_C } component={Home} />
	</Switch>);
