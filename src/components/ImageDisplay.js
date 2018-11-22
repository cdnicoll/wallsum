import React from 'React';
import {
    View,
    Dimensions,
    Image,
    ActivityIndicator,
    StyleSheet,
    Text
} from 'react-native';
import axios from 'axios';

class ImageDisplay extends React.Component {
    state = { images: [] };

    async componentWillMount() {
        try {
            const { data } = await axios.get(`https://picsum.photos/list`);
            //console.log(data);
            this.setState({images:data});
        } catch(err) {
            console.log(err.response.data);
        }
    }

    // get a list of all the photos

    // randomize the list

    // get id of first

    // create url with the id

    render() {
        const {height, width} = Dimensions.get('window');
        console.log(this.state.images[0]);

        // this.state.images[0].post_url
        // `https://picsum.photos/${width}/${height}/?random`
        const uri = `https://picsum.photos/${width}/${height}/?random`

        // @TODO: Clean up this flash, return a loader or something
        if (this.state.images.length <= 0) {
            return (
                <View />
            );
        }

        return(
            <View>
                <Text>{this.state.images[0].post_url}</Text>
                <Image
                    style={{width: width, height: height}}
                    source={{uri: this.state.images[0].post_url }}
                />
            </View>
        );
    }
}

export default ImageDisplay;
