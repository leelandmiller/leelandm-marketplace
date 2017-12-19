import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
                <Subheader>Laptops on Amazon</Subheader>
                {
                    this.props.items.map((tile, i) => (
                        <GridTile
                            onClick={() => console.log('click')}
                            className='tile'
                            key={i + '-' + tile.ASIN}
                            title={tile.ItemAttributes.Title}
                            subtitle={
                                <span> by <b>{ tile.ItemAttributes.Brand }</b></span>
                            }
                            actionIcon={<IconButton> <StarBorder color = "white" /></IconButton>}>
                                <img src={
                                    tile.ImageSets.ImageSet[0] ? tile.ImageSets.ImageSet[0].LargeImage.URL : tile.ImageSets.ImageSet.LargeImage.URL}/>
                        </GridTile>)
                    )
                }
            </GridList>
        </div>);
    }
}

export default ProductList;
