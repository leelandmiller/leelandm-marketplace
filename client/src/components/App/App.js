import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import ProductList from '../ProductGrid/ProductList';
import api from '../../utils/API';

class App extends Component {

    state = {
        items: [],
        hasError: false
    }

    componentDidMount() {
        // server API call to get products from Amazon
        api.getProducts().then(res => {
            // console.log(res.data.items)
            res.data.items.forEach((item, i) => {
                console.log(i)
                console.log(item.ImageSets.ImageSet)
            })
            this.setState({ items: res.data.items });
        });
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
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <ProductList items={this.state.items} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
