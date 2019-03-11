import React, { Component, Fragment } from 'react';
import BreadCrumb from '../../common/BreadCrumb';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.match.params.name,
            match: {}
        }
    }

    componentDidMount() {
        const { name } = this.state;
        fetch('/data/all-products.json').then(res => res.json())
            .then((res) => {
                const match = res.Products.find((product) => product.link === '/product/' + name);
                if (match) {
                    console.log(match);
                    this.setState({ match });
                }
            });
    }

    render() {
        const { name } = this.state;
        const { category, title } = this.state.match;
        return (
            <Fragment>
                <div className="horizontal-rule inner"></div>
                <div className="container">
                    <BreadCrumb path={[category, title]} />
                </div>
            </Fragment>
        )
    }

}

export default Details;