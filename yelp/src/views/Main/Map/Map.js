import React, {PropTypes as T} from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import Map, {Marker} from 'google-maps-react';

export class MapComponent extends React.Component{
    renderMarkers() {
        if (!this.props.places) { return null;}
        return this.props.places.map(place => {
            return <Marker
                key={place.id}
                name={place.id}
                place={place}
                onClick={this.props.onMarkerClick.bind(this)}
            position={place.gometry.location}/>
        })
    }
    render() {
        return (
            <Map google={this.props.google}
                className={styles.map}>
                {this.renderMarkers()}
                </Map>
        )
    }
}

export default MapComponent;