(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,M=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,N=2300,Ie=2301,Le=2302,Re=2303,P=2400,ze=2401,F=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,I(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*ct}function Tt(e){return e*lt}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:dt,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},R=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new z,Ft=new Nt,B=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new B,Lt=new B().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new B().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Ze(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new z,Xt=class e extends at{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ut(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new z,an=new nn,on=new z(0,0,0),sn=new z(1,1,1),cn=new z,ln=new z,un=new z,dn=new nn,fn=new Nt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new z,_n=new Nt,vn=new nn,yn=new z,bn=new z,xn=new z,Sn=new Nt,Cn=new z(1,0,0),wn=new z(0,1,0),Tn=new z(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new pn,r=new Nt,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new B}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new z(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var V=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new V,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new V,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new V,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new V;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Nn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(dt(Ln.r*255,0,255))*65536+Math.round(dt(Ln.g*255,0,255))*256+Math.round(dt(Ln.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ve){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new H;H.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new z,Vn=new z,Hn=new z,Un=new z,Wn=new z,Gn=new z,Kn=new z,qn=new z,Jn=new z,Yn=new z,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new z,new z,new z,new z,new z,new z,new z,new z],nr=new z,rr=new er,ir=new z,ar=new z,or=new z,sr=new z,cr=new z,lr=new z,ur=new z,dr=new z,fr=new z,pr=new z;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new z,gr=new R,_r=0,vr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},xr=new er,Sr=new z,Cr=new z,wr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Cr)),this.expandByPoint(Sr.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tr=0,Er=new nn,Dr=new An,Or=new z,kr=new er,Ar=new er,jr=new z,Mr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new U(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(this.boundingBox.min,kr.min),this.boundingBox.expandByPoint(jr),jr.addVectors(this.boundingBox.max,kr.max),this.boundingBox.expandByPoint(jr)):(this.boundingBox.expandByPoint(kr.min),this.boundingBox.expandByPoint(kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(kr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(kr.min,Ar.min),kr.expandByPoint(jr),jr.addVectors(kr.max,Ar.max),kr.expandByPoint(jr)):(kr.expandByPoint(Ar.min),kr.expandByPoint(Ar.max))}kr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jr.fromBufferAttribute(a,t),o&&(Or.fromBufferAttribute(e,t),jr.add(Or)),r=Math.max(r,n.distanceToSquared(jr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let c=new z,l=new z,u=new z,d=new R,f=new R,p=new R,m=new z,h=new z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new z,y=new z,b=new z,x=new z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jr.fromBufferAttribute(e,t),jr.normalize(),e.setXYZ(t,jr.x,jr.y,jr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Pr=new z,Fr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix4(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyNormalMatrix(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.transformDirection(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=At(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=At(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=At(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=At(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){et(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){et(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ir=new z,Lr=new z,Rr=new B,zr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ir.subVectors(n,t).cross(Lr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ir),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rr.getNormalMatrix(e),r=this.coplanarPoint(Ir).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Br=0,Vr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new zr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Hr=class extends Vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur,Wr=new z,Gr=new z,Kr=new z,qr=new R,Jr=new R,Yr=new nn,Xr=new z,Zr=new z,Qr=new z,$r=new R,ei=new R,ti=new R,ni=class extends An{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type=`Sprite`,Ur===void 0){Ur=new Mr;let e=new Nr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute(`position`,new Fr(e,3,0,!1)),Ur.setAttribute(`uv`,new Fr(e,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new R(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Gr.setFromMatrixScale(this.matrixWorld),Yr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Kr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ri(Xr.set(-.5,-.5,0),Kr,a,Gr,r,i),ri(Zr.set(.5,-.5,0),Kr,a,Gr,r,i),ri(Qr.set(.5,.5,0),Kr,a,Gr,r,i),$r.set(0,0),ei.set(1,0),ti.set(1,1);let o=e.ray.intersectTriangle(Xr,Zr,Qr,!1,Wr);if(o===null&&(ri(Zr.set(-.5,.5,0),Kr,a,Gr,r,i),ei.set(0,1),o=e.ray.intersectTriangle(Xr,Qr,Zr,!1,Wr),o===null))return;let s=e.ray.origin.distanceTo(Wr);s<e.near||s>e.far||t.push({distance:s,point:Wr.clone(),uv:$n.getInterpolation(Wr,Xr,Zr,Qr,$r,ei,ti,new R),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ri(e,t,n,r,i,a){qr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Jr.copy(qr):(Jr.x=a*qr.x-i*qr.y,Jr.y=i*qr.x+a*qr.y),e.copy(t),e.x+=Jr.x,e.y+=Jr.y,e.applyMatrix4(Yr)}var ii=new z,ai=new z,oi=new z,si=new z,ci=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ai.copy(e).add(t).multiplyScalar(.5),oi.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ai);let i=e.distanceTo(t)*.5,a=-this.direction.dot(oi),o=si.dot(this.direction),s=-si.dot(oi),c=si.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ai).addScaledVector(oi,d),f}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),r=ii.dot(ii)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=O-A*k,ce=ee-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*k+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},li=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ui=new nn,di=new ci,fi=new wr,pi=new z,mi=new z,hi=new z,gi=new z,_i=new z,vi=new z,yi=new z,bi=new z,W=class extends An{constructor(e=new Mr,t=new li){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){vi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(_i.fromBufferAttribute(s,e),a?vi.addScaledVector(_i,r):vi.addScaledVector(_i.sub(t),r))}t.add(vi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fi.copy(n.boundingSphere),fi.applyMatrix4(i),di.copy(e.ray).recast(e.near),!(fi.containsPoint(di.origin)===!1&&(di.intersectSphere(fi,pi)===null||di.origin.distanceToSquared(pi)>(e.far-e.near)**2))&&(ui.copy(i).invert(),di.copy(e.ray).applyMatrix4(ui),(n.boundingBox===null||di.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Si(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Si(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Si(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Si(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;bi.copy(s),bi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(bi);return l<n.near||l>n.far?null:{distance:l,point:bi.clone(),object:e}}function Si(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,mi),e.getVertexPosition(c,hi),e.getVertexPosition(l,gi);let u=xi(e,t,n,r,mi,hi,gi,yi);if(u){let e=new z;$n.getBarycoord(yi,mi,hi,gi,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};$n.getNormal(mi,hi,gi,t.normal),u.face=t,u.barycoord=e}return u}var Ci=new Zt,wi=new Zt,Ti=new Zt,Ei=new Zt,Di=new nn,Oi=new z,ki=new wr,Ai=new nn,ji=new ci,Mi=class extends W{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new nn,this.bindMatrixInverse=new nn,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Oi),this.boundingBox.expandByPoint(Oi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Oi),this.boundingSphere.expandByPoint(Oi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(r),e.ray.intersectsSphere(ki)!==!1&&(Ai.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ai),(this.boundingBox===null||ji.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ji)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;wi.fromBufferAttribute(r.attributes.skinIndex,e),Ti.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ci.copy(t),t.set(0,0,0,0)):(Ci.set(...t,1),t.set(0,0,0)),Ci.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ti.getComponent(e);if(r!==0){let i=wi.getComponent(e);Di.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ei.copy(Ci).applyMatrix4(Di),r)}}return t.isVector4&&(t.w=Ci.w),t.applyMatrix4(this.bindMatrixInverse)}},Ni=class extends Xt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new nn,Ii=new nn,Li=[],Ri=new er,zi=new nn,Bi=new W,Vi=new wr,Hi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ri.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Vi.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Fi),Ii.multiplyMatrices(n,Fi),Bi.matrixWorld=Ii,Bi.raycast(e,Li);for(let e=0,n=Li.length;e<n;e++){let n=Li[e];n.instanceId=i,n.object=this,t.push(n)}Li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new wr,Wi=new R(.5,.5),Gi=new z,Ki=class{constructor(e=new zr,t=new zr,n=new zr,r=new zr,i=new zr,a=new zr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476+Wi.distanceTo(e.center),Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qi=class extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ji=new nn,Yi=new ci,Xi=new wr,Zi=new z,Qi=class extends An{constructor(e=new Mr,t=new qi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(r),Xi.radius+=i,e.ray.intersectsSphere(Xi)===!1)return;Ji.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Zi.fromBufferAttribute(l,n),$i(Zi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Zi.fromBufferAttribute(l,a),$i(Zi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function $i(e,t,n,r,i,a,o){let s=Yi.distanceSqToPoint(e);if(s<n){let n=new z;Yi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ea=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ta=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},na=class extends Xt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ra=class extends na{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ia=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},aa=class e extends Mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oa=class e extends Mr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new z,g=new z;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},sa=class e extends Mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`normal`,new U(o,3)),this.setAttribute(`uv`,new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},G=class e extends Mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class e extends G{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},la=class e extends Mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new U(i,3)),this.setAttribute(`normal`,new U(i.slice(),3)),this.setAttribute(`uv`,new U(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ua=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new nn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(dt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(dt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},da=class extends ua{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends da{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ma=new z,ha=new z,ga=new pa,_a=new pa,va=new pa,ya=class extends ua{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ha.subVectors(r[0],r[1]).add(r[0]),c=ha);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ma.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ma),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ga.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_a.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),va.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ga.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_a.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),va.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ga.calc(s),_a.calc(s),va.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ba(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xa(e,t){let n=1-e;return n*n*t}function Sa(e,t){return 2*(1-e)*e*t}function Ca(e,t){return e*e*t}function wa(e,t,n,r){return xa(e,t)+Sa(e,n)+Ca(e,r)}function Ta(e,t){let n=1-e;return n*n*n*t}function Ea(e,t){let n=1-e;return 3*n*n*e*t}function Da(e,t){return 3*(1-e)*e*e*t}function Oa(e,t){return e*e*e*t}function ka(e,t,n,r,i){return Ta(e,t)+Ea(e,n)+Da(e,r)+Oa(e,i)}var Aa=class extends ua{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends ua{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y),ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends ua{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ua{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends ua{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ua{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y),wa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends ua{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ba(o,s.x,c.x,l.x,u.x),ba(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},La=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:ya,CubicBezierCurve:Aa,CubicBezierCurve3:ja,EllipseCurve:da,LineCurve:Ma,LineCurve3:Na,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Fa,SplineCurve:Ia}),Ra=class extends ua{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new La[n.type]().fromJSON(n))}return this}},za=class extends Ra{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pa(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Aa(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ia([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new da(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ba=class extends za{constructor(e){super(e),this.uuid=ut(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new za().fromJSON(n))}return this}};function Va(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ya(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wa(a,o,n,s,c,l,0),o}function Ha(e,t,n,r,i){let a;if(i===bo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=_o(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=_o(i/r|0,e[i],e[i+1],a);return a&&co(a,a.next)&&(vo(a),a=a.next),a}function Ua(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(co(n,n.next)||so(n.prev,n,n.next)===0)){if(vo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&eo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ka(e,r,i,a):Ga(e))t.push(c.i,e.i,l.i),vo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=qa(Ua(e),t),Wa(e,t,n,r,i,a,2)):o===2&&Ja(e,t,n,r,i,a):Wa(Ua(e),t,n,r,i,a,1);break}}}function Ga(e){let t=e.prev,n=e,r=e.next;if(so(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ao(i,s,a,c,o,l,m.x,m.y)&&so(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ka(e,t,n,r){let i=e.prev,a=e,o=e.next;if(so(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=no(p,m,t,n,r),v=no(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!co(r,i)&&lo(r,n,n.next,i)&&mo(r,i)&&mo(i,r)&&(t.push(r.i,n.i,i.i),vo(n),vo(n.next),n=e=i),n=n.next}while(n!==e);return Ua(n)}function Ja(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&oo(o,e)){let s=go(o,e);o=Ua(o,o.next),s=Ua(s,s.next),Wa(o,t,n,r,i,a,0),Wa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ya(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ro(o))}i.sort(Xa);for(let e=0;e<i.length;e++)n=Za(i[e],n);return n}function Xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Za(e,t){let n=Qa(e,t);if(!n)return t;let r=go(n,e);return Ua(r,r.next),Ua(n,n.next)}function Qa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(co(e,n))return n;do{if(co(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&io(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);mo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$a(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $a(e,t){return so(e.prev,e,t.prev)<0&&so(t.next,e,e.next)<0}function eo(e,t,n,r){let i=e;do i.z===0&&(i.z=no(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,to(i)}function to(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function no(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ro(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function io(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ao(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&io(e,t,n,r,i,a,o,s)}function oo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!po(e,t)&&(mo(e,t)&&mo(t,e)&&ho(e,t)&&(so(e.prev,e,t.prev)||so(e,t.prev,t))||co(e,t)&&so(e.prev,e,e.next)>0&&so(t.prev,t,t.next)>0)}function so(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function co(e,t){return e.x===t.x&&e.y===t.y}function lo(e,t,n,r){let i=fo(so(e,t,n)),a=fo(so(e,t,r)),o=fo(so(n,r,e)),s=fo(so(n,r,t));return!!(i!==a&&o!==s||i===0&&uo(e,n,t)||a===0&&uo(e,r,t)||o===0&&uo(n,e,r)||s===0&&uo(n,t,r))}function uo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fo(e){return e>0?1:e<0?-1:0}function po(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&lo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mo(e,t){return so(e.prev,e,e.next)<0?so(e,t,e.next)>=0&&so(e,e.prev,t)>=0:so(e,t,e.prev)<0||so(e,e.next,t)<0}function ho(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function go(e,t){let n=yo(e.i,e.x,e.y),r=yo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _o(e,t,n,r){let i=yo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xo=class{static triangulate(e,t,n=2){return Va(e,t,n)}},So=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Co(e),wo(n,e);let a=e.length;t.forEach(Co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,wo(n,t[e]);let o=xo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var To=class e extends Mr{constructor(e=new Ba([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new U(r,3)),this.setAttribute(`uv`,new U(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Eo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new z,b=new z,x=new z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!So.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];So.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||L(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let ee=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=k(D[e],D[n],D[r]);let ne=[],re,A=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];re=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),re[e]=k(t[e],t[r],t[i]);ne.push(re),A=A.concat(re)}let ie;if(p===0)ie=So.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],te[t],a);le(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];re=ne[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],re[e],a);le(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ie=So.triangulateShape(e,t)}let j=ie.length,ae=d+f;for(let e=0;e<ee;e++){let t=l?O(C[e],A[e],ae):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),le(x.x,x.y,x.z)):le(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<ee;t++){let n=l?O(C[t],A[t],ae):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),le(x.x,x.y,x.z)):le(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],te[e],r);le(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];re=ne[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],re[e],r);_?le(i.x,i.y+g[s-1].y,g[s-1].x+n):le(i.x,i.y,c+n)}}}oe(),se();function oe(){let e=r.length/3;if(l){let e=0,t=ee*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=ee*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<j;e++){let t=ie[e];ue(t[2],t[1],t[0])}for(let e=0;e<j;e++){let t=ie[e];ue(t[0]+ee*s,t[1]+ee*s,t[2]+ee*s)}}n.addGroup(e,r.length/3-e,0)}function se(){let e=r.length/3,t=0;ce(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ce(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ce(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=ee*e,a=ee*(e+1);de(t+r+n,t+i+n,t+i+a,t+r+a)}}}function le(e,t,n){a.push(e),a.push(t),a.push(n)}function ue(e,t,i){M(e),M(t),M(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);fe(o[0]),fe(o[1]),fe(o[2])}function de(e,t,i,a){M(e),M(t),M(a),M(t),M(i),M(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);fe(s[0]),fe(s[1]),fe(s[3]),fe(s[1]),fe(s[2]),fe(s[3])}function M(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function fe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Do(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new La[i.type]().fromJSON(i)),new e(r,t.options)}},Eo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function Do(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Oo=class e extends la{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ko=class e extends la{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ao=class e extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},jo=class e extends Mr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new U(s,3)),this.setAttribute(`normal`,new U(c,3)),this.setAttribute(`uv`,new U(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mo=class e extends Mr{constructor(e=new Ba([new R(0,.5),new R(-.5,-.5),new R(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new U(r,3)),this.setAttribute(`normal`,new U(i,3)),this.setAttribute(`uv`,new U(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;So.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];So.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=So.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return No(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function No(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var K=class e extends Mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Po=class e extends Mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Fo=class e extends Mr{constructor(e=new Fa(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,s=new z,c=new R,l=new z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new La[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Io(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ro(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ro(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Lo(e){let t={};for(let n=0;n<e.length;n++){let r=Io(e[n]);for(let e in r)t[e]=r[e]}return t}function Ro(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Vo={clone:Io,merge:Lo},Ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wo=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ho,this.fragmentShader=Uo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=zo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Go=class extends Wo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},q=class extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ko=class extends Vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qo=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Zo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Qo=class extends Zo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:P,endingEnd:P}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case F:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case F:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},$o=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},es=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ts=class extends Zo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=is(n,t,g,y,r);i[p]=ns(x,o,_,b,m)}return i}};function ns(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function rs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function is(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ns(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=rs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var as=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Xo(e.settings)&&(n.settings={inTangents:Yo(e.settings.inTangents,Array),outTangents:Yo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ts(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case N:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return N;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Xo(this.settings)&&(os(this.settings.inTangents,e),os(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Xo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function os(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}as.prototype.ValueTypeName=``,as.prototype.TimeBufferType=Float32Array,as.prototype.ValueBufferType=Float32Array,as.prototype.DefaultInterpolation=Ie;var ss=class extends as{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName=`bool`,ss.prototype.ValueBufferType=Array,ss.prototype.DefaultInterpolation=N,ss.prototype.InterpolantFactoryMethodLinear=void 0,ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends as{constructor(e,t,n,r){super(e,t,n,r)}};cs.prototype.ValueTypeName=`color`;var ls=class extends as{constructor(e,t,n,r){super(e,t,n,r)}};ls.prototype.ValueTypeName=`number`;var us=class extends Zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ds=class extends as{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new us(this.times,this.values,this.getValueSize(),e)}};ds.prototype.ValueTypeName=`quaternion`,ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends as{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName=`string`,fs.prototype.ValueBufferType=Array,fs.prototype.DefaultInterpolation=N,fs.prototype.InterpolantFactoryMethodLinear=void 0,fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends as{constructor(e,t,n,r){super(e,t,n,r)}};ps.prototype.ValueTypeName=`vector`;var ms=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hs=class extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gs=new nn,_s=new z,vs=new z,ys=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_s.setFromMatrixPosition(e.matrixWorld),t.position.copy(_s),vs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(gs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bs=new z,xs=new Nt,Ss=new z,Cs=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bs,xs,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,xs,Ss.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bs,xs,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,xs,Ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new z,Ts=new R,Es=new R,Ds=class extends Cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Ts,Es),t.subVectors(Es,Ts)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=class extends Cs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=class extends ys{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new ks}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},js=-90,Ms=1,Ns=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ds(js,Ms,e,t);r.layers=this.layers,this.add(r);let i=new Ds(js,Ms,e,t);i.layers=this.layers,this.add(i);let a=new Ds(js,Ms,e,t);a.layers=this.layers,this.add(a);let o=new Ds(js,Ms,e,t);o.layers=this.layers,this.add(o);let s=new Ds(js,Ms,e,t);s.layers=this.layers,this.add(s);let c=new Ds(js,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ps=class extends Ds{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fs=`\\[\\]\\.:\\/`,Is=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ls=`[^\\[\\]\\.:\\/]`,Rs=`[^`+Fs.replace(`\\.`,``)+`]`,zs=`((?:WC+[\\/:])*)`.replace(`WC`,Ls),Bs=`(WCOD+)?`.replace(`WCOD`,Rs),Vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ls),Hs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ls),Us=RegExp(`^`+zs+Bs+Vs+Hs+`$`),Ws=[`material`,`materials`,`bones`,`map`],Gs=class{constructor(e,t,n){let r=n||Ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Is,``)}static parseTrackName(e){let t=Us.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ws.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ks.Composite=Gs,Ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ks.prototype.GetterByBindingType=[Ks.prototype._getValue_direct,Ks.prototype._getValue_array,Ks.prototype._getValue_arrayElement,Ks.prototype._getValue_toArray],Ks.prototype.SetterByBindingTypeAndVersioning=[[Ks.prototype._setValue_direct,Ks.prototype._setValue_direct_setNeedsUpdate,Ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_array,Ks.prototype._setValue_array_setNeedsUpdate,Ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_arrayElement,Ks.prototype._setValue_arrayElement_setNeedsUpdate,Ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_fromArray,Ks.prototype._setValue_fromArray_setNeedsUpdate,Ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function qs(e,t,n,r){let i=Js(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case M:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Js(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ys(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Zs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},Qs={basic:{uniforms:Lo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Zs.meshbasic_vert,fragmentShader:Zs.meshbasic_frag},lambert:{uniforms:Lo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Zs.meshlambert_vert,fragmentShader:Zs.meshlambert_frag},phong:{uniforms:Lo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zs.meshphong_vert,fragmentShader:Zs.meshphong_frag},standard:{uniforms:Lo([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zs.meshphysical_vert,fragmentShader:Zs.meshphysical_frag},toon:{uniforms:Lo([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new H(0)}}]),vertexShader:Zs.meshtoon_vert,fragmentShader:Zs.meshtoon_frag},matcap:{uniforms:Lo([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Zs.meshmatcap_vert,fragmentShader:Zs.meshmatcap_frag},points:{uniforms:Lo([J.points,J.fog]),vertexShader:Zs.points_vert,fragmentShader:Zs.points_frag},dashed:{uniforms:Lo([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zs.linedashed_vert,fragmentShader:Zs.linedashed_frag},depth:{uniforms:Lo([J.common,J.displacementmap]),vertexShader:Zs.depth_vert,fragmentShader:Zs.depth_frag},normal:{uniforms:Lo([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Zs.meshnormal_vert,fragmentShader:Zs.meshnormal_frag},sprite:{uniforms:Lo([J.sprite,J.fog]),vertexShader:Zs.sprite_vert,fragmentShader:Zs.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zs.background_vert,fragmentShader:Zs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:Zs.backgroundCube_vert,fragmentShader:Zs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zs.cube_vert,fragmentShader:Zs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zs.equirect_vert,fragmentShader:Zs.equirect_frag},distance:{uniforms:Lo([J.common,J.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zs.distance_vert,fragmentShader:Zs.distance_frag},shadow:{uniforms:Lo([J.lights,J.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Zs.shadow_vert,fragmentShader:Zs.shadow_frag}};Qs.physical={uniforms:Lo([Qs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:Zs.meshphysical_vert,fragmentShader:Zs.meshphysical_frag};var $s={r:0,b:0,g:0},ec=new nn,tc=new B;tc.set(-1,0,0,0,1,0,0,0,1);function nc(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new aa(1,1,1),new Wo({name:`BackgroundCubeMaterial`,uniforms:Io(Qs.backgroundCube.uniforms),vertexShader:Qs.backgroundCube.vertexShader,fragmentShader:Qs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ec.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tc),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Ao(2,2),new Wo({name:`BackgroundMaterial`,uniforms:Io(Qs.background.uniforms),vertexShader:Qs.background.vertexShader,fragmentShader:Qs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($s,Bo(e)),n.buffers.color.setClear($s.r,$s.g,$s.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ic(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ac(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function oc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new zr,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var sc=4,cc=6,lc=20,uc=256,dc=new Os,fc=new H,pc=null,mc=0,hc=0,gc=!1,_c=new z,vc=new z,yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_c}=i;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,hc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:He,depthBuffer:!1},r=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bc(r)),this._blurMaterial=wc(r,e,t),this._ggxMaterial=Cc(r,e,t)}return r}_compileMaterial(e){let t=new W(new Mr,e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ds(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new aa,new li({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Sc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Sc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-sc?n-d+sc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Sc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,dc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Sc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,dc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Sc(t,3*l*(r>this._lodMax-sc?r-this._lodMax+sc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,dc)}};function bc(e){let t=[],n=[],r=e,i=e-sc+1+cc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?vc.set(1,r,n):e===1?vc.set(-n,1,-r):e===2?vc.set(-n,r,1):e===3?vc.set(-1,r,-n):e===4?vc.set(-n,-1,r):vc.set(n,r,-1),vc.toArray(l,(e*6+t)*3)}}let u=new Mr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new W(u,null)),r>sc&&r--}return{lodMeshes:n,sizeLods:t}}function xc(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Sc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Cc(e,t,n){return new Wo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:uc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wc(e,t,n){return new Wo({name:`SphericalGaussianBlur`,defines:{SAMPLES:lc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tc(){return new Wo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ec(){return new Wo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ea(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new aa(5,5,5),i=new Wo({name:`CubemapFromEquirect`,uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Ns(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function kc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Oc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new yc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ac(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function jc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Mc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Nc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Pc(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new en(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new R(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Fc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ic={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Lc(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Mr;l.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new U([0,2,0,0,2,0],2));let u=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new Os(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new $t(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ic[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rc=new Xt,zc=new na(1,1),Bc=new en,Vc=new tn,Hc=new ea,Uc=[],Wc=[],Gc=new Float32Array(16),Kc=new Float32Array(9),qc=new Float32Array(4);function Jc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Uc[i];if(a===void 0&&(a=new Float32Array(i),Uc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Yc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Zc(e,t){let n=Wc[t];n===void 0&&(n=new Int32Array(t),Wc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2fv(this.addr,t),Xc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Yc(n,t))return;e.uniform3fv(this.addr,t),Xc(n,t)}}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4fv(this.addr,t),Xc(n,t)}}function nl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;qc.set(r),e.uniformMatrix2fv(this.addr,!1,qc),Xc(n,r)}}function rl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;Kc.set(r),e.uniformMatrix3fv(this.addr,!1,Kc),Xc(n,r)}}function il(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Yc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xc(n,t)}else{if(Yc(n,r))return;Gc.set(r),e.uniformMatrix4fv(this.addr,!1,Gc),Xc(n,r)}}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2iv(this.addr,t),Xc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yc(n,t))return;e.uniform3iv(this.addr,t),Xc(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4iv(this.addr,t),Xc(n,t)}}function ll(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yc(n,t))return;e.uniform2uiv(this.addr,t),Xc(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yc(n,t))return;e.uniform3uiv(this.addr,t),Xc(n,t)}}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yc(n,t))return;e.uniform4uiv(this.addr,t),Xc(n,t)}}function pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(zc.compareFunction=n.isReversedDepthBuffer()?518:515,a=zc):a=Rc,n.setTexture2D(t||a,i)}function ml(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Vc,i)}function hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Hc,i)}function gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Bc,i)}function _l(e){switch(e){case 5126:return Qc;case 35664:return $c;case 35665:return el;case 35666:return tl;case 35674:return nl;case 35675:return rl;case 35676:return il;case 5124:case 35670:return al;case 35667:case 35671:return ol;case 35668:case 35672:return sl;case 35669:case 35673:return cl;case 5125:return ll;case 36294:return ul;case 36295:return dl;case 36296:return fl;case 35678:case 36198:case 36298:case 36306:case 35682:return pl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return gl}}function vl(e,t){e.uniform1fv(this.addr,t)}function yl(e,t){let n=Jc(t,this.size,2);e.uniform2fv(this.addr,n)}function bl(e,t){let n=Jc(t,this.size,3);e.uniform3fv(this.addr,n)}function xl(e,t){let n=Jc(t,this.size,4);e.uniform4fv(this.addr,n)}function Sl(e,t){let n=Jc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cl(e,t){let n=Jc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wl(e,t){let n=Jc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tl(e,t){e.uniform1iv(this.addr,t)}function El(e,t){e.uniform2iv(this.addr,t)}function Dl(e,t){e.uniform3iv(this.addr,t)}function Ol(e,t){e.uniform4iv(this.addr,t)}function kl(e,t){e.uniform1uiv(this.addr,t)}function Al(e,t){e.uniform2uiv(this.addr,t)}function jl(e,t){e.uniform3uiv(this.addr,t)}function Ml(e,t){e.uniform4uiv(this.addr,t)}function Nl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?zc:Rc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Vc,a[e])}function Fl(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Hc,a[e])}function Il(e,t,n){let r=this.cache,i=t.length,a=Zc(n,i);Yc(r,a)||(e.uniform1iv(this.addr,a),Xc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Bc,a[e])}function Ll(e){switch(e){case 5126:return vl;case 35664:return yl;case 35665:return bl;case 35666:return xl;case 35674:return Sl;case 35675:return Cl;case 35676:return wl;case 5124:case 35670:return Tl;case 35667:case 35671:return El;case 35668:case 35672:return Dl;case 35669:case 35673:return Ol;case 5125:return kl;case 36294:return Al;case 36295:return jl;case 36296:return Ml;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return Pl;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Il}}var Rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_l(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ll(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Hl(e,t){e.seq.push(t),e.map[t.id]=t}function Ul(e,t,n){let r=e.name,i=r.length;for(Vl.lastIndex=0;;){let a=Vl.exec(r),o=Vl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hl(n,l===void 0?new Rl(s,e,t):new zl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bl(s),Hl(n,e)),n=e}}}var Wl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ul(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kl=37297,ql=0;function Jl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yl=new B;function Xl(e){Bt._getMatrix(Yl,Bt.workingColorSpace,e);let t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jl(e.getShaderSource(t),r)}return i}function Ql(e,t){let n=Xl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var $l={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function eu(e,t){let n=$l[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tu=new z;function nu(){return Bt.getLuminanceCoefficients(tu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tu.x.toFixed(4)}, ${tu.y.toFixed(4)}, ${tu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ru(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ou).join(`
`)}function iu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function au(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ou(e){return e!==``}function su(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lu=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(e){return e.replace(lu,fu)}var du=new Map;function fu(e,t){let n=Zs[t];if(n===void 0){let e=du.get(t);if(e!==void 0)n=Zs[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return uu(n)}var pu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(e){return e.replace(pu,hu)}function hu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _u={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vu(e){return _u[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function bu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xu={302:`ENVMAP_MODE_REFRACTION`};function Su(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cu[e.combine]||`ENVMAP_BLENDING_NONE`}function Tu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vu(n),l=bu(n),u=Su(n),d=wu(n),f=Tu(n),p=ru(n),m=iu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ou).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ou).join(`
`),_.length>0&&(_+=`
`)):(g=[gu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ou).join(`
`),_=[gu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Zs.tonemapping_pars_fragment,n.toneMapping===0?``:eu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Zs.colorspace_pars_fragment,Ql(`linearToOutputTexel`,n.outputColorSpace),nu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ou).join(`
`)),o=uu(o),o=su(o,n),o=cu(o,n),s=uu(s),s=su(s,n),s=cu(s,n),o=mu(o),s=mu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Gl(i,i.VERTEX_SHADER,y),S=Gl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Zl(i,x,`vertex`),n=Zl(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wl(i,h),T=au(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Kl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ql++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Du=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=Du++,this.code=e,this.usedTimes=0}};function Au(e){return e===1030||e===37490||e===36285}function ju(e,t,n,r,i,a){let o=new mn,s=new Ou,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Qs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Au(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qs[t];n=Vo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Mu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nu),r.length>1&&r.sort(t||Pu),i.length>1&&i.sort(t||Pu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Iu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fu,e.set(t,[i])):n>=r.length?(i=new Fu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new H};break;case`SpotLight`:n={position:new z,direction:new z,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function Ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zu=0;function Bu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vu(e){let t=new Lu,n=Ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hu(e){let t=new Vu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Uu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hu(e),t.set(n,[a])):r>=i.length?(a=new Hu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ku=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],qu=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ju=new nn,Yu=new z,Xu=new z;function Zu(e,t,n){let r=new Ki,a=new R,o=new R,c=new Zt,l=new qo,u=new Jo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Wo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:Wu,fragmentShader:Gu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Mr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new na(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Oc(a.x),p.map.depthTexture=new ra(a.x,h)):(p.map=new $t(a.x,a.y),p.map.depthTexture=new na(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Yu),Xu.copy(e.position),Xu.add(Ku[t]),e.up.copy(qu[t]),e.lookAt(Xu),e.updateMatrixWorld(),n.makeTranslation(-Yu.x,-Yu.y,-Yu.z),Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qu(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Zt().fromArray(oe),le=new Zt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function $u(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ue:Bt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function pe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?Ce(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ge={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,he[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,he[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,he[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ge[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ge[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,_e[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=qs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=qs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Bt.getPrimaries(Bt.workingColorSpace),s=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function ed(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var td=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wo({vertexShader:td,fragmentShader:nd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new rd,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new R,ee=null,k=null,te=new Ds;te.viewport=new Zt;let ne=new Ds;ne.viewport=new Zt;let re=[te,ne],A=new Ps,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new na(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new z,le=new z;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Ds,o.layers.enable(n),o.viewport=new Zt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ia,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new Ys;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},ad=new nn,od=new B;od.set(-1,0,0,0,1,0,0,0,1);function sd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Bo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ad.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ld=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ud=null;function dd(){return ud===null&&(ud=new Ni(ld,16,16,k,_),ud.name=`DFG_LUT`,ud.minFilter=s,ud.magFilter=s,ud.wrapS=n,ud.wrapT=n,ud.generateMipmaps=!1,ud.needsUpdate=!0),ud}var fd=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new z,O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Zt,he=new Zt,ge=null,_e=new H(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Zt(0,0,ye,be),Te=new Zt(0,0,ye,be),Ee=!1,De=new Ki,Oe=!1,ke=!1,Ae=new nn,je=new z,Me=new Zt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt,nt,it,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Le=new Ac(N),Le.init(),ot=new ed(N,Le),Re=new ac(N,Le,e,ot),P=new Qu(N,Le),Re.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Nc(N),F=new Mu,Be=new $u(N,Le,P,F,Re,ot,ze),He=new kc(j),Ue=new Xs(N),st=new rc(N,Ue),We=new jc(N,Ue,ze,st),Ge=new Fc(N,We,Ue,st,ze),nt=new Pc(N,Re,Be),Ze=new oc(F),Ke=new ju(j,He,Le,Re,st,Ze),qe=new sd(j,F),Ye=new Iu,Xe=new Uu(Le),tt=new nc(j,He,P,Ge,x,s),$e=new Zu(j,Ge,Re),ct=new cd(N,ze,Re,P),it=new ic(N,Le,ze),at=new Mc(N,Le,ze),ze.programs=Ke.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Ye,j.shadowMap=$e,j.state=P,j.info=ze}S!==1009&&(ie=new Lc(S,t.width,t.height,o,r,i));let ut=new id(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){ut.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),tt.dispose(),Ye.dispose(),Xe.dispose(),F.dispose(),He.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,bt),ut.removeEventListener(`sessionend`,xt),St.stop()};function dt(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),ae=!0}function ft(){et(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;lt(),ze.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function pt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),F.remove(e)}function gt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Xe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),Oe===!0&&Ze.setGlobalState(this.clippingPlanes,t),oe!==null&&$e.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new Ys;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,ut.setAnimationLoop(e),e===null?St.stop():St.start()},ut.addEventListener(`sessionstart`,bt),ut.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Xe.get(e,A.length),k.init(t),k.state.textureUnits=Be.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Je,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),O=Ye.get(e,re.length),O.init(),re.push(O),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,j.sortObjects)}Ct(e,t,0,j.sortObjects),O.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(Se,Ce),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&tt.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=k.state.shadowsArray;if($e.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(O,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&tt.render(e),wt(O,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],Be.setTextureUnits(k.state.textureUnits),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&tt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,r),Et(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ke.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=jt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=dd()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&R(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Wl.upload(N,kt(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wl.upload(N,kt(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function R(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Pt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},Y={physics:{gravity:28,maxFallSpeed:22,fallY:-4,fixedStep:1/120},player:{halfSize:.42,moveSpeed:6,groundAccel:38,groundDecel:45,airAccel:30,airDecel:10,jumpHeight:2.5,doubleJumpHeight:2,wallClimbHeight:1.5,wallSlideSpeed:1.2,wallStickSpeed:1.5,ledgeAssistTime:.3,coyoteTime:.15,jumpBuffer:.15,stepHeight:.35,stompBounceHeight:1.8,hurtInvulnerable:2,knockbackSpeed:7,knockbackUp:5,coinsLostOnHit:3,respawnDelay:1,pickupRadius:.95},lava:{hopTime:.9,hopHeight:3,safeInset:.6,monsterDistance:1.5,heatTime:.6},trampoline:{bounceHeight:6,radius:1.2},button:{radius:1.1,riseTime:1.4,riseDepth:12},zipline:{postTop:4.4,postBottom:3.6,sagPerMeter:.04,handGap:.55,startSpeed:2,speed:8,accel:5,grabRadius:1.3,releaseSpeed:1.5,edgeMargin:2.5},cave:{height:4.4,roof:1.4,wall:1.1,tunnelWidth:3.6,reach:1.5,seeThrough:.22,camera:{distance:4.5,belowRoof:.5,lookUp:.6,axisPull:.5,enter:2,ramp:1.5,edge:.3,roomMargin:.6,minDistance:2.5,turnSpeed:4,stickRelease:.15},fadeSpeed:3,light:.35},shop:{skins:[{id:`pink`,body:16748459,belly:16766688,price:0},{id:`mint`,body:6219432,belly:14221296,price:30},{id:`sky`,body:7129343,belly:14742783,price:40},{id:`lemon`,body:16767053,belly:16774857,price:40},{id:`lilac`,body:12164095,belly:15722239,price:60},{id:`peach`,body:16754283,belly:16770769,price:60},{id:`snow`,body:16053503,belly:16766688,price:80},{id:`berry`,body:16735354,belly:16765146,price:100}],hats:[{id:`bow`,icon:`🎀`,price:50},{id:`cap`,icon:`🧢`,price:80},{id:`ears`,icon:`🐰`,price:100},{id:`propeller`,icon:`🚁`,price:130},{id:`crown`,icon:`👑`,price:200}],trails:[{id:`stars`,icon:`⭐`,price:120},{id:`bubbles`,icon:`🫧`,price:150},{id:`rainbow`,icon:`🌈`,price:250}],upgrades:[{id:`bonusTime`,icon:`⏳`,prices:[60,120,200]},{id:`magnet`,icon:`🧲`,prices:[60,120,200]},{id:`pickup`,icon:`🫳`,prices:[40,90,160]},{id:`shield`,icon:`🛡️`,prices:[150]},{id:`tripleJump`,icon:`🦘`,prices:[300]}],bonusTimeStep:2,magnetStep:1.5,pickupStep:.2,startShield:20},teleport:{radius:1.1,standTime:.5,rearmDistance:1.8,fade:.45},bonus:{duration:10,speedMul:1.6,jumpMul:1.7,magnetRadius:5,magnetSpeed:14},growth:{scalePerStomp:.08,maxSizeStomps:20,jumpPerStomp:.06,scaleSharpness:6},monster:{halfSize:.5,walkerSpeed:1.6,chaserSenseRadius:6,chaserSpeedFactor:{veryEasy:.55,easy:.7},chaserGiveUpTime:4,chaserGiveUpDistance:10,chaserCooldown:2.5,stompCoins:5,pushFromStomps:10,crushFromStomps:20,pushSpeed:6,bumpSpeed:3,nudgeSpeed:2.5,nudgeCooldown:.6,sleeperWakeRadius:2.5,sleeperAwakeTime:3,sleeperWanderSpeed:.8,runnerSenseRadius:6,runnerSpeedFactor:{veryEasy:.5,easy:.6},runnerRunTime:2.5,runnerRestTime:1.2,hopperSitTime:1.3,hopperJumpHeight:1.5,hopperHopDistance:2.5,flyerHeight:1.9,flyerBob:.25,flyerRadius:2.5,flyerSpeed:.9,turtleSpeed:1.2,turtleShellTime:4,turtleGuard:.35,moleUpTime:2.5,moleHideTime:1,moleMoveTime:.35,moleHoles:4,moleMinHoles:3,moleHoleRadius:2.6,giantScale:1.8,giantSpeed:1,giantKidScale:.65,giantKidSpeed:1.8},critter:{appearTime:.3,happyHops:2,happyHopHeight:.6,runAt:1.4,runSpeed:3.2,runHopHeight:.25,vanishAt:3,vanishTime:.35,flySpeed:3},king:{height:2.6,ahead:9,scale:.85,clearance:2.2,sway:5,swaySpeed:.35,follow:.9,dropEvery:[2.5,4.5],splatTime:1.4,angryTime:1.3,cryTime:1.2,fleeTime:3,fleeSpeed:9,thorns:{max:5,size:1.25,growDelay:.3,life:14,touch:.75,flowerTime:2.5,coins:1,coinTime:.8}},gloom:{amount:.7,fadeTime:1.6,margin:1.5,below:.6,above:1.6,mapOpen:.45},boss:{half:{x:.95,y:.7},kingLift:1.15,highY:4.6,lowY:1.55,climb:2.2,radius:4.5,highSpeed:.6,lowSpeed:.2,highTime:4.5,highFaster:1,lowTime:4.5,hurtTime:1.6,freeStay:4,freeFly:2.5,flyAway:4,finaleCritters:9,finaleFirst:.5,finaleGap:.3,finaleDance:3.5,finaleRing:3},story:{kingAt:2.2,kingFly:2.2,dropsAt:5,dropGap:.75,heroAt:8.6,hopTime:.5,angryAt:9.8,angryTime:1.4,stompAt:11.4,stompGap:1.5,stompHop:.6,leaveAt:17.6,kingFlyFar:2.6,panTime:2.6,farDropsAt:21.7,resolveAt:22.6,end:26,skipAfter:.8,camera:{y:3.1,z:8.8,lookY:1.7,wide:{x:6.5,y:6.2,z:10.5},wideLook:{x:7,y:-.3,z:-8}}},level:{unlock:{walker:1,chaser:1,sleeper:1,runner:1,hopper:2,flyer:3,turtle:3,mole:4,giant:5,firefly:1,snowman:1,lollipop:1,ember:2},gateChance:.15,maxGates:2,ziplineChance:.8,teleportChance:.8,teleportHops:5,minCells:28,maxCells:34,cellsPerLevel:2,maxCellsCap:60,cellPitch:18,islandHalf:[5,6.5],checkpointEvery:[3,4],bonusesPerLevel:[3,6],loopChance:.35,pillarBottom:-2.5,maxHeight:7,highGround:4},difficulty:{veryEasy:{pathWidth:6,maxGap:1.8,maxRise:1.2,wallHeight:[3,4],trampolineRise:[2.4,3],movingPit:[6,7],firstLevelMonsters:14,monstersPerLevel:2,maxMonsters:36,monstersPerIsland:2},easy:{pathWidth:5,maxGap:2.4,maxRise:1.7,wallHeight:[3.5,5.5],trampolineRise:[2.8,3.6],movingPit:[7,9],firstLevelMonsters:15,monstersPerLevel:2,maxMonsters:40,monstersPerIsland:3}},camera:{offset:{x:0,y:8,z:9.5},climbOffset:{x:0,y:10,z:12.5},lookAhead:2.5,followSharpness:4,fov:55},intro:{rise:1,hold:1.1,zoom:1.8,pitch:68,margin:1.12},reveal:{delay:.6,flySpeed:30,flyTime:[1.8,3.5],hold:2.6,back:1.6,distance:1.4},look:{wrap:.25,rim:.3,rimPower:3,saturation:1.08,exposure:.82,lavaBrightness:.8,sunDir:[-.45,.16,-1],sunDisc:.9985,sunHalo:10,bevel:.28,bevelSegments:3,sideStep:.65,sideNoise:.13,capDepth:.2,drip:.22,pillowDepth:.8,pillowMax:4.2,cloudChunk:4,post:{bloom:.6,bloomRadius:.55,glowFrom:.12,glowTo:.45,vignette:.12,tint:.03,minFps:45,checkSeconds:3,warmSeconds:2}},pacing:{maxFps:60,minFps:40,missShare:.1,window:2,probe:8,probeMax:64},audio:{defaultVolume:.7,musicVolume:.22}};function pd(e){return Math.sqrt(2*Y.physics.gravity*e)}function md(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Mr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=hd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=hd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function hd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new vr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function gd(e,t){if(globalThis.__noBake)return 0;let n=new Set,r=(e,t)=>{if(e instanceof An||e instanceof Mr)n.add(e);else if(t>3||!e||typeof e!=`object`)return;else if(Array.isArray(e)||e instanceof Set)for(let n of e)r(n,t+1);else if(e instanceof Map)for(let n of e.values())r(n,t+1);else if(Object.getPrototypeOf(e)===Object.prototype)for(let n of Object.values(e))r(n,t+1)};for(let t of Object.values(e))r(t,0);let i=0,a=[],o=e=>{if(!(e!==t&&e.userData.baked)){e.children.length>1&&a.push(e);for(let t of e.children)o(t)}};o(t);for(let e of a){let t=new Map;for(let r of e.children){let e=r;if(!_d(e,n))continue;let i=vd(e),a=t.get(i);a?a.push(e):t.set(i,[e])}for(let n of t.values()){if(n.length<2)continue;let t=n.map(e=>(e.updateMatrix(),e.geometry.clone().applyMatrix4(e.matrix))),r=md(t);for(let e of t)e.dispose();if(!r)continue;let a=n[0],o=new W(r,a.material);o.castShadow=a.castShadow,o.receiveShadow=a.receiveShadow,o.renderOrder=a.renderOrder,o.frustumCulled=a.frustumCulled,o.layers.mask=a.layers.mask,e.add(o);for(let t of n)e.remove(t);i+=n.length-1}}return t.userData.baked=!0,i}function _d(e,t){if(!e.isMesh||e instanceof Hi||e instanceof Mi||e.children.length||e.name||!e.visible||t.has(e)||t.has(e.geometry)||Array.isArray(e.material)||e.material.transparent)return!1;let n=e.geometry;return n.morphAttributes.position||Object.keys(e.userData).length||Object.values(n.attributes).some(e=>e.isInterleavedBufferAttribute)?!1:(e.updateMatrix(),e.matrix.determinant()>0)}function vd(e){let t=e.geometry,n=Object.entries(t.attributes).map(([e,t])=>`${e}:${t.itemSize}:${t.normalized}:${t.array.constructor.name}`).sort().join(`,`);return[e.material.uuid,e.castShadow,e.receiveShadow,e.renderOrder,e.frustumCulled,e.layers.mask,t.index?`i`:`n`,n].join(`|`)}var yd=1e-4;function bd(e,t){return t.minX=e.pos.x-e.half.x,t.maxX=e.pos.x+e.half.x,t.minY=e.pos.y-e.half.y,t.maxY=e.pos.y+e.half.y,t.minZ=e.pos.z-e.half.z,t.maxZ=e.pos.z+e.half.z,t}function xd(e,t){return e.maxX>t.minX+yd&&e.minX<t.maxX-yd&&e.maxY>t.minY+yd&&e.minY<t.maxY-yd&&e.maxZ>t.minZ+yd&&e.minZ<t.maxZ-yd}var Sd={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0};function Cd(e,t){let n=e.maxX-t.minX,r=t.maxX-e.minX,i=e.maxZ-t.minZ,a=t.maxZ-e.minZ,o=n<r?-n:r,s=i<a?-i:a;return Math.abs(o)<Math.abs(s)?{x:o,z:0}:{x:0,z:s}}function wd(e,t){bd(e,Sd);for(let e of t)if(xd(Sd,e))return!0;return!1}function Td(e,t,n,r,i,a=0){let o={grounded:!1,ground:null,hitX:0,hitZ:0,hitCeiling:!1};e.pos.y+=n,bd(e,Sd);for(let t of i)xd(Sd,t)&&(n<=0?(e.pos.y=t.maxY+e.half.y+yd,o.grounded=!0,o.ground=t):(e.pos.y=t.minY-e.half.y-yd,o.hitCeiling=!0),bd(e,Sd));let s=a>0&&o.grounded;return Ed(e,`x`,t,i,s?a:0,o),Ed(e,`z`,r,i,s?a:0,o),o}function Ed(e,t,n,r,i,a){if(n!==0){e.pos[t]+=n,bd(e,Sd);for(let o of r){if(!xd(Sd,o))continue;let s=e.pos.y-e.half.y;if(i>0&&o.maxY-s<=i){let t=e.pos.y;if(e.pos.y=o.maxY+e.half.y+yd,!wd(e,r)){bd(e,Sd),a.ground=o;continue}e.pos.y=t}let c=t===`x`?e.half.x:e.half.z;n>0?e.pos[t]=(t===`x`?o.minX:o.minZ)-c-yd:e.pos[t]=(t===`x`?o.maxX:o.maxZ)+c+yd,t===`x`?a.hitX=Math.sign(n):a.hitZ=Math.sign(n),bd(e,Sd)}}}function Dd(e,t,n,r){bd(e,Sd),Sd.minX+=t,Sd.maxX+=t,Sd.minZ+=n,Sd.maxZ+=n;for(let e of r)if(xd(Sd,e))return e;return null}function Od(e,t,n,r,i,a,o,s){return kd.tmin=0,kd.tmax=s,!Ad(e,r,o.minX,o.maxX)||!Ad(t,i,o.minY,o.maxY)||!Ad(n,a,o.minZ,o.maxZ)?-1:kd.tmin}var kd={tmin:0,tmax:0};function Ad(e,t,n,r){if(Math.abs(t)<1e-9)return e>=n&&e<=r;let i=(n-e)/t,a=(r-e)/t;if(i>a){let e=i;i=a,a=e}return kd.tmin=Math.max(kd.tmin,i),kd.tmax=Math.min(kd.tmax,a),kd.tmin<=kd.tmax}var jd=Y.critter,Md={walker:`hedgehog`,chaser:`squirrel`,sleeper:`chick`,runner:`bunny`,hopper:`frog`,flyer:`bird`,turtle:`turtle`,mole:`mole`,giant:`bunny`,firefly:`bird`,snowman:`penguin`,lollipop:`chick`,ember:`hedgehog`,king:`chick`},X=new K(1,16,12),Nd=new ca(1,1,8),Pd=new Map;function Fd(e){let t=Pd.get(e);return t||Pd.set(e,t=new q({color:e,roughness:.55})),t}function Id(){return[X,Nd,...Pd.values()]}function Z(e,t,n,r,i){let a=new W(t,Fd(n));return a.position.set(...r),a.scale.set(...i),e.add(a),a}function Ld(e,t,n,r,i){for(let a of[-1,1])Z(e,X,2365998,[a*r,t,n],[i,i*1.15,i*.7]),Z(e,X,16777215,[a*r+i*.3,t+i*.4,n+i*.55],[i*.32,i*.32,i*.2]),Z(e,X,16752056,[a*(r+i*1.2),t-i*1.4,n-i*.3],[i*.7,i*.45,i*.3])}function Rd(e,t){switch(e){case`bunny`:{Z(t,X,16183807,[0,.28,0],[.3,.28,.3]),Z(t,X,16183807,[0,.6,.06],[.23,.21,.21]);let e=[-1,1].map(e=>{let n=Z(t,X,16183807,[e*.1,.92,.02],[.065,.22,.05]);return Z(n,X,16757705,[0,0,.5],[.55,.8,.4]),n.rotation.z=-e*.15,n});return Z(t,X,16777215,[0,.25,-.3],[.1,.1,.1]),Z(t,X,16748464,[0,.58,.27],[.035,.03,.03]),Ld(t,.65,.22,.09,.04),e}case`hedgehog`:Z(t,X,8015669,[0,.27,-.03],[.34,.27,.36]);for(let e=0;e<9;e++){let n=(e/8-.5)*2.4;Z(t,Nd,5912100,[Math.sin(n)*.26,.36+Math.cos(n)*.14,-.08-e%2*.12],[.07,.2,.07]).rotation.set(-.5,0,-n*.7)}return Z(t,X,15913896,[0,.25,.22],[.2,.18,.18]),Z(t,X,2759200,[0,.24,.4],[.045,.04,.04]),Ld(t,.33,.33,.08,.035),[];case`squirrel`:{Z(t,X,16751164,[0,.27,0],[.24,.27,.24]),Z(t,X,16769725,[0,.25,.14],[.15,.18,.12]),Z(t,X,16751164,[0,.6,.04],[.2,.19,.19]);for(let e of[-1,1])Z(t,Nd,16751164,[e*.11,.8,0],[.05,.12,.05]);let e=Z(t,X,16747050,[0,.5,-.3],[.15,.36,.15]);return e.rotation.x=-.35,Z(t,X,3810336,[0,.58,.23],[.03,.025,.025]),Ld(t,.64,.18,.08,.035),[e]}case`frog`:Z(t,X,7329370,[0,.2,0],[.34,.2,.3]),Z(t,X,14284720,[0,.16,.12],[.24,.13,.2]);for(let e of[-1,1])Z(t,X,7329370,[e*.15,.38,.12],[.1,.1,.1]),Z(t,X,7329370,[e*.28,.06,-.1],[.12,.06,.16]);return Z(t,X,16744360,[0,.21,.28],[.11,.025,.03]),Ld(t,.4,.2,.15,.045),[];case`bird`:{Z(t,X,6273279,[0,.3,0],[.25,.25,.25]),Z(t,X,14217471,[0,.25,.1],[.17,.17,.16]);let e=Z(t,Nd,16756782,[0,.33,.27],[.05,.12,.05]);e.rotation.x=Math.PI/2,Z(t,Nd,4168680,[0,.55,-.02],[.05,.12,.05]);let n=[-1,1].map(e=>{let n=new V;return n.position.set(e*.22,.32,-.02),Z(n,X,4168680,[e*.1,0,0],[.13,.04,.1]),t.add(n),n});return Ld(t,.4,.2,.09,.04),n}case`turtle`:Z(t,X,4173406,[0,.2,-.04],[.36,.2,.4]),Z(t,X,16048266,[0,.1,-.04],[.33,.06,.37]);for(let e=0;e<5;e++){let n=e/5*Math.PI*2;Z(t,X,3115592,[Math.cos(n)*.17,.33,-.04+Math.sin(n)*.19],[.09,.04,.09])}Z(t,X,10215546,[0,.24,.38],[.15,.14,.15]);for(let e of[-1,1])for(let n of[-1,1])Z(t,X,10215546,[e*.24,.06,n*.22],[.08,.06,.08]);return Ld(t,.28,.5,.06,.03),[];case`mole`:Z(t,X,7033968,[0,.27,0],[.3,.27,.3]),Z(t,X,9073296,[0,.27,.14],[.2,.2,.16]),Z(t,X,16748464,[0,.33,.33],[.07,.06,.06]);for(let e of[-1,1])Z(t,X,16757705,[e*.2,.15,.22],[.08,.04,.07]);return Ld(t,.43,.27,.08,.03),[];case`penguin`:{Z(t,X,2894920,[0,.36,0],[.24,.36,.22]),Z(t,X,16777215,[0,.33,.07],[.18,.3,.17]);let e=Z(t,Nd,16754222,[0,.5,.25],[.045,.1,.045]);e.rotation.x=Math.PI/2;for(let e of[-1,1])Z(t,X,16754222,[e*.09,.03,.08],[.07,.03,.1]);let n=[-1,1].map(e=>{let n=new V;return n.position.set(e*.22,.45,0),Z(n,X,2894920,[0,-.13,0],[.05,.16,.09]),t.add(n),n});return Ld(t,.58,.18,.07,.035),n}case`chick`:{Z(t,X,16769357,[0,.27,0],[.27,.27,.27]);let e=Z(t,Nd,16751150,[0,.27,.28],[.045,.1,.045]);e.rotation.x=Math.PI/2,Z(t,Nd,16765471,[0,.56,0],[.04,.1,.04]);for(let e of[-1,1])Z(t,X,16751150,[e*.08,.02,.05],[.06,.025,.08]);let n=[-1,1].map(e=>{let n=new V;return n.position.set(e*.25,.3,0),Z(n,X,16765471,[e*.05,-.04,0],[.07,.11,.1]),t.add(n),n});return Ld(t,.36,.22,.09,.04),n}}}var zd=class{kind;zone;mode;pos;vel=new z;half={x:.25,y:.3,z:.25};group=new V;vanishing=!1;done=!1;visual=new V;moving;t=0;hops=jd.happyHops;grounded=!1;squash=0;yaw=0;flies;playWait=Math.random()*.6;constructor(e,t,n,r=`free`){this.kind=e,this.zone=n,this.mode=r,this.pos=t.clone(),this.flies=e===`bird`,this.moving=Rd(e,this.visual),this.visual.position.y=-this.half.y,this.visual.traverse(e=>e.castShadow=e instanceof W),this.group.add(this.visual),this.group.scale.setScalar(.01),this.group.position.copy(this.pos),gd(this,this.group)}update(e,t,n){if(this.done)return;let r=this.t+=e;this.vanishing=!1;let i=this.pos.x-t.x,a=this.pos.z-t.z,o=Math.hypot(i,a)||1,s=Math.atan2(-i,-a);if(this.mode===`playful`||this.mode===`stay`&&r>jd.runAt){s=Math.sin(r*.8+this.pos.x)*.6,this.grounded&&(this.playWait-=e),this.grounded&&this.playWait<=0&&(this.playWait=.25+Math.random()*.7,this.vel.y=pd(jd.happyHopHeight*(.5+Math.random()*.6))),this.vel.y-=Y.physics.gravity*e;let t=this.grounded,i=Td(this,0,this.vel.y*e,0,n);this.grounded=i.grounded,i.grounded&&(!t&&this.vel.y<-1&&(this.squash=1),this.vel.y=0)}else if(this.flies&&r>jd.runAt)this.pos.x+=i/o*jd.flySpeed*e,this.pos.z+=a/o*jd.flySpeed*e,this.pos.y+=jd.flySpeed*e,s=Math.atan2(i,a);else{let t=0,c=0;r>jd.runAt&&(t=i/o*jd.runSpeed,c=a/o*jd.runSpeed,s=Math.atan2(i,a)),this.grounded&&r>jd.appearTime&&(this.hops>0?(this.hops--,this.vel.y=pd(jd.happyHopHeight)):r>jd.runAt&&(this.vel.y=pd(jd.runHopHeight))),this.vel.y-=Y.physics.gravity*e;let l=this.grounded,u=Td(this,t*e,this.vel.y*e,c*e,n);this.grounded=u.grounded,u.grounded&&(!l&&this.vel.y<-1&&(this.squash=1),this.vel.y=0);let d=this.zone;this.pos.x=Math.min(d.maxX,Math.max(d.minX,this.pos.x)),this.pos.z=Math.min(d.maxZ,Math.max(d.minZ,this.pos.z)),this.pos.y<Y.physics.fallY&&(this.done=!0)}let c=s-this.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.yaw+=c*Math.min(1,e*10),this.group.rotation.y=this.yaw,this.group.position.copy(this.pos),this.squash=Math.max(0,this.squash-e*5);let l=this.squash*.25;this.visual.scale.set(1+l,1-l,1+l);let u=Math.sin(r*(this.flies&&r>jd.runAt?30:14));this.moving.forEach((e,t)=>{this.kind===`bird`||this.kind===`chick`||this.kind===`penguin`?e.rotation.z=(t?-1:1)*(.2+u*.5):e.rotation.y=u*.25});let d=1;if(this.mode===`playful`)this.group.scale.setScalar(1);else{if(r<jd.appearTime){let e=r/jd.appearTime;d=1+1.7*(e-1)**3+.7*(e-1)**2}else if(this.mode===`free`&&r>jd.vanishAt){let t=(r-jd.vanishAt)/jd.vanishTime;r-e<=jd.vanishAt&&(this.vanishing=!0),d=Math.max(0,1-t),t>=1&&(this.done=!0)}this.group.scale.setScalar(Math.max(.01,d))}}},Bd=Y.king,Vd=new H(16777215);function Hd(e,t={}){return new q({color:e,roughness:.6,...t})}var Ud=class{group=new V;cloud=new V;mood=`smug`;autopilot=!0;rain=!0;king=new V;arms=[];mouth;brows=[];drops=[];splats=[];puff=Hd(10196916,{emissive:3814992,emissiveIntensity:.3});dropMat=Hd(8157336,{roughness:.2,transparent:!0,opacity:.9});splatMat=Hd(8157336,{transparent:!0,opacity:.7,depthWrite:!1});time=0;moodTime=0;nextDrop=Bd.dropEvery[1];lift=0;liftTimer=0;target=new z;constructor(e){this.group.add(this.cloud),this.cloud.scale.setScalar(Bd.scale),this.cloud.position.set(e.x,e.y+Bd.height,e.z-Bd.ahead),this.buildCloud(),this.buildKing(),this.mouth=this.king.getObjectByName(`mouth`),this.cloud.traverse(e=>e.castShadow=e instanceof W);let t=new K(.16,10,8),n=new sa(.7,16);n.rotateX(-Math.PI/2);for(let e=0;e<4;e++){let e=new W(t,this.dropMat);e.scale.set(1,1.5,1),e.visible=!1,this.group.add(e),this.drops.push({mesh:e,vy:0,live:!1});let r=new W(n,this.splatMat);r.visible=!1,this.group.add(r),this.splats.push({mesh:r,t:1})}gd(this,this.group)}buildCloud(){let e=this.puff,t=new K(1,16,12);for(let[n,r,i,a]of[[0,0,0,1.25],[-1.2,-.15,.1,.95],[1.2,-.15,.1,.95],[-2,-.35,0,.65],[2,-.35,0,.65],[-.6,.45,-.3,.85],[.7,.4,-.3,.8],[0,-.3,.5,.9]]){let o=new W(t,e);o.position.set(n,r,i),o.scale.set(a,a*.8,a),this.cloud.add(o)}let n=Hd(2893888);for(let e of[-1,1]){let r=new W(t,n);r.position.set(e*.45,-.05,1.32),r.scale.set(.13,.09,.06),this.cloud.add(r);let i=new W(new aa(.42,.09,.08),n);i.position.set(e*.47,.17,1.3),i.rotation.z=e*.45,this.cloud.add(i)}}buildKing(){let e=this.king;e.position.set(0,.85,.1),this.cloud.add(e);let t=new K(1,20,14),n=Hd(9060320,{roughness:.2,emissive:9060320,emissiveIntensity:.15}),r=new W(t,n);r.position.y=.5,r.scale.set(.58,.52,.55),e.add(r);let i=new W(t,Hd(14168654));i.position.set(0,.42,-.14),i.scale.set(.66,.5,.48),e.add(i);let a=new W(new Po(.42,.08,8,20),Hd(16777215));a.position.set(0,.78,0),a.rotation.x=Math.PI/2,e.add(a);let o=Hd(16764718,{roughness:.25,metalness:.4,emissive:8016384,emissiveIntensity:.25}),s=new W(new G(.3,.3,.18,16,1,!0),o);s.position.y=1.05,e.add(s);for(let n=0;n<5;n++){let r=n/5*Math.PI*2,i=new W(new ca(.08,.22,6),o);i.position.set(Math.sin(r)*.27,1.24,Math.cos(r)*.27),e.add(i);let a=new W(t,Hd(n%2?4182271:16727930,{roughness:.1}));a.position.set(Math.sin(r)*.3,1.05,Math.cos(r)*.3),a.scale.setScalar(.045),e.add(a)}let c=Hd(16776168,{roughness:.2}),l=Hd(1908011);for(let r of[-1,1]){let i=new W(t,c);i.position.set(r*.18,.62,.45),i.scale.set(.13,.11,.1),e.add(i);let a=new W(t,l);a.position.set(r*.15,.6,.54),a.scale.setScalar(.055),e.add(a);let o=new W(new aa(.3,.07,.08),l);o.position.set(r*.18,.74,.5),o.rotation.z=r*.5,e.add(o),this.brows.push(o);let s=new V;s.position.set(r*.5,.55,.1);let u=new W(t,n);u.position.set(r*.18,-.12,.08),u.scale.setScalar(.14),s.add(u),e.add(s),this.arms.push(s)}let u=new W(t,Hd(2756640));u.name=`mouth`,u.position.set(0,.42,.5),u.scale.set(.17,.05,.05),e.add(u)}angry(){this.mood!==`crying`&&this.mood!==`gone`&&(this.mood=`angry`,this.moodTime=0)}setLight(e){this.puff.color.setHex(10196916).lerp(Vd,e),this.puff.emissiveIntensity=.3*(1-e)}setMood(e){this.mood=e,this.moodTime=0}pose(e){this.time+=e,this.moodTime+=e,this.animate()}flee(){this.mood!==`crying`&&this.mood!==`gone`&&(this.mood=`crying`,this.moodTime=0)}dropAt(e,t){let n=this.drops.find(e=>!e.live);n&&(n.live=!0,n.vy=0,n.mesh.visible=!0,n.mesh.position.set(e,this.cloud.position.y-.8,t))}get gone(){return this.mood===`gone`}update(e,t,n,r,i){this.time+=e,this.moodTime+=e;let a=this.cloud.position;if(this.mood===`crying`&&this.moodTime>Bd.cryTime)a.y+=Bd.fleeSpeed*.5*e,a.x+=n.x*Bd.fleeSpeed*e,a.z+=n.y*Bd.fleeSpeed*e,this.moodTime>Bd.cryTime+Bd.fleeTime&&(this.mood=`gone`,this.cloud.visible=!1);else if(this.mood!==`gone`&&this.autopilot){let i=Math.sin(this.time*Bd.swaySpeed)*Bd.sway;this.target.set(t.x+n.x*Bd.ahead-n.y*i,0,t.z+n.y*Bd.ahead+n.x*i),this.liftTimer-=e,this.liftTimer<=0&&(this.liftTimer=.5,this.lift=this.topNear(this.target.x,this.target.z,r));let o=Math.max(t.y+Bd.height,this.lift+Bd.clearance)+Math.sin(this.time*1.7)*.15,s=Math.min(1,e*Bd.follow);a.x+=(this.target.x-a.x)*s,a.z+=(this.target.z-a.z)*s,a.y+=(o-a.y)*s}this.cloud.rotation.y=Math.atan2(-n.x,-n.y),this.animate(),this.updateDrops(e,r,i)}topNear(e,t,n){let r=-1/0;for(let i of n)i.maxX>e-3&&i.minX<e+3&&i.maxZ>t-3&&i.minZ<t+3&&i.maxY>r&&(r=i.maxY);return r}animate(){let e=this.time,t=this.moodTime,n=this.king,r=Math.abs(Math.sin(e*2))*.05,i=-.2,a=.2,o=.05,s=.5;n.rotation.z=0,this.mood===`smug`?(r+=Math.abs(Math.sin(e*9))*.03*(Math.sin(e*.7)>.3),o=.06):this.mood===`angry`?(r=Math.abs(Math.sin(t*14))*.18,a=-2.4+Math.sin(t*18)*.4,i=.4,o=.12,s=.75,t>Bd.angryTime&&(this.mood=`smug`)):this.mood===`happy`?(r=Math.abs(Math.sin(t*6))*.12,i=2.2+Math.sin(t*10)*.4,a=-2.2-Math.sin(t*10)*.4,o=.08,s=-.25):this.mood===`crying`&&(n.rotation.z=Math.sin(t*10)*.12,i=-2,a=2,o=.1+Math.abs(Math.sin(t*6))*.05,s=-.4),n.position.y=.85+r,this.arms[0].rotation.z=i,this.arms[1].rotation.z=a,this.mouth.scale.y=o,this.brows.forEach((e,t)=>e.rotation.z=(t?1:-1)*s)}updateDrops(e,t,n){if(this.rain&&(this.mood===`smug`||this.mood===`angry`)&&(this.nextDrop-=e,this.nextDrop<=0)){this.nextDrop=Bd.dropEvery[0]+Math.random()*(Bd.dropEvery[1]-Bd.dropEvery[0]);let e=this.cloud.position;this.dropAt(e.x+(Math.random()-.5)*2.4,e.z+(Math.random()-.5)*1.2)}for(let r of this.drops){if(!r.live)continue;r.vy-=Y.physics.gravity*.6*e;let i=r.mesh.position;i.y+=r.vy*e;let a=t.find(e=>i.x>e.minX&&i.x<e.maxX&&i.z>e.minZ&&i.z<e.maxZ&&i.y<e.maxY&&i.y>e.minY);if((a||i.y<Y.physics.fallY)&&(r.live=!1,r.mesh.visible=!1,a)){let e=this.splats.reduce((e,t)=>t.t>e.t?t:e);e.t=0,e.mesh.position.set(i.x,a.maxY+.02,i.z),e.mesh.visible=!0,n(i.x,a.maxY,i.z)}}for(let t of this.splats)t.mesh.visible&&(t.t+=e/Bd.splatTime,t.mesh.scale.setScalar(t.t<.2?.4+t.t*3:Math.max(.01,(1-t.t)/.8)),t.t>=1&&(t.mesh.visible=!1))}},Wd=!1;function Gd(e,t,n){let r=Zs[e];if(!r.includes(t))throw Error(`softShading: в ${e} не нашлось «${t}» — обновился three.js?`);Zs[e]=r.replace(t,n)}var Kd=e=>e.toFixed(4);function qd(e,t=.85){return e.defines={...e.defines,GLOW:t.toFixed(2)},e}function Jd(e){return e.defines={...e.defines,NO_GLOW:``},e}function Yd(){if(Wd)return;Wd=!0;let e=Y.look,t=`saturate( ( dot( geometryNormal, directLight.direction ) + ${Kd(e.wrap)} ) / ${Kd(1+e.wrap)} )`,n=`float dotNL = saturate( dot( geometryNormal, directLight.direction ) );`;Gd(`lights_physical_pars_fragment`,n,`float dotNL = ${t};`),Gd(`lights_lambert_pars_fragment`,n,`float dotNL = ${t};`),Gd(`lights_physical_pars_fragment`,`reflectedLight.directSpecular += irradiance * specularBRDF`,`reflectedLight.directSpecular += saturate( dot( geometryNormal, directLight.direction ) ) * directLight.color * specularBRDF`),Gd(`lights_fragment_end`,`#if defined( RE_IndirectSpecular )`,`#if NUM_HEMI_LIGHTS > 0
	float softRim = pow( 1.0 - saturate( dot( geometryNormal, geometryViewDir ) ), ${Kd(e.rimPower)} );
	reflectedLight.indirectDiffuse += hemisphereLights[ 0 ].skyColor * softRim * ${Kd(e.rim)} * ( 0.35 + 0.65 * material.diffuseColor );
#endif

#if defined( RE_IndirectSpecular )`),Gd(`opaque_fragment`,`gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,`#if defined( OPAQUE ) && !defined( NO_GLOW )
	float glowMask = 0.0;
	#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
		glowMask = smoothstep( ${Kd(e.post.glowFrom)}, ${Kd(e.post.glowTo)}, dot( totalEmissiveRadiance, vec3( 0.3, 0.59, 0.11 ) ) );
	#endif
	#ifdef GLOW
		glowMask = max( glowMask, float( GLOW ) );
	#endif
	diffuseColor.a = 1.0 - glowMask;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`),Gd(`tonemapping_fragment`,`gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );`,`gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
	gl_FragColor.rgb = max( mix( vec3( dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), gl_FragColor.rgb, ${Kd(e.saturation)} ), 0.0 );`)}var Xd=Y.king.thorns;function Zd(e,t){let n=e.index?e.toNonIndexed():e;for(let e of Object.keys(n.attributes))e!==`position`&&e!==`normal`&&n.deleteAttribute(e);let r=new H(t),i=n.getAttribute(`position`),a=new Float32Array(i.count*3);for(let e=0;e<i.count;e++)r.toArray(a,e*3);return n.setAttribute(`color`,new vr(a,3)),n}function Qd(){let e=6199882,t=[Zd(new oa(.22,.4,4,10).translate(0,.42,0),e),Zd(new oa(.08,.14,3,8).rotateZ(Math.PI/2).translate(.3,.4,0),e),Zd(new oa(.08,.16,3,8).translate(.4,.52,0),e),Zd(new oa(.07,.12,3,8).rotateZ(Math.PI/2).translate(-.28,.32,0),e),Zd(new oa(.07,.12,3,8).translate(-.37,.42,0),e)];for(let e=0;e<8;e++){let n=e/8*Math.PI*2+.3,r=.3+e%3*.17,i=new ca(.025,.12,4).rotateZ(-Math.PI/2).rotateY(-n).translate(Math.cos(n)*.24,r,Math.sin(n)*.24);t.push(Zd(i,15985874))}for(let e of[-1,1])t.push(Zd(new K(1,10,8).scale(.07,.06,.04).translate(e*.09,.56,.2),16776168)),t.push(Zd(new K(1,8,6).scale(.032,.032,.02).translate(e*.08,.55,.235),1908011)),t.push(Zd(new aa(.13,.03,.03).rotateZ(e*.5).translate(e*.09,.64,.215),1908011));return t.push(Zd(new K(1,8,6).scale(.07,.022,.02).translate(0,.45,.22),2756640)),md(t)}function $d(){let e=[Zd(new G(.025,.035,.5,6).translate(0,.25,0),5029738),Zd(new K(.09,8,4).scale(1.4,.4,.7).rotateZ(.5).translate(.1,.18,0),6082419),Zd(new K(.08,10,8).translate(0,.53,.02),16765503)];for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.push(Zd(new K(.1,8,6).scale(1,.65,.3).rotateZ(n).translate(Math.cos(n)*.14,.53+Math.sin(n)*.14,0),16744118))}return md(e)}var ef=null;function tf(){return ef??={cactus:Qd(),flower:$d(),mat:new q({color:16777215,roughness:.55,vertexColors:!0}),coin:new G(.3,.3,.09,18).rotateX(Math.PI/2),gold:Jd(new q({color:16763176,metalness:.35,roughness:.35,emissive:16752640,emissiveIntensity:.2}))},ef}function nf(){let e=tf();return[e.cactus,e.flower,e.mat,e.coin,e.gold]}function rf(e){let t=e-1;return 1+2.9*t*t*t+1.9*t*t}var af=class{group=new V;list=[];cactus=tf().cactus;flower=tf().flower;constructor(){for(let e=0;e<Xd.max;e++){let e=new W(this.cactus,tf().mat);e.castShadow=!0,e.visible=!1,this.group.add(e);let t=new W(tf().coin,tf().gold);t.visible=!1,this.group.add(t),this.list.push({mesh:e,t:0,bloom:-1,live:!1,coin:t})}}get count(){return this.list.filter(e=>e.live&&e.bloom<0).length}sprout(e,t,n){let r=this.list.find(e=>!e.live)??this.list.reduce((e,t)=>t.bloom<0&&t.t>e.t?t:e);r.live=!0,r.t=0,r.bloom=-1,r.mesh.geometry=this.cactus,r.mesh.position.set(e,t,n),r.mesh.scale.setScalar(.001),r.mesh.visible=!1,r.coin.visible=!1}bloomAll(e){for(let t of this.list)t.live&&t.bloom<0&&t.t>=Xd.growDelay&&this.toFlower(t,e)}update(e,t,n,r){let i=Math.atan2(-n.x,-n.y);for(let n of this.list){if(!n.live)continue;n.t+=e;let a=n.mesh;if(a.rotation.y=i,n.bloom>=0){n.bloom+=e;let t=n.bloom<.35?rf(n.bloom/.35):Math.min(1,(Xd.flowerTime-n.bloom)/.4);a.scale.setScalar(Math.max(.001,t)*Xd.size),a.rotation.z=Math.sin(n.bloom*5)*.12,this.flyCoin(n),n.bloom>=Xd.flowerTime&&this.hide(n);continue}let o=n.t-Xd.growDelay;if(o<0)continue;a.visible=!0;let s=a.position;if(Math.hypot(t.x-s.x,t.z-s.z)<Xd.touch&&t.y>s.y-.4&&t.y<s.y+1.2){this.toFlower(n,r),n.coin.visible=!0;continue}let c=Math.min(1,(Xd.life-o)/.5),l=o<.4?rf(o/.4):1,u=1+Math.abs(Math.sin(o*4))*.06,d=l*c*Xd.size;a.scale.set(d,d*u,d),a.rotation.z=Math.sin(o*3)*.1,c<=0&&this.hide(n)}}toFlower(e,t){e.bloom=0,e.mesh.geometry=this.flower,e.mesh.visible=!0,e.mesh.scale.setScalar(.001);let n=e.mesh.position;t(n.x,n.y,n.z)}flyCoin(e){let t=e.coin;if(!t.visible)return;let n=e.bloom/Xd.coinTime;if(n>=1){t.visible=!1;return}let r=e.mesh.position;t.position.set(r.x,r.y+.7+Math.sin(n*Math.PI*.5)*1.6,r.z),t.rotation.y=e.bloom*14,t.scale.setScalar(n<.15?n/.15:Math.min(1,(1-n)/.25))}hide(e){e.live=!1,e.mesh.visible=!1,e.coin.visible=!1}};function of(e){return e===`giant`||e===`king`?3:1}var sf=Y.monster;function cf(e,t,n,r,i){let a=Cd(t,r);Td(e,a.x,0,a.z,i);let o=n.pos.x-e.pos.x,s=n.pos.z-e.pos.z,c=Math.hypot(o,s)||1;return n.nudge(o/c,s/c)}var lf=class{data;difficulty;pos;vel=new z;half={x:sf.halfSize,y:sf.halfSize*.9,z:sf.halfSize};group=new V;alive=!0;color=16777215;harmful=!0;bumps=!1;wins;cue=null;extras=null;visual=new V;pupils=[];pupilMat=null;time=Math.random()*10;home;zone;yaw=0;grounded=!1;push=new R;wobble=0;nudged=0;constructor(e,t){this.data=e,this.difficulty=t,this.pos=new z(...e.pos),this.home=this.pos.clone(),this.zone=e.zone,this.wins=of(e.type),this.group.add(this.visual),this.group.position.copy(this.pos)}watching(e,t){return!1}get excited(){return!1}get exposed(){return!0}get winsLeft(){return this.alive?this.wins:0}onStomp(){return`poof`}split(){return[]}onHit(){}onNudge(e,t){}moveBody(e,t,n,r){this.vel.y-=Y.physics.gravity*e;let i=Td(this,t*e,this.vel.y*e,n*e,r);return i.grounded&&(this.vel.y=0),i}update(e,t,n){if(!this.alive)return;this.time+=e;let r=t.pos.x-this.pos.x,i=t.pos.z-this.pos.z,a={dx:r,dz:i,dist:Math.hypot(r,i)},o=this.think(e,t,a),s=o.x+this.push.x,c=o.z+this.push.y;this.push.multiplyScalar(Math.exp(-e*10)),this.vel.x=s,this.vel.z=c;let l=this.moveBody(e,s,c,n);this.grounded=l.grounded,(l.hitX||l.hitZ)&&this.onHit();let u=this.zone;this.pos.x=Math.min(u.maxX,Math.max(u.minX,this.pos.x)),this.pos.z=Math.min(u.maxZ,Math.max(u.minZ,this.pos.z)),this.pos.y<Y.physics.fallY&&this.pos.copy(this.home),this.group.position.copy(this.pos);let d=Math.hypot(o.x,o.z)>.1,f=this.yaw;this.watching(a,d)?f=Math.atan2(r,i):d&&(f=Math.atan2(o.x,o.z));let p=f-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,e*8),this.group.rotation.y=this.yaw,this.animate(e,d),this.nudged=Math.max(0,this.nudged-e),this.wobble=Math.max(0,this.wobble-e*2.5);let m=Math.sin(this.wobble*Math.PI*3)*.16*this.wobble;if(this.group.scale.set(1+m,1-m,1+m),this.pupilMat){let e=this.excited;this.pupilMat.color.setHex(e?16722474:1908011),this.pupilMat.emissive.setHex(e?13369344:0)}}inZone(e,t){let n=this.zone;return e.x>n.minX-t&&e.x<n.maxX+t&&e.z>n.minZ-t&&e.z<n.maxZ+t}randomSpot(e){let t=this.zone,n=Math.random()*Math.PI*2,r=e*(.4+Math.random()*.6);return new z(Math.min(t.maxX,Math.max(t.minX,this.pos.x+Math.cos(n)*r)),this.pos.y,Math.min(t.maxZ,Math.max(t.minZ,this.pos.z+Math.sin(n)*r)))}eyes(e,t,n,r,i=.2){let a=new q({color:16776168,roughness:.2}),o=this.pupilMat=new q({color:1908011,roughness:.2}),s=new q({color:1908011,roughness:.6});[-1,1].forEach((c,l)=>{let u=r[l],d=new W(new K(u,16,12),a);d.position.set(c*i,t,n),d.scale.set(1,.85,1),e.add(d);let f=new W(new K(u*.42,12,8),o);f.position.set(c*(i-u*.18),t-u*.08,n+u*.75),e.add(f),this.pupils.push(f);let p=new W(new aa(u*2.4,u*.55,u*.7),s);p.position.set(c*(i-u*.1),t+u*.62,n+u*.55),p.rotation.z=c*.5,e.add(p)})}snarl(e,t,n,r){let i=new q({color:2756640,roughness:.5}),a=new q({color:16777215,roughness:.3}),o=new W(new K(r/2,16,8),i);o.scale.set(1,.32,.35),o.position.set(0,t,n),e.add(o);for(let i of[-1,1]){let o=new W(new ca(r*.1,r*.28,6),a);o.rotation.x=Math.PI,o.position.set(i*r*.24,t-r*.04,n+r*.13),e.add(o)}}shove(e,t,n=sf.pushSpeed){this.push.set(e*n,t*n)}nudge(e,t){return this.push.lengthSq()<sf.nudgeSpeed*sf.nudgeSpeed&&this.shove(e,t,sf.nudgeSpeed),this.nudged>0?!1:(this.nudged=sf.nudgeCooldown,this.wobble=1,this.onNudge(e,t),!0)}poof(){this.alive=!1,this.group.visible=!1}afterlife(e){}},uf=Y.monster,df=class extends lf{state=`idle`;timer=0;wander=new R;wanderTimer=0;constructor(e,t){super(e,t);let n=[8011729,14169167,3112912],r=n[Math.floor(Math.abs(this.home.x*5+this.home.z*11))%n.length];this.color=r;let i=new q({color:r,roughness:.9,flatShading:!0}),a=new W(new Oo(.5,1),i);a.castShadow=!0,this.visual.add(a);let o=new Oo(.16,0);for(let e=0;e<18;e++){let t=Math.acos(1-2*(e+.5)/18),n=Math.PI*(1+Math.sqrt(5))*e,r=new z(Math.sin(t)*Math.cos(n),Math.cos(t),Math.sin(t)*Math.sin(n));if(r.z>.55&&r.y>-.2)continue;let a=new W(o,i);a.position.copy(r.multiplyScalar(.48)),a.rotation.set(e,e*2,e*3),this.visual.add(a)}for(let e of[-1,1]){let t=new W(new ca(.11,.42,6),i);t.position.set(e*.27,.55,0),t.rotation.z=-e*.45,this.visual.add(t)}this.eyes(this.visual,.14,.4,[.15,.15]),this.snarl(this.visual,-.1,.46,.3);for(let e of[-1,1]){let t=new W(new K(.12,10,8),i);t.scale.set(1,.6,1.3),t.position.set(e*.2,-.42,.08),this.visual.add(t)}}get chasing(){return this.state===`chase`}get excited(){return this.chasing}think(e,t,n){let r=Y.player.moveSpeed*uf.chaserSpeedFactor[this.difficulty];this.timer+=e;let i=!t.respawning&&n.dist<uf.chaserSenseRadius&&Math.abs(t.pos.y-this.pos.y)<2.5&&this.inZone(t.pos,1);switch(this.state){case`idle`:if(this.wanderTimer-=e,this.wanderTimer<=0){this.wanderTimer=1.5+Math.random()*2;let e=Math.random()*Math.PI*2,t=this.home.clone().sub(this.pos);this.wander.set(Math.cos(e)*.8+t.x*.3,Math.sin(e)*.8+t.z*.3)}return i&&(this.state=`chase`,this.timer=0),{x:this.wander.x,z:this.wander.y};case`chase`:return(this.timer>uf.chaserGiveUpTime||n.dist>uf.chaserGiveUpDistance||t.respawning)&&(this.state=`cooldown`,this.timer=0),n.dist>.01?{x:n.dx/n.dist*r,z:n.dz/n.dist*r}:{x:0,z:0};case`cooldown`:{this.timer>uf.chaserCooldown&&(this.state=`idle`,this.timer=0);let e=this.home.x-this.pos.x,t=this.home.z-this.pos.z,n=Math.hypot(e,t);return n>.3?{x:e/n*1.5,z:t/n*1.5}:{x:0,z:0}}}}watching(){return this.chasing}animate(){let e=this.chasing,t=Math.abs(Math.sin(this.time*(e?14:7)));this.visual.position.y=t*(e?.3:.12),this.visual.scale.set(1+(1-t)*.1,1-(1-t)*.12,1+(1-t)*.1)}shove(e,t,n){super.shove(e,t,n),this.state===`chase`&&(this.state=`cooldown`,this.timer=0)}},ff=Y.monster,pf=class extends lf{sit=ff.hopperSitTime*Math.random();airborne=!1;hop=new R;legs=[];constructor(e,t){super(e,t);let n=[4173370,2072202,9060292],r=n[Math.floor(Math.abs(this.home.x*11+this.home.z*5))%n.length];this.color=r;let i=new q({color:r,roughness:.2,emissive:r,emissiveIntensity:.06}),a=new q({color:15261808,roughness:.4}),o=new q({color:1911322,roughness:.8}),s=new W(new K(.55,24,18),i);s.scale.set(1.1,.7,1),s.castShadow=!0,this.visual.add(s);let c=new W(new K(.4,16,12),a);c.scale.set(1,.6,.7),c.position.set(0,-.12,.2),this.visual.add(c);for(let e of[-1,1]){let t=new W(new K(.17,14,10),i);t.position.set(e*.22,.32,.22),this.visual.add(t)}this.eyes(this.visual,.36,.32,[.13,.13],.22),this.snarl(this.visual,.02,.5,.42);for(let[e,t,n]of[[-.25,-.15,.07],[.2,-.25,.06],[.02,-.05,.05],[.3,.05,.05]]){let r=new W(new K(n,8,6),o);r.position.set(e,.33+t*.3,t),this.visual.add(r)}for(let e of[-1,1]){let t=new W(new K(.2,12,8),i);t.scale.set(.8,.5,1.3),t.position.set(e*.42,-.3,-.15),this.legs.push(t),this.visual.add(t)}}think(e){if(this.airborne){if(this.grounded&&this.vel.y<=0)this.airborne=!1,this.sit=ff.hopperSitTime;else return{x:this.hop.x,z:this.hop.y}}if(this.sit-=e,this.sit>0)return{x:0,z:0};let t=this.randomSpot(ff.hopperHopDistance),n=pd(ff.hopperJumpHeight),r=2*n/Y.physics.gravity;return this.hop.set((t.x-this.pos.x)/r,(t.z-this.pos.z)/r),this.vel.y=n,this.airborne=!0,this.grounded=!1,{x:this.hop.x,z:this.hop.y}}watching(e,t){return!t}animate(){if(this.airborne){let e=Math.max(-.15,Math.min(.2,this.vel.y*.04));this.visual.scale.set(1-e*.5,1+e,1-e*.5),this.legs.forEach(e=>e.position.z=-.35)}else{let e=Math.max(0,1-this.sit/.35)*.18,t=Math.sin(this.time*4)*.02;this.visual.scale.set(1+e*.6,1-e+t,1+e*.6),this.legs.forEach(e=>e.position.z=-.15)}this.visual.position.y=-.05}},mf=class extends pf{flame=[];sparks=[];constructor(e,t){super(e,t),this.visual.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()}),this.visual.clear(),this.pupils.length=0,this.legs.length=0;let n=[16742954,16734810,16752686],r=n[Math.floor(Math.abs(this.home.x*11+this.home.z*5))%n.length];this.color=r;let i=new q({color:r,roughness:.5,emissive:r,emissiveIntensity:.52}),a=new q({color:6175306,roughness:.9,flatShading:!0}),o=new W(new Oo(.5,2),i);o.scale.set(1.08,.82,1),o.castShadow=!0,this.visual.add(o);for(let[e,t,n,r]of[[-.3,.12,-.2,.22],[.28,.16,-.18,.2],[0,.28,-.28,.2],[-.38,-.08,.05,.16],[.4,-.06,.02,.15]]){let i=new W(new Oo(r,0),a);i.position.set(e,t,n),i.rotation.set(e*3,t*5,n*7),this.visual.add(i)}this.eyes(this.visual,.12,.38,[.13,.13],.19),this.snarl(this.visual,-.12,.42,.3);let s=[16769658,16757594,16742970].map(e=>qd(new li({color:e})));for(let[e,t,n]of[[0,.42,0],[-.1,.28,1],[.1,.3,2]]){let r=new W(new ca(.1,t,8),s[n]);r.position.set(e,.36+t/2,-.04),r.userData.h=t,this.flame.push(r),this.visual.add(r)}let c=qd(new li({color:16769658}));for(let e=0;e<3;e++){let t=new W(new K(.04,6,4),c);t.userData.phase=e/3,this.sparks.push(t),this.visual.add(t)}for(let e of[-1,1]){let t=new W(new K(.15,10,8),a);t.scale.set(.9,.5,1.2),t.position.set(e*.3,-.36,-.1),this.legs.push(t),this.visual.add(t)}}animate(){super.animate(),this.flame.forEach((e,t)=>{let n=1+Math.sin(this.time*13+t*2.1)*.15;e.scale.set(1,n,1),e.position.y=.36+e.userData.h*n/2});for(let e of this.sparks){let t=(this.time*.8+e.userData.phase)%1;e.position.set(Math.sin((t+e.userData.phase)*9)*.15,.7+t*.6,-.04),e.scale.setScalar(1-t)}}},hf=Y.monster,gf=null;function _f(){if(gf)return gf;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),gf=new ta(e),gf}var vf=class extends lf{dir=1;wings=[];glow;lamp;constructor(e,t){super(e,t);let n=[11992924,16769613,8189951],r=n[Math.floor(Math.abs(this.home.x*7+this.home.z*11))%n.length];this.color=r;let i=new q({color:3812700,roughness:.4}),a=new W(new K(.42,20,14),i);a.scale.set(1,.9,1.05),a.position.z=.08,a.castShadow=!0,this.visual.add(a),this.lamp=new W(new K(.3,16,12),qd(new li({color:r}))),this.lamp.position.set(0,-.05,-.38),this.visual.add(this.lamp),this.glow=new ni(new Hr({map:_f(),color:r,transparent:!0,depthWrite:!1,blending:2})),this.glow.position.copy(this.lamp.position),this.glow.scale.setScalar(1.8),this.visual.add(this.glow),this.eyes(this.visual,.14,.44,[.12,.12],.16),this.snarl(this.visual,-.1,.48,.24);let o=qd(new li({color:r}));for(let e of[-1,1]){let t=new W(new G(.015,.015,.35,5),i);t.position.set(e*.12,.45,.25),t.rotation.set(.5,0,-e*.35);let n=new W(new K(.05,8,6),o);n.position.set(e*.19,.6,.33),this.visual.add(t,n)}let s=new q({color:16777215,transparent:!0,opacity:.55,roughness:.2,side:2,forceSinglePass:!0});for(let e of[-1,1]){let t=new W(new sa(.28,14),s);t.scale.set(.6,1,1),t.position.set(e*.22,.35,-.05),t.userData.side=e,this.wings.push(t),this.visual.add(t)}}think(){let e=this.data.patrol;if(!e)return{x:0,z:0};let t=e.axis===`x`?this.pos.x:this.pos.z;t<=Math.min(e.a,e.b)&&(this.dir=1),t>=Math.max(e.a,e.b)&&(this.dir=-1);let n=this.dir*hf.walkerSpeed;return e.axis===`x`?{x:n,z:0}:{x:0,z:n}}onHit(){this.dir*=-1}watching(e,t){return e.dist<7&&!t}animate(){let e=this.time;this.visual.position.y=.08+Math.sin(e*3)*.06;for(let t of this.wings)t.rotation.set(-.3,t.userData.side*(.5+Math.sin(e*30)*.45),0);let t=.85+Math.sin(e*2.5)*.15;this.glow.scale.setScalar(1.8*t),this.glow.material.opacity=.75*t}},yf=Y.monster,bf=class extends lf{angle=Math.random()*Math.PI*2;radius;ground;wings=[];constructor(e,t){super(e,t),this.harmful=!1,this.bumps=!0;let n=this.zone;this.radius=Math.max(0,Math.min(yf.flyerRadius,(n.maxX-n.minX)/2-.3,(n.maxZ-n.minZ)/2-.3)),this.ground=e.pos[1]-.5,this.pos.y=this.ground+yf.flyerHeight,this.color=16765503;let r=new q({color:this.color,roughness:.5}),i=new q({color:2366512,roughness:.6}),a=new q({color:9080739,roughness:.9}),o=new W(new K(.45,22,16),r);o.scale.set(1,.9,1.15),o.castShadow=!0,this.visual.add(o);for(let e of[-.12,-.32]){let t=new W(new Po(.4-Math.abs(e)*.35,.05,8,24),i);t.position.z=e,this.visual.add(t)}let s=new W(new ca(.08,.3,8),i);s.rotation.x=-Math.PI/2,s.position.set(0,-.05,-.62),this.visual.add(s);for(let[e,t,n,r]of[[0,-.38,0,.22],[.2,-.33,.1,.16],[-.2,-.33,-.08,.17]]){let i=new W(new K(r,10,8),a);i.position.set(e,t,n),this.visual.add(i)}this.eyes(this.visual,.12,.42,[.12,.12],.16),this.snarl(this.visual,-.12,.49,.22);for(let e of[-1,1]){let t=new W(new K(.28,12,8),new q({color:15267583,roughness:.2,transparent:!0,opacity:.7}));t.scale.set(1,.15,.6),t.position.set(e*.38,.36,-.05),this.wings.push(t),this.visual.add(t);let n=new W(new K(.05,8,6),i);n.position.set(e*.12,.5,.25),this.visual.add(n)}}think(e){this.angle+=yf.flyerSpeed*e;let t=this.home.x+Math.cos(this.angle)*this.radius,n=this.home.z+Math.sin(this.angle)*this.radius;return{x:(t-this.pos.x)/Math.max(e,1e-4),z:(n-this.pos.z)/Math.max(e,1e-4)}}moveBody(e,t,n){return this.pos.x+=t*e,this.pos.z+=n*e,this.pos.y=this.ground+yf.flyerHeight+Math.sin(this.time*1.6)*yf.flyerBob,this.vel.y=0,{grounded:!1,ground:null,hitX:0,hitZ:0,hitCeiling:!1}}shove(){}animate(){let e=Math.sin(this.time*38)*.6;this.wings.forEach((t,n)=>t.rotation.z=(n?1:-1)*e),this.visual.rotation.x=Math.sin(this.time*1.6)*.08}},xf=Y.monster,Sf=class e extends lf{small;dir=1;wander=new R;scale;grace=0;constructor(e,t,n=!1){super(e,t),this.small=n;let r=this.scale=n?xf.giantKidScale:xf.giantScale;this.wins=n?1:3;let i=this.half.y*(r-1);this.half.x=this.half.z=xf.halfSize*r,this.half.y*=r,n||(this.pos.y+=i,this.home.copy(this.pos),this.group.position.copy(this.pos));let a=[14692458,9060320,2072278],o=a[Math.floor(Math.abs(e.pos[0]*3+e.pos[2]*7))%a.length];this.color=o;let s=new V;s.scale.setScalar(r),this.visual.add(s);let c=new q({color:o,roughness:.12,transparent:!0,opacity:.85,emissive:o,emissiveIntensity:.12}),l=new W(new K(.55,28,20),c);l.scale.set(1,.8,1),l.castShadow=!0,s.add(l);let u=new q({color:16777215,transparent:!0,opacity:.5,roughness:.1});for(let[e,t,n,r]of[[-.2,-.15,.1,.07],[.22,-.05,-.15,.05],[.05,-.25,-.2,.06]]){let i=new W(new K(r,8,6),u);i.position.set(e,t,n),s.add(i)}if(this.eyes(s,.16,.4,[.15,.15],.19),this.snarl(s,-.1,.5,.34),!n){let e=new q({color:16765503,roughness:.3,metalness:.3,emissive:6965760,emissiveIntensity:.3}),t=new W(new G(.2,.22,.1,16,1,!0),e);t.position.y=.47,s.add(t);for(let t=0;t<5;t++){let n=t/5*Math.PI*2,r=new W(new ca(.05,.13,6),e);r.position.set(Math.cos(n)*.2,.57,Math.sin(n)*.2),s.add(r)}}n&&(this.harmful=!1,this.grace=1),(n||!e.patrol)&&this.newWander()}onStomp(){return this.small?`poof`:`split`}split(){let t=new R(Math.cos(this.yaw),-Math.sin(this.yaw));return[-1,1].map(n=>{let r=new e({type:`giant`,pos:[this.pos.x,this.pos.y,this.pos.z],zone:this.zone},this.difficulty,!0);return r.vel.y=pd(1.2),r.shove(t.x*n,t.y*n),r.group.position.copy(r.pos),r})}newWander(){let e=Math.random()*Math.PI*2,t=this.small?xf.giantKidSpeed:xf.giantSpeed;this.wander.set(Math.cos(e)*t,Math.sin(e)*t)}think(e){this.grace>0&&(this.grace-=e,this.grace<=0&&(this.harmful=!0));let t=this.data.patrol;if(!this.small&&t){let e=t.axis===`x`?this.pos.x:this.pos.z;e<=Math.min(t.a,t.b)&&(this.dir=1),e>=Math.max(t.a,t.b)&&(this.dir=-1);let n=this.dir*xf.giantSpeed;return t.axis===`x`?{x:n,z:0}:{x:0,z:n}}if((Math.random()<e*.5||!this.inZone(this.pos,-.3))&&this.newWander(),!this.inZone(this.pos,-.3)){let e=this.zone,t=(e.minX+e.maxX)/2-this.pos.x,n=(e.minZ+e.maxZ)/2-this.pos.z,r=Math.hypot(t,n)||1;this.wander.set(t/r*this.wander.length(),n/r*this.wander.length())}return{x:this.wander.x,z:this.wander.y}}onHit(){this.dir*=-1,this.wander.multiplyScalar(-1)}watching(e,t){return e.dist<8&&!t}animate(){let e=Math.sin(this.time*(this.small?12:5)),t=this.small?.09:.06;this.visual.scale.set(1+e*t,1-e*t*1.2,1+e*t),this.visual.position.y=-.05*this.scale}},Cf=Y.boss,wf=class extends lf{king=new Ud(new z);phase=`high`;phaseTime=0;hits=0;angle=0;radius;ground;rainbow=new V;constructor(e,t){super(e,t),this.harmful=!1,this.bumps=!0,this.half.x=this.half.z=Cf.half.x,this.half.y=Cf.half.y,this.color=9060320;let n=this.zone;this.radius=Math.max(0,Math.min(Cf.radius,(n.maxX-n.minX)/2-1,(n.maxZ-n.minZ)/2-1)),this.ground=e.pos[1]-.5,this.pos.y=this.ground+Cf.highY;let r=this.king.cloud;r.removeFromParent(),r.position.set(0,-Cf.kingLift,0),this.visual.add(r),this.buildRainbow()}buildRainbow(){[16735324,16753981,16769357,7329370,5227519,11766015].forEach((e,t)=>{let n=new W(new Po(2.6-t*.18,.1,6,32,Math.PI),new q({color:e,emissive:e,emissiveIntensity:.32,roughness:.5}));this.rainbow.add(n)}),this.rainbow.position.set(0,-Cf.kingLift-.4,-.4),this.rainbow.visible=!1,this.visual.add(this.rainbow)}get winsLeft(){return this.alive?this.wins-this.hits:0}onStomp(){return this.phase!==`low`||this.pos.y>this.ground+Cf.lowY+.5?`none`:(this.hits++,this.hits>=this.wins?`poof`:(this.setPhase(`hurt`),this.king.setMood(`crying`),this.king.setLight(this.hits/this.wins),`hit`))}setPhase(e){this.phase=e,this.phaseTime=0}think(e){this.phaseTime+=e;let t=this.phaseTime;this.phase===`high`&&t>Cf.highTime-this.hits*Cf.highFaster?(this.setPhase(`low`),this.king.setMood(`smug`)):(this.phase===`low`&&t>Cf.lowTime||this.phase===`hurt`&&t>Cf.hurtTime)&&(this.setPhase(`high`),this.king.setMood(`angry`));let n=this.phase===`low`?Cf.lowSpeed:Cf.highSpeed;this.angle+=n*e;let r=this.home.x+Math.cos(this.angle)*this.radius,i=this.home.z+Math.sin(this.angle)*this.radius;return{x:(r-this.pos.x)/Math.max(e,1e-4),z:(i-this.pos.z)/Math.max(e,1e-4)}}moveBody(e,t,n){this.pos.x+=t*e,this.pos.z+=n*e;let r=this.ground+(this.phase===`low`?Cf.lowY:Cf.highY)+Math.sin(this.time*1.4)*.12;return this.pos.y+=(r-this.pos.y)*Math.min(1,e*Cf.climb),this.vel.y=0,{grounded:!1,ground:null,hitX:0,hitZ:0,hitCeiling:!1}}watching(e){return!0}shove(){}animate(e){this.king.pose(e)}poof(){this.alive=!1,this.setPhase(`free`),this.king.setMood(`happy`),this.king.setLight(1),this.rainbow.visible=!0,this.rainbow.scale.setScalar(.01)}afterlife(e){if(!this.group.visible)return;let t=this.phaseTime+=e;this.time+=e,this.king.pose(e),this.rainbow.scale.setScalar(Math.min(1,t/.6)),t>Cf.freeStay&&(this.pos.y+=Cf.flyAway*e),this.group.position.copy(this.pos),t>Cf.freeStay+Cf.freeFly&&(this.group.visible=!1)}},Tf=class extends df{constructor(e,t){super(e,t),this.visual.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()}),this.visual.clear(),this.pupils.length=0;let n=[14692458,2072278,9060320,3124810],r=n[Math.floor(Math.abs(this.home.x*5+this.home.z*11))%n.length];this.color=r;let i=new W(new G(.46,.46,.22,28),new q({color:16777215,roughness:.25}));i.rotation.x=Math.PI/2,i.position.y=.12,i.castShadow=!0,this.visual.add(i);let a=new q({color:r,roughness:.25});for(let e of[-1,1])for(let t=0;t<3;t++){let n=new W(new Po(.12+t*.12,.04,6,24,Math.PI*1.3),a);n.position.set(0,.12,e*.115),n.rotation.z=t*2.1,this.visual.add(n)}this.eyes(this.visual,.22,.17,[.1,.1],.16),this.snarl(this.visual,0,.14,.24);let o=new W(new G(.05,.05,.3,8),new q({color:16774880}));o.position.y=-.34,this.visual.add(o);for(let e of[-1,1]){let t=new W(new K(.1,10,8),a);t.scale.set(1,.6,1.3),t.position.set(e*.13,-.45,.06),this.visual.add(t)}}},Ef=Y.monster,Df=new li({color:2825492}),Of=new q({color:10120003,roughness:1,flatShading:!0}),kf=class extends lf{holes;hole=0;phase=`rise`;left=Math.random()*Ef.moleMoveTime;out=0;constructor(e,t){super(e,t),this.harmful=!1,this.holes=e.holes?.length?e.holes:[[e.pos[0],e.pos[2]]];let n=[6179442,6243894,4609647],r=n[Math.floor(Math.abs(this.home.x*13+this.home.z*3))%n.length];this.color=16765503;let i=new q({color:r,roughness:.9}),a=new q({color:16752568,roughness:.5}),o=new q({color:16765503,roughness:.35}),s=new q({color:16777215,emissive:16774048,emissiveIntensity:.8}),c=new W(new K(.5,22,16),i);c.scale.set(1,1.1,.95),c.castShadow=!0,this.visual.add(c);let l=new W(new K(.34,16,12),new q({color:14272440,roughness:.9}));l.position.set(0,-.1,.25),l.scale.set(1,1.1,.6),this.visual.add(l);let u=new W(new K(.42,20,10,0,Math.PI*2,0,Math.PI/2),o);u.position.y=.3,u.scale.set(1.05,.75,1.05),this.visual.add(u);let d=new W(new G(.47,.47,.05,20),o);d.position.y=.3,this.visual.add(d);let f=new W(new G(.08,.08,.06,12),s);f.rotation.x=Math.PI/2,f.position.set(0,.47,.32),this.visual.add(f),this.eyes(this.visual,.16,.43,[.08,.08],.14);let p=new W(new K(.08,12,8),a);p.position.set(0,.04,.5),this.visual.add(p),this.snarl(this.visual,-.08,.46,.22);for(let e of[-1,1]){let t=new W(new K(.13,10,8),a);t.scale.set(1.2,.6,.8),t.position.set(e*.3,-.2,.38),t.rotation.z=e*.4,this.visual.add(t)}let m=e.pos[1]-.5,h=new V;for(let[e,t]of this.holes){let n=new W(new sa(.5,20),Df);n.rotation.x=-Math.PI/2,n.position.set(e,m+.02,t);let r=new W(new Po(.55,.13,6,14),Of);r.rotation.x=Math.PI/2,r.scale.set(1,1,.6),r.position.set(e,m+.03,t),r.receiveShadow=!0,h.add(n,r)}this.extras=h,this.goTo(0)}get exposed(){return this.out>.5}goTo(e){this.hole=e,this.pos.x=this.holes[e][0],this.pos.z=this.holes[e][1]}think(e,t){if(this.left-=e,this.left>0)return{x:0,z:0};switch(this.phase){case`rise`:this.phase=`up`,this.left=Ef.moleUpTime;break;case`up`:this.phase=`down`,this.left=Ef.moleMoveTime;break;case`down`:this.phase=`under`,this.left=Ef.moleHideTime;break;case`under`:{let e=this.holes.map((e,t)=>t).filter(e=>e!==this.hole&&Math.hypot(this.holes[e][0]-t.pos.x,this.holes[e][1]-t.pos.z)>1.3);e.length&&this.goTo(e[Math.floor(Math.random()*e.length)]),this.phase=`rise`,this.left=Ef.moleMoveTime,this.cue=`pop`;break}}return{x:0,z:0}}onNudge(){this.phase===`up`&&(this.phase=`down`,this.left=Ef.moleMoveTime)}moveBody(){return{grounded:!0,ground:null,hitX:0,hitZ:0,hitCeiling:!1}}watching(e){return this.phase===`up`}animate(){let e=Math.max(0,this.left)/Ef.moleMoveTime;this.out=this.phase===`up`?1:this.phase===`under`?0:this.phase===`rise`?1-e:e;let t=this.out*this.out*(3-2*this.out);this.visual.position.y=-1.15*(1-t)+(this.phase===`up`?Math.sin(this.time*5)*.03:0),this.visual.scale.set(1,1+(this.phase===`rise`?Math.sin(t*Math.PI)*.15:0),1),this.visual.visible=this.out>.01}},Af=Y.monster,jf=class extends lf{state=`idle`;timer=0;wander=new R;wings=[];feet=[];constructor(e,t){super(e,t),this.harmful=!1,this.color=16751135;let n=new q({color:this.color,roughness:.95,flatShading:!0}),r=new q({color:16765503,roughness:.6}),i=new q({color:14164026,roughness:.5}),a=new W(new Oo(.48,2),n);a.scale.set(1,.95,1),a.castShadow=!0,this.visual.add(a);for(let e=0;e<3;e++){let t=new W(new K(.08,8,6),i);t.scale.set(.6,1.5,1),t.position.set(0,.52+(e===1?.04:0),.12-e*.12),t.rotation.x=(e-1)*.5,this.visual.add(t)}this.eyes(this.visual,.15,.4,[.12,.12],.16);let o=new W(new ca(.08,.18,8),r);o.rotation.x=Math.PI/2,o.position.set(0,0,.52),this.visual.add(o);for(let e of[-1,1]){let t=new W(new K(.16,10,8),n);t.scale.set(.4,.9,1),t.position.set(e*.47,0,-.02),this.wings.push(t),this.visual.add(t);let i=new W(new K(.08,8,6),r);i.scale.set(1,.5,1.6),i.position.set(e*.16,-.44,.08),this.feet.push(i),this.visual.add(i)}}think(e,t,n){this.timer+=e;let r=!t.respawning&&n.dist<Af.runnerSenseRadius&&Math.abs(t.pos.y-this.pos.y)<2.5;switch(this.state){case`idle`:if(r)this.state=`run`,this.timer=0;else if(Math.random()<e*.7){let e=Math.random()*Math.PI*2;this.wander.set(Math.cos(e)*.7,Math.sin(e)*.7)}return{x:this.wander.x,z:this.wander.y};case`run`:{this.timer>Af.runnerRunTime?(this.state=`rest`,this.timer=0):r||(this.state=`idle`,this.wander.set(0,0));let e=Y.player.moveSpeed*Af.runnerSpeedFactor[this.difficulty],t=n.dist>.01?-n.dx/n.dist*e:e,i=n.dist>.01?-n.dz/n.dist*e:0,a=this.zone;return(t<0&&this.pos.x<=a.minX+.05||t>0&&this.pos.x>=a.maxX-.05)&&(t=0),(i<0&&this.pos.z<=a.minZ+.05||i>0&&this.pos.z>=a.maxZ-.05)&&(i=0),{x:t,z:i}}case`rest`:return this.timer>Af.runnerRestTime&&(this.state=r?`run`:`idle`,this.timer=0),{x:0,z:0}}}onNudge(){this.grounded&&(this.vel.y=pd(.4)),this.cue=`squeak`,this.state===`idle`&&(this.state=`run`,this.timer=0)}watching(){return this.state===`rest`}animate(e,t){let n=this.time,r=this.state===`run`,i=r?Math.sin(n*30)*.9:Math.sin(n*3)*.1;this.wings.forEach((e,t)=>e.rotation.z=(t?1:-1)*(.2+i));let a=t?Math.sin(n*(r?22:10)):0;this.feet.forEach((e,t)=>e.position.z=.08+(t?a:-a)*.1);let o=t?Math.abs(Math.sin(n*(r?22:10)))*(r?.12:.05):0,s=this.state===`rest`?Math.sin(n*14)*.05:0;this.visual.position.y=o-.02,this.visual.scale.set(1+s,1-s,1+s)}},Mf=Y.monster,Nf=null;function Pf(){if(Nf)return Nf;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);return t.font=`900 52px system-ui, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.lineWidth=8,t.strokeStyle=`#5b4d86`,t.strokeText(`Z`,32,34),t.fillStyle=`#ffffff`,t.fillText(`Z`,32,34),Nf=new ta(e),Nf}var Ff=class extends lf{awake=0;wander=new R;openEyes=new V;closedEyes=new V;zs=[];constructor(e,t){super(e,t),this.harmful=!1;let n=[8220590,9072472,6258598],r=n[Math.floor(Math.abs(this.home.x*3+this.home.z*7))%n.length];this.color=r;let i=new q({color:r,roughness:.85}),a=new q({color:14209254,roughness:.85}),o=new q({color:3024960,roughness:.7}),s=new W(new K(.56,24,18),i);s.scale.set(1.05,.82,1),s.castShadow=!0,this.visual.add(s);let c=new W(new K(.4,18,12),a);c.position.set(0,-.08,.22),c.scale.set(1,.85,.7),this.visual.add(c);let l=new W(new K(.2,14,10),o);l.scale.set(2.1,.75,.6),l.position.set(0,.16,.38),this.visual.add(l);for(let e of[-1,1]){let t=new W(new ca(.13,.3,4),i);t.scale.set(1,1,.5),t.position.set(e*.3,.5,0),t.rotation.z=-e*.3,this.visual.add(t);let n=new W(new K(.12,10,8),i);n.scale.set(1,.6,1.3),n.position.set(e*.22,-.42,.12),this.visual.add(n)}for(let e=0;e<4;e++){let t=new W(new K(.13-e*.012,10,8),e%2?o:i);t.position.set(.12+e*.08,-.25+e*.08,-.5-e*.12),this.visual.add(t)}this.visual.add(this.openEyes,this.closedEyes),this.eyes(this.openEyes,.18,.44,[.14,.14],.17);let u=new aa(.18,.035,.04);for(let e of[-1,1]){let t=new W(u,a);t.rotation.z=e*.35,t.position.set(e*.17,.18,.5),this.closedEyes.add(t)}let d=new W(new K(.06,10,8),o);d.position.set(0,.03,.55),this.visual.add(d),this.snarl(this.visual,-.08,.52,.24);for(let e=0;e<3;e++){let e=new ni(new Hr({map:Pf(),transparent:!0,depthWrite:!1}));this.zs.push(e),this.group.add(e)}}think(e,t,n){return!t.respawning&&n.dist<Mf.sleeperWakeRadius&&Math.abs(t.pos.y-this.pos.y)<2.5?(this.awake<=0&&this.newWander(),this.awake=Mf.sleeperAwakeTime):this.awake=Math.max(0,this.awake-e),this.awake<=0?{x:0,z:0}:(Math.random()<e*.6&&this.newWander(),{x:this.wander.x,z:this.wander.y})}newWander(){let e=Math.random()*Math.PI*2;this.wander.set(Math.cos(e)*Mf.sleeperWanderSpeed,Math.sin(e)*Mf.sleeperWanderSpeed)}onNudge(e,t){this.grounded&&(this.vel.y=pd(.3)),this.awake=Mf.sleeperAwakeTime,this.wander.set(e*Mf.sleeperWanderSpeed,t*Mf.sleeperWanderSpeed)}watching(e,t){return this.awake>0&&!t}animate(){let e=this.awake<=0;this.openEyes.visible=!e,this.closedEyes.visible=e;let t=this.time,n=e?Math.sin(t*1.8)*.05:Math.abs(Math.sin(t*6))*.05;this.visual.scale.set(1+n,1-n*.8,1+n),this.visual.rotation.z=e?0:Math.sin(t*6)*.08,this.visual.position.y=-.04,this.zs.forEach((n,r)=>{n.visible=e;let i=(t*.45+r/3)%1;n.position.set(.25+i*.35+Math.sin(i*6)*.06,.55+i*1.1,.1),n.scale.setScalar(.18+i*.22),n.material.opacity=Math.sin(i*Math.PI)})}},If=class extends lf{dir=1;scarf;constructor(e,t){super(e,t);let n=[16735324,5227519,11766015,6219386],r=n[Math.floor(Math.abs(this.home.x*3+this.home.z*5))%n.length];this.color=16054527;let i=new q({color:16777215,roughness:.9}),a=new W(new K(.42,20,14),i);a.position.y=-.18,a.castShadow=!0;let o=new W(new K(.3,18,12),i);o.position.y=.32,o.castShadow=!0,this.visual.add(a,o),this.eyes(this.visual,.39,.24,[.09,.09],.11),this.snarl(this.visual,.2,.26,.2);let s=new W(new ca(.05,.22,8),new q({color:16747051}));s.rotation.x=Math.PI/2,s.position.set(0,.3,.38),this.visual.add(s),this.scarf=new W(new Po(.26,.07,8,20),new q({color:r,roughness:.8})),this.scarf.rotation.x=Math.PI/2,this.scarf.position.y=.1,this.visual.add(this.scarf);let c=new W(new G(.16,.21,.22,14),new q({color:r,roughness:.5}));c.position.set(.04,.64,0),c.rotation.z=-.25,this.visual.add(c);for(let e=0;e<3;e++){let t=new W(new K(.04,8,6),new q({color:3814736}));t.position.set(0,-.05-e*.14,.4-e*.02),this.visual.add(t)}}think(){let e=this.data.patrol;if(!e)return{x:0,z:0};let t=e.axis===`x`?this.pos.x:this.pos.z;t<=Math.min(e.a,e.b)&&(this.dir=1),t>=Math.max(e.a,e.b)&&(this.dir=-1);let n=this.dir*Y.monster.walkerSpeed;return e.axis===`x`?{x:n,z:0}:{x:0,z:n}}onHit(){this.dir*=-1}watching(e,t){return e.dist<7&&!t}animate(e,t){let n=this.time;this.visual.rotation.z=t?Math.sin(n*8)*.12:Math.sin(n*2)*.03,this.visual.position.y=-.03,this.scarf.rotation.z=Math.sin(n*6)*.2}},Lf=Y.monster,Rf={walker:class extends lf{dir=1;constructor(e,t){super(e,t);let n=[7129130,11554303,3127510,16742943],r=n[Math.floor(Math.abs(this.home.x*7+this.home.z*3))%n.length];this.color=r;let i=new W(new K(.55,28,20),new q({color:r,roughness:.15,transparent:!0,opacity:.88,emissive:r,emissiveIntensity:.1}));i.scale.set(1,.78,1),i.castShadow=!0,this.visual.add(i);for(let e of[-1,1]){let t=new W(new ca(.08,.26,8),i.material);t.position.set(e*.22,.44,.05),t.rotation.z=-e*.35,this.visual.add(t)}this.eyes(this.visual,.18,.38,[.15,.15]),this.snarl(this.visual,-.07,.49,.3)}think(){let e=this.data.patrol,t=e.axis===`x`?this.pos.x:this.pos.z;t<=Math.min(e.a,e.b)&&(this.dir=1),t>=Math.max(e.a,e.b)&&(this.dir=-1);let n=this.dir*Y.monster.walkerSpeed;return e.axis===`x`?{x:n,z:0}:{x:0,z:n}}onHit(){this.dir*=-1}watching(e,t){return e.dist<7&&!t}animate(){let e=Math.sin(this.time*9);this.visual.scale.set(1+e*.07,1-e*.08,1+e*.07),this.visual.position.y=-.05}},chaser:df,sleeper:Ff,runner:jf,hopper:pf,flyer:bf,turtle:class extends lf{dir=1;shell=0;guard=0;hidden=0;parts=[];dome=new V;spin=0;constructor(e,t){super(e,t);let n=[3112912,14169167,14715408,8011729],r=n[Math.floor(Math.abs(this.home.x*5+this.home.z*9))%n.length];this.color=r;let i=new q({color:r,roughness:.35}),a=new q({color:2760499,roughness:.5}),o=new q({color:6266431,roughness:.6}),s=new q({color:14270602,roughness:.5}),c=new W(new K(.56,24,12,0,Math.PI*2,0,Math.PI/2),i);c.scale.set(1,.85,1.05),c.castShadow=!0,this.dome.add(c);let l=new W(new Po(.55,.07,8,28),s);l.rotation.x=Math.PI/2,l.scale.set(1,1.05,1),this.dome.add(l);let u=new W(new G(.52,.46,.14,24),s);u.position.y=-.08,this.dome.add(u);for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=new W(new G(.11,.11,.04,6),a);n.position.set(Math.cos(t)*.36,.33,Math.sin(t)*.36),n.lookAt(n.position.clone().multiplyScalar(3)),n.rotateX(Math.PI/2),this.dome.add(n)}let d=new W(new G(.13,.13,.04,6),a);d.position.y=.47,this.dome.add(d),this.dome.position.y=-.12,this.visual.add(this.dome);let f=new V,p=new W(new K(.24,16,12),o);p.castShadow=!0,f.add(p),this.eyes(f,.08,.15,[.09,.09],.1),this.snarl(f,-.08,.21,.18),f.position.set(0,0,.55),f.userData.out=f.position.clone(),this.parts.push(f),this.visual.add(f);for(let[e,t]of[[-.36,.3],[.36,.3],[-.36,-.3],[.36,-.3]]){let n=new W(new K(.13,10,8),o);n.scale.set(1,.8,1.2),n.position.set(e,-.3,t),n.userData.out=n.position.clone(),this.parts.push(n),this.visual.add(n)}let m=new W(new ca(.07,.2,8),o);m.rotation.x=-Math.PI/2,m.position.set(0,-.15,-.6),m.userData.out=m.position.clone(),this.parts.push(m),this.visual.add(m)}get inShell(){return this.shell>0}onStomp(){return this.shell<=0?(this.shell=Lf.turtleShellTime,this.guard=Lf.turtleGuard,this.harmful=!1,`shell`):this.guard>0?`none`:`poof`}think(e){if(this.guard=Math.max(0,this.guard-e),this.shell>0)return this.shell=Math.max(0,this.shell-e),this.shell===0&&(this.harmful=!0),{x:0,z:0};let t=this.data.patrol;if(!t)return{x:0,z:0};let n=t.axis===`x`?this.pos.x:this.pos.z;n<=Math.min(t.a,t.b)&&(this.dir=1),n>=Math.max(t.a,t.b)&&(this.dir=-1);let r=this.dir*Lf.turtleSpeed;return t.axis===`x`?{x:r,z:0}:{x:0,z:r}}onNudge(e,t){this.inShell&&(this.shove(e,t,Lf.pushSpeed),this.spin=14)}onHit(){this.dir*=-1}watching(e,t){return e.dist<6&&!t&&!this.inShell}animate(e,t){this.hidden+=(+!!this.inShell-this.hidden)*Math.min(1,e*14);let n=1-this.hidden;for(let e of this.parts){let t=e.userData.out;e.position.set(t.x*(.4+.6*n),t.y*n+.05*this.hidden,t.z*(.4+.6*n)),e.scale.setScalar(Math.max(.01,n))}this.spin*=Math.exp(-e*3),this.dome.rotation.y+=this.spin*e;let r=this.time;if(this.inShell){let e=Math.max(0,1-this.shell/1.5);this.visual.rotation.z=Math.sin(r*18)*.12*e,this.visual.position.y=-.18,this.visual.scale.set(1,1,1)}else{this.visual.rotation.z=t?Math.sin(r*7)*.05:0,this.visual.position.y=-.05+(t?Math.abs(Math.sin(r*7))*.03:0);let e=Math.sin(r*3)*.015;this.visual.scale.set(1+e,1-e,1+e)}this.parts.slice(1,5).forEach((e,n)=>{t&&!this.inShell&&(e.position.y+=Math.sin(r*10+n%2*Math.PI)*.05)})}},mole:kf,giant:Sf,firefly:vf,snowman:If,lollipop:Tf,ember:mf,king:wf};function zf(e,t){let n=new Rf[e.type](e,t);return gd(n,n.group),n}var Bf={low:!1},Vf=new Set([`ground`,`start`,`goal`,`bridge`,`platform`,`wall`,`stone`]),Hf={fence:0,plank:.3,bridge:.5,start:.6,goal:.6,stone:.4,rock:.3};function Uf(e){switch(e.style){case`bridge`:return e.max[0]-e.min[0]>e.max[2]-e.min[2]?1:2;case`wall`:case`rock`:case`roof`:return 3;case`stone`:return 5;case`start`:case`goal`:return 4;default:return 0}}function Wf(e,t,n){let r=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,2654435769);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),((r^r>>>16)>>>0)/4294967296}var Gf=e=>e*e*(3-2*e);function Kf(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=Gf(e-r),s=Gf(t-i),c=Gf(n-a),l=(e,t,n)=>e+(t-e)*n,u=(e,t,n)=>Wf(r+e,i+t,a+n);return l(l(l(u(0,0,0),u(1,0,0),o),l(u(0,1,0),u(1,1,0),o),s),l(l(u(0,0,1),u(1,0,1),o),l(u(0,1,1),u(1,1,1),o),s),c)}function qf(e,t,n,r,i){let a=[];for(let n=0;n<=i&&t>0;n++)a.push(-e+t*n/i);t<=0&&a.push(-e);let o=-e+t,s=e-n,c=Math.max(1,Math.round((s-o)/r));for(let e=1;e<c;e++)a.push(o+(s-o)*e/c);for(let t=0;t<=i&&n>0;t++)a.push(e-n+n*t/i);return n<=0&&a.push(e),a.filter((e,t,n)=>t===0||e-n[t-1]>1e-5)}var Jf=class{pos=[];nrm=[];cap=[];shade=[];index=[];get count(){return this.pos.length/3}},Yf=new z;function Xf(e,t,n,r,i){let a=e.pos,o=[a[(t+1)*3]-a[t*3],a[(t+1)*3+1]-a[t*3+1],a[(t+1)*3+2]-a[t*3+2]],s=[a[(t+n)*3]-a[t*3],a[(t+n)*3+1]-a[t*3+1],a[(t+n)*3+2]-a[t*3+2]];return[o[1]*s[2]-o[2]*s[1],o[2]*s[0]-o[0]*s[2],o[0]*s[1]-o[1]*s[0]][r]*i<0}function Zf(e,t,n,r,i,a,o){let s=Y.look,c=[(t.min[0]+t.max[0])/2,(t.min[1]+t.max[1])/2,(t.min[2]+t.max[2])/2],l=[(t.max[0]-t.min[0])/2,(t.max[1]-t.min[1])/2+i/2,(t.max[2]-t.min[2])/2];c[1]+=i/2;let u=Math.min(s.bevel,l[0]*.9,l[1]*.9,l[2]*.9),d=[n[0]?u:0,n[1]?u:0,r?0:u,u,n[2]?u:0,n[3]?u:0],f=[-l[0]+d[0],-l[1]+d[2],-l[2]+d[4]],p=[l[0]-d[1],l[1]-d[3],l[2]-d[5]],m=s.bevelSegments,h=t.max[1]+i,g=(e,t)=>qf(l[e],d[e*2],d[e*2+1],t,m),_=s.sideStep*(Bf.low?1.6:1),v=[g(0,_),g(1,_),g(2,_)],y=[g(0,4),g(1,4),g(2,4)],b=s.sideNoise;for(let[t,n,i,s]of[[0,-1,2,1],[0,1,1,2],[1,-1,0,2],[1,1,2,0],[2,-1,1,0],[2,1,0,1]]){if(t===1&&n<0&&r)continue;let d=t!==1,m=d?v[i]:y[i],g=d?v[s]:y[s],_=e.count;for(let r of g)for(let d of m){let m=[0,0,0];m[t]=n*l[t],m[i]=d,m[s]=r;let g=[Math.min(p[0],Math.max(f[0],m[0])),Math.min(p[1],Math.max(f[1],m[1])),Math.min(p[2],Math.max(f[2],m[2]))];Yf.set(m[0]-g[0],m[1]-g[1],m[2]-g[2]);let _=Yf.length();_<1e-6?(Yf.set(0,0,0).setComponent(t,n),_=0):Yf.divideScalar(_);let v=Yf.x,y=Yf.y,x=Yf.z,S=c[0]+(_>0?g[0]+v*u:m[0]),C=c[1]+(_>0?g[1]+y*u:m[1]),w=c[2]+(_>0?g[2]+x*u:m[2]),T=Math.hypot(v,x),E=h-C,D=Math.min(1,Math.max(0,(E-.35)/.5))*T;if(D>0&&b>0){let e=(Kf(S*.9,C*1.4,w*.9)*.7+Kf(S*2.3,C*2.3,w*2.3)*.3)*b*D;S-=v*e,w-=x*e}e.pos.push(S,C,w),e.nrm.push(v,y,x),e.cap.push(h,a),e.shade.push(1,o)}let x=m.length,S=Xf(e,_+Math.floor((g.length-1)/2)*x+Math.floor((x-1)/2),x,t,n);for(let t=0;t<g.length-1;t++)for(let n=0;n<x-1;n++){let r=_+t*x+n,i=r+1,a=r+x,o=a+1;S?e.index.push(r,a,i,i,a,o):e.index.push(r,i,a,i,o,a)}}}function Qf(e,t,n,r){let i=Y.look,a=(t.max[0]-t.min[0])/2,o=(t.max[2]-t.min[2])/2,s=(t.min[0]+t.max[0])/2,c=(t.min[2]+t.max[2])/2,l=t.min[1],u=Math.min(i.pillowMax,Math.max(.5,Math.min(a,o)*i.pillowDepth)),d=Math.min(a,o)*.75,f=Math.min(i.bevel,a*.9,o*.9),p=n[0]?f:0,m=n[1]?f:0,h=n[2]?f:0,g=n[3]?f:0,_=(e,t)=>{let n=[],r=Math.min(e,1.2);for(let t of[0,.02,.06,.13,.25,.42,.65,1])n.push(-e+r*t);let i=Math.max(1,Math.round((2*e-2*r)/t));for(let t=1;t<i;t++)n.push(-e+r+(2*e-2*r)*t/i);for(let t of[1,.65,.42,.25,.13,.06,.02,0])n.push(e-r*t);return n.filter((e,t,n)=>t===0||e-n[t-1]>1e-5)},v=_(a,Bf.low?1.4:.8),y=_(o,Bf.low?1.4:.8),b=e.count,x=new Float32Array(v.length*y.length*3),S=0;for(let e of y)for(let t of v){let n=a-Math.abs(t),r=o-Math.abs(e),i=-Math.log(Math.exp(-n*2)+Math.exp(-r*2))/2,f=Math.min(1,Math.max(0,i/d)),_=Math.sqrt(1-(1-f)*(1-f))*.45+f*.55,v=t,y=e,b=Math.min(a-m,Math.max(-a+p,v)),C=Math.min(o-g,Math.max(-o+h,y)),w=v-b,T=y-C,E=Math.hypot(w,T),D=Math.max(Math.abs(w)>1e-6?w>0?m:p:0,Math.abs(T)>1e-6?T>0?g:h:0);E>D&&E>1e-6&&(v=b+w/E*D,y=C+T/E*D);let O=s+v,ee=c+y,k=(Kf(O*.6,3.7,ee*.6)-.5)*.9+(Kf(O*1.7,9.1,ee*1.7)-.5)*.35,te=l-u*_*(.75+k*.6)-_*.05;x[S++]=O,x[S++]=Math.min(l,te),x[S++]=ee}let C=v.length,w=[];for(let e=0;e<y.length-1;e++)for(let t=0;t<C-1;t++){let n=e*C+t;w.push(n,n+1,n+C,n+1,n+C+1,n+C)}let T=new Mr;T.setAttribute(`position`,new vr(x,3)),T.setIndex(w),T.computeVertexNormals();let E=T.getAttribute(`normal`);for(let t=0;t<E.count;t++)e.pos.push(x[t*3],x[t*3+1],x[t*3+2]),e.nrm.push(E.getX(t),E.getY(t),E.getZ(t)),e.cap.push(r,0),e.shade.push(1-Math.min(.4,(l-x[t*3+1])/u*.4),6);for(let t of w)e.index.push(b+t);T.dispose()}function $f(e,t){let n=.02,r=[!0,!0,!0,!0];for(let i=0;i<4;i++){let a=i<2?0:2,o=a===0?2:0,s=i%2==0?e.min[a]:e.max[a],c=e.max[o]-e.min[o],l=0;for(let r of t)r===e||Math.abs(r.max[1]-e.max[1])>.06||r.style===`fence`||(i%2==0?r.min[a]<s+n&&r.max[a]>s-n&&r.min[a]<s-n:r.max[a]>s-n&&r.min[a]<s+n&&r.max[a]>s+n)&&(l+=Math.max(0,Math.min(e.max[o],r.max[o])-Math.max(e.min[o],r.min[o])));l>c*.8&&(r[i]=!1)}return r}var ep=class{mesh;ranges=[];color;topColor;constructor(e,t,n,r){let i=new Jf;for(let t of e){let a=$f(t,e),o=Vf.has(t.style)&&t.min[1]<=-2,s=n(t.style),c=Y.look.drip*r*(Hf[t.style]??1),l=i.count;Zf(i,t,a,o,s,c,Uf(t));let u=i.count;o&&Qf(i,t,a,t.max[1]+s),this.ranges.push({body:[l,u],pillow:[u,i.count]})}let a=new Mr;a.setAttribute(`position`,new U(i.pos,3)),a.setAttribute(`normal`,new U(i.nrm,3)),a.setAttribute(`cap`,new U(i.cap,2)),a.setAttribute(`shade`,new U(i.shade,2)),this.color=new U(new Float32Array(i.count*3),3),this.topColor=new U(new Float32Array(i.count*3),3),a.setAttribute(`color`,this.color),a.setAttribute(`topColor`,this.topColor),a.setIndex(i.count>65535?new br(i.index,1):new yr(i.index,1)),a.computeBoundingSphere(),this.mesh=new W(a,t),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0}paint(e,t){let n=this.ranges[e],r=this.color.array,i=this.topColor.array;for(let e=n.body[0];e<n.pillow[1];e++){let a=e<n.body[1]?t.side:t.pillow;r[e*3]=a.r,r[e*3+1]=a.g,r[e*3+2]=a.b,i[e*3]=t.top.r,i[e*3+1]=t.top.g,i[e*3+2]=t.top.b}}commit(){this.color.needsUpdate=!0,this.topColor.needsUpdate=!0}dispose(){this.mesh.geometry.dispose()}},tp={sparkle:{value:0},gloss:{value:0}};function np(){let e=new q({color:16777215,roughness:.85,vertexColors:!0});return e.onBeforeCompile=e=>{e.uniforms.capDepth={value:Y.look.capDepth},e.uniforms.sparkle=tp.sparkle,e.uniforms.gloss=tp.gloss,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 topColor;
attribute vec2 cap;
attribute vec2 shade;
varying vec3 vTopColor;
varying vec2 vCap;
varying vec2 vShade;
varying vec3 vLocal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vTopColor = topColor;
vCap = cap;
vShade = shade;
vLocal = transformed;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float capDepth;
uniform float sparkle;
uniform float gloss;
varying vec3 vTopColor;
varying vec2 vCap;
varying vec2 vShade;
varying vec3 vLocal;
float softHash(float n) { return fract(sin(n * 91.345) * 47453.21); }
float softHash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float softNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(softHash2(i), softHash2(i + vec2(1.0, 0.0)), u.x), mix(softHash2(i + vec2(0.0, 1.0)), softHash2(i + vec2(1.0, 1.0)), u.x), u.y);
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
// Координаты меша, а не мира: у уровня они совпадают, а у движущейся платформы узор едет вместе с ней.
vec3 P = vLocal;
// Каёмка верхнего слоя: полукруглые «капли» разной длины вдоль края.
float along = (P.x + P.z) * 2.2;
float dripF = fract(along) * 2.0 - 1.0;
float drop = sqrt(max(0.0, 1.0 - dripF * dripF)) * (0.35 + 0.65 * softHash(floor(along)));
float edge = capDepth + vCap.y * drop;
float depth = vCap.x - P.y;
float aa = max(fwidth(depth), 0.004) * 1.2;
float isTop = 1.0 - smoothstep(edge - aa, edge + aa, depth);
vec3 sideCol = vColor.rgb * vShade.x;
vec3 topCol = vTopColor;
int pat = int(vShade.y + 0.5);
// Верхний слой: мягкие пятна двух оттенков и светлая кромка по краю — край виден издалека.
float blot = softNoise(P.xz * 0.32) * 0.65 + softNoise(P.xz * 1.1 + 7.3) * 0.35;
topCol *= 0.93 + 0.12 * blot;
float lip = smoothstep(0.015, 0.06, depth) * (1.0 - smoothstep(edge * 0.55, edge, depth));
topCol = mix(topCol, vec3(1.0), lip * 0.22);
// Бока: слои, как у торта или земли, и к низу темнее.
float wob = softNoise(vec2(P.x + P.z, P.y) * vec2(0.6, 0.0)) * 0.6;
float strata = sin((P.y + wob) * 5.5) * 0.5 + 0.5;
sideCol *= (0.95 + 0.07 * strata) * mix(0.8, 1.0, exp(-max(depth - edge, 0.0) * 0.45));
if (pat == 6) {
  // Каменная подушка: пятна и трещинки.
  float n = softNoise(P.xz * 0.9 + P.y * 0.5) * 0.6 + softNoise(P.xz * 2.7 - P.y) * 0.4;
  float crack = smoothstep(0.03, 0.0, abs(softNoise(P.xz * 0.7 + P.y * 0.3) - 0.5));
  sideCol *= (0.85 + 0.28 * n) * (1.0 - crack * 0.25);
}
if (pat == 1 || pat == 2) {
  // Доски: тёмные щели и чуть разный тон у каждой доски.
  float t = (pat == 1 ? P.x : P.z) / 0.55;
  float fp = fract(t);
  float w = fwidth(t) + 0.02;
  float g = smoothstep(0.0, w * 2.5, fp) * smoothstep(1.0, 1.0 - w * 2.5, fp);
  topCol *= mix(0.68, 1.0, g) * (0.93 + 0.12 * softHash(floor(t)));
}
if (pat == 3 || pat == 5) {
  // Каменная кладка: ряды со сдвигом, мягкие швы, у каждого камня свой тон.
  float rowF = P.y / 0.5;
  float row = floor(rowF);
  float u = (P.x + P.z) / 0.95 + 0.5 * mod(row, 2.0);
  float fu = fract(u);
  float fv = fract(rowF);
  float d = min(min(fu, 1.0 - fu) * 1.9, min(fv, 1.0 - fv));
  float g = smoothstep(0.0, 0.09 + fwidth(u), d);
  sideCol *= mix(0.72, 1.0, g) * (0.9 + 0.18 * softHash(floor(u) + row * 17.0));
}
if (pat == 4 || pat == 5) {
  // Плитки: светлые швы сеткой 1 м.
  vec2 q = fract(P.xz);
  vec2 dd = min(q, 1.0 - q);
  float g = smoothstep(0.0, 0.035 + fwidth(P.x), min(dd.x, dd.y));
  topCol *= mix(1.1, 1.0, g) * (0.96 + 0.06 * softHash(floor(P.x) * 7.0 + floor(P.z)));
}
// Снег искрится: редкие яркие точки, мерцают при движении камеры.
if (sparkle > 0.0) {
  vec2 cellS = floor(P.xz * 9.0);
  float h = softHash2(cellS);
  float tw = step(0.985, h) * smoothstep(0.6, 1.0, fract(h * 37.0 + dot(normalize(vViewPosition), vec3(3.1, 1.7, 2.3))));
  topCol += vec3(tw * sparkle * 0.6);
}
diffuseColor.rgb = mix(sideCol, topCol, isTop);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
// Глазурь блестит.
roughnessFactor = mix(roughnessFactor, 0.32, gloss * isTop);`)},e.customProgramCacheKey=()=>`soft-box-3`,e}var rp=np(),ip={boots:16731486,spring:4054148,shield:5227519,magnet:16765503},ap={boots:`👟`,spring:`🌀`,shield:`🛡️`,magnet:`🧲`},op=.5,sp=class{root=new V;yaw=new V;bob=new V;squash=new V;bodyMat;feet=[];hands=[];pupils=[];shield;feetMat;bellyMat;lidMat;parts=new V;sprout=new V;hat=null;propeller=null;timers=new Map;eyelids=[];blinkTimer=2;constructor(){this.root.add(this.yaw),this.yaw.add(this.bob),this.bob.add(this.squash),this.squash.position.y=-.42;let e=this.parts;e.position.y=.52,this.squash.add(e),this.bodyMat=new q({color:16748459,roughness:.45,metalness:0});let t=new W(new K(op,32,24),this.bodyMat);t.castShadow=!0,e.add(t),this.bellyMat=new q({color:16766688,roughness:.6});let n=new W(new K(op*.72,24,16),this.bellyMat);n.position.set(0,-.12,.17),n.scale.set(1,.85,.75),e.add(n);let r=new q({color:16777215,roughness:.2}),i=new q({color:1908011,roughness:.2}),a=new li({color:16777215}),o=this.lidMat=new q({color:16748459,roughness:.45});for(let t of[-1,1]){let n=new W(new K(.15,20,16),r);n.position.set(t*.17,.12,.39),n.scale.set(1,1.2,.7),e.add(n);let s=new W(new K(.085,16,12),i);s.position.set(t*.17,.11,.48),s.scale.set(1,1.2,.6),e.add(s),this.pupils.push(s);let c=new W(new K(.03,8,6),a);c.position.set(t*.17+.03,.17,.53),e.add(c);let l=new W(new K(.16,16,12),o);l.position.copy(n.position),l.scale.set(1.05,.01,.8),e.add(l),this.eyelids.push(l);let u=new W(new K(.07,12,8),new q({color:16735370,roughness:.8}));u.position.set(t*.3,-.04,.37),u.scale.set(1,.6,.4),e.add(u)}let s=new W(new Po(.07,.018,8,16,Math.PI),i);s.position.set(0,-.06,.47),s.rotation.z=Math.PI,e.add(s);let c=new W(new G(.02,.025,.18,6),new q({color:5025616}));c.position.set(0,.56,0),this.sprout.add(c),e.add(this.sprout);let l=new q({color:6738798,roughness:.5});for(let e of[-1,1]){let t=new W(new K(.08,10,8),l);t.position.set(e*.08,.65,0),t.scale.set(1.3,.4,.7),t.rotation.z=e*-.5,this.sprout.add(t)}this.feetMat=new q({color:16752451,roughness:.5});for(let e of[-1,1]){let t=new W(new K(.13,14,10),this.feetMat);t.scale.set(1,.65,1.35),t.position.set(e*.2,.06,.05),t.castShadow=!0,this.squash.add(t),this.feet.push(t)}for(let e of[-1,1]){let t=new W(new K(.1,12,8),this.feetMat);t.position.set(e*.3,.75,.42),t.visible=!1,this.squash.add(t),this.hands.push(t)}this.shield=new W(new K(.85,32,24),new q({color:10478591,transparent:!0,opacity:.28,roughness:.05,emissive:5227519,emissiveIntensity:.3,depthWrite:!1})),this.shield.visible=!1,this.root.add(this.shield);for(let e of Object.keys(ip)){let t=document.createElement(`canvas`);t.width=t.height=128;let n=new ta(t);n.colorSpace=Ve;let r=new ni(new Hr({map:n,depthTest:!1,transparent:!0}));r.scale.setScalar(.6),r.renderOrder=10,r.visible=!1,this.root.add(r),this.timers.set(e,{sprite:r,canvas:t,tex:n,last:-1})}gd(this,this.root)}setSkin(e,t){this.bodyMat.color.setHex(e),this.lidMat.color.setHex(e),this.bellyMat.color.setHex(t)}setHat(e){this.hat&&(this.parts.remove(this.hat),this.hat.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())})),this.hat=e?lp(e):null,this.propeller=this.hat?.getObjectByName(`blades`)??null,this.hat&&this.parts.add(this.hat),this.sprout.visible=!e||e===`bow`}tick(e,t){this.propeller&&(this.propeller.rotation.y+=e*(6+t*3))}setBoots(e){this.feetMat.color.set(e?ip.boots:16752451)}blink(e){this.blinkTimer-=e;let t=.01;this.blinkTimer<.12&&(t=1),this.blinkTimer<0&&(this.blinkTimer=2+Math.random()*3);for(let e of this.eyelids)e.scale.y=t}updateTimers(e,t){let n=new Set(e.map(([e])=>e));for(let[e,t]of this.timers)n.has(e)||(t.sprite.visible=!1);e.forEach(([n,r],i)=>{let a=this.timers.get(n);a.sprite.visible=!0,a.sprite.position.set((i-(e.length-1)/2)*.7,1.35,0);let o=Math.min(1,Math.max(0,r/t)),s=Math.round(o*60);if(s===a.last)return;a.last=s;let c=a.canvas.getContext(`2d`);c.clearRect(0,0,128,128),c.beginPath(),c.arc(64,64,58,0,Math.PI*2),c.fillStyle=`rgba(255,255,255,0.85)`,c.fill(),c.beginPath(),c.moveTo(64,64),c.arc(64,64,56,-Math.PI/2,-Math.PI/2+Math.PI*2*o),c.closePath(),c.fillStyle=`#`+ip[n].toString(16).padStart(6,`0`),c.fill(),c.beginPath(),c.arc(64,64,38,0,Math.PI*2),c.fillStyle=`#ffffff`,c.fill(),c.font=`44px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,c.textAlign=`center`,c.textBaseline=`middle`,c.fillText(ap[n],64,68),a.tex.needsUpdate=!0})}},cp=(e,t={})=>new q({color:e,roughness:.4,...t});function lp(e){let t=new V,n=(e,n,r,i,a)=>{let o=new W(e,n);return o.position.set(r,i,a),o.castShadow=!0,t.add(o),o};switch(e){case`crown`:{let e=cp(16765503,{metalness:.4,roughness:.25,emissive:6965760,emissiveIntensity:.25});n(new G(.24,.26,.14,20,1,!0),e,0,.5,0).material.side=2;for(let t=0;t<5;t++){let r=t/5*Math.PI*2;n(new ca(.06,.16,6),e,Math.cos(r)*.23,.64,Math.sin(r)*.23),n(new K(.035,8,6),cp(t%2?5227519:16735370),Math.cos(r+.6)*.25,.5,Math.sin(r+.6)*.25)}break}case`cap`:{let e=cp(16735324);n(new K(.4,20,10,0,Math.PI*2,0,Math.PI/2),e,0,.28,0).scale.set(1,.75,1),n(new G(.26,.26,.04,16),cp(16777215),0,.3,.32).scale.set(1,1,.8),n(new K(.05,8,6),cp(16777215),0,.59,0);break}case`bow`:{let e=cp(16739253);for(let t of[-1,1]){let r=n(new K(.11,14,10),e,.24+t*.11,.43,.08);r.scale.set(1.3,.8,.45),r.rotation.z=t*.35}n(new K(.055,10,8),cp(16727450),.24,.43,.11),t.rotation.z=-.5;break}case`propeller`:{[16735324,16765503,5227519,6219386].forEach((e,t)=>{n(new K(.3,12,8,t/4*Math.PI*2,Math.PI/2,0,Math.PI/2),cp(e),0,.38,0).scale.set(1,.7,1)}),n(new G(.025,.025,.18,6),cp(8947865),0,.66,0);let e=new V;e.name=`blades`,e.position.y=.75;for(let t of[-1,1]){let n=new W(new aa(.36,.02,.09),cp(t>0?16735324:5227519));n.position.x=t*.18,e.add(n)}t.add(e);break}case`ears`:{let e=cp(16777215,{roughness:.7}),t=cp(16757711,{roughness:.7});for(let r of[-1,1]){let i=n(new K(.1,12,10),e,r*.17,.66,-.05);i.scale.set(.8,2.4,.5),i.rotation.z=-r*.2;let a=n(new K(.06,10,8),t,r*.17,.66,-.01);a.scale.set(.7,2.6,.3),a.rotation.z=-r*.2}break}}return t}var up=Y.story,dp=new R(0,-1),fp=Y.player.halfSize,pp=new z(0,0,4e3),mp=new H(8377963),hp=new H(13212267),gp=new H(.62,.6,.68),_p=new H(.5,.48,.55),vp=new H(9076904),yp={cx:0,cz:0,hx:6.5,hz:3.5,top:0},bp={cx:13,cz:-15,hx:4.5,hz:3,top:-1},xp=[{kind:`bunny`,monster:`runner`,x:-2.6,z:.6},{kind:`hedgehog`,monster:`walker`,x:-.6,z:-.6},{kind:`frog`,monster:`hopper`,x:1.4,z:.5},{kind:`chick`,monster:`sleeper`,x:3.3,z:-.4}],Sp=[{kind:`squirrel`,monster:`chaser`,x:bp.cx-2.4,z:bp.cz+.6},{kind:`turtle`,monster:`turtle`,x:bp.cx,z:bp.cz-.4},{kind:`penguin`,monster:`snowman`,x:bp.cx+2.4,z:bp.cz+.5}],Cp=class{particles;audio;group=new V;focus=new z;t=0;king;hero=new sp;heroPos=new z(-11,fp,1.6);heroFace=.6;hop=null;squash=0;angryUntil=-1;steam=0;near;far;colors={top:new H,side:new H,pillow:new H};freed=[];events;solids;away={pos:new z(0,0,200),respawning:!1};look=new z;tmp=new z;constructor(e,t,n){this.particles=e,this.audio=t,this.group.position.copy(pp),this.near=this.buildIsland(yp,xp,26),this.far=this.buildIsland(bp,Sp,18);for(let e of[this.near,this.far])this.paint(e,0);this.solids=[this.near.solid,this.far.solid],this.king=new Ud(new z(0,0,0)),this.king.autopilot=!1,this.king.rain=!1,this.king.cloud.position.set(16,6.5,-2.5),this.group.add(this.king.group),this.hero.setSkin(n.body,n.belly),this.hero.setHat(n.hat),this.hero.root.position.copy(this.heroPos),this.group.add(this.hero.root);let r=Math.atan2(bp.cx+1.5,bp.cz-1.8);this.events=[...this.near.actors.map((e,t)=>({at:up.dropsAt+t*up.dropGap,run:()=>this.king.dropAt(e.spot.x,e.spot.z)})),{at:up.heroAt,run:()=>this.heroHop(new z(-7.5,fp,1.6),1.2,up.hopTime)},{at:up.heroAt+up.hopTime,run:()=>this.heroHop(new z(-4.8,fp,1.8),1,up.hopTime)},{at:up.angryAt,run:()=>this.getAngry(up.angryTime)},...this.near.actors.map((e,t)=>({at:up.stompAt+t*up.stompGap,run:()=>this.stomp(t)})),{at:up.leaveAt,run:()=>{this.king.setMood(`angry`),this.audio.kingGrumble()}},{at:up.leaveAt+.7,run:()=>this.audio.kingGrumble()},...this.far.actors.map((e,t)=>({at:up.farDropsAt+t*up.dropGap,run:()=>this.king.dropAt(e.spot.x,e.spot.z)})),{at:up.resolveAt,run:()=>{this.heroFace=r,this.getAngry(1.6)}},{at:up.resolveAt+1.7,run:()=>this.heroHop(this.heroPos.clone(),1.3,.5)}].sort((e,t)=>e.at-t.at)}buildIsland(e,t,n){let r={minX:e.cx-e.hx,maxX:e.cx+e.hx,minZ:e.cz-e.hz,maxZ:e.cz+e.hz},i=new ep([{min:[r.minX,e.top-2.3,r.minZ],max:[r.maxX,e.top,r.maxZ],style:`ground`}],rp,()=>0,1);this.group.add(i.mesh);let a=new K(.11,8,6),o=[16743080,16765503,16777215,11766015];for(let t=0;t<n;t++){let r=t/n*Math.PI*2,i=new W(a,new q({color:o[t%o.length]}));i.position.set(e.cx+Math.cos(r)*(e.hx-.4),e.top+.08,e.cz+Math.sin(r)*(e.hz-.3)),this.group.add(i)}let s={rect:r,top:e.top,solid:{kind:`static`,...r,minY:e.top-2,maxY:e.top},soft:i,actors:[],gloom:0};return s.actors=t.map(t=>{let n=new zd(t.kind,new z(t.x,e.top+.35,t.z),r,`playful`);return this.group.add(n.group),{spot:t,island:s,critter:n,monster:null}}),s}aim(e){let t=Math.sin(this.t*.25)*.8,n=Mt.smootherstep(this.t,up.leaveAt+.8,up.leaveAt+.8+up.panTime),r=up.camera;e.position.set(t+r.wide.x*n,r.y+(r.wide.y-r.y)*n,r.z+(r.wide.z-r.z)*n).add(pp),this.look.set(t*.3,r.lookY,-.6).lerp(this.tmp.set(r.wideLook.x,r.wideLook.y,r.wideLook.z),n),this.focus.copy(this.look).add(pp),e.lookAt(this.focus)}get finished(){return this.t>=up.end}update(e){let t=this.t+=e;for(;this.events.length&&this.events[0].at<=t;)this.events.shift().run();let n=Mt.smoothstep(t,up.kingAt,up.kingAt+up.kingFly),r=Mt.smootherstep(t,up.leaveAt+1.2,up.leaveAt+1.2+up.kingFlyFar),i=this.king.cloud.position;i.set(16*(1-n)+Math.sin(t*.5)*.4*n,6.5-2.6*n+Math.sin(t*1.7)*.12,-2.5+1*n),i.lerp(this.tmp.set(bp.cx+Math.sin(t*.5)*.3,bp.top+3.6+Math.sin(t*1.7)*.12,bp.cz-.6),r),this.king.update(e,this.heroPos,dp,this.solids,(e,t,n)=>this.splash(e,t,n));for(let t of[this.near,this.far]){for(let n of t.actors)n.critter?.update(e,this.heroPos,this.solids),n.monster?.update(e,this.away,this.solids);let n=t.actors.filter(e=>e.monster?.alive).length/t.actors.length;t.gloom+=(n-t.gloom)*Math.min(1,e*3);let r=t.gloom*Y.gloom.amount;this.paint(t,r)}for(let t of this.freed)t.update(e,this.heroPos,this.solids);this.updateHero(e)}paint(e,t){let n=this.colors;n.top.copy(mp).lerp(gp,t),n.side.copy(hp).lerp(_p,t),n.pillow.copy(n.side).lerp(vp,.55),e.soft.paint(0,n),e.soft.commit()}world(e){return new z(e.x,e.y,e.z).add(pp)}splash(e,t,n){this.audio.plop();let r=[...this.near.actors,...this.far.actors].find(t=>t.critter&&Math.hypot(t.spot.x-e,t.spot.z-n)<1.2);if(!r||!r.critter)return;let i=r.critter.pos.clone();r.critter.group.removeFromParent(),r.critter=null;let a={minX:r.spot.x-1,maxX:r.spot.x+1,minZ:r.spot.z-.9,maxZ:r.spot.z+.9},o=zf({type:r.spot.monster,pos:[r.spot.x,r.island.top+.5,r.spot.z],zone:a,patrol:{axis:`x`,a:r.spot.x-.8,b:r.spot.x+.8}},`veryEasy`);r.monster=o,this.group.add(o.group),this.particles.poof(this.world(i),[8157336,10196916,5920368]),this.audio.poof()}heroHop(e,t,n,r){this.hop={from:this.heroPos.clone(),to:e,height:t,t:0,time:n,land:r},this.audio.jump()}getAngry(e){this.angryUntil=this.t+e,this.audio.heroAngry()}stomp(e){let t=this.near.actors[e],n=t.monster;if(!n)return;let r=n.pos.clone();r.y+=n.half.y+fp,this.heroHop(r,2.2,up.stompHop,()=>{n.poof(),this.particles.poof(this.world(n.pos),[16777215,16773371,15260927]),this.particles.sparkle(this.world(n.pos),[16765503,16774048],16),this.audio.poof(),this.audio.rescue();let e=new zd(t.spot.kind,n.pos,this.near.rect,`stay`);this.freed.push(e),this.group.add(e.group),this.king.angry(),this.audio.kingGrumble(),this.heroHop(new z(n.pos.x+.6,fp,n.pos.z+1.4),1.4,up.stompHop*.8)})}updateHero(e){let t=this.hop,n=this.heroPos;if(t){t.t+=e/t.time;let r=Math.min(1,t.t);n.lerpVectors(t.from,t.to,r),n.y+=4*t.height*r*(1-r);let i=t.to.x-t.from.x,a=t.to.z-t.from.z;Math.hypot(i,a)>.1&&(this.hero.yaw.rotation.y=Math.atan2(i,a)),r>=1&&(this.hop=null,this.squash=1,this.particles.dust(this.world({x:n.x,y:n.y-fp,z:n.z}),6),t.land?.())}else this.t>up.heroAt&&(this.hero.yaw.rotation.y+=(this.heroFace-this.hero.yaw.rotation.y)*Math.min(1,e*6));this.squash=Math.max(0,this.squash-e*5);let r=this.squash*.25;this.hero.squash.scale.set(1+r,1-r,1+r);let i=this.t<this.angryUntil;this.hero.root.position.copy(n),i?(this.hero.root.position.x+=Math.sin(this.t*60)*.05,this.hero.bob.rotation.z=Math.sin(this.t*30)*.08,this.steam-=e,this.steam<=0&&(this.steam=.12,this.particles.sparkle(this.world({x:n.x,y:n.y+.8,z:n.z}),[16734810,16751258,16777215],5))):this.hero.bob.rotation.z=0,this.hero.blink(e)}dispose(){this.group.removeFromParent();let e=new Set([...Id(),rp]);this.group.traverse(t=>{let n=t;if(t instanceof ni&&t.material.dispose(),!n.isMesh)return;e.has(n.geometry)||n.geometry.dispose();let r=Array.isArray(n.material)?n.material:[n.material];for(let t of r)e.has(t)||t.dispose()})}},wp=e=>440*2**((e-69)/12),Tp=class{ctx=null;master;sfx;musicGain;noiseBuffer;musicTimer=null;nextNoteTime=0;musicStep=0;coinCombo=0;lastCoinTime=0;volume=Y.audio.defaultVolume;musicOn=!0;asleep=!1;unlock(){if(!this.ctx){let e=navigator.audioSession;e&&(e.type=`playback`);let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicOn?Y.audio.musicVolume:0,this.musicGain.connect(this.master);let n=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let r=this.noiseBuffer.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1}!this.asleep&&this.ctx.state!==`running`&&this.ctx.resume(),this.startMusic()}sleep(e){this.asleep=e,this.ctx&&(e?this.ctx.suspend():this.ctx.state!==`running`&&this.ctx.resume())}setVolume(e){this.volume=e,this.ctx&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}setMusic(e){this.musicOn=e,this.ctx&&this.musicGain.gain.setTargetAtTime(e?Y.audio.musicVolume:0,this.ctx.currentTime,.1)}duck(e){if(!this.ctx)return;let t=e?0:this.musicOn?Y.audio.musicVolume:0;this.musicGain.gain.setTargetAtTime(t,this.ctx.currentTime,.1)}tone(e,t,n={}){let r=this.ctx;if(!r)return;let i=r.currentTime+(n.delay??0),a=r.createOscillator(),o=r.createGain();a.type=n.wave??`sine`,a.frequency.setValueAtTime(e,i),n.slideTo&&a.frequency.exponentialRampToValueAtTime(n.slideTo,i+t);let s=n.vol??.3,c=n.attack??.005;o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(s,i+c),o.gain.exponentialRampToValueAtTime(1e-4,i+t),a.connect(o).connect(n.dest??this.sfx),a.start(i),a.stop(i+t+.02)}noise(e,t={}){let n=this.ctx;if(!n)return;let r=n.currentTime+(t.delay??0),i=n.createBufferSource();i.buffer=this.noiseBuffer;let a=n.createBiquadFilter();a.type=`bandpass`,a.Q.value=t.q??1,a.frequency.setValueAtTime(t.freq??1e3,r),t.freqTo&&a.frequency.exponentialRampToValueAtTime(t.freqTo,r+e);let o=n.createGain();o.gain.setValueAtTime(t.vol??.3,r),o.gain.exponentialRampToValueAtTime(1e-4,r+e),i.connect(a).connect(o).connect(this.sfx),i.start(r),i.stop(r+e+.02)}jump(){this.tone(330,.18,{wave:`square`,vol:.08,slideTo:660}),this.tone(330,.18,{wave:`sine`,vol:.15,slideTo:700})}doubleJump(){this.tone(520,.2,{wave:`square`,vol:.07,slideTo:1040}),this.tone(780,.15,{wave:`sine`,vol:.12,slideTo:1400,delay:.04})}climb(){this.tone(600+Math.random()*120,.09,{wave:`triangle`,vol:.22,slideTo:900}),this.noise(.05,{vol:.1,freq:3e3,q:2})}land(e){this.noise(.12,{vol:.08+e*.12,freq:400,freqTo:120,q:1})}step(){this.noise(.04,{vol:.04,freq:900,q:1.5})}coin(){let e=this.ctx?.currentTime??0;this.coinCombo=e-this.lastCoinTime<.5?Math.min(this.coinCombo+1,10):0,this.lastCoinTime=e;let t=84+[0,2,4,5,7,9,11,12,14,16,17][this.coinCombo];this.tone(wp(t),.08,{wave:`square`,vol:.06}),this.tone(wp(t+7),.22,{wave:`square`,vol:.06,delay:.06}),this.tone(wp(t+7),.25,{wave:`sine`,vol:.12,delay:.06})}bonus(){[72,76,79,84,88].forEach((e,t)=>this.tone(wp(e),.18,{wave:`triangle`,vol:.2,delay:t*.07}))}bonusEnd(){[79,74,67].forEach((e,t)=>this.tone(wp(e),.15,{wave:`triangle`,vol:.12,delay:t*.08}))}poof(){this.noise(.35,{vol:.35,freq:1500,freqTo:200,q:.8}),this.tone(500,.25,{wave:`sine`,vol:.2,slideTo:120}),this.tone(wp(84),.12,{wave:`square`,vol:.05,delay:.12})}rescue(){[79,84].forEach((e,t)=>this.tone(wp(e),.1,{wave:`triangle`,vol:.14,slideTo:wp(e+3),delay:.22+t*.1}))}kingGrumble(){[0,.13,.26].forEach((e,t)=>this.tone(150-t*12,.12,{wave:`sawtooth`,vol:.05,slideTo:110,delay:.35+e}))}kingCry(){[0,.45].forEach(e=>this.tone(620,.4,{wave:`triangle`,vol:.1,slideTo:330,delay:.4+e}))}bloom(){[72,76,79,84,88].forEach((e,t)=>this.tone(wp(e),.35,{wave:`sine`,vol:.09,delay:.45+t*.07}))}heroAngry(){[0,.3,.6].forEach(e=>{this.noise(.15,{vol:.14,freq:900,freqTo:400,q:1,delay:e}),this.tone(330,.12,{wave:`square`,vol:.04,slideTo:260,delay:e})})}plop(){this.tone(700,.08,{wave:`sine`,vol:.08,slideTo:250})}thornBloom(){this.noise(.12,{vol:.12,freq:1400,freqTo:400,q:.8}),[84,91].forEach((e,t)=>this.tone(wp(e),.14,{wave:`triangle`,vol:.12,delay:.06+t*.08}))}grow(){this.tone(220,.45,{wave:`sine`,vol:.18,slideTo:660,delay:.1}),[67,71,74,79].forEach((e,t)=>this.tone(wp(e),.14,{wave:`triangle`,vol:.16,delay:.12+t*.07}))}hurt(){this.tone(500,.35,{wave:`triangle`,vol:.22,slideTo:200}),this.tone(480,.35,{wave:`sine`,vol:.12,slideTo:230,delay:.03})}shieldPop(){this.noise(.15,{vol:.3,freq:2500,q:3}),this.tone(900,.2,{wave:`sine`,vol:.2,slideTo:300})}splash(){this.tone(700,.25,{wave:`sine`,vol:.25,slideTo:150}),this.noise(.5,{vol:.2,freq:600,freqTo:150,q:.7,delay:.05}),this.tone(300,.15,{wave:`sine`,vol:.15,slideTo:500,delay:.25})}sizzle(){this.noise(.45,{vol:.18,freq:3500,freqTo:1500,q:.8}),this.tone(520,.12,{wave:`triangle`,vol:.18,slideTo:880,delay:.05}),this.tone(880,.1,{wave:`sine`,vol:.12,slideTo:660,delay:.17})}bubble(){this.tone(160+Math.random()*60,.09,{wave:`sine`,vol:.07,slideTo:420})}respawn(){[67,72,76].forEach((e,t)=>this.tone(wp(e),.12,{wave:`sine`,vol:.15,delay:t*.06}))}teleport(){this.tone(300,.45,{wave:`sine`,vol:.22,slideTo:1400}),this.tone(450,.4,{wave:`triangle`,vol:.08,slideTo:1800,delay:.05}),this.noise(.4,{vol:.12,freq:800,freqTo:5e3,q:2})}arrive(){[88,84,79,76].forEach((e,t)=>this.tone(wp(e),.16,{wave:`triangle`,vol:.14,delay:t*.05}))}zip(){this.tone(wp(84),.12,{wave:`triangle`,vol:.2}),this.noise(1.4,{vol:.08,freq:1200,freqTo:2400,q:6,delay:.05})}unzip(){this.tone(700,.25,{wave:`sine`,vol:.18,slideTo:350})}press(){this.tone(220,.12,{wave:`square`,vol:.08,slideTo:110}),this.tone(330,.3,{wave:`sine`,vol:.22,slideTo:660,delay:.08})}doorbell(){this.tone(wp(79),.35,{wave:`sine`,vol:.22}),this.tone(wp(76),.5,{wave:`sine`,vol:.22,delay:.25})}pop(){this.tone(180,.12,{wave:`sine`,vol:.25,slideTo:420}),this.noise(.08,{vol:.08,freq:600,q:1.5})}nudge(){this.tone(240,.14,{wave:`sine`,vol:.22,slideTo:420}),this.tone(480,.08,{wave:`triangle`,vol:.06,slideTo:700,delay:.03})}squeak(){this.tone(1300,.09,{wave:`sine`,vol:.14,slideTo:1900}),this.tone(1700,.07,{wave:`sine`,vol:.1,slideTo:2300,delay:.09})}shell(){this.tone(260,.12,{wave:`triangle`,vol:.3,slideTo:180}),this.noise(.06,{vol:.2,freq:1800,q:4}),this.tone(520,.08,{wave:`sine`,vol:.12,delay:.08})}split(){this.tone(300,.2,{wave:`sine`,vol:.25,slideTo:600}),this.tone(420,.18,{wave:`sine`,vol:.2,slideTo:840,delay:.12}),this.noise(.15,{vol:.12,freq:900,freqTo:300,q:1.5,delay:.05})}boing(){this.tone(180,.4,{wave:`sine`,vol:.3,slideTo:720}),this.tone(360,.3,{wave:`triangle`,vol:.08,slideTo:1e3})}checkpoint(){[72,79,84,91].forEach((e,t)=>this.tone(wp(e),.3,{wave:`sine`,vol:.18,delay:t*.09})),[72,79,84,91].forEach((e,t)=>this.tone(wp(e),.1,{wave:`square`,vol:.04,delay:t*.09}))}fanfare(){for(let[e,t,n]of[[72,0,.15],[72,.15,.1],[72,.25,.1],[76,.35,.3],[72,.65,.15],[76,.8,.15],[79,.95,.7]])this.tone(wp(e),n+.1,{wave:`square`,vol:.08,delay:t}),this.tone(wp(e+12),n+.1,{wave:`triangle`,vol:.12,delay:t}),this.tone(wp(e-12),n+.1,{wave:`sine`,vol:.2,delay:t});for(let e=0;e<6;e++)this.noise(.08,{vol:.1,freq:6e3,q:1,delay:1+e*.12})}locked(){this.tone(330,.16,{wave:`triangle`,vol:.18,slideTo:300}),this.tone(262,.22,{wave:`triangle`,vol:.18,slideTo:230,delay:.18})}click(){this.tone(880,.08,{wave:`triangle`,vol:.2})}startMusic(){this.ctx&&this.musicTimer===null&&(this.nextNoteTime=this.ctx.currentTime+.1,this.musicStep=0,this.musicTimer=window.setInterval(()=>this.scheduleMusic(),25))}scheduleMusic(){let e=this.ctx;if(e)for(;this.nextNoteTime<e.currentTime+.15;)this.playStep(this.musicStep,this.nextNoteTime-e.currentTime),this.nextNoteTime+=.22727272727272727,this.musicStep=(this.musicStep+1)%Ep.length}playStep(e,t){if(t<0)return;let n=Ep[e];if(n>0&&this.tone(wp(n),.2,{wave:`triangle`,vol:.5,delay:t,dest:this.musicGain,attack:.01}),e%2==0){let n=Dp[Math.floor(e/8)%Dp.length],r=e%4==0?n[0]-24:n[0]-12;this.tone(wp(r),.22,{wave:`sine`,vol:.55,delay:t,dest:this.musicGain})}else{let n=Dp[Math.floor(e/8)%Dp.length];for(let e of n)this.tone(wp(e),.1,{wave:`square`,vol:.05,delay:t,dest:this.musicGain})}}},Ep=[72,0,76,79,81,79,76,0,77,0,74,77,79,77,74,0,76,0,72,76,79,76,72,74,71,72,74,0,67,0,0,0,72,0,76,79,84,0,81,79,77,0,81,77,74,0,77,74,76,79,76,72,74,76,74,71,72,0,67,0,72,0,0,0],Dp=[[60,64,67],[65,69,72],[60,64,67],[67,71,74],[60,64,67],[65,69,72],[67,71,74],[60,64,67]],Op=class{mesh;particles=[];cursor=0;dummy=new An;color=new H;constructor(e,t,n){this.mesh=new Hi(e,t,n),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(qe);for(let e=0;e<n;e++)this.particles.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,gravity:0,drag:0,spin:0,rot:0,color:new H}),this.mesh.setColorAt(e,this.color.set(16777215));this.show(0)}show(e){this.mesh.count=e,this.mesh.visible=e>0}clear(){for(let e of this.particles)e.alive=!1;this.show(0)}emit(e){let[t,n]=e.speed??[1,3],[r,i]=e.life??[.4,.8],[a,o]=e.size??[.1,.2],s=e.spread??.2;for(let c=0;c<e.count;c++){let c=this.cursor;this.cursor=(this.cursor+1)%this.particles.length;let l=this.particles[c],u=Math.random()*Math.PI*2,d=e.flat?0:Math.acos(Math.random()*2-1)-Math.PI/2,f=t+Math.random()*(n-t);l.alive=!0,l.x=e.pos.x+(Math.random()-.5)*s,l.y=e.pos.y+(Math.random()-.5)*s,l.z=e.pos.z+(Math.random()-.5)*s,l.vx=Math.cos(u)*Math.cos(d)*f,l.vz=Math.sin(u)*Math.cos(d)*f,l.vy=Math.sin(d)*f+(e.up??0),l.maxLife=l.life=r+Math.random()*(i-r),l.size=a+Math.random()*(o-a),l.gravity=e.gravity??0,l.drag=e.drag??1,l.spin=(Math.random()-.5)*12,l.rot=Math.random()*Math.PI,l.color.set(e.colors[Math.floor(Math.random()*e.colors.length)])}}update(e){let t=this.dummy,n=this.mesh.count,r=0;for(let n=0;n<this.particles.length;n++){let i=this.particles[n];if(!i.alive)continue;if(i.life-=e,i.life<=0){i.alive=!1;continue}let a=Math.exp(-i.drag*e);i.vx*=a,i.vz*=a,i.vy=i.vy*a-i.gravity*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.rot+=i.spin*e;let o=i.life/i.maxLife,s=i.size*Math.min(1,o*3);t.position.set(i.x,i.y,i.z),t.rotation.set(i.rot,i.rot*.7,i.rot*.3),t.scale.setScalar(s),t.updateMatrix(),this.mesh.setMatrixAt(r,t.matrix),this.mesh.setColorAt(r,i.color),r++}if(this.show(r),r!==0||n!==0)for(let[e,t]of[[this.mesh.instanceMatrix,16],[this.mesh.instanceColor,3]])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(r,1)*t),e.needsUpdate=!0}},kp=class{mesh;rings=[];fade;m=new nn;color=new H;cursor=0;constructor(e){let t=new jo(.78,1,40).rotateX(-Math.PI/2);this.fade=new Pi(new Float32Array(e),1),t.setAttribute(`fade`,this.fade);let n=new li({color:16777215,transparent:!0,depthWrite:!1});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float fade;
varying float vFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vFade = fade;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFade;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.a *= vFade;`)},this.mesh=new Hi(t,n,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;for(let t=0;t<e;t++)this.rings.push({x:0,y:0,z:0,size:0,t:1,life:1}),this.mesh.setColorAt(t,this.color.set(16777215))}emit(e,t,n,r=.45){let i=this.cursor;this.cursor=(this.cursor+1)%this.rings.length,Object.assign(this.rings[i],{x:e.x,y:e.y+.03,z:e.z,size:n,t:0,life:r}),this.mesh.setColorAt(i,this.color.set(t)),this.mesh.instanceColor.needsUpdate=!0}update(e){let t=0;this.rings.forEach((n,r)=>{n.t<1&&(n.t=Math.min(1,n.t+e/n.life));let i=1-(1-n.t)*(1-n.t),a=n.t<1?n.size*(.25+.75*i):0;this.m.makeScale(a,1,a).setPosition(n.x,n.y,n.z),this.mesh.setMatrixAt(r,this.m),this.fade.setX(r,(1-n.t)*.75),n.t<1&&(t=r+1)}),this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.fade.needsUpdate=!0}clear(){for(let e of this.rings)e.t=1;this.mesh.count=0}},Ap=class{group=new V;puff;confetti;stars;rings=new kp(12);constructor(){this.puff=new Op(new Oo(1,1),new Ko({color:16777215,transparent:!0,opacity:.9}),300),this.confetti=new Op(new aa(1,.15,.6),new li({color:16777215}),600),this.stars=new Op(new ko(1,0),new li({color:16777215}),300),this.group.add(this.puff.mesh,this.confetti.mesh,this.stars.mesh,this.rings.mesh)}update(e){this.puff.update(e),this.confetti.update(e),this.stars.update(e),this.rings.update(e)}clear(){this.puff.clear(),this.confetti.clear(),this.stars.clear(),this.rings.clear()}ring(e,t=16777215,n=1.2){this.rings.emit(e,t,n)}petals(e,t,n=6){this.confetti.emit({count:n,pos:e,colors:t,speed:[1.2,2.6],up:2.6,life:[.6,1],size:[.05,.09],gravity:5,drag:2.5,spread:.3})}dust(e,t=8){this.puff.emit({count:t,pos:e,colors:[16777215,16774368],speed:[1.5,3],flat:!0,up:.6,life:[.3,.5],size:[.12,.22],drag:5,spread:.3})}sparkle(e,t,n=10){this.stars.emit({count:n,pos:e,colors:t,speed:[2,4.5],life:[.35,.7],size:[.06,.12],drag:3,gravity:4})}poof(e,t=[16777215,15984895]){this.puff.emit({count:22,pos:e,colors:t,speed:[2,5],life:[.4,.8],size:[.2,.42],drag:4,spread:.6,up:1})}trail(e,t,n){if(e===`stars`)this.stars.emit({count:1,pos:t,colors:[16765503,16777215,16774048],speed:[.2,.8],life:[.5,.9],size:[.07,.12],drag:2,gravity:.5});else if(e===`bubbles`)this.puff.emit({count:1,pos:t,colors:[13628671,16777215,15129855],speed:[.2,.6],up:1.2,life:[.7,1.2],size:[.08,.16],drag:1,gravity:-1.5});else if(e===`rainbow`){let e=[16735324,16752451,16765503,6219386,5227519,11766015];this.puff.emit({count:1,pos:t,colors:[e[Math.floor(n*12)%e.length]],speed:[0,.2],life:[.6,.8],size:[.12,.16],drag:4,gravity:0})}}confettiBurst(e,t=120){this.confetti.emit({count:t,pos:e,colors:[16739226,16765503,6219432,5227519,11766015,16752451],speed:[5,11],up:6,life:[1.5,2.6],size:[.12,.2],gravity:9,drag:1.6,spread:1})}},jp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Mp=new Os(-1,1,1,-1,0,1),Np=new class extends Mr{constructor(){super(),this.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new U([0,2,0,0,2,0],2))}},Pp=class{constructor(e){this._mesh=new W(Np,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Fp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Ip={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Lp=class e extends jp{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(i,a,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new $t(i,a,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new $t(i,a,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ip;this.highPassUniforms=Vo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vo.clone(Fp.uniforms),this.blendMaterial=new Wo({uniforms:this.copyUniforms,vertexShader:Fp.vertexShader,fragmentShader:Fp.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new li,this._fsQuad=new Pp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Wo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Lp.BlurDirectionX=new R(1,0),Lp.BlurDirectionY=new R(0,1);var Rp=`
  uniform float saturation;
  uniform vec3 tint;
  #include <tonemapping_pars_fragment>
  vec3 toScreen(vec3 c) {
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = max(mix(vec3(l), c, saturation), 0.0) * tint;
    return sRGBTransferOETF(vec4(NeutralToneMapping(c), 1.0)).rgb;
  }
`,zp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Bp=`
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  ${Rp}
  void main() {
    vec4 c = texture2D(tDiffuse, vUv);
    gl_FragColor = vec4(toScreen(c.rgb) * (1.0 - c.a), 1.0);
  }
`,Vp=`
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float vignette;
  varying vec2 vUv;
  ${Rp}
  void main() {
    vec3 c = toScreen(texture2D(tScene, vUv).rgb);
    // Как прежнее наложение свечения в UnrealBloomPass (AdditiveBlending с premultipliedAlpha: просто сумма).
    c += texture2D(tBloom, vUv).rgb;
    vec2 d = (vUv - 0.5) * vec2(1.15, 1.0);
    c *= 1.0 - vignette * smoothstep(0.35, 0.85, length(d));
    gl_FragColor = vec4(c, 1.0);
  }
`,Hp=new R(1,0),Up=new R(0,1);function Wp(){return{saturation:{value:Y.look.saturation},tint:{value:new H(1,1,1)},toneMappingExposure:{value:1}}}var Gp=class{renderer;scene;camera;target;bloom;bright;final;quad=new Pp;tint=new H(1,1,1);bloomScale;constructor(e,t,n,r){this.renderer=e,this.scene=t,this.camera=n;let i=Y.look.post,a=e.getDrawingBufferSize(new R);this.target=new $t(a.x,a.y,{type:_,samples:r?2:4}),this.bloom=new Lp(new R(a.x,a.y),i.bloom,i.bloomRadius,0),this.bright=new Wo({uniforms:{tDiffuse:{value:this.target.texture},...Wp()},vertexShader:zp,fragmentShader:Bp,toneMapped:!1,depthTest:!1,depthWrite:!1}),this.final=new Wo({uniforms:{tScene:{value:this.target.texture},tBloom:{value:this.bloom.renderTargetsHorizontal[0].texture},vignette:{value:i.vignette},...Wp()},vertexShader:zp,fragmentShader:Vp,toneMapped:!1,depthTest:!1,depthWrite:!1}),this.bright.uniforms.tint.value=this.final.uniforms.tint.value=this.tint,this.bloomScale=r?.5:1}setSize(e,t){let n=this.renderer.getPixelRatio();this.target.setSize(Math.round(e*n),Math.round(t*n));let r=this.bloomScale*n;this.bloom.setSize(Math.round(e*r),Math.round(t*r))}setTheme(e){this.tint.set(16777215).lerp(new H(e.fog),Y.look.post.tint)}compile(){let e=this.renderer,t=e.getRenderTarget();e.setRenderTarget(this.target);try{e.compile(this.scene,this.camera)}finally{e.setRenderTarget(t)}}render(){let e=this.renderer,t=this.bloom,n=e.toneMappingExposure;this.bright.uniforms.toneMappingExposure.value=this.final.uniforms.toneMappingExposure.value=n,e.setRenderTarget(this.target),e.render(this.scene,this.camera);let r=this.quad;r.material=this.bright,e.setRenderTarget(t.renderTargetBright),r.render(e);let i=t.renderTargetBright;for(let n=0;n<t.nMips;n++){let a=t.separableBlurMaterials[n];r.material=a,a.uniforms.colorTexture.value=i.texture,a.uniforms.direction.value=Hp,e.setRenderTarget(t.renderTargetsHorizontal[n]),r.render(e),a.uniforms.colorTexture.value=t.renderTargetsHorizontal[n].texture,a.uniforms.direction.value=Up,e.setRenderTarget(t.renderTargetsVertical[n]),r.render(e),i=t.renderTargetsVertical[n]}let a=t.compositeMaterial;a.uniforms.bloomStrength.value=t.strength,a.uniforms.bloomRadius.value=t.radius,r.material=a,e.setRenderTarget(t.renderTargetsHorizontal[0]),r.render(e),r.material=this.final,e.setRenderTarget(null),r.render(e)}dispose(){this.target.dispose(),this.bloom.dispose(),this.bright.dispose(),this.final.dispose(),this.quad.dispose()}},Kp={start:`first-meadow`,house:{gx:0,gz:0,next:`first-meadow`},nodes:[{id:`first-meadow`,gx:1,gz:1,icon:`🌼`,level:{design:`first-meadow`}},{id:`hop-hop`,gx:1,gz:2,icon:`🐸`,level:{design:`hop-hop`}},{id:`high-walls`,gx:1,gz:3,icon:`🧱`,level:{design:`high-walls`}},{id:`treasure-island`,gx:0,gz:3,icon:`💎`,level:{design:`treasure-island`}},{id:`buttons`,gx:2,gz:3,icon:`🔴`,level:{design:`buttons`}},{id:`magic-circles`,gx:3,gz:3,icon:`🌀`,level:{design:`magic-circles`}},{id:`sky-islands`,gx:3,gz:2,icon:`☁️`,level:{design:`sky-islands`}},{id:`cable-car`,gx:3,gz:1,icon:`🚡`,level:{design:`cable-car`}},{id:`dark-cave`,gx:4,gz:1,icon:`🦇`,level:{design:`dark-cave`}},{id:`lava-depths`,gx:4,gz:0,icon:`🌋`,level:{design:`lava-depths`}},{id:`mountain-maze`,gx:5,gz:1,icon:`⛰️`,level:{design:`mountain-maze`}},{id:`jelly-party`,gx:5,gz:2,icon:`🍭`,level:{design:`jelly-party`}},{id:`king-castle`,gx:6,gz:2,icon:`👑`,level:{design:`king-castle`}},{id:`endless`,gx:7,gz:0,icon:`🎲`,level:{procedural:{levelIndex:3,extras:!0,themes:[`meadow`,`candy`,`snow`,`sunset`,`cave`,`lava`]}},endless:!0}],edges:[[`first-meadow`,`hop-hop`],[`hop-hop`,`high-walls`],[`high-walls`,`treasure-island`],[`high-walls`,`buttons`],[`buttons`,`magic-circles`],[`magic-circles`,`sky-islands`],[`sky-islands`,`cable-car`],[`cable-car`,`dark-cave`],[`dark-cave`,`lava-depths`],[`dark-cave`,`mountain-maze`],[`mountain-maze`,`jelly-party`],[`jelly-party`,`king-castle`],[`king-castle`,`endless`]]};function qp(e){return e.b.top-e.a.top}var Jp={type:`bridge`,rise:()=>0,accepts:e=>Math.abs(qp(e))>.01?`мост — только между островами одной высоты`:null,build(e,t){let n=e.rng.chance(.5)?t.overlap:e.rng.range(5,t.overlap),r=e.box(t.rect(0,t.gap,n),t.a.top,n>=t.overlap-.01?`ground`:`bridge`,`walk`);return e.coinLine(t.point(.8,t.a.top+.9),t.point(t.gap-.8,t.a.top+.9),3),{nodes:[r],enter:`walk`}}},Yp=3,Xp={type:`gap`,rise(e,t){let n=t.a.top;return n>2&&(n>Y.level.highGround||e.rng.chance(.4))?-e.rng.range(1,Math.min(2.5,n)):Math.max(-n,e.rng.range(-.5,.5))},accepts(e,t){let n=qp(e);return n>t.maxRise?`яма: подъём ${n} больше ${t.maxRise}`:n<-3?`яма: спуск больше ${Yp}`:e.gap<t.maxGap+1?`яма: острова ближе ${t.maxGap+1}`:null},build(e,t){let n=e.rng.range(1.2,e.limits.maxGap),r=e.rng.range(.5,t.gap-n-.5),i=e.rng.range(4.5,Math.min(6.5,t.overlap)),a=e.box(t.rect(0,r,i),t.a.top,`ground`,`walk`),o=e.box(t.rect(r+n,t.gap,i),t.b.top,`ground`,t.b.top<t.a.top?`drop`:`jump`);return e.coinArc(t.point(r-.5,t.a.top+.9),t.point(r+n+.5,t.b.top+.9),3,1.3),{nodes:[a,o],enter:`walk`}}};function Q(e){return Math.round(e*1e3)/1e3}var Zp={N:`S`,S:`N`,E:`W`,W:`E`},Qp={N:[0,-1],S:[0,1],E:[1,0],W:[-1,0]},$p=class{a;b;dir;axis;sign;base;center;gap;overlap;constructor(e,t,n){this.a=e,this.b=t,this.dir=n,this.axis=n===`E`||n===`W`?`x`:`z`,this.sign=n===`E`||n===`S`?1:-1,n===`E`?(this.base=e.maxX,this.gap=t.minX-e.maxX):n===`W`?(this.base=e.minX,this.gap=e.minX-t.maxX):n===`S`?(this.base=e.maxZ,this.gap=t.minZ-e.maxZ):(this.base=e.minZ,this.gap=e.minZ-t.maxZ),this.axis===`x`?(this.center=(e.minZ+e.maxZ)/2,this.overlap=Math.min(e.maxZ,t.maxZ)-Math.max(e.minZ,t.minZ)):(this.center=(e.minX+e.maxX)/2,this.overlap=Math.min(e.maxX,t.maxX)-Math.max(e.minX,t.minX))}rect(e,t,n,r=0){let i=this.base+this.sign*e,a=this.base+this.sign*t,o=Math.min(i,a),s=Math.max(i,a),c=this.center+r;return this.axis===`x`?{minX:Q(o),maxX:Q(s),minZ:Q(c-n/2),maxZ:Q(c+n/2)}:{minX:Q(c-n/2),maxX:Q(c+n/2),minZ:Q(o),maxZ:Q(s)}}point(e,t,n=0){let r=Q(this.base+this.sign*e),i=Q(this.center+n);return this.axis===`x`?[r,Q(t),i]:[i,Q(t),r]}};function em(e,t,n){return{seed:e,levelIndex:t,difficulty:n,cells:[],links:[],boxes:[],moving:[],trampolines:[],coins:[],bonuses:[],monsters:[],checkpoints:[],buttons:[],gates:[],teleports:[],ziplines:[],caves:[],theme:`meadow`,start:[0,0,0],goal:{cell:0,pos:[0,0,0]},bounds:{minX:0,maxX:0,minZ:0,maxZ:0}}}function tm(e){let t={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0};for(let n of e)t.minX=Math.min(t.minX,n.min[0]),t.maxX=Math.max(t.maxX,n.max[0]),t.minZ=Math.min(t.minZ,n.min[2]),t.maxZ=Math.max(t.maxZ,n.max[2]);return t}var nm=class{rng;limits;levelIndex;data;constructor(e,t,n,r){this.rng=e,this.limits=t,this.levelIndex=n,this.data=r}box(e,t,n,r,i){let a=Math.min(t-1,Y.level.pillarBottom);return this.data.boxes.push({min:[e.minX,Q(a),e.minZ],max:[e.maxX,Q(t),e.maxZ],style:n,...i?{face:i}:{}}),{...e,top:Q(t),link:r}}coin(e){this.data.coins.push([Q(e[0]),Q(e[1]),Q(e[2])])}coinLine(e,t,n){for(let r=0;r<n;r++){let i=n===1?.5:r/(n-1);this.coin([e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i,e[2]+(t[2]-e[2])*i])}}coinArc(e,t,n,r){for(let i=1;i<=n;i++){let a=i/(n+1);this.coin([e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a+Math.sin(Math.PI*a)*r,e[2]+(t[2]-e[2])*a])}}spot(e,t){return[Q(this.rng.range(e.minX+t,e.maxX-t)),Q(this.rng.range(e.minZ+t,e.maxZ-t))]}},rm=3,im=3.6,am=.6,om=.4,sm={type:`moving`,rise:(e,t)=>t.gap>=4.8?0:null,accepts(e){return Math.abs(qp(e))>.01?`платформа — только между островами одной высоты`:e.gap<4.8?`платформа: острова ближе 4.8`:null},build(e,t){let n=t.a.top,r=1.9,i=t.gap-om-rm/2,a=Q(n-am/2),o=t.axis===`x`?[rm,am,im]:[im,am,rm];e.data.moving.push({size:o,from:t.point(r,a),to:t.point(i,a),period:Q(e.rng.range(5,6.5))});let s={...t.rect(r-rm/2,3.4,im),top:n,link:`moving`,alt:t.rect(i-rm/2,i+rm/2,im)};return e.coinLine(t.point(r,n+1.3),t.point(i,n+1.3),3),{nodes:[s],enter:`jump`}}},cm=Y.cave;function lm(e,t,n){let r=t.top,i=Q(t.top+cm.height);for(let a of[`N`,`S`,`E`,`W`])for(let[o,s]of hm(t,a,n[a])){if(s-o<.3)continue;let n=gm(t,a,o,s,cm.wall);e.boxes.push({min:[Q(n.minX),r,Q(n.minZ)],max:[Q(n.maxX),i,Q(n.maxZ)],style:`rock`})}e.boxes.push({min:[t.minX,i,t.minZ],max:[t.maxX,Q(i+cm.roof),t.maxZ],style:`roof`});let a=cm.wall;e.caves.push({kind:`cave`,min:[Q(t.minX+a),r,Q(t.minZ+a)],max:[Q(t.maxX-a),i,Q(t.maxZ-a)]})}var um=.6,dm=.2,fm=.8;function pm(e){e.cells.forEach((t,n)=>{let r=mm(e,n);if(t.cave)lm(e,t,r);else for(let n of[`N`,`S`,`E`,`W`])for(let[i,a]of hm(t,n,r[n])){if(a-i<.6)continue;let r=gm(t,n,i,a,dm);e.boxes.push({min:[Q(r.minX),t.top,Q(r.minZ)],max:[Q(r.maxX),Q(t.top+um),Q(r.maxZ)],style:`fence`})}})}function mm(e,t){let n={N:[],S:[],E:[],W:[]};for(let r of e.links){if(!r.dir)continue;let e=null;if(r.from===t?e=r.dir:r.to===t&&(e=Zp[r.dir]),!e)continue;let i=e===`N`||e===`S`,a=1/0,o=-1/0;for(let e of r.nodes)a=Math.min(a,i?e.minX:e.minZ),o=Math.max(o,i?e.maxX:e.maxZ);n[e].push([a-fm,o+fm])}return n}function hm(e,t,n){let r=t===`N`||t===`S`,i=r?e.minX:e.minZ,a=r?e.maxX:e.maxZ,o=[...n].sort((e,t)=>e[0]-t[0]),s=[],c=i;for(let[e,t]of o)e>c&&s.push([c,Math.min(e,a)]),c=Math.max(c,t);return c<a&&s.push([c,a]),s}function gm(e,t,n,r,i){if(t===`N`||t===`S`){let a=t===`N`?e.minZ:e.maxZ-i;return{minX:n,maxX:r,minZ:a,maxZ:a+i}}let a=t===`W`?e.minX:e.maxX-i;return{minX:a,maxX:a+i,minZ:n,maxZ:r}}var _m=2.8,vm=.16,ym={type:`ropeBridge`,rise:()=>0,accepts:e=>Math.abs(qp(e))>.01?`мостик — только между островами одной высоты`:null,build(e,t){let n=e.box(t.rect(0,t.gap,_m),t.a.top,`plank`,`walk`);for(let n of[-1,1]){let r=t.rect(.3,t.gap-.3,vm,n*(_m/2-vm/2));e.data.boxes.push({min:[r.minX,t.a.top,r.minZ],max:[r.maxX,Q(t.a.top+um),r.maxZ],style:`plank`})}return e.coinLine(t.point(.8,t.a.top+.9),t.point(t.gap-.8,t.a.top+.9),3),{nodes:[n],enter:`walk`}}},bm=2.2,xm=1.2;function Sm(e){for(let t=1;t<6;t++){let n=(e.gap-t*bm)/(t+1);if(n<=xm)return{count:t,gap:Math.max(0,n)}}return{count:6,gap:(e.gap-6*bm)/7}}var Cm={type:`steps`,rise(e,t){let{count:n}=Sm(t),r=t.a.top;if(r>Y.level.highGround)return-e.rng.range(1.5,Math.min(3,r));let i=Math.min((n+1)*e.limits.maxRise*.85,Y.level.maxHeight-r);return i<1?r>=1.5?-e.rng.range(1,Math.min(2.5,r)):null:e.rng.range(Math.min(1,i),i)},accepts(e,t){let{count:n,gap:r}=Sm(e);return r>xm?`ступеньки: острова слишком далеко`:qp(e)/(n+1)>t.maxRise?`ступеньки: подъём больше ${Q((n+1)*t.maxRise)}`:null},build(e,t){let{count:n,gap:r}=Sm(t),i=t.b.top-t.a.top,a=[];for(let o=1;o<=n;o++){let s=o*r+(o-1)*bm,c=t.a.top+i*o/(n+1),l=t.a.top+i*(o-1)/(n+1),u=e.rng.range(-.8,.8);a.push(e.box(t.rect(s,s+bm,e.rng.range(3.2,4),u),c,`platform`,c<l?`drop`:`jump`)),e.coin(t.point(s+bm/2,c+.9,u))}return{nodes:a,enter:i<0?`drop`:`jump`}}},wm={type:`trampoline`,rise(e,t){return t.dir===`S`||t.a.top>Y.level.highGround?null:e.rng.range(e.limits.trampolineRise[0],e.limits.trampolineRise[1])},accepts(e,t){if(e.dir===`S`)return`батут к камере закрывал бы обзор`;if(e.a.top>Y.level.highGround)return`батут: низ выше ${Y.level.highGround}`;let n=qp(e);return n<1?`батут: подъём меньше 1`:n>t.trampolineRise[1]?`батут: подъём больше ${t.trampolineRise[1]}`:null},build(e,t){let n=Y.trampoline.radius,r=-(n+.4),[i,,a]=t.point(r,t.a.top);e.data.trampolines.push({pos:[i,Q(t.a.top),a],radius:n});let o={...t.rect(r-n,r+n,2*n),top:t.a.top,link:`walk`,trampoline:!0},s=e.rng.range(.3,.9),c=e.rng.range(4.5,Math.min(6.5,t.overlap)),l=e.box(t.rect(s,t.gap,c),t.b.top,`platform`,`bounce`);for(let n=0;n<3;n++)e.coin(t.point(r+n*.5,t.a.top+2+n*1.4));return{nodes:[o,l],enter:`walk`}}},Tm=Y.cave,Em={bridge:Jp,ropeBridge:ym,gap:Xp,steps:Cm,moving:sm,wall:{type:`wall`,rise(e,t){return t.dir===`S`||t.a.top>Y.level.highGround?null:e.rng.range(e.limits.wallHeight[0],e.limits.wallHeight[1])},accepts(e,t){if(e.dir===`S`)return`стена к камере закрывала бы обзор`;if(e.a.top>Y.level.highGround)return`стена: низ выше ${Y.level.highGround}`;let n=qp(e);return n<1?`стена: подъём меньше 1 — лучше ступеньки`:n>t.wallHeight[1]?`стена: выше ${t.wallHeight[1]}`:null},build(e,t){let n=e.rng.range(4.5,Math.min(6.5,t.overlap)),r=e.box(t.rect(0,t.gap,n),t.b.top,`wall`,`climb`,Zp[t.dir]),i=t.b.top-t.a.top;for(let n=0;n<4;n++)e.coin(t.point(-.75,t.a.top+1+(i-.6)*(n/3)));return e.coin(t.point(1.2,t.b.top+.9)),{nodes:[r],enter:`walk`}}},trampoline:wm,tunnel:{type:`tunnel`,rise:(e,t)=>t.a.top<=Y.level.highGround?0:null,accepts(e){return Math.abs(qp(e))>.01?`туннель — только между островами одной высоты`:e.overlap<Tm.tunnelWidth+2*Tm.wall+1?`туннель: острова смотрят друг на друга меньше ${Tm.tunnelWidth+2*Tm.wall+1}`:null},build(e,t){let n=t.a.top,r=Tm.tunnelWidth+2*Tm.wall,i=e.box(t.rect(0,t.gap,r),n,`stone`,`walk`),a=[-(t.a.cave?Tm.wall:Tm.reach),t.gap+(t.b.cave?Tm.wall:Tm.reach)],o=(t,n,r,i)=>e.data.boxes.push({min:[t.minX,Q(n),t.minZ],max:[t.maxX,Q(r),t.maxZ],style:i});for(let e of[-1,1])o(t.rect(...a,Tm.wall,e*(Tm.tunnelWidth+Tm.wall)/2),n,n+Tm.height,`rock`);o(t.rect(...a,r),n+Tm.height,n+Tm.height+Tm.roof,`roof`);let s=t.rect(...a,Tm.tunnelWidth);return e.data.caves.push({kind:`tunnel`,min:[s.minX,Q(n),s.minZ],max:[s.maxX,Q(n+Tm.height),s.maxZ],axis:t.axis}),e.coinLine(t.point(.5,n+.9),t.point(t.gap-.5,n+.9),3),{nodes:[i],enter:`walk`}}}},Dm=new Set([`bridge`,`ropeBridge`,`gap`,`steps`,`wall`]);function Om(e,t,n){let r=e.rng.chance(.5)?-1:1,i=e.rng.chance(.5)?-1:1,a=r<0?t.minX+2:t.maxX-2,o=i<0?t.minZ+2:t.maxZ-2;e.data.checkpoints.push({cell:n,pos:[Q(a),Q(t.top),Q(o)],spawn:[Q(a-r*1.6),Q(t.top),Q(o-i*1.6)]})}var km=Y.zipline;function Am(e){return Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1],e.b[2]-e.a[2])}function jm(e,t){let n=km.sagPerMeter*Am(e)*4*t*(1-t);return[e.a[0]+(e.b[0]-e.a[0])*t,e.a[1]+(e.b[1]-e.a[1])*t-n,e.a[2]+(e.b[2]-e.a[2])*t]}function Mm(e){return Math.min(.2,.9/Math.max(1,Am(e)))}function Nm(e){return 1-Math.min(.25,1.6/Math.max(1,Am(e)))}function Pm(e,t,n){let[r,i,a]=jm(e,t);return[r,i-km.handGap-n,a]}var Fm=[5227519,16748459,16765503,6219386,11766015,16752451];function Im(e,t,n,r,i,a=!1){let o=e.cells,s=Fm[e.teleports.length%Fm.length];e.teleports.push({a:[Q(r[0]),o[t].top,Q(r[1])],b:[Q(i[0]),o[n].top,Q(i[1])],color:s,...a?{oneWay:!0}:{}}),e.links.push({from:t,to:n,type:`teleport`,nodes:[],enter:`walk`,tree:!1,...a?{oneWay:!0}:{}})}function Lm(e,t,n,r,i){let a=e.data.cells,o=Y.zipline,s={a:[Q(r[0]),Q(a[t].top+o.postTop),Q(r[1])],b:[Q(i[0]),Q(a[n].top+o.postBottom),Q(i[1])]};e.data.ziplines.push(s),e.data.links.push({from:t,to:n,type:`zip`,nodes:[],enter:`walk`,tree:!1,oneWay:!0});let c=Math.max(3,Math.round(Am(s)/2.5));for(let t=1;t<c;t++)e.coin(Pm(s,Mm(s)+(Nm(s)-Mm(s))*(t/c),Y.player.halfSize))}var Rm=new Set([`walker`,`turtle`,`giant`,`firefly`,`snowman`]);function zm(e){return{minX:Q(e.minX+.8),maxX:Q(e.maxX-.8),minZ:Q(e.minZ+.8),maxZ:Q(e.maxZ-.8)}}function Bm(e,t){return t===`x`?{axis:t,a:Q(e.minX+.6),b:Q(e.maxX-.6)}:{axis:t,a:Q(e.minZ+.6),b:Q(e.maxZ-.6)}}function Vm(e,t){let n=1.3,r=e.rng.chance(.5)?[[-1,-1],[1,1]]:[[1,-1],[-1,1]];for(let[i,a]of r){let r=i<0?t.minX+1.9:t.maxX-1.9,o=a<0?t.minZ+1.9:t.maxZ-1.9;e.data.boxes.push({min:[Q(r-.9),Q(t.top),Q(o-.9)],max:[Q(r+.9),Q(t.top+n),Q(o+.9)],style:`refuge`}),e.coin([r,t.top+n+.9,o])}}function Hm(e,t,n,r){let i=zm(t),a=(t.minX+t.maxX)/2,o=(t.minZ+t.maxZ)/2;Vm(e,t);let s=r?r.slice(0,n):n===1?[e.levelIndex<=1?`walker`:e.rng.pick([`walker`,`chaser`])]:n===2?[`walker`,`chaser`]:[`walker`,`chaser`,`walker`],c=s.length===1?[0]:s.length===2?[-1.5,1.5]:[-1.6,0,1.6];s.forEach((n,r)=>{let s=c[r];if(Rm.has(n)){let r=e.rng.chance(.5)?`x`:`z`;e.data.monsters.push({type:n,pos:[Q(r===`x`?a:a+s),Q(t.top+.5),Q(r===`x`?o+s:o)],zone:i,patrol:Bm(i,r)})}else e.data.monsters.push({type:n,pos:[Q(a+s),Q(t.top+.5),Q(o-s)],zone:i})});for(let n=0;n<4;n++){let r=n/4*Math.PI*2+.6;e.coin([a+Math.cos(r)*3,t.top+.9,o+Math.sin(r)*3])}}function Um(e){return[...e.buttons.map(e=>[e.pos[0],e.pos[2]]),...e.teleports.flatMap(e=>[[e.a[0],e.a[2]],[e.b[0],e.b[2]]]),...e.ziplines.flatMap(e=>[[e.a[0],e.a[2]],[e.b[0],e.b[2]]]),...e.checkpoints.map(e=>[e.pos[0],e.pos[2]]),...e.house?[]:[[e.goal.pos[0],e.goal.pos[2]]]]}function Wm(e,t,n,r){let i=.75;return r.find(r=>r.max[1]>n+.05&&r.min[1]<n+1.5&&e+i>r.min[0]&&e-i<r.max[0]&&t+i>r.min[2]&&t-i<r.max[2])}function Gm(e,t,n,r,i=[]){let a=Y.monster,o=([e,a])=>e>=n.minX+.4&&e<=n.maxX-.4&&a>=n.minZ+.4&&a<=n.maxZ-.4&&!Wm(e,a,t,r)&&i.every(([t,n])=>Math.hypot(t-e,n-a)>=1.4),s=[];for(let t of[a.moleHoleRadius,a.moleHoleRadius*.7])for(let n=0;n<8;n++){let r=n/8*Math.PI*2;s.push([Q(e[0]+Math.cos(r)*t),Q(e[1]+Math.sin(r)*t)])}let c=o(e)?[[Q(e[0]),Q(e[1])]]:[],l=s.filter(o);for(;c.length<a.moleHoles&&l.length;){let e=0,t=-1;l.forEach(([n,r],i)=>{let a=c.length?Math.min(...c.map(([e,t])=>Math.hypot(e-n,t-r))):0;a>t&&(t=a,e=i)}),c.push(l.splice(e,1)[0])}return c}function Km(e,t,n){return t[0]>e.min[0]-n&&t[0]<e.max[0]+n&&t[1]>e.min[1]-n&&t[1]<e.max[1]+n&&t[2]>e.min[2]-n&&t[2]<e.max[2]+n}function qm(e){let t=e.boxes.filter(e=>e.style===`rock`||e.style===`roof`);t.length&&(e.coins=e.coins.filter(e=>!t.some(t=>Km(t,e,.25))));let n=Um(e);for(let t of e.monsters)t.type===`mole`&&(t.holes=Gm([t.pos[0],t.pos[2]],t.pos[1]-.5,t.zone,e.boxes,n),t.holes.length&&([t.pos[0],t.pos[2]]=t.holes[0]));e.bounds=tm(e.boxes)}function Jm(e,t,n,r,i=!0){let[a,o]=r??e.spot(t,3.5);if(e.data.goal={cell:n,pos:[Q(a),Q(t.top),Q(o)]},i)for(let n=0;n<6;n++){let r=n/6*Math.PI*2;e.coin([a+Math.cos(r)*3,t.top+.9,o+Math.sin(r)*3])}}function Ym(e,t){let n=(t.minX+t.maxX)/2,r=t.maxZ-2;e.coinLine([n-2.5,t.top+.9,r],[n+2.5,t.top+.9,r],5)}function Xm(e,t,n){let r=t.top+.9,[i,a]=e.spot(t,2.5);if(n){for(let t=0;t<10;t++){let n=t/10*Math.PI*2;e.coin([i+Math.cos(n)*1.6,r,a+Math.sin(n)*1.6])}e.coin([i,r+.6,a])}else if(e.rng.chance(.5)){let t=e.rng.int(5,7);for(let n=0;n<t;n++){let o=n/t*Math.PI*2;e.coin([i+Math.cos(o)*1.3,r,a+Math.sin(o)*1.3])}}else{let[n,o]=e.spot(t,2);e.coinLine([i,r,a],[n,r,o],e.rng.int(4,6))}}var Zm=class{s;constructor(e){this.s=e>>>0||2654435769}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(this.next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}};function Qm(){return Math.floor(Math.random()*4294967295)>>>0}var $m=Y.shop,eh={skin:$m.skins.map(e=>({kind:`skin`,id:e.id,icon:``,color:e.body})),hat:$m.hats.map(e=>({kind:`hat`,id:e.id,icon:e.icon})),trail:$m.trails.map(e=>({kind:`trail`,id:e.id,icon:e.icon})),upgrade:$m.upgrades.map(e=>({kind:`upgrade`,id:e.id,icon:e.icon}))};function th(e,t){return e.upgrades[t]??0}function nh(e){return $m.upgrades.find(t=>t.id===e)?.prices.length??0}function rh(e,t){return t.kind===`upgrade`?th(e,t.id)>=nh(t.id):e.owned.includes(`${t.kind}:${t.id}`)}function ih(e,t){if(rh(e,t))return null;switch(t.kind){case`skin`:return $m.skins.find(e=>e.id===t.id).price;case`hat`:return $m.hats.find(e=>e.id===t.id).price;case`trail`:return $m.trails.find(e=>e.id===t.id).price;case`upgrade`:return $m.upgrades.find(e=>e.id===t.id).prices[th(e,t.id)]}}function ah(e,t){return t.kind===`skin`?e.skin===t.id:t.kind===`hat`?e.hat===t.id:t.kind===`trail`&&e.trail===t.id}function oh(e,t){let n=ih(e,t);return n===null?t.kind===`upgrade`?`none`:ah(e,t)?t.kind===`skin`?`none`:(sh(e,t,!1),`removed`):(sh(e,t,!0),`equipped`):e.coins<n?`poor`:(e.coins-=n,t.kind===`upgrade`?e.upgrades[t.id]=th(e,t.id)+1:e.owned.push(`${t.kind}:${t.id}`),sh(e,t,!0),`bought`)}function sh(e,t,n){t.kind===`skin`?e.skin=t.id:t.kind===`hat`?e.hat=n?t.id:null:t.kind===`trail`&&(e.trail=n?t.id:null)}var ch={airJumps:1,bonusTime:Y.bonus.duration,magnetRadius:Y.bonus.magnetRadius,pickup:1,startShield:!1};function lh(e){return{airJumps:1+th(e,`tripleJump`),bonusTime:Y.bonus.duration+th(e,`bonusTime`)*$m.bonusTimeStep,magnetRadius:Y.bonus.magnetRadius+th(e,`magnet`)*$m.magnetStep,pickup:1+th(e,`pickup`)*$m.pickupStep,startShield:th(e,`shield`)>0}}function uh(e){return $m.skins.find(t=>t.id===e)??$m.skins[0]}var dh=Y.player,fh=Y.growth,ph=Y.lava,mh={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0},hh=[`boots`,`spring`,`shield`,`magnet`];function gh(e){return 1+Math.min(e,fh.maxSizeStomps)*fh.scalePerStomp}function _h(e){return 1+e*fh.jumpPerStomp}function vh(e){return e>=Y.monster.crushFromStomps?`crush`:e>=Y.monster.pushFromStomps?`push`:`weak`}var yh=class{events;pos=new z;vel=new z;half={x:dh.halfSize,y:dh.halfSize,z:dh.halfSize};model=new sp;grounded=!1;ground=null;onWall=!1;wallNX=0;wallNZ=0;invulnerable=0;respawnTimer=0;dancing=!1;bonuses={boots:0,spring:0,shield:0,magnet:0};checkpoint=new z;lavaFloor=!1;dangerNear=!1;lastSafe=null;stomps=0;visualScale=1;ride=null;coyote=0;jumpBuffer=0;airJumps=1;perks=ch;ledgeAssist=0;ledgeX=0;ledgeZ=0;facing=Math.PI;squash=0;squashVel=0;runPhase=0;time=0;stepSoundPhase=0;hop=null;heat=0;constructor(e){this.events=e}isFinite(){return Number.isFinite(this.pos.x+this.pos.y+this.pos.z+this.vel.x+this.vel.y+this.vel.z)}get yaw(){return this.facing}get riding(){return this.ride!==null}get rideT(){return this.ride?.t??0}startRide(e){this.ride={line:e,t:e.start,speed:Y.zipline.startSpeed},this.grounded=!1,this.ground=null,this.onWall=!1,this.squash=.3,this.pos.copy(e.at(e.start,this.half.y))}stepRide(e){let t=this.ride,n=Y.zipline;t.speed=Math.min(n.speed,t.speed+n.accel*e),t.t+=t.speed*e/t.line.length;let{x:r,z:i}=t.line.dir;t.t<t.line.end?(this.pos.copy(t.line.at(t.t,this.half.y)),this.vel.set(r*t.speed,0,i*t.speed)):(this.pos.copy(t.line.at(t.line.end,this.half.y)),this.vel.set(r*n.releaseSpeed,pd(.5),i*n.releaseSpeed),this.ride=null,this.airJumps=this.perks.airJumps,this.squash=.3)}get respawning(){return this.respawnTimer>0||this.hop!==null}get speedMul(){return this.bonuses.boots>0?Y.bonus.speedMul:1}get jumpMul(){return(this.bonuses.spring>0?Y.bonus.jumpMul:1)*_h(this.stomps)}get displayScale(){return this.visualScale}get growth(){return gh(this.stomps)}get power(){return vh(this.stomps)}reset(e){this.checkpoint.copy(e),this.respawnTimer=0,this.stomps=0,this.half.x=this.half.y=this.half.z=dh.halfSize,this.visualScale=1,this.placeAt(e);for(let e of hh)this.bonuses[e]=0;this.invulnerable=0,this.dancing=!1,this.ride=null,this.hop=null,this.heat=0,this.lastSafe=null,this.model.root.visible=!0,this.facing=Math.PI}face(e){this.facing=e}teleport(e){this.placeAt(e)}placeAt(e){this.pos.set(e.x,e.y+this.half.y+.05,e.z),this.vel.set(0,0,0),this.ride=null,this.hop=null,this.grounded=!1,this.ground=null,this.onWall=!1,this.respawnTimer=0,this.airJumps=this.perks.airJumps,this.jumpBuffer=0,this.ledgeAssist=0}giveBonus(e){this.bonuses[e]=this.perks.bonusTime}hurt(e,t){if(this.invulnerable>0||this.respawning)return`none`;let n=this.pos.x-e,r=this.pos.z-t,i=Math.hypot(n,r)||1;return n/=i,r/=i,this.bonuses.shield>0?(this.bonuses.shield=0,this.invulnerable=1,this.vel.x=n*dh.knockbackSpeed*.6,this.vel.z=r*dh.knockbackSpeed*.6,this.vel.y=dh.knockbackUp*.6,`shield`):(this.invulnerable=dh.hurtInvulnerable,this.vel.x=n*dh.knockbackSpeed,this.vel.z=r*dh.knockbackSpeed,this.vel.y=dh.knockbackUp,this.grounded=!1,this.squash=-.3,`hurt`)}bump(e,t){let n=this.pos.x-e,r=this.pos.z-t,i=Math.hypot(n,r)||1;n/=i,r/=i;let a=this.vel.x*n+this.vel.z*r,o=a<Y.monster.bumpSpeed*.9||this.vel.y>0,s=Y.monster.bumpSpeed;return a<s&&(this.vel.x+=n*(s-a),this.vel.z+=r*(s-a)),this.vel.y>0&&(this.vel.y=-1),o}stomp(){this.vel.y=pd(dh.stompBounceHeight*this.jumpMul),this.airJumps=this.perks.airJumps,this.grounded=!1,this.squash=.35}grow(){this.stomps++}applySize(e){let t=dh.halfSize*this.growth;if(this.half.y===t)return;let n=this.half.y;this.pos.y+=t-n,this.half.x=this.half.y=this.half.z=t,Dd(this,0,0,e)&&(this.pos.y-=t-n,this.half.x=this.half.y=this.half.z=n)}step(e,t,n,r){for(let t of hh)this.bonuses[t]>0&&(this.bonuses[t]=Math.max(0,this.bonuses[t]-e),this.bonuses[t]===0&&this.events.bonusEnd(t));if(this.invulnerable>0&&(this.invulnerable=Math.max(0,this.invulnerable-e)),this.hop){this.stepHop(e);return}if(this.respawnTimer>0){this.respawnTimer-=e,this.respawnTimer<=0&&(this.placeAt(this.checkpoint),this.invulnerable=1,this.model.root.visible=!0,this.squash=.4,this.events.respawn(this));return}if(this.dancing&&(t={x:0,y:0},n=!1),this.ride){this.stepRide(e);return}this.applySize(r),this.grounded&&this.ground?.kind===`moving`&&(this.pos.x+=this.ground.dx??0,this.pos.y+=this.ground.dy??0,this.pos.z+=this.ground.dz??0);let i=t.x,a=-t.y,o=Math.hypot(i,a)>.05,s=dh.moveSpeed*this.speedMul,c=i*s,l=a*s,u=this.grounded?o?dh.groundAccel:dh.groundDecel:o?dh.airAccel:dh.airDecel,d=c-this.vel.x,f=l-this.vel.z,p=Math.hypot(d,f),m=u*this.speedMul*e;if(p<=m||p<1e-9?(this.vel.x=c,this.vel.z=l):(this.vel.x+=d/p*m,this.vel.z+=f/p*m),this.onWall){if(i*this.wallNX+a*this.wallNZ>.3)this.onWall=!1;else{let e=-(this.vel.x*this.wallNX+this.vel.z*this.wallNZ);if(e<dh.wallStickSpeed){let t=dh.wallStickSpeed-e;this.vel.x-=this.wallNX*t,this.vel.z-=this.wallNZ*t}}}if(this.ledgeAssist>0){this.ledgeAssist-=e;let t=this.vel.x*this.ledgeX+this.vel.z*this.ledgeZ;t<3&&(this.vel.x+=this.ledgeX*(3-t),this.vel.z+=this.ledgeZ*(3-t))}this.jumpBuffer=n?dh.jumpBuffer:Math.max(0,this.jumpBuffer-e),this.coyote=this.grounded?dh.coyoteTime:Math.max(0,this.coyote-e),this.jumpBuffer>0&&(this.grounded||this.coyote>0?(this.vel.y=pd(dh.jumpHeight*this.jumpMul),this.afterJump(),this.airJumps=this.perks.airJumps,this.events.jump(`ground`,this)):this.onWall?(this.vel.y=Math.max(this.vel.y,pd(dh.wallClimbHeight)),this.afterJump(),this.airJumps=this.perks.airJumps,this.squash=.25,this.events.jump(`wall`,this)):this.airJumps>0&&(this.vel.y=pd(dh.doubleJumpHeight*this.jumpMul),this.afterJump(),this.airJumps--,this.events.jump(`double`,this))),this.vel.y-=Y.physics.gravity*e,this.onWall&&this.vel.y<-dh.wallSlideSpeed&&(this.vel.y=-dh.wallSlideSpeed),this.vel.y<-Y.physics.maxFallSpeed&&(this.vel.y=-Y.physics.maxFallSpeed);let h=this.grounded,g=this.onWall,_=-this.vel.y,v=Td(this,this.vel.x*e,this.vel.y*e,this.vel.z*e,r,dh.stepHeight);if(this.grounded=v.grounded,this.ground=v.ground,v.grounded&&this.vel.y<0&&(this.vel.y=0),v.hitCeiling&&this.vel.y>0&&(this.vel.y=0),v.hitX&&(this.vel.x=0),v.hitZ&&(this.vel.z=0),this.grounded){if(this.airJumps=this.perks.airJumps,this.ledgeAssist=0,!h){let e=Math.min(1,Math.max(0,_)/18);this.squash=-.15-e*.3,this.events.land(e,this)}this.ground&&this.noteSafe(this.ground,r),this.ground?.trampoline&&(this.vel.y=pd(Y.trampoline.bounceHeight*this.jumpMul),this.grounded=!1,this.airJumps=this.perks.airJumps,this.squash=.45,this.events.bounce(this.ground,this))}if(!this.grounded&&(v.hitX||v.hitZ)?(this.onWall=!0,v.hitX&&(!v.hitZ||Math.abs(i)>=Math.abs(a))?(this.wallNX=-v.hitX,this.wallNZ=0):(this.wallNX=0,this.wallNZ=-v.hitZ),this.ledgeAssist=0):(g&&!this.grounded&&this.onWall&&this.vel.y>-.5&&(this.ledgeAssist=dh.ledgeAssistTime,this.ledgeX=-this.wallNX,this.ledgeZ=-this.wallNZ),this.onWall=!1),!this.grounded&&!this.onWall&&this.ledgeAssist<=0){let e=Math.sin(this.facing),t=Math.cos(this.facing),n=Math.abs(e)>Math.abs(t),o=n?Math.sign(e):0,s=n?0:Math.sign(t),c=i*-o+a*-s>.3?null:Dd(this,o*.25,s*.25,r);c&&c.maxY>this.pos.y&&!c.trampoline&&(this.onWall=!0,this.wallNX=-o,this.wallNZ=-s)}this.pos.y<Y.physics.fallY&&(this.onWall=!1,this.lavaFloor&&this.lastSafe?this.startHop(this.lastSafe):(this.respawnTimer=dh.respawnDelay,this.model.root.visible=!1,this.events.fall(this)))}noteSafe(e,t){if(e.kind!==`static`||e.trampoline||this.dangerNear)return;let n=ph.safeInset,r=(e,t,r)=>r-t<2*n?(t+r)/2:Math.max(t+n,Math.min(r-n,e)),i=r(this.pos.x,e.minX,e.maxX),a=r(this.pos.z,e.minZ,e.maxZ),o=e.maxY;this.lastSafe&&this.lastSafe.x===i&&this.lastSafe.y===o&&this.lastSafe.z===a||(bd({pos:{x:i,y:o+this.half.y+.05,z:a},half:this.half},mh),!t.some(t=>t!==e&&xd(mh,t))&&(this.lastSafe??=new z).set(i,o,a))}startHop(e){let t=new z(e.x,e.y+this.half.y+.05,e.z),n=Math.max(this.pos.y,t.y)+ph.hopHeight-this.pos.y,r=t.y-this.pos.y,i=2*(n+Math.sqrt(n*(n-r)));this.hop={from:this.pos.clone(),to:t,b:i,c:r-i,t:0},this.vel.set(0,0,0),this.grounded=!1,this.ground=null,this.heat=1,this.squash=.5,this.events.lavaHop(this)}stepHop(e){let t=this.hop;t.t=Math.min(1,t.t+e/ph.hopTime);let n=t.t;this.pos.set(t.from.x+(t.to.x-t.from.x)*n,t.from.y+t.b*n+t.c*n*n,t.from.z+(t.to.z-t.from.z)*n);let r=t.to.x-t.from.x,i=t.to.z-t.from.z;Math.hypot(r,i)>.1&&(this.facing=Math.atan2(r,i)),!(n<1)&&(this.placeAt(new z(t.to.x,t.to.y-this.half.y-.05,t.to.z)),this.invulnerable=1,this.squash=-.35,this.events.land(.6,this))}afterJump(){this.grounded=!1,this.coyote=0,this.jumpBuffer=0,this.ground=null,this.squash=.35}animate(e,t){this.time+=e;let n=this.model;n.root.position.copy(this.pos),this.visualScale+=(this.growth-this.visualScale)*Math.min(1,e*fh.scaleSharpness),n.root.scale.setScalar(this.visualScale);let r=Math.hypot(this.vel.x,this.vel.z),i=this.facing;this.onWall?i=Math.atan2(-this.wallNX,-this.wallNZ):r>.6&&(i=Math.atan2(this.vel.x,this.vel.z)),this.dancing&&(i=this.facing+e*9);let a=i-this.facing;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;this.facing+=a*Math.min(1,e*(this.dancing?60:14)),n.yaw.rotation.y=this.facing,this.squashVel+=(-this.squash*220-this.squashVel*14)*e,this.squash+=this.squashVel*e;let o=1+this.squash;!this.grounded&&!this.onWall&&(o+=Math.max(-.1,Math.min(.12,this.vel.y*.012))),this.grounded&&r<.3&&(o+=Math.sin(this.time*3)*.025);let s=1/Math.sqrt(Math.max(.4,o));n.squash.scale.set(s,o,s);let c=this.grounded&&r>.5;if(c){this.runPhase+=e*(8+r*1.6);let n=Math.floor(this.runPhase/Math.PI);n!==this.stepSoundPhase&&(this.stepSoundPhase=n,t())}else this.runPhase+=(Math.round(this.runPhase/Math.PI)*Math.PI-this.runPhase)*Math.min(1,e*10);let l=c?Math.abs(Math.sin(this.runPhase))*.09:0;n.bob.position.y=l,n.bob.rotation.x=c?Math.min(.25,r*.035):0,n.bob.rotation.z=c?Math.sin(this.runPhase)*.08:0,n.feet[0].position.z=.05+(c?Math.sin(this.runPhase)*.16:0),n.feet[1].position.z=.05-(c?Math.sin(this.runPhase)*.16:0),n.feet[0].position.y=.06+(c?Math.max(0,Math.sin(this.runPhase))*.08:0),n.feet[1].position.y=.06+(c?Math.max(0,-Math.sin(this.runPhase))*.08:0);for(let e of n.hands)e.visible=this.onWall||this.riding;if(this.riding)n.hands[0].position.y=n.hands[1].position.y=1.05;else if(this.onWall){let e=Math.sin(this.time*20)*.06;n.hands[0].position.y=.75+e,n.hands[1].position.y=.75-e}this.dancing&&(n.bob.position.y=Math.abs(Math.sin(this.time*7))*.5,n.bob.rotation.z=Math.sin(this.time*7)*.3),this.respawning||(n.root.visible=this.invulnerable<=0||Math.floor(this.time*12)%2==0);let u=Object.keys(this.bonuses).filter(e=>this.bonuses[e]>0);if(u.length){let e=.35+Math.sin(this.time*8)*.15,t=ip[u[Math.floor(this.time*2)%u.length]];n.bodyMat.emissive.setHex(t),n.bodyMat.emissiveIntensity=e}else n.bodyMat.emissiveIntensity=0;this.heat>0&&(this.heat=Math.max(0,this.heat-e/ph.heatTime),n.bodyMat.emissive.setHex(16734762),n.bodyMat.emissiveIntensity=Math.max(n.bodyMat.emissiveIntensity,this.heat*.8)),n.setBoots(this.bonuses.boots>0),n.shield.visible=this.bonuses.shield>0,n.shield.visible&&n.shield.scale.setScalar(1+Math.sin(this.time*5)*.04),n.updateTimers(u.map(e=>[e,this.bonuses[e]]),this.perks.bonusTime),n.blink(e)}},bh=Y.player;bh.moveSpeed*.75;function xh(e,t){let n=[],r=[...e.boxes,...e.gates.flatMap(e=>e.boxes)],i=(e,t,n,i)=>r.find(r=>e-i<r.max[0]&&e+i>r.min[0]&&t-i<r.max[1]&&t+i>r.min[1]&&n-i<r.max[2]&&n+i>r.min[2]),a=bh.halfSize*gh(Y.growth.maxSizeStomps),o=Mm(t),s=Nm(t);for(let e=0;e<=40;e++){let r=i(...Pm(t,o+(s-o)*(e/40),bh.halfSize),bh.halfSize);if(r){n.push(`герой задевает коробку (${r.style}) на пути`);break}}let c=i(...Pm(t,s,a),a);return c&&n.push(`в конце большой герой оказался бы в коробке (${c.style})`),n}function Sh(e,t,n){return t>e.minX&&t<e.maxX&&n>e.minZ&&n<e.maxZ}(Y.level.cellPitch-1)/2;function Ch(e,t){let n=t.gx-e.gx,r=t.gz-e.gz;return Math.abs(n)+Math.abs(r)===1?n>0?`E`:n<0?`W`:r>0?`S`:`N`:null}function wh(e){let t=Y.level.cellPitch,n=e.islands.map(e=>({gx:e.gx,gz:e.gz,minX:Q(e.gx*t-e.half[0]),maxX:Q(e.gx*t+e.half[0]),minZ:Q(e.gz*t-e.half[1]),maxZ:Q(e.gz*t+e.half[1]),top:e.top,kind:e.kind,depth:0,parent:-1,...e.cave?{cave:!0}:{}}));if(n.length===0)return n;let r=new Set([0]),i=[0];for(;i.length;){let t=i.shift();for(let a of e.links){let e=a.from===t?a.to:a.to===t?a.from:-1;e<0||r.has(e)||!n[e]||!Ch(n[t],n[e])||(r.add(e),n[e].parent=t,n[e].depth=n[t].depth+1,i.push(e))}}return n}function Th(e,t,n){return e.findIndex(e=>Sh(e,t,n))}function Eh(e,t,n=1){let r=em(e.seed,n,t),i=new nm(new Zm(e.seed),Y.difficulty[t],n,r),a=r.cells=wh(e);r.theme=e.theme;for(let t of e.links){let e=a[t.from],n=a[t.to],o=e&&n?Ch(e,n):null;if(!o)continue;let s=r.boxes.length,c=r.coins.length,l=Em[t.type].build(i,new $p(e,n,o)),u={from:t.from,to:t.to,dir:o,type:t.type,nodes:l.nodes,enter:l.enter,tree:n.parent===t.from||e.parent===t.to};t.gate?(r.gates.push({button:t.gate,link:r.links.length,boxes:r.boxes.splice(s)}),r.coins.splice(c),r.links.push({...u,gate:t.gate})):r.links.push(u)}a.forEach((t,n)=>{let a=e.islands[n];i.box(t,t.top,t.kind===`start`?`start`:t.kind===`goal`?`goal`:`ground`,`walk`),a.refuges&&Vm(i,t);let o=a.coins!==`none`;switch(t.kind){case`start`:r.start=[Q((t.minX+t.maxX)/2),t.top,Q((t.minZ+t.maxZ)/2)],o&&Ym(i,t);break;case`goal`:Jm(i,t,n,a.portal,o);break;case`checkpoint`:Om(i,t,n),o&&Xm(i,t,a.coins===`treasure`);break;default:o&&Xm(i,t,a.coins===`treasure`)}});for(let t of e.objects)switch(t.kind){case`monster`:{let e=Th(a,t.pos[0],t.pos[1]);if(e<0)break;let n=a[e],i=zm(n);r.monsters.push({type:t.type,pos:[Q(t.pos[0]),Q(n.top+.5),Q(t.pos[1])],zone:i,...Rm.has(t.type)?{patrol:Bm(i,t.patrol??`x`)}:{}}),n.kind===`plain`&&(n.kind=`monster`);break}case`bonus`:{let e=Th(a,t.pos[0],t.pos[1]);e>=0&&r.bonuses.push({type:t.type,pos:[Q(t.pos[0]),Q(a[e].top+1),Q(t.pos[1])]});break}case`button`:{let e=Th(a,t.pos[0],t.pos[1]);e>=0&&r.buttons.push({id:t.id,pos:[Q(t.pos[0]),a[e].top,Q(t.pos[1])]});break}case`teleport`:{let e=Th(a,t.a[0],t.a[1]),n=Th(a,t.b[0],t.b[1]);e>=0&&n>=0&&e!==n&&Im(r,e,n,t.a,t.b,t.oneWay);break}case`zipline`:{let e=Th(a,t.a[0],t.a[1]),n=Th(a,t.b[0],t.b[1]);e>=0&&n>=0&&e!==n&&Lm(i,e,n,t.a,t.b);break}case`coinLine`:i.coinLine(t.from,t.to,t.n);break;case`coinArc`:i.coinArc(t.from,t.to,t.n,t.height);break;case`coinRing`:for(let e=0;e<t.n;e++){let n=e/t.n*Math.PI*2;i.coin([t.center[0]+Math.cos(n)*t.radius,t.center[1],t.center[2]+Math.sin(n)*t.radius])}break;case`block`:r.boxes.push({min:t.min,max:t.max,style:t.style})}return pm(r),qm(r),r}var Dh=Object.fromEntries(Object.entries(Object.assign({"./buttons.level.json":{version:1,seed:405,theme:`meadow`,islands:[{gx:0,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:1,top:0,half:[5.5,5.5],kind:`plain`,coins:`treasure`},{gx:1,gz:1,top:0,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:0,gz:1,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:0,gz:0,top:1.2,half:[6,6],kind:`goal`,coins:`auto`},{gx:1,gz:0,top:0,half:[6.5,6.5],kind:`plain`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:2,to:3,type:`bridge`},{from:3,to:4,type:`bridge`},{from:0,to:5,type:`bridge`,gate:`b1`},{from:5,to:6,type:`steps`,gate:`b2`},{from:5,to:4,type:`bridge`,gate:`b2`},{from:4,to:7,type:`bridge`,gate:`b3`}],objects:[{kind:`button`,id:`b1`,pos:[0,32]},{kind:`button`,id:`b2`,pos:[2,16]},{kind:`button`,id:`b3`,pos:[34,20]},{kind:`monster`,type:`walker`,pos:[18,33]},{kind:`monster`,type:`walker`,pos:[18,39]},{kind:`monster`,type:`hopper`,pos:[36,36]},{kind:`monster`,type:`hopper`,pos:[15,15]},{kind:`monster`,type:`hopper`,pos:[21,21]},{kind:`monster`,type:`runner`,pos:[15,-2]},{kind:`monster`,type:`runner`,pos:[21,1]},{kind:`monster`,type:`runner`,pos:[18,3]}]},"./cable-car.level.json":{version:1,seed:601,theme:`snow`,islands:[{gx:1,gz:3,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:3.5,half:[6.5,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:2,top:3.5,half:[6,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:0,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:7,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:0,top:0,half:[6,6],kind:`goal`,coins:`auto`,portal:[18,-3]},{gx:0,gz:1,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:2,gz:1,top:0,half:[6,6],kind:`plain`,coins:`treasure`}],links:[{from:0,to:1,type:`wall`},{from:1,to:2,type:`ropeBridge`},{from:1,to:3,type:`steps`},{from:1,to:4,type:`wall`},{from:3,to:6,type:`bridge`}],objects:[{kind:`zipline`,a:[18,14.5],b:[18,1]},{kind:`zipline`,a:[14.5,18],b:[1,18]},{kind:`zipline`,a:[21.5,18],b:[35,18]},{kind:`teleport`,a:[14,-1],b:[21,21]},{kind:`teleport`,a:[38,21],b:[15,21]},{kind:`monster`,type:`flyer`,pos:[16,36]},{kind:`monster`,type:`flyer`,pos:[21,38]},{kind:`monster`,type:`flyer`,pos:[36,36]},{kind:`monster`,type:`snowman`,pos:[0,34]},{kind:`monster`,type:`snowman`,pos:[0,39]},{kind:`monster`,type:`hopper`,pos:[-1,16]},{kind:`monster`,type:`runner`,pos:[37,15]},{kind:`bonus`,type:`spring`,pos:[2,36]},{kind:`bonus`,type:`magnet`,pos:[34,21]}]},"./dark-cave.level.json":{version:1,seed:801,theme:`cave`,islands:[{gx:0,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:0,gz:1,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:1,gz:1,top:0,half:[7,7],kind:`plain`,coins:`auto`,cave:!0},{gx:2,gz:1,top:0,half:[6.5,6.5],kind:`plain`,coins:`treasure`,cave:!0},{gx:1,gz:0,top:0,half:[7,7],kind:`plain`,coins:`auto`,cave:!0},{gx:0,gz:0,top:0,half:[6,6],kind:`goal`,coins:`auto`},{gx:2,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:0,top:1.2,half:[6,6],kind:`plain`,coins:`auto`,refuges:!0}],links:[{from:0,to:1,type:`bridge`},{from:0,to:2,type:`bridge`},{from:2,to:3,type:`tunnel`},{from:3,to:4,type:`bridge`},{from:3,to:5,type:`tunnel`},{from:5,to:6,type:`tunnel`},{from:1,to:7,type:`gap`},{from:7,to:4,type:`tunnel`},{from:5,to:8,type:`steps`}],objects:[{kind:`monster`,type:`mole`,pos:[18,35]},{kind:`monster`,type:`walker`,pos:[18,40]},{kind:`monster`,type:`firefly`,pos:[18,15]},{kind:`monster`,type:`firefly`,pos:[15,20],patrol:`z`},{kind:`monster`,type:`sleeper`,pos:[22,21]},{kind:`monster`,type:`firefly`,pos:[36,21]},{kind:`monster`,type:`mole`,pos:[15,-2]},{kind:`monster`,type:`mole`,pos:[21,2.5]},{kind:`monster`,type:`firefly`,pos:[18,-4]},{kind:`monster`,type:`turtle`,pos:[36,34]},{kind:`monster`,type:`turtle`,pos:[36,38.5]},{kind:`monster`,type:`hopper`,pos:[34,-2]},{kind:`monster`,type:`hopper`,pos:[38,2]},{kind:`bonus`,type:`magnet`,pos:[38,15]},{kind:`bonus`,type:`spring`,pos:[36,0]}]},"./first-meadow.level.json":{version:1,seed:101,theme:`meadow`,islands:[{gx:1,gz:3,top:0,half:[6,5.5],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[7,7],kind:`plain`,coins:`auto`},{gx:0,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:0,half:[6.5,6.5],kind:`checkpoint`,coins:`auto`},{gx:0,gz:1,top:0,half:[5.5,5.5],kind:`plain`,coins:`treasure`},{gx:2,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:0,top:1.2,half:[6,6],kind:`goal`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:1,to:3,type:`bridge`},{from:1,to:4,type:`bridge`},{from:4,to:5,type:`bridge`},{from:4,to:6,type:`bridge`},{from:4,to:7,type:`steps`}],objects:[{kind:`monster`,type:`sleeper`,pos:[21,33]},{kind:`monster`,type:`sleeper`,pos:[0,36]},{kind:`monster`,type:`sleeper`,pos:[36,33]},{kind:`monster`,type:`walker`,pos:[36,39]},{kind:`monster`,type:`sleeper`,pos:[36,18]},{kind:`bonus`,type:`boots`,pos:[-1.5,16.5]}]},"./high-walls.level.json":{version:1,seed:303,theme:`meadow`,islands:[{gx:2,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:0,gz:2,top:3.5,half:[6,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:0,half:[7,6.5],kind:`plain`,coins:`auto`,refuges:!0},{gx:0,gz:1,top:0,half:[6.5,6.5],kind:`checkpoint`,coins:`auto`},{gx:0,gz:0,top:3.5,half:[6,6],kind:`goal`,coins:`auto`},{gx:1,gz:0,top:3.5,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:0,top:2.7,half:[5.5,5.5],kind:`plain`,coins:`treasure`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`wall`},{from:0,to:3,type:`bridge`},{from:3,to:4,type:`bridge`},{from:4,to:5,type:`bridge`},{from:5,to:6,type:`wall`},{from:6,to:7,type:`bridge`},{from:3,to:8,type:`trampoline`}],objects:[{kind:`monster`,type:`chaser`,pos:[18,36]},{kind:`monster`,type:`runner`,pos:[-1,35]},{kind:`monster`,type:`chaser`,pos:[2,38]},{kind:`monster`,type:`runner`,pos:[15,18]},{kind:`monster`,type:`chaser`,pos:[21,18]},{kind:`monster`,type:`runner`,pos:[18,0]},{kind:`bonus`,type:`shield`,pos:[36,0]}]},"./hop-hop.level.json":{version:1,seed:202,theme:`meadow`,islands:[{gx:1,gz:3,top:0,half:[6,5.5],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:0,gz:2,top:.5,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:2,half:[5.5,5.5],kind:`plain`,coins:`treasure`},{gx:0,gz:1,top:.5,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:1,gz:1,top:.5,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:2,gz:1,top:0,half:[5.5,5.5],kind:`plain`,coins:`treasure`},{gx:0,gz:0,top:1.7,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:1,gz:0,top:1.7,half:[6,6],kind:`goal`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`gap`},{from:1,to:3,type:`steps`},{from:2,to:4,type:`gap`},{from:4,to:5,type:`bridge`},{from:5,to:6,type:`gap`},{from:4,to:7,type:`steps`},{from:7,to:8,type:`gap`}],objects:[{kind:`monster`,type:`walker`,pos:[0,36],patrol:`z`},{kind:`monster`,type:`hopper`,pos:[16,16]},{kind:`monster`,type:`walker`,pos:[21,20]},{kind:`monster`,type:`hopper`,pos:[-2,-2]},{kind:`monster`,type:`hopper`,pos:[2,2]},{kind:`bonus`,type:`spring`,pos:[36,18]}]},"./jelly-party.level.json":{version:1,seed:1001,theme:`candy`,islands:[{gx:0,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[7,6.5],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:0,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:0,half:[7,7],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:1,top:0,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:0,gz:0,top:0,half:[6,6],kind:`plain`,coins:`treasure`},{gx:1,gz:0,top:1.2,half:[6,6],kind:`goal`,coins:`auto`},{gx:2,gz:0,top:0,half:[6,6],kind:`plain`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`ropeBridge`},{from:0,to:3,type:`bridge`},{from:3,to:4,type:`gap`},{from:2,to:5,type:`bridge`},{from:4,to:5,type:`bridge`},{from:3,to:6,type:`bridge`},{from:4,to:7,type:`steps`},{from:5,to:8,type:`bridge`},{from:8,to:7,type:`gap`}],objects:[{kind:`monster`,type:`giant`,pos:[15.5,35]},{kind:`monster`,type:`giant`,pos:[21,38.5]},{kind:`monster`,type:`lollipop`,pos:[0,16]},{kind:`monster`,type:`lollipop`,pos:[2,20]},{kind:`monster`,type:`giant`,pos:[16,16]},{kind:`monster`,type:`giant`,pos:[20,20.5],patrol:`z`},{kind:`monster`,type:`giant`,pos:[36,17]},{kind:`monster`,type:`hopper`,pos:[33,21]},{kind:`monster`,type:`turtle`,pos:[36,-2]},{kind:`monster`,type:`turtle`,pos:[36,2.5]},{kind:`bonus`,type:`boots`,pos:[2,38]},{kind:`bonus`,type:`shield`,pos:[34,38]},{kind:`bonus`,type:`magnet`,pos:[-2,2]}]},"./king-castle.level.json":{version:1,seed:4141,theme:`sunset`,islands:[{gx:0,gz:2,top:.5,half:[6,5.5],kind:`start`,coins:`auto`},{gx:0,gz:1,top:.5,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:0,gz:0,top:.5,half:[8,8],kind:`plain`,coins:`auto`},{gx:1,gz:0,top:1,half:[5.5,5.5],kind:`goal`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:2,to:3,type:`steps`}],objects:[{kind:`monster`,type:`walker`,pos:[-3,16],patrol:`x`},{kind:`monster`,type:`hopper`,pos:[3,20]},{kind:`monster`,type:`king`,pos:[0,0]}]},"./lava-depths.level.json":{version:1,seed:1001,theme:`lava`,islands:[{gx:0,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:3,gz:2,top:0,half:[6.5,6.5],kind:`plain`,coins:`treasure`,cave:!0},{gx:1,gz:1,top:0,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:2,gz:1,top:0,half:[7,7],kind:`plain`,coins:`auto`,cave:!0},{gx:0,gz:1,top:1.2,half:[6,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:0,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:3,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:0,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:0,gz:0,top:0,half:[6,6],kind:`goal`,coins:`auto`}],links:[{from:0,to:1,type:`gap`},{from:1,to:2,type:`tunnel`},{from:2,to:3,type:`bridge`},{from:1,to:4,type:`tunnel`},{from:4,to:5,type:`tunnel`},{from:4,to:6,type:`steps`},{from:5,to:7,type:`tunnel`},{from:5,to:8,type:`moving`},{from:8,to:3,type:`gap`},{from:7,to:9,type:`gap`},{from:9,to:10,type:`bridge`}],objects:[{kind:`monster`,type:`ember`,pos:[16,34]},{kind:`monster`,type:`ember`,pos:[20,38]},{kind:`monster`,type:`sleeper`,pos:[38,38]},{kind:`monster`,type:`firefly`,pos:[18,15]},{kind:`monster`,type:`mole`,pos:[20,21]},{kind:`monster`,type:`firefly`,pos:[33,15]},{kind:`monster`,type:`firefly`,pos:[39,21]},{kind:`monster`,type:`ember`,pos:[36,18]},{kind:`monster`,type:`turtle`,pos:[0,15]},{kind:`monster`,type:`turtle`,pos:[0,21]},{kind:`monster`,type:`ember`,pos:[34,-2]},{kind:`monster`,type:`ember`,pos:[38,2]},{kind:`monster`,type:`runner`,pos:[54,18]},{kind:`monster`,type:`chaser`,pos:[18,-2]},{kind:`monster`,type:`mole`,pos:[20,2]},{kind:`bonus`,type:`spring`,pos:[0,18]},{kind:`bonus`,type:`shield`,pos:[54,15]}]},"./magic-circles.level.json":{version:1,seed:501,theme:`candy`,islands:[{gx:0,gz:3,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:3,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:3,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:2,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:3,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:0,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:0,gz:0,top:.5,half:[6,6],kind:`goal`,coins:`auto`},{gx:3,gz:3,top:0,half:[5.5,5.5],kind:`plain`,coins:`treasure`}],links:[{from:1,to:2,type:`bridge`},{from:3,to:4,type:`bridge`},{from:5,to:6,type:`bridge`},{from:6,to:7,type:`gap`}],objects:[{kind:`teleport`,a:[4,54],b:[14,54]},{kind:`teleport`,a:[36,50],b:[36,22]},{kind:`teleport`,a:[54,14],b:[18,21]},{kind:`teleport`,a:[18,50],b:[50,54]},{kind:`monster`,type:`lollipop`,pos:[18,57]},{kind:`monster`,type:`walker`,pos:[21,52],patrol:`z`},{kind:`monster`,type:`runner`,pos:[38,56]},{kind:`monster`,type:`runner`,pos:[34,15]},{kind:`monster`,type:`runner`,pos:[39,19]},{kind:`monster`,type:`hopper`,pos:[55,20]},{kind:`monster`,type:`lollipop`,pos:[0,21]},{kind:`monster`,type:`hopper`,pos:[2,15]},{kind:`bonus`,type:`magnet`,pos:[56,52]}]},"./mountain-maze.level.json":{version:1,seed:901,theme:`meadow`,islands:[{gx:0,gz:3,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:3,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:2,gz:3,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:3,gz:3,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:0,gz:2,top:0,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:1,gz:2,top:3.5,half:[6,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:2,top:3.5,half:[6,6],kind:`plain`,coins:`auto`},{gx:3,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:0,gz:1,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:1,gz:1,top:0,half:[7,7],kind:`plain`,coins:`auto`,cave:!0},{gx:2,gz:1,top:7,half:[6,6],kind:`plain`,coins:`auto`},{gx:3,gz:1,top:0,half:[6,6],kind:`plain`,coins:`treasure`},{gx:1,gz:0,top:0,half:[6,6],kind:`goal`,coins:`auto`},{gx:2,gz:0,top:0,half:[6,6],kind:`plain`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:2,to:3,type:`gap`},{from:0,to:4,type:`bridge`},{from:1,to:5,type:`wall`},{from:5,to:6,type:`ropeBridge`},{from:6,to:10,type:`wall`},{from:3,to:7,type:`bridge`,gate:`b1`},{from:4,to:8,type:`bridge`},{from:8,to:9,type:`tunnel`},{from:9,to:12,type:`tunnel`},{from:7,to:11,type:`bridge`},{from:12,to:13,type:`bridge`,gate:`b2`}],objects:[{kind:`button`,id:`b1`,pos:[57,57]},{kind:`button`,id:`b2`,pos:[57,33]},{kind:`zipline`,a:[39.5,18],b:[56,18]},{kind:`zipline`,a:[38,14.5],b:[38,-2]},{kind:`teleport`,a:[33,-3],b:[-2,38]},{kind:`monster`,type:`walker`,pos:[18,52]},{kind:`monster`,type:`hopper`,pos:[20,57]},{kind:`monster`,type:`runner`,pos:[34,56]},{kind:`monster`,type:`turtle`,pos:[37,51],patrol:`z`},{kind:`monster`,type:`mole`,pos:[52,52]},{kind:`monster`,type:`walker`,pos:[54,57.5]},{kind:`monster`,type:`flyer`,pos:[16,36]},{kind:`monster`,type:`chaser`,pos:[20,38]},{kind:`monster`,type:`turtle`,pos:[36,34]},{kind:`monster`,type:`turtle`,pos:[36,38.5]},{kind:`monster`,type:`sleeper`,pos:[52,35]},{kind:`monster`,type:`hopper`,pos:[56,39]},{kind:`monster`,type:`runner`,pos:[53,39]},{kind:`monster`,type:`walker`,pos:[0,18]},{kind:`monster`,type:`firefly`,pos:[16,16]},{kind:`monster`,type:`firefly`,pos:[20,21],patrol:`z`},{kind:`monster`,type:`mole`,pos:[35,1]},{kind:`monster`,type:`walker`,pos:[38,-3]},{kind:`bonus`,type:`spring`,pos:[2,55]},{kind:`bonus`,type:`magnet`,pos:[52,20]}]},"./sky-islands.level.json":{version:1,seed:701,theme:`sunset`,islands:[{gx:0,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:2,top:0,half:[6.5,6],kind:`plain`,coins:`auto`},{gx:2,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`},{gx:0,gz:1,top:2.7,half:[6,6],kind:`checkpoint`,coins:`auto`},{gx:1,gz:1,top:2.7,half:[6,5.5],kind:`plain`,coins:`auto`,refuges:!0},{gx:2,gz:1,top:2.7,half:[5.5,6],kind:`plain`,coins:`auto`,refuges:!0},{gx:0,gz:0,top:5,half:[6,6],kind:`goal`,coins:`auto`},{gx:1,gz:0,top:5,half:[6.5,6.5],kind:`plain`,coins:`auto`},{gx:2,gz:0,top:5,half:[5.5,5.5],kind:`plain`,coins:`treasure`},{gx:3,gz:2,top:0,half:[6,6],kind:`plain`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:2,to:9,type:`gap`},{from:0,to:3,type:`trampoline`},{from:2,to:5,type:`trampoline`},{from:3,to:4,type:`ropeBridge`},{from:4,to:5,type:`moving`},{from:3,to:6,type:`steps`},{from:6,to:7,type:`ropeBridge`},{from:7,to:8,type:`ropeBridge`}],objects:[{kind:`monster`,type:`turtle`,pos:[18,36]},{kind:`monster`,type:`walker`,pos:[36,38],patrol:`z`},{kind:`monster`,type:`mole`,pos:[54,36]},{kind:`monster`,type:`flyer`,pos:[16,17]},{kind:`monster`,type:`flyer`,pos:[20,19]},{kind:`monster`,type:`flyer`,pos:[36,18]},{kind:`monster`,type:`turtle`,pos:[18,-2]},{kind:`monster`,type:`turtle`,pos:[18,2.5]},{kind:`bonus`,type:`spring`,pos:[3,34]},{kind:`bonus`,type:`boots`,pos:[52,34]},{kind:`bonus`,type:`magnet`,pos:[33,0]}]},"./treasure-island.level.json":{version:1,seed:404,theme:`candy`,islands:[{gx:1,gz:2,top:0,half:[6,6],kind:`start`,coins:`auto`},{gx:1,gz:1,top:0,half:[7,7],kind:`plain`,coins:`treasure`},{gx:0,gz:1,top:0,half:[6,6],kind:`plain`,coins:`treasure`},{gx:2,gz:1,top:0,half:[6,6],kind:`plain`,coins:`treasure`},{gx:0,gz:0,top:2.7,half:[6,6],kind:`plain`,coins:`treasure`},{gx:1,gz:0,top:1.5,half:[6,6],kind:`goal`,coins:`auto`}],links:[{from:0,to:1,type:`bridge`},{from:1,to:2,type:`bridge`},{from:1,to:3,type:`bridge`},{from:2,to:4,type:`trampoline`},{from:1,to:5,type:`steps`},{from:4,to:5,type:`gap`}],objects:[{kind:`bonus`,type:`magnet`,pos:[18,33]},{kind:`bonus`,type:`spring`,pos:[-2,16]},{kind:`bonus`,type:`boots`,pos:[38,16]},{kind:`bonus`,type:`shield`,pos:[2,2]},{kind:`coinRing`,center:[18,.9,39],radius:2.2,n:12},{kind:`coinRing`,center:[36,.9,20],radius:2.2,n:10},{kind:`coinLine`,from:[-4,3.6,-3],to:[4,3.6,-3],n:6}]}})).map(([e,t])=>[e.replace(/^\.\/(.*)\.level\.json$/,`$1`),t])),Oh=`house`,kh=3.5;function Ah(e,t,n){return t.has(n)?`done`:n===e.start||e.edges.some(([e,r])=>r===n&&t.has(e))?`open`:`locked`}function jh(e,t){return e.edges.filter(([e])=>t.has(e))}function Mh(e,t,n){return e.edges.filter(([r,i])=>r===n&&Ah(e,t,i)===`locked`).map(([,e])=>e)}function Nh(e,t){if(t===`house`)return e.house?[e.house.gx,e.house.gz]:null;let n=e.nodes.find(e=>e.id===t);return n?[n.gx,n.gz]:null}function Ph(e,t){let n=new Map;for(let r of e.nodes)Ah(e,t,r.id)!==`locked`&&n.set(r.id,[]);let r=(e,t)=>{n.has(e)&&n.has(t)&&(n.get(e).push(t),n.get(t).push(e))};for(let[n,i]of jh(e,t))r(n,i);return e.house&&(n.set(Oh,[]),r(Oh,e.house.next)),n}function Fh(e,t,n,r){let i=Ph(e,t);if(!i.has(n)||!i.has(r))return null;let a=new Map([[n,null]]),o=[n];for(;o.length;){let e=o.shift();if(e===r)break;for(let t of i.get(e))a.has(t)||(a.set(t,e),o.push(t))}if(!a.has(r))return null;let s=[];for(let e=r;e!==null;e=a.get(e))s.unshift(e);return s}function Ih(e,t,n,r,i){let a=Nh(e,n);if(!a)return null;let o=null,s=.5;for(let c of Ph(e,t).get(n)??[]){let[t,n]=Nh(e,c),l=Math.hypot(t-a[0],n-a[1])||1,u=((t-a[0])*r+(n-a[1])*i)/l;u>s&&(s=u,o=c)}return o}function Lh(e,t,n){let r=Ph(e,t),i=r.has(n)?n:e.start,a=new Set([i]),o=[i];for(;o.length;){let n=o.shift();if(n!==`house`&&Ah(e,t,n)===`open`)return n;for(let e of r.get(n)??[])a.has(e)||(a.add(e),o.push(e))}return null}function Rh(e,t=0){if(`design`in e.level)return Dh[e.level.design]?.theme??`meadow`;let n=e.level.procedural.themes;return n?.length?n[t%n.length]:`meadow`}function zh(e){let t=Eh({version:1,seed:77,theme:`meadow`,islands:[{gx:0,gz:0,top:0,half:[6,6],kind:`start`,coins:`none`}],links:[],objects:[]},e);t.coins=[];for(let e of t.boxes)e.style===`start`&&(e.style=`ground`);return t.house=[0,0,-1.5],t.start=[0,0,kh],t}var Bh=[`N`,`E`,`W`,`S`],Vh=[`boots`,`spring`,`shield`,`magnet`];function Hh(e){let t=Y.level,n=(e-1)*t.cellsPerLevel;return[Math.min(t.minCells+n,t.maxCellsCap),Math.min(t.maxCells+n,t.maxCellsCap)]}function Uh(e,t,n){let r=Y.difficulty[t],i=r.firstLevelMonsters+(e-1)*r.monstersPerLevel;return Math.min(i+n.int(0,1),r.maxMonsters)}var Wh={snow:{walker:`snowman`},candy:{chaser:`lollipop`},lava:{hopper:`ember`},cave:{walker:`firefly`}},Gh=[`walker`,`chaser`,`sleeper`,`runner`,`hopper`,`flyer`,`turtle`,`mole`,`giant`];function Kh(e,t,n,r={}){let i=!!r.extras,a=new Zm((e^Math.imul(t,2654435761))>>>0),o=Y.difficulty[n],s=Y.level,c=em(e,t,n),l=new nm(a,o,t,c);c.theme=r.theme??`meadow`;let u=[],[d,f]=Hh(t),p=a.int(d,f),m=Math.max(3,Math.ceil(Math.sqrt(p*1.6))),h=new Map,g=(e,t)=>`${e},${t}`,_=(e,t,n,r)=>{let i=a.range(s.islandHalf[0],s.islandHalf[1]),o=a.range(s.islandHalf[0],s.islandHalf[1]),c=e*s.cellPitch,l=t*s.cellPitch;return{gx:e,gz:t,minX:Q(c-i),maxX:Q(c+i),minZ:Q(l-o),maxZ:Q(l+o),top:0,kind:n<0?`start`:`plain`,depth:r,parent:n}},v=_(Math.floor(m/2),m-1,-1,0);c.cells.push(v),h.set(g(v.gx,v.gz),0);let y=t<=1?[`bridge`,`bridge`,`gap`,`steps`,`wall`,`trampoline`]:[`bridge`,`bridge`,`gap`,`steps`,`moving`,`wall`,`trampoline`];i&&y.push(`tunnel`,`ropeBridge`);let b=[];for(;c.cells.length<p;){let e=[];if(c.cells.forEach((t,n)=>{for(let r of Bh){let[i,a]=Qp[r],o=t.gx+i,s=t.gz+a;o<0||s<0||o>=m||s>=m||h.has(g(o,s))||e.push({parent:n,dir:r})}}),e.length===0)break;let{parent:t,dir:n}=a.pick(e),r=c.cells[t],[o,d]=Qp[n],f=_(r.gx+o,r.gz+d,t,r.depth+1);b.length===0&&(b=a.shuffle([...y]));let p=Jp,v=0;for(let e=0;e<b.length;e++){let t=Em[b[e]].rise(l,new $p(r,f,n));if(t!==null){p=Em[b[e]],v=t,b.splice(e,1);break}}f.top=Q(Math.max(0,r.top+v));let x=c.cells.length;c.cells.push(f),h.set(g(f.gx,f.gz),x);let S=c.boxes.length,C=c.coins.length,w=p.build(l,new $p(r,f,n)),T={from:t,to:x,dir:n,type:p.type,nodes:w.nodes,enter:w.enter,tree:!0};if(i&&t>0&&Dm.has(p.type)&&u.length<s.maxGates&&a.chance(s.gateChance)){let e=`g${u.length+1}`;u.push({link:c.links.length,gate:c.gates.length,cell:t}),c.gates.push({button:e,link:c.links.length,boxes:c.boxes.splice(S)}),c.coins.splice(C),c.links.push({...T,gate:e})}else c.links.push(T)}let x=c.cells.map(()=>0);for(let e of c.cells)e.parent>=0&&x[e.parent]++;let S=e=>e>0&&x[e]===0,C=c.cells.map((e,t)=>t),w=Math.max(...c.cells.map(e=>e.depth)),T=Math.max(2,Math.ceil(w*.6)),E=C.filter(e=>S(e)&&c.cells[e].depth>=T);E.length===0&&(E=C.filter(e=>c.cells[e].depth===w));let D=a.pick(E);c.cells[D].kind=`goal`;let O=c.cells.map(()=>0),ee=[...C].sort((e,t)=>c.cells[e].depth-c.cells[t].depth);for(let e of ee){let t=c.cells[e];if(t.parent<0)continue;let n=O[t.parent]+1;n>=a.int(s.checkpointEvery[0],s.checkpointEvery[1])&&t.kind===`plain`?(t.kind=`checkpoint`,O[e]=0):O[e]=n}let k=Uh(t,n,a),te=Y.difficulty[n].monstersPerIsland,ne=k,re=a.shuffle(C.filter(e=>c.cells[e].kind===`plain`));re.sort((e,t)=>Number(c.cells[e].depth<2)-Number(c.cells[t].depth<2));for(let e of re){if(ne<=0)break;c.cells[e].kind=`monster`,ne-=te}let A=k;c.cells.forEach((e,n)=>{switch(l.box(e,e.top,e.kind===`start`?`start`:e.kind===`goal`?`goal`:`ground`,`walk`),e.kind){case`start`:Ym(l,e);break;case`monster`:{let n=Math.min(te,A);A-=n,Hm(l,e,n,i?qh(a,n,t,c.theme):void 0);break}case`checkpoint`:Om(l,e,n),Xm(l,e,!1);break;case`goal`:Jm(l,e,n);break;default:Xm(l,e,S(n))}}),c.start=[Q((v.minX+v.maxX)/2),v.top,Q((v.minZ+v.maxZ)/2)],c.cells.forEach((e,t)=>{for(let n of[`E`,`S`]){let[r,i]=Qp[n],o=h.get(g(e.gx+r,e.gz+i));if(o===void 0)continue;let u=c.cells[o];if(u.parent===t||e.parent===o||Math.abs(u.top-e.top)>.01||!a.chance(s.loopChance))continue;let d=Jp.build(l,new $p(e,u,n));c.links.push({from:t,to:o,dir:n,type:`bridge`,nodes:d.nodes,enter:d.enter,tree:!1})}}),pm(c);let ie=a.int(s.bonusesPerLevel[0],s.bonusesPerLevel[1]),j=C.filter(e=>c.cells[e].kind===`plain`||c.cells[e].kind===`checkpoint`),ae=[...a.shuffle(j.filter(S)),...a.shuffle(j.filter(e=>!S(e)))],oe=a.shuffle([...Vh]);for(let e=0;e<Math.min(ie,ae.length);e++){let t=c.cells[ae[e]],[n,r]=l.spot(t,2.5);c.bonuses.push({type:oe[e%oe.length],pos:[n,Q(t.top+1),r]})}return i&&Jh(l,u,S),qm(c),c}function qh(e,t,n,r){let i=Gh.filter(e=>(Y.level.unlock[e]??1)<=n),a=[];for(;a.length<t;){let t=e.pick(i);(t!==`mole`&&t!==`giant`||!a.includes(t))&&a.push(t)}return a.map(e=>Wh[r]?.[e]??e)}function Jh(e,t,n){let r=e.data,i=Y.level,a=e.rng,o=r.cells,s=[...r.checkpoints.flatMap(e=>[[e.pos[0],e.pos[2]],[e.spawn[0],e.spawn[2]]]),[r.goal.pos[0],r.goal.pos[2]],[r.start[0],r.start[2]],...r.monsters.map(e=>[e.pos[0],e.pos[2]]),...r.bonuses.map(e=>[e.pos[0],e.pos[2]])],c=(e,t,n)=>{let i=o[e];return t<i.minX+2.5||t>i.maxX-2.5||n<i.minZ+2.5||n>i.maxZ-2.5||Wm(t,n,i.top,r.boxes)?!1:s.every(([e,r])=>Math.hypot(e-t,r-n)>2.2)},l=t=>{for(let n=0;n<30;n++){let[n,r]=e.spot(o[t],2.5);if(c(t,n,r))return[n,r]}return null},u=e=>[(o[e].minX+o[e].maxX)/2,(o[e].minZ+o[e].maxZ)/2];for(let e of t){let t=l(e.cell),n=r.gates[e.gate];t?(r.buttons.push({id:n.button,pos:[t[0],o[e.cell].top,t[1]]}),s.push(t)):(r.boxes.push(...n.boxes),n.boxes=[],delete r.links[e.link].gate)}if(r.gates=r.gates.filter(e=>e.boxes.length>0),a.chance(i.ziplineChance)){let t=[];o.forEach((e,n)=>o.forEach((r,i)=>{let a=Math.hypot(u(n)[0]-u(i)[0],u(n)[1]-u(i)[1]);e.top-r.top>=2&&a>=14&&a<=30&&t.push([n,i])}));for(let[n,i]of a.shuffle(t).slice(0,12)){let[t,a]=u(n),[l,d]=u(i),f=Math.hypot(l-t,d-a),p=(e,n,r,i)=>{let s=o[r],c=Math.min(s.maxX-s.minX,s.maxZ-s.minZ)/2-Y.zipline.edgeMargin-.6;return[e+(l-t)/f*c*i,n+(d-a)/f*c*i]},m=p(t,a,n,1),h=p(l,d,i,-1);if(!c(n,...m)||!c(i,...h))continue;let g=Y.zipline;if(!xh(r,{a:[Q(m[0]),Q(o[n].top+g.postTop),Q(m[1])],b:[Q(h[0]),Q(o[i].top+g.postBottom),Q(h[1])]}).length){Lm(e,n,i,m,h),s.push(m,h);break}}}if(a.chance(i.teleportChance)){let e=o.map(()=>o.map(()=>1/0));o.forEach((t,n)=>{e[n][n]=0;let i=[n];for(;i.length;){let t=i.shift();for(let a of r.links){if(!a.dir)continue;let r=a.from===t?a.to:a.to===t?a.from:-1;r>=0&&e[n][r]===1/0&&(e[n][r]=e[n][t]+1,i.push(r))}}});let t=e=>o[e].kind!==`start`,c=[];for(let n=0;n<o.length;n++)for(let r=n+1;r<o.length;r++)t(n)&&t(r)&&e[n][r]>=i.teleportHops&&e[n][r]<1/0&&c.push([n,r]);for(let[e,t]of a.shuffle(c).slice(0,12)){let[i,a]=n(t)?[e,t]:[t,e],o=l(i),c=o&&l(a);if(o&&c){Im(r,i,a,o,c),s.push(o,c);break}}}}var Yh=Y.button,Xh=16735324,Zh=6219386,Qh=class{data;group=new V;pos;pressed=!1;cap;press=0;time=Math.random()*10;constructor(e){this.data=e,this.pos=new z(...e.pos),this.group.position.copy(this.pos);let t=new W(new G(Yh.radius*.95,Yh.radius,.22,28),new q({color:16774374,roughness:.6}));t.position.y=.11,t.receiveShadow=!0,this.cap=new W(new K(Yh.radius*.72,28,14,0,Math.PI*2,0,Math.PI/2),new q({color:Xh,roughness:.35,emissive:Xh,emissiveIntensity:.25})),this.cap.scale.y=.55,this.cap.position.y=.2,this.cap.castShadow=!0;let n=new q({color:16777215,roughness:.5});for(let e=0;e<5;e++){let t=e/5*Math.PI*2,r=new W(new K(.1,8,6),n);r.position.set(Math.cos(t)*.4,.42,Math.sin(t)*.4),r.scale.y=.4,this.cap.add(r)}this.group.add(t,this.cap)}touches(e){let t=e.pos.y-e.half.y;return Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<Yh.radius+e.half.x*.5&&Math.abs(t-this.pos.y)<.6}pressDown(){this.pressed=!0,this.cap.material.color.setHex(Zh),this.cap.material.emissive.setHex(Zh)}update(e){this.time+=e,this.press=Math.min(1,this.press+(this.pressed?e*6:0));let t=this.pressed?0:Math.sin(this.time*4)*.04;this.cap.scale.set(1+t,.55*(1-this.press*.6)+t,1+t)}},$h=class{data;group=new V;solids;center=new z;rise=-1;constructor(e,t){this.data=e,this.solids=e.boxes.map(e=>({kind:`static`,minX:e.min[0],minY:e.min[1],minZ:e.min[2],maxX:e.max[0],maxY:e.max[1],maxZ:e.max[2]}));let n=new er;for(let t of e.boxes)n.expandByPoint(new z(...t.min)).expandByPoint(new z(...t.max));this.group.add(eg(e.boxes,t)),n.getCenter(this.center),this.center.y=n.max.y,this.group.visible=!1}get open(){return this.rise>=0}start(e=!1){this.open||(this.rise=+!!e,this.group.visible=!0,this.place())}update(e){return this.rise<0||this.rise>=1?!1:(this.rise=Math.min(1,this.rise+e/Y.button.riseTime),this.place(),this.rise>=1)}place(){let e=1-this.rise,t=e*e*e-Math.sin(this.rise*Math.PI)*.04;this.group.position.y=-Y.button.riseDepth*t}};function eg(e,t){let n=new ep(e,rp,()=>0,1),r=new H(t.rock.side);return e.forEach((e,i)=>{let a=t[e.style],o=new H(a.side);n.paint(i,{side:o,top:new H(a.top),pillow:o.clone().lerp(r,.55)})}),n.commit(),n.mesh}var tg=class e{cell;group=new V;pos;spawn;active=!1;flag;flagPivot=new V;raise=0;static TRIGGER_RADIUS=3;constructor(e,t){this.cell=t,this.pos=new z(...e.pos),this.spawn=new z(...e.spawn),this.group.position.copy(this.pos);let n=new V;this.group.add(n);let r=new W(new G(.07,.07,3,10),new q({color:16777215,roughness:.4}));r.position.y=1.5,r.castShadow=!0,n.add(r);let i=new W(new K(.16,14,10),new q({color:16765503,emissive:16752640,emissiveIntensity:.3}));i.position.y=3.05,n.add(i);let a=new W(new G(.45,.55,.2,20),new q({color:11766015,roughness:.5}));a.position.y=.1,a.receiveShadow=!0,n.add(a);let o=new Ba;o.moveTo(0,0),o.lineTo(1.2,-.35),o.lineTo(0,-.75),o.closePath(),this.flag=new W(new Mo(o),new q({color:12567500,side:2,roughness:.6})),this.flag.castShadow=!0,this.flagPivot.position.set(.05,1.2,0),this.flagPivot.add(this.flag),n.add(this.flagPivot),gd(this,this.group)}check(t){if(this.active)return!1;let n=this.cell.top;return Math.hypot(t.x-this.pos.x,t.z-this.pos.z)<e.TRIGGER_RADIUS&&t.y>n-.5&&t.y<n+3&&(this.active=!0,this.flag.material.color.set(16735370),this.flag.material.emissive.set(16735370),this.flag.material.emissiveIntensity=.3,!0)}get flagWorldPos(){return new z(this.pos.x,this.pos.y+2.6,this.pos.z)}update(e,t){let n=+!!this.active;this.raise+=(n-this.raise)*Math.min(1,e*3),this.flagPivot.position.y=1.2+this.raise*1.75,this.flagPivot.rotation.y=Math.sin(t*(this.active?6:2))*(this.active?.35:.1)}},ng=4.2,rg=3.6,ig=2.6,ag=class{group=new V;solid;porch;coin;time=0;constructor(e){let[t,n,r]=e;this.group.position.set(t,n,r),this.solid={kind:`static`,minX:t-ng/2,maxX:t+ng/2,minY:n,maxY:n+ig,minZ:r-rg/2,maxZ:r+rg/2},this.porch=new z(t,n,r+rg/2+1.4);let i=(e,t={})=>new q({color:e,roughness:.7,...t}),a=(e,t,n,r)=>(e.position.set(t,n,r),e.castShadow=e.receiveShadow=!0,this.group.add(e),e);a(new W(new aa(ng,ig,rg),i(16773590)),0,ig/2,0);let o=new Ba;o.moveTo(-4.2/2-.4,0),o.lineTo(0,1.9),o.lineTo(2.5,0),o.closePath();let s=new To(o,{depth:4.2,bevelEnabled:!1});s.translate(0,0,-4.2/2),a(new W(s,i(16748459,{roughness:.5})),0,ig,0),a(new W(new aa(.5,1.1,.5),i(13215743)),1.1,3.9000000000000004,-.4),a(new W(new aa(1.1,1.7,.12),i(12089674)),0,.85,1.83),a(new W(new K(.07,8,6),i(16765503,{metalness:.4})),.35,.85,1.92);let c=a(new W(new sa(.42,20),i(10478591,{emissive:10478591,emissiveIntensity:.4})),-1.3,1.6,1.82);c.castShadow=!1,a(new W(new Po(.44,.06,6,20),i(16777215)),-1.3,1.6,1.83),a(new W(new G(.9,.9,.04,24),i(16739226)),0,.03,2.9000000000000004).scale.set(1,1,.7),this.coin=a(new W(new G(.55,.55,.14,24),i(16765503,{metalness:.5,roughness:.3,emissive:16752640,emissiveIntensity:.35})),0,3.6,2.4),this.coin.rotation.order=`YXZ`,this.coin.rotation.x=Math.PI/2,gd(this,this.group)}atDoor(e){return Math.hypot(e.x-this.porch.x,e.z-(this.porch.z-.3))<.9&&Math.abs(e.y-this.porch.y)<1.5}update(e){this.time+=e,this.coin.rotation.y=Math.sin(this.time*1.5)*.9,this.coin.position.y=3.6+Math.sin(this.time*2)*.08}},og=40,sg=null,cg=null,lg=class{mesh;coins=[];dummy=new An;body={pos:{x:0,y:0,z:0},half:{x:.2,y:.25,z:.2}};constructor(e){sg||(sg=new G(.3,.3,.09,18).rotateX(Math.PI/2),cg=new q({color:16763176,metalness:.35,roughness:.35,emissive:16752640,emissiveIntensity:.2}),Jd(cg)),this.mesh=new Hi(sg,cg,e.length+og),this.mesh.instanceMatrix.setUsage(qe),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1;for(let[t,n,r]of e)this.coins.push({x:t,y:n,z:r,active:!0,dynamic:!1,vx:0,vy:0,vz:0,delay:0,pulled:!1,phase:t*.7+r*.3});for(let e=0;e<og;e++)this.coins.push({x:0,y:0,z:0,active:!1,dynamic:!0,vx:0,vy:0,vz:0,delay:0,pulled:!1,phase:0})}get total(){return this.coins.length-og}drop(e,t,n,r){let i=0;for(let a of this.coins){if(i>=r)break;if(!a.dynamic||a.active)continue;let o=i/r*Math.PI*2+Math.random();a.active=!0,a.pulled=!1,a.x=e,a.y=t+.5,a.z=n,a.vx=Math.cos(o)*3,a.vz=Math.sin(o)*3,a.vy=7,a.delay=.7,i++}}update(e,t,n,r,i,a,o){let s=this.dummy,c=Y.player.pickupRadius*n.growth*n.perks.pickup,l=n.perks.magnetRadius,u=n.pos.x,d=n.pos.y,f=n.pos.z;for(let n=0;n<this.coins.length;n++){let p=this.coins[n];if(p.active){if(p.delay>0&&(p.delay-=e),p.dynamic&&!p.pulled){let t=this.body;t.pos.x=p.x,t.pos.y=p.y,t.pos.z=p.z,p.vy-=Y.physics.gravity*e;let n=Td(t,p.vx*e,p.vy*e,p.vz*e,i);n.grounded&&(p.vy=Math.abs(p.vy)>3?-p.vy*.4:0,p.vx*=.6,p.vz*=.6),n.hitX&&(p.vx=-p.vx*.5),n.hitZ&&(p.vz=-p.vz*.5),p.x=t.pos.x,p.y=t.pos.y,p.z=t.pos.z,p.y<Y.physics.fallY&&(p.active=!1)}let t=u-p.x,n=d-p.y,s=f-p.z,m=Math.hypot(t,n,s);if(p.delay<=0&&r&&m<l&&(p.pulled=!0),p.pulled){let r=Y.bonus.magnetSpeed*e/Math.max(m,.001),i=Math.min(1,r);p.x+=t*i,p.y+=n*i,p.z+=s*i}a&&p.delay<=0&&m<c&&(p.active=!1,o(p.x,p.y,p.z))}if(p.active){let e=p.dynamic?0:Math.sin(t*3+p.phase)*.08;s.position.set(p.x,p.y+e,p.z),s.rotation.set(0,t*3+p.phase,0),s.scale.setScalar(1)}else s.scale.setScalar(0),s.position.set(0,-100,0);s.updateMatrix(),this.mesh.setMatrixAt(n,s.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}},ug=class{data;group=new V;active=!0;inner=new V;base;constructor(e){this.data=e,this.base=new z(...e.pos),this.group.position.copy(this.base);let t=ip[e.type],n=new W(new K(.62,24,16),new q({color:t,transparent:!0,opacity:.22,roughness:.05,emissive:t,emissiveIntensity:.25,depthWrite:!1}));this.group.add(n),this.group.add(this.inner),this.inner.add(fg(e.type))}update(e){this.group.position.y=this.base.y+Math.sin(e*2.5+this.base.x)*.15,this.inner.rotation.y=e*1.8;let t=1+Math.sin(e*5)*.05;this.group.scale.setScalar(t)}};function dg(e,t={}){return new q({color:e,roughness:.4,...t})}function fg(e){let t=new V,n=ip[e];switch(e){case`boots`:{let e=dg(n,{emissive:n,emissiveIntensity:.2}),r=dg(16777215),i=new W(new aa(.26,.32,.3),e);i.position.set(0,.1,-.08);let a=new W(new K(.2,16,12),e);a.scale.set(.75,.6,1.3),a.position.set(0,-.08,.1);let o=new W(new aa(.3,.07,.6),r);o.position.set(0,-.18,.05);let s=new W(new K(.12,10,8),r);s.scale.set(.3,1,1.6),s.position.set(.16,.15,-.1),t.add(i,a,o,s);break}case`spring`:{let e=[];for(let t=0;t<=80;t++){let n=t/80,r=n*Math.PI*2*4;e.push(new z(Math.cos(r)*.22,-.28+n*.56,Math.sin(r)*.22))}let r=new W(new Fo(new ya(e),160,.045,8),dg(n,{emissive:n,emissiveIntensity:.2,metalness:.3}));t.add(r);break}case`shield`:{let e=new W(new K(.3,20,14),dg(n,{transparent:!0,opacity:.7,emissive:n,emissiveIntensity:.4})),r=new W(new Po(.34,.04,8,32),dg(16777215)),i=new W(new K(.07,8,6),new li({color:16777215}));i.position.set(.12,.13,.22),t.add(e,r,i);break}case`magnet`:{let e=dg(16731486),r=new W(new Po(.2,.08,10,24,Math.PI),e);r.rotation.z=Math.PI,r.position.y=-.02;let i=dg(15265525,{metalness:.6,roughness:.25}),a=dg(n,{emissive:n,emissiveIntensity:.2});for(let e of[-1,1]){let n=new W(new G(.08,.08,.16,12),a);n.position.set(e*.2,.06,0);let r=new W(new G(.081,.081,.09,12),i);r.position.set(e*.2,.18,0),t.add(n,r)}t.add(r);break}}return t}var pg=7,mg=class{data;group=new V;solid;from;to;half;center=new z;constructor(e){this.data=e,this.from=new z(...e.from),this.to=new z(...e.to),this.half=new z(...e.size).multiplyScalar(.5),this.solid={kind:`moving`,minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0,dx:0,dy:0,dz:0};let[t,n,r]=e.size,i=new ep([{min:[-t/2,-n/2,-r/2],max:[t/2,n/2,r/2],style:`platform`}],rp,()=>0,1.2);i.paint(0,{side:new H(9425919),top:new H(16773544),pillow:new H(9425919)}),i.commit(),this.group.add(i.mesh);let a=new K(.4,12,8),o=new q({color:16777215,roughness:.9});for(let e=0;e<pg;e++){let i=e/pg*Math.PI*2,s=new W(a,o);s.position.set(Math.cos(i)*(t/2-.35),-n/2-.05,Math.sin(i)*(r/2-.3)),s.scale.set(1+e%2*.3,.6,1+e%2*.3),this.group.add(s)}let s=new W(a,o);s.position.y=-n/2-.12,s.scale.set(t*.8,.9,r*.8),this.group.add(s),this.setTime(0)}setTime(e){let t=.5-.5*Math.cos(e/this.data.period*Math.PI*2),n=this.center.x,r=this.center.y,i=this.center.z;this.center.lerpVectors(this.from,this.to,t);let a=this.solid;a.dx=this.center.x-n,a.dy=this.center.y-r,a.dz=this.center.z-i,a.minX=this.center.x-this.half.x,a.maxX=this.center.x+this.half.x,a.minY=this.center.y-this.half.y,a.maxY=this.center.y+this.half.y,a.minZ=this.center.z-this.half.z,a.maxZ=this.center.z+this.half.z,this.group.position.copy(this.center)}resetDelta(){this.solid.dx=this.solid.dy=this.solid.dz=0}},hg=class{group=new V;solid;pad;wobble=0;time=0;constructor(e){let[t,n,r]=e.pos,i=e.radius,a=.3;this.solid={kind:`static`,trampoline:!0,minX:t-i,maxX:t+i,minY:n,maxY:n+a,minZ:r-i,maxZ:r+i},this.group.position.set(t,n,r);let o=new W(new Po(i-.1,.12,10,32),new q({color:16735370,roughness:.4}));o.rotation.x=Math.PI/2,o.position.y=a,o.castShadow=!0,this.pad=new W(new G(i-.15,i-.15,.08,32),new q({color:5227519,roughness:.5,emissive:2201331,emissiveIntensity:.15})),this.pad.position.y=.27999999999999997;let s=new q({color:16765503});for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=new W(new G(.06,.06,a,6),s);n.position.set(Math.cos(t)*(i-.1),a/2,Math.sin(t)*(i-.1)),this.group.add(n)}let c=new W(new sa(.35,5),new li({color:16777215,transparent:!0,opacity:.8}));c.rotation.x=-Math.PI/2,c.position.y=.32999999999999996,this.group.add(o,this.pad,c)}bounce(){this.wobble=1}update(e){this.time+=e,this.wobble=Math.max(0,this.wobble-e*2.5);let t=Math.sin(this.time*30)*this.wobble;this.pad.scale.set(1+t*.05,1,1+t*.05),this.pad.position.y=.28-this.wobble*.15*Math.abs(Math.cos(this.time*15))}},gg=1.25,_g=2.9,vg=6281471,yg=2077951,bg=13170431,xg=[2068479,5227519,9430015,16777215,9430015,5227519,2068479],Sg=11120056,Cg=14672874,wg=11071743,Tg=3,Eg=1.2,Dg=28;function Og(e){let t=document.createElement(`canvas`);t.width=64,t.height=70;let n=t.getContext(`2d`);e.forEach((e,t)=>{n.fillStyle=`#`+e.toString(16).padStart(6,`0`),n.fillRect(0,t*10,64,10)});let r=new ta(t);return r.colorSpace=Ve,r}function kg(e,t,n){return e.moveTo(-t,0),e.lineTo(-t,n),e.absarc(0,n,t,Math.PI,0,!0),e.lineTo(t,0),e.closePath(),e}var Ag=class{group=new V;pos;flag;beam;door;halo;radius=4.15/2+.1;frameMat=new q({color:vg,emissive:yg,emissiveIntensity:.6,roughness:.15,metalness:.1,transparent:!0,opacity:.92});gemMat=new q({color:12579839,emissive:5230847,emissiveIntensity:.9,roughness:.1});gems=[];sparks;sparkSeeds=[];top;flagOpen=Og(xg);flagLocked=Og(xg.map((e,t)=>t%2?13225172:11120056));isOpen=!0;openT=1;lastTime=0;tmp=new H;arrow=new V;arrowMat=new q({color:16765503,emissive:16752640,emissiveIntensity:.8,roughness:.4,transparent:!0});waves=[];highlightOn=!1;highlightT=0;constructor(e){this.pos=new z(...e),this.group.position.copy(this.pos);let t=.22,n=new W(new G(1.95,2.15,t,6),new q({color:14677759,roughness:.35,emissive:10479359,emissiveIntensity:.15}));n.position.y=t/2,n.rotation.y=Math.PI/6,n.receiveShadow=!0,n.castShadow=!0,this.group.add(n),this.halo=new W(new Mo(kg(new Ba,2.02,_g),24),new li({color:vg,transparent:!0,opacity:.25,depthWrite:!1,blending:2,side:2,forceSinglePass:!0})),this.halo.position.set(0,.01999999999999999,-.3),this.group.add(this.halo);let r=kg(new Ba,1.57,_g);r.holes.push(kg(new za,gg,_g));let i=new To(r,{depth:.42,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:24});i.translate(0,0,-.21);let a=new W(i,this.frameMat);a.position.y=t,a.castShadow=!0,this.group.add(a),this.door=new W(new Mo(kg(new Ba,gg,_g),24),new Wo({transparent:!0,side:2,forceSinglePass:!0,uniforms:{uTime:{value:0},uOpen:{value:1}},vertexShader:`
          varying vec2 vP;
          void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,fragmentShader:`
          varying vec2 vP;
          uniform float uTime;
          uniform float uOpen;
          const float HALF = ${gg.toFixed(3)};
          const float STRAIGHT = ${_g.toFixed(3)};
          float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
          void main() {
            float t = uTime * mix(0.15, 1.0, uOpen);
            vec2 p = vP;
            // Расстояние до края проёма: у краёв гладь светлее.
            float d = min(HALF - abs(p.x), p.y);
            if (p.y > STRAIGHT) d = min(d, HALF - length(vec2(p.x, p.y - STRAIGHT)));
            float rim = 1.0 - smoothstep(0.0, 0.45, d);
            // Струи снизу вверх и круги ряби от середины.
            float flow = sin(p.y * 4.5 - t * 2.4 + sin(p.x * 3.0 + t * 1.3) * 1.6) * 0.5 + 0.5;
            float ripple = sin(length(p - vec2(0.0, 1.9)) * 7.0 - t * 3.2) * 0.5 + 0.5;
            vec3 deep = vec3(0.04, 0.42, 0.95);
            vec3 bright = vec3(0.42, 0.93, 1.0);
            vec3 col = mix(deep, bright, flow * 0.55 + ripple * 0.35);
            // Светлое ядро посередине.
            col += vec3(0.55, 0.85, 1.0) * exp(-pow(length((p - vec2(0.0, 1.9)) * vec2(1.4, 0.8)), 2.0) * 1.2) * 0.5;
            col += vec3(0.7, 0.95, 1.0) * rim * 0.6;
            // Искорки — круглые точки, плывут вверх и мерцают.
            vec2 g = p * 5.0 + vec2(0.0, -t * 0.6);
            vec2 cell = floor(g);
            float h = hash(cell);
            vec2 off = vec2(hash(cell + 3.1), hash(cell + 5.7)) - 0.5;
            float dot_ = smoothstep(0.13, 0.0, length(fract(g) - 0.5 - off * 0.6));
            col += step(0.75, h) * dot_ * (0.55 + 0.45 * sin(t * 5.0 + h * 40.0)) * uOpen;
            // Закрыта — серая застывшая гладь.
            vec3 grey = vec3(dot(col, vec3(0.299, 0.587, 0.114)) * 0.75 + 0.12);
            col = mix(grey, col, uOpen);
            gl_FragColor = vec4(col, mix(0.88, 0.95, rim));
          }
        `})),this.door.position.y=t,this.group.add(this.door);let o=(e,t,n,r)=>{let i=new W(new ko(n,0),this.gemMat);i.position.set(e,t,0),i.scale.set(.75,1.5,.75),i.rotation.z=r,i.castShadow=!0,this.gems.push(i),this.group.add(i)};for(let e of[-1,1])o(e*1.72,.67,.32,-e*.35),o(e*(1.57+.5),.52,.22,-e*.7);let s=new Float32Array(84);for(let e=0;e<Dg;e++)this.sparkSeeds.push({x:(Math.random()*2-1)*1.55,z:(Math.random()*2-1)*.6,speed:.5+Math.random()*.7,phase:Math.random()});let c=new Mr;c.setAttribute(`position`,new vr(s,3)),this.sparks=new Qi(c,new qi({color:bg,size:.16,transparent:!0,opacity:.9,depthWrite:!1,blending:2})),this.sparks.frustumCulled=!1,this.group.add(this.sparks);let l=1.57+1.4,u=new W(new G(.1,.12,7,10),new q({color:16777215,roughness:.4}));u.position.set(l,3.5,0),u.castShadow=!0,this.group.add(u),this.top=new W(new ko(.3,0),new q({color:12579839,emissive:5230847,emissiveIntensity:.6})),this.top.position.set(l,7.2,0),this.top.scale.y=1.4,this.group.add(this.top),this.flag=new W(new Ao(2.6,1.7,12,1),new q({side:2,roughness:.6})),this.flag.material.map=this.flagOpen,this.flag.position.set(4.27,6.1,0),this.flag.castShadow=!0,this.group.add(this.flag),this.beam=new W(new G(.9,1.6,60,24,1,!0),new li({color:wg,transparent:!0,opacity:.22,depthWrite:!1,side:2,forceSinglePass:!0,fog:!1})),this.beam.position.y=30,this.group.add(this.beam);let d=new W(new ca(1,1.4,20),this.arrowMat);d.rotation.x=Math.PI;let f=new W(new G(.36,.36,1.3,14),this.arrowMat);f.position.y=1.3,this.arrow.add(d,f),this.arrow.visible=!1,this.group.add(this.arrow);for(let e=0;e<Tg;e++){let e=new W(new jo(.85,1,48),new li({color:wg,transparent:!0,opacity:0,depthWrite:!1,side:2,forceSinglePass:!0}));e.rotation.x=-Math.PI/2,e.position.y=.24,e.visible=!1,this.waves.push(e),this.group.add(e)}gd(this,this.group)}get open(){return this.isOpen}setOpen(e,t=!1){this.isOpen=e,t&&(this.openT=+!!e,this.applyLook())}setHighlight(e){this.highlightOn=e}applyLook(){let e=this.openT;this.frameMat.color.copy(this.tmp.setHex(Sg).lerp(new H(vg),e)),this.frameMat.opacity=1-.08*e,this.gemMat.color.copy(this.tmp.setHex(12896207).lerp(new H(12579839),e)),this.top.material.color.copy(this.gemMat.color),this.top.material.emissiveIntensity=.6*e,this.door.material.uniforms.uOpen.value=e;let t=this.flag.material,n=e>.5?this.flagOpen:this.flagLocked;t.map!==n&&(t.map=n,t.needsUpdate=!0),this.beam.material.color.setHex(Cg).lerp(new H(wg),e)}update(e){let t=Math.min(.1,Math.max(0,e-this.lastTime));this.lastTime=e;let n=+!!this.isOpen;this.openT!==n&&(this.openT=n>this.openT?Math.min(1,this.openT+t):Math.max(0,this.openT-t),this.applyLook());let r=+!!this.highlightOn;this.highlightT!==r&&(this.highlightT=r>this.highlightT?Math.min(1,this.highlightT+t*2):Math.max(0,this.highlightT-t*1.2));let i=this.highlightT,a=this.openT,o=this.flag.geometry.attributes.position;for(let t=0;t<o.count;t++){let n=o.getX(t)+1.3;o.setZ(t,Math.sin(e*5-n*2.2)*.18*n)}o.needsUpdate=!0,this.beam.material.opacity=(.18+Math.sin(e*2)*.06)*(.6+.4*a)+i*(.3+Math.sin(e*6)*.08),this.beam.rotation.y=e*.3,this.beam.scale.set(1+i*.7,1,1+i*.7);let s=i*(.45+Math.sin(e*6)*.25);this.frameMat.emissiveIntensity=(.45+Math.sin(e*2.2)*.15)*a+s,this.gemMat.emissiveIntensity=(.8+Math.sin(e*3)*.25)*a+s,this.halo.material.opacity=(.2+Math.sin(e*2.2)*.07)*a+i*.25,this.halo.scale.setScalar(1+Math.sin(e*2.2)*.02),this.gems.forEach((t,n)=>t.rotation.y=e*.8+n),this.top.rotation.y=e*1.5,this.door.material.uniforms.uTime.value=e;let c=this.sparks.geometry.attributes.position;this.sparkSeeds.forEach((t,n)=>{let r=(t.phase+e*t.speed*.25)%1;c.setXYZ(n,t.x+Math.sin(e*2+n)*.12,.3+r*4.75,t.z)}),c.needsUpdate=!0,this.sparks.material.opacity=.9*a,this.sparks.visible=a>.01,this.updateHighlight(e,i)}updateHighlight(e,t){this.arrow.visible=t>0;for(let e of this.waves)e.visible=t>0;if(t<=0)return;let n=1+2.2*(t-1)**3+1.2*(t-1)**2;this.arrow.scale.setScalar(Math.max(.01,n)),this.arrow.position.y=this.radius*2+1.6+Math.abs(Math.sin(e*3.5))*.6,this.arrow.rotation.y=e*1.5,this.arrowMat.opacity=t,this.arrowMat.emissiveIntensity=.6+Math.sin(e*7)*.3,this.waves.forEach((n,r)=>{let i=(e/Eg+r/Tg)%1;n.scale.setScalar(1.5+i*6),n.material.opacity=(1-i)*.55*t})}contains(e){return Math.hypot(e.x-this.pos.x,e.z-this.pos.z)<1.5&&e.y>this.pos.y-.5&&e.y<this.pos.y+this.radius*2}dispose(){this.flagOpen.dispose(),this.flagLocked.dispose(),this.sparks.geometry.dispose(),this.sparks.material.dispose()}get center(){return new z(this.pos.x,this.pos.y+this.radius,this.pos.z)}},jg=Y.teleport,Mg=null;function Ng(){if(Mg)return Mg;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.translate(64,64),t.lineCap=`round`;for(let e=0;e<3;e++){t.beginPath();for(let n=0;n<=1;n+=.02){let r=Math.PI*2/3*e+n*Math.PI*2.2,i=6+n*54;n===0?t.moveTo(Math.cos(r)*i,Math.sin(r)*i):t.lineTo(Math.cos(r)*i,Math.sin(r)*i)}t.strokeStyle=`rgba(255,255,255,0.95)`,t.lineWidth=9,t.stroke()}return Mg=new ta(e),Mg}var Pg=class{data;group=new V;pads;on=-1;stood=0;disarmed=-1;constructor(e){this.data=e,this.pads=[this.pad(e.a,!0),this.pad(e.b,!e.oneWay)],gd(this,this.group)}pad(e,t){let n=new V;n.position.set(...e);let r=this.data.color,i=new W(new G(jg.radius+.25,jg.radius+.35,.16,32),new q({color:16774374,roughness:.6}));i.position.y=.08,i.receiveShadow=!0;let a=new W(new Po(jg.radius,.12,10,36),new q({color:r,emissive:r,emissiveIntensity:.5,roughness:.3}));a.rotation.x=Math.PI/2,a.position.y=.2;let o=new W(new sa(jg.radius-.05,32),new li({color:r,map:Ng(),transparent:!0,opacity:t?.9:.35,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.18,n.add(i,a,o);let s=[],c=qd(new li({color:16777215}),.7);for(let e=0;e<(t?5:0);e++){let e=new W(new K(.06,6,4),c);s.push(e),n.add(e)}return this.group.add(n),{pos:new z(...e),group:n,ring:a,swirl:o,sparks:s}}touches(e,t){let n=this.pads[e].pos,r=t.pos.y-t.half.y;return Math.hypot(t.pos.x-n.x,t.pos.z-n.z)<jg.radius+t.half.x*.3&&Math.abs(r-n.y)<.6}update(e,t,n){let r=-1;if(n){this.disarmed>=0&&this.pads[this.disarmed].pos.distanceTo(n.pos)>jg.rearmDistance+n.half.x&&(this.disarmed=-1);let t=[0,1].find(e=>e!==this.disarmed&&!(e===1&&this.data.oneWay)&&this.touches(e,n))??-1;this.stood=t>=0&&t===this.on?this.stood+e:0,this.on=t,t>=0&&this.stood>=jg.standTime&&(r=1-t,this.on=-1,this.stood=0)}let i=this.on>=0?Math.min(1,this.stood/jg.standTime):0;return this.pads.forEach((e,n)=>{let r=n===this.on?i:0;e.swirl.rotation.z=-t*(1.5+r*8),e.ring.material.emissiveIntensity=.5+r*1.2+Math.sin(t*3+n)*.1,e.ring.scale.setScalar(1+r*.12),e.sparks.forEach((n,r)=>{let i=(t*.5+r/e.sparks.length)%1,a=r*1.3+t*2;n.position.set(Math.cos(a)*jg.radius*.7,.2+i*2.2,Math.sin(a)*jg.radius*.7),n.scale.setScalar(1-i)})}),r}arrived(e){this.disarmed=e,this.on=-1,this.stood=0}},Fg=Y.zipline,Ig=new q({color:9067051,roughness:.8}),Lg=new q({color:13208399,roughness:.7}),Rg=new q({color:16735324,roughness:.4}),zg=class{data;group=new V;line;handle=new V;grab;ground;constructor(e){this.data=e;let t=Mm(e),n=e.b[0]-e.a[0],r=e.b[2]-e.a[2],i=Math.hypot(n,r)||1;this.line={start:t,end:Nm(e),length:Am(e),dir:{x:n/i,z:r/i},at:(t,n)=>new z(...Pm(e,t,n))},this.ground=e.a[1]-Fg.postTop;let a=jm(e,t);this.grab=new z(a[0],this.ground,a[2]);for(let[t,n]of[[e.a,Fg.postTop],[e.b,Fg.postBottom]]){let e=new W(new G(.13,.18,n+.3,10),Lg);e.position.set(t[0],t[1]-n+(n+.3)/2,t[2]),e.castShadow=!0;let r=new W(new K(.2,12,8),Rg);r.position.set(t[0],t[1]+.32,t[2]),this.group.add(e,r)}let o=new W(new Fo(new ya(Array.from({length:25},(t,n)=>new z(...jm(e,n/24)))),48,.05,6),Ig);o.castShadow=!0,this.group.add(o);let s=new W(new G(.04,.04,Fg.handGap,6),Rg);s.position.y=-Fg.handGap/2;let c=new W(new G(.06,.06,.7,8),Rg);c.rotation.z=Math.PI/2,c.position.y=-Fg.handGap;let l=new W(new Po(.12,.04,6,12),Lg);this.handle.add(s,c,l),this.handle.rotation.y=Math.atan2(n,r),this.group.add(this.handle),this.setHandle(t)}canGrab(e){let t=e.pos.y-e.half.y;return Math.hypot(e.pos.x-this.grab.x,e.pos.z-this.grab.z)<Fg.grabRadius+e.half.x*.5&&Math.abs(t-this.ground)<1.2}setHandle(e){this.handle.position.set(...jm(this.data,e))}};function Bg(e,t){let n=Y.gloom,r=(e.min[0]+e.max[0])/2,i=(e.min[2]+e.max[2])/2;return t.some(t=>{let a=t.zone,o=t.pos[1]-.5;return e.max[1]<=o-n.below||e.max[1]>=o+n.above?!1:e.min[0]<a.maxX&&e.max[0]>a.minX&&e.min[2]<a.maxZ&&e.max[2]>a.minZ||r>a.minX-n.margin&&r<a.maxX+n.margin&&i>a.minZ-n.margin&&i<a.maxZ+n.margin})}var Vg={time:{value:0},hero:{value:new z(1e5,0,1e5)}};function Hg(e,t,n){let r=new q(e);return r.onBeforeCompile=e=>{e.uniforms.time=Vg.time,e.uniforms.hero=Vg.hero,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float time;
uniform vec3 hero;`).replace(`#include <project_vertex>`,`vec4 wpos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
vec3 root = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
float hgt = max(wpos.y - root.y, 0.0);
float bend = hgt * hgt * ${t.toFixed(3)};
wpos.x += sin(time * 1.7 + root.x * 0.8 + root.z * 0.5) * bend;
wpos.z += sin(time * 1.3 + root.z * 0.7 + root.x * 0.3) * bend * 0.6;
// Возле героя пригибается от него.
vec2 away = root.xz - hero.xz;
float dist = length(away);
float push = (1.0 - smoothstep(0.35, 1.1, dist)) * (1.0 - smoothstep(0.5, 1.2, abs(root.y - hero.y + 0.42)));
wpos.xz += away / max(dist, 0.05) * push * hgt * 0.9;
wpos.y -= push * hgt * 0.3;
vec4 mvPosition = viewMatrix * wpos;
gl_Position = projectionMatrix * mvPosition;`)},r.customProgramCacheKey=()=>`sway-${n}`,r}function Ug(e,t,n,r){let i=e.getAttribute(`position`),a=new Float32Array(i.count*3);for(let e=0;e<i.count;e++){let o=r+(1-r)*Math.min(1,Math.max(0,(i.getY(e)-t)/(n-t)));a[e*3]=a[e*3+1]=a[e*3+2]=o}return e.setAttribute(`color`,new vr(a,3)),e}function Wg(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return t}var Gg=(()=>{let e=[];for(let t=0;t<6;t++){let n=.2+t*37%10/70,r=new ca(.03,n,3).translate(0,n/2,0);r.rotateZ((t%3-1)*.25).rotateX((t*5%3-1)*.22);let i=t/6*Math.PI*2;r.translate(Math.cos(i)*.06,0,Math.sin(i)*.06),e.push(Wg(r))}return Ug(md(e),0,.32,.55)})(),Kg=new G(.012,.016,.3,4).translate(0,.15,0),qg=(()=>{let e=[];for(let t=0;t<5;t++){let n=t/5*Math.PI*2;e.push(Wg(new K(.06,6,3).scale(1,.35,.65).translate(Math.cos(n)*.065,.3,Math.sin(n)*.065)))}return md(e)})(),Jg=new K(.04,8,6).scale(1,.7,1).translate(0,.315,0),Yg=new G(.07,.11,.95,7).translate(0,.47,0),Xg=Ug(md([new Oo(.55,2).translate(0,1.25,0),new Oo(.38,2).translate(.32,1.05,.12),new Oo(.34,2).translate(-.28,1.1,-.15)].map(Wg)),.8,1.8,.72),Zg=Ug(md([new ca(.6,.8,9).translate(0,.75,0),new ca(.47,.7,9).translate(0,1.15,0),new ca(.32,.6,9).translate(0,1.5,0)].map(Wg)),.35,1.8,.7),Qg=new ca(.22,.28,9).translate(0,1.68,0),$g=Ug(md([new Oo(.36,2).translate(0,.26,0),new Oo(.27,2).translate(.3,.18,.05),new Oo(.25,2).translate(-.27,.17,-.06)].map(Wg)),0,.6,.7),e_=new Oo(.12,0).scale(1,.55,.8).translate(0,.03,0),t_=new K(.13,12,6,0,Math.PI*2,0,Math.PI/2).scale(1,.75,1).translate(0,.16,0),n_=new G(.045,.055,.17,8).translate(0,.085,0),r_=md([Wg(new Fo(new ya([new z(0,.02,-.05),new z(0,-.15,.06),new z(.05,-.55,.08),new z(-.05,-.95,.06),new z(.02,-1.25,.09)]),8,.03,3)),...[.3,.62,.9,1.15].map((e,t)=>Wg(new K(.07,5,3).scale(1,.3,.6).rotateZ(t%2?.6:-.6).translate(t%2?.07:-.07,-e,.09)))]),i_=new ca(.055,1,6).rotateX(Math.PI).translate(0,-.5,0),a_=new sa(.1,10).scale(1,.75,1).rotateX(-Math.PI/2).translate(.1,0,0),o_=new G(.04,.04,1,6).translate(0,.5,0),s_=new K(.32,16,12).scale(1,1,.35).translate(0,1.05,0),c_=md([new ko(.3,0).scale(.6,1.6,.6).translate(0,.45,0),new ko(.3,0).scale(.45,1.1,.45).rotateZ(.4).translate(.22,.28,.05),new ko(.3,0).scale(.4,.9,.4).rotateZ(-.5).translate(-.2,.22,-.08),new ko(.3,0).scale(.35,.7,.35).rotateX(.5).translate(.02,.16,.22)].map(Wg)),l_=Hg({color:16777215,roughness:.8,vertexColors:!0},2.2,`grass`),u_=Hg({color:16777215,roughness:.6},1.4,`flower`),d_=Hg({color:5029738,roughness:.8},1.4,`stem`),f_=Hg({color:16777215,roughness:.75,vertexColors:!0},.012,`crown`),p_=new q({color:16777215,roughness:.75}),m_=new q({color:16777215,roughness:.8,vertexColors:!0}),h_=qd(new li({color:16777215}),.8),g_=new q({color:16777215,roughness:.15,transparent:!0,opacity:.85,emissive:10475775,emissiveIntensity:.25}),__=new q({color:16777215,roughness:.6,side:2}),v_=[Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__],y_={bush:{grass:[6082419,8379530,5029738,10216058],flowers:!0,tree:`lollipop`,corner:`bush`,hang:`vine`,mushrooms:!0,butterflies:!0},candy:{grass:null,flowers:!0,tree:`lollipop`,corner:`lolly`,hang:null,mushrooms:!1,butterflies:!0},pine:{grass:null,flowers:!1,tree:`pine`,corner:`bush`,hang:`icicle`,mushrooms:!1,butterflies:!1},crystal:{grass:[7329480,9429168,8047072],flowers:!1,tree:null,corner:`crystal`,hang:`glow`,mushrooms:!0,butterflies:!1}},b_=[16735340,16747100,16765503],x_=[8189951,16747760,11992954,16770667],S_=[16765503,16747720,9425919,16777215,11766015],C_=class{group=new V;disposables=[];butterflies=[];wings=null;m=new nn;q=new Nt;e=new pn;v=new z;sc=new z;constructor(e,t){let n=t.floor===`lava`,r=n?{...y_[t.decor],grass:null}:y_[t.decor],i=new Zm(e.seed+777),a=Bf.low,o=w_(e),s=(e,t,n)=>o.some(r=>Math.hypot(r[0]-e,r[2]-t)<n),c=(t,n,r)=>e.caves.some(e=>t>e.min[0]-.5&&t<e.max[0]+.5&&r>e.min[2]-.5&&r<e.max[2]+.5&&n>e.min[1]-1&&n<e.max[1]),l=[],u=[],d=[],f=[],p=[],m=[],h=[],g=e.boxes.filter(e=>e.style===`ground`||e.style===`start`||e.style===`goal`),_=e.boxes.filter(e=>e.style!==`fence`);for(let e of g){let[o,,g]=e.min,[v,y,b]=e.max,x=$f(e,_),S=v-o,C=b-g;[{a:[o,g],b:[o,b],n:[-1,0]},{a:[v,g],b:[v,b],n:[1,0]},{a:[o,g],b:[v,g],n:[0,-1]},{a:[o,b],b:[v,b],n:[0,1]}].forEach((n,o)=>{if(!x[o])return;let c=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1]),f=(n.b[0]-n.a[0])/c,p=(n.b[1]-n.a[1])/c,h=(e,t)=>[n.a[0]+f*e-n.n[0]*t,n.a[1]+p*e-n.n[1]*t];if(r.grass)for(let e=.2;e<c-.2;e+=(a?.8:.42)*i.range(.7,1.3)){let[t,n]=h(e,i.range(.1,.45));s(t,n,.6)||l.push({x:t,y,z:n,s:i.range(.75,1.25),rot:i.range(0,6.28),color:i.pick(r.grass)})}if(r.flowers)for(let e=.4;e<c-.4;e+=(a?2:1.1)*i.range(.6,1.4)){if(!i.chance(.65))continue;let[n,r]=h(e,i.range(.15,.55));s(n,r,.6)||u.push({x:n,y,z:r,s:i.range(.8,1.2),rot:i.range(0,6.28),color:i.pick(t.flowers)})}for(let e=.6;e<c-.6;e+=2.3*i.range(.7,1.3)){if(!i.chance(.5))continue;let[n,r]=h(e,i.range(.15,.4));s(n,r,.6)||d.push({x:n,y,z:r,s:i.range(.6,1.4),rot:i.range(0,6.28),color:t.styles.rock.top})}if(r.hang&&e.min[1]<-1){let e=Math.atan2(n.n[0],n.n[1]),t=r.hang===`icicle`?.32:1.4;for(let n=.3;n<c-.3;n+=t*i.range(.7,1.3)){if(!i.chance(r.hang===`icicle`?.75:.4))continue;let[t,a]=h(n,-.02),o=r.hang===`icicle`?i.range(.15,.55):i.range(.6,1.3);m.push({x:t,y:y-Y.look.capDepth*.6,z:a,s:1,sy:o,rot:e,color:r.hang===`glow`?i.pick(x_):r.hang===`icicle`?15136511:i.pick([5029738,6082419,4173406])})}}});let w=[[0,2,o+.75,g+.75],[1,2,v-.75,g+.75],[0,3,o+.75,b-.75],[1,3,v-.75,b-.75]];for(let[e,n,a,o]of w)x[e]&&x[n]&&!s(a,o,1.6)&&!c(a,y,o)&&(r.tree&&n===2&&Math.min(S,C)>=4&&i.chance(.6)?f.push({x:a,y,z:o,s:i.range(.85,1.15),rot:i.range(0,6.28),color:i.pick(t.decorColors)}):i.chance(.6)&&p.push({x:a,y,z:o,s:i.range(.7,1.1),rot:i.range(0,6.28),color:i.pick(t.decorColors)}));let T=Math.floor(S*C*(a?.025:.05));for(let e=0;e<T;e++){let e=i.range(o+.6,v-.6),t=i.range(g+.6,b-.6);s(e,t,1)||(r.grass&&l.push({x:e,y,z:t,s:i.range(.6,1),rot:i.range(0,6.28),color:i.pick(r.grass)}),r.mushrooms&&i.chance(.12)&&h.push({x:e+.2,y,z:t+.1,s:i.range(.7,1.2),rot:i.range(0,6.28),color:i.pick(n||r.corner===`crystal`?x_:b_)}))}}let v=r.corner===`crystal`;if(this.add(l,Gg,l_,!1),this.add(u,Kg,d_,!1,5029738),this.add(u,qg,u_,!1),this.add(u,Jg,u_,!1,16765503),this.add(d,e_,p_,!0),this.add(h,n_,p_,!1,16774374),this.add(h,t_,v?h_:p_,!1),r.tree===`lollipop`?(this.add(f,Yg,p_,!0,t.decor===`candy`?16774880:11040591),this.add(f,Xg,f_,!0)):r.tree===`pine`&&(this.add(f,Yg,p_,!0,10250810),this.add(f,Zg,m_,!0),this.add(f,Qg,p_,!1,16777215)),r.corner===`bush`?this.add(p,$g,m_,!0):r.corner===`lolly`?(this.add(p,o_,p_,!0,16774880),this.add(p,s_,p_,!0)):this.add(p,c_,h_,!1),r.hang===`vine`?this.add(m,r_,p_,!1):r.hang===`icicle`?this.add(m,i_,g_,!1):r.hang===`glow`&&this.add(m,r_,h_,!1),r.butterflies&&u.length){let e=Math.min(a?4:8,Math.ceil(u.length/12));for(let t=0;t<e;t++){let n=u[Math.floor((t+.5)/e*u.length)];this.butterflies.push({anchor:new z(n.x,n.y,n.z),phase:i.range(0,6.28)})}this.wings=new Hi(a_,__,e*2);let t=new H;for(let n=0;n<e;n++){let e=t.set(S_[n%S_.length]);this.wings.setColorAt(n*2,e),this.wings.setColorAt(n*2+1,e)}this.wings.frustumCulled=!1,this.group.add(this.wings),this.disposables.push(this.wings),this.update(0)}}add(e,t,n,r,i){if(!e.length)return;let a=new Hi(t,n,e.length),o=new H;e.forEach((e,t)=>{this.q.setFromEuler(this.e.set(0,e.rot,0)),this.m.compose(this.v.set(e.x,e.y,e.z),this.q,this.sc.set(e.s,e.sy??e.s,e.s)),a.setMatrixAt(t,this.m),a.setColorAt(t,o.set(i??e.color))}),a.castShadow=r,a.receiveShadow=!0,a.computeBoundingSphere(),this.group.add(a),this.disposables.push(a)}update(e){let t=this.wings;t&&(this.butterflies.forEach((n,r)=>{let i=e*.6+n.phase,a=n.anchor.x+Math.sin(i)*.9+Math.sin(i*2.3)*.2,o=n.anchor.z+Math.cos(i*.8)*.9,s=n.anchor.y+.55+Math.sin(i*2.1)*.25,c=Math.atan2(Math.cos(i)*.9,-Math.sin(i*.8)*.72),l=Math.sin(e*22+n.phase*5)*.9;for(let e of[1,-1])this.q.setFromEuler(this.e.set(0,c,l*e,`YXZ`)),this.m.compose(this.v.set(a,s,o),this.q,this.sc.set(e,1,1)),t.setMatrixAt(r*2+(e>0?0:1),this.m)}),t.instanceMatrix.needsUpdate=!0)}};function w_(e){let t=[e.start,e.goal.pos];e.house&&t.push(e.house);for(let n of e.checkpoints)t.push(n.pos);for(let n of e.buttons)t.push(n.pos);for(let n of e.teleports)t.push(n.a,n.b);for(let n of e.trampolines)t.push(n.pos);for(let n of e.bonuses)t.push(n.pos);for(let n of e.ziplines)t.push(n.a,n.b);return t}var T_={ground:{top:8379530,side:16173215},bridge:{top:15910029,side:14262374},plank:{top:13208399,side:10250810},start:{top:16765806,side:16173215},platform:{top:16757713,side:13215743},wall:{top:8379530,side:9425919},refuge:{top:16769162,side:16757642},goal:{top:13234431,side:16173215},fence:{top:16777215,side:16774374},rock:{top:10326968,side:9076904},roof:{top:9426314,side:9076904},stone:{top:12169423,side:9076904}},E_={styles:T_,sky:{top:8177919,horizon:16770033},fog:16180991,hemi:{sky:16774907,ground:12179967,intensity:1},sun:{color:16773853,intensity:1},clouds:{color:16777215,emissive:15985151},flowers:[16739226,16765503,16777215,11766015,16752451,5227519],decor:`bush`,decorColors:[6082419,8379530,5029738],air:`pollen`},D_=e=>({...T_,...e}),O_={meadow:E_,candy:{styles:D_({ground:{top:16757721,side:16769712},start:{top:16773242,side:16769712},goal:{top:13235967,side:16769712},bridge:{top:11891530,side:9065011},wall:{top:16757721,side:12120280},refuge:{top:16777215,side:16748472},platform:{top:10416335,side:16757721},fence:{top:16777215,side:16771316}}),sky:{top:13084415,horizon:16767471},fog:16770806,hemi:{sky:16773370,ground:16763368,intensity:1},sun:{color:16773366,intensity:1},clouds:{color:16773370,emissive:16767472},flowers:[16735400,16777215,8120575,16773242,11766015],decor:`candy`,drip:1.8,gloss:.7,decorColors:[16735370,8120575,16773242,11766015,8122266],air:`pollen`},snow:{styles:D_({ground:{top:16054527,side:12178672},start:{top:16770720,side:12178672},goal:{top:14283775,side:12178672},bridge:{top:13496063,side:10471914},wall:{top:16054527,side:10475775},refuge:{top:16777215,side:16752543},plank:{top:12158297,side:9397056},roof:{top:16054527,side:9076904}}),sky:{top:9225456,horizon:15660799},fog:15660287,hemi:{sky:15923455,ground:13230847,intensity:1.05},sun:{color:16775920,intensity:.9},clouds:{color:16777215,emissive:15266559},flowers:[16739179,16777215,8374527],decor:`pine`,drip:1.3,sparkle:1,decorColors:[4173428,5424266,3119718],air:`snow`},sunset:{styles:D_({ground:{top:11919482,side:15902329},start:{top:16764782,side:15902329},goal:{top:16769993,side:15902329},bridge:{top:16103818,side:14256732},wall:{top:11919482,side:13214463},platform:{top:16752568,side:11569919}}),sky:{top:8022752,horizon:16757370},fog:16766660,hemi:{sky:16768196,ground:12101375,intensity:.95},sun:{color:16759178,intensity:1},clouds:{color:16773352,emissive:16763832},flowers:[16743001,16765503,16739226,16777215],decor:`bush`,decorColors:[9226586,10933867,7649359],air:`pollen`},cave:{styles:D_({ground:{top:9423242,side:10129336},start:{top:16765806,side:10129336},goal:{top:13234431,side:10129336},bridge:{top:12169423,side:9076904},wall:{top:9423242,side:10326968}}),sky:{top:3024480,horizon:9072585},fog:7035550,hemi:{sky:14273791,ground:8022696,intensity:.85},sun:{color:15129855,intensity:.75},clouds:{color:13221872,emissive:7298984},flowers:[8189951,16747760,11992954],decor:`crystal`,decorColors:[8189951,16747760,11992954,16770667],air:`motes`},lava:{styles:D_({ground:{top:14727567,side:7228011},start:{top:16765806,side:7228011},goal:{top:13234431,side:7228011},bridge:{top:10127254,side:6179427},wall:{top:14727567,side:8215162},platform:{top:16757611,side:9067146},refuge:{top:16773340,side:16752506},fence:{top:16774374,side:16769732},rock:{top:8020600,side:6179427},roof:{top:9071226,side:6179427},stone:{top:10521752,side:7232112}}),sky:{top:2364462,horizon:12083274},fog:11033160,fogRange:[28,90],hemi:{sky:16767428,ground:16747088,intensity:.85},sun:{color:16763296,intensity:.68},clouds:{color:16751194,emissive:16738864},flowers:[16765503,16747610,16774374],decor:`crystal`,decorColors:[16757594,16743088,16770667,8189951],air:`embers`,floor:`lava`,vault:!0}};function k_(e){return O_[e??`meadow`]??E_}Object.keys(O_);var A_=new H,j_=new H,M_=new H;function N_(e){let t=(e.r*.3+e.g*.59+e.b*.11)*.82;return M_.setRGB(t*.97,t*.95,t*1.08)}var P_=new Set([`rock`,`roof`]),F_=[8189951,16747760,11992954,16770667],I_=new K(.22,12,8,0,Math.PI*2,0,Math.PI/2),L_=new G(.06,.08,.22,8),R_=qd(new li({color:16777215}),.8),z_=new q({color:15985919,roughness:.6}),B_=[16739226,16765503,6219432,16777215,11766015],V_=new aa(1,1,1),H_=new q({color:16777215,roughness:.85}),U_=new oa(.085,.45,2,6).translate(0,.31,0),W_=new G(.045,.045,1,6,1,!0).rotateZ(Math.PI/2),G_=new q({color:16777215,roughness:.6}),K_=1.1,q_=[.24,.47],J_=.62,Y_=.55,X_={start:.01,goal:.01,ground:0,fence:0},Z_=-.01,Q_=new K(.16,10,8),$_=new q({color:16777215,roughness:.5}),ev=new K(.55,10,8),tv=new Ko({color:16777215}),nv=new nn,rv=new H,iv=class{data;group=new V;solids=[];staticSolids=[];coins;bonuses=[];monsters=[];critters=[];checkpoints=[];moving=[];trampolines=[];buttons=[];gates=[];teleports=[];ziplines=[];portal=null;house=null;monsterDots;totalWins;start;bounds;openSolids=[];shellSolids=[];shellMat=np();disposables=[];boxViews=[];decor;theme;constructor(e,t){this.data=e,this.theme=k_(e.theme),tp.sparkle.value=this.theme.sparkle??0,tp.gloss.value=this.theme.gloss??0,this.start=new z(...e.start),this.buildBoxes(),this.buildDecor();for(let t of e.moving){let e=new mg(t);e.resetDelta(),this.moving.push(e),this.solids.push(e.solid),this.group.add(e.group)}for(let t of e.trampolines){let e=new hg(t);this.trampolines.push(e),this.solids.push(e.solid),this.staticSolids.push(e.solid),this.group.add(e.group)}this.coins=new lg(e.coins),this.group.add(this.coins.mesh),this.disposables.push(this.coins.mesh);for(let t of e.bonuses){let e=new ug(t);this.bonuses.push(e),this.group.add(e.group)}for(let n of e.monsters)this.addMonster(zf(n,t));this.totalWins=this.monsters.reduce((e,t)=>e+t.wins,0),this.monsterDots=new Hi(ev,tv,Math.max(1,this.totalWins)),this.monsterDots.count=0,this.monsterDots.frustumCulled=!1,this.group.add(this.monsterDots),this.disposables.push(this.monsterDots);for(let t of e.checkpoints){let n=new tg(t,e.cells[t.cell]);this.checkpoints.push(n),this.group.add(n.group)}for(let t of e.buttons){let e=new Qh(t);this.buttons.push(e),this.group.add(e.group)}for(let t of e.ziplines){let e=new zg(t);this.ziplines.push(e),this.group.add(e.group)}for(let t of e.teleports){let e=new Pg(t);this.teleports.push(e),this.group.add(e.group)}for(let t of e.gates){let e=new $h(t,this.theme.styles);this.gates.push(e),this.group.add(e.group)}e.house?(this.house=new ag(e.house),this.group.add(this.house.group),this.solids.push(this.house.solid),this.staticSolids.push(this.house.solid),this.openSolids.push(this.house.solid)):(this.portal=new Ag(e.goal.pos),this.group.add(this.portal.group),this.disposables.push(this.portal)),this.bounds=e.bounds,this.refreshGloom(!0)}buildBoxes(){let e=this.data.boxes;for(let t of e){let e={kind:`static`,minX:t.min[0],minY:t.min[1],minZ:t.min[2],maxX:t.max[0],maxY:t.max[1],maxZ:t.max[2]};this.solids.push(e),this.staticSolids.push(e),(P_.has(t.style)?this.shellSolids:this.openSolids).push(e)}this.softMeshes(e.filter(e=>!P_.has(e.style)&&e.style!==`fence`),rp),this.fences(e.filter(e=>e.style===`fence`));let t=e.filter(e=>P_.has(e.style));t.length&&(this.softMeshes(t,this.shellMat),this.disposables.push(this.shellMat))}refreshGloom(e=!1){let t=this.monsters.filter(e=>e.alive).map(e=>e.data),n=[];for(let r of this.boxViews)r.boxes.forEach((i,a)=>{let o=+!!Bg(i,t);r.target[a]===1&&o===0&&n.push(new z((i.min[0]+i.max[0])/2,i.max[1],(i.min[2]+i.max[2])/2)),r.target[a]=o,e&&(r.amount[a]=o)}),e&&this.paintBoxes(r);return n}paintBoxes(e){let t=Y.gloom;e.boxes.forEach((n,r)=>{let i=e.amount[r]*t.amount;e.draw(r,A_.copy(e.side[r]).lerp(N_(e.side[r]),i),j_.copy(e.top[r]).lerp(N_(e.top[r]),i),i)}),e.commit()}softMeshes(e,t){if(!e.length)return;let n=new ep(e,t,e=>X_[e]??Z_,this.theme.drip??1),r=new H(this.theme.styles.rock.side),i={side:new H,top:new H,pillow:new H},a={boxes:e,side:e.map(e=>new H(this.theme.styles[e.style].side)),top:e.map(e=>new H(this.theme.styles[e.style].top)),amount:new Float32Array(e.length),target:new Float32Array(e.length),draw:(e,t,a,o)=>{i.side.copy(t),i.top.copy(a),i.pillow.copy(i.side).lerp(A_.copy(r).lerp(N_(r),o),Y_),n.paint(e,i)},commit:()=>n.commit()};this.boxViews.push(a),this.group.add(n.mesh),this.disposables.push(n),this.addHolds(e)}fences(e){if(!e.length)return;let t=[],n=[];for(let r of e){let e=r.max[0]-r.min[0]>=r.max[2]-r.min[2],i=e?r.min[0]:r.min[2],a=e?r.max[0]-i:r.max[2]-i,o=(r.min[0]+r.max[0])/2,s=(r.min[2]+r.max[2])/2,c=Math.max(1,Math.round(a/K_)),l=Math.min(.1,a/2);for(let n=0;n<=c;n++){let u=i+l+(a-2*l)*n/c;t.push({pos:e?new z(u,r.min[1],s):new z(o,r.min[1],u),h:r.max[1]-r.min[1]})}let u=(r.max[1]-r.min[1])/J_;for(let t of q_)n.push({pos:new z(o,r.min[1]+t*u,s),len:a-2*l,alongX:e})}let r=this.theme.styles.fence,i=new nn,a=new Nt,o=new H,s=new Hi(U_,G_,t.length);t.forEach((e,t)=>{s.setMatrixAt(t,i.compose(e.pos,a,new z(1,e.h/J_,1))),s.setColorAt(t,o.set(r.top))});let c=new Hi(W_,G_,n.length),l=new Nt().setFromAxisAngle(new z(0,1,0),Math.PI/2);n.forEach((e,t)=>{c.setMatrixAt(t,i.compose(e.pos,e.alongX?a:l,new z(e.len,1,1))),c.setColorAt(t,o.set(r.side))}),s.castShadow=c.castShadow=!0,s.receiveShadow=c.receiveShadow=!0,this.group.add(s,c),this.disposables.push(s,c)}addHolds(e){let t=new nn,n=new Nt,r=new H,i=[],a=new Zm(this.data.seed+101);for(let t of e){if(t.style!==`wall`||!t.face)continue;let[e,n,r]=t.min,[o,s,c]=t.max,l=t.face===`N`||t.face===`S`,u=l?e:r,d=l?o:c,f=t.face===`N`?r-.02:t.face===`S`?c+.02:t.face===`W`?e-.02:o+.02;for(let e=Math.max(.6,n+.6);e<s-.4;e+=.75)for(let t=u+.5;t<d-.3;t+=.9){let n=t+a.range(-.2,.2),r=e+a.range(-.15,.15);i.push({pos:l?new z(n,r,f):new z(f,r,n),color:a.pick(B_),alongX:l})}}if(!i.length)return;let o=new Hi(Q_,$_,i.length);i.forEach((e,i)=>{t.compose(e.pos,n,e.alongX?new z(1,1,.5):new z(.5,1,1)),o.setMatrixAt(i,t),o.setColorAt(i,r.set(e.color))}),this.group.add(o),this.disposables.push(o)}buildDecor(){let e=new Zm(this.data.seed+778);this.decor=new C_(this.data,this.theme),this.group.add(this.decor.group),this.disposables.push(...this.decor.disposables);let t=new nn,n=new Nt,r=new H,i=[];for(let e of this.data.boxes){if(e.style!==`plank`||e.max[1]-e.min[1]<1.5)continue;let t=e.max[0]-e.min[0]>e.max[2]-e.min[2],r=t?e.max[0]-e.min[0]:e.max[2]-e.min[2],a=t?e.max[2]-e.min[2]:e.max[0]-e.min[0];for(let o=.25;o<r-.1;o+=.5){let r=t?e.min[0]+o:(e.min[0]+e.max[0])/2,s=t?(e.min[2]+e.max[2])/2:e.min[2]+o;i.push(new nn().compose(new z(r,e.max[1]+.005,s),n,t?new z(.06,.02,a):new z(a,.02,.06)))}}if(i.length){let e=new Hi(V_,H_,i.length);i.forEach((t,n)=>{e.setMatrixAt(n,t),e.setColorAt(n,r.set(8015656))}),this.group.add(e),this.disposables.push(e)}let a=[];for(let t of this.data.caves){let[n,r,i]=t.min,[o,,s]=t.max,c=Math.floor((o-n+s-i)*.35);for(let t=0;t<c;t++){let t=e.chance(.5),c=e.chance(.5),l=t?e.range(n+.3,o-.3):c?n+.25:o-.25,u=t?c?i+.25:s-.25:e.range(i+.3,s-.3);a.push({pos:new z(l,r,u),color:e.pick(F_),s:e.range(.7,1.3)})}}if(a.length){let e=new Hi(I_,R_,a.length),i=new Hi(L_,z_,a.length);a.forEach((a,o)=>{t.compose(a.pos.clone().setY(a.pos.y+.11*a.s),n,new z(a.s,a.s,a.s)),i.setMatrixAt(o,t),t.compose(a.pos.clone().setY(a.pos.y+.2*a.s),n,new z(a.s,a.s*.8,a.s)),e.setMatrixAt(o,t),e.setColorAt(o,r.set(a.color))}),this.group.add(e,i),this.disposables.push(e,i)}}stepPlatforms(e){for(let t of this.moving)t.setTime(e)}caveDepth(e){let t=0;for(let n of this.data.caves){if(e.y<n.min[1]-.5||e.y>n.max[1])continue;let r=Math.min(e.x-n.min[0],n.max[0]-e.x,e.z-n.min[2],n.max[2]-e.z);t=Math.max(t,Math.min(1,(r+.5)/1.5))}return t}hidesHero(e,t){let n=t.x-e.x,r=t.y+.3-e.y,i=t.z-e.z,a=Math.hypot(n,r,i);if(a<1e-6)return!1;for(let t of this.shellSolids)if(Od(e.x,e.y,e.z,n/a,r/a,i/a,t,a-.2)>=0)return!0;return!1}setCaveView(e){let t=this.shellMat;t.opacity=1-e*(1-Y.cave.seeThrough);let n=t.opacity<.999;n!==t.transparent&&(t.transparent=n,t.depthWrite=!n,t.needsUpdate=!0)}addMonster(e){this.monsters.push(e),this.group.add(e.group),e.extras&&this.group.add(e.extras)}addCritter(e){this.critters.push(e),this.group.add(e.group)}updateCritters(e,t){for(let n=this.critters.length-1;n>=0;n--){let r=this.critters[n];r.done?(r.group.removeFromParent(),this.critters.splice(n,1)):r.update(e,t,this.staticSolids)}}get winsLeft(){return this.monsters.reduce((e,t)=>e+t.winsLeft,0)}showMonsterDots(e){let t=this.monsterDots;(e.length!==0||t.count!==0)&&(e.forEach((e,n)=>{nv.makeScale(1,.8,1).setPosition(e.pos),t.setMatrixAt(n,nv),t.setColorAt(n,rv.setHex(e.color))}),t.count=e.length,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0))}openGate(e,t=!1){e.start(t),t&&this.solidify(e)}solidify(e){this.solids.push(...e.solids),this.staticSolids.push(...e.solids),this.openSolids.push(...e.solids)}update(e,t,n){Vg.time.value=t,n&&Vg.hero.value.copy(n),this.decor.update(t);let r=e/Y.gloom.fadeTime;for(let e of this.boxViews){let t=!1;for(let n=0;n<e.amount.length;n++){let i=e.amount[n],a=e.target[n];i!==a&&(e.amount[n]=a>i?Math.min(a,i+r):Math.max(a,i-r),t=!0)}t&&this.paintBoxes(e)}for(let e of this.bonuses)e.active&&e.update(t);for(let t of this.buttons)t.update(e);for(let t of this.gates)t.update(e)&&this.solidify(t);this.house?.update(e);for(let n of this.checkpoints)n.update(e,t);for(let t of this.trampolines)t.update(e);this.portal?.update(t)}dispose(){this.group.removeFromParent();for(let e of this.disposables)e.dispose();let e=new Set([V_,H_,rp,U_,W_,G_,Q_,$_,ev,tv,I_,L_,R_,z_,...v_,Ig,Lg,Rg,Df,Of,...Id(),...nf()]);this.group.traverse(t=>{if(t instanceof ni){t.material.dispose();return}let n=t;if(!n.isMesh||n instanceof Hi)return;e.has(n.geometry)||n.geometry.dispose();let r=Array.isArray(n.material)?n.material:[n.material];for(let t of r)e.has(t)||t.dispose()})}},av=class{zone=null;side=1;reset(){this.zone=null}update(e,t){let n=this.tunnel(e,t);if(n?.core)return n.view;let r=null;for(let n of e){if(n.kind!==`cave`)continue;let e=ov(n,t);e>0&&(!r||e>r.w)&&(r={zone:n,w:e,yaw:0})}return r?(this.zone=null,r):n?.view??null}tunnel(e,t){let n=(e,t,n)=>({view:{zone:e,w:t.w,yaw:sv(e,n)},core:t.core}),r=this.zone?cv(this.zone,this.side,t):null;if(this.zone&&r&&r.w>0&&!r.trailing)return n(this.zone,r,this.side);let i=null;for(let n of e){if(!n.axis||n===this.zone)continue;let e=n.axis===`z`?1:t.x<(n.min[0]+n.max[0])/2?-1:1,r=cv(n,e,t);r.w<=0||(!i||i.d.trailing&&!r.trailing||i.d.trailing===r.trailing&&r.w>i.d.w)&&(i={zone:n,d:r,side:e})}return this.zone&&r&&r.w>0&&(!i||i.d.trailing)?n(this.zone,r,this.side):(this.zone=i?.zone??null,i?(this.side=i.side,n(i.zone,i.d,i.side)):null)}};function ov(e,t){if(t.y<e.min[1]-.5||t.y>e.max[1])return 0;let n=Math.max(e.min[0]-t.x,t.x-e.max[0],e.min[2]-t.z,t.z-e.max[2],0);return Math.max(0,1-n/Y.cave.wall)}function sv(e,t){return e.axis===`x`?t*Math.PI/2:0}function cv(e,t,n){if(n.y<e.min[1]-.5||n.y>e.max[1])return{w:0,trailing:!1,core:!1};let r=Y.cave.camera,i=e.axis===`x`?0:2,a=e.axis===`x`?2:0,o=(e.axis===`x`?n.x:n.z)-(e.min[i]+e.max[i])/2,s=(e.axis===`x`?n.z:n.x)-(e.min[a]+e.max[a])/2,c=(e.max[i]-e.min[i])/2,l=(e.max[a]-e.min[a])/2,u=c+r.enter-t*o,d=c+((e.axis===`z`?Math.max(r.distance,Y.camera.offset.z):r.distance)+r.ramp)+t*o,f=Math.min(u,d)/r.ramp,p=(l+r.edge-Math.abs(s))/(2*r.edge),m=Math.max(0,Math.min(1,f,p));return{w:m,trailing:t*o<-c,core:m>0&&Math.abs(o)<=c&&Math.abs(s)<=l}}var lv=9,uv=6,dv=.55;function fv(e,t){let n=e.index?e.toNonIndexed():e;for(let e of Object.keys(n.attributes))e!==`position`&&e!==`normal`&&n.deleteAttribute(e);return n.setAttribute(`part`,new vr(new Float32Array(n.getAttribute(`position`).count).fill(t),1)),n}var pv=md([fv(new G(1,.94,.32,18),0),fv(new ca(.93,1.7,14).rotateX(Math.PI).translate(0,-1.01,0),1),fv(new Oo(.24,1).translate(.35,.36,-.1),2),fv(new Oo(.19,1).translate(-.3,.3,.25),2),fv(new Oo(.16,1).translate(.05,.28,.4),2)]);pv.setAttribute(`color`,new vr(new Float32Array(pv.getAttribute(`position`).count*3),3));var mv=new Mr;mv.setAttribute(`position`,new U([0,0,.12,-.75,.05,-.05,0,0,-.16,0,0,.12,0,0,-.16,.75,.05,-.05],3));var hv=class{group=new V;islands;birds;birdMat;time={value:0};m=new nn;q=new Nt;v=new z;s=new z;up=new z(0,1,0);constructor(){this.islands=new Hi(pv,new li({vertexColors:!0,fog:!1}),lv);for(let e=0;e<lv;e++){let t=e/lv*Math.PI*2+Math.sin(e*7.1)*.25,n=170+e*53%5*12,r=7+e*31%7*1.4;this.q.setFromAxisAngle(this.up,e*1.3),this.m.compose(this.v.set(Math.cos(t)*n,-6+e*17%6*5,Math.sin(t)*n),this.q,this.s.set(r,r*.9,r)),this.islands.setMatrixAt(e,this.m)}this.islands.frustumCulled=!1,this.birdMat=new li({color:6052474,side:2,fog:!1}),this.birdMat.onBeforeCompile=e=>{e.uniforms.time=this.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float time;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float phase = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
transformed.y += abs(transformed.x) * sin(time * 9.0 + phase) * 0.7;`)},this.birds=new Hi(mv,this.birdMat,uv),this.birds.frustumCulled=!1,this.group.add(this.islands,this.birds)}setTheme(e){this.group.visible=!e.vault,this.birds.visible=e.decor!==`crystal`;let t=new H(e.fog),n=[new H(e.styles.ground.top),new H(e.styles.rock.side),new H(e.decorColors[0])],r=pv.getAttribute(`part`),i=pv.getAttribute(`normal`),a=pv.getAttribute(`color`),o=new H;for(let e=0;e<r.count;e++){let s=.75+.3*i.getY(e);o.copy(n[r.getX(e)]).multiplyScalar(s).lerp(t,dv),a.setXYZ(e,o.r,o.g,o.b)}a.needsUpdate=!0,this.birdMat.color.set(4868200).lerp(t,.35)}update(e,t){if(this.group.visible&&(this.time.value=e,this.islands.position.set(t.x,0,t.z),this.islands.position.y=Math.sin(e*.2)*1.2,this.birds.visible)){for(let n=0;n<uv;n++){let r=38+n%3*9,i=e*(.09+n%2*.02)+n*.45,a=t.x+Math.cos(i)*r,o=t.z+Math.sin(i)*r,s=t.y+16+n%3*2.5+Math.sin(e*.7+n)*.8;this.q.setFromAxisAngle(this.up,-i),this.m.compose(this.v.set(a,s,o),this.q,this.s.setScalar(1.6)),this.birds.setMatrixAt(n,this.m)}this.birds.instanceMatrix.needsUpdate=!0}}},gv=new H(8177919),_v=new H(16770033),vv=260,yv={x:44,y:16,z:44},bv=16180991,xv=40,Sv=110,Cv=-5.2,wv=75,Tv=-4.5,Ev=26,Dv=10,Ov=1.4,kv=2.2,Av=new H(12036351),jv=new H(16774907);function Mv(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,0.8)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),new ta(e)}function Nv(e,t,n){let r=Math.imul(e,668265261)^Math.imul(t,374761393)^Math.imul(n+1,2654435769);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),((r^r>>>16)>>>0)/4294967296}var Pv=class{scene;lowPower;sun;hemi;skyMat;puffMat;theme=O_.meadow;daySky=jv.clone();air;airMat;airPhase=new Float32Array(vv);airBase=new Float32Array(vv*3);clouds=new V;cloudChunks=[];cloudMat;cloudMatLit;shadowFrustum=new Ki;chunkSphere=new wr;shadowMatrix=new nn;cloudStepX=3;cloudStepZ=2.8;cloudCols=0;cloudRows=0;cloudGX=NaN;cloudGZ=NaN;skyClouds=new V;dummy=new An;cloudScale=1;wide=!1;cloudBase;lava;lavaMat;bubbles;bubbleLife=[];stalactites;stalCols=0;stalGX=NaN;stalGZ=NaN;fogNear=xv;fogFar=Sv;fogExtra=0;lastTime=NaN;distance=new hv;cloudTime={value:0};onBubble=null;constructor(e,t=!1){this.scene=e,this.lowPower=t,e.background=new H(bv),e.fog=new Rn(bv,xv,Sv);let n=new W(new K(300,32,16),this.skyMat=new Wo({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:gv.clone()},horizon:{value:_v.clone()},sunDir:{value:new z(...Y.look.sunDir).normalize()},sunColor:{value:new H(16773853)},sunAmount:{value:1}},vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            gl_Position = p.xyww;
          }
        `,fragmentShader:`
          varying vec3 vDir;
          uniform vec3 top;
          uniform vec3 horizon;
          uniform vec3 sunDir;
          uniform vec3 sunColor;
          uniform float sunAmount;
          void main() {
            vec3 d = normalize(vDir);
            float h = clamp(d.y * 1.6 + 0.15, 0.0, 1.0);
            vec3 c = mix(horizon, top, pow(h, 0.8));
            // Мягкое солнце: светлое пятно с широким тёплым ореолом и дымка у горизонта.
            float s = max(dot(d, sunDir), 0.0);
            float disc = smoothstep(${Y.look.sunDisc.toFixed(5)}, ${(Y.look.sunDisc+8e-4).toFixed(5)}, s);
            float halo = pow(s, ${Y.look.sunHalo.toFixed(1)}) * 0.22 + pow(s, 64.0) * 0.3;
            c = mix(c, sunColor, clamp(halo * sunAmount, 0.0, 1.0));
            c = mix(c, vec3(1.0, 0.99, 0.95), disc * sunAmount);
            c += (1.0 - smoothstep(0.0, 0.22, abs(d.y))) * 0.03 * sunAmount;
            // Альфа — маска свечения для постобработки (ADR-0048): светится солнце.
            gl_FragColor = vec4(c, 1.0 - disc * sunAmount * 0.35);
          }
        `}));n.renderOrder=-1,n.frustumCulled=!1,n.name=`sky`,e.add(n),this.hemi=new hs(16774907,12179967,Ov),e.add(this.hemi),this.sun=new As(16773853,kv),this.sun.castShadow=!0,this.sun.shadow.mapSize.setScalar(t?1024:2048);let r=this.sun.shadow.camera;r.left=-18,r.right=18,r.top=18,r.bottom=-18,r.near=1,r.far=60,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.02,this.sun.shadow.radius=4,e.add(this.sun,this.sun.target);let i=new K(1,14,10),a=this.puffMat=Jd(new Ko({color:16777215,emissive:16774395,emissiveIntensity:.75,fog:!1}));for(let e=0;e<14;e++){let t=new V,n=3+e%3;for(let e=0;e<n;e++){let r=new W(i,a);r.position.set(e*2.2-n,Math.sin(e*1.7)*.6,Math.cos(e)*.8),r.scale.setScalar(1.6+e*7%3*.5),t.add(r)}let r=e/14*Math.PI*2;t.position.set(Math.cos(r)*120,25+e%4*9,Math.sin(r)*120),t.lookAt(0,t.position.y,0),this.skyClouds.add(t)}e.add(this.skyClouds),e.add(this.distance.group),this.buildCloudFloor(),this.cloudBase=new W(new Ao(150,150).rotateX(-Math.PI/2),Jd(new Ko({color:16777215,emissive:15985151,emissiveIntensity:.35}))),this.cloudBase.visible=!1,e.add(this.cloudBase),this.lavaMat=new Wo({fog:!0,uniforms:Vo.merge([J.fog,{time:{value:0},hot:{value:new H(16769658)},warm:{value:new H(16742970)},crust:{value:new H(14174330)}}]),vertexShader:`
        #include <fog_pars_vertex>
        varying vec2 vXZ;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vXZ = world.xz;
          vec4 mvPosition = viewMatrix * world;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }
      `,fragmentShader:`
        #include <fog_pars_fragment>
        uniform float time;
        uniform vec3 hot;
        uniform vec3 warm;
        uniform vec3 crust;
        varying vec2 vXZ;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
        }
        void main() {
          vec2 p = vXZ * 0.12;
          float n = noise(p + vec2(time * 0.05, time * 0.03)) * 0.65 + noise(p * 2.3 - vec2(time * 0.04, -time * 0.06)) * 0.35;
          float pulse = 0.85 + 0.15 * sin(time * 1.3 + n * 6.0);
          vec3 c = mix(warm, hot, smoothstep(0.45, 0.8, n) * pulse);
          // Розовые «корочки» плывут по лаве — не чёрные, чтобы не было страшно.
          c = mix(crust, c, smoothstep(0.24, 0.34, n));
          // Чуть приглушена (ADR-0051): на телефоне лава слепила.
          c *= ${Y.look.lavaBrightness.toFixed(2)};
          // Альфа — маска свечения (ADR-0048): светятся горячие места.
          gl_FragColor = vec4(c, 1.0 - 0.15 * smoothstep(0.55, 0.9, n) * pulse);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }
      `}),this.lava=new W(new Ao(150,150).rotateX(-Math.PI/2),this.lavaMat),this.lava.frustumCulled=!1,this.lava.visible=!1,e.add(this.lava);let o=t?12:24;this.bubbles=new Hi(new K(1,12,6,0,Math.PI*2,0,Math.PI/2),new Ko({color:16760944,emissive:16747072,emissiveIntensity:.6}),o),this.bubbles.frustumCulled=!1,this.bubbles.visible=!1;for(let e=0;e<o;e++)this.bubbleLife.push({x:0,z:0,t:Math.random(),period:2+Math.random()*2,size:0});e.add(this.bubbles),this.stalCols=Math.ceil(110/Dv),this.stalactites=new Hi(new ca(1,1,6).rotateX(Math.PI).translate(0,-.5,0),new Ko({color:4862032,flatShading:!0}),this.stalCols*this.stalCols),this.stalactites.frustumCulled=!1,this.stalactites.visible=!1,e.add(this.stalactites);let s=new Float32Array(vv*3);for(let e=0;e<vv;e++)s[e*3]=(Math.random()-.5)*yv.x,s[e*3+1]=Math.random()*yv.y-3,s[e*3+2]=(Math.random()-.5)*yv.z,this.airPhase[e]=Math.random()*Math.PI*2;let c=new Mr;this.airBase.set(s),c.setAttribute(`position`,new vr(s,3)),this.airMat=new qi({size:.22,map:Mv(),transparent:!0,depthWrite:!1,color:16777215}),this.air=new Qi(c,this.airMat),this.air.frustumCulled=!1,this.air.visible=!1,e.add(this.air)}buildCloudFloor(){let e=this.lowPower?1.5:1;this.cloudStepX=3*e,this.cloudStepZ=2.8*e,this.cloudCols=Math.ceil(150/this.cloudStepX),this.cloudRows=Math.ceil(150/this.cloudStepZ);let t=this.cloudMat=Jd(new Ko({color:16777215,emissive:15985151,emissiveIntensity:.35}));t.onBeforeCompile=e=>{e.uniforms.time=this.cloudTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float time;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float cloudPhase = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
transformed.y += sin(time * 0.45 + cloudPhase) * 0.18;
transformed *= 1.0 + sin(time * 0.3 + cloudPhase * 1.7) * 0.04;`)},this.cloudMatLit=Jd(t.clone()),this.cloudMatLit.onBeforeCompile=t.onBeforeCompile;let n=new Oo(1,1);n.setAttribute(`normal`,n.getAttribute(`position`).clone());let r=Y.look.cloudChunk;for(let e=0;e<this.cloudRows;e+=r)for(let i=0;i<this.cloudCols;i+=r){let a=Math.min(r,this.cloudCols-i),o=Math.min(r,this.cloudRows-e),s=new Hi(n,t,a*o);s.receiveShadow=!0,this.cloudChunks.push({mesh:s,c0:i,r0:e,cols:a,rows:o}),this.clouds.add(s)}this.scene.add(this.clouds)}placeClouds(e){let t=Math.floor(e.x/this.cloudStepX)-(this.cloudCols>>1),n=Math.floor(e.z/this.cloudStepZ)-(this.cloudRows>>1);if(t===this.cloudGX&&n===this.cloudGZ)return;this.cloudGX=t,this.cloudGZ=n;let r=this.lowPower?1.5:1,i=this.dummy;for(let e of this.cloudChunks){let a=0;for(let o=e.r0;o<e.r0+e.rows;o++)for(let s=e.c0;s<e.c0+e.cols;s++){let c=t+s,l=n+o,u=(1.7+Nv(c,l,3)*1.4)*r;i.position.set(c*this.cloudStepX+(Nv(c,l,0)-.5)*2,Cv+Nv(c,l,1)*.9,l*this.cloudStepZ+(Nv(c,l,2)-.5)*2),i.scale.set(u,u*.55,u),i.updateMatrix(),e.mesh.setMatrixAt(a++,i.matrix)}e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.computeBoundingSphere(),e.mesh.boundingSphere.radius+=.5*r}}shadeCloudChunks(){let e=this.sun.shadow.camera;this.shadowFrustum.setFromProjectionMatrix(this.shadowMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),this.clouds.updateMatrixWorld();for(let{mesh:e}of this.cloudChunks){let t=this.chunkSphere.copy(e.boundingSphere).applyMatrix4(e.matrixWorld),n=this.shadowFrustum.intersectsSphere(t);e.receiveShadow=n,e.material=n?this.cloudMat:this.cloudMatLit}}widen(e,t){this.fogExtra=e;let n=this.scene.fog;n.near=this.fogNear+e,n.far=this.fogFar+e,this.cloudScale=Math.max(1,t/wv),this.wide=t>0}setTheme(e){this.theme=e,this.skyMat.uniforms.top.value.setHex(e.sky.top),this.skyMat.uniforms.horizon.value.setHex(e.sky.horizon),this.scene.background.setHex(e.fog),this.scene.fog.color.setHex(e.fog),this.daySky.setHex(e.hemi.sky),this.hemi.groundColor.setHex(e.hemi.ground),this.sun.color.setHex(e.sun.color),this.skyMat.uniforms.sunColor.value.setHex(e.sun.color),this.skyMat.uniforms.sunAmount.value=e.vault?0:e.sun.intensity;for(let t of[this.cloudMat,this.cloudMatLit,this.cloudBase.material])t.color.setHex(e.clouds.color),t.emissive.setHex(e.clouds.emissive);this.puffMat.color.setHex(e.clouds.color),this.puffMat.emissive.setHex(e.clouds.emissive);let t=e.floor===`lava`;this.clouds.visible=!t,this.lava.visible=this.bubbles.visible=t,this.skyClouds.visible=!e.vault,this.stalactites.visible=!!e.vault,[this.fogNear,this.fogFar]=e.fogRange??[xv,Sv],this.widen(this.fogExtra,this.wide?wv*this.cloudScale:0),this.distance.setTheme(e),this.air.visible=e.air!==null,e.air===`snow`?(this.airMat.size=.22,this.airMat.color.setHex(16777215),this.airMat.blending=1):e.air===`motes`?(this.airMat.size=.16,this.airMat.color.setHex(13236223),this.airMat.blending=2):e.air===`pollen`?(this.airMat.size=.12,this.airMat.color.setHex(16773816),this.airMat.blending=1):e.air===`embers`&&(this.airMat.size=.14,this.airMat.color.setHex(16757594),this.airMat.blending=2),this.airMat.needsUpdate=!0,this.setCave(0)}setCave(e){let t=1-e*(1-Y.cave.light);this.hemi.intensity=Ov*t*this.theme.hemi.intensity,this.sun.intensity=kv*t*this.theme.sun.intensity,this.hemi.color.lerpColors(this.daySky,Av,e)}updateAir(e){let t=this.air.geometry.getAttribute(`position`),n=t.array,r=this.airBase,i=this.theme.air===`snow`,a=this.theme.air===`embers`?.9:this.theme.air===`pollen`?.12:.35,o=1/60,s=(e,t)=>((e+t/2)%t+t)%t-t/2;for(let t=0;t<vv;t++){let c=this.airPhase[t]+=o*(i?1.3:.6);r[t*3]+=Math.sin(c)*o*(i?.6:.3),r[t*3+1]+=o*(i?-1.4:a),r[t*3+2]+=Math.cos(c*.7)*o*.3,n[t*3]=e.x+s(r[t*3]-e.x,yv.x),n[t*3+1]=e.y+4+s(r[t*3+1]-e.y,yv.y),n[t*3+2]=e.z+s(r[t*3+2]-e.z,yv.z)}t.needsUpdate=!0}updateBubbles(e,t){let n=this.dummy;this.bubbleLife.forEach((r,i)=>{if(r.t+=e/r.period,r.t>=1){r.size>0&&this.onBubble?.(r.x,r.z);let e=Math.random()*Math.PI*2,n=3+Math.random()*22;r.x=t.x+Math.cos(e)*n,r.z=t.z+Math.sin(e)*n,r.t=0,r.period=2+Math.random()*2,r.size=.3+Math.random()*.45}let a=r.size*Math.sin(Math.min(1,r.t*1.15)*Math.PI*.5)*(r.t>.87?0:1);n.position.set(r.x,Tv,r.z),n.scale.set(a,a*.8,a),n.updateMatrix(),this.bubbles.setMatrixAt(i,n.matrix)}),this.bubbles.instanceMatrix.needsUpdate=!0}placeStalactites(e){let t=Dv,n=Math.floor(e.x/t)-(this.stalCols>>1),r=Math.floor(e.z/t)-(this.stalCols>>1);if(n===this.stalGX&&r===this.stalGZ)return;this.stalGX=n,this.stalGZ=r;let i=this.dummy,a=0;for(let e=0;e<this.stalCols;e++)for(let o=0;o<this.stalCols;o++){let s=n+o,c=r+e,l=Nv(s,c,7)<.6,u=3+Nv(s,c,8)*6,d=.8+Nv(s,c,9)*1.2;i.position.set(s*t+(Nv(s,c,10)-.5)*t*.8,Ev+Nv(s,c,11)*4,c*t+(Nv(s,c,12)-.5)*t*.8),i.scale.set(l?d:0,l?u:0,l?d:0),i.updateMatrix(),this.stalactites.setMatrixAt(a++,i.matrix)}this.stalactites.instanceMatrix.needsUpdate=!0}update(e,t,n){let r=Number.isFinite(this.lastTime)?Math.min(.1,Math.max(0,e-this.lastTime)):0;this.lastTime=e,this.scene.getObjectByName(`sky`)?.position.copy(n.position),this.sun.position.set(t.x+5,t.y+20,t.z+6),this.sun.target.position.copy(t),this.placeClouds(t);let i=this.cloudScale,a=1+(i-1)*.3;this.clouds.scale.set(i,a,i),this.clouds.position.set(t.x*(1-i),Cv*(1-a),t.z*(1-i)),this.clouds.visible&&this.shadeCloudChunks(),this.cloudBase.visible=this.wide&&this.clouds.visible,this.wide&&(this.cloudBase.position.set(t.x,-5.6000000000000005,t.z),this.cloudBase.scale.set(i,1,i)),this.lava.visible&&(this.lavaMat.uniforms.time.value=e,this.lava.position.set(t.x,Tv,t.z),this.lava.scale.set(i,1,i),this.updateBubbles(r,t)),this.theme.vault&&(this.placeStalactites(t),this.stalactites.visible=!this.wide&&n.position.y<22),this.skyClouds.position.set(t.x,0,t.z),this.cloudTime.value=e,this.distance.update(e,t),this.air.visible&&this.updateAir(t),this.skyClouds.rotation.y=e*.004}},Fv=210,Iv=12;function Lv(e){return`#`+e.toString(16).padStart(6,`0`)}function Rv(e,t){return`rgb(${Math.min(255,Math.round((e>>16&255)*t))},${Math.min(255,Math.round((e>>8&255)*t))},${Math.min(255,Math.round((e&255)*t))})`}var zv=class{canvas;ctx;base=document.createElement(`canvas`);dpr=Math.min(3,(window.devicePixelRatio||1)*1.6);scale=1;ox=0;oz=0;level=null;adj=[];currentCell=0;openBoxes=[];constructor(e){this.canvas=document.createElement(`canvas`),this.canvas.className=`minimap`,this.canvas.width=this.base.width=Fv*this.dpr,this.canvas.height=this.base.height=Fv*this.dpr,e.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`),this.canvas.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.canvas.classList.toggle(`big`)})}mx(e){return(e-this.ox)*this.scale+Iv}mz(e){return(e-this.oz)*this.scale+Iv}setLevel(e){this.level=e;let t=e.bounds,n=t.maxX-t.minX,r=t.maxZ-t.minZ;this.scale=186/Math.max(n,r),this.ox=t.minX-(Math.max(n,r)-n)/2,this.oz=t.minZ-(Math.max(n,r)-r)/2,this.currentCell=0,this.openBoxes=[],this.adj=e.cells.map(()=>[]);for(let t of e.links)t.gate||this.link(t);this.drawBase()}link(e){this.adj[e.from].push({to:e.to,link:e}),e.oneWay||this.adj[e.to].push({to:e.from,link:e})}openGate(e){this.openBoxes.push(...e.boxes),this.link(this.level.links[e.link]),this.drawBase()}drawBase(){let e=this.level,t=this.base.getContext(`2d`);t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,Fv,Fv),t.fillStyle=`#eef3ff`,Bv(t,0,0,Fv,Fv,22),t.fill(),t.strokeStyle=`#8fd3ff`,t.lineWidth=3,t.setLineDash([4,4]);for(let n of e.moving)t.beginPath(),t.moveTo(this.mx(n.from[0]),this.mz(n.from[2])),t.lineTo(this.mx(n.to[0]),this.mz(n.to[2])),t.stroke();t.setLineDash([]);let n=[...e.boxes,...this.openBoxes].sort((e,t)=>e.max[1]-t.max[1]);for(let r of n){let n=this.mx(r.min[0]),i=this.mz(r.min[2]),a=(r.max[0]-r.min[0])*this.scale,o=(r.max[2]-r.min[2])*this.scale,s=r.max[1];t.fillStyle=`rgba(80, 60, 120, 0.18)`,t.fillRect(n+1+s*.25,i+1+s*.25,a,o),t.fillStyle=Rv(k_(e.theme).styles[r.style].top,.9+Math.min(.35,s*.04)),t.globalAlpha=r.style===`roof`?.4:1,t.fillRect(n,i,a,o),t.globalAlpha=1}t.strokeStyle=`#8a5a2b`,t.lineWidth=2.5;for(let n of e.ziplines)t.beginPath(),t.moveTo(this.mx(n.a[0]),this.mz(n.a[2])),t.lineTo(this.mx(n.b[0]),this.mz(n.b[2])),t.stroke();for(let n of e.teleports)for(let e of[n.a,n.b])t.fillStyle=Lv(n.color),t.strokeStyle=`#fff`,t.lineWidth=2,t.beginPath(),t.arc(this.mx(e[0]),this.mz(e[2]),4.5,0,Math.PI*2),t.fill(),t.stroke();for(let n of e.trampolines)t.fillStyle=`#4fc3ff`,t.strokeStyle=`#ff5c8a`,t.lineWidth=2,t.beginPath(),t.arc(this.mx(n.pos[0]),this.mz(n.pos[2]),Math.max(3,n.radius*this.scale),0,Math.PI*2),t.fill(),t.stroke()}cellAt(e,t){return this.level.cells.findIndex(n=>e>n.minX-.5&&e<n.maxX+.5&&t>n.minZ-.5&&t<n.maxZ+.5)}via(e,t){if(e.type===`zip`){let t=this.level.ziplines.find(t=>this.cellAt(t.a[0],t.a[2])===e.from&&this.cellAt(t.b[0],t.b[2])===e.to);return t?[[t.a[0],t.a[2]],[t.b[0],t.b[2]]]:[this.linkMid(e)]}if(e.type!==`teleport`)return[this.linkMid(e)];let n=this.level.teleports.find(t=>this.cellAt(t.a[0],t.a[2])===e.from&&this.cellAt(t.b[0],t.b[2])===e.to);if(!n)return[this.linkMid(e)];let r=[[n.a[0],n.a[2]],[n.b[0],n.b[2]]];return t===e.from?r:r.reverse()}linkMid(e){let t=this.level.cells[e.from],n=this.level.cells[e.to],r=(t.minZ+t.maxZ)/2,i=(t.minX+t.maxX)/2;switch(e.dir){case`E`:return[(t.maxX+n.minX)/2,r];case`W`:return[(t.minX+n.maxX)/2,r];case`S`:return[i,(t.maxZ+n.minZ)/2];default:return[i,(t.minZ+n.maxZ)/2]}}hops(e){let t=this.adj.map(()=>1/0);t[e]=0;let n=[e];for(;n.length;){let e=n.shift();for(let{to:r}of this.adj[e])t[r]===1/0&&(t[r]=t[e]+1,n.push(r))}return t}nearest(e,t){let n=this.hops(this.currentCell),r=null,i=1/0;for(let a of e){let e=this.cellAt(a.x,a.z);if(e<0||n[e]===1/0)continue;let o=n[e]*1e3+Math.hypot(a.x-t.player.x,a.z-t.player.z);o<i&&(i=o,r={x:a.x,z:a.z,cell:e})}return r}route(e,t){let n=new Map,r=[e],i=new Set([e]);for(;r.length;){let e=r.shift();if(e===t)break;for(let{to:t,link:a}of this.adj[e])i.has(t)||(i.add(t),n.set(t,{cell:e,link:a}),r.push(t))}let a=[];for(let r=t;r!==e;){let e=n.get(r);if(!e)break;a.unshift({link:e.link,from:e.cell}),r=e.cell}return a}update(e,t){let n=this.level;if(!n)return;let r=this.ctx;r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,this.canvas.width,this.canvas.height),r.drawImage(this.base,0,0),r.setTransform(this.dpr,0,0,this.dpr,0,0);let{player:i}=e,a=this.cellAt(i.x,i.z);a>=0&&(this.currentCell=a);let o=n.goal,s=!e.goalOpen&&(this.nearest(e.monsters,e)??this.nearest(e.buttons,e))||{x:o.pos[0],z:o.pos[2],cell:o.cell},c=[[i.x,i.z]];for(let{link:e,from:t}of this.route(this.currentCell,s.cell))c.push(...this.via(e,t));c.push([s.x,s.z]),r.lineCap=`round`,r.lineJoin=`round`,r.beginPath(),c.forEach(([e,t],n)=>n?r.lineTo(this.mx(e),this.mz(t)):r.moveTo(this.mx(e),this.mz(t))),r.strokeStyle=`rgba(90, 60, 140, 0.45)`,r.lineWidth=6,r.setLineDash([]),r.stroke(),r.strokeStyle=`#ffffff`,r.lineWidth=3,r.setLineDash([6,6]),r.lineDashOffset=-t*20,r.stroke(),r.setLineDash([]);for(let t of e.monsters)r.fillStyle=`#b388ff`,r.beginPath(),r.arc(this.mx(t.x),this.mz(t.z),3.5,0,Math.PI*2),r.fill();for(let t of e.bonuses)r.fillStyle=Lv(ip[t.type]),r.strokeStyle=`#fff`,r.lineWidth=2,r.beginPath(),r.arc(this.mx(t.x),this.mz(t.z),4.5,0,Math.PI*2),r.fill(),r.stroke();for(let t of e.buttons)r.fillStyle=`#ff5c5c`,r.strokeStyle=`#fff`,r.lineWidth=2,r.beginPath(),r.arc(this.mx(t.x),this.mz(t.z),4,0,Math.PI*2),r.fill(),r.stroke();for(let t of e.checkpoints)this.flag(this.mx(t.x),this.mz(t.z),t.active?`#ff5c8a`:`#bfc3cc`,.8);let l=this.mx(o.pos[0]),u=this.mz(o.pos[2]);if(e.goalOpen){let e=9+Math.sin(t*4)*3;r.fillStyle=`rgba(95, 216, 255, 0.45)`,r.beginPath(),r.arc(l,u,e,0,Math.PI*2),r.fill()}this.flag(l,u,e.goalOpen?`magic`:`#bfc3cc`,1.3);let d=this.mx(i.x),f=this.mz(i.z);r.save(),r.translate(d,f),r.rotate(-i.yaw+Math.PI),r.fillStyle=`#ff5c8a`,r.beginPath(),r.moveTo(0,-11),r.lineTo(5,-5),r.lineTo(-5,-5),r.closePath(),r.fill(),r.restore(),r.fillStyle=`#ff8fab`,r.strokeStyle=`#fff`,r.lineWidth=2.5,r.beginPath(),r.arc(d,f,6,0,Math.PI*2),r.fill(),r.stroke()}flag(e,t,n,r){let i=this.ctx;i.strokeStyle=`#6a5a85`,i.lineWidth=1.5*r,i.beginPath(),i.moveTo(e,t),i.lineTo(e,t-13*r),i.stroke(),n===`magic`?[`#1f8fff`,`#4fc3ff`,`#ffffff`,`#4fc3ff`,`#1f8fff`].forEach((n,a)=>{i.fillStyle=n,i.fillRect(e,t-13*r+a*1.6*r,10*r,1.6*r)}):(i.fillStyle=n,i.beginPath(),i.moveTo(e,t-13*r),i.lineTo(e+9*r,t-10*r),i.lineTo(e,t-7*r),i.closePath(),i.fill())}};function Bv(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}var Vv=class{root;pauseButton;map;coinBox;coinCount;monsterBox;monsterCount;monstersKilled=-1;bonusBar;slots=new Map;shown=-1;constructor(e){this.root=document.createElement(`div`),this.root.className=`hud hidden`,this.root.innerHTML=`
      <div class="coins"><div class="coin-icon"></div><span>0</span></div>
      <div class="monsters"><div class="monster-icon"></div><span>0/0</span></div>
      <div class="bonus-bar"></div>
      <button class="pause-btn" data-t-aria="aria.pause">❚❚</button>
    `,e.appendChild(this.root),this.coinBox=this.root.querySelector(`.coins`),this.coinCount=this.root.querySelector(`.coins span`),this.monsterBox=this.root.querySelector(`.monsters`),this.monsterCount=this.root.querySelector(`.monsters span`),this.bonusBar=this.root.querySelector(`.bonus-bar`),this.pauseButton=this.root.querySelector(`.pause-btn`),this.map=new zv(this.root)}show(e){this.root.classList.toggle(`hidden`,!e)}setCoins(e,t=null){e!==this.shown&&(this.coinCount.textContent=String(e)),this.shown=e,t&&(this.coinBox.classList.remove(`pop`,`lose`),this.coinBox.offsetWidth,this.coinBox.classList.add(t))}setMonsters(e,t){this.monsterCount.textContent=`${e}/${t}`,this.monsterBox.classList.toggle(`done`,t>0&&e>=t),this.monstersKilled>=0&&e>this.monstersKilled&&(this.monsterBox.classList.remove(`pop`),this.monsterBox.offsetWidth,this.monsterBox.classList.add(`pop`)),this.monstersKilled=e}setBonuses(e,t){let n=new Set(e.map(([e])=>e));for(let[e,t]of this.slots)n.has(e)||(t.remove(),this.slots.delete(e));for(let[n,r]of e){let e=this.slots.get(n);e||(e=document.createElement(`div`),e.className=`bonus-slot`,e.innerHTML=`<span>${ap[n]}</span>`,e.style.setProperty(`--c`,`#`+ip[n].toString(16).padStart(6,`0`)),this.bonusBar.appendChild(e),this.slots.set(n,e)),e.style.setProperty(`--p`,String(Math.round(Math.min(1,r/t)*100)))}}},Hv=[`ru`,`en`],Uv={ru:{"game.title":`Прыгунчик`,"meta.title":`Прыгунчик · Jumpy — добрая 3D-игра для детей без рекламы`,"aria.about":`Об игре`,"aria.play":`Играть`,"aria.pause":`Пауза`,"aria.close":`Выйти`,"aria.house":`Домик`,"aria.story":`Сказка`,"pause.title":`Пауза`,"pause.forParent":`(для родителя)`,"pause.volume":`Громкость`,"pause.music":`Музыка`,"pause.on":`Вкл`,"pause.off":`Выкл`,"pause.difficulty":`Сложность`,"pause.veryEasy":`Очень легко`,"pause.easy":`Легко`,"pause.graphics":`Графика`,"pause.pretty":`Красиво`,"pause.fast":`Быстро`,"pause.fps":`FPS`,"pause.show":`Показать`,"pause.hide":`Скрыть`,"pause.fullscreen":`Полный экран`,"pause.homeScreen":`Поделиться → На экран «Домой»`,"pause.language":`Язык`,"pause.level":`Уровень`,"pause.toMap":`🗺️ На карту`,"pause.newLevel":`🎲 Новый уровень`,"pause.hint":`Esc или тап мимо окна — продолжить · Сложность применяется к следующему уровню`,"pause.reset":`Сбросить прогресс (карта мира с начала, копилка и покупки остаются)`,"pause.resetConfirm":`Начать карту мира с начала? Пройденные уровни снова закроются.`,"where.level":`{name} · уровень {n}`,"where.map":`карта мира · пройдено {done} из {all}`,"fps.worst":`макс {ms} мс`,"fps.gpu":`GPU {ms} мс`,"fps.hz":`{hz} Гц /{div}`,"fps.pretty":`красиво`,"fps.fast":`быстро`,"stats.hz":`частота {hz} Гц`,"stats.calls":`{n} вызовов`,"stats.tris":`{n} тыс. треуг.`,"stats.programs":`{n} шейдеров`,"stats.noGpu":`GPU-таймера нет`,"diag.screen":`экран {w}×{h} @{dpr}`,"diag.glLost":`WebGL ПОТЕРЯН`,"diag.glOk":`WebGL ок`,"diag.errors":`ошибки: {list}`,"diag.noErrors":`ошибок нет`},en:{"game.title":`Jumpy`,"meta.title":`Jumpy — a kind 3D game for kids, no ads`,"aria.about":`About the game`,"aria.play":`Play`,"aria.pause":`Pause`,"aria.close":`Exit`,"aria.house":`House`,"aria.story":`Story`,"pause.title":`Pause`,"pause.forParent":`(for grown-ups)`,"pause.volume":`Volume`,"pause.music":`Music`,"pause.on":`On`,"pause.off":`Off`,"pause.difficulty":`Difficulty`,"pause.veryEasy":`Very easy`,"pause.easy":`Easy`,"pause.graphics":`Graphics`,"pause.pretty":`Pretty`,"pause.fast":`Fast`,"pause.fps":`FPS`,"pause.show":`Show`,"pause.hide":`Hide`,"pause.fullscreen":`Full screen`,"pause.homeScreen":`Share → Add to Home Screen`,"pause.language":`Language`,"pause.level":`Level`,"pause.toMap":`🗺️ To the map`,"pause.newLevel":`🎲 New level`,"pause.hint":`Esc or tap outside — resume · Difficulty applies from the next level`,"pause.reset":`Reset progress (world map from the start, coins and purchases stay)`,"pause.resetConfirm":`Start the world map over? Finished levels will be locked again.`,"where.level":`{name} · level {n}`,"where.map":`world map · {done} of {all} done`,"fps.worst":`max {ms} ms`,"fps.gpu":`GPU {ms} ms`,"fps.hz":`{hz} Hz /{div}`,"fps.pretty":`pretty`,"fps.fast":`fast`,"stats.hz":`refresh {hz} Hz`,"stats.calls":`{n} calls`,"stats.tris":`{n}k tris`,"stats.programs":`{n} shaders`,"stats.noGpu":`no GPU timer`,"diag.screen":`screen {w}×{h} @{dpr}`,"diag.glLost":`WebGL LOST`,"diag.glOk":`WebGL ok`,"diag.errors":`errors: {list}`,"diag.noErrors":`no errors`}},Wv=`ru`;function Gv(e){return e[0]?.toLowerCase().startsWith(`ru`)?`ru`:`en`}function Kv(){return Wv}function qv(e){Wv=Hv.includes(e)?e:`ru`,typeof document<`u`&&(document.documentElement.lang=Wv,document.title=Jv(`meta.title`))}function Jv(e,t={}){return Uv[Wv][e].replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e)}function Yv(e){e.querySelectorAll(`[data-t]`).forEach(e=>e.textContent=Jv(e.dataset.t)),e.querySelectorAll(`[data-t-aria]`).forEach(e=>e.setAttribute(`aria-label`,Jv(e.dataset.tAria)))}var Xv=`<svg viewBox="0 0 100 100"><path d="M20 10 L88 50 L20 90 Z" fill="#fff" stroke="#fff" stroke-width="10" stroke-linejoin="round"/></svg>`,Zv=class{settings;h;startScreen;pauseScreen;fadeEl;seedEl;diagEl;constructor(e,t,n){this.settings=t,this.h=n,this.startScreen=document.createElement(`div`),this.startScreen.className=`screen start`,this.startScreen.innerHTML=`<div class="title-hero" data-t="game.title"></div><button class="play-btn" data-t-aria="aria.play">${Xv}</button><button class="about-btn" data-t-aria="aria.about">?</button>`,this.startScreen.querySelector(`.play-btn`).addEventListener(`click`,()=>n.start());let r=document.getElementById(`about`);r?(this.startScreen.querySelector(`.about-btn`).addEventListener(`click`,e=>{e.currentTarget.blur(),r.classList.add(`open`)}),r.addEventListener(`click`,e=>{(!r.querySelector(`.about-panel`).contains(e.target)||e.target.closest(`.about-close`))&&r.classList.remove(`open`)})):this.startScreen.querySelector(`.about-btn`).remove(),e.appendChild(this.startScreen),this.pauseScreen=document.createElement(`div`),this.pauseScreen.className=`screen hidden`,this.pauseScreen.innerHTML=`
      <div class="pause-panel">
        <h2>⏸ <span data-t="pause.title"></span> <span data-t="pause.forParent" style="font-size:14px;font-weight:400;color:#9a8bb0"></span></h2>
        <div class="row"><span data-t="pause.volume"></span><input type="range" min="0" max="1" step="0.05" data-k="volume"></div>
        <div class="row"><span data-t="pause.music"></span>
          <div class="seg" data-k="music"><button data-v="on" data-t="pause.on"></button><button data-v="off" data-t="pause.off"></button></div></div>
        <div class="row"><span data-t="pause.difficulty"></span>
          <div class="seg" data-k="difficulty"><button data-v="veryEasy" data-t="pause.veryEasy"></button><button data-v="easy" data-t="pause.easy"></button></div></div>
        <div class="row"><span data-t="pause.graphics"></span>
          <div class="seg" data-k="graphics"><button data-v="pretty" data-t="pause.pretty"></button><button data-v="fast" data-t="pause.fast"></button></div></div>
        <div class="row"><span data-t="pause.fps"></span>
          <div class="seg" data-k="fps"><button data-v="on" data-t="pause.show"></button><button data-v="off" data-t="pause.hide"></button></div></div>
        <div class="row fs-row"><span data-t="pause.fullscreen"></span>
          <div class="seg" data-k="fullscreen"><button data-v="on" data-t="pause.on"></button><button data-v="off" data-t="pause.off"></button></div></div>
        <div class="row fs-hint"><span data-t="pause.fullscreen"></span><span class="fs-hint-text" data-t="pause.homeScreen"></span></div>
        <div class="row"><span data-t="pause.language"></span>
          <div class="seg" data-k="lang"><button data-v="ru">Русский</button><button data-v="en">English</button></div></div>
        <div class="row"><span data-t="pause.level"></span><span class="seed"></span></div>
        <div class="actions">
          <button class="btn-alt" data-a="map" data-t="pause.toMap"></button>
          <button class="btn-alt" data-a="seed" data-t="pause.newLevel"></button>
          <button class="btn-main" data-a="resume">▶</button>
        </div>
        <div class="hint" data-t="pause.hint"></div>
        <button class="btn-link" data-a="reset" data-t="pause.reset"></button>
        <div class="diag"></div>
      </div>`,e.appendChild(this.pauseScreen),this.seedEl=this.pauseScreen.querySelector(`.seed`),this.diagEl=this.pauseScreen.querySelector(`.diag`);let i=this.pauseScreen.querySelector(`input[data-k=volume]`);i.value=String(t.volume),i.addEventListener(`input`,()=>{this.settings.volume=Number(i.value),this.emit()}),i.addEventListener(`keydown`,e=>e.stopPropagation()),this.pauseScreen.querySelectorAll(`.seg`).forEach(e=>{e.addEventListener(`click`,t=>{let r=t.target.closest(`button`);r&&(e.dataset.k===`music`?this.settings.music=r.dataset.v===`on`:e.dataset.k===`fps`?this.settings.fps=r.dataset.v===`on`:e.dataset.k===`fullscreen`?(this.settings.fullscreen=r.dataset.v===`on`,n.fullscreen(this.settings.fullscreen)):e.dataset.k===`lang`?this.settings.lang=r.dataset.v:e.dataset.k===`graphics`?(this.settings.graphics=r.dataset.v,this.settings.graphicsAuto=!1):this.settings.difficulty=r.dataset.v,this.emit())})}),this.pauseScreen.querySelector(`[data-a=resume]`).addEventListener(`click`,()=>n.resume());let a=!1;this.pauseScreen.addEventListener(`pointerdown`,e=>a=e.target===this.pauseScreen),this.pauseScreen.addEventListener(`click`,e=>{a&&e.target===this.pauseScreen&&n.resume(),a=!1}),this.pauseScreen.querySelector(`[data-a=seed]`).addEventListener(`click`,()=>n.newSeed()),this.pauseScreen.querySelector(`[data-a=map]`).addEventListener(`click`,()=>n.toMap()),this.pauseScreen.querySelector(`[data-a=reset]`).addEventListener(`click`,()=>{confirm(Jv(`pause.resetConfirm`))&&n.resetProgress()}),this.refreshSegs(),this.fadeEl=document.createElement(`div`),this.fadeEl.className=`fade`,e.appendChild(this.fadeEl)}emit(){this.refreshSegs(),this.h.settingsChanged(this.settings)}refreshSettings(){this.refreshSegs()}refreshSegs(){this.pauseScreen.querySelectorAll(`.seg`).forEach(e=>{let t=e.dataset.k,n=t===`music`?this.settings.music?`on`:`off`:t===`fps`?this.settings.fps?`on`:`off`:t===`fullscreen`?this.settings.fullscreen?`on`:`off`:t===`graphics`?this.settings.graphics:t===`lang`?this.settings.lang:this.settings.difficulty;e.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e.dataset.v===n)),e.querySelectorAll(`button`).forEach(e=>e.tabIndex=-1)})}showStart(e){this.startScreen.classList.toggle(`hidden`,!e)}showPause(e,t=``,n=``,r={seed:!0}){this.pauseScreen.classList.toggle(`hidden`,!e);for(let e of[`map`,`seed`,`reset`])this.pauseScreen.querySelector(`[data-a=${e}]`).hidden=!r[e];this.setPauseInfo(t,n),e||document.activeElement?.blur()}setPauseInfo(e,t){this.seedEl.textContent=e,this.diagEl.textContent=t}fade(e){this.fadeEl.classList.toggle(`on`,e)}},Qv=.15;function $v(){return window.matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window}var ey=class{input;root;base;knob;jumpBtn;stickId=null;originX=0;originY=0;radius=64;constructor(e,t){this.input=t,this.root=document.createElement(`div`),this.root.className=`touch`,this.root.innerHTML=`
      <div class="touch-zone touch-left"></div>
      <div class="touch-zone touch-right"></div>
      <div class="stick-base"><div class="stick-knob"></div></div>
      <div class="jump-btn"><svg viewBox="0 0 100 100"><path d="M50 18 L82 56 H62 V82 H38 V56 H18 Z" fill="#fff" stroke="#fff" stroke-width="6" stroke-linejoin="round"/></svg></div>
    `,e.appendChild(this.root),this.base=this.root.querySelector(`.stick-base`),this.knob=this.root.querySelector(`.stick-knob`),this.jumpBtn=this.root.querySelector(`.jump-btn`);let n=this.root.querySelector(`.touch-left`),r=this.root.querySelector(`.touch-right`);n.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.stickId===null&&(this.stickId=e.pointerId,n.setPointerCapture(e.pointerId),this.originX=e.clientX,this.originY=e.clientY,this.radius=Math.max(40,this.base.offsetWidth*.43),this.base.classList.add(`active`),this.base.style.left=`${e.clientX}px`,this.base.style.top=`${e.clientY}px`,this.moveKnob(e.clientX,e.clientY))}),n.addEventListener(`pointermove`,e=>{e.pointerId===this.stickId&&this.moveKnob(e.clientX,e.clientY)});let i=e=>{e.pointerId===this.stickId&&(this.stickId=null,this.base.classList.remove(`active`),this.base.style.left=``,this.base.style.top=``,this.knob.style.transform=``,this.input.setTouchMove(0,0))};n.addEventListener(`pointerup`,i),n.addEventListener(`pointercancel`,i),r.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.input.touchJump(),this.jumpBtn.classList.remove(`pressed`),this.jumpBtn.offsetWidth,this.jumpBtn.classList.add(`pressed`)}),this.root.addEventListener(`contextmenu`,e=>e.preventDefault())}moveKnob(e,t){let n=e-this.originX,r=t-this.originY,i=Math.hypot(n,r),a=this.radius;i>a&&(n=n/i*a,r=r/i*a),this.knob.style.transform=`translate(${n}px, ${r}px)`;let o=Math.min(1,i/a);if(o<Qv){this.input.setTouchMove(0,0);return}let s=Math.min(1,(o-Qv)/.44999999999999996),c=Math.hypot(n,r);this.input.setTouchMove(n/c*s,-r/c*s)}show(e){this.root.classList.toggle(`hidden`,!e),!e&&this.stickId!==null&&(this.stickId=null,this.base.classList.remove(`active`),this.knob.style.transform=``,this.input.setTouchMove(0,0))}},ty=[],ny=!1;function ry(e){ty.push(e.slice(0,120)),ty.length>3&&ty.shift()}window.addEventListener(`error`,e=>ry(e.message||String(e.error)));var iy=console.error.bind(console);console.error=(...e)=>{ry(e.map(String).join(` `)),iy(...e)},window.addEventListener(`unhandledrejection`,e=>ry(String(e.reason)));function ay(e){ny=e}function oy(e){let t=e.getContext(),n=e.domElement,r=``;try{let e=t.getExtension(`WEBGL_debug_renderer_info`);r=String(t.getParameter(e?e.UNMASKED_RENDERER_WEBGL:t.RENDERER))}catch{r=`?`}let i=/Chrome\/(\d+)/.exec(navigator.userAgent)?.[1]??`?`;return[`v2.0.23`,Jv(`diag.screen`,{w:innerWidth,h:innerHeight,dpr:devicePixelRatio.toFixed(2)}),`canvas ${n.width}×${n.height}`,r,`WebView ${i}`,ny||t.isContextLost()?Jv(`diag.glLost`):Jv(`diag.glOk`),ty.length?Jv(`diag.errors`,{list:ty.join(` | `)}):Jv(`diag.noErrors`)].join(` · `)}var sy=class e{divisor=1;last=-1/0;frames=0;misses=0;windowStart=0;probeAt=0;probeWait=Y.pacing.probe;probing=!1;static baseDivisor(e){return Math.max(1,Math.floor(e/Y.pacing.maxFps+.25))}shouldDraw(t,n){if(!n)return this.last=t,!0;let r=e.baseDivisor(n);this.divisor<r&&(this.divisor=r);let i=1e3/n;return t-this.last<this.divisor*i-i/2?!1:(this.last=t,!0)}drawn(t,n,r){if(!r||n<=0||n>250)return;let i=Y.pacing,a=1e3/r;if(this.windowStart||=t,this.frames++,n>this.divisor*a+a/2&&this.misses++,t-this.windowStart<i.window*1e3)return;let o=this.misses/this.frames>i.missShare;this.frames=this.misses=0,this.windowStart=t;let s=e.baseDivisor(r);o&&r/(this.divisor+1)>=i.minFps-.5?(this.probing&&(this.probeWait=Math.min(this.probeWait*2,i.probeMax)),this.divisor++,this.probing=!1,this.probeAt=t+this.probeWait*1e3):!o&&this.probing?(this.probing=!1,this.probeWait=i.probe):!o&&this.divisor>s&&t>=this.probeAt&&(this.divisor--,this.probing=!0)}},cy=[30,50,60,72,75,90,100,120,144,165],ly=class{fps=0;worstMs=0;gpuMs=-1;hz=0;time=0;frames=0;worst=0;gaps=[];ticks=0;gpu;constructor(e){this.gpu=dy.create(e)}beginGpu(){this.gpu?.begin()}endGpu(){this.gpu?.end()}vsync(e){e<=0||e>1e3||(this.gaps.push(e),this.gaps.length>120&&this.gaps.shift(),(++this.ticks%30==0||!this.hz)&&(this.hz=uy(this.gaps)))}frame(e){return e<=0||e>1e3||(this.time+=e,this.frames++,this.worst=Math.max(this.worst,e),this.time<500)?!1:(this.fps=this.frames*1e3/this.time,this.worstMs=this.worst,this.gpuMs=this.gpu?.average()??-1,this.time=this.frames=this.worst=0,!0)}describe(e){let t=Math.round(e.render.triangles/1e3);return[Jv(`stats.hz`,{hz:this.hz||`?`}),Jv(`stats.calls`,{n:e.render.calls}),Jv(`stats.tris`,{n:t}),Jv(`stats.programs`,{n:e.programs?.length??0}),this.gpuMs>=0?Jv(`fps.gpu`,{ms:this.gpuMs.toFixed(1)}):Jv(`stats.noGpu`)].join(` · `)}};function uy(e){if(e.length<10)return 0;let t=[...e].sort((e,t)=>e-t),n=1e3/t[Math.min(2,t.length-1)],r=cy[0];for(let e of cy)Math.abs(e-n)<Math.abs(r-n)&&(r=e);return r}var dy=class e{gl;ext;free=[];pending=[];active=null;sum=0;count=0;constructor(e,t){this.gl=e,this.ext=t}static create(t){if(!(`createQuery`in t))return null;let n=t.getExtension(`EXT_disjoint_timer_query_webgl2`);return n?new e(t,n):null}begin(){if(this.collect(),this.active||this.pending.length>4)return;let e=this.free.pop()??this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.active=e)}end(){this.active&&=(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),null)}average(){let e=this.count?this.sum/this.count:-1;return this.sum=this.count=0,e}collect(){let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this.pending.length;){let n=this.pending[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;let r=e.getQueryParameter(n,e.QUERY_RESULT);this.pending.shift(),this.free.push(n),t||(this.sum+=r/1e6,this.count++)}}},fy;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(fy||={});var py=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},my=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,hy=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?my(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new py(`"${e}" plugin is not implemented on ${c}`,fy.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new py(`"${e}.${t}()" is not implemented on ${c}`,fy.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=py,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},gy=(e=>e.Capacitor=hy(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),_y=gy.registerPlugin,vy=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new gy.Exception(e,fy.Unimplemented)}unavailable(e=`not available`){return new gy.Exception(e,fy.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},yy=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),by=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),xy=class extends vy{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=by(n).trim(),r=by(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=yy(e.key),n=yy(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};_y(`CapacitorCookies`,{web:()=>new xy});var Sy=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),Cy=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},wy=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,Ty=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=Cy(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},Ey=class extends vy{async request(e){let t=Ty(e,e.webFetchExtra),n=wy(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await Sy(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};_y(`CapacitorHttp`,{web:()=>new Ey});var Dy;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(Dy||={});var Oy;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(Oy||={});var ky=class extends vy{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};_y(`SystemBars`,{web:()=>new ky});var Ay=`modulepreload`,jy=function(e,t){return new URL(e,t).href},My={},Ny=function(e){return e.pathname.endsWith(`.css`)},Py=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Fy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=jy(t,n);let r=s(t),i=Ny(r);return Py(My,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ay,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Iy=_y(`App`,{web:()=>Fy(()=>import(`./web-CZPIOIW1.js`).then(e=>new e.AppWeb),[],import.meta.url)});function Ly(){return gy.isNativePlatform()}function Ry(e){Ly()&&Iy.addListener(`backButton`,()=>{e()||Iy.exitApp()})}function zy(e){document.addEventListener(`visibilitychange`,()=>e(document.hidden)),Ly()&&Iy.addListener(`appStateChange`,({isActive:t})=>e(!t))}var By=class{camera;pos=new z;look=new z;climbBlend=0;lift=0;shakeAmount=0;time=0;aheadX=0;aheadZ=0;focusPos=new z;focusLook=new z;focusArc=0;focusPosW=0;focusLookW=0;outPos=new z;outLook=new z;yawNow=0;constructor(e){this.camera=new Ds(Y.camera.fov,e,.5,500)}shake(e){this.shakeAmount=Math.max(this.shakeAmount,e)}snap(e){let t=Y.camera.offset;this.look.set(e.x,e.y+1,e.z),this.aheadX=this.aheadZ=0,this.pos.set(e.x+t.x,e.y+t.y,e.z+t.z),this.lift=0,this.climbBlend=0,this.focusPosW=this.focusLookW=0,this.yawNow=0,this.apply()}get yaw(){return this.yawNow}setFocus(e,t){let n=Y.camera.offset,r=Y.reveal.distance;this.focusLook.copy(e);let i=e.x+n.x*r,a=e.z+n.z*r,o=e.y+n.y*r;for(let n=0;n<10&&this.blocked(e,i,o,a,t);n+=.75)o+=.75;this.focusPos.set(i,o,a),this.focusArc=Math.min(20,this.pos.distanceTo(this.focusPos)*.25)}setOverview(e){let t=Y.intro,n=Math.tan(Mt.degToRad(Y.camera.fov/2)),r=Mt.degToRad(t.pitch),i=Math.sin(r),a=Math.cos(r),o=(e.maxX-e.minX)/2,s=(e.maxZ-e.minZ)/2,c=this.camera,l=new z,u=Math.max(o/(n*c.aspect),s*i/n);this.focusLook.set((e.minX+e.maxX)/2,0,(e.minZ+e.maxZ)/2);for(let n=0;n<4;n++){c.position.set(this.focusLook.x,i*u,this.focusLook.z+a*u),c.lookAt(this.focusLook),c.updateMatrixWorld();let n=1/0,r=-1/0,o=1/0,d=-1/0;for(let t of[e.minX,e.maxX])for(let i of[e.minZ,e.maxZ])for(let e of[0,Y.level.maxHeight])l.set(t,e,i).project(c),n=Math.min(n,l.x),r=Math.max(r,l.x),o=Math.min(o,l.y),d=Math.max(d,l.y);this.focusLook.z-=(o+d)/2*(2*s/Math.max(.01,d-o)),u*=Math.max((r-n)/2,(d-o)/2)*t.margin}return this.focusPos.set(this.focusLook.x,i*u,this.focusLook.z+a*u),this.focusArc=0,this.apply(),u}focus(e,t){this.focusPosW=e,this.focusLookW=t}get focusWeight(){return this.focusPosW}showcase(e,t,n=-1){this.time+=e;let r=Math.sin(this.time*.4)*.35,i=1-Math.exp(-3*e);this.pos.x+=(t.x+Math.sin(r)*3.6-this.pos.x)*i,this.pos.y+=(t.y+.9-this.pos.y)*i,this.pos.z+=(t.z+n*Math.cos(r)*3.6-this.pos.z)*i,this.look.set(t.x,t.y-.55,t.z),this.apply()}update(e,t,n,r,i,a=null){Number.isFinite(this.pos.x+this.pos.z+this.look.x+this.look.z+this.aheadX+this.aheadZ)||this.snap(t),this.time+=e;let o=Y.camera;this.climbBlend+=(+!!r-this.climbBlend)*Math.min(1,e*2.5);let s=o.offset.x+(o.climbOffset.x-o.offset.x)*this.climbBlend,c=o.offset.y+(o.climbOffset.y-o.offset.y)*this.climbBlend,l=o.offset.z+(o.climbOffset.z-o.offset.z)*this.climbBlend,u=Y.cave.camera,d=a?a.yaw*a.w:0;this.yawNow+=(d-this.yawNow)*(1-Math.exp(-u.turnSpeed*e));let f=Math.sin(this.yawNow),p=Math.cos(this.yawNow),m=1-Math.exp(-1.5*e),h=o.lookAhead,g=h/Y.player.moveSpeed;this.aheadX+=(Math.max(-h,Math.min(h,n.x*g))-this.aheadX)*m,this.aheadZ+=(Math.max(-h,Math.min(h,n.z*g))-this.aheadZ)*m;let _=t.x+this.aheadX,v=t.y+1+this.climbBlend*1.5,y=t.z+this.aheadZ,b=_+s*p+l*f,x=y-s*f+l*p,S=0;for(let e=0;e<=10;e+=.75){if(!this.blocked(t,b,t.y+c+e,x,i)){S=e;break}S=e}this.lift+=(S-this.lift)*Math.min(1,e*(S>this.lift?6:1.5));let C=t.y+c+this.lift;if(a){let e=a.zone,n=a.w,r,i=e.max[1]-u.belowRoof,o;if(e.kind===`cave`){let n=e.max[2]-u.roomMargin-t.z;r=t.x,o=t.z+Math.max(u.minDistance,Math.min(u.distance,n))}else{let n=1-u.axisPull,s=e.axis===`x`?0:2,c=e.axis===`x`?2:0,l=e.axis===`x`?Math.sign(Math.sin(a.yaw)):1,d=(e.axis===`x`?t.x:t.z)+l*u.distance,f=(e.min[c]+e.max[c])/2,p=f+((e.axis===`x`?t.z:t.x)-f)*n;r=e.axis===`x`?d:p,o=e.axis===`x`?p:d;let m=-((e.max[s]-e.min[s])/2)-l*(d-(e.min[s]+e.max[s])/2),h=Math.max(0,Math.min(1,m/u.ramp));i+=(C-i)*h}b+=(r-b)*n,C+=(i-C)*n,x+=(o-x)*n,_+=(t.x-_)*n,v+=(t.y+u.lookUp-v)*n,e.axis===`x`&&(y+=(t.z-y)*n)}let w=1-Math.exp(-o.followSharpness*e);this.pos.x+=(b-this.pos.x)*Math.min(1,w*(1+.5*Math.abs(f))),this.pos.y+=(C-this.pos.y)*w,this.pos.z+=(x-this.pos.z)*Math.min(1,w*(1+.5*Math.abs(p)));let T=1-Math.exp(-o.followSharpness*1.5*e);this.look.x+=(_-this.look.x)*T,this.look.y+=(v-this.look.y)*T,this.look.z+=(y-this.look.z)*T,this.shakeAmount=Math.max(0,this.shakeAmount-e*1.5),this.apply()}blocked(e,t,n,r,i){let a=e.x,o=e.y+.6,s=e.z,c=t-a,l=n-o,u=r-s,d=Math.hypot(c,l,u);for(let e of i)if(Od(a,o,s,c/d,l/d,u/d,e,d)>.3)return!0;return!1}apply(){let e=this.focusPosW;this.outPos.lerpVectors(this.pos,this.focusPos,e),this.outPos.y+=4*e*(1-e)*this.focusArc,this.outLook.lerpVectors(this.look,this.focusLook,this.focusLookW);let t=this.shakeAmount*this.shakeAmount;this.camera.position.set(this.outPos.x+Math.sin(this.time*47)*t*.4,this.outPos.y+Math.sin(this.time*61)*t*.4,this.outPos.z),this.camera.lookAt(this.outLook)}},Vy=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyW`,`KeyA`,`KeyS`,`KeyD`,`Space`]),Hy=class{keys=new Set;jumpQueued=!1;pauseQueued=!1;padJumpWasDown=!1;padPauseWasDown=!1;padX=0;padY=0;padPressQueued=!1;anyQueued=!1;touchX=0;touchY=0;constructor(){window.addEventListener(`keydown`,e=>{Vy.has(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&((e.code===`Space`||e.code===`Enter`)&&(this.jumpQueued=!0,this.anyQueued=!0),(e.code===`Escape`||e.code===`KeyP`)&&(this.pauseQueued=!0))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear())}poll(){this.padX=0,this.padY=0;let e=navigator.getGamepads?navigator.getGamepads():[];for(let t of e){if(!t)continue;let e=t.axes[0]??0,n=t.axes[1]??0;Math.hypot(e,n)>.25&&(this.padX=e,this.padY=-n),t.buttons[12]?.pressed&&(this.padY=1),t.buttons[13]?.pressed&&(this.padY=-1),t.buttons[14]?.pressed&&(this.padX=-1),t.buttons[15]?.pressed&&(this.padX=1);let r=!!(t.buttons[0]?.pressed||t.buttons[1]?.pressed);r&&!this.padJumpWasDown&&(this.jumpQueued=!0,this.anyQueued=!0,this.padPressQueued=!0),this.padJumpWasDown=r;let i=!!t.buttons[9]?.pressed;i&&!this.padPauseWasDown&&(this.pauseQueued=!0),this.padPauseWasDown=i;break}}padDir(){return{x:this.padX,y:this.padY}}consumePadPress(){let e=this.padPressQueued;return this.padPressQueued=!1,e}move(){let e=this.padX+this.touchX,t=this.padY+this.touchY,n=this.keys;(n.has(`ArrowLeft`)||n.has(`KeyA`))&&--e,(n.has(`ArrowRight`)||n.has(`KeyD`))&&(e+=1),(n.has(`ArrowUp`)||n.has(`KeyW`))&&(t+=1),(n.has(`ArrowDown`)||n.has(`KeyS`))&&--t;let r=Math.hypot(e,t);return r>1&&(e/=r,t/=r),{x:e,y:t}}setTouchMove(e,t){this.touchX=e,this.touchY=t}touchJump(){this.jumpQueued=!0,this.anyQueued=!0}consumeJump(){let e=this.jumpQueued;return this.jumpQueued=!1,e}consumePause(){let e=this.pauseQueued;return this.pauseQueued=!1,this.padPressQueued=!1,e}consumeAny(){let e=this.anyQueued;return this.anyQueued=!1,e}flush(){this.jumpQueued=!1,this.pauseQueued=!1,this.padPressQueued=!1,this.anyQueued=!1}},Uy=`prygunchik.profile`;function Wy(){return{done:[],endless:0,coins:0,owned:[`skin:pink`],skin:`pink`,hat:null,trail:null,upgrades:{}}}function Gy(){let e=Wy();try{let t=localStorage.getItem(Uy);if(t)return{...e,...JSON.parse(t)}}catch{}return e}function Ky(e){try{localStorage.setItem(Uy,JSON.stringify(e))}catch{}}var qy=[{kind:`skin`,icon:`🎨`},{kind:`hat`,icon:`👑`},{kind:`trail`,icon:`✨`},{kind:`upgrade`,icon:`⬆️`}],Jy={Escape:`close`,ArrowRight:`right`,KeyD:`right`,ArrowLeft:`left`,KeyA:`left`,ArrowDown:`down`,KeyS:`down`,ArrowUp:`up`,KeyW:`up`,Space:`tap`,Enter:`tap`},Yy=e=>`#`+e.toString(16).padStart(6,`0`),Xy=class{h;root;coinCount;tabsEl;cardsEl;tab=`skin`;focus=0;profile=null;cards=[];constructor(e,t){this.h=t,this.root=document.createElement(`div`),this.root.className=`shop hidden`,this.root.innerHTML=`
      <div class="shop-top">
        <div class="coins shop-coins"><div class="coin-icon"></div><span>0</span></div>
        <button class="shop-close" data-t-aria="aria.close">✕</button>
      </div>
      <div class="shop-panel">
        <div class="shop-tabs"></div>
        <div class="shop-cards"></div>
      </div>`,e.appendChild(this.root),this.coinCount=this.root.querySelector(`.shop-coins span`),this.tabsEl=this.root.querySelector(`.shop-tabs`),this.cardsEl=this.root.querySelector(`.shop-cards`),this.root.querySelector(`.shop-close`).addEventListener(`click`,()=>t.close());for(let e of qy){let t=document.createElement(`button`);t.className=`shop-tab`,t.textContent=e.icon,t.dataset.kind=e.kind,t.addEventListener(`click`,()=>this.setTab(e.kind)),this.tabsEl.appendChild(t)}window.addEventListener(`keydown`,e=>this.key(e))}get isOpen(){return this.profile!==null}open(e){this.profile=e,this.root.classList.remove(`hidden`),this.render()}close(){this.profile=null,this.root.classList.add(`hidden`)}refresh(){this.profile&&this.render()}shake(e){let t=this.cards[eh[this.tab].indexOf(e)];t&&(t.classList.remove(`shake`),t.offsetWidth,t.classList.add(`shake`))}setTab(e){this.tab=e,this.focus=0,this.refresh()}key(e){if(!this.isOpen)return;let t=Jy[e.code];t&&(e.preventDefault(),this.command(t))}command(e){if(!this.isOpen)return;let t=eh[this.tab],n=qy.findIndex(e=>e.kind===this.tab);switch(e){case`close`:return this.h.close();case`right`:this.focus=(this.focus+1)%t.length;break;case`left`:this.focus=(this.focus+t.length-1)%t.length;break;case`down`:return this.setTab(qy[(n+1)%qy.length].kind);case`up`:return this.setTab(qy[(n+qy.length-1)%qy.length].kind);case`tap`:return this.h.tap(t[this.focus])}this.render()}render(){let e=this.profile;this.coinCount.textContent=String(e.coins);for(let e of this.tabsEl.querySelectorAll(`.shop-tab`))e.classList.toggle(`on`,e.dataset.kind===this.tab);this.cardsEl.innerHTML=``,this.cards=eh[this.tab].map((t,n)=>{let r=document.createElement(`button`),i=ih(e,t),a=ah(e,t);r.className=`shop-card`,r.classList.toggle(`worn`,a),r.classList.toggle(`poor`,i!==null&&i>e.coins),r.classList.toggle(`focus`,n===this.focus);let o=t.kind===`skin`?`<div class="swatch" style="--c:${Yy(t.color)}"></div>`:`<div class="icon">${t.icon}</div>`,s=``;if(t.kind===`upgrade`){let n=nh(t.id),r=th(e,t.id);s=`<div class="pips">${Array.from({length:n},(e,t)=>`<i class="${t<r?`on`:``}"></i>`).join(``)}</div>`}let c=i===null?a||t.kind===`upgrade`&&rh(e,t)?`<div class="price done">✔</div>`:`<div class="price"></div>`:`<div class="price"><div class="coin-icon"></div>${i}</div>`;return r.innerHTML=o+s+c,r.addEventListener(`click`,()=>{this.focus=n,this.h.tap(t)}),this.cardsEl.appendChild(r),r}),this.cards[this.focus]?.scrollIntoView({block:`nearest`,inline:`nearest`})}},Zy={ArrowRight:`right`,KeyD:`right`,ArrowLeft:`left`,KeyA:`left`,ArrowDown:`down`,KeyS:`down`,ArrowUp:`up`,KeyW:`up`,Space:`go`,Enter:`go`},Qy={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]},$y=100,eb=40,tb=29,nb=[-26,20],rb=1.45,ib=.35,ab=[`#ff6b6b`,`#ffa94d`,`#ffe066`,`#69db7c`,`#4dabf7`,`#b197fc`],ob=.3,sb=18,cb=.8,lb=.5,ub=.8,db=`http://www.w3.org/2000/svg`;function fb(e,t){let n=e>>16&255,r=e>>8&255,i=e&255,a=(n*.3+r*.59+i*.11)*.85,o=(e,n)=>Math.round(e+(n-e)*t);return o(n,a*.97)<<16|o(r,a*.95)<<8|o(i,Math.min(255,a*1.08))}var pb=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n],mb=(e,t,n,r)=>pb(pb(e,t,r),pb(t,n,r),r),hb=e=>`#`+e.toString(16).padStart(6,`0`),gb=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function $(e,t={},n){let r=document.createElementNS(db,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,String(n));return n?.appendChild(r),r}function _b(e){return Array.from({length:10},(t,n)=>{let r=n/10*Math.PI*2-Math.PI/2,i=n%2?e*.45:e;return`${(Math.cos(r)*i).toFixed(1)},${(Math.sin(r)*i).toFixed(1)}`}).join(` `)}var vb=class{c;h;root;svgEl;roadsLayer;nodesLayer;fxLayer;hero;heroBody;arrow;coinCount;profile=null;visible=!1;done=new Set;at=``;hop=null;target=null;busy=!1;frozen=!1;pending=[];freshFrom=``;leaving=``;wait=0;growing=null;sparks=[];constructor(e,t,n){this.c=t,this.h=n,this.root=document.createElement(`div`),this.root.className=`world-map hidden`,this.root.innerHTML=`
      <div class="wm-board"></div>
      <button class="coins wm-coins" data-t-aria="aria.house"><div class="coin-icon"></div><span>0</span></button>
      <button class="pause-btn wm-pause" data-t-aria="aria.pause">❚❚</button>
      <button class="wm-story" data-t-aria="aria.story">👑</button>`,e.appendChild(this.root),this.coinCount=this.root.querySelector(`.wm-coins span`),this.root.querySelector(`.wm-coins`).addEventListener(`click`,()=>this.tap(Oh)),this.root.querySelector(`.wm-story`).addEventListener(`click`,e=>{e.currentTarget.blur(),!this.frozen&&!this.busy&&!this.pending.length&&n.story()}),this.root.querySelector(`.wm-pause`).addEventListener(`click`,e=>{e.currentTarget.blur(),n.pause()});let r=[...t.nodes.map(e=>[e.gx,e.gz]),...t.house?[[t.house.gx,t.house.gz]]:[]],i=r.map(([e])=>e),a=r.map(([,e])=>e),o=(Math.min(...i)-.7)*$y,s=(Math.min(...a)-.85)*$y,c=(Math.max(...i)-Math.min(...i)+1.4)*$y,l=(Math.max(...a)-Math.min(...a)+1.35)*$y;this.svgEl=$(`svg`,{viewBox:`${o} ${s} ${c} ${l}`,preserveAspectRatio:`xMidYMid meet`}),this.root.querySelector(`.wm-board`).appendChild(this.svgEl),this.roadsLayer=$(`g`,{},this.svgEl),this.nodesLayer=$(`g`,{},this.svgEl),this.hero=$(`g`,{class:`wm-hero`},this.svgEl),$(`ellipse`,{class:`wm-shadow`,cy:2,rx:12,ry:4},this.hero),this.heroBody=$(`g`,{},this.hero),this.arrow=$(`g`,{class:`wm-arrow`},this.svgEl),$(`path`,{d:`M-9,-62 h18 v14 h10 l-19,20 l-19,-20 h10 z`},$(`g`,{class:`wm-arrow-bob`},this.arrow)),this.fxLayer=$(`g`,{},this.svgEl),window.addEventListener(`keydown`,e=>{let t=this.visible?Zy[e.code]:void 0;t&&(e.preventDefault(),this.command(t))})}get isOpen(){return this.profile!==null}open(e,t){this.profile=e,this.done=new Set(e.done),this.pending=t?t.unlocks.filter(e=>!this.done.has(e)):[],this.freshFrom=t?.node??``,this.leaving=this.freshFrom,this.wait=ub,this.growing=null;let n=e.last??this.c.start;this.at=Ah(this.c,this.done,n)===`locked`?this.c.start:n,this.hop=null,this.target=null,this.setVisible(!0)}close(){this.profile=null,this.setVisible(!1);for(let e of this.sparks)e.el.remove();this.sparks=[]}setVisible(e){this.visible=e,this.root.classList.toggle(`hidden`,!e),e&&(this.busy=!1,this.render())}get covers(){return this.visible}command(e){if(!this.visible||this.frozen||this.busy||this.pending.length)return;if(e===`go`){this.hop||this.go(this.at);return}if(this.hop)return;let[t,n]=Qy[e],r=Ih(this.c,this.done,this.at,t,n);r&&(this.target={id:r,go:!1},this.nextHop())}update(e){if(!this.visible)return;this.updateSparks(e),this.updateReveal(e);let t=this.hop;if(!t)return;let[n,r]=this.pos(t.from),[i,a]=this.pos(t.to),o=Math.hypot(i-n,a-r)/$y;if(t.t=Math.min(1,t.t+e/(ob*Math.max(1,Math.sqrt(o)))),this.placeHero(t.from,t.to,t.t),!(t.t<1)){if(this.at=t.to,this.hop=null,this.target?.id===this.at){let e=this.target.go;this.target=null,this.placeArrow(),e&&this.go(this.at)}else this.nextHop()}}state(e){return this.pending.includes(e)?`locked`:Ah(this.c,this.done,e)}pos(e){let[t,n]=Nh(this.c,e);return[t*$y,n*$y]}big(e){return e===`house`||!!this.c.nodes.find(t=>t.id===e)?.endless}stand(e){let[t,n]=this.pos(e),r=this.big(e)?rb:1;return[t+nb[0]*r,n+nb[1]*r]}bend(e,t){let n=this.pos(e),r=this.pos(t),i=pb(n,r,.5);if(!this.rainbow(e,t))return i;let[a,o]=[r[0]-n[0],r[1]-n[1]],s=a>=0?1:-1;return[i[0]+o*s*ib,i[1]-a*s*ib]}rainbow(e,t){return e!==`house`&&t!==`house`&&(this.big(e)||this.big(t))}roadPath(e,t,n=1){let r=this.pos(e),i=this.bend(e,t),a=this.pos(t),o=pb(r,i,n),s=mb(r,i,a,n);return`M${r[0]},${r[1]} Q${o[0].toFixed(1)},${o[1].toFixed(1)} ${s[0].toFixed(1)},${s[1].toFixed(1)}`}tap(e){if(!(!this.visible||this.frozen||this.busy||this.pending.length)){if(e!==`house`&&this.state(e)===`locked`)this.h.sound(`locked`),this.shake(e);else{if(e===this.at&&!this.hop||this.big(e))return this.target=null,this.go(e);this.target={id:e,go:!0},this.hop||this.nextHop()}}}nextHop(){let e=this.target;if(!e)return;let t=Fh(this.c,this.done,this.at,e.id);!t||t.length<2?this.target=null:(this.hop={from:this.at,to:t[1],t:0},this.arrow.classList.add(`hidden`),this.h.sound(`hop`))}go(e){(e===`house`||this.state(e)!==`locked`)&&(this.busy=!0,this.nodesLayer.querySelector(`[data-id="${e}"] .wm-bob`)?.classList.add(`enter`),e===`house`?this.h.house():this.h.enter(e))}shake(e){let t=this.nodesLayer.querySelector(`[data-id="${e}"] .wm-bob`);t&&(t.classList.remove(`shake`),t.getBoundingClientRect(),t.classList.add(`shake`))}render(){let e=this.profile;if(e){this.coinCount.textContent=String(e.coins),this.roadsLayer.replaceChildren(),this.nodesLayer.replaceChildren();for(let[e,t]of this.c.edges)this.done.has(e)?e===this.freshFrom&&this.pending.includes(t)||this.road(e,t):this.state(e)===`open`&&this.state(t)===`locked`&&$(`path`,{d:this.roadPath(e,t),class:`wm-hint`},this.roadsLayer);this.c.house&&this.road(Oh,this.c.house.next),this.c.house&&this.drawHouse();for(let t of this.c.nodes){let n=this.state(t.id),[r,i]=this.pos(t.id),a=$(`g`,{class:`wm-node ${n}`,transform:`translate(${r},${i})`,"data-id":t.id},this.nodesLayer),o=$(`g`,{class:`wm-bob`},$(`g`,{transform:`scale(${this.big(t.id)?rb:1})`},a)),s=k_(Rh(t,t.endless?e.endless:0)).styles.ground;n===`open`&&$(`ellipse`,{class:`wm-ring`,rx:47,ry:35},o);let c=n===`open`?Y.gloom.mapOpen:0;this.island(o,n===`locked`?14012896:fb(s.top,c),n===`locked`?11841222:fb(s.side,c));let l=$(`text`,{class:`wm-icon`,y:2},o);if(l.textContent=t.icon??(t.endless?`🎲`:`🏝️`),n===`done`&&t.endless?$(`text`,{class:`wm-infinity`,transform:`translate(30,-22)`},o).textContent=`∞`:n===`done`&&$(`polygon`,{class:`wm-star`,points:_b(13),transform:`translate(30,-22)`},o),n===`done`?t.id===this.leaving&&(this.gloomCloud(o,!0),this.leaving=``):this.gloomCloud(o,!1),n===`locked`){let e=$(`g`,{class:`wm-lock`,transform:`translate(26,16)`},o);$(`path`,{d:`M-6,-3 v-5 a6,6 0 0 1 12,0 v5`,class:`shackle`},e),$(`rect`,{x:-9,y:-3,width:18,height:14,rx:3},e)}a.addEventListener(`click`,()=>this.tap(t.id))}this.drawHero(e),this.placeHero(this.at,this.at,1),this.placeArrow()}}gloomCloud(e,t){let n=$(`g`,{transform:`translate(27,-27)`},e),r=$(`g`,{class:`wm-cloud-drift`},$(`g`,{class:`wm-cloud${t?` leave`:``}`},n));for(let[e,t,n]of[[-9,2,7],[9,2,7],[0,-2,9.5]])$(`circle`,{cx:e,cy:t,r:n},r);$(`rect`,{x:-15,y:1,width:30,height:8,rx:4},r);for(let e of[-1,1])$(`path`,{class:`brow`,d:`M${e*7},-3 L${e*2},-1`},r),$(`circle`,{class:`eye`,cx:e*4.5,cy:2,r:1.4},r);if(!t)for(let e of[-6,5])$(`ellipse`,{class:`wm-drop`,cx:e,cy:13,rx:1.6,ry:2.4},r)}island(e,t,n){$(`ellipse`,{cy:9,rx:eb,ry:tb,fill:hb(n)},e),$(`ellipse`,{rx:eb,ry:tb,fill:hb(t),class:`wm-top`},e)}road(e,t,n=1){let r=this.roadPath(e,t,n);return this.rainbow(e,t)?ab.map((e,t)=>$(`path`,{d:r,class:`wm-rainbow`,stroke:e,"stroke-width":(ab.length-t)*4.5},this.roadsLayer)):[`wm-road`,`wm-road-dash`].map(e=>$(`path`,{d:r,class:e},this.roadsLayer))}drawHouse(){let[e,t]=this.pos(Oh),n=$(`g`,{class:`wm-node wm-house`,transform:`translate(${e},${t})`,"data-id":Oh},this.nodesLayer),r=$(`g`,{class:`wm-bob`},$(`g`,{transform:`scale(${rb})`},n));this.island(r,k_(`meadow`).styles.ground.top,k_(`meadow`).styles.ground.side),$(`rect`,{x:-17,y:-16,width:34,height:26,rx:2,fill:`#fff1d6`,stroke:`#e8cfa6`,"stroke-width":2},r),$(`polygon`,{points:`-23,-14 0,-35 23,-14`,fill:`#ff8fab`,stroke:`#e86f92`,"stroke-width":2,"stroke-linejoin":`round`},r),$(`rect`,{x:-5,y:-3,width:10,height:13,rx:2,fill:`#b8794a`},r),$(`circle`,{cx:10,cy:-6,r:4,fill:`#9fe3ff`,stroke:`#fff`,"stroke-width":1.5},r);let i=$(`g`,{},$(`g`,{class:`wm-house-coin`,transform:`translate(0,-46)`},r));$(`circle`,{r:9,fill:`#ffd23f`,stroke:`#f5a300`,"stroke-width":2},i);let a=$(`text`,{class:`wm-coin-star`,y:1},i);a.textContent=`★`,n.addEventListener(`click`,()=>this.tap(Oh))}drawHero(e){let t=uh(e.skin);this.heroBody.replaceChildren();let n=$(`g`,{class:`wm-hero-bob`},this.heroBody);$(`circle`,{cy:-14,r:14,fill:hb(t.body),stroke:`#fff`,"stroke-width":2},n),$(`ellipse`,{cy:-8,rx:9,ry:7,fill:hb(t.belly)},n);for(let e of[-1,1])$(`ellipse`,{cx:e*5,cy:-17,rx:3.6,ry:4.4,fill:`#fff`},n),$(`circle`,{cx:e*5,cy:-16.4,r:2.2,fill:`#1d1d2b`},n),$(`circle`,{cx:e*5+.8,cy:-17.4,r:.8,fill:`#fff`},n),$(`ellipse`,{cx:e*9.5,cy:-11,rx:2.4,ry:1.5,fill:`#ff6b9a`,opacity:.5},n);let r=Y.shop.hats.find(t=>t.id===e.hat);if(r){let e=$(`text`,{class:`wm-hat`,y:-29},n);e.textContent=r.icon}}placeHero(e,t,n){let r=gb(n),i=this.stand(e),a=this.stand(t),o=this.bend(e,t),s=pb(this.pos(e),this.pos(t),.5),[c,l]=mb(i,[o[0]+(i[0]+a[0])/2-s[0],o[1]+(i[1]+a[1])/2-s[1]],a,r);this.hero.setAttribute(`transform`,`translate(${c.toFixed(1)},${l.toFixed(1)})`),this.heroBody.setAttribute(`transform`,`translate(0,${(-Math.sin(Math.PI*n)*sb).toFixed(1)})`)}placeArrow(){let e=this.pending.length?null:Lh(this.c,this.done,this.at);if(this.arrow.classList.toggle(`hidden`,!e),!e)return;let[t,n]=this.pos(e);this.arrow.setAttribute(`transform`,`translate(${t},${n-(this.big(e)?22:0)})`)}updateReveal(e){if(!this.pending.length)return;let t=this.pending[0];if(!this.growing){if(this.wait-=e,this.wait>0)return;this.growing={t:0,paths:this.road(this.freshFrom,t,0),to:t},this.h.sound(`road`)}let n=this.growing;n.t+=e;let r=this.roadPath(this.freshFrom,t,gb(n.t/cb));for(let e of n.paths)e.setAttribute(`d`,r);n.t<cb||(this.pending.shift(),this.growing=null,this.wait=lb,this.render(),this.nodesLayer.querySelector(`[data-id="${t}"] .wm-bob`)?.classList.add(`pop`),this.burst(...this.pos(t)),this.h.sound(`open`))}burst(e,t){let n=[`#ff5c8a`,`#ffd23f`,`#5ee67a`,`#4fc3ff`,`#b388ff`,`#ffffff`];for(let r=0;r<26;r++){let i=Math.random()*Math.PI*2,a=60+Math.random()*90,o=$(`circle`,{r:2.5+Math.random()*2.5,fill:n[r%n.length]},this.fxLayer);this.sparks.push({el:o,x:e,y:t,vx:Math.cos(i)*a,vy:Math.sin(i)*a-60,life:.9+Math.random()*.4})}}updateSparks(e){this.sparks=this.sparks.filter(t=>(t.life-=e,t.life<=0?(t.el.remove(),!1):(t.vy+=220*e,t.x+=t.vx*e,t.y+=t.vy*e,t.el.setAttribute(`cx`,t.x.toFixed(1)),t.el.setAttribute(`cy`,t.y.toFixed(1)),t.el.setAttribute(`opacity`,Math.min(1,t.life*2).toFixed(2)),!0)))}},yb=class{release;yaw=0;idle=1/0;constructor(e){this.release=e}reset(){this.yaw=0,this.idle=1/0}steer(e,t,n){let r=Math.hypot(e.x,e.y)>.1;if(this.idle=r?0:this.idle+n,!r&&this.idle>=this.release&&(this.yaw=Math.round(t/(Math.PI/2))*(Math.PI/2)),this.yaw===0)return e;let i=Math.cos(this.yaw),a=Math.sin(this.yaw);return{x:e.x*i-e.y*a,y:e.x*a+e.y*i}}},bb=[`bunny`,`hedgehog`,`squirrel`,`frog`,`bird`,`turtle`,`mole`,`penguin`,`chick`],xb=`prygunchik.settings`,Sb=4,Cb=90,wb=30,Tb=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},Eb=e=>{let t=Math.min(1,Math.max(0,e));return t*t*t*(t*(6*t-15)+10)},Db=(e,t)=>t<=1?e:(t**e-1)/(t-1),Ob=[new qo,new qo];function kb(){let e={volume:Y.audio.defaultVolume,music:!0,difficulty:`veryEasy`,graphics:`pretty`,graphicsAuto:!0,fps:!1,fullscreen:!0,lang:Gv(navigator.languages??[navigator.language])};try{let t=localStorage.getItem(xb);if(t)return{...e,...JSON.parse(t)}}catch{}return e}function Ab(e){try{localStorage.setItem(xb,JSON.stringify(e))}catch{}}var jb=class{fixedLevel;allOpen;renderer;post;postPinned=!1;fpsTime=0;fpsFrames=0;fpsStrikes=0;fpsWarm=0;fpsEl;stats;pacer=new sy;scene=new zn;rig;env;input=new Hy;audio=new Tp;particles=new Ap;hud;menu;shop;worldMap;profileDirty=!1;profileSavedAt=0;trailTimer=0;padDir=null;player;level=null;state=`menu`;pausedFrom=`playing`;settings;difficulty;seed=Qm();levelIndex=1;coins=0;time=0;simTime=0;victoryTimer=0;lockedSoundAt=-1/0;tour=null;tours=[];portalRevealed=!1;where={kind:`map`};profile;zip=null;cave=0;shellFade=0;caveCam=new av;stick=new yb(Y.cave.camera.stickRelease);warp=null;fresh=null;intro=null;envFocus=new z;farMonsters=[];king=null;thorns=null;camForward=new R(0,-1);story=null;storyFade=-1;revealWait=0;finale=null;storyTap=!1;camDir=new z;lastFrame=performance.now();container;viewW=0;viewH=0;boxA={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0};boxB={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0};constructor(e,t,n=!1){this.fixedLevel=t,this.allOpen=n,this.profile=n?{...Wy(),done:Kp.nodes.map(e=>e.id),coins:9999}:Gy();let r=$v();r&&document.body.classList.add(`is-touch`),Ly()&&document.body.classList.add(`native`),`requestFullscreen`in document.documentElement&&document.body.classList.add(`can-fullscreen`),(matchMedia(`(display-mode: fullscreen), (display-mode: standalone)`).matches||navigator.standalone)&&document.body.classList.add(`standalone`),window.addEventListener(`touchstart`,()=>document.body.classList.add(`is-touch`),{once:!0,passive:!0}),Bf.low=r,Yd(),this.renderer=new fd({antialias:!0,alpha:!1,powerPreference:`high-performance`}),this.renderer.toneMapping=7,this.renderer.toneMappingExposure=Y.look.exposure,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,r?1.5:2)),this.container=e,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.info.autoReset=!1,this.stats=new ly(this.renderer.getContext()),e.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),ay(!0)}),this.renderer.domElement.addEventListener(`webglcontextrestored`,()=>ay(!1)),this.rig=new By(1),this.syncSize(),this.env=new Pv(this.scene,r),this.post=new Gp(this.renderer,this.scene,this.rig.camera,r),this.post.setSize(this.viewW,this.viewH),this.postPinned=!1,this.env.onBubble=(e,t)=>{this.state===`playing`&&Math.hypot(e-this.player.pos.x,t-this.player.pos.z)<7&&this.audio.bubble()},this.scene.add(this.particles.group),this.settings=kb(),qv(this.settings.lang),this.difficulty=this.settings.difficulty,this.audio.volume=this.settings.volume,this.audio.musicOn=this.settings.music,this.player=new yh({jump:(e,t)=>{let n={x:t.pos.x,y:t.pos.y-t.half.y,z:t.pos.z};if(e===`ground`)this.audio.jump(),this.particles.dust(n,6);else if(e===`double`)this.audio.doubleJump(),this.particles.sparkle(n,[16777215,16766688,11766015],12);else{this.audio.climb();let e={x:t.pos.x-t.wallNX*.45,y:t.pos.y+.3,z:t.pos.z-t.wallNZ*.45};this.particles.sparkle(e,[16765503,16777215,16748459],10)}},land:(e,t)=>{this.audio.land(e);let n={x:t.pos.x,y:t.pos.y-t.half.y+.05,z:t.pos.z};if(this.particles.dust(n,6+Math.round(e*10)),e>.45){this.particles.ring(n,16777215,.9+e*.8);let t=this.level?.theme;t&&t.decor!==`crystal`&&t.floor!==`lava`&&this.particles.petals(n,[...t.flowers,...t.decorColors],3+Math.round(e*5))}},bounce:e=>{this.audio.boing();let t=this.level?.trampolines.find(t=>t.solid===e);t?.bounce(),t&&this.particles.ring({x:t.group.position.x,y:e.maxY,z:t.group.position.z},9430015,2.4)},fall:e=>{this.audio.splash(),this.particles.poof({x:e.pos.x,y:-4.3,z:e.pos.z},[16777215,15985151,14742783])},lavaHop:e=>{this.audio.sizzle(),this.particles.poof({x:e.pos.x,y:-4.3,z:e.pos.z},[16777215,16769732,16765088]),this.particles.sparkle(e.pos,[16757594,16769658,16777215],14)},respawn:e=>{this.audio.respawn(),this.particles.sparkle(e.pos,[16765503,16777215,6219432],20)},bonusEnd:()=>this.audio.bonusEnd()}),this.scene.add(this.player.model.root),this.hud=new Vv(e),new ey(this.hud.root,this.input);let i=document.createElement(`div`);i.className=`rotate-hint`,i.innerHTML=`<span>📱</span>`,i.addEventListener(`click`,()=>document.body.classList.add(`rotate-dismissed`)),e.appendChild(i),this.fpsEl=document.createElement(`div`),this.fpsEl.className=`fps-meter`,this.fpsEl.hidden=!this.settings.fps,e.appendChild(this.fpsEl),Ry(()=>{if(this.state===`playing`||this.state===`map`)this.setPaused(!0);else if(this.state===`paused`)this.setPaused(!1);else if(this.state===`shop`)this.closeShop();else if(this.state!==`transition`&&this.state!==`victory`)return!1;return!0}),this.hud.pauseButton.addEventListener(`click`,()=>{this.hud.pauseButton.blur(),this.setPaused(!0)}),this.worldMap=new vb(e,Kp,{enter:e=>this.enterNode(e),house:()=>this.openShop(),story:()=>{this.state===`map`&&(this.audio.click(),this.startStory())},pause:()=>this.setPaused(!0),sound:e=>{e===`hop`?this.audio.jump():e===`locked`?this.audio.locked():e===`road`?this.audio.grow():this.audio.checkpoint()}}),this.menu=new Zv(e,this.settings,{start:()=>this.startGame(),resume:()=>this.setPaused(!1),fullscreen:e=>e?this.enterFullscreen():Nb(),newSeed:()=>{this.seed=Qm(),this.difficulty=this.settings.difficulty,this.loadLevel(),this.setPaused(!1)},toMap:()=>{this.setPaused(!1),this.goToMap()},resetProgress:()=>{this.profile={...this.profile,done:[],endless:0,last:void 0},this.saveProfile(),this.setPaused(!1),this.fixedLevel||(this.where={kind:`map`},this.loadLevel())},settingsChanged:e=>{this.audio.setVolume(e.volume),this.audio.setMusic(e.music),Ab(e),this.fpsEl.hidden=!e.fps,e.lang!==Kv()&&(qv(e.lang),Yv(this.container),this.state===`paused`&&this.menu.setPauseInfo(...this.pauseInfo()))}});let a=()=>this.audio.unlock();window.addEventListener(`pointerdown`,a),window.addEventListener(`pointerdown`,()=>{this.state===`story`&&(this.storyTap=!0)}),window.addEventListener(`keydown`,a),window.addEventListener(`touchend`,a),window.addEventListener(`click`,a),this.shop=new Xy(e,{tap:e=>this.shopTap(e),close:()=>this.closeShop()}),Yv(e),zy(e=>{this.audio.sleep(e),e&&(this.flushProfile(),(this.state===`playing`||this.state===`map`)&&this.setPaused(!0))}),window.addEventListener(`resize`,()=>this.syncSize()),this.applyLook(),this.loadLevel()}run(){let e=performance.now(),t=n=>{if(requestAnimationFrame(t),this.stats.vsync(n-e),e=n,!this.pacer.shouldDraw(n,this.stats.hz))return;let r=this.lastFrame,i=Math.min(Math.max((n-this.lastFrame)/1e3,0),1/20);if(this.lastFrame=Math.max(n,this.lastFrame),!(i<=0))try{this.syncSize(),this.update(i),this.pacer.drawn(n,n-r,this.stats.hz),this.watchFps(n-r),this.meterFps(n-r),this.worldMap.covers||(this.renderer.info.reset(),this.stats.beginGpu(),this.settings.graphics===`pretty`?this.post.render():this.renderer.render(this.scene,this.rig.camera),this.stats.endGpu())}catch(e){ry(String(e))}};requestAnimationFrame(t)}syncSize(){let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;e<=0||t<=0||e===this.viewW&&t===this.viewH||(this.viewW=e,this.viewH=t,this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.post?.setSize(e,t))}watchFps(e){let t=Y.look.post;if(this.settings.graphics!==`pretty`||!this.settings.graphicsAuto||this.postPinned||this.state!==`playing`||e<=0||e>1e3){this.fpsTime=this.fpsFrames=0,this.fpsWarm=t.warmSeconds;return}if(this.fpsWarm>0){this.fpsWarm-=e/1e3;return}if(this.fpsTime+=e/1e3,this.fpsFrames++,this.fpsTime<t.checkSeconds)return;let n=this.fpsFrames/this.fpsTime;this.fpsTime=this.fpsFrames=0,this.fpsStrikes=n<t.minFps?this.fpsStrikes+1:0,!(this.fpsStrikes<2)&&(this.settings.graphics=`fast`,Ab(this.settings),this.menu.refreshSettings())}meterFps(e){if(!this.stats.frame(e)||!this.settings.fps)return;let t=this.stats;this.fpsEl.textContent=[`${Math.round(t.fps)} FPS`,Jv(`fps.worst`,{ms:Math.round(t.worstMs)}),...t.gpuMs>=0?[Jv(`fps.gpu`,{ms:t.gpuMs.toFixed(1)})]:[],...t.hz?[Jv(`fps.hz`,{hz:t.hz,div:this.pacer.divisor})]:[],this.settings.graphics===`pretty`?Jv(`fps.pretty`):Jv(`fps.fast`)].join(` · `)}get inMap(){return!this.fixedLevel&&this.where.kind===`map`}levelData(){if(this.fixedLevel)return this.fixedLevel.build(this.levelIndex,this.difficulty);if(this.where.kind===`map`)return zh(this.difficulty);let e=this.where.node;if(`design`in e.level&&Dh[e.level.design])return Eh(Dh[e.level.design],this.difficulty,this.levelIndex);let t=`procedural`in e.level?e.level.procedural:{},n=e.endless?this.profile.endless:0,r=t.themes?.length?t.themes[n%t.themes.length]:void 0;return Kh(this.seed,(t.levelIndex??1)+n,this.difficulty,{extras:t.extras,theme:r})}saveProfile(){this.allOpen||Ky(this.profile)}goToMap(){this.fixedLevel||this.where.kind===`map`||(this.where.node.endless||(this.profile.last=this.where.node.id),this.saveProfile(),this.where={kind:`map`},this.loadLevel())}loadLevel(){this.level?.dispose(),this.particles.clear();let e=this.levelData();this.level=new iv(e,this.difficulty),this.env.setTheme(this.level.theme),this.post.setTheme(this.level.theme),this.player.lavaFloor=this.level.theme.floor===`lava`,this.scene.add(this.level.group),this.warmShaders(),this.hud.map.setLevel(e),this.player.reset(this.level.start),this.fixedLevel?.heroStomps&&(this.player.stomps=this.fixedLevel.heroStomps),this.simTime=0,this.level.stepPlatforms(0);for(let e of this.level.moving)e.resetDelta();this.tour=null,this.tours=[],this.portalRevealed=!1,this.revealWait=0,this.finale=null,this.warp&&this.menu.fade(!1),this.warp=null,this.zip=null,this.cave=0,this.shellFade=0,this.caveCam.reset(),this.stick.reset(),this.coins=0,this.hud.setCoins(this.shownCoins),this.player.perks.startShield&&this.where.kind===`node`&&!this.fixedLevel&&(this.player.bonuses.shield=Y.shop.startShield),this.inMap&&this.player.face(0),this.rig.snap(this.player.pos),this.updateMonsterStats(!0),this.king=null,this.thorns=null,!this.inMap&&this.level.winsLeft>0&&!this.level.monsters.some(e=>e.data.type===`king`)&&(this.king=new Ud(this.level.start),this.level.group.add(this.king.group),this.thorns=new af,this.level.group.add(this.thorns.group)),this.state===`menu`?this.endIntro():this.inMap?(this.endIntro(),this.openMap()):this.startIntro(!1)}openMap(){this.state=`map`,this.hud.show(!1),this.worldMap.open(this.profile,this.fresh??void 0),this.fresh=null,this.input.flush()}startStory(){this.worldMap.close(),this.hud.show(!1),this.state=`story`;let e=uh(this.profile.skin);this.story=new Cp(this.particles,this.audio,{body:e.body,belly:e.belly,hat:this.profile.hat}),this.scene.add(this.story.group),this.storyFade=-1,this.input.flush()}updateStory(e){let t=this.story;this.time+=e,t.update(e),t.aim(this.rig.camera),this.particles.update(e),this.env.update(this.time,t.focus,this.rig.camera);let n=this.input.consumeAny()||this.storyTap;this.storyTap=!1;let r=n&&t.t>Y.story.skipAfter;this.storyFade<0&&(r||t.finished)&&(this.storyFade=0,this.menu.fade(!0)),this.storyFade>=0&&(this.storyFade+=e)>.45&&(t.dispose(),this.story=null,this.particles.clear(),this.profile.storySeen=!0,this.saveProfile(),this.rig.snap(this.player.pos),this.menu.fade(!1),this.openMap())}startIntro(e){let t=Y.intro,n=this.level.bounds,r=this.rig.setOverview(n),i=Math.tan(Mt.degToRad(Y.camera.fov/2))*Math.max(1,this.rig.camera.aspect),a=Math.hypot((n.minX+n.maxX)/2-this.player.pos.x,(n.minZ+n.maxZ)/2-this.player.pos.z),o=e?t.rise:0;this.intro={t:0,rise:o,zoomAt:o+t.hold,dist:r,reach:a+r*i+10},this.applyIntro()}skipIntro(){let e=this.intro;e.zoomAt=Math.min(e.zoomAt,Math.max(e.t,e.rise))}endIntro(){this.intro=null,this.rig.focus(0,0),this.env.widen(0,0),this.hud.map.canvas.classList.remove(`away`)}updateIntro(e){this.intro&&(this.intro.t+=e,this.intro.t>=this.intro.zoomAt+Y.intro.zoom?this.endIntro():this.applyIntro())}applyIntro(){let e=this.intro,t=e.dist/Math.hypot(Y.camera.offset.y,Y.camera.offset.z),n=1,r=1;if(e.t<e.rise){let i=e.t/e.rise;n=Db(Eb(i),t),r=Tb(i)}else if(e.t>=e.zoomAt){let i=(e.t-e.zoomAt)/Y.intro.zoom;n=Db(1-Eb(i),t),r=1-Tb(i)}this.rig.focus(n,r),this.env.widen(n*e.dist,n*e.reach),this.hud.map.canvas.classList.toggle(`away`,n>.3)}get introLocked(){return!!this.intro&&this.intro.t<this.intro.zoomAt}updateMonsterStats(e=!1){let t=this.level;if(!t.portal)return;let n=t.winsLeft;this.hud.setMonsters(t.totalWins-n,t.totalWins);let r=n===0;e?t.portal.setOpen(r,!0):r&&!t.portal.open&&!this.portalRevealed&&(t.monsters.some(e=>e.data.type===`king`)?(this.portalRevealed=!0,this.revealWait=Y.boss.freeStay+.8):this.startReveal())}startReveal(){let e=this.level.portal;this.portalRevealed=!0,this.startTour({look:e.center.add(new z(0,1,0)),arrive:()=>{e.setOpen(!0),e.setHighlight(!0),this.audio.checkpoint(),this.particles.confettiBurst(e.center,100)},leave:()=>e.setHighlight(!1)})}startTour(e){if(this.tour){this.tours.push(e);return}let t=Y.reveal,n=e.look.distanceTo(this.player.pos);this.tour={...e,t:0,fly:Math.min(t.flyTime[1],Math.max(t.flyTime[0],n/t.flySpeed)),arrived:!1,left:!1,aimed:!1}}updateTour(e){let t=this.tour;if(!t||this.intro)return;t.aimed||(t.aimed=!0,this.rig.setFocus(t.look,this.level.staticSolids));let n=Y.reveal;t.t+=e;let r=n.delay+t.fly,i=r+n.hold;if(!t.arrived&&t.t>=r&&(t.arrived=!0,t.arrive()),t.t<r){let e=(t.t-n.delay)/t.fly;this.rig.focus(Tb((e-.2)/.8),Tb(e/.6))}else if(t.t<i)this.rig.focus(1,1);else{t.left||(t.left=!0,t.leave?.());let e=1-Tb((t.t-i)/n.back);if(this.rig.focus(e,e),e<=0){this.tour=null;let e=this.tours.shift();e&&this.startTour(e)}}}startGame(){if(this.state===`menu`){if(this.audio.unlock(),this.enterFullscreen(),this.audio.click(),this.state=`playing`,this.menu.showStart(!1),document.activeElement?.blur(),this.inMap)return this.profile.storySeen||this.fixedLevel?this.openMap():this.startStory();this.hud.show(!0),this.input.flush(),this.startIntro(!0)}}pauseInfo(){return[this.fixedLevel?Jv(`where.level`,{name:this.fixedLevel.name,n:this.levelIndex}):this.where.kind===`map`?Jv(`where.map`,{done:this.profile.done.length,all:Kp.nodes.length}):`${this.where.node.id} · seed ${this.seed}`,`${oy(this.renderer)} · ${this.stats.describe(this.renderer.info)}`]}setPaused(e){if(e&&(this.state===`playing`||this.state===`map`)&&!this.warp){this.pausedFrom=this.state,this.state=`paused`,this.worldMap.frozen=!0;let e=!this.fixedLevel;this.menu.showPause(!0,...this.pauseInfo(),{map:e&&!this.inMap,seed:!this.inMap,reset:e&&this.inMap&&!this.allOpen}),this.audio.duck(!0)}else!e&&this.state===`paused`&&(this.state=this.pausedFrom,this.worldMap.frozen=!1,this.menu.showPause(!1),this.audio.duck(!1),this.input.flush(),this.enterFullscreen())}enterFullscreen(){document.body.classList.contains(`is-touch`)&&!Ly()&&this.settings.fullscreen&&Mb()}update(e){this.input.poll();let t=this.level;if(this.state===`story`)return this.updateStory(e);this.input.consumePause()&&(this.state===`playing`||this.state===`map`?this.setPaused(!0):this.state===`paused`?this.setPaused(!1):this.state===`shop`&&this.closeShop()),this.state===`shop`&&this.padMenu(e=>this.shop.command(e===`go`?`tap`:e)),this.state===`map`&&this.padMenu(e=>this.worldMap.command(e)),(this.state===`map`||this.state===`transition`)&&this.worldMap.update(e),this.state===`menu`&&this.input.consumeAny()&&!document.querySelector(`.about.open`)&&this.startGame();let n=this.state===`playing`||this.state===`victory`||this.state===`menu`;if(this.state!==`paused`&&(this.time+=e),n){let n=this.state===`playing`,r=this.stick.steer(n?this.input.move():{x:0,y:0},this.rig.yaw,e),i=n&&this.input.consumeJump();this.introLocked&&(i||r.x!==0||r.y!==0)&&this.skipIntro();let a=n&&!this.tour&&!this.introLocked&&!this.warp&&!this.player.riding;if(a&&!this.player.respawning){let e=t.ziplines.find(e=>e.canGrab(this.player));e&&(this.zip=e,this.player.startRide(e.line),this.audio.zip())}a||(r={x:0,y:0},i=!1);let o=this.player.pos,s=Y.lava.monsterDistance+this.player.half.x;this.player.dangerNear=t.monsters.some(e=>e.alive&&Math.hypot(e.pos.x-o.x,e.pos.z-o.z)<s);let c=Y.physics.fixedStep,l=Math.max(1,Math.ceil(e/c-1e-6)),u=e/l;for(let e=0;e<l;e++)this.simTime+=u,t.stepPlatforms(this.simTime),this.player.step(u,r,i,t.solids),i=!1;this.player.isFinite()||(ry(`player position NaN — reset`),this.player.reset(this.player.checkpoint),this.rig.snap(this.player.pos));let d=this.player.pos,f=!!this.intro&&this.rig.focusWeight>.15;this.farMonsters.length=0;for(let n of t.monsters){if(!n.alive){n.afterlife(e);continue}let r=Math.hypot(n.pos.x-d.x,n.pos.z-d.z),i=r<Cb;i&&n.update(e,this.player,t.staticSolids),n.cue&&=(r<12&&n.cue===`pop`?this.audio.pop():r<12&&this.audio.squeak(),null);let a=f&&r>=wb;n.group.visible=i&&!a,a&&this.farMonsters.push(n)}t.showMonsterDots(this.farMonsters),a&&this.checkContacts();for(let n of t.teleports){let t=n.update(e,this.time,a&&!this.player.respawning?this.player:null);t>=0&&!this.warp&&this.startWarp(n,t)}this.updateWarp(e),this.zip&&(this.zip.setHandle(this.player.riding?this.player.rideT:this.zip.line.start),this.player.riding||(this.zip=null,this.audio.unzip()))}else this.input.consumeJump();if(this.state===`victory`){if(this.victoryTimer+=e,Math.floor((this.victoryTimer-e)/.7)!==Math.floor(this.victoryTimer/.7)&&this.victoryTimer<3){let e=t.portal.center;this.particles.confettiBurst(new z(e.x+(Math.random()-.5)*4,e.y,e.z+1),70)}let n=this.victoryTimer>1.5&&this.input.consumeAny();(this.victoryTimer>Sb||n)&&this.nextLevel()}else this.input.consumeAny();if(this.state!==`paused`){t.update(e,this.time,this.player.pos),t.updateCritters(e,this.player.pos);for(let e of t.critters)e.vanishing&&this.particles.sparkle(e.pos,[16777215,16774048,16763104],12);this.king&&(this.rig.camera.getWorldDirection(this.camDir),Math.hypot(this.camDir.x,this.camDir.z)>.1&&this.camForward.set(this.camDir.x,this.camDir.z).normalize(),this.king.update(e,this.player.pos,this.camForward,t.staticSolids,(e,t,n)=>{this.particles.sparkle({x:e,y:t+.1,z:n},[8157336,10196916,12104908],8),Math.hypot(e-this.player.pos.x,n-this.player.pos.z)<14&&this.audio.plop(),this.thorns?.sprout(e,t,n)})),this.thorns?.update(e,this.player.pos,this.camForward,(e,t,n)=>{this.thornBloom(e,t,n,!0),this.addCoins(Y.king.thorns.coins,`pop`),this.audio.coin()});let n=this.player,r=this.state===`playing`&&!n.respawning;t.coins.update(e,this.time,n,r&&n.bonuses.magnet>0,t.staticSolids,r,(e,t,n)=>{this.addCoins(1,`pop`),this.audio.coin(),this.particles.sparkle({x:e,y:t,z:n},[16765503,16774048,16777215],8)}),this.player.animate(e,()=>this.audio.step()),this.player.model.tick(e,Math.hypot(n.vel.x,n.vel.z));let i=this.profile.trail;if(i&&!this.fixedLevel&&this.state===`playing`&&Math.hypot(n.vel.x,n.vel.y,n.vel.z)>1.5&&(this.trailTimer-=e,this.trailTimer<=0&&(this.trailTimer=.035,this.particles.trail(i,{x:n.pos.x,y:n.pos.y-n.half.y*.3,z:n.pos.z},this.time))),this.profileDirty&&this.time-this.profileSavedAt>2&&this.flushProfile(),this.particles.update(e),this.state===`playing`){let t=Object.keys(this.player.bonuses).filter(e=>this.player.bonuses[e]>0).map(e=>[e,this.player.bonuses[e]]);if(this.hud.setBonuses(t,this.player.perks.bonusTime),t.length&&Math.random()<e*8){let e=t[Math.floor(Math.random()*t.length)][0];this.particles.sparkle(this.player.pos,[ip[e],16777215],2)}}}(this.state===`playing`||this.state===`victory`||this.state===`transition`&&!this.inMap)&&this.updateMap(),this.state===`playing`&&(this.finale&&this.updateFinale(e),this.revealWait>0&&(this.revealWait-=e)<=0&&this.startReveal(),this.updateIntro(e),this.updateTour(e));let r=this.state===`menu`?0:t.caveDepth(this.player.pos);this.cave+=(r-this.cave)*Math.min(1,e*Y.cave.fadeSpeed),this.env.setCave(this.cave);let i=this.state===`menu`?null:this.caveCam.update(t.data.caves,this.player.pos);if(this.state===`menu`)this.rig.showcase(e,this.player.pos,this.inMap?1:-1);else if(this.state===`shop`)this.rig.showcase(e,this.player.pos,1);else{let n=r>0||i?t.openSolids:t.staticSolids;this.rig.update(e,this.player.pos,this.player.vel,this.player.onWall,n,i)}let a=this.state!==`menu`&&t.hidesHero(this.rig.camera.position,this.player.pos);this.shellFade+=(+!!a-this.shellFade)*Math.min(1,e*Y.cave.fadeSpeed),t.setCaveView(this.shellFade);let o=this.tour?this.envFocus.lerpVectors(this.player.pos,this.tour.look,this.rig.focusWeight):this.player.pos;this.env.update(this.time,o,this.rig.camera)}updateMap(){let e=this.level,t=this.player;this.hud.map.update({player:{x:t.pos.x,z:t.pos.z,yaw:t.yaw},checkpoints:e.checkpoints.map(e=>({x:e.pos.x,z:e.pos.z,active:e.active})),bonuses:e.bonuses.filter(e=>e.active).map(e=>({x:e.group.position.x,z:e.group.position.z,type:e.data.type})),monsters:e.monsters.filter(e=>e.alive).map(e=>({x:e.pos.x,z:e.pos.z})),buttons:e.buttons.filter(e=>!e.pressed).map(e=>({x:e.pos.x,z:e.pos.z})),goalOpen:e.portal?.open??!1},this.time)}heroBox(){bd(this.player,this.boxA),this.boxA.minX+=.08,this.boxA.maxX-=.08,this.boxA.minZ+=.08,this.boxA.maxZ-=.08}checkContacts(){let e=this.level,t=this.player;if(t.respawning)return;for(let n of e.bonuses)!n.active||n.group.position.distanceTo(t.pos)>1.25||(n.active=!1,n.group.visible=!1,t.giveBonus(n.data.type),this.audio.bonus(),this.particles.sparkle(n.group.position,[ip[n.data.type],16777215],30),this.particles.confetti.emit({count:30,pos:n.group.position,colors:[ip[n.data.type],16777215],speed:[3,6],up:3,life:[.6,1.1],size:[.08,.14],gravity:8,drag:2}));this.heroBox();let n=t.vel.y<.5,r=t.pos.y-t.half.y,i=!1;for(let a of e.monsters.slice()){if(!a.alive||!a.exposed||(bd(a,this.boxB),!xd(this.boxA,this.boxB)))continue;if(n&&r>a.pos.y-.05){this.stompMonster(a),i=!0;continue}let o=t.power;if(o===`crush`){this.stompMonster(a);continue}if(!a.harmful&&a.bumps){t.bump(a.pos.x,a.pos.z)&&this.audio.land(.3);continue}if(o===`push`){let e=a.pos.x-t.pos.x,n=a.pos.z-t.pos.z,r=Math.hypot(e,n)||1;a.shove(e/r,n/r);continue}if(!a.harmful){cf(t,this.boxA,a,this.boxB,e.solids)&&this.audio.nudge(),this.heroBox();continue}let s=t.hurt(a.pos.x,a.pos.z);if(s===`shield`)this.audio.shieldPop(),this.particles.sparkle(t.pos,[ip.shield,16777215],24);else if(s===`hurt`){this.audio.hurt();let n=Math.min(this.coins,Y.player.coinsLostOnHit);n>0&&(this.addCoins(-n,`lose`),e.coins.drop(t.pos.x,t.pos.y,t.pos.z,n)),this.particles.sparkle(t.pos,[16777215,16766688],12)}}i&&t.stomp();for(let n of e.checkpoints)n.check(t.pos)&&(t.checkpoint.copy(n.spawn),this.audio.checkpoint(),this.particles.confetti.emit({count:40,pos:n.flagWorldPos,colors:[16735370,16765503,6219432,5227519],speed:[3,6],up:4,life:[.8,1.4],size:[.1,.16],gravity:8,drag:2}));for(let n of e.buttons)if(!n.pressed&&n.touches(t)){n.pressDown(),this.audio.press(),this.particles.sparkle(n.pos,[6219386,16777215,16765503],24);for(let t of e.gates)t.data.button===n.data.id&&this.startTour({look:t.center,arrive:()=>{e.openGate(t),this.hud.map.openGate(t.data),this.audio.grow(),this.particles.sparkle(t.center,[16777215,16765503,9425919],30)}})}e.portal?.contains(t.pos)&&(e.portal.open?this.win():this.lockedSound())}addCoins(e,t){this.coins+=e,this.fixedLevel||(this.profile.coins=Math.max(0,this.profile.coins+e),this.profileDirty=!0),this.hud.setCoins(this.shownCoins,t)}get shownCoins(){return this.fixedLevel?this.coins:this.profile.coins}flushProfile(){this.profileDirty&&(this.profileDirty=!1,this.profileSavedAt=this.time,this.saveProfile())}applyLook(){let e=this.profile,t=uh(e.skin);this.player.model.setSkin(t.body,t.belly),this.player.model.setHat(e.hat),this.player.perks=this.fixedLevel?ch:lh(e)}openShop(){let e=this.level.house;this.state=`shop`,this.worldMap.setVisible(!1),this.player.teleport(e.porch),this.player.face(0),this.rig.snap(this.player.pos),this.shop.open(this.profile),this.input.flush(),this.audio.doorbell()}closeShop(){this.state===`shop`&&(this.shop.close(),this.flushProfile(),this.input.flush(),this.state=`map`,this.worldMap.setVisible(!0))}padMenu(e){let t=this.input.padDir(),n=Math.abs(t.x)>.6?t.x>0?`right`:`left`:Math.abs(t.y)>.6?t.y>0?`up`:`down`:null;n&&n!==this.padDir&&e(n),this.padDir=n,this.input.consumePadPress()&&e(`go`)}shopTap(e){let t=oh(this.profile,e);t===`poor`?(this.audio.locked(),this.shop.shake(e)):t!==`none`&&(this.applyLook(),this.profileDirty=!0,this.flushProfile(),t===`bought`?(this.audio.fanfare(),this.particles.confettiBurst(this.player.pos.clone().add(new z(0,1,0)),90),this.player.dancing=!0,window.setTimeout(()=>{this.player.dancing=!1,this.state===`shop`&&this.player.face(0)},1500)):(this.audio.click(),this.particles.sparkle(this.player.pos,[16777215,16765503,16748459],16)),this.shop.refresh())}startWarp(e,t){this.warp={t:0,pair:e,to:t,moved:!1},this.menu.fade(!0),this.audio.teleport(),this.particles.sparkle(this.player.pos,[e.data.color,16777215],24)}updateWarp(e){let t=this.warp;if(!t)return;t.t+=e;let n=Y.teleport.fade;if(!t.moved&&t.t>=n){t.moved=!0;let e=t.pair.pads[t.to].pos;this.player.teleport(e),t.pair.arrived(t.to),this.rig.snap(this.player.pos),this.menu.fade(!1),this.audio.arrive(),this.particles.sparkle(this.player.pos,[t.pair.data.color,16777215,16765503],30)}t.t>=n*2&&(this.warp=null)}lockedSound(){this.time-this.lockedSoundAt>1&&(this.lockedSoundAt=this.time,this.audio.locked())}enterNode(e){let t=Kp.nodes.find(t=>t.id===e);t&&this.state===`map`&&(this.state=`transition`,this.audio.bonus(),this.menu.fade(!0),window.setTimeout(()=>{this.worldMap.close(),this.where={kind:`node`,node:t},t.endless||(this.profile.last=e),this.saveProfile(),this.seed=Qm(),this.difficulty=this.settings.difficulty,this.loadLevel(),this.hud.show(!0),this.menu.fade(!1),this.state=`playing`,this.input.flush()},500))}stompMonster(e){let t=e.onStomp();if(t!==`none`){if(t===`hit`)this.audio.kingCry(),this.rig.shake(.5),this.particles.sparkle(e.pos,[16765503,16777215,16747720],24),this.addCoins(Y.monster.stompCoins,`pop`),this.updateMonsterStats();else if(t===`shell`)this.audio.shell(),this.rig.shake(.25),this.particles.sparkle(e.pos,[16777215,e.color],10);else{if(t===`split`){for(let t of e.split())this.level.addMonster(t);this.audio.split(),this.particles.confettiBurst(e.pos,30)}this.defeat(e,t!==`split`&&e.data.type!==`king`),e.data.type===`king`&&this.startFinale(e)}}}startFinale(e){this.finale={t:0,boss:e,spawned:0,confetti:0},this.audio.fanfare(),this.player.dancing=!0,this.player.vel.x=this.player.vel.z=0}updateFinale(e){let t=this.finale,n=Y.boss;for(t.t+=e;t.spawned<n.finaleCritters&&t.t>n.finaleFirst+t.spawned*n.finaleGap;){let e=bb[t.spawned%bb.length],r=t.spawned/n.finaleCritters*Math.PI*2,i=t.boss.pos.clone();i.x+=Math.cos(r)*n.finaleRing,i.z+=Math.sin(r)*n.finaleRing,this.level.addCritter(new zd(e,i,t.boss.data.zone,`stay`)),this.particles.sparkle(i,[16777215,16774048,16763104],10),t.spawned%2==0&&this.audio.rescue(),t.spawned++}if(t.t<n.finaleDance&&t.t>t.confetti*.55){let e=this.player.pos;this.particles.confettiBurst(new z(e.x+(Math.random()-.5)*6,e.y+2.5,e.z+(Math.random()-.5)*4),60),t.confetti++}t.t>n.finaleDance&&this.player.dancing&&(this.player.dancing=!1),t.t>n.finaleDance&&t.spawned>=n.finaleCritters&&(this.finale=null)}warmShaders(){let e=this.level,t=new V,n=new Set(e.monsters.map(e=>Md[e.data.type])),r={minX:0,maxX:0,minZ:0,maxZ:0};for(let e of n)t.add(new zd(e,new z,r).group);this.scene.add(t),this.shareShadowDepth();try{this.settings.graphics===`pretty`?this.post.compile():this.renderer.compile(this.scene,this.rig.camera)}finally{this.scene.remove(t)}}shareShadowDepth(){this.scene.traverse(e=>{let t=e;t.isInstancedMesh&&t.castShadow&&!t.customDepthMaterial&&(t.customDepthMaterial=Ob[+!!t.instanceColor])})}defeat(e,t=!0){let n=this.player;e.poof(),t&&(this.level.addCritter(new zd(Md[e.data.type],e.pos,e.data.zone)),this.audio.rescue()),this.addCoins(Y.monster.stompCoins,`pop`),this.audio.poof(),this.rig.shake(.6),this.particles.poof(e.pos,[16777215,16773371,15260927]),this.particles.ring({x:e.pos.x,y:e.pos.y-.4,z:e.pos.z},16774048,2),this.particles.sparkle(e.pos,[16765503,16774048],16),n.grow(),this.audio.grow(),this.particles.sparkle(n.pos,[6219432,16777215,16765503],20),this.updateMonsterStats();let r=this.level.refreshGloom();r.length&&this.audio.bloom();for(let e of r.slice(0,8))this.particles.sparkle(e,[16765503,6219432,16747720,8177919],10);this.king&&(this.level.winsLeft===0?(this.king.flee(),this.audio.kingCry(),this.thorns?.count&&!r.length&&this.audio.bloom(),this.thorns?.bloomAll((e,t,n)=>this.thornBloom(e,t,n,!1))):(this.king.angry(),this.audio.kingGrumble()))}thornBloom(e,t,n,r){this.particles.poof({x:e,y:t+.4,z:n},[8379530,16777215,16751820]),this.particles.sparkle({x:e,y:t+.5,z:n},[16765503,16744118,16777215],8),r&&this.audio.thornBloom()}win(){this.state=`victory`,this.victoryTimer=0,this.player.dancing=!0,this.player.vel.x=this.player.vel.z=0,this.audio.fanfare(),this.rig.shake(.4),this.particles.confettiBurst(this.level.portal.center,160),this.hud.setBonuses([],1),this.input.flush()}nextLevel(){this.state=`transition`,this.menu.fade(!0),window.setTimeout(()=>{this.fixedLevel?this.levelIndex++:this.where.kind===`node`&&this.completeNode(this.where.node),this.difficulty=this.settings.difficulty,this.state=`playing`,this.loadLevel(),this.menu.fade(!1),this.input.flush()},500)}completeNode(e){let t=new Set(this.profile.done);t.has(e.id)||(this.fresh={node:e.id,unlocks:Mh(Kp,t,e.id)},this.profile.done.push(e.id)),e.endless&&this.profile.endless++,e.endless||(this.profile.last=e.id),this.saveProfile(),this.where={kind:`map`}}};function Mb(){let e=document.documentElement;!document.fullscreenElement&&e.requestFullscreen&&e.requestFullscreen({navigationUI:`hide`}).then(()=>screen.orientation.lock?.(`landscape`)).catch(()=>{})}function Nb(){document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}var Pb=document.getElementById(`app`);async function Fb(){}Fb().then(e=>{let t=new jb(Pb,e,!1);t.run(),window.__game=t});export{vy as t};