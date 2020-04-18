import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import * as d3 from 'd3';

const styles = () => ({
    Graph: {
        paddingTop: 30,
    },
    Text: {
        fontSize: 15,
    }
});

const activeColor = '#ff0040';
const recoveredColor = '#169100';
const deathsColor = '#000000';

class PieChart extends Component {
    
    constructor(props) {
        super(props);
        this.width = 250;
        this.height = 450;
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        if (this.props.updated){
            const dataJson = 
                [
                    {name: 'Active', value: this.props.json.Active},
                    {name: 'Recovered', value: this.props.json.Recovered},
                    {name: 'Deaths', value: this.props.json.Deaths}
                ]
            this.renderPieChart(dataJson);
        }
    }

    renderPieChart(dataJson) {
        const { classes } = this.props;
        const color = d3.scaleOrdinal([
            activeColor, 
            recoveredColor, 
            deathsColor
        ]);

        const pie = d3.pie()
            .sort(null)
            .value(d => {
               return d.value;
            });

        const arcs = pie(dataJson);
        const arc = d3.arc()
            .innerRadius(50)
            .outerRadius(Math.min(this.width, this.height) / 2 - 1)

        const svg = d3.select('.Chart');
        svg.append('svg')
            .attr('class', classes.Graph)
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')  
                .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')')
            .selectAll("path")
            .data(arcs)
            .enter()
            .append('path')
                .attr("fill", (d) => { 
                    return color(d.index);
                })
                .attr('d', arc)
                .attr('stroke', 'white') 
                .attr('stroke-width', '3px');   
        
        const legend = d3.select('.PieChart-Graph-204');
            legend.append('circle').attr('cx',20).attr('cy', 10).attr('r', 6).style('fill', activeColor);
            legend.append('circle').attr('cx',20).attr('cy', 40).attr('r', 6).style('fill', recoveredColor);
            legend.append('circle').attr('cx',20).attr('cy', 70).attr('r', 6).style('fill', deathsColor);

            legend.append('text').attr('class', classes.Text).attr('x', 50).attr('y', 10)
                .text('Active').style('fill', activeColor).attr('alignment-baseline','middle');

            legend.append('text').attr('class', classes.Text).attr('x', 50).attr('y', 40)
                .text('Recovered').style('fill', recoveredColor).attr('alignment-baseline','middle');

            legend.append('text').attr('class', classes.Text).attr('x', 50).attr('y', 70)
                .text('Deaths').style('fill', deathsColor).attr('alignment-baseline','middle');
    }

    render() {
        return (
            <div className='Chart'>
            </div>
        );
    }
}

export default withStyles(styles)(PieChart);