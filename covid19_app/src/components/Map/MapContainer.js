import React, { Component } from 'react';
import DynamicMap from './DynamicMap'
import * as d3 from 'd3';
import Loader from 'react-loader-spinner';

class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            mapData : [],
            isLoading : true
        };
        this.getMapData = this.getMapData.bind(this);
    }

    componentDidMount() {
        this.getMapData();
    }

    getMapData() {
        const that = this;
        Promise.all([
            d3.json(window.location.origin + "/usa.geojson"),
            d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv")
        ]).then(function(values) {
            const newMapData = [];
            newMapData.push(values[0]);
            newMapData.push(values[1]); 
            that.setState({ 
                mapData : newMapData,
                isLoading : false
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? 
                    <Loader
                        type="ThreeDots"
                        color="lightgreen"
                        height={200}
                        width={200}
                    /> : 
                    <DynamicMap mapData={this.state.mapData} width={900} height={600}></DynamicMap>
                }
            </div>
        );
    }
}

export default MapContainer