'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WHEEL = {
  // Color wheel colors, 12 plus 1 extra WHEEL_BLUE_BLUE_GREEN
  // SEE: http://www.malanenewman.com/images/colorwheel_warm_cool.gif
  RED: '#dc635c',
  RED_ORANGE: '#dc7d5c',
  ORANGE: '#dcac5c',
  YELLOW_ORANGE: '#dcd095',
  YELLOW: '#d8dc5c',
  YELLOW_GREEN: '#aedc5c',
  GREEN: '#5cdc71',
  BLUE_GREEN: '#5cdcbf',
  BLUE_BLUE_GREEN: '#5cb6dc',
  BLUE: '#5ca1dc',
  BLUE_VIOLET: '#a695dc',
  VIOLET: '#af7abe',
  RED_VIOLET: '#dc95b6'
}; /**
    * Dendra color constants for charts and dashboards.
    *
    * @author J. Scott Smith
    * @license BSD-2-Clause-FreeBSD
    * @module dendra-colors
    */

var BOOTSTRAP = {
  RED: WHEEL.RED,
  ORANGE: WHEEL.ORANGE,
  YELLOW: WHEEL.YELLOW,
  GREEN: WHEEL.YELLOW_GREEN,
  BLUE: WHEEL.BLUE,
  TEAL: WHEEL.BLUE_GREEN,
  PINK: WHEEL.RED_VIOLET,
  PURPLE: WHEEL.BLUE_VIOLET

  // Other random colors not in the wheel
  // SEE: http://chir.ag/projects/name-that-color/#6195ED
};var NAMED = {
  HEMLOCK_APPROX: '#615c42'
};

var SERIES = {
  AIR_SPEED_AVG: WHEEL.BLUE_VIOLET,
  AIR_SPEED_MAX: WHEEL.RED,
  AIR_TEMP: [WHEEL.BLUE, WHEEL.YELLOW],
  SOIL_TEMP: [WHEEL.ORANGE, NAMED.HEMLOCK_APPROX],
  SOLAR_RAD: WHEEL.ORANGE,
  SOLAR_PAR: WHEEL.YELLOW_GREEN
};

var TILE = {
  AIR_MOIST: (0, _chromaJs2.default)(WHEEL.BLUE).darken(0.6).hex(),
  AIR_PRES: (0, _chromaJs2.default)(WHEEL.BLUE).darken(0.6).hex(),
  AIR_TEMP: (0, _chromaJs2.default)(WHEEL.BLUE).darken(0.6).hex(),
  NOTIFY_OFFLINE: (0, _chromaJs2.default)(WHEEL.RED).darken(0.6).hex(),
  NOTIFY_ONLINE: (0, _chromaJs2.default)(WHEEL.YELLOW_GREEN).darken(0.6).hex(),
  PRECIP: (0, _chromaJs2.default)(WHEEL.BLUE_GREEN).darken(0.6).hex(),
  SOLAR: (0, _chromaJs2.default)(WHEEL.ORANGE).darken(0.6).hex(),
  WIND: (0, _chromaJs2.default)(WHEEL.BLUE_VIOLET).darken(0.6).hex()
};

exports.default = {
  BOOTSTRAP: BOOTSTRAP,
  NAMED: NAMED,
  SERIES: SERIES,
  TILE: TILE,
  WHEEL: WHEEL
};
module.exports = exports['default'];