import React, { Component } from 'react';
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
        style={{ width: '100%', height: '100vh', background: 'grey' }}>
          <div>
            <input>
            </input>

          </div>
            <label htmlFor=""><i className="fas fa-search-plus"></i></label>
          <div>
            <button>Solicitar servicio</button>
          </div>
        </div>
    );
  }
}
export default Map;
