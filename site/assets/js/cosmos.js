(()=>{var kg=Object.defineProperty;var Vg=(i,e,t)=>e in i?kg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Jl=(i,e,t)=>Vg(i,typeof e!="symbol"?e+"":e,t);var il="169";var Hg=0,Vd=1,Gg=2;var op=1,Wg=2,_n=3,ln=0,$t=1,si=2,an=0,Zs=1,er=2,Hd=3,Gd=4,Qh=5,gs=100,qg=101,Xg=102,Yg=103,jg=104,eu=200,tu=201,$g=202,Zg=203,Nc=204,Oc=205,Kg=206,Jg=207,Qg=208,e0=209,t0=210,i0=211,n0=212,s0=213,r0=214,Fc=0,Bc=1,zc=2,tr=3,kc=4,Vc=5,go=6,Hc=7,lp=0,a0=1,o0=2,on=0,iu=1,nu=2,su=3,vr=4,l0=5,ru=6,au=7,Wd="attached",c0="detached",cp=300,ir=301,nr=302,Gc=303,Wc=304,nl=306,cn=1e3,Qi=1001,Yr=1002,Jt=1003,ou=1004;var Ys=1005;var ri=1006,Vr=1007;var Fi=1008;var hn=1009,hp=1010,up=1011,jr=1012,lu=1013,ys=1014,Bi=1015,pi=1016,cu=1017,hu=1018,sr=1020,dp=35902,fp=1021,pp=1022,zi=1023,mp=1024,gp=1025,Ks=1026,rr=1027,sl=1028,uu=1029,du=1030,fu=1031;var rl=1033,co=33776,ho=33777,uo=33778,fo=33779,qc=35840,Xc=35841,Yc=35842,jc=35843,$c=36196,Zc=37492,Kc=37496,Jc=37808,Qc=37809,eh=37810,th=37811,ih=37812,nh=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,po=36492,dh=36494,fh=36495,vp=36283,ph=36284,mh=36285,gh=36286;var ar=2300,or=2301,Ql=2302,qd=2400,Xd=2401,Yd=2402,h0=2500;var yp=0,al=1,aa=2,u0=3200,d0=3201;var xp=0,f0=1,rn="",It="srgb",Ht="srgb-linear",pu="display-p3",ol="display-p3-linear",vo="linear",Ct="srgb",yo="rec709",xo="p3";var Ls=7680;var jd=519,p0=512,m0=513,g0=514,_p=515,v0=516,y0=517,x0=518,_0=519,vh=35044;var $d="300 es",Mn=2e3,_o=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,Hr=Math.PI/180,lr=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function mu(i,e){return(i%e+e)%e}function M0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function b0(i,e,t){return i!==e?(t-i)/(e-i):0}function Gr(i,e,t){return(1-t)*i+t*e}function S0(i,e,t,n){return Gr(i,e,1-Math.exp(-t*n))}function w0(i,e=1){return e-Math.abs(mu(i,e*2)-e)}function T0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function E0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function C0(i,e){return i+Math.random()*(e-i)}function P0(i){return i*(.5-Math.random())}function R0(i){i!==void 0&&(Zd=i);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(i){return i*Hr}function L0(i){return i*lr}function D0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function N0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cn={DEG2RAD:Hr,RAD2DEG:lr,generateUUID:ki,clamp:Wt,euclideanModulo:mu,mapLinear:M0,inverseLerp:b0,lerp:Gr,damp:S0,pingpong:w0,smoothstep:T0,smootherstep:A0,randInt:E0,randFloat:C0,randFloatSpread:P0,seededRandom:R0,degToRad:I0,radToDeg:L0,isPowerOfTwo:D0,ceilPowerOfTwo:U0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:O0,normalize:At,denormalize:Ji},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=s[0],p=s[3],g=s[6],_=s[1],v=s[4],M=s[7],I=s[2],S=s[5],A=s[8];return r[0]=a*y+o*_+l*I,r[3]=a*p+o*v+l*S,r[6]=a*g+o*M+l*A,r[1]=c*y+h*_+u*I,r[4]=c*p+h*v+u*S,r[7]=c*g+h*M+u*A,r[2]=d*y+f*_+m*I,r[5]=d*p+f*v+m*S,r[8]=d*g+f*M+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new dt;function Mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F0(){let i=$r("canvas");return i.style.display="block",i}var Kd={};function mo(i){i in Kd||(Kd[i]=!0,console.warn(i))}function B0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function z0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function k0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Jd=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qd=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[Ht]:{transfer:vo,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[It]:{transfer:Ct,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ol]:{transfer:vo,primaries:xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Qd),fromReference:i=>i.applyMatrix3(Jd)},[pu]:{transfer:Ct,primaries:xo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qd),fromReference:i=>i.applyMatrix3(Jd).convertLinearToSRGB()}},V0=new Set([Ht,ol]),vt={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!V0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ir[e].toReference,s=Ir[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ir[i].primaries},getTransfer:function(i){return i===rn?vo:Ir[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ir[e].luminanceCoefficients)}};function Js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,yh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=$r("canvas")),Ds.width=e.width,Ds.height=e.height;let n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Js(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},H0=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ic(s[a].image)):r.push(ic(s[a]))}else r=ic(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,Zt=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qi,s=Qi,r=ri,a=Fi,o=zi,l=hn,c=i.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ki(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=cp;Zt.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,I=(g+1)/2,S=(h+d)/4,A=(u+y)/4,R=(m+p)/4;return v>M&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=A/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=R/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mo=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _h=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var di=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let p=1-o,g=l*d+c*f+h*m+u*y,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let I=Math.sqrt(v),S=Math.atan2(I,g*_);p=Math.sin(p*S)/I,o=Math.sin(o*S)/I}let M=o*_;if(l=l*p+d*M,c=c*p+f*M,h=h*p+m*M,u=u*p+y*M,p===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new P,ef=new di,ai=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$i):$i.fromBufferAttribute(r,a),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Ua.subVectors(this.max,Lr),Us.subVectors(e.a,Lr),Ns.subVectors(e.b,Lr),Os.subVectors(e.c,Lr),On.subVectors(Ns,Us),Fn.subVectors(Os,Ns),cs.subVectors(Us,Os);let t=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-cs.z,cs.y,On.z,0,-On.x,Fn.z,0,-Fn.x,cs.z,0,-cs.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-cs.y,cs.x,0];return!sc(t,Us,Ns,Os,Ua)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Us,Ns,Os,Ua))?!1:(Na.crossVectors(On,Fn),t=[Na.x,Na.y,Na.z],sc(t,Us,Ns,Os,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pn=[new P,new P,new P,new P,new P,new P,new P,new P],$i=new P,Da=new ai,Us=new P,Ns=new P,Os=new P,On=new P,Fn=new P,cs=new P,Lr=new P,Ua=new P,Na=new P,hs=new P;function sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hs.fromArray(i,r);let o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var W0=new ai,Dr=new P,rc=new P,Qt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(rc)),this.expandByPoint(Dr.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new P,ac=new P,Oa=new P,Bn=new P,oc=new P,Fa=new P,lc=new P,Ci=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Bn.dot(this.direction),l=-Bn.dot(Oa),c=Bn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(Oa,d),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),Fa.subVectors(n,e),lc.crossVectors(oc,Fa);let a=this.direction.dot(lc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);let l=o*this.direction.dot(Fa.crossVectors(Bn,Fa));if(l<0)return null;let c=o*this.direction.dot(oc.cross(Bn));if(c<0||l+c>a)return null;let h=-o*Bn.dot(lc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,y,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d+y*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,y=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q0,e,X0)}lookAt(e,t,n){let s=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),zn.crossVectors(n,Ai),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),zn.crossVectors(n,Ai)),zn.normalize(),Ba.crossVectors(Ai,zn),s[0]=zn.x,s[4]=Ba.x,s[8]=Ai.x,s[1]=zn.y,s[5]=Ba.y,s[9]=Ai.y,s[2]=zn.z,s[6]=Ba.z,s[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],p=n[10],g=n[14],_=n[3],v=n[7],M=n[11],I=n[15],S=s[0],A=s[4],R=s[8],G=s[12],x=s[1],T=s[5],W=s[9],N=s[13],D=s[2],k=s[6],B=s[10],J=s[14],q=s[3],se=s[7],ie=s[11],re=s[15];return r[0]=a*S+o*x+l*D+c*q,r[4]=a*A+o*T+l*k+c*se,r[8]=a*R+o*W+l*B+c*ie,r[12]=a*G+o*N+l*J+c*re,r[1]=h*S+u*x+d*D+f*q,r[5]=h*A+u*T+d*k+f*se,r[9]=h*R+u*W+d*B+f*ie,r[13]=h*G+u*N+d*J+f*re,r[2]=m*S+y*x+p*D+g*q,r[6]=m*A+y*T+p*k+g*se,r[10]=m*R+y*W+p*B+g*ie,r[14]=m*G+y*N+p*J+g*re,r[3]=_*S+v*x+M*D+I*q,r[7]=_*A+v*T+M*k+I*se,r[11]=_*R+v*W+M*B+I*ie,r[15]=_*G+v*N+M*J+I*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],y=e[7],p=e[11],g=e[15];return m*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],y=e[13],p=e[14],g=e[15],_=u*p*c-y*d*c+y*l*f-o*p*f-u*l*g+o*d*g,v=m*d*c-h*p*c-m*l*f+a*p*f+h*l*g-a*d*g,M=h*y*c-m*u*c+m*o*f-a*y*f-h*o*g+a*u*g,I=m*u*l-h*y*l-m*o*d+a*y*d+h*o*p-a*u*p,S=t*_+n*v+s*M+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=_*A,e[1]=(y*d*r-u*p*r-y*s*f+n*p*f+u*s*g-n*d*g)*A,e[2]=(o*p*r-y*l*r+y*s*c-n*p*c-o*s*g+n*l*g)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=v*A,e[5]=(h*p*r-m*d*r+m*s*f-t*p*f-h*s*g+t*d*g)*A,e[6]=(m*l*r-a*p*r-m*s*c+t*p*c+a*s*g-t*l*g)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=M*A,e[9]=(m*u*r-h*y*r-m*n*f+t*y*f+h*n*g-t*u*g)*A,e[10]=(a*y*r-m*o*r+m*n*c-t*y*c-a*n*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=I*A,e[13]=(h*y*s-m*u*s+m*n*d-t*y*d-h*n*p+t*u*p)*A,e[14]=(m*o*s-a*y*s-m*n*l+t*y*l+a*n*p-t*o*p)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,y=a*h,p=a*u,g=o*u,_=l*c,v=l*h,M=l*u,I=n.x,S=n.y,A=n.z;return s[0]=(1-(y+g))*I,s[1]=(f+M)*I,s[2]=(m-v)*I,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(d+g))*S,s[6]=(p+_)*S,s[7]=0,s[8]=(m+v)*A,s[9]=(p-_)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),a=Fs.set(s[4],s[5],s[6]).length(),o=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zi.copy(this);let c=1/r,h=1/a,u=1/o;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,t.setFromRotationMatrix(Zi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(o===Mn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===_o)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,m,y;if(o===Mn)m=(a+r)*u,y=-2*u;else if(o===_o)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Fs=new P,Zi=new He,q0=new P(0,0,0),X0=new P(1,1,1),zn=new P,Ba=new P,Ai=new P,tf=new He,nf=new di,Vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y0=0,sf=new P,Bs=new di,gn=new He,za=new P,Ur=new P,j0=new P,$0=new di,rf=new P(1,0,0),af=new P(0,1,0),of=new P(0,0,1),lf={type:"added"},Z0={type:"removed"},zs={type:"childadded",child:null},cc={type:"childremoved",child:null},Pt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Vi,n=new di,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new dt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ur,za,this.up):gn.lookAt(za,Ur,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(gn),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z0),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,j0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new P(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=new P,vn=new P,hc=new P,yn=new P,ks=new P,Vs=new P,cf=new P,uc=new P,dc=new P,fc=new P,pc=new xt,mc=new xt,gc=new xt,Hn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ki.subVectors(e,t),s.cross(Ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ki.subVectors(s,t),vn.subVectors(n,t),hc.subVectors(e,t);let a=Ki.dot(Ki),o=Ki.dot(vn),l=Ki.dot(hc),c=vn.dot(vn),h=vn.dot(hc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return Ki.subVectors(n,t),vn.subVectors(e,t),Ki.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ki.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ks.subVectors(s,n),Vs.subVectors(r,n),uc.subVectors(e,n);let l=ks.dot(uc),c=Vs.dot(uc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,s);let h=ks.dot(dc),u=Vs.dot(dc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ks,a);fc.subVectors(e,r);let f=ks.dot(fc),m=Vs.dot(fc);if(m>=0&&f<=m)return t.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Vs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return cf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(cf,o);let g=1/(p+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(ks,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},ka={h:0,s:0,l:0};function vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=mu(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vc(a,r,e+1/3),this.g=vc(a,r,e),this.b=vc(a,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return vt.fromWorkingColorSpace(ni.copy(this),e),Math.round(Wt(ni.r*255,0,255))*65536+Math.round(Wt(ni.g*255,0,255))*256+Math.round(Wt(ni.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(ni.copy(this),t);let n=ni.r,s=ni.g,r=ni.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=It){vt.fromWorkingColorSpace(ni.copy(this),e);let t=ni.r,n=ni.g,s=ni.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(ka);let n=Gr(kn.h,ka.h,t),s=Gr(kn.s,ka.s,t),r=Gr(kn.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new _e;_e.NAMES=bp;var K0=0,Pi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Zs,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},oi=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new P,Va=new he,ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}};var So=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wo=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},J0=0,Oi=new He,yc=new Pt,Hs=new P,Ei=new ai,Nr=new ai,jt=new P,Mt=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?wo:So)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Ei.min,Nr.min),Ei.expandByPoint(jt),jt.addVectors(Ei.max,Nr.max),Ei.expandByPoint(jt)):(Ei.expandByPoint(Nr.min),Ei.expandByPoint(Nr.max))}Ei.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),jt.add(Hs)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,d=new he,f=new he,m=new he,y=new P,p=new P;function g(R,G,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,G),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,G),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),o[R].add(y),o[G].add(y),o[x].add(y),l[R].add(p),l[G].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,G=_.length;R<G;++R){let x=_[R],T=x.start,W=x.count;for(let N=T,D=T+W;N<D;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new P,M=new P,I=new P,S=new P;function A(R){I.fromBufferAttribute(s,R),S.copy(I);let G=o[R];v.copy(G),v.sub(I.multiplyScalar(I.dot(G))).normalize(),M.crossVectors(S,G);let T=M.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,T)}for(let R=0,G=_.length;R<G;++R){let x=_[R],T=x.start,W=x.count;for(let N=T,D=T+W;N<D;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hf=new He,us=new Ci,Ha=new Qt,uf=new P,Ga=new P,Wa=new P,qa=new P,xc=new P,Xa=new P,df=new P,Ya=new P,ft=class extends Pt{constructor(e=new Mt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(xc.fromBufferAttribute(u,e),a?Xa.addScaledVector(xc,h):Xa.addScaledVector(xc.sub(t),h))}t.add(Xa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Ha.containsPoint(us.origin)===!1&&(us.intersectSphere(Ha,uf)===null||us.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),us.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,I=v;M<I;M+=3){let S=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);s=ja(this,g,e,n,c,h,u,S,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let _=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);s=ja(this,a,e,n,c,h,u,_,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let p=d[m],g=a[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,I=v;M<I;M+=3){let S=M,A=M+1,R=M+2;s=ja(this,g,e,n,c,h,u,S,A,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=m,g=y;p<g;p+=3){let _=p,v=p+1,M=p+2;s=ja(this,a,e,n,c,h,u,_,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Q0(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ln,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ga),i.getVertexPosition(l,Wa),i.getVertexPosition(c,qa);let h=Q0(i,e,t,n,Ga,Wa,qa,df);if(h){let u=new P;Hn.getBarycoord(df,Ga,Wa,qa,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Hn.getNormal(Ga,Wa,qa,d.normal),h.face=d,h.barycoord=u}return h}var Ri=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function m(y,p,g,_,v,M,I,S,A,R,G){let x=M/A,T=I/R,W=M/2,N=I/2,D=S/2,k=A+1,B=R+1,J=0,q=0,se=new P;for(let ie=0;ie<B;ie++){let re=ie*T-N;for(let Ve=0;Ve<k;Ve++){let We=Ve*x-W;se[y]=We*_,se[p]=re*v,se[g]=D,c.push(se.x,se.y,se.z),se[y]=0,se[p]=0,se[g]=S>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ve/A),u.push(1-ie/R),J+=1}}for(let ie=0;ie<R;ie++)for(let re=0;re<A;re++){let Ve=d+re+k*ie,We=d+re+k*(ie+1),oe=d+(re+1)+k*(ie+1),fe=d+(re+1)+k*ie;l.push(Ve,We,fe),l.push(We,oe,fe),q+=6}o.addGroup(f,q,G),f+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ui(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function ev(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var Jn={clone:cr,merge:ui},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},To=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new P,ff=new he,pf=new he,Lt=class extends To{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,ff,pf),t.subVectors(pf,ff)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,Mh=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let l=new Lt(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Lt(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ao=class extends Zt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bh=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:an});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=ri),new Mh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_c=new P,nv=new P,sv=new dt,yi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_c.subVectors(n,t).cross(nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sv.getNormalMatrix(e),s=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Qt,$a=new P,qn=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],y=s[10],p=s[11],g=s[12],_=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-f,M-g).normalize(),n[1].setComponents(l+r,d+c,p+f,M+g).normalize(),n[2].setComponents(l+a,d+h,p+m,M+_).normalize(),n[3].setComponents(l-a,d-h,p-m,M-_).normalize(),n[4].setComponents(l-o,d-u,p-y,M-v).normalize(),t===Mn)n[5].setComponents(l+o,d+u,p+y,M+v).normalize();else if(t===_o)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rv(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var li=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],y=[],p=[];for(let g=0;g<h;g++){let _=g*d-a;for(let v=0;v<c;v++){let M=v*u-r;m.push(M,-_,0),y.push(0,0,1),p.push(v/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let v=_+c*g,M=_+c*(g+1),I=_+1+c*(g+1),S=_+1+c*g;f.push(v,M,S),f.push(M,I,S)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ov=`#ifdef USE_ALPHAHASH
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
#endif`,lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
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
#endif`,mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iv=`vec3 transformedNormal = objectNormal;
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
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fv=`
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
}`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,sy=`struct PhysicalMaterial {
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
}`,ry=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,Ex=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Px=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Ix=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Fx=`uniform float rotation;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:av,alphahash_pars_fragment:ov,alphamap_fragment:lv,alphamap_pars_fragment:cv,alphatest_fragment:hv,alphatest_pars_fragment:uv,aomap_fragment:dv,aomap_pars_fragment:fv,batching_pars_vertex:pv,batching_vertex:mv,begin_vertex:gv,beginnormal_vertex:vv,bsdfs:yv,iridescence_fragment:xv,bumpmap_pars_fragment:_v,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:wv,color_fragment:Tv,color_pars_fragment:Av,color_pars_vertex:Ev,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Dv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Nv,colorspace_fragment:Ov,colorspace_pars_fragment:Fv,envmap_fragment:Bv,envmap_common_pars_fragment:zv,envmap_pars_fragment:kv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Jv,envmap_vertex:Hv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:qv,fog_pars_fragment:Xv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:jv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Zv,lights_pars_begin:Kv,lights_toon_fragment:Qv,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:iy,lights_physical_fragment:ny,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:ay,lights_fragment_end:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:uy,map_fragment:dy,map_pars_fragment:fy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:vy,morphinstance_vertex:yy,morphcolor_vertex:xy,morphnormal_vertex:_y,morphtarget_pars_vertex:My,morphtarget_vertex:by,normal_fragment_begin:Sy,normal_fragment_maps:wy,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ey,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Ly,opaque_fragment:Dy,packing:Uy,premultiplied_alpha_fragment:Ny,project_vertex:Oy,dithering_fragment:Fy,dithering_pars_fragment:By,roughnessmap_fragment:zy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Hy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:qy,skinning_pars_vertex:Xy,skinning_vertex:Yy,skinnormal_vertex:jy,specularmap_fragment:$y,specularmap_pars_fragment:Zy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Jy,transmission_fragment:Qy,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:ix,uv_vertex:nx,worldpos_vertex:sx,background_vert:rx,background_frag:ax,backgroundCube_vert:ox,backgroundCube_frag:lx,cube_vert:cx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distanceRGBA_vert:fx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:xx,meshbasic_frag:_x,meshlambert_vert:Mx,meshlambert_frag:bx,meshmatcap_vert:Sx,meshmatcap_frag:wx,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Ex,meshphong_frag:Cx,meshphysical_vert:Px,meshphysical_frag:Rx,meshtoon_vert:Ix,meshtoon_frag:Lx,points_vert:Dx,points_frag:Ux,shadow_vert:Nx,shadow_frag:Ox,sprite_vert:Fx,sprite_frag:Bx},Oe={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},sn={basic:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new _e(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ui([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ui([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new _e(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ui([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ui([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ui([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ui([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:ui([Oe.common,Oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:ui([Oe.lights,Oe.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};sn.physical={uniforms:ui([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Za={r:0,b:0,g:0},fs=new Vi,zx=new He;function kx(i,e,t,n,s,r,a){let o=new _e(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1,M=m(_);M===null?g(o,l):M&&M.isColor&&(g(M,1),v=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,v){let M=m(v);M&&(M.isCubeTexture||M.mapping===nl)?(h===void 0&&(h=new ft(new Ri(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:cr(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(v.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(fs)),h.material.toneMapped=vt.getTransfer(M.colorSpace)!==Ct,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ft(new li(2,2),new St({name:"BackgroundMaterial",uniforms:cr(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=vt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,v){_.getRGB(Za,Sp(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(o,l)},render:y,addToRenderList:p}}function Vx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,T,W,N,D){let k=!1,B=u(N,W,T);r!==B&&(r=B,c(r.object)),k=f(x,N,W,D),k&&m(x,N,W,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(x,T,W,N),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,T,W){let N=W.wireframe===!0,D=n[x.id];D===void 0&&(D={},n[x.id]=D);let k=D[T.id];k===void 0&&(k={},D[T.id]=k);let B=k[N];return B===void 0&&(B=d(l()),k[N]=B),B}function d(x){let T=[],W=[],N=[];for(let D=0;D<t;D++)T[D]=0,W[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,T,W,N){let D=r.attributes,k=T.attributes,B=0,J=W.getAttributes();for(let q in J)if(J[q].location>=0){let ie=D[q],re=k[q];if(re===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function m(x,T,W,N){let D={},k=T.attributes,B=0,J=W.getAttributes();for(let q in J)if(J[q].location>=0){let ie=k[q];ie===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));let re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),D[q]=re,B++}r.attributes=D,r.attributesNum=B,r.index=N}function y(){let x=r.newAttributes;for(let T=0,W=x.length;T<W;T++)x[T]=0}function p(x){g(x,0)}function g(x,T){let W=r.newAttributes,N=r.enabledAttributes,D=r.attributeDivisors;W[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),D[x]!==T&&(i.vertexAttribDivisor(x,T),D[x]=T)}function _(){let x=r.newAttributes,T=r.enabledAttributes;for(let W=0,N=T.length;W<N;W++)T[W]!==x[W]&&(i.disableVertexAttribArray(W),T[W]=0)}function v(x,T,W,N,D,k,B){B===!0?i.vertexAttribIPointer(x,T,W,D,k):i.vertexAttribPointer(x,T,W,N,D,k)}function M(x,T,W,N){y();let D=N.attributes,k=W.getAttributes(),B=T.defaultAttributeValues;for(let J in k){let q=k[J];if(q.location>=0){let se=D[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let ie=se.normalized,re=se.itemSize,Ve=e.get(se);if(Ve===void 0)continue;let We=Ve.buffer,oe=Ve.type,fe=Ve.bytesPerElement,ze=oe===i.INT||oe===i.UNSIGNED_INT||se.gpuType===lu;if(se.isInterleavedBufferAttribute){let Pe=se.data,je=Pe.stride,$e=se.offset;if(Pe.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)g(q.location+it,Pe.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let it=0;it<q.locationSize;it++)p(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,We);for(let it=0;it<q.locationSize;it++)v(q.location+it,re/q.locationSize,oe,ie,je*fe,($e+re/q.locationSize*it)*fe,ze)}else{if(se.isInstancedBufferAttribute){for(let Pe=0;Pe<q.locationSize;Pe++)g(q.location+Pe,se.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<q.locationSize;Pe++)p(q.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Pe=0;Pe<q.locationSize;Pe++)v(q.location+Pe,re/q.locationSize,oe,ie,re*fe,re/q.locationSize*Pe*fe,ze)}}else if(B!==void 0){let ie=B[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(q.location,ie);break;case 3:i.vertexAttrib3fv(q.location,ie);break;case 4:i.vertexAttrib4fv(q.location,ie);break;default:i.vertexAttrib1fv(q.location,ie)}}}}_()}function I(){R();for(let x in n){let T=n[x];for(let W in T){let N=T[W];for(let D in N)h(N[D].object),delete N[D];delete T[W]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;let T=n[x.id];for(let W in T){let N=T[W];for(let D in N)h(N[D].object),delete N[D];delete T[W]}delete n[x.id]}function A(x){for(let T in n){let W=n[T];if(W[x.id]===void 0)continue;let N=W[x.id];for(let D in N)h(N[D].object),delete N[D];delete W[x.id]}}function R(){G(),a=!0,r!==s&&(r=s,c(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function Hx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y];for(let y=0;y<d.length;y++)t.update(m,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==zi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bi&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:I,maxSamples:S}}function Wx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yi,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,v=_*4,M=g.clippingState||null;l.value=M,M=h(m,d,v,f);for(let I=0;I!==v;++I)M[I]=t[I];g.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,m!==!0||p===null){let g=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=f;v!==y;++v,M+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function qx(i){let e=new WeakMap;function t(a,o){return o===Gc?a.mapping=ir:o===Wc&&(a.mapping=nr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gc||o===Wc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bn=class extends To{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,mf=[.125,.215,.35,.446,.526,.582],vs=20,Mc=new bn,gf=new _e,bc=null,Sc=0,wc=0,Tc=!1,ms=(1+Math.sqrt(5))/2,qs=1/ms,vf=[new P(-ms,qs,0),new P(ms,qs,0),new P(-qs,0,ms),new P(qs,0,ms),new P(0,ms,-qs),new P(0,ms,qs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:pi,format:zi,colorSpace:Ht,depthBuffer:!1},s=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xx(r)),this._blurMaterial=Yx(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){let o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gf),h.toneMapping=on,h.autoClear=!1;let f=new oi({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new ft(new Ri,f),y=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(gf),y=!0);for(let g=0;g<6;g++){let _=g%3;_===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):_===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;Ka(s,_*v,g>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ir||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vf[(s-r-1)%vf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),y=r/m,p=isFinite(r)?1+Math.floor(h*y):vs;p>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vs}`);let g=[],_=0;for(let A=0;A<vs;++A){let R=A/y,G=Math.exp(-R*R/2);g.push(G),A===0?_+=G:A<p&&(_+=2*G)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let M=this._sizeLods[s],I=3*M*(s>v-js?s-v+js:0),S=4*(this._cubeSize-M);Ka(t,I,S,3*M,2*M),l.setRenderTarget(t),l.render(u,Mc)}};function Xx(i){let e=[],t=[],n=[],s=i,r=i-js+1+mf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-js?l=mf[a-i+js-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,y=3,p=2,g=1,_=new Float32Array(y*m*f),v=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,R=S>2?0:-1,G=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(G,y*m*S),v.set(d,p*m*S);let x=[S,S,S,S,S,S];M.set(x,g*m*S)}let I=new Mt;I.setAttribute("position",new ct(_,y)),I.setAttribute("uv",new ct(v,p)),I.setAttribute("faceIndex",new ct(M,g)),e.push(I),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yf(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yx(i,e,t){let n=new Float32Array(vs),s=new P(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function xf(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function _f(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function jx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Gc||l===Wc,h=l===ir||l===nr;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Eo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Eo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let p=0,g=y.length;p<g;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let p=0,g=y.length;p<g;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let v=0,M=_.length;v<M;v+=3){let I=_[v+0],S=_[v+1],A=_[v+2];d.push(I,S,S,A,A,I)}}else if(m!==void 0){let _=m.array;y=m.version;for(let v=0,M=_.length/3-1;v<M;v+=3){let I=v+0,S=v+1,A=v+2;d.push(I,S,S,A,A,I)}}else return;let p=new(Mp(d)?wo:So)(d,1);p.version=y;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,y){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],y[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_];for(let _=0;_<y.length;_++)t.update(g,n,y[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qx(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let G=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",G)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let M=o.attributes.position.count*v,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*I*4*u),A=new Mo(S,M,I,u);A.type=Bi,A.needsUpdate=!0;let R=v*4;for(let x=0;x<u;x++){let T=p[x],W=g[x],N=_[x],D=M*I*4*x;for(let k=0;k<T.count;k++){let B=k*R;f===!0&&(s.fromBufferAttribute(T,k),S[D+B+0]=s.x,S[D+B+1]=s.y,S[D+B+2]=s.z,S[D+B+3]=0),m===!0&&(s.fromBufferAttribute(W,k),S[D+B+4]=s.x,S[D+B+5]=s.y,S[D+B+6]=s.z,S[D+B+7]=0),y===!0&&(s.fromBufferAttribute(N,k),S[D+B+8]=s.x,S[D+B+9]=s.y,S[D+B+10]=s.z,S[D+B+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new he(M,I)},n.set(o,d),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Co=class extends Zt{constructor(e,t,n,s,r,a,o,l,c,h=Ks){if(h!==Ks&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ks&&(n=ys),n===void 0&&h===rr&&(n=sr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tp=new Zt,Mf=new Co(1,1),Ap=new Mo,Ep=new _h,Cp=new Ao,bf=[],Sf=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ll(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Xt(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),Xt(t,n)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),Xt(t,n)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=_p,r=Mf):r=Tp,t.setTexture2D(e||r,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ep,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cp,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ap,s)}function __(i){switch(i){case 5126:return t_;case 35664:return i_;case 35665:return n_;case 35666:return s_;case 35674:return r_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return x_}}function M_(i,e){i.uniform1fv(this.addr,e)}function b_(i,e){let t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function S_(i,e){let t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function w_(i,e){let t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A_(i,e){let t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E_(i,e){let t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function P_(i,e){i.uniform2iv(this.addr,e)}function R_(i,e){i.uniform3iv(this.addr,e)}function I_(i,e){i.uniform4iv(this.addr,e)}function L_(i,e){i.uniform1uiv(this.addr,e)}function D_(i,e){i.uniform2uiv(this.addr,e)}function U_(i,e){i.uniform3uiv(this.addr,e)}function N_(i,e){i.uniform4uiv(this.addr,e)}function O_(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tp,r[a])}function F_(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ep,r[a])}function B_(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cp,r[a])}function z_(i,e,t){let n=this.cache,s=e.length,r=ll(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ap,r[a])}function k_(i){switch(i){case 5126:return M_;case 35664:return b_;case 35665:return S_;case 35666:return w_;case 35674:return T_;case 35675:return A_;case 35676:return E_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return R_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return D_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Ef(i,e){i.seq.push(e),i.map[e.id]=e}function V_(i,e,t){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),a=Ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ef(t,c===void 0?new Sh(o,i,e):new wh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),Ef(t,u)),t=u}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);V_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var H_=37297,G_=0;function W_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function q_(i){let e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i),n;switch(e===t?n="":e===xo&&t===yo?n="LinearDisplayP3ToLinearSRGB":e===yo&&t===xo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ht:case ol:return[n,"LinearTransferOETF"];case It:case pu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+W_(i.getShaderSource(e),a)}else return s}function X_(i,e){let t=q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Y_(i,e){let t;switch(e){case iu:t="Linear";break;case nu:t="Reinhard";break;case su:t="Cineon";break;case vr:t="ACESFilmic";break;case ru:t="AgX";break;case au:t="Neutral";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new P;function j_(){vt.getLuminanceCoefficients(Ja);let i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Z_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function kr(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(J_,eM)}var Q_=new Map;function eM(i,e){let t=mt[e];if(t===void 0){let n=Q_.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ah(t)}var tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(i){return i.replace(tM,iM)}function iM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Df(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case nr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case a0:e="ENVMAP_BLENDING_MIX";break;case o0:e="ENVMAP_BLENDING_ADD";break}return e}function oM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=nM(t),c=sM(t),h=rM(t),u=aM(t),d=oM(t),f=$_(t),m=Z_(r),y=s.createProgram(),p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),g.length>0&&(g+=`
`)):(p=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),g=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?mt.tonemapping_pars_fragment:"",t.toneMapping!==on?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),j_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ah(a),a=Rf(a,t),a=If(a,t),o=Ah(o),o=Rf(o,t),o=If(o,t),a=Lf(a),o=Lf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=_+p+a,M=_+g+o,I=Cf(s,s.VERTEX_SHADER,v),S=Cf(s,s.FRAGMENT_SHADER,M);s.attachShader(y,I),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(T){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(y).trim(),N=s.getShaderInfoLog(I).trim(),D=s.getShaderInfoLog(S).trim(),k=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,S);else{let J=Pf(s,I,"vertex"),q=Pf(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+J+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(N===""||D==="")&&(B=!1);B&&(T.diagnostics={runnable:k,programLog:W,vertexShader:{log:N,prefix:p},fragmentShader:{log:D,prefix:g}})}s.deleteShader(I),s.deleteShader(S),R=new Qs(s,y),G=K_(s,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let G;this.getAttributes=function(){return G===void 0&&A(this),G};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,H_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=S,this}var cM=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}},Ch=class{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}};function hM(i,e,t,n,s,r,a){let o=new bo,l=new Eh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,T,W,N,D){let k=N.fog,B=D.geometry,J=x.isMeshStandardMaterial?N.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),se=q&&q.mapping===nl?q.image.height:null,ie=y[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ve=re!==void 0?re.length:0,We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let oe,fe,ze,Pe;if(ie){let ce=sn[ie];oe=ce.vertexShader,fe=ce.fragmentShader}else oe=x.vertexShader,fe=x.fragmentShader,l.update(x),ze=l.getVertexShaderID(x),Pe=l.getFragmentShaderID(x);let je=i.getRenderTarget(),$e=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,lt=!!x.map,me=!!x.matcap,L=!!q,de=!!x.aoMap,Te=!!x.lightMap,j=!!x.bumpMap,Se=!!x.normalMap,De=!!x.displacementMap,Ce=!!x.emissiveMap,E=!!x.metalnessMap,w=!!x.roughnessMap,Z=x.anisotropy>0,ae=x.clearcoat>0,ge=x.dispersion>0,le=x.iridescence>0,Re=x.sheen>0,we=x.transmission>0,Ne=Z&&!!x.anisotropyMap,Ke=ae&&!!x.clearcoatMap,ye=ae&&!!x.clearcoatNormalMap,Fe=ae&&!!x.clearcoatRoughnessMap,Ze=le&&!!x.iridescenceMap,Je=le&&!!x.iridescenceThicknessMap,Ue=Re&&!!x.sheenColorMap,rt=Re&&!!x.sheenRoughnessMap,st=!!x.specularMap,bt=!!x.specularColorMap,z=!!x.specularIntensityMap,Ie=we&&!!x.transmissionMap,ne=we&&!!x.thicknessMap,C=!!x.gradientMap,U=!!x.alphaMap,F=x.alphaTest>0,H=!!x.alphaHash,$=!!x.extensions,Q=on;x.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(Q=i.toneMapping);let ee={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:fe,defines:x.defines,customVertexShaderID:ze,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:$e,instancingColor:$e&&D.instanceColor!==null,instancingMorph:$e&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Ht,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:me,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:se,aoMap:de,lightMap:Te,bumpMap:j,normalMap:Se,displacementMap:f&&De,emissiveMap:Ce,normalMapObjectSpace:Se&&x.normalMapType===f0,normalMapTangentSpace:Se&&x.normalMapType===xp,metalnessMap:E,roughnessMap:w,anisotropy:Z,anisotropyMap:Ne,clearcoat:ae,clearcoatMap:Ke,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,dispersion:ge,iridescence:le,iridescenceMap:Ze,iridescenceThicknessMap:Je,sheen:Re,sheenColorMap:Ue,sheenRoughnessMap:rt,specularMap:st,specularColorMap:bt,specularIntensityMap:z,transmission:we,transmissionMap:Ie,thicknessMap:ne,gradientMap:C,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:F,alphaHash:H,combine:x.combine,mapUv:lt&&p(x.map.channel),aoMapUv:de&&p(x.aoMap.channel),lightMapUv:Te&&p(x.lightMap.channel),bumpMapUv:j&&p(x.bumpMap.channel),normalMapUv:Se&&p(x.normalMap.channel),displacementMapUv:De&&p(x.displacementMap.channel),emissiveMapUv:Ce&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:w&&p(x.roughnessMap.channel),anisotropyMapUv:Ne&&p(x.anisotropyMap.channel),clearcoatMapUv:Ke&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:rt&&p(x.sheenRoughnessMap.channel),specularMapUv:st&&p(x.specularMap.channel),specularColorMapUv:bt&&p(x.specularColorMap.channel),specularIntensityMapUv:z&&p(x.specularIntensityMap.channel),transmissionMapUv:Ie&&p(x.transmissionMap.channel),thicknessMapUv:ne&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Se||Z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(lt||U),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&vt.getTransfer(x.map.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&x.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let W in x.defines)T.push(W),T.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(v(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),x.push(o.mask)}function I(x){let T=y[x.type],W;if(T){let N=sn[T];W=Jn.clone(N.uniforms)}else W=x.uniforms;return W}function S(x,T){let W;for(let N=0,D=h.length;N<D;N++){let k=h[N];if(k.cacheKey===T){W=k,++W.usedTimes;break}}return W===void 0&&(W=new lM(i,T,x,r),h.push(W)),W}function A(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function G(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:I,acquireProgram:S,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:G}}function uM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,y,p){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:p},i[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=y,g.group=p),e++,g}function o(u,d,f,m,y,p){let g=a(u,d,f,m,y,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(u,d,f,m,y,p){let g=a(u,d,f,m,y,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||dM),n.length>1&&n.sort(d||Uf),s.length>1&&s.sort(d||Uf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function fM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Nf,i.set(n,[a])):s>=r.length?(a=new Nf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new _e};break;case"SpotLight":t={position:new P,direction:new P,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gM=0;function vM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yM(i){let e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new He,a=new He;function o(c){let h=0,u=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,m=0,y=0,p=0,g=0,_=0,v=0,M=0,I=0,S=0,A=0;c.sort(vM);for(let G=0,x=c.length;G<x;G++){let T=c[G],W=T.color,N=T.intensity,D=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=W.r*N,u+=W.g*N,d+=W.b*N;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],N);A++}else if(T.isDirectionalLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,_++}n.directional[f]=B,f++}else if(T.isSpotLight){let B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(W).multiplyScalar(N),B.distance=D,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[y]=B;let J=T.shadow;if(T.map&&(n.spotLightMap[I]=T.map,I++,J.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[y]=J.matrix,T.castShadow){let q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=k,M++}y++}else if(T.isRectAreaLight){let B=e.get(T);B.color.copy(W).multiplyScalar(N),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=B,p++}else if(T.isPointLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let J=T.shadow,q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=T.shadow.matrix,v++}n.point[m]=B,m++}else if(T.isHemisphereLight){let B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(N),B.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[g]=B,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==y||R.rectAreaLength!==p||R.hemiLength!==g||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==M||R.numSpotMaps!==I||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,R.directionalLength=f,R.pointLength=m,R.spotLength=y,R.rectAreaLength=p,R.hemiLength=g,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=M,R.numSpotMaps=I,R.numLightProbes=A,n.version=gM++)}function l(c,h){let u=0,d=0,f=0,m=0,y=0,p=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){let v=c[g];if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function Of(i){let e=new yM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Of(i),e.set(s,[o])):r>=a.length?(o=new Of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ph=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rh=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`;function bM(i,e,t){let n=new qn,s=new he,r=new he,a=new xt,o=new Ph({depthPacking:d0}),l=new Rh,c={},h=t.maxTextureSize,u={[ln]:$t,[$t]:ln,[si]:si},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:_M,fragmentShader:MM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ft(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let g=this.type;this.render=function(S,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let G=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),W=i.state;W.setBlending(an),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let N=g!==_n&&this.type===_n,D=g===_n&&this.type!==_n;for(let k=0,B=S.length;k<B;k++){let J=S[k],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();if(s.multiply(se),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,q.mapSize.y=r.y)),q.map===null||N===!0||D===!0){let re=this.type!==_n?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new Ot(s.x,s.y,re),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ie=q.getViewportCount();for(let re=0;re<ie;re++){let Ve=q.getViewport(re);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),W.viewport(a),q.updateMatrices(J,re),n=q.getFrustum(),M(A,R,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===_n&&_(q,R),q.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(G,x,T)};function _(S,A){let R=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ot(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,R,f,y,null)}function v(S,A,R,G){let x=null,T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)x=T;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=x.uuid,N=A.uuid,D=c[W];D===void 0&&(D={},c[W]=D);let k=D[N];k===void 0&&(k=x.clone(),D[N]=k,A.addEventListener("dispose",I)),x=k}if(x.visible=A.visible,x.wireframe=A.wireframe,G===_n?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let W=i.properties.get(x);W.light=R}return x}function M(S,A,R,G,x){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===_n)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let N=e.update(S),D=S.material;if(Array.isArray(D)){let k=N.groups;for(let B=0,J=k.length;B<J;B++){let q=k[B],se=D[q.materialIndex];if(se&&se.visible){let ie=v(S,se,G,x);S.onBeforeShadow(i,S,A,R,N,ie,q),i.renderBufferDirect(R,null,N,ie,S,q),S.onAfterShadow(i,S,A,R,N,ie,q)}}}else if(D.visible){let k=v(S,D,G,x);S.onBeforeShadow(i,S,A,R,N,k,null),i.renderBufferDirect(R,null,N,k,S,null),S.onAfterShadow(i,S,A,R,N,k,null)}}let W=S.children;for(let N=0,D=W.length;N<D;N++)M(W[N],A,R,G,x)}function I(S){S.target.removeEventListener("dispose",I);for(let R in c){let G=c[R],x=S.target.uuid;x in G&&(G[x].dispose(),delete G[x])}}}var SM={[Fc]:Bc,[zc]:go,[kc]:Hc,[tr]:Vc,[Bc]:Fc,[go]:zc,[Hc]:kc,[Vc]:tr};function wM(i){function e(){let z=!1,Ie=new xt,ne=null,C=new xt(0,0,0,0);return{setMask:function(U){ne!==U&&!z&&(i.colorMask(U,U,U,U),ne=U)},setLocked:function(U){z=U},setClear:function(U,F,H,$,Q){Q===!0&&(U*=$,F*=$,H*=$),Ie.set(U,F,H,$),C.equals(Ie)===!1&&(i.clearColor(U,F,H,$),C.copy(Ie))},reset:function(){z=!1,ne=null,C.set(-1,0,0,0)}}}function t(){let z=!1,Ie=!1,ne=null,C=null,U=null;return{setReversed:function(F){Ie=F},setTest:function(F){F?ze(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(F){ne!==F&&!z&&(i.depthMask(F),ne=F)},setFunc:function(F){if(Ie&&(F=SM[F]),C!==F){switch(F){case Fc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}C=F}},setLocked:function(F){z=F},setClear:function(F){U!==F&&(i.clearDepth(F),U=F)},reset:function(){z=!1,ne=null,C=null,U=null}}}function n(){let z=!1,Ie=null,ne=null,C=null,U=null,F=null,H=null,$=null,Q=null;return{setTest:function(ee){z||(ee?ze(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(ee){Ie!==ee&&!z&&(i.stencilMask(ee),Ie=ee)},setFunc:function(ee,ce,pe){(ne!==ee||C!==ce||U!==pe)&&(i.stencilFunc(ee,ce,pe),ne=ee,C=ce,U=pe)},setOp:function(ee,ce,pe){(F!==ee||H!==ce||$!==pe)&&(i.stencilOp(ee,ce,pe),F=ee,H=ce,$=pe)},setLocked:function(ee){z=ee},setClear:function(ee){Q!==ee&&(i.clearStencil(ee),Q=ee)},reset:function(){z=!1,Ie=null,ne=null,C=null,U=null,F=null,H=null,$=null,Q=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,y=null,p=null,g=null,_=null,v=null,M=null,I=null,S=new _e(0,0,0),A=0,R=!1,G=null,x=null,T=null,W=null,N=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,B=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=B>=2);let q=null,se={},ie=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Ve=new xt().fromArray(ie),We=new xt().fromArray(re);function oe(z,Ie,ne,C){let U=new Uint8Array(4),F=i.createTexture();i.bindTexture(z,F),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let H=0;H<ne;H++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,C,0,i.RGBA,i.UNSIGNED_BYTE,U):i.texImage2D(Ie+H,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,U);return F}let fe={};fe[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ze(i.DEPTH_TEST),r.setFunc(tr),Te(!1),j(Vd),ze(i.CULL_FACE),L(an);function ze(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function Pe(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function je(z,Ie){return h[z]!==Ie?(i.bindFramebuffer(z,Ie),h[z]=Ie,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ie),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function $e(z,Ie){let ne=d,C=!1;if(z){ne=u.get(Ie),ne===void 0&&(ne=[],u.set(Ie,ne));let U=z.textures;if(ne.length!==U.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let F=0,H=U.length;F<H;F++)ne[F]=i.COLOR_ATTACHMENT0+F;ne.length=U.length,C=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,C=!0);C&&i.drawBuffers(ne)}function it(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let lt={[gs]:i.FUNC_ADD,[qg]:i.FUNC_SUBTRACT,[Xg]:i.FUNC_REVERSE_SUBTRACT};lt[Yg]=i.MIN,lt[jg]=i.MAX;let me={[eu]:i.ZERO,[tu]:i.ONE,[$g]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[t0]:i.SRC_ALPHA_SATURATE,[Qg]:i.DST_COLOR,[Kg]:i.DST_ALPHA,[Zg]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[e0]:i.ONE_MINUS_DST_COLOR,[Jg]:i.ONE_MINUS_DST_ALPHA,[i0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[s0]:i.CONSTANT_ALPHA,[r0]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,Ie,ne,C,U,F,H,$,Q,ee){if(z===an){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(ze(i.BLEND),m=!0),z!==Qh){if(z!==y||ee!==R){if((p!==gs||v!==gs)&&(i.blendEquation(i.FUNC_ADD),p=gs,v=gs),ee)switch(z){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,_=null,M=null,I=null,S.set(0,0,0),A=0,y=z,R=ee}return}U=U||Ie,F=F||ne,H=H||C,(Ie!==p||U!==v)&&(i.blendEquationSeparate(lt[Ie],lt[U]),p=Ie,v=U),(ne!==g||C!==_||F!==M||H!==I)&&(i.blendFuncSeparate(me[ne],me[C],me[F],me[H]),g=ne,_=C,M=F,I=H),($.equals(S)===!1||Q!==A)&&(i.blendColor($.r,$.g,$.b,Q),S.copy($),A=Q),y=z,R=!1}function de(z,Ie){z.side===si?Pe(i.CULL_FACE):ze(i.CULL_FACE);let ne=z.side===$t;Ie&&(ne=!ne),Te(ne),z.blending===Zs&&z.transparent===!1?L(an):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let C=z.stencilWrite;a.setTest(C),C&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ze(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(z){G!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),G=z)}function j(z){z!==Hg?(ze(i.CULL_FACE),z!==x&&(z===Vd?i.cullFace(i.BACK):z===Gg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),x=z}function Se(z){z!==T&&(k&&i.lineWidth(z),T=z)}function De(z,Ie,ne){z?(ze(i.POLYGON_OFFSET_FILL),(W!==Ie||N!==ne)&&(i.polygonOffset(Ie,ne),W=Ie,N=ne)):Pe(i.POLYGON_OFFSET_FILL)}function Ce(z){z?ze(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function E(z){z===void 0&&(z=i.TEXTURE0+D-1),q!==z&&(i.activeTexture(z),q=z)}function w(z,Ie,ne){ne===void 0&&(q===null?ne=i.TEXTURE0+D-1:ne=q);let C=se[ne];C===void 0&&(C={type:void 0,texture:void 0},se[ne]=C),(C.type!==z||C.texture!==Ie)&&(q!==ne&&(i.activeTexture(ne),q=ne),i.bindTexture(z,Ie||fe[z]),C.type=z,C.texture=Ie)}function Z(){let z=se[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(z){Ve.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Ue(z){We.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),We.copy(z))}function rt(z,Ie){let ne=l.get(Ie);ne===void 0&&(ne=new WeakMap,l.set(Ie,ne));let C=ne.get(z);C===void 0&&(C=i.getUniformBlockIndex(Ie,z.name),ne.set(z,C))}function st(z,Ie){let C=l.get(Ie).get(z);o.get(Ie)!==C&&(i.uniformBlockBinding(Ie,C,z.__bindingPointIndex),o.set(Ie,C))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,se={},h={},u=new WeakMap,d=[],f=null,m=!1,y=null,p=null,g=null,_=null,v=null,M=null,I=null,S=new _e(0,0,0),A=0,R=!1,G=null,x=null,T=null,W=null,N=null,Ve.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ze,disable:Pe,bindFramebuffer:je,drawBuffers:$e,useProgram:it,setBlending:L,setMaterial:de,setFlipSided:Te,setCullFace:j,setLineWidth:Se,setPolygonOffset:De,setScissorTest:Ce,activeTexture:E,bindTexture:w,unbindTexture:Z,compressedTexImage2D:ae,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Ze,updateUBOMapping:rt,uniformBlockBinding:st,texStorage2D:Ke,texStorage3D:ye,texSubImage2D:le,texSubImage3D:Re,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Ue,reset:bt}}function TM(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function AM(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function EM(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Ih(i,e,t,n){let s=CM(n);switch(t){case fp:return i*e;case mp:return i*e;case gp:return i*e*2;case sl:return i*e/s.components*s.byteLength;case uu:return i*e/s.components*s.byteLength;case du:return i*e*2/s.components*s.byteLength;case fu:return i*e*2/s.components*s.byteLength;case pp:return i*e*3/s.components*s.byteLength;case zi:return i*e*4/s.components*s.byteLength;case rl:return i*e*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:case jc:return Math.max(i,16)*Math.max(e,8)/4;case qc:case Yc:return Math.max(i,8)*Math.max(e,8)/2;case $c:case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case dh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vp:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CM(i){switch(i){case hn:case hp:return{byteLength:1,components:1};case jr:case up:case pi:return{byteLength:2,components:1};case cu:case hu:return{byteLength:2,components:4};case ys:case lu:case Bi:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var vu={contain:TM,cover:AM,fill:EM,getByteLength:Ih};function PM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,w){return f?new OffscreenCanvas(E,w):$r("canvas")}function y(E,w,Z){let ae=1,ge=Ce(E);if((ge.width>Z||ge.height>Z)&&(ae=Z/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let le=Math.floor(ae*ge.width),Re=Math.floor(ae*ge.height);u===void 0&&(u=m(le,Re));let we=w?m(le,Re):u;return we.width=le,we.height=Re,we.getContext("2d").drawImage(E,0,0,le,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+Re+")."),we}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==Jt&&E.minFilter!==ri}function g(E){i.generateMipmap(E)}function _(E,w,Z,ae,ge=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=w;if(w===i.RED&&(Z===i.FLOAT&&(le=i.R32F),Z===i.HALF_FLOAT&&(le=i.R16F),Z===i.UNSIGNED_BYTE&&(le=i.R8)),w===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.R8UI),Z===i.UNSIGNED_SHORT&&(le=i.R16UI),Z===i.UNSIGNED_INT&&(le=i.R32UI),Z===i.BYTE&&(le=i.R8I),Z===i.SHORT&&(le=i.R16I),Z===i.INT&&(le=i.R32I)),w===i.RG&&(Z===i.FLOAT&&(le=i.RG32F),Z===i.HALF_FLOAT&&(le=i.RG16F),Z===i.UNSIGNED_BYTE&&(le=i.RG8)),w===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RG8UI),Z===i.UNSIGNED_SHORT&&(le=i.RG16UI),Z===i.UNSIGNED_INT&&(le=i.RG32UI),Z===i.BYTE&&(le=i.RG8I),Z===i.SHORT&&(le=i.RG16I),Z===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Z===i.UNSIGNED_INT&&(le=i.RGB32UI),Z===i.BYTE&&(le=i.RGB8I),Z===i.SHORT&&(le=i.RGB16I),Z===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Z===i.UNSIGNED_INT&&(le=i.RGBA32UI),Z===i.BYTE&&(le=i.RGBA8I),Z===i.SHORT&&(le=i.RGBA16I),Z===i.INT&&(le=i.RGBA32I)),w===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),w===i.RGBA){let Re=ge?vo:vt.getTransfer(ae);Z===i.FLOAT&&(le=i.RGBA32F),Z===i.HALF_FLOAT&&(le=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(le=Re===Ct?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function v(E,w){let Z;return E?w===null||w===ys||w===sr?Z=i.DEPTH24_STENCIL8:w===Bi?Z=i.DEPTH32F_STENCIL8:w===jr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===sr?Z=i.DEPTH_COMPONENT24:w===Bi?Z=i.DEPTH_COMPONENT32F:w===jr&&(Z=i.DEPTH_COMPONENT16),Z}function M(E,w){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==ri?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function I(E){let w=E.target;w.removeEventListener("dispose",I),A(w),w.isVideoTexture&&h.delete(w)}function S(E){let w=E.target;w.removeEventListener("dispose",S),G(w)}function A(E){let w=n.get(E);if(w.__webglInit===void 0)return;let Z=E.source,ae=d.get(Z);if(ae){let ge=ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&R(E),Object.keys(ae).length===0&&d.delete(Z)}n.remove(E)}function R(E){let w=n.get(E);i.deleteTexture(w.__webglTexture);let Z=E.source,ae=d.get(Z);delete ae[w.__cacheKey],a.memory.textures--}function G(E){let w=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ge=0;ge<w.__webglFramebuffer[ae].length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ae][ge]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=E.textures;for(let ae=0,ge=Z.length;ae<ge;ae++){let le=n.get(Z[ae]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(Z[ae])}n.remove(E)}let x=0;function T(){x=0}function W(){let E=x;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),x+=1,E}function N(E){let w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function D(E,w){let Z=n.get(E);if(E.isVideoTexture&&Se(E),E.isRenderTargetTexture===!1&&E.version>0&&Z.__version!==E.version){let ae=E.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(Z,E,w);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+w)}function k(E,w){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){We(Z,E,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+w)}function B(E,w){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){We(Z,E,w);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+w)}function J(E,w){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){oe(Z,E,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+w)}let q={[cn]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},se={[Jt]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[ri]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},ie={[p0]:i.NEVER,[_0]:i.ALWAYS,[m0]:i.LESS,[_p]:i.LEQUAL,[g0]:i.EQUAL,[x0]:i.GEQUAL,[v0]:i.GREATER,[y0]:i.NOTEQUAL};function re(E,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ri||w.magFilter===Vr||w.magFilter===Ys||w.magFilter===Fi||w.minFilter===ri||w.minFilter===Vr||w.minFilter===Ys||w.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,q[w.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,q[w.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,q[w.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Ys&&w.minFilter!==Fi||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(E,w){let Z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",I));let ae=w.source,ge=d.get(ae);ge===void 0&&(ge={},d.set(ae,ge));let le=N(w);if(le!==E.__cacheKey){ge[le]===void 0&&(ge[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ge[le].usedTimes++;let Re=ge[E.__cacheKey];Re!==void 0&&(ge[E.__cacheKey].usedTimes--,Re.usedTimes===0&&R(w)),E.__cacheKey=le,E.__webglTexture=ge[le].texture}return Z}function We(E,w,Z){let ae=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=i.TEXTURE_3D);let ge=Ve(E,w),le=w.source;t.bindTexture(ae,E.__webglTexture,i.TEXTURE0+Z);let Re=n.get(le);if(le.version!==Re.__version||ge===!0){t.activeTexture(i.TEXTURE0+Z);let we=vt.getPrimaries(vt.workingColorSpace),Ne=w.colorSpace===rn?null:vt.getPrimaries(w.colorSpace),Ke=w.colorSpace===rn||we===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ye=y(w.image,!1,s.maxTextureSize);ye=De(w,ye);let Fe=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type),Je=_(w.internalFormat,Fe,Ze,w.colorSpace,w.isVideoTexture);re(ae,w);let Ue,rt=w.mipmaps,st=w.isVideoTexture!==!0,bt=Re.__version===void 0||ge===!0,z=le.dataReady,Ie=M(w,ye);if(w.isDepthTexture)Je=v(w.format===rr,w.type),bt&&(st?t.texStorage2D(i.TEXTURE_2D,1,Je,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Ze,null));else if(w.isDataTexture)if(rt.length>0){st&&bt&&t.texStorage2D(i.TEXTURE_2D,Ie,Je,rt[0].width,rt[0].height);for(let ne=0,C=rt.length;ne<C;ne++)Ue=rt[ne],st?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ue.width,Ue.height,Fe,Ze,Ue.data):t.texImage2D(i.TEXTURE_2D,ne,Je,Ue.width,Ue.height,0,Fe,Ze,Ue.data);w.generateMipmaps=!1}else st?(bt&&t.texStorage2D(i.TEXTURE_2D,Ie,Je,ye.width,ye.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,Ze,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Ze,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Je,rt[0].width,rt[0].height,ye.depth);for(let ne=0,C=rt.length;ne<C;ne++)if(Ue=rt[ne],w.format!==zi)if(Fe!==null)if(st){if(z)if(w.layerUpdates.size>0){let U=Ih(Ue.width,Ue.height,w.format,w.type);for(let F of w.layerUpdates){let H=Ue.data.subarray(F*U/Ue.data.BYTES_PER_ELEMENT,(F+1)*U/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,F,Ue.width,Ue.height,1,Fe,H,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ue.width,Ue.height,ye.depth,Fe,Ue.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Je,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ue.width,Ue.height,ye.depth,Fe,Ze,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Je,Ue.width,Ue.height,ye.depth,0,Fe,Ze,Ue.data)}else{st&&bt&&t.texStorage2D(i.TEXTURE_2D,Ie,Je,rt[0].width,rt[0].height);for(let ne=0,C=rt.length;ne<C;ne++)Ue=rt[ne],w.format!==zi?Fe!==null?st?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Je,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ue.width,Ue.height,Fe,Ze,Ue.data):t.texImage2D(i.TEXTURE_2D,ne,Je,Ue.width,Ue.height,0,Fe,Ze,Ue.data)}else if(w.isDataArrayTexture)if(st){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Je,ye.width,ye.height,ye.depth),z)if(w.layerUpdates.size>0){let ne=Ih(ye.width,ye.height,w.format,w.type);for(let C of w.layerUpdates){let U=ye.data.subarray(C*ne/ye.data.BYTES_PER_ELEMENT,(C+1)*ne/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,C,ye.width,ye.height,1,Fe,Ze,U)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Ze,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Fe,Ze,ye.data);else if(w.isData3DTexture)st?(bt&&t.texStorage3D(i.TEXTURE_3D,Ie,Je,ye.width,ye.height,ye.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Ze,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Fe,Ze,ye.data);else if(w.isFramebufferTexture){if(bt)if(st)t.texStorage2D(i.TEXTURE_2D,Ie,Je,ye.width,ye.height);else{let ne=ye.width,C=ye.height;for(let U=0;U<Ie;U++)t.texImage2D(i.TEXTURE_2D,U,Je,ne,C,0,Fe,Ze,null),ne>>=1,C>>=1}}else if(rt.length>0){if(st&&bt){let ne=Ce(rt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Je,ne.width,ne.height)}for(let ne=0,C=rt.length;ne<C;ne++)Ue=rt[ne],st?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Fe,Ze,Ue):t.texImage2D(i.TEXTURE_2D,ne,Je,Fe,Ze,Ue);w.generateMipmaps=!1}else if(st){if(bt){let ne=Ce(ye);t.texStorage2D(i.TEXTURE_2D,Ie,Je,ne.width,ne.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ze,ye)}else t.texImage2D(i.TEXTURE_2D,0,Je,Fe,Ze,ye);p(w)&&g(ae),Re.__version=le.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function oe(E,w,Z){if(w.image.length!==6)return;let ae=Ve(E,w),ge=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+Z);let le=n.get(ge);if(ge.version!==le.__version||ae===!0){t.activeTexture(i.TEXTURE0+Z);let Re=vt.getPrimaries(vt.workingColorSpace),we=w.colorSpace===rn?null:vt.getPrimaries(w.colorSpace),Ne=w.colorSpace===rn||Re===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let C=0;C<6;C++)!Ke&&!ye?Fe[C]=y(w.image[C],!0,s.maxCubemapSize):Fe[C]=ye?w.image[C].image:w.image[C],Fe[C]=De(w,Fe[C]);let Ze=Fe[0],Je=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type),rt=_(w.internalFormat,Je,Ue,w.colorSpace),st=w.isVideoTexture!==!0,bt=le.__version===void 0||ae===!0,z=ge.dataReady,Ie=M(w,Ze);re(i.TEXTURE_CUBE_MAP,w);let ne;if(Ke){st&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,rt,Ze.width,Ze.height);for(let C=0;C<6;C++){ne=Fe[C].mipmaps;for(let U=0;U<ne.length;U++){let F=ne[U];w.format!==zi?Je!==null?st?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U,0,0,F.width,F.height,Je,F.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U,rt,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U,0,0,F.width,F.height,Je,Ue,F.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U,rt,F.width,F.height,0,Je,Ue,F.data)}}}else{if(ne=w.mipmaps,st&&bt){ne.length>0&&Ie++;let C=Ce(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,rt,C.width,C.height)}for(let C=0;C<6;C++)if(ye){st?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Fe[C].width,Fe[C].height,Je,Ue,Fe[C].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,rt,Fe[C].width,Fe[C].height,0,Je,Ue,Fe[C].data);for(let U=0;U<ne.length;U++){let H=ne[U].image[C].image;st?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U+1,0,0,H.width,H.height,Je,Ue,H.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U+1,rt,H.width,H.height,0,Je,Ue,H.data)}}else{st?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Je,Ue,Fe[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,rt,Je,Ue,Fe[C]);for(let U=0;U<ne.length;U++){let F=ne[U];st?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U+1,0,0,Je,Ue,F.image[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,U+1,rt,Je,Ue,F.image[C])}}}p(w)&&g(i.TEXTURE_CUBE_MAP),le.__version=ge.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function fe(E,w,Z,ae,ge,le){let Re=r.convert(Z.format,Z.colorSpace),we=r.convert(Z.type),Ne=_(Z.internalFormat,Re,we,Z.colorSpace);if(!n.get(w).__hasExternalTextures){let ye=Math.max(1,w.width>>le),Fe=Math.max(1,w.height>>le);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Ne,ye,Fe,w.depth,0,Re,we,null):t.texImage2D(ge,le,Ne,ye,Fe,0,Re,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),j(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ge,n.get(Z).__webglTexture,0,Te(w)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ge,n.get(Z).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,w,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),w.depthBuffer){let ae=w.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,le=v(w.stencilBuffer,ge),Re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=Te(w);j(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,le,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,E)}else{let ae=w.textures;for(let ge=0;ge<ae.length;ge++){let le=ae[ge],Re=r.convert(le.format,le.colorSpace),we=r.convert(le.type),Ne=_(le.internalFormat,Re,we,le.colorSpace),Ke=Te(w);Z&&j(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ne,w.width,w.height):j(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,Ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);let ae=n.get(w.depthTexture).__webglTexture,ge=Te(w);if(w.depthTexture.format===Ks)j(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(w.depthTexture.format===rr)j(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function je(E){let w=n.get(E),Z=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){let ae=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){let ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ae}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,E)}else if(Z){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=i.createRenderbuffer(),ze(w.__webglDepthbuffer[ae],E,!1);else{let ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ze(w.__webglDepthbuffer,E,!1);else{let ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(E,w,Z){let ae=n.get(E);w!==void 0&&fe(ae.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&je(E)}function it(E){let w=E.texture,Z=n.get(E),ae=n.get(w);E.addEventListener("dispose",S);let ge=E.textures,le=E.isWebGLCubeRenderTarget===!0,Re=ge.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=w.version,a.memory.textures++),le){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)Z.__webglFramebuffer[we][Ne]=i.createFramebuffer()}else Z.__webglFramebuffer[we]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)Z.__webglFramebuffer[we]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let we=0,Ne=ge.length;we<Ne;we++){let Ke=n.get(ge[we]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&j(E)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){let Ne=ge[we];Z.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);let Ke=r.convert(Ne.format,Ne.colorSpace),ye=r.convert(Ne.type),Fe=_(Ne.internalFormat,Ke,ye,Ne.colorSpace,E.isXRRenderTarget===!0),Ze=Te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(Z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),re(i.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)fe(Z.__webglFramebuffer[we][Ne],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else fe(Z.__webglFramebuffer[we],E,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);p(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let we=0,Ne=ge.length;we<Ne;we++){let Ke=ge[we],ye=n.get(Ke);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),re(i.TEXTURE_2D,Ke),fe(Z.__webglFramebuffer,E,Ke,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),p(Ke)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(we=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ae.__webglTexture),re(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)fe(Z.__webglFramebuffer[Ne],E,w,i.COLOR_ATTACHMENT0,we,Ne);else fe(Z.__webglFramebuffer,E,w,i.COLOR_ATTACHMENT0,we,0);p(w)&&g(we),t.unbindTexture()}E.depthBuffer&&je(E)}function lt(E){let w=E.textures;for(let Z=0,ae=w.length;Z<ae;Z++){let ge=w[Z];if(p(ge)){let le=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(ge).__webglTexture;t.bindTexture(le,Re),g(le),t.unbindTexture()}}}let me=[],L=[];function de(E){if(E.samples>0){if(j(E)===!1){let w=E.textures,Z=E.width,ae=E.height,ge=i.COLOR_BUFFER_BIT,le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(E),we=w.length>1;if(we)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let Ke=n.get(w[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,ge,i.NEAREST),l===!0&&(me.length=0,L.length=0,me.push(i.COLOR_ATTACHMENT0+Ne),E.depthBuffer&&E.resolveDepthBuffer===!1&&(me.push(le),L.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let Ke=n.get(w[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let w=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Te(E){return Math.min(s.maxSamples,E.samples)}function j(E){let w=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(E){let w=a.render.frame;h.get(E)!==w&&(h.set(E,w),E.update())}function De(E,w){let Z=E.colorSpace,ae=E.format,ge=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Z!==Ht&&Z!==rn&&(vt.getTransfer(Z)===Ct?(ae!==zi||ge!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=T,this.setTexture2D=D,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=$e,this.setupRenderTarget=it,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=j}function RM(i,e){function t(n,s=rn){let r,a=vt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return i.BYTE;if(n===up)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===lu)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===fp)return i.ALPHA;if(n===pp)return i.RGB;if(n===zi)return i.RGBA;if(n===mp)return i.LUMINANCE;if(n===gp)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===uu)return i.RED_INTEGER;if(n===du)return i.RG;if(n===fu)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Xc||n===Yc||n===jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===Zc||n===Kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===Zc)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===Qc||n===eh||n===th||n===ih||n===nh||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===dh||n===fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vp||n===ph||n===mh||n===gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Lh=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),g=this._getHandJoint(c,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:LM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,y=new Dh,p=t.getContextAttributes(),g=null,_=null,v=[],M=[],I=new he,S=null,A=new Lt;A.layers.enable(1),A.viewport=new xt;let R=new Lt;R.layers.enable(2),R.viewport=new xt;let G=[A,R],x=new Lh;x.layers.enable(1),x.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=v[oe];return fe===void 0&&(fe=new Wr,v[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=v[oe];return fe===void 0&&(fe=new Wr,v[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=v[oe];return fe===void 0&&(fe=new Wr,v[oe]=fe),fe.getHandSpace()};function N(oe){let fe=M.indexOf(oe.inputSource);if(fe===-1)return;let ze=v[fe];ze!==void 0&&(ze.update(oe.inputSource,oe.frame,c||a),ze.dispatchEvent({type:oe.type,data:oe.inputSource}))}function D(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",k);for(let oe=0;oe<v.length;oe++){let fe=M[oe];fe!==null&&(M[oe]=null,v[oe].disconnect(fe))}T=null,W=null,y.reset(),e.setRenderTarget(g),f=null,d=null,u=null,s=null,_=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",D),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ot(f.framebufferWidth,f.framebufferHeight,{format:zi,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,ze=null,Pe=null;p.depth&&(Pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?rr:Ks,ze=p.stencil?sr:ys);let je={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ot(d.textureWidth,d.textureHeight,{format:zi,type:hn,depthTexture:new Co(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(oe){for(let fe=0;fe<oe.removed.length;fe++){let ze=oe.removed[fe],Pe=M.indexOf(ze);Pe>=0&&(M[Pe]=null,v[Pe].disconnect(ze))}for(let fe=0;fe<oe.added.length;fe++){let ze=oe.added[fe],Pe=M.indexOf(ze);if(Pe===-1){for(let $e=0;$e<v.length;$e++)if($e>=M.length){M.push(ze),Pe=$e;break}else if(M[$e]===null){M[$e]=ze,Pe=$e;break}if(Pe===-1)break}let je=v[Pe];je&&je.connect(ze)}}let B=new P,J=new P;function q(oe,fe,ze){B.setFromMatrixPosition(fe.matrixWorld),J.setFromMatrixPosition(ze.matrixWorld);let Pe=B.distanceTo(J),je=fe.projectionMatrix.elements,$e=ze.projectionMatrix.elements,it=je[14]/(je[10]-1),lt=je[14]/(je[10]+1),me=(je[9]+1)/je[5],L=(je[9]-1)/je[5],de=(je[8]-1)/je[0],Te=($e[8]+1)/$e[0],j=it*de,Se=it*Te,De=Pe/(-de+Te),Ce=De*-de;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ce),oe.translateZ(De),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),je[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let E=it+De,w=lt+De,Z=j-Ce,ae=Se+(Pe-Ce),ge=me*lt/w*E,le=L*lt/w*E;oe.projectionMatrix.makePerspective(Z,ae,ge,le,E,w),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function se(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let fe=oe.near,ze=oe.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(ze=y.depthFar)),x.near=R.near=A.near=fe,x.far=R.far=A.far=ze,(T!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,W=x.far);let Pe=oe.parent,je=x.cameras;se(x,Pe);for(let $e=0;$e<je.length;$e++)se(je[$e],Pe);je.length===2?q(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),ie(oe,x,Pe)};function ie(oe,fe,ze){ze===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(ze.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=lr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Ve(oe,fe){if(h=fe.getViewerPose(c||a),m=fe,h!==null){let ze=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Pe=!1;ze.length!==x.cameras.length&&(x.cameras.length=0,Pe=!0);for(let $e=0;$e<ze.length;$e++){let it=ze[$e],lt=null;if(f!==null)lt=f.getViewport(it);else{let L=u.getViewSubImage(d,it);lt=L.viewport,$e===0&&(e.setRenderTargetTextures(_,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let me=G[$e];me===void 0&&(me=new Lt,me.layers.enable($e),me.viewport=new xt,G[$e]=me),me.matrix.fromArray(it.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(it.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(lt.x,lt.y,lt.width,lt.height),$e===0&&(x.matrix.copy(me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Pe===!0&&x.cameras.push(me)}let je=s.enabledFeatures;if(je&&je.includes("depth-sensing")){let $e=u.getDepthInformation(ze[0]);$e&&$e.isValid&&$e.texture&&y.init(e,$e,s.renderState)}}for(let ze=0;ze<v.length;ze++){let Pe=M[ze],je=v[ze];Pe!==null&&je!==void 0&&je.update(Pe,fe,c||a)}re&&re(oe,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}let We=new wp;We.setAnimationLoop(Ve),this.setAnimationLoop=function(oe){re=oe},this.dispose=function(){}}},ps=new Vi,UM=new He;function NM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Sp(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,_,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===$t&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===$t&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=e.get(g),v=_.envMap,M=_.envMapRotation;v&&(p.envMap.value=v,ps.copy(M),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),p.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(ps)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=v*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let M=v.program;n.uniformBlockBinding(_,M)}function c(_,v){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",p));let I=v.program;n.updateUBOMapping(_,I);let S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let v=u();_.__bindingPointIndex=v;let M=i.createBuffer(),I=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],M=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,A=M.length;S<A;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let G=0,x=R.length;G<x;G++){let T=R[G];if(f(T,S,G,I)===!0){let W=T.__offset,N=Array.isArray(T.value)?T.value:[T.value],D=0;for(let k=0;k<N.length;k++){let B=N[k],J=y(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,W+D,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,M,I){let S=_.value,A=v+"_"+M;if(I[A]===void 0)return typeof S=="number"||typeof S=="boolean"?I[A]=S:I[A]=S.clone(),!0;{let R=I[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return I[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function m(_){let v=_.uniforms,M=0,I=16;for(let A=0,R=v.length;A<R;A++){let G=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,T=G.length;x<T;x++){let W=G[x],N=Array.isArray(W.value)?W.value:[W.value];for(let D=0,k=N.length;D<k;D++){let B=N[D],J=y(B),q=M%I,se=q%J.boundary,ie=q+se;M+=se,ie!==0&&I-ie<J.storage&&(M+=I-ie),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=J.storage}}}let S=M%I;return S>0&&(M+=I-S),_.__size=M,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var hr=class{constructor(e={}){let{canvas:t=F0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),m=new Int32Array(4),y=null,p=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=on,this.toneMappingExposure=1;let v=this,M=!1,I=0,S=0,A=null,R=-1,G=null,x=new xt,T=new xt,W=null,N=new _e(0),D=0,k=t.width,B=t.height,J=1,q=null,se=null,ie=new xt(0,0,k,B),re=new xt(0,0,k,B),Ve=!1,We=new qn,oe=!1,fe=!1,ze=new He,Pe=new He,je=new P,$e=new xt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function me(){return A===null?J:1}let L=n;function de(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",C,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",F,!1),L===null){let O="webgl2";if(L=de(O,b),L===null)throw de(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Te,j,Se,De,Ce,E,w,Z,ae,ge,le,Re,we,Ne,Ke,ye,Fe,Ze,Je,Ue,rt,st,bt,z;function Ie(){Te=new $x(L),Te.init(),st=new RM(L,Te),j=new Gx(L,Te,e,st),Se=new wM(L),j.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),De=new Jx(L),Ce=new uM,E=new PM(L,Te,Se,Ce,j,st,De),w=new qx(v),Z=new jx(v),ae=new rv(L),bt=new Vx(L,ae),ge=new Zx(L,ae,De,bt),le=new e_(L,ge,ae,De),Je=new Qx(L,j,E),ye=new Wx(Ce),Re=new hM(v,w,Z,Te,j,bt,ye),we=new NM(v,Ce),Ne=new fM,Ke=new xM(Te),Ze=new kx(v,w,Z,Se,le,d,l),Fe=new bM(v,le,j),z=new OM(L,De,j,Se),Ue=new Hx(L,Te,De),rt=new Kx(L,Te,De),De.programs=Re.programs,v.capabilities=j,v.extensions=Te,v.properties=Ce,v.renderLists=Ne,v.shadowMap=Fe,v.state=Se,v.info=De}Ie();let ne=new Uh(v,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(k,B,!1))},this.getSize=function(b){return b.set(k,B)},this.setSize=function(b,O,Y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,B=O,t.width=Math.floor(b*J),t.height=Math.floor(O*J),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(k*J,B*J).floor()},this.setDrawingBufferSize=function(b,O,Y){k=b,B=O,J=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,O,Y,K){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,O,Y,K),Se.viewport(x.copy(ie).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,O,Y,K){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,O,Y,K),Se.scissor(T.copy(re).multiplyScalar(J).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){Se.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(b=!0,O=!0,Y=!0){let K=0;if(b){let V=!1;if(A!==null){let xe=A.texture.format;V=xe===rl||xe===fu||xe===uu}if(V){let xe=A.texture.type,be=xe===hn||xe===ys||xe===jr||xe===sr||xe===cu||xe===hu,Ee=Ze.getClearColor(),Le=Ze.getClearAlpha(),Me=Ee.r,ke=Ee.g,Be=Ee.b;be?(f[0]=Me,f[1]=ke,f[2]=Be,f[3]=Le,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Me,m[1]=ke,m[2]=Be,m[3]=Le,L.clearBufferiv(L.COLOR,0,m))}else K|=L.COLOR_BUFFER_BIT}O&&(K|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",C,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",F,!1),Ne.dispose(),Ke.dispose(),Ce.dispose(),w.dispose(),Z.dispose(),le.dispose(),bt.dispose(),z.dispose(),Re.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ve),ne.removeEventListener("sessionend",X),te.stop()};function C(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let b=De.autoReset,O=Fe.enabled,Y=Fe.autoUpdate,K=Fe.needsUpdate,V=Fe.type;Ie(),De.autoReset=b,Fe.enabled=O,Fe.autoUpdate=Y,Fe.needsUpdate=K,Fe.type=V}function F(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function H(b){let O=b.target;O.removeEventListener("dispose",H),$(O)}function $(b){Q(b),Ce.remove(b)}function Q(b){let O=Ce.get(b).programs;O!==void 0&&(O.forEach(function(Y){Re.releaseProgram(Y)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,K,V,xe){O===null&&(O=it);let be=V.isMesh&&V.matrixWorld.determinant()<0,Ee=tt(b,O,Y,K,V);Se.setMaterial(K,be);let Le=Y.index,Me=1;if(K.wireframe===!0){if(Le=ge.getWireframeAttribute(Y),Le===void 0)return;Me=2}let ke=Y.drawRange,Be=Y.attributes.position,gt=ke.start*Me,wt=(ke.start+ke.count)*Me;xe!==null&&(gt=Math.max(gt,xe.start*Me),wt=Math.min(wt,(xe.start+xe.count)*Me)),Le!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Le.count)):Be!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,Be.count));let Tt=wt-gt;if(Tt<0||Tt===1/0)return;bt.setup(V,K,Ee,Y,Le);let Ut,pt=Ue;if(Le!==null&&(Ut=ae.get(Le),pt=rt,pt.setIndex(Ut)),V.isMesh)K.wireframe===!0?(Se.setLineWidth(K.wireframeLinewidth*me()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(V.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),Se.setLineWidth(Xe*me()),V.isLineSegments?pt.setMode(L.LINES):V.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else V.isPoints?pt.setMode(L.POINTS):V.isSprite&&pt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)pt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xe=V._multiDrawStarts,Nt=V._multiDrawCounts,_t=V._multiDrawCount,Yt=Le?ae.get(Le).bytesPerElement:1,Gt=Ce.get(K).currentProgram.getUniforms();for(let Ti=0;Ti<_t;Ti++)Gt.setValue(L,"_gl_DrawID",Ti),pt.render(Xe[Ti]/Yt,Nt[Ti])}else if(V.isInstancedMesh)pt.renderInstances(gt,Tt,V.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,Xe);pt.renderInstances(gt,Tt,Nt)}else pt.render(gt,Tt)};function ee(b,O,Y){b.transparent===!0&&b.side===si&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,et(b,O,Y),b.side=ln,b.needsUpdate=!0,et(b,O,Y),b.side=si):et(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),p=Ke.get(Y),p.init(O),_.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let K=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let xe=V.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){let Ee=xe[be];ee(Ee,Y,V),K.add(Ee)}else ee(xe,Y,V),K.add(xe)}),_.pop(),p=null,K},this.compileAsync=function(b,O,Y=null){let K=this.compile(b,O,Y);return new Promise(V=>{function xe(){if(K.forEach(function(be){Ce.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){V(b);return}setTimeout(xe,10)}Te.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ce=null;function pe(b){ce&&ce(b)}function ve(){te.stop()}function X(){te.start()}let te=new wp;te.setAnimationLoop(pe),typeof self<"u"&&te.setContext(self),this.setAnimationLoop=function(b){ce=b,ne.setAnimationLoop(b),b===null?te.stop():te.start()},ne.addEventListener("sessionstart",ve),ne.addEventListener("sessionend",X),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,A),p=Ke.get(b,_.length),p.init(O),_.push(p),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),We.setFromProjectionMatrix(Pe),fe=this.localClippingEnabled,oe=ye.init(this.clippingPlanes,fe),y=Ne.get(b,g.length),y.init(),g.push(y),ne.enabled===!0&&ne.isPresenting===!0){let xe=v.xr.getDepthSensingMesh();xe!==null&&ue(xe,O,-1/0,v.sortObjects)}ue(b,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,se),lt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,lt&&Ze.addToRenderList(y,b),this.info.render.frame++,oe===!0&&ye.beginShadows();let Y=p.state.shadowsArray;Fe.render(Y,b,O),oe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=y.opaque,V=y.transmissive;if(p.setupLights(),O.isArrayCamera){let xe=O.cameras;if(V.length>0)for(let be=0,Ee=xe.length;be<Ee;be++){let Le=xe[be];Ye(K,V,b,Le)}lt&&Ze.render(b);for(let be=0,Ee=xe.length;be<Ee;be++){let Le=xe[be];Ae(y,b,Le,Le.viewport)}}else V.length>0&&Ye(K,V,b,O),lt&&Ze.render(b),Ae(y,b,O);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,O),bt.resetDefaultState(),R=-1,G=null,_.pop(),_.length>0?(p=_[_.length-1],oe===!0&&ye.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function ue(b,O,Y,K){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||We.intersectsSprite(b)){K&&$e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);let be=le.update(b),Ee=b.material;Ee.visible&&y.push(b,be,Ee,Y,$e.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||We.intersectsObject(b))){let be=le.update(b),Ee=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$e.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),$e.copy(be.boundingSphere.center)),$e.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ee)){let Le=be.groups;for(let Me=0,ke=Le.length;Me<ke;Me++){let Be=Le[Me],gt=Ee[Be.materialIndex];gt&&gt.visible&&y.push(b,be,gt,Y,$e.z,Be)}}else Ee.visible&&y.push(b,be,Ee,Y,$e.z,null)}}let xe=b.children;for(let be=0,Ee=xe.length;be<Ee;be++)ue(xe[be],O,Y,K)}function Ae(b,O,Y,K){let V=b.opaque,xe=b.transmissive,be=b.transparent;p.setupLightsView(Y),oe===!0&&ye.setGlobalState(v.clippingPlanes,Y),K&&Se.viewport(x.copy(K)),V.length>0&&qe(V,O,Y),xe.length>0&&qe(xe,O,Y),be.length>0&&qe(be,O,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ye(b,O,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ot(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?pi:hn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let xe=p.state.transmissionRenderTarget[K.id],be=K.viewport||x;xe.setSize(be.z,be.w);let Ee=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(N),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),lt&&Ze.render(Y);let Le=v.toneMapping;v.toneMapping=on;let Me=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),oe===!0&&ye.setGlobalState(v.clippingPlanes,K),qe(b,Y,K),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Be=0,gt=O.length;Be<gt;Be++){let wt=O[Be],Tt=wt.object,Ut=wt.geometry,pt=wt.material,Xe=wt.group;if(pt.side===si&&Tt.layers.test(K.layers)){let Nt=pt.side;pt.side=$t,pt.needsUpdate=!0,Qe(Tt,Y,K,Ut,pt,Xe),pt.side=Nt,pt.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ee),v.setClearColor(N,D),Me!==void 0&&(K.viewport=Me),v.toneMapping=Le}function qe(b,O,Y){let K=O.isScene===!0?O.overrideMaterial:null;for(let V=0,xe=b.length;V<xe;V++){let be=b[V],Ee=be.object,Le=be.geometry,Me=K===null?be.material:K,ke=be.group;Ee.layers.test(Y.layers)&&Qe(Ee,O,Y,Le,Me,ke)}}function Qe(b,O,Y,K,V,xe){b.onBeforeRender(v,O,Y,K,V,xe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,O,Y,K,b,xe),V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,v.renderBufferDirect(Y,O,K,V,b,xe),V.side=ln,V.needsUpdate=!0,v.renderBufferDirect(Y,O,K,V,b,xe),V.side=si):v.renderBufferDirect(Y,O,K,V,b,xe),b.onAfterRender(v,O,Y,K,V,xe)}function et(b,O,Y){O.isScene!==!0&&(O=it);let K=Ce.get(b),V=p.state.lights,xe=p.state.shadowsArray,be=V.state.version,Ee=Re.getParameters(b,V.state,xe,O,Y),Le=Re.getProgramCacheKey(Ee),Me=K.programs;K.environment=b.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(b.isMeshStandardMaterial?Z:w).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Me===void 0&&(b.addEventListener("dispose",H),Me=new Map,K.programs=Me);let ke=Me.get(Le);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===be)return ut(b,Ee),ke}else Ee.uniforms=Re.getUniforms(b),b.onBeforeCompile(Ee,v),ke=Re.acquireProgram(Ee,Le),Me.set(Le,ke),K.uniforms=Ee.uniforms;let Be=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=ye.uniform),ut(b,Ee),K.needsLights=nt(b),K.lightsStateVersion=be,K.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=ke,K.uniformsList=null,ke}function at(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ut(b,O){let Y=Ce.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function tt(b,O,Y,K,V){O.isScene!==!0&&(O=it),E.resetTextureUnits();let xe=O.fog,be=K.isMeshStandardMaterial?O.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ht,Le=(K.isMeshStandardMaterial?Z:w).get(K.envMap||be),Me=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,wt=!!Y.morphAttributes.color,Tt=on;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=v.toneMapping);let Ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=Ut!==void 0?Ut.length:0,Xe=Ce.get(K),Nt=p.state.lights;if(oe===!0&&(fe===!0||b!==G)){let Ni=b===G&&K.id===R;ye.setState(K,b,Ni)}let _t=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==Ee||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isBatchedMesh&&Xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xe.instancingMorph===!1&&V.morphTexture!==null||Xe.envMap!==Le||K.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ye.numPlanes||Xe.numIntersection!==ye.numIntersection)||Xe.vertexAlphas!==Me||Xe.vertexTangents!==ke||Xe.morphTargets!==Be||Xe.morphNormals!==gt||Xe.morphColors!==wt||Xe.toneMapping!==Tt||Xe.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,Xe.__version=K.version);let Yt=Xe.currentProgram;_t===!0&&(Yt=et(K,O,V));let Gt=!1,Ti=!1,$l=!1,Bt=Yt.getUniforms(),Nn=Xe.uniforms;if(Se.useProgram(Yt.program)&&(Gt=!0,Ti=!0,$l=!0),K.id!==R&&(R=K.id,Ti=!0),Gt||G!==b){j.reverseDepthBuffer?(ze.copy(b.projectionMatrix),z0(ze),k0(ze),Bt.setValue(L,"projectionMatrix",ze)):Bt.setValue(L,"projectionMatrix",b.projectionMatrix),Bt.setValue(L,"viewMatrix",b.matrixWorldInverse);let Ni=Bt.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,je.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ti=!0,$l=!0)}if(V.isSkinnedMesh){Bt.setOptional(L,V,"bindMatrix"),Bt.setOptional(L,V,"bindMatrixInverse");let Ni=V.skeleton;Ni&&(Ni.boneTexture===null&&Ni.computeBoneTexture(),Bt.setValue(L,"boneTexture",Ni.boneTexture,E))}V.isBatchedMesh&&(Bt.setOptional(L,V,"batchingTexture"),Bt.setValue(L,"batchingTexture",V._matricesTexture,E),Bt.setOptional(L,V,"batchingIdTexture"),Bt.setValue(L,"batchingIdTexture",V._indirectTexture,E),Bt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Bt.setValue(L,"batchingColorTexture",V._colorsTexture,E));let Zl=Y.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0)&&Je.update(V,Y,Yt),(Ti||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Bt.setValue(L,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Nn.envMap.value=Le,Nn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&O.environment!==null&&(Nn.envMapIntensity.value=O.environmentIntensity),Ti&&(Bt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Ge(Nn,$l),xe&&K.fog===!0&&we.refreshFogUniforms(Nn,xe),we.refreshMaterialUniforms(Nn,K,J,B,p.state.transmissionRenderTarget[b.id]),Qs.upload(L,at(Xe),Nn,E)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qs.upload(L,at(Xe),Nn,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(L,"center",V.center),Bt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Bt.setValue(L,"normalMatrix",V.normalMatrix),Bt.setValue(L,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Ni=K.uniformsGroups;for(let Kl=0,zg=Ni.length;Kl<zg;Kl++){let kd=Ni[Kl];z.update(kd,Yt),z.bind(kd,Yt)}}return Yt}function Ge(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function nt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,O,Y){Ce.get(b.texture).__webglTexture=O,Ce.get(b.depthTexture).__webglTexture=Y;let K=Ce.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let Y=Ce.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){A=b,I=O,S=Y;let K=!0,V=null,xe=!1,be=!1;if(b){let Le=Ce.get(b);if(Le.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Le.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Le.__hasExternalTextures)E.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Be=b.depthTexture;if(Le.__boundDepthTexture!==Be){if(Be!==null&&Ce.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(be=!0);let ke=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?V=ke[O][Y]:V=ke[O],xe=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?V=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[Y]:V=ke,x.copy(b.viewport),T.copy(b.scissor),W=b.scissorTest}else x.copy(ie).multiplyScalar(J).floor(),T.copy(re).multiplyScalar(J).floor(),W=Ve;if(Se.bindFramebuffer(L.FRAMEBUFFER,V)&&K&&Se.drawBuffers(b,V),Se.viewport(x),Se.scissor(T),Se.setScissorTest(W),xe){let Le=Ce.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,Y)}else if(be){let Le=Ce.get(b.texture),Me=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.__webglTexture,Y||0,Me)}R=-1},this.readRenderTargetPixels=function(b,O,Y,K,V,xe,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);try{let Le=b.texture,Me=Le.format,ke=Le.type;if(!j.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-K&&Y>=0&&Y<=b.height-V&&L.readPixels(O,Y,K,V,st.convert(Me),st.convert(ke),xe)}finally{let Le=A!==null?Ce.get(A).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,K,V,xe,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){let Le=b.texture,Me=Le.format,ke=Le.type;if(!j.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-K&&Y>=0&&Y<=b.height-V){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);let Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(O,Y,K,V,st.convert(Me),st.convert(ke),0);let gt=A!==null?Ce.get(A).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,gt);let wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await B0(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(Be),L.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,Y=0){b.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let K=Math.pow(2,-Y),V=Math.floor(b.image.width*K),xe=Math.floor(b.image.height*K),be=O!==null?O.x:0,Ee=O!==null?O.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,be,Ee,V,xe),Se.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,K=null,V=0){b.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],O=arguments[2],V=arguments[3]||0,Y=null);let xe,be,Ee,Le,Me,ke;Y!==null?(xe=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ee=Y.min.x,Le=Y.min.y):(xe=b.image.width,be=b.image.height,Ee=0,Le=0),K!==null?(Me=K.x,ke=K.y):(Me=0,ke=0);let Be=st.convert(O.format),gt=st.convert(O.type);E.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let wt=L.getParameter(L.UNPACK_ROW_LENGTH),Tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ut=L.getParameter(L.UNPACK_SKIP_PIXELS),pt=L.getParameter(L.UNPACK_SKIP_ROWS),Xe=L.getParameter(L.UNPACK_SKIP_IMAGES),Nt=b.isCompressedTexture?b.mipmaps[V]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,Me,ke,xe,be,Be,gt,Nt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,Me,ke,Nt.width,Nt.height,Be,Nt.data):L.texSubImage2D(L.TEXTURE_2D,V,Me,ke,xe,be,Be,gt,Nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xe),V===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y=null,K=null,V=0){b.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,b=arguments[2],O=arguments[3],V=arguments[4]||0);let xe,be,Ee,Le,Me,ke,Be,gt,wt,Tt=b.isCompressedTexture?b.mipmaps[V]:b.image;Y!==null?(xe=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ee=Y.max.z-Y.min.z,Le=Y.min.x,Me=Y.min.y,ke=Y.min.z):(xe=Tt.width,be=Tt.height,Ee=Tt.depth,Le=0,Me=0,ke=0),K!==null?(Be=K.x,gt=K.y,wt=K.z):(Be=0,gt=0,wt=0);let Ut=st.convert(O.format),pt=st.convert(O.type),Xe;if(O.isData3DTexture)E.setTexture3D(O,0),Xe=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)E.setTexture2DArray(O,0),Xe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let Nt=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yt=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),Ti=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Xe,V,Be,gt,wt,xe,be,Ee,Ut,pt,Tt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Xe,V,Be,gt,wt,xe,be,Ee,Ut,Tt.data):L.texSubImage3D(Xe,V,Be,gt,wt,xe,be,Ee,Ut,pt,Tt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ti),V===0&&O.generateMipmaps&&L.generateMipmap(Xe),Se.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){I=0,S=0,A=null,Se.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===pu?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===ol?"display-p3":"srgb"}};var ur=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hi=new P,Jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ji(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ff=new P,Bf=new xt,zf=new xt,FM=new P,kf=new He,Qa=new P,Ec=new Qt,Vf=new He,Cc=new Ci,Po=class extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wd,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingBox.expandByPoint(Qa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingSphere.expandByPoint(Qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ec.copy(this.boundingSphere),Ec.applyMatrix4(s),e.ray.intersectsSphere(Ec)!==!1&&(Vf.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Vf),!(this.boundingBox!==null&&Cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===c0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Bf.fromBufferAttribute(s.attributes.skinIndex,e),zf.fromBufferAttribute(s.attributes.skinWeight,e),Ff.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=zf.getComponent(r);if(a!==0){let o=Bf.getComponent(r);kf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(FM.copy(Ff).applyMatrix4(kf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},dr=class extends Zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,h=Jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=new He,BM=new He,Ro=class i{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:BM;Hf.multiplyMatrices(o,t[r]),Hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new dr(t,e,e,zi,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Qr),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ei=class extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new He,Gf=new He,eo=[],Wf=new ai,zM=new He,Or=new ft,Fr=new Qt,fi=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Wf.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Fr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Gf.multiplyMatrices(n,Xs),Or.matrixWorld=Gf,Or.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){let l=eo[a];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,sl,Bi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fr=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Io=new P,Lo=new P,qf=new He,Br=new Ci,to=new Qt,Pc=new P,Xf=new P,pr=class extends Pt{constructor(e=new Mt,t=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Io.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Lo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;qf.copy(s).invert(),Br.copy(e.ray).applyMatrix4(qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=h.getX(y),_=h.getX(y+1),v=io(this,e,Br,l,g,_);v&&t.push(v)}if(this.isLineLoop){let y=h.getX(m-1),p=h.getX(f),g=io(this,e,Br,l,y,p);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let y=f,p=m-1;y<p;y+=c){let g=io(this,e,Br,l,y,y+1);g&&t.push(g)}if(this.isLineLoop){let y=io(this,e,Br,l,m-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function io(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Io.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Io,Lo,Pc,Xf)>n)return;Pc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pc);if(!(l<e.near||l>e.far))return{distance:l,point:Xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Yf=new P,jf=new P,xs=class extends pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yf.distanceTo(jf);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Do=class extends pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xn=class extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$f=new He,Nh=new Ci,no=new Qt,so=new P,Sn=class extends Pt{constructor(e=new Mt,t=new Xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;$f.copy(s).invert(),Nh.copy(e.ray).applyMatrix4($f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,y=f;m<y;m++){let p=c.getX(m);so.fromBufferAttribute(u,p),Zf(so,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,y=f;m<y;m++)so.fromBufferAttribute(u,m),Zf(so,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zf(i,e,t,n,s,r,a){let o=Nh.distanceSqToPoint(i);if(o<t){let l=new P;Nh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new He;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ea=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oh=class extends ea{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ro=new P,Rc=new yu,Ic=new yu,Lc=new yu,mr=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ro.subVectors(s[0],s[1]).add(s[0]),c=ro);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Rc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,y,p),Ic.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,y,p),Lc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,y,p)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ic.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Rc.calc(l),Ic.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function kM(i,e){let t=1-i;return t*t*e}function VM(i,e){return 2*(1-i)*i*e}function HM(i,e){return i*i*e}function qr(i,e,t,n){return kM(i,e)+VM(i,t)+HM(i,n)}function GM(i,e){let t=1-i;return t*t*t*e}function WM(i,e){let t=1-i;return 3*t*t*i*e}function qM(i,e){return 3*(1-i)*i*i*e}function XM(i,e){return i*i*i*e}function Xr(i,e,t,n,s){return GM(i,e)+WM(i,t)+qM(i,n)+XM(i,s)}var Uo=class extends Hi{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends Hi{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y),Xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends Hi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends Hi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends Hi{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Hi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y),qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Kf(o,l.x,c.x,h.x,u.x),Kf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:Oh,CatmullRomCurve3:mr,CubicBezierCurve:Uo,CubicBezierCurve3:Fh,EllipseCurve:ea,LineCurve:No,LineCurve3:Bh,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Fo,SplineCurve:Bo}),zh=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zo[s.type]().fromJSON(s))}return this}},ko=class extends zh{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new No(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oo(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Uo(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Bo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ea(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Gi=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,y=[],p=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function _(){let M=new P,I=new P,S=0,A=(t-e)/n;for(let R=0;R<=r;R++){let G=[],x=R/r,T=x*(t-e)+e;for(let W=0;W<=s;W++){let N=W/s,D=N*l+o,k=Math.sin(D),B=Math.cos(D);I.x=T*k,I.y=-x*n+p,I.z=T*B,u.push(I.x,I.y,I.z),M.set(k,A,B).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-x),G.push(m++)}y.push(G)}for(let R=0;R<s;R++)for(let G=0;G<r;G++){let x=y[G][R],T=y[G+1][R],W=y[G+1][R+1],N=y[G][R+1];e>0&&(h.push(x,T,N),S+=3),t>0&&(h.push(T,W,N),S+=3)}c.addGroup(g,S,0),g+=S}function v(M){let I=m,S=new he,A=new P,R=0,G=M===!0?e:t,x=M===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),m++;let T=m;for(let W=0;W<=s;W++){let D=W/s*l+o,k=Math.cos(D),B=Math.sin(D);A.x=G*B,A.y=p*x,A.z=G*k,u.push(A.x,A.y,A.z),d.push(0,x,0),S.x=k*.5+.5,S.y=B*.5*x+.5,f.push(S.x,S.y),m++}for(let W=0;W<s;W++){let N=I+W,D=T+W;M===!0?h.push(D,D+1,N):h.push(D+1,D,N),R+=3}c.addGroup(g,R,M===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kh=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new P,M=new P,I=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],v),f(t[S+1],M),f(t[S+2],I),l(v,M,I,_)}function l(_,v,M,I){let S=I+1,A=[];for(let R=0;R<=S;R++){A[R]=[];let G=_.clone().lerp(M,R/S),x=v.clone().lerp(M,R/S),T=S-R;for(let W=0;W<=T;W++)W===0&&R===S?A[R][W]=G:A[R][W]=G.clone().lerp(x,W/T)}for(let R=0;R<S;R++)for(let G=0;G<2*(S-R)-1;G++){let x=Math.floor(G/2);G%2===0?(d(A[R][x+1]),d(A[R+1][x]),d(A[R][x])):(d(A[R][x+1]),d(A[R+1][x+1]),d(A[R+1][x]))}}function c(_){let v=new P;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new P;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=p(_)/2/Math.PI+.5,I=g(_)/Math.PI+.5;a.push(M,1-I)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],M=a[_+2],I=a[_+4],S=Math.max(v,M,I),A=Math.min(v,M,I);S>.9&&A<.1&&(v<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function m(){let _=new P,v=new P,M=new P,I=new P,S=new he,A=new he,R=new he;for(let G=0,x=0;G<r.length;G+=9,x+=6){_.set(r[G+0],r[G+1],r[G+2]),v.set(r[G+3],r[G+4],r[G+5]),M.set(r[G+6],r[G+7],r[G+8]),S.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),I.copy(_).add(v).add(M).divideScalar(3);let T=p(I);y(S,x+0,_,T),y(A,x+2,v,T),y(R,x+4,M,T)}}function y(_,v,M,I){I<0&&_.x===1&&(a[v]=_.x-1),M.x===0&&M.z===0&&(a[v]=I/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Yn=class extends ko{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ko().fromJSON(s))}return this}},YM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=JM(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ta(r,a,t,o,l,f,0),a}};function Pp(i,e,t,n,s){let r,a;if(s===cb(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Jf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Jf(r,i[r],i[r+1],a);return a&&cl(a,a.next)&&(na(a),a=a.next),a}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(cl(t,t.next)||Dt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ta(i,e,t,n,s,r,a){if(!i)return;!a&&r&&nb(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?$M(i,n,s,r):jM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),na(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ZM(_s(i),e,t),ta(i,e,t,n,s,r,2)):a===2&&KM(i,e,t,n,s,r):ta(_s(i),e,t,n,s,r,1);break}}}function jM(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&$s(s,o,r,l,a,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $M(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,g=Vh(f,m,e,t,n),_=Vh(y,p,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=g&&M&&M.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&$s(o,h,l,u,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&$s(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&$s(o,h,l,u,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&$s(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ZM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!cl(s,r)&&Rp(s,n,n.next,r)&&ia(s,r)&&ia(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),na(n),na(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function KM(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ab(a,o)){let l=Ip(a,o);a=_s(a,a.next),l=_s(l,l.next),ta(a,e,t,n,s,r,0),ta(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function JM(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Pp(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rb(c));for(s.sort(QM),r=0;r<s.length;r++)t=eb(s[r],t);return t}function QM(i,e){return i.x-e.x}function eb(i,e){let t=tb(i,e);if(!t)return e;let n=Ip(t,i);return _s(n,n.next),_s(t,t.next)}function tb(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&$s(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ia(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ib(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function ib(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function nb(i,e,t,n){let s=i;do s.z===0&&(s.z=Vh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sb(s)}function sb(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Vh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $s(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ab(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ob(i,e)&&(ia(i,e)&&ia(e,i)&&lb(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||cl(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cl(i,e){return i.x===e.x&&i.y===e.y}function Rp(i,e,t,n){let s=oo(Dt(i,e,t)),r=oo(Dt(i,e,n)),a=oo(Dt(t,n,i)),o=oo(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&ao(i,t,e)||r===0&&ao(i,n,e)||a===0&&ao(t,i,n)||o===0&&ao(t,e,n))}function ao(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function ob(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ia(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function lb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ip(i,e){let t=new Hh(i.i,i.x,i.y),n=new Hh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(i,e,t,n){let s=new Hh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cb(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Qf(e),ep(n,e);let a=e.length;t.forEach(Qf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ep(n,t[l]);let o=YM.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Qf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ep(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vo=class i extends Mt{constructor(e=new Yn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:hb,v,M=!1,I,S,A,R;g&&(v=g.getSpacedPoints(h),M=!0,d=!1,I=g.computeFrenetFrames(h,!1),S=new P,A=new P,R=new P),d||(p=0,f=0,m=0,y=0);let G=o.extractPoints(c),x=G.shape,T=G.holes;if(!Wn.isClockWise(x)){x=x.reverse();for(let me=0,L=T.length;me<L;me++){let de=T[me];Wn.isClockWise(de)&&(T[me]=de.reverse())}}let N=Wn.triangulateShape(x,T),D=x;for(let me=0,L=T.length;me<L;me++){let de=T[me];x=x.concat(de)}function k(me,L,de){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(L,de)}let B=x.length,J=N.length;function q(me,L,de){let Te,j,Se,De=me.x-L.x,Ce=me.y-L.y,E=de.x-me.x,w=de.y-me.y,Z=De*De+Ce*Ce,ae=De*w-Ce*E;if(Math.abs(ae)>Number.EPSILON){let ge=Math.sqrt(Z),le=Math.sqrt(E*E+w*w),Re=L.x-Ce/ge,we=L.y+De/ge,Ne=de.x-w/le,Ke=de.y+E/le,ye=((Ne-Re)*w-(Ke-we)*E)/(De*w-Ce*E);Te=Re+De*ye-me.x,j=we+Ce*ye-me.y;let Fe=Te*Te+j*j;if(Fe<=2)return new he(Te,j);Se=Math.sqrt(Fe/2)}else{let ge=!1;De>Number.EPSILON?E>Number.EPSILON&&(ge=!0):De<-Number.EPSILON?E<-Number.EPSILON&&(ge=!0):Math.sign(Ce)===Math.sign(w)&&(ge=!0),ge?(Te=-Ce,j=De,Se=Math.sqrt(Z)):(Te=De,j=Ce,Se=Math.sqrt(Z/2))}return new he(Te/Se,j/Se)}let se=[];for(let me=0,L=D.length,de=L-1,Te=me+1;me<L;me++,de++,Te++)de===L&&(de=0),Te===L&&(Te=0),se[me]=q(D[me],D[de],D[Te]);let ie=[],re,Ve=se.concat();for(let me=0,L=T.length;me<L;me++){let de=T[me];re=[];for(let Te=0,j=de.length,Se=j-1,De=Te+1;Te<j;Te++,Se++,De++)Se===j&&(Se=0),De===j&&(De=0),re[Te]=q(de[Te],de[Se],de[De]);ie.push(re),Ve=Ve.concat(re)}for(let me=0;me<p;me++){let L=me/p,de=f*Math.cos(L*Math.PI/2),Te=m*Math.sin(L*Math.PI/2)+y;for(let j=0,Se=D.length;j<Se;j++){let De=k(D[j],se[j],Te);Pe(De.x,De.y,-de)}for(let j=0,Se=T.length;j<Se;j++){let De=T[j];re=ie[j];for(let Ce=0,E=De.length;Ce<E;Ce++){let w=k(De[Ce],re[Ce],Te);Pe(w.x,w.y,-de)}}}let We=m+y;for(let me=0;me<B;me++){let L=d?k(x[me],Ve[me],We):x[me];M?(A.copy(I.normals[0]).multiplyScalar(L.x),S.copy(I.binormals[0]).multiplyScalar(L.y),R.copy(v[0]).add(A).add(S),Pe(R.x,R.y,R.z)):Pe(L.x,L.y,0)}for(let me=1;me<=h;me++)for(let L=0;L<B;L++){let de=d?k(x[L],Ve[L],We):x[L];M?(A.copy(I.normals[me]).multiplyScalar(de.x),S.copy(I.binormals[me]).multiplyScalar(de.y),R.copy(v[me]).add(A).add(S),Pe(R.x,R.y,R.z)):Pe(de.x,de.y,u/h*me)}for(let me=p-1;me>=0;me--){let L=me/p,de=f*Math.cos(L*Math.PI/2),Te=m*Math.sin(L*Math.PI/2)+y;for(let j=0,Se=D.length;j<Se;j++){let De=k(D[j],se[j],Te);Pe(De.x,De.y,u+de)}for(let j=0,Se=T.length;j<Se;j++){let De=T[j];re=ie[j];for(let Ce=0,E=De.length;Ce<E;Ce++){let w=k(De[Ce],re[Ce],Te);M?Pe(w.x,w.y+v[h-1].y,v[h-1].x+de):Pe(w.x,w.y,u+de)}}}oe(),fe();function oe(){let me=s.length/3;if(d){let L=0,de=B*L;for(let Te=0;Te<J;Te++){let j=N[Te];je(j[2]+de,j[1]+de,j[0]+de)}L=h+p*2,de=B*L;for(let Te=0;Te<J;Te++){let j=N[Te];je(j[0]+de,j[1]+de,j[2]+de)}}else{for(let L=0;L<J;L++){let de=N[L];je(de[2],de[1],de[0])}for(let L=0;L<J;L++){let de=N[L];je(de[0]+B*h,de[1]+B*h,de[2]+B*h)}}n.addGroup(me,s.length/3-me,0)}function fe(){let me=s.length/3,L=0;ze(D,L),L+=D.length;for(let de=0,Te=T.length;de<Te;de++){let j=T[de];ze(j,L),L+=j.length}n.addGroup(me,s.length/3-me,1)}function ze(me,L){let de=me.length;for(;--de>=0;){let Te=de,j=de-1;j<0&&(j=me.length-1);for(let Se=0,De=h+p*2;Se<De;Se++){let Ce=B*Se,E=B*(Se+1),w=L+Te+Ce,Z=L+j+Ce,ae=L+j+E,ge=L+Te+E;$e(w,Z,ae,ge)}}}function Pe(me,L,de){l.push(me),l.push(L),l.push(de)}function je(me,L,de){it(me),it(L),it(de);let Te=s.length/3,j=_.generateTopUV(n,s,Te-3,Te-2,Te-1);lt(j[0]),lt(j[1]),lt(j[2])}function $e(me,L,de,Te){it(me),it(L),it(Te),it(L),it(de),it(Te);let j=s.length/3,Se=_.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);lt(Se[0]),lt(Se[1]),lt(Se[3]),lt(Se[1]),lt(Se[2]),lt(Se[3])}function it(me){s.push(l[me*3+0]),s.push(l[me*3+1]),s.push(l[me*3+2])}function lt(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ub(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zo[s.type]().fromJSON(s)),new i(n,e.options)}},hb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],y=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-m),new he(y,1-g)]:[new he(o,1-l),new he(h,1-u),new he(f,1-m),new he(p,1-g)]}};function ub(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ho=class i extends kh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Go=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,m=new he;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let g=r+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let y=0;y<s;y++){let p=y*(n+1);for(let g=0;g<n;g++){let _=g+p,v=_,M=_+n+1,I=_+n+2,S=_+1;o.push(v,M,S),o.push(M,I,S)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wo=class i extends Mt{constructor(e=new Yn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Wn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let _=m[p];Wn.isClockWise(_)===!0&&(m[p]=_.reverse())}let y=Wn.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let _=m[p];f=f.concat(_)}for(let p=0,g=f.length;p<g;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let p=0,g=y.length;p<g;p++){let _=y[p],v=_[0]+u,M=_[1]+u,I=_[2]+u;n.push(v,M,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return db(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function db(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],m=[],y=[],p=[];for(let g=0;g<=n;g++){let _=[],v=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let S=I/t;u.x=-e*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(S+M,1-v),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let v=h[g][_+1],M=h[g][_],I=h[g+1][_],S=h[g+1][_+1];(g!==0||a>0)&&f.push(v,M,S),(g!==n-1||l<Math.PI)&&f.push(M,I,S)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qo=class i extends Mt{constructor(e=new Fo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new he,h=new P,u=[],d=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function y(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),_(),g()}function p(v){h=e.getPointAt(v/t,h);let M=a.normals[v],I=a.binormals[v];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,R=Math.sin(A),G=-Math.cos(A);l.x=G*M.x+R*I.x,l.y=G*M.y+R*I.y,l.z=G*M.z+R*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let I=(s+1)*(v-1)+(M-1),S=(s+1)*v+(M-1),A=(s+1)*v+M,R=(s+1)*(v-1)+M;m.push(I,S,R),m.push(S,A,R)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xo=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ms=class extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends Ms{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function tp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Lp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break n;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break i}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gh=class extends jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xd:r=e,o=2*t-n;break;case Yd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:a=e,l=2*n-t;break;case Yd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),y=m*m,p=y*m,g=-d*p+2*d*y-d*m,_=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*p+(1.5+f)*y+.5*m,M=f*p-f*y;for(let I=0;I!==o;++I)r[I]=g*a[h+I]+_*a[c+I]+v*a[l+I]+M*a[u+I];return r}},Wh=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},qh=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fb(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=t[u+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=or;var $n=class extends Wi{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=ar;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Wi{};Yo.prototype.ValueTypeName="color";var Tn=class extends Wi{};Tn.prototype.ValueTypeName="number";var Xh=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},An=class extends Wi{InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}};An.prototype.ValueTypeName="quaternion";An.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Wi{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=ar;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var En=class extends Wi{};En.prototype.ValueTypeName="vector";var jo=class{constructor(e="",t=-1,n=[],s=h0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ki(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gb(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Wi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=pb(l);l=tp(l,1,h),c=tp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Tn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,y){if(f.length!==0){let p=[],g=[];Lp(f,p,g,m),p.length!==0&&y.push(new u(d,p,g))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(let y in f){let p=[],g=[];for(let _=0;_!==d[m].morphTargets.length;++_){let v=d[m];p.push(v.time),g.push(v.morphTarget===y?1:0)}s.push(new Tn(".morphTargetInfluence["+y+"]",p,g))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(En,f+".position",d,"pos",s),n(An,f+".quaternion",d,"rot",s),n(En,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function mb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tn;case"vector":case"vector2":case"vector3":case"vector4":return En;case"color":return Yo;case"quaternion":return An;case"bool":case"boolean":return $n;case"string":return Zn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mb(i.type);if(i.times===void 0){let t=[],n=[];Lp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Gn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},bs=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},ws=new bs,en=class{constructor(e){this.manager=e!==void 0?e:ws,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};en.DEFAULT_MATERIAL_NAME="__DEFAULT";var xn={},Yh=class extends Error{constructor(e,t){super(e),this.response=t}},un=class extends en{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:s});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=xn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,y=0,p=new ReadableStream({start(g){_();function _(){u.read().then(({done:v,value:M})=>{if(v)g.close();else{y+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let S=0,A=h.length;S<A;S++){let R=h[S];R.onProgress&&R.onProgress(I)}g.enqueue(M),_()}},v=>{g.error(v)})}}});return new Response(p)}else throw new Yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Gn.add(e,c);let h=xn[e];delete xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete xn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jh=class extends en{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=$r("img");function l(){h(),Gn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var gr=class extends en{constructor(e){super(e)}load(e,t,n,s){let r=new Zt,a=new jh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},sa=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Dc=new He,ip=new P,np=new P,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qn,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$h=class extends ra{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$o=class extends sa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sp=new He,zr=new P,Uc=new P,Zh=class extends ra{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),Uc.copy(n.position),Uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uc),n.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp)}},Zo=class extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kh=class extends ra{constructor(){super(new bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kn=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jo=class extends en{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Gn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Gn.add(e,l),r.manager.itemStart(e)}};var Ss=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=rp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function rp(){return performance.now()}var xu="\\[\\]\\.:\\/",vb=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",yb="[^"+xu.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",_u),_b=/(WCOD+)?/.source.replace("WCOD",yb),Mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),bb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Sb=new RegExp("^"+xb+_b+Mb+bb+"$"),wb=["material","materials","bones","map"],Jh=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vb,"")}static parseTrackName(e){let t=Sb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Jh;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _S=new Float32Array(1);var Qo=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var el=class i{constructor(e,t,n,s){i.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}},ap=new he,tl=class{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ap.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ap).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);var hl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tb=new bn(-1,1,1,-1,0,1),Mu=class extends Mt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},Ab=new Mu,Li=class{constructor(e){this._mesh=new ft(Ab,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ts=class extends mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oa=class extends mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ts(hl),this.copyPass.material.blending=an,this.clock=new Ss}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(a instanceof oa?n=!0:a instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends mi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Dp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var xr=class i extends mi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ot(r,a,{type:pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ot(r,a,{type:pi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Dp;this.highPassUniforms=Jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=hl;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new oi,this.fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};xr.BlurDirectionX=new he(1,0);xr.BlurDirectionY=new he(0,1);var Up={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var pl=class extends mi{constructor(){super();let e=Up;this.uniforms=Jn.clone(e.uniforms),this.material=new Xo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===au&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ti=`
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
`,Np=ti,Op=i=>({uFogCool:i.cool,uFogWarm:i.warm,uSunDir:i.sun,uFogDensity:i.density,uDetail:i.detail}),qi=`
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,la=`
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
`,ca=`
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
`,Fp={vertexShader:`
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
    uniform vec3 uFogCool;
    uniform vec3 uFogWarm;
    uniform float uHorizonHaze;
    varying vec3 vDir;
    ${qi}
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
      // night flight: the horizon dissolves into the same haze as the distant city
      {
        vec2 a2 = normalize(d.xz + 1e-5), b2 = normalize(uSunDir.xz + 1e-5);
        float w2 = pow(max(dot(a2, b2), 0.0), 5.0) * 0.7;
        vec3 hz = mix(uFogCool, uFogWarm, w2);
        col = mix(col, hz, uHorizonHaze * exp(-abs(h - 0.005) * 22.0));
      }
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
  `},Bp={vertexShader:ca,fragmentShader:`
    uniform sampler2D uMap;
    uniform float uTime;
    uniform float uLights;
    uniform vec4 uBounds; // lonMin, lonMax, latMin, latMax (for the graticule)
    ${ti}
    ${qi}
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
  `},ml={vertexShader:ca,fragmentShader:`
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
    ${ti}
    ${qi}
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
        // lit windows between the streets: Manhattan glows as a whole at night, not just its lamps
        vec2 lot = floor(vec2(avc * 4.0, g.y * 2.0));
        float lit = smoothstep(0.25, 0.9, hash12(lot)) * (0.6 + 0.4 * fbm(p * m / 400.0));
        float far2 = clamp(fwidth(g.y) * 2.0, 0.0, 1.0);
        glow += mix(lit * lit, 0.35, far2) * 0.035 * (1.0 - pier);
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
  `},gl={vertexShader:ca,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform vec3 uZenith;
    uniform sampler2D uReflect;   // the scene mirrored in the water plane
    uniform mat4 uReflectMat;
    uniform float uReflectOn;
    uniform float uMirrorY;
    ${ti}
    ${qi}
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
  `},bu={vertexShader:`
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
    uniform float uNightK;      // night flight: dark silhouettes, brighter windows
    ${ti}
    ${qi}
    ${la}
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
      albedo *= mix(1.0, 0.3, uNightK);
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
      vec3 room = (glassy > 0.5 ? office : mix(warm, vec3(0.75, 0.84, 1.0), step(0.86, tint))) * (0.22 + 0.33 * hash12(cell + vSeed * 5.0)) * mix(1.0, 1.8, uNightK);
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
  `},zp={vertexShader:`
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
    ${ti}
    ${qi}
    ${la}
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
  `},kp={vertexShader:`
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
    ${ti}
    ${qi}
    ${la}
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
  `},Vp={vertexShader:`
    attribute float aSeed;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vH;
    ${qi}
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
    ${ti}
    ${qi}
    ${la}
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
  `},Hp={vertexShader:`
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
    ${ti}
    ${qi}
    ${la}
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
  `},Gp={vertexShader:`
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
    ${ti}
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
  `},Wp={vertexShader:`
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
    ${ti}
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 4.0);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(vColor * a * fade * uDetail, 1.0);
    }
  `},Su={vertexShader:`
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
    ${ti}
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
  `},wu={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
  `,fragmentShader:`
    uniform vec3 uColor;
    ${ti}
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
  `},qp={vertexShader:`
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
  `},Xp={vertexShader:`
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
  `},Yp={vertexShader:`
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
    ${ti}
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
  `},KS={vertexShader:ca,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uOn;
    uniform vec3 uPointer;
    uniform float uPointerOn;
    ${ti}
    ${qi}
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
  `},jp={vertexShader:ca,fragmentShader:`
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uZenith;
    ${ti}
    ${qi}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / 400.0 + vec2(uTime * 0.01, 0.0);
      float c = fbm(q) * 0.65 + fbm(q * 3.1 + 4.0) * 0.35;
      float a = smoothstep(0.52, 0.78, c);
      vec3 V = normalize(cameraPosition - vP);
      vec3 col = mix(uZenith * 2.2, hazeColor(-V) * 1.4, 0.5) * (0.6 + 0.6 * c);
      gl_FragColor = vec4(col, a * uOpacity);
    }
  `},ha={vertexShader:`
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
  `},$p={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `},Zp={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.028},uVignette:{value:.9},uAberration:{value:6e-4}},vertexShader:`
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
  `},JS={vertexShader:`
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
    ${ti}
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
  `};var vl=63710,em=-77.5,Cb=34.5,ua=Math.PI/180,tm=i=>Math.log(Math.tan(Math.PI/4+i*ua/2)),im=tm(Cb),da=i=>1/Math.cos(i*ua);function _i(i,e,t=0,n=new P){return n.set(vl*(e-em)*ua,t/100*da(i),-vl*(tm(i)-im))}function nm(i,e){let t=i/vl/ua+em,n=-e/vl+im;return{lat:(2*Math.atan(Math.exp(n))-Math.PI/2)/ua,lon:t}}var sm=(i,e)=>i*100/da(e),Kp=[40.7644,-73.973],Jp=[.001233,-.002967],Qp=[633e-6,457e-6],Qn=[{a:-3.75,name:"East End"},{a:-3.3,name:"York"},{a:-2.8,name:"1st"},{a:-2.3,name:"2nd"},{a:-1.8,name:"3rd"},{a:-1.35,name:"Lexington"},{a:-.9,name:"Park"},{a:-.45,name:"Madison"},{a:0,name:"5th"},{a:1,name:"6th"},{a:2,name:"7th"},{a:3,name:"8th"},{a:4,name:"9th"},{a:5,name:"10th"},{a:6,name:"11th"},{a:6.85,name:"12th"}];function As(i,e){return[Kp[0]+i*Jp[0]+(e-59)*Qp[0],Kp[1]+i*Jp[1]+(e-59)*Qp[1]]}var Xi={nyc:{lat:40.735,lon:-73.99},nyOffice:{lat:40.7459,lon:-73.9867,name:"New York",sub:"Commercial \xB7 276 Fifth Ave."},orlando:{lat:28.5434,lon:-81.3765},lakeEola:{lat:28.5434,lon:-81.3725},orlandoOffice:{lat:28.6555,lon:-81.2605,name:"Florida",sub:"Commercial \xB7 Residential \xB7 Winter Springs"},lakeJesup:{lat:28.722,lon:-81.235}};function rm(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Tu=i=>Math.sqrt(-2*Math.log(1-i()))*Math.cos(2*Math.PI*i()),fa=(i,e,t,n)=>{let s=(n-e)*111320*Math.cos((i+t)/2*Math.PI/180),r=(t-i)*110570;return Math.hypot(s,r)};function Et(i,e,t={}){return new St({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:e,...t})}var Di={transparent:!0,blending:er,depthWrite:!1},Es=()=>({depthWrite:!1,depthTest:!0,transparent:!0}),xl=class{constructor(){this.items=[]}add(e,t,n,s,r,a,o,l=0,c=-1,h=0){this.items.push([e,t,n,s,r,a,o,l,c,h])}mesh(e){let t=this.items.length,n=new Ri(1,1,1),s=new fi(n,e,Math.max(1,t)),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),l=new Pt;return this.items.forEach(([c,h,u,d,f,m,y,p,g,_],v)=>{l.position.set(c,_+f/2,h),l.rotation.set(0,m,0),l.scale.set(u,f,d),l.updateMatrix(),s.setMatrixAt(v,l.matrix),r[v]=y,a[v]=g,o[v]=p}),s.count=t,n.setAttribute("aSeed",new ei(r,1)),n.setAttribute("aId",new ei(a,1)),n.setAttribute("aStyle",new ei(o,1)),s.frustumCulled=!1,s}};function yl(i,e,t,n,s,r,a,o,l,c,h=-1,u=null){let d=a/c,f=e(),m=Math.cos(o),y=Math.sin(o),p=(v,M)=>[t+v*m+M*y,n-v*y+M*m],g=s,_=r;if(d>105&&e()<.85){let v=Math.min(d*.28,16+e()*22);i.add(t,n,s,r,v*c,o,f,l===1&&e()<.5?i.florida?3:0:l,h);let M=v,I=.6+e()*.22;if(e()<.45){let S=(d-v)*(.55+e()*.2);i.add(t,n,s*I,r*I,S*c,o,f,l,h,M*c),M+=S;let A=I*(.68+e()*.15);i.add(t,n,s*A,r*A,(d-M)*c,o,f,l,h,M*c),g=s*A,_=r*A}else i.add(t,n,s*I,r*I,(d-M)*c,o,f,l,h,M*c),g=s*I,_=r*I;i.add(t,n,g*.5,_*.5,(5+e()*7)*c,o,f,2,h,a);return}if(i.add(t,n,s,r,a,o,f,l,h),d>40&&d<=105&&e()<.3){let v=(6+e()*10)*c;i.add(t,n,s*.78,r*.78,v,o,f,l,h,a),a+=v,g=s*.78,_=r*.78}if(d>14){let[v,M]=p((e()-.5)*g*.3,(e()-.5)*_*.3);if(e()<(d>30?.55:.25)&&i.add(v,M,g*(.14+e()*.12),_*(.16+e()*.12),(2.5+e()*2.5)*c,o,f,2,h,a),u&&l===0&&d<95&&e()<.4){let[I,S]=p((e()-.5)*g*.6,(e()-.5)*_*.6);u.push([I,S,a,(5+e()*2.5)*c,e()])}}}function Pb(i,e,t=2048){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d",{willReadFrequently:!0});s.fillStyle="#000",s.fillRect(0,0,t,t);let r=o=>(o+e)/(2*e)*t;for(let{polys:o,color:l}of i){s.fillStyle=l;for(let c of o){s.beginPath();for(let h of c)h.forEach(([u,d],f)=>f?s.lineTo(r(u),r(d)):s.moveTo(r(u),r(d))),s.closePath();s.fill("evenodd")}}let a=s.getImageData(0,0,t,t).data;return(o,l)=>{let c=Math.floor(r(o)),h=Math.floor(r(l));if(c<0||h<0||c>=t||h>=t)return[0,0,0];let u=(h*t+c)*4;return[a[u],a[u+1],a[u+2]]}}function Au(){return{uAlignA:{value:[1e9,1e9,1,0]},uAlignAS:{value:[100,100]},uAlignB:{value:[1e9,1e9,1,0]},uAlignBS:{value:[100,100]},uAlignBO:{value:[0,0]},uHoods:{value:Array.from({length:8},()=>new P(1e9,1e9,1))}}}function _r(i,e,t=0){let[n,...s]=i,r=new Yn(n.map(([l,c])=>new he(l,-c)));s.forEach(l=>r.holes.push(new Yn(l.map(([c,h])=>new he(c,-h)))));let a=new Wo(r);a.rotateX(-Math.PI/2);let o=new ft(a,e);return o.position.y=t,o.frustumCulled=!1,o}function am(i,e,t=.02){let n=[],s=[],r=[],a=0,o=[0];for(let c=1;c<i.length;c++)a+=i[c].distanceTo(i[c-1]),o.push(a);i.forEach((c,h)=>{let u=i[Math.max(0,h-1)],d=i[Math.min(i.length-1,h+1)],f=new P().subVectors(d,u).setY(0).normalize(),m=new P(-f.z,0,f.x).multiplyScalar(e/2);n.push(c.x+m.x,c.y+t,c.z+m.z,c.x-m.x,c.y+t,c.z-m.z);let y=o[h]/a;if(s.push(y,0,y,1),h){let p=(h-1)*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}});let l=new Mt;return l.setAttribute("position",new ht(n,3)),l.setAttribute("uv",new ht(s,2)),l.setIndex(r),l}function pa(i,e){let t=i.length,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t*3);i.forEach(([h,u,d,f,m],y)=>{n.set([h.x,h.y,h.z],y*3),s.set([u.x,u.y,u.z],y*3),r[y]=d,a[y]=f,o.set([m.r,m.g,m.b],y*3)});let l=new Mt;l.setAttribute("position",new ct(n,3)),l.setAttribute("aEnd",new ct(s,3)),l.setAttribute("aPhase",new ct(r,1)),l.setAttribute("aSpeed",new ct(a,1)),l.setAttribute("aColor",new ct(o,3));let c=new Sn(l,Et(Wp,e,Di));return c.frustumCulled=!1,c}function om(i,e,t,n){let s=n.low,r={value:0},a={value:1},o={cool:{value:n.night?new _e(.075,.05,.085):new _e(.02,.026,.07)},warm:{value:new _e(.3,.12,.06)},sun:{value:new P(-.9,-.02,.36).normalize()},density:{value:1/400},detail:{value:1}},l={value:new _e(.006,.01,.04)},c=Op(o),h={uTime:r,uPixelRatio:a,fog:o,uZenith:l,hit:[],waterMeshes:[]},u={uReflect:{value:null},uReflectMat:{value:new He},uReflectOn:{value:0},uMirrorY:{value:0}};h.reflect=u;{let C=Et(Fp,{uSunDir:o.sun,uZenith:l,uHorizon:{value:new _e(.018,.022,.075)},uGlow:{value:new _e(.95,.36,.14)},uTime:r,uDay:{value:0},uPhoto:{value:e.sky},uPhotoOn:{value:e.sky?1:0},uFogCool:o.cool,uFogWarm:o.warm,uHorizonHaze:{value:n.night?1:0}},{side:$t,depthWrite:!1});h.sky=C;let U=new ft(new wn(10,48,24),C);U.renderOrder=-20,U.frustumCulled=!1,i.add(U)}{let C=t.map,U=_i(C.latMax,C.lonMin),F=_i(C.latMin,C.lonMax),H=new li(F.x-U.x,F.z-U.z);H.rotateX(-Math.PI/2);let $=Et(Bp,{uMap:{value:e.map},uTime:r,uLights:{value:1},uBounds:{value:[C.lonMin,C.lonMax,C.latMin,C.latMax]},...c},Es()),Q=new ft(H,$);Q.position.set((U.x+F.x)/2,-.6,(U.z+F.z)/2),Q.renderOrder=-10,Q.frustumCulled=!1,i.add(Q),h.map=$}let f=da(40.73)/100,m=_i(Xi.nyc.lat,Xi.nyc.lon),y=new Vt;y.position.copy(m),i.add(y);let p=(C,U,F=0)=>_i(C,U,F).sub(m),g=C=>C.map(([U,F])=>{let H=p(F,U);return[H.x,H.z]});{let C=Et(gl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},Es()),U=new ft(new li(1,1),C);h.waterMeshes.push(U),U.geometry.rotateX(-Math.PI/2),U.scale.set(900,1,900),U.position.y=-.3,U.renderOrder=-9,U.frustumCulled=!1,y.add(U),h.nycWater=U}let _=(C,U,F)=>Et(ml,{uMode:{value:C},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new he},uUnitsPerM:{value:f},uStreetCol:{value:new _e(F)},uDensity:{value:U},uTime:r,...Au(),...c},Es()),v=p(...As(0,59)),M=p(...As(1,59)).sub(v),I=p(...As(0,60)).sub(v),S=M.x*I.z-I.x*M.z,A=[I.z/S,-M.z/S,-I.x/S,M.x/S],R=(C,U)=>new P(v.x+M.x*C+I.x*(U-59),0,v.z+M.z*C+I.z*(U-59)),G=(C,U)=>{let F=C-v.x,H=U-v.z;return[A[0]*F+A[2]*H,A[1]*F+A[3]*H+59]},x=Math.atan2(-M.z,M.x);h.nycGrid={gridToLocal:R,localToGrid:G};let T=[],W=[],N=[];for(let[C,U]of Object.entries(t.nyc)){if(C.startsWith("_"))continue;let F=C==="Manhattan",H=ce=>Math.max(...ce.outer.map(([,pe])=>pe))<40.7045,$=F?U.filter(ce=>!H(ce)):U;F&&N.push(...U.filter(H).map(ce=>[g(ce.outer),...ce.holes.map(g)]));let Q=F?_(1,1,n.night?"#c9a786":"#ffe0bd"):_(0,C==="Brooklyn"||C==="Queens"?1:.7,"#ffb36b");F&&(Q.uniforms.uGridInv.value.set(A),Q.uniforms.uGridOrigin.value.set(m.x+v.x,m.z+v.z));let ee=$.map(ce=>[g(ce.outer),...ce.holes.map(g)]);ee.forEach(ce=>{let pe=_r(ce,Q,-.2);pe.renderOrder=-8,y.add(pe)}),T.push({polys:ee,color:F?"#ffff00":"#ff0000"}),F&&W.push(...ee)}{let C=_(2,1,"#ffd9a0");N.forEach(H=>{let $=_r(H,C,-.16);$.renderOrder=-7,y.add($)});let U=[],F=new _e(1.6,1.3,.9);for(let[H]of N){let $=0;for(let Q=0;Q<H.length;Q++){let[ee,ce]=H[Q],[pe,ve]=H[(Q+1)%H.length],X=Math.hypot(pe-ee,ve-ce);for(let te=25*f-$%(25*f);te<X;te+=25*f){let ue=new P(ee+(pe-ee)*te/X,.05,ce+(ve-ce)*te/X);U.push([ue,ue,0,0,F])}$+=X}}y.add(pa(U,{uTime:r,uPixelRatio:a,uSize:{value:10},...c}))}let D=[R(0,59.6),R(3,59.6),R(3,110),R(0,110)].map(C=>[C.x,C.z]);{let C=_(2,1,"#ffd9a0"),U=_r([D],C,-.15);U.renderOrder=-7,y.add(U);let F=[];for(let Q=0;Q<40;Q++){let ee=Q/40*Math.PI*2,ce=R(1.55+Math.cos(ee)*1.05,91.2+Math.sin(ee)*5);F.push([ce.x,ce.z])}let H=Et(gl,{uTime:r,uUnitsPerM:{value:f},uZenith:l,...u,...c},Es()),$=_r([F],H,-.1);h.waterMeshes.push($),$.renderOrder=-6,y.add($)}let B=Pb([...T.filter(C=>C.color==="#ff0000"),...T.filter(C=>C.color==="#ffff00")],500,s?2048:3072),J=(C,U)=>B(C,U)[0]>128,q=(C,U)=>B(C,U)[1]>128,se=new xl,ie=[],re=rm(1811),Ve=[],We=(C,U,F)=>Ve.some(([H,$,Q])=>Math.hypot(C-H,U-$)<Q+F),oe=(C,U,F)=>{let H=16+re()*22,$=Math.exp(-((fa(C,U,40.7565,-73.9815)/1150)**2)),Q=Math.exp(-((fa(C,U,40.7078,-74.0095)/640)**2)),ee=Math.exp(-((fa(C,U,40.7535,-74.0015)/330)**2)),ce=Math.exp(-(((F-84)/28)**2))*(F>59?1:0),pe=Math.exp(Tu(re)*.45);return H+=$*135*pe+Q*120*pe+ee*150*pe+ce*30*re(),F>110&&(H*=.7),Math.min(H,330)},fe=(C,U,F,H,$,Q=1,ee=-1,ce=x,pe=[])=>{let ve=p(C,U),X=f;se.add(ve.x,ve.z,F*X,H*X,$*X,ce,re(),Q,ee);let te=$;for(let[ue,Ae,Ye]of pe)se.add(ve.x,ve.z,ue*X,Ae*X,Ye*X,ce,re(),Q,ee,te*X),te+=Ye;return Ve.push([ve.x,ve.z,Math.max(F,H)*X*.8]),ve.clone().setY(te*X)};fe(40.7484,-73.9857,130,60,320,0,-1,x,[[60,40,60],[12,12,63]]),fe(40.713,-74.0132,62,62,417,1,-1,x+.785,[[6,6,124]]),fe(40.7516,-73.9755,45,45,275,0,-1,x,[[25,25,30],[6,6,14]]),fe(40.766,-73.981,45,30,472,1),fe(40.7615,-73.9718,28,28,426,1),fe(40.7649,-73.9775,18,40,435,1),fe(40.7656,-73.979,40,30,306,1),fe(40.754,-74.001,60,45,387,1),fe(40.7545,-74.0025,45,40,308,1),fe(40.7531,-73.979,50,50,427,1),fe(40.7553,-73.9845,45,40,366,1),fe(40.7593,-73.98,40,30,259,0),fe(40.7116,-74.0112,50,50,298,1),fe(40.7104,-74.0108,50,50,297,1),fe(40.7069,-74.0089,40,35,283,0),fe(40.6923,-73.9853,40,40,325,1,-1,0);let ze=[["Office",1.6,47.5,55,40,240,1],["Retail",-.15,55.5,60,30,34,0],["Industrial",6.35,27.5,120,60,18,0],["Multifamily",3.5,64.5,50,35,128,0],["Hospitality",2.35,45.5,45,40,190,1],["Healthcare",-2.95,31.5,90,60,92,0],["Mixed use",5.6,37.5,55,50,262,1],["Land development",6.1,41.5,110,55,2,0],["Storage",6,21.5,70,50,36,0],["Restaurants",1.7,12.5,30,22,14,0],["Churches",4.3,71.5,25,45,28,0],["Special purpose",6.35,35.5,140,60,34,0]];h.typeTargets=ze.map(([C,U,F,H,$,Q,ee],ce)=>{let pe=R(U,F),ve=f;return se.add(pe.x,pe.z,H*ve,$*ve,Q*ve,x,re(),ee,ce),C==="Churches"&&se.add(pe.x,pe.z+.12,7*ve,7*ve,46*ve,x,re(),0,ce,28*ve),Ve.push([pe.x,pe.z,Math.max(H,$)*ve*.7]),{name:C,local:pe.clone().setY((C==="Churches"?74:Q)*ve+.05)}});let Pe=M.length(),je=I.length(),$e=M.clone().normalize(),it=I.clone().normalize(),lt=s?42:28;for(let C=0;C<Qn.length-1;C++){let U=Qn[C].a,F=Qn[C+1].a;for(let H=1;H<220;H++){if(U>=0&&F<=3&&H>=59&&H<110)continue;let $=(F-U)*Pe,Q=je,ee=15*f,ce=10*f,pe=Math.max(1,Math.round(($-2*ee)/(lt*f))),ve=R(U,H),[X,te]=As((U+F)/2,H+.5),ue=oe(X,te,H),Ae=ue>150&&re()<.55,Ye=Ae?1:2,qe=Ae?Math.max(1,Math.round(pe/3)):pe;for(let Qe=0;Qe<qe;Qe++)for(let et=0;et<Ye;et++){let at=ee+($-2*ee)*(Qe+.5)/qe,ut=ce+(Q-2*ce)*(et+.5)/Ye,tt=ve.x+$e.x*at+it.x*ut,Ge=ve.z+$e.z*at+it.z*ut;if(!q(tt,Ge)||We(tt,Ge,.1)||re()<.06)continue;let nt=($-2*ee)/qe*(.86+re()*.1),b=(Q-2*ce)/Ye*(.84+re()*.12),O=Ae?ue*(.8+re()*.5):oe(X,te,H)*(.6+re()*.5);O=Math.max(10,O)*f,yl(se,re,tt,Ge,nt,b,O,x,O/f>140?re()<.8?1:0:re()<.08?1:0,f,-1,ie)}}}{let C=(s?55:42)*f,U=p(40.7,-74.02),F=p(40.742,-73.97);for(let H=U.x;H<F.x;H+=C)for(let $=F.z;$<U.z;$+=C){let[Q,ee]=G(H,$);if(!(ee<1.5||ee<14&&Q>1)||!q(H,$)||We(H,$,C*.5))continue;let pe=Math.floor(H/(5*f*100))*31+Math.floor($/(5*f*100)),ve=x+Math.sin(pe*12.9898)*43758.5453%1*.9,X={lat:40.735+-$/(110570*f),lon:-73.99+H/(111320*Math.cos(40.73*Math.PI/180)*f)},te=oe(X.lat,X.lon,0)*(.5+re()*.6);re()<.12||yl(se,re,H+(re()-.5)*C*.3,$+(re()-.5)*C*.3,C*(.6+re()*.3),C*(.6+re()*.3),Math.max(9,te)*f,ve,te>140?1:0,f,-1,ie)}}{let C=[[40.6925,-73.987,520,160],[40.7465,-73.944,520,140],[40.718,-74.036,600,170],[40.745,-74.029,400,60]],U=(s?120:85)*f,F=(s?7e3:9500)*f,H=p(40.73,-73.975);for(let $=H.x-F;$<H.x+F;$+=U)for(let Q=H.z-F;Q<H.z+F;Q+=U){if(Math.hypot($-H.x,Q-H.z)>F||q($,Q)||!J($,Q)||re()<.38)continue;let ee={lat:Xi.nyc.lat-Q/(110570*f)*1,lon:Xi.nyc.lon+$/(111320*Math.cos(40.73*Math.PI/180)*f)},ce=9+re()*14;for(let[ve,X,te,ue]of C)ce+=ue*Math.exp(-((fa(ee.lat,ee.lon,ve,X)/te)**2))*Math.exp(Tu(re)*.4);let pe=Math.floor($/(6*U))*.37+Math.floor(Q/(6*U))*.21;yl(se,re,$+(re()-.5)*U*.3,Q+(re()-.5)*U*.3,U*(.45+re()*.3),U*(.45+re()*.35),ce*f,pe,ce>120?1:0,f,-1,ce<60?ie:null)}}let me={uBrick:{value:e.brick},uGlass:{value:e.glass},uFacadeOn:{value:e.brick&&e.glass&&!n.night?1:0}},L={uTime:r,uUnitsPerM:{value:f},uHot:{value:-1},uHotOn:{value:0},uZenith:l,uNightK:{value:n.night?1:0},...me,...c};if(n.night){let C=150*f;se.items=se.items.filter(U=>U[9]+U[4]>C).map(U=>{let F=U.slice();return F[4]+=F[9],F[9]=0,F}),ie.length=0}let de=se.mesh(Et(bu,L));y.add(de);{let C=new Gi(.5,.5,.9,10,1,!1).toNonIndexed();C.translate(0,.95,0);let U=new Gi(0,.56,.38,10,1,!0).toNonIndexed();U.translate(0,1.59,0);let F=new Ri(.8,.5,.8).toNonIndexed();F.translate(0,.25,0);let H=[C,U,F],$=H.reduce((ue,Ae)=>ue+Ae.attributes.position.count,0),Q=new Float32Array($*3),ee=new Float32Array($*3),ce=new Float32Array($),pe=0;H.forEach((ue,Ae)=>{Q.set(ue.attributes.position.array,pe*3),ee.set(ue.attributes.normal.array,pe*3),ce.fill(Ae,pe,pe+ue.attributes.position.count),pe+=ue.attributes.position.count});let ve=new Mt;ve.setAttribute("position",new ct(Q,3)),ve.setAttribute("normal",new ct(ee,3)),ve.setAttribute("aPart",new ct(ce,1));let X=new fi(ve,Et(zp,{uUnitsPerM:{value:f},uZenith:l,...c}),Math.max(1,ie.length)),te=new Pt;ie.forEach(([ue,Ae,Ye,qe,Qe],et)=>{te.position.set(ue,Ye,Ae),te.rotation.set(0,Qe*6,0),te.scale.set(qe,qe*1.15,qe),te.updateMatrix(),X.setMatrixAt(et,te.matrix)}),X.count=ie.length,X.frustumCulled=!1,y.add(X)}h.nycBuildings={mesh:de,uniforms:L,count:se.items.length};{let C=[[40.7118,-74.0005,40.7022,-73.9893,40,84,"#ffe6c4"],[40.7153,-73.9938,40.6993,-73.9858,41,101,"#d6e2ff"],[40.7172,-73.9832,40.7108,-73.96,41,102,"#ffe6c4"],[40.7604,-73.9615,40.7506,-73.9405,40,106,"#d6e2ff"],[40.85,-73.9445,40.854,-73.965,65,184,"#e8eeff"],[40.6112,-74.033,40.6017,-74.0573,69,211,"#e8eeff"]],U=[],F=[],H=[],$=new oi({color:new _e(.03,.035,.05)});for(let[Q,ee,ce,pe,ve,X,te]of C){let ue=p(Q,ee,ve),Ae=p(ce,pe,ve),Ye=new ft(am([ue,Ae],26*f,0),Et(Su,{uColor:{value:new _e(te)},uIntensity:{value:.9},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Di));Ye.frustumCulled=!1,y.add(Ye);let qe=ue.clone().lerp(Ae,.24),Qe=ue.clone().lerp(Ae,.76);for(let tt of[qe,Qe]){let Ge=new ft(new Ri(10*f,X*f,16*f),$);Ge.position.set(tt.x,X*f/2,tt.z),Ge.rotation.y=Math.atan2(Ae.x-ue.x,Ae.z-ue.z),y.add(Ge)}let et=(X-ve)*f,at=s?24:44,ut=new _e(te).multiplyScalar(2.2);for(let tt=0;tt<=at;tt++){let Ge=tt/at,nt=qe.clone().lerp(Qe,Ge);nt.y+=et*(1-4*Ge*(1-Ge))*.92+.05,F.push([nt,nt,0,0,ut])}for(let[tt,Ge]of[[ue,qe],[Qe,Ae]])for(let nt=0;nt<=10;nt++){let b=tt.clone().lerp(Ge,nt/10);b.y+=et*(tt===ue?nt/10:1-nt/10)*.9,F.push([b,b,0,0,ut])}for(let tt=0;tt<(s?14:30);tt++){let Ge=tt%2===0;H.push([Ge?ue:Ae,Ge?Ae:ue,Math.random(),.02+Math.random()*.02,Ge?new _e(2.2,2,1.7):new _e(2.2,.2,.1)])}}y.add(pa(F,{uTime:r,uPixelRatio:a,uSize:{value:18},...c})),y.add(pa(H,{uTime:r,uPixelRatio:a,uSize:{value:22},...c}))}{let C=[],U=new _e(2,1.85,1.6),F=new _e(2.4,.18,.08),H=s?6:12;Qn.forEach(({a:$},Q)=>{if($<-3.6)return;let ee=Q%2===0;for(let ce=1;ce<200;ce+=20){let pe=R($,ce),ve=R($,ce+20);if(!(!q(pe.x,pe.z)||!q(ve.x,ve.z))&&!($>0&&$<3&&ce+20>59&&ce<110)){pe.y=ve.y=.02;for(let X=0;X<H;X++)C.push([ee?pe:ve,ee?ve:pe,Math.random(),.03+Math.random()*.03,ee?U:F])}}});for(let $ of[14,23,34,42,57,72,79,86,96,116,125])for(let Q=0;Q<Qn.length-1;Q++){let ee=R(Qn[Q].a,$),ce=R(Qn[Q+1].a,$);if(!(!q(ee.x,ee.z)||!q(ce.x,ce.z))){ee.y=ce.y=.02;for(let pe=0;pe<3;pe++){let ve=pe%2===0;C.push([ve?ee:ce,ve?ce:ee,Math.random(),.06+Math.random()*.05,ve?U:F])}}}y.add(pa(C,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}{let C=p(40.6892,-74.0445),U=new Vt;U.position.copy(C),U.scale.setScalar(f),U.rotation.y=-Math.PI*.72;let F=(ue,Ae)=>new St({vertexShader:`varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){ vY = position.y; vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`uniform vec3 uColor; uniform vec3 uRim; uniform float uTop;
        ${Np}
        varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){
          vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vP);
          float flood = 0.55 + 0.45 * max(dot(N, normalize(vec3(0.2, 0.55, 0.0) + V * 0.8)), 0.0);   // floodlights from the island
          float fall = 1.0 - 0.35 * clamp(vY / uTop, 0.0, 1.0);
          float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
          vec3 col = uColor * flood * fall + uRim * rim * 0.8;
          gl_FragColor = vec4(applyFog(col, vP), 1.0);
        }`,uniforms:{uColor:{value:new _e(...ue)},uRim:{value:new _e(...Ae)},uTop:{value:93},...c}}),H=F([.3,.68,.58],[.6,1,.9]),$=F([.085,.075,.065],[.14,.12,.09]),Q=(ue,Ae,Ye,qe,Qe,et=0,at=0)=>{let ut=new ft(ue,Ae);return ut.position.set(Ye,qe,Qe),ut.rotation.set(et,0,at),U.add(ut),ut},ee=new Yn;for(let ue=0;ue<22;ue++){let Ae=ue/22*Math.PI*2,Ye=ue%2?36:52;ue?ee.lineTo(Math.cos(Ae)*Ye,Math.sin(Ae)*Ye):ee.moveTo(Math.cos(Ae)*Ye,Math.sin(Ae)*Ye)}let ce=new Vo(ee,{depth:9,bevelEnabled:!1});ce.rotateX(-Math.PI/2),Q(ce,$,0,0,0),Q(new Gi(9.5,13,38,4,1),$,0,28,0).rotation.y=Math.PI/4,Q(new Gi(10.5,10.5,2.5,4,1),$,0,47,0).rotation.y=Math.PI/4,Q(new Gi(3.4,6.2,30,16),H,0,63,0),Q(new wn(3.6,16,10),H,0,78,0),Q(new wn(2.3,16,12),H,0,82.5,.6);for(let ue=0;ue<7;ue++){let Ae=-.95+ue/6*1.9;Q(new Gi(.05,.35,4.2,5),H,Math.sin(Ae)*2.6,84.5,Math.cos(Ae)*2.6*.6+.6).rotation.set(Math.cos(Ae)*.9,0,-Math.sin(Ae)*.9)}Q(new Gi(.9,1.2,13,10),H,3.2,86,0,0,-.18),Q(new Gi(1,.6,2.4,10),H,4.4,92.4,0),Q(new Ri(1.2,6.5,4.2),H,-4,70,.6,0,.25);let pe=new ft(new li(1,1),Et(ha,{uColor:{value:new _e(1,.78,.4)},uIntensity:{value:2.6}},Di));pe.position.set(4.4,94.5,0),pe.scale.setScalar(11),U.add(pe);let ve=new ft(new li(1,1),Et(ha,{uColor:{value:new _e(1,.95,.8)},uIntensity:{value:4}},Di));ve.position.copy(pe.position),ve.scale.setScalar(3.2),U.add(ve);let X=new ft(new li(1,1),Et(ha,{uColor:{value:new _e(.55,.9,.8)},uIntensity:{value:.18}},Di));X.position.set(0,40,0),X.scale.setScalar(120),U.add(X);let te=new Vt;te.position.copy(U.position),te.scale.copy(U.scale);for(let ue of[pe,ve,X])U.remove(ue),ue.position.applyAxisAngle(new P(0,1,0),U.rotation.y),te.add(ue);U.traverse(ue=>{ue.frustumCulled=!1}),te.traverse(ue=>{ue.frustumCulled=!1}),y.add(U,te),h.billboards=[pe,ve,X]}let j=da(28.6)/100,Se=_i(28.6,-81.32),De=new Vt;De.position.copy(Se),i.add(De);let Ce=(C,U,F=0)=>_i(C,U,F).sub(Se),E=rm(1875);{let C=Et(ml,{uMode:{value:0},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new he},uUnitsPerM:{value:j},uStreetCol:{value:new _e("#ffad5c")},uDensity:{value:1},uTime:r,...Au(),...c},Es());h.orlGround=C;let U=new ft(new Go(0,1,96),C);U.geometry.rotateX(-Math.PI/2),U.scale.setScalar(380),U.position.y=-.2,U.renderOrder=-8,U.frustumCulled=!1,De.add(U)}let Z=[["Lake Eola",28.5434,-81.3725,165,150,0],["Lake Lucerne",28.5335,-81.3795,170,110,.3],["Lake Cherokee",28.531,-81.3685,120,90,0],["Lake Davis",28.5293,-81.3737,130,110,.2],["Lake Ivanhoe",28.5665,-81.378,280,620,.15],["Lake Highland",28.56,-81.369,150,130,0],["Lake Dot",28.552,-81.385,100,90,0],["Lake Adair",28.565,-81.399,260,300,0],["Lake Concord",28.564,-81.3925,150,120,0],["Lake Underhill",28.534,-81.333,700,380,.2],["Lake Baldwin",28.569,-81.322,420,360,0],["Lake Virginia",28.5915,-81.342,620,520,.4],["Lake Maitland",28.625,-81.355,900,800,.2],["Lake Killarney",28.603,-81.375,520,420,0],["Lake Howell",28.628,-81.29,600,700,.3],["Red Bug Lake",28.648,-81.266,260,200,.5],["Lake Jesup",28.722,-81.235,7200,2500,.28],["Lake Fairview",28.59,-81.405,700,600,0],["Lake Rowena",28.564,-81.362,180,160,0],["Lake Barton",28.59,-81.32,300,250,.3],["Lake Burkett",28.61,-81.275,400,280,.6]].map(([C,U,F,H,$,Q])=>{let ee=Ce(U,F);return{name:C,x:ee.x,z:ee.z,rx:H*j,rz:$*j,rot:Q}});for(let C=0;C<(s?70:140);C++){let U=28.4+E()*.42,F=-81.52+E()*.36,H=Ce(U,F),$=(60+Math.pow(E(),2)*420)*j;Z.some(Q=>Math.hypot(Q.x-H.x,Q.z-H.z)<Q.rx+$+.5)||fa(U,F,28.5415,-81.379)<900||Z.push({name:"",x:H.x,z:H.z,rx:$,rz:$*(.6+E()*.6),rot:E()*3})}let ae=(C,U,F=0)=>Z.some(H=>{let $=C-H.x,Q=U-H.z,ee=Math.cos(H.rot),ce=Math.sin(H.rot),pe=($*ee-Q*ce)/(H.rx+F),ve=($*ce+Q*ee)/(H.rz+F);return pe*pe+ve*ve<1});{let C=Et(gl,{uTime:r,uUnitsPerM:{value:j},uZenith:l,...u,...c},Es());for(let U of Z){let F=[],$=E()*10;for(let ee=0;ee<40;ee++){let ce=ee/40*Math.PI*2,pe=1+.08*Math.sin(ce*3+$)+.05*Math.sin(ce*5+$*2),ve=Math.cos(ce)*U.rx*pe,X=Math.sin(ce)*U.rz*pe,te=Math.cos(U.rot),ue=Math.sin(U.rot);F.push([U.x+ve*te+X*ue,U.z-ve*ue+X*te])}let Q=_r([F],C,-.15);Q.renderOrder=-7,De.add(Q),h.waterMeshes.push(Q)}}let ge=[["I-4",46,[[28.43,-81.47],[28.475,-81.432],[28.507,-81.4],[28.528,-81.39],[28.546,-81.3855],[28.57,-81.377],[28.6,-81.367],[28.64,-81.354],[28.668,-81.343],[28.7,-81.33],[28.735,-81.318]]],["SR 408",36,[[28.537,-81.48],[28.537,-81.42],[28.5405,-81.392],[28.5395,-81.36],[28.537,-81.32],[28.53,-81.27],[28.528,-81.21]]],["SR 436",28,[[28.46,-81.307],[28.52,-81.309],[28.56,-81.31],[28.6,-81.318],[28.64,-81.33],[28.668,-81.34],[28.7,-81.355]]],["SR 417",34,[[28.5,-81.2],[28.56,-81.22],[28.62,-81.24],[28.68,-81.27],[28.72,-81.29]]],["Red Bug Lake Rd",22,[[28.6555,-81.33],[28.6545,-81.3],[28.6555,-81.262],[28.656,-81.225]]],["Tuskawilla Rd",20,[[28.62,-81.2605],[28.6555,-81.2605],[28.69,-81.256],[28.704,-81.254]]],["SR 434",24,[[28.697,-81.36],[28.6985,-81.3],[28.696,-81.25],[28.69,-81.2]]],["Orange Ave",18,[[28.5,-81.379],[28.541,-81.379],[28.58,-81.378]]]],le=[];{let C=[],U=new _e(2,1.85,1.6),F=new _e(2.4,.18,.08);for(let[,H,$]of ge){let Q=$.map(([ve,X])=>Ce(ve,X)),ce=new mr(Q).getPoints(Q.length*12),pe=new ft(am(ce,H*j,.03),Et(Su,{uColor:{value:new _e("#ffb066")},uIntensity:{value:H>30?.75:.45},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},Di));pe.frustumCulled=!1,De.add(pe);for(let ve=1;ve<ce.length;ve++)if(le.push([ce[ve-1],ce[ve]]),ve%2===0){let X=ce[ve-2].clone().setY(.05),te=ce[ve].clone().setY(.05),ue=H>30?s?2:4:1;for(let Ae=0;Ae<ue;Ae++){let Ye=Ae%2===0;C.push([Ye?X:te,Ye?te:X,Math.random(),.15+Math.random()*.15,Ye?U:F])}}}De.add(pa(C,{uTime:r,uPixelRatio:a,uSize:{value:16},...c}))}let Re=(C,U,F)=>le.some(([H,$])=>{let Q=$.x-H.x,ee=$.z-H.z,ce=Math.max(0,Math.min(1,((C-H.x)*Q+(U-H.z)*ee)/(Q*Q+ee*ee)));return Math.hypot(C-H.x-Q*ce,U-H.z-ee*ce)<F}),we=Ce(28.5434,-81.3725),Ne=new xl;Ne.florida=!0;{let C=Ce(28.5415,-81.3795),U=60*j;h.downtownGrid={origin:C.clone().add(new P(-30*j,0,-30*j)),block:120};for(let F=C.x-16*U;F<C.x+16*U;F+=U)for(let H=C.z-16*U;H<C.z+16*U;H+=U){let $=Math.hypot(F-C.x,H-C.z)/j;if($>1300||ae(F,H,25*j)||Re(F,H,30*j)||E()<.3||F>we.x+120*j||Math.hypot(F-we.x,H-we.z)<260*j)continue;let Q=Math.exp(-(($/420)**2)),ee=8+E()*18+Q*120*Math.exp(Tu(E)*.45);ee=Math.min(ee,140),yl(Ne,E,F+(E()-.5)*U*.08,H+(E()-.5)*U*.08,U*(.55+E()*.25),U*(.55+E()*.25),ee*j,0,ee>60&&E()<.75?1:3,j)}}{let C=Ce(28.5446,-81.377),U=15,F=12*j,H=1.6*j,$=new Ri(1,1,1),Q=Et(Yp,{uHot:{value:-1},uDraw:{value:0},uTime:r,uCount:{value:U},uZenith:l,...c},{transparent:!1}),ee=new fi($,Q,U),ce=new Float32Array(U),pe=new Pt;for(let ve=0;ve<U;ve++){let X=1-ve*.012;pe.position.set(C.x,6*j+ve*(F+H)+F/2,C.z),pe.rotation.set(0,.35+ve*.012,0),pe.scale.set(44*j*X,F,30*j*X),pe.updateMatrix(),ee.setMatrixAt(ve,pe.matrix),ce[ve]=ve}$.setAttribute("aFloor",new ei(ce,1)),ee.frustumCulled=!1,ee.userData.keep=!0,De.add(ee),h.tower={mesh:ee,uniforms:Q.uniforms,floorLocal:ve=>C.clone().setY(6*j+ve*(F+H)+F/2),base:C,n:U}}{let C=Ce(28.5432,-81.3727,12),U=new ft(new li(1,1),Et(ha,{uColor:{value:new _e(.6,.8,1)},uIntensity:{value:1.1}},Di));U.position.copy(C),U.scale.setScalar(40*j),De.add(U),h.billboards.push(U),h.fountain=U}let Ke=[],ye=[],Fe=[],Ze=[],Je=[],Ue=[],rt=(C,U,F,H)=>{E()<H?Ze.push([C,U,(8+E()*6)*j,E()]):Fe.push([C,U,F*j,E()])},st=(C,U,F,H,$,Q,ee,ce,pe,ve=1,X=.35)=>{Ke.push([C,U,F,H,$,Q,E()]),E()<.28&&ye.push([C+ee*.55,U+ce*.55,8*j,4.5*j,Q,E()]),E()<.65&&rt(C+ee*.95+(E()-.5)*pe*.6,U+ce*.95+(E()-.5)*pe*.6,(5+E()*5)*ve,X),E()<.4&&rt(C-ee*.8+(E()-.5)*pe*.6,U-ce*.8+(E()-.5)*pe*.6,(4+E()*3.5)*ve,X*1.3)},bt=[[28.6555,-81.2605,s?1300:1900,s?.55:.8],[28.638,-81.29,s?700:1100,.6],[28.672,-81.233,s?600:1e3,.55],[28.565,-81.392,s?600:900,.6],[28.524,-81.362,s?500:800,.55],[28.5428,-81.3645,s?600:820,.8],[28.5545,-81.369,s?400:550,.7],[28.5432,-81.3683,420,.85]],z=Ce(28.5415,-81.3795);{let C=22*j,U=34*j,F=14*j,H=U*2+F,$=H*4;for(let[te,ue,Ae,Ye]of bt){let qe=Ce(te,ue),Qe=Ae*j;for(let et=qe.x-Qe;et<qe.x+Qe;et+=$)for(let at=qe.z-Qe;at<qe.z+Qe;at+=$){if(Math.hypot(et-qe.x,at-qe.z)>Qe-$*.3)continue;let ut=(E()-.5)*.8,tt=Math.cos(ut),Ge=Math.sin(ut),nt=(O,Y)=>[et+O*tt-Y*Ge,at+O*Ge+Y*tt];for(let O=0;O<=4;O++){let Y=-$/2+O*H,[K,V]=nt(-$/2,Y),[xe,be]=nt($/2,Y);Ue.push([K,V,xe,be,9*j])}for(let O of[-$/2,$/2]){let[Y,K]=nt(O,-$/2),[V,xe]=nt(O,$/2);Ue.push([Y,K,V,xe,9*j])}let b=Math.floor(($-2*10*j)/C);for(let O=0;O<4;O++)for(let Y=0;Y<b;Y++)for(let K of[-1,1]){if(E()>Ye)continue;let V=-$/2+10*j+(Y+.5)*C,xe=-$/2+O*H+H/2,be=xe+K*(U/2+2*j),[Ee,Le]=nt(V,be);if(ae(Ee,Le,16*j)||Re(Ee,Le,24*j)||Ee<we.x+120*j&&Math.hypot(Ee-z.x,Le-z.z)<1150*j||Math.hypot(Ee-we.x,Le-we.z)<250*j)continue;let Me=nt(V,xe);st(Ee,Le,(12+E()*6)*j,(10+E()*4)*j,(E()<.3?6:3.3)*j,-ut,Me[0]-Ee,Me[1]-Le,C)}}}let Q=Ce(28.556,-81.356),ee=130*j,ce=210*j,pe=1040*j,ve=Q.x-pe,X=Q.z-pe;for(let te=ve;te<=Q.x+pe+1e-6;te+=ee)Je.push([new P(te,.06,X),new P(te,.06,Q.z+pe)]);for(let te=X;te<=Q.z+pe+1e-6;te+=ce)Je.push([new P(ve,.06,te),new P(Q.x+pe,.06,te)]);for(let te=ve;te<Q.x+pe-1e-6;te+=ee)for(let ue=X;ue<Q.z+pe-1e-6;ue+=ce){Je.push([new P(te+ee/2,.06,ue+8*j),new P(te+ee/2,.06,ue+ce-8*j)]);let Ae=6+Math.floor(E()*3);for(let Ye=1;Ye<Ae;Ye++)Je.push([new P(te+8*j,.06,ue+ce*Ye/Ae),new P(te+ee-8*j,.06,ue+ce*Ye/Ae)]);for(let Ye=0;Ye<2;Ye++)for(let qe=0;qe<Ae;qe++){let Qe=te+ee*(Ye===0?.27:.73),et=ue+ce*(qe+.5)/Ae;if(ae(Qe,et,12*j)||E()<.08)continue;let at=(te+ee/2-Qe)*.9;st(Qe,et,ee/2*.42,ce/Ae*.6,(E()<.25?6:3.3)*j,0,at,0,ce/Ae,1.5,.12)}}h.parcelCenter=Q,h.parcelGrid={origin:new P(ve,0,X),bw:130,bh:210,span:1040}}{let C=[];for(let H=0;H<48;H++){let $=H/48*Math.PI*2;C.push([we.x+Math.cos($)*255*j,we.z+Math.sin($)*235*j])}let U=Et(ml,{uMode:{value:2},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new he},uUnitsPerM:{value:j},uStreetCol:{value:new _e("#ffd9a0")},uDensity:{value:1},uTime:r,...Au(),...c},Es()),F=_r([C],U,-.18);F.renderOrder=-7.5,De.add(F)}for(let C=0;C<70;C++){let U=E()*Math.PI*2,F=(185+E()*60)*j,H=we.x+Math.cos(U)*F,$=we.z+Math.sin(U)*F*.92;ae(H,$,8*j)||(E()<.35?Ze.push([H,$,(9+E()*5)*j,E()]):Fe.push([H,$,(6+E()*6)*j,E()]))}{let C=[],U=[];for(let[Q,ee,ce,pe,ve]of Ue){let X=Math.hypot(ce-Q,pe-ee),te=Math.max(1,Math.round(X/(40*j))),ue=(ce-Q)/X,Ye=-((pe-ee)/X)*ve/2,qe=ue*ve/2;for(let Qe=0;Qe<te;Qe++){let et=Q+(ce-Q)*(Qe/te),at=ee+(pe-ee)*(Qe/te),ut=Q+(ce-Q)*((Qe+1)/te),tt=ee+(pe-ee)*((Qe+1)/te);if(ae((et+ut)/2,(at+tt)/2,4*j))continue;let Ge=X*(Qe/te)/j/32,nt=X*((Qe+1)/te)/j/32;C.push(et+Ye,.03,at+qe,et-Ye,.03,at-qe,ut+Ye,.03,tt+qe,et-Ye,.03,at-qe,ut-Ye,.03,tt-qe,ut+Ye,.03,tt+qe),U.push(Ge,0,Ge,1,nt,0,Ge,1,nt,1,nt,0)}}let H=new Mt;H.setAttribute("position",new ht(C,3)),H.setAttribute("uv",new ht(U,2));let $=new ft(H,Et(wu,{uColor:{value:new _e("#ffb56b")},...c},Di));$.frustumCulled=!1,De.add($)}{let C=h.orlGround.uniforms,U=Q=>[(Q.x+Se.x)/j,(Q.z+Se.z)/j],F=h.downtownGrid;C.uAlignA.value=[...U(F.origin),1500,0],C.uAlignAS.value=[F.block,F.block];let H=h.parcelGrid,$=U(h.parcelCenter);C.uAlignB.value=[$[0],$[1],H.span,0],C.uAlignBS.value=[H.bw,H.bh],C.uAlignBO.value=U(H.origin),bt.forEach(([Q,ee,ce],pe)=>{let ve=Ce(Q,ee),[X,te]=U(ve);C.uHoods.value[pe].set(X,te,ce)})}{let C=[],U=[];for(let $ of Z){if(!$.name)continue;let Q=48,ee=Math.PI*($.rx+$.rz)/j,ce=10*j;for(let pe=0;pe<Q;pe++){let ve=(nt,b)=>{let O=Math.cos(nt)*($.rx+b),Y=Math.sin(nt)*($.rz+b),K=Math.cos($.rot),V=Math.sin($.rot);return[$.x+O*K+Y*V,$.z-O*V+Y*K]},X=pe/Q*Math.PI*2,te=(pe+1)/Q*Math.PI*2,[ue,Ae]=ve(X,6*j),[Ye,qe]=ve(te,6*j),[Qe,et]=ve(X,6*j+ce),[at,ut]=ve(te,6*j+ce),tt=ee*pe/Q/26,Ge=ee*(pe+1)/Q/26;C.push(ue,.04,Ae,Qe,.04,et,Ye,.04,qe,Qe,.04,et,at,.04,ut,Ye,.04,qe),U.push(tt,0,tt,1,Ge,0,tt,1,Ge,1,Ge,0)}}let F=new Mt;F.setAttribute("position",new ht(C,3)),F.setAttribute("uv",new ht(U,2));let H=new ft(F,Et(wu,{uColor:{value:new _e("#ffd6a0")},...c},Di));H.frustumCulled=!1,De.add(H)}{let C=new Pt,U=Ke.length,F={uTime:r,uZenith:l,uUnitsPerM:{value:j},...c},H=Et(kp,F),$=new Float32Array(U);Ke.forEach((at,ut)=>{$[ut]=at[6]});let Q=new Ri(1,1,1);Q.translate(0,.5,0),Q.setAttribute("aSeed",new ei($,1));let ee=new fi(Q,H,Math.max(1,U)),ce=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.18,1,0],[.18,1,0]],pe=[[0,5,1],[0,4,5],[2,5,4],[2,4,3],[1,5,2],[3,4,0],[0,1,2],[0,2,3]],ve=new Float32Array(pe.length*9);pe.forEach((at,ut)=>at.forEach((tt,Ge)=>ve.set(ce[tt],ut*9+Ge*3)));let X=new Mt;X.setAttribute("position",new ct(ve,3)),X.setAttribute("uv",new ct(new Float32Array(ve.length/3*2).map((at,ut)=>ut%2?2:0),2)),X.computeVertexNormals(),X.setAttribute("aSeed",new ei($,1));let te=new fi(X,H,Math.max(1,U));Ke.forEach(([at,ut,tt,Ge,nt,b],O)=>{C.position.set(at,0,ut),C.rotation.set(0,b,0),C.scale.set(tt,nt,Ge),C.updateMatrix(),ee.setMatrixAt(O,C.matrix),C.position.set(at,nt,ut),C.scale.set(tt*1.08,Math.min(tt,Ge)*.36,Ge*1.12),C.updateMatrix(),te.setMatrixAt(O,C.matrix)}),ee.frustumCulled=te.frustumCulled=!1,De.add(ee,te);let ue=new li(1,1);ue.rotateX(-Math.PI/2);let Ae=new fi(ue,Et(Gp,{uTime:r,...c}),Math.max(1,ye.length)),Ye=new Float32Array(ye.length);ye.forEach(([at,ut,tt,Ge,nt,b],O)=>{C.position.set(at,.02,ut),C.rotation.set(0,nt,0),C.scale.set(tt,1,Ge),C.updateMatrix(),Ae.setMatrixAt(O,C.matrix),Ye[O]=b}),ue.setAttribute("aSeed",new ei(Ye,1)),Ae.frustumCulled=!1,De.add(Ae);let qe=new Ho(1,2),Qe=new fi(qe,Et(Vp,{uZenith:l,...c}),Math.max(1,Fe.length)),et=new Float32Array(Fe.length);Fe.forEach(([at,ut,tt,Ge],nt)=>{C.position.set(at,tt*.75,ut),C.rotation.set(0,Ge*7,0),C.scale.set(tt,tt*.62,tt),C.updateMatrix(),Qe.setMatrixAt(nt,C.matrix),et[nt]=Ge}),qe.setAttribute("aSeed",new ei(et,1)),Qe.frustumCulled=!1,De.add(Qe);{let at=[],ut=[],tt=[],Ge=(xe,be,Ee)=>{at.push(...xe),ut.push(...be),tt.push(Ee)};for(let xe=0;xe<5;xe++){let be=xe/5*Math.PI*2,Ee=(xe+1)/5*Math.PI*2,Le=.032,Me=.022,ke=(wt,Tt,Ut)=>[Math.cos(wt)*Tt+Ut*Ut*.05,Ut,Math.sin(wt)*Tt],Be=[Math.cos(be),0,Math.sin(be)],gt=[Math.cos(Ee),0,Math.sin(Ee)];Ge(ke(be,Le,0),Be,0),Ge(ke(Ee,Le,0),gt,0),Ge(ke(Ee,Me,.9),gt,0),Ge(ke(be,Le,0),Be,0),Ge(ke(Ee,Me,.9),gt,0),Ge(ke(be,Me,.9),Be,0)}let b=[.04,.9,0],O=9;for(let xe=0;xe<O;xe++){let be=xe/O*Math.PI*2+xe%2*.2,Ee=Math.cos(be),Le=Math.sin(be),Me=4,ke=Be=>[b[0]+Ee*Be*.42,b[1]+.08*Math.sin(Be*Math.PI*.6)-.22*Be*Be,b[2]+Le*Be*.42];for(let Be=0;Be<Me;Be++){let gt=Be/Me,wt=(Be+1)/Me,Tt=.07*Math.sin(Math.PI*Math.min(.95,gt+.08)),Ut=.07*Math.sin(Math.PI*Math.min(.95,wt+.08)),pt=ke(gt),Xe=ke(wt),Nt=-Le,_t=Ee,Yt=[[pt[0]+Nt*Tt,pt[1]-.02,pt[2]+_t*Tt],[pt[0]-Nt*Tt,pt[1]-.02,pt[2]-_t*Tt],[Xe[0]+Nt*Ut,Xe[1]-.02,Xe[2]+_t*Ut],[Xe[0]-Nt*Ut,Xe[1]-.02,Xe[2]-_t*Ut]],Gt=[0,1,0];Ge(Yt[0],Gt,1),Ge(Yt[2],Gt,1),Ge(pt,Gt,1),Ge(pt,Gt,1),Ge(Yt[2],Gt,1),Ge(Xe,Gt,1),Ge(Yt[1],Gt,1),Ge(pt,Gt,1),Ge(Yt[3],Gt,1),Ge(pt,Gt,1),Ge(Xe,Gt,1),Ge(Yt[3],Gt,1)}}let Y=new Mt;Y.setAttribute("position",new ht(at,3)),Y.setAttribute("normal",new ht(ut,3)),Y.setAttribute("aPart",new ht(tt,1));let K=new Float32Array(Ze.length),V=new fi(Y,Et(Hp,{uTime:r,uZenith:l,...c},{side:si}),Math.max(1,Ze.length));Ze.forEach(([xe,be,Ee,Le],Me)=>{C.position.set(xe,0,be),C.rotation.set(0,Le*6.28,0),C.scale.setScalar(Ee),C.updateMatrix(),V.setMatrixAt(Me,C.matrix),K[Me]=Le}),Y.setAttribute("aSeed",new ei(K,1)),V.frustumCulled=!1,De.add(V)}h.homeCount=U}let Ie={uTime:r,uUnitsPerM:{value:j},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...me,...c};De.add(Ne.mesh(Et(bu,Ie)));{let C=new Float32Array(Je.length*6);Je.forEach(([$,Q],ee)=>C.set([$.x,$.y,$.z,Q.x,Q.y,Q.z],ee*6));let U=new Mt;U.setAttribute("position",new ct(C,3));let F=new St({vertexShader:"varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`uniform float uOn; uniform vec3 uPointer; uniform float uPointerOn; uniform vec3 uCenter; uniform float uSpan; varying vec3 vP;
        void main(){ float d = length(vP.xz - uPointer.xz); float near = exp(-d*d/(uSpan*uSpan*0.012)) * uPointerOn;
          float edge = 1.0 - smoothstep(0.6, 1.0, length(vP.xz - uCenter.xz) / uSpan);
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (0.32 + near * 3.0);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,uniforms:{uOn:{value:0},uPointer:{value:new P(1e6,0,1e6)},uPointerOn:{value:0},uCenter:{value:new P().copy(h.parcelCenter).add(Se)},uSpan:{value:1100*j}},...Di}),H=new xs(U,F);H.frustumCulled=!1,H.userData.keep=!0,De.add(H),h.parcels=F,h.parcelLines=H}let ne=(C,U=0)=>_i(C.lat,C.lon,U);h.offices=[Xi.nyOffice,Xi.orlandoOffice].map((C,U)=>{let F=ne(C),H=Et(Xp,{uTime:r,uOn:{value:1},uColor:{value:new _e(1,.8,.5)}},{...Di,side:si}),$=new ft(new li(1,1),H);$.geometry.rotateX(-Math.PI/2),$.position.copy(F).setY(F.y+.06),$.frustumCulled=!1,i.add($);let Q=Et(qp,{uColor:{value:new _e(1,.78,.45)},uIntensity:{value:1.4},uTime:r},{...Di,side:si}),ee=new ft(new Gi(1,1,1,24,1,!0),Q);return ee.geometry.translate(0,.5,0),ee.position.copy(F),ee.frustumCulled=!1,i.add(ee),h.hit.push({center:F,r:0,chapter:U===0?2:3,label:U===0?"New York \xB7 Commercial":"Florida \xB7 Commercial & residential",place:C}),{...C,id:U===0?"new-york":"orlando",pos:F,ring:$,beam:ee,ringMat:H,beamMat:Q}});{let C=h.offices[0].pos,U=h.offices[1].pos,F=[];for(let ee=0;ee<=64;ee++){let ce=ee/64,pe=C.clone().lerp(U,ce);pe.y=Math.sin(Math.PI*ce)*2600+2,F.push(pe)}let H=new qo(new mr(F),200,40,8,!1),$=new St({vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform float uTime; uniform float uDraw; uniform float uOn; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(clamp(abs(dot(normalize(vN), V)), 0.0, 1.0), 1.5);
          float d = fract(vUv.x * 9.0 - uTime * 0.25); float dash = 0.35 + 1.5 * smoothstep(0.82, 1.0, d);
          float shown = step(vUv.x, uDraw);
          gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * core * dash * shown * uOn * 1.4, 1.0); }`,uniforms:{uTime:r,uDraw:{value:0},uOn:{value:0}},...Di}),Q=new ft(H,$);Q.frustumCulled=!1,i.add(Q),h.arc=$}{let C=Et(jp,{uTime:r,uOpacity:{value:0},uZenith:l,...c},{transparent:!0,depthWrite:!1}),U=new li(1,1);U.rotateX(-Math.PI/2);let F=new ft(U,C);F.scale.set(8e4,1,8e4),F.position.set((m.x+Se.x)/2,95,(m.z+Se.z)/2),F.renderOrder=5,F.frustumCulled=!1,i.add(F),h.clouds=C}return h.stats={orlBuildings:Ne.items.length,trees:Fe.length,palms:Ze.length,pools:ye.length,streets:Ue.length,lakes:Z.length},h.nyc={group:y,upm:f,L:p,center:m},h.orl={group:De,upm:j,L:Ce,center:Se},h}var Eu=new WeakMap,_l=class extends en{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new un(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,It,n).catch(n)}decodeDracoFile(e,t,n,s,r=Ht,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Eu.has(e)){let l=Eu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Eu.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Mt;e.index&&t.setIndex(new ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,l=new ct(a,o);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;let n=new _e;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),vt.toWorkingColorSpace(n,It),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new un(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=Rb.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function Rb(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),m=f.attributes.map(y=>y.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let p in h){let g=self[u[p]],_,v;if(c.useUniqueIDs)v=h[p],_=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[h[p]]),v===-1)continue;_=o.GetAttribute(d,v)}let M=s(a,o,d,p,g,_);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),y.attributes.push(M)}return m===a.TRIANGULAR_MESH&&(y.index=n(a,o,d)),a.destroy(d),y}function n(a,o,l){let h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,l,c,h,u){let d=u.num_components(),m=l.num_points()*d,y=m*h.BYTES_PER_ELEMENT,p=r(a,h),g=a._malloc(y);o.GetAttributeDataArrayForAllPoints(l,u,p,y,g);let _=new h(a.HEAPF32.buffer,g,m).slice();return a._free(g),{name:c,array:_,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function Ib(i){try{let e=typeof location<"u"?location.href:void 0;return new URL(i,e).origin}catch{return null}}function lm(i){if(!i)return null;let e=i.length,t=i.indexOf("?"),n=i.indexOf("#");t!==-1&&(e=Math.min(e,t)),n!==-1&&(e=Math.min(e,n));let s=i.lastIndexOf(".",e),r=i.lastIndexOf("/",e),a=i.indexOf("://");return a!==-1&&a+2===r||s===-1||s<r?null:i.substring(s+1,e)||null}var bl,Sl=(bl=class{static setXRSession(i){i!==this.session&&(this.flushPending(),this.session=i)}static requestAnimationFrame(i){let{session:e,pending:t}=this,n,s=()=>{t.delete(n),i()};return n=e?e.requestAnimationFrame(s):requestAnimationFrame(s),t.set(n,i),n}static cancelAnimationFrame(i){let{pending:e,session:t}=this;e.delete(i),t?t.cancelAnimationFrame(i):cancelAnimationFrame(i)}static flushPending(){this.pending.forEach((i,e)=>{i(),this.cancelAnimationFrame(e)})}},Jl(bl,"pending",new Map),Jl(bl,"session",null),bl),cm=2**30,dm=class{get unloadPriorityCallback(){return this._unloadPriorityCallback}set unloadPriorityCallback(i){i.length===1?(console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'),this._unloadPriorityCallback=(e,t)=>{let n=i(e),s=i(t);return n<s?-1:+(n>s)}):this._unloadPriorityCallback=i}constructor(){this.minSize=6e3,this.maxSize=8e3,this.minBytesSize=.3*cm,this.maxBytesSize=.4*cm,this.unloadPercent=.05,this.autoMarkUnused=!0,this.cachedBytes=0,this.itemSet=new Map,this.itemList=[],this.usedSet=new Set,this.callbacks=new Map,this.unloadingHandle=-1,this.bytesMap=new Map,this.loadedSet=new Set,this._unloadPriorityCallback=null;let i=this.itemSet;this.defaultPriorityCallback=e=>i.get(e)}isFull(){return this.itemSet.size>=this.maxSize||this.cachedBytes>=this.maxBytesSize}getMemoryUsage(i){return this.bytesMap.get(i)||0}setMemoryUsage(i,e){let{bytesMap:t,itemSet:n}=this;n.has(i)&&(e=Math.round(e),this.cachedBytes-=t.get(i)||0,t.set(i,e),this.cachedBytes+=e)}add(i,e){let t=this.itemSet;if(t.has(i)||this.isFull())return!1;let n=this.usedSet,s=this.itemList,r=this.callbacks;return s.push(i),n.add(i),t.set(i,Date.now()),r.set(i,e),!0}has(i){return this.itemSet.has(i)}remove(i){let e=this.usedSet,t=this.itemSet,n=this.itemList,s=this.bytesMap,r=this.callbacks,a=this.loadedSet;if(t.has(i)){this.cachedBytes-=s.get(i)||0,s.delete(i),r.get(i)(i);let o=n.indexOf(i);return n.splice(o,1),e.delete(i),t.delete(i),r.delete(i),a.delete(i),!0}return!1}setLoaded(i,e){let{itemSet:t,loadedSet:n}=this;t.has(i)&&(e===!0?n.add(i):n.delete(i))}markUsed(i){let e=this.itemSet,t=this.usedSet;e.has(i)&&!t.has(i)&&(e.set(i,Date.now()),t.add(i))}markUnused(i){this.usedSet.delete(i)}markAllUnused(){this.usedSet.clear()}isUsed(i){return this.usedSet.has(i)}unloadUnusedContent(){let{unloadPercent:i,minSize:e,maxSize:t,itemList:n,itemSet:s,usedSet:r,loadedSet:a,callbacks:o,bytesMap:l,minBytesSize:c,maxBytesSize:h}=this,u=n.length-r.size,d=n.length-a.size,f=Math.max(Math.min(n.length-e,u),0),m=this.cachedBytes-c,y=this.unloadPriorityCallback||this.defaultPriorityCallback,p=!1,g=f>0&&u>0||d&&n.length>t;if(u&&this.cachedBytes>c||d&&this.cachedBytes>h||g){n.sort((R,G)=>{let x=r.has(R);if(x===r.has(G)){let T=a.has(R);return T===a.has(G)?-y(R,G):T?1:-1}else return x?1:-1});let _=Math.max(e*i,f*i),v=Math.ceil(Math.min(_,u,f)),M=Math.max(i*m,i*c),I=Math.min(M,m),S=0,A=0;for(;S<n.length&&(this.cachedBytes-A>h||n.length-S>t);){let R=n[S],G=l.get(R)||0;if(r.has(R)&&a.has(R)||this.cachedBytes-A-G<h&&n.length-S<=t)break;A+=G,S++}for(;S<n.length&&(A<I||S<v);){let R=n[S],G=l.get(R)||0;if(r.has(R)||this.cachedBytes-A-G<c&&S>=v)break;A+=G,S++}n.splice(0,S).forEach(R=>{this.cachedBytes-=l.get(R)||0,o.get(R)(R),l.delete(R),s.delete(R),o.delete(R),a.delete(R),r.delete(R)}),p=S<f||A<m&&S<u,p&&(p=S>0)}p&&(this.unloadingHandle=Sl.requestAnimationFrame(()=>this.scheduleUnload()))}scheduleUnload(){Sl.cancelAnimationFrame(this.unloadingHandle),this.scheduled||(this.scheduled=!0,queueMicrotask(()=>{this.scheduled=!1,this.unloadUnusedContent()}))}},Lb=class extends DOMException{constructor(){super("PriorityQueue: Item removed","AbortError")}},Mr=class{get running(){return this.items.length!==0||this.currJobs!==0}constructor(){this.maxJobs=6,this.items=[],this.callbacks=new Map,this.currJobs=0,this.scheduled=!1,this.autoUpdate=!0,this.priorityCallback=null,this._schedulingCallback=i=>{Sl.requestAnimationFrame(i)},this._runjobs=()=>{this.scheduled=!1,this.tryRunJobs()}}sort(){let i=this.priorityCallback,e=this.items;i!==null&&e.sort(i)}has(i){return this.callbacks.has(i)}add(i,e){let t={callback:e,reject:null,resolve:null,promise:null};return t.promise=new Promise((n,s)=>{let r=this.items,a=this.callbacks;t.resolve=n,t.reject=s,r.unshift(i),a.set(i,t),this.autoUpdate&&this.scheduleJobRun()}),t.promise}remove(i){let e=this.items,t=this.callbacks,n=e.indexOf(i);if(n!==-1){let s=t.get(i);s.promise.catch(r=>{if(r.name!=="AbortError")throw r}),s.reject(new Lb),e.splice(n,1),t.delete(i)}}removeByFilter(i){let{items:e}=this;for(let t=0;t<e.length;t++){let n=e[t];i(n)&&(this.remove(n),t--)}}tryRunJobs(){this.sort();let i=this.items,e=this.callbacks,t=this.maxJobs,n=0,s=()=>{this.currJobs--,this.autoUpdate&&this.scheduleJobRun()};for(;t>this.currJobs&&i.length>0&&n<t;){this.currJobs++,n++;let r=i.pop(),{callback:a,resolve:o,reject:l}=e.get(r);e.delete(r);let c;try{c=a(r)}catch(h){l(h),s();continue}c instanceof Promise?c.then(o).catch(l).finally(s):(o(c),s())}}flush(i){let{items:e,callbacks:t}=this,n=e.indexOf(i);if(!t.has(i))return;let{callback:s,resolve:r,reject:a}=t.get(i);t.delete(i),e.splice(n,1);let o;try{o=s(i)}catch(l){a(l);return}return o instanceof Promise?o.then(r).catch(a):r(o),o}scheduleJobRun(){this.scheduled||(this.scheduled=(this._schedulingCallback(this._runjobs),!0))}},Db=class{get running(){for(let i of this.originQueues.values())if(i.running)return!0;return!1}get maxJobsPerOrigin(){return this._maxJobsPerOrigin}set maxJobsPerOrigin(i){this._maxJobsPerOrigin=i,this.originQueues.forEach(e=>e.maxJobs=i)}get maxJobs(){return this.maxJobsPerOrigin}set maxJobs(i){console.warn('DownloadPriorityQueue: "maxJobs" is no longer valid and limits jobs per server origin. Use "maxJobsPerOrigin", instead.'),this.maxJobsPerOrigin=i}get priorityCallback(){return this._priorityCallback}set priorityCallback(i){this._priorityCallback=i,this.originQueues.forEach(e=>e.priorityCallback=i)}constructor(){this.originQueues=new Map,this._itemQueues=new WeakMap,this._maxJobsPerOrigin=6,this._priorityCallback=null}add(i,e,t,n=null){this.originQueues.forEach((l,c)=>{l.running||this.originQueues.delete(c)});let s=i===null?null:Ib(i),r=this.originQueues.get(s);r||(r=new Mr,r.maxJobs=this._maxJobsPerOrigin,r.priorityCallback=this._priorityCallback,this.originQueues.set(s,r));let a=this._itemQueues.get(e);if(a&&a!==r&&a.has(e))throw Error("DownloadPriorityQueue: Item is already queued with a different url origin.");this._itemQueues.set(e,r);let o=r.add(e,t);return n!==null&&(n.aborted?this.remove(e):n.addEventListener("abort",()=>this.remove(e),{once:!0})),o}remove(i){let e=this._itemQueues.get(i);e&&(e.remove(i),this._itemQueues.delete(i))}has(i){let e=this._itemQueues.get(i);return!!(e&&e.has(i))}};var br=6378137,ow=1/298.257223563,fm=6356752314245179e-9,Ml={inView:!1,error:1/0,distanceFromCamera:1/0};function Al(i){return i===4||i===-1}function Pn(i,e){return El(i)&&i.traversal.lastFrameVisited===e&&i.traversal.used}function El(i){return!!i.traversal}function ga(i){let{children:e}=i,t=e.length===0||El(e[e.length-1]),n=!i.internal.hasUnrenderableContent||Al(i.internal.loadingState);return t&&n}function Cs(i){return i.traversal.unconditionallyRefine}function ma(i,e,t=!0){if(El(i)&&(e.ensureChildrenArePreprocessed(i),i.traversal.lastFrameVisited!==e.frameCount&&(i.traversal.wasInFrustum=i.traversal.inFrustum,i.traversal.wasSetActive=i.traversal.active,i.traversal.wasSetVisible=i.traversal.visible,i.traversal.usedLastFrame=i.traversal.used,i.traversal.lastFrameVisited=e.frameCount,i.traversal.used=!1,i.traversal.inFrustum=!1,i.traversal.isLeaf=!1,i.traversal.visible=!1,i.traversal.active=!1,i.traversal.error=1/0,i.traversal.distanceFromCamera=1/0,i.traversal.allChildrenReady=!1,i.traversal.allChildrenLoaded=!1,i.traversal.kicked=!1,i.traversal.allUsedChildrenProcessed=!1,t&&(e.calculateTileViewErrorWithPlugin(i,Ml),i.traversal.inFrustum=Ml.inView,i.traversal.error=Ml.error,i.traversal.distanceFromCamera=Ml.distanceFromCamera),i.traversal.unconditionallyRefine=i.internal.hasUnrenderableContent,!i.traversal.unconditionallyRefine))){let n=i.parent;for(;n&&n.traversal.unconditionallyRefine;)n=n.parent;n&&n.geometricError<=i.geometricError&&(i.traversal.unconditionallyRefine=!0)}}function Cu(i,e,t=!1){if(ma(i,e),t?e.markTileUsed(i):wl(i),Cs(i)&&ga(i)){let n=i.children;for(let s=0,r=n.length;s<r;s++)Cu(n[s],e,t)}}function pm(i,e){if(ma(i,e),i.traversal.usedLastFrame&&(wl(i),i.traversal.wasSetActive&&(i.traversal.active=!0),(!i.traversal.active||Cs(i))&&ga(i))){let t=i.children;for(let n=0,s=t.length;n<s;n++)pm(t[n],e)}}function wl(i){i.traversal.used=!0}function Ub(i,e){return!(i.traversal.error<=e.errorTarget&&!Cs(i)||e.maxDepth>0&&i.internal.depth+1>=e.maxDepth||!ga(i))}function mm(i,e){let{frameCount:t}=e,{children:n}=i;for(let s=0,r=n.length;s<r;s++){let a=n[s];Pn(a,t)&&(a.traversal.active&&(a.traversal.kicked=!0,a.traversal.active=!1),mm(a,e))}}function hm(i){return!Cs(i)&&(!i.internal.hasContent||Al(i.internal.loadingState))}function gm(i,e){if(ma(i,e),!i.traversal.inFrustum)return;let t=i.parent;if(t&&t.refine==="ADD"&&i.geometricError>0&&i.traversal.error*(t.geometricError/i.geometricError)<=e.errorTarget)return;if(!Ub(i,e)){wl(i);return}let n=!1,s=!1,r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];gm(l,e),n||(n=Pn(l,e.frameCount)),s||(s=l.traversal.inFrustum)}if(i.refine==="REPLACE"&&!s&&r.length!==0){i.traversal.inFrustum=!1,e.markTileUsed(i);for(let a=0,o=r.length;a<o;a++)Cu(r[a],e,!0);return}if(wl(i),i.refine==="REPLACE"&&n&&(e.loadSiblings||e.loadAncestors))for(let a=0,o=r.length;a<o;a++)Cu(r[a],e)}function vm(i,e){let t=e.frameCount;if(!Pn(i,t))return;let n=i.children,s=!1;for(let a=0,o=n.length;a<o;a++){let l=n[a];s||(s=Pn(l,t))}if(!s)i.traversal.isLeaf=!0;else{for(let o=0,l=n.length;o<l;o++)vm(n[o],e);let a=!0;for(let o=0,l=n.length;o<l;o++){let c=n[o];if(Pn(c,t)){let h=!Cs(c),u=!c.internal.hasContent||Al(c.internal.loadingState);h&&u||c.traversal.allChildrenLoaded||(a=!1)}}i.traversal.allChildrenLoaded=a}let r=!0;for(let a=0,o=n.length;a<o;a++){let l=n[a];Pn(l,e.frameCount)&&!l.traversal.allUsedChildrenProcessed&&(r=!1)}i.traversal.allUsedChildrenProcessed=r&&ga(i)}function ym(i,e){if(!Pn(i,e.frameCount))return;let t=i.children;if(i.refine==="REPLACE"&&e.loadAncestors&&!i.traversal.allChildrenLoaded&&!Cs(i)&&(i.traversal.isLeaf=!0),i.traversal.isLeaf){if(!Cs(i)&&(i.traversal.active=!0,ga(i)&&i.internal.hasContent&&!Al(i.internal.loadingState)))for(let s=0,r=t.length;s<r;s++)pm(t[s],e);return}let n=t.length>0;for(let s=0,r=t.length;s<r;s++){let a=t[s];ym(a,e),Pn(a,e.frameCount)&&!(a.traversal.active&&hm(a))&&!a.traversal.allChildrenReady&&(n=!1)}i.traversal.allChildrenReady=n,i.refine==="REPLACE"&&!n&&i.traversal.wasSetActive&&hm(i)&&(i.traversal.active=!0,mm(i,e))}function xm(i,e){ma(i,e,!1);let t=Pn(i,e.frameCount);if(t&&(i.internal.hasUnrenderableContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.hasRenderableContent&&i.refine==="ADD"&&(i.traversal.active=!0),(i.traversal.active||i.traversal.kicked)&&i.internal.hasContent&&(e.markTileUsed(i),i.traversal.allUsedChildrenProcessed&&e.queueTileForDownload(i),i.internal.loadingState!==4&&(i.traversal.active=!1)),e.loadAncestors&&i.internal.hasContent&&(e.markTileUsed(i),e.queueTileForDownload(i)),i.internal.virtualChildCount>0&&i.internal.hasContent&&e.markTileUsed(i),i.traversal.visible=i.internal.hasRenderableContent&&i.traversal.active&&i.traversal.inFrustum&&i.internal.loadingState===4,e.stats.used++,i.traversal.inFrustum&&e.stats.inFrustum++),t||El(i)&&i.traversal.usedLastFrame){let n=!1,s=!1;t?(n=i.traversal.active,s=e.displayActiveTiles&&i.traversal.active||i.traversal.visible):ma(i,e,!1),i.internal.hasRenderableContent&&i.internal.loadingState===4?(n&&e.stats.active++,s&&e.stats.visible++,i.traversal.wasSetActive!==n&&e.invokeOnePlugin(a=>a.setTileActive&&a.setTileActive(i,n)),i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setTileVisible&&a.setTileVisible(i,s))):i.internal.hasRenderableContent||(s=i.traversal.isLeaf,i.traversal.wasSetVisible!==s&&e.invokeOnePlugin(a=>a.setEmptyTileVisible&&a.setEmptyTileVisible(i,s))),i.traversal.visible=s,i.traversal.active=n;let r=i.children;for(let a=0,o=r.length;a<o;a++){let l=r[a];xm(l,e)}}}function Nb(i,e){gm(i,e),vm(i,e),ym(i,e),xm(i,e)}function Ob(i){let e=null;return()=>{e===null&&(e=Sl.requestAnimationFrame(()=>{e=null,i()}))}}function Iu(i,e=null,t=null){let n=[];for(n.push(i),n.push(null),n.push(0);n.length>0;){let s=n.pop(),r=n.pop(),a=n.pop();if(e&&e(a,r,s)){t&&t(a,r,s);return}let o=a.children;if(o)for(let l=o.length-1;l>=0;l--)n.push(o[l]),n.push(a),n.push(s+1);t&&t(a,r,s)}}var um=Symbol("PLUGIN_REGISTERED"),es={inView:!0,error:0,distance:1/0},Fb=(i,e)=>{let t=i.priority||0,n=e.priority||0;return t===n?!i.traversal||!e.traversal?0:i.traversal.used===e.traversal.used?i.traversal.error===e.traversal.error?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.traversal.error>e.traversal.error?1:-1:i.traversal.used?1:-1:t>n?1:-1},Bb=(i,e)=>i.traversal.used===e.traversal.used?i.traversal.inFrustum===e.traversal.inFrustum?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.distanceFromCamera===e.traversal.distanceFromCamera?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?0:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?-1:1:i.traversal.distanceFromCamera>e.traversal.distanceFromCamera?-1:1:i.internal.hasUnrenderableContent?1:-1:i.traversal.inFrustum?1:-1:i.traversal.used?1:-1,zb=(i,e)=>i.traversal.lastFrameVisited===e.traversal.lastFrameVisited?i.internal.depthFromRenderedParent===e.internal.depthFromRenderedParent?i.internal.loadingState===e.internal.loadingState?i.internal.hasUnrenderableContent===e.internal.hasUnrenderableContent?i.traversal.error===e.traversal.error?0:i.traversal.error>e.traversal.error?-1:1:i.internal.hasUnrenderableContent?-1:1:i.internal.loadingState>e.internal.loadingState?-1:1:i.internal.depthFromRenderedParent>e.internal.depthFromRenderedParent?1:-1:i.traversal.lastFrameVisited>e.traversal.lastFrameVisited?-1:1,va=(i,e)=>{let t=i.priority??1/0,n=e.priority??1/0;if(t!==n)return t>n?1:-1;if(!i.internal||!e.internal)return 0;let s=i.internal.renderer,r=e.internal.renderer,a=!s.loadAncestors,o=!r.loadAncestors;return a&&o?Bb(i,e):Fb(i,e)},_m=new dm;_m.unloadPriorityCallback=zb;var Tl=new Db;Tl.maxJobsPerOrigin=25,Tl.priorityCallback=va;var Pu=new Mr;Pu.maxJobs=5,Pu.priorityCallback=va;var Ru=new Mr;Ru.maxJobs=25,Ru.priorityCallback=(i,e)=>{let t=i.parent,n=e.parent;return t===n?0:t?n?va(t,n):-1:1};var Mm=class{get root(){let i=this.rootTileset;return i?i.root:null}get loadProgress(){let{stats:i,isLoading:e}=this,t=i.queued+i.downloading+i.parsing,n=i.inCacheSinceLoad+ +!!e;return n===0?1:1-t/n}get downloadQueue(){return this._downloadQueue}set downloadQueue(i){if(i instanceof Mr){console.warn('TilesRenderer: "downloadQueue" is no longer valid as a PriorityQueue. Use a DownloadPriorityQueue, instead.');return}this._downloadQueue=i}constructor(i=null){this.rootLoadingState=0,this.rootTileset=null,this.rootURL=i,this.fetchOptions={},this.plugins=[],this.queuedTiles=[],this.queuedTileSet=new Set,this.cachedSinceLoadComplete=new Set,this.isLoading=!1,this.processedTiles=new WeakSet,this.visibleTiles=new Set,this.activeTiles=new Set,this.usedSet=new Set,this.loadingTiles=new Set,this.lruCache=_m,this.downloadQueue=Tl,this.parseQueue=Pu,this.processNodeQueue=Ru,this.stats={inCacheSinceLoad:0,inCache:0,queued:0,downloading:0,parsing:0,loaded:0,failed:0,inFrustum:0,used:0,active:0,visible:0,refused:0,tilesProcessed:0},this.frameCount=0,this._dispatchNeedsUpdateEvent=Ob(()=>{this.dispatchEvent({type:"needs-update"})}),this.errorTarget=16,this.errorFalloff=0,this.errorFalloffDensity=2e-4,this.displayActiveTiles=!1,this.maxDepth=1/0,this.loadSiblings=!0,this.loadAncestors=!0,this.maxTilesProcessed=250}registerPlugin(i){if(i[um]===!0)throw Error("TilesRendererBase: A plugin can only be registered to a single tileset");let e=this.plugins,t=i.priority||0,n=e.length;for(let s=0;s<e.length;s++)if((e[s].priority||0)>t){n=s;break}e.splice(n,0,i),i[um]=!0,i.init&&i.init(this)}unregisterPlugin(i){let e=this.plugins;if(typeof i=="string"&&(i=this.getPluginByName(i)),e.includes(i)){let t=e.indexOf(i);return e.splice(t,1),i.dispose&&i.dispose(),!0}return!1}getPluginByName(i){return this.plugins.find(e=>e.name===i)||null}invokeOnePlugin(i){let e=[...this.plugins,this];for(let t=0;t<e.length;t++){let n=i(e[t]);if(n)return n}return null}invokeAllPlugins(i){let e=[...this.plugins,this],t=[];for(let n=0;n<e.length;n++){let s=i(e[n]);s&&t.push(s)}return t.length===0?null:Promise.all(t)}traverse(i,e,t=!0){this.root&&Iu(this.root,(n,...s)=>(t&&this.ensureChildrenArePreprocessed(n,!0),i?i(n,...s):!1),e)}getAttributions(i=[]){return this.invokeAllPlugins(e=>e!==this&&e.getAttributions&&e.getAttributions(i)),i}update(){let{lruCache:i,usedSet:e,stats:t,root:n,downloadQueue:s,parseQueue:r,processNodeQueue:a,queuedTiles:o,queuedTileSet:l}=this;if(this.rootLoadingState===0&&(this.rootLoadingState=2,this.invokeOnePlugin(d=>d.loadRootTileset&&d.loadRootTileset()).then(d=>{let f=this.rootURL;f!==null&&this.invokeAllPlugins(m=>f=m.preprocessURL?m.preprocessURL(f,null):f),this.rootLoadingState=4,this.rootTileset=d,this.dispatchEvent({type:"needs-update"}),this.dispatchEvent({type:"load-tileset",tileset:d,url:f}),this.dispatchEvent({type:"load-root-tileset",tileset:d,url:f})}).catch(d=>{this.rootLoadingState=-1,console.error(d),this.rootTileset=null,this.dispatchEvent({type:"load-error",tile:null,error:d,url:this.rootURL})})),!n)return;let c=null;if(this.invokeAllPlugins(d=>{if(d.doTilesNeedUpdate){let f=d.doTilesNeedUpdate();c=c===null?f:!!(c||f)}}),c===!1){this.dispatchEvent({type:"update-before"}),this.dispatchEvent({type:"update-after"});return}this.dispatchEvent({type:"update-before"}),t.inFrustum=0,t.used=0,t.active=0,t.visible=0,t.refused=0,t.tilesProcessed=0,this.frameCount++,e.forEach(d=>i.markUnused(d)),e.clear(),this.prepareForTraversal(),Nb(n,this),this.removeUnusedPendingTiles(),o.sort(i.unloadPriorityCallback);let h=0,u=o.length;for(;h<u&&!i.isFull();h++)this.requestTileContents(o[h]);t.refused+=o.length-h,o.length=0,l.clear(),i.scheduleUnload(),(s.running||r.running||a.running)===!1&&this.isLoading===!0&&(this.cachedSinceLoadComplete.clear(),t.inCacheSinceLoad=0,this.dispatchEvent({type:"tiles-load-end"}),this.isLoading=!1),this.dispatchEvent({type:"update-after"})}resetFailedTiles(){this.rootLoadingState===-1&&(this.rootLoadingState=0);let i=this.stats;i.failed!==0&&(this.traverse(e=>{e.internal.loadingState===-1&&(e.internal.loadingState=0)},null,!1),i.failed=0)}calculateTileViewErrorWithPlugin(i,e){this.calculateTileViewError(i,e);let{errorFalloff:t,errorFalloffDensity:n}=this;if(t>0&&Number.isFinite(e.distanceFromCamera)){let o=e.distanceFromCamera*n;e.error-=t*(1-Math.exp(-o*o))}let s=null,r=0,a=1/0;this.invokeAllPlugins(o=>{o!==this&&o.calculateTileViewError&&(es.inView=!0,es.error=0,es.distance=1/0,o.calculateTileViewError(i,es)&&(s===null&&(s=!0),s&&(s=es.inView),es.inView&&(a=Math.min(a,es.distance),r=Math.max(r,es.error))))}),e.inView&&s!==!1?(e.error=Math.max(e.error,r),e.distanceFromCamera=Math.min(e.distanceFromCamera,a)):s?(e.inView=!0,e.error=r,e.distanceFromCamera=a):e.inView=!1}dispose(){[...this.plugins].forEach(t=>{this.unregisterPlugin(t)});let i=this.lruCache,e=[];this.traverse(t=>(e.push(t),!1),null,!1);for(let t=0,n=e.length;t<n;t++)i.remove(e[t]);this.stats={queued:0,parsing:0,downloading:0,failed:0,inFrustum:0,traversed:0,used:0,active:0,visible:0},this.frameCount=0,this.loadingTiles.clear()}calculateBytesUsed(i,e){return 0}dispatchEvent(i){}addEventListener(i,e){}removeEventListener(i,e){}parseTile(i,e,t){return null}prepareForTraversal(){}disposeTile(i){i.traversal.visible&&(i.internal.hasRenderableContent?this.invokeOnePlugin(t=>t.setTileVisible&&t.setTileVisible(i,!1)):this.invokeOnePlugin(t=>t.setEmptyTileVisible&&t.setEmptyTileVisible(i,!1)),i.traversal.visible=!1),i.traversal.active&&i.internal.hasRenderableContent&&this.invokeOnePlugin(t=>t.setTileActive&&t.setTileActive(i,!1)),i.traversal.active=!1;let{scene:e}=i.engineData;e&&this.dispatchEvent({type:"dispose-model",scene:e,tile:i})}preprocessNode(i,e,t=null){if(this.processedTiles.add(i),this.stats.tilesProcessed++,i.content&&(!("uri"in i.content)&&"url"in i.content&&(i.content.uri=i.content.url,delete i.content.url),i.content.boundingVolume&&!("box"in i.content.boundingVolume||"sphere"in i.content.boundingVolume||"region"in i.content.boundingVolume)&&delete i.content.boundingVolume),i.parent=t,i.children=i.children||[],i.internal={hasContent:!1,hasRenderableContent:!1,hasUnrenderableContent:!1,loadingState:0,basePath:e,depth:-1,depthFromRenderedParent:-1,isVirtual:!1,virtualChildCount:0,renderer:this,...i.internal},i.content?.uri){let n=lm(i.content.uri),s=!!(n&&/json$/.test(n));i.internal.hasContent=!0,i.internal.hasUnrenderableContent=s,i.internal.hasRenderableContent=!s}else i.internal.hasContent=!1,i.internal.hasUnrenderableContent=!1,i.internal.hasRenderableContent=!1;t?(i.internal.depth=t.internal.depth+1,i.internal.depthFromRenderedParent=t.internal.depthFromRenderedParent+ +!!i.internal.hasRenderableContent):(i.internal.depth=0,i.internal.depthFromRenderedParent=+!!i.internal.hasRenderableContent),i.traversal={distanceFromCamera:1/0,error:1/0,inFrustum:!1,wasInFrustum:!1,isLeaf:!1,used:!1,usedLastFrame:!1,visible:!1,wasSetVisible:!1,active:!1,wasSetActive:!1,allChildrenReady:!1,allChildrenLoaded:!1,kicked:!1,allUsedChildrenProcessed:!1,lastFrameVisited:-1},t===null?i.refine=i.refine||"REPLACE":i.refine=i.refine||t.refine,i.engineData={scene:null,metadata:null,boundingVolume:null},Object.defineProperty(i,"cached",{get(){return console.warn('TilesRenderer: "tile.cached" field has been renamed to "tile.engineData".'),this.engineData},enumerable:!1,configurable:!0}),this.invokeAllPlugins(n=>{n!==this&&n.preprocessNode&&n.preprocessNode(i,e,t)})}setTileActive(i,e){e?this.activeTiles.add(i):this.activeTiles.delete(i)}setTileVisible(i,e){e?this.visibleTiles.add(i):this.visibleTiles.delete(i),this.dispatchEvent({type:"tile-visibility-change",scene:i.engineData.scene,tile:i,visible:e})}calculateTileViewError(i,e){}removeUnusedPendingTiles(){let{lruCache:i,loadingTiles:e}=this,t=[];for(let n of e)!i.isUsed(n)&&n.internal.loadingState===1&&t.push(n);for(let n=0;n<t.length;n++)i.remove(t[n])}queueTileForDownload(i){let{queuedTileSet:e}=this;if(!(i.internal.loadingState!==0||e.has(i))){if(e.add(i),this.lruCache.isFull()){this.stats.refused++;return}this.queuedTiles.push(i)}}markTileUsed(i){this.usedSet.add(i),this.lruCache.markUsed(i)}fetchData(i,e){return fetch(i,e)}ensureChildrenArePreprocessed(i,e=this.stats.tilesProcessed<this.maxTilesProcessed){let t=i.children;if(t.length===0||t[t.length-1].traversal)return;let n=s=>{for(let r=0,a=s.length;r<a;r++){let o=s[r];o&&!o.traversal&&this.preprocessNode(o,i.internal.basePath,i)}};e?(this.processNodeQueue.remove(i),n(t)):this.processNodeQueue.has(i)||this.processNodeQueue.add(i,s=>{n(s.children),this._dispatchNeedsUpdateEvent()})}getBytesUsed(i){let e=0;return this.invokeAllPlugins(t=>{t.calculateBytesUsed&&(e+=t.calculateBytesUsed(i,i.engineData.scene)||0)}),e}recalculateBytesUsed(i=null){let{lruCache:e,processedTiles:t}=this;i===null?e.itemSet.forEach(n=>{t.has(n)&&e.setMemoryUsage(n,this.getBytesUsed(n))}):e.setMemoryUsage(i,this.getBytesUsed(i))}preprocessTileset(i,e,t=null){let[n,s]=i.asset.version.split(".").map(a=>parseInt(a));console.assert(n<=1,"TilesRenderer: asset.version is expected to be a 1.x or a compatible version."),n===1&&s>0&&console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");let r=e.replace(/\/[^/]*$/,"");r=new URL(r,window.location.href).toString(),this.preprocessNode(i.root,r,t)}loadRootTileset(){let i=this.rootURL;return this.invokeAllPlugins(e=>i=e.preprocessURL?e.preprocessURL(i,null):i),this.invokeOnePlugin(e=>e.fetchData&&e.fetchData(i,this.fetchOptions)).then(e=>{if(!(e instanceof Response))return e;if(e.ok)return e.json();throw Error(`TilesRenderer: Failed to load tileset "${i}" with status ${e.status} : ${e.statusText}`)}).then(e=>(this.preprocessTileset(e,i),e))}requestTileContents(i){if(i.internal.loadingState!==0)return;let e=!1,t=null,n=new URL(i.content.uri,i.internal.basePath+"/").toString();this.invokeAllPlugins(d=>n=d.preprocessURL?d.preprocessURL(n,i):n);let s=this.stats,r=this.lruCache,a=this.downloadQueue,o=this.parseQueue,l=this.loadingTiles,c=lm(n),h=new AbortController,u=h.signal;if(r.add(i,d=>{h.abort(),e?d.children.length=0:this.invokeAllPlugins(f=>{f.disposeTile&&f.disposeTile(d)}),s.inCache--,this.cachedSinceLoadComplete.has(i)&&(this.cachedSinceLoadComplete.delete(i),s.inCacheSinceLoad--),d.internal.loadingState===1?s.queued--:d.internal.loadingState===2?s.downloading--:d.internal.loadingState===3?s.parsing--:d.internal.loadingState===4&&s.loaded--,d.internal.loadingState=0,o.remove(d),a.remove(d),l.delete(d)}))return this.isLoading||(this.isLoading=!0,this.dispatchEvent({type:"tiles-load-start"})),r.setMemoryUsage(i,this.getBytesUsed(i)),this.cachedSinceLoadComplete.add(i),s.inCacheSinceLoad++,s.inCache++,s.queued++,i.internal.loadingState=1,l.add(i),a.add(n,i,d=>{if(u.aborted)return Promise.resolve();i.internal.loadingState=2,s.downloading++,s.queued--;let f=this.invokeOnePlugin(m=>m.fetchData&&m.fetchData(n,{...this.fetchOptions,signal:u}));return this.dispatchEvent({type:"tile-download-start",tile:i,url:n,get uri(){return console.warn('tile-download-start event: "uri" has been renamed to "url".'),this.url}}),f}).then(d=>{if(!u.aborted){if(!(d instanceof Response))return d;if(d.ok)return c==="json"?d.json():d.arrayBuffer();throw Error(`Failed to load model with error code ${d.status}`)}}).then(d=>{if(!u.aborted)return s.downloading--,s.parsing++,i.internal.loadingState=3,o.add(i,f=>u.aborted?Promise.resolve():c==="json"&&d.root?(this.preprocessTileset(d,n,i),i.children.push(d.root),t=d,e=!0,Promise.resolve()):this.invokeOnePlugin(m=>m.parseTile&&m.parseTile(d,f,c,n,u)))}).then(()=>{if(u.aborted)return;s.parsing--,s.loaded++,i.internal.loadingState=4,l.delete(i),r.setLoaded(i,!0);let d=this.getBytesUsed(i);if(r.getMemoryUsage(i)===0&&d>0&&r.isFull()){r.remove(i);return}r.setMemoryUsage(i,d),this.dispatchEvent({type:"needs-update"}),e&&this.dispatchEvent({type:"load-tileset",tileset:t,url:n}),i.engineData.scene&&this.dispatchEvent({type:"load-model",scene:i.engineData.scene,tile:i,url:n})}).catch(d=>{u.aborted||(d.name==="AbortError"?r.remove(i):(o.remove(i),a.remove(i),i.internal.loadingState===1?s.queued--:i.internal.loadingState===2?s.downloading--:i.internal.loadingState===3?s.parsing--:i.internal.loadingState===4&&s.loaded--,s.failed++,console.error(`TilesRenderer : Failed to load tile at url "${i.content.uri}".`),console.error(d),i.internal.loadingState=-1,l.delete(i),r.setLoaded(i,!0),this.dispatchEvent({type:"load-error",tile:i,error:d,url:n})))})}};function ts(i){if(i===null||i.byteLength<4)return"";let e;if(e=i instanceof DataView?i:new DataView(i),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let n=0;n<4;n++)t+=String.fromCharCode(e.getUint8(n));return t}var kb=new TextDecoder;function Lu(i){return kb.decode(i)}function Cl(i){return i.replace(/[\\/][^\\/]+$/,"")+"/"}var Sr=class{constructor(){this.fetchOptions={},this.workingPath=""}loadAsync(i){return fetch(i,this.fetchOptions).then(e=>{if(!e.ok)throw Error(`Failed to load file "${i}" with status ${e.status} : ${e.statusText}`);return e.arrayBuffer()}).then(e=>(this.workingPath===""&&(this.workingPath=Cl(i)),this.parse(e)))}resolveExternalURL(i){return new URL(i,this.workingPath).href}parse(i){throw Error("LoaderBase: Parse not implemented.")}};function bm(i,e,t,n,s,r){let a;switch(n){case"SCALAR":a=1;break;case"VEC2":a=2;break;case"VEC3":a=3;break;case"VEC4":a=4;break;default:throw Error(`FeatureTable : Feature type not provided for "${r}".`)}let o,l=t*a;switch(s){case"BYTE":o=new Int8Array(i,e,l);break;case"UNSIGNED_BYTE":o=new Uint8Array(i,e,l);break;case"SHORT":o=new Int16Array(i,e,l);break;case"UNSIGNED_SHORT":o=new Uint16Array(i,e,l);break;case"INT":o=new Int32Array(i,e,l);break;case"UNSIGNED_INT":o=new Uint32Array(i,e,l);break;case"FLOAT":o=new Float32Array(i,e,l);break;case"DOUBLE":o=new Float64Array(i,e,l);break;default:throw Error(`FeatureTable : Feature component type not provided for "${r}".`)}return o}var Pl=class{constructor(i,e,t,n){this.buffer=i,this.binOffset=e+t,this.binLength=n;let s=null;if(t!==0){let r=new Uint8Array(i,e,t);s=JSON.parse(Lu(r))}else s={};this.header=s}getKeys(){return Object.keys(this.header).filter(i=>i!=="extensions")}getData(i,e,t=null,n=null){let s=this.header;if(!(i in s))return null;let r=s[i];if(!(r instanceof Object)||Array.isArray(r))return r;{let{buffer:a,binOffset:o,binLength:l}=this,c=r.byteOffset||0,h=r.type||n,u=r.componentType||t;if("type"in r&&n&&r.type!==n)throw Error("FeatureTable: Specified type does not match expected type.");let d=o+c,f=bm(a,d,e,h,u,i);if(d+f.byteLength>o+l)throw Error("FeatureTable: Feature data read outside binary body length.");return f}}getBuffer(i,e){let{buffer:t,binOffset:n}=this;return t.slice(n+i,n+i+e)}},Vb=class{constructor(i){this.batchTable=i;let e=i.header.extensions["3DTILES_batch_table_hierarchy"];this.classes=e.classes;for(let n of this.classes){let s=n.instances;for(let r in s)n.instances[r]=this._parseProperty(s[r],n.length,r)}if(this.instancesLength=e.instancesLength,this.classIds=this._parseProperty(e.classIds,this.instancesLength,"classIds"),e.parentCounts?this.parentCounts=this._parseProperty(e.parentCounts,this.instancesLength,"parentCounts"):this.parentCounts=Array(this.instancesLength).fill(1),e.parentIds){let n=this.parentCounts.reduce((s,r)=>s+r,0);this.parentIds=this._parseProperty(e.parentIds,n,"parentIds")}else this.parentIds=null;this.instancesIds=[];let t={};for(let n of this.classIds)t[n]=t[n]??0,this.instancesIds.push(t[n]),t[n]++}_parseProperty(i,e,t){if(Array.isArray(i))return i;{let{buffer:n,binOffset:s}=this.batchTable,r=i.byteOffset,a=i.componentType||"UNSIGNED_SHORT";return bm(n,s+r,e,"SCALAR",a,t)}}getDataFromId(i,e={}){let t=this.parentCounts[i];if(this.parentIds&&t>0){let o=0;for(let l=0;l<i;l++)o+=this.parentCounts[l];for(let l=0;l<t;l++){let c=this.parentIds[o+l];c!==i&&this.getDataFromId(c,e)}}let n=this.classIds[i],s=this.classes[n].instances,r=this.classes[n].name,a=this.instancesIds[i];for(let o in s)e[r]=e[r]||{},e[r][o]=s[o][a];return e}},Du=class extends Pl{constructor(i,e,t,n,s){super(i,t,n,s),this.count=e,this.extensions={};let r=this.header.extensions;r&&r["3DTILES_batch_table_hierarchy"]&&(this.extensions["3DTILES_batch_table_hierarchy"]=new Vb(this))}getDataFromId(i,e={}){if(i<0||i>=this.count)throw Error(`BatchTable: id value "${i}" out of bounds for "${this.count}" features number.`);for(let t of this.getKeys())e[t]=super.getData(t,this.count)[i];for(let t in this.extensions){let n=this.extensions[t];n.getDataFromId instanceof Function&&(e[t]=e[t]||{},n.getDataFromId(i,e[t]))}return e}getPropertyArray(i){return super.getData(i,this.count)}},Sm=class extends Sr{parse(i){let e=new DataView(i),t=ts(e);console.assert(t==="b3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Pl(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Du(i.slice(h,h+o+l),c.getData("BATCH_LENGTH"),0,o,l),d=h+o+l;return{version:n,featureTable:c,batchTable:u,glbBytes:new Uint8Array(i,d,s-d)}}},wm=class extends Sr{parse(i){let e=new DataView(i),t=ts(e);console.assert(t==="i3dm");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=e.getUint32(28,!0),h=new Pl(i.slice(32,32+r+a),0,r,a),u=32+r+a,d=new Du(i.slice(u,u+o+l),h.getData("INSTANCES_LENGTH"),0,o,l),f=u+o+l,m=new Uint8Array(i,f,s-f),y=null,p=null,g=null;if(c)y=m,p=Promise.resolve();else{let _=this.resolveExternalURL(Lu(m));g=Cl(_),p=fetch(_,this.fetchOptions).then(v=>{if(!v.ok)throw Error(`I3DMLoaderBase : Failed to load file "${_}" with status ${v.status} : ${v.statusText}`);return v.arrayBuffer()}).then(v=>{y=new Uint8Array(v)})}return p.then(()=>({version:n,featureTable:h,batchTable:d,glbBytes:y,gltfWorkingPath:g}))}},Tm=class extends Sr{parse(i){let e=new DataView(i),t=ts(e);console.assert(t==="pnts");let n=e.getUint32(4,!0);console.assert(n===1);let s=e.getUint32(8,!0);console.assert(s===i.byteLength);let r=e.getUint32(12,!0),a=e.getUint32(16,!0),o=e.getUint32(20,!0),l=e.getUint32(24,!0),c=new Pl(i.slice(28,28+r+a),0,r,a),h=28+r+a,u=new Du(i.slice(h,h+o+l),c.getData("BATCH_LENGTH")||c.getData("POINTS_LENGTH"),0,o,l);return Promise.resolve({version:n,featureTable:c,batchTable:u})}},Am=class extends Sr{parse(i){let e=new DataView(i),t=ts(e);console.assert(t==="cmpt",'CMPTLoader: The magic bytes equal "cmpt".');let n=e.getUint32(4,!0);console.assert(n===1,'CMPTLoader: The version listed in the header is "1".');let s=e.getUint32(8,!0);console.assert(s===i.byteLength,"CMPTLoader: The contents buffer length listed in the header matches the file.");let r=e.getUint32(12,!0),a=[],o=16;for(let l=0;l<r;l++){let c=new DataView(i,o,12),h=ts(c),u=c.getUint32(4,!0),d=c.getUint32(8,!0),f=new Uint8Array(i,o,d);a.push({type:h,buffer:f,version:u}),o+=d}return{version:n,tiles:a}}};function Em(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function Uu(i,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===aa||e===al){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===aa)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ns=class extends en{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Kn.extractUrlBase(e);a=Kn.resolveURL(c,this.path)}else a=Kn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new un(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lm){try{a[yt.KHR_BINARY_GLTF]=new id(e)}catch(u){s&&s(u);return}r=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new cd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case yt.KHR_MATERIALS_UNLIT:a[u]=new zu;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[u]=new nd(r,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[u]=new sd;break;case yt.KHR_MESH_QUANTIZATION:a[u]=new rd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Hb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bu=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ht);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ko(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zo(h),c.distance=u;break;case"spot":c=new $o(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},zu=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,n){let s=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Gu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(o[0],o[1],o[2],Ht),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},$u=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ju=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Qu=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ed=class{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},td=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Yi.TRIANGLES&&c.mode!==Yi.TRIANGLE_STRIP&&c.mode!==Yi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let y=new He,p=new P,g=new di,_=new P(1,1,1),v=new fi(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,y.compose(p,g,_));for(let M in l)if(M==="_COLOR_0"){let I=l[M];v.instanceColor=new ei(I.array,I.itemSize,I.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Pt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Lm="glTF",ya=12,Cm={JSON:1313821514,BIN:5130562},id=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ya,r=new DataView(e,ya),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Cm.JSON){let c=new Uint8Array(e,ya+a,o);this.content=n.decode(c)}else if(l===Cm.BIN){let c=ya+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=od[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=od[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=wr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let y=f.attributes[m],p=l[m];p!==void 0&&(y.normalized=p)}u(f)},o,c,Ht,d)})})}},sd=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},rd=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Rl=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,y=m-c,p=-2*f+3*d,g=f-d,_=1-p,v=g-d+u;for(let M=0;M!==o;M++){let I=a[y+M+o],S=a[y+M+l]*h,A=a[m+M+o],R=a[m+M]*h;r[M]=_*I+v*S+p*A+g*R}return r}},Gb=new di,ad=class extends Rl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Gb.fromArray(r).normalize().toArray(r),r}},Yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pm={9728:Jt,9729:ri,9984:ou,9985:Vr,9986:Ys,9987:Fi},Rm={33071:Qi,33648:Yr,10497:cn},Nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wb={CUBICSPLINE:void 0,LINEAR:or,STEP:ar},Ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ln})),i.DefaultMaterial}function Ps(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Yb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jb(i){let e,t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fu(t.attributes):e=i.indices+":"+Fu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fu(i.targets[n]);return e}function Fu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ld(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $b(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zb=new He,cd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new gr(this.options.manager):this.textureLoader=new Jo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ps(r,o,s),Rn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Kn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Nu[s.type],o=wr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new ct(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Nu[s.type],c=wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,y,p;if(f&&f!==u){let g=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,v=t.cache.get(_);v||(y=new c(o,g*f,s.count*f/h),v=new Kr(y,f/h),t.cache.add(_,v)),p=new Jr(v,l,d%f/h,m)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),p=new ct(y,l,m);if(s.sparse!==void 0){let g=Nu.SCALAR,_=wr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,I=new _(a[1],v,s.sparse.count*g),S=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new ct(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,R=I.length;A<R;A++){let G=I[A];if(p.setX(G,S[A*l]),l>=2&&p.setY(G,S[A*l+1]),l>=3&&p.setZ(G,S[A*l+2]),l>=4&&p.setW(G,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Pm[d.magFilter]||ri,h.minFilter=Pm[d.minFilter]||Fi,h.wrapS=Rm[d.wrapS]||cn,h.wrapT=Rm[d.wrapT]||cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(y){let p=new Zt(y);p.needsUpdate=!0,d(p)}),t.load(Kn.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Rn(u,a),u.userData.mimeType=a.mimeType||$b(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[yt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Xn,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fr,Pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ms}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[yt.KHR_MATERIALS_UNLIT]){let u=s[yt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ht),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=si);let h=r.alphaMode||Ou.OPAQUE;if(h===Ou.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ou.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==oi){let u=r.emissiveFactor;o.emissive=new _e().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&a!==oi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Rn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Im(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=jb(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Im(new Mt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?qb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let y=h[f],p=a[f],g,_=c[f];if(p.mode===Yi.TRIANGLES||p.mode===Yi.TRIANGLE_STRIP||p.mode===Yi.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Po(y,_):new ft(y,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Yi.TRIANGLE_STRIP?g.geometry=Uu(g.geometry,al):p.mode===Yi.TRIANGLE_FAN&&(g.geometry=Uu(g.geometry,aa));else if(p.mode===Yi.LINES)g=new xs(y,_);else if(p.mode===Yi.LINE_STRIP)g=new pr(y,_);else if(p.mode===Yi.LINE_LOOP)g=new Do(y,_);else if(p.mode===Yi.POINTS)g=new Sn(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Yb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Rn(g,r),p.extensions&&Ps(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];let d=new Vt;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Cn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new bn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ro(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],y=f.target,p=y.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],y=u[3],p=u[4],g=[];for(let _=0,v=d.length;_<v;_++){let M=d[_],I=f[_],S=m[_],A=y[_],R=p[_];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let G=n._createAnimationTracks(M,I,S,A,R);if(G)for(let x=0;x<G.length;x++)g.push(G[x])}return new jo(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Qr:c.length>1?h=new Vt:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Rn(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Vt;n.name&&(r.name=s.createUniqueName(n.name)),Rn(r,n),n.extensions&&Ps(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Pi||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(is[r.path]){case is.weights:c=Tn;break;case is.rotation:c=An;break;case is.position:case is.scale:c=En;break;default:switch(n.itemSize){case 1:c=Tn;break;case 2:case 3:default:c=En;break}break}let h=s.interpolation!==void 0?Wb[s.interpolation]:or,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ld(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof An?ad:Rl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Kb(i,e,t){let n=e.attributes,s=new ai;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=ld(wr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let y=ld(wr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Qt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Im(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=od[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return vt.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Rn(i,e),Kb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Xb(i,e.targets,t):i})}var xd=class extends Sm{constructor(i=ws){super(),this.manager=i,this.adjustmentTransform=new He}parse(i){let e=super.parse(i),t=e.glbBytes.slice().buffer;return new Promise((n,s)=>{let r=this.manager,a=this.fetchOptions,o=r.getHandler("path.gltf")||new ns(r);a.credentials==="include"&&a.mode==="cors"&&o.setCrossOrigin("use-credentials"),"credentials"in a&&o.setWithCredentials(a.credentials==="include"),a.headers&&o.setRequestHeader(a.headers);let l=this.workingPath;!/[\\/]$/.test(l)&&l.length&&(l+="/");let c=this.adjustmentTransform;o.parse(t,l,h=>{let{batchTable:u,featureTable:d}=e,{scene:f}=h,m=d.getData("RTC_CENTER",1,"FLOAT","VEC3");m&&(f.position.x+=m[0],f.position.y+=m[1],f.position.z+=m[2]),h.scene.updateMatrix(),h.scene.matrix.multiply(c),h.scene.matrix.decompose(h.scene.position,h.scene.quaternion,h.scene.scale),h.batchTable=u,h.featureTable=d,f.batchTable=u,f.featureTable=d,n(h)},s)})}};function Qb(i){let e=i>>11,t=i>>5&63,n=i&31;return[Math.round(e/31*255),Math.round(t/63*255),Math.round(n/31*255)]}var xa=new he;function e1(i,e,t=new P){xa.set(i,e).divideScalar(256).multiplyScalar(2).subScalar(1),t.set(xa.x,xa.y,1-Math.abs(xa.x)-Math.abs(xa.y));let n=Cn.clamp(-t.z,0,1);return t.x>=0?t.setX(t.x-n):t.setX(t.x+n),t.y>=0?t.setY(t.y-n):t.setY(t.y+n),t.normalize(),t}var Dm={RGB:"color",POSITION:"position"},_d=class extends Tm{constructor(i=ws){super(),this.manager=i}parse(i){return super.parse(i).then(async e=>{let{featureTable:t,batchTable:n}=e,s=new Xn,r=t.header.extensions,a=new P,o;if(r&&r["3DTILES_draco_point_compression"]){let{byteOffset:h,byteLength:u,properties:d}=r["3DTILES_draco_point_compression"],f=this.manager.getHandler("draco.drc");if(f==null)throw Error("PNTSLoader: dracoLoader not available.");let m={};for(let g in d)if(g in Dm&&g in d){let _=Dm[g];m[_]=d[g]}let y={attributeIDs:m,attributeTypes:{position:"Float32Array",color:"Uint8Array"},useUniqueIDs:!0},p=t.getBuffer(h,u);o=await f.decodeGeometry(p,y),o.attributes.color&&(s.vertexColors=!0)}else{let h=t.getData("POINTS_LENGTH"),u=t.getData("POSITION",h,"FLOAT","VEC3"),d=t.getData("NORMAL",h,"FLOAT","VEC3"),f=t.getData("NORMAL",h,"UNSIGNED_BYTE","VEC2"),m=t.getData("RGB",h,"UNSIGNED_BYTE","VEC3"),y=t.getData("RGBA",h,"UNSIGNED_BYTE","VEC4"),p=t.getData("RGB565",h,"UNSIGNED_SHORT","SCALAR"),g=t.getData("CONSTANT_RGBA",h,"UNSIGNED_BYTE","VEC4"),_=t.getData("POSITION_QUANTIZED",h,"UNSIGNED_SHORT","VEC3"),v=t.getData("QUANTIZED_VOLUME_SCALE",h,"FLOAT","VEC3"),M=t.getData("QUANTIZED_VOLUME_OFFSET",h,"FLOAT","VEC3");if(o=new Mt,_){let I=new Float32Array(h*3);for(let S=0;S<h;S++)for(let A=0;A<3;A++){let R=3*S+A;I[R]=_[R]/65535*v[A]}a.x=M[0],a.y=M[1],a.z=M[2],o.setAttribute("position",new ct(I,3,!1))}else o.setAttribute("position",new ct(u,3,!1));if(d!==null)o.setAttribute("normal",new ct(d,3,!1));else if(f!==null){let I=new Float32Array(h*3),S=new P;for(let A=0;A<h;A++){let R=f[A*2],G=f[A*2+1],x=e1(R,G,S);I[A*3]=x.x,I[A*3+1]=x.y,I[A*3+2]=x.z}o.setAttribute("normal",new ct(I,3,!1))}if(y!==null)o.setAttribute("color",new ct(y,4,!0)),s.vertexColors=!0,s.transparent=!0,s.depthWrite=!1;else if(m!==null)o.setAttribute("color",new ct(m,3,!0)),s.vertexColors=!0;else if(p!==null){let I=new Uint8Array(h*3);for(let S=0;S<h;S++){let A=Qb(p[S]);for(let R=0;R<3;R++){let G=3*S+R;I[G]=A[R]}}o.setAttribute("color",new ct(I,3,!0)),s.vertexColors=!0}else if(g!==null){s.color=new _e(g[0],g[1],g[2]);let I=g[3]/255;I<1&&(s.opacity=I,s.transparent=!0,s.depthWrite=!1)}}let l=new Sn(o,s);l.position.copy(a),e.scene=l,e.scene.featureTable=t,e.scene.batchTable=n;let c=t.getData("RTC_CENTER",1,"FLOAT","VEC3");return c&&(e.scene.position.x+=c[0],e.scene.position.y+=c[1],e.scene.position.z+=c[2]),e})}};function t1(i){let{x:e,y:t,z:n}=i;i.x=n,i.y=e,i.z=t}function i1(i){return-i+Math.PI/2}var Um=new Qo,ss=new P,gi=new P,hd=new P,ji=new He,dn=new He,ud=new Qt,Mi=new Vi,Nm=new P,Om=new P,Fm=new P,_a=new P,Il=new Ci,n1=1e-12,s1=.1;var Md=class{constructor(i=1,e=1,t=1){this.isEllipsoid=!0,this.name="",this.radius=new P(i,e,t)}intersectRay(i,e){return ji.makeScale(...this.radius).invert(),ud.center.set(0,0,0),ud.radius=1,Il.copy(i).applyMatrix4(ji),Il.intersectSphere(ud,e)?(ji.makeScale(...this.radius),e.applyMatrix4(ji),e):null}getEastNorthUpFrame(i,e,t,n){return t.isMatrix4&&(n=t,t=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(i,e,Nm,Om,Fm),this.getCartographicToPosition(i,e,t,_a),n.makeBasis(Nm,Om,Fm).setPosition(_a)}getOrientedEastNorthUpFrame(i,e,t,n,s,r,a){return this.getObjectFrame(i,e,t,n,s,r,a,0)}getObjectFrame(i,e,t,n,s,r,a,o=2){return this.getEastNorthUpFrame(i,e,t,ji),Mi.set(s,r,-n,"ZXY"),a.makeRotationFromEuler(Mi).premultiply(ji),o===1?(Mi.set(Math.PI/2,0,0,"XYZ"),dn.makeRotationFromEuler(Mi),a.multiply(dn)):o===2&&(Mi.set(-Math.PI/2,0,Math.PI,"XYZ"),dn.makeRotationFromEuler(Mi),a.multiply(dn)),a}getCartographicFromObjectFrame(i,e,t=2){return t===1?(Mi.set(-Math.PI/2,0,0,"XYZ"),dn.makeRotationFromEuler(Mi).premultiply(i)):t===2?(Mi.set(-Math.PI/2,0,Math.PI,"XYZ"),dn.makeRotationFromEuler(Mi).premultiply(i)):dn.copy(i),_a.setFromMatrixPosition(dn),this.getPositionToCartographic(_a,e),this.getEastNorthUpFrame(e.lat,e.lon,0,ji).invert(),dn.premultiply(ji),Mi.setFromRotationMatrix(dn,"ZXY"),e.azimuth=-Mi.z,e.elevation=Mi.x,e.roll=Mi.y,e}getEastNorthUpAxes(i,e,t,n,s,r=_a){this.getCartographicToPosition(i,e,0,r),this.getCartographicToNormal(i,e,s),t.set(-r.y,r.x,0).normalize(),n.crossVectors(s,t).normalize()}getCartographicToPosition(i,e,t,n){this.getCartographicToNormal(i,e,ss);let s=this.radius;gi.copy(ss),gi.x*=s.x**2,gi.y*=s.y**2,gi.z*=s.z**2;let r=Math.sqrt(ss.dot(gi));return gi.divideScalar(r),n.copy(gi).addScaledVector(ss,t)}getPositionToCartographic(i,e){this.getPositionToSurfacePoint(i,gi),this.getPositionToNormal(gi,ss);let t=hd.subVectors(i,gi);return e.lon=Math.atan2(ss.y,ss.x),e.lat=Math.asin(ss.z),e.height=Math.sign(t.dot(i))*t.length(),e}getCartographicToNormal(i,e,t){return Um.set(1,i1(i),e),t.setFromSpherical(Um).normalize(),t1(t),t}getPositionToNormal(i,e){let t=this.radius;return e.copy(i),e.x/=t.x**2,e.y/=t.y**2,e.z/=t.z**2,e.normalize(),e}getPositionToSurfacePoint(i,e){let t=this.radius,n=1/t.x**2,s=1/t.y**2,r=1/t.z**2,a=i.x*i.x*n,o=i.y*i.y*s,l=i.z*i.z*r,c=a+o+l,h=Math.sqrt(1/c),u=gi.copy(i).multiplyScalar(h);if(c<s1)return isFinite(h)?e.copy(u):null;let d=hd.set(u.x*n*2,u.y*s*2,u.z*r*2),f=(1-h)*i.length()/(.5*d.length()),m=0,y,p,g,_,v,M,I,S,A,R,G;do{f-=m,g=1/(1+f*n),_=1/(1+f*s),v=1/(1+f*r),M=g*g,I=_*_,S=v*v,A=M*g,R=I*_,G=S*v,y=a*M+o*I+l*S-1,p=a*A*n+o*R*s+l*G*r;let x=-2*p;m=y/x}while(Math.abs(y)>n1);return e.set(i.x*g,i.y*_,i.z*v)}calculateHorizonDistance(i,e){let t=this.calculateEffectiveRadius(i);return Math.sqrt(2*t*e+e**2)}calculateEffectiveRadius(i){let e=this.radius.x,t=1-this.radius.z**2/e**2,n=i*Cn.DEG2RAD,s=Math.sin(n)**2;return e/Math.sqrt(1-t*s)}getPositionElevation(i){this.getPositionToSurfacePoint(i,gi);let e=hd.subVectors(i,gi);return Math.sign(e.dot(i))*e.length()}closestPointToRayEstimate(i,e){return this.intersectRay(i,e)?e:(ji.makeScale(...this.radius).invert(),Il.copy(i).applyMatrix4(ji),gi.set(0,0,0),Il.closestPointToPoint(gi,e).normalize(),ji.makeScale(...this.radius),e.applyMatrix4(ji))}copy(i){return this.radius.copy(i.radius),this}clone(){return new this.constructor().copy(this)}},Un=new Md(br,br,fm);Un.name="WGS84 Earth";var Ll=new P,Tr=new P,Ar=new P,dd=new P,Dl=new di,Ul=new P,Er=new He,Bm=new He,zm=new P,km=new He,fd=new di,pd={};function Vm(i,e,t,n){if(i=i/t*2-1,e=e/t*2-1,n.x=i,n.y=e,n.z=1-Math.abs(i)-Math.abs(e),n.z<0){let s=n.x;n.x=(1-Math.abs(n.y))*(s>=0?1:-1),n.y=(1-Math.abs(s))*(n.y>=0?1:-1)}return n.normalize(),n}var bd=class extends wm{constructor(i=ws){super(),this.manager=i,this.adjustmentTransform=new He,this.ellipsoid=Un.clone()}resolveExternalURL(i){return this.manager.resolveURL(super.resolveExternalURL(i))}parse(i){return super.parse(i).then(e=>{let{featureTable:t,batchTable:n}=e,s=e.glbBytes.slice().buffer;return new Promise((r,a)=>{let o=this.fetchOptions,l=this.manager,c=l.getHandler("path.gltf")||new ns(l);o.credentials==="include"&&o.mode==="cors"&&c.setCrossOrigin("use-credentials"),"credentials"in o&&c.setWithCredentials(o.credentials==="include"),o.headers&&c.setRequestHeader(o.headers);let h=e.gltfWorkingPath??this.workingPath;/[\\/]$/.test(h)||(h+="/");let u=this.adjustmentTransform;c.parse(s,h,d=>{let f=t.getData("INSTANCES_LENGTH"),m=t.getData("POSITION",f,"FLOAT","VEC3"),y=t.getData("POSITION_QUANTIZED",f,"UNSIGNED_SHORT","VEC3"),p=t.getData("QUANTIZED_VOLUME_OFFSET",1,"FLOAT","VEC3"),g=t.getData("QUANTIZED_VOLUME_SCALE",1,"FLOAT","VEC3"),_=t.getData("NORMAL_UP",f,"FLOAT","VEC3"),v=t.getData("NORMAL_RIGHT",f,"FLOAT","VEC3"),M=t.getData("NORMAL_UP_OCT32P",f,"UNSIGNED_SHORT","VEC2"),I=t.getData("NORMAL_RIGHT_OCT32P",f,"UNSIGNED_SHORT","VEC2"),S=t.getData("SCALE_NON_UNIFORM",f,"FLOAT","VEC3"),A=t.getData("SCALE",f,"FLOAT","SCALAR"),R=t.getData("RTC_CENTER",1,"FLOAT","VEC3"),G=t.getData("EAST_NORTH_UP");if(!m&&y){m=new Float32Array(f*3);for(let N=0;N<f;N++)m[N*3+0]=p[0]+y[N*3+0]/65535*g[0],m[N*3+1]=p[1]+y[N*3+1]/65535*g[1],m[N*3+2]=p[2]+y[N*3+2]/65535*g[2]}let x=new P;for(let N=0;N<f;N++)x.x+=m[N*3+0]/f,x.y+=m[N*3+1]/f,x.z+=m[N*3+2]/f;let T=[],W=[];d.scene.updateMatrixWorld(),d.scene.traverse(N=>{if(N.isMesh){W.push(N);let{geometry:D,material:k}=N,B=new fi(D,k,f);B.position.copy(x),R&&(B.position.x+=R[0],B.position.y+=R[1],B.position.z+=R[2]),T.push(B)}});for(let N=0;N<f;N++){dd.set(m[N*3+0]-x.x,m[N*3+1]-x.y,m[N*3+2]-x.z),Dl.identity(),_&&v?(Tr.set(_[N*3+0],_[N*3+1],_[N*3+2]),Ar.set(v[N*3+0],v[N*3+1],v[N*3+2]),Ll.crossVectors(Ar,Tr).normalize(),Er.makeBasis(Ar,Tr,Ll),Dl.setFromRotationMatrix(Er)):M&&I&&(Vm(M[N*2+0],M[N*2+1],65535,Tr),Vm(I[N*2+0],I[N*2+1],65535,Ar),Ll.crossVectors(Ar,Tr).normalize(),Er.makeBasis(Ar,Tr,Ll),Dl.setFromRotationMatrix(Er)),Ul.set(1,1,1),S&&Ul.set(S[N*3+0],S[N*3+1],S[N*3+2]),A&&Ul.multiplyScalar(A[N]);for(let D=0,k=T.length;D<k;D++){let B=T[D];fd.copy(Dl),G&&(B.updateMatrixWorld(),zm.copy(dd).applyMatrix4(B.matrixWorld),this.ellipsoid.getPositionToCartographic(zm,pd),this.ellipsoid.getEastNorthUpFrame(pd.lat,pd.lon,km),fd.setFromRotationMatrix(km)),Er.compose(dd,fd,Ul).multiply(u);let J=W[D];Bm.multiplyMatrices(Er,J.matrixWorld),B.setMatrixAt(N,Bm)}}d.scene.clear(),d.scene.add(...T),d.batchTable=n,d.featureTable=t,d.scene.batchTable=n,d.scene.featureTable=t,r(d)},a)})})}},jm=class extends Am{constructor(i=ws){super(),this.manager=i,this.adjustmentTransform=new He,this.ellipsoid=Un.clone()}parse(i){let e=super.parse(i),{manager:t,ellipsoid:n,adjustmentTransform:s}=this,r=[];for(let a in e.tiles){let{type:o,buffer:l}=e.tiles[a];switch(o){case"b3dm":{let c=l.slice(),h=new xd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}case"pnts":{let c=l.slice(),h=new _d(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions;let u=h.parse(c.buffer);r.push(u);break}case"i3dm":{let c=l.slice(),h=new bd(t);h.workingPath=this.workingPath,h.fetchOptions=this.fetchOptions,h.ellipsoid.copy(n),h.adjustmentTransform.copy(s);let u=h.parse(c.buffer);r.push(u);break}}}return Promise.all(r).then(a=>{let o=new Vt;return a.forEach(l=>{o.add(l.scene)}),{tiles:a,scene:o}})}},Ma=new He,r1=class extends Vt{constructor(i){super(),this.isTilesGroup=!0,this.name="TilesRenderer.TilesGroup",this.tilesRenderer=i,this.matrixWorldInverse=new He}raycast(i,e){return this.tilesRenderer.raycast(i,e),!1}updateMatrixWorld(i){if(this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldNeedsUpdate||i){this.parent===null?Ma.copy(this.matrix):Ma.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1;let e=Ma.elements,t=this.matrixWorld.elements,n=!1;for(let s=0;s<16;s++){let r=e[s],a=t[s];if(Math.abs(r-a)>2**-52){n=!0;break}}if(n){this.matrixWorld.copy(Ma),this.matrixWorldInverse.copy(Ma).invert();let s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateMatrixWorld();let{tilesRenderer:r}=this,{activeTiles:a,visibleTiles:o}=r;a.forEach(l=>{o.has(l)||l.engineData.scene.updateMatrixWorld(!0)})}}}updateWorldMatrix(i,e){this.parent&&i&&this.parent.updateWorldMatrix(i,!1),this.updateMatrixWorld(!0)}},a1=new Ci;function o1(i,e,t,n){let{scene:s}=i.engineData;t.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(i,s,e,n))||e.intersectObject(s,!0,n)}function l1(i){return"traversal"in i}function $m(i,e,t,n,s=null){if(!l1(e))return;let{group:r,activeTiles:a}=i,{boundingVolume:o}=e.engineData;if(s===null&&(s=a1,s.copy(t.ray).applyMatrix4(r.matrixWorldInverse)),!e.traversal.used||!o.intersectsRay(s))return;a.has(e)&&o1(e,t,i,n);let l=e.children;for(let c=0,h=l.length;c<h;c++)$m(i,l[c],t,n,s)}var Nl=new P,Ol=new P,bi=new P,Fl=new Ci,vd=class{constructor(i=new ai,e=new He){this.box=i.clone(),this.transform=e.clone(),this.inverseTransform=new He,this.points=Array(8).fill().map(()=>new P),this.planes=[,,,,,,].fill().map(()=>new yi)}copy(i){return this.box.copy(i.box),this.transform.copy(i.transform),this.update(),this}clone(){return new this.constructor().copy(this)}clampPoint(i,e){return e.copy(i).applyMatrix4(this.inverseTransform).clamp(this.box.min,this.box.max).applyMatrix4(this.transform)}distanceToPoint(i){return this.clampPoint(i,bi).distanceTo(i)}containsPoint(i){return bi.copy(i).applyMatrix4(this.inverseTransform),this.box.containsPoint(bi)}intersectsRay(i){return Fl.copy(i).applyMatrix4(this.inverseTransform),Fl.intersectsBox(this.box)}intersectRay(i,e){return Fl.copy(i).applyMatrix4(this.inverseTransform),Fl.intersectBox(this.box,e)?(e.applyMatrix4(this.transform),e):null}update(){let{points:i,inverseTransform:e,transform:t,box:n}=this;e.copy(t).invert();let{min:s,max:r}=n,a=0;for(let o=-1;o<=1;o+=2)for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)i[a].set(o<0?s.x:r.x,l<0?s.y:r.y,c<0?s.z:r.z).applyMatrix4(t),a++;this.updatePlanes()}updatePlanes(){Nl.copy(this.box.min).applyMatrix4(this.transform),Ol.copy(this.box.max).applyMatrix4(this.transform),bi.set(0,0,1).transformDirection(this.transform),this.planes[0].setFromNormalAndCoplanarPoint(bi,Nl),this.planes[1].setFromNormalAndCoplanarPoint(bi,Ol).negate(),bi.set(0,1,0).transformDirection(this.transform),this.planes[2].setFromNormalAndCoplanarPoint(bi,Nl),this.planes[3].setFromNormalAndCoplanarPoint(bi,Ol).negate(),bi.set(1,0,0).transformDirection(this.transform),this.planes[4].setFromNormalAndCoplanarPoint(bi,Nl),this.planes[5].setFromNormalAndCoplanarPoint(bi,Ol).negate()}intersectsSphere(i){return this.clampPoint(i.center,bi),bi.distanceToSquared(i.center)<=i.radius*i.radius}intersectsFrustum(i){return this._intersectsPlaneShape(i.planes,i.points)}intersectsOBB(i){return this._intersectsPlaneShape(i.planes,i.points)}_intersectsPlaneShape(i,e){let t=this.points,n=this.planes;for(let s=0;s<6;s++){let r=i[s],a=-1/0;for(let o=0;o<8;o++){let l=t[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}for(let s=0;s<6;s++){let r=n[s],a=-1/0;for(let o=0;o<8;o++){let l=e[o],c=r.distanceToPoint(l);a=a<c?c:a}if(a<0)return!1}return!0}},wa=Math.PI,md=wa/2,ba=new P,Rs=new P,tn=new P,ot=new P,vi=new He,c1=new ai,Hm=new He;function rs(i,e){e.radius=Math.max(e.radius,i.distanceToSquared(e.center))}function Gm(i){return i.x!==i.y}var Zm=class extends Md{constructor(i=1,e=1,t=1,n=-md,s=md,r=0,a=2*wa,o=0,l=0){super(i,e,t),this.latStart=n,this.latEnd=s,this.lonStart=r,this.lonEnd=a,this.heightStart=o,this.heightEnd=l}getBoundingBox(i,e){Gm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported.");let{latStart:t,latEnd:n,lonStart:s,lonEnd:r,heightStart:a,heightEnd:o}=this,l=(t+n)*.5,c=(s+r)*.5,h=t>0,u=n<0,d;d=h?t:u?n:0;let{min:f,max:m}=i;f.setScalar(1/0),m.setScalar(-1/0),r-s<=wa?(this.getCartographicToNormal(l,c,tn),Rs.set(0,0,1),ba.crossVectors(Rs,tn).normalize(),Rs.crossVectors(tn,ba).normalize(),e.makeBasis(ba,Rs,tn),vi.copy(e).invert(),this.getCartographicToPosition(d,s,o,ot).applyMatrix4(vi),m.x=Math.abs(ot.x),f.x=-m.x,this.getCartographicToPosition(n,s,o,ot).applyMatrix4(vi),m.y=ot.y,this.getCartographicToPosition(n,c,o,ot).applyMatrix4(vi),m.y=Math.max(ot.y,m.y),this.getCartographicToPosition(t,s,o,ot).applyMatrix4(vi),f.y=ot.y,this.getCartographicToPosition(t,c,o,ot).applyMatrix4(vi),f.y=Math.min(ot.y,f.y),this.getCartographicToPosition(l,c,o,ot).applyMatrix4(vi),m.z=ot.z,this.getCartographicToPosition(t,s,a,ot).applyMatrix4(vi),f.z=ot.z,this.getCartographicToPosition(n,s,a,ot).applyMatrix4(vi),f.z=Math.min(ot.z,f.z)):(this.getCartographicToPosition(d,c,o,tn),tn.z=0,tn.length()<1e-10?tn.set(1,0,0):tn.normalize(),Rs.set(0,0,1),ba.crossVectors(tn,Rs).normalize(),e.makeBasis(ba,Rs,tn),vi.copy(e).invert(),this.getCartographicToPosition(d,c+md,o,ot).applyMatrix4(vi),m.x=Math.abs(ot.x),f.x=-m.x,this.getCartographicToPosition(n,0,u?a:o,ot).applyMatrix4(vi),m.y=ot.y,this.getCartographicToPosition(t,0,h?a:o,ot).applyMatrix4(vi),f.y=ot.y,this.getCartographicToPosition(d,c,o,ot).applyMatrix4(vi),m.z=ot.z,this.getCartographicToPosition(d,r,o,ot).applyMatrix4(vi),f.z=ot.z),i.getCenter(ot),i.min.sub(ot).multiplyScalar(1.0000000000001),i.max.sub(ot).multiplyScalar(1.0000000000001),ot.applyMatrix4(e),e.setPosition(ot)}getBoundingSphere(i){Gm(this.radius)&&console.warn("EllipsoidRegion: Triaxial ellipsoids are not supported."),this.getBoundingBox(c1,Hm),i.center.setFromMatrixPosition(Hm),i.radius=0;let{latStart:e,latEnd:t,lonStart:n,lonEnd:s,heightStart:r,heightEnd:a}=this,o=(e+t)*.5,l=(n+s)*.5,c=e>0,h=t<0,u;u=c?e:h?t:0,this.getCartographicToPosition(u,n,a,ot),rs(ot,i),this.getCartographicToPosition(t,n,a,ot),rs(ot,i),this.getCartographicToPosition(t,l,a,ot),rs(ot,i),this.getCartographicToPosition(e,n,a,ot),rs(ot,i),this.getCartographicToPosition(e,l,a,ot),rs(ot,i),this.getCartographicToPosition(o,l,a,ot),rs(ot,i),this.getCartographicToPosition(e,n,r,ot),rs(ot,i),s-n>wa&&(this.getCartographicToPosition(u,l+wa,a,ot),rs(ot,i)),i.radius=Math.sqrt(i.radius)*1.0000000000001}},In=new P,Ln=new P,Dn=new P,Wm=new P,qm=new P,h1=class{constructor(){this.sphere=null,this.obb=null,this.region=null,this.regionObb=null}intersectsRay(i){let e=this.sphere,t=this.obb||this.regionObb;return!(e&&!i.intersectsSphere(e)||t&&!t.intersectsRay(i))}intersectRay(i,e=null){let t=this.sphere,n=this.obb||this.regionObb,s=-1/0,r=-1/0;t&&i.intersectSphere(t,Wm)&&(s=t.containsPoint(i.origin)?0:i.origin.distanceToSquared(Wm)),n&&n.intersectRay(i,qm)&&(r=n.containsPoint(i.origin)?0:i.origin.distanceToSquared(qm));let a=Math.max(s,r);return a===-1/0?null:(i.at(Math.sqrt(a),e),e)}distanceToPoint(i){let e=this.sphere,t=this.obb||this.regionObb,n=-1/0,s=-1/0;return e&&(n=Math.max(e.distanceToPoint(i),0)),t&&(s=t.distanceToPoint(i)),n>s?n:s}intersectsFrustum(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsFrustum(i)?!1:!!(t||e)}intersectsSphere(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!t.intersectsSphere(i)||e&&!e.intersectsSphere(i)?!1:!!(t||e)}intersectsOBB(i){let e=this.obb||this.regionObb,t=this.sphere;return t&&!i.intersectsSphere(t)||e&&!e.intersectsOBB(i)?!1:!!(t||e)}getOBB(i,e){let t=this.obb||this.regionObb;t?(i.copy(t.box),e.copy(t.transform)):(this.getAABB(i),e.identity())}getAABB(i){if(this.sphere)this.sphere.getBoundingBox(i);else{let e=this.obb||this.regionObb;i.copy(e.box).applyMatrix4(e.transform)}}getSphere(i){if(this.sphere)i.copy(this.sphere);else if(this.region)this.region.getBoundingSphere(i);else{let e=this.obb||this.regionObb;e.box.getBoundingSphere(i),i.applyMatrix4(e.transform)}}setObbData(i,e){let t=new vd;In.set(i[3],i[4],i[5]),Ln.set(i[6],i[7],i[8]),Dn.set(i[9],i[10],i[11]);let n=In.length(),s=Ln.length(),r=Dn.length();In.normalize(),Ln.normalize(),Dn.normalize(),n===0&&In.crossVectors(Ln,Dn),s===0&&Ln.crossVectors(In,Dn),r===0&&Dn.crossVectors(In,Ln),t.transform.set(In.x,Ln.x,Dn.x,i[0],In.y,Ln.y,Dn.y,i[1],In.z,Ln.z,Dn.z,i[2],0,0,0,1).premultiply(e),t.box.min.set(-n,-s,-r),t.box.max.set(n,s,r),t.update(),this.obb=t}setSphereData(i,e,t,n,s){let r=new Qt;r.center.set(i,e,t),r.radius=n,r.applyMatrix4(s),this.sphere=r}setRegionData(i,e,t,n,s,r,a){let o=new Zm(...i.radius,t,s,e,n,r,a),l=new vd;o.getBoundingBox(l.box,l.transform),l.update(),this.region=o,this.regionObb=l}},u1=new dt;function d1(i,e,t,n){let s=u1.set(i.normal.x,i.normal.y,i.normal.z,e.normal.x,e.normal.y,e.normal.z,t.normal.x,t.normal.y,t.normal.z);return n.set(-i.constant,-e.constant,-t.constant),n.applyMatrix3(s.invert()),n}var f1=class extends qn{constructor(){super(),this.points=Array(8).fill().map(()=>new P)}setFromProjectionMatrix(...i){return super.setFromProjectionMatrix(...i),this.calculateFrustumPoints(),this}calculateFrustumPoints(){let{planes:i,points:e}=this;[[i[0],i[3],i[4]],[i[1],i[3],i[4]],[i[0],i[2],i[4]],[i[1],i[2],i[4]],[i[0],i[3],i[5]],[i[1],i[3],i[5]],[i[0],i[2],i[5]],[i[1],i[2],i[5]]].forEach((t,n)=>{d1(t[0],t[1],t[2],e[n])})}};var yd=0;function Xm(i,e,t,n){try{return vu.getByteLength(i,e,t,n)}catch{return yd}}function p1(i){if(!i)return 0;if(i.isExternalTexture)return i.userData?.byteLength??yd;let{format:e,type:t,image:n,mipmaps:s}=i;if(i.isCompressedTexture&&Array.isArray(s)&&s.length>0){let a=0;for(let o of s)o?.data?.byteLength?a+=o.data.byteLength:a+=Xm(o.width,o.height,e,t);return a}if(!n)return yd;let r=Xm(n.width,n.height,e,t);return r*=i.generateMipmaps?4/3:1,r}function m1(i){let e=new Set,t=0;return i.traverse(n=>{if(n.geometry&&!e.has(n.geometry)&&(t+=Em(n.geometry),e.add(n.geometry)),n.material){let s=n.material;for(let r in s){let a=s[r];a&&a.isTexture&&!e.has(a)&&(t+=p1(a),e.add(a))}}}),t}var Km=Symbol("INITIAL_FRUSTUM_CULLED"),Bl=new He,Sa=new P,gd=new he,g1=new P(1,0,0),v1=new P(0,1,0),y1=()=>null;function Ym(i,e){i.traverse(t=>{t.frustumCulled=t[Km]&&e})}var Sd=class extends Mm{get autoDisableRendererCulling(){return this._autoDisableRendererCulling}set autoDisableRendererCulling(i){this._autoDisableRendererCulling!==i&&(super._autoDisableRendererCulling=i,this.forEachLoadedModel(e=>{Ym(e,!i)}))}constructor(...i){super(...i),this.accelerateRaycast=!0,this.group=new r1(this),this.ellipsoid=Un.clone(),this.surface=this.ellipsoid,this.cameras=[],this.cameraMap=new Map,this.cameraInfo=[],this._upRotationMatrix=new He,this._bytesUsed=new WeakMap,this._autoDisableRendererCulling=!0,this.manager=new bs,this._listeners={}}addEventListener(i,e){xi.prototype.addEventListener.call(this,i,e)}hasEventListener(i,e){return xi.prototype.hasEventListener.call(this,i,e)}removeEventListener(i,e){xi.prototype.removeEventListener.call(this,i,e)}dispatchEvent(i){xi.prototype.dispatchEvent.call(this,i)}getBoundingBox(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getAABB(i),!0):!1}getOrientedBoundingBox(i,e){if(!this.root)return!1;let t=this.root.engineData.boundingVolume;return t?(t.getOBB(i,e),!0):!1}getBoundingSphere(i){if(!this.root)return!1;let e=this.root.engineData.boundingVolume;return e?(e.getSphere(i),!0):!1}forEachLoadedModel(i){this.traverse(e=>{let t=e.engineData&&e.engineData.scene;t&&i(t,e)},null,!1)}raycast(i,e){if(this.root)if(this.accelerateRaycast)$m(this,this.root,i,e);else{let t=i.firstHitOnly?[]:e;for(let n of this.activeTiles){let{scene:s}=n.engineData;this.invokeOnePlugin(r=>r.raycastTile&&r.raycastTile(n,s,i,t))||i.intersectObject(s,!0,t)}i.firstHitOnly&&t.length>0&&(t.sort((n,s)=>n.distance-s.distance),e.push(t[0]))}}hasCamera(i){return this.cameraMap.has(i)}setCamera(i){let e=this.cameras,t=this.cameraMap;return t.has(i)?!1:(t.set(i,new he),e.push(i),this.dispatchEvent({type:"add-camera",camera:i}),!0)}setResolution(i,e,t){let n=this.cameraMap;if(!n.has(i))return!1;let s=e.isVector2?e.x:e,r=e.isVector2?e.y:t,a=n.get(i);return(a.width!==s||a.height!==r)&&(a.set(s,r),this.dispatchEvent({type:"camera-resolution-change"})),!0}getResolution(i,e){let t=this.cameraMap.get(i);return t?e.copy(t):null}setResolutionFromRenderer(i,e){return e.getSize(gd),this.setResolution(i,gd.x,gd.y)}deleteCamera(i){let e=this.cameras,t=this.cameraMap;if(t.has(i)){let n=e.indexOf(i);return e.splice(n,1),t.delete(i),this.dispatchEvent({type:"delete-camera",camera:i}),!0}return!1}loadRootTileset(...i){return super.loadRootTileset(...i).then(e=>{let{asset:t,extensions:n={}}=e;switch((t&&t.gltfUpAxis||"y").toLowerCase()){case"x":this._upRotationMatrix.makeRotationAxis(v1,-Math.PI/2);break;case"y":this._upRotationMatrix.makeRotationAxis(g1,Math.PI/2);break}if("3DTILES_ellipsoid"in n){let s=n["3DTILES_ellipsoid"],{ellipsoid:r}=this;r.name=s.body,s.radii?r.radius.set(...s.radii):r.radius.set(1,1,1)}return e})}prepareForTraversal(){let i=this.group,e=this.cameras,t=this.cameraMap,n=this.cameraInfo;for(;n.length>e.length;)n.pop();for(;n.length<e.length;)n.push({frustum:new f1,isOrthographic:!1,sseDenominator:-1,position:new P,invScale:-1,pixelSize:0});Sa.setFromMatrixScale(i.matrixWorldInverse),Math.abs(Math.max(Sa.x-Sa.y,Sa.x-Sa.z))>1e-6&&console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");for(let s=0,r=n.length;s<r;s++){let a=e[s],o=n[s],l=o.frustum,c=o.position,h=t.get(a);(h.width===0||h.height===0)&&console.warn("TilesRenderer: resolution for camera error calculation is not set.");let u=a.projectionMatrix.elements;if(o.isOrthographic=u[15]===1,o.isOrthographic){let d=2/u[0],f=2/u[5];o.pixelSize=Math.max(f/h.height,d/h.width)}else o.sseDenominator=2/u[5]/h.height;Bl.copy(i.matrixWorld),Bl.premultiply(a.matrixWorldInverse),Bl.premultiply(a.projectionMatrix),l.setFromProjectionMatrix(Bl,a.coordinateSystem,a.reversedDepth),c.set(0,0,0),c.applyMatrix4(a.matrixWorld),c.applyMatrix4(i.matrixWorldInverse)}}update(){if(super.update(),this.cameras.length===0&&this.root){let i=!1;this.invokeAllPlugins(e=>i||(i=!!(e!==this&&e.calculateTileViewError))),i===!1&&console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.")}}preprocessNode(i,e,t=null){super.preprocessNode(i,e,t);let n=new He;if(i.transform){let a=i.transform;for(let o=0;o<16;o++)n.elements[o]=a[o]}t&&n.premultiply(t.engineData.transform);let s=new He().copy(n).invert(),r=new h1;"sphere"in i.boundingVolume&&r.setSphereData(...i.boundingVolume.sphere,n),"box"in i.boundingVolume&&r.setObbData(i.boundingVolume.box,n),"region"in i.boundingVolume&&r.setRegionData(this.ellipsoid,...i.boundingVolume.region),i.engineData.transform=n,i.engineData.transformInverse=s,i.engineData.boundingVolume=r,i.engineData.geometry=null,i.engineData.materials=null,i.engineData.textures=null,i.toJSON=y1}async parseTile(i,e,t,n,s){let r=e.engineData,a=Cl(n),o=this.fetchOptions,l=this.manager,c=null,h=r.transform,u=this._upRotationMatrix,d=(ts(i)||t).toLowerCase();switch(d){case"b3dm":{let v=new xd(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),c=v.parse(i);break}case"pnts":{let v=new _d(l);v.workingPath=a,v.fetchOptions=o,c=v.parse(i);break}case"i3dm":{let v=new bd(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i);break}case"cmpt":{let v=new jm(l);v.workingPath=a,v.fetchOptions=o,v.adjustmentTransform.copy(u),v.ellipsoid.copy(this.ellipsoid),c=v.parse(i).then(M=>M.scene);break}case"gltf":case"glb":{let v=l.getHandler("path.gltf")||l.getHandler("path.glb")||new ns(l);v.setWithCredentials(o.credentials==="include"),v.setRequestHeader(o.headers||{}),o.credentials==="include"&&o.mode==="cors"&&v.setCrossOrigin("use-credentials");let M=v.resourcePath||v.path||a;!/[\\/]$/.test(M)&&M.length&&(M+="/"),c=v.parseAsync(i,M).then(I=>{I.scene=I.scene||new Vt;let{scene:S}=I;return S.updateMatrix(),S.matrix.multiply(u).decompose(S.position,S.quaternion,S.scale),I});break}default:c=this.invokeOnePlugin(v=>v.parseToMesh&&v.parseToMesh(i,e,t,n,s));break}let f=await c;if(f===null)throw Error(`TilesRenderer: Content type "${d}" not supported.`);let m,y;f.isObject3D?(m=f,y=null):(m=f.scene,y=f),m.updateMatrix(),m.matrix.premultiply(h),m.matrix.decompose(m.position,m.quaternion,m.scale),await this.invokeAllPlugins(v=>v.processTileModel&&v.processTileModel(m,e)),m.traverse(v=>{v[Km]=v.frustumCulled,v.userData.tile=e}),Ym(m,!this.autoDisableRendererCulling);let p=[],g=[],_=[];if(m.traverse(v=>{if(v.geometry&&g.push(v.geometry),v.material){let M=v.material;p.push(v.material);for(let I in M){let S=M[I];S&&S.isTexture&&_.push(S)}}}),s.aborted){for(let v=0,M=_.length;v<M;v++){let I=_[v];I.image instanceof ImageBitmap&&I.image.close(),I.dispose()}return}r.materials=p,r.geometry=g,r.textures=_,r.scene=m,r.metadata=y}disposeTile(i){super.disposeTile(i);let e=i.engineData;if(e.scene){let t=e.materials,n=e.geometry,s=e.textures,r=e.scene.parent;e.scene.traverse(a=>{a.userData.meshFeatures&&a.userData.meshFeatures.dispose(),a.userData.structuralMetadata&&a.userData.structuralMetadata.dispose()});for(let a=0,o=n.length;a<o;a++)n[a].dispose();for(let a=0,o=t.length;a<o;a++)t[a].dispose();for(let a=0,o=s.length;a<o;a++){let l=s[a];l.image instanceof ImageBitmap&&l.image.close(),l.dispose()}r&&r.remove(e.scene),e.scene=null,e.materials=null,e.textures=null,e.geometry=null,e.metadata=null}}setTileActive(i,e){super.setTileActive(i,e);let t=i.engineData.scene;t&&(e?(t.parent=this.group,t.updateMatrixWorld(!0)):this.visibleTiles.has(i)||(t.parent=null))}setTileVisible(i,e){let t=i.engineData.scene,{activeTiles:n,group:s}=this;t&&(e?s.add(t):(s.remove(t),n.has(i)&&(t.parent=s))),super.setTileVisible(i,e)}calculateBytesUsed(i,e){let t=this._bytesUsed;return!t.has(i)&&e&&t.set(i,m1(e)),t.get(i)??null}calculateTileViewError(i,e){let t=i.engineData,n=this.cameras,s=this.cameraInfo,r=t.boundingVolume,a=!1,o=0,l=1/0,c=0,h=1/0;for(let u=0,d=n.length;u<d;u++){let f=s[u],m,y;if(f.isOrthographic){let g=f.pixelSize;m=i.geometricError/g,y=1/0}else{let g=f.sseDenominator;y=r.distanceToPoint(f.position),m=y===0?1/0:i.geometricError/(y*g)}let p=s[u].frustum;r.intersectsFrustum(p)&&(a=!0,o=Math.max(o,m),l=Math.min(l,y)),c=Math.max(c,m),h=Math.min(h,y)}a?(e.inView=!0,e.error=o,e.distanceFromCamera=l):(e.inView=!1,e.error=c,e.distanceFromCamera=h)}dispose(){super.dispose(),this.group.removeFromParent()}};var Jm="https://tile.googleapis.com/v1/createSession",eg=class{get isMapTilesSession(){return this.authURL===Jm}constructor(i={}){let{apiToken:e,sessionOptions:t=null,autoRefreshToken:n=!1}=i;this.apiToken=e,this.autoRefreshToken=n,this.authURL=Jm,this.sessionToken=null,this.sessionOptions=t,this._tokenRefreshPromise=null,this._authHostname=null}async fetch(i,e){this.sessionToken===null&&this.isMapTilesSession&&this.refreshToken(e),await this._tokenRefreshPromise,this._authHostname===null&&(this._authHostname=new URL(this.authURL).host);let t=new URL(i),n=t.host===this._authHostname;n&&(t.searchParams.set("key",this.apiToken),this.sessionToken&&t.searchParams.set("session",this.sessionToken));let s=await fetch(t,e);return n&&s.status>=400&&s.status<=499&&this.autoRefreshToken&&(await this.refreshToken(e),this.sessionToken&&t.searchParams.set("session",this.sessionToken),s=await fetch(t,e)),this.sessionToken===null&&!this.isMapTilesSession?s.json().then(r=>(this.sessionToken=Qm(r),r)):s}refreshToken(i){if(this._tokenRefreshPromise===null){let e=new URL(this.authURL);e.searchParams.set("key",this.apiToken);let t={...i};this.isMapTilesSession&&(t.method="POST",t.body=JSON.stringify(this.sessionOptions),t.headers=t.headers||{},t.headers={...t.headers,"Content-Type":"application/json"}),this._tokenRefreshPromise=fetch(e,t).then(n=>{if(!n.ok)throw Error(`GoogleCloudAuth: Failed to load data with error code ${n.status}`);return n.json()}).then(n=>(this.sessionToken=Qm(n),this._tokenRefreshPromise=null,n))}return this._tokenRefreshPromise}};function Qm(i){if("session"in i)return i.session;{let e=null,t=i.root;return Iu(t,n=>{if(n.content&&n.content.uri){let[,s]=n.content.uri.split("?");return e=new URLSearchParams(s).get("session"),!0}return!1}),e}}var x1=class{constructor(){this.creditsCount={}}_adjustAttributions(i,e){let t=this.creditsCount,n=i.split(/;/g);for(let s=0,r=n.length;s<r;s++){let a=n[s];a in t||(t[a]=0),t[a]+=e?1:-1,t[a]<=0&&delete t[a]}}addAttributions(i){this._adjustAttributions(i,!0)}removeAttributions(i){this._adjustAttributions(i,!1)}toString(){return Object.entries(this.creditsCount).sort((i,e)=>{let t=i[1];return e[1]-t}).map(i=>i[0]).join("; ")}},_1="https://tile.googleapis.com/v1/3dtiles/root.json",wd=class{constructor({apiToken:i,sessionOptions:e=null,autoRefreshToken:t=!1,logoUrl:n=null,useRecommendedSettings:s=!0}){this.name="GOOGLE_CLOUD_AUTH_PLUGIN",this.apiToken=i,this.useRecommendedSettings=s,this.logoUrl=n,this.auth=new eg({apiToken:i,autoRefreshToken:t,sessionOptions:e}),this.tiles=null,this._visibilityChangeCallback=null,this._attributionsManager=new x1,this._logoAttribution={value:"",type:"image",collapsible:!1},this._attribution={value:"",type:"string",collapsible:!0}}init(i){let{useRecommendedSettings:e,auth:t}=this;i.resetFailedTiles(),i.rootURL??(i.rootURL=_1),t.sessionOptions||(t.authURL=i.rootURL),e&&!t.isMapTilesSession&&(i.errorTarget=20),this.tiles=i,this._visibilityChangeCallback=({tile:n,visible:s})=>{let r=n.engineData.metadata?.asset?.copyright||"";s?this._attributionsManager.addAttributions(r):this._attributionsManager.removeAttributions(r)},i.addEventListener("tile-visibility-change",this._visibilityChangeCallback)}getAttributions(i){this.tiles.visibleTiles.size>0&&(this.logoUrl&&(this._logoAttribution.value=this.logoUrl,i.push(this._logoAttribution)),this._attribution.value=this._attributionsManager.toString(),i.push(this._attribution))}dispose(){this.tiles.removeEventListener("tile-visibility-change",this._visibilityChangeCallback)}async fetchData(i,e){return this.auth.fetch(i,e)}};var tg=1.340264,ig=-.081106,ng=893e-6,sg=.003796,rg=Math.sqrt(3)/2;function _g(i,e,t){let n=Math.asin(rg*Math.sin(e)),s=n*n,r=s*s*s;return t[0]=i*Math.cos(n)/(rg*(tg+3*ig*s+r*(7*ng+9*sg*s))),t[1]=n*(tg+ig*s+r*(ng+sg*s)),t}var yT=_g(Math.PI,0,[0,0])[0],xT=_g(0,Math.PI/2,[0,0])[1];var M1=Symbol("TILE_X"),b1=Symbol("TILE_Y"),S1=Symbol("TILE_LEVEL");var _T=Symbol("OVERLAY_RANGE"),MT=Symbol("OVERLAY_LEVEL");var bT=Symbol("OVERLAY_PARAMS");var ST=Object.freeze({fill:"#cccccc",stroke:"transparent",strokeWidth:1,radius:2,order:0,visible:!0});var wT=Symbol("SPLIT_TILE_DATA"),TT=Symbol("SPLIT_HASH"),AT=Symbol("ORIGINAL_REFINE"),ag=new Mr;ag.maxJobs=10,ag.priorityCallback=(i,e)=>{let t=i.tile,n=e.tile,s=t.internal.renderer,r=n.internal.renderer,a=s.visibleTiles.has(t);return a===r.visibleTiles.has(n)?va(t,n):a?1:-1};var ET=Symbol("TILE_X"),CT=Symbol("TILE_Y"),PT=Symbol("TILE_LEVEL"),RT=Symbol("TILE_AVAILABLE"),IT=Symbol("TILE_SPLIT_SOURCE_SCENE");var og=new P;function Ta(i,e){if(i.isInterleavedBufferAttribute||i.array instanceof e)return i;let t=e===Int8Array||e===Int16Array||e===Int32Array?-1:0,n=new ct(new e(i.count*i.itemSize),i.itemSize,!0),s=i.itemSize,r=i.count;for(let a=0;a<r;a++)for(let o=0;o<s;o++){let l=Cn.clamp(i.getComponent(a,o),t,1);n.setComponent(a,o,l)}return n}function w1(i,e=Int16Array){let t=i.geometry,n=t.attributes,s=n.position;if(s.isInterleavedBufferAttribute||s.array instanceof e)return s;let r=new ct(new e(s.count*s.itemSize),s.itemSize,!1),a=s.itemSize,o=s.count;t.computeBoundingBox();let l=t.boundingBox,{min:c,max:h}=l,u=2**(8*e.BYTES_PER_ELEMENT-1)-1,d=-u;for(let f=0;f<o;f++)for(let m=0;m<a;m++){let y=m===0?"x":m===1?"y":"z",p=c[y],g=h[y],_=Cn.mapLinear(s.getComponent(f,m),p,g,d,u);r.setComponent(f,m,_)}l.getCenter(og).multiply(i.scale).applyQuaternion(i.quaternion),i.position.add(og),i.scale.x*=.5*(h.x-c.x)/u,i.scale.y*=.5*(h.y-c.y)/u,i.scale.z*=.5*(h.z-c.z)/u,n.position=r,i.geometry.boundingBox=null,i.geometry.boundingSphere=null,i.updateMatrixWorld()}var Ed=class{constructor(i){this._options={generateNormals:!1,disableMipmaps:!0,compressIndex:!0,compressNormals:!1,compressUvs:!1,compressPosition:!1,uvType:Int8Array,normalType:Int8Array,positionType:Int16Array,...i},this.name="TILES_COMPRESSION_PLUGIN",this.priority=-100}processTileModel(i,e){let{generateNormals:t,disableMipmaps:n,compressIndex:s,compressUvs:r,compressNormals:a,compressPosition:o,uvType:l,normalType:c,positionType:h}=this._options;i.traverse(u=>{if(u.material&&n){let d=u.material;for(let f in d){let m=d[f];m&&m.isTexture&&m.generateMipmaps&&(m.generateMipmaps=!1,m.minFilter=ri)}}if(u.geometry){let d=u.geometry,f=d.attributes;if(r){let{uv:m,uv1:y,uv2:p,uv3:g}=f;m&&(f.uv=Ta(m,l)),y&&(f.uv1=Ta(y,l)),p&&(f.uv2=Ta(p,l)),g&&(f.uv3=Ta(g,l))}if(t&&!f.normals&&d.computeVertexNormals(),a&&f.normals&&(f.normals=Ta(f.normals,c)),o&&w1(u,h),s&&d.index){let m=f.position.count,y=d.index,p=m>65535?Uint32Array:m>255?Uint16Array:Uint8Array;if(!(y.array instanceof p)){let g=new p(d.index.count);g.set(y.array);let _=new ct(g,1);d.setIndex(_)}}}})}};function Kt(i,e,t){return i&&e in i?i[e]:t}function Mg(i){return i!=="BOOLEAN"&&i!=="STRING"&&i!=="ENUM"}function T1(i){return/^FLOAT/.test(i)}function Pa(i){return/^VEC/.test(i)}function Ra(i){return/^MAT/.test(i)}function bg(i,e,t,n=null){return Ra(t)||Pa(t)?n.fromArray(i,e):i[e]}function Td(i){let{type:e,componentType:t}=i;switch(e){case"SCALAR":return t==="INT64"?0n:0;case"VEC2":return new he;case"VEC3":return new P;case"VEC4":return new xt;case"MAT2":return new el;case"MAT3":return new dt;case"MAT4":return new He;case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return 0}}function lg(i,e){if(e==null)return!1;switch(i){case"SCALAR":return typeof e=="number"||typeof e=="bigint";case"VEC2":return e.isVector2;case"VEC3":return e.isVector3;case"VEC4":return e.isVector4;case"MAT2":return e.isMatrix2;case"MAT3":return e.isMatrix3;case"MAT4":return e.isMatrix4;case"BOOLEAN":return typeof e=="boolean";case"STRING":return typeof e=="string";case"ENUM":return typeof e=="number"||typeof e=="bigint"}throw Error("ClassProperty: invalid type.")}function Ca(i,e=null){switch(i){case"INT8":return Int8Array;case"INT16":return Int16Array;case"INT32":return Int32Array;case"INT64":return BigInt64Array;case"UINT8":return Uint8Array;case"UINT16":return Uint16Array;case"UINT32":return Uint32Array;case"UINT64":return BigUint64Array;case"FLOAT32":return Float32Array;case"FLOAT64":return Float64Array}switch(e){case"BOOLEAN":return Uint8Array;case"STRING":return Uint8Array}throw Error("ClassProperty: invalid type.")}function A1(i,e=null){if(i.array){e=e&&Array.isArray(e)?e:[],e.length=i.count;for(let t=0,n=e.length;t<n;t++)e[t]=zl(i,e[t])}else e=zl(i,e);return e}function zl(i,e=null){let t=i.default,n=i.type;if(e||(e=Td(i)),t===null){switch(n){case"SCALAR":return 0;case"VEC2":return e.set(0,0);case"VEC3":return e.set(0,0,0);case"VEC4":return e.set(0,0,0,0);case"MAT2":return e.identity();case"MAT3":return e.identity();case"MAT4":return e.identity();case"BOOLEAN":return!1;case"STRING":return"";case"ENUM":return""}throw Error("ClassProperty: invalid type.")}else if(Ra(n))e.fromArray(t);else if(Pa(n))e.fromArray(t);else return t}function E1(i,e){if(i.noData===null)return e;let t=i.noData,n=i.type;if(Array.isArray(e))for(let a=0,o=e.length;a<o;a++)e[a]=s(e[a]);else e=s(e);return e;function s(a){return r(a)&&(a=zl(i,a)),a}function r(a){if(Ra(n)){let o=a.elements;for(let l=0,c=t.length;l<c;l++)if(t[l]!==o[l])return!1;return!0}else if(Pa(n)){for(let o=0,l=t.length;o<l;o++)if(t[o]!==a.getComponent(o))return!1;return!0}else return t===a}}function C1(i,e){switch(i){case"INT8":return Math.max(e/127,-1);case"INT16":return Math.max(e,32767,-1);case"INT32":return Math.max(e/2147483647,-1);case"INT64":return Math.max(Number(e)/9223372036854776e3,-1);case"UINT8":return e/255;case"UINT16":return e/65535;case"UINT32":return e/4294967295;case"UINT64":return Number(e)/18446744073709552e3}}function P1(i,e){let{type:t,componentType:n,scale:s,offset:r,normalized:a}=i;if(Array.isArray(e))for(let u=0,d=e.length;u<d;u++)e[u]=o(e[u]);else e=o(e);return e;function o(u){return u=Ra(t)?c(u):Pa(t)?l(u):h(u),u}function l(u){return u.x=h(u.x),u.y=h(u.y),"z"in u&&(u.z=h(u.z)),"w"in u&&(u.w=h(u.w)),u}function c(u){let d=u.elements;for(let f=0,m=d.length;f<m;f++)d[f]=h(d[f]);return u}function h(u){return a&&(u=C1(n,u)),(a||T1(n))&&(u=u*s+r),u}}function Cd(i,e,t=null){if(i.array){Array.isArray(e)||(e=Array(i.count||0)),e.length=t===null?i.count:t;for(let n=0,s=e.length;n<s;n++)lg(i.type,e[n])||(e[n]=Td(i))}else lg(i.type,e)||(e=Td(i));return e}function kl(i,e){for(let t in e)t in i||delete e[t];for(let t in i){let n=i[t];e[t]=Cd(n,e[t])}}function R1(i){switch(i){case"ENUM":return 1;case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;case"BOOLEAN":return-1;case"STRING":return-1;default:return-1}}var Hl=class{constructor(i,e,t=null){this.name=e.name||null,this.description=e.description||null,this.type=e.type,this.componentType=e.componentType||null,this.enumType=e.enumType||null,this.array=e.array||!1,this.count=e.count||0,this.normalized=e.normalized||!1,this.offset=e.offset||0,this.scale=Kt(e,"scale",1),this.max=Kt(e,"max",1/0),this.min=Kt(e,"min",-1/0),this.required=e.required||!1,this.noData=Kt(e,"noData",null),this.default=Kt(e,"default",null),this.semantic=Kt(e,"semantic",null),this.enumSet=null,this.accessorProperty=t,t&&(this.offset=Kt(t,"offset",this.offset),this.scale=Kt(t,"scale",this.scale),this.max=Kt(t,"max",this.max),this.min=Kt(t,"min",this.min)),e.type==="ENUM"&&(this.enumSet=i[this.enumType],this.componentType===null&&(this.componentType=Kt(this.enumSet,"valueType","UINT16")))}shapeToProperty(i,e=null){return Cd(this,i,e)}resolveDefaultElement(i){return zl(this,i)}resolveDefault(i){return A1(this,i)}resolveNoData(i){return E1(this,i)}resolveEnumsToStrings(i){let e=this.enumSet;if(this.type==="ENUM")if(Array.isArray(i))for(let n=0,s=i.length;n<s;n++)i[n]=t(i[n]);else i=t(i);return i;function t(n){let s=e.values.find(r=>r.value===n);return s===null?"":s.name}}adjustValueScaleOffset(i){return Mg(this.type)?P1(this,i):i}},Pd=class{constructor(i,e={},t={},n=null){this.definition=i,this.class=e[i.class],this.className=i.class,this.enums=t,this.data=n,this.name="name"in i?i.name:null,this.properties=null}getPropertyNames(){return Object.keys(this.class.properties)}includesData(i){return!!this.definition.properties[i]}dispose(){}_initProperties(i=Hl){let e={};for(let t in this.class.properties)e[t]=new i(this.enums,this.class.properties[t],this.definition.properties[t]);this.properties=e}},I1=class extends Hl{constructor(i,e,t=null){super(i,e,t),this.attribute=t?.attribute??null}},L1=class extends Pd{constructor(...i){super(...i),this.isPropertyAttributeAccessor=!0,this._initProperties(I1)}getData(i,e,t={}){let n=this.properties;kl(n,t);for(let s in n)t[s]=this.getPropertyValue(s,i,e,t[s]);return t}getPropertyValue(i,e,t,n=null){if(e>=this.count)throw Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");let s=this.properties[i],r=s.type;if(!s)throw Error("PropertyAttributeAccessor: Requested class property does not exist.");if(!this.definition.properties[i])return s.resolveDefault(n);n=s.shapeToProperty(n);let a=t.getAttribute(s.attribute.toLowerCase());if(Ra(r)){let o=n.elements;for(let l=o.length;0<l;)o[0]=a.getComponent(e,0)}else if(Pa(r))n.fromBufferAttribute(a,e);else if(r==="SCALAR"||r==="ENUM")n=a.getX(e);else throw Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");return n=s.adjustValueScaleOffset(n),n=s.resolveEnumsToStrings(n),n=s.resolveNoData(n),n}},D1=class extends Hl{constructor(i,e,t=null){super(i,e,t),this.values=t?.values??null,this.valueLength=R1(this.type),this.arrayOffsets=Kt(t,"arrayOffsets",null),this.stringOffsets=Kt(t,"stringOffsets",null),this.arrayOffsetType=Kt(t,"arrayOffsetType","UINT32"),this.stringOffsetType=Kt(t,"stringOffsetType","UINT32")}getArrayLengthFromId(i,e){let t=this.count;if(this.arrayOffsets!==null){let{arrayOffsets:n,arrayOffsetType:s}=this,r=new(Ca(s))(i[n]);t=r[e+1]-r[e]}return t}getIndexOffsetFromId(i,e){let t=e;if(this.arrayOffsets){let{arrayOffsets:n,arrayOffsetType:s}=this;t=new(Ca(s))(i[n])[t]}else this.array&&(t*=this.count);return t}},U1=class extends Pd{constructor(...i){super(...i),this.isPropertyTableAccessor=!0,this.count=this.definition.count,this._initProperties(D1)}getData(i,e={}){let t=this.properties;kl(t,e);for(let n in t)e[n]=this.getPropertyValue(n,i,e[n]);return e}_readValueAtIndex(i,e,t,n=null){let s=this.properties[i],{componentType:r,type:a}=s,o=this.data,l=o[s.values],c=new(Ca(r,a))(l),h=s.getIndexOffsetFromId(o,e);if(Mg(a)||a==="ENUM")return bg(c,(h+t)*s.valueLength,a,n);if(a==="STRING"){let u=h+t,d=0;if(s.stringOffsets!==null){let{stringOffsets:m,stringOffsetType:y}=s,p=new(Ca(y))(o[m]);d=p[u+1]-p[u],u=p[u]}let f=new Uint8Array(c.buffer,u,d);n=new TextDecoder().decode(f)}else if(a==="BOOLEAN"){let u=h+t,d=Math.floor(u/8),f=u%8;n=(c[d]>>f&1)==1}return n}getPropertyValue(i,e,t=null){if(e>=this.count)throw Error("PropertyTableAccessor: Requested index is outside the range of the table.");let n=this.properties[i];if(!n)throw Error("PropertyTableAccessor: Requested property does not exist.");if(!this.definition.properties[i])return n.resolveDefault(t);let s=n.array,r=this.data,a=n.getArrayLengthFromId(r,e);if(t=n.shapeToProperty(t,a),s)for(let o=0,l=t.length;o<l;o++)t[o]=this._readValueAtIndex(i,e,o,t[o]);else t=this._readValueAtIndex(i,e,0,t);return t=n.adjustValueScaleOffset(t),t=n.resolveEnumsToStrings(t),t=n.resolveNoData(t),t}},Aa=new tl,cg=class{constructor(){this._renderer=new hr,this._target=new Ot(1,1),this._texTarget=new Ot,this._quad=new Li(new St({blending:Qh,blendDst:eu,blendSrc:tu,uniforms:{map:{value:null},pixel:{value:new he}},vertexShader:`
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`}))}increaseSizeTo(i){this._target.setSize(Math.max(this._target.width,i),1)}readDataAsync(i){let{_renderer:e,_target:t}=this;return e.readRenderTargetPixelsAsync(t,0,0,i.length/4,1,i)}readData(i){let{_renderer:e,_target:t}=this;e.readRenderTargetPixels(t,0,0,i.length/4,1,i)}renderPixelToTarget(i,e,t){let{_renderer:n,_target:s}=this;Aa.min.copy(e),Aa.max.copy(e),Aa.max.x+=1,Aa.max.y+=1,n.initRenderTarget(s),n.copyTextureToTexture(i,s.texture,Aa,t,0)}},os=new class{constructor(){let i=null;Object.getOwnPropertyNames(cg.prototype).forEach(e=>{e!=="constructor"&&(this[e]=(...t)=>(i||(i=new cg),i[e](...t)))})}},hg=new he,ug=new he,dg=new he;function N1(i,e){return e===0?i.getAttribute("uv"):i.getAttribute(`uv${e}`)}function Sg(i,e,t=[,,,]){let n=3*e,s=3*e+1,r=3*e+2;return i.index&&(n=i.index.getX(n),s=i.index.getX(s),r=i.index.getX(r)),t[0]=n,t[1]=s,t[2]=r,t}function wg(i,e,t,n,s){let[r,a,o]=n,l=N1(i,e);hg.fromBufferAttribute(l,r),ug.fromBufferAttribute(l,a),dg.fromBufferAttribute(l,o),s.set(0,0,0).addScaledVector(hg,t.x).addScaledVector(ug,t.y).addScaledVector(dg,t.z)}function Tg(i,e,t,n){let s=i.x-Math.floor(i.x),r=i.y-Math.floor(i.y),a=Math.floor(s*e%e),o=Math.floor(r*t%t);return n.set(a,o),n}var fg=new he,pg=new he,mg=new he,O1=class extends Hl{constructor(i,e,t=null){super(i,e,t),this.channels=Kt(t,"channels",[0]),this.index=Kt(t,"index",null),this.texCoord=Kt(t,"texCoord",null),this.valueLength=parseInt(this.type.replace(/[^0-9]/g,""))||1}readDataFromBuffer(i,e,t=null){let n=this.type;if(n==="BOOLEAN"||n==="STRING")throw Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");return bg(i,e*this.valueLength,n,t)}},F1=class extends Pd{constructor(...i){super(...i),this.isPropertyTextureAccessor=!0,this._asyncRead=!1,this._initProperties(O1)}getData(i,e,t,n={}){let s=this.properties;kl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return this.getPropertyValuesAtTexel(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}async getDataAsync(i,e,t,n={}){let s=this.properties;kl(s,n);let r=Object.keys(s),a=r.map(o=>n[o]);return await this.getPropertyValuesAtTexelAsync(r,i,e,t,a),r.forEach((o,l)=>n[o]=a[l]),n}getPropertyValuesAtTexelAsync(...i){this._asyncRead=!0;let e=this.getPropertyValuesAtTexel(...i);return this._asyncRead=!1,e}getPropertyValuesAtTexel(i,e,t,n,s=[]){for(;s.length<i.length;)s.push(null);s.length=i.length,os.increaseSizeTo(s.length);let r=this.data,a=this.definition.properties,o=this.properties,l=Sg(n,e);for(let u=0,d=i.length;u<d;u++){let f=i[u];if(!a[f])continue;let m=o[f],y=r[m.index];wg(n,m.texCoord,t,l,fg),Tg(fg,y.image.width,y.image.height,pg),mg.set(u,0),os.renderPixelToTarget(y,pg,mg)}let c=new Uint8Array(i.length*4);if(this._asyncRead)return os.readDataAsync(c).then(()=>(h.call(this),s));return os.readData(c),h.call(this),s;function h(){for(let u=0,d=i.length;u<d;u++){let f=i[u],m=o[f],y=m.type;if(s[u]=Cd(m,s[u]),!m)throw Error("PropertyTextureAccessor: Requested property does not exist.");if(!a[f]){s[u]=m.resolveDefault(s);continue}let p=m.valueLength*(m.count||1),g=m.channels.map(M=>c[4*u+M]),_=m.componentType,v=new(Ca(_,y))(p);if(new Uint8Array(v.buffer).set(g),m.array){let M=s[u];for(let I=0,S=M.length;I<S;I++)M[I]=m.readDataFromBuffer(v,I,M[I])}else s[u]=m.readDataFromBuffer(v,0,s[u]);s[u]=m.adjustValueScaleOffset(s[u]),s[u]=m.resolveEnumsToStrings(s[u]),s[u]=m.resolveNoData(s[u])}}}dispose(){this.data.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},Ad=class{constructor(i,e,t,n=null,s=null){let{schema:r,propertyTables:a=[],propertyTextures:o=[],propertyAttributes:l=[]}=i,{enums:c,classes:h}=r,u=a.map(m=>new U1(m,h,c,t)),d=[],f=[];n&&(n.propertyTextures&&(d=n.propertyTextures.map(m=>new F1(o[m],h,c,e))),n.propertyAttributes&&(f=n.propertyAttributes.map(m=>new L1(l[m],h,c)))),this.schema=r,this.tableAccessors=u,this.textureAccessors=d,this.attributeAccessors=f,this.object=s,this.textures=e,this.nodeMetadata=n}getPropertyTableData(i,e,t=null){if(!Array.isArray(i))t||(t={}),t=this.tableAccessors[i].getData(e,t);else{t||(t=[]);let n=Math.min(i.length,e.length);t.length=n;for(let s=0;s<n;s++){let r=this.tableAccessors[i[s]];t[s]=r.getData(e[s],t[s])}}if(Array.isArray(i)!==Array.isArray(t)||Array.isArray(i)!==Array.isArray(e))throw Error("StructuralMetadata: Scalar and array inputs cannot be mixed.");return t}getPropertyTableInfo(i=null){if(i===null&&(i=this.tableAccessors.map((e,t)=>t)),Array.isArray(i))return i.map(e=>{let t=this.tableAccessors[e];return{name:t.name,className:t.definition.class}});{let e=this.tableAccessors[i];return{name:e.name,className:e.definition.class}}}getPropertyTextureData(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;for(let s=0;s<n.length;s++)t[s]=n[s].getData(i,e,this.object.geometry,t[s]);return t}async getPropertyTextureDataAsync(i,e,t=[]){let n=this.textureAccessors;t.length=n.length;let s=[];for(let r=0;r<n.length;r++){let a=n[r].getDataAsync(i,e,this.object.geometry,t[r]).then(o=>{t[r]=o});s.push(a)}return await Promise.all(s),t}getPropertyTextureInfo(){return this.textureAccessors}getPropertyAttributeData(i,e=[]){let t=this.attributeAccessors;e.length=t.length;for(let n=0;n<t.length;n++)e[n]=t[n].getData(i,this.object.geometry,e[n]);return e}getPropertyAttributeInfo(){return this.attributeAccessors.map(i=>({name:i.name,className:i.definition.class}))}dispose(){this.textureAccessors.forEach(i=>i.dispose()),this.tableAccessors.forEach(i=>i.dispose()),this.attributeAccessors.forEach(i=>i.dispose())}},Ea="EXT_structural_metadata";function B1(i,e=[]){let t=i.json.textures?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{index:a}=s[r];n[a]===null&&(n[a]=i.loadTexture(a))}}),Promise.all(n)}function z1(i,e=[]){let t=i.json.bufferViews?.length||0,n=Array(t).fill(null);return e.forEach(({properties:s})=>{for(let r in s){let{values:a,arrayOffsets:o,stringOffsets:l}=s[r];n[a]===null&&(n[a]=i.getDependency("bufferView",a)),n[o]===null&&(n[o]=i.getDependency("bufferView",o)),n[l]===null&&(n[l]=i.getDependency("bufferView",l))}}),Promise.all(n)}var Ag=class{constructor(i){this.parser=i,this.name=Ea}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(Ea))return;let n=null,s=e.json.extensions[Ea];if(s.schemaUri){let{manager:l,path:c,requestHeader:h,crossOrigin:u}=e.options,d=new URL(s.schemaUri,c).toString(),f=new un(l);f.setCrossOrigin(u),f.setResponseType("json"),f.setRequestHeader(h),n=f.loadAsync(d).then(m=>{s={...s,schema:m}})}let[r,a]=await Promise.all([B1(e,s.propertyTextures),z1(e,s.propertyTables),n]),o=new Ad(s,r,a);i.userData.structuralMetadata=o,i.traverse(l=>{if(e.associations.has(l)){let{meshes:c,primitives:h}=e.associations.get(l),u=e.json.meshes[c]?.primitives[h];if(u&&u.extensions&&u.extensions[Ea]){let d=u.extensions[Ea];l.userData.structuralMetadata=new Ad(s,r,a,d,l)}else l.userData.structuralMetadata=o}})}},gg=new he,vg=new he,yg=new he;function k1(i){return i.x>i.y&&i.x>i.z?0:i.y>i.z?1:2}var Eg=class{constructor(i,e,t){this.geometry=i,this.textures=e,this.data=t,this._asyncRead=!1,this.featureIds=t.featureIds.map(n=>{let{texture:s,...r}=n,a={label:null,propertyTable:null,nullFeatureId:null,...r};return s&&(a.texture={texCoord:0,channels:[0],...s}),a})}getTextures(){return this.textures}getFeatureInfo(){return this.featureIds}getFeaturesAsync(...i){this._asyncRead=!0;let e=this.getFeatures(...i);return this._asyncRead=!1,e}getFeatures(i,e){let{geometry:t,textures:n,featureIds:s}=this,r=Array(s.length).fill(null),a=s.length;os.increaseSizeTo(a);let o=Sg(t,i),l=o[k1(e)];for(let u=0,d=s.length;u<d;u++){let f=s[u],m="nullFeatureId"in f?f.nullFeatureId:null;if("texture"in f){let y=n[f.texture.index];wg(t,f.texture.texCoord,e,o,gg),Tg(gg,y.image.width,y.image.height,vg),yg.set(u,0),os.renderPixelToTarget(n[f.texture.index],vg,yg)}else if("attribute"in f){let y=t.getAttribute(`_feature_id_${f.attribute}`).getX(l);y!==m&&(r[u]=y)}else{let y=l;y!==m&&(r[u]=y)}}let c=new Uint8Array(a*4);if(this._asyncRead)return os.readDataAsync(c).then(()=>(h(),r));return os.readData(c),h(),r;function h(){let u=new Uint32Array(1);for(let d=0,f=s.length;d<f;d++){let m=s[d],y="nullFeatureId"in m?m.nullFeatureId:null;if("texture"in m){let{channels:p}=m.texture,g=p.map(v=>c[4*d+v]);new Uint8Array(u.buffer).set(g);let _=u[0];_!==y&&(r[d]=_)}}}}dispose(){this.textures.forEach(i=>{i&&(i.dispose(),i.image instanceof ImageBitmap&&i.image.close())})}},Vl="EXT_mesh_features";function xg(i,e,t){i.traverse(n=>{if(e.associations.has(n)){let{meshes:s,primitives:r}=e.associations.get(n),a=e.json.meshes[s]?.primitives[r];a&&a.extensions&&a.extensions[Vl]&&t(n,a.extensions[Vl])}})}var Cg=class{constructor(i){this.parser=i,this.name=Vl}async afterRoot({scene:i,parser:e}){let t=e.json.extensionsUsed;if(!t||!t.includes(Vl))return;let n=e.json.textures?.length||0,s=Array(n).fill(null);xg(i,e,(a,{featureIds:o})=>{o.forEach(l=>{if(l.texture&&s[l.texture.index]===null){let c=l.texture.index;s[c]=e.loadTexture(c)}})});let r=await Promise.all(s);xg(i,e,(a,o)=>{a.userData.meshFeatures=new Eg(a.geometry,r,o)})}},Pg=class{constructor(){this.name="CESIUM_RTC"}afterRoot(i){if(i.parser.json.extensions&&i.parser.json.extensions.CESIUM_RTC){let{center:e}=i.parser.json.extensions.CESIUM_RTC;e&&(i.scene.position.x+=e[0],i.scene.position.y+=e[1],i.scene.position.z+=e[2])}}},Rd=class{constructor(i){i={metadata:!0,rtc:!0,plugins:[],dracoLoader:null,ktxLoader:null,meshoptDecoder:null,autoDispose:!0,...i},this.tiles=null,this.metadata=i.metadata,this.rtc=i.rtc,this.plugins=i.plugins,this.dracoLoader=i.dracoLoader,this.ktxLoader=i.ktxLoader,this.meshoptDecoder=i.meshoptDecoder,this._gltfRegex=/\.(gltf|glb)$/g,this._dracoRegex=/\.drc$/g,this._loader=null}init(i){let e=new ns(i.manager);this.dracoLoader&&(e.setDRACOLoader(this.dracoLoader),i.manager.addHandler(this._dracoRegex,this.dracoLoader)),this.ktxLoader&&e.setKTX2Loader(this.ktxLoader),this.meshoptDecoder&&e.setMeshoptDecoder(this.meshoptDecoder),this.rtc&&e.register(()=>new Pg),this.metadata&&(e.register(()=>new Ag),e.register(()=>new Cg)),this.plugins.forEach(t=>e.register(t)),i.manager.addHandler(this._gltfRegex,e),this.tiles=i,this._loader=e}dispose(){this.tiles.manager.removeHandler(this._gltfRegex),this.tiles.manager.removeHandler(this._dracoRegex),this.autoDispose&&(this.ktxLoader.dispose(),this.dracoLoader.dispose())}};var{clamp:LT}=Cn;var DT=Symbol("FADE_PARAMS");var UT=Symbol("HAS_POPPED_IN");var NT=new Li(new oi),V1=new dr(new Uint8Array([255,255,255,255]),1,1);V1.needsUpdate=!0;var OT=Symbol("ORIGINAL_MATERIAL"),FT=Symbol("HAS_RANDOM_COLOR"),BT=Symbol("HAS_RANDOM_NODE_COLOR"),zT=Symbol("LOAD_TIME"),kT=Symbol("PARENT_BOUND_REF_COUNT");var H1=0,G1=1,W1=2,q1=3,X1=4,Y1=5,j1=6,$1=7,Z1=8,K1=9,J1=10,Q1=11,VT=Object.freeze({NONE:H1,SCREEN_ERROR:G1,GEOMETRIC_ERROR:W1,DISTANCE:q1,DEPTH:X1,RELATIVE_DEPTH:Y1,IS_LEAF:j1,RANDOM_COLOR:$1,RANDOM_NODE_COLOR:Z1,CUSTOM_COLOR:K1,LOAD_ORDER:J1,INDEXED_COLOR:Q1});var HT=Math.PI/4,GT=3/5;var as={NONE:0,NOT_READY:1,NO_FIT:2,DEPTH:3,OCCUPANCY:4,SPACING:5,ANGLE:6,FACING:7};var WT=new class{constructor(){this._cache={}}getColor(...i){let e=i.pop(),t=i.join("_"),{_cache:n}=this;return t in n||(e.setHSL(Math.random(),1,.5),n[t]=e.getHex()),e.set(n[t])}};var qT={[as.NONE]:16777215,[as.NOT_READY]:7829367,[as.NO_FIT]:2250239,[as.DEPTH]:4473924,[as.OCCUPANCY]:65535,[as.SPACING]:16776960,[as.ANGLE]:16711680,[as.FACING]:16711935};var XT=Symbol("TILE_X"),YT=Symbol("TILE_Y"),jT=Symbol("TILE_LEVEL"),$T=Symbol("HEIGHT_GRID"),ZT=Symbol("SOURCE_TILE"),KT=Symbol("OVERLAY_RANGE"),JT=Symbol("OVERLAY_LEVEL"),QT=Symbol("HEIGHT_RANGE");var eA=Math.PI/180;var tA=br*Math.PI*2;var iA=br*Math.PI*2;var Cr=Math.PI/180,eS=i=>-29+(-32.6+29)*Math.min(1,Math.max(0,(i-28.5)/(40.7-28.5))),Gl=i=>{let e=Math.min(1,Math.max(0,(i-28.5)/12.200000000000003));return-9.5+(-32.6+9.5)*e},tS={vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
      gl_Position = p.xyww;
    }
  `,fragmentShader:`
    uniform vec3 uHorizon;
    uniform vec3 uZenith;
    uniform vec3 uSun;
    uniform vec3 uGlow;
    uniform float uSpace;
    varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir);
      float h = d.y;
      vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
      col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.08, h));
      // golden hour: a warm band along the horizon, strongest toward the low sun
      vec2 a = normalize(d.xz + 1e-5), b = normalize(uSun.xz + 1e-5);
      float toward = max(dot(a, b), 0.0);
      col += uGlow * exp(-max(h, 0.0) * 7.0) * (0.25 + 0.9 * pow(toward, 3.0));
      float s = max(dot(d, uSun), 0.0);
      col += vec3(1.0, 0.8, 0.55) * (pow(s, 800.0) * 3.0 + pow(s, 16.0) * 0.15);
      // from orbit: black space above a thin blue limb
      vec3 space = mix(vec3(0.0, 0.0, 0.004), uHorizon * 0.5, exp(-max(h + 0.15, 0.0) * 12.0));
      col = mix(col, space, uSpace);
      gl_FragColor = vec4(col, 1.0);
    }
  `},iS={vertexShader:`
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
    uniform float uDensity;
    uniform vec3 uHaze;
    uniform vec3 uWater;
    uniform vec3 uSkyRefl;
    uniform float uSea;
    uniform float uWaterOn;
    varying vec2 vUv;
    varying vec3 vP;
    void main() {
      vec3 c = texture2D(map, vUv).rgb;
      // Open water: Google stitches the harbour from tiles of slightly different colour, which
      // shows as a patchwork of light and dark blocks. Flat, sea-level, bluish surfaces get one
      // even water colour with a sky reflection toward the horizon instead. (Land, piers, boats
      // and buildings stand above sea level and keep their photographs.)
      vec3 N = normalize(cross(dFdx(vP), dFdy(vP)));
      float up = abs(N.y);
      float seaY = vP.y + dot(vP.xz, vP.xz) / (2.0 * 6371000.0) - uSea;   // height above sea level (Earth's curve removed)
      float blue = smoothstep(-0.01, 0.03, c.b - c.r);
      float water = smoothstep(4.0, 1.5, abs(seaY)) * smoothstep(0.985, 0.998, up) * blue;
      water = max(water, smoothstep(0.3, -0.6, seaY));             // anything below the surface (tile seams, skirts) is under water
      // inland lakes (Orlando): flat, dark and bluish in Google's photos, at any height
      float lum0 = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float lake = smoothstep(0.990, 0.998, up) * smoothstep(0.008, 0.025, c.b - c.r) * smoothstep(0.11, 0.05, lum0);
      water = max(water, lake);
      water *= uWaterOn;                                            // only close up (coarse tiles from high up have no reliable height)
      vec3 V = normalize(cameraPosition - vP);
      float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 4.0);
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      vec3 sea = mix(uWater, uSkyRefl, fres * 0.55) * (0.88 + 0.24 * clamp(lum / 0.12, 0.4, 1.4));
      c = mix(c, sea, water);
      // late-afternoon grade to sit with the site's dark palette: a touch darker and warmer,
      // shadows cooler, and the contrast aerial photographs lose
      float l2 = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c *= mix(vec3(0.86, 0.9, 1.0), vec3(1.06, 0.97, 0.86), smoothstep(0.02, 0.35, l2)) * 0.9;
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.35);
      float dist = length(vP - cameraPosition);
      float f = 1.0 - exp(-dist * uDensity);
      c = mix(c, uHaze, clamp(f, 0.0, 0.75));                // aerial perspective
      c = mix(uHaze, c, uFade);
      gl_FragColor = vec4(c, 1.0);
    }
  `},Ia=i=>new _e(i);function Rg({key:i,renderer:e}){let t=new ur,n=new Lt(40,window.innerWidth/window.innerHeight,1,1e5),s=new Sd;s.registerPlugin(new wd({apiToken:i,autoRefreshToken:!0}));let r=new _l().setDecoderPath("assets/draco/");s.registerPlugin(new Rd({dracoLoader:r})),s.registerPlugin(new Ed);let a=window.matchMedia("(max-width: 860px)").matches,o=()=>{s.errorTarget=(a?12:7)*Math.sqrt(Math.max(1,e.getPixelRatio()))};o(),s.downloadQueue.maxJobsPerOrigin=a?10:16,s.parseQueue.maxJobs=a?4:8,s.lruCache.maxBytesSize=(a?.35:.7)*1024**3;let l=Math.min(8,e.capabilities.getMaxAnisotropy());s.setCamera(n),s.setResolutionFromRenderer(n,e),s.group.matrixAutoUpdate=!1,t.add(s.group);let c=new P(-.75,.1,.65).normalize(),h=Ia("#c9a99a"),u=Ia("#1c2b4a"),d=Ia("#ff9a5c"),f=new St({...tS,side:$t,depthWrite:!1,uniforms:{uHorizon:{value:h},uZenith:{value:u},uSun:{value:c},uGlow:{value:d},uSpace:{value:0}}}),m=new ft(new wn(10,48,24),f);m.renderOrder=-20,m.frustumCulled=!1,t.add(m);let y={uFade:{value:0},uDensity:{value:1/55e3},uHaze:{value:h.clone().multiplyScalar(.85)},uWater:{value:Ia("#1f6185")},uSkyRefl:{value:Ia("#8fb8d6")},uSea:{value:0},uWaterOn:{value:1}};s.addEventListener("load-model",({scene:D,tile:k})=>{D.traverse(B=>{if(!B.isMesh)return;let J=B.material.map;J&&(J.anisotropy=l,J.needsUpdate=!0);let q=new St({...iS,uniforms:{...y,map:{value:J}}});k.engineData.materials.push(q),B.material=q})});let p={ok:!1,failed:!1,loaded:0,ready:!1},g=0,_=0,v=0,M=0;s.addEventListener("load-model",()=>{p.loaded++,p.failed||(p.ok=!0)}),s.addEventListener("load-error",D=>{!p.ok&&(D.tile==null||D.tile===s.root)&&(p.failed=!0),console.warn("3D tiles:",D.error||D)});let I=new He().set(1,0,0,0,0,0,1,0,0,-1,0,0,0,0,0,1),S=new He,A=new He,R=new P;function G(D,k,B){let[J,q]=D.pos;Un.getEastNorthUpFrame(J*Cr,q*Cr,Gl(J),S),A.copy(I).multiply(S.invert()),s.group.matrix.copy(A),y.uSea.value=eS(J)-Gl(J),s.group.updateMatrixWorld(),Un.getCartographicToPosition(D.pos[0]*Cr,D.pos[1]*Cr,D.pos[2]+Gl(D.pos[0]),R),k.copy(R.applyMatrix4(A)),Un.getCartographicToPosition(D.look[0]*Cr,D.look[1]*Cr,D.look[2]+Gl(D.look[0]),R),B.copy(R.applyMatrix4(A)),D.pull!==1&&k.sub(B).multiplyScalar(D.pull).add(B)}let x=document.getElementById("map-credit"),T=x?x.querySelector(".mc-data"):null,W=0,N=[];return new URLSearchParams(location.search).has("debug")&&(window.__earth={tiles:s,state:p}),{scene:t,camera:n,tiles:s,toFrame:G,get failed(){return p.failed},get busy(){return!p.ready},update(D,k){let B=Math.min(.1,Math.max(0,k-M));if(M=k,s.setResolutionFromRenderer(n,e),s.update(),!p.ready&&p.ok){v||(v=k);let re=s.stats,Ve=re.queued+re.downloading+re.parsing;_=p.loaded>=30&&Ve<=.1*(p.loaded+Ve)?_+B:0,(_>.5||k-v>25)&&(p.ready=!0)}let J=s.stats,q=J.queued+J.downloading+J.parsing,se=p.ready?1:Math.min(.7,.25+.6*(p.loaded/Math.max(1,p.loaded+q)));g+=(se-g)*Math.min(1,B*(p.ready?1.6:.8)),y.uFade.value=g*g*(3-2*g);let ie=Math.min(1,Math.max(0,(D-4e4)/26e4));if(f.uniforms.uSpace.value=ie*ie*(3-2*ie),y.uDensity.value=1/Math.max(55e3,D*9),y.uWaterOn.value=1-Math.min(1,Math.max(0,(D-3e3)/5e3)),x&&k-W>1){W=k;let re=p.ok&&s.visibleTiles.size>0;if(x.hidden=!re,re){N.length=0,s.getAttributions(N);let Ve=N.filter(We=>We.type==="string").map(We=>We.value).join(" ");T.textContent!==Ve&&(T.textContent=Ve)}}},resize(){n.aspect=window.innerWidth/window.innerHeight,o(),s.setResolutionFromRenderer(n,e)}}}var nS="https://tiles.openfreemap.org/planet",nn={land:"#0d111c",water:"#04060c",shore:"#24395e",park:"#0d1716",bld:"#131926",bldLine:"#1a2231",minor:"#1a2131",major:"#262f45",motor:"#33405f",state:"#2a3550"};function sS(){let i=(e,t,n,s,r=0)=>({id:e,type:"line",source:"omt","source-layer":"transportation",minzoom:r,filter:["all",["in",["geometry-type"],["literal",["LineString","MultiLineString"]]],["in",["get","class"],["literal",t]],["!=",["get","brunnel"],"tunnel"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":n,"line-width":["interpolate",["exponential",1.6],["zoom"],...s]}});return{version:8,sources:{omt:{type:"vector",url:nS}},layers:[{id:"land",type:"background",paint:{"background-color":nn.land}},{id:"park",type:"fill",source:"omt","source-layer":"park",paint:{"fill-color":nn.park}},{id:"green",type:"fill",source:"omt","source-layer":"landcover",filter:["in",["get","class"],["literal",["grass","wood"]]],paint:{"fill-color":nn.park,"fill-opacity":.6}},{id:"water",type:"fill",source:"omt","source-layer":"water",filter:["!=",["get","brunnel"],"tunnel"],paint:{"fill-color":nn.water}},{id:"shore",type:"line",source:"omt","source-layer":"water",filter:["!=",["get","brunnel"],"tunnel"],paint:{"line-color":nn.shore,"line-width":["interpolate",["linear"],["zoom"],5,.3,10,.6,15,1.2]}},{id:"buildings",type:"fill",source:"omt","source-layer":"building",minzoom:12.5,paint:{"fill-color":nn.bld,"fill-outline-color":nn.bldLine,"fill-opacity":["interpolate",["linear"],["zoom"],12.5,0,13.6,1]}},i("roads-minor",["minor","service"],nn.minor,[11,.2,14,.7,17,3],11),i("roads-major",["primary","secondary","tertiary"],nn.major,[8,.25,12,.8,16,3.5],7),i("roads-motor",["motorway","trunk"],nn.motor,[5,.3,10,1,15,4]),{id:"states",type:"line",source:"omt","source-layer":"boundary",maxzoom:9,filter:["==",["get","admin_level"],4],paint:{"line-color":nn.state,"line-width":.8,"line-dasharray":[3,2]}}]}}var Wl=[Xi.nyOffice.lon,Xi.nyOffice.lat],ls=[Xi.orlandoOffice.lon,Xi.orlandoOffice.lat],rS=([i,e])=>[e,i],ql=[{c:[-74.2,40.55],z:7.6,b:0},{c:[-74,40.728],z:11.7,b:29},{c:[-73.991,40.754],z:13.2,b:29},{c:[-81.282,28.67],z:11.3,b:0},{c:[-81.2605,28.6555],z:11,b:0},{c:[-77.7,34.5],z:4.75,b:0},{c:[-81.36,28.58],z:8.9,b:0},{c:[-77.7,34.5],z:4.9,b:0}],aS=[["Office",1.6,47.5],["Retail",-.15,55.5],["Industrial",6.35,27.5],["Multifamily",3.5,64.5],["Hospitality",2.35,45.5],["Healthcare",-2.95,31.5],["Mixed use",5.6,37.5],["Land development",6.1,41.5],["Storage",6,21.5],["Restaurants",1.7,12.5],["Churches",4.3,71.5],["Special purpose",6.35,35.5]],oS=[["Financial District",-74.011,40.7075],["Midtown",-73.984,40.7549],["Hudson Yards",-74.001,40.7536],["Downtown Brooklyn",-73.9903,40.6928],["Long Island City",-73.9485,40.7447],["Jersey City",-74.0431,40.7178]],lS=[["Winter Springs",-81.3081,28.6989],["Oviedo",-81.2081,28.67],["Casselberry",-81.3279,28.6778],["Longwood",-81.3384,28.7031],["Lake Mary",-81.3178,28.7589],["Winter Park",-81.3392,28.6],["East Orlando \xB7 UCF",-81.2001,28.6024]],cS=[["Orlando",-81.3792,28.5383],["Kissimmee",-81.4076,28.292],["Sanford",-81.2695,28.8003],["Clermont",-81.7729,28.5494],["Lake Nona",-81.247,28.417],["Winter Park",-81.3392,28.6],["Daytona Beach",-81.0228,29.2108]];function hS(i,e,t=.18,n=48){let s=(i[0]+e[0])/2,r=(i[1]+e[1])/2,a=e[0]-i[0],o=e[1]-i[1],l=s-o*t,c=r+a*t,h=[];for(let u=0;u<=n;u++){let d=u/n,f=1-d;h.push([f*f*i[0]+2*f*d*l+d*d*e[0],f*f*i[1]+2*f*d*c+d*d*e[1]])}return h}function uS(i){let e=[],t=[],n=(r,a,o)=>e.push({type:"Feature",id:e.length+1,properties:{key:r,...o},geometry:{type:"Point",coordinates:a}}),s=(r,a,o,l,c,h={})=>t.push({type:"Feature",id:t.length+1,properties:{key:r,ch:l.join(","),...h},geometry:{type:"LineString",coordinates:hS(a,o,c)}});return n("hub-ny",Wl,{kind:"hub",label:"New York \xB7 276 Fifth Ave.",ch:"1,2,5,7",office:"new-york"}),n("hub-fl",ls,{kind:"hub",label:"Winter Springs, FL",ch:"3,4,5,6,7",office:"orlando"}),oS.forEach(([r,a,o],l)=>{n(`d${l}`,[a,o],{kind:"node",label:r,ch:"1"}),s(`d${l}`,Wl,[a,o],[1],l%2?.2:-.2)}),aS.forEach(([r,a,o],l)=>{let c=rS(As(a,o));n(`t${l}`,c,{kind:"node",label:r,ch:"2",type:l,quiet:1}),s(`t${l}`,Wl,c,[2],l%2?.22:-.22,{type:l})}),lS.forEach(([r,a,o],l)=>{n(`h${l}`,[a,o],{kind:"node",label:r,ch:"3"}),s(`h${l}`,ls,[a,o],[3],l%2?.18:-.18)}),i.forEach((r,a)=>{let o=a/i.length*Math.PI*2-Math.PI/2,l=[ls[0]+Math.cos(o)*.05/Math.cos(ls[1]*Math.PI/180),ls[1]+Math.sin(o)*.05];n(`s${a}`,l,{kind:"node",label:`${String(a+1).padStart(2,"0")} \xB7 ${r}`,short:String(a+1).padStart(2,"0"),ch:"4",service:a,quiet:1}),s(`s${a}`,ls,l,[4],.08,{service:a})}),cS.forEach(([r,a,o],l)=>{n(`m${l}`,[a,o],{kind:"node",label:r,ch:"6"}),s(`m${l}`,ls,[a,o],[6],l%2?.15:-.15)}),s("ny-fl",Wl,ls,[1,5,7],.12,{long:1}),{nodes:e,edges:t}}function Ig({container:i,services:e}){let t=window.maplibregl,n=new t.Map({container:i,style:sS(),center:ql[0].c,zoom:ql[0].z,bearing:0,interactive:!1,attributionControl:{compact:!0},fadeDuration:0,renderWorldCopies:!1,pixelRatio:Math.min(window.devicePixelRatio||1,2)}),s=uS(e),r={type:"FeatureCollection",features:[]},a=!1;n.on("style.load",()=>{n.addSource("edges",{type:"geojson",data:{type:"FeatureCollection",features:s.edges}}),n.addSource("nodes",{type:"geojson",data:{type:"FeatureCollection",features:s.nodes}}),n.addSource("pulses",{type:"geojson",data:r});let S=["coalesce",["feature-state","w"],0],A=["coalesce",["feature-state","hot"],0];n.addLayer({id:"edges",type:"line",source:"edges",layout:{"line-cap":"round"},paint:{"line-color":["case",[">",A,.5],"#ecd1a4","#8fb6ff"],"line-width":["case",[">",A,.5],1.8,["==",["get","long"],1],1.4,1],"line-opacity":["*",S,["case",[">",A,.5],.95,["coalesce",["feature-state","dim"],.42]]]}}),n.addLayer({id:"pulses",type:"circle",source:"pulses",paint:{"circle-radius":["get","r"],"circle-color":["get","c"],"circle-blur":.6,"circle-opacity":["get","o"]}}),n.addLayer({id:"node-halo",type:"circle",source:"nodes",paint:{"circle-radius":["case",["==",["get","kind"],"hub"],16,[">",A,.5],12,7],"circle-color":["case",[">",A,.5],"#ecd1a4","#8fb6ff"],"circle-blur":1,"circle-opacity":["*",S,["case",["==",["get","kind"],"hub"],.35,[">",A,.5],.5,.18]]}}),n.addLayer({id:"node-core",type:"circle",source:"nodes",paint:{"circle-radius":["case",["==",["get","kind"],"hub"],4.5,[">",A,.5],3.6,2.4],"circle-color":["case",[">",A,.5],"#ecd1a4",["==",["get","kind"],"hub"],"#ffffff","#cfe0ff"],"circle-stroke-color":"#8fb6ff","circle-stroke-width":["case",["==",["get","kind"],"hub"],1.5,0],"circle-opacity":S,"circle-stroke-opacity":S}}),a=!0});let o=document.createElement("div");o.className="nm-labels",i.parentNode.appendChild(o);let l=s.nodes.map(S=>{let A=document.createElement("div");return A.className=`nm-label nm-${S.properties.kind}`,A.innerHTML=`<span>${S.properties.label}</span>`,o.appendChild(A),{f:S,el:A,shown:!1}}),c=(S,A)=>S.split(",").reduce((R,G)=>Math.max(R,1-Math.min(1,Math.abs(A-+G)*1.7)),0),h={};function u(S,A,R){let G=`${S}:${A}`,x=h[G]||{},T=!1;for(let W in R)if(Math.abs((x[W]??-1)-R[W])>.01){T=!0;break}T&&(h[G]={...x,...R},n.setFeatureState({source:S,id:A},R))}let d=[{keys:null,b:0},{keys:["hub-ny","d"],b:29},{keys:["hub-ny","t"],b:29},{keys:["hub-fl","h"],b:0},{keys:["hub-fl","s"],b:0},{keys:["hub-ny","hub-fl"],b:0,behind:!0},{keys:["hub-fl","m"],b:0},{keys:["hub-ny","hub-fl"],b:0,behind:!0}],f=Array.from(document.querySelectorAll(".chapter")),m=S=>S&&(S.querySelector(".panel")||S.querySelector(".contact-intro")||S.querySelector(".wrap")),y=null;function p(){let S=window.innerWidth,A=window.innerHeight,R=90,G=70,x=48;y=d.map((T,W)=>{if(!T.keys)return ql[0];let N=s.nodes.filter(oe=>T.keys.some(fe=>oe.properties.key===fe||fe.length===1&&oe.properties.key.startsWith(fe)&&/\d/.test(oe.properties.key[1]))).map(oe=>oe.geometry.coordinates),D=N.map(oe=>oe[0]),k=N.map(oe=>oe[1]),B=[[Math.min(...D),Math.min(...k)],[Math.max(...D),Math.max(...k)]],J=m(f[W])?m(f[W]).getBoundingClientRect():null,q={top:R,bottom:G,left:60,right:60},se=J&&J.left+J.width/2<S/2,ie=J?se?S-J.right:J.left:S;!J||ie<300||S/A<.9||T.behind||(se?q.left=J.right+x:q.right=S-J.left+x),S/A<.9&&(q={top:A*.45,bottom:G,left:30,right:30});let Ve=n.cameraForBounds(B,{padding:q,bearing:T.b,maxZoom:14});return Ve?{c:Ve.center.toArray?Ve.center.toArray():[Ve.center.lng,Ve.center.lat],z:Ve.zoom,b:T.b}:ql[W]})}window.addEventListener("resize",()=>{y=null}),document.fonts&&document.fonts.ready.then(()=>{y=null});let g=S=>t.MercatorCoordinate.fromLngLat(S),_=S=>S*S*S*(S*(S*6-15)+10);function v(S,A){let R=Math.min(d.length-2,Math.max(0,Math.floor(S))),G=_(Math.min(1,Math.max(0,S-R)));y||p();let x=y[R],T=y[R+1],W=g(x.c),N=g(T.c),D=Math.hypot(N.x-W.x,N.y-W.y),k=Math.log2(A*.8/(512*Math.max(D,1e-9))),B=Math.min(x.z,T.z),J=x.z+(T.z-x.z)*G,q=G;k<B-.5&&(J-=(J-k)*Math.pow(Math.sin(Math.PI*G),.7),q=_(G));let se=W.x+(N.x-W.x)*q,ie=W.y+(N.y-W.y)*q,re=new t.MercatorCoordinate(se,ie).toLngLat(),Ve=T.b-x.b;return{center:[re.lng,re.lat],zoom:J,bearing:x.b+Ve*G,i:R,t:G}}let M=null,I=-1;return{map:n,get ready(){return a},update(S,A,R,G,x,T,W){if(R<.01)return null;let N=window.innerWidth,D=window.innerHeight,k=v(S,N);if(n.jumpTo({center:k.center,zoom:k.zoom,bearing:k.bearing}),!a)return k;let B=M&&M.properties.key;for(let se of s.edges){let ie=se.properties,re=ie.type!==void 0&&ie.type===G||ie.service!==void 0&&ie.service===x||ie.key===B||ie.long&&T,Ve=ie.type!==void 0||ie.service!==void 0;u("edges",se.id,{w:c(ie.ch,S),hot:re?1:0,dim:Ve?.22:.42}),se._w=c(ie.ch,S),se._hot=re}for(let se of s.nodes){let ie=se.properties,re=ie.type!==void 0&&ie.type===G||ie.service!==void 0&&ie.service===x||ie.office&&ie.office===T||ie.key===B;se._w=Math.max(c(ie.ch,S),ie.kind==="hub"&&S>.6?.5:0),se._hot=re,u("nodes",se.id,{w:se._w,hot:re?1:0})}r.features.length=0;for(let se of s.edges){if(se._w<.2)continue;let ie=se.geometry.coordinates,re=se.id*.618%1,Ve=se.properties.long?.12:.28;for(let We of[0,.5]){let oe=(A*Ve+re+We)%1,fe=oe*(ie.length-1),ze=Math.floor(fe),Pe=fe-ze,je=ie[ze],$e=ie[Math.min(ie.length-1,ze+1)],it=Math.sin(Math.PI*oe);r.features.push({type:"Feature",properties:{r:se._hot?4:2.6,c:se._hot?"#ecd1a4":"#cfe0ff",o:se._w*it*(se._hot?1:.7)},geometry:{type:"Point",coordinates:[je[0]+($e[0]-je[0])*Pe,je[1]+($e[1]-je[1])*Pe]}})}}if(n.getSource("pulses").setData(r),M=null,W&&W.inside&&!W.overUI){let ie=n.queryRenderedFeatures([[W.px-10,W.py-10],[W.px+10,W.py+10]],{layers:["node-core"]}).find(re=>re.state&&re.state.w>.5);ie&&(M=s.nodes.find(re=>re.id===ie.id)||null)}let J=m(f[Math.round(S)]),q=J?J.getBoundingClientRect():null;for(let se of l){let re=se.f.properties.quiet&&!se.f._hot;if(se.f._w>.55&&R>.6&&!re){let We=n.project(se.f.geometry.coordinates),oe=q&&We.x>q.left-30&&We.x<q.right+10&&We.y>q.top-14&&We.y<q.bottom+14,fe=We.x>10&&We.x<N-10&&We.y>70&&We.y<D-30&&!oe;se.el.classList.toggle("is-left",We.x>N*.72),se.el.style.transform=`translate3d(${We.x.toFixed(1)}px, ${We.y.toFixed(1)}px, 0)`,se.el.classList.toggle("is-on",fe),se.el.classList.toggle("is-hot",!!se.f._hot)}else se.el.classList.contains("is-on")&&se.el.classList.remove("is-on")}return I=S,k},hideLabels(){l.forEach(S=>S.el.classList.remove("is-on"))},resize(){n.resize()}}}var Ug=[{name:"Offices",pos:[25.6,-80.6,27e5],look:[35.6,-77.9,0],ox:.24,oy:.02,my:.1,fov:36,mob:1.25},{name:"Skyline",pos:[40.6868,-74.0525,38],look:[40.695,-74.0345,90],ox:.14,oy:0,my:.2,fov:40,mob:1.15,g:{pos:[40.6846,-74.053,230],look:[40.6975,-74.029,110]},n:{pos:[40.672,-74.07,900],look:[40.708,-74.01,150],ox:.24}},{name:"Commercial",pos:[40.746,-74.015,230],look:[40.7585,-73.985,190],ox:.27,oy:0,my:.12,fov:40,mob:1.3,g:{pos:[40.7395,-74.033,480],look:[40.756,-73.993,120]}},{name:"Residential",pos:[28.65,-81.269,115],look:[28.656,-81.26,0],ox:-.27,oy:0,my:.14,fov:40,mob:1.25,g:{pos:[28.644,-81.277,380],look:[28.656,-81.262,0]}},{name:"Advisory",pos:[28.5408,-81.3712,95],look:[28.5446,-81.377,105],ox:.28,oy:0,my:.12,fov:40,mob:1.35,g:{pos:[28.53,-81.395,450],look:[28.542,-81.379,70]}},{name:"Track record",pos:[28.5418,-81.364,120],look:[28.544,-81.379,55],ox:0,oy:-.08,my:.08,fov:42,mob:1.2,g:{pos:[28.532,-81.358,500],look:[28.5434,-81.3731,20]}},{name:"Listings",pos:[28.5455,-81.356,650],look:[28.556,-81.356,0],ox:-.26,oy:0,my:.12,fov:40,mob:1.25,g:{pos:[28.542,-81.356,560],look:[28.556,-81.36,0]}},{name:"Contact",pos:[28.62,-81.305,1500],look:[28.67,-81.245,0],ox:-.12,oy:.05,my:.12,fov:40,mob:1.2,g:{pos:[28.638,-81.29,600],look:[28.664,-81.255,0]}}],dS=typeof location<"u"&&new URLSearchParams(location.search).has("night"),Dd=Ug.map(i=>{let e={...i,...dS&&i.n?i.n:{}};return{...e,P:_i(...e.pos),Lk:_i(...e.look)}}),Ud=Dd.length,Pr=i=>i*i*i*(i*(i*6-15)+10),Ft=(i,e,t)=>i+(e-i)*t,Xl=new P,Lg=new P;function Ng(i,e,t){let n=Math.min(Ud-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=Pr(s),a=Dd[n],o=Dd[n+1],l=Math.max(.05,a.P.y),c=Math.max(.05,o.P.y),h=Math.hypot(o.P.x-a.P.x,o.P.z-a.P.z),u=Math.max(l,c,h*.75),d=u>Math.max(l,c)*1.6,f=d?Math.pow(Math.sin(Math.PI*r),.8):0,m=Ft(Math.log(l),Math.log(c),r),y=Math.exp(m+(Math.log(u)-m)*f),p=Math.max(l,c)/Math.min(l,c),g=d?Pr(Pr(r)):p>8?(y-l)/(c-l):r;t.pos.set(Ft(a.P.x,o.P.x,g),y,Ft(a.P.z,o.P.z,g)),Xl.copy(a.Lk).lerp(o.Lk,g),d&&(Lg.set(t.pos.x,0,t.pos.z).add(Xl.clone().sub(t.pos).setY(0).normalize().multiplyScalar(y*.35)),Xl.lerp(Lg,f)),t.look.copy(Xl);let _=e<.9;if(t.ox=_?0:Ft(a.ox,o.ox,r),t.oy=_?Ft(a.my,o.my,r):Ft(a.oy,o.oy,r),t.fov=Ft(a.fov,o.fov,r),_){let v=Ft(a.mob,o.mob,r)*(1+(.9/e-1)*.3);t.pos.sub(t.look).multiplyScalar(v).add(t.look)}return t.flight=f,t}var Og=Ud,Id=110574,Dg=Ug.map(i=>({...i,...i.g||{}})),Ld=i=>111320*Math.cos(i*Math.PI/180);function Nd(i,e,t){let n=Math.min(Ud-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=Pr(s),a=Dg[n],o=Dg[n+1],l=Math.max(5,a.pos[2]),c=Math.max(5,o.pos[2]),h=(a.pos[0]+o.pos[0])/2,u=Math.hypot((o.pos[1]-a.pos[1])*Ld(h),(o.pos[0]-a.pos[0])*Id),d=Math.max(l,c,u*.75),f=d>Math.max(l,c)*1.6,m=f?Math.pow(Math.sin(Math.PI*r),.8):0,y=Ft(Math.log(l),Math.log(c),r),p=Math.exp(y+(Math.log(d)-y)*m),g=Math.max(l,c)/Math.min(l,c),_=f?Pr(Pr(r)):g>8?(p-l)/(c-l):r,v=Ft(a.pos[0],o.pos[0],_),M=Ft(a.pos[1],o.pos[1],_);t.pos[0]=v,t.pos[1]=M,t.pos[2]=p;let I=Ft(a.look[0],o.look[0],_),S=Ft(a.look[1],o.look[1],_),A=Ft(a.look[2],o.look[2],_);if(f){let G=(S-M)*Ld(v),x=(I-v)*Id,T=Math.hypot(G,x)||1,W=v+x/T*p*.35/Id,N=M+G/T*p*.35/Ld(v);I=Ft(I,W,m),S=Ft(S,N,m),A=Ft(A,0,m)}t.look[0]=I,t.look[1]=S,t.look[2]=A;let R=e<.9;return t.ox=R?0:Ft(a.ox,o.ox,r),t.oy=R?Ft(a.my,o.my,r):Ft(a.oy,o.oy,r),t.fov=Ft(a.fov,o.fov,r),t.pull=R?Ft(a.mob,o.mob,r)*(1+(.9/e-1)*.3):1,t.flight=m,t}var zt=(i,e=document)=>e.querySelector(i),Ui=(i,e=document)=>Array.from(e.querySelectorAll(i)),Is=window.matchMedia("(prefers-reduced-motion: reduce)"),fS=1990,pS=["left","left","left","right","left","center","right","left"];function Fg(i){let e=Ui(".chapter"),t=new Date().getFullYear(),n=t-fS;Ui(".js-years").forEach(D=>{D.textContent=String(n)});let s=zt("#year");s&&(s.textContent=String(t));let r=zt(".nav-toggle"),a=zt("#nav-list"),o=()=>{r.setAttribute("aria-expanded","false"),a.classList.remove("is-open")};r.addEventListener("click",()=>{let D=r.getAttribute("aria-expanded")!=="true";r.setAttribute("aria-expanded",String(D)),a.classList.toggle("is-open",D),D&&a.querySelector("a").focus()}),document.addEventListener("keydown",D=>{D.key==="Escape"&&a.classList.contains("is-open")&&(o(),r.focus())}),document.addEventListener("click",D=>{let k=D.target.closest('a[href^="#"]');if(!k)return;let B=k.getAttribute("href").slice(1),J=B==="main"?e[0]:document.getElementById(B);if(!J)return;let q=J.closest(".chapter")||J,se=e.indexOf(q);if(!(se<0)){if(D.preventDefault(),o(),k.dataset.interest){let ie=zt("#f-interest");ie&&(ie.value=k.dataset.interest)}l(se,q)}});function l(D,k=e[D]){let B=i.anchorFor?i.anchorFor(D):k.offsetTop;window.scrollTo({top:B,behavior:Is.matches?"auto":"smooth"});let J=k.querySelector("h1, h2")||k;J.setAttribute("tabindex","-1"),J.focus({preventScroll:!0}),history.replaceState(null,"",D===0?location.pathname:`#${k.id}`)}i.goToChapter=l,Ui(".reveal-stagger").forEach(D=>{Array.from(D.children).forEach((k,B)=>k.style.setProperty("--i",B))});let c=new IntersectionObserver(D=>{for(let k of D)k.isIntersecting&&(k.target.classList.add("is-in"),k.target.id==="record"&&h(k.target),c.unobserve(k.target))},{threshold:.18,rootMargin:"0px 0px -10% 0px"});i.startReveals=()=>e.forEach(D=>c.observe(D));function h(D){Ui("[data-count]",D).forEach(k=>{let B=parseInt(k.textContent,10);if(!Number.isFinite(B)||Is.matches)return;let J=performance.now()+450,q=1800;k.textContent="0";let se=ie=>{let re=Math.min(1,Math.max(0,(ie-J)/q)),Ve=re===1?1:1-Math.pow(2,-10*re);k.textContent=String(Math.round(B*Ve)),re<1&&requestAnimationFrame(se)};requestAnimationFrame(se)})}let u=Ui(".site-nav a"),d=Ui(".system-map a"),f=zt("#sm-fill"),m=zt("#tm-sector"),y=zt("#tm-coords"),p=-1,g=zt("#step-prev"),_=zt("#step-next"),v=zt("#step-name"),M=D=>d[D]?d[D].querySelector(".sm-name").textContent:"",I=()=>Math.max(0,p),S=()=>{let D=I();g&&(g.hidden=D===0,g.setAttribute("aria-label",`Previous chapter: ${M(D-1)}`)),_&&(_.hidden=D>=e.length-1,_.setAttribute("aria-label",`Next chapter: ${M(D+1)}`),v&&(v.textContent=M(D+1)))},A=new Set,R=new IntersectionObserver(D=>{D.forEach(k=>k.isIntersecting?A.add(k.target):A.delete(k.target)),document.body.classList.toggle("next-visible",A.size>0)});Ui(".next-row, #home-port .cta-row, #launch .cta-row").forEach(D=>R.observe(D)),g&&g.addEventListener("click",()=>l(Math.max(0,I()-1))),_&&_.addEventListener("click",()=>l(Math.min(e.length-1,I()+1))),S(),i.setProgress=(D,k,B)=>{if(f&&(f.style.transform=`scaleY(${(D/(e.length-1)).toFixed(4)})`),k!==p){p=k,S(),document.body.dataset.side=pS[k]||"left",d.forEach((q,se)=>q.classList.toggle("is-active",se===k));let J=e[k]&&e[k].id;if(u.forEach(q=>q.setAttribute("aria-current",String(q.getAttribute("href")===`#${J}`))),m){let q=d[k]?d[k].querySelector(".sm-name").textContent:"";m.textContent=`${String(k+1).padStart(2,"0")} \xB7 ${q}`}}y&&B&&(y.textContent=B)};let G=zt(".site-header"),x=window.scrollY;window.addEventListener("scroll",()=>{let D=window.scrollY;G.classList.toggle("is-scrolled",D>40),!a.classList.contains("is-open")&&Math.abs(D-x)>6&&G.classList.toggle("is-hidden",D>x&&D>400),x=D},{passive:!0}),G.addEventListener("focusin",()=>G.classList.remove("is-hidden"));let T=zt(".site-footer");new IntersectionObserver(([D])=>document.body.classList.toggle("at-footer",D.isIntersecting),{threshold:.05}).observe(T);let W=zt("#crexi-load");W&&W.addEventListener("click",()=>{let D=document.createElement("iframe");D.className="crexi-frame",D.src="https://www.crexi.com/widgets/1594",D.title="CIIN Co. commercial listings on Crexi",D.loading="lazy",D.referrerPolicy="strict-origin-when-cross-origin",W.replaceWith(D)});let N=zt("#contact-form");if(N){let D=zt(".form-status",N),k=[["f-name",J=>J.trim().length>1,"Please enter your name."],["f-email",J=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(J.trim()),"Please enter a valid email address."],["f-message",J=>J.trim().length>4,"Please tell us a little about what you need."]],B=(J,q,se)=>{let ie=zt(`#${J}`,N),re=zt(`#${J}-err`,N),Ve=q(ie.value);return ie.setAttribute("aria-invalid",String(!Ve)),Ve?(ie.removeAttribute("aria-describedby"),re.textContent=""):(ie.setAttribute("aria-describedby",`${J}-err`),re.textContent=se),Ve};k.forEach(([J,q,se])=>zt(`#${J}`,N).addEventListener("blur",ie=>{ie.target.value&&B(J,q,se)})),N.addEventListener("submit",async J=>{J.preventDefault(),D.className="form-status",D.textContent="";let q=k.map(ie=>B(...ie));if(q.includes(!1)){let ie=k[q.indexOf(!1)][0];zt(`#${ie}`,N).focus(),D.classList.add("is-error"),D.textContent="Please check the highlighted fields.";return}if(N.company_website.value)return;let se=N.querySelector('button[type="submit"]');se.disabled=!0,D.textContent="Sending\u2026";try{let ie=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(N)).toString()});if(!ie.ok)throw new Error(String(ie.status));window.location.href=N.getAttribute("action")}catch{se.disabled=!1,D.classList.add("is-error"),D.innerHTML='Your message could not be sent. Please email <a href="mailto:rafael@ciinco.com">rafael@ciinco.com</a> or call <a href="tel:+14077395959">407-739-5959</a>.'}})}return Ui("#type-chips li").forEach((D,k)=>{D.addEventListener("pointerenter",()=>i.hotType&&i.hotType(k)),D.addEventListener("pointerleave",()=>i.hotType&&i.hotType(-1))}),Ui("#consulting li").forEach(D=>{let k=parseInt(D.dataset.node,10);D.addEventListener("pointerenter",()=>i.hotNode&&i.hotNode(k)),D.addEventListener("pointerleave",()=>i.hotNode&&i.hotNode(-1))}),Ui(".office").forEach(D=>{D.addEventListener("pointerenter",()=>i.hotOffice&&i.hotOffice(D.dataset.office)),D.addEventListener("pointerleave",()=>i.hotOffice&&i.hotOffice(null))}),i.markType=D=>Ui("#type-chips li").forEach((k,B)=>k.classList.toggle("is-hot",B===D)),i.markNode=D=>Ui("#consulting li").forEach(k=>k.classList.toggle("is-hot",parseInt(k.dataset.node,10)===D)),i.markOffice=D=>Ui(".office").forEach(k=>k.classList.toggle("is-hot",k.dataset.office===D)),{chapters:e}}function Yl(i){let e=zt("#loader-pct"),t=zt("#loader-bar");e&&(e.textContent=`${Math.round(i*100)}%`),t&&(t.style.transform=`scaleX(${i.toFixed(3)})`)}function jl(){document.body.classList.remove("is-loading")}var Od=document.documentElement;Od.classList.add("js");var ci={},{chapters:Fd}=Fg(ci),Si=new URLSearchParams(location.search);function mS(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}var gS=Math.min(screen.width,screen.height),fn={night:Si.has("night"),maps:Si.has("maps"),low:Si.has("low")||gS<700||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4},vS=fn.low?1.5:1.75,wi=[],La=null;function Rr(){let i=window.innerHeight,e=document.documentElement.scrollHeight-i;wi=Fd.map((t,n)=>{if(n===0)return 0;let s=t.getBoundingClientRect();return Math.min(e,Math.max(0,s.top+window.scrollY+s.height/2-i/2))});for(let t=1;t<wi.length;t++)wi[t]=Math.max(wi[t],wi[t-1]+1)}ci.anchorFor=i=>wi[i]??0;function Bd(){if(La!==null)return La;let i=window.scrollY;if(!wi.length||i<=wi[0])return 0;for(let e=0;e<wi.length-1;e++)if(i<wi[e+1])return e+(i-wi[e])/(wi[e+1]-wi[e]);return wi.length-1}function Bg(){Rr(),window.addEventListener("resize",Rr);let i=()=>{let e=Bd();ci.setProgress(e,Math.round(e),null),requestAnimationFrame(i)};i()}var zd=class extends mi{constructor(e){super(),this.rt=new Ot(1,1,{type:pi,samples:e}),this.mix=0,this.scene=null,this.camera=null,this.quad=new Li(new St({uniforms:{tWorld:{value:null},tEarth:{value:null},uMix:{value:0},uExposure:{value:1.05}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tWorld; uniform sampler2D tEarth; uniform float uMix; uniform float uExposure; varying vec2 vUv;
        vec3 RRTAndODTFit(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
        vec3 aces(vec3 c) {
          const mat3 I = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
          const mat3 O = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
          c *= uExposure / 0.6; c = I * c; c = RRTAndODTFit(c); c = O * c; return clamp(c, 0.0, 1.0);
        }
        void main() {
          vec3 w = uMix < 0.999 ? aces(texture2D(tWorld, vUv).rgb) : vec3(0.0);
          vec3 e = uMix > 0.001 ? texture2D(tEarth, vUv).rgb : vec3(0.0);
          gl_FragColor = vec4(mix(w, e, uMix), 1.0);
        }`,depthTest:!1,depthWrite:!1}))}setSize(e,t){this.rt.setSize(e,t)}render(e,t,n){let s=this.quad.material.uniforms;this.mix>.001&&(e.setRenderTarget(this.rt),e.clear(),e.render(this.scene,this.camera)),s.tWorld.value=n.texture,s.tEarth.value=this.rt.texture,s.uMix.value=this.mix,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.quad.render(e)}};async function yS(){let i=document.getElementById("cosmos"),e=new hr({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=Math.min(window.devicePixelRatio||1,vS);e.setPixelRatio(t),e.setSize(window.innerWidth,window.innerHeight,!1),e.toneMapping=vr,e.toneMappingExposure=1.05,e.outputColorSpace=It;let n=new ur,s=new Lt(40,window.innerWidth/window.innerHeight,.05,5e4),r=0,a=6,o=()=>Yl(++r/a*.85),l=new bs,c=new gr(l),h=await new Promise(X=>{let te=c.load(`assets/textures/${fn.low?"map-2k":"map"}.webp`,()=>{o(),X(te)},void 0,()=>{o(),X(te)});te.colorSpace=rn,te.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),te.minFilter=Fi}),u=(X,te)=>new Promise(ue=>{let Ae=c.load(`assets/textures/${X}.webp`,()=>{o(),ue(Ae)},void 0,()=>{o(),ue(null)});Ae.colorSpace=It,Ae.wrapS=Ae.wrapT=te,Ae.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy())}),[d,f,m]=await Promise.all([u("sky-dusk",Qi),u("facade-brick",cn),u("facade-glass",cn)]),y=X=>fetch(X).then(te=>te.json()).then(te=>(o(),te)),[p,g]=await Promise.all([y("assets/data/nyc.json"),y("assets/data/map.json")]),_=om(n,{map:h,sky:d,brick:f,glass:m},{nyc:p,map:g},fn);Si.has("nobld")&&(_.nycBuildings.mesh.visible=!1),Si.has("debug")&&console.info("stats",JSON.stringify({nycBuildings:_.nycBuildings.count,homes:_.homeCount,..._.stats}));let v=new Ot(1,1,{type:pi,samples:fn.low?0:4}),M=new dl(e,v);M.setPixelRatio(t),M.setSize(window.innerWidth,window.innerHeight);let I=new fl(n,s);M.addPass(I),M.addPass(new Ts($p));let S=new xr(new he(window.innerWidth,window.innerHeight),.42,.35,1.05);M.addPass(S);let A=new zd(fn.low?0:4);A.enabled=!1,M.addPass(A);let R=!0;M.addPass(new pl);let G=new Ts(Zp);M.addPass(G),_.uPixelRatio.value=t;let x={on:!Si.has("noreflect"),scale:fn.low?.35:.5,rt:new Ot(1,1,{type:pi}),cam:new Lt,plane:new yi,clip:new xt,q:new xt,up:new P,fwd:new P};_.reflect.uReflect.value=x.rt.texture;let T=()=>{let X=Math.max(2,Math.round(window.innerWidth*t*x.scale)),te=Math.max(2,Math.round(window.innerHeight*t*x.scale));x.rt.setSize(X,te)};T();function W(X,te){let ue=x.cam,Ae=_.reflect.uMirrorY.value;ue.fov=s.fov,ue.aspect=s.aspect,ue.near=s.near,ue.far=s.far,ue.position.set(s.position.x,2*Ae-s.position.y,s.position.z),x.fwd.set(0,0,-1).applyQuaternion(s.quaternion),x.fwd.y*=-1,x.up.set(0,1,0).applyQuaternion(s.quaternion),x.up.y*=-1,ue.up.copy(x.up),ue.lookAt(Ke.copy(ue.position).add(x.fwd)),ue.setViewOffset(ne(),C(),-X,te,ne(),C()),ue.updateProjectionMatrix(),ue.updateMatrixWorld();let Ye=_.reflect.uReflectMat.value;Ye.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Ye.multiply(ue.projectionMatrix).multiply(ue.matrixWorldInverse),x.plane.setFromNormalAndCoplanarPoint(ye.set(0,1,0),Ke.set(0,Ae,0)).applyMatrix4(ue.matrixWorldInverse),x.clip.set(x.plane.normal.x,x.plane.normal.y,x.plane.normal.z,x.plane.constant);let qe=ue.projectionMatrix.elements;x.q.set((Math.sign(x.clip.x)+qe[8])/qe[0],(Math.sign(x.clip.y)+qe[9])/qe[5],-1,(1+qe[10])/qe[14]),x.clip.multiplyScalar(2/x.clip.dot(x.q)),qe[2]=x.clip.x,qe[6]=x.clip.y,qe[10]=x.clip.z+1,qe[14]=x.clip.w;let Qe=_.waterMeshes.map(et=>et.visible);_.waterMeshes.forEach(et=>{et.visible=!1}),e.setRenderTarget(x.rt),e.clear(),e.render(n,ue),e.setRenderTarget(null),_.waterMeshes.forEach((et,at)=>{et.visible=Qe[at]})}let N=(document.querySelector('meta[name="gmaps-key"]')?.content||"").trim(),D=null;if(N&&!Si.has("generated")&&!fn.night&&!fn.maps)try{D=Rg({key:N,renderer:e})}catch(X){console.warn("3D tiles unavailable",X)}let k=Si.has("gcam")?Si.get("gcam").split(",").map(Number):null,B={pos:[0,0,0],look:[0,0,0],ox:0,oy:0,fov:40,pull:1,flight:0},J=new P,q=new P,se=null,ie=null,re=null,Ve=-1;if(fn.maps){re=document.createElement("div"),re.className="netmap",i.insertAdjacentElement("afterend",re);let X=Array.from(document.querySelectorAll("#consulting li")).map(te=>te.textContent.trim());try{window.maplibregl||await new Promise((te,ue)=>{let Ae=document.createElement("script");Ae.src="assets/js/maplibre-gl.js",Ae.onload=te,Ae.onerror=ue,document.head.appendChild(Ae)}),ie=Ig({container:re,services:X}),document.body.classList.add("has-netmap"),Si.has("debug")&&(window.__netmap=ie)}catch(te){console.warn("network map unavailable",te),re.remove(),ie=null}}let We={night:{zenith:_.uZenith.value.clone(),horizon:_.sky.uniforms.uHorizon.value.clone(),glow:_.sky.uniforms.uGlow.value.clone(),cool:_.fog.cool.value.clone(),warm:_.fog.warm.value.clone()},day:{zenith:new _e(.035,.075,.2),horizon:new _e(.3,.22,.25),glow:new _e(1.25,.55,.22),cool:new _e(.13,.15,.23),warm:new _e(.55,.32,.17)}};function oe(X){_.uZenith.value.copy(We.night.zenith).lerp(We.day.zenith,X),_.sky.uniforms.uHorizon.value.copy(We.night.horizon).lerp(We.day.horizon,X),_.sky.uniforms.uGlow.value.copy(We.night.glow).lerp(We.day.glow,X),_.fog.cool.value.copy(We.night.cool).lerp(We.day.cool,X),_.fog.warm.value.copy(We.night.warm).lerp(We.day.warm,X)}let fe=document.getElementById("labels"),ze=(X,te)=>{let ue=document.createElement("div");return ue.className=`label ${X}`,ue.innerHTML=te,fe.appendChild(ue),ue},Pe=_.offices.map(X=>({o:X,el:ze("label-office",`<span class="dot"></span><span class="stem"></span><span class="txt"><b>${X.name}</b><small>${X.sub}</small></span>`)})),je=_.typeTargets.map(X=>({t:X,el:ze("label-type",`<span class="dot"></span><span>${X.name}</span>`)})),it=Array.from(document.querySelectorAll("#consulting li")).map(X=>X.textContent.trim()).map((X,te)=>({i:te,el:ze("label-node",`<span class="num">${String(te+1).padStart(2,"0")}</span><span class="name">${X}</span>`)})),lt=-1,me=-1,L=null;ci.hotType=X=>{lt=X,ci.markType(X)},ci.hotNode=X=>{me=X,ci.markNode(X)},ci.hotOffice=X=>{L=X,ci.markOffice(X)};let de={x:0,y:0,sx:-100,sy:-100,px:-100,py:-100,inside:!1,overUI:!0},Te=document.getElementById("cursor"),j=document.getElementById("cursor-label"),Se=window.matchMedia("(hover: hover) and (pointer: fine)").matches;Se&&document.body.classList.add("has-cursor");let De='a, button, input, select, textarea, label, summary, [role="button"], iframe',Ce="p, h1, h2, h3, li, dt, dd, address, form, .agent, .chips, legend, .offices";window.addEventListener("pointermove",X=>{de.x=X.clientX/window.innerWidth*2-1,de.y=-(X.clientY/window.innerHeight)*2+1,de.px=X.clientX,de.py=X.clientY,de.inside=!0;let te=X.target instanceof Element?X.target:null,ue=!!(te&&te.closest(De));de.overUI=ue||!!(te&&te.closest(Ce))||!!(te&&te.closest(".site-header, .system-map, .site-footer")),Te.classList.toggle("is-link",ue)},{passive:!0}),document.addEventListener("pointerleave",()=>{de.inside=!1});let E=null;window.addEventListener("click",X=>{if(!E||de.overUI)return;let te=X.target instanceof Element?X.target:null;te&&te.closest(De)||ci.goToChapter(E.chapter)});function w(){let X=window.innerWidth,te=window.innerHeight;s.aspect=X/te,e.setPixelRatio(t),e.setSize(X,te,!1),M.setPixelRatio(t),M.setSize(X,te),_.uPixelRatio.value=t,T(),D&&D.resize(),ie&&ie.resize(),Rr()}window.addEventListener("resize",w),new ResizeObserver(()=>Rr()).observe(document.querySelector("main")),document.fonts&&document.fonts.ready.then(Rr),Rr();let Z=new Ss,ae={pos:new P,look:new P,ox:0,oy:0,fov:40,flight:0},ge=Si.has("cam")?(()=>{let X=Si.get("cam").split(",").map(Number);return[_i(X[0],X[1],X[2]),_i(X[3],X[4],X[5])]})():null;Si.has("p")&&(La=Math.min(Og-1,Math.max(0,parseFloat(Si.get("p"))||0)));let le=Bd(),Re=le,we=Is.matches||La!==null?1:0,Ne=!1,Ke=new P,ye=new P,Fe=new He,Ze=new Ci,Je=new yi(new P(0,1,0),0),Ue=new he,rt={frames:0,acc:0,checked:0},st=!0,bt=0;document.addEventListener("visibilitychange",()=>{st=!document.hidden,st&&(Z.getDelta(),requestAnimationFrame(ve))});let z=(X,te,ue)=>{let Ae=Math.min(1,Math.max(0,(ue-X)/(te-X)));return Ae*Ae*(3-2*Ae)},Ie=X=>Math.max(0,1-Math.abs(Re-X)*1.6),ne=()=>window.innerWidth,C=()=>window.innerHeight;function U(X){return Ke.copy(X).project(s),{x:(Ke.x*.5+.5)*ne(),y:(-Ke.y*.5+.5)*C(),on:Ke.z<1&&Math.abs(Ke.x)<1.1&&Math.abs(Ke.y)<1.1}}let F=null,H=-1;function $(X){let te=Fd[X],ue=te&&(te.querySelector(".panel")||te.querySelector(".contact-intro")||te.querySelector(".wrap")),Ae=ue?ue.getBoundingClientRect():null;F=Ae&&Ae.width?{l:Ae.left-28,r:Ae.right+28,t:Ae.top-20,b:Ae.bottom+20}:null}function Q(X,te,ue,Ae=0,Ye=0){let qe=U(te),Qe=qe.x+Ae,et=qe.y+Ye,at=F&&Qe>F.l&&Qe<F.r&&et>F.t&&et<F.b,ut=ue&&qe.on&&!at;X.classList.toggle("is-on",ut),ut&&(X.style.transform=`translate3d(${(qe.x+Ae).toFixed(1)}px, ${(qe.y+Ye).toFixed(1)}px, 0) translate(-3px, -50%)`)}let ee=X=>`${Math.abs(X).toFixed(4)}\xB0 ${X>=0?"N":"S"}`,ce=X=>`${Math.abs(X).toFixed(4)}\xB0 ${X>=0?"E":"W"}`,pe=X=>X>=1e4?`${Math.round(X/1e3).toLocaleString("en-US")} km`:`${Math.round(X).toLocaleString("en-US")} m`;function ve(){if(!st)return;requestAnimationFrame(ve);let X=Math.min(Z.getDelta(),.05),te=Z.elapsedTime;_.uTime.value=te,G.uniforms.uTime.value=Is.matches?0:te,le=Bd();let ue=La!==null;te-H>.25&&(H=te,$(Math.round(le)));let Ae=Is.matches?12:3;Re+=(le-Re)*(1-Math.exp(-X*Ae)),(Math.abs(le-Re)<1e-4||ue)&&(Re=le),Ne&&we<1&&(we=Math.min(1,we+X/4.5));let Ye=1-Math.pow(1-we,3),qe=ne()/C();if(Se&&(de.sx+=(de.px-de.sx)*.25,de.sy+=(de.py-de.sy)*.25,Te.style.transform=`translate3d(${de.sx.toFixed(1)}px, ${de.sy.toFixed(1)}px, 0)`,Te.classList.toggle("is-hidden",!de.inside)),!Is.matches&&Se&&(Ue.x+=(de.x-Ue.x)*(1-Math.exp(-X*2.5)),Ue.y+=(de.y-Ue.y)*(1-Math.exp(-X*2.5))),ie){let b=z(.12,.5,Re);(Math.abs(b-Ve)>.002||b===1&&Ve!==1||b===0&&Ve!==0)&&(Ve=b,re.style.opacity=String(b),i.style.opacity=String(1-b),document.body.classList.toggle("netmap-on",b>.5),b>.5&&(E=null,Se&&Te.classList.remove("is-world")));let O=ie.update(Re,te,b,lt,me,L,de);if(b<.01&&ie.hideLabels(),b>.999){if(O&&te-bt>.1){bt=te;let Y=O.center[1],K=40075016686e-3*Math.cos(Y*Math.PI/180)/(512*Math.pow(2,O.zoom)),V=C()*K/2/Math.tan(18*Math.PI/180);ci.setProgress(le,Math.round(le),`${ee(Y)} \xB7 ${ce(O.center[0])} \xB7 ALT ${pe(V)}`)}return}}let Qe=!!D&&!D.failed,et=Qe?k?1:z(.12,.62,Re):0;Qe&&!k&&(Nd(Re,qe,B),et*=1-z(4e4,18e4,B.pos[2]));let at=et<.999,ut=et>.001;Qe!==se&&(se=Qe,e.toneMapping=Qe?on:vr,A.enabled=Qe,Qe&&(A.scene=D.scene,A.camera=D.camera));let tt=et>.5;tt!==document.body.classList.contains("real-cities")&&(document.body.classList.toggle("real-cities",tt),E=null,Se&&Te.classList.remove("is-world")),G.uniforms.uGrain.value=.028+(.01-.028)*et,G.uniforms.uAberration.value=6e-4*(1-et),G.uniforms.uVignette.value=.9+(.35-.9)*et,A.mix=et,I.enabled=at,S.enabled=R&&at;let Ge=0;if(Qe){let b=D.camera;Nd(Re,qe,B),k&&(B.pos=k.slice(0,3),B.look=k.slice(3,6),B.ox=0,B.oy=0),Ye<1&&(B.pos[2]*=1+(1-Ye)*.35),D.toFrame(B,J,q),b.up.set(0,1,0),b.position.copy(J),b.lookAt(q);let O=J.distanceTo(q);Ke.set(1,0,0).applyQuaternion(b.quaternion).multiplyScalar(Ue.x*O*.02),ye.set(0,1,0).applyQuaternion(b.quaternion).multiplyScalar(Ue.y*O*.012),b.position.add(Ke).add(ye),b.lookAt(q),Ge=Math.max(2,B.pos[2]),b.fov=B.fov,b.near=Math.max(1,Ge*.04),b.far=Math.max(6e4,2.2*Math.sqrt(2*6371e3*Ge+Ge*Ge)),b.setViewOffset(ne(),C(),-B.ox*ne(),B.oy*C(),ne(),C()),b.updateProjectionMatrix(),b.updateMatrixWorld(),D.update(Ge,te)}let nt=0;if(at){if(Ng(Re,qe,ae),ge&&(ae.pos.copy(ge[0]),ae.look.copy(ge[1]),ae.ox=0,ae.oy=0),Ye<1){let Me=1-Ye;ae.pos.y*=1+Me*.35}s.position.copy(ae.pos),s.lookAt(ae.look);let b=ae.pos.distanceTo(ae.look);Ke.set(1,0,0).applyQuaternion(s.quaternion).multiplyScalar(Ue.x*b*.02),ye.set(0,1,0).applyQuaternion(s.quaternion).multiplyScalar(Ue.y*b*.012),s.position.add(Ke).add(ye),s.position.y=Math.max(s.position.y,.08),s.lookAt(ae.look),nt=s.position.y,s.fov=ae.fov,s.near=Math.max(.02,nt*.01),s.far=Math.max(4e3,nt*60),s.setViewOffset(ne(),C(),-ae.ox*ne(),ae.oy*C(),ne(),C()),s.updateProjectionMatrix(),s.updateMatrixWorld(),_.fog.density.value=fn.night?1/Math.max(230,nt*4):1/Math.max(260,nt*5),_.fog.detail.value=1-z(140,700,nt),_.clouds.uniforms.uOpacity.value=.42*z(110,600,nt)*(1-z(25e3,4e4,nt))+.5*ae.flight*z(60,200,nt),_.map.uniforms.uLights.value=.6+.6*z(50,3e3,nt),_.offices.forEach(Me=>{let ke=s.position.distanceTo(Me.pos);Me.beam.scale.set(Math.max(.12,ke*.0035),Math.max(8,ke*.45),Math.max(.12,ke*.0035)),Me.ring.scale.setScalar(Math.max(.8,ke*.06));let Be=Math.max(Ie(0),Ie(7)*(Me.id==="orlando"?1:0),Ie(2)*(Me.id==="new-york"?1:0),Ie(3)*(Me.id==="orlando"?1:0),.12),gt=_.realCities?z(150,1500,nt):1;Me.beamMat.uniforms.uIntensity.value=1.2*Be*gt*(.35+.65*z(4,60,ke))*(L===Me.id?1.8:1),Me.ringMat.uniforms.uOn.value=Be*gt}),_.arc.uniforms.uOn.value=Math.max(1-z(.4,1,Re),ae.flight*(Re>2&&Re<3?1:0)),_.arc.uniforms.uDraw.value+=((Ne?1.02:0)-_.arc.uniforms.uDraw.value)*(ue?1:1-Math.exp(-X*1.2)),_.billboards.forEach(Me=>Me.quaternion.copy(s.quaternion)),_.fountain&&_.fountain.material.uniforms.uColor.value.setHSL(te*.03%1,.6,.6);let O=_.nycBuildings.uniforms;O.uHot.value=lt,O.uHotOn.value+=((lt>=0?1:0)-O.uHotOn.value)*.15;let Y=Ie(2);je.forEach((Me,ke)=>{Me.el.classList.toggle("is-hot",lt===ke),ye.copy(Me.t.local).add(_.nyc.center),Q(Me.el,ye.clone(),Y>.55&&qe>.9&&!_.realCities)});let K=_.tower,V=z(3.3,3.95,Re)*(1-z(5.3,5.9,Re));K.uniforms.uDraw.value+=(V*1.08-K.uniforms.uDraw.value)*(ue?1:1-Math.exp(-X*1.6)),K.uniforms.uHot.value=me;let xe=Ie(4);it.forEach(Me=>{Me.el.classList.toggle("is-hot",me===Me.i),ye.copy(K.floorLocal(Me.i)).add(_.orl.center);let ke=!_.realCities&&xe>.55&&(qe>.9||me===Me.i)&&K.uniforms.uDraw.value>Me.i/15+.05;Q(Me.el,ye.clone(),ke,26,0)});let be=_.parcels.uniforms;be.uOn.value+=(z(5.4,6,Re)*(1-z(6.6,7,Re))-be.uOn.value)*(ue?1:.08);let Ee=0;if(Se&&de.inside&&!de.overUI&&be.uOn.value>.2&&(Ke.set(de.x,de.y,.5).unproject(s).sub(s.position).normalize(),Ze.set(s.position,Ke),Ze.intersectPlane(Je,ye)&&(Ee=1,be.uPointerOn.value<.05&&be.uPointer.value.copy(ye),be.uPointer.value.lerp(ye,.2))),be.uPointerOn.value+=(Ee-be.uPointerOn.value)*.08,Pe.forEach(Me=>{Me.el.classList.toggle("is-hot",L===Me.o.id);let ke=Ie(0)>.5||Me.o.id==="new-york"&&Ie(2)>.55||Me.o.id==="orlando"&&(Ie(7)>.55||Ie(3)>.55);Q(Me.el,Me.o.pos,ke)}),E=null,Se&&de.inside&&!de.overUI&&Ie(0)>.5)for(let Me of _.hit){let ke=U(Me.center);ke.on&&Math.hypot(ke.x-de.px,ke.y-de.py)<70&&(E=Me)}Se&&(de.sx+=(de.px-de.sx)*.25,de.sy+=(de.py-de.sy)*.25,Te.style.transform=`translate3d(${de.sx.toFixed(1)}px, ${de.sy.toFixed(1)}px, 0)`,Te.classList.toggle("is-world",!!E),Te.classList.toggle("is-hidden",!de.inside),E&&j.textContent!==E.label&&(j.textContent=E.label));let Le=x.on&&nt<60&&_.fog.detail.value>.05;_.reflect.uReflectOn.value=Le?1:0,Le&&W(-ae.ox*ne(),ae.oy*C())}if(M.render(X),te-bt>.1)if(bt=te,tt)ci.setProgress(le,Math.round(le),`${ee(B.pos[0])} \xB7 ${ce(B.pos[1])} \xB7 ALT ${pe(Ge)}`);else{let b=nm(s.position.x,s.position.z);ci.setProgress(le,Math.round(le),`${ee(b.lat)} \xB7 ${ce(b.lon)} \xB7 ALT ${pe(sm(nt,b.lat))}`)}if(Ne&&rt.checked<4&&!(tt&&D.busy)&&(rt.frames++,rt.acc+=X,rt.frames>=90)){let b=rt.acc/rt.frames;rt.frames=0,rt.acc=0,rt.checked++,b>1/42&&x.on&&x.scale>.3?(x.scale=.25,T()):b>1/42&&x.on?x.on=!1:b>1/42&&t>.8?(t=Math.max(.75,t-.35),w()):b>1/28&&R&&(R=!1)}}Yl(.92);try{e.compile(n,s)}catch{}requestAnimationFrame(ve),setTimeout(()=>{Yl(1),Ne=!0,jl(),Fd[0].classList.add("is-in"),ci.startReveals()},300)}mS()?yS().catch(i=>{console.error(i),Od.classList.add("no-webgl"),jl(),ci.startReveals(),Bg()}):(Od.classList.add("no-webgl"),jl(),ci.startReveals(),Bg());})();
