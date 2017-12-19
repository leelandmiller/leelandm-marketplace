import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardHeader, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ProductDetail extends Component {

    renderProduct = product => {
        console.log(product)

        return (
            <div className='product-detail-page'>
                <div className='product'>
                    <Card>
                        <CardMedia>
                            <img src={product.ImageSets.ImageSet[product.ImageSets.ImageSet.length - 1]
                                    ? product.ImageSets.ImageSet[product.ImageSets.ImageSet.length - 1].LargeImage.URL
                                    : product.ImageSets.ImageSet.LargeImage.URL} alt='product thumbnail'/>
                        </CardMedia>
                        <CardTitle title={product.ItemAttributes.Title} subtitle={`By: ${product.ItemAttributes.Brand}`}/>
                    </Card>
                </div>
                <div className='more-details'>
                    <Card>
                        <CardHeader title='Price and Condition'/>
                        <CardText>
                            <b>Price: </b>
                            {product.Offers.Offer.OfferListing.Price.FormattedPrice}<br/>
                            <b>Condition: </b>
                            {product.Offers.Offer.OfferAttributes.Condition}
                        </CardText>
                    </Card>

                    <Card className='m-t-20'>
                        <CardHeader title='Links'/>
                        <CardActions>
                            <FlatButton label={product.ItemLinks.ItemLink[0].Description} href={product.ItemLinks.ItemLink[0].URL}/>
                            <FlatButton label={product.ItemLinks.ItemLink[5].Description} href={product.ItemLinks.ItemLink[5].URL}/>
                            <FlatButton label={product.ItemLinks.ItemLink[4].Description} href={product.ItemLinks.ItemLink[4].URL}/>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.items.length === 0) {
            return <h1>Loading...</h1>
        }

        return (
            <div className='bg-grey'>
                <Link to='/'>Back to All Products</Link>
                {this.renderProduct(this.props.filterProduct(this.props.match.params.product))}
            </div>
        )
    }
}

export default ProductDetail;
