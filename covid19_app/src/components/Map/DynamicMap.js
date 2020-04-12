import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class DynamicMap extends Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.renderMap = this.renderMap.bind(this);
        this.height = this.props.height;
        this.width = this.props.width;
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        const geoData = this.props.mapData[0];
        const node = this.mapRef.current;
        const projection = d3.geoAlbersUsa().scale(1300).translate([this.width / 2, this.height / 2]);;
        const path = d3.geoPath().projection(projection);
        const svg = d3.select(node)
            .append('g')
            .append('path')
            .attr("d", path(geoData))
      	    .attr("fill", "lightgreen")
      	    .attr("stroke", "white");
    }

    render() {
        return (
            <svg 
                width={this.props.width} 
                height={this.props.height}
                ref={this.mapRef}>
            </svg>
        ); 
    }
}

export default DynamicMap