/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { Dimensions, PixelRatio } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const USUAL_LINEWIDTH = 2 / PixelRatio.get();

const USUAL_SEPARATORCOLOR = 'rgba(59,55,56,0.3)';
const UNDERLAYCOLOR = 'rgba(34,26,38,0.1)';
const USUAL_GREEN = '#F5FCFF';
const USUAL_BLUE = '#2196f3';
const USUAL_PURPLE = '#871F78'

const HEADER_HEIGHT = 50;
const HEADER_COLOR = USUAL_BLUE;
export {
  WIDTH,
  HEIGHT,
  USUAL_LINEWIDTH,

  USUAL_SEPARATORCOLOR,
  UNDERLAYCOLOR,
  USUAL_GREEN,
  USUAL_BLUE,
  USUAL_PURPLE,

  HEADER_HEIGHT,
  HEADER_COLOR,
};