var eo=Object.defineProperty;var Ui=t=>{throw TypeError(t)};var to=(t,e,r)=>e in t?eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var he=(t,e,r)=>to(t,typeof e!="symbol"?e+"":e,r),Wn=(t,e,r)=>e.has(t)||Ui("Cannot "+r);var b=(t,e,r)=>(Wn(t,e,"read from private field"),r?r.call(t):e.get(t)),pe=(t,e,r)=>e.has(t)?Ui("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),fe=(t,e,r,n)=>(Wn(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),et=(t,e,r)=>(Wn(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const ei=!1;var wi=Array.isArray,ro=Array.prototype.indexOf,Mr=Array.prototype.includes,In=Array.from,no=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,ka=Object.getOwnPropertyDescriptors,io=Object.prototype,ao=Array.prototype,ki=Object.getPrototypeOf,Ki=Object.isExtensible;function Br(t){return typeof t=="function"}const so=()=>{};function oo(t){return t()}function ti(t){for(var e=0;e<t.length;e++)t[e]()}function Sa(){var t,e,r=new Promise((n,i)=>{t=n,e=i});return{promise:r,resolve:t,reject:e}}function Si(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const n of t)if(r.push(n),r.length===e)break;return r}const We=2,Xr=4,sn=8,$i=1<<24,Jt=16,kt=32,Sr=64,ri=128,dt=512,De=1024,Ze=2048,wt=4096,ot=8192,Gt=16384,on=32768,ar=65536,Yi=1<<17,$a=1<<18,Dr=1<<19,Aa=1<<20,Ft=1<<25,yr=65536,ni=1<<21,Ai=1<<22,er=1<<23,Wt=Symbol("$state"),Ta=Symbol("legacy props"),lo=Symbol(""),cr=new class extends Error{constructor(){super(...arguments);he(this,"name","StaleReactionError");he(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var xa;const Ti=!!((xa=globalThis.document)!=null&&xa.contentType)&&globalThis.document.contentType.includes("xml");function uo(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function co(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function fo(t,e,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ho(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function po(t){throw new Error("https://svelte.dev/e/effect_orphan")}function go(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function mo(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function _o(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const wo=1,ko=2,Ea=4,So=8,$o=16,Ao=1,To=2,za=4,Eo=8,zo=16,No=1,Ro=2,je=Symbol(),Na="http://www.w3.org/1999/xhtml",Po="http://www.w3.org/2000/svg",Co="@attach";function Mo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Oo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ra(t){return t===this.v}function Lo(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Pa(t){return!Lo(t,this.v)}let qr=!1,Io=!1;function jo(){qr=!0}let Pe=null;function Or(t){Pe=t}function St(t,e=!1,r){Pe={p:Pe,i:!1,c:null,e:null,s:t,x:null,l:qr&&!e?{s:null,u:null,$:[]}:null}}function $t(t){var e=Pe,r=e.e;if(r!==null){e.e=null;for(var n of r)es(n)}return e.i=!0,Pe=e.p,{}}function ln(){return!qr||Pe!==null&&Pe.l===null}let fr=[];function Ca(){var t=fr;fr=[],ti(t)}function Zt(t){if(fr.length===0&&!Ur){var e=fr;queueMicrotask(()=>{e===fr&&Ca()})}fr.push(t)}function Do(){for(;fr.length>0;)Ca()}function Ma(t){var e=me;if(e===null)return ve.f|=er,t;if((e.f&on)===0&&(e.f&Xr)===0)throw t;Lr(t,e)}function Lr(t,e){for(;e!==null;){if((e.f&ri)!==0){if((e.f&on)===0)throw t;try{e.b.error(t);return}catch(r){t=r}}e=e.parent}throw t}const qo=-7169;function Re(t,e){t.f=t.f&qo|e}function Ei(t){(t.f&dt)!==0||t.deps===null?Re(t,De):Re(t,wt)}function Oa(t){if(t!==null)for(const e of t)(e.f&We)===0||(e.f&yr)===0||(e.f^=yr,Oa(e.deps))}function La(t,e,r){(t.f&Ze)!==0?e.add(t):(t.f&wt)!==0&&r.add(t),Oa(t.deps),Re(t,De)}const vn=new Set;let re=null,En=null,Ve=null,Ye=[],jn=null,ii=!1,Ur=!1;var Tr,Er,vr,zr,tn,rn,pr,jt,Nr,Ot,ai,si,Ia;const Zi=class Zi{constructor(){pe(this,Ot);he(this,"committed",!1);he(this,"current",new Map);he(this,"previous",new Map);pe(this,Tr,new Set);pe(this,Er,new Set);pe(this,vr,0);pe(this,zr,0);pe(this,tn,null);pe(this,rn,new Set);pe(this,pr,new Set);pe(this,jt,new Map);he(this,"is_fork",!1);pe(this,Nr,!1)}is_deferred(){return this.is_fork||b(this,zr)>0}skip_effect(e){b(this,jt).has(e)||b(this,jt).set(e,{d:[],m:[]})}unskip_effect(e){var r=b(this,jt).get(e);if(r){b(this,jt).delete(e);for(var n of r.d)Re(n,Ze),xt(n);for(n of r.m)Re(n,wt),xt(n)}}process(e){var i;Ye=[],this.apply();var r=[],n=[];for(const a of e)et(this,Ot,ai).call(this,a,r,n);if(this.is_deferred()){et(this,Ot,si).call(this,n),et(this,Ot,si).call(this,r);for(const[a,s]of b(this,jt))Ba(a,s)}else{for(const a of b(this,Tr))a();b(this,Tr).clear(),b(this,vr)===0&&et(this,Ot,Ia).call(this),En=this,re=null,Qi(n),Qi(r),En=null,(i=b(this,tn))==null||i.resolve()}Ve=null}capture(e,r){r!==je&&!this.previous.has(e)&&this.previous.set(e,r),(e.f&er)===0&&(this.current.set(e,e.v),Ve==null||Ve.set(e,e.v))}activate(){re=this,this.apply()}deactivate(){re===this&&(re=null,Ve=null)}flush(){if(this.activate(),Ye.length>0){if(ja(),re!==null&&re!==this)return}else b(this,vr)===0&&this.process([]);this.deactivate()}discard(){for(const e of b(this,Er))e(this);b(this,Er).clear()}increment(e){fe(this,vr,b(this,vr)+1),e&&fe(this,zr,b(this,zr)+1)}decrement(e){fe(this,vr,b(this,vr)-1),e&&fe(this,zr,b(this,zr)-1),!b(this,Nr)&&(fe(this,Nr,!0),Zt(()=>{fe(this,Nr,!1),this.is_deferred()?Ye.length>0&&this.flush():this.revive()}))}revive(){for(const e of b(this,rn))b(this,pr).delete(e),Re(e,Ze),xt(e);for(const e of b(this,pr))Re(e,wt),xt(e);this.flush()}oncommit(e){b(this,Tr).add(e)}ondiscard(e){b(this,Er).add(e)}settled(){return(b(this,tn)??fe(this,tn,Sa())).promise}static ensure(){if(re===null){const e=re=new Zi;vn.add(re),Ur||Zt(()=>{re===e&&e.flush()})}return re}apply(){}};Tr=new WeakMap,Er=new WeakMap,vr=new WeakMap,zr=new WeakMap,tn=new WeakMap,rn=new WeakMap,pr=new WeakMap,jt=new WeakMap,Nr=new WeakMap,Ot=new WeakSet,ai=function(e,r,n){e.f^=De;for(var i=e.first,a=null;i!==null;){var s=i.f,o=(s&(kt|Sr))!==0,u=o&&(s&De)!==0,l=u||(s&ot)!==0||b(this,jt).has(i);if(!l&&i.fn!==null){o?i.f^=De:a!==null&&(s&(Xr|sn|$i))!==0?a.b.defer_effect(i):(s&Xr)!==0?r.push(i):dn(i)&&((s&Jt)!==0&&b(this,pr).add(i),jr(i));var f=i.first;if(f!==null){i=f;continue}}for(;i!==null;){i===a&&(a=null);var p=i.next;if(p!==null){i=p;break}i=i.parent}}},si=function(e){for(var r=0;r<e.length;r+=1)La(e[r],b(this,rn),b(this,pr))},Ia=function(){var i;if(vn.size>1){this.previous.clear();var e=Ve,r=!0;for(const a of vn){if(a===this){r=!1;continue}const s=[];for(const[u,l]of this.current){if(a.current.has(u))if(r&&l!==a.current.get(u))a.current.set(u,l);else continue;s.push(u)}if(s.length===0)continue;const o=[...a.current.keys()].filter(u=>!this.current.has(u));if(o.length>0){var n=Ye;Ye=[];const u=new Set,l=new Map;for(const f of s)Da(f,o,u,l);if(Ye.length>0){re=a,a.apply();for(const f of Ye)et(i=a,Ot,ai).call(i,f,[],[]);a.deactivate()}Ye=n}}re=null,Ve=e}this.committed=!0,vn.delete(this)};let tr=Zi;function Bo(t){var e=Ur;Ur=!0;try{for(var r;;){if(Do(),Ye.length===0&&(re==null||re.flush(),Ye.length===0))return jn=null,r;ja()}}finally{Ur=e}}function ja(){ii=!0;var t=null;try{for(var e=0;Ye.length>0;){var r=tr.ensure();if(e++>1e3){var n,i;Fo()}r.process(Ye),rr.clear()}}finally{Ye=[],ii=!1,jn=null}}function Fo(){try{go()}catch(t){Lr(t,jn)}}let mt=null;function Qi(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(Gt|ot))===0&&dn(n)&&(mt=new Set,jr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&as(n),(mt==null?void 0:mt.size)>0)){rr.clear();for(const i of mt){if((i.f&(Gt|ot))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)mt.has(s)&&(mt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const u=a[o];(u.f&(Gt|ot))===0&&jr(u)}}mt.clear()}}mt=null}}function Da(t,e,r,n){if(!r.has(t)&&(r.add(t),t.reactions!==null))for(const i of t.reactions){const a=i.f;(a&We)!==0?Da(i,e,r,n):(a&(Ai|Jt))!==0&&(a&Ze)===0&&qa(i,e,n)&&(Re(i,Ze),xt(i))}}function qa(t,e,r){const n=r.get(t);if(n!==void 0)return n;if(t.deps!==null)for(const i of t.deps){if(Mr.call(e,i))return!0;if((i.f&We)!==0&&qa(i,e,r))return r.set(i,!0),!0}return r.set(t,!1),!1}function xt(t){for(var e=jn=t;e.parent!==null;){e=e.parent;var r=e.f;if(ii&&e===me&&(r&Jt)!==0&&(r&$a)===0)return;if((r&(Sr|kt))!==0){if((r&De)===0)return;e.f^=De}}Ye.push(e)}function Ba(t,e){if(!((t.f&kt)!==0&&(t.f&De)!==0)){(t.f&Ze)!==0?e.d.push(t):(t.f&wt)!==0&&e.m.push(t),Re(t,De);for(var r=t.first;r!==null;)Ba(r,e),r=r.next}}function Vo(t){let e=0,r=sr(0),n;return()=>{Ri()&&(c(r),ts(()=>(e===0&&(n=lr(()=>t(()=>Kr(r)))),e+=1,()=>{Zt(()=>{e-=1,e===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Ho=ar|Dr;function Go(t,e,r){new Wo(t,e,r)}var _t,yi,Dt,gr,zt,Nt,rt,Rt,qt,mr,Qt,Rr,Pr,Cr,Bt,On,Xe,Zo,Jo,oi,xn,li;class Wo{constructor(e,r,n){pe(this,Xe);he(this,"parent");he(this,"is_pending",!1);pe(this,_t);pe(this,yi,null);pe(this,Dt);pe(this,gr);pe(this,zt);pe(this,Nt,null);pe(this,rt,null);pe(this,Rt,null);pe(this,qt,null);pe(this,mr,0);pe(this,Qt,0);pe(this,Rr,!1);pe(this,Pr,new Set);pe(this,Cr,new Set);pe(this,Bt,null);pe(this,On,Vo(()=>(fe(this,Bt,sr(b(this,mr))),()=>{fe(this,Bt,null)})));fe(this,_t,e),fe(this,Dt,r),fe(this,gr,i=>{var a=me;a.b=this,a.f|=ri,n(i)}),this.parent=me.b,fe(this,zt,fn(()=>{et(this,Xe,oi).call(this)},Ho))}defer_effect(e){La(e,b(this,Pr),b(this,Cr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!b(this,Dt).pending}update_pending_count(e){et(this,Xe,li).call(this,e),fe(this,mr,b(this,mr)+e),!(!b(this,Bt)||b(this,Rr))&&(fe(this,Rr,!0),Zt(()=>{fe(this,Rr,!1),b(this,Bt)&&Ir(b(this,Bt),b(this,mr))}))}get_effect_pending(){return b(this,On).call(this),c(b(this,Bt))}error(e){var r=b(this,Dt).onerror;let n=b(this,Dt).failed;if(!r&&!n)throw e;b(this,Nt)&&(Ge(b(this,Nt)),fe(this,Nt,null)),b(this,rt)&&(Ge(b(this,rt)),fe(this,rt,null)),b(this,Rt)&&(Ge(b(this,Rt)),fe(this,Rt,null));var i=!1,a=!1;const s=()=>{if(i){Oo();return}i=!0,a&&yo(),b(this,Rt)!==null&&br(b(this,Rt),()=>{fe(this,Rt,null)}),et(this,Xe,xn).call(this,()=>{tr.ensure(),et(this,Xe,oi).call(this)})};Zt(()=>{try{a=!0,r==null||r(e,s),a=!1}catch(o){Lr(o,b(this,zt)&&b(this,zt).parent)}n&&fe(this,Rt,et(this,Xe,xn).call(this,()=>{tr.ensure();try{return it(()=>{var o=me;o.b=this,o.f|=ri,n(b(this,_t),()=>e,()=>s)})}catch(o){return Lr(o,b(this,zt).parent),null}}))})}}_t=new WeakMap,yi=new WeakMap,Dt=new WeakMap,gr=new WeakMap,zt=new WeakMap,Nt=new WeakMap,rt=new WeakMap,Rt=new WeakMap,qt=new WeakMap,mr=new WeakMap,Qt=new WeakMap,Rr=new WeakMap,Pr=new WeakMap,Cr=new WeakMap,Bt=new WeakMap,On=new WeakMap,Xe=new WeakSet,Zo=function(){try{fe(this,Nt,it(()=>b(this,gr).call(this,b(this,_t))))}catch(e){this.error(e)}},Jo=function(){const e=b(this,Dt).pending;e&&(this.is_pending=!0,fe(this,rt,it(()=>e(b(this,_t)))),Zt(()=>{var r=fe(this,qt,document.createDocumentFragment()),n=Mt();r.append(n),fe(this,Nt,et(this,Xe,xn).call(this,()=>(tr.ensure(),it(()=>b(this,gr).call(this,n))))),b(this,Qt)===0&&(b(this,_t).before(r),fe(this,qt,null),br(b(this,rt),()=>{fe(this,rt,null)}),this.is_pending=!1)}))},oi=function(){try{if(this.is_pending=this.has_pending_snippet(),fe(this,Qt,0),fe(this,mr,0),fe(this,Nt,it(()=>{b(this,gr).call(this,b(this,_t))})),b(this,Qt)>0){var e=fe(this,qt,document.createDocumentFragment());ls(b(this,Nt),e);const r=b(this,Dt).pending;fe(this,rt,it(()=>r(b(this,_t))))}else this.is_pending=!1}catch(r){this.error(r)}},xn=function(e){var r=me,n=ve,i=Pe;pt(b(this,zt)),vt(b(this,zt)),Or(b(this,zt).ctx);try{return e()}catch(a){return Ma(a),null}finally{pt(r),vt(n),Or(i)}},li=function(e){var r;if(!this.has_pending_snippet()){this.parent&&et(r=this.parent,Xe,li).call(r,e);return}if(fe(this,Qt,b(this,Qt)+e),b(this,Qt)===0){this.is_pending=!1;for(const n of b(this,Pr))Re(n,Ze),xt(n);for(const n of b(this,Cr))Re(n,wt),xt(n);b(this,Pr).clear(),b(this,Cr).clear(),b(this,rt)&&br(b(this,rt),()=>{fe(this,rt,null)}),b(this,qt)&&(b(this,_t).before(b(this,qt)),fe(this,qt,null))}};function Fa(t,e,r,n){const i=ln()?un:zi;var a=t.filter(d=>!d.settled);if(r.length===0&&a.length===0){n(e.map(i));return}var s=re,o=me,u=Uo(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(d=>d.promise)):null;function f(d){u();try{n(d)}catch(w){(o.f&Gt)===0&&Lr(w,o)}s==null||s.deactivate(),ui()}if(r.length===0){l.then(()=>f(e.map(i)));return}function p(){u(),Promise.all(r.map(d=>Ko(d))).then(d=>f([...e.map(i),...d])).catch(d=>Lr(d,o))}l?l.then(p):p()}function Uo(){var t=me,e=ve,r=Pe,n=re;return function(a=!0){pt(t),vt(e),Or(r),a&&(n==null||n.activate())}}function ui(){pt(null),vt(null),Or(null)}function un(t){var e=We|Ze,r=ve!==null&&(ve.f&We)!==0?ve:null;return me!==null&&(me.f|=Dr),{ctx:Pe,deps:null,effects:null,equals:Ra,f:e,fn:t,reactions:null,rv:0,v:je,wv:0,parent:r??me,ac:null}}function Ko(t,e,r){let n=me;n===null&&co();var i=n.b,a=void 0,s=sr(je),o=!ve,u=new Map;return cl(()=>{var w;var l=Sa();a=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{f===re&&f.committed&&f.deactivate(),ui()})}catch(m){l.reject(m),ui()}var f=re;if(o){var p=i.is_rendered();i.update_pending_count(1),f.increment(p),(w=u.get(f))==null||w.reject(cr),u.delete(f),u.set(f,l)}const d=(m,_=void 0)=>{if(f.activate(),_)_!==cr&&(s.f|=er,Ir(s,_));else{(s.f&er)!==0&&(s.f^=er),Ir(s,m);for(const[v,x]of u){if(u.delete(v),v===f)break;x.reject(cr)}}o&&(i.update_pending_count(-1),f.decrement(p))};l.promise.then(d,m=>d(null,m||"unknown"))}),qn(()=>{for(const l of u.values())l.reject(cr)}),new Promise(l=>{function f(p){function d(){p===a?l(s):f(a)}p.then(d,d)}f(a)})}function de(t){const e=un(t);return us(e),e}function zi(t){const e=un(t);return e.equals=Pa,e}function Yo(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)Ge(e[r])}}function Qo(t){for(var e=t.parent;e!==null;){if((e.f&We)===0)return(e.f&Gt)===0?e:null;e=e.parent}return null}function Ni(t){var e,r=me;pt(Qo(t));try{t.f&=~yr,Yo(t),e=hs(t)}finally{pt(r)}return e}function Va(t){var e=Ni(t);if(!t.equals(e)&&(t.wv=fs(),(!(re!=null&&re.is_fork)||t.deps===null)&&(t.v=e,t.deps===null))){Re(t,De);return}or||(Ve!==null?(Ri()||re!=null&&re.is_fork)&&Ve.set(t,e):Ei(t))}function Xo(t){var e,r;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),(r=n.ac)==null||r.abort(cr),n.teardown=so,n.ac=null,en(n,0),Ci(n))}function Ha(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&jr(e)}let ci=new Set;const rr=new Map;let Ga=!1;function sr(t,e){var r={f:0,v:t,reactions:null,equals:Ra,rv:0,wv:0};return r}function ie(t,e){const r=sr(t);return us(r),r}function el(t,e=!1,r=!0){var i;const n=sr(t);return e||(n.equals=Pa),qr&&r&&Pe!==null&&Pe.l!==null&&((i=Pe.l).s??(i.s=[])).push(n),n}function A(t,e,r=!1){ve!==null&&(!yt||(ve.f&Yi)!==0)&&ln()&&(ve.f&(We|Jt|Ai|Yi))!==0&&(ht===null||!Mr.call(ht,t))&&xo();let n=r?at(e):e;return Ir(t,n)}function Ir(t,e){if(!t.equals(e)){var r=t.v;or?rr.set(t,e):rr.set(t,r),t.v=e;var n=tr.ensure();if(n.capture(t,r),(t.f&We)!==0){const i=t;(t.f&Ze)!==0&&Ni(i),Ei(i)}t.wv=fs(),Wa(t,Ze),ln()&&me!==null&&(me.f&De)!==0&&(me.f&(kt|Sr))===0&&(ut===null?dl([t]):ut.push(t)),!n.is_fork&&ci.size>0&&!Ga&&tl()}return e}function tl(){Ga=!1;for(const t of ci)(t.f&De)!==0&&Re(t,wt),dn(t)&&jr(t);ci.clear()}function Xi(t,e=1){var r=c(t),n=e===1?r++:r--;return A(t,r),n}function Kr(t){A(t,t.v+1)}function Wa(t,e){var r=t.reactions;if(r!==null)for(var n=ln(),i=r.length,a=0;a<i;a++){var s=r[a],o=s.f;if(!(!n&&s===me)){var u=(o&Ze)===0;if(u&&Re(s,e),(o&We)!==0){var l=s;Ve==null||Ve.delete(l),(o&yr)===0&&(o&dt&&(s.f|=yr),Wa(l,wt))}else u&&((o&Jt)!==0&&mt!==null&&mt.add(s),xt(s))}}}function at(t){if(typeof t!="object"||t===null||Wt in t)return t;const e=ki(t);if(e!==io&&e!==ao)return t;var r=new Map,n=wi(t),i=ie(0),a=xr,s=o=>{if(xr===a)return o();var u=ve,l=xr;vt(null),ia(a);var f=o();return vt(u),ia(l),f};return n&&r.set("length",ie(t.length)),new Proxy(t,{defineProperty(o,u,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&_o();var f=r.get(u);return f===void 0?s(()=>{var p=ie(l.value);return r.set(u,p),p}):A(f,l.value,!0),!0},deleteProperty(o,u){var l=r.get(u);if(l===void 0){if(u in o){const f=s(()=>ie(je));r.set(u,f),Kr(i)}}else A(l,je),Kr(i);return!0},get(o,u,l){var w;if(u===Wt)return t;var f=r.get(u),p=u in o;if(f===void 0&&(!p||(w=Xt(o,u))!=null&&w.writable)&&(f=s(()=>{var m=at(p?o[u]:je),_=ie(m);return _}),r.set(u,f)),f!==void 0){var d=c(f);return d===je?void 0:d}return Reflect.get(o,u,l)},getOwnPropertyDescriptor(o,u){var l=Reflect.getOwnPropertyDescriptor(o,u);if(l&&"value"in l){var f=r.get(u);f&&(l.value=c(f))}else if(l===void 0){var p=r.get(u),d=p==null?void 0:p.v;if(p!==void 0&&d!==je)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,u){var d;if(u===Wt)return!0;var l=r.get(u),f=l!==void 0&&l.v!==je||Reflect.has(o,u);if(l!==void 0||me!==null&&(!f||(d=Xt(o,u))!=null&&d.writable)){l===void 0&&(l=s(()=>{var w=f?at(o[u]):je,m=ie(w);return m}),r.set(u,l));var p=c(l);if(p===je)return!1}return f},set(o,u,l,f){var J;var p=r.get(u),d=u in o;if(n&&u==="length")for(var w=l;w<p.v;w+=1){var m=r.get(w+"");m!==void 0?A(m,je):w in o&&(m=s(()=>ie(je)),r.set(w+"",m))}if(p===void 0)(!d||(J=Xt(o,u))!=null&&J.writable)&&(p=s(()=>ie(void 0)),A(p,at(l)),r.set(u,p));else{d=p.v!==je;var _=s(()=>at(l));A(p,_)}var v=Reflect.getOwnPropertyDescriptor(o,u);if(v!=null&&v.set&&v.set.call(f,l),!d){if(n&&typeof u=="string"){var x=r.get("length"),P=Number(u);Number.isInteger(P)&&P>=x.v&&A(x,P+1)}Kr(i)}return!0},ownKeys(o){c(i);var u=Reflect.ownKeys(o).filter(p=>{var d=r.get(p);return d===void 0||d.v!==je});for(var[l,f]of r)f.v!==je&&!(l in o)&&u.push(l);return u},setPrototypeOf(){bo()}})}function ea(t){try{if(t!==null&&typeof t=="object"&&Wt in t)return t[Wt]}catch{}return t}function rl(t,e){return Object.is(ea(t),ea(e))}var ta,Za,Ja,Ua;function nl(){if(ta===void 0){ta=window,Za=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Ja=Xt(e,"firstChild").get,Ua=Xt(e,"nextSibling").get,Ki(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ki(r)&&(r.__t=void 0)}}function Mt(t=""){return document.createTextNode(t)}function Ct(t){return Ja.call(t)}function cn(t){return Ua.call(t)}function h(t,e){return Ct(t)}function B(t,e=!1){{var r=Ct(t);return r instanceof Comment&&r.data===""?cn(r):r}}function y(t,e=1,r=!1){let n=t;for(;e--;)n=cn(n);return n}function il(t){t.textContent=""}function Ka(){return!1}function Ya(t,e,r){return document.createElementNS(e??Na,t,void 0)}function al(t,e){if(e){const r=document.body;t.autofocus=!0,Zt(()=>{document.activeElement===r&&t.focus()})}}let ra=!1;function sl(){ra||(ra=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Dn(t){var e=ve,r=me;vt(null),pt(null);try{return t()}finally{vt(e),pt(r)}}function Qa(t,e,r,n=r){t.addEventListener(e,()=>Dn(r));const i=t.__on_r;i?t.__on_r=()=>{i(),n(!0)}:t.__on_r=()=>n(!0),sl()}function Xa(t){me===null&&(ve===null&&po(),vo()),or&&ho()}function ol(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function At(t,e,r){var n=me;n!==null&&(n.f&ot)!==0&&(t|=ot);var i={ctx:Pe,deps:null,nodes:null,f:t|Ze|dt,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{jr(i)}catch(o){throw Ge(i),o}else e!==null&&xt(i);var a=i;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Dr)===0&&(a=a.first,(t&Jt)!==0&&(t&ar)!==0&&a!==null&&(a.f|=ar)),a!==null&&(a.parent=n,n!==null&&ol(a,n),ve!==null&&(ve.f&We)!==0&&(t&Sr)===0)){var s=ve;(s.effects??(s.effects=[])).push(a)}return i}function Ri(){return ve!==null&&!yt}function qn(t){const e=At(sn,null,!1);return Re(e,De),e.teardown=t,e}function nr(t){Xa();var e=me.f,r=!ve&&(e&kt)!==0&&(e&on)===0;if(r){var n=Pe;(n.e??(n.e=[])).push(t)}else return es(t)}function es(t){return At(Xr|Aa,t,!1)}function ll(t){return Xa(),At(sn|Aa,t,!0)}function ul(t){tr.ensure();const e=At(Sr|Dr,t,!0);return(r={})=>new Promise(n=>{r.outro?br(e,()=>{Ge(e),n(void 0)}):(Ge(e),n(void 0))})}function Pi(t){return At(Xr,t,!1)}function cl(t){return At(Ai|Dr,t,!0)}function ts(t,e=0){return At(sn|e,t,!0)}function O(t,e=[],r=[],n=[]){Fa(n,e,r,i=>{At(sn,()=>t(...i.map(c)),!0)})}function fn(t,e=0){var r=At(Jt|e,t,!0);return r}function rs(t,e=0){var r=At($i|e,t,!0);return r}function it(t){return At(kt|Dr,t,!0)}function ns(t){var e=t.teardown;if(e!==null){const r=or,n=ve;na(!0),vt(null);try{e.call(null)}finally{na(r),vt(n)}}}function Ci(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const i=r.ac;i!==null&&Dn(()=>{i.abort(cr)});var n=r.next;(r.f&Sr)!==0?r.parent=null:Ge(r,e),r=n}}function fl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&kt)===0&&Ge(e),e=r}}function Ge(t,e=!0){var r=!1;(e||(t.f&$a)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(is(t.nodes.start,t.nodes.end),r=!0),Ci(t,e&&!r),en(t,0),Re(t,Gt);var n=t.nodes&&t.nodes.t;if(n!==null)for(const a of n)a.stop();ns(t);var i=t.parent;i!==null&&i.first!==null&&as(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=null}function is(t,e){for(;t!==null;){var r=t===e?null:cn(t);t.remove(),t=r}}function as(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function br(t,e,r=!0){var n=[];ss(t,n,!0);var i=()=>{r&&Ge(t),e&&e()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function ss(t,e,r){if((t.f&ot)===0){t.f^=ot;var n=t.nodes&&t.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&e.push(o);for(var i=t.first;i!==null;){var a=i.next,s=(i.f&ar)!==0||(i.f&kt)!==0&&(t.f&Jt)!==0;ss(i,e,s?r:!1),i=a}}}function Mi(t){os(t,!0)}function os(t,e){if((t.f&ot)!==0){t.f^=ot,(t.f&De)===0&&(Re(t,Ze),xt(t));for(var r=t.first;r!==null;){var n=r.next,i=(r.f&ar)!==0||(r.f&kt)!==0;os(r,i?e:!1),r=n}var a=t.nodes&&t.nodes.t;if(a!==null)for(const s of a)(s.is_global||e)&&s.in()}}function ls(t,e){if(t.nodes)for(var r=t.nodes.start,n=t.nodes.end;r!==null;){var i=r===n?null:cn(r);e.append(r),r=i}}let yn=!1,or=!1;function na(t){or=t}let ve=null,yt=!1;function vt(t){ve=t}let me=null;function pt(t){me=t}let ht=null;function us(t){ve!==null&&(ht===null?ht=[t]:ht.push(t))}let Qe=null,tt=0,ut=null;function dl(t){ut=t}let cs=1,dr=0,xr=dr;function ia(t){xr=t}function fs(){return++cs}function dn(t){var e=t.f;if((e&Ze)!==0)return!0;if(e&We&&(t.f&=~yr),(e&wt)!==0){for(var r=t.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(dn(a)&&Va(a),a.wv>t.wv)return!0}(e&dt)!==0&&Ve===null&&Re(t,De)}return!1}function ds(t,e,r=!0){var n=t.reactions;if(n!==null&&!(ht!==null&&Mr.call(ht,t)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&We)!==0?ds(a,e,!1):e===a&&(r?Re(a,Ze):(a.f&De)!==0&&Re(a,wt),xt(a))}}function hs(t){var _;var e=Qe,r=tt,n=ut,i=ve,a=ht,s=Pe,o=yt,u=xr,l=t.f;Qe=null,tt=0,ut=null,ve=(l&(kt|Sr))===0?t:null,ht=null,Or(t.ctx),yt=!1,xr=++dr,t.ac!==null&&(Dn(()=>{t.ac.abort(cr)}),t.ac=null);try{t.f|=ni;var f=t.fn,p=f();t.f|=on;var d=t.deps,w=re==null?void 0:re.is_fork;if(Qe!==null){var m;if(w||en(t,tt),d!==null&&tt>0)for(d.length=tt+Qe.length,m=0;m<Qe.length;m++)d[tt+m]=Qe[m];else t.deps=d=Qe;if(Ri()&&(t.f&dt)!==0)for(m=tt;m<d.length;m++)((_=d[m]).reactions??(_.reactions=[])).push(t)}else!w&&d!==null&&tt<d.length&&(en(t,tt),d.length=tt);if(ln()&&ut!==null&&!yt&&d!==null&&(t.f&(We|wt|Ze))===0)for(m=0;m<ut.length;m++)ds(ut[m],t);if(i!==null&&i!==t){if(dr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=dr;if(e!==null)for(const v of e)v.rv=dr;ut!==null&&(n===null?n=ut:n.push(...ut))}return(t.f&er)!==0&&(t.f^=er),p}catch(v){return Ma(v)}finally{t.f^=ni,Qe=e,tt=r,ut=n,ve=i,ht=a,Or(s),yt=o,xr=u}}function hl(t,e){let r=e.reactions;if(r!==null){var n=ro.call(r,t);if(n!==-1){var i=r.length-1;i===0?r=e.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(e.f&We)!==0&&(Qe===null||!Mr.call(Qe,e))){var a=e;(a.f&dt)!==0&&(a.f^=dt,a.f&=~yr),Ei(a),Xo(a),en(a,0)}}function en(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)hl(t,r[n])}function jr(t){var e=t.f;if((e&Gt)===0){Re(t,De);var r=me,n=yn;me=t,yn=!0;try{(e&(Jt|$i))!==0?fl(t):Ci(t),ns(t);var i=hs(t);t.teardown=typeof i=="function"?i:null,t.wv=cs;var a;ei&&Io&&(t.f&Ze)!==0&&t.deps}finally{yn=n,me=r}}}async function vl(){await Promise.resolve(),Bo()}function c(t){var e=t.f,r=(e&We)!==0;if(ve!==null&&!yt){var n=me!==null&&(me.f&Gt)!==0;if(!n&&(ht===null||!Mr.call(ht,t))){var i=ve.deps;if((ve.f&ni)!==0)t.rv<dr&&(t.rv=dr,Qe===null&&i!==null&&i[tt]===t?tt++:Qe===null?Qe=[t]:Qe.push(t));else{(ve.deps??(ve.deps=[])).push(t);var a=t.reactions;a===null?t.reactions=[ve]:Mr.call(a,ve)||a.push(ve)}}}if(or&&rr.has(t))return rr.get(t);if(r){var s=t;if(or){var o=s.v;return((s.f&De)===0&&s.reactions!==null||ps(s))&&(o=Ni(s)),rr.set(s,o),o}var u=(s.f&dt)===0&&!yt&&ve!==null&&(yn||(ve.f&dt)!==0),l=(s.f&on)===0;dn(s)&&(u&&(s.f|=dt),Va(s)),u&&!l&&(Ha(s),vs(s))}if(Ve!=null&&Ve.has(t))return Ve.get(t);if((t.f&er)!==0)throw t.v;return t.v}function vs(t){if(t.f|=dt,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&We)!==0&&(e.f&dt)===0&&(Ha(e),vs(e))}function ps(t){if(t.v===je)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(rr.has(e)||(e.f&We)!==0&&ps(e))return!0;return!1}function lr(t){var e=yt;try{return yt=!0,t()}finally{yt=e}}function ur(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Wt in t)fi(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&Wt in r&&fi(r)}}}function fi(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{fi(t[n],e)}catch{}const r=ki(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ka(r);for(let i in n){const a=n[i].get;if(a)try{a.call(t)}catch{}}}}}function pl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const gl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ml(t){return gl.includes(t)}const _l={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function bl(t){return t=t.toLowerCase(),_l[t]??t}const xl=["touchstart","touchmove"];function yl(t){return xl.includes(t)}const hr=Symbol("events"),gs=new Set,di=new Set;function ms(t,e,r,n={}){function i(a){if(n.capture||hi.call(e,a),!a.cancelBubble)return Dn(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Zt(()=>{e.addEventListener(t,i,n)}):e.addEventListener(t,i,n),i}function wl(t,e,r,n,i){var a={capture:n,passive:i},s=ms(t,e,r,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&qn(()=>{e.removeEventListener(t,s,a)})}function ne(t,e,r){(e[hr]??(e[hr]={}))[t]=r}function Ut(t){for(var e=0;e<t.length;e++)gs.add(t[e]);for(var r of di)r(t)}let aa=null;function hi(t){var v,x;var e=this,r=e.ownerDocument,n=t.type,i=((v=t.composedPath)==null?void 0:v.call(t))||[],a=i[0]||t.target;aa=t;var s=0,o=aa===t&&t[hr];if(o){var u=i.indexOf(o);if(u!==-1&&(e===document||e===window)){t[hr]=e;return}var l=i.indexOf(e);if(l===-1)return;u<=l&&(s=u)}if(a=i[s]||t.target,a!==e){no(t,"currentTarget",{configurable:!0,get(){return a||r}});var f=ve,p=me;vt(null),pt(null);try{for(var d,w=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var _=(x=a[hr])==null?void 0:x[n];_!=null&&(!a.disabled||t.target===a)&&_.call(a,t)}catch(P){d?w.push(P):d=P}if(t.cancelBubble||m===e||m===null)break;a=m}if(d){for(let P of w)queueMicrotask(()=>{throw P});throw d}}finally{t[hr]=e,delete t.currentTarget,vt(f),pt(p)}}}var ya;const Zn=((ya=globalThis==null?void 0:globalThis.window)==null?void 0:ya.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function kl(t){return(Zn==null?void 0:Zn.createHTML(t))??t}function Oi(t,e=!1){var r=Ya("template");return t=t.replaceAll("<!>","<!---->"),r.innerHTML=e?kl(t):t,r.content}function wr(t,e){var r=me;r.nodes===null&&(r.nodes={start:t,end:e,a:null,t:null})}function S(t,e){var r=(e&No)!==0,n=(e&Ro)!==0,i,a=!t.startsWith("<!>");return()=>{i===void 0&&(i=Oi(a?t:"<!>"+t,!0),r||(i=Ct(i)));var s=n||Za?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=Ct(s),u=s.lastChild;wr(o,u)}else wr(s,s);return s}}function Sl(t,e,r="svg"){var n=!t.startsWith("<!>"),i=`<${r}>${n?t:"<!>"+t}</${r}>`,a;return()=>{if(!a){var s=Oi(i,!0),o=Ct(s);a=Ct(o)}var u=a.cloneNode(!0);return wr(u,u),u}}function $l(t,e){return Sl(t,e,"svg")}function sa(t=""){{var e=Mt(t+"");return wr(e,e),e}}function K(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Mt();return t.append(e,r),wr(e,r),t}function g(t,e){t!==null&&t.before(e)}function U(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function Al(t,e){return Tl(t,e)}const pn=new Map;function Tl(t,{target:e,anchor:r,props:n={},events:i,context:a,intro:s=!0}){nl();var o=void 0,u=ul(()=>{var l=r??e.appendChild(Mt());Go(l,{pending:()=>{}},d=>{St({});var w=Pe;a&&(w.c=a),i&&(n.$$events=i),o=t(d,n)||{},$t()});var f=new Set,p=d=>{for(var w=0;w<d.length;w++){var m=d[w];if(!f.has(m)){f.add(m);var _=yl(m);for(const P of[e,document]){var v=pn.get(P);v===void 0&&(v=new Map,pn.set(P,v));var x=v.get(m);x===void 0?(P.addEventListener(m,hi,{passive:_}),v.set(m,1)):v.set(m,x+1)}}}};return p(In(gs)),di.add(p),()=>{var _;for(var d of f)for(const v of[e,document]){var w=pn.get(v),m=w.get(d);--m==0?(v.removeEventListener(d,hi),w.delete(d),w.size===0&&pn.delete(v)):w.set(d,m)}di.delete(p),l!==r&&((_=l.parentNode)==null||_.removeChild(l))}});return El.set(o,u),o}let El=new WeakMap;var bt,Pt,nt,_r,nn,an,Ln;class Li{constructor(e,r=!0){he(this,"anchor");pe(this,bt,new Map);pe(this,Pt,new Map);pe(this,nt,new Map);pe(this,_r,new Set);pe(this,nn,!0);pe(this,an,()=>{var e=re;if(b(this,bt).has(e)){var r=b(this,bt).get(e),n=b(this,Pt).get(r);if(n)Mi(n),b(this,_r).delete(r);else{var i=b(this,nt).get(r);i&&(b(this,Pt).set(r,i.effect),b(this,nt).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of b(this,bt)){if(b(this,bt).delete(a),a===e)break;const o=b(this,nt).get(s);o&&(Ge(o.effect),b(this,nt).delete(s))}for(const[a,s]of b(this,Pt)){if(a===r||b(this,_r).has(a))continue;const o=()=>{if(Array.from(b(this,bt).values()).includes(a)){var l=document.createDocumentFragment();ls(s,l),l.append(Mt()),b(this,nt).set(a,{effect:s,fragment:l})}else Ge(s);b(this,_r).delete(a),b(this,Pt).delete(a)};b(this,nn)||!n?(b(this,_r).add(a),br(s,o,!1)):o()}}});pe(this,Ln,e=>{b(this,bt).delete(e);const r=Array.from(b(this,bt).values());for(const[n,i]of b(this,nt))r.includes(n)||(Ge(i.effect),b(this,nt).delete(n))});this.anchor=e,fe(this,nn,r)}ensure(e,r){var n=re,i=Ka();if(r&&!b(this,Pt).has(e)&&!b(this,nt).has(e))if(i){var a=document.createDocumentFragment(),s=Mt();a.append(s),b(this,nt).set(e,{effect:it(()=>r(s)),fragment:a})}else b(this,Pt).set(e,it(()=>r(this.anchor)));if(b(this,bt).set(n,e),i){for(const[o,u]of b(this,Pt))o===e?n.unskip_effect(u):n.skip_effect(u);for(const[o,u]of b(this,nt))o===e?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(b(this,an)),n.ondiscard(b(this,Ln))}else b(this,an).call(this)}}bt=new WeakMap,Pt=new WeakMap,nt=new WeakMap,_r=new WeakMap,nn=new WeakMap,an=new WeakMap,Ln=new WeakMap;function L(t,e,r=!1){var n=new Li(t),i=r?ar:0;function a(s,o){n.ensure(s,o)}fn(()=>{var s=!1;e((o,u=0)=>{s=!0,a(u,o)}),s||a(!1,null)},i)}function ir(t,e){return e}function zl(t,e,r){for(var n=[],i=e.length,a,s=e.length,o=0;o<i;o++){let p=e[o];br(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var d=t.outrogroups;vi(In(a.done)),d.delete(a),d.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&r!==null;if(u){var l=r,f=l.parentNode;il(f),f.append(l),t.items.clear()}vi(e,!u)}else a={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(a)}function vi(t,e=!0){for(var r=0;r<t.length;r++)Ge(t[r],e)}var oa;function st(t,e,r,n,i,a=null){var s=t,o=new Map,u=(e&Ea)!==0;if(u){var l=t;s=l.appendChild(Mt())}var f=null,p=zi(()=>{var x=r();return wi(x)?x:x==null?[]:In(x)}),d,w=!0;function m(){v.fallback=f,Nl(v,d,s,e,n),f!==null&&(d.length===0?(f.f&Ft)===0?Mi(f):(f.f^=Ft,Zr(f,null,s)):br(f,()=>{f=null}))}var _=fn(()=>{d=c(p);for(var x=d.length,P=new Set,J=re,k=Ka(),T=0;T<x;T+=1){var V=d[T],H=n(V,T),M=w?null:o.get(H);M?(M.v&&Ir(M.v,V),M.i&&Ir(M.i,T),k&&J.unskip_effect(M.e)):(M=Rl(o,w?s:oa??(oa=Mt()),V,H,T,i,e,r),w||(M.e.f|=Ft),o.set(H,M)),P.add(H)}if(x===0&&a&&!f&&(w?f=it(()=>a(s)):(f=it(()=>a(oa??(oa=Mt()))),f.f|=Ft)),x>P.size&&fo(),!w)if(k){for(const[ke,ee]of o)P.has(ke)||J.skip_effect(ee.e);J.oncommit(m),J.ondiscard(()=>{})}else m();c(p)}),v={effect:_,items:o,outrogroups:null,fallback:f};w=!1}function Fr(t){for(;t!==null&&(t.f&kt)===0;)t=t.next;return t}function Nl(t,e,r,n,i){var ee,be,ze,C,z,q,Q,N,$;var a=(n&So)!==0,s=e.length,o=t.items,u=Fr(t.effect.first),l,f=null,p,d=[],w=[],m,_,v,x;if(a)for(x=0;x<s;x+=1)m=e[x],_=i(m,x),v=o.get(_).e,(v.f&Ft)===0&&((be=(ee=v.nodes)==null?void 0:ee.a)==null||be.measure(),(p??(p=new Set)).add(v));for(x=0;x<s;x+=1){if(m=e[x],_=i(m,x),v=o.get(_).e,t.outrogroups!==null)for(const j of t.outrogroups)j.pending.delete(v),j.done.delete(v);if((v.f&Ft)!==0)if(v.f^=Ft,v===u)Zr(v,null,r);else{var P=f?f.next:u;v===t.effect.last&&(t.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),Kt(t,f,v),Kt(t,v,P),Zr(v,P,r),f=v,d=[],w=[],u=Fr(f.next);continue}if((v.f&ot)!==0&&(Mi(v),a&&((C=(ze=v.nodes)==null?void 0:ze.a)==null||C.unfix(),(p??(p=new Set)).delete(v))),v!==u){if(l!==void 0&&l.has(v)){if(d.length<w.length){var J=w[0],k;f=J.prev;var T=d[0],V=d[d.length-1];for(k=0;k<d.length;k+=1)Zr(d[k],J,r);for(k=0;k<w.length;k+=1)l.delete(w[k]);Kt(t,T.prev,V.next),Kt(t,f,T),Kt(t,V,J),u=J,f=V,x-=1,d=[],w=[]}else l.delete(v),Zr(v,u,r),Kt(t,v.prev,v.next),Kt(t,v,f===null?t.effect.first:f.next),Kt(t,f,v),f=v;continue}for(d=[],w=[];u!==null&&u!==v;)(l??(l=new Set)).add(u),w.push(u),u=Fr(u.next);if(u===null)continue}(v.f&Ft)===0&&d.push(v),f=v,u=Fr(v.next)}if(t.outrogroups!==null){for(const j of t.outrogroups)j.pending.size===0&&(vi(In(j.done)),(z=t.outrogroups)==null||z.delete(j));t.outrogroups.size===0&&(t.outrogroups=null)}if(u!==null||l!==void 0){var H=[];if(l!==void 0)for(v of l)(v.f&ot)===0&&H.push(v);for(;u!==null;)(u.f&ot)===0&&u!==t.fallback&&H.push(u),u=Fr(u.next);var M=H.length;if(M>0){var ke=(n&Ea)!==0&&s===0?r:null;if(a){for(x=0;x<M;x+=1)(Q=(q=H[x].nodes)==null?void 0:q.a)==null||Q.measure();for(x=0;x<M;x+=1)($=(N=H[x].nodes)==null?void 0:N.a)==null||$.fix()}zl(t,H,ke)}}a&&Zt(()=>{var j,I;if(p!==void 0)for(v of p)(I=(j=v.nodes)==null?void 0:j.a)==null||I.apply()})}function Rl(t,e,r,n,i,a,s,o){var u=(s&wo)!==0?(s&$o)===0?el(r,!1,!1):sr(r):null,l=(s&ko)!==0?sr(i):null;return{v:u,i:l,e:it(()=>(a(e,u??r,l??i,o),()=>{t.delete(n)}))}}function Zr(t,e,r){if(t.nodes)for(var n=t.nodes.start,i=t.nodes.end,a=e&&(e.f&Ft)===0?e.nodes.start:r;n!==null;){var s=cn(n);if(a.before(n),n===i)return;n=s}}function Kt(t,e,r){e===null?t.effect.first=r:e.next=r,r===null?t.effect.last=e:r.prev=e}function Pl(t,e,r=!1,n=!1,i=!1){var a=t,s="";O(()=>{var o=me;if(s!==(s=e()??"")&&(o.nodes!==null&&(is(o.nodes.start,o.nodes.end),o.nodes=null),s!=="")){var u=s+"";r?u=`<svg>${u}</svg>`:n&&(u=`<math>${u}</math>`);var l=Oi(u);if((r||n)&&(l=Ct(l)),wr(Ct(l),l.lastChild),r||n)for(;Ct(l);)a.before(Ct(l));else a.before(l)}})}function se(t,e,r,n,i){var o;var a=(o=e.$$slots)==null?void 0:o[r],s=!1;a===!0&&(a=e.children,s=!0),a===void 0||a(t,s?()=>n:n)}function _s(t,e,r){var n=new Li(t);fn(()=>{var i=e()??null;n.ensure(i,i&&(a=>r(a,i)))},ar)}function Cl(t,e,r,n,i,a){var s=null,o=t,u=new Li(o,!1);fn(()=>{const l=e()||null;var f=Po;if(l===null){u.ensure(null,null);return}return u.ensure(l,p=>{if(l){if(s=Ya(l,f),wr(s,s),n){var d=s.appendChild(Mt());n(s,d)}me.nodes.end=s,p.before(s)}}),()=>{}},ar),qn(()=>{})}function Ml(t,e){var r=void 0,n;rs(()=>{r!==(r=e())&&(n&&(Ge(n),n=null),r&&(n=it(()=>{Pi(()=>r(t))})))})}function bs(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=bs(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function Ol(){for(var t,e,r=0,n="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=bs(t))&&(n&&(n+=" "),n+=e);return n}function ft(t){return typeof t=="object"?Ol(t):t??""}const la=[...` 	
\r\f \v\uFEFF`];function Ll(t,e,r){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),r){for(var i in r)if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||la.includes(n[s-1]))&&(o===n.length||la.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function ua(t,e=!1){var r=e?" !important;":";",n="";for(var i in t){var a=t[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Jn(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Il(t,e){if(e){var r="",n,i;if(Array.isArray(e)?(n=e[0],i=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,u=[];n&&u.push(...Object.keys(n).map(Jn)),i&&u.push(...Object.keys(i).map(Jn));var l=0,f=-1;const _=t.length;for(var p=0;p<_;p++){var d=t[p];if(o?d==="/"&&t[p-1]==="*"&&(o=!1):a?a===d&&(a=!1):d==="/"&&t[p+1]==="*"?o=!0:d==='"'||d==="'"?a=d:d==="("?s++:d===")"&&s--,!o&&a===!1&&s===0){if(d===":"&&f===-1)f=p;else if(d===";"||p===_-1){if(f!==-1){var w=Jn(t.substring(l,f).trim());if(!u.includes(w)){d!==";"&&p++;var m=t.substring(l,p).trim();r+=" "+m+";"}}l=p+1,f=-1}}}}return n&&(r+=ua(n)),i&&(r+=ua(i,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function ge(t,e,r,n,i,a){var s=t.__className;if(s!==r||s===void 0){var o=Ll(r,n,a);o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o),t.__className=r}else if(a&&i!==a)for(var u in a){var l=!!a[u];(i==null||l!==!!i[u])&&t.classList.toggle(u,l)}return a}function Un(t,e={},r,n){for(var i in r){var a=r[i];e[i]!==a&&(r[i]==null?t.style.removeProperty(i):t.style.setProperty(i,a,n))}}function jl(t,e,r,n){var i=t.__style;if(i!==e){var a=Il(e,n);a==null?t.removeAttribute("style"):t.style.cssText=a,t.__style=e}else n&&(Array.isArray(n)?(Un(t,r==null?void 0:r[0],n[0]),Un(t,r==null?void 0:r[1],n[1],"important")):Un(t,r,n));return n}function zn(t,e,r=!1){if(t.multiple){if(e==null)return;if(!wi(e))return Mo();for(var n of t.options)n.selected=e.includes(Yr(n));return}for(n of t.options){var i=Yr(n);if(rl(i,e)){n.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function xs(t){var e=new MutationObserver(()=>{zn(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qn(()=>{e.disconnect()})}function Dl(t,e,r=e){var n=new WeakSet,i=!0;Qa(t,"change",a=>{var s=a?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(s),Yr);else{var u=t.querySelector(s)??t.querySelector("option:not([disabled])");o=u&&Yr(u)}r(o),re!==null&&n.add(re)}),Pi(()=>{var a=e();if(t===document.activeElement){var s=En??re;if(n.has(s))return}if(zn(t,a,i),i&&a===void 0){var o=t.querySelector(":checked");o!==null&&(a=Yr(o),r(a))}t.__value=a,i=!1}),xs(t)}function Yr(t){return"__value"in t?t.__value:t.value}const Vr=Symbol("class"),Hr=Symbol("style"),ys=Symbol("is custom element"),ws=Symbol("is html"),ql=Ti?"option":"OPTION",Bl=Ti?"select":"SELECT",Fl=Ti?"progress":"PROGRESS";function Yt(t,e){var r=Bn(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!==Fl)||(t.value=e??"")}function Vl(t,e){var r=Bn(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function pi(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Ae(t,e,r,n){var i=Bn(t);i[e]!==(i[e]=r)&&(e==="loading"&&(t[lo]=r),r==null?t.removeAttribute(e):typeof r!="string"&&ks(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Hl(t,e,r,n,i=!1,a=!1){var s=Bn(t),o=s[ys],u=!s[ws],l=e||{},f=t.nodeName===ql;for(var p in e)p in r||(r[p]=null);r.class?r.class=ft(r.class):r[Vr]&&(r.class=null),r[Hr]&&(r.style??(r.style=null));var d=ks(t);for(const k in r){let T=r[k];if(f&&k==="value"&&T==null){t.value=t.__value="",l[k]=T;continue}if(k==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";ge(t,w,T,n,e==null?void 0:e[Vr],r[Vr]),l[k]=T,l[Vr]=r[Vr];continue}if(k==="style"){jl(t,T,e==null?void 0:e[Hr],r[Hr]),l[k]=T,l[Hr]=r[Hr];continue}var m=l[k];if(!(T===m&&!(T===void 0&&t.hasAttribute(k)))){l[k]=T;var _=k[0]+k[1];if(_!=="$$")if(_==="on"){const V={},H="$$"+k;let M=k.slice(2);var v=ml(M);if(pl(M)&&(M=M.slice(0,-7),V.capture=!0),!v&&m){if(T!=null)continue;t.removeEventListener(M,l[H],V),l[H]=null}if(v)ne(M,t,T),Ut([M]);else if(T!=null){let ke=function(ee){l[k].call(this,ee)};var J=ke;l[H]=ms(M,t,ke,V)}}else if(k==="style")Ae(t,k,T);else if(k==="autofocus")al(t,!!T);else if(!o&&(k==="__value"||k==="value"&&T!=null))t.value=t.__value=T;else if(k==="selected"&&f)pi(t,T);else{var x=k;u||(x=bl(x));var P=x==="defaultValue"||x==="defaultChecked";if(T==null&&!o&&!P)if(s[k]=null,x==="value"||x==="checked"){let V=t;const H=e===void 0;if(x==="value"){let M=V.defaultValue;V.removeAttribute(x),V.defaultValue=M,V.value=V.__value=H?M:null}else{let M=V.defaultChecked;V.removeAttribute(x),V.defaultChecked=M,V.checked=H?M:!1}}else t.removeAttribute(k);else P||d.includes(x)&&(o||typeof T!="string")?(t[x]=T,x in s&&(s[x]=je)):typeof T!="function"&&Ae(t,x,T)}}}return l}function ca(t,e,r=[],n=[],i=[],a,s=!1,o=!1){Fa(i,r,n,u=>{var l=void 0,f={},p=t.nodeName===Bl,d=!1;if(rs(()=>{var m=e(...u.map(c)),_=Hl(t,l,m,a,s,o);d&&p&&"value"in m&&zn(t,m.value);for(let x of Object.getOwnPropertySymbols(f))m[x]||Ge(f[x]);for(let x of Object.getOwnPropertySymbols(m)){var v=m[x];x.description===Co&&(!l||v!==l[x])&&(f[x]&&Ge(f[x]),f[x]=it(()=>Ml(t,()=>v))),_[x]=v}l=_}),p){var w=t;Pi(()=>{zn(w,l.value,!0),xs(w)})}d=!0})}function Bn(t){return t.__attributes??(t.__attributes={[ys]:t.nodeName.includes("-"),[ws]:t.namespaceURI===Na})}var fa=new Map;function ks(t){var e=t.getAttribute("is")||t.nodeName,r=fa.get(e);if(r)return r;fa.set(e,r=[]);for(var n,i=t,a=Element.prototype;a!==i;){n=ka(i);for(var s in n)n[s].set&&r.push(s);i=ki(i)}return r}function Ss(t,e,r=e){var n=new WeakSet;Qa(t,"input",async i=>{var a=i?t.defaultValue:t.value;if(a=Kn(t)?Yn(a):a,r(a),re!==null&&n.add(re),await vl(),a!==(a=e())){var s=t.selectionStart,o=t.selectionEnd,u=t.value.length;if(t.value=a??"",o!==null){var l=t.value.length;s===o&&o===u&&l>u?(t.selectionStart=l,t.selectionEnd=l):(t.selectionStart=s,t.selectionEnd=Math.min(o,l))}}}),lr(e)==null&&t.value&&(r(Kn(t)?Yn(t.value):t.value),re!==null&&n.add(re)),ts(()=>{var i=e();if(t===document.activeElement){var a=En??re;if(n.has(a))return}Kn(t)&&i===Yn(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Kn(t){var e=t.type;return e==="number"||e==="range"}function Yn(t){return t===""?null:+t}function Gl(t=!1){const e=Pe,r=e.l.u;if(!r)return;let n=()=>ur(e.s);if(t){let i=0,a={};const s=un(()=>{let o=!1;const u=e.s;for(const l in u)u[l]!==a[l]&&(a[l]=u[l],o=!0);return o&&i++,i});n=()=>c(s)}r.b.length&&ll(()=>{da(e,n),ti(r.b)}),nr(()=>{const i=lr(()=>r.m.map(oo));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&nr(()=>{da(e,n),ti(r.a)})}function da(t,e){if(t.l.s)for(const r of t.l.s)c(r);e()}let gn=!1;function Wl(t){var e=gn;try{return gn=!1,[t(),gn]}finally{gn=e}}const Zl={get(t,e){if(!t.exclude.includes(e))return c(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,r){if(!(e in t.special)){var n=me;try{pt(t.parent_effect),t.special[e]=He({get[e](){return t.props[e]}},e,za)}finally{pt(n)}}return t.special[e](r),Xi(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Xi(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function ae(t,e){return new Proxy({props:t,exclude:e,special:{},version:sr(0),parent_effect:me},Zl)}const Jl={get(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Br(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,r){let n=t.props.length;for(;n--;){let i=t.props[n];Br(i)&&(i=i());const a=Xt(i,e);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Br(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Xt(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===Wt||e===Ta)return!1;for(let r of t.props)if(Br(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Br(r)&&(r=r()),!!r){for(const n in r)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(r))e.includes(n)||e.push(n)}return e}};function oe(...t){return new Proxy({props:t},Jl)}function He(t,e,r,n){var J;var i=!qr||(r&To)!==0,a=(r&Eo)!==0,s=(r&zo)!==0,o=n,u=!0,l=()=>(u&&(u=!1,o=s?lr(n):n),o),f;if(a){var p=Wt in t||Ta in t;f=((J=Xt(t,e))==null?void 0:J.set)??(p&&e in t?k=>t[e]=k:void 0)}var d,w=!1;a?[d,w]=Wl(()=>t[e]):d=t[e],d===void 0&&n!==void 0&&(d=l(),f&&(i&&mo(),f(d)));var m;if(i?m=()=>{var k=t[e];return k===void 0?l():(u=!0,k)}:m=()=>{var k=t[e];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&za)===0)return m;if(f){var _=t.$$legacy;return(function(k,T){return arguments.length>0?((!i||!T||_||w)&&f(T?m():k),k):m()})}var v=!1,x=((r&Ao)!==0?un:zi)(()=>(v=!1,m()));a&&c(x);var P=me;return(function(k,T){if(arguments.length>0){const V=T?c(x):i&&a?at(k):k;return A(x,V),v=!0,o!==void 0&&(o=V),k}return or&&v||(P.f&Gt)!==0?x.v:c(x)})}function $s(t){Pe===null&&uo(),qr&&Pe.l!==null?Ul(Pe).m.push(t):nr(()=>{const e=lr(t);if(typeof e=="function")return e})}function Ul(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Kl="5";var wa;typeof window<"u"&&((wa=window.__svelte??(window.__svelte={})).v??(wa.v=new Set)).add(Kl);let ct=null,wn=[],Qn=null,kn=1e3;const Yl=1e4;function Ql(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/ws`}function As(){(ct==null?void 0:ct.readyState)!==WebSocket.OPEN&&(ct=new WebSocket(Ql()),ct.onopen=()=>{kn=1e3,Ar({type:"get_tools"}),Ar({type:"get_timeline",filter:{limit:50}})},ct.onmessage=t=>{try{const e=JSON.parse(t.data);for(const r of wn)r(e)}catch{console.error("Failed to parse WebSocket message:",t.data)}},ct.onclose=()=>{Xl()},ct.onerror=()=>{})}function Xl(){Qn||(Qn=setTimeout(()=>{Qn=null,As(),kn=Math.min(kn*2,Yl)},kn))}function Ar(t){(ct==null?void 0:ct.readyState)===WebSocket.OPEN&&ct.send(JSON.stringify(t))}function Ts(t){return wn.push(t),()=>{wn=wn.filter(e=>e!==t)}}jo();/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const eu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const tu=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ha=(...t)=>t.filter((e,r,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===r).join(" ").trim();var ru=$l("<svg><!><!></svg>");function le(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]),n=ae(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);St(e,!1);let i=He(e,"name",8,void 0),a=He(e,"color",8,"currentColor"),s=He(e,"size",8,24),o=He(e,"strokeWidth",8,2),u=He(e,"absoluteStrokeWidth",8,!1),l=He(e,"iconNode",24,()=>[]);Gl();var f=ru();ca(f,(w,m,_)=>({...eu,...w,...n,width:s(),height:s(),stroke:a(),"stroke-width":m,class:_}),[()=>tu(n)?void 0:{"aria-hidden":"true"},()=>(ur(u()),ur(o()),ur(s()),lr(()=>u()?Number(o())*24/Number(s()):o())),()=>(ur(ha),ur(i()),ur(r),lr(()=>ha("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=h(f);st(p,1,l,ir,(w,m)=>{var _=de(()=>Si(c(m),2));let v=()=>c(_)[0],x=()=>c(_)[1];var P=K(),J=B(P);Cl(J,v,!0,(k,T)=>{ca(k,()=>({...x()}))}),g(w,P)});var d=y(p);se(d,e,"default",{}),g(t,f),$t()}function nu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];le(t,oe({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function iu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];le(t,oe({name:"braces"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function au(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];le(t,oe({name:"check"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Nn(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];le(t,oe({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Rn(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];le(t,oe({name:"chevron-right"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function su(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];le(t,oe({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Jr(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(t,oe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function ou(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(t,oe({name:"circle-question-mark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function lu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(t,oe({name:"circle-x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Es(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(t,oe({name:"clock"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Ii(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];le(t,oe({name:"code"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function zs(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];le(t,oe({name:"command"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Ns(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];le(t,oe({name:"copy"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function uu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];le(t,oe({name:"database"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function cu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];le(t,oe({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function fu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];le(t,oe({name:"file-braces"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function du(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}]];le(t,oe({name:"file-code"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function hu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M12 17h.01"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];le(t,oe({name:"file-question-mark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function vu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];le(t,oe({name:"file-text"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function pu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];le(t,oe({name:"folder"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function gu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(t,oe({name:"funnel"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function mu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];le(t,oe({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function _u(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];le(t,oe({name:"history"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function bu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(t,oe({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function xu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];le(t,oe({name:"layout-template"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function yu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(t,oe({name:"moon"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function wu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(t,oe({name:"package"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function ku(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];le(t,oe({name:"pencil"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function gi(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];le(t,oe({name:"play"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Su(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];le(t,oe({name:"plus"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Rs(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(t,oe({name:"search"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function $u(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];le(t,oe({name:"server"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Au(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(t,oe({name:"sun"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Ps(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];le(t,oe({name:"terminal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Cs(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];le(t,oe({name:"trash-2"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function va(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(t,oe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Tu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(t,oe({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Ms(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.570.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];le(t,oe({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}var Eu=S("<span><!> <span> </span></span>");function Os(t,e){const r={filesystem:{icon:pu,label:"FS",classes:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"},network:{icon:mu,label:"Net",classes:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"},shell:{icon:Ps,label:"Shell",classes:"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800"},database:{icon:uu,label:"DB",classes:"bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800"},read_only:{icon:cu,label:"Read",classes:"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"},write:{icon:ku,label:"Write",classes:"bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800"}};let n=de(()=>r[e.capability]??{icon:ou,label:e.capability,classes:"bg-secondary text-secondary-foreground border-border"}),i=de(()=>c(n).icon);var a=Eu(),s=h(a);_s(s,()=>c(i),(l,f)=>{f(l,{size:10})});var o=y(s,2),u=h(o);O(()=>{ge(a,1,`inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium shadow-sm transition-colors ${c(n).classes}`),Ae(a,"title",e.capability),U(u,c(n).label)}),g(t,a)}var zu=S('<span class="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground"> </span>'),Nu=S('<div class="line-clamp-2 w-full text-left text-xs opacity-80"> </div>'),Ru=S('<div class="mt-1 flex flex-wrap gap-1"></div>'),Pu=S('<button><div class="flex w-full items-center justify-between"><div class="flex items-center gap-2"><div><!></div> <span> </span></div> <!></div> <!> <!></button>'),Cu=S('<div class="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"><!> <p class="text-xs"> </p></div>'),Mu=S('<div class="flex h-full flex-col"><div class="border-b p-4"><div class="relative"><!> <input type="text" placeholder="Search tools..." class="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"/></div></div> <div class="flex-1 overflow-y-auto p-2"><div class="space-y-1"><!> <!></div></div> <div class="flex items-center justify-between border-t bg-muted/20 px-4 py-2 text-xs text-muted-foreground"><span> </span> <span>Local</span></div></div>');function Ou(t,e){St(e,!0);let r=He(e,"executionCounts",19,()=>({})),n=ie(""),i=ie(-1),a=de(()=>c(n)?e.tools.filter(k=>k.name.toLowerCase().includes(c(n).toLowerCase())||k.description.toLowerCase().includes(c(n).toLowerCase())):e.tools);function s(k){if(c(a).length!==0)switch(k.key){case"ArrowDown":k.preventDefault(),A(i,Math.min(c(i)+1,c(a).length-1),!0);break;case"ArrowUp":k.preventDefault(),A(i,Math.max(c(i)-1,0),!0);break;case"Enter":k.preventDefault(),c(i)>=0&&c(i)<c(a).length&&e.onSelect(c(a)[c(i)]);break}}var o=Mu(),u=h(o),l=h(u),f=h(l);Rs(f,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var p=y(f,2),d=y(u,2),w=h(d),m=h(w);st(m,19,()=>c(a),k=>k.name,(k,T,V)=>{const H=de(()=>r()[c(T).name]??0);var M=Pu(),ke=h(M),ee=h(ke),be=h(ee),ze=h(be);zs(ze,{size:12});var C=y(be,2),z=h(C),q=y(ee,2);{var Q=E=>{var X=zu(),D=h(X);O(()=>U(D,c(H))),g(E,X)};L(q,E=>{c(H)>0&&E(Q)})}var N=y(ke,2);{var $=E=>{var X=Nu(),D=h(X);O(()=>U(D,c(T).description)),g(E,X)};L(N,E=>{c(T).description&&E($)})}var j=y(N,2);{var I=E=>{var X=Ru();st(X,21,()=>c(T).capabilities,ir,(D,W)=>{Os(D,{get capability(){return c(W)}})}),g(E,X)};L(j,E=>{c(T).capabilities.length>0&&E(I)})}O(()=>{var E,X,D;ge(M,1,`group flex w-full flex-col items-start gap-1 rounded-md p-3 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${((E=e.selectedTool)==null?void 0:E.name)===c(T).name?"bg-accent text-accent-foreground shadow-sm ring-1 ring-border":c(V)===c(i)?"bg-muted/50":"text-muted-foreground"}`),ge(be,1,`flex h-6 w-6 items-center justify-center rounded border bg-background/50 ${((X=e.selectedTool)==null?void 0:X.name)===c(T).name?"border-primary/20":"border-border"}`),ge(C,1,`font-semibold ${((D=e.selectedTool)==null?void 0:D.name)===c(T).name?"text-foreground":"text-muted-foreground"}`),U(z,c(T).name)}),ne("click",M,()=>e.onSelect(c(T))),wl("pointerenter",M,()=>A(i,c(V),!0)),g(k,M)});var _=y(m,2);{var v=k=>{var T=Cu(),V=h(T);wu(V,{class:"mb-2 h-8 w-8 opacity-20"});var H=y(V,2),M=h(H);O(()=>U(M,e.tools.length===0?"No tools available":"No matching tools")),g(k,T)};L(_,k=>{c(a).length===0&&k(v)})}var x=y(d,2),P=h(x),J=h(P);O(()=>U(J,`${e.tools.length??""} tool${e.tools.length!==1?"s":""}`)),ne("keydown",p,s),Ss(p,()=>c(n),k=>A(n,k)),g(t,o),$t()}Ut(["keydown","click"]);function Ls(t){if(t.enum)return"enum";if(t.oneOf)return"oneOf";if(t.anyOf)return"anyOf";switch(t.type){case"string":return"string";case"number":return"number";case"integer":return"integer";case"boolean":return"boolean";case"object":return"object";case"array":return"array";default:return"unknown"}}function mi(t){var e;if(t.default!==void 0)return t.default;switch(Ls(t)){case"string":return"";case"number":case"integer":return;case"boolean":return!1;case"object":return Sn(t);case"array":return[];case"enum":return((e=t.enum)==null?void 0:e[0])??"";default:return}}function Sn(t){const e={},r=t.properties??{},n=new Set(t.required??[]);for(const[i,a]of Object.entries(r))a.default!==void 0?e[i]=a.default:n.has(i)&&(e[i]=mi(a));return e}function Is(t){const e=[];if(t.anyOf&&e.push("This tool uses anyOf in its schema. Some MCP clients (Claude Code, Claude API) may reject schemas using anyOf."),t.oneOf&&e.push("This tool uses oneOf in its schema. Some MCP clients may have limited support for oneOf discriminators."),t.allOf&&e.push("This tool uses allOf in its schema. Not all MCP clients fully support allOf composition."),t.properties)for(const r of Object.values(t.properties))e.push(...Is(r));return[...new Set(e)]}const It="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",mn="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",_n={default:`${mn} bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2`,destructive:`${mn} bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2`,outline:`${mn} border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`,ghost:`${mn} hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`};async function $n(t){await navigator.clipboard.writeText(t)}var Lu=S('<span class="text-destructive">*</span>'),Iu=S('<span class="rounded bg-muted px-1.5 py-0.5 text-[10px] uppercase text-muted-foreground"> </span>'),ju=S('<div class="text-[12px] text-muted-foreground opacity-80"> </div>'),Du=S('<label class="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"><span class="font-mono text-foreground"> </span> <!> <!></label> <!>',1),qu=S("<option> </option>"),Bu=S('<div class="relative"><select></select></div>'),Fu=S('<div class="flex items-center space-x-2"><input type="checkbox" class="aspect-square h-4 w-4 rounded border-primary text-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 accent-primary"/> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label></div>'),Vu=S('<input type="number"/>'),Hu=S('<input type="date"/>'),Gu=S('<input type="url" placeholder="https://..."/>'),Wu=S('<textarea class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" rows="4"></textarea>'),Zu=S('<input type="text"/>'),Ju=S('<span class="text-xs text-destructive">*</span>'),Uu=S('<div class="text-xs text-muted-foreground"> </div>'),Ku=S('<div class="flex flex-col gap-4 p-4"><!> <!></div>'),Yu=S('<div class="rounded-lg border bg-card text-card-foreground shadow-sm"><button class="flex w-full items-center gap-2 border-b bg-muted/20 px-4 py-2 text-left text-sm font-medium hover:bg-muted/40"><!> <span class="font-mono"> </span> <span class="text-xs text-muted-foreground">object</span> <!></button> <!></div>'),Qu=S('<input type="text"/>'),Xu=S('<div class="flex items-start gap-2"><span class="mt-2 font-mono text-xs text-muted-foreground min-w-[20px] text-right"></span> <div class="flex-1"><!></div> <button class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive hover:text-destructive-foreground" title="Remove"><!></button></div>'),ec=S('<div class="py-2 text-center text-xs italic text-muted-foreground">Empty array</div>'),tc=S('<div class="space-y-2 rounded-lg border bg-muted/10 p-3"><div class="flex items-center justify-between"><span class="text-xs font-semibold uppercase text-muted-foreground">Array Items</span> <button class="inline-flex h-6 items-center gap-1 rounded-full border bg-background px-2 text-[10px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground"><!> Add Item</button></div> <div class="space-y-2"><!> <!></div></div>'),rc=S("<option> </option>"),nc=S('<div class="pl-2 border-l-2 border-primary"><!></div>'),ic=S('<div class="rounded-md border p-4"><div class="mb-4"><label class="mb-2 block text-xs font-medium text-muted-foreground">Select Type Variant</label> <select></select></div> <!></div>'),ac=S('<textarea class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" rows="3"></textarea>'),sc=S('<div class="group flex flex-col gap-2"><!> <!></div>');function An(t,e){St(e,!0);let r=He(e,"required",3,!1),n=He(e,"value",11,void 0),i=de(()=>Ls(e.schema)),a=de(()=>e.schema.description??""),s=de(()=>c(i)==="object"&&typeof n()=="object"&&n()!==null?n():{}),o=de(()=>c(i)==="array"&&Array.isArray(n())?n():[]),u=de(()=>e.schema.oneOf??e.schema.anyOf??[]),l=ie(0),f=ie(!1);function p(C){const z=C.target;switch(c(i)){case"number":e.onchange(z.value===""?void 0:parseFloat(z.value));break;case"integer":e.onchange(z.value===""?void 0:parseInt(z.value,10));break;case"boolean":e.onchange(z.checked);break;default:e.onchange(z.value)}}function d(C){const z=C.target;if(e.schema.enum){const q=e.schema.enum[z.selectedIndex];e.onchange(q)}else e.onchange(z.value)}function w(){const C=e.schema.items?mi(e.schema.items):"";e.onchange([...c(o),C])}function m(C){const z=[...c(o)];z.splice(C,1),e.onchange(z)}function _(C,z){const q=[...c(o)];q[C]=z,e.onchange(q)}function v(C,z){e.onchange({...c(s),[C]:z})}var x=sc(),P=h(x);{var J=C=>{var z=Du(),q=B(z),Q=h(q),N=h(Q),$=y(Q,2);{var j=W=>{var Y=Lu();g(W,Y)};L($,W=>{r()&&W(j)})}var I=y($,2);{var E=W=>{var Y=Iu(),Ne=h(Y);O(()=>U(Ne,e.schema.type)),g(W,Y)};L(I,W=>{e.schema.type&&W(E)})}var X=y(q,2);{var D=W=>{var Y=ju(),Ne=h(Y);O(()=>U(Ne,c(a))),g(W,Y)};L(X,W=>{c(a)&&W(D)})}O(()=>{Ae(q,"for",e.name),U(N,e.name)}),g(C,z)};L(P,C=>{c(i)!=="object"&&C(J)})}var k=y(P,2);{var T=C=>{var z=Bu(),q=h(z);st(q,21,()=>e.schema.enum??[],ir,(Q,N)=>{var $=qu(),j=h($),I={};O((E,X)=>{pi($,n()===c(N)),U(j,E),I!==(I=X)&&($.value=($.__value=X)??"")},[()=>String(c(N)),()=>String(c(N))]),g(Q,$)}),O(()=>{Ae(q,"id",e.name),ge(q,1,ft(It))}),ne("change",q,d),g(C,z)},V=C=>{var z=Fu(),q=h(z),Q=y(q,2),N=h(Q);O(()=>{Ae(q,"id",e.name),Vl(q,n()===!0),Ae(Q,"for",e.name),U(N,n()?"true":"false")}),ne("change",q,p),g(C,z)},H=C=>{var z=Vu();O(()=>{Ae(z,"id",e.name),ge(z,1,ft(It)),Yt(z,n()??""),Ae(z,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:""),Ae(z,"min",e.schema.minimum),Ae(z,"max",e.schema.maximum),Ae(z,"step",c(i)==="integer"?1:"any")}),ne("input",z,p),g(C,z)},M=C=>{var z=K(),q=B(z);{var Q=I=>{var E=Hu();O(()=>{Ae(E,"id",e.name),ge(E,1,ft(It)),Yt(E,n()??"")}),ne("input",E,p),g(I,E)},N=I=>{var E=Gu();O(()=>{Ae(E,"id",e.name),ge(E,1,ft(It)),Yt(E,n()??"")}),ne("input",E,p),g(I,E)},$=I=>{var E=Wu();O(()=>{Ae(E,"id",e.name),Yt(E,n()??""),Ae(E,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:"")}),ne("input",E,p),g(I,E)},j=I=>{var E=Zu();O(()=>{Ae(E,"id",e.name),ge(E,1,ft(It)),Yt(E,n()??""),Ae(E,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:""),Ae(E,"minlength",e.schema.minLength),Ae(E,"maxlength",e.schema.maxLength)}),ne("input",E,p),g(I,E)};L(q,I=>{e.schema.format==="date"?I(Q):e.schema.format==="uri"?I(N,1):e.schema.maxLength&&e.schema.maxLength>200?I($,2):I(j,!1)})}g(C,z)},ke=C=>{var z=Yu(),q=h(z),Q=h(q);{var N=Y=>{Rn(Y,{size:14,class:"text-muted-foreground"})},$=Y=>{Nn(Y,{size:14,class:"text-muted-foreground"})};L(Q,Y=>{c(f)?Y(N):Y($,!1)})}var j=y(Q,2),I=h(j),E=y(j,4);{var X=Y=>{var Ne=Ju();g(Y,Ne)};L(E,Y=>{r()&&Y(X)})}var D=y(q,2);{var W=Y=>{var Ne=Ku(),Je=h(Ne);{var Oe=Se=>{var Le=Uu(),Ie=h(Le);O(()=>U(Ie,c(a))),g(Se,Le)};L(Je,Se=>{c(a)&&Se(Oe)})}var Te=y(Je,2);st(Te,17,()=>Object.entries(e.schema.properties??{}),([Se,Le])=>Se,(Se,Le)=>{var Ie=de(()=>Si(c(Le),2));let Ce=()=>c(Ie)[0],Me=()=>c(Ie)[1];{let gt=de(()=>{var lt;return((lt=e.schema.required)==null?void 0:lt.includes(Ce()))??!1});An(Se,{get name(){return Ce()},get schema(){return Me()},get required(){return c(gt)},get value(){return c(s)[Ce()]},onchange:lt=>v(Ce(),lt)})}}),g(Y,Ne)};L(D,Y=>{c(f)||Y(W)})}O(()=>U(I,e.name)),ne("click",q,()=>A(f,!c(f))),g(C,z)},ee=C=>{var z=tc(),q=h(z),Q=y(h(q),2),N=h(Q);Su(N,{size:10});var $=y(q,2),j=h($);st(j,17,()=>c(o),ir,(X,D,W)=>{var Y=Xu(),Ne=h(Y);Ne.textContent=`[${W}]`;var Je=y(Ne,2),Oe=h(Je);{var Te=Ce=>{{let Me=de(()=>`${e.name}[${W}]`);An(Ce,{get name(){return c(Me)},get schema(){return e.schema.items},get value(){return c(D)},onchange:gt=>_(W,gt)})}},Se=Ce=>{var Me=Qu();O(()=>{ge(Me,1,ft(It)),Yt(Me,c(D)??"")}),ne("input",Me,gt=>_(W,gt.target.value)),g(Ce,Me)};L(Oe,Ce=>{var Me;((Me=e.schema.items)==null?void 0:Me.type)==="object"?Ce(Te):Ce(Se,!1)})}var Le=y(Je,2),Ie=h(Le);Tu(Ie,{size:14}),ne("click",Le,()=>m(W)),g(X,Y)});var I=y(j,2);{var E=X=>{var D=ec();g(X,D)};L(I,X=>{c(o).length===0&&X(E)})}ne("click",Q,w),g(C,z)},be=C=>{var z=ic(),q=h(z),Q=h(q),N=y(Q,2);st(N,21,()=>c(u),ir,(I,E,X)=>{var D=rc(),W=h(D);D.value=D.__value=X,O(()=>{pi(D,X===c(l)),U(W,c(E).title??c(E).type??`Option ${X+1}`)}),g(I,D)});var $=y(q,2);{var j=I=>{var E=nc(),X=h(E);{let D=de(()=>`${e.name}_variant`);An(X,{get name(){return c(D)},get schema(){return c(u)[c(l)]},get value(){return n()},get onchange(){return e.onchange}})}g(I,E)};L($,I=>{c(u)[c(l)]&&I(j)})}O(()=>{Ae(Q,"for",`${e.name}_variant_select`),Ae(N,"id",`${e.name}_variant_select`),ge(N,1,ft(It))}),ne("change",N,I=>{A(l,I.target.selectedIndex,!0),e.onchange(mi(c(u)[c(l)]))}),g(C,z)},ze=C=>{var z=ac();O(q=>{Ae(z,"id",e.name),Yt(z,q)},[()=>typeof n()=="string"?n():JSON.stringify(n()??"",null,2)]),ne("input",z,q=>{const Q=q.target.value;try{e.onchange(JSON.parse(Q))}catch{e.onchange(Q)}}),g(C,z)};L(k,C=>{c(i)==="enum"?C(T):c(i)==="boolean"?C(V,1):c(i)==="number"||c(i)==="integer"?C(H,2):c(i)==="string"?C(M,3):c(i)==="object"?C(ke,4):c(i)==="array"?C(ee,5):c(i)==="oneOf"||c(i)==="anyOf"?C(be,6):C(ze,!1)})}g(t,x),$t()}Ut(["change","input","click"]);var oc=S('<div class="flex flex-col items-center justify-center rounded-lg border border-dashed py-10 text-center text-muted-foreground bg-muted/30"><!> <p class="text-sm italic">This tool takes no parameters.</p></div>'),lc=S('<div class="space-y-6"><!> <!></div>');function uc(t,e){St(e,!0);let r=He(e,"values",31,()=>at({})),n=de(()=>e.schema.properties??{}),i=de(()=>new Set(e.schema.required??[])),a=de(()=>Object.keys(c(n)));var s=lc(),o=h(s);st(o,16,()=>c(a),f=>f,(f,p)=>{const d=de(()=>c(n)[p]),w=de(()=>c(i).has(p));An(f,{get name(){return p},get schema(){return c(d)},get required(){return c(w)},get value(){return r()[p]},onchange:m=>{r({...r(),[p]:m})}})});var u=y(o,2);{var l=f=>{var p=oc(),d=h(p);hu(d,{class:"mb-2 h-8 w-8 opacity-20"}),g(f,p)};L(u,f=>{c(a).length===0&&f(l)})}g(t,s),$t()}function ji(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $r=ji();function js(t){$r=t}var Qr={exec:()=>null};function we(t,e=""){let r=typeof t=="string"?t:t.source;const n={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(Ue.caret,"$1"),r=r.replace(i,s),n},getRegex:()=>new RegExp(r,e)};return n}var Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},cc=/^(?:[ \t]*(?:\n|$))+/,fc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,dc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,hc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Di=/(?:[*+-]|\d{1,9}[.)])/,Ds=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,qs=we(Ds).replace(/bull/g,Di).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vc=we(Ds).replace(/bull/g,Di).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,pc=/^[^\n]+/,Bi=/(?!\s*\])(?:\\.|[^\[\]\\])+/,gc=we(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Bi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),mc=we(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Di).getRegex(),Fn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Fi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_c=we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Fi).replace("tag",Fn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bs=we(qi).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),bc=we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bs).getRegex(),Vi={blockquote:bc,code:fc,def:gc,fences:dc,heading:hc,hr:hn,html:_c,lheading:qs,list:mc,newline:cc,paragraph:Bs,table:Qr,text:pc},pa=we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),xc={...Vi,lheading:vc,table:pa,paragraph:we(qi).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex()},yc={...Vi,html:we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Fi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:we(qi).replace("hr",hn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",qs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Fs=/^( {2,}|\\)\n(?!\s*$)/,Sc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Vn=/[\p{P}\p{S}]/u,Hi=/[\s\p{P}\p{S}]/u,Vs=/[^\s\p{P}\p{S}]/u,$c=we(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Hi).getRegex(),Hs=/(?!~)[\p{P}\p{S}]/u,Ac=/(?!~)[\s\p{P}\p{S}]/u,Tc=/(?:[^\s\p{P}\p{S}]|~)/u,Ec=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Gs=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,zc=we(Gs,"u").replace(/punct/g,Vn).getRegex(),Nc=we(Gs,"u").replace(/punct/g,Hs).getRegex(),Ws="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Rc=we(Ws,"gu").replace(/notPunctSpace/g,Vs).replace(/punctSpace/g,Hi).replace(/punct/g,Vn).getRegex(),Pc=we(Ws,"gu").replace(/notPunctSpace/g,Tc).replace(/punctSpace/g,Ac).replace(/punct/g,Hs).getRegex(),Cc=we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vs).replace(/punctSpace/g,Hi).replace(/punct/g,Vn).getRegex(),Mc=we(/\\(punct)/,"gu").replace(/punct/g,Vn).getRegex(),Oc=we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Lc=we(Fi).replace("(?:-->|$)","-->").getRegex(),Ic=we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Lc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Pn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jc=we(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Pn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zs=we(/^!?\[(label)\]\[(ref)\]/).replace("label",Pn).replace("ref",Bi).getRegex(),Js=we(/^!?\[(ref)\](?:\[\])?/).replace("ref",Bi).getRegex(),Dc=we("reflink|nolink(?!\\()","g").replace("reflink",Zs).replace("nolink",Js).getRegex(),Gi={_backpedal:Qr,anyPunctuation:Mc,autolink:Oc,blockSkip:Ec,br:Fs,code:kc,del:Qr,emStrongLDelim:zc,emStrongRDelimAst:Rc,emStrongRDelimUnd:Cc,escape:wc,link:jc,nolink:Js,punctuation:$c,reflink:Zs,reflinkSearch:Dc,tag:Ic,text:Sc,url:Qr},qc={...Gi,link:we(/^!?\[(label)\]\((.*?)\)/).replace("label",Pn).getRegex(),reflink:we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pn).getRegex()},_i={...Gi,emStrongRDelimAst:Pc,emStrongLDelim:Nc,url:we(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Bc={..._i,br:we(Fs).replace("{2,}","*").getRegex(),text:we(_i.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bn={normal:Vi,gfm:xc,pedantic:yc},Gr={normal:Gi,gfm:_i,breaks:Bc,pedantic:qc},Fc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ga=t=>Fc[t];function Et(t,e){if(e){if(Ue.escapeTest.test(t))return t.replace(Ue.escapeReplace,ga)}else if(Ue.escapeTestNoEncode.test(t))return t.replace(Ue.escapeReplaceNoEncode,ga);return t}function ma(t){try{t=encodeURI(t).replace(Ue.percentDecode,"%")}catch{return null}return t}function _a(t,e){var a;const r=t.replace(Ue.findPipe,(s,o,u)=>{let l=!1,f=o;for(;--f>=0&&u[f]==="\\";)l=!l;return l?"|":" |"}),n=r.split(Ue.splitPipe);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!((a=n.at(-1))!=null&&a.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Ue.slashPipe,"|");return n}function Wr(t,e,r){const n=t.length;if(n===0)return"";let i=0;for(;i<n&&t.charAt(n-i-1)===e;)i++;return t.slice(0,n-i)}function Vc(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let n=0;n<t.length;n++)if(t[n]==="\\")n++;else if(t[n]===e[0])r++;else if(t[n]===e[1]&&(r--,r<0))return n;return r>0?-2:-1}function ba(t,e,r,n,i){const a=e.href,s=e.title||null,o=t[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;const u={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:a,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,u}function Hc(t,e,r){const n=t.match(r.other.indentCodeCompensation);if(n===null)return e;const i=n[1];return e.split(`
`).map(a=>{const s=a.match(r.other.beginningSpace);if(s===null)return a;const[o]=s;return o.length>=i.length?a.slice(i.length):a}).join(`
`)}var Cn=class{constructor(t){he(this,"options");he(this,"rules");he(this,"lexer");this.options=t||$r}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Wr(r,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const r=e[0],n=Hc(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){const n=Wr(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Wr(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let r=Wr(e[0],`
`).split(`
`),n="",i="";const a=[];for(;r.length>0;){let s=!1;const o=[];let u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))o.push(r[u]),s=!0;else if(!s)o.push(r[u]);else break;r=r.slice(u);const l=o.join(`
`),f=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${l}`:l,i=i?`${i}
${f}`:f;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,a,!0),this.lexer.state.top=p,r.length===0)break;const d=a.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){const w=d,m=w.raw+`
`+r.join(`
`),_=this.blockquote(m);a[a.length-1]=_,n=n.substring(0,n.length-w.raw.length)+_.raw,i=i.substring(0,i.length-w.text.length)+_.text;break}else if((d==null?void 0:d.type)==="list"){const w=d,m=w.raw+`
`+r.join(`
`),_=this.list(m);a[a.length-1]=_,n=n.substring(0,n.length-d.raw.length)+_.raw,i=i.substring(0,i.length-w.raw.length)+_.raw,r=m.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:a,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim();const n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");const a=this.rules.other.listItemRegex(r);let s=!1;for(;t;){let u=!1,l="",f="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,x=>" ".repeat(3*x.length)),d=t.split(`
`,1)[0],w=!p.trim(),m=0;if(this.options.pedantic?(m=2,f=p.trimStart()):w?m=e[1].length+1:(m=e[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,f=p.slice(m),m+=e[1].length),w&&this.rules.other.blankLine.test(d)&&(l+=d+`
`,t=t.substring(d.length+1),u=!0),!u){const x=this.rules.other.nextBulletRegex(m),P=this.rules.other.hrRegex(m),J=this.rules.other.fencesBeginRegex(m),k=this.rules.other.headingBeginRegex(m),T=this.rules.other.htmlBeginRegex(m);for(;t;){const V=t.split(`
`,1)[0];let H;if(d=V,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),H=d):H=d.replace(this.rules.other.tabCharGlobal,"    "),J.test(d)||k.test(d)||T.test(d)||x.test(d)||P.test(d))break;if(H.search(this.rules.other.nonSpaceChar)>=m||!d.trim())f+=`
`+H.slice(m);else{if(w||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||J.test(p)||k.test(p)||P.test(p))break;f+=`
`+d}!w&&!d.trim()&&(w=!0),l+=V+`
`,t=t.substring(V.length+1),p=H.slice(m)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(s=!0));let _=null,v;this.options.gfm&&(_=this.rules.other.listIsTask.exec(f),_&&(v=_[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:l,task:!!_,checked:v,loose:!1,text:f,tokens:[]}),i.raw+=l}const o=i.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const l=i.items[u].tokens.filter(p=>p.type==="space"),f=l.length>0&&l.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=f}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:n,title:i}}}table(t){var s;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const r=_a(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(s=e[3])!=null&&s.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===n.length){for(const o of n)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<r.length;o++)a.header.push({text:r[o],tokens:this.lexer.inline(r[o]),header:!0,align:a.align[o]});for(const o of i)a.rows.push(_a(o,a.header.length).map((u,l)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[l]})));return a}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;const a=Wr(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=Vc(e[2],"()");if(a===-2)return;if(a>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(n);a&&(n=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),ba(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){const n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return ba(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let n=this.rules.inline.emStrongLDelim.exec(t);if(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))return;if(!(n[1]||n[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...n[0]].length-1;let s,o,u=a,l=0;const f=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+a);(n=f.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(o=[...s].length,n[3]||n[4]){u+=o;continue}else if((n[5]||n[6])&&a%3&&!((a+o)%3)){l+=o;continue}if(u-=o,u>0)continue;o=Math.min(o,o+u+l);const p=[...n[0]][0].length,d=t.slice(0,a+n.index+p+o);if(Math.min(a,o)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const w=d.slice(2,-2);return{type:"strong",raw:d,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let r,n;return e[2]==="@"?(r=e[1],n="mailto:"+r):(r=e[1],n=r),{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let a;do a=e[0],e[0]=((r=this.rules.inline._backpedal.exec(e[0]))==null?void 0:r[0])??"";while(a!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},Vt=class bi{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$r,this.options.tokenizer=this.options.tokenizer||new Cn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={other:Ue,block:bn.normal,inline:Gr.normal};this.options.pedantic?(r.block=bn.pedantic,r.inline=Gr.pedantic):this.options.gfm&&(r.block=bn.gfm,this.options.breaks?r.inline=Gr.breaks:r.inline=Gr.gfm),this.tokenizer.rules=r}static get rules(){return{block:bn,inline:Gr}}static lex(e,r){return new bi(r).lex(e)}static lexInline(e,r){return new bi(r).inlineTokens(e)}lex(e){e=e.replace(Ue.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){const n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],n=!1){var i,a,s;for(this.options.pedantic&&(e=e.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));e;){let o;if((a=(i=this.options.extensions)==null?void 0:i.block)!=null&&a.some(l=>(o=l.call({lexer:this},e,r))?(e=e.substring(o.raw.length),r.push(o),!0):!1))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);const l=r.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:r.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):r.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),r.push(o);continue}let u=e;if((s=this.options.extensions)!=null&&s.startBlock){let l=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(d=>{p=d.call({lexer:this},f),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(u=e.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(u))){const l=r.at(-1);n&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(o),n=u.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(o);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){var o,u,l;let n=e,i=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)f.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let a=!1,s="";for(;e;){a||(s=""),a=!1;let f;if((u=(o=this.options.extensions)==null?void 0:o.inline)!=null&&u.some(d=>(f=d.call({lexer:this},e,r))?(e=e.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const d=r.at(-1);f.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=f.raw,d.text+=f.text):r.push(f);continue}if(f=this.tokenizer.emStrong(e,n,s)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),r.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),r.push(f);continue}let p=e;if((l=this.options.extensions)!=null&&l.startInline){let d=1/0;const w=e.slice(1);let m;this.options.extensions.startInline.forEach(_=>{m=_.call({lexer:this},w),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(p=e.substring(0,d+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(s=f.raw.slice(-1)),a=!0;const d=r.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=f.raw,d.text+=f.text):r.push(f);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},Mn=class{constructor(t){he(this,"options");he(this,"parser");this.options=t||$r}space(t){return""}code({text:t,lang:e,escaped:r}){var a;const n=(a=(e||"").match(Ue.notSpaceStart))==null?void 0:a[0],i=t.replace(Ue.endingNewline,"")+`
`;return n?'<pre><code class="language-'+Et(n)+'">'+(r?i:Et(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Et(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,r=t.start;let n="";for(let s=0;s<t.items.length;s++){const o=t.items[s];n+=this.listitem(o)}const i=e?"ol":"ul",a=e&&r!==1?' start="'+r+'"':"";return"<"+i+a+`>
`+n+"</"+i+`>
`}listitem(t){var r;let e="";if(t.task){const n=this.checkbox({checked:!!t.checked});t.loose?((r=t.tokens[0])==null?void 0:r.type)==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+Et(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);e+=this.tablerow({text:r});let n="";for(let i=0;i<t.rows.length;i++){const a=t.rows[i];r="";for(let s=0;s<a.length;s++)r+=this.tablecell(a[s]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Et(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){const n=this.parser.parseInline(r),i=ma(t);if(i===null)return n;t=i;let a='<a href="'+t+'"';return e&&(a+=' title="'+Et(e)+'"'),a+=">"+n+"</a>",a}image({href:t,title:e,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));const i=ma(t);if(i===null)return Et(r);t=i;let a=`<img src="${t}" alt="${r}"`;return e&&(a+=` title="${Et(e)}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Et(t.text)}},Wi=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Ht=class xi{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||$r,this.options.renderer=this.options.renderer||new Mn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wi}static parse(e,r){return new xi(r).parse(e)}static parseInline(e,r){return new xi(r).parseInline(e)}parse(e,r=!0){var i,a;let n="";for(let s=0;s<e.length;s++){const o=e[s];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[o.type]){const l=o,f=this.options.extensions.renderers[l.type].call({parser:this},l);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){n+=f||"";continue}}const u=o;switch(u.type){case"space":{n+=this.renderer.space(u);continue}case"hr":{n+=this.renderer.hr(u);continue}case"heading":{n+=this.renderer.heading(u);continue}case"code":{n+=this.renderer.code(u);continue}case"table":{n+=this.renderer.table(u);continue}case"blockquote":{n+=this.renderer.blockquote(u);continue}case"list":{n+=this.renderer.list(u);continue}case"html":{n+=this.renderer.html(u);continue}case"paragraph":{n+=this.renderer.paragraph(u);continue}case"text":{let l=u,f=this.renderer.text(l);for(;s+1<e.length&&e[s+1].type==="text";)l=e[++s],f+=`
`+this.renderer.text(l);r?n+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):n+=f;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(e,r=this.renderer){var i,a;let n="";for(let s=0;s<e.length;s++){const o=e[s];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=l||"";continue}}const u=o;switch(u.type){case"escape":{n+=r.text(u);break}case"html":{n+=r.html(u);break}case"link":{n+=r.link(u);break}case"image":{n+=r.image(u);break}case"strong":{n+=r.strong(u);break}case"em":{n+=r.em(u);break}case"codespan":{n+=r.codespan(u);break}case"br":{n+=r.br(u);break}case"del":{n+=r.del(u);break}case"text":{n+=r.text(u);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}},Xn,Tn=(Xn=class{constructor(t){he(this,"options");he(this,"block");this.options=t||$r}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Vt.lex:Vt.lexInline}provideParser(){return this.block?Ht.parse:Ht.parseInline}},he(Xn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xn),Gc=class{constructor(...t){he(this,"defaults",ji());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Ht);he(this,"Renderer",Mn);he(this,"TextRenderer",Wi);he(this,"Lexer",Vt);he(this,"Tokenizer",Cn);he(this,"Hooks",Tn);this.use(...t)}walkTokens(t,e){var n,i;let r=[];for(const a of t)switch(r=r.concat(e.call(this,a)),a.type){case"table":{const s=a;for(const o of s.header)r=r.concat(this.walkTokens(o.tokens,e));for(const o of s.rows)for(const u of o)r=r.concat(this.walkTokens(u.tokens,e));break}case"list":{const s=a;r=r.concat(this.walkTokens(s.items,e));break}default:{const s=a;(i=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&i[s.type]?this.defaults.extensions.childTokens[s.type].forEach(o=>{const u=s[o].flat(1/0);r=r.concat(this.walkTokens(u,e))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,e)))}}return r}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{const n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=e.renderers[i.name];a?e.renderers[i.name]=function(...s){let o=i.renderer.apply(this,s);return o===!1&&(o=a.apply(this,s)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[i.level];a?a.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),r.renderer){const i=this.defaults.renderer||new Mn(this.defaults);for(const a in r.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const s=a,o=r.renderer[s],u=i[s];i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f||""}}n.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Cn(this.defaults);for(const a in r.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const s=a,o=r.tokenizer[s],u=i[s];i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f}}n.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new Tn;for(const a in r.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const s=a,o=r.hooks[s],u=i[s];Tn.passThroughHooks.has(a)?i[s]=l=>{if(this.defaults.async)return Promise.resolve(o.call(i,l)).then(p=>u.call(i,p));const f=o.call(i,l);return u.call(i,f)}:i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f}}n.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,a=r.walkTokens;n.walkTokens=function(s){let o=[];return o.push(a.call(this,s)),i&&(o=o.concat(i.call(this,s))),o}}this.defaults={...this.defaults,...n}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Vt.lex(t,e??this.defaults)}parser(t,e){return Ht.parse(t,e??this.defaults)}parseMarkdown(t){return(r,n)=>{const i={...n},a={...this.defaults,...i},s=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=t);const o=a.hooks?a.hooks.provideLexer():t?Vt.lex:Vt.lexInline,u=a.hooks?a.hooks.provideParser():t?Ht.parse:Ht.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(l=>o(l,a)).then(l=>a.hooks?a.hooks.processAllTokens(l):l).then(l=>a.walkTokens?Promise.all(this.walkTokens(l,a.walkTokens)).then(()=>l):l).then(l=>u(l,a)).then(l=>a.hooks?a.hooks.postprocess(l):l).catch(s);try{a.hooks&&(r=a.hooks.preprocess(r));let l=o(r,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let f=u(l,a);return a.hooks&&(f=a.hooks.postprocess(f)),f}catch(l){return s(l)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const n="<p>An error occurred:</p><pre>"+Et(r.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(r);throw r}}},kr=new Gc;function $e(t,e){return kr.parse(t,e)}$e.options=$e.setOptions=function(t){return kr.setOptions(t),$e.defaults=kr.defaults,js($e.defaults),$e};$e.getDefaults=ji;$e.defaults=$r;$e.use=function(...t){return kr.use(...t),$e.defaults=kr.defaults,js($e.defaults),$e};$e.walkTokens=function(t,e){return kr.walkTokens(t,e)};$e.parseInline=kr.parseInline;$e.Parser=Ht;$e.parser=Ht.parse;$e.Renderer=Mn;$e.TextRenderer=Wi;$e.Lexer=Vt;$e.lexer=Vt.lex;$e.Tokenizer=Cn;$e.Hooks=Tn;$e.parse=$e;$e.options;$e.setOptions;$e.use;$e.walkTokens;$e.parseInline;Ht.parse;Vt.lex;var Wc=S('<button class="mx-1 text-muted-foreground hover:text-foreground italic"> </button> <span class="text-muted-foreground"> </span>',1),Zc=S('<span class="text-purple-600 dark:text-purple-400"> </span> <span class="text-muted-foreground">:</span>',1),Jc=S("<span> </span>"),Uc=S('<span class="text-muted-foreground">,</span>'),Kc=S('<div class="whitespace-pre-wrap"><!> <!> <!></div>'),Yc=S('<div class="ml-2 border-l pl-3 my-0.5"></div> <span class="text-muted-foreground"> </span>',1),Qc=S('<div class="inline-block align-top font-mono text-xs leading-6"><button class="inline-flex h-4 w-4 items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground mr-0.5"><!></button> <span class="text-muted-foreground"> </span> <!></div>'),Xc=S("<span> </span>");function Hn(t,e){St(e,!0);let r=He(e,"depth",3,0),n=ie(at(lr(()=>r()>2))),i=de(()=>typeof e.data=="object"&&e.data!==null&&!Array.isArray(e.data)),a=de(()=>Array.isArray(e.data)),s=de(()=>c(i)?Object.entries(e.data):c(a)?e.data.map((_,v)=>[String(v),_]):[]),o=de(()=>c(s).length),u=de(()=>c(a)?["[","]"]:["{","}"]);function l(_){return _===null?"null":typeof _=="string"?`"${_}"`:String(_)}function f(_){if(_===null)return"text-muted-foreground italic";switch(typeof _){case"string":return"text-green-600 dark:text-green-400";case"number":return"text-blue-600 dark:text-blue-400";case"boolean":return"text-red-600 dark:text-red-400";default:return"text-foreground"}}var p=K(),d=B(p);{var w=_=>{var v=Qc(),x=h(v),P=h(x);{var J=ee=>{Rn(ee,{size:10})},k=ee=>{Nn(ee,{size:10})};L(P,ee=>{c(n)?ee(J):ee(k,!1)})}var T=y(x,2),V=h(T),H=y(T,2);{var M=ee=>{var be=Wc(),ze=B(be),C=h(ze),z=y(ze,2),q=h(z);O(()=>{U(C,`${c(o)??""} item${c(o)!==1?"s":""}`),U(q,c(u)[1])}),ne("click",ze,()=>A(n,!1)),g(ee,be)},ke=ee=>{var be=Yc(),ze=B(be);st(ze,23,()=>c(s),([q,Q])=>q,(q,Q,N)=>{var $=de(()=>Si(c(Q),2));let j=()=>c($)[0],I=()=>c($)[1];var E=Kc(),X=h(E);{var D=Te=>{var Se=Zc(),Le=B(Se),Ie=h(Le);O(()=>U(Ie,j())),g(Te,Se)};L(X,Te=>{c(a)||Te(D)})}var W=y(X,2);{var Y=Te=>{{let Se=de(()=>r()+1);Hn(Te,{get data(){return I()},get depth(){return c(Se)}})}},Ne=Te=>{var Se=Jc(),Le=h(Se);O((Ie,Ce)=>{ge(Se,1,Ie),U(Le,Ce)},[()=>ft(f(I())),()=>l(I())]),g(Te,Se)};L(W,Te=>{typeof I()=="object"&&I()!==null?Te(Y):Te(Ne,!1)})}var Je=y(W,2);{var Oe=Te=>{var Se=Uc();g(Te,Se)};L(Je,Te=>{c(N)<c(s).length-1&&Te(Oe)})}g(q,E)});var C=y(ze,2),z=h(C);O(()=>U(z,c(u)[1])),g(ee,be)};L(H,ee=>{c(n)?ee(M):ee(ke,!1)})}O(()=>U(V,c(u)[0])),ne("click",x,()=>A(n,!c(n))),g(_,v)},m=_=>{var v=Xc(),x=h(v);O((P,J)=>{ge(v,1,P),U(x,J)},[()=>`font-mono text-xs ${f(e.data)}`,()=>l(e.data)]),g(_,v)};L(d,_=>{c(i)||c(a)?_(w):_(m,!1)})}g(t,p),$t()}Ut(["click"]);var ef=S('<button class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"><!></button>'),tf=S('<div class="overflow-x-auto"><!></div>'),rf=S('<div class="prose-result svelte-60mi68"><!></div>'),nf=S("<pre> </pre>"),af=S('<div><div class="absolute right-2 top-2 z-10 flex items-center gap-1"><!> <button class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm" title="Copy content"><!></button></div> <!></div>'),sf=S('<div><img alt="Tool result" class="max-w-full rounded-md shadow-sm ring-1 ring-border"/></div>'),of=S('<div class="p-4"><pre class="overflow-x-auto whitespace-pre-wrap break-words text-xs font-mono text-muted-foreground"> </pre></div>'),lf=S('<div class="flex items-center justify-center p-8 text-sm text-muted-foreground italic">No output returned</div>'),uf=S("<div><!> <!></div>");function Us(t,e){St(e,!0);let r=He(e,"isError",3,!1),n=ie(null),i=at({});function a(_){try{const v=JSON.parse(_);if(typeof v=="object"&&v!==null)return{parsed:v,isJson:!0}}catch{}return{parsed:null,isJson:!1}}function s(_){const v=_.trimStart();if(v.startsWith("{")||v.startsWith("["))return!1;if(/^#{1,6}\s/m.test(_)||/^\|.+\|.+\|/m.test(_)||/^```/m.test(_))return!0;let P=0;return/^\*\s|^-\s{1,2}\S/m.test(_)&&P++,/^\d+\.\s/m.test(_)&&P++,/\*\*[^*]+\*\*/.test(_)&&P++,/`[^`]+`/.test(_)&&P++,/\[[^\]]+\]\([^)]+\)/.test(_)&&P++,/^>\s/m.test(_)&&P++,P>=2}function o(_){const v=/^(h[1-6]|p|br|strong|em|code|pre|ul|ol|li|a|blockquote|table|thead|tbody|tr|th|td|hr|img|span|div|del|sup|sub|input)$/i,x=/^(href|src|alt|title|class|id|type|checked|disabled)$/i,P=document.createElement("div");P.innerHTML=_;function J(k){for(const T of Array.from(k.children)){if(!v.test(T.tagName)){T.replaceWith(...Array.from(T.childNodes));continue}for(const V of Array.from(T.attributes))x.test(V.name)||T.removeAttribute(V.name);T.hasAttribute("href")&&((T.getAttribute("href")??"").startsWith("javascript:")&&T.setAttribute("href","#"),T.setAttribute("target","_blank"),T.setAttribute("rel","noopener noreferrer")),J(T)}}return J(P),P.innerHTML}function u(_){const v=$e.parse(_,{async:!1,gfm:!0});return o(v)}async function l(_,v){await $n(_),A(n,v,!0),setTimeout(()=>{c(n)===v&&A(n,null)},2e3)}function f(_){const v=i[_]??"rich";i[_]=v==="rich"?"raw":"rich"}var p=uf(),d=h(p);st(d,17,()=>e.content,ir,(_,v,x)=>{var P=K(),J=B(P);{var k=H=>{const M=de(()=>{const{parsed:D,isJson:W}=a(c(v).text);return{parsed:D,isJson:W}}),ke=de(()=>!c(M).isJson&&s(c(v).text)),ee=de(()=>i[x]??"rich");var be=af(),ze=h(be),C=h(ze);{var z=D=>{var W=ef(),Y=h(W);{var Ne=Oe=>{Ii(Oe,{size:14})},Je=Oe=>{vu(Oe,{size:14})};L(Y,Oe=>{c(ee)==="rich"?Oe(Ne):Oe(Je,!1)})}O(()=>Ae(W,"title",c(ee)==="rich"?"View raw":"View rendered")),ne("click",W,()=>f(x)),g(D,W)};L(C,D=>{c(ke)&&D(z)})}var q=y(C,2),Q=h(q);{var N=D=>{au(D,{size:14,class:"text-green-500"})},$=D=>{Ns(D,{size:14})};L(Q,D=>{c(n)===x?D(N):D($,!1)})}var j=y(ze,2);{var I=D=>{var W=tf(),Y=h(W);Hn(Y,{get data(){return c(M).parsed}}),g(D,W)},E=D=>{var W=rf(),Y=h(W);Pl(Y,()=>u(c(v).text)),g(D,W)},X=D=>{var W=nf(),Y=h(W);O(()=>{ge(W,1,`overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-muted/50 p-3 text-xs font-mono leading-relaxed ${r()?"text-destructive":"text-foreground"}`,"svelte-60mi68"),U(Y,c(v).text)}),g(D,W)};L(j,D=>{c(M).isJson?D(I):c(ke)&&c(ee)==="rich"?D(E,1):D(X,!1)})}O(()=>ge(be,1,`relative p-4 ${x<e.content.length-1?"border-b":""}`,"svelte-60mi68")),ne("click",q,()=>l(c(v).text??"",x)),g(H,be)},T=H=>{var M=sf(),ke=h(M);O(()=>{ge(M,1,`flex justify-center bg-muted/20 p-4 ${x<e.content.length-1?"border-b":""}`,"svelte-60mi68"),Ae(ke,"src",`data:${c(v).mimeType??"image/png"};base64,${c(v).data}`)}),g(H,M)},V=H=>{var M=of(),ke=h(M),ee=h(ke);O(be=>U(ee,be),[()=>JSON.stringify(c(v),null,2)]),g(H,M)};L(J,H=>{c(v).type==="text"&&c(v).text?H(k):c(v).type==="image"&&c(v).data?H(T,1):H(V,!1)})}g(_,P)});var w=y(d,2);{var m=_=>{var v=lf();g(_,v)};L(w,_=>{e.content.length===0&&_(m)})}O(()=>ge(p,1,`overflow-hidden rounded-lg border ${r()?"border-destructive/50 bg-destructive/5":"bg-card text-card-foreground"}`,"svelte-60mi68")),g(t,p),$t()}Ut(["click"]);var cf=S('<div class="flex flex-wrap gap-1.5 pt-0.5"></div>'),ff=S('<p class="text-sm leading-relaxed text-muted-foreground"> </p>'),df=S("<li> </li>"),hf=S('<div class="rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-900/20 dark:text-yellow-200"><div class="flex items-start gap-2"><!> <div class="space-y-0.5"><ul class="list-disc pl-4 space-y-0.5 text-xs"></ul></div></div></div>'),vf=S('<p class="text-xs text-destructive"> </p>'),pf=S('<div class="space-y-2"><textarea class="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"></textarea> <!></div>'),gf=S('<div class="overflow-x-auto rounded-md bg-muted/30 p-3"><!></div>'),mf=S('<div class="flex items-center gap-2"><span class="text-xs font-medium text-destructive flex items-center gap-1"><!> Proceed?</span> <button>Yes</button> <button>Cancel</button></div>'),_f=S('<div class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"></div> Running...',1),bf=S('<!> Execute <kbd class="ml-1 rounded border border-current/20 bg-primary-foreground/10 px-1 py-0.5 text-[10px] font-mono leading-none"> </kbd>',1),xf=S("<button><!></button>"),yf=S('<div class="flex items-center justify-between gap-3 border-t bg-muted/20 px-4 py-3"><button><!> Clear</button> <!></div>'),wf=S('<div class="flex items-center gap-1 rounded-full border bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground"><!> </div>'),kf=S('<div class="animate-in space-y-3"><div class="flex items-center justify-between"><h3 class="text-sm font-semibold">Result</h3> <!></div> <!></div>'),Sf=S('<div class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-muted-foreground"><div class="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"></div> <p class="mt-3 text-xs"> </p></div>'),$f=S('<div class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground"><!> <p class="text-xs">Results will appear here after execution</p> <p class="mt-1 text-[10px] opacity-60"> </p></div>'),Af=S('<div class="space-y-3 border-b pb-5"><div class="flex items-start justify-between gap-4"><div class="space-y-1"><h2 class="text-2xl font-bold tracking-tight"> </h2> <!></div> <div class="hidden sm:block"><div class="rounded-full bg-muted p-2"><!></div></div></div> <!> <!></div> <div class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2"><div class="flex flex-col"><div class="flex flex-1 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm"><div class="flex items-center gap-1 border-b px-3 py-1.5"><button><!> Form</button> <button><!> JSON</button> <button><!> Schema</button></div> <div class="flex-1 overflow-y-auto p-4"><!></div> <!></div></div> <div class="flex flex-col"><!></div></div>',1);function Tf(t,e){St(e,!0);let r=ie(at({})),n=ie(null),i=ie(!1),a=ie(0),s=ie(!1),o=ie("form"),u=ie(""),l=ie("");nr(()=>{const G=e.tool.name,te=localStorage.getItem(`mcpplay-form-${G}`);if(te)try{A(r,JSON.parse(te),!0)}catch{A(r,Sn(e.tool.inputSchema),!0)}else A(r,Sn(e.tool.inputSchema),!0);A(n,null),A(i,!1),A(s,!1),A(o,"form"),A(l,"")}),nr(()=>{c(o)==="json"&&A(u,JSON.stringify(c(r),null,2),!0)}),nr(()=>{e.tool&&Object.keys(c(r)).length>0&&localStorage.setItem(`mcpplay-form-${e.tool.name}`,JSON.stringify(c(r)))});let f=de(()=>Is(e.tool.inputSchema));function p(G){A(u,G,!0);try{A(r,JSON.parse(G),!0),A(l,"")}catch(te){A(l,te.message,!0)}}function d(){if(e.tool.requiresConfirmation&&!c(s)){A(s,!0);return}A(s,!1),A(i,!0),A(n,null);const G=`${e.tool.name}-${Date.now()}`,te=Ts(xe=>{xe.type==="tool_result"&&xe.id===G?(A(n,{content:xe.content,isError:xe.is_error},!0),A(a,xe.latency_ms,!0),A(i,!1),te()):xe.type==="error"&&(A(n,{content:[{type:"text",text:xe.message}],isError:!0},!0),A(i,!1),te())}),_e={};for(const[xe,qe]of Object.entries(c(r)))qe!==void 0&&qe!==""&&(_e[xe]=qe);Ar({type:"call_tool",id:G,tool_name:e.tool.name,arguments:_e})}function w(){A(r,Sn(e.tool.inputSchema),!0),A(n,null),A(u,"{}"),A(l,""),localStorage.removeItem(`mcpplay-form-${e.tool.name}`)}function m(G){(G.metaKey||G.ctrlKey)&&G.key==="Enter"&&(G.preventDefault(),c(i)||d())}$s(()=>(document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)));let _=de(()=>typeof navigator<"u"&&navigator.platform.includes("Mac"));var v=Af(),x=B(v),P=h(x),J=h(P),k=h(J),T=h(k),V=y(k,2);{var H=G=>{var te=cf();st(te,21,()=>e.tool.capabilities,ir,(_e,xe)=>{Os(_e,{get capability(){return c(xe)}})}),g(G,te)};L(V,G=>{e.tool.capabilities.length>0&&G(H)})}var M=y(J,2),ke=h(M),ee=h(ke);Ms(ee,{size:20,class:"text-muted-foreground"});var be=y(P,2);{var ze=G=>{var te=ff(),_e=h(te);O(()=>U(_e,e.tool.description)),g(G,te)};L(be,G=>{e.tool.description&&G(ze)})}var C=y(be,2);{var z=G=>{var te=hf(),_e=h(te),xe=h(_e);va(xe,{size:14,class:"mt-0.5 shrink-0"});var qe=y(xe,2),R=h(qe);st(R,21,()=>c(f),ir,(ue,ye)=>{var Ee=df(),Be=h(Ee);O(()=>U(Be,c(ye))),g(ue,Ee)}),g(G,te)};L(C,G=>{c(f).length>0&&G(z)})}var q=y(x,2),Q=h(q),N=h(Q),$=h(N),j=h($),I=h(j);fu(I,{size:12});var E=y(j,2),X=h(E);iu(X,{size:12});var D=y(E,2),W=h(D);Ii(W,{size:12});var Y=y($,2),Ne=h(Y);{var Je=G=>{uc(G,{get schema(){return e.tool.inputSchema},get values(){return c(r)},set values(te){A(r,te,!0)}})},Oe=G=>{var te=pf(),_e=h(te);Ae(_e,"spellcheck",!1);var xe=y(_e,2);{var qe=R=>{var ue=vf(),ye=h(ue);O(()=>U(ye,c(l))),g(R,ue)};L(xe,R=>{c(l)&&R(qe)})}O(()=>Yt(_e,c(u))),ne("input",_e,R=>p(R.target.value)),g(G,te)},Te=G=>{var te=gf(),_e=h(te);Hn(_e,{get data(){return e.tool.inputSchema}}),g(G,te)};L(Ne,G=>{c(o)==="form"?G(Je):c(o)==="json"?G(Oe,1):G(Te,!1)})}var Se=y(Y,2);{var Le=G=>{var te=yf(),_e=h(te),xe=h(_e);Cs(xe,{size:14});var qe=y(_e,2);{var R=ye=>{var Ee=mf(),Be=h(Ee),Fe=h(Be);va(Fe,{size:14});var F=y(Be,2),Z=y(F,2);O(()=>{ge(F,1,`${_n.destructive??""} h-8 px-3 text-xs`),ge(Z,1,`${_n.outline??""} h-8 px-3 text-xs`)}),ne("click",F,d),ne("click",Z,()=>A(s,!1)),g(ye,Ee)},ue=ye=>{var Ee=xf(),Be=h(Ee);{var Fe=Z=>{var ce=_f();g(Z,ce)},F=Z=>{var ce=bf(),Ke=B(ce);gi(Ke,{size:14});var Lt=y(Ke,2),Gn=h(Lt);O(()=>U(Gn,c(_)?"⌘⏎":"Ctrl⏎")),g(Z,ce)};L(Be,Z=>{c(i)?Z(Fe):Z(F,!1)})}O(()=>{ge(Ee,1,`${_n.default??""} gap-2 h-8 px-4 text-xs`),Ee.disabled=c(i)}),ne("click",Ee,d),g(ye,Ee)};L(qe,ye=>{c(s)?ye(R):ye(ue,!1)})}O(()=>ge(_e,1,`${_n.ghost??""} gap-1.5 text-muted-foreground text-xs h-8 px-3`)),ne("click",_e,w),g(G,te)};L(Se,G=>{c(o)!=="schema"&&G(Le)})}var Ie=y(Q,2),Ce=h(Ie);{var Me=G=>{var te=kf(),_e=h(te),xe=y(h(_e),2);{var qe=ue=>{var ye=wf(),Ee=h(ye);Es(Ee,{size:11});var Be=y(Ee);O(()=>U(Be,` ${c(a)??""}ms`)),g(ue,ye)};L(xe,ue=>{c(a)>0&&ue(qe)})}var R=y(_e,2);Us(R,{get content(){return c(n).content},get isError(){return c(n).isError}}),g(G,te)},gt=G=>{var te=Sf(),_e=y(h(te),2),xe=h(_e);O(()=>U(xe,`Executing ${e.tool.name??""}...`)),g(G,te)},lt=G=>{var te=$f(),_e=h(te);gi(_e,{size:24,class:"mb-2 opacity-30"});var xe=y(_e,4),qe=h(xe);O(()=>U(qe,`Press ${c(_)?"⌘":"Ctrl"}+Enter to execute`)),g(G,te)};L(Ce,G=>{c(n)?G(Me):c(i)?G(gt,1):G(lt,!1)})}O(()=>{U(T,e.tool.name),ge(j,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="form"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`),ge(E,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="json"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`),ge(D,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="schema"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`)}),ne("click",j,()=>A(o,"form")),ne("click",E,()=>A(o,"json")),ne("click",D,()=>A(o,"schema")),g(t,v),$t()}Ut(["click","input"]);var Ef=S('<div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-destructive">Error</h4> <div class="rounded-md border border-destructive/20 bg-destructive/10 p-3 font-mono text-xs text-destructive"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div></div>'),zf=S('<div class="rounded-md border bg-muted/30 p-3"><!></div>'),Nf=S('<div class="mb-6"><button class="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"><!> <!> Expected Schema</button> <!></div>'),Rf=S('<div class="rounded-md border bg-muted/50 p-3 font-mono text-xs"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div>'),Pf=S("<!> <span>Copied!</span>",1),Cf=S("<!> <span>JSON-RPC</span>",1),Mf=S("<!> <span>Copied!</span>",1),Of=S("<!> <span>curl</span>",1),Lf=S("<!> <span>Copied!</span>",1),If=S("<!> <span>Python</span>",1),jf=S('<div class="border-t bg-muted/20 p-4"><div class="mb-6 grid gap-6 md:grid-cols-2"><div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input Arguments</h4> <div class="rounded-md border bg-muted/50 p-3 font-mono text-xs"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div></div> <!></div> <!> <div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Result</h4> <!></div> <div class="mt-6 flex flex-wrap gap-2 border-t pt-4"><button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"><!> Replay</button> <div class="flex-1"></div> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button></div></div>'),Df=S('<div><button class="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-muted/50"><div class="flex h-5 w-5 items-center justify-center text-muted-foreground"><!></div> <div class="flex items-center justify-center"><!></div> <span class="flex-1 font-mono text-sm font-semibold text-foreground"> </span> <div class="flex items-center gap-3 text-xs text-muted-foreground"><div class="flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono"><!> </div> <span class="w-16 text-right font-mono tabular-nums opacity-70"> </span></div></button> <!></div>');function qf(t,e){St(e,!0);let r=He(e,"tools",19,()=>[]),n=ie(!1),i=ie(!1),a=ie(!1),s=ie(!1),o=ie(!1),u=de(()=>{var $;return($=r().find(j=>j.name===e.entry.tool_name))==null?void 0:$.inputSchema}),l=de(()=>{try{return new Date(e.entry.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return e.entry.timestamp}});async function f($){$.stopPropagation();const j=JSON.stringify({jsonrpc:"2.0",method:"tools/call",params:{name:e.entry.tool_name,arguments:e.entry.input_params},id:1},null,2);await $n(j),A(i,!0),setTimeout(()=>A(i,!1),2e3)}async function p($){$.stopPropagation();const j=JSON.stringify(e.entry.input_params,null,4),I=`result = await session.call_tool(
    "${e.entry.tool_name}",
    ${j},
)`;await $n(I),A(a,!0),setTimeout(()=>A(a,!1),2e3)}async function d($){$.stopPropagation();const I=`curl -X POST http://localhost:8321/mcp \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify({jsonrpc:"2.0",method:"tools/call",params:{name:e.entry.tool_name,arguments:e.entry.input_params},id:1})}'`;await $n(I),A(s,!0),setTimeout(()=>A(s,!1),2e3)}function w($){$.stopPropagation(),e.onReplay(e.entry)}var m=Df(),_=h(m),v=h(_),x=h(v);{var P=$=>{Nn($,{size:16})},J=$=>{Rn($,{size:16})};L(x,$=>{c(n)?$(P):$(J,!1)})}var k=y(v,2),T=h(k);{var V=$=>{lu($,{size:18,class:"text-destructive"})},H=$=>{Jr($,{size:18,class:"text-green-500"})};L(T,$=>{e.entry.is_error?$(V):$(H,!1)})}var M=y(k,2),ke=h(M),ee=y(M,2),be=h(ee),ze=h(be);Es(ze,{size:12});var C=y(ze),z=y(be,2),q=h(z),Q=y(_,2);{var N=$=>{var j=jf(),I=h(j),E=h(I),X=y(h(E),2),D=h(X),W=h(D),Y=y(E,2);{var Ne=F=>{var Z=Ef(),ce=y(h(Z),2),Ke=h(ce),Lt=h(Ke);O(()=>U(Lt,e.entry.error_message)),g(F,Z)};L(Y,F=>{e.entry.error_message&&F(Ne)})}var Je=y(I,2);{var Oe=F=>{var Z=Nf(),ce=h(Z),Ke=h(ce);{var Lt=Tt=>{Nn(Tt,{size:12})},Gn=Tt=>{Rn(Tt,{size:12})};L(Ke,Tt=>{c(o)?Tt(Lt):Tt(Gn,!1)})}var Ks=y(Ke,2);du(Ks,{size:12});var Ys=y(ce,2);{var Qs=Tt=>{var Ji=zf(),Xs=h(Ji);Hn(Xs,{get data(){return c(u)}}),g(Tt,Ji)};L(Ys,Tt=>{c(o)&&Tt(Qs)})}ne("click",ce,()=>A(o,!c(o))),g(F,Z)};L(Je,F=>{c(u)&&F(Oe)})}var Te=y(Je,2),Se=y(h(Te),2);{var Le=F=>{Us(F,{get content(){return e.entry.output.content},get isError(){return e.entry.is_error}})},Ie=F=>{var Z=Rf(),ce=h(Z),Ke=h(ce);O(Lt=>U(Ke,Lt),[()=>JSON.stringify(e.entry.output,null,2)]),g(F,Z)};L(Se,F=>{var Z;(Z=e.entry.output)!=null&&Z.content?F(Le):F(Ie,!1)})}var Ce=y(Te,2),Me=h(Ce),gt=h(Me);gi(gt,{size:14});var lt=y(Me,4),G=h(lt);{var te=F=>{var Z=Pf(),ce=B(Z);Jr(ce,{size:14,class:"text-green-500"}),g(F,Z)},_e=F=>{var Z=Cf(),ce=B(Z);Ii(ce,{size:14}),g(F,Z)};L(G,F=>{c(i)?F(te):F(_e,!1)})}var xe=y(lt,2),qe=h(xe);{var R=F=>{var Z=Mf(),ce=B(Z);Jr(ce,{size:14,class:"text-green-500"}),g(F,Z)},ue=F=>{var Z=Of(),ce=B(Z);Ps(ce,{size:14}),g(F,Z)};L(qe,F=>{c(s)?F(R):F(ue,!1)})}var ye=y(xe,2),Ee=h(ye);{var Be=F=>{var Z=Lf(),ce=B(Z);Jr(ce,{size:14,class:"text-green-500"}),g(F,Z)},Fe=F=>{var Z=If(),ce=B(Z);Ns(ce,{size:14}),g(F,Z)};L(Ee,F=>{c(a)?F(Be):F(Fe,!1)})}O(F=>U(W,F),[()=>JSON.stringify(e.entry.input_params,null,2)]),ne("click",Me,w),ne("click",lt,f),ne("click",xe,d),ne("click",ye,p),g($,j)};L(Q,$=>{c(n)&&$(N)})}O(()=>{ge(m,1,`group overflow-hidden rounded-lg border transition-all ${e.entry.is_error?"border-red-200 bg-red-50/30 dark:border-red-900/50 dark:bg-red-950/10":"border-border bg-card"}`),U(ke,e.entry.tool_name),U(C,` ${e.entry.latency_ms??""}ms`),U(q,c(l))}),ne("click",_,()=>A(n,!c(n))),g(t,m),$t()}Ut(["click"]);var Bf=S('<button class="inline-flex h-9 items-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-destructive/10 hover:text-destructive" title="Clear all timeline entries"><!> Clear</button>'),Ff=S('<button class="w-full rounded-md border border-dashed py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"> </button>'),Vf=S("<div><!></div>"),Hf=S('<div class="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center text-muted-foreground"><!> <h3 class="text-lg font-semibold text-foreground">No executions yet</h3> <p class="text-sm">Run a tool from the console to see it appear here.</p></div>'),Gf=S('<div class="flex flex-col items-center justify-center py-12 text-center text-muted-foreground"><p class="text-sm">No matching entries found.</p> <button class="mt-2 text-xs text-primary hover:underline">Clear filters</button></div>'),Wf=S('<div class="space-y-4"><div class="flex items-center gap-3 rounded-lg border bg-card p-2 shadow-sm"><div class="relative flex-1"><!> <input type="text" placeholder="Filter by tool name..."/></div> <div class="relative w-[180px]"><!> <select><option>All Status</option><option>Success</option><option>Errors</option></select></div> <div class="px-2 text-xs font-medium text-muted-foreground tabular-nums"><!></div> <!></div> <!> <div class="space-y-3"><!> <!></div></div>');function Zf(t,e){St(e,!0);let r=He(e,"tools",19,()=>[]),n=He(e,"totalCount",3,0),i=ie(""),a=ie(""),s=ie(null);nr(()=>{if(e.entries.length>0){const N=e.entries[0].id;(c(s)!==null&&N!==c(s)||c(s)===null)&&A(s,N,!0)}});let o=de(()=>e.entries.filter(N=>!(c(i)&&!N.tool_name.toLowerCase().includes(c(i).toLowerCase())||c(a)==="error"&&!N.is_error||c(a)==="success"&&N.is_error))),u=de(()=>n()>e.entries.length);var l=Wf(),f=h(l),p=h(f),d=h(p);Rs(d,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var w=y(d,2),m=y(p,2),_=h(m);gu(_,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var v=y(_,2),x=h(v);x.value=x.__value="";var P=y(x);P.value=P.__value="success";var J=y(P);J.value=J.__value="error";var k=y(m,2),T=h(k);{var V=N=>{var $=sa();O(()=>U($,`${c(o).length??""} of ${n()??""}`)),g(N,$)},H=N=>{var $=sa();O(()=>U($,c(o).length)),g(N,$)};L(T,N=>{c(u)?N(V):N(H,!1)})}var M=y(k,2);{var ke=N=>{var $=Bf(),j=h($);Cs(j,{size:14}),ne("click",$,function(...I){var E;(E=e.onClear)==null||E.apply(this,I)}),g(N,$)};L(M,N=>{e.entries.length>0&&N(ke)})}var ee=y(f,2);{var be=N=>{var $=Ff(),j=h($);O(()=>U(j,`Showing ${e.entries.length??""} of ${n()??""} entries — click to load all`)),ne("click",$,function(...I){var E;(E=e.onLoadAll)==null||E.apply(this,I)}),g(N,$)};L(ee,N=>{c(u)&&N(be)})}var ze=y(ee,2),C=h(ze);st(C,17,()=>c(o),N=>N.id,(N,$)=>{var j=Vf(),I=h(j);qf(I,{get entry(){return c($)},get tools(){return r()},get onReplay(){return e.onReplay}}),O(()=>ge(j,1,ft(c($).id===c(s)?"animate-in":""))),g(N,j)});var z=y(C,2);{var q=N=>{var $=Hf(),j=h($);_u(j,{class:"mb-4 h-10 w-10 opacity-20"}),g(N,$)},Q=N=>{var $=Gf(),j=y(h($),2);ne("click",j,()=>{A(i,""),A(a,"")}),g(N,$)};L(z,N=>{e.entries.length===0?N(q):c(o).length===0&&N(Q,1)})}O(()=>{ge(w,1,`${It} pl-9`),ge(v,1,`${It} pl-9`)}),Ss(w,()=>c(i),N=>A(i,N)),Dl(v,()=>c(a),N=>A(a,N)),g(t,l),$t()}Ut(["click"]);var Jf=S('<div class="toast-container svelte-1ig2a9j" role="status" aria-live="polite"><div><div><!></div> <span class="text-sm font-medium"> </span></div></div>');function Uf(t,e){let r=He(e,"type",3,"info");const n={info:bu,error:su,success:Jr};let i=de(()=>n[r()]);const a={info:"border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/90 dark:text-blue-100",error:"border-red-200 bg-red-50 text-red-900 dark:border-red-800/60 dark:bg-red-950/90 dark:text-red-100",success:"border-green-200 bg-green-50 text-green-900 dark:border-green-800/60 dark:bg-green-950/90 dark:text-green-100"},s={info:"text-blue-500 dark:text-blue-400",error:"text-red-500 dark:text-red-400",success:"text-green-500 dark:text-green-400"};var o=Jf(),u=h(o),l=h(u),f=h(l);_s(f,()=>c(i),(w,m)=>{m(w,{size:18})});var p=y(l,2),d=h(p);O(()=>{ge(u,1,`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${a[r()]}`,"svelte-1ig2a9j"),ge(l,1,ft(s[r()]),"svelte-1ig2a9j"),U(d,e.message)}),g(t,o)}var Kf=S('<div class="ml-2 flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"><!> <span class="max-w-[200px] truncate font-mono"> </span> <span class="rounded bg-muted px-1 py-0.5 text-[10px] uppercase"> </span></div>'),Yf=S('<div class="animate-in mx-auto max-w-6xl"><!></div>'),Qf=S('<div class="mx-auto max-w-5xl"><div class="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground"><div class="mb-4 rounded-full bg-muted p-4"><!></div> <h3 class="text-lg font-medium text-foreground">No tool selected</h3> <p class="max-w-sm text-sm">Select a tool from the sidebar to verify its schema and execute it.</p></div></div>'),Xf=S('<div class="animate-in mx-auto max-w-5xl"><!></div>'),ed=S('<div class="flex h-screen w-full flex-col bg-background text-foreground transition-colors duration-200"><header class="flex h-14 items-center justify-between border-b bg-secondary/30 px-4 backdrop-blur-sm"><div class="flex items-center gap-3"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><!></div> <div class="flex flex-col leading-none"><h1 class="text-sm font-bold tracking-tight">mcpplay</h1> <span class="text-[10px] text-muted-foreground"> </span></div> <div class="ml-4 flex items-center gap-2 rounded-full border bg-background px-2.5 py-0.5 text-xs font-medium"><div></div> <span> </span></div> <!></div> <div class="flex items-center gap-2"><button class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"><!></button></div></header> <div class="flex flex-1 overflow-hidden"><aside class="w-64 border-r bg-muted/20 flex flex-col"><!></aside> <main class="flex flex-1 flex-col overflow-hidden bg-background"><div class="flex items-center border-b px-4"><button><!> Tool Console</button> <button><!> Timeline <span class="ml-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"> </span></button></div> <div class="flex-1 overflow-y-auto p-6"><!></div></main></div></div> <!>',1);function td(t,e){St(e,!0);let r=ie(at([])),n=ie(null),i=ie(at([])),a=ie("tool"),s=ie(""),o=ie("info"),u=ie(!1),l=ie(null),f=ie(0),p=de(()=>{const R={};for(const ue of c(i))R[ue.tool_name]=(R[ue.tool_name]??0)+1;return R});function d(R,ue="info"){A(s,R,!0),A(o,ue,!0),setTimeout(()=>A(s,""),3e3)}function w(R){switch(R.type){case"tools":{const ue=c(u);if(A(r,R.tools,!0),A(u,!0),!c(n)&&c(r).length>0&&A(n,c(r)[0],!0),c(n)){const ye=c(r).find(Ee=>Ee.name===c(n).name);ye?A(n,ye,!0):c(r).length>0?A(n,c(r)[0],!0):A(n,null)}ue||d(`Connected — ${c(r).length} tool${c(r).length!==1?"s":""} available`,"success");break}case"timeline":A(i,R.entries,!0),A(f,R.total_count,!0);break;case"reload":{if(R.status==="reloading")d("Server reloading...","info");else if(R.status==="ready")if(R.tools){const ue=m(c(r),R.tools);A(r,R.tools,!0),d(ue||"Server reloaded","success")}else d("Server reloaded","success");break}case"server_info":A(l,{command:R.command,server_name:R.server_name,transport:R.transport,version:R.version},!0);break;case"error":d(R.message,"error");break}}function m(R,ue){const ye=new Set(R.map(ce=>ce.name)),Ee=new Set(ue.map(ce=>ce.name)),Be=ue.filter(ce=>!ye.has(ce.name)),Fe=R.filter(ce=>!Ee.has(ce.name)),F=ue.filter(ce=>{const Ke=R.find(Lt=>Lt.name===ce.name);return Ke&&JSON.stringify(Ke.inputSchema)!==JSON.stringify(ce.inputSchema)}),Z=[];return Be.length&&Z.push(`${Be.length} added`),Fe.length&&Z.push(`${Fe.length} removed`),F.length&&Z.push(`${F.length} schema changed`),Z.length===0?"Server reloaded (no tool changes)":`Server reloaded: ${Z.join(", ")}`}function _(R){A(n,R,!0),A(a,"tool")}function v(R){Ar({type:"replay",entry_id:R.id}),A(a,"tool");const ue=c(r).find(ye=>ye.name===R.tool_name);ue&&A(n,ue,!0)}function x(){Ar({type:"clear_timeline"})}function P(){Ar({type:"get_timeline"})}let J=ie(at(typeof localStorage<"u"?localStorage.getItem("mcpplay-theme")==="dark":!1));function k(){A(J,!c(J)),localStorage.setItem("mcpplay-theme",c(J)?"dark":"light")}nr(()=>{c(J)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),$s(()=>{const R=Ts(w);return As(),R});var T=ed(),V=B(T),H=h(V),M=h(H),ke=h(M),ee=h(ke);zs(ee,{size:18});var be=y(ke,2),ze=y(h(be),2),C=h(ze),z=y(be,2),q=h(z),Q=y(q,2),N=h(Q),$=y(z,2);{var j=R=>{var ue=Kf(),ye=h(ue);$u(ye,{size:12});var Ee=y(ye,2),Be=h(Ee),Fe=y(Ee,2),F=h(Fe);O(()=>{Ae(Ee,"title",c(l).server_name),U(Be,c(l).server_name),U(F,c(l).transport)}),g(R,ue)};L($,R=>{c(l)&&R(j)})}var I=y(M,2),E=h(I),X=h(E);{var D=R=>{Au(R,{size:16})},W=R=>{yu(R,{size:16})};L(X,R=>{c(J)?R(D):R(W,!1)})}var Y=y(H,2),Ne=h(Y),Je=h(Ne);Ou(Je,{get tools(){return c(r)},get selectedTool(){return c(n)},get executionCounts(){return c(p)},onSelect:_});var Oe=y(Ne,2),Te=h(Oe),Se=h(Te),Le=h(Se);xu(Le,{size:16});var Ie=y(Se,2),Ce=h(Ie);nu(Ce,{size:16});var Me=y(Ce,2),gt=h(Me),lt=y(Te,2),G=h(lt);{var te=R=>{var ue=K(),ye=B(ue);{var Ee=Fe=>{var F=Yf(),Z=h(F);Tf(Z,{get tool(){return c(n)}}),g(Fe,F)},Be=Fe=>{var F=Qf(),Z=h(F),ce=h(Z),Ke=h(ce);Ms(Ke,{size:32,class:"opacity-50"}),g(Fe,F)};L(ye,Fe=>{c(n)?Fe(Ee):Fe(Be,!1)})}g(R,ue)},_e=R=>{var ue=Xf(),ye=h(ue);Zf(ye,{get entries(){return c(i)},get tools(){return c(r)},get totalCount(){return c(f)},onReplay:v,onClear:x,onLoadAll:P}),g(R,ue)};L(G,R=>{c(a)==="tool"?R(te):R(_e,!1)})}var xe=y(V,2);{var qe=R=>{Uf(R,{get message(){return c(s)},get type(){return c(o)}})};L(xe,R=>{c(s)&&R(qe)})}O(()=>{var R;U(C,(R=c(l))!=null&&R.version?`v${c(l).version}`:""),ge(q,1,`h-2 w-2 rounded-full ${c(u)?"bg-green-500 animate-pulse-dot":"bg-red-500"}`),ge(Q,1,ft(c(u)?"text-foreground":"text-muted-foreground")),U(N,c(u)?"Connected":"Disconnected"),ge(Se,1,`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${c(a)==="tool"?"border-primary text-foreground":"border-transparent text-muted-foreground"}`),ge(Ie,1,`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${c(a)==="timeline"?"border-primary text-foreground":"border-transparent text-muted-foreground"}`),U(gt,c(i).length)}),ne("click",E,k),ne("click",Se,()=>A(a,"tool")),ne("click",Ie,()=>A(a,"timeline")),g(t,T),$t()}Ut(["click"]);Al(td,{target:document.getElementById("app")});
