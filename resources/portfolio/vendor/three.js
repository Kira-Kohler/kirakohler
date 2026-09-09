var vY="180",NG={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},OG={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yY=0,LZ=1,fY=2,FG=3,RG=0,VZ=1,hY=2,I8=3,Z9=0,e0=1,H8=2,W9=0,Z7=1,zZ=2,BZ=3,CZ=4,bY=5,D6=100,xY=101,gY=102,pY=103,lY=104,dY=200,mY=201,uY=202,cY=203,nY=204,sY=205,oY=206,iY=207,aY=208,rY=209,tY=210,eY=211,JX=212,QX=213,$X=214,CQ=0,_Q=1,wQ=2,W7=3,IQ=4,PQ=5,TQ=6,AQ=7,ZX=0,WX=1,HX=2,m8=0,YX=1,XX=2,KX=3,UX=4,GX=5,EX=6,qX=7,kG="attached",MG="detached",DG=300,L6=301,j9=302,SQ=303,jQ=304,H7=306,V6=1000,vQ=1001,yQ=1002,u8=1003,fQ=1004,LG=1004,v9=1005,VG=1005,R8=1006,z6=1007,zG=1007,c8=1008,BG=1008,H9=1009,NX=1010,OX=1011,Y7=1012,_Z=1013,B6=1014,Y9=1015,X7=1016,wZ=1017,IZ=1018,C6=1020,FX=35902,RX=35899,kX=1021,MX=1022,P8=1023,hQ=1026,K7=1027,DX=1028,PZ=1029,LX=1030,TZ=1031,CG=1032,AZ=1033,bQ=33776,xQ=33777,gQ=33778,pQ=33779,SZ=35840,jZ=35841,vZ=35842,yZ=35843,fZ=36196,hZ=37492,bZ=37496,xZ=37808,gZ=37809,pZ=37810,lZ=37811,dZ=37812,mZ=37813,uZ=37814,cZ=37815,nZ=37816,sZ=37817,oZ=37818,iZ=37819,aZ=37820,rZ=37821,tZ=36492,eZ=36494,JW=36495,QW=36283,$W=36284,ZW=36285,WW=36286,_G=2200,wG=2201,IG=2202,HW=2300,lQ=2301,PG=2302,TG=2400,AG=2401,SG=2402,jG=2500,vG=2501,YW=0,U7=1,_6=2,yG=3200,VX=3201,fG=3202,hG=3203,zX=0,BX=1,y9="",X9="srgb",g0="srgb-linear",XW="linear",E0="srgb",bG=0,xG=7680,gG=7681,pG=7682,lG=7683,dG=34055,mG=34056,uG=5386,cG=512,nG=513,sG=514,oG=515,iG=516,aG=517,rG=518,tG=519,CX=512,_X=513,wX=514,KW=515,IX=516,PX=517,TX=518,AX=519,eG=35044,JE=35048,QE=35040,$E=35045,ZE=35049,WE=35041,HE=35046,YE=35050,XE=35042,KE="100",UW="300 es",GW=2000,UE=2001,GE={COMPUTE:"compute",RENDER:"render"},EE={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},qE={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class k8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var j0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wH=1234567,T9=Math.PI/180,A9=180/Math.PI;function a0(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(j0[J&255]+j0[J>>8&255]+j0[J>>16&255]+j0[J>>24&255]+"-"+j0[Q&255]+j0[Q>>8&255]+"-"+j0[Q>>16&15|64]+j0[Q>>24&255]+"-"+j0[$&63|128]+j0[$>>8&255]+"-"+j0[$>>16&255]+j0[$>>24&255]+j0[Z&255]+j0[Z>>8&255]+j0[Z>>16&255]+j0[Z>>24&255]).toLowerCase()}function bJ(J,Q,$){return Math.max(Q,Math.min($,J))}function EW(J,Q){return(J%Q+Q)%Q}function NE(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function OE(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function a6(J,Q,$){return(1-$)*J+$*Q}function FE(J,Q,$,Z){return a6(J,Q,1-Math.exp(-$*Z))}function RE(J,Q=1){return Q-Math.abs(EW(J,Q*2)-Q)}function kE(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function ME(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function DE(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function LE(J,Q){return J+Math.random()*(Q-J)}function VE(J){return J*(0.5-Math.random())}function zE(J){if(J!==void 0)wH=J;let Q=wH+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function BE(J){return J*T9}function CE(J){return J*A9}function _E(J){return(J&J-1)===0&&J!==0}function wE(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function IE(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function PE(J,Q,$,Z,W){let{cos:H,sin:Y}=Math,X=H($/2),K=Y($/2),U=H((Q+Z)/2),G=Y((Q+Z)/2),E=H((Q-Z)/2),q=Y((Q-Z)/2),N=H((Z-Q)/2),R=Y((Z-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*R,K*N,X*U);break;case"YXY":J.set(K*N,X*G,K*R,X*U);break;case"ZYZ":J.set(K*R,K*N,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function x0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function nJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var qW={DEG2RAD:T9,RAD2DEG:A9,generateUUID:a0,clamp:bJ,euclideanModulo:EW,mapLinear:NE,inverseLerp:OE,lerp:a6,damp:FE,pingpong:RE,smoothstep:kE,smootherstep:ME,randInt:DE,randFloat:LE,randFloatSpread:VE,seededRandom:zE,degToRad:BE,radToDeg:CE,isPowerOfTwo:_E,ceilPowerOfTwo:wE,floorPowerOfTwo:IE,setQuaternionFromProperEuler:PE,normalize:nJ,denormalize:x0};class i{constructor(J=0,Q=0){i.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=bJ(this.x,J.x,Q.x),this.y=bJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=bJ(this.x,J,Q),this.y=bJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(bJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(bJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class T0{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let X=$[Z+0],K=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[H+0],q=W[H+1],N=W[H+2],R=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=N,J[Q+3]=R;return}if(G!==R||X!==E||K!==q||U!==N){let k=1-Y,F=X*E+K*q+U*N+G*R,O=F>=0?1:-1,D=1-F*F;if(D>Number.EPSILON){let V=Math.sqrt(D),P=Math.atan2(V,F*O);k=Math.sin(k*P)/V,Y=Math.sin(Y*P)/V}let M=Y*O;if(X=X*k+E*M,K=K*k+q*M,U=U*k+N*M,G=G*k+R*M,k===1-Y){let V=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=V,K*=V,U*=V,G*=V}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],X=$[Z+1],K=$[Z+2],U=$[Z+3],G=W[H],E=W[H+1],q=W[H+2],N=W[H+3];return J[Q]=Y*N+U*G+X*q-K*E,J[Q+1]=X*N+U*E+K*G-Y*q,J[Q+2]=K*N+U*q+Y*E-X*G,J[Q+3]=U*N-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y($/2),U=Y(Z/2),G=Y(W/2),E=X($/2),q=X(Z/2),N=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*N,this._y=K*q*G-E*U*N,this._z=K*U*N+E*q*G,this._w=K*U*G-E*q*N;break;case"YXZ":this._x=E*U*G+K*q*N,this._y=K*q*G-E*U*N,this._z=K*U*N-E*q*G,this._w=K*U*G+E*q*N;break;case"ZXY":this._x=E*U*G-K*q*N,this._y=K*q*G+E*U*N,this._z=K*U*N+E*q*G,this._w=K*U*G-E*q*N;break;case"ZYX":this._x=E*U*G-K*q*N,this._y=K*q*G+E*U*N,this._z=K*U*N-E*q*G,this._w=K*U*G+E*q*N;break;case"YZX":this._x=E*U*G+K*q*N,this._y=K*q*G+E*U*N,this._z=K*U*N-E*q*G,this._w=K*U*G-E*q*N;break;case"XZY":this._x=E*U*G-K*q*N,this._y=K*q*G-E*U*N,this._z=K*U*N+E*q*G,this._w=K*U*G+E*q*N;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=$+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-Z)*q}else if($>Y&&$>G){let q=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=(Z+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-$-G);this._w=(W-K)/q,this._x=(Z+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(bJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*K-W*X,this._y=Z*U+H*X+W*Y-$*K,this._z=W*U+H*K+$*X-Z*Y,this._w=H*U-$*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,H=this._w,Y=H*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=$,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*$+Q*this._x,this._y=q*Z+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=$*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(J=0,Q=0,$=0){w.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(IH.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(IH.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=$+X*U+Y*K-W*G,this.z=Z+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=bJ(this.x,J.x,Q.x),this.y=bJ(this.y,J.y,Q.y),this.z=bJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=bJ(this.x,J,Q),this.y=bJ(this.y,J,Q),this.z=bJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(bJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-W*Y,this.y=W*H-$*X,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return S$.copy(this).projectOnVector(J),this.sub(S$)}reflect(J){return this.sub(S$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(bJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var S$=new w,IH=new T0;class mJ{constructor(J,Q,$,Z,W,H,Y,X,K){if(mJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K)}set(J,Q,$,Z,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],X=$[6],K=$[1],U=$[4],G=$[7],E=$[2],q=$[5],N=$[8],R=Z[0],k=Z[3],F=Z[6],O=Z[1],D=Z[4],M=Z[7],V=Z[2],P=Z[5],_=Z[8];return W[0]=H*R+Y*O+X*V,W[3]=H*k+Y*D+X*P,W[6]=H*F+Y*M+X*_,W[1]=K*R+U*O+G*V,W[4]=K*k+U*D+G*P,W[7]=K*F+U*M+G*_,W[2]=E*R+q*O+N*V,W[5]=E*k+q*D+N*P,W[8]=E*F+q*M+N*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-$*W*U+$*Y*X+Z*W*K-Z*H*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,N=Q*G+$*E+Z*q;if(N===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/N;return J[0]=G*R,J[1]=(Z*K-U*$)*R,J[2]=(Y*$-Z*H)*R,J[3]=E*R,J[4]=(U*Q-Z*X)*R,J[5]=(Z*W-Y*Q)*R,J[6]=q*R,J[7]=($*X-K*Q)*R,J[8]=(H*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set($*X,$*K,-$*(X*H+K*Y)+H+J,-Z*K,Z*X,-Z*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(j$.makeScale(J,Q)),this}rotate(J){return this.premultiply(j$.makeRotation(-J)),this}translate(J,Q){return this.premultiply(j$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var j$=new mJ;function NW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}var TE={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function N6(J,Q){return new TE[J](Q)}function F6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function SX(){let J=F6("canvas");return J.style.display="block",J}var PH={};function R6(J){if(J in PH)return;PH[J]=!0,console.warn(J)}function jX(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}var TH=new mJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),AH=new mJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function AE(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=p8(W.r),W.g=p8(W.g),W.b=p8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=O6(W.r),W.g=O6(W.g),W.b=O6(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return R6("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return R6("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:TH,fromXYZ:AH,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:TH,fromXYZ:AH,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var aJ=AE();function p8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function O6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var s9;class OW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(s9===void 0)s9=F6("canvas");s9.width=J.width,s9.height=J.height;let Z=s9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=s9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=F6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=p8(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(p8(Q[$]/255)*255);else Q[$]=p8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var SE=0;class g8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=a0(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(v$(Z[H].image));else W.push(v$(Z[H]))}else W=v$(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function v$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return OW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var jE=0,y$=new w;class N0 extends k8{constructor(J=N0.DEFAULT_IMAGE,Q=N0.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,X=1009,K=N0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=a0(),this.name="",this.source=new g8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new i(0,0),this.repeat=new i(1,1),this.center=new i(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(y$).x}get height(){return this.source.getSize(y$).y}get depth(){return this.source.getSize(y$).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}N0.DEFAULT_IMAGE=null;N0.DEFAULT_MAPPING=300;N0.DEFAULT_ANISOTROPY=1;class Z0{constructor(J=0,Q=0,$=0,Z=1){Z0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],N=X[9],R=X[2],k=X[6],F=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-R)<0.01&&Math.abs(N-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+R)<0.1&&Math.abs(N+k)<0.1&&Math.abs(K+q+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let D=(K+1)/2,M=(q+1)/2,V=(F+1)/2,P=(U+E)/4,_=(G+R)/4,I=(N+k)/4;if(D>M&&D>V)if(D<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(D),Z=P/$,W=_/$;else if(M>V)if(M<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(M),$=P/Z,W=I/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(V),$=_/W,Z=I/W;return this.set($,Z,W,Q),this}let O=Math.sqrt((k-N)*(k-N)+(G-R)*(G-R)+(E-U)*(E-U));if(Math.abs(O)<0.001)O=1;return this.x=(k-N)/O,this.y=(G-R)/O,this.z=(E-U)/O,this.w=Math.acos((K+q+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=bJ(this.x,J.x,Q.x),this.y=bJ(this.y,J.y,Q.y),this.z=bJ(this.z,J.z,Q.z),this.w=bJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=bJ(this.x,J,Q),this.y=bJ(this.y,J,Q),this.z=bJ(this.z,J,Q),this.w=bJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(bJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dQ extends k8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Z0(0,0,J,Q),this.scissorTest=!1,this.viewport=new Z0(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new N0(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new g8(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class M8 extends dQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class G7 extends N0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class vX extends M8{constructor(J=1,Q=1,$=1,Z={}){super(J,Q,Z);this.isWebGLArrayRenderTarget=!0,this.depth=$,this.texture=new G7(null,J,Q,$),this._setTextureOptions(Z),this.texture.isRenderTargetTexture=!0}}class E7 extends N0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yX extends M8{constructor(J=1,Q=1,$=1,Z={}){super(J,Q,Z);this.isWebGL3DRenderTarget=!0,this.depth=$,this.texture=new E7(null,J,Q,$),this._setTextureOptions(Z),this.texture.isRenderTargetTexture=!0}}class _0{constructor(J=new w(1/0,1/0,1/0),Q=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(U8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(U8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=U8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,U8);else U8.fromBufferAttribute(W,H);U8.applyMatrix4(J.matrixWorld),this.expandByPoint(U8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();v7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();v7.copy($.boundingBox)}v7.applyMatrix4(J.matrixWorld),this.union(v7)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,U8),U8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(h6),y7.subVectors(this.max,h6),o9.subVectors(J.a,h6),i9.subVectors(J.b,h6),a9.subVectors(J.c,h6),o8.subVectors(i9,o9),i8.subVectors(a9,i9),R9.subVectors(o9,a9);let Q=[0,-o8.z,o8.y,0,-i8.z,i8.y,0,-R9.z,R9.y,o8.z,0,-o8.x,i8.z,0,-i8.x,R9.z,0,-R9.x,-o8.y,o8.x,0,-i8.y,i8.x,0,-R9.y,R9.x,0];if(!f$(Q,o9,i9,a9,y7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!f$(Q,o9,i9,a9,y7))return!1;return f7.crossVectors(o8,i8),Q=[f7.x,f7.y,f7.z],f$(Q,o9,i9,a9,y7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,U8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(U8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return S8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),S8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),S8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),S8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),S8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),S8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),S8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),S8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(S8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var S8=[new w,new w,new w,new w,new w,new w,new w,new w],U8=new w,v7=new _0,o9=new w,i9=new w,a9=new w,o8=new w,i8=new w,R9=new w,h6=new w,y7=new w,f7=new w,k9=new w;function f$(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){k9.fromArray(J,H);let X=W.x*Math.abs(k9.x)+W.y*Math.abs(k9.y)+W.z*Math.abs(k9.z),K=Q.dot(k9),U=$.dot(k9),G=Z.dot(k9);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var vE=new _0,b6=new w,h$=new w;class C0{constructor(J=new w,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else vE.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;b6.subVectors(J,this.center);let Q=b6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(b6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else h$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(b6.copy(J.center).add(h$)),this.expandByPoint(b6.copy(J.center).sub(h$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var j8=new w,b$=new w,h7=new w,a8=new w,x$=new w,b7=new w,g$=new w;class f9{constructor(J=new w,Q=new w(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,j8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=j8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return j8.copy(this.origin).addScaledVector(this.direction,Q),j8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){b$.copy(J).add(Q).multiplyScalar(0.5),h7.copy(Q).sub(J).normalize(),a8.copy(this.origin).sub(b$);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(h7),Y=a8.dot(this.direction),X=-a8.dot(h7),K=a8.lengthSq(),U=Math.abs(1-H*H),G,E,q,N;if(U>0)if(G=H*X-Y,E=H*Y-X,N=W*U,G>=0)if(E>=-N)if(E<=N){let R=1/U;G*=R,E*=R,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-N)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=N)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(b$).addScaledVector(h7,E);return q}intersectSphere(J,Q){j8.subVectors(J.center,this.origin);let $=j8.dot(this.direction),Z=j8.dot(j8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,X=$+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)$=(J.min.x-E.x)*K,Z=(J.max.x-E.x)*K;else $=(J.max.x-E.x)*K,Z=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,j8)!==null}intersectTriangle(J,Q,$,Z,W){x$.subVectors(Q,J),b7.subVectors($,J),g$.crossVectors(x$,b7);let H=this.direction.dot(g$),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;a8.subVectors(this.origin,J);let X=Y*this.direction.dot(b7.crossVectors(a8,b7));if(X<0)return null;let K=Y*this.direction.dot(x$.cross(a8));if(K<0)return null;if(X+K>H)return null;let U=-Y*a8.dot(g$);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class SJ{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,N,R,k){if(SJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,N,R,k)}set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,N,R,k){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=Z,F[1]=W,F[5]=H,F[9]=Y,F[13]=X,F[2]=K,F[6]=U,F[10]=G,F[14]=E,F[3]=q,F[7]=N,F[11]=R,F[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new SJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/r9.setFromMatrixColumn(J,0).length(),W=1/r9.setFromMatrixColumn(J,1).length(),H=1/r9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,N=Y*U,R=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+N*K,Q[5]=E-R*K,Q[9]=-Y*X,Q[2]=R-E*K,Q[6]=N+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,N=K*U,R=K*G;Q[0]=E+R*Y,Q[4]=N*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-N,Q[6]=R+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,N=K*U,R=K*G;Q[0]=E-R*Y,Q[4]=-H*G,Q[8]=N+q*Y,Q[1]=q+N*Y,Q[5]=H*U,Q[9]=R-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,N=Y*U,R=Y*G;Q[0]=X*U,Q[4]=N*K-q,Q[8]=E*K+R,Q[1]=X*G,Q[5]=R*K+E,Q[9]=q*K-N,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,N=Y*X,R=Y*K;Q[0]=X*U,Q[4]=R-E*G,Q[8]=N*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+N,Q[10]=E-R*G}else if(J.order==="XZY"){let E=H*X,q=H*K,N=Y*X,R=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+R,Q[5]=H*U,Q[9]=q*G-N,Q[2]=N*G-q,Q[6]=Y*U,Q[10]=R*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(yE,J,fE)}lookAt(J,Q,$){let Z=this.elements;if(o0.subVectors(J,Q),o0.lengthSq()===0)o0.z=1;if(o0.normalize(),r8.crossVectors($,o0),r8.lengthSq()===0){if(Math.abs($.z)===1)o0.x+=0.0001;else o0.z+=0.0001;o0.normalize(),r8.crossVectors($,o0)}return r8.normalize(),x7.crossVectors(o0,r8),Z[0]=r8.x,Z[4]=x7.x,Z[8]=o0.x,Z[1]=r8.y,Z[5]=x7.y,Z[9]=o0.y,Z[2]=r8.z,Z[6]=x7.z,Z[10]=o0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],X=$[8],K=$[12],U=$[1],G=$[5],E=$[9],q=$[13],N=$[2],R=$[6],k=$[10],F=$[14],O=$[3],D=$[7],M=$[11],V=$[15],P=Z[0],_=Z[4],I=Z[8],v=Z[12],z=Z[1],C=Z[5],S=Z[9],p=Z[13],d=Z[2],x=Z[6],a=Z[10],m=Z[14],QJ=Z[3],l=Z[7],qJ=Z[11],NJ=Z[15];return W[0]=H*P+Y*z+X*d+K*QJ,W[4]=H*_+Y*C+X*x+K*l,W[8]=H*I+Y*S+X*a+K*qJ,W[12]=H*v+Y*p+X*m+K*NJ,W[1]=U*P+G*z+E*d+q*QJ,W[5]=U*_+G*C+E*x+q*l,W[9]=U*I+G*S+E*a+q*qJ,W[13]=U*v+G*p+E*m+q*NJ,W[2]=N*P+R*z+k*d+F*QJ,W[6]=N*_+R*C+k*x+F*l,W[10]=N*I+R*S+k*a+F*qJ,W[14]=N*v+R*p+k*m+F*NJ,W[3]=O*P+D*z+M*d+V*QJ,W[7]=O*_+D*C+M*x+V*l,W[11]=O*I+D*S+M*a+V*qJ,W[15]=O*v+D*p+M*m+V*NJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],N=J[3],R=J[7],k=J[11],F=J[15];return N*(+W*X*G-Z*K*G-W*Y*E+$*K*E+Z*Y*q-$*X*q)+R*(+Q*X*q-Q*K*E+W*H*E-Z*H*q+Z*K*U-W*X*U)+k*(+Q*K*G-Q*Y*q-W*H*G+$*H*q+W*Y*U-$*K*U)+F*(-Z*Y*U-Q*X*G+Q*Y*E+Z*H*G-$*H*E+$*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],N=J[12],R=J[13],k=J[14],F=J[15],O=G*k*K-R*E*K+R*X*q-Y*k*q-G*X*F+Y*E*F,D=N*E*K-U*k*K-N*X*q+H*k*q+U*X*F-H*E*F,M=U*R*K-N*G*K+N*Y*q-H*R*q-U*Y*F+H*G*F,V=N*G*X-U*R*X-N*Y*E+H*R*E+U*Y*k-H*G*k,P=Q*O+$*D+Z*M+W*V;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/P;return J[0]=O*_,J[1]=(R*E*W-G*k*W-R*Z*q+$*k*q+G*Z*F-$*E*F)*_,J[2]=(Y*k*W-R*X*W+R*Z*K-$*k*K-Y*Z*F+$*X*F)*_,J[3]=(G*X*W-Y*E*W-G*Z*K+$*E*K+Y*Z*q-$*X*q)*_,J[4]=D*_,J[5]=(U*k*W-N*E*W+N*Z*q-Q*k*q-U*Z*F+Q*E*F)*_,J[6]=(N*X*W-H*k*W-N*Z*K+Q*k*K+H*Z*F-Q*X*F)*_,J[7]=(H*E*W-U*X*W+U*Z*K-Q*E*K-H*Z*q+Q*X*q)*_,J[8]=M*_,J[9]=(N*G*W-U*R*W-N*$*q+Q*R*q+U*$*F-Q*G*F)*_,J[10]=(H*R*W-N*Y*W+N*$*K-Q*R*K-H*$*F+Q*Y*F)*_,J[11]=(U*Y*W-H*G*W-U*$*K+Q*G*K+H*$*q-Q*Y*q)*_,J[12]=V*_,J[13]=(U*R*Z-N*G*Z+N*$*E-Q*R*E-U*$*k+Q*G*k)*_,J[14]=(N*Y*Z-H*R*Z-N*$*X+Q*R*X+H*$*k-Q*Y*k)*_,J[15]=(H*G*Z-U*Y*Z+U*$*X-Q*G*X-H*$*E+Q*Y*E)*_,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+$,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+$,U*X-Z*H,0,K*X-Z*Y,U*X+Z*H,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,N=W*G,R=H*U,k=H*G,F=Y*G,O=X*K,D=X*U,M=X*G,V=$.x,P=$.y,_=$.z;return Z[0]=(1-(R+F))*V,Z[1]=(q+M)*V,Z[2]=(N-D)*V,Z[3]=0,Z[4]=(q-M)*P,Z[5]=(1-(E+F))*P,Z[6]=(k+O)*P,Z[7]=0,Z[8]=(N+D)*_,Z[9]=(k-O)*_,Z[10]=(1-(E+R))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=r9.set(Z[0],Z[1],Z[2]).length(),H=r9.set(Z[4],Z[5],Z[6]).length(),Y=r9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],G8.copy(this);let K=1/W,U=1/H,G=1/Y;return G8.elements[0]*=K,G8.elements[1]*=K,G8.elements[2]*=K,G8.elements[4]*=U,G8.elements[5]*=U,G8.elements[6]*=U,G8.elements[8]*=G,G8.elements[9]*=G,G8.elements[10]*=G,Q.setFromRotationMatrix(G8),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),q=($+Z)/($-Z),N,R;if(X)N=W/(H-W),R=H*W/(H-W);else if(Y===2000)N=-(H+W)/(H-W),R=-2*H*W/(H-W);else if(Y===2001)N=-H/(H-W),R=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=E,K[12]=0,K[1]=0,K[5]=G,K[9]=q,K[13]=0,K[2]=0,K[6]=0,K[10]=N,K[14]=R,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),q=-($+Z)/($-Z),N,R;if(X)N=1/(H-W),R=H/(H-W);else if(Y===2000)N=-2/(H-W),R=-(H+W)/(H-W);else if(Y===2001)N=-1/(H-W),R=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=E,K[1]=0,K[5]=G,K[9]=0,K[13]=q,K[2]=0,K[6]=0,K[10]=N,K[14]=R,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var r9=new w,G8=new SJ,yE=new w(0,0,0),fE=new w(1,1,1),r8=new w,x7=new w,o0=new w,SH=new SJ,jH=new T0;class r0{constructor(J=0,Q=0,$=0,Z=r0.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(bJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-bJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(bJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-bJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(bJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-bJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return SH.makeRotationFromQuaternion(J),this.setFromRotationMatrix(SH,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return jH.setFromEuler(this),this.setFromQuaternion(jH,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}r0.DEFAULT_ORDER="XYZ";class q7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var hE=0,vH=new w,t9=new T0,v8=new SJ,g7=new w,x6=new w,bE=new w,xE=new T0,yH=new w(1,0,0),fH=new w(0,1,0),hH=new w(0,0,1),bH={type:"added"},gE={type:"removed"},e9={type:"childadded",child:null},p$={type:"childremoved",child:null};class eJ extends k8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=a0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eJ.DEFAULT_UP.clone();let J=new w,Q=new r0,$=new T0,Z=new w(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new SJ},normalMatrix:{value:new mJ}}),this.matrix=new SJ,this.matrixWorld=new SJ,this.matrixAutoUpdate=eJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=eJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return t9.setFromAxisAngle(J,Q),this.quaternion.multiply(t9),this}rotateOnWorldAxis(J,Q){return t9.setFromAxisAngle(J,Q),this.quaternion.premultiply(t9),this}rotateX(J){return this.rotateOnAxis(yH,J)}rotateY(J){return this.rotateOnAxis(fH,J)}rotateZ(J){return this.rotateOnAxis(hH,J)}translateOnAxis(J,Q){return vH.copy(J).applyQuaternion(this.quaternion),this.position.add(vH.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(yH,J)}translateY(J){return this.translateOnAxis(fH,J)}translateZ(J){return this.translateOnAxis(hH,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(v8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)g7.copy(J);else g7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),x6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)v8.lookAt(x6,g7,this.up);else v8.lookAt(g7,x6,this.up);if(this.quaternion.setFromRotationMatrix(v8),Z)v8.extractRotation(Z.matrixWorld),t9.setFromRotationMatrix(v8),this.quaternion.premultiply(t9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(bH),e9.child=J,this.dispatchEvent(e9),e9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(gE),p$.child=J,this.dispatchEvent(p$),p$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),v8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),v8.multiply(J.parent.matrixWorld);return J.applyMatrix4(v8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(bH),e9.child=J,this.dispatchEvent(e9),e9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x6,J,bE),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x6,xE,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),N=H(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(K.length>0)$.textures=K;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(q.length>0)$.animations=q;if(N.length>0)$.nodes=N}return $.object=Z,$;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}eJ.DEFAULT_UP=new w(0,1,0);eJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;eJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var E8=new w,y8=new w,l$=new w,f8=new w,J6=new w,Q6=new w,xH=new w,d$=new w,m$=new w,u$=new w,c$=new Z0,n$=new Z0,s$=new Z0;class u0{constructor(J=new w,Q=new w,$=new w){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),E8.subVectors(J,Q),Z.cross(E8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){E8.subVectors(Z,Q),y8.subVectors($,Q),l$.subVectors(J,Q);let H=E8.dot(E8),Y=E8.dot(y8),X=E8.dot(l$),K=y8.dot(y8),U=y8.dot(l$),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,N=(H*U-Y*X)*E;return W.set(1-q-N,N,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,f8)===null)return!1;return f8.x>=0&&f8.y>=0&&f8.x+f8.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,X){if(this.getBarycoord(J,Q,$,Z,f8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,f8.x),X.addScaledVector(H,f8.y),X.addScaledVector(Y,f8.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,H){return c$.setScalar(0),n$.setScalar(0),s$.setScalar(0),c$.fromBufferAttribute(J,Q),n$.fromBufferAttribute(J,$),s$.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector(c$,W.x),H.addScaledVector(n$,W.y),H.addScaledVector(s$,W.z),H}static isFrontFacing(J,Q,$,Z){return E8.subVectors($,Q),y8.subVectors(J,Q),E8.cross(y8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return E8.subVectors(this.c,this.b),y8.subVectors(this.a,this.b),E8.cross(y8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return u0.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return u0.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return u0.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return u0.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return u0.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;J6.subVectors(Z,$),Q6.subVectors(W,$),d$.subVectors(J,$);let X=J6.dot(d$),K=Q6.dot(d$);if(X<=0&&K<=0)return Q.copy($);m$.subVectors(J,Z);let U=J6.dot(m$),G=Q6.dot(m$);if(U>=0&&G<=U)return Q.copy(Z);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy($).addScaledVector(J6,H);u$.subVectors(J,W);let q=J6.dot(u$),N=Q6.dot(u$);if(N>=0&&q<=N)return Q.copy(W);let R=q*K-X*N;if(R<=0&&K>=0&&N<=0)return Y=K/(K-N),Q.copy($).addScaledVector(Q6,Y);let k=U*N-q*G;if(k<=0&&G-U>=0&&q-N>=0)return xH.subVectors(W,Z),Y=(G-U)/(G-U+(q-N)),Q.copy(Z).addScaledVector(xH,Y);let F=1/(k+R+E);return H=R*F,Y=E*F,Q.copy($).addScaledVector(J6,H).addScaledVector(Q6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var fX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},t8={h:0,s:0,l:0},p7={h:0,s:0,l:0};function o$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class EJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,aJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=aJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,aJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=aJ.workingColorSpace){if(J=EW(J,1),Q=bJ(Q,0,1),$=bJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=o$(H,W,J+0.3333333333333333),this.g=o$(H,W,J),this.b=o$(H,W,J-0.3333333333333333)}return aJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=fX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=p8(J.r),this.g=p8(J.g),this.b=p8(J.b),this}copyLinearToSRGB(J){return this.r=O6(J.r),this.g=O6(J.g),this.b=O6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return aJ.workingToColorSpace(v0.copy(this),J),Math.round(bJ(v0.r*255,0,255))*65536+Math.round(bJ(v0.g*255,0,255))*256+Math.round(bJ(v0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=aJ.workingColorSpace){aJ.workingToColorSpace(v0.copy(this),Q);let{r:$,g:Z,b:W}=v0,H=Math.max($,Z,W),Y=Math.min($,Z,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-$)/G+2;break;case W:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=aJ.workingColorSpace){return aJ.workingToColorSpace(v0.copy(this),Q),J.r=v0.r,J.g=v0.g,J.b=v0.b,J}getStyle(J="srgb"){aJ.workingToColorSpace(v0.copy(this),J);let{r:Q,g:$,b:Z}=v0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(t8),this.setHSL(t8.h+J,t8.s+Q,t8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(t8),J.getHSL(p7);let $=a6(t8.h,p7.h,Q),Z=a6(t8.s,p7.s,Q),W=a6(t8.l,p7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var v0=new EJ;EJ.NAMES=fX;var pE=0;class V0 extends k8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=a0(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new EJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class p0 extends V0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new EJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var x8=lE();function lE(){let J=new ArrayBuffer(4),Q=new Float32Array(J),$=new Uint32Array(J),Z=new Uint32Array(512),W=new Uint32Array(512);for(let K=0;K<256;++K){let U=K-127;if(U<-27)Z[K]=0,Z[K|256]=32768,W[K]=24,W[K|256]=24;else if(U<-14)Z[K]=1024>>-U-14,Z[K|256]=1024>>-U-14|32768,W[K]=-U-1,W[K|256]=-U-1;else if(U<=15)Z[K]=U+15<<10,Z[K|256]=U+15<<10|32768,W[K]=13,W[K|256]=13;else if(U<128)Z[K]=31744,Z[K|256]=64512,W[K]=24,W[K|256]=24;else Z[K]=31744,Z[K|256]=64512,W[K]=13,W[K|256]=13}let H=new Uint32Array(2048),Y=new Uint32Array(64),X=new Uint32Array(64);for(let K=1;K<1024;++K){let U=K<<13,G=0;while((U&8388608)===0)U<<=1,G-=8388608;U&=-8388609,G+=947912704,H[K]=U|G}for(let K=1024;K<2048;++K)H[K]=939524096+(K-1024<<13);for(let K=1;K<31;++K)Y[K]=K<<23;Y[31]=1199570944,Y[32]=2147483648;for(let K=33;K<63;++K)Y[K]=2147483648+(K-32<<23);Y[63]=3347054592;for(let K=1;K<64;++K)if(K!==32)X[K]=1024;return{floatView:Q,uint32View:$,baseTable:Z,shiftTable:W,mantissaTable:H,exponentTable:Y,offsetTable:X}}function m0(J){if(Math.abs(J)>65504)console.warn("THREE.DataUtils.toHalfFloat(): Value out of range.");J=bJ(J,-65504,65504),x8.floatView[0]=J;let Q=x8.uint32View[0],$=Q>>23&511;return x8.baseTable[$]+((Q&8388607)>>x8.shiftTable[$])}function o6(J){let Q=J>>10;return x8.uint32View[0]=x8.mantissaTable[x8.offsetTable[Q]+(J&1023)]+x8.exponentTable[Q],x8.floatView[0]}class hX{static toHalfFloat(J){return m0(J)}static fromHalfFloat(J){return o6(J)}}var z0=new w,l7=new i,dE=0;class $0{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)l7.fromBufferAttribute(this,Q),l7.applyMatrix3(J),this.setXY(Q,l7.x,l7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)z0.fromBufferAttribute(this,Q),z0.applyMatrix3(J),this.setXYZ(Q,z0.x,z0.y,z0.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)z0.fromBufferAttribute(this,Q),z0.applyMatrix4(J),this.setXYZ(Q,z0.x,z0.y,z0.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)z0.fromBufferAttribute(this,Q),z0.applyNormalMatrix(J),this.setXYZ(Q,z0.x,z0.y,z0.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)z0.fromBufferAttribute(this,Q),z0.transformDirection(J),this.setXYZ(Q,z0.x,z0.y,z0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=x0($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=nJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=x0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=x0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=x0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=x0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array),W=nJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class bX extends $0{constructor(J,Q,$){super(new Int8Array(J),Q,$)}}class xX extends $0{constructor(J,Q,$){super(new Uint8Array(J),Q,$)}}class gX extends $0{constructor(J,Q,$){super(new Uint8ClampedArray(J),Q,$)}}class pX extends $0{constructor(J,Q,$){super(new Int16Array(J),Q,$)}}class mQ extends $0{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class lX extends $0{constructor(J,Q,$){super(new Int32Array(J),Q,$)}}class uQ extends $0{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class dX extends $0{constructor(J,Q,$){super(new Uint16Array(J),Q,$);this.isFloat16BufferAttribute=!0}getX(J){let Q=o6(this.array[J*this.itemSize]);if(this.normalized)Q=x0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize]=m0(Q),this}getY(J){let Q=o6(this.array[J*this.itemSize+1]);if(this.normalized)Q=x0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+1]=m0(Q),this}getZ(J){let Q=o6(this.array[J*this.itemSize+2]);if(this.normalized)Q=x0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+2]=m0(Q),this}getW(J){let Q=o6(this.array[J*this.itemSize+3]);if(this.normalized)Q=x0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.array[J*this.itemSize+3]=m0(Q),this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0($),this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0($),this.array[J+2]=m0(Z),this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array),W=nJ(W,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0($),this.array[J+2]=m0(Z),this.array[J+3]=m0(W),this}}class VJ extends $0{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var mE=0,W8=new SJ,i$=new eJ,$6=new w,i0=new _0,g6=new _0,P0=new w;class pJ extends k8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=a0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((NW(J))?uQ:mQ)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new mJ().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return W8.makeRotationFromQuaternion(J),this.applyMatrix4(W8),this}rotateX(J){return W8.makeRotationX(J),this.applyMatrix4(W8),this}rotateY(J){return W8.makeRotationY(J),this.applyMatrix4(W8),this}rotateZ(J){return W8.makeRotationZ(J),this.applyMatrix4(W8),this}translate(J,Q,$){return W8.makeTranslation(J,Q,$),this.applyMatrix4(W8),this}scale(J,Q,$){return W8.makeScale(J,Q,$),this.applyMatrix4(W8),this}lookAt(J){return i$.lookAt(J),i$.updateMatrix(),this.applyMatrix4(i$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($6).negate(),this.translate($6.x,$6.y,$6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new VJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new _0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(i0.setFromBufferAttribute(W),this.morphTargetsRelative)P0.addVectors(this.boundingBox.min,i0.min),this.boundingBox.expandByPoint(P0),P0.addVectors(this.boundingBox.max,i0.max),this.boundingBox.expandByPoint(P0);else this.boundingBox.expandByPoint(i0.min),this.boundingBox.expandByPoint(i0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new C0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(J){let $=this.boundingSphere.center;if(i0.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(g6.setFromBufferAttribute(Y),this.morphTargetsRelative)P0.addVectors(i0.min,g6.min),i0.expandByPoint(P0),P0.addVectors(i0.max,g6.max),i0.expandByPoint(P0);else i0.expandByPoint(g6.min),i0.expandByPoint(g6.max)}i0.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)P0.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(P0));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(P0.fromBufferAttribute(Y,K),X)$6.fromBufferAttribute(J,K),P0.add($6);Z=Math.max(Z,$.distanceToSquared(P0))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new $0(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let I=0;I<$.count;I++)Y[I]=new w,X[I]=new w;let K=new w,U=new w,G=new w,E=new i,q=new i,N=new i,R=new w,k=new w;function F(I,v,z){K.fromBufferAttribute($,I),U.fromBufferAttribute($,v),G.fromBufferAttribute($,z),E.fromBufferAttribute(W,I),q.fromBufferAttribute(W,v),N.fromBufferAttribute(W,z),U.sub(K),G.sub(K),q.sub(E),N.sub(E);let C=1/(q.x*N.y-N.x*q.y);if(!isFinite(C))return;R.copy(U).multiplyScalar(N.y).addScaledVector(G,-q.y).multiplyScalar(C),k.copy(G).multiplyScalar(q.x).addScaledVector(U,-N.x).multiplyScalar(C),Y[I].add(R),Y[v].add(R),Y[z].add(R),X[I].add(k),X[v].add(k),X[z].add(k)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let I=0,v=O.length;I<v;++I){let z=O[I],C=z.start,S=z.count;for(let p=C,d=C+S;p<d;p+=3)F(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let D=new w,M=new w,V=new w,P=new w;function _(I){V.fromBufferAttribute(Z,I),P.copy(V);let v=Y[I];D.copy(v),D.sub(V.multiplyScalar(V.dot(v))).normalize(),M.crossVectors(P,v);let C=M.dot(X[I])<0?-1:1;H.setXYZW(I,D.x,D.y,D.z,C)}for(let I=0,v=O.length;I<v;++I){let z=O[I],C=z.start,S=z.count;for(let p=C,d=C+S;p<d;p+=3)_(J.getX(p+0)),_(J.getX(p+1)),_(J.getX(p+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new $0(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,q=$.count;E<q;E++)$.setXYZ(E,0,0,0);let Z=new w,W=new w,H=new w,Y=new w,X=new w,K=new w,U=new w,G=new w;if(J)for(let E=0,q=J.count;E<q;E+=3){let N=J.getX(E+0),R=J.getX(E+1),k=J.getX(E+2);Z.fromBufferAttribute(Q,N),W.fromBufferAttribute(Q,R),H.fromBufferAttribute(Q,k),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,N),X.fromBufferAttribute($,R),K.fromBufferAttribute($,k),Y.add(U),X.add(U),K.add(U),$.setXYZ(N,Y.x,Y.y,Y.z),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(k,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)P0.fromBufferAttribute(J,Q),P0.normalize(),J.setXYZ(Q,P0.x,P0.y,P0.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,N=0;for(let R=0,k=X.length;R<k;R++){if(Y.isInterleavedBufferAttribute)q=X[R]*Y.data.stride+Y.offset;else q=X[R]*U;for(let F=0;F<U;F++)E[N++]=K[q++]}return new $0(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new pJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,$);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let K=$[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var gH=new SJ,M9=new f9,d7=new C0,pH=new w,m7=new w,u7=new w,c7=new w,a$=new w,n7=new w,lH=new w,s7=new w;class k0 extends eJ{constructor(J=new pJ,Q=new p0){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){n7.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(a$.fromBufferAttribute(G,J),H)n7.addScaledVector(a$,U);else n7.addScaledVector(a$.sub(Q),U)}Q.add(n7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(d7.copy($.boundingSphere),d7.applyMatrix4(W),M9.copy(J.ray).recast(J.near),d7.containsPoint(M9.origin)===!1){if(M9.intersectSphere(d7,pH)===null)return;if(M9.origin.distanceToSquared(pH)>(J.far-J.near)**2)return}if(gH.copy(W).invert(),M9.copy(J.ray).applyMatrix4(gH),$.boundingBox!==null){if(M9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,M9)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let N=0,R=E.length;N<R;N++){let k=E[N],F=H[k.materialIndex],O=Math.max(k.start,q.start),D=Math.min(Y.count,Math.min(k.start+k.count,q.start+q.count));for(let M=O,V=D;M<V;M+=3){let P=Y.getX(M),_=Y.getX(M+1),I=Y.getX(M+2);if(Z=o7(this,F,J,$,K,U,G,P,_,I),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let N=Math.max(0,q.start),R=Math.min(Y.count,q.start+q.count);for(let k=N,F=R;k<F;k+=3){let O=Y.getX(k),D=Y.getX(k+1),M=Y.getX(k+2);if(Z=o7(this,H,J,$,K,U,G,O,D,M),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(H))for(let N=0,R=E.length;N<R;N++){let k=E[N],F=H[k.materialIndex],O=Math.max(k.start,q.start),D=Math.min(X.count,Math.min(k.start+k.count,q.start+q.count));for(let M=O,V=D;M<V;M+=3){let P=M,_=M+1,I=M+2;if(Z=o7(this,F,J,$,K,U,G,P,_,I),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let N=Math.max(0,q.start),R=Math.min(X.count,q.start+q.count);for(let k=N,F=R;k<F;k+=3){let O=k,D=k+1,M=k+2;if(Z=o7(this,H,J,$,K,U,G,O,D,M),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}}}function uE(J,Q,$,Z,W,H,Y,X){let K;if(Q.side===1)K=Z.intersectTriangle(Y,H,W,!0,X);else K=Z.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;s7.copy(X),s7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(s7);if(U<$.near||U>$.far)return null;return{distance:U,point:s7.clone(),object:J}}function o7(J,Q,$,Z,W,H,Y,X,K,U){J.getVertexPosition(X,m7),J.getVertexPosition(K,u7),J.getVertexPosition(U,c7);let G=uE(J,Q,$,Z,m7,u7,c7,lH);if(G){let E=new w;if(u0.getBarycoord(lH,m7,u7,c7,E),W)G.uv=u0.getInterpolatedAttribute(W,X,K,U,E,new i);if(H)G.uv1=u0.getInterpolatedAttribute(H,X,K,U,E,new i);if(Y){if(G.normal=u0.getInterpolatedAttribute(Y,X,K,U,E,new w),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new w,materialIndex:0};u0.getNormal(m7,u7,c7,q.normal),G.face=q,G.barycoord=E}return G}class h9 extends pJ{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;N("z","y","x",-1,-1,$,Q,J,H,W,0),N("z","y","x",1,-1,$,Q,-J,H,W,1),N("x","z","y",1,1,J,$,Q,Z,H,2),N("x","z","y",1,-1,J,$,-Q,Z,H,3),N("x","y","z",1,-1,J,Q,$,Z,W,4),N("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new VJ(K,3)),this.setAttribute("normal",new VJ(U,3)),this.setAttribute("uv",new VJ(G,2));function N(R,k,F,O,D,M,V,P,_,I,v){let z=M/_,C=V/I,S=M/2,p=V/2,d=P/2,x=_+1,a=I+1,m=0,QJ=0,l=new w;for(let qJ=0;qJ<a;qJ++){let NJ=qJ*C-p;for(let jJ=0;jJ<x;jJ++){let dJ=jJ*z-S;l[R]=dJ*O,l[k]=NJ*D,l[F]=d,K.push(l.x,l.y,l.z),l[R]=0,l[k]=0,l[F]=P>0?1:-1,U.push(l.x,l.y,l.z),G.push(jJ/_),G.push(1-qJ/I),m+=1}}for(let qJ=0;qJ<I;qJ++)for(let NJ=0;NJ<_;NJ++){let jJ=E+NJ+x*qJ,dJ=E+NJ+x*(qJ+1),G0=E+(NJ+1)+x*(qJ+1),J0=E+(NJ+1)+x*qJ;X.push(jJ,dJ,J0),X.push(dJ,G0,J0),QJ+=6}Y.addGroup(q,QJ,v),q+=QJ,E+=m}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function b9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function f0(J){let Q={};for(let $=0;$<J.length;$++){let Z=b9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function cE(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function FW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return aJ.workingColorSpace}var mX={clone:b9,merge:f0},nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Y8 extends V0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=b9(J.uniforms),this.uniformsGroups=cE(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class N7 extends eJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new SJ,this.projectionMatrix=new SJ,this.projectionMatrixInverse=new SJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var e8=new w,dH=new i,mH=new i;class B0 extends N7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=A9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(T9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return A9*2*Math.atan(Math.tan(T9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){e8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(e8.x,e8.y).multiplyScalar(-J/e8.z),e8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(e8.x,e8.y).multiplyScalar(-J/e8.z)}getViewSize(J,Q){return this.getViewBounds(J,dH,mH),Q.subVectors(mH,dH)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(T9*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*Z/X,Q-=H.offsetY*$/K,Z*=H.width/X,$*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var Z6=-90,W6=1;class RW extends eJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new B0(Z6,W6,J,Q);Z.layers=this.layers,this.add(Z);let W=new B0(Z6,W6,J,Q);W.layers=this.layers,this.add(W);let H=new B0(Z6,W6,J,Q);H.layers=this.layers,this.add(H);let Y=new B0(Z6,W6,J,Q);Y.layers=this.layers,this.add(Y);let X=new B0(Z6,W6,J,Q);X.layers=this.layers,this.add(X);let K=new B0(Z6,W6,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),N=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,X),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=N,$.texture.needsPMREMUpdate=!0}}class w6 extends N0{constructor(J=[],Q=301,$,Z,W,H,Y,X,K,U){super(J,Q,$,Z,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class kW extends M8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new w6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new h9(5,5,5),W=new Y8({name:"CubemapFromEquirect",uniforms:b9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new k0(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new RW(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class q8 extends eJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var oE={type:"move"};class O7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new q8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new q8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new q8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let R of J.hand.values()){let k=Q.getJointPose(R,$),F=this._getHandJoint(K,R);if(k!==null)F.matrix.fromArray(k.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=k.radius;F.visible=k!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,N=0.005;if(K.inputState.pinching&&E>q+N)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-N)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(oE)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new q8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class cQ{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new EJ(J),this.density=Q}clone(){return new cQ(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nQ{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new EJ(J),this.near=Q,this.far=$}clone(){return new nQ(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class MW extends eJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new r0,this.environmentIntensity=1,this.environmentRotation=new r0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class K9{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=a0()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=a0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=a0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var b0=new w;class C8{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)b0.fromBufferAttribute(this,Q),b0.applyMatrix4(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)b0.fromBufferAttribute(this,Q),b0.applyNormalMatrix(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)b0.fromBufferAttribute(this,Q),b0.transformDirection(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=x0($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=nJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=nJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=x0(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=x0(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=x0(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=x0(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=nJ(Q,this.array),$=nJ($,this.array),Z=nJ(Z,this.array),W=nJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new $0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new C8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class sQ extends V0{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new EJ(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var H6,p6=new w,Y6=new w,X6=new w,K6=new i,l6=new i,uX=new SJ,i7=new w,d6=new w,a7=new w,uH=new i,r$=new i,cH=new i;class DW extends eJ{constructor(J=new sQ){super();if(this.isSprite=!0,this.type="Sprite",H6===void 0){H6=new pJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new K9(Q,5);H6.setIndex([0,1,2,0,2,3]),H6.setAttribute("position",new C8($,3,0,!1)),H6.setAttribute("uv",new C8($,2,3,!1))}this.geometry=H6,this.material=J,this.center=new i(0.5,0.5),this.count=1}raycast(J,Q){if(J.camera===null)console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Y6.setFromMatrixScale(this.matrixWorld),uX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),X6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Y6.multiplyScalar(-X6.z);let $=this.material.rotation,Z,W;if($!==0)W=Math.cos($),Z=Math.sin($);let H=this.center;r7(i7.set(-0.5,-0.5,0),X6,H,Y6,Z,W),r7(d6.set(0.5,-0.5,0),X6,H,Y6,Z,W),r7(a7.set(0.5,0.5,0),X6,H,Y6,Z,W),uH.set(0,0),r$.set(1,0),cH.set(1,1);let Y=J.ray.intersectTriangle(i7,d6,a7,!1,p6);if(Y===null){if(r7(d6.set(-0.5,0.5,0),X6,H,Y6,Z,W),r$.set(0,1),Y=J.ray.intersectTriangle(i7,a7,d6,!1,p6),Y===null)return}let X=J.ray.origin.distanceTo(p6);if(X<J.near||X>J.far)return;Q.push({distance:X,point:p6.clone(),uv:u0.getInterpolation(p6,i7,d6,a7,uH,r$,cH,new i),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function r7(J,Q,$,Z,W,H){if(K6.subVectors(J,$).addScalar(0.5).multiply(Z),W!==void 0)l6.x=H*K6.x-W*K6.y,l6.y=W*K6.x+H*K6.y;else l6.copy(K6);J.copy(Q),J.x+=l6.x,J.y+=l6.y,J.applyMatrix4(uX)}var t7=new w,nH=new w;class LW extends eJ{constructor(){super();this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(J){super.copy(J,!1);let Q=J.levels;for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];this.addLevel(W.object.clone(),W.distance,W.hysteresis)}return this.autoUpdate=J.autoUpdate,this}addLevel(J,Q=0,$=0){Q=Math.abs(Q);let Z=this.levels,W;for(W=0;W<Z.length;W++)if(Q<Z[W].distance)break;return Z.splice(W,0,{distance:Q,hysteresis:$,object:J}),this.add(J),this}removeLevel(J){let Q=this.levels;for(let $=0;$<Q.length;$++)if(Q[$].distance===J){let Z=Q.splice($,1);return this.remove(Z[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(J){let Q=this.levels;if(Q.length>0){let $,Z;for($=1,Z=Q.length;$<Z;$++){let W=Q[$].distance;if(Q[$].object.visible)W-=W*Q[$].hysteresis;if(J<W)break}return Q[$-1].object}return null}raycast(J,Q){if(this.levels.length>0){t7.setFromMatrixPosition(this.matrixWorld);let Z=J.ray.origin.distanceTo(t7);this.getObjectForDistance(Z).raycast(J,Q)}}update(J){let Q=this.levels;if(Q.length>1){t7.setFromMatrixPosition(J.matrixWorld),nH.setFromMatrixPosition(this.matrixWorld);let $=t7.distanceTo(nH)/J.zoom;Q[0].object.visible=!0;let Z,W;for(Z=1,W=Q.length;Z<W;Z++){let H=Q[Z].distance;if(Q[Z].object.visible)H-=H*Q[Z].hysteresis;if($>=H)Q[Z-1].object.visible=!1,Q[Z].object.visible=!0;else break}this._currentLevel=Z-1;for(;Z<W;Z++)Q[Z].object.visible=!1}}toJSON(J){let Q=super.toJSON(J);if(this.autoUpdate===!1)Q.object.autoUpdate=!1;Q.object.levels=[];let $=this.levels;for(let Z=0,W=$.length;Z<W;Z++){let H=$[Z];Q.object.levels.push({object:H.object.uuid,distance:H.distance,hysteresis:H.hysteresis})}return Q}}var sH=new w,oH=new Z0,iH=new Z0,iE=new w,aH=new SJ,e7=new w,t$=new C0,rH=new SJ,e$=new f9;class F7 extends k0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new SJ,this.bindMatrixInverse=new SJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new _0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,e7),this.boundingBox.expandByPoint(e7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new C0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,e7),this.boundingSphere.expandByPoint(e7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(t$.copy(this.boundingSphere),t$.applyMatrix4(Z),J.ray.intersectsSphere(t$)===!1)return;if(rH.copy(Z).invert(),e$.copy(J.ray).applyMatrix4(rH),this.boundingBox!==null){if(e$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,e$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new Z0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;oH.fromBufferAttribute(Z.attributes.skinIndex,J),iH.fromBufferAttribute(Z.attributes.skinWeight,J),sH.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=iH.getComponent(W);if(H!==0){let Y=oH.getComponent(W);aH.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(iE.copy(sH).applyMatrix4(aH),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class I6 extends eJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class O8 extends N0{constructor(J=null,Q=1,$=1,Z,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var tH=new SJ,aE=new SJ;class P6{constructor(J=[],Q=[]){this.uuid=a0(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new SJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new SJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:aE;tH.multiplyMatrices(Y,Q[W]),tH.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new P6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new O8(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new I6;this.bones.push(H),this.boneInverses.push(new SJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z];J.bones.push(H.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class _8 extends $0{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var U6=new SJ,eH=new SJ,JQ=[],JY=new _0,rE=new SJ,m6=new k0,u6=new C0;class R7 extends k0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new _8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,rE)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new _0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U6),JY.copy(J.boundingBox).applyMatrix4(U6),this.boundingBox.union(JY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new C0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U6),u6.copy(J.boundingSphere).applyMatrix4(U6),this.boundingSphere.union(u6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,H=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[H+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(m6.geometry=this.geometry,m6.material=this.material,m6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(u6.copy(this.boundingSphere),u6.applyMatrix4($),J.ray.intersectsSphere(u6)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,U6),eH.multiplyMatrices($,U6),m6.matrixWorld=eH,m6.raycast(J,JQ);for(let H=0,Y=JQ.length;H<Y;H++){let X=JQ[H];X.instanceId=W,X.object=this,Q.push(X)}JQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new _8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new O8(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<$.length;K++)H+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=Z*J;W[X]=Y,W.set($,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var JZ=new w,tE=new w,eE=new mJ;class b8{constructor(J=new w(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=JZ.subVectors($,Q).cross(tE.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(JZ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||eE.getNormalMatrix(J),Z=this.coplanarPoint(JZ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var D9=new C0,J1=new i(0.5,0.5),QQ=new w;class x9{constructor(J=new b8,Q=new b8,$=new b8,Z=new b8,W=new b8,H=new b8){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],E=W[6],q=W[7],N=W[8],R=W[9],k=W[10],F=W[11],O=W[12],D=W[13],M=W[14],V=W[15];if(Z[0].setComponents(K-H,q-U,F-N,V-O).normalize(),Z[1].setComponents(K+H,q+U,F+N,V+O).normalize(),Z[2].setComponents(K+Y,q+G,F+R,V+D).normalize(),Z[3].setComponents(K-Y,q-G,F-R,V-D).normalize(),$)Z[4].setComponents(X,E,k,M).normalize(),Z[5].setComponents(K-X,q-E,F-k,V-M).normalize();else if(Z[4].setComponents(K-X,q-E,F-k,V-M).normalize(),Q===2000)Z[5].setComponents(K+X,q+E,F+k,V+M).normalize();else if(Q===2001)Z[5].setComponents(X,E,k,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();D9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();D9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(D9)}intersectsSprite(J){D9.center.set(0,0,0);let Q=J1.distanceTo(J.center);return D9.radius=0.7071067811865476+Q,D9.applyMatrix4(J.matrixWorld),this.intersectsSphere(D9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(QQ.x=Z.normal.x>0?J.max.x:J.min.x,QQ.y=Z.normal.y>0?J.max.y:J.min.y,QQ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(QQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var V8=new SJ,z8=new x9;class oQ{constructor(){this.coordinateSystem=2000}intersectsObject(J,Q){if(!Q.isArrayCamera||Q.cameras.length===0)return!1;for(let $=0;$<Q.cameras.length;$++){let Z=Q.cameras[$];if(V8.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z8.setFromProjectionMatrix(V8,Z.coordinateSystem,Z.reversedDepth),z8.intersectsObject(J))return!0}return!1}intersectsSprite(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let $=0;$<Q.cameras.length;$++){let Z=Q.cameras[$];if(V8.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z8.setFromProjectionMatrix(V8,Z.coordinateSystem,Z.reversedDepth),z8.intersectsSprite(J))return!0}return!1}intersectsSphere(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let $=0;$<Q.cameras.length;$++){let Z=Q.cameras[$];if(V8.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z8.setFromProjectionMatrix(V8,Z.coordinateSystem,Z.reversedDepth),z8.intersectsSphere(J))return!0}return!1}intersectsBox(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let $=0;$<Q.cameras.length;$++){let Z=Q.cameras[$];if(V8.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z8.setFromProjectionMatrix(V8,Z.coordinateSystem,Z.reversedDepth),z8.intersectsBox(J))return!0}return!1}containsPoint(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let $=0;$<Q.cameras.length;$++){let Z=Q.cameras[$];if(V8.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z8.setFromProjectionMatrix(V8,Z.coordinateSystem,Z.reversedDepth),z8.containsPoint(J))return!0}return!1}clone(){return new oQ}}function QZ(J,Q){return J-Q}function Q1(J,Q){return J.z-Q.z}function $1(J,Q){return Q.z-J.z}class cX{constructor(){this.index=0,this.pool=[],this.list=[]}push(J,Q,$,Z){let W=this.pool,H=this.list;if(this.index>=W.length)W.push({start:-1,count:-1,z:-1,index:-1});let Y=W[this.index];H.push(Y),this.index++,Y.start=J,Y.count=Q,Y.z=$,Y.index=Z}reset(){this.list.length=0,this.index=0}}var d0=new SJ,Z1=new EJ(1,1,1),QY=new x9,W1=new oQ,$Q=new _0,L9=new C0,c6=new w,$Y=new w,H1=new w,$Z=new cX,y0=new k0,ZQ=[];function Y1(J,Q,$=0){let Z=Q.itemSize;if(J.isInterleavedBufferAttribute||J.array.constructor!==Q.array.constructor){let W=J.count;for(let H=0;H<W;H++)for(let Y=0;Y<Z;Y++)Q.setComponent(H+$,Y,J.getComponent(H,Y))}else Q.array.set(J.array,$*Z);Q.needsUpdate=!0}function V9(J,Q){if(J.constructor!==Q.constructor){let $=Math.min(J.length,Q.length);for(let Z=0;Z<$;Z++)Q[Z]=J[Z]}else{let $=Math.min(J.length,Q.length);Q.set(new J.constructor(J.buffer,0,$))}}class VW extends k0{constructor(J,Q,$=Q*2,Z){super(new pJ,Z);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=J,this._maxVertexCount=Q,this._maxIndexCount=$,this._multiDrawCounts=new Int32Array(J),this._multiDrawStarts=new Int32Array(J),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let J=Math.sqrt(this._maxInstanceCount*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4),$=new O8(Q,J,J,1023,1015);this._matricesTexture=$}_initIndirectTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Uint32Array(J*J),$=new O8(Q,J,J,1029,1014);this._indirectTexture=$}_initColorsTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Float32Array(J*J*4).fill(1),$=new O8(Q,J,J,1023,1015);$.colorSpace=aJ.workingColorSpace,this._colorsTexture=$}_initializeGeometry(J){let Q=this.geometry,$=this._maxVertexCount,Z=this._maxIndexCount;if(this._geometryInitialized===!1){for(let W in J.attributes){let H=J.getAttribute(W),{array:Y,itemSize:X,normalized:K}=H,U=new Y.constructor($*X),G=new $0(U,X,K);Q.setAttribute(W,G)}if(J.getIndex()!==null){let W=$>65535?new Uint32Array(Z):new Uint16Array(Z);Q.setIndex(new $0(W,1))}this._geometryInitialized=!0}}_validateGeometry(J){let Q=this.geometry;if(Boolean(J.getIndex())!==Boolean(Q.getIndex()))throw Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let $ in Q.attributes){if(!J.hasAttribute($))throw Error(`THREE.BatchedMesh: Added geometry missing "${$}". All geometries must have consistent attributes.`);let Z=J.getAttribute($),W=Q.getAttribute($);if(Z.itemSize!==W.itemSize||Z.normalized!==W.normalized)throw Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(J){let Q=this._instanceInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${J}. Instance is either out of range or has been deleted.`)}validateGeometryId(J){let Q=this._geometryInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${J}. Geometry is either out of range or has been deleted.`)}setCustomSort(J){return this.customSort=J,this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new _0;let J=this.boundingBox,Q=this._instanceInfo;J.makeEmpty();for(let $=0,Z=Q.length;$<Z;$++){if(Q[$].active===!1)continue;let W=Q[$].geometryIndex;this.getMatrixAt($,d0),this.getBoundingBoxAt(W,$Q).applyMatrix4(d0),J.union($Q)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new C0;let J=this.boundingSphere,Q=this._instanceInfo;J.makeEmpty();for(let $=0,Z=Q.length;$<Z;$++){if(Q[$].active===!1)continue;let W=Q[$].geometryIndex;this.getMatrixAt($,d0),this.getBoundingSphereAt(W,L9).applyMatrix4(d0),J.union(L9)}}addInstance(J){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error("THREE.BatchedMesh: Maximum item count reached.");let $={visible:!0,active:!0,geometryIndex:J},Z=null;if(this._availableInstanceIds.length>0)this._availableInstanceIds.sort(QZ),Z=this._availableInstanceIds.shift(),this._instanceInfo[Z]=$;else Z=this._instanceInfo.length,this._instanceInfo.push($);let W=this._matricesTexture;d0.identity().toArray(W.image.data,Z*16),W.needsUpdate=!0;let H=this._colorsTexture;if(H)Z1.toArray(H.image.data,Z*4),H.needsUpdate=!0;return this._visibilityChanged=!0,Z}addGeometry(J,Q=-1,$=-1){this._initializeGeometry(J),this._validateGeometry(J);let Z={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},W=this._geometryInfo;Z.vertexStart=this._nextVertexStart,Z.reservedVertexCount=Q===-1?J.getAttribute("position").count:Q;let H=J.getIndex();if(H!==null)Z.indexStart=this._nextIndexStart,Z.reservedIndexCount=$===-1?H.count:$;if(Z.indexStart!==-1&&Z.indexStart+Z.reservedIndexCount>this._maxIndexCount||Z.vertexStart+Z.reservedVertexCount>this._maxVertexCount)throw Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let X;if(this._availableGeometryIds.length>0)this._availableGeometryIds.sort(QZ),X=this._availableGeometryIds.shift(),W[X]=Z;else X=this._geometryCount,this._geometryCount++,W.push(Z);return this.setGeometryAt(X,J),this._nextIndexStart=Z.indexStart+Z.reservedIndexCount,this._nextVertexStart=Z.vertexStart+Z.reservedVertexCount,X}setGeometryAt(J,Q){if(J>=this._geometryCount)throw Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(Q);let $=this.geometry,Z=$.getIndex()!==null,W=$.getIndex(),H=Q.getIndex(),Y=this._geometryInfo[J];if(Z&&H.count>Y.reservedIndexCount||Q.attributes.position.count>Y.reservedVertexCount)throw Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let{vertexStart:X,reservedVertexCount:K}=Y;Y.vertexCount=Q.getAttribute("position").count;for(let U in $.attributes){let G=Q.getAttribute(U),E=$.getAttribute(U);Y1(G,E,X);let q=G.itemSize;for(let N=G.count,R=K;N<R;N++){let k=X+N;for(let F=0;F<q;F++)E.setComponent(k,F,0)}E.needsUpdate=!0,E.addUpdateRange(X*q,K*q)}if(Z){let{indexStart:U,reservedIndexCount:G}=Y;Y.indexCount=Q.getIndex().count;for(let E=0;E<H.count;E++)W.setX(U+E,X+H.getX(E));for(let E=H.count,q=G;E<q;E++)W.setX(U+E,X);W.needsUpdate=!0,W.addUpdateRange(U,Y.reservedIndexCount)}if(Y.start=Z?Y.indexStart:Y.vertexStart,Y.count=Z?Y.indexCount:Y.vertexCount,Y.boundingBox=null,Q.boundingBox!==null)Y.boundingBox=Q.boundingBox.clone();if(Y.boundingSphere=null,Q.boundingSphere!==null)Y.boundingSphere=Q.boundingSphere.clone();return this._visibilityChanged=!0,J}deleteGeometry(J){let Q=this._geometryInfo;if(J>=Q.length||Q[J].active===!1)return this;let $=this._instanceInfo;for(let Z=0,W=$.length;Z<W;Z++)if($[Z].active&&$[Z].geometryIndex===J)this.deleteInstance(Z);return Q[J].active=!1,this._availableGeometryIds.push(J),this._visibilityChanged=!0,this}deleteInstance(J){return this.validateInstanceId(J),this._instanceInfo[J].active=!1,this._availableInstanceIds.push(J),this._visibilityChanged=!0,this}optimize(){let J=0,Q=0,$=this._geometryInfo,Z=$.map((H,Y)=>Y).sort((H,Y)=>{return $[H].vertexStart-$[Y].vertexStart}),W=this.geometry;for(let H=0,Y=$.length;H<Y;H++){let X=Z[H],K=$[X];if(K.active===!1)continue;if(W.index!==null){if(K.indexStart!==Q){let{indexStart:U,vertexStart:G,reservedIndexCount:E}=K,q=W.index,N=q.array,R=J-G;for(let k=U;k<U+E;k++)N[k]=N[k]+R;q.array.copyWithin(Q,U,U+E),q.addUpdateRange(Q,E),K.indexStart=Q}Q+=K.reservedIndexCount}if(K.vertexStart!==J){let{vertexStart:U,reservedVertexCount:G}=K,E=W.attributes;for(let q in E){let N=E[q],{array:R,itemSize:k}=N;R.copyWithin(J*k,U*k,(U+G)*k),N.addUpdateRange(J*k,G*k)}K.vertexStart=J}J+=K.reservedVertexCount,K.start=W.index?K.indexStart:K.vertexStart,this._nextIndexStart=W.index?K.indexStart+K.reservedIndexCount:0,this._nextVertexStart=K.vertexStart+K.reservedVertexCount}return this}getBoundingBoxAt(J,Q){if(J>=this._geometryCount)return null;let $=this.geometry,Z=this._geometryInfo[J];if(Z.boundingBox===null){let W=new _0,H=$.index,Y=$.attributes.position;for(let X=Z.start,K=Z.start+Z.count;X<K;X++){let U=X;if(H)U=H.getX(U);W.expandByPoint(c6.fromBufferAttribute(Y,U))}Z.boundingBox=W}return Q.copy(Z.boundingBox),Q}getBoundingSphereAt(J,Q){if(J>=this._geometryCount)return null;let $=this.geometry,Z=this._geometryInfo[J];if(Z.boundingSphere===null){let W=new C0;this.getBoundingBoxAt(J,$Q),$Q.getCenter(W.center);let H=$.index,Y=$.attributes.position,X=0;for(let K=Z.start,U=Z.start+Z.count;K<U;K++){let G=K;if(H)G=H.getX(G);c6.fromBufferAttribute(Y,G),X=Math.max(X,W.center.distanceToSquared(c6))}W.radius=Math.sqrt(X),Z.boundingSphere=W}return Q.copy(Z.boundingSphere),Q}setMatrixAt(J,Q){this.validateInstanceId(J);let $=this._matricesTexture,Z=this._matricesTexture.image.data;return Q.toArray(Z,J*16),$.needsUpdate=!0,this}getMatrixAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._matricesTexture.image.data,J*16)}setColorAt(J,Q){if(this.validateInstanceId(J),this._colorsTexture===null)this._initColorsTexture();return Q.toArray(this._colorsTexture.image.data,J*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._colorsTexture.image.data,J*4)}setVisibleAt(J,Q){if(this.validateInstanceId(J),this._instanceInfo[J].visible===Q)return this;return this._instanceInfo[J].visible=Q,this._visibilityChanged=!0,this}getVisibleAt(J){return this.validateInstanceId(J),this._instanceInfo[J].visible}setGeometryIdAt(J,Q){return this.validateInstanceId(J),this.validateGeometryId(Q),this._instanceInfo[J].geometryIndex=Q,this}getGeometryIdAt(J){return this.validateInstanceId(J),this._instanceInfo[J].geometryIndex}getGeometryRangeAt(J,Q={}){this.validateGeometryId(J);let $=this._geometryInfo[J];return Q.vertexStart=$.vertexStart,Q.vertexCount=$.vertexCount,Q.reservedVertexCount=$.reservedVertexCount,Q.indexStart=$.indexStart,Q.indexCount=$.indexCount,Q.reservedIndexCount=$.reservedIndexCount,Q.start=$.start,Q.count=$.count,Q}setInstanceCount(J){let Q=this._availableInstanceIds,$=this._instanceInfo;Q.sort(QZ);while(Q[Q.length-1]===$.length-1)$.pop(),Q.pop();if(J<$.length)throw Error(`BatchedMesh: Instance ids outside the range ${J} are being used. Cannot shrink instance count.`);let Z=new Int32Array(J),W=new Int32Array(J);V9(this._multiDrawCounts,Z),V9(this._multiDrawStarts,W),this._multiDrawCounts=Z,this._multiDrawStarts=W,this._maxInstanceCount=J;let H=this._indirectTexture,Y=this._matricesTexture,X=this._colorsTexture;if(H.dispose(),this._initIndirectTexture(),V9(H.image.data,this._indirectTexture.image.data),Y.dispose(),this._initMatricesTexture(),V9(Y.image.data,this._matricesTexture.image.data),X)X.dispose(),this._initColorsTexture(),V9(X.image.data,this._colorsTexture.image.data)}setGeometrySize(J,Q){let $=[...this._geometryInfo].filter((Y)=>Y.active);if(Math.max(...$.map((Y)=>Y.vertexStart+Y.reservedVertexCount))>J)throw Error(`BatchedMesh: Geometry vertex values are being used outside the range ${Q}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...$.map((X)=>X.indexStart+X.reservedIndexCount))>Q)throw Error(`BatchedMesh: Geometry index values are being used outside the range ${Q}. Cannot shrink further.`)}let W=this.geometry;if(W.dispose(),this._maxVertexCount=J,this._maxIndexCount=Q,this._geometryInitialized)this._geometryInitialized=!1,this.geometry=new pJ,this._initializeGeometry(W);let H=this.geometry;if(W.index)V9(W.index.array,H.index.array);for(let Y in W.attributes)V9(W.attributes[Y].array,H.attributes[Y].array)}raycast(J,Q){let $=this._instanceInfo,Z=this._geometryInfo,W=this.matrixWorld,H=this.geometry;if(y0.material=this.material,y0.geometry.index=H.index,y0.geometry.attributes=H.attributes,y0.geometry.boundingBox===null)y0.geometry.boundingBox=new _0;if(y0.geometry.boundingSphere===null)y0.geometry.boundingSphere=new C0;for(let Y=0,X=$.length;Y<X;Y++){if(!$[Y].visible||!$[Y].active)continue;let K=$[Y].geometryIndex,U=Z[K];y0.geometry.setDrawRange(U.start,U.count),this.getMatrixAt(Y,y0.matrixWorld).premultiply(W),this.getBoundingBoxAt(K,y0.geometry.boundingBox),this.getBoundingSphereAt(K,y0.geometry.boundingSphere),y0.raycast(J,ZQ);for(let G=0,E=ZQ.length;G<E;G++){let q=ZQ[G];q.object=this,q.batchId=Y,Q.push(q)}ZQ.length=0}y0.material=null,y0.geometry.index=null,y0.geometry.attributes={},y0.geometry.setDrawRange(0,1/0)}copy(J){if(super.copy(J),this.geometry=J.geometry.clone(),this.perObjectFrustumCulled=J.perObjectFrustumCulled,this.sortObjects=J.sortObjects,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this._geometryInfo=J._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox!==null?Q.boundingBox.clone():null,boundingSphere:Q.boundingSphere!==null?Q.boundingSphere.clone():null})),this._instanceInfo=J._instanceInfo.map((Q)=>({...Q})),this._availableInstanceIds=J._availableInstanceIds.slice(),this._availableGeometryIds=J._availableGeometryIds.slice(),this._nextIndexStart=J._nextIndexStart,this._nextVertexStart=J._nextVertexStart,this._geometryCount=J._geometryCount,this._maxInstanceCount=J._maxInstanceCount,this._maxVertexCount=J._maxVertexCount,this._maxIndexCount=J._maxIndexCount,this._geometryInitialized=J._geometryInitialized,this._multiDrawCounts=J._multiDrawCounts.slice(),this._multiDrawStarts=J._multiDrawStarts.slice(),this._indirectTexture=J._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=J._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null)this._colorsTexture=J._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice();return this}dispose(){if(this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null)this._colorsTexture.dispose(),this._colorsTexture=null}onBeforeRender(J,Q,$,Z,W){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let H=Z.getIndex(),Y=H===null?1:H.array.BYTES_PER_ELEMENT,X=this._instanceInfo,K=this._multiDrawStarts,U=this._multiDrawCounts,G=this._geometryInfo,E=this.perObjectFrustumCulled,q=this._indirectTexture,N=q.image.data,R=$.isArrayCamera?W1:QY;if(E&&!$.isArrayCamera)d0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse).multiply(this.matrixWorld),QY.setFromProjectionMatrix(d0,$.coordinateSystem,$.reversedDepth);let k=0;if(this.sortObjects){d0.copy(this.matrixWorld).invert(),c6.setFromMatrixPosition($.matrixWorld).applyMatrix4(d0),$Y.set(0,0,-1).transformDirection($.matrixWorld).transformDirection(d0);for(let D=0,M=X.length;D<M;D++)if(X[D].visible&&X[D].active){let V=X[D].geometryIndex;this.getMatrixAt(D,d0),this.getBoundingSphereAt(V,L9).applyMatrix4(d0);let P=!1;if(E)P=!R.intersectsSphere(L9,$);if(!P){let _=G[V],I=H1.subVectors(L9.center,c6).dot($Y);$Z.push(_.start,_.count,I,D)}}let F=$Z.list,O=this.customSort;if(O===null)F.sort(W.transparent?$1:Q1);else O.call(this,F,$);for(let D=0,M=F.length;D<M;D++){let V=F[D];K[k]=V.start*Y,U[k]=V.count,N[k]=V.index,k++}$Z.reset()}else for(let F=0,O=X.length;F<O;F++)if(X[F].visible&&X[F].active){let D=X[F].geometryIndex,M=!1;if(E)this.getMatrixAt(F,d0),this.getBoundingSphereAt(D,L9).applyMatrix4(d0),M=!R.intersectsSphere(L9,$);if(!M){let V=G[D];K[k]=V.start*Y,U[k]=V.count,N[k]=F,k++}}q.needsUpdate=!0,this._multiDrawCount=k,this._visibilityChanged=!1}onBeforeShadow(J,Q,$,Z,W,H){this.onBeforeRender(J,null,Z,W,H)}}class A0 extends V0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new EJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var VQ=new w,zQ=new w,ZY=new SJ,n6=new f9,WQ=new C0,ZZ=new w,WY=new w;class F8 extends eJ{constructor(J=new pJ,Q=new A0){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)VQ.fromBufferAttribute(Q,Z-1),zQ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=VQ.distanceTo(zQ);J.setAttribute("lineDistance",new VJ($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(WQ.copy($.boundingSphere),WQ.applyMatrix4(Z),WQ.radius+=W,J.ray.intersectsSphere(WQ)===!1)return;ZY.copy(Z).invert(),n6.copy(J.ray).applyMatrix4(ZY);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let q=Math.max(0,H.start),N=Math.min(U.count,H.start+H.count);for(let R=q,k=N-1;R<k;R+=K){let F=U.getX(R),O=U.getX(R+1),D=HQ(this,J,n6,X,F,O,R);if(D)Q.push(D)}if(this.isLineLoop){let R=U.getX(N-1),k=U.getX(q),F=HQ(this,J,n6,X,R,k,N-1);if(F)Q.push(F)}}else{let q=Math.max(0,H.start),N=Math.min(E.count,H.start+H.count);for(let R=q,k=N-1;R<k;R+=K){let F=HQ(this,J,n6,X,R,R+1,R);if(F)Q.push(F)}if(this.isLineLoop){let R=HQ(this,J,n6,X,N-1,q,N-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function HQ(J,Q,$,Z,W,H,Y){let X=J.geometry.attributes.position;if(VQ.fromBufferAttribute(X,W),zQ.fromBufferAttribute(X,H),$.distanceSqToSegment(VQ,zQ,ZZ,WY)>Z)return;ZZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(ZZ);if(U<Q.near||U>Q.far)return;return{distance:U,point:WY.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var HY=new w,YY=new w;class J8 extends F8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)HY.fromBufferAttribute(Q,Z),YY.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+HY.distanceTo(YY);J.setAttribute("lineDistance",new VJ($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k7 extends F8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class T6 extends V0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new EJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var XY=new SJ,FZ=new f9,YQ=new C0,XQ=new w;class M7 extends eJ{constructor(J=new pJ,Q=new T6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(YQ.copy($.boundingSphere),YQ.applyMatrix4(Z),YQ.radius+=W,J.ray.intersectsSphere(YQ)===!1)return;XY.copy(Z).invert(),FZ.copy(J.ray).applyMatrix4(XY);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=$.index,G=$.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let N=E,R=q;N<R;N++){let k=K.getX(N);XQ.fromBufferAttribute(G,k),KY(XQ,k,X,Z,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let N=E,R=q;N<R;N++)XQ.fromBufferAttribute(G,N),KY(XQ,N,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function KY(J,Q,$,Z,W,H,Y){let X=FZ.distanceSqToPoint(J);if(X<$){let K=new w;FZ.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class zW extends N0{constructor(J,Q,$,Z,W=1006,H=1006,Y,X,K){super(J,Q,$,Z,W,H,Y,X,K);this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let U=this;function G(){U.needsUpdate=!0,U._requestVideoFrameCallbackId=J.requestVideoFrameCallback(G)}if("requestVideoFrameCallback"in J)this._requestVideoFrameCallbackId=J.requestVideoFrameCallback(G)}clone(){return new this.constructor(this.image).copy(this)}update(){let J=this.image;if("requestVideoFrameCallback"in J===!1&&J.readyState>=J.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0)this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId);super.dispose()}}class nX extends zW{constructor(J,Q,$,Z,W,H,Y,X){super({},J,Q,$,Z,W,H,Y,X);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(J){this.image=J,this.needsUpdate=!0}}class sX extends N0{constructor(J,Q){super({width:J,height:Q});this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class D7 extends N0{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,E){super(null,H,Y,X,K,U,Z,W,G,E);this.isCompressedTexture=!0,this.image={width:Q,height:$},this.mipmaps=J,this.flipY=!1,this.generateMipmaps=!1}}class oX extends D7{constructor(J,Q,$,Z,W,H){super(J,Q,$,W,H);this.isCompressedArrayTexture=!0,this.image.depth=Z,this.wrapR=1001,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class iX extends D7{constructor(J,Q,$){super(void 0,J[0].width,J[0].height,Q,$,301);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=J}}class aX extends N0{constructor(J,Q,$,Z,W,H,Y,X,K){super(J,Q,$,Z,W,H,Y,X,K);this.isCanvasTexture=!0,this.needsUpdate=!0}}class iQ extends N0{constructor(J,Q,$=1014,Z,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,H,Y,X,U,$,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new g8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class aQ extends N0{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class rQ extends pJ{constructor(J=1,Q=1,$=4,Z=8,W=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:$,radialSegments:Z,heightSegments:W},Q=Math.max(0,Q),$=Math.max(1,Math.floor($)),Z=Math.max(3,Math.floor(Z)),W=Math.max(1,Math.floor(W));let H=[],Y=[],X=[],K=[],U=Q/2,G=Math.PI/2*J,E=Q,q=2*G+E,N=$*2+W,R=Z+1,k=new w,F=new w;for(let O=0;O<=N;O++){let D=0,M=0,V=0,P=0;if(O<=$){let v=O/$,z=v*Math.PI/2;M=-U-J*Math.cos(z),V=J*Math.sin(z),P=-J*Math.cos(z),D=v*G}else if(O<=$+W){let v=(O-$)/W;M=-U+v*Q,V=J,P=0,D=G+v*E}else{let v=(O-$-W)/$,z=v*Math.PI/2;M=U+J*Math.sin(z),V=J*Math.cos(z),P=J*Math.sin(z),D=G+E+v*G}let _=Math.max(0,Math.min(1,D/q)),I=0;if(O===0)I=0.5/Z;else if(O===N)I=-0.5/Z;for(let v=0;v<=Z;v++){let z=v/Z,C=z*Math.PI*2,S=Math.sin(C),p=Math.cos(C);F.x=-V*p,F.y=M,F.z=V*S,Y.push(F.x,F.y,F.z),k.set(-V*p,P,V*S),k.normalize(),X.push(k.x,k.y,k.z),K.push(z+I,_)}if(O>0){let v=(O-1)*R;for(let z=0;z<Z;z++){let C=v+z,S=v+z+1,p=O*R+z,d=O*R+z+1;H.push(C,S,p),H.push(S,d,p)}}}this.setIndex(H),this.setAttribute("position",new VJ(Y,3)),this.setAttribute("normal",new VJ(X,3)),this.setAttribute("uv",new VJ(K,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new rQ(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class tQ extends pJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let W=[],H=[],Y=[],X=[],K=new w,U=new i;H.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let G=0,E=3;G<=Q;G++,E+=3){let q=$+G/Q*Z;K.x=J*Math.cos(q),K.y=J*Math.sin(q),H.push(K.x,K.y,K.z),Y.push(0,0,1),U.x=(H[E]/J+1)/2,U.y=(H[E+1]/J+1)/2,X.push(U.x,U.y)}for(let G=1;G<=Q;G++)W.push(G,G+1,0);this.setIndex(W),this.setAttribute("position",new VJ(H,3)),this.setAttribute("normal",new VJ(Y,3)),this.setAttribute("uv",new VJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new tQ(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class L7 extends pJ{constructor(J=1,Q=1,$=1,Z=32,W=1,H=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:H,thetaStart:Y,thetaLength:X};let K=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],G=[],E=[],q=[],N=0,R=[],k=$/2,F=0;if(O(),H===!1){if(J>0)D(!0);if(Q>0)D(!1)}this.setIndex(U),this.setAttribute("position",new VJ(G,3)),this.setAttribute("normal",new VJ(E,3)),this.setAttribute("uv",new VJ(q,2));function O(){let M=new w,V=new w,P=0,_=(Q-J)/$;for(let I=0;I<=W;I++){let v=[],z=I/W,C=z*(Q-J)+J;for(let S=0;S<=Z;S++){let p=S/Z,d=p*X+Y,x=Math.sin(d),a=Math.cos(d);V.x=C*x,V.y=-z*$+k,V.z=C*a,G.push(V.x,V.y,V.z),M.set(x,_,a).normalize(),E.push(M.x,M.y,M.z),q.push(p,1-z),v.push(N++)}R.push(v)}for(let I=0;I<Z;I++)for(let v=0;v<W;v++){let z=R[v][I],C=R[v+1][I],S=R[v+1][I+1],p=R[v][I+1];if(J>0||v!==0)U.push(z,C,p),P+=3;if(Q>0||v!==W-1)U.push(C,S,p),P+=3}K.addGroup(F,P,0),F+=P}function D(M){let V=N,P=new i,_=new w,I=0,v=M===!0?J:Q,z=M===!0?1:-1;for(let S=1;S<=Z;S++)G.push(0,k*z,0),E.push(0,z,0),q.push(0.5,0.5),N++;let C=N;for(let S=0;S<=Z;S++){let d=S/Z*X+Y,x=Math.cos(d),a=Math.sin(d);_.x=v*a,_.y=k*z,_.z=v*x,G.push(_.x,_.y,_.z),E.push(0,z,0),P.x=x*0.5+0.5,P.y=a*0.5*z+0.5,q.push(P.x,P.y),N++}for(let S=0;S<Z;S++){let p=V+S,d=C+S;if(M===!0)U.push(d,d+1,p);else U.push(d+1,d,p);I+=3}K.addGroup(F,I,M===!0?1:2),F+=I}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L7(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class V7 extends L7{constructor(J=1,Q=1,$=32,Z=1,W=!1,H=0,Y=Math.PI*2){super(0,J,Q,$,Z,W,H,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:W,thetaStart:H,thetaLength:Y}}static fromJSON(J){return new V7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class U9 extends pJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let W=[],H=[];if(Y(Z),K($),U(),this.setAttribute("position",new VJ(W,3)),this.setAttribute("normal",new VJ(W.slice(),3)),this.setAttribute("uv",new VJ(H,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(O){let D=new w,M=new w,V=new w;for(let P=0;P<Q.length;P+=3)q(Q[P+0],D),q(Q[P+1],M),q(Q[P+2],V),X(D,M,V,O)}function X(O,D,M,V){let P=V+1,_=[];for(let I=0;I<=P;I++){_[I]=[];let v=O.clone().lerp(M,I/P),z=D.clone().lerp(M,I/P),C=P-I;for(let S=0;S<=C;S++)if(S===0&&I===P)_[I][S]=v;else _[I][S]=v.clone().lerp(z,S/C)}for(let I=0;I<P;I++)for(let v=0;v<2*(P-I)-1;v++){let z=Math.floor(v/2);if(v%2===0)E(_[I][z+1]),E(_[I+1][z]),E(_[I][z]);else E(_[I][z+1]),E(_[I+1][z+1]),E(_[I+1][z])}}function K(O){let D=new w;for(let M=0;M<W.length;M+=3)D.x=W[M+0],D.y=W[M+1],D.z=W[M+2],D.normalize().multiplyScalar(O),W[M+0]=D.x,W[M+1]=D.y,W[M+2]=D.z}function U(){let O=new w;for(let D=0;D<W.length;D+=3){O.x=W[D+0],O.y=W[D+1],O.z=W[D+2];let M=k(O)/2/Math.PI+0.5,V=F(O)/Math.PI+0.5;H.push(M,1-V)}N(),G()}function G(){for(let O=0;O<H.length;O+=6){let D=H[O+0],M=H[O+2],V=H[O+4],P=Math.max(D,M,V),_=Math.min(D,M,V);if(P>0.9&&_<0.1){if(D<0.2)H[O+0]+=1;if(M<0.2)H[O+2]+=1;if(V<0.2)H[O+4]+=1}}}function E(O){W.push(O.x,O.y,O.z)}function q(O,D){let M=O*3;D.x=J[M+0],D.y=J[M+1],D.z=J[M+2]}function N(){let O=new w,D=new w,M=new w,V=new w,P=new i,_=new i,I=new i;for(let v=0,z=0;v<W.length;v+=9,z+=6){O.set(W[v+0],W[v+1],W[v+2]),D.set(W[v+3],W[v+4],W[v+5]),M.set(W[v+6],W[v+7],W[v+8]),P.set(H[z+0],H[z+1]),_.set(H[z+2],H[z+3]),I.set(H[z+4],H[z+5]),V.copy(O).add(D).add(M).divideScalar(3);let C=k(V);R(P,z+0,O,C),R(_,z+2,D,C),R(I,z+4,M,C)}}function R(O,D,M,V){if(V<0&&O.x===1)H[D]=O.x-1;if(M.x===0&&M.z===0)H[D]=V/2/Math.PI+0.5}function k(O){return Math.atan2(O.z,-O.x)}function F(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new U9(J.vertices,J.indices,J.radius,J.details)}}class eQ extends U9{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=1/$,W=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-Z,-$,0,-Z,$,0,Z,-$,0,Z,$,-Z,-$,0,-Z,$,0,Z,-$,0,Z,$,0,-$,0,-Z,$,0,-Z,-$,0,Z,$,0,Z],H=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(W,H,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new eQ(J.radius,J.detail)}}var KQ=new w,UQ=new w,WZ=new w,GQ=new u0;class BW extends pJ{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let Z=Math.pow(10,4),W=Math.cos(T9*Q),H=J.getIndex(),Y=J.getAttribute("position"),X=H?H.count:Y.count,K=[0,0,0],U=["a","b","c"],G=[,,,],E={},q=[];for(let N=0;N<X;N+=3){if(H)K[0]=H.getX(N),K[1]=H.getX(N+1),K[2]=H.getX(N+2);else K[0]=N,K[1]=N+1,K[2]=N+2;let{a:R,b:k,c:F}=GQ;if(R.fromBufferAttribute(Y,K[0]),k.fromBufferAttribute(Y,K[1]),F.fromBufferAttribute(Y,K[2]),GQ.getNormal(WZ),G[0]=`${Math.round(R.x*Z)},${Math.round(R.y*Z)},${Math.round(R.z*Z)}`,G[1]=`${Math.round(k.x*Z)},${Math.round(k.y*Z)},${Math.round(k.z*Z)}`,G[2]=`${Math.round(F.x*Z)},${Math.round(F.y*Z)},${Math.round(F.z*Z)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let O=0;O<3;O++){let D=(O+1)%3,M=G[O],V=G[D],P=GQ[U[O]],_=GQ[U[D]],I=`${M}_${V}`,v=`${V}_${M}`;if(v in E&&E[v]){if(WZ.dot(E[v].normal)<=W)q.push(P.x,P.y,P.z),q.push(_.x,_.y,_.z);E[v]=null}else if(!(I in E))E[I]={index0:K[O],index1:K[D],normal:WZ.clone()}}}for(let N in E)if(E[N]){let{index0:R,index1:k}=E[N];KQ.fromBufferAttribute(Y,R),UQ.fromBufferAttribute(Y,k),q.push(KQ.x,KQ.y,KQ.z),q.push(UQ.x,UQ.y,UQ.z)}this.setAttribute("position",new VJ(q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class X8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),W=0;Q.push(0);for(let H=1;H<=J;H++)$=this.getPoint(H/J),W+=$.distanceTo(Z),Q.push(W),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,W=$.length,H;if(Q)H=Q;else H=J*$[W-1];let Y=0,X=W-1,K;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),K=$[Z]-H,K<0)Y=Z+1;else if(K>0)X=Z-1;else{X=Z;break}if(Z=X,$[Z]===H)return Z/(W-1);let U=$[Z],E=$[Z+1]-U,q=(H-U)/E;return(Z+q)/(W-1)}getTangent(J,Q){let Z=J-0.0001,W=J+0.0001;if(Z<0)Z=0;if(W>1)W=1;let H=this.getPoint(Z),Y=this.getPoint(W),X=Q||(H.isVector2?new i:new w);return X.copy(Y).sub(H).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new w,Z=[],W=[],H=[],Y=new w,X=new SJ;for(let q=0;q<=J;q++){let N=q/J;Z[q]=this.getTangentAt(N,new w)}W[0]=new w,H[0]=new w;let K=Number.MAX_VALUE,U=Math.abs(Z[0].x),G=Math.abs(Z[0].y),E=Math.abs(Z[0].z);if(U<=K)K=U,$.set(1,0,0);if(G<=K)K=G,$.set(0,1,0);if(E<=K)$.set(0,0,1);Y.crossVectors(Z[0],$).normalize(),W[0].crossVectors(Z[0],Y),H[0].crossVectors(Z[0],W[0]);for(let q=1;q<=J;q++){if(W[q]=W[q-1].clone(),H[q]=H[q-1].clone(),Y.crossVectors(Z[q-1],Z[q]),Y.length()>Number.EPSILON){Y.normalize();let N=Math.acos(bJ(Z[q-1].dot(Z[q]),-1,1));W[q].applyMatrix4(X.makeRotationAxis(Y,N))}H[q].crossVectors(Z[q],W[q])}if(Q===!0){let q=Math.acos(bJ(W[0].dot(W[J]),-1,1));if(q/=J,Z[0].dot(Y.crossVectors(W[0],W[J]))>0)q=-q;for(let N=1;N<=J;N++)W[N].applyMatrix4(X.makeRotationAxis(Z[N],q*N)),H[N].crossVectors(Z[N],W[N])}return{tangents:Z,normals:W,binormals:H}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class z7 extends X8{constructor(J=0,Q=0,$=1,Z=1,W=0,H=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=W,this.aEndAngle=H,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new i){let $=Q,Z=Math.PI*2,W=this.aEndAngle-this.aStartAngle,H=Math.abs(W)<Number.EPSILON;while(W<0)W+=Z;while(W>Z)W-=Z;if(W<Number.EPSILON)if(H)W=0;else W=Z;if(this.aClockwise===!0&&!H)if(W===Z)W=-Z;else W=W-Z;let Y=this.aStartAngle+J*W,X=this.aX+this.xRadius*Math.cos(Y),K=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),E=X-this.aX,q=K-this.aY;X=E*U-q*G+this.aX,K=E*G+q*U+this.aY}return $.set(X,K)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class CW extends z7{constructor(J,Q,$,Z,W,H){super(J,Q,$,$,Z,W,H);this.isArcCurve=!0,this.type="ArcCurve"}}function _W(){let J=0,Q=0,$=0,Z=0;function W(H,Y,X,K){J=H,Q=X,$=-3*H+3*Y-2*X-K,Z=2*H-2*Y+X+K}return{initCatmullRom:function(H,Y,X,K,U){W(Y,X,U*(X-H),U*(K-Y))},initNonuniformCatmullRom:function(H,Y,X,K,U,G,E){let q=(Y-H)/U-(X-H)/(U+G)+(X-Y)/G,N=(X-Y)/G-(K-Y)/(G+E)+(K-X)/E;q*=G,N*=G,W(Y,X,q,N)},calc:function(H){let Y=H*H,X=Y*H;return J+Q*H+$*Y+Z*X}}}var EQ=new w,HZ=new _W,YZ=new _W,XZ=new _W;class wW extends X8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new w){let $=Q,Z=this.points,W=Z.length,H=(W-(this.closed?0:1))*J,Y=Math.floor(H),X=H-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/W)+1)*W;else if(X===0&&Y===W-1)Y=W-2,X=1;let K,U;if(this.closed||Y>0)K=Z[(Y-1)%W];else EQ.subVectors(Z[0],Z[1]).add(Z[0]),K=EQ;let G=Z[Y%W],E=Z[(Y+1)%W];if(this.closed||Y+2<W)U=Z[(Y+2)%W];else EQ.subVectors(Z[W-1],Z[W-2]).add(Z[W-1]),U=EQ;if(this.curveType==="centripetal"||this.curveType==="chordal"){let q=this.curveType==="chordal"?0.5:0.25,N=Math.pow(K.distanceToSquared(G),q),R=Math.pow(G.distanceToSquared(E),q),k=Math.pow(E.distanceToSquared(U),q);if(R<0.0001)R=1;if(N<0.0001)N=R;if(k<0.0001)k=R;HZ.initNonuniformCatmullRom(K.x,G.x,E.x,U.x,N,R,k),YZ.initNonuniformCatmullRom(K.y,G.y,E.y,U.y,N,R,k),XZ.initNonuniformCatmullRom(K.z,G.z,E.z,U.z,N,R,k)}else if(this.curveType==="catmullrom")HZ.initCatmullRom(K.x,G.x,E.x,U.x,this.tension),YZ.initCatmullRom(K.y,G.y,E.y,U.y,this.tension),XZ.initCatmullRom(K.z,G.z,E.z,U.z,this.tension);return $.set(HZ.calc(X),YZ.calc(X),XZ.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new w().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function UY(J,Q,$,Z,W){let H=(Z-Q)*0.5,Y=(W-$)*0.5,X=J*J,K=J*X;return(2*$-2*Z+H+Y)*K+(-3*$+3*Z-2*H-Y)*X+H*J+$}function X1(J,Q){let $=1-J;return $*$*Q}function K1(J,Q){return 2*(1-J)*J*Q}function U1(J,Q){return J*J*Q}function r6(J,Q,$,Z){return X1(J,Q)+K1(J,$)+U1(J,Z)}function G1(J,Q){let $=1-J;return $*$*$*Q}function E1(J,Q){let $=1-J;return 3*$*$*J*Q}function q1(J,Q){return 3*(1-J)*J*J*Q}function N1(J,Q){return J*J*J*Q}function t6(J,Q,$,Z,W){return G1(J,Q)+E1(J,$)+q1(J,Z)+N1(J,W)}class J$ extends X8{constructor(J=new i,Q=new i,$=new i,Z=new i){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new i){let $=Q,Z=this.v0,W=this.v1,H=this.v2,Y=this.v3;return $.set(t6(J,Z.x,W.x,H.x,Y.x),t6(J,Z.y,W.y,H.y,Y.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class IW extends X8{constructor(J=new w,Q=new w,$=new w,Z=new w){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,H=this.v2,Y=this.v3;return $.set(t6(J,Z.x,W.x,H.x,Y.x),t6(J,Z.y,W.y,H.y,Y.y),t6(J,Z.z,W.z,H.z,Y.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class Q$ extends X8{constructor(J=new i,Q=new i){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new i){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new i){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class PW extends X8{constructor(J=new w,Q=new w){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new w){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new w){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class $$ extends X8{constructor(J=new i,Q=new i,$=new i){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new i){let $=Q,Z=this.v0,W=this.v1,H=this.v2;return $.set(r6(J,Z.x,W.x,H.x),r6(J,Z.y,W.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class Z$ extends X8{constructor(J=new w,Q=new w,$=new w){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,H=this.v2;return $.set(r6(J,Z.x,W.x,H.x),r6(J,Z.y,W.y,H.y),r6(J,Z.z,W.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class W$ extends X8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new i){let $=Q,Z=this.points,W=(Z.length-1)*J,H=Math.floor(W),Y=W-H,X=Z[H===0?H:H-1],K=Z[H],U=Z[H>Z.length-2?Z.length-1:H+1],G=Z[H>Z.length-3?Z.length-1:H+2];return $.set(UY(Y,X.x,K.x,U.x,G.x),UY(Y,X.y,K.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new i().fromArray(Z))}return this}}var BQ=Object.freeze({__proto__:null,ArcCurve:CW,CatmullRomCurve3:wW,CubicBezierCurve:J$,CubicBezierCurve3:IW,EllipseCurve:z7,LineCurve:Q$,LineCurve3:PW,QuadraticBezierCurve:$$,QuadraticBezierCurve3:Z$,SplineCurve:W$});class TW extends X8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new BQ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),W=0;while(W<Z.length){if(Z[W]>=$){let H=Z[W]-$,Y=this.curves[W],X=Y.getLength(),K=X===0?0:1-H/X;return Y.getPointAt(K,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,W=this.curves;Z<W.length;Z++){let H=W[Z],Y=H.isEllipseCurve?J*2:H.isLineCurve||H.isLineCurve3?1:H.isSplineCurve?J*H.points.length:J,X=H.getPoints(Y);for(let K=0;K<X.length;K++){let U=X[K];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new BQ[Z.type]().fromJSON(Z))}return this}}class e6 extends TW{constructor(J){super();if(this.type="Path",this.currentPoint=new i,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new Q$(this.currentPoint.clone(),new i(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let W=new $$(this.currentPoint.clone(),new i(J,Q),new i($,Z));return this.curves.push(W),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,W,H){let Y=new J$(this.currentPoint.clone(),new i(J,Q),new i($,Z),new i(W,H));return this.curves.push(Y),this.currentPoint.set(W,H),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new W$(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,W,H){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,$,Z,W,H),this}absarc(J,Q,$,Z,W,H){return this.absellipse(J,Q,$,$,Z,W,H),this}ellipse(J,Q,$,Z,W,H,Y,X){let K=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+K,Q+U,$,Z,W,H,Y,X),this}absellipse(J,Q,$,Z,W,H,Y,X){let K=new z7(J,Q,$,Z,W,H,Y,X);if(this.curves.length>0){let G=K.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(K);let U=K.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class Q9 extends e6{constructor(J){super(J);this.uuid=a0(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new e6().fromJSON(Z))}return this}}function O1(J,Q,$=2){let Z=Q&&Q.length,W=Z?Q[0]*$:J.length,H=rX(J,0,W,$,!0),Y=[];if(!H||H.next===H.prev)return Y;let X,K,U;if(Z)H=D1(J,Q,H,$);if(J.length>80*$){X=1/0,K=1/0;let G=-1/0,E=-1/0;for(let q=$;q<W;q+=$){let N=J[q],R=J[q+1];if(N<X)X=N;if(R<K)K=R;if(N>G)G=N;if(R>E)E=R}U=Math.max(G-X,E-K),U=U!==0?32767/U:0}return J7(H,Y,$,X,K,U,0),Y}function rX(J,Q,$,Z,W){let H;if(W===A1(J,Q,$,Z)>0)for(let Y=Q;Y<$;Y+=Z)H=GY(Y/Z|0,J[Y],J[Y+1],H);else for(let Y=$-Z;Y>=Q;Y-=Z)H=GY(Y/Z|0,J[Y],J[Y+1],H);if(H&&k6(H,H.next))$7(H),H=H.next;return H}function S9(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(k6($,$.next)||R0($.prev,$,$.next)===0)){if($7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function J7(J,Q,$,Z,W,H,Y){if(!J)return;if(!Y&&H)C1(J,Z,W,H);let X=J;while(J.prev!==J.next){let{prev:K,next:U}=J;if(H?R1(J,Z,W,H):F1(J)){Q.push(K.i,J.i,U.i),$7(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)J7(S9(J),Q,$,Z,W,H,1);else if(Y===1)J=k1(S9(J),Q),J7(J,Q,$,Z,W,H,2);else if(Y===2)M1(J,Q,$,Z,W,H);break}}}function F1(J){let Q=J.prev,$=J,Z=J.next;if(R0(Q,$,Z)>=0)return!1;let W=Q.x,H=$.x,Y=Z.x,X=Q.y,K=$.y,U=Z.y,G=Math.min(W,H,Y),E=Math.min(X,K,U),q=Math.max(W,H,Y),N=Math.max(X,K,U),R=Z.next;while(R!==Q){if(R.x>=G&&R.x<=q&&R.y>=E&&R.y<=N&&i6(W,X,H,K,Y,U,R.x,R.y)&&R0(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function R1(J,Q,$,Z){let W=J.prev,H=J,Y=J.next;if(R0(W,H,Y)>=0)return!1;let X=W.x,K=H.x,U=Y.x,G=W.y,E=H.y,q=Y.y,N=Math.min(X,K,U),R=Math.min(G,E,q),k=Math.max(X,K,U),F=Math.max(G,E,q),O=RZ(N,R,Q,$,Z),D=RZ(k,F,Q,$,Z),M=J.prevZ,V=J.nextZ;while(M&&M.z>=O&&V&&V.z<=D){if(M.x>=N&&M.x<=k&&M.y>=R&&M.y<=F&&M!==W&&M!==Y&&i6(X,G,K,E,U,q,M.x,M.y)&&R0(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,V.x>=N&&V.x<=k&&V.y>=R&&V.y<=F&&V!==W&&V!==Y&&i6(X,G,K,E,U,q,V.x,V.y)&&R0(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(M&&M.z>=O){if(M.x>=N&&M.x<=k&&M.y>=R&&M.y<=F&&M!==W&&M!==Y&&i6(X,G,K,E,U,q,M.x,M.y)&&R0(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(V&&V.z<=D){if(V.x>=N&&V.x<=k&&V.y>=R&&V.y<=F&&V!==W&&V!==Y&&i6(X,G,K,E,U,q,V.x,V.y)&&R0(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function k1(J,Q){let $=J;do{let Z=$.prev,W=$.next.next;if(!k6(Z,W)&&eX(Z,$,$.next,W)&&Q7(Z,W)&&Q7(W,Z))Q.push(Z.i,$.i,W.i),$7($),$7($.next),$=J=W;$=$.next}while($!==J);return S9($)}function M1(J,Q,$,Z,W,H){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&I1(Y,X)){let K=JK(Y,X);Y=S9(Y,Y.next),K=S9(K,K.next),J7(Y,Q,$,Z,W,H,0),J7(K,Q,$,Z,W,H,0);return}X=X.next}Y=Y.next}while(Y!==J)}function D1(J,Q,$,Z){let W=[];for(let H=0,Y=Q.length;H<Y;H++){let X=Q[H]*Z,K=H<Y-1?Q[H+1]*Z:J.length,U=rX(J,X,K,Z,!1);if(U===U.next)U.steiner=!0;W.push(w1(U))}W.sort(L1);for(let H=0;H<W.length;H++)$=V1(W[H],$);return $}function L1(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-W}}return $}function V1(J,Q){let $=z1(J,Q);if(!$)return Q;let Z=JK($,J);return S9(Z,Z.next),S9($,$.next)}function z1(J,Q){let $=Q,Z=J.x,W=J.y,H=-1/0,Y;if(k6(J,$))return $;do{if(k6(J,$.next))return $.next;else if(W<=$.y&&W>=$.next.y&&$.next.y!==$.y){let E=$.x+(W-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=Z&&E>H){if(H=E,Y=$.x<$.next.x?$:$.next,E===Z)return Y}}$=$.next}while($!==Q);if(!Y)return null;let X=Y,K=Y.x,U=Y.y,G=1/0;$=Y;do{if(Z>=$.x&&$.x>=K&&Z!==$.x&&tX(W<U?Z:H,W,K,U,W<U?H:Z,W,$.x,$.y)){let E=Math.abs(W-$.y)/(Z-$.x);if(Q7($,J)&&(E<G||E===G&&($.x>Y.x||$.x===Y.x&&B1(Y,$))))Y=$,G=E}$=$.next}while($!==X);return Y}function B1(J,Q){return R0(J.prev,J,Q.prev)<0&&R0(Q.next,J,J.next)<0}function C1(J,Q,$,Z){let W=J;do{if(W.z===0)W.z=RZ(W.x,W.y,Q,$,Z);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,_1(W)}function _1(J){let Q,$=1;do{let Z=J,W;J=null;let H=null;Q=0;while(Z){Q++;let Y=Z,X=0;for(let U=0;U<$;U++)if(X++,Y=Y.nextZ,!Y)break;let K=$;while(X>0||K>0&&Y){if(X!==0&&(K===0||!Y||Z.z<=Y.z))W=Z,Z=Z.nextZ,X--;else W=Y,Y=Y.nextZ,K--;if(H)H.nextZ=W;else J=W;W.prevZ=H,H=W}Z=Y}H.nextZ=null,$*=2}while(Q>1);return J}function RZ(J,Q,$,Z,W){return J=(J-$)*W|0,Q=(Q-Z)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function w1(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function tX(J,Q,$,Z,W,H,Y,X){return(W-Y)*(Q-X)>=(J-Y)*(H-X)&&(J-Y)*(Z-X)>=($-Y)*(Q-X)&&($-Y)*(H-X)>=(W-Y)*(Z-X)}function i6(J,Q,$,Z,W,H,Y,X){return!(J===Y&&Q===X)&&tX(J,Q,$,Z,W,H,Y,X)}function I1(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!P1(J,Q)&&(Q7(J,Q)&&Q7(Q,J)&&T1(J,Q)&&(R0(J.prev,J,Q.prev)||R0(J,Q.prev,Q))||k6(J,Q)&&R0(J.prev,J,J.next)>0&&R0(Q.prev,Q,Q.next)>0)}function R0(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function k6(J,Q){return J.x===Q.x&&J.y===Q.y}function eX(J,Q,$,Z){let W=NQ(R0(J,Q,$)),H=NQ(R0(J,Q,Z)),Y=NQ(R0($,Z,J)),X=NQ(R0($,Z,Q));if(W!==H&&Y!==X)return!0;if(W===0&&qQ(J,$,Q))return!0;if(H===0&&qQ(J,Z,Q))return!0;if(Y===0&&qQ($,J,Z))return!0;if(X===0&&qQ($,Q,Z))return!0;return!1}function qQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function NQ(J){return J>0?1:J<0?-1:0}function P1(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&eX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function Q7(J,Q){return R0(J.prev,J,J.next)<0?R0(J,Q,J.next)>=0&&R0(J,J.prev,Q)>=0:R0(J,Q,J.prev)<0||R0(J,J.next,Q)<0}function T1(J,Q){let $=J,Z=!1,W=(J.x+Q.x)/2,H=(J.y+Q.y)/2;do{if($.y>H!==$.next.y>H&&$.next.y!==$.y&&W<($.next.x-$.x)*(H-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function JK(J,Q){let $=kZ(J.i,J.x,J.y),Z=kZ(Q.i,Q.x,Q.y),W=J.next,H=Q.prev;return J.next=Q,Q.prev=J,$.next=W,W.prev=$,Z.next=$,$.prev=Z,H.next=Z,Z.prev=H,Z}function GY(J,Q,$,Z){let W=kZ(J,Q,$);if(!Z)W.prev=W,W.next=W;else W.next=Z.next,W.prev=Z,Z.next.prev=W,Z.next=W;return W}function $7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function kZ(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A1(J,Q,$,Z){let W=0;for(let H=Q,Y=$-Z;H<$;H+=Z)W+=(J[Y]-J[H])*(J[H+1]+J[Y+1]),Y=H;return W}class QK{static triangulate(J,Q,$=2){return O1(J,Q,$)}}class N8{static area(J){let Q=J.length,$=0;for(let Z=Q-1,W=0;W<Q;Z=W++)$+=J[Z].x*J[W].y-J[W].x*J[Z].y;return $*0.5}static isClockWise(J){return N8.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],W=[];EY(J),qY($,J);let H=J.length;Q.forEach(EY);for(let X=0;X<Q.length;X++)Z.push(H),H+=Q[X].length,qY($,Q[X]);let Y=QK.triangulate($,Z);for(let X=0;X<Y.length;X+=3)W.push(Y.slice(X,X+3));return W}}function EY(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function qY(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class H$ extends pJ{constructor(J=new Q9([new i(0.5,0.5),new i(-0.5,0.5),new i(-0.5,-0.5),new i(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,Z=[],W=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y];H(K)}this.setAttribute("position",new VJ(Z,3)),this.setAttribute("uv",new VJ(W,2)),this.computeVertexNormals();function H(Y){let X=[],K=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,G=Q.depth!==void 0?Q.depth:1,E=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,q=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,N=Q.bevelSize!==void 0?Q.bevelSize:q-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,k=Q.bevelSegments!==void 0?Q.bevelSegments:3,F=Q.extrudePath,O=Q.UVGenerator!==void 0?Q.UVGenerator:S1,D,M=!1,V,P,_,I;if(F)D=F.getSpacedPoints(U),M=!0,E=!1,V=F.computeFrenetFrames(U,!1),P=new w,_=new w,I=new w;if(!E)k=0,q=0,N=0,R=0;let v=Y.extractPoints(K),z=v.shape,C=v.holes;if(!N8.isClockWise(z)){z=z.reverse();for(let e=0,r=C.length;e<r;e++){let o=C[e];if(N8.isClockWise(o))C[e]=o.reverse()}}function p(e){let n=e[0];for(let UJ=1;UJ<=e.length;UJ++){let YJ=UJ%e.length,ZJ=e[YJ],uJ=ZJ.x-n.x,cJ=ZJ.y-n.y,sJ=uJ*uJ+cJ*cJ,T=Math.max(Math.abs(ZJ.x),Math.abs(ZJ.y),Math.abs(n.x),Math.abs(n.y)),L=0.000000000000000000010000000000000001*T*T;if(sJ<=L){e.splice(YJ,1),UJ--;continue}n=ZJ}}p(z),C.forEach(p);let d=C.length,x=z;for(let e=0;e<d;e++){let r=C[e];z=z.concat(r)}function a(e,r,o){if(!r)console.error("THREE.ExtrudeGeometry: vec does not exist");return e.clone().addScaledVector(r,o)}let m=z.length;function QJ(e,r,o){let n,UJ,YJ,ZJ=e.x-r.x,uJ=e.y-r.y,cJ=o.x-e.x,sJ=o.y-e.y,T=ZJ*ZJ+uJ*uJ,L=ZJ*sJ-uJ*cJ;if(Math.abs(L)>Number.EPSILON){let y=Math.sqrt(T),c=Math.sqrt(cJ*cJ+sJ*sJ),JJ=r.x-uJ/y,u=r.y+ZJ/y,LJ=o.x-sJ/c,XJ=o.y+cJ/c,_J=((LJ-JJ)*sJ-(XJ-u)*cJ)/(ZJ*sJ-uJ*cJ);n=JJ+ZJ*_J-e.x,UJ=u+uJ*_J-e.y;let fJ=n*n+UJ*UJ;if(fJ<=2)return new i(n,UJ);else YJ=Math.sqrt(fJ/2)}else{let y=!1;if(ZJ>Number.EPSILON){if(cJ>Number.EPSILON)y=!0}else if(ZJ<-Number.EPSILON){if(cJ<-Number.EPSILON)y=!0}else if(Math.sign(uJ)===Math.sign(sJ))y=!0;if(y)n=-uJ,UJ=ZJ,YJ=Math.sqrt(T);else n=ZJ,UJ=uJ,YJ=Math.sqrt(T/2)}return new i(n/YJ,UJ/YJ)}let l=[];for(let e=0,r=x.length,o=r-1,n=e+1;e<r;e++,o++,n++){if(o===r)o=0;if(n===r)n=0;l[e]=QJ(x[e],x[o],x[n])}let qJ=[],NJ,jJ=l.concat();for(let e=0,r=d;e<r;e++){let o=C[e];NJ=[];for(let n=0,UJ=o.length,YJ=UJ-1,ZJ=n+1;n<UJ;n++,YJ++,ZJ++){if(YJ===UJ)YJ=0;if(ZJ===UJ)ZJ=0;NJ[n]=QJ(o[n],o[YJ],o[ZJ])}qJ.push(NJ),jJ=jJ.concat(NJ)}let dJ;if(k===0)dJ=N8.triangulateShape(x,C);else{let e=[],r=[];for(let o=0;o<k;o++){let n=o/k,UJ=q*Math.cos(n*Math.PI/2),YJ=N*Math.sin(n*Math.PI/2)+R;for(let ZJ=0,uJ=x.length;ZJ<uJ;ZJ++){let cJ=a(x[ZJ],l[ZJ],YJ);if(zJ(cJ.x,cJ.y,-UJ),n===0)e.push(cJ)}for(let ZJ=0,uJ=d;ZJ<uJ;ZJ++){let cJ=C[ZJ];NJ=qJ[ZJ];let sJ=[];for(let T=0,L=cJ.length;T<L;T++){let y=a(cJ[T],NJ[T],YJ);if(zJ(y.x,y.y,-UJ),n===0)sJ.push(y)}if(n===0)r.push(sJ)}}dJ=N8.triangulateShape(e,r)}let G0=dJ.length,J0=N+R;for(let e=0;e<m;e++){let r=E?a(z[e],jJ[e],J0):z[e];if(!M)zJ(r.x,r.y,0);else _.copy(V.normals[0]).multiplyScalar(r.x),P.copy(V.binormals[0]).multiplyScalar(r.y),I.copy(D[0]).add(_).add(P),zJ(I.x,I.y,I.z)}for(let e=1;e<=U;e++)for(let r=0;r<m;r++){let o=E?a(z[r],jJ[r],J0):z[r];if(!M)zJ(o.x,o.y,G/U*e);else _.copy(V.normals[e]).multiplyScalar(o.x),P.copy(V.binormals[e]).multiplyScalar(o.y),I.copy(D[e]).add(_).add(P),zJ(I.x,I.y,I.z)}for(let e=k-1;e>=0;e--){let r=e/k,o=q*Math.cos(r*Math.PI/2),n=N*Math.sin(r*Math.PI/2)+R;for(let UJ=0,YJ=x.length;UJ<YJ;UJ++){let ZJ=a(x[UJ],l[UJ],n);zJ(ZJ.x,ZJ.y,G+o)}for(let UJ=0,YJ=C.length;UJ<YJ;UJ++){let ZJ=C[UJ];NJ=qJ[UJ];for(let uJ=0,cJ=ZJ.length;uJ<cJ;uJ++){let sJ=a(ZJ[uJ],NJ[uJ],n);if(!M)zJ(sJ.x,sJ.y,G+o);else zJ(sJ.x,sJ.y+D[U-1].y,D[U-1].x+o)}}}s(),OJ();function s(){let e=Z.length/3;if(E){let r=0,o=m*r;for(let n=0;n<G0;n++){let UJ=dJ[n];yJ(UJ[2]+o,UJ[1]+o,UJ[0]+o)}r=U+k*2,o=m*r;for(let n=0;n<G0;n++){let UJ=dJ[n];yJ(UJ[0]+o,UJ[1]+o,UJ[2]+o)}}else{for(let r=0;r<G0;r++){let o=dJ[r];yJ(o[2],o[1],o[0])}for(let r=0;r<G0;r++){let o=dJ[r];yJ(o[0]+m*U,o[1]+m*U,o[2]+m*U)}}$.addGroup(e,Z.length/3-e,0)}function OJ(){let e=Z.length/3,r=0;KJ(x,r),r+=x.length;for(let o=0,n=C.length;o<n;o++){let UJ=C[o];KJ(UJ,r),r+=UJ.length}$.addGroup(e,Z.length/3-e,1)}function KJ(e,r){let o=e.length;while(--o>=0){let n=o,UJ=o-1;if(UJ<0)UJ=e.length-1;for(let YJ=0,ZJ=U+k*2;YJ<ZJ;YJ++){let uJ=m*YJ,cJ=m*(YJ+1),sJ=r+n+uJ,T=r+UJ+uJ,L=r+UJ+cJ,y=r+n+cJ;xJ(sJ,T,L,y)}}}function zJ(e,r,o){X.push(e),X.push(r),X.push(o)}function yJ(e,r,o){H0(e),H0(r),H0(o);let n=Z.length/3,UJ=O.generateTopUV($,Z,n-3,n-2,n-1);A(UJ[0]),A(UJ[1]),A(UJ[2])}function xJ(e,r,o,n){H0(e),H0(r),H0(n),H0(r),H0(o),H0(n);let UJ=Z.length/3,YJ=O.generateSideWallUV($,Z,UJ-6,UJ-3,UJ-2,UJ-1);A(YJ[0]),A(YJ[1]),A(YJ[3]),A(YJ[1]),A(YJ[2]),A(YJ[3])}function H0(e){Z.push(X[e*3+0]),Z.push(X[e*3+1]),Z.push(X[e*3+2])}function A(e){W.push(e.x),W.push(e.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return j1(Q,$,J)}static fromJSON(J,Q){let $=[];for(let W=0,H=J.shapes.length;W<H;W++){let Y=Q[J.shapes[W]];$.push(Y)}let Z=J.options.extrudePath;if(Z!==void 0)J.options.extrudePath=new BQ[Z.type]().fromJSON(Z);return new H$($,J.options)}}var S1={generateTopUV:function(J,Q,$,Z,W){let H=Q[$*3],Y=Q[$*3+1],X=Q[Z*3],K=Q[Z*3+1],U=Q[W*3],G=Q[W*3+1];return[new i(H,Y),new i(X,K),new i(U,G)]},generateSideWallUV:function(J,Q,$,Z,W,H){let Y=Q[$*3],X=Q[$*3+1],K=Q[$*3+2],U=Q[Z*3],G=Q[Z*3+1],E=Q[Z*3+2],q=Q[W*3],N=Q[W*3+1],R=Q[W*3+2],k=Q[H*3],F=Q[H*3+1],O=Q[H*3+2];if(Math.abs(X-G)<Math.abs(Y-U))return[new i(Y,1-K),new i(U,1-E),new i(q,1-R),new i(k,1-O)];else return[new i(X,1-K),new i(G,1-E),new i(N,1-R),new i(F,1-O)]}};function j1(J,Q,$){if($.shapes=[],Array.isArray(J))for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.shapes.push(H.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class Y$ extends U9{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],W=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,W,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new Y$(J.radius,J.detail)}}class X$ extends pJ{constructor(J=[new i(0,-0.5),new i(0.5,0),new i(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=bJ(Z,0,Math.PI*2);let W=[],H=[],Y=[],X=[],K=[],U=1/Q,G=new w,E=new i,q=new w,N=new w,R=new w,k=0,F=0;for(let O=0;O<=J.length-1;O++)switch(O){case 0:k=J[O+1].x-J[O].x,F=J[O+1].y-J[O].y,q.x=F*1,q.y=-k,q.z=F*0,R.copy(q),q.normalize(),X.push(q.x,q.y,q.z);break;case J.length-1:X.push(R.x,R.y,R.z);break;default:k=J[O+1].x-J[O].x,F=J[O+1].y-J[O].y,q.x=F*1,q.y=-k,q.z=F*0,N.copy(q),q.x+=R.x,q.y+=R.y,q.z+=R.z,q.normalize(),X.push(q.x,q.y,q.z),R.copy(N)}for(let O=0;O<=Q;O++){let D=$+O*U*Z,M=Math.sin(D),V=Math.cos(D);for(let P=0;P<=J.length-1;P++){G.x=J[P].x*M,G.y=J[P].y,G.z=J[P].x*V,H.push(G.x,G.y,G.z),E.x=O/Q,E.y=P/(J.length-1),Y.push(E.x,E.y);let _=X[3*P+0]*M,I=X[3*P+1],v=X[3*P+0]*V;K.push(_,I,v)}}for(let O=0;O<Q;O++)for(let D=0;D<J.length-1;D++){let M=D+O*J.length,V=M,P=M+J.length,_=M+J.length+1,I=M+1;W.push(V,P,I),W.push(_,I,P)}this.setIndex(W),this.setAttribute("position",new VJ(H,3)),this.setAttribute("uv",new VJ(Y,2)),this.setAttribute("normal",new VJ(K,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new X$(J.points,J.segments,J.phiStart,J.phiLength)}}class B7 extends U9{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],Z=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,Z,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new B7(J.radius,J.detail)}}class A6 extends pJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),X=Math.floor(Z),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],N=[],R=[],k=[];for(let F=0;F<U;F++){let O=F*E-H;for(let D=0;D<K;D++){let M=D*G-W;N.push(M,-O,0),R.push(0,0,1),k.push(D/Y),k.push(1-F/X)}}for(let F=0;F<X;F++)for(let O=0;O<Y;O++){let D=O+K*F,M=O+K*(F+1),V=O+1+K*(F+1),P=O+1+K*F;q.push(D,M,P),q.push(M,V,P)}this.setIndex(q),this.setAttribute("position",new VJ(N,3)),this.setAttribute("normal",new VJ(R,3)),this.setAttribute("uv",new VJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new A6(J.width,J.height,J.widthSegments,J.heightSegments)}}class K$ extends pJ{constructor(J=0.5,Q=1,$=32,Z=1,W=0,H=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:Z,thetaStart:W,thetaLength:H},$=Math.max(3,$),Z=Math.max(1,Z);let Y=[],X=[],K=[],U=[],G=J,E=(Q-J)/Z,q=new w,N=new i;for(let R=0;R<=Z;R++){for(let k=0;k<=$;k++){let F=W+k/$*H;q.x=G*Math.cos(F),q.y=G*Math.sin(F),X.push(q.x,q.y,q.z),K.push(0,0,1),N.x=(q.x/Q+1)/2,N.y=(q.y/Q+1)/2,U.push(N.x,N.y)}G+=E}for(let R=0;R<Z;R++){let k=R*($+1);for(let F=0;F<$;F++){let O=F+k,D=O,M=O+$+1,V=O+$+2,P=O+1;Y.push(D,M,P),Y.push(M,V,P)}}this.setIndex(Y),this.setAttribute("position",new VJ(X,3)),this.setAttribute("normal",new VJ(K,3)),this.setAttribute("uv",new VJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new K$(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class U$ extends pJ{constructor(J=new Q9([new i(0,0.5),new i(-0.5,-0.5),new i(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],W=[],H=[],Y=0,X=0;if(Array.isArray(J)===!1)K(J);else for(let U=0;U<J.length;U++)K(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex($),this.setAttribute("position",new VJ(Z,3)),this.setAttribute("normal",new VJ(W,3)),this.setAttribute("uv",new VJ(H,2));function K(U){let G=Z.length/3,E=U.extractPoints(Q),q=E.shape,N=E.holes;if(N8.isClockWise(q)===!1)q=q.reverse();for(let k=0,F=N.length;k<F;k++){let O=N[k];if(N8.isClockWise(O)===!0)N[k]=O.reverse()}let R=N8.triangulateShape(q,N);for(let k=0,F=N.length;k<F;k++){let O=N[k];q=q.concat(O)}for(let k=0,F=q.length;k<F;k++){let O=q[k];Z.push(O.x,O.y,0),W.push(0,0,1),H.push(O.x,O.y)}for(let k=0,F=R.length;k<F;k++){let O=R[k],D=O[0]+G,M=O[1]+G,V=O[2]+G;$.push(D,M,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return v1(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,W=J.shapes.length;Z<W;Z++){let H=Q[J.shapes[Z]];$.push(H)}return new U$($,J.curveSegments)}}function v1(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class C7 extends pJ{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,H=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:H,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let X=Math.min(H+Y,Math.PI),K=0,U=[],G=new w,E=new w,q=[],N=[],R=[],k=[];for(let F=0;F<=$;F++){let O=[],D=F/$,M=0;if(F===0&&H===0)M=0.5/Q;else if(F===$&&X===Math.PI)M=-0.5/Q;for(let V=0;V<=Q;V++){let P=V/Q;G.x=-J*Math.cos(Z+P*W)*Math.sin(H+D*Y),G.y=J*Math.cos(H+D*Y),G.z=J*Math.sin(Z+P*W)*Math.sin(H+D*Y),N.push(G.x,G.y,G.z),E.copy(G).normalize(),R.push(E.x,E.y,E.z),k.push(P+M,1-D),O.push(K++)}U.push(O)}for(let F=0;F<$;F++)for(let O=0;O<Q;O++){let D=U[F][O+1],M=U[F][O],V=U[F+1][O],P=U[F+1][O+1];if(F!==0||H>0)q.push(D,M,P);if(F!==$-1||X<Math.PI)q.push(M,V,P)}this.setIndex(q),this.setAttribute("position",new VJ(N,3)),this.setAttribute("normal",new VJ(R,3)),this.setAttribute("uv",new VJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C7(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class G$ extends U9{constructor(J=1,Q=0){let $=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],Z=[2,1,0,0,3,2,1,3,0,2,3,1];super($,Z,J,Q);this.type="TetrahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new G$(J.radius,J.detail)}}class E$ extends pJ{constructor(J=1,Q=0.4,$=12,Z=48,W=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:W},$=Math.floor($),Z=Math.floor(Z);let H=[],Y=[],X=[],K=[],U=new w,G=new w,E=new w;for(let q=0;q<=$;q++)for(let N=0;N<=Z;N++){let R=N/Z*W,k=q/$*Math.PI*2;G.x=(J+Q*Math.cos(k))*Math.cos(R),G.y=(J+Q*Math.cos(k))*Math.sin(R),G.z=Q*Math.sin(k),Y.push(G.x,G.y,G.z),U.x=J*Math.cos(R),U.y=J*Math.sin(R),E.subVectors(G,U).normalize(),X.push(E.x,E.y,E.z),K.push(N/Z),K.push(q/$)}for(let q=1;q<=$;q++)for(let N=1;N<=Z;N++){let R=(Z+1)*q+N-1,k=(Z+1)*(q-1)+N-1,F=(Z+1)*(q-1)+N,O=(Z+1)*q+N;H.push(R,k,O),H.push(k,F,O)}this.setIndex(H),this.setAttribute("position",new VJ(Y,3)),this.setAttribute("normal",new VJ(X,3)),this.setAttribute("uv",new VJ(K,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new E$(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class q$ extends pJ{constructor(J=1,Q=0.4,$=64,Z=8,W=2,H=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:$,radialSegments:Z,p:W,q:H},$=Math.floor($),Z=Math.floor(Z);let Y=[],X=[],K=[],U=[],G=new w,E=new w,q=new w,N=new w,R=new w,k=new w,F=new w;for(let D=0;D<=$;++D){let M=D/$*W*Math.PI*2;O(M,W,H,J,q),O(M+0.01,W,H,J,N),k.subVectors(N,q),F.addVectors(N,q),R.crossVectors(k,F),F.crossVectors(R,k),R.normalize(),F.normalize();for(let V=0;V<=Z;++V){let P=V/Z*Math.PI*2,_=-Q*Math.cos(P),I=Q*Math.sin(P);G.x=q.x+(_*F.x+I*R.x),G.y=q.y+(_*F.y+I*R.y),G.z=q.z+(_*F.z+I*R.z),X.push(G.x,G.y,G.z),E.subVectors(G,q).normalize(),K.push(E.x,E.y,E.z),U.push(D/$),U.push(V/Z)}}for(let D=1;D<=$;D++)for(let M=1;M<=Z;M++){let V=(Z+1)*(D-1)+(M-1),P=(Z+1)*D+(M-1),_=(Z+1)*D+M,I=(Z+1)*(D-1)+M;Y.push(V,P,I),Y.push(P,_,I)}this.setIndex(Y),this.setAttribute("position",new VJ(X,3)),this.setAttribute("normal",new VJ(K,3)),this.setAttribute("uv",new VJ(U,2));function O(D,M,V,P,_){let I=Math.cos(D),v=Math.sin(D),z=V/M*D,C=Math.cos(z);_.x=P*(2+C)*0.5*I,_.y=P*(2+C)*v*0.5,_.z=P*Math.sin(z)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q$(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}class N$ extends pJ{constructor(J=new Z$(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),Q=64,$=1,Z=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:W};let H=J.computeFrenetFrames(Q,W);this.tangents=H.tangents,this.normals=H.normals,this.binormals=H.binormals;let Y=new w,X=new w,K=new i,U=new w,G=[],E=[],q=[],N=[];R(),this.setIndex(N),this.setAttribute("position",new VJ(G,3)),this.setAttribute("normal",new VJ(E,3)),this.setAttribute("uv",new VJ(q,2));function R(){for(let D=0;D<Q;D++)k(D);k(W===!1?Q:0),O(),F()}function k(D){U=J.getPointAt(D/Q,U);let M=H.normals[D],V=H.binormals[D];for(let P=0;P<=Z;P++){let _=P/Z*Math.PI*2,I=Math.sin(_),v=-Math.cos(_);X.x=v*M.x+I*V.x,X.y=v*M.y+I*V.y,X.z=v*M.z+I*V.z,X.normalize(),E.push(X.x,X.y,X.z),Y.x=U.x+$*X.x,Y.y=U.y+$*X.y,Y.z=U.z+$*X.z,G.push(Y.x,Y.y,Y.z)}}function F(){for(let D=1;D<=Q;D++)for(let M=1;M<=Z;M++){let V=(Z+1)*(D-1)+(M-1),P=(Z+1)*D+(M-1),_=(Z+1)*D+M,I=(Z+1)*(D-1)+M;N.push(V,P,I),N.push(P,_,I)}}function O(){for(let D=0;D<=Q;D++)for(let M=0;M<=Z;M++)K.x=D/Q,K.y=M/Z,q.push(K.x,K.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new N$(new BQ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class AW extends pJ{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,Z=new w,W=new w;if(J.index!==null){let H=J.attributes.position,Y=J.index,X=J.groups;if(X.length===0)X=[{start:0,count:Y.count,materialIndex:0}];for(let K=0,U=X.length;K<U;++K){let G=X[K],E=G.start,q=G.count;for(let N=E,R=E+q;N<R;N+=3)for(let k=0;k<3;k++){let F=Y.getX(N+k),O=Y.getX(N+(k+1)%3);if(Z.fromBufferAttribute(H,F),W.fromBufferAttribute(H,O),NY(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}}else{let H=J.attributes.position;for(let Y=0,X=H.count/3;Y<X;Y++)for(let K=0;K<3;K++){let U=3*Y+K,G=3*Y+(K+1)%3;if(Z.fromBufferAttribute(H,U),W.fromBufferAttribute(H,G),NY(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}this.setAttribute("position",new VJ(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function NY(J,Q,$){let Z=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,W=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(Z)===!0||$.has(W)===!0)return!1;else return $.add(Z),$.add(W),!0}var OY=Object.freeze({__proto__:null,BoxGeometry:h9,CapsuleGeometry:rQ,CircleGeometry:tQ,ConeGeometry:V7,CylinderGeometry:L7,DodecahedronGeometry:eQ,EdgesGeometry:BW,ExtrudeGeometry:H$,IcosahedronGeometry:Y$,LatheGeometry:X$,OctahedronGeometry:B7,PlaneGeometry:A6,PolyhedronGeometry:U9,RingGeometry:K$,ShapeGeometry:U$,SphereGeometry:C7,TetrahedronGeometry:G$,TorusGeometry:E$,TorusKnotGeometry:q$,TubeGeometry:N$,WireframeGeometry:AW});class SW extends V0{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new EJ(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}class jW extends Y8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g9 extends V0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new EJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new EJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class c0 extends g9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new i(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new EJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new EJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new EJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class vW extends V0{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new EJ(16777215),this.specular=new EJ(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new EJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class yW extends V0{constructor(J){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new EJ(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new EJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.gradientMap=J.gradientMap,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}class fW extends V0{constructor(J){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(J)}copy(J){return super.copy(J),this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this}}class hW extends V0{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new EJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new EJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class O$ extends V0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class F$ extends V0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}class bW extends V0{constructor(J){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new EJ(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={MATCAP:""},this.color.copy(J.color),this.matcap=J.matcap,this.map=J.map,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.flatShading=J.flatShading,this.fog=J.fog,this}}class xW extends A0{constructor(J){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(J)}copy(J){return super.copy(J),this.scale=J.scale,this.dashSize=J.dashSize,this.gapSize=J.gapSize,this}}function P9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function $K(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function ZK(J){function Q(W,H){return J[W]-J[H]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function MZ(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let H=0,Y=0;Y!==Z;++H){let X=$[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function gW(J,Q,$,Z){let W=1,H=J[0];while(H!==void 0&&H[Z]===void 0)H=J[W++];if(H===void 0)return;let Y=H[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[Z],Y!==void 0)Q.push(H.time),Y.toArray($,$.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(Y);H=J[W++]}while(H!==void 0)}function y1(J,Q,$,Z,W=30){let H=J.clone();H.name=Q;let Y=[];for(let K=0;K<H.tracks.length;++K){let U=H.tracks[K],G=U.getValueSize(),E=[],q=[];for(let N=0;N<U.times.length;++N){let R=U.times[N]*W;if(R<$||R>=Z)continue;E.push(U.times[N]);for(let k=0;k<G;++k)q.push(U.values[N*G+k])}if(E.length===0)continue;U.times=P9(E,U.times.constructor),U.values=P9(q,U.values.constructor),Y.push(U)}H.tracks=Y;let X=1/0;for(let K=0;K<H.tracks.length;++K)if(X>H.tracks[K].times[0])X=H.tracks[K].times[0];for(let K=0;K<H.tracks.length;++K)H.tracks[K].shift(-1*X);return H.resetDuration(),H}function f1(J,Q=0,$=J,Z=30){if(Z<=0)Z=30;let W=$.tracks.length,H=Q/Z;for(let Y=0;Y<W;++Y){let X=$.tracks[Y],K=X.ValueTypeName;if(K==="bool"||K==="string")continue;let U=J.tracks.find(function(O){return O.name===X.name&&O.ValueTypeName===K});if(U===void 0)continue;let G=0,E=X.getValueSize();if(X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)G=E/3;let q=0,N=U.getValueSize();if(U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)q=N/3;let R=X.times.length-1,k;if(H<=X.times[0]){let O=G,D=E-G;k=X.values.slice(O,D)}else if(H>=X.times[R]){let O=R*E+G,D=O+E-G;k=X.values.slice(O,D)}else{let O=X.createInterpolant(),D=G,M=E-G;O.evaluate(H),k=O.resultBuffer.slice(D,M)}if(K==="quaternion")new T0().fromArray(k).normalize().conjugate().toArray(k);let F=U.times.length;for(let O=0;O<F;++O){let D=O*N+q;if(K==="quaternion")T0.multiplyQuaternionsFlat(U.values,D,k,0,U.values,D);else{let M=N-q*2;for(let V=0;V<M;++V)U.values[D+V]-=k[V]}}}return J.blendMode=2501,J}class WK{static convertArray(J,Q){return P9(J,Q)}static isTypedArray(J){return $K(J)}static getKeyframeOrder(J){return ZK(J)}static sortedArray(J,Q,$){return MZ(J,Q,$)}static flattenJSON(J,Q,$,Z){gW(J,Q,$,Z)}static subclip(J,Q,$,Z,W=30){return y1(J,Q,$,Z,W)}static makeClipAdditive(J,Q=0,$=J,Z=30){return f1(J,Q,$,Z)}}class G9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];J:{Q:{let H;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break Q}H=Q.length;break $}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break Q}H=$,$=0;break $}break J}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class pW extends G9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],X=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*$-Q;break;case 2402:H=1,X=$+Z[1]-Z[0];break;default:H=J-1,X=Q}let K=($-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,N=($-Q)/(Z-Q),R=N*N,k=R*N,F=-E*k+2*E*R-E*N,O=(1+E)*k+(-1.5-2*E)*R+(-0.5+E)*N+1,D=(-1-q)*k+(1.5+q)*R+0.5*N,M=q*k-q*R;for(let V=0;V!==Y;++V)W[V]=F*H[U+V]+O*H[K+V]+D*H[X+V]+M*H[G+V];return W}}class R$ extends G9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class lW extends G9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class Q8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=P9(Q,this.TimeBufferType),this.values=P9($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:P9(J.times,Array),values:P9(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new lW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new R$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new pW(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(Z!==void 0){if($K(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let G=Y*$,E=G-$,q=G+$;for(let N=0;N!==$;++N){let R=Q[G+N];if(R!==Q[E+N]||R!==Q[q+N]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*$,E=H*$;for(let q=0;q!==$;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,X=H*$,K=0;K!==$;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}Q8.prototype.ValueTypeName="";Q8.prototype.TimeBufferType=Float32Array;Q8.prototype.ValueBufferType=Float32Array;Q8.prototype.DefaultInterpolation=2301;class E9 extends Q8{constructor(J,Q,$){super(J,Q,$)}}E9.prototype.ValueTypeName="bool";E9.prototype.ValueBufferType=Array;E9.prototype.DefaultInterpolation=2300;E9.prototype.InterpolantFactoryMethodLinear=void 0;E9.prototype.InterpolantFactoryMethodSmooth=void 0;class k$ extends Q8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}k$.prototype.ValueTypeName="color";class l8 extends Q8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}l8.prototype.ValueTypeName="number";class dW extends G9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)T0.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class n8 extends Q8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new dW(this.times,this.values,this.getValueSize(),J)}}n8.prototype.ValueTypeName="quaternion";n8.prototype.InterpolantFactoryMethodSmooth=void 0;class q9 extends Q8{constructor(J,Q,$){super(J,Q,$)}}q9.prototype.ValueTypeName="string";q9.prototype.ValueBufferType=Array;q9.prototype.DefaultInterpolation=2300;q9.prototype.InterpolantFactoryMethodLinear=void 0;q9.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends Q8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}d8.prototype.ValueTypeName="vector";class $9{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=a0(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let H=0,Y=$.length;H!==Y;++H)Q.push(b1($[H]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,H=$.length;W!==H;++W)Q.push(Q8.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=ZK(X);if(X=MZ(X,1,U),K=MZ(K,1,U),!Z&&X[0]===0)X.push(W),K.push(K[0]);H.push(new l8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(K)}}let H=[];for(let Y in Z)H.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(G,E,q,N,R){if(q.length!==0){let k=[],F=[];if(gW(q,k,F,N),k.length!==0)R.push(new G(E,k,F))}},Z=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},N;for(N=0;N<E.length;N++)if(E[N].morphTargets)for(let R=0;R<E[N].morphTargets.length;R++)q[E[N].morphTargets[R]]=-1;for(let R in q){let k=[],F=[];for(let O=0;O!==E[N].morphTargets.length;++O){let D=E[N];k.push(D.time),F.push(D.morphTarget===R?1:0)}Z.push(new l8(".morphTargetInfluence["+R+"]",k,F))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";$(d8,q+".position",E,"pos",Z),$(n8,q+".quaternion",E,"rot",Z),$(d8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,X,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function h1(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return l8;case"vector":case"vector2":case"vector3":case"vector4":return d8;case"color":return k$;case"quaternion":return n8;case"bool":case"boolean":return E9;case"string":return q9}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function b1(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=h1(J.type);if(J.times===void 0){let $=[],Z=[];gW(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var B8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class M${constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],N=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return N}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var HK=new M$;class S0{constructor(J){this.manager=J!==void 0?J:HK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}S0.DEFAULT_MATERIAL_NAME="__DEFAULT";var h8={};class YK extends Error{constructor(J,Q){super(J);this.response=Q}}class t0 extends S0{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=B8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(h8[J]!==void 0){h8[J].push({onLoad:Q,onProgress:$,onError:Z});return}h8[J]=[],h8[J].push({onLoad:Q,onProgress:$,onError:Z});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=h8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,N=q!==0,R=0,k=new ReadableStream({start(F){O();function O(){G.read().then(({done:D,value:M})=>{if(D)F.close();else{R+=M.byteLength;let V=new ProgressEvent("progress",{lengthComputable:N,loaded:R,total:q});for(let P=0,_=U.length;P<_;P++){let I=U[P];if(I.onProgress)I.onProgress(V)}F.enqueue(M),O()}},(D)=>{F.error(D)})}}});return new Response(k)}else throw new YK(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((N)=>q.decode(N))}}}).then((K)=>{B8.add(`file:${J}`,K);let U=h8[J];delete h8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=h8[J];if(U===void 0)throw this.manager.itemError(J),K;delete h8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class XK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=new t0(this.manager);H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(Y){try{Q(W.parse(JSON.parse(Y)))}catch(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J)}},$,Z)}parse(J){let Q=[];for(let $=0;$<J.length;$++){let Z=$9.parse(J[$]);Q.push(Z)}return Q}}class KK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=[],Y=new D7,X=new t0(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(W.withCredentials);let K=0;function U(G){X.load(J[G],function(E){let q=W.parse(E,!0);if(H[G]={width:q.width,height:q.height,format:q.format,mipmaps:q.mipmaps},K+=1,K===6){if(q.mipmapCount===1)Y.minFilter=1006;if(Y.image=H,Y.format=q.format,Y.needsUpdate=!0,Q)Q(Y)}},$,Z)}if(Array.isArray(J))for(let G=0,E=J.length;G<E;++G)U(G);else X.load(J,function(G){let E=W.parse(G,!0);if(E.isCubemap){let q=E.mipmaps.length/E.mipmapCount;for(let N=0;N<q;N++){H[N]={mipmaps:[]};for(let R=0;R<E.mipmapCount;R++)H[N].mipmaps.push(E.mipmaps[N*E.mipmapCount+R]),H[N].format=E.format,H[N].width=E.width,H[N].height=E.height}Y.image=H}else Y.image.width=E.width,Y.image.height=E.height,Y.mipmaps=E.mipmaps;if(E.mipmapCount===1)Y.minFilter=1006;if(Y.format=E.format,Y.needsUpdate=!0,Q)Q(Y)},$,Z);return Y}}var G6=new WeakMap;class M6 extends S0{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=B8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=G6.get(H);if(G===void 0)G=[],G6.set(H,G);G.push({onLoad:Q,onError:Z})}return H}let Y=F6("img");function X(){if(U(),Q)Q(this);let G=G6.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}G6.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),Z)Z(G);B8.remove(`image:${J}`);let E=G6.get(this)||[];for(let q=0;q<E.length;q++){let N=E[q];if(N.onError)N.onError(G)}G6.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return B8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class UK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=new w6;W.colorSpace="srgb";let H=new M6(this.manager);H.setCrossOrigin(this.crossOrigin),H.setPath(this.path);let Y=0;function X(K){H.load(J[K],function(U){if(W.images[K]=U,Y++,Y===6){if(W.needsUpdate=!0,Q)Q(W)}},void 0,Z)}for(let K=0;K<J.length;++K)X(K);return W}}class GK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=new O8,Y=new t0(this.manager);return Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setPath(this.path),Y.setWithCredentials(W.withCredentials),Y.load(J,function(X){let K;try{K=W.parse(X)}catch(U){if(Z!==void 0)Z(U);else{console.error(U);return}}if(K.image!==void 0)H.image=K.image;else if(K.data!==void 0)H.image.width=K.width,H.image.height=K.height,H.image.data=K.data;if(H.wrapS=K.wrapS!==void 0?K.wrapS:1001,H.wrapT=K.wrapT!==void 0?K.wrapT:1001,H.magFilter=K.magFilter!==void 0?K.magFilter:1006,H.minFilter=K.minFilter!==void 0?K.minFilter:1006,H.anisotropy=K.anisotropy!==void 0?K.anisotropy:1,K.colorSpace!==void 0)H.colorSpace=K.colorSpace;if(K.flipY!==void 0)H.flipY=K.flipY;if(K.format!==void 0)H.format=K.format;if(K.type!==void 0)H.type=K.type;if(K.mipmaps!==void 0)H.mipmaps=K.mipmaps,H.minFilter=1008;if(K.mipmapCount===1)H.minFilter=1006;if(K.generateMipmaps!==void 0)H.generateMipmaps=K.generateMipmaps;if(H.needsUpdate=!0,Q)Q(H,K)},$,Z),H}}class D$ extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=new N0,H=new M6(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class s8 extends eJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new EJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class mW extends s8{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(eJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new EJ(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var KZ=new SJ,FY=new w,RY=new w;class L${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new i(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new SJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new x9,this._frameExtents=new i(1,1),this._viewportCount=1,this._viewports=[new Z0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(FY.setFromMatrixPosition(J.matrixWorld),Q.position.copy(FY),RY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(RY),Q.updateMatrixWorld(),KZ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(KZ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(KZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class EK extends L${constructor(){super(new B0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=A9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class _7 extends s8{constructor(J,Q,$=0,Z=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(eJ.DEFAULT_UP),this.updateMatrix(),this.target=new eJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new EK}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var kY=new SJ,s6=new w,UZ=new w;class qK extends L${constructor(){super(new B0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new i(4,2),this._viewportCount=6,this._viewports=[new Z0(2,1,1,1),new Z0(0,1,1,1),new Z0(3,1,1,1),new Z0(1,1,1,1),new Z0(3,0,1,1),new Z0(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();s6.setFromMatrixPosition(J.matrixWorld),$.position.copy(s6),UZ.copy($.position),UZ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(UZ),$.updateMatrixWorld(),Z.makeTranslation(-s6.x,-s6.y,-s6.z),kY.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kY,$.coordinateSystem,$.reversedDepth)}}class w7 extends s8{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new qK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class p9 extends N7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class NK extends L${constructor(){super(new p9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class I7 extends s8{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(eJ.DEFAULT_UP),this.updateMatrix(),this.target=new eJ,this.shadow=new NK}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class uW extends s8{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class cW extends s8{constructor(J,Q,$=10,Z=10){super(J,Q);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=$,this.height=Z}get power(){return this.intensity*this.width*this.height*Math.PI}set power(J){this.intensity=J/(this.width*this.height*Math.PI)}copy(J){return super.copy(J),this.width=J.width,this.height=J.height,this}toJSON(J){let Q=super.toJSON(J);return Q.object.width=this.width,Q.object.height=this.height,Q}}class nW{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let J=0;J<9;J++)this.coefficients.push(new w)}set(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].copy(J[Q]);return this}zero(){for(let J=0;J<9;J++)this.coefficients[J].set(0,0,0);return this}getAt(J,Q){let{x:$,y:Z,z:W}=J,H=this.coefficients;return Q.copy(H[0]).multiplyScalar(0.282095),Q.addScaledVector(H[1],0.488603*Z),Q.addScaledVector(H[2],0.488603*W),Q.addScaledVector(H[3],0.488603*$),Q.addScaledVector(H[4],1.092548*($*Z)),Q.addScaledVector(H[5],1.092548*(Z*W)),Q.addScaledVector(H[6],0.315392*(3*W*W-1)),Q.addScaledVector(H[7],1.092548*($*W)),Q.addScaledVector(H[8],0.546274*($*$-Z*Z)),Q}getIrradianceAt(J,Q){let{x:$,y:Z,z:W}=J,H=this.coefficients;return Q.copy(H[0]).multiplyScalar(0.886227),Q.addScaledVector(H[1],1.023328*Z),Q.addScaledVector(H[2],1.023328*W),Q.addScaledVector(H[3],1.023328*$),Q.addScaledVector(H[4],0.858086*$*Z),Q.addScaledVector(H[5],0.858086*Z*W),Q.addScaledVector(H[6],0.743125*W*W-0.247708),Q.addScaledVector(H[7],0.858086*$*W),Q.addScaledVector(H[8],0.429043*($*$-Z*Z)),Q}add(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].add(J.coefficients[Q]);return this}addScaledSH(J,Q){for(let $=0;$<9;$++)this.coefficients[$].addScaledVector(J.coefficients[$],Q);return this}scale(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].multiplyScalar(J);return this}lerp(J,Q){for(let $=0;$<9;$++)this.coefficients[$].lerp(J.coefficients[$],Q);return this}equals(J){for(let Q=0;Q<9;Q++)if(!this.coefficients[Q].equals(J.coefficients[Q]))return!1;return!0}copy(J){return this.set(J.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(J,Q=0){let $=this.coefficients;for(let Z=0;Z<9;Z++)$[Z].fromArray(J,Q+Z*3);return this}toArray(J=[],Q=0){let $=this.coefficients;for(let Z=0;Z<9;Z++)$[Z].toArray(J,Q+Z*3);return J}static getBasisAt(J,Q){let{x:$,y:Z,z:W}=J;Q[0]=0.282095,Q[1]=0.488603*Z,Q[2]=0.488603*W,Q[3]=0.488603*$,Q[4]=1.092548*$*Z,Q[5]=1.092548*Z*W,Q[6]=0.315392*(3*W*W-1),Q[7]=1.092548*$*W,Q[8]=0.546274*($*$-Z*Z)}}class sW extends s8{constructor(J=new nW,Q=1){super(void 0,Q);this.isLightProbe=!0,this.sh=J}copy(J){return super.copy(J),this.sh.copy(J.sh),this}fromJSON(J){return this.intensity=J.intensity,this.sh.fromArray(J.sh),this}toJSON(J){let Q=super.toJSON(J);return Q.object.sh=this.sh.toArray(),Q}}class V$ extends S0{constructor(J){super(J);this.textures={}}load(J,Q,$,Z){let W=this,H=new t0(W.manager);H.setPath(W.path),H.setRequestHeader(W.requestHeader),H.setWithCredentials(W.withCredentials),H.load(J,function(Y){try{Q(W.parse(JSON.parse(Y)))}catch(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J)}},$,Z)}parse(J){let Q=this.textures;function $(W){if(Q[W]===void 0)console.warn("THREE.MaterialLoader: Undefined texture",W);return Q[W]}let Z=this.createMaterialFromType(J.type);if(J.uuid!==void 0)Z.uuid=J.uuid;if(J.name!==void 0)Z.name=J.name;if(J.color!==void 0&&Z.color!==void 0)Z.color.setHex(J.color);if(J.roughness!==void 0)Z.roughness=J.roughness;if(J.metalness!==void 0)Z.metalness=J.metalness;if(J.sheen!==void 0)Z.sheen=J.sheen;if(J.sheenColor!==void 0)Z.sheenColor=new EJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)Z.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&Z.emissive!==void 0)Z.emissive.setHex(J.emissive);if(J.specular!==void 0&&Z.specular!==void 0)Z.specular.setHex(J.specular);if(J.specularIntensity!==void 0)Z.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&Z.specularColor!==void 0)Z.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)Z.shininess=J.shininess;if(J.clearcoat!==void 0)Z.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)Z.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)Z.dispersion=J.dispersion;if(J.iridescence!==void 0)Z.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)Z.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)Z.transmission=J.transmission;if(J.thickness!==void 0)Z.thickness=J.thickness;if(J.attenuationDistance!==void 0)Z.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&Z.attenuationColor!==void 0)Z.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)Z.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)Z.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)Z.fog=J.fog;if(J.flatShading!==void 0)Z.flatShading=J.flatShading;if(J.blending!==void 0)Z.blending=J.blending;if(J.combine!==void 0)Z.combine=J.combine;if(J.side!==void 0)Z.side=J.side;if(J.shadowSide!==void 0)Z.shadowSide=J.shadowSide;if(J.opacity!==void 0)Z.opacity=J.opacity;if(J.transparent!==void 0)Z.transparent=J.transparent;if(J.alphaTest!==void 0)Z.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)Z.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)Z.depthFunc=J.depthFunc;if(J.depthTest!==void 0)Z.depthTest=J.depthTest;if(J.depthWrite!==void 0)Z.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)Z.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)Z.blendSrc=J.blendSrc;if(J.blendDst!==void 0)Z.blendDst=J.blendDst;if(J.blendEquation!==void 0)Z.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)Z.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)Z.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)Z.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&Z.blendColor!==void 0)Z.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)Z.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)Z.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)Z.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)Z.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)Z.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)Z.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)Z.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)Z.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)Z.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)Z.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)Z.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)Z.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)Z.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)Z.rotation=J.rotation;if(J.linewidth!==void 0)Z.linewidth=J.linewidth;if(J.dashSize!==void 0)Z.dashSize=J.dashSize;if(J.gapSize!==void 0)Z.gapSize=J.gapSize;if(J.scale!==void 0)Z.scale=J.scale;if(J.polygonOffset!==void 0)Z.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)Z.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)Z.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)Z.dithering=J.dithering;if(J.alphaToCoverage!==void 0)Z.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)Z.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)Z.forceSinglePass=J.forceSinglePass;if(J.visible!==void 0)Z.visible=J.visible;if(J.toneMapped!==void 0)Z.toneMapped=J.toneMapped;if(J.userData!==void 0)Z.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")Z.vertexColors=J.vertexColors>0?!0:!1;else Z.vertexColors=J.vertexColors;if(J.uniforms!==void 0)for(let W in J.uniforms){let H=J.uniforms[W];switch(Z.uniforms[W]={},H.type){case"t":Z.uniforms[W].value=$(H.value);break;case"c":Z.uniforms[W].value=new EJ().setHex(H.value);break;case"v2":Z.uniforms[W].value=new i().fromArray(H.value);break;case"v3":Z.uniforms[W].value=new w().fromArray(H.value);break;case"v4":Z.uniforms[W].value=new Z0().fromArray(H.value);break;case"m3":Z.uniforms[W].value=new mJ().fromArray(H.value);break;case"m4":Z.uniforms[W].value=new SJ().fromArray(H.value);break;default:Z.uniforms[W].value=H.value}}if(J.defines!==void 0)Z.defines=J.defines;if(J.vertexShader!==void 0)Z.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)Z.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)Z.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let W in J.extensions)Z.extensions[W]=J.extensions[W];if(J.lights!==void 0)Z.lights=J.lights;if(J.clipping!==void 0)Z.clipping=J.clipping;if(J.size!==void 0)Z.size=J.size;if(J.sizeAttenuation!==void 0)Z.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)Z.map=$(J.map);if(J.matcap!==void 0)Z.matcap=$(J.matcap);if(J.alphaMap!==void 0)Z.alphaMap=$(J.alphaMap);if(J.bumpMap!==void 0)Z.bumpMap=$(J.bumpMap);if(J.bumpScale!==void 0)Z.bumpScale=J.bumpScale;if(J.normalMap!==void 0)Z.normalMap=$(J.normalMap);if(J.normalMapType!==void 0)Z.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let W=J.normalScale;if(Array.isArray(W)===!1)W=[W,W];Z.normalScale=new i().fromArray(W)}if(J.displacementMap!==void 0)Z.displacementMap=$(J.displacementMap);if(J.displacementScale!==void 0)Z.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)Z.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)Z.roughnessMap=$(J.roughnessMap);if(J.metalnessMap!==void 0)Z.metalnessMap=$(J.metalnessMap);if(J.emissiveMap!==void 0)Z.emissiveMap=$(J.emissiveMap);if(J.emissiveIntensity!==void 0)Z.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)Z.specularMap=$(J.specularMap);if(J.specularIntensityMap!==void 0)Z.specularIntensityMap=$(J.specularIntensityMap);if(J.specularColorMap!==void 0)Z.specularColorMap=$(J.specularColorMap);if(J.envMap!==void 0)Z.envMap=$(J.envMap);if(J.envMapRotation!==void 0)Z.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)Z.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)Z.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)Z.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)Z.lightMap=$(J.lightMap);if(J.lightMapIntensity!==void 0)Z.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)Z.aoMap=$(J.aoMap);if(J.aoMapIntensity!==void 0)Z.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)Z.gradientMap=$(J.gradientMap);if(J.clearcoatMap!==void 0)Z.clearcoatMap=$(J.clearcoatMap);if(J.clearcoatRoughnessMap!==void 0)Z.clearcoatRoughnessMap=$(J.clearcoatRoughnessMap);if(J.clearcoatNormalMap!==void 0)Z.clearcoatNormalMap=$(J.clearcoatNormalMap);if(J.clearcoatNormalScale!==void 0)Z.clearcoatNormalScale=new i().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)Z.iridescenceMap=$(J.iridescenceMap);if(J.iridescenceThicknessMap!==void 0)Z.iridescenceThicknessMap=$(J.iridescenceThicknessMap);if(J.transmissionMap!==void 0)Z.transmissionMap=$(J.transmissionMap);if(J.thicknessMap!==void 0)Z.thicknessMap=$(J.thicknessMap);if(J.anisotropyMap!==void 0)Z.anisotropyMap=$(J.anisotropyMap);if(J.sheenColorMap!==void 0)Z.sheenColorMap=$(J.sheenColorMap);if(J.sheenRoughnessMap!==void 0)Z.sheenRoughnessMap=$(J.sheenRoughnessMap);return Z}setTextures(J){return this.textures=J,this}createMaterialFromType(J){return V$.createMaterialFromType(J)}static createMaterialFromType(J){return new{ShadowMaterial:SW,SpriteMaterial:sQ,RawShaderMaterial:jW,ShaderMaterial:Y8,PointsMaterial:T6,MeshPhysicalMaterial:c0,MeshStandardMaterial:g9,MeshPhongMaterial:vW,MeshToonMaterial:yW,MeshNormalMaterial:fW,MeshLambertMaterial:hW,MeshDepthMaterial:O$,MeshDistanceMaterial:F$,MeshBasicMaterial:p0,MeshMatcapMaterial:bW,LineDashedMaterial:xW,LineBasicMaterial:A0,Material:V0}[J]}}class w8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class oW extends pJ{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class iW extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=new t0(W.manager);H.setPath(W.path),H.setRequestHeader(W.requestHeader),H.setWithCredentials(W.withCredentials),H.load(J,function(Y){try{Q(W.parse(JSON.parse(Y)))}catch(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J)}},$,Z)}parse(J){let Q={},$={};function Z(q,N){if(Q[N]!==void 0)return Q[N];let k=q.interleavedBuffers[N],F=W(q,k.buffer),O=N6(k.type,F),D=new K9(O,k.stride);return D.uuid=k.uuid,Q[N]=D,D}function W(q,N){if($[N]!==void 0)return $[N];let k=q.arrayBuffers[N],F=new Uint32Array(k).buffer;return $[N]=F,F}let H=J.isInstancedBufferGeometry?new oW:new pJ,Y=J.data.index;if(Y!==void 0){let q=N6(Y.type,Y.array);H.setIndex(new $0(q,1))}let X=J.data.attributes;for(let q in X){let N=X[q],R;if(N.isInterleavedBufferAttribute){let k=Z(J.data,N.data);R=new C8(k,N.itemSize,N.offset,N.normalized)}else{let k=N6(N.type,N.array);R=new(N.isInstancedBufferAttribute?_8:$0)(k,N.itemSize,N.normalized)}if(N.name!==void 0)R.name=N.name;if(N.usage!==void 0)R.setUsage(N.usage);H.setAttribute(q,R)}let K=J.data.morphAttributes;if(K)for(let q in K){let N=K[q],R=[];for(let k=0,F=N.length;k<F;k++){let O=N[k],D;if(O.isInterleavedBufferAttribute){let M=Z(J.data,O.data);D=new C8(M,O.itemSize,O.offset,O.normalized)}else{let M=N6(O.type,O.array);D=new $0(M,O.itemSize,O.normalized)}if(O.name!==void 0)D.name=O.name;R.push(D)}H.morphAttributes[q]=R}if(J.data.morphTargetsRelative)H.morphTargetsRelative=!0;let G=J.data.groups||J.data.drawcalls||J.data.offsets;if(G!==void 0)for(let q=0,N=G.length;q!==N;++q){let R=G[q];H.addGroup(R.start,R.count,R.materialIndex)}let E=J.data.boundingSphere;if(E!==void 0)H.boundingSphere=new C0().fromJSON(E);if(J.name)H.name=J.name;if(J.userData)H.userData=J.userData;return H}}class OK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=this.path===""?w8.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||H;let Y=new t0(this.manager);Y.setPath(this.path),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){let K=null;try{K=JSON.parse(X)}catch(G){if(Z!==void 0)Z(G);console.error("THREE:ObjectLoader: Can't parse "+J+".",G.message);return}let U=K.metadata;if(U===void 0||U.type===void 0||U.type.toLowerCase()==="geometry"){if(Z!==void 0)Z(Error("THREE.ObjectLoader: Can't load "+J));console.error("THREE.ObjectLoader: Can't load "+J);return}W.parse(K,Q)},$,Z)}async loadAsync(J,Q){let $=this,Z=this.path===""?w8.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||Z;let W=new t0(this.manager);W.setPath(this.path),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials);let H=await W.loadAsync(J,Q),Y=JSON.parse(H),X=Y.metadata;if(X===void 0||X.type===void 0||X.type.toLowerCase()==="geometry")throw Error("THREE.ObjectLoader: Can't load "+J);return await $.parseAsync(Y)}parse(J,Q){let $=this.parseAnimations(J.animations),Z=this.parseShapes(J.shapes),W=this.parseGeometries(J.geometries,Z),H=this.parseImages(J.images,function(){if(Q!==void 0)Q(K)}),Y=this.parseTextures(J.textures,H),X=this.parseMaterials(J.materials,Y),K=this.parseObject(J.object,W,X,Y,$),U=this.parseSkeletons(J.skeletons,K);if(this.bindSkeletons(K,U),this.bindLightTargets(K),Q!==void 0){let G=!1;for(let E in H)if(H[E].data instanceof HTMLImageElement){G=!0;break}if(G===!1)Q(K)}return K}async parseAsync(J){let Q=this.parseAnimations(J.animations),$=this.parseShapes(J.shapes),Z=this.parseGeometries(J.geometries,$),W=await this.parseImagesAsync(J.images),H=this.parseTextures(J.textures,W),Y=this.parseMaterials(J.materials,H),X=this.parseObject(J.object,Z,Y,H,Q),K=this.parseSkeletons(J.skeletons,X);return this.bindSkeletons(X,K),this.bindLightTargets(X),X}parseShapes(J){let Q={};if(J!==void 0)for(let $=0,Z=J.length;$<Z;$++){let W=new Q9().fromJSON(J[$]);Q[W.uuid]=W}return Q}parseSkeletons(J,Q){let $={},Z={};if(Q.traverse(function(W){if(W.isBone)Z[W.uuid]=W}),J!==void 0)for(let W=0,H=J.length;W<H;W++){let Y=new P6().fromJSON(J[W],Z);$[Y.uuid]=Y}return $}parseGeometries(J,Q){let $={};if(J!==void 0){let Z=new iW;for(let W=0,H=J.length;W<H;W++){let Y,X=J[W];switch(X.type){case"BufferGeometry":case"InstancedBufferGeometry":Y=Z.parse(X);break;default:if(X.type in OY)Y=OY[X.type].fromJSON(X,Q);else console.warn(`THREE.ObjectLoader: Unsupported geometry type "${X.type}"`)}if(Y.uuid=X.uuid,X.name!==void 0)Y.name=X.name;if(X.userData!==void 0)Y.userData=X.userData;$[X.uuid]=Y}}return $}parseMaterials(J,Q){let $={},Z={};if(J!==void 0){let W=new V$;W.setTextures(Q);for(let H=0,Y=J.length;H<Y;H++){let X=J[H];if($[X.uuid]===void 0)$[X.uuid]=W.parse(X);Z[X.uuid]=$[X.uuid]}}return Z}parseAnimations(J){let Q={};if(J!==void 0)for(let $=0;$<J.length;$++){let Z=J[$],W=$9.parse(Z);Q[W.uuid]=W}return Q}parseImages(J,Q){let $=this,Z={},W;function H(X){return $.manager.itemStart(X),W.load(X,function(){$.manager.itemEnd(X)},void 0,function(){$.manager.itemError(X),$.manager.itemEnd(X)})}function Y(X){if(typeof X==="string"){let K=X,U=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(K)?K:$.resourcePath+K;return H(U)}else if(X.data)return{data:N6(X.type,X.data),width:X.width,height:X.height};else return null}if(J!==void 0&&J.length>0){let X=new M$(Q);W=new M6(X),W.setCrossOrigin(this.crossOrigin);for(let K=0,U=J.length;K<U;K++){let G=J[K],E=G.url;if(Array.isArray(E)){let q=[];for(let N=0,R=E.length;N<R;N++){let k=E[N],F=Y(k);if(F!==null)if(F instanceof HTMLImageElement)q.push(F);else q.push(new O8(F.data,F.width,F.height))}Z[G.uuid]=new g8(q)}else{let q=Y(G.url);Z[G.uuid]=new g8(q)}}}return Z}async parseImagesAsync(J){let Q=this,$={},Z;async function W(H){if(typeof H==="string"){let Y=H,X=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(Y)?Y:Q.resourcePath+Y;return await Z.loadAsync(X)}else if(H.data)return{data:N6(H.type,H.data),width:H.width,height:H.height};else return null}if(J!==void 0&&J.length>0){Z=new M6(this.manager),Z.setCrossOrigin(this.crossOrigin);for(let H=0,Y=J.length;H<Y;H++){let X=J[H],K=X.url;if(Array.isArray(K)){let U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G],N=await W(q);if(N!==null)if(N instanceof HTMLImageElement)U.push(N);else U.push(new O8(N.data,N.width,N.height))}$[X.uuid]=new g8(U)}else{let U=await W(X.url);$[X.uuid]=new g8(U)}}}return $}parseTextures(J,Q){function $(W,H){if(typeof W==="number")return W;return console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",W),H[W]}let Z={};if(J!==void 0)for(let W=0,H=J.length;W<H;W++){let Y=J[W];if(Y.image===void 0)console.warn('THREE.ObjectLoader: No "image" specified for',Y.uuid);if(Q[Y.image]===void 0)console.warn("THREE.ObjectLoader: Undefined image",Y.image);let X=Q[Y.image],K=X.data,U;if(Array.isArray(K)){if(U=new w6,K.length===6)U.needsUpdate=!0}else{if(K&&K.data)U=new O8;else U=new N0;if(K)U.needsUpdate=!0}if(U.source=X,U.uuid=Y.uuid,Y.name!==void 0)U.name=Y.name;if(Y.mapping!==void 0)U.mapping=$(Y.mapping,x1);if(Y.channel!==void 0)U.channel=Y.channel;if(Y.offset!==void 0)U.offset.fromArray(Y.offset);if(Y.repeat!==void 0)U.repeat.fromArray(Y.repeat);if(Y.center!==void 0)U.center.fromArray(Y.center);if(Y.rotation!==void 0)U.rotation=Y.rotation;if(Y.wrap!==void 0)U.wrapS=$(Y.wrap[0],MY),U.wrapT=$(Y.wrap[1],MY);if(Y.format!==void 0)U.format=Y.format;if(Y.internalFormat!==void 0)U.internalFormat=Y.internalFormat;if(Y.type!==void 0)U.type=Y.type;if(Y.colorSpace!==void 0)U.colorSpace=Y.colorSpace;if(Y.minFilter!==void 0)U.minFilter=$(Y.minFilter,DY);if(Y.magFilter!==void 0)U.magFilter=$(Y.magFilter,DY);if(Y.anisotropy!==void 0)U.anisotropy=Y.anisotropy;if(Y.flipY!==void 0)U.flipY=Y.flipY;if(Y.generateMipmaps!==void 0)U.generateMipmaps=Y.generateMipmaps;if(Y.premultiplyAlpha!==void 0)U.premultiplyAlpha=Y.premultiplyAlpha;if(Y.unpackAlignment!==void 0)U.unpackAlignment=Y.unpackAlignment;if(Y.compareFunction!==void 0)U.compareFunction=Y.compareFunction;if(Y.userData!==void 0)U.userData=Y.userData;Z[Y.uuid]=U}return Z}parseObject(J,Q,$,Z,W){let H;function Y(E){if(Q[E]===void 0)console.warn("THREE.ObjectLoader: Undefined geometry",E);return Q[E]}function X(E){if(E===void 0)return;if(Array.isArray(E)){let q=[];for(let N=0,R=E.length;N<R;N++){let k=E[N];if($[k]===void 0)console.warn("THREE.ObjectLoader: Undefined material",k);q.push($[k])}return q}if($[E]===void 0)console.warn("THREE.ObjectLoader: Undefined material",E);return $[E]}function K(E){if(Z[E]===void 0)console.warn("THREE.ObjectLoader: Undefined texture",E);return Z[E]}let U,G;switch(J.type){case"Scene":if(H=new MW,J.background!==void 0)if(Number.isInteger(J.background))H.background=new EJ(J.background);else H.background=K(J.background);if(J.environment!==void 0)H.environment=K(J.environment);if(J.fog!==void 0){if(J.fog.type==="Fog")H.fog=new nQ(J.fog.color,J.fog.near,J.fog.far);else if(J.fog.type==="FogExp2")H.fog=new cQ(J.fog.color,J.fog.density);if(J.fog.name!=="")H.fog.name=J.fog.name}if(J.backgroundBlurriness!==void 0)H.backgroundBlurriness=J.backgroundBlurriness;if(J.backgroundIntensity!==void 0)H.backgroundIntensity=J.backgroundIntensity;if(J.backgroundRotation!==void 0)H.backgroundRotation.fromArray(J.backgroundRotation);if(J.environmentIntensity!==void 0)H.environmentIntensity=J.environmentIntensity;if(J.environmentRotation!==void 0)H.environmentRotation.fromArray(J.environmentRotation);break;case"PerspectiveCamera":if(H=new B0(J.fov,J.aspect,J.near,J.far),J.focus!==void 0)H.focus=J.focus;if(J.zoom!==void 0)H.zoom=J.zoom;if(J.filmGauge!==void 0)H.filmGauge=J.filmGauge;if(J.filmOffset!==void 0)H.filmOffset=J.filmOffset;if(J.view!==void 0)H.view=Object.assign({},J.view);break;case"OrthographicCamera":if(H=new p9(J.left,J.right,J.top,J.bottom,J.near,J.far),J.zoom!==void 0)H.zoom=J.zoom;if(J.view!==void 0)H.view=Object.assign({},J.view);break;case"AmbientLight":H=new uW(J.color,J.intensity);break;case"DirectionalLight":H=new I7(J.color,J.intensity),H.target=J.target||"";break;case"PointLight":H=new w7(J.color,J.intensity,J.distance,J.decay);break;case"RectAreaLight":H=new cW(J.color,J.intensity,J.width,J.height);break;case"SpotLight":H=new _7(J.color,J.intensity,J.distance,J.angle,J.penumbra,J.decay),H.target=J.target||"";break;case"HemisphereLight":H=new mW(J.color,J.groundColor,J.intensity);break;case"LightProbe":H=new sW().fromJSON(J);break;case"SkinnedMesh":if(U=Y(J.geometry),G=X(J.material),H=new F7(U,G),J.bindMode!==void 0)H.bindMode=J.bindMode;if(J.bindMatrix!==void 0)H.bindMatrix.fromArray(J.bindMatrix);if(J.skeleton!==void 0)H.skeleton=J.skeleton;break;case"Mesh":U=Y(J.geometry),G=X(J.material),H=new k0(U,G);break;case"InstancedMesh":U=Y(J.geometry),G=X(J.material);let{count:E,instanceMatrix:q,instanceColor:N}=J;if(H=new R7(U,G,E),H.instanceMatrix=new _8(new Float32Array(q.array),16),N!==void 0)H.instanceColor=new _8(new Float32Array(N.array),N.itemSize);break;case"BatchedMesh":if(U=Y(J.geometry),G=X(J.material),H=new VW(J.maxInstanceCount,J.maxVertexCount,J.maxIndexCount,G),H.geometry=U,H.perObjectFrustumCulled=J.perObjectFrustumCulled,H.sortObjects=J.sortObjects,H._drawRanges=J.drawRanges,H._reservedRanges=J.reservedRanges,H._geometryInfo=J.geometryInfo.map((R)=>{let k=null,F=null;if(R.boundingBox!==void 0)k=new _0().fromJSON(R.boundingBox);if(R.boundingSphere!==void 0)F=new C0().fromJSON(R.boundingSphere);return{...R,boundingBox:k,boundingSphere:F}}),H._instanceInfo=J.instanceInfo,H._availableInstanceIds=J._availableInstanceIds,H._availableGeometryIds=J._availableGeometryIds,H._nextIndexStart=J.nextIndexStart,H._nextVertexStart=J.nextVertexStart,H._geometryCount=J.geometryCount,H._maxInstanceCount=J.maxInstanceCount,H._maxVertexCount=J.maxVertexCount,H._maxIndexCount=J.maxIndexCount,H._geometryInitialized=J.geometryInitialized,H._matricesTexture=K(J.matricesTexture.uuid),H._indirectTexture=K(J.indirectTexture.uuid),J.colorsTexture!==void 0)H._colorsTexture=K(J.colorsTexture.uuid);if(J.boundingSphere!==void 0)H.boundingSphere=new C0().fromJSON(J.boundingSphere);if(J.boundingBox!==void 0)H.boundingBox=new _0().fromJSON(J.boundingBox);break;case"LOD":H=new LW;break;case"Line":H=new F8(Y(J.geometry),X(J.material));break;case"LineLoop":H=new k7(Y(J.geometry),X(J.material));break;case"LineSegments":H=new J8(Y(J.geometry),X(J.material));break;case"PointCloud":case"Points":H=new M7(Y(J.geometry),X(J.material));break;case"Sprite":H=new DW(X(J.material));break;case"Group":H=new q8;break;case"Bone":H=new I6;break;default:H=new eJ}if(H.uuid=J.uuid,J.name!==void 0)H.name=J.name;if(J.matrix!==void 0){if(H.matrix.fromArray(J.matrix),J.matrixAutoUpdate!==void 0)H.matrixAutoUpdate=J.matrixAutoUpdate;if(H.matrixAutoUpdate)H.matrix.decompose(H.position,H.quaternion,H.scale)}else{if(J.position!==void 0)H.position.fromArray(J.position);if(J.rotation!==void 0)H.rotation.fromArray(J.rotation);if(J.quaternion!==void 0)H.quaternion.fromArray(J.quaternion);if(J.scale!==void 0)H.scale.fromArray(J.scale)}if(J.up!==void 0)H.up.fromArray(J.up);if(J.castShadow!==void 0)H.castShadow=J.castShadow;if(J.receiveShadow!==void 0)H.receiveShadow=J.receiveShadow;if(J.shadow){if(J.shadow.intensity!==void 0)H.shadow.intensity=J.shadow.intensity;if(J.shadow.bias!==void 0)H.shadow.bias=J.shadow.bias;if(J.shadow.normalBias!==void 0)H.shadow.normalBias=J.shadow.normalBias;if(J.shadow.radius!==void 0)H.shadow.radius=J.shadow.radius;if(J.shadow.mapSize!==void 0)H.shadow.mapSize.fromArray(J.shadow.mapSize);if(J.shadow.camera!==void 0)H.shadow.camera=this.parseObject(J.shadow.camera)}if(J.visible!==void 0)H.visible=J.visible;if(J.frustumCulled!==void 0)H.frustumCulled=J.frustumCulled;if(J.renderOrder!==void 0)H.renderOrder=J.renderOrder;if(J.userData!==void 0)H.userData=J.userData;if(J.layers!==void 0)H.layers.mask=J.layers;if(J.children!==void 0){let E=J.children;for(let q=0;q<E.length;q++)H.add(this.parseObject(E[q],Q,$,Z,W))}if(J.animations!==void 0){let E=J.animations;for(let q=0;q<E.length;q++){let N=E[q];H.animations.push(W[N])}}if(J.type==="LOD"){if(J.autoUpdate!==void 0)H.autoUpdate=J.autoUpdate;let E=J.levels;for(let q=0;q<E.length;q++){let N=E[q],R=H.getObjectByProperty("uuid",N.object);if(R!==void 0)H.addLevel(R,N.distance,N.hysteresis)}}return H}bindSkeletons(J,Q){if(Object.keys(Q).length===0)return;J.traverse(function($){if($.isSkinnedMesh===!0&&$.skeleton!==void 0){let Z=Q[$.skeleton];if(Z===void 0)console.warn("THREE.ObjectLoader: No skeleton found with UUID:",$.skeleton);else $.bind(Z,$.bindMatrix)}})}bindLightTargets(J){J.traverse(function(Q){if(Q.isDirectionalLight||Q.isSpotLight){let $=Q.target,Z=J.getObjectByProperty("uuid",$);if(Z!==void 0)Q.target=Z;else Q.target=new eJ}})}}var x1={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},MY={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},DY={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},GZ=new WeakMap;class z$ extends S0{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=B8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(GZ.has(H)===!0){if(Z)Z(GZ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(B8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);GZ.set(X,K),B8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});B8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var OQ;class B${static getContext(){if(OQ===void 0)OQ=new(window.AudioContext||window.webkitAudioContext);return OQ}static setContext(J){OQ=J}}class FK extends S0{constructor(J){super(J)}load(J,Q,$,Z){let W=this,H=new t0(this.manager);H.setResponseType("arraybuffer"),H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(X){try{let K=X.slice(0);B$.getContext().decodeAudioData(K,function(G){Q(G)}).catch(Y)}catch(K){Y(K)}},$,Z);function Y(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J)}}}var LY=new SJ,VY=new SJ,z9=new SJ;class RK{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=0.064,this.cameraL=new B0,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new B0,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(J){let Q=this._cache;if(Q.focus!==J.focus||Q.fov!==J.fov||Q.aspect!==J.aspect*this.aspect||Q.near!==J.near||Q.far!==J.far||Q.zoom!==J.zoom||Q.eyeSep!==this.eyeSep){Q.focus=J.focus,Q.fov=J.fov,Q.aspect=J.aspect*this.aspect,Q.near=J.near,Q.far=J.far,Q.zoom=J.zoom,Q.eyeSep=this.eyeSep,z9.copy(J.projectionMatrix);let Z=Q.eyeSep/2,W=Z*Q.near/Q.focus,H=Q.near*Math.tan(T9*Q.fov*0.5)/Q.zoom,Y,X;VY.elements[12]=-Z,LY.elements[12]=Z,Y=-H*Q.aspect+W,X=H*Q.aspect+W,z9.elements[0]=2*Q.near/(X-Y),z9.elements[8]=(X+Y)/(X-Y),this.cameraL.projectionMatrix.copy(z9),Y=-H*Q.aspect-W,X=H*Q.aspect-W,z9.elements[0]=2*Q.near/(X-Y),z9.elements[8]=(X+Y)/(X-Y),this.cameraR.projectionMatrix.copy(z9)}this.cameraL.matrixWorld.copy(J.matrixWorld).multiply(VY),this.cameraR.matrixWorld.copy(J.matrixWorld).multiply(LY)}}class aW extends B0{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class rW{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}var B9=new w,EZ=new T0,g1=new w,C9=new w,_9=new w;class kK extends eJ{constructor(){super();this.type="AudioListener",this.context=B$.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new rW}getInput(){return this.gain}removeFilter(){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null;return this}getFilter(){return this.filter}setFilter(J){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination);else this.gain.disconnect(this.context.destination);return this.filter=J,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}updateMatrixWorld(J){super.updateMatrixWorld(J);let Q=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(B9,EZ,g1),C9.set(0,0,-1).applyQuaternion(EZ),_9.set(0,1,0).applyQuaternion(EZ),Q.positionX){let $=this.context.currentTime+this.timeDelta;Q.positionX.linearRampToValueAtTime(B9.x,$),Q.positionY.linearRampToValueAtTime(B9.y,$),Q.positionZ.linearRampToValueAtTime(B9.z,$),Q.forwardX.linearRampToValueAtTime(C9.x,$),Q.forwardY.linearRampToValueAtTime(C9.y,$),Q.forwardZ.linearRampToValueAtTime(C9.z,$),Q.upX.linearRampToValueAtTime(_9.x,$),Q.upY.linearRampToValueAtTime(_9.y,$),Q.upZ.linearRampToValueAtTime(_9.z,$)}else Q.setPosition(B9.x,B9.y,B9.z),Q.setOrientation(C9.x,C9.y,C9.z,_9.x,_9.y,_9.z)}}class tW extends eJ{constructor(J){super();this.type="Audio",this.listener=J,this.context=J.context,this.gain=this.context.createGain(),this.gain.connect(J.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(J){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=J,this.connect(),this}setMediaElementSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(J),this.connect(),this}setMediaStreamSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(J),this.connect(),this}setBuffer(J){if(this.buffer=J,this.sourceType="buffer",this.autoplay)this.play();return this}play(J=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+J;let Q=this.context.createBufferSource();return Q.buffer=this.buffer,Q.loop=this.loop,Q.loopStart=this.loopStart,Q.loopEnd=this.loopEnd,Q.onended=this.onEnded.bind(this),Q.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=Q,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.isPlaying===!0){if(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop(),this.source.onended=null,this.isPlaying=!1}return this}stop(J=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this._progress=0,this.source!==null)this.source.stop(this.context.currentTime+J),this.source.onended=null;return this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].connect(this.filters[J]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].disconnect(this.filters[J]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(J){if(!J)J=[];if(this._connected===!0)this.disconnect(),this.filters=J.slice(),this.connect();else this.filters=J.slice();return this}setDetune(J){if(this.detune=J,this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(J){return this.setFilters(J?[J]:[])}setPlaybackRate(J){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.playbackRate=J,this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){if(this.hasPlaybackControl===!1)return console.warn("THREE.Audio: this Audio has no playback control."),!1;return this.loop}setLoop(J){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.loop=J,this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(J){return this.loopStart=J,this}setLoopEnd(J){return this.loopEnd=J,this}getVolume(){return this.gain.gain.value}setVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}copy(J,Q){if(super.copy(J,Q),J.sourceType!=="buffer")return console.warn("THREE.Audio: Audio source type cannot be copied."),this;return this.autoplay=J.autoplay,this.buffer=J.buffer,this.detune=J.detune,this.loop=J.loop,this.loopStart=J.loopStart,this.loopEnd=J.loopEnd,this.offset=J.offset,this.duration=J.duration,this.playbackRate=J.playbackRate,this.hasPlaybackControl=J.hasPlaybackControl,this.sourceType=J.sourceType,this.filters=J.filters.slice(),this}clone(J){return new this.constructor(this.listener).copy(this,J)}}var w9=new w,zY=new T0,p1=new w,I9=new w;class MK extends tW{constructor(J){super(J);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(J){return this.panner.refDistance=J,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(J){return this.panner.rolloffFactor=J,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(J){return this.panner.distanceModel=J,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(J){return this.panner.maxDistance=J,this}setDirectionalCone(J,Q,$){return this.panner.coneInnerAngle=J,this.panner.coneOuterAngle=Q,this.panner.coneOuterGain=$,this}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(w9,zY,p1),I9.set(0,0,1).applyQuaternion(zY);let Q=this.panner;if(Q.positionX){let $=this.context.currentTime+this.listener.timeDelta;Q.positionX.linearRampToValueAtTime(w9.x,$),Q.positionY.linearRampToValueAtTime(w9.y,$),Q.positionZ.linearRampToValueAtTime(w9.z,$),Q.orientationX.linearRampToValueAtTime(I9.x,$),Q.orientationY.linearRampToValueAtTime(I9.y,$),Q.orientationZ.linearRampToValueAtTime(I9.z,$)}else Q.setPosition(w9.x,w9.y,w9.z),Q.setOrientation(I9.x,I9.y,I9.z)}}class DK{constructor(J,Q=2048){this.analyser=J.context.createAnalyser(),this.analyser.fftSize=Q,this.data=new Uint8Array(this.analyser.frequencyBinCount),J.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let J=0,Q=this.getFrequencyData();for(let $=0;$<Q.length;$++)J+=Q[$];return J/Q.length}}class eW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,W,H;switch(Q){case"quaternion":Z=this._slerp,W=this._slerpAdditive,H=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,W=this._select,H=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,W=this._lerpAdditive,H=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=W,this._setIdentity=H,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,W=J*Z+Z,H=this.cumulativeWeight;if(H===0){for(let Y=0;Y!==Z;++Y)$[W+Y]=$[Y];H=Q}else{H+=Q;let Y=Q/H;this._mixBufferRegion($,W,0,Y,Z)}this.cumulativeWeight=H}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,W=this.cumulativeWeight,H=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let X=Q*this._origIndex;this._mixBufferRegion($,Z,X,1-W,Q)}if(H>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let X=Q,K=Q+Q;X!==K;++X)if($[X]!==$[X+Q]){Y.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let W=$,H=Z;W!==H;++W)Q[W]=Q[Z+W%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,W){if(Z>=0.5)for(let H=0;H!==W;++H)J[Q+H]=J[$+H]}_slerp(J,Q,$,Z){T0.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,W){let H=this._workIndex*W;T0.multiplyQuaternionsFlat(J,H,J,Q,J,$),T0.slerpFlat(J,Q,J,Q,J,H,Z)}_lerp(J,Q,$,Z,W){let H=1-Z;for(let Y=0;Y!==W;++Y){let X=Q+Y;J[X]=J[X]*H+J[$+Y]*Z}}_lerpAdditive(J,Q,$,Z,W){for(let H=0;H!==W;++H){let Y=Q+H;J[Y]=J[Y]+J[$+H]*Z}}}var JH="\\[\\]\\.:\\/",l1=new RegExp("["+JH+"]","g"),QH="[^"+JH+"]",d1="[^"+JH.replace("\\.","")+"]",m1=/((?:WC+[\/:])*)/.source.replace("WC",QH),u1=/(WCOD+)?/.source.replace("WCOD",d1),c1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",QH),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",QH),s1=new RegExp("^"+m1+u1+c1+n1+"$"),o1=["material","materials","bones","map"];class LK{constructor(J,Q,$){let Z=$||Q0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class Q0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||Q0.parseTrackName(Q),this.node=Q0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new Q0(J,Q,$);else return new Q0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(l1,"")}static parseTrackName(J){let Q=s1.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(o1.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=Q0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[Z];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Q0.Composite=LK;Q0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Q0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Q0.prototype.GetterByBindingType=[Q0.prototype._getValue_direct,Q0.prototype._getValue_array,Q0.prototype._getValue_arrayElement,Q0.prototype._getValue_toArray];Q0.prototype.SetterByBindingTypeAndVersioning=[[Q0.prototype._setValue_direct,Q0.prototype._setValue_direct_setNeedsUpdate,Q0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_array,Q0.prototype._setValue_array_setNeedsUpdate,Q0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_arrayElement,Q0.prototype._setValue_arrayElement_setNeedsUpdate,Q0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_fromArray,Q0.prototype._setValue_fromArray_setNeedsUpdate,Q0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class VK{constructor(){this.isAnimationObjectGroup=!0,this.uuid=a0(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let J={};this._indicesByUUID=J;for(let $=0,Z=arguments.length;$!==Z;++$)J[arguments[$].uuid]=$;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let Q=this;this.stats={objects:{get total(){return Q._objects.length},get inUse(){return this.total-Q.nCachedObjects_}},get bindingsPerObject(){return Q._bindings.length}}}add(){let J=this._objects,Q=this._indicesByUUID,$=this._paths,Z=this._parsedPaths,W=this._bindings,H=W.length,Y=void 0,X=J.length,K=this.nCachedObjects_;for(let U=0,G=arguments.length;U!==G;++U){let E=arguments[U],q=E.uuid,N=Q[q];if(N===void 0){N=X++,Q[q]=N,J.push(E);for(let R=0,k=H;R!==k;++R)W[R].push(new Q0(E,$[R],Z[R]))}else if(N<K){Y=J[N];let R=--K,k=J[R];Q[k.uuid]=N,J[N]=k,Q[q]=R,J[R]=E;for(let F=0,O=H;F!==O;++F){let D=W[F],M=D[R],V=D[N];if(D[N]=M,V===void 0)V=new Q0(E,$[F],Z[F]);D[R]=V}}else if(J[N]!==Y)console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=K}remove(){let J=this._objects,Q=this._indicesByUUID,$=this._bindings,Z=$.length,W=this.nCachedObjects_;for(let H=0,Y=arguments.length;H!==Y;++H){let X=arguments[H],K=X.uuid,U=Q[K];if(U!==void 0&&U>=W){let G=W++,E=J[G];Q[E.uuid]=U,J[U]=E,Q[K]=G,J[G]=X;for(let q=0,N=Z;q!==N;++q){let R=$[q],k=R[G],F=R[U];R[U]=k,R[G]=F}}}this.nCachedObjects_=W}uncache(){let J=this._objects,Q=this._indicesByUUID,$=this._bindings,Z=$.length,W=this.nCachedObjects_,H=J.length;for(let Y=0,X=arguments.length;Y!==X;++Y){let K=arguments[Y],U=K.uuid,G=Q[U];if(G!==void 0)if(delete Q[U],G<W){let E=--W,q=J[E],N=--H,R=J[N];Q[q.uuid]=G,J[G]=q,Q[R.uuid]=E,J[E]=R,J.pop();for(let k=0,F=Z;k!==F;++k){let O=$[k],D=O[E],M=O[N];O[G]=D,O[E]=M,O.pop()}}else{let E=--H,q=J[E];if(E>0)Q[q.uuid]=G;J[G]=q,J.pop();for(let N=0,R=Z;N!==R;++N){let k=$[N];k[G]=k[E],k.pop()}}}this.nCachedObjects_=W}subscribe_(J,Q){let $=this._bindingsIndicesByPath,Z=$[J],W=this._bindings;if(Z!==void 0)return W[Z];let H=this._paths,Y=this._parsedPaths,X=this._objects,K=X.length,U=this.nCachedObjects_,G=Array(K);Z=W.length,$[J]=Z,H.push(J),Y.push(Q),W.push(G);for(let E=U,q=X.length;E!==q;++E){let N=X[E];G[E]=new Q0(N,J,Q)}return G}unsubscribe_(J){let Q=this._bindingsIndicesByPath,$=Q[J];if($!==void 0){let Z=this._paths,W=this._parsedPaths,H=this._bindings,Y=H.length-1,X=H[Y],K=J[Y];Q[K]=$,H[$]=X,H.pop(),W[$]=W[Y],W.pop(),Z[$]=Z[Y],Z.pop()}}}class $H{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let W=Q.tracks,H=W.length,Y=Array(H),X={endingStart:2400,endingEnd:2400};for(let K=0;K!==H;++K){let U=W[K].createInterpolant(null);Y[K]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(H),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,W=J._clip.duration,H=W/Z,Y=Z/W;J.warp(1,H,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,W=Z.time,H=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:K}=Y;return X[0]=W,X[1]=W+$,K[0]=J/H,K[1]=Q/H,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let X=(J-W)*$;if(X<0||$===0)Q=0;else this._startTime=null,Q=$*X}Q*=this._updateTimeScale(J);let H=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,K=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(H),K[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(H),K[U].accumulate(Z,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1])if(this.stopWarping(),Q===0)this.paused=!0;else this.timeScale=Q}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,W=this._loopCount,H=$===2202;if(J===0){if(W===-1)return Z;return H&&(W&1)===1?Q-Z:Z}if($===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,H);else this._setEndings(this.repetitions===0,!0,H);if(Z>=Q||Z<0){let Y=Math.floor(Z/Q);Z-=Q*Y,W+=Math.abs(Y);let X=this.repetitions-W;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let K=J<0;this._setEndings(K,!K,H)}else this._setEndings(!1,!1,H);this._loopCount=W,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this.time=Z;if(H&&(W&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,W=Z.time,H=this._weightInterpolant;if(H===null)H=Z._lendControlInterpolant(),this._weightInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=W,X[0]=Q,Y[1]=W+J,X[1]=$,this}}var i1=new Float32Array(1);class zK extends k8{constructor(J){super();this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,W=Z.length,H=J._propertyBindings,Y=J._interpolants,X=$.uuid,K=this._bindingsByRootAndName,U=K[X];if(U===void 0)U={},K[X]=U;for(let G=0;G!==W;++G){let E=Z[G],q=E.name,N=U[q];if(N!==void 0)++N.referenceCount,H[G]=N;else{if(N=H[G],N!==void 0){if(N._cacheIndex===null)++N.referenceCount,this._addInactiveBinding(N,X,q);continue}let R=Q&&Q._propertyBindings[G].binding.parsedPath;N=new eW(Q0.create($,q,R),E.ValueTypeName,E.getValueSize()),++N.referenceCount,this._addInactiveBinding(N,X,q),H[G]=N}Y[G].resultBuffer=N.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,W=this._actionsByClip[Z];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,W=this._actionsByClip,H=W[Q];if(H===void 0)H={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=H;else{let Y=H.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),H.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,H=this._actionsByClip,Y=H[W],X=Y.knownActions,K=X[X.length-1],U=J._byClipCacheIndex;K._byClipCacheIndex=U,X[U]=K,X.pop(),J._byClipCacheIndex=null;let G=Y.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],X.length===0)delete H[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,W=this._bindings,H=Z[Q];if(H===void 0)H={},Z[Q]=H;H[$]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,W=$.path,H=this._bindingsByRootAndName,Y=H[Z],X=Q[Q.length-1],K=J._cacheIndex;if(X._cacheIndex=K,Q[K]=X,Q.pop(),delete Y[W],Object.keys(Y).length===0)delete H[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new R$(new Float32Array(2),new Float32Array(2),1,i1),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,W=Q[Z];J.__cacheIndex=Z,Q[Z]=J,W.__cacheIndex=$,Q[$]=W}clipAction(J,Q,$){let Z=Q||this._root,W=Z.uuid,H=typeof J==="string"?$9.findByName(Z,J):J,Y=H!==null?H.uuid:J,X=this._actionsByClip[Y],K=null;if($===void 0)if(H!==null)$=H.blendMode;else $=2500;if(X!==void 0){let G=X.actionByRoot[W];if(G!==void 0&&G.blendMode===$)return G;if(K=X.knownActions[0],H===null)H=K._clip}if(H===null)return null;let U=new $H(this,H,Q,$);return this._bindAction(U,K),this._addInactiveAction(U,Y,W),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,W=typeof J==="string"?$9.findByName($,J):J,H=W?W.uuid:J,Y=this._actionsByClip[H];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,W=Math.sign(J),H=this._accuIndex^=1;for(let K=0;K!==$;++K)Q[K]._update(Z,J,W,H);let Y=this._bindings,X=this._nActiveBindings;for(let K=0;K!==X;++K)Y[K].apply(H);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,W=Z[$];if(W!==void 0){let H=W.knownActions;for(let Y=0,X=H.length;Y!==X;++Y){let K=H[Y];this._deactivateAction(K);let U=K._cacheIndex,G=Q[Q.length-1];K._cacheIndex=null,K._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(K)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let H in $){let Y=$[H].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,W=Z[Q];if(W!==void 0)for(let H in W){let Y=W[H];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class BK extends dQ{constructor(J=1,Q=1,$=1,Z={}){super(J,Q,Z);this.isRenderTarget3D=!0,this.depth=$,this.texture=new E7(null,J,Q,$),this._setTextureOptions(Z),this.texture.isRenderTargetTexture=!0}}class ZH{constructor(J){this.value=J}clone(){return new ZH(this.value.clone===void 0?this.value:this.value.clone())}}var a1=0;class CK extends k8{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.usage=35044,this.uniforms=[]}add(J){return this.uniforms.push(J),this}remove(J){let Q=this.uniforms.indexOf(J);if(Q!==-1)this.uniforms.splice(Q,1);return this}setName(J){return this.name=J,this}setUsage(J){return this.usage=J,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(J){this.name=J.name,this.usage=J.usage;let Q=J.uniforms;this.uniforms.length=0;for(let $=0,Z=Q.length;$<Z;$++){let W=Array.isArray(Q[$])?Q[$]:[Q[$]];for(let H=0;H<W.length;H++)this.uniforms.push(W[H].clone())}return this}clone(){return new this.constructor().copy(this)}}class _K extends K9{constructor(J,Q,$=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class wK{constructor(J,Q,$,Z,W,H=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=J,this.type=Q,this.itemSize=$,this.elementSize=Z,this.count=W,this.normalized=H,this.version=0}set needsUpdate(J){if(J===!0)this.version++}setBuffer(J){return this.buffer=J,this}setType(J,Q){return this.type=J,this.elementSize=Q,this}setItemSize(J){return this.itemSize=J,this}setCount(J){return this.count=J,this}}var BY=new SJ;class IK{constructor(J,Q,$=0,Z=1/0){this.ray=new f9(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new q7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else console.error("THREE.Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return BY.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(BY),this}intersectObject(J,Q=!0,$=[]){return DZ(J,this,$,Q),$.sort(CY),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,W=J.length;Z<W;Z++)DZ(J[Z],this,$,Q);return $.sort(CY),$}}function CY(J,Q){return J.distance-Q.distance}function DZ(J,Q,$,Z){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)W=!1}if(W===!0&&Z===!0){let H=J.children;for(let Y=0,X=H.length;Y<X;Y++)DZ(H[Y],Q,$,!0)}}class PK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=r1.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function r1(){if(this._document.hidden===!1)this.reset()}class TK{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=bJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(bJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class AK{constructor(J=1,Q=0,$=0){this.radius=J,this.theta=Q,this.y=$}set(J,Q,$){return this.radius=J,this.theta=Q,this.y=$,this}copy(J){return this.radius=J.radius,this.theta=J.theta,this.y=J.y,this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){return this.radius=Math.sqrt(J*J+$*$),this.theta=Math.atan2(J,$),this.y=Q,this}clone(){return new this.constructor().copy(this)}}class WH{constructor(J,Q,$,Z){if(WH.prototype.isMatrix2=!0,this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}var _Y=new i;class SK{constructor(J=new i(1/0,1/0),Q=new i(-1/0,-1/0)){this.isBox2=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=_Y.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(J){return this.isEmpty()?J.set(0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,_Y).distanceTo(J)}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var wY=new w,FQ=new w,E6=new w,q6=new w,qZ=new w,t1=new w,e1=new w;class jK{constructor(J=new w,Q=new w){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){wY.subVectors(J,this.start),FQ.subVectors(this.end,this.start);let $=FQ.dot(FQ),W=FQ.dot(wY)/$;if(Q)W=bJ(W,0,1);return W}closestPointToPoint(J,Q,$){let Z=this.closestPointToPointParameter(J,Q);return this.delta($).multiplyScalar(Z).add(this.start)}distanceSqToLine3(J,Q=t1,$=e1){let W,H,Y=this.start,X=J.start,K=this.end,U=J.end;E6.subVectors(K,Y),q6.subVectors(U,X),qZ.subVectors(Y,X);let G=E6.dot(E6),E=q6.dot(q6),q=q6.dot(qZ);if(G<=0.00000000000000010000000000000001&&E<=0.00000000000000010000000000000001)return Q.copy(Y),$.copy(X),Q.sub($),Q.dot(Q);if(G<=0.00000000000000010000000000000001)W=0,H=q/E,H=bJ(H,0,1);else{let N=E6.dot(qZ);if(E<=0.00000000000000010000000000000001)H=0,W=bJ(-N/G,0,1);else{let R=E6.dot(q6),k=G*E-R*R;if(k!==0)W=bJ((R*q-N*E)/k,0,1);else W=0;if(H=(R*W+q)/E,H<0)H=0,W=bJ(-N/G,0,1);else if(H>1)H=1,W=bJ((R-N)/G,0,1)}}return Q.copy(Y).add(E6.multiplyScalar(W)),$.copy(X).add(q6.multiplyScalar(H)),Q.sub($),Q.dot(Q)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}var IY=new w;class vK extends eJ{constructor(J,Q){super();this.light=J,this.matrixAutoUpdate=!1,this.color=Q,this.type="SpotLightHelper";let $=new pJ,Z=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let H=0,Y=1,X=32;H<X;H++,Y++){let K=H/X*Math.PI*2,U=Y/X*Math.PI*2;Z.push(Math.cos(K),Math.sin(K),1,Math.cos(U),Math.sin(U),1)}$.setAttribute("position",new VJ(Z,3));let W=new A0({fog:!1,toneMapped:!1});this.cone=new J8($,W),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent)this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld);else this.matrix.copy(this.light.matrixWorld);this.matrixWorld.copy(this.light.matrixWorld);let J=this.light.distance?this.light.distance:1000,Q=J*Math.tan(this.light.angle);if(this.cone.scale.set(Q,Q,J),IY.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(IY),this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}var J9=new w,RQ=new SJ,NZ=new SJ;class yK extends J8{constructor(J){let Q=fK(J),$=new pJ,Z=[],W=[];for(let K=0;K<Q.length;K++){let U=Q[K];if(U.parent&&U.parent.isBone)Z.push(0,0,0),Z.push(0,0,0),W.push(0,0,0),W.push(0,0,0)}$.setAttribute("position",new VJ(Z,3)),$.setAttribute("color",new VJ(W,3));let H=new A0({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super($,H);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=J,this.bones=Q,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1;let Y=new EJ(255),X=new EJ(65280);this.setColors(Y,X)}updateMatrixWorld(J){let Q=this.bones,$=this.geometry,Z=$.getAttribute("position");NZ.copy(this.root.matrixWorld).invert();for(let W=0,H=0;W<Q.length;W++){let Y=Q[W];if(Y.parent&&Y.parent.isBone)RQ.multiplyMatrices(NZ,Y.matrixWorld),J9.setFromMatrixPosition(RQ),Z.setXYZ(H,J9.x,J9.y,J9.z),RQ.multiplyMatrices(NZ,Y.parent.matrixWorld),J9.setFromMatrixPosition(RQ),Z.setXYZ(H+1,J9.x,J9.y,J9.z),H+=2}$.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(J)}setColors(J,Q){let Z=this.geometry.getAttribute("color");for(let W=0;W<Z.count;W+=2)Z.setXYZ(W,J.r,J.g,J.b),Z.setXYZ(W+1,Q.r,Q.g,Q.b);return Z.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function fK(J){let Q=[];if(J.isBone===!0)Q.push(J);for(let $=0;$<J.children.length;$++)Q.push(...fK(J.children[$]));return Q}class hK extends k0{constructor(J,Q,$){let Z=new C7(Q,4,2),W=new p0({wireframe:!0,fog:!1,toneMapped:!1});super(Z,W);this.light=J,this.color=$,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}var Jq=new w,PY=new EJ,TY=new EJ;class bK extends eJ{constructor(J,Q,$){super();this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=$,this.type="HemisphereLightHelper";let Z=new B7(Q);if(Z.rotateY(Math.PI*0.5),this.material=new p0({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0)this.material.vertexColors=!0;let W=Z.getAttribute("position"),H=new Float32Array(W.count*3);Z.setAttribute("color",new $0(H,3)),this.add(new k0(Z,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let J=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let Q=J.geometry.getAttribute("color");PY.copy(this.light.color),TY.copy(this.light.groundColor);for(let $=0,Z=Q.count;$<Z;$++){let W=$<Z/2?PY:TY;Q.setXYZ($,W.r,W.g,W.b)}Q.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),J.lookAt(Jq.setFromMatrixPosition(this.light.matrixWorld).negate())}}class xK extends J8{constructor(J=10,Q=10,$=4473924,Z=8947848){$=new EJ($),Z=new EJ(Z);let W=Q/2,H=J/Q,Y=J/2,X=[],K=[];for(let E=0,q=0,N=-Y;E<=Q;E++,N+=H){X.push(-Y,0,N,Y,0,N),X.push(N,0,-Y,N,0,Y);let R=E===W?$:Z;R.toArray(K,q),q+=3,R.toArray(K,q),q+=3,R.toArray(K,q),q+=3,R.toArray(K,q),q+=3}let U=new pJ;U.setAttribute("position",new VJ(X,3)),U.setAttribute("color",new VJ(K,3));let G=new A0({vertexColors:!0,toneMapped:!1});super(U,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gK extends J8{constructor(J=10,Q=16,$=8,Z=64,W=4473924,H=8947848){W=new EJ(W),H=new EJ(H);let Y=[],X=[];if(Q>1)for(let G=0;G<Q;G++){let E=G/Q*(Math.PI*2),q=Math.sin(E)*J,N=Math.cos(E)*J;Y.push(0,0,0),Y.push(q,0,N);let R=G&1?W:H;X.push(R.r,R.g,R.b),X.push(R.r,R.g,R.b)}for(let G=0;G<$;G++){let E=G&1?W:H,q=J-J/$*G;for(let N=0;N<Z;N++){let R=N/Z*(Math.PI*2),k=Math.sin(R)*q,F=Math.cos(R)*q;Y.push(k,0,F),X.push(E.r,E.g,E.b),R=(N+1)/Z*(Math.PI*2),k=Math.sin(R)*q,F=Math.cos(R)*q,Y.push(k,0,F),X.push(E.r,E.g,E.b)}}let K=new pJ;K.setAttribute("position",new VJ(Y,3)),K.setAttribute("color",new VJ(X,3));let U=new A0({vertexColors:!0,toneMapped:!1});super(K,U);this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}var AY=new w,kQ=new w,SY=new w;class pK extends eJ{constructor(J,Q,$){super();if(this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=$,this.type="DirectionalLightHelper",Q===void 0)Q=1;let Z=new pJ;Z.setAttribute("position",new VJ([-Q,Q,0,Q,Q,0,Q,-Q,0,-Q,-Q,0,-Q,Q,0],3));let W=new A0({fog:!1,toneMapped:!1});this.lightPlane=new F8(Z,W),this.add(this.lightPlane),Z=new pJ,Z.setAttribute("position",new VJ([0,0,0,0,0,1],3)),this.targetLine=new F8(Z,W),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),AY.setFromMatrixPosition(this.light.matrixWorld),kQ.setFromMatrixPosition(this.light.target.matrixWorld),SY.subVectors(kQ,AY),this.lightPlane.lookAt(kQ),this.color!==void 0)this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color);else this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color);this.targetLine.lookAt(kQ),this.targetLine.scale.z=SY.length()}}var MQ=new w,D0=new N7;class lK extends J8{constructor(J){let Q=new pJ,$=new A0({color:16777215,vertexColors:!0,toneMapped:!1}),Z=[],W=[],H={};Y("n1","n2"),Y("n2","n4"),Y("n4","n3"),Y("n3","n1"),Y("f1","f2"),Y("f2","f4"),Y("f4","f3"),Y("f3","f1"),Y("n1","f1"),Y("n2","f2"),Y("n3","f3"),Y("n4","f4"),Y("p","n1"),Y("p","n2"),Y("p","n3"),Y("p","n4"),Y("u1","u2"),Y("u2","u3"),Y("u3","u1"),Y("c","t"),Y("p","c"),Y("cn1","cn2"),Y("cn3","cn4"),Y("cf1","cf2"),Y("cf3","cf4");function Y(N,R){X(N),X(R)}function X(N){if(Z.push(0,0,0),W.push(0,0,0),H[N]===void 0)H[N]=[];H[N].push(Z.length/3-1)}Q.setAttribute("position",new VJ(Z,3)),Q.setAttribute("color",new VJ(W,3));super(Q,$);if(this.type="CameraHelper",this.camera=J,this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=H,this.update();let K=new EJ(16755200),U=new EJ(16711680),G=new EJ(43775),E=new EJ(16777215),q=new EJ(3355443);this.setColors(K,U,G,E,q)}setColors(J,Q,$,Z,W){let Y=this.geometry.getAttribute("color");return Y.setXYZ(0,J.r,J.g,J.b),Y.setXYZ(1,J.r,J.g,J.b),Y.setXYZ(2,J.r,J.g,J.b),Y.setXYZ(3,J.r,J.g,J.b),Y.setXYZ(4,J.r,J.g,J.b),Y.setXYZ(5,J.r,J.g,J.b),Y.setXYZ(6,J.r,J.g,J.b),Y.setXYZ(7,J.r,J.g,J.b),Y.setXYZ(8,J.r,J.g,J.b),Y.setXYZ(9,J.r,J.g,J.b),Y.setXYZ(10,J.r,J.g,J.b),Y.setXYZ(11,J.r,J.g,J.b),Y.setXYZ(12,J.r,J.g,J.b),Y.setXYZ(13,J.r,J.g,J.b),Y.setXYZ(14,J.r,J.g,J.b),Y.setXYZ(15,J.r,J.g,J.b),Y.setXYZ(16,J.r,J.g,J.b),Y.setXYZ(17,J.r,J.g,J.b),Y.setXYZ(18,J.r,J.g,J.b),Y.setXYZ(19,J.r,J.g,J.b),Y.setXYZ(20,J.r,J.g,J.b),Y.setXYZ(21,J.r,J.g,J.b),Y.setXYZ(22,J.r,J.g,J.b),Y.setXYZ(23,J.r,J.g,J.b),Y.setXYZ(24,Q.r,Q.g,Q.b),Y.setXYZ(25,Q.r,Q.g,Q.b),Y.setXYZ(26,Q.r,Q.g,Q.b),Y.setXYZ(27,Q.r,Q.g,Q.b),Y.setXYZ(28,Q.r,Q.g,Q.b),Y.setXYZ(29,Q.r,Q.g,Q.b),Y.setXYZ(30,Q.r,Q.g,Q.b),Y.setXYZ(31,Q.r,Q.g,Q.b),Y.setXYZ(32,$.r,$.g,$.b),Y.setXYZ(33,$.r,$.g,$.b),Y.setXYZ(34,$.r,$.g,$.b),Y.setXYZ(35,$.r,$.g,$.b),Y.setXYZ(36,$.r,$.g,$.b),Y.setXYZ(37,$.r,$.g,$.b),Y.setXYZ(38,Z.r,Z.g,Z.b),Y.setXYZ(39,Z.r,Z.g,Z.b),Y.setXYZ(40,W.r,W.g,W.b),Y.setXYZ(41,W.r,W.g,W.b),Y.setXYZ(42,W.r,W.g,W.b),Y.setXYZ(43,W.r,W.g,W.b),Y.setXYZ(44,W.r,W.g,W.b),Y.setXYZ(45,W.r,W.g,W.b),Y.setXYZ(46,W.r,W.g,W.b),Y.setXYZ(47,W.r,W.g,W.b),Y.setXYZ(48,W.r,W.g,W.b),Y.setXYZ(49,W.r,W.g,W.b),Y.needsUpdate=!0,this}update(){let J=this.geometry,Q=this.pointMap,$=1,Z=1,W,H;if(D0.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)W=1,H=0;else if(this.camera.coordinateSystem===2000)W=-1,H=1;else if(this.camera.coordinateSystem===2001)W=0,H=1;else throw Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);L0("c",Q,J,D0,0,0,W),L0("t",Q,J,D0,0,0,H),L0("n1",Q,J,D0,-1,-1,W),L0("n2",Q,J,D0,1,-1,W),L0("n3",Q,J,D0,-1,1,W),L0("n4",Q,J,D0,1,1,W),L0("f1",Q,J,D0,-1,-1,H),L0("f2",Q,J,D0,1,-1,H),L0("f3",Q,J,D0,-1,1,H),L0("f4",Q,J,D0,1,1,H),L0("u1",Q,J,D0,0.7,1.1,W),L0("u2",Q,J,D0,-0.7,1.1,W),L0("u3",Q,J,D0,0,2,W),L0("cf1",Q,J,D0,-1,0,H),L0("cf2",Q,J,D0,1,0,H),L0("cf3",Q,J,D0,0,-1,H),L0("cf4",Q,J,D0,0,1,H),L0("cn1",Q,J,D0,-1,0,W),L0("cn2",Q,J,D0,1,0,W),L0("cn3",Q,J,D0,0,-1,W),L0("cn4",Q,J,D0,0,1,W),J.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function L0(J,Q,$,Z,W,H,Y){MQ.set(W,H,Y).unproject(Z);let X=Q[J];if(X!==void 0){let K=$.getAttribute("position");for(let U=0,G=X.length;U<G;U++)K.setXYZ(X[U],MQ.x,MQ.y,MQ.z)}}var DQ=new _0;class dK extends J8{constructor(J,Q=16776960){let $=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),Z=new Float32Array(24),W=new pJ;W.setIndex(new $0($,1)),W.setAttribute("position",new $0(Z,3));super(W,new A0({color:Q,toneMapped:!1}));this.object=J,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0)DQ.setFromObject(this.object);if(DQ.isEmpty())return;let{min:J,max:Q}=DQ,$=this.geometry.attributes.position,Z=$.array;Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=J.x,Z[4]=Q.y,Z[5]=Q.z,Z[6]=J.x,Z[7]=J.y,Z[8]=Q.z,Z[9]=Q.x,Z[10]=J.y,Z[11]=Q.z,Z[12]=Q.x,Z[13]=Q.y,Z[14]=J.z,Z[15]=J.x,Z[16]=Q.y,Z[17]=J.z,Z[18]=J.x,Z[19]=J.y,Z[20]=J.z,Z[21]=Q.x,Z[22]=J.y,Z[23]=J.z,$.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(J){return this.object=J,this.update(),this}copy(J,Q){return super.copy(J,Q),this.object=J.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class mK extends J8{constructor(J,Q=16776960){let $=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),Z=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],W=new pJ;W.setIndex(new $0($,1)),W.setAttribute("position",new VJ(Z,3));super(W,new A0({color:Q,toneMapped:!1}));this.box=J,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(J){let Q=this.box;if(Q.isEmpty())return;Q.getCenter(this.position),Q.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose()}}class uK extends F8{constructor(J,Q=1,$=16776960){let Z=$,W=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],H=new pJ;H.setAttribute("position",new VJ(W,3)),H.computeBoundingSphere();super(H,new A0({color:Z,toneMapped:!1}));this.type="PlaneHelper",this.plane=J,this.size=Q;let Y=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],X=new pJ;X.setAttribute("position",new VJ(Y,3)),X.computeBoundingSphere(),this.add(new k0(X,new p0({color:Z,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(J){this.position.set(0,0,0),this.scale.set(0.5*this.size,0.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var jY=new w,LQ,OZ;class cK extends eJ{constructor(J=new w(0,0,1),Q=new w(0,0,0),$=1,Z=16776960,W=$*0.2,H=W*0.2){super();if(this.type="ArrowHelper",LQ===void 0)LQ=new pJ,LQ.setAttribute("position",new VJ([0,0,0,0,1,0],3)),OZ=new V7(0.5,1,5,1),OZ.translate(0,-0.5,0);this.position.copy(Q),this.line=new F8(LQ,new A0({color:Z,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new k0(OZ,new p0({color:Z,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(J),this.setLength($,W,H)}setDirection(J){if(J.y>0.99999)this.quaternion.set(0,0,0,1);else if(J.y<-0.99999)this.quaternion.set(1,0,0,0);else{jY.set(J.z,0,-J.x).normalize();let Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(jY,Q)}}setLength(J,Q=J*0.2,$=Q*0.2){this.line.scale.set(1,Math.max(0.0001,J-Q),1),this.line.updateMatrix(),this.cone.scale.set($,Q,$),this.cone.position.y=J,this.cone.updateMatrix()}setColor(J){this.line.material.color.set(J),this.cone.material.color.set(J)}copy(J){return super.copy(J,!1),this.line.copy(J.line),this.cone.copy(J.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class nK extends J8{constructor(J=1){let Q=[0,0,0,J,0,0,0,0,0,0,J,0,0,0,0,0,0,J],$=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],Z=new pJ;Z.setAttribute("position",new VJ(Q,3)),Z.setAttribute("color",new VJ($,3));let W=new A0({vertexColors:!0,toneMapped:!1});super(Z,W);this.type="AxesHelper"}setColors(J,Q,$){let Z=new EJ,W=this.geometry.attributes.color.array;return Z.set(J),Z.toArray(W,0),Z.toArray(W,3),Z.set(Q),Z.toArray(W,6),Z.toArray(W,9),Z.set($),Z.toArray(W,12),Z.toArray(W,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sK{constructor(){this.type="ShapePath",this.color=new EJ,this.subPaths=[],this.currentPath=null}moveTo(J,Q){return this.currentPath=new e6,this.subPaths.push(this.currentPath),this.currentPath.moveTo(J,Q),this}lineTo(J,Q){return this.currentPath.lineTo(J,Q),this}quadraticCurveTo(J,Q,$,Z){return this.currentPath.quadraticCurveTo(J,Q,$,Z),this}bezierCurveTo(J,Q,$,Z,W,H){return this.currentPath.bezierCurveTo(J,Q,$,Z,W,H),this}splineThru(J){return this.currentPath.splineThru(J),this}toShapes(J){function Q(F){let O=[];for(let D=0,M=F.length;D<M;D++){let V=F[D],P=new Q9;P.curves=V.curves,O.push(P)}return O}function $(F,O){let D=O.length,M=!1;for(let V=D-1,P=0;P<D;V=P++){let _=O[V],I=O[P],v=I.x-_.x,z=I.y-_.y;if(Math.abs(z)>Number.EPSILON){if(z<0)_=O[P],v=-v,I=O[V],z=-z;if(F.y<_.y||F.y>I.y)continue;if(F.y===_.y){if(F.x===_.x)return!0}else{let C=z*(F.x-_.x)-v*(F.y-_.y);if(C===0)return!0;if(C<0)continue;M=!M}}else{if(F.y!==_.y)continue;if(I.x<=F.x&&F.x<=_.x||_.x<=F.x&&F.x<=I.x)return!0}}return M}let Z=N8.isClockWise,W=this.subPaths;if(W.length===0)return[];let H,Y,X,K=[];if(W.length===1)return Y=W[0],X=new Q9,X.curves=Y.curves,K.push(X),K;let U=!Z(W[0].getPoints());U=J?!U:U;let G=[],E=[],q=[],N=0,R;E[N]=void 0,q[N]=[];for(let F=0,O=W.length;F<O;F++)if(Y=W[F],R=Y.getPoints(),H=Z(R),H=J?!H:H,H){if(!U&&E[N])N++;if(E[N]={s:new Q9,p:R},E[N].s.curves=Y.curves,U)N++;q[N]=[]}else q[N].push({h:Y,p:R[0]});if(!E[0])return Q(W);if(E.length>1){let F=!1,O=0;for(let D=0,M=E.length;D<M;D++)G[D]=[];for(let D=0,M=E.length;D<M;D++){let V=q[D];for(let P=0;P<V.length;P++){let _=V[P],I=!0;for(let v=0;v<E.length;v++)if($(_.p,E[v].p)){if(D!==v)O++;if(I)I=!1,G[v].push(_);else F=!0}if(I)G[D].push(_)}}if(O>0&&F===!1)q=G}let k;for(let F=0,O=E.length;F<O;F++){X=E[F].s,K.push(X),k=q[F];for(let D=0,M=k.length;D<M;D++)X.holes.push(k[D].h)}return K}}class oK extends k8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function Qq(J,Q){let $=J.image&&J.image.width?J.image.width/J.image.height:1;if($>Q)J.repeat.x=1,J.repeat.y=$/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;else J.repeat.x=Q/$,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;return J}function $q(J,Q){let $=J.image&&J.image.width?J.image.width/J.image.height:1;if($>Q)J.repeat.x=Q/$,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;else J.repeat.x=1,J.repeat.y=$/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;return J}function Zq(J){return J.repeat.x=1,J.repeat.y=1,J.offset.x=0,J.offset.y=0,J}function C$(J,Q,$,Z){let W=Wq(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function Wq(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}class iK{static contain(J,Q){return Qq(J,Q)}static cover(J,Q){return $q(J,Q)}static fill(J){return Zq(J)}static getByteLength(J,Q,$,Z){return C$(J,Q,$,Z)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function DU(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function Hq(J){let Q=new WeakMap;function $(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let N;if(U instanceof Float32Array)N=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)N=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)N=J.HALF_FLOAT;else N=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)N=J.SHORT;else if(U instanceof Uint32Array)N=J.UNSIGNED_INT;else if(U instanceof Int32Array)N=J.INT;else if(U instanceof Int8Array)N=J.BYTE;else if(U instanceof Uint8Array)N=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)N=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:N,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function Z(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((N,R)=>N.start-R.start);let q=0;for(let N=1;N<E.length;N++){let R=E[q],k=E[N];if(k.start<=R.start+R.count+1)R.count=Math.max(R.count,k.start+k.count-R.start);else++q,E[q]=k}E.length=q+1;for(let N=0,R=E.length;N<R;N++){let k=E[N];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var Yq=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xq=`#ifdef USE_ALPHAHASH
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
#endif`,Kq=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uq=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gq=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eq=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qq=`#ifdef USE_AOMAP
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
#endif`,Nq=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oq=`#ifdef USE_BATCHING
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
#endif`,Fq=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rq=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kq=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mq=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dq=`#ifdef USE_IRIDESCENCE
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
#endif`,Lq=`#ifdef USE_BUMPMAP
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
#endif`,Vq=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cq=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_q=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pq=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tq=`#define PI 3.141592653589793
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
} // validated`,Aq=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sq=`vec3 transformedNormal = objectNormal;
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
#endif`,jq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hq="gl_FragColor = linearToOutputTexel( gl_FragColor );",bq=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xq=`#ifdef USE_ENVMAP
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
#endif`,gq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pq=`#ifdef USE_ENVMAP
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
#endif`,lq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dq=`#ifdef USE_ENVMAP
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
#endif`,mq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sq=`#ifdef USE_GRADIENTMAP
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
}`,oq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rq=`uniform bool receiveShadow;
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
#endif`,tq=`#ifdef USE_ENVMAP
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
#endif`,eq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$N=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZN=`PhysicalMaterial material;
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
#endif`,WN=`struct PhysicalMaterial {
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
}`,HN=`
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
#endif`,YN=`#if defined( RE_IndirectDiffuse )
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
#endif`,XN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ON=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FN=`#if defined( USE_POINTS_UV )
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
#endif`,RN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VN=`#ifdef USE_MORPHTARGETS
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
#endif`,zN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_N=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PN=`#ifdef USE_NORMALMAP
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
#endif`,TN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,dN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uN=`float getShadowMask() {
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
}`,cN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nN=`#ifdef USE_SKINNING
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
#endif`,sN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oN=`#ifdef USE_SKINNING
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
#endif`,iN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eN=`#ifdef USE_TRANSMISSION
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
#endif`,J5=`#ifdef USE_TRANSMISSION
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
#endif`,Q5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y5=`uniform sampler2D t2D;
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
}`,X5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E5=`#include <common>
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
}`,q5=`#if DEPTH_PACKING == 3200
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
}`,N5=`#define DISTANCE
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
}`,O5=`#define DISTANCE
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
}`,F5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k5=`uniform float scale;
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
}`,M5=`uniform vec3 diffuse;
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
}`,D5=`#include <common>
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
}`,L5=`uniform vec3 diffuse;
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
}`,V5=`#define LAMBERT
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
}`,z5=`#define LAMBERT
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
}`,B5=`#define MATCAP
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
}`,C5=`#define MATCAP
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
}`,_5=`#define NORMAL
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
}`,w5=`#define NORMAL
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
}`,I5=`#define PHONG
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
}`,P5=`#define PHONG
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
}`,T5=`#define STANDARD
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
}`,A5=`#define STANDARD
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
}`,S5=`#define TOON
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
}`,j5=`#define TOON
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
}`,v5=`uniform float size;
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
}`,y5=`uniform vec3 diffuse;
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
}`,f5=`#include <common>
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
}`,h5=`uniform vec3 color;
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
}`,b5=`uniform float rotation;
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
}`,x5=`uniform vec3 diffuse;
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
}`,oJ={alphahash_fragment:Yq,alphahash_pars_fragment:Xq,alphamap_fragment:Kq,alphamap_pars_fragment:Uq,alphatest_fragment:Gq,alphatest_pars_fragment:Eq,aomap_fragment:qq,aomap_pars_fragment:Nq,batching_pars_vertex:Oq,batching_vertex:Fq,begin_vertex:Rq,beginnormal_vertex:kq,bsdfs:Mq,iridescence_fragment:Dq,bumpmap_pars_fragment:Lq,clipping_planes_fragment:Vq,clipping_planes_pars_fragment:zq,clipping_planes_pars_vertex:Bq,clipping_planes_vertex:Cq,color_fragment:_q,color_pars_fragment:wq,color_pars_vertex:Iq,color_vertex:Pq,common:Tq,cube_uv_reflection_fragment:Aq,defaultnormal_vertex:Sq,displacementmap_pars_vertex:jq,displacementmap_vertex:vq,emissivemap_fragment:yq,emissivemap_pars_fragment:fq,colorspace_fragment:hq,colorspace_pars_fragment:bq,envmap_fragment:xq,envmap_common_pars_fragment:gq,envmap_pars_fragment:pq,envmap_pars_vertex:lq,envmap_physical_pars_fragment:tq,envmap_vertex:dq,fog_vertex:mq,fog_pars_vertex:uq,fog_fragment:cq,fog_pars_fragment:nq,gradientmap_pars_fragment:sq,lightmap_pars_fragment:oq,lights_lambert_fragment:iq,lights_lambert_pars_fragment:aq,lights_pars_begin:rq,lights_toon_fragment:eq,lights_toon_pars_fragment:JN,lights_phong_fragment:QN,lights_phong_pars_fragment:$N,lights_physical_fragment:ZN,lights_physical_pars_fragment:WN,lights_fragment_begin:HN,lights_fragment_maps:YN,lights_fragment_end:XN,logdepthbuf_fragment:KN,logdepthbuf_pars_fragment:UN,logdepthbuf_pars_vertex:GN,logdepthbuf_vertex:EN,map_fragment:qN,map_pars_fragment:NN,map_particle_fragment:ON,map_particle_pars_fragment:FN,metalnessmap_fragment:RN,metalnessmap_pars_fragment:kN,morphinstance_vertex:MN,morphcolor_vertex:DN,morphnormal_vertex:LN,morphtarget_pars_vertex:VN,morphtarget_vertex:zN,normal_fragment_begin:BN,normal_fragment_maps:CN,normal_pars_fragment:_N,normal_pars_vertex:wN,normal_vertex:IN,normalmap_pars_fragment:PN,clearcoat_normal_fragment_begin:TN,clearcoat_normal_fragment_maps:AN,clearcoat_pars_fragment:SN,iridescence_pars_fragment:jN,opaque_fragment:vN,packing:yN,premultiplied_alpha_fragment:fN,project_vertex:hN,dithering_fragment:bN,dithering_pars_fragment:xN,roughnessmap_fragment:gN,roughnessmap_pars_fragment:pN,shadowmap_pars_fragment:lN,shadowmap_pars_vertex:dN,shadowmap_vertex:mN,shadowmask_pars_fragment:uN,skinbase_vertex:cN,skinning_pars_vertex:nN,skinning_vertex:sN,skinnormal_vertex:oN,specularmap_fragment:iN,specularmap_pars_fragment:aN,tonemapping_fragment:rN,tonemapping_pars_fragment:tN,transmission_fragment:eN,transmission_pars_fragment:J5,uv_pars_fragment:Q5,uv_pars_vertex:$5,uv_vertex:Z5,worldpos_vertex:W5,background_vert:H5,background_frag:Y5,backgroundCube_vert:X5,backgroundCube_frag:K5,cube_vert:U5,cube_frag:G5,depth_vert:E5,depth_frag:q5,distanceRGBA_vert:N5,distanceRGBA_frag:O5,equirect_vert:F5,equirect_frag:R5,linedashed_vert:k5,linedashed_frag:M5,meshbasic_vert:D5,meshbasic_frag:L5,meshlambert_vert:V5,meshlambert_frag:z5,meshmatcap_vert:B5,meshmatcap_frag:C5,meshnormal_vert:_5,meshnormal_frag:w5,meshphong_vert:I5,meshphong_frag:P5,meshphysical_vert:T5,meshphysical_frag:A5,meshtoon_vert:S5,meshtoon_frag:j5,points_vert:v5,points_frag:y5,shadow_vert:f5,shadow_frag:h5,sprite_vert:b5,sprite_frag:x5},FJ={common:{diffuse:{value:new EJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mJ},alphaMap:{value:null},alphaMapTransform:{value:new mJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mJ}},envmap:{envMap:{value:null},envMapRotation:{value:new mJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mJ},normalScale:{value:new i(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new EJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new EJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mJ},alphaTest:{value:0},uvTransform:{value:new mJ}},sprite:{diffuse:{value:new EJ(16777215)},opacity:{value:1},center:{value:new i(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mJ},alphaMap:{value:null},alphaMapTransform:{value:new mJ},alphaTest:{value:0}}},T8={basic:{uniforms:f0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.fog]),vertexShader:oJ.meshbasic_vert,fragmentShader:oJ.meshbasic_frag},lambert:{uniforms:f0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,FJ.lights,{emissive:{value:new EJ(0)}}]),vertexShader:oJ.meshlambert_vert,fragmentShader:oJ.meshlambert_frag},phong:{uniforms:f0([FJ.common,FJ.specularmap,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,FJ.lights,{emissive:{value:new EJ(0)},specular:{value:new EJ(1118481)},shininess:{value:30}}]),vertexShader:oJ.meshphong_vert,fragmentShader:oJ.meshphong_frag},standard:{uniforms:f0([FJ.common,FJ.envmap,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.roughnessmap,FJ.metalnessmap,FJ.fog,FJ.lights,{emissive:{value:new EJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oJ.meshphysical_vert,fragmentShader:oJ.meshphysical_frag},toon:{uniforms:f0([FJ.common,FJ.aomap,FJ.lightmap,FJ.emissivemap,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.gradientmap,FJ.fog,FJ.lights,{emissive:{value:new EJ(0)}}]),vertexShader:oJ.meshtoon_vert,fragmentShader:oJ.meshtoon_frag},matcap:{uniforms:f0([FJ.common,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,FJ.fog,{matcap:{value:null}}]),vertexShader:oJ.meshmatcap_vert,fragmentShader:oJ.meshmatcap_frag},points:{uniforms:f0([FJ.points,FJ.fog]),vertexShader:oJ.points_vert,fragmentShader:oJ.points_frag},dashed:{uniforms:f0([FJ.common,FJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oJ.linedashed_vert,fragmentShader:oJ.linedashed_frag},depth:{uniforms:f0([FJ.common,FJ.displacementmap]),vertexShader:oJ.depth_vert,fragmentShader:oJ.depth_frag},normal:{uniforms:f0([FJ.common,FJ.bumpmap,FJ.normalmap,FJ.displacementmap,{opacity:{value:1}}]),vertexShader:oJ.meshnormal_vert,fragmentShader:oJ.meshnormal_frag},sprite:{uniforms:f0([FJ.sprite,FJ.fog]),vertexShader:oJ.sprite_vert,fragmentShader:oJ.sprite_frag},background:{uniforms:{uvTransform:{value:new mJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oJ.background_vert,fragmentShader:oJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mJ}},vertexShader:oJ.backgroundCube_vert,fragmentShader:oJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oJ.cube_vert,fragmentShader:oJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oJ.equirect_vert,fragmentShader:oJ.equirect_frag},distanceRGBA:{uniforms:f0([FJ.common,FJ.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:oJ.distanceRGBA_vert,fragmentShader:oJ.distanceRGBA_frag},shadow:{uniforms:f0([FJ.lights,FJ.fog,{color:{value:new EJ(0)},opacity:{value:1}}]),vertexShader:oJ.shadow_vert,fragmentShader:oJ.shadow_frag}};T8.physical={uniforms:f0([T8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mJ},clearcoatNormalScale:{value:new i(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mJ},sheen:{value:0},sheenColor:{value:new EJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mJ},transmissionSamplerSize:{value:new i},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mJ},attenuationDistance:{value:0},attenuationColor:{value:new EJ(0)},specularColor:{value:new EJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mJ},anisotropyVector:{value:new i},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mJ}}]),vertexShader:oJ.meshphysical_vert,fragmentShader:oJ.meshphysical_frag};var _$={r:0,b:0,g:0},l9=new r0,g5=new SJ;function p5(J,Q,$,Z,W,H,Y){let X=new EJ(0),K=H===!0?0:1,U,G,E=null,q=0,N=null;function R(M){let V=M.isScene===!0?M.background:null;if(V&&V.isTexture)V=(M.backgroundBlurriness>0?$:Q).get(V);return V}function k(M){let V=!1,P=R(M);if(P===null)O(X,K);else if(P&&P.isColor)O(P,1),V=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(_==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||V)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function F(M,V){let P=R(V);if(P&&(P.isCubeTexture||P.mapping===H7)){if(G===void 0)G=new k0(new h9(1,1,1),new Y8({name:"BackgroundCubeMaterial",uniforms:b9(T8.backgroundCube.uniforms),vertexShader:T8.backgroundCube.vertexShader,fragmentShader:T8.backgroundCube.fragmentShader,side:e0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(l9.copy(V.backgroundRotation),l9.x*=-1,l9.y*=-1,l9.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1)l9.y*=-1,l9.z*=-1;if(G.material.uniforms.envMap.value=P,G.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(g5.makeRotationFromEuler(l9)),G.material.toneMapped=aJ.getTransfer(P.colorSpace)!==E0,E!==P||q!==P.version||N!==J.toneMapping)G.material.needsUpdate=!0,E=P,q=P.version,N=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(P&&P.isTexture){if(U===void 0)U=new k0(new A6(2,2),new Y8({name:"BackgroundMaterial",uniforms:b9(T8.background.uniforms),vertexShader:T8.background.vertexShader,fragmentShader:T8.background.fragmentShader,side:Z9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=P,U.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,U.material.toneMapped=aJ.getTransfer(P.colorSpace)!==E0,P.matrixAutoUpdate===!0)P.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(P.matrix),E!==P||q!==P.version||N!==J.toneMapping)U.material.needsUpdate=!0,E=P,q=P.version,N=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}}function O(M,V){M.getRGB(_$,FW(J)),Z.buffers.color.setClear(_$.r,_$.g,_$.b,V,Y)}function D(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(M,V=1){X.set(M),K=V,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(M){K=M,O(X,K)},render:k,addToRenderList:F,dispose:D}}function l5(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=q(null),H=W,Y=!1;function X(C,S,p,d,x){let a=!1,m=E(d,p,S);if(H!==m)H=m,U(H.object);if(a=N(C,d,p,x),a)R(C,d,p,x);if(x!==null)Q.update(x,J.ELEMENT_ARRAY_BUFFER);if(a||Y){if(Y=!1,V(C,S,p,d),x!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(x).buffer)}}function K(){return J.createVertexArray()}function U(C){return J.bindVertexArray(C)}function G(C){return J.deleteVertexArray(C)}function E(C,S,p){let d=p.wireframe===!0,x=Z[C.id];if(x===void 0)x={},Z[C.id]=x;let a=x[S.id];if(a===void 0)a={},x[S.id]=a;let m=a[d];if(m===void 0)m=q(K()),a[d]=m;return m}function q(C){let S=[],p=[],d=[];for(let x=0;x<$;x++)S[x]=0,p[x]=0,d[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:p,attributeDivisors:d,object:C,attributes:{},index:null}}function N(C,S,p,d){let x=H.attributes,a=S.attributes,m=0,QJ=p.getAttributes();for(let l in QJ)if(QJ[l].location>=0){let NJ=x[l],jJ=a[l];if(jJ===void 0){if(l==="instanceMatrix"&&C.instanceMatrix)jJ=C.instanceMatrix;if(l==="instanceColor"&&C.instanceColor)jJ=C.instanceColor}if(NJ===void 0)return!0;if(NJ.attribute!==jJ)return!0;if(jJ&&NJ.data!==jJ.data)return!0;m++}if(H.attributesNum!==m)return!0;if(H.index!==d)return!0;return!1}function R(C,S,p,d){let x={},a=S.attributes,m=0,QJ=p.getAttributes();for(let l in QJ)if(QJ[l].location>=0){let NJ=a[l];if(NJ===void 0){if(l==="instanceMatrix"&&C.instanceMatrix)NJ=C.instanceMatrix;if(l==="instanceColor"&&C.instanceColor)NJ=C.instanceColor}let jJ={};if(jJ.attribute=NJ,NJ&&NJ.data)jJ.data=NJ.data;x[l]=jJ,m++}H.attributes=x,H.attributesNum=m,H.index=d}function k(){let C=H.newAttributes;for(let S=0,p=C.length;S<p;S++)C[S]=0}function F(C){O(C,0)}function O(C,S){let{newAttributes:p,enabledAttributes:d,attributeDivisors:x}=H;if(p[C]=1,d[C]===0)J.enableVertexAttribArray(C),d[C]=1;if(x[C]!==S)J.vertexAttribDivisor(C,S),x[C]=S}function D(){let{newAttributes:C,enabledAttributes:S}=H;for(let p=0,d=S.length;p<d;p++)if(S[p]!==C[p])J.disableVertexAttribArray(p),S[p]=0}function M(C,S,p,d,x,a,m){if(m===!0)J.vertexAttribIPointer(C,S,p,x,a);else J.vertexAttribPointer(C,S,p,d,x,a)}function V(C,S,p,d){k();let x=d.attributes,a=p.getAttributes(),m=S.defaultAttributeValues;for(let QJ in a){let l=a[QJ];if(l.location>=0){let qJ=x[QJ];if(qJ===void 0){if(QJ==="instanceMatrix"&&C.instanceMatrix)qJ=C.instanceMatrix;if(QJ==="instanceColor"&&C.instanceColor)qJ=C.instanceColor}if(qJ!==void 0){let{normalized:NJ,itemSize:jJ}=qJ,dJ=Q.get(qJ);if(dJ===void 0)continue;let{buffer:G0,type:J0,bytesPerElement:s}=dJ,OJ=J0===J.INT||J0===J.UNSIGNED_INT||qJ.gpuType===_Z;if(qJ.isInterleavedBufferAttribute){let KJ=qJ.data,zJ=KJ.stride,yJ=qJ.offset;if(KJ.isInstancedInterleavedBuffer){for(let xJ=0;xJ<l.locationSize;xJ++)O(l.location+xJ,KJ.meshPerAttribute);if(C.isInstancedMesh!==!0&&d._maxInstanceCount===void 0)d._maxInstanceCount=KJ.meshPerAttribute*KJ.count}else for(let xJ=0;xJ<l.locationSize;xJ++)F(l.location+xJ);J.bindBuffer(J.ARRAY_BUFFER,G0);for(let xJ=0;xJ<l.locationSize;xJ++)M(l.location+xJ,jJ/l.locationSize,J0,NJ,zJ*s,(yJ+jJ/l.locationSize*xJ)*s,OJ)}else{if(qJ.isInstancedBufferAttribute){for(let KJ=0;KJ<l.locationSize;KJ++)O(l.location+KJ,qJ.meshPerAttribute);if(C.isInstancedMesh!==!0&&d._maxInstanceCount===void 0)d._maxInstanceCount=qJ.meshPerAttribute*qJ.count}else for(let KJ=0;KJ<l.locationSize;KJ++)F(l.location+KJ);J.bindBuffer(J.ARRAY_BUFFER,G0);for(let KJ=0;KJ<l.locationSize;KJ++)M(l.location+KJ,jJ/l.locationSize,J0,NJ,jJ*s,jJ/l.locationSize*KJ*s,OJ)}}else if(m!==void 0){let NJ=m[QJ];if(NJ!==void 0)switch(NJ.length){case 2:J.vertexAttrib2fv(l.location,NJ);break;case 3:J.vertexAttrib3fv(l.location,NJ);break;case 4:J.vertexAttrib4fv(l.location,NJ);break;default:J.vertexAttrib1fv(l.location,NJ)}}}}D()}function P(){v();for(let C in Z){let S=Z[C];for(let p in S){let d=S[p];for(let x in d)G(d[x].object),delete d[x];delete S[p]}delete Z[C]}}function _(C){if(Z[C.id]===void 0)return;let S=Z[C.id];for(let p in S){let d=S[p];for(let x in d)G(d[x].object),delete d[x];delete S[p]}delete Z[C.id]}function I(C){for(let S in Z){let p=Z[S];if(p[C.id]===void 0)continue;let d=p[C.id];for(let x in d)G(d[x].object),delete d[x];delete p[C.id]}}function v(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:v,resetDefaultState:z,dispose:P,releaseStatesOfGeometry:_,releaseStatesOfProgram:I,initAttributes:k,enableAttribute:F,disableUnusedAttributes:D}}function d5(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E),$.update(G,Z,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let N=0;for(let R=0;R<E;R++)N+=G[R];$.update(N,Z,1)}function K(U,G,E,q){if(E===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let R=0;R<U.length;R++)Y(U[R],G[R],q[R]);else{N.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let R=0;for(let k=0;k<E;k++)R+=G[k]*q[k];$.update(R,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function m5(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let I=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(I){if(I!==P8&&Z.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(I){let v=I===X7&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(I!==H9&&Z.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Y9&&!v)return!1;return!0}function K(I){if(I==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),N=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),D=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=R>0,_=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:N,maxVertexTextures:R,maxTextureSize:k,maxCubemapSize:F,maxAttributes:O,maxVertexUniforms:D,maxVaryings:M,maxFragmentUniforms:V,vertexTextures:P,maxSamples:_}}function u5(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new b8,X=new mJ,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let N=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,N},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){$=G(E,q,0)},this.setState=function(E,q,N){let{clippingPlanes:R,clipIntersection:k,clipShadows:F}=E,O=J.get(E);if(!W||R===null||R.length===0||H&&!F)if(H)G(null);else U();else{let D=H?0:Z,M=D*4,V=O.clippingState||null;K.value=V,V=G(R,q,M,N);for(let P=0;P!==M;++P)V[P]=$[P];O.clippingState=V,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=D}};function U(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,q,N,R){let k=E!==null?E.length:0,F=null;if(k!==0){if(F=K.value,R!==!0||F===null){let O=N+k*4,D=q.matrixWorldInverse;if(X.getNormalMatrix(D),F===null||F.length<O)F=new Float32Array(O);for(let M=0,V=N;M!==k;++M,V+=4)Y.copy(E[M]).applyMatrix4(D,X),Y.normal.toArray(F,V),F[V+3]=Y.constant}K.value=F,K.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,F}}function c5(J){let Q=new WeakMap;function $(Y,X){if(X===SQ)Y.mapping=L6;else if(X===jQ)Y.mapping=j9;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===SQ||X===jQ)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new kW(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var j6=4,aK=[0.125,0.215,0.35,0.446,0.526,0.582],u9=20,HH=new p9,rK=new EJ,YH=null,XH=0,KH=0,UH=!1,m9=(1+Math.sqrt(5))/2,S6=1/m9,tK=[new w(-m9,S6,0),new w(m9,S6,0),new w(-S6,0,m9),new w(S6,0,m9),new w(0,m9,-S6),new w(0,m9,S6),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],n5=new w;class EH{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=n5}=W;YH=this._renderer.getRenderTarget(),XH=this._renderer.getActiveCubeFace(),KH=this._renderer.getActiveMipmapLevel(),UH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=QU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=JU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(YH,XH,KH),this._renderer.xr.enabled=UH,J.scissorTest=!1,w$(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===L6||J.mapping===j9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);YH=this._renderer.getRenderTarget(),XH=this._renderer.getActiveCubeFace(),KH=this._renderer.getActiveMipmapLevel(),UH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:R8,minFilter:R8,generateMipmaps:!1,type:X7,format:P8,colorSpace:g0,depthBuffer:!1},Z=eK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=eK(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s5(W)),this._blurMaterial=o5(W,J,Q)}return Z}_compileMaterial(J){let Q=new k0(this._lodPlanes[0],J);this._renderer.compile(Q,HH)}_sceneToCubeUV(J,Q,$,Z,W){let X=new B0(90,1,Q,$),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(rK),G.toneMapping=m8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let R=new p0({name:"PMREM.Background",side:e0,depthWrite:!1,depthTest:!1}),k=new k0(new h9,R),F=!1,O=J.background;if(O){if(O.isColor)R.color.copy(O),J.background=null,F=!0}else R.color.copy(rK),F=!0;for(let D=0;D<6;D++){let M=D%3;if(M===0)X.up.set(0,K[D],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[D],W.y,W.z);else if(M===1)X.up.set(0,0,K[D]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[D],W.z);else X.up.set(0,K[D],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[D]);let V=this._cubeSize;if(w$(Z,M*V,D>2?V:0,V,V),G.setRenderTarget(Z),F)G.render(k,X);G.render(J,X)}k.geometry.dispose(),k.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===L6||J.mapping===j9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=QU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=JU();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=new k0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;w$(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(H,HH)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=tK[(Z-W-1)%tK.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new k0(this._lodPlanes[Z],K),E=K.uniforms,q=this._sizeLods[$]-1,N=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*u9-1),R=W/N,k=isFinite(W)?1+Math.floor(U*R):u9;if(k>u9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${u9}`);let F=[],O=0;for(let _=0;_<u9;++_){let I=_/R,v=Math.exp(-I*I/2);if(F.push(v),_===0)O+=v;else if(_<k)O+=2*v}for(let _=0;_<F.length;_++)F[_]=F[_]/O;if(E.envMap.value=J.texture,E.samples.value=k,E.weights.value=F,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:D}=this;E.dTheta.value=N,E.mipInt.value=D-$;let M=this._sizeLods[Z],V=3*M*(Z>D-j6?Z-D+j6:0),P=4*(this._cubeSize-M);w$(Q,V,P,3*M,2*M),X.setRenderTarget(Q),X.render(G,HH)}}function s5(J){let Q=[],$=[],Z=[],W=J,H=J-j6+1+aK.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);$.push(X);let K=1/X;if(Y>J-j6)K=aK[Y-J+j6-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],N=6,R=6,k=3,F=2,O=1,D=new Float32Array(k*R*N),M=new Float32Array(F*R*N),V=new Float32Array(O*R*N);for(let _=0;_<N;_++){let I=_%3*2/3-1,v=_>2?0:-1,z=[I,v,0,I+0.6666666666666666,v,0,I+0.6666666666666666,v+1,0,I,v,0,I+0.6666666666666666,v+1,0,I,v+1,0];D.set(z,k*R*_),M.set(q,F*R*_);let C=[_,_,_,_,_,_];V.set(C,O*R*_)}let P=new pJ;if(P.setAttribute("position",new $0(D,k)),P.setAttribute("uv",new $0(M,F)),P.setAttribute("faceIndex",new $0(V,O)),Q.push(P),W>j6)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function eK(J,Q,$){let Z=new M8(J,Q,$);return Z.texture.mapping=H7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function w$(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function o5(J,Q,$){let Z=new Float32Array(u9),W=new w(0,1,0);return new Y8({name:"SphericalGaussianBlur",defines:{n:u9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:NH(),fragmentShader:`

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
		`,blending:W9,depthTest:!1,depthWrite:!1})}function JU(){return new Y8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:NH(),fragmentShader:`

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
		`,blending:W9,depthTest:!1,depthWrite:!1})}function QU(){return new Y8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:NH(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:W9,depthTest:!1,depthWrite:!1})}function NH(){return`

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
	`}function i5(J){let Q=new WeakMap,$=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===SQ||K===jQ,G=K===L6||K===j9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if($===null)$=new EH(J);return E=U?$.fromEquirectangular(X,E):$.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let N=X.image;if(U&&N&&N.height>0||G&&N&&W(N)){if($===null)$=new EH(J);return E=U?$.fromEquirectangular(X):$.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function a5(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)R6("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function r5(J,Q,$,Z){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let R in q.attributes)Q.remove(q.attributes[R]);q.removeEventListener("dispose",Y),delete W[q.id];let N=H.get(q);if(N)Q.remove(N),H.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,$.memory.geometries++,q}function K(E){let q=E.attributes;for(let N in q)Q.update(q[N],J.ARRAY_BUFFER)}function U(E){let q=[],N=E.index,R=E.attributes.position,k=0;if(N!==null){let D=N.array;k=N.version;for(let M=0,V=D.length;M<V;M+=3){let P=D[M+0],_=D[M+1],I=D[M+2];q.push(P,_,_,I,I,P)}}else if(R!==void 0){let D=R.array;k=R.version;for(let M=0,V=D.length/3-1;M<V;M+=3){let P=M+0,_=M+1,I=M+2;q.push(P,_,_,I,I,P)}}else return;let F=new((NW(q))?uQ:mQ)(q,1);F.version=k;let O=H.get(E);if(O)Q.remove(O);H.set(E,F)}function G(E){let q=H.get(E);if(q){let N=E.index;if(N!==null){if(q.version<N.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function t5(J,Q,$){let Z;function W(q){Z=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,N){J.drawElements(Z,N,H,q*Y),$.update(N,Z,1)}function U(q,N,R){if(R===0)return;J.drawElementsInstanced(Z,N,H,q*Y,R),$.update(N,Z,R)}function G(q,N,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,H,q,0,R);let F=0;for(let O=0;O<R;O++)F+=N[O];$.update(F,Z,1)}function E(q,N,R,k){if(R===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let O=0;O<q.length;O++)U(q[O]/Y,N[O],k[O]);else{F.multiDrawElementsInstancedWEBGL(Z,N,0,H,q,0,k,0,R);let O=0;for(let D=0;D<R;D++)O+=N[D]*k[D];$.update(O,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function e5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(H/3);break;case J.LINES:$.lines+=X*(H/2);break;case J.LINE_STRIP:$.lines+=X*(H-1);break;case J.LINE_LOOP:$.lines+=X*H;break;case J.POINTS:$.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function JO(J,Q,$){let Z=new WeakMap,W=new Z0;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(X);if(q===void 0||q.count!==E){let z=function(){I.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let N=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,k=X.morphAttributes.color!==void 0,F=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],D=X.morphAttributes.color||[],M=0;if(N===!0)M=1;if(R===!0)M=2;if(k===!0)M=3;let V=X.attributes.position.count*M,P=1;if(V>Q.maxTextureSize)P=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let _=new Float32Array(V*P*4*E),I=new G7(_,V,P,E);I.type=Y9,I.needsUpdate=!0;let v=M*4;for(let C=0;C<E;C++){let S=F[C],p=O[C],d=D[C],x=V*P*4*C;for(let a=0;a<S.count;a++){let m=a*v;if(N===!0)W.fromBufferAttribute(S,a),_[x+m+0]=W.x,_[x+m+1]=W.y,_[x+m+2]=W.z,_[x+m+3]=0;if(R===!0)W.fromBufferAttribute(p,a),_[x+m+4]=W.x,_[x+m+5]=W.y,_[x+m+6]=W.z,_[x+m+7]=0;if(k===!0)W.fromBufferAttribute(d,a),_[x+m+8]=W.x,_[x+m+9]=W.y,_[x+m+10]=W.z,_[x+m+11]=d.itemSize===4?W.w:1}}q={count:E,texture:I,size:new i(V,P)},Z.set(X,q),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let N=0;for(let k=0;k<U.length;k++)N+=U[k];let R=X.morphTargetsRelative?1:1-N;K.getUniforms().setValue(J,"morphTargetBaseInfluence",R),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function QO(J,Q,$,Z){let W=new WeakMap;function H(K){let U=Z.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var LU=new N0,$U=new iQ(1,1),VU=new G7,zU=new E7,BU=new w6,ZU=[],WU=[],HU=new Float32Array(16),YU=new Float32Array(9),XU=new Float32Array(4);function v6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=ZU[W];if(H===void 0)H=new Float32Array(W),ZU[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(H,X)}return H}function w0(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function I0(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function P$(J,Q){let $=WU[Q];if($===void 0)$=new Int32Array(Q),WU[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function $O(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function ZO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(w0($,Q))return;J.uniform2fv(this.addr,Q),I0($,Q)}}function WO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(w0($,Q))return;J.uniform3fv(this.addr,Q),I0($,Q)}}function HO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(w0($,Q))return;J.uniform4fv(this.addr,Q),I0($,Q)}}function YO(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(w0($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),I0($,Q)}else{if(w0($,Z))return;XU.set(Z),J.uniformMatrix2fv(this.addr,!1,XU),I0($,Z)}}function XO(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(w0($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),I0($,Q)}else{if(w0($,Z))return;YU.set(Z),J.uniformMatrix3fv(this.addr,!1,YU),I0($,Z)}}function KO(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(w0($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),I0($,Q)}else{if(w0($,Z))return;HU.set(Z),J.uniformMatrix4fv(this.addr,!1,HU),I0($,Z)}}function UO(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function GO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(w0($,Q))return;J.uniform2iv(this.addr,Q),I0($,Q)}}function EO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(w0($,Q))return;J.uniform3iv(this.addr,Q),I0($,Q)}}function qO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(w0($,Q))return;J.uniform4iv(this.addr,Q),I0($,Q)}}function NO(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function OO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(w0($,Q))return;J.uniform2uiv(this.addr,Q),I0($,Q)}}function FO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(w0($,Q))return;J.uniform3uiv(this.addr,Q),I0($,Q)}}function RO(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(w0($,Q))return;J.uniform4uiv(this.addr,Q),I0($,Q)}}function kO(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)$U.compareFunction=KW,H=$U;else H=LU;$.setTexture2D(Q||H,W)}function MO(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||zU,W)}function DO(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||BU,W)}function LO(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||VU,W)}function VO(J){switch(J){case 5126:return $O;case 35664:return ZO;case 35665:return WO;case 35666:return HO;case 35674:return YO;case 35675:return XO;case 35676:return KO;case 5124:case 35670:return UO;case 35667:case 35671:return GO;case 35668:case 35672:return EO;case 35669:case 35673:return qO;case 5125:return NO;case 36294:return OO;case 36295:return FO;case 36296:return RO;case 35678:case 36198:case 36298:case 36306:case 35682:return kO;case 35679:case 36299:case 36307:return MO;case 35680:case 36300:case 36308:case 36293:return DO;case 36289:case 36303:case 36311:case 36292:return LO}}function zO(J,Q){J.uniform1fv(this.addr,Q)}function BO(J,Q){let $=v6(Q,this.size,2);J.uniform2fv(this.addr,$)}function CO(J,Q){let $=v6(Q,this.size,3);J.uniform3fv(this.addr,$)}function _O(J,Q){let $=v6(Q,this.size,4);J.uniform4fv(this.addr,$)}function wO(J,Q){let $=v6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function IO(J,Q){let $=v6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function PO(J,Q){let $=v6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function TO(J,Q){J.uniform1iv(this.addr,Q)}function AO(J,Q){J.uniform2iv(this.addr,Q)}function SO(J,Q){J.uniform3iv(this.addr,Q)}function jO(J,Q){J.uniform4iv(this.addr,Q)}function vO(J,Q){J.uniform1uiv(this.addr,Q)}function yO(J,Q){J.uniform2uiv(this.addr,Q)}function fO(J,Q){J.uniform3uiv(this.addr,Q)}function hO(J,Q){J.uniform4uiv(this.addr,Q)}function bO(J,Q,$){let Z=this.cache,W=Q.length,H=P$($,W);if(!w0(Z,H))J.uniform1iv(this.addr,H),I0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||LU,H[Y])}function xO(J,Q,$){let Z=this.cache,W=Q.length,H=P$($,W);if(!w0(Z,H))J.uniform1iv(this.addr,H),I0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||zU,H[Y])}function gO(J,Q,$){let Z=this.cache,W=Q.length,H=P$($,W);if(!w0(Z,H))J.uniform1iv(this.addr,H),I0(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||BU,H[Y])}function pO(J,Q,$){let Z=this.cache,W=Q.length,H=P$($,W);if(!w0(Z,H))J.uniform1iv(this.addr,H),I0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||VU,H[Y])}function lO(J){switch(J){case 5126:return zO;case 35664:return BO;case 35665:return CO;case 35666:return _O;case 35674:return wO;case 35675:return IO;case 35676:return PO;case 5124:case 35670:return TO;case 35667:case 35671:return AO;case 35668:case 35672:return SO;case 35669:case 35673:return jO;case 5125:return vO;case 36294:return yO;case 36295:return fO;case 36296:return hO;case 35678:case 36198:case 36298:case 36306:case 35682:return bO;case 35679:case 36299:case 36307:return xO;case 35680:case 36300:case 36308:case 36293:return gO;case 36289:case 36303:case 36311:case 36292:return pO}}class CU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=VO(Q.type)}}class _U{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=lO(Q.type)}}class wU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var GH=/(\w+)(\])?(\[|\.)?/g;function KU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function dO(J,Q,$){let Z=J.name,W=Z.length;GH.lastIndex=0;while(!0){let H=GH.exec(Z),Y=GH.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){KU($,U===void 0?new CU(X,J,Q):new _U(X,J,Q));break}else{let E=$.map[X];if(E===void 0)E=new wU(X),KU($,E);$=E}}}class T7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),H=J.getUniformLocation(Q,W.name);dO(W,H,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function UU(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var mO=37297,uO=0;function cO(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var GU=new mJ;function nO(J){aJ._getMatrix(GU,aJ.workingColorSpace,J);let Q=`mat3( ${GU.elements.map(($)=>$.toFixed(4))} )`;switch(aJ.getTransfer(J)){case XW:return[Q,"LinearTransferOETF"];case E0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function EU(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+cO(J.getShaderSource(Q),X)}else return H}function sO(J,Q){let $=nO(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function oO(J,Q){let $;switch(Q){case YX:$="Linear";break;case XX:$="Reinhard";break;case KX:$="Cineon";break;case UX:$="ACESFilmic";break;case EX:$="AgX";break;case qX:$="Neutral";break;case GX:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var I$=new w;function iO(){aJ.getLuminanceCoefficients(I$);let J=I$.x.toFixed(4),Q=I$.y.toFixed(4),$=I$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function aO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(P7).join(`
`)}function rO(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function tO(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function P7(J){return J!==""}function qU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function NU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var eO=/^[ \t]*#include +<([\w\d./]+)>/gm;function qH(J){return J.replace(eO,QF)}var JF=new Map;function QF(J,Q){let $=oJ[Q];if($===void 0){let Z=JF.get(Q);if(Z!==void 0)$=oJ[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return qH($)}var $F=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function OU(J){return J.replace($F,ZF)}function ZF(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function FU(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function WF(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===VZ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===hY)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===I8)Q="SHADOWMAP_TYPE_VSM";return Q}function HF(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case L6:case j9:Q="ENVMAP_TYPE_CUBE";break;case H7:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function YF(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case j9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function XF(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case ZX:Q="ENVMAP_BLENDING_MULTIPLY";break;case WX:Q="ENVMAP_BLENDING_MIX";break;case HX:Q="ENVMAP_BLENDING_ADD";break}return Q}function KF(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function UF(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,X=$.fragmentShader,K=WF($),U=HF($),G=YF($),E=XF($),q=KF($),N=aO($),R=rO(H),k=W.createProgram(),F,O,D=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(P7).join(`
`),F.length>0)F+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(P7).join(`
`),O.length>0)O+=`
`}else F=[FU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(P7).join(`
`),O=[FU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==m8?"#define TONE_MAPPING":"",$.toneMapping!==m8?oJ.tonemapping_pars_fragment:"",$.toneMapping!==m8?oO("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",oJ.colorspace_pars_fragment,sO("linearToOutputTexel",$.outputColorSpace),iO(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(P7).join(`
`);if(Y=qH(Y),Y=qU(Y,$),Y=NU(Y,$),X=qH(X),X=qU(X,$),X=NU(X,$),Y=OU(Y),X=OU(X),$.isRawShaderMaterial!==!0)D=`#version 300 es
`,F=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,O=["#define varying in",$.glslVersion===UW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===UW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let M=D+F+Y,V=D+O+X,P=UU(W,W.VERTEX_SHADER,M),_=UU(W,W.FRAGMENT_SHADER,V);if(W.attachShader(k,P),W.attachShader(k,_),$.index0AttributeName!==void 0)W.bindAttribLocation(k,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function I(S){if(J.debug.checkShaderErrors){let p=W.getProgramInfoLog(k)||"",d=W.getShaderInfoLog(P)||"",x=W.getShaderInfoLog(_)||"",a=p.trim(),m=d.trim(),QJ=x.trim(),l=!0,qJ=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(l=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,P,_);else{let NJ=EU(W,P,"vertex"),jJ=EU(W,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+a+`
`+NJ+`
`+jJ)}else if(a!=="")console.warn("THREE.WebGLProgram: Program Info Log:",a);else if(m===""||QJ==="")qJ=!1;if(qJ)S.diagnostics={runnable:l,programLog:a,vertexShader:{log:m,prefix:F},fragmentShader:{log:QJ,prefix:O}}}W.deleteShader(P),W.deleteShader(_),v=new T7(W,k),z=tO(W,k)}let v;this.getUniforms=function(){if(v===void 0)I(this);return v};let z;this.getAttributes=function(){if(z===void 0)I(this);return z};let C=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=W.getProgramParameter(k,mO);return C},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=uO++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=P,this.fragmentShader=_,this}var GF=0;class IU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new PU(J),Q.set(J,$);return $}}class PU{constructor(J){this.id=GF++,this.code=J,this.usedTimes=0}}function EF(J,Q,$,Z,W,H,Y){let X=new q7,K=new IU,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,N=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function F(z,C,S,p,d){let x=p.fog,a=d.geometry,m=z.isMeshStandardMaterial?p.environment:null,QJ=(z.isMeshStandardMaterial?$:Q).get(z.envMap||m),l=!!QJ&&QJ.mapping===H7?QJ.image.height:null,qJ=R[z.type];if(z.precision!==null){if(N=W.getMaxPrecision(z.precision),N!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",N,"instead.")}let NJ=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,jJ=NJ!==void 0?NJ.length:0,dJ=0;if(a.morphAttributes.position!==void 0)dJ=1;if(a.morphAttributes.normal!==void 0)dJ=2;if(a.morphAttributes.color!==void 0)dJ=3;let G0,J0,s,OJ;if(qJ){let Y0=T8[qJ];G0=Y0.vertexShader,J0=Y0.fragmentShader}else G0=z.vertexShader,J0=z.fragmentShader,K.update(z),s=K.getVertexShaderID(z),OJ=K.getFragmentShaderID(z);let KJ=J.getRenderTarget(),zJ=J.state.buffers.depth.getReversed(),yJ=d.isInstancedMesh===!0,xJ=d.isBatchedMesh===!0,H0=!!z.map,A=!!z.matcap,e=!!QJ,r=!!z.aoMap,o=!!z.lightMap,n=!!z.bumpMap,UJ=!!z.normalMap,YJ=!!z.displacementMap,ZJ=!!z.emissiveMap,uJ=!!z.metalnessMap,cJ=!!z.roughnessMap,sJ=z.anisotropy>0,T=z.clearcoat>0,L=z.dispersion>0,y=z.iridescence>0,c=z.sheen>0,JJ=z.transmission>0,u=sJ&&!!z.anisotropyMap,LJ=T&&!!z.clearcoatMap,XJ=T&&!!z.clearcoatNormalMap,_J=T&&!!z.clearcoatRoughnessMap,fJ=y&&!!z.iridescenceMap,HJ=y&&!!z.iridescenceThicknessMap,MJ=c&&!!z.sheenColorMap,PJ=c&&!!z.sheenRoughnessMap,TJ=!!z.specularMap,DJ=!!z.specularColorMap,iJ=!!z.specularIntensityMap,j=JJ&&!!z.transmissionMap,RJ=JJ&&!!z.thicknessMap,GJ=!!z.gradientMap,CJ=!!z.alphaMap,$J=z.alphaTest>0,t=!!z.alphaHash,IJ=!!z.extensions,lJ=m8;if(z.toneMapped){if(KJ===null||KJ.isXRRenderTarget===!0)lJ=J.toneMapping}let K0={shaderID:qJ,shaderType:z.type,shaderName:z.name,vertexShader:G0,fragmentShader:J0,defines:z.defines,customVertexShaderID:s,customFragmentShaderID:OJ,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:N,batching:xJ,batchingColor:xJ&&d._colorsTexture!==null,instancing:yJ,instancingColor:yJ&&d.instanceColor!==null,instancingMorph:yJ&&d.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:KJ===null?J.outputColorSpace:KJ.isXRRenderTarget===!0?KJ.texture.colorSpace:g0,alphaToCoverage:!!z.alphaToCoverage,map:H0,matcap:A,envMap:e,envMapMode:e&&QJ.mapping,envMapCubeUVHeight:l,aoMap:r,lightMap:o,bumpMap:n,normalMap:UJ,displacementMap:q&&YJ,emissiveMap:ZJ,normalMapObjectSpace:UJ&&z.normalMapType===BX,normalMapTangentSpace:UJ&&z.normalMapType===zX,metalnessMap:uJ,roughnessMap:cJ,anisotropy:sJ,anisotropyMap:u,clearcoat:T,clearcoatMap:LJ,clearcoatNormalMap:XJ,clearcoatRoughnessMap:_J,dispersion:L,iridescence:y,iridescenceMap:fJ,iridescenceThicknessMap:HJ,sheen:c,sheenColorMap:MJ,sheenRoughnessMap:PJ,specularMap:TJ,specularColorMap:DJ,specularIntensityMap:iJ,transmission:JJ,transmissionMap:j,thicknessMap:RJ,gradientMap:GJ,opaque:z.transparent===!1&&z.blending===Z7&&z.alphaToCoverage===!1,alphaMap:CJ,alphaTest:$J,alphaHash:t,combine:z.combine,mapUv:H0&&k(z.map.channel),aoMapUv:r&&k(z.aoMap.channel),lightMapUv:o&&k(z.lightMap.channel),bumpMapUv:n&&k(z.bumpMap.channel),normalMapUv:UJ&&k(z.normalMap.channel),displacementMapUv:YJ&&k(z.displacementMap.channel),emissiveMapUv:ZJ&&k(z.emissiveMap.channel),metalnessMapUv:uJ&&k(z.metalnessMap.channel),roughnessMapUv:cJ&&k(z.roughnessMap.channel),anisotropyMapUv:u&&k(z.anisotropyMap.channel),clearcoatMapUv:LJ&&k(z.clearcoatMap.channel),clearcoatNormalMapUv:XJ&&k(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_J&&k(z.clearcoatRoughnessMap.channel),iridescenceMapUv:fJ&&k(z.iridescenceMap.channel),iridescenceThicknessMapUv:HJ&&k(z.iridescenceThicknessMap.channel),sheenColorMapUv:MJ&&k(z.sheenColorMap.channel),sheenRoughnessMapUv:PJ&&k(z.sheenRoughnessMap.channel),specularMapUv:TJ&&k(z.specularMap.channel),specularColorMapUv:DJ&&k(z.specularColorMap.channel),specularIntensityMapUv:iJ&&k(z.specularIntensityMap.channel),transmissionMapUv:j&&k(z.transmissionMap.channel),thicknessMapUv:RJ&&k(z.thicknessMap.channel),alphaMapUv:CJ&&k(z.alphaMap.channel),vertexTangents:!!a.attributes.tangent&&(UJ||sJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!a.attributes.color&&a.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!a.attributes.uv&&(H0||CJ),fog:!!x,useFog:z.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:zJ,skinning:d.isSkinnedMesh===!0,morphTargets:a.morphAttributes.position!==void 0,morphNormals:a.morphAttributes.normal!==void 0,morphColors:a.morphAttributes.color!==void 0,morphTargetsCount:jJ,morphTextureStride:dJ,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:lJ,decodeVideoTexture:H0&&z.map.isVideoTexture===!0&&aJ.getTransfer(z.map.colorSpace)===E0,decodeVideoTextureEmissive:ZJ&&z.emissiveMap.isVideoTexture===!0&&aJ.getTransfer(z.emissiveMap.colorSpace)===E0,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===H8,flipSided:z.side===e0,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:IJ&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(IJ&&z.extensions.multiDraw===!0||xJ)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return K0.vertexUv1s=U.has(1),K0.vertexUv2s=U.has(2),K0.vertexUv3s=U.has(3),U.clear(),K0}function O(z){let C=[];if(z.shaderID)C.push(z.shaderID);else C.push(z.customVertexShaderID),C.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let S in z.defines)C.push(S),C.push(z.defines[S]);if(z.isRawShaderMaterial===!1)D(C,z),M(C,z),C.push(J.outputColorSpace);return C.push(z.customProgramCacheKey),C.join()}function D(z,C){z.push(C.precision),z.push(C.outputColorSpace),z.push(C.envMapMode),z.push(C.envMapCubeUVHeight),z.push(C.mapUv),z.push(C.alphaMapUv),z.push(C.lightMapUv),z.push(C.aoMapUv),z.push(C.bumpMapUv),z.push(C.normalMapUv),z.push(C.displacementMapUv),z.push(C.emissiveMapUv),z.push(C.metalnessMapUv),z.push(C.roughnessMapUv),z.push(C.anisotropyMapUv),z.push(C.clearcoatMapUv),z.push(C.clearcoatNormalMapUv),z.push(C.clearcoatRoughnessMapUv),z.push(C.iridescenceMapUv),z.push(C.iridescenceThicknessMapUv),z.push(C.sheenColorMapUv),z.push(C.sheenRoughnessMapUv),z.push(C.specularMapUv),z.push(C.specularColorMapUv),z.push(C.specularIntensityMapUv),z.push(C.transmissionMapUv),z.push(C.thicknessMapUv),z.push(C.combine),z.push(C.fogExp2),z.push(C.sizeAttenuation),z.push(C.morphTargetsCount),z.push(C.morphAttributeCount),z.push(C.numDirLights),z.push(C.numPointLights),z.push(C.numSpotLights),z.push(C.numSpotLightMaps),z.push(C.numHemiLights),z.push(C.numRectAreaLights),z.push(C.numDirLightShadows),z.push(C.numPointLightShadows),z.push(C.numSpotLightShadows),z.push(C.numSpotLightShadowsWithMaps),z.push(C.numLightProbes),z.push(C.shadowMapType),z.push(C.toneMapping),z.push(C.numClippingPlanes),z.push(C.numClipIntersection),z.push(C.depthPacking)}function M(z,C){if(X.disableAll(),C.supportsVertexTextures)X.enable(0);if(C.instancing)X.enable(1);if(C.instancingColor)X.enable(2);if(C.instancingMorph)X.enable(3);if(C.matcap)X.enable(4);if(C.envMap)X.enable(5);if(C.normalMapObjectSpace)X.enable(6);if(C.normalMapTangentSpace)X.enable(7);if(C.clearcoat)X.enable(8);if(C.iridescence)X.enable(9);if(C.alphaTest)X.enable(10);if(C.vertexColors)X.enable(11);if(C.vertexAlphas)X.enable(12);if(C.vertexUv1s)X.enable(13);if(C.vertexUv2s)X.enable(14);if(C.vertexUv3s)X.enable(15);if(C.vertexTangents)X.enable(16);if(C.anisotropy)X.enable(17);if(C.alphaHash)X.enable(18);if(C.batching)X.enable(19);if(C.dispersion)X.enable(20);if(C.batchingColor)X.enable(21);if(C.gradientMap)X.enable(22);if(z.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reversedDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);z.push(X.mask)}function V(z){let C=R[z.type],S;if(C){let p=T8[C];S=mX.clone(p.uniforms)}else S=z.uniforms;return S}function P(z,C){let S;for(let p=0,d=G.length;p<d;p++){let x=G[p];if(x.cacheKey===C){S=x,++S.usedTimes;break}}if(S===void 0)S=new UF(J,C,z,H),G.push(S);return S}function _(z){if(--z.usedTimes===0){let C=G.indexOf(z);G[C]=G[G.length-1],G.pop(),z.destroy()}}function I(z){K.remove(z)}function v(){K.dispose()}return{getParameters:F,getProgramCacheKey:O,getUniforms:V,acquireProgram:P,releaseProgram:_,releaseShaderCache:I,programs:G,dispose:v}}function qF(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function NF(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function RU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function kU(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(E,q,N,R,k,F){let O=J[Q];if(O===void 0)O={id:E.id,object:E,geometry:q,material:N,groupOrder:R,renderOrder:E.renderOrder,z:k,group:F},J[Q]=O;else O.id=E.id,O.object=E,O.geometry=q,O.material=N,O.groupOrder=R,O.renderOrder=E.renderOrder,O.z=k,O.group=F;return Q++,O}function X(E,q,N,R,k,F){let O=Y(E,q,N,R,k,F);if(N.transmission>0)Z.push(O);else if(N.transparent===!0)W.push(O);else $.push(O)}function K(E,q,N,R,k,F){let O=Y(E,q,N,R,k,F);if(N.transmission>0)Z.unshift(O);else if(N.transparent===!0)W.unshift(O);else $.unshift(O)}function U(E,q){if($.length>1)$.sort(E||NF);if(Z.length>1)Z.sort(q||RU);if(W.length>1)W.sort(q||RU)}function G(){for(let E=Q,q=J.length;E<q;E++){let N=J[E];if(N.id===null)break;N.id=null,N.object=null,N.geometry=null,N.material=null,N.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function OF(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new kU,J.set(Z,[Y]);else if(W>=H.length)Y=new kU,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function FF(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new w,color:new EJ};break;case"SpotLight":$={position:new w,direction:new w,color:new EJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new w,color:new EJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new w,skyColor:new EJ,groundColor:new EJ};break;case"RectAreaLight":$={color:new EJ,position:new w,halfWidth:new w,halfHeight:new w};break}return J[Q.id]=$,$}}}function RF(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var kF=0;function MF(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function DF(J){let Q=new FF,$=RF(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new w);let W=new w,H=new SJ,Y=new SJ;function X(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let N=0,R=0,k=0,F=0,O=0,D=0,M=0,V=0,P=0,_=0,I=0;U.sort(MF);for(let z=0,C=U.length;z<C;z++){let S=U[z],p=S.color,d=S.intensity,x=S.distance,a=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)G+=p.r*d,E+=p.g*d,q+=p.b*d;else if(S.isLightProbe){for(let m=0;m<9;m++)Z.probe[m].addScaledVector(S.sh.coefficients[m],d);I++}else if(S.isDirectionalLight){let m=Q.get(S);if(m.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let QJ=S.shadow,l=$.get(S);l.shadowIntensity=QJ.intensity,l.shadowBias=QJ.bias,l.shadowNormalBias=QJ.normalBias,l.shadowRadius=QJ.radius,l.shadowMapSize=QJ.mapSize,Z.directionalShadow[N]=l,Z.directionalShadowMap[N]=a,Z.directionalShadowMatrix[N]=S.shadow.matrix,D++}Z.directional[N]=m,N++}else if(S.isSpotLight){let m=Q.get(S);m.position.setFromMatrixPosition(S.matrixWorld),m.color.copy(p).multiplyScalar(d),m.distance=x,m.coneCos=Math.cos(S.angle),m.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),m.decay=S.decay,Z.spot[k]=m;let QJ=S.shadow;if(S.map){if(Z.spotLightMap[P]=S.map,P++,QJ.updateMatrices(S),S.castShadow)_++}if(Z.spotLightMatrix[k]=QJ.matrix,S.castShadow){let l=$.get(S);l.shadowIntensity=QJ.intensity,l.shadowBias=QJ.bias,l.shadowNormalBias=QJ.normalBias,l.shadowRadius=QJ.radius,l.shadowMapSize=QJ.mapSize,Z.spotShadow[k]=l,Z.spotShadowMap[k]=a,V++}k++}else if(S.isRectAreaLight){let m=Q.get(S);m.color.copy(p).multiplyScalar(d),m.halfWidth.set(S.width*0.5,0,0),m.halfHeight.set(0,S.height*0.5,0),Z.rectArea[F]=m,F++}else if(S.isPointLight){let m=Q.get(S);if(m.color.copy(S.color).multiplyScalar(S.intensity),m.distance=S.distance,m.decay=S.decay,S.castShadow){let QJ=S.shadow,l=$.get(S);l.shadowIntensity=QJ.intensity,l.shadowBias=QJ.bias,l.shadowNormalBias=QJ.normalBias,l.shadowRadius=QJ.radius,l.shadowMapSize=QJ.mapSize,l.shadowCameraNear=QJ.camera.near,l.shadowCameraFar=QJ.camera.far,Z.pointShadow[R]=l,Z.pointShadowMap[R]=a,Z.pointShadowMatrix[R]=S.shadow.matrix,M++}Z.point[R]=m,R++}else if(S.isHemisphereLight){let m=Q.get(S);m.skyColor.copy(S.color).multiplyScalar(d),m.groundColor.copy(S.groundColor).multiplyScalar(d),Z.hemi[O]=m,O++}}if(F>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=FJ.LTC_FLOAT_1,Z.rectAreaLTC2=FJ.LTC_FLOAT_2;else Z.rectAreaLTC1=FJ.LTC_HALF_1,Z.rectAreaLTC2=FJ.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let v=Z.hash;if(v.directionalLength!==N||v.pointLength!==R||v.spotLength!==k||v.rectAreaLength!==F||v.hemiLength!==O||v.numDirectionalShadows!==D||v.numPointShadows!==M||v.numSpotShadows!==V||v.numSpotMaps!==P||v.numLightProbes!==I)Z.directional.length=N,Z.spot.length=k,Z.rectArea.length=F,Z.point.length=R,Z.hemi.length=O,Z.directionalShadow.length=D,Z.directionalShadowMap.length=D,Z.pointShadow.length=M,Z.pointShadowMap.length=M,Z.spotShadow.length=V,Z.spotShadowMap.length=V,Z.directionalShadowMatrix.length=D,Z.pointShadowMatrix.length=M,Z.spotLightMatrix.length=V+P-_,Z.spotLightMap.length=P,Z.numSpotLightShadowsWithMaps=_,Z.numLightProbes=I,v.directionalLength=N,v.pointLength=R,v.spotLength=k,v.rectAreaLength=F,v.hemiLength=O,v.numDirectionalShadows=D,v.numPointShadows=M,v.numSpotShadows=V,v.numSpotMaps=P,v.numLightProbes=I,Z.version=kF++}function K(U,G){let E=0,q=0,N=0,R=0,k=0,F=G.matrixWorldInverse;for(let O=0,D=U.length;O<D;O++){let M=U[O];if(M.isDirectionalLight){let V=Z.directional[E];V.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(F),E++}else if(M.isSpotLight){let V=Z.spot[N];V.position.setFromMatrixPosition(M.matrixWorld),V.position.applyMatrix4(F),V.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),V.direction.sub(W),V.direction.transformDirection(F),N++}else if(M.isRectAreaLight){let V=Z.rectArea[R];V.position.setFromMatrixPosition(M.matrixWorld),V.position.applyMatrix4(F),Y.identity(),H.copy(M.matrixWorld),H.premultiply(F),Y.extractRotation(H),V.halfWidth.set(M.width*0.5,0,0),V.halfHeight.set(0,M.height*0.5,0),V.halfWidth.applyMatrix4(Y),V.halfHeight.applyMatrix4(Y),R++}else if(M.isPointLight){let V=Z.point[q];V.position.setFromMatrixPosition(M.matrixWorld),V.position.applyMatrix4(F),q++}else if(M.isHemisphereLight){let V=Z.hemi[k];V.direction.setFromMatrixPosition(M.matrixWorld),V.direction.transformDirection(F),k++}}}return{setup:X,setupView:K,state:Z}}function MU(J){let Q=new DF(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(){Q.setup($)}function K(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function LF(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new MU(J),Q.set(W,[X]);else if(H>=Y.length)X=new MU(J),Y.push(X);else X=Y[H];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var VF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zF=`uniform sampler2D shadow_pass;
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
}`;function BF(J,Q,$){let Z=new x9,W=new i,H=new i,Y=new Z0,X=new O$({depthPacking:VX}),K=new F$,U={},G=$.maxTextureSize,E={[Z9]:e0,[e0]:Z9,[H8]:H8},q=new Y8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i},radius:{value:4}},vertexShader:VF,fragmentShader:zF}),N=q.clone();N.defines.HORIZONTAL_PASS=1;let R=new pJ;R.setAttribute("position",new $0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new k0(R,q),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=VZ;let O=this.type;this.render=function(_,I,v){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(_.length===0)return;let z=J.getRenderTarget(),C=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(W9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let d=O!==I8&&this.type===I8,x=O===I8&&this.type!==I8;for(let a=0,m=_.length;a<m;a++){let QJ=_[a],l=QJ.shadow;if(l===void 0){console.warn("THREE.WebGLShadowMap:",QJ,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;W.copy(l.mapSize);let qJ=l.getFrameExtents();if(W.multiply(qJ),H.copy(l.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/qJ.x),W.x=H.x*qJ.x,l.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/qJ.y),W.y=H.y*qJ.y,l.mapSize.y=H.y}if(l.map===null||d===!0||x===!0){let jJ=this.type!==I8?{minFilter:u8,magFilter:u8}:{};if(l.map!==null)l.map.dispose();l.map=new M8(W.x,W.y,jJ),l.map.texture.name=QJ.name+".shadowMap",l.camera.updateProjectionMatrix()}J.setRenderTarget(l.map),J.clear();let NJ=l.getViewportCount();for(let jJ=0;jJ<NJ;jJ++){let dJ=l.getViewport(jJ);Y.set(H.x*dJ.x,H.y*dJ.y,H.x*dJ.z,H.y*dJ.w),p.viewport(Y),l.updateMatrices(QJ,jJ),Z=l.getFrustum(),V(I,v,l.camera,QJ,this.type)}if(l.isPointLightShadow!==!0&&this.type===I8)D(l,v);l.needsUpdate=!1}O=this.type,F.needsUpdate=!1,J.setRenderTarget(z,C,S)};function D(_,I){let v=Q.update(k);if(q.defines.VSM_SAMPLES!==_.blurSamples)q.defines.VSM_SAMPLES=_.blurSamples,N.defines.VSM_SAMPLES=_.blurSamples,q.needsUpdate=!0,N.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new M8(W.x,W.y);q.uniforms.shadow_pass.value=_.map.texture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(I,null,v,q,k,null),N.uniforms.shadow_pass.value=_.mapPass.texture,N.uniforms.resolution.value=_.mapSize,N.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(I,null,v,N,k,null)}function M(_,I,v,z){let C=null,S=v.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(S!==void 0)C=S;else if(C=v.isPointLight===!0?K:X,J.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let p=C.uuid,d=I.uuid,x=U[p];if(x===void 0)x={},U[p]=x;let a=x[d];if(a===void 0)a=C.clone(),x[d]=a,I.addEventListener("dispose",P);C=a}if(C.visible=I.visible,C.wireframe=I.wireframe,z===I8)C.side=I.shadowSide!==null?I.shadowSide:I.side;else C.side=I.shadowSide!==null?I.shadowSide:E[I.side];if(C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let p=J.properties.get(C);p.light=v}return C}function V(_,I,v,z,C){if(_.visible===!1)return;if(_.layers.test(I.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&C===I8)&&(!_.frustumCulled||Z.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,_.matrixWorld);let d=Q.update(_),x=_.material;if(Array.isArray(x)){let a=d.groups;for(let m=0,QJ=a.length;m<QJ;m++){let l=a[m],qJ=x[l.materialIndex];if(qJ&&qJ.visible){let NJ=M(_,qJ,z,C);_.onBeforeShadow(J,_,I,v,d,NJ,l),J.renderBufferDirect(v,null,d,NJ,_,l),_.onAfterShadow(J,_,I,v,d,NJ,l)}}}else if(x.visible){let a=M(_,x,z,C);_.onBeforeShadow(J,_,I,v,d,a,null),J.renderBufferDirect(v,null,d,a,_,null),_.onAfterShadow(J,_,I,v,d,a,null)}}}let p=_.children;for(let d=0,x=p.length;d<x;d++)V(p[d],I,v,z,C)}function P(_){_.target.removeEventListener("dispose",P);for(let v in U){let z=U[v],C=_.target.uuid;if(C in z)z[C].dispose(),delete z[C]}}}var CF={[CQ]:_Q,[wQ]:TQ,[IQ]:AQ,[W7]:PQ,[_Q]:CQ,[TQ]:wQ,[AQ]:IQ,[PQ]:W7};function _F(J,Q){function $(){let j=!1,RJ=new Z0,GJ=null,CJ=new Z0(0,0,0,0);return{setMask:function($J){if(GJ!==$J&&!j)J.colorMask($J,$J,$J,$J),GJ=$J},setLocked:function($J){j=$J},setClear:function($J,t,IJ,lJ,K0){if(K0===!0)$J*=lJ,t*=lJ,IJ*=lJ;if(RJ.set($J,t,IJ,lJ),CJ.equals(RJ)===!1)J.clearColor($J,t,IJ,lJ),CJ.copy(RJ)},reset:function(){j=!1,GJ=null,CJ.set(-1,0,0,0)}}}function Z(){let j=!1,RJ=!1,GJ=null,CJ=null,$J=null;return{setReversed:function(t){if(RJ!==t){let IJ=Q.get("EXT_clip_control");if(t)IJ.clipControlEXT(IJ.LOWER_LEFT_EXT,IJ.ZERO_TO_ONE_EXT);else IJ.clipControlEXT(IJ.LOWER_LEFT_EXT,IJ.NEGATIVE_ONE_TO_ONE_EXT);RJ=t;let lJ=$J;$J=null,this.setClear(lJ)}},getReversed:function(){return RJ},setTest:function(t){if(t)KJ(J.DEPTH_TEST);else zJ(J.DEPTH_TEST)},setMask:function(t){if(GJ!==t&&!j)J.depthMask(t),GJ=t},setFunc:function(t){if(RJ)t=CF[t];if(CJ!==t){switch(t){case CQ:J.depthFunc(J.NEVER);break;case _Q:J.depthFunc(J.ALWAYS);break;case wQ:J.depthFunc(J.LESS);break;case W7:J.depthFunc(J.LEQUAL);break;case IQ:J.depthFunc(J.EQUAL);break;case PQ:J.depthFunc(J.GEQUAL);break;case TQ:J.depthFunc(J.GREATER);break;case AQ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}CJ=t}},setLocked:function(t){j=t},setClear:function(t){if($J!==t){if(RJ)t=1-t;J.clearDepth(t),$J=t}},reset:function(){j=!1,GJ=null,CJ=null,$J=null,RJ=!1}}}function W(){let j=!1,RJ=null,GJ=null,CJ=null,$J=null,t=null,IJ=null,lJ=null,K0=null;return{setTest:function(Y0){if(!j)if(Y0)KJ(J.STENCIL_TEST);else zJ(J.STENCIL_TEST)},setMask:function(Y0){if(RJ!==Y0&&!j)J.stencilMask(Y0),RJ=Y0},setFunc:function(Y0,D8,L8){if(GJ!==Y0||CJ!==D8||$J!==L8)J.stencilFunc(Y0,D8,L8),GJ=Y0,CJ=D8,$J=L8},setOp:function(Y0,D8,L8){if(t!==Y0||IJ!==D8||lJ!==L8)J.stencilOp(Y0,D8,L8),t=Y0,IJ=D8,lJ=L8},setLocked:function(Y0){j=Y0},setClear:function(Y0){if(K0!==Y0)J.clearStencil(Y0),K0=Y0},reset:function(){j=!1,RJ=null,GJ=null,CJ=null,$J=null,t=null,IJ=null,lJ=null,K0=null}}}let H=new $,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,N=[],R=null,k=!1,F=null,O=null,D=null,M=null,V=null,P=null,_=null,I=new EJ(0,0,0),v=0,z=!1,C=null,S=null,p=null,d=null,x=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,QJ=0,l=J.getParameter(J.VERSION);if(l.indexOf("WebGL")!==-1)QJ=parseFloat(/^WebGL (\d)/.exec(l)[1]),m=QJ>=1;else if(l.indexOf("OpenGL ES")!==-1)QJ=parseFloat(/^OpenGL ES (\d)/.exec(l)[1]),m=QJ>=2;let qJ=null,NJ={},jJ=J.getParameter(J.SCISSOR_BOX),dJ=J.getParameter(J.VIEWPORT),G0=new Z0().fromArray(jJ),J0=new Z0().fromArray(dJ);function s(j,RJ,GJ,CJ){let $J=new Uint8Array(4),t=J.createTexture();J.bindTexture(j,t),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let IJ=0;IJ<GJ;IJ++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(RJ,0,J.RGBA,1,1,CJ,0,J.RGBA,J.UNSIGNED_BYTE,$J);else J.texImage2D(RJ+IJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,$J);return t}let OJ={};OJ[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),OJ[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),OJ[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),OJ[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),KJ(J.DEPTH_TEST),Y.setFunc(W7),n(!1),UJ(LZ),KJ(J.CULL_FACE),r(W9);function KJ(j){if(G[j]!==!0)J.enable(j),G[j]=!0}function zJ(j){if(G[j]!==!1)J.disable(j),G[j]=!1}function yJ(j,RJ){if(E[j]!==RJ){if(J.bindFramebuffer(j,RJ),E[j]=RJ,j===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=RJ;if(j===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=RJ;return!0}return!1}function xJ(j,RJ){let GJ=N,CJ=!1;if(j){if(GJ=q.get(RJ),GJ===void 0)GJ=[],q.set(RJ,GJ);let $J=j.textures;if(GJ.length!==$J.length||GJ[0]!==J.COLOR_ATTACHMENT0){for(let t=0,IJ=$J.length;t<IJ;t++)GJ[t]=J.COLOR_ATTACHMENT0+t;GJ.length=$J.length,CJ=!0}}else if(GJ[0]!==J.BACK)GJ[0]=J.BACK,CJ=!0;if(CJ)J.drawBuffers(GJ)}function H0(j){if(R!==j)return J.useProgram(j),R=j,!0;return!1}let A={[D6]:J.FUNC_ADD,[xY]:J.FUNC_SUBTRACT,[gY]:J.FUNC_REVERSE_SUBTRACT};A[pY]=J.MIN,A[lY]=J.MAX;let e={[dY]:J.ZERO,[mY]:J.ONE,[uY]:J.SRC_COLOR,[nY]:J.SRC_ALPHA,[tY]:J.SRC_ALPHA_SATURATE,[aY]:J.DST_COLOR,[oY]:J.DST_ALPHA,[cY]:J.ONE_MINUS_SRC_COLOR,[sY]:J.ONE_MINUS_SRC_ALPHA,[rY]:J.ONE_MINUS_DST_COLOR,[iY]:J.ONE_MINUS_DST_ALPHA,[eY]:J.CONSTANT_COLOR,[JX]:J.ONE_MINUS_CONSTANT_COLOR,[QX]:J.CONSTANT_ALPHA,[$X]:J.ONE_MINUS_CONSTANT_ALPHA};function r(j,RJ,GJ,CJ,$J,t,IJ,lJ,K0,Y0){if(j===W9){if(k===!0)zJ(J.BLEND),k=!1;return}if(k===!1)KJ(J.BLEND),k=!0;if(j!==bY){if(j!==F||Y0!==z){if(O!==D6||V!==D6)J.blendEquation(J.FUNC_ADD),O=D6,V=D6;if(Y0)switch(j){case Z7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zZ:J.blendFunc(J.ONE,J.ONE);break;case BZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case CZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Z7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case zZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case BZ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case CZ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,M=null,P=null,_=null,I.set(0,0,0),v=0,F=j,z=Y0}return}if($J=$J||RJ,t=t||GJ,IJ=IJ||CJ,RJ!==O||$J!==V)J.blendEquationSeparate(A[RJ],A[$J]),O=RJ,V=$J;if(GJ!==D||CJ!==M||t!==P||IJ!==_)J.blendFuncSeparate(e[GJ],e[CJ],e[t],e[IJ]),D=GJ,M=CJ,P=t,_=IJ;if(lJ.equals(I)===!1||K0!==v)J.blendColor(lJ.r,lJ.g,lJ.b,K0),I.copy(lJ),v=K0;F=j,z=!1}function o(j,RJ){j.side===H8?zJ(J.CULL_FACE):KJ(J.CULL_FACE);let GJ=j.side===e0;if(RJ)GJ=!GJ;n(GJ),j.blending===Z7&&j.transparent===!1?r(W9):r(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),Y.setFunc(j.depthFunc),Y.setTest(j.depthTest),Y.setMask(j.depthWrite),H.setMask(j.colorWrite);let CJ=j.stencilWrite;if(X.setTest(CJ),CJ)X.setMask(j.stencilWriteMask),X.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),X.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);ZJ(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?KJ(J.SAMPLE_ALPHA_TO_COVERAGE):zJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function n(j){if(C!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);C=j}}function UJ(j){if(j!==yY){if(KJ(J.CULL_FACE),j!==S)if(j===LZ)J.cullFace(J.BACK);else if(j===fY)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else zJ(J.CULL_FACE);S=j}function YJ(j){if(j!==p){if(m)J.lineWidth(j);p=j}}function ZJ(j,RJ,GJ){if(j){if(KJ(J.POLYGON_OFFSET_FILL),d!==RJ||x!==GJ)J.polygonOffset(RJ,GJ),d=RJ,x=GJ}else zJ(J.POLYGON_OFFSET_FILL)}function uJ(j){if(j)KJ(J.SCISSOR_TEST);else zJ(J.SCISSOR_TEST)}function cJ(j){if(j===void 0)j=J.TEXTURE0+a-1;if(qJ!==j)J.activeTexture(j),qJ=j}function sJ(j,RJ,GJ){if(GJ===void 0)if(qJ===null)GJ=J.TEXTURE0+a-1;else GJ=qJ;let CJ=NJ[GJ];if(CJ===void 0)CJ={type:void 0,texture:void 0},NJ[GJ]=CJ;if(CJ.type!==j||CJ.texture!==RJ){if(qJ!==GJ)J.activeTexture(GJ),qJ=GJ;J.bindTexture(j,RJ||OJ[j]),CJ.type=j,CJ.texture=RJ}}function T(){let j=NJ[qJ];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function L(){try{J.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function y(){try{J.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c(){try{J.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function JJ(){try{J.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function u(){try{J.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function LJ(){try{J.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function XJ(){try{J.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _J(){try{J.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fJ(){try{J.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function HJ(){try{J.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function MJ(j){if(G0.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),G0.copy(j)}function PJ(j){if(J0.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),J0.copy(j)}function TJ(j,RJ){let GJ=U.get(RJ);if(GJ===void 0)GJ=new WeakMap,U.set(RJ,GJ);let CJ=GJ.get(j);if(CJ===void 0)CJ=J.getUniformBlockIndex(RJ,j.name),GJ.set(j,CJ)}function DJ(j,RJ){let CJ=U.get(RJ).get(j);if(K.get(RJ)!==CJ)J.uniformBlockBinding(RJ,CJ,j.__bindingPointIndex),K.set(RJ,CJ)}function iJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},qJ=null,NJ={},E={},q=new WeakMap,N=[],R=null,k=!1,F=null,O=null,D=null,M=null,V=null,P=null,_=null,I=new EJ(0,0,0),v=0,z=!1,C=null,S=null,p=null,d=null,x=null,G0.set(0,0,J.canvas.width,J.canvas.height),J0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:KJ,disable:zJ,bindFramebuffer:yJ,drawBuffers:xJ,useProgram:H0,setBlending:r,setMaterial:o,setFlipSided:n,setCullFace:UJ,setLineWidth:YJ,setPolygonOffset:ZJ,setScissorTest:uJ,activeTexture:cJ,bindTexture:sJ,unbindTexture:T,compressedTexImage2D:L,compressedTexImage3D:y,texImage2D:fJ,texImage3D:HJ,updateUBOMapping:TJ,uniformBlockBinding:DJ,texStorage2D:XJ,texStorage3D:_J,texSubImage2D:c,texSubImage3D:JJ,compressedTexSubImage2D:u,compressedTexSubImage3D:LJ,scissor:MJ,viewport:PJ,reset:iJ}}function wF(J,Q,$,Z,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new i,G=new WeakMap,E,q=new WeakMap,N=!1;try{N=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function R(T,L){return N?new OffscreenCanvas(T,L):F6("canvas")}function k(T,L,y){let c=1,JJ=sJ(T);if(JJ.width>y||JJ.height>y)c=y/Math.max(JJ.width,JJ.height);if(c<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let u=Math.floor(c*JJ.width),LJ=Math.floor(c*JJ.height);if(E===void 0)E=R(u,LJ);let XJ=L?R(u,LJ):E;return XJ.width=u,XJ.height=LJ,XJ.getContext("2d").drawImage(T,0,0,u,LJ),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+JJ.width+"x"+JJ.height+") to ("+u+"x"+LJ+")."),XJ}else{if("data"in T)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+JJ.width+"x"+JJ.height+").");return T}return T}function F(T){return T.generateMipmaps}function O(T){J.generateMipmap(T)}function D(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(T,L,y,c,JJ=!1){if(T!==null){if(J[T]!==void 0)return J[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let u=L;if(L===J.RED){if(y===J.FLOAT)u=J.R32F;if(y===J.HALF_FLOAT)u=J.R16F;if(y===J.UNSIGNED_BYTE)u=J.R8}if(L===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)u=J.R8UI;if(y===J.UNSIGNED_SHORT)u=J.R16UI;if(y===J.UNSIGNED_INT)u=J.R32UI;if(y===J.BYTE)u=J.R8I;if(y===J.SHORT)u=J.R16I;if(y===J.INT)u=J.R32I}if(L===J.RG){if(y===J.FLOAT)u=J.RG32F;if(y===J.HALF_FLOAT)u=J.RG16F;if(y===J.UNSIGNED_BYTE)u=J.RG8}if(L===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)u=J.RG8UI;if(y===J.UNSIGNED_SHORT)u=J.RG16UI;if(y===J.UNSIGNED_INT)u=J.RG32UI;if(y===J.BYTE)u=J.RG8I;if(y===J.SHORT)u=J.RG16I;if(y===J.INT)u=J.RG32I}if(L===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)u=J.RGB8UI;if(y===J.UNSIGNED_SHORT)u=J.RGB16UI;if(y===J.UNSIGNED_INT)u=J.RGB32UI;if(y===J.BYTE)u=J.RGB8I;if(y===J.SHORT)u=J.RGB16I;if(y===J.INT)u=J.RGB32I}if(L===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(y===J.UNSIGNED_INT)u=J.RGBA32UI;if(y===J.BYTE)u=J.RGBA8I;if(y===J.SHORT)u=J.RGBA16I;if(y===J.INT)u=J.RGBA32I}if(L===J.RGB){if(y===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)u=J.R11F_G11F_B10F}if(L===J.RGBA){let LJ=JJ?XW:aJ.getTransfer(c);if(y===J.FLOAT)u=J.RGBA32F;if(y===J.HALF_FLOAT)u=J.RGBA16F;if(y===J.UNSIGNED_BYTE)u=LJ===E0?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)Q.get("EXT_color_buffer_float");return u}function V(T,L){let y;if(T){if(L===null||L===B6||L===C6)y=J.DEPTH24_STENCIL8;else if(L===Y9)y=J.DEPTH32F_STENCIL8;else if(L===Y7)y=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===B6||L===C6)y=J.DEPTH_COMPONENT24;else if(L===Y9)y=J.DEPTH_COMPONENT32F;else if(L===Y7)y=J.DEPTH_COMPONENT16;return y}function P(T,L){if(F(T)===!0||T.isFramebufferTexture&&T.minFilter!==u8&&T.minFilter!==R8)return Math.log2(Math.max(L.width,L.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return L.mipmaps.length;else return 1}function _(T){let L=T.target;if(L.removeEventListener("dispose",_),v(L),L.isVideoTexture)G.delete(L)}function I(T){let L=T.target;L.removeEventListener("dispose",I),C(L)}function v(T){let L=Z.get(T);if(L.__webglInit===void 0)return;let y=T.source,c=q.get(y);if(c){let JJ=c[L.__cacheKey];if(JJ.usedTimes--,JJ.usedTimes===0)z(T);if(Object.keys(c).length===0)q.delete(y)}Z.remove(T)}function z(T){let L=Z.get(T);J.deleteTexture(L.__webglTexture);let y=T.source,c=q.get(y);delete c[L.__cacheKey],Y.memory.textures--}function C(T){let L=Z.get(T);if(T.depthTexture)T.depthTexture.dispose(),Z.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let c=0;c<6;c++){if(Array.isArray(L.__webglFramebuffer[c]))for(let JJ=0;JJ<L.__webglFramebuffer[c].length;JJ++)J.deleteFramebuffer(L.__webglFramebuffer[c][JJ]);else J.deleteFramebuffer(L.__webglFramebuffer[c]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[c])}else{if(Array.isArray(L.__webglFramebuffer))for(let c=0;c<L.__webglFramebuffer.length;c++)J.deleteFramebuffer(L.__webglFramebuffer[c]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let c=0;c<L.__webglColorRenderbuffer.length;c++)if(L.__webglColorRenderbuffer[c])J.deleteRenderbuffer(L.__webglColorRenderbuffer[c])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let y=T.textures;for(let c=0,JJ=y.length;c<JJ;c++){let u=Z.get(y[c]);if(u.__webglTexture)J.deleteTexture(u.__webglTexture),Y.memory.textures--;Z.remove(y[c])}Z.remove(T)}let S=0;function p(){S=0}function d(){let T=S;if(T>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+W.maxTextures);return S+=1,T}function x(T){let L=[];return L.push(T.wrapS),L.push(T.wrapT),L.push(T.wrapR||0),L.push(T.magFilter),L.push(T.minFilter),L.push(T.anisotropy),L.push(T.internalFormat),L.push(T.format),L.push(T.type),L.push(T.generateMipmaps),L.push(T.premultiplyAlpha),L.push(T.flipY),L.push(T.unpackAlignment),L.push(T.colorSpace),L.join()}function a(T,L){let y=Z.get(T);if(T.isVideoTexture)uJ(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&y.__version!==T.version){let c=T.image;if(c===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(c.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{OJ(y,T,L);return}}else if(T.isExternalTexture)y.__webglTexture=T.sourceTexture?T.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+L)}function m(T,L){let y=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&y.__version!==T.version){OJ(y,T,L);return}$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+L)}function QJ(T,L){let y=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&y.__version!==T.version){OJ(y,T,L);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+L)}function l(T,L){let y=Z.get(T);if(T.version>0&&y.__version!==T.version){KJ(y,T,L);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+L)}let qJ={[V6]:J.REPEAT,[vQ]:J.CLAMP_TO_EDGE,[yQ]:J.MIRRORED_REPEAT},NJ={[u8]:J.NEAREST,[fQ]:J.NEAREST_MIPMAP_NEAREST,[v9]:J.NEAREST_MIPMAP_LINEAR,[R8]:J.LINEAR,[z6]:J.LINEAR_MIPMAP_NEAREST,[c8]:J.LINEAR_MIPMAP_LINEAR},jJ={[CX]:J.NEVER,[AX]:J.ALWAYS,[_X]:J.LESS,[KW]:J.LEQUAL,[wX]:J.EQUAL,[TX]:J.GEQUAL,[IX]:J.GREATER,[PX]:J.NOTEQUAL};function dJ(T,L){if(L.type===Y9&&Q.has("OES_texture_float_linear")===!1&&(L.magFilter===R8||L.magFilter===z6||L.magFilter===v9||L.magFilter===c8||L.minFilter===R8||L.minFilter===z6||L.minFilter===v9||L.minFilter===c8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(T,J.TEXTURE_WRAP_S,qJ[L.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,qJ[L.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,qJ[L.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,NJ[L.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,NJ[L.minFilter]),L.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,jJ[L.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===u8)return;if(L.minFilter!==v9&&L.minFilter!==c8)return;if(L.type===Y9&&Q.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||Z.get(L).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(T,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,W.getMaxAnisotropy())),Z.get(L).__currentAnisotropy=L.anisotropy}}}function G0(T,L){let y=!1;if(T.__webglInit===void 0)T.__webglInit=!0,L.addEventListener("dispose",_);let c=L.source,JJ=q.get(c);if(JJ===void 0)JJ={},q.set(c,JJ);let u=x(L);if(u!==T.__cacheKey){if(JJ[u]===void 0)JJ[u]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,y=!0;JJ[u].usedTimes++;let LJ=JJ[T.__cacheKey];if(LJ!==void 0){if(JJ[T.__cacheKey].usedTimes--,LJ.usedTimes===0)z(L)}T.__cacheKey=u,T.__webglTexture=JJ[u].texture}return y}function J0(T,L,y){return Math.floor(Math.floor(T/y)/L)}function s(T,L,y,c){let u=T.updateRanges;if(u.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,y,c,L.data);else{u.sort((HJ,MJ)=>HJ.start-MJ.start);let LJ=0;for(let HJ=1;HJ<u.length;HJ++){let MJ=u[LJ],PJ=u[HJ],TJ=MJ.start+MJ.count,DJ=J0(PJ.start,L.width,4),iJ=J0(MJ.start,L.width,4);if(PJ.start<=TJ+1&&DJ===iJ&&J0(PJ.start+PJ.count-1,L.width,4)===DJ)MJ.count=Math.max(MJ.count,PJ.start+PJ.count-MJ.start);else++LJ,u[LJ]=PJ}u.length=LJ+1;let XJ=J.getParameter(J.UNPACK_ROW_LENGTH),_J=J.getParameter(J.UNPACK_SKIP_PIXELS),fJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let HJ=0,MJ=u.length;HJ<MJ;HJ++){let PJ=u[HJ],TJ=Math.floor(PJ.start/4),DJ=Math.ceil(PJ.count/4),iJ=TJ%L.width,j=Math.floor(TJ/L.width),RJ=DJ,GJ=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,iJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,j),$.texSubImage2D(J.TEXTURE_2D,0,iJ,j,RJ,1,y,c,L.data)}T.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,XJ),J.pixelStorei(J.UNPACK_SKIP_PIXELS,_J),J.pixelStorei(J.UNPACK_SKIP_ROWS,fJ)}}function OJ(T,L,y){let c=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)c=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)c=J.TEXTURE_3D;let JJ=G0(T,L),u=L.source;$.bindTexture(c,T.__webglTexture,J.TEXTURE0+y);let LJ=Z.get(u);if(u.version!==LJ.__version||JJ===!0){$.activeTexture(J.TEXTURE0+y);let XJ=aJ.getPrimaries(aJ.workingColorSpace),_J=L.colorSpace===y9?null:aJ.getPrimaries(L.colorSpace),fJ=L.colorSpace===y9||XJ===_J?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,fJ);let HJ=k(L.image,!1,W.maxTextureSize);HJ=cJ(L,HJ);let MJ=H.convert(L.format,L.colorSpace),PJ=H.convert(L.type),TJ=M(L.internalFormat,MJ,PJ,L.colorSpace,L.isVideoTexture);dJ(c,L);let DJ,iJ=L.mipmaps,j=L.isVideoTexture!==!0,RJ=LJ.__version===void 0||JJ===!0,GJ=u.dataReady,CJ=P(L,HJ);if(L.isDepthTexture){if(TJ=V(L.format===K7,L.type),RJ)if(j)$.texStorage2D(J.TEXTURE_2D,1,TJ,HJ.width,HJ.height);else $.texImage2D(J.TEXTURE_2D,0,TJ,HJ.width,HJ.height,0,MJ,PJ,null)}else if(L.isDataTexture)if(iJ.length>0){if(j&&RJ)$.texStorage2D(J.TEXTURE_2D,CJ,TJ,iJ[0].width,iJ[0].height);for(let $J=0,t=iJ.length;$J<t;$J++)if(DJ=iJ[$J],j){if(GJ)$.texSubImage2D(J.TEXTURE_2D,$J,0,0,DJ.width,DJ.height,MJ,PJ,DJ.data)}else $.texImage2D(J.TEXTURE_2D,$J,TJ,DJ.width,DJ.height,0,MJ,PJ,DJ.data);L.generateMipmaps=!1}else if(j){if(RJ)$.texStorage2D(J.TEXTURE_2D,CJ,TJ,HJ.width,HJ.height);if(GJ)s(L,HJ,MJ,PJ)}else $.texImage2D(J.TEXTURE_2D,0,TJ,HJ.width,HJ.height,0,MJ,PJ,HJ.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(j&&RJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,CJ,TJ,iJ[0].width,iJ[0].height,HJ.depth);for(let $J=0,t=iJ.length;$J<t;$J++)if(DJ=iJ[$J],L.format!==P8)if(MJ!==null)if(j){if(GJ)if(L.layerUpdates.size>0){let IJ=C$(DJ.width,DJ.height,L.format,L.type);for(let lJ of L.layerUpdates){let K0=DJ.data.subarray(lJ*IJ/DJ.data.BYTES_PER_ELEMENT,(lJ+1)*IJ/DJ.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,$J,0,0,lJ,DJ.width,DJ.height,1,MJ,K0)}L.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,$J,0,0,0,DJ.width,DJ.height,HJ.depth,MJ,DJ.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,$J,TJ,DJ.width,DJ.height,HJ.depth,0,DJ.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(GJ)$.texSubImage3D(J.TEXTURE_2D_ARRAY,$J,0,0,0,DJ.width,DJ.height,HJ.depth,MJ,PJ,DJ.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,$J,TJ,DJ.width,DJ.height,HJ.depth,0,MJ,PJ,DJ.data)}else{if(j&&RJ)$.texStorage2D(J.TEXTURE_2D,CJ,TJ,iJ[0].width,iJ[0].height);for(let $J=0,t=iJ.length;$J<t;$J++)if(DJ=iJ[$J],L.format!==P8)if(MJ!==null)if(j){if(GJ)$.compressedTexSubImage2D(J.TEXTURE_2D,$J,0,0,DJ.width,DJ.height,MJ,DJ.data)}else $.compressedTexImage2D(J.TEXTURE_2D,$J,TJ,DJ.width,DJ.height,0,DJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(GJ)$.texSubImage2D(J.TEXTURE_2D,$J,0,0,DJ.width,DJ.height,MJ,PJ,DJ.data)}else $.texImage2D(J.TEXTURE_2D,$J,TJ,DJ.width,DJ.height,0,MJ,PJ,DJ.data)}else if(L.isDataArrayTexture)if(j){if(RJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,CJ,TJ,HJ.width,HJ.height,HJ.depth);if(GJ)if(L.layerUpdates.size>0){let $J=C$(HJ.width,HJ.height,L.format,L.type);for(let t of L.layerUpdates){let IJ=HJ.data.subarray(t*$J/HJ.data.BYTES_PER_ELEMENT,(t+1)*$J/HJ.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,t,HJ.width,HJ.height,1,MJ,PJ,IJ)}L.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,HJ.width,HJ.height,HJ.depth,MJ,PJ,HJ.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,TJ,HJ.width,HJ.height,HJ.depth,0,MJ,PJ,HJ.data);else if(L.isData3DTexture)if(j){if(RJ)$.texStorage3D(J.TEXTURE_3D,CJ,TJ,HJ.width,HJ.height,HJ.depth);if(GJ)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,HJ.width,HJ.height,HJ.depth,MJ,PJ,HJ.data)}else $.texImage3D(J.TEXTURE_3D,0,TJ,HJ.width,HJ.height,HJ.depth,0,MJ,PJ,HJ.data);else if(L.isFramebufferTexture){if(RJ)if(j)$.texStorage2D(J.TEXTURE_2D,CJ,TJ,HJ.width,HJ.height);else{let{width:$J,height:t}=HJ;for(let IJ=0;IJ<CJ;IJ++)$.texImage2D(J.TEXTURE_2D,IJ,TJ,$J,t,0,MJ,PJ,null),$J>>=1,t>>=1}}else if(iJ.length>0){if(j&&RJ){let $J=sJ(iJ[0]);$.texStorage2D(J.TEXTURE_2D,CJ,TJ,$J.width,$J.height)}for(let $J=0,t=iJ.length;$J<t;$J++)if(DJ=iJ[$J],j){if(GJ)$.texSubImage2D(J.TEXTURE_2D,$J,0,0,MJ,PJ,DJ)}else $.texImage2D(J.TEXTURE_2D,$J,TJ,MJ,PJ,DJ);L.generateMipmaps=!1}else if(j){if(RJ){let $J=sJ(HJ);$.texStorage2D(J.TEXTURE_2D,CJ,TJ,$J.width,$J.height)}if(GJ)$.texSubImage2D(J.TEXTURE_2D,0,0,0,MJ,PJ,HJ)}else $.texImage2D(J.TEXTURE_2D,0,TJ,MJ,PJ,HJ);if(F(L))O(c);if(LJ.__version=u.version,L.onUpdate)L.onUpdate(L)}T.__version=L.version}function KJ(T,L,y){if(L.image.length!==6)return;let c=G0(T,L),JJ=L.source;$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+y);let u=Z.get(JJ);if(JJ.version!==u.__version||c===!0){$.activeTexture(J.TEXTURE0+y);let LJ=aJ.getPrimaries(aJ.workingColorSpace),XJ=L.colorSpace===y9?null:aJ.getPrimaries(L.colorSpace),_J=L.colorSpace===y9||LJ===XJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,_J);let fJ=L.isCompressedTexture||L.image[0].isCompressedTexture,HJ=L.image[0]&&L.image[0].isDataTexture,MJ=[];for(let t=0;t<6;t++){if(!fJ&&!HJ)MJ[t]=k(L.image[t],!0,W.maxCubemapSize);else MJ[t]=HJ?L.image[t].image:L.image[t];MJ[t]=cJ(L,MJ[t])}let PJ=MJ[0],TJ=H.convert(L.format,L.colorSpace),DJ=H.convert(L.type),iJ=M(L.internalFormat,TJ,DJ,L.colorSpace),j=L.isVideoTexture!==!0,RJ=u.__version===void 0||c===!0,GJ=JJ.dataReady,CJ=P(L,PJ);dJ(J.TEXTURE_CUBE_MAP,L);let $J;if(fJ){if(j&&RJ)$.texStorage2D(J.TEXTURE_CUBE_MAP,CJ,iJ,PJ.width,PJ.height);for(let t=0;t<6;t++){$J=MJ[t].mipmaps;for(let IJ=0;IJ<$J.length;IJ++){let lJ=$J[IJ];if(L.format!==P8)if(TJ!==null)if(j){if(GJ)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ,0,0,lJ.width,lJ.height,TJ,lJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ,iJ,lJ.width,lJ.height,0,lJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(GJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ,0,0,lJ.width,lJ.height,TJ,DJ,lJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ,iJ,lJ.width,lJ.height,0,TJ,DJ,lJ.data)}}}else{if($J=L.mipmaps,j&&RJ){if($J.length>0)CJ++;let t=sJ(MJ[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,CJ,iJ,t.width,t.height)}for(let t=0;t<6;t++)if(HJ){if(j){if(GJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,MJ[t].width,MJ[t].height,TJ,DJ,MJ[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,iJ,MJ[t].width,MJ[t].height,0,TJ,DJ,MJ[t].data);for(let IJ=0;IJ<$J.length;IJ++){let K0=$J[IJ].image[t].image;if(j){if(GJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ+1,0,0,K0.width,K0.height,TJ,DJ,K0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ+1,iJ,K0.width,K0.height,0,TJ,DJ,K0.data)}}else{if(j){if(GJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,TJ,DJ,MJ[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,iJ,TJ,DJ,MJ[t]);for(let IJ=0;IJ<$J.length;IJ++){let lJ=$J[IJ];if(j){if(GJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ+1,0,0,TJ,DJ,lJ.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,IJ+1,iJ,TJ,DJ,lJ.image[t])}}}if(F(L))O(J.TEXTURE_CUBE_MAP);if(u.__version=JJ.version,L.onUpdate)L.onUpdate(L)}T.__version=L.version}function zJ(T,L,y,c,JJ,u){let LJ=H.convert(y.format,y.colorSpace),XJ=H.convert(y.type),_J=M(y.internalFormat,LJ,XJ,y.colorSpace),fJ=Z.get(L),HJ=Z.get(y);if(HJ.__renderTarget=L,!fJ.__hasExternalTextures){let MJ=Math.max(1,L.width>>u),PJ=Math.max(1,L.height>>u);if(JJ===J.TEXTURE_3D||JJ===J.TEXTURE_2D_ARRAY)$.texImage3D(JJ,u,_J,MJ,PJ,L.depth,0,LJ,XJ,null);else $.texImage2D(JJ,u,_J,MJ,PJ,0,LJ,XJ,null)}if($.bindFramebuffer(J.FRAMEBUFFER,T),ZJ(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,c,JJ,HJ.__webglTexture,0,YJ(L));else if(JJ===J.TEXTURE_2D||JJ>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&JJ<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,c,JJ,HJ.__webglTexture,u);$.bindFramebuffer(J.FRAMEBUFFER,null)}function yJ(T,L,y){if(J.bindRenderbuffer(J.RENDERBUFFER,T),L.depthBuffer){let c=L.depthTexture,JJ=c&&c.isDepthTexture?c.type:null,u=V(L.stencilBuffer,JJ),LJ=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,XJ=YJ(L);if(ZJ(L))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,XJ,u,L.width,L.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,XJ,u,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,u,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,LJ,J.RENDERBUFFER,T)}else{let c=L.textures;for(let JJ=0;JJ<c.length;JJ++){let u=c[JJ],LJ=H.convert(u.format,u.colorSpace),XJ=H.convert(u.type),_J=M(u.internalFormat,LJ,XJ,u.colorSpace),fJ=YJ(L);if(y&&ZJ(L)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,fJ,_J,L.width,L.height);else if(ZJ(L))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,fJ,_J,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,_J,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function xJ(T,L){if(L&&L.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,T),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let c=Z.get(L.depthTexture);if(c.__renderTarget=L,!c.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;a(L.depthTexture,0);let JJ=c.__webglTexture,u=YJ(L);if(L.depthTexture.format===hQ)if(ZJ(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,JJ,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,JJ,0);else if(L.depthTexture.format===K7)if(ZJ(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,JJ,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,JJ,0);else throw Error("Unknown depthTexture format")}function H0(T){let L=Z.get(T),y=T.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==T.depthTexture){let c=T.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(c){let JJ=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,c.removeEventListener("dispose",JJ)};c.addEventListener("dispose",JJ),L.__depthDisposeCallback=JJ}L.__boundDepthTexture=c}if(T.depthTexture&&!L.__autoAllocateDepthBuffer){if(y)throw Error("target.depthTexture not supported in Cube render targets");let c=T.texture.mipmaps;if(c&&c.length>0)xJ(L.__webglFramebuffer[0],T);else xJ(L.__webglFramebuffer,T)}else if(y){L.__webglDepthbuffer=[];for(let c=0;c<6;c++)if($.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[c]),L.__webglDepthbuffer[c]===void 0)L.__webglDepthbuffer[c]=J.createRenderbuffer(),yJ(L.__webglDepthbuffer[c],T,!1);else{let JJ=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=L.__webglDepthbuffer[c];J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,JJ,J.RENDERBUFFER,u)}}else{let c=T.texture.mipmaps;if(c&&c.length>0)$.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),yJ(L.__webglDepthbuffer,T,!1);else{let JJ=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,JJ,J.RENDERBUFFER,u)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function A(T,L,y){let c=Z.get(T);if(L!==void 0)zJ(c.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)H0(T)}function e(T){let L=T.texture,y=Z.get(T),c=Z.get(L);T.addEventListener("dispose",I);let JJ=T.textures,u=T.isWebGLCubeRenderTarget===!0,LJ=JJ.length>1;if(!LJ){if(c.__webglTexture===void 0)c.__webglTexture=J.createTexture();c.__version=L.version,Y.memory.textures++}if(u){y.__webglFramebuffer=[];for(let XJ=0;XJ<6;XJ++)if(L.mipmaps&&L.mipmaps.length>0){y.__webglFramebuffer[XJ]=[];for(let _J=0;_J<L.mipmaps.length;_J++)y.__webglFramebuffer[XJ][_J]=J.createFramebuffer()}else y.__webglFramebuffer[XJ]=J.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){y.__webglFramebuffer=[];for(let XJ=0;XJ<L.mipmaps.length;XJ++)y.__webglFramebuffer[XJ]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(LJ)for(let XJ=0,_J=JJ.length;XJ<_J;XJ++){let fJ=Z.get(JJ[XJ]);if(fJ.__webglTexture===void 0)fJ.__webglTexture=J.createTexture(),Y.memory.textures++}if(T.samples>0&&ZJ(T)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let XJ=0;XJ<JJ.length;XJ++){let _J=JJ[XJ];y.__webglColorRenderbuffer[XJ]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[XJ]);let fJ=H.convert(_J.format,_J.colorSpace),HJ=H.convert(_J.type),MJ=M(_J.internalFormat,fJ,HJ,_J.colorSpace,T.isXRRenderTarget===!0),PJ=YJ(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ,MJ,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+XJ,J.RENDERBUFFER,y.__webglColorRenderbuffer[XJ])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),yJ(y.__webglDepthRenderbuffer,T,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(u){$.bindTexture(J.TEXTURE_CUBE_MAP,c.__webglTexture),dJ(J.TEXTURE_CUBE_MAP,L);for(let XJ=0;XJ<6;XJ++)if(L.mipmaps&&L.mipmaps.length>0)for(let _J=0;_J<L.mipmaps.length;_J++)zJ(y.__webglFramebuffer[XJ][_J],T,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+XJ,_J);else zJ(y.__webglFramebuffer[XJ],T,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+XJ,0);if(F(L))O(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(LJ){for(let XJ=0,_J=JJ.length;XJ<_J;XJ++){let fJ=JJ[XJ],HJ=Z.get(fJ),MJ=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)MJ=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(MJ,HJ.__webglTexture),dJ(MJ,fJ),zJ(y.__webglFramebuffer,T,fJ,J.COLOR_ATTACHMENT0+XJ,MJ,0),F(fJ))O(MJ)}$.unbindTexture()}else{let XJ=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)XJ=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(XJ,c.__webglTexture),dJ(XJ,L),L.mipmaps&&L.mipmaps.length>0)for(let _J=0;_J<L.mipmaps.length;_J++)zJ(y.__webglFramebuffer[_J],T,L,J.COLOR_ATTACHMENT0,XJ,_J);else zJ(y.__webglFramebuffer,T,L,J.COLOR_ATTACHMENT0,XJ,0);if(F(L))O(XJ);$.unbindTexture()}if(T.depthBuffer)H0(T)}function r(T){let L=T.textures;for(let y=0,c=L.length;y<c;y++){let JJ=L[y];if(F(JJ)){let u=D(T),LJ=Z.get(JJ).__webglTexture;$.bindTexture(u,LJ),O(u),$.unbindTexture()}}}let o=[],n=[];function UJ(T){if(T.samples>0){if(ZJ(T)===!1){let{textures:L,width:y,height:c}=T,JJ=J.COLOR_BUFFER_BIT,u=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,LJ=Z.get(T),XJ=L.length>1;if(XJ)for(let fJ=0;fJ<L.length;fJ++)$.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+fJ,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+fJ,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,LJ.__webglMultisampledFramebuffer);let _J=T.texture.mipmaps;if(_J&&_J.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglFramebuffer);for(let fJ=0;fJ<L.length;fJ++){if(T.resolveDepthBuffer){if(T.depthBuffer)JJ|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)JJ|=J.STENCIL_BUFFER_BIT}if(XJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,LJ.__webglColorRenderbuffer[fJ]);let HJ=Z.get(L[fJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,HJ,0)}if(J.blitFramebuffer(0,0,y,c,0,0,y,c,JJ,J.NEAREST),K===!0){if(o.length=0,n.length=0,o.push(J.COLOR_ATTACHMENT0+fJ),T.depthBuffer&&T.resolveDepthBuffer===!1)o.push(u),n.push(u),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,n);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,o)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),XJ)for(let fJ=0;fJ<L.length;fJ++){$.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+fJ,J.RENDERBUFFER,LJ.__webglColorRenderbuffer[fJ]);let HJ=Z.get(L[fJ]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+fJ,J.TEXTURE_2D,HJ,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&K){let L=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function YJ(T){return Math.min(W.maxSamples,T.samples)}function ZJ(T){let L=Z.get(T);return T.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function uJ(T){let L=Y.render.frame;if(G.get(T)!==L)G.set(T,L),T.update()}function cJ(T,L){let{colorSpace:y,format:c,type:JJ}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return L;if(y!==g0&&y!==y9)if(aJ.getTransfer(y)===E0){if(c!==P8||JJ!==H9)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",y);return L}function sJ(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=d,this.resetTextureUnits=p,this.setTexture2D=a,this.setTexture2DArray=m,this.setTexture3D=QJ,this.setTextureCube=l,this.rebindTextures=A,this.setupRenderTarget=e,this.updateRenderTargetMipmap=r,this.updateMultisampleRenderTarget=UJ,this.setupDepthRenderbuffer=H0,this.setupFrameBufferTexture=zJ,this.useMultisampledRTT=ZJ}function IF(J,Q){function $(Z,W=y9){let H,Y=aJ.getTransfer(W);if(Z===H9)return J.UNSIGNED_BYTE;if(Z===wZ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===IZ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===FX)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===RX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===NX)return J.BYTE;if(Z===OX)return J.SHORT;if(Z===Y7)return J.UNSIGNED_SHORT;if(Z===_Z)return J.INT;if(Z===B6)return J.UNSIGNED_INT;if(Z===Y9)return J.FLOAT;if(Z===X7)return J.HALF_FLOAT;if(Z===kX)return J.ALPHA;if(Z===MX)return J.RGB;if(Z===P8)return J.RGBA;if(Z===hQ)return J.DEPTH_COMPONENT;if(Z===K7)return J.DEPTH_STENCIL;if(Z===DX)return J.RED;if(Z===PZ)return J.RED_INTEGER;if(Z===LX)return J.RG;if(Z===TZ)return J.RG_INTEGER;if(Z===AZ)return J.RGBA_INTEGER;if(Z===bQ||Z===xQ||Z===gQ||Z===pQ)if(Y===E0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===bQ)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===xQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===gQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===pQ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===bQ)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===xQ)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===gQ)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===pQ)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===SZ||Z===jZ||Z===vZ||Z===yZ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===SZ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===jZ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===vZ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===yZ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===fZ||Z===hZ||Z===bZ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===fZ||Z===hZ)return Y===E0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===bZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===xZ||Z===gZ||Z===pZ||Z===lZ||Z===dZ||Z===mZ||Z===uZ||Z===cZ||Z===nZ||Z===sZ||Z===oZ||Z===iZ||Z===aZ||Z===rZ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===xZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===gZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===pZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===lZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===dZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===mZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===uZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===cZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===nZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===sZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===oZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===iZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===aZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===rZ)return Y===E0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===tZ||Z===eZ||Z===JW)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===tZ)return Y===E0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===eZ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===JW)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===QW||Z===$W||Z===ZW||Z===WW)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===QW)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===$W)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===ZW)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===WW)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===C6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var PF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TF=`
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

}`;class TU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new aQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new Y8({vertexShader:PF,fragmentShader:TF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new k0(new A6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AU extends k8{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,N=null,R=typeof XRWebGLBinding<"u",k=new TU,F={},O=Q.getContextAttributes(),D=null,M=null,V=[],P=[],_=new i,I=null,v=new B0;v.viewport=new Z0;let z=new B0;z.viewport=new Z0;let C=[v,z],S=new aW,p=null,d=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let OJ=V[s];if(OJ===void 0)OJ=new O7,V[s]=OJ;return OJ.getTargetRaySpace()},this.getControllerGrip=function(s){let OJ=V[s];if(OJ===void 0)OJ=new O7,V[s]=OJ;return OJ.getGripSpace()},this.getHand=function(s){let OJ=V[s];if(OJ===void 0)OJ=new O7,V[s]=OJ;return OJ.getHandSpace()};function x(s){let OJ=P.indexOf(s.inputSource);if(OJ===-1)return;let KJ=V[OJ];if(KJ!==void 0)KJ.update(s.inputSource,s.frame,K||H),KJ.dispatchEvent({type:s.type,data:s.inputSource})}function a(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",a),Z.removeEventListener("inputsourceschange",m);for(let s=0;s<V.length;s++){let OJ=P[s];if(OJ===null)continue;P[s]=null,V[s].disconnect(OJ)}p=null,d=null,k.reset();for(let s in F)delete F[s];J.setRenderTarget(D),q=null,E=null,G=null,Z=null,M=null,J0.stop(),$.isPresenting=!1,J.setPixelRatio(I),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(Y=s,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(s){K=s},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return N},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(D=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",a),Z.addEventListener("inputsourceschange",m),O.xrCompatible!==!0)await Q.makeXRCompatible();if(I=J.getPixelRatio(),J.getSize(_),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let KJ={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,Q,KJ),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),M=new M8(q.framebufferWidth,q.framebufferHeight,{format:P8,type:H9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let KJ=null,zJ=null,yJ=null;if(O.depth)yJ=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,KJ=O.stencil?K7:hQ,zJ=O.stencil?C6:B6;let xJ={colorFormat:Q.RGBA8,depthFormat:yJ,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(xJ),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),M=new M8(E.textureWidth,E.textureHeight,{format:P8,type:H9,depthTexture:new iQ(E.textureWidth,E.textureHeight,zJ,void 0,void 0,void 0,void 0,void 0,void 0,KJ),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await Z.requestReferenceSpace(Y),J0.setContext(Z),J0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function m(s){for(let OJ=0;OJ<s.removed.length;OJ++){let KJ=s.removed[OJ],zJ=P.indexOf(KJ);if(zJ>=0)P[zJ]=null,V[zJ].disconnect(KJ)}for(let OJ=0;OJ<s.added.length;OJ++){let KJ=s.added[OJ],zJ=P.indexOf(KJ);if(zJ===-1){for(let xJ=0;xJ<V.length;xJ++)if(xJ>=P.length){P.push(KJ),zJ=xJ;break}else if(P[xJ]===null){P[xJ]=KJ,zJ=xJ;break}if(zJ===-1)break}let yJ=V[zJ];if(yJ)yJ.connect(KJ)}}let QJ=new w,l=new w;function qJ(s,OJ,KJ){QJ.setFromMatrixPosition(OJ.matrixWorld),l.setFromMatrixPosition(KJ.matrixWorld);let zJ=QJ.distanceTo(l),yJ=OJ.projectionMatrix.elements,xJ=KJ.projectionMatrix.elements,H0=yJ[14]/(yJ[10]-1),A=yJ[14]/(yJ[10]+1),e=(yJ[9]+1)/yJ[5],r=(yJ[9]-1)/yJ[5],o=(yJ[8]-1)/yJ[0],n=(xJ[8]+1)/xJ[0],UJ=H0*o,YJ=H0*n,ZJ=zJ/(-o+n),uJ=ZJ*-o;if(OJ.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(uJ),s.translateZ(ZJ),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),yJ[10]===-1)s.projectionMatrix.copy(OJ.projectionMatrix),s.projectionMatrixInverse.copy(OJ.projectionMatrixInverse);else{let cJ=H0+ZJ,sJ=A+ZJ,T=UJ-uJ,L=YJ+(zJ-uJ),y=e*A/sJ*cJ,c=r*A/sJ*cJ;s.projectionMatrix.makePerspective(T,L,y,c,cJ,sJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function NJ(s,OJ){if(OJ===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(OJ.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:OJ,far:KJ}=s;if(k.texture!==null){if(k.depthNear>0)OJ=k.depthNear;if(k.depthFar>0)KJ=k.depthFar}if(S.near=z.near=v.near=OJ,S.far=z.far=v.far=KJ,p!==S.near||d!==S.far)Z.updateRenderState({depthNear:S.near,depthFar:S.far}),p=S.near,d=S.far;S.layers.mask=s.layers.mask|6,v.layers.mask=S.layers.mask&3,z.layers.mask=S.layers.mask&5;let zJ=s.parent,yJ=S.cameras;NJ(S,zJ);for(let xJ=0;xJ<yJ.length;xJ++)NJ(yJ[xJ],zJ);if(yJ.length===2)qJ(S,v,z);else S.projectionMatrix.copy(v.projectionMatrix);jJ(s,S,zJ)};function jJ(s,OJ,KJ){if(KJ===null)s.matrix.copy(OJ.matrixWorld);else s.matrix.copy(KJ.matrixWorld),s.matrix.invert(),s.matrix.multiply(OJ.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(OJ.projectionMatrix),s.projectionMatrixInverse.copy(OJ.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=A9*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return S},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(s){if(X=s,E!==null)E.fixedFoveation=s;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=s},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(S)},this.getCameraTexture=function(s){return F[s]};let dJ=null;function G0(s,OJ){if(U=OJ.getViewerPose(K||H),N=OJ,U!==null){let KJ=U.views;if(q!==null)J.setRenderTargetFramebuffer(M,q.framebuffer),J.setRenderTarget(M);let zJ=!1;if(KJ.length!==S.cameras.length)S.cameras.length=0,zJ=!0;for(let A=0;A<KJ.length;A++){let e=KJ[A],r=null;if(q!==null)r=q.getViewport(e);else{let n=G.getViewSubImage(E,e);if(r=n.viewport,A===0)J.setRenderTargetTextures(M,n.colorTexture,n.depthStencilTexture),J.setRenderTarget(M)}let o=C[A];if(o===void 0)o=new B0,o.layers.enable(A),o.viewport=new Z0,C[A]=o;if(o.matrix.fromArray(e.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(e.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(r.x,r.y,r.width,r.height),A===0)S.matrix.copy(o.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);if(zJ===!0)S.cameras.push(o)}let yJ=Z.enabledFeatures;if(yJ&&yJ.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let A=G.getDepthInformation(KJ[0]);if(A&&A.isValid&&A.texture)k.init(A,Z.renderState)}if(yJ&&yJ.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let A=0;A<KJ.length;A++){let e=KJ[A].camera;if(e){let r=F[e];if(!r)r=new aQ,F[e]=r;let o=G.getCameraImage(e);r.sourceTexture=o}}}}for(let KJ=0;KJ<V.length;KJ++){let zJ=P[KJ],yJ=V[KJ];if(zJ!==null&&yJ!==void 0)yJ.update(zJ,OJ,K||H)}if(dJ)dJ(s,OJ);if(OJ.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:OJ});N=null}let J0=new DU;J0.setAnimationLoop(G0),this.setAnimationLoop=function(s){dJ=s},this.dispose=function(){}}}var d9=new r0,AF=new SJ;function SF(J,Q){function $(F,O){if(F.matrixAutoUpdate===!0)F.updateMatrix();O.value.copy(F.matrix)}function Z(F,O){if(O.color.getRGB(F.fogColor.value,FW(J)),O.isFog)F.fogNear.value=O.near,F.fogFar.value=O.far;else if(O.isFogExp2)F.fogDensity.value=O.density}function W(F,O,D,M,V){if(O.isMeshBasicMaterial)H(F,O);else if(O.isMeshLambertMaterial)H(F,O);else if(O.isMeshToonMaterial)H(F,O),E(F,O);else if(O.isMeshPhongMaterial)H(F,O),G(F,O);else if(O.isMeshStandardMaterial){if(H(F,O),q(F,O),O.isMeshPhysicalMaterial)N(F,O,V)}else if(O.isMeshMatcapMaterial)H(F,O),R(F,O);else if(O.isMeshDepthMaterial)H(F,O);else if(O.isMeshDistanceMaterial)H(F,O),k(F,O);else if(O.isMeshNormalMaterial)H(F,O);else if(O.isLineBasicMaterial){if(Y(F,O),O.isLineDashedMaterial)X(F,O)}else if(O.isPointsMaterial)K(F,O,D,M);else if(O.isSpriteMaterial)U(F,O);else if(O.isShadowMaterial)F.color.value.copy(O.color),F.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(F,O){if(F.opacity.value=O.opacity,O.color)F.diffuse.value.copy(O.color);if(O.emissive)F.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.bumpMap){if(F.bumpMap.value=O.bumpMap,$(O.bumpMap,F.bumpMapTransform),F.bumpScale.value=O.bumpScale,O.side===e0)F.bumpScale.value*=-1}if(O.normalMap){if(F.normalMap.value=O.normalMap,$(O.normalMap,F.normalMapTransform),F.normalScale.value.copy(O.normalScale),O.side===e0)F.normalScale.value.negate()}if(O.displacementMap)F.displacementMap.value=O.displacementMap,$(O.displacementMap,F.displacementMapTransform),F.displacementScale.value=O.displacementScale,F.displacementBias.value=O.displacementBias;if(O.emissiveMap)F.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,F.emissiveMapTransform);if(O.specularMap)F.specularMap.value=O.specularMap,$(O.specularMap,F.specularMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest;let D=Q.get(O),M=D.envMap,V=D.envMapRotation;if(M){if(F.envMap.value=M,d9.copy(V),d9.x*=-1,d9.y*=-1,d9.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)d9.y*=-1,d9.z*=-1;F.envMapRotation.value.setFromMatrix4(AF.makeRotationFromEuler(d9)),F.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,F.reflectivity.value=O.reflectivity,F.ior.value=O.ior,F.refractionRatio.value=O.refractionRatio}if(O.lightMap)F.lightMap.value=O.lightMap,F.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,F.lightMapTransform);if(O.aoMap)F.aoMap.value=O.aoMap,F.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,F.aoMapTransform)}function Y(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,O.map)F.map.value=O.map,$(O.map,F.mapTransform)}function X(F,O){F.dashSize.value=O.dashSize,F.totalSize.value=O.dashSize+O.gapSize,F.scale.value=O.scale}function K(F,O,D,M){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.size.value=O.size*D,F.scale.value=M*0.5,O.map)F.map.value=O.map,$(O.map,F.uvTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function U(F,O){if(F.diffuse.value.copy(O.color),F.opacity.value=O.opacity,F.rotation.value=O.rotation,O.map)F.map.value=O.map,$(O.map,F.mapTransform);if(O.alphaMap)F.alphaMap.value=O.alphaMap,$(O.alphaMap,F.alphaMapTransform);if(O.alphaTest>0)F.alphaTest.value=O.alphaTest}function G(F,O){F.specular.value.copy(O.specular),F.shininess.value=Math.max(O.shininess,0.0001)}function E(F,O){if(O.gradientMap)F.gradientMap.value=O.gradientMap}function q(F,O){if(F.metalness.value=O.metalness,O.metalnessMap)F.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=O.roughness,O.roughnessMap)F.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,F.roughnessMapTransform);if(O.envMap)F.envMapIntensity.value=O.envMapIntensity}function N(F,O,D){if(F.ior.value=O.ior,O.sheen>0){if(F.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),F.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)F.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,F.sheenColorMapTransform);if(O.sheenRoughnessMap)F.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(F.clearcoat.value=O.clearcoat,F.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)F.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,F.clearcoatMapTransform);if(O.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(F.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===e0)F.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)F.dispersion.value=O.dispersion;if(O.iridescence>0){if(F.iridescence.value=O.iridescence,F.iridescenceIOR.value=O.iridescenceIOR,F.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)F.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,F.iridescenceMapTransform);if(O.iridescenceThicknessMap)F.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(O.transmission>0){if(F.transmission.value=O.transmission,F.transmissionSamplerMap.value=D.texture,F.transmissionSamplerSize.value.set(D.width,D.height),O.transmissionMap)F.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=O.thickness,O.thicknessMap)F.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=O.attenuationDistance,F.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(F.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)F.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=O.specularIntensity,F.specularColor.value.copy(O.specularColor),O.specularColorMap)F.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,F.specularColorMapTransform);if(O.specularIntensityMap)F.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,F.specularIntensityMapTransform)}function R(F,O){if(O.matcap)F.matcap.value=O.matcap}function k(F,O){let D=Q.get(O).light;F.referencePosition.value.setFromMatrixPosition(D.matrixWorld),F.nearDistance.value=D.shadow.camera.near,F.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function jF(J,Q,$,Z){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(D,M){let V=M.program;Z.uniformBlockBinding(D,V)}function U(D,M){let V=W[D.id];if(V===void 0)R(D),V=G(D),W[D.id]=V,D.addEventListener("dispose",F);let P=M.program;Z.updateUBOMapping(D,P);let _=Q.render.frame;if(H[D.id]!==_)q(D),H[D.id]=_}function G(D){let M=E();D.__bindingPointIndex=M;let V=J.createBuffer(),P=D.__size,_=D.usage;return J.bindBuffer(J.UNIFORM_BUFFER,V),J.bufferData(J.UNIFORM_BUFFER,P,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,V),V}function E(){for(let D=0;D<X;D++)if(Y.indexOf(D)===-1)return Y.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(D){let M=W[D.id],V=D.uniforms,P=D.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let _=0,I=V.length;_<I;_++){let v=Array.isArray(V[_])?V[_]:[V[_]];for(let z=0,C=v.length;z<C;z++){let S=v[z];if(N(S,_,z,P)===!0){let p=S.__offset,d=Array.isArray(S.value)?S.value:[S.value],x=0;for(let a=0;a<d.length;a++){let m=d[a],QJ=k(m);if(typeof m==="number"||typeof m==="boolean")S.__data[0]=m,J.bufferSubData(J.UNIFORM_BUFFER,p+x,S.__data);else if(m.isMatrix3)S.__data[0]=m.elements[0],S.__data[1]=m.elements[1],S.__data[2]=m.elements[2],S.__data[3]=0,S.__data[4]=m.elements[3],S.__data[5]=m.elements[4],S.__data[6]=m.elements[5],S.__data[7]=0,S.__data[8]=m.elements[6],S.__data[9]=m.elements[7],S.__data[10]=m.elements[8],S.__data[11]=0;else m.toArray(S.__data,x),x+=QJ.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,p,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(D,M,V,P){let _=D.value,I=M+"_"+V;if(P[I]===void 0){if(typeof _==="number"||typeof _==="boolean")P[I]=_;else P[I]=_.clone();return!0}else{let v=P[I];if(typeof _==="number"||typeof _==="boolean"){if(v!==_)return P[I]=_,!0}else if(v.equals(_)===!1)return v.copy(_),!0}return!1}function R(D){let M=D.uniforms,V=0,P=16;for(let I=0,v=M.length;I<v;I++){let z=Array.isArray(M[I])?M[I]:[M[I]];for(let C=0,S=z.length;C<S;C++){let p=z[C],d=Array.isArray(p.value)?p.value:[p.value];for(let x=0,a=d.length;x<a;x++){let m=d[x],QJ=k(m),l=V%P,qJ=l%QJ.boundary,NJ=l+qJ;if(V+=qJ,NJ!==0&&P-NJ<QJ.storage)V+=P-NJ;p.__data=new Float32Array(QJ.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=V,V+=QJ.storage}}}let _=V%P;if(_>0)V+=P-_;return D.__size=V,D.__cache={},this}function k(D){let M={boundary:0,storage:0};if(typeof D==="number"||typeof D==="boolean")M.boundary=4,M.storage=4;else if(D.isVector2)M.boundary=8,M.storage=8;else if(D.isVector3||D.isColor)M.boundary=16,M.storage=12;else if(D.isVector4)M.boundary=16,M.storage=16;else if(D.isMatrix3)M.boundary=48,M.storage=48;else if(D.isMatrix4)M.boundary=64,M.storage=64;else if(D.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D);return M}function F(D){let M=D.target;M.removeEventListener("dispose",F);let V=Y.indexOf(M.__bindingPointIndex);Y.splice(V,1),J.deleteBuffer(W[M.id]),delete W[M.id],delete H[M.id]}function O(){for(let D in W)J.deleteBuffer(W[D]);Y=[],W={},H={}}return{bind:K,update:U,dispose:O}}class vF{constructor(J={}){let{canvas:Q=SX(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let N=new Uint32Array(4),R=new Int32Array(4),k=null,F=null,O=[],D=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=m8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,V=!1;this._outputColorSpace=X9;let P=0,_=0,I=null,v=-1,z=null,C=new Z0,S=new Z0,p=null,d=new EJ(0),x=0,a=Q.width,m=Q.height,QJ=1,l=null,qJ=null,NJ=new Z0(0,0,a,m),jJ=new Z0(0,0,a,m),dJ=!1,G0=new x9,J0=!1,s=!1,OJ=new SJ,KJ=new w,zJ=new Z0,yJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xJ=!1;function H0(){return I===null?QJ:1}let A=$;function e(B,f){return Q.getContext(B,f)}try{let B={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${vY}`);if(Q.addEventListener("webglcontextlost",RJ,!1),Q.addEventListener("webglcontextrestored",GJ,!1),Q.addEventListener("webglcontextcreationerror",CJ,!1),A===null){if(A=e("webgl2",B),A===null)if(e("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let r,o,n,UJ,YJ,ZJ,uJ,cJ,sJ,T,L,y,c,JJ,u,LJ,XJ,_J,fJ,HJ,MJ,PJ,TJ,DJ;function iJ(){if(r=new a5(A),r.init(),PJ=new IF(A,r),o=new m5(A,r,J,PJ),n=new _F(A,r),o.reversedDepthBuffer&&E)n.buffers.depth.setReversed(!0);UJ=new e5(A),YJ=new qF,ZJ=new wF(A,r,n,YJ,o,PJ,UJ),uJ=new c5(M),cJ=new i5(M),sJ=new Hq(A),TJ=new l5(A,sJ),T=new r5(A,sJ,UJ,TJ),L=new QO(A,T,sJ,UJ),fJ=new JO(A,o,ZJ),LJ=new u5(YJ),y=new EF(M,uJ,cJ,r,o,TJ,LJ),c=new SF(M,YJ),JJ=new OF,u=new LF(r),_J=new p5(M,uJ,cJ,n,L,q,X),XJ=new BF(M,L,o),DJ=new jF(A,UJ,o,n),HJ=new d5(A,r,UJ),MJ=new t5(A,r,UJ),UJ.programs=y.programs,M.capabilities=o,M.extensions=r,M.properties=YJ,M.renderLists=JJ,M.shadowMap=XJ,M.state=n,M.info=UJ}iJ();let j=new AU(M,A);this.xr=j,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let B=r.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=r.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return QJ},this.setPixelRatio=function(B){if(B===void 0)return;QJ=B,this.setSize(a,m,!1)},this.getSize=function(B){return B.set(a,m)},this.setSize=function(B,f,b=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=B,m=f,Q.width=Math.floor(B*QJ),Q.height=Math.floor(f*QJ),b===!0)Q.style.width=B+"px",Q.style.height=f+"px";this.setViewport(0,0,B,f)},this.getDrawingBufferSize=function(B){return B.set(a*QJ,m*QJ).floor()},this.setDrawingBufferSize=function(B,f,b){a=B,m=f,QJ=b,Q.width=Math.floor(B*b),Q.height=Math.floor(f*b),this.setViewport(0,0,B,f)},this.getCurrentViewport=function(B){return B.copy(C)},this.getViewport=function(B){return B.copy(NJ)},this.setViewport=function(B,f,b,g){if(B.isVector4)NJ.set(B.x,B.y,B.z,B.w);else NJ.set(B,f,b,g);n.viewport(C.copy(NJ).multiplyScalar(QJ).round())},this.getScissor=function(B){return B.copy(jJ)},this.setScissor=function(B,f,b,g){if(B.isVector4)jJ.set(B.x,B.y,B.z,B.w);else jJ.set(B,f,b,g);n.scissor(S.copy(jJ).multiplyScalar(QJ).round())},this.getScissorTest=function(){return dJ},this.setScissorTest=function(B){n.setScissorTest(dJ=B)},this.setOpaqueSort=function(B){l=B},this.setTransparentSort=function(B){qJ=B},this.getClearColor=function(B){return B.copy(_J.getClearColor())},this.setClearColor=function(){_J.setClearColor(...arguments)},this.getClearAlpha=function(){return _J.getClearAlpha()},this.setClearAlpha=function(){_J.setClearAlpha(...arguments)},this.clear=function(B=!0,f=!0,b=!0){let g=0;if(B){let h=!1;if(I!==null){let WJ=I.texture.format;h=WJ===AZ||WJ===TZ||WJ===PZ}if(h){let WJ=I.texture.type,kJ=WJ===H9||WJ===B6||WJ===Y7||WJ===C6||WJ===wZ||WJ===IZ,wJ=_J.getClearColor(),BJ=_J.getClearAlpha(),hJ=wJ.r,gJ=wJ.g,AJ=wJ.b;if(kJ)N[0]=hJ,N[1]=gJ,N[2]=AJ,N[3]=BJ,A.clearBufferuiv(A.COLOR,0,N);else R[0]=hJ,R[1]=gJ,R[2]=AJ,R[3]=BJ,A.clearBufferiv(A.COLOR,0,R)}else g|=A.COLOR_BUFFER_BIT}if(f)g|=A.DEPTH_BUFFER_BIT;if(b)g|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);A.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",RJ,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",CJ,!1),_J.dispose(),JJ.dispose(),u.dispose(),YJ.dispose(),uJ.dispose(),cJ.dispose(),L.dispose(),TJ.dispose(),DJ.dispose(),y.dispose(),j.dispose(),j.removeEventListener("sessionstart",D8),j.removeEventListener("sessionend",L8),O9.stop()};function RJ(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function GJ(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let B=UJ.autoReset,f=XJ.enabled,b=XJ.autoUpdate,g=XJ.needsUpdate,h=XJ.type;iJ(),UJ.autoReset=B,XJ.enabled=f,XJ.autoUpdate=b,XJ.needsUpdate=g,XJ.type=h}function CJ(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function $J(B){let f=B.target;f.removeEventListener("dispose",$J),t(f)}function t(B){IJ(B),YJ.remove(B)}function IJ(B){let f=YJ.get(B).programs;if(f!==void 0){if(f.forEach(function(b){y.releaseProgram(b)}),B.isShaderMaterial)y.releaseShaderCache(B)}}this.renderBufferDirect=function(B,f,b,g,h,WJ){if(f===null)f=yJ;let kJ=h.isMesh&&h.matrixWorld.determinant()<0,wJ=XG(B,f,b,g,h);n.setMaterial(g,kJ);let BJ=b.index,hJ=1;if(g.wireframe===!0){if(BJ=T.getWireframeAttribute(b),BJ===void 0)return;hJ=2}let gJ=b.drawRange,AJ=b.attributes.position,tJ=gJ.start*hJ,X0=(gJ.start+gJ.count)*hJ;if(WJ!==null)tJ=Math.max(tJ,WJ.start*hJ),X0=Math.min(X0,(WJ.start+WJ.count)*hJ);if(BJ!==null)tJ=Math.max(tJ,0),X0=Math.min(X0,BJ.count);else if(AJ!==void 0&&AJ!==null)tJ=Math.max(tJ,0),X0=Math.min(X0,AJ.count);let M0=X0-tJ;if(M0<0||M0===1/0)return;TJ.setup(h,g,wJ,b,BJ);let q0,U0=HJ;if(BJ!==null)q0=sJ.get(BJ),U0=MJ,U0.setIndex(q0);if(h.isMesh)if(g.wireframe===!0)n.setLineWidth(g.wireframeLinewidth*H0()),U0.setMode(A.LINES);else U0.setMode(A.TRIANGLES);else if(h.isLine){let vJ=g.linewidth;if(vJ===void 0)vJ=1;if(n.setLineWidth(vJ*H0()),h.isLineSegments)U0.setMode(A.LINES);else if(h.isLineLoop)U0.setMode(A.LINE_LOOP);else U0.setMode(A.LINE_STRIP)}else if(h.isPoints)U0.setMode(A.POINTS);else if(h.isSprite)U0.setMode(A.TRIANGLES);if(h.isBatchedMesh)if(h._multiDrawInstances!==null)R6("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),U0.renderMultiDrawInstances(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount,h._multiDrawInstances);else if(!r.get("WEBGL_multi_draw")){let{_multiDrawStarts:vJ,_multiDrawCounts:O0,_multiDrawCount:W0}=h,n0=BJ?sJ.get(BJ).bytesPerElement:1,n9=YJ.get(g).currentProgram.getUniforms();for(let s0=0;s0<W0;s0++)n9.setValue(A,"_gl_DrawID",s0),U0.render(vJ[s0]/n0,O0[s0])}else U0.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)U0.renderInstances(tJ,M0,h.count);else if(b.isInstancedBufferGeometry){let vJ=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,O0=Math.min(b.instanceCount,vJ);U0.renderInstances(tJ,M0,O0)}else U0.render(tJ,M0)};function lJ(B,f,b){if(B.transparent===!0&&B.side===H8&&B.forceSinglePass===!1)B.side=e0,B.needsUpdate=!0,j7(B,f,b),B.side=Z9,B.needsUpdate=!0,j7(B,f,b),B.side=H8;else j7(B,f,b)}this.compile=function(B,f,b=null){if(b===null)b=B;if(F=u.get(b),F.init(f),D.push(F),b.traverseVisible(function(h){if(h.isLight&&h.layers.test(f.layers)){if(F.pushLight(h),h.castShadow)F.pushShadow(h)}}),B!==b)B.traverseVisible(function(h){if(h.isLight&&h.layers.test(f.layers)){if(F.pushLight(h),h.castShadow)F.pushShadow(h)}});F.setupLights();let g=new Set;return B.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let WJ=h.material;if(WJ)if(Array.isArray(WJ))for(let kJ=0;kJ<WJ.length;kJ++){let wJ=WJ[kJ];lJ(wJ,b,h),g.add(wJ)}else lJ(WJ,b,h),g.add(WJ)}),F=D.pop(),g},this.compileAsync=function(B,f,b=null){let g=this.compile(B,f,b);return new Promise((h)=>{function WJ(){if(g.forEach(function(kJ){if(YJ.get(kJ).currentProgram.isReady())g.delete(kJ)}),g.size===0){h(B);return}setTimeout(WJ,10)}if(r.get("KHR_parallel_shader_compile")!==null)WJ();else setTimeout(WJ,10)})};let K0=null;function Y0(B){if(K0)K0(B)}function D8(){O9.stop()}function L8(){O9.start()}let O9=new DU;if(O9.setAnimationLoop(Y0),typeof self<"u")O9.setContext(self);this.setAnimationLoop=function(B){K0=B,j.setAnimationLoop(B),B===null?O9.stop():O9.start()},j.addEventListener("sessionstart",D8),j.addEventListener("sessionend",L8),this.render=function(B,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(j.enabled===!0&&j.isPresenting===!0){if(j.cameraAutoUpdate===!0)j.updateCamera(f);f=j.getCamera()}if(B.isScene===!0)B.onBeforeRender(M,B,f,I);if(F=u.get(B,D.length),F.init(f),D.push(F),OJ.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),G0.setFromProjectionMatrix(OJ,GW,f.reversedDepth),s=this.localClippingEnabled,J0=LJ.init(this.clippingPlanes,s),k=JJ.get(B,O.length),k.init(),O.push(k),j.enabled===!0&&j.isPresenting===!0){let WJ=M.xr.getDepthSensingMesh();if(WJ!==null)T$(WJ,f,-1/0,M.sortObjects)}if(T$(B,f,0,M.sortObjects),k.finish(),M.sortObjects===!0)k.sort(l,qJ);if(xJ=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,xJ)_J.addToRenderList(k,B);if(this.info.render.frame++,J0===!0)LJ.beginShadows();let b=F.state.shadowsArray;if(XJ.render(b,B,f),J0===!0)LJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:h}=k;if(F.setupLights(),f.isArrayCamera){let WJ=f.cameras;if(h.length>0)for(let kJ=0,wJ=WJ.length;kJ<wJ;kJ++){let BJ=WJ[kJ];zH(g,h,B,BJ)}if(xJ)_J.render(B);for(let kJ=0,wJ=WJ.length;kJ<wJ;kJ++){let BJ=WJ[kJ];VH(k,B,BJ,BJ.viewport)}}else{if(h.length>0)zH(g,h,B,f);if(xJ)_J.render(B);VH(k,B,f)}if(I!==null&&_===0)ZJ.updateMultisampleRenderTarget(I),ZJ.updateRenderTargetMipmap(I);if(B.isScene===!0)B.onAfterRender(M,B,f);if(TJ.resetDefaultState(),v=-1,z=null,D.pop(),D.length>0){if(F=D[D.length-1],J0===!0)LJ.setGlobalState(M.clippingPlanes,F.state.camera)}else F=null;if(O.pop(),O.length>0)k=O[O.length-1];else k=null};function T$(B,f,b,g){if(B.visible===!1)return;if(B.layers.test(f.layers)){if(B.isGroup)b=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(f)}else if(B.isLight){if(F.pushLight(B),B.castShadow)F.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||G0.intersectsSprite(B)){if(g)zJ.setFromMatrixPosition(B.matrixWorld).applyMatrix4(OJ);let kJ=L.update(B),wJ=B.material;if(wJ.visible)k.push(B,kJ,wJ,b,zJ.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||G0.intersectsObject(B)){let kJ=L.update(B),wJ=B.material;if(g){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();zJ.copy(B.boundingSphere.center)}else{if(kJ.boundingSphere===null)kJ.computeBoundingSphere();zJ.copy(kJ.boundingSphere.center)}zJ.applyMatrix4(B.matrixWorld).applyMatrix4(OJ)}if(Array.isArray(wJ)){let BJ=kJ.groups;for(let hJ=0,gJ=BJ.length;hJ<gJ;hJ++){let AJ=BJ[hJ],tJ=wJ[AJ.materialIndex];if(tJ&&tJ.visible)k.push(B,kJ,tJ,b,zJ.z,AJ)}}else if(wJ.visible)k.push(B,kJ,wJ,b,zJ.z,null)}}}let WJ=B.children;for(let kJ=0,wJ=WJ.length;kJ<wJ;kJ++)T$(WJ[kJ],f,b,g)}function VH(B,f,b,g){let{opaque:h,transmissive:WJ,transparent:kJ}=B;if(F.setupLightsView(b),J0===!0)LJ.setGlobalState(M.clippingPlanes,b);if(g)n.viewport(C.copy(g));if(h.length>0)S7(h,f,b);if(WJ.length>0)S7(WJ,f,b);if(kJ.length>0)S7(kJ,f,b);n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),n.setPolygonOffset(!1)}function zH(B,f,b,g){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[g.id]===void 0)F.state.transmissionRenderTarget[g.id]=new M8(1,1,{generateMipmaps:!0,type:r.has("EXT_color_buffer_half_float")||r.has("EXT_color_buffer_float")?X7:H9,minFilter:c8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:aJ.workingColorSpace});let WJ=F.state.transmissionRenderTarget[g.id],kJ=g.viewport||C;WJ.setSize(kJ.z*M.transmissionResolutionScale,kJ.w*M.transmissionResolutionScale);let wJ=M.getRenderTarget(),BJ=M.getActiveCubeFace(),hJ=M.getActiveMipmapLevel();if(M.setRenderTarget(WJ),M.getClearColor(d),x=M.getClearAlpha(),x<1)M.setClearColor(16777215,0.5);if(M.clear(),xJ)_J.render(b);let gJ=M.toneMapping;M.toneMapping=m8;let AJ=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(F.setupLightsView(g),J0===!0)LJ.setGlobalState(M.clippingPlanes,g);if(S7(B,b,g),ZJ.updateMultisampleRenderTarget(WJ),ZJ.updateRenderTargetMipmap(WJ),r.has("WEBGL_multisampled_render_to_texture")===!1){let tJ=!1;for(let X0=0,M0=f.length;X0<M0;X0++){let q0=f[X0],U0=q0.object,vJ=q0.geometry,O0=q0.material,W0=q0.group;if(O0.side===H8&&U0.layers.test(g.layers)){let n0=O0.side;O0.side=e0,O0.needsUpdate=!0,BH(U0,b,g,vJ,O0,W0),O0.side=n0,O0.needsUpdate=!0,tJ=!0}}if(tJ===!0)ZJ.updateMultisampleRenderTarget(WJ),ZJ.updateRenderTargetMipmap(WJ)}if(M.setRenderTarget(wJ,BJ,hJ),M.setClearColor(d,x),AJ!==void 0)g.viewport=AJ;M.toneMapping=gJ}function S7(B,f,b){let g=f.isScene===!0?f.overrideMaterial:null;for(let h=0,WJ=B.length;h<WJ;h++){let kJ=B[h],wJ=kJ.object,BJ=kJ.geometry,hJ=kJ.group,gJ=kJ.material;if(gJ.allowOverride===!0&&g!==null)gJ=g;if(wJ.layers.test(b.layers))BH(wJ,f,b,BJ,gJ,hJ)}}function BH(B,f,b,g,h,WJ){if(B.onBeforeRender(M,f,b,g,h,WJ),B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),h.onBeforeRender(M,f,b,g,B,WJ),h.transparent===!0&&h.side===H8&&h.forceSinglePass===!1)h.side=e0,h.needsUpdate=!0,M.renderBufferDirect(b,f,g,h,B,WJ),h.side=Z9,h.needsUpdate=!0,M.renderBufferDirect(b,f,g,h,B,WJ),h.side=H8;else M.renderBufferDirect(b,f,g,h,B,WJ);B.onAfterRender(M,f,b,g,h,WJ)}function j7(B,f,b){if(f.isScene!==!0)f=yJ;let g=YJ.get(B),h=F.state.lights,WJ=F.state.shadowsArray,kJ=h.state.version,wJ=y.getParameters(B,h.state,WJ,f,b),BJ=y.getProgramCacheKey(wJ),hJ=g.programs;if(g.environment=B.isMeshStandardMaterial?f.environment:null,g.fog=f.fog,g.envMap=(B.isMeshStandardMaterial?cJ:uJ).get(B.envMap||g.environment),g.envMapRotation=g.environment!==null&&B.envMap===null?f.environmentRotation:B.envMapRotation,hJ===void 0)B.addEventListener("dispose",$J),hJ=new Map,g.programs=hJ;let gJ=hJ.get(BJ);if(gJ!==void 0){if(g.currentProgram===gJ&&g.lightsStateVersion===kJ)return _H(B,wJ),gJ}else wJ.uniforms=y.getUniforms(B),B.onBeforeCompile(wJ,M),gJ=y.acquireProgram(wJ,BJ),hJ.set(BJ,gJ),g.uniforms=wJ.uniforms;let AJ=g.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)AJ.clippingPlanes=LJ.uniform;if(_H(B,wJ),g.needsLights=UG(B),g.lightsStateVersion=kJ,g.needsLights)AJ.ambientLightColor.value=h.state.ambient,AJ.lightProbe.value=h.state.probe,AJ.directionalLights.value=h.state.directional,AJ.directionalLightShadows.value=h.state.directionalShadow,AJ.spotLights.value=h.state.spot,AJ.spotLightShadows.value=h.state.spotShadow,AJ.rectAreaLights.value=h.state.rectArea,AJ.ltc_1.value=h.state.rectAreaLTC1,AJ.ltc_2.value=h.state.rectAreaLTC2,AJ.pointLights.value=h.state.point,AJ.pointLightShadows.value=h.state.pointShadow,AJ.hemisphereLights.value=h.state.hemi,AJ.directionalShadowMap.value=h.state.directionalShadowMap,AJ.directionalShadowMatrix.value=h.state.directionalShadowMatrix,AJ.spotShadowMap.value=h.state.spotShadowMap,AJ.spotLightMatrix.value=h.state.spotLightMatrix,AJ.spotLightMap.value=h.state.spotLightMap,AJ.pointShadowMap.value=h.state.pointShadowMap,AJ.pointShadowMatrix.value=h.state.pointShadowMatrix;return g.currentProgram=gJ,g.uniformsList=null,gJ}function CH(B){if(B.uniformsList===null){let f=B.currentProgram.getUniforms();B.uniformsList=T7.seqWithValue(f.seq,B.uniforms)}return B.uniformsList}function _H(B,f){let b=YJ.get(B);b.outputColorSpace=f.outputColorSpace,b.batching=f.batching,b.batchingColor=f.batchingColor,b.instancing=f.instancing,b.instancingColor=f.instancingColor,b.instancingMorph=f.instancingMorph,b.skinning=f.skinning,b.morphTargets=f.morphTargets,b.morphNormals=f.morphNormals,b.morphColors=f.morphColors,b.morphTargetsCount=f.morphTargetsCount,b.numClippingPlanes=f.numClippingPlanes,b.numIntersection=f.numClipIntersection,b.vertexAlphas=f.vertexAlphas,b.vertexTangents=f.vertexTangents,b.toneMapping=f.toneMapping}function XG(B,f,b,g,h){if(f.isScene!==!0)f=yJ;ZJ.resetTextureUnits();let WJ=f.fog,kJ=g.isMeshStandardMaterial?f.environment:null,wJ=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:g0,BJ=(g.isMeshStandardMaterial?cJ:uJ).get(g.envMap||kJ),hJ=g.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,gJ=!!b.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),AJ=!!b.morphAttributes.position,tJ=!!b.morphAttributes.normal,X0=!!b.morphAttributes.color,M0=m8;if(g.toneMapped){if(I===null||I.isXRRenderTarget===!0)M0=M.toneMapping}let q0=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,U0=q0!==void 0?q0.length:0,vJ=YJ.get(g),O0=F.state.lights;if(J0===!0){if(s===!0||B!==z){let h0=B===z&&g.id===v;LJ.setState(g,B,h0)}}let W0=!1;if(g.version===vJ.__version){if(vJ.needsLights&&vJ.lightsStateVersion!==O0.state.version)W0=!0;else if(vJ.outputColorSpace!==wJ)W0=!0;else if(h.isBatchedMesh&&vJ.batching===!1)W0=!0;else if(!h.isBatchedMesh&&vJ.batching===!0)W0=!0;else if(h.isBatchedMesh&&vJ.batchingColor===!0&&h.colorTexture===null)W0=!0;else if(h.isBatchedMesh&&vJ.batchingColor===!1&&h.colorTexture!==null)W0=!0;else if(h.isInstancedMesh&&vJ.instancing===!1)W0=!0;else if(!h.isInstancedMesh&&vJ.instancing===!0)W0=!0;else if(h.isSkinnedMesh&&vJ.skinning===!1)W0=!0;else if(!h.isSkinnedMesh&&vJ.skinning===!0)W0=!0;else if(h.isInstancedMesh&&vJ.instancingColor===!0&&h.instanceColor===null)W0=!0;else if(h.isInstancedMesh&&vJ.instancingColor===!1&&h.instanceColor!==null)W0=!0;else if(h.isInstancedMesh&&vJ.instancingMorph===!0&&h.morphTexture===null)W0=!0;else if(h.isInstancedMesh&&vJ.instancingMorph===!1&&h.morphTexture!==null)W0=!0;else if(vJ.envMap!==BJ)W0=!0;else if(g.fog===!0&&vJ.fog!==WJ)W0=!0;else if(vJ.numClippingPlanes!==void 0&&(vJ.numClippingPlanes!==LJ.numPlanes||vJ.numIntersection!==LJ.numIntersection))W0=!0;else if(vJ.vertexAlphas!==hJ)W0=!0;else if(vJ.vertexTangents!==gJ)W0=!0;else if(vJ.morphTargets!==AJ)W0=!0;else if(vJ.morphNormals!==tJ)W0=!0;else if(vJ.morphColors!==X0)W0=!0;else if(vJ.toneMapping!==M0)W0=!0;else if(vJ.morphTargetsCount!==U0)W0=!0}else W0=!0,vJ.__version=g.version;let n0=vJ.currentProgram;if(W0===!0)n0=j7(g,f,h);let n9=!1,s0=!1,f6=!1,F0=n0.getUniforms(),$8=vJ.uniforms;if(n.useProgram(n0.program))n9=!0,s0=!0,f6=!0;if(g.id!==v)v=g.id,s0=!0;if(n9||z!==B){if(n.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();F0.setValue(A,"projectionMatrix",B.projectionMatrix),F0.setValue(A,"viewMatrix",B.matrixWorldInverse);let l0=F0.map.cameraPosition;if(l0!==void 0)l0.setValue(A,KJ.setFromMatrixPosition(B.matrixWorld));if(o.logarithmicDepthBuffer)F0.setValue(A,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)F0.setValue(A,"isOrthographic",B.isOrthographicCamera===!0);if(z!==B)z=B,s0=!0,f6=!0}if(h.isSkinnedMesh){F0.setOptional(A,h,"bindMatrix"),F0.setOptional(A,h,"bindMatrixInverse");let h0=h.skeleton;if(h0){if(h0.boneTexture===null)h0.computeBoneTexture();F0.setValue(A,"boneTexture",h0.boneTexture,ZJ)}}if(h.isBatchedMesh){if(F0.setOptional(A,h,"batchingTexture"),F0.setValue(A,"batchingTexture",h._matricesTexture,ZJ),F0.setOptional(A,h,"batchingIdTexture"),F0.setValue(A,"batchingIdTexture",h._indirectTexture,ZJ),F0.setOptional(A,h,"batchingColorTexture"),h._colorsTexture!==null)F0.setValue(A,"batchingColorTexture",h._colorsTexture,ZJ)}let Z8=b.morphAttributes;if(Z8.position!==void 0||Z8.normal!==void 0||Z8.color!==void 0)fJ.update(h,b,n0);if(s0||vJ.receiveShadow!==h.receiveShadow)vJ.receiveShadow=h.receiveShadow,F0.setValue(A,"receiveShadow",h.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)$8.envMap.value=BJ,$8.flipEnvMap.value=BJ.isCubeTexture&&BJ.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&f.environment!==null)$8.envMapIntensity.value=f.environmentIntensity;if(s0){if(F0.setValue(A,"toneMappingExposure",M.toneMappingExposure),vJ.needsLights)KG($8,f6);if(WJ&&g.fog===!0)c.refreshFogUniforms($8,WJ);c.refreshMaterialUniforms($8,g,QJ,m,F.state.transmissionRenderTarget[B.id]),T7.upload(A,CH(vJ),$8,ZJ)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)T7.upload(A,CH(vJ),$8,ZJ),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)F0.setValue(A,"center",h.center);if(F0.setValue(A,"modelViewMatrix",h.modelViewMatrix),F0.setValue(A,"normalMatrix",h.normalMatrix),F0.setValue(A,"modelMatrix",h.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let h0=g.uniformsGroups;for(let l0=0,A$=h0.length;l0<A$;l0++){let F9=h0[l0];DJ.update(F9,n0),DJ.bind(F9,n0)}}return n0}function KG(B,f){B.ambientLightColor.needsUpdate=f,B.lightProbe.needsUpdate=f,B.directionalLights.needsUpdate=f,B.directionalLightShadows.needsUpdate=f,B.pointLights.needsUpdate=f,B.pointLightShadows.needsUpdate=f,B.spotLights.needsUpdate=f,B.spotLightShadows.needsUpdate=f,B.rectAreaLights.needsUpdate=f,B.hemisphereLights.needsUpdate=f}function UG(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(B,f,b){let g=YJ.get(B);if(g.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;YJ.get(B.texture).__webglTexture=f,YJ.get(B.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:b,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,f){let b=YJ.get(B);b.__webglFramebuffer=f,b.__useDefaultFramebuffer=f===void 0};let GG=A.createFramebuffer();this.setRenderTarget=function(B,f=0,b=0){I=B,P=f,_=b;let g=!0,h=null,WJ=!1,kJ=!1;if(B){let BJ=YJ.get(B);if(BJ.__useDefaultFramebuffer!==void 0)n.bindFramebuffer(A.FRAMEBUFFER,null),g=!1;else if(BJ.__webglFramebuffer===void 0)ZJ.setupRenderTarget(B);else if(BJ.__hasExternalTextures)ZJ.rebindTextures(B,YJ.get(B.texture).__webglTexture,YJ.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let AJ=B.depthTexture;if(BJ.__boundDepthTexture!==AJ){if(AJ!==null&&YJ.has(AJ)&&(B.width!==AJ.image.width||B.height!==AJ.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ZJ.setupDepthRenderbuffer(B)}}let hJ=B.texture;if(hJ.isData3DTexture||hJ.isDataArrayTexture||hJ.isCompressedArrayTexture)kJ=!0;let gJ=YJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(gJ[f]))h=gJ[f][b];else h=gJ[f];WJ=!0}else if(B.samples>0&&ZJ.useMultisampledRTT(B)===!1)h=YJ.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(gJ))h=gJ[b];else h=gJ;C.copy(B.viewport),S.copy(B.scissor),p=B.scissorTest}else C.copy(NJ).multiplyScalar(QJ).floor(),S.copy(jJ).multiplyScalar(QJ).floor(),p=dJ;if(b!==0)h=GG;if(n.bindFramebuffer(A.FRAMEBUFFER,h)&&g)n.drawBuffers(B,h);if(n.viewport(C),n.scissor(S),n.setScissorTest(p),WJ){let BJ=YJ.get(B.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+f,BJ.__webglTexture,b)}else if(kJ){let BJ=f;for(let hJ=0;hJ<B.textures.length;hJ++){let gJ=YJ.get(B.textures[hJ]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+hJ,gJ.__webglTexture,b,BJ)}}else if(B!==null&&b!==0){let BJ=YJ.get(B.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,BJ.__webglTexture,b)}v=-1},this.readRenderTargetPixels=function(B,f,b,g,h,WJ,kJ,wJ=0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let BJ=YJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&kJ!==void 0)BJ=BJ[kJ];if(BJ){n.bindFramebuffer(A.FRAMEBUFFER,BJ);try{let hJ=B.textures[wJ],gJ=hJ.format,AJ=hJ.type;if(!o.textureFormatReadable(gJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!o.textureTypeReadable(AJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=B.width-g&&(b>=0&&b<=B.height-h)){if(B.textures.length>1)A.readBuffer(A.COLOR_ATTACHMENT0+wJ);A.readPixels(f,b,g,h,PJ.convert(gJ),PJ.convert(AJ),WJ)}}finally{let hJ=I!==null?YJ.get(I).__webglFramebuffer:null;n.bindFramebuffer(A.FRAMEBUFFER,hJ)}}},this.readRenderTargetPixelsAsync=async function(B,f,b,g,h,WJ,kJ,wJ=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let BJ=YJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&kJ!==void 0)BJ=BJ[kJ];if(BJ)if(f>=0&&f<=B.width-g&&(b>=0&&b<=B.height-h)){n.bindFramebuffer(A.FRAMEBUFFER,BJ);let hJ=B.textures[wJ],gJ=hJ.format,AJ=hJ.type;if(!o.textureFormatReadable(gJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!o.textureTypeReadable(AJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tJ=A.createBuffer();if(A.bindBuffer(A.PIXEL_PACK_BUFFER,tJ),A.bufferData(A.PIXEL_PACK_BUFFER,WJ.byteLength,A.STREAM_READ),B.textures.length>1)A.readBuffer(A.COLOR_ATTACHMENT0+wJ);A.readPixels(f,b,g,h,PJ.convert(gJ),PJ.convert(AJ),0);let X0=I!==null?YJ.get(I).__webglFramebuffer:null;n.bindFramebuffer(A.FRAMEBUFFER,X0);let M0=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await jX(A,M0,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,tJ),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,WJ),A.deleteBuffer(tJ),A.deleteSync(M0),WJ}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,f=null,b=0){let g=Math.pow(2,-b),h=Math.floor(B.image.width*g),WJ=Math.floor(B.image.height*g),kJ=f!==null?f.x:0,wJ=f!==null?f.y:0;ZJ.setTexture2D(B,0),A.copyTexSubImage2D(A.TEXTURE_2D,b,0,0,kJ,wJ,h,WJ),n.unbindTexture()};let EG=A.createFramebuffer(),qG=A.createFramebuffer();if(this.copyTextureToTexture=function(B,f,b=null,g=null,h=0,WJ=null){if(WJ===null)if(h!==0)R6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),WJ=h,h=0;else WJ=0;let kJ,wJ,BJ,hJ,gJ,AJ,tJ,X0,M0,q0=B.isCompressedTexture?B.mipmaps[WJ]:B.image;if(b!==null)kJ=b.max.x-b.min.x,wJ=b.max.y-b.min.y,BJ=b.isBox3?b.max.z-b.min.z:1,hJ=b.min.x,gJ=b.min.y,AJ=b.isBox3?b.min.z:0;else{let Z8=Math.pow(2,-h);if(kJ=Math.floor(q0.width*Z8),wJ=Math.floor(q0.height*Z8),B.isDataArrayTexture)BJ=q0.depth;else if(B.isData3DTexture)BJ=Math.floor(q0.depth*Z8);else BJ=1;hJ=0,gJ=0,AJ=0}if(g!==null)tJ=g.x,X0=g.y,M0=g.z;else tJ=0,X0=0,M0=0;let U0=PJ.convert(f.format),vJ=PJ.convert(f.type),O0;if(f.isData3DTexture)ZJ.setTexture3D(f,0),O0=A.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)ZJ.setTexture2DArray(f,0),O0=A.TEXTURE_2D_ARRAY;else ZJ.setTexture2D(f,0),O0=A.TEXTURE_2D;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,f.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,f.unpackAlignment);let W0=A.getParameter(A.UNPACK_ROW_LENGTH),n0=A.getParameter(A.UNPACK_IMAGE_HEIGHT),n9=A.getParameter(A.UNPACK_SKIP_PIXELS),s0=A.getParameter(A.UNPACK_SKIP_ROWS),f6=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,q0.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,q0.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hJ),A.pixelStorei(A.UNPACK_SKIP_ROWS,gJ),A.pixelStorei(A.UNPACK_SKIP_IMAGES,AJ);let F0=B.isDataArrayTexture||B.isData3DTexture,$8=f.isDataArrayTexture||f.isData3DTexture;if(B.isDepthTexture){let Z8=YJ.get(B),h0=YJ.get(f),l0=YJ.get(Z8.__renderTarget),A$=YJ.get(h0.__renderTarget);n.bindFramebuffer(A.READ_FRAMEBUFFER,l0.__webglFramebuffer),n.bindFramebuffer(A.DRAW_FRAMEBUFFER,A$.__webglFramebuffer);for(let F9=0;F9<BJ;F9++){if(F0)A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,YJ.get(B).__webglTexture,h,AJ+F9),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,YJ.get(f).__webglTexture,WJ,M0+F9);A.blitFramebuffer(hJ,gJ,kJ,wJ,tJ,X0,kJ,wJ,A.DEPTH_BUFFER_BIT,A.NEAREST)}n.bindFramebuffer(A.READ_FRAMEBUFFER,null),n.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(h!==0||B.isRenderTargetTexture||YJ.has(B)){let Z8=YJ.get(B),h0=YJ.get(f);n.bindFramebuffer(A.READ_FRAMEBUFFER,EG),n.bindFramebuffer(A.DRAW_FRAMEBUFFER,qG);for(let l0=0;l0<BJ;l0++){if(F0)A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z8.__webglTexture,h,AJ+l0);else A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Z8.__webglTexture,h);if($8)A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,h0.__webglTexture,WJ,M0+l0);else A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,h0.__webglTexture,WJ);if(h!==0)A.blitFramebuffer(hJ,gJ,kJ,wJ,tJ,X0,kJ,wJ,A.COLOR_BUFFER_BIT,A.NEAREST);else if($8)A.copyTexSubImage3D(O0,WJ,tJ,X0,M0+l0,hJ,gJ,kJ,wJ);else A.copyTexSubImage2D(O0,WJ,tJ,X0,hJ,gJ,kJ,wJ)}n.bindFramebuffer(A.READ_FRAMEBUFFER,null),n.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if($8)if(B.isDataTexture||B.isData3DTexture)A.texSubImage3D(O0,WJ,tJ,X0,M0,kJ,wJ,BJ,U0,vJ,q0.data);else if(f.isCompressedArrayTexture)A.compressedTexSubImage3D(O0,WJ,tJ,X0,M0,kJ,wJ,BJ,U0,q0.data);else A.texSubImage3D(O0,WJ,tJ,X0,M0,kJ,wJ,BJ,U0,vJ,q0);else if(B.isDataTexture)A.texSubImage2D(A.TEXTURE_2D,WJ,tJ,X0,kJ,wJ,U0,vJ,q0.data);else if(B.isCompressedTexture)A.compressedTexSubImage2D(A.TEXTURE_2D,WJ,tJ,X0,q0.width,q0.height,U0,q0.data);else A.texSubImage2D(A.TEXTURE_2D,WJ,tJ,X0,kJ,wJ,U0,vJ,q0);if(A.pixelStorei(A.UNPACK_ROW_LENGTH,W0),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,n0),A.pixelStorei(A.UNPACK_SKIP_PIXELS,n9),A.pixelStorei(A.UNPACK_SKIP_ROWS,s0),A.pixelStorei(A.UNPACK_SKIP_IMAGES,f6),WJ===0&&f.generateMipmaps)A.generateMipmap(O0);n.unbindTexture()},this.initRenderTarget=function(B){if(YJ.get(B).__webglFramebuffer===void 0)ZJ.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)ZJ.setTextureCube(B,0);else if(B.isData3DTexture)ZJ.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ZJ.setTexture2DArray(B,0);else ZJ.setTexture2D(B,0);n.unbindTexture()},this.resetState=function(){P=0,_=0,I=null,n.reset(),TJ.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return GW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=aJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=aJ._getUnpackColorSpace()}}function OH(J,Q){if(Q===YW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===_6||Q===U7){let $=J.getIndex();if($===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===_6)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class fU extends S0{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new pU(Q)}),this.register(function(Q){return new iU(Q)}),this.register(function(Q){return new aU(Q)}),this.register(function(Q){return new rU(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new uU(Q)}),this.register(function(Q){return new cU(Q)}),this.register(function(Q){return new xU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new oU(Q)}),this.register(function(Q){return new sU(Q)}),this.register(function(Q){return new hU(Q)}),this.register(function(Q){return new tU(Q)}),this.register(function(Q){return new eU(Q)})}load(J,Q,$,Z){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=w8.extractUrlBase(J);H=w8.resolveURL(K,this.path)}else H=w8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new t0(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===JG){try{H[rJ.KHR_BINARY_GLTF]=new QG(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(H[rJ.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new YG(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case rJ.KHR_MATERIALS_UNLIT:H[G]=new bU;break;case rJ.KHR_DRACO_MESH_COMPRESSION:H[G]=new $G(W,this.dracoLoader);break;case rJ.KHR_TEXTURE_TRANSFORM:H[G]=new ZG;break;case rJ.KHR_MESH_QUANTIZATION:H[G]=new WG;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function yF(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var rJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hU{constructor(J){this.parser=J,this.name=rJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new EJ(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],g0);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new I7(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new w7(U),K.distance=G;break;case"spot":K=new _7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),A8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class bU{constructor(){this.name=rJ.KHR_MATERIALS_UNLIT}getMaterialType(){return p0}extendParams(J,Q,$){let Z=[];J.color=new EJ(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],g0),J.opacity=H[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,X9))}return Promise.all(Z)}}class xU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class gU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new i(Y,Y)}}return Promise.all(W)}}class pU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class lU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class dU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new EJ(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=Z.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],g0)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,X9));if(H.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class mU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class uU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new EJ().setRGB(Y[0],Y[1],Y[2],g0),Promise.all(W)}}class cU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class nU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new EJ().setRGB(Y[0],Y[1],Y[2],g0),H.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",H.specularColorTexture,X9));return Promise.all(W)}}class sU{constructor(J){this.parser=J,this.name=rJ.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class oU{constructor(J){this.parser=J,this.name=rJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return c0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class iU{constructor(J){this.parser=J,this.name=rJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class aU{constructor(J){this.parser=J,this.name=rJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class rU{constructor(J){this.parser=J,this.name=rJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class tU{constructor(J){this.name=rJ.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=Z.byteOffset||0,K=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class eU{constructor(J){this.name=rJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==K8.TRIANGLES&&K.mode!==K8.TRIANGLE_STRIP&&K.mode!==K8.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=$.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let N of G){let R=new SJ,k=new w,F=new T0,O=new w(1,1,1),D=new R7(N.geometry,N.material,E);for(let M=0;M<E;M++){if(X.TRANSLATION)k.fromBufferAttribute(X.TRANSLATION,M);if(X.ROTATION)F.fromBufferAttribute(X.ROTATION,M);if(X.SCALE)O.fromBufferAttribute(X.SCALE,M);D.setMatrixAt(M,R.compose(k,F,O))}for(let M in X)if(M==="_COLOR_0"){let V=X[M];D.instanceColor=new _8(V.array,V.itemSize,V.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE")N.geometry.setAttribute(M,X[M]);eJ.prototype.copy.call(D,N),this.parser.assignFinalMaterial(D),q.push(D)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var JG="glTF",A7=12,SU={JSON:1313821514,BIN:5130562};class QG{constructor(J){this.name=rJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,A7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==JG)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-A7,W=new DataView(J,A7),H=0;while(H<Z){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===SU.JSON){let K=new Uint8Array(J,A7+H,Y);this.content=$.decode(K)}else if(X===SU.BIN){let K=A7+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class $G{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=MH[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=MH[U]||U.toLowerCase();if(H[U]!==void 0){let E=$.accessors[J.attributes[U]],q=y6[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let N in q.attributes){let R=q.attributes[N],k=X[N];if(k!==void 0)R.normalized=k}G(q)},Y,K,g0,E)})})}}class ZG{constructor(){this.name=rJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class WG{constructor(){this.name=rJ.KHR_MESH_QUANTIZATION}}class LH extends G9{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let H=0;H!==Z;H++)Q[H]=$[W+H];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=Z-Q,G=($-Q)/U,E=G*G,q=E*G,N=J*K,R=N-K,k=-2*q+3*E,F=q-E,O=1-k,D=F-E+G;for(let M=0;M!==Y;M++){let V=H[R+M+Y],P=H[R+M+X]*U,_=H[N+M+Y],I=H[N+M]*U;W[M]=O*V+D*P+k*_+F*I}return W}}var fF=new T0;class HG extends LH{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return fF.fromArray(W).normalize().toArray(W),W}}var K8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},y6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jU={9728:u8,9729:R8,9984:fQ,9985:z6,9986:v9,9987:c8},vU={33071:vQ,33648:yQ,10497:V6},FH={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},MH={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},N9={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hF={CUBICSPLINE:void 0,LINEAR:lQ,STEP:HW},RH={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bF(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new g9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Z9});return J.DefaultMaterial}function c9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function A8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function xF(J,Q,$){let Z=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if(Z&&W&&H)break}if(!Z&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(Z){let q=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function gF(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pF(J){let Q,$=J.extensions&&J.extensions[rJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+kH($.attributes);else Q=J.indices+":"+kH(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+kH(J.targets[Z]);return Q}function kH(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function DH(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lF(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var dF=new SJ;class YG{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new yF,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&H<98)this.textureLoader=new D$(this.options.manager);else this.textureLoader=new z$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new t0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][Z.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:Z.asset,parser:$,userData:{}};return c9(W,Y,Z),A8(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[rJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,H){$.load(w8.resolveURL(Q.uri,Z.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let H=FH[Z.type],Y=y6[Z.componentType],X=Z.normalized===!0,K=new Y(Z.count*H);return Promise.resolve(new $0(K,H,X))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=FH[Z.type],K=y6[Z.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=Z.byteOffset||0,q=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,N=Z.normalized===!0,R,k;if(q&&q!==G){let F=Math.floor(E/q),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+F+":"+Z.count,D=Q.cache.get(O);if(!D)R=new K(Y,F*q,Z.count*q/U),D=new K9(R,q/U),Q.cache.add(O,D);k=new C8(D,X,E%q/U,N)}else{if(Y===null)R=new K(Z.count*X);else R=new K(Y,E,Z.count*X);k=new $0(R,X,N)}if(Z.sparse!==void 0){let F=FH.SCALAR,O=y6[Z.sparse.indices.componentType],D=Z.sparse.indices.byteOffset||0,M=Z.sparse.values.byteOffset||0,V=new O(H[1],D,Z.sparse.count*F),P=new K(H[2],M,Z.sparse.count*X);if(Y!==null)k=new $0(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let _=0,I=V.length;_<I;_++){let v=V[_];if(k.setX(v,P[_*X]),X>=2)k.setY(v,P[_*X+1]);if(X>=3)k.setZ(v,P[_*X+2]);if(X>=4)k.setW(v,P[_*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=N}return k})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=$.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=jU[E.magFilter]||R8,U.minFilter=jU[E.minFilter]||c8,U.wrapS=vU[E.wrapS]||V6,U.wrapT=vU[E.wrapT]||V6,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==u8&&U.minFilter!==R8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=Z.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=$.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let N=E;if(Q.isImageBitmapLoader===!0)N=function(R){let k=new N0(R);k.needsUpdate=!0,E(k)};Q.load(w8.resolveURL(G,W.path),N,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return A8(G,H),G.userData.mimeType=H.mimeType||lF(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(W.extensions[rJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[rJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[rJ.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if(Z!==void 0)H.colorSpace=Z;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new T6,V0.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new A0,V0.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||W||H){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return g9}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[rJ.KHR_MATERIALS_UNLIT]){let G=Z[rJ.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new EJ(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],g0),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,X9));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=H8;let U=W.alphaMode||RH.OPAQUE;if(U===RH.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===RH.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==p0){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new i(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==p0){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==p0){let G=W.emissiveFactor;Y.emissive=new EJ().setRGB(G[0],G[1],G[2],g0)}if(W.emissiveTexture!==void 0&&H!==p0)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,X9));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(A8(G,W),Q.associations.set(G,{materials:J}),W.extensions)c9(Z,G,W);return G})}createUniqueName(J){let Q=Q0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[rJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return yU(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=pF(K),G=Z[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[rJ.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=yU(new pJ,K,Q);Z[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?bF(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,N=U.length;q<N;q++){let R=U[q],k=H[q],F,O=K[q];if(k.mode===K8.TRIANGLES||k.mode===K8.TRIANGLE_STRIP||k.mode===K8.TRIANGLE_FAN||k.mode===void 0){if(F=W.isSkinnedMesh===!0?new F7(R,O):new k0(R,O),F.isSkinnedMesh===!0)F.normalizeSkinWeights();if(k.mode===K8.TRIANGLE_STRIP)F.geometry=OH(F.geometry,U7);else if(k.mode===K8.TRIANGLE_FAN)F.geometry=OH(F.geometry,_6)}else if(k.mode===K8.LINES)F=new J8(R,O);else if(k.mode===K8.LINE_STRIP)F=new F8(R,O);else if(k.mode===K8.LINE_LOOP)F=new k7(R,O);else if(k.mode===K8.POINTS)F=new M7(R,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(F.geometry.morphAttributes).length>0)gF(F,W);if(F.name=Q.createUniqueName(W.name||"mesh_"+J),A8(F,W),k.extensions)c9(Z,F,k);Q.assignFinalMaterial(F),G.push(F)}for(let q=0,N=G.length;q<N;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)c9(Z,G[0],W);return G[0]}let E=new q8;if(W.extensions)c9(Z,E,W);Q.associations.set(E,{meshes:J});for(let q=0,N=G.length;q<N;q++)E.add(G[q]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new B0(qW.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new p9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return A8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),H=Z,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new SJ;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new P6(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],N=Z.samplers[q.sampler],R=q.target,k=R.node,F=Z.parameters!==void 0?Z.parameters[N.input]:N.input,O=Z.parameters!==void 0?Z.parameters[N.output]:N.output;if(R.node===void 0)continue;H.push(this.getDependency("node",k)),Y.push(this.getDependency("accessor",F)),X.push(this.getDependency("accessor",O)),K.push(N),U.push(R)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],N=G[2],R=G[3],k=G[4],F=[];for(let D=0,M=E.length;D<M;D++){let V=E[D],P=q[D],_=N[D],I=R[D],v=k[D];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let z=$._createAnimationTracks(V,P,_,I,v);if(z)for(let C=0;C<z.length;C++)F.push(z[C])}let O=new $9(W,void 0,F);return A8(O,Z),O})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let H=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=Z.weights.length;X<K;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return H})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),H=[],Y=Z.children||[];for(let K=0,U=Y.length;K<U;K++)H.push($.getDependency("node",Y[K]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,dF)});for(let q=0,N=G.length;q<N;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?Z.createUniqueName(W.name):"",Y=[],X=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new I6;else if(K.length>1)U=new q8;else if(K.length===1)U=K[0];else U=new eJ;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(A8(U,W),W.extensions)c9($,U,W);if(W.matrix!==void 0){let G=new SJ;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new q8;if($.name)W.name=Z.createUniqueName($.name);if(A8(W,$),$.extensions)c9(Q,W,$);let H=$.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push(Z.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof V0||E instanceof N0)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(N9[W.path]===N9.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(N9[W.path]){case N9.weights:K=l8;break;case N9.rotation:K=n8;break;case N9.translation:case N9.scale:K=d8;break;default:switch($.itemSize){case 1:K=l8;break;case 2:case 3:default:K=d8;break}break}let U=Z.interpolation!==void 0?hF[Z.interpolation]:lQ,G=this._getArrayFromAccessor($);for(let E=0,q=X.length;E<q;E++){let N=new K(X[E]+"."+N9[W.path],Q.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(N);H.push(N)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=DH(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof n8?HG:LH)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mF(J,Q,$){let Z=Q.attributes,W=new _0;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new w(K[0],K[1],K[2]),new w(U[0],U[1],U[2])),X.normalized){let G=DH(y6[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new w,K=new w;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=$.json.accessors[E.POSITION],N=q.min,R=q.max;if(N!==void 0&&R!==void 0){if(K.setX(Math.max(Math.abs(N[0]),Math.abs(R[0]))),K.setY(Math.max(Math.abs(N[1]),Math.abs(R[1]))),K.setZ(Math.max(Math.abs(N[2]),Math.abs(R[2]))),q.normalized){let k=DH(y6[q.componentType]);K.multiplyScalar(k)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new C0;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function yU(J,Q,$){let Z=Q.attributes,W=[];function H(Y,X){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in Z){let X=MH[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(aJ.workingColorSpace!==g0&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${aJ.workingColorSpace}" not supported.`);return A8(J,Q),mF(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?xF(J,Q.targets,$):J})}export{SX as createCanvasElement,bG as ZeroStencilOp,AG as ZeroSlopeEnding,dY as ZeroFactor,TG as ZeroCurvatureEnding,SG as WrapAroundEnding,AW as WireframeGeometry,O7 as WebXRController,UE as WebGPUCoordinateSystem,IF as WebGLUtils,vF as WebGLRenderer,M8 as WebGLRenderTarget,kW as WebGLCubeRenderTarget,GW as WebGLCoordinateSystem,vX as WebGLArrayRenderTarget,yX as WebGL3DRenderTarget,zW as VideoTexture,nX as VideoFrameTexture,d8 as VectorKeyframeTrack,Z0 as Vector4,w as Vector3,i as Vector2,I8 as VSMShadowMap,Y7 as UnsignedShortType,IZ as UnsignedShort5551Type,wZ as UnsignedShort4444Type,B6 as UnsignedIntType,FX as UnsignedInt5999Type,C6 as UnsignedInt248Type,RX as UnsignedInt101111Type,H9 as UnsignedByteType,mX as UniformsUtils,FJ as UniformsLib,CK as UniformsGroup,ZH as Uniform,gX as Uint8ClampedBufferAttribute,xX as Uint8BufferAttribute,uQ as Uint32BufferAttribute,mQ as Uint16BufferAttribute,DG as UVMapping,N$ as TubeGeometry,YW as TrianglesDrawMode,U7 as TriangleStripDrawMode,_6 as TriangleFanDrawMode,u0 as Triangle,q$ as TorusKnotGeometry,E$ as TorusGeometry,GE as TimestampQuery,PK as Timer,iK as TextureUtils,D$ as TextureLoader,N0 as Texture,G$ as TetrahedronGeometry,zX as TangentSpaceNormalMap,OG as TOUCH,BZ as SubtractiveBlending,xY as SubtractEquation,q9 as StringKeyframeTrack,WE as StreamReadUsage,QE as StreamDrawUsage,XE as StreamCopyUsage,RK as StereoCamera,$E as StaticReadUsage,eG as StaticDrawUsage,HE as StaticCopyUsage,uY as SrcColorFactor,tY as SrcAlphaSaturateFactor,nY as SrcAlphaFactor,sQ as SpriteMaterial,DW as Sprite,vK as SpotLightHelper,_7 as SpotLight,W$ as SplineCurve,nW as SphericalHarmonics3,TK as Spherical,C7 as SphereGeometry,C0 as Sphere,g8 as Source,F7 as SkinnedMesh,yK as SkeletonHelper,P6 as Skeleton,OX as ShortType,N8 as ShapeUtils,sK as ShapePath,U$ as ShapeGeometry,Q9 as Shape,SW as ShadowMaterial,Y8 as ShaderMaterial,T8 as ShaderLib,oJ as ShaderChunk,MW as Scene,E0 as SRGBTransfer,X9 as SRGBColorSpace,$W as SIGNED_RED_RGTC1_Format,WW as SIGNED_RED_GREEN_RGTC2_Format,K$ as RingGeometry,gY as ReverseSubtractEquation,gG as ReplaceStencilOp,V6 as RepeatWrapping,BK as RenderTarget3D,dQ as RenderTarget,XX as ReinhardToneMapping,PZ as RedIntegerFormat,DX as RedFormat,cW as RectAreaLight,IK as Raycaster,f9 as Ray,jW as RawShaderMaterial,TZ as RGIntegerFormat,LX as RGFormat,hG as RGDepthPacking,bQ as RGB_S3TC_DXT1_Format,SZ as RGB_PVRTC_4BPPV1_Format,jZ as RGB_PVRTC_2BPPV1_Format,hZ as RGB_ETC2_Format,fZ as RGB_ETC1_Format,JW as RGB_BPTC_UNSIGNED_Format,eZ as RGB_BPTC_SIGNED_Format,CG as RGBIntegerFormat,MX as RGBFormat,fG as RGBDepthPacking,pQ as RGBA_S3TC_DXT5_Format,gQ as RGBA_S3TC_DXT3_Format,xQ as RGBA_S3TC_DXT1_Format,vZ as RGBA_PVRTC_4BPPV1_Format,yZ as RGBA_PVRTC_2BPPV1_Format,bZ as RGBA_ETC2_EAC_Format,tZ as RGBA_BPTC_Format,cZ as RGBA_ASTC_8x8_Format,uZ as RGBA_ASTC_8x6_Format,mZ as RGBA_ASTC_8x5_Format,dZ as RGBA_ASTC_6x6_Format,lZ as RGBA_ASTC_6x5_Format,pZ as RGBA_ASTC_5x5_Format,gZ as RGBA_ASTC_5x4_Format,xZ as RGBA_ASTC_4x4_Format,rZ as RGBA_ASTC_12x12_Format,aZ as RGBA_ASTC_12x10_Format,oZ as RGBA_ASTC_10x8_Format,sZ as RGBA_ASTC_10x6_Format,nZ as RGBA_ASTC_10x5_Format,iZ as RGBA_ASTC_10x10_Format,AZ as RGBAIntegerFormat,P8 as RGBAFormat,VX as RGBADepthPacking,vY as REVISION,QW as RED_RGTC1_Format,ZW as RED_GREEN_RGTC2_Format,dW as QuaternionLinearInterpolant,n8 as QuaternionKeyframeTrack,T0 as Quaternion,Z$ as QuadraticBezierCurve3,$$ as QuadraticBezierCurve,eW as PropertyMixer,Q0 as PropertyBinding,MK as PositionalAudio,U9 as PolyhedronGeometry,gK as PolarGridHelper,T6 as PointsMaterial,M7 as Points,hK as PointLightHelper,w7 as PointLight,uK as PlaneHelper,A6 as PlaneGeometry,b8 as Plane,B0 as PerspectiveCamera,e6 as Path,EH as PMREMGenerator,hY as PCFSoftShadowMap,VZ as PCFShadowMap,p9 as OrthographicCamera,cY as OneMinusSrcColorFactor,sY as OneMinusSrcAlphaFactor,rY as OneMinusDstColorFactor,iY as OneMinusDstAlphaFactor,JX as OneMinusConstantColorFactor,$X as OneMinusConstantAlphaFactor,mY as OneFactor,B7 as OctahedronGeometry,BX as ObjectSpaceNormalMap,OK as ObjectLoader,eJ as Object3D,l8 as NumberKeyframeTrack,aG as NotEqualStencilFunc,AQ as NotEqualDepth,PX as NotEqualCompare,Z7 as NormalBlending,jG as NormalAnimationBlendMode,m8 as NoToneMapping,y9 as NoColorSpace,W9 as NoBlending,cG as NeverStencilFunc,CQ as NeverDepth,CX as NeverCompare,qX as NeutralToneMapping,fQ as NearestMipmapNearestFilter,v9 as NearestMipmapLinearFilter,LG as NearestMipMapNearestFilter,VG as NearestMipMapLinearFilter,u8 as NearestFilter,ZX as MultiplyOperation,CZ as MultiplyBlending,WX as MixOperation,yQ as MirroredRepeatWrapping,pY as MinEquation,yW as MeshToonMaterial,g9 as MeshStandardMaterial,c0 as MeshPhysicalMaterial,vW as MeshPhongMaterial,fW as MeshNormalMaterial,bW as MeshMatcapMaterial,hW as MeshLambertMaterial,F$ as MeshDistanceMaterial,O$ as MeshDepthMaterial,p0 as MeshBasicMaterial,k0 as Mesh,lY as MaxEquation,SJ as Matrix4,mJ as Matrix3,WH as Matrix2,qW as MathUtils,V$ as MaterialLoader,V0 as Material,NG as MOUSE,wG as LoopRepeat,IG as LoopPingPong,_G as LoopOnce,M$ as LoadingManager,w8 as LoaderUtils,S0 as Loader,XW as LinearTransfer,YX as LinearToneMapping,g0 as LinearSRGBColorSpace,z6 as LinearMipmapNearestFilter,c8 as LinearMipmapLinearFilter,zG as LinearMipMapNearestFilter,BG as LinearMipMapLinearFilter,R$ as LinearInterpolant,R8 as LinearFilter,J8 as LineSegments,k7 as LineLoop,xW as LineDashedMaterial,PW as LineCurve3,Q$ as LineCurve,A0 as LineBasicMaterial,jK as Line3,F8 as Line,sW as LightProbe,s8 as Light,nG as LessStencilFunc,oG as LessEqualStencilFunc,W7 as LessEqualDepth,KW as LessEqualCompare,wQ as LessDepth,_X as LessCompare,q7 as Layers,X$ as LatheGeometry,LW as LOD,Q8 as KeyframeTrack,xG as KeepStencilOp,uG as InvertStencilOp,EE as InterpolationSamplingType,qE as InterpolationSamplingMode,PG as InterpolateSmooth,lQ as InterpolateLinear,HW as InterpolateDiscrete,G9 as Interpolant,C8 as InterleavedBufferAttribute,K9 as InterleavedBuffer,_Z as IntType,bX as Int8BufferAttribute,lX as Int32BufferAttribute,pX as Int16BufferAttribute,R7 as InstancedMesh,_K as InstancedInterleavedBuffer,oW as InstancedBufferGeometry,_8 as InstancedBufferAttribute,dG as IncrementWrapStencilOp,pG as IncrementStencilOp,OW as ImageUtils,M6 as ImageLoader,z$ as ImageBitmapLoader,Y$ as IcosahedronGeometry,bK as HemisphereLightHelper,mW as HemisphereLight,X7 as HalfFloatType,q8 as Group,xK as GridHelper,iG as GreaterStencilFunc,rG as GreaterEqualStencilFunc,PQ as GreaterEqualDepth,TX as GreaterEqualCompare,TQ as GreaterDepth,IX as GreaterCompare,fU as GLTFLoader,UW as GLSL3,KE as GLSL1,wK as GLBufferAttribute,oQ as FrustumArray,x9 as Frustum,Z9 as FrontSide,sX as FramebufferTexture,cQ as FogExp2,nQ as Fog,Y9 as FloatType,VJ as Float32BufferAttribute,dX as Float16BufferAttribute,t0 as FileLoader,H$ as ExtrudeGeometry,aQ as ExternalTexture,k8 as EventDispatcher,r0 as Euler,jQ as EquirectangularRefractionMapping,SQ as EquirectangularReflectionMapping,sG as EqualStencilFunc,IQ as EqualDepth,wX as EqualCompare,z7 as EllipseCurve,BW as EdgesGeometry,ZE as DynamicReadUsage,JE as DynamicDrawUsage,YE as DynamicCopyUsage,aY as DstColorFactor,oY as DstAlphaFactor,H8 as DoubleSide,eQ as DodecahedronGeometry,lW as DiscreteInterpolant,pK as DirectionalLightHelper,I7 as DirectionalLight,MG as DetachedBindMode,iQ as DepthTexture,K7 as DepthStencilFormat,hQ as DepthFormat,HK as DefaultLoadingManager,mG as DecrementWrapStencilOp,lG as DecrementStencilOp,hX as DataUtils,GK as DataTextureLoader,O8 as DataTexture,G7 as DataArrayTexture,E7 as Data3DTexture,AK as Cylindrical,L7 as CylinderGeometry,GX as CustomToneMapping,bY as CustomBlending,TW as CurvePath,X8 as Curve,yY as CullFaceNone,FG as CullFaceFrontBack,fY as CullFaceFront,LZ as CullFaceBack,pW as CubicInterpolant,IW as CubicBezierCurve3,J$ as CubicBezierCurve,H7 as CubeUVReflectionMapping,UK as CubeTextureLoader,w6 as CubeTexture,j9 as CubeRefractionMapping,L6 as CubeReflectionMapping,RW as CubeCamera,oK as Controls,eY as ConstantColorFactor,QX as ConstantAlphaFactor,V7 as ConeGeometry,KK as CompressedTextureLoader,D7 as CompressedTexture,iX as CompressedCubeTexture,oX as CompressedArrayTexture,aJ as ColorManagement,k$ as ColorKeyframeTrack,EJ as Color,rW as Clock,vQ as ClampToEdgeWrapping,tQ as CircleGeometry,KX as CineonToneMapping,wW as CatmullRomCurve3,rQ as CapsuleGeometry,aX as CanvasTexture,lK as CameraHelper,N7 as Camera,B8 as Cache,NX as ByteType,iW as BufferGeometryLoader,pJ as BufferGeometry,$0 as BufferAttribute,dK as BoxHelper,h9 as BoxGeometry,mK as Box3Helper,_0 as Box3,SK as Box2,E9 as BooleanKeyframeTrack,I6 as Bone,VW as BatchedMesh,RG as BasicShadowMap,yG as BasicDepthPacking,e0 as BackSide,nK as AxesHelper,FK as AudioLoader,kK as AudioListener,B$ as AudioContext,DK as AudioAnalyser,tW as Audio,kG as AttachedBindMode,cK as ArrowHelper,aW as ArrayCamera,CW as ArcCurve,WK as AnimationUtils,VK as AnimationObjectGroup,zK as AnimationMixer,XK as AnimationLoader,$9 as AnimationClip,$H as AnimationAction,uW as AmbientLight,tG as AlwaysStencilFunc,_Q as AlwaysDepth,AX as AlwaysCompare,kX as AlphaFormat,EX as AgXToneMapping,zZ as AdditiveBlending,vG as AdditiveAnimationBlendMode,HX as AddOperation,D6 as AddEquation,UX as ACESFilmicToneMapping};
