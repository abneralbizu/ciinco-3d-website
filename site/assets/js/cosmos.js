(()=>{var Hl="169";var Nu=0,_c=1,Fu=2;var Ch=1,Ou=2,kn=3,ii=0,Xe=1,cn=2,Un=0,Ji=1,ts=2,yc=3,Mc=4,zu=5,Mi=100,Bu=101,ku=102,Vu=103,Hu=104,Gu=200,Wu=201,Xu=202,qu=203,_a=204,ya=205,Yu=206,$u=207,Zu=208,Ju=209,Ku=210,Qu=211,ju=212,tf=213,ef=214,Ma=0,Sa=1,ba=2,es=3,wa=4,Aa=5,Ea=6,Ta=7,Rh=0,nf=1,sf=2,ei=0,Gl=1,Wl=2,Xl=3,ks=4,rf=5,ql=6,Yl=7;var Ph=300,ns=301,is=302,Ca=303,Ra=304,go=306,ss=1e3,Vn=1001,Pa=1002,Je=1003,of=1004;var Ks=1005;var bn=1006,zo=1007;var Hn=1008;var Wn=1009,Ih=1010,Lh=1011,Is=1012,$l=1013,wi=1014,Ln=1015,tn=1016,Zl=1017,Jl=1018,rs=1020,Uh=35902,Dh=1021,Nh=1022,wn=1023,Fh=1024,Oh=1025,Ki=1026,os=1027,Kl=1028,Ql=1029,zh=1030,jl=1031;var tc=1033,Tr=33776,Cr=33777,Rr=33778,Pr=33779,Ia=35840,La=35841,Ua=35842,Da=35843,Na=36196,Fa=37492,Oa=37496,za=37808,Ba=37809,ka=37810,Va=37811,Ha=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,Ka=37821,Ir=36492,Qa=36494,ja=36495,Bh=36283,tl=36284,el=36285,nl=36286;var Ur=2300,il=2301,Bo=2302,Sc=2400,bc=2401,wc=2402;var af=3200,lf=3201;var cf=0,hf=1,In="",ln="srgb",ci="srgb-linear",ec="display-p3",vo="display-p3-linear",Dr="linear",Me="srgb",Nr="rec709",Fr="p3";var Ui=7680;var Ac=519,uf=512,ff=513,df=514,kh=515,pf=516,mf=517,gf=518,vf=519,Ec=35044;var Tc="300 es",Gn=2e3,Or=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ko=Math.PI/180,sl=180/Math.PI;function fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function xf(i,t){return(i%t+t)%t}function Vo(i,t,e){return(1-e)*i+e*t}function xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],v=n[8],_=s[0],p=s[3],m=s[6],y=s[1],x=s[4],S=s[7],F=s[2],I=s[5],P=s[8];return r[0]=o*_+a*y+l*F,r[3]=o*p+a*x+l*I,r[6]=o*m+a*S+l*P,r[1]=c*_+h*y+f*F,r[4]=c*p+h*x+f*I,r[7]=c*m+h*S+f*P,r[2]=d*_+u*y+v*F,r[5]=d*p+u*x+v*I,r[8]=d*m+u*S+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,v=e*f+n*d+s*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new ce;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=Ls("canvas");return i.style.display="block",i}var Cc={};function Lr(i){i in Cc||(Cc[i]=!0,console.warn(i))}function yf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Rc=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pc=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[ci]:{transfer:Dr,primaries:Nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ln]:{transfer:Me,primaries:Nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vo]:{transfer:Dr,primaries:Fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Pc),fromReference:i=>i.applyMatrix3(Rc)},[ec]:{transfer:Me,primaries:Fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Pc),fromReference:i=>i.applyMatrix3(Rc).convertLinearToSRGB()}},bf=new Set([ci,vo]),me={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=_s[t].toReference,s=_s[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return _s[i].primaries},getTransfer:function(i){return i===In?Dr:_s[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(_s[t].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,rl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Ls("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Af=0,Ke=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=bn,o=Hn,a=wn,l=Wn,c=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=fs(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Ph;Ke.DEFAULT_ANISOTROPY=1;var Ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],v=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(u+1)/2,F=(m+1)/2,I=(h+d)/4,P=(f+_)/4,O=(v+p)/4;return x>S&&x>F?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=I/n,r=P/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=O/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=P/r,s=O/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=v,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==v){let p=1-a,m=l*d+c*u+h*v+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let F=Math.sqrt(x),I=Math.atan2(F,m*y);p=Math.sin(p*I)/F,a=Math.sin(a*I)/F}let S=a*y;if(l=l*p+d*S,c=c*p+u*S,h=h*p+v*S,f=f*p+_*S,p===1-a){let F=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=F,c*=F,h*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],v=r[o+3];return t[e]=a*v+h*f+l*u-c*d,t[e+1]=l*v+h*d+c*f-a*u,t[e+2]=c*v+h*u+a*d-l*f,t[e+3]=h*v-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*v,this._y=c*u*f-d*h*v,this._z=c*h*v+d*u*f,this._w=c*h*f-d*u*v;break;case"YXZ":this._x=d*h*f+c*u*v,this._y=c*u*f-d*h*v,this._z=c*h*v-d*u*f,this._w=c*h*f+d*u*v;break;case"ZXY":this._x=d*h*f-c*u*v,this._y=c*u*f+d*h*v,this._z=c*h*v+d*u*f,this._w=c*h*f-d*u*v;break;case"ZYX":this._x=d*h*f-c*u*v,this._y=c*u*f+d*h*v,this._z=c*h*v-d*u*f,this._w=c*h*f+d*u*v;break;case"YZX":this._x=d*h*f+c*u*v,this._y=c*u*f+d*h*v,this._z=c*h*v-d*u*f,this._w=c*h*f-d*u*v;break;case"XZY":this._x=d*h*f-c*u*v,this._y=c*u*f-d*h*v,this._z=c*h*v+d*u*f,this._w=c*h*f+d*u*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new D,Ic=new ri,Xn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),js.subVectors(this.max,ys),Ni.subVectors(t.a,ys),Fi.subVectors(t.b,ys),Oi.subVectors(t.c,ys),Zn.subVectors(Fi,Ni),Jn.subVectors(Oi,Fi),pi.subVectors(Ni,Oi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!qo(e,Ni,Fi,Oi,js)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Ni,Fi,Oi,js))?!1:(tr.crossVectors(Zn,Jn),e=[tr.x,tr.y,tr.z],qo(e,Ni,Fi,Oi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,Qs=new Xn,Ni=new D,Fi=new D,Oi=new D,Zn=new D,Jn=new D,pi=new D,ys=new D,js=new D,tr=new D,mi=new D;function qo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ef=new Xn,Ms=new D,Yo=new D,qn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Yo)),this.expandByPoint(Ms.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new D,$o=new D,er=new D,Kn=new D,Zo=new D,nr=new D,Jo=new D,Ai=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,o=-this.direction.dot(er),a=Kn.dot(this.direction),l=-Kn.dot(er),c=Kn.lengthSq(),h=Math.abs(1-o*o),f,d,u,v;if(h>0)if(f=o*l-a,d=o*a-l,v=r*h,f>=0)if(d>=-v)if(d<=v){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($o).addScaledVector(er,d),u}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Zo.subVectors(e,t),nr.subVectors(n,t),Jo.crossVectors(Zo,nr);let o=this.direction.dot(Jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let l=a*this.direction.dot(nr.crossVectors(Kn,nr));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(Kn));if(c<0||l+c>o)return null;let h=-a*Kn.dot(Jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,d,u,v,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,d,u,v,_,p)}set(t,e,n,s,r,o,a,l,c,h,f,d,u,v,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=v,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*f,v=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+v*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=v+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,v=c*h,_=c*f;e[0]=d+_*a,e[4]=v*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-v,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,v=c*h,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=v+u*a,e[1]=u+v*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,v=a*h,_=a*f;e[0]=l*h,e[4]=v*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=v*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+v,e[10]=d-_*f}else if(t.order==="XZY"){let d=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=o*h,e[9]=u*f-v,e[2]=v*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Cf)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Qn.crossVectors(n,on),Qn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Qn.crossVectors(n,on)),Qn.normalize(),ir.crossVectors(on,Qn),s[0]=Qn.x,s[4]=ir.x,s[8]=on.x,s[1]=Qn.y,s[5]=ir.y,s[9]=on.y,s[2]=Qn.z,s[6]=ir.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],v=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],S=n[11],F=n[15],I=s[0],P=s[4],O=s[8],N=s[12],g=s[1],b=s[5],G=s[9],W=s[13],U=s[2],k=s[6],q=s[10],st=s[14],K=s[3],ft=s[7],ht=s[11],ot=s[15];return r[0]=o*I+a*g+l*U+c*K,r[4]=o*P+a*b+l*k+c*ft,r[8]=o*O+a*G+l*q+c*ht,r[12]=o*N+a*W+l*st+c*ot,r[1]=h*I+f*g+d*U+u*K,r[5]=h*P+f*b+d*k+u*ft,r[9]=h*O+f*G+d*q+u*ht,r[13]=h*N+f*W+d*st+u*ot,r[2]=v*I+_*g+p*U+m*K,r[6]=v*P+_*b+p*k+m*ft,r[10]=v*O+_*G+p*q+m*ht,r[14]=v*N+_*W+p*st+m*ot,r[3]=y*I+x*g+S*U+F*K,r[7]=y*P+x*b+S*k+F*ft,r[11]=y*O+x*G+S*q+F*ht,r[15]=y*N+x*W+S*st+F*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],v=t[3],_=t[7],p=t[11],m=t[15];return v*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*u-n*l*u)+_*(+e*l*u-e*c*d+r*o*d-s*o*u+s*c*h-r*l*h)+p*(+e*c*f-e*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+m*(-s*a*h-e*l*f+e*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],v=t[12],_=t[13],p=t[14],m=t[15],y=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,x=v*d*c-h*p*c-v*l*u+o*p*u+h*l*m-o*d*m,S=h*_*c-v*f*c+v*a*u-o*_*u-h*a*m+o*f*m,F=v*f*l-h*_*l-v*a*d+o*_*d+h*a*p-o*f*p,I=e*y+n*x+s*S+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return t[0]=y*P,t[1]=(_*d*r-f*p*r-_*s*u+n*p*u+f*s*m-n*d*m)*P,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*P,t[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*u-n*l*u)*P,t[4]=x*P,t[5]=(h*p*r-v*d*r+v*s*u-e*p*u-h*s*m+e*d*m)*P,t[6]=(v*l*r-o*p*r-v*s*c+e*p*c+o*s*m-e*l*m)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*u+e*l*u)*P,t[8]=S*P,t[9]=(v*f*r-h*_*r-v*n*u+e*_*u+h*n*m-e*f*m)*P,t[10]=(o*_*r-v*a*r+v*n*c-e*_*c-o*n*m+e*a*m)*P,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*u-e*a*u)*P,t[12]=F*P,t[13]=(h*_*s-v*f*s+v*n*d-e*_*d-h*n*p+e*f*p)*P,t[14]=(v*a*s-o*_*s-v*n*l+e*_*l+o*n*p-e*a*p)*P,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,v=r*f,_=o*h,p=o*f,m=a*f,y=l*c,x=l*h,S=l*f,F=n.x,I=n.y,P=n.z;return s[0]=(1-(_+m))*F,s[1]=(u+S)*F,s[2]=(v-x)*F,s[3]=0,s[4]=(u-S)*I,s[5]=(1-(d+m))*I,s[6]=(p+y)*I,s[7]=0,s[8]=(v+x)*P,s[9]=(p-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,v;if(a===Gn)u=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Or)u=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),d=(e+t)*c,u=(n+s)*h,v,_;if(a===Gn)v=(o+r)*f,_=-2*f;else if(a===Or)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new D,Mn=new _e,Tf=new D(0,0,0),Cf=new D(1,1,1),Qn=new D,ir=new D,on=new D,Lc=new _e,Uc=new ri,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rf=0,Dc=new D,Bi=new ri,On=new _e,sr=new D,Ss=new D,Pf=new D,If=new ri,Nc=new D(1,0,0),Fc=new D(0,1,0),Oc=new D(0,0,1),zc={type:"added"},Lf={type:"removed"},ki={type:"childadded",child:null},Ko={type:"childremoved",child:null},ke=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Yn,n=new ri,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ce}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ss,sr,this.up):On.lookAt(sr,Ss,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(On),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new D(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new D,zn=new D,Qo=new D,Bn=new D,Vi=new D,Hi=new D,Bc=new D,jo=new D,ta=new D,ea=new D,na=new Ae,ia=new Ae,sa=new Ae,Si=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),zn.subVectors(n,e),Qo.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(zn),l=Sn.dot(Qo),c=zn.dot(zn),h=zn.dot(Qo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-u-v,v,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),zn.subVectors(t,e),Sn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Sn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,n),Hi.subVectors(r,n),jo.subVectors(t,n);let l=Vi.dot(jo),c=Hi.dot(jo);if(l<=0&&c<=0)return e.copy(n);ta.subVectors(t,s);let h=Vi.dot(ta),f=Hi.dot(ta);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vi,o);ea.subVectors(t,r);let u=Vi.dot(ea),v=Hi.dot(ea);if(v>=0&&u<=v)return e.copy(r);let _=u*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Hi,a);let p=h*v-u*f;if(p<=0&&f-h>=0&&u-v>=0)return Bc.subVectors(r,s),a=(f-h)/(f-h+(u-v)),e.copy(s).addScaledVector(Bc,a);let m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=xf(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ra(o,r,t+1/3),this.g=ra(o,r,t),this.b=ra(o,r,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return me.fromWorkingColorSpace(He.copy(this),t),Math.round(Ge(He.r*255,0,255))*65536+Math.round(Ge(He.g*255,0,255))*256+Math.round(Ge(He.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ln){me.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(rr);let n=Vo(jn.h,rr.h,e),s=Vo(jn.s,rr.s,e),r=Vo(jn.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Lt;Lt.NAMES=Hh;var Uf=0,oi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=ya,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ai=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new D,or=new xt,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}};var Vr=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=0,dn=new _e,oa=new ke,Gi=new D,an=new Xn,bs=new Xn,ze=new D,Se=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Hr:Vr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,bs.min),an.expandByPoint(ze),ze.addVectors(an.max,bs.max),an.expandByPoint(ze)):(an.expandByPoint(bs.min),an.expandByPoint(bs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),ze.add(Gi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new D,l[O]=new D;let c=new D,h=new D,f=new D,d=new xt,u=new xt,v=new xt,_=new D,p=new D;function m(O,N,g){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,g),d.fromBufferAttribute(r,O),u.fromBufferAttribute(r,N),v.fromBufferAttribute(r,g),h.sub(c),f.sub(c),u.sub(d),v.sub(d);let b=1/(u.x*v.y-v.x*u.y);isFinite(b)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(f,-u.y).multiplyScalar(b),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-v.x).multiplyScalar(b),a[O].add(_),a[N].add(_),a[g].add(_),l[O].add(p),l[N].add(p),l[g].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,N=y.length;O<N;++O){let g=y[O],b=g.start,G=g.count;for(let W=b,U=b+G;W<U;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let x=new D,S=new D,F=new D,I=new D;function P(O){F.fromBufferAttribute(s,O),I.copy(F);let N=a[O];x.copy(N),x.sub(F.multiplyScalar(F.dot(N))).normalize(),S.crossVectors(I,N);let b=S.dot(l[O])<0?-1:1;o.setXYZW(O,x.x,x.y,x.z,b)}for(let O=0,N=y.length;O<N;++O){let g=y[O],b=g.start,G=g.count;for(let W=b,U=b+G;W<U;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let d=0,u=t.count;d<u;d+=3){let v=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[v++]=c[u++]}return new be(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=new _e,gi=new Ai,ar=new qn,Vc=new D,lr=new D,cr=new D,hr=new D,aa=new D,ur=new D,Hc=new D,fr=new D,pe=class extends ke{constructor(t=new Se,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(aa.fromBufferAttribute(f,t),o?ur.addScaledVector(aa,h):ur.addScaledVector(aa.sub(e),h))}e.add(ur)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(ar.containsPoint(gi.origin)===!1&&(gi.intersectSphere(ar,Vc)===null||gi.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){let p=d[v],m=o[p.materialIndex],y=Math.max(p.start,u.start),x=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,F=x;S<F;S+=3){let I=a.getX(S),P=a.getX(S+1),O=a.getX(S+2);s=dr(this,m,t,n,c,h,f,I,P,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let v=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=v,m=_;p<m;p+=3){let y=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=dr(this,o,t,n,c,h,f,y,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){let p=d[v],m=o[p.materialIndex],y=Math.max(p.start,u.start),x=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let S=y,F=x;S<F;S+=3){let I=S,P=S+1,O=S+2;s=dr(this,m,t,n,c,h,f,I,P,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let v=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=v,m=_;p<m;p+=3){let y=p,x=p+1,S=p+2;s=dr(this,o,t,n,c,h,f,y,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Nf(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ii,a),l===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,hr);let h=Nf(i,t,e,n,lr,cr,hr,Hc);if(h){let f=new D;Si.getBarycoord(Hc,lr,cr,hr,f),s&&(h.uv=Si.getInterpolatedAttribute(s,a,l,c,f,new xt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,f,new xt)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Si.getNormal(lr,cr,hr,d.normal),h.face=d,h.barycoord=f}return h}var mn=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function v(_,p,m,y,x,S,F,I,P,O,N){let g=S/P,b=F/O,G=S/2,W=F/2,U=I/2,k=P+1,q=O+1,st=0,K=0,ft=new D;for(let ht=0;ht<q;ht++){let ot=ht*b-W;for(let Vt=0;Vt<k;Vt++){let Ht=Vt*g-G;ft[_]=Ht*y,ft[p]=ot*x,ft[m]=U,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[p]=0,ft[m]=I>0?1:-1,h.push(ft.x,ft.y,ft.z),f.push(Vt/P),f.push(1-ht/O),st+=1}}for(let ht=0;ht<O;ht++)for(let ot=0;ot<P;ot++){let Vt=d+ot+k*ht,Ht=d+ot+k*(ht+1),z=d+(ot+1)+k*(ht+1),$=d+(ot+1)+k*ht;l.push(Vt,Ht,$),l.push(Ht,z,$),K+=6}a.addGroup(u,K,N),u+=K,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function Ff(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var hi={clone:as,merge:Ye},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new D,Gc=new xt,Wc=new xt,We=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wi=-90,Xi=1,ll=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Wi,Xi,t,e);s.layers=this.layers,this.add(s);let r=new We(Wi,Xi,t,e);r.layers=this.layers,this.add(r);let o=new We(Wi,Xi,t,e);o.layers=this.layers,this.add(o);let a=new We(Wi,Xi,t,e);a.layers=this.layers,this.add(a);let l=new We(Wi,Xi,t,e);l.layers=this.layers,this.add(l);let c=new We(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Wr=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cl=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Un});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=bn),new ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},la=new D,Bf=new D,kf=new ce,pn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=la.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(la),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kf.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new qn,pr=new D,Xr=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,o=new pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],v=s[9],_=s[10],p=s[11],m=s[12],y=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,p-u,S-m).normalize(),n[1].setComponents(l+r,d+c,p+u,S+m).normalize(),n[2].setComponents(l+o,d+h,p+v,S+y).normalize(),n[3].setComponents(l-o,d-h,p-v,S-y).normalize(),n[4].setComponents(l-a,d-f,p-_,S-x).normalize(),e===Gn)n[5].setComponents(l+a,d+f,p+_,S+x).normalize();else if(e===Or)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,v)=>u.start-v.start);let d=0;for(let u=1;u<f.length;u++){let v=f[d],_=f[u];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,v=f.length;u<v;u++){let _=f[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qe=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,u=[],v=[],_=[],p=[];for(let m=0;m<h;m++){let y=m*d-o;for(let x=0;x<c;x++){let S=x*f-r;v.push(S,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let x=y+c*m,S=y+c*(m+1),F=y+1+c*(m+1),I=y+1+c*m;u.push(x,S,I),u.push(S,F,I)}this.setIndex(u),this.setAttribute("position",new re(v,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ed=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ud=`#define PI 3.141592653589793
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
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`
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
}`,yd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
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
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
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
#endif`,kd=`struct PhysicalMaterial {
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
}`,Vd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kd=`#if defined( USE_POINTS_UV )
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
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 color;
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
}`,_m=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Hf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:$f,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Kf,begin_vertex:Qf,beginnormal_vertex:jf,bsdfs:td,iridescence_fragment:ed,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:od,color_fragment:ad,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:hd,common:ud,cube_uv_reflection_fragment:fd,defaultnormal_vertex:dd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:_d,envmap_fragment:yd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Dd,envmap_vertex:wd,fog_vertex:Ad,fog_pars_vertex:Ed,fog_fragment:Td,fog_pars_fragment:Cd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Ld,lights_pars_begin:Ud,lights_toon_fragment:Nd,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:zd,lights_physical_fragment:Bd,lights_physical_pars_fragment:kd,lights_fragment_begin:Vd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:jd,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:dp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:_p,dithering_pars_fragment:yp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Pp,specularmap_fragment:Ip,specularmap_pars_fragment:Lp,tonemapping_fragment:Up,tonemapping_pars_fragment:Dp,transmission_fragment:Np,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:zp,uv_vertex:Bp,worldpos_vertex:kp,background_vert:Vp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:$p,distanceRGBA_vert:Zp,distanceRGBA_frag:Jp,equirect_vert:Kp,equirect_frag:Qp,linedashed_vert:jp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:fm,meshtoon_vert:dm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:vm,shadow_frag:xm,sprite_vert:_m,sprite_frag:ym},Dt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Pn={basic:{uniforms:Ye([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ye([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ye([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ye([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ye([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ye([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ye([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ye([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ye([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ye([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ye([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ye([Dt.common,Dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ye([Dt.lights,Dt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Pn.physical={uniforms:Ye([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var mr={r:0,b:0,g:0},xi=new Yn,Mm=new _e;function Sm(i,t,e,n,s,r,o){let a=new Lt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function v(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,S=v(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){let S=v(x);S&&(S.isCubeTexture||S.mapping===go)?(h===void 0&&(h=new pe(new mn(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:as(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(xi)),h.material.toneMapped=me.getTransfer(S.colorSpace)!==Me,(f!==S||d!==S.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pe(new Qe(2,2),new Ee({name:"BackgroundMaterial",uniforms:as(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(S.colorSpace)!==Me,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(mr,Gh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function bm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(g,b,G,W,U){let k=!1,q=f(W,G,b);r!==q&&(r=q,c(r.object)),k=u(g,W,G,U),k&&v(g,W,G,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(g,b,G,W),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function f(g,b,G){let W=G.wireframe===!0,U=n[g.id];U===void 0&&(U={},n[g.id]=U);let k=U[b.id];k===void 0&&(k={},U[b.id]=k);let q=k[W];return q===void 0&&(q=d(l()),k[W]=q),q}function d(g){let b=[],G=[],W=[];for(let U=0;U<e;U++)b[U]=0,G[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:W,object:g,attributes:{},index:null}}function u(g,b,G,W){let U=r.attributes,k=b.attributes,q=0,st=G.getAttributes();for(let K in st)if(st[K].location>=0){let ht=U[K],ot=k[K];if(ot===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(ot=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(ot=g.instanceColor)),ht===void 0||ht.attribute!==ot||ot&&ht.data!==ot.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function v(g,b,G,W){let U={},k=b.attributes,q=0,st=G.getAttributes();for(let K in st)if(st[K].location>=0){let ht=k[K];ht===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(ht=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(ht=g.instanceColor));let ot={};ot.attribute=ht,ht&&ht.data&&(ot.data=ht.data),U[K]=ot,q++}r.attributes=U,r.attributesNum=q,r.index=W}function _(){let g=r.newAttributes;for(let b=0,G=g.length;b<G;b++)g[b]=0}function p(g){m(g,0)}function m(g,b){let G=r.newAttributes,W=r.enabledAttributes,U=r.attributeDivisors;G[g]=1,W[g]===0&&(i.enableVertexAttribArray(g),W[g]=1),U[g]!==b&&(i.vertexAttribDivisor(g,b),U[g]=b)}function y(){let g=r.newAttributes,b=r.enabledAttributes;for(let G=0,W=b.length;G<W;G++)b[G]!==g[G]&&(i.disableVertexAttribArray(G),b[G]=0)}function x(g,b,G,W,U,k,q){q===!0?i.vertexAttribIPointer(g,b,G,U,k):i.vertexAttribPointer(g,b,G,W,U,k)}function S(g,b,G,W){_();let U=W.attributes,k=G.getAttributes(),q=b.defaultAttributeValues;for(let st in k){let K=k[st];if(K.location>=0){let ft=U[st];if(ft===void 0&&(st==="instanceMatrix"&&g.instanceMatrix&&(ft=g.instanceMatrix),st==="instanceColor"&&g.instanceColor&&(ft=g.instanceColor)),ft!==void 0){let ht=ft.normalized,ot=ft.itemSize,Vt=t.get(ft);if(Vt===void 0)continue;let Ht=Vt.buffer,z=Vt.type,$=Vt.bytesPerElement,at=z===i.INT||z===i.UNSIGNED_INT||ft.gpuType===$l;if(ft.isInterleavedBufferAttribute){let dt=ft.data,bt=dt.stride,Ft=ft.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<K.locationSize;Yt++)m(K.location+Yt,dt.meshPerAttribute);g.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<K.locationSize;Yt++)p(K.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Yt=0;Yt<K.locationSize;Yt++)x(K.location+Yt,ot/K.locationSize,z,ht,bt*$,(Ft+ot/K.locationSize*Yt)*$,at)}else{if(ft.isInstancedBufferAttribute){for(let dt=0;dt<K.locationSize;dt++)m(K.location+dt,ft.meshPerAttribute);g.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let dt=0;dt<K.locationSize;dt++)p(K.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let dt=0;dt<K.locationSize;dt++)x(K.location+dt,ot/K.locationSize,z,ht,ot*$,ot/K.locationSize*dt*$,at)}}else if(q!==void 0){let ht=q[st];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(K.location,ht);break;case 3:i.vertexAttrib3fv(K.location,ht);break;case 4:i.vertexAttrib4fv(K.location,ht);break;default:i.vertexAttrib1fv(K.location,ht)}}}}y()}function F(){O();for(let g in n){let b=n[g];for(let G in b){let W=b[G];for(let U in W)h(W[U].object),delete W[U];delete b[G]}delete n[g]}}function I(g){if(n[g.id]===void 0)return;let b=n[g.id];for(let G in b){let W=b[G];for(let U in W)h(W[U].object),delete W[U];delete b[G]}delete n[g.id]}function P(g){for(let b in n){let G=n[b];if(G[g.id]===void 0)continue;let W=G[g.id];for(let U in W)h(W[U].object),delete W[U];delete G[g.id]}}function O(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:N,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function wm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let v=0;v<f;v++)u+=h[v];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=h[_];for(let _=0;_<d.length;_++)e.update(v,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let O=P===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:F,maxSamples:I}}function Em(i){let t=this,e=null,n=0,s=!1,r=!1,o=new pn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,x=y*4,S=m.clippingState||null;l.value=S,S=h(v,d,x,u);for(let F=0;F!==x;++F)S[F]=e[F];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,v){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,v!==!0||p===null){let m=u+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=u;x!==_;++x,S+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Tm(i){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=ns:a===Ra&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Ra)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Us=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$i=4,Xc=[.125,.215,.35,.446,.526,.582],bi=20,ca=new Us,qc=new Lt,ha=null,ua=0,fa=0,da=!1,yi=(1+Math.sqrt(5))/2,qi=1/yi,Yc=[new D(-yi,qi,0),new D(yi,qi,0),new D(-qi,0,yi),new D(qi,0,yi),new D(0,yi,-qi),new D(0,yi,qi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,ua,fa),this._renderer.xr.enabled=da,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:tn,format:wn,colorSpace:ci,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,n,s){let a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qc),h.toneMapping=ei,h.autoClear=!1;let u=new ai({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),v=new pe(new mn,u),_=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(qc),_=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;gr(s,y*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yc[(s-r-1)%Yc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new pe(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*bi-1),_=r/v,p=isFinite(r)?1+Math.floor(h*_):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);let m=[],y=0;for(let P=0;P<bi;++P){let O=P/_,N=Math.exp(-O*O/2);m.push(N),P===0?y+=N:P<p&&(y+=2*N)}for(let P=0;P<m.length;P++)m[P]=m[P]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;let S=this._sizeLods[s],F=3*S*(s>x-$i?s-x+$i:0),I=4*(this._cubeSize-S);gr(e,F,I,3*S,2*S),l.setRenderTarget(e),l.render(f,ca)}};function Cm(i){let t=[],e=[],n=[],s=i,r=i-$i+1+Xc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-$i?l=Xc[o-i+$i-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,v=6,_=3,p=2,m=1,y=new Float32Array(_*v*u),x=new Float32Array(p*v*u),S=new Float32Array(m*v*u);for(let I=0;I<u;I++){let P=I%3*2/3-1,O=I>2?0:-1,N=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];y.set(N,_*v*I),x.set(d,p*v*I);let g=[I,I,I,I,I,I];S.set(g,m*v*I)}let F=new Se;F.setAttribute("position",new be(y,_)),F.setAttribute("uv",new be(x,p)),F.setAttribute("faceIndex",new be(S,m)),t.push(F),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){let n=new Float32Array(bi),s=new D(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Zc(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Jc(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Ra,h=l===ns||l===is;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qr(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new qr(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Im(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lm(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);for(let v in d.morphAttributes){let _=d.morphAttributes[v];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let v in d)t.update(d[v],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let v in u){let _=u[v];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,v=f.attributes.position,_=0;if(u!==null){let y=u.array;_=u.version;for(let x=0,S=y.length;x<S;x+=3){let F=y[x+0],I=y[x+1],P=y[x+2];d.push(F,I,I,P,P,F)}}else if(v!==void 0){let y=v.array;_=v.version;for(let x=0,S=y.length/3-1;x<S;x+=3){let F=x+0,I=x+1,P=x+2;d.push(F,I,I,P,P,F)}}else return;let p=new(Vh(d)?Hr:Vr)(d,1);p.version=_;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Um(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,v){v!==0&&(i.drawElementsInstanced(n,u,r,d*o,v),e.update(u,n,v))}function h(d,u,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,v);let p=0;for(let m=0;m<v;m++)p+=u[m];e.update(p,n,1)}function f(d,u,v,_){if(v===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,u[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,_,0,v);let m=0;for(let y=0;y<v;y++)m+=u[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Dm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let N=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;u===!0&&(x=1),v===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,F=1;S>t.maxTextureSize&&(F=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let I=new Float32Array(S*F*4*f),P=new Br(I,S,F,f);P.type=Ln,P.needsUpdate=!0;let O=x*4;for(let g=0;g<f;g++){let b=p[g],G=m[g],W=y[g],U=S*F*4*g;for(let k=0;k<b.count;k++){let q=k*O;u===!0&&(s.fromBufferAttribute(b,k),I[U+q+0]=s.x,I[U+q+1]=s.y,I[U+q+2]=s.z,I[U+q+3]=0),v===!0&&(s.fromBufferAttribute(G,k),I[U+q+4]=s.x,I[U+q+5]=s.y,I[U+q+6]=s.z,I[U+q+7]=0),_===!0&&(s.fromBufferAttribute(W,k),I[U+q+8]=s.x,I[U+q+9]=s.y,I[U+q+10]=s.z,I[U+q+11]=W.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new xt(S,F)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let v=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Yr=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h=Ki){if(h!==Ki&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=wi),n===void 0&&h===os&&(n=rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xh=new Ke,Kc=new Yr(1,1),qh=new Br,Yh=new al,$h=new Wr,Qc=[],jc=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xo(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Ne(e,n)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Ne(e,n)}}function Gm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Ne(e,n)}}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kc.compareFunction=kh,r=Kc):r=Xh,e.setTexture2D(t||r,s)}function jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yh,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qh,s)}function n0(i){switch(i){case 5126:return Om;case 35664:return zm;case 35665:return Bm;case 35666:return km;case 35674:return Vm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return $m;case 36294:return Zm;case 36295:return Jm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function r0(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function a0(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l0(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function c0(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h0(i,t){i.uniform1iv(this.addr,t)}function u0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function d0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function v0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xh,r[o])}function _0(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yh,r[o])}function y0(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function M0(i,t,e){let n=this.cache,s=t.length,r=xo(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qh,r[o])}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}var hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}},ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},pa=/(\w+)(\])?(\[|\.)?/g;function ih(i,t){i.seq.push(t),i.map[t.id]=t}function b0(i,t,e){let n=i.name,s=n.length;for(pa.lastIndex=0;;){let r=pa.exec(n),o=pa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ih(e,c===void 0?new hl(a,i,t):new ul(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new fl(a),ih(e,f)),e=f}}}var ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);b0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function sh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var w0=37297,A0=0;function E0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function T0(i){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(i),n;switch(t===e?n="":t===Fr&&e===Nr?n="LinearDisplayP3ToLinearSRGB":t===Nr&&e===Fr&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case vo:return[n,"LinearTransferOETF"];case ln:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(t),o)}else return s}function C0(i,t){let e=T0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function R0(i,t){let e;switch(t){case Gl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="Cineon";break;case ks:e="ACESFilmic";break;case ql:e="AgX";break;case Yl:e="Neutral";break;case rf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vr=new D;function P0(){me.getLuminanceCoefficients(vr);let i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function L0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function oh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(i){return i.replace(D0,F0)}var N0=new Map;function F0(i,t){let e=le[t];if(e===void 0){let n=N0.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dl(e)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(O0,z0)}function z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function H0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case sf:t="ENVMAP_BLENDING_ADD";break}return t}function G0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=B0(e),c=k0(e),h=V0(e),f=H0(e),d=G0(e),u=I0(e),v=L0(r),_=s.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ts).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(p=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?le.tonemapping_pars_fragment:"",e.toneMapping!==ei?R0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,C0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=dl(o),o=oh(o,e),o=ah(o,e),a=dl(a),a=oh(a,e),a=ah(a,e),o=lh(o),a=lh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=y+p+o,S=y+m+a,F=sh(s,s.VERTEX_SHADER,x),I=sh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,F),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(b){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),W=s.getShaderInfoLog(F).trim(),U=s.getShaderInfoLog(I).trim(),k=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,I);else{let st=rh(s,F,"vertex"),K=rh(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+st+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||U==="")&&(q=!1);q&&(b.diagnostics={runnable:k,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(F),s.deleteShader(I),O=new ji(s,_),N=U0(s,_)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(_,w0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=I,this}var X0=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ml(t),e.set(t,n)),n}},ml=class{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}};function q0(i,t,e,n,s,r,o){let a=new kr,l=new pl,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,u=s.vertexTextures,v=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,b,G,W,U){let k=W.fog,q=U.geometry,st=g.isMeshStandardMaterial?W.environment:null,K=(g.isMeshStandardMaterial?e:t).get(g.envMap||st),ft=K&&K.mapping===go?K.image.height:null,ht=_[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));let ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Vt=ot!==void 0?ot.length:0,Ht=0;q.morphAttributes.position!==void 0&&(Ht=1),q.morphAttributes.normal!==void 0&&(Ht=2),q.morphAttributes.color!==void 0&&(Ht=3);let z,$,at,dt;if(ht){let et=Pn[ht];z=et.vertexShader,$=et.fragmentShader}else z=g.vertexShader,$=g.fragmentShader,l.update(g),at=l.getVertexShaderID(g),dt=l.getFragmentShaderID(g);let bt=i.getRenderTarget(),Ft=U.isInstancedMesh===!0,Yt=U.isBatchedMesh===!0,ee=!!g.map,lt=!!g.matcap,C=!!K,wt=!!g.aoMap,mt=!!g.lightMap,Z=!!g.bumpMap,_t=!!g.normalMap,At=!!g.displacementMap,Tt=!!g.emissiveMap,A=!!g.metalnessMap,M=!!g.roughnessMap,J=g.anisotropy>0,ct=g.clearcoat>0,pt=g.dispersion>0,ut=g.iridescence>0,kt=g.sheen>0,yt=g.transmission>0,Ut=J&&!!g.anisotropyMap,ie=ct&&!!g.clearcoatMap,gt=ct&&!!g.clearcoatNormalMap,Ct=ct&&!!g.clearcoatRoughnessMap,$t=ut&&!!g.iridescenceMap,Xt=ut&&!!g.iridescenceThicknessMap,zt=kt&&!!g.sheenColorMap,se=kt&&!!g.sheenRoughnessMap,ne=!!g.specularMap,ge=!!g.specularColorMap,H=!!g.specularIntensityMap,Ot=yt&&!!g.transmissionMap,it=yt&&!!g.thicknessMap,T=!!g.gradientMap,R=!!g.alphaMap,E=g.alphaTest>0,L=!!g.alphaHash,V=!!g.extensions,Y=ei;g.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Y=i.toneMapping);let j={shaderID:ht,shaderType:g.type,shaderName:g.name,vertexShader:z,fragmentShader:$,defines:g.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Yt,batchingColor:Yt&&U._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&U.instanceColor!==null,instancingMorph:Ft&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ci,alphaToCoverage:!!g.alphaToCoverage,map:ee,matcap:lt,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:ft,aoMap:wt,lightMap:mt,bumpMap:Z,normalMap:_t,displacementMap:u&&At,emissiveMap:Tt,normalMapObjectSpace:_t&&g.normalMapType===hf,normalMapTangentSpace:_t&&g.normalMapType===cf,metalnessMap:A,roughnessMap:M,anisotropy:J,anisotropyMap:Ut,clearcoat:ct,clearcoatMap:ie,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ct,dispersion:pt,iridescence:ut,iridescenceMap:$t,iridescenceThicknessMap:Xt,sheen:kt,sheenColorMap:zt,sheenRoughnessMap:se,specularMap:ne,specularColorMap:ge,specularIntensityMap:H,transmission:yt,transmissionMap:Ot,thicknessMap:it,gradientMap:T,opaque:g.transparent===!1&&g.blending===Ji&&g.alphaToCoverage===!1,alphaMap:R,alphaTest:E,alphaHash:L,combine:g.combine,mapUv:ee&&p(g.map.channel),aoMapUv:wt&&p(g.aoMap.channel),lightMapUv:mt&&p(g.lightMap.channel),bumpMapUv:Z&&p(g.bumpMap.channel),normalMapUv:_t&&p(g.normalMap.channel),displacementMapUv:At&&p(g.displacementMap.channel),emissiveMapUv:Tt&&p(g.emissiveMap.channel),metalnessMapUv:A&&p(g.metalnessMap.channel),roughnessMapUv:M&&p(g.roughnessMap.channel),anisotropyMapUv:Ut&&p(g.anisotropyMap.channel),clearcoatMapUv:ie&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:se&&p(g.sheenRoughnessMap.channel),specularMapUv:ne&&p(g.specularMap.channel),specularColorMapUv:ge&&p(g.specularColorMap.channel),specularIntensityMapUv:H&&p(g.specularIntensityMap.channel),transmissionMapUv:Ot&&p(g.transmissionMap.channel),thicknessMapUv:it&&p(g.thicknessMap.channel),alphaMapUv:R&&p(g.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(_t||J),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ee||R),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:ee&&g.map.isVideoTexture===!0&&me.getTransfer(g.map.colorSpace)===Me,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===cn,flipSided:g.side===Xe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:V&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&g.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function y(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let G in g.defines)b.push(G),b.push(g.defines[G]);return g.isRawShaderMaterial===!1&&(x(b,g),S(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function x(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function S(g,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),g.push(a.mask)}function F(g){let b=_[g.type],G;if(b){let W=Pn[b];G=hi.clone(W.uniforms)}else G=g.uniforms;return G}function I(g,b){let G;for(let W=0,U=h.length;W<U;W++){let k=h[W];if(k.cacheKey===b){G=k,++G.usedTimes;break}}return G===void 0&&(G=new W0(i,b,g,r),h.push(G)),G}function P(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),g.destroy()}}function O(g){l.remove(g)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:F,acquireProgram:I,releaseProgram:P,releaseShaderCache:O,programs:h,dispose:N}}function Y0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,u,v,_,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,d,u,v,_,p){let m=o(f,d,u,v,_,p);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):e.push(m)}function l(f,d,u,v,_,p){let m=o(f,d,u,v,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||$0),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Z0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new uh,i.set(n,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function J0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Lt};break;case"SpotLight":e={position:new D,direction:new D,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Q0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new J0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new _e,o=new _e;function a(c){let h=0,f=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,v=0,_=0,p=0,m=0,y=0,x=0,S=0,F=0,I=0,P=0;c.sort(j0);for(let N=0,g=c.length;N<g;N++){let b=c[N],G=b.color,W=b.intensity,U=b.distance,k=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=G.r*W,f+=G.g*W,d+=G.b*W;else if(b.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(b.sh.coefficients[q],W);P++}else if(b.isDirectionalLight){let q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let st=b.shadow,K=e.get(b);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.directionalShadow[u]=K,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=b.shadow.matrix,y++}n.directional[u]=q,u++}else if(b.isSpotLight){let q=t.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(G).multiplyScalar(W),q.distance=U,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,n.spot[_]=q;let st=b.shadow;if(b.map&&(n.spotLightMap[F]=b.map,F++,st.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[_]=st.matrix,b.castShadow){let K=e.get(b);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=k,S++}_++}else if(b.isRectAreaLight){let q=t.get(b);q.color.copy(G).multiplyScalar(W),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=q,p++}else if(b.isPointLight){let q=t.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){let st=b.shadow,K=e.get(b);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,n.pointShadow[v]=K,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=b.shadow.matrix,x++}n.point[v]=q,v++}else if(b.isHemisphereLight){let q=t.get(b);q.skyColor.copy(b.color).multiplyScalar(W),q.groundColor.copy(b.groundColor).multiplyScalar(W),n.hemi[m]=q,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==u||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==m||O.numDirectionalShadows!==y||O.numPointShadows!==x||O.numSpotShadows!==S||O.numSpotMaps!==F||O.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+F-I,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,O.directionalLength=u,O.pointLength=v,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=m,O.numDirectionalShadows=y,O.numPointShadows=x,O.numSpotShadows=S,O.numSpotMaps=F,O.numLightProbes=P,n.version=Q0++)}function l(c,h){let f=0,d=0,u=0,v=0,_=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(x.isSpotLight){let S=n.spot[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function fh(i){let t=new tg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new fh(i),t.set(s,[a])):r>=o.length?(a=new fh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var gl=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vl=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function sg(i,t,e){let n=new Xr,s=new xt,r=new xt,o=new Ae,a=new gl({depthPacking:lf}),l=new vl,c={},h=e.maxTextureSize,f={[ii]:Xe,[Xe]:ii,[cn]:cn},d=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let v=new Se;v.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let m=this.type;this.render=function(I,P,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let N=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Un),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=m!==kn&&this.type===kn,U=m===kn&&this.type!==kn;for(let k=0,q=I.length;k<q;k++){let st=I[k],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ft=K.getFrameExtents();if(s.multiply(ft),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,K.mapSize.y=r.y)),K.map===null||W===!0||U===!0){let ot=this.type!==kn?{minFilter:Je,magFilter:Je}:{};K.map!==null&&K.map.dispose(),K.map=new Be(s.x,s.y,ot),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let ht=K.getViewportCount();for(let ot=0;ot<ht;ot++){let Vt=K.getViewport(ot);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),G.viewport(o),K.updateMatrices(st,ot),n=K.getFrustum(),S(P,O,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===kn&&y(K,O),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,g,b)};function y(I,P){let O=t.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Be(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(P,null,O,d,_,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(P,null,O,u,_,null)}function x(I,P,O,N){let g=null,b=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)g=b;else if(g=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let G=g.uuid,W=P.uuid,U=c[G];U===void 0&&(U={},c[G]=U);let k=U[W];k===void 0&&(k=g.clone(),U[W]=k,P.addEventListener("dispose",F)),g=k}if(g.visible=P.visible,g.wireframe=P.wireframe,N===kn?g.side=P.shadowSide!==null?P.shadowSide:P.side:g.side=P.shadowSide!==null?P.shadowSide:f[P.side],g.alphaMap=P.alphaMap,g.alphaTest=P.alphaTest,g.map=P.map,g.clipShadows=P.clipShadows,g.clippingPlanes=P.clippingPlanes,g.clipIntersection=P.clipIntersection,g.displacementMap=P.displacementMap,g.displacementScale=P.displacementScale,g.displacementBias=P.displacementBias,g.wireframeLinewidth=P.wireframeLinewidth,g.linewidth=P.linewidth,O.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let G=i.properties.get(g);G.light=O}return g}function S(I,P,O,N,g){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&g===kn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let W=t.update(I),U=I.material;if(Array.isArray(U)){let k=W.groups;for(let q=0,st=k.length;q<st;q++){let K=k[q],ft=U[K.materialIndex];if(ft&&ft.visible){let ht=x(I,ft,N,g);I.onBeforeShadow(i,I,P,O,W,ht,K),i.renderBufferDirect(O,null,W,ht,I,K),I.onAfterShadow(i,I,P,O,W,ht,K)}}}else if(U.visible){let k=x(I,U,N,g);I.onBeforeShadow(i,I,P,O,W,k,null),i.renderBufferDirect(O,null,W,k,I,null),I.onAfterShadow(i,I,P,O,W,k,null)}}let G=I.children;for(let W=0,U=G.length;W<U;W++)S(G[W],P,O,N,g)}function F(I){I.target.removeEventListener("dispose",F);for(let O in c){let N=c[O],g=I.target.uuid;g in N&&(N[g].dispose(),delete N[g])}}}var rg={[Ma]:Sa,[ba]:Ea,[wa]:Ta,[es]:Aa,[Sa]:Ma,[Ea]:ba,[Ta]:wa,[Aa]:es};function og(i){function t(){let H=!1,Ot=new Ae,it=null,T=new Ae(0,0,0,0);return{setMask:function(R){it!==R&&!H&&(i.colorMask(R,R,R,R),it=R)},setLocked:function(R){H=R},setClear:function(R,E,L,V,Y){Y===!0&&(R*=V,E*=V,L*=V),Ot.set(R,E,L,V),T.equals(Ot)===!1&&(i.clearColor(R,E,L,V),T.copy(Ot))},reset:function(){H=!1,it=null,T.set(-1,0,0,0)}}}function e(){let H=!1,Ot=!1,it=null,T=null,R=null;return{setReversed:function(E){Ot=E},setTest:function(E){E?at(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(E){it!==E&&!H&&(i.depthMask(E),it=E)},setFunc:function(E){if(Ot&&(E=rg[E]),T!==E){switch(E){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}T=E}},setLocked:function(E){H=E},setClear:function(E){R!==E&&(i.clearDepth(E),R=E)},reset:function(){H=!1,it=null,T=null,R=null}}}function n(){let H=!1,Ot=null,it=null,T=null,R=null,E=null,L=null,V=null,Y=null;return{setTest:function(j){H||(j?at(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(j){Ot!==j&&!H&&(i.stencilMask(j),Ot=j)},setFunc:function(j,et,rt){(it!==j||T!==et||R!==rt)&&(i.stencilFunc(j,et,rt),it=j,T=et,R=rt)},setOp:function(j,et,rt){(E!==j||L!==et||V!==rt)&&(i.stencilOp(j,et,rt),E=j,L=et,V=rt)},setLocked:function(j){H=j},setClear:function(j){Y!==j&&(i.clearStencil(j),Y=j)},reset:function(){H=!1,Ot=null,it=null,T=null,R=null,E=null,L=null,V=null,Y=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,d=[],u=null,v=!1,_=null,p=null,m=null,y=null,x=null,S=null,F=null,I=new Lt(0,0,0),P=0,O=!1,N=null,g=null,b=null,G=null,W=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,q=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(st)[1]),k=q>=1):st.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),k=q>=2);let K=null,ft={},ht=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Vt=new Ae().fromArray(ht),Ht=new Ae().fromArray(ot);function z(H,Ot,it,T){let R=new Uint8Array(4),E=i.createTexture();i.bindTexture(H,E),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let L=0;L<it;L++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,T,0,i.RGBA,i.UNSIGNED_BYTE,R):i.texImage2D(Ot+L,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,R);return E}let $={};$[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(es),mt(!1),Z(_c),at(i.CULL_FACE),C(Un);function at(H){c[H]!==!0&&(i.enable(H),c[H]=!0)}function dt(H){c[H]!==!1&&(i.disable(H),c[H]=!1)}function bt(H,Ot){return h[H]!==Ot?(i.bindFramebuffer(H,Ot),h[H]=Ot,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ot),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ft(H,Ot){let it=d,T=!1;if(H){it=f.get(Ot),it===void 0&&(it=[],f.set(Ot,it));let R=H.textures;if(it.length!==R.length||it[0]!==i.COLOR_ATTACHMENT0){for(let E=0,L=R.length;E<L;E++)it[E]=i.COLOR_ATTACHMENT0+E;it.length=R.length,T=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,T=!0);T&&i.drawBuffers(it)}function Yt(H){return u!==H?(i.useProgram(H),u=H,!0):!1}let ee={[Mi]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};ee[Vu]=i.MIN,ee[Hu]=i.MAX;let lt={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function C(H,Ot,it,T,R,E,L,V,Y,j){if(H===Un){v===!0&&(dt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),H!==zu){if(H!==_||j!==O){if((p!==Mi||x!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,x=Mi),j)switch(H){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,y=null,S=null,F=null,I.set(0,0,0),P=0,_=H,O=j}return}R=R||Ot,E=E||it,L=L||T,(Ot!==p||R!==x)&&(i.blendEquationSeparate(ee[Ot],ee[R]),p=Ot,x=R),(it!==m||T!==y||E!==S||L!==F)&&(i.blendFuncSeparate(lt[it],lt[T],lt[E],lt[L]),m=it,y=T,S=E,F=L),(V.equals(I)===!1||Y!==P)&&(i.blendColor(V.r,V.g,V.b,Y),I.copy(V),P=Y),_=H,O=!1}function wt(H,Ot){H.side===cn?dt(i.CULL_FACE):at(i.CULL_FACE);let it=H.side===Xe;Ot&&(it=!it),mt(it),H.blending===Ji&&H.transparent===!1?C(Un):C(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);let T=H.stencilWrite;o.setTest(T),T&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),At(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(H){N!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),N=H)}function Z(H){H!==Nu?(at(i.CULL_FACE),H!==g&&(H===_c?i.cullFace(i.BACK):H===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),g=H}function _t(H){H!==b&&(k&&i.lineWidth(H),b=H)}function At(H,Ot,it){H?(at(i.POLYGON_OFFSET_FILL),(G!==Ot||W!==it)&&(i.polygonOffset(Ot,it),G=Ot,W=it)):dt(i.POLYGON_OFFSET_FILL)}function Tt(H){H?at(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function A(H){H===void 0&&(H=i.TEXTURE0+U-1),K!==H&&(i.activeTexture(H),K=H)}function M(H,Ot,it){it===void 0&&(K===null?it=i.TEXTURE0+U-1:it=K);let T=ft[it];T===void 0&&(T={type:void 0,texture:void 0},ft[it]=T),(T.type!==H||T.texture!==Ot)&&(K!==it&&(i.activeTexture(it),K=it),i.bindTexture(H,Ot||$[H]),T.type=H,T.texture=Ot)}function J(){let H=ft[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(H){Vt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Vt.copy(H))}function zt(H){Ht.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function se(H,Ot){let it=l.get(Ot);it===void 0&&(it=new WeakMap,l.set(Ot,it));let T=it.get(H);T===void 0&&(T=i.getUniformBlockIndex(Ot,H.name),it.set(H,T))}function ne(H,Ot){let T=l.get(Ot).get(H);a.get(Ot)!==T&&(i.uniformBlockBinding(Ot,T,H.__bindingPointIndex),a.set(Ot,T))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,ft={},h={},f=new WeakMap,d=[],u=null,v=!1,_=null,p=null,m=null,y=null,x=null,S=null,F=null,I=new Lt(0,0,0),P=0,O=!1,N=null,g=null,b=null,G=null,W=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:at,disable:dt,bindFramebuffer:bt,drawBuffers:Ft,useProgram:Yt,setBlending:C,setMaterial:wt,setFlipSided:mt,setCullFace:Z,setLineWidth:_t,setPolygonOffset:At,setScissorTest:Tt,activeTexture:A,bindTexture:M,unbindTexture:J,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:Ct,texImage3D:$t,updateUBOMapping:se,uniformBlockBinding:ne,texStorage2D:ie,texStorage3D:gt,texSubImage2D:ut,texSubImage3D:kt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ut,scissor:Xt,viewport:zt,reset:ge}}function dh(i,t,e,n){let s=ag(n);switch(e){case Dh:return i*t;case Fh:return i*t;case Oh:return i*t*2;case Kl:return i*t/s.components*s.byteLength;case Ql:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case jl:return i*t*2/s.components*s.byteLength;case Nh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case tc:return i*t*4/s.components*s.byteLength;case Tr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(i){switch(i){case Wn:case Ih:return{byteLength:1,components:1};case Is:case Lh:case tn:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case wi:case $l:case Ln:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return u?new OffscreenCanvas(A,M):Ls("canvas")}function _(A,M,J){let ct=1,pt=Tt(A);if((pt.width>J||pt.height>J)&&(ct=J/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(ct*pt.width),kt=Math.floor(ct*pt.height);f===void 0&&(f=v(ut,kt));let yt=M?v(ut,kt):f;return yt.width=ut,yt.height=kt,yt.getContext("2d").drawImage(A,0,0,ut,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ut+"x"+kt+")."),yt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Je&&A.minFilter!==bn}function m(A){i.generateMipmap(A)}function y(A,M,J,ct,pt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut=M;if(M===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8)),M===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.R8UI),J===i.UNSIGNED_SHORT&&(ut=i.R16UI),J===i.UNSIGNED_INT&&(ut=i.R32UI),J===i.BYTE&&(ut=i.R8I),J===i.SHORT&&(ut=i.R16I),J===i.INT&&(ut=i.R32I)),M===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8)),M===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RG8UI),J===i.UNSIGNED_SHORT&&(ut=i.RG16UI),J===i.UNSIGNED_INT&&(ut=i.RG32UI),J===i.BYTE&&(ut=i.RG8I),J===i.SHORT&&(ut=i.RG16I),J===i.INT&&(ut=i.RG32I)),M===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),J===i.UNSIGNED_INT&&(ut=i.RGB32UI),J===i.BYTE&&(ut=i.RGB8I),J===i.SHORT&&(ut=i.RGB16I),J===i.INT&&(ut=i.RGB32I)),M===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),J===i.UNSIGNED_INT&&(ut=i.RGBA32UI),J===i.BYTE&&(ut=i.RGBA8I),J===i.SHORT&&(ut=i.RGBA16I),J===i.INT&&(ut=i.RGBA32I)),M===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),M===i.RGBA){let kt=pt?Dr:me.getTransfer(ct);J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=kt===Me?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(A,M){let J;return A?M===null||M===wi||M===rs?J=i.DEPTH24_STENCIL8:M===Ln?J=i.DEPTH32F_STENCIL8:M===Is&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===rs?J=i.DEPTH_COMPONENT24:M===Ln?J=i.DEPTH_COMPONENT32F:M===Is&&(J=i.DEPTH_COMPONENT16),J}function S(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function F(A){let M=A.target;M.removeEventListener("dispose",F),P(M),M.isVideoTexture&&h.delete(M)}function I(A){let M=A.target;M.removeEventListener("dispose",I),N(M)}function P(A){let M=n.get(A);if(M.__webglInit===void 0)return;let J=A.source,ct=d.get(J);if(ct){let pt=ct[M.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&O(A),Object.keys(ct).length===0&&d.delete(J)}n.remove(A)}function O(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let J=A.source,ct=d.get(J);delete ct[M.__cacheKey],o.memory.textures--}function N(A){let M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(M.__webglFramebuffer[ct]))for(let pt=0;pt<M.__webglFramebuffer[ct].length;pt++)i.deleteFramebuffer(M.__webglFramebuffer[ct][pt]);else i.deleteFramebuffer(M.__webglFramebuffer[ct]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ct])}else{if(Array.isArray(M.__webglFramebuffer))for(let ct=0;ct<M.__webglFramebuffer.length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[ct]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ct=0;ct<M.__webglColorRenderbuffer.length;ct++)M.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ct]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let J=A.textures;for(let ct=0,pt=J.length;ct<pt;ct++){let ut=n.get(J[ct]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(J[ct])}n.remove(A)}let g=0;function b(){g=0}function G(){let A=g;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),g+=1,A}function W(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function U(A,M){let J=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&J.__version!==A.version){let ct=A.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,A,M);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+M)}function k(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){Ht(J,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+M)}function q(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){Ht(J,A,M);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+M)}function st(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){z(J,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+M)}let K={[ss]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},ft={[Je]:i.NEAREST,[of]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},ht={[uf]:i.NEVER,[vf]:i.ALWAYS,[ff]:i.LESS,[kh]:i.LEQUAL,[df]:i.EQUAL,[gf]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function ot(A,M){if(M.type===Ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===zo||M.magFilter===Ks||M.magFilter===Hn||M.minFilter===bn||M.minFilter===zo||M.minFilter===Ks||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ft[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ft[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==Ks&&M.minFilter!==Hn||M.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(A,M){let J=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",F));let ct=M.source,pt=d.get(ct);pt===void 0&&(pt={},d.set(ct,pt));let ut=W(M);if(ut!==A.__cacheKey){pt[ut]===void 0&&(pt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pt[ut].usedTimes++;let kt=pt[A.__cacheKey];kt!==void 0&&(pt[A.__cacheKey].usedTimes--,kt.usedTimes===0&&O(M)),A.__cacheKey=ut,A.__webglTexture=pt[ut].texture}return J}function Ht(A,M,J){let ct=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=i.TEXTURE_3D);let pt=Vt(A,M),ut=M.source;e.bindTexture(ct,A.__webglTexture,i.TEXTURE0+J);let kt=n.get(ut);if(ut.version!==kt.__version||pt===!0){e.activeTexture(i.TEXTURE0+J);let yt=me.getPrimaries(me.workingColorSpace),Ut=M.colorSpace===In?null:me.getPrimaries(M.colorSpace),ie=M.colorSpace===In||yt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let gt=_(M.image,!1,s.maxTextureSize);gt=At(M,gt);let Ct=r.convert(M.format,M.colorSpace),$t=r.convert(M.type),Xt=y(M.internalFormat,Ct,$t,M.colorSpace,M.isVideoTexture);ot(ct,M);let zt,se=M.mipmaps,ne=M.isVideoTexture!==!0,ge=kt.__version===void 0||pt===!0,H=ut.dataReady,Ot=S(M,gt);if(M.isDepthTexture)Xt=x(M.format===os,M.type),ge&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Xt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,gt.width,gt.height,0,Ct,$t,null));else if(M.isDataTexture)if(se.length>0){ne&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,Xt,se[0].width,se[0].height);for(let it=0,T=se.length;it<T;it++)zt=se[it],ne?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Ct,$t,zt.data):e.texImage2D(i.TEXTURE_2D,it,Xt,zt.width,zt.height,0,Ct,$t,zt.data);M.generateMipmaps=!1}else ne?(ge&&e.texStorage2D(i.TEXTURE_2D,Ot,Xt,gt.width,gt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ct,$t,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,gt.width,gt.height,0,Ct,$t,gt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,Xt,se[0].width,se[0].height,gt.depth);for(let it=0,T=se.length;it<T;it++)if(zt=se[it],M.format!==wn)if(Ct!==null)if(ne){if(H)if(M.layerUpdates.size>0){let R=dh(zt.width,zt.height,M.format,M.type);for(let E of M.layerUpdates){let L=zt.data.subarray(E*R/zt.data.BYTES_PER_ELEMENT,(E+1)*R/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,E,zt.width,zt.height,1,Ct,L,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,zt.width,zt.height,gt.depth,Ct,zt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Xt,zt.width,zt.height,gt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,zt.width,zt.height,gt.depth,Ct,$t,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Xt,zt.width,zt.height,gt.depth,0,Ct,$t,zt.data)}else{ne&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,Xt,se[0].width,se[0].height);for(let it=0,T=se.length;it<T;it++)zt=se[it],M.format!==wn?Ct!==null?ne?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Ct,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Xt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,zt.width,zt.height,Ct,$t,zt.data):e.texImage2D(i.TEXTURE_2D,it,Xt,zt.width,zt.height,0,Ct,$t,zt.data)}else if(M.isDataArrayTexture)if(ne){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,Xt,gt.width,gt.height,gt.depth),H)if(M.layerUpdates.size>0){let it=dh(gt.width,gt.height,M.format,M.type);for(let T of M.layerUpdates){let R=gt.data.subarray(T*it/gt.data.BYTES_PER_ELEMENT,(T+1)*it/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,T,gt.width,gt.height,1,Ct,$t,R)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ct,$t,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,gt.width,gt.height,gt.depth,0,Ct,$t,gt.data);else if(M.isData3DTexture)ne?(ge&&e.texStorage3D(i.TEXTURE_3D,Ot,Xt,gt.width,gt.height,gt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ct,$t,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,gt.width,gt.height,gt.depth,0,Ct,$t,gt.data);else if(M.isFramebufferTexture){if(ge)if(ne)e.texStorage2D(i.TEXTURE_2D,Ot,Xt,gt.width,gt.height);else{let it=gt.width,T=gt.height;for(let R=0;R<Ot;R++)e.texImage2D(i.TEXTURE_2D,R,Xt,it,T,0,Ct,$t,null),it>>=1,T>>=1}}else if(se.length>0){if(ne&&ge){let it=Tt(se[0]);e.texStorage2D(i.TEXTURE_2D,Ot,Xt,it.width,it.height)}for(let it=0,T=se.length;it<T;it++)zt=se[it],ne?H&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Ct,$t,zt):e.texImage2D(i.TEXTURE_2D,it,Xt,Ct,$t,zt);M.generateMipmaps=!1}else if(ne){if(ge){let it=Tt(gt);e.texStorage2D(i.TEXTURE_2D,Ot,Xt,it.width,it.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,$t,gt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Ct,$t,gt);p(M)&&m(ct),kt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function z(A,M,J){if(M.image.length!==6)return;let ct=Vt(A,M),pt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+J);let ut=n.get(pt);if(pt.version!==ut.__version||ct===!0){e.activeTexture(i.TEXTURE0+J);let kt=me.getPrimaries(me.workingColorSpace),yt=M.colorSpace===In?null:me.getPrimaries(M.colorSpace),Ut=M.colorSpace===In||kt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ie=M.isCompressedTexture||M.image[0].isCompressedTexture,gt=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let T=0;T<6;T++)!ie&&!gt?Ct[T]=_(M.image[T],!0,s.maxCubemapSize):Ct[T]=gt?M.image[T].image:M.image[T],Ct[T]=At(M,Ct[T]);let $t=Ct[0],Xt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type),se=y(M.internalFormat,Xt,zt,M.colorSpace),ne=M.isVideoTexture!==!0,ge=ut.__version===void 0||ct===!0,H=pt.dataReady,Ot=S(M,$t);ot(i.TEXTURE_CUBE_MAP,M);let it;if(ie){ne&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,se,$t.width,$t.height);for(let T=0;T<6;T++){it=Ct[T].mipmaps;for(let R=0;R<it.length;R++){let E=it[R];M.format!==wn?Xt!==null?ne?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R,0,0,E.width,E.height,Xt,E.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R,se,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R,0,0,E.width,E.height,Xt,zt,E.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R,se,E.width,E.height,0,Xt,zt,E.data)}}}else{if(it=M.mipmaps,ne&&ge){it.length>0&&Ot++;let T=Tt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,se,T.width,T.height)}for(let T=0;T<6;T++)if(gt){ne?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Ct[T].width,Ct[T].height,Xt,zt,Ct[T].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,se,Ct[T].width,Ct[T].height,0,Xt,zt,Ct[T].data);for(let R=0;R<it.length;R++){let L=it[R].image[T].image;ne?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R+1,0,0,L.width,L.height,Xt,zt,L.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R+1,se,L.width,L.height,0,Xt,zt,L.data)}}else{ne?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Xt,zt,Ct[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,se,Xt,zt,Ct[T]);for(let R=0;R<it.length;R++){let E=it[R];ne?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R+1,0,0,Xt,zt,E.image[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,R+1,se,Xt,zt,E.image[T])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),ut.__version=pt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,J,ct,pt,ut){let kt=r.convert(J.format,J.colorSpace),yt=r.convert(J.type),Ut=y(J.internalFormat,kt,yt,J.colorSpace);if(!n.get(M).__hasExternalTextures){let gt=Math.max(1,M.width>>ut),Ct=Math.max(1,M.height>>ut);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ut,Ut,gt,Ct,M.depth,0,kt,yt,null):e.texImage2D(pt,ut,Ut,gt,Ct,0,kt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Z(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,n.get(J).__webglTexture,0,mt(M)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,n.get(J).__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,M,J){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let ct=M.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,ut=x(M.stencilBuffer,pt),kt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=mt(M);Z(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ut,M.width,M.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,A)}else{let ct=M.textures;for(let pt=0;pt<ct.length;pt++){let ut=ct[pt],kt=r.convert(ut.format,ut.colorSpace),yt=r.convert(ut.type),Ut=y(ut.internalFormat,kt,yt,ut.colorSpace),ie=mt(M);J&&Z(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Ut,M.width,M.height):Z(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);let ct=n.get(M.depthTexture).__webglTexture,pt=mt(M);if(M.depthTexture.format===Ki)Z(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(M.depthTexture.format===os)Z(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function bt(A){let M=n.get(A),J=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let ct=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ct){let pt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),M.__depthDisposeCallback=pt}M.__boundDepthTexture=ct}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");dt(M.__webglFramebuffer,A)}else if(J){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]===void 0)M.__webglDepthbuffer[ct]=i.createRenderbuffer(),at(M.__webglDepthbuffer[ct],A,!1);else{let pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),at(M.__webglDepthbuffer,A,!1);else{let ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(A,M,J){let ct=n.get(A);M!==void 0&&$(ct.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&bt(A)}function Yt(A){let M=A.texture,J=n.get(A),ct=n.get(M);A.addEventListener("dispose",I);let pt=A.textures,ut=A.isWebGLCubeRenderTarget===!0,kt=pt.length>1;if(kt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=M.version,o.memory.textures++),ut){J.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[yt]=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)J.__webglFramebuffer[yt][Ut]=i.createFramebuffer()}else J.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let yt=0;yt<M.mipmaps.length;yt++)J.__webglFramebuffer[yt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(kt)for(let yt=0,Ut=pt.length;yt<Ut;yt++){let ie=n.get(pt[yt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Z(A)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let yt=0;yt<pt.length;yt++){let Ut=pt[yt];J.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[yt]);let ie=r.convert(Ut.format,Ut.colorSpace),gt=r.convert(Ut.type),Ct=y(Ut.internalFormat,ie,gt,Ut.colorSpace,A.isXRRenderTarget===!0),$t=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,J.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),at(J.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),ot(i.TEXTURE_CUBE_MAP,M);for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)$(J.__webglFramebuffer[yt][Ut],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut);else $(J.__webglFramebuffer[yt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let yt=0,Ut=pt.length;yt<Ut;yt++){let ie=pt[yt],gt=n.get(ie);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),ot(i.TEXTURE_2D,ie),$(J.__webglFramebuffer,A,ie,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),p(ie)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ct.__webglTexture),ot(yt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)$(J.__webglFramebuffer[Ut],A,M,i.COLOR_ATTACHMENT0,yt,Ut);else $(J.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,yt,0);p(M)&&m(yt),e.unbindTexture()}A.depthBuffer&&bt(A)}function ee(A){let M=A.textures;for(let J=0,ct=M.length;J<ct;J++){let pt=M[J];if(p(pt)){let ut=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,kt=n.get(pt).__webglTexture;e.bindTexture(ut,kt),m(ut),e.unbindTexture()}}}let lt=[],C=[];function wt(A){if(A.samples>0){if(Z(A)===!1){let M=A.textures,J=A.width,ct=A.height,pt=i.COLOR_BUFFER_BIT,ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(A),yt=M.length>1;if(yt)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ut]);let ie=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,J,ct,0,0,J,ct,pt,i.NEAREST),l===!0&&(lt.length=0,C.length=0,lt.push(i.COLOR_ATTACHMENT0+Ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(lt.push(ut),C.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Ut]);let ie=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function Z(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function At(A,M){let J=A.colorSpace,ct=A.format,pt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||J!==ci&&J!==In&&(me.getTransfer(J)===Me?(ct!==wn||pt!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),M}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=st,this.rebindTextures=Ft,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Z}function cg(i,t){function e(n,s=In){let r,o=me.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Lh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===wn)return i.RGBA;if(n===Fh)return i.LUMINANCE;if(n===Oh)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===Tr||n===Cr||n===Rr||n===Pr)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===La||n===Ua||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Fa)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ba||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===Qa||n===ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},An=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,v=.005;c.inputState.pinching&&d>u+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ee({vertexShader:ug,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,v=null,_=new _l,p=e.getContextAttributes(),m=null,y=null,x=[],S=[],F=new xt,I=null,P=new We;P.layers.enable(1),P.viewport=new Ae;let O=new We;O.layers.enable(2),O.viewport=new Ae;let N=[P,O],g=new xl;g.layers.enable(1),g.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=x[z];return $===void 0&&($=new Cs,x[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=x[z];return $===void 0&&($=new Cs,x[z]=$),$.getGripSpace()},this.getHand=function(z){let $=x[z];return $===void 0&&($=new Cs,x[z]=$),$.getHandSpace()};function W(z){let $=S.indexOf(z.inputSource);if($===-1)return;let at=x[$];at!==void 0&&(at.update(z.inputSource,z.frame,c||o),at.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let z=0;z<x.length;z++){let $=S[z];$!==null&&(S[z]=null,x[z].disconnect($))}b=null,G=null,_.reset(),t.setRenderTarget(m),u=null,d=null,f=null,s=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Be(u.framebufferWidth,u.framebufferHeight,{format:wn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,at=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=p.stencil?os:Ki,at=p.stencil?rs:wi);let bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Be(d.textureWidth,d.textureHeight,{format:wn,type:Wn,depthTexture:new Yr(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(z){for(let $=0;$<z.removed.length;$++){let at=z.removed[$],dt=S.indexOf(at);dt>=0&&(S[dt]=null,x[dt].disconnect(at))}for(let $=0;$<z.added.length;$++){let at=z.added[$],dt=S.indexOf(at);if(dt===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=S.length){S.push(at),dt=Ft;break}else if(S[Ft]===null){S[Ft]=at,dt=Ft;break}if(dt===-1)break}let bt=x[dt];bt&&bt.connect(at)}}let q=new D,st=new D;function K(z,$,at){q.setFromMatrixPosition($.matrixWorld),st.setFromMatrixPosition(at.matrixWorld);let dt=q.distanceTo(st),bt=$.projectionMatrix.elements,Ft=at.projectionMatrix.elements,Yt=bt[14]/(bt[10]-1),ee=bt[14]/(bt[10]+1),lt=(bt[9]+1)/bt[5],C=(bt[9]-1)/bt[5],wt=(bt[8]-1)/bt[0],mt=(Ft[8]+1)/Ft[0],Z=Yt*wt,_t=Yt*mt,At=dt/(-wt+mt),Tt=At*-wt;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Tt),z.translateZ(At),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),bt[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let A=Yt+At,M=ee+At,J=Z-Tt,ct=_t+(dt-Tt),pt=lt*ee/M*A,ut=C*ee/M*A;z.projectionMatrix.makePerspective(J,ct,pt,ut,A,M),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ft(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let $=z.near,at=z.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(at=_.depthFar)),g.near=O.near=P.near=$,g.far=O.far=P.far=at,(b!==g.near||G!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,G=g.far);let dt=z.parent,bt=g.cameras;ft(g,dt);for(let Ft=0;Ft<bt.length;Ft++)ft(bt[Ft],dt);bt.length===2?K(g,P,O):g.projectionMatrix.copy(P.projectionMatrix),ht(z,g,dt)};function ht(z,$,at){at===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(at.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=sl*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(g)};let ot=null;function Vt(z,$){if(h=$.getViewerPose(c||o),v=$,h!==null){let at=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let dt=!1;at.length!==g.cameras.length&&(g.cameras.length=0,dt=!0);for(let Ft=0;Ft<at.length;Ft++){let Yt=at[Ft],ee=null;if(u!==null)ee=u.getViewport(Yt);else{let C=f.getViewSubImage(d,Yt);ee=C.viewport,Ft===0&&(t.setRenderTargetTextures(y,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(y))}let lt=N[Ft];lt===void 0&&(lt=new We,lt.layers.enable(Ft),lt.viewport=new Ae,N[Ft]=lt),lt.matrix.fromArray(Yt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Yt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ft===0&&(g.matrix.copy(lt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),dt===!0&&g.cameras.push(lt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Ft=f.getDepthInformation(at[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let at=0;at<x.length;at++){let dt=S[at],bt=x[at];dt!==null&&bt!==void 0&&bt.update(dt,$,c||o)}ot&&ot(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}let Ht=new Wh;Ht.setAnimationLoop(Vt),this.setAnimationLoop=function(z){ot=z},this.dispose=function(){}}},_i=new Yn,dg=new _e;function pg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(p.envMap.value=x,_i.copy(S),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(_i)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=s[y.id];S===void 0&&(v(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",p));let F=x.program;n.updateUBOMapping(y,F);let I=t.render.frame;r[y.id]!==I&&(d(y),r[y.id]=I)}function h(y){let x=f();y.__bindingPointIndex=x;let S=i.createBuffer(),F=y.__size,I=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],S=y.uniforms,F=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let I=0,P=S.length;I<P;I++){let O=Array.isArray(S[I])?S[I]:[S[I]];for(let N=0,g=O.length;N<g;N++){let b=O[N];if(u(b,I,N,F)===!0){let G=b.__offset,W=Array.isArray(b.value)?b.value:[b.value],U=0;for(let k=0;k<W.length;k++){let q=W[k],st=_(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+U,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,U),U+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,x,S,F){let I=y.value,P=x+"_"+S;if(F[P]===void 0)return typeof I=="number"||typeof I=="boolean"?F[P]=I:F[P]=I.clone(),!0;{let O=F[P];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return F[P]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function v(y){let x=y.uniforms,S=0,F=16;for(let P=0,O=x.length;P<O;P++){let N=Array.isArray(x[P])?x[P]:[x[P]];for(let g=0,b=N.length;g<b;g++){let G=N[g],W=Array.isArray(G.value)?G.value:[G.value];for(let U=0,k=W.length;U<k;U++){let q=W[U],st=_(q),K=S%F,ft=K%st.boundary,ht=K+ft;S+=ft,ht!==0&&F-ht<st.storage&&(S+=F-ht),G.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=st.storage}}}let I=S%F;return I>0&&(S+=F-I),y.__size=S,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var $r=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let u=new Uint32Array(4),v=new Int32Array(4),_=null,p=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=ei,this.toneMappingExposure=1;let x=this,S=!1,F=0,I=0,P=null,O=-1,N=null,g=new Ae,b=new Ae,G=null,W=new Lt(0),U=0,k=e.width,q=e.height,st=1,K=null,ft=null,ht=new Ae(0,0,k,q),ot=new Ae(0,0,k,q),Vt=!1,Ht=new Xr,z=!1,$=!1,at=new _e,dt=new _e,bt=new D,Ft=new Ae,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function lt(){return P===null?st:1}let C=n;function wt(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",T,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",E,!1),C===null){let B="webgl2";if(C=wt(B,w),C===null)throw wt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,Z,_t,At,Tt,A,M,J,ct,pt,ut,kt,yt,Ut,ie,gt,Ct,$t,Xt,zt,se,ne,ge,H;function Ot(){mt=new Im(C),mt.init(),ne=new cg(C,mt),Z=new Am(C,mt,t,ne),_t=new og(C),Z.reverseDepthBuffer&&_t.buffers.depth.setReversed(!0),At=new Dm(C),Tt=new Y0,A=new lg(C,mt,_t,Tt,Z,ne,At),M=new Tm(x),J=new Pm(x),ct=new Vf(C),ge=new bm(C,ct),pt=new Lm(C,ct,At,ge),ut=new Fm(C,pt,ct,At),Xt=new Nm(C,Z,A),gt=new Em(Tt),kt=new q0(x,M,J,mt,Z,ge,gt),yt=new pg(x,Tt),Ut=new Z0,ie=new eg(mt),$t=new Sm(x,M,J,_t,ut,d,l),Ct=new sg(x,ut,Z),H=new mg(C,At,Z,_t),zt=new wm(C,mt,At),se=new Um(C,mt,At),At.programs=kt.programs,x.capabilities=Z,x.extensions=mt,x.properties=Tt,x.renderLists=Ut,x.shadowMap=Ct,x.state=_t,x.info=At}Ot();let it=new yl(x,C);this.xr=it,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(k,q,!1))},this.getSize=function(w){return w.set(k,q)},this.setSize=function(w,B,Q=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,q=B,e.width=Math.floor(w*st),e.height=Math.floor(B*st),Q===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(k*st,q*st).floor()},this.setDrawingBufferSize=function(w,B,Q){k=w,q=B,st=Q,e.width=Math.floor(w*Q),e.height=Math.floor(B*Q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(g)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,B,Q,tt){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,B,Q,tt),_t.viewport(g.copy(ht).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(ot)},this.setScissor=function(w,B,Q,tt){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,B,Q,tt),_t.scissor(b.copy(ot).multiplyScalar(st).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){_t.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(w=!0,B=!0,Q=!0){let tt=0;if(w){let X=!1;if(P!==null){let vt=P.texture.format;X=vt===tc||vt===jl||vt===Ql}if(X){let vt=P.texture.type,Et=vt===Wn||vt===wi||vt===Is||vt===rs||vt===Zl||vt===Jl,Pt=$t.getClearColor(),It=$t.getClearAlpha(),Zt=Pt.r,Kt=Pt.g,Bt=Pt.b;Et?(u[0]=Zt,u[1]=Kt,u[2]=Bt,u[3]=It,C.clearBufferuiv(C.COLOR,0,u)):(v[0]=Zt,v[1]=Kt,v[2]=Bt,v[3]=It,C.clearBufferiv(C.COLOR,0,v))}else tt|=C.COLOR_BUFFER_BIT}B&&(tt|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(tt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",T,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",E,!1),Ut.dispose(),ie.dispose(),Tt.dispose(),M.dispose(),J.dispose(),ut.dispose(),ge.dispose(),H.dispose(),kt.dispose(),it.dispose(),it.removeEventListener("sessionstart",nt),it.removeEventListener("sessionend",Mt),St.stop()};function T(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=At.autoReset,B=Ct.enabled,Q=Ct.autoUpdate,tt=Ct.needsUpdate,X=Ct.type;Ot(),At.autoReset=w,Ct.enabled=B,Ct.autoUpdate=Q,Ct.needsUpdate=tt,Ct.type=X}function E(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function L(w){let B=w.target;B.removeEventListener("dispose",L),V(B)}function V(w){Y(w),Tt.remove(w)}function Y(w){let B=Tt.get(w).programs;B!==void 0&&(B.forEach(function(Q){kt.releaseProgram(Q)}),w.isShaderMaterial&&kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Q,tt,X,vt){B===null&&(B=Yt);let Et=X.isMesh&&X.matrixWorld.determinant()<0,Pt=te(w,B,Q,tt,X);_t.setMaterial(tt,Et);let It=Q.index,Zt=1;if(tt.wireframe===!0){if(It=pt.getWireframeAttribute(Q),It===void 0)return;Zt=2}let Kt=Q.drawRange,Bt=Q.attributes.position,fe=Kt.start*Zt,ve=(Kt.start+Kt.count)*Zt;vt!==null&&(fe=Math.max(fe,vt.start*Zt),ve=Math.min(ve,(vt.start+vt.count)*Zt)),It!==null?(fe=Math.max(fe,0),ve=Math.min(ve,It.count)):Bt!=null&&(fe=Math.max(fe,0),ve=Math.min(ve,Bt.count));let xe=ve-fe;if(xe<0||xe===1/0)return;ge.setup(X,tt,Pt,Q,It);let Ce,ae=zt;if(It!==null&&(Ce=ct.get(It),ae=se,ae.setIndex(Ce)),X.isMesh)tt.wireframe===!0?(_t.setLineWidth(tt.wireframeLinewidth*lt()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(X.isLine){let Gt=tt.linewidth;Gt===void 0&&(Gt=1),_t.setLineWidth(Gt*lt()),X.isLineSegments?ae.setMode(C.LINES):X.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else X.isPoints?ae.setMode(C.POINTS):X.isSprite&&ae.setMode(C.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ae.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Gt=X._multiDrawStarts,Re=X._multiDrawCounts,de=X._multiDrawCount,Oe=It?ct.get(It).bytesPerElement:1,Ue=Tt.get(tt).currentProgram.getUniforms();for(let rn=0;rn<de;rn++)Ue.setValue(C,"_gl_DrawID",rn),ae.render(Gt[rn]/Oe,Re[rn])}else if(X.isInstancedMesh)ae.renderInstances(fe,xe,X.count);else if(Q.isInstancedBufferGeometry){let Gt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Re=Math.min(Q.instanceCount,Gt);ae.renderInstances(fe,xe,Re)}else ae.render(fe,xe)};function j(w,B,Q){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,he(w,B,Q),w.side=ii,w.needsUpdate=!0,he(w,B,Q),w.side=cn):he(w,B,Q)}this.compile=function(w,B,Q=null){Q===null&&(Q=w),p=ie.get(Q),p.init(B),y.push(p),Q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==Q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let tt=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let vt=X.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let Pt=vt[Et];j(Pt,Q,X),tt.add(Pt)}else j(vt,Q,X),tt.add(vt)}),y.pop(),p=null,tt},this.compileAsync=function(w,B,Q=null){let tt=this.compile(w,B,Q);return new Promise(X=>{function vt(){if(tt.forEach(function(Et){Tt.get(Et).currentProgram.isReady()&&tt.delete(Et)}),tt.size===0){X(w);return}setTimeout(vt,10)}mt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let et=null;function rt(w){et&&et(w)}function nt(){St.stop()}function Mt(){St.start()}let St=new Wh;St.setAnimationLoop(rt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){et=w,it.setAnimationLoop(w),w===null?St.stop():St.start()},it.addEventListener("sessionstart",nt),it.addEventListener("sessionend",Mt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,P),p=ie.get(w,y.length),p.init(B),y.push(p),dt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ht.setFromProjectionMatrix(dt),$=this.localClippingEnabled,z=gt.init(this.clippingPlanes,$),_=Ut.get(w,m.length),_.init(),m.push(_),it.enabled===!0&&it.isPresenting===!0){let vt=x.xr.getDepthSensingMesh();vt!==null&&Rt(vt,B,-1/0,x.sortObjects)}Rt(w,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,ft),ee=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ee&&$t.addToRenderList(_,w),this.info.render.frame++,z===!0&&gt.beginShadows();let Q=p.state.shadowsArray;Ct.render(Q,w,B),z===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=_.opaque,X=_.transmissive;if(p.setupLights(),B.isArrayCamera){let vt=B.cameras;if(X.length>0)for(let Et=0,Pt=vt.length;Et<Pt;Et++){let It=vt[Et];Qt(tt,X,w,It)}ee&&$t.render(w);for(let Et=0,Pt=vt.length;Et<Pt;Et++){let It=vt[Et];qt(_,w,It,It.viewport)}}else X.length>0&&Qt(tt,X,w,B),ee&&$t.render(w),qt(_,w,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,B),ge.resetDefaultState(),O=-1,N=null,y.pop(),y.length>0?(p=y[y.length-1],z===!0&&gt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Rt(w,B,Q,tt){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ht.intersectsSprite(w)){tt&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);let Et=ut.update(w),Pt=w.material;Pt.visible&&_.push(w,Et,Pt,Q,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ht.intersectsObject(w))){let Et=ut.update(w),Pt=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ft.copy(Et.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let It=Et.groups;for(let Zt=0,Kt=It.length;Zt<Kt;Zt++){let Bt=It[Zt],fe=Pt[Bt.materialIndex];fe&&fe.visible&&_.push(w,Et,fe,Q,Ft.z,Bt)}}else Pt.visible&&_.push(w,Et,Pt,Q,Ft.z,null)}}let vt=w.children;for(let Et=0,Pt=vt.length;Et<Pt;Et++)Rt(vt[Et],B,Q,tt)}function qt(w,B,Q,tt){let X=w.opaque,vt=w.transmissive,Et=w.transparent;p.setupLightsView(Q),z===!0&&gt.setGlobalState(x.clippingPlanes,Q),tt&&_t.viewport(g.copy(tt)),X.length>0&&jt(X,B,Q),vt.length>0&&jt(vt,B,Q),Et.length>0&&jt(Et,B,Q),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Qt(w,B,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new Be(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?tn:Wn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let vt=p.state.transmissionRenderTarget[tt.id],Et=tt.viewport||g;vt.setSize(Et.z,Et.w);let Pt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(W),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),ee&&$t.render(Q);let It=x.toneMapping;x.toneMapping=ei;let Zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),z===!0&&gt.setGlobalState(x.clippingPlanes,tt),jt(w,Q,tt),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Bt=0,fe=B.length;Bt<fe;Bt++){let ve=B[Bt],xe=ve.object,Ce=ve.geometry,ae=ve.material,Gt=ve.group;if(ae.side===cn&&xe.layers.test(tt.layers)){let Re=ae.side;ae.side=Xe,ae.needsUpdate=!0,oe(xe,Q,tt,Ce,ae,Gt),ae.side=Re,ae.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt))}x.setRenderTarget(Pt),x.setClearColor(W,U),Zt!==void 0&&(tt.viewport=Zt),x.toneMapping=It}function jt(w,B,Q){let tt=B.isScene===!0?B.overrideMaterial:null;for(let X=0,vt=w.length;X<vt;X++){let Et=w[X],Pt=Et.object,It=Et.geometry,Zt=tt===null?Et.material:tt,Kt=Et.group;Pt.layers.test(Q.layers)&&oe(Pt,B,Q,It,Zt,Kt)}}function oe(w,B,Q,tt,X,vt){w.onBeforeRender(x,B,Q,tt,X,vt),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(x,B,Q,tt,w,vt),X.transparent===!0&&X.side===cn&&X.forceSinglePass===!1?(X.side=Xe,X.needsUpdate=!0,x.renderBufferDirect(Q,B,tt,X,w,vt),X.side=ii,X.needsUpdate=!0,x.renderBufferDirect(Q,B,tt,X,w,vt),X.side=cn):x.renderBufferDirect(Q,B,tt,X,w,vt),w.onAfterRender(x,B,Q,tt,X,vt)}function he(w,B,Q){B.isScene!==!0&&(B=Yt);let tt=Tt.get(w),X=p.state.lights,vt=p.state.shadowsArray,Et=X.state.version,Pt=kt.getParameters(w,X.state,vt,B,Q),It=kt.getProgramCacheKey(Pt),Zt=tt.programs;tt.environment=w.isMeshStandardMaterial?B.environment:null,tt.fog=B.fog,tt.envMap=(w.isMeshStandardMaterial?J:M).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",L),Zt=new Map,tt.programs=Zt);let Kt=Zt.get(It);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===Et)return Jt(w,Pt),Kt}else Pt.uniforms=kt.getUniforms(w),w.onBeforeCompile(Pt,x),Kt=kt.acquireProgram(Pt,It),Zt.set(It,Kt),tt.uniforms=Pt.uniforms;let Bt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=gt.uniform),Jt(w,Pt),tt.needsLights=ue(w),tt.lightsStateVersion=Et,tt.needsLights&&(Bt.ambientLightColor.value=X.state.ambient,Bt.lightProbe.value=X.state.probe,Bt.directionalLights.value=X.state.directional,Bt.directionalLightShadows.value=X.state.directionalShadow,Bt.spotLights.value=X.state.spot,Bt.spotLightShadows.value=X.state.spotShadow,Bt.rectAreaLights.value=X.state.rectArea,Bt.ltc_1.value=X.state.rectAreaLTC1,Bt.ltc_2.value=X.state.rectAreaLTC2,Bt.pointLights.value=X.state.point,Bt.pointLightShadows.value=X.state.pointShadow,Bt.hemisphereLights.value=X.state.hemi,Bt.directionalShadowMap.value=X.state.directionalShadowMap,Bt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Bt.spotShadowMap.value=X.state.spotShadowMap,Bt.spotLightMatrix.value=X.state.spotLightMatrix,Bt.spotLightMap.value=X.state.spotLightMap,Bt.pointShadowMap.value=X.state.pointShadowMap,Bt.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function Nt(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=ji.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Jt(w,B){let Q=Tt.get(w);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function te(w,B,Q,tt,X){B.isScene!==!0&&(B=Yt),A.resetTextureUnits();let vt=B.fog,Et=tt.isMeshStandardMaterial?B.environment:null,Pt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ci,It=(tt.isMeshStandardMaterial?J:M).get(tt.envMap||Et),Zt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Kt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Bt=!!Q.morphAttributes.position,fe=!!Q.morphAttributes.normal,ve=!!Q.morphAttributes.color,xe=ei;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=x.toneMapping);let Ce=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ae=Ce!==void 0?Ce.length:0,Gt=Tt.get(tt),Re=p.state.lights;if(z===!0&&($===!0||w!==N)){let fn=w===N&&tt.id===O;gt.setState(tt,w,fn)}let de=!1;tt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Re.state.version||Gt.outputColorSpace!==Pt||X.isBatchedMesh&&Gt.batching===!1||!X.isBatchedMesh&&Gt.batching===!0||X.isBatchedMesh&&Gt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Gt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Gt.instancing===!1||!X.isInstancedMesh&&Gt.instancing===!0||X.isSkinnedMesh&&Gt.skinning===!1||!X.isSkinnedMesh&&Gt.skinning===!0||X.isInstancedMesh&&Gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Gt.instancingMorph===!1&&X.morphTexture!==null||Gt.envMap!==It||tt.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==Kt||Gt.morphTargets!==Bt||Gt.morphNormals!==fe||Gt.morphColors!==ve||Gt.toneMapping!==xe||Gt.morphTargetsCount!==ae)&&(de=!0):(de=!0,Gt.__version=tt.version);let Oe=Gt.currentProgram;de===!0&&(Oe=he(tt,B,X));let Ue=!1,rn=!1,No=!1,Pe=Oe.getUniforms(),$n=Gt.uniforms;if(_t.useProgram(Oe.program)&&(Ue=!0,rn=!0,No=!0),tt.id!==O&&(O=tt.id,rn=!0),Ue||N!==w){Z.reverseDepthBuffer?(at.copy(w.projectionMatrix),Mf(at),Sf(at),Pe.setValue(C,"projectionMatrix",at)):Pe.setValue(C,"projectionMatrix",w.projectionMatrix),Pe.setValue(C,"viewMatrix",w.matrixWorldInverse);let fn=Pe.map.cameraPosition;fn!==void 0&&fn.setValue(C,bt.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&Pe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Pe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,rn=!0,No=!0)}if(X.isSkinnedMesh){Pe.setOptional(C,X,"bindMatrix"),Pe.setOptional(C,X,"bindMatrixInverse");let fn=X.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Pe.setValue(C,"boneTexture",fn.boneTexture,A))}X.isBatchedMesh&&(Pe.setOptional(C,X,"batchingTexture"),Pe.setValue(C,"batchingTexture",X._matricesTexture,A),Pe.setOptional(C,X,"batchingIdTexture"),Pe.setValue(C,"batchingIdTexture",X._indirectTexture,A),Pe.setOptional(C,X,"batchingColorTexture"),X._colorsTexture!==null&&Pe.setValue(C,"batchingColorTexture",X._colorsTexture,A));let Fo=Q.morphAttributes;if((Fo.position!==void 0||Fo.normal!==void 0||Fo.color!==void 0)&&Xt.update(X,Q,Oe),(rn||Gt.receiveShadow!==X.receiveShadow)&&(Gt.receiveShadow=X.receiveShadow,Pe.setValue(C,"receiveShadow",X.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&($n.envMap.value=It,$n.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&B.environment!==null&&($n.envMapIntensity.value=B.environmentIntensity),rn&&(Pe.setValue(C,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&Wt($n,No),vt&&tt.fog===!0&&yt.refreshFogUniforms($n,vt),yt.refreshMaterialUniforms($n,tt,st,q,p.state.transmissionRenderTarget[w.id]),ji.upload(C,Nt(Gt),$n,A)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ji.upload(C,Nt(Gt),$n,A),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Pe.setValue(C,"center",X.center),Pe.setValue(C,"modelViewMatrix",X.modelViewMatrix),Pe.setValue(C,"normalMatrix",X.normalMatrix),Pe.setValue(C,"modelMatrix",X.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let fn=tt.uniformsGroups;for(let Oo=0,Du=fn.length;Oo<Du;Oo++){let xc=fn[Oo];H.update(xc,Oe),H.bind(xc,Oe)}}return Oe}function Wt(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function ue(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,Q){Tt.get(w.texture).__webglTexture=B,Tt.get(w.depthTexture).__webglTexture=Q;let tt=Tt.get(w);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let Q=Tt.get(w);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Q=0){P=w,F=B,I=Q;let tt=!0,X=null,vt=!1,Et=!1;if(w){let It=Tt.get(w);if(It.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(C.FRAMEBUFFER,null),tt=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(It.__hasExternalTextures)A.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Bt=w.depthTexture;if(It.__boundDepthTexture!==Bt){if(Bt!==null&&Tt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Et=!0);let Kt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?X=Kt[B][Q]:X=Kt[B],vt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?X=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[Q]:X=Kt,g.copy(w.viewport),b.copy(w.scissor),G=w.scissorTest}else g.copy(ht).multiplyScalar(st).floor(),b.copy(ot).multiplyScalar(st).floor(),G=Vt;if(_t.bindFramebuffer(C.FRAMEBUFFER,X)&&tt&&_t.drawBuffers(w,X),_t.viewport(g),_t.scissor(b),_t.setScissorTest(G),vt){let It=Tt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,Q)}else if(Et){let It=Tt.get(w.texture),Zt=B||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,Q||0,Zt)}O=-1},this.readRenderTargetPixels=function(w,B,Q,tt,X,vt,Et){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){_t.bindFramebuffer(C.FRAMEBUFFER,Pt);try{let It=w.texture,Zt=It.format,Kt=It.type;if(!Z.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-tt&&Q>=0&&Q<=w.height-X&&C.readPixels(B,Q,tt,X,ne.convert(Zt),ne.convert(Kt),vt)}finally{let It=P!==null?Tt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,B,Q,tt,X,vt,Et){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){let It=w.texture,Zt=It.format,Kt=It.type;if(!Z.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-tt&&Q>=0&&Q<=w.height-X){_t.bindFramebuffer(C.FRAMEBUFFER,Pt);let Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(B,Q,tt,X,ne.convert(Zt),ne.convert(Kt),0);let fe=P!==null?Tt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(C.FRAMEBUFFER,fe);let ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await yf(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.deleteBuffer(Bt),C.deleteSync(ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,Q=0){w.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let tt=Math.pow(2,-Q),X=Math.floor(w.image.width*tt),vt=Math.floor(w.image.height*tt),Et=B!==null?B.x:0,Pt=B!==null?B.y:0;A.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,Q,0,0,Et,Pt,X,vt),_t.unbindTexture()},this.copyTextureToTexture=function(w,B,Q=null,tt=null,X=0){w.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,w=arguments[1],B=arguments[2],X=arguments[3]||0,Q=null);let vt,Et,Pt,It,Zt,Kt;Q!==null?(vt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,Pt=Q.min.x,It=Q.min.y):(vt=w.image.width,Et=w.image.height,Pt=0,It=0),tt!==null?(Zt=tt.x,Kt=tt.y):(Zt=0,Kt=0);let Bt=ne.convert(B.format),fe=ne.convert(B.type);A.setTexture2D(B,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);let ve=C.getParameter(C.UNPACK_ROW_LENGTH),xe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ce=C.getParameter(C.UNPACK_SKIP_PIXELS),ae=C.getParameter(C.UNPACK_SKIP_ROWS),Gt=C.getParameter(C.UNPACK_SKIP_IMAGES),Re=w.isCompressedTexture?w.mipmaps[X]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,X,Zt,Kt,vt,Et,Bt,fe,Re.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,X,Zt,Kt,Re.width,Re.height,Bt,Re.data):C.texSubImage2D(C.TEXTURE_2D,X,Zt,Kt,vt,Et,Bt,fe,Re),C.pixelStorei(C.UNPACK_ROW_LENGTH,ve),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Gt),X===0&&B.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(w,B,Q=null,tt=null,X=0){w.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,w=arguments[2],B=arguments[3],X=arguments[4]||0);let vt,Et,Pt,It,Zt,Kt,Bt,fe,ve,xe=w.isCompressedTexture?w.mipmaps[X]:w.image;Q!==null?(vt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,Pt=Q.max.z-Q.min.z,It=Q.min.x,Zt=Q.min.y,Kt=Q.min.z):(vt=xe.width,Et=xe.height,Pt=xe.depth,It=0,Zt=0,Kt=0),tt!==null?(Bt=tt.x,fe=tt.y,ve=tt.z):(Bt=0,fe=0,ve=0);let Ce=ne.convert(B.format),ae=ne.convert(B.type),Gt;if(B.isData3DTexture)A.setTexture3D(B,0),Gt=C.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)A.setTexture2DArray(B,0),Gt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);let Re=C.getParameter(C.UNPACK_ROW_LENGTH),de=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Oe=C.getParameter(C.UNPACK_SKIP_PIXELS),Ue=C.getParameter(C.UNPACK_SKIP_ROWS),rn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Kt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Gt,X,Bt,fe,ve,vt,Et,Pt,Ce,ae,xe.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(Gt,X,Bt,fe,ve,vt,Et,Pt,Ce,xe.data):C.texSubImage3D(Gt,X,Bt,fe,ve,vt,Et,Pt,Ce,ae,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,de),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rn),X===0&&B.generateMipmaps&&C.generateMipmap(Gt),_t.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),_t.unbindTexture()},this.resetState=function(){F=0,I=0,P=null,_t.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ec?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===vo?"display-p3":"srgb"}};var Zr=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ml=class extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Je,h=Je,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new _e,ph=new _e,xr=[],mh=new Xn,gg=new _e,ws=new pe,As=new qn,En=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new je(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),mh.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(mh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),As.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),ph.multiplyMatrices(n,Yi),ws.matrixWorld=ph,ws.raycast(t,xr);for(let o=0,a=xr.length;o<a;o++){let l=xr[o];l.instanceId=r,l.object=this,e.push(l)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new je(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(s*this.count),s,this.count,Kl,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Sl=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jr=new D,Kr=new D,gh=new _e,Es=new Ai,_r=new qn,ma=new D,vh=new D,bl=class extends ke{constructor(t=new Se,e=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Kr);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;gh.copy(s).invert(),Es.copy(t.ray).applyMatrix4(gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=u,p=v-1;_<p;_+=c){let m=h.getX(_),y=h.getX(_+1),x=yr(this,t,Es,l,m,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(v-1),p=h.getX(u),m=yr(this,t,Es,l,_,p);m&&e.push(m)}}else{let u=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=u,p=v-1;_<p;_+=c){let m=yr(this,t,Es,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=yr(this,t,Es,l,v-1,u);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Jr.fromBufferAttribute(o,s),Kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Jr,Kr,ma,vh)>n)return;ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:vh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var xh=new D,_h=new D,Qr=class extends bl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xh.fromBufferAttribute(e,s),_h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xh.distanceTo(_h);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wl=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yh=new _e,Al=new Ai,Mr=new qn,Sr=new D,jr=class extends ke{constructor(t=new Se,e=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;yh.copy(s).invert(),Al.copy(t.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let v=d,_=u;v<_;v++){let p=c.getX(v);Sr.fromBufferAttribute(f,p),Mh(Sr,p,l,s,t,e,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let v=d,_=u;v<_;v++)Sr.fromBufferAttribute(f,v),Mh(Sr,v,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mh(i,t,e,n,s,r,o){let a=Al.distanceSqToPoint(i);if(a<e){let l=new D;Al.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new _e;for(let u=0;u<=t;u++){let v=u/t;s[u]=this.getTangentAt(v,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(Ge(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,v))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ge(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],u*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ds=class extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends Ds{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ic(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var br=new D,ga=new ic,va=new ic,xa=new ic,ls=class extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),c=br);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),v<1e-4&&(v=_),p<1e-4&&(p=_),ga.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,v,_,p),va.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,v,_,p),xa.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,v,_,p)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),va.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),xa.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(ga.calc(l),va.calc(l),xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vg(i,t){let e=1-i;return e*e*t}function xg(i,t){return 2*(1-i)*i*t}function _g(i,t){return i*i*t}function Rs(i,t,e,n){return vg(i,t)+xg(i,e)+_g(i,n)}function yg(i,t){let e=1-i;return e*e*e*t}function Mg(i,t){let e=1-i;return 3*e*e*i*t}function Sg(i,t){return 3*(1-i)*i*i*t}function bg(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return yg(i,t)+Mg(i,e)+Sg(i,n)+bg(i,s)}var to=class extends gn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends gn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends gn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cl=class extends gn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends gn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends gn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Sh(a,l.x,c.x,h.x,f.x),Sh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:ls,CubicBezierCurve:to,CubicBezierCurve3:Tl,EllipseCurve:Ds,LineCurve:eo,LineCurve3:Cl,QuadraticBezierCurve:no,QuadraticBezierCurve3:io,SplineCurve:so}),Rl=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ro[s.type]().fromJSON(s))}return this}},oo=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new eo(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new no(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new to(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new so(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ds(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var vn=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],v=0,_=[],p=n/2,m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(u,2));function y(){let S=new D,F=new D,I=0,P=(e-t)/n;for(let O=0;O<=r;O++){let N=[],g=O/r,b=g*(e-t)+t;for(let G=0;G<=s;G++){let W=G/s,U=W*l+a,k=Math.sin(U),q=Math.cos(U);F.x=b*k,F.y=-g*n+p,F.z=b*q,f.push(F.x,F.y,F.z),S.set(k,P,q).normalize(),d.push(S.x,S.y,S.z),u.push(W,1-g),N.push(v++)}_.push(N)}for(let O=0;O<s;O++)for(let N=0;N<r;N++){let g=_[N][O],b=_[N+1][O],G=_[N+1][O+1],W=_[N][O+1];t>0&&(h.push(g,b,W),I+=3),e>0&&(h.push(b,G,W),I+=3)}c.addGroup(m,I,0),m+=I}function x(S){let F=v,I=new xt,P=new D,O=0,N=S===!0?t:e,g=S===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,p*g,0),d.push(0,g,0),u.push(.5,.5),v++;let b=v;for(let G=0;G<=s;G++){let U=G/s*l+a,k=Math.cos(U),q=Math.sin(U);P.x=N*q,P.y=p*g,P.z=N*k,f.push(P.x,P.y,P.z),d.push(0,g,0),I.x=k*.5+.5,I.y=q*.5*g+.5,u.push(I.x,I.y),v++}for(let G=0;G<s;G++){let W=F+G,U=b+G;S===!0?h.push(U,U+1,W):h.push(U+1,U,W),O+=3}c.addGroup(m,O,S===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Pl=class i extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new D,S=new D,F=new D;for(let I=0;I<e.length;I+=3)u(e[I+0],x),u(e[I+1],S),u(e[I+2],F),l(x,S,F,y)}function l(y,x,S,F){let I=F+1,P=[];for(let O=0;O<=I;O++){P[O]=[];let N=y.clone().lerp(S,O/I),g=x.clone().lerp(S,O/I),b=I-O;for(let G=0;G<=b;G++)G===0&&O===I?P[O][G]=N:P[O][G]=N.clone().lerp(g,G/b)}for(let O=0;O<I;O++)for(let N=0;N<2*(I-O)-1;N++){let g=Math.floor(N/2);N%2===0?(d(P[O][g+1]),d(P[O+1][g]),d(P[O][g])):(d(P[O][g+1]),d(P[O+1][g+1]),d(P[O+1][g]))}}function c(y){let x=new D;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(y),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){let y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let S=p(y)/2/Math.PI+.5,F=m(y)/Math.PI+.5;o.push(S,1-F)}v(),f()}function f(){for(let y=0;y<o.length;y+=6){let x=o[y+0],S=o[y+2],F=o[y+4],I=Math.max(x,S,F),P=Math.min(x,S,F);I>.9&&P<.1&&(x<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),F<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,x){let S=y*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function v(){let y=new D,x=new D,S=new D,F=new D,I=new xt,P=new xt,O=new xt;for(let N=0,g=0;N<r.length;N+=9,g+=6){y.set(r[N+0],r[N+1],r[N+2]),x.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),I.set(o[g+0],o[g+1]),P.set(o[g+2],o[g+3]),O.set(o[g+4],o[g+5]),F.copy(y).add(x).add(S).divideScalar(3);let b=p(F);_(I,g+0,y,b),_(P,g+2,x,b),_(O,g+4,S,b)}}function _(y,x,S,F){F<0&&y.x===1&&(o[x]=y.x-1),S.x===0&&S.z===0&&(o[x]=F/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var li=class extends oo{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oo().fromJSON(s))}return this}},wg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Zh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,d,u;if(n&&(r=Rg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let v=e;v<s;v+=e)f=i[v],d=i[v+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return Ns(r,o,e,a,l,u,0),o}};function Zh(i,t,e,n,s){let r,o;if(s===kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=bh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=bh(r,i[r],i[r+1],o);return o&&_o(o,o.next)&&(Os(o),o=o.next),o}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||Te(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Eg(i,n,s,r):Ag(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Os(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Tg(Ei(i),t,e),Ns(i,t,e,n,s,r,2)):o===2&&Cg(i,t,e,n,s,r):Ns(Ei(i),t,e,n,s,r,1);break}}}function Ag(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=f&&v.y<=u&&Zi(s,a,r,l,o,c,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Eg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,v=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=Il(u,v,t,e,n),y=Il(_,p,t,e,n),x=i.prevZ,S=i.nextZ;for(;x&&x.z>=m&&S&&S.z<=y;){if(x.x>=u&&x.x<=_&&x.y>=v&&x.y<=p&&x!==s&&x!==o&&Zi(a,h,l,f,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=u&&S.x<=_&&S.y>=v&&S.y<=p&&S!==s&&S!==o&&Zi(a,h,l,f,c,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=u&&x.x<=_&&x.y>=v&&x.y<=p&&x!==s&&x!==o&&Zi(a,h,l,f,c,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=u&&S.x<=_&&S.y>=v&&S.y<=p&&S!==s&&S!==o&&Zi(a,h,l,f,c,d,S.x,S.y)&&Te(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Tg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&Jh(s,n,n.next,r)&&Fs(s,r)&&Fs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Os(n),Os(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function Cg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Og(o,a)){let l=Kh(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Ns(o,t,e,n,s,r,0),Ns(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Zh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Fg(c));for(s.sort(Pg),r=0;r<s.length;r++)e=Ig(s[r],e);return e}function Pg(i,t){return i.x-t.x}function Ig(i,t){let e=Lg(i,t);if(!e)return t;let n=Kh(e,i);return Ei(n,n.next),Ei(e,e.next)}function Lg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Fs(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Ug(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Ug(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Dg(i,t,e,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ng(s)}function Ng(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Og(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zg(i,t)&&(Fs(i,t)&&Fs(t,i)&&Bg(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||_o(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function Jh(i,t,e,n){let s=Ar(Te(i,t,e)),r=Ar(Te(i,t,n)),o=Ar(Te(e,n,i)),a=Ar(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||o===0&&wr(e,i,n)||a===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ar(i){return i>0?1:i<0?-1:0}function zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fs(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Bg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kh(i,t){let e=new Ll(i.i,i.x,i.y),n=new Ll(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bh(i,t,e,n){let s=new Ll(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wh(t),Ah(n,t);let o=t.length;e.forEach(wh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ah(n,e[l]);let a=wg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ao=class i extends Se{constructor(t=new li([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Vg,x,S=!1,F,I,P,O;m&&(x=m.getSpacedPoints(h),S=!0,d=!1,F=m.computeFrenetFrames(h,!1),I=new D,P=new D,O=new D),d||(p=0,u=0,v=0,_=0);let N=a.extractPoints(c),g=N.shape,b=N.holes;if(!ni.isClockWise(g)){g=g.reverse();for(let lt=0,C=b.length;lt<C;lt++){let wt=b[lt];ni.isClockWise(wt)&&(b[lt]=wt.reverse())}}let W=ni.triangulateShape(g,b),U=g;for(let lt=0,C=b.length;lt<C;lt++){let wt=b[lt];g=g.concat(wt)}function k(lt,C,wt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(C,wt)}let q=g.length,st=W.length;function K(lt,C,wt){let mt,Z,_t,At=lt.x-C.x,Tt=lt.y-C.y,A=wt.x-lt.x,M=wt.y-lt.y,J=At*At+Tt*Tt,ct=At*M-Tt*A;if(Math.abs(ct)>Number.EPSILON){let pt=Math.sqrt(J),ut=Math.sqrt(A*A+M*M),kt=C.x-Tt/pt,yt=C.y+At/pt,Ut=wt.x-M/ut,ie=wt.y+A/ut,gt=((Ut-kt)*M-(ie-yt)*A)/(At*M-Tt*A);mt=kt+At*gt-lt.x,Z=yt+Tt*gt-lt.y;let Ct=mt*mt+Z*Z;if(Ct<=2)return new xt(mt,Z);_t=Math.sqrt(Ct/2)}else{let pt=!1;At>Number.EPSILON?A>Number.EPSILON&&(pt=!0):At<-Number.EPSILON?A<-Number.EPSILON&&(pt=!0):Math.sign(Tt)===Math.sign(M)&&(pt=!0),pt?(mt=-Tt,Z=At,_t=Math.sqrt(J)):(mt=At,Z=Tt,_t=Math.sqrt(J/2))}return new xt(mt/_t,Z/_t)}let ft=[];for(let lt=0,C=U.length,wt=C-1,mt=lt+1;lt<C;lt++,wt++,mt++)wt===C&&(wt=0),mt===C&&(mt=0),ft[lt]=K(U[lt],U[wt],U[mt]);let ht=[],ot,Vt=ft.concat();for(let lt=0,C=b.length;lt<C;lt++){let wt=b[lt];ot=[];for(let mt=0,Z=wt.length,_t=Z-1,At=mt+1;mt<Z;mt++,_t++,At++)_t===Z&&(_t=0),At===Z&&(At=0),ot[mt]=K(wt[mt],wt[_t],wt[At]);ht.push(ot),Vt=Vt.concat(ot)}for(let lt=0;lt<p;lt++){let C=lt/p,wt=u*Math.cos(C*Math.PI/2),mt=v*Math.sin(C*Math.PI/2)+_;for(let Z=0,_t=U.length;Z<_t;Z++){let At=k(U[Z],ft[Z],mt);dt(At.x,At.y,-wt)}for(let Z=0,_t=b.length;Z<_t;Z++){let At=b[Z];ot=ht[Z];for(let Tt=0,A=At.length;Tt<A;Tt++){let M=k(At[Tt],ot[Tt],mt);dt(M.x,M.y,-wt)}}}let Ht=v+_;for(let lt=0;lt<q;lt++){let C=d?k(g[lt],Vt[lt],Ht):g[lt];S?(P.copy(F.normals[0]).multiplyScalar(C.x),I.copy(F.binormals[0]).multiplyScalar(C.y),O.copy(x[0]).add(P).add(I),dt(O.x,O.y,O.z)):dt(C.x,C.y,0)}for(let lt=1;lt<=h;lt++)for(let C=0;C<q;C++){let wt=d?k(g[C],Vt[C],Ht):g[C];S?(P.copy(F.normals[lt]).multiplyScalar(wt.x),I.copy(F.binormals[lt]).multiplyScalar(wt.y),O.copy(x[lt]).add(P).add(I),dt(O.x,O.y,O.z)):dt(wt.x,wt.y,f/h*lt)}for(let lt=p-1;lt>=0;lt--){let C=lt/p,wt=u*Math.cos(C*Math.PI/2),mt=v*Math.sin(C*Math.PI/2)+_;for(let Z=0,_t=U.length;Z<_t;Z++){let At=k(U[Z],ft[Z],mt);dt(At.x,At.y,f+wt)}for(let Z=0,_t=b.length;Z<_t;Z++){let At=b[Z];ot=ht[Z];for(let Tt=0,A=At.length;Tt<A;Tt++){let M=k(At[Tt],ot[Tt],mt);S?dt(M.x,M.y+x[h-1].y,x[h-1].x+wt):dt(M.x,M.y,f+wt)}}}z(),$();function z(){let lt=s.length/3;if(d){let C=0,wt=q*C;for(let mt=0;mt<st;mt++){let Z=W[mt];bt(Z[2]+wt,Z[1]+wt,Z[0]+wt)}C=h+p*2,wt=q*C;for(let mt=0;mt<st;mt++){let Z=W[mt];bt(Z[0]+wt,Z[1]+wt,Z[2]+wt)}}else{for(let C=0;C<st;C++){let wt=W[C];bt(wt[2],wt[1],wt[0])}for(let C=0;C<st;C++){let wt=W[C];bt(wt[0]+q*h,wt[1]+q*h,wt[2]+q*h)}}n.addGroup(lt,s.length/3-lt,0)}function $(){let lt=s.length/3,C=0;at(U,C),C+=U.length;for(let wt=0,mt=b.length;wt<mt;wt++){let Z=b[wt];at(Z,C),C+=Z.length}n.addGroup(lt,s.length/3-lt,1)}function at(lt,C){let wt=lt.length;for(;--wt>=0;){let mt=wt,Z=wt-1;Z<0&&(Z=lt.length-1);for(let _t=0,At=h+p*2;_t<At;_t++){let Tt=q*_t,A=q*(_t+1),M=C+mt+Tt,J=C+Z+Tt,ct=C+Z+A,pt=C+mt+A;Ft(M,J,ct,pt)}}}function dt(lt,C,wt){l.push(lt),l.push(C),l.push(wt)}function bt(lt,C,wt){Yt(lt),Yt(C),Yt(wt);let mt=s.length/3,Z=y.generateTopUV(n,s,mt-3,mt-2,mt-1);ee(Z[0]),ee(Z[1]),ee(Z[2])}function Ft(lt,C,wt,mt){Yt(lt),Yt(C),Yt(mt),Yt(C),Yt(wt),Yt(mt);let Z=s.length/3,_t=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);ee(_t[0]),ee(_t[1]),ee(_t[3]),ee(_t[1]),ee(_t[2]),ee(_t[3])}function Yt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function ee(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ro[s.type]().fromJSON(s)),new i(n,t.options)}},Vg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],v=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-f),new xt(d,1-v),new xt(_,1-m)]:[new xt(a,1-l),new xt(h,1-f),new xt(u,1-v),new xt(p,1-m)]}};function Hg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var lo=class i extends Pl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var co=class i extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,d=(e-t)/s,u=new D,v=new xt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let m=r+p/n*o;u.x=f*Math.cos(m),u.y=f*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),v.x=(u.x/e+1)/2,v.y=(u.y/e+1)/2,h.push(v.x,v.y)}f+=d}for(let _=0;_<s;_++){let p=_*(n+1);for(let m=0;m<n;m++){let y=m+p,x=y,S=y+n+1,F=y+n+2,I=y+1;a.push(x,S,I),a.push(S,F,I)}}this.setIndex(a),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ho=class i extends Se{constructor(t=new li([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function c(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,v=d.holes;ni.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=v.length;p<m;p++){let y=v[p];ni.isClockWise(y)===!0&&(v[p]=y.reverse())}let _=ni.triangulateShape(u,v);for(let p=0,m=v.length;p<m;p++){let y=v[p];u=u.concat(y)}for(let p=0,m=u.length;p<m;p++){let y=u[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){let y=_[p],x=y[0]+f,S=y[1]+f,F=y[2]+f;n.push(x,S,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Gg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Gg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var cs=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new D,d=new D,u=[],v=[],_=[],p=[];for(let m=0;m<=n;m++){let y=[],x=m/n,S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){let I=F/e;f.x=-t*Math.cos(s+I*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+I*r)*Math.sin(o+x*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(I+S,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let x=h[m][y+1],S=h[m][y],F=h[m+1][y],I=h[m+1][y+1];(m!==0||o>0)&&u.push(x,S,I),(m!==n-1||l<Math.PI)&&u.push(S,F,I)}this.setIndex(u),this.setAttribute("position",new re(v,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var uo=class i extends Se{constructor(t=new io(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new xt,h=new D,f=[],d=[],u=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(u,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),y(),m()}function p(x){h=t.getPointAt(x/e,h);let S=o.normals[x],F=o.binormals[x];for(let I=0;I<=s;I++){let P=I/s*Math.PI*2,O=Math.sin(P),N=-Math.cos(P);l.x=N*S.x+O*F.x,l.y=N*S.y+O*F.y,l.z=N*S.z+O*F.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let S=1;S<=s;S++){let F=(s+1)*(x-1)+(S-1),I=(s+1)*x+(S-1),P=(s+1)*x+S,O=(s+1)*(x-1)+S;v.push(F,I,O),v.push(I,P,O)}}function y(){for(let x=0;x<=e;x++)for(let S=0;S<=s;S++)c.x=x/e,c.y=S/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ro[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var fo=class extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};function Er(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,v=(n-e)/(s-e),_=v*v,p=_*v,m=-d*p+2*d*_-d*v,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*v+1,x=(-1-u)*p+(1.5+u)*_+.5*v,S=u*p-u*_;for(let F=0;F!==a;++F)r[F]=m*o[h+F]+y*o[c+F]+x*o[l+F]+S*o[f+F];return r}},Dl=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Nl=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Er(e,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Er(t.times,Array),values:Er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let v=0;v!==n;++v){let _=e[f+v];if(_!==e[d+v]||_!==e[u+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=il;var Ti=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Ur;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Tn{};Fl.prototype.ValueTypeName="color";var Ol=class extends Tn{};Ol.prototype.ValueTypeName="number";var zl=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},po=class extends Tn{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ur;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Tn{};Bl.prototype.ValueTypeName="vector";var Eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zs=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],v=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return v}return null}}},Xg=new zs,Bs=class{constructor(t){this.manager=t!==void 0?t:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var kl=class extends Bs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Eh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ls("img");function l(){h(),Eh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var mo=class extends Bs{constructor(t){super(t)}load(t,e,n,s){let r=new Ke,o=new kl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var us=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Th();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Th(){return performance.now()}var sc="\\[\\]\\.:\\/",qg=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",Yg="[^"+sc.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",rc),Zg=/(WCOD+)?/.source.replace("WCOD",Yg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Qg=new RegExp("^"+$g+Zg+Jg+Kg+"$"),jg=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qg,"")}static parseTrackName(t){let e=Qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Vl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);var yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tv=new Us(-1,1,1,-1,0,1),oc=class extends Se{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}},ev=new oc,ui=class{constructor(t){this._mesh=new pe(ev,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ri=class extends hn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hi.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ui(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vs=class extends hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mo=class extends hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var So=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ri(yo),this.copyPass.material.blending=Un,this.clock=new us}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vs!==void 0&&(o instanceof Vs?n=!0:o instanceof Mo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bo=class extends hn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Qh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ps=class i extends hn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,o,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new Be(r,o,{type:tn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Be(r,o,{type:tn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Qh;this.highPassUniforms=hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new xt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=yo;this.copyUniforms=hi.clone(h.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ts,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new ai,this.fsQuad=new ui(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ps.BlurDirectionX=new xt(1,0);ps.BlurDirectionY=new xt(0,1);var jh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var wo=class extends hn{constructor(){super();let t=jh;this.uniforms=hi.clone(t.uniforms),this.material=new fo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qe=`
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
`,tu=qe,eu=i=>({uFogCool:i.cool,uFogWarm:i.warm,uSunDir:i.sun,uFogDensity:i.density,uDetail:i.detail}),xn=`
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Hs=`
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
`,Gs=`
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
`,nu={vertexShader:`
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
    ${xn}
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
  `},iu={vertexShader:Gs,fragmentShader:`
    uniform sampler2D uMap;
    uniform float uTime;
    uniform float uLights;
    uniform vec4 uBounds; // lonMin, lonMax, latMin, latMax (for the graticule)
    ${qe}
    ${xn}
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
  `},Ao={vertexShader:Gs,fragmentShader:`
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
    ${qe}
    ${xn}
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
  `},Eo={vertexShader:Gs,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform vec3 uZenith;
    uniform sampler2D uReflect;   // the scene mirrored in the water plane
    uniform mat4 uReflectMat;
    uniform float uReflectOn;
    uniform float uMirrorY;
    ${qe}
    ${xn}
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
  `},ac={vertexShader:`
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
    ${qe}
    ${xn}
    ${Hs}
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
  `},su={vertexShader:`
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
    ${qe}
    ${xn}
    ${Hs}
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
  `},ru={vertexShader:`
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
    ${qe}
    ${xn}
    ${Hs}
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
  `},ou={vertexShader:`
    attribute float aSeed;
    varying vec3 vN;
    varying vec3 vP;
    varying float vSeed;
    varying float vH;
    ${xn}
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
    ${qe}
    ${xn}
    ${Hs}
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
  `},au={vertexShader:`
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
    ${qe}
    ${xn}
    ${Hs}
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
  `},lu={vertexShader:`
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
    ${qe}
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
  `},cu={vertexShader:`
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
    ${qe}
    varying vec3 vColor;
    varying vec3 vP;
    void main() {
      float r = length(gl_PointCoord - 0.5) * 2.0;
      float a = exp(-r * r * 4.0);
      vec3 d = vP - cameraPosition;
      float fade = exp(-pow(length(d) * uFogDensity, 1.5));
      gl_FragColor = vec4(vColor * a * fade * uDetail, 1.0);
    }
  `},lc={vertexShader:`
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
    ${qe}
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
  `},cc={vertexShader:`
    varying vec2 vUv;
    varying vec3 vP;
    void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
  `,fragmentShader:`
    uniform vec3 uColor;
    ${qe}
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
  `},hu={vertexShader:`
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
  `},uu={vertexShader:`
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
  `},fu={vertexShader:`
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
    ${qe}
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
  `},ex={vertexShader:Gs,fragmentShader:`
    uniform float uTime;
    uniform float uUnitsPerM;
    uniform float uOn;
    uniform vec3 uPointer;
    uniform float uPointerOn;
    ${qe}
    ${xn}
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
  `},du={vertexShader:Gs,fragmentShader:`
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uZenith;
    ${qe}
    ${xn}
    varying vec3 vP;
    void main() {
      vec2 q = vP.xz / 400.0 + vec2(uTime * 0.01, 0.0);
      float c = fbm(q) * 0.65 + fbm(q * 3.1 + 4.0) * 0.35;
      float a = smoothstep(0.52, 0.78, c);
      vec3 V = normalize(cameraPosition - vP);
      vec3 col = mix(uZenith * 2.2, hazeColor(-V) * 1.4, 0.5) * (0.6 + 0.6 * c);
      gl_FragColor = vec4(col, a * uOpacity);
    }
  `},Ws={vertexShader:`
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
  `},pu={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `},mu={uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.028},uVignette:{value:.9},uAberration:{value:6e-4}},vertexShader:`
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
  `};var To=typeof document<"u"?document.documentElement:null,iv=To&&(To.lang||"en").toLowerCase().startsWith("es")?"es":"en",ms=To&&To.dataset.base||"",sv={"New York":"Nueva York","Commercial \xB7 276 Fifth Ave.":"Comercial \xB7 276 Fifth Ave.","Commercial \xB7 Residential \xB7 Winter Springs":"Comercial \xB7 Residencial \xB7 Winter Springs","New York \xB7 Commercial":"Nueva York \xB7 Comercial","Florida \xB7 Commercial & residential":"Florida \xB7 Comercial y residencial","New York \xB7 276 Fifth Ave.":"Nueva York \xB7 276 Fifth Ave.",Office:"Oficinas",Retail:"Comercio minorista",Industrial:"Industrial",Multifamily:"Multifamiliar",Hospitality:"Hoteler\xEDa",Healthcare:"Salud","Mixed use":"Uso mixto","Land development":"Desarrollo de terrenos",Storage:"Almacenamiento",Restaurants:"Restaurantes",Churches:"Iglesias","Special purpose":"Uso especial","Financial District":"Distrito Financiero","East Orlando \xB7 UCF":"Este de Orlando \xB7 UCF","Downtown Orlando":"Centro de Orlando","International Drive":"International Drive","Previous chapter":"Cap\xEDtulo anterior","Next chapter":"Cap\xEDtulo siguiente","CIIN Co. commercial listings on Crexi":"Propiedades comerciales de CIIN Co. en Crexi","Please enter your name.":"Escriba su nombre.","Please enter a valid email address.":"Escriba un correo electr\xF3nico v\xE1lido.","Please tell us a little about what you need.":"Cu\xE9ntenos un poco sobre lo que necesita.","Please check the highlighted fields.":"Revise los campos marcados.","Sending\u2026":"Enviando\u2026","Your message could not be sent. Please email":"No pudimos enviar su mensaje. Escr\xEDbanos a","or call":"o llame al"},Fe=i=>iv==="es"&&sv[i]||i;var Co=63710,_u=-77.5,rv=34.5,Xs=Math.PI/180,yu=i=>Math.log(Math.tan(Math.PI/4+i*Xs/2)),Mu=yu(rv),qs=i=>1/Math.cos(i*Xs);function en(i,t,e=0,n=new D){return n.set(Co*(t-_u)*Xs,e/100*qs(i),-Co*(yu(i)-Mu))}function Su(i,t){let e=i/Co/Xs+_u,n=-t/Co+Mu;return{lat:(2*Math.atan(Math.exp(n))-Math.PI/2)/Xs,lon:e}}var bu=(i,t)=>i*100/qs(t),gu=[40.7644,-73.973],vu=[.001233,-.002967],xu=[633e-6,457e-6],fi=[{a:-3.75,name:"East End"},{a:-3.3,name:"York"},{a:-2.8,name:"1st"},{a:-2.3,name:"2nd"},{a:-1.8,name:"3rd"},{a:-1.35,name:"Lexington"},{a:-.9,name:"Park"},{a:-.45,name:"Madison"},{a:0,name:"5th"},{a:1,name:"6th"},{a:2,name:"7th"},{a:3,name:"8th"},{a:4,name:"9th"},{a:5,name:"10th"},{a:6,name:"11th"},{a:6.85,name:"12th"}];function Ys(i,t){return[gu[0]+i*vu[0]+(t-59)*xu[0],gu[1]+i*vu[1]+(t-59)*xu[1]]}var _n={nyc:{lat:40.735,lon:-73.99},nyOffice:{lat:40.7459,lon:-73.9867,name:"New York",sub:"Commercial \xB7 276 Fifth Ave."},orlando:{lat:28.5434,lon:-81.3765},lakeEola:{lat:28.5434,lon:-81.3725},orlandoOffice:{lat:28.6555,lon:-81.2605,name:"Florida",sub:"Commercial \xB7 Residential \xB7 Winter Springs"},lakeJesup:{lat:28.722,lon:-81.235}};function wu(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var hc=i=>Math.sqrt(-2*Math.log(1-i()))*Math.cos(2*Math.PI*i()),$s=(i,t,e,n)=>{let s=(n-t)*111320*Math.cos((i+e)/2*Math.PI/180),r=(e-i)*110570;return Math.hypot(s,r)};function ye(i,t,e={}){return new Ee({vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,uniforms:t,...e})}var un={transparent:!0,blending:ts,depthWrite:!1},Pi=()=>({depthWrite:!1,depthTest:!0,transparent:!0}),Po=class{constructor(){this.items=[]}add(t,e,n,s,r,o,a,l=0,c=-1,h=0){this.items.push([t,e,n,s,r,o,a,l,c,h])}mesh(t){let e=this.items.length,n=new mn(1,1,1),s=new En(n,t,Math.max(1,e)),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e),l=new ke;return this.items.forEach(([c,h,f,d,u,v,_,p,m,y],x)=>{l.position.set(c,y+u/2,h),l.rotation.set(0,v,0),l.scale.set(f,u,d),l.updateMatrix(),s.setMatrixAt(x,l.matrix),r[x]=_,o[x]=m,a[x]=p}),s.count=e,n.setAttribute("aSeed",new je(r,1)),n.setAttribute("aId",new je(o,1)),n.setAttribute("aStyle",new je(a,1)),s.frustumCulled=!1,s}};function Ro(i,t,e,n,s,r,o,a,l,c,h=-1,f=null){let d=o/c,u=t(),v=Math.cos(a),_=Math.sin(a),p=(x,S)=>[e+x*v+S*_,n-x*_+S*v],m=s,y=r;if(d>105&&t()<.85){let x=Math.min(d*.28,16+t()*22);i.add(e,n,s,r,x*c,a,u,l===1&&t()<.5?i.florida?3:0:l,h);let S=x,F=.6+t()*.22;if(t()<.45){let I=(d-x)*(.55+t()*.2);i.add(e,n,s*F,r*F,I*c,a,u,l,h,S*c),S+=I;let P=F*(.68+t()*.15);i.add(e,n,s*P,r*P,(d-S)*c,a,u,l,h,S*c),m=s*P,y=r*P}else i.add(e,n,s*F,r*F,(d-S)*c,a,u,l,h,S*c),m=s*F,y=r*F;i.add(e,n,m*.5,y*.5,(5+t()*7)*c,a,u,2,h,o);return}if(i.add(e,n,s,r,o,a,u,l,h),d>40&&d<=105&&t()<.3){let x=(6+t()*10)*c;i.add(e,n,s*.78,r*.78,x,a,u,l,h,o),o+=x,m=s*.78,y=r*.78}if(d>14){let[x,S]=p((t()-.5)*m*.3,(t()-.5)*y*.3);if(t()<(d>30?.55:.25)&&i.add(x,S,m*(.14+t()*.12),y*(.16+t()*.12),(2.5+t()*2.5)*c,a,u,2,h,o),f&&l===0&&d<95&&t()<.4){let[F,I]=p((t()-.5)*m*.6,(t()-.5)*y*.6);f.push([F,I,o,(5+t()*2.5)*c,t()])}}}function ov(i,t,e=2048){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d",{willReadFrequently:!0});s.fillStyle="#000",s.fillRect(0,0,e,e);let r=a=>(a+t)/(2*t)*e;for(let{polys:a,color:l}of i){s.fillStyle=l;for(let c of a){s.beginPath();for(let h of c)h.forEach(([f,d],u)=>u?s.lineTo(r(f),r(d)):s.moveTo(r(f),r(d))),s.closePath();s.fill("evenodd")}}let o=s.getImageData(0,0,e,e).data;return(a,l)=>{let c=Math.floor(r(a)),h=Math.floor(r(l));if(c<0||h<0||c>=e||h>=e)return[0,0,0];let f=(h*e+c)*4;return[o[f],o[f+1],o[f+2]]}}function uc(){return{uAlignA:{value:[1e9,1e9,1,0]},uAlignAS:{value:[100,100]},uAlignB:{value:[1e9,1e9,1,0]},uAlignBS:{value:[100,100]},uAlignBO:{value:[0,0]},uHoods:{value:Array.from({length:8},()=>new D(1e9,1e9,1))}}}function gs(i,t,e=0){let[n,...s]=i,r=new li(n.map(([l,c])=>new xt(l,-c)));s.forEach(l=>r.holes.push(new li(l.map(([c,h])=>new xt(c,-h)))));let o=new ho(r);o.rotateX(-Math.PI/2);let a=new pe(o,t);return a.position.y=e,a.frustumCulled=!1,a}function Au(i,t,e=.02){let n=[],s=[],r=[],o=0,a=[0];for(let c=1;c<i.length;c++)o+=i[c].distanceTo(i[c-1]),a.push(o);i.forEach((c,h)=>{let f=i[Math.max(0,h-1)],d=i[Math.min(i.length-1,h+1)],u=new D().subVectors(d,f).setY(0).normalize(),v=new D(-u.z,0,u.x).multiplyScalar(t/2);n.push(c.x+v.x,c.y+e,c.z+v.z,c.x-v.x,c.y+e,c.z-v.z);let _=a[h]/o;if(s.push(_,0,_,1),h){let p=(h-1)*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}});let l=new Se;return l.setAttribute("position",new re(n,3)),l.setAttribute("uv",new re(s,2)),l.setIndex(r),l}function Zs(i,t){let e=i.length,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e),o=new Float32Array(e),a=new Float32Array(e*3);i.forEach(([h,f,d,u,v],_)=>{n.set([h.x,h.y,h.z],_*3),s.set([f.x,f.y,f.z],_*3),r[_]=d,o[_]=u,a.set([v.r,v.g,v.b],_*3)});let l=new Se;l.setAttribute("position",new be(n,3)),l.setAttribute("aEnd",new be(s,3)),l.setAttribute("aPhase",new be(r,1)),l.setAttribute("aSpeed",new be(o,1)),l.setAttribute("aColor",new be(a,3));let c=new jr(l,ye(cu,t,un));return c.frustumCulled=!1,c}function Eu(i,t,e,n){let s=n.low,r={value:0},o={value:1},a={cool:{value:n.night?new Lt(.075,.05,.085):new Lt(.02,.026,.07)},warm:{value:new Lt(.3,.12,.06)},sun:{value:new D(-.9,-.02,.36).normalize()},density:{value:1/400},detail:{value:1}},l={value:new Lt(.006,.01,.04)},c=eu(a),h={uTime:r,uPixelRatio:o,fog:a,uZenith:l,hit:[],waterMeshes:[]},f={uReflect:{value:null},uReflectMat:{value:new _e},uReflectOn:{value:0},uMirrorY:{value:0}};h.reflect=f;{let T=ye(nu,{uSunDir:a.sun,uZenith:l,uHorizon:{value:new Lt(.018,.022,.075)},uGlow:{value:new Lt(.95,.36,.14)},uTime:r,uDay:{value:0},uPhoto:{value:t.sky},uPhotoOn:{value:t.sky?1:0},uFogCool:a.cool,uFogWarm:a.warm,uHorizonHaze:{value:n.night?1:0}},{side:Xe,depthWrite:!1});h.sky=T;let R=new pe(new cs(10,48,24),T);R.renderOrder=-20,R.frustumCulled=!1,i.add(R)}{let T=e.map,R=en(T.latMax,T.lonMin),E=en(T.latMin,T.lonMax),L=new Qe(E.x-R.x,E.z-R.z);L.rotateX(-Math.PI/2);let V=ye(iu,{uMap:{value:t.map},uTime:r,uLights:{value:1},uBounds:{value:[T.lonMin,T.lonMax,T.latMin,T.latMax]},...c},Pi()),Y=new pe(L,V);Y.position.set((R.x+E.x)/2,-.6,(R.z+E.z)/2),Y.renderOrder=-10,Y.frustumCulled=!1,i.add(Y),h.map=V}let u=qs(40.73)/100,v=en(_n.nyc.lat,_n.nyc.lon),_=new An;_.position.copy(v),i.add(_);let p=(T,R,E=0)=>en(T,R,E).sub(v),m=T=>T.map(([R,E])=>{let L=p(E,R);return[L.x,L.z]});{let T=ye(Eo,{uTime:r,uUnitsPerM:{value:u},uZenith:l,...f,...c},Pi()),R=new pe(new Qe(1,1),T);h.waterMeshes.push(R),R.geometry.rotateX(-Math.PI/2),R.scale.set(900,1,900),R.position.y=-.3,R.renderOrder=-9,R.frustumCulled=!1,_.add(R),h.nycWater=R}let y=(T,R,E)=>ye(Ao,{uMode:{value:T},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new xt},uUnitsPerM:{value:u},uStreetCol:{value:new Lt(E)},uDensity:{value:R},uTime:r,...uc(),...c},Pi()),x=p(...Ys(0,59)),S=p(...Ys(1,59)).sub(x),F=p(...Ys(0,60)).sub(x),I=S.x*F.z-F.x*S.z,P=[F.z/I,-S.z/I,-F.x/I,S.x/I],O=(T,R)=>new D(x.x+S.x*T+F.x*(R-59),0,x.z+S.z*T+F.z*(R-59)),N=(T,R)=>{let E=T-x.x,L=R-x.z;return[P[0]*E+P[2]*L,P[1]*E+P[3]*L+59]},g=Math.atan2(-S.z,S.x);h.nycGrid={gridToLocal:O,localToGrid:N};let b=[],G=[],W=[];for(let[T,R]of Object.entries(e.nyc)){if(T.startsWith("_"))continue;let E=T==="Manhattan",L=et=>Math.max(...et.outer.map(([,rt])=>rt))<40.7045,V=E?R.filter(et=>!L(et)):R;E&&W.push(...R.filter(L).map(et=>[m(et.outer),...et.holes.map(m)]));let Y=E?y(1,1,n.night?"#c9a786":"#ffe0bd"):y(0,T==="Brooklyn"||T==="Queens"?1:.7,"#ffb36b");E&&(Y.uniforms.uGridInv.value.set(P),Y.uniforms.uGridOrigin.value.set(v.x+x.x,v.z+x.z));let j=V.map(et=>[m(et.outer),...et.holes.map(m)]);j.forEach(et=>{let rt=gs(et,Y,-.2);rt.renderOrder=-8,_.add(rt)}),b.push({polys:j,color:E?"#ffff00":"#ff0000"}),E&&G.push(...j)}{let T=y(2,1,"#ffd9a0");W.forEach(L=>{let V=gs(L,T,-.16);V.renderOrder=-7,_.add(V)});let R=[],E=new Lt(1.6,1.3,.9);for(let[L]of W){let V=0;for(let Y=0;Y<L.length;Y++){let[j,et]=L[Y],[rt,nt]=L[(Y+1)%L.length],Mt=Math.hypot(rt-j,nt-et);for(let St=25*u-V%(25*u);St<Mt;St+=25*u){let Rt=new D(j+(rt-j)*St/Mt,.05,et+(nt-et)*St/Mt);R.push([Rt,Rt,0,0,E])}V+=Mt}}_.add(Zs(R,{uTime:r,uPixelRatio:o,uSize:{value:10},...c}))}let U=[O(0,59.6),O(3,59.6),O(3,110),O(0,110)].map(T=>[T.x,T.z]);{let T=y(2,1,"#ffd9a0"),R=gs([U],T,-.15);R.renderOrder=-7,_.add(R);let E=[];for(let Y=0;Y<40;Y++){let j=Y/40*Math.PI*2,et=O(1.55+Math.cos(j)*1.05,91.2+Math.sin(j)*5);E.push([et.x,et.z])}let L=ye(Eo,{uTime:r,uUnitsPerM:{value:u},uZenith:l,...f,...c},Pi()),V=gs([E],L,-.1);h.waterMeshes.push(V),V.renderOrder=-6,_.add(V)}let q=ov([...b.filter(T=>T.color==="#ff0000"),...b.filter(T=>T.color==="#ffff00")],500,s?2048:3072),st=(T,R)=>q(T,R)[0]>128,K=(T,R)=>q(T,R)[1]>128,ft=new Po,ht=[],ot=wu(1811),Vt=[],Ht=(T,R,E)=>Vt.some(([L,V,Y])=>Math.hypot(T-L,R-V)<Y+E),z=(T,R,E)=>{let L=16+ot()*22,V=Math.exp(-(($s(T,R,40.7565,-73.9815)/1150)**2)),Y=Math.exp(-(($s(T,R,40.7078,-74.0095)/640)**2)),j=Math.exp(-(($s(T,R,40.7535,-74.0015)/330)**2)),et=Math.exp(-(((E-84)/28)**2))*(E>59?1:0),rt=Math.exp(hc(ot)*.45);return L+=V*135*rt+Y*120*rt+j*150*rt+et*30*ot(),E>110&&(L*=.7),Math.min(L,330)},$=(T,R,E,L,V,Y=1,j=-1,et=g,rt=[])=>{let nt=p(T,R),Mt=u;ft.add(nt.x,nt.z,E*Mt,L*Mt,V*Mt,et,ot(),Y,j);let St=V;for(let[Rt,qt,Qt]of rt)ft.add(nt.x,nt.z,Rt*Mt,qt*Mt,Qt*Mt,et,ot(),Y,j,St*Mt),St+=Qt;return Vt.push([nt.x,nt.z,Math.max(E,L)*Mt*.8]),nt.clone().setY(St*Mt)};$(40.7484,-73.9857,130,60,320,0,-1,g,[[60,40,60],[12,12,63]]),$(40.713,-74.0132,62,62,417,1,-1,g+.785,[[6,6,124]]),$(40.7516,-73.9755,45,45,275,0,-1,g,[[25,25,30],[6,6,14]]),$(40.766,-73.981,45,30,472,1),$(40.7615,-73.9718,28,28,426,1),$(40.7649,-73.9775,18,40,435,1),$(40.7656,-73.979,40,30,306,1),$(40.754,-74.001,60,45,387,1),$(40.7545,-74.0025,45,40,308,1),$(40.7531,-73.979,50,50,427,1),$(40.7553,-73.9845,45,40,366,1),$(40.7593,-73.98,40,30,259,0),$(40.7116,-74.0112,50,50,298,1),$(40.7104,-74.0108,50,50,297,1),$(40.7069,-74.0089,40,35,283,0),$(40.6923,-73.9853,40,40,325,1,-1,0);let at=[["Office",1.6,47.5,55,40,240,1],["Retail",-.15,55.5,60,30,34,0],["Industrial",6.35,27.5,120,60,18,0],["Multifamily",3.5,64.5,50,35,128,0],["Hospitality",2.35,45.5,45,40,190,1],["Healthcare",-2.95,31.5,90,60,92,0],["Mixed use",5.6,37.5,55,50,262,1],["Land development",6.1,41.5,110,55,2,0],["Storage",6,21.5,70,50,36,0],["Restaurants",1.7,12.5,30,22,14,0],["Churches",4.3,71.5,25,45,28,0],["Special purpose",6.35,35.5,140,60,34,0]];h.typeTargets=at.map(([T,R,E,L,V,Y,j],et)=>{let rt=O(R,E),nt=u;return ft.add(rt.x,rt.z,L*nt,V*nt,Y*nt,g,ot(),j,et),T==="Churches"&&ft.add(rt.x,rt.z+.12,7*nt,7*nt,46*nt,g,ot(),0,et,28*nt),Vt.push([rt.x,rt.z,Math.max(L,V)*nt*.7]),{name:T,local:rt.clone().setY((T==="Churches"?74:Y)*nt+.05)}});let dt=S.length(),bt=F.length(),Ft=S.clone().normalize(),Yt=F.clone().normalize(),ee=s?42:28;for(let T=0;T<fi.length-1;T++){let R=fi[T].a,E=fi[T+1].a;for(let L=1;L<220;L++){if(R>=0&&E<=3&&L>=59&&L<110)continue;let V=(E-R)*dt,Y=bt,j=15*u,et=10*u,rt=Math.max(1,Math.round((V-2*j)/(ee*u))),nt=O(R,L),[Mt,St]=Ys((R+E)/2,L+.5),Rt=z(Mt,St,L),qt=Rt>150&&ot()<.55,Qt=qt?1:2,jt=qt?Math.max(1,Math.round(rt/3)):rt;for(let oe=0;oe<jt;oe++)for(let he=0;he<Qt;he++){let Nt=j+(V-2*j)*(oe+.5)/jt,Jt=et+(Y-2*et)*(he+.5)/Qt,te=nt.x+Ft.x*Nt+Yt.x*Jt,Wt=nt.z+Ft.z*Nt+Yt.z*Jt;if(!K(te,Wt)||Ht(te,Wt,.1)||ot()<.06)continue;let ue=(V-2*j)/jt*(.86+ot()*.1),w=(Y-2*et)/Qt*(.84+ot()*.12),B=qt?Rt*(.8+ot()*.5):z(Mt,St,L)*(.6+ot()*.5);B=Math.max(10,B)*u,Ro(ft,ot,te,Wt,ue,w,B,g,B/u>140?ot()<.8?1:0:ot()<.08?1:0,u,-1,ht)}}}{let T=(s?55:42)*u,R=p(40.7,-74.02),E=p(40.742,-73.97);for(let L=R.x;L<E.x;L+=T)for(let V=E.z;V<R.z;V+=T){let[Y,j]=N(L,V);if(!(j<1.5||j<14&&Y>1)||!K(L,V)||Ht(L,V,T*.5))continue;let rt=Math.floor(L/(5*u*100))*31+Math.floor(V/(5*u*100)),nt=g+Math.sin(rt*12.9898)*43758.5453%1*.9,Mt={lat:40.735+-V/(110570*u),lon:-73.99+L/(111320*Math.cos(40.73*Math.PI/180)*u)},St=z(Mt.lat,Mt.lon,0)*(.5+ot()*.6);ot()<.12||Ro(ft,ot,L+(ot()-.5)*T*.3,V+(ot()-.5)*T*.3,T*(.6+ot()*.3),T*(.6+ot()*.3),Math.max(9,St)*u,nt,St>140?1:0,u,-1,ht)}}{let T=[[40.6925,-73.987,520,160],[40.7465,-73.944,520,140],[40.718,-74.036,600,170],[40.745,-74.029,400,60]],R=(s?120:85)*u,E=(s?7e3:9500)*u,L=p(40.73,-73.975);for(let V=L.x-E;V<L.x+E;V+=R)for(let Y=L.z-E;Y<L.z+E;Y+=R){if(Math.hypot(V-L.x,Y-L.z)>E||K(V,Y)||!st(V,Y)||ot()<.38)continue;let j={lat:_n.nyc.lat-Y/(110570*u)*1,lon:_n.nyc.lon+V/(111320*Math.cos(40.73*Math.PI/180)*u)},et=9+ot()*14;for(let[nt,Mt,St,Rt]of T)et+=Rt*Math.exp(-(($s(j.lat,j.lon,nt,Mt)/St)**2))*Math.exp(hc(ot)*.4);let rt=Math.floor(V/(6*R))*.37+Math.floor(Y/(6*R))*.21;Ro(ft,ot,V+(ot()-.5)*R*.3,Y+(ot()-.5)*R*.3,R*(.45+ot()*.3),R*(.45+ot()*.35),et*u,rt,et>120?1:0,u,-1,et<60?ht:null)}}let lt={uBrick:{value:t.brick},uGlass:{value:t.glass},uFacadeOn:{value:t.brick&&t.glass&&!n.night?1:0}},C={uTime:r,uUnitsPerM:{value:u},uHot:{value:-1},uHotOn:{value:0},uZenith:l,uNightK:{value:n.night?1:0},...lt,...c};if(n.night){let T=150*u;ft.items=ft.items.filter(R=>R[9]+R[4]>T).map(R=>{let E=R.slice();return E[4]+=E[9],E[9]=0,E}),ht.length=0}let wt=ft.mesh(ye(ac,C));_.add(wt);{let T=new vn(.5,.5,.9,10,1,!1).toNonIndexed();T.translate(0,.95,0);let R=new vn(0,.56,.38,10,1,!0).toNonIndexed();R.translate(0,1.59,0);let E=new mn(.8,.5,.8).toNonIndexed();E.translate(0,.25,0);let L=[T,R,E],V=L.reduce((Rt,qt)=>Rt+qt.attributes.position.count,0),Y=new Float32Array(V*3),j=new Float32Array(V*3),et=new Float32Array(V),rt=0;L.forEach((Rt,qt)=>{Y.set(Rt.attributes.position.array,rt*3),j.set(Rt.attributes.normal.array,rt*3),et.fill(qt,rt,rt+Rt.attributes.position.count),rt+=Rt.attributes.position.count});let nt=new Se;nt.setAttribute("position",new be(Y,3)),nt.setAttribute("normal",new be(j,3)),nt.setAttribute("aPart",new be(et,1));let Mt=new En(nt,ye(su,{uUnitsPerM:{value:u},uZenith:l,...c}),Math.max(1,ht.length)),St=new ke;ht.forEach(([Rt,qt,Qt,jt,oe],he)=>{St.position.set(Rt,Qt,qt),St.rotation.set(0,oe*6,0),St.scale.set(jt,jt*1.15,jt),St.updateMatrix(),Mt.setMatrixAt(he,St.matrix)}),Mt.count=ht.length,Mt.frustumCulled=!1,_.add(Mt)}h.nycBuildings={mesh:wt,uniforms:C,count:ft.items.length};{let T=[[40.7118,-74.0005,40.7022,-73.9893,40,84,"#ffe6c4"],[40.7153,-73.9938,40.6993,-73.9858,41,101,"#d6e2ff"],[40.7172,-73.9832,40.7108,-73.96,41,102,"#ffe6c4"],[40.7604,-73.9615,40.7506,-73.9405,40,106,"#d6e2ff"],[40.85,-73.9445,40.854,-73.965,65,184,"#e8eeff"],[40.6112,-74.033,40.6017,-74.0573,69,211,"#e8eeff"]],R=[],E=[],L=[],V=new ai({color:new Lt(.03,.035,.05)});for(let[Y,j,et,rt,nt,Mt,St]of T){let Rt=p(Y,j,nt),qt=p(et,rt,nt),Qt=new pe(Au([Rt,qt],26*u,0),ye(lc,{uColor:{value:new Lt(St)},uIntensity:{value:.9},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},un));Qt.frustumCulled=!1,_.add(Qt);let jt=Rt.clone().lerp(qt,.24),oe=Rt.clone().lerp(qt,.76);for(let te of[jt,oe]){let Wt=new pe(new mn(10*u,Mt*u,16*u),V);Wt.position.set(te.x,Mt*u/2,te.z),Wt.rotation.y=Math.atan2(qt.x-Rt.x,qt.z-Rt.z),_.add(Wt)}let he=(Mt-nt)*u,Nt=s?24:44,Jt=new Lt(St).multiplyScalar(2.2);for(let te=0;te<=Nt;te++){let Wt=te/Nt,ue=jt.clone().lerp(oe,Wt);ue.y+=he*(1-4*Wt*(1-Wt))*.92+.05,E.push([ue,ue,0,0,Jt])}for(let[te,Wt]of[[Rt,jt],[oe,qt]])for(let ue=0;ue<=10;ue++){let w=te.clone().lerp(Wt,ue/10);w.y+=he*(te===Rt?ue/10:1-ue/10)*.9,E.push([w,w,0,0,Jt])}for(let te=0;te<(s?14:30);te++){let Wt=te%2===0;L.push([Wt?Rt:qt,Wt?qt:Rt,Math.random(),.02+Math.random()*.02,Wt?new Lt(2.2,2,1.7):new Lt(2.2,.2,.1)])}}_.add(Zs(E,{uTime:r,uPixelRatio:o,uSize:{value:18},...c})),_.add(Zs(L,{uTime:r,uPixelRatio:o,uSize:{value:22},...c}))}{let T=[],R=new Lt(2,1.85,1.6),E=new Lt(2.4,.18,.08),L=s?6:12;fi.forEach(({a:V},Y)=>{if(V<-3.6)return;let j=Y%2===0;for(let et=1;et<200;et+=20){let rt=O(V,et),nt=O(V,et+20);if(!(!K(rt.x,rt.z)||!K(nt.x,nt.z))&&!(V>0&&V<3&&et+20>59&&et<110)){rt.y=nt.y=.02;for(let Mt=0;Mt<L;Mt++)T.push([j?rt:nt,j?nt:rt,Math.random(),.03+Math.random()*.03,j?R:E])}}});for(let V of[14,23,34,42,57,72,79,86,96,116,125])for(let Y=0;Y<fi.length-1;Y++){let j=O(fi[Y].a,V),et=O(fi[Y+1].a,V);if(!(!K(j.x,j.z)||!K(et.x,et.z))){j.y=et.y=.02;for(let rt=0;rt<3;rt++){let nt=rt%2===0;T.push([nt?j:et,nt?et:j,Math.random(),.06+Math.random()*.05,nt?R:E])}}}_.add(Zs(T,{uTime:r,uPixelRatio:o,uSize:{value:16},...c}))}{let T=p(40.6892,-74.0445),R=new An;R.position.copy(T),R.scale.setScalar(u),R.rotation.y=-Math.PI*.72;let E=(Rt,qt)=>new Ee({vertexShader:`varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){ vY = position.y; vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`uniform vec3 uColor; uniform vec3 uRim; uniform float uTop;
        ${tu}
        varying vec3 vN; varying vec3 vP; varying float vY;
        void main(){
          vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vP);
          float flood = 0.55 + 0.45 * max(dot(N, normalize(vec3(0.2, 0.55, 0.0) + V * 0.8)), 0.0);   // floodlights from the island
          float fall = 1.0 - 0.35 * clamp(vY / uTop, 0.0, 1.0);
          float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
          vec3 col = uColor * flood * fall + uRim * rim * 0.8;
          gl_FragColor = vec4(applyFog(col, vP), 1.0);
        }`,uniforms:{uColor:{value:new Lt(...Rt)},uRim:{value:new Lt(...qt)},uTop:{value:93},...c}}),L=E([.3,.68,.58],[.6,1,.9]),V=E([.085,.075,.065],[.14,.12,.09]),Y=(Rt,qt,Qt,jt,oe,he=0,Nt=0)=>{let Jt=new pe(Rt,qt);return Jt.position.set(Qt,jt,oe),Jt.rotation.set(he,0,Nt),R.add(Jt),Jt},j=new li;for(let Rt=0;Rt<22;Rt++){let qt=Rt/22*Math.PI*2,Qt=Rt%2?36:52;Rt?j.lineTo(Math.cos(qt)*Qt,Math.sin(qt)*Qt):j.moveTo(Math.cos(qt)*Qt,Math.sin(qt)*Qt)}let et=new ao(j,{depth:9,bevelEnabled:!1});et.rotateX(-Math.PI/2),Y(et,V,0,0,0),Y(new vn(9.5,13,38,4,1),V,0,28,0).rotation.y=Math.PI/4,Y(new vn(10.5,10.5,2.5,4,1),V,0,47,0).rotation.y=Math.PI/4,Y(new vn(3.4,6.2,30,16),L,0,63,0),Y(new cs(3.6,16,10),L,0,78,0),Y(new cs(2.3,16,12),L,0,82.5,.6);for(let Rt=0;Rt<7;Rt++){let qt=-.95+Rt/6*1.9;Y(new vn(.05,.35,4.2,5),L,Math.sin(qt)*2.6,84.5,Math.cos(qt)*2.6*.6+.6).rotation.set(Math.cos(qt)*.9,0,-Math.sin(qt)*.9)}Y(new vn(.9,1.2,13,10),L,3.2,86,0,0,-.18),Y(new vn(1,.6,2.4,10),L,4.4,92.4,0),Y(new mn(1.2,6.5,4.2),L,-4,70,.6,0,.25);let rt=new pe(new Qe(1,1),ye(Ws,{uColor:{value:new Lt(1,.78,.4)},uIntensity:{value:2.6}},un));rt.position.set(4.4,94.5,0),rt.scale.setScalar(11),R.add(rt);let nt=new pe(new Qe(1,1),ye(Ws,{uColor:{value:new Lt(1,.95,.8)},uIntensity:{value:4}},un));nt.position.copy(rt.position),nt.scale.setScalar(3.2),R.add(nt);let Mt=new pe(new Qe(1,1),ye(Ws,{uColor:{value:new Lt(.55,.9,.8)},uIntensity:{value:.18}},un));Mt.position.set(0,40,0),Mt.scale.setScalar(120),R.add(Mt);let St=new An;St.position.copy(R.position),St.scale.copy(R.scale);for(let Rt of[rt,nt,Mt])R.remove(Rt),Rt.position.applyAxisAngle(new D(0,1,0),R.rotation.y),St.add(Rt);R.traverse(Rt=>{Rt.frustumCulled=!1}),St.traverse(Rt=>{Rt.frustumCulled=!1}),_.add(R,St),h.billboards=[rt,nt,Mt]}let Z=qs(28.6)/100,_t=en(28.6,-81.32),At=new An;At.position.copy(_t),i.add(At);let Tt=(T,R,E=0)=>en(T,R,E).sub(_t),A=wu(1875);{let T=ye(Ao,{uMode:{value:0},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new xt},uUnitsPerM:{value:Z},uStreetCol:{value:new Lt("#ffad5c")},uDensity:{value:1},uTime:r,...uc(),...c},Pi());h.orlGround=T;let R=new pe(new co(0,1,96),T);R.geometry.rotateX(-Math.PI/2),R.scale.setScalar(380),R.position.y=-.2,R.renderOrder=-8,R.frustumCulled=!1,At.add(R)}let J=[["Lake Eola",28.5434,-81.3725,165,150,0],["Lake Lucerne",28.5335,-81.3795,170,110,.3],["Lake Cherokee",28.531,-81.3685,120,90,0],["Lake Davis",28.5293,-81.3737,130,110,.2],["Lake Ivanhoe",28.5665,-81.378,280,620,.15],["Lake Highland",28.56,-81.369,150,130,0],["Lake Dot",28.552,-81.385,100,90,0],["Lake Adair",28.565,-81.399,260,300,0],["Lake Concord",28.564,-81.3925,150,120,0],["Lake Underhill",28.534,-81.333,700,380,.2],["Lake Baldwin",28.569,-81.322,420,360,0],["Lake Virginia",28.5915,-81.342,620,520,.4],["Lake Maitland",28.625,-81.355,900,800,.2],["Lake Killarney",28.603,-81.375,520,420,0],["Lake Howell",28.628,-81.29,600,700,.3],["Red Bug Lake",28.648,-81.266,260,200,.5],["Lake Jesup",28.722,-81.235,7200,2500,.28],["Lake Fairview",28.59,-81.405,700,600,0],["Lake Rowena",28.564,-81.362,180,160,0],["Lake Barton",28.59,-81.32,300,250,.3],["Lake Burkett",28.61,-81.275,400,280,.6]].map(([T,R,E,L,V,Y])=>{let j=Tt(R,E);return{name:T,x:j.x,z:j.z,rx:L*Z,rz:V*Z,rot:Y}});for(let T=0;T<(s?70:140);T++){let R=28.4+A()*.42,E=-81.52+A()*.36,L=Tt(R,E),V=(60+Math.pow(A(),2)*420)*Z;J.some(Y=>Math.hypot(Y.x-L.x,Y.z-L.z)<Y.rx+V+.5)||$s(R,E,28.5415,-81.379)<900||J.push({name:"",x:L.x,z:L.z,rx:V,rz:V*(.6+A()*.6),rot:A()*3})}let ct=(T,R,E=0)=>J.some(L=>{let V=T-L.x,Y=R-L.z,j=Math.cos(L.rot),et=Math.sin(L.rot),rt=(V*j-Y*et)/(L.rx+E),nt=(V*et+Y*j)/(L.rz+E);return rt*rt+nt*nt<1});{let T=ye(Eo,{uTime:r,uUnitsPerM:{value:Z},uZenith:l,...f,...c},Pi());for(let R of J){let E=[],V=A()*10;for(let j=0;j<40;j++){let et=j/40*Math.PI*2,rt=1+.08*Math.sin(et*3+V)+.05*Math.sin(et*5+V*2),nt=Math.cos(et)*R.rx*rt,Mt=Math.sin(et)*R.rz*rt,St=Math.cos(R.rot),Rt=Math.sin(R.rot);E.push([R.x+nt*St+Mt*Rt,R.z-nt*Rt+Mt*St])}let Y=gs([E],T,-.15);Y.renderOrder=-7,At.add(Y),h.waterMeshes.push(Y)}}let pt=[["I-4",46,[[28.43,-81.47],[28.475,-81.432],[28.507,-81.4],[28.528,-81.39],[28.546,-81.3855],[28.57,-81.377],[28.6,-81.367],[28.64,-81.354],[28.668,-81.343],[28.7,-81.33],[28.735,-81.318]]],["SR 408",36,[[28.537,-81.48],[28.537,-81.42],[28.5405,-81.392],[28.5395,-81.36],[28.537,-81.32],[28.53,-81.27],[28.528,-81.21]]],["SR 436",28,[[28.46,-81.307],[28.52,-81.309],[28.56,-81.31],[28.6,-81.318],[28.64,-81.33],[28.668,-81.34],[28.7,-81.355]]],["SR 417",34,[[28.5,-81.2],[28.56,-81.22],[28.62,-81.24],[28.68,-81.27],[28.72,-81.29]]],["Red Bug Lake Rd",22,[[28.6555,-81.33],[28.6545,-81.3],[28.6555,-81.262],[28.656,-81.225]]],["Tuskawilla Rd",20,[[28.62,-81.2605],[28.6555,-81.2605],[28.69,-81.256],[28.704,-81.254]]],["SR 434",24,[[28.697,-81.36],[28.6985,-81.3],[28.696,-81.25],[28.69,-81.2]]],["Orange Ave",18,[[28.5,-81.379],[28.541,-81.379],[28.58,-81.378]]]],ut=[];{let T=[],R=new Lt(2,1.85,1.6),E=new Lt(2.4,.18,.08);for(let[,L,V]of pt){let Y=V.map(([nt,Mt])=>Tt(nt,Mt)),et=new ls(Y).getPoints(Y.length*12),rt=new pe(Au(et,L*Z,.03),ye(lc,{uColor:{value:new Lt("#ffb066")},uIntensity:{value:L>30?.75:.45},uTime:r,uDash:{value:0},uDraw:{value:1},uFogOn:{value:1},...c},un));rt.frustumCulled=!1,At.add(rt);for(let nt=1;nt<et.length;nt++)if(ut.push([et[nt-1],et[nt]]),nt%2===0){let Mt=et[nt-2].clone().setY(.05),St=et[nt].clone().setY(.05),Rt=L>30?s?2:4:1;for(let qt=0;qt<Rt;qt++){let Qt=qt%2===0;T.push([Qt?Mt:St,Qt?St:Mt,Math.random(),.15+Math.random()*.15,Qt?R:E])}}}At.add(Zs(T,{uTime:r,uPixelRatio:o,uSize:{value:16},...c}))}let kt=(T,R,E)=>ut.some(([L,V])=>{let Y=V.x-L.x,j=V.z-L.z,et=Math.max(0,Math.min(1,((T-L.x)*Y+(R-L.z)*j)/(Y*Y+j*j)));return Math.hypot(T-L.x-Y*et,R-L.z-j*et)<E}),yt=Tt(28.5434,-81.3725),Ut=new Po;Ut.florida=!0;{let T=Tt(28.5415,-81.3795),R=60*Z;h.downtownGrid={origin:T.clone().add(new D(-30*Z,0,-30*Z)),block:120};for(let E=T.x-16*R;E<T.x+16*R;E+=R)for(let L=T.z-16*R;L<T.z+16*R;L+=R){let V=Math.hypot(E-T.x,L-T.z)/Z;if(V>1300||ct(E,L,25*Z)||kt(E,L,30*Z)||A()<.3||E>yt.x+120*Z||Math.hypot(E-yt.x,L-yt.z)<260*Z)continue;let Y=Math.exp(-((V/420)**2)),j=8+A()*18+Y*120*Math.exp(hc(A)*.45);j=Math.min(j,140),Ro(Ut,A,E+(A()-.5)*R*.08,L+(A()-.5)*R*.08,R*(.55+A()*.25),R*(.55+A()*.25),j*Z,0,j>60&&A()<.75?1:3,Z)}}{let T=Tt(28.5446,-81.377),R=15,E=12*Z,L=1.6*Z,V=new mn(1,1,1),Y=ye(fu,{uHot:{value:-1},uDraw:{value:0},uTime:r,uCount:{value:R},uZenith:l,...c},{transparent:!1}),j=new En(V,Y,R),et=new Float32Array(R),rt=new ke;for(let nt=0;nt<R;nt++){let Mt=1-nt*.012;rt.position.set(T.x,6*Z+nt*(E+L)+E/2,T.z),rt.rotation.set(0,.35+nt*.012,0),rt.scale.set(44*Z*Mt,E,30*Z*Mt),rt.updateMatrix(),j.setMatrixAt(nt,rt.matrix),et[nt]=nt}V.setAttribute("aFloor",new je(et,1)),j.frustumCulled=!1,j.userData.keep=!0,At.add(j),h.tower={mesh:j,uniforms:Y.uniforms,floorLocal:nt=>T.clone().setY(6*Z+nt*(E+L)+E/2),base:T,n:R}}{let T=Tt(28.5432,-81.3727,12),R=new pe(new Qe(1,1),ye(Ws,{uColor:{value:new Lt(.6,.8,1)},uIntensity:{value:1.1}},un));R.position.copy(T),R.scale.setScalar(40*Z),At.add(R),h.billboards.push(R),h.fountain=R}let ie=[],gt=[],Ct=[],$t=[],Xt=[],zt=[],se=(T,R,E,L)=>{A()<L?$t.push([T,R,(8+A()*6)*Z,A()]):Ct.push([T,R,E*Z,A()])},ne=(T,R,E,L,V,Y,j,et,rt,nt=1,Mt=.35)=>{ie.push([T,R,E,L,V,Y,A()]),A()<.28&&gt.push([T+j*.55,R+et*.55,8*Z,4.5*Z,Y,A()]),A()<.65&&se(T+j*.95+(A()-.5)*rt*.6,R+et*.95+(A()-.5)*rt*.6,(5+A()*5)*nt,Mt),A()<.4&&se(T-j*.8+(A()-.5)*rt*.6,R-et*.8+(A()-.5)*rt*.6,(4+A()*3.5)*nt,Mt*1.3)},ge=[[28.6555,-81.2605,s?1300:1900,s?.55:.8],[28.638,-81.29,s?700:1100,.6],[28.672,-81.233,s?600:1e3,.55],[28.565,-81.392,s?600:900,.6],[28.524,-81.362,s?500:800,.55],[28.5428,-81.3645,s?600:820,.8],[28.5545,-81.369,s?400:550,.7],[28.5432,-81.3683,420,.85]],H=Tt(28.5415,-81.3795);{let T=22*Z,R=34*Z,E=14*Z,L=R*2+E,V=L*4;for(let[St,Rt,qt,Qt]of ge){let jt=Tt(St,Rt),oe=qt*Z;for(let he=jt.x-oe;he<jt.x+oe;he+=V)for(let Nt=jt.z-oe;Nt<jt.z+oe;Nt+=V){if(Math.hypot(he-jt.x,Nt-jt.z)>oe-V*.3)continue;let Jt=(A()-.5)*.8,te=Math.cos(Jt),Wt=Math.sin(Jt),ue=(B,Q)=>[he+B*te-Q*Wt,Nt+B*Wt+Q*te];for(let B=0;B<=4;B++){let Q=-V/2+B*L,[tt,X]=ue(-V/2,Q),[vt,Et]=ue(V/2,Q);zt.push([tt,X,vt,Et,9*Z])}for(let B of[-V/2,V/2]){let[Q,tt]=ue(B,-V/2),[X,vt]=ue(B,V/2);zt.push([Q,tt,X,vt,9*Z])}let w=Math.floor((V-2*10*Z)/T);for(let B=0;B<4;B++)for(let Q=0;Q<w;Q++)for(let tt of[-1,1]){if(A()>Qt)continue;let X=-V/2+10*Z+(Q+.5)*T,vt=-V/2+B*L+L/2,Et=vt+tt*(R/2+2*Z),[Pt,It]=ue(X,Et);if(ct(Pt,It,16*Z)||kt(Pt,It,24*Z)||Pt<yt.x+120*Z&&Math.hypot(Pt-H.x,It-H.z)<1150*Z||Math.hypot(Pt-yt.x,It-yt.z)<250*Z)continue;let Zt=ue(X,vt);ne(Pt,It,(12+A()*6)*Z,(10+A()*4)*Z,(A()<.3?6:3.3)*Z,-Jt,Zt[0]-Pt,Zt[1]-It,T)}}}let Y=Tt(28.556,-81.356),j=130*Z,et=210*Z,rt=1040*Z,nt=Y.x-rt,Mt=Y.z-rt;for(let St=nt;St<=Y.x+rt+1e-6;St+=j)Xt.push([new D(St,.06,Mt),new D(St,.06,Y.z+rt)]);for(let St=Mt;St<=Y.z+rt+1e-6;St+=et)Xt.push([new D(nt,.06,St),new D(Y.x+rt,.06,St)]);for(let St=nt;St<Y.x+rt-1e-6;St+=j)for(let Rt=Mt;Rt<Y.z+rt-1e-6;Rt+=et){Xt.push([new D(St+j/2,.06,Rt+8*Z),new D(St+j/2,.06,Rt+et-8*Z)]);let qt=6+Math.floor(A()*3);for(let Qt=1;Qt<qt;Qt++)Xt.push([new D(St+8*Z,.06,Rt+et*Qt/qt),new D(St+j-8*Z,.06,Rt+et*Qt/qt)]);for(let Qt=0;Qt<2;Qt++)for(let jt=0;jt<qt;jt++){let oe=St+j*(Qt===0?.27:.73),he=Rt+et*(jt+.5)/qt;if(ct(oe,he,12*Z)||A()<.08)continue;let Nt=(St+j/2-oe)*.9;ne(oe,he,j/2*.42,et/qt*.6,(A()<.25?6:3.3)*Z,0,Nt,0,et/qt,1.5,.12)}}h.parcelCenter=Y,h.parcelGrid={origin:new D(nt,0,Mt),bw:130,bh:210,span:1040}}{let T=[];for(let L=0;L<48;L++){let V=L/48*Math.PI*2;T.push([yt.x+Math.cos(V)*255*Z,yt.z+Math.sin(V)*235*Z])}let R=ye(Ao,{uMode:{value:2},uGridInv:{value:new Float32Array(4)},uGridOrigin:{value:new xt},uUnitsPerM:{value:Z},uStreetCol:{value:new Lt("#ffd9a0")},uDensity:{value:1},uTime:r,...uc(),...c},Pi()),E=gs([T],R,-.18);E.renderOrder=-7.5,At.add(E)}for(let T=0;T<70;T++){let R=A()*Math.PI*2,E=(185+A()*60)*Z,L=yt.x+Math.cos(R)*E,V=yt.z+Math.sin(R)*E*.92;ct(L,V,8*Z)||(A()<.35?$t.push([L,V,(9+A()*5)*Z,A()]):Ct.push([L,V,(6+A()*6)*Z,A()]))}{let T=[],R=[];for(let[Y,j,et,rt,nt]of zt){let Mt=Math.hypot(et-Y,rt-j),St=Math.max(1,Math.round(Mt/(40*Z))),Rt=(et-Y)/Mt,Qt=-((rt-j)/Mt)*nt/2,jt=Rt*nt/2;for(let oe=0;oe<St;oe++){let he=Y+(et-Y)*(oe/St),Nt=j+(rt-j)*(oe/St),Jt=Y+(et-Y)*((oe+1)/St),te=j+(rt-j)*((oe+1)/St);if(ct((he+Jt)/2,(Nt+te)/2,4*Z))continue;let Wt=Mt*(oe/St)/Z/32,ue=Mt*((oe+1)/St)/Z/32;T.push(he+Qt,.03,Nt+jt,he-Qt,.03,Nt-jt,Jt+Qt,.03,te+jt,he-Qt,.03,Nt-jt,Jt-Qt,.03,te-jt,Jt+Qt,.03,te+jt),R.push(Wt,0,Wt,1,ue,0,Wt,1,ue,1,ue,0)}}let L=new Se;L.setAttribute("position",new re(T,3)),L.setAttribute("uv",new re(R,2));let V=new pe(L,ye(cc,{uColor:{value:new Lt("#ffb56b")},...c},un));V.frustumCulled=!1,At.add(V)}{let T=h.orlGround.uniforms,R=Y=>[(Y.x+_t.x)/Z,(Y.z+_t.z)/Z],E=h.downtownGrid;T.uAlignA.value=[...R(E.origin),1500,0],T.uAlignAS.value=[E.block,E.block];let L=h.parcelGrid,V=R(h.parcelCenter);T.uAlignB.value=[V[0],V[1],L.span,0],T.uAlignBS.value=[L.bw,L.bh],T.uAlignBO.value=R(L.origin),ge.forEach(([Y,j,et],rt)=>{let nt=Tt(Y,j),[Mt,St]=R(nt);T.uHoods.value[rt].set(Mt,St,et)})}{let T=[],R=[];for(let V of J){if(!V.name)continue;let Y=48,j=Math.PI*(V.rx+V.rz)/Z,et=10*Z;for(let rt=0;rt<Y;rt++){let nt=(ue,w)=>{let B=Math.cos(ue)*(V.rx+w),Q=Math.sin(ue)*(V.rz+w),tt=Math.cos(V.rot),X=Math.sin(V.rot);return[V.x+B*tt+Q*X,V.z-B*X+Q*tt]},Mt=rt/Y*Math.PI*2,St=(rt+1)/Y*Math.PI*2,[Rt,qt]=nt(Mt,6*Z),[Qt,jt]=nt(St,6*Z),[oe,he]=nt(Mt,6*Z+et),[Nt,Jt]=nt(St,6*Z+et),te=j*rt/Y/26,Wt=j*(rt+1)/Y/26;T.push(Rt,.04,qt,oe,.04,he,Qt,.04,jt,oe,.04,he,Nt,.04,Jt,Qt,.04,jt),R.push(te,0,te,1,Wt,0,te,1,Wt,1,Wt,0)}}let E=new Se;E.setAttribute("position",new re(T,3)),E.setAttribute("uv",new re(R,2));let L=new pe(E,ye(cc,{uColor:{value:new Lt("#ffd6a0")},...c},un));L.frustumCulled=!1,At.add(L)}{let T=new ke,R=ie.length,E={uTime:r,uZenith:l,uUnitsPerM:{value:Z},...c},L=ye(ru,E),V=new Float32Array(R);ie.forEach((Nt,Jt)=>{V[Jt]=Nt[6]});let Y=new mn(1,1,1);Y.translate(0,.5,0),Y.setAttribute("aSeed",new je(V,1));let j=new En(Y,L,Math.max(1,R)),et=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-.18,1,0],[.18,1,0]],rt=[[0,5,1],[0,4,5],[2,5,4],[2,4,3],[1,5,2],[3,4,0],[0,1,2],[0,2,3]],nt=new Float32Array(rt.length*9);rt.forEach((Nt,Jt)=>Nt.forEach((te,Wt)=>nt.set(et[te],Jt*9+Wt*3)));let Mt=new Se;Mt.setAttribute("position",new be(nt,3)),Mt.setAttribute("uv",new be(new Float32Array(nt.length/3*2).map((Nt,Jt)=>Jt%2?2:0),2)),Mt.computeVertexNormals(),Mt.setAttribute("aSeed",new je(V,1));let St=new En(Mt,L,Math.max(1,R));ie.forEach(([Nt,Jt,te,Wt,ue,w],B)=>{T.position.set(Nt,0,Jt),T.rotation.set(0,w,0),T.scale.set(te,ue,Wt),T.updateMatrix(),j.setMatrixAt(B,T.matrix),T.position.set(Nt,ue,Jt),T.scale.set(te*1.08,Math.min(te,Wt)*.36,Wt*1.12),T.updateMatrix(),St.setMatrixAt(B,T.matrix)}),j.frustumCulled=St.frustumCulled=!1,At.add(j,St);let Rt=new Qe(1,1);Rt.rotateX(-Math.PI/2);let qt=new En(Rt,ye(lu,{uTime:r,...c}),Math.max(1,gt.length)),Qt=new Float32Array(gt.length);gt.forEach(([Nt,Jt,te,Wt,ue,w],B)=>{T.position.set(Nt,.02,Jt),T.rotation.set(0,ue,0),T.scale.set(te,1,Wt),T.updateMatrix(),qt.setMatrixAt(B,T.matrix),Qt[B]=w}),Rt.setAttribute("aSeed",new je(Qt,1)),qt.frustumCulled=!1,At.add(qt);let jt=new lo(1,2),oe=new En(jt,ye(ou,{uZenith:l,...c}),Math.max(1,Ct.length)),he=new Float32Array(Ct.length);Ct.forEach(([Nt,Jt,te,Wt],ue)=>{T.position.set(Nt,te*.75,Jt),T.rotation.set(0,Wt*7,0),T.scale.set(te,te*.62,te),T.updateMatrix(),oe.setMatrixAt(ue,T.matrix),he[ue]=Wt}),jt.setAttribute("aSeed",new je(he,1)),oe.frustumCulled=!1,At.add(oe);{let Nt=[],Jt=[],te=[],Wt=(vt,Et,Pt)=>{Nt.push(...vt),Jt.push(...Et),te.push(Pt)};for(let vt=0;vt<5;vt++){let Et=vt/5*Math.PI*2,Pt=(vt+1)/5*Math.PI*2,It=.032,Zt=.022,Kt=(ve,xe,Ce)=>[Math.cos(ve)*xe+Ce*Ce*.05,Ce,Math.sin(ve)*xe],Bt=[Math.cos(Et),0,Math.sin(Et)],fe=[Math.cos(Pt),0,Math.sin(Pt)];Wt(Kt(Et,It,0),Bt,0),Wt(Kt(Pt,It,0),fe,0),Wt(Kt(Pt,Zt,.9),fe,0),Wt(Kt(Et,It,0),Bt,0),Wt(Kt(Pt,Zt,.9),fe,0),Wt(Kt(Et,Zt,.9),Bt,0)}let w=[.04,.9,0],B=9;for(let vt=0;vt<B;vt++){let Et=vt/B*Math.PI*2+vt%2*.2,Pt=Math.cos(Et),It=Math.sin(Et),Zt=4,Kt=Bt=>[w[0]+Pt*Bt*.42,w[1]+.08*Math.sin(Bt*Math.PI*.6)-.22*Bt*Bt,w[2]+It*Bt*.42];for(let Bt=0;Bt<Zt;Bt++){let fe=Bt/Zt,ve=(Bt+1)/Zt,xe=.07*Math.sin(Math.PI*Math.min(.95,fe+.08)),Ce=.07*Math.sin(Math.PI*Math.min(.95,ve+.08)),ae=Kt(fe),Gt=Kt(ve),Re=-It,de=Pt,Oe=[[ae[0]+Re*xe,ae[1]-.02,ae[2]+de*xe],[ae[0]-Re*xe,ae[1]-.02,ae[2]-de*xe],[Gt[0]+Re*Ce,Gt[1]-.02,Gt[2]+de*Ce],[Gt[0]-Re*Ce,Gt[1]-.02,Gt[2]-de*Ce]],Ue=[0,1,0];Wt(Oe[0],Ue,1),Wt(Oe[2],Ue,1),Wt(ae,Ue,1),Wt(ae,Ue,1),Wt(Oe[2],Ue,1),Wt(Gt,Ue,1),Wt(Oe[1],Ue,1),Wt(ae,Ue,1),Wt(Oe[3],Ue,1),Wt(ae,Ue,1),Wt(Gt,Ue,1),Wt(Oe[3],Ue,1)}}let Q=new Se;Q.setAttribute("position",new re(Nt,3)),Q.setAttribute("normal",new re(Jt,3)),Q.setAttribute("aPart",new re(te,1));let tt=new Float32Array($t.length),X=new En(Q,ye(au,{uTime:r,uZenith:l,...c},{side:cn}),Math.max(1,$t.length));$t.forEach(([vt,Et,Pt,It],Zt)=>{T.position.set(vt,0,Et),T.rotation.set(0,It*6.28,0),T.scale.setScalar(Pt),T.updateMatrix(),X.setMatrixAt(Zt,T.matrix),tt[Zt]=It}),Q.setAttribute("aSeed",new je(tt,1)),X.frustumCulled=!1,At.add(X)}h.homeCount=R}let Ot={uTime:r,uUnitsPerM:{value:Z},uHot:{value:-1},uHotOn:{value:0},uZenith:l,...lt,...c};At.add(Ut.mesh(ye(ac,Ot)));{let T=new Float32Array(Xt.length*6);Xt.forEach(([V,Y],j)=>T.set([V.x,V.y,V.z,Y.x,Y.y,Y.z],j*6));let R=new Se;R.setAttribute("position",new be(T,3));let E=new Ee({vertexShader:"varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`uniform float uOn; uniform vec3 uPointer; uniform float uPointerOn; uniform vec3 uCenter; uniform float uSpan; varying vec3 vP;
        void main(){ float d = length(vP.xz - uPointer.xz); float near = exp(-d*d/(uSpan*uSpan*0.012)) * uPointerOn;
          float edge = 1.0 - smoothstep(0.6, 1.0, length(vP.xz - uCenter.xz) / uSpan);
          vec3 c = mix(vec3(0.42,0.6,1.0), vec3(1.0,0.82,0.55), near) * (0.32 + near * 3.0);
          gl_FragColor = vec4(c * uOn * edge, 1.0); }`,uniforms:{uOn:{value:0},uPointer:{value:new D(1e6,0,1e6)},uPointerOn:{value:0},uCenter:{value:new D().copy(h.parcelCenter).add(_t)},uSpan:{value:1100*Z}},...un}),L=new Qr(R,E);L.frustumCulled=!1,L.userData.keep=!0,At.add(L),h.parcels=E,h.parcelLines=L}let it=(T,R=0)=>en(T.lat,T.lon,R);h.offices=[_n.nyOffice,_n.orlandoOffice].map((T,R)=>{let E=it(T),L=ye(uu,{uTime:r,uOn:{value:1},uColor:{value:new Lt(1,.8,.5)}},{...un,side:cn}),V=new pe(new Qe(1,1),L);V.geometry.rotateX(-Math.PI/2),V.position.copy(E).setY(E.y+.06),V.frustumCulled=!1,i.add(V);let Y=ye(hu,{uColor:{value:new Lt(1,.78,.45)},uIntensity:{value:1.4},uTime:r},{...un,side:cn}),j=new pe(new vn(1,1,1,24,1,!0),Y);return j.geometry.translate(0,.5,0),j.position.copy(E),j.frustumCulled=!1,i.add(j),h.hit.push({center:E,r:0,chapter:R===0?2:3,label:Fe(R===0?"New York \xB7 Commercial":"Florida \xB7 Commercial & residential"),place:T}),{...T,id:R===0?"new-york":"orlando",pos:E,ring:V,beam:j,ringMat:L,beamMat:Y}});{let T=h.offices[0].pos,R=h.offices[1].pos,E=[];for(let j=0;j<=64;j++){let et=j/64,rt=T.clone().lerp(R,et);rt.y=Math.sin(Math.PI*et)*2600+2,E.push(rt)}let L=new uo(new ls(E),200,40,8,!1),V=new Ee({vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vP = wp.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*wp; }",fragmentShader:`uniform float uTime; uniform float uDraw; uniform float uOn; varying vec2 vUv; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 V = normalize(cameraPosition - vP); float core = pow(clamp(abs(dot(normalize(vN), V)), 0.0, 1.0), 1.5);
          float d = fract(vUv.x * 9.0 - uTime * 0.25); float dash = 0.35 + 1.5 * smoothstep(0.82, 1.0, d);
          float shown = step(vUv.x, uDraw);
          gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * core * dash * shown * uOn * 1.4, 1.0); }`,uniforms:{uTime:r,uDraw:{value:0},uOn:{value:0}},...un}),Y=new pe(L,V);Y.frustumCulled=!1,i.add(Y),h.arc=V}{let T=ye(du,{uTime:r,uOpacity:{value:0},uZenith:l,...c},{transparent:!0,depthWrite:!1}),R=new Qe(1,1);R.rotateX(-Math.PI/2);let E=new pe(R,T);E.scale.set(8e4,1,8e4),E.position.set((v.x+_t.x)/2,95,(v.z+_t.z)/2),E.renderOrder=5,E.frustumCulled=!1,i.add(E),h.clouds=T}return h.stats={orlBuildings:Ut.items.length,trees:Ct.length,palms:$t.length,pools:gt.length,streets:zt.length,lakes:J.length},h.nyc={group:_,upm:u,L:p,center:v},h.orl={group:At,upm:Z,L:Tt,center:_t},h}var av="https://tiles.openfreemap.org/planet",Cn={land:"#0d111c",water:"#04060c",shore:"#24395e",park:"#0d1716",bld:"#131926",bldLine:"#1a2231",minor:"#1a2131",major:"#262f45",motor:"#33405f",state:"#2a3550"};function lv(){let i=(t,e,n,s,r=0)=>({id:t,type:"line",source:"omt","source-layer":"transportation",minzoom:r,filter:["all",["in",["geometry-type"],["literal",["LineString","MultiLineString"]]],["in",["get","class"],["literal",e]],["!=",["get","brunnel"],"tunnel"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":n,"line-width":["interpolate",["exponential",1.6],["zoom"],...s]}});return{version:8,sources:{omt:{type:"vector",url:av}},layers:[{id:"land",type:"background",paint:{"background-color":Cn.land}},{id:"park",type:"fill",source:"omt","source-layer":"park",paint:{"fill-color":Cn.park}},{id:"green",type:"fill",source:"omt","source-layer":"landcover",filter:["in",["get","class"],["literal",["grass","wood"]]],paint:{"fill-color":Cn.park,"fill-opacity":.6}},{id:"water",type:"fill",source:"omt","source-layer":"water",filter:["!=",["get","brunnel"],"tunnel"],paint:{"fill-color":Cn.water}},{id:"shore",type:"line",source:"omt","source-layer":"water",filter:["!=",["get","brunnel"],"tunnel"],paint:{"line-color":Cn.shore,"line-width":["interpolate",["linear"],["zoom"],5,.3,10,.6,15,1.2]}},{id:"buildings",type:"fill",source:"omt","source-layer":"building",minzoom:12.5,paint:{"fill-color":Cn.bld,"fill-outline-color":Cn.bldLine,"fill-opacity":["interpolate",["linear"],["zoom"],12.5,0,13.6,1]}},i("roads-minor",["minor","service"],Cn.minor,[11,.2,14,.7,17,3],11),i("roads-major",["primary","secondary","tertiary"],Cn.major,[8,.25,12,.8,16,3.5],7),i("roads-motor",["motorway","trunk"],Cn.motor,[5,.3,10,1,15,4]),{id:"states",type:"line",source:"omt","source-layer":"boundary",maxzoom:9,filter:["==",["get","admin_level"],4],paint:{"line-color":Cn.state,"line-width":.8,"line-dasharray":[3,2]}}]}}var fc=[_n.nyOffice.lon,_n.nyOffice.lat],Dn=[_n.orlandoOffice.lon,_n.orlandoOffice.lat];var Io=[{c:[-74.2,40.55],z:7.6,b:0},{c:[-74,40.728],z:11.7,b:29},{c:[-81.34,28.59],z:9.9,b:0},{c:[-81.282,28.67],z:11.3,b:0},{c:[-81.2605,28.6555],z:11,b:0},{c:[-77.7,34.5],z:4.75,b:0},{c:[-81.36,28.58],z:8.9,b:0},{c:[-77.7,34.5],z:4.9,b:0}],cv=[["Office",-81.377,28.547],["Retail",-81.393,28.664],["Industrial",-81.296,28.789],["Multifamily",-81.262,28.406],["Hospitality",-81.469,28.433],["Healthcare",-81.233,28.372],["Mixed use",-81.351,28.597],["Land development",-81.185,28.535],["Storage",-81.325,28.702],["Restaurants",-81.364,28.569],["Churches",-81.24,28.661],["Special purpose",-81.308,28.482]],hv=[["Downtown Orlando",-81.3792,28.5383],["Lake Mary",-81.3178,28.7589],["Maitland",-81.3631,28.6278],["Altamonte Springs",-81.3656,28.6611],["Sanford",-81.2695,28.8003],["Lake Nona",-81.247,28.417],["International Drive",-81.47,28.44]],uv=[["Financial District",-74.011,40.7075],["Midtown",-73.984,40.7549],["Hudson Yards",-74.001,40.7536],["Downtown Brooklyn",-73.9903,40.6928],["Long Island City",-73.9485,40.7447],["Jersey City",-74.0431,40.7178]],fv=[["Winter Springs",-81.3081,28.6989],["Oviedo",-81.2081,28.67],["Casselberry",-81.3279,28.6778],["Longwood",-81.3384,28.7031],["Lake Mary",-81.3178,28.7589],["Winter Park",-81.3392,28.6],["East Orlando \xB7 UCF",-81.2001,28.6024]],dv=[["Orlando",-81.3792,28.5383],["Kissimmee",-81.4076,28.292],["Sanford",-81.2695,28.8003],["Clermont",-81.7729,28.5494],["Lake Nona",-81.247,28.417],["Winter Park",-81.3392,28.6],["Daytona Beach",-81.0228,29.2108]];function pv(i,t,e=.18,n=48){let s=(i[0]+t[0])/2,r=(i[1]+t[1])/2,o=t[0]-i[0],a=t[1]-i[1],l=s-a*e,c=r+o*e,h=[];for(let f=0;f<=n;f++){let d=f/n,u=1-d;h.push([u*u*i[0]+2*u*d*l+d*d*t[0],u*u*i[1]+2*u*d*c+d*d*t[1]])}return h}function mv(i){let t=[],e=[],n=(r,o,a)=>t.push({type:"Feature",id:t.length+1,properties:{key:r,...a},geometry:{type:"Point",coordinates:o}}),s=(r,o,a,l,c,h={})=>e.push({type:"Feature",id:e.length+1,properties:{key:r,ch:l.join(","),...h},geometry:{type:"LineString",coordinates:pv(o,a,c)}});return n("hub-ny",fc,{kind:"hub",label:"New York \xB7 276 Fifth Ave.",ch:"1,5,7",office:"new-york"}),n("hub-fl",Dn,{kind:"hub",label:"Winter Springs, FL",ch:"2,3,4,5,6,7",office:"orlando"}),uv.forEach(([r,o,a],l)=>{n(`d${l}`,[o,a],{kind:"node",label:r,ch:"1"}),s(`d${l}`,fc,[o,a],[1],l%2?.2:-.2)}),cv.forEach(([r,o,a],l)=>{let c=[o,a];n(`t${l}`,c,{kind:"node",label:r,ch:"2",type:l,quiet:1}),s(`t${l}`,Dn,c,[2],l%2?.22:-.22,{type:l})}),hv.forEach(([r,o,a],l)=>{n(`c${l}`,[o,a],{kind:"node",label:r,ch:"2"}),s(`c${l}`,Dn,[o,a],[2],l%2?.16:-.16)}),fv.forEach(([r,o,a],l)=>{n(`h${l}`,[o,a],{kind:"node",label:r,ch:"3"}),s(`h${l}`,Dn,[o,a],[3],l%2?.18:-.18)}),i.forEach((r,o)=>{let a=o/i.length*Math.PI*2-Math.PI/2,l=[Dn[0]+Math.cos(a)*.05/Math.cos(Dn[1]*Math.PI/180),Dn[1]+Math.sin(a)*.05];n(`s${o}`,l,{kind:"node",label:`${String(o+1).padStart(2,"0")} \xB7 ${r}`,short:String(o+1).padStart(2,"0"),ch:"4",service:o,quiet:1}),s(`s${o}`,Dn,l,[4],.08,{service:o})}),dv.forEach(([r,o,a],l)=>{n(`m${l}`,[o,a],{kind:"node",label:r,ch:"6"}),s(`m${l}`,Dn,[o,a],[6],l%2?.15:-.15)}),s("ny-fl",fc,Dn,[1,2,5,7],.12,{long:1}),{nodes:t,edges:e}}function Tu({container:i,services:t}){let e=window.maplibregl,n=new e.Map({container:i,style:lv(),center:Io[0].c,zoom:Io[0].z,bearing:0,interactive:!1,attributionControl:{compact:!0},fadeDuration:0,renderWorldCopies:!1,pixelRatio:Math.min(window.devicePixelRatio||1,2)}),s=mv(t),r={type:"FeatureCollection",features:[]},o=!1;n.on("style.load",()=>{n.addSource("edges",{type:"geojson",data:{type:"FeatureCollection",features:s.edges}}),n.addSource("nodes",{type:"geojson",data:{type:"FeatureCollection",features:s.nodes}}),n.addSource("pulses",{type:"geojson",data:r});let N=["coalesce",["feature-state","w"],0],g=["coalesce",["feature-state","hot"],0];n.addLayer({id:"edges",type:"line",source:"edges",layout:{"line-cap":"round"},paint:{"line-color":["case",[">",g,.5],"#ecd1a4","#8fb6ff"],"line-width":["case",[">",g,.5],1.8,["==",["get","long"],1],1.4,1],"line-opacity":["*",N,["case",[">",g,.5],.95,["coalesce",["feature-state","dim"],.42]]]}}),n.addLayer({id:"pulses",type:"circle",source:"pulses",paint:{"circle-radius":["get","r"],"circle-color":["get","c"],"circle-blur":.6,"circle-opacity":["get","o"]}}),n.addLayer({id:"node-halo",type:"circle",source:"nodes",paint:{"circle-radius":["case",["==",["get","kind"],"hub"],16,[">",g,.5],12,7],"circle-color":["case",[">",g,.5],"#ecd1a4","#8fb6ff"],"circle-blur":1,"circle-opacity":["*",N,["case",["==",["get","kind"],"hub"],.35,[">",g,.5],.5,.18]]}}),n.addLayer({id:"node-core",type:"circle",source:"nodes",paint:{"circle-radius":["case",["==",["get","kind"],"hub"],4.5,[">",g,.5],3.6,2.4],"circle-color":["case",[">",g,.5],"#ecd1a4",["==",["get","kind"],"hub"],"#ffffff","#cfe0ff"],"circle-stroke-color":"#8fb6ff","circle-stroke-width":["case",["==",["get","kind"],"hub"],1.5,0],"circle-opacity":N,"circle-stroke-opacity":N}}),o=!0});let a=document.createElement("div");a.className="nm-labels",i.parentNode.appendChild(a);let l=s.nodes.map(N=>{let g=document.createElement("div");return g.className=`nm-label nm-${N.properties.kind}`,g.innerHTML=`<span>${Fe(N.properties.label)}</span>`,a.appendChild(g),{f:N,el:g,shown:!1}}),c=(N,g)=>N.split(",").reduce((b,G)=>Math.max(b,1-Math.min(1,Math.abs(g-+G)*1.7)),0),h={};function f(N,g,b){let G=`${N}:${g}`,W=h[G]||{},U=!1;for(let k in b)if(Math.abs((W[k]??-1)-b[k])>.01){U=!0;break}U&&(h[G]={...W,...b},n.setFeatureState({source:N,id:g},b))}let d=[{keys:null,b:0},{keys:["hub-ny","d"],b:29},{keys:["hub-fl","c","t"],b:0},{keys:["hub-fl","h"],b:0},{keys:["hub-fl","s"],b:0},{keys:["hub-ny","hub-fl"],b:0,behind:!0},{keys:["hub-fl","m"],b:0},{keys:["hub-ny","hub-fl"],b:0,behind:!0}],u=Array.from(document.querySelectorAll(".chapter")),v=".kicker, .eyebrow, h1 .line > span, h2 .line > span, .lede, .body, .note, .services, .types, .consulting, .stats, .listing-links, .crexi, .cta-row, .next-row, .offices, .agent-mini, .agents, .hours, .contact-form, .scroll-cue",_=N=>N?Array.from(N.querySelectorAll(v)):[];function p(N,g=!1){let b=u[N];if(!b)return[];let G=0;if(!g){let k=window.innerHeight,q=document.documentElement.scrollHeight-k,st=b.getBoundingClientRect(),K=N===0?0:Math.min(q,Math.max(0,st.top+window.scrollY+st.height/2-k/2));G=window.scrollY-K}g||document.documentElement.classList.add("nm-measure");let W=document.createRange(),U=_(b).map(k=>(W.selectNodeContents(k),W.getBoundingClientRect())).filter(k=>k.width>2&&k.height>2).map(k=>({l:k.left,t:k.top+G,r:k.right,b:k.bottom+G}));return g||document.documentElement.classList.remove("nm-measure"),U}function m(N,g,b,G=1){let k=g/40,q=b/26,st=g>860,K=(ot,Vt,Ht,z)=>Vt<84||z>b-64||st&&Ht>g-200?!0:N.some($=>Ht>$.l-28&&ot<$.r+28&&z>$.t-22&&Vt<$.b+22),ft=new Array(40).fill(0),ht=null;for(let ot=0;ot<26;ot++){for(let Ht=0;Ht<40;Ht++)ft[Ht]=K(Ht*k,ot*q,(Ht+1)*k,(ot+1)*q)?0:ft[Ht]+1;let Vt=[];for(let Ht=0;Ht<=40;Ht++){let z=Ht<40?ft[Ht]:0;for(;Vt.length&&ft[Vt[Vt.length-1]]>=z;){let $=Vt.pop(),at=ft[$];if(!at)continue;let dt=Vt.length?Vt[Vt.length-1]+1:0,bt=(Ht-dt)*k,Ft=at*q,Yt=Math.min(bt,Ft*G);(!ht||Yt>ht.score*1.03||Yt>ht.score*.97&&bt*Ft>ht.area)&&(ht={score:Yt,area:bt*Ft,x:dt*k,y:(ot-at+1)*q,w:bt,h:Ft})}Vt.push(Ht)}}return ht}/[?&]debug\b/.test(location.search)&&(window.__nm={textRects:p,freeRect:m,frames:()=>y});let y=null;function x(){let N=window.innerWidth,g=window.innerHeight,b=G=>e.MercatorCoordinate.fromLngLat(G);y=d.map((G,W)=>{if(!G.keys)return Io[0];let U=s.nodes.filter(dt=>G.keys.some(bt=>dt.properties.key===bt||bt.length===1&&dt.properties.key.startsWith(bt)&&/\d/.test(dt.properties.key[1]))).map(dt=>dt.geometry.coordinates),k=U.map(dt=>dt[0]),q=U.map(dt=>dt[1]),st=[[Math.min(...k),Math.min(...q)],[Math.max(...k),Math.max(...q)]],K={top:110,bottom:90,left:80,right:N>860?240:60},ft=G.b*Math.PI/180,ht=U.map(dt=>{let bt=b(dt);return[bt.x*Math.cos(ft)-bt.y*Math.sin(ft),bt.x*Math.sin(ft)+bt.y*Math.cos(ft)]}),ot=Math.max(...ht.map(dt=>dt[0]))-Math.min(...ht.map(dt=>dt[0])),Vt=Math.max(...ht.map(dt=>dt[1]))-Math.min(...ht.map(dt=>dt[1])),Ht=Math.min(4,Math.max(.25,(ot+1e-9)/(Vt+1e-9))),z=G.behind?null:m(p(W),N,g,Ht);if(z&&z.w>200&&z.h>=120&&z.score>Math.min(N,g)*.26){let dt=Math.min(90,z.w*.14),bt=Math.min(30,z.h*.08);K={left:z.x+dt,right:N-(z.x+z.w)+dt,top:z.y+bt,bottom:g-(z.y+z.h)+bt}}let $=n.cameraForBounds(st,{padding:K,bearing:G.b,maxZoom:14});return $?{c:$.center.toArray?$.center.toArray():[$.center.lng,$.center.lat],z:$.zoom,b:G.b}:Io[W]})}window.addEventListener("resize",()=>{y=null,l.forEach(N=>{N.w=0})}),document.fonts&&document.fonts.ready.then(()=>{y=null,l.forEach(N=>{N.w=0})}),window.addEventListener("load",()=>{y=null});let S=N=>e.MercatorCoordinate.fromLngLat(N),F=N=>N*N*N*(N*(N*6-15)+10);function I(N,g){let b=Math.min(d.length-2,Math.max(0,Math.floor(N))),G=F(Math.min(1,Math.max(0,N-b)));y||x();let W=y[b],U=y[b+1],k=S(W.c),q=S(U.c),st=Math.hypot(q.x-k.x,q.y-k.y),K=Math.log2(g*.8/(512*Math.max(st,1e-9))),ft=Math.min(W.z,U.z),ht=W.z+(U.z-W.z)*G,ot=G;K<ft-.5&&(ht-=(ht-K)*Math.pow(Math.sin(Math.PI*G),.7),ot=F(G));let Vt=k.x+(q.x-k.x)*ot,Ht=k.y+(q.y-k.y)*ot,z=new e.MercatorCoordinate(Vt,Ht).toLngLat(),$=U.b-W.b;return{center:[z.lng,z.lat],zoom:ht,bearing:W.b+$*G,i:b,t:G}}let P=null,O=-1;return{map:n,get ready(){return o},update(N,g,b,G,W,U,k){if(b<.01)return null;let q=window.innerWidth,st=window.innerHeight,K=I(N,q);if(n.jumpTo({center:K.center,zoom:K.zoom,bearing:K.bearing}),!o)return K;let ft=P&&P.properties.key;for(let z of s.edges){let $=z.properties,at=$.type!==void 0&&$.type===G||$.service!==void 0&&$.service===W||$.key===ft||$.long&&U,dt=$.type!==void 0||$.service!==void 0;f("edges",z.id,{w:c($.ch,N),hot:at?1:0,dim:dt?.22:.42}),z._w=c($.ch,N),z._hot=at}for(let z of s.nodes){let $=z.properties,at=$.type!==void 0&&$.type===G||$.service!==void 0&&$.service===W||$.office&&$.office===U||$.key===ft;z._w=Math.max(c($.ch,N),$.kind==="hub"&&N>.6?.5:0),z._hot=at,f("nodes",z.id,{w:z._w,hot:at?1:0})}r.features.length=0;for(let z of s.edges){if(z._w<.2)continue;let $=z.geometry.coordinates,at=z.id*.618%1,dt=z.properties.long?.12:.28;for(let bt of[0,.5]){let Ft=(g*dt+at+bt)%1,Yt=Ft*($.length-1),ee=Math.floor(Yt),lt=Yt-ee,C=$[ee],wt=$[Math.min($.length-1,ee+1)],mt=Math.sin(Math.PI*Ft);r.features.push({type:"Feature",properties:{r:z._hot?4:2.6,c:z._hot?"#ecd1a4":"#cfe0ff",o:z._w*mt*(z._hot?1:.7)},geometry:{type:"Point",coordinates:[C[0]+(wt[0]-C[0])*lt,C[1]+(wt[1]-C[1])*lt]}})}}if(n.getSource("pulses").setData(r),P=null,k&&k.inside&&!k.overUI){let $=n.queryRenderedFeatures([[k.px-10,k.py-10],[k.px+10,k.py+10]],{layers:["node-core"]}).find(at=>at.state&&at.state.w>.5);$&&(P=s.nodes.find(at=>at.id===$.id)||null)}let ht=p(Math.round(N),!0);document.querySelectorAll(".system-map, .stepper, .telemetry").forEach(z=>{let $=z.getBoundingClientRect();$.width>2&&ht.push({l:$.left,t:$.top,r:$.right,b:$.bottom})});let ot=[],Vt=z=>z.l>8&&z.r<q-8&&z.t>76&&z.b<st-40&&!ht.some($=>z.r>$.l-10&&z.l<$.r+10&&z.b>$.t-6&&z.t<$.b+6)&&!ot.some($=>z.r>$.l-6&&z.l<$.r+6&&z.b>$.t-3&&z.t<$.b+3),Ht=l.slice().sort((z,$)=>($.f.properties.kind==="hub")-(z.f.properties.kind==="hub")||!!$.f._hot-!!z.f._hot);for(let z of Ht){let $=z.f.properties,at=$.quiet&&!z.f._hot,dt=!1;if(z.f._w>.55&&b>.6&&!at){let bt=n.project(z.f.geometry.coordinates);if(!z.w){let Z=z.el.firstElementChild.getBoundingClientRect();z.w=Z.width,z.h=Z.height}let Ft=$.kind==="hub"?16:12,Yt=z.h/2+2,ee={l:bt.x+Ft,r:bt.x+Ft+z.w,t:bt.y-Yt,b:bt.y+Yt},lt={l:bt.x-Ft-z.w,r:bt.x-Ft,t:bt.y-Yt,b:bt.y+Yt},C={l:bt.x-z.w/2,r:bt.x+z.w/2,t:bt.y+10,b:bt.y+10+z.h},wt={l:bt.x-z.w/2,r:bt.x+z.w/2,t:bt.y-10-z.h,b:bt.y-10},mt=[ee,lt,C,wt].find(Vt)||null;mt&&(ot.push(mt),dt=!0,z.el.classList.toggle("is-left",mt===lt),z.el.classList.toggle("is-below",mt===C),z.el.classList.toggle("is-above",mt===wt),z.el.style.transform=`translate3d(${bt.x.toFixed(1)}px, ${bt.y.toFixed(1)}px, 0)`,z.el.classList.toggle("is-hot",!!z.f._hot))}dt!==z.el.classList.contains("is-on")&&z.el.classList.toggle("is-on",dt)}return O=N,K},hideLabels(){l.forEach(N=>N.el.classList.remove("is-on"))},resize(){n.resize()}}}var gv=[{name:"Offices",pos:[25.6,-80.6,27e5],look:[35.6,-77.9,0],ox:.24,oy:.02,my:.1,fov:36,mob:1.25},{name:"Skyline",pos:[40.6868,-74.0525,38],look:[40.695,-74.0345,90],ox:.14,oy:0,my:.2,fov:40,mob:1.15,n:{pos:[40.672,-74.07,900],look:[40.708,-74.01,150],ox:.24}},{name:"Commercial",pos:[40.746,-74.015,230],look:[40.7585,-73.985,190],ox:.27,oy:0,my:.12,fov:40,mob:1.3},{name:"Residential",pos:[28.65,-81.269,115],look:[28.656,-81.26,0],ox:-.27,oy:0,my:.14,fov:40,mob:1.25},{name:"Advisory",pos:[28.5408,-81.3712,95],look:[28.5446,-81.377,105],ox:.28,oy:0,my:.12,fov:40,mob:1.35},{name:"Track record",pos:[28.5418,-81.364,120],look:[28.544,-81.379,55],ox:0,oy:-.08,my:.08,fov:42,mob:1.2},{name:"Listings",pos:[28.5455,-81.356,650],look:[28.556,-81.356,0],ox:-.26,oy:0,my:.12,fov:40,mob:1.25},{name:"Contact",pos:[28.62,-81.305,1500],look:[28.67,-81.245,0],ox:-.12,oy:.05,my:.12,fov:40,mob:1.2}],vv=typeof location<"u"&&new URLSearchParams(location.search).has("night"),pc=gv.map(i=>{let t={...i,...vv&&i.n?i.n:{}};return{...t,P:en(...t.pos),Lk:en(...t.look)}}),Ru=pc.length,dc=i=>i*i*i*(i*(i*6-15)+10),di=(i,t,e)=>i+(t-i)*e,Lo=new D,Cu=new D;function Pu(i,t,e){let n=Math.min(Ru-2,Math.max(0,Math.floor(i))),s=Math.min(1,Math.max(0,i-n)),r=dc(s),o=pc[n],a=pc[n+1],l=Math.max(.05,o.P.y),c=Math.max(.05,a.P.y),h=Math.hypot(a.P.x-o.P.x,a.P.z-o.P.z),f=Math.max(l,c,h*.75),d=f>Math.max(l,c)*1.6,u=d?Math.pow(Math.sin(Math.PI*r),.8):0,v=di(Math.log(l),Math.log(c),r),_=Math.exp(v+(Math.log(f)-v)*u),p=Math.max(l,c)/Math.min(l,c),m=d?dc(dc(r)):p>8?(_-l)/(c-l):r;e.pos.set(di(o.P.x,a.P.x,m),_,di(o.P.z,a.P.z,m)),Lo.copy(o.Lk).lerp(a.Lk,m),d&&(Cu.set(e.pos.x,0,e.pos.z).add(Lo.clone().sub(e.pos).setY(0).normalize().multiplyScalar(_*.35)),Lo.lerp(Cu,u)),e.look.copy(Lo);let y=t<.9;if(e.ox=y?0:di(o.ox,a.ox,r),e.oy=y?di(o.my,a.my,r):di(o.oy,a.oy,r),e.fov=di(o.fov,a.fov,r),y){let x=di(o.mob,a.mob,r)*(1+(.9/t-1)*.3);e.pos.sub(e.look).multiplyScalar(x).add(e.look)}return e.flight=u,e}var Iu=Ru;var Ie=(i,t=document)=>t.querySelector(i),nn=(i,t=document)=>Array.from(t.querySelectorAll(i)),Ii=window.matchMedia("(prefers-reduced-motion: reduce)"),xv=1990,_v=["left","left","left","right","left","center","right","left"];function Lu(i){let t=nn(".chapter"),e=new Date().getFullYear(),n=e-xv;nn(".js-years").forEach(U=>{U.textContent=String(n)});let s=Ie("#year");s&&(s.textContent=String(e));let r=Ie(".nav-toggle"),o=Ie("#nav-list"),a=()=>{r.setAttribute("aria-expanded","false"),o.classList.remove("is-open")};r.addEventListener("click",()=>{let U=r.getAttribute("aria-expanded")!=="true";r.setAttribute("aria-expanded",String(U)),o.classList.toggle("is-open",U),U&&o.querySelector("a").focus()}),document.addEventListener("keydown",U=>{U.key==="Escape"&&o.classList.contains("is-open")&&(a(),r.focus())}),document.addEventListener("click",U=>{let k=U.target.closest('a[href^="#"]');if(!k)return;let q=k.getAttribute("href").slice(1),st=q==="main"?t[0]:document.getElementById(q);if(!st)return;let K=st.closest(".chapter")||st,ft=t.indexOf(K);if(!(ft<0)){if(U.preventDefault(),a(),k.dataset.interest){let ht=Ie("#f-interest");ht&&(ht.value=k.dataset.interest)}l(ft,K)}});function l(U,k=t[U]){let q=i.anchorFor?i.anchorFor(U):k.offsetTop;window.scrollTo({top:q,behavior:Ii.matches?"auto":"smooth"});let st=k.querySelector("h1, h2")||k;st.setAttribute("tabindex","-1"),st.focus({preventScroll:!0}),history.replaceState(null,"",U===0?location.pathname:`#${k.id}`)}i.goToChapter=l,nn(".reveal-stagger").forEach(U=>{Array.from(U.children).forEach((k,q)=>k.style.setProperty("--i",q))});let c=new IntersectionObserver(U=>{for(let k of U)k.isIntersecting&&(k.target.classList.add("is-in"),k.target.id==="record"&&h(k.target),c.unobserve(k.target))},{threshold:.18,rootMargin:"0px 0px -10% 0px"});i.startReveals=()=>t.forEach(U=>c.observe(U));function h(U){nn("[data-count]",U).forEach(k=>{let q=parseInt(k.dataset.count||k.textContent.replace(/,/g,""),10);if(!Number.isFinite(q)||Ii.matches)return;let st=ot=>q>=1e3?ot.toLocaleString("en-US"):String(ot),K=performance.now()+450,ft=1800;k.textContent="0";let ht=ot=>{let Vt=Math.min(1,Math.max(0,(ot-K)/ft)),Ht=Vt===1?1:1-Math.pow(2,-10*Vt);k.textContent=st(Math.round(q*Ht)),Vt<1&&requestAnimationFrame(ht)};requestAnimationFrame(ht)})}let f=nn(".site-nav a"),d=nn(".system-map a"),u=Ie("#sm-fill"),v=Ie("#tm-sector"),_=Ie("#tm-coords"),p=-1,m=Ie("#step-prev"),y=Ie("#step-next"),x=Ie("#step-name"),S=U=>d[U]?d[U].querySelector(".sm-name").textContent:"",F=()=>Math.max(0,p),I=()=>{let U=F();m&&(m.hidden=U===0,m.setAttribute("aria-label",`${Fe("Previous chapter")}: ${S(U-1)}`)),y&&(y.hidden=U>=t.length-1,y.setAttribute("aria-label",`${Fe("Next chapter")}: ${S(U+1)}`),x&&(x.textContent=S(U+1)))},P=new Set,O=new IntersectionObserver(U=>{U.forEach(k=>k.isIntersecting?P.add(k.target):P.delete(k.target)),document.body.classList.toggle("next-visible",P.size>0)});nn(".next-row, #home-port .cta-row, #launch .cta-row").forEach(U=>O.observe(U)),m&&m.addEventListener("click",()=>l(Math.max(0,F()-1))),y&&y.addEventListener("click",()=>l(Math.min(t.length-1,F()+1))),I(),i.setProgress=(U,k,q)=>{if(u&&(u.style.transform=`scaleY(${(U/(t.length-1)).toFixed(4)})`),k!==p){p=k,I(),document.body.dataset.side=_v[k]||"left",d.forEach((ft,ht)=>ft.classList.toggle("is-active",ht===k));let st=t[k]&&t[k].id,K={launch:"launch",commercial:"launch"}[st]||st;if(f.forEach(ft=>ft.setAttribute("aria-current",String(ft.getAttribute("href")===`#${K}`))),v){let ft=d[k]?d[k].querySelector(".sm-name").textContent:"";v.textContent=`${String(k+1).padStart(2,"0")} \xB7 ${ft}`}}_&&q&&(_.textContent=q)};let N=Ie(".site-header"),g=()=>N.classList.toggle("is-scrolled",window.scrollY>40);window.addEventListener("scroll",g,{passive:!0}),g();let b=Ie(".site-footer");new IntersectionObserver(([U])=>document.body.classList.toggle("at-footer",U.isIntersecting),{threshold:.05}).observe(b),nn(".lang-switch a:not([aria-current])").forEach(U=>U.addEventListener("click",()=>{location.hash&&(U.href=U.href.split("#")[0]+location.hash)}));let G=Ie("#crexi-load");G&&G.addEventListener("click",()=>{let U=document.createElement("iframe");U.className="crexi-frame",U.src="https://www.crexi.com/widgets/1594",U.title=Fe("CIIN Co. commercial listings on Crexi"),U.loading="lazy",U.referrerPolicy="strict-origin-when-cross-origin",G.replaceWith(U)});let W=Ie("#contact-form");if(W){let U=Ie(".form-status",W),k=[["f-name",st=>st.trim().length>1,Fe("Please enter your name.")],["f-email",st=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(st.trim()),Fe("Please enter a valid email address.")],["f-message",st=>st.trim().length>4,Fe("Please tell us a little about what you need.")]],q=(st,K,ft)=>{let ht=Ie(`#${st}`,W),ot=Ie(`#${st}-err`,W),Vt=K(ht.value);return ht.setAttribute("aria-invalid",String(!Vt)),Vt?(ht.removeAttribute("aria-describedby"),ot.textContent=""):(ht.setAttribute("aria-describedby",`${st}-err`),ot.textContent=ft),Vt};k.forEach(([st,K,ft])=>Ie(`#${st}`,W).addEventListener("blur",ht=>{ht.target.value&&q(st,K,ft)})),W.addEventListener("submit",async st=>{st.preventDefault(),U.className="form-status",U.textContent="";let K=k.map(ht=>q(...ht));if(K.includes(!1)){let ht=k[K.indexOf(!1)][0];Ie(`#${ht}`,W).focus(),U.classList.add("is-error"),U.textContent=Fe("Please check the highlighted fields.");return}if(W.company_website.value)return;let ft=W.querySelector('button[type="submit"]');ft.disabled=!0,U.textContent=Fe("Sending\u2026");try{let ht=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(W)).toString()});if(!ht.ok)throw new Error(String(ht.status));window.location.href=W.getAttribute("action")}catch{ft.disabled=!1,U.classList.add("is-error"),U.innerHTML=`${Fe("Your message could not be sent. Please email")} <a href="mailto:rafael@ciinco.com">rafael@ciinco.com</a> ${Fe("or call")} <a href="tel:+14077395959">407-739-5959</a>.`}})}return nn("#type-chips li").forEach((U,k)=>{U.addEventListener("pointerenter",()=>i.hotType&&i.hotType(k)),U.addEventListener("pointerleave",()=>i.hotType&&i.hotType(-1))}),nn("#consulting li").forEach(U=>{let k=parseInt(U.dataset.node,10);U.addEventListener("pointerenter",()=>i.hotNode&&i.hotNode(k)),U.addEventListener("pointerleave",()=>i.hotNode&&i.hotNode(-1))}),nn(".office").forEach(U=>{U.addEventListener("pointerenter",()=>i.hotOffice&&i.hotOffice(U.dataset.office)),U.addEventListener("pointerleave",()=>i.hotOffice&&i.hotOffice(null))}),i.markType=U=>nn("#type-chips li").forEach((k,q)=>k.classList.toggle("is-hot",q===U)),i.markNode=U=>nn("#consulting li").forEach(k=>k.classList.toggle("is-hot",parseInt(k.dataset.node,10)===U)),i.markOffice=U=>nn(".office").forEach(k=>k.classList.toggle("is-hot",k.dataset.office===U)),{chapters:t}}function Uo(i){let t=Ie("#loader-pct"),e=Ie("#loader-bar");t&&(t.textContent=`${Math.round(i*100)}%`),e&&(e.style.transform=`scaleX(${i.toFixed(3)})`)}function Do(){document.body.classList.remove("is-loading")}var mc=document.documentElement;mc.classList.add("js");var $e={},{chapters:gc}=Lu($e),Rn=new URLSearchParams(location.search);function yv(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}var Mv=Math.min(screen.width,screen.height),Li={night:Rn.has("night"),maps:!Rn.has("drawn"),low:Rn.has("low")||Mv<700||(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4},Sv=Li.low?1.5:1.75,sn=[],Js=null;function vs(){let i=window.innerHeight,t=document.documentElement.scrollHeight-i;sn=gc.map((e,n)=>{if(n===0)return 0;let s=e.getBoundingClientRect();return Math.min(t,Math.max(0,s.top+window.scrollY+s.height/2-i/2))});for(let e=1;e<sn.length;e++)sn[e]=Math.max(sn[e],sn[e-1]+1)}$e.anchorFor=i=>sn[i]??0;function vc(){if(Js!==null)return Js;let i=window.scrollY;if(!sn.length||i<=sn[0])return 0;for(let t=0;t<sn.length-1;t++)if(i<sn[t+1])return t+(i-sn[t])/(sn[t+1]-sn[t]);return sn.length-1}function Uu(){vs(),window.addEventListener("resize",vs);let i=()=>{let t=vc();$e.setProgress(t,Math.round(t),null),requestAnimationFrame(i)};i()}async function bv(){let i=document.getElementById("cosmos"),t=new $r({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=Math.min(window.devicePixelRatio||1,Sv);t.setPixelRatio(e),t.setSize(window.innerWidth,window.innerHeight,!1),t.toneMapping=ks,t.toneMappingExposure=1.05,t.outputColorSpace=ln;let n=new Zr,s=new We(40,window.innerWidth/window.innerHeight,.05,5e4),r=0,o=6,a=()=>Uo(++r/o*.85),l=new zs,c=new mo(l),h=await new Promise(E=>{let L=c.load(`${ms}assets/textures/${Li.low?"map-2k":"map"}.webp`,()=>{a(),E(L)},void 0,()=>{a(),E(L)});L.colorSpace=In,L.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),L.minFilter=Hn}),f=(E,L)=>new Promise(V=>{let Y=c.load(`${ms}assets/textures/${E}.webp`,()=>{a(),V(Y)},void 0,()=>{a(),V(null)});Y.colorSpace=ln,Y.wrapS=Y.wrapT=L,Y.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())}),[d,u,v]=await Promise.all([f("sky-dusk",Vn),f("facade-brick",ss),f("facade-glass",ss)]),_=E=>fetch(E).then(L=>L.json()).then(L=>(a(),L)),[p,m]=await Promise.all([_(`${ms}assets/data/nyc.json`),_(`${ms}assets/data/map.json`)]),y=Eu(n,{map:h,sky:d,brick:u,glass:v},{nyc:p,map:m},Li);Rn.has("nobld")&&(y.nycBuildings.mesh.visible=!1),Rn.has("debug")&&console.info("stats",JSON.stringify({nycBuildings:y.nycBuildings.count,homes:y.homeCount,...y.stats}));let x=new Be(1,1,{type:tn,samples:Li.low?0:4}),S=new So(t,x);S.setPixelRatio(e),S.setSize(window.innerWidth,window.innerHeight);let F=new bo(n,s);S.addPass(F),S.addPass(new Ri(pu));let I=new ps(new xt(window.innerWidth,window.innerHeight),.42,.35,1.05);S.addPass(I);let P=!0;S.addPass(new wo);let O=new Ri(mu);S.addPass(O),y.uPixelRatio.value=e;let N={on:!Rn.has("noreflect"),scale:Li.low?.35:.5,rt:new Be(1,1,{type:tn}),cam:new We,plane:new pn,clip:new Ae,q:new Ae,up:new D,fwd:new D};y.reflect.uReflect.value=N.rt.texture;let g=()=>{let E=Math.max(2,Math.round(window.innerWidth*e*N.scale)),L=Math.max(2,Math.round(window.innerHeight*e*N.scale));N.rt.setSize(E,L)};g();function b(E,L){let V=N.cam,Y=y.reflect.uMirrorY.value;V.fov=s.fov,V.aspect=s.aspect,V.near=s.near,V.far=s.far,V.position.set(s.position.x,2*Y-s.position.y,s.position.z),N.fwd.set(0,0,-1).applyQuaternion(s.quaternion),N.fwd.y*=-1,N.up.set(0,1,0).applyQuaternion(s.quaternion),N.up.y*=-1,V.up.copy(N.up),V.lookAt(M.copy(V.position).add(N.fwd)),V.setViewOffset($t(),Xt(),-E,L,$t(),Xt()),V.updateProjectionMatrix(),V.updateMatrixWorld();let j=y.reflect.uReflectMat.value;j.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),j.multiply(V.projectionMatrix).multiply(V.matrixWorldInverse),N.plane.setFromNormalAndCoplanarPoint(J.set(0,1,0),M.set(0,Y,0)).applyMatrix4(V.matrixWorldInverse),N.clip.set(N.plane.normal.x,N.plane.normal.y,N.plane.normal.z,N.plane.constant);let et=V.projectionMatrix.elements;N.q.set((Math.sign(N.clip.x)+et[8])/et[0],(Math.sign(N.clip.y)+et[9])/et[5],-1,(1+et[10])/et[14]),N.clip.multiplyScalar(2/N.clip.dot(N.q)),et[2]=N.clip.x,et[6]=N.clip.y,et[10]=N.clip.z+1,et[14]=N.clip.w;let rt=y.waterMeshes.map(nt=>nt.visible);y.waterMeshes.forEach(nt=>{nt.visible=!1}),t.setRenderTarget(N.rt),t.clear(),t.render(n,V),t.setRenderTarget(null),y.waterMeshes.forEach((nt,Mt)=>{nt.visible=rt[Mt]})}let G=null,W=null,U=-1;if(Li.maps){W=document.createElement("div"),W.className="netmap",i.insertAdjacentElement("afterend",W);let E=Array.from(document.querySelectorAll("#consulting li")).map(L=>L.textContent.trim());try{window.maplibregl||await new Promise((L,V)=>{let Y=document.createElement("script");Y.src=`${ms}assets/js/maplibre-gl.js`,Y.onload=L,Y.onerror=V,document.head.appendChild(Y)}),G=Tu({container:W,services:E}),document.body.classList.add("has-netmap"),Rn.has("debug")&&(window.__netmap=G)}catch(L){console.warn("network map unavailable",L),W.remove(),G=null}}let k={night:{zenith:y.uZenith.value.clone(),horizon:y.sky.uniforms.uHorizon.value.clone(),glow:y.sky.uniforms.uGlow.value.clone(),cool:y.fog.cool.value.clone(),warm:y.fog.warm.value.clone()},day:{zenith:new Lt(.035,.075,.2),horizon:new Lt(.3,.22,.25),glow:new Lt(1.25,.55,.22),cool:new Lt(.13,.15,.23),warm:new Lt(.55,.32,.17)}};function q(E){y.uZenith.value.copy(k.night.zenith).lerp(k.day.zenith,E),y.sky.uniforms.uHorizon.value.copy(k.night.horizon).lerp(k.day.horizon,E),y.sky.uniforms.uGlow.value.copy(k.night.glow).lerp(k.day.glow,E),y.fog.cool.value.copy(k.night.cool).lerp(k.day.cool,E),y.fog.warm.value.copy(k.night.warm).lerp(k.day.warm,E)}let st=document.getElementById("labels"),K=(E,L)=>{let V=document.createElement("div");return V.className=`label ${E}`,V.innerHTML=L,st.appendChild(V),V},ft=y.offices.map(E=>({o:E,el:K("label-office",`<span class="dot"></span><span class="stem"></span><span class="txt"><b>${Fe(E.name)}</b><small>${Fe(E.sub)}</small></span>`)})),ht=y.typeTargets.map(E=>({t:E,el:K("label-type",`<span class="dot"></span><span>${Fe(E.name)}</span>`)})),Vt=Array.from(document.querySelectorAll("#consulting li")).map(E=>E.textContent.trim()).map((E,L)=>({i:L,el:K("label-node",`<span class="num">${String(L+1).padStart(2,"0")}</span><span class="name">${E}</span>`)})),Ht=-1,z=-1,$=null;$e.hotType=E=>{Ht=E,$e.markType(E)},$e.hotNode=E=>{z=E,$e.markNode(E)},$e.hotOffice=E=>{$=E,$e.markOffice(E)};let at={x:0,y:0,sx:-100,sy:-100,px:-100,py:-100,inside:!1,overUI:!0},dt=document.getElementById("cursor"),bt=document.getElementById("cursor-label"),Ft=window.matchMedia("(hover: hover) and (pointer: fine)").matches;Ft&&document.body.classList.add("has-cursor");let Yt='a, button, input, select, textarea, label, summary, [role="button"], iframe',ee="p, h1, h2, h3, li, dt, dd, address, form, .agent, .chips, legend, .offices";window.addEventListener("pointermove",E=>{at.x=E.clientX/window.innerWidth*2-1,at.y=-(E.clientY/window.innerHeight)*2+1,at.px=E.clientX,at.py=E.clientY,at.inside=!0;let L=E.target instanceof Element?E.target:null,V=!!(L&&L.closest(Yt));at.overUI=V||!!(L&&L.closest(ee))||!!(L&&L.closest(".site-header, .system-map, .site-footer")),dt.classList.toggle("is-link",V)},{passive:!0}),document.addEventListener("pointerleave",()=>{at.inside=!1});let lt=null;window.addEventListener("click",E=>{if(!lt||at.overUI)return;let L=E.target instanceof Element?E.target:null;L&&L.closest(Yt)||$e.goToChapter(lt.chapter)});function C(){let E=window.innerWidth,L=window.innerHeight;s.aspect=E/L,t.setPixelRatio(e),t.setSize(E,L,!1),S.setPixelRatio(e),S.setSize(E,L),y.uPixelRatio.value=e,g(),G&&G.resize(),vs()}window.addEventListener("resize",C),new ResizeObserver(()=>vs()).observe(document.querySelector("main")),document.fonts&&document.fonts.ready.then(vs),vs();let wt=new us,mt={pos:new D,look:new D,ox:0,oy:0,fov:40,flight:0},Z=Rn.has("cam")?(()=>{let E=Rn.get("cam").split(",").map(Number);return[en(E[0],E[1],E[2]),en(E[3],E[4],E[5])]})():null;Rn.has("p")&&(Js=Math.min(Iu-1,Math.max(0,parseFloat(Rn.get("p"))||0)));let _t=vc(),At=_t,Tt=Ii.matches||Js!==null?1:0,A=!1,M=new D,J=new D,ct=new _e,pt=new Ai,ut=new pn(new D(0,1,0),0),kt=new xt,yt={frames:0,acc:0,checked:0},Ut=!0,ie=0;document.addEventListener("visibilitychange",()=>{Ut=!document.hidden,Ut&&(wt.getDelta(),requestAnimationFrame(R))});let gt=(E,L,V)=>{let Y=Math.min(1,Math.max(0,(V-E)/(L-E)));return Y*Y*(3-2*Y)},Ct=E=>Math.max(0,1-Math.abs(At-E)*1.6),$t=()=>window.innerWidth,Xt=()=>window.innerHeight;function zt(E){return M.copy(E).project(s),{x:(M.x*.5+.5)*$t(),y:(-M.y*.5+.5)*Xt(),on:M.z<1&&Math.abs(M.x)<1.1&&Math.abs(M.y)<1.1}}let se=null,ne=-1;function ge(E){let L=gc[E],V=L&&(L.querySelector(".panel")||L.querySelector(".contact-intro")||L.querySelector(".wrap")),Y=V?V.getBoundingClientRect():null;se=Y&&Y.width?{l:Y.left-28,r:Y.right+28,t:Y.top-20,b:Y.bottom+20}:null}function H(E,L,V,Y=0,j=0){let et=zt(L),rt=et.x+Y,nt=et.y+j,Mt=se&&rt>se.l&&rt<se.r&&nt>se.t&&nt<se.b,St=V&&et.on&&!Mt;E.classList.toggle("is-on",St),St&&(E.style.transform=`translate3d(${(et.x+Y).toFixed(1)}px, ${(et.y+j).toFixed(1)}px, 0) translate(-3px, -50%)`)}let Ot=E=>`${Math.abs(E).toFixed(4)}\xB0 ${E>=0?"N":"S"}`,it=E=>`${Math.abs(E).toFixed(4)}\xB0 ${E>=0?"E":"W"}`,T=E=>E>=1e4?`${Math.round(E/1e3).toLocaleString("en-US")} km`:`${Math.round(E).toLocaleString("en-US")} m`;function R(){if(!Ut)return;requestAnimationFrame(R);let E=Math.min(wt.getDelta(),.05),L=wt.elapsedTime;y.uTime.value=L,O.uniforms.uTime.value=Ii.matches?0:L,_t=vc();let V=Js!==null;L-ne>.25&&(ne=L,ge(Math.round(_t)));let Y=Ii.matches?12:3;At+=(_t-At)*(1-Math.exp(-E*Y)),(Math.abs(_t-At)<1e-4||V)&&(At=_t),A&&Tt<1&&(Tt=Math.min(1,Tt+E/4.5));let j=1-Math.pow(1-Tt,3),et=$t()/Xt();if(Ft&&(at.sx+=(at.px-at.sx)*.25,at.sy+=(at.py-at.sy)*.25,dt.style.transform=`translate3d(${at.sx.toFixed(1)}px, ${at.sy.toFixed(1)}px, 0)`,dt.classList.toggle("is-hidden",!at.inside)),!Ii.matches&&Ft&&(kt.x+=(at.x-kt.x)*(1-Math.exp(-E*2.5)),kt.y+=(at.y-kt.y)*(1-Math.exp(-E*2.5))),G){let nt=gt(.12,.5,At);(Math.abs(nt-U)>.002||nt===1&&U!==1||nt===0&&U!==0)&&(U=nt,W.style.opacity=String(nt),i.style.opacity=String(1-nt),document.body.classList.toggle("netmap-on",nt>.5),nt>.5&&(lt=null,Ft&&dt.classList.remove("is-world")));let Mt=G.update(At,L,nt,Ht,z,$,at);if(nt<.01&&G.hideLabels(),nt>.999){if(Mt&&L-ie>.1){ie=L;let St=Mt.center[1],Rt=40075016686e-3*Math.cos(St*Math.PI/180)/(512*Math.pow(2,Mt.zoom)),qt=Xt()*Rt/2/Math.tan(18*Math.PI/180);$e.setProgress(_t,Math.round(_t),`${Ot(St)} \xB7 ${it(Mt.center[0])} \xB7 ALT ${T(qt)}`)}return}}I.enabled=P;let rt=0;{if(Pu(At,et,mt),Z&&(mt.pos.copy(Z[0]),mt.look.copy(Z[1]),mt.ox=0,mt.oy=0),j<1){let Nt=1-j;mt.pos.y*=1+Nt*.35}s.position.copy(mt.pos),s.lookAt(mt.look);let nt=mt.pos.distanceTo(mt.look);M.set(1,0,0).applyQuaternion(s.quaternion).multiplyScalar(kt.x*nt*.02),J.set(0,1,0).applyQuaternion(s.quaternion).multiplyScalar(kt.y*nt*.012),s.position.add(M).add(J),s.position.y=Math.max(s.position.y,.08),s.lookAt(mt.look),rt=s.position.y,s.fov=mt.fov,s.near=Math.max(.02,rt*.01),s.far=Math.max(4e3,rt*60),s.setViewOffset($t(),Xt(),-mt.ox*$t(),mt.oy*Xt(),$t(),Xt()),s.updateProjectionMatrix(),s.updateMatrixWorld(),y.fog.density.value=Li.night?1/Math.max(230,rt*4):1/Math.max(260,rt*5),y.fog.detail.value=1-gt(140,700,rt),y.clouds.uniforms.uOpacity.value=.42*gt(110,600,rt)*(1-gt(25e3,4e4,rt))+.5*mt.flight*gt(60,200,rt),y.map.uniforms.uLights.value=.6+.6*gt(50,3e3,rt),y.offices.forEach(Nt=>{let Jt=s.position.distanceTo(Nt.pos);Nt.beam.scale.set(Math.max(.12,Jt*.0035),Math.max(8,Jt*.45),Math.max(.12,Jt*.0035)),Nt.ring.scale.setScalar(Math.max(.8,Jt*.06));let te=Math.max(Ct(0),Ct(7)*(Nt.id==="orlando"?1:0),Ct(2)*(Nt.id==="new-york"?1:0),Ct(3)*(Nt.id==="orlando"?1:0),.12),Wt=1;Nt.beamMat.uniforms.uIntensity.value=1.2*te*Wt*(.35+.65*gt(4,60,Jt))*($===Nt.id?1.8:1),Nt.ringMat.uniforms.uOn.value=te*Wt}),y.arc.uniforms.uOn.value=Math.max(1-gt(.4,1,At),mt.flight*(At>2&&At<3?1:0)),y.arc.uniforms.uDraw.value+=((A?1.02:0)-y.arc.uniforms.uDraw.value)*(V?1:1-Math.exp(-E*1.2)),y.billboards.forEach(Nt=>Nt.quaternion.copy(s.quaternion)),y.fountain&&y.fountain.material.uniforms.uColor.value.setHSL(L*.03%1,.6,.6);let Mt=y.nycBuildings.uniforms;Mt.uHot.value=Ht,Mt.uHotOn.value+=((Ht>=0?1:0)-Mt.uHotOn.value)*.15;let St=Ct(2);ht.forEach((Nt,Jt)=>{Nt.el.classList.toggle("is-hot",Ht===Jt),J.copy(Nt.t.local).add(y.nyc.center),H(Nt.el,J.clone(),St>.55&&et>.9)});let Rt=y.tower,qt=gt(3.3,3.95,At)*(1-gt(5.3,5.9,At));Rt.uniforms.uDraw.value+=(qt*1.08-Rt.uniforms.uDraw.value)*(V?1:1-Math.exp(-E*1.6)),Rt.uniforms.uHot.value=z;let Qt=Ct(4);Vt.forEach(Nt=>{Nt.el.classList.toggle("is-hot",z===Nt.i),J.copy(Rt.floorLocal(Nt.i)).add(y.orl.center);let Jt=Qt>.55&&(et>.9||z===Nt.i)&&Rt.uniforms.uDraw.value>Nt.i/15+.05;H(Nt.el,J.clone(),Jt,26,0)});let jt=y.parcels.uniforms;jt.uOn.value+=(gt(5.4,6,At)*(1-gt(6.6,7,At))-jt.uOn.value)*(V?1:.08);let oe=0;if(Ft&&at.inside&&!at.overUI&&jt.uOn.value>.2&&(M.set(at.x,at.y,.5).unproject(s).sub(s.position).normalize(),pt.set(s.position,M),pt.intersectPlane(ut,J)&&(oe=1,jt.uPointerOn.value<.05&&jt.uPointer.value.copy(J),jt.uPointer.value.lerp(J,.2))),jt.uPointerOn.value+=(oe-jt.uPointerOn.value)*.08,ft.forEach(Nt=>{Nt.el.classList.toggle("is-hot",$===Nt.o.id);let Jt=Ct(0)>.5||Nt.o.id==="new-york"&&Ct(2)>.55||Nt.o.id==="orlando"&&(Ct(7)>.55||Ct(3)>.55);H(Nt.el,Nt.o.pos,Jt)}),lt=null,Ft&&at.inside&&!at.overUI&&Ct(0)>.5)for(let Nt of y.hit){let Jt=zt(Nt.center);Jt.on&&Math.hypot(Jt.x-at.px,Jt.y-at.py)<70&&(lt=Nt)}Ft&&(at.sx+=(at.px-at.sx)*.25,at.sy+=(at.py-at.sy)*.25,dt.style.transform=`translate3d(${at.sx.toFixed(1)}px, ${at.sy.toFixed(1)}px, 0)`,dt.classList.toggle("is-world",!!lt),dt.classList.toggle("is-hidden",!at.inside),lt&&bt.textContent!==lt.label&&(bt.textContent=lt.label));let he=N.on&&rt<60&&y.fog.detail.value>.05;y.reflect.uReflectOn.value=he?1:0,he&&b(-mt.ox*$t(),mt.oy*Xt())}if(S.render(E),L-ie>.1){ie=L;let nt=Su(s.position.x,s.position.z);$e.setProgress(_t,Math.round(_t),`${Ot(nt.lat)} \xB7 ${it(nt.lon)} \xB7 ALT ${T(bu(rt,nt.lat))}`)}if(A&&yt.checked<4&&(yt.frames++,yt.acc+=E,yt.frames>=90)){let nt=yt.acc/yt.frames;yt.frames=0,yt.acc=0,yt.checked++,nt>1/42&&N.on&&N.scale>.3?(N.scale=.25,g()):nt>1/42&&N.on?N.on=!1:nt>1/42&&e>.8?(e=Math.max(.75,e-.35),C()):nt>1/28&&P&&(P=!1)}}Uo(.92);try{t.compile(n,s)}catch{}requestAnimationFrame(R),setTimeout(()=>{Uo(1),A=!0,Do(),gc[0].classList.add("is-in"),$e.startReveals()},300)}yv()?bv().catch(i=>{console.error(i),mc.classList.add("no-webgl"),Do(),$e.startReveals(),Uu()}):(mc.classList.add("no-webgl"),Do(),$e.startReveals(),Uu());})();
