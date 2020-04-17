import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import * as d3 from 'd3';
import d3tip from 'd3-tip';
import Loader from 'react-loader-spinner';

const styles = theme => ({
    states: {
        '&:hover': {
            opacity: .3
        }
    },

    tipText: {
        color: 'black'
    },

    d3tip: {
        lineHeight: 1,
        padding: 12,
        background: '#6b6b6b',
        color: 'white',
        borderRadius: 2
    }
});

class UsaMapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoading : true
        };
        this.width = 900;
        this.height = 600;
        this.mapRef = React.createRef();
        this.lowColor = '#edd1d1';
        this.highColor = '#c90000';  
    }

    componentDidUpdate() {
        const { stateData } = this.props;
        if (this.state.isLoading && (stateData != null)) this.renderMap(stateData);
    }

    renderMap(stateData) {
        const { classes } = this.props;
        Promise.all([d3.json(window.location.origin + "/usaStates.geojson")]).then( (data) => {
            const geoJson = data[0];

            Object.keys(stateData.updatedStates).forEach( (key) => {
                const stateObject = stateData.updatedStates[key];
                const stateName = stateObject.State;
                const covidData = stateObject.Confirmed;
                const active = stateObject.Active;
                const deaths = stateObject.Deaths;
                const recovered = stateObject.Recovered;
                Object.keys(geoJson.features).forEach ( (d) => {
                    const geoJsonState = geoJson.features[d].properties.NAME;
                    if (stateName === geoJsonState) {
                        geoJson.features[d].properties.value = covidData;
                        geoJson.features[d].properties.active = active;
                        geoJson.features[d].properties.deaths = deaths;
                        geoJson.features[d].properties.recovered = recovered;
                    }
                });
            }); 

            const svg = d3.select('svg');
            const color = d3.scaleLinear().domain([0, 230000]).range([this.lowColor, this.highColor]);

            const tip = d3tip()
                .attr('class', classes.d3tip)
                .offset([-5, 0])
                .html( (d) => {         
                    const stateName = d.properties.NAME;
                    const recovered = d.properties.recovered;
                    const deaths = d.properties.deaths;
                    const active = d.properties.active;
                    const confirmed = d.properties.value;
                    const data = '<b style="font-size:20px">' + stateName + '</b>' + '<br/>'
                                + 'Confirmed:      ' + confirmed + '<br/>'
                                + 'Active:         ' + active + '<br/>'
                                + 'Recovered:      ' + recovered + '<br/>'
                                + 'Deaths:         ' + deaths;
                    return data;
                });

            svg.call(tip);

            const projection = d3.geoAlbersUsa().translate([this.width / 2, this.height / 2]).scale(1300);
            const path = d3.geoPath().projection(projection);
            svg.append('g')
                .selectAll('path.states')
                .data(geoJson.features)
                .enter()
                .append('path')
                .attr('class', classes.states)
                .attr('d', path)
                .attr('stroke', 'white')
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)
      	        .style('fill', (d) => {
                      return color(d.properties.value);
                });
        });
    }

    render() {
        return (
            <div>
                <svg ref={this.mapRef} width={this.width} height={this.height} />
            </div>
        );
    }
}

export default withStyles(styles)(UsaMapContainer);

            // <div>
            //     {this.state.isLoading 
            //         ? <Loader type="TailSpin" color="#4287f5" height={50} width={50}/> 
            //         : <svg ref={this.mapRef} width={this.width} height={this.height} />
            //     }
            // </div>