import React, { Component, PropTypes } from 'react';

import MapWithLegend from './MapWithLegend'

export default class DatamapElements extends Component {
  renderMapElements(svgWidth, svgHeight) {
    const svgStyle = {
      width: svgWidth,
      height: svgHeight,
      backgroundColor: 'green',
    }

    return (
      <svg style={svgStyle}>
        <MapWithLegend
          svgWidth={0}
          svgHeight={0}
        />
      </svg>
    )
  }

  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <div>
        {svgWidth && svgHeight && this.renderMapElements(svgWidth, svgHeight)}
      </div>
    );
  }
}

DatamapElements.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
}
