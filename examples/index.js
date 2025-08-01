/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
var dcovarmtk = require( './../lib' );

// Define array options:
var opts = {
	'dtype': 'float64'
};

// Create one-dimensional ndarrays containing pseudorandom numbers:
var xbuf = discreteUniform( 10, -50, 50, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = discreteUniform( 10, -50, 50, opts );
var y = new ndarray( opts.dtype, ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

// Specify the degrees of freedom adjustment:
var correction = scalar2ndarray( 1.0, opts );

// Specify the known means:
var meanx = scalar2ndarray( 0.0, opts );
var meany = scalar2ndarray( 0.0, opts );

// Calculate the sample covariance:
var v = dcovarmtk( [ x, y, correction, meanx, meany ] );
console.log( v );
