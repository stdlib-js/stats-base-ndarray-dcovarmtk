"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=m(function(k,q){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),c=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/stats-strided-dcovarmtk/dist').ndarray;function f(e){var r,t,n,i,a;return i=e[0],a=e[1],r=v(e[2]),t=v(e[3]),n=v(e[4]),x(s(i,0),r,t,o(i),u(i,0),c(i),n,o(a),u(a,0),c(a))}q.exports=f
});var g=d();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
