import React from 'react';
import ajax from 'superagent';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed:[]
        };
    }
    fetchFeed(type) {
        const baseURL = 'https://api.github.com/repos/facebook';
        ajax.get(`${baseURL}/${this.props.match.params.repo}/${type}`)
            .end((error, response) => {
                if (!error && response) {
                    this.setState({
                        [type]: response.body
                    });
                } else {
                    console.log(`Error fetching ${type}`, error);
                }
            }
        );
    }
    render(){
        return();
    }
}