var eo=Object.defineProperty;var Ui=t=>{throw TypeError(t)};var to=(t,e,r)=>e in t?eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var fe=(t,e,r)=>to(t,typeof e!="symbol"?e+"":e,r),Wn=(t,e,r)=>e.has(t)||Ui("Cannot "+r);var b=(t,e,r)=>(Wn(t,e,"read from private field"),r?r.call(t):e.get(t)),he=(t,e,r)=>e.has(t)?Ui("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ue=(t,e,r,n)=>(Wn(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),Xe=(t,e,r)=>(Wn(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const ei=!1;var wi=Array.isArray,ro=Array.prototype.indexOf,Mr=Array.prototype.includes,In=Array.from,no=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,ka=Object.getOwnPropertyDescriptors,io=Object.prototype,ao=Array.prototype,ki=Object.getPrototypeOf,Ki=Object.isExtensible;function Br(t){return typeof t=="function"}const so=()=>{};function oo(t){return t()}function ti(t){for(var e=0;e<t.length;e++)t[e]()}function Sa(){var t,e,r=new Promise((n,i)=>{t=n,e=i});return{promise:r,resolve:t,reject:e}}function Si(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const n of t)if(r.push(n),r.length===e)break;return r}const Ge=2,Xr=4,sn=8,$i=1<<24,Zt=16,wt=32,Sr=64,ri=128,ft=512,qe=1024,We=2048,yt=4096,st=8192,Ht=16384,on=32768,ir=65536,Yi=1<<17,$a=1<<18,Dr=1<<19,Aa=1<<20,Bt=1<<25,yr=65536,ni=1<<21,Ai=1<<22,Xt=1<<23,Gt=Symbol("$state"),Ta=Symbol("legacy props"),lo=Symbol(""),cr=new class extends Error{constructor(){super(...arguments);fe(this,"name","StaleReactionError");fe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var xa;const Ti=!!((xa=globalThis.document)!=null&&xa.contentType)&&globalThis.document.contentType.includes("xml");function uo(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function co(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function fo(t,e,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ho(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function po(t){throw new Error("https://svelte.dev/e/effect_orphan")}function go(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function mo(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function _o(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const wo=1,ko=2,Ea=4,So=8,$o=16,Ao=1,To=2,za=4,Eo=8,zo=16,No=1,Ro=2,De=Symbol(),Na="http://www.w3.org/1999/xhtml",Po="http://www.w3.org/2000/svg",Co="@attach";function Mo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Oo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ra(t){return t===this.v}function Lo(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Pa(t){return!Lo(t,this.v)}let qr=!1,Io=!1;function jo(){qr=!0}let Pe=null;function Or(t){Pe=t}function kt(t,e=!1,r){Pe={p:Pe,i:!1,c:null,e:null,s:t,x:null,l:qr&&!e?{s:null,u:null,$:[]}:null}}function St(t){var e=Pe,r=e.e;if(r!==null){e.e=null;for(var n of r)es(n)}return e.i=!0,Pe=e.p,{}}function ln(){return!qr||Pe!==null&&Pe.l===null}let fr=[];function Ca(){var t=fr;fr=[],ti(t)}function Wt(t){if(fr.length===0&&!Ur){var e=fr;queueMicrotask(()=>{e===fr&&Ca()})}fr.push(t)}function Do(){for(;fr.length>0;)Ca()}function Ma(t){var e=pe;if(e===null)return de.f|=Xt,t;if((e.f&on)===0&&(e.f&Xr)===0)throw t;Lr(t,e)}function Lr(t,e){for(;e!==null;){if((e.f&ri)!==0){if((e.f&on)===0)throw t;try{e.b.error(t);return}catch(r){t=r}}e=e.parent}throw t}const qo=-7169;function Re(t,e){t.f=t.f&qo|e}function Ei(t){(t.f&ft)!==0||t.deps===null?Re(t,qe):Re(t,yt)}function Oa(t){if(t!==null)for(const e of t)(e.f&Ge)===0||(e.f&yr)===0||(e.f^=yr,Oa(e.deps))}function La(t,e,r){(t.f&We)!==0?e.add(t):(t.f&yt)!==0&&r.add(t),Oa(t.deps),Re(t,qe)}const vn=new Set;let re=null,En=null,Fe=null,Ue=[],jn=null,ii=!1,Ur=!1;var Tr,Er,vr,zr,tn,rn,pr,It,Nr,Mt,ai,si,Ia;const Zi=class Zi{constructor(){he(this,Mt);fe(this,"committed",!1);fe(this,"current",new Map);fe(this,"previous",new Map);he(this,Tr,new Set);he(this,Er,new Set);he(this,vr,0);he(this,zr,0);he(this,tn,null);he(this,rn,new Set);he(this,pr,new Set);he(this,It,new Map);fe(this,"is_fork",!1);he(this,Nr,!1)}is_deferred(){return this.is_fork||b(this,zr)>0}skip_effect(e){b(this,It).has(e)||b(this,It).set(e,{d:[],m:[]})}unskip_effect(e){var r=b(this,It).get(e);if(r){b(this,It).delete(e);for(var n of r.d)Re(n,We),bt(n);for(n of r.m)Re(n,yt),bt(n)}}process(e){var i;Ue=[],this.apply();var r=[],n=[];for(const a of e)Xe(this,Mt,ai).call(this,a,r,n);if(this.is_deferred()){Xe(this,Mt,si).call(this,n),Xe(this,Mt,si).call(this,r);for(const[a,s]of b(this,It))Ba(a,s)}else{for(const a of b(this,Tr))a();b(this,Tr).clear(),b(this,vr)===0&&Xe(this,Mt,Ia).call(this),En=this,re=null,Qi(n),Qi(r),En=null,(i=b(this,tn))==null||i.resolve()}Fe=null}capture(e,r){r!==De&&!this.previous.has(e)&&this.previous.set(e,r),(e.f&Xt)===0&&(this.current.set(e,e.v),Fe==null||Fe.set(e,e.v))}activate(){re=this,this.apply()}deactivate(){re===this&&(re=null,Fe=null)}flush(){if(this.activate(),Ue.length>0){if(ja(),re!==null&&re!==this)return}else b(this,vr)===0&&this.process([]);this.deactivate()}discard(){for(const e of b(this,Er))e(this);b(this,Er).clear()}increment(e){ue(this,vr,b(this,vr)+1),e&&ue(this,zr,b(this,zr)+1)}decrement(e){ue(this,vr,b(this,vr)-1),e&&ue(this,zr,b(this,zr)-1),!b(this,Nr)&&(ue(this,Nr,!0),Wt(()=>{ue(this,Nr,!1),this.is_deferred()?Ue.length>0&&this.flush():this.revive()}))}revive(){for(const e of b(this,rn))b(this,pr).delete(e),Re(e,We),bt(e);for(const e of b(this,pr))Re(e,yt),bt(e);this.flush()}oncommit(e){b(this,Tr).add(e)}ondiscard(e){b(this,Er).add(e)}settled(){return(b(this,tn)??ue(this,tn,Sa())).promise}static ensure(){if(re===null){const e=re=new Zi;vn.add(re),Ur||Wt(()=>{re===e&&e.flush()})}return re}apply(){}};Tr=new WeakMap,Er=new WeakMap,vr=new WeakMap,zr=new WeakMap,tn=new WeakMap,rn=new WeakMap,pr=new WeakMap,It=new WeakMap,Nr=new WeakMap,Mt=new WeakSet,ai=function(e,r,n){e.f^=qe;for(var i=e.first,a=null;i!==null;){var s=i.f,o=(s&(wt|Sr))!==0,u=o&&(s&qe)!==0,l=u||(s&st)!==0||b(this,It).has(i);if(!l&&i.fn!==null){o?i.f^=qe:a!==null&&(s&(Xr|sn|$i))!==0?a.b.defer_effect(i):(s&Xr)!==0?r.push(i):dn(i)&&((s&Zt)!==0&&b(this,pr).add(i),jr(i));var f=i.first;if(f!==null){i=f;continue}}for(;i!==null;){i===a&&(a=null);var p=i.next;if(p!==null){i=p;break}i=i.parent}}},si=function(e){for(var r=0;r<e.length;r+=1)La(e[r],b(this,rn),b(this,pr))},Ia=function(){var i;if(vn.size>1){this.previous.clear();var e=Fe,r=!0;for(const a of vn){if(a===this){r=!1;continue}const s=[];for(const[u,l]of this.current){if(a.current.has(u))if(r&&l!==a.current.get(u))a.current.set(u,l);else continue;s.push(u)}if(s.length===0)continue;const o=[...a.current.keys()].filter(u=>!this.current.has(u));if(o.length>0){var n=Ue;Ue=[];const u=new Set,l=new Map;for(const f of s)Da(f,o,u,l);if(Ue.length>0){re=a,a.apply();for(const f of Ue)Xe(i=a,Mt,ai).call(i,f,[],[]);a.deactivate()}Ue=n}}re=null,Fe=e}this.committed=!0,vn.delete(this)};let er=Zi;function Bo(t){var e=Ur;Ur=!0;try{for(var r;;){if(Do(),Ue.length===0&&(re==null||re.flush(),Ue.length===0))return jn=null,r;ja()}}finally{Ur=e}}function ja(){ii=!0;var t=null;try{for(var e=0;Ue.length>0;){var r=er.ensure();if(e++>1e3){var n,i;Fo()}r.process(Ue),tr.clear()}}finally{Ue=[],ii=!1,jn=null}}function Fo(){try{go()}catch(t){Lr(t,jn)}}let gt=null;function Qi(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var n=t[r++];if((n.f&(Ht|st))===0&&dn(n)&&(gt=new Set,jr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&as(n),(gt==null?void 0:gt.size)>0)){tr.clear();for(const i of gt){if((i.f&(Ht|st))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)gt.has(s)&&(gt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const u=a[o];(u.f&(Ht|st))===0&&jr(u)}}gt.clear()}}gt=null}}function Da(t,e,r,n){if(!r.has(t)&&(r.add(t),t.reactions!==null))for(const i of t.reactions){const a=i.f;(a&Ge)!==0?Da(i,e,r,n):(a&(Ai|Zt))!==0&&(a&We)===0&&qa(i,e,n)&&(Re(i,We),bt(i))}}function qa(t,e,r){const n=r.get(t);if(n!==void 0)return n;if(t.deps!==null)for(const i of t.deps){if(Mr.call(e,i))return!0;if((i.f&Ge)!==0&&qa(i,e,r))return r.set(i,!0),!0}return r.set(t,!1),!1}function bt(t){for(var e=jn=t;e.parent!==null;){e=e.parent;var r=e.f;if(ii&&e===pe&&(r&Zt)!==0&&(r&$a)===0)return;if((r&(Sr|wt))!==0){if((r&qe)===0)return;e.f^=qe}}Ue.push(e)}function Ba(t,e){if(!((t.f&wt)!==0&&(t.f&qe)!==0)){(t.f&We)!==0?e.d.push(t):(t.f&yt)!==0&&e.m.push(t),Re(t,qe);for(var r=t.first;r!==null;)Ba(r,e),r=r.next}}function Vo(t){let e=0,r=ar(0),n;return()=>{Ri()&&(c(r),ts(()=>(e===0&&(n=or(()=>t(()=>Kr(r)))),e+=1,()=>{Wt(()=>{e-=1,e===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Ho=ir|Dr;function Go(t,e,r){new Wo(t,e,r)}var mt,yi,jt,gr,Et,zt,tt,Nt,Dt,mr,Yt,Rr,Pr,Cr,qt,On,Ye,Zo,Jo,oi,xn,li;class Wo{constructor(e,r,n){he(this,Ye);fe(this,"parent");fe(this,"is_pending",!1);he(this,mt);he(this,yi,null);he(this,jt);he(this,gr);he(this,Et);he(this,zt,null);he(this,tt,null);he(this,Nt,null);he(this,Dt,null);he(this,mr,0);he(this,Yt,0);he(this,Rr,!1);he(this,Pr,new Set);he(this,Cr,new Set);he(this,qt,null);he(this,On,Vo(()=>(ue(this,qt,ar(b(this,mr))),()=>{ue(this,qt,null)})));ue(this,mt,e),ue(this,jt,r),ue(this,gr,i=>{var a=pe;a.b=this,a.f|=ri,n(i)}),this.parent=pe.b,ue(this,Et,fn(()=>{Xe(this,Ye,oi).call(this)},Ho))}defer_effect(e){La(e,b(this,Pr),b(this,Cr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!b(this,jt).pending}update_pending_count(e){Xe(this,Ye,li).call(this,e),ue(this,mr,b(this,mr)+e),!(!b(this,qt)||b(this,Rr))&&(ue(this,Rr,!0),Wt(()=>{ue(this,Rr,!1),b(this,qt)&&Ir(b(this,qt),b(this,mr))}))}get_effect_pending(){return b(this,On).call(this),c(b(this,qt))}error(e){var r=b(this,jt).onerror;let n=b(this,jt).failed;if(!r&&!n)throw e;b(this,zt)&&(He(b(this,zt)),ue(this,zt,null)),b(this,tt)&&(He(b(this,tt)),ue(this,tt,null)),b(this,Nt)&&(He(b(this,Nt)),ue(this,Nt,null));var i=!1,a=!1;const s=()=>{if(i){Oo();return}i=!0,a&&yo(),b(this,Nt)!==null&&br(b(this,Nt),()=>{ue(this,Nt,null)}),Xe(this,Ye,xn).call(this,()=>{er.ensure(),Xe(this,Ye,oi).call(this)})};Wt(()=>{try{a=!0,r==null||r(e,s),a=!1}catch(o){Lr(o,b(this,Et)&&b(this,Et).parent)}n&&ue(this,Nt,Xe(this,Ye,xn).call(this,()=>{er.ensure();try{return nt(()=>{var o=pe;o.b=this,o.f|=ri,n(b(this,mt),()=>e,()=>s)})}catch(o){return Lr(o,b(this,Et).parent),null}}))})}}mt=new WeakMap,yi=new WeakMap,jt=new WeakMap,gr=new WeakMap,Et=new WeakMap,zt=new WeakMap,tt=new WeakMap,Nt=new WeakMap,Dt=new WeakMap,mr=new WeakMap,Yt=new WeakMap,Rr=new WeakMap,Pr=new WeakMap,Cr=new WeakMap,qt=new WeakMap,On=new WeakMap,Ye=new WeakSet,Zo=function(){try{ue(this,zt,nt(()=>b(this,gr).call(this,b(this,mt))))}catch(e){this.error(e)}},Jo=function(){const e=b(this,jt).pending;e&&(this.is_pending=!0,ue(this,tt,nt(()=>e(b(this,mt)))),Wt(()=>{var r=ue(this,Dt,document.createDocumentFragment()),n=Ct();r.append(n),ue(this,zt,Xe(this,Ye,xn).call(this,()=>(er.ensure(),nt(()=>b(this,gr).call(this,n))))),b(this,Yt)===0&&(b(this,mt).before(r),ue(this,Dt,null),br(b(this,tt),()=>{ue(this,tt,null)}),this.is_pending=!1)}))},oi=function(){try{if(this.is_pending=this.has_pending_snippet(),ue(this,Yt,0),ue(this,mr,0),ue(this,zt,nt(()=>{b(this,gr).call(this,b(this,mt))})),b(this,Yt)>0){var e=ue(this,Dt,document.createDocumentFragment());ls(b(this,zt),e);const r=b(this,jt).pending;ue(this,tt,nt(()=>r(b(this,mt))))}else this.is_pending=!1}catch(r){this.error(r)}},xn=function(e){var r=pe,n=de,i=Pe;vt(b(this,Et)),ht(b(this,Et)),Or(b(this,Et).ctx);try{return e()}catch(a){return Ma(a),null}finally{vt(r),ht(n),Or(i)}},li=function(e){var r;if(!this.has_pending_snippet()){this.parent&&Xe(r=this.parent,Ye,li).call(r,e);return}if(ue(this,Yt,b(this,Yt)+e),b(this,Yt)===0){this.is_pending=!1;for(const n of b(this,Pr))Re(n,We),bt(n);for(const n of b(this,Cr))Re(n,yt),bt(n);b(this,Pr).clear(),b(this,Cr).clear(),b(this,tt)&&br(b(this,tt),()=>{ue(this,tt,null)}),b(this,Dt)&&(b(this,mt).before(b(this,Dt)),ue(this,Dt,null))}};function Fa(t,e,r,n){const i=ln()?un:zi;var a=t.filter(d=>!d.settled);if(r.length===0&&a.length===0){n(e.map(i));return}var s=re,o=pe,u=Uo(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(d=>d.promise)):null;function f(d){u();try{n(d)}catch(w){(o.f&Ht)===0&&Lr(w,o)}s==null||s.deactivate(),ui()}if(r.length===0){l.then(()=>f(e.map(i)));return}function p(){u(),Promise.all(r.map(d=>Ko(d))).then(d=>f([...e.map(i),...d])).catch(d=>Lr(d,o))}l?l.then(p):p()}function Uo(){var t=pe,e=de,r=Pe,n=re;return function(a=!0){vt(t),ht(e),Or(r),a&&(n==null||n.activate())}}function ui(){vt(null),ht(null),Or(null)}function un(t){var e=Ge|We,r=de!==null&&(de.f&Ge)!==0?de:null;return pe!==null&&(pe.f|=Dr),{ctx:Pe,deps:null,effects:null,equals:Ra,f:e,fn:t,reactions:null,rv:0,v:De,wv:0,parent:r??pe,ac:null}}function Ko(t,e,r){let n=pe;n===null&&co();var i=n.b,a=void 0,s=ar(De),o=!de,u=new Map;return cl(()=>{var w;var l=Sa();a=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{f===re&&f.committed&&f.deactivate(),ui()})}catch(m){l.reject(m),ui()}var f=re;if(o){var p=i.is_rendered();i.update_pending_count(1),f.increment(p),(w=u.get(f))==null||w.reject(cr),u.delete(f),u.set(f,l)}const d=(m,_=void 0)=>{if(f.activate(),_)_!==cr&&(s.f|=Xt,Ir(s,_));else{(s.f&Xt)!==0&&(s.f^=Xt),Ir(s,m);for(const[v,x]of u){if(u.delete(v),v===f)break;x.reject(cr)}}o&&(i.update_pending_count(-1),f.decrement(p))};l.promise.then(d,m=>d(null,m||"unknown"))}),qn(()=>{for(const l of u.values())l.reject(cr)}),new Promise(l=>{function f(p){function d(){p===a?l(s):f(a)}p.then(d,d)}f(a)})}function ce(t){const e=un(t);return us(e),e}function zi(t){const e=un(t);return e.equals=Pa,e}function Yo(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)He(e[r])}}function Qo(t){for(var e=t.parent;e!==null;){if((e.f&Ge)===0)return(e.f&Ht)===0?e:null;e=e.parent}return null}function Ni(t){var e,r=pe;vt(Qo(t));try{t.f&=~yr,Yo(t),e=hs(t)}finally{vt(r)}return e}function Va(t){var e=Ni(t);if(!t.equals(e)&&(t.wv=fs(),(!(re!=null&&re.is_fork)||t.deps===null)&&(t.v=e,t.deps===null))){Re(t,qe);return}sr||(Fe!==null?(Ri()||re!=null&&re.is_fork)&&Fe.set(t,e):Ei(t))}function Xo(t){var e,r;if(t.effects!==null)for(const n of t.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),(r=n.ac)==null||r.abort(cr),n.teardown=so,n.ac=null,en(n,0),Ci(n))}function Ha(t){if(t.effects!==null)for(const e of t.effects)e.teardown&&jr(e)}let ci=new Set;const tr=new Map;let Ga=!1;function ar(t,e){var r={f:0,v:t,reactions:null,equals:Ra,rv:0,wv:0};return r}function ie(t,e){const r=ar(t);return us(r),r}function el(t,e=!1,r=!0){var i;const n=ar(t);return e||(n.equals=Pa),qr&&r&&Pe!==null&&Pe.l!==null&&((i=Pe.l).s??(i.s=[])).push(n),n}function A(t,e,r=!1){de!==null&&(!xt||(de.f&Yi)!==0)&&ln()&&(de.f&(Ge|Zt|Ai|Yi))!==0&&(dt===null||!Mr.call(dt,t))&&xo();let n=r?it(e):e;return Ir(t,n)}function Ir(t,e){if(!t.equals(e)){var r=t.v;sr?tr.set(t,e):tr.set(t,r),t.v=e;var n=er.ensure();if(n.capture(t,r),(t.f&Ge)!==0){const i=t;(t.f&We)!==0&&Ni(i),Ei(i)}t.wv=fs(),Wa(t,We),ln()&&pe!==null&&(pe.f&qe)!==0&&(pe.f&(wt|Sr))===0&&(lt===null?dl([t]):lt.push(t)),!n.is_fork&&ci.size>0&&!Ga&&tl()}return e}function tl(){Ga=!1;for(const t of ci)(t.f&qe)!==0&&Re(t,yt),dn(t)&&jr(t);ci.clear()}function Xi(t,e=1){var r=c(t),n=e===1?r++:r--;return A(t,r),n}function Kr(t){A(t,t.v+1)}function Wa(t,e){var r=t.reactions;if(r!==null)for(var n=ln(),i=r.length,a=0;a<i;a++){var s=r[a],o=s.f;if(!(!n&&s===pe)){var u=(o&We)===0;if(u&&Re(s,e),(o&Ge)!==0){var l=s;Fe==null||Fe.delete(l),(o&yr)===0&&(o&ft&&(s.f|=yr),Wa(l,yt))}else u&&((o&Zt)!==0&&gt!==null&&gt.add(s),bt(s))}}}function it(t){if(typeof t!="object"||t===null||Gt in t)return t;const e=ki(t);if(e!==io&&e!==ao)return t;var r=new Map,n=wi(t),i=ie(0),a=xr,s=o=>{if(xr===a)return o();var u=de,l=xr;ht(null),ia(a);var f=o();return ht(u),ia(l),f};return n&&r.set("length",ie(t.length)),new Proxy(t,{defineProperty(o,u,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&_o();var f=r.get(u);return f===void 0?s(()=>{var p=ie(l.value);return r.set(u,p),p}):A(f,l.value,!0),!0},deleteProperty(o,u){var l=r.get(u);if(l===void 0){if(u in o){const f=s(()=>ie(De));r.set(u,f),Kr(i)}}else A(l,De),Kr(i);return!0},get(o,u,l){var w;if(u===Gt)return t;var f=r.get(u),p=u in o;if(f===void 0&&(!p||(w=Qt(o,u))!=null&&w.writable)&&(f=s(()=>{var m=it(p?o[u]:De),_=ie(m);return _}),r.set(u,f)),f!==void 0){var d=c(f);return d===De?void 0:d}return Reflect.get(o,u,l)},getOwnPropertyDescriptor(o,u){var l=Reflect.getOwnPropertyDescriptor(o,u);if(l&&"value"in l){var f=r.get(u);f&&(l.value=c(f))}else if(l===void 0){var p=r.get(u),d=p==null?void 0:p.v;if(p!==void 0&&d!==De)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,u){var d;if(u===Gt)return!0;var l=r.get(u),f=l!==void 0&&l.v!==De||Reflect.has(o,u);if(l!==void 0||pe!==null&&(!f||(d=Qt(o,u))!=null&&d.writable)){l===void 0&&(l=s(()=>{var w=f?it(o[u]):De,m=ie(w);return m}),r.set(u,l));var p=c(l);if(p===De)return!1}return f},set(o,u,l,f){var J;var p=r.get(u),d=u in o;if(n&&u==="length")for(var w=l;w<p.v;w+=1){var m=r.get(w+"");m!==void 0?A(m,De):w in o&&(m=s(()=>ie(De)),r.set(w+"",m))}if(p===void 0)(!d||(J=Qt(o,u))!=null&&J.writable)&&(p=s(()=>ie(void 0)),A(p,it(l)),r.set(u,p));else{d=p.v!==De;var _=s(()=>it(l));A(p,_)}var v=Reflect.getOwnPropertyDescriptor(o,u);if(v!=null&&v.set&&v.set.call(f,l),!d){if(n&&typeof u=="string"){var x=r.get("length"),R=Number(u);Number.isInteger(R)&&R>=x.v&&A(x,R+1)}Kr(i)}return!0},ownKeys(o){c(i);var u=Reflect.ownKeys(o).filter(p=>{var d=r.get(p);return d===void 0||d.v!==De});for(var[l,f]of r)f.v!==De&&!(l in o)&&u.push(l);return u},setPrototypeOf(){bo()}})}function ea(t){try{if(t!==null&&typeof t=="object"&&Gt in t)return t[Gt]}catch{}return t}function rl(t,e){return Object.is(ea(t),ea(e))}var ta,Za,Ja,Ua;function nl(){if(ta===void 0){ta=window,Za=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Ja=Qt(e,"firstChild").get,Ua=Qt(e,"nextSibling").get,Ki(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ki(r)&&(r.__t=void 0)}}function Ct(t=""){return document.createTextNode(t)}function Pt(t){return Ja.call(t)}function cn(t){return Ua.call(t)}function h(t,e){return Pt(t)}function B(t,e=!1){{var r=Pt(t);return r instanceof Comment&&r.data===""?cn(r):r}}function y(t,e=1,r=!1){let n=t;for(;e--;)n=cn(n);return n}function il(t){t.textContent=""}function Ka(){return!1}function Ya(t,e,r){return document.createElementNS(e??Na,t,void 0)}function al(t,e){if(e){const r=document.body;t.autofocus=!0,Wt(()=>{document.activeElement===r&&t.focus()})}}let ra=!1;function sl(){ra||(ra=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Dn(t){var e=de,r=pe;ht(null),vt(null);try{return t()}finally{ht(e),vt(r)}}function Qa(t,e,r,n=r){t.addEventListener(e,()=>Dn(r));const i=t.__on_r;i?t.__on_r=()=>{i(),n(!0)}:t.__on_r=()=>n(!0),sl()}function Xa(t){pe===null&&(de===null&&po(),vo()),sr&&ho()}function ol(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function $t(t,e,r){var n=pe;n!==null&&(n.f&st)!==0&&(t|=st);var i={ctx:Pe,deps:null,nodes:null,f:t|We|ft,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{jr(i)}catch(o){throw He(i),o}else e!==null&&bt(i);var a=i;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Dr)===0&&(a=a.first,(t&Zt)!==0&&(t&ir)!==0&&a!==null&&(a.f|=ir)),a!==null&&(a.parent=n,n!==null&&ol(a,n),de!==null&&(de.f&Ge)!==0&&(t&Sr)===0)){var s=de;(s.effects??(s.effects=[])).push(a)}return i}function Ri(){return de!==null&&!xt}function qn(t){const e=$t(sn,null,!1);return Re(e,qe),e.teardown=t,e}function rr(t){Xa();var e=pe.f,r=!de&&(e&wt)!==0&&(e&on)===0;if(r){var n=Pe;(n.e??(n.e=[])).push(t)}else return es(t)}function es(t){return $t(Xr|Aa,t,!1)}function ll(t){return Xa(),$t(sn|Aa,t,!0)}function ul(t){er.ensure();const e=$t(Sr|Dr,t,!0);return(r={})=>new Promise(n=>{r.outro?br(e,()=>{He(e),n(void 0)}):(He(e),n(void 0))})}function Pi(t){return $t(Xr,t,!1)}function cl(t){return $t(Ai|Dr,t,!0)}function ts(t,e=0){return $t(sn|e,t,!0)}function L(t,e=[],r=[],n=[]){Fa(n,e,r,i=>{$t(sn,()=>t(...i.map(c)),!0)})}function fn(t,e=0){var r=$t(Zt|e,t,!0);return r}function rs(t,e=0){var r=$t($i|e,t,!0);return r}function nt(t){return $t(wt|Dr,t,!0)}function ns(t){var e=t.teardown;if(e!==null){const r=sr,n=de;na(!0),ht(null);try{e.call(null)}finally{na(r),ht(n)}}}function Ci(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const i=r.ac;i!==null&&Dn(()=>{i.abort(cr)});var n=r.next;(r.f&Sr)!==0?r.parent=null:He(r,e),r=n}}function fl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&wt)===0&&He(e),e=r}}function He(t,e=!0){var r=!1;(e||(t.f&$a)!==0)&&t.nodes!==null&&t.nodes.end!==null&&(is(t.nodes.start,t.nodes.end),r=!0),Ci(t,e&&!r),en(t,0),Re(t,Ht);var n=t.nodes&&t.nodes.t;if(n!==null)for(const a of n)a.stop();ns(t);var i=t.parent;i!==null&&i.first!==null&&as(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes=t.ac=null}function is(t,e){for(;t!==null;){var r=t===e?null:cn(t);t.remove(),t=r}}function as(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function br(t,e,r=!0){var n=[];ss(t,n,!0);var i=()=>{r&&He(t),e&&e()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function ss(t,e,r){if((t.f&st)===0){t.f^=st;var n=t.nodes&&t.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&e.push(o);for(var i=t.first;i!==null;){var a=i.next,s=(i.f&ir)!==0||(i.f&wt)!==0&&(t.f&Zt)!==0;ss(i,e,s?r:!1),i=a}}}function Mi(t){os(t,!0)}function os(t,e){if((t.f&st)!==0){t.f^=st,(t.f&qe)===0&&(Re(t,We),bt(t));for(var r=t.first;r!==null;){var n=r.next,i=(r.f&ir)!==0||(r.f&wt)!==0;os(r,i?e:!1),r=n}var a=t.nodes&&t.nodes.t;if(a!==null)for(const s of a)(s.is_global||e)&&s.in()}}function ls(t,e){if(t.nodes)for(var r=t.nodes.start,n=t.nodes.end;r!==null;){var i=r===n?null:cn(r);e.append(r),r=i}}let yn=!1,sr=!1;function na(t){sr=t}let de=null,xt=!1;function ht(t){de=t}let pe=null;function vt(t){pe=t}let dt=null;function us(t){de!==null&&(dt===null?dt=[t]:dt.push(t))}let Ke=null,et=0,lt=null;function dl(t){lt=t}let cs=1,dr=0,xr=dr;function ia(t){xr=t}function fs(){return++cs}function dn(t){var e=t.f;if((e&We)!==0)return!0;if(e&Ge&&(t.f&=~yr),(e&yt)!==0){for(var r=t.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(dn(a)&&Va(a),a.wv>t.wv)return!0}(e&ft)!==0&&Fe===null&&Re(t,qe)}return!1}function ds(t,e,r=!0){var n=t.reactions;if(n!==null&&!(dt!==null&&Mr.call(dt,t)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Ge)!==0?ds(a,e,!1):e===a&&(r?Re(a,We):(a.f&qe)!==0&&Re(a,yt),bt(a))}}function hs(t){var _;var e=Ke,r=et,n=lt,i=de,a=dt,s=Pe,o=xt,u=xr,l=t.f;Ke=null,et=0,lt=null,de=(l&(wt|Sr))===0?t:null,dt=null,Or(t.ctx),xt=!1,xr=++dr,t.ac!==null&&(Dn(()=>{t.ac.abort(cr)}),t.ac=null);try{t.f|=ni;var f=t.fn,p=f();t.f|=on;var d=t.deps,w=re==null?void 0:re.is_fork;if(Ke!==null){var m;if(w||en(t,et),d!==null&&et>0)for(d.length=et+Ke.length,m=0;m<Ke.length;m++)d[et+m]=Ke[m];else t.deps=d=Ke;if(Ri()&&(t.f&ft)!==0)for(m=et;m<d.length;m++)((_=d[m]).reactions??(_.reactions=[])).push(t)}else!w&&d!==null&&et<d.length&&(en(t,et),d.length=et);if(ln()&&lt!==null&&!xt&&d!==null&&(t.f&(Ge|yt|We))===0)for(m=0;m<lt.length;m++)ds(lt[m],t);if(i!==null&&i!==t){if(dr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=dr;if(e!==null)for(const v of e)v.rv=dr;lt!==null&&(n===null?n=lt:n.push(...lt))}return(t.f&Xt)!==0&&(t.f^=Xt),p}catch(v){return Ma(v)}finally{t.f^=ni,Ke=e,et=r,lt=n,de=i,dt=a,Or(s),xt=o,xr=u}}function hl(t,e){let r=e.reactions;if(r!==null){var n=ro.call(r,t);if(n!==-1){var i=r.length-1;i===0?r=e.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(e.f&Ge)!==0&&(Ke===null||!Mr.call(Ke,e))){var a=e;(a.f&ft)!==0&&(a.f^=ft,a.f&=~yr),Ei(a),Xo(a),en(a,0)}}function en(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)hl(t,r[n])}function jr(t){var e=t.f;if((e&Ht)===0){Re(t,qe);var r=pe,n=yn;pe=t,yn=!0;try{(e&(Zt|$i))!==0?fl(t):Ci(t),ns(t);var i=hs(t);t.teardown=typeof i=="function"?i:null,t.wv=cs;var a;ei&&Io&&(t.f&We)!==0&&t.deps}finally{yn=n,pe=r}}}async function vl(){await Promise.resolve(),Bo()}function c(t){var e=t.f,r=(e&Ge)!==0;if(de!==null&&!xt){var n=pe!==null&&(pe.f&Ht)!==0;if(!n&&(dt===null||!Mr.call(dt,t))){var i=de.deps;if((de.f&ni)!==0)t.rv<dr&&(t.rv=dr,Ke===null&&i!==null&&i[et]===t?et++:Ke===null?Ke=[t]:Ke.push(t));else{(de.deps??(de.deps=[])).push(t);var a=t.reactions;a===null?t.reactions=[de]:Mr.call(a,de)||a.push(de)}}}if(sr&&tr.has(t))return tr.get(t);if(r){var s=t;if(sr){var o=s.v;return((s.f&qe)===0&&s.reactions!==null||ps(s))&&(o=Ni(s)),tr.set(s,o),o}var u=(s.f&ft)===0&&!xt&&de!==null&&(yn||(de.f&ft)!==0),l=(s.f&on)===0;dn(s)&&(u&&(s.f|=ft),Va(s)),u&&!l&&(Ha(s),vs(s))}if(Fe!=null&&Fe.has(t))return Fe.get(t);if((t.f&Xt)!==0)throw t.v;return t.v}function vs(t){if(t.f|=ft,t.deps!==null)for(const e of t.deps)(e.reactions??(e.reactions=[])).push(t),(e.f&Ge)!==0&&(e.f&ft)===0&&(Ha(e),vs(e))}function ps(t){if(t.v===De)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(tr.has(e)||(e.f&Ge)!==0&&ps(e))return!0;return!1}function or(t){var e=xt;try{return xt=!0,t()}finally{xt=e}}function ur(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Gt in t)fi(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&Gt in r&&fi(r)}}}function fi(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{fi(t[n],e)}catch{}const r=ki(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ka(r);for(let i in n){const a=n[i].get;if(a)try{a.call(t)}catch{}}}}}function pl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const gl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ml(t){return gl.includes(t)}const _l={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function bl(t){return t=t.toLowerCase(),_l[t]??t}const xl=["touchstart","touchmove"];function yl(t){return xl.includes(t)}const hr=Symbol("events"),gs=new Set,di=new Set;function ms(t,e,r,n={}){function i(a){if(n.capture||hi.call(e,a),!a.cancelBubble)return Dn(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Wt(()=>{e.addEventListener(t,i,n)}):e.addEventListener(t,i,n),i}function wl(t,e,r,n,i){var a={capture:n,passive:i},s=ms(t,e,r,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&qn(()=>{e.removeEventListener(t,s,a)})}function ne(t,e,r){(e[hr]??(e[hr]={}))[t]=r}function Jt(t){for(var e=0;e<t.length;e++)gs.add(t[e]);for(var r of di)r(t)}let aa=null;function hi(t){var v,x;var e=this,r=e.ownerDocument,n=t.type,i=((v=t.composedPath)==null?void 0:v.call(t))||[],a=i[0]||t.target;aa=t;var s=0,o=aa===t&&t[hr];if(o){var u=i.indexOf(o);if(u!==-1&&(e===document||e===window)){t[hr]=e;return}var l=i.indexOf(e);if(l===-1)return;u<=l&&(s=u)}if(a=i[s]||t.target,a!==e){no(t,"currentTarget",{configurable:!0,get(){return a||r}});var f=de,p=pe;ht(null),vt(null);try{for(var d,w=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var _=(x=a[hr])==null?void 0:x[n];_!=null&&(!a.disabled||t.target===a)&&_.call(a,t)}catch(R){d?w.push(R):d=R}if(t.cancelBubble||m===e||m===null)break;a=m}if(d){for(let R of w)queueMicrotask(()=>{throw R});throw d}}finally{t[hr]=e,delete t.currentTarget,ht(f),vt(p)}}}var ya;const Zn=((ya=globalThis==null?void 0:globalThis.window)==null?void 0:ya.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:t=>t});function kl(t){return(Zn==null?void 0:Zn.createHTML(t))??t}function Oi(t,e=!1){var r=Ya("template");return t=t.replaceAll("<!>","<!---->"),r.innerHTML=e?kl(t):t,r.content}function wr(t,e){var r=pe;r.nodes===null&&(r.nodes={start:t,end:e,a:null,t:null})}function S(t,e){var r=(e&No)!==0,n=(e&Ro)!==0,i,a=!t.startsWith("<!>");return()=>{i===void 0&&(i=Oi(a?t:"<!>"+t,!0),r||(i=Pt(i)));var s=n||Za?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=Pt(s),u=s.lastChild;wr(o,u)}else wr(s,s);return s}}function Sl(t,e,r="svg"){var n=!t.startsWith("<!>"),i=`<${r}>${n?t:"<!>"+t}</${r}>`,a;return()=>{if(!a){var s=Oi(i,!0),o=Pt(s);a=Pt(o)}var u=a.cloneNode(!0);return wr(u,u),u}}function $l(t,e){return Sl(t,e,"svg")}function sa(t=""){{var e=Ct(t+"");return wr(e,e),e}}function K(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Ct();return t.append(e,r),wr(e,r),t}function g(t,e){t!==null&&t.before(e)}function Z(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function Al(t,e){return Tl(t,e)}const pn=new Map;function Tl(t,{target:e,anchor:r,props:n={},events:i,context:a,intro:s=!0}){nl();var o=void 0,u=ul(()=>{var l=r??e.appendChild(Ct());Go(l,{pending:()=>{}},d=>{kt({});var w=Pe;a&&(w.c=a),i&&(n.$$events=i),o=t(d,n)||{},St()});var f=new Set,p=d=>{for(var w=0;w<d.length;w++){var m=d[w];if(!f.has(m)){f.add(m);var _=yl(m);for(const R of[e,document]){var v=pn.get(R);v===void 0&&(v=new Map,pn.set(R,v));var x=v.get(m);x===void 0?(R.addEventListener(m,hi,{passive:_}),v.set(m,1)):v.set(m,x+1)}}}};return p(In(gs)),di.add(p),()=>{var _;for(var d of f)for(const v of[e,document]){var w=pn.get(v),m=w.get(d);--m==0?(v.removeEventListener(d,hi),w.delete(d),w.size===0&&pn.delete(v)):w.set(d,m)}di.delete(p),l!==r&&((_=l.parentNode)==null||_.removeChild(l))}});return El.set(o,u),o}let El=new WeakMap;var _t,Rt,rt,_r,nn,an,Ln;class Li{constructor(e,r=!0){fe(this,"anchor");he(this,_t,new Map);he(this,Rt,new Map);he(this,rt,new Map);he(this,_r,new Set);he(this,nn,!0);he(this,an,()=>{var e=re;if(b(this,_t).has(e)){var r=b(this,_t).get(e),n=b(this,Rt).get(r);if(n)Mi(n),b(this,_r).delete(r);else{var i=b(this,rt).get(r);i&&(b(this,Rt).set(r,i.effect),b(this,rt).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of b(this,_t)){if(b(this,_t).delete(a),a===e)break;const o=b(this,rt).get(s);o&&(He(o.effect),b(this,rt).delete(s))}for(const[a,s]of b(this,Rt)){if(a===r||b(this,_r).has(a))continue;const o=()=>{if(Array.from(b(this,_t).values()).includes(a)){var l=document.createDocumentFragment();ls(s,l),l.append(Ct()),b(this,rt).set(a,{effect:s,fragment:l})}else He(s);b(this,_r).delete(a),b(this,Rt).delete(a)};b(this,nn)||!n?(b(this,_r).add(a),br(s,o,!1)):o()}}});he(this,Ln,e=>{b(this,_t).delete(e);const r=Array.from(b(this,_t).values());for(const[n,i]of b(this,rt))r.includes(n)||(He(i.effect),b(this,rt).delete(n))});this.anchor=e,ue(this,nn,r)}ensure(e,r){var n=re,i=Ka();if(r&&!b(this,Rt).has(e)&&!b(this,rt).has(e))if(i){var a=document.createDocumentFragment(),s=Ct();a.append(s),b(this,rt).set(e,{effect:nt(()=>r(s)),fragment:a})}else b(this,Rt).set(e,nt(()=>r(this.anchor)));if(b(this,_t).set(n,e),i){for(const[o,u]of b(this,Rt))o===e?n.unskip_effect(u):n.skip_effect(u);for(const[o,u]of b(this,rt))o===e?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(b(this,an)),n.ondiscard(b(this,Ln))}else b(this,an).call(this)}}_t=new WeakMap,Rt=new WeakMap,rt=new WeakMap,_r=new WeakMap,nn=new WeakMap,an=new WeakMap,Ln=new WeakMap;function I(t,e,r=!1){var n=new Li(t),i=r?ir:0;function a(s,o){n.ensure(s,o)}fn(()=>{var s=!1;e((o,u=0)=>{s=!0,a(u,o)}),s||a(!1,null)},i)}function nr(t,e){return e}function zl(t,e,r){for(var n=[],i=e.length,a,s=e.length,o=0;o<i;o++){let p=e[o];br(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var d=t.outrogroups;vi(In(a.done)),d.delete(a),d.size===0&&(t.outrogroups=null)}}else s-=1},!1)}if(s===0){var u=n.length===0&&r!==null;if(u){var l=r,f=l.parentNode;il(f),f.append(l),t.items.clear()}vi(e,!u)}else a={pending:new Set(e),done:new Set},(t.outrogroups??(t.outrogroups=new Set)).add(a)}function vi(t,e=!0){for(var r=0;r<t.length;r++)He(t[r],e)}var oa;function at(t,e,r,n,i,a=null){var s=t,o=new Map,u=(e&Ea)!==0;if(u){var l=t;s=l.appendChild(Ct())}var f=null,p=zi(()=>{var x=r();return wi(x)?x:x==null?[]:In(x)}),d,w=!0;function m(){v.fallback=f,Nl(v,d,s,e,n),f!==null&&(d.length===0?(f.f&Bt)===0?Mi(f):(f.f^=Bt,Zr(f,null,s)):br(f,()=>{f=null}))}var _=fn(()=>{d=c(p);for(var x=d.length,R=new Set,J=re,k=Ka(),T=0;T<x;T+=1){var F=d[T],V=n(F,T),M=w?null:o.get(V);M?(M.v&&Ir(M.v,F),M.i&&Ir(M.i,T),k&&J.unskip_effect(M.e)):(M=Rl(o,w?s:oa??(oa=Ct()),F,V,T,i,e,r),w||(M.e.f|=Bt),o.set(V,M)),R.add(V)}if(x===0&&a&&!f&&(w?f=nt(()=>a(s)):(f=nt(()=>a(oa??(oa=Ct()))),f.f|=Bt)),x>R.size&&fo(),!w)if(k){for(const[we,Y]of o)R.has(we)||J.skip_effect(Y.e);J.oncommit(m),J.ondiscard(()=>{})}else m();c(p)}),v={effect:_,items:o,outrogroups:null,fallback:f};w=!1}function Fr(t){for(;t!==null&&(t.f&wt)===0;)t=t.next;return t}function Nl(t,e,r,n,i){var Y,_e,Te,C,z,q,ee,N,$;var a=(n&So)!==0,s=e.length,o=t.items,u=Fr(t.effect.first),l,f=null,p,d=[],w=[],m,_,v,x;if(a)for(x=0;x<s;x+=1)m=e[x],_=i(m,x),v=o.get(_).e,(v.f&Bt)===0&&((_e=(Y=v.nodes)==null?void 0:Y.a)==null||_e.measure(),(p??(p=new Set)).add(v));for(x=0;x<s;x+=1){if(m=e[x],_=i(m,x),v=o.get(_).e,t.outrogroups!==null)for(const j of t.outrogroups)j.pending.delete(v),j.done.delete(v);if((v.f&Bt)!==0)if(v.f^=Bt,v===u)Zr(v,null,r);else{var R=f?f.next:u;v===t.effect.last&&(t.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),Ut(t,f,v),Ut(t,v,R),Zr(v,R,r),f=v,d=[],w=[],u=Fr(f.next);continue}if((v.f&st)!==0&&(Mi(v),a&&((C=(Te=v.nodes)==null?void 0:Te.a)==null||C.unfix(),(p??(p=new Set)).delete(v))),v!==u){if(l!==void 0&&l.has(v)){if(d.length<w.length){var J=w[0],k;f=J.prev;var T=d[0],F=d[d.length-1];for(k=0;k<d.length;k+=1)Zr(d[k],J,r);for(k=0;k<w.length;k+=1)l.delete(w[k]);Ut(t,T.prev,F.next),Ut(t,f,T),Ut(t,F,J),u=J,f=F,x-=1,d=[],w=[]}else l.delete(v),Zr(v,u,r),Ut(t,v.prev,v.next),Ut(t,v,f===null?t.effect.first:f.next),Ut(t,f,v),f=v;continue}for(d=[],w=[];u!==null&&u!==v;)(l??(l=new Set)).add(u),w.push(u),u=Fr(u.next);if(u===null)continue}(v.f&Bt)===0&&d.push(v),f=v,u=Fr(v.next)}if(t.outrogroups!==null){for(const j of t.outrogroups)j.pending.size===0&&(vi(In(j.done)),(z=t.outrogroups)==null||z.delete(j));t.outrogroups.size===0&&(t.outrogroups=null)}if(u!==null||l!==void 0){var V=[];if(l!==void 0)for(v of l)(v.f&st)===0&&V.push(v);for(;u!==null;)(u.f&st)===0&&u!==t.fallback&&V.push(u),u=Fr(u.next);var M=V.length;if(M>0){var we=(n&Ea)!==0&&s===0?r:null;if(a){for(x=0;x<M;x+=1)(ee=(q=V[x].nodes)==null?void 0:q.a)==null||ee.measure();for(x=0;x<M;x+=1)($=(N=V[x].nodes)==null?void 0:N.a)==null||$.fix()}zl(t,V,we)}}a&&Wt(()=>{var j,O;if(p!==void 0)for(v of p)(O=(j=v.nodes)==null?void 0:j.a)==null||O.apply()})}function Rl(t,e,r,n,i,a,s,o){var u=(s&wo)!==0?(s&$o)===0?el(r,!1,!1):ar(r):null,l=(s&ko)!==0?ar(i):null;return{v:u,i:l,e:nt(()=>(a(e,u??r,l??i,o),()=>{t.delete(n)}))}}function Zr(t,e,r){if(t.nodes)for(var n=t.nodes.start,i=t.nodes.end,a=e&&(e.f&Bt)===0?e.nodes.start:r;n!==null;){var s=cn(n);if(a.before(n),n===i)return;n=s}}function Ut(t,e,r){e===null?t.effect.first=r:e.next=r,r===null?t.effect.last=e:r.prev=e}function Pl(t,e,r=!1,n=!1,i=!1){var a=t,s="";L(()=>{var o=pe;if(s!==(s=e()??"")&&(o.nodes!==null&&(is(o.nodes.start,o.nodes.end),o.nodes=null),s!=="")){var u=s+"";r?u=`<svg>${u}</svg>`:n&&(u=`<math>${u}</math>`);var l=Oi(u);if((r||n)&&(l=Pt(l)),wr(Pt(l),l.lastChild),r||n)for(;Pt(l);)a.before(Pt(l));else a.before(l)}})}function se(t,e,r,n,i){var o;var a=(o=e.$$slots)==null?void 0:o[r],s=!1;a===!0&&(a=e.children,s=!0),a===void 0||a(t,s?()=>n:n)}function _s(t,e,r){var n=new Li(t);fn(()=>{var i=e()??null;n.ensure(i,i&&(a=>r(a,i)))},ir)}function Cl(t,e,r,n,i,a){var s=null,o=t,u=new Li(o,!1);fn(()=>{const l=e()||null;var f=Po;if(l===null){u.ensure(null,null);return}return u.ensure(l,p=>{if(l){if(s=Ya(l,f),wr(s,s),n){var d=s.appendChild(Ct());n(s,d)}pe.nodes.end=s,p.before(s)}}),()=>{}},ir),qn(()=>{})}function Ml(t,e){var r=void 0,n;rs(()=>{r!==(r=e())&&(n&&(He(n),n=null),r&&(n=nt(()=>{Pi(()=>r(t))})))})}function bs(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(r=bs(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function Ol(){for(var t,e,r=0,n="",i=arguments.length;r<i;r++)(t=arguments[r])&&(e=bs(t))&&(n&&(n+=" "),n+=e);return n}function ct(t){return typeof t=="object"?Ol(t):t??""}const la=[...` 	
\r\f \v\uFEFF`];function Ll(t,e,r){var n=t==null?"":""+t;if(e&&(n=n?n+" "+e:e),r){for(var i in r)if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||la.includes(n[s-1]))&&(o===n.length||la.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function ua(t,e=!1){var r=e?" !important;":";",n="";for(var i in t){var a=t[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Jn(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Il(t,e){if(e){var r="",n,i;if(Array.isArray(e)?(n=e[0],i=e[1]):n=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,u=[];n&&u.push(...Object.keys(n).map(Jn)),i&&u.push(...Object.keys(i).map(Jn));var l=0,f=-1;const _=t.length;for(var p=0;p<_;p++){var d=t[p];if(o?d==="/"&&t[p-1]==="*"&&(o=!1):a?a===d&&(a=!1):d==="/"&&t[p+1]==="*"?o=!0:d==='"'||d==="'"?a=d:d==="("?s++:d===")"&&s--,!o&&a===!1&&s===0){if(d===":"&&f===-1)f=p;else if(d===";"||p===_-1){if(f!==-1){var w=Jn(t.substring(l,f).trim());if(!u.includes(w)){d!==";"&&p++;var m=t.substring(l,p).trim();r+=" "+m+";"}}l=p+1,f=-1}}}}return n&&(r+=ua(n)),i&&(r+=ua(i,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function ve(t,e,r,n,i,a){var s=t.__className;if(s!==r||s===void 0){var o=Ll(r,n,a);o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o),t.__className=r}else if(a&&i!==a)for(var u in a){var l=!!a[u];(i==null||l!==!!i[u])&&t.classList.toggle(u,l)}return a}function Un(t,e={},r,n){for(var i in r){var a=r[i];e[i]!==a&&(r[i]==null?t.style.removeProperty(i):t.style.setProperty(i,a,n))}}function jl(t,e,r,n){var i=t.__style;if(i!==e){var a=Il(e,n);a==null?t.removeAttribute("style"):t.style.cssText=a,t.__style=e}else n&&(Array.isArray(n)?(Un(t,r==null?void 0:r[0],n[0]),Un(t,r==null?void 0:r[1],n[1],"important")):Un(t,r,n));return n}function zn(t,e,r=!1){if(t.multiple){if(e==null)return;if(!wi(e))return Mo();for(var n of t.options)n.selected=e.includes(Yr(n));return}for(n of t.options){var i=Yr(n);if(rl(i,e)){n.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function xs(t){var e=new MutationObserver(()=>{zn(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qn(()=>{e.disconnect()})}function Dl(t,e,r=e){var n=new WeakSet,i=!0;Qa(t,"change",a=>{var s=a?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(s),Yr);else{var u=t.querySelector(s)??t.querySelector("option:not([disabled])");o=u&&Yr(u)}r(o),re!==null&&n.add(re)}),Pi(()=>{var a=e();if(t===document.activeElement){var s=En??re;if(n.has(s))return}if(zn(t,a,i),i&&a===void 0){var o=t.querySelector(":checked");o!==null&&(a=Yr(o),r(a))}t.__value=a,i=!1}),xs(t)}function Yr(t){return"__value"in t?t.__value:t.value}const Vr=Symbol("class"),Hr=Symbol("style"),ys=Symbol("is custom element"),ws=Symbol("is html"),ql=Ti?"option":"OPTION",Bl=Ti?"select":"SELECT",Fl=Ti?"progress":"PROGRESS";function Kt(t,e){var r=Bn(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!==Fl)||(t.value=e??"")}function Vl(t,e){var r=Bn(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function pi(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Se(t,e,r,n){var i=Bn(t);i[e]!==(i[e]=r)&&(e==="loading"&&(t[lo]=r),r==null?t.removeAttribute(e):typeof r!="string"&&ks(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Hl(t,e,r,n,i=!1,a=!1){var s=Bn(t),o=s[ys],u=!s[ws],l=e||{},f=t.nodeName===ql;for(var p in e)p in r||(r[p]=null);r.class?r.class=ct(r.class):r[Vr]&&(r.class=null),r[Hr]&&(r.style??(r.style=null));var d=ks(t);for(const k in r){let T=r[k];if(f&&k==="value"&&T==null){t.value=t.__value="",l[k]=T;continue}if(k==="class"){var w=t.namespaceURI==="http://www.w3.org/1999/xhtml";ve(t,w,T,n,e==null?void 0:e[Vr],r[Vr]),l[k]=T,l[Vr]=r[Vr];continue}if(k==="style"){jl(t,T,e==null?void 0:e[Hr],r[Hr]),l[k]=T,l[Hr]=r[Hr];continue}var m=l[k];if(!(T===m&&!(T===void 0&&t.hasAttribute(k)))){l[k]=T;var _=k[0]+k[1];if(_!=="$$")if(_==="on"){const F={},V="$$"+k;let M=k.slice(2);var v=ml(M);if(pl(M)&&(M=M.slice(0,-7),F.capture=!0),!v&&m){if(T!=null)continue;t.removeEventListener(M,l[V],F),l[V]=null}if(v)ne(M,t,T),Jt([M]);else if(T!=null){let we=function(Y){l[k].call(this,Y)};var J=we;l[V]=ms(M,t,we,F)}}else if(k==="style")Se(t,k,T);else if(k==="autofocus")al(t,!!T);else if(!o&&(k==="__value"||k==="value"&&T!=null))t.value=t.__value=T;else if(k==="selected"&&f)pi(t,T);else{var x=k;u||(x=bl(x));var R=x==="defaultValue"||x==="defaultChecked";if(T==null&&!o&&!R)if(s[k]=null,x==="value"||x==="checked"){let F=t;const V=e===void 0;if(x==="value"){let M=F.defaultValue;F.removeAttribute(x),F.defaultValue=M,F.value=F.__value=V?M:null}else{let M=F.defaultChecked;F.removeAttribute(x),F.defaultChecked=M,F.checked=V?M:!1}}else t.removeAttribute(k);else R||d.includes(x)&&(o||typeof T!="string")?(t[x]=T,x in s&&(s[x]=De)):typeof T!="function"&&Se(t,x,T)}}}return l}function ca(t,e,r=[],n=[],i=[],a,s=!1,o=!1){Fa(i,r,n,u=>{var l=void 0,f={},p=t.nodeName===Bl,d=!1;if(rs(()=>{var m=e(...u.map(c)),_=Hl(t,l,m,a,s,o);d&&p&&"value"in m&&zn(t,m.value);for(let x of Object.getOwnPropertySymbols(f))m[x]||He(f[x]);for(let x of Object.getOwnPropertySymbols(m)){var v=m[x];x.description===Co&&(!l||v!==l[x])&&(f[x]&&He(f[x]),f[x]=nt(()=>Ml(t,()=>v))),_[x]=v}l=_}),p){var w=t;Pi(()=>{zn(w,l.value,!0),xs(w)})}d=!0})}function Bn(t){return t.__attributes??(t.__attributes={[ys]:t.nodeName.includes("-"),[ws]:t.namespaceURI===Na})}var fa=new Map;function ks(t){var e=t.getAttribute("is")||t.nodeName,r=fa.get(e);if(r)return r;fa.set(e,r=[]);for(var n,i=t,a=Element.prototype;a!==i;){n=ka(i);for(var s in n)n[s].set&&r.push(s);i=ki(i)}return r}function Ss(t,e,r=e){var n=new WeakSet;Qa(t,"input",async i=>{var a=i?t.defaultValue:t.value;if(a=Kn(t)?Yn(a):a,r(a),re!==null&&n.add(re),await vl(),a!==(a=e())){var s=t.selectionStart,o=t.selectionEnd,u=t.value.length;if(t.value=a??"",o!==null){var l=t.value.length;s===o&&o===u&&l>u?(t.selectionStart=l,t.selectionEnd=l):(t.selectionStart=s,t.selectionEnd=Math.min(o,l))}}}),or(e)==null&&t.value&&(r(Kn(t)?Yn(t.value):t.value),re!==null&&n.add(re)),ts(()=>{var i=e();if(t===document.activeElement){var a=En??re;if(n.has(a))return}Kn(t)&&i===Yn(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Kn(t){var e=t.type;return e==="number"||e==="range"}function Yn(t){return t===""?null:+t}function Gl(t=!1){const e=Pe,r=e.l.u;if(!r)return;let n=()=>ur(e.s);if(t){let i=0,a={};const s=un(()=>{let o=!1;const u=e.s;for(const l in u)u[l]!==a[l]&&(a[l]=u[l],o=!0);return o&&i++,i});n=()=>c(s)}r.b.length&&ll(()=>{da(e,n),ti(r.b)}),rr(()=>{const i=or(()=>r.m.map(oo));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&rr(()=>{da(e,n),ti(r.a)})}function da(t,e){if(t.l.s)for(const r of t.l.s)c(r);e()}let gn=!1;function Wl(t){var e=gn;try{return gn=!1,[t(),gn]}finally{gn=e}}const Zl={get(t,e){if(!t.exclude.includes(e))return c(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,r){if(!(e in t.special)){var n=pe;try{vt(t.parent_effect),t.special[e]=Ve({get[e](){return t.props[e]}},e,za)}finally{vt(n)}}return t.special[e](r),Xi(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),Xi(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function ae(t,e){return new Proxy({props:t,exclude:e,special:{},version:ar(0),parent_effect:pe},Zl)}const Jl={get(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Br(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(t,e,r){let n=t.props.length;for(;n--;){let i=t.props[n];Br(i)&&(i=i());const a=Qt(i,e);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let n=t.props[r];if(Br(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Qt(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(t,e){if(e===Gt||e===Ta)return!1;for(let r of t.props)if(Br(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Br(r)&&(r=r()),!!r){for(const n in r)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(r))e.includes(n)||e.push(n)}return e}};function oe(...t){return new Proxy({props:t},Jl)}function Ve(t,e,r,n){var J;var i=!qr||(r&To)!==0,a=(r&Eo)!==0,s=(r&zo)!==0,o=n,u=!0,l=()=>(u&&(u=!1,o=s?or(n):n),o),f;if(a){var p=Gt in t||Ta in t;f=((J=Qt(t,e))==null?void 0:J.set)??(p&&e in t?k=>t[e]=k:void 0)}var d,w=!1;a?[d,w]=Wl(()=>t[e]):d=t[e],d===void 0&&n!==void 0&&(d=l(),f&&(i&&mo(),f(d)));var m;if(i?m=()=>{var k=t[e];return k===void 0?l():(u=!0,k)}:m=()=>{var k=t[e];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&za)===0)return m;if(f){var _=t.$$legacy;return(function(k,T){return arguments.length>0?((!i||!T||_||w)&&f(T?m():k),k):m()})}var v=!1,x=((r&Ao)!==0?un:zi)(()=>(v=!1,m()));a&&c(x);var R=pe;return(function(k,T){if(arguments.length>0){const F=T?c(x):i&&a?it(k):k;return A(x,F),v=!0,o!==void 0&&(o=F),k}return sr&&v||(R.f&Ht)!==0?x.v:c(x)})}function $s(t){Pe===null&&uo(),qr&&Pe.l!==null?Ul(Pe).m.push(t):rr(()=>{const e=or(t);if(typeof e=="function")return e})}function Ul(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Kl="5";var wa;typeof window<"u"&&((wa=window.__svelte??(window.__svelte={})).v??(wa.v=new Set)).add(Kl);let ut=null,wn=[],Qn=null,kn=1e3;const Yl=1e4;function Ql(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/ws`}function As(){(ut==null?void 0:ut.readyState)!==WebSocket.OPEN&&(ut=new WebSocket(Ql()),ut.onopen=()=>{kn=1e3,Ar({type:"get_tools"}),Ar({type:"get_timeline",filter:{limit:50}})},ut.onmessage=t=>{try{const e=JSON.parse(t.data);for(const r of wn)r(e)}catch{console.error("Failed to parse WebSocket message:",t.data)}},ut.onclose=()=>{Xl()},ut.onerror=()=>{})}function Xl(){Qn||(Qn=setTimeout(()=>{Qn=null,As(),kn=Math.min(kn*2,Yl)},kn))}function Ar(t){(ut==null?void 0:ut.readyState)===WebSocket.OPEN&&ut.send(JSON.stringify(t))}function Ts(t){return wn.push(t),()=>{wn=wn.filter(e=>e!==t)}}function eu(t,e){const r=new Set(t.map(u=>u.name)),n=new Set(e.map(u=>u.name)),i=e.filter(u=>!r.has(u.name)),a=t.filter(u=>!n.has(u.name)),s=e.filter(u=>{const l=t.find(f=>f.name===u.name);return l&&JSON.stringify(l.inputSchema)!==JSON.stringify(u.inputSchema)}),o=[];return i.length&&o.push(`${i.length} added`),a.length&&o.push(`${a.length} removed`),s.length&&o.push(`${s.length} schema changed`),o.length===0?"Server reloaded (no tool changes)":`Server reloaded: ${o.join(", ")}`}jo();/**
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
 */const tu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const ru=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
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
 */const ha=(...t)=>t.filter((e,r,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===r).join(" ").trim();var nu=$l("<svg><!><!></svg>");function le(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]),n=ae(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kt(e,!1);let i=Ve(e,"name",8,void 0),a=Ve(e,"color",8,"currentColor"),s=Ve(e,"size",8,24),o=Ve(e,"strokeWidth",8,2),u=Ve(e,"absoluteStrokeWidth",8,!1),l=Ve(e,"iconNode",24,()=>[]);Gl();var f=nu();ca(f,(w,m,_)=>({...tu,...w,...n,width:s(),height:s(),stroke:a(),"stroke-width":m,class:_}),[()=>ru(n)?void 0:{"aria-hidden":"true"},()=>(ur(u()),ur(o()),ur(s()),or(()=>u()?Number(o())*24/Number(s()):o())),()=>(ur(ha),ur(i()),ur(r),or(()=>ha("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=h(f);at(p,1,l,nr,(w,m)=>{var _=ce(()=>Si(c(m),2));let v=()=>c(_)[0],x=()=>c(_)[1];var R=K(),J=B(R);Cl(J,v,!0,(k,T)=>{ca(k,()=>({...x()}))}),g(w,R)});var d=y(p);se(d,e,"default",{}),g(t,f),St()}function iu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];le(t,oe({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function au(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];le(t,oe({name:"braces"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function su(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m9 18 6-6-6-6"}]];le(t,oe({name:"chevron-right"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function ou(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(t,oe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function lu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(t,oe({name:"circle-question-mark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function uu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];le(t,oe({name:"copy"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function cu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];le(t,oe({name:"database"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function fu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];le(t,oe({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function du(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];le(t,oe({name:"file-braces"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function hu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}]];le(t,oe({name:"file-code"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function vu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M12 17h.01"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];le(t,oe({name:"file-question-mark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function pu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];le(t,oe({name:"file-text"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function gu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];le(t,oe({name:"folder"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function mu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(t,oe({name:"funnel"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function _u(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];le(t,oe({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function bu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];le(t,oe({name:"history"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function xu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(t,oe({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function yu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];le(t,oe({name:"layout-template"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function wu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(t,oe({name:"moon"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function ku(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(t,oe({name:"package"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Su(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];le(t,oe({name:"play"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function $u(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(t,oe({name:"search"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Au(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];le(t,oe({name:"server"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Tu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(t,oe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}function Eu(t,e){const r=ae(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];le(t,oe({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=K(),o=B(s);se(o,e,"default",{}),g(i,s)},$$slots:{default:!0}}))}var zu=S("<span><!> <span> </span></span>");function Os(t,e){const r={filesystem:{icon:gu,label:"FS",classes:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"},network:{icon:_u,label:"Net",classes:"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"},shell:{icon:Ps,label:"Shell",classes:"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800"},database:{icon:cu,label:"DB",classes:"bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800"},read_only:{icon:fu,label:"Read",classes:"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"},write:{icon:Su,label:"Write",classes:"bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800"}};let n=ce(()=>r[e.capability]??{icon:lu,label:e.capability,classes:"bg-secondary text-secondary-foreground border-border"}),i=ce(()=>c(n).icon);var a=zu(),s=h(a);_s(s,()=>c(i),(l,f)=>{f(l,{size:10})});var o=y(s,2),u=h(o);L(()=>{ve(a,1,`inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium shadow-sm transition-colors ${c(n).classes}`),Se(a,"title",e.capability),Z(u,c(n).label)}),g(t,a)}var Nu=S('<span class="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground"> </span>'),Ru=S('<div class="line-clamp-2 w-full text-left text-xs opacity-80"> </div>'),Pu=S('<div class="mt-1 flex flex-wrap gap-1"></div>'),Cu=S('<button><div class="flex w-full items-center justify-between"><div class="flex items-center gap-2"><div><!></div> <span> </span></div> <!></div> <!> <!></button>'),Mu=S('<div class="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"><!> <p class="text-xs"> </p></div>'),Ou=S('<div class="flex h-full flex-col"><div class="border-b p-4"><div class="relative"><!> <input type="text" placeholder="Search tools..." class="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"/></div></div> <div class="flex-1 overflow-y-auto p-2"><div class="space-y-1"><!> <!></div></div> <div class="flex items-center justify-between border-t bg-muted/20 px-4 py-2 text-xs text-muted-foreground"><span> </span> <span>Local</span></div></div>');function Lu(t,e){kt(e,!0);let r=Ve(e,"executionCounts",19,()=>({})),n=ie(""),i=ie(-1),a=ce(()=>c(n)?e.tools.filter(k=>k.name.toLowerCase().includes(c(n).toLowerCase())||k.description.toLowerCase().includes(c(n).toLowerCase())):e.tools);function s(k){if(c(a).length!==0)switch(k.key){case"ArrowDown":k.preventDefault(),A(i,Math.min(c(i)+1,c(a).length-1),!0);break;case"ArrowUp":k.preventDefault(),A(i,Math.max(c(i)-1,0),!0);break;case"Enter":k.preventDefault(),c(i)>=0&&c(i)<c(a).length&&e.onSelect(c(a)[c(i)]);break}}var o=Ou(),u=h(o),l=h(u),f=h(l);Rs(f,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var p=y(f,2),d=y(u,2),w=h(d),m=h(w);at(m,19,()=>c(a),k=>k.name,(k,T,F)=>{const V=ce(()=>r()[c(T).name]??0);var M=Cu(),we=h(M),Y=h(we),_e=h(Y),Te=h(_e);zs(Te,{size:12});var C=y(_e,2),z=h(C),q=y(Y,2);{var ee=E=>{var Q=Nu(),D=h(Q);L(()=>Z(D,c(V))),g(E,Q)};I(q,E=>{c(V)>0&&E(ee)})}var N=y(we,2);{var $=E=>{var Q=Ru(),D=h(Q);L(()=>Z(D,c(T).description)),g(E,Q)};I(N,E=>{c(T).description&&E($)})}var j=y(N,2);{var O=E=>{var Q=Pu();at(Q,21,()=>c(T).capabilities,nr,(D,G)=>{Os(D,{get capability(){return c(G)}})}),g(E,Q)};I(j,E=>{c(T).capabilities.length>0&&E(O)})}L(()=>{var E,Q,D;ve(M,1,`group flex w-full flex-col items-start gap-1 rounded-md p-3 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${((E=e.selectedTool)==null?void 0:E.name)===c(T).name?"bg-accent text-accent-foreground shadow-sm ring-1 ring-border":c(F)===c(i)?"bg-muted/50":"text-muted-foreground"}`),ve(_e,1,`flex h-6 w-6 items-center justify-center rounded border bg-background/50 ${((Q=e.selectedTool)==null?void 0:Q.name)===c(T).name?"border-primary/20":"border-border"}`),ve(C,1,`font-semibold ${((D=e.selectedTool)==null?void 0:D.name)===c(T).name?"text-foreground":"text-muted-foreground"}`),Z(z,c(T).name)}),ne("click",M,()=>e.onSelect(c(T))),wl("pointerenter",M,()=>A(i,c(F),!0)),g(k,M)});var _=y(m,2);{var v=k=>{var T=Mu(),F=h(T);ku(F,{class:"mb-2 h-8 w-8 opacity-20"});var V=y(F,2),M=h(V);L(()=>Z(M,e.tools.length===0?"No tools available":"No matching tools")),g(k,T)};I(_,k=>{c(a).length===0&&k(v)})}var x=y(d,2),R=h(x),J=h(R);L(()=>Z(J,`${e.tools.length??""} tool${e.tools.length!==1?"s":""}`)),ne("keydown",p,s),Ss(p,()=>c(n),k=>A(n,k)),g(t,o),St()}Jt(["keydown","click"]);function Ls(t){if(t.enum)return"enum";if(t.oneOf)return"oneOf";if(t.anyOf)return"anyOf";switch(t.type){case"string":return"string";case"number":return"number";case"integer":return"integer";case"boolean":return"boolean";case"object":return"object";case"array":return"array";default:return"unknown"}}function mi(t){var e;if(t.default!==void 0)return t.default;switch(Ls(t)){case"string":return"";case"number":case"integer":return;case"boolean":return!1;case"object":return Sn(t);case"array":return[];case"enum":return((e=t.enum)==null?void 0:e[0])??"";default:return}}function Sn(t){const e={},r=t.properties??{},n=new Set(t.required??[]);for(const[i,a]of Object.entries(r))a.default!==void 0?e[i]=a.default:n.has(i)&&(e[i]=mi(a));return e}function Is(t){const e=[];if(t.anyOf&&e.push("This tool uses anyOf in its schema. Some MCP clients (Claude Code, Claude API) may reject schemas using anyOf."),t.oneOf&&e.push("This tool uses oneOf in its schema. Some MCP clients may have limited support for oneOf discriminators."),t.allOf&&e.push("This tool uses allOf in its schema. Not all MCP clients fully support allOf composition."),t.properties)for(const r of Object.values(t.properties))e.push(...Is(r));return[...new Set(e)]}const Lt="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",mn="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",_n={default:`${mn} bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2`,destructive:`${mn} bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2`,outline:`${mn} border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`,ghost:`${mn} hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`};async function $n(t){await navigator.clipboard.writeText(t)}var Iu=S('<span class="text-destructive">*</span>'),ju=S('<span class="rounded bg-muted px-1.5 py-0.5 text-[10px] uppercase text-muted-foreground"> </span>'),Du=S('<div class="text-[12px] text-muted-foreground opacity-80"> </div>'),qu=S('<label class="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"><span class="font-mono text-foreground"> </span> <!> <!></label> <!>',1),Bu=S("<option> </option>"),Fu=S('<div class="relative"><select></select></div>'),Vu=S('<div class="flex items-center space-x-2"><input type="checkbox" class="aspect-square h-4 w-4 rounded border-primary text-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 accent-primary"/> <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label></div>'),Hu=S('<input type="number"/>'),Gu=S('<input type="date"/>'),Wu=S('<input type="url" placeholder="https://..."/>'),Zu=S('<textarea class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" rows="4"></textarea>'),Ju=S('<input type="text"/>'),Uu=S('<span class="text-xs text-destructive">*</span>'),Ku=S('<div class="text-xs text-muted-foreground"> </div>'),Yu=S('<div class="flex flex-col gap-4 p-4"><!> <!></div>'),Qu=S('<div class="rounded-lg border bg-card text-card-foreground shadow-sm"><button class="flex w-full items-center gap-2 border-b bg-muted/20 px-4 py-2 text-left text-sm font-medium hover:bg-muted/40"><!> <span class="font-mono"> </span> <span class="text-xs text-muted-foreground">object</span> <!></button> <!></div>'),Xu=S('<input type="text"/>'),ec=S('<div class="flex items-start gap-2"><span class="mt-2 font-mono text-xs text-muted-foreground min-w-[20px] text-right"></span> <div class="flex-1"><!></div> <button class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive hover:text-destructive-foreground" title="Remove"><!></button></div>'),tc=S('<div class="py-2 text-center text-xs italic text-muted-foreground">Empty array</div>'),rc=S('<div class="space-y-2 rounded-lg border bg-muted/10 p-3"><div class="flex items-center justify-between"><span class="text-xs font-semibold uppercase text-muted-foreground">Array Items</span> <button class="inline-flex h-6 items-center gap-1 rounded-full border bg-background px-2 text-[10px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground"><!> Add Item</button></div> <div class="space-y-2"><!> <!></div></div>'),nc=S("<option> </option>"),ic=S('<div class="pl-2 border-l-2 border-primary"><!></div>'),ac=S('<div class="rounded-md border p-4"><div class="mb-4"><label class="mb-2 block text-xs font-medium text-muted-foreground">Select Type Variant</label> <select></select></div> <!></div>'),sc=S('<textarea class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" rows="3"></textarea>'),oc=S('<div class="group flex flex-col gap-2"><!> <!></div>');function An(t,e){kt(e,!0);let r=Ve(e,"required",3,!1),n=Ve(e,"value",11,void 0),i=ce(()=>Ls(e.schema)),a=ce(()=>e.schema.description??""),s=ce(()=>c(i)==="object"&&typeof n()=="object"&&n()!==null?n():{}),o=ce(()=>c(i)==="array"&&Array.isArray(n())?n():[]),u=ce(()=>e.schema.oneOf??e.schema.anyOf??[]),l=ie(0),f=ie(!1);function p(C){const z=C.target;switch(c(i)){case"number":e.onchange(z.value===""?void 0:parseFloat(z.value));break;case"integer":e.onchange(z.value===""?void 0:parseInt(z.value,10));break;case"boolean":e.onchange(z.checked);break;default:e.onchange(z.value)}}function d(C){const z=C.target;if(e.schema.enum){const q=e.schema.enum[z.selectedIndex];e.onchange(q)}else e.onchange(z.value)}function w(){const C=e.schema.items?mi(e.schema.items):"";e.onchange([...c(o),C])}function m(C){const z=[...c(o)];z.splice(C,1),e.onchange(z)}function _(C,z){const q=[...c(o)];q[C]=z,e.onchange(q)}function v(C,z){e.onchange({...c(s),[C]:z})}var x=oc(),R=h(x);{var J=C=>{var z=qu(),q=B(z),ee=h(q),N=h(ee),$=y(ee,2);{var j=G=>{var U=Iu();g(G,U)};I($,G=>{r()&&G(j)})}var O=y($,2);{var E=G=>{var U=ju(),Ne=h(U);L(()=>Z(Ne,e.schema.type)),g(G,U)};I(O,G=>{e.schema.type&&G(E)})}var Q=y(q,2);{var D=G=>{var U=Du(),Ne=h(U);L(()=>Z(Ne,c(a))),g(G,U)};I(Q,G=>{c(a)&&G(D)})}L(()=>{Se(q,"for",e.name),Z(N,e.name)}),g(C,z)};I(R,C=>{c(i)!=="object"&&C(J)})}var k=y(R,2);{var T=C=>{var z=Fu(),q=h(z);at(q,21,()=>e.schema.enum??[],nr,(ee,N)=>{var $=Bu(),j=h($),O={};L((E,Q)=>{pi($,n()===c(N)),Z(j,E),O!==(O=Q)&&($.value=($.__value=Q)??"")},[()=>String(c(N)),()=>String(c(N))]),g(ee,$)}),L(()=>{Se(q,"id",e.name),ve(q,1,ct(Lt))}),ne("change",q,d),g(C,z)},F=C=>{var z=Vu(),q=h(z),ee=y(q,2),N=h(ee);L(()=>{Se(q,"id",e.name),Vl(q,n()===!0),Se(ee,"for",e.name),Z(N,n()?"true":"false")}),ne("change",q,p),g(C,z)},V=C=>{var z=Hu();L(()=>{Se(z,"id",e.name),ve(z,1,ct(Lt)),Kt(z,n()??""),Se(z,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:""),Se(z,"min",e.schema.minimum),Se(z,"max",e.schema.maximum),Se(z,"step",c(i)==="integer"?1:"any")}),ne("input",z,p),g(C,z)},M=C=>{var z=K(),q=B(z);{var ee=O=>{var E=Gu();L(()=>{Se(E,"id",e.name),ve(E,1,ct(Lt)),Kt(E,n()??"")}),ne("input",E,p),g(O,E)},N=O=>{var E=Wu();L(()=>{Se(E,"id",e.name),ve(E,1,ct(Lt)),Kt(E,n()??"")}),ne("input",E,p),g(O,E)},$=O=>{var E=Zu();L(()=>{Se(E,"id",e.name),Kt(E,n()??""),Se(E,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:"")}),ne("input",E,p),g(O,E)},j=O=>{var E=Ju();L(()=>{Se(E,"id",e.name),ve(E,1,ct(Lt)),Kt(E,n()??""),Se(E,"placeholder",e.schema.default!==void 0?`Default: ${e.schema.default}`:""),Se(E,"minlength",e.schema.minLength),Se(E,"maxlength",e.schema.maxLength)}),ne("input",E,p),g(O,E)};I(q,O=>{e.schema.format==="date"?O(ee):e.schema.format==="uri"?O(N,1):e.schema.maxLength&&e.schema.maxLength>200?O($,2):O(j,!1)})}g(C,z)},we=C=>{var z=Qu(),q=h(z),ee=h(q);{var N=U=>{Rn(U,{size:14,class:"text-muted-foreground"})},$=U=>{Nn(U,{size:14,class:"text-muted-foreground"})};I(ee,U=>{c(f)?U(N):U($,!1)})}var j=y(ee,2),O=h(j),E=y(j,4);{var Q=U=>{var Ne=Uu();g(U,Ne)};I(E,U=>{r()&&U(Q)})}var D=y(q,2);{var G=U=>{var Ne=Yu(),Ze=h(Ne);{var Oe=$e=>{var Ce=Ku(),Be=h(Ce);L(()=>Z(Be,c(a))),g($e,Ce)};I(Ze,$e=>{c(a)&&$e(Oe)})}var ke=y(Ze,2);at(ke,17,()=>Object.entries(e.schema.properties??{}),([$e,Ce])=>$e,($e,Ce)=>{var Be=ce(()=>Si(c(Ce),2));let Le=()=>c(Be)[0],Ie=()=>c(Be)[1];{let pt=ce(()=>{var ot;return((ot=e.schema.required)==null?void 0:ot.includes(Le()))??!1});An($e,{get name(){return Le()},get schema(){return Ie()},get required(){return c(pt)},get value(){return c(s)[Le()]},onchange:ot=>v(Le(),ot)})}}),g(U,Ne)};I(D,U=>{c(f)||U(G)})}L(()=>Z(O,e.name)),ne("click",q,()=>A(f,!c(f))),g(C,z)},Y=C=>{var z=rc(),q=h(z),ee=y(h(q),2),N=h(ee);$u(N,{size:10});var $=y(q,2),j=h($);at(j,17,()=>c(o),nr,(Q,D,G)=>{var U=ec(),Ne=h(U);Ne.textContent=`[${G}]`;var Ze=y(Ne,2),Oe=h(Ze);{var ke=Le=>{{let Ie=ce(()=>`${e.name}[${G}]`);An(Le,{get name(){return c(Ie)},get schema(){return e.schema.items},get value(){return c(D)},onchange:pt=>_(G,pt)})}},$e=Le=>{var Ie=Xu();L(()=>{ve(Ie,1,ct(Lt)),Kt(Ie,c(D)??"")}),ne("input",Ie,pt=>_(G,pt.target.value)),g(Le,Ie)};I(Oe,Le=>{var Ie;((Ie=e.schema.items)==null?void 0:Ie.type)==="object"?Le(ke):Le($e,!1)})}var Ce=y(Ze,2),Be=h(Ce);Eu(Be,{size:14}),ne("click",Ce,()=>m(G)),g(Q,U)});var O=y(j,2);{var E=Q=>{var D=tc();g(Q,D)};I(O,Q=>{c(o).length===0&&Q(E)})}ne("click",ee,w),g(C,z)},_e=C=>{var z=ac(),q=h(z),ee=h(q),N=y(ee,2);at(N,21,()=>c(u),nr,(O,E,Q)=>{var D=nc(),G=h(D);D.value=D.__value=Q,L(()=>{pi(D,Q===c(l)),Z(G,c(E).title??c(E).type??`Option ${Q+1}`)}),g(O,D)});var $=y(q,2);{var j=O=>{var E=ic(),Q=h(E);{let D=ce(()=>`${e.name}_variant`);An(Q,{get name(){return c(D)},get schema(){return c(u)[c(l)]},get value(){return n()},get onchange(){return e.onchange}})}g(O,E)};I($,O=>{c(u)[c(l)]&&O(j)})}L(()=>{Se(ee,"for",`${e.name}_variant_select`),Se(N,"id",`${e.name}_variant_select`),ve(N,1,ct(Lt))}),ne("change",N,O=>{A(l,O.target.selectedIndex,!0),e.onchange(mi(c(u)[c(l)]))}),g(C,z)},Te=C=>{var z=sc();L(q=>{Se(z,"id",e.name),Kt(z,q)},[()=>typeof n()=="string"?n():JSON.stringify(n()??"",null,2)]),ne("input",z,q=>{const ee=q.target.value;try{e.onchange(JSON.parse(ee))}catch{e.onchange(ee)}}),g(C,z)};I(k,C=>{c(i)==="enum"?C(T):c(i)==="boolean"?C(F,1):c(i)==="number"||c(i)==="integer"?C(V,2):c(i)==="string"?C(M,3):c(i)==="object"?C(we,4):c(i)==="array"?C(Y,5):c(i)==="oneOf"||c(i)==="anyOf"?C(_e,6):C(Te,!1)})}g(t,x),St()}Jt(["change","input","click"]);var lc=S('<div class="flex flex-col items-center justify-center rounded-lg border border-dashed py-10 text-center text-muted-foreground bg-muted/30"><!> <p class="text-sm italic">This tool takes no parameters.</p></div>'),uc=S('<div class="space-y-6"><!> <!></div>');function cc(t,e){kt(e,!0);let r=Ve(e,"values",31,()=>it({})),n=ce(()=>e.schema.properties??{}),i=ce(()=>new Set(e.schema.required??[])),a=ce(()=>Object.keys(c(n)));var s=uc(),o=h(s);at(o,16,()=>c(a),f=>f,(f,p)=>{const d=ce(()=>c(n)[p]),w=ce(()=>c(i).has(p));An(f,{get name(){return p},get schema(){return c(d)},get required(){return c(w)},get value(){return r()[p]},onchange:m=>{r({...r(),[p]:m})}})});var u=y(o,2);{var l=f=>{var p=lc(),d=h(p);vu(d,{class:"mb-2 h-8 w-8 opacity-20"}),g(f,p)};I(u,f=>{c(a).length===0&&f(l)})}g(t,s),St()}function ji(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $r=ji();function js(t){$r=t}var Qr={exec:()=>null};function xe(t,e=""){let r=typeof t=="string"?t:t.source;const n={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(Je.caret,"$1"),r=r.replace(i,s),n},getRegex:()=>new RegExp(r,e)};return n}var Je={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},fc=/^(?:[ \t]*(?:\n|$))+/,dc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,hc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Di=/(?:[*+-]|\d{1,9}[.)])/,Ds=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,qs=xe(Ds).replace(/bull/g,Di).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),pc=xe(Ds).replace(/bull/g,Di).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gc=/^[^\n]+/,Bi=/(?!\s*\])(?:\\.|[^\[\]\\])+/,mc=xe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Bi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_c=xe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Di).getRegex(),Fn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Fi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bc=xe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Fi).replace("tag",Fn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bs=xe(qi).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),xc=xe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bs).getRegex(),Vi={blockquote:xc,code:dc,def:mc,fences:hc,heading:vc,hr:hn,html:bc,lheading:qs,list:_c,newline:fc,paragraph:Bs,table:Qr,text:gc},pa=xe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),yc={...Vi,lheading:pc,table:pa,paragraph:xe(qi).replace("hr",hn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex()},wc={...Vi,html:xe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Fi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xe(qi).replace("hr",hn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",qs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},kc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Sc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Fs=/^( {2,}|\\)\n(?!\s*$)/,$c=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Vn=/[\p{P}\p{S}]/u,Hi=/[\s\p{P}\p{S}]/u,Vs=/[^\s\p{P}\p{S}]/u,Ac=xe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Hi).getRegex(),Hs=/(?!~)[\p{P}\p{S}]/u,Tc=/(?!~)[\s\p{P}\p{S}]/u,Ec=/(?:[^\s\p{P}\p{S}]|~)/u,zc=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Gs=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Nc=xe(Gs,"u").replace(/punct/g,Vn).getRegex(),Rc=xe(Gs,"u").replace(/punct/g,Hs).getRegex(),Ws="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Pc=xe(Ws,"gu").replace(/notPunctSpace/g,Vs).replace(/punctSpace/g,Hi).replace(/punct/g,Vn).getRegex(),Cc=xe(Ws,"gu").replace(/notPunctSpace/g,Ec).replace(/punctSpace/g,Tc).replace(/punct/g,Hs).getRegex(),Mc=xe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vs).replace(/punctSpace/g,Hi).replace(/punct/g,Vn).getRegex(),Oc=xe(/\\(punct)/,"gu").replace(/punct/g,Vn).getRegex(),Lc=xe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ic=xe(Fi).replace("(?:-->|$)","-->").getRegex(),jc=xe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ic).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Pn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Dc=xe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Pn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zs=xe(/^!?\[(label)\]\[(ref)\]/).replace("label",Pn).replace("ref",Bi).getRegex(),Js=xe(/^!?\[(ref)\](?:\[\])?/).replace("ref",Bi).getRegex(),qc=xe("reflink|nolink(?!\\()","g").replace("reflink",Zs).replace("nolink",Js).getRegex(),Gi={_backpedal:Qr,anyPunctuation:Oc,autolink:Lc,blockSkip:zc,br:Fs,code:Sc,del:Qr,emStrongLDelim:Nc,emStrongRDelimAst:Pc,emStrongRDelimUnd:Mc,escape:kc,link:Dc,nolink:Js,punctuation:Ac,reflink:Zs,reflinkSearch:qc,tag:jc,text:$c,url:Qr},Bc={...Gi,link:xe(/^!?\[(label)\]\((.*?)\)/).replace("label",Pn).getRegex(),reflink:xe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pn).getRegex()},_i={...Gi,emStrongRDelimAst:Cc,emStrongLDelim:Rc,url:xe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Fc={..._i,br:xe(Fs).replace("{2,}","*").getRegex(),text:xe(_i.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bn={normal:Vi,gfm:yc,pedantic:wc},Gr={normal:Gi,gfm:_i,breaks:Fc,pedantic:Bc},Vc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ga=t=>Vc[t];function Tt(t,e){if(e){if(Je.escapeTest.test(t))return t.replace(Je.escapeReplace,ga)}else if(Je.escapeTestNoEncode.test(t))return t.replace(Je.escapeReplaceNoEncode,ga);return t}function ma(t){try{t=encodeURI(t).replace(Je.percentDecode,"%")}catch{return null}return t}function _a(t,e){var a;const r=t.replace(Je.findPipe,(s,o,u)=>{let l=!1,f=o;for(;--f>=0&&u[f]==="\\";)l=!l;return l?"|":" |"}),n=r.split(Je.splitPipe);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!((a=n.at(-1))!=null&&a.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Je.slashPipe,"|");return n}function Wr(t,e,r){const n=t.length;if(n===0)return"";let i=0;for(;i<n&&t.charAt(n-i-1)===e;)i++;return t.slice(0,n-i)}function Hc(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let n=0;n<t.length;n++)if(t[n]==="\\")n++;else if(t[n]===e[0])r++;else if(t[n]===e[1]&&(r--,r<0))return n;return r>0?-2:-1}function ba(t,e,r,n,i){const a=e.href,s=e.title||null,o=t[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;const u={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:a,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,u}function Gc(t,e,r){const n=t.match(r.other.indentCodeCompensation);if(n===null)return e;const i=n[1];return e.split(`
`).map(a=>{const s=a.match(r.other.beginningSpace);if(s===null)return a;const[o]=s;return o.length>=i.length?a.slice(i.length):a}).join(`
`)}var Cn=class{constructor(t){fe(this,"options");fe(this,"rules");fe(this,"lexer");this.options=t||$r}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Wr(r,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const r=e[0],n=Gc(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){const n=Wr(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Wr(e[0],`
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
`,t=t.substring(d.length+1),u=!0),!u){const x=this.rules.other.nextBulletRegex(m),R=this.rules.other.hrRegex(m),J=this.rules.other.fencesBeginRegex(m),k=this.rules.other.headingBeginRegex(m),T=this.rules.other.htmlBeginRegex(m);for(;t;){const F=t.split(`
`,1)[0];let V;if(d=F,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),V=d):V=d.replace(this.rules.other.tabCharGlobal,"    "),J.test(d)||k.test(d)||T.test(d)||x.test(d)||R.test(d))break;if(V.search(this.rules.other.nonSpaceChar)>=m||!d.trim())f+=`
`+V.slice(m);else{if(w||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||J.test(p)||k.test(p)||R.test(p))break;f+=`
`+d}!w&&!d.trim()&&(w=!0),l+=F+`
`,t=t.substring(F.length+1),p=V.slice(m)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(s=!0));let _=null,v;this.options.gfm&&(_=this.rules.other.listIsTask.exec(f),_&&(v=_[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:l,task:!!_,checked:v,loose:!1,text:f,tokens:[]}),i.raw+=l}const o=i.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const l=i.items[u].tokens.filter(p=>p.type==="space"),f=l.length>0&&l.some(p=>this.rules.other.anyLine.test(p.raw));i.loose=f}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:n,title:i}}}table(t){var s;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const r=_a(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(s=e[3])!=null&&s.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===n.length){for(const o of n)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<r.length;o++)a.header.push({text:r[o],tokens:this.lexer.inline(r[o]),header:!0,align:a.align[o]});for(const o of i)a.rows.push(_a(o,a.header.length).map((u,l)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[l]})));return a}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;const a=Wr(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=Hc(e[2],"()");if(a===-2)return;if(a>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(n);a&&(n=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),ba(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){const n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return ba(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let n=this.rules.inline.emStrongLDelim.exec(t);if(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))return;if(!(n[1]||n[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...n[0]].length-1;let s,o,u=a,l=0;const f=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+a);(n=f.exec(e))!=null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(o=[...s].length,n[3]||n[4]){u+=o;continue}else if((n[5]||n[6])&&a%3&&!((a+o)%3)){l+=o;continue}if(u-=o,u>0)continue;o=Math.min(o,o+u+l);const p=[...n[0]][0].length,d=t.slice(0,a+n.index+p+o);if(Math.min(a,o)%2){const m=d.slice(1,-1);return{type:"em",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}const w=d.slice(2,-2);return{type:"strong",raw:d,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let r,n;return e[2]==="@"?(r=e[1],n="mailto:"+r):(r=e[1],n=r),{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let a;do a=e[0],e[0]=((r=this.rules.inline._backpedal.exec(e[0]))==null?void 0:r[0])??"";while(a!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},Ft=class bi{constructor(e){fe(this,"tokens");fe(this,"options");fe(this,"state");fe(this,"tokenizer");fe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$r,this.options.tokenizer=this.options.tokenizer||new Cn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={other:Je,block:bn.normal,inline:Gr.normal};this.options.pedantic?(r.block=bn.pedantic,r.inline=Gr.pedantic):this.options.gfm&&(r.block=bn.gfm,this.options.breaks?r.inline=Gr.breaks:r.inline=Gr.gfm),this.tokenizer.rules=r}static get rules(){return{block:bn,inline:Gr}}static lex(e,r){return new bi(r).lex(e)}static lexInline(e,r){return new bi(r).inlineTokens(e)}lex(e){e=e.replace(Je.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){const n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],n=!1){var i,a,s;for(this.options.pedantic&&(e=e.replace(Je.tabCharGlobal,"    ").replace(Je.spaceLine,""));e;){let o;if((a=(i=this.options.extensions)==null?void 0:i.block)!=null&&a.some(l=>(o=l.call({lexer:this},e,r))?(e=e.substring(o.raw.length),r.push(o),!0):!1))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);const l=r.at(-1);o.raw.length===1&&l!==void 0?l.raw+=`
`:r.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.at(-1).src=l.text):r.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),r.push(o);continue}let u=e;if((s=this.options.extensions)!=null&&s.startBlock){let l=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(d=>{p=d.call({lexer:this},f),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(u=e.substring(0,l+1))}if(this.state.top&&(o=this.tokenizer.paragraph(u))){const l=r.at(-1);n&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(o),n=u.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);const l=r.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=`
`+o.raw,l.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(o);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){var o,u,l;let n=e,i=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)f.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let a=!1,s="";for(;e;){a||(s=""),a=!1;let f;if((u=(o=this.options.extensions)==null?void 0:o.inline)!=null&&u.some(d=>(f=d.call({lexer:this},e,r))?(e=e.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const d=r.at(-1);f.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=f.raw,d.text+=f.text):r.push(f);continue}if(f=this.tokenizer.emStrong(e,n,s)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),r.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),r.push(f);continue}let p=e;if((l=this.options.extensions)!=null&&l.startInline){let d=1/0;const w=e.slice(1);let m;this.options.extensions.startInline.forEach(_=>{m=_.call({lexer:this},w),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(p=e.substring(0,d+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(s=f.raw.slice(-1)),a=!0;const d=r.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=f.raw,d.text+=f.text):r.push(f);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},Mn=class{constructor(t){fe(this,"options");fe(this,"parser");this.options=t||$r}space(t){return""}code({text:t,lang:e,escaped:r}){var a;const n=(a=(e||"").match(Je.notSpaceStart))==null?void 0:a[0],i=t.replace(Je.endingNewline,"")+`
`;return n?'<pre><code class="language-'+Tt(n)+'">'+(r?i:Tt(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Tt(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,r=t.start;let n="";for(let s=0;s<t.items.length;s++){const o=t.items[s];n+=this.listitem(o)}const i=e?"ol":"ul",a=e&&r!==1?' start="'+r+'"':"";return"<"+i+a+`>
`+n+"</"+i+`>
`}listitem(t){var r;let e="";if(t.task){const n=this.checkbox({checked:!!t.checked});t.loose?((r=t.tokens[0])==null?void 0:r.type)==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+Tt(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);e+=this.tablerow({text:r});let n="";for(let i=0;i<t.rows.length;i++){const a=t.rows[i];r="";for(let s=0;s<a.length;s++)r+=this.tablecell(a[s]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Tt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){const n=this.parser.parseInline(r),i=ma(t);if(i===null)return n;t=i;let a='<a href="'+t+'"';return e&&(a+=' title="'+Tt(e)+'"'),a+=">"+n+"</a>",a}image({href:t,title:e,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));const i=ma(t);if(i===null)return Tt(r);t=i;let a=`<img src="${t}" alt="${r}"`;return e&&(a+=` title="${Tt(e)}"`),a+=">",a}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Tt(t.text)}},Wi=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Vt=class xi{constructor(e){fe(this,"options");fe(this,"renderer");fe(this,"textRenderer");this.options=e||$r,this.options.renderer=this.options.renderer||new Mn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wi}static parse(e,r){return new xi(r).parse(e)}static parseInline(e,r){return new xi(r).parseInline(e)}parse(e,r=!0){var i,a;let n="";for(let s=0;s<e.length;s++){const o=e[s];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[o.type]){const l=o,f=this.options.extensions.renderers[l.type].call({parser:this},l);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){n+=f||"";continue}}const u=o;switch(u.type){case"space":{n+=this.renderer.space(u);continue}case"hr":{n+=this.renderer.hr(u);continue}case"heading":{n+=this.renderer.heading(u);continue}case"code":{n+=this.renderer.code(u);continue}case"table":{n+=this.renderer.table(u);continue}case"blockquote":{n+=this.renderer.blockquote(u);continue}case"list":{n+=this.renderer.list(u);continue}case"html":{n+=this.renderer.html(u);continue}case"paragraph":{n+=this.renderer.paragraph(u);continue}case"text":{let l=u,f=this.renderer.text(l);for(;s+1<e.length&&e[s+1].type==="text";)l=e[++s],f+=`
`+this.renderer.text(l);r?n+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):n+=f;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(e,r=this.renderer){var i,a;let n="";for(let s=0;s<e.length;s++){const o=e[s];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=l||"";continue}}const u=o;switch(u.type){case"escape":{n+=r.text(u);break}case"html":{n+=r.html(u);break}case"link":{n+=r.link(u);break}case"image":{n+=r.image(u);break}case"strong":{n+=r.strong(u);break}case"em":{n+=r.em(u);break}case"codespan":{n+=r.codespan(u);break}case"br":{n+=r.br(u);break}case"del":{n+=r.del(u);break}case"text":{n+=r.text(u);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}},Xn,Tn=(Xn=class{constructor(t){fe(this,"options");fe(this,"block");this.options=t||$r}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Ft.lex:Ft.lexInline}provideParser(){return this.block?Vt.parse:Vt.parseInline}},fe(Xn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xn),Wc=class{constructor(...t){fe(this,"defaults",ji());fe(this,"options",this.setOptions);fe(this,"parse",this.parseMarkdown(!0));fe(this,"parseInline",this.parseMarkdown(!1));fe(this,"Parser",Vt);fe(this,"Renderer",Mn);fe(this,"TextRenderer",Wi);fe(this,"Lexer",Ft);fe(this,"Tokenizer",Cn);fe(this,"Hooks",Tn);this.use(...t)}walkTokens(t,e){var n,i;let r=[];for(const a of t)switch(r=r.concat(e.call(this,a)),a.type){case"table":{const s=a;for(const o of s.header)r=r.concat(this.walkTokens(o.tokens,e));for(const o of s.rows)for(const u of o)r=r.concat(this.walkTokens(u.tokens,e));break}case"list":{const s=a;r=r.concat(this.walkTokens(s.items,e));break}default:{const s=a;(i=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&i[s.type]?this.defaults.extensions.childTokens[s.type].forEach(o=>{const u=s[o].flat(1/0);r=r.concat(this.walkTokens(u,e))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,e)))}}return r}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{const n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=e.renderers[i.name];a?e.renderers[i.name]=function(...s){let o=i.renderer.apply(this,s);return o===!1&&(o=a.apply(this,s)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[i.level];a?a.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),r.renderer){const i=this.defaults.renderer||new Mn(this.defaults);for(const a in r.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const s=a,o=r.renderer[s],u=i[s];i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f||""}}n.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Cn(this.defaults);for(const a in r.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const s=a,o=r.tokenizer[s],u=i[s];i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f}}n.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new Tn;for(const a in r.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const s=a,o=r.hooks[s],u=i[s];Tn.passThroughHooks.has(a)?i[s]=l=>{if(this.defaults.async)return Promise.resolve(o.call(i,l)).then(p=>u.call(i,p));const f=o.call(i,l);return u.call(i,f)}:i[s]=(...l)=>{let f=o.apply(i,l);return f===!1&&(f=u.apply(i,l)),f}}n.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,a=r.walkTokens;n.walkTokens=function(s){let o=[];return o.push(a.call(this,s)),i&&(o=o.concat(i.call(this,s))),o}}this.defaults={...this.defaults,...n}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Ft.lex(t,e??this.defaults)}parser(t,e){return Vt.parse(t,e??this.defaults)}parseMarkdown(t){return(r,n)=>{const i={...n},a={...this.defaults,...i},s=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=t);const o=a.hooks?a.hooks.provideLexer():t?Ft.lex:Ft.lexInline,u=a.hooks?a.hooks.provideParser():t?Vt.parse:Vt.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(l=>o(l,a)).then(l=>a.hooks?a.hooks.processAllTokens(l):l).then(l=>a.walkTokens?Promise.all(this.walkTokens(l,a.walkTokens)).then(()=>l):l).then(l=>u(l,a)).then(l=>a.hooks?a.hooks.postprocess(l):l).catch(s);try{a.hooks&&(r=a.hooks.preprocess(r));let l=o(r,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let f=u(l,a);return a.hooks&&(f=a.hooks.postprocess(f)),f}catch(l){return s(l)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const n="<p>An error occurred:</p><pre>"+Tt(r.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(r);throw r}}},kr=new Wc;function ye(t,e){return kr.parse(t,e)}ye.options=ye.setOptions=function(t){return kr.setOptions(t),ye.defaults=kr.defaults,js(ye.defaults),ye};ye.getDefaults=ji;ye.defaults=$r;ye.use=function(...t){return kr.use(...t),ye.defaults=kr.defaults,js(ye.defaults),ye};ye.walkTokens=function(t,e){return kr.walkTokens(t,e)};ye.parseInline=kr.parseInline;ye.Parser=Vt;ye.parser=Vt.parse;ye.Renderer=Mn;ye.TextRenderer=Wi;ye.Lexer=Ft;ye.lexer=Ft.lex;ye.Tokenizer=Cn;ye.Hooks=Tn;ye.parse=ye;ye.options;ye.setOptions;ye.use;ye.walkTokens;ye.parseInline;Vt.parse;Ft.lex;var Zc=S('<button class="mx-1 text-muted-foreground hover:text-foreground italic"> </button> <span class="text-muted-foreground"> </span>',1),Jc=S('<span class="text-purple-600 dark:text-purple-400"> </span> <span class="text-muted-foreground">:</span>',1),Uc=S("<span> </span>"),Kc=S('<span class="text-muted-foreground">,</span>'),Yc=S('<div class="whitespace-pre-wrap"><!> <!> <!></div>'),Qc=S('<div class="ml-2 border-l pl-3 my-0.5"></div> <span class="text-muted-foreground"> </span>',1),Xc=S('<div class="inline-block align-top font-mono text-xs leading-6"><button class="inline-flex h-4 w-4 items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground mr-0.5"><!></button> <span class="text-muted-foreground"> </span> <!></div>'),ef=S("<span> </span>");function Hn(t,e){kt(e,!0);let r=Ve(e,"depth",3,0),n=ie(it(or(()=>r()>2))),i=ce(()=>typeof e.data=="object"&&e.data!==null&&!Array.isArray(e.data)),a=ce(()=>Array.isArray(e.data)),s=ce(()=>c(i)?Object.entries(e.data):c(a)?e.data.map((_,v)=>[String(v),_]):[]),o=ce(()=>c(s).length),u=ce(()=>c(a)?["[","]"]:["{","}"]);function l(_){return _===null?"null":typeof _=="string"?`"${_}"`:String(_)}function f(_){if(_===null)return"text-muted-foreground italic";switch(typeof _){case"string":return"text-green-600 dark:text-green-400";case"number":return"text-blue-600 dark:text-blue-400";case"boolean":return"text-red-600 dark:text-red-400";default:return"text-foreground"}}var p=K(),d=B(p);{var w=_=>{var v=Xc(),x=h(v),R=h(x);{var J=Y=>{Rn(Y,{size:10})},k=Y=>{Nn(Y,{size:10})};I(R,Y=>{c(n)?Y(J):Y(k,!1)})}var T=y(x,2),F=h(T),V=y(T,2);{var M=Y=>{var _e=Zc(),Te=B(_e),C=h(Te),z=y(Te,2),q=h(z);L(()=>{Z(C,`${c(o)??""} item${c(o)!==1?"s":""}`),Z(q,c(u)[1])}),ne("click",Te,()=>A(n,!1)),g(Y,_e)},we=Y=>{var _e=Qc(),Te=B(_e);at(Te,23,()=>c(s),([q,ee])=>q,(q,ee,N)=>{var $=ce(()=>Si(c(ee),2));let j=()=>c($)[0],O=()=>c($)[1];var E=Yc(),Q=h(E);{var D=ke=>{var $e=Jc(),Ce=B($e),Be=h(Ce);L(()=>Z(Be,j())),g(ke,$e)};I(Q,ke=>{c(a)||ke(D)})}var G=y(Q,2);{var U=ke=>{{let $e=ce(()=>r()+1);Hn(ke,{get data(){return O()},get depth(){return c($e)}})}},Ne=ke=>{var $e=Uc(),Ce=h($e);L((Be,Le)=>{ve($e,1,Be),Z(Ce,Le)},[()=>ct(f(O())),()=>l(O())]),g(ke,$e)};I(G,ke=>{typeof O()=="object"&&O()!==null?ke(U):ke(Ne,!1)})}var Ze=y(G,2);{var Oe=ke=>{var $e=Kc();g(ke,$e)};I(Ze,ke=>{c(N)<c(s).length-1&&ke(Oe)})}g(q,E)});var C=y(Te,2),z=h(C);L(()=>Z(z,c(u)[1])),g(Y,_e)};I(V,Y=>{c(n)?Y(M):Y(we,!1)})}L(()=>Z(F,c(u)[0])),ne("click",x,()=>A(n,!c(n))),g(_,v)},m=_=>{var v=ef(),x=h(v);L((R,J)=>{ve(v,1,R),Z(x,J)},[()=>`font-mono text-xs ${f(e.data)}`,()=>l(e.data)]),g(_,v)};I(d,_=>{c(i)||c(a)?_(w):_(m,!1)})}g(t,p),St()}Jt(["click"]);var tf=S('<button class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"><!></button>'),rf=S('<div class="overflow-x-auto"><!></div>'),nf=S('<div class="prose-result svelte-60mi68"><!></div>'),af=S("<pre> </pre>"),sf=S('<div><div class="absolute right-2 top-2 z-10 flex items-center gap-1"><!> <button class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm" title="Copy content"><!></button></div> <!></div>'),of=S('<div><img alt="Tool result" class="max-w-full rounded-md shadow-sm ring-1 ring-border"/></div>'),lf=S('<div class="p-4"><pre class="overflow-x-auto whitespace-pre-wrap break-words text-xs font-mono text-muted-foreground"> </pre></div>'),uf=S('<div class="flex items-center justify-center p-8 text-sm text-muted-foreground italic">No output returned</div>'),cf=S("<div><!> <!></div>");function Us(t,e){kt(e,!0);let r=Ve(e,"isError",3,!1),n=ie(null),i=it({});function a(_){try{const v=JSON.parse(_);if(typeof v=="object"&&v!==null)return{parsed:v,isJson:!0}}catch{}return{parsed:null,isJson:!1}}function s(_){const v=_.trimStart();if(v.startsWith("{")||v.startsWith("["))return!1;if(/^#{1,6}\s/m.test(_)||/^\|.+\|.+\|/m.test(_)||/^```/m.test(_))return!0;let R=0;return/^\*\s|^-\s{1,2}\S/m.test(_)&&R++,/^\d+\.\s/m.test(_)&&R++,/\*\*[^*]+\*\*/.test(_)&&R++,/`[^`]+`/.test(_)&&R++,/\[[^\]]+\]\([^)]+\)/.test(_)&&R++,/^>\s/m.test(_)&&R++,R>=2}function o(_){const v=/^(h[1-6]|p|br|strong|em|code|pre|ul|ol|li|a|blockquote|table|thead|tbody|tr|th|td|hr|img|span|div|del|sup|sub|input)$/i,x=/^(href|src|alt|title|class|id|type|checked|disabled)$/i,R=document.createElement("div");R.innerHTML=_;function J(k){for(const T of Array.from(k.children)){if(!v.test(T.tagName)){T.replaceWith(...Array.from(T.childNodes));continue}for(const F of Array.from(T.attributes))x.test(F.name)||T.removeAttribute(F.name);T.hasAttribute("href")&&((T.getAttribute("href")??"").startsWith("javascript:")&&T.setAttribute("href","#"),T.setAttribute("target","_blank"),T.setAttribute("rel","noopener noreferrer")),J(T)}}return J(R),R.innerHTML}function u(_){const v=ye.parse(_,{async:!1,gfm:!0});return o(v)}async function l(_,v){await $n(_),A(n,v,!0),setTimeout(()=>{c(n)===v&&A(n,null)},2e3)}function f(_){const v=i[_]??"rich";i[_]=v==="rich"?"raw":"rich"}var p=cf(),d=h(p);at(d,17,()=>e.content,nr,(_,v,x)=>{var R=K(),J=B(R);{var k=V=>{const M=ce(()=>{const{parsed:D,isJson:G}=a(c(v).text);return{parsed:D,isJson:G}}),we=ce(()=>!c(M).isJson&&s(c(v).text)),Y=ce(()=>i[x]??"rich");var _e=sf(),Te=h(_e),C=h(Te);{var z=D=>{var G=tf(),U=h(G);{var Ne=Oe=>{Ii(Oe,{size:14})},Ze=Oe=>{pu(Oe,{size:14})};I(U,Oe=>{c(Y)==="rich"?Oe(Ne):Oe(Ze,!1)})}L(()=>Se(G,"title",c(Y)==="rich"?"View raw":"View rendered")),ne("click",G,()=>f(x)),g(D,G)};I(C,D=>{c(we)&&D(z)})}var q=y(C,2),ee=h(q);{var N=D=>{su(D,{size:14,class:"text-green-500"})},$=D=>{Ns(D,{size:14})};I(ee,D=>{c(n)===x?D(N):D($,!1)})}var j=y(Te,2);{var O=D=>{var G=rf(),U=h(G);Hn(U,{get data(){return c(M).parsed}}),g(D,G)},E=D=>{var G=nf(),U=h(G);Pl(U,()=>u(c(v).text)),g(D,G)},Q=D=>{var G=af(),U=h(G);L(()=>{ve(G,1,`overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-muted/50 p-3 text-xs font-mono leading-relaxed ${r()?"text-destructive":"text-foreground"}`,"svelte-60mi68"),Z(U,c(v).text)}),g(D,G)};I(j,D=>{c(M).isJson?D(O):c(we)&&c(Y)==="rich"?D(E,1):D(Q,!1)})}L(()=>ve(_e,1,`relative p-4 ${x<e.content.length-1?"border-b":""}`,"svelte-60mi68")),ne("click",q,()=>l(c(v).text??"",x)),g(V,_e)},T=V=>{var M=of(),we=h(M);L(()=>{ve(M,1,`flex justify-center bg-muted/20 p-4 ${x<e.content.length-1?"border-b":""}`,"svelte-60mi68"),Se(we,"src",`data:${c(v).mimeType??"image/png"};base64,${c(v).data}`)}),g(V,M)},F=V=>{var M=lf(),we=h(M),Y=h(we);L(_e=>Z(Y,_e),[()=>JSON.stringify(c(v),null,2)]),g(V,M)};I(J,V=>{c(v).type==="text"&&c(v).text?V(k):c(v).type==="image"&&c(v).data?V(T,1):V(F,!1)})}g(_,R)});var w=y(d,2);{var m=_=>{var v=uf();g(_,v)};I(w,_=>{e.content.length===0&&_(m)})}L(()=>ve(p,1,`overflow-hidden rounded-lg border ${r()?"border-destructive/50 bg-destructive/5":"bg-card text-card-foreground"}`,"svelte-60mi68")),g(t,p),St()}Jt(["click"]);var ff=S('<div class="flex flex-wrap gap-1.5 pt-0.5"></div>'),df=S('<p class="text-sm leading-relaxed text-muted-foreground"> </p>'),hf=S("<li> </li>"),vf=S('<div class="rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-900/20 dark:text-yellow-200"><div class="flex items-start gap-2"><!> <div class="space-y-0.5"><ul class="list-disc pl-4 space-y-0.5 text-xs"></ul></div></div></div>'),pf=S('<p class="text-xs text-destructive"> </p>'),gf=S('<div class="space-y-2"><textarea class="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"></textarea> <!></div>'),mf=S('<div class="overflow-x-auto rounded-md bg-muted/30 p-3"><!></div>'),_f=S('<div class="flex items-center gap-2"><span class="text-xs font-medium text-destructive flex items-center gap-1"><!> Proceed?</span> <button>Yes</button> <button>Cancel</button></div>'),bf=S('<div class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"></div> Running...',1),xf=S('<!> Execute <kbd class="ml-1 rounded border border-current/20 bg-primary-foreground/10 px-1 py-0.5 text-[10px] font-mono leading-none"> </kbd>',1),yf=S("<button><!></button>"),wf=S('<div class="flex items-center justify-between gap-3 border-t bg-muted/20 px-4 py-3"><button><!> Clear</button> <!></div>'),kf=S('<div class="flex items-center gap-1 rounded-full border bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground"><!> </div>'),Sf=S('<div class="animate-in space-y-3"><div class="flex items-center justify-between"><h3 class="text-sm font-semibold">Result</h3> <!></div> <!></div>'),$f=S('<div class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-muted-foreground"><div class="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"></div> <p class="mt-3 text-xs"> </p></div>'),Af=S('<div class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground"><!> <p class="text-xs">Results will appear here after execution</p> <p class="mt-1 text-[10px] opacity-60"> </p></div>'),Tf=S('<div class="space-y-3 border-b pb-5"><div class="flex items-start justify-between gap-4"><div class="space-y-1"><h2 class="text-2xl font-bold tracking-tight"> </h2> <!></div> <div class="hidden sm:block"><div class="rounded-full bg-muted p-2"><!></div></div></div> <!> <!></div> <div class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2"><div class="flex flex-col"><div class="flex flex-1 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm"><div class="flex items-center gap-1 border-b px-3 py-1.5"><button><!> Form</button> <button><!> JSON</button> <button><!> Schema</button></div> <div class="flex-1 overflow-y-auto p-4"><!></div> <!></div></div> <div class="flex flex-col"><!></div></div>',1);function Ef(t,e){kt(e,!0);let r=ie(it({})),n=ie(null),i=ie(!1),a=ie(0),s=ie(!1),o=ie("form"),u=ie(""),l=ie("");rr(()=>{const H=e.tool.name,te=localStorage.getItem(`mcpplay-form-${H}`);if(te)try{A(r,JSON.parse(te),!0)}catch{A(r,Sn(e.tool.inputSchema),!0)}else A(r,Sn(e.tool.inputSchema),!0);A(n,null),A(i,!1),A(s,!1),A(o,"form"),A(l,"")}),rr(()=>{c(o)==="json"&&A(u,JSON.stringify(c(r),null,2),!0)}),rr(()=>{e.tool&&Object.keys(c(r)).length>0&&localStorage.setItem(`mcpplay-form-${e.tool.name}`,JSON.stringify(c(r)))});let f=ce(()=>Is(e.tool.inputSchema));function p(H){A(u,H,!0);try{A(r,JSON.parse(H),!0),A(l,"")}catch(te){A(l,te.message,!0)}}function d(){if(e.tool.requiresConfirmation&&!c(s)){A(s,!0);return}A(s,!1),A(i,!0),A(n,null);const H=`${e.tool.name}-${Date.now()}`,te=Ts(be=>{be.type==="tool_result"&&be.id===H?(A(n,{content:be.content,isError:be.is_error},!0),A(a,be.latency_ms,!0),A(i,!1),te()):be.type==="error"&&(A(n,{content:[{type:"text",text:be.message}],isError:!0},!0),A(i,!1),te())}),me={};for(const[be,P]of Object.entries(c(r)))P!==void 0&&P!==""&&(me[be]=P);Ar({type:"call_tool",id:H,tool_name:e.tool.name,arguments:me})}function w(){A(r,Sn(e.tool.inputSchema),!0),A(n,null),A(u,"{}"),A(l,""),localStorage.removeItem(`mcpplay-form-${e.tool.name}`)}function m(H){(H.metaKey||H.ctrlKey)&&H.key==="Enter"&&(H.preventDefault(),c(i)||d())}$s(()=>(document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)));let _=ce(()=>typeof navigator<"u"&&navigator.platform.includes("Mac"));var v=Tf(),x=B(v),R=h(x),J=h(R),k=h(J),T=h(k),F=y(k,2);{var V=H=>{var te=ff();at(te,21,()=>e.tool.capabilities,nr,(me,be)=>{Os(me,{get capability(){return c(be)}})}),g(H,te)};I(F,H=>{e.tool.capabilities.length>0&&H(V)})}var M=y(J,2),we=h(M),Y=h(we);Ms(Y,{size:20,class:"text-muted-foreground"});var _e=y(R,2);{var Te=H=>{var te=df(),me=h(te);L(()=>Z(me,e.tool.description)),g(H,te)};I(_e,H=>{e.tool.description&&H(Te)})}var C=y(_e,2);{var z=H=>{var te=vf(),me=h(te),be=h(me);va(be,{size:14,class:"mt-0.5 shrink-0"});var P=y(be,2),ge=h(P);at(ge,21,()=>c(f),nr,(Ee,ze)=>{var Me=hf(),je=h(Me);L(()=>Z(je,c(ze))),g(Ee,Me)}),g(H,te)};I(C,H=>{c(f).length>0&&H(z)})}var q=y(x,2),ee=h(q),N=h(ee),$=h(N),j=h($),O=h(j);du(O,{size:12});var E=y(j,2),Q=h(E);au(Q,{size:12});var D=y(E,2),G=h(D);Ii(G,{size:12});var U=y($,2),Ne=h(U);{var Ze=H=>{cc(H,{get schema(){return e.tool.inputSchema},get values(){return c(r)},set values(te){A(r,te,!0)}})},Oe=H=>{var te=gf(),me=h(te);Se(me,"spellcheck",!1);var be=y(me,2);{var P=ge=>{var Ee=pf(),ze=h(Ee);L(()=>Z(ze,c(l))),g(ge,Ee)};I(be,ge=>{c(l)&&ge(P)})}L(()=>Kt(me,c(u))),ne("input",me,ge=>p(ge.target.value)),g(H,te)},ke=H=>{var te=mf(),me=h(te);Hn(me,{get data(){return e.tool.inputSchema}}),g(H,te)};I(Ne,H=>{c(o)==="form"?H(Ze):c(o)==="json"?H(Oe,1):H(ke,!1)})}var $e=y(U,2);{var Ce=H=>{var te=wf(),me=h(te),be=h(me);Cs(be,{size:14});var P=y(me,2);{var ge=ze=>{var Me=_f(),je=h(Me),Qe=h(je);va(Qe,{size:14});var W=y(je,2),X=y(W,2);L(()=>{ve(W,1,`${_n.destructive??""} h-8 px-3 text-xs`),ve(X,1,`${_n.outline??""} h-8 px-3 text-xs`)}),ne("click",W,d),ne("click",X,()=>A(s,!1)),g(ze,Me)},Ee=ze=>{var Me=yf(),je=h(Me);{var Qe=X=>{var Ae=bf();g(X,Ae)},W=X=>{var Ae=xf(),Ot=B(Ae);gi(Ot,{size:14});var lr=y(Ot,2),Gn=h(lr);L(()=>Z(Gn,c(_)?"⌘⏎":"Ctrl⏎")),g(X,Ae)};I(je,X=>{c(i)?X(Qe):X(W,!1)})}L(()=>{ve(Me,1,`${_n.default??""} gap-2 h-8 px-4 text-xs`),Me.disabled=c(i)}),ne("click",Me,d),g(ze,Me)};I(P,ze=>{c(s)?ze(ge):ze(Ee,!1)})}L(()=>ve(me,1,`${_n.ghost??""} gap-1.5 text-muted-foreground text-xs h-8 px-3`)),ne("click",me,w),g(H,te)};I($e,H=>{c(o)!=="schema"&&H(Ce)})}var Be=y(ee,2),Le=h(Be);{var Ie=H=>{var te=Sf(),me=h(te),be=y(h(me),2);{var P=Ee=>{var ze=kf(),Me=h(ze);Es(Me,{size:11});var je=y(Me);L(()=>Z(je,` ${c(a)??""}ms`)),g(Ee,ze)};I(be,Ee=>{c(a)>0&&Ee(P)})}var ge=y(me,2);Us(ge,{get content(){return c(n).content},get isError(){return c(n).isError}}),g(H,te)},pt=H=>{var te=$f(),me=y(h(te),2),be=h(me);L(()=>Z(be,`Executing ${e.tool.name??""}...`)),g(H,te)},ot=H=>{var te=Af(),me=h(te);gi(me,{size:24,class:"mb-2 opacity-30"});var be=y(me,4),P=h(be);L(()=>Z(P,`Press ${c(_)?"⌘":"Ctrl"}+Enter to execute`)),g(H,te)};I(Le,H=>{c(n)?H(Ie):c(i)?H(pt,1):H(ot,!1)})}L(()=>{Z(T,e.tool.name),ve(j,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="form"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`),ve(E,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="json"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`),ve(D,1,`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${c(o)==="schema"?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`)}),ne("click",j,()=>A(o,"form")),ne("click",E,()=>A(o,"json")),ne("click",D,()=>A(o,"schema")),g(t,v),St()}Jt(["click","input"]);var zf=S('<div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-destructive">Error</h4> <div class="rounded-md border border-destructive/20 bg-destructive/10 p-3 font-mono text-xs text-destructive"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div></div>'),Nf=S('<div class="rounded-md border bg-muted/30 p-3"><!></div>'),Rf=S('<div class="mb-6"><button class="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"><!> <!> Expected Schema</button> <!></div>'),Pf=S('<div class="rounded-md border bg-muted/50 p-3 font-mono text-xs"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div>'),Cf=S("<!> <span>Copied!</span>",1),Mf=S("<!> <span>JSON-RPC</span>",1),Of=S("<!> <span>Copied!</span>",1),Lf=S("<!> <span>curl</span>",1),If=S("<!> <span>Copied!</span>",1),jf=S("<!> <span>Python</span>",1),Df=S('<div class="border-t bg-muted/20 p-4"><div class="mb-6 grid gap-6 md:grid-cols-2"><div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input Arguments</h4> <div class="rounded-md border bg-muted/50 p-3 font-mono text-xs"><pre class="overflow-x-auto whitespace-pre-wrap break-words"> </pre></div></div> <!></div> <!> <div class="space-y-2"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Result</h4> <!></div> <div class="mt-6 flex flex-wrap gap-2 border-t pt-4"><button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"><!> Replay</button> <div class="flex-1"></div> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button> <button class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"><!></button></div></div>'),qf=S('<div><button class="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-muted/50"><div class="flex h-5 w-5 items-center justify-center text-muted-foreground"><!></div> <div class="flex items-center justify-center"><!></div> <span class="flex-1 font-mono text-sm font-semibold text-foreground"> </span> <div class="flex items-center gap-3 text-xs text-muted-foreground"><div class="flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono"><!> </div> <span class="w-16 text-right font-mono tabular-nums opacity-70"> </span></div></button> <!></div>');function Bf(t,e){kt(e,!0);let r=Ve(e,"tools",19,()=>[]),n=ie(!1),i=ie(!1),a=ie(!1),s=ie(!1),o=ie(!1),u=ce(()=>{var $;return($=r().find(j=>j.name===e.entry.tool_name))==null?void 0:$.inputSchema}),l=ce(()=>{try{return new Date(e.entry.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return e.entry.timestamp}});async function f($){$.stopPropagation();const j=JSON.stringify({jsonrpc:"2.0",method:"tools/call",params:{name:e.entry.tool_name,arguments:e.entry.input_params},id:1},null,2);await $n(j),A(i,!0),setTimeout(()=>A(i,!1),2e3)}async function p($){$.stopPropagation();const j=JSON.stringify(e.entry.input_params,null,4),O=`result = await session.call_tool(
    "${e.entry.tool_name}",
    ${j},
)`;await $n(O),A(a,!0),setTimeout(()=>A(a,!1),2e3)}async function d($){$.stopPropagation();const O=`curl -X POST http://localhost:8321/mcp \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify({jsonrpc:"2.0",method:"tools/call",params:{name:e.entry.tool_name,arguments:e.entry.input_params},id:1})}'`;await $n(O),A(s,!0),setTimeout(()=>A(s,!1),2e3)}function w($){$.stopPropagation(),e.onReplay(e.entry)}var m=qf(),_=h(m),v=h(_),x=h(v);{var R=$=>{Nn($,{size:16})},J=$=>{Rn($,{size:16})};I(x,$=>{c(n)?$(R):$(J,!1)})}var k=y(v,2),T=h(k);{var F=$=>{uu($,{size:18,class:"text-destructive"})},V=$=>{Jr($,{size:18,class:"text-green-500"})};I(T,$=>{e.entry.is_error?$(F):$(V,!1)})}var M=y(k,2),we=h(M),Y=y(M,2),_e=h(Y),Te=h(_e);Es(Te,{size:12});var C=y(Te),z=y(_e,2),q=h(z),ee=y(_,2);{var N=$=>{var j=Df(),O=h(j),E=h(O),Q=y(h(E),2),D=h(Q),G=h(D),U=y(E,2);{var Ne=W=>{var X=zf(),Ae=y(h(X),2),Ot=h(Ae),lr=h(Ot);L(()=>Z(lr,e.entry.error_message)),g(W,X)};I(U,W=>{e.entry.error_message&&W(Ne)})}var Ze=y(O,2);{var Oe=W=>{var X=Rf(),Ae=h(X),Ot=h(Ae);{var lr=At=>{Nn(At,{size:12})},Gn=At=>{Rn(At,{size:12})};I(Ot,At=>{c(o)?At(lr):At(Gn,!1)})}var Ks=y(Ot,2);hu(Ks,{size:12});var Ys=y(Ae,2);{var Qs=At=>{var Ji=Nf(),Xs=h(Ji);Hn(Xs,{get data(){return c(u)}}),g(At,Ji)};I(Ys,At=>{c(o)&&At(Qs)})}ne("click",Ae,()=>A(o,!c(o))),g(W,X)};I(Ze,W=>{c(u)&&W(Oe)})}var ke=y(Ze,2),$e=y(h(ke),2);{var Ce=W=>{Us(W,{get content(){return e.entry.output.content},get isError(){return e.entry.is_error}})},Be=W=>{var X=Pf(),Ae=h(X),Ot=h(Ae);L(lr=>Z(Ot,lr),[()=>JSON.stringify(e.entry.output,null,2)]),g(W,X)};I($e,W=>{var X;(X=e.entry.output)!=null&&X.content?W(Ce):W(Be,!1)})}var Le=y(ke,2),Ie=h(Le),pt=h(Ie);gi(pt,{size:14});var ot=y(Ie,4),H=h(ot);{var te=W=>{var X=Cf(),Ae=B(X);Jr(Ae,{size:14,class:"text-green-500"}),g(W,X)},me=W=>{var X=Mf(),Ae=B(X);Ii(Ae,{size:14}),g(W,X)};I(H,W=>{c(i)?W(te):W(me,!1)})}var be=y(ot,2),P=h(be);{var ge=W=>{var X=Of(),Ae=B(X);Jr(Ae,{size:14,class:"text-green-500"}),g(W,X)},Ee=W=>{var X=Lf(),Ae=B(X);Ps(Ae,{size:14}),g(W,X)};I(P,W=>{c(s)?W(ge):W(Ee,!1)})}var ze=y(be,2),Me=h(ze);{var je=W=>{var X=If(),Ae=B(X);Jr(Ae,{size:14,class:"text-green-500"}),g(W,X)},Qe=W=>{var X=jf(),Ae=B(X);Ns(Ae,{size:14}),g(W,X)};I(Me,W=>{c(a)?W(je):W(Qe,!1)})}L(W=>Z(G,W),[()=>JSON.stringify(e.entry.input_params,null,2)]),ne("click",Ie,w),ne("click",ot,f),ne("click",be,d),ne("click",ze,p),g($,j)};I(ee,$=>{c(n)&&$(N)})}L(()=>{ve(m,1,`group overflow-hidden rounded-lg border transition-all ${e.entry.is_error?"border-red-200 bg-red-50/30 dark:border-red-900/50 dark:bg-red-950/10":"border-border bg-card"}`),Z(we,e.entry.tool_name),Z(C,` ${e.entry.latency_ms??""}ms`),Z(q,c(l))}),ne("click",_,()=>A(n,!c(n))),g(t,m),St()}Jt(["click"]);var Ff=S('<button class="inline-flex h-9 items-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-destructive/10 hover:text-destructive" title="Clear all timeline entries"><!> Clear</button>'),Vf=S('<button class="w-full rounded-md border border-dashed py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"> </button>'),Hf=S("<div><!></div>"),Gf=S('<div class="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center text-muted-foreground"><!> <h3 class="text-lg font-semibold text-foreground">No executions yet</h3> <p class="text-sm">Run a tool from the console to see it appear here.</p></div>'),Wf=S('<div class="flex flex-col items-center justify-center py-12 text-center text-muted-foreground"><p class="text-sm">No matching entries found.</p> <button class="mt-2 text-xs text-primary hover:underline">Clear filters</button></div>'),Zf=S('<div class="space-y-4"><div class="flex items-center gap-3 rounded-lg border bg-card p-2 shadow-sm"><div class="relative flex-1"><!> <input type="text" placeholder="Filter by tool name..."/></div> <div class="relative w-[180px]"><!> <select><option>All Status</option><option>Success</option><option>Errors</option></select></div> <div class="px-2 text-xs font-medium text-muted-foreground tabular-nums"><!></div> <!></div> <!> <div class="space-y-3"><!> <!></div></div>');function Jf(t,e){kt(e,!0);let r=Ve(e,"tools",19,()=>[]),n=Ve(e,"totalCount",3,0),i=ie(""),a=ie(""),s=ie(null);rr(()=>{if(e.entries.length>0){const N=e.entries[0].id;(c(s)!==null&&N!==c(s)||c(s)===null)&&A(s,N,!0)}});let o=ce(()=>e.entries.filter(N=>!(c(i)&&!N.tool_name.toLowerCase().includes(c(i).toLowerCase())||c(a)==="error"&&!N.is_error||c(a)==="success"&&N.is_error))),u=ce(()=>n()>e.entries.length);var l=Zf(),f=h(l),p=h(f),d=h(p);Rs(d,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var w=y(d,2),m=y(p,2),_=h(m);mu(_,{class:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"});var v=y(_,2),x=h(v);x.value=x.__value="";var R=y(x);R.value=R.__value="success";var J=y(R);J.value=J.__value="error";var k=y(m,2),T=h(k);{var F=N=>{var $=sa();L(()=>Z($,`${c(o).length??""} of ${n()??""}`)),g(N,$)},V=N=>{var $=sa();L(()=>Z($,c(o).length)),g(N,$)};I(T,N=>{c(u)?N(F):N(V,!1)})}var M=y(k,2);{var we=N=>{var $=Ff(),j=h($);Cs(j,{size:14}),ne("click",$,function(...O){var E;(E=e.onClear)==null||E.apply(this,O)}),g(N,$)};I(M,N=>{e.entries.length>0&&N(we)})}var Y=y(f,2);{var _e=N=>{var $=Vf(),j=h($);L(()=>Z(j,`Showing ${e.entries.length??""} of ${n()??""} entries — click to load all`)),ne("click",$,function(...O){var E;(E=e.onLoadAll)==null||E.apply(this,O)}),g(N,$)};I(Y,N=>{c(u)&&N(_e)})}var Te=y(Y,2),C=h(Te);at(C,17,()=>c(o),N=>N.id,(N,$)=>{var j=Hf(),O=h(j);Bf(O,{get entry(){return c($)},get tools(){return r()},get onReplay(){return e.onReplay}}),L(()=>ve(j,1,ct(c($).id===c(s)?"animate-in":""))),g(N,j)});var z=y(C,2);{var q=N=>{var $=Gf(),j=h($);bu(j,{class:"mb-4 h-10 w-10 opacity-20"}),g(N,$)},ee=N=>{var $=Wf(),j=y(h($),2);ne("click",j,()=>{A(i,""),A(a,"")}),g(N,$)};I(z,N=>{e.entries.length===0?N(q):c(o).length===0&&N(ee,1)})}L(()=>{ve(w,1,`${Lt} pl-9`),ve(v,1,`${Lt} pl-9`)}),Ss(w,()=>c(i),N=>A(i,N)),Dl(v,()=>c(a),N=>A(a,N)),g(t,l),St()}Jt(["click"]);var Uf=S('<div class="toast-container svelte-1ig2a9j" role="status" aria-live="polite"><div><div><!></div> <span class="text-sm font-medium"> </span></div></div>');function Kf(t,e){let r=Ve(e,"type",3,"info");const n={info:xu,error:ou,success:Jr};let i=ce(()=>n[r()]);const a={info:"border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/90 dark:text-blue-100",error:"border-red-200 bg-red-50 text-red-900 dark:border-red-800/60 dark:bg-red-950/90 dark:text-red-100",success:"border-green-200 bg-green-50 text-green-900 dark:border-green-800/60 dark:bg-green-950/90 dark:text-green-100"},s={info:"text-blue-500 dark:text-blue-400",error:"text-red-500 dark:text-red-400",success:"text-green-500 dark:text-green-400"};var o=Uf(),u=h(o),l=h(u),f=h(l);_s(f,()=>c(i),(w,m)=>{m(w,{size:18})});var p=y(l,2),d=h(p);L(()=>{ve(u,1,`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${a[r()]}`,"svelte-1ig2a9j"),ve(l,1,ct(s[r()]),"svelte-1ig2a9j"),Z(d,e.message)}),g(t,o)}var Yf=S('<div class="ml-2 flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"><!> <span class="max-w-[200px] truncate font-mono"> </span> <span class="rounded bg-muted px-1 py-0.5 text-[10px] uppercase"> </span></div>'),Qf=S('<div class="animate-in mx-auto max-w-6xl"><!></div>'),Xf=S(`<div class="mx-auto max-w-5xl"><div class="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground"><div class="mb-4 rounded-full bg-muted p-4"><!></div> <h3 class="text-lg font-medium text-foreground">No tool selected</h3> <p class="max-w-sm text-sm">Select a tool from the sidebar to verify its schema and
                  execute it.</p></div></div>`),ed=S('<div class="animate-in mx-auto max-w-5xl"><!></div>'),td=S('<div class="flex h-screen w-full flex-col bg-background text-foreground transition-colors duration-200"><header class="flex h-14 items-center justify-between border-b bg-secondary/30 px-4 backdrop-blur-sm"><div class="flex items-center gap-3"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><!></div> <div class="flex flex-col leading-none"><h1 class="text-sm font-bold tracking-tight">mcpplay</h1> <span class="text-[10px] text-muted-foreground"> </span></div> <div class="ml-4 flex items-center gap-2 rounded-full border bg-background px-2.5 py-0.5 text-xs font-medium"><div></div> <span> </span></div> <!></div> <div class="flex items-center gap-2"><button class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"><!></button></div></header> <div class="flex flex-1 overflow-hidden"><aside class="w-64 border-r bg-muted/20 flex flex-col"><!></aside> <main class="flex flex-1 flex-col overflow-hidden bg-background"><div class="flex items-center border-b px-4"><button><!> Tool Console</button> <button><!> Timeline <span class="ml-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"> </span></button></div> <div class="flex-1 overflow-y-auto p-6"><!></div></main></div></div> <!>',1);function rd(t,e){kt(e,!0);let r=ie(it([])),n=ie(null),i=ie(it([])),a=ie("tool"),s=ie(""),o=ie("info"),u=ie(!1),l=ie(null),f=ie(0),p=ce(()=>{const P={};for(const ge of c(i))P[ge.tool_name]=(P[ge.tool_name]??0)+1;return P});function d(P,ge="info"){A(s,P,!0),A(o,ge,!0),setTimeout(()=>A(s,""),3e3)}function w(P){switch(P.type){case"tools":{const ge=c(u);if(A(r,P.tools,!0),A(u,!0),!c(n)&&c(r).length>0&&A(n,c(r)[0],!0),c(n)){const Ee=c(r).find(ze=>ze.name===c(n).name);Ee?A(n,Ee,!0):c(r).length>0?A(n,c(r)[0],!0):A(n,null)}ge||d(`Connected — ${c(r).length} tool${c(r).length!==1?"s":""} available`,"success");break}case"timeline":A(i,P.entries,!0),A(f,P.total_count,!0);break;case"reload":{if(P.status==="reloading")d("Server reloading...","info");else if(P.status==="ready")if(P.tools){const ge=eu(c(r),P.tools);A(r,P.tools,!0),d(ge||"Server reloaded","success")}else d("Server reloaded","success");break}case"server_info":A(l,{command:P.command,server_name:P.server_name,transport:P.transport,version:P.version},!0);break;case"error":d(P.message,"error");break}}function m(P){A(n,P,!0),A(a,"tool")}function _(P){Ar({type:"replay",entry_id:P.id}),A(a,"tool");const ge=c(r).find(Ee=>Ee.name===P.tool_name);ge&&A(n,ge,!0)}function v(){Ar({type:"clear_timeline"})}function x(){Ar({type:"get_timeline"})}let R=ie(it(typeof localStorage<"u"?localStorage.getItem("mcpplay-theme")==="dark":!1));function J(){A(R,!c(R)),localStorage.setItem("mcpplay-theme",c(R)?"dark":"light")}rr(()=>{c(R)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),$s(()=>{const P=Ts(w);return As(),P});var k=td(),T=B(k),F=h(T),V=h(F),M=h(V),we=h(M);zs(we,{size:18});var Y=y(M,2),_e=y(h(Y),2),Te=h(_e),C=y(Y,2),z=h(C),q=y(z,2),ee=h(q),N=y(C,2);{var $=P=>{var ge=Yf(),Ee=h(ge);Au(Ee,{size:12});var ze=y(Ee,2),Me=h(ze),je=y(ze,2),Qe=h(je);L(()=>{Se(ze,"title",c(l).server_name),Z(Me,c(l).server_name),Z(Qe,c(l).transport)}),g(P,ge)};I(N,P=>{c(l)&&P($)})}var j=y(V,2),O=h(j),E=h(O);{var Q=P=>{Tu(P,{size:16})},D=P=>{wu(P,{size:16})};I(E,P=>{c(R)?P(Q):P(D,!1)})}var G=y(F,2),U=h(G),Ne=h(U);Lu(Ne,{get tools(){return c(r)},get selectedTool(){return c(n)},get executionCounts(){return c(p)},onSelect:m});var Ze=y(U,2),Oe=h(Ze),ke=h(Oe),$e=h(ke);yu($e,{size:16});var Ce=y(ke,2),Be=h(Ce);iu(Be,{size:16});var Le=y(Be,2),Ie=h(Le),pt=y(Oe,2),ot=h(pt);{var H=P=>{var ge=K(),Ee=B(ge);{var ze=je=>{var Qe=Qf(),W=h(Qe);Ef(W,{get tool(){return c(n)}}),g(je,Qe)},Me=je=>{var Qe=Xf(),W=h(Qe),X=h(W),Ae=h(X);Ms(Ae,{size:32,class:"opacity-50"}),g(je,Qe)};I(Ee,je=>{c(n)?je(ze):je(Me,!1)})}g(P,ge)},te=P=>{var ge=ed(),Ee=h(ge);Jf(Ee,{get entries(){return c(i)},get tools(){return c(r)},get totalCount(){return c(f)},onReplay:_,onClear:v,onLoadAll:x}),g(P,ge)};I(ot,P=>{c(a)==="tool"?P(H):P(te,!1)})}var me=y(T,2);{var be=P=>{Kf(P,{get message(){return c(s)},get type(){return c(o)}})};I(me,P=>{c(s)&&P(be)})}L(()=>{var P;Z(Te,(P=c(l))!=null&&P.version?`v${c(l).version}`:""),ve(z,1,`h-2 w-2 rounded-full ${c(u)?"bg-green-500 animate-pulse-dot":"bg-red-500"}`),ve(q,1,ct(c(u)?"text-foreground":"text-muted-foreground")),Z(ee,c(u)?"Connected":"Disconnected"),ve(ke,1,`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${c(a)==="tool"?"border-primary text-foreground":"border-transparent text-muted-foreground"}`),ve(Ce,1,`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${c(a)==="timeline"?"border-primary text-foreground":"border-transparent text-muted-foreground"}`),Z(Ie,c(i).length)}),ne("click",O,J),ne("click",ke,()=>A(a,"tool")),ne("click",Ce,()=>A(a,"timeline")),g(t,k),St()}Jt(["click"]);Al(rd,{target:document.getElementById("app")});
