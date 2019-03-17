import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import Card from './Card';
import { CardWrapper, PageTItle } from './../Styles/style';
import { IoIosCube, IoIosCart } from "react-icons/io";

const Main = (props) => (
    <Fragment>
        <PageTItle>Dashboard</PageTItle>
        <CardWrapper>
            <Card heading={"Products"} count={100} color={'#5d9cec'} dark={'#2f80e7'} >
                <IoIosCube />
            </Card>
            <Card heading={"Orders"} count={40} color={'#7266ba'} dark={'#564aa3'} >
                <IoIosCart />
            </Card>
        </CardWrapper>
    </Fragment>
)

export default Main;