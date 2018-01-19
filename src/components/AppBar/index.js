import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
    example: {
        position: "fixed",
        top: 0,
    },
};

class AppBarComp extends Component {

    render() {
        

        return (
            <div>
                <AppBar title="Title" style={styles.example}/>   
            </div>
        );
    }
}

export default AppBarComp;