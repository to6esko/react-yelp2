import React,{PropType as T} from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from '../../utils /googleApiHelpers';
import Header from '../../components /Header/Header';
import styles from './styles.module.css'; 
import Sidebar from '../../components /Sidebar/Sidebar';


export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            pagination:null
        }
    }


   onReady(mapProps, map) {
    searchNearby(
      this.props.google,
      map,
      {
        location: map.center,
        radius: '500',
        types: ['cafe']
      }
    ).then((results, pagination) => {
      this.setState({
        places: results,
        pagination
      })
    }).catch((status) => {
      console.log('error fetching nearby', status)
    })
  }

 onMarkerClick(item) {
    const {place} = item;
    const {push}=this.context.router;
    push(`/map/detail/${place.place_id}`)
  }
  
  render() {
      let children=null;
      if(this.props.children){
          children=React.cloneElement(
              this.props.children,
              {
                  google:this.props.google,
                  places: this.props.places,
                  loaded: this.props.loaded,
                  onMarkerClick: this.onMarkerClick.bind(this)
              }
          );
      }
    return (
        <div>     
            <Map google={this.props.google}
                onReady={this.onReady.bind(this)}
                visible={false}
                calssName={styles.wrapper}>
                
                <Header />
                
            <Sidebar title={'Restourants'}
                places={this.state.places}/>
                
            {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
            }) }    
                <div className={styles.content}>
                {children}
                </div>
            </Map>
      </div>
    )
  }
}

Container.contextTypes={
    router: React.PropTypes.object
}
export default GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(Container);