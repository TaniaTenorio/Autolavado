import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import Button from '../Button';

class Map extends Component {
  constructor(props) {
    super(props);
    this.platform = null;
    this.map = null;
    this.state = {
      app_id: props.app_id,
      app_code: props.app_code,
      center: {
        lat: props.lat,
        lng: props.lng
      },
      zoom: props.zoom,
      map: null,
      theme: props.theme,
      style: props.style
    };
  }
  
  
   getPlatform() {
    return new window.H.service.Platform(this.state);
  }
   async getMap(container, layers, settings) {
    
    return  await new window.H.Map(container, layers, settings);
    
  }
  
  // async function getMap(container, layers, settings) {
  //    await new window.H.Map(container, layers, settings)  
  // }

  
   getEvents(map) {
    return new window.H.mapevents.MapEvents(map);
  }
  getBehavior(events) {
    return new window.H.mapevents.Behavior(events);
  }
  getUI(map, layers) {
    return new window.H.ui.UI.createDefault(map, layers);
  }
  
  async componentDidMount() {
    this.platform = this.getPlatform();
   let createDefaultLayers = this.platform.createDefaultLayers()
    // var layers = this.setState({platform: createDefaultLayers});
    var element = document.getElementById('here-map');
    this.map = await this.getMap(element,  createDefaultLayers.normal.map, {
      center: this.state.center,
      zoom: this.state.zoom
    });

    // var onResult = await function(result) {
    //   var locations = result.Response.View[0].Result,
    //     position,
    //     marker;
    //   // Add a marker for each location found
    //   for (let i = 0;  i < locations.length; i++) {
    //   position = {
    //     lat: locations[i].Location.DisplayPosition.Latitude,
    //     lng: locations[i].Location.DisplayPosition.Longitude
    //   };
    //   marker = new window.H.map.Marker(position);
    //   this.map.addObject(marker);
    //   }
    // };
    var geocoder = await this.platform.getGeocodingService();
    // var geocodingParams = {
    //   searchText: '200 S Mathilda Ave, Sunnyvale, CA'
    // };
    // geocoder.geocode(geocodingParams, onResult, function(e) {
    //   console.log(e);
    // });
    
    //Código para globito

    var reverseGeocodingParameters = {
      prox: '-99.803085, 19.491327, 1000',
      mode: 'retrieveAddresses',
      maxresults: 1
    };

    function onSuccess(result) {
      var location = result.Response.View[0].Result[0];
    
      // Create an InfoBubble at the returned location with
      // the address as its contents:
      ui.addBubble(new window.H.ui.InfoBubble({
        lat: location.Location.DisplayPosition.Latitude,
        lng: location.Location.DisplayPosition.Longitude
       }, { content: location.Location.Address.Label }));
    };
    geocoder.reverseGeocode(
      reverseGeocodingParameters,
      onSuccess,
      function(e) { console.log(e)});
   
    
    var events = this.getEvents(this.map);
    // eslint-disable-next-line
    var behavior = this.getBehavior(events);
    // eslint-disable-next-line
    var ui = this.getUI(this.map, createDefaultLayers);
  }
  
  
  render() {
    
    return (
      <div
        id='here-map'

        style={
          { width: '95vw',
           height: '90vh',
          position:'relative',
          marginLeft:'0'}
          }>

         <div className="input-map">
           <input className="input-style" type="text" placeholder="Ingresa tu dirección"/>
         </div>
         <div className="btn-map">
           <Link to="/schedule">
            <Button text={this.props.text}/>
           </Link>
         </div>

        </div>
    );
  }
}
export default Map;
