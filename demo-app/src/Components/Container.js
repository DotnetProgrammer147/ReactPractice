import React from 'react';
import Car from './Car';
import Shape from './Shape';
import SignIn from './SignIn';
import ApiStringTest from './ApiStringTest';
import ApiLoginTest from './ApiLoginTest';
import ApiLoginTestNew from './ApiLoginTestNew'

class Container extends React.Component{

    render(){
        return <div>
            <ApiLoginTest />
        </div>
    }
}

export default Container;