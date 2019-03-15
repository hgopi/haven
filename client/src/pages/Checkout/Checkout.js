import { Component } from 'react';
import { connect } from 'react-redux';
import * as Style from './style';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CartItem } from './../../common';
import { Row, Column, Input, AnchorButton } from '../../components';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
    }
}

class Checkout extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <section className="section-checkout">
                <Style.container className="container">
                    <Style.columnLeft>
                        <form>
                            <Style.box>
                                <Style.h5>Customer Info</Style.h5>
                                <Style.formInfo>* Required</Style.formInfo>
                                <Style.label>Email *</Style.label>
                                <Style.input type="email" required />
                            </Style.box>
                            <Style.box>
                                <Style.h5>Shipping Address</Style.h5>
                                <Style.formInfo>* Required</Style.formInfo>
                                <Style.label>Full Name *</Style.label>
                                <Style.input type="text" required />
                                <Style.label>Street Address *</Style.label>
                                <Style.input type="text" required />
                                <Style.input type="text" />

                                <Row>
                                    <Column>
                                        <Style.label>City *</Style.label>
                                        <Input type="text" required />
                                    </Column>
                                    <Column>
                                        <Style.label>State *</Style.label>
                                        <Input type="text" required />
                                    </Column>
                                    <Column>
                                        <Style.label>Zipcode *</Style.label>
                                        <Input type="tel" required />
                                    </Column>
                                </Row>

                                <Style.label>Country *</Style.label>
                                <Input type="text" required defaultValue="India" />
                            </Style.box>
                            <Style.box>
                                <Style.h5>Items in Order</Style.h5>
                                <CartItem cartItems={cartItems} />
                            </Style.box>
                        </form>
                    </Style.columnLeft>
                    <Style.columnRight>
                        <Style.box>
                            <Style.h5>Order Summary</Style.h5>
                            <Style.totalRow>
                                <div>Subtotal</div>
                                <div>₹899.00</div>
                            </Style.totalRow>
                            <Style.totalRow>
                                <div>Total</div>
                                <Style.total>₹899.00</Style.total>
                            </Style.totalRow>
                        </Style.box>
                        <AnchorButton href="/">Place Order</AnchorButton>
                        <Style.message>There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</Style.message>
                    </Style.columnRight>
                </Style.container>
            </section>
        )
    }

}


export default connect(mapStateToProps, mapDispatchtoProps)(Checkout);