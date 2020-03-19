import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";
import Title from "../components/Title";
import Button from "../components/Button";

class Home extends Component {
    saySomething() {
        console.log("Example console.log");
    };

    head(){
        return (
            <Helmet>
                <title>Home Page</title>
            </Helmet>
        );
    }

    render(){
        return (
            <Fragment>
                {this.head()}
                <Title title="Hello World!"/>
                <Button text="Say something" action={this.saySomething}/>
            </Fragment>
        );
    }
}

export default Home;
