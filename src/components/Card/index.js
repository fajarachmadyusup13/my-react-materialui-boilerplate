import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import puppy from './images/puppy.jpg';
import norway from './images/norway.jpg';

const styles = {
    card: {
        margin: '0% 0% 2% 0%'
    }
}

class CardComp extends Component {
    render() {
        return (
            <div>
                <Card style={styles.card}>
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