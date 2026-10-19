(()=>{var Ug=Object.defineProperty;var Ng=(i,e,t)=>e in i?Ug(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Yl=(i,e,t)=>Ng(i,typeof e!="symbol"?e+"":e,t);var Qo="169";var Og=0,Fd=1,Fg=2;var np=1,Bg=2,mn=3,sn=0,ri=1,ni=2,nn=0,qs=1,Zs=2,Bd=3,zd=4,jh=5,fs=100,zg=101,kg=102,Vg=103,Hg=104,$h=200,Zh=201,Gg=202,Wg=203,Rc=204,Ic=205,Xg=206,qg=207,Yg=208,jg=209,$g=210,Zg=211,Kg=212,Jg=213,Qg=214,Lc=0,Dc=1,Uc=2,Ks=3,Nc=4,Oc=5,fo=6,Fc=7,sp=0,e0=1,t0=2,zn=0,Kh=1,Jh=2,Qh=3,ta=4,i0=5,eu=6,tu=7,kd="attached",n0="detached",rp=300,Js=301,Qs=302,Bc=303,zc=304,el=306,rn=1e3,Zi=1001,Hr=1002,Kt=1003,iu=1004;var Gs=1005;var si=1006,Or=1007;var Ni=1008;var an=1009,ap=1010,op=1011,Gr=1012,nu=1013,ms=1014,Oi=1015,yi=1016,su=1017,ru=1018,er=1020,lp=35902,cp=1021,hp=1022,Fi=1023,up=1024,dp=1025,Ys=1026,tr=1027,tl=1028,au=1029,ou=1030,lu=1031;var il=1033,ao=33776,oo=33777,lo=33778,co=33779,kc=35840,Vc=35841,Hc=35842,Gc=35843,Wc=36196,Xc=37492,qc=37496,Yc=37808,jc=37809,$c=37810,Zc=37811,Kc=37812,Jc=37813,Qc=37814,eh=37815,th=37816,ih=37817,nh=37818,sh=37819,rh=37820,ah=37821,ho=36492,oh=36494,lh=36495,fp=36283,ch=36284,hh=36285,uh=36286;var ir=2300,nr=2301,jl=2302,Vd=2400,Hd=2401,Gd=2402,s0=2500;var pp=0,nl=1,ia=2,r0=3200,a0=3201;var mp=0,o0=1,tn="",It="srgb",Ht="srgb-linear",cu="display-p3",sl="display-p3-linear",po="linear",Ct="srgb",mo="rec709",go="p3";var Cs=7680;var Wd=519,l0=512,c0=513,h0=514,gp=515,u0=516,d0=517,f0=518,p0=519,dh=35044;var Xd="300 es",gn=2e3,vo=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=1234567,Fr=Math.PI/180,sr=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function hu(i,e){return(i%e+e)%e}function m0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function g0(i,e,t){return i!==e?(t-i)/(e-i):0}function Br(i,e,t){return(1-t)*i+t*e}function v0(i,e,t,n){return Br(i,e,1-Math.exp(-t*n))}function y0(i,e=1){return e-Math.abs(hu(i,e*2)-e)}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function M0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function b0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function w0(i){i!==void 0&&(qd=i);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(i){return i*Fr}function A0(i){return i*sr}function E0(i){return(i&i-1)===0&&i!==0}function C0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function P0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function R0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Sn={DEG2RAD:Fr,RAD2DEG:sr,generateUUID:Bi,clamp:Wt,euclideanModulo:hu,mapLinear:m0,inverseLerp:g0,lerp:Br,damp:v0,pingpong:y0,smoothstep:x0,smootherstep:_0,randInt:M0,randFloat:b0,randFloatSpread:S0,seededRandom:w0,degToRad:T0,radToDeg:A0,isPowerOfTwo:E0,ceilPowerOfTwo:C0,floorPowerOfTwo:P0,setQuaternionFromProperEuler:R0,normalize:Tt,denormalize:$i},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],x=s[1],v=s[4],M=s[7],L=s[2],A=s[5],E=s[8];return r[0]=a*y+o*x+l*L,r[3]=a*m+o*v+l*A,r[6]=a*g+o*M+l*E,r[1]=c*y+h*x+u*L,r[4]=c*m+h*v+u*A,r[7]=c*g+h*M+u*E,r[2]=d*y+f*x+p*L,r[5]=d*m+f*v+p*A,r[8]=d*g+f*M+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$l=new ot;function vp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I0(){let i=Wr("canvas");return i.style.display="block",i}var Yd={};function uo(i){i in Yd||(Yd[i]=!0,console.warn(i))}function L0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function D0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function U0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var jd=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$d=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[Ht]:{transfer:po,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[It]:{transfer:Ct,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sl]:{transfer:po,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($d),fromReference:i=>i.applyMatrix3(jd)},[cu]:{transfer:Ct,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($d),fromReference:i=>i.applyMatrix3(jd).convertLinearToSRGB()}},N0=new Set([Ht,sl]),gt={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!N0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ar[e].toReference,s=Ar[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ar[i].primaries},getTransfer:function(i){return i===tn?po:Ar[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ar[e].luminanceCoefficients)}};function js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,fh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Wr("canvas")),Ps.width=e.width,Ps.height=e.height;let n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=js(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var F0=0,$t=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=si,a=Ni,o=Fi,l=an,c=i.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Bi(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=rp;$t.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,L=(g+1)/2,A=(h+d)/4,E=(u+y)/4,I=(p+m)/4;return v>M&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=E/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yo=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==p){let m=1-o,g=l*d+c*f+h*p+u*y,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let L=Math.sqrt(v),A=Math.atan2(L,g*x);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}let M=o*x;if(l=l*m+d*M,c=c*m+f*M,h=h*m+p*M,u=u*m+y*M,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new P,Zd=new ui,ai=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qi):qi.fromBufferAttribute(r,a),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Ia.subVectors(this.max,Er),Rs.subVectors(e.a,Er),Is.subVectors(e.b,Er),Ls.subVectors(e.c,Er),In.subVectors(Is,Rs),Ln.subVectors(Ls,Is),as.subVectors(Rs,Ls);let t=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-as.z,as.y,In.z,0,-In.x,Ln.z,0,-Ln.x,as.z,0,-as.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-as.y,as.x,0];return!Ql(t,Rs,Is,Ls,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Rs,Is,Ls,Ia))?!1:(La.crossVectors(In,Ln),t=[La.x,La.y,La.z],Ql(t,Rs,Is,Ls,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cn=[new P,new P,new P,new P,new P,new P,new P,new P],qi=new P,Ra=new ai,Rs=new P,Is=new P,Ls=new P,In=new P,Ln=new P,as=new P,Er=new P,Ia=new P,La=new P,os=new P;function Ql(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var B0=new ai,Cr=new P,ec=new P,Jt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(ec)),this.expandByPoint(Cr.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new P,tc=new P,Da=new P,Dn=new P,ic=new P,Ua=new P,nc=new P,Ai=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=Dn.dot(this.direction),l=-Dn.dot(Da),c=Dn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tc).addScaledVector(Da,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){ic.subVectors(t,e),Ua.subVectors(n,e),nc.crossVectors(ic,Ua);let a=this.direction.dot(nc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);let l=o*this.direction.dot(Ua.crossVectors(Dn,Ua));if(l<0)return null;let c=o*this.direction.dot(ic.cross(Dn));if(c<0||l+c>a)return null;let h=-o*Dn.dot(nc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,p,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,y,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,y=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,k0)}lookAt(e,t,n){let s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Un.crossVectors(n,wi),Un.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Un.crossVectors(n,wi)),Un.normalize(),Na.crossVectors(wi,Un),s[0]=Un.x,s[4]=Na.x,s[8]=wi.x,s[1]=Un.y,s[5]=Na.y,s[9]=wi.y,s[2]=Un.z,s[6]=Na.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],x=n[3],v=n[7],M=n[11],L=n[15],A=s[0],E=s[4],I=s[8],j=s[12],_=s[1],S=s[5],W=s[9],F=s[13],O=s[2],G=s[6],H=s[10],ie=s[14],Z=s[3],ve=s[7],xe=s[11],de=s[15];return r[0]=a*A+o*_+l*O+c*Z,r[4]=a*E+o*S+l*G+c*ve,r[8]=a*I+o*W+l*H+c*xe,r[12]=a*j+o*F+l*ie+c*de,r[1]=h*A+u*_+d*O+f*Z,r[5]=h*E+u*S+d*G+f*ve,r[9]=h*I+u*W+d*H+f*xe,r[13]=h*j+u*F+d*ie+f*de,r[2]=p*A+y*_+m*O+g*Z,r[6]=p*E+y*S+m*G+g*ve,r[10]=p*I+y*W+m*H+g*xe,r[14]=p*j+y*F+m*ie+g*de,r[3]=x*A+v*_+M*O+L*Z,r[7]=x*E+v*S+M*G+L*ve,r[11]=x*I+v*W+M*H+L*xe,r[15]=x*j+v*F+M*ie+L*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15];return p*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],x=u*m*c-y*d*c+y*l*f-o*m*f-u*l*g+o*d*g,v=p*d*c-h*m*c-p*l*f+a*m*f+h*l*g-a*d*g,M=h*y*c-p*u*c+p*o*f-a*y*f-h*o*g+a*u*g,L=p*u*l-h*y*l-p*o*d+a*y*d+h*o*m-a*u*m,A=t*x+n*v+s*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=x*E,e[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*g-n*d*g)*E,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*g+n*l*g)*E,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,e[4]=v*E,e[5]=(h*m*r-p*d*r+p*s*f-t*m*f-h*s*g+t*d*g)*E,e[6]=(p*l*r-a*m*r-p*s*c+t*m*c+a*s*g-t*l*g)*E,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*E,e[8]=M*E,e[9]=(p*u*r-h*y*r-p*n*f+t*y*f+h*n*g-t*u*g)*E,e[10]=(a*y*r-p*o*r+p*n*c-t*y*c-a*n*g+t*o*g)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*E,e[12]=L*E,e[13]=(h*y*s-p*u*s+p*n*d-t*y*d-h*n*m+t*u*m)*E,e[14]=(p*o*s-a*y*s-p*n*l+t*y*l+a*n*m-t*o*m)*E,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,y=a*h,m=a*u,g=o*u,x=l*c,v=l*h,M=l*u,L=n.x,A=n.y,E=n.z;return s[0]=(1-(y+g))*L,s[1]=(f+M)*L,s[2]=(p-v)*L,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(p+v)*E,s[9]=(m-x)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yi.copy(this);let c=1/r,h=1/a,u=1/o;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=u,Yi.elements[9]*=u,Yi.elements[10]*=u,t.setFromRotationMatrix(Yi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(o===gn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===vo)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,p,y;if(o===gn)p=(a+r)*u,y=-2*u;else if(o===vo)p=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new P,Yi=new ke,z0=new P(0,0,0),k0=new P(1,1,1),Un=new P,Na=new P,wi=new P,Kd=new ke,Jd=new ui,zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,Qd=new P,Us=new ui,un=new ke,Oa=new P,Pr=new P,H0=new P,G0=new ui,ef=new P(1,0,0),tf=new P(0,1,0),nf=new P(0,0,1),sf={type:"added"},W0={type:"removed"},Ns={type:"childadded",child:null},sc={type:"childremoved",child:null},Pt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zi,n=new ui,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new ot}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Pr,Oa,this.up):un.lookAt(Oa,Pr,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(un),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new P(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=new P,dn=new P,rc=new P,fn=new P,Os=new P,Fs=new P,rf=new P,ac=new P,oc=new P,lc=new P,cc=new xt,hc=new xt,uc=new xt,Fn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ji.subVectors(e,t),s.cross(ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ji.subVectors(s,t),dn.subVectors(n,t),rc.subVectors(e,t);let a=ji.dot(ji),o=ji.dot(dn),l=ji.dot(rc),c=dn.dot(dn),h=dn.dot(rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,n,s){return ji.subVectors(n,t),dn.subVectors(e,t),ji.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),ji.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),Fs.subVectors(r,n),ac.subVectors(e,n);let l=Os.dot(ac),c=Fs.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,s);let h=Os.dot(oc),u=Fs.dot(oc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Os,a);lc.subVectors(e,r);let f=Os.dot(lc),p=Fs.dot(lc);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fs,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return rf.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(rf,o);let g=1/(m+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=hu(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dc(a,r,e+1/3),this.g=dc(a,r,e),this.b=dc(a,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Zl(e.r),this.g=Zl(e.g),this.b=Zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return gt.fromWorkingColorSpace(ii.copy(this),e),Math.round(Wt(ii.r*255,0,255))*65536+Math.round(Wt(ii.g*255,0,255))*256+Math.round(Wt(ii.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(ii.copy(this),t);let n=ii.r,s=ii.g,r=ii.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=It){gt.fromWorkingColorSpace(ii.copy(this),e);let t=ii.r,n=ii.g,s=ii.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Fa);let n=Br(Nn.h,Fa.h,t),s=Br(Nn.s,Fa.s,t),r=Br(Nn.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new be;be.NAMES=yp;var X0=0,Ei=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=qs,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Ic,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},oi=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new P,Ba=new ne,it=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}};var _o=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mo=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},q0=0,Ui=new ke,fc=new Pt,Bs=new P,Ti=new ai,Rr=new ai,jt=new P,Mt=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?Mo:_o)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Ti.min,Rr.min),Ti.expandByPoint(jt),jt.addVectors(Ti.max,Rr.max),Ti.expandByPoint(jt)):(Ti.expandByPoint(Rr.min),Ti.expandByPoint(Rr.max))}Ti.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),jt.add(Bs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,d=new ne,f=new ne,p=new ne,y=new P,m=new P;function g(I,j,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,j),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,j),p.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),o[I].add(y),o[j].add(y),o[_].add(y),l[I].add(m),l[j].add(m),l[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,j=x.length;I<j;++I){let _=x[I],S=_.start,W=_.count;for(let F=S,O=S+W;F<O;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new P,M=new P,L=new P,A=new P;function E(I){L.fromBufferAttribute(s,I),A.copy(L);let j=o[I];v.copy(j),v.sub(L.multiplyScalar(L.dot(j))).normalize(),M.crossVectors(A,j);let S=M.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,S)}for(let I=0,j=x.length;I<j;++I){let _=x[I],S=_.start,W=_.count;for(let F=S,O=S+W;F<O;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new it(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},af=new ke,ls=new Ai,za=new Jt,of=new P,ka=new P,Va=new P,Ha=new P,pc=new P,Ga=new P,lf=new P,Wa=new P,ht=class extends Pt{constructor(e=new Mt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pc.fromBufferAttribute(u,e),a?Ga.addScaledVector(pc,h):Ga.addScaledVector(pc.sub(t),h))}t.add(Ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(za.containsPoint(ls.origin)===!1&&(ls.intersectSphere(za,of)===null||ls.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(af.copy(r).invert(),ls.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,L=v;M<L;M+=3){let A=o.getX(M),E=o.getX(M+1),I=o.getX(M+2);s=Xa(this,g,e,n,c,h,u,A,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);s=Xa(this,a,e,n,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,L=v;M<L;M+=3){let A=M,E=M+1,I=M+2;s=Xa(this,g,e,n,c,h,u,A,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let x=m,v=m+1,M=m+2;s=Xa(this,a,e,n,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Y0(i,e,t,n,s,r,a,o){let l;if(e.side===ri?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===sn,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Va),i.getVertexPosition(c,Ha);let h=Y0(i,e,t,n,ka,Va,Ha,lf);if(h){let u=new P;Fn.getBarycoord(lf,ka,Va,Ha,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new ne)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new ne)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Fn.getNormal(ka,Va,Ha,d.normal),h.face=d,h.barycoord=u}return h}var Ci=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function p(y,m,g,x,v,M,L,A,E,I,j){let _=M/E,S=L/I,W=M/2,F=L/2,O=A/2,G=E+1,H=I+1,ie=0,Z=0,ve=new P;for(let xe=0;xe<H;xe++){let de=xe*S-F;for(let Qe=0;Qe<G;Qe++){let ft=Qe*_-W;ve[y]=ft*x,ve[m]=de*v,ve[g]=O,c.push(ve.x,ve.y,ve.z),ve[y]=0,ve[m]=0,ve[g]=A>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(Qe/E),u.push(1-xe/I),ie+=1}}for(let xe=0;xe<I;xe++)for(let de=0;de<E;de++){let Qe=d+de+G*xe,ft=d+de+G*(xe+1),se=d+(de+1)+G*(xe+1),ce=d+(de+1)+G*xe;l.push(Qe,ft,ce),l.push(ft,se,ce),Z+=6}o.addGroup(f,Z,j),f+=Z,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hi(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function j0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var jn={clone:rr,merge:hi},$0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},On=new P,cf=new ne,hf=new ne,Lt=class extends bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,cf,hf),t.subVectors(hf,cf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,ks=1,gh=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(zs,ks,e,t);s.layers=this.layers,this.add(s);let r=new Lt(zs,ks,e,t);r.layers=this.layers,this.add(r);let a=new Lt(zs,ks,e,t);a.layers=this.layers,this.add(a);let o=new Lt(zs,ks,e,t);o.layers=this.layers,this.add(o);let l=new Lt(zs,ks,e,t);l.layers=this.layers,this.add(l);let c=new Lt(zs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},So=class extends $t{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vh=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:nn});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=si),new gh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},mc=new P,K0=new P,J0=new ot,gi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||J0.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Jt,qa=new P,Vn=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],y=s[10],m=s[11],g=s[12],x=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-g).normalize(),n[1].setComponents(l+r,d+c,m+f,M+g).normalize(),n[2].setComponents(l+a,d+h,m+p,M+x).normalize(),n[3].setComponents(l-a,d-h,m-p,M-x).normalize(),n[4].setComponents(l-o,d-u,m-y,M-v).normalize(),t===gn)n[5].setComponents(l+o,d+u,m+y,M+v).normalize();else if(t===vo)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _p(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Q0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var li=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let x=g*d-a;for(let v=0;v<c;v++){let M=v*u-r;p.push(M,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let v=x+c*g,M=x+c*(g+1),L=x+1+c*(g+1),A=x+1+c*g;f.push(v,M,A),f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
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
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Jv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ox=`#define DISTANCE
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
}`,lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,_x=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mx=`#define PHONG
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
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Sx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Tx=`#define TOON
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
}`,Ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ex=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ix=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:iv,alphamap_pars_fragment:nv,alphatest_fragment:sv,alphatest_pars_fragment:rv,aomap_fragment:av,aomap_pars_fragment:ov,batching_pars_vertex:lv,batching_vertex:cv,begin_vertex:hv,beginnormal_vertex:uv,bsdfs:dv,iridescence_fragment:fv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:vv,clipping_planes_vertex:yv,color_fragment:xv,color_pars_fragment:_v,color_pars_vertex:Mv,color_vertex:bv,common:Sv,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Ev,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Rv,colorspace_pars_fragment:Iv,envmap_fragment:Lv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Uv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:qv,envmap_vertex:Ov,fog_vertex:Fv,fog_pars_vertex:Bv,fog_fragment:zv,fog_pars_fragment:kv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Yv,lights_toon_pars_fragment:jv,lights_phong_fragment:$v,lights_phong_pars_fragment:Zv,lights_physical_fragment:Kv,lights_physical_pars_fragment:Jv,lights_fragment_begin:Qv,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ry,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:uy,morphinstance_vertex:dy,morphcolor_vertex:fy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:vy,normal_fragment_maps:yy,normal_pars_fragment:xy,normal_pars_vertex:_y,normal_vertex:My,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Ey,packing:Cy,premultiplied_alpha_fragment:Py,project_vertex:Ry,dithering_fragment:Iy,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Oy,shadowmap_vertex:Fy,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:ky,skinning_vertex:Vy,skinnormal_vertex:Hy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:qy,transmission_fragment:Yy,transmission_pars_fragment:jy,uv_pars_fragment:$y,uv_pars_vertex:Zy,uv_vertex:Ky,worldpos_vertex:Jy,background_vert:Qy,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:ix,cube_vert:nx,cube_frag:sx,depth_vert:rx,depth_frag:ax,distanceRGBA_vert:ox,distanceRGBA_frag:lx,equirect_vert:cx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:xx,meshnormal_frag:_x,meshphong_vert:Mx,meshphong_frag:bx,meshphysical_vert:Sx,meshphysical_frag:wx,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:Ex,points_frag:Cx,shadow_vert:Px,shadow_frag:Rx,sprite_vert:Ix,sprite_frag:Lx},Ne={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},en={basic:{uniforms:hi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:hi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new be(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:hi([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:hi([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:hi([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new be(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:hi([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:hi([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:hi([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:hi([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:hi([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:hi([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:hi([Ne.common,Ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:hi([Ne.lights,Ne.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};en.physical={uniforms:hi([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ya={r:0,b:0,g:0},hs=new zi,Dx=new ke;function Ux(i,e,t,n,s,r,a){let o=new be(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function y(x){let v=!1,M=p(x);M===null?g(o,l):M&&M.isColor&&(g(M,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){let M=p(v);M&&(M.isCubeTexture||M.mapping===el)?(h===void 0&&(h=new ht(new Ci(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:rr(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(v.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(hs)),h.material.toneMapped=gt.getTransfer(M.colorSpace)!==Ct,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ht(new li(2,2),new At({name:"BackgroundMaterial",uniforms:rr(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Ya,xp(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:y,addToRenderList:m}}function Nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,S,W,F,O){let G=!1,H=u(F,W,S);r!==H&&(r=H,c(r.object)),G=f(_,F,W,O),G&&p(_,F,W,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(_,S,W,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,W){let F=W.wireframe===!0,O=n[_.id];O===void 0&&(O={},n[_.id]=O);let G=O[S.id];G===void 0&&(G={},O[S.id]=G);let H=G[F];return H===void 0&&(H=d(l()),G[F]=H),H}function d(_){let S=[],W=[],F=[];for(let O=0;O<t;O++)S[O]=0,W[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:W,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,S,W,F){let O=r.attributes,G=S.attributes,H=0,ie=W.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let xe=O[Z],de=G[Z];if(de===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),xe===void 0||xe.attribute!==de||de&&xe.data!==de.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function p(_,S,W,F){let O={},G=S.attributes,H=0,ie=W.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let xe=G[Z];xe===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor));let de={};de.attribute=xe,xe&&xe.data&&(de.data=xe.data),O[Z]=de,H++}r.attributes=O,r.attributesNum=H,r.index=F}function y(){let _=r.newAttributes;for(let S=0,W=_.length;S<W;S++)_[S]=0}function m(_){g(_,0)}function g(_,S){let W=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;W[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),O[_]!==S&&(i.vertexAttribDivisor(_,S),O[_]=S)}function x(){let _=r.newAttributes,S=r.enabledAttributes;for(let W=0,F=S.length;W<F;W++)S[W]!==_[W]&&(i.disableVertexAttribArray(W),S[W]=0)}function v(_,S,W,F,O,G,H){H===!0?i.vertexAttribIPointer(_,S,W,O,G):i.vertexAttribPointer(_,S,W,F,O,G)}function M(_,S,W,F){y();let O=F.attributes,G=W.getAttributes(),H=S.defaultAttributeValues;for(let ie in G){let Z=G[ie];if(Z.location>=0){let ve=O[ie];if(ve===void 0&&(ie==="instanceMatrix"&&_.instanceMatrix&&(ve=_.instanceMatrix),ie==="instanceColor"&&_.instanceColor&&(ve=_.instanceColor)),ve!==void 0){let xe=ve.normalized,de=ve.itemSize,Qe=e.get(ve);if(Qe===void 0)continue;let ft=Qe.buffer,se=Qe.type,ce=Qe.bytesPerElement,ge=se===i.INT||se===i.UNSIGNED_INT||ve.gpuType===nu;if(ve.isInterleavedBufferAttribute){let Ce=ve.data,$e=Ce.stride,Ye=ve.offset;if(Ce.isInstancedInterleavedBuffer){for(let Ke=0;Ke<Z.locationSize;Ke++)g(Z.location+Ke,Ce.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Ke=0;Ke<Z.locationSize;Ke++)m(Z.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ke=0;Ke<Z.locationSize;Ke++)v(Z.location+Ke,de/Z.locationSize,se,xe,$e*ce,(Ye+de/Z.locationSize*Ke)*ce,ge)}else{if(ve.isInstancedBufferAttribute){for(let Ce=0;Ce<Z.locationSize;Ce++)g(Z.location+Ce,ve.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)m(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ce=0;Ce<Z.locationSize;Ce++)v(Z.location+Ce,de/Z.locationSize,se,xe,de*ce,de/Z.locationSize*Ce*ce,ge)}}else if(H!==void 0){let xe=H[ie];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(Z.location,xe);break;case 3:i.vertexAttrib3fv(Z.location,xe);break;case 4:i.vertexAttrib4fv(Z.location,xe);break;default:i.vertexAttrib1fv(Z.location,xe)}}}}x()}function L(){I();for(let _ in n){let S=n[_];for(let W in S){let F=S[W];for(let O in F)h(F[O].object),delete F[O];delete S[W]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let W in S){let F=S[W];for(let O in F)h(F[O].object),delete F[O];delete S[W]}delete n[_.id]}function E(_){for(let S in n){let W=n[S];if(W[_.id]===void 0)continue;let F=W[_.id];for(let O in F)h(F[O].object),delete F[O];delete W[_.id]}}function I(){j(),a=!0,r!==s&&(r=s,c(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:j,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function Ox(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let y=0;y<u;y++)p+=h[y];for(let y=0;y<d.length;y++)t.update(p,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Fi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let I=E===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==an&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Oi&&!I)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gi,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,v=x*4,M=g.clippingState||null;l.value=M,M=h(p,d,v,f);for(let L=0;L!==v;++L)M[L]=t[L];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=f;v!==y;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function zx(i){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=Js:o===zc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bc||o===zc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vn=class extends bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,uf=[.125,.215,.35,.446,.526,.582],ps=20,gc=new vn,df=new be,vc=null,yc=0,xc=0,_c=!1,ds=(1+Math.sqrt(5))/2,Vs=1/ds,ff=[new P(-ds,Vs,0),new P(ds,Vs,0),new P(-Vs,0,ds),new P(Vs,0,ds),new P(0,ds,-Vs),new P(0,ds,Vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,yc,xc),this._renderer.xr.enabled=_c,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:yi,format:Fi,colorSpace:Ht,depthBuffer:!1},s=pf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(r)),this._blurMaterial=Vx(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,s){let o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(df),h.toneMapping=zn,h.autoClear=!1;let f=new oi({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),p=new ht(new Ci,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(df),y=!0);for(let g=0;g<6;g++){let x=g%3;x===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):x===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;ja(s,x*v,g>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(s-r-1)%ff.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),y=r/p,m=isFinite(r)?1+Math.floor(h*y):ps;m>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let g=[],x=0;for(let E=0;E<ps;++E){let I=E/y,j=Math.exp(-I*I/2);g.push(j),E===0?x+=j:E<m&&(x+=2*j)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let M=this._sizeLods[s],L=3*M*(s>v-Ws?s-v+Ws:0),A=4*(this._cubeSize-M);ja(t,L,A,3*M,2*M),l.setRenderTarget(t),l.render(u,gc)}};function kx(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+uf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ws?l=uf[a-i+Ws-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,y=3,m=2,g=1,x=new Float32Array(y*p*f),v=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let A=0;A<f;A++){let E=A%3*2/3-1,I=A>2?0:-1,j=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(j,y*p*A),v.set(d,m*p*A);let _=[A,A,A,A,A,A];M.set(_,g*p*A)}let L=new Mt;L.setAttribute("position",new it(x,y)),L.setAttribute("uv",new it(v,m)),L.setAttribute("faceIndex",new it(M,g)),e.push(L),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pf(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vx(i,e,t){let n=new Float32Array(ps),s=new P(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function mf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function gf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bc||l===zc,h=l===Js||l===Qs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new wo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let y=d.morphAttributes[p];for(let m=0,g=y.length;m<g;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let y=f[p];for(let m=0,g=y.length;m<g;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,M=x.length;v<M;v+=3){let L=x[v+0],A=x[v+1],E=x[v+2];d.push(L,A,A,E,E,L)}}else if(p!==void 0){let x=p.array;y=p.version;for(let v=0,M=x.length/3-1;v<M;v+=3){let L=v+0,A=v+1,E=v+2;d.push(L,A,A,E,E,L)}}else return;let m=new(vp(d)?Mo:_o)(d,1);m.version=y;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,y){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];for(let x=0;x<y.length;x++)t.update(g,n,y[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yx(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let j=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",j)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),y===!0&&(v=3);let M=o.attributes.position.count*v,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*L*4*u),E=new yo(A,M,L,u);E.type=Oi,E.needsUpdate=!0;let I=v*4;for(let _=0;_<u;_++){let S=m[_],W=g[_],F=x[_],O=M*L*4*_;for(let G=0;G<S.count;G++){let H=G*I;f===!0&&(s.fromBufferAttribute(S,G),A[O+H+0]=s.x,A[O+H+1]=s.y,A[O+H+2]=s.z,A[O+H+3]=0),p===!0&&(s.fromBufferAttribute(W,G),A[O+H+4]=s.x,A[O+H+5]=s.y,A[O+H+6]=s.z,A[O+H+7]=0),y===!0&&(s.fromBufferAttribute(F,G),A[O+H+8]=s.x,A[O+H+9]=s.y,A[O+H+10]=s.z,A[O+H+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ne(M,L)},n.set(o,d),o.addEventListener("dispose",j)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var To=class extends $t{constructor(e,t,n,s,r,a,o,l,c,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=ms),n===void 0&&h===tr&&(n=er),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mp=new $t,vf=new To(1,1),bp=new yo,Sp=new mh,wp=new So,yf=[],xf=[],_f=new Float32Array(16),Mf=new Float32Array(9),bf=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),qt(t,n)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),qt(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),qt(t,n)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vf.compareFunction=gp,r=vf):r=Mp,t.setTexture2D(e||r,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wp,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bp,s)}function p_(i){switch(i){case 5126:return $x;case 35664:return Zx;case 35665:return Kx;case 35666:return Jx;case 35674:return Qx;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return i_;case 35667:case 35671:return n_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function v_(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function x_(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b_(i,e){i.uniform1iv(this.addr,e)}function S_(i,e){i.uniform2iv(this.addr,e)}function w_(i,e){i.uniform3iv(this.addr,e)}function T_(i,e){i.uniform4iv(this.addr,e)}function A_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function C_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function R_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mp,r[a])}function I_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sp,r[a])}function L_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wp,r[a])}function D_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bp,r[a])}function U_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return v_;case 35666:return y_;case 35674:return x_;case 35675:return __;case 35676:return M_;case 5124:case 35670:return b_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return E_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Sf(i,e){i.seq.push(e),i.map[e.id]=e}function N_(i,e,t){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),a=Mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sf(t,c===void 0?new yh(o,i,e):new xh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new _h(o),Sf(t,u)),t=u}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);N_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var O_=37297,F_=0;function B_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function z_(i){let e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i),n;switch(e===t?n="":e===go&&t===mo?n="LinearDisplayP3ToLinearSRGB":e===mo&&t===go&&(n="LinearSRGBToLinearDisplayP3"),i){case Ht:case sl:return[n,"LinearTransferOETF"];case It:case cu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B_(i.getShaderSource(e),a)}else return s}function k_(i,e){let t=z_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function V_(i,e){let t;switch(e){case Kh:t="Linear";break;case Jh:t="Reinhard";break;case Qh:t="Cineon";break;case ta:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new P;function H_(){gt.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function W_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Nr(i){return i!==""}function Af(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(q_,j_)}var Y_=new Map;function j_(i,e){let t=pt[e];if(t===void 0){let n=Y_.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}var $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(i){return i.replace($_,Z_)}function Z_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===np?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function eM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sp:e="ENVMAP_BLENDING_MULTIPLY";break;case e0:e="ENVMAP_BLENDING_MIX";break;case t0:e="ENVMAP_BLENDING_ADD";break}return e}function tM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=K_(t),c=J_(t),h=Q_(t),u=eM(t),d=tM(t),f=G_(t),p=W_(r),y=s.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Nr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Nr).join(`
`),g.length>0&&(g+=`
`)):(m=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),g=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?pt.tonemapping_pars_fragment:"",t.toneMapping!==zn?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),H_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Mh(a),a=Af(a,t),a=Ef(a,t),o=Mh(o),o=Af(o,t),o=Ef(o,t),a=Cf(a),o=Cf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+m+a,M=x+g+o,L=wf(s,s.VERTEX_SHADER,v),A=wf(s,s.FRAGMENT_SHADER,M);s.attachShader(y,L),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(S){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(L).trim(),O=s.getShaderInfoLog(A).trim(),G=!0,H=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,A);else{let ie=Tf(s,L,"vertex"),Z=Tf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+W+`
`+ie+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||O==="")&&(H=!1);H&&(S.diagnostics={runnable:G,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(L),s.deleteShader(A),I=new $s(s,y),j=X_(s,y)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let j;this.getAttributes=function(){return j===void 0&&E(this),j};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,O_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=A,this}var nM=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sh(e),t.set(e,n)),n}},Sh=class{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}};function sM(i,e,t,n,s,r,a){let o=new xo,l=new bh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,W,F,O){let G=F.fog,H=O.geometry,ie=_.isMeshStandardMaterial?F.environment:null,Z=(_.isMeshStandardMaterial?t:e).get(_.envMap||ie),ve=Z&&Z.mapping===el?Z.image.height:null,xe=y[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=de!==void 0?de.length:0,ft=0;H.morphAttributes.position!==void 0&&(ft=1),H.morphAttributes.normal!==void 0&&(ft=2),H.morphAttributes.color!==void 0&&(ft=3);let se,ce,ge,Ce;if(xe){let Q=en[xe];se=Q.vertexShader,ce=Q.fragmentShader}else se=_.vertexShader,ce=_.fragmentShader,l.update(_),ge=l.getVertexShaderID(_),Ce=l.getFragmentShaderID(_);let $e=i.getRenderTarget(),Ye=O.isInstancedMesh===!0,Ke=O.isBatchedMesh===!0,lt=!!_.map,oe=!!_.matcap,D=!!Z,Pe=!!_.aoMap,fe=!!_.lightMap,Y=!!_.bumpMap,_e=!!_.normalMap,we=!!_.displacementMap,Ae=!!_.emissiveMap,T=!!_.metalnessMap,b=!!_.roughnessMap,X=_.anisotropy>0,re=_.clearcoat>0,he=_.dispersion>0,ae=_.iridescence>0,De=_.sheen>0,pe=_.transmission>0,Ue=X&&!!_.anisotropyMap,st=re&&!!_.clearcoatMap,ue=re&&!!_.clearcoatNormalMap,Ee=re&&!!_.clearcoatRoughnessMap,He=ae&&!!_.iridescenceMap,Ge=ae&&!!_.iridescenceThicknessMap,Be=De&&!!_.sheenColorMap,rt=De&&!!_.sheenRoughnessMap,et=!!_.specularMap,bt=!!_.specularColorMap,k=!!_.specularIntensityMap,Oe=pe&&!!_.transmissionMap,ee=pe&&!!_.thicknessMap,R=!!_.gradientMap,U=!!_.alphaMap,C=_.alphaTest>0,N=!!_.alphaHash,z=!!_.extensions,q=zn;_.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(q=i.toneMapping);let K={shaderID:xe,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:ce,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ke,batchingColor:Ke&&O._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&O.instanceColor!==null,instancingMorph:Ye&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$e===null?i.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:Ht,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:oe,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:ve,aoMap:Pe,lightMap:fe,bumpMap:Y,normalMap:_e,displacementMap:f&&we,emissiveMap:Ae,normalMapObjectSpace:_e&&_.normalMapType===o0,normalMapTangentSpace:_e&&_.normalMapType===mp,metalnessMap:T,roughnessMap:b,anisotropy:X,anisotropyMap:Ue,clearcoat:re,clearcoatMap:st,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:he,iridescence:ae,iridescenceMap:He,iridescenceThicknessMap:Ge,sheen:De,sheenColorMap:Be,sheenRoughnessMap:rt,specularMap:et,specularColorMap:bt,specularIntensityMap:k,transmission:pe,transmissionMap:Oe,thicknessMap:ee,gradientMap:R,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:U,alphaTest:C,alphaHash:N,combine:_.combine,mapUv:lt&&m(_.map.channel),aoMapUv:Pe&&m(_.aoMap.channel),lightMapUv:fe&&m(_.lightMap.channel),bumpMapUv:Y&&m(_.bumpMap.channel),normalMapUv:_e&&m(_.normalMap.channel),displacementMapUv:we&&m(_.displacementMap.channel),emissiveMapUv:Ae&&m(_.emissiveMap.channel),metalnessMapUv:T&&m(_.metalnessMap.channel),roughnessMapUv:b&&m(_.roughnessMap.channel),anisotropyMapUv:Ue&&m(_.anisotropyMap.channel),clearcoatMapUv:st&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&m(_.sheenRoughnessMap.channel),specularMapUv:et&&m(_.specularMap.channel),specularColorMapUv:bt&&m(_.specularColorMap.channel),specularIntensityMapUv:k&&m(_.specularIntensityMap.channel),transmissionMapUv:Oe&&m(_.transmissionMap.channel),thicknessMapUv:ee&&m(_.thicknessMap.channel),alphaMapUv:U&&m(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(lt||U),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:q,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ni,flipSided:_.side===ri,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:z&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&_.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return K.vertexUv1s=c.has(1),K.vertexUv2s=c.has(2),K.vertexUv3s=c.has(3),c.clear(),K}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let W in _.defines)S.push(W),S.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(v(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){let S=y[_.type],W;if(S){let F=en[S];W=jn.clone(F.uniforms)}else W=_.uniforms;return W}function A(_,S){let W;for(let F=0,O=h.length;F<O;F++){let G=h[F];if(G.cacheKey===S){W=G,++W.usedTimes;break}}return W===void 0&&(W=new iM(i,S,_,r),h.push(W)),W}function E(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function j(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:L,acquireProgram:A,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:j}}function rM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function aM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function If(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,p,y,m){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:y,group:m},i[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=y,g.group=m),e++,g}function o(u,d,f,p,y,m){let g=a(u,d,f,p,y,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(u,d,f,p,y,m){let g=a(u,d,f,p,y,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||aM),n.length>1&&n.sort(d||Rf),s.length>1&&s.sort(d||Rf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function oM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new If,i.set(n,[a])):s>=r.length?(a=new If,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new be};break;case"SpotLight":t={position:new P,direction:new P,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function cM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hM=0;function uM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dM(i){let e=new lM,t=cM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,x=0,v=0,M=0,L=0,A=0,E=0;c.sort(uM);for(let j=0,_=c.length;j<_;j++){let S=c[j],W=S.color,F=S.intensity,O=S.distance,G=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=W.r*F,u+=W.g*F,d+=W.b*F;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],F);E++}else if(S.isDirectionalLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ie=S.shadow,Z=t.get(S);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=H,f++}else if(S.isSpotLight){let H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(W).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[y]=H;let ie=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,ie.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[y]=ie.matrix,S.castShadow){let Z=t.get(S);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=G,M++}y++}else if(S.isRectAreaLight){let H=e.get(S);H.color.copy(W).multiplyScalar(F),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=H,m++}else if(S.isPointLight){let H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){let ie=S.shadow,Z=t.get(S);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,Z.shadowCameraNear=ie.camera.near,Z.shadowCameraFar=ie.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=S.shadow.matrix,v++}n.point[p]=H,p++}else if(S.isHemisphereLight){let H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(F),H.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[g]=H,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,I.directionalLength=f,I.pointLength=p,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=E,n.version=hM++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){let v=c[g];if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(v.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Lf(i){let e=new dM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function fM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Lf(i),e.set(s,[o])):r>=a.length?(o=new Lf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wh=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Th=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gM(i,e,t){let n=new Vn,s=new ne,r=new ne,a=new xt,o=new wh({depthPacking:a0}),l=new Th,c={},h=t.maxTextureSize,u={[sn]:ri,[ri]:sn,[ni]:ni},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mt;p.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ht(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=np;let g=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let j=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),W=i.state;W.setBlending(nn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let F=g!==mn&&this.type===mn,O=g===mn&&this.type!==mn;for(let G=0,H=A.length;G<H;G++){let ie=A[G],Z=ie.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ve=Z.getFrameExtents();if(s.multiply(ve),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ve.x),s.x=r.x*ve.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ve.y),s.y=r.y*ve.y,Z.mapSize.y=r.y)),Z.map===null||F===!0||O===!0){let de=this.type!==mn?{minFilter:Kt,magFilter:Kt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Bt(s.x,s.y,de),Z.map.texture.name=ie.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let xe=Z.getViewportCount();for(let de=0;de<xe;de++){let Qe=Z.getViewport(de);a.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),W.viewport(a),Z.updateMatrices(ie,de),n=Z.getFrustum(),M(E,I,Z.camera,ie,this.type)}Z.isPointLightShadow!==!0&&this.type===mn&&x(Z,I),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(j,_,S)};function x(A,E){let I=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,I,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,I,f,y,null)}function v(A,E,I,j){let _=null,S=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)_=S;else if(_=I.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let W=_.uuid,F=E.uuid,O=c[W];O===void 0&&(O={},c[W]=O);let G=O[F];G===void 0&&(G=_.clone(),O[F]=G,E.addEventListener("dispose",L)),_=G}if(_.visible=E.visible,_.wireframe=E.wireframe,j===mn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let W=i.properties.get(_);W.light=I}return _}function M(A,E,I,j,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===mn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let F=e.update(A),O=A.material;if(Array.isArray(O)){let G=F.groups;for(let H=0,ie=G.length;H<ie;H++){let Z=G[H],ve=O[Z.materialIndex];if(ve&&ve.visible){let xe=v(A,ve,j,_);A.onBeforeShadow(i,A,E,I,F,xe,Z),i.renderBufferDirect(I,null,F,xe,A,Z),A.onAfterShadow(i,A,E,I,F,xe,Z)}}}else if(O.visible){let G=v(A,O,j,_);A.onBeforeShadow(i,A,E,I,F,G,null),i.renderBufferDirect(I,null,F,G,A,null),A.onAfterShadow(i,A,E,I,F,G,null)}}let W=A.children;for(let F=0,O=W.length;F<O;F++)M(W[F],E,I,j,_)}function L(A){A.target.removeEventListener("dispose",L);for(let I in c){let j=c[I],_=A.target.uuid;_ in j&&(j[_].dispose(),delete j[_])}}}var vM={[Lc]:Dc,[Uc]:fo,[Nc]:Fc,[Ks]:Oc,[Dc]:Lc,[fo]:Uc,[Fc]:Nc,[Oc]:Ks};function yM(i){function e(){let k=!1,Oe=new xt,ee=null,R=new xt(0,0,0,0);return{setMask:function(U){ee!==U&&!k&&(i.colorMask(U,U,U,U),ee=U)},setLocked:function(U){k=U},setClear:function(U,C,N,z,q){q===!0&&(U*=z,C*=z,N*=z),Oe.set(U,C,N,z),R.equals(Oe)===!1&&(i.clearColor(U,C,N,z),R.copy(Oe))},reset:function(){k=!1,ee=null,R.set(-1,0,0,0)}}}function t(){let k=!1,Oe=!1,ee=null,R=null,U=null;return{setReversed:function(C){Oe=C},setTest:function(C){C?ge(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(C){ee!==C&&!k&&(i.depthMask(C),ee=C)},setFunc:function(C){if(Oe&&(C=vM[C]),R!==C){switch(C){case Lc:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Oc:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}R=C}},setLocked:function(C){k=C},setClear:function(C){U!==C&&(i.clearDepth(C),U=C)},reset:function(){k=!1,ee=null,R=null,U=null}}}function n(){let k=!1,Oe=null,ee=null,R=null,U=null,C=null,N=null,z=null,q=null;return{setTest:function(K){k||(K?ge(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(K){Oe!==K&&!k&&(i.stencilMask(K),Oe=K)},setFunc:function(K,Q,te){(ee!==K||R!==Q||U!==te)&&(i.stencilFunc(K,Q,te),ee=K,R=Q,U=te)},setOp:function(K,Q,te){(C!==K||N!==Q||z!==te)&&(i.stencilOp(K,Q,te),C=K,N=Q,z=te)},setLocked:function(K){k=K},setClear:function(K){q!==K&&(i.clearStencil(K),q=K)},reset:function(){k=!1,Oe=null,ee=null,R=null,U=null,C=null,N=null,z=null,q=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,p=!1,y=null,m=null,g=null,x=null,v=null,M=null,L=null,A=new be(0,0,0),E=0,I=!1,j=null,_=null,S=null,W=null,F=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,H=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ie)[1]),G=H>=1):ie.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),G=H>=2);let Z=null,ve={},xe=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Qe=new xt().fromArray(xe),ft=new xt().fromArray(de);function se(k,Oe,ee,R){let U=new Uint8Array(4),C=i.createTexture();i.bindTexture(k,C),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<ee;N++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,R,0,i.RGBA,i.UNSIGNED_BYTE,U):i.texImage2D(Oe+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,U);return C}let ce={};ce[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),r.setFunc(Ks),fe(!1),Y(Fd),ge(i.CULL_FACE),D(nn);function ge(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function Ce(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function $e(k,Oe){return h[k]!==Oe?(i.bindFramebuffer(k,Oe),h[k]=Oe,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Oe),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ye(k,Oe){let ee=d,R=!1;if(k){ee=u.get(Oe),ee===void 0&&(ee=[],u.set(Oe,ee));let U=k.textures;if(ee.length!==U.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let C=0,N=U.length;C<N;C++)ee[C]=i.COLOR_ATTACHMENT0+C;ee.length=U.length,R=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,R=!0);R&&i.drawBuffers(ee)}function Ke(k){return f!==k?(i.useProgram(k),f=k,!0):!1}let lt={[fs]:i.FUNC_ADD,[zg]:i.FUNC_SUBTRACT,[kg]:i.FUNC_REVERSE_SUBTRACT};lt[Vg]=i.MIN,lt[Hg]=i.MAX;let oe={[$h]:i.ZERO,[Zh]:i.ONE,[Gg]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[$g]:i.SRC_ALPHA_SATURATE,[Yg]:i.DST_COLOR,[Xg]:i.DST_ALPHA,[Wg]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[jg]:i.ONE_MINUS_DST_COLOR,[qg]:i.ONE_MINUS_DST_ALPHA,[Zg]:i.CONSTANT_COLOR,[Kg]:i.ONE_MINUS_CONSTANT_COLOR,[Jg]:i.CONSTANT_ALPHA,[Qg]:i.ONE_MINUS_CONSTANT_ALPHA};function D(k,Oe,ee,R,U,C,N,z,q,K){if(k===nn){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(ge(i.BLEND),p=!0),k!==jh){if(k!==y||K!==I){if((m!==fs||v!==fs)&&(i.blendEquation(i.FUNC_ADD),m=fs,v=fs),K)switch(k){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case Bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,x=null,M=null,L=null,A.set(0,0,0),E=0,y=k,I=K}return}U=U||Oe,C=C||ee,N=N||R,(Oe!==m||U!==v)&&(i.blendEquationSeparate(lt[Oe],lt[U]),m=Oe,v=U),(ee!==g||R!==x||C!==M||N!==L)&&(i.blendFuncSeparate(oe[ee],oe[R],oe[C],oe[N]),g=ee,x=R,M=C,L=N),(z.equals(A)===!1||q!==E)&&(i.blendColor(z.r,z.g,z.b,q),A.copy(z),E=q),y=k,I=!1}function Pe(k,Oe){k.side===ni?Ce(i.CULL_FACE):ge(i.CULL_FACE);let ee=k.side===ri;Oe&&(ee=!ee),fe(ee),k.blending===qs&&k.transparent===!1?D(nn):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let R=k.stencilWrite;a.setTest(R),R&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){j!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),j=k)}function Y(k){k!==Og?(ge(i.CULL_FACE),k!==_&&(k===Fd?i.cullFace(i.BACK):k===Fg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),_=k}function _e(k){k!==S&&(G&&i.lineWidth(k),S=k)}function we(k,Oe,ee){k?(ge(i.POLYGON_OFFSET_FILL),(W!==Oe||F!==ee)&&(i.polygonOffset(Oe,ee),W=Oe,F=ee)):Ce(i.POLYGON_OFFSET_FILL)}function Ae(k){k?ge(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function T(k){k===void 0&&(k=i.TEXTURE0+O-1),Z!==k&&(i.activeTexture(k),Z=k)}function b(k,Oe,ee){ee===void 0&&(Z===null?ee=i.TEXTURE0+O-1:ee=Z);let R=ve[ee];R===void 0&&(R={type:void 0,texture:void 0},ve[ee]=R),(R.type!==k||R.texture!==Oe)&&(Z!==ee&&(i.activeTexture(ee),Z=ee),i.bindTexture(k,Oe||ce[k]),R.type=k,R.texture=Oe)}function X(){let k=ve[Z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(k){Qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Qe.copy(k))}function Be(k){ft.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ft.copy(k))}function rt(k,Oe){let ee=l.get(Oe);ee===void 0&&(ee=new WeakMap,l.set(Oe,ee));let R=ee.get(k);R===void 0&&(R=i.getUniformBlockIndex(Oe,k.name),ee.set(k,R))}function et(k,Oe){let R=l.get(Oe).get(k);o.get(Oe)!==R&&(i.uniformBlockBinding(Oe,R,k.__bindingPointIndex),o.set(Oe,R))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,ve={},h={},u=new WeakMap,d=[],f=null,p=!1,y=null,m=null,g=null,x=null,v=null,M=null,L=null,A=new be(0,0,0),E=0,I=!1,j=null,_=null,S=null,W=null,F=null,Qe.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ge,disable:Ce,bindFramebuffer:$e,drawBuffers:Ye,useProgram:Ke,setBlending:D,setMaterial:Pe,setFlipSided:fe,setCullFace:Y,setLineWidth:_e,setPolygonOffset:we,setScissorTest:Ae,activeTexture:T,bindTexture:b,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:he,texImage2D:Ee,texImage3D:He,updateUBOMapping:rt,uniformBlockBinding:et,texStorage2D:st,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:De,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ue,scissor:Ge,viewport:Be,reset:bt}}function xM(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function _M(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function MM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Ah(i,e,t,n){let s=bM(n);switch(t){case cp:return i*e;case up:return i*e;case dp:return i*e*2;case tl:return i*e/s.components*s.byteLength;case au:return i*e/s.components*s.byteLength;case ou:return i*e*2/s.components*s.byteLength;case lu:return i*e*2/s.components*s.byteLength;case hp:return i*e*3/s.components*s.byteLength;case Fi:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Gc:return Math.max(i,16)*Math.max(e,8)/4;case kc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case Wc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case oh:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fp:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hh:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bM(i){switch(i){case an:case ap:return{byteLength:1,components:1};case Gr:case op:case yi:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case ms:case nu:case Oi:return{byteLength:4,components:1};case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var du={contain:xM,cover:_M,fill:MM,getByteLength:Ah};function SM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,b){return f?new OffscreenCanvas(T,b):Wr("canvas")}function y(T,b,X){let re=1,he=Ae(T);if((he.width>X||he.height>X)&&(re=X/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ae=Math.floor(re*he.width),De=Math.floor(re*he.height);u===void 0&&(u=p(ae,De));let pe=b?p(ae,De):u;return pe.width=ae,pe.height=De,pe.getContext("2d").drawImage(T,0,0,ae,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ae+"x"+De+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Kt&&T.minFilter!==si}function g(T){i.generateMipmap(T)}function x(T,b,X,re,he=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=b;if(b===i.RED&&(X===i.FLOAT&&(ae=i.R32F),X===i.HALF_FLOAT&&(ae=i.R16F),X===i.UNSIGNED_BYTE&&(ae=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ae=i.R8UI),X===i.UNSIGNED_SHORT&&(ae=i.R16UI),X===i.UNSIGNED_INT&&(ae=i.R32UI),X===i.BYTE&&(ae=i.R8I),X===i.SHORT&&(ae=i.R16I),X===i.INT&&(ae=i.R32I)),b===i.RG&&(X===i.FLOAT&&(ae=i.RG32F),X===i.HALF_FLOAT&&(ae=i.RG16F),X===i.UNSIGNED_BYTE&&(ae=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ae=i.RG8UI),X===i.UNSIGNED_SHORT&&(ae=i.RG16UI),X===i.UNSIGNED_INT&&(ae=i.RG32UI),X===i.BYTE&&(ae=i.RG8I),X===i.SHORT&&(ae=i.RG16I),X===i.INT&&(ae=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),X===i.UNSIGNED_INT&&(ae=i.RGB32UI),X===i.BYTE&&(ae=i.RGB8I),X===i.SHORT&&(ae=i.RGB16I),X===i.INT&&(ae=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),X===i.UNSIGNED_INT&&(ae=i.RGBA32UI),X===i.BYTE&&(ae=i.RGBA8I),X===i.SHORT&&(ae=i.RGBA16I),X===i.INT&&(ae=i.RGBA32I)),b===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),b===i.RGBA){let De=he?po:gt.getTransfer(re);X===i.FLOAT&&(ae=i.RGBA32F),X===i.HALF_FLOAT&&(ae=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ae=De===Ct?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(T,b){let X;return T?b===null||b===ms||b===er?X=i.DEPTH24_STENCIL8:b===Oi?X=i.DEPTH32F_STENCIL8:b===Gr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===er?X=i.DEPTH_COMPONENT24:b===Oi?X=i.DEPTH_COMPONENT32F:b===Gr&&(X=i.DEPTH_COMPONENT16),X}function M(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Kt&&T.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function L(T){let b=T.target;b.removeEventListener("dispose",L),E(b),b.isVideoTexture&&h.delete(b)}function A(T){let b=T.target;b.removeEventListener("dispose",A),j(b)}function E(T){let b=n.get(T);if(b.__webglInit===void 0)return;let X=T.source,re=d.get(X);if(re){let he=re[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&I(T),Object.keys(re).length===0&&d.delete(X)}n.remove(T)}function I(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let X=T.source,re=d.get(X);delete re[b.__cacheKey],a.memory.textures--}function j(T){let b=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let he=0;he<b.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[re][he]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let X=T.textures;for(let re=0,he=X.length;re<he;re++){let ae=n.get(X[re]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(X[re])}n.remove(T)}let _=0;function S(){_=0}function W(){let T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function F(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function O(T,b){let X=n.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){let re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(X,T,b);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function G(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){ft(X,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function H(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){ft(X,T,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function ie(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){se(X,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}let Z={[rn]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},ve={[Kt]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},xe={[l0]:i.NEVER,[p0]:i.ALWAYS,[c0]:i.LESS,[gp]:i.LEQUAL,[h0]:i.EQUAL,[f0]:i.GEQUAL,[u0]:i.GREATER,[d0]:i.NOTEQUAL};function de(T,b){if(b.type===Oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===Or||b.magFilter===Gs||b.magFilter===Ni||b.minFilter===si||b.minFilter===Or||b.minFilter===Gs||b.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Z[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==Gs&&b.minFilter!==Ni||b.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(T,b){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",L));let re=b.source,he=d.get(re);he===void 0&&(he={},d.set(re,he));let ae=F(b);if(ae!==T.__cacheKey){he[ae]===void 0&&(he[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),he[ae].usedTimes++;let De=he[T.__cacheKey];De!==void 0&&(he[T.__cacheKey].usedTimes--,De.usedTimes===0&&I(b)),T.__cacheKey=ae,T.__webglTexture=he[ae].texture}return X}function ft(T,b,X){let re=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=i.TEXTURE_3D);let he=Qe(T,b),ae=b.source;t.bindTexture(re,T.__webglTexture,i.TEXTURE0+X);let De=n.get(ae);if(ae.version!==De.__version||he===!0){t.activeTexture(i.TEXTURE0+X);let pe=gt.getPrimaries(gt.workingColorSpace),Ue=b.colorSpace===tn?null:gt.getPrimaries(b.colorSpace),st=b.colorSpace===tn||pe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ue=y(b.image,!1,s.maxTextureSize);ue=we(b,ue);let Ee=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Ge=x(b.internalFormat,Ee,He,b.colorSpace,b.isVideoTexture);de(re,b);let Be,rt=b.mipmaps,et=b.isVideoTexture!==!0,bt=De.__version===void 0||he===!0,k=ae.dataReady,Oe=M(b,ue);if(b.isDepthTexture)Ge=v(b.format===tr,b.type),bt&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ge,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Ee,He,null));else if(b.isDataTexture)if(rt.length>0){et&&bt&&t.texStorage2D(i.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let ee=0,R=rt.length;ee<R;ee++)Be=rt[ee],et?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Be.width,Be.height,Ee,He,Be.data):t.texImage2D(i.TEXTURE_2D,ee,Ge,Be.width,Be.height,0,Ee,He,Be.data);b.generateMipmaps=!1}else et?(bt&&t.texStorage2D(i.TEXTURE_2D,Oe,Ge,ue.width,ue.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,He,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Ee,He,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ge,rt[0].width,rt[0].height,ue.depth);for(let ee=0,R=rt.length;ee<R;ee++)if(Be=rt[ee],b.format!==Fi)if(Ee!==null)if(et){if(k)if(b.layerUpdates.size>0){let U=Ah(Be.width,Be.height,b.format,b.type);for(let C of b.layerUpdates){let N=Be.data.subarray(C*U/Be.data.BYTES_PER_ELEMENT,(C+1)*U/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,C,Be.width,Be.height,1,Ee,N,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Be.width,Be.height,ue.depth,Ee,Be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ge,Be.width,Be.height,ue.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Be.width,Be.height,ue.depth,Ee,He,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ge,Be.width,Be.height,ue.depth,0,Ee,He,Be.data)}else{et&&bt&&t.texStorage2D(i.TEXTURE_2D,Oe,Ge,rt[0].width,rt[0].height);for(let ee=0,R=rt.length;ee<R;ee++)Be=rt[ee],b.format!==Fi?Ee!==null?et?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ge,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Be.width,Be.height,Ee,He,Be.data):t.texImage2D(i.TEXTURE_2D,ee,Ge,Be.width,Be.height,0,Ee,He,Be.data)}else if(b.isDataArrayTexture)if(et){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Ge,ue.width,ue.height,ue.depth),k)if(b.layerUpdates.size>0){let ee=Ah(ue.width,ue.height,b.format,b.type);for(let R of b.layerUpdates){let U=ue.data.subarray(R*ee/ue.data.BYTES_PER_ELEMENT,(R+1)*ee/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R,ue.width,ue.height,1,Ee,He,U)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,He,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ue.width,ue.height,ue.depth,0,Ee,He,ue.data);else if(b.isData3DTexture)et?(bt&&t.texStorage3D(i.TEXTURE_3D,Oe,Ge,ue.width,ue.height,ue.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,He,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ue.width,ue.height,ue.depth,0,Ee,He,ue.data);else if(b.isFramebufferTexture){if(bt)if(et)t.texStorage2D(i.TEXTURE_2D,Oe,Ge,ue.width,ue.height);else{let ee=ue.width,R=ue.height;for(let U=0;U<Oe;U++)t.texImage2D(i.TEXTURE_2D,U,Ge,ee,R,0,Ee,He,null),ee>>=1,R>>=1}}else if(rt.length>0){if(et&&bt){let ee=Ae(rt[0]);t.texStorage2D(i.TEXTURE_2D,Oe,Ge,ee.width,ee.height)}for(let ee=0,R=rt.length;ee<R;ee++)Be=rt[ee],et?k&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ee,He,Be):t.texImage2D(i.TEXTURE_2D,ee,Ge,Ee,He,Be);b.generateMipmaps=!1}else if(et){if(bt){let ee=Ae(ue);t.texStorage2D(i.TEXTURE_2D,Oe,Ge,ee.width,ee.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,He,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Ee,He,ue);m(b)&&g(re),De.__version=ae.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function se(T,b,X){if(b.image.length!==6)return;let re=Qe(T,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+X);let ae=n.get(he);if(he.version!==ae.__version||re===!0){t.activeTexture(i.TEXTURE0+X);let De=gt.getPrimaries(gt.workingColorSpace),pe=b.colorSpace===tn?null:gt.getPrimaries(b.colorSpace),Ue=b.colorSpace===tn||De===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let st=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let R=0;R<6;R++)!st&&!ue?Ee[R]=y(b.image[R],!0,s.maxCubemapSize):Ee[R]=ue?b.image[R].image:b.image[R],Ee[R]=we(b,Ee[R]);let He=Ee[0],Ge=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),rt=x(b.internalFormat,Ge,Be,b.colorSpace),et=b.isVideoTexture!==!0,bt=ae.__version===void 0||re===!0,k=he.dataReady,Oe=M(b,He);de(i.TEXTURE_CUBE_MAP,b);let ee;if(st){et&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,rt,He.width,He.height);for(let R=0;R<6;R++){ee=Ee[R].mipmaps;for(let U=0;U<ee.length;U++){let C=ee[U];b.format!==Fi?Ge!==null?et?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U,0,0,C.width,C.height,Ge,C.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U,rt,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U,0,0,C.width,C.height,Ge,Be,C.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U,rt,C.width,C.height,0,Ge,Be,C.data)}}}else{if(ee=b.mipmaps,et&&bt){ee.length>0&&Oe++;let R=Ae(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,rt,R.width,R.height)}for(let R=0;R<6;R++)if(ue){et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ee[R].width,Ee[R].height,Ge,Be,Ee[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,rt,Ee[R].width,Ee[R].height,0,Ge,Be,Ee[R].data);for(let U=0;U<ee.length;U++){let N=ee[U].image[R].image;et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U+1,0,0,N.width,N.height,Ge,Be,N.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U+1,rt,N.width,N.height,0,Ge,Be,N.data)}}else{et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ge,Be,Ee[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,rt,Ge,Be,Ee[R]);for(let U=0;U<ee.length;U++){let C=ee[U];et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U+1,0,0,Ge,Be,C.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,U+1,rt,Ge,Be,C.image[R])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),ae.__version=he.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ce(T,b,X,re,he,ae){let De=r.convert(X.format,X.colorSpace),pe=r.convert(X.type),Ue=x(X.internalFormat,De,pe,X.colorSpace);if(!n.get(b).__hasExternalTextures){let ue=Math.max(1,b.width>>ae),Ee=Math.max(1,b.height>>ae);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ae,Ue,ue,Ee,b.depth,0,De,pe,null):t.texImage2D(he,ae,Ue,ue,Ee,0,De,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Y(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,he,n.get(X).__webglTexture,0,fe(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,he,n.get(X).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(T,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let re=b.depthTexture,he=re&&re.isDepthTexture?re.type:null,ae=v(b.stencilBuffer,he),De=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=fe(b);Y(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ae,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,T)}else{let re=b.textures;for(let he=0;he<re.length;he++){let ae=re[he],De=r.convert(ae.format,ae.colorSpace),pe=r.convert(ae.type),Ue=x(ae.internalFormat,De,pe,ae.colorSpace),st=fe(b);X&&Y(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ue,b.width,b.height):Y(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let re=n.get(b.depthTexture).__webglTexture,he=fe(b);if(b.depthTexture.format===Ys)Y(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===tr)Y(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(T){let b=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let re=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){let he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=re}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ce(b.__webglFramebuffer,T)}else if(X){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=i.createRenderbuffer(),ge(b.__webglDepthbuffer[re],T,!1);else{let he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ge(b.__webglDepthbuffer,T,!1);else{let re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,b,X){let re=n.get(T);b!==void 0&&ce(re.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&$e(T)}function Ke(T){let b=T.texture,X=n.get(T),re=n.get(b);T.addEventListener("dispose",A);let he=T.textures,ae=T.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=b.version,a.memory.textures++),ae){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)X.__webglFramebuffer[pe][Ue]=i.createFramebuffer()}else X.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)X.__webglFramebuffer[pe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(De)for(let pe=0,Ue=he.length;pe<Ue;pe++){let st=n.get(he[pe]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Y(T)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){let Ue=he[pe];X.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[pe]);let st=r.convert(Ue.format,Ue.colorSpace),ue=r.convert(Ue.type),Ee=x(Ue.internalFormat,st,ue,Ue.colorSpace,T.isXRRenderTarget===!0),He=fe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,X.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),de(i.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)ce(X.__webglFramebuffer[pe][Ue],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else ce(X.__webglFramebuffer[pe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Ue=he.length;pe<Ue;pe++){let st=he[pe],ue=n.get(st);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),de(i.TEXTURE_2D,st),ce(X.__webglFramebuffer,T,st,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(st)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),de(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)ce(X.__webglFramebuffer[Ue],T,b,i.COLOR_ATTACHMENT0,pe,Ue);else ce(X.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,pe,0);m(b)&&g(pe),t.unbindTexture()}T.depthBuffer&&$e(T)}function lt(T){let b=T.textures;for(let X=0,re=b.length;X<re;X++){let he=b[X];if(m(he)){let ae=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(he).__webglTexture;t.bindTexture(ae,De),g(ae),t.unbindTexture()}}}let oe=[],D=[];function Pe(T){if(T.samples>0){if(Y(T)===!1){let b=T.textures,X=T.width,re=T.height,he=i.COLOR_BUFFER_BIT,ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(T),pe=b.length>1;if(pe)for(let Ue=0;Ue<b.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);let st=n.get(b[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,he,i.NEAREST),l===!0&&(oe.length=0,D.length=0,oe.push(i.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(oe.push(ae),D.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<b.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);let st=n.get(b[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function fe(T){return Math.min(s.maxSamples,T.samples)}function Y(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function we(T,b){let X=T.colorSpace,re=T.format,he=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==Ht&&X!==tn&&(gt.getTransfer(X)===Ct?(re!==Fi||he!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=ie,this.rebindTextures=Ye,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Y}function wM(i,e){function t(n,s=tn){let r,a=gt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ap)return i.BYTE;if(n===op)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===Oi)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===cp)return i.ALPHA;if(n===hp)return i.RGB;if(n===Fi)return i.RGBA;if(n===up)return i.LUMINANCE;if(n===dp)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===au)return i.RED_INTEGER;if(n===ou)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===co)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===Vc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wc||n===Xc)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===jc||n===$c||n===Zc||n===Kc||n===Jc||n===Qc||n===eh||n===th||n===ih||n===nh||n===sh||n===rh||n===ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===th)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ih)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ah)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===oh||n===lh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fp||n===ch||n===hh||n===uh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Eh=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},TM={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:AM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=new Ch,m=t.getContextAttributes(),g=null,x=null,v=[],M=[],L=new ne,A=null,E=new Lt;E.layers.enable(1),E.viewport=new xt;let I=new Lt;I.layers.enable(2),I.viewport=new xt;let j=[E,I],_=new Eh;_.layers.enable(1),_.layers.enable(2);let S=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ce=v[se];return ce===void 0&&(ce=new zr,v[se]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(se){let ce=v[se];return ce===void 0&&(ce=new zr,v[se]=ce),ce.getGripSpace()},this.getHand=function(se){let ce=v[se];return ce===void 0&&(ce=new zr,v[se]=ce),ce.getHandSpace()};function F(se){let ce=M.indexOf(se.inputSource);if(ce===-1)return;let ge=v[ce];ge!==void 0&&(ge.update(se.inputSource,se.frame,c||a),ge.dispatchEvent({type:se.type,data:se.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let se=0;se<v.length;se++){let ce=M[se];ce!==null&&(M[se]=null,v[se].disconnect(ce))}S=null,W=null,y.reset(),e.setRenderTarget(g),f=null,d=null,u=null,s=null,x=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bt(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:an,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,ge=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?tr:Ys,ge=m.stencil?er:ms);let $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Bt(d.textureWidth,d.textureHeight,{format:Fi,type:an,depthTexture:new To(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(se){for(let ce=0;ce<se.removed.length;ce++){let ge=se.removed[ce],Ce=M.indexOf(ge);Ce>=0&&(M[Ce]=null,v[Ce].disconnect(ge))}for(let ce=0;ce<se.added.length;ce++){let ge=se.added[ce],Ce=M.indexOf(ge);if(Ce===-1){for(let Ye=0;Ye<v.length;Ye++)if(Ye>=M.length){M.push(ge),Ce=Ye;break}else if(M[Ye]===null){M[Ye]=ge,Ce=Ye;break}if(Ce===-1)break}let $e=v[Ce];$e&&$e.connect(ge)}}let H=new P,ie=new P;function Z(se,ce,ge){H.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);let Ce=H.distanceTo(ie),$e=ce.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,Ke=$e[14]/($e[10]-1),lt=$e[14]/($e[10]+1),oe=($e[9]+1)/$e[5],D=($e[9]-1)/$e[5],Pe=($e[8]-1)/$e[0],fe=(Ye[8]+1)/Ye[0],Y=Ke*Pe,_e=Ke*fe,we=Ce/(-Pe+fe),Ae=we*-Pe;if(ce.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ae),se.translateZ(we),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),$e[10]===-1)se.projectionMatrix.copy(ce.projectionMatrix),se.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let T=Ke+we,b=lt+we,X=Y-Ae,re=_e+(Ce-Ae),he=oe*lt/b*T,ae=D*lt/b*T;se.projectionMatrix.makePerspective(X,re,he,ae,T,b),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ve(se,ce){ce===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ce.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let ce=se.near,ge=se.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),_.near=I.near=E.near=ce,_.far=I.far=E.far=ge,(S!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,W=_.far);let Ce=se.parent,$e=_.cameras;ve(_,Ce);for(let Ye=0;Ye<$e.length;Ye++)ve($e[Ye],Ce);$e.length===2?Z(_,E,I):_.projectionMatrix.copy(E.projectionMatrix),xe(se,_,Ce)};function xe(se,ce,ge){ge===null?se.matrix.copy(ce.matrixWorld):(se.matrix.copy(ge.matrixWorld),se.matrix.invert(),se.matrix.multiply(ce.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ce.projectionMatrix),se.projectionMatrixInverse.copy(ce.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=sr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let de=null;function Qe(se,ce){if(h=ce.getViewerPose(c||a),p=ce,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,Ce=!0);for(let Ye=0;Ye<ge.length;Ye++){let Ke=ge[Ye],lt=null;if(f!==null)lt=f.getViewport(Ke);else{let D=u.getViewSubImage(d,Ke);lt=D.viewport,Ye===0&&(e.setRenderTargetTextures(x,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let oe=j[Ye];oe===void 0&&(oe=new Lt,oe.layers.enable(Ye),oe.viewport=new xt,j[Ye]=oe),oe.matrix.fromArray(Ke.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ke.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ye===0&&(_.matrix.copy(oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ce===!0&&_.cameras.push(oe)}let $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){let Ye=u.getDepthInformation(ge[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(e,Ye,s.renderState)}}for(let ge=0;ge<v.length;ge++){let Ce=M[ge],$e=v[ge];Ce!==null&&$e!==void 0&&$e.update(Ce,ce,c||a)}de&&de(se,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}let ft=new _p;ft.setAnimationLoop(Qe),this.setAnimationLoop=function(se){de=se},this.dispose=function(){}}},us=new zi,CM=new ke;function PM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ri&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ri&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,us.copy(M),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(us)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ri&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function RM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));let L=v.program;n.updateUBOMapping(x,L);let A=e.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){let v=u();x.__bindingPointIndex=v;let M=i.createBuffer(),L=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],M=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,E=M.length;A<E;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let j=0,_=I.length;j<_;j++){let S=I[j];if(f(S,A,j,L)===!0){let W=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],O=0;for(let G=0;G<F.length;G++){let H=F[G],ie=y(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,W+O,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,O),O+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,M,L){let A=x.value,E=v+"_"+M;if(L[E]===void 0)return typeof A=="number"||typeof A=="boolean"?L[E]=A:L[E]=A.clone(),!0;{let I=L[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return L[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(x){let v=x.uniforms,M=0,L=16;for(let E=0,I=v.length;E<I;E++){let j=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,S=j.length;_<S;_++){let W=j[_],F=Array.isArray(W.value)?W.value:[W.value];for(let O=0,G=F.length;O<G;O++){let H=F[O],ie=y(H),Z=M%L,ve=Z%ie.boundary,xe=Z+ve;M+=ve,xe!==0&&L-xe<ie.storage&&(M+=L-xe),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=ie.storage}}}let A=M%L;return A>0&&(M+=L-A),x.__size=M,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var ar=class{constructor(e={}){let{canvas:t=I0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),y=null,m=null,g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=zn,this.toneMappingExposure=1;let v=this,M=!1,L=0,A=0,E=null,I=-1,j=null,_=new xt,S=new xt,W=null,F=new be(0),O=0,G=t.width,H=t.height,ie=1,Z=null,ve=null,xe=new xt(0,0,G,H),de=new xt(0,0,G,H),Qe=!1,ft=new Vn,se=!1,ce=!1,ge=new ke,Ce=new ke,$e=new P,Ye=new xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function oe(){return E===null?ie:1}let D=n;function Pe(w,B){return t.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",R,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",C,!1),D===null){let B="webgl2";if(D=Pe(B,w),D===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let fe,Y,_e,we,Ae,T,b,X,re,he,ae,De,pe,Ue,st,ue,Ee,He,Ge,Be,rt,et,bt,k;function Oe(){fe=new Gx(D),fe.init(),et=new wM(D,fe),Y=new Fx(D,fe,e,et),_e=new yM(D),Y.reverseDepthBuffer&&_e.buffers.depth.setReversed(!0),we=new qx(D),Ae=new rM,T=new SM(D,fe,_e,Ae,Y,et,we),b=new zx(v),X=new Hx(v),re=new Q0(D),bt=new Nx(D,re),he=new Wx(D,re,we,bt),ae=new jx(D,he,re,we),Ge=new Yx(D,Y,T),ue=new Bx(Ae),De=new sM(v,b,X,fe,Y,bt,ue),pe=new PM(v,Ae),Ue=new oM,st=new fM(fe),He=new Ux(v,b,X,_e,ae,d,l),Ee=new gM(v,ae,Y),k=new RM(D,we,Y,_e),Be=new Ox(D,fe,we),rt=new Xx(D,fe,we),we.programs=De.programs,v.capabilities=Y,v.extensions=fe,v.properties=Ae,v.renderLists=Ue,v.shadowMap=Ee,v.state=_e,v.info=we}Oe();let ee=new Ph(v,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(G,H,!1))},this.getSize=function(w){return w.set(G,H)},this.setSize=function(w,B,$=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,H=B,t.width=Math.floor(w*ie),t.height=Math.floor(B*ie),$===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(G*ie,H*ie).floor()},this.setDrawingBufferSize=function(w,B,$){G=w,H=B,ie=$,t.width=Math.floor(w*$),t.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,B,$,J){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,B,$,J),_e.viewport(_.copy(xe).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,B,$,J){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,B,$,J),_e.scissor(S.copy(de).multiplyScalar(ie).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){_e.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,B=!0,$=!0){let J=0;if(w){let V=!1;if(E!==null){let me=E.texture.format;V=me===il||me===lu||me===au}if(V){let me=E.texture.type,Te=me===an||me===ms||me===Gr||me===er||me===su||me===ru,Re=He.getClearColor(),Le=He.getClearAlpha(),qe=Re.r,je=Re.g,ze=Re.b;Te?(f[0]=qe,f[1]=je,f[2]=ze,f[3]=Le,D.clearBufferuiv(D.COLOR,0,f)):(p[0]=qe,p[1]=je,p[2]=ze,p[3]=Le,D.clearBufferiv(D.COLOR,0,p))}else J|=D.COLOR_BUFFER_BIT}B&&(J|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",R,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",C,!1),Ue.dispose(),st.dispose(),Ae.dispose(),b.dispose(),X.dispose(),ae.dispose(),bt.dispose(),k.dispose(),De.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",le),ee.removeEventListener("sessionend",Me),Se.stop()};function R(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=we.autoReset,B=Ee.enabled,$=Ee.autoUpdate,J=Ee.needsUpdate,V=Ee.type;Oe(),we.autoReset=w,Ee.enabled=B,Ee.autoUpdate=$,Ee.needsUpdate=J,Ee.type=V}function C(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function N(w){let B=w.target;B.removeEventListener("dispose",N),z(B)}function z(w){q(w),Ae.remove(w)}function q(w){let B=Ae.get(w).programs;B!==void 0&&(B.forEach(function($){De.releaseProgram($)}),w.isShaderMaterial&&De.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,J,V,me){B===null&&(B=Ke);let Te=V.isMesh&&V.matrixWorld.determinant()<0,Re=Ve(w,B,$,J,V);_e.setMaterial(J,Te);let Le=$.index,qe=1;if(J.wireframe===!0){if(Le=he.getWireframeAttribute($),Le===void 0)return;qe=2}let je=$.drawRange,ze=$.attributes.position,yt=je.start*qe,St=(je.start+je.count)*qe;me!==null&&(yt=Math.max(yt,me.start*qe),St=Math.min(St,(me.start+me.count)*qe)),Le!==null?(yt=Math.max(yt,0),St=Math.min(St,Le.count)):ze!=null&&(yt=Math.max(yt,0),St=Math.min(St,ze.count));let wt=St-yt;if(wt<0||wt===1/0)return;bt.setup(V,J,Re,$,Le);let Ut,dt=Be;if(Le!==null&&(Ut=re.get(Le),dt=rt,dt.setIndex(Ut)),V.isMesh)J.wireframe===!0?(_e.setLineWidth(J.wireframeLinewidth*oe()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(V.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),_e.setLineWidth(Xe*oe()),V.isLineSegments?dt.setMode(D.LINES):V.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else V.isPoints?dt.setMode(D.POINTS):V.isSprite&&dt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xe=V._multiDrawStarts,Nt=V._multiDrawCounts,_t=V._multiDrawCount,Yt=Le?re.get(Le).bytesPerElement:1,Gt=Ae.get(J).currentProgram.getUniforms();for(let Si=0;Si<_t;Si++)Gt.setValue(D,"_gl_DrawID",Si),dt.render(Xe[Si]/Yt,Nt[Si])}else if(V.isInstancedMesh)dt.renderInstances(yt,wt,V.count);else if($.isInstancedBufferGeometry){let Xe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,Xe);dt.renderInstances(yt,wt,Nt)}else dt.render(yt,wt)};function K(w,B,$){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=ri,w.needsUpdate=!0,mt(w,B,$),w.side=sn,w.needsUpdate=!0,mt(w,B,$),w.side=ni):mt(w,B,$)}this.compile=function(w,B,$=null){$===null&&($=w),m=st.get($),m.init(B),x.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==$&&w.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let J=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let me=V.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){let Re=me[Te];K(Re,$,V),J.add(Re)}else K(me,$,V),J.add(me)}),x.pop(),m=null,J},this.compileAsync=function(w,B,$=null){let J=this.compile(w,B,$);return new Promise(V=>{function me(){if(J.forEach(function(Te){Ae.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){V(w);return}setTimeout(me,10)}fe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Q=null;function te(w){Q&&Q(w)}function le(){Se.stop()}function Me(){Se.start()}let Se=new _p;Se.setAnimationLoop(te),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(w){Q=w,ee.setAnimationLoop(w),w===null?Se.stop():Se.start()},ee.addEventListener("sessionstart",le),ee.addEventListener("sessionend",Me),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(B),B=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,E),m=st.get(w,x.length),m.init(B),x.push(m),Ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ft.setFromProjectionMatrix(Ce),ce=this.localClippingEnabled,se=ue.init(this.clippingPlanes,ce),y=Ue.get(w,g.length),y.init(),g.push(y),ee.enabled===!0&&ee.isPresenting===!0){let me=v.xr.getDepthSensingMesh();me!==null&&Ie(me,B,-1/0,v.sortObjects)}Ie(w,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Z,ve),lt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,lt&&He.addToRenderList(y,w),this.info.render.frame++,se===!0&&ue.beginShadows();let $=m.state.shadowsArray;Ee.render($,w,B),se===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=y.opaque,V=y.transmissive;if(m.setupLights(),B.isArrayCamera){let me=B.cameras;if(V.length>0)for(let Te=0,Re=me.length;Te<Re;Te++){let Le=me[Te];Ze(J,V,w,Le)}lt&&He.render(w);for(let Te=0,Re=me.length;Te<Re;Te++){let Le=me[Te];We(y,w,Le,Le.viewport)}}else V.length>0&&Ze(J,V,w,B),lt&&He.render(w),We(y,w,B);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,B),bt.resetDefaultState(),I=-1,j=null,x.pop(),x.length>0?(m=x[x.length-1],se===!0&&ue.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function Ie(w,B,$,J){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ft.intersectsSprite(w)){J&&Ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);let Te=ae.update(w),Re=w.material;Re.visible&&y.push(w,Te,Re,$,Ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ft.intersectsObject(w))){let Te=ae.update(w),Re=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ye.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ye.copy(Te.boundingSphere.center)),Ye.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(Re)){let Le=Te.groups;for(let qe=0,je=Le.length;qe<je;qe++){let ze=Le[qe],yt=Re[ze.materialIndex];yt&&yt.visible&&y.push(w,Te,yt,$,Ye.z,ze)}}else Re.visible&&y.push(w,Te,Re,$,Ye.z,null)}}let me=w.children;for(let Te=0,Re=me.length;Te<Re;Te++)Ie(me[Te],B,$,J)}function We(w,B,$,J){let V=w.opaque,me=w.transmissive,Te=w.transparent;m.setupLightsView($),se===!0&&ue.setGlobalState(v.clippingPlanes,$),J&&_e.viewport(_.copy(J)),V.length>0&&at(V,B,$),me.length>0&&at(me,B,$),Te.length>0&&at(Te,B,$),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ze(w,B,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Bt(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?yi:an,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let me=m.state.transmissionRenderTarget[J.id],Te=J.viewport||_;me.setSize(Te.z,Te.w);let Re=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(F),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),lt&&He.render($);let Le=v.toneMapping;v.toneMapping=zn;let qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),se===!0&&ue.setGlobalState(v.clippingPlanes,J),at(w,$,J),T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me),fe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ze=0,yt=B.length;ze<yt;ze++){let St=B[ze],wt=St.object,Ut=St.geometry,dt=St.material,Xe=St.group;if(dt.side===ni&&wt.layers.test(J.layers)){let Nt=dt.side;dt.side=ri,dt.needsUpdate=!0,Je(wt,$,J,Ut,dt,Xe),dt.side=Nt,dt.needsUpdate=!0,je=!0}}je===!0&&(T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me))}v.setRenderTarget(Re),v.setClearColor(F,O),qe!==void 0&&(J.viewport=qe),v.toneMapping=Le}function at(w,B,$){let J=B.isScene===!0?B.overrideMaterial:null;for(let V=0,me=w.length;V<me;V++){let Te=w[V],Re=Te.object,Le=Te.geometry,qe=J===null?Te.material:J,je=Te.group;Re.layers.test($.layers)&&Je(Re,B,$,Le,qe,je)}}function Je(w,B,$,J,V,me){w.onBeforeRender(v,B,$,J,V,me),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(v,B,$,J,w,me),V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=ri,V.needsUpdate=!0,v.renderBufferDirect($,B,J,V,w,me),V.side=sn,V.needsUpdate=!0,v.renderBufferDirect($,B,J,V,w,me),V.side=ni):v.renderBufferDirect($,B,J,V,w,me),w.onAfterRender(v,B,$,J,V,me)}function mt(w,B,$){B.isScene!==!0&&(B=Ke);let J=Ae.get(w),V=m.state.lights,me=m.state.shadowsArray,Te=V.state.version,Re=De.getParameters(w,V.state,me,B,$),Le=De.getProgramCacheKey(Re),qe=J.programs;J.environment=w.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(w.isMeshStandardMaterial?X:b).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",N),qe=new Map,J.programs=qe);let je=qe.get(Le);if(je!==void 0){if(J.currentProgram===je&&J.lightsStateVersion===Te)return ye(w,Re),je}else Re.uniforms=De.getUniforms(w),w.onBeforeCompile(Re,v),je=De.acquireProgram(Re,Le),qe.set(Le,je),J.uniforms=Re.uniforms;let ze=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=ue.uniform),ye(w,Re),J.needsLights=ut(w),J.lightsStateVersion=Te,J.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=je,J.uniformsList=null,je}function ct(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function ye(w,B){let $=Ae.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Ve(w,B,$,J,V){B.isScene!==!0&&(B=Ke),T.resetTextureUnits();let me=B.fog,Te=J.isMeshStandardMaterial?B.environment:null,Re=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ht,Le=(J.isMeshStandardMaterial?X:b).get(J.envMap||Te),qe=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!$.morphAttributes.position,yt=!!$.morphAttributes.normal,St=!!$.morphAttributes.color,wt=zn;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(wt=v.toneMapping);let Ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=Ut!==void 0?Ut.length:0,Xe=Ae.get(J),Nt=m.state.lights;if(se===!0&&(ce===!0||w!==j)){let Di=w===j&&J.id===I;ue.setState(J,w,Di)}let _t=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==Re||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isBatchedMesh&&Xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xe.instancingMorph===!1&&V.morphTexture!==null||Xe.envMap!==Le||J.fog===!0&&Xe.fog!==me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ue.numPlanes||Xe.numIntersection!==ue.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==je||Xe.morphTargets!==ze||Xe.morphNormals!==yt||Xe.morphColors!==St||Xe.toneMapping!==wt||Xe.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Xe.__version=J.version);let Yt=Xe.currentProgram;_t===!0&&(Yt=mt(J,B,V));let Gt=!1,Si=!1,Wl=!1,Ft=Yt.getUniforms(),Rn=Xe.uniforms;if(_e.useProgram(Yt.program)&&(Gt=!0,Si=!0,Wl=!0),J.id!==I&&(I=J.id,Si=!0),Gt||j!==w){Y.reverseDepthBuffer?(ge.copy(w.projectionMatrix),D0(ge),U0(ge),Ft.setValue(D,"projectionMatrix",ge)):Ft.setValue(D,"projectionMatrix",w.projectionMatrix),Ft.setValue(D,"viewMatrix",w.matrixWorldInverse);let Di=Ft.map.cameraPosition;Di!==void 0&&Di.setValue(D,$e.setFromMatrixPosition(w.matrixWorld)),Y.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,Si=!0,Wl=!0)}if(V.isSkinnedMesh){Ft.setOptional(D,V,"bindMatrix"),Ft.setOptional(D,V,"bindMatrixInverse");let Di=V.skeleton;Di&&(Di.boneTexture===null&&Di.computeBoneTexture(),Ft.setValue(D,"boneTexture",Di.boneTexture,T))}V.isBatchedMesh&&(Ft.setOptional(D,V,"batchingTexture"),Ft.setValue(D,"batchingTexture",V._matricesTexture,T),Ft.setOptional(D,V,"batchingIdTexture"),Ft.setValue(D,"batchingIdTexture",V._indirectTexture,T),Ft.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",V._colorsTexture,T));let Xl=$.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0)&&Ge.update(V,$,Yt),(Si||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Ft.setValue(D,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Rn.envMap.value=Le,Rn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Rn.envMapIntensity.value=B.environmentIntensity),Si&&(Ft.setValue(D,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Fe(Rn,Wl),me&&J.fog===!0&&pe.refreshFogUniforms(Rn,me),pe.refreshMaterialUniforms(Rn,J,ie,H,m.state.transmissionRenderTarget[w.id]),$s.upload(D,ct(Xe),Rn,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($s.upload(D,ct(Xe),Rn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ft.setValue(D,"center",V.center),Ft.setValue(D,"modelViewMatrix",V.modelViewMatrix),Ft.setValue(D,"normalMatrix",V.normalMatrix),Ft.setValue(D,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Di=J.uniformsGroups;for(let ql=0,Dg=Di.length;ql<Dg;ql++){let Od=Di[ql];k.update(Od,Yt),k.bind(Od,Yt)}}return Yt}function Fe(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function ut(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,B,$){Ae.get(w.texture).__webglTexture=B,Ae.get(w.depthTexture).__webglTexture=$;let J=Ae.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let $=Ae.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){E=w,L=B,A=$;let J=!0,V=null,me=!1,Te=!1;if(w){let Le=Ae.get(w);if(Le.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Le.__hasExternalTextures)T.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ze=w.depthTexture;if(Le.__boundDepthTexture!==ze){if(ze!==null&&Ae.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Te=!0);let je=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[B])?V=je[B][$]:V=je[B],me=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?V=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?V=je[$]:V=je,_.copy(w.viewport),S.copy(w.scissor),W=w.scissorTest}else _.copy(xe).multiplyScalar(ie).floor(),S.copy(de).multiplyScalar(ie).floor(),W=Qe;if(_e.bindFramebuffer(D.FRAMEBUFFER,V)&&J&&_e.drawBuffers(w,V),_e.viewport(_),_e.scissor(S),_e.setScissorTest(W),me){let Le=Ae.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,$)}else if(Te){let Le=Ae.get(w.texture),qe=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,qe)}I=-1},this.readRenderTargetPixels=function(w,B,$,J,V,me,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){_e.bindFramebuffer(D.FRAMEBUFFER,Re);try{let Le=w.texture,qe=Le.format,je=Le.type;if(!Y.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-J&&$>=0&&$<=w.height-V&&D.readPixels(B,$,J,V,et.convert(qe),et.convert(je),me)}finally{let Le=E!==null?Ae.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,J,V,me,Te){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){let Le=w.texture,qe=Le.format,je=Le.type;if(!Y.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-J&&$>=0&&$<=w.height-V){_e.bindFramebuffer(D.FRAMEBUFFER,Re);let ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(B,$,J,V,et.convert(qe),et.convert(je),0);let yt=E!==null?Ae.get(E).__webglFramebuffer:null;_e.bindFramebuffer(D.FRAMEBUFFER,yt);let St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await L0(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(ze),D.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,$=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let J=Math.pow(2,-$),V=Math.floor(w.image.width*J),me=Math.floor(w.image.height*J),Te=B!==null?B.x:0,Re=B!==null?B.y:0;T.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Te,Re,V,me),_e.unbindTexture()},this.copyTextureToTexture=function(w,B,$=null,J=null,V=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,w=arguments[1],B=arguments[2],V=arguments[3]||0,$=null);let me,Te,Re,Le,qe,je;$!==null?(me=$.max.x-$.min.x,Te=$.max.y-$.min.y,Re=$.min.x,Le=$.min.y):(me=w.image.width,Te=w.image.height,Re=0,Le=0),J!==null?(qe=J.x,je=J.y):(qe=0,je=0);let ze=et.convert(B.format),yt=et.convert(B.type);T.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let St=D.getParameter(D.UNPACK_ROW_LENGTH),wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ut=D.getParameter(D.UNPACK_SKIP_PIXELS),dt=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES),Nt=w.isCompressedTexture?w.mipmaps[V]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,qe,je,me,Te,ze,yt,Nt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,qe,je,Nt.width,Nt.height,ze,Nt.data):D.texSubImage2D(D.TEXTURE_2D,V,qe,je,me,Te,ze,yt,Nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,St),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),V===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,B,$=null,J=null,V=0){w.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,w=arguments[2],B=arguments[3],V=arguments[4]||0);let me,Te,Re,Le,qe,je,ze,yt,St,wt=w.isCompressedTexture?w.mipmaps[V]:w.image;$!==null?(me=$.max.x-$.min.x,Te=$.max.y-$.min.y,Re=$.max.z-$.min.z,Le=$.min.x,qe=$.min.y,je=$.min.z):(me=wt.width,Te=wt.height,Re=wt.depth,Le=0,qe=0,je=0),J!==null?(ze=J.x,yt=J.y,St=J.z):(ze=0,yt=0,St=0);let Ut=et.convert(B.format),dt=et.convert(B.type),Xe;if(B.isData3DTexture)T.setTexture3D(B,0),Xe=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)T.setTexture2DArray(B,0),Xe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Nt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yt=D.getParameter(D.UNPACK_SKIP_PIXELS),Gt=D.getParameter(D.UNPACK_SKIP_ROWS),Si=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Xe,V,ze,yt,St,me,Te,Re,Ut,dt,wt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Xe,V,ze,yt,St,me,Te,Re,Ut,wt.data):D.texSubImage3D(Xe,V,ze,yt,St,me,Te,Re,Ut,dt,wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Si),V===0&&B.generateMipmaps&&D.generateMipmap(Xe),_e.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){L=0,A=0,E=null,_e.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===cu?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===sl?"display-p3":"srgb"}};var or=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ci=new P,Yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Df=new P,Uf=new xt,Nf=new xt,IM=new P,Of=new ke,Za=new P,bc=new Jt,Ff=new ke,Sc=new Ai,Ao=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kd,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(s),e.ray.intersectsSphere(bc)!==!1&&(Ff.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Ff),!(this.boundingBox!==null&&Sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===n0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Uf.fromBufferAttribute(s.attributes.skinIndex,e),Nf.fromBufferAttribute(s.attributes.skinWeight,e),Df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Nf.getComponent(r);if(a!==0){let o=Uf.getComponent(r);Of.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(IM.copy(Df).applyMatrix4(Of),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},jr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},lr=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,h=Kt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bf=new ke,LM=new ke,Eo=class i{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:LM;Bf.multiplyMatrices(o,t[r]),Bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new lr(t,e,e,Fi,Oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new jr),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qt=class extends it{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new ke,zf=new ke,Ka=[],kf=new ai,DM=new ke,Ir=new ht,Lr=new Jt,di=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,DM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),kf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Lr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),zf.multiplyMatrices(n,Hs),Ir.matrixWorld=zf,Ir.raycast(e,Ka);for(let a=0,o=Ka.length;a<o;a++){let l=Ka[a];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,tl,Oi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cr=class extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new P,Po=new P,Vf=new ke,Dr=new Ai,Ja=new Jt,wc=new P,Hf=new P,hr=class extends Pt{constructor(e=new Mt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Co.distanceTo(Po);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Vf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Vf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=h.getX(y),x=h.getX(y+1),v=Qa(this,e,Dr,l,g,x);v&&t.push(v)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=Qa(this,e,Dr,l,y,m);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=Qa(this,e,Dr,l,y,y+1);g&&t.push(g)}if(this.isLineLoop){let y=Qa(this,e,Dr,l,p-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Co.fromBufferAttribute(a,s),Po.fromBufferAttribute(a,r),t.distanceSqToSegment(Co,Po,wc,Hf)>n)return;wc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wc);if(!(l<e.near||l>e.far))return{distance:l,point:Hf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Gf=new P,Wf=new P,gs=class extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gf.fromBufferAttribute(t,s),Wf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gf.distanceTo(Wf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hn=class extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xf=new ke,Rh=new Ai,eo=new Jt,to=new P,yn=class extends Pt{constructor(e=new Mt,t=new Hn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Xf.copy(s).invert(),Rh.copy(e.ray).applyMatrix4(Xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,y=f;p<y;p++){let m=c.getX(p);to.fromBufferAttribute(u,m),qf(to,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,y=f;p<y;p++)to.fromBufferAttribute(u,p),qf(to,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qf(i,e,t,n,s,r,a){let o=Rh.distanceSqToPoint(i);if(o<t){let l=new P;Rh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ki=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ne:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new ke;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends ki{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends $r{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var io=new P,Tc=new fu,Ac=new fu,Ec=new fu,ur=class extends ki{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Tc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,m),Ac.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,m),Ec.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ac.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ec.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Tc.calc(l),Ac.calc(l),Ec.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function UM(i,e){let t=1-i;return t*t*e}function NM(i,e){return 2*(1-i)*i*e}function OM(i,e){return i*i*e}function kr(i,e,t,n){return UM(i,e)+NM(i,t)+OM(i,n)}function FM(i,e){let t=1-i;return t*t*t*e}function BM(i,e){let t=1-i;return 3*t*t*i*e}function zM(i,e){return 3*(1-i)*i*i*e}function kM(i,e){return i*i*i*e}function Vr(i,e,t,n,s){return FM(i,e)+BM(i,t)+zM(i,n)+kM(i,s)}var Io=class extends ki{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lh=class extends ki{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y),Vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends ki{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends ki{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends ki{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends ki{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yf(o,l.x,c.x,h.x,u.x),Yf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:ur,CubicBezierCurve:Io,CubicBezierCurve3:Lh,EllipseCurve:$r,LineCurve:Lo,LineCurve3:Dh,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Uo,SplineCurve:No}),Uh=class extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}},Fo=class extends Uh{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Do(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Io(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new $r(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Vi=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],m=n/2,g=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function x(){let M=new P,L=new P,A=0,E=(t-e)/n;for(let I=0;I<=r;I++){let j=[],_=I/r,S=_*(t-e)+e;for(let W=0;W<=s;W++){let F=W/s,O=F*l+o,G=Math.sin(O),H=Math.cos(O);L.x=S*G,L.y=-_*n+m,L.z=S*H,u.push(L.x,L.y,L.z),M.set(G,E,H).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-_),j.push(p++)}y.push(j)}for(let I=0;I<s;I++)for(let j=0;j<r;j++){let _=y[j][I],S=y[j+1][I],W=y[j+1][I+1],F=y[j][I+1];e>0&&(h.push(_,S,F),A+=3),t>0&&(h.push(S,W,F),A+=3)}c.addGroup(g,A,0),g+=A}function v(M){let L=p,A=new ne,E=new P,I=0,j=M===!0?e:t,_=M===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),p++;let S=p;for(let W=0;W<=s;W++){let O=W/s*l+o,G=Math.cos(O),H=Math.sin(O);E.x=j*H,E.y=m*_,E.z=j*G,u.push(E.x,E.y,E.z),d.push(0,_,0),A.x=G*.5+.5,A.y=H*.5*_+.5,f.push(A.x,A.y),p++}for(let W=0;W<s;W++){let F=L+W,O=S+W;M===!0?h.push(O,O+1,F):h.push(O+1,O,F),I+=3}c.addGroup(g,I,M===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nh=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new P,M=new P,L=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],M),f(t[A+2],L),l(v,M,L,x)}function l(x,v,M,L){let A=L+1,E=[];for(let I=0;I<=A;I++){E[I]=[];let j=x.clone().lerp(M,I/A),_=v.clone().lerp(M,I/A),S=A-I;for(let W=0;W<=S;W++)W===0&&I===A?E[I][W]=j:E[I][W]=j.clone().lerp(_,W/S)}for(let I=0;I<A;I++)for(let j=0;j<2*(A-I)-1;j++){let _=Math.floor(j/2);j%2===0?(d(E[I][_+1]),d(E[I+1][_]),d(E[I][_])):(d(E[I][_+1]),d(E[I+1][_+1]),d(E[I+1][_]))}}function c(x){let v=new P;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let x=new P;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let M=m(x)/2/Math.PI+.5,L=g(x)/Math.PI+.5;a.push(M,1-L)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){let v=a[x+0],M=a[x+2],L=a[x+4],A=Math.max(v,M,L),E=Math.min(v,M,L);A>.9&&E<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){let M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){let x=new P,v=new P,M=new P,L=new P,A=new ne,E=new ne,I=new ne;for(let j=0,_=0;j<r.length;j+=9,_+=6){x.set(r[j+0],r[j+1],r[j+2]),v.set(r[j+3],r[j+4],r[j+5]),M.set(r[j+6],r[j+7],r[j+8]),A.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),L.copy(x).add(v).add(M).divideScalar(3);let S=m(L);y(A,_+0,x,S),y(E,_+2,v,S),y(I,_+4,M,S)}}function y(x,v,M,L){L<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=L/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Gn=class extends Fo{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fo().fromJSON(s))}return this}},VM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=qM(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let p=t;p<s;p+=t)u=i[p],d=i[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Zr(r,a,t,o,l,f,0),a}};function Tp(i,e,t,n,s){let r,a;if(s===nb(i,e,t,n)>0)for(r=e;r<t;r+=n)a=jf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=jf(r,i[r],i[r+1],a);return a&&al(a,a.next)&&(Jr(a),a=a.next),a}function vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(al(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&KM(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?GM(i,n,s,r):HM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=WM(vs(i),e,t),Zr(i,e,t,n,s,r,2)):a===2&&XM(i,e,t,n,s,r):Zr(vs(i),e,t,n,s,r,1);break}}}function HM(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Xs(s,o,r,l,a,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function GM(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=Oh(f,p,e,t,n),x=Oh(y,m,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=g&&M&&M.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Xs(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Xs(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function WM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!al(s,r)&&Ap(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Jr(n),Jr(n.next),n=i=r),n=n.next}while(n!==i);return vs(n)}function XM(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eb(a,o)){let l=Ep(a,o);a=vs(a,a.next),l=vs(l,l.next),Zr(a,e,t,n,s,r,0),Zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function qM(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Tp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(QM(c));for(s.sort(YM),r=0;r<s.length;r++)t=jM(s[r],t);return t}function YM(i,e){return i.x-e.x}function jM(i,e){let t=$M(i,e);if(!t)return e;let n=Ep(t,i);return vs(n,n.next),vs(t,t.next)}function $M(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Kr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ZM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function ZM(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function KM(i,e,t,n){let s=i;do s.z===0&&(s.z=Oh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,JM(s)}function JM(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Oh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function QM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function eb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tb(i,e)&&(Kr(i,e)&&Kr(e,i)&&ib(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||al(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function al(i,e){return i.x===e.x&&i.y===e.y}function Ap(i,e,t,n){let s=so(Dt(i,e,t)),r=so(Dt(i,e,n)),a=so(Dt(t,n,i)),o=so(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&no(i,t,e)||r===0&&no(i,n,e)||a===0&&no(t,i,n)||o===0&&no(t,e,n))}function no(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function tb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ap(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function ib(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ep(i,e){let t=new Fh(i.i,i.x,i.y),n=new Fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jf(i,e,t,n){let s=new Fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nb(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];$f(e),Zf(n,e);let a=e.length;t.forEach($f);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Zf(n,t[l]);let o=VM.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $f(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bo=class i extends Mt{constructor(e=new Gn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:sb,v,M=!1,L,A,E,I;g&&(v=g.getSpacedPoints(h),M=!0,d=!1,L=g.computeFrenetFrames(h,!1),A=new P,E=new P,I=new P),d||(m=0,f=0,p=0,y=0);let j=o.extractPoints(c),_=j.shape,S=j.holes;if(!kn.isClockWise(_)){_=_.reverse();for(let oe=0,D=S.length;oe<D;oe++){let Pe=S[oe];kn.isClockWise(Pe)&&(S[oe]=Pe.reverse())}}let F=kn.triangulateShape(_,S),O=_;for(let oe=0,D=S.length;oe<D;oe++){let Pe=S[oe];_=_.concat(Pe)}function G(oe,D,Pe){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(D,Pe)}let H=_.length,ie=F.length;function Z(oe,D,Pe){let fe,Y,_e,we=oe.x-D.x,Ae=oe.y-D.y,T=Pe.x-oe.x,b=Pe.y-oe.y,X=we*we+Ae*Ae,re=we*b-Ae*T;if(Math.abs(re)>Number.EPSILON){let he=Math.sqrt(X),ae=Math.sqrt(T*T+b*b),De=D.x-Ae/he,pe=D.y+we/he,Ue=Pe.x-b/ae,st=Pe.y+T/ae,ue=((Ue-De)*b-(st-pe)*T)/(we*b-Ae*T);fe=De+we*ue-oe.x,Y=pe+Ae*ue-oe.y;let Ee=fe*fe+Y*Y;if(Ee<=2)return new ne(fe,Y);_e=Math.sqrt(Ee/2)}else{let he=!1;we>Number.EPSILON?T>Number.EPSILON&&(he=!0):we<-Number.EPSILON?T<-Number.EPSILON&&(he=!0):Math.sign(Ae)===Math.sign(b)&&(he=!0),he?(fe=-Ae,Y=we,_e=Math.sqrt(X)):(fe=we,Y=Ae,_e=Math.sqrt(X/2))}return new ne(fe/_e,Y/_e)}let ve=[];for(let oe=0,D=O.length,Pe=D-1,fe=oe+1;oe<D;oe++,Pe++,fe++)Pe===D&&(Pe=0),fe===D&&(fe=0),ve[oe]=Z(O[oe],O[Pe],O[fe]);let xe=[],de,Qe=ve.concat();for(let oe=0,D=S.length;oe<D;oe++){let Pe=S[oe];de=[];for(let fe=0,Y=Pe.length,_e=Y-1,we=fe+1;fe<Y;fe++,_e++,we++)_e===Y&&(_e=0),we===Y&&(we=0),de[fe]=Z(Pe[fe],Pe[_e],Pe[we]);xe.push(de),Qe=Qe.concat(de)}for(let oe=0;oe<m;oe++){let D=oe/m,Pe=f*Math.cos(D*Math.PI/2),fe=p*Math.sin(D*Math.PI/2)+y;for(let Y=0,_e=O.length;Y<_e;Y++){let we=G(O[Y],ve[Y],fe);Ce(we.x,we.y,-Pe)}for(let Y=0,_e=S.length;Y<_e;Y++){let we=S[Y];de=xe[Y];for(let Ae=0,T=we.length;Ae<T;Ae++){let b=G(we[Ae],de[Ae],fe);Ce(b.x,b.y,-Pe)}}}let ft=p+y;for(let oe=0;oe<H;oe++){let D=d?G(_[oe],Qe[oe],ft):_[oe];M?(E.copy(L.normals[0]).multiplyScalar(D.x),A.copy(L.binormals[0]).multiplyScalar(D.y),I.copy(v[0]).add(E).add(A),Ce(I.x,I.y,I.z)):Ce(D.x,D.y,0)}for(let oe=1;oe<=h;oe++)for(let D=0;D<H;D++){let Pe=d?G(_[D],Qe[D],ft):_[D];M?(E.copy(L.normals[oe]).multiplyScalar(Pe.x),A.copy(L.binormals[oe]).multiplyScalar(Pe.y),I.copy(v[oe]).add(E).add(A),Ce(I.x,I.y,I.z)):Ce(Pe.x,Pe.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){let D=oe/m,Pe=f*Math.cos(D*Math.PI/2),fe=p*Math.sin(D*Math.PI/2)+y;for(let Y=0,_e=O.length;Y<_e;Y++){let we=G(O[Y],ve[Y],fe);Ce(we.x,we.y,u+Pe)}for(let Y=0,_e=S.length;Y<_e;Y++){let we=S[Y];de=xe[Y];for(let Ae=0,T=we.length;Ae<T;Ae++){let b=G(we[Ae],de[Ae],fe);M?Ce(b.x,b.y+v[h-1].y,v[h-1].x+Pe):Ce(b.x,b.y,u+Pe)}}}se(),ce();function se(){let oe=s.length/3;if(d){let D=0,Pe=H*D;for(let fe=0;fe<ie;fe++){let Y=F[fe];$e(Y[2]+Pe,Y[1]+Pe,Y[0]+Pe)}D=h+m*2,Pe=H*D;for(let fe=0;fe<ie;fe++){let Y=F[fe];$e(Y[0]+Pe,Y[1]+Pe,Y[2]+Pe)}}else{for(let D=0;D<ie;D++){let Pe=F[D];$e(Pe[2],Pe[1],Pe[0])}for(let D=0;D<ie;D++){let Pe=F[D];$e(Pe[0]+H*h,Pe[1]+H*h,Pe[2]+H*h)}}n.addGroup(oe,s.length/3-oe,0)}function ce(){let oe=s.length/3,D=0;ge(O,D),D+=O.length;for(let Pe=0,fe=S.length;Pe<fe;Pe++){let Y=S[Pe];ge(Y,D),D+=Y.length}n.addGroup(oe,s.length/3-oe,1)}function ge(oe,D){let Pe=oe.length;for(;--Pe>=0;){let fe=Pe,Y=Pe-1;Y<0&&(Y=oe.length-1);for(let _e=0,we=h+m*2;_e<we;_e++){let Ae=H*_e,T=H*(_e+1),b=D+fe+Ae,X=D+Y+Ae,re=D+Y+T,he=D+fe+T;Ye(b,X,re,he)}}}function Ce(oe,D,Pe){l.push(oe),l.push(D),l.push(Pe)}function $e(oe,D,Pe){Ke(oe),Ke(D),Ke(Pe);let fe=s.length/3,Y=x.generateTopUV(n,s,fe-3,fe-2,fe-1);lt(Y[0]),lt(Y[1]),lt(Y[2])}function Ye(oe,D,Pe,fe){Ke(oe),Ke(D),Ke(fe),Ke(D),Ke(Pe),Ke(fe);let Y=s.length/3,_e=x.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);lt(_e[0]),lt(_e[1]),lt(_e[3]),lt(_e[1]),lt(_e[2]),lt(_e[3])}function Ke(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function lt(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oo[s.type]().fromJSON(s)),new i(n,e.options)}},sb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-p),new ne(y,1-g)]:[new ne(o,1-l),new ne(h,1-u),new ne(f,1-p),new ne(m,1-g)]}};function rb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zo=class i extends Nh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ko=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,p=new ne;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let x=g+m,v=x,M=x+n+1,L=x+n+2,A=x+1;o.push(v,M,A),o.push(M,L,A)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vo=class i extends Mt{constructor(e=new Gn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;kn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];kn.isClockWise(x)===!0&&(p[m]=x.reverse())}let y=kn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=y.length;m<g;m++){let x=y[m],v=x[0]+u,M=x[1]+u,L=x[2]+u;n.push(v,M,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ab(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ab(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var xn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let x=[],v=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let A=L/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+M,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let v=h[g][x+1],M=h[g][x],L=h[g+1][x],A=h[g+1][x+1];(g!==0||a>0)&&f.push(v,M,A),(g!==n-1||l<Math.PI)&&f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ho=class i extends Mt{constructor(e=new Uo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ne,h=new P,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function y(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),g()}function m(v){h=e.getPointAt(v/t,h);let M=a.normals[v],L=a.binormals[v];for(let A=0;A<=s;A++){let E=A/s*Math.PI*2,I=Math.sin(E),j=-Math.cos(E);l.x=j*M.x+I*L.x,l.y=j*M.y+I*L.y,l.z=j*M.z+I*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let L=(s+1)*(v-1)+(M-1),A=(s+1)*v+(M-1),E=(s+1)*v+M,I=(s+1)*(v-1)+M;p.push(L,A,I),p.push(A,E,I)}}function x(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Oo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Go=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ys=class extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pi=class extends ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ob(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Cp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Wn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends Wn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hd:r=e,o=2*t-n;break;case Gd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hd:a=e,l=2*n-t;break;case Gd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*y+.5*p,M=f*m-f*y;for(let L=0;L!==o;++L)r[L]=g*a[h+L]+x*a[c+L]+v*a[l+L]+M*a[u+L];return r}},zh=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},kh=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ob(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=nr;var Xn=class extends Hi{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=ir;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Hi{};Wo.prototype.ValueTypeName="color";var _n=class extends Hi{};_n.prototype.ValueTypeName="number";var Vh=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mn=class extends Hi{InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}};Mn.prototype.ValueTypeName="quaternion";Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Hi{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=ir;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends Hi{};bn.prototype.ValueTypeName="vector";var Xo=class{constructor(e="",t=-1,n=[],s=s0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hb(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=lb(l);l=Kf(l,1,h),c=Kf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new _n(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,y){if(f.length!==0){let m=[],g=[];Cp(f,m,g,p),m.length!==0&&y.push(new u(d,m,g))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let y=0;y<d[p].morphTargets.length;y++)f[d[p].morphTargets[y]]=-1;for(let y in f){let m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){let v=d[p];m.push(v.time),g.push(v.morphTarget===y?1:0)}s.push(new _n(".morphTargetInfluence["+y+"]",m,g))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(bn,f+".position",d,"pos",s),n(Mn,f+".quaternion",d,"rot",s),n(bn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function cb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _n;case"vector":case"vector2":case"vector3":case"vector4":return bn;case"color":return Wo;case"quaternion":return Mn;case"bool":case"boolean":return Xn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cb(i.type);if(i.times===void 0){let t=[],n=[];Cp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Bn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},xs=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Ms=new xs,Ki=class{constructor(e){this.manager=e!==void 0?e:Ms,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var pn={},Hh=class extends Error{constructor(e,t){super(e),this.response=t}},on=class extends Ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:s});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=pn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,m=new ReadableStream({start(g){x();function x(){u.read().then(({done:v,value:M})=>{if(v)g.close();else{y+=M.byteLength;let L=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let A=0,E=h.length;A<E;A++){let I=h[A];I.onProgress&&I.onProgress(L)}g.enqueue(M),x()}},v=>{g.error(v)})}}});return new Response(m)}else throw new Hh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Bn.add(e,c);let h=pn[e];delete pn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=pn[e];if(h===void 0)throw this.manager.itemError(e),c;delete pn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Gh=class extends Ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Wr("img");function l(){h(),Bn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var dr=class extends Ki{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new Gh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Cc=new ke,Jf=new P,Qf=new P,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vn,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Jf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jf),Qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qf),t.updateMatrixWorld(),Cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wh=class extends ea{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},qo=class extends Qr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ep=new ke,Ur=new P,Pc=new P,Xh=class extends ea{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ur),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep)}},Yo=class extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qh=class extends ea{constructor(){super(new vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yn=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $o=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bn.add(e,l),r.manager.itemStart(e)}};var _s=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tp(){return performance.now()}var pu="\\[\\]\\.:\\/",ub=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",db="[^"+pu.replace("\\.","")+"]",fb=/((?:WC+[\/:])*)/.source.replace("WC",mu),pb=/(WCOD+)?/.source.replace("WCOD",db),mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),vb=new RegExp("^"+fb+pb+mb+gb+"$"),yb=["material","materials","bones","map"],Yh=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ub,"")}static parseTrackName(e){let t=vb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Yh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eS=new Float32Array(1);var Zo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ko=class i{constructor(e,t,n,s){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},ip=new ne,Jo=class{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ip.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ip).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);var ol={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xb=new vn(-1,1,1,-1,0,1),gu=class extends Mt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},_b=new gu,Ji=class{constructor(e){this._mesh=new ht(_b,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bs=class extends Ri{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jn.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ji(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var na=class extends Ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ll=class extends Ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bs(ol),this.copyPass.material.blending=nn,this.clock=new _s}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(a instanceof na?n=!0:a instanceof ll&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hl=class extends Ri{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Pp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pr=class i extends Ri{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,a,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Bt(r,a,{type:yi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Bt(r,a,{type:yi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Pp;this.highPassUniforms=jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ol;this.copyUniforms=jn.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new oi,this.fsQuad=new Ji(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};pr.BlurDirectionX=new ne(1,0);pr.BlurDirectionY=new ne(0,1);var Rp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ul=class extends Ri{constructor(){super();let e=Rp;this.uniforms=jn.clone(e.uniforms),this.material=new Go({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ei=`
  uniform vec3 uFogCool;
  uniform vec3 uFogWarm;
  uniform vec3 uSunDir;
  uniform float uFogDensity;
  uniform float uDetail;   // 1 near the ground, fades to 0 high up so the night map takes over
  vec3 hazeColor(vec3 dir) {
    vec2 a = normalize(dir.xz + 1e-5);
    vec2 b = normalize(uSunDir.xz + 1e-5);
    float w = pow(max(dot(a, b), 0.0), 5.0) * smoothstep(0.35, -0.05, dir.y) * 0.7;
    return mix(uFogCool, uFogWarm, w);
  }
  vec3 applyFog(vec3 col, vec3 wp) {
    vec3 d = wp - cameraPosition;
    float dist = length(d);
    float f = 1.0 - exp(-pow(dist * uFogDensity, 1.5));
    return mix(col, hazeColor(d / dist), clamp(f, 0.0, 1.0));
  }
`,Ip=ei,dl=i=>({uFogCool:i.cool,uFogWarm:i.warm,uSunDir:i.sun,uFogDensity:i.density,uDetail:i.detail}),Gi=`
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,sa=`
  vec3 skyEnv(vec3 R) {
    vec3 hor = hazeColor(R) * 0.8 + vec3(0.006, 0.008, 0.02);
    vec3 skyc = mix(hor, uZenith * 2.0 + vec3(0.003, 0.004, 0.012), smoothstep(0.02, 0.6, R.y));
    vec3 city = vec3(0.018, 0.012, 0.009);
    return R.y > 0.0 ? skyc : mix(hor * 0.7, city, smoothstep(0.0, -0.25, R.y));
  }
  vec3 nightLight(vec3 N, float yM) {
    vec3 sky = mix(vec3(0.050, 0.060, 0.115), vec3(0.075, 0.090, 0.17), max(N.y, 0.0));
    vec2 sd = normalize(uSunDir.xz + 1e-5);
    float west = max(dot(normalize(N.xz + 1e-5), sd), 0.0) * (1.0 - abs(N.y));
    vec3 dusk = vec3(0.30, 0.14, 0.07) * pow(west, 1.5) * 0.35;
    vec3 street = vec3(0.13, 0.08, 0.04) * exp(-max(yM, 0.0) / 12.0) * (1.0 - max(N.y, 0.0));
    return sky + dusk + street;
  }
`,ra=`
  varying vec3 vP;
  varying vec3 vN;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vP = wp.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,Lp={vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
      gl_Position = p.xyww;
    }
  `,fragmentShader:`
    uniform vec3 uSunDir;
    uniform vec3 uZenith;
    uniform vec3 uHorizon;
    uniform vec3 uGlow;
    uniform float uTime;
    uniform float uDay;     // 0 night (generated cities), 1 golden hour (photographed cities)
    uniform sampler2D uPhoto;  // dusk sky photograph (Canva), horizon at the bottom
    uniform float uPhotoOn;
    varying vec3 vDir;
    ${Gi}
    void main() {
      vec3 d = normalize(vDir);
      float h = d.y;
      vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
      vec2 a = normalize(d.xz + 1e-5);
      vec2 b = normalize(uSunDir.xz + 1e-5);
      float facing = max(dot(a, b), 0.0);
      float band = exp(-max(h, 0.0) * 9.0) * smoothstep(-0.25, 0.02, h);
      col += uGlow * band * (0.06 + pow(facing, 6.0) * 0.6);
      col += vec3(0.075, 0.045, 0.03) * exp(-max(h, 0.0) * 14.0) * smoothstep(-0.06, 0.0, h);   // city glow on the haze
      // the photographed dusk sky around the horizon: warmest toward the sun, mirrored around
      // the view so there is no seam, fading into the drawn sky overhead
      if (uPhotoOn > 0.5) {
        float rel = atan(d.z, d.x) - atan(uSunDir.z, uSunDir.x);
        rel = mod(rel + 3.14159265, 6.2831853) - 3.14159265;
        float x = 0.5 + rel * 2.0 / 3.14159265;            // one photo width per 90 degrees, 4 mirrored copies
        x = 1.0 - abs(fract(x * 0.5) * 2.0 - 1.0);          // mirror the photo across the full circle
        vec2 uv = vec2(0.01 + x * 0.98, clamp(h / 0.5, 0.0, 1.0) * 0.97 + 0.015);
        vec3 ph = texture2D(uPhoto, uv, -0.5).rgb;
        float away = 1.0 - pow(facing, 0.7);
        // away from the sunset only the blue of the sky survives; the clouds there are in shadow
        float lum = dot(ph, vec3(0.3, 0.55, 0.15));
        ph = mix(ph, vec3(0.18, 0.24, 0.5) * lum + ph * vec3(0.1, 0.12, 0.3), away * 0.85);
        float gain = mix(0.16, 0.55, uDay) * mix(1.0, 0.4, away);
        float m = smoothstep(-0.03, 0.01, h) * (1.0 - smoothstep(0.32, 0.6, h)) * mix(1.0, 0.5, away);
        col = mix(col, ph * gain, m);
      }
      // below the horizon: deep haze
      col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.2, h));
      // stars, fading in toward the zenith
      vec2 sp = vec2(atan(d.z, d.x) * 180.0, h * 260.0);
      vec2 cell = floor(sp);
      float r = hash12(cell);
      vec2 f = fract(sp) - vec2(hash12(cell + 7.1), hash12(cell + 3.7));
      float star = step(0.985, r) * smoothstep(0.08, 0.0, length(f)) * smoothstep(0.12, 0.5, h);
      star *= 0.6 + 0.4 * sin(uTime * (1.0 + r * 3.0) + r * 60.0);
      col += vec3(0.85, 0.9, 1.0) * star * 1.4 * (1.0 - uDay);
      gl_FragColor = vec4(col, 1.0);
    }
  `},Dp={vertexShader:ra,fragmentShader:`
    uniform sampler2D uMap;
    uniform float uTime;
    uniform float uLights;
    uniform vec4 uBounds; // lonMin, lonMax, latMin, latMax (for the graticule)
    ${ei}
    ${Gi}
    varying vec3 vP;
    varying vec2 vUv;
    void main() {
      vec3 t = texture2D(uMap, vUv).rgb;
      float land = t.r;
      vec3 water = vec3(0.006, 0.010, 0.022);
      vec3 ground = vec3(0.020, 0.022, 0.034) * (0.85 + 0.3 * fbm(vUv * 60.0));
      vec3 col = mix(water, ground, land);
      col += vec3(0.20, 0.32, 0.62) * t.b * 0.55;
      float tw = 0.85 + 0.15 * sin(uTime * 2.0 + hash12(floor(vUv * 900.0)) * 40.0);
      col += vec3(1.0, 0.72, 0.42) * pow(t.g, 1.4) * 2.4 * tw * uLights;
      // graticule every 2 degrees
      float lon = mix(uBounds.x, uBounds.y, vUv.x);
      float g = smoothstep(0.012, 0.0, abs(fract(lon / 2.0 + 0.5) - 0.5)) ;
      col += vec3(0.25, 0.35, 0.7) * g * 0.05;
      // soften the edges of the map into the haze
      float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x) * smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
      col *= edge;
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},fl={vertexShader:ra,fragmentShader:`
    uniform float uMode;      // 0 generic streets, 1 Manhattan grid, 2 park
    uniform mat2 uGridInv;    // scene xz -> (avenue, street) for Manhattan
    uniform vec2 uGridOrigin;
    uniform float uUnitsPerM;
    uniform vec3 uStreetCol;
    uniform float uDensity;
    uniform float uTime;
    uniform vec4 uAlignA;   // x, z (metres), radius (m), 0: a district with a north-south street grid
    uniform vec2 uAlignAS;  // block size (m)
    uniform vec4 uAlignB;
    uniform vec2 uAlignBS;
    uniform vec2 uAlignBO;  // grid origin of district B (metres)
    uniform vec3 uHoods[8]; // neighbourhoods that draw their own streets (x, z, radius in metres)
    ${ei}
    ${Gi}
    varying vec3 vP;
    // A road of half-width w (in units of x's period) with street lamps every lampM metres along it.
    // Far away, the lamps blend into an even glow so nothing shimmers.
    float road(float across, float along, float w) {
      float d = abs(fract(across + 0.5) - 0.5);
      float fw = fwidth(across);
      // far away (or at grazing angles) a road covers its true share of the ground, no more
      float far = clamp(fw * 1.5 - 0.1, 0.0, 1.0);
      float onRoad = mix(smoothstep(w + fw, max(w - fw, 0.0), d), 2.0 * w, far);
      float lampF = fract(along + 0.5) - 0.5;
      float lamp = smoothstep(0.13, 0.0, abs(lampF)) * smoothstep(w * 1.4 + fw, 0.0, d);
      float blur = max(clamp(fwidth(along) * 1.5 - 0.3, 0.0, 1.0), far);
      return onRoad * 0.035 + mix(lamp * 0.75, onRoad * 0.17, blur);
    }
    void main() {
      vec2 p = vP.xz;
      float m = 1.0 / uUnitsPerM; // metres per unit
      vec3 col = vec3(0.012, 0.013, 0.020);
      float glow = 0.0;
      if (uMode > 1.5) {
        float n = fbm(p * m * 0.012);
        col = mix(vec3(0.008, 0.016, 0.010), vec3(0.012, 0.022, 0.013), n);          // lawns and canopy
        col = mix(col, vec3(0.004, 0.009, 0.006), smoothstep(0.55, 0.75, fbm(p * m * 0.03 + 3.0)));
        vec2 q = p * m / 38.0;
        float lamp = step(0.86, hash12(floor(q))) * smoothstep(0.16, 0.0, length(fract(q) - 0.5));
        glow += lamp * 0.45;
      } else if (uMode > 0.5) {
        vec2 g = uGridInv * (p - uGridOrigin);          // x: avenue, y: street - 59
        float sR = g.y + 59.0;
        // the 1811 grid everywhere except below Houston St and in the West Village
        float onGrid = 1.0 - max(smoothstep(1.5, -0.5, sR), smoothstep(14.0, 12.5, sR) * smoothstep(0.8, 1.3, g.x));
        float avc = g.x >= 0.0 ? g.x : g.x / 0.47;
        // avenues run along the street axis: lamps every 40 m (half a street block)
        float av = road(avc, g.y * 2.0, g.x >= 0.0 ? 0.045 : 0.09);
        float st = road(g.y, avc * (g.x >= 0.0 ? 7.0 : 3.3), 0.1);
        float grid = max(av * 1.2, st);
        vec2 r = p * m / 90.0;
        float ang = hash12(floor(p * m / 700.0)) * 1.2;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 rr = rot * r;
        float old = max(road(rr.x, rr.y * 2.5, 0.07), road(rr.y * 0.6, rr.x * 3.0, 0.05));
        float pier = smoothstep(7.0, 7.15, g.x) * onGrid;
        vec2 pq = p * m / 30.0;
        float pierLamp = step(0.93, hash12(floor(pq))) * smoothstep(0.18, 0.0, length(fract(pq) - 0.5)) * 0.4;
        glow += mix(mix(old, grid, onGrid), pierLamp, pier);
        col = mix(col, vec3(0.018, 0.018, 0.022), pier);
      } else {
        vec2 q = p * m;
        vec2 cell = floor(q / 900.0);
        float ang = (hash12(cell) - 0.5) * 1.4;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 rq = rot * q;
        float d = smoothstep(0.25, 0.7, fbm(q / 2500.0)) * uDensity;
        float hood = 0.0;
        for (int i = 0; i < 8; i++) hood = max(hood, smoothstep(uHoods[i].z, uHoods[i].z * 0.85, length(q - uHoods[i].xy)));
        float minor = max(road(rq.x / 110.0, rq.y / 36.0, 0.05), road(rq.y / 160.0, rq.x / 36.0, 0.035)) * 0.45;
        float major = max(road(rq.x / 880.0, rq.y / 45.0, 0.009), road(rq.y / 960.0, rq.x / 45.0, 0.009));
        float gen = minor * d * (1.0 - hood) + major * (0.45 + 0.4 * d) * (1.0 - hood * 0.7);
        // aligned districts (downtown Orlando, the parcel map)
        vec2 a = (q - uAlignA.xy) / uAlignAS;
        float inA = smoothstep(uAlignA.z, uAlignA.z * 0.9, length(q - uAlignA.xy)) * (1.0 - hood);
        float alA = max(road(a.x, a.y * uAlignAS.y / 30.0, 0.05), road(a.y, a.x * uAlignAS.x / 30.0, 0.035));
        vec2 b = (q - uAlignBO) / uAlignBS;
        float inB = smoothstep(uAlignB.z, uAlignB.z * 0.9, max(abs(q.x - uAlignB.x), abs(q.y - uAlignB.y)));
        float alB = max(road(b.x, b.y * uAlignBS.y / 30.0, 0.04), road(b.y, b.x * uAlignBS.x / 30.0, 0.03));
        glow += mix(mix(gen, alA * 0.8, inA), alB * 0.8, inB);
        float lawn = max(hood, inB);
        col = mix(col, mix(vec3(0.010, 0.017, 0.011), vec3(0.016, 0.022, 0.014), fbm(q / 40.0)), lawn * 0.9);
      }
      col += uStreetCol * glow;
      gl_FragColor = vec4(applyFog(col, vP), uDetail);
    }
  `},pl={vertexShader:ra,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform vec3 uZenith;
    uniform sampler2D uReflect;   // the scene mirrored in the water plane
    uniform mat4 uReflectMat;
    uniform float uReflectOn;
    uniform float uMirrorY;
    ${ei}
    ${Gi}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / uUnitsPerM;
      float t = uTime;
      // wind ripples: a slow swell and a fine chop, the chop stretched across the view
      vec2 n1 = vec2(fbm(q / 90.0 + t * 0.04) - 0.5, fbm(q / 90.0 + 9.0 - t * 0.035) - 0.5);
      vec2 n2 = vec2(vnoise(q / 7.0 + vec2(t * 0.6, 0.0)) - 0.5, vnoise(q / 5.0 + vec2(3.0, -t * 0.5)) - 0.5);
      vec2 n = n1 * 0.5 + n2 * 0.5;
      vec3 N = normalize(vec3(n.x * 0.3, 1.0, n.y * 0.3));
      vec3 V = normalize(cameraPosition - vP);
      vec3 R = reflect(-V, N);
      float fres = 0.02 + 0.98 * pow(clamp(1.0 - max(dot(N, V), 0.0), 0.0, 1.0), 5.0);
      vec3 deep = vec3(0.002, 0.004, 0.008);
      vec3 skyc = mix(hazeColor(R), uZenith, smoothstep(0.0, 0.6, R.y));
      vec3 col = deep + skyc * fres * 0.9;
      if (uReflectOn > 0.0) {
        vec4 c = uReflectMat * vec4(vP.x, uMirrorY, vP.z, 1.0);
        vec2 uv = c.xy / c.w;
        float dist = length(vP - cameraPosition) / uUnitsPerM;
        float k = 1.0 / (1.0 + dist / 400.0);
        // ripples break the image into vertical streaks (lights stretch toward the viewer)
        vec2 dis = vec2(n.x * 0.014, n.y * 0.05) * k + vec2(0.0, -0.002);
        vec3 refl = vec3(0.0);
        for (int i = 0; i < 5; i++) {
          float o = (float(i) - 2.0) * 0.007 * k;
          refl += texture2D(uReflect, clamp(uv + dis + vec2(0.0, o), 0.001, 0.999)).rgb;
        }
        refl /= 5.0;
        float w = mix(0.2, 0.85, fres);
        col = mix(col, deep + refl * w, uReflectOn);
      }
      float glint = pow(max(dot(R, normalize(uSunDir)), 0.0), 120.0);
      col += vec3(1.0, 0.6, 0.35) * glint * 1.2;
      gl_FragColor = vec4(applyFog(col, vP), uDetail);
    }
  `},vu={vertexShader:`
    attribute float aSeed;
    attribute float aId;
    attribute float aStyle;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vId;
    varying float vStyle;
    void main() {
      vLocal = position;
      vSeed = aSeed; vId = aId; vStyle = aStyle;
      vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uHot;
    uniform float uHotOn;
    uniform vec3 uZenith;
    uniform sampler2D uBrick;   // facade photographs (Canva): brick walk-up and glass office tower
    uniform sampler2D uGlass;
    uniform float uFacadeOn;
    ${ei}
    ${Gi}
    ${sa}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vId;
    varying float vStyle;
    // style: 0 masonry (New York), 1 glass curtain wall, 2 rooftop plant, 3 stucco / concrete (Florida)
    vec3 masonry(float s, float florida) {
      vec3 c = vec3(0.40, 0.36, 0.29);                               // limestone
      if (s < 0.22) c = vec3(0.30, 0.13, 0.085);                     // red brick
      else if (s < 0.40) c = vec3(0.19, 0.11, 0.08);                 // brown brick
      else if (s < 0.55) c = vec3(0.27, 0.27, 0.28);                 // concrete
      else if (s < 0.65) c = vec3(0.47, 0.44, 0.38);                 // pale stone
      if (florida > 0.5) c = mix(vec3(0.50, 0.47, 0.41), vec3(0.36, 0.37, 0.38), step(0.55, s)); // stucco, concrete
      return c;
    }
    // Far away, single windows are smaller than a pixel. Instead of averaging them to a flat
    // grey, light whole clusters of windows (2x2, 4x4, ...) so the skyline still sparkles,
    // blending between cluster sizes so nothing pops or shimmers.
    float clusterLit(vec2 g, float occ, float seed) {
      float l = max(0.0, log2(max(max(fwidth(g.x), fwidth(g.y)) * 1.6, 1e-4)));
      float l0 = floor(l);
      float a = hash12(floor(g / exp2(l0)) + seed + l0 * 31.7);
      float b = hash12(floor(g / exp2(l0 + 1.0)) + seed + (l0 + 1.0) * 31.7);
      float k = fract(l);
      float sharp = 1.0 / (1.0 + l0 * 0.6);            // bigger clusters: softer on/off
      float on0 = smoothstep(1.0 - occ - 0.25 * (1.0 - sharp), 1.0 - occ + 0.25 * (1.0 - sharp) + 0.02, a);
      float on1 = smoothstep(1.0 - occ - 0.25 * (1.0 - sharp * 0.8), 1.0 - occ + 0.25 * (1.0 - sharp * 0.8) + 0.02, b);
      return mix(on0, on1, k) * (0.8 + 0.4 * mix(a, b, k));
    }
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      float hM = vScale.y / uUnitsPerM;                       // height of this block in metres
      float yM = vP.y / uUnitsPerM;                           // height above the street
      float topM = (vP.y + (0.5 - vLocal.y) * vScale.y) / uUnitsPerM;
      float side = 1.0 - abs(N.y);
      float glassy = step(0.5, vStyle) * step(vStyle, 1.5);
      float plant = step(1.5, vStyle) * step(vStyle, 2.5);
      float florida = step(2.5, vStyle);
      float s = fract(vSeed * 7.31);
      float uM = (abs(N.x) > 0.5 ? vLocal.z * vScale.z : vLocal.x * vScale.x) / uUnitsPerM;

      vec3 albedo = masonry(s, florida);
      if (plant > 0.5) albedo = vec3(0.24, 0.24, 0.25);
      vec3 amb = nightLight(N, yM);
      vec3 wall = albedo * amb;
      vec3 Np = N;
      if (vStyle > 0.5 && vStyle < 1.5 && side > 0.5) {
        vec2 pc = floor(vec2(((abs(N.x) > 0.5 ? vLocal.z * vScale.z : vLocal.x * vScale.x) / uUnitsPerM) / 1.5, vP.y / uUnitsPerM / 4.0));
        vec2 j = vec2(hash12(pc + vSeed), hash12(pc.yx + vSeed * 2.0)) - 0.5;
        Np = normalize(N + vec3(j.x, j.y * 0.6, j.x) * 0.06);
      }
      vec3 R = reflect(-V, Np);
      float fres = pow(clamp(1.0 - max(dot(N, V), 0.0), 0.0, 1.0), 5.0);

      // ---- windows -------------------------------------------------------
      float bayM = glassy > 0.5 ? 1.5 : (florida > 0.5 ? 3.4 : 3.0);
      float floorM = glassy > 0.5 ? 4.0 : 3.25;
      vec2 g = vec2(uM / bayM, yM / floorM);
      vec2 cell = floor(g), f = fract(g);
      float blur = clamp(max(fwidth(g.x), fwidth(g.y)) * 1.4 - 0.25, 0.0, 1.0);
      // lit rooms: decided per floor, then per run of windows (an apartment / an office suite)
      float occ = glassy > 0.5 ? 0.30 : 0.40;
      float floorOn = hash12(vec2(cell.y, vSeed * 91.0));
      float suite = floor(cell.x / (glassy > 0.5 ? 5.0 : 2.0));
      float roomOn = hash12(vec2(suite, cell.y) + vSeed * 37.0);
      float bayOn = hash12(cell * 1.37 + vSeed * 3.3);
      float lit = step(1.0 - occ, roomOn * 0.55 + floorOn * 0.3 + bayOn * 0.15);
      if (glassy > 0.5) {
        // offices light whole floors (cleaners, late teams); a few desks on the dark ones
        float run = hash12(vec2(floor(cell.x / 4.0), cell.y) + vSeed * 7.0);
        lit = step(0.62, floorOn) * step(0.2, run) + (1.0 - step(0.62, floorOn)) * step(0.93, run);
      }
      float tint = hash12(vec2(suite, cell.y) + vSeed * 11.0);
      vec3 warm = mix(vec3(1.0, 0.62, 0.34), vec3(1.0, 0.78, 0.55), tint);          // 2700-3500 K
      vec3 office = mix(vec3(0.82, 0.88, 1.0), vec3(1.0, 0.86, 0.68), step(0.7, tint)); // LED office, a few warm
      vec3 room = (glassy > 0.5 ? office : mix(warm, vec3(0.75, 0.84, 1.0), step(0.86, tint))) * (0.22 + 0.33 * hash12(cell + vSeed * 5.0));
      float ceiling = 0.75 + 0.5 * smoothstep(0.3, 0.95, f.y);                     // brighter near the ceiling
      vec3 dark = vec3(0.003, 0.004, 0.006) + skyEnv(R) * (0.05 + 0.7 * fres);         // unlit glass reflects the sky

      vec3 col;
      if (glassy > 0.5) {
        vec3 tintG = mix(vec3(0.55, 0.75, 0.85), vec3(0.62, 0.62, 0.66), step(0.5, s));
        float spandrel = step(f.y, 0.22);
        float mull = max(smoothstep(0.06, 0.0, f.x), smoothstep(0.94, 1.0, f.x));
        vec3 refl = skyEnv(R) * (0.05 + 0.5 * fres) * tintG;
        float grid2 = 0.55 + 0.45 * step(0.5, fract(uM / 3.0)) * step(0.35, f.y);   // ceiling light rows
        vec3 inside = lit * room * ceiling * grid2 * 0.3 + vec3(0.012, 0.014, 0.018) * (1.0 - lit);
        vec3 vision = inside + refl;
        vec3 spand = vec3(0.012, 0.014, 0.02) + refl * 0.8;
        col = mix(vision, spand, spandrel);
        col = mix(col, vec3(0.03, 0.033, 0.04) * (1.0 + amb * 4.0), mull * 0.8);
        // far away: average of a floor (glass, spandrel and the share of lit suites)
        vec3 roomMean = vec3(0.30, 0.31, 0.33);
        float cl = clusterLit(vec2(g.x / 48.0, g.y), occ * 1.2, vSeed * 53.0);
        vec3 avg = refl * 0.85 + roomMean * cl * 0.26 + vec3(0.008, 0.009, 0.012);
        col = mix(col, avg, blur);
      } else {
        float pane = smoothstep(0.18, 0.24, f.x) * smoothstep(0.82, 0.76, f.x) * smoothstep(0.24, 0.3, f.y) * smoothstep(0.9, 0.84, f.y);
        float blind = step(0.55, hash12(cell * 3.1 + vSeed)) * smoothstep(0.6, 0.62, f.y) * 0.65;   // drawn blinds
        vec3 win = mix(dark, room * ceiling * (1.0 - blind), lit);
        col = mix(wall, win, pane);
        // ledges / cornice lines catch a little light
        col += albedo * amb * 0.6 * smoothstep(0.06, 0.0, f.y) * side;
        vec3 roomMean = vec3(0.40, 0.27, 0.16);
        float cl = clusterLit(g, occ, vSeed * 53.0);
        vec3 avg = mix(wall, roomMean * cl * 0.75 + vec3(0.006, 0.007, 0.012), 0.36);
        col = mix(col, avg, blur);
      }
      if (plant > 0.5) {
        float louver = step(0.5, fract(yM / 0.6)) * 0.5 + 0.5;
        col = wall * louver;
      }

      // Photographed facades on brick and glass buildings, close enough to read the windows.
      // Each building starts the photo at its own offset (and some mirror it) so the repeat is hidden.
      float brickish = step(s, 0.40) * (1.0 - glassy) * (1.0 - florida) * (1.0 - plant);
      float photoFacade = (brickish + glassy) * uFacadeOn * side * step(4.6, yM);
      if (photoFacade > 0.0) {
        float span = glassy > 0.5 ? 26.0 : 19.0;                 // metres the photo covers
        vec2 off = vec2(hash12(vec2(vSeed, 1.0)), floor(hash12(vec2(vSeed, 2.0)) * 6.0) / 6.0);
        vec2 tuv = vec2(uM / span + off.x, (yM - 4.6) / span + off.y);
        if (fract(vSeed * 5.7) > 0.5) tuv.x = -tuv.x;
        vec3 ph = glassy > 0.5 ? texture2D(uGlass, tuv).rgb : texture2D(uBrick, tuv).rgb;
        // the photos are already lit at dusk; scale them into the scene's light
        vec3 phCol = ph * (glassy > 0.5 ? 0.55 : 0.42) + amb * 0.02;
        float nearW = 1.0 - smoothstep(0.35, 0.9, blur);
        col = mix(col, phCol, nearW * photoFacade);
      }

      // street level: shopfronts and lobbies
      float shop = step(yM, 4.6) * side * (1.0 - plant) * (1.0 - florida * 0.6);
      float open = step(0.3, hash12(vec2(floor(uM / 7.0), vSeed * 13.0)));
      vec3 shopCol = mix(vec3(1.0, 0.72, 0.45), vec3(0.9, 0.95, 1.0), glassy) * (0.35 + 0.35 * hash12(vec2(floor(uM / 7.0), 3.0 + vSeed)));
      float shopPane = smoothstep(0.6, 1.0, yM) * smoothstep(4.2, 3.9, yM) * step(0.08, fract(uM / 7.0));
      col = mix(col, shopCol * open * 1.1 + dark * 0.4, shop * shopPane);

      // roof: dark membrane / gravel, a parapet edge
      float roof = step(0.5, N.y);
      vec3 roofCol = vec3(0.020, 0.021, 0.025) * (0.8 + 0.4 * hash12(floor(vP.xz / uUnitsPerM / 3.0))) + uZenith * 0.6;
      vec2 e = 0.5 - abs(vLocal.xz);
      float parapet = smoothstep(0.8 / max(vScale.x / uUnitsPerM, 1.0), 0.0, min(e.x, e.y));
      roofCol += albedo * amb * 0.8 * parapet;
      col = mix(col, roofCol, roof);

      // floodlit crowns on some towers
      float crownOn = step(200.0, topM) * step(0.8, fract(vSeed * 3.7)) * (1.0 - plant);
      float band = smoothstep(topM - 18.0, topM - 2.0, yM) * side;
      vec3 crownCol = mix(vec3(1.0, 0.82, 0.55), vec3(0.75, 0.85, 1.0), step(0.85, fract(vSeed * 3.7)));
      col += crownCol * band * crownOn * 0.3 * (0.6 + 0.4 * fres);
      // aviation lights
      float corner = step(0.44, abs(vLocal.x)) * step(0.44, abs(vLocal.z)) * step(0.48, vLocal.y);
      col += vec3(1.0, 0.06, 0.03) * corner * step(150.0, topM) * 5.0 * step(0.5, fract(uTime * 0.5 + vSeed));

      // highlight (property-type hover)
      float hot = (1.0 - step(0.5, abs(vId - uHot))) * uHotOn;
      if (vId > -0.5) {
        col += vec3(1.0, 0.82, 0.55) * (0.10 + fres * 1.2) * hot;
        col *= 1.0 + hot * 0.8;
      }
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},Up={vertexShader:`
    attribute float aPart;
    varying vec3 vN;
    varying vec3 vP;
    varying float vPart;
    void main() {
      vPart = aPart;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uUnitsPerM;
    uniform vec3 uZenith;
    ${ei}
    ${Gi}
    ${sa}
    varying vec3 vN;
    varying vec3 vP;
    varying float vPart;
    void main() {
      vec3 N = normalize(vN);
      vec3 albedo = vPart < 0.5 ? vec3(0.20, 0.13, 0.08) : (vPart < 1.5 ? vec3(0.08, 0.08, 0.085) : vec3(0.05, 0.05, 0.055));
      if (vPart < 0.5) albedo *= 0.8 + 0.3 * step(0.5, fract(vP.y / uUnitsPerM / 0.9));   // hoops
      vec3 col = albedo * nightLight(N, vP.y / uUnitsPerM);
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},Np={vertexShader:`
    attribute float aSeed;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vRoof;
    void main() {
      vLocal = position;
      vSeed = aSeed;
      vRoof = uv.y;
      vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform vec3 uZenith;
    uniform float uUnitsPerM;
    ${ei}
    ${Gi}
    ${sa}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying vec3 vScale;
    varying float vSeed;
    varying float vRoof;
    void main() {
      vec3 N = normalize(vN);
      float yM = vP.y / uUnitsPerM;
      vec3 amb = nightLight(N, yM);
      float s = fract(vSeed * 5.13);
      vec3 col;
      if (vRoof > 1.5) {
        // roofs: grey or brown shingle, a third terracotta barrel tile
        float r = fract(vSeed * 3.71);
        vec3 alb = r < 0.33 ? vec3(0.30, 0.12, 0.065) : (r < 0.8 ? vec3(0.13, 0.13, 0.135) : vec3(0.16, 0.11, 0.075));
        float courses = 0.85 + 0.15 * step(0.5, fract(vP.y / uUnitsPerM / 0.35));
        col = alb * amb * courses * 1.2;
      } else {
        vec3 alb = vec3(0.56, 0.51, 0.41);                                   // cream stucco
        if (s < 0.18) alb = vec3(0.48, 0.42, 0.33);                          // beige
        else if (s < 0.34) alb = vec3(0.43, 0.44, 0.45);                     // grey
        else if (s < 0.46) alb = vec3(0.56, 0.50, 0.32);                     // pale yellow
        else if (s < 0.56) alb = vec3(0.40, 0.45, 0.50);                     // blue-grey
        else if (s < 0.72) alb = vec3(0.62, 0.60, 0.56);                     // white
        col = alb * amb;
        // windows: two or three per side, most rooms lit in the evening
        float side = abs(N.x) > 0.5 ? vLocal.z * vScale.z : vLocal.x * vScale.x;
        float sideW = abs(N.x) > 0.5 ? vScale.z : vScale.x;
        float n = max(2.0, floor(sideW / uUnitsPerM / 4.0));
        float u = (side / sideW + 0.5) * n;
        float storey = vScale.y / uUnitsPerM > 4.5 ? 2.0 : 1.0;
        float v = (vLocal.y) * storey;
        vec2 cell = vec2(floor(u), floor(v));
        vec2 f = vec2(fract(u), fract(v));
        float win = smoothstep(0.22, 0.28, f.x) * smoothstep(0.78, 0.72, f.x) * smoothstep(0.3, 0.36, f.y) * smoothstep(0.82, 0.76, f.y);
        float lit = step(0.42, hash12(cell + vSeed * 77.0 + N.x * 3.0 + N.z * 5.0));
        vec3 room = mix(vec3(1.0, 0.64, 0.36), vec3(1.0, 0.8, 0.58), hash12(cell * 2.3 + vSeed)) * (0.28 + 0.3 * hash12(cell + vSeed * 3.0));
        vec3 glass = vec3(0.004, 0.005, 0.009);
        col = mix(col, mix(glass, room, lit), win);
        // porch / coach lights on the front, with a warm wash on the wall around them
        float front = step(0.5, N.z) * step(0.35, fract(vSeed * 9.7));
        vec2 pl = vec2((vLocal.x - 0.22) * vScale.x, (vLocal.y - 0.62 / storey) * vScale.y) / uUnitsPerM;
        float d2 = dot(pl, pl);
        col += front * (vec3(1.0, 0.7, 0.4) * exp(-d2 * 0.9) * 0.35 + alb * vec3(1.0, 0.7, 0.4) * exp(-d2 * 0.12) * 0.25);
        col += front * vec3(1.0, 0.8, 0.5) * 2.0 * step(d2, 0.04);
      }
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},Op={vertexShader:`
    attribute float aSeed;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vH;
    ${Gi}
    void main() {
      vSeed = aSeed;
      vec3 p = position;
      float bump = vnoise(p.xz * 2.3 + aSeed * 40.0) * 0.35 + vnoise(p.xy * 4.1 + aSeed * 13.0) * 0.18;
      p *= 0.85 + bump;
      vH = position.y;
      vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normalize(position + vec3(0.0, 0.3, 0.0)));
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform vec3 uZenith;
    ${ei}
    ${Gi}
    ${sa}
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vH;
    void main() {
      vec3 N = normalize(vN);
      vec3 alb = mix(vec3(0.10, 0.17, 0.08), vec3(0.15, 0.20, 0.09), fract(vSeed * 9.1));
      float leaf = 0.7 + 0.5 * hash12(floor(vP.xz * 400.0 + vP.y * 300.0));
      vec3 col = alb * nightLight(N, 2.0 + vH * 4.0) * leaf * (0.55 + 0.45 * smoothstep(-0.6, 0.6, vH));
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},Fp={vertexShader:`
    attribute float aPart;
    attribute float aSeed;
    varying vec3 vN;
    varying vec3 vP;
    varying float vPart;
    varying float vSeed;
    uniform float uTime;
    void main() {
      vPart = aPart; vSeed = aSeed;
      vec3 p = position;
      p.xz += aPart * sin(uTime * 0.8 + aSeed * 20.0 + position.x * 4.0) * 0.01 * max(position.y - 0.85, 0.0) * 10.0;
      vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform vec3 uZenith;
    ${ei}
    ${Gi}
    ${sa}
    varying vec3 vN;
    varying vec3 vP;
    varying float vPart;
    varying float vSeed;
    void main() {
      vec3 N = normalize(vN);
      if (!gl_FrontFacing) N = -N;
      vec3 alb = vPart > 0.5 ? vec3(0.12, 0.19, 0.08) : vec3(0.28, 0.24, 0.18);
      vec3 col = alb * nightLight(N, 6.0) * (vPart > 0.5 ? 1.2 : 1.0);
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},Bp={vertexShader:`
    attribute float aSeed;
    varying vec2 vUv;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vUv = uv; vSeed = aSeed;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uTime;
    ${ei}
    varying vec2 vUv;
    varying vec3 vP;
    varying float vSeed;
    void main() {
      vec2 c = abs(vUv - 0.5) * 2.0;
      float edge = smoothstep(0.75, 1.0, max(c.x, c.y));
      float ripple = 0.85 + 0.15 * sin(uTime * 2.0 + (vUv.x + vUv.y) * 12.0 + vSeed * 30.0);
      vec3 col = mix(vec3(0.12, 0.7, 0.9) * 0.75 * ripple, vec3(0.5, 0.48, 0.44) * 0.06, edge);
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},zp={vertexShader:`
    attribute vec3 aEnd;
    attribute float aPhase;
    attribute float aSpeed;
    attribute vec3 aColor;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uSize;
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float t = fract(aPhase + uTime * aSpeed);
      vec3 p = mix(position, aEnd, t);
      vec4 wp = modelMatrix * vec4(p, 1.0);
      vP = wp.xyz;
      vec4 mv = viewMatrix * wp;
      gl_PointSize = clamp(uSize * uPixelRatio / -mv.z, 1.0, 6.0);
      vColor = aColor;
      gl_Position = projectionMatrix * mv;
    }
  `,fragmentShader:`
    ${ei}
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 4.0);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(vColor * a * fade * uDetail, 1.0);
    }
  `},yu={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    uniform float uDash;      // 0 solid, >0 travelling pulses (count along the length)
    uniform float uDraw;      // 0..1 how much of the ribbon is drawn (u = along)
    uniform float uFogOn;
    ${ei}
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
      float core = pow(clamp(across, 0.0, 1.0), 3.0);
      float a = core;
      if (uDash > 0.0) {
        float d = fract(vUv.x * uDash - uTime * 0.35);
        a *= 0.35 + 1.4 * smoothstep(0.75, 1.0, d);
      }
      a *= step(vUv.x, uDraw);
      vec3 col = uColor * a * uIntensity;
      if (uFogOn > 0.5) {
        vec3 d = vP - cameraPosition;
        col *= exp(-pow(length(d) * uFogDensity, 1.5)) * uDetail;
      }
      gl_FragColor = vec4(col, 1.0);
    }
  `},xu={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
  `,fragmentShader:`
    uniform vec3 uColor;
    ${ei}
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
      float lampF = abs(fract(vUv.x) - 0.5);
      float lamp = smoothstep(0.16, 0.0, lampF) * smoothstep(0.0, 0.8, across);
      float blur = clamp(fwidth(vUv.x) * 1.5 - 0.3, 0.0, 1.0);
      float g = across * 0.04 + mix(lamp * 0.6, 0.11 * across, blur);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(uColor * g * fade * uDetail, 1.0);
    }
  `},kp={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    varying vec3 vN;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vP;
    varying vec3 vN;
    void main() {
      vec3 V = normalize(cameraPosition - vP);
      float edge = pow(abs(dot(normalize(vN), V)), 2.0);
      float fade = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 2.2);
      float pulse = 0.8 + 0.2 * sin(uTime * 2.0 - vUv.y * 20.0);
      gl_FragColor = vec4(uColor * edge * fade * pulse * uIntensity, 1.0);
    }
  `},Vp={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform float uTime;
    uniform float uOn;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float r = length(vUv - 0.5) * 2.0;
      float t = fract(uTime * 0.4);
      float ring = smoothstep(0.035, 0.0, abs(r - t)) * (1.0 - t);
      float ring2 = smoothstep(0.03, 0.0, abs(r - fract(t + 0.5))) * (1.0 - fract(t + 0.5));
      float dotc = exp(-r * r * 200.0) * 3.0;
      gl_FragColor = vec4(uColor * (ring * 1.4 + ring2 * 1.4 + dotc) * uOn, 1.0);
    }
  `},Hp={vertexShader:`
    attribute float aFloor;
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vFloor;
    void main() {
      vLocal = position;
      vFloor = aFloor;
      vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uHot;
    uniform float uDraw;
    uniform float uTime;
    uniform float uCount;
    uniform vec3 uZenith;
    ${ei}
    varying vec3 vLocal;
    varying vec3 vN;
    varying vec3 vP;
    varying float vFloor;
    void main() {
      vec3 N = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.0);
      float shown = smoothstep(vFloor / uCount - 0.02, vFloor / uCount + 0.06, uDraw);
      float hot = 1.0 - step(0.5, abs(vFloor - uHot));
      // glowing slab edges
      vec3 a = abs(vLocal) * 2.0;
      float edgeX = smoothstep(0.9, 1.0, max(a.x, a.y)) + smoothstep(0.9, 1.0, max(a.z, a.y));
      float edges = smoothstep(0.92, 1.0, max(max(a.x, a.z), 0.0)) * smoothstep(0.7, 1.0, a.y);
      vec3 glass = vec3(0.03, 0.05, 0.09) + uZenith * fres * 1.6;
      vec3 lineCol = mix(vec3(0.55, 0.72, 1.0), vec3(1.0, 0.82, 0.55), hot);
      vec3 col = glass * (0.6 + 0.4 * shown);
      col += lineCol * (edges * 1.6 + fres * 0.3) * shown * (1.0 + hot * 1.8);
      col += vec3(1.0, 0.82, 0.55) * hot * 0.25;
      gl_FragColor = vec4(applyFog(col, vP), 1.0);
    }
  `},IS={vertexShader:ra,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uOn;
    uniform vec3 uPointer;
    uniform float uPointerOn;
    ${ei}
    ${Gi}
    varying vec3 vP;
    varying vec2 vUv;
    float lineAA(float x, float w) { float d = abs(fract(x + 0.5) - 0.5); float fw = fwidth(x); return smoothstep(w + fw, w, d); }
    void main() {
      vec2 q = vP.xz / uUnitsPerM;                  // metres
      vec2 block = floor(q / vec2(130.0, 210.0));
      vec2 inBlock = fract(q / vec2(130.0, 210.0));
      float street = max(lineAA(q.x / 130.0, 0.07), lineAA(q.y / 210.0, 0.045));
      // lots: two rows per block, 6-9 lots per row
      float n = 6.0 + floor(hash12(block) * 4.0);
      vec2 lotId = vec2(floor(inBlock.x * 2.0), floor(inBlock.y * n));
      float lot = max(lineAA(inBlock.x * 2.0, 0.025), lineAA(inBlock.y * n, 0.03 * n / 8.0));
      float id = hash12(block * 13.0 + lotId);
      float pulse = step(0.93, id) * (0.6 + 0.4 * sin(uTime * 2.0 + id * 30.0));
      float near = exp(-pow(length(q - uPointer.xz / uUnitsPerM) / 140.0, 2.0)) * uPointerOn;
      vec3 lineCol = vec3(0.45, 0.62, 1.0);
      vec3 col = lineCol * lot * (0.25 + near * 1.6) + vec3(1.0, 0.8, 0.5) * pulse * 0.22 * (1.0 - street);
      col += vec3(1.0, 0.8, 0.5) * near * 0.12 * (1.0 - street);
      // fade out at the edge of the overlay
      vec2 e = abs(vUv - 0.5) * 2.0;
      float edge = smoothstep(1.0, 0.6, max(e.x, e.y));
      gl_FragColor = vec4(col * uOn * edge, 1.0);
    }
  `},Gp={vertexShader:ra,fragmentShader:`
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uZenith;
    ${ei}
    ${Gi}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / 400.0 + vec2(uTime * 0.01, 0.0);
      float c = fbm(q) * 0.65 + fbm(q * 3.1 + 4.0) * 0.35;
      float a = smoothstep(0.52, 0.78, c);
      vec3 V = normalize(cameraPosition - vP);
      vec3 col = mix(uZenith * 2.2, hazeColor(-V) * 1.4, 0.5) * (0.6 + 0.6 * c);
      gl_FragColor = vec4(col, a * uOpacity);
    }
  `},aa={vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform vec3 uColor;
    uniform float uIntensity;
    varying vec2 vUv;
    void main() {
      float r = length(vUv - 0.5) * 2.0;
      float a = exp(-r * r * 9.0) + 0.25 * exp(-r * 3.0);
      a *= 1.0 - smoothstep(0.85, 1.0, r);
      gl_FragColor = vec4(uColor * a * uIntensity, 1.0);
    }
  `},Wp={uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    float ok(float v) { return (v >= 0.0 && v < 2000.0) ? v : 0.0; }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(ok(c.r), ok(c.g), ok(c.b), 1.0);
    }
  `},Xp={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.028},uVignette:{value:.9},uAberration:{value:6e-4}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    uniform float uVignette;
    uniform float uAberration;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime * 7.0) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float d = dot(c, c);
      vec2 off = c * d * uAberration * 18.0;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      col *= 1.0 - smoothstep(0.18, 0.75, d * uVignette * 1.6) * 0.5;
      col += (hash(vUv * 1000.0) - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `},_u={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform sampler2D map;
    uniform float uFade;
    uniform float uExposure;
    uniform float uSat;
    ${ei}
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      // The photo already carries its own sunlight and shadows: no relighting (per-triangle
      // shading made the photogrammetry mesh look shattered), only a gentle colour grade.
      vec3 c = texture2D(map, vUv).rgb;
      vec3 V = normalize(cameraPosition - vP);
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 g = max(mix(vec3(lum), c, uSat), 0.0) * uExposure;
      // late-afternoon split tone: shade a touch cooler, light a touch warmer
      g *= mix(vec3(0.94, 0.97, 1.04), vec3(1.05, 1.0, 0.94), smoothstep(0.04, 0.5, lum));
      vec3 col = applyFog(g, vP);
      col = mix(hazeColor(-V), col, uFade);
      gl_FragColor = vec4(col, 1.0);
    }
  `};var ml=63710,Zp=-77.5,Mb=34.5,oa=Math.PI/180,Kp=i=>Math.log(Math.tan(Math.PI/4+i*oa/2)),Jp=Kp(Mb),la=i=>1/Math.cos(i*oa);function xi(i,e,t=0,n=new P){return n.set(ml*(e-Zp)*oa,t/100*la(i),-ml*(Kp(i)-Jp))}function Qp(i,e){let t=i/ml/oa+Zp,n=-e/ml+Jp;return{lat:(2*Math.atan(Math.exp(n))-Math.PI/2)/oa,lon:t}}var em=(i,e)=>i*100/la(e),Yp=[40.7644,-73.973],jp=[.001233,-.002967],$p=[633e-6,457e-6],$n=[{a:-3.75,name:"East End"},{a:-3.3,name:"York"},{a:-2.8,name:"1st"},{a:-2.3,name:"2nd"},{a:-1.8,name:"3rd"},{a:-1.35,name:"Lexington"},{a:-.9,name:"Park"},{a:-.45,name:"Madison"},{a:0,name:"5th"},{a:1,name:"6th"},{a:2,name:"7th"},{a:3,name:"8th"},{a:4,name:"9th"},{a:5,name:"10th"},{a:6,name:"11th"},{a:6.85,name:"12th"}];function ca(i,e){return[Yp[0]+i*jp[0]+(e-59)*$p[0],Yp[1]+i*jp[1]+(e-59)*$p[1]]}var Ss={nyc:{lat:40.735,lon:-73.99},nyOffice:{lat:40.7459,lon:-73.9867,name:"New York",sub:"Commercial \xB7 276 Fifth Ave."},orlando:{lat:28.5434,lon:-81.3765},lakeEola:{lat:28.5434,lon:-81.3725},orlandoOffice:{lat:28.6555,lon:-81.2605,name:"Florida",sub:"Commercial \xB7 Residential \xB7 Winter Springs"},lakeJesup:{lat:28.722,lon:-81.235}};function tm(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Mu=i=>Math.sqrt(-2*Math.log(1-i()))*Math.cos(2*Math.PI*i()),ha=(i,e,t,n)=>{let s=(n-e)*111320*Math.cos((i+t)/2*Math.PI/180),r=(t-i)*110570;return Math.hypot(s,r)};function Et(i,e,t={}){return new At({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:e,...t})}var Ii={transparent:!0,blending:Zs,depthWrite:!1},ws=()=>({depthWrite:!1,depthTest:!0,transparent:!0}),vl=class{constructor(){this.items=[]}add(e,t,n,s,r,a,o,l=0,c=-1,h=0){this.items.push([e,t,n,s,r,a,o,l,c,h])}mesh(e){let t=this.items.length,n=new Ci(1,1,1),s=new di(n,e,Math.max(1,t)),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),l=new Pt;return this.items.forEach(([c,h,u,d,f,p,y,m,g,x],v)=>{l.position.set(c,x+f/2,h),l.rotation.set(0,p,0),l.scale.set(u,f,d),l.updateMatrix(),s.setMatrixAt(v,l.matrix),r[v]=y,a[v]=g,o[v]=m}),s.count=t,n.setAttribute("aSeed",new Qt(r,1)),n.setAttribute("aId",new Qt(a,1)),n.setAttribute("aStyle",new Qt(o,1)),s.frustumCulled=!1,s}};function gl(i,e,t,n,s,r,a,o,l,c,h=-1,u=null){let d=a/c,f=e(),p=Math.cos(o),y=Math.sin(o),m=(v,M)=>[t+v*p+M*y,n-v*y+M*p],g=s,x=r;if(d>105&&e()<.85){let v=Math.min(d*.28,16+e()*22);i.add(t,n,s,r,v*c,o,f,l===1&&e()<.5?i.florida?3:0:l,h);let M=v,L=.6+e()*.22;if(e()<.45){let A=(d-v)*(.55+e()*.2);i.add(t,n,s*L,r*L,A*c,o,f,l,h,M*c),M+=A;let E=L*(.68+e()*.15);i.add(t,n,s*E,r*E,(d-M)*c,o,f,l,h,M*c),g=s*E,x=r*E}else i.add(t,n,s*L,r*L,(d-M)*c,o,f,l,h,M*c),g=s*L,x=r*L;i.add(t,n,g*.5,x*.5,(5+e()*7)*c,o,f,2,h,a);return}if(i.add(t,n,s,r,a,o,f,l,h),d>40&&d<=105&&e()<.3){let v=(6+e()*10)*c;i.add(t,n,s*.78,r*.78,v,o,f,l,h,a),a+=v,g=s*.78,x=r*.78}if(d>14){let[v,M]=m((e()-.5)*g*.3,(e()-.5)*x*.3);if(e()<(d>30?.55:.25)&&i.add(v,M,g*(.14+e()*.12),x*(.16+e()*.12),(2.5+e()*2.5)*c,o,f,2,h,a),u&&l===0&&d<95&&e()<.4){let[L,A]=m((e()-.5)*g*.6,(e()-.5)*x*.6);u.push([L,A,a,(5+e()*2.5)*c,e()])}}}function bb(i,e,t=2048){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});s.fillStyle="#000",s.fillRect(0,0,t,t);let r=o=>(o+e)/(2*e)*t;for(let{polys:o,color:l}of i){s.fillStyle=l;for(let c of o){s.beginPath();for(let h of c)h.forEach(([u,d],f)=>f?s.lineTo(r(u),r(d)):s.moveTo(r(u),r(d))),s.closePath();s.fill("evenodd")}}let a=s.getImageData(0,0,t,t).data;return(o,l)=>{let c=Math.floor(r(o)),h=Math.floor(r(l));if(c<0||h<0||c>=t||h>=t)return[0,0,0];let u=(h*t+c)*4;return[a[u],a[u+1],a[u+2]]}}function bu(){return{uAlignA:{value:[1e9,1e9,1,0]},uAlignAS:{value:[100,100]},uAlignB:{value:[1e9,1e9,1,0]},uAlignBS:{value:[100,100]},uAlignBO:{value:[0,0]},uHoods:{value:Array.from({length:8},()=>new P(1e9,1e9,1))}}}function mr(i,e,t=0){let[n,...s]=i,r=new Gn(n.map(([l,c])=>new ne(l,-c)));s.forEach(l=>r.holes.push(new Gn(l.map(([c,h])=>new ne(c,-h)))));let a=new Vo(r);a.rotateX(-Math.PI/2);let o=new ht(a,e);return o.position.y=t,o.frustumCulled=!1,o}function im(i,e,t=.02){let n=[],s=[],r=[],a=0,o=[0];for(let c=1;c<i.length;c++)a+=i[c].distanceTo(i[c-1]),o.push(a);i.forEach((c,h)=>{let u=i[Math.max(0,h-1)],d=i[Math.min(i.length-1,h+1)],f=new P().subVectors(d,u).setY(0).normalize(),p=new P(-f.z,0,f.x).multiplyScalar(e/2);n.push(c.x+p.x,c.y+t,c.z+p.z,c.x-p.x,c.y+t,c.z-p.z);let y=o[h]/a;if(s.push(y,0,y,1),h){let m=(h-1)*2;r.push(m,m+1,m+2,m+1,m+3,m+2)}});let l=new Mt;return l.setAttribute("position",new nt(n,3)),l.setAttribute("uv",new nt(s,2)),l.setIndex(r),l}function ua(i,e){let t=i.length,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3);i.forEach(([h,u,d,f,p],y)=>{n.set([h.x,h.y,h.z],y*3),s.set([u.x,u.y,u.z],y*3),r[y]=d,a[y]=f,o.set([p.r,p.g,p.b],y*3)});let l=new Mt;l.setAttribute("position",new it(n,3)),l.setAttribute("aEnd",new it(s,3)),l.setAttribute("aPhase",new it(r,1)),l.setAttribute("aSpeed",new it(a,1)),l.setAttribute("aColor",new it(o,3));let c=new yn(l,Et(zp,e,Ii));return c.frustumCulled=!1,c}function nm(i,e,t,n){let s=n.low,r={value:0},a={value:1},o={cool:{value:new be(.02,.026,.07)},warm:{value:new be(.3,.12,.06)},sun:{value:new P(-.9,-.02,.36).normalize()},density:{value:1/400},detail:{value:1}},l={value:new be(.006,.01,.04)},c=dl(o),h={uTime:r,uPixelRatio:a,fog:o,uZenith:l,hit:[],waterMeshes:[]},u={uReflect:{value:null},uReflectMat:{value:new ke},uReflectOn:{value:0},uMirrorY:{value:0}};h.reflect=u;{let R=Et(Lp,{uSunDir:o.sun,uZenith:l,uHorizon:{value:new be(.018,.022,.075)},uGlow:{value:new be(.95,.36,.14)},uTime:r,uDay:{value:0},uPhoto:{value:e.sky},uPhotoOn:{value:e.sky?1:0}},{side:ri,depthWrite:!1});h.sky=R;let U=new ht(new xn(10,48,24),R);U.renderOrder=-20,U.frustumCulled=!1,i.add(U)}{let R=t.map,U=xi(R.latMax,R.lonMin),C=xi(R.latMin,R.lonMax),N=new li(C.x-U.x,C.z-U.z);N.rotateX(-Math.PI/2);let z=Et(Dp,{uMap:{value:e.map},uTime:r,uLights:{value:1},uBounds:{value:[R.lonMin,R.lonMax,R.latMin,R.latMax]},...c},ws()),q=new ht(N,z);q.position.set((U.x+C.x)/2,-.6,(U.z+C.z)/2),q.renderOrder=-10,q.frustumCulled=!1,i.add(q),h.map=z}let f=la(40.73)/100,p=xi(Ss.nyc.lat,Ss.nyc.lon),y=new Vt;y.position.copy(p),i.add(y);let m=(R,U,C=0)=>xi(R,U,C).sub(p),g=R=>R.map(([U,C])=>{let N=m(C,U);return[N.x,N.z]});{let R=Et(pl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},ws()),U=new ht(new li(1,1),R);h.waterMeshes.push(U),U.geometry.rotateX(-Math.PI/2),U.scale.set(900,1,900),U.position.y=-.3,U.renderOrder=-9,U.frustumCulled=!1,y.add(U),h.nycWater=U}let x=(R,U,C)=>Et(fl,{uMode:{value:R},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new ne},uUnitsPerM:{value:f},uStreetCol:{value:new be(C)},uDensity:{value:U},uTime:r,...bu(),...c},ws()),v=m(...ca(0,59)),M=m(...ca(1,59)).sub(v),L=m(...ca(0,60)).sub(v),A=M.x*L.z-L.x*M.z,E=[L.z/A,-M.z/A,-L.x/A,M.x/A],I=(R,U)=>new P(v.x+M.x*R+L.x*(U-59),0,v.z+M.z*R+L.z*(U-59)),j=(R,U)=>{let C=R-v.x,N=U-v.z;return[E[0]*C+E[2]*N,E[1]*C+E[3]*N+59]},_=Math.atan2(-M.z,M.x);h.nycGrid={gridToLocal:I,localToGrid:j};let S=[],W=[],F=[];for(let[R,U]of Object.entries(t.nyc)){if(R.startsWith("_"))continue;let C=R==="Manhattan",N=Q=>Math.max(...Q.outer.map(([,te])=>te))<40.7045,z=C?U.filter(Q=>!N(Q)):U;C&&F.push(...U.filter(N).map(Q=>[g(Q.outer),...Q.holes.map(g)]));let q=C?x(1,1,"#d9e3ff"):x(0,R==="Brooklyn"||R==="Queens"?1:.7,"#ffb36b");C&&(q.uniforms.uGridInv.value.set(E),q.uniforms.uGridOrigin.value.set(p.x+v.x,p.z+v.z));let K=z.map(Q=>[g(Q.outer),...Q.holes.map(g)]);K.forEach(Q=>{let te=mr(Q,q,-.2);te.renderOrder=-8,y.add(te)}),S.push({polys:K,color:C?"#ffff00":"#ff0000"}),C&&W.push(...K)}{let R=x(2,1,"#ffd9a0");F.forEach(N=>{let z=mr(N,R,-.16);z.renderOrder=-7,y.add(z)});let U=[],C=new be(1.6,1.3,.9);for(let[N]of F){let z=0;for(let q=0;q<N.length;q++){let[K,Q]=N[q],[te,le]=N[(q+1)%N.length],Me=Math.hypot(te-K,le-Q);for(let Se=25*f-z%(25*f);Se<Me;Se+=25*f){let Ie=new P(K+(te-K)*Se/Me,.05,Q+(le-Q)*Se/Me);U.push([Ie,Ie,0,0,C])}z+=Me}}y.add(ua(U,{uTime:r,uPixelRatio:a,uSize:{value:10},...c}))}let O=[I(0,59.6),I(3,59.6),I(3,110),I(0,110)].map(R=>[R.x,R.z]);{let R=x(2,1,"#ffd9a0"),U=mr([O],R,-.15);U.renderOrder=-7,y.add(U);let C=[];for(let q=0;q<40;q++){let K=q/40*Math.PI*2,Q=I(1.55+Math.cos(K)*1.05,91.2+Math.sin(K)*5);C.push([Q.x,Q.z])}let N=Et(pl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},ws()),z=mr([C],N,-.1);h.waterMeshes.push(z),z.renderOrder=-6,y.add(z)}let H=bb([...S.filter(R=>R.color==="#ff0000"),...S.filter(R=>R.color==="#ffff00")],500,s?2048:3072),ie=(R,U)=>H(R,U)[0]>128,Z=(R,U)=>H(R,U)[1]>128,ve=new vl,xe=[],de=tm(1811),Qe=[],ft=(R,U,C)=>Qe.some(([N,z,q])=>Math.hypot(R-N,U-z)<q+C),se=(R,U,C)=>{let N=16+de()*22,z=Math.exp(-((ha(R,U,40.7565,-73.9815)/1150)**2)),q=Math.exp(-((ha(R,U,40.7078,-74.0095)/640)**2)),K=Math.exp(-((ha(R,U,40.7535,-74.0015)/330)**2)),Q=Math.exp(-(((C-84)/28)**2))*(C>59?1:0),te=Math.exp(Mu(de)*.45);return N+=z*135*te+q*120*te+K*150*te+Q*30*de(),C>110&&(N*=.7),Math.min(N,330)},ce=(R,U,C,N,z,q=1,K=-1,Q=_,te=[])=>{let le=m(R,U),Me=f;ve.add(le.x,le.z,C*Me,N*Me,z*Me,Q,de(),q,K);let Se=z;for(let[Ie,We,Ze]of te)ve.add(le.x,le.z,Ie*Me,We*Me,Ze*Me,Q,de(),q,K,Se*Me),Se+=Ze;return Qe.push([le.x,le.z,Math.max(C,N)*Me*.8]),le.clone().setY(Se*Me)};ce(40.7484,-73.9857,130,60,320,0,-1,_,[[60,40,60],[12,12,63]]),ce(40.713,-74.0132,62,62,417,1,-1,_+.785,[[6,6,124]]),ce(40.7516,-73.9755,45,45,275,0,-1,_,[[25,25,30],[6,6,14]]),ce(40.766,-73.981,45,30,472,1),ce(40.7615,-73.9718,28,28,426,1),ce(40.7649,-73.9775,18,40,435,1),ce(40.7656,-73.979,40,30,306,1),ce(40.754,-74.001,60,45,387,1),ce(40.7545,-74.0025,45,40,308,1),ce(40.7531,-73.979,50,50,427,1),ce(40.7553,-73.9845,45,40,366,1),ce(40.7593,-73.98,40,30,259,0),ce(40.7116,-74.0112,50,50,298,1),ce(40.7104,-74.0108,50,50,297,1),ce(40.7069,-74.0089,40,35,283,0),ce(40.6923,-73.9853,40,40,325,1,-1,0);let ge=[["Office",1.6,47.5,55,40,240,1],["Retail",-.15,55.5,60,30,34,0],["Industrial",6.35,27.5,120,60,18,0],["Multifamily",3.5,64.5,50,35,128,0],["Hospitality",2.35,45.5,45,40,190,1],["Healthcare",-2.95,31.5,90,60,92,0],["Mixed use",5.6,37.5,55,50,262,1],["Land development",6.1,41.5,110,55,2,0],["Storage",6,21.5,70,50,36,0],["Restaurants",1.7,12.5,30,22,14,0],["Churches",4.3,71.5,25,45,28,0],["Special purpose",6.35,35.5,140,60,34,0]];h.typeTargets=ge.map(([R,U,C,N,z,q,K],Q)=>{let te=I(U,C),le=f;return ve.add(te.x,te.z,N*le,z*le,q*le,_,de(),K,Q),R==="Churches"&&ve.add(te.x,te.z+.12,7*le,7*le,46*le,_,de(),0,Q,28*le),Qe.push([te.x,te.z,Math.max(N,z)*le*.7]),{name:R,local:te.clone().setY((R==="Churches"?74:q)*le+.05)}});let Ce=M.length(),$e=L.length(),Ye=M.clone().normalize(),Ke=L.clone().normalize(),lt=s?42:28;for(let R=0;R<$n.length-1;R++){let U=$n[R].a,C=$n[R+1].a;for(let N=1;N<220;N++){if(U>=0&&C<=3&&N>=59&&N<110)continue;let z=(C-U)*Ce,q=$e,K=15*f,Q=10*f,te=Math.max(1,Math.round((z-2*K)/(lt*f))),le=I(U,N),[Me,Se]=ca((U+C)/2,N+.5),Ie=se(Me,Se,N),We=Ie>150&&de()<.55,Ze=We?1:2,at=We?Math.max(1,Math.round(te/3)):te;for(let Je=0;Je<at;Je++)for(let mt=0;mt<Ze;mt++){let ct=K+(z-2*K)*(Je+.5)/at,ye=Q+(q-2*Q)*(mt+.5)/Ze,Ve=le.x+Ye.x*ct+Ke.x*ye,Fe=le.z+Ye.z*ct+Ke.z*ye;if(!Z(Ve,Fe)||ft(Ve,Fe,.1)||de()<.06)continue;let ut=(z-2*K)/at*(.86+de()*.1),w=(q-2*Q)/Ze*(.84+de()*.12),B=We?Ie*(.8+de()*.5):se(Me,Se,N)*(.6+de()*.5);B=Math.max(10,B)*f,gl(ve,de,Ve,Fe,ut,w,B,_,B/f>140?de()<.8?1:0:de()<.08?1:0,f,-1,xe)}}}{let R=(s?55:42)*f,U=m(40.7,-74.02),C=m(40.742,-73.97);for(let N=U.x;N<C.x;N+=R)for(let z=C.z;z<U.z;z+=R){let[q,K]=j(N,z);if(!(K<1.5||K<14&&q>1)||!Z(N,z)||ft(N,z,R*.5))continue;let te=Math.floor(N/(5*f*100))*31+Math.floor(z/(5*f*100)),le=_+Math.sin(te*12.9898)*43758.5453%1*.9,Me={lat:40.735+-z/(110570*f),lon:-73.99+N/(111320*Math.cos(40.73*Math.PI/180)*f)},Se=se(Me.lat,Me.lon,0)*(.5+de()*.6);de()<.12||gl(ve,de,N+(de()-.5)*R*.3,z+(de()-.5)*R*.3,R*(.6+de()*.3),R*(.6+de()*.3),Math.max(9,Se)*f,le,Se>140?1:0,f,-1,xe)}}{let R=[[40.6925,-73.987,520,160],[40.7465,-73.944,520,140],[40.718,-74.036,600,170],[40.745,-74.029,400,60]],U=(s?120:85)*f,C=(s?7e3:9500)*f,N=m(40.73,-73.975);for(let z=N.x-C;z<N.x+C;z+=U)for(let q=N.z-C;q<N.z+C;q+=U){if(Math.hypot(z-N.x,q-N.z)>C||Z(z,q)||!ie(z,q)||de()<.38)continue;let K={lat:Ss.nyc.lat-q/(110570*f)*1,lon:Ss.nyc.lon+z/(111320*Math.cos(40.73*Math.PI/180)*f)},Q=9+de()*14;for(let[le,Me,Se,Ie]of R)Q+=Ie*Math.exp(-((ha(K.lat,K.lon,le,Me)/Se)**2))*Math.exp(Mu(de)*.4);let te=Math.floor(z/(6*U))*.37+Math.floor(q/(6*U))*.21;gl(ve,de,z+(de()-.5)*U*.3,q+(de()-.5)*U*.3,U*(.45+de()*.3),U*(.45+de()*.35),Q*f,te,Q>120?1:0,f,-1,Q<60?xe:null)}}let oe={uBrick:{value:e.brick},uGlass:{value:e.glass},uFacadeOn:{value:e.brick&&e.glass?1:0}},D={uTime:r,uUnitsPerM:{value:f},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...oe,...c},Pe=ve.mesh(Et(vu,D));y.add(Pe);{let R=new Vi(.5,.5,.9,10,1,!1).toNonIndexed();R.translate(0,.95,0);let U=new Vi(0,.56,.38,10,1,!0).toNonIndexed();U.translate(0,1.59,0);let C=new Ci(.8,.5,.8).toNonIndexed();C.translate(0,.25,0);let N=[R,U,C],z=N.reduce((Ie,We)=>Ie+We.attributes.position.count,0),q=new Float32Array(z*3),K=new Float32Array(z*3),Q=new Float32Array(z),te=0;N.forEach((Ie,We)=>{q.set(Ie.attributes.position.array,te*3),K.set(Ie.attributes.normal.array,te*3),Q.fill(We,te,te+Ie.attributes.position.count),te+=Ie.attributes.position.count});let le=new Mt;le.setAttribute("position",new it(q,3)),le.setAttribute("normal",new it(K,3)),le.setAttribute("aPart",new it(Q,1));let Me=new di(le,Et(Up,{uUnitsPerM:{value:f},uZenith:l,...c}),Math.max(1,xe.length)),Se=new Pt;xe.forEach(([Ie,We,Ze,at,Je],mt)=>{Se.position.set(Ie,Ze,We),Se.rotation.set(0,Je*6,0),Se.scale.set(at,at*1.15,at),Se.updateMatrix(),Me.setMatrixAt(mt,Se.matrix)}),Me.count=xe.length,Me.frustumCulled=!1,y.add(Me)}h.nycBuildings={mesh:Pe,uniforms:D,count:ve.items.length};{let R=[[40.7118,-74.0005,40.7022,-73.9893,40,84,"#ffe6c4"],[40.7153,-73.9938,40.6993,-73.9858,41,101,"#d6e2ff"],[40.7172,-73.9832,40.7108,-73.96,41,102,"#ffe6c4"],[40.7604,-73.9615,40.7506,-73.9405,40,106,"#d6e2ff"],[40.85,-73.9445,40.854,-73.965,65,184,"#e8eeff"],[40.6112,-74.033,40.6017,-74.0573,69,211,"#e8eeff"]],U=[],C=[],N=[],z=new oi({color:new be(.03,.035,.05)});for(let[q,K,Q,te,le,Me,Se]of R){let Ie=m(q,K,le),We=m(Q,te,le),Ze=new ht(im([Ie,We],26*f,0),Et(yu,{uColor:{value:new be(Se)},uIntensity:{value:.9},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Ii));Ze.frustumCulled=!1,y.add(Ze);let at=Ie.clone().lerp(We,.24),Je=Ie.clone().lerp(We,.76);for(let Ve of[at,Je]){let Fe=new ht(new Ci(10*f,Me*f,16*f),z);Fe.position.set(Ve.x,Me*f/2,Ve.z),Fe.rotation.y=Math.atan2(We.x-Ie.x,We.z-Ie.z),y.add(Fe)}let mt=(Me-le)*f,ct=s?24:44,ye=new be(Se).multiplyScalar(2.2);for(let Ve=0;Ve<=ct;Ve++){let Fe=Ve/ct,ut=at.clone().lerp(Je,Fe);ut.y+=mt*(1-4*Fe*(1-Fe))*.92+.05,C.push([ut,ut,0,0,ye])}for(let[Ve,Fe]of[[Ie,at],[Je,We]])for(let ut=0;ut<=10;ut++){let w=Ve.clone().lerp(Fe,ut/10);w.y+=mt*(Ve===Ie?ut/10:1-ut/10)*.9,C.push([w,w,0,0,ye])}for(let Ve=0;Ve<(s?14:30);Ve++){let Fe=Ve%2===0;N.push([Fe?Ie:We,Fe?We:Ie,Math.random(),.02+Math.random()*.02,Fe?new be(2.2,2,1.7):new be(2.2,.2,.1)])}}y.add(ua(C,{uTime:r,uPixelRatio:a,uSize:{value:18},...c})),y.add(ua(N,{uTime:r,uPixelRatio:a,uSize:{value:22},...c}))}{let R=[],U=new be(2,1.85,1.6),C=new be(2.4,.18,.08),N=s?6:12;$n.forEach(({a:z},q)=>{if(z<-3.6)return;let K=q%2===0;for(let Q=1;Q<200;Q+=20){let te=I(z,Q),le=I(z,Q+20);if(!(!Z(te.x,te.z)||!Z(le.x,le.z))&&!(z>0&&z<3&&Q+20>59&&Q<110)){te.y=le.y=.02;for(let Me=0;Me<N;Me++)R.push([K?te:le,K?le:te,Math.random(),.03+Math.random()*.03,K?U:C])}}});for(let z of[14,23,34,42,57,72,79,86,96,116,125])for(let q=0;q<$n.length-1;q++){let K=I($n[q].a,z),Q=I($n[q+1].a,z);if(!(!Z(K.x,K.z)||!Z(Q.x,Q.z))){K.y=Q.y=.02;for(let te=0;te<3;te++){let le=te%2===0;R.push([le?K:Q,le?Q:K,Math.random(),.06+Math.random()*.05,le?U:C])}}}y.add(ua(R,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}{let R=m(40.6892,-74.0445),U=new Vt;U.position.copy(R),U.scale.setScalar(f),U.rotation.y=-Math.PI*.72;let C=(Ie,We)=>new At({vertexShader:`varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){ vY = position.y; vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`uniform vec3 uColor; uniform vec3 uRim; uniform float uTop;
        ${Ip}
        varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){
          vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vP);
          float flood = 0.55 + 0.45 * max(dot(N, normalize(vec3(0.2, 0.55, 0.0) + V * 0.8)), 0.0);   // floodlights from the island
          float fall = 1.0 - 0.35 * clamp(vY / uTop, 0.0, 1.0);
          float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
          vec3 col = uColor * flood * fall + uRim * rim * 0.8;
          gl_FragColor = vec4(applyFog(col, vP), 1.0);
        }`,uniforms:{uColor:{value:new be(...Ie)},uRim:{value:new be(...We)},uTop:{value:93},...c}}),N=C([.3,.68,.58],[.6,1,.9]),z=C([.085,.075,.065],[.14,.12,.09]),q=(Ie,We,Ze,at,Je,mt=0,ct=0)=>{let ye=new ht(Ie,We);return ye.position.set(Ze,at,Je),ye.rotation.set(mt,0,ct),U.add(ye),ye},K=new Gn;for(let Ie=0;Ie<22;Ie++){let We=Ie/22*Math.PI*2,Ze=Ie%2?36:52;Ie?K.lineTo(Math.cos(We)*Ze,Math.sin(We)*Ze):K.moveTo(Math.cos(We)*Ze,Math.sin(We)*Ze)}let Q=new Bo(K,{depth:9,bevelEnabled:!1});Q.rotateX(-Math.PI/2),q(Q,z,0,0,0),q(new Vi(9.5,13,38,4,1),z,0,28,0).rotation.y=Math.PI/4,q(new Vi(10.5,10.5,2.5,4,1),z,0,47,0).rotation.y=Math.PI/4,q(new Vi(3.4,6.2,30,16),N,0,63,0),q(new xn(3.6,16,10),N,0,78,0),q(new xn(2.3,16,12),N,0,82.5,.6);for(let Ie=0;Ie<7;Ie++){let We=-.95+Ie/6*1.9;q(new Vi(.05,.35,4.2,5),N,Math.sin(We)*2.6,84.5,Math.cos(We)*2.6*.6+.6).rotation.set(Math.cos(We)*.9,0,-Math.sin(We)*.9)}q(new Vi(.9,1.2,13,10),N,3.2,86,0,0,-.18),q(new Vi(1,.6,2.4,10),N,4.4,92.4,0),q(new Ci(1.2,6.5,4.2),N,-4,70,.6,0,.25);let te=new ht(new li(1,1),Et(aa,{uColor:{value:new be(1,.78,.4)},uIntensity:{value:2.6}},Ii));te.position.set(4.4,94.5,0),te.scale.setScalar(11),U.add(te);let le=new ht(new li(1,1),Et(aa,{uColor:{value:new be(1,.95,.8)},uIntensity:{value:4}},Ii));le.position.copy(te.position),le.scale.setScalar(3.2),U.add(le);let Me=new ht(new li(1,1),Et(aa,{uColor:{value:new be(.55,.9,.8)},uIntensity:{value:.18}},Ii));Me.position.set(0,40,0),Me.scale.setScalar(120),U.add(Me);let Se=new Vt;Se.position.copy(U.position),Se.scale.copy(U.scale);for(let Ie of[te,le,Me])U.remove(Ie),Ie.position.applyAxisAngle(new P(0,1,0),U.rotation.y),Se.add(Ie);U.traverse(Ie=>{Ie.frustumCulled=!1}),Se.traverse(Ie=>{Ie.frustumCulled=!1}),y.add(U,Se),h.billboards=[te,le,Me]}let Y=la(28.6)/100,_e=xi(28.6,-81.32),we=new Vt;we.position.copy(_e),i.add(we);let Ae=(R,U,C=0)=>xi(R,U,C).sub(_e),T=tm(1875);{let R=Et(fl,{uMode:{value:0},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new ne},uUnitsPerM:{value:Y},uStreetCol:{value:new be("#ffad5c")},uDensity:{value:1},uTime:r,...bu(),...c},ws());h.orlGround=R;let U=new ht(new ko(0,1,96),R);U.geometry.rotateX(-Math.PI/2),U.scale.setScalar(380),U.position.y=-.2,U.renderOrder=-8,U.frustumCulled=!1,we.add(U)}let X=[["Lake Eola",28.5434,-81.3725,165,150,0],["Lake Lucerne",28.5335,-81.3795,170,110,.3],["Lake Cherokee",28.531,-81.3685,120,90,0],["Lake Davis",28.5293,-81.3737,130,110,.2],["Lake Ivanhoe",28.5665,-81.378,280,620,.15],["Lake Highland",28.56,-81.369,150,130,0],["Lake Dot",28.552,-81.385,100,90,0],["Lake Adair",28.565,-81.399,260,300,0],["Lake Concord",28.564,-81.3925,150,120,0],["Lake Underhill",28.534,-81.333,700,380,.2],["Lake Baldwin",28.569,-81.322,420,360,0],["Lake Virginia",28.5915,-81.342,620,520,.4],["Lake Maitland",28.625,-81.355,900,800,.2],["Lake Killarney",28.603,-81.375,520,420,0],["Lake Howell",28.628,-81.29,600,700,.3],["Red Bug Lake",28.648,-81.266,260,200,.5],["Lake Jesup",28.722,-81.235,7200,2500,.28],["Lake Fairview",28.59,-81.405,700,600,0],["Lake Rowena",28.564,-81.362,180,160,0],["Lake Barton",28.59,-81.32,300,250,.3],["Lake Burkett",28.61,-81.275,400,280,.6]].map(([R,U,C,N,z,q])=>{let K=Ae(U,C);return{name:R,x:K.x,z:K.z,rx:N*Y,rz:z*Y,rot:q}});for(let R=0;R<(s?70:140);R++){let U=28.4+T()*.42,C=-81.52+T()*.36,N=Ae(U,C),z=(60+Math.pow(T(),2)*420)*Y;X.some(q=>Math.hypot(q.x-N.x,q.z-N.z)<q.rx+z+.5)||ha(U,C,28.5415,-81.379)<900||X.push({name:"",x:N.x,z:N.z,rx:z,rz:z*(.6+T()*.6),rot:T()*3})}let re=(R,U,C=0)=>X.some(N=>{let z=R-N.x,q=U-N.z,K=Math.cos(N.rot),Q=Math.sin(N.rot),te=(z*K-q*Q)/(N.rx+C),le=(z*Q+q*K)/(N.rz+C);return te*te+le*le<1});{let R=Et(pl,{uTime:r,uUnitsPerM:{value:Y},uZenith:l,...u,...c},ws());for(let U of X){let C=[],z=T()*10;for(let K=0;K<40;K++){let Q=K/40*Math.PI*2,te=1+.08*Math.sin(Q*3+z)+.05*Math.sin(Q*5+z*2),le=Math.cos(Q)*U.rx*te,Me=Math.sin(Q)*U.rz*te,Se=Math.cos(U.rot),Ie=Math.sin(U.rot);C.push([U.x+le*Se+Me*Ie,U.z-le*Ie+Me*Se])}let q=mr([C],R,-.15);q.renderOrder=-7,we.add(q),h.waterMeshes.push(q)}}let he=[["I-4",46,[[28.43,-81.47],[28.475,-81.432],[28.507,-81.4],[28.528,-81.39],[28.546,-81.3855],[28.57,-81.377],[28.6,-81.367],[28.64,-81.354],[28.668,-81.343],[28.7,-81.33],[28.735,-81.318]]],["SR 408",36,[[28.537,-81.48],[28.537,-81.42],[28.5405,-81.392],[28.5395,-81.36],[28.537,-81.32],[28.53,-81.27],[28.528,-81.21]]],["SR 436",28,[[28.46,-81.307],[28.52,-81.309],[28.56,-81.31],[28.6,-81.318],[28.64,-81.33],[28.668,-81.34],[28.7,-81.355]]],["SR 417",34,[[28.5,-81.2],[28.56,-81.22],[28.62,-81.24],[28.68,-81.27],[28.72,-81.29]]],["Red Bug Lake Rd",22,[[28.6555,-81.33],[28.6545,-81.3],[28.6555,-81.262],[28.656,-81.225]]],["Tuskawilla Rd",20,[[28.62,-81.2605],[28.6555,-81.2605],[28.69,-81.256],[28.704,-81.254]]],["SR 434",24,[[28.697,-81.36],[28.6985,-81.3],[28.696,-81.25],[28.69,-81.2]]],["Orange Ave",18,[[28.5,-81.379],[28.541,-81.379],[28.58,-81.378]]]],ae=[];{let R=[],U=new be(2,1.85,1.6),C=new be(2.4,.18,.08);for(let[,N,z]of he){let q=z.map(([le,Me])=>Ae(le,Me)),Q=new ur(q).getPoints(q.length*12),te=new ht(im(Q,N*Y,.03),Et(yu,{uColor:{value:new be("#ffb066")},uIntensity:{value:N>30?.75:.45},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Ii));te.frustumCulled=!1,we.add(te);for(let le=1;le<Q.length;le++)if(ae.push([Q[le-1],Q[le]]),le%2===0){let Me=Q[le-2].clone().setY(.05),Se=Q[le].clone().setY(.05),Ie=N>30?s?2:4:1;for(let We=0;We<Ie;We++){let Ze=We%2===0;R.push([Ze?Me:Se,Ze?Se:Me,Math.random(),.15+Math.random()*.15,Ze?U:C])}}}we.add(ua(R,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}let De=(R,U,C)=>ae.some(([N,z])=>{let q=z.x-N.x,K=z.z-N.z,Q=Math.max(0,Math.min(1,((R-N.x)*q+(U-N.z)*K)/(q*q+K*K)));return Math.hypot(R-N.x-q*Q,U-N.z-K*Q)<C}),pe=Ae(28.5434,-81.3725),Ue=new vl;Ue.florida=!0;{let R=Ae(28.5415,-81.3795),U=60*Y;h.downtownGrid={origin:R.clone().add(new P(-30*Y,0,-30*Y)),block:120};for(let C=R.x-16*U;C<R.x+16*U;C+=U)for(let N=R.z-16*U;N<R.z+16*U;N+=U){let z=Math.hypot(C-R.x,N-R.z)/Y;if(z>1300||re(C,N,25*Y)||De(C,N,30*Y)||T()<.3||C>pe.x+120*Y||Math.hypot(C-pe.x,N-pe.z)<260*Y)continue;let q=Math.exp(-((z/420)**2)),K=8+T()*18+q*120*Math.exp(Mu(T)*.45);K=Math.min(K,140),gl(Ue,T,C+(T()-.5)*U*.08,N+(T()-.5)*U*.08,U*(.55+T()*.25),U*(.55+T()*.25),K*Y,0,K>60&&T()<.75?1:3,Y)}}{let R=Ae(28.5446,-81.377),U=15,C=12*Y,N=1.6*Y,z=new Ci(1,1,1),q=Et(Hp,{uHot:{value:-1},uDraw:{value:0},uTime:r,uCount:{value:U},uZenith:l,...c},{transparent:!1}),K=new di(z,q,U),Q=new Float32Array(U),te=new Pt;for(let le=0;le<U;le++){let Me=1-le*.012;te.position.set(R.x,6*Y+le*(C+N)+C/2,R.z),te.rotation.set(0,.35+le*.012,0),te.scale.set(44*Y*Me,C,30*Y*Me),te.updateMatrix(),K.setMatrixAt(le,te.matrix),Q[le]=le}z.setAttribute("aFloor",new Qt(Q,1)),K.frustumCulled=!1,K.userData.keep=!0,we.add(K),h.tower={mesh:K,uniforms:q.uniforms,floorLocal:le=>R.clone().setY(6*Y+le*(C+N)+C/2),base:R,n:U}}{let R=Ae(28.5432,-81.3727,12),U=new ht(new li(1,1),Et(aa,{uColor:{value:new be(.6,.8,1)},uIntensity:{value:1.1}},Ii));U.position.copy(R),U.scale.setScalar(40*Y),we.add(U),h.billboards.push(U),h.fountain=U}let st=[],ue=[],Ee=[],He=[],Ge=[],Be=[],rt=(R,U,C,N)=>{T()<N?He.push([R,U,(8+T()*6)*Y,T()]):Ee.push([R,U,C*Y,T()])},et=(R,U,C,N,z,q,K,Q,te,le=1,Me=.35)=>{st.push([R,U,C,N,z,q,T()]),T()<.28&&ue.push([R+K*.55,U+Q*.55,8*Y,4.5*Y,q,T()]),T()<.65&&rt(R+K*.95+(T()-.5)*te*.6,U+Q*.95+(T()-.5)*te*.6,(5+T()*5)*le,Me),T()<.4&&rt(R-K*.8+(T()-.5)*te*.6,U-Q*.8+(T()-.5)*te*.6,(4+T()*3.5)*le,Me*1.3)},bt=[[28.6555,-81.2605,s?1300:1900,s?.55:.8],[28.638,-81.29,s?700:1100,.6],[28.672,-81.233,s?600:1e3,.55],[28.565,-81.392,s?600:900,.6],[28.524,-81.362,s?500:800,.55],[28.5428,-81.3645,s?600:820,.8],[28.5545,-81.369,s?400:550,.7],[28.5432,-81.3683,420,.85]],k=Ae(28.5415,-81.3795);{let R=22*Y,U=34*Y,C=14*Y,N=U*2+C,z=N*4;for(let[Se,Ie,We,Ze]of bt){let at=Ae(Se,Ie),Je=We*Y;for(let mt=at.x-Je;mt<at.x+Je;mt+=z)for(let ct=at.z-Je;ct<at.z+Je;ct+=z){if(Math.hypot(mt-at.x,ct-at.z)>Je-z*.3)continue;let ye=(T()-.5)*.8,Ve=Math.cos(ye),Fe=Math.sin(ye),ut=(B,$)=>[mt+B*Ve-$*Fe,ct+B*Fe+$*Ve];for(let B=0;B<=4;B++){let $=-z/2+B*N,[J,V]=ut(-z/2,$),[me,Te]=ut(z/2,$);Be.push([J,V,me,Te,9*Y])}for(let B of[-z/2,z/2]){let[$,J]=ut(B,-z/2),[V,me]=ut(B,z/2);Be.push([$,J,V,me,9*Y])}let w=Math.floor((z-2*10*Y)/R);for(let B=0;B<4;B++)for(let $=0;$<w;$++)for(let J of[-1,1]){if(T()>Ze)continue;let V=-z/2+10*Y+($+.5)*R,me=-z/2+B*N+N/2,Te=me+J*(U/2+2*Y),[Re,Le]=ut(V,Te);if(re(Re,Le,16*Y)||De(Re,Le,24*Y)||Re<pe.x+120*Y&&Math.hypot(Re-k.x,Le-k.z)<1150*Y||Math.hypot(Re-pe.x,Le-pe.z)<250*Y)continue;let qe=ut(V,me);et(Re,Le,(12+T()*6)*Y,(10+T()*4)*Y,(T()<.3?6:3.3)*Y,-ye,qe[0]-Re,qe[1]-Le,R)}}}let q=Ae(28.556,-81.356),K=130*Y,Q=210*Y,te=1040*Y,le=q.x-te,Me=q.z-te;for(let Se=le;Se<=q.x+te+1e-6;Se+=K)Ge.push([new P(Se,.06,Me),new P(Se,.06,q.z+te)]);for(let Se=Me;Se<=q.z+te+1e-6;Se+=Q)Ge.push([new P(le,.06,Se),new P(q.x+te,.06,Se)]);for(let Se=le;Se<q.x+te-1e-6;Se+=K)for(let Ie=Me;Ie<q.z+te-1e-6;Ie+=Q){Ge.push([new P(Se+K/2,.06,Ie+8*Y),new P(Se+K/2,.06,Ie+Q-8*Y)]);let We=6+Math.floor(T()*3);for(let Ze=1;Ze<We;Ze++)Ge.push([new P(Se+8*Y,.06,Ie+Q*Ze/We),new P(Se+K-8*Y,.06,Ie+Q*Ze/We)]);for(let Ze=0;Ze<2;Ze++)for(let at=0;at<We;at++){let Je=Se+K*(Ze===0?.27:.73),mt=Ie+Q*(at+.5)/We;if(re(Je,mt,12*Y)||T()<.08)continue;let ct=(Se+K/2-Je)*.9;et(Je,mt,K/2*.42,Q/We*.6,(T()<.25?6:3.3)*Y,0,ct,0,Q/We,1.5,.12)}}h.parcelCenter=q,h.parcelGrid={origin:new P(le,0,Me),bw:130,bh:210,span:1040}}{let R=[];for(let N=0;N<48;N++){let z=N/48*Math.PI*2;R.push([pe.x+Math.cos(z)*255*Y,pe.z+Math.sin(z)*235*Y])}let U=Et(fl,{uMode:{value:2},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new ne},uUnitsPerM:{value:Y},uStreetCol:{value:new be("#ffd9a0")},uDensity:{value:1},uTime:r,...bu(),...c},ws()),C=mr([R],U,-.18);C.renderOrder=-7.5,we.add(C)}for(let R=0;R<70;R++){let U=T()*Math.PI*2,C=(185+T()*60)*Y,N=pe.x+Math.cos(U)*C,z=pe.z+Math.sin(U)*C*.92;re(N,z,8*Y)||(T()<.35?He.push([N,z,(9+T()*5)*Y,T()]):Ee.push([N,z,(6+T()*6)*Y,T()]))}{let R=[],U=[];for(let[q,K,Q,te,le]of Be){let Me=Math.hypot(Q-q,te-K),Se=Math.max(1,Math.round(Me/(40*Y))),Ie=(Q-q)/Me,Ze=-((te-K)/Me)*le/2,at=Ie*le/2;for(let Je=0;Je<Se;Je++){let mt=q+(Q-q)*(Je/Se),ct=K+(te-K)*(Je/Se),ye=q+(Q-q)*((Je+1)/Se),Ve=K+(te-K)*((Je+1)/Se);if(re((mt+ye)/2,(ct+Ve)/2,4*Y))continue;let Fe=Me*(Je/Se)/Y/32,ut=Me*((Je+1)/Se)/Y/32;R.push(mt+Ze,.03,ct+at,mt-Ze,.03,ct-at,ye+Ze,.03,Ve+at,mt-Ze,.03,ct-at,ye-Ze,.03,Ve-at,ye+Ze,.03,Ve+at),U.push(Fe,0,Fe,1,ut,0,Fe,1,ut,1,ut,0)}}let N=new Mt;N.setAttribute("position",new nt(R,3)),N.setAttribute("uv",new nt(U,2));let z=new ht(N,Et(xu,{uColor:{value:new be("#ffb56b")},...c},Ii));z.frustumCulled=!1,we.add(z)}{let R=h.orlGround.uniforms,U=q=>[(q.x+_e.x)/Y,(q.z+_e.z)/Y],C=h.downtownGrid;R.uAlignA.value=[...U(C.origin),1500,0],R.uAlignAS.value=[C.block,C.block];let N=h.parcelGrid,z=U(h.parcelCenter);R.uAlignB.value=[z[0],z[1],N.span,0],R.uAlignBS.value=[N.bw,N.bh],R.uAlignBO.value=U(N.origin),bt.forEach(([q,K,Q],te)=>{let le=Ae(q,K),[Me,Se]=U(le);R.uHoods.value[te].set(Me,Se,Q)})}{let R=[],U=[];for(let z of X){if(!z.name)continue;let q=48,K=Math.PI*(z.rx+z.rz)/Y,Q=10*Y;for(let te=0;te<q;te++){let le=(ut,w)=>{let B=Math.cos(ut)*(z.rx+w),$=Math.sin(ut)*(z.rz+w),J=Math.cos(z.rot),V=Math.sin(z.rot);return[z.x+B*J+$*V,z.z-B*V+$*J]},Me=te/q*Math.PI*2,Se=(te+1)/q*Math.PI*2,[Ie,We]=le(Me,6*Y),[Ze,at]=le(Se,6*Y),[Je,mt]=le(Me,6*Y+Q),[ct,ye]=le(Se,6*Y+Q),Ve=K*te/q/26,Fe=K*(te+1)/q/26;R.push(Ie,.04,We,Je,.04,mt,Ze,.04,at,Je,.04,mt,ct,.04,ye,Ze,.04,at),U.push(Ve,0,Ve,1,Fe,0,Ve,1,Fe,1,Fe,0)}}let C=new Mt;C.setAttribute("position",new nt(R,3)),C.setAttribute("uv",new nt(U,2));let N=new ht(C,Et(xu,{uColor:{value:new be("#ffd6a0")},...c},Ii));N.frustumCulled=!1,we.add(N)}{let R=new Pt,U=st.length,C={uTime:r,uZenith:l,uUnitsPerM:{value:Y},...c},N=Et(Np,C),z=new Float32Array(U);st.forEach((ct,ye)=>{z[ye]=ct[6]});let q=new Ci(1,1,1);q.translate(0,.5,0),q.setAttribute("aSeed",new Qt(z,1));let K=new di(q,N,Math.max(1,U)),Q=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.18,1,0],[.18,1,0]],te=[[0,5,1],[0,4,5],[2,5,4],[2,4,3],[1,5,2],[3,4,0],[0,1,2],[0,2,3]],le=new Float32Array(te.length*9);te.forEach((ct,ye)=>ct.forEach((Ve,Fe)=>le.set(Q[Ve],ye*9+Fe*3)));let Me=new Mt;Me.setAttribute("position",new it(le,3)),Me.setAttribute("uv",new it(new Float32Array(le.length/3*2).map((ct,ye)=>ye%2?2:0),2)),Me.computeVertexNormals(),Me.setAttribute("aSeed",new Qt(z,1));let Se=new di(Me,N,Math.max(1,U));st.forEach(([ct,ye,Ve,Fe,ut,w],B)=>{R.position.set(ct,0,ye),R.rotation.set(0,w,0),R.scale.set(Ve,ut,Fe),R.updateMatrix(),K.setMatrixAt(B,R.matrix),R.position.set(ct,ut,ye),R.scale.set(Ve*1.08,Math.min(Ve,Fe)*.36,Fe*1.12),R.updateMatrix(),Se.setMatrixAt(B,R.matrix)}),K.frustumCulled=Se.frustumCulled=!1,we.add(K,Se);let Ie=new li(1,1);Ie.rotateX(-Math.PI/2);let We=new di(Ie,Et(Bp,{uTime:r,...c}),Math.max(1,ue.length)),Ze=new Float32Array(ue.length);ue.forEach(([ct,ye,Ve,Fe,ut,w],B)=>{R.position.set(ct,.02,ye),R.rotation.set(0,ut,0),R.scale.set(Ve,1,Fe),R.updateMatrix(),We.setMatrixAt(B,R.matrix),Ze[B]=w}),Ie.setAttribute("aSeed",new Qt(Ze,1)),We.frustumCulled=!1,we.add(We);let at=new zo(1,2),Je=new di(at,Et(Op,{uZenith:l,...c}),Math.max(1,Ee.length)),mt=new Float32Array(Ee.length);Ee.forEach(([ct,ye,Ve,Fe],ut)=>{R.position.set(ct,Ve*.75,ye),R.rotation.set(0,Fe*7,0),R.scale.set(Ve,Ve*.62,Ve),R.updateMatrix(),Je.setMatrixAt(ut,R.matrix),mt[ut]=Fe}),at.setAttribute("aSeed",new Qt(mt,1)),Je.frustumCulled=!1,we.add(Je);{let ct=[],ye=[],Ve=[],Fe=(me,Te,Re)=>{ct.push(...me),ye.push(...Te),Ve.push(Re)};for(let me=0;me<5;me++){let Te=me/5*Math.PI*2,Re=(me+1)/5*Math.PI*2,Le=.032,qe=.022,je=(St,wt,Ut)=>[Math.cos(St)*wt+Ut*Ut*.05,Ut,Math.sin(St)*wt],ze=[Math.cos(Te),0,Math.sin(Te)],yt=[Math.cos(Re),0,Math.sin(Re)];Fe(je(Te,Le,0),ze,0),Fe(je(Re,Le,0),yt,0),Fe(je(Re,qe,.9),yt,0),Fe(je(Te,Le,0),ze,0),Fe(je(Re,qe,.9),yt,0),Fe(je(Te,qe,.9),ze,0)}let w=[.04,.9,0],B=9;for(let me=0;me<B;me++){let Te=me/B*Math.PI*2+me%2*.2,Re=Math.cos(Te),Le=Math.sin(Te),qe=4,je=ze=>[w[0]+Re*ze*.42,w[1]+.08*Math.sin(ze*Math.PI*.6)-.22*ze*ze,w[2]+Le*ze*.42];for(let ze=0;ze<qe;ze++){let yt=ze/qe,St=(ze+1)/qe,wt=.07*Math.sin(Math.PI*Math.min(.95,yt+.08)),Ut=.07*Math.sin(Math.PI*Math.min(.95,St+.08)),dt=je(yt),Xe=je(St),Nt=-Le,_t=Re,Yt=[[dt[0]+Nt*wt,dt[1]-.02,dt[2]+_t*wt],[dt[0]-Nt*wt,dt[1]-.02,dt[2]-_t*wt],[Xe[0]+Nt*Ut,Xe[1]-.02,Xe[2]+_t*Ut],[Xe[0]-Nt*Ut,Xe[1]-.02,Xe[2]-_t*Ut]],Gt=[0,1,0];Fe(Yt[0],Gt,1),Fe(Yt[2],Gt,1),Fe(dt,Gt,1),Fe(dt,Gt,1),Fe(Yt[2],Gt,1),Fe(Xe,Gt,1),Fe(Yt[1],Gt,1),Fe(dt,Gt,1),Fe(Yt[3],Gt,1),Fe(dt,Gt,1),Fe(Xe,Gt,1),Fe(Yt[3],Gt,1)}}let $=new Mt;$.setAttribute("position",new nt(ct,3)),$.setAttribute("normal",new nt(ye,3)),$.setAttribute("aPart",new nt(Ve,1));let J=new Float32Array(He.length),V=new di($,Et(Fp,{uTime:r,uZenith:l,...c},{side:ni}),Math.max(1,He.length));He.forEach(([me,Te,Re,Le],qe)=>{R.position.set(me,0,Te),R.rotation.set(0,Le*6.28,0),R.scale.setScalar(Re),R.updateMatrix(),V.setMatrixAt(qe,R.matrix),J[qe]=Le}),$.setAttribute("aSeed",new Qt(J,1)),V.frustumCulled=!1,we.add(V)}h.homeCount=U}let Oe={uTime:r,uUnitsPerM:{value:Y},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...oe,...c};we.add(Ue.mesh(Et(vu,Oe)));{let R=new Float32Array(Ge.length*6);Ge.forEach(([z,q],K)=>R.set([z.x,z.y,z.z,q.x,q.y,q.z],K*6));let U=new Mt;U.setAttribute("position",new it(R,3));let C=new At({vertexShader:"varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`uniform float uOn; uniform vec3 uPointer; uniform float uPointerOn; uniform vec3 uCenter; uniform float uSpan; varying vec3 vP;
        void main(){ float d = length(vP.xz - uPointer.xz); float near = exp(-d*d/(uSpan*uSpan*0.012)) * uPointerOn;
          float edge = 1.0 - smoothstep(0.6, 1.0, length(vP.xz - uCenter.xz) / uSpan);
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (0.32 + near * 3.0);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,uniforms:{uOn:{value:0},uPointer:{value:new P(1e6,0,1e6)},uPointerOn:{value:0},uCenter:{value:new P().copy(h.parcelCenter).add(_e)},uSpan:{value:1100*Y}},...Ii}),N=new gs(U,C);N.frustumCulled=!1,N.userData.keep=!0,we.add(N),h.parcels=C,h.parcelLines=N}let ee=(R,U=0)=>xi(R.lat,R.lon,U);h.offices=[Ss.nyOffice,Ss.orlandoOffice].map((R,U)=>{let C=ee(R),N=Et(Vp,{uTime:r,uOn:{value:1},uColor:{value:new be(1,.8,.5)}},{...Ii,side:ni}),z=new ht(new li(1,1),N);z.geometry.rotateX(-Math.PI/2),z.position.copy(C).setY(C.y+.06),z.frustumCulled=!1,i.add(z);let q=Et(kp,{uColor:{value:new be(1,.78,.45)},uIntensity:{value:1.4},uTime:r},{...Ii,side:ni}),K=new ht(new Vi(1,1,1,24,1,!0),q);return K.geometry.translate(0,.5,0),K.position.copy(C),K.frustumCulled=!1,i.add(K),h.hit.push({center:C,r:0,chapter:U===0?2:3,label:U===0?"New York \xB7 Commercial":"Florida \xB7 Commercial & residential",place:R}),{...R,id:U===0?"new-york":"orlando",pos:C,ring:z,beam:K,ringMat:N,beamMat:q}});{let R=h.offices[0].pos,U=h.offices[1].pos,C=[];for(let K=0;K<=64;K++){let Q=K/64,te=R.clone().lerp(U,Q);te.y=Math.sin(Math.PI*Q)*2600+2,C.push(te)}let N=new Ho(new ur(C),200,40,8,!1),z=new At({vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform float uTime; uniform float uDraw; uniform float uOn; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(clamp(abs(dot(normalize(vN), V)), 0.0, 1.0), 1.5);
          float d = fract(vUv.x * 9.0 - uTime * 0.25); float dash = 0.35 + 1.5 * smoothstep(0.82, 1.0, d);
          float shown = step(vUv.x, uDraw);
          gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * core * dash * shown * uOn * 1.4, 1.0); }`,uniforms:{uTime:r,uDraw:{value:0},uOn:{value:0}},...Ii}),q=new ht(N,z);q.frustumCulled=!1,i.add(q),h.arc=z}{let R=Et(Gp,{uTime:r,uOpacity:{value:0},uZenith:l,...c},{transparent:!0,depthWrite:!1}),U=new li(1,1);U.rotateX(-Math.PI/2);let C=new ht(U,R);C.scale.set(8e4,1,8e4),C.position.set((p.x+_e.x)/2,95,(p.z+_e.z)/2),C.renderOrder=5,C.frustumCulled=!1,i.add(C),h.clouds=R}return h.stats={orlBuildings:Ue.items.length,trees:Ee.length,palms:He.length,pools:ue.length,streets:Be.length,lakes:X.length},h.nyc={group:y,upm:f,L:m,center:p},h.orl={group:we,upm:Y,L:Ae,center:_e},h}var Su=new WeakMap,yl=class extends Ki{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new on(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,It,n).catch(n)}decodeDracoFile(e,t,n,s,r=Ht,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Su.has(e)){let l=Su.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Su.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Mt;e.index&&t.setIndex(new it(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,l=new it(a,o);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;let n=new be;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),gt.toWorkingColorSpace(n,It),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new on(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=Sb.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function Sb(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),p=f.attributes.map(y=>y.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,p=o.GetEncodedGeometryType(l);if(p===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(p===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let m in h){let g=self[u[m]],x,v;if(c.useUniqueIDs)v=h[m],x=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[h[m]]),v===-1)continue;x=o.GetAttribute(d,v)}let M=s(a,o,d,m,g,x);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),y.attributes.push(M)}return p===a.TRIANGULAR_MESH&&(y.index=n(a,o,d)),a.destroy(d),y}function n(a,o,l){let h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,h,u){let d=u.num_components(),p=l.num_points()*d,y=p*h.BYTES_PER_ELEMENT,m=r(a,h),g=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,u,m,y,g);let x=new h(a.HEAPF32.buffer,g,p).slice();return a._free(g),{name:c,array:x,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function wb(i){try{let e=typeof location<"u"?location.href:void 0;return new URL(i,e).origin}catch{return null}}function sm(i){if(!i)return null;let e=i.length,t=i.indexOf("?"),n=i.indexOf("#");t!==-1&&(e=Math.min(e,t)),n!==-1&&(e=Math.min(e,n));let s=i.lastIndexOf(".",e),r=i.lastIndexOf("/",e),a=i.indexOf("://");return a!==-1&&a+2===r||s===-1||s<r?null:i.substring(s+1,e)||null}var _l,Ml=(_l=class{static setXRSession(i){i!==this.session&&(this.flushPending(),this.session=i)}static requestAnimationFrame(i){let{session:e,pending:t}=this,n,s=()=>{t.delete(n),i()};return n=e?e.requestAnimationFrame(s):requestAnimationFrame(s),t.set(n,i),n}static cancelAnimationFrame(i){let{pending:e,session:t}=this;e.delete(i),t?t.cancelAnimationFrame(i):cancelAnimationFrame(i)}static flushPending(){this.pending.forEach((i,e)=>{i(),this.cancelAnimationFrame(e)})}},Yl(_l,"pending",new Map),Yl(_l,"session",null),_l),rm=2**30,lm=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(i){i.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(e,t)=>{let n=i(e),s=i(t);return n<s?-1:+(n>s)}):this._unloadPriorityCallback=i}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*rm,this.maxBytesSize=.4*rm,this.unloadPercent=.05,this.autoMarkUnused=!0,this.cachedBytes=0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;let i=this.itemSet;this.defaultPriorityCallback=e=>i.get(e)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(i){return this.bytesMap.get(i)||0}setMemoryUsage(i,e){let{bytesMap:t,itemSet:n}=this;n.has(i)&&(e=Math.round(e),this.cachedBytes-=t.get(i)||0,t.set(i,e),this.cachedBytes+=e)}add(i,e){let t=this.itemSet;if(t.has(i)||this.isFull())return!1;let n=this.usedSet,s=this.itemList,r=this.callbacks;return s.push(i),n.add(i),t.set(i,Date.now()),r.set(i,e),!0}has(i){return this.itemSet.has(i)}remove(i){let e=this.usedSet,t=this.itemSet,n=this.itemList,s=this.bytesMap,r=this.callbacks,a=this.loadedSet;if(t.has(i)){this.cachedBytes-=s.get(i)||0,s.delete(i),r.get(i)(i);let o=n.indexOf(i);return n.splice(o,1),e.delete(i),t.delete(i),r.delete(i),a.delete(i),!0}return!1}setLoaded(i,e){let{itemSet:t,loadedSet:n}=this;t.has(i)&&(e===!0?n.add(i):n.delete(i))}markUsed(i){let e=this.itemSet,t=this.usedSet;e.has(i)&&!t.has(i)&&(e.set(i,Date.now()),t.add(i))}markUnused(i){this.usedSet.delete(i)}markAllUnused(){this.usedSet.clear()}isUsed(i){return this.usedSet.has(i)}unloadUnusedContent(){let{unloadPercent:i,minSize:e,maxSize:t,itemList:n,itemSet:s,usedSet:r,loadedSet:a,callbacks:o,bytesMap:l,minBytesSize:c,maxBytesSize:h}=this,u=n.length-r.size,d=n.length-a.size,f=Math.max(Math.min(n.length-e,u),0),p=this.cachedBytes-c,y=this.unloadPriorityCallback||this.defaultPriorityCallback,m=!1,g=f>0&&u>0||d&&n.length>t;if(u&&this.cachedBytes>c||d&&this.cachedBytes>h||g){n.sort((I,j)=>{let _=r.has(I);if(_===r.has(j)){let S=a.has(I);return S===a.has(j)?-y(I,j):S?1:-1}else return _?1:-1});let x=Math.max(e*i,f*i),v=Math.ceil(Math.min(x,u,f)),M=Math.max(i*p,i*c),L=Math.min(M,p),A=0,E=0;for(;A<n.length&&(this.cachedBytes-E>h||n.length-A>t);){let I=n[A],j=l.get(I)||0;if(r.has(I)&&a.has(I)||this.cachedBytes-E-j<h&&n.length-A<=t)break;E+=j,A++}for(;A<n.length&&(E<L||A<v);){let I=n[A],j=l.get(I)||0;if(r.has(I)||this.cachedBytes-E-j<c&&A>=v)break;E+=j,A++}n.splice(0,A).forEach(I=>{this.cachedBytes-=l.get(I)||0,o.get(I)(I),l.delete(I),s.delete(I),o.delete(I),a.delete(I),r.delete(I)}),m=A<f||E<p&&A<u,m&&(m=A>0)}m&&(this.unloadingHandle=Ml.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){Ml.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},Tb=class extends DOMException{constructor(){super("PriorityQueue: Item removed","AbortError")}},gr=class{get running(){return this.items.length!==0||this.currJobs!==0}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=i=>{Ml.requestAnimationFrame(i)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){let i=this.priorityCallback,e=this.items;i!==null&&e.sort(i)}has(i){return this.callbacks.has(i)}add(i,e){let t={callback:e,reject:null,resolve:null,promise:null};return t.promise=new Promise((n,s)=>{let r=this.items,a=this.callbacks;t.resolve=n,t.reject=s,r.unshift(i),a.set(i,t),this.autoUpdate&&this.scheduleJobRun()}),t.promise}remove(i){let e=this.items,t=this.callbacks,n=e.indexOf(i);if(n!==-1){let s=t.get(i);s.promise.catch(r=>{if(r.name!=="AbortError")throw r}),s.reject(new Tb),e.splice(n,1),t.delete(i)}}removeByFilter(i){let{items:e}=this;for(let t=0;t<e.length;t++){let n=e[t];i(n)&&(this.remove(n),t--)}}tryRunJobs(){this.sort();let i=this.items,e=this.callbacks,t=this.maxJobs,n=0,s=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;t>this.currJobs&&i.length>0&&n<t;){this.currJobs++,n++;let r=i.pop(),{callback:a,resolve:o,reject:l}=e.get(r);e.delete(r);let c;try{c=a(r)}catch(h){l(h),s();continue}c instanceof Promise?c.then(o).catch(l).finally(s):(o(c),s())}}flush(i){let{items:e,callbacks:t}=this,n=e.indexOf(i);if(!t.has(i))return;let{callback:s,resolve:r,reject:a}=t.get(i);t.delete(i),e.splice(n,1);let o;try{o=s(i)}catch(l){a(l);return}return o instanceof Promise?o.then(r).catch(a):r(o),o}scheduleJobRun(){this.scheduled||(this.scheduled=(this._schedulingCallback(this._runjobs),!0))}},Ab=class{get running(){for(let i of this.originQueues.values())if(i.running)return!0;return!1}get maxJobsPerOrigin(){return this._maxJobsPerOrigin}set maxJobsPerOrigin(i){this._maxJobsPerOrigin=i,this.originQueues.forEach(e=>e.maxJobs=i)}get maxJobs(){return this.maxJobsPerOrigin}set maxJobs(i){console.warn('DownloadPriorityQueue: "maxJobs" is no longer valid and limits jobs per server origin. Use "maxJobsPerOrigin", instead.'),this.maxJobsPerOrigin=i}get priorityCallback(){return this._priorityCallback}set priorityCallback(i){this._priorityCallback=i,this.originQueues.forEach(e=>e.priorityCallback=i)}constructor(){this.originQueues=new Map,this._itemQueues=new WeakMap,this._maxJobsPerOrigin=6,this._priorityCallback=null}add(i,e,t,n=null){this.originQueues.forEach((l,c)=>{l.running||this.originQueues.delete(c)});let s=i===null?null:wb(i),r=this.originQueues.get(s);r||(r=new gr,r.maxJobs=this._maxJobsPerOrigin,r.priorityCallback=this._priorityCallback,this.originQueues.set(s,r));let a=this._itemQueues.get(e);if(a&&a!==r&&a.has(e))throw Error("DownloadPriorityQueue: Item is already queued with a different url origin.");this._itemQueues.set(e,r);let o=r.add(e,t);return n!==null&&(n.aborted?this.remove(e):n.addEventListener("abort",()=>this.remove(e),{once:!0})),o}remove(i){let e=this._itemQueues.get(i);e&&(e.remove(i),this._itemQueues.delete(i))}has(i){let e=this._itemQueues.get(i);return!!(e&&e.has(i))}};var vr=6378137,kS=1/298.257223563,cm=6356752314245179e-9,xl={inView:!1,error:1/0,distanceFromCamera:1/0};function wl(i){return i===4||i===-1}function wn(i,e){return Tl(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function Tl(i){return!!i.traversal}function fa(i){let{children:e}=i,t=e.length===0||Tl(e[e.length-1]),n=!i.internal.hasUnrenderableContent||wl(i.internal.loadingState);return t&&n}function Ts(i){return i.traversal.unconditionallyRefine}function da(i,e,t=!0){if(Tl(i)&&(e.ensureChildrenArePreprocessed(i),i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.wasInFrustum=i.traversal.inFrustum,i.traversal.wasSetActive=i.traversal.active,i.traversal.wasSetVisible=i.traversal.visible,i.traversal.usedLastFrame=i.traversal.used,i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,i.traversal.allChildrenLoaded=!1,i.traversal.kicked=!1,i.traversal.allUsedChildrenProcessed=!1,t&&(e.calculateTileViewErrorWithPlugin(i,xl),i.traversal.inFrustum=xl.inView,i.traversal.error=xl.error,i.traversal.distanceFromCamera=xl.distanceFromCamera),i.traversal.unconditionallyRefine=i.internal.hasUnrenderableContent,!i.traversal.unconditionallyRefine))){let n=i.parent;for(;n&&n.traversal.unconditionallyRefine;)n=n.parent;n&&n.geometricError<=i.geometricError&&(i.traversal.unconditionallyRefine=!0)}}function wu(i,e,t=!1){if(da(i,e),t?e.markTileUsed(i):bl(i),Ts(i)&&fa(i)){let n=i.children;for(let s=0,r=n.length;s<r;s++)wu(n[s],e,t)}}function hm(i,e){if(da(i,e),i.traversal.usedLastFrame&&(bl(i),i.traversal.wasSetActive&&(i.traversal.active=!0),(!i.traversal.active||Ts(i))&&fa(i))){let t=i.children;for(let n=0,s=t.length;n<s;n++)hm(t[n],e)}}function bl(i){i.traversal.used=!0}function Eb(i,e){return!(i.traversal.error<=e.errorTarget&&!Ts(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!fa(i))}function um(i,e){let{frameCount:t}=e,{children:n}=i;for(let s=0,r=n.length;s<r;s++){let a=n[s];wn(a,t)&&(a.traversal.active&&(a.traversal.kicked=!0,a.traversal.active=!1),um(a,e))}}function am(i){return!Ts(i)&&(!i.internal.hasContent||wl(i.internal.loadingState))}function dm(i,e){if(da(i,e),!i.traversal.inFrustum)return;let t=i.parent;if(t&&t.refine==="ADD"&&i.geometricError>0&&i.traversal.error*(t.geometricError/i.geometricError)<=e.errorTarget)return;if(!Eb(i,e)){bl(i);return}let n=!1,s=!1,r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];dm(l,e),n||(n=wn(l,e.frameCount)),s||(s=l.traversal.inFrustum)}if(i.refine==="REPLACE"&&!s&&r.length!==0){i.traversal.inFrustum=!1,e.markTileUsed(i);for(let a=0,o=r.length;a<o;a++)wu(r[a],e,!0);return}if(bl(i),i.refine==="REPLACE"&&n&&(e.loadSiblings||e.loadAncestors))for(let a=0,o=r.length;a<o;a++)wu(r[a],e)}function fm(i,e){let t=e.frameCount;if(!wn(i,t))return;let n=i.children,s=!1;for(let a=0,o=n.length;a<o;a++){let l=n[a];s||(s=wn(l,t))}if(!s)i.traversal.isLeaf=!0;else{for(let o=0,l=n.length;o<l;o++)fm(n[o],e);let a=!0;for(let o=0,l=n.length;o<l;o++){let c=n[o];if(wn(c,t)){let h=!Ts(c),u=!c.internal.hasContent||wl(c.internal.loadingState);h&&u||c.traversal.allChildrenLoaded||(a=!1)}}i.traversal.allChildrenLoaded=a}let r=!0;for(let a=0,o=n.length;a<o;a++){let l=n[a];wn(l,e.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}i.traversal.allUsedChildrenProcessed=r&&fa(i)}function pm(i,e){if(!wn(i,e.frameCount))return;let t=i.children;if(i.refine==="REPLACE"&&e.loadAncestors&&!i.traversal.allChildrenLoaded&&!Ts(i)&&(i.traversal.isLeaf=!0),i.traversal.isLeaf){if(!Ts(i)&&(i.traversal.active=!0,fa(i)&&i.internal.hasContent&&!wl(i.internal.loadingState)))for(let s=0,r=t.length;s<r;s++)hm(t[s],e);return}let n=t.length>0;for(let s=0,r=t.length;s<r;s++){let a=t[s];pm(a,e),wn(a,e.frameCount)&&!(a.traversal.active&&am(a))&&!a.traversal.allChildrenReady&&(n=!1)}i.traversal.allChildrenReady=n,i.refine==="REPLACE"&&!n&&i.traversal.wasSetActive&&am(i)&&(i.traversal.active=!0,um(i,e))}function mm(i,e){da(i,e,!1);let t=wn(i,e.frameCount);if(t&&(i.internal.hasUnrenderableContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.hasRenderableContent&&i.refine==="ADD"&&(i.traversal.active=!0),(i.traversal.active||i.traversal.kicked)&&i.internal.hasContent&&(e.markTileUsed(i),i.traversal.allUsedChildrenProcessed&&e.queueTileForDownload(i),i.internal.loadingState!==4&&(i.traversal.active=!1)),e.loadAncestors&&i.internal.hasContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.virtualChildCount>0&&i.internal.hasContent&&e.markTileUsed(i),i.traversal.visible=i.internal.hasRenderableContent&&i.traversal.active&&i.traversal.inFrustum&&i.internal.loadingState===4,e.stats.used++,i.traversal.inFrustum&&e.stats.inFrustum++),t||Tl(i)&&i.traversal.usedLastFrame){let n=!1,s=!1;t?(n=i.traversal.active,s=e.displayActiveTiles&&i.traversal.active||i.traversal.visible):da(i,e,!1),i.internal.hasRenderableContent&&i.internal.loadingState===4?(n&&e.stats.active++,s&&e.stats.visible++,i.traversal.wasSetActive!==n&&e.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(i,n)),i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(i,s))):i.internal.hasRenderableContent||(s=i.traversal.isLeaf,i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setEmptyTileVisible&&a.setEmptyTileVisible(i,s))),i.traversal.visible=s,i.traversal.active=n;let r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];mm(l,e)}}}function Cb(i,e){dm(i,e),fm(i,e),pm(i,e),mm(i,e)}function Pb(i){let e=null;return()=>{e===null&&(e=Ml.requestAnimationFrame(()=>{e=null,i()}))}}function Eu(i,e=null,t=null){let n=[];for(n.push(i),n.push(null),n.push(0);n.length>0;){let s=n.pop(),r=n.pop(),a=n.pop();if(e&&e(a,r,s)){t&&t(a,r,s);return}let o=a.children;if(o)for(let l=o.length-1;l>=0;l--)n.push(o[l]),n.push(a),n.push(s+1);t&&t(a,r,s)}}var om=Symbol("PLUGIN_REGISTERED"),Zn={inView:!0,error:0,distance:1/0},Rb=(i,e)=>{let t=i.priority||0,n=e.priority||0;return t===n?!i.traversal||!e.traversal?0:i.traversal.used===e.traversal.used?i.traversal.error===e.traversal.error?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.traversal.error>e.traversal.error?1:-1:i.traversal.used?1:-1:t>n?1:-1},Ib=(i,e)=>i.traversal.used===e.traversal.used?i.traversal.inFrustum===e.traversal.inFrustum?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.internal.hasUnrenderableContent?1:-1:i.traversal.inFrustum?1:-1:i.traversal.used?1:-1,Lb=(i,e)=>i.traversal.lastFrameVisited===e.traversal.lastFrameVisited?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?i.internal.loadingState===e.internal.loadingState?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.error===e.traversal.error?0:i.traversal.error>e.traversal.error?-1:1:i.internal.hasUnrenderableContent?-1:1:i.internal.loadingState>e.internal.loadingState?-1:1:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?1:-1:i.traversal.lastFrameVisited>e.traversal.lastFrameVisited?-1:1,pa=(i,e)=>{let t=i.priority??1/0,n=e.priority??1/0;if(t!==n)return t>n?1:-1;if(!i.internal||!e.internal)return 0;let s=i.internal.renderer,r=e.internal.renderer,a=!s.loadAncestors,o=!r.loadAncestors;return a&&o?Ib(i,e):Rb(i,e)},gm=new lm;gm.unloadPriorityCallback=Lb;var Sl=new Ab;Sl.maxJobsPerOrigin=25,Sl.priorityCallback=pa;var Tu=new gr;Tu.maxJobs=5,Tu.priorityCallback=pa;var Au=new gr;Au.maxJobs=25,Au.priorityCallback=(i,e)=>{let t=i.parent,n=e.parent;return t===n?0:t?n?pa(t,n):-1:1};var vm=class{get root(){let i=this.rootTileset;return i?i.root:null}get loadProgress(){let{stats:i,isLoading:e}=this,t=i.queued+i.downloading+i.parsing,n=i.inCacheSinceLoad+ +!!e;return n===0?1:1-t/n}get downloadQueue(){return this._downloadQueue}set downloadQueue(i){if(i instanceof gr){console.warn('TilesRenderer: "downloadQueue" is no longer valid as a PriorityQueue. Use a DownloadPriorityQueue, instead.');return}this._downloadQueue=i}constructor(i=null){this.rootLoadingState=0,this.rootTileset=null,this.rootURL=i,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.queuedTileSet=new Set,this.cachedSinceLoadComplete=new Set,this.isLoading=!1,this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=gm,this.downloadQueue=Sl,this.parseQueue=Tu,this.processNodeQueue=Au,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,refused:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=Pb(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this.errorFalloff=0,this.errorFalloffDensity=2e-4,this.displayActiveTiles=!1,this.maxDepth=1/0,this.loadSiblings=!0,this.loadAncestors=!0,this.maxTilesProcessed=250}registerPlugin(i){if(i[om]===!0)throw Error("TilesRendererBase: A plugin can only be registered to a single tileset");let e=this.plugins,t=i.priority||0,n=e.length;for(let s=0;s<e.length;s++)if((e[s].priority||0)>t){n=s;break}e.splice(n,0,i),i[om]=!0,i.init&&i.init(this)}unregisterPlugin(i){let e=this.plugins;if(typeof i=="string"&&(i=this.getPluginByName(i)),e.includes(i)){let t=e.indexOf(i);return e.splice(t,1),i.dispose&&i.dispose(),!0}return!1}getPluginByName(i){return this.plugins.find(e=>e.name===i)||null}invokeOnePlugin(i){let e=[...this.plugins,this];for(let t=0;t<e.length;t++){let n=i(e[t]);if(n)return n}return null}invokeAllPlugins(i){let e=[...this.plugins,this],t=[];for(let n=0;n<e.length;n++){let s=i(e[n]);s&&t.push(s)}return t.length===0?null:Promise.all(t)}traverse(i,e,t=!0){this.root&&Eu(this.root,(n,...s)=>(t&&this.ensureChildrenArePreprocessed(n,!0),i?i(n,...s):!1),e)}getAttributions(i=[]){return this.invokeAllPlugins(e=>e!==this&&e.getAttributions&&e.getAttributions(i)),i}update(){let{lruCache:i,usedSet:e,stats:t,root:n,downloadQueue:s,parseQueue:r,processNodeQueue:a,queuedTiles:o,queuedTileSet:l}=this;if(this.rootLoadingState===0&&(this.rootLoadingState=2,this.invokeOnePlugin(d=>d.loadRootTileset&&d.loadRootTileset()).then(d=>{let f=this.rootURL;f!==null&&this.invokeAllPlugins(p=>f=p.preprocessURL?p.preprocessURL(f,null):f),this.rootLoadingState=4,this.rootTileset=d,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-tileset",tileset:d,url:f}),this.dispatchEvent({type:"load-root-tileset",tileset:d,url:f})}).catch(d=>{this.rootLoadingState=-1,console.error(d),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:d,url:this.rootURL})})),!n)return;let c=null;if(this.invokeAllPlugins(d=>{if(d.doTilesNeedUpdate){let f=d.doTilesNeedUpdate();c=c===null?f:!!(c||f)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),t.inFrustum=0,t.used=0,t.active=0,t.visible=0,t.refused=0,t.tilesProcessed=0,this.frameCount++,e.forEach(d=>i.markUnused(d)),e.clear(),this.prepareForTraversal(),Cb(n,this),this.removeUnusedPendingTiles(),o.sort(i.unloadPriorityCallback);let h=0,u=o.length;for(;h<u&&!i.isFull();h++)this.requestTileContents(o[h]);t.refused+=o.length-h,o.length=0,l.clear(),i.scheduleUnload(),(s.running||r.running||a.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),t.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===-1&&(this.rootLoadingState=0);let i=this.stats;i.failed!==0&&(this.traverse(e=>{e.internal.loadingState===-1&&(e.internal.loadingState=0)},null,!1),i.failed=0)}calculateTileViewErrorWithPlugin(i,e){this.calculateTileViewError(i,e);let{errorFalloff:t,errorFalloffDensity:n}=this;if(t>0&&Number.isFinite(e.distanceFromCamera)){let o=e.distanceFromCamera*n;e.error-=t*(1-Math.exp(-o*o))}let s=null,r=0,a=1/0;this.invokeAllPlugins(o=>{o!==this&&o.calculateTileViewError&&(Zn.inView=!0,Zn.error=0,Zn.distance=1/0,o.calculateTileViewError(i,Zn)&&(s===null&&(s=!0),s&&(s=Zn.inView),Zn.inView&&(a=Math.min(a,Zn.distance),r=Math.max(r,Zn.error))))}),e.inView&&s!==!1?(e.error=Math.max(e.error,r),e.distanceFromCamera=Math.min(e.distanceFromCamera,a)):s?(e.inView=!0,e.error=r,e.distanceFromCamera=a):e.inView=!1}dispose(){[...this.plugins].forEach(t=>{this.unregisterPlugin(t)});let i=this.lruCache,e=[];this.traverse(t=>(e.push(t),!1),null,!1);for(let t=0,n=e.length;t<n;t++)i.remove(e[t]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(i,e){return 0}dispatchEvent(i){}addEventListener(i,e){}removeEventListener(i,e){}parseTile(i,e,t){return null}prepareForTraversal(){}disposeTile(i){i.traversal.visible&&(i.internal.hasRenderableContent?this.invokeOnePlugin(t=>t.setTileVisible&&t.setTileVisible(i,!1)):this.invokeOnePlugin(t=>t.setEmptyTileVisible&&t.setEmptyTileVisible(i,!1)),i.traversal.visible=!1),i.traversal.active&&i.internal.hasRenderableContent&&this.invokeOnePlugin(t=>t.setTileActive&&t.setTileActive(i,!1)),i.traversal.active=!1;let{scene:e}=i.engineData;e&&this.dispatchEvent({type:"dispose-model",scene:e,tile:i})}preprocessNode(i,e,t=null){if(this.processedTiles.add(i),this.stats.tilesProcessed++,i.content&&(!("uri"in i.content)&&"url"in i.content&&(i.content.uri=i.content.url,delete i.content.url),i.content.boundingVolume&&!("box"in i.content.boundingVolume||"sphere"in i.content.boundingVolume||"region"in i.content.boundingVolume)&&delete i.content.boundingVolume),i.parent=t,i.children=i.children||[],i.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:0,basePath:e,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,renderer:this,...i.internal},i.content?.uri){let n=sm(i.content.uri),s=!!(n&&/json$/.test(n));i.internal.hasContent=!0,i.internal.hasUnrenderableContent=s,i.internal.hasRenderableContent=!s}else i.internal.hasContent=!1,i.internal.hasUnrenderableContent=!1,i.internal.hasRenderableContent=!1;t?(i.internal.depth=t.internal.depth+1,i.internal.depthFromRenderedParent=t.internal.depthFromRenderedParent+ +!!i.internal.hasRenderableContent):(i.internal.depth=0,i.internal.depthFromRenderedParent=+!!i.internal.hasRenderableContent),i.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,wasInFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,allChildrenLoaded:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},t===null?i.refine=i.refine||"REPLACE":i.refine=i.refine||t.refine,i.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(i,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(n=>{n!==this&&n.preprocessNode&&n.preprocessNode(i,e,t)})}setTileActive(i,e){e?this.activeTiles.add(i):this.activeTiles.delete(i)}setTileVisible(i,e){e?this.visibleTiles.add(i):this.visibleTiles.delete(i),this.dispatchEvent({type:"tile-visibility-change",scene:i.engineData.scene,tile:i,visible:e})}calculateTileViewError(i,e){}removeUnusedPendingTiles(){let{lruCache:i,loadingTiles:e}=this,t=[];for(let n of e)!i.isUsed(n)&&n.internal.loadingState===1&&t.push(n);for(let n=0;n<t.length;n++)i.remove(t[n])}queueTileForDownload(i){let{queuedTileSet:e}=this;if(!(i.internal.loadingState!==0||e.has(i))){if(e.add(i),this.lruCache.isFull()){this.stats.refused++;return}this.queuedTiles.push(i)}}markTileUsed(i){this.usedSet.add(i),this.lruCache.markUsed(i)}fetchData(i,e){return fetch(i,e)}ensureChildrenArePreprocessed(i,e=this.stats.tilesProcessed<this.maxTilesProcessed){let t=i.children;if(t.length===0||t[t.length-1].traversal)return;let n=s=>{for(let r=0,a=s.length;r<a;r++){let o=s[r];o&&!o.traversal&&this.preprocessNode(o,i.internal.basePath,i)}};e?(this.processNodeQueue.remove(i),n(t)):this.processNodeQueue.has(i)||this.processNodeQueue.add(i,s=>{n(s.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(i){let e=0;return this.invokeAllPlugins(t=>{t.calculateBytesUsed&&(e+=t.calculateBytesUsed(i,i.engineData.scene)||0)}),e}recalculateBytesUsed(i=null){let{lruCache:e,processedTiles:t}=this;i===null?e.itemSet.forEach(n=>{t.has(n)&&e.setMemoryUsage(n,this.getBytesUsed(n))}):e.setMemoryUsage(i,this.getBytesUsed(i))}preprocessTileset(i,e,t=null){let[n,s]=i.asset.version.split(".").map(a=>parseInt(a));console.assert(n<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),n===1&&s>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let r=e.replace(/\/[^/]*$/,"");r=new URL(r,window.location.href).toString(),this.preprocessNode(i.root,r,t)}loadRootTileset(){let i=this.rootURL;return this.invokeAllPlugins(e=>i=e.preprocessURL?e.preprocessURL(i,null):i),this.invokeOnePlugin(e=>e.fetchData&&e.fetchData(i,this.fetchOptions)).then(e=>{if(!(e instanceof Response))return e;if(e.ok)return e.json();throw Error(`TilesRenderer: Failed to load tileset "${i}" with status ${e.status} : ${e.statusText}`)}).then(e=>(this.preprocessTileset(e,i),e))}requestTileContents(i){if(i.internal.loadingState!==0)return;let e=!1,t=null,n=new URL(i.content.uri,i.internal.basePath+"/").toString();this.invokeAllPlugins(d=>n=d.preprocessURL?d.preprocessURL(n,i):n);let s=this.stats,r=this.lruCache,a=this.downloadQueue,o=this.parseQueue,l=this.loadingTiles,c=sm(n),h=new AbortController,u=h.signal;if(r.add(i,d=>{h.abort(),e?d.children.length=0:this.invokeAllPlugins(f=>{f.disposeTile&&f.disposeTile(d)}),s.inCache--,this.cachedSinceLoadComplete.has(i)&&(this.cachedSinceLoadComplete.delete(i),s.inCacheSinceLoad--),d.internal.loadingState===1?s.queued--:d.internal.loadingState===2?s.downloading--:d.internal.loadingState===3?s.parsing--:d.internal.loadingState===4&&s.loaded--,d.internal.loadingState=0,o.remove(d),a.remove(d),l.delete(d)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),r.setMemoryUsage(i,this.getBytesUsed(i)),this.cachedSinceLoadComplete.add(i),s.inCacheSinceLoad++,s.inCache++,s.queued++,i.internal.loadingState=1,l.add(i),a.add(n,i,d=>{if(u.aborted)return Promise.resolve();i.internal.loadingState=2,s.downloading++,s.queued--;let f=this.invokeOnePlugin(p=>p.fetchData&&p.fetchData(n,{...this.fetchOptions,signal:u}));return this.dispatchEvent({type:"tile-download-start",tile:i,url:n,get uri(){return console.warn('tile-download-start event: "uri" has been renamed to "url".'),this.url}}),f}).then(d=>{if(!u.aborted){if(!(d instanceof Response))return d;if(d.ok)return c==="json"?d.json():d.arrayBuffer();throw Error(`Failed to load model with error code ${d.status}`)}}).then(d=>{if(!u.aborted)return s.downloading--,s.parsing++,i.internal.loadingState=3,o.add(i,f=>u.aborted?Promise.resolve():c==="json"&&d.root?(this.preprocessTileset(d,n,i),i.children.push(d.root),t=d,e=!0,Promise.resolve()):this.invokeOnePlugin(p=>p.parseTile&&p.parseTile(d,f,c,n,u)))}).then(()=>{if(u.aborted)return;s.parsing--,s.loaded++,i.internal.loadingState=4,l.delete(i),r.setLoaded(i,!0);let d=this.getBytesUsed(i);if(r.getMemoryUsage(i)===0&&d>0&&r.isFull()){r.remove(i);return}r.setMemoryUsage(i,d),this.dispatchEvent({type:"needs-update"}),e&&this.dispatchEvent({type:"load-tileset",tileset:t,url:n}),i.engineData.scene&&this.dispatchEvent({type:"load-model",scene:i.engineData.scene,tile:i,url:n})}).catch(d=>{u.aborted||(d.name==="AbortError"?r.remove(i):(o.remove(i),a.remove(i),i.internal.loadingState===1?s.queued--:i.internal.loadingState===2?s.downloading--:i.internal.loadingState===3?s.parsing--:i.internal.loadingState===4&&s.loaded--,s.failed++,console.error(`TilesRenderer : Failed to load tile at url "${i.content.uri}".`),console.error(d),i.internal.loadingState=-1,l.delete(i),r.setLoaded(i,!0),this.dispatchEvent({type:"load-error",tile:i,error:d,url:n})))})}};function Kn(i){if(i===null||i.byteLength<4)return"";let e;if(e=i instanceof DataView?i:new DataView(i),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let n=0;n<4;n++)t+=String.fromCharCode(e.getUint8(n));return t}var Db=new TextDecoder;function Cu(i){return Db.decode(i)}function Al(i){return i.replace(/[\\/][^\\/]+$/,"")+"/"}var yr=class{constructor(){this.fetchOptions={},this.workingPath=""}loadAsync(i){return fetch(i,this.fetchOptions).then(e=>{if(!e.ok)throw Error(`Failed to load file "${i}" with status ${e.status} : ${e.statusText}`);return e.arrayBuffer()}).then(e=>(this.workingPath===""&&(this.workingPath=Al(i)),this.parse(e)))}resolveExternalURL(i){return new URL(i,this.workingPath).href}parse(i){throw Error("LoaderBase: Parse not implemented.")}};function ym(i,e,t,n,s,r){let a;switch(n){case"SCALAR":a=1;break;case"VEC2":a=2;break;case"VEC3":a=3;break;case"VEC4":a=4;break;default:throw Error(`FeatureTable : Feature type not provided for "${r}".`)}let o,l=t*a;switch(s){case"BYTE":o=new Int8Array(i,e,l);break;case"UNSIGNED_BYTE":o=new Uint8Array(i,e,l);break;case"SHORT":o=new Int16Array(i,e,l);break;case"UNSIGNED_SHORT":o=new Uint16Array(i,e,l);break;case"INT":o=new Int32Array(i,e,l);break;case"UNSIGNED_INT":o=new Uint32Array(i,e,l);break;case"FLOAT":o=new Float32Array(i,e,l);break;case"DOUBLE":o=new Float64Array(i,e,l);break;default:throw Error(`FeatureTable : Feature component type not provided for "${r}".`)}return o}var El=class{constructor(i,e,t,n){this.buffer=i,this.binOffset=e+t,this.binLength=n;let s=null;if(t!==0){let r=new Uint8Array(i,e,t);s=JSON.parse(Cu(r))}else s={};this.header=s}getKeys(){return Object.keys(this.header).filter(i=>i!=="extensions")}getData(i,e,t=null,n=null){let s=this.header;if(!(i in s))return null;let r=s[i];if(!(r instanceof Object)||Array.isArray(r))return r;{let{buffer:a,binOffset:o,binLength:l}=this,c=r.byteOffset||0,h=r.type||n,u=r.componentType||t;if("type"in r&&n&&r.type!==n)throw Error("FeatureTable: Specified type does not match expected type.");let d=o+c,f=ym(a,d,e,h,u,i);if(d+f.byteLength>o+l)throw Error("FeatureTable: Feature data read outside binary body length.");return f}}getBuffer(i,e){let{buffer:t,binOffset:n}=this;return t.slice(n+i,n+i+e)}},Ub=class{constructor(i){this.batchTable=i;let e=i.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=e.classes;for(let n of this.classes){let s=n.instances;for(let r in s)n.instances[r]=this._parseProperty(s[r],n.length,r)}if(this.instancesLength=e.instancesLength,this.classIds=this._parseProperty(e.classIds,this.instancesLength,"classIds"),e.parentCounts?this.parentCounts=this._parseProperty(e.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=Array(this.instancesLength).fill(1),e.parentIds){let n=this.parentCounts.reduce((s,r)=>s+r,0);this.parentIds=this._parseProperty(e.parentIds,n,"parentIds")}else this.parentIds=null;this.instancesIds=[];let t={};for(let n of this.classIds)t[n]=t[n]??0,this.instancesIds.push(t[n]),t[n]++}_parseProperty(i,e,t){if(Array.isArray(i))return i;{let{buffer:n,binOffset:s}=this.batchTable,r=i.byteOffset,a=i.componentType||"UNSIGNED_SHORT";return ym(n,s+r,e,"SCALAR",a,t)}}getDataFromId(i,e={}){let t=this.parentCounts[i];if(this.parentIds&&t>0){let o=0;for(let l=0;l<i;l++)o+=this.parentCounts[l];for(let l=0;l<t;l++){let c=this.parentIds[o+l];c!==i&&this.getDataFromId(c,e)}}let n=this.classIds[i],s=this.classes[n].instances,r=this.classes[n].name,a=this.instancesIds[i];for(let o in s)e[r]=e[r]||{},e[r][o]=s[o][a];return e}},Pu=class extends El{constructor(i,e,t,n,s){super(i,t,n,s),this.count=e,this.extensions={};let r=this.header.extensions;r&&r["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new Ub(this))}getDataFromId(i,e={}){if(i<0||i>=this.count)throw Error(`BatchTable: id value "${i}" out of bounds for "${this.count}" features number.`);for(let t of this.getKeys())e[t]=super.getData(t,this.count)[i];for(let t in this.extensions){let n=this.extensions[t];n.getDataFromId instanceof Function&&(e[t]=e[t]||{},n.getDataFromId(i,e[t]))}return e}getPropertyArray(i){return super.getData(i,this.count)}},xm=class extends yr{parse(i){let e=new DataView(i),t=Kn(e);console.assert(t==="b3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new El(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Pu(i.slice(h,h+o+l),c.getData("BATCH_LENGTH"),0,o,l),d=h+o+l;return{version:n,featureTable:c,batchTable:u,glbBytes:new Uint8Array(i,d,s-d)}}},_m=class extends yr{parse(i){let e=new DataView(i),t=Kn(e);console.assert(t==="i3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),h=new El(i.slice(32,32+r+a),0,r,a),u=32+r+a,d=new Pu(i.slice(u,u+o+l),h.getData("INSTANCES_LENGTH"),0,o,l),f=u+o+l,p=new Uint8Array(i,f,s-f),y=null,m=null,g=null;if(c)y=p,m=Promise.resolve();else{let x=this.resolveExternalURL(Cu(p));g=Al(x),m=fetch(x,this.fetchOptions).then(v=>{if(!v.ok)throw Error(`I3DMLoaderBase : Failed to load file "${x}" with status ${v.status} : ${v.statusText}`);return v.arrayBuffer()}).then(v=>{y=new Uint8Array(v)})}return m.then(()=>({version:n,featureTable:h,batchTable:d,glbBytes:y,gltfWorkingPath:g}))}},Mm=class extends yr{parse(i){let e=new DataView(i),t=Kn(e);console.assert(t==="pnts");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new El(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Pu(i.slice(h,h+o+l),c.getData("BATCH_LENGTH")||c.getData("POINTS_LENGTH"),0,o,l);return Promise.resolve({version:n,featureTable:c,batchTable:u})}},bm=class extends yr{parse(i){let e=new DataView(i),t=Kn(e);console.assert(t==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');let n=e.getUint32(4,!0);console.assert(n===1,'CMPTLoader: The version listed in the header is "1".');let s=e.getUint32(8,!0);console.assert(s===i.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");let r=e.getUint32(12,!0),a=[],o=16;for(let l=0;l<r;l++){let c=new DataView(i,o,12),h=Kn(c),u=c.getUint32(4,!0),d=c.getUint32(8,!0),f=new Uint8Array(i,o,d);a.push({type:h,buffer:f,version:u}),o+=d}return{version:n,tiles:a}}};function Sm(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function Ru(i,e){if(e===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ia||e===nl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ia)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Qn=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Yn.extractUrlBase(e);a=Yn.resolveURL(c,this.path)}else a=Yn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new on(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cm){try{a[vt.KHR_BINARY_GLTF]=new Ju(e)}catch(u){s&&s(u);return}r=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case vt.KHR_MATERIALS_UNLIT:a[u]=new Nu;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qu(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[u]=new ed;break;case vt.KHR_MESH_QUANTIZATION:a[u]=new td;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Nb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ht);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yo(h),c.distance=u;break;case"spot":c=new qo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Nu=class{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(o,o)}return Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(o[0],o[1],o[2],Ht),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ju=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$u=class{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zu=class{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ku=class{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Wi.TRIANGLES&&c.mode!==Wi.TRIANGLE_STRIP&&c.mode!==Wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let y=new ke,m=new P,g=new ui,x=new P(1,1,1),v=new di(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,y.compose(m,g,x));for(let M in l)if(M==="_COLOR_0"){let L=l[M];v.instanceColor=new Qt(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);Pt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Cm="glTF",ma=12,wm={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(e,ma),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===wm.JSON){let c=new Uint8Array(e,ma+a,o);this.content=n.decode(c)}else if(l===wm.BIN){let c=ma+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=nd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=nd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=xr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let y=f.attributes[p],m=l[p];m!==void 0&&(y.normalized=m)}u(f)},o,c,Ht,d)})})}},ed=class{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},td=class{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}},Cl=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,y=p-c,m=-2*f+3*d,g=f-d,x=1-m,v=g-d+u;for(let M=0;M!==o;M++){let L=a[y+M+o],A=a[y+M+l]*h,E=a[p+M+o],I=a[p+M]*h;r[M]=x*L+v*A+m*E+g*I}return r}},Ob=new ui,id=class extends Cl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ob.fromArray(r).normalize().toArray(r),r}},Wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tm={9728:Kt,9729:si,9984:iu,9985:Or,9986:Gs,9987:Ni},Am={33071:Zi,33648:Hr,10497:rn},Iu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fb={CUBICSPLINE:void 0,LINEAR:nr,STEP:ir},Lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Bb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function kb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vb(i){let e,t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=i.indices+":"+Du(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Du(i.targets[n]);return e}function Du(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Gb=new ke,rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new dr(this.options.manager):this.textureLoader=new $o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new on(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return As(r,o,s),Tn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Yn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Iu[s.type],o=xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new it(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Iu[s.type],c=xr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,m;if(f&&f!==u){let g=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,v=t.cache.get(x);v||(y=new c(o,g*f,s.count*f/h),v=new qr(y,f/h),t.cache.add(x,v)),m=new Yr(v,l,d%f/h,p)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new it(y,l,p);if(s.sparse!==void 0){let g=Iu.SCALAR,x=xr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,L=new x(a[1],v,s.sparse.count*g),A=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new it(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,I=L.length;E<I;E++){let j=L[E];if(m.setX(j,A[E*l]),l>=2&&m.setY(j,A[E*l+1]),l>=3&&m.setZ(j,A[E*l+2]),l>=4&&m.setW(j,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Tm[d.magFilter]||si,h.minFilter=Tm[d.minFilter]||Ni,h.wrapS=Am[d.wrapS]||rn,h.wrapT=Am[d.wrapT]||rn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(y){let m=new $t(y);m.needsUpdate=!0,d(m)}),t.load(Yn.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Tn(u,a),u.userData.mimeType=a.mimeType||Hb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Hn,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new cr,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ys}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){let u=s[vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ht),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ni);let h=r.alphaMode||Lu.OPAQUE;if(h===Lu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==oi){let u=r.emissiveFactor;o.emissive=new be().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&a!==oi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Tn(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Em(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Vb(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Em(new Mt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Bb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let y=h[f],m=a[f],g,x=c[f];if(m.mode===Wi.TRIANGLES||m.mode===Wi.TRIANGLE_STRIP||m.mode===Wi.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Ao(y,x):new ht(y,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Wi.TRIANGLE_STRIP?g.geometry=Ru(g.geometry,nl):m.mode===Wi.TRIANGLE_FAN&&(g.geometry=Ru(g.geometry,ia));else if(m.mode===Wi.LINES)g=new gs(y,x);else if(m.mode===Wi.LINE_STRIP)g=new hr(y,x);else if(m.mode===Wi.LINE_LOOP)g=new Ro(y,x);else if(m.mode===Wi.POINTS)g=new yn(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&kb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Tn(g,r),m.extensions&&As(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&As(s,u[0],r),u[0];let d=new Vt;r.extensions&&As(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Sn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new vn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],y=f.target,m=y.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],y=u[3],m=u[4],g=[];for(let x=0,v=d.length;x<v;x++){let M=d[x],L=f[x],A=p[x],E=y[x],I=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let j=n._createAnimationTracks(M,L,A,E,I);if(j)for(let _=0;_<j.length;_++)g.push(j[_])}return new Xo(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Gb)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new jr:c.length>1?h=new Vt:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Tn(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Vt;n.name&&(r.name=s.createUniqueName(n.name)),Tn(r,n),n.extensions&&As(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ei||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Jn[r.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Jn[r.path]){case Jn.weights:c=_n;break;case Jn.rotation:c=Mn;break;case Jn.position:case Jn.scale:c=bn;break;default:switch(n.itemSize){case 1:c=_n;break;case 2:case 3:default:c=bn;break}break}let h=s.interpolation!==void 0?Fb[s.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+Jn[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=sd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Mn?id:Cl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wb(i,e,t){let n=e.attributes,s=new ai;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=sd(xr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=sd(xr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Jt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=nd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return gt.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Tn(i,e),Wb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zb(i,e.targets,t):i})}var md=class extends xm{constructor(i=Ms){super(),this.manager=i,this.adjustmentTransform=new ke}parse(i){let e=super.parse(i),t=e.glbBytes.slice().buffer;return new Promise((n,s)=>{let r=this.manager,a=this.fetchOptions,o=r.getHandler("path.gltf")||new Qn(r);a.credentials==="include"&&a.mode==="cors"&&o.setCrossOrigin("use-credentials"),"credentials"in a&&o.setWithCredentials(a.credentials==="include"),a.headers&&o.setRequestHeader(a.headers);let l=this.workingPath;!/[\\/]$/.test(l)&&l.length&&(l+="/");let c=this.adjustmentTransform;o.parse(t,l,h=>{let{batchTable:u,featureTable:d}=e,{scene:f}=h,p=d.getData("RTC_CENTER",1,"FLOAT","VEC3");p&&(f.position.x+=p[0],f.position.y+=p[1],f.position.z+=p[2]),h.scene.updateMatrix(),h.scene.matrix.multiply(c),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=u,h.featureTable=d,f.batchTable=u,f.featureTable=d,n(h)},s)})}};function qb(i){let e=i>>11,t=i>>5&63,n=i&31;return[Math.round(e/31*255),Math.round(t/63*255),Math.round(n/31*255)]}var ga=new ne;function Yb(i,e,t=new P){ga.set(i,e).divideScalar(256).multiplyScalar(2).subScalar(1),t.set(ga.x,ga.y,1-Math.abs(ga.x)-Math.abs(ga.y));let n=Sn.clamp(-t.z,0,1);return t.x>=0?t.setX(t.x-n):t.setX(t.x+n),t.y>=0?t.setY(t.y-n):t.setY(t.y+n),t.normalize(),t}var Pm={RGB:"color",POSITION:"position"},gd=class extends Mm{constructor(i=Ms){super(),this.manager=i}parse(i){return super.parse(i).then(async e=>{let{featureTable:t,batchTable:n}=e,s=new Hn,r=t.header.extensions,a=new P,o;if(r&&r["3DTILES_draco_point_compression"]){let{byteOffset:h,byteLength:u,properties:d}=r["3DTILES_draco_point_compression"],f=this.manager.getHandler("draco.drc");if(f==null)throw Error("PNTSLoader: dracoLoader not available.");let p={};for(let g in d)if(g in Pm&&g in d){let x=Pm[g];p[x]=d[g]}let y={attributeIDs:p,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},m=t.getBuffer(h,u);o=await f.decodeGeometry(m,y),o.attributes.color&&(s.vertexColors=!0)}else{let h=t.getData("POINTS_LENGTH"),u=t.getData("POSITION",h,"FLOAT","VEC3"),d=t.getData("NORMAL",h,"FLOAT","VEC3"),f=t.getData("NORMAL",h,"UNSIGNED_BYTE","VEC2"),p=t.getData("RGB",h,"UNSIGNED_BYTE","VEC3"),y=t.getData("RGBA",h,"UNSIGNED_BYTE","VEC4"),m=t.getData("RGB565",h,"UNSIGNED_SHORT","SCALAR"),g=t.getData("CONSTANT_RGBA",h,"UNSIGNED_BYTE","VEC4"),x=t.getData("POSITION_QUANTIZED",h,"UNSIGNED_SHORT","VEC3"),v=t.getData("QUANTIZED_VOLUME_SCALE",h,"FLOAT","VEC3"),M=t.getData("QUANTIZED_VOLUME_OFFSET",h,"FLOAT","VEC3");if(o=new Mt,x){let L=new Float32Array(h*3);for(let A=0;A<h;A++)for(let E=0;E<3;E++){let I=3*A+E;L[I]=x[I]/65535*v[E]}a.x=M[0],a.y=M[1],a.z=M[2],o.setAttribute("position",new it(L,3,!1))}else o.setAttribute("position",new it(u,3,!1));if(d!==null)o.setAttribute("normal",new it(d,3,!1));else if(f!==null){let L=new Float32Array(h*3),A=new P;for(let E=0;E<h;E++){let I=f[E*2],j=f[E*2+1],_=Yb(I,j,A);L[E*3]=_.x,L[E*3+1]=_.y,L[E*3+2]=_.z}o.setAttribute("normal",new it(L,3,!1))}if(y!==null)o.setAttribute("color",new it(y,4,!0)),s.vertexColors=!0,s.transparent=!0,s.depthWrite=!1;else if(p!==null)o.setAttribute("color",new it(p,3,!0)),s.vertexColors=!0;else if(m!==null){let L=new Uint8Array(h*3);for(let A=0;A<h;A++){let E=qb(m[A]);for(let I=0;I<3;I++){let j=3*A+I;L[j]=E[I]}}o.setAttribute("color",new it(L,3,!0)),s.vertexColors=!0}else if(g!==null){s.color=new be(g[0],g[1],g[2]);let L=g[3]/255;L<1&&(s.opacity=L,s.transparent=!0,s.depthWrite=!1)}}let l=new yn(o,s);l.position.copy(a),e.scene=l,e.scene.featureTable=t,e.scene.batchTable=n;let c=t.getData("RTC_CENTER",1,"FLOAT","VEC3");return c&&(e.scene.position.x+=c[0],e.scene.position.y+=c[1],e.scene.position.z+=c[2]),e})}};function jb(i){let{x:e,y:t,z:n}=i;i.x=n,i.y=e,i.z=t}function $b(i){return-i+Math.PI/2}var Rm=new Zo,es=new P,fi=new P,ad=new P,Xi=new ke,ln=new ke,od=new Jt,_i=new zi,Im=new P,Lm=new P,Dm=new P,va=new P,Pl=new Ai,Zb=1e-12,Kb=.1;var vd=class{constructor(i=1,e=1,t=1){this.isEllipsoid=!0,this.name="",this.radius=new P(i,e,t)}intersectRay(i,e){return Xi.makeScale(...this.radius).invert(),od.center.set(0,0,0),od.radius=1,Pl.copy(i).applyMatrix4(Xi),Pl.intersectSphere(od,e)?(Xi.makeScale(...this.radius),e.applyMatrix4(Xi),e):null}getEastNorthUpFrame(i,e,t,n){return t.isMatrix4&&(n=t,t=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(i,e,Im,Lm,Dm),this.getCartographicToPosition(i,e,t,va),n.makeBasis(Im,Lm,Dm).setPosition(va)}getOrientedEastNorthUpFrame(i,e,t,n,s,r,a){return this.getObjectFrame(i,e,t,n,s,r,a,0)}getObjectFrame(i,e,t,n,s,r,a,o=2){return this.getEastNorthUpFrame(i,e,t,Xi),_i.set(s,r,-n,"ZXY"),a.makeRotationFromEuler(_i).premultiply(Xi),o===1?(_i.set(Math.PI/2,0,0,"XYZ"),ln.makeRotationFromEuler(_i),a.multiply(ln)):o===2&&(_i.set(-Math.PI/2,0,Math.PI,"XYZ"),ln.makeRotationFromEuler(_i),a.multiply(ln)),a}getCartographicFromObjectFrame(i,e,t=2){return t===1?(_i.set(-Math.PI/2,0,0,"XYZ"),ln.makeRotationFromEuler(_i).premultiply(i)):t===2?(_i.set(-Math.PI/2,0,Math.PI,"XYZ"),ln.makeRotationFromEuler(_i).premultiply(i)):ln.copy(i),va.setFromMatrixPosition(ln),this.getPositionToCartographic(va,e),this.getEastNorthUpFrame(e.lat,e.lon,0,Xi).invert(),ln.premultiply(Xi),_i.setFromRotationMatrix(ln,"ZXY"),e.azimuth=-_i.z,e.elevation=_i.x,e.roll=_i.y,e}getEastNorthUpAxes(i,e,t,n,s,r=va){this.getCartographicToPosition(i,e,0,r),this.getCartographicToNormal(i,e,s),t.set(-r.y,r.x,0).normalize(),n.crossVectors(s,t).normalize()}getCartographicToPosition(i,e,t,n){this.getCartographicToNormal(i,e,es);let s=this.radius;fi.copy(es),fi.x*=s.x**2,fi.y*=s.y**2,fi.z*=s.z**2;let r=Math.sqrt(es.dot(fi));return fi.divideScalar(r),n.copy(fi).addScaledVector(es,t)}getPositionToCartographic(i,e){this.getPositionToSurfacePoint(i,fi),this.getPositionToNormal(fi,es);let t=ad.subVectors(i,fi);return e.lon=Math.atan2(es.y,es.x),e.lat=Math.asin(es.z),e.height=Math.sign(t.dot(i))*t.length(),e}getCartographicToNormal(i,e,t){return Rm.set(1,$b(i),e),t.setFromSpherical(Rm).normalize(),jb(t),t}getPositionToNormal(i,e){let t=this.radius;return e.copy(i),e.x/=t.x**2,e.y/=t.y**2,e.z/=t.z**2,e.normalize(),e}getPositionToSurfacePoint(i,e){let t=this.radius,n=1/t.x**2,s=1/t.y**2,r=1/t.z**2,a=i.x*i.x*n,o=i.y*i.y*s,l=i.z*i.z*r,c=a+o+l,h=Math.sqrt(1/c),u=fi.copy(i).multiplyScalar(h);if(c<Kb)return isFinite(h)?e.copy(u):null;let d=ad.set(u.x*n*2,u.y*s*2,u.z*r*2),f=(1-h)*i.length()/(.5*d.length()),p=0,y,m,g,x,v,M,L,A,E,I,j;do{f-=p,g=1/(1+f*n),x=1/(1+f*s),v=1/(1+f*r),M=g*g,L=x*x,A=v*v,E=M*g,I=L*x,j=A*v,y=a*M+o*L+l*A-1,m=a*E*n+o*I*s+l*j*r;let _=-2*m;p=y/_}while(Math.abs(y)>Zb);return e.set(i.x*g,i.y*x,i.z*v)}calculateHorizonDistance(i,e){let t=this.calculateEffectiveRadius(i);return Math.sqrt(2*t*e+e**2)}calculateEffectiveRadius(i){let e=this.radius.x,t=1-this.radius.z**2/e**2,n=i*Sn.DEG2RAD,s=Math.sin(n)**2;return e/Math.sqrt(1-t*s)}getPositionElevation(i){this.getPositionToSurfacePoint(i,fi);let e=ad.subVectors(i,fi);return Math.sign(e.dot(i))*e.length()}closestPointToRayEstimate(i,e){return this.intersectRay(i,e)?e:(Xi.makeScale(...this.radius).invert(),Pl.copy(i).applyMatrix4(Xi),fi.set(0,0,0),Pl.closestPointToPoint(fi,e).normalize(),Xi.makeScale(...this.radius),e.applyMatrix4(Xi))}copy(i){return this.radius.copy(i.radius),this}clone(){return new this.constructor().copy(this)}},Pn=new vd(vr,vr,cm);Pn.name="WGS84 Earth";var Rl=new P,_r=new P,Mr=new P,ld=new P,Il=new ui,Ll=new P,br=new ke,Um=new ke,Nm=new P,Om=new ke,cd=new ui,hd={};function Fm(i,e,t,n){if(i=i/t*2-1,e=e/t*2-1,n.x=i,n.y=e,n.z=1-Math.abs(i)-Math.abs(e),n.z<0){let s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}var yd=class extends _m{constructor(i=Ms){super(),this.manager=i,this.adjustmentTransform=new ke,this.ellipsoid=Pn.clone()}resolveExternalURL(i){return this.manager.resolveURL(super.resolveExternalURL(i))}parse(i){return super.parse(i).then(e=>{let{featureTable:t,batchTable:n}=e,s=e.glbBytes.slice().buffer;return new Promise((r,a)=>{let o=this.fetchOptions,l=this.manager,c=l.getHandler("path.gltf")||new Qn(l);o.credentials==="include"&&o.mode==="cors"&&c.setCrossOrigin("use-credentials"),"credentials"in o&&c.setWithCredentials(o.credentials==="include"),o.headers&&c.setRequestHeader(o.headers);let h=e.gltfWorkingPath??this.workingPath;/[\\/]$/.test(h)||(h+="/");let u=this.adjustmentTransform;c.parse(s,h,d=>{let f=t.getData("INSTANCES_LENGTH"),p=t.getData("POSITION",f,"FLOAT","VEC3"),y=t.getData("POSITION_QUANTIZED",f,"UNSIGNED_SHORT","VEC3"),m=t.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),g=t.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),x=t.getData("NORMAL_UP",f,"FLOAT","VEC3"),v=t.getData("NORMAL_RIGHT",f,"FLOAT","VEC3"),M=t.getData("NORMAL_UP_OCT32P",f,"UNSIGNED_SHORT","VEC2"),L=t.getData("NORMAL_RIGHT_OCT32P",f,"UNSIGNED_SHORT","VEC2"),A=t.getData("SCALE_NON_UNIFORM",f,"FLOAT","VEC3"),E=t.getData("SCALE",f,"FLOAT","SCALAR"),I=t.getData("RTC_CENTER",1,"FLOAT","VEC3"),j=t.getData("EAST_NORTH_UP");if(!p&&y){p=new Float32Array(f*3);for(let F=0;F<f;F++)p[F*3+0]=m[0]+y[F*3+0]/65535*g[0],p[F*3+1]=m[1]+y[F*3+1]/65535*g[1],p[F*3+2]=m[2]+y[F*3+2]/65535*g[2]}let _=new P;for(let F=0;F<f;F++)_.x+=p[F*3+0]/f,_.y+=p[F*3+1]/f,_.z+=p[F*3+2]/f;let S=[],W=[];d.scene.updateMatrixWorld(),d.scene.traverse(F=>{if(F.isMesh){W.push(F);let{geometry:O,material:G}=F,H=new di(O,G,f);H.position.copy(_),I&&(H.position.x+=I[0],H.position.y+=I[1],H.position.z+=I[2]),S.push(H)}});for(let F=0;F<f;F++){ld.set(p[F*3+0]-_.x,p[F*3+1]-_.y,p[F*3+2]-_.z),Il.identity(),x&&v?(_r.set(x[F*3+0],x[F*3+1],x[F*3+2]),Mr.set(v[F*3+0],v[F*3+1],v[F*3+2]),Rl.crossVectors(Mr,_r).normalize(),br.makeBasis(Mr,_r,Rl),Il.setFromRotationMatrix(br)):M&&L&&(Fm(M[F*2+0],M[F*2+1],65535,_r),Fm(L[F*2+0],L[F*2+1],65535,Mr),Rl.crossVectors(Mr,_r).normalize(),br.makeBasis(Mr,_r,Rl),Il.setFromRotationMatrix(br)),Ll.set(1,1,1),A&&Ll.set(A[F*3+0],A[F*3+1],A[F*3+2]),E&&Ll.multiplyScalar(E[F]);for(let O=0,G=S.length;O<G;O++){let H=S[O];cd.copy(Il),j&&(H.updateMatrixWorld(),Nm.copy(ld).applyMatrix4(H.matrixWorld),this.ellipsoid.getPositionToCartographic(Nm,hd),this.ellipsoid.getEastNorthUpFrame(hd.lat,hd.lon,Om),cd.setFromRotationMatrix(Om)),br.compose(ld,cd,Ll).multiply(u);let ie=W[O];Um.multiplyMatrices(br,ie.matrixWorld),H.setMatrixAt(F,Um)}}d.scene.clear(),d.scene.add(...S),d.batchTable=n,d.featureTable=t,d.scene.batchTable=n,d.scene.featureTable=t,r(d)},a)})})}},Wm=class extends bm{constructor(i=Ms){super(),this.manager=i,this.adjustmentTransform=new ke,this.ellipsoid=Pn.clone()}parse(i){let e=super.parse(i),{manager:t,ellipsoid:n,adjustmentTransform:s}=this,r=[];for(let a in e.tiles){let{type:o,buffer:l}=e.tiles[a];switch(o){case"b3dm":{let c=l.slice(),h=new md(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}case"pnts":{let c=l.slice(),h=new gd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions;let u=h.parse(c.buffer);r.push(u);break}case"i3dm":{let c=l.slice(),h=new yd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.ellipsoid.copy(n),h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}}}return Promise.all(r).then(a=>{let o=new Vt;return a.forEach(l=>{o.add(l.scene)}),{tiles:a,scene:o}})}},ya=new ke,Jb=class extends Vt{constructor(i){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=i,this.matrixWorldInverse=new ke}raycast(i,e){return this.tilesRenderer.raycast(i,e),!1}updateMatrixWorld(i){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||i){this.parent===null?ya.copy(this.matrix):ya.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;let e=ya.elements,t=this.matrixWorld.elements,n=!1;for(let s=0;s<16;s++){let r=e[s],a=t[s];if(Math.abs(r-a)>2**-52){n=!0;break}}if(n){this.matrixWorld.copy(ya),this.matrixWorldInverse.copy(ya).invert();let s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateMatrixWorld();let{tilesRenderer:r}=this,{activeTiles:a,visibleTiles:o}=r;a.forEach(l=>{o.has(l)||l.engineData.scene.updateMatrixWorld(!0)})}}}updateWorldMatrix(i,e){this.parent&&i&&this.parent.updateWorldMatrix(i,!1),this.updateMatrixWorld(!0)}},Qb=new Ai;function e1(i,e,t,n){let{scene:s}=i.engineData;t.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(i,s,e,n))||e.intersectObject(s,!0,n)}function t1(i){return"traversal"in i}function Xm(i,e,t,n,s=null){if(!t1(e))return;let{group:r,activeTiles:a}=i,{boundingVolume:o}=e.engineData;if(s===null&&(s=Qb,s.copy(t.ray).applyMatrix4(r.matrixWorldInverse)),!e.traversal.used||!o.intersectsRay(s))return;a.has(e)&&e1(e,t,i,n);let l=e.children;for(let c=0,h=l.length;c<h;c++)Xm(i,l[c],t,n,s)}var Dl=new P,Ul=new P,Mi=new P,Nl=new Ai,fd=class{constructor(i=new ai,e=new ke){this.box=i.clone(),this.transform=e.clone(),this.inverseTransform=new ke,this.points=Array(8).fill().map(()=>new P),this.planes=[,,,,,,].fill().map(()=>new gi)}copy(i){return this.box.copy(i.box),this.transform.copy(i.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(i,e){return e.copy(i).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(i){return this.clampPoint(i,Mi).distanceTo(i)}containsPoint(i){return Mi.copy(i).applyMatrix4(this.inverseTransform),this.box.containsPoint(Mi)}intersectsRay(i){return Nl.copy(i).applyMatrix4(this.inverseTransform),Nl.intersectsBox(this.box)}intersectRay(i,e){return Nl.copy(i).applyMatrix4(this.inverseTransform),Nl.intersectBox(this.box,e)?(e.applyMatrix4(this.transform),e):null}update(){let{points:i,inverseTransform:e,transform:t,box:n}=this;e.copy(t).invert();let{min:s,max:r}=n,a=0;for(let o=-1;o<=1;o+=2)for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)i[a].set(o<0?s.x:r.x,l<0?s.y:r.y,c<0?s.z:r.z).applyMatrix4(t),a++;this.updatePlanes()}updatePlanes(){Dl.copy(this.box.min).applyMatrix4(this.transform),Ul.copy(this.box.max).applyMatrix4(this.transform),Mi.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(Mi,Dl),this.planes[1].setFromNormalAndCoplanarPoint(Mi,Ul).negate(),Mi.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(Mi,Dl),this.planes[3].setFromNormalAndCoplanarPoint(Mi,Ul).negate(),Mi.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(Mi,Dl),this.planes[5].setFromNormalAndCoplanarPoint(Mi,Ul).negate()}intersectsSphere(i){return this.clampPoint(i.center,Mi),Mi.distanceToSquared(i.center)<=i.radius*i.radius}intersectsFrustum(i){return this._intersectsPlaneShape(i.planes,i.points)}intersectsOBB(i){return this._intersectsPlaneShape(i.planes,i.points)}_intersectsPlaneShape(i,e){let t=this.points,n=this.planes;for(let s=0;s<6;s++){let r=i[s],a=-1/0;for(let o=0;o<8;o++){let l=t[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}for(let s=0;s<6;s++){let r=n[s],a=-1/0;for(let o=0;o<8;o++){let l=e[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}return!0}},Ma=Math.PI,ud=Ma/2,xa=new P,Es=new P,Qi=new P,tt=new P,pi=new ke,i1=new ai,Bm=new ke;function ts(i,e){e.radius=Math.max(e.radius,i.distanceToSquared(e.center))}function zm(i){return i.x!==i.y}var qm=class extends vd{constructor(i=1,e=1,t=1,n=-ud,s=ud,r=0,a=2*Ma,o=0,l=0){super(i,e,t),this.latStart=n,this.latEnd=s,this.lonStart=r,this.lonEnd=a,this.heightStart=o,this.heightEnd=l}getBoundingBox(i,e){zm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");let{latStart:t,latEnd:n,lonStart:s,lonEnd:r,heightStart:a,heightEnd:o}=this,l=(t+n)*.5,c=(s+r)*.5,h=t>0,u=n<0,d;d=h?t:u?n:0;let{min:f,max:p}=i;f.setScalar(1/0),p.setScalar(-1/0),r-s<=Ma?(this.getCartographicToNormal(l,c,Qi),Es.set(0,0,1),xa.crossVectors(Es,Qi).normalize(),Es.crossVectors(Qi,xa).normalize(),e.makeBasis(xa,Es,Qi),pi.copy(e).invert(),this.getCartographicToPosition(d,s,o,tt).applyMatrix4(pi),p.x=Math.abs(tt.x),f.x=-p.x,this.getCartographicToPosition(n,s,o,tt).applyMatrix4(pi),p.y=tt.y,this.getCartographicToPosition(n,c,o,tt).applyMatrix4(pi),p.y=Math.max(tt.y,p.y),this.getCartographicToPosition(t,s,o,tt).applyMatrix4(pi),f.y=tt.y,this.getCartographicToPosition(t,c,o,tt).applyMatrix4(pi),f.y=Math.min(tt.y,f.y),this.getCartographicToPosition(l,c,o,tt).applyMatrix4(pi),p.z=tt.z,this.getCartographicToPosition(t,s,a,tt).applyMatrix4(pi),f.z=tt.z,this.getCartographicToPosition(n,s,a,tt).applyMatrix4(pi),f.z=Math.min(tt.z,f.z)):(this.getCartographicToPosition(d,c,o,Qi),Qi.z=0,Qi.length()<1e-10?Qi.set(1,0,0):Qi.normalize(),Es.set(0,0,1),xa.crossVectors(Qi,Es).normalize(),e.makeBasis(xa,Es,Qi),pi.copy(e).invert(),this.getCartographicToPosition(d,c+ud,o,tt).applyMatrix4(pi),p.x=Math.abs(tt.x),f.x=-p.x,this.getCartographicToPosition(n,0,u?a:o,tt).applyMatrix4(pi),p.y=tt.y,this.getCartographicToPosition(t,0,h?a:o,tt).applyMatrix4(pi),f.y=tt.y,this.getCartographicToPosition(d,c,o,tt).applyMatrix4(pi),p.z=tt.z,this.getCartographicToPosition(d,r,o,tt).applyMatrix4(pi),f.z=tt.z),i.getCenter(tt),i.min.sub(tt).multiplyScalar(1.0000000000001),i.max.sub(tt).multiplyScalar(1.0000000000001),tt.applyMatrix4(e),e.setPosition(tt)}getBoundingSphere(i){zm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(i1,Bm),i.center.setFromMatrixPosition(Bm),i.radius=0;let{latStart:e,latEnd:t,lonStart:n,lonEnd:s,heightStart:r,heightEnd:a}=this,o=(e+t)*.5,l=(n+s)*.5,c=e>0,h=t<0,u;u=c?e:h?t:0,this.getCartographicToPosition(u,n,a,tt),ts(tt,i),this.getCartographicToPosition(t,n,a,tt),ts(tt,i),this.getCartographicToPosition(t,l,a,tt),ts(tt,i),this.getCartographicToPosition(e,n,a,tt),ts(tt,i),this.getCartographicToPosition(e,l,a,tt),ts(tt,i),this.getCartographicToPosition(o,l,a,tt),ts(tt,i),this.getCartographicToPosition(e,n,r,tt),ts(tt,i),s-n>Ma&&(this.getCartographicToPosition(u,l+Ma,a,tt),ts(tt,i)),i.radius=Math.sqrt(i.radius)*1.0000000000001}},An=new P,En=new P,Cn=new P,km=new P,Vm=new P,n1=class{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(i){let e=this.sphere,t=this.obb||this.regionObb;return!(e&&!i.intersectsSphere(e)||t&&!t.intersectsRay(i))}intersectRay(i,e=null){let t=this.sphere,n=this.obb||this.regionObb,s=-1/0,r=-1/0;t&&i.intersectSphere(t,km)&&(s=t.containsPoint(i.origin)?0:i.origin.distanceToSquared(km)),n&&n.intersectRay(i,Vm)&&(r=n.containsPoint(i.origin)?0:i.origin.distanceToSquared(Vm));let a=Math.max(s,r);return a===-1/0?null:(i.at(Math.sqrt(a),e),e)}distanceToPoint(i){let e=this.sphere,t=this.obb||this.regionObb,n=-1/0,s=-1/0;return e&&(n=Math.max(e.distanceToPoint(i),0)),t&&(s=t.distanceToPoint(i)),n>s?n:s}intersectsFrustum(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsFrustum(i)?!1:!!(t||e)}intersectsSphere(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!t.intersectsSphere(i)||e&&!e.intersectsSphere(i)?!1:!!(t||e)}intersectsOBB(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsOBB(i)?!1:!!(t||e)}getOBB(i,e){let t=this.obb||this.regionObb;t?(i.copy(t.box),e.copy(t.transform)):(this.getAABB(i),e.identity())}getAABB(i){if(this.sphere)this.sphere.getBoundingBox(i);else{let e=this.obb||this.regionObb;i.copy(e.box).applyMatrix4(e.transform)}}getSphere(i){if(this.sphere)i.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(i);else{let e=this.obb||this.regionObb;e.box.getBoundingSphere(i),i.applyMatrix4(e.transform)}}setObbData(i,e){let t=new fd;An.set(i[3],i[4],i[5]),En.set(i[6],i[7],i[8]),Cn.set(i[9],i[10],i[11]);let n=An.length(),s=En.length(),r=Cn.length();An.normalize(),En.normalize(),Cn.normalize(),n===0&&An.crossVectors(En,Cn),s===0&&En.crossVectors(An,Cn),r===0&&Cn.crossVectors(An,En),t.transform.set(An.x,En.x,Cn.x,i[0],An.y,En.y,Cn.y,i[1],An.z,En.z,Cn.z,i[2],0,0,0,1).premultiply(e),t.box.min.set(-n,-s,-r),t.box.max.set(n,s,r),t.update(),this.obb=t}setSphereData(i,e,t,n,s){let r=new Jt;r.center.set(i,e,t),r.radius=n,r.applyMatrix4(s),this.sphere=r}setRegionData(i,e,t,n,s,r,a){let o=new qm(...i.radius,t,s,e,n,r,a),l=new fd;o.getBoundingBox(l.box,l.transform),l.update(),this.region=o,this.regionObb=l}},s1=new ot;function r1(i,e,t,n){let s=s1.set(i.normal.x,i.normal.y,i.normal.z,e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z);return n.set(-i.constant,-e.constant,-t.constant),n.applyMatrix3(s.invert()),n}var a1=class extends Vn{constructor(){super(),this.points=Array(8).fill().map(()=>new P)}setFromProjectionMatrix(...i){return super.setFromProjectionMatrix(...i),this.calculateFrustumPoints(),this}calculateFrustumPoints(){let{planes:i,points:e}=this;[[i[0],i[3],i[4]],[i[1],i[3],i[4]],[i[0],i[2],i[4]],[i[1],i[2],i[4]],[i[0],i[3],i[5]],[i[1],i[3],i[5]],[i[0],i[2],i[5]],[i[1],i[2],i[5]]].forEach((t,n)=>{r1(t[0],t[1],t[2],e[n])})}};var pd=0;function Hm(i,e,t,n){try{return du.getByteLength(i,e,t,n)}catch{return pd}}function o1(i){if(!i)return 0;if(i.isExternalTexture)return i.userData?.byteLength??pd;let{format:e,type:t,image:n,mipmaps:s}=i;if(i.isCompressedTexture&&Array.isArray(s)&&s.length>0){let a=0;for(let o of s)o?.data?.byteLength?a+=o.data.byteLength:a+=Hm(o.width,o.height,e,t);return a}if(!n)return pd;let r=Hm(n.width,n.height,e,t);return r*=i.generateMipmaps?4/3:1,r}function l1(i){let e=new Set,t=0;return i.traverse(n=>{if(n.geometry&&!e.has(n.geometry)&&(t+=Sm(n.geometry),e.add(n.geometry)),n.material){let s=n.material;for(let r in s){let a=s[r];a&&a.isTexture&&!e.has(a)&&(t+=o1(a),e.add(a))}}}),t}var Ym=Symbol("INITIAL_FRUSTUM_CULLED"),Ol=new ke,_a=new P,dd=new ne,c1=new P(1,0,0),h1=new P(0,1,0),u1=()=>null;function Gm(i,e){i.traverse(t=>{t.frustumCulled=t[Ym]&&e})}var xd=class extends vm{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(i){this._autoDisableRendererCulling!==i&&(super._autoDisableRendererCulling=i,this.forEachLoadedModel(e=>{Gm(e,!i)}))}constructor(...i){super(...i),this.accelerateRaycast=!0,this.group=new Jb(this),this.ellipsoid=Pn.clone(),this.surface=this.ellipsoid,this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._upRotationMatrix=new ke,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new xs,this._listeners={}}addEventListener(i,e){vi.prototype.addEventListener.call(this,i,e)}hasEventListener(i,e){return vi.prototype.hasEventListener.call(this,i,e)}removeEventListener(i,e){vi.prototype.removeEventListener.call(this,i,e)}dispatchEvent(i){vi.prototype.dispatchEvent.call(this,i)}getBoundingBox(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getAABB(i),!0):!1}getOrientedBoundingBox(i,e){if(!this.root)return!1;let t=this.root.engineData.boundingVolume;return t?(t.getOBB(i,e),!0):!1}getBoundingSphere(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getSphere(i),!0):!1}forEachLoadedModel(i){this.traverse(e=>{let t=e.engineData&&e.engineData.scene;t&&i(t,e)},null,!1)}raycast(i,e){if(this.root)if(this.accelerateRaycast)Xm(this,this.root,i,e);else{let t=i.firstHitOnly?[]:e;for(let n of this.activeTiles){let{scene:s}=n.engineData;this.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(n,s,i,t))||i.intersectObject(s,!0,t)}i.firstHitOnly&&t.length>0&&(t.sort((n,s)=>n.distance-s.distance),e.push(t[0]))}}hasCamera(i){return this.cameraMap.has(i)}setCamera(i){let e=this.cameras,t=this.cameraMap;return t.has(i)?!1:(t.set(i,new ne),e.push(i),this.dispatchEvent({type:"add-camera",camera:i}),!0)}setResolution(i,e,t){let n=this.cameraMap;if(!n.has(i))return!1;let s=e.isVector2?e.x:e,r=e.isVector2?e.y:t,a=n.get(i);return(a.width!==s||a.height!==r)&&(a.set(s,r),this.dispatchEvent({type:"camera-resolution-change"})),!0}getResolution(i,e){let t=this.cameraMap.get(i);return t?e.copy(t):null}setResolutionFromRenderer(i,e){return e.getSize(dd),this.setResolution(i,dd.x,dd.y)}deleteCamera(i){let e=this.cameras,t=this.cameraMap;if(t.has(i)){let n=e.indexOf(i);return e.splice(n,1),t.delete(i),this.dispatchEvent({type:"delete-camera",camera:i}),!0}return!1}loadRootTileset(...i){return super.loadRootTileset(...i).then(e=>{let{asset:t,extensions:n={}}=e;switch((t&&t.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(h1,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis(c1,Math.PI/2);break}if("3DTILES_ellipsoid"in n){let s=n["3DTILES_ellipsoid"],{ellipsoid:r}=this;r.name=s.body,s.radii?r.radius.set(...s.radii):r.radius.set(1,1,1)}return e})}prepareForTraversal(){let i=this.group,e=this.cameras,t=this.cameraMap,n=this.cameraInfo;for(;n.length>e.length;)n.pop();for(;n.length<e.length;)n.push({frustum:new a1,isOrthographic:!1,sseDenominator:-1,position:new P,invScale:-1,pixelSize:0});_a.setFromMatrixScale(i.matrixWorldInverse),Math.abs(Math.max(_a.x-_a.y,_a.x-_a.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let s=0,r=n.length;s<r;s++){let a=e[s],o=n[s],l=o.frustum,c=o.position,h=t.get(a);(h.width===0||h.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");let u=a.projectionMatrix.elements;if(o.isOrthographic=u[15]===1,o.isOrthographic){let d=2/u[0],f=2/u[5];o.pixelSize=Math.max(f/h.height,d/h.width)}else o.sseDenominator=2/u[5]/h.height;Ol.copy(i.matrixWorld),Ol.premultiply(a.matrixWorldInverse),Ol.premultiply(a.projectionMatrix),l.setFromProjectionMatrix(Ol,a.coordinateSystem,a.reversedDepth),c.set(0,0,0),c.applyMatrix4(a.matrixWorld),c.applyMatrix4(i.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let i=!1;this.invokeAllPlugins(e=>i||(i=!!(e!==this&&e.calculateTileViewError))),i===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(i,e,t=null){super.preprocessNode(i,e,t);let n=new ke;if(i.transform){let a=i.transform;for(let o=0;o<16;o++)n.elements[o]=a[o]}t&&n.premultiply(t.engineData.transform);let s=new ke().copy(n).invert(),r=new n1;"sphere"in i.boundingVolume&&r.setSphereData(...i.boundingVolume.sphere,n),"box"in i.boundingVolume&&r.setObbData(i.boundingVolume.box,n),"region"in i.boundingVolume&&r.setRegionData(this.ellipsoid,...i.boundingVolume.region),i.engineData.transform=n,i.engineData.transformInverse=s,i.engineData.boundingVolume=r,i.engineData.geometry=null,i.engineData.materials=null,i.engineData.textures=null,i.toJSON=u1}async parseTile(i,e,t,n,s){let r=e.engineData,a=Al(n),o=this.fetchOptions,l=this.manager,c=null,h=r.transform,u=this._upRotationMatrix,d=(Kn(i)||t).toLowerCase();switch(d){case"b3dm":{let v=new md(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),c=v.parse(i);break}case"pnts":{let v=new gd(l);v.workingPath=a,v.fetchOptions=o,c=v.parse(i);break}case"i3dm":{let v=new yd(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i);break}case"cmpt":{let v=new Wm(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i).then(M=>M.scene);break}case"gltf":case"glb":{let v=l.getHandler("path.gltf")||l.getHandler("path.glb")||new Qn(l);v.setWithCredentials(o.credentials==="include"),v.setRequestHeader(o.headers||{}),o.credentials==="include"&&o.mode==="cors"&&v.setCrossOrigin("use-credentials");let M=v.resourcePath||v.path||a;!/[\\/]$/.test(M)&&M.length&&(M+="/"),c=v.parseAsync(i,M).then(L=>{L.scene=L.scene||new Vt;let{scene:A}=L;return A.updateMatrix(),A.matrix.multiply(u).decompose(A.position,A.quaternion,A.scale),L});break}default:c=this.invokeOnePlugin(v=>v.parseToMesh&&v.parseToMesh(i,e,t,n,s));break}let f=await c;if(f===null)throw Error(`TilesRenderer: Content type "${d}" not supported.`);let p,y;f.isObject3D?(p=f,y=null):(p=f.scene,y=f),p.updateMatrix(),p.matrix.premultiply(h),p.matrix.decompose(p.position,p.quaternion,p.scale),await this.invokeAllPlugins(v=>v.processTileModel&&v.processTileModel(p,e)),p.traverse(v=>{v[Ym]=v.frustumCulled,v.userData.tile=e}),Gm(p,!this.autoDisableRendererCulling);let m=[],g=[],x=[];if(p.traverse(v=>{if(v.geometry&&g.push(v.geometry),v.material){let M=v.material;m.push(v.material);for(let L in M){let A=M[L];A&&A.isTexture&&x.push(A)}}}),s.aborted){for(let v=0,M=x.length;v<M;v++){let L=x[v];L.image instanceof ImageBitmap&&L.image.close(),L.dispose()}return}r.materials=m,r.geometry=g,r.textures=x,r.scene=p,r.metadata=y}disposeTile(i){super.disposeTile(i);let e=i.engineData;if(e.scene){let t=e.materials,n=e.geometry,s=e.textures,r=e.scene.parent;e.scene.traverse(a=>{a.userData.meshFeatures&&a.userData.meshFeatures.dispose(),a.userData.structuralMetadata&&a.userData.structuralMetadata.dispose()});for(let a=0,o=n.length;a<o;a++)n[a].dispose();for(let a=0,o=t.length;a<o;a++)t[a].dispose();for(let a=0,o=s.length;a<o;a++){let l=s[a];l.image instanceof ImageBitmap&&l.image.close(),l.dispose()}r&&r.remove(e.scene),e.scene=null,e.materials=null,e.textures=null,e.geometry=null,e.metadata=null}}setTileActive(i,e){super.setTileActive(i,e);let t=i.engineData.scene;t&&(e?(t.parent=this.group,t.updateMatrixWorld(!0)):this.visibleTiles.has(i)||(t.parent=null))}setTileVisible(i,e){let t=i.engineData.scene,{activeTiles:n,group:s}=this;t&&(e?s.add(t):(s.remove(t),n.has(i)&&(t.parent=s))),super.setTileVisible(i,e)}calculateBytesUsed(i,e){let t=this._bytesUsed;return!t.has(i)&&e&&t.set(i,l1(e)),t.get(i)??null}calculateTileViewError(i,e){let t=i.engineData,n=this.cameras,s=this.cameraInfo,r=t.boundingVolume,a=!1,o=0,l=1/0,c=0,h=1/0;for(let u=0,d=n.length;u<d;u++){let f=s[u],p,y;if(f.isOrthographic){let g=f.pixelSize;p=i.geometricError/g,y=1/0}else{let g=f.sseDenominator;y=r.distanceToPoint(f.position),p=y===0?1/0:i.geometricError/(y*g)}let m=s[u].frustum;r.intersectsFrustum(m)&&(a=!0,o=Math.max(o,p),l=Math.min(l,y)),c=Math.max(c,p),h=Math.min(h,y)}a?(e.inView=!0,e.error=o,e.distanceFromCamera=l):(e.inView=!1,e.error=c,e.distanceFromCamera=h)}dispose(){super.dispose(),this.group.removeFromParent()}};var jm="https://tile.googleapis.com/v1/createSession",Zm=class{get isMapTilesSession(){return this.authURL===jm}constructor(i={}){let{apiToken:e,sessionOptions:t=null,autoRefreshToken:n=!1}=i;this.apiToken=e,this.autoRefreshToken=n,this.authURL=jm,this.sessionToken=null,this.sessionOptions=t,this._tokenRefreshPromise=null,this._authHostname=null}async fetch(i,e){this.sessionToken===null&&this.isMapTilesSession&&this.refreshToken(e),await this._tokenRefreshPromise,this._authHostname===null&&(this._authHostname=new URL(this.authURL).host);let t=new URL(i),n=t.host===this._authHostname;n&&(t.searchParams.set("key",this.apiToken),this.sessionToken&&t.searchParams.set("session",this.sessionToken));let s=await fetch(t,e);return n&&s.status>=400&&s.status<=499&&this.autoRefreshToken&&(await this.refreshToken(e),this.sessionToken&&t.searchParams.set("session",this.sessionToken),s=await fetch(t,e)),this.sessionToken===null&&!this.isMapTilesSession?s.json().then(r=>(this.sessionToken=$m(r),r)):s}refreshToken(i){if(this._tokenRefreshPromise===null){let e=new URL(this.authURL);e.searchParams.set("key",this.apiToken);let t={...i};this.isMapTilesSession&&(t.method="POST",t.body=JSON.stringify(this.sessionOptions),t.headers=t.headers||{},t.headers={...t.headers,"Content-Type":"application/json"}),this._tokenRefreshPromise=fetch(e,t).then(n=>{if(!n.ok)throw Error(`GoogleCloudAuth: Failed to load data with error code ${n.status}`);return n.json()}).then(n=>(this.sessionToken=$m(n),this._tokenRefreshPromise=null,n))}return this._tokenRefreshPromise}};function $m(i){if("session"in i)return i.session;{let e=null,t=i.root;return Eu(t,n=>{if(n.content&&n.content.uri){let[,s]=n.content.uri.split("?");return e=new URLSearchParams(s).get("session"),!0}return!1}),e}}var d1=class{constructor(){this.creditsCount={}}_adjustAttributions(i,e){let t=this.creditsCount,n=i.split(/;/g);for(let s=0,r=n.length;s<r;s++){let a=n[s];a in t||(t[a]=0),t[a]+=e?1:-1,t[a]<=0&&delete t[a]}}addAttributions(i){this._adjustAttributions(i,!0)}removeAttributions(i){this._adjustAttributions(i,!1)}toString(){return Object.entries(this.creditsCount).sort((i,e)=>{let t=i[1];return e[1]-t}).map(i=>i[0]).join("; ")}},f1="https://tile.googleapis.com/v1/3dtiles/root.json",_d=class{constructor({apiToken:i,sessionOptions:e=null,autoRefreshToken:t=!1,logoUrl:n=null,useRecommendedSettings:s=!0}){this.name="GOOGLE_CLOUD_AUTH_PLUGIN",this.apiToken=i,this.useRecommendedSettings=s,this.logoUrl=n,this.auth=new Zm({apiToken:i,autoRefreshToken:t,sessionOptions:e}),this.tiles=null,this._visibilityChangeCallback=null,this._attributionsManager=new d1,this._logoAttribution={value:"",type:"image",collapsible:!1},this._attribution={value:"",type:"string",collapsible:!0}}init(i){let{useRecommendedSettings:e,auth:t}=this;i.resetFailedTiles(),i.rootURL??(i.rootURL=f1),t.sessionOptions||(t.authURL=i.rootURL),e&&!t.isMapTilesSession&&(i.errorTarget=20),this.tiles=i,this._visibilityChangeCallback=({tile:n,visible:s})=>{let r=n.engineData.metadata?.asset?.copyright||"";s?this._attributionsManager.addAttributions(r):this._attributionsManager.removeAttributions(r)},i.addEventListener("tile-visibility-change",this._visibilityChangeCallback)}getAttributions(i){this.tiles.visibleTiles.size>0&&(this.logoUrl&&(this._logoAttribution.value=this.logoUrl,i.push(this._logoAttribution)),this._attribution.value=this._attributionsManager.toString(),i.push(this._attribution))}dispose(){this.tiles.removeEventListener("tile-visibility-change",this._visibilityChangeCallback)}async fetchData(i,e){return this.auth.fetch(i,e)}};var Km=1.340264,Jm=-.081106,Qm=893e-6,eg=.003796,tg=Math.sqrt(3)/2;function gg(i,e,t){let n=Math.asin(tg*Math.sin(e)),s=n*n,r=s*s*s;return t[0]=i*Math.cos(n)/(tg*(Km+3*Jm*s+r*(7*Qm+9*eg*s))),t[1]=n*(Km+Jm*s+r*(Qm+eg*s)),t}var Kw=gg(Math.PI,0,[0,0])[0],Jw=gg(0,Math.PI/2,[0,0])[1];var p1=Symbol("TILE_X"),m1=Symbol("TILE_Y"),g1=Symbol("TILE_LEVEL");var Qw=Symbol("OVERLAY_RANGE"),eT=Symbol("OVERLAY_LEVEL");var tT=Symbol("OVERLAY_PARAMS");var iT=Object.freeze({fill:"#cccccc",stroke:"transparent",strokeWidth:1,radius:2,order:0,visible:!0});var nT=Symbol("SPLIT_TILE_DATA"),sT=Symbol("SPLIT_HASH"),rT=Symbol("ORIGINAL_REFINE"),ig=new gr;ig.maxJobs=10,ig.priorityCallback=(i,e)=>{let t=i.tile,n=e.tile,s=t.internal.renderer,r=n.internal.renderer,a=s.visibleTiles.has(t);return a===r.visibleTiles.has(n)?pa(t,n):a?1:-1};var aT=Symbol("TILE_X"),oT=Symbol("TILE_Y"),lT=Symbol("TILE_LEVEL"),cT=Symbol("TILE_AVAILABLE"),hT=Symbol("TILE_SPLIT_SOURCE_SCENE");var ng=new P;function ba(i,e){if(i.isInterleavedBufferAttribute||i.array instanceof e)return i;let t=e===Int8Array||e===Int16Array||e===Int32Array?-1:0,n=new it(new e(i.count*i.itemSize),i.itemSize,!0),s=i.itemSize,r=i.count;for(let a=0;a<r;a++)for(let o=0;o<s;o++){let l=Sn.clamp(i.getComponent(a,o),t,1);n.setComponent(a,o,l)}return n}function v1(i,e=Int16Array){let t=i.geometry,n=t.attributes,s=n.position;if(s.isInterleavedBufferAttribute||s.array instanceof e)return s;let r=new it(new e(s.count*s.itemSize),s.itemSize,!1),a=s.itemSize,o=s.count;t.computeBoundingBox();let l=t.boundingBox,{min:c,max:h}=l,u=2**(8*e.BYTES_PER_ELEMENT-1)-1,d=-u;for(let f=0;f<o;f++)for(let p=0;p<a;p++){let y=p===0?"x":p===1?"y":"z",m=c[y],g=h[y],x=Sn.mapLinear(s.getComponent(f,p),m,g,d,u);r.setComponent(f,p,x)}l.getCenter(ng).multiply(i.scale).applyQuaternion(i.quaternion),i.position.add(ng),i.scale.x*=.5*(h.x-c.x)/u,i.scale.y*=.5*(h.y-c.y)/u,i.scale.z*=.5*(h.z-c.z)/u,n.position=r,i.geometry.boundingBox=null,i.geometry.boundingSphere=null,i.updateMatrixWorld()}var Sd=class{constructor(i){this._options={generateNormals:!1,disableMipmaps:!0,compressIndex:!0,compressNormals:!1,compressUvs:!1,compressPosition:!1,uvType:Int8Array,normalType:Int8Array,positionType:Int16Array,...i},this.name="TILES_COMPRESSION_PLUGIN",this.priority=-100}processTileModel(i,e){let{generateNormals:t,disableMipmaps:n,compressIndex:s,compressUvs:r,compressNormals:a,compressPosition:o,uvType:l,normalType:c,positionType:h}=this._options;i.traverse(u=>{if(u.material&&n){let d=u.material;for(let f in d){let p=d[f];p&&p.isTexture&&p.generateMipmaps&&(p.generateMipmaps=!1,p.minFilter=si)}}if(u.geometry){let d=u.geometry,f=d.attributes;if(r){let{uv:p,uv1:y,uv2:m,uv3:g}=f;p&&(f.uv=ba(p,l)),y&&(f.uv1=ba(y,l)),m&&(f.uv2=ba(m,l)),g&&(f.uv3=ba(g,l))}if(t&&!f.normals&&d.computeVertexNormals(),a&&f.normals&&(f.normals=ba(f.normals,c)),o&&v1(u,h),s&&d.index){let p=f.position.count,y=d.index,m=p>65535?Uint32Array:p>255?Uint16Array:Uint8Array;if(!(y.array instanceof m)){let g=new m(d.index.count);g.set(y.array);let x=new it(g,1);d.setIndex(x)}}}})}};function Zt(i,e,t){return i&&e in i?i[e]:t}function vg(i){return i!=="BOOLEAN"&&i!=="STRING"&&i!=="ENUM"}function y1(i){return/^FLOAT/.test(i)}function Aa(i){return/^VEC/.test(i)}function Ea(i){return/^MAT/.test(i)}function yg(i,e,t,n=null){return Ea(t)||Aa(t)?n.fromArray(i,e):i[e]}function Md(i){let{type:e,componentType:t}=i;switch(e){case"SCALAR":return t==="INT64"?0n:0;case"VEC2":return new ne;case"VEC3":return new P;case"VEC4":return new xt;case"MAT2":return new Ko;case"MAT3":return new ot;case"MAT4":return new ke;case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return 0}}function sg(i,e){if(e==null)return!1;switch(i){case"SCALAR":return typeof e=="number"||typeof e=="bigint";case"VEC2":return e.isVector2;case"VEC3":return e.isVector3;case"VEC4":return e.isVector4;case"MAT2":return e.isMatrix2;case"MAT3":return e.isMatrix3;case"MAT4":return e.isMatrix4;case"BOOLEAN":return typeof e=="boolean";case"STRING":return typeof e=="string";case"ENUM":return typeof e=="number"||typeof e=="bigint"}throw Error("ClassProperty: invalid type.")}function Ta(i,e=null){switch(i){case"INT8":return Int8Array;case"INT16":return Int16Array;case"INT32":return Int32Array;case"INT64":return BigInt64Array;case"UINT8":return Uint8Array;case"UINT16":return Uint16Array;case"UINT32":return Uint32Array;case"UINT64":return BigUint64Array;case"FLOAT32":return Float32Array;case"FLOAT64":return Float64Array}switch(e){case"BOOLEAN":return Uint8Array;case"STRING":return Uint8Array}throw Error("ClassProperty: invalid type.")}function x1(i,e=null){if(i.array){e=e&&Array.isArray(e)?e:[],e.length=i.count;for(let t=0,n=e.length;t<n;t++)e[t]=Fl(i,e[t])}else e=Fl(i,e);return e}function Fl(i,e=null){let t=i.default,n=i.type;if(e||(e=Md(i)),t===null){switch(n){case"SCALAR":return 0;case"VEC2":return e.set(0,0);case"VEC3":return e.set(0,0,0);case"VEC4":return e.set(0,0,0,0);case"MAT2":return e.identity();case"MAT3":return e.identity();case"MAT4":return e.identity();case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return""}throw Error("ClassProperty: invalid type.")}else if(Ea(n))e.fromArray(t);else if(Aa(n))e.fromArray(t);else return t}function _1(i,e){if(i.noData===null)return e;let t=i.noData,n=i.type;if(Array.isArray(e))for(let a=0,o=e.length;a<o;a++)e[a]=s(e[a]);else e=s(e);return e;function s(a){return r(a)&&(a=Fl(i,a)),a}function r(a){if(Ea(n)){let o=a.elements;for(let l=0,c=t.length;l<c;l++)if(t[l]!==o[l])return!1;return!0}else if(Aa(n)){for(let o=0,l=t.length;o<l;o++)if(t[o]!==a.getComponent(o))return!1;return!0}else return t===a}}function M1(i,e){switch(i){case"INT8":return Math.max(e/127,-1);case"INT16":return Math.max(e,32767,-1);case"INT32":return Math.max(e/2147483647,-1);case"INT64":return Math.max(Number(e)/9223372036854776e3,-1);case"UINT8":return e/255;case"UINT16":return e/65535;case"UINT32":return e/4294967295;case"UINT64":return Number(e)/18446744073709552e3}}function b1(i,e){let{type:t,componentType:n,scale:s,offset:r,normalized:a}=i;if(Array.isArray(e))for(let u=0,d=e.length;u<d;u++)e[u]=o(e[u]);else e=o(e);return e;function o(u){return u=Ea(t)?c(u):Aa(t)?l(u):h(u),u}function l(u){return u.x=h(u.x),u.y=h(u.y),"z"in u&&(u.z=h(u.z)),"w"in u&&(u.w=h(u.w)),u}function c(u){let d=u.elements;for(let f=0,p=d.length;f<p;f++)d[f]=h(d[f]);return u}function h(u){return a&&(u=M1(n,u)),(a||y1(n))&&(u=u*s+r),u}}function wd(i,e,t=null){if(i.array){Array.isArray(e)||(e=Array(i.count||0)),e.length=t===null?i.count:t;for(let n=0,s=e.length;n<s;n++)sg(i.type,e[n])||(e[n]=Md(i))}else sg(i.type,e)||(e=Md(i));return e}function Bl(i,e){for(let t in e)t in i||delete e[t];for(let t in i){let n=i[t];e[t]=wd(n,e[t])}}function S1(i){switch(i){case"ENUM":return 1;case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;case"BOOLEAN":return-1;case"STRING":return-1;default:return-1}}var kl=class{constructor(i,e,t=null){this.name=e.name||null,this.description=e.description||null,this.type=e.type,this.componentType=e.componentType||null,this.enumType=e.enumType||null,this.array=e.array||!1,this.count=e.count||0,this.normalized=e.normalized||!1,this.offset=e.offset||0,this.scale=Zt(e,"scale",1),this.max=Zt(e,"max",1/0),this.min=Zt(e,"min",-1/0),this.required=e.required||!1,this.noData=Zt(e,"noData",null),this.default=Zt(e,"default",null),this.semantic=Zt(e,"semantic",null),this.enumSet=null,this.accessorProperty=t,t&&(this.offset=Zt(t,"offset",this.offset),this.scale=Zt(t,"scale",this.scale),this.max=Zt(t,"max",this.max),this.min=Zt(t,"min",this.min)),e.type==="ENUM"&&(this.enumSet=i[this.enumType],this.componentType===null&&(this.componentType=Zt(this.enumSet,"valueType","UINT16")))}shapeToProperty(i,e=null){return wd(this,i,e)}resolveDefaultElement(i){return Fl(this,i)}resolveDefault(i){return x1(this,i)}resolveNoData(i){return _1(this,i)}resolveEnumsToStrings(i){let e=this.enumSet;if(this.type==="ENUM")if(Array.isArray(i))for(let n=0,s=i.length;n<s;n++)i[n]=t(i[n]);else i=t(i);return i;function t(n){let s=e.values.find(r=>r.value===n);return s===null?"":s.name}}adjustValueScaleOffset(i){return vg(this.type)?b1(this,i):i}},Td=class{constructor(i,e={},t={},n=null){this.definition=i,this.class=e[i.class],this.className=i.class,this.enums=t,this.data=n,this.name="name"in i?i.name:null,this.properties=null}getPropertyNames(){return Object.keys(this.class.properties)}includesData(i){return!!this.definition.properties[i]}dispose(){}_initProperties(i=kl){let e={};for(let t in this.class.properties)e[t]=new i(this.enums,this.class.properties[t],this.definition.properties[t]);this.properties=e}},w1=class extends kl{constructor(i,e,t=null){super(i,e,t),this.attribute=t?.attribute??null}},T1=class extends Td{constructor(...i){super(...i),this.isPropertyAttributeAccessor=!0,this._initProperties(w1)}getData(i,e,t={}){let n=this.properties;Bl(n,t);for(let s in n)t[s]=this.getPropertyValue(s,i,e,t[s]);return t}getPropertyValue(i,e,t,n=null){if(e>=this.count)throw Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");let s=this.properties[i],r=s.type;if(!s)throw Error("PropertyAttributeAccessor: Requested class property does not exist.");if(!this.definition.properties[i])return s.resolveDefault(n);n=s.shapeToProperty(n);let a=t.getAttribute(s.attribute.toLowerCase());if(Ea(r)){let o=n.elements;for(let l=o.length;0<l;)o[0]=a.getComponent(e,0)}else if(Aa(r))n.fromBufferAttribute(a,e);else if(r==="SCALAR"||r==="ENUM")n=a.getX(e);else throw Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");return n=s.adjustValueScaleOffset(n),n=s.resolveEnumsToStrings(n),n=s.resolveNoData(n),n}},A1=class extends kl{constructor(i,e,t=null){super(i,e,t),this.values=t?.values??null,this.valueLength=S1(this.type),this.arrayOffsets=Zt(t,"arrayOffsets",null),this.stringOffsets=Zt(t,"stringOffsets",null),this.arrayOffsetType=Zt(t,"arrayOffsetType","UINT32"),this.stringOffsetType=Zt(t,"stringOffsetType","UINT32")}getArrayLengthFromId(i,e){let t=this.count;if(this.arrayOffsets!==null){let{arrayOffsets:n,arrayOffsetType:s}=this,r=new(Ta(s))(i[n]);t=r[e+1]-r[e]}return t}getIndexOffsetFromId(i,e){let t=e;if(this.arrayOffsets){let{arrayOffsets:n,arrayOffsetType:s}=this;t=new(Ta(s))(i[n])[t]}else this.array&&(t*=this.count);return t}},E1=class extends Td{constructor(...i){super(...i),this.isPropertyTableAccessor=!0,this.count=this.definition.count,this._initProperties(A1)}getData(i,e={}){let t=this.properties;Bl(t,e);for(let n in t)e[n]=this.getPropertyValue(n,i,e[n]);return e}_readValueAtIndex(i,e,t,n=null){let s=this.properties[i],{componentType:r,type:a}=s,o=this.data,l=o[s.values],c=new(Ta(r,a))(l),h=s.getIndexOffsetFromId(o,e);if(vg(a)||a==="ENUM")return yg(c,(h+t)*s.valueLength,a,n);if(a==="STRING"){let u=h+t,d=0;if(s.stringOffsets!==null){let{stringOffsets:p,stringOffsetType:y}=s,m=new(Ta(y))(o[p]);d=m[u+1]-m[u],u=m[u]}let f=new Uint8Array(c.buffer,u,d);n=new TextDecoder().decode(f)}else if(a==="BOOLEAN"){let u=h+t,d=Math.floor(u/8),f=u%8;n=(c[d]>>f&1)==1}return n}getPropertyValue(i,e,t=null){if(e>=this.count)throw Error("PropertyTableAccessor: Requested index is outside the range of the table.");let n=this.properties[i];if(!n)throw Error("PropertyTableAccessor: Requested property does not exist.");if(!this.definition.properties[i])return n.resolveDefault(t);let s=n.array,r=this.data,a=n.getArrayLengthFromId(r,e);if(t=n.shapeToProperty(t,a),s)for(let o=0,l=t.length;o<l;o++)t[o]=this._readValueAtIndex(i,e,o,t[o]);else t=this._readValueAtIndex(i,e,0,t);return t=n.adjustValueScaleOffset(t),t=n.resolveEnumsToStrings(t),t=n.resolveNoData(t),t}},Sa=new Jo,rg=class{constructor(){this._renderer=new ar,this._target=new Bt(1,1),this._texTarget=new Bt,this._quad=new Ji(new At({blending:jh,blendDst:$h,blendSrc:Zh,uniforms:{map:{value:null},pixel:{value:new ne}},vertexShader:`
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`}))}increaseSizeTo(i){this._target.setSize(Math.max(this._target.width,i),1)}readDataAsync(i){let{_renderer:e,_target:t}=this;return e.readRenderTargetPixelsAsync(t,0,0,i.length/4,1,i)}readData(i){let{_renderer:e,_target:t}=this;e.readRenderTargetPixels(t,0,0,i.length/4,1,i)}renderPixelToTarget(i,e,t){let{_renderer:n,_target:s}=this;Sa.min.copy(e),Sa.max.copy(e),Sa.max.x+=1,Sa.max.y+=1,n.initRenderTarget(s),n.copyTextureToTexture(i,s.texture,Sa,t,0)}},ns=new class{constructor(){let i=null;Object.getOwnPropertyNames(rg.prototype).forEach(e=>{e!=="constructor"&&(this[e]=(...t)=>(i||(i=new rg),i[e](...t)))})}},ag=new ne,og=new ne,lg=new ne;function C1(i,e){return e===0?i.getAttribute("uv"):i.getAttribute(`uv${e}`)}function xg(i,e,t=[,,,]){let n=3*e,s=3*e+1,r=3*e+2;return i.index&&(n=i.index.getX(n),s=i.index.getX(s),r=i.index.getX(r)),t[0]=n,t[1]=s,t[2]=r,t}function _g(i,e,t,n,s){let[r,a,o]=n,l=C1(i,e);ag.fromBufferAttribute(l,r),og.fromBufferAttribute(l,a),lg.fromBufferAttribute(l,o),s.set(0,0,0).addScaledVector(ag,t.x).addScaledVector(og,t.y).addScaledVector(lg,t.z)}function Mg(i,e,t,n){let s=i.x-Math.floor(i.x),r=i.y-Math.floor(i.y),a=Math.floor(s*e%e),o=Math.floor(r*t%t);return n.set(a,o),n}var cg=new ne,hg=new ne,ug=new ne,P1=class extends kl{constructor(i,e,t=null){super(i,e,t),this.channels=Zt(t,"channels",[0]),this.index=Zt(t,"index",null),this.texCoord=Zt(t,"texCoord",null),this.valueLength=parseInt(this.type.replace(/[^0-9]/g,""))||1}readDataFromBuffer(i,e,t=null){let n=this.type;if(n==="BOOLEAN"||n==="STRING")throw Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");return yg(i,e*this.valueLength,n,t)}},R1=class extends Td{constructor(...i){super(...i),this.isPropertyTextureAccessor=!0,this._asyncRead=!1,this._initProperties(P1)}getData(i,e,t,n={}){let s=this.properties;Bl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return this.getPropertyValuesAtTexel(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}async getDataAsync(i,e,t,n={}){let s=this.properties;Bl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return await this.getPropertyValuesAtTexelAsync(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}getPropertyValuesAtTexelAsync(...i){this._asyncRead=!0;let e=this.getPropertyValuesAtTexel(...i);return this._asyncRead=!1,e}getPropertyValuesAtTexel(i,e,t,n,s=[]){for(;s.length<i.length;)s.push(null);s.length=i.length,ns.increaseSizeTo(s.length);let r=this.data,a=this.definition.properties,o=this.properties,l=xg(n,e);for(let u=0,d=i.length;u<d;u++){let f=i[u];if(!a[f])continue;let p=o[f],y=r[p.index];_g(n,p.texCoord,t,l,cg),Mg(cg,y.image.width,y.image.height,hg),ug.set(u,0),ns.renderPixelToTarget(y,hg,ug)}let c=new Uint8Array(i.length*4);if(this._asyncRead)return ns.readDataAsync(c).then(()=>(h.call(this),s));return ns.readData(c),h.call(this),s;function h(){for(let u=0,d=i.length;u<d;u++){let f=i[u],p=o[f],y=p.type;if(s[u]=wd(p,s[u]),!p)throw Error("PropertyTextureAccessor: Requested property does not exist.");if(!a[f]){s[u]=p.resolveDefault(s);continue}let m=p.valueLength*(p.count||1),g=p.channels.map(M=>c[4*u+M]),x=p.componentType,v=new(Ta(x,y))(m);if(new Uint8Array(v.buffer).set(g),p.array){let M=s[u];for(let L=0,A=M.length;L<A;L++)M[L]=p.readDataFromBuffer(v,L,M[L])}else s[u]=p.readDataFromBuffer(v,0,s[u]);s[u]=p.adjustValueScaleOffset(s[u]),s[u]=p.resolveEnumsToStrings(s[u]),s[u]=p.resolveNoData(s[u])}}}dispose(){this.data.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},bd=class{constructor(i,e,t,n=null,s=null){let{schema:r,propertyTables:a=[],propertyTextures:o=[],propertyAttributes:l=[]}=i,{enums:c,classes:h}=r,u=a.map(p=>new E1(p,h,c,t)),d=[],f=[];n&&(n.propertyTextures&&(d=n.propertyTextures.map(p=>new R1(o[p],h,c,e))),n.propertyAttributes&&(f=n.propertyAttributes.map(p=>new T1(l[p],h,c)))),this.schema=r,this.tableAccessors=u,this.textureAccessors=d,this.attributeAccessors=f,this.object=s,this.textures=e,this.nodeMetadata=n}getPropertyTableData(i,e,t=null){if(!Array.isArray(i))t||(t={}),t=this.tableAccessors[i].getData(e,t);else{t||(t=[]);let n=Math.min(i.length,e.length);t.length=n;for(let s=0;s<n;s++){let r=this.tableAccessors[i[s]];t[s]=r.getData(e[s],t[s])}}if(Array.isArray(i)!==Array.isArray(t)||Array.isArray(i)!==Array.isArray(e))throw Error("StructuralMetadata: Scalar and array inputs cannot be mixed.");return t}getPropertyTableInfo(i=null){if(i===null&&(i=this.tableAccessors.map((e,t)=>t)),Array.isArray(i))return i.map(e=>{let t=this.tableAccessors[e];return{name:t.name,className:t.definition.class}});{let e=this.tableAccessors[i];return{name:e.name,className:e.definition.class}}}getPropertyTextureData(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;for(let s=0;s<n.length;s++)t[s]=n[s].getData(i,e,this.object.geometry,t[s]);return t}async getPropertyTextureDataAsync(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;let s=[];for(let r=0;r<n.length;r++){let a=n[r].getDataAsync(i,e,this.object.geometry,t[r]).then(o=>{t[r]=o});s.push(a)}return await Promise.all(s),t}getPropertyTextureInfo(){return this.textureAccessors}getPropertyAttributeData(i,e=[]){let t=this.attributeAccessors;e.length=t.length;for(let n=0;n<t.length;n++)e[n]=t[n].getData(i,this.object.geometry,e[n]);return e}getPropertyAttributeInfo(){return this.attributeAccessors.map(i=>({name:i.name,className:i.definition.class}))}dispose(){this.textureAccessors.forEach(i=>i.dispose()),this.tableAccessors.forEach(i=>i.dispose()),this.attributeAccessors.forEach(i=>i.dispose())}},wa="EXT_structural_metadata";function I1(i,e=[]){let t=i.json.textures?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{index:a}=s[r];n[a]===null&&(n[a]=i.loadTexture(a))}}),Promise.all(n)}function L1(i,e=[]){let t=i.json.bufferViews?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{values:a,arrayOffsets:o,stringOffsets:l}=s[r];n[a]===null&&(n[a]=i.getDependency("bufferView",a)),n[o]===null&&(n[o]=i.getDependency("bufferView",o)),n[l]===null&&(n[l]=i.getDependency("bufferView",l))}}),Promise.all(n)}var bg=class{constructor(i){this.parser=i,this.name=wa}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(wa))return;let n=null,s=e.json.extensions[wa];if(s.schemaUri){let{manager:l,path:c,requestHeader:h,crossOrigin:u}=e.options,d=new URL(s.schemaUri,c).toString(),f=new on(l);f.setCrossOrigin(u),f.setResponseType("json"),f.setRequestHeader(h),n=f.loadAsync(d).then(p=>{s={...s,schema:p}})}let[r,a]=await Promise.all([I1(e,s.propertyTextures),L1(e,s.propertyTables),n]),o=new bd(s,r,a);i.userData.structuralMetadata=o,i.traverse(l=>{if(e.associations.has(l)){let{meshes:c,primitives:h}=e.associations.get(l),u=e.json.meshes[c]?.primitives[h];if(u&&u.extensions&&u.extensions[wa]){let d=u.extensions[wa];l.userData.structuralMetadata=new bd(s,r,a,d,l)}else l.userData.structuralMetadata=o}})}},dg=new ne,fg=new ne,pg=new ne;function D1(i){return i.x>i.y&&i.x>i.z?0:i.y>i.z?1:2}var Sg=class{constructor(i,e,t){this.geometry=i,this.textures=e,this.data=t,this._asyncRead=!1,this.featureIds=t.featureIds.map(n=>{let{texture:s,...r}=n,a={label:null,propertyTable:null,nullFeatureId:null,...r};return s&&(a.texture={texCoord:0,channels:[0],...s}),a})}getTextures(){return this.textures}getFeatureInfo(){return this.featureIds}getFeaturesAsync(...i){this._asyncRead=!0;let e=this.getFeatures(...i);return this._asyncRead=!1,e}getFeatures(i,e){let{geometry:t,textures:n,featureIds:s}=this,r=Array(s.length).fill(null),a=s.length;ns.increaseSizeTo(a);let o=xg(t,i),l=o[D1(e)];for(let u=0,d=s.length;u<d;u++){let f=s[u],p="nullFeatureId"in f?f.nullFeatureId:null;if("texture"in f){let y=n[f.texture.index];_g(t,f.texture.texCoord,e,o,dg),Mg(dg,y.image.width,y.image.height,fg),pg.set(u,0),ns.renderPixelToTarget(n[f.texture.index],fg,pg)}else if("attribute"in f){let y=t.getAttribute(`_feature_id_${f.attribute}`).getX(l);y!==p&&(r[u]=y)}else{let y=l;y!==p&&(r[u]=y)}}let c=new Uint8Array(a*4);if(this._asyncRead)return ns.readDataAsync(c).then(()=>(h(),r));return ns.readData(c),h(),r;function h(){let u=new Uint32Array(1);for(let d=0,f=s.length;d<f;d++){let p=s[d],y="nullFeatureId"in p?p.nullFeatureId:null;if("texture"in p){let{channels:m}=p.texture,g=m.map(v=>c[4*d+v]);new Uint8Array(u.buffer).set(g);let x=u[0];x!==y&&(r[d]=x)}}}}dispose(){this.textures.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},zl="EXT_mesh_features";function mg(i,e,t){i.traverse(n=>{if(e.associations.has(n)){let{meshes:s,primitives:r}=e.associations.get(n),a=e.json.meshes[s]?.primitives[r];a&&a.extensions&&a.extensions[zl]&&t(n,a.extensions[zl])}})}var wg=class{constructor(i){this.parser=i,this.name=zl}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(zl))return;let n=e.json.textures?.length||0,s=Array(n).fill(null);mg(i,e,(a,{featureIds:o})=>{o.forEach(l=>{if(l.texture&&s[l.texture.index]===null){let c=l.texture.index;s[c]=e.loadTexture(c)}})});let r=await Promise.all(s);mg(i,e,(a,o)=>{a.userData.meshFeatures=new Sg(a.geometry,r,o)})}},Tg=class{constructor(){this.name="CESIUM_RTC"}afterRoot(i){if(i.parser.json.extensions&&i.parser.json.extensions.CESIUM_RTC){let{center:e}=i.parser.json.extensions.CESIUM_RTC;e&&(i.scene.position.x+=e[0],i.scene.position.y+=e[1],i.scene.position.z+=e[2])}}},Ad=class{constructor(i){i={metadata:!0,rtc:!0,plugins:[],dracoLoader:null,ktxLoader:null,meshoptDecoder:null,autoDispose:!0,...i},this.tiles=null,this.metadata=i.metadata,this.rtc=i.rtc,this.plugins=i.plugins,this.dracoLoader=i.dracoLoader,this.ktxLoader=i.ktxLoader,this.meshoptDecoder=i.meshoptDecoder,this._gltfRegex=/\.(gltf|glb)$/g,this._dracoRegex=/\.drc$/g,this._loader=null}init(i){let e=new Qn(i.manager);this.dracoLoader&&(e.setDRACOLoader(this.dracoLoader),i.manager.addHandler(this._dracoRegex,this.dracoLoader)),this.ktxLoader&&e.setKTX2Loader(this.ktxLoader),this.meshoptDecoder&&e.setMeshoptDecoder(this.meshoptDecoder),this.rtc&&e.register(()=>new Tg),this.metadata&&(e.register(()=>new bg),e.register(()=>new wg)),this.plugins.forEach(t=>e.register(t)),i.manager.addHandler(this._gltfRegex,e),this.tiles=i,this._loader=e}dispose(){this.tiles.manager.removeHandler(this._gltfRegex),this.tiles.manager.removeHandler(this._dracoRegex),this.autoDispose&&(this.ktxLoader.dispose(),this.dracoLoader.dispose())}};var{clamp:uT}=Sn;var dT=Symbol("FADE_PARAMS");var fT=Symbol("HAS_POPPED_IN");var pT=new Ji(new oi),U1=new lr(new Uint8Array([255,255,255,255]),1,1);U1.needsUpdate=!0;var mT=Symbol("ORIGINAL_MATERIAL"),gT=Symbol("HAS_RANDOM_COLOR"),vT=Symbol("HAS_RANDOM_NODE_COLOR"),yT=Symbol("LOAD_TIME"),xT=Symbol("PARENT_BOUND_REF_COUNT");var N1=0,O1=1,F1=2,B1=3,z1=4,k1=5,V1=6,H1=7,G1=8,W1=9,X1=10,q1=11,_T=Object.freeze({NONE:N1,SCREEN_ERROR:O1,GEOMETRIC_ERROR:F1,DISTANCE:B1,DEPTH:z1,RELATIVE_DEPTH:k1,IS_LEAF:V1,RANDOM_COLOR:H1,RANDOM_NODE_COLOR:G1,CUSTOM_COLOR:W1,LOAD_ORDER:X1,INDEXED_COLOR:q1});var MT=Math.PI/4,bT=3/5;var is={NONE:0,NOT_READY:1,NO_FIT:2,DEPTH:3,OCCUPANCY:4,SPACING:5,ANGLE:6,FACING:7};var ST=new class{constructor(){this._cache={}}getColor(...i){let e=i.pop(),t=i.join("_"),{_cache:n}=this;return t in n||(e.setHSL(Math.random(),1,.5),n[t]=e.getHex()),e.set(n[t])}};var wT={[is.NONE]:16777215,[is.NOT_READY]:7829367,[is.NO_FIT]:2250239,[is.DEPTH]:4473924,[is.OCCUPANCY]:65535,[is.SPACING]:16776960,[is.ANGLE]:16711680,[is.FACING]:16711935};var TT=Symbol("TILE_X"),AT=Symbol("TILE_Y"),ET=Symbol("TILE_LEVEL"),CT=Symbol("HEIGHT_GRID"),PT=Symbol("SOURCE_TILE"),RT=Symbol("OVERLAY_RANGE"),IT=Symbol("OVERLAY_LEVEL"),LT=Symbol("HEIGHT_RANGE");var DT=Math.PI/180;var UT=vr*Math.PI*2;var NT=vr*Math.PI*2;var Sr=Math.PI/180,Ed=i=>{let e=Math.min(1,Math.max(0,(i-28.5)/12.200000000000003));return-9.5+(-32.6+9.5)*e};function Ag({key:i,renderer:e,sky:t,fog:n}){let s=new or,r=new Lt(40,window.innerWidth/window.innerHeight,1,1e5),a=new xd;a.registerPlugin(new _d({apiToken:i,autoRefreshToken:!0}));let o=new yl().setDecoderPath("assets/draco/");a.registerPlugin(new Ad({dracoLoader:o})),a.registerPlugin(new Sd);let l=window.matchMedia("(max-width: 860px)").matches,c=()=>{a.errorTarget=(l?12:7)*Math.sqrt(Math.max(1,e.getPixelRatio()))};c(),a.downloadQueue.maxJobsPerOrigin=l?10:16,a.parseQueue.maxJobs=l?4:8,a.lruCache.maxBytesSize=(l?.35:.7)*1024**3;let h=Math.min(8,e.capabilities.getMaxAnisotropy());a.setCamera(r),a.setResolutionFromRenderer(r,e),a.group.matrixAutoUpdate=!1,s.add(a.group);let u=new ht(new xn(10,48,24),t);u.renderOrder=-20,u.frustumCulled=!1,s.add(u);let d={uFade:{value:0},uExposure:{value:.86},uSat:{value:.96},...dl(n)};a.addEventListener("load-model",({scene:S,tile:W})=>{S.traverse(F=>{if(!F.isMesh)return;let O=F.material.map;O&&(O.anisotropy=h,O.needsUpdate=!0);let G=new At({vertexShader:_u.vertexShader,fragmentShader:_u.fragmentShader,uniforms:{...d,map:{value:O}}});W.engineData.materials.push(G),F.material=G})});let f={ok:!1,failed:!1,loaded:0,ready:!1},p=0,y=0,m=0,g=0;a.addEventListener("load-model",()=>{f.loaded++,f.failed||(f.ok=!0)}),a.addEventListener("load-error",S=>{!f.ok&&(S.tile==null||S.tile===a.root)&&(f.failed=!0),console.warn("3D tiles:",S.error||S)});let x=new ke().set(1,0,0,0,0,0,1,0,0,-1,0,0,0,0,0,1),v=new ke,M=new ke,L=new P;function A(S,W,F){let[O,G]=S.pos;Pn.getEastNorthUpFrame(O*Sr,G*Sr,Ed(O),v),M.copy(x).multiply(v.invert()),a.group.matrix.copy(M),a.group.updateMatrixWorld(),Pn.getCartographicToPosition(S.pos[0]*Sr,S.pos[1]*Sr,S.pos[2]+Ed(S.pos[0]),L),W.copy(L.applyMatrix4(M)),Pn.getCartographicToPosition(S.look[0]*Sr,S.look[1]*Sr,S.look[2]+Ed(S.look[0]),L),F.copy(L.applyMatrix4(M)),S.pull!==1&&W.sub(F).multiplyScalar(S.pull).add(F)}let E=document.getElementById("map-credit"),I=E?E.querySelector(".mc-data"):null,j=0,_=[];return new URLSearchParams(location.search).has("debug")&&(window.__earth={tiles:a,state:f}),{scene:s,camera:r,tiles:a,toFrame:A,get failed(){return f.failed},get busy(){return!f.ready},update(S,W){let F=Math.min(.1,Math.max(0,W-g));if(g=W,a.setResolutionFromRenderer(r,e),a.update(),!f.ready&&f.ok){m||(m=W);let ie=a.stats,Z=ie.queued+ie.downloading+ie.parsing;y=f.loaded>=30&&Z<=.1*(f.loaded+Z)?y+F:0,(y>.5||W-m>25)&&(f.ready=!0)}let O=a.stats,G=O.queued+O.downloading+O.parsing,H=f.ready?1:Math.min(.7,.25+.6*(f.loaded/Math.max(1,f.loaded+G)));if(p+=(H-p)*Math.min(1,F*(f.ready?1.6:.8)),d.uFade.value=p*p*(3-2*p),t.uniforms.uDay.value=1-Math.min(1,Math.max(0,(S-3e4)/37e4)),E&&W-j>1){j=W;let ie=f.ok&&a.visibleTiles.size>0;if(E.hidden=!ie,ie){_.length=0,a.getAttributions(_);let Z=_.filter(ve=>ve.type==="string").map(ve=>ve.value).join(" ");I.textContent!==Z&&(I.textContent=Z)}}},resize(){r.aspect=window.innerWidth/window.innerHeight,c(),a.setResolutionFromRenderer(r,e)}}}var Rd=[{name:"Offices",pos:[25.6,-80.6,27e5],look:[35.6,-77.9,0],ox:.24,oy:.02,my:.1,fov:36,mob:1.25},{name:"Skyline",pos:[40.6868,-74.0525,38],look:[40.695,-74.0345,90],ox:.14,oy:0,my:.2,fov:40,mob:1.15},{name:"Commercial",pos:[40.746,-74.015,230],look:[40.7585,-73.985,190],ox:.27,oy:0,my:.12,fov:40,mob:1.3},{name:"Residential",pos:[28.65,-81.269,115],look:[28.656,-81.26,0],ox:-.27,oy:0,my:.14,fov:40,mob:1.25},{name:"Advisory",pos:[28.5408,-81.3712,95],look:[28.5446,-81.377,105],ox:.28,oy:0,my:.12,fov:40,mob:1.35},{name:"Track record",pos:[28.5418,-81.364,120],look:[28.544,-81.379,55],ox:0,oy:-.08,my:.08,fov:42,mob:1.2},{name:"Listings",pos:[28.5455,-81.356,650],look:[28.556,-81.356,0],ox:-.26,oy:0,my:.12,fov:40,mob:1.25},{name:"Contact",pos:[28.62,-81.305,1500],look:[28.67,-81.245,0],ox:-.12,oy:.05,my:.12,fov:40,mob:1.2}],Id=Rd.map(i=>({...i,P:xi(...i.pos),Lk:xi(...i.look)})),Ld=Id.length,wr=i=>i*i*i*(i*(i*6-15)+10),Ot=(i,e,t)=>i+(e-i)*t,Vl=new P,Eg=new P;function Cg(i,e,t){let n=Math.min(Ld-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=wr(s),a=Id[n],o=Id[n+1],l=Math.max(.05,a.P.y),c=Math.max(.05,o.P.y),h=Math.hypot(o.P.x-a.P.x,o.P.z-a.P.z),u=Math.max(l,c,h*.75),d=u>Math.max(l,c)*1.6,f=d?Math.pow(Math.sin(Math.PI*r),.8):0,p=Ot(Math.log(l),Math.log(c),r),y=Math.exp(p+(Math.log(u)-p)*f),m=Math.max(l,c)/Math.min(l,c),g=d?wr(wr(r)):m>8?(y-l)/(c-l):r;t.pos.set(Ot(a.P.x,o.P.x,g),y,Ot(a.P.z,o.P.z,g)),Vl.copy(a.Lk).lerp(o.Lk,g),d&&(Eg.set(t.pos.x,0,t.pos.z).add(Vl.clone().sub(t.pos).setY(0).normalize().multiplyScalar(y*.35)),Vl.lerp(Eg,f)),t.look.copy(Vl);let x=e<.9;if(t.ox=x?0:Ot(a.ox,o.ox,r),t.oy=x?Ot(a.my,o.my,r):Ot(a.oy,o.oy,r),t.fov=Ot(a.fov,o.fov,r),x){let v=Ot(a.mob,o.mob,r)*(1+(.9/e-1)*.3);t.pos.sub(t.look).multiplyScalar(v).add(t.look)}return t.flight=f,t}var Pg=Ld,Cd=110574,Pd=i=>111320*Math.cos(i*Math.PI/180);function Rg(i,e,t){let n=Math.min(Ld-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=wr(s),a=Rd[n],o=Rd[n+1],l=Math.max(5,a.pos[2]),c=Math.max(5,o.pos[2]),h=(a.pos[0]+o.pos[0])/2,u=Math.hypot((o.pos[1]-a.pos[1])*Pd(h),(o.pos[0]-a.pos[0])*Cd),d=Math.max(l,c,u*.75),f=d>Math.max(l,c)*1.6,p=f?Math.pow(Math.sin(Math.PI*r),.8):0,y=Ot(Math.log(l),Math.log(c),r),m=Math.exp(y+(Math.log(d)-y)*p),g=Math.max(l,c)/Math.min(l,c),x=f?wr(wr(r)):g>8?(m-l)/(c-l):r,v=Ot(a.pos[0],o.pos[0],x),M=Ot(a.pos[1],o.pos[1],x);t.pos[0]=v,t.pos[1]=M,t.pos[2]=m;let L=Ot(a.look[0],o.look[0],x),A=Ot(a.look[1],o.look[1],x),E=Ot(a.look[2],o.look[2],x);if(f){let j=(A-M)*Pd(v),_=(L-v)*Cd,S=Math.hypot(j,_)||1,W=v+_/S*m*.35/Cd,F=M+j/S*m*.35/Pd(v);L=Ot(L,W,p),A=Ot(A,F,p),E=Ot(E,0,p)}t.look[0]=L,t.look[1]=A,t.look[2]=E;let I=e<.9;return t.ox=I?0:Ot(a.ox,o.ox,r),t.oy=I?Ot(a.my,o.my,r):Ot(a.oy,o.oy,r),t.fov=Ot(a.fov,o.fov,r),t.pull=I?Ot(a.mob,o.mob,r)*(1+(.9/e-1)*.3):1,t.flight=p,t}var zt=(i,e=document)=>e.querySelector(i),Li=(i,e=document)=>Array.from(e.querySelectorAll(i)),ss=window.matchMedia("(prefers-reduced-motion: reduce)"),Y1=1990,j1=["left","left","left","right","left","center","right","left"];function Ig(i){let e=Li(".chapter"),t=new Date().getFullYear(),n=t-Y1;Li(".js-years").forEach(O=>{O.textContent=String(n)});let s=zt("#year");s&&(s.textContent=String(t));let r=zt(".nav-toggle"),a=zt("#nav-list"),o=()=>{r.setAttribute("aria-expanded","false"),a.classList.remove("is-open")};r.addEventListener("click",()=>{let O=r.getAttribute("aria-expanded")!=="true";r.setAttribute("aria-expanded",String(O)),a.classList.toggle("is-open",O),O&&a.querySelector("a").focus()}),document.addEventListener("keydown",O=>{O.key==="Escape"&&a.classList.contains("is-open")&&(o(),r.focus())}),document.addEventListener("click",O=>{let G=O.target.closest('a[href^="#"]');if(!G)return;let H=G.getAttribute("href").slice(1),ie=H==="main"?e[0]:document.getElementById(H);if(!ie)return;let Z=ie.closest(".chapter")||ie,ve=e.indexOf(Z);if(!(ve<0)){if(O.preventDefault(),o(),G.dataset.interest){let xe=zt("#f-interest");xe&&(xe.value=G.dataset.interest)}l(ve,Z)}});function l(O,G=e[O]){let H=i.anchorFor?i.anchorFor(O):G.offsetTop;window.scrollTo({top:H,behavior:ss.matches?"auto":"smooth"});let ie=G.querySelector("h1, h2")||G;ie.setAttribute("tabindex","-1"),ie.focus({preventScroll:!0}),history.replaceState(null,"",O===0?location.pathname:`#${G.id}`)}i.goToChapter=l,Li(".reveal-stagger").forEach(O=>{Array.from(O.children).forEach((G,H)=>G.style.setProperty("--i",H))});let c=new IntersectionObserver(O=>{for(let G of O)G.isIntersecting&&(G.target.classList.add("is-in"),G.target.id==="record"&&h(G.target),c.unobserve(G.target))},{threshold:.18,rootMargin:"0px 0px -10% 0px"});i.startReveals=()=>e.forEach(O=>c.observe(O));function h(O){Li("[data-count]",O).forEach(G=>{let H=parseInt(G.textContent,10);if(!Number.isFinite(H)||ss.matches)return;let ie=performance.now()+450,Z=1800;G.textContent="0";let ve=xe=>{let de=Math.min(1,Math.max(0,(xe-ie)/Z)),Qe=de===1?1:1-Math.pow(2,-10*de);G.textContent=String(Math.round(H*Qe)),de<1&&requestAnimationFrame(ve)};requestAnimationFrame(ve)})}let u=Li(".site-nav a"),d=Li(".system-map a"),f=zt("#sm-fill"),p=zt("#tm-sector"),y=zt("#tm-coords"),m=-1,g=zt("#step-prev"),x=zt("#step-next"),v=zt("#step-name"),M=O=>d[O]?d[O].querySelector(".sm-name").textContent:"",L=()=>Math.max(0,m),A=()=>{let O=L();g&&(g.hidden=O===0,g.setAttribute("aria-label",`Previous chapter: ${M(O-1)}`)),x&&(x.hidden=O>=e.length-1,x.setAttribute("aria-label",`Next chapter: ${M(O+1)}`),v&&(v.textContent=M(O+1)))},E=new Set,I=new IntersectionObserver(O=>{O.forEach(G=>G.isIntersecting?E.add(G.target):E.delete(G.target)),document.body.classList.toggle("next-visible",E.size>0)});Li(".next-row, #home-port .cta-row, #launch .cta-row").forEach(O=>I.observe(O)),g&&g.addEventListener("click",()=>l(Math.max(0,L()-1))),x&&x.addEventListener("click",()=>l(Math.min(e.length-1,L()+1))),A(),i.setProgress=(O,G,H)=>{if(f&&(f.style.transform=`scaleY(${(O/(e.length-1)).toFixed(4)})`),G!==m){m=G,A(),document.body.dataset.side=j1[G]||"left",d.forEach((Z,ve)=>Z.classList.toggle("is-active",ve===G));let ie=e[G]&&e[G].id;if(u.forEach(Z=>Z.setAttribute("aria-current",String(Z.getAttribute("href")===`#${ie}`))),p){let Z=d[G]?d[G].querySelector(".sm-name").textContent:"";p.textContent=`${String(G+1).padStart(2,"0")} \xB7 ${Z}`}}y&&H&&(y.textContent=H)};let j=zt(".site-header"),_=window.scrollY;window.addEventListener("scroll",()=>{let O=window.scrollY;j.classList.toggle("is-scrolled",O>40),!a.classList.contains("is-open")&&Math.abs(O-_)>6&&j.classList.toggle("is-hidden",O>_&&O>400),_=O},{passive:!0}),j.addEventListener("focusin",()=>j.classList.remove("is-hidden"));let S=zt(".site-footer");new IntersectionObserver(([O])=>document.body.classList.toggle("at-footer",O.isIntersecting),{threshold:.05}).observe(S);let W=zt("#crexi-load");W&&W.addEventListener("click",()=>{let O=document.createElement("iframe");O.className="crexi-frame",O.src="https://www.crexi.com/widgets/1594",O.title="CIIN Co. commercial listings on Crexi",O.loading="lazy",O.referrerPolicy="strict-origin-when-cross-origin",W.replaceWith(O)});let F=zt("#contact-form");if(F){let O=zt(".form-status",F),G=[["f-name",ie=>ie.trim().length>1,"Please enter your name."],["f-email",ie=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ie.trim()),"Please enter a valid email address."],["f-message",ie=>ie.trim().length>4,"Please tell us a little about what you need."]],H=(ie,Z,ve)=>{let xe=zt(`#${ie}`,F),de=zt(`#${ie}-err`,F),Qe=Z(xe.value);return xe.setAttribute("aria-invalid",String(!Qe)),Qe?(xe.removeAttribute("aria-describedby"),de.textContent=""):(xe.setAttribute("aria-describedby",`${ie}-err`),de.textContent=ve),Qe};G.forEach(([ie,Z,ve])=>zt(`#${ie}`,F).addEventListener("blur",xe=>{xe.target.value&&H(ie,Z,ve)})),F.addEventListener("submit",async ie=>{ie.preventDefault(),O.className="form-status",O.textContent="";let Z=G.map(xe=>H(...xe));if(Z.includes(!1)){let xe=G[Z.indexOf(!1)][0];zt(`#${xe}`,F).focus(),O.classList.add("is-error"),O.textContent="Please check the highlighted fields.";return}if(F.company_website.value)return;let ve=F.querySelector('button[type="submit"]');ve.disabled=!0,O.textContent="Sending\u2026";try{let xe=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(F)).toString()});if(!xe.ok)throw new Error(String(xe.status));window.location.href=F.getAttribute("action")}catch{ve.disabled=!1,O.classList.add("is-error"),O.innerHTML='Your message could not be sent. Please email <a href="mailto:rafael@ciinco.com">rafael@ciinco.com</a> or call <a href="tel:+14077395959">407-739-5959</a>.'}})}return Li("#type-chips li").forEach((O,G)=>{O.addEventListener("pointerenter",()=>i.hotType&&i.hotType(G)),O.addEventListener("pointerleave",()=>i.hotType&&i.hotType(-1))}),Li("#consulting li").forEach(O=>{let G=parseInt(O.dataset.node,10);O.addEventListener("pointerenter",()=>i.hotNode&&i.hotNode(G)),O.addEventListener("pointerleave",()=>i.hotNode&&i.hotNode(-1))}),Li(".office").forEach(O=>{O.addEventListener("pointerenter",()=>i.hotOffice&&i.hotOffice(O.dataset.office)),O.addEventListener("pointerleave",()=>i.hotOffice&&i.hotOffice(null))}),i.markType=O=>Li("#type-chips li").forEach((G,H)=>G.classList.toggle("is-hot",H===O)),i.markNode=O=>Li("#consulting li").forEach(G=>G.classList.toggle("is-hot",parseInt(G.dataset.node,10)===O)),i.markOffice=O=>Li(".office").forEach(G=>G.classList.toggle("is-hot",G.dataset.office===O)),{chapters:e}}function Hl(i){let e=zt("#loader-pct"),t=zt("#loader-bar");e&&(e.textContent=`${Math.round(i*100)}%`),t&&(t.style.transform=`scaleX(${i.toFixed(3)})`)}function Gl(){document.body.classList.remove("is-loading")}var Dd=document.documentElement;Dd.classList.add("js");var mi={},{chapters:Ud}=Ig(mi),rs=new URLSearchParams(location.search);function $1(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}var Z1=Math.min(screen.width,screen.height),Ca={low:rs.has("low")||Z1<700||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4},K1=Ca.low?1.5:1.75,bi=[],Pa=null;function Tr(){let i=window.innerHeight,e=document.documentElement.scrollHeight-i;bi=Ud.map((t,n)=>{if(n===0)return 0;let s=t.getBoundingClientRect();return Math.min(e,Math.max(0,s.top+window.scrollY+s.height/2-i/2))});for(let t=1;t<bi.length;t++)bi[t]=Math.max(bi[t],bi[t-1]+1)}mi.anchorFor=i=>bi[i]??0;function Nd(){if(Pa!==null)return Pa;let i=window.scrollY;if(!bi.length||i<=bi[0])return 0;for(let e=0;e<bi.length-1;e++)if(i<bi[e+1])return e+(i-bi[e])/(bi[e+1]-bi[e]);return bi.length-1}function Lg(){Tr(),window.addEventListener("resize",Tr);let i=()=>{let e=Nd();mi.setProgress(e,Math.round(e),null),requestAnimationFrame(i)};i()}async function J1(){let i=document.getElementById("cosmos"),e=new ar({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=Math.min(window.devicePixelRatio||1,K1);e.setPixelRatio(t),e.setSize(window.innerWidth,window.innerHeight,!1),e.toneMapping=ta,e.toneMappingExposure=1.05,e.outputColorSpace=It;let n=new or,s=new Lt(40,window.innerWidth/window.innerHeight,.05,5e4),r=0,a=6,o=()=>Hl(++r/a*.85),l=new xs,c=new dr(l),h=await new Promise(C=>{let N=c.load(`assets/textures/${Ca.low?"map-2k":"map"}.webp`,()=>{o(),C(N)},void 0,()=>{o(),C(N)});N.colorSpace=tn,N.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),N.minFilter=Ni}),u=(C,N)=>new Promise(z=>{let q=c.load(`assets/textures/${C}.webp`,()=>{o(),z(q)},void 0,()=>{o(),z(null)});q.colorSpace=It,q.wrapS=q.wrapT=N,q.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy())}),[d,f,p]=await Promise.all([u("sky-dusk",Zi),u("facade-brick",rn),u("facade-glass",rn)]),y=C=>fetch(C).then(N=>N.json()).then(N=>(o(),N)),[m,g]=await Promise.all([y("assets/data/nyc.json"),y("assets/data/map.json")]),x=nm(n,{map:h,sky:d,brick:f,glass:p},{nyc:m,map:g},Ca);rs.has("debug")&&console.info("stats",JSON.stringify({nycBuildings:x.nycBuildings.count,homes:x.homeCount,...x.stats}));let v=new Bt(1,1,{type:yi,samples:Ca.low?0:4}),M=new cl(e,v);M.setPixelRatio(t),M.setSize(window.innerWidth,window.innerHeight);let L=new hl(n,s);M.addPass(L),M.addPass(new bs(Wp));let A=new pr(new ne(window.innerWidth,window.innerHeight),.42,.35,1.05);M.addPass(A),M.addPass(new ul);let E=new bs(Xp);M.addPass(E),x.uPixelRatio.value=t;let I={on:!rs.has("noreflect"),scale:Ca.low?.35:.5,rt:new Bt(1,1,{type:yi}),cam:new Lt,plane:new gi,clip:new xt,q:new xt,up:new P,fwd:new P};x.reflect.uReflect.value=I.rt.texture;let j=()=>{let C=Math.max(2,Math.round(window.innerWidth*t*I.scale)),N=Math.max(2,Math.round(window.innerHeight*t*I.scale));I.rt.setSize(C,N)};j();function _(C,N){let z=I.cam,q=x.reflect.uMirrorY.value;z.fov=s.fov,z.aspect=s.aspect,z.near=s.near,z.far=s.far,z.position.set(s.position.x,2*q-s.position.y,s.position.z),I.fwd.set(0,0,-1).applyQuaternion(s.quaternion),I.fwd.y*=-1,I.up.set(0,1,0).applyQuaternion(s.quaternion),I.up.y*=-1,z.up.copy(I.up),z.lookAt(b.copy(z.position).add(I.fwd)),z.setViewOffset(He(),Ge(),-C,N,He(),Ge()),z.updateProjectionMatrix(),z.updateMatrixWorld();let K=x.reflect.uReflectMat.value;K.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),K.multiply(z.projectionMatrix).multiply(z.matrixWorldInverse),I.plane.setFromNormalAndCoplanarPoint(X.set(0,1,0),b.set(0,q,0)).applyMatrix4(z.matrixWorldInverse),I.clip.set(I.plane.normal.x,I.plane.normal.y,I.plane.normal.z,I.plane.constant);let Q=z.projectionMatrix.elements;I.q.set((Math.sign(I.clip.x)+Q[8])/Q[0],(Math.sign(I.clip.y)+Q[9])/Q[5],-1,(1+Q[10])/Q[14]),I.clip.multiplyScalar(2/I.clip.dot(I.q)),Q[2]=I.clip.x,Q[6]=I.clip.y,Q[10]=I.clip.z+1,Q[14]=I.clip.w;let te=x.waterMeshes.map(le=>le.visible);x.waterMeshes.forEach(le=>{le.visible=!1}),e.setRenderTarget(I.rt),e.clear(),e.render(n,z),e.setRenderTarget(null),x.waterMeshes.forEach((le,Me)=>{le.visible=te[Me]})}let S=(document.querySelector('meta[name="gmaps-key"]')?.content||"").trim(),W=null;if(S&&!rs.has("generated"))try{W=Ag({key:S,renderer:e,sky:x.sky,fog:x.fog})}catch(C){console.warn("3D tiles unavailable",C)}let F={pos:[0,0,0],look:[0,0,0],ox:0,oy:0,fov:40,pull:1,flight:0},O=null,G={night:{zenith:x.uZenith.value.clone(),horizon:x.sky.uniforms.uHorizon.value.clone(),glow:x.sky.uniforms.uGlow.value.clone(),cool:x.fog.cool.value.clone(),warm:x.fog.warm.value.clone()},day:{zenith:new be(.035,.075,.2),horizon:new be(.3,.22,.25),glow:new be(1.25,.55,.22),cool:new be(.13,.15,.23),warm:new be(.55,.32,.17)}};function H(C){x.uZenith.value.copy(G.night.zenith).lerp(G.day.zenith,C),x.sky.uniforms.uHorizon.value.copy(G.night.horizon).lerp(G.day.horizon,C),x.sky.uniforms.uGlow.value.copy(G.night.glow).lerp(G.day.glow,C),x.fog.cool.value.copy(G.night.cool).lerp(G.day.cool,C),x.fog.warm.value.copy(G.night.warm).lerp(G.day.warm,C)}let ie=document.getElementById("labels"),Z=(C,N)=>{let z=document.createElement("div");return z.className=`label ${C}`,z.innerHTML=N,ie.appendChild(z),z},ve=x.offices.map(C=>({o:C,el:Z("label-office",`<span class="dot"></span><span class="stem"></span><span class="txt"><b>${C.name}</b><small>${C.sub}</small></span>`)})),xe=x.typeTargets.map(C=>({t:C,el:Z("label-type",`<span class="dot"></span><span>${C.name}</span>`)})),Qe=Array.from(document.querySelectorAll("#consulting li")).map(C=>C.textContent.trim()).map((C,N)=>({i:N,el:Z("label-node",`<span class="num">${String(N+1).padStart(2,"0")}</span><span class="name">${C}</span>`)})),ft=-1,se=-1,ce=null;mi.hotType=C=>{ft=C,mi.markType(C)},mi.hotNode=C=>{se=C,mi.markNode(C)},mi.hotOffice=C=>{ce=C,mi.markOffice(C)};let ge={x:0,y:0,sx:-100,sy:-100,px:-100,py:-100,inside:!1,overUI:!0},Ce=document.getElementById("cursor"),$e=document.getElementById("cursor-label"),Ye=window.matchMedia("(hover: hover) and (pointer: fine)").matches;Ye&&document.body.classList.add("has-cursor");let Ke='a, button, input, select, textarea, label, summary, [role="button"], iframe',lt="p, h1, h2, h3, li, dt, dd, address, form, .agent, .chips, legend, .offices";window.addEventListener("pointermove",C=>{ge.x=C.clientX/window.innerWidth*2-1,ge.y=-(C.clientY/window.innerHeight)*2+1,ge.px=C.clientX,ge.py=C.clientY,ge.inside=!0;let N=C.target instanceof Element?C.target:null,z=!!(N&&N.closest(Ke));ge.overUI=z||!!(N&&N.closest(lt))||!!(N&&N.closest(".site-header, .system-map, .site-footer")),Ce.classList.toggle("is-link",z)},{passive:!0}),document.addEventListener("pointerleave",()=>{ge.inside=!1});let oe=null;window.addEventListener("click",C=>{if(!oe||ge.overUI)return;let N=C.target instanceof Element?C.target:null;N&&N.closest(Ke)||mi.goToChapter(oe.chapter)});function D(){let C=window.innerWidth,N=window.innerHeight;s.aspect=C/N,e.setPixelRatio(t),e.setSize(C,N,!1),M.setPixelRatio(t),M.setSize(C,N),x.uPixelRatio.value=t,j(),W&&W.resize(),Tr()}window.addEventListener("resize",D),new ResizeObserver(()=>Tr()).observe(document.querySelector("main")),document.fonts&&document.fonts.ready.then(Tr),Tr();let Pe=new _s,fe={pos:new P,look:new P,ox:0,oy:0,fov:40,flight:0},Y=rs.has("cam")?(()=>{let C=rs.get("cam").split(",").map(Number);return[xi(C[0],C[1],C[2]),xi(C[3],C[4],C[5])]})():null;rs.has("p")&&(Pa=Math.min(Pg-1,Math.max(0,parseFloat(rs.get("p"))||0)));let _e=Nd(),we=_e,Ae=ss.matches||Pa!==null?1:0,T=!1,b=new P,X=new P,re=new ke,he=new Ai,ae=new gi(new P(0,1,0),0),De=new ne,pe={frames:0,acc:0,checked:0},Ue=!0,st=0;document.addEventListener("visibilitychange",()=>{Ue=!document.hidden,Ue&&(Pe.getDelta(),requestAnimationFrame(U))});let ue=(C,N,z)=>{let q=Math.min(1,Math.max(0,(z-C)/(N-C)));return q*q*(3-2*q)},Ee=C=>Math.max(0,1-Math.abs(we-C)*1.6),He=()=>window.innerWidth,Ge=()=>window.innerHeight;function Be(C){return b.copy(C).project(s),{x:(b.x*.5+.5)*He(),y:(-b.y*.5+.5)*Ge(),on:b.z<1&&Math.abs(b.x)<1.1&&Math.abs(b.y)<1.1}}let rt=null,et=-1;function bt(C){let N=Ud[C],z=N&&(N.querySelector(".panel")||N.querySelector(".contact-intro")||N.querySelector(".wrap")),q=z?z.getBoundingClientRect():null;rt=q&&q.width?{l:q.left-28,r:q.right+28,t:q.top-20,b:q.bottom+20}:null}function k(C,N,z,q=0,K=0){let Q=Be(N),te=Q.x+q,le=Q.y+K,Me=rt&&te>rt.l&&te<rt.r&&le>rt.t&&le<rt.b,Se=z&&Q.on&&!Me;C.classList.toggle("is-on",Se),Se&&(C.style.transform=`translate3d(${(Q.x+q).toFixed(1)}px, ${(Q.y+K).toFixed(1)}px, 0) translate(-3px, -50%)`)}let Oe=C=>`${Math.abs(C).toFixed(4)}\xB0 ${C>=0?"N":"S"}`,ee=C=>`${Math.abs(C).toFixed(4)}\xB0 ${C>=0?"E":"W"}`,R=C=>C>=1e4?`${Math.round(C/1e3).toLocaleString("en-US")} km`:`${Math.round(C).toLocaleString("en-US")} m`;function U(){if(!Ue)return;requestAnimationFrame(U);let C=Math.min(Pe.getDelta(),.05),N=Pe.elapsedTime;x.uTime.value=N,E.uniforms.uTime.value=ss.matches?0:N,_e=Nd();let z=Pa!==null;N-et>.25&&(et=N,bt(Math.round(_e)));let q=ss.matches?12:3;we+=(_e-we)*(1-Math.exp(-C*q)),(Math.abs(_e-we)<1e-4||z)&&(we=_e),T&&Ae<1&&(Ae=Math.min(1,Ae+C/4.5));let K=1-Math.pow(1-Ae,3),Q=He()/Ge();Ye&&(ge.sx+=(ge.px-ge.sx)*.25,ge.sy+=(ge.py-ge.sy)*.25,Ce.style.transform=`translate3d(${ge.sx.toFixed(1)}px, ${ge.sy.toFixed(1)}px, 0)`,Ce.classList.toggle("is-hidden",!ge.inside));let te=!!W&&!W.failed;if(te!==O&&(O=te,document.body.classList.toggle("real-cities",te),L.scene=te?W.scene:n,L.camera=te?W.camera:s,A.enabled=!te,E.uniforms.uGrain.value=te?.01:.028,E.uniforms.uAberration.value=te?0:6e-4,document.querySelectorAll("#labels .label").forEach(ye=>ye.classList.toggle("is-off",te)),oe=null,Ye&&Ce.classList.remove("is-world"),te||(x.sky.uniforms.uDay.value=0,H(0))),te){let ye=W.camera;Rg(we,Q,F),K<1&&(F.pos[2]*=1+(1-K)*.35),W.toFrame(F,fe.pos,fe.look),!ss.matches&&Ye&&(De.x+=(ge.x-De.x)*(1-Math.exp(-C*2.5)),De.y+=(ge.y-De.y)*(1-Math.exp(-C*2.5))),ye.up.set(0,1,0),ye.position.copy(fe.pos),ye.lookAt(fe.look);let Ve=fe.pos.distanceTo(fe.look);b.set(1,0,0).applyQuaternion(ye.quaternion).multiplyScalar(De.x*Ve*.02),X.set(0,1,0).applyQuaternion(ye.quaternion).multiplyScalar(De.y*Ve*.012),ye.position.add(b).add(X),ye.lookAt(fe.look);let Fe=Math.max(2,F.pos[2]);if(ye.fov=F.fov,ye.near=Math.max(1,Fe*.04),ye.far=Math.max(6e4,2.2*Math.sqrt(2*6371e3*Fe+Fe*Fe)),ye.setViewOffset(He(),Ge(),-F.ox*He(),F.oy*Ge(),He(),Ge()),ye.updateProjectionMatrix(),ye.updateMatrixWorld(),x.fog.density.value=1/Math.max(26e3,Fe*5),x.fog.detail.value=1-ue(14e3,7e4,Fe),W.update(Fe,N),H(x.sky.uniforms.uDay.value),M.render(C),N-st>.1&&(st=N,mi.setProgress(_e,Math.round(_e),`${Oe(F.pos[0])} \xB7 ${ee(F.pos[1])} \xB7 ALT ${R(Fe)}`)),T&&pe.checked<4&&!W.busy&&(pe.frames++,pe.acc+=C,pe.frames>=90)){let ut=pe.acc/pe.frames;pe.frames=0,pe.acc=0,pe.checked++,ut>1/40&&t>.8&&(t=Math.max(.75,t-.35),D())}return}if(Cg(we,Q,fe),Y&&(fe.pos.copy(Y[0]),fe.look.copy(Y[1]),fe.ox=0,fe.oy=0),K<1){let ye=1-K;fe.pos.y*=1+ye*.35}!ss.matches&&Ye&&(De.x+=(ge.x-De.x)*(1-Math.exp(-C*2.5)),De.y+=(ge.y-De.y)*(1-Math.exp(-C*2.5))),s.position.copy(fe.pos),s.lookAt(fe.look);let le=fe.pos.distanceTo(fe.look);b.set(1,0,0).applyQuaternion(s.quaternion).multiplyScalar(De.x*le*.02),X.set(0,1,0).applyQuaternion(s.quaternion).multiplyScalar(De.y*le*.012),s.position.add(b).add(X),s.position.y=Math.max(s.position.y,.08),s.lookAt(fe.look);let Me=s.position.y;s.fov=fe.fov,s.near=Math.max(.02,Me*.01),s.far=Math.max(4e3,Me*60),s.setViewOffset(He(),Ge(),-fe.ox*He(),fe.oy*Ge(),He(),Ge()),s.updateProjectionMatrix(),s.updateMatrixWorld(),x.fog.density.value=1/Math.max(260,Me*5),x.fog.detail.value=1-ue(140,700,Me),x.clouds.uniforms.uOpacity.value=.42*ue(110,600,Me)*(1-ue(25e3,4e4,Me))+.5*fe.flight*ue(60,200,Me),x.map.uniforms.uLights.value=.6+.6*ue(50,3e3,Me),x.offices.forEach(ye=>{let Ve=s.position.distanceTo(ye.pos);ye.beam.scale.set(Math.max(.12,Ve*.0035),Math.max(8,Ve*.45),Math.max(.12,Ve*.0035)),ye.ring.scale.setScalar(Math.max(.8,Ve*.06));let Fe=Math.max(Ee(0),Ee(7)*(ye.id==="orlando"?1:0),Ee(2)*(ye.id==="new-york"?1:0),Ee(3)*(ye.id==="orlando"?1:0),.12),ut=x.realCities?ue(150,1500,Me):1;ye.beamMat.uniforms.uIntensity.value=1.2*Fe*ut*(.35+.65*ue(4,60,Ve))*(ce===ye.id?1.8:1),ye.ringMat.uniforms.uOn.value=Fe*ut}),x.arc.uniforms.uOn.value=Math.max(1-ue(.4,1,we),fe.flight*(we>2&&we<3?1:0)),x.arc.uniforms.uDraw.value+=((T?1.02:0)-x.arc.uniforms.uDraw.value)*(z?1:1-Math.exp(-C*1.2)),x.billboards.forEach(ye=>ye.quaternion.copy(s.quaternion)),x.fountain&&x.fountain.material.uniforms.uColor.value.setHSL(N*.03%1,.6,.6);let Se=x.nycBuildings.uniforms;Se.uHot.value=ft,Se.uHotOn.value+=((ft>=0?1:0)-Se.uHotOn.value)*.15;let Ie=Ee(2);xe.forEach((ye,Ve)=>{ye.el.classList.toggle("is-hot",ft===Ve),X.copy(ye.t.local).add(x.nyc.center),k(ye.el,X.clone(),Ie>.55&&Q>.9&&!x.realCities)});let We=x.tower,Ze=ue(3.3,3.95,we)*(1-ue(5.3,5.9,we));We.uniforms.uDraw.value+=(Ze*1.08-We.uniforms.uDraw.value)*(z?1:1-Math.exp(-C*1.6)),We.uniforms.uHot.value=se;let at=Ee(4);Qe.forEach(ye=>{ye.el.classList.toggle("is-hot",se===ye.i),X.copy(We.floorLocal(ye.i)).add(x.orl.center);let Ve=!x.realCities&&at>.55&&(Q>.9||se===ye.i)&&We.uniforms.uDraw.value>ye.i/15+.05;k(ye.el,X.clone(),Ve,26,0)});let Je=x.parcels.uniforms;Je.uOn.value+=(ue(5.4,6,we)*(1-ue(6.6,7,we))-Je.uOn.value)*(z?1:.08);let mt=0;if(Ye&&ge.inside&&!ge.overUI&&Je.uOn.value>.2&&(b.set(ge.x,ge.y,.5).unproject(s).sub(s.position).normalize(),he.set(s.position,b),he.intersectPlane(ae,X)&&(mt=1,Je.uPointerOn.value<.05&&Je.uPointer.value.copy(X),Je.uPointer.value.lerp(X,.2))),Je.uPointerOn.value+=(mt-Je.uPointerOn.value)*.08,ve.forEach(ye=>{ye.el.classList.toggle("is-hot",ce===ye.o.id);let Ve=Ee(0)>.5||ye.o.id==="new-york"&&Ee(2)>.55||ye.o.id==="orlando"&&(Ee(7)>.55||Ee(3)>.55);k(ye.el,ye.o.pos,Ve)}),oe=null,Ye&&ge.inside&&!ge.overUI&&Ee(0)>.5)for(let ye of x.hit){let Ve=Be(ye.center);Ve.on&&Math.hypot(Ve.x-ge.px,Ve.y-ge.py)<70&&(oe=ye)}Ye&&(ge.sx+=(ge.px-ge.sx)*.25,ge.sy+=(ge.py-ge.sy)*.25,Ce.style.transform=`translate3d(${ge.sx.toFixed(1)}px, ${ge.sy.toFixed(1)}px, 0)`,Ce.classList.toggle("is-world",!!oe),Ce.classList.toggle("is-hidden",!ge.inside),oe&&$e.textContent!==oe.label&&($e.textContent=oe.label));let ct=I.on&&Me<60&&x.fog.detail.value>.05;if(x.reflect.uReflectOn.value=ct?1:0,ct&&_(-fe.ox*He(),fe.oy*Ge()),M.render(C),N-st>.1){st=N;let ye=Qp(s.position.x,s.position.z);mi.setProgress(_e,Math.round(_e),`${Oe(ye.lat)} \xB7 ${ee(ye.lon)} \xB7 ALT ${R(em(Me,ye.lat))}`)}if(T&&pe.checked<4&&(pe.frames++,pe.acc+=C,pe.frames>=90)){let ye=pe.acc/pe.frames;pe.frames=0,pe.acc=0,pe.checked++,ye>1/42&&I.on&&I.scale>.3?(I.scale=.25,j()):ye>1/42&&I.on?I.on=!1:ye>1/42&&t>.8?(t=Math.max(.75,t-.35),D()):ye>1/28&&A.enabled&&(A.enabled=!1)}}Hl(.92);try{e.compile(n,s)}catch{}requestAnimationFrame(U),setTimeout(()=>{Hl(1),T=!0,Gl(),Ud[0].classList.add("is-in"),mi.startReveals()},300)}$1()?J1().catch(i=>{console.error(i),Dd.classList.add("no-webgl"),Gl(),mi.startReveals(),Lg()}):(Dd.classList.add("no-webgl"),Gl(),mi.startReveals(),Lg());})();
