import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import ProductList from '../ProductGrid/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import api from '../../utils/API';

class App extends Component {

    state = {
        items: [],
        selectedItem: {},
        hasError: false
    }

    componentDidMount() {
        // server API call to get products from Amazon
        api.getProducts().then(res => {
            console.log(res.data.items)
            this.setState({ items: res.data.items });
        });
    }

    filterProduct = asin => {
        const selectedItem = this.state.items.filter(item => item.ASIN === asin);

        return selectedItem[0];
    }

    // error catching
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went horribly wrong...try refreshing the page.</h1>;
        }

        return (
            <Router>
                <Switch>
                    <MuiThemeProvider>
                        <div className="App">
                            <Header />
                            <Route exact path='/' render={() => <ProductList items={this.state.items}/>} />
                            <Route path='/:product' render={({ match }) => <ProductDetail match={match} items={this.state.items} filterProduct={this.filterProduct} />} />

                            {/* <ProductList items={this.state.items} /> */}
                        </div>
                    </MuiThemeProvider>
                </Switch>
            </Router>
        );
    }
}

export default App;
