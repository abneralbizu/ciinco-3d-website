(()=>{var Ng=Object.defineProperty;var Og=(i,e,t)=>e in i?Ng(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var jl=(i,e,t)=>Og(i,typeof e!="symbol"?e+"":e,t);var Qo="169";var Fg=0,Nd=1,Bg=2;var np=1,zg=2,pn=3,nn=0,si=1,ii=2,tn=0,qs=1,Zs=2,Od=3,Fd=4,Zh=5,hs=100,kg=101,Vg=102,Hg=103,Gg=104,Kh=200,Jh=201,Wg=202,Xg=203,Ic=204,Lc=205,qg=206,Yg=207,jg=208,$g=209,Zg=210,Kg=211,Jg=212,Qg=213,e0=214,Dc=0,Uc=1,Nc=2,Ks=3,Oc=4,Fc=5,fo=6,Bc=7,sp=0,t0=1,i0=2,On=0,Qh=1,eu=2,tu=3,ta=4,n0=5,iu=6,nu=7,Bd="attached",s0="detached",rp=300,Js=301,Qs=302,zc=303,kc=304,el=306,sn=1e3,$i=1001,Vr=1002,Kt=1003,su=1004;var Gs=1005;var ni=1006,Nr=1007;var Ui=1008;var rn=1009,ap=1010,op=1011,Hr=1012,ru=1013,ds=1014,Ni=1015,yi=1016,au=1017,ou=1018,er=1020,lp=35902,cp=1021,hp=1022,Oi=1023,up=1024,dp=1025,Ys=1026,tr=1027,tl=1028,lu=1029,cu=1030,hu=1031;var il=1033,ao=33776,oo=33777,lo=33778,co=33779,Vc=35840,Hc=35841,Gc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,jc=37808,$c=37809,Zc=37810,Kc=37811,Jc=37812,Qc=37813,eh=37814,th=37815,ih=37816,nh=37817,sh=37818,rh=37819,ah=37820,oh=37821,ho=36492,lh=36494,ch=36495,fp=36283,hh=36284,uh=36285,dh=36286;var ir=2300,nr=2301,$l=2302,zd=2400,kd=2401,Vd=2402,r0=2500;var pp=0,nl=1,ia=2,a0=3200,o0=3201;var mp=0,l0=1,en="",It="srgb",Vt="srgb-linear",uu="display-p3",sl="display-p3-linear",po="linear",Ct="srgb",mo="rec709",go="p3";var Cs=7680;var Hd=519,c0=512,h0=513,u0=514,gp=515,d0=516,f0=517,p0=518,m0=519,fh=35044;var Gd="300 es",mn=2e3,vo=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,Or=Math.PI/180,sr=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function du(i,e){return(i%e+e)%e}function g0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function x0(i,e=1){return e-Math.abs(du(i,e*2)-e)}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function M0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function S0(i,e){return i+Math.random()*(e-i)}function w0(i){return i*(.5-Math.random())}function T0(i){i!==void 0&&(Wd=i);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A0(i){return i*Or}function E0(i){return i*sr}function C0(i){return(i&i-1)===0&&i!==0}function R0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function P0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function I0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mn={DEG2RAD:Or,RAD2DEG:sr,generateUUID:Fi,clamp:Gt,euclideanModulo:du,mapLinear:g0,inverseLerp:v0,lerp:Fr,damp:y0,pingpong:x0,smoothstep:_0,smootherstep:M0,randInt:b0,randFloat:S0,randFloatSpread:w0,seededRandom:T0,degToRad:A0,radToDeg:E0,isPowerOfTwo:C0,ceilPowerOfTwo:R0,floorPowerOfTwo:P0,setQuaternionFromProperEuler:I0,normalize:Tt,denormalize:ji},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=s[0],p=s[3],g=s[6],x=s[1],v=s[4],M=s[7],L=s[2],C=s[5],A=s[8];return r[0]=a*y+o*x+l*L,r[3]=a*p+o*v+l*C,r[6]=a*g+o*M+l*A,r[1]=c*y+h*x+u*L,r[4]=c*p+h*v+u*C,r[7]=c*g+h*M+u*A,r[2]=d*y+f*x+m*L,r[5]=d*p+f*v+m*C,r[8]=d*g+f*M+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new ot;function vp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L0(){let i=Gr("canvas");return i.style.display="block",i}var Xd={};function uo(i){i in Xd||(Xd[i]=!0,console.warn(i))}function D0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function U0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var qd=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yd=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[Vt]:{transfer:po,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[It]:{transfer:Ct,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sl]:{transfer:po,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Yd),fromReference:i=>i.applyMatrix3(qd)},[uu]:{transfer:Ct,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yd),fromReference:i=>i.applyMatrix3(qd).convertLinearToSRGB()}},O0=new Set([Vt,sl]),mt={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!O0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Tr[e].toReference,s=Tr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===en?po:Tr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Tr[e].luminanceCoefficients)}};function js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,ph=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Gr("canvas")),Rs.width=e.width,Rs.height=e.height;let n=Rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=js(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jl(s[a].image)):r.push(Jl(s[a]))}else r=Jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var B0=0,$t=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$i,s=$i,r=ni,a=Ui,o=Oi,l=rn,c=i.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Fi(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=rp;$t.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,L=(g+1)/2,C=(h+d)/4,A=(u+y)/4,D=(m+p)/4;return v>M&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=D/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-m)*(p-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mh=class extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yo=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gh=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let p=1-o,g=l*d+c*f+h*m+u*y,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let L=Math.sqrt(v),C=Math.atan2(L,g*x);p=Math.sin(p*C)/L,o=Math.sin(o*C)/L}let M=o*x;if(l=l*p+d*M,c=c*p+f*M,h=h*p+m*M,u=u*p+y*M,p===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ql=new P,jd=new ui,ri=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Ia.subVectors(this.max,Ar),Ps.subVectors(e.a,Ar),Is.subVectors(e.b,Ar),Ls.subVectors(e.c,Ar),Cn.subVectors(Is,Ps),Rn.subVectors(Ls,Is),ns.subVectors(Ps,Ls);let t=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-ns.z,ns.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,ns.z,0,-ns.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-ns.y,ns.x,0];return!ec(t,Ps,Is,Ls,Ia)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Ps,Is,Ls,Ia))?!1:(La.crossVectors(Cn,Rn),t=[La.x,La.y,La.z],ec(t,Ps,Is,Ls,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ln=[new P,new P,new P,new P,new P,new P,new P,new P],Xi=new P,Pa=new ri,Ps=new P,Is=new P,Ls=new P,Cn=new P,Rn=new P,ns=new P,Ar=new P,Ia=new P,La=new P,ss=new P;function ec(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var z0=new ri,Er=new P,tc=new P,Wt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(tc)),this.expandByPoint(Er.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cn=new P,ic=new P,Da=new P,Pn=new P,nc=new P,Ua=new P,sc=new P,vi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ic.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=Pn.dot(this.direction),l=-Pn.dot(Da),c=Pn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ic).addScaledVector(Da,d),f}intersectSphere(e,t){cn.subVectors(e.center,this.origin);let n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){nc.subVectors(t,e),Ua.subVectors(n,e),sc.crossVectors(nc,Ua);let a=this.direction.dot(sc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);let l=o*this.direction.dot(Ua.crossVectors(Pn,Ua));if(l<0)return null;let c=o*this.direction.dot(nc.cross(Pn));if(c<0||l+c>a)return null;let h=-o*Pn.dot(sc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d+y*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,y=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,V0)}lookAt(e,t,n){let s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),In.crossVectors(n,wi),In.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),In.crossVectors(n,wi)),In.normalize(),Na.crossVectors(wi,In),s[0]=In.x,s[4]=Na.x,s[8]=wi.x,s[1]=In.y,s[5]=Na.y,s[9]=wi.y,s[2]=In.z,s[6]=Na.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],p=n[10],g=n[14],x=n[3],v=n[7],M=n[11],L=n[15],C=s[0],A=s[4],D=s[8],Z=s[12],_=s[1],w=s[5],$=s[9],B=s[13],N=s[2],Y=s[6],V=s[10],ee=s[14],G=s[3],pe=s[7],de=s[11],oe=s[15];return r[0]=a*C+o*_+l*N+c*G,r[4]=a*A+o*w+l*Y+c*pe,r[8]=a*D+o*$+l*V+c*de,r[12]=a*Z+o*B+l*ee+c*oe,r[1]=h*C+u*_+d*N+f*G,r[5]=h*A+u*w+d*Y+f*pe,r[9]=h*D+u*$+d*V+f*de,r[13]=h*Z+u*B+d*ee+f*oe,r[2]=m*C+y*_+p*N+g*G,r[6]=m*A+y*w+p*Y+g*pe,r[10]=m*D+y*$+p*V+g*de,r[14]=m*Z+y*B+p*ee+g*oe,r[3]=x*C+v*_+M*N+L*G,r[7]=x*A+v*w+M*Y+L*pe,r[11]=x*D+v*$+M*V+L*de,r[15]=x*Z+v*B+M*ee+L*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],y=e[7],p=e[11],g=e[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],y=e[13],p=e[14],g=e[15],x=u*p*c-y*d*c+y*l*f-o*p*f-u*l*g+o*d*g,v=m*d*c-h*p*c-m*l*f+a*p*f+h*l*g-a*d*g,M=h*y*c-m*u*c+m*o*f-a*y*f-h*o*g+a*u*g,L=m*u*l-h*y*l-m*o*d+a*y*d+h*o*p-a*u*p,C=t*x+n*v+s*M+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return e[0]=x*A,e[1]=(y*d*r-u*p*r-y*s*f+n*p*f+u*s*g-n*d*g)*A,e[2]=(o*p*r-y*l*r+y*s*c-n*p*c-o*s*g+n*l*g)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=v*A,e[5]=(h*p*r-m*d*r+m*s*f-t*p*f-h*s*g+t*d*g)*A,e[6]=(m*l*r-a*p*r-m*s*c+t*p*c+a*s*g-t*l*g)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=M*A,e[9]=(m*u*r-h*y*r-m*n*f+t*y*f+h*n*g-t*u*g)*A,e[10]=(a*y*r-m*o*r+m*n*c-t*y*c-a*n*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=L*A,e[13]=(h*y*s-m*u*s+m*n*d-t*y*d-h*n*p+t*u*p)*A,e[14]=(m*o*s-a*y*s-m*n*l+t*y*l+a*n*p-t*o*p)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,y=a*h,p=a*u,g=o*u,x=l*c,v=l*h,M=l*u,L=n.x,C=n.y,A=n.z;return s[0]=(1-(y+g))*L,s[1]=(f+M)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(d+g))*C,s[6]=(p+x)*C,s[7]=0,s[8]=(m+v)*A,s[9]=(p-x)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qi.copy(this);let c=1/r,h=1/a,u=1/o;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=u,qi.elements[9]*=u,qi.elements[10]*=u,t.setFromRotationMatrix(qi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=mn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(o===mn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===vo)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,m,y;if(o===mn)m=(a+r)*u,y=-2*u;else if(o===vo)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new P,qi=new Ne,k0=new P(0,0,0),V0=new P(1,1,1),In=new P,Na=new P,wi=new P,$d=new Ne,Zd=new ui,Bi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H0=0,Kd=new P,Us=new ui,hn=new Ne,Oa=new P,Cr=new P,G0=new P,W0=new ui,Jd=new P(1,0,0),Qd=new P(0,1,0),ef=new P(0,0,1),tf={type:"added"},X0={type:"removed"},Ns={type:"childadded",child:null},rc={type:"childremoved",child:null},Rt=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Bi,n=new ui,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ot}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Cr,Oa,this.up):hn.lookAt(Oa,Cr,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(hn),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),rc.child=e,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=new P,un=new P,ac=new P,dn=new P,Os=new P,Fs=new P,nf=new P,oc=new P,lc=new P,cc=new P,hc=new xt,uc=new xt,dc=new xt,Un=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),un.subVectors(n,t),ac.subVectors(e,t);let a=Yi.dot(Yi),o=Yi.dot(un),l=Yi.dot(ac),c=un.dot(un),h=un.dot(ac),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return hc.setScalar(0),uc.setScalar(0),dc.setScalar(0),hc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,n),dc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(hc,r.x),a.addScaledVector(uc,r.y),a.addScaledVector(dc,r.z),a}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),un.subVectors(e,t),Yi.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Yi.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),Fs.subVectors(r,n),oc.subVectors(e,n);let l=Os.dot(oc),c=Fs.dot(oc);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,s);let h=Os.dot(lc),u=Fs.dot(lc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Os,a);cc.subVectors(e,r);let f=Os.dot(cc),m=Fs.dot(cc);if(m>=0&&f<=m)return t.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Fs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return nf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(nf,o);let g=1/(p+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=du(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fc(a,r,e+1/3),this.g=fc(a,r,e),this.b=fc(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Kl(e.r),this.g=Kl(e.g),this.b=Kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return mt.fromWorkingColorSpace(ti.copy(this),e),Math.round(Gt(ti.r*255,0,255))*65536+Math.round(Gt(ti.g*255,0,255))*256+Math.round(Gt(ti.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ti.copy(this),t);let n=ti.r,s=ti.g,r=ti.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=It){mt.fromWorkingColorSpace(ti.copy(this),e);let t=ti.r,n=ti.g,s=ti.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Fa);let n=Fr(Ln.h,Fa.h,t),s=Fr(Ln.s,Fa.s,t),r=Fr(Ln.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new ge;ge.NAMES=yp;var q0=0,Ai=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=qs,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ai=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new P,Ba=new se,nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}};var xo=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _o=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Y0=0,Di=new Ne,pc=new Rt,Bs=new P,Ti=new ri,Rr=new ri,jt=new P,Mt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?_o:xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Ti.min,Rr.min),Ti.expandByPoint(jt),jt.addVectors(Ti.max,Rr.max),Ti.expandByPoint(jt)):(Ti.expandByPoint(Rr.min),Ti.expandByPoint(Rr.max))}Ti.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),jt.add(Bs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;let c=new P,h=new P,u=new P,d=new se,f=new se,m=new se,y=new P,p=new P;function g(D,Z,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,Z),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,Z),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),o[D].add(y),o[Z].add(y),o[_].add(y),l[D].add(p),l[Z].add(p),l[_].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,Z=x.length;D<Z;++D){let _=x[D],w=_.start,$=_.count;for(let B=w,N=w+$;B<N;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new P,M=new P,L=new P,C=new P;function A(D){L.fromBufferAttribute(s,D),C.copy(L);let Z=o[D];v.copy(Z),v.sub(L.multiplyScalar(L.dot(Z))).normalize(),M.crossVectors(C,Z);let w=M.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,w)}for(let D=0,Z=x.length;D<Z;++D){let _=x[D],w=_.start,$=_.count;for(let B=w,N=w+$;B<N;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new Ne,rs=new vi,za=new Wt,rf=new P,ka=new P,Va=new P,Ha=new P,mc=new P,Ga=new P,af=new P,Wa=new P,ft=class extends Rt{constructor(e=new Mt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(mc.fromBufferAttribute(u,e),a?Ga.addScaledVector(mc,h):Ga.addScaledVector(mc.sub(t),h))}t.add(Ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(za.containsPoint(rs.origin)===!1&&(rs.intersectSphere(za,rf)===null||rs.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(sf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(sf),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,L=v;M<L;M+=3){let C=o.getX(M),A=o.getX(M+1),D=o.getX(M+2);s=Xa(this,g,e,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let x=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);s=Xa(this,a,e,n,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,L=v;M<L;M+=3){let C=M,A=M+1,D=M+2;s=Xa(this,g,e,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let x=p,v=p+1,M=p+2;s=Xa(this,a,e,n,c,h,u,x,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function j0(i,e,t,n,s,r,a,o){let l;if(e.side===si?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===nn,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Va),i.getVertexPosition(c,Ha);let h=j0(i,e,t,n,ka,Va,Ha,af);if(h){let u=new P;Un.getBarycoord(af,ka,Va,Ha,u),s&&(h.uv=Un.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Un.getNormal(ka,Va,Ha,d.normal),h.face=d,h.barycoord=u}return h}var Ei=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function m(y,p,g,x,v,M,L,C,A,D,Z){let _=M/A,w=L/D,$=M/2,B=L/2,N=C/2,Y=A+1,V=D+1,ee=0,G=0,pe=new P;for(let de=0;de<V;de++){let oe=de*w-B;for(let Ze=0;Ze<Y;Ze++){let rt=Ze*_-$;pe[y]=rt*x,pe[p]=oe*v,pe[g]=N,c.push(pe.x,pe.y,pe.z),pe[y]=0,pe[p]=0,pe[g]=C>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Ze/A),u.push(1-de/D),ee+=1}}for(let de=0;de<D;de++)for(let oe=0;oe<A;oe++){let Ze=d+oe+Y*de,rt=d+oe+Y*(de+1),Q=d+(oe+1)+Y*(de+1),le=d+(oe+1)+Y*de;l.push(Ze,rt,le),l.push(rt,Q,le),G+=6}o.addGroup(f,G,Z),f+=G,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hi(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function $0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Xn={clone:rr,merge:hi},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mo=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new P,of=new se,lf=new se,Ot=class extends Mo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,of,lf),t.subVectors(lf,of)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,ks=1,vh=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(zs,ks,e,t);s.layers=this.layers,this.add(s);let r=new Ot(zs,ks,e,t);r.layers=this.layers,this.add(r);let a=new Ot(zs,ks,e,t);a.layers=this.layers,this.add(a);let o=new Ot(zs,ks,e,t);o.layers=this.layers,this.add(o);let l=new Ot(zs,ks,e,t);l.layers=this.layers,this.add(l);let c=new Ot(zs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},bo=class extends $t{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yh=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:tn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=ni),new vh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},gc=new P,J0=new P,Q0=new ot,mi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gc.subVectors(n,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Q0.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Wt,qa=new P,Bn=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],y=s[10],p=s[11],g=s[12],x=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-f,M-g).normalize(),n[1].setComponents(l+r,d+c,p+f,M+g).normalize(),n[2].setComponents(l+a,d+h,p+m,M+x).normalize(),n[3].setComponents(l-a,d-h,p-m,M-x).normalize(),n[4].setComponents(l-o,d-u,p-y,M-v).normalize(),t===mn)n[5].setComponents(l+o,d+u,p+y,M+v).normalize();else if(t===vo)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _p(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ev(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var oi=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],y=[],p=[];for(let g=0;g<h;g++){let x=g*d-a;for(let v=0;v<c;v++){let M=v*u-r;m.push(M,-x,0),y.push(0,0,1),p.push(v/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let v=x+c*g,M=x+c*(g+1),L=x+1+c*(g+1),C=x+1+c*g;f.push(v,M,C),f.push(M,L,C)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wv=`#define PI 3.141592653589793
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
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Av=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`
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
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
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
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,Qv=`struct PhysicalMaterial {
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
}`,ey=`
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
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
#endif`,vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:tv,alphahash_pars_fragment:iv,alphamap_fragment:nv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:xv,color_fragment:_v,color_pars_fragment:Mv,color_pars_vertex:bv,color_vertex:Sv,common:wv,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:Av,displacementmap_pars_vertex:Ev,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Pv,colorspace_fragment:Iv,colorspace_pars_fragment:Lv,envmap_fragment:Dv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Nv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:Yv,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:kv,fog_pars_fragment:Vv,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:qv,lights_toon_fragment:jv,lights_toon_pars_fragment:$v,lights_phong_fragment:Zv,lights_phong_pars_fragment:Kv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:ey,lights_fragment_maps:ty,lights_fragment_end:iy,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:hy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:vy,normal_fragment_begin:yy,normal_fragment_maps:xy,normal_pars_fragment:_y,normal_pars_vertex:My,normal_vertex:by,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:Ey,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Iy,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Fy,shadowmap_vertex:By,shadowmask_pars_fragment:zy,skinbase_vertex:ky,skinning_pars_vertex:Vy,skinning_vertex:Hy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:jy,transmission_pars_fragment:$y,uv_pars_fragment:Zy,uv_pars_vertex:Ky,uv_vertex:Jy,worldpos_vertex:Qy,background_vert:ex,background_frag:tx,backgroundCube_vert:ix,backgroundCube_frag:nx,cube_vert:sx,cube_frag:rx,depth_vert:ax,depth_frag:ox,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:vx,meshmatcap_vert:yx,meshmatcap_frag:xx,meshnormal_vert:_x,meshnormal_frag:Mx,meshphong_vert:bx,meshphong_frag:Sx,meshphysical_vert:wx,meshphysical_frag:Tx,meshtoon_vert:Ax,meshtoon_frag:Ex,points_vert:Cx,points_frag:Rx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},De={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Qi={basic:{uniforms:hi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:hi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ge(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:hi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:hi([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:hi([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ge(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:hi([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:hi([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:hi([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:hi([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:hi([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:hi([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:hi([De.common,De.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:hi([De.lights,De.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Qi.physical={uniforms:hi([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Ya={r:0,b:0,g:0},os=new Bi,Ux=new Ne;function Nx(i,e,t,n,s,r,a){let o=new ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function y(x){let v=!1,M=m(x);M===null?g(o,l):M&&M.isColor&&(g(M,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,v){let M=m(v);M&&(M.isCubeTexture||M.mapping===el)?(h===void 0&&(h=new ft(new Ei(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:rr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(v.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(os)),h.material.toneMapped=mt.getTransfer(M.colorSpace)!==Ct,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ft(new oi(2,2),new At({name:"BackgroundMaterial",uniforms:rr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Ya,xp(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:y,addToRenderList:p}}function Ox(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,w,$,B,N){let Y=!1,V=u(B,$,w);r!==V&&(r=V,c(r.object)),Y=f(_,B,$,N),Y&&m(_,B,$,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(_,w,$,B),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,$){let B=$.wireframe===!0,N=n[_.id];N===void 0&&(N={},n[_.id]=N);let Y=N[w.id];Y===void 0&&(Y={},N[w.id]=Y);let V=Y[B];return V===void 0&&(V=d(l()),Y[B]=V),V}function d(_){let w=[],$=[],B=[];for(let N=0;N<t;N++)w[N]=0,$[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:$,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,w,$,B){let N=r.attributes,Y=w.attributes,V=0,ee=$.getAttributes();for(let G in ee)if(ee[G].location>=0){let de=N[G],oe=Y[G];if(oe===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),de===void 0||de.attribute!==oe||oe&&de.data!==oe.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function m(_,w,$,B){let N={},Y=w.attributes,V=0,ee=$.getAttributes();for(let G in ee)if(ee[G].location>=0){let de=Y[G];de===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(de=_.instanceColor));let oe={};oe.attribute=de,de&&de.data&&(oe.data=de.data),N[G]=oe,V++}r.attributes=N,r.attributesNum=V,r.index=B}function y(){let _=r.newAttributes;for(let w=0,$=_.length;w<$;w++)_[w]=0}function p(_){g(_,0)}function g(_,w){let $=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;$[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),N[_]!==w&&(i.vertexAttribDivisor(_,w),N[_]=w)}function x(){let _=r.newAttributes,w=r.enabledAttributes;for(let $=0,B=w.length;$<B;$++)w[$]!==_[$]&&(i.disableVertexAttribArray($),w[$]=0)}function v(_,w,$,B,N,Y,V){V===!0?i.vertexAttribIPointer(_,w,$,N,Y):i.vertexAttribPointer(_,w,$,B,N,Y)}function M(_,w,$,B){y();let N=B.attributes,Y=$.getAttributes(),V=w.defaultAttributeValues;for(let ee in Y){let G=Y[ee];if(G.location>=0){let pe=N[ee];if(pe===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor)),pe!==void 0){let de=pe.normalized,oe=pe.itemSize,Ze=e.get(pe);if(Ze===void 0)continue;let rt=Ze.buffer,Q=Ze.type,le=Ze.bytesPerElement,Ue=Q===i.INT||Q===i.UNSIGNED_INT||pe.gpuType===ru;if(pe.isInterleavedBufferAttribute){let be=pe.data,qe=be.stride,Ke=pe.offset;if(be.isInstancedInterleavedBuffer){for(let je=0;je<G.locationSize;je++)g(G.location+je,be.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let je=0;je<G.locationSize;je++)p(G.location+je);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let je=0;je<G.locationSize;je++)v(G.location+je,oe/G.locationSize,Q,de,qe*le,(Ke+oe/G.locationSize*je)*le,Ue)}else{if(pe.isInstancedBufferAttribute){for(let be=0;be<G.locationSize;be++)g(G.location+be,pe.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let be=0;be<G.locationSize;be++)p(G.location+be);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let be=0;be<G.locationSize;be++)v(G.location+be,oe/G.locationSize,Q,de,oe*le,oe/G.locationSize*be*le,Ue)}}else if(V!==void 0){let de=V[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(G.location,de);break;case 3:i.vertexAttrib3fv(G.location,de);break;case 4:i.vertexAttrib4fv(G.location,de);break;default:i.vertexAttrib1fv(G.location,de)}}}}x()}function L(){D();for(let _ in n){let w=n[_];for(let $ in w){let B=w[$];for(let N in B)h(B[N].object),delete B[N];delete w[$]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let w=n[_.id];for(let $ in w){let B=w[$];for(let N in B)h(B[N].object),delete B[N];delete w[$]}delete n[_.id]}function A(_){for(let w in n){let $=n[w];if($[_.id]===void 0)continue;let B=$[_.id];for(let N in B)h(B[N].object),delete B[N];delete $[_.id]}}function D(){Z(),a=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:Z,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function Fx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y];for(let y=0;y<d.length;y++)t.update(m,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Oi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let D=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function zx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mi,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,v=x*4,M=g.clippingState||null;l.value=M,M=h(m,d,v,f);for(let L=0;L!==v;++L)M[L]=t[L];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=f;v!==y;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function kx(i){let e=new WeakMap;function t(a,o){return o===zc?a.mapping=Js:o===kc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===zc||o===kc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gn=class extends Mo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,cf=[.125,.215,.35,.446,.526,.582],us=20,vc=new gn,hf=new ge,yc=null,xc=0,_c=0,Mc=!1,cs=(1+Math.sqrt(5))/2,Vs=1/cs,uf=[new P(-cs,Vs,0),new P(cs,Vs,0),new P(-Vs,0,cs),new P(Vs,0,cs),new P(0,cs,-Vs),new P(0,cs,Vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],So=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,xc,_c),this._renderer.xr.enabled=Mc,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:yi,format:Oi,colorSpace:Vt,depthBuffer:!1},s=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Hx(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,s){let o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hf),h.toneMapping=On,h.autoClear=!1;let f=new ai({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),m=new ft(new Ei,f),y=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(hf),y=!0);for(let g=0;g<6;g++){let x=g%3;x===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):x===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;ja(s,x*v,g>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uf[(s-r-1)%uf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*us-1),y=r/m,p=isFinite(r)?1+Math.floor(h*y):us;p>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${us}`);let g=[],x=0;for(let A=0;A<us;++A){let D=A/y,Z=Math.exp(-D*D/2);g.push(Z),A===0?x+=Z:A<p&&(x+=2*Z)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let M=this._sizeLods[s],L=3*M*(s>v-Ws?s-v+Ws:0),C=4*(this._cubeSize-M);ja(t,L,C,3*M,2*M),l.setRenderTarget(t),l.render(u,vc)}};function Vx(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+cf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ws?l=cf[a-i+Ws-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,y=3,p=2,g=1,x=new Float32Array(y*m*f),v=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let C=0;C<f;C++){let A=C%3*2/3-1,D=C>2?0:-1,Z=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(Z,y*m*C),v.set(d,p*m*C);let _=[C,C,C,C,C,C];M.set(_,g*m*C)}let L=new Mt;L.setAttribute("position",new nt(x,y)),L.setAttribute("uv",new nt(v,p)),L.setAttribute("faceIndex",new nt(M,g)),e.push(L),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function df(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hx(i,e,t){let n=new Float32Array(us),s=new P(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ff(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function pf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function Gx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===zc||l===kc,h=l===Js||l===Qs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new So(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new So(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&uo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let p=0,g=y.length;p<g;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let p=0,g=y.length;p<g;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,M=x.length;v<M;v+=3){let L=x[v+0],C=x[v+1],A=x[v+2];d.push(L,C,C,A,A,L)}}else if(m!==void 0){let x=m.array;y=m.version;for(let v=0,M=x.length/3-1;v<M;v+=3){let L=v+0,C=v+1,A=v+2;d.push(L,C,C,A,A,L)}}else return;let p=new(vp(d)?_o:xo)(d,1);p.version=y;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function qx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,y){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,m);let g=0;for(let x=0;x<m;x++)g+=f[x];for(let x=0;x<y.length;x++)t.update(g,n,y[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let Z=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",Z)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let M=o.attributes.position.count*v,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*L*4*u),A=new yo(C,M,L,u);A.type=Ni,A.needsUpdate=!0;let D=v*4;for(let _=0;_<u;_++){let w=p[_],$=g[_],B=x[_],N=M*L*4*_;for(let Y=0;Y<w.count;Y++){let V=Y*D;f===!0&&(s.fromBufferAttribute(w,Y),C[N+V+0]=s.x,C[N+V+1]=s.y,C[N+V+2]=s.z,C[N+V+3]=0),m===!0&&(s.fromBufferAttribute($,Y),C[N+V+4]=s.x,C[N+V+5]=s.y,C[N+V+6]=s.z,C[N+V+7]=0),y===!0&&(s.fromBufferAttribute(B,Y),C[N+V+8]=s.x,C[N+V+9]=s.y,C[N+V+10]=s.z,C[N+V+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new se(M,L)},n.set(o,d),o.addEventListener("dispose",Z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var wo=class extends $t{constructor(e,t,n,s,r,a,o,l,c,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=ds),n===void 0&&h===tr&&(n=er),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mp=new $t,mf=new wo(1,1),bp=new yo,Sp=new gh,wp=new bo,gf=[],vf=[],yf=new Float32Array(16),xf=new Float32Array(9),_f=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),qt(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;xf.set(n),i.uniformMatrix3fv(this.addr,!1,xf),qt(t,n)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),qt(t,n)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mf.compareFunction=gp,r=mf):r=Mp,t.setTexture2D(e||r,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wp,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bp,s)}function m_(i){switch(i){case 5126:return Zx;case 35664:return Kx;case 35665:return Jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return i_;case 5124:case 35670:return n_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,e){i.uniform1fv(this.addr,e)}function v_(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function y_(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function x_(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function __(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M_(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b_(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function w_(i,e){i.uniform2iv(this.addr,e)}function T_(i,e){i.uniform3iv(this.addr,e)}function A_(i,e){i.uniform4iv(this.addr,e)}function E_(i,e){i.uniform1uiv(this.addr,e)}function C_(i,e){i.uniform2uiv(this.addr,e)}function R_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function I_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mp,r[a])}function L_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sp,r[a])}function D_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wp,r[a])}function U_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bp,r[a])}function N_(i){switch(i){case 5126:return g_;case 35664:return v_;case 35665:return y_;case 35666:return x_;case 35674:return __;case 35675:return M_;case 35676:return b_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return E_;case 36294:return C_;case 36295:return R_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return U_}}var xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N_(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Mf(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){let n=i.name,s=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),a=bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mf(t,c===void 0?new xh(o,i,e):new _h(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mh(o),Mf(t,u)),t=u}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);O_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F_=37297,B_=0;function z_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function k_(i){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i),n;switch(e===t?n="":e===go&&t===mo?n="LinearDisplayP3ToLinearSRGB":e===mo&&t===go&&(n="LinearSRGBToLinearDisplayP3"),i){case Vt:case sl:return[n,"LinearTransferOETF"];case It:case uu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+z_(i.getShaderSource(e),a)}else return s}function V_(i,e){let t=k_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function H_(i,e){let t;switch(e){case Qh:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case ta:t="ACESFilmic";break;case iu:t="AgX";break;case nu:t="Neutral";break;case n0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $a=new P;function G_(){mt.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function X_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ur(i){return i!==""}function wf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(i){return i.replace(Y_,$_)}var j_=new Map;function $_(i,e){let t=dt[e];if(t===void 0){let n=j_.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bh(t)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(Z_,K_)}function K_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function J_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===np?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function tM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sp:e="ENVMAP_BLENDING_MULTIPLY";break;case t0:e="ENVMAP_BLENDING_MIX";break;case i0:e="ENVMAP_BLENDING_ADD";break}return e}function iM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=J_(t),c=Q_(t),h=eM(t),u=tM(t),d=iM(t),f=W_(t),m=X_(r),y=s.createProgram(),p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ur).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ur).join(`
`),g.length>0&&(g+=`
`)):(p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),g=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?dt.tonemapping_pars_fragment:"",t.toneMapping!==On?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),G_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=bh(a),a=wf(a,t),a=Tf(a,t),o=bh(o),o=wf(o,t),o=Tf(o,t),a=Af(a),o=Af(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+p+a,M=x+g+o,L=bf(s,s.VERTEX_SHADER,v),C=bf(s,s.FRAGMENT_SHADER,M);s.attachShader(y,L),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(w){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(L).trim(),N=s.getShaderInfoLog(C).trim(),Y=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,C);else{let ee=Sf(s,L,"vertex"),G=Sf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ee+`
`+G)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(B===""||N==="")&&(V=!1);V&&(w.diagnostics={runnable:Y,programLog:$,vertexShader:{log:B,prefix:p},fragmentShader:{log:N,prefix:g}})}s.deleteShader(L),s.deleteShader(C),D=new $s(s,y),Z=q_(s,y)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let Z;this.getAttributes=function(){return Z===void 0&&A(this),Z};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,F_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=C,this}var sM=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}};function rM(i,e,t,n,s,r,a){let o=new Xr,l=new Sh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,w,$,B,N){let Y=B.fog,V=N.geometry,ee=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||ee),pe=G&&G.mapping===el?G.image.height:null,de=y[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=oe!==void 0?oe.length:0,rt=0;V.morphAttributes.position!==void 0&&(rt=1),V.morphAttributes.normal!==void 0&&(rt=2),V.morphAttributes.color!==void 0&&(rt=3);let Q,le,Ue,be;if(de){let te=Qi[de];Q=te.vertexShader,le=te.fragmentShader}else Q=_.vertexShader,le=_.fragmentShader,l.update(_),Ue=l.getVertexShaderID(_),be=l.getFragmentShaderID(_);let qe=i.getRenderTarget(),Ke=N.isInstancedMesh===!0,je=N.isBatchedMesh===!0,lt=!!_.map,he=!!_.matcap,I=!!G,Te=!!_.aoMap,xe=!!_.lightMap,H=!!_.bumpMap,ye=!!_.normalMap,Pe=!!_.displacementMap,ve=!!_.emissiveMap,E=!!_.metalnessMap,S=!!_.roughnessMap,j=_.anisotropy>0,re=_.clearcoat>0,ce=_.dispersion>0,ne=_.iridescence>0,ke=_.sheen>0,_e=_.transmission>0,Ae=j&&!!_.anisotropyMap,Qe=re&&!!_.clearcoatMap,me=re&&!!_.clearcoatNormalMap,Ce=re&&!!_.clearcoatRoughnessMap,$e=ne&&!!_.iridescenceMap,We=ne&&!!_.iridescenceThicknessMap,Oe=ke&&!!_.sheenColorMap,pt=ke&&!!_.sheenRoughnessMap,tt=!!_.specularMap,bt=!!_.specularColorMap,z=!!_.specularIntensityMap,Fe=_e&&!!_.transmissionMap,ie=_e&&!!_.thicknessMap,b=!!_.gradientMap,R=!!_.alphaMap,U=_.alphaTest>0,O=!!_.alphaHash,W=!!_.extensions,X=On;_.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(X=i.toneMapping);let K={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:le,defines:_.defines,customVertexShaderID:Ue,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:je,batchingColor:je&&N._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&N.instanceColor!==null,instancingMorph:Ke&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:qe===null?i.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Vt,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:he,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:pe,aoMap:Te,lightMap:xe,bumpMap:H,normalMap:ye,displacementMap:f&&Pe,emissiveMap:ve,normalMapObjectSpace:ye&&_.normalMapType===l0,normalMapTangentSpace:ye&&_.normalMapType===mp,metalnessMap:E,roughnessMap:S,anisotropy:j,anisotropyMap:Ae,clearcoat:re,clearcoatMap:Qe,clearcoatNormalMap:me,clearcoatRoughnessMap:Ce,dispersion:ce,iridescence:ne,iridescenceMap:$e,iridescenceThicknessMap:We,sheen:ke,sheenColorMap:Oe,sheenRoughnessMap:pt,specularMap:tt,specularColorMap:bt,specularIntensityMap:z,transmission:_e,transmissionMap:Fe,thicknessMap:ie,gradientMap:b,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:R,alphaTest:U,alphaHash:O,combine:_.combine,mapUv:lt&&p(_.map.channel),aoMapUv:Te&&p(_.aoMap.channel),lightMapUv:xe&&p(_.lightMap.channel),bumpMapUv:H&&p(_.bumpMap.channel),normalMapUv:ye&&p(_.normalMap.channel),displacementMapUv:Pe&&p(_.displacementMap.channel),emissiveMapUv:ve&&p(_.emissiveMap.channel),metalnessMapUv:E&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:Ae&&p(_.anisotropyMap.channel),clearcoatMapUv:Qe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:We&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(_.sheenRoughnessMap.channel),specularMapUv:tt&&p(_.specularMap.channel),specularColorMapUv:bt&&p(_.specularColorMap.channel),specularIntensityMapUv:z&&p(_.specularIntensityMap.channel),transmissionMapUv:Fe&&p(_.transmissionMap.channel),thicknessMapUv:ie&&p(_.thicknessMap.channel),alphaMapUv:R&&p(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ye||j),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(lt||R),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ii,flipSided:_.side===si,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:W&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(W&&_.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return K.vertexUv1s=c.has(1),K.vertexUv2s=c.has(2),K.vertexUv3s=c.has(3),c.clear(),K}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let $ in _.defines)w.push($),w.push(_.defines[$]);return _.isRawShaderMaterial===!1&&(v(w,_),M(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function L(_){let w=y[_.type],$;if(w){let B=Qi[w];$=Xn.clone(B.uniforms)}else $=_.uniforms;return $}function C(_,w){let $;for(let B=0,N=h.length;B<N;B++){let Y=h[B];if(Y.cacheKey===w){$=Y,++$.usedTimes;break}}return $===void 0&&($=new nM(i,w,_,r),h.push($)),$}function A(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function D(_){l.remove(_)}function Z(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:Z}}function aM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function oM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,y,p){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:p},i[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=y,g.group=p),e++,g}function o(u,d,f,m,y,p){let g=a(u,d,f,m,y,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(u,d,f,m,y,p){let g=a(u,d,f,m,y,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||oM),n.length>1&&n.sort(d||Cf),s.length>1&&s.sort(d||Cf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rf,i.set(n,[a])):s>=r.length?(a=new Rf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ge};break;case"SpotLight":t={position:new P,direction:new P,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function hM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var uM=0;function dM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fM(i){let e=new cM,t=hM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ne,a=new Ne;function o(c){let h=0,u=0,d=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,x=0,v=0,M=0,L=0,C=0,A=0;c.sort(dM);for(let Z=0,_=c.length;Z<_;Z++){let w=c[Z],$=w.color,B=w.intensity,N=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=$.r*B,u+=$.g*B,d+=$.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],B);A++}else if(w.isDirectionalLight){let V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ee=w.shadow,G=t.get(w);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=w.shadow.matrix,x++}n.directional[f]=V,f++}else if(w.isSpotLight){let V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy($).multiplyScalar(B),V.distance=N,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[y]=V;let ee=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,ee.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[y]=ee.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=Y,M++}y++}else if(w.isRectAreaLight){let V=e.get(w);V.color.copy($).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){let V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let ee=w.shadow,G=t.get(w);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=w.shadow.matrix,v++}n.point[m]=V,m++}else if(w.isHemisphereLight){let V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[g]=V,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==p||D.hemiLength!==g||D.numDirectionalShadows!==x||D.numPointShadows!==v||D.numSpotShadows!==M||D.numSpotMaps!==L||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,D.directionalLength=f,D.pointLength=m,D.spotLength=y,D.rectAreaLength=p,D.hemiLength=g,D.numDirectionalShadows=x,D.numPointShadows=v,D.numSpotShadows=M,D.numSpotMaps=L,D.numLightProbes=A,n.version=uM++)}function l(c,h){let u=0,d=0,f=0,m=0,y=0,p=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){let v=c[g];if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function Pf(i){let e=new fM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Pf(i),e.set(s,[o])):r>=a.length?(o=new Pf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Th=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ah=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`;function vM(i,e,t){let n=new Bn,s=new se,r=new se,a=new xt,o=new Th({depthPacking:o0}),l=new Ah,c={},h=t.maxTextureSize,u={[nn]:si,[si]:nn,[ii]:ii},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ft(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=np;let g=this.type;this.render=function(C,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let Z=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),$=i.state;$.setBlending(tn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let B=g!==pn&&this.type===pn,N=g===pn&&this.type!==pn;for(let Y=0,V=C.length;Y<V;Y++){let ee=C[Y],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let pe=G.getFrameExtents();if(s.multiply(pe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,G.mapSize.y=r.y)),G.map===null||B===!0||N===!0){let oe=this.type!==pn?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new Ft(s.x,s.y,oe),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let de=G.getViewportCount();for(let oe=0;oe<de;oe++){let Ze=G.getViewport(oe);a.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),$.viewport(a),G.updateMatrices(ee,oe),n=G.getFrustum(),M(A,D,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&x(G,D),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(Z,_,w)};function x(C,A){let D=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ft(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,D,f,y,null)}function v(C,A,D,Z){let _=null,w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=_.uuid,B=A.uuid,N=c[$];N===void 0&&(N={},c[$]=N);let Y=N[B];Y===void 0&&(Y=_.clone(),N[B]=Y,A.addEventListener("dispose",L)),_=Y}if(_.visible=A.visible,_.wireframe=A.wireframe,Z===pn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let $=i.properties.get(_);$.light=D}return _}function M(C,A,D,Z,_){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let B=e.update(C),N=C.material;if(Array.isArray(N)){let Y=B.groups;for(let V=0,ee=Y.length;V<ee;V++){let G=Y[V],pe=N[G.materialIndex];if(pe&&pe.visible){let de=v(C,pe,Z,_);C.onBeforeShadow(i,C,A,D,B,de,G),i.renderBufferDirect(D,null,B,de,C,G),C.onAfterShadow(i,C,A,D,B,de,G)}}}else if(N.visible){let Y=v(C,N,Z,_);C.onBeforeShadow(i,C,A,D,B,Y,null),i.renderBufferDirect(D,null,B,Y,C,null),C.onAfterShadow(i,C,A,D,B,Y,null)}}let $=C.children;for(let B=0,N=$.length;B<N;B++)M($[B],A,D,Z,_)}function L(C){C.target.removeEventListener("dispose",L);for(let D in c){let Z=c[D],_=C.target.uuid;_ in Z&&(Z[_].dispose(),delete Z[_])}}}var yM={[Dc]:Uc,[Nc]:fo,[Oc]:Bc,[Ks]:Fc,[Uc]:Dc,[fo]:Nc,[Bc]:Oc,[Fc]:Ks};function xM(i){function e(){let z=!1,Fe=new xt,ie=null,b=new xt(0,0,0,0);return{setMask:function(R){ie!==R&&!z&&(i.colorMask(R,R,R,R),ie=R)},setLocked:function(R){z=R},setClear:function(R,U,O,W,X){X===!0&&(R*=W,U*=W,O*=W),Fe.set(R,U,O,W),b.equals(Fe)===!1&&(i.clearColor(R,U,O,W),b.copy(Fe))},reset:function(){z=!1,ie=null,b.set(-1,0,0,0)}}}function t(){let z=!1,Fe=!1,ie=null,b=null,R=null;return{setReversed:function(U){Fe=U},setTest:function(U){U?Ue(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(U){ie!==U&&!z&&(i.depthMask(U),ie=U)},setFunc:function(U){if(Fe&&(U=yM[U]),b!==U){switch(U){case Dc:i.depthFunc(i.NEVER);break;case Uc:i.depthFunc(i.ALWAYS);break;case Nc:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case Bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}b=U}},setLocked:function(U){z=U},setClear:function(U){R!==U&&(i.clearDepth(U),R=U)},reset:function(){z=!1,ie=null,b=null,R=null}}}function n(){let z=!1,Fe=null,ie=null,b=null,R=null,U=null,O=null,W=null,X=null;return{setTest:function(K){z||(K?Ue(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(K){Fe!==K&&!z&&(i.stencilMask(K),Fe=K)},setFunc:function(K,te,ae){(ie!==K||b!==te||R!==ae)&&(i.stencilFunc(K,te,ae),ie=K,b=te,R=ae)},setOp:function(K,te,ae){(U!==K||O!==te||W!==ae)&&(i.stencilOp(K,te,ae),U=K,O=te,W=ae)},setLocked:function(K){z=K},setClear:function(K){X!==K&&(i.clearStencil(K),X=K)},reset:function(){z=!1,Fe=null,ie=null,b=null,R=null,U=null,O=null,W=null,X=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,y=null,p=null,g=null,x=null,v=null,M=null,L=null,C=new ge(0,0,0),A=0,D=!1,Z=null,_=null,w=null,$=null,B=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,V=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=V>=2);let G=null,pe={},de=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ze=new xt().fromArray(de),rt=new xt().fromArray(oe);function Q(z,Fe,ie,b){let R=new Uint8Array(4),U=i.createTexture();i.bindTexture(z,U),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let O=0;O<ie;O++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,b,0,i.RGBA,i.UNSIGNED_BYTE,R):i.texImage2D(Fe+O,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,R);return U}let le={};le[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Ue(i.DEPTH_TEST),r.setFunc(Ks),xe(!1),H(Nd),Ue(i.CULL_FACE),I(tn);function Ue(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function be(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function qe(z,Fe){return h[z]!==Fe?(i.bindFramebuffer(z,Fe),h[z]=Fe,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Fe),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ke(z,Fe){let ie=d,b=!1;if(z){ie=u.get(Fe),ie===void 0&&(ie=[],u.set(Fe,ie));let R=z.textures;if(ie.length!==R.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let U=0,O=R.length;U<O;U++)ie[U]=i.COLOR_ATTACHMENT0+U;ie.length=R.length,b=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,b=!0);b&&i.drawBuffers(ie)}function je(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let lt={[hs]:i.FUNC_ADD,[kg]:i.FUNC_SUBTRACT,[Vg]:i.FUNC_REVERSE_SUBTRACT};lt[Hg]=i.MIN,lt[Gg]=i.MAX;let he={[Kh]:i.ZERO,[Jh]:i.ONE,[Wg]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Zg]:i.SRC_ALPHA_SATURATE,[jg]:i.DST_COLOR,[qg]:i.DST_ALPHA,[Xg]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[$g]:i.ONE_MINUS_DST_COLOR,[Yg]:i.ONE_MINUS_DST_ALPHA,[Kg]:i.CONSTANT_COLOR,[Jg]:i.ONE_MINUS_CONSTANT_COLOR,[Qg]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function I(z,Fe,ie,b,R,U,O,W,X,K){if(z===tn){m===!0&&(be(i.BLEND),m=!1);return}if(m===!1&&(Ue(i.BLEND),m=!0),z!==Zh){if(z!==y||K!==D){if((p!==hs||v!==hs)&&(i.blendEquation(i.FUNC_ADD),p=hs,v=hs),K)switch(z){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,x=null,M=null,L=null,C.set(0,0,0),A=0,y=z,D=K}return}R=R||Fe,U=U||ie,O=O||b,(Fe!==p||R!==v)&&(i.blendEquationSeparate(lt[Fe],lt[R]),p=Fe,v=R),(ie!==g||b!==x||U!==M||O!==L)&&(i.blendFuncSeparate(he[ie],he[b],he[U],he[O]),g=ie,x=b,M=U,L=O),(W.equals(C)===!1||X!==A)&&(i.blendColor(W.r,W.g,W.b,X),C.copy(W),A=X),y=z,D=!1}function Te(z,Fe){z.side===ii?be(i.CULL_FACE):Ue(i.CULL_FACE);let ie=z.side===si;Fe&&(ie=!ie),xe(ie),z.blending===qs&&z.transparent===!1?I(tn):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let b=z.stencilWrite;a.setTest(b),b&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(z){Z!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),Z=z)}function H(z){z!==Fg?(Ue(i.CULL_FACE),z!==_&&(z===Nd?i.cullFace(i.BACK):z===Bg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),_=z}function ye(z){z!==w&&(Y&&i.lineWidth(z),w=z)}function Pe(z,Fe,ie){z?(Ue(i.POLYGON_OFFSET_FILL),($!==Fe||B!==ie)&&(i.polygonOffset(Fe,ie),$=Fe,B=ie)):be(i.POLYGON_OFFSET_FILL)}function ve(z){z?Ue(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function E(z){z===void 0&&(z=i.TEXTURE0+N-1),G!==z&&(i.activeTexture(z),G=z)}function S(z,Fe,ie){ie===void 0&&(G===null?ie=i.TEXTURE0+N-1:ie=G);let b=pe[ie];b===void 0&&(b={type:void 0,texture:void 0},pe[ie]=b),(b.type!==z||b.texture!==Fe)&&(G!==ie&&(i.activeTexture(ie),G=ie),i.bindTexture(z,Fe||le[z]),b.type=z,b.texture=Fe)}function j(){let z=pe[G];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(z){Ze.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ze.copy(z))}function Oe(z){rt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function pt(z,Fe){let ie=l.get(Fe);ie===void 0&&(ie=new WeakMap,l.set(Fe,ie));let b=ie.get(z);b===void 0&&(b=i.getUniformBlockIndex(Fe,z.name),ie.set(z,b))}function tt(z,Fe){let b=l.get(Fe).get(z);o.get(Fe)!==b&&(i.uniformBlockBinding(Fe,b,z.__bindingPointIndex),o.set(Fe,b))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,pe={},h={},u=new WeakMap,d=[],f=null,m=!1,y=null,p=null,g=null,x=null,v=null,M=null,L=null,C=new ge(0,0,0),A=0,D=!1,Z=null,_=null,w=null,$=null,B=null,Ze.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Ue,disable:be,bindFramebuffer:qe,drawBuffers:Ke,useProgram:je,setBlending:I,setMaterial:Te,setFlipSided:xe,setCullFace:H,setLineWidth:ye,setPolygonOffset:Pe,setScissorTest:ve,activeTexture:E,bindTexture:S,unbindTexture:j,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:Ce,texImage3D:$e,updateUBOMapping:pt,uniformBlockBinding:tt,texStorage2D:Qe,texStorage3D:me,texSubImage2D:ne,texSubImage3D:ke,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ae,scissor:We,viewport:Oe,reset:bt}}function _M(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function MM(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function bM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Eh(i,e,t,n){let s=SM(n);switch(t){case cp:return i*e;case up:return i*e;case dp:return i*e*2;case tl:return i*e/s.components*s.byteLength;case lu:return i*e/s.components*s.byteLength;case cu:return i*e*2/s.components*s.byteLength;case hu:return i*e*2/s.components*s.byteLength;case hp:return i*e*3/s.components*s.byteLength;case Oi:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Vc:case Gc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case lh:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fp:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uh:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SM(i){switch(i){case rn:case ap:return{byteLength:1,components:1};case Hr:case op:case yi:return{byteLength:2,components:1};case au:case ou:return{byteLength:2,components:4};case ds:case ru:case Ni:return{byteLength:4,components:1};case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var pu={contain:_M,cover:MM,fill:bM,getByteLength:Eh};function wM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return f?new OffscreenCanvas(E,S):Gr("canvas")}function y(E,S,j){let re=1,ce=ve(E);if((ce.width>j||ce.height>j)&&(re=j/Math.max(ce.width,ce.height)),re<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ne=Math.floor(re*ce.width),ke=Math.floor(re*ce.height);u===void 0&&(u=m(ne,ke));let _e=S?m(ne,ke):u;return _e.width=ne,_e.height=ke,_e.getContext("2d").drawImage(E,0,0,ne,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+ke+")."),_e}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Kt&&E.minFilter!==ni}function g(E){i.generateMipmap(E)}function x(E,S,j,re,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=S;if(S===i.RED&&(j===i.FLOAT&&(ne=i.R32F),j===i.HALF_FLOAT&&(ne=i.R16F),j===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.R8UI),j===i.UNSIGNED_SHORT&&(ne=i.R16UI),j===i.UNSIGNED_INT&&(ne=i.R32UI),j===i.BYTE&&(ne=i.R8I),j===i.SHORT&&(ne=i.R16I),j===i.INT&&(ne=i.R32I)),S===i.RG&&(j===i.FLOAT&&(ne=i.RG32F),j===i.HALF_FLOAT&&(ne=i.RG16F),j===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RG8UI),j===i.UNSIGNED_SHORT&&(ne=i.RG16UI),j===i.UNSIGNED_INT&&(ne=i.RG32UI),j===i.BYTE&&(ne=i.RG8I),j===i.SHORT&&(ne=i.RG16I),j===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),j===i.UNSIGNED_INT&&(ne=i.RGB32UI),j===i.BYTE&&(ne=i.RGB8I),j===i.SHORT&&(ne=i.RGB16I),j===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),j===i.UNSIGNED_INT&&(ne=i.RGBA32UI),j===i.BYTE&&(ne=i.RGBA8I),j===i.SHORT&&(ne=i.RGBA16I),j===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),S===i.RGBA){let ke=ce?po:mt.getTransfer(re);j===i.FLOAT&&(ne=i.RGBA32F),j===i.HALF_FLOAT&&(ne=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ne=ke===Ct?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(E,S){let j;return E?S===null||S===ds||S===er?j=i.DEPTH24_STENCIL8:S===Ni?j=i.DEPTH32F_STENCIL8:S===Hr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===er?j=i.DEPTH_COMPONENT24:S===Ni?j=i.DEPTH_COMPONENT32F:S===Hr&&(j=i.DEPTH_COMPONENT16),j}function M(E,S){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==ni?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function L(E){let S=E.target;S.removeEventListener("dispose",L),A(S),S.isVideoTexture&&h.delete(S)}function C(E){let S=E.target;S.removeEventListener("dispose",C),Z(S)}function A(E){let S=n.get(E);if(S.__webglInit===void 0)return;let j=E.source,re=d.get(j);if(re){let ce=re[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(E),Object.keys(re).length===0&&d.delete(j)}n.remove(E)}function D(E){let S=n.get(E);i.deleteTexture(S.__webglTexture);let j=E.source,re=d.get(j);delete re[S.__cacheKey],a.memory.textures--}function Z(E){let S=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let ce=0;ce<S.__webglFramebuffer[re].length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[re][ce]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=E.textures;for(let re=0,ce=j.length;re<ce;re++){let ne=n.get(j[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(j[re])}n.remove(E)}let _=0;function w(){_=0}function $(){let E=_;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),_+=1,E}function B(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function N(E,S){let j=n.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){let re=E.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(j,E,S);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function Y(E,S){let j=n.get(E);if(E.version>0&&j.__version!==E.version){rt(j,E,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function V(E,S){let j=n.get(E);if(E.version>0&&j.__version!==E.version){rt(j,E,S);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function ee(E,S){let j=n.get(E);if(E.version>0&&j.__version!==E.version){Q(j,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let G={[sn]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},pe={[Kt]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},de={[c0]:i.NEVER,[m0]:i.ALWAYS,[h0]:i.LESS,[gp]:i.LEQUAL,[u0]:i.EQUAL,[p0]:i.GEQUAL,[d0]:i.GREATER,[f0]:i.NOTEQUAL};function oe(E,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ni||S.magFilter===Nr||S.magFilter===Gs||S.magFilter===Ui||S.minFilter===ni||S.minFilter===Nr||S.minFilter===Gs||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,G[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,pe[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==Gs&&S.minFilter!==Ui||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(E,S){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",L));let re=S.source,ce=d.get(re);ce===void 0&&(ce={},d.set(re,ce));let ne=B(S);if(ne!==E.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ce[ne].usedTimes++;let ke=ce[E.__cacheKey];ke!==void 0&&(ce[E.__cacheKey].usedTimes--,ke.usedTimes===0&&D(S)),E.__cacheKey=ne,E.__webglTexture=ce[ne].texture}return j}function rt(E,S,j){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);let ce=Ze(E,S),ne=S.source;t.bindTexture(re,E.__webglTexture,i.TEXTURE0+j);let ke=n.get(ne);if(ne.version!==ke.__version||ce===!0){t.activeTexture(i.TEXTURE0+j);let _e=mt.getPrimaries(mt.workingColorSpace),Ae=S.colorSpace===en?null:mt.getPrimaries(S.colorSpace),Qe=S.colorSpace===en||_e===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=y(S.image,!1,s.maxTextureSize);me=Pe(S,me);let Ce=r.convert(S.format,S.colorSpace),$e=r.convert(S.type),We=x(S.internalFormat,Ce,$e,S.colorSpace,S.isVideoTexture);oe(re,S);let Oe,pt=S.mipmaps,tt=S.isVideoTexture!==!0,bt=ke.__version===void 0||ce===!0,z=ne.dataReady,Fe=M(S,me);if(S.isDepthTexture)We=v(S.format===tr,S.type),bt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,We,me.width,me.height,0,Ce,$e,null));else if(S.isDataTexture)if(pt.length>0){tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Fe,We,pt[0].width,pt[0].height);for(let ie=0,b=pt.length;ie<b;ie++)Oe=pt[ie],tt?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ce,$e,Oe.data):t.texImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Ce,$e,Oe.data);S.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(i.TEXTURE_2D,Fe,We,me.width,me.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ce,$e,me.data)):t.texImage2D(i.TEXTURE_2D,0,We,me.width,me.height,0,Ce,$e,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,We,pt[0].width,pt[0].height,me.depth);for(let ie=0,b=pt.length;ie<b;ie++)if(Oe=pt[ie],S.format!==Oi)if(Ce!==null)if(tt){if(z)if(S.layerUpdates.size>0){let R=Eh(Oe.width,Oe.height,S.format,S.type);for(let U of S.layerUpdates){let O=Oe.data.subarray(U*R/Oe.data.BYTES_PER_ELEMENT,(U+1)*R/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,U,Oe.width,Oe.height,1,Ce,O,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,me.depth,Ce,Oe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,We,Oe.width,Oe.height,me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,me.depth,Ce,$e,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,We,Oe.width,Oe.height,me.depth,0,Ce,$e,Oe.data)}else{tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Fe,We,pt[0].width,pt[0].height);for(let ie=0,b=pt.length;ie<b;ie++)Oe=pt[ie],S.format!==Oi?Ce!==null?tt?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ce,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ce,$e,Oe.data):t.texImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Ce,$e,Oe.data)}else if(S.isDataArrayTexture)if(tt){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,We,me.width,me.height,me.depth),z)if(S.layerUpdates.size>0){let ie=Eh(me.width,me.height,S.format,S.type);for(let b of S.layerUpdates){let R=me.data.subarray(b*ie/me.data.BYTES_PER_ELEMENT,(b+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,b,me.width,me.height,1,Ce,$e,R)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,$e,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,Ce,$e,me.data);else if(S.isData3DTexture)tt?(bt&&t.texStorage3D(i.TEXTURE_3D,Fe,We,me.width,me.height,me.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,$e,me.data)):t.texImage3D(i.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,Ce,$e,me.data);else if(S.isFramebufferTexture){if(bt)if(tt)t.texStorage2D(i.TEXTURE_2D,Fe,We,me.width,me.height);else{let ie=me.width,b=me.height;for(let R=0;R<Fe;R++)t.texImage2D(i.TEXTURE_2D,R,We,ie,b,0,Ce,$e,null),ie>>=1,b>>=1}}else if(pt.length>0){if(tt&&bt){let ie=ve(pt[0]);t.texStorage2D(i.TEXTURE_2D,Fe,We,ie.width,ie.height)}for(let ie=0,b=pt.length;ie<b;ie++)Oe=pt[ie],tt?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ce,$e,Oe):t.texImage2D(i.TEXTURE_2D,ie,We,Ce,$e,Oe);S.generateMipmaps=!1}else if(tt){if(bt){let ie=ve(me);t.texStorage2D(i.TEXTURE_2D,Fe,We,ie.width,ie.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,$e,me)}else t.texImage2D(i.TEXTURE_2D,0,We,Ce,$e,me);p(S)&&g(re),ke.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Q(E,S,j){if(S.image.length!==6)return;let re=Ze(E,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+j);let ne=n.get(ce);if(ce.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+j);let ke=mt.getPrimaries(mt.workingColorSpace),_e=S.colorSpace===en?null:mt.getPrimaries(S.colorSpace),Ae=S.colorSpace===en||ke===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let b=0;b<6;b++)!Qe&&!me?Ce[b]=y(S.image[b],!0,s.maxCubemapSize):Ce[b]=me?S.image[b].image:S.image[b],Ce[b]=Pe(S,Ce[b]);let $e=Ce[0],We=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),pt=x(S.internalFormat,We,Oe,S.colorSpace),tt=S.isVideoTexture!==!0,bt=ne.__version===void 0||re===!0,z=ce.dataReady,Fe=M(S,$e);oe(i.TEXTURE_CUBE_MAP,S);let ie;if(Qe){tt&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,pt,$e.width,$e.height);for(let b=0;b<6;b++){ie=Ce[b].mipmaps;for(let R=0;R<ie.length;R++){let U=ie[R];S.format!==Oi?We!==null?tt?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R,0,0,U.width,U.height,We,U.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R,pt,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R,0,0,U.width,U.height,We,Oe,U.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R,pt,U.width,U.height,0,We,Oe,U.data)}}}else{if(ie=S.mipmaps,tt&&bt){ie.length>0&&Fe++;let b=ve(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,pt,b.width,b.height)}for(let b=0;b<6;b++)if(me){tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Ce[b].width,Ce[b].height,We,Oe,Ce[b].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,pt,Ce[b].width,Ce[b].height,0,We,Oe,Ce[b].data);for(let R=0;R<ie.length;R++){let O=ie[R].image[b].image;tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R+1,0,0,O.width,O.height,We,Oe,O.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R+1,pt,O.width,O.height,0,We,Oe,O.data)}}else{tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,We,Oe,Ce[b]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,pt,We,Oe,Ce[b]);for(let R=0;R<ie.length;R++){let U=ie[R];tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R+1,0,0,We,Oe,U.image[b]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,R+1,pt,We,Oe,U.image[b])}}}p(S)&&g(i.TEXTURE_CUBE_MAP),ne.__version=ce.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function le(E,S,j,re,ce,ne){let ke=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Ae=x(j.internalFormat,ke,_e,j.colorSpace);if(!n.get(S).__hasExternalTextures){let me=Math.max(1,S.width>>ne),Ce=Math.max(1,S.height>>ne);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,Ae,me,Ce,S.depth,0,ke,_e,null):t.texImage2D(ce,ne,Ae,me,Ce,0,ke,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),H(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ce,n.get(j).__webglTexture,0,xe(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ce,n.get(j).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(E,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer){let re=S.depthTexture,ce=re&&re.isDepthTexture?re.type:null,ne=v(S.stencilBuffer,ce),ke=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=xe(S);H(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ne,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,E)}else{let re=S.textures;for(let ce=0;ce<re.length;ce++){let ne=re[ce],ke=r.convert(ne.format,ne.colorSpace),_e=r.convert(ne.type),Ae=x(ne.internalFormat,ke,_e,ne.colorSpace),Qe=xe(S);j&&H(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ae,S.width,S.height):H(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let re=n.get(S.depthTexture).__webglTexture,ce=xe(S);if(S.depthTexture.format===Ys)H(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===tr)H(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function qe(E){let S=n.get(E),j=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let re=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",ce)};re.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=re}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,E)}else if(j){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[re],E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,E,!1);else{let re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,S,j){let re=n.get(E);S!==void 0&&le(re.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&qe(E)}function je(E){let S=E.texture,j=n.get(E),re=n.get(S);E.addEventListener("dispose",C);let ce=E.textures,ne=E.isWebGLCubeRenderTarget===!0,ke=ce.length>1;if(ke||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,a.memory.textures++),ne){j.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[_e]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)j.__webglFramebuffer[_e][Ae]=i.createFramebuffer()}else j.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)j.__webglFramebuffer[_e]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ke)for(let _e=0,Ae=ce.length;_e<Ae;_e++){let Qe=n.get(ce[_e]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&H(E)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){let Ae=ce[_e];j.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_e]);let Qe=r.convert(Ae.format,Ae.colorSpace),me=r.convert(Ae.type),Ce=x(Ae.internalFormat,Qe,me,Ae.colorSpace,E.isXRRenderTarget===!0),$e=xe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ce,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,j.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),oe(i.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)le(j.__webglFramebuffer[_e][Ae],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae);else le(j.__webglFramebuffer[_e],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(S)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let _e=0,Ae=ce.length;_e<Ae;_e++){let Qe=ce[_e],me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),oe(i.TEXTURE_2D,Qe),le(j.__webglFramebuffer,E,Qe,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),p(Qe)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),oe(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)le(j.__webglFramebuffer[Ae],E,S,i.COLOR_ATTACHMENT0,_e,Ae);else le(j.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,_e,0);p(S)&&g(_e),t.unbindTexture()}E.depthBuffer&&qe(E)}function lt(E){let S=E.textures;for(let j=0,re=S.length;j<re;j++){let ce=S[j];if(p(ce)){let ne=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=n.get(ce).__webglTexture;t.bindTexture(ne,ke),g(ne),t.unbindTexture()}}}let he=[],I=[];function Te(E){if(E.samples>0){if(H(E)===!1){let S=E.textures,j=E.width,re=E.height,ce=i.COLOR_BUFFER_BIT,ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(E),_e=S.length>1;if(_e)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);let Qe=n.get(S[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,j,re,0,0,j,re,ce,i.NEAREST),l===!0&&(he.length=0,I.length=0,he.push(i.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(ne),I.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);let Qe=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let S=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function xe(E){return Math.min(s.maxSamples,E.samples)}function H(E){let S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(E){let S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Pe(E,S){let j=E.colorSpace,re=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||j!==Vt&&j!==en&&(mt.getTransfer(j)===Ct?(re!==Oi||ce!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=w,this.setTexture2D=N,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=Ke,this.setupRenderTarget=je,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=H}function TM(i,e){function t(n,s=en){let r,a=mt.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ap)return i.BYTE;if(n===op)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===ru)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===cp)return i.ALPHA;if(n===hp)return i.RGB;if(n===Oi)return i.RGBA;if(n===up)return i.LUMINANCE;if(n===dp)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===lu)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===hu)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===co)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===qc)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===$c||n===Zc||n===Kc||n===Jc||n===Qc||n===eh||n===th||n===ih||n===nh||n===sh||n===rh||n===ah||n===oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===lh||n===ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fp||n===hh||n===uh||n===dh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ch=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},AM={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:EM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,y=new Rh,p=t.getContextAttributes(),g=null,x=null,v=[],M=[],L=new se,C=null,A=new Ot;A.layers.enable(1),A.viewport=new xt;let D=new Ot;D.layers.enable(2),D.viewport=new xt;let Z=[A,D],_=new Ch;_.layers.enable(1),_.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=v[Q];return le===void 0&&(le=new Br,v[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=v[Q];return le===void 0&&(le=new Br,v[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=v[Q];return le===void 0&&(le=new Br,v[Q]=le),le.getHandSpace()};function B(Q){let le=M.indexOf(Q.inputSource);if(le===-1)return;let Ue=v[le];Ue!==void 0&&(Ue.update(Q.inputSource,Q.frame,c||a),Ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<v.length;Q++){let le=M[Q];le!==null&&(M[Q]=null,v[Q].disconnect(le))}w=null,$=null,y.reset(),e.setRenderTarget(g),f=null,d=null,u=null,s=null,x=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",N),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ft(f.framebufferWidth,f.framebufferHeight,{format:Oi,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Ue=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?tr:Ys,Ue=p.stencil?er:ds);let qe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ft(d.textureWidth,d.textureHeight,{format:Oi,type:rn,depthTexture:new wo(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(Q){for(let le=0;le<Q.removed.length;le++){let Ue=Q.removed[le],be=M.indexOf(Ue);be>=0&&(M[be]=null,v[be].disconnect(Ue))}for(let le=0;le<Q.added.length;le++){let Ue=Q.added[le],be=M.indexOf(Ue);if(be===-1){for(let Ke=0;Ke<v.length;Ke++)if(Ke>=M.length){M.push(Ue),be=Ke;break}else if(M[Ke]===null){M[Ke]=Ue,be=Ke;break}if(be===-1)break}let qe=v[be];qe&&qe.connect(Ue)}}let V=new P,ee=new P;function G(Q,le,Ue){V.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(Ue.matrixWorld);let be=V.distanceTo(ee),qe=le.projectionMatrix.elements,Ke=Ue.projectionMatrix.elements,je=qe[14]/(qe[10]-1),lt=qe[14]/(qe[10]+1),he=(qe[9]+1)/qe[5],I=(qe[9]-1)/qe[5],Te=(qe[8]-1)/qe[0],xe=(Ke[8]+1)/Ke[0],H=je*Te,ye=je*xe,Pe=be/(-Te+xe),ve=Pe*-Te;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),qe[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let E=je+Pe,S=lt+Pe,j=H-ve,re=ye+(be-ve),ce=he*lt/S*E,ne=I*lt/S*E;Q.projectionMatrix.makePerspective(j,re,ce,ne,E,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let le=Q.near,Ue=Q.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(Ue=y.depthFar)),_.near=D.near=A.near=le,_.far=D.far=A.far=Ue,(w!==_.near||$!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,$=_.far);let be=Q.parent,qe=_.cameras;pe(_,be);for(let Ke=0;Ke<qe.length;Ke++)pe(qe[Ke],be);qe.length===2?G(_,A,D):_.projectionMatrix.copy(A.projectionMatrix),de(Q,_,be)};function de(Q,le,Ue){Ue===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let oe=null;function Ze(Q,le){if(h=le.getViewerPose(c||a),m=le,h!==null){let Ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let be=!1;Ue.length!==_.cameras.length&&(_.cameras.length=0,be=!0);for(let Ke=0;Ke<Ue.length;Ke++){let je=Ue[Ke],lt=null;if(f!==null)lt=f.getViewport(je);else{let I=u.getViewSubImage(d,je);lt=I.viewport,Ke===0&&(e.setRenderTargetTextures(x,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(x))}let he=Z[Ke];he===void 0&&(he=new Ot,he.layers.enable(Ke),he.viewport=new xt,Z[Ke]=he),he.matrix.fromArray(je.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(je.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(lt.x,lt.y,lt.width,lt.height),Ke===0&&(_.matrix.copy(he.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),be===!0&&_.cameras.push(he)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let Ke=u.getDepthInformation(Ue[0]);Ke&&Ke.isValid&&Ke.texture&&y.init(e,Ke,s.renderState)}}for(let Ue=0;Ue<v.length;Ue++){let be=M[Ue],qe=v[Ue];be!==null&&qe!==void 0&&qe.update(be,le,c||a)}oe&&oe(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let rt=new _p;rt.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}},ls=new Bi,RM=new Ne;function PM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xp(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===si&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===si&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x=e.get(g),v=x.envMap,M=x.envMapRotation;v&&(p.envMap.value=v,ls.copy(M),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),p.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(ls)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=v*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",p));let L=v.program;n.updateUBOMapping(x,L);let C=e.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function h(x){let v=u();x.__bindingPointIndex=v;let M=i.createBuffer(),L=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=s[x.id],M=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,A=M.length;C<A;C++){let D=Array.isArray(M[C])?M[C]:[M[C]];for(let Z=0,_=D.length;Z<_;Z++){let w=D[Z];if(f(w,C,Z,L)===!0){let $=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],N=0;for(let Y=0;Y<B.length;Y++){let V=B[Y],ee=y(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,$+N,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,M,L){let C=x.value,A=v+"_"+M;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{let D=L[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function m(x){let v=x.uniforms,M=0,L=16;for(let A=0,D=v.length;A<D;A++){let Z=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,w=Z.length;_<w;_++){let $=Z[_],B=Array.isArray($.value)?$.value:[$.value];for(let N=0,Y=B.length;N<Y;N++){let V=B[N],ee=y(V),G=M%L,pe=G%ee.boundary,de=G+pe;M+=pe,de!==0&&L-de<ee.storage&&(M+=L-de),$.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=ee.storage}}}let C=M%L;return C>0&&(M+=L-C),x.__size=M,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){let v=x.target;v.removeEventListener("dispose",p);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var ar=class{constructor(e={}){let{canvas:t=L0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),m=new Int32Array(4),y=null,p=null,g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=On,this.toneMappingExposure=1;let v=this,M=!1,L=0,C=0,A=null,D=-1,Z=null,_=new xt,w=new xt,$=null,B=new ge(0),N=0,Y=t.width,V=t.height,ee=1,G=null,pe=null,de=new xt(0,0,Y,V),oe=new xt(0,0,Y,V),Ze=!1,rt=new Bn,Q=!1,le=!1,Ue=new Ne,be=new Ne,qe=new P,Ke=new xt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function he(){return A===null?ee:1}let I=n;function Te(T,F){return t.getContext(T,F)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",b,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",U,!1),I===null){let F="webgl2";if(I=Te(F,T),I===null)throw Te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,H,ye,Pe,ve,E,S,j,re,ce,ne,ke,_e,Ae,Qe,me,Ce,$e,We,Oe,pt,tt,bt,z;function Fe(){xe=new Wx(I),xe.init(),tt=new TM(I,xe),H=new Bx(I,xe,e,tt),ye=new xM(I),H.reverseDepthBuffer&&ye.buffers.depth.setReversed(!0),Pe=new Yx(I),ve=new aM,E=new wM(I,xe,ye,ve,H,tt,Pe),S=new kx(v),j=new Gx(v),re=new ev(I),bt=new Ox(I,re),ce=new Xx(I,re,Pe,bt),ne=new $x(I,ce,re,Pe),We=new jx(I,H,E),me=new zx(ve),ke=new rM(v,S,j,xe,H,bt,me),_e=new PM(v,ve),Ae=new lM,Qe=new pM(xe),$e=new Nx(v,S,j,ye,ne,d,l),Ce=new vM(v,ne,H),z=new IM(I,Pe,H,ye),Oe=new Fx(I,xe,Pe),pt=new qx(I,xe,Pe),Pe.programs=ke.programs,v.capabilities=H,v.extensions=xe,v.properties=ve,v.renderLists=Ae,v.shadowMap=Ce,v.state=ye,v.info=Pe}Fe();let ie=new Ph(v,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Y,V,!1))},this.getSize=function(T){return T.set(Y,V)},this.setSize=function(T,F,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,V=F,t.width=Math.floor(T*ee),t.height=Math.floor(F*ee),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*ee,V*ee).floor()},this.setDrawingBufferSize=function(T,F,q){Y=T,V=F,ee=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,F,q,J){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,F,q,J),ye.viewport(_.copy(de).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,F,q,J){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,F,q,J),ye.scissor(w.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){ye.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,F=!0,q=!0){let J=0;if(T){let k=!1;if(A!==null){let fe=A.texture.format;k=fe===il||fe===hu||fe===lu}if(k){let fe=A.texture.type,Me=fe===rn||fe===ds||fe===Hr||fe===er||fe===au||fe===ou,Re=$e.getClearColor(),Le=$e.getClearAlpha(),He=Re.r,Ye=Re.g,Be=Re.b;Me?(f[0]=He,f[1]=Ye,f[2]=Be,f[3]=Le,I.clearBufferuiv(I.COLOR,0,f)):(m[0]=He,m[1]=Ye,m[2]=Be,m[3]=Le,I.clearBufferiv(I.COLOR,0,m))}else J|=I.COLOR_BUFFER_BIT}F&&(J|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",b,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",U,!1),Ae.dispose(),Qe.dispose(),ve.dispose(),S.dispose(),j.dispose(),ne.dispose(),bt.dispose(),z.dispose(),ke.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ue),ie.removeEventListener("sessionend",Se),we.stop()};function b(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=Pe.autoReset,F=Ce.enabled,q=Ce.autoUpdate,J=Ce.needsUpdate,k=Ce.type;Fe(),Pe.autoReset=T,Ce.enabled=F,Ce.autoUpdate=q,Ce.needsUpdate=J,Ce.type=k}function U(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function O(T){let F=T.target;F.removeEventListener("dispose",O),W(F)}function W(T){X(T),ve.remove(T)}function X(T){let F=ve.get(T).programs;F!==void 0&&(F.forEach(function(q){ke.releaseProgram(q)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,J,k,fe){F===null&&(F=je);let Me=k.isMesh&&k.matrixWorld.determinant()<0,Re=et(T,F,q,J,k);ye.setMaterial(J,Me);let Le=q.index,He=1;if(J.wireframe===!0){if(Le=ce.getWireframeAttribute(q),Le===void 0)return;He=2}let Ye=q.drawRange,Be=q.attributes.position,yt=Ye.start*He,St=(Ye.start+Ye.count)*He;fe!==null&&(yt=Math.max(yt,fe.start*He),St=Math.min(St,(fe.start+fe.count)*He)),Le!==null?(yt=Math.max(yt,0),St=Math.min(St,Le.count)):Be!=null&&(yt=Math.max(yt,0),St=Math.min(St,Be.count));let wt=St-yt;if(wt<0||wt===1/0)return;bt.setup(k,J,Re,q,Le);let Dt,ut=Oe;if(Le!==null&&(Dt=re.get(Le),ut=pt,ut.setIndex(Dt)),k.isMesh)J.wireframe===!0?(ye.setLineWidth(J.wireframeLinewidth*he()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(k.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),ye.setLineWidth(Ve*he()),k.isLineSegments?ut.setMode(I.LINES):k.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else k.isPoints?ut.setMode(I.POINTS):k.isSprite&&ut.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ut.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ve=k._multiDrawStarts,Ut=k._multiDrawCounts,_t=k._multiDrawCount,Yt=Le?re.get(Le).bytesPerElement:1,Ht=ve.get(J).currentProgram.getUniforms();for(let Si=0;Si<_t;Si++)Ht.setValue(I,"_gl_DrawID",Si),ut.render(Ve[Si]/Yt,Ut[Si])}else if(k.isInstancedMesh)ut.renderInstances(yt,wt,k.count);else if(q.isInstancedBufferGeometry){let Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ut=Math.min(q.instanceCount,Ve);ut.renderInstances(yt,wt,Ut)}else ut.render(yt,wt)};function K(T,F,q){T.transparent===!0&&T.side===ii&&T.forceSinglePass===!1?(T.side=si,T.needsUpdate=!0,Ee(T,F,q),T.side=nn,T.needsUpdate=!0,Ee(T,F,q),T.side=ii):Ee(T,F,q)}this.compile=function(T,F,q=null){q===null&&(q=T),p=Qe.get(q),p.init(F),x.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==q&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let fe=k.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let Re=fe[Me];K(Re,q,k),J.add(Re)}else K(fe,q,k),J.add(fe)}),x.pop(),p=null,J},this.compileAsync=function(T,F,q=null){let J=this.compile(T,F,q);return new Promise(k=>{function fe(){if(J.forEach(function(Me){ve.get(Me).currentProgram.isReady()&&J.delete(Me)}),J.size===0){k(T);return}setTimeout(fe,10)}xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let te=null;function ae(T){te&&te(T)}function ue(){we.stop()}function Se(){we.start()}let we=new _p;we.setAnimationLoop(ae),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){te=T,ie.setAnimationLoop(T),T===null?we.stop():we.start()},ie.addEventListener("sessionstart",ue),ie.addEventListener("sessionend",Se),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),p=Qe.get(T,x.length),p.init(F),x.push(p),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(be),le=this.localClippingEnabled,Q=me.init(this.clippingPlanes,le),y=Ae.get(T,g.length),y.init(),g.push(y),ie.enabled===!0&&ie.isPresenting===!0){let fe=v.xr.getDepthSensingMesh();fe!==null&&Ie(fe,F,-1/0,v.sortObjects)}Ie(T,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(G,pe),lt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,lt&&$e.addToRenderList(y,T),this.info.render.frame++,Q===!0&&me.beginShadows();let q=p.state.shadowsArray;Ce.render(q,T,F),Q===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=y.opaque,k=y.transmissive;if(p.setupLights(),F.isArrayCamera){let fe=F.cameras;if(k.length>0)for(let Me=0,Re=fe.length;Me<Re;Me++){let Le=fe[Me];Je(J,k,T,Le)}lt&&$e.render(T);for(let Me=0,Re=fe.length;Me<Re;Me++){let Le=fe[Me];ze(y,T,Le,Le.viewport)}}else k.length>0&&Je(J,k,T,F),lt&&$e.render(T),ze(y,T,F);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),bt.resetDefaultState(),D=-1,Z=null,x.pop(),x.length>0?(p=x[x.length-1],Q===!0&&me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function Ie(T,F,q,J){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||rt.intersectsSprite(T)){J&&Ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let Me=ne.update(T),Re=T.material;Re.visible&&y.push(T,Me,Re,q,Ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||rt.intersectsObject(T))){let Me=ne.update(T),Re=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ke.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ke.copy(Me.boundingSphere.center)),Ke.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(Re)){let Le=Me.groups;for(let He=0,Ye=Le.length;He<Ye;He++){let Be=Le[He],yt=Re[Be.materialIndex];yt&&yt.visible&&y.push(T,Me,yt,q,Ke.z,Be)}}else Re.visible&&y.push(T,Me,Re,q,Ke.z,null)}}let fe=T.children;for(let Me=0,Re=fe.length;Me<Re;Me++)Ie(fe[Me],F,q,J)}function ze(T,F,q,J){let k=T.opaque,fe=T.transmissive,Me=T.transparent;p.setupLightsView(q),Q===!0&&me.setGlobalState(v.clippingPlanes,q),J&&ye.viewport(_.copy(J)),k.length>0&&at(k,F,q),fe.length>0&&at(fe,F,q),Me.length>0&&at(Me,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Je(T,F,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ft(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?yi:rn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let fe=p.state.transmissionRenderTarget[J.id],Me=J.viewport||_;fe.setSize(Me.z,Me.w);let Re=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(B),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear(),lt&&$e.render(q);let Le=v.toneMapping;v.toneMapping=On;let He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Q===!0&&me.setGlobalState(v.clippingPlanes,J),at(T,q,J),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Be=0,yt=F.length;Be<yt;Be++){let St=F[Be],wt=St.object,Dt=St.geometry,ut=St.material,Ve=St.group;if(ut.side===ii&&wt.layers.test(J.layers)){let Ut=ut.side;ut.side=si,ut.needsUpdate=!0,ct(wt,q,J,Dt,ut,Ve),ut.side=Ut,ut.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe))}v.setRenderTarget(Re),v.setClearColor(B,N),He!==void 0&&(J.viewport=He),v.toneMapping=Le}function at(T,F,q){let J=F.isScene===!0?F.overrideMaterial:null;for(let k=0,fe=T.length;k<fe;k++){let Me=T[k],Re=Me.object,Le=Me.geometry,He=J===null?Me.material:J,Ye=Me.group;Re.layers.test(q.layers)&&ct(Re,F,q,Le,He,Ye)}}function ct(T,F,q,J,k,fe){T.onBeforeRender(v,F,q,J,k,fe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,F,q,J,T,fe),k.transparent===!0&&k.side===ii&&k.forceSinglePass===!1?(k.side=si,k.needsUpdate=!0,v.renderBufferDirect(q,F,J,k,T,fe),k.side=nn,k.needsUpdate=!0,v.renderBufferDirect(q,F,J,k,T,fe),k.side=ii):v.renderBufferDirect(q,F,J,k,T,fe),T.onAfterRender(v,F,q,J,k,fe)}function Ee(T,F,q){F.isScene!==!0&&(F=je);let J=ve.get(T),k=p.state.lights,fe=p.state.shadowsArray,Me=k.state.version,Re=ke.getParameters(T,k.state,fe,F,q),Le=ke.getProgramCacheKey(Re),He=J.programs;J.environment=T.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(T.isMeshStandardMaterial?j:S).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",O),He=new Map,J.programs=He);let Ye=He.get(Le);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Me)return ht(T,Re),Ye}else Re.uniforms=ke.getUniforms(T),T.onBeforeCompile(Re,v),Ye=ke.acquireProgram(Re,Le),He.set(Le,Ye),J.uniforms=Re.uniforms;let Be=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=me.uniform),ht(T,Re),J.needsLights=vt(T),J.lightsStateVersion=Me,J.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Xe(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=$s.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ht(T,F){let q=ve.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function et(T,F,q,J,k){F.isScene!==!0&&(F=je),E.resetTextureUnits();let fe=F.fog,Me=J.isMeshStandardMaterial?F.environment:null,Re=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vt,Le=(J.isMeshStandardMaterial?j:S).get(J.envMap||Me),He=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Be=!!q.morphAttributes.position,yt=!!q.morphAttributes.normal,St=!!q.morphAttributes.color,wt=On;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=v.toneMapping);let Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Dt!==void 0?Dt.length:0,Ve=ve.get(J),Ut=p.state.lights;if(Q===!0&&(le===!0||T!==Z)){let Li=T===Z&&J.id===D;me.setState(J,T,Li)}let _t=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ut.state.version||Ve.outputColorSpace!==Re||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Le||J.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==me.numPlanes||Ve.numIntersection!==me.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ye||Ve.morphTargets!==Be||Ve.morphNormals!==yt||Ve.morphColors!==St||Ve.toneMapping!==wt||Ve.morphTargetsCount!==ut)&&(_t=!0):(_t=!0,Ve.__version=J.version);let Yt=Ve.currentProgram;_t===!0&&(Yt=Ee(J,F,k));let Ht=!1,Si=!1,Xl=!1,Nt=Yt.getUniforms(),En=Ve.uniforms;if(ye.useProgram(Yt.program)&&(Ht=!0,Si=!0,Xl=!0),J.id!==D&&(D=J.id,Si=!0),Ht||Z!==T){H.reverseDepthBuffer?(Ue.copy(T.projectionMatrix),U0(Ue),N0(Ue),Nt.setValue(I,"projectionMatrix",Ue)):Nt.setValue(I,"projectionMatrix",T.projectionMatrix),Nt.setValue(I,"viewMatrix",T.matrixWorldInverse);let Li=Nt.map.cameraPosition;Li!==void 0&&Li.setValue(I,qe.setFromMatrixPosition(T.matrixWorld)),H.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,Si=!0,Xl=!0)}if(k.isSkinnedMesh){Nt.setOptional(I,k,"bindMatrix"),Nt.setOptional(I,k,"bindMatrixInverse");let Li=k.skeleton;Li&&(Li.boneTexture===null&&Li.computeBoneTexture(),Nt.setValue(I,"boneTexture",Li.boneTexture,E))}k.isBatchedMesh&&(Nt.setOptional(I,k,"batchingTexture"),Nt.setValue(I,"batchingTexture",k._matricesTexture,E),Nt.setOptional(I,k,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",k._indirectTexture,E),Nt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",k._colorsTexture,E));let ql=q.morphAttributes;if((ql.position!==void 0||ql.normal!==void 0||ql.color!==void 0)&&We.update(k,q,Yt),(Si||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Nt.setValue(I,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(En.envMap.value=Le,En.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(En.envMapIntensity.value=F.environmentIntensity),Si&&(Nt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Ge(En,Xl),fe&&J.fog===!0&&_e.refreshFogUniforms(En,fe),_e.refreshMaterialUniforms(En,J,ee,V,p.state.transmissionRenderTarget[T.id]),$s.upload(I,Xe(Ve),En,E)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($s.upload(I,Xe(Ve),En,E),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Nt.setValue(I,"center",k.center),Nt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(I,"normalMatrix",k.normalMatrix),Nt.setValue(I,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Li=J.uniformsGroups;for(let Yl=0,Ug=Li.length;Yl<Ug;Yl++){let Ud=Li[Yl];z.update(Ud,Yt),z.bind(Ud,Yt)}}return Yt}function Ge(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function vt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,q){ve.get(T.texture).__webglTexture=F,ve.get(T.depthTexture).__webglTexture=q;let J=ve.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let q=ve.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){A=T,L=F,C=q;let J=!0,k=null,fe=!1,Me=!1;if(T){let Le=ve.get(T);if(Le.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)E.setupRenderTarget(T);else if(Le.__hasExternalTextures)E.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(Le.__boundDepthTexture!==Be){if(Be!==null&&ve.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(T)}}let He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);let Ye=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?k=Ye[F][q]:k=Ye[F],fe=!0):T.samples>0&&E.useMultisampledRTT(T)===!1?k=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[q]:k=Ye,_.copy(T.viewport),w.copy(T.scissor),$=T.scissorTest}else _.copy(de).multiplyScalar(ee).floor(),w.copy(oe).multiplyScalar(ee).floor(),$=Ze;if(ye.bindFramebuffer(I.FRAMEBUFFER,k)&&J&&ye.drawBuffers(T,k),ye.viewport(_),ye.scissor(w),ye.setScissorTest($),fe){let Le=ve.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Le.__webglTexture,q)}else if(Me){let Le=ve.get(T.texture),He=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,q||0,He)}D=-1},this.readRenderTargetPixels=function(T,F,q,J,k,fe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){ye.bindFramebuffer(I.FRAMEBUFFER,Re);try{let Le=T.texture,He=Le.format,Ye=Le.type;if(!H.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-J&&q>=0&&q<=T.height-k&&I.readPixels(F,q,J,k,tt.convert(He),tt.convert(Ye),fe)}finally{let Le=A!==null?ve.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,J,k,fe,Me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){let Le=T.texture,He=Le.format,Ye=Le.type;if(!H.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-J&&q>=0&&q<=T.height-k){ye.bindFramebuffer(I.FRAMEBUFFER,Re);let Be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(F,q,J,k,tt.convert(He),tt.convert(Ye),0);let yt=A!==null?ve.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,yt);let St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await D0(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(Be),I.deleteSync(St),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,q=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let J=Math.pow(2,-q),k=Math.floor(T.image.width*J),fe=Math.floor(T.image.height*J),Me=F!==null?F.x:0,Re=F!==null?F.y:0;E.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Me,Re,k,fe),ye.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,J=null,k=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],F=arguments[2],k=arguments[3]||0,q=null);let fe,Me,Re,Le,He,Ye;q!==null?(fe=q.max.x-q.min.x,Me=q.max.y-q.min.y,Re=q.min.x,Le=q.min.y):(fe=T.image.width,Me=T.image.height,Re=0,Le=0),J!==null?(He=J.x,Ye=J.y):(He=0,Ye=0);let Be=tt.convert(F.format),yt=tt.convert(F.type);E.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let St=I.getParameter(I.UNPACK_ROW_LENGTH),wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dt=I.getParameter(I.UNPACK_SKIP_PIXELS),ut=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES),Ut=T.isCompressedTexture?T.mipmaps[k]:T.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,He,Ye,fe,Me,Be,yt,Ut.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,He,Ye,Ut.width,Ut.height,Be,Ut.data):I.texSubImage2D(I.TEXTURE_2D,k,He,Ye,fe,Me,Be,yt,Ut),I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ut),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),k===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,F,q=null,J=null,k=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,J=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0);let fe,Me,Re,Le,He,Ye,Be,yt,St,wt=T.isCompressedTexture?T.mipmaps[k]:T.image;q!==null?(fe=q.max.x-q.min.x,Me=q.max.y-q.min.y,Re=q.max.z-q.min.z,Le=q.min.x,He=q.min.y,Ye=q.min.z):(fe=wt.width,Me=wt.height,Re=wt.depth,Le=0,He=0,Ye=0),J!==null?(Be=J.x,yt=J.y,St=J.z):(Be=0,yt=0,St=0);let Dt=tt.convert(F.format),ut=tt.convert(F.type),Ve;if(F.isData3DTexture)E.setTexture3D(F,0),Ve=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)E.setTexture2DArray(F,0),Ve=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Ut=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yt=I.getParameter(I.UNPACK_SKIP_PIXELS),Ht=I.getParameter(I.UNPACK_SKIP_ROWS),Si=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye),T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ve,k,Be,yt,St,fe,Me,Re,Dt,ut,wt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,k,Be,yt,St,fe,Me,Re,Dt,wt.data):I.texSubImage3D(Ve,k,Be,yt,St,fe,Me,Re,Dt,ut,wt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Si),k===0&&F.generateMipmaps&&I.generateMipmap(Ve),ye.unbindTexture()},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?E.setTextureCube(T,0):T.isData3DTexture?E.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?E.setTexture2DArray(T,0):E.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,ye.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===sl?"display-p3":"srgb"}};var To=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ci=new P,Yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var If=new P,Lf=new xt,Df=new xt,LM=new P,Uf=new Ne,Za=new P,Sc=new Wt,Nf=new Ne,wc=new vi,Ao=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bd,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),e.ray.intersectsSphere(Sc)!==!1&&(Nf.copy(s).invert(),wc.copy(e.ray).applyMatrix4(Nf),!(this.boundingBox!==null&&wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Lf.fromBufferAttribute(s.attributes.skinIndex,e),Df.fromBufferAttribute(s.attributes.skinWeight,e),If.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Df.getComponent(r);if(a!==0){let o=Lf.getComponent(r);Uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(LM.copy(If).applyMatrix4(Uf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},jr=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,h=Kt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Of=new Ne,DM=new Ne,Eo=class i{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:DM;Of.multiplyMatrices(o,t[r]),Of.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,Oi,Ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new jr),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Jt=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Ne,Ff=new Ne,Ka=[],Bf=new ri,UM=new Ne,Pr=new ft,Ir=new Wt,di=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,UM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Bf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Ir.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Ff.multiplyMatrices(n,Hs),Pr.matrixWorld=Ff,Pr.raycast(e,Ka);for(let a=0,o=Ka.length;a<o;a++){let l=Ka[a];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(s*this.count),s,this.count,tl,Ni));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var lr=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new P,Ro=new P,zf=new Ne,Lr=new vi,Ja=new Wt,Tc=new P,kf=new P,cr=class extends Rt{constructor(e=new Mt,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Co.distanceTo(Ro);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;zf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=h.getX(y),x=h.getX(y+1),v=Qa(this,e,Lr,l,g,x);v&&t.push(v)}if(this.isLineLoop){let y=h.getX(m-1),p=h.getX(f),g=Qa(this,e,Lr,l,y,p);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=Qa(this,e,Lr,l,y,y+1);g&&t.push(g)}if(this.isLineLoop){let y=Qa(this,e,Lr,l,m-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Co.fromBufferAttribute(a,s),Ro.fromBufferAttribute(a,r),t.distanceSqToSegment(Co,Ro,Tc,kf)>n)return;Tc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Tc);if(!(l<e.near||l>e.far))return{distance:l,point:kf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Vf=new P,Hf=new P,fs=class extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vf.fromBufferAttribute(t,s),Hf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vf.distanceTo(Hf);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},zn=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gf=new Ne,Ih=new vi,eo=new Wt,to=new P,vn=class extends Rt{constructor(e=new Mt,t=new zn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Gf.copy(s).invert(),Ih.copy(e.ray).applyMatrix4(Gf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,y=f;m<y;m++){let p=c.getX(m);to.fromBufferAttribute(u,p),Wf(to,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,y=f;m<y;m++)to.fromBufferAttribute(u,m),Wf(to,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wf(i,e,t,n,s,r,a){let o=Ih.distanceSqToPoint(i);if(o<t){let l=new P;Ih.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var zi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new Ne;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends zi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lh=class extends $r{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var io=new P,Ac=new mu,Ec=new mu,Cc=new mu,hr=class extends zi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Ac.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,y,p),Ec.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,y,p),Cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,y,p)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ec.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ac.calc(l),Ec.calc(l),Cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function NM(i,e){let t=1-i;return t*t*e}function OM(i,e){return 2*(1-i)*i*e}function FM(i,e){return i*i*e}function zr(i,e,t,n){return NM(i,e)+OM(i,t)+FM(i,n)}function BM(i,e){let t=1-i;return t*t*t*e}function zM(i,e){let t=1-i;return 3*t*t*i*e}function kM(i,e){return 3*(1-i)*i*i*e}function VM(i,e){return i*i*i*e}function kr(i,e,t,n,s){return BM(i,e)+zM(i,t)+kM(i,n)+VM(i,s)}var Io=class extends zi{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dh=class extends zi{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y),kr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends zi{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends zi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends zi{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends zi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y),zr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xf(o,l.x,c.x,h.x,u.x),Xf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:hr,CubicBezierCurve:Io,CubicBezierCurve3:Dh,EllipseCurve:$r,LineCurve:Lo,LineCurve3:Uh,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Uo,SplineCurve:No}),Nh=class extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}},Fo=class extends Nh{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Do(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Io(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new $r(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ki=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,y=[],p=n/2,g=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(){let M=new P,L=new P,C=0,A=(t-e)/n;for(let D=0;D<=r;D++){let Z=[],_=D/r,w=_*(t-e)+e;for(let $=0;$<=s;$++){let B=$/s,N=B*l+o,Y=Math.sin(N),V=Math.cos(N);L.x=w*Y,L.y=-_*n+p,L.z=w*V,u.push(L.x,L.y,L.z),M.set(Y,A,V).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-_),Z.push(m++)}y.push(Z)}for(let D=0;D<s;D++)for(let Z=0;Z<r;Z++){let _=y[Z][D],w=y[Z+1][D],$=y[Z+1][D+1],B=y[Z][D+1];e>0&&(h.push(_,w,B),C+=3),t>0&&(h.push(w,$,B),C+=3)}c.addGroup(g,C,0),g+=C}function v(M){let L=m,C=new se,A=new P,D=0,Z=M===!0?e:t,_=M===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),m++;let w=m;for(let $=0;$<=s;$++){let N=$/s*l+o,Y=Math.cos(N),V=Math.sin(N);A.x=Z*V,A.y=p*_,A.z=Z*Y,u.push(A.x,A.y,A.z),d.push(0,_,0),C.x=Y*.5+.5,C.y=V*.5*_+.5,f.push(C.x,C.y),m++}for(let $=0;$<s;$++){let B=L+$,N=w+$;M===!0?h.push(N,N+1,B):h.push(N+1,N,B),D+=3}c.addGroup(g,D,M===!0?1:2),g+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oh=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new P,M=new P,L=new P;for(let C=0;C<t.length;C+=3)f(t[C+0],v),f(t[C+1],M),f(t[C+2],L),l(v,M,L,x)}function l(x,v,M,L){let C=L+1,A=[];for(let D=0;D<=C;D++){A[D]=[];let Z=x.clone().lerp(M,D/C),_=v.clone().lerp(M,D/C),w=C-D;for(let $=0;$<=w;$++)$===0&&D===C?A[D][$]=Z:A[D][$]=Z.clone().lerp(_,$/w)}for(let D=0;D<C;D++)for(let Z=0;Z<2*(C-D)-1;Z++){let _=Math.floor(Z/2);Z%2===0?(d(A[D][_+1]),d(A[D+1][_]),d(A[D][_])):(d(A[D][_+1]),d(A[D+1][_+1]),d(A[D+1][_]))}}function c(x){let v=new P;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let x=new P;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let M=p(x)/2/Math.PI+.5,L=g(x)/Math.PI+.5;a.push(M,1-L)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let v=a[x+0],M=a[x+2],L=a[x+4],C=Math.max(v,M,L),A=Math.min(v,M,L);C>.9&&A<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){let M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function m(){let x=new P,v=new P,M=new P,L=new P,C=new se,A=new se,D=new se;for(let Z=0,_=0;Z<r.length;Z+=9,_+=6){x.set(r[Z+0],r[Z+1],r[Z+2]),v.set(r[Z+3],r[Z+4],r[Z+5]),M.set(r[Z+6],r[Z+7],r[Z+8]),C.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),D.set(a[_+4],a[_+5]),L.copy(x).add(v).add(M).divideScalar(3);let w=p(L);y(C,_+0,x,w),y(A,_+2,v,w),y(D,_+4,M,w)}}function y(x,v,M,L){L<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=L/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var kn=class extends Fo{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fo().fromJSON(s))}return this}},HM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=YM(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Zr(r,a,t,o,l,f,0),a}};function Tp(i,e,t,n,s){let r,a;if(s===sb(i,e,t,n)>0)for(r=e;r<t;r+=n)a=qf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=qf(r,i[r],i[r+1],a);return a&&al(a,a.next)&&(Jr(a),a=a.next),a}function ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(al(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&JM(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?WM(i,n,s,r):GM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=XM(ps(i),e,t),Zr(i,e,t,n,s,r,2)):a===2&&qM(i,e,t,n,s,r):Zr(ps(i),e,t,n,s,r,1);break}}}function GM(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Xs(s,o,r,l,a,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function WM(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=Fh(f,m,e,t,n),x=Fh(y,p,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=g&&M&&M.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Xs(o,h,l,u,c,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Xs(o,h,l,u,c,d,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Xs(o,h,l,u,c,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function XM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!al(s,r)&&Ap(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Jr(n),Jr(n.next),n=i=r),n=n.next}while(n!==i);return ps(n)}function qM(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tb(a,o)){let l=Ep(a,o);a=ps(a,a.next),l=ps(l,l.next),Zr(a,e,t,n,s,r,0),Zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function YM(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Tp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(eb(c));for(s.sort(jM),r=0;r<s.length;r++)t=$M(s[r],t);return t}function jM(i,e){return i.x-e.x}function $M(i,e){let t=ZM(i,e);if(!t)return e;let n=Ep(t,i);return ps(n,n.next),ps(t,t.next)}function ZM(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Kr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&KM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function KM(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function JM(i,e,t,n){let s=i;do s.z===0&&(s.z=Fh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,QM(s)}function QM(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Fh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function eb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function tb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ib(i,e)&&(Kr(i,e)&&Kr(e,i)&&nb(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||al(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function al(i,e){return i.x===e.x&&i.y===e.y}function Ap(i,e,t,n){let s=so(Lt(i,e,t)),r=so(Lt(i,e,n)),a=so(Lt(t,n,i)),o=so(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&no(i,t,e)||r===0&&no(i,n,e)||a===0&&no(t,i,n)||o===0&&no(t,e,n))}function no(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function ib(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ap(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function nb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ep(i,e){let t=new Bh(i.i,i.x,i.y),n=new Bh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qf(i,e,t,n){let s=new Bh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sb(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yf(e),jf(n,e);let a=e.length;t.forEach(Yf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,jf(n,t[l]);let o=HM.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bo=class i extends Mt{constructor(e=new kn([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:rb,v,M=!1,L,C,A,D;g&&(v=g.getSpacedPoints(h),M=!0,d=!1,L=g.computeFrenetFrames(h,!1),C=new P,A=new P,D=new P),d||(p=0,f=0,m=0,y=0);let Z=o.extractPoints(c),_=Z.shape,w=Z.holes;if(!Fn.isClockWise(_)){_=_.reverse();for(let he=0,I=w.length;he<I;he++){let Te=w[he];Fn.isClockWise(Te)&&(w[he]=Te.reverse())}}let B=Fn.triangulateShape(_,w),N=_;for(let he=0,I=w.length;he<I;he++){let Te=w[he];_=_.concat(Te)}function Y(he,I,Te){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(I,Te)}let V=_.length,ee=B.length;function G(he,I,Te){let xe,H,ye,Pe=he.x-I.x,ve=he.y-I.y,E=Te.x-he.x,S=Te.y-he.y,j=Pe*Pe+ve*ve,re=Pe*S-ve*E;if(Math.abs(re)>Number.EPSILON){let ce=Math.sqrt(j),ne=Math.sqrt(E*E+S*S),ke=I.x-ve/ce,_e=I.y+Pe/ce,Ae=Te.x-S/ne,Qe=Te.y+E/ne,me=((Ae-ke)*S-(Qe-_e)*E)/(Pe*S-ve*E);xe=ke+Pe*me-he.x,H=_e+ve*me-he.y;let Ce=xe*xe+H*H;if(Ce<=2)return new se(xe,H);ye=Math.sqrt(Ce/2)}else{let ce=!1;Pe>Number.EPSILON?E>Number.EPSILON&&(ce=!0):Pe<-Number.EPSILON?E<-Number.EPSILON&&(ce=!0):Math.sign(ve)===Math.sign(S)&&(ce=!0),ce?(xe=-ve,H=Pe,ye=Math.sqrt(j)):(xe=Pe,H=ve,ye=Math.sqrt(j/2))}return new se(xe/ye,H/ye)}let pe=[];for(let he=0,I=N.length,Te=I-1,xe=he+1;he<I;he++,Te++,xe++)Te===I&&(Te=0),xe===I&&(xe=0),pe[he]=G(N[he],N[Te],N[xe]);let de=[],oe,Ze=pe.concat();for(let he=0,I=w.length;he<I;he++){let Te=w[he];oe=[];for(let xe=0,H=Te.length,ye=H-1,Pe=xe+1;xe<H;xe++,ye++,Pe++)ye===H&&(ye=0),Pe===H&&(Pe=0),oe[xe]=G(Te[xe],Te[ye],Te[Pe]);de.push(oe),Ze=Ze.concat(oe)}for(let he=0;he<p;he++){let I=he/p,Te=f*Math.cos(I*Math.PI/2),xe=m*Math.sin(I*Math.PI/2)+y;for(let H=0,ye=N.length;H<ye;H++){let Pe=Y(N[H],pe[H],xe);be(Pe.x,Pe.y,-Te)}for(let H=0,ye=w.length;H<ye;H++){let Pe=w[H];oe=de[H];for(let ve=0,E=Pe.length;ve<E;ve++){let S=Y(Pe[ve],oe[ve],xe);be(S.x,S.y,-Te)}}}let rt=m+y;for(let he=0;he<V;he++){let I=d?Y(_[he],Ze[he],rt):_[he];M?(A.copy(L.normals[0]).multiplyScalar(I.x),C.copy(L.binormals[0]).multiplyScalar(I.y),D.copy(v[0]).add(A).add(C),be(D.x,D.y,D.z)):be(I.x,I.y,0)}for(let he=1;he<=h;he++)for(let I=0;I<V;I++){let Te=d?Y(_[I],Ze[I],rt):_[I];M?(A.copy(L.normals[he]).multiplyScalar(Te.x),C.copy(L.binormals[he]).multiplyScalar(Te.y),D.copy(v[he]).add(A).add(C),be(D.x,D.y,D.z)):be(Te.x,Te.y,u/h*he)}for(let he=p-1;he>=0;he--){let I=he/p,Te=f*Math.cos(I*Math.PI/2),xe=m*Math.sin(I*Math.PI/2)+y;for(let H=0,ye=N.length;H<ye;H++){let Pe=Y(N[H],pe[H],xe);be(Pe.x,Pe.y,u+Te)}for(let H=0,ye=w.length;H<ye;H++){let Pe=w[H];oe=de[H];for(let ve=0,E=Pe.length;ve<E;ve++){let S=Y(Pe[ve],oe[ve],xe);M?be(S.x,S.y+v[h-1].y,v[h-1].x+Te):be(S.x,S.y,u+Te)}}}Q(),le();function Q(){let he=s.length/3;if(d){let I=0,Te=V*I;for(let xe=0;xe<ee;xe++){let H=B[xe];qe(H[2]+Te,H[1]+Te,H[0]+Te)}I=h+p*2,Te=V*I;for(let xe=0;xe<ee;xe++){let H=B[xe];qe(H[0]+Te,H[1]+Te,H[2]+Te)}}else{for(let I=0;I<ee;I++){let Te=B[I];qe(Te[2],Te[1],Te[0])}for(let I=0;I<ee;I++){let Te=B[I];qe(Te[0]+V*h,Te[1]+V*h,Te[2]+V*h)}}n.addGroup(he,s.length/3-he,0)}function le(){let he=s.length/3,I=0;Ue(N,I),I+=N.length;for(let Te=0,xe=w.length;Te<xe;Te++){let H=w[Te];Ue(H,I),I+=H.length}n.addGroup(he,s.length/3-he,1)}function Ue(he,I){let Te=he.length;for(;--Te>=0;){let xe=Te,H=Te-1;H<0&&(H=he.length-1);for(let ye=0,Pe=h+p*2;ye<Pe;ye++){let ve=V*ye,E=V*(ye+1),S=I+xe+ve,j=I+H+ve,re=I+H+E,ce=I+xe+E;Ke(S,j,re,ce)}}}function be(he,I,Te){l.push(he),l.push(I),l.push(Te)}function qe(he,I,Te){je(he),je(I),je(Te);let xe=s.length/3,H=x.generateTopUV(n,s,xe-3,xe-2,xe-1);lt(H[0]),lt(H[1]),lt(H[2])}function Ke(he,I,Te,xe){je(he),je(I),je(xe),je(I),je(Te),je(xe);let H=s.length/3,ye=x.generateSideWallUV(n,s,H-6,H-3,H-2,H-1);lt(ye[0]),lt(ye[1]),lt(ye[3]),lt(ye[1]),lt(ye[2]),lt(ye[3])}function je(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function lt(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ab(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oo[s.type]().fromJSON(s)),new i(n,e.options)}},rb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],y=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-m),new se(y,1-g)]:[new se(o,1-l),new se(h,1-u),new se(f,1-m),new se(p,1-g)]}};function ab(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zo=class i extends Oh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ko=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,m=new se;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let g=r+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let y=0;y<s;y++){let p=y*(n+1);for(let g=0;g<n;g++){let x=g+p,v=x,M=x+n+1,L=x+n+2,C=x+1;o.push(v,M,C),o.push(M,L,C)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vo=class i extends Mt{constructor(e=new kn([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Fn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let x=m[p];Fn.isClockWise(x)===!0&&(m[p]=x.reverse())}let y=Fn.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let x=m[p];f=f.concat(x)}for(let p=0,g=f.length;p<g;p++){let x=f[p];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let p=0,g=y.length;p<g;p++){let x=y[p],v=x[0]+u,M=x[1]+u,L=x[2]+u;n.push(v,M,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ob(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ob(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ms=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let x=[],v=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(C+M,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let v=h[g][x+1],M=h[g][x],L=h[g+1][x],C=h[g+1][x+1];(g!==0||a>0)&&f.push(v,M,C),(g!==n-1||l<Math.PI)&&f.push(M,L,C)}this.setIndex(f),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ho=class i extends Mt{constructor(e=new Uo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new se,h=new P,u=[],d=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function y(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),x(),g()}function p(v){h=e.getPointAt(v/t,h);let M=a.normals[v],L=a.binormals[v];for(let C=0;C<=s;C++){let A=C/s*Math.PI*2,D=Math.sin(A),Z=-Math.cos(A);l.x=Z*M.x+D*L.x,l.y=Z*M.y+D*L.y,l.z=Z*M.z+D*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let L=(s+1)*(v-1)+(M-1),C=(s+1)*v+(M-1),A=(s+1)*v+M,D=(s+1)*(v-1)+M;m.push(L,C,D),m.push(C,A,D)}}function x(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Oo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Go=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gs=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends gs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $f(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Cp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Vn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends Vn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kd:r=e,o=2*t-n;break;case Vd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kd:a=e,l=2*n-t;break;case Vd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),y=m*m,p=y*m,g=-d*p+2*d*y-d*m,x=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*p+(1.5+f)*y+.5*m,M=f*p-f*y;for(let L=0;L!==o;++L)r[L]=g*a[h+L]+x*a[c+L]+v*a[l+L]+M*a[u+L];return r}},kh=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Vh=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lb(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$l,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=t[u+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=nr;var Hn=class extends Vi{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ir;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Vi{};Wo.prototype.ValueTypeName="color";var yn=class extends Vi{};yn.prototype.ValueTypeName="number";var Hh=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ui.slerpFlat(r,0,a,c-o,a,c,l);return r}},xn=class extends Vi{InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}};xn.prototype.ValueTypeName="quaternion";xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Vi{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ir;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends Vi{};_n.prototype.ValueTypeName="vector";var Xo=class{constructor(e="",t=-1,n=[],s=r0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ub(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Vi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=cb(l);l=$f(l,1,h),c=$f(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new yn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,y){if(f.length!==0){let p=[],g=[];Cp(f,p,g,m),p.length!==0&&y.push(new u(d,p,g))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(let y in f){let p=[],g=[];for(let x=0;x!==d[m].morphTargets.length;++x){let v=d[m];p.push(v.time),g.push(v.morphTarget===y?1:0)}s.push(new yn(".morphTargetInfluence["+y+"]",p,g))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(_n,f+".position",d,"pos",s),n(xn,f+".quaternion",d,"rot",s),n(_n,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yn;case"vector":case"vector2":case"vector3":case"vector4":return _n;case"color":return Wo;case"quaternion":return xn;case"bool":case"boolean":return Hn;case"string":return Gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ub(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hb(i.type);if(i.times===void 0){let t=[],n=[];Cp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Nn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vs=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},xs=new vs,Zi=class{constructor(e){this.manager=e!==void 0?e:xs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var fn={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},an=class extends Zi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Nn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:n,onError:s});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=fn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,y=0,p=new ReadableStream({start(g){x();function x(){u.read().then(({done:v,value:M})=>{if(v)g.close();else{y+=M.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let C=0,A=h.length;C<A;C++){let D=h[C];D.onProgress&&D.onProgress(L)}g.enqueue(M),x()}},v=>{g.error(v)})}}});return new Response(p)}else throw new Gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Nn.add(e,c);let h=fn[e];delete fn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=fn[e];if(h===void 0)throw this.manager.itemError(e),c;delete fn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wh=class extends Zi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Nn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Gr("img");function l(){h(),Nn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ur=class extends Zi{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new Wh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qr=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Rc=new Ne,Zf=new P,Kf=new P,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bn,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zf),Kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kf),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xh=class extends ea{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},qo=class extends Qr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jf=new Ne,Dr=new P,Pc=new P,qh=class extends ea{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf)}},Yo=class extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yh=class extends ea{constructor(){super(new gn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wn=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $o=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Nn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Nn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Nn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Nn.add(e,l),r.manager.itemStart(e)}};var ys=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Qf(){return performance.now()}var gu="\\[\\]\\.:\\/",db=new RegExp("["+gu+"]","g"),vu="[^"+gu+"]",fb="[^"+gu.replace("\\.","")+"]",pb=/((?:WC+[\/:])*)/.source.replace("WC",vu),mb=/(WCOD+)?/.source.replace("WCOD",fb),gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),yb=new RegExp("^"+pb+mb+gb+vb+"$"),xb=["material","materials","bones","map"],jh=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(db,"")}static parseTrackName(e){let t=yb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=jh;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tS=new Float32Array(1);var ep=new Ne,dr=class{constructor(e,t,n=0,s=1/0){this.ray=new vi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(e,t=!0,n=[]){return $h(e,this,n,t),n.sort(tp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$h(e[s],this,n,t);return n.sort(tp),n}};function tp(i,e){return i.distance-e.distance}function $h(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$h(r[a],e,t,!0)}}var Zo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ko=class i{constructor(e,t,n,s){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},ip=new se,Jo=class{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ip.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ip).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);var ol={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_b=new gn(-1,1,1,-1,0,1),yu=class extends Mt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},Mb=new yu,Ki=class{constructor(e){this._mesh=new ft(Mb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _s=class extends Ri{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var na=class extends Ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ll=class extends Ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _s(ol),this.copyPass.material.blending=tn,this.clock=new ys}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(a instanceof na?n=!0:a instanceof ll&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hl=class extends Ri{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Rp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pr=class i extends Ri{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ft(r,a,{type:yi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ft(r,a,{type:yi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Rp;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ol;this.copyUniforms=Xn.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new ai,this.fsQuad=new Ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};pr.BlurDirectionX=new se(1,0);pr.BlurDirectionY=new se(0,1);var Pp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ul=class extends Ri{constructor(){super();let e=Pp;this.uniforms=Xn.clone(e.uniforms),this.material=new Go({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qt=`
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
`,Ip=Qt,dl=i=>({uFogCool:i.cool,uFogWarm:i.warm,uSunDir:i.sun,uFogDensity:i.density,uDetail:i.detail}),Hi=`
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
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
  `},xu={vertexShader:`
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
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
    ${Qt}
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
    ${Qt}
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 4.0);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(vColor * a * fade * uDetail, 1.0);
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
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    uniform float uDash;      // 0 solid, >0 travelling pulses (count along the length)
    uniform float uDraw;      // 0..1 how much of the ribbon is drawn (u = along)
    uniform float uFogOn;
    ${Qt}
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
  `},Mu={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
  `,fragmentShader:`
    uniform vec3 uColor;
    ${Qt}
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
    ${Qt}
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
  `},LS={vertexShader:ra,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uOn;
    uniform vec3 uPointer;
    uniform float uPointerOn;
    ${Qt}
    ${Hi}
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
    ${Qt}
    ${Hi}
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
  `},bu={vertexShader:`
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
    uniform vec3 uCenter;
    uniform float uRadius;
    uniform float uExposure;
    uniform float uSat;
    ${Qt}
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
      float d = length(vP.xz - uCenter.xz) / uRadius;
      vec3 haze = hazeColor(-V);
      col = mix(col, haze, smoothstep(0.72, 1.0, d));
      col = mix(haze, col, uFade);
      gl_FragColor = vec4(col, 1.0);
    }
  `};var mr=63710,Zp=-77.5,bb=34.5,oa=Math.PI/180,Kp=i=>Math.log(Math.tan(Math.PI/4+i*oa/2)),Jp=Kp(bb),la=i=>1/Math.cos(i*oa);function li(i,e,t=0,n=new P){return n.set(mr*(e-Zp)*oa,t/100*la(i),-mr*(Kp(i)-Jp))}function Qp(i,e){let t=i/mr/oa+Zp,n=-e/mr+Jp;return{lat:(2*Math.atan(Math.exp(n))-Math.PI/2)/oa,lon:t}}var em=(i,e)=>i*100/la(e),Yp=[40.7644,-73.973],jp=[.001233,-.002967],$p=[633e-6,457e-6],qn=[{a:-3.75,name:"East End"},{a:-3.3,name:"York"},{a:-2.8,name:"1st"},{a:-2.3,name:"2nd"},{a:-1.8,name:"3rd"},{a:-1.35,name:"Lexington"},{a:-.9,name:"Park"},{a:-.45,name:"Madison"},{a:0,name:"5th"},{a:1,name:"6th"},{a:2,name:"7th"},{a:3,name:"8th"},{a:4,name:"9th"},{a:5,name:"10th"},{a:6,name:"11th"},{a:6.85,name:"12th"}];function ca(i,e){return[Yp[0]+i*jp[0]+(e-59)*$p[0],Yp[1]+i*jp[1]+(e-59)*$p[1]]}var Ms={nyc:{lat:40.735,lon:-73.99},nyOffice:{lat:40.7459,lon:-73.9867,name:"New York",sub:"Commercial \xB7 276 Fifth Ave."},orlando:{lat:28.5434,lon:-81.3765},lakeEola:{lat:28.5434,lon:-81.3725},orlandoOffice:{lat:28.6555,lon:-81.2605,name:"Florida",sub:"Commercial \xB7 Residential \xB7 Winter Springs"},lakeJesup:{lat:28.722,lon:-81.235}};function tm(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Su=i=>Math.sqrt(-2*Math.log(1-i()))*Math.cos(2*Math.PI*i()),ha=(i,e,t,n)=>{let s=(n-e)*111320*Math.cos((i+t)/2*Math.PI/180),r=(t-i)*110570;return Math.hypot(s,r)};function Et(i,e,t={}){return new At({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:e,...t})}var Pi={transparent:!0,blending:Zs,depthWrite:!1},bs=()=>({depthWrite:!1,depthTest:!0,transparent:!0}),gl=class{constructor(){this.items=[]}add(e,t,n,s,r,a,o,l=0,c=-1,h=0){this.items.push([e,t,n,s,r,a,o,l,c,h])}mesh(e){let t=this.items.length,n=new Ei(1,1,1),s=new di(n,e,Math.max(1,t)),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),l=new Rt;return this.items.forEach(([c,h,u,d,f,m,y,p,g,x],v)=>{l.position.set(c,x+f/2,h),l.rotation.set(0,m,0),l.scale.set(u,f,d),l.updateMatrix(),s.setMatrixAt(v,l.matrix),r[v]=y,a[v]=g,o[v]=p}),s.count=t,n.setAttribute("aSeed",new Jt(r,1)),n.setAttribute("aId",new Jt(a,1)),n.setAttribute("aStyle",new Jt(o,1)),s.frustumCulled=!1,s}};function ml(i,e,t,n,s,r,a,o,l,c,h=-1,u=null){let d=a/c,f=e(),m=Math.cos(o),y=Math.sin(o),p=(v,M)=>[t+v*m+M*y,n-v*y+M*m],g=s,x=r;if(d>105&&e()<.85){let v=Math.min(d*.28,16+e()*22);i.add(t,n,s,r,v*c,o,f,l===1&&e()<.5?i.florida?3:0:l,h);let M=v,L=.6+e()*.22;if(e()<.45){let C=(d-v)*(.55+e()*.2);i.add(t,n,s*L,r*L,C*c,o,f,l,h,M*c),M+=C;let A=L*(.68+e()*.15);i.add(t,n,s*A,r*A,(d-M)*c,o,f,l,h,M*c),g=s*A,x=r*A}else i.add(t,n,s*L,r*L,(d-M)*c,o,f,l,h,M*c),g=s*L,x=r*L;i.add(t,n,g*.5,x*.5,(5+e()*7)*c,o,f,2,h,a);return}if(i.add(t,n,s,r,a,o,f,l,h),d>40&&d<=105&&e()<.3){let v=(6+e()*10)*c;i.add(t,n,s*.78,r*.78,v,o,f,l,h,a),a+=v,g=s*.78,x=r*.78}if(d>14){let[v,M]=p((e()-.5)*g*.3,(e()-.5)*x*.3);if(e()<(d>30?.55:.25)&&i.add(v,M,g*(.14+e()*.12),x*(.16+e()*.12),(2.5+e()*2.5)*c,o,f,2,h,a),u&&l===0&&d<95&&e()<.4){let[L,C]=p((e()-.5)*g*.6,(e()-.5)*x*.6);u.push([L,C,a,(5+e()*2.5)*c,e()])}}}function Sb(i,e,t=2048){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});s.fillStyle="#000",s.fillRect(0,0,t,t);let r=o=>(o+e)/(2*e)*t;for(let{polys:o,color:l}of i){s.fillStyle=l;for(let c of o){s.beginPath();for(let h of c)h.forEach(([u,d],f)=>f?s.lineTo(r(u),r(d)):s.moveTo(r(u),r(d))),s.closePath();s.fill("evenodd")}}let a=s.getImageData(0,0,t,t).data;return(o,l)=>{let c=Math.floor(r(o)),h=Math.floor(r(l));if(c<0||h<0||c>=t||h>=t)return[0,0,0];let u=(h*t+c)*4;return[a[u],a[u+1],a[u+2]]}}function wu(){return{uAlignA:{value:[1e9,1e9,1,0]},uAlignAS:{value:[100,100]},uAlignB:{value:[1e9,1e9,1,0]},uAlignBS:{value:[100,100]},uAlignBO:{value:[0,0]},uHoods:{value:Array.from({length:8},()=>new P(1e9,1e9,1))}}}function gr(i,e,t=0){let[n,...s]=i,r=new kn(n.map(([l,c])=>new se(l,-c)));s.forEach(l=>r.holes.push(new kn(l.map(([c,h])=>new se(c,-h)))));let a=new Vo(r);a.rotateX(-Math.PI/2);let o=new ft(a,e);return o.position.y=t,o.frustumCulled=!1,o}function im(i,e,t=.02){let n=[],s=[],r=[],a=0,o=[0];for(let c=1;c<i.length;c++)a+=i[c].distanceTo(i[c-1]),o.push(a);i.forEach((c,h)=>{let u=i[Math.max(0,h-1)],d=i[Math.min(i.length-1,h+1)],f=new P().subVectors(d,u).setY(0).normalize(),m=new P(-f.z,0,f.x).multiplyScalar(e/2);n.push(c.x+m.x,c.y+t,c.z+m.z,c.x-m.x,c.y+t,c.z-m.z);let y=o[h]/a;if(s.push(y,0,y,1),h){let p=(h-1)*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}});let l=new Mt;return l.setAttribute("position",new st(n,3)),l.setAttribute("uv",new st(s,2)),l.setIndex(r),l}function ua(i,e){let t=i.length,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3);i.forEach(([h,u,d,f,m],y)=>{n.set([h.x,h.y,h.z],y*3),s.set([u.x,u.y,u.z],y*3),r[y]=d,a[y]=f,o.set([m.r,m.g,m.b],y*3)});let l=new Mt;l.setAttribute("position",new nt(n,3)),l.setAttribute("aEnd",new nt(s,3)),l.setAttribute("aPhase",new nt(r,1)),l.setAttribute("aSpeed",new nt(a,1)),l.setAttribute("aColor",new nt(o,3));let c=new vn(l,Et(zp,e,Pi));return c.frustumCulled=!1,c}function nm(i,e,t,n){let s=n.low,r={value:0},a={value:1},o={cool:{value:new ge(.02,.026,.07)},warm:{value:new ge(.3,.12,.06)},sun:{value:new P(-.9,-.02,.36).normalize()},density:{value:1/400},detail:{value:1}},l={value:new ge(.006,.01,.04)},c=dl(o),h={uTime:r,uPixelRatio:a,fog:o,uZenith:l,hit:[],waterMeshes:[]},u={uReflect:{value:null},uReflectMat:{value:new Ne},uReflectOn:{value:0},uMirrorY:{value:0}};h.reflect=u;{let b=Et(Lp,{uSunDir:o.sun,uZenith:l,uHorizon:{value:new ge(.018,.022,.075)},uGlow:{value:new ge(.95,.36,.14)},uTime:r,uDay:{value:0},uPhoto:{value:e.sky},uPhotoOn:{value:e.sky?1:0}},{side:si,depthWrite:!1});h.sky=b;let R=new ft(new ms(10,48,24),b);R.renderOrder=-20,R.frustumCulled=!1,i.add(R)}{let b=t.map,R=li(b.latMax,b.lonMin),U=li(b.latMin,b.lonMax),O=new oi(U.x-R.x,U.z-R.z);O.rotateX(-Math.PI/2);let W=Et(Dp,{uMap:{value:e.map},uTime:r,uLights:{value:1},uBounds:{value:[b.lonMin,b.lonMax,b.latMin,b.latMax]},...c},bs()),X=new ft(O,W);X.position.set((R.x+U.x)/2,-.6,(R.z+U.z)/2),X.renderOrder=-10,X.frustumCulled=!1,i.add(X),h.map=W}let f=la(40.73)/100,m=li(Ms.nyc.lat,Ms.nyc.lon),y=new kt;y.position.copy(m),i.add(y);let p=(b,R,U=0)=>li(b,R,U).sub(m),g=b=>b.map(([R,U])=>{let O=p(U,R);return[O.x,O.z]});{let b=Et(pl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},bs()),R=new ft(new oi(1,1),b);h.waterMeshes.push(R),R.geometry.rotateX(-Math.PI/2),R.scale.set(900,1,900),R.position.y=-.3,R.renderOrder=-9,R.frustumCulled=!1,y.add(R),h.nycWater=R}let x=(b,R,U)=>Et(fl,{uMode:{value:b},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new se},uUnitsPerM:{value:f},uStreetCol:{value:new ge(U)},uDensity:{value:R},uTime:r,...wu(),...c},bs()),v=p(...ca(0,59)),M=p(...ca(1,59)).sub(v),L=p(...ca(0,60)).sub(v),C=M.x*L.z-L.x*M.z,A=[L.z/C,-M.z/C,-L.x/C,M.x/C],D=(b,R)=>new P(v.x+M.x*b+L.x*(R-59),0,v.z+M.z*b+L.z*(R-59)),Z=(b,R)=>{let U=b-v.x,O=R-v.z;return[A[0]*U+A[2]*O,A[1]*U+A[3]*O+59]},_=Math.atan2(-M.z,M.x);h.nycGrid={gridToLocal:D,localToGrid:Z};let w=[],$=[],B=[];for(let[b,R]of Object.entries(t.nyc)){if(b.startsWith("_"))continue;let U=b==="Manhattan",O=te=>Math.max(...te.outer.map(([,ae])=>ae))<40.7045,W=U?R.filter(te=>!O(te)):R;U&&B.push(...R.filter(O).map(te=>[g(te.outer),...te.holes.map(g)]));let X=U?x(1,1,"#d9e3ff"):x(0,b==="Brooklyn"||b==="Queens"?1:.7,"#ffb36b");U&&(X.uniforms.uGridInv.value.set(A),X.uniforms.uGridOrigin.value.set(m.x+v.x,m.z+v.z));let K=W.map(te=>[g(te.outer),...te.holes.map(g)]);K.forEach(te=>{let ae=gr(te,X,-.2);ae.renderOrder=-8,y.add(ae)}),w.push({polys:K,color:U?"#ffff00":"#ff0000"}),U&&$.push(...K)}{let b=x(2,1,"#ffd9a0");B.forEach(O=>{let W=gr(O,b,-.16);W.renderOrder=-7,y.add(W)});let R=[],U=new ge(1.6,1.3,.9);for(let[O]of B){let W=0;for(let X=0;X<O.length;X++){let[K,te]=O[X],[ae,ue]=O[(X+1)%O.length],Se=Math.hypot(ae-K,ue-te);for(let we=25*f-W%(25*f);we<Se;we+=25*f){let Ie=new P(K+(ae-K)*we/Se,.05,te+(ue-te)*we/Se);R.push([Ie,Ie,0,0,U])}W+=Se}}y.add(ua(R,{uTime:r,uPixelRatio:a,uSize:{value:10},...c}))}let N=[D(0,59.6),D(3,59.6),D(3,110),D(0,110)].map(b=>[b.x,b.z]);{let b=x(2,1,"#ffd9a0"),R=gr([N],b,-.15);R.renderOrder=-7,y.add(R);let U=[];for(let X=0;X<40;X++){let K=X/40*Math.PI*2,te=D(1.55+Math.cos(K)*1.05,91.2+Math.sin(K)*5);U.push([te.x,te.z])}let O=Et(pl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},bs()),W=gr([U],O,-.1);h.waterMeshes.push(W),W.renderOrder=-6,y.add(W)}let V=Sb([...w.filter(b=>b.color==="#ff0000"),...w.filter(b=>b.color==="#ffff00")],500,s?2048:3072),ee=(b,R)=>V(b,R)[0]>128,G=(b,R)=>V(b,R)[1]>128,pe=new gl,de=[],oe=tm(1811),Ze=[],rt=(b,R,U)=>Ze.some(([O,W,X])=>Math.hypot(b-O,R-W)<X+U),Q=(b,R,U)=>{let O=16+oe()*22,W=Math.exp(-((ha(b,R,40.7565,-73.9815)/1150)**2)),X=Math.exp(-((ha(b,R,40.7078,-74.0095)/640)**2)),K=Math.exp(-((ha(b,R,40.7535,-74.0015)/330)**2)),te=Math.exp(-(((U-84)/28)**2))*(U>59?1:0),ae=Math.exp(Su(oe)*.45);return O+=W*135*ae+X*120*ae+K*150*ae+te*30*oe(),U>110&&(O*=.7),Math.min(O,330)},le=(b,R,U,O,W,X=1,K=-1,te=_,ae=[])=>{let ue=p(b,R),Se=f;pe.add(ue.x,ue.z,U*Se,O*Se,W*Se,te,oe(),X,K);let we=W;for(let[Ie,ze,Je]of ae)pe.add(ue.x,ue.z,Ie*Se,ze*Se,Je*Se,te,oe(),X,K,we*Se),we+=Je;return Ze.push([ue.x,ue.z,Math.max(U,O)*Se*.8]),ue.clone().setY(we*Se)};le(40.7484,-73.9857,130,60,320,0,-1,_,[[60,40,60],[12,12,63]]),le(40.713,-74.0132,62,62,417,1,-1,_+.785,[[6,6,124]]),le(40.7516,-73.9755,45,45,275,0,-1,_,[[25,25,30],[6,6,14]]),le(40.766,-73.981,45,30,472,1),le(40.7615,-73.9718,28,28,426,1),le(40.7649,-73.9775,18,40,435,1),le(40.7656,-73.979,40,30,306,1),le(40.754,-74.001,60,45,387,1),le(40.7545,-74.0025,45,40,308,1),le(40.7531,-73.979,50,50,427,1),le(40.7553,-73.9845,45,40,366,1),le(40.7593,-73.98,40,30,259,0),le(40.7116,-74.0112,50,50,298,1),le(40.7104,-74.0108,50,50,297,1),le(40.7069,-74.0089,40,35,283,0),le(40.6923,-73.9853,40,40,325,1,-1,0);let Ue=[["Office",1.6,47.5,55,40,240,1],["Retail",-.15,55.5,60,30,34,0],["Industrial",6.35,27.5,120,60,18,0],["Multifamily",3.5,64.5,50,35,128,0],["Hospitality",2.35,45.5,45,40,190,1],["Healthcare",-2.95,31.5,90,60,92,0],["Mixed use",5.6,37.5,55,50,262,1],["Land development",6.1,41.5,110,55,2,0],["Storage",6,21.5,70,50,36,0],["Restaurants",1.7,12.5,30,22,14,0],["Churches",4.3,71.5,25,45,28,0],["Special purpose",6.35,35.5,140,60,34,0]];h.typeTargets=Ue.map(([b,R,U,O,W,X,K],te)=>{let ae=D(R,U),ue=f;return pe.add(ae.x,ae.z,O*ue,W*ue,X*ue,_,oe(),K,te),b==="Churches"&&pe.add(ae.x,ae.z+.12,7*ue,7*ue,46*ue,_,oe(),0,te,28*ue),Ze.push([ae.x,ae.z,Math.max(O,W)*ue*.7]),{name:b,local:ae.clone().setY((b==="Churches"?74:X)*ue+.05)}});let be=M.length(),qe=L.length(),Ke=M.clone().normalize(),je=L.clone().normalize(),lt=s?42:28;for(let b=0;b<qn.length-1;b++){let R=qn[b].a,U=qn[b+1].a;for(let O=1;O<220;O++){if(R>=0&&U<=3&&O>=59&&O<110)continue;let W=(U-R)*be,X=qe,K=15*f,te=10*f,ae=Math.max(1,Math.round((W-2*K)/(lt*f))),ue=D(R,O),[Se,we]=ca((R+U)/2,O+.5),Ie=Q(Se,we,O),ze=Ie>150&&oe()<.55,Je=ze?1:2,at=ze?Math.max(1,Math.round(ae/3)):ae;for(let ct=0;ct<at;ct++)for(let Ee=0;Ee<Je;Ee++){let Xe=K+(W-2*K)*(ct+.5)/at,ht=te+(X-2*te)*(Ee+.5)/Je,et=ue.x+Ke.x*Xe+je.x*ht,Ge=ue.z+Ke.z*Xe+je.z*ht;if(!G(et,Ge)||rt(et,Ge,.1)||oe()<.06)continue;let vt=(W-2*K)/at*(.86+oe()*.1),T=(X-2*te)/Je*(.84+oe()*.12),F=ze?Ie*(.8+oe()*.5):Q(Se,we,O)*(.6+oe()*.5);F=Math.max(10,F)*f,ml(pe,oe,et,Ge,vt,T,F,_,F/f>140?oe()<.8?1:0:oe()<.08?1:0,f,-1,de)}}}{let b=(s?55:42)*f,R=p(40.7,-74.02),U=p(40.742,-73.97);for(let O=R.x;O<U.x;O+=b)for(let W=U.z;W<R.z;W+=b){let[X,K]=Z(O,W);if(!(K<1.5||K<14&&X>1)||!G(O,W)||rt(O,W,b*.5))continue;let ae=Math.floor(O/(5*f*100))*31+Math.floor(W/(5*f*100)),ue=_+Math.sin(ae*12.9898)*43758.5453%1*.9,Se={lat:40.735+-W/(110570*f),lon:-73.99+O/(111320*Math.cos(40.73*Math.PI/180)*f)},we=Q(Se.lat,Se.lon,0)*(.5+oe()*.6);oe()<.12||ml(pe,oe,O+(oe()-.5)*b*.3,W+(oe()-.5)*b*.3,b*(.6+oe()*.3),b*(.6+oe()*.3),Math.max(9,we)*f,ue,we>140?1:0,f,-1,de)}}{let b=[[40.6925,-73.987,520,160],[40.7465,-73.944,520,140],[40.718,-74.036,600,170],[40.745,-74.029,400,60]],R=(s?120:85)*f,U=(s?7e3:9500)*f,O=p(40.73,-73.975);for(let W=O.x-U;W<O.x+U;W+=R)for(let X=O.z-U;X<O.z+U;X+=R){if(Math.hypot(W-O.x,X-O.z)>U||G(W,X)||!ee(W,X)||oe()<.38)continue;let K={lat:Ms.nyc.lat-X/(110570*f)*1,lon:Ms.nyc.lon+W/(111320*Math.cos(40.73*Math.PI/180)*f)},te=9+oe()*14;for(let[ue,Se,we,Ie]of b)te+=Ie*Math.exp(-((ha(K.lat,K.lon,ue,Se)/we)**2))*Math.exp(Su(oe)*.4);let ae=Math.floor(W/(6*R))*.37+Math.floor(X/(6*R))*.21;ml(pe,oe,W+(oe()-.5)*R*.3,X+(oe()-.5)*R*.3,R*(.45+oe()*.3),R*(.45+oe()*.35),te*f,ae,te>120?1:0,f,-1,te<60?de:null)}}let he={uBrick:{value:e.brick},uGlass:{value:e.glass},uFacadeOn:{value:e.brick&&e.glass?1:0}},I={uTime:r,uUnitsPerM:{value:f},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...he,...c},Te=pe.mesh(Et(xu,I));y.add(Te);{let b=new ki(.5,.5,.9,10,1,!1).toNonIndexed();b.translate(0,.95,0);let R=new ki(0,.56,.38,10,1,!0).toNonIndexed();R.translate(0,1.59,0);let U=new Ei(.8,.5,.8).toNonIndexed();U.translate(0,.25,0);let O=[b,R,U],W=O.reduce((Ie,ze)=>Ie+ze.attributes.position.count,0),X=new Float32Array(W*3),K=new Float32Array(W*3),te=new Float32Array(W),ae=0;O.forEach((Ie,ze)=>{X.set(Ie.attributes.position.array,ae*3),K.set(Ie.attributes.normal.array,ae*3),te.fill(ze,ae,ae+Ie.attributes.position.count),ae+=Ie.attributes.position.count});let ue=new Mt;ue.setAttribute("position",new nt(X,3)),ue.setAttribute("normal",new nt(K,3)),ue.setAttribute("aPart",new nt(te,1));let Se=new di(ue,Et(Up,{uUnitsPerM:{value:f},uZenith:l,...c}),Math.max(1,de.length)),we=new Rt;de.forEach(([Ie,ze,Je,at,ct],Ee)=>{we.position.set(Ie,Je,ze),we.rotation.set(0,ct*6,0),we.scale.set(at,at*1.15,at),we.updateMatrix(),Se.setMatrixAt(Ee,we.matrix)}),Se.count=de.length,Se.frustumCulled=!1,y.add(Se)}h.nycBuildings={mesh:Te,uniforms:I,count:pe.items.length};{let b=[[40.7118,-74.0005,40.7022,-73.9893,40,84,"#ffe6c4"],[40.7153,-73.9938,40.6993,-73.9858,41,101,"#d6e2ff"],[40.7172,-73.9832,40.7108,-73.96,41,102,"#ffe6c4"],[40.7604,-73.9615,40.7506,-73.9405,40,106,"#d6e2ff"],[40.85,-73.9445,40.854,-73.965,65,184,"#e8eeff"],[40.6112,-74.033,40.6017,-74.0573,69,211,"#e8eeff"]],R=[],U=[],O=[],W=new ai({color:new ge(.03,.035,.05)});for(let[X,K,te,ae,ue,Se,we]of b){let Ie=p(X,K,ue),ze=p(te,ae,ue),Je=new ft(im([Ie,ze],26*f,0),Et(_u,{uColor:{value:new ge(we)},uIntensity:{value:.9},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Pi));Je.frustumCulled=!1,y.add(Je);let at=Ie.clone().lerp(ze,.24),ct=Ie.clone().lerp(ze,.76);for(let et of[at,ct]){let Ge=new ft(new Ei(10*f,Se*f,16*f),W);Ge.position.set(et.x,Se*f/2,et.z),Ge.rotation.y=Math.atan2(ze.x-Ie.x,ze.z-Ie.z),y.add(Ge)}let Ee=(Se-ue)*f,Xe=s?24:44,ht=new ge(we).multiplyScalar(2.2);for(let et=0;et<=Xe;et++){let Ge=et/Xe,vt=at.clone().lerp(ct,Ge);vt.y+=Ee*(1-4*Ge*(1-Ge))*.92+.05,U.push([vt,vt,0,0,ht])}for(let[et,Ge]of[[Ie,at],[ct,ze]])for(let vt=0;vt<=10;vt++){let T=et.clone().lerp(Ge,vt/10);T.y+=Ee*(et===Ie?vt/10:1-vt/10)*.9,U.push([T,T,0,0,ht])}for(let et=0;et<(s?14:30);et++){let Ge=et%2===0;O.push([Ge?Ie:ze,Ge?ze:Ie,Math.random(),.02+Math.random()*.02,Ge?new ge(2.2,2,1.7):new ge(2.2,.2,.1)])}}y.add(ua(U,{uTime:r,uPixelRatio:a,uSize:{value:18},...c})),y.add(ua(O,{uTime:r,uPixelRatio:a,uSize:{value:22},...c}))}{let b=[],R=new ge(2,1.85,1.6),U=new ge(2.4,.18,.08),O=s?6:12;qn.forEach(({a:W},X)=>{if(W<-3.6)return;let K=X%2===0;for(let te=1;te<200;te+=20){let ae=D(W,te),ue=D(W,te+20);if(!(!G(ae.x,ae.z)||!G(ue.x,ue.z))&&!(W>0&&W<3&&te+20>59&&te<110)){ae.y=ue.y=.02;for(let Se=0;Se<O;Se++)b.push([K?ae:ue,K?ue:ae,Math.random(),.03+Math.random()*.03,K?R:U])}}});for(let W of[14,23,34,42,57,72,79,86,96,116,125])for(let X=0;X<qn.length-1;X++){let K=D(qn[X].a,W),te=D(qn[X+1].a,W);if(!(!G(K.x,K.z)||!G(te.x,te.z))){K.y=te.y=.02;for(let ae=0;ae<3;ae++){let ue=ae%2===0;b.push([ue?K:te,ue?te:K,Math.random(),.06+Math.random()*.05,ue?R:U])}}}y.add(ua(b,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}{let b=p(40.6892,-74.0445),R=new kt;R.position.copy(b),R.scale.setScalar(f),R.rotation.y=-Math.PI*.72;let U=(Ie,ze)=>new At({vertexShader:`varying vec3 vN; varying vec3 vP; varying float vY;
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
        }`,uniforms:{uColor:{value:new ge(...Ie)},uRim:{value:new ge(...ze)},uTop:{value:93},...c}}),O=U([.3,.68,.58],[.6,1,.9]),W=U([.085,.075,.065],[.14,.12,.09]),X=(Ie,ze,Je,at,ct,Ee=0,Xe=0)=>{let ht=new ft(Ie,ze);return ht.position.set(Je,at,ct),ht.rotation.set(Ee,0,Xe),R.add(ht),ht},K=new kn;for(let Ie=0;Ie<22;Ie++){let ze=Ie/22*Math.PI*2,Je=Ie%2?36:52;Ie?K.lineTo(Math.cos(ze)*Je,Math.sin(ze)*Je):K.moveTo(Math.cos(ze)*Je,Math.sin(ze)*Je)}let te=new Bo(K,{depth:9,bevelEnabled:!1});te.rotateX(-Math.PI/2),X(te,W,0,0,0),X(new ki(9.5,13,38,4,1),W,0,28,0).rotation.y=Math.PI/4,X(new ki(10.5,10.5,2.5,4,1),W,0,47,0).rotation.y=Math.PI/4,X(new ki(3.4,6.2,30,16),O,0,63,0),X(new ms(3.6,16,10),O,0,78,0),X(new ms(2.3,16,12),O,0,82.5,.6);for(let Ie=0;Ie<7;Ie++){let ze=-.95+Ie/6*1.9;X(new ki(.05,.35,4.2,5),O,Math.sin(ze)*2.6,84.5,Math.cos(ze)*2.6*.6+.6).rotation.set(Math.cos(ze)*.9,0,-Math.sin(ze)*.9)}X(new ki(.9,1.2,13,10),O,3.2,86,0,0,-.18),X(new ki(1,.6,2.4,10),O,4.4,92.4,0),X(new Ei(1.2,6.5,4.2),O,-4,70,.6,0,.25);let ae=new ft(new oi(1,1),Et(aa,{uColor:{value:new ge(1,.78,.4)},uIntensity:{value:2.6}},Pi));ae.position.set(4.4,94.5,0),ae.scale.setScalar(11),R.add(ae);let ue=new ft(new oi(1,1),Et(aa,{uColor:{value:new ge(1,.95,.8)},uIntensity:{value:4}},Pi));ue.position.copy(ae.position),ue.scale.setScalar(3.2),R.add(ue);let Se=new ft(new oi(1,1),Et(aa,{uColor:{value:new ge(.55,.9,.8)},uIntensity:{value:.18}},Pi));Se.position.set(0,40,0),Se.scale.setScalar(120),R.add(Se);let we=new kt;we.position.copy(R.position),we.scale.copy(R.scale);for(let Ie of[ae,ue,Se])R.remove(Ie),Ie.position.applyAxisAngle(new P(0,1,0),R.rotation.y),we.add(Ie);R.traverse(Ie=>{Ie.frustumCulled=!1}),we.traverse(Ie=>{Ie.frustumCulled=!1}),y.add(R,we),h.billboards=[ae,ue,Se]}let H=la(28.6)/100,ye=li(28.6,-81.32),Pe=new kt;Pe.position.copy(ye),i.add(Pe);let ve=(b,R,U=0)=>li(b,R,U).sub(ye),E=tm(1875);{let b=Et(fl,{uMode:{value:0},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new se},uUnitsPerM:{value:H},uStreetCol:{value:new ge("#ffad5c")},uDensity:{value:1},uTime:r,...wu(),...c},bs());h.orlGround=b;let R=new ft(new ko(0,1,96),b);R.geometry.rotateX(-Math.PI/2),R.scale.setScalar(380),R.position.y=-.2,R.renderOrder=-8,R.frustumCulled=!1,Pe.add(R)}let j=[["Lake Eola",28.5434,-81.3725,165,150,0],["Lake Lucerne",28.5335,-81.3795,170,110,.3],["Lake Cherokee",28.531,-81.3685,120,90,0],["Lake Davis",28.5293,-81.3737,130,110,.2],["Lake Ivanhoe",28.5665,-81.378,280,620,.15],["Lake Highland",28.56,-81.369,150,130,0],["Lake Dot",28.552,-81.385,100,90,0],["Lake Adair",28.565,-81.399,260,300,0],["Lake Concord",28.564,-81.3925,150,120,0],["Lake Underhill",28.534,-81.333,700,380,.2],["Lake Baldwin",28.569,-81.322,420,360,0],["Lake Virginia",28.5915,-81.342,620,520,.4],["Lake Maitland",28.625,-81.355,900,800,.2],["Lake Killarney",28.603,-81.375,520,420,0],["Lake Howell",28.628,-81.29,600,700,.3],["Red Bug Lake",28.648,-81.266,260,200,.5],["Lake Jesup",28.722,-81.235,7200,2500,.28],["Lake Fairview",28.59,-81.405,700,600,0],["Lake Rowena",28.564,-81.362,180,160,0],["Lake Barton",28.59,-81.32,300,250,.3],["Lake Burkett",28.61,-81.275,400,280,.6]].map(([b,R,U,O,W,X])=>{let K=ve(R,U);return{name:b,x:K.x,z:K.z,rx:O*H,rz:W*H,rot:X}});for(let b=0;b<(s?70:140);b++){let R=28.4+E()*.42,U=-81.52+E()*.36,O=ve(R,U),W=(60+Math.pow(E(),2)*420)*H;j.some(X=>Math.hypot(X.x-O.x,X.z-O.z)<X.rx+W+.5)||ha(R,U,28.5415,-81.379)<900||j.push({name:"",x:O.x,z:O.z,rx:W,rz:W*(.6+E()*.6),rot:E()*3})}let re=(b,R,U=0)=>j.some(O=>{let W=b-O.x,X=R-O.z,K=Math.cos(O.rot),te=Math.sin(O.rot),ae=(W*K-X*te)/(O.rx+U),ue=(W*te+X*K)/(O.rz+U);return ae*ae+ue*ue<1});{let b=Et(pl,{uTime:r,uUnitsPerM:{value:H},uZenith:l,...u,...c},bs());for(let R of j){let U=[],W=E()*10;for(let K=0;K<40;K++){let te=K/40*Math.PI*2,ae=1+.08*Math.sin(te*3+W)+.05*Math.sin(te*5+W*2),ue=Math.cos(te)*R.rx*ae,Se=Math.sin(te)*R.rz*ae,we=Math.cos(R.rot),Ie=Math.sin(R.rot);U.push([R.x+ue*we+Se*Ie,R.z-ue*Ie+Se*we])}let X=gr([U],b,-.15);X.renderOrder=-7,Pe.add(X),h.waterMeshes.push(X)}}let ce=[["I-4",46,[[28.43,-81.47],[28.475,-81.432],[28.507,-81.4],[28.528,-81.39],[28.546,-81.3855],[28.57,-81.377],[28.6,-81.367],[28.64,-81.354],[28.668,-81.343],[28.7,-81.33],[28.735,-81.318]]],["SR 408",36,[[28.537,-81.48],[28.537,-81.42],[28.5405,-81.392],[28.5395,-81.36],[28.537,-81.32],[28.53,-81.27],[28.528,-81.21]]],["SR 436",28,[[28.46,-81.307],[28.52,-81.309],[28.56,-81.31],[28.6,-81.318],[28.64,-81.33],[28.668,-81.34],[28.7,-81.355]]],["SR 417",34,[[28.5,-81.2],[28.56,-81.22],[28.62,-81.24],[28.68,-81.27],[28.72,-81.29]]],["Red Bug Lake Rd",22,[[28.6555,-81.33],[28.6545,-81.3],[28.6555,-81.262],[28.656,-81.225]]],["Tuskawilla Rd",20,[[28.62,-81.2605],[28.6555,-81.2605],[28.69,-81.256],[28.704,-81.254]]],["SR 434",24,[[28.697,-81.36],[28.6985,-81.3],[28.696,-81.25],[28.69,-81.2]]],["Orange Ave",18,[[28.5,-81.379],[28.541,-81.379],[28.58,-81.378]]]],ne=[];{let b=[],R=new ge(2,1.85,1.6),U=new ge(2.4,.18,.08);for(let[,O,W]of ce){let X=W.map(([ue,Se])=>ve(ue,Se)),te=new hr(X).getPoints(X.length*12),ae=new ft(im(te,O*H,.03),Et(_u,{uColor:{value:new ge("#ffb066")},uIntensity:{value:O>30?.75:.45},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Pi));ae.frustumCulled=!1,Pe.add(ae);for(let ue=1;ue<te.length;ue++)if(ne.push([te[ue-1],te[ue]]),ue%2===0){let Se=te[ue-2].clone().setY(.05),we=te[ue].clone().setY(.05),Ie=O>30?s?2:4:1;for(let ze=0;ze<Ie;ze++){let Je=ze%2===0;b.push([Je?Se:we,Je?we:Se,Math.random(),.15+Math.random()*.15,Je?R:U])}}}Pe.add(ua(b,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}let ke=(b,R,U)=>ne.some(([O,W])=>{let X=W.x-O.x,K=W.z-O.z,te=Math.max(0,Math.min(1,((b-O.x)*X+(R-O.z)*K)/(X*X+K*K)));return Math.hypot(b-O.x-X*te,R-O.z-K*te)<U}),_e=ve(28.5434,-81.3725),Ae=new gl;Ae.florida=!0;{let b=ve(28.5415,-81.3795),R=60*H;h.downtownGrid={origin:b.clone().add(new P(-30*H,0,-30*H)),block:120};for(let U=b.x-16*R;U<b.x+16*R;U+=R)for(let O=b.z-16*R;O<b.z+16*R;O+=R){let W=Math.hypot(U-b.x,O-b.z)/H;if(W>1300||re(U,O,25*H)||ke(U,O,30*H)||E()<.3||U>_e.x+120*H||Math.hypot(U-_e.x,O-_e.z)<260*H)continue;let X=Math.exp(-((W/420)**2)),K=8+E()*18+X*120*Math.exp(Su(E)*.45);K=Math.min(K,140),ml(Ae,E,U+(E()-.5)*R*.08,O+(E()-.5)*R*.08,R*(.55+E()*.25),R*(.55+E()*.25),K*H,0,K>60&&E()<.75?1:3,H)}}{let b=ve(28.5446,-81.377),R=15,U=12*H,O=1.6*H,W=new Ei(1,1,1),X=Et(Hp,{uHot:{value:-1},uDraw:{value:0},uTime:r,uCount:{value:R},uZenith:l,...c},{transparent:!1}),K=new di(W,X,R),te=new Float32Array(R),ae=new Rt;for(let ue=0;ue<R;ue++){let Se=1-ue*.012;ae.position.set(b.x,6*H+ue*(U+O)+U/2,b.z),ae.rotation.set(0,.35+ue*.012,0),ae.scale.set(44*H*Se,U,30*H*Se),ae.updateMatrix(),K.setMatrixAt(ue,ae.matrix),te[ue]=ue}W.setAttribute("aFloor",new Jt(te,1)),K.frustumCulled=!1,K.userData.keep=!0,Pe.add(K),h.tower={mesh:K,uniforms:X.uniforms,floorLocal:ue=>b.clone().setY(6*H+ue*(U+O)+U/2),base:b,n:R}}{let b=ve(28.5432,-81.3727,12),R=new ft(new oi(1,1),Et(aa,{uColor:{value:new ge(.6,.8,1)},uIntensity:{value:1.1}},Pi));R.position.copy(b),R.scale.setScalar(40*H),Pe.add(R),h.billboards.push(R),h.fountain=R}let Qe=[],me=[],Ce=[],$e=[],We=[],Oe=[],pt=(b,R,U,O)=>{E()<O?$e.push([b,R,(8+E()*6)*H,E()]):Ce.push([b,R,U*H,E()])},tt=(b,R,U,O,W,X,K,te,ae,ue=1,Se=.35)=>{Qe.push([b,R,U,O,W,X,E()]),E()<.28&&me.push([b+K*.55,R+te*.55,8*H,4.5*H,X,E()]),E()<.65&&pt(b+K*.95+(E()-.5)*ae*.6,R+te*.95+(E()-.5)*ae*.6,(5+E()*5)*ue,Se),E()<.4&&pt(b-K*.8+(E()-.5)*ae*.6,R-te*.8+(E()-.5)*ae*.6,(4+E()*3.5)*ue,Se*1.3)},bt=[[28.6555,-81.2605,s?1300:1900,s?.55:.8],[28.638,-81.29,s?700:1100,.6],[28.672,-81.233,s?600:1e3,.55],[28.565,-81.392,s?600:900,.6],[28.524,-81.362,s?500:800,.55],[28.5428,-81.3645,s?600:820,.8],[28.5545,-81.369,s?400:550,.7],[28.5432,-81.3683,420,.85]],z=ve(28.5415,-81.3795);{let b=22*H,R=34*H,U=14*H,O=R*2+U,W=O*4;for(let[we,Ie,ze,Je]of bt){let at=ve(we,Ie),ct=ze*H;for(let Ee=at.x-ct;Ee<at.x+ct;Ee+=W)for(let Xe=at.z-ct;Xe<at.z+ct;Xe+=W){if(Math.hypot(Ee-at.x,Xe-at.z)>ct-W*.3)continue;let ht=(E()-.5)*.8,et=Math.cos(ht),Ge=Math.sin(ht),vt=(F,q)=>[Ee+F*et-q*Ge,Xe+F*Ge+q*et];for(let F=0;F<=4;F++){let q=-W/2+F*O,[J,k]=vt(-W/2,q),[fe,Me]=vt(W/2,q);Oe.push([J,k,fe,Me,9*H])}for(let F of[-W/2,W/2]){let[q,J]=vt(F,-W/2),[k,fe]=vt(F,W/2);Oe.push([q,J,k,fe,9*H])}let T=Math.floor((W-2*10*H)/b);for(let F=0;F<4;F++)for(let q=0;q<T;q++)for(let J of[-1,1]){if(E()>Je)continue;let k=-W/2+10*H+(q+.5)*b,fe=-W/2+F*O+O/2,Me=fe+J*(R/2+2*H),[Re,Le]=vt(k,Me);if(re(Re,Le,16*H)||ke(Re,Le,24*H)||Re<_e.x+120*H&&Math.hypot(Re-z.x,Le-z.z)<1150*H||Math.hypot(Re-_e.x,Le-_e.z)<250*H)continue;let He=vt(k,fe);tt(Re,Le,(12+E()*6)*H,(10+E()*4)*H,(E()<.3?6:3.3)*H,-ht,He[0]-Re,He[1]-Le,b)}}}let X=ve(28.556,-81.356),K=130*H,te=210*H,ae=1040*H,ue=X.x-ae,Se=X.z-ae;for(let we=ue;we<=X.x+ae+1e-6;we+=K)We.push([new P(we,.06,Se),new P(we,.06,X.z+ae)]);for(let we=Se;we<=X.z+ae+1e-6;we+=te)We.push([new P(ue,.06,we),new P(X.x+ae,.06,we)]);for(let we=ue;we<X.x+ae-1e-6;we+=K)for(let Ie=Se;Ie<X.z+ae-1e-6;Ie+=te){We.push([new P(we+K/2,.06,Ie+8*H),new P(we+K/2,.06,Ie+te-8*H)]);let ze=6+Math.floor(E()*3);for(let Je=1;Je<ze;Je++)We.push([new P(we+8*H,.06,Ie+te*Je/ze),new P(we+K-8*H,.06,Ie+te*Je/ze)]);for(let Je=0;Je<2;Je++)for(let at=0;at<ze;at++){let ct=we+K*(Je===0?.27:.73),Ee=Ie+te*(at+.5)/ze;if(re(ct,Ee,12*H)||E()<.08)continue;let Xe=(we+K/2-ct)*.9;tt(ct,Ee,K/2*.42,te/ze*.6,(E()<.25?6:3.3)*H,0,Xe,0,te/ze,1.5,.12)}}h.parcelCenter=X,h.parcelGrid={origin:new P(ue,0,Se),bw:130,bh:210,span:1040}}{let b=[];for(let O=0;O<48;O++){let W=O/48*Math.PI*2;b.push([_e.x+Math.cos(W)*255*H,_e.z+Math.sin(W)*235*H])}let R=Et(fl,{uMode:{value:2},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new se},uUnitsPerM:{value:H},uStreetCol:{value:new ge("#ffd9a0")},uDensity:{value:1},uTime:r,...wu(),...c},bs()),U=gr([b],R,-.18);U.renderOrder=-7.5,Pe.add(U)}for(let b=0;b<70;b++){let R=E()*Math.PI*2,U=(185+E()*60)*H,O=_e.x+Math.cos(R)*U,W=_e.z+Math.sin(R)*U*.92;re(O,W,8*H)||(E()<.35?$e.push([O,W,(9+E()*5)*H,E()]):Ce.push([O,W,(6+E()*6)*H,E()]))}{let b=[],R=[];for(let[X,K,te,ae,ue]of Oe){let Se=Math.hypot(te-X,ae-K),we=Math.max(1,Math.round(Se/(40*H))),Ie=(te-X)/Se,Je=-((ae-K)/Se)*ue/2,at=Ie*ue/2;for(let ct=0;ct<we;ct++){let Ee=X+(te-X)*(ct/we),Xe=K+(ae-K)*(ct/we),ht=X+(te-X)*((ct+1)/we),et=K+(ae-K)*((ct+1)/we);if(re((Ee+ht)/2,(Xe+et)/2,4*H))continue;let Ge=Se*(ct/we)/H/32,vt=Se*((ct+1)/we)/H/32;b.push(Ee+Je,.03,Xe+at,Ee-Je,.03,Xe-at,ht+Je,.03,et+at,Ee-Je,.03,Xe-at,ht-Je,.03,et-at,ht+Je,.03,et+at),R.push(Ge,0,Ge,1,vt,0,Ge,1,vt,1,vt,0)}}let O=new Mt;O.setAttribute("position",new st(b,3)),O.setAttribute("uv",new st(R,2));let W=new ft(O,Et(Mu,{uColor:{value:new ge("#ffb56b")},...c},Pi));W.frustumCulled=!1,Pe.add(W)}{let b=h.orlGround.uniforms,R=X=>[(X.x+ye.x)/H,(X.z+ye.z)/H],U=h.downtownGrid;b.uAlignA.value=[...R(U.origin),1500,0],b.uAlignAS.value=[U.block,U.block];let O=h.parcelGrid,W=R(h.parcelCenter);b.uAlignB.value=[W[0],W[1],O.span,0],b.uAlignBS.value=[O.bw,O.bh],b.uAlignBO.value=R(O.origin),bt.forEach(([X,K,te],ae)=>{let ue=ve(X,K),[Se,we]=R(ue);b.uHoods.value[ae].set(Se,we,te)})}{let b=[],R=[];for(let W of j){if(!W.name)continue;let X=48,K=Math.PI*(W.rx+W.rz)/H,te=10*H;for(let ae=0;ae<X;ae++){let ue=(vt,T)=>{let F=Math.cos(vt)*(W.rx+T),q=Math.sin(vt)*(W.rz+T),J=Math.cos(W.rot),k=Math.sin(W.rot);return[W.x+F*J+q*k,W.z-F*k+q*J]},Se=ae/X*Math.PI*2,we=(ae+1)/X*Math.PI*2,[Ie,ze]=ue(Se,6*H),[Je,at]=ue(we,6*H),[ct,Ee]=ue(Se,6*H+te),[Xe,ht]=ue(we,6*H+te),et=K*ae/X/26,Ge=K*(ae+1)/X/26;b.push(Ie,.04,ze,ct,.04,Ee,Je,.04,at,ct,.04,Ee,Xe,.04,ht,Je,.04,at),R.push(et,0,et,1,Ge,0,et,1,Ge,1,Ge,0)}}let U=new Mt;U.setAttribute("position",new st(b,3)),U.setAttribute("uv",new st(R,2));let O=new ft(U,Et(Mu,{uColor:{value:new ge("#ffd6a0")},...c},Pi));O.frustumCulled=!1,Pe.add(O)}{let b=new Rt,R=Qe.length,U={uTime:r,uZenith:l,uUnitsPerM:{value:H},...c},O=Et(Np,U),W=new Float32Array(R);Qe.forEach((Xe,ht)=>{W[ht]=Xe[6]});let X=new Ei(1,1,1);X.translate(0,.5,0),X.setAttribute("aSeed",new Jt(W,1));let K=new di(X,O,Math.max(1,R)),te=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.18,1,0],[.18,1,0]],ae=[[0,5,1],[0,4,5],[2,5,4],[2,4,3],[1,5,2],[3,4,0],[0,1,2],[0,2,3]],ue=new Float32Array(ae.length*9);ae.forEach((Xe,ht)=>Xe.forEach((et,Ge)=>ue.set(te[et],ht*9+Ge*3)));let Se=new Mt;Se.setAttribute("position",new nt(ue,3)),Se.setAttribute("uv",new nt(new Float32Array(ue.length/3*2).map((Xe,ht)=>ht%2?2:0),2)),Se.computeVertexNormals(),Se.setAttribute("aSeed",new Jt(W,1));let we=new di(Se,O,Math.max(1,R));Qe.forEach(([Xe,ht,et,Ge,vt,T],F)=>{b.position.set(Xe,0,ht),b.rotation.set(0,T,0),b.scale.set(et,vt,Ge),b.updateMatrix(),K.setMatrixAt(F,b.matrix),b.position.set(Xe,vt,ht),b.scale.set(et*1.08,Math.min(et,Ge)*.36,Ge*1.12),b.updateMatrix(),we.setMatrixAt(F,b.matrix)}),K.frustumCulled=we.frustumCulled=!1,Pe.add(K,we);let Ie=new oi(1,1);Ie.rotateX(-Math.PI/2);let ze=new di(Ie,Et(Bp,{uTime:r,...c}),Math.max(1,me.length)),Je=new Float32Array(me.length);me.forEach(([Xe,ht,et,Ge,vt,T],F)=>{b.position.set(Xe,.02,ht),b.rotation.set(0,vt,0),b.scale.set(et,1,Ge),b.updateMatrix(),ze.setMatrixAt(F,b.matrix),Je[F]=T}),Ie.setAttribute("aSeed",new Jt(Je,1)),ze.frustumCulled=!1,Pe.add(ze);let at=new zo(1,2),ct=new di(at,Et(Op,{uZenith:l,...c}),Math.max(1,Ce.length)),Ee=new Float32Array(Ce.length);Ce.forEach(([Xe,ht,et,Ge],vt)=>{b.position.set(Xe,et*.75,ht),b.rotation.set(0,Ge*7,0),b.scale.set(et,et*.62,et),b.updateMatrix(),ct.setMatrixAt(vt,b.matrix),Ee[vt]=Ge}),at.setAttribute("aSeed",new Jt(Ee,1)),ct.frustumCulled=!1,Pe.add(ct);{let Xe=[],ht=[],et=[],Ge=(fe,Me,Re)=>{Xe.push(...fe),ht.push(...Me),et.push(Re)};for(let fe=0;fe<5;fe++){let Me=fe/5*Math.PI*2,Re=(fe+1)/5*Math.PI*2,Le=.032,He=.022,Ye=(St,wt,Dt)=>[Math.cos(St)*wt+Dt*Dt*.05,Dt,Math.sin(St)*wt],Be=[Math.cos(Me),0,Math.sin(Me)],yt=[Math.cos(Re),0,Math.sin(Re)];Ge(Ye(Me,Le,0),Be,0),Ge(Ye(Re,Le,0),yt,0),Ge(Ye(Re,He,.9),yt,0),Ge(Ye(Me,Le,0),Be,0),Ge(Ye(Re,He,.9),yt,0),Ge(Ye(Me,He,.9),Be,0)}let T=[.04,.9,0],F=9;for(let fe=0;fe<F;fe++){let Me=fe/F*Math.PI*2+fe%2*.2,Re=Math.cos(Me),Le=Math.sin(Me),He=4,Ye=Be=>[T[0]+Re*Be*.42,T[1]+.08*Math.sin(Be*Math.PI*.6)-.22*Be*Be,T[2]+Le*Be*.42];for(let Be=0;Be<He;Be++){let yt=Be/He,St=(Be+1)/He,wt=.07*Math.sin(Math.PI*Math.min(.95,yt+.08)),Dt=.07*Math.sin(Math.PI*Math.min(.95,St+.08)),ut=Ye(yt),Ve=Ye(St),Ut=-Le,_t=Re,Yt=[[ut[0]+Ut*wt,ut[1]-.02,ut[2]+_t*wt],[ut[0]-Ut*wt,ut[1]-.02,ut[2]-_t*wt],[Ve[0]+Ut*Dt,Ve[1]-.02,Ve[2]+_t*Dt],[Ve[0]-Ut*Dt,Ve[1]-.02,Ve[2]-_t*Dt]],Ht=[0,1,0];Ge(Yt[0],Ht,1),Ge(Yt[2],Ht,1),Ge(ut,Ht,1),Ge(ut,Ht,1),Ge(Yt[2],Ht,1),Ge(Ve,Ht,1),Ge(Yt[1],Ht,1),Ge(ut,Ht,1),Ge(Yt[3],Ht,1),Ge(ut,Ht,1),Ge(Ve,Ht,1),Ge(Yt[3],Ht,1)}}let q=new Mt;q.setAttribute("position",new st(Xe,3)),q.setAttribute("normal",new st(ht,3)),q.setAttribute("aPart",new st(et,1));let J=new Float32Array($e.length),k=new di(q,Et(Fp,{uTime:r,uZenith:l,...c},{side:ii}),Math.max(1,$e.length));$e.forEach(([fe,Me,Re,Le],He)=>{b.position.set(fe,0,Me),b.rotation.set(0,Le*6.28,0),b.scale.setScalar(Re),b.updateMatrix(),k.setMatrixAt(He,b.matrix),J[He]=Le}),q.setAttribute("aSeed",new Jt(J,1)),k.frustumCulled=!1,Pe.add(k)}h.homeCount=R}let Fe={uTime:r,uUnitsPerM:{value:H},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...he,...c};Pe.add(Ae.mesh(Et(xu,Fe)));{let b=new Float32Array(We.length*6);We.forEach(([W,X],K)=>b.set([W.x,W.y,W.z,X.x,X.y,X.z],K*6));let R=new Mt;R.setAttribute("position",new nt(b,3));let U=new At({vertexShader:"varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`uniform float uOn; uniform vec3 uPointer; uniform float uPointerOn; uniform vec3 uCenter; uniform float uSpan; varying vec3 vP;
        void main(){ float d = length(vP.xz - uPointer.xz); float near = exp(-d*d/(uSpan*uSpan*0.012)) * uPointerOn;
          float edge = 1.0 - smoothstep(0.6, 1.0, length(vP.xz - uCenter.xz) / uSpan);
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (0.32 + near * 3.0);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,uniforms:{uOn:{value:0},uPointer:{value:new P(1e6,0,1e6)},uPointerOn:{value:0},uCenter:{value:new P().copy(h.parcelCenter).add(ye)},uSpan:{value:1100*H}},...Pi}),O=new fs(R,U);O.frustumCulled=!1,O.userData.keep=!0,Pe.add(O),h.parcels=U,h.parcelLines=O}let ie=(b,R=0)=>li(b.lat,b.lon,R);h.offices=[Ms.nyOffice,Ms.orlandoOffice].map((b,R)=>{let U=ie(b),O=Et(Vp,{uTime:r,uOn:{value:1},uColor:{value:new ge(1,.8,.5)}},{...Pi,side:ii}),W=new ft(new oi(1,1),O);W.geometry.rotateX(-Math.PI/2),W.position.copy(U).setY(U.y+.06),W.frustumCulled=!1,i.add(W);let X=Et(kp,{uColor:{value:new ge(1,.78,.45)},uIntensity:{value:1.4},uTime:r},{...Pi,side:ii}),K=new ft(new ki(1,1,1,24,1,!0),X);return K.geometry.translate(0,.5,0),K.position.copy(U),K.frustumCulled=!1,i.add(K),h.hit.push({center:U,r:0,chapter:R===0?2:3,label:R===0?"New York \xB7 Commercial":"Florida \xB7 Commercial & residential",place:b}),{...b,id:R===0?"new-york":"orlando",pos:U,ring:W,beam:K,ringMat:O,beamMat:X}});{let b=h.offices[0].pos,R=h.offices[1].pos,U=[];for(let K=0;K<=64;K++){let te=K/64,ae=b.clone().lerp(R,te);ae.y=Math.sin(Math.PI*te)*2600+2,U.push(ae)}let O=new Ho(new hr(U),200,40,8,!1),W=new At({vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform float uTime; uniform float uDraw; uniform float uOn; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(clamp(abs(dot(normalize(vN), V)), 0.0, 1.0), 1.5);
          float d = fract(vUv.x * 9.0 - uTime * 0.25); float dash = 0.35 + 1.5 * smoothstep(0.82, 1.0, d);
          float shown = step(vUv.x, uDraw);
          gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * core * dash * shown * uOn * 1.4, 1.0); }`,uniforms:{uTime:r,uDraw:{value:0},uOn:{value:0}},...Pi}),X=new ft(O,W);X.frustumCulled=!1,i.add(X),h.arc=W}{let b=Et(Gp,{uTime:r,uOpacity:{value:0},uZenith:l,...c},{transparent:!0,depthWrite:!1}),R=new oi(1,1);R.rotateX(-Math.PI/2);let U=new ft(R,b);U.scale.set(8e4,1,8e4),U.position.set((m.x+ye.x)/2,95,(m.z+ye.z)/2),U.renderOrder=5,U.frustumCulled=!1,i.add(U),h.clouds=b}return h.stats={orlBuildings:Ae.items.length,trees:Ce.length,palms:$e.length,pools:me.length,streets:Oe.length,lakes:j.length},h.nyc={group:y,upm:f,L:p,center:m},h.orl={group:Pe,upm:H,L:ve,center:ye},h}var Tu=new WeakMap,vl=class extends Zi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new an(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,It,n).catch(n)}decodeDracoFile(e,t,n,s,r=Vt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Tu.has(e)){let l=Tu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Tu.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Mt;e.index&&t.setIndex(new nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,l=new nt(a,o);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;let n=new ge;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),mt.toWorkingColorSpace(n,It),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new an(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=wb.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function wb(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),m=f.attributes.map(y=>y.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let p in h){let g=self[u[p]],x,v;if(c.useUniqueIDs)v=h[p],x=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[h[p]]),v===-1)continue;x=o.GetAttribute(d,v)}let M=s(a,o,d,p,g,x);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),y.attributes.push(M)}return m===a.TRIANGULAR_MESH&&(y.index=n(a,o,d)),a.destroy(d),y}function n(a,o,l){let h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,h,u){let d=u.num_components(),m=l.num_points()*d,y=m*h.BYTES_PER_ELEMENT,p=r(a,h),g=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,u,p,y,g);let x=new h(a.HEAPF32.buffer,g,m).slice();return a._free(g),{name:c,array:x,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function Tb(i){try{let e=typeof location<"u"?location.href:void 0;return new URL(i,e).origin}catch{return null}}function sm(i){if(!i)return null;let e=i.length,t=i.indexOf("?"),n=i.indexOf("#");t!==-1&&(e=Math.min(e,t)),n!==-1&&(e=Math.min(e,n));let s=i.lastIndexOf(".",e),r=i.lastIndexOf("/",e),a=i.indexOf("://");return a!==-1&&a+2===r||s===-1||s<r?null:i.substring(s+1,e)||null}var xl,_l=(xl=class{static setXRSession(i){i!==this.session&&(this.flushPending(),this.session=i)}static requestAnimationFrame(i){let{session:e,pending:t}=this,n,s=()=>{t.delete(n),i()};return n=e?e.requestAnimationFrame(s):requestAnimationFrame(s),t.set(n,i),n}static cancelAnimationFrame(i){let{pending:e,session:t}=this;e.delete(i),t?t.cancelAnimationFrame(i):cancelAnimationFrame(i)}static flushPending(){this.pending.forEach((i,e)=>{i(),this.cancelAnimationFrame(e)})}},jl(xl,"pending",new Map),jl(xl,"session",null),xl),rm=2**30,lm=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(i){i.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(e,t)=>{let n=i(e),s=i(t);return n<s?-1:+(n>s)}):this._unloadPriorityCallback=i}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*rm,this.maxBytesSize=.4*rm,this.unloadPercent=.05,this.autoMarkUnused=!0,this.cachedBytes=0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;let i=this.itemSet;this.defaultPriorityCallback=e=>i.get(e)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(i){return this.bytesMap.get(i)||0}setMemoryUsage(i,e){let{bytesMap:t,itemSet:n}=this;n.has(i)&&(e=Math.round(e),this.cachedBytes-=t.get(i)||0,t.set(i,e),this.cachedBytes+=e)}add(i,e){let t=this.itemSet;if(t.has(i)||this.isFull())return!1;let n=this.usedSet,s=this.itemList,r=this.callbacks;return s.push(i),n.add(i),t.set(i,Date.now()),r.set(i,e),!0}has(i){return this.itemSet.has(i)}remove(i){let e=this.usedSet,t=this.itemSet,n=this.itemList,s=this.bytesMap,r=this.callbacks,a=this.loadedSet;if(t.has(i)){this.cachedBytes-=s.get(i)||0,s.delete(i),r.get(i)(i);let o=n.indexOf(i);return n.splice(o,1),e.delete(i),t.delete(i),r.delete(i),a.delete(i),!0}return!1}setLoaded(i,e){let{itemSet:t,loadedSet:n}=this;t.has(i)&&(e===!0?n.add(i):n.delete(i))}markUsed(i){let e=this.itemSet,t=this.usedSet;e.has(i)&&!t.has(i)&&(e.set(i,Date.now()),t.add(i))}markUnused(i){this.usedSet.delete(i)}markAllUnused(){this.usedSet.clear()}isUsed(i){return this.usedSet.has(i)}unloadUnusedContent(){let{unloadPercent:i,minSize:e,maxSize:t,itemList:n,itemSet:s,usedSet:r,loadedSet:a,callbacks:o,bytesMap:l,minBytesSize:c,maxBytesSize:h}=this,u=n.length-r.size,d=n.length-a.size,f=Math.max(Math.min(n.length-e,u),0),m=this.cachedBytes-c,y=this.unloadPriorityCallback||this.defaultPriorityCallback,p=!1,g=f>0&&u>0||d&&n.length>t;if(u&&this.cachedBytes>c||d&&this.cachedBytes>h||g){n.sort((D,Z)=>{let _=r.has(D);if(_===r.has(Z)){let w=a.has(D);return w===a.has(Z)?-y(D,Z):w?1:-1}else return _?1:-1});let x=Math.max(e*i,f*i),v=Math.ceil(Math.min(x,u,f)),M=Math.max(i*m,i*c),L=Math.min(M,m),C=0,A=0;for(;C<n.length&&(this.cachedBytes-A>h||n.length-C>t);){let D=n[C],Z=l.get(D)||0;if(r.has(D)&&a.has(D)||this.cachedBytes-A-Z<h&&n.length-C<=t)break;A+=Z,C++}for(;C<n.length&&(A<L||C<v);){let D=n[C],Z=l.get(D)||0;if(r.has(D)||this.cachedBytes-A-Z<c&&C>=v)break;A+=Z,C++}n.splice(0,C).forEach(D=>{this.cachedBytes-=l.get(D)||0,o.get(D)(D),l.delete(D),s.delete(D),o.delete(D),a.delete(D),r.delete(D)}),p=C<f||A<m&&C<u,p&&(p=C>0)}p&&(this.unloadingHandle=_l.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){_l.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},Ab=class extends DOMException{constructor(){super("PriorityQueue: Item removed","AbortError")}},vr=class{get running(){return this.items.length!==0||this.currJobs!==0}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=i=>{_l.requestAnimationFrame(i)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){let i=this.priorityCallback,e=this.items;i!==null&&e.sort(i)}has(i){return this.callbacks.has(i)}add(i,e){let t={callback:e,reject:null,resolve:null,promise:null};return t.promise=new Promise((n,s)=>{let r=this.items,a=this.callbacks;t.resolve=n,t.reject=s,r.unshift(i),a.set(i,t),this.autoUpdate&&this.scheduleJobRun()}),t.promise}remove(i){let e=this.items,t=this.callbacks,n=e.indexOf(i);if(n!==-1){let s=t.get(i);s.promise.catch(r=>{if(r.name!=="AbortError")throw r}),s.reject(new Ab),e.splice(n,1),t.delete(i)}}removeByFilter(i){let{items:e}=this;for(let t=0;t<e.length;t++){let n=e[t];i(n)&&(this.remove(n),t--)}}tryRunJobs(){this.sort();let i=this.items,e=this.callbacks,t=this.maxJobs,n=0,s=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;t>this.currJobs&&i.length>0&&n<t;){this.currJobs++,n++;let r=i.pop(),{callback:a,resolve:o,reject:l}=e.get(r);e.delete(r);let c;try{c=a(r)}catch(h){l(h),s();continue}c instanceof Promise?c.then(o).catch(l).finally(s):(o(c),s())}}flush(i){let{items:e,callbacks:t}=this,n=e.indexOf(i);if(!t.has(i))return;let{callback:s,resolve:r,reject:a}=t.get(i);t.delete(i),e.splice(n,1);let o;try{o=s(i)}catch(l){a(l);return}return o instanceof Promise?o.then(r).catch(a):r(o),o}scheduleJobRun(){this.scheduled||(this.scheduled=(this._schedulingCallback(this._runjobs),!0))}},Eb=class{get running(){for(let i of this.originQueues.values())if(i.running)return!0;return!1}get maxJobsPerOrigin(){return this._maxJobsPerOrigin}set maxJobsPerOrigin(i){this._maxJobsPerOrigin=i,this.originQueues.forEach(e=>e.maxJobs=i)}get maxJobs(){return this.maxJobsPerOrigin}set maxJobs(i){console.warn('DownloadPriorityQueue: "maxJobs" is no longer valid and limits jobs per server origin. Use "maxJobsPerOrigin", instead.'),this.maxJobsPerOrigin=i}get priorityCallback(){return this._priorityCallback}set priorityCallback(i){this._priorityCallback=i,this.originQueues.forEach(e=>e.priorityCallback=i)}constructor(){this.originQueues=new Map,this._itemQueues=new WeakMap,this._maxJobsPerOrigin=6,this._priorityCallback=null}add(i,e,t,n=null){this.originQueues.forEach((l,c)=>{l.running||this.originQueues.delete(c)});let s=i===null?null:Tb(i),r=this.originQueues.get(s);r||(r=new vr,r.maxJobs=this._maxJobsPerOrigin,r.priorityCallback=this._priorityCallback,this.originQueues.set(s,r));let a=this._itemQueues.get(e);if(a&&a!==r&&a.has(e))throw Error("DownloadPriorityQueue: Item is already queued with a different url origin.");this._itemQueues.set(e,r);let o=r.add(e,t);return n!==null&&(n.aborted?this.remove(e):n.addEventListener("abort",()=>this.remove(e),{once:!0})),o}remove(i){let e=this._itemQueues.get(i);e&&(e.remove(i),this._itemQueues.delete(i))}has(i){let e=this._itemQueues.get(i);return!!(e&&e.has(i))}};var yr=6378137,VS=1/298.257223563,cm=6356752314245179e-9,yl={inView:!1,error:1/0,distanceFromCamera:1/0};function Sl(i){return i===4||i===-1}function bn(i,e){return wl(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function wl(i){return!!i.traversal}function fa(i){let{children:e}=i,t=e.length===0||wl(e[e.length-1]),n=!i.internal.hasUnrenderableContent||Sl(i.internal.loadingState);return t&&n}function Ss(i){return i.traversal.unconditionallyRefine}function da(i,e,t=!0){if(wl(i)&&(e.ensureChildrenArePreprocessed(i),i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.wasInFrustum=i.traversal.inFrustum,i.traversal.wasSetActive=i.traversal.active,i.traversal.wasSetVisible=i.traversal.visible,i.traversal.usedLastFrame=i.traversal.used,i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,i.traversal.allChildrenLoaded=!1,i.traversal.kicked=!1,i.traversal.allUsedChildrenProcessed=!1,t&&(e.calculateTileViewErrorWithPlugin(i,yl),i.traversal.inFrustum=yl.inView,i.traversal.error=yl.error,i.traversal.distanceFromCamera=yl.distanceFromCamera),i.traversal.unconditionallyRefine=i.internal.hasUnrenderableContent,!i.traversal.unconditionallyRefine))){let n=i.parent;for(;n&&n.traversal.unconditionallyRefine;)n=n.parent;n&&n.geometricError<=i.geometricError&&(i.traversal.unconditionallyRefine=!0)}}function Au(i,e,t=!1){if(da(i,e),t?e.markTileUsed(i):Ml(i),Ss(i)&&fa(i)){let n=i.children;for(let s=0,r=n.length;s<r;s++)Au(n[s],e,t)}}function hm(i,e){if(da(i,e),i.traversal.usedLastFrame&&(Ml(i),i.traversal.wasSetActive&&(i.traversal.active=!0),(!i.traversal.active||Ss(i))&&fa(i))){let t=i.children;for(let n=0,s=t.length;n<s;n++)hm(t[n],e)}}function Ml(i){i.traversal.used=!0}function Cb(i,e){return!(i.traversal.error<=e.errorTarget&&!Ss(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!fa(i))}function um(i,e){let{frameCount:t}=e,{children:n}=i;for(let s=0,r=n.length;s<r;s++){let a=n[s];bn(a,t)&&(a.traversal.active&&(a.traversal.kicked=!0,a.traversal.active=!1),um(a,e))}}function am(i){return!Ss(i)&&(!i.internal.hasContent||Sl(i.internal.loadingState))}function dm(i,e){if(da(i,e),!i.traversal.inFrustum)return;let t=i.parent;if(t&&t.refine==="ADD"&&i.geometricError>0&&i.traversal.error*(t.geometricError/i.geometricError)<=e.errorTarget)return;if(!Cb(i,e)){Ml(i);return}let n=!1,s=!1,r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];dm(l,e),n||(n=bn(l,e.frameCount)),s||(s=l.traversal.inFrustum)}if(i.refine==="REPLACE"&&!s&&r.length!==0){i.traversal.inFrustum=!1,e.markTileUsed(i);for(let a=0,o=r.length;a<o;a++)Au(r[a],e,!0);return}if(Ml(i),i.refine==="REPLACE"&&n&&(e.loadSiblings||e.loadAncestors))for(let a=0,o=r.length;a<o;a++)Au(r[a],e)}function fm(i,e){let t=e.frameCount;if(!bn(i,t))return;let n=i.children,s=!1;for(let a=0,o=n.length;a<o;a++){let l=n[a];s||(s=bn(l,t))}if(!s)i.traversal.isLeaf=!0;else{for(let o=0,l=n.length;o<l;o++)fm(n[o],e);let a=!0;for(let o=0,l=n.length;o<l;o++){let c=n[o];if(bn(c,t)){let h=!Ss(c),u=!c.internal.hasContent||Sl(c.internal.loadingState);h&&u||c.traversal.allChildrenLoaded||(a=!1)}}i.traversal.allChildrenLoaded=a}let r=!0;for(let a=0,o=n.length;a<o;a++){let l=n[a];bn(l,e.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}i.traversal.allUsedChildrenProcessed=r&&fa(i)}function pm(i,e){if(!bn(i,e.frameCount))return;let t=i.children;if(i.refine==="REPLACE"&&e.loadAncestors&&!i.traversal.allChildrenLoaded&&!Ss(i)&&(i.traversal.isLeaf=!0),i.traversal.isLeaf){if(!Ss(i)&&(i.traversal.active=!0,fa(i)&&i.internal.hasContent&&!Sl(i.internal.loadingState)))for(let s=0,r=t.length;s<r;s++)hm(t[s],e);return}let n=t.length>0;for(let s=0,r=t.length;s<r;s++){let a=t[s];pm(a,e),bn(a,e.frameCount)&&!(a.traversal.active&&am(a))&&!a.traversal.allChildrenReady&&(n=!1)}i.traversal.allChildrenReady=n,i.refine==="REPLACE"&&!n&&i.traversal.wasSetActive&&am(i)&&(i.traversal.active=!0,um(i,e))}function mm(i,e){da(i,e,!1);let t=bn(i,e.frameCount);if(t&&(i.internal.hasUnrenderableContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.hasRenderableContent&&i.refine==="ADD"&&(i.traversal.active=!0),(i.traversal.active||i.traversal.kicked)&&i.internal.hasContent&&(e.markTileUsed(i),i.traversal.allUsedChildrenProcessed&&e.queueTileForDownload(i),i.internal.loadingState!==4&&(i.traversal.active=!1)),e.loadAncestors&&i.internal.hasContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.virtualChildCount>0&&i.internal.hasContent&&e.markTileUsed(i),i.traversal.visible=i.internal.hasRenderableContent&&i.traversal.active&&i.traversal.inFrustum&&i.internal.loadingState===4,e.stats.used++,i.traversal.inFrustum&&e.stats.inFrustum++),t||wl(i)&&i.traversal.usedLastFrame){let n=!1,s=!1;t?(n=i.traversal.active,s=e.displayActiveTiles&&i.traversal.active||i.traversal.visible):da(i,e,!1),i.internal.hasRenderableContent&&i.internal.loadingState===4?(n&&e.stats.active++,s&&e.stats.visible++,i.traversal.wasSetActive!==n&&e.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(i,n)),i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(i,s))):i.internal.hasRenderableContent||(s=i.traversal.isLeaf,i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setEmptyTileVisible&&a.setEmptyTileVisible(i,s))),i.traversal.visible=s,i.traversal.active=n;let r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];mm(l,e)}}}function Rb(i,e){dm(i,e),fm(i,e),pm(i,e),mm(i,e)}function Pb(i){let e=null;return()=>{e===null&&(e=_l.requestAnimationFrame(()=>{e=null,i()}))}}function Ru(i,e=null,t=null){let n=[];for(n.push(i),n.push(null),n.push(0);n.length>0;){let s=n.pop(),r=n.pop(),a=n.pop();if(e&&e(a,r,s)){t&&t(a,r,s);return}let o=a.children;if(o)for(let l=o.length-1;l>=0;l--)n.push(o[l]),n.push(a),n.push(s+1);t&&t(a,r,s)}}var om=Symbol("PLUGIN_REGISTERED"),Yn={inView:!0,error:0,distance:1/0},Ib=(i,e)=>{let t=i.priority||0,n=e.priority||0;return t===n?!i.traversal||!e.traversal?0:i.traversal.used===e.traversal.used?i.traversal.error===e.traversal.error?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.traversal.error>e.traversal.error?1:-1:i.traversal.used?1:-1:t>n?1:-1},Lb=(i,e)=>i.traversal.used===e.traversal.used?i.traversal.inFrustum===e.traversal.inFrustum?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.internal.hasUnrenderableContent?1:-1:i.traversal.inFrustum?1:-1:i.traversal.used?1:-1,Db=(i,e)=>i.traversal.lastFrameVisited===e.traversal.lastFrameVisited?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?i.internal.loadingState===e.internal.loadingState?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.error===e.traversal.error?0:i.traversal.error>e.traversal.error?-1:1:i.internal.hasUnrenderableContent?-1:1:i.internal.loadingState>e.internal.loadingState?-1:1:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?1:-1:i.traversal.lastFrameVisited>e.traversal.lastFrameVisited?-1:1,pa=(i,e)=>{let t=i.priority??1/0,n=e.priority??1/0;if(t!==n)return t>n?1:-1;if(!i.internal||!e.internal)return 0;let s=i.internal.renderer,r=e.internal.renderer,a=!s.loadAncestors,o=!r.loadAncestors;return a&&o?Lb(i,e):Ib(i,e)},gm=new lm;gm.unloadPriorityCallback=Db;var bl=new Eb;bl.maxJobsPerOrigin=25,bl.priorityCallback=pa;var Eu=new vr;Eu.maxJobs=5,Eu.priorityCallback=pa;var Cu=new vr;Cu.maxJobs=25,Cu.priorityCallback=(i,e)=>{let t=i.parent,n=e.parent;return t===n?0:t?n?pa(t,n):-1:1};var vm=class{get root(){let i=this.rootTileset;return i?i.root:null}get loadProgress(){let{stats:i,isLoading:e}=this,t=i.queued+i.downloading+i.parsing,n=i.inCacheSinceLoad+ +!!e;return n===0?1:1-t/n}get downloadQueue(){return this._downloadQueue}set downloadQueue(i){if(i instanceof vr){console.warn('TilesRenderer: "downloadQueue" is no longer valid as a PriorityQueue. Use a DownloadPriorityQueue, instead.');return}this._downloadQueue=i}constructor(i=null){this.rootLoadingState=0,this.rootTileset=null,this.rootURL=i,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.queuedTileSet=new Set,this.cachedSinceLoadComplete=new Set,this.isLoading=!1,this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=gm,this.downloadQueue=bl,this.parseQueue=Eu,this.processNodeQueue=Cu,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,refused:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=Pb(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this.errorFalloff=0,this.errorFalloffDensity=2e-4,this.displayActiveTiles=!1,this.maxDepth=1/0,this.loadSiblings=!0,this.loadAncestors=!0,this.maxTilesProcessed=250}registerPlugin(i){if(i[om]===!0)throw Error("TilesRendererBase: A plugin can only be registered to a single tileset");let e=this.plugins,t=i.priority||0,n=e.length;for(let s=0;s<e.length;s++)if((e[s].priority||0)>t){n=s;break}e.splice(n,0,i),i[om]=!0,i.init&&i.init(this)}unregisterPlugin(i){let e=this.plugins;if(typeof i=="string"&&(i=this.getPluginByName(i)),e.includes(i)){let t=e.indexOf(i);return e.splice(t,1),i.dispose&&i.dispose(),!0}return!1}getPluginByName(i){return this.plugins.find(e=>e.name===i)||null}invokeOnePlugin(i){let e=[...this.plugins,this];for(let t=0;t<e.length;t++){let n=i(e[t]);if(n)return n}return null}invokeAllPlugins(i){let e=[...this.plugins,this],t=[];for(let n=0;n<e.length;n++){let s=i(e[n]);s&&t.push(s)}return t.length===0?null:Promise.all(t)}traverse(i,e,t=!0){this.root&&Ru(this.root,(n,...s)=>(t&&this.ensureChildrenArePreprocessed(n,!0),i?i(n,...s):!1),e)}getAttributions(i=[]){return this.invokeAllPlugins(e=>e!==this&&e.getAttributions&&e.getAttributions(i)),i}update(){let{lruCache:i,usedSet:e,stats:t,root:n,downloadQueue:s,parseQueue:r,processNodeQueue:a,queuedTiles:o,queuedTileSet:l}=this;if(this.rootLoadingState===0&&(this.rootLoadingState=2,this.invokeOnePlugin(d=>d.loadRootTileset&&d.loadRootTileset()).then(d=>{let f=this.rootURL;f!==null&&this.invokeAllPlugins(m=>f=m.preprocessURL?m.preprocessURL(f,null):f),this.rootLoadingState=4,this.rootTileset=d,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-tileset",tileset:d,url:f}),this.dispatchEvent({type:"load-root-tileset",tileset:d,url:f})}).catch(d=>{this.rootLoadingState=-1,console.error(d),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:d,url:this.rootURL})})),!n)return;let c=null;if(this.invokeAllPlugins(d=>{if(d.doTilesNeedUpdate){let f=d.doTilesNeedUpdate();c=c===null?f:!!(c||f)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),t.inFrustum=0,t.used=0,t.active=0,t.visible=0,t.refused=0,t.tilesProcessed=0,this.frameCount++,e.forEach(d=>i.markUnused(d)),e.clear(),this.prepareForTraversal(),Rb(n,this),this.removeUnusedPendingTiles(),o.sort(i.unloadPriorityCallback);let h=0,u=o.length;for(;h<u&&!i.isFull();h++)this.requestTileContents(o[h]);t.refused+=o.length-h,o.length=0,l.clear(),i.scheduleUnload(),(s.running||r.running||a.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),t.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===-1&&(this.rootLoadingState=0);let i=this.stats;i.failed!==0&&(this.traverse(e=>{e.internal.loadingState===-1&&(e.internal.loadingState=0)},null,!1),i.failed=0)}calculateTileViewErrorWithPlugin(i,e){this.calculateTileViewError(i,e);let{errorFalloff:t,errorFalloffDensity:n}=this;if(t>0&&Number.isFinite(e.distanceFromCamera)){let o=e.distanceFromCamera*n;e.error-=t*(1-Math.exp(-o*o))}let s=null,r=0,a=1/0;this.invokeAllPlugins(o=>{o!==this&&o.calculateTileViewError&&(Yn.inView=!0,Yn.error=0,Yn.distance=1/0,o.calculateTileViewError(i,Yn)&&(s===null&&(s=!0),s&&(s=Yn.inView),Yn.inView&&(a=Math.min(a,Yn.distance),r=Math.max(r,Yn.error))))}),e.inView&&s!==!1?(e.error=Math.max(e.error,r),e.distanceFromCamera=Math.min(e.distanceFromCamera,a)):s?(e.inView=!0,e.error=r,e.distanceFromCamera=a):e.inView=!1}dispose(){[...this.plugins].forEach(t=>{this.unregisterPlugin(t)});let i=this.lruCache,e=[];this.traverse(t=>(e.push(t),!1),null,!1);for(let t=0,n=e.length;t<n;t++)i.remove(e[t]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(i,e){return 0}dispatchEvent(i){}addEventListener(i,e){}removeEventListener(i,e){}parseTile(i,e,t){return null}prepareForTraversal(){}disposeTile(i){i.traversal.visible&&(i.internal.hasRenderableContent?this.invokeOnePlugin(t=>t.setTileVisible&&t.setTileVisible(i,!1)):this.invokeOnePlugin(t=>t.setEmptyTileVisible&&t.setEmptyTileVisible(i,!1)),i.traversal.visible=!1),i.traversal.active&&i.internal.hasRenderableContent&&this.invokeOnePlugin(t=>t.setTileActive&&t.setTileActive(i,!1)),i.traversal.active=!1;let{scene:e}=i.engineData;e&&this.dispatchEvent({type:"dispose-model",scene:e,tile:i})}preprocessNode(i,e,t=null){if(this.processedTiles.add(i),this.stats.tilesProcessed++,i.content&&(!("uri"in i.content)&&"url"in i.content&&(i.content.uri=i.content.url,delete i.content.url),i.content.boundingVolume&&!("box"in i.content.boundingVolume||"sphere"in i.content.boundingVolume||"region"in i.content.boundingVolume)&&delete i.content.boundingVolume),i.parent=t,i.children=i.children||[],i.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:0,basePath:e,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,renderer:this,...i.internal},i.content?.uri){let n=sm(i.content.uri),s=!!(n&&/json$/.test(n));i.internal.hasContent=!0,i.internal.hasUnrenderableContent=s,i.internal.hasRenderableContent=!s}else i.internal.hasContent=!1,i.internal.hasUnrenderableContent=!1,i.internal.hasRenderableContent=!1;t?(i.internal.depth=t.internal.depth+1,i.internal.depthFromRenderedParent=t.internal.depthFromRenderedParent+ +!!i.internal.hasRenderableContent):(i.internal.depth=0,i.internal.depthFromRenderedParent=+!!i.internal.hasRenderableContent),i.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,wasInFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,allChildrenLoaded:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},t===null?i.refine=i.refine||"REPLACE":i.refine=i.refine||t.refine,i.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(i,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(n=>{n!==this&&n.preprocessNode&&n.preprocessNode(i,e,t)})}setTileActive(i,e){e?this.activeTiles.add(i):this.activeTiles.delete(i)}setTileVisible(i,e){e?this.visibleTiles.add(i):this.visibleTiles.delete(i),this.dispatchEvent({type:"tile-visibility-change",scene:i.engineData.scene,tile:i,visible:e})}calculateTileViewError(i,e){}removeUnusedPendingTiles(){let{lruCache:i,loadingTiles:e}=this,t=[];for(let n of e)!i.isUsed(n)&&n.internal.loadingState===1&&t.push(n);for(let n=0;n<t.length;n++)i.remove(t[n])}queueTileForDownload(i){let{queuedTileSet:e}=this;if(!(i.internal.loadingState!==0||e.has(i))){if(e.add(i),this.lruCache.isFull()){this.stats.refused++;return}this.queuedTiles.push(i)}}markTileUsed(i){this.usedSet.add(i),this.lruCache.markUsed(i)}fetchData(i,e){return fetch(i,e)}ensureChildrenArePreprocessed(i,e=this.stats.tilesProcessed<this.maxTilesProcessed){let t=i.children;if(t.length===0||t[t.length-1].traversal)return;let n=s=>{for(let r=0,a=s.length;r<a;r++){let o=s[r];o&&!o.traversal&&this.preprocessNode(o,i.internal.basePath,i)}};e?(this.processNodeQueue.remove(i),n(t)):this.processNodeQueue.has(i)||this.processNodeQueue.add(i,s=>{n(s.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(i){let e=0;return this.invokeAllPlugins(t=>{t.calculateBytesUsed&&(e+=t.calculateBytesUsed(i,i.engineData.scene)||0)}),e}recalculateBytesUsed(i=null){let{lruCache:e,processedTiles:t}=this;i===null?e.itemSet.forEach(n=>{t.has(n)&&e.setMemoryUsage(n,this.getBytesUsed(n))}):e.setMemoryUsage(i,this.getBytesUsed(i))}preprocessTileset(i,e,t=null){let[n,s]=i.asset.version.split(".").map(a=>parseInt(a));console.assert(n<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),n===1&&s>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let r=e.replace(/\/[^/]*$/,"");r=new URL(r,window.location.href).toString(),this.preprocessNode(i.root,r,t)}loadRootTileset(){let i=this.rootURL;return this.invokeAllPlugins(e=>i=e.preprocessURL?e.preprocessURL(i,null):i),this.invokeOnePlugin(e=>e.fetchData&&e.fetchData(i,this.fetchOptions)).then(e=>{if(!(e instanceof Response))return e;if(e.ok)return e.json();throw Error(`TilesRenderer: Failed to load tileset "${i}" with status ${e.status} : ${e.statusText}`)}).then(e=>(this.preprocessTileset(e,i),e))}requestTileContents(i){if(i.internal.loadingState!==0)return;let e=!1,t=null,n=new URL(i.content.uri,i.internal.basePath+"/").toString();this.invokeAllPlugins(d=>n=d.preprocessURL?d.preprocessURL(n,i):n);let s=this.stats,r=this.lruCache,a=this.downloadQueue,o=this.parseQueue,l=this.loadingTiles,c=sm(n),h=new AbortController,u=h.signal;if(r.add(i,d=>{h.abort(),e?d.children.length=0:this.invokeAllPlugins(f=>{f.disposeTile&&f.disposeTile(d)}),s.inCache--,this.cachedSinceLoadComplete.has(i)&&(this.cachedSinceLoadComplete.delete(i),s.inCacheSinceLoad--),d.internal.loadingState===1?s.queued--:d.internal.loadingState===2?s.downloading--:d.internal.loadingState===3?s.parsing--:d.internal.loadingState===4&&s.loaded--,d.internal.loadingState=0,o.remove(d),a.remove(d),l.delete(d)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),r.setMemoryUsage(i,this.getBytesUsed(i)),this.cachedSinceLoadComplete.add(i),s.inCacheSinceLoad++,s.inCache++,s.queued++,i.internal.loadingState=1,l.add(i),a.add(n,i,d=>{if(u.aborted)return Promise.resolve();i.internal.loadingState=2,s.downloading++,s.queued--;let f=this.invokeOnePlugin(m=>m.fetchData&&m.fetchData(n,{...this.fetchOptions,signal:u}));return this.dispatchEvent({type:"tile-download-start",tile:i,url:n,get uri(){return console.warn('tile-download-start event: "uri" has been renamed to "url".'),this.url}}),f}).then(d=>{if(!u.aborted){if(!(d instanceof Response))return d;if(d.ok)return c==="json"?d.json():d.arrayBuffer();throw Error(`Failed to load model with error code ${d.status}`)}}).then(d=>{if(!u.aborted)return s.downloading--,s.parsing++,i.internal.loadingState=3,o.add(i,f=>u.aborted?Promise.resolve():c==="json"&&d.root?(this.preprocessTileset(d,n,i),i.children.push(d.root),t=d,e=!0,Promise.resolve()):this.invokeOnePlugin(m=>m.parseTile&&m.parseTile(d,f,c,n,u)))}).then(()=>{if(u.aborted)return;s.parsing--,s.loaded++,i.internal.loadingState=4,l.delete(i),r.setLoaded(i,!0);let d=this.getBytesUsed(i);if(r.getMemoryUsage(i)===0&&d>0&&r.isFull()){r.remove(i);return}r.setMemoryUsage(i,d),this.dispatchEvent({type:"needs-update"}),e&&this.dispatchEvent({type:"load-tileset",tileset:t,url:n}),i.engineData.scene&&this.dispatchEvent({type:"load-model",scene:i.engineData.scene,tile:i,url:n})}).catch(d=>{u.aborted||(d.name==="AbortError"?r.remove(i):(o.remove(i),a.remove(i),i.internal.loadingState===1?s.queued--:i.internal.loadingState===2?s.downloading--:i.internal.loadingState===3?s.parsing--:i.internal.loadingState===4&&s.loaded--,s.failed++,console.error(`TilesRenderer : Failed to load tile at url "${i.content.uri}".`),console.error(d),i.internal.loadingState=-1,l.delete(i),r.setLoaded(i,!0),this.dispatchEvent({type:"load-error",tile:i,error:d,url:n})))})}};function jn(i){if(i===null||i.byteLength<4)return"";let e;if(e=i instanceof DataView?i:new DataView(i),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let n=0;n<4;n++)t+=String.fromCharCode(e.getUint8(n));return t}var Ub=new TextDecoder;function Pu(i){return Ub.decode(i)}function Tl(i){return i.replace(/[\\/][^\\/]+$/,"")+"/"}var xr=class{constructor(){this.fetchOptions={},this.workingPath=""}loadAsync(i){return fetch(i,this.fetchOptions).then(e=>{if(!e.ok)throw Error(`Failed to load file "${i}" with status ${e.status} : ${e.statusText}`);return e.arrayBuffer()}).then(e=>(this.workingPath===""&&(this.workingPath=Tl(i)),this.parse(e)))}resolveExternalURL(i){return new URL(i,this.workingPath).href}parse(i){throw Error("LoaderBase: Parse not implemented.")}};function ym(i,e,t,n,s,r){let a;switch(n){case"SCALAR":a=1;break;case"VEC2":a=2;break;case"VEC3":a=3;break;case"VEC4":a=4;break;default:throw Error(`FeatureTable : Feature type not provided for "${r}".`)}let o,l=t*a;switch(s){case"BYTE":o=new Int8Array(i,e,l);break;case"UNSIGNED_BYTE":o=new Uint8Array(i,e,l);break;case"SHORT":o=new Int16Array(i,e,l);break;case"UNSIGNED_SHORT":o=new Uint16Array(i,e,l);break;case"INT":o=new Int32Array(i,e,l);break;case"UNSIGNED_INT":o=new Uint32Array(i,e,l);break;case"FLOAT":o=new Float32Array(i,e,l);break;case"DOUBLE":o=new Float64Array(i,e,l);break;default:throw Error(`FeatureTable : Feature component type not provided for "${r}".`)}return o}var Al=class{constructor(i,e,t,n){this.buffer=i,this.binOffset=e+t,this.binLength=n;let s=null;if(t!==0){let r=new Uint8Array(i,e,t);s=JSON.parse(Pu(r))}else s={};this.header=s}getKeys(){return Object.keys(this.header).filter(i=>i!=="extensions")}getData(i,e,t=null,n=null){let s=this.header;if(!(i in s))return null;let r=s[i];if(!(r instanceof Object)||Array.isArray(r))return r;{let{buffer:a,binOffset:o,binLength:l}=this,c=r.byteOffset||0,h=r.type||n,u=r.componentType||t;if("type"in r&&n&&r.type!==n)throw Error("FeatureTable: Specified type does not match expected type.");let d=o+c,f=ym(a,d,e,h,u,i);if(d+f.byteLength>o+l)throw Error("FeatureTable: Feature data read outside binary body length.");return f}}getBuffer(i,e){let{buffer:t,binOffset:n}=this;return t.slice(n+i,n+i+e)}},Nb=class{constructor(i){this.batchTable=i;let e=i.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=e.classes;for(let n of this.classes){let s=n.instances;for(let r in s)n.instances[r]=this._parseProperty(s[r],n.length,r)}if(this.instancesLength=e.instancesLength,this.classIds=this._parseProperty(e.classIds,this.instancesLength,"classIds"),e.parentCounts?this.parentCounts=this._parseProperty(e.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=Array(this.instancesLength).fill(1),e.parentIds){let n=this.parentCounts.reduce((s,r)=>s+r,0);this.parentIds=this._parseProperty(e.parentIds,n,"parentIds")}else this.parentIds=null;this.instancesIds=[];let t={};for(let n of this.classIds)t[n]=t[n]??0,this.instancesIds.push(t[n]),t[n]++}_parseProperty(i,e,t){if(Array.isArray(i))return i;{let{buffer:n,binOffset:s}=this.batchTable,r=i.byteOffset,a=i.componentType||"UNSIGNED_SHORT";return ym(n,s+r,e,"SCALAR",a,t)}}getDataFromId(i,e={}){let t=this.parentCounts[i];if(this.parentIds&&t>0){let o=0;for(let l=0;l<i;l++)o+=this.parentCounts[l];for(let l=0;l<t;l++){let c=this.parentIds[o+l];c!==i&&this.getDataFromId(c,e)}}let n=this.classIds[i],s=this.classes[n].instances,r=this.classes[n].name,a=this.instancesIds[i];for(let o in s)e[r]=e[r]||{},e[r][o]=s[o][a];return e}},Iu=class extends Al{constructor(i,e,t,n,s){super(i,t,n,s),this.count=e,this.extensions={};let r=this.header.extensions;r&&r["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new Nb(this))}getDataFromId(i,e={}){if(i<0||i>=this.count)throw Error(`BatchTable: id value "${i}" out of bounds for "${this.count}" features number.`);for(let t of this.getKeys())e[t]=super.getData(t,this.count)[i];for(let t in this.extensions){let n=this.extensions[t];n.getDataFromId instanceof Function&&(e[t]=e[t]||{},n.getDataFromId(i,e[t]))}return e}getPropertyArray(i){return super.getData(i,this.count)}},xm=class extends xr{parse(i){let e=new DataView(i),t=jn(e);console.assert(t==="b3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Al(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Iu(i.slice(h,h+o+l),c.getData("BATCH_LENGTH"),0,o,l),d=h+o+l;return{version:n,featureTable:c,batchTable:u,glbBytes:new Uint8Array(i,d,s-d)}}},_m=class extends xr{parse(i){let e=new DataView(i),t=jn(e);console.assert(t==="i3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),h=new Al(i.slice(32,32+r+a),0,r,a),u=32+r+a,d=new Iu(i.slice(u,u+o+l),h.getData("INSTANCES_LENGTH"),0,o,l),f=u+o+l,m=new Uint8Array(i,f,s-f),y=null,p=null,g=null;if(c)y=m,p=Promise.resolve();else{let x=this.resolveExternalURL(Pu(m));g=Tl(x),p=fetch(x,this.fetchOptions).then(v=>{if(!v.ok)throw Error(`I3DMLoaderBase : Failed to load file "${x}" with status ${v.status} : ${v.statusText}`);return v.arrayBuffer()}).then(v=>{y=new Uint8Array(v)})}return p.then(()=>({version:n,featureTable:h,batchTable:d,glbBytes:y,gltfWorkingPath:g}))}},Mm=class extends xr{parse(i){let e=new DataView(i),t=jn(e);console.assert(t==="pnts");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Al(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Iu(i.slice(h,h+o+l),c.getData("BATCH_LENGTH")||c.getData("POINTS_LENGTH"),0,o,l);return Promise.resolve({version:n,featureTable:c,batchTable:u})}},bm=class extends xr{parse(i){let e=new DataView(i),t=jn(e);console.assert(t==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');let n=e.getUint32(4,!0);console.assert(n===1,'CMPTLoader: The version listed in the header is "1".');let s=e.getUint32(8,!0);console.assert(s===i.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");let r=e.getUint32(12,!0),a=[],o=16;for(let l=0;l<r;l++){let c=new DataView(i,o,12),h=jn(c),u=c.getUint32(4,!0),d=c.getUint32(8,!0),f=new Uint8Array(i,o,d);a.push({type:h,buffer:f,version:u}),o+=d}return{version:n,tiles:a}}};function Sm(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function Lu(i,e){if(e===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ia||e===nl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ia)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Zn=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Qu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Wn.extractUrlBase(e);a=Wn.resolveURL(c,this.path)}else a=Wn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new an(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cm){try{a[gt.KHR_BINARY_GLTF]=new ed(e)}catch(u){s&&s(u);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new od(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:a[u]=new Fu;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new td(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[u]=new id;break;case gt.KHR_MESH_QUANTIZATION:a[u]=new nd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ob(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ou=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yo(h),c.distance=u;break;case"spot":c=new qo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Sn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Fu=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,n){let s=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],Vt),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},qu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ci}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},$u=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Zu=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ku=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ju=class{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Qu=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Gi.TRIANGLES&&c.mode!==Gi.TRIANGLE_STRIP&&c.mode!==Gi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let y=new Ne,p=new P,g=new ui,x=new P(1,1,1),v=new di(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,y.compose(p,g,x));for(let M in l)if(M==="_COLOR_0"){let L=l[M];v.instanceColor=new Jt(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Rt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Cm="glTF",ma=12,wm={JSON:1313821514,BIN:5130562},ed=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(e,ma),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===wm.JSON){let c=new Uint8Array(e,ma+a,o);this.content=n.decode(c)}else if(l===wm.BIN){let c=ma+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=rd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=rd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=_r[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let y=f.attributes[m],p=l[m];p!==void 0&&(y.normalized=p)}u(f)},o,c,Vt,d)})})}},id=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},nd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},El=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,y=m-c,p=-2*f+3*d,g=f-d,x=1-p,v=g-d+u;for(let M=0;M!==o;M++){let L=a[y+M+o],C=a[y+M+l]*h,A=a[m+M+o],D=a[m+M]*h;r[M]=x*L+v*C+p*A+g*D}return r}},Fb=new ui,sd=class extends El{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Fb.fromArray(r).normalize().toArray(r),r}},Gi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tm={9728:Kt,9729:ni,9984:su,9985:Nr,9986:Gs,9987:Ui},Am={33071:$i,33648:Vr,10497:sn},Du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bb={CUBICSPLINE:void 0,LINEAR:nr,STEP:ir},Uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nn})),i.DefaultMaterial}function ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Vb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hb(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nu(t.attributes):e=i.indices+":"+Nu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Nu(i.targets[n]);return e}function Nu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Wb=new Ne,od=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ob,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ur(this.options.manager):this.textureLoader=new $o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new an(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ws(r,o,s),Sn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Wn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Du[s.type],o=_r[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new nt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Du[s.type],c=_r[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,p;if(f&&f!==u){let g=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,v=t.cache.get(x);v||(y=new c(o,g*f,s.count*f/h),v=new qr(y,f/h),t.cache.add(x,v)),p=new Yr(v,l,d%f/h,m)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),p=new nt(y,l,m);if(s.sparse!==void 0){let g=Du.SCALAR,x=_r[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,L=new x(a[1],v,s.sparse.count*g),C=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new nt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,D=L.length;A<D;A++){let Z=L[A];if(p.setX(Z,C[A*l]),l>=2&&p.setY(Z,C[A*l+1]),l>=3&&p.setZ(Z,C[A*l+2]),l>=4&&p.setW(Z,C[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Tm[d.magFilter]||ni,h.minFilter=Tm[d.minFilter]||Ui,h.wrapS=Am[d.wrapS]||sn,h.wrapT=Am[d.wrapT]||sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(y){let p=new $t(y);p.needsUpdate=!0,d(p)}),t.load(Wn.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Sn(u,a),u.userData.mimeType=a.mimeType||Gb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new zn,Ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new lr,Ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gs}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ii);let h=r.alphaMode||Uu.OPAQUE;if(h===Uu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Uu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ai&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ai&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ai){let u=r.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&a!==ai&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Sn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ws(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Em(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Hb(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Em(new Mt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?zb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let y=h[f],p=a[f],g,x=c[f];if(p.mode===Gi.TRIANGLES||p.mode===Gi.TRIANGLE_STRIP||p.mode===Gi.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Ao(y,x):new ft(y,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Gi.TRIANGLE_STRIP?g.geometry=Lu(g.geometry,nl):p.mode===Gi.TRIANGLE_FAN&&(g.geometry=Lu(g.geometry,ia));else if(p.mode===Gi.LINES)g=new fs(y,x);else if(p.mode===Gi.LINE_STRIP)g=new cr(y,x);else if(p.mode===Gi.LINE_LOOP)g=new Po(y,x);else if(p.mode===Gi.POINTS)g=new vn(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Vb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Sn(g,r),p.extensions&&ws(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ws(s,u[0],r),u[0];let d=new kt;r.extensions&&ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Mn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new gn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],y=f.target,p=y.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],y=u[3],p=u[4],g=[];for(let x=0,v=d.length;x<v;x++){let M=d[x],L=f[x],C=m[x],A=y[x],D=p[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let Z=n._createAnimationTracks(M,L,C,A,D);if(Z)for(let _=0;_<Z.length;_++)g.push(Z[_])}return new Xo(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new jr:c.length>1?h=new kt:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Sn(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),Sn(r,n),n.extensions&&ws(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ai||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];$n[r.path]===$n.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch($n[r.path]){case $n.weights:c=yn;break;case $n.rotation:c=xn;break;case $n.position:case $n.scale:c=_n;break;default:switch(n.itemSize){case 1:c=yn;break;case 2:case 3:default:c=_n;break}break}let h=s.interpolation!==void 0?Bb[s.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+$n[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ad(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof xn?sd:El;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Xb(i,e,t){let n=e.attributes,s=new ri;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=ad(_r[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let y=ad(_r[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Wt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=rd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return mt.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Sn(i,e),Xb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kb(i,e.targets,t):i})}var vd=class extends xm{constructor(i=xs){super(),this.manager=i,this.adjustmentTransform=new Ne}parse(i){let e=super.parse(i),t=e.glbBytes.slice().buffer;return new Promise((n,s)=>{let r=this.manager,a=this.fetchOptions,o=r.getHandler("path.gltf")||new Zn(r);a.credentials==="include"&&a.mode==="cors"&&o.setCrossOrigin("use-credentials"),"credentials"in a&&o.setWithCredentials(a.credentials==="include"),a.headers&&o.setRequestHeader(a.headers);let l=this.workingPath;!/[\\/]$/.test(l)&&l.length&&(l+="/");let c=this.adjustmentTransform;o.parse(t,l,h=>{let{batchTable:u,featureTable:d}=e,{scene:f}=h,m=d.getData("RTC_CENTER",1,"FLOAT","VEC3");m&&(f.position.x+=m[0],f.position.y+=m[1],f.position.z+=m[2]),h.scene.updateMatrix(),h.scene.matrix.multiply(c),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=u,h.featureTable=d,f.batchTable=u,f.featureTable=d,n(h)},s)})}};function qb(i){let e=i>>11,t=i>>5&63,n=i&31;return[Math.round(e/31*255),Math.round(t/63*255),Math.round(n/31*255)]}var ga=new se;function Yb(i,e,t=new P){ga.set(i,e).divideScalar(256).multiplyScalar(2).subScalar(1),t.set(ga.x,ga.y,1-Math.abs(ga.x)-Math.abs(ga.y));let n=Mn.clamp(-t.z,0,1);return t.x>=0?t.setX(t.x-n):t.setX(t.x+n),t.y>=0?t.setY(t.y-n):t.setY(t.y+n),t.normalize(),t}var Rm={RGB:"color",POSITION:"position"},yd=class extends Mm{constructor(i=xs){super(),this.manager=i}parse(i){return super.parse(i).then(async e=>{let{featureTable:t,batchTable:n}=e,s=new zn,r=t.header.extensions,a=new P,o;if(r&&r["3DTILES_draco_point_compression"]){let{byteOffset:h,byteLength:u,properties:d}=r["3DTILES_draco_point_compression"],f=this.manager.getHandler("draco.drc");if(f==null)throw Error("PNTSLoader: dracoLoader not available.");let m={};for(let g in d)if(g in Rm&&g in d){let x=Rm[g];m[x]=d[g]}let y={attributeIDs:m,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},p=t.getBuffer(h,u);o=await f.decodeGeometry(p,y),o.attributes.color&&(s.vertexColors=!0)}else{let h=t.getData("POINTS_LENGTH"),u=t.getData("POSITION",h,"FLOAT","VEC3"),d=t.getData("NORMAL",h,"FLOAT","VEC3"),f=t.getData("NORMAL",h,"UNSIGNED_BYTE","VEC2"),m=t.getData("RGB",h,"UNSIGNED_BYTE","VEC3"),y=t.getData("RGBA",h,"UNSIGNED_BYTE","VEC4"),p=t.getData("RGB565",h,"UNSIGNED_SHORT","SCALAR"),g=t.getData("CONSTANT_RGBA",h,"UNSIGNED_BYTE","VEC4"),x=t.getData("POSITION_QUANTIZED",h,"UNSIGNED_SHORT","VEC3"),v=t.getData("QUANTIZED_VOLUME_SCALE",h,"FLOAT","VEC3"),M=t.getData("QUANTIZED_VOLUME_OFFSET",h,"FLOAT","VEC3");if(o=new Mt,x){let L=new Float32Array(h*3);for(let C=0;C<h;C++)for(let A=0;A<3;A++){let D=3*C+A;L[D]=x[D]/65535*v[A]}a.x=M[0],a.y=M[1],a.z=M[2],o.setAttribute("position",new nt(L,3,!1))}else o.setAttribute("position",new nt(u,3,!1));if(d!==null)o.setAttribute("normal",new nt(d,3,!1));else if(f!==null){let L=new Float32Array(h*3),C=new P;for(let A=0;A<h;A++){let D=f[A*2],Z=f[A*2+1],_=Yb(D,Z,C);L[A*3]=_.x,L[A*3+1]=_.y,L[A*3+2]=_.z}o.setAttribute("normal",new nt(L,3,!1))}if(y!==null)o.setAttribute("color",new nt(y,4,!0)),s.vertexColors=!0,s.transparent=!0,s.depthWrite=!1;else if(m!==null)o.setAttribute("color",new nt(m,3,!0)),s.vertexColors=!0;else if(p!==null){let L=new Uint8Array(h*3);for(let C=0;C<h;C++){let A=qb(p[C]);for(let D=0;D<3;D++){let Z=3*C+D;L[Z]=A[D]}}o.setAttribute("color",new nt(L,3,!0)),s.vertexColors=!0}else if(g!==null){s.color=new ge(g[0],g[1],g[2]);let L=g[3]/255;L<1&&(s.opacity=L,s.transparent=!0,s.depthWrite=!1)}}let l=new vn(o,s);l.position.copy(a),e.scene=l,e.scene.featureTable=t,e.scene.batchTable=n;let c=t.getData("RTC_CENTER",1,"FLOAT","VEC3");return c&&(e.scene.position.x+=c[0],e.scene.position.y+=c[1],e.scene.position.z+=c[2]),e})}};function jb(i){let{x:e,y:t,z:n}=i;i.x=n,i.y=e,i.z=t}function $b(i){return-i+Math.PI/2}var Pm=new Zo,Kn=new P,fi=new P,ld=new P,Wi=new Ne,on=new Ne,cd=new Wt,xi=new Bi,Im=new P,Lm=new P,Dm=new P,va=new P,Cl=new vi,Zb=1e-12,Kb=.1;var xd=class{constructor(i=1,e=1,t=1){this.isEllipsoid=!0,this.name="",this.radius=new P(i,e,t)}intersectRay(i,e){return Wi.makeScale(...this.radius).invert(),cd.center.set(0,0,0),cd.radius=1,Cl.copy(i).applyMatrix4(Wi),Cl.intersectSphere(cd,e)?(Wi.makeScale(...this.radius),e.applyMatrix4(Wi),e):null}getEastNorthUpFrame(i,e,t,n){return t.isMatrix4&&(n=t,t=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(i,e,Im,Lm,Dm),this.getCartographicToPosition(i,e,t,va),n.makeBasis(Im,Lm,Dm).setPosition(va)}getOrientedEastNorthUpFrame(i,e,t,n,s,r,a){return this.getObjectFrame(i,e,t,n,s,r,a,0)}getObjectFrame(i,e,t,n,s,r,a,o=2){return this.getEastNorthUpFrame(i,e,t,Wi),xi.set(s,r,-n,"ZXY"),a.makeRotationFromEuler(xi).premultiply(Wi),o===1?(xi.set(Math.PI/2,0,0,"XYZ"),on.makeRotationFromEuler(xi),a.multiply(on)):o===2&&(xi.set(-Math.PI/2,0,Math.PI,"XYZ"),on.makeRotationFromEuler(xi),a.multiply(on)),a}getCartographicFromObjectFrame(i,e,t=2){return t===1?(xi.set(-Math.PI/2,0,0,"XYZ"),on.makeRotationFromEuler(xi).premultiply(i)):t===2?(xi.set(-Math.PI/2,0,Math.PI,"XYZ"),on.makeRotationFromEuler(xi).premultiply(i)):on.copy(i),va.setFromMatrixPosition(on),this.getPositionToCartographic(va,e),this.getEastNorthUpFrame(e.lat,e.lon,0,Wi).invert(),on.premultiply(Wi),xi.setFromRotationMatrix(on,"ZXY"),e.azimuth=-xi.z,e.elevation=xi.x,e.roll=xi.y,e}getEastNorthUpAxes(i,e,t,n,s,r=va){this.getCartographicToPosition(i,e,0,r),this.getCartographicToNormal(i,e,s),t.set(-r.y,r.x,0).normalize(),n.crossVectors(s,t).normalize()}getCartographicToPosition(i,e,t,n){this.getCartographicToNormal(i,e,Kn);let s=this.radius;fi.copy(Kn),fi.x*=s.x**2,fi.y*=s.y**2,fi.z*=s.z**2;let r=Math.sqrt(Kn.dot(fi));return fi.divideScalar(r),n.copy(fi).addScaledVector(Kn,t)}getPositionToCartographic(i,e){this.getPositionToSurfacePoint(i,fi),this.getPositionToNormal(fi,Kn);let t=ld.subVectors(i,fi);return e.lon=Math.atan2(Kn.y,Kn.x),e.lat=Math.asin(Kn.z),e.height=Math.sign(t.dot(i))*t.length(),e}getCartographicToNormal(i,e,t){return Pm.set(1,$b(i),e),t.setFromSpherical(Pm).normalize(),jb(t),t}getPositionToNormal(i,e){let t=this.radius;return e.copy(i),e.x/=t.x**2,e.y/=t.y**2,e.z/=t.z**2,e.normalize(),e}getPositionToSurfacePoint(i,e){let t=this.radius,n=1/t.x**2,s=1/t.y**2,r=1/t.z**2,a=i.x*i.x*n,o=i.y*i.y*s,l=i.z*i.z*r,c=a+o+l,h=Math.sqrt(1/c),u=fi.copy(i).multiplyScalar(h);if(c<Kb)return isFinite(h)?e.copy(u):null;let d=ld.set(u.x*n*2,u.y*s*2,u.z*r*2),f=(1-h)*i.length()/(.5*d.length()),m=0,y,p,g,x,v,M,L,C,A,D,Z;do{f-=m,g=1/(1+f*n),x=1/(1+f*s),v=1/(1+f*r),M=g*g,L=x*x,C=v*v,A=M*g,D=L*x,Z=C*v,y=a*M+o*L+l*C-1,p=a*A*n+o*D*s+l*Z*r;let _=-2*p;m=y/_}while(Math.abs(y)>Zb);return e.set(i.x*g,i.y*x,i.z*v)}calculateHorizonDistance(i,e){let t=this.calculateEffectiveRadius(i);return Math.sqrt(2*t*e+e**2)}calculateEffectiveRadius(i){let e=this.radius.x,t=1-this.radius.z**2/e**2,n=i*Mn.DEG2RAD,s=Math.sin(n)**2;return e/Math.sqrt(1-t*s)}getPositionElevation(i){this.getPositionToSurfacePoint(i,fi);let e=ld.subVectors(i,fi);return Math.sign(e.dot(i))*e.length()}closestPointToRayEstimate(i,e){return this.intersectRay(i,e)?e:(Wi.makeScale(...this.radius).invert(),Cl.copy(i).applyMatrix4(Wi),fi.set(0,0,0),Cl.closestPointToPoint(fi,e).normalize(),Wi.makeScale(...this.radius),e.applyMatrix4(Wi))}copy(i){return this.radius.copy(i.radius),this}clone(){return new this.constructor().copy(this)}},As=new xd(yr,yr,cm);As.name="WGS84 Earth";var Rl=new P,Mr=new P,br=new P,hd=new P,Pl=new ui,Il=new P,Sr=new Ne,Um=new Ne,Nm=new P,Om=new Ne,ud=new ui,dd={};function Fm(i,e,t,n){if(i=i/t*2-1,e=e/t*2-1,n.x=i,n.y=e,n.z=1-Math.abs(i)-Math.abs(e),n.z<0){let s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}var _d=class extends _m{constructor(i=xs){super(),this.manager=i,this.adjustmentTransform=new Ne,this.ellipsoid=As.clone()}resolveExternalURL(i){return this.manager.resolveURL(super.resolveExternalURL(i))}parse(i){return super.parse(i).then(e=>{let{featureTable:t,batchTable:n}=e,s=e.glbBytes.slice().buffer;return new Promise((r,a)=>{let o=this.fetchOptions,l=this.manager,c=l.getHandler("path.gltf")||new Zn(l);o.credentials==="include"&&o.mode==="cors"&&c.setCrossOrigin("use-credentials"),"credentials"in o&&c.setWithCredentials(o.credentials==="include"),o.headers&&c.setRequestHeader(o.headers);let h=e.gltfWorkingPath??this.workingPath;/[\\/]$/.test(h)||(h+="/");let u=this.adjustmentTransform;c.parse(s,h,d=>{let f=t.getData("INSTANCES_LENGTH"),m=t.getData("POSITION",f,"FLOAT","VEC3"),y=t.getData("POSITION_QUANTIZED",f,"UNSIGNED_SHORT","VEC3"),p=t.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),g=t.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),x=t.getData("NORMAL_UP",f,"FLOAT","VEC3"),v=t.getData("NORMAL_RIGHT",f,"FLOAT","VEC3"),M=t.getData("NORMAL_UP_OCT32P",f,"UNSIGNED_SHORT","VEC2"),L=t.getData("NORMAL_RIGHT_OCT32P",f,"UNSIGNED_SHORT","VEC2"),C=t.getData("SCALE_NON_UNIFORM",f,"FLOAT","VEC3"),A=t.getData("SCALE",f,"FLOAT","SCALAR"),D=t.getData("RTC_CENTER",1,"FLOAT","VEC3"),Z=t.getData("EAST_NORTH_UP");if(!m&&y){m=new Float32Array(f*3);for(let B=0;B<f;B++)m[B*3+0]=p[0]+y[B*3+0]/65535*g[0],m[B*3+1]=p[1]+y[B*3+1]/65535*g[1],m[B*3+2]=p[2]+y[B*3+2]/65535*g[2]}let _=new P;for(let B=0;B<f;B++)_.x+=m[B*3+0]/f,_.y+=m[B*3+1]/f,_.z+=m[B*3+2]/f;let w=[],$=[];d.scene.updateMatrixWorld(),d.scene.traverse(B=>{if(B.isMesh){$.push(B);let{geometry:N,material:Y}=B,V=new di(N,Y,f);V.position.copy(_),D&&(V.position.x+=D[0],V.position.y+=D[1],V.position.z+=D[2]),w.push(V)}});for(let B=0;B<f;B++){hd.set(m[B*3+0]-_.x,m[B*3+1]-_.y,m[B*3+2]-_.z),Pl.identity(),x&&v?(Mr.set(x[B*3+0],x[B*3+1],x[B*3+2]),br.set(v[B*3+0],v[B*3+1],v[B*3+2]),Rl.crossVectors(br,Mr).normalize(),Sr.makeBasis(br,Mr,Rl),Pl.setFromRotationMatrix(Sr)):M&&L&&(Fm(M[B*2+0],M[B*2+1],65535,Mr),Fm(L[B*2+0],L[B*2+1],65535,br),Rl.crossVectors(br,Mr).normalize(),Sr.makeBasis(br,Mr,Rl),Pl.setFromRotationMatrix(Sr)),Il.set(1,1,1),C&&Il.set(C[B*3+0],C[B*3+1],C[B*3+2]),A&&Il.multiplyScalar(A[B]);for(let N=0,Y=w.length;N<Y;N++){let V=w[N];ud.copy(Pl),Z&&(V.updateMatrixWorld(),Nm.copy(hd).applyMatrix4(V.matrixWorld),this.ellipsoid.getPositionToCartographic(Nm,dd),this.ellipsoid.getEastNorthUpFrame(dd.lat,dd.lon,Om),ud.setFromRotationMatrix(Om)),Sr.compose(hd,ud,Il).multiply(u);let ee=$[N];Um.multiplyMatrices(Sr,ee.matrixWorld),V.setMatrixAt(B,Um)}}d.scene.clear(),d.scene.add(...w),d.batchTable=n,d.featureTable=t,d.scene.batchTable=n,d.scene.featureTable=t,r(d)},a)})})}},Wm=class extends bm{constructor(i=xs){super(),this.manager=i,this.adjustmentTransform=new Ne,this.ellipsoid=As.clone()}parse(i){let e=super.parse(i),{manager:t,ellipsoid:n,adjustmentTransform:s}=this,r=[];for(let a in e.tiles){let{type:o,buffer:l}=e.tiles[a];switch(o){case"b3dm":{let c=l.slice(),h=new vd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}case"pnts":{let c=l.slice(),h=new yd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions;let u=h.parse(c.buffer);r.push(u);break}case"i3dm":{let c=l.slice(),h=new _d(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.ellipsoid.copy(n),h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}}}return Promise.all(r).then(a=>{let o=new kt;return a.forEach(l=>{o.add(l.scene)}),{tiles:a,scene:o}})}},ya=new Ne,Jb=class extends kt{constructor(i){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=i,this.matrixWorldInverse=new Ne}raycast(i,e){return this.tilesRenderer.raycast(i,e),!1}updateMatrixWorld(i){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||i){this.parent===null?ya.copy(this.matrix):ya.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;let e=ya.elements,t=this.matrixWorld.elements,n=!1;for(let s=0;s<16;s++){let r=e[s],a=t[s];if(Math.abs(r-a)>2**-52){n=!0;break}}if(n){this.matrixWorld.copy(ya),this.matrixWorldInverse.copy(ya).invert();let s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateMatrixWorld();let{tilesRenderer:r}=this,{activeTiles:a,visibleTiles:o}=r;a.forEach(l=>{o.has(l)||l.engineData.scene.updateMatrixWorld(!0)})}}}updateWorldMatrix(i,e){this.parent&&i&&this.parent.updateWorldMatrix(i,!1),this.updateMatrixWorld(!0)}},Qb=new vi;function e1(i,e,t,n){let{scene:s}=i.engineData;t.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(i,s,e,n))||e.intersectObject(s,!0,n)}function t1(i){return"traversal"in i}function Xm(i,e,t,n,s=null){if(!t1(e))return;let{group:r,activeTiles:a}=i,{boundingVolume:o}=e.engineData;if(s===null&&(s=Qb,s.copy(t.ray).applyMatrix4(r.matrixWorldInverse)),!e.traversal.used||!o.intersectsRay(s))return;a.has(e)&&e1(e,t,i,n);let l=e.children;for(let c=0,h=l.length;c<h;c++)Xm(i,l[c],t,n,s)}var Ll=new P,Dl=new P,_i=new P,Ul=new vi,md=class{constructor(i=new ri,e=new Ne){this.box=i.clone(),this.transform=e.clone(),this.inverseTransform=new Ne,this.points=Array(8).fill().map(()=>new P),this.planes=[,,,,,,].fill().map(()=>new mi)}copy(i){return this.box.copy(i.box),this.transform.copy(i.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(i,e){return e.copy(i).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(i){return this.clampPoint(i,_i).distanceTo(i)}containsPoint(i){return _i.copy(i).applyMatrix4(this.inverseTransform),this.box.containsPoint(_i)}intersectsRay(i){return Ul.copy(i).applyMatrix4(this.inverseTransform),Ul.intersectsBox(this.box)}intersectRay(i,e){return Ul.copy(i).applyMatrix4(this.inverseTransform),Ul.intersectBox(this.box,e)?(e.applyMatrix4(this.transform),e):null}update(){let{points:i,inverseTransform:e,transform:t,box:n}=this;e.copy(t).invert();let{min:s,max:r}=n,a=0;for(let o=-1;o<=1;o+=2)for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)i[a].set(o<0?s.x:r.x,l<0?s.y:r.y,c<0?s.z:r.z).applyMatrix4(t),a++;this.updatePlanes()}updatePlanes(){Ll.copy(this.box.min).applyMatrix4(this.transform),Dl.copy(this.box.max).applyMatrix4(this.transform),_i.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(_i,Ll),this.planes[1].setFromNormalAndCoplanarPoint(_i,Dl).negate(),_i.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(_i,Ll),this.planes[3].setFromNormalAndCoplanarPoint(_i,Dl).negate(),_i.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(_i,Ll),this.planes[5].setFromNormalAndCoplanarPoint(_i,Dl).negate()}intersectsSphere(i){return this.clampPoint(i.center,_i),_i.distanceToSquared(i.center)<=i.radius*i.radius}intersectsFrustum(i){return this._intersectsPlaneShape(i.planes,i.points)}intersectsOBB(i){return this._intersectsPlaneShape(i.planes,i.points)}_intersectsPlaneShape(i,e){let t=this.points,n=this.planes;for(let s=0;s<6;s++){let r=i[s],a=-1/0;for(let o=0;o<8;o++){let l=t[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}for(let s=0;s<6;s++){let r=n[s],a=-1/0;for(let o=0;o<8;o++){let l=e[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}return!0}},Ma=Math.PI,fd=Ma/2,xa=new P,Ts=new P,Ji=new P,it=new P,pi=new Ne,i1=new ri,Bm=new Ne;function Jn(i,e){e.radius=Math.max(e.radius,i.distanceToSquared(e.center))}function zm(i){return i.x!==i.y}var qm=class extends xd{constructor(i=1,e=1,t=1,n=-fd,s=fd,r=0,a=2*Ma,o=0,l=0){super(i,e,t),this.latStart=n,this.latEnd=s,this.lonStart=r,this.lonEnd=a,this.heightStart=o,this.heightEnd=l}getBoundingBox(i,e){zm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");let{latStart:t,latEnd:n,lonStart:s,lonEnd:r,heightStart:a,heightEnd:o}=this,l=(t+n)*.5,c=(s+r)*.5,h=t>0,u=n<0,d;d=h?t:u?n:0;let{min:f,max:m}=i;f.setScalar(1/0),m.setScalar(-1/0),r-s<=Ma?(this.getCartographicToNormal(l,c,Ji),Ts.set(0,0,1),xa.crossVectors(Ts,Ji).normalize(),Ts.crossVectors(Ji,xa).normalize(),e.makeBasis(xa,Ts,Ji),pi.copy(e).invert(),this.getCartographicToPosition(d,s,o,it).applyMatrix4(pi),m.x=Math.abs(it.x),f.x=-m.x,this.getCartographicToPosition(n,s,o,it).applyMatrix4(pi),m.y=it.y,this.getCartographicToPosition(n,c,o,it).applyMatrix4(pi),m.y=Math.max(it.y,m.y),this.getCartographicToPosition(t,s,o,it).applyMatrix4(pi),f.y=it.y,this.getCartographicToPosition(t,c,o,it).applyMatrix4(pi),f.y=Math.min(it.y,f.y),this.getCartographicToPosition(l,c,o,it).applyMatrix4(pi),m.z=it.z,this.getCartographicToPosition(t,s,a,it).applyMatrix4(pi),f.z=it.z,this.getCartographicToPosition(n,s,a,it).applyMatrix4(pi),f.z=Math.min(it.z,f.z)):(this.getCartographicToPosition(d,c,o,Ji),Ji.z=0,Ji.length()<1e-10?Ji.set(1,0,0):Ji.normalize(),Ts.set(0,0,1),xa.crossVectors(Ji,Ts).normalize(),e.makeBasis(xa,Ts,Ji),pi.copy(e).invert(),this.getCartographicToPosition(d,c+fd,o,it).applyMatrix4(pi),m.x=Math.abs(it.x),f.x=-m.x,this.getCartographicToPosition(n,0,u?a:o,it).applyMatrix4(pi),m.y=it.y,this.getCartographicToPosition(t,0,h?a:o,it).applyMatrix4(pi),f.y=it.y,this.getCartographicToPosition(d,c,o,it).applyMatrix4(pi),m.z=it.z,this.getCartographicToPosition(d,r,o,it).applyMatrix4(pi),f.z=it.z),i.getCenter(it),i.min.sub(it).multiplyScalar(1.0000000000001),i.max.sub(it).multiplyScalar(1.0000000000001),it.applyMatrix4(e),e.setPosition(it)}getBoundingSphere(i){zm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(i1,Bm),i.center.setFromMatrixPosition(Bm),i.radius=0;let{latStart:e,latEnd:t,lonStart:n,lonEnd:s,heightStart:r,heightEnd:a}=this,o=(e+t)*.5,l=(n+s)*.5,c=e>0,h=t<0,u;u=c?e:h?t:0,this.getCartographicToPosition(u,n,a,it),Jn(it,i),this.getCartographicToPosition(t,n,a,it),Jn(it,i),this.getCartographicToPosition(t,l,a,it),Jn(it,i),this.getCartographicToPosition(e,n,a,it),Jn(it,i),this.getCartographicToPosition(e,l,a,it),Jn(it,i),this.getCartographicToPosition(o,l,a,it),Jn(it,i),this.getCartographicToPosition(e,n,r,it),Jn(it,i),s-n>Ma&&(this.getCartographicToPosition(u,l+Ma,a,it),Jn(it,i)),i.radius=Math.sqrt(i.radius)*1.0000000000001}},wn=new P,Tn=new P,An=new P,km=new P,Vm=new P,n1=class{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(i){let e=this.sphere,t=this.obb||this.regionObb;return!(e&&!i.intersectsSphere(e)||t&&!t.intersectsRay(i))}intersectRay(i,e=null){let t=this.sphere,n=this.obb||this.regionObb,s=-1/0,r=-1/0;t&&i.intersectSphere(t,km)&&(s=t.containsPoint(i.origin)?0:i.origin.distanceToSquared(km)),n&&n.intersectRay(i,Vm)&&(r=n.containsPoint(i.origin)?0:i.origin.distanceToSquared(Vm));let a=Math.max(s,r);return a===-1/0?null:(i.at(Math.sqrt(a),e),e)}distanceToPoint(i){let e=this.sphere,t=this.obb||this.regionObb,n=-1/0,s=-1/0;return e&&(n=Math.max(e.distanceToPoint(i),0)),t&&(s=t.distanceToPoint(i)),n>s?n:s}intersectsFrustum(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsFrustum(i)?!1:!!(t||e)}intersectsSphere(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!t.intersectsSphere(i)||e&&!e.intersectsSphere(i)?!1:!!(t||e)}intersectsOBB(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsOBB(i)?!1:!!(t||e)}getOBB(i,e){let t=this.obb||this.regionObb;t?(i.copy(t.box),e.copy(t.transform)):(this.getAABB(i),e.identity())}getAABB(i){if(this.sphere)this.sphere.getBoundingBox(i);else{let e=this.obb||this.regionObb;i.copy(e.box).applyMatrix4(e.transform)}}getSphere(i){if(this.sphere)i.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(i);else{let e=this.obb||this.regionObb;e.box.getBoundingSphere(i),i.applyMatrix4(e.transform)}}setObbData(i,e){let t=new md;wn.set(i[3],i[4],i[5]),Tn.set(i[6],i[7],i[8]),An.set(i[9],i[10],i[11]);let n=wn.length(),s=Tn.length(),r=An.length();wn.normalize(),Tn.normalize(),An.normalize(),n===0&&wn.crossVectors(Tn,An),s===0&&Tn.crossVectors(wn,An),r===0&&An.crossVectors(wn,Tn),t.transform.set(wn.x,Tn.x,An.x,i[0],wn.y,Tn.y,An.y,i[1],wn.z,Tn.z,An.z,i[2],0,0,0,1).premultiply(e),t.box.min.set(-n,-s,-r),t.box.max.set(n,s,r),t.update(),this.obb=t}setSphereData(i,e,t,n,s){let r=new Wt;r.center.set(i,e,t),r.radius=n,r.applyMatrix4(s),this.sphere=r}setRegionData(i,e,t,n,s,r,a){let o=new qm(...i.radius,t,s,e,n,r,a),l=new md;o.getBoundingBox(l.box,l.transform),l.update(),this.region=o,this.regionObb=l}},s1=new ot;function r1(i,e,t,n){let s=s1.set(i.normal.x,i.normal.y,i.normal.z,e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z);return n.set(-i.constant,-e.constant,-t.constant),n.applyMatrix3(s.invert()),n}var a1=class extends Bn{constructor(){super(),this.points=Array(8).fill().map(()=>new P)}setFromProjectionMatrix(...i){return super.setFromProjectionMatrix(...i),this.calculateFrustumPoints(),this}calculateFrustumPoints(){let{planes:i,points:e}=this;[[i[0],i[3],i[4]],[i[1],i[3],i[4]],[i[0],i[2],i[4]],[i[1],i[2],i[4]],[i[0],i[3],i[5]],[i[1],i[3],i[5]],[i[0],i[2],i[5]],[i[1],i[2],i[5]]].forEach((t,n)=>{r1(t[0],t[1],t[2],e[n])})}};var gd=0;function Hm(i,e,t,n){try{return pu.getByteLength(i,e,t,n)}catch{return gd}}function o1(i){if(!i)return 0;if(i.isExternalTexture)return i.userData?.byteLength??gd;let{format:e,type:t,image:n,mipmaps:s}=i;if(i.isCompressedTexture&&Array.isArray(s)&&s.length>0){let a=0;for(let o of s)o?.data?.byteLength?a+=o.data.byteLength:a+=Hm(o.width,o.height,e,t);return a}if(!n)return gd;let r=Hm(n.width,n.height,e,t);return r*=i.generateMipmaps?4/3:1,r}function l1(i){let e=new Set,t=0;return i.traverse(n=>{if(n.geometry&&!e.has(n.geometry)&&(t+=Sm(n.geometry),e.add(n.geometry)),n.material){let s=n.material;for(let r in s){let a=s[r];a&&a.isTexture&&!e.has(a)&&(t+=o1(a),e.add(a))}}}),t}var Ym=Symbol("INITIAL_FRUSTUM_CULLED"),Nl=new Ne,_a=new P,pd=new se,c1=new P(1,0,0),h1=new P(0,1,0),u1=()=>null;function Gm(i,e){i.traverse(t=>{t.frustumCulled=t[Ym]&&e})}var Md=class extends vm{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(i){this._autoDisableRendererCulling!==i&&(super._autoDisableRendererCulling=i,this.forEachLoadedModel(e=>{Gm(e,!i)}))}constructor(...i){super(...i),this.accelerateRaycast=!0,this.group=new Jb(this),this.ellipsoid=As.clone(),this.surface=this.ellipsoid,this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._upRotationMatrix=new Ne,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new vs,this._listeners={}}addEventListener(i,e){gi.prototype.addEventListener.call(this,i,e)}hasEventListener(i,e){return gi.prototype.hasEventListener.call(this,i,e)}removeEventListener(i,e){gi.prototype.removeEventListener.call(this,i,e)}dispatchEvent(i){gi.prototype.dispatchEvent.call(this,i)}getBoundingBox(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getAABB(i),!0):!1}getOrientedBoundingBox(i,e){if(!this.root)return!1;let t=this.root.engineData.boundingVolume;return t?(t.getOBB(i,e),!0):!1}getBoundingSphere(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getSphere(i),!0):!1}forEachLoadedModel(i){this.traverse(e=>{let t=e.engineData&&e.engineData.scene;t&&i(t,e)},null,!1)}raycast(i,e){if(this.root)if(this.accelerateRaycast)Xm(this,this.root,i,e);else{let t=i.firstHitOnly?[]:e;for(let n of this.activeTiles){let{scene:s}=n.engineData;this.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(n,s,i,t))||i.intersectObject(s,!0,t)}i.firstHitOnly&&t.length>0&&(t.sort((n,s)=>n.distance-s.distance),e.push(t[0]))}}hasCamera(i){return this.cameraMap.has(i)}setCamera(i){let e=this.cameras,t=this.cameraMap;return t.has(i)?!1:(t.set(i,new se),e.push(i),this.dispatchEvent({type:"add-camera",camera:i}),!0)}setResolution(i,e,t){let n=this.cameraMap;if(!n.has(i))return!1;let s=e.isVector2?e.x:e,r=e.isVector2?e.y:t,a=n.get(i);return(a.width!==s||a.height!==r)&&(a.set(s,r),this.dispatchEvent({type:"camera-resolution-change"})),!0}getResolution(i,e){let t=this.cameraMap.get(i);return t?e.copy(t):null}setResolutionFromRenderer(i,e){return e.getSize(pd),this.setResolution(i,pd.x,pd.y)}deleteCamera(i){let e=this.cameras,t=this.cameraMap;if(t.has(i)){let n=e.indexOf(i);return e.splice(n,1),t.delete(i),this.dispatchEvent({type:"delete-camera",camera:i}),!0}return!1}loadRootTileset(...i){return super.loadRootTileset(...i).then(e=>{let{asset:t,extensions:n={}}=e;switch((t&&t.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(h1,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis(c1,Math.PI/2);break}if("3DTILES_ellipsoid"in n){let s=n["3DTILES_ellipsoid"],{ellipsoid:r}=this;r.name=s.body,s.radii?r.radius.set(...s.radii):r.radius.set(1,1,1)}return e})}prepareForTraversal(){let i=this.group,e=this.cameras,t=this.cameraMap,n=this.cameraInfo;for(;n.length>e.length;)n.pop();for(;n.length<e.length;)n.push({frustum:new a1,isOrthographic:!1,sseDenominator:-1,position:new P,invScale:-1,pixelSize:0});_a.setFromMatrixScale(i.matrixWorldInverse),Math.abs(Math.max(_a.x-_a.y,_a.x-_a.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let s=0,r=n.length;s<r;s++){let a=e[s],o=n[s],l=o.frustum,c=o.position,h=t.get(a);(h.width===0||h.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");let u=a.projectionMatrix.elements;if(o.isOrthographic=u[15]===1,o.isOrthographic){let d=2/u[0],f=2/u[5];o.pixelSize=Math.max(f/h.height,d/h.width)}else o.sseDenominator=2/u[5]/h.height;Nl.copy(i.matrixWorld),Nl.premultiply(a.matrixWorldInverse),Nl.premultiply(a.projectionMatrix),l.setFromProjectionMatrix(Nl,a.coordinateSystem,a.reversedDepth),c.set(0,0,0),c.applyMatrix4(a.matrixWorld),c.applyMatrix4(i.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let i=!1;this.invokeAllPlugins(e=>i||(i=!!(e!==this&&e.calculateTileViewError))),i===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(i,e,t=null){super.preprocessNode(i,e,t);let n=new Ne;if(i.transform){let a=i.transform;for(let o=0;o<16;o++)n.elements[o]=a[o]}t&&n.premultiply(t.engineData.transform);let s=new Ne().copy(n).invert(),r=new n1;"sphere"in i.boundingVolume&&r.setSphereData(...i.boundingVolume.sphere,n),"box"in i.boundingVolume&&r.setObbData(i.boundingVolume.box,n),"region"in i.boundingVolume&&r.setRegionData(this.ellipsoid,...i.boundingVolume.region),i.engineData.transform=n,i.engineData.transformInverse=s,i.engineData.boundingVolume=r,i.engineData.geometry=null,i.engineData.materials=null,i.engineData.textures=null,i.toJSON=u1}async parseTile(i,e,t,n,s){let r=e.engineData,a=Tl(n),o=this.fetchOptions,l=this.manager,c=null,h=r.transform,u=this._upRotationMatrix,d=(jn(i)||t).toLowerCase();switch(d){case"b3dm":{let v=new vd(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),c=v.parse(i);break}case"pnts":{let v=new yd(l);v.workingPath=a,v.fetchOptions=o,c=v.parse(i);break}case"i3dm":{let v=new _d(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i);break}case"cmpt":{let v=new Wm(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i).then(M=>M.scene);break}case"gltf":case"glb":{let v=l.getHandler("path.gltf")||l.getHandler("path.glb")||new Zn(l);v.setWithCredentials(o.credentials==="include"),v.setRequestHeader(o.headers||{}),o.credentials==="include"&&o.mode==="cors"&&v.setCrossOrigin("use-credentials");let M=v.resourcePath||v.path||a;!/[\\/]$/.test(M)&&M.length&&(M+="/"),c=v.parseAsync(i,M).then(L=>{L.scene=L.scene||new kt;let{scene:C}=L;return C.updateMatrix(),C.matrix.multiply(u).decompose(C.position,C.quaternion,C.scale),L});break}default:c=this.invokeOnePlugin(v=>v.parseToMesh&&v.parseToMesh(i,e,t,n,s));break}let f=await c;if(f===null)throw Error(`TilesRenderer: Content type "${d}" not supported.`);let m,y;f.isObject3D?(m=f,y=null):(m=f.scene,y=f),m.updateMatrix(),m.matrix.premultiply(h),m.matrix.decompose(m.position,m.quaternion,m.scale),await this.invokeAllPlugins(v=>v.processTileModel&&v.processTileModel(m,e)),m.traverse(v=>{v[Ym]=v.frustumCulled,v.userData.tile=e}),Gm(m,!this.autoDisableRendererCulling);let p=[],g=[],x=[];if(m.traverse(v=>{if(v.geometry&&g.push(v.geometry),v.material){let M=v.material;p.push(v.material);for(let L in M){let C=M[L];C&&C.isTexture&&x.push(C)}}}),s.aborted){for(let v=0,M=x.length;v<M;v++){let L=x[v];L.image instanceof ImageBitmap&&L.image.close(),L.dispose()}return}r.materials=p,r.geometry=g,r.textures=x,r.scene=m,r.metadata=y}disposeTile(i){super.disposeTile(i);let e=i.engineData;if(e.scene){let t=e.materials,n=e.geometry,s=e.textures,r=e.scene.parent;e.scene.traverse(a=>{a.userData.meshFeatures&&a.userData.meshFeatures.dispose(),a.userData.structuralMetadata&&a.userData.structuralMetadata.dispose()});for(let a=0,o=n.length;a<o;a++)n[a].dispose();for(let a=0,o=t.length;a<o;a++)t[a].dispose();for(let a=0,o=s.length;a<o;a++){let l=s[a];l.image instanceof ImageBitmap&&l.image.close(),l.dispose()}r&&r.remove(e.scene),e.scene=null,e.materials=null,e.textures=null,e.geometry=null,e.metadata=null}}setTileActive(i,e){super.setTileActive(i,e);let t=i.engineData.scene;t&&(e?(t.parent=this.group,t.updateMatrixWorld(!0)):this.visibleTiles.has(i)||(t.parent=null))}setTileVisible(i,e){let t=i.engineData.scene,{activeTiles:n,group:s}=this;t&&(e?s.add(t):(s.remove(t),n.has(i)&&(t.parent=s))),super.setTileVisible(i,e)}calculateBytesUsed(i,e){let t=this._bytesUsed;return!t.has(i)&&e&&t.set(i,l1(e)),t.get(i)??null}calculateTileViewError(i,e){let t=i.engineData,n=this.cameras,s=this.cameraInfo,r=t.boundingVolume,a=!1,o=0,l=1/0,c=0,h=1/0;for(let u=0,d=n.length;u<d;u++){let f=s[u],m,y;if(f.isOrthographic){let g=f.pixelSize;m=i.geometricError/g,y=1/0}else{let g=f.sseDenominator;y=r.distanceToPoint(f.position),m=y===0?1/0:i.geometricError/(y*g)}let p=s[u].frustum;r.intersectsFrustum(p)&&(a=!0,o=Math.max(o,m),l=Math.min(l,y)),c=Math.max(c,m),h=Math.min(h,y)}a?(e.inView=!0,e.error=o,e.distanceFromCamera=l):(e.inView=!1,e.error=c,e.distanceFromCamera=h)}dispose(){super.dispose(),this.group.removeFromParent()}};var jm="https://tile.googleapis.com/v1/createSession",Zm=class{get isMapTilesSession(){return this.authURL===jm}constructor(i={}){let{apiToken:e,sessionOptions:t=null,autoRefreshToken:n=!1}=i;this.apiToken=e,this.autoRefreshToken=n,this.authURL=jm,this.sessionToken=null,this.sessionOptions=t,this._tokenRefreshPromise=null,this._authHostname=null}async fetch(i,e){this.sessionToken===null&&this.isMapTilesSession&&this.refreshToken(e),await this._tokenRefreshPromise,this._authHostname===null&&(this._authHostname=new URL(this.authURL).host);let t=new URL(i),n=t.host===this._authHostname;n&&(t.searchParams.set("key",this.apiToken),this.sessionToken&&t.searchParams.set("session",this.sessionToken));let s=await fetch(t,e);return n&&s.status>=400&&s.status<=499&&this.autoRefreshToken&&(await this.refreshToken(e),this.sessionToken&&t.searchParams.set("session",this.sessionToken),s=await fetch(t,e)),this.sessionToken===null&&!this.isMapTilesSession?s.json().then(r=>(this.sessionToken=$m(r),r)):s}refreshToken(i){if(this._tokenRefreshPromise===null){let e=new URL(this.authURL);e.searchParams.set("key",this.apiToken);let t={...i};this.isMapTilesSession&&(t.method="POST",t.body=JSON.stringify(this.sessionOptions),t.headers=t.headers||{},t.headers={...t.headers,"Content-Type":"application/json"}),this._tokenRefreshPromise=fetch(e,t).then(n=>{if(!n.ok)throw Error(`GoogleCloudAuth: Failed to load data with error code ${n.status}`);return n.json()}).then(n=>(this.sessionToken=$m(n),this._tokenRefreshPromise=null,n))}return this._tokenRefreshPromise}};function $m(i){if("session"in i)return i.session;{let e=null,t=i.root;return Ru(t,n=>{if(n.content&&n.content.uri){let[,s]=n.content.uri.split("?");return e=new URLSearchParams(s).get("session"),!0}return!1}),e}}var d1=class{constructor(){this.creditsCount={}}_adjustAttributions(i,e){let t=this.creditsCount,n=i.split(/;/g);for(let s=0,r=n.length;s<r;s++){let a=n[s];a in t||(t[a]=0),t[a]+=e?1:-1,t[a]<=0&&delete t[a]}}addAttributions(i){this._adjustAttributions(i,!0)}removeAttributions(i){this._adjustAttributions(i,!1)}toString(){return Object.entries(this.creditsCount).sort((i,e)=>{let t=i[1];return e[1]-t}).map(i=>i[0]).join("; ")}},f1="https://tile.googleapis.com/v1/3dtiles/root.json",bd=class{constructor({apiToken:i,sessionOptions:e=null,autoRefreshToken:t=!1,logoUrl:n=null,useRecommendedSettings:s=!0}){this.name="GOOGLE_CLOUD_AUTH_PLUGIN",this.apiToken=i,this.useRecommendedSettings=s,this.logoUrl=n,this.auth=new Zm({apiToken:i,autoRefreshToken:t,sessionOptions:e}),this.tiles=null,this._visibilityChangeCallback=null,this._attributionsManager=new d1,this._logoAttribution={value:"",type:"image",collapsible:!1},this._attribution={value:"",type:"string",collapsible:!0}}init(i){let{useRecommendedSettings:e,auth:t}=this;i.resetFailedTiles(),i.rootURL??(i.rootURL=f1),t.sessionOptions||(t.authURL=i.rootURL),e&&!t.isMapTilesSession&&(i.errorTarget=20),this.tiles=i,this._visibilityChangeCallback=({tile:n,visible:s})=>{let r=n.engineData.metadata?.asset?.copyright||"";s?this._attributionsManager.addAttributions(r):this._attributionsManager.removeAttributions(r)},i.addEventListener("tile-visibility-change",this._visibilityChangeCallback)}getAttributions(i){this.tiles.visibleTiles.size>0&&(this.logoUrl&&(this._logoAttribution.value=this.logoUrl,i.push(this._logoAttribution)),this._attribution.value=this._attributionsManager.toString(),i.push(this._attribution))}dispose(){this.tiles.removeEventListener("tile-visibility-change",this._visibilityChangeCallback)}async fetchData(i,e){return this.auth.fetch(i,e)}};var Km=1.340264,Jm=-.081106,Qm=893e-6,eg=.003796,tg=Math.sqrt(3)/2;function gg(i,e,t){let n=Math.asin(tg*Math.sin(e)),s=n*n,r=s*s*s;return t[0]=i*Math.cos(n)/(tg*(Km+3*Jm*s+r*(7*Qm+9*eg*s))),t[1]=n*(Km+Jm*s+r*(Qm+eg*s)),t}var Jw=gg(Math.PI,0,[0,0])[0],Qw=gg(0,Math.PI/2,[0,0])[1];var p1=Symbol("TILE_X"),m1=Symbol("TILE_Y"),g1=Symbol("TILE_LEVEL");var eT=Symbol("OVERLAY_RANGE"),tT=Symbol("OVERLAY_LEVEL");var iT=Symbol("OVERLAY_PARAMS");var nT=Object.freeze({fill:"#cccccc",stroke:"transparent",strokeWidth:1,radius:2,order:0,visible:!0});var sT=Symbol("SPLIT_TILE_DATA"),rT=Symbol("SPLIT_HASH"),aT=Symbol("ORIGINAL_REFINE"),ig=new vr;ig.maxJobs=10,ig.priorityCallback=(i,e)=>{let t=i.tile,n=e.tile,s=t.internal.renderer,r=n.internal.renderer,a=s.visibleTiles.has(t);return a===r.visibleTiles.has(n)?pa(t,n):a?1:-1};var oT=Symbol("TILE_X"),lT=Symbol("TILE_Y"),cT=Symbol("TILE_LEVEL"),hT=Symbol("TILE_AVAILABLE"),uT=Symbol("TILE_SPLIT_SOURCE_SCENE");var ng=new P;function ba(i,e){if(i.isInterleavedBufferAttribute||i.array instanceof e)return i;let t=e===Int8Array||e===Int16Array||e===Int32Array?-1:0,n=new nt(new e(i.count*i.itemSize),i.itemSize,!0),s=i.itemSize,r=i.count;for(let a=0;a<r;a++)for(let o=0;o<s;o++){let l=Mn.clamp(i.getComponent(a,o),t,1);n.setComponent(a,o,l)}return n}function v1(i,e=Int16Array){let t=i.geometry,n=t.attributes,s=n.position;if(s.isInterleavedBufferAttribute||s.array instanceof e)return s;let r=new nt(new e(s.count*s.itemSize),s.itemSize,!1),a=s.itemSize,o=s.count;t.computeBoundingBox();let l=t.boundingBox,{min:c,max:h}=l,u=2**(8*e.BYTES_PER_ELEMENT-1)-1,d=-u;for(let f=0;f<o;f++)for(let m=0;m<a;m++){let y=m===0?"x":m===1?"y":"z",p=c[y],g=h[y],x=Mn.mapLinear(s.getComponent(f,m),p,g,d,u);r.setComponent(f,m,x)}l.getCenter(ng).multiply(i.scale).applyQuaternion(i.quaternion),i.position.add(ng),i.scale.x*=.5*(h.x-c.x)/u,i.scale.y*=.5*(h.y-c.y)/u,i.scale.z*=.5*(h.z-c.z)/u,n.position=r,i.geometry.boundingBox=null,i.geometry.boundingSphere=null,i.updateMatrixWorld()}var Td=class{constructor(i){this._options={generateNormals:!1,disableMipmaps:!0,compressIndex:!0,compressNormals:!1,compressUvs:!1,compressPosition:!1,uvType:Int8Array,normalType:Int8Array,positionType:Int16Array,...i},this.name="TILES_COMPRESSION_PLUGIN",this.priority=-100}processTileModel(i,e){let{generateNormals:t,disableMipmaps:n,compressIndex:s,compressUvs:r,compressNormals:a,compressPosition:o,uvType:l,normalType:c,positionType:h}=this._options;i.traverse(u=>{if(u.material&&n){let d=u.material;for(let f in d){let m=d[f];m&&m.isTexture&&m.generateMipmaps&&(m.generateMipmaps=!1,m.minFilter=ni)}}if(u.geometry){let d=u.geometry,f=d.attributes;if(r){let{uv:m,uv1:y,uv2:p,uv3:g}=f;m&&(f.uv=ba(m,l)),y&&(f.uv1=ba(y,l)),p&&(f.uv2=ba(p,l)),g&&(f.uv3=ba(g,l))}if(t&&!f.normals&&d.computeVertexNormals(),a&&f.normals&&(f.normals=ba(f.normals,c)),o&&v1(u,h),s&&d.index){let m=f.position.count,y=d.index,p=m>65535?Uint32Array:m>255?Uint16Array:Uint8Array;if(!(y.array instanceof p)){let g=new p(d.index.count);g.set(y.array);let x=new nt(g,1);d.setIndex(x)}}}})}};function Zt(i,e,t){return i&&e in i?i[e]:t}function vg(i){return i!=="BOOLEAN"&&i!=="STRING"&&i!=="ENUM"}function y1(i){return/^FLOAT/.test(i)}function Aa(i){return/^VEC/.test(i)}function Ea(i){return/^MAT/.test(i)}function yg(i,e,t,n=null){return Ea(t)||Aa(t)?n.fromArray(i,e):i[e]}function Sd(i){let{type:e,componentType:t}=i;switch(e){case"SCALAR":return t==="INT64"?0n:0;case"VEC2":return new se;case"VEC3":return new P;case"VEC4":return new xt;case"MAT2":return new Ko;case"MAT3":return new ot;case"MAT4":return new Ne;case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return 0}}function sg(i,e){if(e==null)return!1;switch(i){case"SCALAR":return typeof e=="number"||typeof e=="bigint";case"VEC2":return e.isVector2;case"VEC3":return e.isVector3;case"VEC4":return e.isVector4;case"MAT2":return e.isMatrix2;case"MAT3":return e.isMatrix3;case"MAT4":return e.isMatrix4;case"BOOLEAN":return typeof e=="boolean";case"STRING":return typeof e=="string";case"ENUM":return typeof e=="number"||typeof e=="bigint"}throw Error("ClassProperty: invalid type.")}function Ta(i,e=null){switch(i){case"INT8":return Int8Array;case"INT16":return Int16Array;case"INT32":return Int32Array;case"INT64":return BigInt64Array;case"UINT8":return Uint8Array;case"UINT16":return Uint16Array;case"UINT32":return Uint32Array;case"UINT64":return BigUint64Array;case"FLOAT32":return Float32Array;case"FLOAT64":return Float64Array}switch(e){case"BOOLEAN":return Uint8Array;case"STRING":return Uint8Array}throw Error("ClassProperty: invalid type.")}function x1(i,e=null){if(i.array){e=e&&Array.isArray(e)?e:[],e.length=i.count;for(let t=0,n=e.length;t<n;t++)e[t]=Ol(i,e[t])}else e=Ol(i,e);return e}function Ol(i,e=null){let t=i.default,n=i.type;if(e||(e=Sd(i)),t===null){switch(n){case"SCALAR":return 0;case"VEC2":return e.set(0,0);case"VEC3":return e.set(0,0,0);case"VEC4":return e.set(0,0,0,0);case"MAT2":return e.identity();case"MAT3":return e.identity();case"MAT4":return e.identity();case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return""}throw Error("ClassProperty: invalid type.")}else if(Ea(n))e.fromArray(t);else if(Aa(n))e.fromArray(t);else return t}function _1(i,e){if(i.noData===null)return e;let t=i.noData,n=i.type;if(Array.isArray(e))for(let a=0,o=e.length;a<o;a++)e[a]=s(e[a]);else e=s(e);return e;function s(a){return r(a)&&(a=Ol(i,a)),a}function r(a){if(Ea(n)){let o=a.elements;for(let l=0,c=t.length;l<c;l++)if(t[l]!==o[l])return!1;return!0}else if(Aa(n)){for(let o=0,l=t.length;o<l;o++)if(t[o]!==a.getComponent(o))return!1;return!0}else return t===a}}function M1(i,e){switch(i){case"INT8":return Math.max(e/127,-1);case"INT16":return Math.max(e,32767,-1);case"INT32":return Math.max(e/2147483647,-1);case"INT64":return Math.max(Number(e)/9223372036854776e3,-1);case"UINT8":return e/255;case"UINT16":return e/65535;case"UINT32":return e/4294967295;case"UINT64":return Number(e)/18446744073709552e3}}function b1(i,e){let{type:t,componentType:n,scale:s,offset:r,normalized:a}=i;if(Array.isArray(e))for(let u=0,d=e.length;u<d;u++)e[u]=o(e[u]);else e=o(e);return e;function o(u){return u=Ea(t)?c(u):Aa(t)?l(u):h(u),u}function l(u){return u.x=h(u.x),u.y=h(u.y),"z"in u&&(u.z=h(u.z)),"w"in u&&(u.w=h(u.w)),u}function c(u){let d=u.elements;for(let f=0,m=d.length;f<m;f++)d[f]=h(d[f]);return u}function h(u){return a&&(u=M1(n,u)),(a||y1(n))&&(u=u*s+r),u}}function Ad(i,e,t=null){if(i.array){Array.isArray(e)||(e=Array(i.count||0)),e.length=t===null?i.count:t;for(let n=0,s=e.length;n<s;n++)sg(i.type,e[n])||(e[n]=Sd(i))}else sg(i.type,e)||(e=Sd(i));return e}function Fl(i,e){for(let t in e)t in i||delete e[t];for(let t in i){let n=i[t];e[t]=Ad(n,e[t])}}function S1(i){switch(i){case"ENUM":return 1;case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;case"BOOLEAN":return-1;case"STRING":return-1;default:return-1}}var zl=class{constructor(i,e,t=null){this.name=e.name||null,this.description=e.description||null,this.type=e.type,this.componentType=e.componentType||null,this.enumType=e.enumType||null,this.array=e.array||!1,this.count=e.count||0,this.normalized=e.normalized||!1,this.offset=e.offset||0,this.scale=Zt(e,"scale",1),this.max=Zt(e,"max",1/0),this.min=Zt(e,"min",-1/0),this.required=e.required||!1,this.noData=Zt(e,"noData",null),this.default=Zt(e,"default",null),this.semantic=Zt(e,"semantic",null),this.enumSet=null,this.accessorProperty=t,t&&(this.offset=Zt(t,"offset",this.offset),this.scale=Zt(t,"scale",this.scale),this.max=Zt(t,"max",this.max),this.min=Zt(t,"min",this.min)),e.type==="ENUM"&&(this.enumSet=i[this.enumType],this.componentType===null&&(this.componentType=Zt(this.enumSet,"valueType","UINT16")))}shapeToProperty(i,e=null){return Ad(this,i,e)}resolveDefaultElement(i){return Ol(this,i)}resolveDefault(i){return x1(this,i)}resolveNoData(i){return _1(this,i)}resolveEnumsToStrings(i){let e=this.enumSet;if(this.type==="ENUM")if(Array.isArray(i))for(let n=0,s=i.length;n<s;n++)i[n]=t(i[n]);else i=t(i);return i;function t(n){let s=e.values.find(r=>r.value===n);return s===null?"":s.name}}adjustValueScaleOffset(i){return vg(this.type)?b1(this,i):i}},Ed=class{constructor(i,e={},t={},n=null){this.definition=i,this.class=e[i.class],this.className=i.class,this.enums=t,this.data=n,this.name="name"in i?i.name:null,this.properties=null}getPropertyNames(){return Object.keys(this.class.properties)}includesData(i){return!!this.definition.properties[i]}dispose(){}_initProperties(i=zl){let e={};for(let t in this.class.properties)e[t]=new i(this.enums,this.class.properties[t],this.definition.properties[t]);this.properties=e}},w1=class extends zl{constructor(i,e,t=null){super(i,e,t),this.attribute=t?.attribute??null}},T1=class extends Ed{constructor(...i){super(...i),this.isPropertyAttributeAccessor=!0,this._initProperties(w1)}getData(i,e,t={}){let n=this.properties;Fl(n,t);for(let s in n)t[s]=this.getPropertyValue(s,i,e,t[s]);return t}getPropertyValue(i,e,t,n=null){if(e>=this.count)throw Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");let s=this.properties[i],r=s.type;if(!s)throw Error("PropertyAttributeAccessor: Requested class property does not exist.");if(!this.definition.properties[i])return s.resolveDefault(n);n=s.shapeToProperty(n);let a=t.getAttribute(s.attribute.toLowerCase());if(Ea(r)){let o=n.elements;for(let l=o.length;0<l;)o[0]=a.getComponent(e,0)}else if(Aa(r))n.fromBufferAttribute(a,e);else if(r==="SCALAR"||r==="ENUM")n=a.getX(e);else throw Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");return n=s.adjustValueScaleOffset(n),n=s.resolveEnumsToStrings(n),n=s.resolveNoData(n),n}},A1=class extends zl{constructor(i,e,t=null){super(i,e,t),this.values=t?.values??null,this.valueLength=S1(this.type),this.arrayOffsets=Zt(t,"arrayOffsets",null),this.stringOffsets=Zt(t,"stringOffsets",null),this.arrayOffsetType=Zt(t,"arrayOffsetType","UINT32"),this.stringOffsetType=Zt(t,"stringOffsetType","UINT32")}getArrayLengthFromId(i,e){let t=this.count;if(this.arrayOffsets!==null){let{arrayOffsets:n,arrayOffsetType:s}=this,r=new(Ta(s))(i[n]);t=r[e+1]-r[e]}return t}getIndexOffsetFromId(i,e){let t=e;if(this.arrayOffsets){let{arrayOffsets:n,arrayOffsetType:s}=this;t=new(Ta(s))(i[n])[t]}else this.array&&(t*=this.count);return t}},E1=class extends Ed{constructor(...i){super(...i),this.isPropertyTableAccessor=!0,this.count=this.definition.count,this._initProperties(A1)}getData(i,e={}){let t=this.properties;Fl(t,e);for(let n in t)e[n]=this.getPropertyValue(n,i,e[n]);return e}_readValueAtIndex(i,e,t,n=null){let s=this.properties[i],{componentType:r,type:a}=s,o=this.data,l=o[s.values],c=new(Ta(r,a))(l),h=s.getIndexOffsetFromId(o,e);if(vg(a)||a==="ENUM")return yg(c,(h+t)*s.valueLength,a,n);if(a==="STRING"){let u=h+t,d=0;if(s.stringOffsets!==null){let{stringOffsets:m,stringOffsetType:y}=s,p=new(Ta(y))(o[m]);d=p[u+1]-p[u],u=p[u]}let f=new Uint8Array(c.buffer,u,d);n=new TextDecoder().decode(f)}else if(a==="BOOLEAN"){let u=h+t,d=Math.floor(u/8),f=u%8;n=(c[d]>>f&1)==1}return n}getPropertyValue(i,e,t=null){if(e>=this.count)throw Error("PropertyTableAccessor: Requested index is outside the range of the table.");let n=this.properties[i];if(!n)throw Error("PropertyTableAccessor: Requested property does not exist.");if(!this.definition.properties[i])return n.resolveDefault(t);let s=n.array,r=this.data,a=n.getArrayLengthFromId(r,e);if(t=n.shapeToProperty(t,a),s)for(let o=0,l=t.length;o<l;o++)t[o]=this._readValueAtIndex(i,e,o,t[o]);else t=this._readValueAtIndex(i,e,0,t);return t=n.adjustValueScaleOffset(t),t=n.resolveEnumsToStrings(t),t=n.resolveNoData(t),t}},Sa=new Jo,rg=class{constructor(){this._renderer=new ar,this._target=new Ft(1,1),this._texTarget=new Ft,this._quad=new Ki(new At({blending:Zh,blendDst:Kh,blendSrc:Jh,uniforms:{map:{value:null},pixel:{value:new se}},vertexShader:`
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`}))}increaseSizeTo(i){this._target.setSize(Math.max(this._target.width,i),1)}readDataAsync(i){let{_renderer:e,_target:t}=this;return e.readRenderTargetPixelsAsync(t,0,0,i.length/4,1,i)}readData(i){let{_renderer:e,_target:t}=this;e.readRenderTargetPixels(t,0,0,i.length/4,1,i)}renderPixelToTarget(i,e,t){let{_renderer:n,_target:s}=this;Sa.min.copy(e),Sa.max.copy(e),Sa.max.x+=1,Sa.max.y+=1,n.initRenderTarget(s),n.copyTextureToTexture(i,s.texture,Sa,t,0)}},es=new class{constructor(){let i=null;Object.getOwnPropertyNames(rg.prototype).forEach(e=>{e!=="constructor"&&(this[e]=(...t)=>(i||(i=new rg),i[e](...t)))})}},ag=new se,og=new se,lg=new se;function C1(i,e){return e===0?i.getAttribute("uv"):i.getAttribute(`uv${e}`)}function xg(i,e,t=[,,,]){let n=3*e,s=3*e+1,r=3*e+2;return i.index&&(n=i.index.getX(n),s=i.index.getX(s),r=i.index.getX(r)),t[0]=n,t[1]=s,t[2]=r,t}function _g(i,e,t,n,s){let[r,a,o]=n,l=C1(i,e);ag.fromBufferAttribute(l,r),og.fromBufferAttribute(l,a),lg.fromBufferAttribute(l,o),s.set(0,0,0).addScaledVector(ag,t.x).addScaledVector(og,t.y).addScaledVector(lg,t.z)}function Mg(i,e,t,n){let s=i.x-Math.floor(i.x),r=i.y-Math.floor(i.y),a=Math.floor(s*e%e),o=Math.floor(r*t%t);return n.set(a,o),n}var cg=new se,hg=new se,ug=new se,R1=class extends zl{constructor(i,e,t=null){super(i,e,t),this.channels=Zt(t,"channels",[0]),this.index=Zt(t,"index",null),this.texCoord=Zt(t,"texCoord",null),this.valueLength=parseInt(this.type.replace(/[^0-9]/g,""))||1}readDataFromBuffer(i,e,t=null){let n=this.type;if(n==="BOOLEAN"||n==="STRING")throw Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");return yg(i,e*this.valueLength,n,t)}},P1=class extends Ed{constructor(...i){super(...i),this.isPropertyTextureAccessor=!0,this._asyncRead=!1,this._initProperties(R1)}getData(i,e,t,n={}){let s=this.properties;Fl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return this.getPropertyValuesAtTexel(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}async getDataAsync(i,e,t,n={}){let s=this.properties;Fl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return await this.getPropertyValuesAtTexelAsync(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}getPropertyValuesAtTexelAsync(...i){this._asyncRead=!0;let e=this.getPropertyValuesAtTexel(...i);return this._asyncRead=!1,e}getPropertyValuesAtTexel(i,e,t,n,s=[]){for(;s.length<i.length;)s.push(null);s.length=i.length,es.increaseSizeTo(s.length);let r=this.data,a=this.definition.properties,o=this.properties,l=xg(n,e);for(let u=0,d=i.length;u<d;u++){let f=i[u];if(!a[f])continue;let m=o[f],y=r[m.index];_g(n,m.texCoord,t,l,cg),Mg(cg,y.image.width,y.image.height,hg),ug.set(u,0),es.renderPixelToTarget(y,hg,ug)}let c=new Uint8Array(i.length*4);if(this._asyncRead)return es.readDataAsync(c).then(()=>(h.call(this),s));return es.readData(c),h.call(this),s;function h(){for(let u=0,d=i.length;u<d;u++){let f=i[u],m=o[f],y=m.type;if(s[u]=Ad(m,s[u]),!m)throw Error("PropertyTextureAccessor: Requested property does not exist.");if(!a[f]){s[u]=m.resolveDefault(s);continue}let p=m.valueLength*(m.count||1),g=m.channels.map(M=>c[4*u+M]),x=m.componentType,v=new(Ta(x,y))(p);if(new Uint8Array(v.buffer).set(g),m.array){let M=s[u];for(let L=0,C=M.length;L<C;L++)M[L]=m.readDataFromBuffer(v,L,M[L])}else s[u]=m.readDataFromBuffer(v,0,s[u]);s[u]=m.adjustValueScaleOffset(s[u]),s[u]=m.resolveEnumsToStrings(s[u]),s[u]=m.resolveNoData(s[u])}}}dispose(){this.data.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},wd=class{constructor(i,e,t,n=null,s=null){let{schema:r,propertyTables:a=[],propertyTextures:o=[],propertyAttributes:l=[]}=i,{enums:c,classes:h}=r,u=a.map(m=>new E1(m,h,c,t)),d=[],f=[];n&&(n.propertyTextures&&(d=n.propertyTextures.map(m=>new P1(o[m],h,c,e))),n.propertyAttributes&&(f=n.propertyAttributes.map(m=>new T1(l[m],h,c)))),this.schema=r,this.tableAccessors=u,this.textureAccessors=d,this.attributeAccessors=f,this.object=s,this.textures=e,this.nodeMetadata=n}getPropertyTableData(i,e,t=null){if(!Array.isArray(i))t||(t={}),t=this.tableAccessors[i].getData(e,t);else{t||(t=[]);let n=Math.min(i.length,e.length);t.length=n;for(let s=0;s<n;s++){let r=this.tableAccessors[i[s]];t[s]=r.getData(e[s],t[s])}}if(Array.isArray(i)!==Array.isArray(t)||Array.isArray(i)!==Array.isArray(e))throw Error("StructuralMetadata: Scalar and array inputs cannot be mixed.");return t}getPropertyTableInfo(i=null){if(i===null&&(i=this.tableAccessors.map((e,t)=>t)),Array.isArray(i))return i.map(e=>{let t=this.tableAccessors[e];return{name:t.name,className:t.definition.class}});{let e=this.tableAccessors[i];return{name:e.name,className:e.definition.class}}}getPropertyTextureData(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;for(let s=0;s<n.length;s++)t[s]=n[s].getData(i,e,this.object.geometry,t[s]);return t}async getPropertyTextureDataAsync(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;let s=[];for(let r=0;r<n.length;r++){let a=n[r].getDataAsync(i,e,this.object.geometry,t[r]).then(o=>{t[r]=o});s.push(a)}return await Promise.all(s),t}getPropertyTextureInfo(){return this.textureAccessors}getPropertyAttributeData(i,e=[]){let t=this.attributeAccessors;e.length=t.length;for(let n=0;n<t.length;n++)e[n]=t[n].getData(i,this.object.geometry,e[n]);return e}getPropertyAttributeInfo(){return this.attributeAccessors.map(i=>({name:i.name,className:i.definition.class}))}dispose(){this.textureAccessors.forEach(i=>i.dispose()),this.tableAccessors.forEach(i=>i.dispose()),this.attributeAccessors.forEach(i=>i.dispose())}},wa="EXT_structural_metadata";function I1(i,e=[]){let t=i.json.textures?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{index:a}=s[r];n[a]===null&&(n[a]=i.loadTexture(a))}}),Promise.all(n)}function L1(i,e=[]){let t=i.json.bufferViews?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{values:a,arrayOffsets:o,stringOffsets:l}=s[r];n[a]===null&&(n[a]=i.getDependency("bufferView",a)),n[o]===null&&(n[o]=i.getDependency("bufferView",o)),n[l]===null&&(n[l]=i.getDependency("bufferView",l))}}),Promise.all(n)}var bg=class{constructor(i){this.parser=i,this.name=wa}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(wa))return;let n=null,s=e.json.extensions[wa];if(s.schemaUri){let{manager:l,path:c,requestHeader:h,crossOrigin:u}=e.options,d=new URL(s.schemaUri,c).toString(),f=new an(l);f.setCrossOrigin(u),f.setResponseType("json"),f.setRequestHeader(h),n=f.loadAsync(d).then(m=>{s={...s,schema:m}})}let[r,a]=await Promise.all([I1(e,s.propertyTextures),L1(e,s.propertyTables),n]),o=new wd(s,r,a);i.userData.structuralMetadata=o,i.traverse(l=>{if(e.associations.has(l)){let{meshes:c,primitives:h}=e.associations.get(l),u=e.json.meshes[c]?.primitives[h];if(u&&u.extensions&&u.extensions[wa]){let d=u.extensions[wa];l.userData.structuralMetadata=new wd(s,r,a,d,l)}else l.userData.structuralMetadata=o}})}},dg=new se,fg=new se,pg=new se;function D1(i){return i.x>i.y&&i.x>i.z?0:i.y>i.z?1:2}var Sg=class{constructor(i,e,t){this.geometry=i,this.textures=e,this.data=t,this._asyncRead=!1,this.featureIds=t.featureIds.map(n=>{let{texture:s,...r}=n,a={label:null,propertyTable:null,nullFeatureId:null,...r};return s&&(a.texture={texCoord:0,channels:[0],...s}),a})}getTextures(){return this.textures}getFeatureInfo(){return this.featureIds}getFeaturesAsync(...i){this._asyncRead=!0;let e=this.getFeatures(...i);return this._asyncRead=!1,e}getFeatures(i,e){let{geometry:t,textures:n,featureIds:s}=this,r=Array(s.length).fill(null),a=s.length;es.increaseSizeTo(a);let o=xg(t,i),l=o[D1(e)];for(let u=0,d=s.length;u<d;u++){let f=s[u],m="nullFeatureId"in f?f.nullFeatureId:null;if("texture"in f){let y=n[f.texture.index];_g(t,f.texture.texCoord,e,o,dg),Mg(dg,y.image.width,y.image.height,fg),pg.set(u,0),es.renderPixelToTarget(n[f.texture.index],fg,pg)}else if("attribute"in f){let y=t.getAttribute(`_feature_id_${f.attribute}`).getX(l);y!==m&&(r[u]=y)}else{let y=l;y!==m&&(r[u]=y)}}let c=new Uint8Array(a*4);if(this._asyncRead)return es.readDataAsync(c).then(()=>(h(),r));return es.readData(c),h(),r;function h(){let u=new Uint32Array(1);for(let d=0,f=s.length;d<f;d++){let m=s[d],y="nullFeatureId"in m?m.nullFeatureId:null;if("texture"in m){let{channels:p}=m.texture,g=p.map(v=>c[4*d+v]);new Uint8Array(u.buffer).set(g);let x=u[0];x!==y&&(r[d]=x)}}}}dispose(){this.textures.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},Bl="EXT_mesh_features";function mg(i,e,t){i.traverse(n=>{if(e.associations.has(n)){let{meshes:s,primitives:r}=e.associations.get(n),a=e.json.meshes[s]?.primitives[r];a&&a.extensions&&a.extensions[Bl]&&t(n,a.extensions[Bl])}})}var wg=class{constructor(i){this.parser=i,this.name=Bl}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(Bl))return;let n=e.json.textures?.length||0,s=Array(n).fill(null);mg(i,e,(a,{featureIds:o})=>{o.forEach(l=>{if(l.texture&&s[l.texture.index]===null){let c=l.texture.index;s[c]=e.loadTexture(c)}})});let r=await Promise.all(s);mg(i,e,(a,o)=>{a.userData.meshFeatures=new Sg(a.geometry,r,o)})}},Tg=class{constructor(){this.name="CESIUM_RTC"}afterRoot(i){if(i.parser.json.extensions&&i.parser.json.extensions.CESIUM_RTC){let{center:e}=i.parser.json.extensions.CESIUM_RTC;e&&(i.scene.position.x+=e[0],i.scene.position.y+=e[1],i.scene.position.z+=e[2])}}},Cd=class{constructor(i){i={metadata:!0,rtc:!0,plugins:[],dracoLoader:null,ktxLoader:null,meshoptDecoder:null,autoDispose:!0,...i},this.tiles=null,this.metadata=i.metadata,this.rtc=i.rtc,this.plugins=i.plugins,this.dracoLoader=i.dracoLoader,this.ktxLoader=i.ktxLoader,this.meshoptDecoder=i.meshoptDecoder,this._gltfRegex=/\.(gltf|glb)$/g,this._dracoRegex=/\.drc$/g,this._loader=null}init(i){let e=new Zn(i.manager);this.dracoLoader&&(e.setDRACOLoader(this.dracoLoader),i.manager.addHandler(this._dracoRegex,this.dracoLoader)),this.ktxLoader&&e.setKTX2Loader(this.ktxLoader),this.meshoptDecoder&&e.setMeshoptDecoder(this.meshoptDecoder),this.rtc&&e.register(()=>new Tg),this.metadata&&(e.register(()=>new bg),e.register(()=>new wg)),this.plugins.forEach(t=>e.register(t)),i.manager.addHandler(this._gltfRegex,e),this.tiles=i,this._loader=e}dispose(){this.tiles.manager.removeHandler(this._gltfRegex),this.tiles.manager.removeHandler(this._dracoRegex),this.autoDispose&&(this.ktxLoader.dispose(),this.dracoLoader.dispose())}};var{clamp:dT}=Mn;var fT=Symbol("FADE_PARAMS");var pT=Symbol("HAS_POPPED_IN");var mT=new Ki(new ai),U1=new or(new Uint8Array([255,255,255,255]),1,1);U1.needsUpdate=!0;var gT=Symbol("ORIGINAL_MATERIAL"),vT=Symbol("HAS_RANDOM_COLOR"),yT=Symbol("HAS_RANDOM_NODE_COLOR"),xT=Symbol("LOAD_TIME"),_T=Symbol("PARENT_BOUND_REF_COUNT");var N1=0,O1=1,F1=2,B1=3,z1=4,k1=5,V1=6,H1=7,G1=8,W1=9,X1=10,q1=11,MT=Object.freeze({NONE:N1,SCREEN_ERROR:O1,GEOMETRIC_ERROR:F1,DISTANCE:B1,DEPTH:z1,RELATIVE_DEPTH:k1,IS_LEAF:V1,RANDOM_COLOR:H1,RANDOM_NODE_COLOR:G1,CUSTOM_COLOR:W1,LOAD_ORDER:X1,INDEXED_COLOR:q1});var bT=Math.PI/4,ST=3/5;var Qn={NONE:0,NOT_READY:1,NO_FIT:2,DEPTH:3,OCCUPANCY:4,SPACING:5,ANGLE:6,FACING:7};var wT=new class{constructor(){this._cache={}}getColor(...i){let e=i.pop(),t=i.join("_"),{_cache:n}=this;return t in n||(e.setHSL(Math.random(),1,.5),n[t]=e.getHex()),e.set(n[t])}};var TT={[Qn.NONE]:16777215,[Qn.NOT_READY]:7829367,[Qn.NO_FIT]:2250239,[Qn.DEPTH]:4473924,[Qn.OCCUPANCY]:65535,[Qn.SPACING]:16776960,[Qn.ANGLE]:16711680,[Qn.FACING]:16711935};var AT=Symbol("TILE_X"),ET=Symbol("TILE_Y"),CT=Symbol("TILE_LEVEL"),RT=Symbol("HEIGHT_GRID"),PT=Symbol("SOURCE_TILE"),IT=Symbol("OVERLAY_RANGE"),LT=Symbol("OVERLAY_LEVEL"),DT=Symbol("HEIGHT_RANGE");var UT=Math.PI/180;var NT=yr*Math.PI*2;var OT=yr*Math.PI*2;var kl=Math.PI/180,Vl={nyc:{lat:40.72,lon:-73.99,h:-32.6,radiusM:11e3},orl:{lat:28.6,lon:-81.32,h:-9.5,radiusM:22e3}};function Ag(i){let e=As.getEastNorthUpFrame(i.lat*kl,i.lon*kl,i.h,new Ne),t=e.clone().invert(),n=new Ne().set(1,0,0,0,0,0,1,0,0,-1,0,0,0,0,0,1),s=mr*kl/(111320*Math.cos(i.lat*kl)),r=new Ne().makeScale(s,s,s),a=li(i.lat,i.lon),o=new Ne().makeTranslation(a.x,0,a.z),l=new P().setFromMatrixPosition(e);return{matrix:o.multiply(r).multiply(n).multiply(t),center:a,upm:s,ecefCenter:l}}function Eg({key:i,scene:e,camera:t,renderer:n,world:s}){let r=new Md,a=new bd({apiToken:i,autoRefreshToken:!0});r.registerPlugin(a);let o=new vl().setDecoderPath("assets/draco/");r.registerPlugin(new Cd({dracoLoader:o})),r.registerPlugin(new Td);let l={name:"CITY_MASK",sphere:new Wt(new P,1),calculateTileViewError(ee,G){return ee.engineData.boundingVolume.intersectsSphere(this.sphere)?!1:(G.inView=!1,!0)}};r.registerPlugin(l);let c=window.matchMedia("(max-width: 860px)").matches,h=()=>{r.errorTarget=(c?12:7)*Math.sqrt(Math.max(1,n.getPixelRatio()))};h(),r.downloadQueue.maxJobsPerOrigin=c?10:16,r.parseQueue.maxJobs=c?4:8,r.lruCache.maxBytesSize=(c?.35:.7)*1024**3;let u=Math.min(8,n.capabilities.getMaxAnisotropy());r.setCamera(t),r.setResolutionFromRenderer(t,n),r.group.matrixAutoUpdate=!1,e.add(r.group);let d={nyc:Ag(Vl.nyc),orl:Ag(Vl.orl)},f={uFade:{value:0},uCenter:{value:new P},uRadius:{value:1},uExposure:{value:.86},uSat:{value:.96},...dl(s.fog)},m=null;function y(ee){if(m===ee)return;m=ee;let G=d[ee];r.group.matrix.copy(G.matrix),r.group.matrixWorldNeedsUpdate=!0,r.group.updateMatrixWorld(!0),l.sphere.center.copy(G.ecefCenter),l.sphere.radius=Vl[ee].radiusM,f.uCenter.value.copy(G.center),f.uRadius.value=Vl[ee].radiusM*G.upm}y("nyc"),r.addEventListener("load-model",({scene:ee,tile:G})=>{ee.traverse(pe=>{if(!pe.isMesh)return;let de=pe.material.map;de&&(de.anisotropy=u,de.needsUpdate=!0);let oe=new At({vertexShader:bu.vertexShader,fragmentShader:bu.fragmentShader,uniforms:{...f,map:{value:de}}});G.engineData.materials.push(oe),pe.material=oe})});let p={ok:!1,failed:!1,loaded:0},g={nyc:!1,orl:!1},x={nyc:0,orl:0},v=0,M=0,L=0;r.addEventListener("load-model",()=>{p.loaded++,p.failed||(p.ok=!0)}),r.addEventListener("load-error",ee=>{!p.ok&&(ee.tile==null||ee.tile===r.root)&&(p.failed=!0,Z("nyc",!0),Z("orl",!0)),console.warn("3D tiles:",ee.error||ee)});let C=!1,A=new URLSearchParams(location.search).has("debug");function D(ee,G){g[ee]||(A&&console.info("city ready",ee,G,{loaded:p.loaded,t:performance.now()|0,visible:r.visibleTiles.size,stats:{...r.stats}}),g[ee]=!0,Z(ee,!1))}function Z(ee,G){s[ee].group.children.forEach(de=>{!de.userData.keep&&de!==s.nycWater&&(de.visible=G)}),ee==="nyc"&&(s.nycWater&&(s.nycWater.position.y=G?-.3:.5*d.nyc.upm),s.reflect.uMirrorY.value=G?0:.5*d.nyc.upm)}let _=new dr;_.firstHitOnly=!0;let w=[];function $(ee,G){return _.set(new P(ee,30,G),new P(0,-1,0)),w.length=0,r.raycast(_,w),w.length?w[0].point.y:null}let B=document.getElementById("map-credit"),N=B?B.querySelector(".mc-data"):null,Y=0,V=[];return A&&(window.__real={tiles:r,ready:g,state:p}),{tiles:r,get active(){return p.ok&&!p.failed&&!!g[m]},get busy(){return C&&!g[m]},update(ee,G){let pe=Math.min(.1,Math.max(0,G-L));L=G;let de=t.position.distanceTo(d.nyc.center),oe=t.position.distanceTo(d.orl.center),Ze=m;y(de<oe?"nyc":"orl"),m!==Ze&&(v=g[m]?1:0,M=0);let rt=1-Math.min(1,Math.max(0,(ee-120)/180));if(C=rt>.01&&!p.failed,C){x[m]||(x[m]=G);let Ue=G-x[m];!g[m]&&p.ok&&Ue>1.5&&r.loadProgress>.88&&D(m,"progress"),!g[m]&&p.ok&&Ue>20&&D(m,"timeout"),r.setResolutionFromRenderer(t,n),r.update(),M=p.ok&&!r.isLoading?M+pe:0,M>.6&&D(m,"idle")}let Q=g[m]&&!p.failed;v=Q?Math.min(1,v+pe/.9):0;let le=v*v*(3-2*v);if(f.uFade.value=rt*le,r.group.visible=C&&Q,s.realCities=Q,s.sky.uniforms.uDay.value=Q?rt*le:0,B&&G-Y>1){Y=G;let Ue=p.ok&&rt>.2&&r.visibleTiles.size>0;if(B.hidden=!Ue,Ue){V.length=0,r.getAttributions(V);let be=V.filter(qe=>qe.type==="string").map(qe=>qe.value).join(" ");N.textContent!==be&&(N.textContent=be)}}},groundAt:$,resize(){h(),r.setResolutionFromRenderer(t,n)}}}var Y1=[{name:"Offices",pos:[25.6,-80.6,27e5],look:[35.6,-77.9,0],ox:.24,oy:.02,my:.1,fov:36,mob:1.25},{name:"Skyline",pos:[40.6868,-74.0525,38],look:[40.695,-74.0345,90],ox:.14,oy:0,my:.2,fov:40,mob:1.15},{name:"Commercial",pos:[40.746,-74.015,230],look:[40.7585,-73.985,190],ox:.27,oy:0,my:.12,fov:40,mob:1.3},{name:"Residential",pos:[28.65,-81.269,115],look:[28.656,-81.26,0],ox:-.27,oy:0,my:.14,fov:40,mob:1.25},{name:"Advisory",pos:[28.5408,-81.3712,95],look:[28.5446,-81.377,105],ox:.28,oy:0,my:.12,fov:40,mob:1.35},{name:"Track record",pos:[28.5418,-81.364,120],look:[28.544,-81.379,55],ox:0,oy:-.08,my:.08,fov:42,mob:1.2},{name:"Listings",pos:[28.5455,-81.356,650],look:[28.556,-81.356,0],ox:-.26,oy:0,my:.12,fov:40,mob:1.25},{name:"Contact",pos:[28.62,-81.305,1500],look:[28.67,-81.245,0],ox:-.12,oy:.05,my:.12,fov:40,mob:1.2}],Pd=Y1.map(i=>({...i,P:li(...i.pos),Lk:li(...i.look)})),Rg=Pd.length,Rd=i=>i*i*i*(i*(i*6-15)+10),ts=(i,e,t)=>i+(e-i)*t,Hl=new P,Cg=new P;function Pg(i,e,t){let n=Math.min(Rg-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=Rd(s),a=Pd[n],o=Pd[n+1],l=Math.max(.05,a.P.y),c=Math.max(.05,o.P.y),h=Math.hypot(o.P.x-a.P.x,o.P.z-a.P.z),u=Math.max(l,c,h*.75),d=u>Math.max(l,c)*1.6,f=d?Math.pow(Math.sin(Math.PI*r),.8):0,m=ts(Math.log(l),Math.log(c),r),y=Math.exp(m+(Math.log(u)-m)*f),p=Math.max(l,c)/Math.min(l,c),g=d?Rd(Rd(r)):p>8?(y-l)/(c-l):r;t.pos.set(ts(a.P.x,o.P.x,g),y,ts(a.P.z,o.P.z,g)),Hl.copy(a.Lk).lerp(o.Lk,g),d&&(Cg.set(t.pos.x,0,t.pos.z).add(Hl.clone().sub(t.pos).setY(0).normalize().multiplyScalar(y*.35)),Hl.lerp(Cg,f)),t.look.copy(Hl);let x=e<.9;if(t.ox=x?0:ts(a.ox,o.ox,r),t.oy=x?ts(a.my,o.my,r):ts(a.oy,o.oy,r),t.fov=ts(a.fov,o.fov,r),x){let v=ts(a.mob,o.mob,r)*(1+(.9/e-1)*.3);t.pos.sub(t.look).multiplyScalar(v).add(t.look)}return t.flight=f,t}var Ig=Rg;var Bt=(i,e=document)=>e.querySelector(i),Ii=(i,e=document)=>Array.from(e.querySelectorAll(i)),Es=window.matchMedia("(prefers-reduced-motion: reduce)"),j1=1990,$1=["left","left","left","right","left","center","right","left"];function Lg(i){let e=Ii(".chapter"),t=new Date().getFullYear(),n=t-j1;Ii(".js-years").forEach(N=>{N.textContent=String(n)});let s=Bt("#year");s&&(s.textContent=String(t));let r=Bt(".nav-toggle"),a=Bt("#nav-list"),o=()=>{r.setAttribute("aria-expanded","false"),a.classList.remove("is-open")};r.addEventListener("click",()=>{let N=r.getAttribute("aria-expanded")!=="true";r.setAttribute("aria-expanded",String(N)),a.classList.toggle("is-open",N),N&&a.querySelector("a").focus()}),document.addEventListener("keydown",N=>{N.key==="Escape"&&a.classList.contains("is-open")&&(o(),r.focus())}),document.addEventListener("click",N=>{let Y=N.target.closest('a[href^="#"]');if(!Y)return;let V=Y.getAttribute("href").slice(1),ee=V==="main"?e[0]:document.getElementById(V);if(!ee)return;let G=ee.closest(".chapter")||ee,pe=e.indexOf(G);if(!(pe<0)){if(N.preventDefault(),o(),Y.dataset.interest){let de=Bt("#f-interest");de&&(de.value=Y.dataset.interest)}l(pe,G)}});function l(N,Y=e[N]){let V=i.anchorFor?i.anchorFor(N):Y.offsetTop;window.scrollTo({top:V,behavior:Es.matches?"auto":"smooth"});let ee=Y.querySelector("h1, h2")||Y;ee.setAttribute("tabindex","-1"),ee.focus({preventScroll:!0}),history.replaceState(null,"",N===0?location.pathname:`#${Y.id}`)}i.goToChapter=l,Ii(".reveal-stagger").forEach(N=>{Array.from(N.children).forEach((Y,V)=>Y.style.setProperty("--i",V))});let c=new IntersectionObserver(N=>{for(let Y of N)Y.isIntersecting&&(Y.target.classList.add("is-in"),Y.target.id==="record"&&h(Y.target),c.unobserve(Y.target))},{threshold:.18,rootMargin:"0px 0px -10% 0px"});i.startReveals=()=>e.forEach(N=>c.observe(N));function h(N){Ii("[data-count]",N).forEach(Y=>{let V=parseInt(Y.textContent,10);if(!Number.isFinite(V)||Es.matches)return;let ee=performance.now()+450,G=1800;Y.textContent="0";let pe=de=>{let oe=Math.min(1,Math.max(0,(de-ee)/G)),Ze=oe===1?1:1-Math.pow(2,-10*oe);Y.textContent=String(Math.round(V*Ze)),oe<1&&requestAnimationFrame(pe)};requestAnimationFrame(pe)})}let u=Ii(".site-nav a"),d=Ii(".system-map a"),f=Bt("#sm-fill"),m=Bt("#tm-sector"),y=Bt("#tm-coords"),p=-1,g=Bt("#step-prev"),x=Bt("#step-next"),v=Bt("#step-name"),M=N=>d[N]?d[N].querySelector(".sm-name").textContent:"",L=()=>Math.max(0,p),C=()=>{let N=L();g&&(g.hidden=N===0,g.setAttribute("aria-label",`Previous chapter: ${M(N-1)}`)),x&&(x.hidden=N>=e.length-1,x.setAttribute("aria-label",`Next chapter: ${M(N+1)}`),v&&(v.textContent=M(N+1)))},A=new Set,D=new IntersectionObserver(N=>{N.forEach(Y=>Y.isIntersecting?A.add(Y.target):A.delete(Y.target)),document.body.classList.toggle("next-visible",A.size>0)});Ii(".next-row, #home-port .cta-row, #launch .cta-row").forEach(N=>D.observe(N)),g&&g.addEventListener("click",()=>l(Math.max(0,L()-1))),x&&x.addEventListener("click",()=>l(Math.min(e.length-1,L()+1))),C(),i.setProgress=(N,Y,V)=>{if(f&&(f.style.transform=`scaleY(${(N/(e.length-1)).toFixed(4)})`),Y!==p){p=Y,C(),document.body.dataset.side=$1[Y]||"left",d.forEach((G,pe)=>G.classList.toggle("is-active",pe===Y));let ee=e[Y]&&e[Y].id;if(u.forEach(G=>G.setAttribute("aria-current",String(G.getAttribute("href")===`#${ee}`))),m){let G=d[Y]?d[Y].querySelector(".sm-name").textContent:"";m.textContent=`${String(Y+1).padStart(2,"0")} \xB7 ${G}`}}y&&V&&(y.textContent=V)};let Z=Bt(".site-header"),_=window.scrollY;window.addEventListener("scroll",()=>{let N=window.scrollY;Z.classList.toggle("is-scrolled",N>40),!a.classList.contains("is-open")&&Math.abs(N-_)>6&&Z.classList.toggle("is-hidden",N>_&&N>400),_=N},{passive:!0}),Z.addEventListener("focusin",()=>Z.classList.remove("is-hidden"));let w=Bt(".site-footer");new IntersectionObserver(([N])=>document.body.classList.toggle("at-footer",N.isIntersecting),{threshold:.05}).observe(w);let $=Bt("#crexi-load");$&&$.addEventListener("click",()=>{let N=document.createElement("iframe");N.className="crexi-frame",N.src="https://www.crexi.com/widgets/1594",N.title="CIIN Co. commercial listings on Crexi",N.loading="lazy",N.referrerPolicy="strict-origin-when-cross-origin",$.replaceWith(N)});let B=Bt("#contact-form");if(B){let N=Bt(".form-status",B),Y=[["f-name",ee=>ee.trim().length>1,"Please enter your name."],["f-email",ee=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ee.trim()),"Please enter a valid email address."],["f-message",ee=>ee.trim().length>4,"Please tell us a little about what you need."]],V=(ee,G,pe)=>{let de=Bt(`#${ee}`,B),oe=Bt(`#${ee}-err`,B),Ze=G(de.value);return de.setAttribute("aria-invalid",String(!Ze)),Ze?(de.removeAttribute("aria-describedby"),oe.textContent=""):(de.setAttribute("aria-describedby",`${ee}-err`),oe.textContent=pe),Ze};Y.forEach(([ee,G,pe])=>Bt(`#${ee}`,B).addEventListener("blur",de=>{de.target.value&&V(ee,G,pe)})),B.addEventListener("submit",async ee=>{ee.preventDefault(),N.className="form-status",N.textContent="";let G=Y.map(de=>V(...de));if(G.includes(!1)){let de=Y[G.indexOf(!1)][0];Bt(`#${de}`,B).focus(),N.classList.add("is-error"),N.textContent="Please check the highlighted fields.";return}if(B.company_website.value)return;let pe=B.querySelector('button[type="submit"]');pe.disabled=!0,N.textContent="Sending\u2026";try{let de=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(B)).toString()});if(!de.ok)throw new Error(String(de.status));window.location.href=B.getAttribute("action")}catch{pe.disabled=!1,N.classList.add("is-error"),N.innerHTML='Your message could not be sent. Please email <a href="mailto:rafael@ciinco.com">rafael@ciinco.com</a> or call <a href="tel:+14077395959">407-739-5959</a>.'}})}return Ii("#type-chips li").forEach((N,Y)=>{N.addEventListener("pointerenter",()=>i.hotType&&i.hotType(Y)),N.addEventListener("pointerleave",()=>i.hotType&&i.hotType(-1))}),Ii("#consulting li").forEach(N=>{let Y=parseInt(N.dataset.node,10);N.addEventListener("pointerenter",()=>i.hotNode&&i.hotNode(Y)),N.addEventListener("pointerleave",()=>i.hotNode&&i.hotNode(-1))}),Ii(".office").forEach(N=>{N.addEventListener("pointerenter",()=>i.hotOffice&&i.hotOffice(N.dataset.office)),N.addEventListener("pointerleave",()=>i.hotOffice&&i.hotOffice(null))}),i.markType=N=>Ii("#type-chips li").forEach((Y,V)=>Y.classList.toggle("is-hot",V===N)),i.markNode=N=>Ii("#consulting li").forEach(Y=>Y.classList.toggle("is-hot",parseInt(Y.dataset.node,10)===N)),i.markOffice=N=>Ii(".office").forEach(Y=>Y.classList.toggle("is-hot",Y.dataset.office===N)),{chapters:e}}function Gl(i){let e=Bt("#loader-pct"),t=Bt("#loader-bar");e&&(e.textContent=`${Math.round(i*100)}%`),t&&(t.style.transform=`scaleX(${i.toFixed(3)})`)}function Wl(){document.body.classList.remove("is-loading")}var Id=document.documentElement;Id.classList.add("js");var Mi={},{chapters:Ld}=Lg(Mi),is=new URLSearchParams(location.search);function Z1(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}var K1=Math.min(screen.width,screen.height),Ca={low:is.has("low")||K1<700||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4},J1=Ca.low?1.5:1.75,bi=[],Ra=null;function wr(){let i=window.innerHeight,e=document.documentElement.scrollHeight-i;bi=Ld.map((t,n)=>{if(n===0)return 0;let s=t.getBoundingClientRect();return Math.min(e,Math.max(0,s.top+window.scrollY+s.height/2-i/2))});for(let t=1;t<bi.length;t++)bi[t]=Math.max(bi[t],bi[t-1]+1)}Mi.anchorFor=i=>bi[i]??0;function Dd(){if(Ra!==null)return Ra;let i=window.scrollY;if(!bi.length||i<=bi[0])return 0;for(let e=0;e<bi.length-1;e++)if(i<bi[e+1])return e+(i-bi[e])/(bi[e+1]-bi[e]);return bi.length-1}function Dg(){wr(),window.addEventListener("resize",wr);let i=()=>{let e=Dd();Mi.setProgress(e,Math.round(e),null),requestAnimationFrame(i)};i()}async function Q1(){let i=document.getElementById("cosmos"),e=new ar({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=Math.min(window.devicePixelRatio||1,J1);e.setPixelRatio(t),e.setSize(window.innerWidth,window.innerHeight,!1),e.toneMapping=ta,e.toneMappingExposure=1.05,e.outputColorSpace=It;let n=new To,s=new Ot(40,window.innerWidth/window.innerHeight,.05,5e4),r=0,a=6,o=()=>Gl(++r/a*.85),l=new vs,c=new ur(l),h=await new Promise(b=>{let R=c.load(`assets/textures/${Ca.low?"map-2k":"map"}.webp`,()=>{o(),b(R)},void 0,()=>{o(),b(R)});R.colorSpace=en,R.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),R.minFilter=Ui}),u=(b,R)=>new Promise(U=>{let O=c.load(`assets/textures/${b}.webp`,()=>{o(),U(O)},void 0,()=>{o(),U(null)});O.colorSpace=It,O.wrapS=O.wrapT=R,O.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy())}),[d,f,m]=await Promise.all([u("sky-dusk",$i),u("facade-brick",sn),u("facade-glass",sn)]),y=b=>fetch(b).then(R=>R.json()).then(R=>(o(),R)),[p,g]=await Promise.all([y("assets/data/nyc.json"),y("assets/data/map.json")]),x=nm(n,{map:h,sky:d,brick:f,glass:m},{nyc:p,map:g},Ca);is.has("debug")&&console.info("stats",JSON.stringify({nycBuildings:x.nycBuildings.count,homes:x.homeCount,...x.stats}));let v=new Ft(1,1,{type:yi,samples:Ca.low?0:4}),M=new cl(e,v);M.setPixelRatio(t),M.setSize(window.innerWidth,window.innerHeight),M.addPass(new hl(n,s)),M.addPass(new _s(Wp));let L=new pr(new se(window.innerWidth,window.innerHeight),.42,.35,1.05);M.addPass(L),M.addPass(new ul);let C=new _s(Xp);M.addPass(C),x.uPixelRatio.value=t;let A={on:!is.has("noreflect"),scale:Ca.low?.35:.5,rt:new Ft(1,1,{type:yi}),cam:new Ot,plane:new mi,clip:new xt,q:new xt,up:new P,fwd:new P};x.reflect.uReflect.value=A.rt.texture;let D=()=>{let b=Math.max(2,Math.round(window.innerWidth*t*A.scale)),R=Math.max(2,Math.round(window.innerHeight*t*A.scale));A.rt.setSize(b,R)};D();function Z(b,R){let U=A.cam,O=x.reflect.uMirrorY.value;U.fov=s.fov,U.aspect=s.aspect,U.near=s.near,U.far=s.far,U.position.set(s.position.x,2*O-s.position.y,s.position.z),A.fwd.set(0,0,-1).applyQuaternion(s.quaternion),A.fwd.y*=-1,A.up.set(0,1,0).applyQuaternion(s.quaternion),A.up.y*=-1,U.up.copy(A.up),U.lookAt(ve.copy(U.position).add(A.fwd)),U.setViewOffset(me(),Ce(),-b,R,me(),Ce()),U.updateProjectionMatrix(),U.updateMatrixWorld();let W=x.reflect.uReflectMat.value;W.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),W.multiply(U.projectionMatrix).multiply(U.matrixWorldInverse),A.plane.setFromNormalAndCoplanarPoint(E.set(0,1,0),ve.set(0,O,0)).applyMatrix4(U.matrixWorldInverse),A.clip.set(A.plane.normal.x,A.plane.normal.y,A.plane.normal.z,A.plane.constant);let X=U.projectionMatrix.elements;A.q.set((Math.sign(A.clip.x)+X[8])/X[0],(Math.sign(A.clip.y)+X[9])/X[5],-1,(1+X[10])/X[14]),A.clip.multiplyScalar(2/A.clip.dot(A.q)),X[2]=A.clip.x,X[6]=A.clip.y,X[10]=A.clip.z+1,X[14]=A.clip.w;let K=x.waterMeshes.map(te=>te.visible);x.waterMeshes.forEach(te=>{te.visible=!1}),e.setRenderTarget(A.rt),e.clear(),e.render(n,U),e.setRenderTarget(null),x.waterMeshes.forEach((te,ae)=>{te.visible=K[ae]})}let _=(document.querySelector('meta[name="gmaps-key"]')?.content||"").trim(),w=null;if(_&&!is.has("generated"))try{w=Eg({key:_,scene:n,camera:s,renderer:e,world:x})}catch(b){console.warn("3D tiles unavailable",b)}let $={night:{zenith:x.uZenith.value.clone(),horizon:x.sky.uniforms.uHorizon.value.clone(),glow:x.sky.uniforms.uGlow.value.clone(),cool:x.fog.cool.value.clone(),warm:x.fog.warm.value.clone()},day:{zenith:new ge(.035,.075,.2),horizon:new ge(.3,.22,.25),glow:new ge(1.25,.55,.22),cool:new ge(.13,.15,.23),warm:new ge(.55,.32,.17)}};function B(b){x.uZenith.value.copy($.night.zenith).lerp($.day.zenith,b),x.sky.uniforms.uHorizon.value.copy($.night.horizon).lerp($.day.horizon,b),x.sky.uniforms.uGlow.value.copy($.night.glow).lerp($.day.glow,b),x.fog.cool.value.copy($.night.cool).lerp($.day.cool,b),x.fog.warm.value.copy($.night.warm).lerp($.day.warm,b)}let N=0,Y=document.getElementById("labels"),V=(b,R)=>{let U=document.createElement("div");return U.className=`label ${b}`,U.innerHTML=R,Y.appendChild(U),U},ee=x.offices.map(b=>({o:b,el:V("label-office",`<span class="dot"></span><span class="stem"></span><span class="txt"><b>${b.name}</b><small>${b.sub}</small></span>`)})),G=x.typeTargets.map(b=>({t:b,el:V("label-type",`<span class="dot"></span><span>${b.name}</span>`)})),de=Array.from(document.querySelectorAll("#consulting li")).map(b=>b.textContent.trim()).map((b,R)=>({i:R,el:V("label-node",`<span class="num">${String(R+1).padStart(2,"0")}</span><span class="name">${b}</span>`)})),oe=-1,Ze=-1,rt=null;Mi.hotType=b=>{oe=b,Mi.markType(b)},Mi.hotNode=b=>{Ze=b,Mi.markNode(b)},Mi.hotOffice=b=>{rt=b,Mi.markOffice(b)};let Q={x:0,y:0,sx:-100,sy:-100,px:-100,py:-100,inside:!1,overUI:!0},le=document.getElementById("cursor"),Ue=document.getElementById("cursor-label"),be=window.matchMedia("(hover: hover) and (pointer: fine)").matches;be&&document.body.classList.add("has-cursor");let qe='a, button, input, select, textarea, label, summary, [role="button"], iframe',Ke="p, h1, h2, h3, li, dt, dd, address, form, .agent, .chips, legend, .offices";window.addEventListener("pointermove",b=>{Q.x=b.clientX/window.innerWidth*2-1,Q.y=-(b.clientY/window.innerHeight)*2+1,Q.px=b.clientX,Q.py=b.clientY,Q.inside=!0;let R=b.target instanceof Element?b.target:null,U=!!(R&&R.closest(qe));Q.overUI=U||!!(R&&R.closest(Ke))||!!(R&&R.closest(".site-header, .system-map, .site-footer")),le.classList.toggle("is-link",U)},{passive:!0}),document.addEventListener("pointerleave",()=>{Q.inside=!1});let je=null;window.addEventListener("click",b=>{if(!je||Q.overUI)return;let R=b.target instanceof Element?b.target:null;R&&R.closest(qe)||Mi.goToChapter(je.chapter)});function lt(){let b=window.innerWidth,R=window.innerHeight;s.aspect=b/R,e.setPixelRatio(t),e.setSize(b,R,!1),M.setPixelRatio(t),M.setSize(b,R),x.uPixelRatio.value=t,D(),w&&w.resize(),wr()}window.addEventListener("resize",lt),new ResizeObserver(()=>wr()).observe(document.querySelector("main")),document.fonts&&document.fonts.ready.then(wr),wr();let he=new ys,I={pos:new P,look:new P,ox:0,oy:0,fov:40,flight:0},Te=is.has("cam")?(()=>{let b=is.get("cam").split(",").map(Number);return[li(b[0],b[1],b[2]),li(b[3],b[4],b[5])]})():null;is.has("p")&&(Ra=Math.min(Ig-1,Math.max(0,parseFloat(is.get("p"))||0)));let xe=Dd(),H=xe,ye=Es.matches||Ra!==null?1:0,Pe=!1,ve=new P,E=new P,S=new Ne,j=new vi,re=new mi(new P(0,1,0),0),ce=new se,ne={frames:0,acc:0,checked:0},ke=!0,_e=0;document.addEventListener("visibilitychange",()=>{ke=!document.hidden,ke&&(he.getDelta(),requestAnimationFrame(ie))});let Ae=(b,R,U)=>{let O=Math.min(1,Math.max(0,(U-b)/(R-b)));return O*O*(3-2*O)},Qe=b=>Math.max(0,1-Math.abs(H-b)*1.6),me=()=>window.innerWidth,Ce=()=>window.innerHeight;function $e(b){return ve.copy(b).project(s),{x:(ve.x*.5+.5)*me(),y:(-ve.y*.5+.5)*Ce(),on:ve.z<1&&Math.abs(ve.x)<1.1&&Math.abs(ve.y)<1.1}}let We=null,Oe=-1;function pt(b){let R=Ld[b],U=R&&(R.querySelector(".panel")||R.querySelector(".contact-intro")||R.querySelector(".wrap")),O=U?U.getBoundingClientRect():null;We=O&&O.width?{l:O.left-28,r:O.right+28,t:O.top-20,b:O.bottom+20}:null}function tt(b,R,U,O=0,W=0){let X=$e(R),K=X.x+O,te=X.y+W,ae=We&&K>We.l&&K<We.r&&te>We.t&&te<We.b,ue=U&&X.on&&!ae;b.classList.toggle("is-on",ue),ue&&(b.style.transform=`translate3d(${(X.x+O).toFixed(1)}px, ${(X.y+W).toFixed(1)}px, 0) translate(-3px, -50%)`)}let bt=b=>`${Math.abs(b).toFixed(4)}\xB0 ${b>=0?"N":"S"}`,z=b=>`${Math.abs(b).toFixed(4)}\xB0 ${b>=0?"E":"W"}`,Fe=b=>b>=1e4?`${Math.round(b/1e3).toLocaleString("en-US")} km`:`${Math.round(b).toLocaleString("en-US")} m`;function ie(){if(!ke)return;requestAnimationFrame(ie);let b=Math.min(he.getDelta(),.05),R=he.elapsedTime;x.uTime.value=R,C.uniforms.uTime.value=Es.matches?0:R,C.uniforms.uGrain.value=x.realCities?.01:.028,C.uniforms.uAberration.value=x.realCities?0:6e-4,xe=Dd();let U=Ra!==null;R-Oe>.25&&(Oe=R,pt(Math.round(xe)));let O=Es.matches?12:3;H+=(xe-H)*(1-Math.exp(-b*O)),(Math.abs(xe-H)<1e-4||U)&&(H=xe),Pe&&ye<1&&(ye=Math.min(1,ye+b/4.5));let W=1-Math.pow(1-ye,3),X=me()/Ce();if(Pg(H,X,I),Te&&(I.pos.copy(Te[0]),I.look.copy(Te[1]),I.ox=0,I.oy=0),W<1){let Ee=1-W;I.pos.y*=1+Ee*.35}!Es.matches&&be&&(ce.x+=(Q.x-ce.x)*(1-Math.exp(-b*2.5)),ce.y+=(Q.y-ce.y)*(1-Math.exp(-b*2.5))),s.position.copy(I.pos),s.lookAt(I.look);let K=I.pos.distanceTo(I.look);ve.set(1,0,0).applyQuaternion(s.quaternion).multiplyScalar(ce.x*K*.02),E.set(0,1,0).applyQuaternion(s.quaternion).multiplyScalar(ce.y*K*.012),s.position.add(ve).add(E),s.position.y=Math.max(s.position.y,.08),s.lookAt(I.look);let te=s.position.y;s.fov=I.fov,s.near=Math.max(.02,te*.01),s.far=Math.max(4e3,te*60),s.setViewOffset(me(),Ce(),-I.ox*me(),I.oy*Ce(),me(),Ce()),s.updateProjectionMatrix(),s.updateMatrixWorld(),x.fog.density.value=1/Math.max(260,te*5),x.fog.detail.value=1-Ae(140,700,te),x.clouds.uniforms.uOpacity.value=.42*Ae(110,600,te)*(1-Ae(25e3,4e4,te))+.5*I.flight*Ae(60,200,te),x.map.uniforms.uLights.value=.6+.6*Ae(50,3e3,te),x.offices.forEach(Ee=>{let Xe=s.position.distanceTo(Ee.pos);Ee.beam.scale.set(Math.max(.12,Xe*.0035),Math.max(8,Xe*.45),Math.max(.12,Xe*.0035)),Ee.ring.scale.setScalar(Math.max(.8,Xe*.06));let ht=Math.max(Qe(0),Qe(7)*(Ee.id==="orlando"?1:0),Qe(2)*(Ee.id==="new-york"?1:0),Qe(3)*(Ee.id==="orlando"?1:0),.12),et=x.realCities?Ae(150,1500,te):1;Ee.beamMat.uniforms.uIntensity.value=1.2*ht*et*(.35+.65*Ae(4,60,Xe))*(rt===Ee.id?1.8:1),Ee.ringMat.uniforms.uOn.value=ht*et}),x.arc.uniforms.uOn.value=Math.max(1-Ae(.4,1,H),I.flight*(H>2&&H<3?1:0)),x.arc.uniforms.uDraw.value+=((Pe?1.02:0)-x.arc.uniforms.uDraw.value)*(U?1:1-Math.exp(-b*1.2)),x.billboards.forEach(Ee=>Ee.quaternion.copy(s.quaternion)),x.fountain&&x.fountain.material.uniforms.uColor.value.setHSL(R*.03%1,.6,.6);let ae=x.nycBuildings.uniforms;ae.uHot.value=oe,ae.uHotOn.value+=((oe>=0?1:0)-ae.uHotOn.value)*.15;let ue=Qe(2);G.forEach((Ee,Xe)=>{Ee.el.classList.toggle("is-hot",oe===Xe),E.copy(Ee.t.local).add(x.nyc.center),tt(Ee.el,E.clone(),ue>.55&&X>.9&&!x.realCities)});let Se=x.tower,we=Ae(3.3,3.95,H)*(1-Ae(5.3,5.9,H));Se.uniforms.uDraw.value+=(we*1.08-Se.uniforms.uDraw.value)*(U?1:1-Math.exp(-b*1.6)),Se.uniforms.uHot.value=Ze;let Ie=Qe(4);de.forEach(Ee=>{Ee.el.classList.toggle("is-hot",Ze===Ee.i),E.copy(Se.floorLocal(Ee.i)).add(x.orl.center);let Xe=!x.realCities&&Ie>.55&&(X>.9||Ze===Ee.i)&&Se.uniforms.uDraw.value>Ee.i/15+.05;tt(Ee.el,E.clone(),Xe,26,0)});let ze=x.parcels.uniforms;ze.uOn.value+=(Ae(5.4,6,H)*(1-Ae(6.6,7,H))-ze.uOn.value)*(U?1:.08);let Je=0;if(be&&Q.inside&&!Q.overUI&&ze.uOn.value>.2&&(ve.set(Q.x,Q.y,.5).unproject(s).sub(s.position).normalize(),j.set(s.position,ve),j.intersectPlane(re,E)&&(Je=1,ze.uPointerOn.value<.05&&ze.uPointer.value.copy(E),ze.uPointer.value.lerp(E,.2))),ze.uPointerOn.value+=(Je-ze.uPointerOn.value)*.08,ee.forEach(Ee=>{Ee.el.classList.toggle("is-hot",rt===Ee.o.id);let Xe=Qe(0)>.5||Ee.o.id==="new-york"&&Qe(2)>.55||Ee.o.id==="orlando"&&(Qe(7)>.55||Qe(3)>.55);tt(Ee.el,Ee.o.pos,Xe)}),je=null,be&&Q.inside&&!Q.overUI&&Qe(0)>.5)for(let Ee of x.hit){let Xe=$e(Ee.center);Xe.on&&Math.hypot(Xe.x-Q.px,Xe.y-Q.py)<70&&(je=Ee)}be&&(Q.sx+=(Q.px-Q.sx)*.25,Q.sy+=(Q.py-Q.sy)*.25,le.style.transform=`translate3d(${Q.sx.toFixed(1)}px, ${Q.sy.toFixed(1)}px, 0)`,le.classList.toggle("is-world",!!je),le.classList.toggle("is-hidden",!Q.inside),je&&Ue.textContent!==je.label&&(Ue.textContent=je.label)),w&&(w.update(te,R),B(x.sky.uniforms.uDay.value),w.active&&R-N>1&&(N=R,x.offices.forEach(Ee=>{let Xe=w.groundAt(Ee.pos.x,Ee.pos.z);Xe!==null&&(Ee.ring.position.y=Xe+.02,Ee.beam.position.y=Xe)}))),x.tower.mesh.visible===!!x.realCities&&(x.tower.mesh.visible=!x.realCities,x.parcelLines.visible=!x.realCities,document.body.classList.toggle("real-cities",!!x.realCities));let at=s.position.distanceTo(x.nyc.center)<400,ct=A.on&&te<60&&x.fog.detail.value>.05&&(!x.realCities||at);if(x.reflect.uReflectOn.value=ct?1:0,ct&&Z(-I.ox*me(),I.oy*Ce()),M.render(b),R-_e>.1){_e=R;let Ee=Qp(s.position.x,s.position.z);Mi.setProgress(xe,Math.round(xe),`${bt(Ee.lat)} \xB7 ${z(Ee.lon)} \xB7 ALT ${Fe(em(te,Ee.lat))}`)}if(Pe&&ne.checked<4&&!(w&&w.busy)&&(ne.frames++,ne.acc+=b,ne.frames>=90)){let Ee=ne.acc/ne.frames;ne.frames=0,ne.acc=0,ne.checked++,Ee>1/42&&A.on&&A.scale>.3?(A.scale=.25,D()):Ee>1/42&&A.on?A.on=!1:Ee>1/42&&t>.8?(t=Math.max(.75,t-.35),lt()):Ee>1/28&&L.enabled&&(L.enabled=!1)}}Gl(.92);try{e.compile(n,s)}catch{}requestAnimationFrame(ie),setTimeout(()=>{Gl(1),Pe=!0,Wl(),Ld[0].classList.add("is-in"),Mi.startReveals()},300)}Z1()?Q1().catch(i=>{console.error(i),Id.classList.add("no-webgl"),Wl(),Mi.startReveals(),Dg()}):(Id.classList.add("no-webgl"),Wl(),Mi.startReveals(),Dg());})();
