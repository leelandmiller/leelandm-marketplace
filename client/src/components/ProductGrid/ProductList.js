import React, {Component} from 'react';
import { GridList } from 'material-ui/GridList';
import Product from './Product';

class ProductList extends Component {
    styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },
        gridList: {
            width: 1000,
            overflowY: 'auto'
        },
    }

    render() {
        if (!this.props.items) {
            return <h1>Loading...</h1>
        }

        return (<div style={this.styles.root}>
            <GridList cellHeight={180} style={this.styles.gridList} cols={4}>
                {
                    this.props.items.map((tile, i) => <Product tile={tile} i={i} key={i + '-' + tile.ASIN} />)
                }
            </GridList>
        </div>);
    }
}

export default ProductList;
