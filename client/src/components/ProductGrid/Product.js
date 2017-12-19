import React from 'react';
import { GridTile } from 'material-ui/GridList';
import { Link } from 'react-router-dom';

const Product = props => {
    return (
        <Link to={`/${props.tile.ASIN}`}>
            <GridTile
                onClick={() => console.log('click')}
                className='tile'
                title={props.tile.ItemAttributes.Title}
                subtitle={
                    <span> by <b>{ props.tile.ItemAttributes.Brand }</b></span>
                }
            >
                <img src={
                    props.tile.ImageSets.ImageSet[props.tile.ImageSets.ImageSet.length - 1] ? props.tile.ImageSets.ImageSet[props.tile.ImageSets.ImageSet.length - 1].LargeImage.URL : props.tile.ImageSets.ImageSet.LargeImage.URL}
                alt='product thumbnail'/>
            </GridTile>
        </Link>
    );
}

export default Product;
