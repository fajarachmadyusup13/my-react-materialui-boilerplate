import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import puppy from './images/puppy.jpg';
import norway from './images/norway.jpg';

const styles = {
    example: {
        position: "absolute",
        top: "13%",
        width: "100%",
        height: "100%"
    }
}

class CardComp extends Component {
    render() {
        return (
            <div style={styles.example}>
                <Card >
                    <CardHeader 
                        title = "URL Avatar"
                        subtitle = "Subtitle"
                        avatar = {puppy} />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}> 
                        <img src={norway}/>
                    </CardMedia>
                </Card>
                <br/>
                <br/>
                <br/>
                <Card >
                    <CardHeader 
                        title = "URL Avatar"
                        subtitle = "Subtitle"
                        avatar = {puppy} />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}> 
                        <img src={norway}/>
                    </CardMedia>
                </Card>
                <br/>
                <br/>
                <br/>
                <Card >
                    <CardHeader 
                        title = "URL Avatar"
                        subtitle = "Subtitle"
                        avatar = {puppy} />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}> 
                        <img src={norway}/>
                    </CardMedia>
                </Card>
            </div>
        );
    }
}

export default CardComp;