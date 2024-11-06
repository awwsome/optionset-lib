var zh = Object.defineProperty, Xh = Object.defineProperties;
var Jh = Object.getOwnPropertyDescriptors;
var Ru = Object.getOwnPropertySymbols, Zh = Object.getPrototypeOf, e0 = Object.prototype.hasOwnProperty, t0 = Object.prototype.propertyIsEnumerable, n0 = Reflect.get;
var Pi = (t, e, n) => e in t ? zh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ke = (t, e) => {
  for (var n in e || (e = {}))
    e0.call(e, n) && Pi(t, n, e[n]);
  if (Ru)
    for (var n of Ru(e))
      t0.call(e, n) && Pi(t, n, e[n]);
  return t;
}, cs = (t, e) => Xh(t, Jh(e));
var Re = (t, e, n) => (Pi(t, typeof e != "symbol" ? e + "" : e, n), n);
var zt = (t, e, n) => n0(Zh(t), n, e);
var y = (t, e, n) => new Promise((r, s) => {
  var i = (u) => {
    try {
      o(n.next(u));
    } catch (l) {
      s(l);
    }
  }, a = (u) => {
    try {
      o(n.throw(u));
    } catch (l) {
      s(l);
    }
  }, o = (u) => u.done ? r(u.value) : Promise.resolve(u.value).then(i, a);
  o((n = n.apply(t, e)).next());
});
function $() {
}
function Ml(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Pl(t) {
  return t();
}
function Nu() {
  return /* @__PURE__ */ Object.create(null);
}
function ut(t) {
  t.forEach(Pl);
}
function kl(t) {
  return typeof t == "function";
}
function Oe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ls;
function wu(t, e) {
  return ls || (ls = document.createElement("a")), ls.href = e, t === ls.href;
}
function r0(t) {
  return Object.keys(t).length === 0;
}
function fe(t, ...e) {
  if (t == null)
    return $;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t) {
  let e;
  return fe(t, (n) => e = n)(), e;
}
function Yn(t, e, n) {
  t.$$.on_destroy.push(fe(e, n));
}
function Gn(t, e, n, r) {
  if (t) {
    const s = Fl(t, e, n, r);
    return t[0](s);
  }
}
function Fl(t, e, n, r) {
  return t[1] && r ? Ml(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Wn(t, e, n, r) {
  if (t[2] && r) {
    const s = t[2](r(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const i = [], a = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < a; o += 1)
        i[o] = e.dirty[o] | s[o];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Qn(t, e, n, r, s, i) {
  if (s) {
    const a = Fl(e, n, r, i);
    t.p(a, s);
  }
}
function Kn(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function st(t, e, n) {
  return t.set(n), e;
}
let si = !1;
function s0() {
  si = !0;
}
function i0() {
  si = !1;
}
function a0(t, e, n, r) {
  for (; t < e; ) {
    const s = t + (e - t >> 1);
    n(s) <= r ? t = s + 1 : e = s;
  }
  return t;
}
function u0(t) {
  if (t.hydrate_init)
    return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const u = [];
    for (let l = 0; l < e.length; l++) {
      const d = e[l];
      d.claim_order !== void 0 && u.push(d);
    }
    e = u;
  }
  const n = new Int32Array(e.length + 1), r = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let u = 0; u < e.length; u++) {
    const l = e[u].claim_order, d = (s > 0 && e[n[s]].claim_order <= l ? s + 1 : a0(1, s, (p) => e[n[p]].claim_order, l)) - 1;
    r[u] = n[d] + 1;
    const f = d + 1;
    n[f] = u, s = Math.max(f, s);
  }
  const i = [], a = [];
  let o = e.length - 1;
  for (let u = n[s] + 1; u != 0; u = r[u - 1]) {
    for (i.push(e[u - 1]); o >= u; o--)
      a.push(e[o]);
    o--;
  }
  for (; o >= 0; o--)
    a.push(e[o]);
  i.reverse(), a.sort((u, l) => u.claim_order - l.claim_order);
  for (let u = 0, l = 0; u < a.length; u++) {
    for (; l < i.length && a[u].claim_order >= i[l].claim_order; )
      l++;
    const d = l < i.length ? i[l] : null;
    t.insertBefore(a[u], d);
  }
}
function G(t, e) {
  if (si) {
    for (u0(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
  } else
    (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function o0(t, e, n) {
  t.insertBefore(e, n || null);
}
function j(t, e, n) {
  si && !n ? G(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function w(t) {
  t.parentNode.removeChild(t);
}
function Kt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function Y(t) {
  return document.createElement(t);
}
function kn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ve(t) {
  return document.createTextNode(t);
}
function le() {
  return ve(" ");
}
function ce() {
  return ve("");
}
function Ie(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function D(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Lu(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set ? t[r] = e[r] : D(t, r, e[r]);
}
function Bl(t) {
  return t === "" ? null : +t;
}
function Q(t) {
  return Array.from(t.childNodes);
}
function Ul(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function xl(t, e, n, r, s = !1) {
  Ul(t);
  const i = (() => {
    for (let a = t.claim_info.last_index; a < t.length; a++) {
      const o = t[a];
      if (e(o)) {
        const u = n(o);
        return u === void 0 ? t.splice(a, 1) : t[a] = u, s || (t.claim_info.last_index = a), o;
      }
    }
    for (let a = t.claim_info.last_index - 1; a >= 0; a--) {
      const o = t[a];
      if (e(o)) {
        const u = n(o);
        return u === void 0 ? t.splice(a, 1) : t[a] = u, s ? u === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = a, o;
      }
    }
    return r();
  })();
  return i.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, i;
}
function Hl(t, e, n, r) {
  return xl(t, (s) => s.nodeName === e, (s) => {
    const i = [];
    for (let a = 0; a < s.attributes.length; a++) {
      const o = s.attributes[a];
      n[o.name] || i.push(o.name);
    }
    i.forEach((a) => s.removeAttribute(a));
  }, () => r(e));
}
function W(t, e, n) {
  return Hl(t, e, n, Y);
}
function Ms(t, e, n) {
  return Hl(t, e, n, kn);
}
function Ne(t, e) {
  return xl(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length)
          return n.splitText(r.length);
      } else
        n.data = r;
    },
    () => ve(e),
    !0
    // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function de(t) {
  return Ne(t, " ");
}
function Du(t, e, n) {
  for (let r = n; r < t.length; r += 1) {
    const s = t[r];
    if (s.nodeType === 8 && s.textContent.trim() === e)
      return r;
  }
  return t.length;
}
function _n(t, e) {
  const n = Du(t, "HTML_TAG_START", 0), r = Du(t, "HTML_TAG_END", n);
  if (n === r)
    return new kt(void 0, e);
  Ul(t);
  const s = t.splice(n, r - n + 1);
  w(s[0]), w(s[s.length - 1]);
  const i = s.slice(1, s.length - 1);
  for (const a of i)
    a.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
  return new kt(i, e);
}
function Qe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Mu(t, e) {
  t.value = e == null ? "" : e;
}
function Fn(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const r = t.options[n];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function c0(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
function Je(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function l0(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, r, e), s;
}
class d0 {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, r = null) {
    this.e || (this.is_svg ? this.e = kn(n.nodeName) : this.e = Y(n.nodeName), this.t = n, this.c(e)), this.i(r);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      o0(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(w);
  }
}
class kt extends d0 {
  constructor(e, n = !1) {
    super(n), this.e = this.n = null, this.l = e;
  }
  c(e) {
    this.l ? this.n = this.l : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      j(this.t, this.n[n], e);
  }
}
let Mr;
function Er(t) {
  Mr = t;
}
function Gr() {
  if (!Mr)
    throw new Error("Function called outside component initialization");
  return Mr;
}
function Ot(t) {
  Gr().$$.on_mount.push(t);
}
function lt(t) {
  Gr().$$.on_destroy.push(t);
}
function Vl() {
  const t = Gr();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const i = l0(e, n, { cancelable: r });
      return s.slice().forEach((a) => {
        a.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function jl(t, e) {
  return Gr().$$.context.set(t, e), e;
}
function En(t) {
  return Gr().$$.context.get(t);
}
function fr(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const hr = [], Pu = [], ys = [], ku = [], f0 = Promise.resolve();
let la = !1;
function h0() {
  la || (la = !0, f0.then(We));
}
function Ps(t) {
  ys.push(t);
}
const ki = /* @__PURE__ */ new Set();
let ds = 0;
function We() {
  const t = Mr;
  do {
    for (; ds < hr.length; ) {
      const e = hr[ds];
      ds++, Er(e), p0(e.$$);
    }
    for (Er(null), hr.length = 0, ds = 0; Pu.length; )
      Pu.pop()();
    for (let e = 0; e < ys.length; e += 1) {
      const n = ys[e];
      ki.has(n) || (ki.add(n), n());
    }
    ys.length = 0;
  } while (hr.length);
  for (; ku.length; )
    ku.pop()();
  la = !1, ki.clear(), Er(t);
}
function p0(t) {
  if (t.fragment !== null) {
    t.update(), ut(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ps);
  }
}
const vs = /* @__PURE__ */ new Set();
let rn;
function je() {
  rn = {
    r: 0,
    c: [],
    p: rn
    // parent group
  };
}
function qe() {
  rn.r || ut(rn.c), rn = rn.p;
}
function K(t, e) {
  t && t.i && (vs.delete(t), t.i(e));
}
function z(t, e, n, r) {
  if (t && t.o) {
    if (vs.has(t))
      return;
    vs.add(t), rn.c.push(() => {
      vs.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function m0(t, e) {
  z(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function _0(t, e, n, r, s, i, a, o, u, l, d, f) {
  let p = t.length, h = i.length, m = p;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const b = [], C = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
  for (m = h; m--; ) {
    const S = f(s, i, m), R = n(S);
    let B = a.get(R);
    B ? r && B.p(S, e) : (B = l(R, S), B.c()), C.set(R, b[m] = B), R in _ && O.set(R, Math.abs(m - _[R]));
  }
  const A = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
  function v(S) {
    K(S, 1), S.m(o, d), a.set(S.key, S), d = S.first, h--;
  }
  for (; p && h; ) {
    const S = b[h - 1], R = t[p - 1], B = S.key, H = R.key;
    S === R ? (d = S.first, p--, h--) : C.has(H) ? !a.has(B) || A.has(B) ? v(S) : T.has(H) ? p-- : O.get(B) > O.get(H) ? (T.add(B), v(S)) : (A.add(H), p--) : (u(R, a), p--);
  }
  for (; p--; ) {
    const S = t[p];
    C.has(S.key) || u(S, a);
  }
  for (; h; )
    v(b[h - 1]);
  return b;
}
function E0(t, e) {
  const n = {}, r = {}, s = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const a = t[i], o = e[i];
    if (o) {
      for (const u in a)
        u in o || (r[u] = 1);
      for (const u in o)
        s[u] || (n[u] = o[u], s[u] = 1);
      t[i] = o;
    } else
      for (const u in a)
        s[u] = 1;
  }
  for (const a in r)
    a in n || (n[a] = void 0);
  return n;
}
function Ce(t) {
  t && t.c();
}
function we(t, e) {
  t && t.l(e);
}
function Ae(t, e, n, r) {
  const { fragment: s, on_mount: i, on_destroy: a, after_update: o } = t.$$;
  s && s.m(e, n), r || Ps(() => {
    const u = i.map(Pl).filter(kl);
    a ? a.push(...u) : ut(u), t.$$.on_mount = [];
  }), o.forEach(Ps);
}
function ye(t, e) {
  const n = t.$$;
  n.fragment !== null && (ut(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function g0(t, e) {
  t.$$.dirty[0] === -1 && (hr.push(t), h0(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Le(t, e, n, r, s, i, a, o = [-1]) {
  const u = Mr;
  Er(t);
  const l = t.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: i,
    update: $,
    not_equal: s,
    bound: Nu(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Nu(),
    dirty: o,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  a && a(l.root);
  let d = !1;
  if (l.ctx = n ? n(t, e.props || {}, (f, p, ...h) => {
    const m = h.length ? h[0] : p;
    return l.ctx && s(l.ctx[f], l.ctx[f] = m) && (!l.skip_bound && l.bound[f] && l.bound[f](m), d && g0(t, f)), p;
  }) : [], l.update(), d = !0, ut(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      s0();
      const f = Q(e.target);
      l.fragment && l.fragment.l(f), f.forEach(w);
    } else
      l.fragment && l.fragment.c();
    e.intro && K(t.$$.fragment), Ae(t, e.target, e.anchor, e.customElement), i0(), We();
  }
  Er(u);
}
class De {
  $destroy() {
    ye(this, 1), this.$destroy = $;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !r0(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function b0(t) {
  let e, n, r;
  return {
    c() {
      e = Y("h2"), n = ve("Hello "), r = ve(
        /*name*/
        t[0]
      );
    },
    l(s) {
      e = W(s, "H2", {});
      var i = Q(e);
      n = Ne(i, "Hello "), r = Ne(
        i,
        /*name*/
        t[0]
      ), i.forEach(w);
    },
    m(s, i) {
      j(s, e, i), G(e, n), G(e, r);
    },
    p(s, [i]) {
      i & /*name*/
      1 && Qe(
        r,
        /*name*/
        s[0]
      );
    },
    i: $,
    o: $,
    d(s) {
      s && w(e);
    }
  };
}
function T0(t, e, n) {
  let { name: r = "world" } = e;
  return t.$$set = (s) => {
    "name" in s && n(0, r = s.name);
  }, [r];
}
class EC extends De {
  constructor(e) {
    super(), Le(this, e, T0, b0, Oe, { name: 0 });
  }
}
const Cn = [];
function I0(t, e) {
  return {
    subscribe: me(t, e).subscribe
  };
}
function me(t, e = $) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function s(o) {
    if (Oe(t, o) && (t = o, n)) {
      const u = !Cn.length;
      for (const l of r)
        l[1](), Cn.push(l, t);
      if (u) {
        for (let l = 0; l < Cn.length; l += 2)
          Cn[l][0](Cn[l + 1]);
        Cn.length = 0;
      }
    }
  }
  function i(o) {
    s(o(t));
  }
  function a(o, u = $) {
    const l = [o, u];
    return r.add(l), r.size === 1 && (n = e(s) || $), o(t), () => {
      r.delete(l), r.size === 0 && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: a };
}
function fs(t, e, n) {
  const r = !Array.isArray(t), s = r ? [t] : t, i = e.length < 2;
  return I0(n, (a) => {
    let o = !1;
    const u = [];
    let l = 0, d = $;
    const f = () => {
      if (l)
        return;
      d();
      const h = e(r ? u[0] : u, a);
      i ? a(h) : d = kl(h) ? h : $;
    }, p = s.map((h, m) => fe(h, (_) => {
      u[m] = _, l &= ~(1 << m), o && f();
    }, () => {
      l |= 1 << m;
    }));
    return o = !0, f(), function() {
      ut(p), d();
    };
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ql = function(t) {
  const e = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let s = t.charCodeAt(r);
    s < 128 ? e[n++] = s : s < 2048 ? (e[n++] = s >> 6 | 192, e[n++] = s & 63 | 128) : (s & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = s >> 18 | 240, e[n++] = s >> 12 & 63 | 128, e[n++] = s >> 6 & 63 | 128, e[n++] = s & 63 | 128) : (e[n++] = s >> 12 | 224, e[n++] = s >> 6 & 63 | 128, e[n++] = s & 63 | 128);
  }
  return e;
}, A0 = function(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const s = t[n++];
    if (s < 128)
      e[r++] = String.fromCharCode(s);
    else if (s > 191 && s < 224) {
      const i = t[n++];
      e[r++] = String.fromCharCode((s & 31) << 6 | i & 63);
    } else if (s > 239 && s < 365) {
      const i = t[n++], a = t[n++], o = t[n++], u = ((s & 7) << 18 | (i & 63) << 12 | (a & 63) << 6 | o & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (u >> 10)), e[r++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const i = t[n++], a = t[n++];
      e[r++] = String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | a & 63);
    }
  }
  return e.join("");
}, $l = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let s = 0; s < t.length; s += 3) {
      const i = t[s], a = s + 1 < t.length, o = a ? t[s + 1] : 0, u = s + 2 < t.length, l = u ? t[s + 2] : 0, d = i >> 2, f = (i & 3) << 4 | o >> 4;
      let p = (o & 15) << 2 | l >> 6, h = l & 63;
      u || (h = 64, a || (p = 64)), r.push(n[d], n[f], n[p], n[h]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(ql(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : A0(this.decodeStringToByteArray(t, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(t, e) {
    this.init_();
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let s = 0; s < t.length; ) {
      const i = n[t.charAt(s++)], o = s < t.length ? n[t.charAt(s)] : 0;
      ++s;
      const l = s < t.length ? n[t.charAt(s)] : 64;
      ++s;
      const f = s < t.length ? n[t.charAt(s)] : 64;
      if (++s, i == null || o == null || l == null || f == null)
        throw Error();
      const p = i << 2 | o >> 4;
      if (r.push(p), l !== 64) {
        const h = o << 4 & 240 | l >> 2;
        if (r.push(h), f !== 64) {
          const m = l << 6 & 192 | f;
          r.push(m);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
}, y0 = function(t) {
  const e = ql(t);
  return $l.encodeByteArray(e, !0);
}, Yl = function(t) {
  return y0(t).replace(/\./g, "");
}, v0 = function(t) {
  try {
    return $l.decodeString(t, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S0 {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye() {
  return typeof navigator != "undefined" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function C0() {
  return typeof window != "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye());
}
function Gl() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function O0() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function R0() {
  const t = Ye();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Wl() {
  return typeof indexedDB == "object";
}
function Ql() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", s = self.indexedDB.open(r);
      s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }, s.onupgradeneeded = () => {
        n = !1;
      }, s.onerror = () => {
        var i;
        e(((i = s.error) === null || i === void 0 ? void 0 : i.message) || "");
      };
    } catch (n) {
      e(n);
    }
  });
}
function N0() {
  return !(typeof navigator == "undefined" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w0 = "FirebaseError";
class bt extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = w0, Object.setPrototypeOf(this, bt.prototype), Error.captureStackTrace && Error.captureStackTrace(this, gn.prototype.create);
  }
}
class gn {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r;
  }
  create(e, ...n) {
    const r = n[0] || {}, s = `${this.service}/${e}`, i = this.errors[e], a = i ? L0(i, r) : "Error", o = `${this.serviceName}: ${a} (${s}).`;
    return new bt(s, o, r);
  }
}
function L0(t, e) {
  return t.replace(D0, (n, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const D0 = /\{\$([^}]+)}/g;
function M0(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function ks(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), r = Object.keys(e);
  for (const s of n) {
    if (!r.includes(s))
      return !1;
    const i = t[s], a = e[s];
    if (Fu(i) && Fu(a)) {
      if (!ks(i, a))
        return !1;
    } else if (i !== a)
      return !1;
  }
  for (const s of r)
    if (!n.includes(s))
      return !1;
  return !0;
}
function Fu(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach((s) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(s));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function pr(t) {
  const e = {};
  return t.replace(/^\?/, "").split("&").forEach((r) => {
    if (r) {
      const [s, i] = r.split("=");
      e[decodeURIComponent(s)] = decodeURIComponent(i);
    }
  }), e;
}
function mr(t) {
  const e = t.indexOf("?");
  if (!e)
    return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0);
}
function P0(t, e) {
  const n = new k0(t, e);
  return n.subscribe.bind(n);
}
class k0 {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, n) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, n, r) {
    let s;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    F0(e, [
      "next",
      "error",
      "complete"
    ]) ? s = e : s = {
      next: e,
      error: n,
      complete: r
    }, s.next === void 0 && (s.next = Fi), s.error === void 0 && (s.error = Fi), s.complete === void 0 && (s.complete = Fi);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? s.error(this.finalError) : s.complete();
      } catch (a) {
      }
    }), this.observers.push(s), i;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++)
        this.sendOne(n, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console != "undefined" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function F0(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function Fi() {
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B0 = 1e3, U0 = 2, x0 = 4 * 60 * 60 * 1e3, H0 = 0.5;
function Bu(t, e = B0, n = U0) {
  const r = e * Math.pow(n, t), s = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    H0 * r * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min(x0, r + s);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(t) {
  return t && t._delegate ? t._delegate : t;
}
class Et {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, r) {
    this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V0 {
  constructor(e, n) {
    this.name = e, this.container = n, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new S0();
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: n
          });
          s && r.resolve(s);
        } catch (s) {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), s = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (i) {
        if (s)
          return null;
        throw i;
      }
    else {
      if (s)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (q0(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Zt });
        } catch (n) {
        }
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: s
          });
          r.resolve(i);
        } catch (i) {
        }
      }
    }
  }
  clearInstance(e = Zt) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  delete() {
    return y(this, null, function* () {
      const e = Array.from(this.instances.values());
      yield Promise.all([
        ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
        ...e.filter((n) => "_delete" in n).map((n) => n._delete())
      ]);
    });
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Zt) {
    return this.instances.has(e);
  }
  getOptions(e = Zt) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [i, a] of this.instancesDeferred.entries()) {
      const o = this.normalizeInstanceIdentifier(i);
      r === o && a.resolve(s);
    }
    return s;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, n) {
    var r;
    const s = this.normalizeInstanceIdentifier(n), i = (r = this.onInitCallbacks.get(s)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    i.add(e), this.onInitCallbacks.set(s, i);
    const a = this.instances.get(s);
    return a && e(a, s), () => {
      i.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(e, n);
        } catch (i) {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: j0(e),
      options: n
    }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch (s) {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = Zt) {
    return this.component ? this.component.multipleInstances ? e : Zt : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function j0(t) {
  return t === Zt ? void 0 : t;
}
function q0(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $0 {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const n = new V0(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _e;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(_e || (_e = {}));
const Y0 = {
  debug: _e.DEBUG,
  verbose: _e.VERBOSE,
  info: _e.INFO,
  warn: _e.WARN,
  error: _e.ERROR,
  silent: _e.SILENT
}, G0 = _e.INFO, W0 = {
  [_e.DEBUG]: "log",
  [_e.VERBOSE]: "log",
  [_e.INFO]: "info",
  [_e.WARN]: "warn",
  [_e.ERROR]: "error"
}, Q0 = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const r = new Date().toISOString(), s = W0[e];
  if (s)
    console[s](`[${r}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class ii {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = G0, this._logHandler = Q0, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in _e))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Y0[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, _e.DEBUG, ...e), this._logHandler(this, _e.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, _e.VERBOSE, ...e), this._logHandler(this, _e.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, _e.INFO, ...e), this._logHandler(this, _e.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, _e.WARN, ...e), this._logHandler(this, _e.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, _e.ERROR, ...e), this._logHandler(this, _e.ERROR, ...e);
  }
}
const K0 = (t, e) => e.some((n) => t instanceof n);
let Uu, xu;
function z0() {
  return Uu || (Uu = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function X0() {
  return xu || (xu = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Kl = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap();
function J0(t) {
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("success", i), t.removeEventListener("error", a);
    }, i = () => {
      n(Gt(t.result)), s();
    }, a = () => {
      r(t.error), s();
    };
    t.addEventListener("success", i), t.addEventListener("error", a);
  });
  return e.then((n) => {
    n instanceof IDBCursor && Kl.set(n, t);
  }).catch(() => {
  }), xa.set(e, t), e;
}
function Z0(t) {
  if (da.has(t))
    return;
  const e = new Promise((n, r) => {
    const s = () => {
      t.removeEventListener("complete", i), t.removeEventListener("error", a), t.removeEventListener("abort", a);
    }, i = () => {
      n(), s();
    }, a = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), s();
    };
    t.addEventListener("complete", i), t.addEventListener("error", a), t.addEventListener("abort", a);
  });
  da.set(t, e);
}
let fa = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return da.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || zl.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Gt(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function ep(t) {
  fa = t(fa);
}
function tp(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(Ui(this), e, ...n);
    return zl.set(r, e.sort ? e.sort() : [e]), Gt(r);
  } : X0().includes(t) ? function(...e) {
    return t.apply(Ui(this), e), Gt(Kl.get(this));
  } : function(...e) {
    return Gt(t.apply(Ui(this), e));
  };
}
function np(t) {
  return typeof t == "function" ? tp(t) : (t instanceof IDBTransaction && Z0(t), K0(t, z0()) ? new Proxy(t, fa) : t);
}
function Gt(t) {
  if (t instanceof IDBRequest)
    return J0(t);
  if (Bi.has(t))
    return Bi.get(t);
  const e = np(t);
  return e !== t && (Bi.set(t, e), xa.set(e, t)), e;
}
const Ui = (t) => xa.get(t);
function Xl(t, e, { blocked: n, upgrade: r, blocking: s, terminated: i } = {}) {
  const a = indexedDB.open(t, e), o = Gt(a);
  return r && a.addEventListener("upgradeneeded", (u) => {
    r(Gt(a.result), u.oldVersion, u.newVersion, Gt(a.transaction));
  }), n && a.addEventListener("blocked", () => n()), o.then((u) => {
    i && u.addEventListener("close", () => i()), s && u.addEventListener("versionchange", () => s());
  }).catch(() => {
  }), o;
}
const rp = ["get", "getKey", "getAll", "getAllKeys", "count"], sp = ["put", "add", "delete", "clear"], xi = /* @__PURE__ */ new Map();
function Hu(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (xi.get(e))
    return xi.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, s = sp.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || rp.includes(n))
  )
    return;
  const i = function(a, ...o) {
    return y(this, null, function* () {
      const u = this.transaction(a, s ? "readwrite" : "readonly");
      let l = u.store;
      return r && (l = l.index(o.shift())), (yield Promise.all([
        l[n](...o),
        s && u.done
      ]))[0];
    });
  };
  return xi.set(e, i), i;
}
ep((t) => cs(Ke({}, t), {
  get: (e, n, r) => Hu(e, n) || t.get(e, n, r),
  has: (e, n) => !!Hu(e, n) || t.has(e, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ip {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (ap(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function ap(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const ha = "@firebase/app", Vu = "0.7.33";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un = new ii("@firebase/app"), up = "@firebase/app-compat", op = "@firebase/analytics-compat", cp = "@firebase/analytics", lp = "@firebase/app-check-compat", dp = "@firebase/app-check", fp = "@firebase/auth", hp = "@firebase/auth-compat", pp = "@firebase/database", mp = "@firebase/database-compat", _p = "@firebase/functions", Ep = "@firebase/functions-compat", gp = "@firebase/installations", bp = "@firebase/installations-compat", Tp = "@firebase/messaging", Ip = "@firebase/messaging-compat", Ap = "@firebase/performance", yp = "@firebase/performance-compat", vp = "@firebase/remote-config", Sp = "@firebase/remote-config-compat", Cp = "@firebase/storage", Op = "@firebase/storage-compat", Rp = "@firebase/firestore", Np = "@firebase/firestore-compat", wp = "firebase", Lp = "9.10.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jl = "[DEFAULT]", Dp = {
  [ha]: "fire-core",
  [up]: "fire-core-compat",
  [cp]: "fire-analytics",
  [op]: "fire-analytics-compat",
  [dp]: "fire-app-check",
  [lp]: "fire-app-check-compat",
  [fp]: "fire-auth",
  [hp]: "fire-auth-compat",
  [pp]: "fire-rtdb",
  [mp]: "fire-rtdb-compat",
  [_p]: "fire-fn",
  [Ep]: "fire-fn-compat",
  [gp]: "fire-iid",
  [bp]: "fire-iid-compat",
  [Tp]: "fire-fcm",
  [Ip]: "fire-fcm-compat",
  [Ap]: "fire-perf",
  [yp]: "fire-perf-compat",
  [vp]: "fire-rc",
  [Sp]: "fire-rc-compat",
  [Cp]: "fire-gcs",
  [Op]: "fire-gcs-compat",
  [Rp]: "fire-fst",
  [Np]: "fire-fst-compat",
  "fire-js": "fire-js",
  [wp]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fs = /* @__PURE__ */ new Map(), pa = /* @__PURE__ */ new Map();
function Mp(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function Ct(t) {
  const e = t.name;
  if (pa.has(e))
    return un.debug(`There were multiple attempts to register component ${e}.`), !1;
  pa.set(e, t);
  for (const n of Fs.values())
    Mp(n, t);
  return !0;
}
function Qr(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pp = {
  [
    "no-app"
    /* NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  [
    "bad-app-name"
    /* BAD_APP_NAME */
  ]: "Illegal App name: '{$appName}",
  [
    "duplicate-app"
    /* DUPLICATE_APP */
  ]: "Firebase App named '{$appName}' already exists with different options or config",
  [
    "app-deleted"
    /* APP_DELETED */
  ]: "Firebase App named '{$appName}' already deleted",
  [
    "invalid-app-argument"
    /* INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  [
    "invalid-log-argument"
    /* INVALID_LOG_ARGUMENT */
  ]: "First argument to `onLog` must be null or a function.",
  [
    "idb-open"
    /* IDB_OPEN */
  ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-get"
    /* IDB_GET */
  ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-set"
    /* IDB_WRITE */
  ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-delete"
    /* IDB_DELETE */
  ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, on = new gn("app", "Firebase", Pp);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kp {
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Et(
      "app",
      () => this,
      "PUBLIC"
      /* PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw on.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kr = Lp;
function Fp(t, e = {}) {
  typeof e != "object" && (e = { name: e });
  const n = Object.assign({ name: Jl, automaticDataCollectionEnabled: !1 }, e), r = n.name;
  if (typeof r != "string" || !r)
    throw on.create("bad-app-name", {
      appName: String(r)
    });
  const s = Fs.get(r);
  if (s) {
    if (ks(t, s.options) && ks(n, s.config))
      return s;
    throw on.create("duplicate-app", { appName: r });
  }
  const i = new $0(r);
  for (const o of pa.values())
    i.addComponent(o);
  const a = new kp(t, n, i);
  return Fs.set(r, a), a;
}
function Zl(t = Jl) {
  const e = Fs.get(t);
  if (!e)
    throw on.create("no-app", { appName: t });
  return e;
}
function ct(t, e, n) {
  var r;
  let s = (r = Dp[t]) !== null && r !== void 0 ? r : t;
  n && (s += `-${n}`);
  const i = s.match(/\s|\//), a = e.match(/\s|\//);
  if (i || a) {
    const o = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    i && o.push(`library name "${s}" contains illegal characters (whitespace or "/")`), i && a && o.push("and"), a && o.push(`version name "${e}" contains illegal characters (whitespace or "/")`), un.warn(o.join(" "));
    return;
  }
  Ct(new Et(
    `${s}-version`,
    () => ({ library: s, version: e }),
    "VERSION"
    /* VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bp = "firebase-heartbeat-database", Up = 1, Pr = "firebase-heartbeat-store";
let Hi = null;
function ed() {
  return Hi || (Hi = Xl(Bp, Up, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(Pr);
      }
    }
  }).catch((t) => {
    throw on.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Hi;
}
function xp(t) {
  return y(this, null, function* () {
    var e;
    try {
      return (yield ed()).transaction(Pr).objectStore(Pr).get(td(t));
    } catch (n) {
      if (n instanceof bt)
        un.warn(n.message);
      else {
        const r = on.create("idb-get", {
          originalErrorMessage: (e = n) === null || e === void 0 ? void 0 : e.message
        });
        un.warn(r.message);
      }
    }
  });
}
function ju(t, e) {
  return y(this, null, function* () {
    var n;
    try {
      const s = (yield ed()).transaction(Pr, "readwrite");
      return yield s.objectStore(Pr).put(e, td(t)), s.done;
    } catch (r) {
      if (r instanceof bt)
        un.warn(r.message);
      else {
        const s = on.create("idb-set", {
          originalErrorMessage: (n = r) === null || n === void 0 ? void 0 : n.message
        });
        un.warn(s.message);
      }
    }
  });
}
function td(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hp = 1024, Vp = 30 * 24 * 60 * 60 * 1e3;
class jp {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new $p(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  triggerHeartbeat() {
    return y(this, null, function* () {
      const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = qu();
      if (this._heartbeatsCache === null && (this._heartbeatsCache = yield this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((s) => s.date === r)))
        return this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((s) => {
          const i = new Date(s.date).valueOf();
          return Date.now() - i <= Vp;
        }), this._storage.overwrite(this._heartbeatsCache);
    });
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  getHeartbeatsHeader() {
    return y(this, null, function* () {
      if (this._heartbeatsCache === null && (yield this._heartbeatsCachePromise), this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
        return "";
      const e = qu(), { heartbeatsToSend: n, unsentEntries: r } = qp(this._heartbeatsCache.heartbeats), s = Yl(JSON.stringify({ version: 2, heartbeats: n }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
    });
  }
}
function qu() {
  return new Date().toISOString().substring(0, 10);
}
function qp(t, e = Hp) {
  const n = [];
  let r = t.slice();
  for (const s of t) {
    const i = n.find((a) => a.agent === s.agent);
    if (i) {
      if (i.dates.push(s.date), $u(n) > e) {
        i.dates.pop();
        break;
      }
    } else if (n.push({
      agent: s.agent,
      dates: [s.date]
    }), $u(n) > e) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  };
}
class $p {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  runIndexedDBEnvironmentCheck() {
    return y(this, null, function* () {
      return Wl() ? Ql().then(() => !0).catch(() => !1) : !1;
    });
  }
  /**
   * Read all heartbeats.
   */
  read() {
    return y(this, null, function* () {
      return (yield this._canUseIndexedDBPromise) ? (yield xp(this.app)) || { heartbeats: [] } : { heartbeats: [] };
    });
  }
  // overwrite the storage with the provided heartbeats
  overwrite(e) {
    return y(this, null, function* () {
      var n;
      if (yield this._canUseIndexedDBPromise) {
        const s = yield this.read();
        return ju(this.app, {
          lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : s.lastSentHeartbeatDate,
          heartbeats: e.heartbeats
        });
      } else
        return;
    });
  }
  // add heartbeats
  add(e) {
    return y(this, null, function* () {
      var n;
      if (yield this._canUseIndexedDBPromise) {
        const s = yield this.read();
        return ju(this.app, {
          lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : s.lastSentHeartbeatDate,
          heartbeats: [
            ...s.heartbeats,
            ...e.heartbeats
          ]
        });
      } else
        return;
    });
  }
}
function $u(t) {
  return Yl(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yp(t) {
  Ct(new Et(
    "platform-logger",
    (e) => new ip(e),
    "PRIVATE"
    /* PRIVATE */
  )), Ct(new Et(
    "heartbeat",
    (e) => new jp(e),
    "PRIVATE"
    /* PRIVATE */
  )), ct(ha, Vu, t), ct(ha, Vu, "esm2017"), ct("fire-js", "");
}
Yp("");
var ma = function(t, e) {
  return ma = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
  }, ma(t, e);
};
function zn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ma(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function Ha(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
  return n;
}
function _a(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n)
    return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bs(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var r = n.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function Us(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = e.length, i; r < s; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function nd() {
  return {
    [
      "dependent-sdk-initialized-before-auth"
      /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Gp = nd, rd = new gn("auth", "Firebase", nd());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yu = new ii("@firebase/auth");
function Ss(t, ...e) {
  Yu.logLevel <= _e.ERROR && Yu.error(`Auth (${Kr}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(t, ...e) {
  throw Va(t, ...e);
}
function yt(t, ...e) {
  return Va(t, ...e);
}
function Wp(t, e, n) {
  const r = Object.assign(Object.assign({}, Gp()), { [e]: n });
  return new gn("auth", "Firebase", r).create(e, {
    appName: t.name
  });
}
function Va(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return rd.create(t, ...e);
}
function se(t, e, ...n) {
  if (!t)
    throw Va(e, ...n);
}
function Dt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw Ss(e), new Error(e);
}
function Ft(t, e) {
  t || Dt(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gu = /* @__PURE__ */ new Map();
function Mt(t) {
  Ft(t instanceof Function, "Expected a class definition");
  let e = Gu.get(t);
  return e ? (Ft(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), Gu.set(t, e), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qp(t, e) {
  const n = Qr(t, "auth");
  if (n.isInitialized()) {
    const s = n.getImmediate(), i = n.getOptions();
    if (ks(i, e != null ? e : {}))
      return s;
    gt(
      s,
      "already-initialized"
      /* ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function Kp(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(n) ? n : [n]).map(Mt);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ea() {
  var t;
  return typeof self != "undefined" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function zp() {
  return Wu() === "http:" || Wu() === "https:";
}
function Wu() {
  var t;
  return typeof self != "undefined" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xp() {
  return typeof navigator != "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (zp() || Gl() || "connection" in navigator) ? navigator.onLine : !0;
}
function Jp() {
  if (typeof navigator == "undefined")
    return null;
  const t = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    t.languages && t.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    t.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zr {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, Ft(n > e, "Short delay should be less than long delay!"), this.isMobile = C0() || O0();
  }
  get() {
    return Xp() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ja(t, e) {
  Ft(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd {
  static initialize(e, n, r) {
    this.fetchImpl = e, n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self != "undefined" && "fetch" in self)
      return self.fetch;
    Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self != "undefined" && "Headers" in self)
      return self.Headers;
    Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self != "undefined" && "Response" in self)
      return self.Response;
    Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zp = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "internal-error",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
  /* INTERNAL_ERROR */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const em = new zr(3e4, 6e4);
function ai(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
function Xr(i, a, o, u) {
  return y(this, arguments, function* (t, e, n, r, s = {}) {
    return id(t, s, () => y(this, null, function* () {
      let l = {}, d = {};
      r && (e === "GET" ? d = r : l = {
        body: JSON.stringify(r)
      });
      const f = Wr(Object.assign({ key: t.config.apiKey }, d)).slice(1), p = yield t._getAdditionalHeaders();
      return p[
        "Content-Type"
        /* CONTENT_TYPE */
      ] = "application/json", t.languageCode && (p[
        "X-Firebase-Locale"
        /* X_FIREBASE_LOCALE */
      ] = t.languageCode), sd.fetch()(ad(t, t.config.apiHost, n, f), Object.assign({
        method: e,
        headers: p,
        referrerPolicy: "no-referrer"
      }, l));
    }));
  });
}
function id(t, e, n) {
  return y(this, null, function* () {
    t._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, Zp), e);
    try {
      const s = new tm(t), i = yield Promise.race([
        n(),
        s.promise
      ]);
      s.clearNetworkTimeout();
      const a = yield i.json();
      if ("needConfirmation" in a)
        throw hs(t, "account-exists-with-different-credential", a);
      if (i.ok && !("errorMessage" in a))
        return a;
      {
        const o = i.ok ? a.errorMessage : a.error.message, [u, l] = o.split(" : ");
        if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
          throw hs(t, "credential-already-in-use", a);
        if (u === "EMAIL_EXISTS")
          throw hs(t, "email-already-in-use", a);
        if (u === "USER_DISABLED")
          throw hs(t, "user-disabled", a);
        const d = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
        if (l)
          throw Wp(t, d, l);
        gt(t, d);
      }
    } catch (s) {
      if (s instanceof bt)
        throw s;
      gt(
        t,
        "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
      );
    }
  });
}
function ui(i, a, o, u) {
  return y(this, arguments, function* (t, e, n, r, s = {}) {
    const l = yield Xr(t, e, n, r, s);
    return "mfaPendingCredential" in l && gt(t, "multi-factor-auth-required", {
      _serverResponse: l
    }), l;
  });
}
function ad(t, e, n, r) {
  const s = `${e}${n}?${r}`;
  return t.config.emulator ? ja(t.config, s) : `${t.config.apiScheme}://${s}`;
}
class tm {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, r) => {
      this.timer = setTimeout(() => r(yt(
        this.auth,
        "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
      )), em.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function hs(t, e, n) {
  const r = {
    appName: t.name
  };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const s = yt(t, e, r);
  return s.customData._tokenResponse = n, s;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nm(t, e) {
  return y(this, null, function* () {
    return Xr(t, "POST", "/v1/accounts:delete", e);
  });
}
function rm(t, e) {
  return y(this, null, function* () {
    return Xr(t, "POST", "/v1/accounts:lookup", e);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gr(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch (e) {
    }
}
function sm(t, e = !1) {
  return y(this, null, function* () {
    const n = Ve(t), r = yield n.getIdToken(e), s = qa(r);
    se(
      s && s.exp && s.auth_time && s.iat,
      n.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const i = typeof s.firebase == "object" ? s.firebase : void 0, a = i == null ? void 0 : i.sign_in_provider;
    return {
      claims: s,
      token: r,
      authTime: gr(Vi(s.auth_time)),
      issuedAtTime: gr(Vi(s.iat)),
      expirationTime: gr(Vi(s.exp)),
      signInProvider: a || null,
      signInSecondFactor: (i == null ? void 0 : i.sign_in_second_factor) || null
    };
  });
}
function Vi(t) {
  return Number(t) * 1e3;
}
function qa(t) {
  var e;
  const [n, r, s] = t.split(".");
  if (n === void 0 || r === void 0 || s === void 0)
    return Ss("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = v0(r);
    return i ? JSON.parse(i) : (Ss("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return Ss("Caught error parsing JWT payload as JSON", (e = i) === null || e === void 0 ? void 0 : e.toString()), null;
  }
}
function im(t) {
  const e = qa(t);
  return se(
    e,
    "internal-error"
    /* INTERNAL_ERROR */
  ), se(
    typeof e.exp != "undefined",
    "internal-error"
    /* INTERNAL_ERROR */
  ), se(
    typeof e.iat != "undefined",
    "internal-error"
    /* INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kr(t, e, n = !1) {
  return y(this, null, function* () {
    if (n)
      return e;
    try {
      return yield e;
    } catch (r) {
      throw r instanceof bt && am(r) && t.auth.currentUser === t && (yield t.auth.signOut()), r;
    }
  });
}
function am({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class um {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const s = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(() => y(this, null, function* () {
      yield this.iteration();
    }), n);
  }
  iteration() {
    return y(this, null, function* () {
      var e;
      try {
        yield this.user.getIdToken(!0);
      } catch (n) {
        ((e = n) === null || e === void 0 ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
          /* wasError */
          !0
        );
        return;
      }
      this.schedule();
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ud {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = gr(this.lastLoginAt), this.creationTime = gr(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(t) {
  return y(this, null, function* () {
    var e;
    const n = t.auth, r = yield t.getIdToken(), s = yield kr(t, rm(n, { idToken: r }));
    se(
      s == null ? void 0 : s.users.length,
      n,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const i = s.users[0];
    t._notifyReloadListener(i);
    const a = !((e = i.providerUserInfo) === null || e === void 0) && e.length ? lm(i.providerUserInfo) : [], o = cm(t.providerData, a), u = t.isAnonymous, l = !(t.email && i.passwordHash) && !(o != null && o.length), d = u ? l : !1, f = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: o,
      metadata: new ud(i.createdAt, i.lastLoginAt),
      isAnonymous: d
    };
    Object.assign(t, f);
  });
}
function om(t) {
  return y(this, null, function* () {
    const e = Ve(t);
    yield xs(e), yield e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
  });
}
function cm(t, e) {
  return [...t.filter((r) => !e.some((s) => s.providerId === r.providerId)), ...e];
}
function lm(t) {
  return t.map((e) => {
    var { providerId: n } = e, r = Ha(e, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dm(t, e) {
  return y(this, null, function* () {
    const n = yield id(t, {}, () => y(this, null, function* () {
      const r = Wr({
        grant_type: "refresh_token",
        refresh_token: e
      }).slice(1), { tokenApiHost: s, apiKey: i } = t.config, a = ad(t, s, "/v1/token", `key=${i}`), o = yield t._getAdditionalHeaders();
      return o[
        "Content-Type"
        /* CONTENT_TYPE */
      ] = "application/x-www-form-urlencoded", sd.fetch()(a, {
        method: "POST",
        headers: o,
        body: r
      });
    }));
    return {
      accessToken: n.access_token,
      expiresIn: n.expires_in,
      refreshToken: n.refresh_token
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    se(
      e.idToken,
      "internal-error"
      /* INTERNAL_ERROR */
    ), se(
      typeof e.idToken != "undefined",
      "internal-error"
      /* INTERNAL_ERROR */
    ), se(
      typeof e.refreshToken != "undefined",
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn != "undefined" ? Number(e.expiresIn) : im(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  getToken(e, n = !1) {
    return y(this, null, function* () {
      return se(
        !this.accessToken || this.refreshToken,
        e,
        "user-token-expired"
        /* TOKEN_EXPIRED */
      ), !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (yield this.refresh(e, this.refreshToken), this.accessToken) : null;
    });
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  refresh(e, n) {
    return y(this, null, function* () {
      const { accessToken: r, refreshToken: s, expiresIn: i } = yield dm(e, n);
      this.updateTokensAndExpiration(r, s, Number(i));
    });
  }
  updateTokensAndExpiration(e, n, r) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: s, expirationTime: i } = n, a = new Fr();
    return r && (se(typeof r == "string", "internal-error", {
      appName: e
    }), a.refreshToken = r), s && (se(typeof s == "string", "internal-error", {
      appName: e
    }), a.accessToken = s), i && (se(typeof i == "number", "internal-error", {
      appName: e
    }), a.expirationTime = i), a;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new Fr(), this.toJSON());
  }
  _performRefresh() {
    return Dt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(t, e) {
  se(typeof t == "string" || typeof t == "undefined", "internal-error", { appName: e });
}
class an {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: s } = e, i = Ha(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new um(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = n, this.auth = r, this.stsTokenManager = s, this.accessToken = s.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new ud(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  getIdToken(e) {
    return y(this, null, function* () {
      const n = yield kr(this, this.stsTokenManager.getToken(this.auth, e));
      return se(
        n,
        this.auth,
        "internal-error"
        /* INTERNAL_ERROR */
      ), this.accessToken !== n && (this.accessToken = n, yield this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
    });
  }
  getIdTokenResult(e) {
    return sm(this, e);
  }
  reload() {
    return om(this);
  }
  _assign(e) {
    this !== e && (se(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => Object.assign({}, n)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    return new an(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
  }
  _onReload(e) {
    se(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  _updateTokensIfNecessary(e, n = !1) {
    return y(this, null, function* () {
      let r = !1;
      e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), n && (yield xs(this)), yield this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
    });
  }
  delete() {
    return y(this, null, function* () {
      const e = yield this.getIdToken();
      return yield kr(this, nm(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
    });
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    var r, s, i, a, o, u, l, d;
    const f = (r = n.displayName) !== null && r !== void 0 ? r : void 0, p = (s = n.email) !== null && s !== void 0 ? s : void 0, h = (i = n.phoneNumber) !== null && i !== void 0 ? i : void 0, m = (a = n.photoURL) !== null && a !== void 0 ? a : void 0, _ = (o = n.tenantId) !== null && o !== void 0 ? o : void 0, b = (u = n._redirectEventId) !== null && u !== void 0 ? u : void 0, C = (l = n.createdAt) !== null && l !== void 0 ? l : void 0, O = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0, { uid: A, emailVerified: T, isAnonymous: v, providerData: S, stsTokenManager: R } = n;
    se(
      A && R,
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    );
    const B = Fr.fromJSON(this.name, R);
    se(
      typeof A == "string",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), xt(f, e.name), xt(p, e.name), se(
      typeof T == "boolean",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), se(
      typeof v == "boolean",
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), xt(h, e.name), xt(m, e.name), xt(_, e.name), xt(b, e.name), xt(C, e.name), xt(O, e.name);
    const H = new an({
      uid: A,
      auth: e,
      email: p,
      emailVerified: T,
      displayName: f,
      isAnonymous: v,
      photoURL: m,
      phoneNumber: h,
      tenantId: _,
      stsTokenManager: B,
      createdAt: C,
      lastLoginAt: O
    });
    return S && Array.isArray(S) && (H.providerData = S.map((q) => Object.assign({}, q))), b && (H._redirectEventId = b), H;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static _fromIdTokenResponse(e, n, r = !1) {
    return y(this, null, function* () {
      const s = new Fr();
      s.updateFromServerResponse(n);
      const i = new an({
        uid: n.localId,
        auth: e,
        stsTokenManager: s,
        isAnonymous: r
      });
      return yield xs(i), i;
    });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  _isAvailable() {
    return y(this, null, function* () {
      return !0;
    });
  }
  _set(e, n) {
    return y(this, null, function* () {
      this.storage[e] = n;
    });
  }
  _get(e) {
    return y(this, null, function* () {
      const n = this.storage[e];
      return n === void 0 ? null : n;
    });
  }
  _remove(e) {
    return y(this, null, function* () {
      delete this.storage[e];
    });
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
od.type = "NONE";
const Qu = od;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cs(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Dn {
  constructor(e, n, r) {
    this.persistence = e, this.auth = n, this.userKey = r;
    const { config: s, name: i } = this.auth;
    this.fullUserKey = Cs(this.userKey, s.apiKey, i), this.fullPersistenceKey = Cs("persistence", s.apiKey, i), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  getCurrentUser() {
    return y(this, null, function* () {
      const e = yield this.persistence._get(this.fullUserKey);
      return e ? an._fromJSON(this.auth, e) : null;
    });
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  setPersistence(e) {
    return y(this, null, function* () {
      if (this.persistence === e)
        return;
      const n = yield this.getCurrentUser();
      if (yield this.removeCurrentUser(), this.persistence = e, n)
        return this.setCurrentUser(n);
    });
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static create(e, n, r = "authUser") {
    return y(this, null, function* () {
      if (!n.length)
        return new Dn(Mt(Qu), e, r);
      const s = (yield Promise.all(n.map((l) => y(this, null, function* () {
        if (yield l._isAvailable())
          return l;
      })))).filter((l) => l);
      let i = s[0] || Mt(Qu);
      const a = Cs(r, e.config.apiKey, e.name);
      let o = null;
      for (const l of n)
        try {
          const d = yield l._get(a);
          if (d) {
            const f = an._fromJSON(e, d);
            l !== i && (o = f), i = l;
            break;
          }
        } catch (d) {
        }
      const u = s.filter((l) => l._shouldAllowMigration);
      return !i._shouldAllowMigration || !u.length ? new Dn(i, e, r) : (i = u[0], o && (yield i._set(a, o.toJSON())), yield Promise.all(n.map((l) => y(this, null, function* () {
        if (l !== i)
          try {
            yield l._remove(a);
          } catch (d) {
          }
      }))), new Dn(i, e, r));
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ku(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (dd(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (cd(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (hd(e))
    return "Blackberry";
  if (pd(e))
    return "Webos";
  if ($a(e))
    return "Safari";
  if ((e.includes("chrome/") || ld(e)) && !e.includes("edge/"))
    return "Chrome";
  if (fd(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function cd(t = Ye()) {
  return /firefox\//i.test(t);
}
function $a(t = Ye()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function ld(t = Ye()) {
  return /crios\//i.test(t);
}
function dd(t = Ye()) {
  return /iemobile/i.test(t);
}
function fd(t = Ye()) {
  return /android/i.test(t);
}
function hd(t = Ye()) {
  return /blackberry/i.test(t);
}
function pd(t = Ye()) {
  return /webos/i.test(t);
}
function oi(t = Ye()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function fm(t = Ye()) {
  var e;
  return oi(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function hm() {
  return R0() && document.documentMode === 10;
}
function md(t = Ye()) {
  return oi(t) || fd(t) || pd(t) || hd(t) || /windows phone/i.test(t) || dd(t);
}
function pm() {
  try {
    return !!(window && window !== window.top);
  } catch (t) {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _d(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Ku(Ye());
      break;
    case "Worker":
      n = `${Ku(Ye())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Kr}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mm {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, n) {
    const r = (i) => new Promise((a, o) => {
      try {
        const u = e(i);
        a(u);
      } catch (u) {
        o(u);
      }
    });
    r.onAbort = n, this.queue.push(r);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  runMiddleware(e) {
    return y(this, null, function* () {
      var n;
      if (this.auth.currentUser === e)
        return;
      const r = [];
      try {
        for (const s of this.queue)
          yield s(e), s.onAbort && r.push(s.onAbort);
      } catch (s) {
        r.reverse();
        for (const i of r)
          try {
            i();
          } catch (a) {
          }
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: (n = s) === null || n === void 0 ? void 0 : n.message
        });
      }
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _m {
  constructor(e, n, r) {
    this.app = e, this.heartbeatServiceProvider = n, this.config = r, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new zu(this), this.idTokenSubscription = new zu(this), this.beforeStateQueue = new mm(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = rd, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = r.sdkClientVersion;
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = Mt(n)), this._initializationPromise = this.queue(() => y(this, null, function* () {
      var r, s;
      if (!this._deleted && (this.persistenceManager = yield Dn.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            yield this._popupRedirectResolver._initialize(this);
          } catch (i) {
          }
        yield this.initializeCurrentUser(n), this.lastNotifiedUid = ((s = this.currentUser) === null || s === void 0 ? void 0 : s.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    })), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  _onStorageEvent() {
    return y(this, null, function* () {
      if (this._deleted)
        return;
      const e = yield this.assertedPersistence.getCurrentUser();
      if (!(!this.currentUser && !e)) {
        if (this.currentUser && e && this.currentUser.uid === e.uid) {
          this._currentUser._assign(e), yield this.currentUser.getIdToken();
          return;
        }
        yield this._updateCurrentUser(
          e,
          /* skipBeforeStateCallbacks */
          !0
        );
      }
    });
  }
  initializeCurrentUser(e) {
    return y(this, null, function* () {
      var n;
      const r = yield this.assertedPersistence.getCurrentUser();
      let s = r, i = !1;
      if (e && this.config.authDomain) {
        yield this.getOrInitRedirectPersistenceManager();
        const a = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId, o = s == null ? void 0 : s._redirectEventId, u = yield this.tryRedirectSignIn(e);
        (!a || a === o) && (u != null && u.user) && (s = u.user, i = !0);
      }
      if (!s)
        return this.directlySetCurrentUser(null);
      if (!s._redirectEventId) {
        if (i)
          try {
            yield this.beforeStateQueue.runMiddleware(s);
          } catch (a) {
            s = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(a));
          }
        return s ? this.reloadAndSetCurrentUserOrClear(s) : this.directlySetCurrentUser(null);
      }
      return se(
        this._popupRedirectResolver,
        this,
        "argument-error"
        /* ARGUMENT_ERROR */
      ), yield this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === s._redirectEventId ? this.directlySetCurrentUser(s) : this.reloadAndSetCurrentUserOrClear(s);
    });
  }
  tryRedirectSignIn(e) {
    return y(this, null, function* () {
      let n = null;
      try {
        n = yield this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch (r) {
        yield this._setRedirectUser(null);
      }
      return n;
    });
  }
  reloadAndSetCurrentUserOrClear(e) {
    return y(this, null, function* () {
      var n;
      try {
        yield xs(e);
      } catch (r) {
        if (((n = r) === null || n === void 0 ? void 0 : n.code) !== "auth/network-request-failed")
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    });
  }
  useDeviceLanguage() {
    this.languageCode = Jp();
  }
  _delete() {
    return y(this, null, function* () {
      this._deleted = !0;
    });
  }
  updateCurrentUser(e) {
    return y(this, null, function* () {
      const n = e ? Ve(e) : null;
      return n && se(
        n.auth.config.apiKey === this.config.apiKey,
        this,
        "invalid-user-token"
        /* INVALID_AUTH */
      ), this._updateCurrentUser(n && n._clone(this));
    });
  }
  _updateCurrentUser(e, n = !1) {
    return y(this, null, function* () {
      if (!this._deleted)
        return e && se(
          this.tenantId === e.tenantId,
          this,
          "tenant-id-mismatch"
          /* TENANT_ID_MISMATCH */
        ), n || (yield this.beforeStateQueue.runMiddleware(e)), this.queue(() => y(this, null, function* () {
          yield this.directlySetCurrentUser(e), this.notifyAuthListeners();
        }));
    });
  }
  signOut() {
    return y(this, null, function* () {
      return yield this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && (yield this._setRedirectUser(null)), this._updateCurrentUser(
        null,
        /* skipBeforeStateCallbacks */
        !0
      );
    });
  }
  setPersistence(e) {
    return this.queue(() => y(this, null, function* () {
      yield this.assertedPersistence.setPersistence(Mt(e));
    }));
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new gn("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  _setRedirectUser(e, n) {
    return y(this, null, function* () {
      const r = yield this.getOrInitRedirectPersistenceManager(n);
      return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
    });
  }
  getOrInitRedirectPersistenceManager(e) {
    return y(this, null, function* () {
      if (!this.redirectPersistenceManager) {
        const n = e && Mt(e) || this._popupRedirectResolver;
        se(
          n,
          this,
          "argument-error"
          /* ARGUMENT_ERROR */
        ), this.redirectPersistenceManager = yield Dn.create(
          this,
          [Mt(n._redirectPersistence)],
          "redirectUser"
          /* REDIRECT_USER */
        ), this.redirectUser = yield this.redirectPersistenceManager.getCurrentUser();
      }
      return this.redirectPersistenceManager;
    });
  }
  _redirectUserForId(e) {
    return y(this, null, function* () {
      var n, r;
      return this._isInitialized && (yield this.queue(() => y(this, null, function* () {
      }))), ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
    });
  }
  _persistUserIfCurrent(e) {
    return y(this, null, function* () {
      if (e === this.currentUser)
        return this.queue(() => y(this, null, function* () {
          return this.directlySetCurrentUser(e);
        }));
    });
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && n !== void 0 ? n : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, s) {
    if (this._deleted)
      return () => {
      };
    const i = typeof n == "function" ? n : n.next.bind(n), a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return se(
      a,
      this,
      "internal-error"
      /* INTERNAL_ERROR */
    ), a.then(() => i(this.currentUser)), typeof n == "function" ? e.addObserver(n, r, s) : e.addObserver(n);
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  directlySetCurrentUser(e) {
    return y(this, null, function* () {
      this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? yield this.assertedPersistence.setCurrentUser(e) : yield this.assertedPersistence.removeCurrentUser();
    });
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return se(
      this.persistenceManager,
      this,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = _d(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  _getAdditionalHeaders() {
    return y(this, null, function* () {
      var e;
      const n = {
        [
          "X-Client-Version"
          /* X_CLIENT_VERSION */
        ]: this.clientVersion
      };
      this.app.options.appId && (n[
        "X-Firebase-gmpid"
        /* X_FIREBASE_GMPID */
      ] = this.app.options.appId);
      const r = yield (e = this.heartbeatServiceProvider.getImmediate({
        optional: !0
      })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader();
      return r && (n[
        "X-Firebase-Client"
        /* X_FIREBASE_CLIENT */
      ] = r), n;
    });
  }
}
function Ya(t) {
  return Ve(t);
}
let zu = class {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = P0((n) => this.observer = n);
  }
  get next() {
    return se(
      this.observer,
      this.auth,
      "internal-error"
      /* INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga {
  /** @internal */
  constructor(e, n) {
    this.providerId = e, this.signInMethod = n;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return Dt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Dt("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return Dt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Dt("not implemented");
  }
}
function Em(t, e) {
  return y(this, null, function* () {
    return Xr(t, "POST", "/v1/accounts:update", e);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gm(t, e) {
  return y(this, null, function* () {
    return ui(t, "POST", "/v1/accounts:signInWithPassword", ai(t, e));
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bm(t, e) {
  return y(this, null, function* () {
    return ui(t, "POST", "/v1/accounts:signInWithEmailLink", ai(t, e));
  });
}
function Tm(t, e) {
  return y(this, null, function* () {
    return ui(t, "POST", "/v1/accounts:signInWithEmailLink", ai(t, e));
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br extends Ga {
  /** @internal */
  constructor(e, n, r, s = null) {
    super("password", r), this._email = e, this._password = n, this._tenantId = s;
  }
  /** @internal */
  static _fromEmailAndPassword(e, n) {
    return new Br(
      e,
      n,
      "password"
      /* EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, n, r = null) {
    return new Br(e, n, "emailLink", r);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    if (n != null && n.email && (n != null && n.password)) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return y(this, null, function* () {
      switch (this.signInMethod) {
        case "password":
          return gm(e, {
            returnSecureToken: !0,
            email: this._email,
            password: this._password
          });
        case "emailLink":
          return bm(e, {
            email: this._email,
            oobCode: this._password
          });
        default:
          gt(
            e,
            "internal-error"
            /* INTERNAL_ERROR */
          );
      }
    });
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return y(this, null, function* () {
      switch (this.signInMethod) {
        case "password":
          return Em(e, {
            idToken: n,
            returnSecureToken: !0,
            email: this._email,
            password: this._password
          });
        case "emailLink":
          return Tm(e, {
            idToken: n,
            email: this._email,
            oobCode: this._password
          });
        default:
          gt(
            e,
            "internal-error"
            /* INTERNAL_ERROR */
          );
      }
    });
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(t, e) {
  return y(this, null, function* () {
    return ui(t, "POST", "/v1/accounts:signInWithIdp", ai(t, e));
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Im = "http://localhost";
class cn extends Ga {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new cn(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : gt(
      "argument-error"
      /* ARGUMENT_ERROR */
    ), n;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: s } = n, i = Ha(n, ["providerId", "signInMethod"]);
    if (!r || !s)
      return null;
    const a = new cn(r, s);
    return a.idToken = i.idToken || void 0, a.accessToken = i.accessToken || void 0, a.secret = i.secret, a.nonce = i.nonce, a.pendingToken = i.pendingToken || null, a;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Mn(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return r.idToken = n, Mn(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, Mn(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: Im,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = Wr(n);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Am(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function ym(t) {
  const e = pr(mr(t)).link, n = e ? pr(mr(e)).deep_link_id : null, r = pr(mr(t)).deep_link_id;
  return (r ? pr(mr(r)).link : null) || r || n || e || t;
}
class Wa {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    var n, r, s, i, a, o;
    const u = pr(mr(e)), l = (n = u.apiKey) !== null && n !== void 0 ? n : null, d = (r = u.oobCode) !== null && r !== void 0 ? r : null, f = Am((s = u.mode) !== null && s !== void 0 ? s : null);
    se(
      l && d && f,
      "argument-error"
      /* ARGUMENT_ERROR */
    ), this.apiKey = l, this.operation = f, this.code = d, this.continueUrl = (i = u.continueUrl) !== null && i !== void 0 ? i : null, this.languageCode = (a = u.languageCode) !== null && a !== void 0 ? a : null, this.tenantId = (o = u.tenantId) !== null && o !== void 0 ? o : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const n = ym(e);
    try {
      return new Wa(n);
    } catch (r) {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn {
  constructor() {
    this.providerId = Xn.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, n) {
    return Br._fromEmailAndPassword(e, n);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, n) {
    const r = Wa.parseLink(n);
    return se(
      r,
      "argument-error"
      /* ARGUMENT_ERROR */
    ), Br._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
Xn.PROVIDER_ID = "password";
Xn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Xn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr extends Ed {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt extends Jr {
  constructor() {
    super(
      "facebook.com"
      /* FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return cn._fromParams({
      providerId: jt.PROVIDER_ID,
      signInMethod: jt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return jt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return jt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return jt.credential(e.oauthAccessToken);
    } catch (n) {
      return null;
    }
  }
}
jt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
jt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt extends Jr {
  constructor() {
    super(
      "google.com"
      /* GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, n) {
    return cn._fromParams({
      providerId: qt.PROVIDER_ID,
      signInMethod: qt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return qt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return qt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r)
      return null;
    try {
      return qt.credential(n, r);
    } catch (s) {
      return null;
    }
  }
}
qt.GOOGLE_SIGN_IN_METHOD = "google.com";
qt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t extends Jr {
  constructor() {
    super(
      "github.com"
      /* GITHUB */
    );
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */
  static credential(e) {
    return cn._fromParams({
      providerId: $t.PROVIDER_ID,
      signInMethod: $t.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return $t.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return $t.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return $t.credential(e.oauthAccessToken);
    } catch (n) {
      return null;
    }
  }
}
$t.GITHUB_SIGN_IN_METHOD = "github.com";
$t.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Jr {
  constructor() {
    super(
      "twitter.com"
      /* TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, n) {
    return cn._fromParams({
      providerId: Yt.PROVIDER_ID,
      signInMethod: Yt.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Yt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Yt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r)
      return null;
    try {
      return Yt.credential(n, r);
    } catch (s) {
      return null;
    }
  }
}
Yt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Yt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static _fromIdTokenResponse(e, n, r, s = !1) {
    return y(this, null, function* () {
      const i = yield an._fromIdTokenResponse(e, r, s), a = Xu(r);
      return new Bn({
        user: i,
        providerId: a,
        _tokenResponse: r,
        operationType: n
      });
    });
  }
  static _forOperation(e, n, r) {
    return y(this, null, function* () {
      yield e._updateTokensIfNecessary(
        r,
        /* reload */
        !0
      );
      const s = Xu(r);
      return new Bn({
        user: e,
        providerId: s,
        _tokenResponse: r,
        operationType: n
      });
    });
  }
}
function Xu(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs extends bt {
  constructor(e, n, r, s) {
    var i;
    super(n.code, n.message), this.operationType = r, this.user = s, Object.setPrototypeOf(this, Hs.prototype), this.customData = {
      appName: e.name,
      tenantId: (i = e.tenantId) !== null && i !== void 0 ? i : void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, n, r, s) {
    return new Hs(e, n, r, s);
  }
}
function gd(t, e, n, r) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required" ? Hs._fromErrorAndOperation(t, i, e, r) : i;
  });
}
function vm(t, e, n = !1) {
  return y(this, null, function* () {
    const r = yield kr(t, e._linkToIdToken(t.auth, yield t.getIdToken()), n);
    return Bn._forOperation(t, "link", r);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sm(t, e, n = !1) {
  return y(this, null, function* () {
    var r;
    const { auth: s } = t, i = "reauthenticate";
    try {
      const a = yield kr(t, gd(s, i, e, t), n);
      se(
        a.idToken,
        s,
        "internal-error"
        /* INTERNAL_ERROR */
      );
      const o = qa(a.idToken);
      se(
        o,
        s,
        "internal-error"
        /* INTERNAL_ERROR */
      );
      const { sub: u } = o;
      return se(
        t.uid === u,
        s,
        "user-mismatch"
        /* USER_MISMATCH */
      ), Bn._forOperation(t, i, a);
    } catch (a) {
      throw ((r = a) === null || r === void 0 ? void 0 : r.code) === "auth/user-not-found" && gt(
        s,
        "user-mismatch"
        /* USER_MISMATCH */
      ), a;
    }
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bd(t, e, n = !1) {
  return y(this, null, function* () {
    const r = "signIn", s = yield gd(t, r, e), i = yield Bn._fromIdTokenResponse(t, r, s);
    return n || (yield t._updateCurrentUser(i.user)), i;
  });
}
function Cm(t, e) {
  return y(this, null, function* () {
    return bd(Ya(t), e);
  });
}
function Om(t, e, n) {
  return Cm(Ve(t), Xn.credential(e, n));
}
function Rm(t, e, n, r) {
  return Ve(t).onAuthStateChanged(e, n, r);
}
function Nm(t) {
  return Ve(t).signOut();
}
const Vs = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Td {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Vs, "1"), this.storage.removeItem(Vs), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch (e) {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wm() {
  const t = Ye();
  return $a(t) || oi(t);
}
const Lm = 1e3, Dm = 10;
class Pn extends Td {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = wm() && pm(), this.fallbackToPolling = md(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n), s = this.localCache[n];
      r !== s && e(n, s, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((a, o, u) => {
        this.notifyListeners(a, u);
      });
      return;
    }
    const r = e.key;
    if (n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const a = this.storage.getItem(r);
      if (e.newValue !== a)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n)
        return;
    }
    const s = () => {
      const a = this.storage.getItem(r);
      !n && this.localCache[r] === a || this.notifyListeners(r, a);
    }, i = this.storage.getItem(r);
    hm() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(s, Dm) : s();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const s of Array.from(r))
        s(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, n, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: n,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, Lm);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  _set(e, n) {
    return y(this, null, function* () {
      yield zt(Pn.prototype, this, "_set").call(this, e, n), this.localCache[e] = JSON.stringify(n);
    });
  }
  _get(e) {
    return y(this, null, function* () {
      const n = yield zt(Pn.prototype, this, "_get").call(this, e);
      return this.localCache[e] = JSON.stringify(n), n;
    });
  }
  _remove(e) {
    return y(this, null, function* () {
      yield zt(Pn.prototype, this, "_remove").call(this, e), delete this.localCache[e];
    });
  }
}
Pn.type = "LOCAL";
const Mm = Pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Id extends Td {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* SESSION */
    );
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
Id.type = "SESSION";
const Ad = Id;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pm(t) {
  return Promise.all(t.map((e) => y(this, null, function* () {
    try {
      return {
        fulfilled: !0,
        value: yield e
      };
    } catch (n) {
      return {
        fulfilled: !1,
        reason: n
      };
    }
  })));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const n = this.receivers.find((s) => s.isListeningto(e));
    if (n)
      return n;
    const r = new ci(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  handleEvent(e) {
    return y(this, null, function* () {
      const n = e, { eventId: r, eventType: s, data: i } = n.data, a = this.handlersMap[s];
      if (!(a != null && a.size))
        return;
      n.ports[0].postMessage({
        status: "ack",
        eventId: r,
        eventType: s
      });
      const o = Array.from(a).map((l) => y(this, null, function* () {
        return l(n.origin, i);
      })), u = yield Pm(o);
      n.ports[0].postMessage({
        status: "done",
        eventId: r,
        eventType: s,
        response: u
      });
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(n);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n), (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
ci.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qa(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++)
    n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class km {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  _send(e, n, r = 50) {
    return y(this, null, function* () {
      const s = typeof MessageChannel != "undefined" ? new MessageChannel() : null;
      if (!s)
        throw new Error(
          "connection_unavailable"
          /* CONNECTION_UNAVAILABLE */
        );
      let i, a;
      return new Promise((o, u) => {
        const l = Qa("", 20);
        s.port1.start();
        const d = setTimeout(() => {
          u(new Error(
            "unsupported_event"
            /* UNSUPPORTED_EVENT */
          ));
        }, r);
        a = {
          messageChannel: s,
          onMessage(f) {
            const p = f;
            if (p.data.eventId === l)
              switch (p.data.status) {
                case "ack":
                  clearTimeout(d), i = setTimeout(
                    () => {
                      u(new Error(
                        "timeout"
                        /* TIMEOUT */
                      ));
                    },
                    3e3
                    /* COMPLETION */
                  );
                  break;
                case "done":
                  clearTimeout(i), o(p.data.response);
                  break;
                default:
                  clearTimeout(d), clearTimeout(i), u(new Error(
                    "invalid_response"
                    /* INVALID_RESPONSE */
                  ));
                  break;
              }
          }
        }, this.handlers.add(a), s.port1.addEventListener("message", a.onMessage), this.target.postMessage({
          eventType: e,
          eventId: l,
          data: n
        }, [s.port2]);
      }).finally(() => {
        a && this.removeMessageHandler(a);
      });
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt() {
  return window;
}
function Fm(t) {
  vt().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yd() {
  return typeof vt().WorkerGlobalScope != "undefined" && typeof vt().importScripts == "function";
}
function Bm() {
  return y(this, null, function* () {
    if (!(navigator != null && navigator.serviceWorker))
      return null;
    try {
      return (yield navigator.serviceWorker.ready).active;
    } catch (t) {
      return null;
    }
  });
}
function Um() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function xm() {
  return yd() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vd = "firebaseLocalStorageDb", Hm = 1, js = "firebaseLocalStorage", Sd = "fbase_key";
class Zr {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        n(this.request.error);
      });
    });
  }
}
function li(t, e) {
  return t.transaction([js], e ? "readwrite" : "readonly").objectStore(js);
}
function Vm() {
  const t = indexedDB.deleteDatabase(vd);
  return new Zr(t).toPromise();
}
function ga() {
  const t = indexedDB.open(vd, Hm);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const r = t.result;
      try {
        r.createObjectStore(js, { keyPath: Sd });
      } catch (s) {
        n(s);
      }
    }), t.addEventListener("success", () => y(this, null, function* () {
      const r = t.result;
      r.objectStoreNames.contains(js) ? e(r) : (r.close(), yield Vm(), e(yield ga()));
    }));
  });
}
function Ju(t, e, n) {
  return y(this, null, function* () {
    const r = li(t, !0).put({
      [Sd]: e,
      value: n
    });
    return new Zr(r).toPromise();
  });
}
function jm(t, e) {
  return y(this, null, function* () {
    const n = li(t, !1).get(e), r = yield new Zr(n).toPromise();
    return r === void 0 ? null : r.value;
  });
}
function Zu(t, e) {
  const n = li(t, !0).delete(e);
  return new Zr(n).toPromise();
}
const qm = 800, $m = 3;
class Cd {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  _openDb() {
    return y(this, null, function* () {
      return this.db ? this.db : (this.db = yield ga(), this.db);
    });
  }
  _withRetries(e) {
    return y(this, null, function* () {
      let n = 0;
      for (; ; )
        try {
          const r = yield this._openDb();
          return yield e(r);
        } catch (r) {
          if (n++ > $m)
            throw r;
          this.db && (this.db.close(), this.db = void 0);
        }
    });
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  initializeServiceWorkerMessaging() {
    return y(this, null, function* () {
      return yd() ? this.initializeReceiver() : this.initializeSender();
    });
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  initializeReceiver() {
    return y(this, null, function* () {
      this.receiver = ci._getInstance(xm()), this.receiver._subscribe("keyChanged", (e, n) => y(this, null, function* () {
        return {
          keyProcessed: (yield this._poll()).includes(n.key)
        };
      })), this.receiver._subscribe("ping", (e, n) => y(this, null, function* () {
        return [
          "keyChanged"
          /* KEY_CHANGED */
        ];
      }));
    });
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  initializeSender() {
    return y(this, null, function* () {
      var e, n;
      if (this.activeServiceWorker = yield Bm(), !this.activeServiceWorker)
        return;
      this.sender = new km(this.activeServiceWorker);
      const r = yield this.sender._send(
        "ping",
        {},
        800
        /* LONG_ACK */
      );
      r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((n = r[0]) === null || n === void 0) && n.value.includes(
        "keyChanged"
        /* KEY_CHANGED */
      ) && (this.serviceWorkerReceiverAvailable = !0);
    });
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  notifyServiceWorker(e) {
    return y(this, null, function* () {
      if (!(!this.sender || !this.activeServiceWorker || Um() !== this.activeServiceWorker))
        try {
          yield this.sender._send(
            "keyChanged",
            { key: e },
            // Use long timeout if receiver has previously responded to a ping from us.
            this.serviceWorkerReceiverAvailable ? 800 : 50
            /* ACK */
          );
        } catch (n) {
        }
    });
  }
  _isAvailable() {
    return y(this, null, function* () {
      try {
        if (!indexedDB)
          return !1;
        const e = yield ga();
        return yield Ju(e, Vs, "1"), yield Zu(e, Vs), !0;
      } catch (e) {
      }
      return !1;
    });
  }
  _withPendingWrite(e) {
    return y(this, null, function* () {
      this.pendingWrites++;
      try {
        yield e();
      } finally {
        this.pendingWrites--;
      }
    });
  }
  _set(e, n) {
    return y(this, null, function* () {
      return this._withPendingWrite(() => y(this, null, function* () {
        return yield this._withRetries((r) => Ju(r, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e);
      }));
    });
  }
  _get(e) {
    return y(this, null, function* () {
      const n = yield this._withRetries((r) => jm(r, e));
      return this.localCache[e] = n, n;
    });
  }
  _remove(e) {
    return y(this, null, function* () {
      return this._withPendingWrite(() => y(this, null, function* () {
        return yield this._withRetries((n) => Zu(n, e)), delete this.localCache[e], this.notifyServiceWorker(e);
      }));
    });
  }
  _poll() {
    return y(this, null, function* () {
      const e = yield this._withRetries((s) => {
        const i = li(s, !1).getAll();
        return new Zr(i).toPromise();
      });
      if (!e)
        return [];
      if (this.pendingWrites !== 0)
        return [];
      const n = [], r = /* @__PURE__ */ new Set();
      for (const { fbase_key: s, value: i } of e)
        r.add(s), JSON.stringify(this.localCache[s]) !== JSON.stringify(i) && (this.notifyListeners(s, i), n.push(s));
      for (const s of Object.keys(this.localCache))
        this.localCache[s] && !r.has(s) && (this.notifyListeners(s, null), n.push(s));
      return n;
    });
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const s of Array.from(r))
        s(n);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => y(this, null, function* () {
      return this._poll();
    }), qm);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Cd.type = "LOCAL";
const Ym = Cd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gm() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Wm(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t), r.onload = e, r.onerror = (s) => {
      const i = yt(
        "internal-error"
        /* INTERNAL_ERROR */
      );
      i.customData = s, n(i);
    }, r.type = "text/javascript", r.charset = "UTF-8", Gm().appendChild(r);
  });
}
function Qm(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new zr(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Km(t, e) {
  return e ? Mt(e) : (se(
    t._popupRedirectResolver,
    t,
    "argument-error"
    /* ARGUMENT_ERROR */
  ), t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka extends Ga {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return Mn(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Mn(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Mn(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (n.idToken = e), n;
  }
}
function zm(t) {
  return bd(t.auth, new Ka(t), t.bypassAuthState);
}
function Xm(t) {
  const { auth: e, user: n } = t;
  return se(
    n,
    e,
    "internal-error"
    /* INTERNAL_ERROR */
  ), Sm(n, new Ka(t), t.bypassAuthState);
}
function Jm(t) {
  return y(this, null, function* () {
    const { auth: e, user: n } = t;
    return se(
      n,
      e,
      "internal-error"
      /* INTERNAL_ERROR */
    ), vm(n, new Ka(t), t.bypassAuthState);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Od {
  constructor(e, n, r, s, i = !1) {
    this.auth = e, this.resolver = r, this.user = s, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n];
  }
  execute() {
    return new Promise((e, n) => y(this, null, function* () {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        this.eventManager = yield this.resolver._initialize(this.auth), yield this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    }));
  }
  onAuthEvent(e) {
    return y(this, null, function* () {
      const { urlResponse: n, sessionId: r, postBody: s, tenantId: i, error: a, type: o } = e;
      if (a) {
        this.reject(a);
        return;
      }
      const u = {
        auth: this.auth,
        requestUri: n,
        sessionId: r,
        tenantId: i || void 0,
        postBody: s || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState
      };
      try {
        this.resolve(yield this.getIdpTask(o)(u));
      } catch (l) {
        this.reject(l);
      }
    });
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return zm;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Jm;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Xm;
      default:
        gt(
          this.auth,
          "internal-error"
          /* INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Ft(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Ft(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zm = new zr(2e3, 1e4);
class wn extends Od {
  constructor(e, n, r, s, i) {
    super(e, n, s, i), this.provider = r, this.authWindow = null, this.pollId = null, wn.currentPopupAction && wn.currentPopupAction.cancel(), wn.currentPopupAction = this;
  }
  executeNotNull() {
    return y(this, null, function* () {
      const e = yield this.execute();
      return se(
        e,
        this.auth,
        "internal-error"
        /* INTERNAL_ERROR */
      ), e;
    });
  }
  onExecution() {
    return y(this, null, function* () {
      Ft(this.filter.length === 1, "Popup operations only handle one event");
      const e = Qa();
      this.authWindow = yield this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        // There's always one, see constructor
        e
      ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(yt(
          this.auth,
          "web-storage-unsupported"
          /* WEB_STORAGE_UNSUPPORTED */
        ));
      }), this.pollUserCancellation();
    });
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(yt(
      this.auth,
      "cancelled-popup-request"
      /* EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, wn.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (!((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(yt(
              this.auth,
              "popup-closed-by-user"
              /* POPUP_CLOSED_BY_USER */
            ));
          },
          2e3
          /* AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Zm.get());
    };
    e();
  }
}
wn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const e_ = "pendingRedirect", Os = /* @__PURE__ */ new Map();
class br extends Od {
  constructor(e, n, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* UNKNOWN */
    ], n, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  execute() {
    return y(this, null, function* () {
      let e = Os.get(this.auth._key());
      if (!e) {
        try {
          const r = (yield t_(this.resolver, this.auth)) ? yield zt(br.prototype, this, "execute").call(this) : null;
          e = () => Promise.resolve(r);
        } catch (n) {
          e = () => Promise.reject(n);
        }
        Os.set(this.auth._key(), e);
      }
      return this.bypassAuthState || Os.set(this.auth._key(), () => Promise.resolve(null)), e();
    });
  }
  onAuthEvent(e) {
    return y(this, null, function* () {
      if (e.type === "signInViaRedirect")
        return zt(br.prototype, this, "onAuthEvent").call(this, e);
      if (e.type === "unknown") {
        this.resolve(null);
        return;
      }
      if (e.eventId) {
        const n = yield this.auth._redirectUserForId(e.eventId);
        if (n)
          return this.user = n, zt(br.prototype, this, "onAuthEvent").call(this, e);
        this.resolve(null);
      }
    });
  }
  onExecution() {
    return y(this, null, function* () {
    });
  }
  cleanUp() {
  }
}
function t_(t, e) {
  return y(this, null, function* () {
    const n = s_(e), r = r_(t);
    if (!(yield r._isAvailable()))
      return !1;
    const s = (yield r._get(n)) === "true";
    return yield r._remove(n), s;
  });
}
function n_(t, e) {
  Os.set(t._key(), e);
}
function r_(t) {
  return Mt(t._redirectPersistence);
}
function s_(t) {
  return Cs(e_, t.config.apiKey, t.name);
}
function i_(t, e, n = !1) {
  return y(this, null, function* () {
    const r = Ya(t), s = Km(r, e), a = yield new br(r, s, n).execute();
    return a && !n && (delete a.user._redirectEventId, yield r._persistUserIfCurrent(a.user), yield r._setRedirectUser(null, e)), a;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a_ = 10 * 60 * 1e3;
class u_ {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let n = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (n = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !o_(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !Rd(e)) {
      const s = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      n.onError(yt(this.auth, s));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= a_ && this.cachedEventUids.clear(), this.cachedEventUids.has(eo(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(eo(e)), this.lastProcessedEventTime = Date.now();
  }
}
function eo(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function Rd({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function o_(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Rd(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c_(n) {
  return y(this, arguments, function* (t, e = {}) {
    return Xr(t, "GET", "/v1/projects", e);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, d_ = /^https?/;
function f_(t) {
  return y(this, null, function* () {
    if (t.config.emulator)
      return;
    const { authorizedDomains: e } = yield c_(t);
    for (const n of e)
      try {
        if (h_(n))
          return;
      } catch (r) {
      }
    gt(
      t,
      "unauthorized-domain"
      /* INVALID_ORIGIN */
    );
  });
}
function h_(t) {
  const e = Ea(), { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const a = new URL(t);
    return a.hostname === "" && r === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && a.hostname === r;
  }
  if (!d_.test(n))
    return !1;
  if (l_.test(t))
    return r === t;
  const s = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p_ = new zr(3e4, 6e4);
function to() {
  const t = vt().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function m_(t) {
  return new Promise((e, n) => {
    var r, s, i;
    function a() {
      to(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          to(), n(yt(
            t,
            "network-request-failed"
            /* NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: p_.get()
      });
    }
    if (!((s = (r = vt().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || s === void 0) && s.Iframe)
      e(gapi.iframes.getContext());
    else if (!((i = vt().gapi) === null || i === void 0) && i.load)
      a();
    else {
      const o = Qm("iframefcb");
      return vt()[o] = () => {
        gapi.load ? a() : n(yt(
          t,
          "network-request-failed"
          /* NETWORK_REQUEST_FAILED */
        ));
      }, Wm(`https://apis.google.com/js/api.js?onload=${o}`).catch((u) => n(u));
    }
  }).catch((e) => {
    throw Rs = null, e;
  });
}
let Rs = null;
function __(t) {
  return Rs = Rs || m_(t), Rs;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E_ = new zr(5e3, 15e3), g_ = "__/auth/iframe", b_ = "emulator/auth/iframe", T_ = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, I_ = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function A_(t) {
  const e = t.config;
  se(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? ja(e, b_) : `https://${t.config.authDomain}/${g_}`, r = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Kr
  }, s = I_.get(t.config.apiHost);
  s && (r.eid = s);
  const i = t._getFrameworks();
  return i.length && (r.fw = i.join(",")), `${n}?${Wr(r).slice(1)}`;
}
function y_(t) {
  return y(this, null, function* () {
    const e = yield __(t), n = vt().gapi;
    return se(
      n,
      t,
      "internal-error"
      /* INTERNAL_ERROR */
    ), e.open({
      where: document.body,
      url: A_(t),
      messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      attributes: T_,
      dontclear: !0
    }, (r) => new Promise((s, i) => y(this, null, function* () {
      yield r.restyle({
        // Prevent iframe from closing on mouse out.
        setHideOnLeave: !1
      });
      const a = yt(
        t,
        "network-request-failed"
        /* NETWORK_REQUEST_FAILED */
      ), o = vt().setTimeout(() => {
        i(a);
      }, E_.get());
      function u() {
        vt().clearTimeout(o), s(r);
      }
      r.ping(u).then(u, () => {
        i(a);
      });
    })));
  });
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v_ = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, S_ = 500, C_ = 600, O_ = "_blank", R_ = "http://localhost";
class no {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch (e) {
      }
  }
}
function N_(t, e, n, r = S_, s = C_) {
  const i = Math.max((window.screen.availHeight - s) / 2, 0).toString(), a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let o = "";
  const u = Object.assign(Object.assign({}, v_), {
    width: r.toString(),
    height: s.toString(),
    top: i,
    left: a
  }), l = Ye().toLowerCase();
  n && (o = ld(l) ? O_ : n), cd(l) && (e = e || R_, u.scrollbars = "yes");
  const d = Object.entries(u).reduce((p, [h, m]) => `${p}${h}=${m},`, "");
  if (fm(l) && o !== "_self")
    return w_(e || "", o), new no(null);
  const f = window.open(e || "", o, d);
  se(
    f,
    t,
    "popup-blocked"
    /* POPUP_BLOCKED */
  );
  try {
    f.focus();
  } catch (p) {
  }
  return new no(f);
}
function w_(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L_ = "__/auth/handler", D_ = "emulator/auth/handler";
function ro(t, e, n, r, s, i) {
  se(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* MISSING_AUTH_DOMAIN */
  ), se(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* INVALID_API_KEY */
  );
  const a = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Kr,
    eventId: s
  };
  if (e instanceof Ed) {
    e.setDefaultLanguage(t.languageCode), a.providerId = e.providerId || "", M0(e.getCustomParameters()) || (a.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [u, l] of Object.entries(i || {}))
      a[u] = l;
  }
  if (e instanceof Jr) {
    const u = e.getScopes().filter((l) => l !== "");
    u.length > 0 && (a.scopes = u.join(","));
  }
  t.tenantId && (a.tid = t.tenantId);
  const o = a;
  for (const u of Object.keys(o))
    o[u] === void 0 && delete o[u];
  return `${M_(t)}?${Wr(o).slice(1)}`;
}
function M_({ config: t }) {
  return t.emulator ? ja(t, D_) : `https://${t.authDomain}/${L_}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ji = "webStorageSupport";
class P_ {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Ad, this._completeRedirectFn = i_, this._overrideRedirectResult = n_;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  _openPopup(e, n, r, s) {
    return y(this, null, function* () {
      var i;
      Ft((i = this.eventManagers[e._key()]) === null || i === void 0 ? void 0 : i.manager, "_initialize() not called before _openPopup()");
      const a = ro(e, n, r, Ea(), s);
      return N_(e, a, Qa());
    });
  }
  _openRedirect(e, n, r, s) {
    return y(this, null, function* () {
      return yield this._originValidation(e), Fm(ro(e, n, r, Ea(), s)), new Promise(() => {
      });
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: s, promise: i } = this.eventManagers[n];
      return s ? Promise.resolve(s) : (Ft(i, "If manager is not set, promise should be"), i);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: r }, r.catch(() => {
      delete this.eventManagers[n];
    }), r;
  }
  initAndGetManager(e) {
    return y(this, null, function* () {
      const n = yield y_(e), r = new u_(e);
      return n.register("authEvent", (s) => (se(
        s == null ? void 0 : s.authEvent,
        e,
        "invalid-auth-event"
        /* INVALID_AUTH_EVENT */
      ), {
        status: r.onEvent(s.authEvent) ? "ACK" : "ERROR"
        /* ERROR */
      }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = n, r;
    });
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(ji, { type: ji }, (s) => {
      var i;
      const a = (i = s == null ? void 0 : s[0]) === null || i === void 0 ? void 0 : i[ji];
      a !== void 0 && n(!!a), gt(
        e,
        "internal-error"
        /* INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = f_(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return md() || $a() || oi();
  }
}
const k_ = P_;
var so = "@firebase/auth", io = "0.20.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F_ {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  getToken(e) {
    return y(this, null, function* () {
      return this.assertAuthConfigured(), yield this.auth._initializationPromise, this.auth.currentUser ? { accessToken: yield this.auth.currentUser.getIdToken(e) } : null;
    });
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const n = this.auth.onIdTokenChanged((r) => {
      var s;
      e(((s = r) === null || s === void 0 ? void 0 : s.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    se(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B_(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function U_(t) {
  Ct(new Et(
    "auth",
    (e, { options: n }) => {
      const r = e.getProvider("app").getImmediate(), s = e.getProvider("heartbeat"), { apiKey: i, authDomain: a } = r.options;
      return ((o, u) => {
        se(i && !i.includes(":"), "invalid-api-key", { appName: o.name }), se(!(a != null && a.includes(":")), "argument-error", {
          appName: o.name
        });
        const l = {
          apiKey: i,
          authDomain: a,
          clientPlatform: t,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: _d(t)
        }, d = new _m(o, u, l);
        return Kp(d, n), d;
      })(r, s);
    },
    "PUBLIC"
    /* PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* EXPLICIT */
  ).setInstanceCreatedCallback((e, n, r) => {
    e.getProvider(
      "auth-internal"
      /* AUTH_INTERNAL */
    ).initialize();
  })), Ct(new Et(
    "auth-internal",
    (e) => {
      const n = Ya(e.getProvider(
        "auth"
        /* AUTH */
      ).getImmediate());
      return ((r) => new F_(r))(n);
    },
    "PRIVATE"
    /* PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* EXPLICIT */
  )), ct(so, io, B_(t)), ct(so, io, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x_(t = Zl()) {
  const e = Qr(t, "auth");
  return e.isInitialized() ? e.getImmediate() : Qp(t, {
    popupRedirectResolver: k_,
    persistence: [
      Ym,
      Mm,
      Ad
    ]
  });
}
U_(
  "Browser"
  /* BROWSER */
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
ot.UNAUTHENTICATED = new ot(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
ot.GOOGLE_CREDENTIALS = new ot("google-credentials-uid"), ot.FIRST_PARTY = new ot("first-party-uid"), ot.MOCK_USER = new ot("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jn = "9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un = new ii("@firebase/firestore");
function qs(t, ...e) {
  if (Un.logLevel <= _e.DEBUG) {
    const n = e.map(Xa);
    Un.debug(`Firestore (${Jn}): ${t}`, ...n);
  }
}
function za(t, ...e) {
  if (Un.logLevel <= _e.ERROR) {
    const n = e.map(Xa);
    Un.error(`Firestore (${Jn}): ${t}`, ...n);
  }
}
function H_(t, ...e) {
  if (Un.logLevel <= _e.WARN) {
    const n = e.map(Xa);
    Un.warn(`Firestore (${Jn}): ${t}`, ...n);
  }
}
function Xa(t) {
  if (typeof t == "string")
    return t;
  try {
    return e = t, JSON.stringify(e);
  } catch (n) {
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Se(t = "Unexpected state") {
  const e = `FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ` + t;
  throw za(e), new Error(e);
}
function Ze(t, e) {
  t || Se();
}
function es(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao = "ok", V_ = "cancelled", Tr = "unknown", ae = "invalid-argument", j_ = "deadline-exceeded", q_ = "not-found", $_ = "permission-denied", ba = "unauthenticated", Y_ = "resource-exhausted", xn = "failed-precondition", G_ = "aborted", W_ = "out-of-range", Nd = "unimplemented", Q_ = "internal", K_ = "unavailable";
class te extends bt {
  /** @hideconstructor */
  constructor(e, n) {
    super(e, n), this.code = e, this.message = n, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z_ {
  constructor(e, n) {
    this.user = n, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class X_ {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, n) {
    e.enqueueRetryable(() => n(ot.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class J_ {
  constructor(e) {
    this.auth = null, e.onInit((n) => {
      this.auth = n;
    });
  }
  getToken() {
    return this.auth ? this.auth.getToken().then((e) => e ? (Ze(typeof e.accessToken == "string"), new z_(e.accessToken, new ot(this.auth.getUid()))) : null) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, n) {
  }
  shutdown() {
  }
}
class Z_ {
  constructor(e, n, r, s) {
    this.t = e, this.i = n, this.o = r, this.u = s, this.type = "FirstParty", this.user = ot.FIRST_PARTY, this.h = /* @__PURE__ */ new Map();
  }
  /** Gets an authorization token, using a provided factory function, or falling back to First Party GAPI. */
  l() {
    return this.u ? this.u() : (
      // Make sure this really is a Gapi client.
      (Ze(!(typeof this.t != "object" || this.t === null || !this.t.auth || !this.t.auth.getAuthHeaderValueForFirstParty)), this.t.auth.getAuthHeaderValueForFirstParty([]))
    );
  }
  get headers() {
    this.h.set("X-Goog-AuthUser", this.i);
    const e = this.l();
    return e && this.h.set("Authorization", e), this.o && this.h.set("X-Goog-Iam-Authorization-Token", this.o), this.h;
  }
}
class eE {
  constructor(e, n, r, s) {
    this.t = e, this.i = n, this.o = r, this.u = s;
  }
  getToken() {
    return Promise.resolve(new Z_(this.t, this.i, this.o, this.u));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(ot.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class tE {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class nE {
  constructor(e) {
    this.m = e, this.appCheck = null, e.onInit((n) => {
      this.appCheck = n;
    });
  }
  getToken() {
    return this.appCheck ? this.appCheck.getToken().then((e) => e ? (Ze(typeof e.token == "string"), new tE(e.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, n) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rE {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, n, r, s, i, a, o, u) {
    this.databaseId = e, this.appId = n, this.persistenceKey = r, this.host = s, this.ssl = i, this.forceLongPolling = a, this.autoDetectLongPolling = o, this.useFetchStreams = u;
  }
}
class Ur {
  constructor(e, n) {
    this.projectId = e, this.database = n || "(default)";
  }
  static empty() {
    return new Ur("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return e instanceof Ur && e.projectId === this.projectId && e.database === this.database;
  }
}
class xr {
  constructor(e, n, r) {
    n === void 0 ? n = 0 : n > e.length && Se(), r === void 0 ? r = e.length - n : r > e.length - n && Se(), this.segments = e, this.offset = n, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return xr.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return e instanceof xr ? e.forEach((r) => {
      n.push(r);
    }) : n.push(e), this.construct(n);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length)
      return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n))
        return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length)
      return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n))
        return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++)
      e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let s = 0; s < r; s++) {
      const i = e.get(s), a = n.get(s);
      if (i < a)
        return -1;
      if (i > a)
        return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class Fe extends xr {
  construct(e, n, r) {
    return new Fe(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new te(ae, `Invalid segment (${r}). Paths must not contain // in them.`);
      n.push(...r.split("/").filter((s) => s.length > 0));
    }
    return new Fe(n);
  }
  static emptyPath() {
    return new Fe([]);
  }
}
const sE = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class nt extends xr {
  construct(e, n, r) {
    return new nt(e, n, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return sE.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), nt.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new nt(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const n = [];
    let r = "", s = 0;
    const i = () => {
      if (r.length === 0)
        throw new te(ae, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      n.push(r), r = "";
    };
    let a = !1;
    for (; s < e.length; ) {
      const o = e[s];
      if (o === "\\") {
        if (s + 1 === e.length)
          throw new te(ae, "Path has trailing escape character: " + e);
        const u = e[s + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new te(ae, "Path has invalid escape sequence: " + e);
        r += u, s += 2;
      } else
        o === "`" ? (a = !a, s++) : o !== "." || a ? (r += o, s++) : (i(), s++);
    }
    if (i(), a)
      throw new te(ae, "Unterminated ` in path: " + e);
    return new nt(n);
  }
  static emptyPath() {
    return new nt([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new He(Fe.fromString(e));
  }
  static fromName(e) {
    return new He(Fe.fromString(e).popFirst(5));
  }
  static empty() {
    return new He(Fe.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Fe.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Fe.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new He(new Fe(e.slice()));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wd(t, e, n) {
  if (!n)
    throw new te(ae, `Function ${t}() cannot be called with an empty ${e}.`);
}
function uo(t) {
  if (!He.isDocumentKey(t))
    throw new te(ae, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}
function oo(t) {
  if (He.isDocumentKey(t))
    throw new te(ae, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}
function di(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean")
    return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array)
      return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function(n) {
          return n.constructor ? n.constructor.name : null;
        }(t)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : Se();
}
function Zn(t, e) {
  if ("_delegate" in t && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t = t._delegate), !(t instanceof e)) {
    if (e.name === t.constructor.name)
      throw new te(ae, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = di(t);
      throw new te(ae, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iE(t) {
  return t == null;
}
function $s(t) {
  return t === 0 && 1 / t == -1 / 0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const aE = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var co, he;
function lo(t) {
  if (t === void 0)
    return za("RPC_ERROR", "HTTP error has no status"), Tr;
  switch (t) {
    case 200:
      return ao;
    case 400:
      return xn;
    case 401:
      return ba;
    case 403:
      return $_;
    case 404:
      return q_;
    case 409:
      return G_;
    case 416:
      return W_;
    case 429:
      return Y_;
    case 499:
      return V_;
    case 500:
      return Tr;
    case 501:
      return Nd;
    case 503:
      return K_;
    case 504:
      return j_;
    default:
      return t >= 200 && t < 300 ? ao : t >= 400 && t < 500 ? xn : t >= 500 && t < 600 ? Q_ : Tr;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(he = co || (co = {}))[he.OK = 0] = "OK", he[he.CANCELLED = 1] = "CANCELLED", he[he.UNKNOWN = 2] = "UNKNOWN", he[he.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", he[he.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", he[he.NOT_FOUND = 5] = "NOT_FOUND", he[he.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", he[he.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", he[he.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", he[he.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", he[he.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", he[he.ABORTED = 10] = "ABORTED", he[he.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", he[he.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", he[he.INTERNAL = 13] = "INTERNAL", he[he.UNAVAILABLE = 14] = "UNAVAILABLE", he[he.DATA_LOSS = 15] = "DATA_LOSS";
class uE extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const n = e.ssl ? "https" : "http";
    this.p = n + "://" + e.host, this.g = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }
  v(e, n, r, s, i) {
    const a = this.T(e, n);
    qs("RestConnection", "Sending: ", a, r);
    const o = {};
    return this.I(o, s, i), this.A(e, a, o, r).then((u) => (qs("RestConnection", "Received: ", u), u), (u) => {
      throw H_("RestConnection", `${e} failed with error: `, u, "url: ", a, "request:", r), u;
    });
  }
  R(e, n, r, s, i, a) {
    return this.v(e, n, r, s, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  I(e, n, r) {
    e["X-Goog-Api-Client"] = "gl-js/ fire/" + Jn, // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), n && n.headers.forEach((s, i) => e[i] = s), r && r.headers.forEach((s, i) => e[i] = s);
  }
  T(e, n) {
    const r = aE[e];
    return `${this.p}/v1/${n}:${r}`;
  }
} {
  /**
   * @param databaseInfo - The connection info.
   * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
   */
  constructor(e, n) {
    super(e), this.P = n;
  }
  V(e, n) {
    throw new Error("Not supported by FetchConnection");
  }
  A(e, n, r, s) {
    return y(this, null, function* () {
      const i = JSON.stringify(s);
      let a;
      try {
        a = yield this.P(n, {
          method: "POST",
          headers: r,
          body: i
        });
      } catch (o) {
        throw new te(lo(o.status), "Request failed with error: " + o.statusText);
      }
      if (!a.ok)
        throw new te(lo(a.status), "Request failed with error: " + a.statusText);
      return a.json();
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oE(t) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof self != "undefined" && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(n);
  else
    for (let r = 0; r < t; r++)
      n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cE {
  static N() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const s = oE(40);
      for (let i = 0; i < s.length; ++i)
        r.length < 20 && s[i] < n && (r += e.charAt(s[i] % e.length));
    }
    return r;
  }
}
function Be(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ld(t, e, n) {
  return t.length === e.length && t.every((r, s) => n(r, e[s]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, n) {
    if (this.seconds = e, this.nanoseconds = n, n < 0)
      throw new te(ae, "Timestamp nanoseconds out of range: " + n);
    if (n >= 1e9)
      throw new te(ae, "Timestamp nanoseconds out of range: " + n);
    if (e < -62135596800)
      throw new te(ae, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new te(ae, "Timestamp seconds out of range: " + e);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return it.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return it.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const n = Math.floor(e / 1e3), r = Math.floor(1e6 * (e - 1e3 * n));
    return new it(n, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? Be(this.nanoseconds, e.nanoseconds) : Be(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new pt(e);
  }
  static min() {
    return new pt(new it(0, 0));
  }
  static max() {
    return new pt(new it(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(t) {
  let e = 0;
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function ts(t, e) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys {
  constructor(e, n) {
    this.comparator = e, this.root = n || xe.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, n) {
    return new Ys(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, xe.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new Ys(this.comparator, this.root.remove(e, this.comparator).copy(null, null, xe.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0)
        return n.value;
      r < 0 ? n = n.left : r > 0 && (n = n.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let n = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const s = this.comparator(e, r.key);
      if (s === 0)
        return n + r.left.size;
      s < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (n += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new ps(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new ps(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new ps(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new ps(this.root, e, this.comparator, !0);
  }
}
class ps {
  constructor(e, n, r, s) {
    this.isReverse = s, this.nodeStack = [];
    let i = 1;
    for (; !e.isEmpty(); )
      if (i = n ? r(e.key, n) : 1, // flip the comparison if we're going in reverse
      n && s && (i *= -1), i < 0)
        e = this.isReverse ? e.left : e.right;
      else {
        if (i === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.left;
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0)
      return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
}
class xe {
  constructor(e, n, r, s, i) {
    this.key = e, this.value = n, this.color = r != null ? r : xe.RED, this.left = s != null ? s : xe.EMPTY, this.right = i != null ? i : xe.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, n, r, s, i) {
    return new xe(e != null ? e : this.key, n != null ? n : this.value, r != null ? r : this.color, s != null ? s : this.left, i != null ? i : this.right);
  }
  isEmpty() {
    return !1;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, n, r) {
    let s = this;
    const i = r(e, s.key);
    return s = i < 0 ? s.copy(null, null, null, s.left.insert(e, n, r), null) : i === 0 ? s.copy(null, n, null, null, null) : s.copy(null, null, null, null, s.right.insert(e, n, r)), s.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return xe.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, n) {
    let r, s = this;
    if (n(e, s.key) < 0)
      s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), s = s.copy(null, null, null, s.left.remove(e, n), null);
    else {
      if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), n(e, s.key) === 0) {
        if (s.right.isEmpty())
          return xe.EMPTY;
        r = s.right.min(), s = s.copy(r.key, r.value, null, null, s.right.removeMin());
      }
      s = s.copy(null, null, null, null, s.right.remove(e, n));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, xe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, xe.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed() || this.right.isRed())
      throw Se();
    const e = this.left.check();
    if (e !== this.right.check())
      throw Se();
    return e + (this.isRed() ? 0 : 1);
  }
}
xe.EMPTY = null, xe.RED = !0, xe.BLACK = !1;
xe.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw Se();
  }
  get value() {
    throw Se();
  }
  get color() {
    throw Se();
  }
  get left() {
    throw Se();
  }
  get right() {
    throw Se();
  }
  // Returns a copy of the current node.
  copy(t, e, n, r, s) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t, e, n) {
    return new xe(t, e);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  // For testing.
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs {
  constructor(e) {
    this.comparator = e, this.data = new Ys(this.comparator);
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const s = r.getNext();
      if (this.comparator(s.key, e[1]) >= 0)
        return;
      n(s.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, n) {
    let r;
    for (r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); r.hasNext(); )
      if (!e(r.getNext().key))
        return;
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new ho(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new ho(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return n.size < e.size && (n = e, e = this), e.forEach((r) => {
      n = n.add(r);
    }), n;
  }
  isEqual(e) {
    if (!(e instanceof Gs) || this.size !== e.size)
      return !1;
    const n = this.data.getIterator(), r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const s = n.getNext().key, i = r.getNext().key;
      if (this.comparator(s, i) !== 0)
        return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return this.forEach((n) => {
      e.push(n);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new Gs(this.comparator);
    return n.data = e, n;
  }
}
class ho {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(nt.comparator);
  }
  static empty() {
    return new ln([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let n = new Gs(nt.comparator);
    for (const r of this.fields)
      n = n.add(r);
    for (const r of e)
      n = n.add(r);
    return new ln(n.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const n of this.fields)
      if (n.isPrefixOf(e))
        return !0;
    return !1;
  }
  isEqual(e) {
    return Ld(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new Bt(n);
  }
  static fromUint8Array(e) {
    const n = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(r) {
        let s = "";
        for (let i = 0; i < r.length; ++i)
          s += String.fromCharCode(r[i]);
        return s;
      }(e)
    );
    return new Bt(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    };
  }
  toBase64() {
    return e = this.binaryString, btoa(e);
    var e;
  }
  toUint8Array() {
    return function(e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++)
        n[r] = e.charCodeAt(r);
      return n;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return Be(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Bt.EMPTY_BYTE_STRING = new Bt("");
const lE = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function dn(t) {
  if (Ze(!!t), typeof t == "string") {
    let e = 0;
    const n = lE.exec(t);
    if (Ze(!!n), n[1]) {
      let s = n[1];
      s = (s + "000000000").substr(0, 9), e = Number(s);
    }
    const r = new Date(t);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ke(t.seconds),
    nanos: ke(t.nanos)
  };
}
function ke(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Hr(t) {
  return typeof t == "string" ? Bt.fromBase64String(t) : Bt.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dd(t) {
  var e, n;
  return ((n = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp";
}
function Md(t) {
  const e = t.mapValue.fields.__previous_value__;
  return Dd(e) ? Md(e) : e;
}
function Vr(t) {
  const e = dn(t.mapValue.fields.__local_write_time__.timestampValue);
  return new it(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ms = {
  fields: {
    __type__: {
      stringValue: "__max__"
    }
  }
};
function fn(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Dd(t) ? 4 : (
    /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
    function(e) {
      return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
    }(t) ? 9007199254740991 : 10
  ) : Se();
}
function Ws(t, e) {
  if (t === e)
    return !0;
  const n = fn(t);
  if (n !== fn(e))
    return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Vr(t).isEqual(Vr(e));
    case 3:
      return function(r, s) {
        if (typeof r.timestampValue == "string" && typeof s.timestampValue == "string" && r.timestampValue.length === s.timestampValue.length)
          return r.timestampValue === s.timestampValue;
        const i = dn(r.timestampValue), a = dn(s.timestampValue);
        return i.seconds === a.seconds && i.nanos === a.nanos;
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function(r, s) {
        return Hr(r.bytesValue).isEqual(Hr(s.bytesValue));
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function(r, s) {
        return ke(r.geoPointValue.latitude) === ke(s.geoPointValue.latitude) && ke(r.geoPointValue.longitude) === ke(s.geoPointValue.longitude);
      }(t, e);
    case 2:
      return function(r, s) {
        if ("integerValue" in r && "integerValue" in s)
          return ke(r.integerValue) === ke(s.integerValue);
        if ("doubleValue" in r && "doubleValue" in s) {
          const i = ke(r.doubleValue), a = ke(s.doubleValue);
          return i === a ? $s(i) === $s(a) : isNaN(i) && isNaN(a);
        }
        return !1;
      }(t, e);
    case 9:
      return Ld(t.arrayValue.values || [], e.arrayValue.values || [], Ws);
    case 10:
      return function(r, s) {
        const i = r.mapValue.fields || {}, a = s.mapValue.fields || {};
        if (fo(i) !== fo(a))
          return !1;
        for (const o in i)
          if (i.hasOwnProperty(o) && (a[o] === void 0 || !Ws(i[o], a[o])))
            return !1;
        return !0;
      }(t, e);
    default:
      return Se();
  }
}
function jr(t, e) {
  return (t.values || []).find((n) => Ws(n, e)) !== void 0;
}
function Qs(t, e) {
  if (t === e)
    return 0;
  const n = fn(t), r = fn(e);
  if (n !== r)
    return Be(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Be(t.booleanValue, e.booleanValue);
    case 2:
      return function(s, i) {
        const a = ke(s.integerValue || s.doubleValue), o = ke(i.integerValue || i.doubleValue);
        return a < o ? -1 : a > o ? 1 : a === o ? 0 : (
          // one or both are NaN.
          isNaN(a) ? isNaN(o) ? 0 : -1 : 1
        );
      }(t, e);
    case 3:
      return po(t.timestampValue, e.timestampValue);
    case 4:
      return po(Vr(t), Vr(e));
    case 5:
      return Be(t.stringValue, e.stringValue);
    case 6:
      return function(s, i) {
        const a = Hr(s), o = Hr(i);
        return a.compareTo(o);
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function(s, i) {
        const a = s.split("/"), o = i.split("/");
        for (let u = 0; u < a.length && u < o.length; u++) {
          const l = Be(a[u], o[u]);
          if (l !== 0)
            return l;
        }
        return Be(a.length, o.length);
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function(s, i) {
        const a = Be(ke(s.latitude), ke(i.latitude));
        return a !== 0 ? a : Be(ke(s.longitude), ke(i.longitude));
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return function(s, i) {
        const a = s.values || [], o = i.values || [];
        for (let u = 0; u < a.length && u < o.length; ++u) {
          const l = Qs(a[u], o[u]);
          if (l)
            return l;
        }
        return Be(a.length, o.length);
      }(t.arrayValue, e.arrayValue);
    case 10:
      return function(s, i) {
        if (s === ms && i === ms)
          return 0;
        if (s === ms)
          return 1;
        if (i === ms)
          return -1;
        const a = s.fields || {}, o = Object.keys(a), u = i.fields || {}, l = Object.keys(u);
        o.sort(), l.sort();
        for (let d = 0; d < o.length && d < l.length; ++d) {
          const f = Be(o[d], l[d]);
          if (f !== 0)
            return f;
          const p = Qs(a[o[d]], u[l[d]]);
          if (p !== 0)
            return p;
        }
        return Be(o.length, l.length);
      }(t.mapValue, e.mapValue);
    default:
      throw Se();
  }
}
function po(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return Be(t, e);
  const n = dn(t), r = dn(e), s = Be(n.seconds, r.seconds);
  return s !== 0 ? s : Be(n.nanos, r.nanos);
}
function mo(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
  };
}
function Pd(t) {
  return !!t && "arrayValue" in t;
}
function _o(t) {
  return !!t && "nullValue" in t;
}
function Eo(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function qi(t) {
  return !!t && "mapValue" in t;
}
function Ir(t) {
  if (t.geoPointValue)
    return {
      geoPointValue: Object.assign({}, t.geoPointValue)
    };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return {
      timestampValue: Object.assign({}, t.timestampValue)
    };
  if (t.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return ts(t.mapValue.fields, (n, r) => e.mapValue.fields[n] = Ir(r)), e;
  }
  if (t.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Ir(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
class rt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new rt({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty())
      return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (n = (n.mapValue.fields || {})[e.get(r)], !qi(n))
          return null;
      return n = (n.mapValue.fields || {})[e.lastSegment()], n || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Ir(n);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let n = nt.emptyPath(), r = {}, s = [];
    e.forEach((a, o) => {
      if (!n.isImmediateParentOf(o)) {
        const u = this.getFieldsMap(n);
        this.applyChanges(u, r, s), r = {}, s = [], n = o.popLast();
      }
      a ? r[o.lastSegment()] = Ir(a) : s.push(o.lastSegment());
    });
    const i = this.getFieldsMap(n);
    this.applyChanges(i, r, s);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const n = this.field(e.popLast());
    qi(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return Ws(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = {
      fields: {}
    });
    for (let r = 0; r < e.length; ++r) {
      let s = n.mapValue.fields[e.get(r)];
      qi(s) && s.mapValue.fields || (s = {
        mapValue: {
          fields: {}
        }
      }, n.mapValue.fields[e.get(r)] = s), n = s;
    }
    return n.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, n, r) {
    ts(n, (s, i) => e[s] = i);
    for (const s of r)
      delete e[s];
  }
  clone() {
    return new rt(Ir(this.value));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At {
  constructor(e, n, r, s, i, a) {
    this.key = e, this.documentType = n, this.version = r, this.readTime = s, this.data = i, this.documentState = a;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new At(
      e,
      0,
      pt.min(),
      pt.min(),
      rt.empty(),
      0
      /* SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, n, r) {
    return new At(
      e,
      1,
      n,
      pt.min(),
      r,
      0
      /* SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, n) {
    return new At(
      e,
      2,
      n,
      pt.min(),
      rt.empty(),
      0
      /* SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, n) {
    return new At(
      e,
      3,
      n,
      pt.min(),
      rt.empty(),
      2
      /* HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, n) {
    return this.version = e, this.documentType = 1, this.data = n, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = rt.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = rt.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = pt.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return e instanceof At && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new At(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dE {
  constructor(e, n = null, r = [], s = [], i = null, a = null, o = null) {
    this.path = e, this.collectionGroup = n, this.orderBy = r, this.filters = s, this.limit = i, this.startAt = a, this.endAt = o, this.D = null;
  }
}
function go(t, e = null, n = [], r = [], s = null, i = null, a = null) {
  return new dE(t, e, n, r, s, i, a);
}
class Rt extends class {
} {
  constructor(e, n, r) {
    super(), this.field = e, this.op = n, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, n, r) {
    return e.isKeyField() ? n === "in" || n === "not-in" ? this.$(e, n, r) : new fE(e, n, r) : n === "array-contains" ? new mE(e, r) : n === "in" ? new _E(e, r) : n === "not-in" ? new EE(e, r) : n === "array-contains-any" ? new gE(e, r) : new Rt(e, n, r);
  }
  static $(e, n, r) {
    return n === "in" ? new hE(e, r) : new pE(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!=" ? n !== null && this.F(Qs(n, this.value)) : n !== null && fn(this.value) === fn(n) && this.F(Qs(n, this.value));
  }
  F(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return Se();
    }
  }
  S() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* NOT_IN */
    ].indexOf(this.op) >= 0;
  }
}
class fE extends Rt {
  constructor(e, n, r) {
    super(e, n, r), this.key = He.fromName(r.referenceValue);
  }
  matches(e) {
    const n = He.comparator(e.key, this.key);
    return this.F(n);
  }
}
class hE extends Rt {
  constructor(e, n) {
    super(e, "in", n), this.keys = kd("in", n);
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class pE extends Rt {
  constructor(e, n) {
    super(e, "not-in", n), this.keys = kd("not-in", n);
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function kd(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((r) => He.fromName(r.referenceValue));
}
class mE extends Rt {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return Pd(n) && jr(n.arrayValue, this.value);
  }
}
class _E extends Rt {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && jr(this.value.arrayValue, n);
  }
}
class EE extends Rt {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (jr(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return !1;
    const n = e.data.field(this.field);
    return n !== null && !jr(this.value.arrayValue, n);
  }
}
class gE extends Rt {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return !(!Pd(n) || !n.arrayValue.values) && n.arrayValue.values.some((r) => jr(this.value.arrayValue, r));
  }
}
class bo {
  constructor(e, n) {
    this.position = e, this.inclusive = n;
  }
}
class Ns {
  constructor(e, n = "asc") {
    this.field = e, this.dir = n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fd {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, n = null, r = [], s = [], i = null, a = "F", o = null, u = null) {
    this.path = e, this.collectionGroup = n, this.explicitOrderBy = r, this.filters = s, this.limit = i, this.limitType = a, this.startAt = o, this.endAt = u, this.q = null, // The corresponding `Target` of this `Query` instance.
    this.O = null, this.startAt, this.endAt;
  }
}
function Bd(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function Ud(t) {
  for (const e of t.filters)
    if (e.S())
      return e.field;
  return null;
}
function bE(t) {
  return t.collectionGroup !== null;
}
function To(t) {
  const e = es(t);
  if (e.q === null) {
    e.q = [];
    const n = Ud(e), r = Bd(e);
    if (n !== null && r === null)
      n.isKeyField() || e.q.push(new Ns(n)), e.q.push(new Ns(
        nt.keyField(),
        "asc"
        /* ASCENDING */
      ));
    else {
      let s = !1;
      for (const i of e.explicitOrderBy)
        e.q.push(i), i.field.isKeyField() && (s = !0);
      if (!s) {
        const i = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.q.push(new Ns(nt.keyField(), i));
      }
    }
  }
  return e.q;
}
function TE(t) {
  const e = es(t);
  if (!e.O)
    if (e.limitType === "F")
      e.O = go(e.path, e.collectionGroup, To(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const n = [];
      for (const i of To(e)) {
        const a = i.dir === "desc" ? "asc" : "desc";
        n.push(new Ns(i.field, a));
      }
      const r = e.endAt ? new bo(e.endAt.position, e.endAt.inclusive) : null, s = e.startAt ? new bo(e.startAt.position, e.startAt.inclusive) : null;
      e.O = go(e.path, e.collectionGroup, n, e.filters, e.limit, r, s);
    }
  return e.O;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function IE(t, e) {
  return function(n) {
    return typeof n == "number" && Number.isInteger(n) && !$s(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;
  }(e) ? (
    /**
    * Returns an IntegerValue for `value`.
    */
    function(n) {
      return {
        integerValue: "" + n
      };
    }(e)
  ) : function(n, r) {
    if (n.k) {
      if (isNaN(r))
        return {
          doubleValue: "NaN"
        };
      if (r === 1 / 0)
        return {
          doubleValue: "Infinity"
        };
      if (r === -1 / 0)
        return {
          doubleValue: "-Infinity"
        };
    }
    return {
      doubleValue: $s(r) ? "-0" : r
    };
  }(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi {
  constructor() {
    this._ = void 0;
  }
}
class xd extends fi {
}
class AE extends fi {
  constructor(e) {
    super(), this.elements = e;
  }
}
class yE extends fi {
  constructor(e) {
    super(), this.elements = e;
  }
}
class vE extends fi {
  constructor(e, n) {
    super(), this.C = e, this.L = n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SE {
  constructor(e, n) {
    this.field = e, this.transform = n;
  }
}
class Wt {
  constructor(e, n) {
    this.updateTime = e, this.exists = n;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new Wt();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new Wt(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new Wt(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
}
class hi {
}
class Hd extends hi {
  constructor(e, n, r, s = []) {
    super(), this.key = e, this.value = n, this.precondition = r, this.fieldTransforms = s, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class Ja extends hi {
  constructor(e, n, r, s, i = []) {
    super(), this.key = e, this.data = n, this.fieldMask = r, this.precondition = s, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
class Vd extends hi {
  constructor(e, n) {
    super(), this.key = e, this.precondition = n, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class CE extends hi {
  constructor(e, n) {
    super(), this.key = e, this.precondition = n, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const OE = (() => ({
  asc: "ASCENDING",
  desc: "DESCENDING"
}))(), RE = (() => ({
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}))();
class NE {
  constructor(e, n) {
    this.databaseId = e, this.k = n;
  }
}
function Ta(t, e) {
  return t.k ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z` : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function wE(t, e) {
  return t.k ? e.toBase64() : e.toUint8Array();
}
function LE(t, e) {
  return Ta(t, e.toTimestamp());
}
function Ia(t) {
  return Ze(!!t), pt.fromTimestamp(function(e) {
    const n = dn(e);
    return new it(n.seconds, n.nanos);
  }(t));
}
function Za(t, e) {
  return function(n) {
    return new Fe(["projects", n.projectId, "databases", n.database]);
  }(t).child("documents").child(e).canonicalString();
}
function Ks(t, e) {
  return Za(t.databaseId, e.path);
}
function Aa(t, e) {
  const n = function(s) {
    const i = Fe.fromString(s);
    return Ze(qd(i)), i;
  }(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new te(ae, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database)
    throw new te(ae, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new He((Ze((r = n).length > 4 && r.get(4) === "documents"), r.popFirst(5)));
  var r;
}
function Io(t, e) {
  return Za(t.databaseId, e);
}
function jd(t) {
  return new Fe(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString();
}
function Ao(t, e, n) {
  return {
    name: Ks(t, e),
    fields: n.value.mapValue.fields
  };
}
function DE(t, e) {
  return "found" in e ? function(n, r) {
    Ze(!!r.found), r.found.name, r.found.updateTime;
    const s = Aa(n, r.found.name), i = Ia(r.found.updateTime), a = new rt({
      mapValue: {
        fields: r.found.fields
      }
    });
    return At.newFoundDocument(s, i, a);
  }(t, e) : "missing" in e ? function(n, r) {
    Ze(!!r.missing), Ze(!!r.readTime);
    const s = Aa(n, r.missing), i = Ia(r.readTime);
    return At.newNoDocument(s, i);
  }(t, e) : Se();
}
function ME(t, e) {
  let n;
  if (e instanceof Hd)
    n = {
      update: Ao(t, e.key, e.value)
    };
  else if (e instanceof Vd)
    n = {
      delete: Ks(t, e.key)
    };
  else if (e instanceof Ja)
    n = {
      update: Ao(t, e.key, e.data),
      updateMask: BE(e.fieldMask)
    };
  else {
    if (!(e instanceof CE))
      return Se();
    n = {
      verify: Ks(t, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((r) => function(s, i) {
    const a = i.transform;
    if (a instanceof xd)
      return {
        fieldPath: i.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (a instanceof AE)
      return {
        fieldPath: i.field.canonicalString(),
        appendMissingElements: {
          values: a.elements
        }
      };
    if (a instanceof yE)
      return {
        fieldPath: i.field.canonicalString(),
        removeAllFromArray: {
          values: a.elements
        }
      };
    if (a instanceof vE)
      return {
        fieldPath: i.field.canonicalString(),
        increment: a.L
      };
    throw Se();
  }(0, r))), e.precondition.isNone || (n.currentDocument = function(r, s) {
    return s.updateTime !== void 0 ? {
      updateTime: LE(r, s.updateTime)
    } : s.exists !== void 0 ? {
      exists: s.exists
    } : Se();
  }(t, e.precondition)), n;
}
function PE(t, e) {
  const n = {
    structuredQuery: {}
  }, r = e.path;
  e.collectionGroup !== null ? (n.parent = Io(t, r), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (n.parent = Io(t, r.popLast()), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]);
  const s = function(u) {
    if (u.length === 0)
      return;
    const l = u.map((d) => (
      // visible for testing
      function(f) {
        if (f.op === "==") {
          if (Eo(f.value))
            return {
              unaryFilter: {
                field: On(f.field),
                op: "IS_NAN"
              }
            };
          if (_o(f.value))
            return {
              unaryFilter: {
                field: On(f.field),
                op: "IS_NULL"
              }
            };
        } else if (f.op === "!=") {
          if (Eo(f.value))
            return {
              unaryFilter: {
                field: On(f.field),
                op: "IS_NOT_NAN"
              }
            };
          if (_o(f.value))
            return {
              unaryFilter: {
                field: On(f.field),
                op: "IS_NOT_NULL"
              }
            };
        }
        return {
          fieldFilter: {
            field: On(f.field),
            op: FE(f.op),
            value: f.value
          }
        };
      }(d)
    ));
    return l.length === 1 ? l[0] : {
      compositeFilter: {
        op: "AND",
        filters: l
      }
    };
  }(e.filters);
  s && (n.structuredQuery.where = s);
  const i = function(u) {
    if (u.length !== 0)
      return u.map((l) => (
        // visible for testing
        function(d) {
          return {
            field: On(d.field),
            direction: kE(d.dir)
          };
        }(l)
      ));
  }(e.orderBy);
  i && (n.structuredQuery.orderBy = i);
  const a = function(u, l) {
    return u.k || iE(l) ? l : {
      value: l
    };
  }(t, e.limit);
  var o;
  return a !== null && (n.structuredQuery.limit = a), e.startAt && (n.structuredQuery.startAt = {
    before: (o = e.startAt).inclusive,
    values: o.position
  }), e.endAt && (n.structuredQuery.endAt = function(u) {
    return {
      before: !u.inclusive,
      values: u.position
    };
  }(e.endAt)), n;
}
function kE(t) {
  return OE[t];
}
function FE(t) {
  return RE[t];
}
function On(t) {
  return {
    fieldPath: t.canonicalString()
  };
}
function BE(t) {
  const e = [];
  return t.fields.forEach((n) => e.push(n.canonicalString())), {
    fieldPaths: e
  };
}
function qd(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eu(t) {
  return new NE(
    t,
    /* useProto3Json= */
    !0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UE extends class {
} {
  constructor(e, n, r, s) {
    super(), this.authCredentials = e, this.appCheckCredentials = n, this.Z = r, this.C = s, this.tt = !1;
  }
  et() {
    if (this.tt)
      throw new te(xn, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  v(e, n, r) {
    return this.et(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, i]) => this.Z.v(e, n, r, s, i)).catch((s) => {
      throw s.name === "FirebaseError" ? (s.code === ba && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new te(Tr, s.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  R(e, n, r, s) {
    return this.et(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, a]) => this.Z.R(e, n, r, i, a, s)).catch((i) => {
      throw i.name === "FirebaseError" ? (i.code === ba && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), i) : new te(Tr, i.toString());
    });
  }
  terminate() {
    this.tt = !0;
  }
}
function pi(t, e) {
  return y(this, null, function* () {
    const n = es(t), r = jd(n.C) + "/documents", s = {
      writes: e.map((i) => ME(n.C, i))
    };
    yield n.v("Commit", r, s);
  });
}
function xE(t, e) {
  return y(this, null, function* () {
    const n = es(t), r = jd(n.C) + "/documents", s = {
      documents: e.map((u) => Ks(n.C, u))
    }, i = yield n.R("BatchGetDocuments", r, s, e.length), a = /* @__PURE__ */ new Map();
    i.forEach((u) => {
      const l = DE(n.C, u);
      a.set(l.key.toString(), l);
    });
    const o = [];
    return e.forEach((u) => {
      const l = a.get(u.toString());
      Ze(!!l), o.push(l);
    }), o;
  });
}
function HE(t, e) {
  return y(this, null, function* () {
    const n = es(t), r = PE(n.C, TE(e));
    return (yield n.R("RunQuery", r.parent, {
      structuredQuery: r.structuredQuery
    })).filter((s) => !!s.document).map((s) => function(i, a, o) {
      const u = Aa(i, a.name), l = Ia(a.updateTime), d = new rt({
        mapValue: {
          fields: a.fields
        }
      }), f = At.newFoundDocument(u, l, d);
      return o && f.setHasCommittedMutations(), o ? f.setHasCommittedMutations() : f;
    }(n.C, s.document, void 0));
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ar = /* @__PURE__ */ new Map();
function er(t) {
  if (t._terminated)
    throw new te(xn, "The client has already been terminated.");
  if (!Ar.has(t)) {
    qs("ComponentProvider", "Initializing Datastore");
    const i = function(u) {
      return new uE(u, fetch.bind(null));
    }((e = t._databaseId, n = t.app.options.appId || "", r = t._persistenceKey, s = t._freezeSettings(), new rE(e, n, r, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, s.useFetchStreams))), a = eu(t._databaseId), o = function(u, l, d, f) {
      return new UE(u, l, d, f);
    }(t._authCredentials, t._appCheckCredentials, i, a);
    Ar.set(t, o);
  }
  var e, n, r, s;
  /**
  * @license
  * Copyright 2018 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  return Ar.get(t);
}
class yo {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new te(ae, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else
      this.host = e.host, this.ssl = (n = e.ssl) === null || n === void 0 || n;
    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, e.cacheSizeBytes === void 0)
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new te(ae, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.useFetchStreams = !!e.useFetchStreams, function(r, s, i, a) {
      if (s === !0 && a === !0)
        throw new te(ae, `${r} and ${i} cannot be used together.`);
    }("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling);
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tu {
  /** @hideconstructor */
  constructor(e, n, r, s) {
    this._authCredentials = e, this._appCheckCredentials = n, this._databaseId = r, this._app = s, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new yo({}), this._settingsFrozen = !1;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app)
      throw new te(xn, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new te(xn, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new yo(e), e.credentials !== void 0 && (this._authCredentials = function(n) {
      if (!n)
        return new X_();
      switch (n.type) {
        case "gapi":
          const r = n.client;
          return new eE(r, n.sessionIndex || "0", n.iamToken || null, n.authTokenFactory || null);
        case "provider":
          return n.client;
        default:
          throw new te(ae, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(e) {
      const n = Ar.get(e);
      n && (qs("ComponentProvider", "Removing Datastore"), Ar.delete(e), n.terminate());
    }(this), Promise.resolve();
  }
}
function VE(t, e) {
  const n = typeof t == "object" ? t : Zl(), r = typeof t == "string" ? t : e || "(default)";
  return Qr(n, "firestore/lite").getImmediate({
    identifier: r
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e {
  /** @hideconstructor */
  constructor(e, n, r) {
    this.converter = n, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new Pt(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new $e(this.firestore, e, this._key);
  }
}
class ns {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, n, r) {
    this.converter = n, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new ns(this.firestore, e, this._query);
  }
}
class Pt extends ns {
  /** @hideconstructor */
  constructor(e, n, r) {
    super(e, n, new Fd(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new $e(
      this.firestore,
      /* converter= */
      null,
      new He(e)
    );
  }
  withConverter(e) {
    return new Pt(this.firestore, e, this._path);
  }
}
function Pe(t, e, ...n) {
  if (t = Ve(t), wd("collection", "path", e), t instanceof tu) {
    const r = Fe.fromString(e, ...n);
    return oo(r), new Pt(
      t,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(t instanceof $e || t instanceof Pt))
      throw new te(ae, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = t._path.child(Fe.fromString(e, ...n));
    return oo(r), new Pt(
      t.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function ie(t, e, ...n) {
  if (t = Ve(t), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  arguments.length === 1 && (e = cE.N()), wd("doc", "path", e), t instanceof tu) {
    const r = Fe.fromString(e, ...n);
    return uo(r), new $e(
      t,
      /* converter= */
      null,
      new He(r)
    );
  }
  {
    if (!(t instanceof $e || t instanceof Pt))
      throw new te(ae, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = t._path.child(Fe.fromString(e, ...n));
    return uo(r), new $e(t.firestore, t instanceof Pt ? t.converter : null, new He(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new te(ae, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new nt(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new Hn(Bt.fromBase64String(e));
    } catch (n) {
      throw new te(ae, "Failed to construct data from Base64 string: " + n);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new Hn(Bt.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new te(ae, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(n) || n < -180 || n > 180)
      throw new te(ae, "Longitude must be a number between -180 and 180, but was: " + n);
    this._lat = e, this._long = n;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return Be(this._lat, e._lat) || Be(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jE = /^__.*__$/;
class qE {
  constructor(e, n, r) {
    this.data = e, this.fieldMask = n, this.fieldTransforms = r;
  }
  toMutation(e, n) {
    return this.fieldMask !== null ? new Ja(e, this.data, this.fieldMask, n, this.fieldTransforms) : new Hd(e, this.data, n, this.fieldTransforms);
  }
}
class $d {
  constructor(e, n, r) {
    this.data = e, this.fieldMask = n, this.fieldTransforms = r;
  }
  toMutation(e, n) {
    return new Ja(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function Yd(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw Se();
  }
}
class ru {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, n, r, s, i, a) {
    this.settings = e, this.databaseId = n, this.C = r, this.ignoreUndefinedProperties = s, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    i === void 0 && this.nt(), this.fieldTransforms = i || [], this.fieldMask = a || [];
  }
  get path() {
    return this.settings.path;
  }
  get rt() {
    return this.settings.rt;
  }
  /** Returns a new context with the specified settings overwritten. */
  st(e) {
    return new ru(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.C, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  it(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e), s = this.st({
      path: r,
      ot: !1
    });
    return s.ut(e), s;
  }
  ct(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e), s = this.st({
      path: r,
      ot: !1
    });
    return s.nt(), s;
  }
  at(e) {
    return this.st({
      path: void 0,
      ot: !0
    });
  }
  ht(e) {
    return zs(e, this.settings.methodName, this.settings.lt || !1, this.path, this.settings.ft);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0;
  }
  nt() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++)
        this.ut(this.path.get(e));
  }
  ut(e) {
    if (e.length === 0)
      throw this.ht("Document fields must not be empty");
    if (Yd(this.rt) && jE.test(e))
      throw this.ht('Document fields cannot begin and end with "__"');
  }
}
class $E {
  constructor(e, n, r) {
    this.databaseId = e, this.ignoreUndefinedProperties = n, this.C = r || eu(e);
  }
  /** Creates a new top-level parse context. */
  dt(e, n, r, s = !1) {
    return new ru({
      rt: e,
      methodName: n,
      ft: r,
      path: nt.emptyPath(),
      ot: !1,
      lt: s
    }, this.databaseId, this.C, this.ignoreUndefinedProperties);
  }
}
function Ei(t) {
  const e = t._freezeSettings(), n = eu(t._databaseId);
  return new $E(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function Gd(t, e, n, r, s, i = {}) {
  const a = t.dt(i.merge || i.mergeFields ? 2 : 0, e, n, s);
  iu("Data must be an object, but it was:", a, r);
  const o = Wd(r, a);
  let u, l;
  if (i.merge)
    u = new ln(a.fieldMask), l = a.fieldTransforms;
  else if (i.mergeFields) {
    const d = [];
    for (const f of i.mergeFields) {
      const p = ya(e, f, n);
      if (!a.contains(p))
        throw new te(ae, `Field '${p}' is specified in your field mask but missing from your input data.`);
      Kd(d, p) || d.push(p);
    }
    u = new ln(d), l = a.fieldTransforms.filter((f) => u.covers(f.field));
  } else
    u = null, l = a.fieldTransforms;
  return new qE(new rt(o), u, l);
}
class gi extends _i {
  _toFieldTransform(e) {
    if (e.rt !== 2)
      throw e.rt === 1 ? e.ht(`${this._methodName}() can only appear at the top level of your update data`) : e.ht(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof gi;
  }
}
class su extends _i {
  _toFieldTransform(e) {
    return new SE(e.path, new xd());
  }
  isEqual(e) {
    return e instanceof su;
  }
}
function YE(t, e, n, r) {
  const s = t.dt(1, e, n);
  iu("Data must be an object, but it was:", s, r);
  const i = [], a = rt.empty();
  ts(r, (u, l) => {
    const d = au(e, u, n);
    l = Ve(l);
    const f = s.ct(d);
    if (l instanceof gi)
      i.push(d);
    else {
      const p = rs(l, f);
      p != null && (i.push(d), a.set(d, p));
    }
  });
  const o = new ln(i);
  return new $d(a, o, s.fieldTransforms);
}
function GE(t, e, n, r, s, i) {
  const a = t.dt(1, e, n), o = [ya(e, r, n)], u = [s];
  if (i.length % 2 != 0)
    throw new te(ae, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let p = 0; p < i.length; p += 2)
    o.push(ya(e, i[p])), u.push(i[p + 1]);
  const l = [], d = rt.empty();
  for (let p = o.length - 1; p >= 0; --p)
    if (!Kd(l, o[p])) {
      const h = o[p];
      let m = u[p];
      m = Ve(m);
      const _ = a.ct(h);
      if (m instanceof gi)
        l.push(h);
      else {
        const b = rs(m, _);
        b != null && (l.push(h), d.set(h, b));
      }
    }
  const f = new ln(l);
  return new $d(d, f, a.fieldTransforms);
}
function WE(t, e, n, r = !1) {
  return rs(n, t.dt(r ? 4 : 3, e));
}
function rs(t, e) {
  if (Qd(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = Ve(t)
  ))
    return iu("Unsupported field value:", e, t), Wd(t, e);
  if (t instanceof _i)
    return function(n, r) {
      if (!Yd(r.rt))
        throw r.ht(`${n._methodName}() can only be used with update() and set()`);
      if (!r.path)
        throw r.ht(`${n._methodName}() is not currently supported inside arrays`);
      const s = n._toFieldTransform(r);
      s && r.fieldTransforms.push(s);
    }(t, e), null;
  if (t === void 0 && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array
  ) {
    if (e.settings.ot && e.rt !== 4)
      throw e.ht("Nested arrays are not supported");
    return function(n, r) {
      const s = [];
      let i = 0;
      for (const a of n) {
        let o = rs(a, r.at(i));
        o == null && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (o = {
          nullValue: "NULL_VALUE"
        }), s.push(o), i++;
      }
      return {
        arrayValue: {
          values: s
        }
      };
    }(t, e);
  }
  return function(n, r) {
    if ((n = Ve(n)) === null)
      return {
        nullValue: "NULL_VALUE"
      };
    if (typeof n == "number")
      return IE(r.C, n);
    if (typeof n == "boolean")
      return {
        booleanValue: n
      };
    if (typeof n == "string")
      return {
        stringValue: n
      };
    if (n instanceof Date) {
      const s = it.fromDate(n);
      return {
        timestampValue: Ta(r.C, s)
      };
    }
    if (n instanceof it) {
      const s = new it(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return {
        timestampValue: Ta(r.C, s)
      };
    }
    if (n instanceof nu)
      return {
        geoPointValue: {
          latitude: n.latitude,
          longitude: n.longitude
        }
      };
    if (n instanceof Hn)
      return {
        bytesValue: wE(r.C, n._byteString)
      };
    if (n instanceof $e) {
      const s = r.databaseId, i = n.firestore._databaseId;
      if (!i.isEqual(s))
        throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);
      return {
        referenceValue: Za(n.firestore._databaseId || r.databaseId, n._key.path)
      };
    }
    throw r.ht(`Unsupported field value: ${di(n)}`);
  }(t, e);
}
function Wd(t, e) {
  const n = {};
  return function(r) {
    for (const s in r)
      if (Object.prototype.hasOwnProperty.call(r, s))
        return !1;
    return !0;
  }(t) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ) : ts(t, (r, s) => {
    const i = rs(s, e.it(r));
    i != null && (n[r] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function Qd(t) {
  return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof it || t instanceof nu || t instanceof Hn || t instanceof $e || t instanceof _i);
}
function iu(t, e, n) {
  if (!Qd(n) || !function(r) {
    return typeof r == "object" && r !== null && (Object.getPrototypeOf(r) === Object.prototype || Object.getPrototypeOf(r) === null);
  }(n)) {
    const r = di(n);
    throw r === "an object" ? e.ht(t + " a custom object") : e.ht(t + " " + r);
  }
}
function ya(t, e, n) {
  if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (e = Ve(e)) instanceof mi
  )
    return e._internalPath;
  if (typeof e == "string")
    return au(t, e);
  throw zs(
    "Field path arguments must be of type string or ",
    t,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    n
  );
}
const QE = new RegExp("[~\\*/\\[\\]]");
function au(t, e, n) {
  if (e.search(QE) >= 0)
    throw zs(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      n
    );
  try {
    return new mi(...e.split("."))._internalPath;
  } catch (r) {
    throw zs(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      n
    );
  }
}
function zs(t, e, n, r, s) {
  const i = r && !r.isEmpty(), a = s !== void 0;
  let o = `Function ${e}() called with invalid data`;
  n && (o += " (via `toFirestore()`)"), o += ". ";
  let u = "";
  return (i || a) && (u += " (found", i && (u += ` in field ${r}`), a && (u += ` in document ${s}`), u += ")"), new te(ae, o + t + u);
}
function Kd(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zd {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(e, n, r, s, i) {
    this._firestore = e, this._userDataWriter = n, this._key = r, this._document = s, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new $e(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return this._document !== null;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new Xd(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e) {
    if (this._document) {
      const n = this._document.data.field(Jd("DocumentSnapshot.get", e));
      if (n !== null)
        return this._userDataWriter.convertValue(n);
    }
  }
}
class Xd extends zd {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
}
class KE {
  /** @hideconstructor */
  constructor(e, n) {
    this._docs = n, this.query = e;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    return [...this._docs];
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this.docs.length;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return this.docs.length === 0;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(e, n) {
    this._docs.forEach(e, n);
  }
}
function Jd(t, e) {
  return typeof e == "string" ? au(t, e) : e instanceof mi ? e._internalPath : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zE {
}
function sr(t, ...e) {
  for (const n of e)
    t = n._apply(t);
  return t;
}
class XE extends zE {
  constructor(e, n, r) {
    super(), this._t = e, this.gt = n, this.vt = r, this.type = "where";
  }
  _apply(e) {
    const n = Ei(e.firestore), r = function(s, i, a, o, u, l, d) {
      let f;
      if (u.isKeyField()) {
        if (l === "array-contains" || l === "array-contains-any")
          throw new te(ae, `Invalid Query. You can't perform '${l}' queries on documentId().`);
        if (l === "in" || l === "not-in") {
          So(d, l);
          const h = [];
          for (const m of d)
            h.push(vo(o, s, m));
          f = {
            arrayValue: {
              values: h
            }
          };
        } else
          f = vo(o, s, d);
      } else
        l !== "in" && l !== "not-in" && l !== "array-contains-any" || So(d, l), f = WE(
          a,
          i,
          d,
          /* allowArrays= */
          l === "in" || l === "not-in"
        );
      const p = Rt.create(u, l, f);
      return function(h, m) {
        if (m.S()) {
          const b = Ud(h);
          if (b !== null && !b.isEqual(m.field))
            throw new te(ae, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${m.field.toString()}'`);
          const C = Bd(h);
          C !== null && JE(h, m.field, C);
        }
        const _ = function(b, C) {
          for (const O of b.filters)
            if (C.indexOf(O.op) >= 0)
              return O.op;
          return null;
        }(
          h,
          /**
          * Given an operator, returns the set of operators that cannot be used with it.
          *
          * Operators in a query must adhere to the following set of rules:
          * 1. Only one array operator is allowed.
          * 2. Only one disjunctive operator is allowed.
          * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
          * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
          *
          * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
          * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
          */
          function(b) {
            switch (b) {
              case "!=":
                return [
                  "!=",
                  "not-in"
                  /* NOT_IN */
                ];
              case "array-contains":
                return [
                  "array-contains",
                  "array-contains-any",
                  "not-in"
                  /* NOT_IN */
                ];
              case "in":
                return [
                  "array-contains-any",
                  "in",
                  "not-in"
                  /* NOT_IN */
                ];
              case "array-contains-any":
                return [
                  "array-contains",
                  "array-contains-any",
                  "in",
                  "not-in"
                  /* NOT_IN */
                ];
              case "not-in":
                return [
                  "array-contains",
                  "array-contains-any",
                  "in",
                  "not-in",
                  "!="
                  /* NOT_EQUAL */
                ];
              default:
                return [];
            }
          }(m.op)
        );
        if (_ !== null)
          throw _ === m.op ? new te(ae, `Invalid query. You cannot use more than one '${m.op.toString()}' filter.`) : new te(ae, `Invalid query. You cannot use '${m.op.toString()}' filters with '${_.toString()}' filters.`);
      }(s, p), p;
    }(e._query, "where", n, e.firestore._databaseId, this._t, this.gt, this.vt);
    return new ns(e.firestore, e.converter, function(s, i) {
      const a = s.filters.concat([i]);
      return new Fd(s.path, s.collectionGroup, s.explicitOrderBy.slice(), a, s.limit, s.limitType, s.startAt, s.endAt);
    }(e._query, r));
  }
}
function ir(t, e, n) {
  const r = e, s = Jd("where", t);
  return new XE(s, r, n);
}
function vo(t, e, n) {
  if (typeof (n = Ve(n)) == "string") {
    if (n === "")
      throw new te(ae, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!bE(e) && n.indexOf("/") !== -1)
      throw new te(ae, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const r = e.path.child(Fe.fromString(n));
    if (!He.isDocumentKey(r))
      throw new te(ae, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return mo(t, new He(r));
  }
  if (n instanceof $e)
    return mo(t, n._key);
  throw new te(ae, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${di(n)}.`);
}
function So(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new te(ae, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
  if (t.length > 10)
    throw new te(ae, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}
function JE(t, e, n) {
  if (!n.isEqual(e))
    throw new te(ae, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zd(t, e, n) {
  let r;
  return r = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, r;
}
class ef extends class {
  convertValue(e, n = "none") {
    switch (fn(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ke(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Hr(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw Se();
    }
  }
  convertObject(e, n) {
    const r = {};
    return ts(e.fields, (s, i) => {
      r[s] = this.convertValue(i, n);
    }), r;
  }
  convertGeoPoint(e) {
    return new nu(ke(e.latitude), ke(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = Md(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Vr(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = dn(e);
    return new it(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Fe.fromString(e);
    Ze(qd(r));
    const s = new Ur(r.get(1), r.get(3)), i = new He(r.popFirst(5));
    return s.isEqual(n) || // TODO(b/64130202): Somehow support foreign references.
    za(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), i;
  }
} {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new Hn(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new $e(
      this.firestore,
      /* converter= */
      null,
      n
    );
  }
}
function dt(t) {
  const e = er((t = Zn(t, $e)).firestore), n = new ef(t.firestore);
  return xE(e, [t._key]).then((r) => {
    Ze(r.length === 1);
    const s = r[0];
    return new zd(t.firestore, n, t._key, s.isFoundDocument() ? s : null, t.converter);
  });
}
function ft(t) {
  (function(r) {
    if (r.limitType === "L" && r.explicitOrderBy.length === 0)
      throw new te(Nd, "limitToLast() queries require specifying at least one orderBy() clause");
  })((t = Zn(t, ns))._query);
  const e = er(t.firestore), n = new ef(t.firestore);
  return HE(e, t._query).then((r) => {
    const s = r.map((i) => new Xd(t.firestore, n, i.key, i, t.converter));
    return t._query.limitType === "L" && // Limit to last queries reverse the orderBy constraint that was
    // specified by the user. As such, we need to reverse the order of the
    // results to return the documents in the expected order.
    s.reverse(), new KE(t, s);
  });
}
function Ht(t, e, n) {
  const r = Zd((t = Zn(t, $e)).converter, e, n), s = Gd(Ei(t.firestore), "setDoc", t._key, r, t.converter !== null, n);
  return pi(er(t.firestore), [s.toMutation(t._key, Wt.none())]);
}
function Xt(t, e, n, ...r) {
  const s = Ei((t = Zn(t, $e)).firestore);
  let i;
  return i = typeof (e = Ve(e)) == "string" || e instanceof mi ? GE(s, "updateDoc", t._key, e, n, r) : YE(s, "updateDoc", t._key, e), pi(er(t.firestore), [i.toMutation(t._key, Wt.exists(!0))]);
}
function ar(t) {
  return pi(er((t = Zn(t, $e)).firestore), [new Vd(t._key, Wt.none())]);
}
function _s(t, e) {
  const n = ie(t = Zn(t, Pt)), r = Zd(t.converter, e), s = Gd(Ei(t.firestore), "addDoc", n._key, r, n.converter !== null, {});
  return pi(er(t.firestore), [s.toMutation(n._key, Wt.exists(!1))]).then(() => n);
}
function ZE() {
  return new su("serverTimestamp");
}
(function(t) {
  Jn = t;
})(`${Kr}_lite`), Ct(new Et("firestore/lite", (t, { instanceIdentifier: e, options: n }) => {
  const r = t.getProvider("app").getImmediate(), s = new tu(new J_(t.getProvider("auth-internal")), new nE(t.getProvider("app-check-internal")), function(i, a) {
    if (!Object.prototype.hasOwnProperty.apply(i.options, ["projectId"]))
      throw new te(ae, '"projectId" not provided in firebase.initializeApp.');
    return new Ur(i.options.projectId, a);
  }(r, e), r);
  return n && s._setSettings(n), s;
}, "PUBLIC").setMultipleInstances(!0)), // RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
ct("firestore-lite", "3.5.0", ""), ct("firestore-lite", "3.5.0", "esm2017");
var e1 = "firebase", t1 = "9.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ct(e1, t1, "app");
const tf = "@firebase/installations", uu = "0.5.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nf = 1e4, rf = `w:${uu}`, sf = "FIS_v2", n1 = "https://firebaseinstallations.googleapis.com/v1", r1 = 60 * 60 * 1e3, s1 = "installations", i1 = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a1 = {
  [
    "missing-app-config-values"
    /* MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  [
    "not-registered"
    /* NOT_REGISTERED */
  ]: "Firebase Installation is not registered.",
  [
    "installation-not-found"
    /* INSTALLATION_NOT_FOUND */
  ]: "Firebase Installation not found.",
  [
    "request-failed"
    /* REQUEST_FAILED */
  ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  [
    "app-offline"
    /* APP_OFFLINE */
  ]: "Could not process request. Application offline.",
  [
    "delete-pending-registration"
    /* DELETE_PENDING_REGISTRATION */
  ]: "Can't delete installation while there is a pending registration request."
}, hn = new gn(s1, i1, a1);
function af(t) {
  return t instanceof bt && t.code.includes(
    "request-failed"
    /* REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uf({ projectId: t }) {
  return `${n1}/projects/${t}/installations`;
}
function of(t) {
  return {
    token: t.token,
    requestStatus: 2,
    expiresIn: o1(t.expiresIn),
    creationTime: Date.now()
  };
}
function cf(t, e) {
  return y(this, null, function* () {
    const r = (yield e.json()).error;
    return hn.create("request-failed", {
      requestName: t,
      serverCode: r.code,
      serverMessage: r.message,
      serverStatus: r.status
    });
  });
}
function lf({ apiKey: t }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": t
  });
}
function u1(t, { refreshToken: e }) {
  const n = lf(t);
  return n.append("Authorization", c1(e)), n;
}
function df(t) {
  return y(this, null, function* () {
    const e = yield t();
    return e.status >= 500 && e.status < 600 ? t() : e;
  });
}
function o1(t) {
  return Number(t.replace("s", "000"));
}
function c1(t) {
  return `${sf} ${t}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l1(r, s) {
  return y(this, arguments, function* ({ appConfig: t, heartbeatServiceProvider: e }, { fid: n }) {
    const i = uf(t), a = lf(t), o = e.getImmediate({
      optional: !0
    });
    if (o) {
      const f = yield o.getHeartbeatsHeader();
      f && a.append("x-firebase-client", f);
    }
    const u = {
      fid: n,
      authVersion: sf,
      appId: t.appId,
      sdkVersion: rf
    }, l = {
      method: "POST",
      headers: a,
      body: JSON.stringify(u)
    }, d = yield df(() => fetch(i, l));
    if (d.ok) {
      const f = yield d.json();
      return {
        fid: f.fid || n,
        registrationStatus: 2,
        refreshToken: f.refreshToken,
        authToken: of(f.authToken)
      };
    } else
      throw yield cf("Create Installation", d);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ff(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d1(t) {
  return btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const f1 = /^[cdef][\w-]{21}$/, va = "";
function h1() {
  try {
    const t = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
    const n = p1(t);
    return f1.test(n) ? n : va;
  } catch (t) {
    return va;
  }
}
function p1(t) {
  return d1(t).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(t) {
  return `${t.appName}!${t.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hf = /* @__PURE__ */ new Map();
function pf(t, e) {
  const n = bi(t);
  mf(n, e), m1(n, e);
}
function mf(t, e) {
  const n = hf.get(t);
  if (n)
    for (const r of n)
      r(e);
}
function m1(t, e) {
  const n = _1();
  n && n.postMessage({ key: t, fid: e }), E1();
}
let sn = null;
function _1() {
  return !sn && "BroadcastChannel" in self && (sn = new BroadcastChannel("[Firebase] FID Change"), sn.onmessage = (t) => {
    mf(t.data.key, t.data.fid);
  }), sn;
}
function E1() {
  hf.size === 0 && sn && (sn.close(), sn = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g1 = "firebase-installations-database", b1 = 1, pn = "firebase-installations-store";
let $i = null;
function ou() {
  return $i || ($i = Xl(g1, b1, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(pn);
      }
    }
  })), $i;
}
function Xs(t, e) {
  return y(this, null, function* () {
    const n = bi(t), s = (yield ou()).transaction(pn, "readwrite"), i = s.objectStore(pn), a = yield i.get(n);
    return yield i.put(e, n), yield s.done, (!a || a.fid !== e.fid) && pf(t, e.fid), e;
  });
}
function _f(t) {
  return y(this, null, function* () {
    const e = bi(t), r = (yield ou()).transaction(pn, "readwrite");
    yield r.objectStore(pn).delete(e), yield r.done;
  });
}
function Ti(t, e) {
  return y(this, null, function* () {
    const n = bi(t), s = (yield ou()).transaction(pn, "readwrite"), i = s.objectStore(pn), a = yield i.get(n), o = e(a);
    return o === void 0 ? yield i.delete(n) : yield i.put(o, n), yield s.done, o && (!a || a.fid !== o.fid) && pf(t, o.fid), o;
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cu(t) {
  return y(this, null, function* () {
    let e;
    const n = yield Ti(t.appConfig, (r) => {
      const s = T1(r), i = I1(t, s);
      return e = i.registrationPromise, i.installationEntry;
    });
    return n.fid === va ? { installationEntry: yield e } : {
      installationEntry: n,
      registrationPromise: e
    };
  });
}
function T1(t) {
  const e = t || {
    fid: h1(),
    registrationStatus: 0
    /* NOT_STARTED */
  };
  return Ef(e);
}
function I1(t, e) {
  if (e.registrationStatus === 0) {
    if (!navigator.onLine) {
      const s = Promise.reject(hn.create(
        "app-offline"
        /* APP_OFFLINE */
      ));
      return {
        installationEntry: e,
        registrationPromise: s
      };
    }
    const n = {
      fid: e.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, r = A1(t, n);
    return { installationEntry: n, registrationPromise: r };
  } else
    return e.registrationStatus === 1 ? {
      installationEntry: e,
      registrationPromise: y1(t)
    } : { installationEntry: e };
}
function A1(t, e) {
  return y(this, null, function* () {
    try {
      const n = yield l1(t, e);
      return Xs(t.appConfig, n);
    } catch (n) {
      throw af(n) && n.customData.serverCode === 409 ? yield _f(t.appConfig) : yield Xs(t.appConfig, {
        fid: e.fid,
        registrationStatus: 0
        /* NOT_STARTED */
      }), n;
    }
  });
}
function y1(t) {
  return y(this, null, function* () {
    let e = yield Co(t.appConfig);
    for (; e.registrationStatus === 1; )
      yield ff(100), e = yield Co(t.appConfig);
    if (e.registrationStatus === 0) {
      const { installationEntry: n, registrationPromise: r } = yield cu(t);
      return r || n;
    }
    return e;
  });
}
function Co(t) {
  return Ti(t, (e) => {
    if (!e)
      throw hn.create(
        "installation-not-found"
        /* INSTALLATION_NOT_FOUND */
      );
    return Ef(e);
  });
}
function Ef(t) {
  return v1(t) ? {
    fid: t.fid,
    registrationStatus: 0
    /* NOT_STARTED */
  } : t;
}
function v1(t) {
  return t.registrationStatus === 1 && t.registrationTime + nf < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S1(r, s) {
  return y(this, arguments, function* ({ appConfig: t, heartbeatServiceProvider: e }, n) {
    const i = C1(t, n), a = u1(t, n), o = e.getImmediate({
      optional: !0
    });
    if (o) {
      const f = yield o.getHeartbeatsHeader();
      f && a.append("x-firebase-client", f);
    }
    const u = {
      installation: {
        sdkVersion: rf,
        appId: t.appId
      }
    }, l = {
      method: "POST",
      headers: a,
      body: JSON.stringify(u)
    }, d = yield df(() => fetch(i, l));
    if (d.ok) {
      const f = yield d.json();
      return of(f);
    } else
      throw yield cf("Generate Auth Token", d);
  });
}
function C1(t, { fid: e }) {
  return `${uf(t)}/${e}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lu(t, e = !1) {
  return y(this, null, function* () {
    let n;
    const r = yield Ti(t.appConfig, (i) => {
      if (!gf(i))
        throw hn.create(
          "not-registered"
          /* NOT_REGISTERED */
        );
      const a = i.authToken;
      if (!e && N1(a))
        return i;
      if (a.requestStatus === 1)
        return n = O1(t, e), i;
      {
        if (!navigator.onLine)
          throw hn.create(
            "app-offline"
            /* APP_OFFLINE */
          );
        const o = L1(i);
        return n = R1(t, o), o;
      }
    });
    return n ? yield n : r.authToken;
  });
}
function O1(t, e) {
  return y(this, null, function* () {
    let n = yield Oo(t.appConfig);
    for (; n.authToken.requestStatus === 1; )
      yield ff(100), n = yield Oo(t.appConfig);
    const r = n.authToken;
    return r.requestStatus === 0 ? lu(t, e) : r;
  });
}
function Oo(t) {
  return Ti(t, (e) => {
    if (!gf(e))
      throw hn.create(
        "not-registered"
        /* NOT_REGISTERED */
      );
    const n = e.authToken;
    return D1(n) ? Object.assign(Object.assign({}, e), { authToken: {
      requestStatus: 0
      /* NOT_STARTED */
    } }) : e;
  });
}
function R1(t, e) {
  return y(this, null, function* () {
    try {
      const n = yield S1(t, e), r = Object.assign(Object.assign({}, e), { authToken: n });
      return yield Xs(t.appConfig, r), n;
    } catch (n) {
      if (af(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404))
        yield _f(t.appConfig);
      else {
        const r = Object.assign(Object.assign({}, e), { authToken: {
          requestStatus: 0
          /* NOT_STARTED */
        } });
        yield Xs(t.appConfig, r);
      }
      throw n;
    }
  });
}
function gf(t) {
  return t !== void 0 && t.registrationStatus === 2;
}
function N1(t) {
  return t.requestStatus === 2 && !w1(t);
}
function w1(t) {
  const e = Date.now();
  return e < t.creationTime || t.creationTime + t.expiresIn < e + r1;
}
function L1(t) {
  const e = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, t), { authToken: e });
}
function D1(t) {
  return t.requestStatus === 1 && t.requestTime + nf < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M1(t) {
  return y(this, null, function* () {
    const e = t, { installationEntry: n, registrationPromise: r } = yield cu(e);
    return r ? r.catch(console.error) : lu(e).catch(console.error), n.fid;
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P1(t, e = !1) {
  return y(this, null, function* () {
    const n = t;
    return yield k1(n), (yield lu(n, e)).token;
  });
}
function k1(t) {
  return y(this, null, function* () {
    const { registrationPromise: e } = yield cu(t);
    e && (yield e);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F1(t) {
  if (!t || !t.options)
    throw Yi("App Configuration");
  if (!t.name)
    throw Yi("App Name");
  const e = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const n of e)
    if (!t.options[n])
      throw Yi(n);
  return {
    appName: t.name,
    projectId: t.options.projectId,
    apiKey: t.options.apiKey,
    appId: t.options.appId
  };
}
function Yi(t) {
  return hn.create("missing-app-config-values", {
    valueName: t
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bf = "installations", B1 = "installations-internal", U1 = (t) => {
  const e = t.getProvider("app").getImmediate(), n = F1(e), r = Qr(e, "heartbeat");
  return {
    app: e,
    appConfig: n,
    heartbeatServiceProvider: r,
    _delete: () => Promise.resolve()
  };
}, x1 = (t) => {
  const e = t.getProvider("app").getImmediate(), n = Qr(e, bf).getImmediate();
  return {
    getId: () => M1(n),
    getToken: (s) => P1(n, s)
  };
};
function H1() {
  Ct(new Et(
    bf,
    U1,
    "PUBLIC"
    /* PUBLIC */
  )), Ct(new Et(
    B1,
    x1,
    "PRIVATE"
    /* PRIVATE */
  ));
}
H1();
ct(tf, uu);
ct(tf, uu, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ro = "analytics", V1 = "firebase_id", j1 = "origin", q1 = 60 * 1e3, $1 = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", Tf = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at = new ii("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function If(t) {
  return Promise.all(t.map((e) => e.catch((n) => n)));
}
function Y1(t, e) {
  const n = document.createElement("script");
  n.src = `${Tf}?l=${t}&id=${e}`, n.async = !0, document.head.appendChild(n);
}
function G1(t) {
  let e = [];
  return Array.isArray(window[t]) ? e = window[t] : window[t] = e, e;
}
function W1(t, e, n, r, s, i) {
  return y(this, null, function* () {
    const a = r[s];
    try {
      if (a)
        yield e[a];
      else {
        const u = (yield If(n)).find((l) => l.measurementId === s);
        u && (yield e[u.appId]);
      }
    } catch (o) {
      at.error(o);
    }
    t("config", s, i);
  });
}
function Q1(t, e, n, r, s) {
  return y(this, null, function* () {
    try {
      let i = [];
      if (s && s.send_to) {
        let a = s.send_to;
        Array.isArray(a) || (a = [a]);
        const o = yield If(n);
        for (const u of a) {
          const l = o.find((f) => f.measurementId === u), d = l && e[l.appId];
          if (d)
            i.push(d);
          else {
            i = [];
            break;
          }
        }
      }
      i.length === 0 && (i = Object.values(e)), yield Promise.all(i), t("event", r, s || {});
    } catch (i) {
      at.error(i);
    }
  });
}
function K1(t, e, n, r) {
  function s(i, a, o) {
    return y(this, null, function* () {
      try {
        i === "event" ? yield Q1(t, e, n, a, o) : i === "config" ? yield W1(t, e, n, r, a, o) : i === "consent" ? t("consent", "update", o) : t("set", a);
      } catch (u) {
        at.error(u);
      }
    });
  }
  return s;
}
function z1(t, e, n, r, s) {
  let i = function(...a) {
    window[r].push(arguments);
  };
  return window[s] && typeof window[s] == "function" && (i = window[s]), window[s] = K1(i, t, e, n), {
    gtagCore: i,
    wrappedGtag: window[s]
  };
}
function X1() {
  const t = window.document.getElementsByTagName("script");
  for (const e of Object.values(t))
    if (e.src && e.src.includes(Tf))
      return e;
  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J1 = {
  [
    "already-exists"
    /* ALREADY_EXISTS */
  ]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  [
    "already-initialized"
    /* ALREADY_INITIALIZED */
  ]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
  [
    "already-initialized-settings"
    /* ALREADY_INITIALIZED_SETTINGS */
  ]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  [
    "interop-component-reg-failed"
    /* INTEROP_COMPONENT_REG_FAILED */
  ]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  [
    "invalid-analytics-context"
    /* INVALID_ANALYTICS_CONTEXT */
  ]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "indexeddb-unavailable"
    /* INDEXEDDB_UNAVAILABLE */
  ]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "fetch-throttle"
    /* FETCH_THROTTLE */
  ]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  [
    "config-fetch-failed"
    /* CONFIG_FETCH_FAILED */
  ]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  [
    "no-api-key"
    /* NO_API_KEY */
  ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  [
    "no-app-id"
    /* NO_APP_ID */
  ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
}, _t = new gn("analytics", "Analytics", J1);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z1 = 30, eg = 1e3;
class tg {
  constructor(e = {}, n = eg) {
    this.throttleMetadata = e, this.intervalMillis = n;
  }
  getThrottleMetadata(e) {
    return this.throttleMetadata[e];
  }
  setThrottleMetadata(e, n) {
    this.throttleMetadata[e] = n;
  }
  deleteThrottleMetadata(e) {
    delete this.throttleMetadata[e];
  }
}
const Af = new tg();
function ng(t) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": t
  });
}
function rg(t) {
  return y(this, null, function* () {
    var e;
    const { appId: n, apiKey: r } = t, s = {
      method: "GET",
      headers: ng(r)
    }, i = $1.replace("{app-id}", n), a = yield fetch(i, s);
    if (a.status !== 200 && a.status !== 304) {
      let o = "";
      try {
        const u = yield a.json();
        !((e = u.error) === null || e === void 0) && e.message && (o = u.error.message);
      } catch (u) {
      }
      throw _t.create("config-fetch-failed", {
        httpStatus: a.status,
        responseMessage: o
      });
    }
    return a.json();
  });
}
function sg(r) {
  return y(this, arguments, function* (t, e = Af, n) {
    const { appId: s, apiKey: i, measurementId: a } = t.options;
    if (!s)
      throw _t.create(
        "no-app-id"
        /* NO_APP_ID */
      );
    if (!i) {
      if (a)
        return {
          measurementId: a,
          appId: s
        };
      throw _t.create(
        "no-api-key"
        /* NO_API_KEY */
      );
    }
    const o = e.getThrottleMetadata(s) || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now()
    }, u = new ug();
    return setTimeout(() => y(this, null, function* () {
      u.abort();
    }), n !== void 0 ? n : q1), yf({ appId: s, apiKey: i, measurementId: a }, o, u, e);
  });
}
function yf(i, a, o) {
  return y(this, arguments, function* (t, { throttleEndTimeMillis: e, backoffCount: n }, r, s = Af) {
    var u, l;
    const { appId: d, measurementId: f } = t;
    try {
      yield ig(r, e);
    } catch (p) {
      if (f)
        return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${(u = p) === null || u === void 0 ? void 0 : u.message}]`), { appId: d, measurementId: f };
      throw p;
    }
    try {
      const p = yield rg(t);
      return s.deleteThrottleMetadata(d), p;
    } catch (p) {
      const h = p;
      if (!ag(h)) {
        if (s.deleteThrottleMetadata(d), f)
          return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${h == null ? void 0 : h.message}]`), { appId: d, measurementId: f };
        throw p;
      }
      const m = Number((l = h == null ? void 0 : h.customData) === null || l === void 0 ? void 0 : l.httpStatus) === 503 ? Bu(n, s.intervalMillis, Z1) : Bu(n, s.intervalMillis), _ = {
        throttleEndTimeMillis: Date.now() + m,
        backoffCount: n + 1
      };
      return s.setThrottleMetadata(d, _), at.debug(`Calling attemptFetch again in ${m} millis`), yf(t, _, r, s);
    }
  });
}
function ig(t, e) {
  return new Promise((n, r) => {
    const s = Math.max(e - Date.now(), 0), i = setTimeout(n, s);
    t.addEventListener(() => {
      clearTimeout(i), r(_t.create("fetch-throttle", {
        throttleEndTimeMillis: e
      }));
    });
  });
}
function ag(t) {
  if (!(t instanceof bt) || !t.customData)
    return !1;
  const e = Number(t.customData.httpStatus);
  return e === 429 || e === 500 || e === 503 || e === 504;
}
class ug {
  constructor() {
    this.listeners = [];
  }
  addEventListener(e) {
    this.listeners.push(e);
  }
  abort() {
    this.listeners.forEach((e) => e());
  }
}
function og(t, e, n, r, s) {
  return y(this, null, function* () {
    if (s && s.global) {
      t("event", n, r);
      return;
    } else {
      const i = yield e, a = Object.assign(Object.assign({}, r), { send_to: i });
      t("event", n, a);
    }
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cg() {
  return y(this, null, function* () {
    var t;
    if (Wl())
      try {
        yield Ql();
      } catch (e) {
        return at.warn(_t.create("indexeddb-unavailable", {
          errorInfo: (t = e) === null || t === void 0 ? void 0 : t.toString()
        }).message), !1;
      }
    else
      return at.warn(_t.create("indexeddb-unavailable", {
        errorInfo: "IndexedDB is not available in this environment."
      }).message), !1;
    return !0;
  });
}
function lg(t, e, n, r, s, i, a) {
  return y(this, null, function* () {
    var o;
    const u = sg(t);
    u.then((h) => {
      n[h.measurementId] = h.appId, t.options.measurementId && h.measurementId !== t.options.measurementId && at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
    }).catch((h) => at.error(h)), e.push(u);
    const l = cg().then((h) => {
      if (h)
        return r.getId();
    }), [d, f] = yield Promise.all([
      u,
      l
    ]);
    X1() || Y1(i, d.measurementId), s("js", new Date());
    const p = (o = a == null ? void 0 : a.config) !== null && o !== void 0 ? o : {};
    return p[j1] = "firebase", p.update = !0, f != null && (p[V1] = f), s("config", d.measurementId, p), d.measurementId;
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dg {
  constructor(e) {
    this.app = e;
  }
  _delete() {
    return delete yr[this.app.options.appId], Promise.resolve();
  }
}
let yr = {}, No = [];
const wo = {};
let Gi = "dataLayer", fg = "gtag", Lo, vf, Do = !1;
function hg() {
  const t = [];
  if (Gl() && t.push("This is a browser extension environment."), N0() || t.push("Cookies are not available."), t.length > 0) {
    const e = t.map((r, s) => `(${s + 1}) ${r}`).join(" "), n = _t.create("invalid-analytics-context", {
      errorInfo: e
    });
    at.warn(n.message);
  }
}
function pg(t, e, n) {
  hg();
  const r = t.options.appId;
  if (!r)
    throw _t.create(
      "no-app-id"
      /* NO_APP_ID */
    );
  if (!t.options.apiKey)
    if (t.options.measurementId)
      at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
      throw _t.create(
        "no-api-key"
        /* NO_API_KEY */
      );
  if (yr[r] != null)
    throw _t.create("already-exists", {
      id: r
    });
  if (!Do) {
    G1(Gi);
    const { wrappedGtag: i, gtagCore: a } = z1(yr, No, wo, Gi, fg);
    vf = i, Lo = a, Do = !0;
  }
  return yr[r] = lg(t, No, wo, e, Lo, Gi, n), new dg(t);
}
function mg(t, e, n, r) {
  t = Ve(t), og(vf, yr[t.app.options.appId], e, n, r).catch((s) => at.error(s));
}
const Mo = "@firebase/analytics", Po = "0.8.0";
function _g() {
  Ct(new Et(
    Ro,
    (e, { options: n }) => {
      const r = e.getProvider("app").getImmediate(), s = e.getProvider("installations-internal").getImmediate();
      return pg(r, s, n);
    },
    "PUBLIC"
    /* PUBLIC */
  )), Ct(new Et(
    "analytics-internal",
    t,
    "PRIVATE"
    /* PRIVATE */
  )), ct(Mo, Po), ct(Mo, Po, "esm2017");
  function t(e) {
    try {
      const n = e.getProvider(Ro).getImmediate();
      return {
        logEvent: (r, s, i) => mg(n, r, s, i)
      };
    } catch (n) {
      throw _t.create("interop-component-reg-failed", {
        reason: n
      });
    }
  }
}
_g();
const Eg = {
  apiKey: "AIzaSyBI9tXI0PeNao2OLbs52E-ySP1ZLSoPbtU",
  authDomain: "shopicus-option-builder.firebaseapp.com",
  projectId: "shopicus-option-builder",
  storageBucket: "shopicus-option-builder.appspot.com",
  messagingSenderId: "840654951846",
  appId: "1:840654951846:web:217f89990f1cbe00ca6b67",
  measurementId: "G-7HRHJ92VF1"
}, gg = Fp(Eg), oe = VE(gg);
function Rn(t, e) {
  return y(this, null, function* () {
    for (let n = 0; n < t.length; n++)
      yield e(t[n], n, t);
  });
}
const bg = `/*
	개별 component reducer가 호출되기 전에 항상 호출됨
	draftOutput는 {}인 상태이며 모든 reducer에 전달되면서 내용을 채워야 함.
*/
export function preProcess(draftOutput, state, productTablesForBrowser) {

}

/*
	모든 component reducer가 호출되고 마지막 단계에서 호출됨.
*/
export function postProcess(draftOutput, state, productTablesForBrowser) {

}

`;
function Sa() {
  return {
    html: "",
    use: !1
  };
}
function St(t) {
  return typeof t == "function";
}
function Sf(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Wi = Sf(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, s) {
      return s + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ca(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ii = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, s, i;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var o = _a(a), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.remove(this);
            }
          } catch (_) {
            e = { error: _ };
          } finally {
            try {
              u && !u.done && (n = o.return) && n.call(o);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          a.remove(this);
      var d = this.initialTeardown;
      if (St(d))
        try {
          d();
        } catch (_) {
          i = _ instanceof Wi ? _.errors : [_];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var p = _a(f), h = p.next(); !h.done; h = p.next()) {
            var m = h.value;
            try {
              ko(m);
            } catch (_) {
              i = i != null ? i : [], _ instanceof Wi ? i = Us(Us([], Bs(i)), Bs(_.errors)) : i.push(_);
            }
          }
        } catch (_) {
          r = { error: _ };
        } finally {
          try {
            h && !h.done && (s = p.return) && s.call(p);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new Wi(i);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ko(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && Ca(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ca(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Cf = Ii.EMPTY;
function Of(t) {
  return t instanceof Ii || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function ko(t) {
  St(t) ? t() : t.unsubscribe();
}
var du = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Oa = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var s = Oa.delegate;
    return s != null && s.setTimeout ? s.setTimeout.apply(s, Us([t, e], Bs(n))) : setTimeout.apply(void 0, Us([t, e], Bs(n)));
  },
  clearTimeout: function(t) {
    var e = Oa.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Tg(t) {
  Oa.setTimeout(function() {
    throw t;
  });
}
function Fo() {
}
var Es = null;
function ws(t) {
  if (du.useDeprecatedSynchronousErrorHandling) {
    var e = !Es;
    if (e && (Es = { errorThrown: !1, error: null }), t(), e) {
      var n = Es, r = n.errorThrown, s = n.error;
      if (Es = null, r)
        throw s;
    }
  } else
    t();
}
var fu = function(t) {
  zn(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Of(n) && n.add(r)) : r.destination = vg, r;
  }
  return e.create = function(n, r, s) {
    return new Ra(n, r, s);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ii), Ig = Function.prototype.bind;
function Qi(t, e) {
  return Ig.call(t, e);
}
var Ag = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        gs(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        gs(r);
      }
    else
      gs(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        gs(n);
      }
  }, t;
}(), Ra = function(t) {
  zn(e, t);
  function e(n, r, s) {
    var i = t.call(this) || this, a;
    if (St(n) || !n)
      a = {
        next: n != null ? n : void 0,
        error: r != null ? r : void 0,
        complete: s != null ? s : void 0
      };
    else {
      var o;
      i && du.useDeprecatedNextContext ? (o = Object.create(n), o.unsubscribe = function() {
        return i.unsubscribe();
      }, a = {
        next: n.next && Qi(n.next, o),
        error: n.error && Qi(n.error, o),
        complete: n.complete && Qi(n.complete, o)
      }) : a = n;
    }
    return i.destination = new Ag(a), i;
  }
  return e;
}(fu);
function gs(t) {
  Tg(t);
}
function yg(t) {
  throw t;
}
var vg = {
  closed: !0,
  next: Fo,
  error: yg,
  complete: Fo
}, Sg = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Cg(t) {
  return t;
}
function Og(t) {
  return t.length === 0 ? Cg : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, s) {
      return s(r);
    }, n);
  };
}
var Na = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var s = this, i = Ng(e) ? e : new Ra(e, n, r);
    return ws(function() {
      var a = s, o = a.operator, u = a.source;
      i.add(o ? o.call(i, u) : u ? s._subscribe(i) : s._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Bo(n), new n(function(s, i) {
      var a = new Ra({
        next: function(o) {
          try {
            e(o);
          } catch (u) {
            i(u), a.unsubscribe();
          }
        },
        error: i,
        complete: s
      });
      r.subscribe(a);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Sg] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Og(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Bo(e), new e(function(r, s) {
      var i;
      n.subscribe(function(a) {
        return i = a;
      }, function(a) {
        return s(a);
      }, function() {
        return r(i);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Bo(t) {
  var e;
  return (e = t != null ? t : du.Promise) !== null && e !== void 0 ? e : Promise;
}
function Rg(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function Ng(t) {
  return t && t instanceof fu || Rg(t) && Of(t);
}
function wg(t) {
  return St(t == null ? void 0 : t.lift);
}
function Rf(t) {
  return function(e) {
    if (wg(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Nf(t, e, n, r, s) {
  return new Lg(t, e, n, r, s);
}
var Lg = function(t) {
  zn(e, t);
  function e(n, r, s, i, a, o) {
    var u = t.call(this, n) || this;
    return u.onFinalize = a, u.shouldUnsubscribe = o, u._next = r ? function(l) {
      try {
        r(l);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, u._error = i ? function(l) {
      try {
        i(l);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, u._complete = s ? function() {
      try {
        s();
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(fu), Dg = Sf(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), wf = function(t) {
  zn(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Uo(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Dg();
  }, e.prototype.next = function(n) {
    var r = this;
    ws(function() {
      var s, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var a = _a(r.currentObservers), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            u.next(n);
          }
        } catch (l) {
          s = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (s)
              throw s.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    ws(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var s = r.observers; s.length; )
          s.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    ws(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, s = this, i = s.hasError, a = s.isStopped, o = s.observers;
    return i || a ? Cf : (this.currentObservers = null, o.push(n), new Ii(function() {
      r.currentObservers = null, Ca(o, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, s = r.hasError, i = r.thrownError, a = r.isStopped;
    s ? n.error(i) : a && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Na();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Uo(n, r);
  }, e;
}(Na), Uo = function(t) {
  zn(e, t);
  function e(n, r) {
    var s = t.call(this) || this;
    return s.destination = n, s.source = r, s;
  }
  return e.prototype.next = function(n) {
    var r, s;
    (s = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || s === void 0 || s.call(r, n);
  }, e.prototype.error = function(n) {
    var r, s;
    (s = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || s === void 0 || s.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, s;
    return (s = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && s !== void 0 ? s : Cf;
  }, e;
}(wf), wa = function(t) {
  zn(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, s = n.thrownError, i = n._value;
    if (r)
      throw s;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(wf), Mg = new Na(function(t) {
  return t.complete();
});
function xo(t, e) {
  return Rf(function(n, r) {
    var s = 0;
    n.subscribe(Nf(r, function(i) {
      return t.call(e, i, s++) && r.next(i);
    }));
  });
}
function Ho(t) {
  return t <= 0 ? function() {
    return Mg;
  } : Rf(function(e, n) {
    var r = 0;
    e.subscribe(Nf(n, function(s) {
      ++r <= t && (n.next(s), t <= r && n.complete());
    }));
  });
}
let hu = {};
hu = {
  production: !0,
  optionset_api_host: "https://optionset-server-dot-shopicus-option-builder.du.r.appspot.com"
};
class Pg {
  constructor() {
    Re(this, "auth");
    Re(this, "user");
    Re(this, "userInfo", { email: null });
    Re(this, "partnerId", "");
    Re(this, "isReady$", new wa(!1));
    this.auth = x_();
  }
  login(e, n) {
    return Om(this.auth, e, n).then((r) => (this.user = r, r.user.getIdTokenResult())).then((r) => {
    });
  }
  logout() {
    return Nm(this.auth).then(() => {
      this.user = null;
    });
  }
  monitorUserState(e) {
    return Rm(this.auth, (n) => {
      n ? (this.userInfo = {
        email: n.email
      }, n.getIdTokenResult().then((r) => this.after_auth(r)).then(() => {
        e && e(n);
      })) : (this.userInfo = {
        email: null
      }, this.after_auth(null), e && e(n));
    });
  }
  after_auth(e) {
    e ? (this.partnerId = e.claims.partner_code, this.isReady$.next(!0)) : this.isReady$.next(!1);
  }
  test_db() {
    return y(this, null, function* () {
      const e = Pe(oe, "optionsets"), n = sr(e, ir("partner", "==", this.partnerId));
      (yield ft(n)).forEach((s) => {
        console.log(s.id, " => ", s.data());
      });
    });
  }
  getOptionsetDataArray(e) {
    return y(this, null, function* () {
      const n = Pe(oe, `base/${e}/options`);
      return (yield ft(n)).docs.map((s) => ({
        docId: s.id,
        data: s.data()
      })).sort((s, i) => s.data.order - i.data.order);
    });
  }
  getOptionsetBody(e) {
    return y(this, null, function* () {
      var u;
      const n = ie(oe, "base", e), r = Pe(n, "body"), s = ie(r, "master"), i = yield dt(s), a = ie(r, "layout"), o = yield dt(a);
      return [i.data(), (u = o.data()) != null ? u : Sa()];
    });
  }
  getOptionsetData(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e), r = yield dt(n);
      return Ke({
        docId: e
      }, r.data());
    });
  }
  getOptionsetItems() {
    return y(this, null, function* () {
      const e = Pe(oe, "base"), n = sr(e, ir("partnerId", "==", this.partnerId));
      return (yield ft(n)).docs.map((s) => Ke({
        docId: s.id
      }, s.data()));
    });
  }
  addOptionSet(e, n = null) {
    return y(this, null, function* () {
      var i, a;
      let r = yield _s(Pe(oe, "base"), {
        partnerId: this.partnerId,
        title: e,
        published: !1,
        ctime: new Date(),
        folderName: (i = n == null ? void 0 : n.name) != null ? i : null,
        folderId: (a = n == null ? void 0 : n.docId) != null ? a : null,
        tableBaseId: null
      });
      console.log("addOptionset", n);
      const s = Pe(r, "body");
      yield Ht(ie(s, "master"), {
        masterReducerJs: "",
        sources: [
          {
            id: "main.js",
            source: bg
          }
        ]
      }), Ht(ie(s, "layout"), Sa());
    });
  }
  addFolder(e) {
    return y(this, null, function* () {
      yield _s(Pe(oe, "folder"), {
        name: e,
        partnerId: this.partnerId,
        ctime: new Date()
      });
    });
  }
  getFolderItems() {
    return y(this, null, function* () {
      const e = Pe(oe, "folder"), n = sr(e, ir("partnerId", "==", this.partnerId)), s = (yield ft(n)).docs.map((i) => Ke({
        docId: i.id
      }, i.data()));
      return s.sort((i, a) => i.name.localeCompare(a.name, "ko")), s;
    });
  }
  getFolderNameById(e) {
    return y(this, null, function* () {
      const n = ie(oe, "folder", e);
      return (yield dt(n)).data().name;
    });
  }
  moveOptionsetToFolder(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e);
      yield Xt(r, {
        folderId: n.docId,
        folderName: n.name
      });
    });
  }
  deleteFolder(e) {
    return y(this, null, function* () {
      yield ar(ie(oe, "folder", e));
      const n = Pe(oe, "base"), r = sr(n, ir("folderId", "==", e));
      (yield ft(r)).forEach((i) => {
        this.moveOptionsetToFolder(i.id, { docId: "", name: "" });
      });
    });
  }
  renameFolder(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "folder", e);
      yield Xt(r, {
        name: n
      });
      const s = Pe(oe, "base"), i = sr(s, ir("folderId", "==", e));
      (yield ft(i)).forEach((o) => {
        this.moveOptionsetToFolder(o.id, { docId: e, name: n });
      });
    });
  }
  deleteOptionset(e) {
    return y(this, null, function* () {
      yield this.deleteOptionsCollection(e), yield this.deleteBodyCollection(e), yield this.deletePublishCollection(e), yield ar(ie(oe, "base", e));
    });
  }
  deleteOptionsCollection(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e), r = Pe(n, "options"), s = yield ft(r);
      yield Rn(s.docs, (i) => y(this, null, function* () {
        yield this.deleteOption(e, i.id), console.log(i.id);
      }));
    });
  }
  deleteBodyCollection(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e), r = Pe(n, "body"), s = yield ft(r);
      yield Rn(s.docs, (i) => y(this, null, function* () {
        const a = ie(r, i.id);
        yield ar(a);
      }));
    });
  }
  deletePublishCollection(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e), r = Pe(n, "publish"), s = yield ft(r);
      yield Rn(s.docs, (i) => y(this, null, function* () {
        const a = ie(r, i.id);
        yield ar(a);
      }));
    });
  }
  addOption(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e), s = Pe(r, "options");
      let i = yield _s(s, n);
      return console.log(i), i.id;
    });
  }
  setOption(e, n, r) {
    return y(this, null, function* () {
      const s = ie(oe, "base", e), i = ie(s, "options", n);
      let a = yield Ht(i, r);
      return console.log(a), a;
    });
  }
  deleteOption(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e), s = ie(r, "options", n);
      return ar(s);
    });
  }
  updateMasterDoc(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e), s = ie(r, "body", "master");
      yield Ht(s, n);
    });
  }
  updateLayoutDoc(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e), s = ie(r, "body", "layout");
      yield Ht(s, n);
    });
  }
  setOptionOrder(e, n) {
    return y(this, null, function* () {
      yield Rn(n, (i) => y(this, [i], function* ({ org: r, dst: s }) {
        if (r.order !== s.order) {
          console.log(r, s);
          const a = ie(oe, "base", e), o = ie(a, "options", s.docId);
          s.comp.update((u) => (u.order = r.order, u)), yield Xt(o, {
            order: r.order
          });
        }
      }));
    });
  }
  setSelectOptionOrder(e, n) {
    return y(this, null, function* () {
    });
  }
  /*
      "/base/{optionset-id}/publish/doc"에 obj를 저장한다.
  */
  publishOptionSet(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e);
      yield Xt(r, {
        published: !0
      });
      const s = ie(oe, "base", e), i = ie(s, "publish", "latest");
      yield Ht(i, Object.assign({}, n, {
        created: ZE()
      }));
    });
  }
  getPublishedOptionSet(e, n) {
    return y(this, null, function* () {
      const r = ie(ie(oe, "base", n), "publish", "latest");
      return (yield dt(r)).data();
    });
  }
  getProductTablesForBrowser(e, n) {
    return y(this, null, function* () {
      const s = ie(oe, n ? "productTablesForBrowser" : "productTablesForBrowser_staging", e);
      return (yield dt(s)).data();
    });
  }
  udpatedTableBaseId(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e);
      yield Xt(r, {
        tableBaseId: n
      });
    });
  }
  getTableBaseId(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e);
      return (yield dt(n)).data().tableBaseId;
    });
  }
  fetchAirtable(e, n, r) {
    return y(this, null, function* () {
      console.log("fetch start");
      let s = "/api/optionset/fetchAirtable";
      if (e === "staging" && (s = "/api/optionset/fetchAirtable/staging"), n && n.length > 0)
        try {
          (yield (yield fetch(`${hu.optionset_api_host}${s}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              partnerId: n,
              baseId: r
            })
          })).json()).success ? (console.log("Fetch Airtable success"), alert("업데이트가 완료되었습니다. 새로고침을 하거나 옵션을 변경해보세요.")) : (console.log("Fetch Airtable failed"), alert("업데이트 실패"));
        } catch (i) {
          console.log("Fetching Airtable failed", i);
        }
      else
        console.log("partnerId is not set");
    });
  }
  getDocLink(e) {
    return y(this, null, function* () {
      const n = ie(oe, "docLinks", e);
      return (yield dt(n)).data().url;
    });
  }
  cloneOptionset(e) {
    return y(this, null, function* () {
      console.log("start Cloning."), console.log(`## base/${e}`);
      const n = yield dt(ie(oe, `base/${e}`));
      console.log(n.data());
      const r = yield ft(Pe(oe, `base/${e}/body`));
      console.log(`## base/${e}/body`), r.forEach((l) => {
        console.log(l.id, " => ", l.data());
      });
      const s = yield ft(Pe(oe, `base/${e}/options`));
      console.log(`## base/${e}/options`), s.forEach((l) => {
        console.log(l.id, " => ", l.data());
      });
      let i = n.data(), a = yield _s(Pe(oe, "base"), cs(Ke({}, i), {
        title: "Copy of " + i.title,
        published: !1,
        originalIdOfReplica: e,
        ctime: new Date()
        // 생성일
      }));
      console.log("newDocRef", a.id);
      const o = Pe(a, "body");
      yield Rn(r.docs, (l) => y(this, null, function* () {
        yield Ht(ie(o, l.id), l.data());
      }));
      const u = Pe(a, "options");
      yield Rn(s.docs, (l) => y(this, null, function* () {
        yield Ht(ie(u, l.id), l.data());
      }));
    });
  }
  renameTitle(e, n) {
    return y(this, null, function* () {
      yield Xt(ie(oe, `base/${e}`), {
        title: n
      });
    });
  }
  getDocTitle(e) {
    return y(this, null, function* () {
      const n = ie(oe, "base", e);
      return (yield dt(n)).data().title;
    });
  }
  getProviderInfo(e) {
    return y(this, null, function* () {
      const n = ie(oe, "providerInfo", e);
      return (yield dt(n)).data().providers;
    });
  }
  updateProviderInfo(e, n) {
    return y(this, null, function* () {
      const r = ie(oe, "base", e);
      yield Xt(r, {
        provider: n
      });
    });
  }
}
let ht = new Pg();
var Ki = {};
function kg(t, e, n) {
  const r = typeof localStorage != "undefined" && typeof window != "undefined", s = (n == null ? void 0 : n.serializer) || JSON;
  function i(a, o) {
    r && localStorage.setItem(a, s.stringify(o));
  }
  if (!Ki[t]) {
    const a = me(e, (l) => {
      const d = r ? localStorage.getItem(t) : null;
      if (d && l(s.parse(d)), r) {
        const f = (p) => {
          p.key === t && l(p.newValue ? s.parse(p.newValue) : null);
        };
        return window.addEventListener("storage", f), () => window.removeEventListener("storage", f);
      }
    }), { subscribe: o, set: u } = a;
    Ki[t] = {
      set(l) {
        i(t, l), u(l);
      },
      update(l) {
        const d = l(ee(a));
        i(t, d), u(d);
      },
      subscribe: o
    };
  }
  return Ki[t];
}
let Fg = (t) => crypto.getRandomValues(new Uint8Array(t)), Bg = (t, e, n) => {
  let r = (2 << Math.log(t.length - 1) / Math.LN2) - 1, s = -~(1.6 * r * e / t.length);
  return (i = e) => {
    let a = "";
    for (; ; ) {
      let o = n(s), u = s;
      for (; u--; )
        if (a += t[o[u] & r] || "", a.length === i)
          return a;
    }
  };
}, bn = (t, e = 21) => Bg(t, e, Fg);
const tr = `return new class {
	initState(id, comp, draftState) {
		draftState.ui[id].value = comp.properties.value;
	}
	onChange(id, comp, draftState, valueChange, service) {
		console.log("onChange", valueChange)
	}	
	updateState(id, comp, draftState) {
		//console.log('updateState: ', id, draftState)
	}
	produce(draftOutput, id, comp, state) {
		
	}
}`, Lf = `.osb-title {
    font-size: 0.875em;
    font-weight: 500;
    margin-bottom: 0.5em;
}

.osb-desc {
    font-size: 0.75em;
    margin-bottom: 0.5em;
}

.osb-label {
    font-size: 0.875em;
}

.osb-form-control,
input,
label {
    cursor: pointer;
}

.osb-form-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.osb-checkbox {
    accent-color: black;
    border-radius: 0.5rem;
    width: 0.875rem;
    height: 0.875rem;
}

.osb-checkbox:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}
`, Ug = bn("abcdefgABCDEFG", 5);
function xg(t) {
  return {
    id: Ug(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Checkbox",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      name: "옵션 값",
      value: !0
    },
    reducer: tr,
    css: Lf
  };
}
const Df = `.osb-title {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.osb-desc {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
}

.osb-label {
    font-size: 0.875rem;
}

.osb-select {
    font-size: 0.875rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid #d1d5db;
    appearance: none;
    padding: 0 2rem 0 0.75rem;
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
    background-size: 4px 4px, 4px 4px;
    background-repeat: no-repeat;
}

.osb-select:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}
`, Vo = bn("abcdefgABCDEFG", 5);
function Hg(t) {
  return {
    id: Vo(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Dropdown",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      placeholder: "하나를 선택하세요.",
      value: "",
      selectedIndex: null,
      options: [
        {
          id: Vo(),
          value: "value",
          displayName: "표시 텍스트",
          enabled: !0,
          show: !0
        }
      ]
    },
    reducer: tr,
    css: Df
  };
}
const Mf = `.osb-title {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.osb-desc {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
}

.osb-label {
    font-size: 0.875rem;
}

.osb-select {
    font-size: 0.875rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid #d1d5db;
    appearance: none;
    padding: 0 2rem 0 0.75rem;
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
    background-size: 4px 4px, 4px 4px;
    background-repeat: no-repeat;
}

.osb-select:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}
`, jo = bn("abcdefgABCDEFG", 5);
function Vg(t, e) {
  return {
    id: jo(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "SingleSelect",
    title: "제목 없는 옵션",
    description: "",
    properties: {
      view: e,
      placeholder: "하나를 선택하세요.",
      value: "",
      valueSchema: "",
      selectedIndex: null,
      columns: 2,
      options: [
        {
          id: jo(),
          value: "value",
          displayName: "표시 텍스트",
          details: {
            imgUrl: "url",
            list: [
              "description 1",
              "description 2"
            ]
          },
          enabled: !0,
          show: !0
        }
      ]
    },
    reducer: tr,
    css: Mf
  };
}
const jg = `return new class {
	initState(id, comp, draftState) {
		// selectedQuantitySetId가 가리키는 quantity set이 선택되어 있도록 함.
		let selectedQuantitySetId = comp.properties.selectedQuantitySetId
		draftState.ui[id].selectedQuantitySetId = selectedQuantitySetId;

		// quantity set의 value가 선택되어 있도록 함.
		let property = comp.properties.array.find(property => property.id === selectedQuantitySetId);
		draftState.ui[id].value = property.value;
	}
	onChange(id, comp, draftState, valueChange, service) {
		console.log("onChange", valueChange)
	}	

	updateState(id, comp, draftState) {
		//console.log('updateState: ', id, draftState)
	}

	afterAllStateUpdated(id, comp, draftState, service) {
		// Quantity 컴포넌트가 여러 QuantitySet을 가진 경우 
		// requirement에 부합하는 것을 얻어내고 그것이 화면에 나오도록 함.
        console.log("afterAllStateUpdated:draftState", draftState);
        
        /*
            server.selectQuantitySet() 설명
            - requirements는 옵션빌더 우측의 Inspect -> PROPERTY 창에서 확인가능함.
            - PROPERTY창의 propertieS/array[]/requirements경로를 각각 비교하여
              아래 requirements의 값과 일치하는 QuantitySet을 찾아 선택함
        */
        let requirements = {
            //ex. sizeno: draftState.ui.sizeno.value
        }
        let foundQuantitySet = service.selectQuantitySet(id, draftState, requirements) 
    }	

	produce(draftOutput, id, comp, state) {
		
	}
}`, Pf = `.osb-title {
    font-size: 0.875em;
    font-weight: 500;
    margin-bottom: 0.5em;
}

.osb-desc {
    font-size: 0.75em;
    margin-bottom: 0.5em;
}

.osb-form-control {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.osb-select {
    font-size: 0.875rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid #d1d5db;
    appearance: none;
    padding: 0 2rem 0 0.75rem;
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
    background-size: 4px 4px, 4px 4px;
    background-repeat: no-repeat;
}

.osb-select:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}

.osb-input {
    font-size: 0.875rem;
    height: 2.4rem;
    width: 4rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
    padding: 0 1rem;
}

.osb-input:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}

.osb-input + span {
    font-size: 0.75rem;
    margin-left: 0.25rem;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
`, qo = bn("abcdefgABCDEFG", 5);
function qg(t) {
  return {
    id: qo(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Quantity",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      selectedQuantitySetId: null,
      array: [
        {
          id: qo(),
          placeholder: "",
          value: 50,
          selectedIndex: null,
          options: [50, 100, 200, 300, 400],
          allowManual: !0,
          unit: "매"
        }
      ]
    },
    reducer: jg,
    css: Pf
  };
}
const kf = `.osb-title {
    font-size: 0.875em;
    font-weight: 500;
    margin-bottom: 0.5em;
}

.osb-desc {
    font-size: 0.75em;
    margin-bottom: 0.5em;
}

.osb-label {
    margin-top: 0.5rem;
    font-size: 0.875rem;
}
`, $g = bn("abcdefgABCDEFG", 5);
function Yg(t) {
  return {
    id: $g(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Label",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      value: "내용을 입력하세요."
    },
    reducer: tr,
    css: kf
  };
}
const Ff = `.osb-title {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.osb-desc {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
}

.osb-label {
    font-size: 0.875rem;
}

.osb-input {
    font-size: 0.875rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
    appearance: none;
    padding: 0 0.75rem;
}

.osb-input:focus {
    outline: 2px solid #d1d5db;
    outline-offset: 2px;
}
`, Gg = bn("abcdefgABCDEFG", 5);
function Wg(t) {
  return {
    id: Gg(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Input",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      placeholder: "내용을 입력하세요.",
      value: "",
      type: "text",
      min: 0,
      max: 100,
      maxlength: 30
    },
    reducer: tr,
    css: Ff
  };
}
const Bf = `.osb-title {
    font-size: 0.875em;
    font-weight: 500;
    margin-bottom: 0.5em;
}

.osb-desc {
    font-size: 0.75em;
    margin-bottom: 0.5em;
}

.osb-label {
    font-size: 0.875em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.osb-form-control,
input,
label {
    cursor: pointer;
}

.osb-radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.osb-radio {
    accent-color: black;
    width: 0.875rem;
    height: 0.875rem;
}

.disabled {
    opacity: 0.5;
}
`, $o = bn("abcdefgABCDEFG", 5);
function Qg(t) {
  return {
    id: $o(),
    order: t,
    enabled: !0,
    show: !0,
    active: !0,
    isQuantity: !1,
    reusable: !1,
    uiType: "Radio",
    title: "제목 없는 옵션",
    description: "설명을 입력하세요.",
    properties: {
      placeholder: "하나를 선택하세요.",
      value: "",
      selectedIndex: null,
      options: [
        {
          id: $o(),
          value: "value",
          displayName: "표시 텍스트",
          enabled: !0,
          show: !0
        }
      ]
    },
    reducer: tr,
    css: Bf
  };
}
var Kg = typeof global == "object" && global && global.Object === Object && global;
const Uf = Kg;
var zg = typeof self == "object" && self && self.Object === Object && self, Xg = Uf || zg || Function("return this")();
const Nt = Xg;
var Jg = Nt.Symbol;
const Vn = Jg;
var xf = Object.prototype, Zg = xf.hasOwnProperty, eb = xf.toString, ur = Vn ? Vn.toStringTag : void 0;
function tb(t) {
  var e = Zg.call(t, ur), n = t[ur];
  try {
    t[ur] = void 0;
    var r = !0;
  } catch (i) {
  }
  var s = eb.call(t);
  return r && (e ? t[ur] = n : delete t[ur]), s;
}
var nb = Object.prototype, rb = nb.toString;
function sb(t) {
  return rb.call(t);
}
var ib = "[object Null]", ab = "[object Undefined]", Yo = Vn ? Vn.toStringTag : void 0;
function ss(t) {
  return t == null ? t === void 0 ? ab : ib : Yo && Yo in Object(t) ? tb(t) : sb(t);
}
function is(t) {
  return t != null && typeof t == "object";
}
var ub = Array.isArray;
const Ai = ub;
function as(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ob = "[object AsyncFunction]", cb = "[object Function]", lb = "[object GeneratorFunction]", db = "[object Proxy]";
function Hf(t) {
  if (!as(t))
    return !1;
  var e = ss(t);
  return e == cb || e == lb || e == ob || e == db;
}
var fb = Nt["__core-js_shared__"];
const zi = fb;
var Go = function() {
  var t = /[^.]+$/.exec(zi && zi.keys && zi.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function hb(t) {
  return !!Go && Go in t;
}
var pb = Function.prototype, mb = pb.toString;
function Tn(t) {
  if (t != null) {
    try {
      return mb.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var _b = /[\\^$.*+?()[\]{}|]/g, Eb = /^\[object .+?Constructor\]$/, gb = Function.prototype, bb = Object.prototype, Tb = gb.toString, Ib = bb.hasOwnProperty, Ab = RegExp(
  "^" + Tb.call(Ib).replace(_b, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yb(t) {
  if (!as(t) || hb(t))
    return !1;
  var e = Hf(t) ? Ab : Eb;
  return e.test(Tn(t));
}
function vb(t, e) {
  return t == null ? void 0 : t[e];
}
function In(t, e) {
  var n = vb(t, e);
  return yb(n) ? n : void 0;
}
var Sb = In(Nt, "WeakMap");
const La = Sb;
var Wo = Object.create, Cb = function() {
  function t() {
  }
  return function(e) {
    if (!as(e))
      return {};
    if (Wo)
      return Wo(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const Ob = Cb;
function Rb(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var Nb = function() {
  try {
    var t = In(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}();
const Qo = Nb;
function wb(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Lb = 9007199254740991, Db = /^(?:0|[1-9]\d*)$/;
function Mb(t, e) {
  var n = typeof t;
  return e = e == null ? Lb : e, !!e && (n == "number" || n != "symbol" && Db.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Vf(t, e, n) {
  e == "__proto__" && Qo ? Qo(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function jf(t, e) {
  return t === e || t !== t && e !== e;
}
var Pb = Object.prototype, kb = Pb.hasOwnProperty;
function qf(t, e, n) {
  var r = t[e];
  (!(kb.call(t, e) && jf(r, n)) || n === void 0 && !(e in t)) && Vf(t, e, n);
}
function yi(t, e, n, r) {
  var s = !n;
  n || (n = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var o = e[i], u = r ? r(n[o], t[o], o, n, t) : void 0;
    u === void 0 && (u = t[o]), s ? Vf(n, o, u) : qf(n, o, u);
  }
  return n;
}
var Fb = 9007199254740991;
function $f(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Fb;
}
function pu(t) {
  return t != null && $f(t.length) && !Hf(t);
}
var Bb = Object.prototype;
function vi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Bb;
  return t === n;
}
function Ub(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var xb = "[object Arguments]";
function Ko(t) {
  return is(t) && ss(t) == xb;
}
var Yf = Object.prototype, Hb = Yf.hasOwnProperty, Vb = Yf.propertyIsEnumerable, jb = Ko(function() {
  return arguments;
}()) ? Ko : function(t) {
  return is(t) && Hb.call(t, "callee") && !Vb.call(t, "callee");
};
const Gf = jb;
function qb() {
  return !1;
}
var Wf = typeof exports == "object" && exports && !exports.nodeType && exports, zo = Wf && typeof module == "object" && module && !module.nodeType && module, $b = zo && zo.exports === Wf, Xo = $b ? Nt.Buffer : void 0, Yb = Xo ? Xo.isBuffer : void 0, Gb = Yb || qb;
const mu = Gb;
var Wb = "[object Arguments]", Qb = "[object Array]", Kb = "[object Boolean]", zb = "[object Date]", Xb = "[object Error]", Jb = "[object Function]", Zb = "[object Map]", eT = "[object Number]", tT = "[object Object]", nT = "[object RegExp]", rT = "[object Set]", sT = "[object String]", iT = "[object WeakMap]", aT = "[object ArrayBuffer]", uT = "[object DataView]", oT = "[object Float32Array]", cT = "[object Float64Array]", lT = "[object Int8Array]", dT = "[object Int16Array]", fT = "[object Int32Array]", hT = "[object Uint8Array]", pT = "[object Uint8ClampedArray]", mT = "[object Uint16Array]", _T = "[object Uint32Array]", be = {};
be[oT] = be[cT] = be[lT] = be[dT] = be[fT] = be[hT] = be[pT] = be[mT] = be[_T] = !0;
be[Wb] = be[Qb] = be[aT] = be[Kb] = be[uT] = be[zb] = be[Xb] = be[Jb] = be[Zb] = be[eT] = be[tT] = be[nT] = be[rT] = be[sT] = be[iT] = !1;
function ET(t) {
  return is(t) && $f(t.length) && !!be[ss(t)];
}
function _u(t) {
  return function(e) {
    return t(e);
  };
}
var Qf = typeof exports == "object" && exports && !exports.nodeType && exports, vr = Qf && typeof module == "object" && module && !module.nodeType && module, gT = vr && vr.exports === Qf, Xi = gT && Uf.process, bT = function() {
  try {
    var t = vr && vr.require && vr.require("util").types;
    return t || Xi && Xi.binding && Xi.binding("util");
  } catch (e) {
  }
}();
const jn = bT;
var Jo = jn && jn.isTypedArray, TT = Jo ? _u(Jo) : ET;
const Kf = TT;
var IT = Object.prototype, AT = IT.hasOwnProperty;
function zf(t, e) {
  var n = Ai(t), r = !n && Gf(t), s = !n && !r && mu(t), i = !n && !r && !s && Kf(t), a = n || r || s || i, o = a ? Ub(t.length, String) : [], u = o.length;
  for (var l in t)
    (e || AT.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Mb(l, u))) && o.push(l);
  return o;
}
function Xf(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var yT = Xf(Object.keys, Object);
const vT = yT;
var ST = Object.prototype, CT = ST.hasOwnProperty;
function Jf(t) {
  if (!vi(t))
    return vT(t);
  var e = [];
  for (var n in Object(t))
    CT.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Eu(t) {
  return pu(t) ? zf(t) : Jf(t);
}
function OT(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var RT = Object.prototype, NT = RT.hasOwnProperty;
function wT(t) {
  if (!as(t))
    return OT(t);
  var e = vi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !NT.call(t, r)) || n.push(r);
  return n;
}
function gu(t) {
  return pu(t) ? zf(t, !0) : wT(t);
}
var LT = In(Object, "create");
const qr = LT;
function DT() {
  this.__data__ = qr ? qr(null) : {}, this.size = 0;
}
function MT(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var PT = "__lodash_hash_undefined__", kT = Object.prototype, FT = kT.hasOwnProperty;
function BT(t) {
  var e = this.__data__;
  if (qr) {
    var n = e[t];
    return n === PT ? void 0 : n;
  }
  return FT.call(e, t) ? e[t] : void 0;
}
var UT = Object.prototype, xT = UT.hasOwnProperty;
function HT(t) {
  var e = this.__data__;
  return qr ? e[t] !== void 0 : xT.call(e, t);
}
var VT = "__lodash_hash_undefined__";
function jT(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = qr && e === void 0 ? VT : e, this;
}
function mn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mn.prototype.clear = DT;
mn.prototype.delete = MT;
mn.prototype.get = BT;
mn.prototype.has = HT;
mn.prototype.set = jT;
function qT() {
  this.__data__ = [], this.size = 0;
}
function Si(t, e) {
  for (var n = t.length; n--; )
    if (jf(t[n][0], e))
      return n;
  return -1;
}
var $T = Array.prototype, YT = $T.splice;
function GT(t) {
  var e = this.__data__, n = Si(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : YT.call(e, n, 1), --this.size, !0;
}
function WT(t) {
  var e = this.__data__, n = Si(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function QT(t) {
  return Si(this.__data__, t) > -1;
}
function KT(t, e) {
  var n = this.__data__, r = Si(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Ut(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ut.prototype.clear = qT;
Ut.prototype.delete = GT;
Ut.prototype.get = WT;
Ut.prototype.has = QT;
Ut.prototype.set = KT;
var zT = In(Nt, "Map");
const $r = zT;
function XT() {
  this.size = 0, this.__data__ = {
    hash: new mn(),
    map: new ($r || Ut)(),
    string: new mn()
  };
}
function JT(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ci(t, e) {
  var n = t.__data__;
  return JT(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function ZT(t) {
  var e = Ci(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function eI(t) {
  return Ci(this, t).get(t);
}
function tI(t) {
  return Ci(this, t).has(t);
}
function nI(t, e) {
  var n = Ci(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function nr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = XT;
nr.prototype.delete = ZT;
nr.prototype.get = eI;
nr.prototype.has = tI;
nr.prototype.set = nI;
function Zf(t, e) {
  for (var n = -1, r = e.length, s = t.length; ++n < r; )
    t[s + n] = e[n];
  return t;
}
var rI = Xf(Object.getPrototypeOf, Object);
const eh = rI;
function sI() {
  this.__data__ = new Ut(), this.size = 0;
}
function iI(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function aI(t) {
  return this.__data__.get(t);
}
function uI(t) {
  return this.__data__.has(t);
}
var oI = 200;
function cI(t, e) {
  var n = this.__data__;
  if (n instanceof Ut) {
    var r = n.__data__;
    if (!$r || r.length < oI - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new nr(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function rr(t) {
  var e = this.__data__ = new Ut(t);
  this.size = e.size;
}
rr.prototype.clear = sI;
rr.prototype.delete = iI;
rr.prototype.get = aI;
rr.prototype.has = uI;
rr.prototype.set = cI;
function lI(t, e) {
  return t && yi(e, Eu(e), t);
}
function dI(t, e) {
  return t && yi(e, gu(e), t);
}
var th = typeof exports == "object" && exports && !exports.nodeType && exports, Zo = th && typeof module == "object" && module && !module.nodeType && module, fI = Zo && Zo.exports === th, ec = fI ? Nt.Buffer : void 0, tc = ec ? ec.allocUnsafe : void 0;
function hI(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = tc ? tc(n) : new t.constructor(n);
  return t.copy(r), r;
}
function pI(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, s = 0, i = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (i[s++] = a);
  }
  return i;
}
function nh() {
  return [];
}
var mI = Object.prototype, _I = mI.propertyIsEnumerable, nc = Object.getOwnPropertySymbols, EI = nc ? function(t) {
  return t == null ? [] : (t = Object(t), pI(nc(t), function(e) {
    return _I.call(t, e);
  }));
} : nh;
const bu = EI;
function gI(t, e) {
  return yi(t, bu(t), e);
}
var bI = Object.getOwnPropertySymbols, TI = bI ? function(t) {
  for (var e = []; t; )
    Zf(e, bu(t)), t = eh(t);
  return e;
} : nh;
const rh = TI;
function II(t, e) {
  return yi(t, rh(t), e);
}
function sh(t, e, n) {
  var r = e(t);
  return Ai(t) ? r : Zf(r, n(t));
}
function AI(t) {
  return sh(t, Eu, bu);
}
function yI(t) {
  return sh(t, gu, rh);
}
var vI = In(Nt, "DataView");
const Da = vI;
var SI = In(Nt, "Promise");
const Ma = SI;
var CI = In(Nt, "Set");
const Pa = CI;
var rc = "[object Map]", OI = "[object Object]", sc = "[object Promise]", ic = "[object Set]", ac = "[object WeakMap]", uc = "[object DataView]", RI = Tn(Da), NI = Tn($r), wI = Tn(Ma), LI = Tn(Pa), DI = Tn(La), en = ss;
(Da && en(new Da(new ArrayBuffer(1))) != uc || $r && en(new $r()) != rc || Ma && en(Ma.resolve()) != sc || Pa && en(new Pa()) != ic || La && en(new La()) != ac) && (en = function(t) {
  var e = ss(t), n = e == OI ? t.constructor : void 0, r = n ? Tn(n) : "";
  if (r)
    switch (r) {
      case RI:
        return uc;
      case NI:
        return rc;
      case wI:
        return sc;
      case LI:
        return ic;
      case DI:
        return ac;
    }
  return e;
});
const Oi = en;
var MI = Object.prototype, PI = MI.hasOwnProperty;
function kI(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && PI.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var FI = Nt.Uint8Array;
const oc = FI;
function Tu(t) {
  var e = new t.constructor(t.byteLength);
  return new oc(e).set(new oc(t)), e;
}
function BI(t, e) {
  var n = e ? Tu(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var UI = /\w*$/;
function xI(t) {
  var e = new t.constructor(t.source, UI.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var cc = Vn ? Vn.prototype : void 0, lc = cc ? cc.valueOf : void 0;
function HI(t) {
  return lc ? Object(lc.call(t)) : {};
}
function VI(t, e) {
  var n = e ? Tu(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var jI = "[object Boolean]", qI = "[object Date]", $I = "[object Map]", YI = "[object Number]", GI = "[object RegExp]", WI = "[object Set]", QI = "[object String]", KI = "[object Symbol]", zI = "[object ArrayBuffer]", XI = "[object DataView]", JI = "[object Float32Array]", ZI = "[object Float64Array]", e2 = "[object Int8Array]", t2 = "[object Int16Array]", n2 = "[object Int32Array]", r2 = "[object Uint8Array]", s2 = "[object Uint8ClampedArray]", i2 = "[object Uint16Array]", a2 = "[object Uint32Array]";
function u2(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case zI:
      return Tu(t);
    case jI:
    case qI:
      return new r(+t);
    case XI:
      return BI(t, n);
    case JI:
    case ZI:
    case e2:
    case t2:
    case n2:
    case r2:
    case s2:
    case i2:
    case a2:
      return VI(t, n);
    case $I:
      return new r();
    case YI:
    case QI:
      return new r(t);
    case GI:
      return xI(t);
    case WI:
      return new r();
    case KI:
      return HI(t);
  }
}
function o2(t) {
  return typeof t.constructor == "function" && !vi(t) ? Ob(eh(t)) : {};
}
var c2 = "[object Map]";
function l2(t) {
  return is(t) && Oi(t) == c2;
}
var dc = jn && jn.isMap, d2 = dc ? _u(dc) : l2;
const f2 = d2;
var h2 = "[object Set]";
function p2(t) {
  return is(t) && Oi(t) == h2;
}
var fc = jn && jn.isSet, m2 = fc ? _u(fc) : p2;
const _2 = m2;
var E2 = 1, g2 = 2, b2 = 4, ih = "[object Arguments]", T2 = "[object Array]", I2 = "[object Boolean]", A2 = "[object Date]", y2 = "[object Error]", ah = "[object Function]", v2 = "[object GeneratorFunction]", S2 = "[object Map]", C2 = "[object Number]", uh = "[object Object]", O2 = "[object RegExp]", R2 = "[object Set]", N2 = "[object String]", w2 = "[object Symbol]", L2 = "[object WeakMap]", D2 = "[object ArrayBuffer]", M2 = "[object DataView]", P2 = "[object Float32Array]", k2 = "[object Float64Array]", F2 = "[object Int8Array]", B2 = "[object Int16Array]", U2 = "[object Int32Array]", x2 = "[object Uint8Array]", H2 = "[object Uint8ClampedArray]", V2 = "[object Uint16Array]", j2 = "[object Uint32Array]", ge = {};
ge[ih] = ge[T2] = ge[D2] = ge[M2] = ge[I2] = ge[A2] = ge[P2] = ge[k2] = ge[F2] = ge[B2] = ge[U2] = ge[S2] = ge[C2] = ge[uh] = ge[O2] = ge[R2] = ge[N2] = ge[w2] = ge[x2] = ge[H2] = ge[V2] = ge[j2] = !0;
ge[y2] = ge[ah] = ge[L2] = !1;
function Ls(t, e, n, r, s, i) {
  var a, o = e & E2, u = e & g2, l = e & b2;
  if (n && (a = s ? n(t, r, s, i) : n(t)), a !== void 0)
    return a;
  if (!as(t))
    return t;
  var d = Ai(t);
  if (d) {
    if (a = kI(t), !o)
      return Rb(t, a);
  } else {
    var f = Oi(t), p = f == ah || f == v2;
    if (mu(t))
      return hI(t, o);
    if (f == uh || f == ih || p && !s) {
      if (a = u || p ? {} : o2(t), !o)
        return u ? II(t, dI(a, t)) : gI(t, lI(a, t));
    } else {
      if (!ge[f])
        return s ? t : {};
      a = u2(t, f, o);
    }
  }
  i || (i = new rr());
  var h = i.get(t);
  if (h)
    return h;
  i.set(t, a), _2(t) ? t.forEach(function(b) {
    a.add(Ls(b, e, n, b, t, i));
  }) : f2(t) && t.forEach(function(b, C) {
    a.set(C, Ls(b, e, n, C, t, i));
  });
  var m = l ? u ? yI : AI : u ? gu : Eu, _ = d ? void 0 : m(t);
  return wb(_ || t, function(b, C) {
    _ && (C = b, b = t[C]), qf(a, C, Ls(b, e, n, C, t, i));
  }), a;
}
var q2 = 1, $2 = 4;
function Y2(t) {
  return Ls(t, q2 | $2);
}
var G2 = "[object Map]", W2 = "[object Set]", Q2 = Object.prototype, K2 = Q2.hasOwnProperty;
function Ln(t) {
  if (t == null)
    return !0;
  if (pu(t) && (Ai(t) || typeof t == "string" || typeof t.splice == "function" || mu(t) || Kf(t) || Gf(t)))
    return !t.length;
  var e = Oi(t);
  if (e == G2 || e == W2)
    return !t.size;
  if (vi(t))
    return !Jf(t).length;
  for (var n in t)
    if (K2.call(t, n))
      return !1;
  return !0;
}
let Iu = {
  docId: "n/a",
  title: "n/a",
  partnerId: "n/a",
  published: !1
}, oh = {
  id: "n/a",
  order: 0,
  enabled: !1,
  show: !1,
  active: !1,
  isQuantity: !1,
  reusable: !1,
  uiType: "n/a",
  title: "n/a",
  properties: {},
  reducer: "",
  css: "",
  description: ""
}, It = me(Iu);
me(Iu.docId);
let wt = me([]), Sr = me({
  docId: "",
  item: me(oh)
}), ch = me(0);
kg("containerWidth", 480);
let z2 = me(), X2 = me(Sa()), hc = me(!1);
if (typeof window != "undefined") {
  const t = localStorage.is_debug_mode;
  hc = me(t === "true"), hc.subscribe((e) => {
    localStorage.is_debug_mode = String(e);
  });
}
class J2 {
  resetState(e) {
    e.set({
      ui: {},
      price: {},
      editor: {}
    });
  }
  publishOptionItem() {
    return y(this, null, function* () {
      var r;
      let e = ee(It), n = {
        title: e.title,
        tableBaseId: (r = e.tableBaseId) != null ? r : null,
        master: ee(z2),
        layout: ee(X2),
        options: ee(wt).map((s) => ee(s.comp)).sort((s, i) => s.order - i.order)
      };
      console.log(n), ht.publishOptionSet(e.docId, n).then(() => {
        It.update((s) => (s.published = !0, s));
      }).catch((s) => {
        console.log("publishOptionItem() failed", s);
      });
    });
  }
  cloneOpItems() {
    let e = ee(wt).map((n) => this.cloneCompStruct(n));
    return me(e);
  }
  cloneCompStruct(e) {
    return {
      docId: e.docId,
      id: e.id,
      uiType: e.uiType,
      comp: me(Y2(ee(e.comp)))
    };
  }
  isOptionsetSelected() {
    return ee(It) !== Iu;
  }
  isOptionsetPublished() {
    return ee(It).published;
  }
  // getMasterReducer() {
  // 	return get(masterDoc).masterReducer;
  // }
  selectNullOption() {
    Sr.update((e) => (e.docId = "", e.item = me(oh), e));
  }
  selectOption(e, n) {
    Sr.update((r) => (r.docId = n, r.item = e, r));
  }
  selectFirstOption() {
    Sr.update((e) => (e.docId = ee(wt)[0].docId, e.item = ee(wt)[0].comp, e));
  }
  addToOpItems(e) {
    return y(this, null, function* () {
      let n = yield ht.addOption(ee(It).docId, e), r = me(e);
      wt.update((s) => (s.push({
        docId: n,
        id: e.id,
        uiType: e.uiType,
        comp: r
      }), s)), this.selectOption(r, n);
    });
  }
  //see220811 항상 동일한 구조를 유지 해야 함
  fillWithOptionset(e) {
    let n = e.map((r) => ({
      docId: r.docId,
      id: r.data.id,
      uiType: r.data.uiType,
      comp: me(r.data)
    }));
    wt.update((r) => n);
  }
  updateOption(e, n) {
    return y(this, null, function* () {
      yield ht.setOption(ee(It).docId, e, n);
    });
  }
  updateMasterDoc(e) {
    return y(this, null, function* () {
      yield ht.updateMasterDoc(ee(It).docId, e);
    });
  }
  updateLayoutDoc(e) {
    return y(this, null, function* () {
      yield ht.updateLayoutDoc(ee(It).docId, e);
    });
  }
  deleteOption(e) {
    return y(this, null, function* () {
      yield ht.deleteOption(ee(It).docId, e);
      let n = -1;
      wt.update((s) => (n = s.findIndex((i) => i.docId === e), n !== -1 && s.splice(n, 1), s));
      let r = ee(wt);
      if (r.length === 0)
        this.selectNullOption();
      else {
        let s = n >= r.length ? r.length - 1 : n;
        this.selectOption(r[s].comp, r[s].docId);
      }
    });
  }
  setOptionOrder(e) {
    return y(this, null, function* () {
      return yield ht.setOptionOrder(ee(It).docId, e);
    });
  }
  //////////////////////////////////////////////
  getNewOrder() {
    return 1 + ee(wt).map((r) => ee(r.comp)).reduce((r, s) => Math.max(r, s.order), 0);
  }
  addCheckbox() {
    return y(this, null, function* () {
      let e = xg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
  addDropdown() {
    return y(this, null, function* () {
      let e = Hg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
  addSingleSelect(e) {
    return y(this, null, function* () {
      let n = Vg(this.getNewOrder(), e);
      yield this.addToOpItems(n);
    });
  }
  addQuantity() {
    return y(this, null, function* () {
      let e = qg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
  addLabel() {
    return y(this, null, function* () {
      let e = Yg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
  addInput() {
    return y(this, null, function* () {
      let e = Wg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
  addRadio() {
    return y(this, null, function* () {
      let e = Qg(this.getNewOrder());
      yield this.addToOpItems(e);
    });
  }
}
let lh = new J2();
var tn;
(function(t) {
  t[t.EDIT = 0] = "EDIT", t[t.PREVIEW = 1] = "PREVIEW";
})(tn || (tn = {}));
var nn;
(function(t) {
  t[t.LIST = 0] = "LIST", t[t.FORM = 1] = "FORM";
})(nn || (nn = {}));
const Z2 = ["List", "Form"];
class eA {
  constructor() {
    // #1
    Re(this, "mode", me(tn.EDIT));
    Re(this, "isEdit", fs(this.mode, (e) => e === tn.EDIT));
    Re(this, "isPreview", fs(this.mode, (e) => e === tn.PREVIEW));
    // #2
    Re(this, "viewMode", me(nn.LIST));
    Re(this, "isListView", fs(this.viewMode, (e) => e === nn.LIST));
    Re(this, "isFormView", fs(this.viewMode, (e) => e === nn.FORM));
  }
  // getModeText() { return ModeText[this.mode]; }
  setEdit() {
    this.mode.update((e) => tn.EDIT);
  }
  setPreview() {
    this.mode.update((e) => tn.PREVIEW);
  }
  getViewModeText() {
    return Z2[ee(this.viewMode)];
  }
  setListView() {
    this.viewMode.update((e) => nn.LIST);
  }
  setFormView() {
    this.viewMode.update((e) => nn.FORM);
  }
  toggleViewMode() {
    ee(this.isListView) ? this.setFormView() : this.setListView();
  }
  switchViewMode(e) {
    switch (e) {
      case "list":
        this.setListView();
        break;
      case "form":
        this.setFormView();
        break;
    }
  }
}
let Au = new eA();
function tA(t) {
  let e, n, r;
  return {
    c() {
      e = kn("svg"), n = kn("polyline"), this.h();
    },
    l(s) {
      e = Ms(s, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        viewBox: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0
      });
      var i = Q(e);
      n = Ms(i, "polyline", { points: !0 }), Q(n).forEach(w), i.forEach(w), this.h();
    },
    h() {
      D(n, "points", "20 6 9 17 4 12"), D(e, "xmlns", "http://www.w3.org/2000/svg"), D(
        e,
        "width",
        /*size*/
        t[0]
      ), D(
        e,
        "height",
        /*size*/
        t[0]
      ), D(e, "fill", "none"), D(e, "viewBox", "0 0 24 24"), D(e, "stroke", "currentColor"), D(
        e,
        "stroke-width",
        /*strokeWidth*/
        t[1]
      ), D(e, "stroke-linecap", "round"), D(e, "stroke-linejoin", "round"), D(e, "class", r = "feather feather-check " + /*customClass*/
      t[2]);
    },
    m(s, i) {
      j(s, e, i), G(e, n);
    },
    p(s, [i]) {
      i & /*size*/
      1 && D(
        e,
        "width",
        /*size*/
        s[0]
      ), i & /*size*/
      1 && D(
        e,
        "height",
        /*size*/
        s[0]
      ), i & /*strokeWidth*/
      2 && D(
        e,
        "stroke-width",
        /*strokeWidth*/
        s[1]
      ), i & /*customClass*/
      4 && r !== (r = "feather feather-check " + /*customClass*/
      s[2]) && D(e, "class", r);
    },
    i: $,
    o: $,
    d(s) {
      s && w(e);
    }
  };
}
function nA(t, e, n) {
  let { size: r = "24" } = e, { strokeWidth: s = 2 } = e, { class: i = "" } = e;
  return r !== "100%" && (r = r.slice(-1) === "x" ? r.slice(0, r.length - 1) + "em" : parseInt(r) + "px"), t.$$set = (a) => {
    "size" in a && n(0, r = a.size), "strokeWidth" in a && n(1, s = a.strokeWidth), "class" in a && n(2, i = a.class);
  }, [r, s, i];
}
class dh extends De {
  constructor(e) {
    super(), Le(this, e, nA, tA, Oe, { size: 0, strokeWidth: 1, class: 2 });
  }
}
function pc(t) {
  let e, n, r, s;
  const i = [sA, rA], a = [];
  function o(u, l) {
    return (
      /*selector*/
      u[2] ? 1 : 0
    );
  }
  return e = o(t), n = a[e] = i[e](t), {
    c() {
      n.c(), r = ce();
    },
    l(u) {
      n.l(u), r = ce();
    },
    m(u, l) {
      a[e].m(u, l), j(u, r, l), s = !0;
    },
    p(u, l) {
      let d = e;
      e = o(u), e === d ? a[e].p(u, l) : (je(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), qe(), n = a[e], n ? n.p(u, l) : (n = a[e] = i[e](u), n.c()), K(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      s || (K(n), s = !0);
    },
    o(u) {
      z(n), s = !1;
    },
    d(u) {
      a[e].d(u), u && w(r);
    }
  };
}
function rA(t) {
  let e, n, r, s, i, a, o, u, l = (
    /*disabled*/
    t[8] && mc()
  );
  const d = [aA, iA], f = [];
  function p(h, m) {
    return (
      /*$isListView*/
      h[9] ? 0 : 1
    );
  }
  return r = p(t), s = f[r] = d[r](t), {
    c() {
      e = Y("div"), l && l.c(), n = le(), s.c(), this.h();
    },
    l(h) {
      e = W(h, "DIV", { class: !0, style: !0 });
      var m = Q(e);
      l && l.l(m), n = de(m), s.l(m), m.forEach(w), this.h();
    },
    h() {
      D(e, "class", "relative"), D(e, "style", i = /*$isListView*/
      t[9] ? `padding: ${/*padding*/
      t[3]}px 0` : ""), Je(e, "hover:bg-gray-100", !/*selected*/
      t[6]), Je(
        e,
        "selectedStyle",
        /*selected*/
        t[6]
      );
    },
    m(h, m) {
      j(h, e, m), l && l.m(e, null), G(e, n), f[r].m(e, null), a = !0, o || (u = [
        Ie(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[18]
        ),
        Ie(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[19]
        )
      ], o = !0);
    },
    p(h, m) {
      /*disabled*/
      h[8] ? l || (l = mc(), l.c(), l.m(e, n)) : l && (l.d(1), l = null);
      let _ = r;
      r = p(h), r === _ ? f[r].p(h, m) : (je(), z(f[_], 1, 1, () => {
        f[_] = null;
      }), qe(), s = f[r], s ? s.p(h, m) : (s = f[r] = d[r](h), s.c()), K(s, 1), s.m(e, null)), (!a || m & /*$isListView, padding*/
      520 && i !== (i = /*$isListView*/
      h[9] ? `padding: ${/*padding*/
      h[3]}px 0` : "")) && D(e, "style", i), (!a || m & /*selected*/
      64) && Je(e, "hover:bg-gray-100", !/*selected*/
      h[6]), (!a || m & /*selected*/
      64) && Je(
        e,
        "selectedStyle",
        /*selected*/
        h[6]
      );
    },
    i(h) {
      a || (K(s), a = !0);
    },
    o(h) {
      z(s), a = !1;
    },
    d(h) {
      h && w(e), l && l.d(), f[r].d(), o = !1, ut(u);
    }
  };
}
function sA(t) {
  let e, n, r, s, i = (
    /*disabled*/
    t[8] && Ec()
  );
  const a = (
    /*#slots*/
    t[17].default
  ), o = Gn(
    a,
    t,
    /*$$scope*/
    t[16],
    null
  );
  return {
    c() {
      e = Y("div"), i && i.c(), n = le(), o && o.c(), this.h();
    },
    l(u) {
      e = W(u, "DIV", { class: !0, style: !0 });
      var l = Q(e);
      i && i.l(l), n = de(l), o && o.l(l), l.forEach(w), this.h();
    },
    h() {
      D(e, "class", "relative"), D(e, "style", r = /*$isListView*/
      t[9] ? `padding: ${/*padding*/
      t[3]}px 0` : "");
    },
    m(u, l) {
      j(u, e, l), i && i.m(e, null), G(e, n), o && o.m(e, null), s = !0;
    },
    p(u, l) {
      /*disabled*/
      u[8] ? i || (i = Ec(), i.c(), i.m(e, n)) : i && (i.d(1), i = null), o && o.p && (!s || l & /*$$scope*/
      65536) && Qn(
        o,
        a,
        u,
        /*$$scope*/
        u[16],
        s ? Wn(
          a,
          /*$$scope*/
          u[16],
          l,
          null
        ) : Kn(
          /*$$scope*/
          u[16]
        ),
        null
      ), (!s || l & /*$isListView, padding*/
      520 && r !== (r = /*$isListView*/
      u[9] ? `padding: ${/*padding*/
      u[3]}px 0` : "")) && D(e, "style", r);
    },
    i(u) {
      s || (K(o, u), s = !0);
    },
    o(u) {
      z(o, u), s = !1;
    },
    d(u) {
      u && w(e), i && i.d(), o && o.d(u);
    }
  };
}
function mc(t) {
  let e;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(n) {
      e = W(n, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "absolute inset-0 cursor-pointer rounded-lg bg-gray-200/70");
    },
    m(n, r) {
      j(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function iA(t) {
  let e, n, r = !/*selected*/
  t[6] && _c(t);
  const s = (
    /*#slots*/
    t[17].default
  ), i = Gn(
    s,
    t,
    /*$$scope*/
    t[16],
    null
  );
  return {
    c() {
      r && r.c(), e = le(), i && i.c();
    },
    l(a) {
      r && r.l(a), e = de(a), i && i.l(a);
    },
    m(a, o) {
      r && r.m(a, o), j(a, e, o), i && i.m(a, o), n = !0;
    },
    p(a, o) {
      /*selected*/
      a[6] ? r && (r.d(1), r = null) : r ? r.p(a, o) : (r = _c(a), r.c(), r.m(e.parentNode, e)), i && i.p && (!n || o & /*$$scope*/
      65536) && Qn(
        i,
        s,
        a,
        /*$$scope*/
        a[16],
        n ? Wn(
          s,
          /*$$scope*/
          a[16],
          o,
          null
        ) : Kn(
          /*$$scope*/
          a[16]
        ),
        null
      );
    },
    i(a) {
      n || (K(i, a), n = !0);
    },
    o(a) {
      z(i, a), n = !1;
    },
    d(a) {
      r && r.d(a), a && w(e), i && i.d(a);
    }
  };
}
function aA(t) {
  let e, n, r, s, i, a, o, u;
  const l = (
    /*#slots*/
    t[17].default
  ), d = Gn(
    l,
    t,
    /*$$scope*/
    t[16],
    null
  ), f = [oA, uA], p = [];
  function h(m, _) {
    return (
      /*selected*/
      m[6] ? 0 : 1
    );
  }
  return s = h(t), i = p[s] = f[s](t), {
    c() {
      d && d.c(), e = le(), n = Y("div"), r = Y("div"), i.c(), this.h();
    },
    l(m) {
      d && d.l(m), e = de(m), n = W(m, "DIV", { class: !0 });
      var _ = Q(n);
      r = W(_, "DIV", { class: !0 });
      var b = Q(r);
      i.l(b), b.forEach(w), _.forEach(w), this.h();
    },
    h() {
      D(r, "class", "cursor-pointer h-full group flex items-center justify-center"), D(n, "class", "absolute left-[-82px] top-0 h-full w-[50px]");
    },
    m(m, _) {
      d && d.m(m, _), j(m, e, _), j(m, n, _), G(n, r), p[s].m(r, null), a = !0, o || (u = Ie(
        r,
        "click",
        /*select*/
        t[11]
      ), o = !0);
    },
    p(m, _) {
      d && d.p && (!a || _ & /*$$scope*/
      65536) && Qn(
        d,
        l,
        m,
        /*$$scope*/
        m[16],
        a ? Wn(
          l,
          /*$$scope*/
          m[16],
          _,
          null
        ) : Kn(
          /*$$scope*/
          m[16]
        ),
        null
      );
      let b = s;
      s = h(m), s !== b && (je(), z(p[b], 1, 1, () => {
        p[b] = null;
      }), qe(), i = p[s], i || (i = p[s] = f[s](m), i.c()), K(i, 1), i.m(r, null));
    },
    i(m) {
      a || (K(d, m), K(i), a = !0);
    },
    o(m) {
      z(d, m), z(i), a = !1;
    },
    d(m) {
      d && d.d(m), m && w(e), m && w(n), p[s].d(), o = !1, u();
    }
  };
}
function _c(t) {
  let e, n, r;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "absolute inset-0 cursor-pointer rounded-lg");
    },
    m(s, i) {
      j(s, e, i), n || (r = Ie(
        e,
        "click",
        /*select*/
        t[11]
      ), n = !0);
    },
    p: $,
    d(s) {
      s && w(e), n = !1, r();
    }
  };
}
function uA(t) {
  let e, n, r;
  return n = new dh({ props: { class: "w-3 h-3 text-white" } }), {
    c() {
      e = Y("div"), Ce(n.$$.fragment), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 });
      var i = Q(e);
      we(n.$$.fragment, i), i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "flex rounded-full p-1 bg-black/10");
    },
    m(s, i) {
      j(s, e, i), Ae(n, e, null), r = !0;
    },
    i(s) {
      r || (K(n.$$.fragment, s), r = !0);
    },
    o(s) {
      z(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), ye(n);
    }
  };
}
function oA(t) {
  let e, n, r;
  return n = new dh({ props: { class: "w-3 h-3 text-white" } }), {
    c() {
      e = Y("div"), Ce(n.$$.fragment), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 });
      var i = Q(e);
      we(n.$$.fragment, i), i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "rounded-full flex p-1 bg-primary");
    },
    m(s, i) {
      j(s, e, i), Ae(n, e, null), r = !0;
    },
    i(s) {
      r || (K(n.$$.fragment, s), r = !0);
    },
    o(s) {
      z(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), ye(n);
    }
  };
}
function Ec(t) {
  let e;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(n) {
      e = W(n, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "absolute inset-0 cursor-pointer rounded-lg bg-gray-200/70");
    },
    m(n, r) {
      j(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function cA(t) {
  let e, n, r = (
    /*show*/
    t[7] && pc(t)
  );
  return {
    c() {
      r && r.c(), e = ce();
    },
    l(s) {
      r && r.l(s), e = ce();
    },
    m(s, i) {
      r && r.m(s, i), j(s, e, i), n = !0;
    },
    p(s, [i]) {
      /*show*/
      s[7] ? r ? (r.p(s, i), i & /*show*/
      128 && K(r, 1)) : (r = pc(s), r.c(), K(r, 1), r.m(e.parentNode, e)) : r && (je(), z(r, 1, 1, () => {
        r = null;
      }), qe());
    },
    i(s) {
      n || (K(r), n = !0);
    },
    o(s) {
      z(r), n = !1;
    },
    d(s) {
      r && r.d(s), s && w(e);
    }
  };
}
function lA(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(C, (k) => n(13, i = k)), C), u, l = $, d = () => (l(), l = fe(x, (k) => n(14, u = k)), x), f, p = $, h = () => (p(), p = fe(O, (k) => n(15, f = k)), O), m;
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l()), t.$$.on_destroy.push(() => p());
  let { $$slots: _ = {}, $$scope: b } = e, { data: C } = e;
  o();
  let { state: O } = e;
  h();
  let { selector: A = !0 } = e, { docId: T } = e;
  const { isEdit: v, isPreview: S, isListView: R, isFormView: B } = Au;
  Yn(t, R, (k) => n(9, m = k));
  let H = i.id, q, V = !1, x;
  const J = Sr.subscribe((k) => {
    d(n(5, x = k.item));
  });
  let X;
  function P() {
    lh.selectOption(C, T);
  }
  const re = ch.subscribe((k) => {
    n(3, q = k);
  });
  lt(() => {
    J(), re();
  });
  const ne = () => {
    n(4, V = !0);
  }, ue = () => {
    n(4, V = !1);
  };
  return t.$$set = (k) => {
    "data" in k && o(n(0, C = k.data)), "state" in k && h(n(1, O = k.state)), "selector" in k && n(2, A = k.selector), "docId" in k && n(12, T = k.docId), "$$scope" in k && n(16, b = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$state*/
    32768 && n(8, r = !f.ui[H].enabled), t.$$.dirty & /*$state*/
    32768 && n(7, s = f.ui[H].show), t.$$.dirty & /*$hotItem, $data*/
    24576 && n(6, X = u.id === i.id);
  }, [
    C,
    O,
    A,
    q,
    V,
    x,
    X,
    s,
    r,
    m,
    R,
    P,
    T,
    i,
    u,
    f,
    b,
    _,
    ne,
    ue
  ];
}
class dA extends De {
  constructor(e) {
    super(), Le(this, e, lA, cA, Oe, {
      data: 0,
      state: 1,
      selector: 2,
      docId: 12
    });
  }
}
function fA(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      if (this instanceof r) {
        var s = [null];
        s.push.apply(s, arguments);
        var i = Function.bind.apply(e, s);
        return new i();
      }
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var Js = {}, gc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, hA = function(t, e) {
  e = e || {};
  var n = 1, r = 1;
  function s(k) {
    var F = k.match(/\n/g);
    F && (n += F.length);
    var Z = k.lastIndexOf(`
`);
    r = ~Z ? k.length - Z : r + k.length;
  }
  function i() {
    var k = { line: n, column: r };
    return function(F) {
      return F.position = new a(k), m(), F;
    };
  }
  function a(k) {
    this.start = k, this.end = { line: n, column: r }, this.source = e.source;
  }
  a.prototype.content = t;
  var o = [];
  function u(k) {
    var F = new Error(e.source + ":" + n + ":" + r + ": " + k);
    if (F.reason = k, F.filename = e.source, F.line = n, F.column = r, F.source = t, e.silent)
      o.push(F);
    else
      throw F;
  }
  function l() {
    var k = p();
    return {
      type: "stylesheet",
      stylesheet: {
        source: e.source,
        rules: k,
        parsingErrors: o
      }
    };
  }
  function d() {
    return h(/^{\s*/);
  }
  function f() {
    return h(/^}/);
  }
  function p() {
    var k, F = [];
    for (m(), _(F); t.length && t.charAt(0) != "}" && (k = ne() || ue()); )
      k !== !1 && (F.push(k), _(F));
    return F;
  }
  function h(k) {
    var F = k.exec(t);
    if (F) {
      var Z = F[0];
      return s(Z), t = t.slice(Z.length), F;
    }
  }
  function m() {
    h(/^\s*/);
  }
  function _(k) {
    var F;
    for (k = k || []; F = b(); )
      F !== !1 && k.push(F);
    return k;
  }
  function b() {
    var k = i();
    if (!(t.charAt(0) != "/" || t.charAt(1) != "*")) {
      for (var F = 2; t.charAt(F) != "" && (t.charAt(F) != "*" || t.charAt(F + 1) != "/"); )
        ++F;
      if (F += 2, t.charAt(F - 1) === "")
        return u("End of comment missing");
      var Z = t.slice(2, F - 2);
      return r += 2, s(Z), t = t.slice(F), r += 2, k({
        type: "comment",
        comment: Z
      });
    }
  }
  function C() {
    var k = h(/^([^{]+)/);
    if (k)
      return Lt(k[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(F) {
        return F.replace(/,/g, "‌");
      }).split(/\s*(?![^(]*\)),\s*/).map(function(F) {
        return F.replace(/\u200C/g, ",");
      });
  }
  function O() {
    var k = i(), F = h(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (F) {
      if (F = Lt(F[0]), !h(/^:\s*/))
        return u("property missing ':'");
      var Z = h(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/), Ee = k({
        type: "declaration",
        property: F.replace(gc, ""),
        value: Z ? Lt(Z[0]).replace(gc, "") : ""
      });
      return h(/^[;\s]*/), Ee;
    }
  }
  function A() {
    var k = [];
    if (!d())
      return u("missing '{'");
    _(k);
    for (var F; F = O(); )
      F !== !1 && (k.push(F), _(k));
    return f() ? k : u("missing '}'");
  }
  function T() {
    for (var k, F = [], Z = i(); k = h(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
      F.push(k[1]), h(/^,\s*/);
    if (F.length)
      return Z({
        type: "keyframe",
        values: F,
        declarations: A()
      });
  }
  function v() {
    var k = i(), Z = h(/^@([-\w]+)?keyframes\s*/);
    if (Z) {
      var F = Z[1], Z = h(/^([-\w]+)\s*/);
      if (!Z)
        return u("@keyframes missing name");
      var Ee = Z[1];
      if (!d())
        return u("@keyframes missing '{'");
      for (var et, Sn = _(); et = T(); )
        Sn.push(et), Sn = Sn.concat(_());
      return f() ? k({
        type: "keyframes",
        name: Ee,
        vendor: F,
        keyframes: Sn
      }) : u("@keyframes missing '}'");
    }
  }
  function S() {
    var k = i(), F = h(/^@supports *([^{]+)/);
    if (F) {
      var Z = Lt(F[1]);
      if (!d())
        return u("@supports missing '{'");
      var Ee = _().concat(p());
      return f() ? k({
        type: "supports",
        supports: Z,
        rules: Ee
      }) : u("@supports missing '}'");
    }
  }
  function R() {
    var k = i(), F = h(/^@host\s*/);
    if (F) {
      if (!d())
        return u("@host missing '{'");
      var Z = _().concat(p());
      return f() ? k({
        type: "host",
        rules: Z
      }) : u("@host missing '}'");
    }
  }
  function B() {
    var k = i(), F = h(/^@media *([^{]+)/);
    if (F) {
      var Z = Lt(F[1]);
      if (!d())
        return u("@media missing '{'");
      var Ee = _().concat(p());
      return f() ? k({
        type: "media",
        media: Z,
        rules: Ee
      }) : u("@media missing '}'");
    }
  }
  function H() {
    var k = i(), F = h(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (F)
      return k({
        type: "custom-media",
        name: Lt(F[1]),
        media: Lt(F[2])
      });
  }
  function q() {
    var k = i(), F = h(/^@page */);
    if (F) {
      var Z = C() || [];
      if (!d())
        return u("@page missing '{'");
      for (var Ee = _(), et; et = O(); )
        Ee.push(et), Ee = Ee.concat(_());
      return f() ? k({
        type: "page",
        selectors: Z,
        declarations: Ee
      }) : u("@page missing '}'");
    }
  }
  function V() {
    var k = i(), F = h(/^@([-\w]+)?document *([^{]+)/);
    if (F) {
      var Z = Lt(F[1]), Ee = Lt(F[2]);
      if (!d())
        return u("@document missing '{'");
      var et = _().concat(p());
      return f() ? k({
        type: "document",
        document: Ee,
        vendor: Z,
        rules: et
      }) : u("@document missing '}'");
    }
  }
  function x() {
    var k = i(), F = h(/^@font-face\s*/);
    if (F) {
      if (!d())
        return u("@font-face missing '{'");
      for (var Z = _(), Ee; Ee = O(); )
        Z.push(Ee), Z = Z.concat(_());
      return f() ? k({
        type: "font-face",
        declarations: Z
      }) : u("@font-face missing '}'");
    }
  }
  var J = re("import"), X = re("charset"), P = re("namespace");
  function re(k) {
    var F = new RegExp("^@" + k + "\\s*([^;]+);");
    return function() {
      var Z = i(), Ee = h(F);
      if (Ee) {
        var et = { type: k };
        return et[k] = Ee[1].trim(), Z(et);
      }
    };
  }
  function ne() {
    if (t[0] == "@")
      return v() || B() || H() || S() || J() || X() || P() || V() || q() || R() || x();
  }
  function ue() {
    var k = i(), F = C();
    return F ? (_(), k({
      type: "rule",
      selectors: F,
      declarations: A()
    })) : u("selector missing");
  }
  return ka(l());
};
function Lt(t) {
  return t ? t.replace(/^\s+|\s+$/g, "") : "";
}
function ka(t, e) {
  var n = t && typeof t.type == "string", r = n ? t : e;
  for (var s in t) {
    var i = t[s];
    Array.isArray(i) ? i.forEach(function(a) {
      ka(a, r);
    }) : i && typeof i == "object" && ka(i, r);
  }
  return n && Object.defineProperty(t, "parent", {
    configurable: !0,
    writable: !0,
    enumerable: !1,
    value: e || null
  }), t;
}
var fh = Ri;
function Ri(t) {
  this.options = t || {};
}
Ri.prototype.emit = function(t) {
  return t;
};
Ri.prototype.visit = function(t) {
  return this[t.type](t);
};
Ri.prototype.mapVisit = function(t, e) {
  var n = "";
  e = e || "";
  for (var r = 0, s = t.length; r < s; r++)
    n += this.visit(t[r]), e && r < s - 1 && (n += this.emit(e));
  return n;
};
var Zs = {}, bc = {
  get exports() {
    return Zs;
  },
  set exports(t) {
    Zs = t;
  }
};
typeof Object.create == "function" ? bc.exports = function(e, n) {
  n && (e.super_ = n, e.prototype = Object.create(n.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : bc.exports = function(e, n) {
  if (n) {
    e.super_ = n;
    var r = function() {
    };
    r.prototype = n.prototype, e.prototype = new r(), e.prototype.constructor = e;
  }
};
var hh = fh, pA = Zs, mA = Ue;
function Ue(t) {
  hh.call(this, t);
}
pA(Ue, hh);
Ue.prototype.compile = function(t) {
  return t.stylesheet.rules.map(this.visit, this).join("");
};
Ue.prototype.comment = function(t) {
  return this.emit("", t.position);
};
Ue.prototype.import = function(t) {
  return this.emit("@import " + t.import + ";", t.position);
};
Ue.prototype.media = function(t) {
  return this.emit("@media " + t.media, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
};
Ue.prototype.document = function(t) {
  var e = "@" + (t.vendor || "") + "document " + t.document;
  return this.emit(e, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
};
Ue.prototype.charset = function(t) {
  return this.emit("@charset " + t.charset + ";", t.position);
};
Ue.prototype.namespace = function(t) {
  return this.emit("@namespace " + t.namespace + ";", t.position);
};
Ue.prototype.supports = function(t) {
  return this.emit("@supports " + t.supports, t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
};
Ue.prototype.keyframes = function(t) {
  return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit("{") + this.mapVisit(t.keyframes) + this.emit("}");
};
Ue.prototype.keyframe = function(t) {
  var e = t.declarations;
  return this.emit(t.values.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}");
};
Ue.prototype.page = function(t) {
  var e = t.selectors.length ? t.selectors.join(", ") : "";
  return this.emit("@page " + e, t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}");
};
Ue.prototype["font-face"] = function(t) {
  return this.emit("@font-face", t.position) + this.emit("{") + this.mapVisit(t.declarations) + this.emit("}");
};
Ue.prototype.host = function(t) {
  return this.emit("@host", t.position) + this.emit("{") + this.mapVisit(t.rules) + this.emit("}");
};
Ue.prototype["custom-media"] = function(t) {
  return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position);
};
Ue.prototype.rule = function(t) {
  var e = t.declarations;
  return e.length ? this.emit(t.selectors.join(","), t.position) + this.emit("{") + this.mapVisit(e) + this.emit("}") : "";
};
Ue.prototype.declaration = function(t) {
  return this.emit(t.property + ":" + t.value, t.position) + this.emit(";");
};
var ph = fh, _A = Zs, EA = Me;
function Me(t) {
  t = t || {}, ph.call(this, t), this.indentation = t.indent;
}
_A(Me, ph);
Me.prototype.compile = function(t) {
  return this.stylesheet(t);
};
Me.prototype.stylesheet = function(t) {
  return this.mapVisit(t.stylesheet.rules, `

`);
};
Me.prototype.comment = function(t) {
  return this.emit(this.indent() + "/*" + t.comment + "*/", t.position);
};
Me.prototype.import = function(t) {
  return this.emit("@import " + t.import + ";", t.position);
};
Me.prototype.media = function(t) {
  return this.emit("@media " + t.media, t.position) + this.emit(
    ` {
` + this.indent(1)
  ) + this.mapVisit(t.rules, `

`) + this.emit(
    this.indent(-1) + `
}`
  );
};
Me.prototype.document = function(t) {
  var e = "@" + (t.vendor || "") + "document " + t.document;
  return this.emit(e, t.position) + this.emit(
    `  {
` + this.indent(1)
  ) + this.mapVisit(t.rules, `

`) + this.emit(
    this.indent(-1) + `
}`
  );
};
Me.prototype.charset = function(t) {
  return this.emit("@charset " + t.charset + ";", t.position);
};
Me.prototype.namespace = function(t) {
  return this.emit("@namespace " + t.namespace + ";", t.position);
};
Me.prototype.supports = function(t) {
  return this.emit("@supports " + t.supports, t.position) + this.emit(
    ` {
` + this.indent(1)
  ) + this.mapVisit(t.rules, `

`) + this.emit(
    this.indent(-1) + `
}`
  );
};
Me.prototype.keyframes = function(t) {
  return this.emit("@" + (t.vendor || "") + "keyframes " + t.name, t.position) + this.emit(
    ` {
` + this.indent(1)
  ) + this.mapVisit(t.keyframes, `
`) + this.emit(
    this.indent(-1) + "}"
  );
};
Me.prototype.keyframe = function(t) {
  var e = t.declarations;
  return this.emit(this.indent()) + this.emit(t.values.join(", "), t.position) + this.emit(
    ` {
` + this.indent(1)
  ) + this.mapVisit(e, `
`) + this.emit(
    this.indent(-1) + `
` + this.indent() + `}
`
  );
};
Me.prototype.page = function(t) {
  var e = t.selectors.length ? t.selectors.join(", ") + " " : "";
  return this.emit("@page " + e, t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
};
Me.prototype["font-face"] = function(t) {
  return this.emit("@font-face ", t.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(t.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
};
Me.prototype.host = function(t) {
  return this.emit("@host", t.position) + this.emit(
    ` {
` + this.indent(1)
  ) + this.mapVisit(t.rules, `

`) + this.emit(
    this.indent(-1) + `
}`
  );
};
Me.prototype["custom-media"] = function(t) {
  return this.emit("@custom-media " + t.name + " " + t.media + ";", t.position);
};
Me.prototype.rule = function(t) {
  var e = this.indent(), n = t.declarations;
  return n.length ? this.emit(t.selectors.map(function(r) {
    return e + r;
  }).join(`,
`), t.position) + this.emit(` {
`) + this.emit(this.indent(1)) + this.mapVisit(n, `
`) + this.emit(this.indent(-1)) + this.emit(`
` + this.indent() + "}") : "";
};
Me.prototype.declaration = function(t) {
  return this.emit(this.indent()) + this.emit(t.property + ": " + t.value, t.position) + this.emit(";");
};
Me.prototype.indent = function(t) {
  return this.level = this.level || 1, t != null ? (this.level += t, "") : Array(this.level).join(this.indentation || "  ");
};
var Cr = {}, gA = {
  get exports() {
    return Cr;
  },
  set exports(t) {
    Cr = t;
  }
}, or = {}, Ji = {}, bs = {}, Ts = {}, Tc;
function bA() {
  if (Tc)
    return Ts;
  Tc = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ts.encode = function(e) {
    if (0 <= e && e < t.length)
      return t[e];
    throw new TypeError("Must be between 0 and 63: " + e);
  }, Ts.decode = function(e) {
    var n = 65, r = 90, s = 97, i = 122, a = 48, o = 57, u = 43, l = 47, d = 26, f = 52;
    return n <= e && e <= r ? e - n : s <= e && e <= i ? e - s + d : a <= e && e <= o ? e - a + f : e == u ? 62 : e == l ? 63 : -1;
  }, Ts;
}
var Ic;
function mh() {
  if (Ic)
    return bs;
  Ic = 1;
  var t = bA(), e = 5, n = 1 << e, r = n - 1, s = n;
  function i(o) {
    return o < 0 ? (-o << 1) + 1 : (o << 1) + 0;
  }
  function a(o) {
    var u = (o & 1) === 1, l = o >> 1;
    return u ? -l : l;
  }
  return bs.encode = function(u) {
    var l = "", d, f = i(u);
    do
      d = f & r, f >>>= e, f > 0 && (d |= s), l += t.encode(d);
    while (f > 0);
    return l;
  }, bs.decode = function(u, l, d) {
    var f = u.length, p = 0, h = 0, m, _;
    do {
      if (l >= f)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (_ = t.decode(u.charCodeAt(l++)), _ === -1)
        throw new Error("Invalid base64 digit: " + u.charAt(l - 1));
      m = !!(_ & s), _ &= r, p = p + (_ << h), h += e;
    } while (m);
    d.value = a(p), d.rest = l;
  }, bs;
}
var Zi = {}, Ac;
function us() {
  return Ac || (Ac = 1, function(t) {
    function e(T, v, S) {
      if (v in T)
        return T[v];
      if (arguments.length === 3)
        return S;
      throw new Error('"' + v + '" is a required argument.');
    }
    t.getArg = e;
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r = /^data:.+\,.+$/;
    function s(T) {
      var v = T.match(n);
      return v ? {
        scheme: v[1],
        auth: v[2],
        host: v[3],
        port: v[4],
        path: v[5]
      } : null;
    }
    t.urlParse = s;
    function i(T) {
      var v = "";
      return T.scheme && (v += T.scheme + ":"), v += "//", T.auth && (v += T.auth + "@"), T.host && (v += T.host), T.port && (v += ":" + T.port), T.path && (v += T.path), v;
    }
    t.urlGenerate = i;
    function a(T) {
      var v = T, S = s(T);
      if (S) {
        if (!S.path)
          return T;
        v = S.path;
      }
      for (var R = t.isAbsolute(v), B = v.split(/\/+/), H, q = 0, V = B.length - 1; V >= 0; V--)
        H = B[V], H === "." ? B.splice(V, 1) : H === ".." ? q++ : q > 0 && (H === "" ? (B.splice(V + 1, q), q = 0) : (B.splice(V, 2), q--));
      return v = B.join("/"), v === "" && (v = R ? "/" : "."), S ? (S.path = v, i(S)) : v;
    }
    t.normalize = a;
    function o(T, v) {
      T === "" && (T = "."), v === "" && (v = ".");
      var S = s(v), R = s(T);
      if (R && (T = R.path || "/"), S && !S.scheme)
        return R && (S.scheme = R.scheme), i(S);
      if (S || v.match(r))
        return v;
      if (R && !R.host && !R.path)
        return R.host = v, i(R);
      var B = v.charAt(0) === "/" ? v : a(T.replace(/\/+$/, "") + "/" + v);
      return R ? (R.path = B, i(R)) : B;
    }
    t.join = o, t.isAbsolute = function(T) {
      return T.charAt(0) === "/" || n.test(T);
    };
    function u(T, v) {
      T === "" && (T = "."), T = T.replace(/\/$/, "");
      for (var S = 0; v.indexOf(T + "/") !== 0; ) {
        var R = T.lastIndexOf("/");
        if (R < 0 || (T = T.slice(0, R), T.match(/^([^\/]+:\/)?\/*$/)))
          return v;
        ++S;
      }
      return Array(S + 1).join("../") + v.substr(T.length + 1);
    }
    t.relative = u;
    var l = function() {
      var T = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in T);
    }();
    function d(T) {
      return T;
    }
    function f(T) {
      return h(T) ? "$" + T : T;
    }
    t.toSetString = l ? d : f;
    function p(T) {
      return h(T) ? T.slice(1) : T;
    }
    t.fromSetString = l ? d : p;
    function h(T) {
      if (!T)
        return !1;
      var v = T.length;
      if (v < 9 || T.charCodeAt(v - 1) !== 95 || T.charCodeAt(v - 2) !== 95 || T.charCodeAt(v - 3) !== 111 || T.charCodeAt(v - 4) !== 116 || T.charCodeAt(v - 5) !== 111 || T.charCodeAt(v - 6) !== 114 || T.charCodeAt(v - 7) !== 112 || T.charCodeAt(v - 8) !== 95 || T.charCodeAt(v - 9) !== 95)
        return !1;
      for (var S = v - 10; S >= 0; S--)
        if (T.charCodeAt(S) !== 36)
          return !1;
      return !0;
    }
    function m(T, v, S) {
      var R = b(T.source, v.source);
      return R !== 0 || (R = T.originalLine - v.originalLine, R !== 0) || (R = T.originalColumn - v.originalColumn, R !== 0 || S) || (R = T.generatedColumn - v.generatedColumn, R !== 0) || (R = T.generatedLine - v.generatedLine, R !== 0) ? R : b(T.name, v.name);
    }
    t.compareByOriginalPositions = m;
    function _(T, v, S) {
      var R = T.generatedLine - v.generatedLine;
      return R !== 0 || (R = T.generatedColumn - v.generatedColumn, R !== 0 || S) || (R = b(T.source, v.source), R !== 0) || (R = T.originalLine - v.originalLine, R !== 0) || (R = T.originalColumn - v.originalColumn, R !== 0) ? R : b(T.name, v.name);
    }
    t.compareByGeneratedPositionsDeflated = _;
    function b(T, v) {
      return T === v ? 0 : T === null ? 1 : v === null ? -1 : T > v ? 1 : -1;
    }
    function C(T, v) {
      var S = T.generatedLine - v.generatedLine;
      return S !== 0 || (S = T.generatedColumn - v.generatedColumn, S !== 0) || (S = b(T.source, v.source), S !== 0) || (S = T.originalLine - v.originalLine, S !== 0) || (S = T.originalColumn - v.originalColumn, S !== 0) ? S : b(T.name, v.name);
    }
    t.compareByGeneratedPositionsInflated = C;
    function O(T) {
      return JSON.parse(T.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = O;
    function A(T, v, S) {
      if (v = v || "", T && (T[T.length - 1] !== "/" && v[0] !== "/" && (T += "/"), v = T + v), S) {
        var R = s(S);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var B = R.path.lastIndexOf("/");
          B >= 0 && (R.path = R.path.substring(0, B + 1));
        }
        v = o(i(R), v);
      }
      return a(v);
    }
    t.computeSourceURL = A;
  }(Zi)), Zi;
}
var ea = {}, yc;
function _h() {
  if (yc)
    return ea;
  yc = 1;
  var t = us(), e = Object.prototype.hasOwnProperty, n = typeof Map != "undefined";
  function r() {
    this._array = [], this._set = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return r.fromArray = function(i, a) {
    for (var o = new r(), u = 0, l = i.length; u < l; u++)
      o.add(i[u], a);
    return o;
  }, r.prototype.size = function() {
    return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, r.prototype.add = function(i, a) {
    var o = n ? i : t.toSetString(i), u = n ? this.has(i) : e.call(this._set, o), l = this._array.length;
    (!u || a) && this._array.push(i), u || (n ? this._set.set(i, l) : this._set[o] = l);
  }, r.prototype.has = function(i) {
    if (n)
      return this._set.has(i);
    var a = t.toSetString(i);
    return e.call(this._set, a);
  }, r.prototype.indexOf = function(i) {
    if (n) {
      var a = this._set.get(i);
      if (a >= 0)
        return a;
    } else {
      var o = t.toSetString(i);
      if (e.call(this._set, o))
        return this._set[o];
    }
    throw new Error('"' + i + '" is not in the set.');
  }, r.prototype.at = function(i) {
    if (i >= 0 && i < this._array.length)
      return this._array[i];
    throw new Error("No element indexed by " + i);
  }, r.prototype.toArray = function() {
    return this._array.slice();
  }, ea.ArraySet = r, ea;
}
var ta = {}, vc;
function TA() {
  if (vc)
    return ta;
  vc = 1;
  var t = us();
  function e(r, s) {
    var i = r.generatedLine, a = s.generatedLine, o = r.generatedColumn, u = s.generatedColumn;
    return a > i || a == i && u >= o || t.compareByGeneratedPositionsInflated(r, s) <= 0;
  }
  function n() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return n.prototype.unsortedForEach = function(s, i) {
    this._array.forEach(s, i);
  }, n.prototype.add = function(s) {
    e(this._last, s) ? (this._last = s, this._array.push(s)) : (this._sorted = !1, this._array.push(s));
  }, n.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, ta.MappingList = n, ta;
}
var Sc;
function Eh() {
  if (Sc)
    return Ji;
  Sc = 1;
  var t = mh(), e = us(), n = _h().ArraySet, r = TA().MappingList;
  function s(i) {
    i || (i = {}), this._file = e.getArg(i, "file", null), this._sourceRoot = e.getArg(i, "sourceRoot", null), this._skipValidation = e.getArg(i, "skipValidation", !1), this._sources = new n(), this._names = new n(), this._mappings = new r(), this._sourcesContents = null;
  }
  return s.prototype._version = 3, s.fromSourceMap = function(a) {
    var o = a.sourceRoot, u = new s({
      file: a.file,
      sourceRoot: o
    });
    return a.eachMapping(function(l) {
      var d = {
        generated: {
          line: l.generatedLine,
          column: l.generatedColumn
        }
      };
      l.source != null && (d.source = l.source, o != null && (d.source = e.relative(o, d.source)), d.original = {
        line: l.originalLine,
        column: l.originalColumn
      }, l.name != null && (d.name = l.name)), u.addMapping(d);
    }), a.sources.forEach(function(l) {
      var d = l;
      o !== null && (d = e.relative(o, l)), u._sources.has(d) || u._sources.add(d);
      var f = a.sourceContentFor(l);
      f != null && u.setSourceContent(l, f);
    }), u;
  }, s.prototype.addMapping = function(a) {
    var o = e.getArg(a, "generated"), u = e.getArg(a, "original", null), l = e.getArg(a, "source", null), d = e.getArg(a, "name", null);
    this._skipValidation || this._validateMapping(o, u, l, d), l != null && (l = String(l), this._sources.has(l) || this._sources.add(l)), d != null && (d = String(d), this._names.has(d) || this._names.add(d)), this._mappings.add({
      generatedLine: o.line,
      generatedColumn: o.column,
      originalLine: u != null && u.line,
      originalColumn: u != null && u.column,
      source: l,
      name: d
    });
  }, s.prototype.setSourceContent = function(a, o) {
    var u = a;
    this._sourceRoot != null && (u = e.relative(this._sourceRoot, u)), o != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[e.toSetString(u)] = o) : this._sourcesContents && (delete this._sourcesContents[e.toSetString(u)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, s.prototype.applySourceMap = function(a, o, u) {
    var l = o;
    if (o == null) {
      if (a.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      l = a.file;
    }
    var d = this._sourceRoot;
    d != null && (l = e.relative(d, l));
    var f = new n(), p = new n();
    this._mappings.unsortedForEach(function(h) {
      if (h.source === l && h.originalLine != null) {
        var m = a.originalPositionFor({
          line: h.originalLine,
          column: h.originalColumn
        });
        m.source != null && (h.source = m.source, u != null && (h.source = e.join(u, h.source)), d != null && (h.source = e.relative(d, h.source)), h.originalLine = m.line, h.originalColumn = m.column, m.name != null && (h.name = m.name));
      }
      var _ = h.source;
      _ != null && !f.has(_) && f.add(_);
      var b = h.name;
      b != null && !p.has(b) && p.add(b);
    }, this), this._sources = f, this._names = p, a.sources.forEach(function(h) {
      var m = a.sourceContentFor(h);
      m != null && (u != null && (h = e.join(u, h)), d != null && (h = e.relative(d, h)), this.setSourceContent(h, m));
    }, this);
  }, s.prototype._validateMapping = function(a, o, u, l) {
    if (o && typeof o.line != "number" && typeof o.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(a && "line" in a && "column" in a && a.line > 0 && a.column >= 0 && !o && !u && !l)) {
      if (a && "line" in a && "column" in a && o && "line" in o && "column" in o && a.line > 0 && a.column >= 0 && o.line > 0 && o.column >= 0 && u)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: a,
        source: u,
        original: o,
        name: l
      }));
    }
  }, s.prototype._serializeMappings = function() {
    for (var a = 0, o = 1, u = 0, l = 0, d = 0, f = 0, p = "", h, m, _, b, C = this._mappings.toArray(), O = 0, A = C.length; O < A; O++) {
      if (m = C[O], h = "", m.generatedLine !== o)
        for (a = 0; m.generatedLine !== o; )
          h += ";", o++;
      else if (O > 0) {
        if (!e.compareByGeneratedPositionsInflated(m, C[O - 1]))
          continue;
        h += ",";
      }
      h += t.encode(m.generatedColumn - a), a = m.generatedColumn, m.source != null && (b = this._sources.indexOf(m.source), h += t.encode(b - f), f = b, h += t.encode(m.originalLine - 1 - l), l = m.originalLine - 1, h += t.encode(m.originalColumn - u), u = m.originalColumn, m.name != null && (_ = this._names.indexOf(m.name), h += t.encode(_ - d), d = _)), p += h;
    }
    return p;
  }, s.prototype._generateSourcesContent = function(a, o) {
    return a.map(function(u) {
      if (!this._sourcesContents)
        return null;
      o != null && (u = e.relative(o, u));
      var l = e.toSetString(u);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, l) ? this._sourcesContents[l] : null;
    }, this);
  }, s.prototype.toJSON = function() {
    var a = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (a.file = this._file), this._sourceRoot != null && (a.sourceRoot = this._sourceRoot), this._sourcesContents && (a.sourcesContent = this._generateSourcesContent(a.sources, a.sourceRoot)), a;
  }, s.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Ji.SourceMapGenerator = s, Ji;
}
var cr = {}, na = {}, Cc;
function IA() {
  return Cc || (Cc = 1, function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function e(n, r, s, i, a, o) {
      var u = Math.floor((r - n) / 2) + n, l = a(s, i[u], !0);
      return l === 0 ? u : l > 0 ? r - u > 1 ? e(u, r, s, i, a, o) : o == t.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : u : u - n > 1 ? e(n, u, s, i, a, o) : o == t.LEAST_UPPER_BOUND ? u : n < 0 ? -1 : n;
    }
    t.search = function(r, s, i, a) {
      if (s.length === 0)
        return -1;
      var o = e(
        -1,
        s.length,
        r,
        s,
        i,
        a || t.GREATEST_LOWER_BOUND
      );
      if (o < 0)
        return -1;
      for (; o - 1 >= 0 && i(s[o], s[o - 1], !0) === 0; )
        --o;
      return o;
    };
  }(na)), na;
}
var ra = {}, Oc;
function AA() {
  if (Oc)
    return ra;
  Oc = 1;
  function t(r, s, i) {
    var a = r[s];
    r[s] = r[i], r[i] = a;
  }
  function e(r, s) {
    return Math.round(r + Math.random() * (s - r));
  }
  function n(r, s, i, a) {
    if (i < a) {
      var o = e(i, a), u = i - 1;
      t(r, o, a);
      for (var l = r[a], d = i; d < a; d++)
        s(r[d], l) <= 0 && (u += 1, t(r, u, d));
      t(r, u + 1, d);
      var f = u + 1;
      n(r, s, i, f - 1), n(r, s, f + 1, a);
    }
  }
  return ra.quickSort = function(r, s) {
    n(r, s, 0, r.length - 1);
  }, ra;
}
var Rc;
function yA() {
  if (Rc)
    return cr;
  Rc = 1;
  var t = us(), e = IA(), n = _h().ArraySet, r = mh(), s = AA().quickSort;
  function i(l, d) {
    var f = l;
    return typeof l == "string" && (f = t.parseSourceMapInput(l)), f.sections != null ? new u(f, d) : new a(f, d);
  }
  i.fromSourceMap = function(l, d) {
    return a.fromSourceMap(l, d);
  }, i.prototype._version = 3, i.prototype.__generatedMappings = null, Object.defineProperty(i.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), i.prototype.__originalMappings = null, Object.defineProperty(i.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), i.prototype._charIsMappingSeparator = function(d, f) {
    var p = d.charAt(f);
    return p === ";" || p === ",";
  }, i.prototype._parseMappings = function(d, f) {
    throw new Error("Subclasses must implement _parseMappings");
  }, i.GENERATED_ORDER = 1, i.ORIGINAL_ORDER = 2, i.GREATEST_LOWER_BOUND = 1, i.LEAST_UPPER_BOUND = 2, i.prototype.eachMapping = function(d, f, p) {
    var h = f || null, m = p || i.GENERATED_ORDER, _;
    switch (m) {
      case i.GENERATED_ORDER:
        _ = this._generatedMappings;
        break;
      case i.ORIGINAL_ORDER:
        _ = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var b = this.sourceRoot;
    _.map(function(C) {
      var O = C.source === null ? null : this._sources.at(C.source);
      return O = t.computeSourceURL(b, O, this._sourceMapURL), {
        source: O,
        generatedLine: C.generatedLine,
        generatedColumn: C.generatedColumn,
        originalLine: C.originalLine,
        originalColumn: C.originalColumn,
        name: C.name === null ? null : this._names.at(C.name)
      };
    }, this).forEach(d, h);
  }, i.prototype.allGeneratedPositionsFor = function(d) {
    var f = t.getArg(d, "line"), p = {
      source: t.getArg(d, "source"),
      originalLine: f,
      originalColumn: t.getArg(d, "column", 0)
    };
    if (p.source = this._findSourceIndex(p.source), p.source < 0)
      return [];
    var h = [], m = this._findMapping(
      p,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      e.LEAST_UPPER_BOUND
    );
    if (m >= 0) {
      var _ = this._originalMappings[m];
      if (d.column === void 0)
        for (var b = _.originalLine; _ && _.originalLine === b; )
          h.push({
            line: t.getArg(_, "generatedLine", null),
            column: t.getArg(_, "generatedColumn", null),
            lastColumn: t.getArg(_, "lastGeneratedColumn", null)
          }), _ = this._originalMappings[++m];
      else
        for (var C = _.originalColumn; _ && _.originalLine === f && _.originalColumn == C; )
          h.push({
            line: t.getArg(_, "generatedLine", null),
            column: t.getArg(_, "generatedColumn", null),
            lastColumn: t.getArg(_, "lastGeneratedColumn", null)
          }), _ = this._originalMappings[++m];
    }
    return h;
  }, cr.SourceMapConsumer = i;
  function a(l, d) {
    var f = l;
    typeof l == "string" && (f = t.parseSourceMapInput(l));
    var p = t.getArg(f, "version"), h = t.getArg(f, "sources"), m = t.getArg(f, "names", []), _ = t.getArg(f, "sourceRoot", null), b = t.getArg(f, "sourcesContent", null), C = t.getArg(f, "mappings"), O = t.getArg(f, "file", null);
    if (p != this._version)
      throw new Error("Unsupported version: " + p);
    _ && (_ = t.normalize(_)), h = h.map(String).map(t.normalize).map(function(A) {
      return _ && t.isAbsolute(_) && t.isAbsolute(A) ? t.relative(_, A) : A;
    }), this._names = n.fromArray(m.map(String), !0), this._sources = n.fromArray(h, !0), this._absoluteSources = this._sources.toArray().map(function(A) {
      return t.computeSourceURL(_, A, d);
    }), this.sourceRoot = _, this.sourcesContent = b, this._mappings = C, this._sourceMapURL = d, this.file = O;
  }
  a.prototype = Object.create(i.prototype), a.prototype.consumer = i, a.prototype._findSourceIndex = function(l) {
    var d = l;
    if (this.sourceRoot != null && (d = t.relative(this.sourceRoot, d)), this._sources.has(d))
      return this._sources.indexOf(d);
    var f;
    for (f = 0; f < this._absoluteSources.length; ++f)
      if (this._absoluteSources[f] == l)
        return f;
    return -1;
  }, a.fromSourceMap = function(d, f) {
    var p = Object.create(a.prototype), h = p._names = n.fromArray(d._names.toArray(), !0), m = p._sources = n.fromArray(d._sources.toArray(), !0);
    p.sourceRoot = d._sourceRoot, p.sourcesContent = d._generateSourcesContent(
      p._sources.toArray(),
      p.sourceRoot
    ), p.file = d._file, p._sourceMapURL = f, p._absoluteSources = p._sources.toArray().map(function(S) {
      return t.computeSourceURL(p.sourceRoot, S, f);
    });
    for (var _ = d._mappings.toArray().slice(), b = p.__generatedMappings = [], C = p.__originalMappings = [], O = 0, A = _.length; O < A; O++) {
      var T = _[O], v = new o();
      v.generatedLine = T.generatedLine, v.generatedColumn = T.generatedColumn, T.source && (v.source = m.indexOf(T.source), v.originalLine = T.originalLine, v.originalColumn = T.originalColumn, T.name && (v.name = h.indexOf(T.name)), C.push(v)), b.push(v);
    }
    return s(p.__originalMappings, t.compareByOriginalPositions), p;
  }, a.prototype._version = 3, Object.defineProperty(a.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function o() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  a.prototype._parseMappings = function(d, f) {
    for (var p = 1, h = 0, m = 0, _ = 0, b = 0, C = 0, O = d.length, A = 0, T = {}, v = {}, S = [], R = [], B, H, q, V, x; A < O; )
      if (d.charAt(A) === ";")
        p++, A++, h = 0;
      else if (d.charAt(A) === ",")
        A++;
      else {
        for (B = new o(), B.generatedLine = p, V = A; V < O && !this._charIsMappingSeparator(d, V); V++)
          ;
        if (H = d.slice(A, V), q = T[H], q)
          A += H.length;
        else {
          for (q = []; A < V; )
            r.decode(d, A, v), x = v.value, A = v.rest, q.push(x);
          if (q.length === 2)
            throw new Error("Found a source, but no line and column");
          if (q.length === 3)
            throw new Error("Found a source and line, but no column");
          T[H] = q;
        }
        B.generatedColumn = h + q[0], h = B.generatedColumn, q.length > 1 && (B.source = b + q[1], b += q[1], B.originalLine = m + q[2], m = B.originalLine, B.originalLine += 1, B.originalColumn = _ + q[3], _ = B.originalColumn, q.length > 4 && (B.name = C + q[4], C += q[4])), R.push(B), typeof B.originalLine == "number" && S.push(B);
      }
    s(R, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, s(S, t.compareByOriginalPositions), this.__originalMappings = S;
  }, a.prototype._findMapping = function(d, f, p, h, m, _) {
    if (d[p] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + d[p]);
    if (d[h] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + d[h]);
    return e.search(d, f, m, _);
  }, a.prototype.computeColumnSpans = function() {
    for (var d = 0; d < this._generatedMappings.length; ++d) {
      var f = this._generatedMappings[d];
      if (d + 1 < this._generatedMappings.length) {
        var p = this._generatedMappings[d + 1];
        if (f.generatedLine === p.generatedLine) {
          f.lastGeneratedColumn = p.generatedColumn - 1;
          continue;
        }
      }
      f.lastGeneratedColumn = 1 / 0;
    }
  }, a.prototype.originalPositionFor = function(d) {
    var f = {
      generatedLine: t.getArg(d, "line"),
      generatedColumn: t.getArg(d, "column")
    }, p = this._findMapping(
      f,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(d, "bias", i.GREATEST_LOWER_BOUND)
    );
    if (p >= 0) {
      var h = this._generatedMappings[p];
      if (h.generatedLine === f.generatedLine) {
        var m = t.getArg(h, "source", null);
        m !== null && (m = this._sources.at(m), m = t.computeSourceURL(this.sourceRoot, m, this._sourceMapURL));
        var _ = t.getArg(h, "name", null);
        return _ !== null && (_ = this._names.at(_)), {
          source: m,
          line: t.getArg(h, "originalLine", null),
          column: t.getArg(h, "originalColumn", null),
          name: _
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, a.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(d) {
      return d == null;
    }) : !1;
  }, a.prototype.sourceContentFor = function(d, f) {
    if (!this.sourcesContent)
      return null;
    var p = this._findSourceIndex(d);
    if (p >= 0)
      return this.sourcesContent[p];
    var h = d;
    this.sourceRoot != null && (h = t.relative(this.sourceRoot, h));
    var m;
    if (this.sourceRoot != null && (m = t.urlParse(this.sourceRoot))) {
      var _ = h.replace(/^file:\/\//, "");
      if (m.scheme == "file" && this._sources.has(_))
        return this.sourcesContent[this._sources.indexOf(_)];
      if ((!m.path || m.path == "/") && this._sources.has("/" + h))
        return this.sourcesContent[this._sources.indexOf("/" + h)];
    }
    if (f)
      return null;
    throw new Error('"' + h + '" is not in the SourceMap.');
  }, a.prototype.generatedPositionFor = function(d) {
    var f = t.getArg(d, "source");
    if (f = this._findSourceIndex(f), f < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var p = {
      source: f,
      originalLine: t.getArg(d, "line"),
      originalColumn: t.getArg(d, "column")
    }, h = this._findMapping(
      p,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(d, "bias", i.GREATEST_LOWER_BOUND)
    );
    if (h >= 0) {
      var m = this._originalMappings[h];
      if (m.source === p.source)
        return {
          line: t.getArg(m, "generatedLine", null),
          column: t.getArg(m, "generatedColumn", null),
          lastColumn: t.getArg(m, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, cr.BasicSourceMapConsumer = a;
  function u(l, d) {
    var f = l;
    typeof l == "string" && (f = t.parseSourceMapInput(l));
    var p = t.getArg(f, "version"), h = t.getArg(f, "sections");
    if (p != this._version)
      throw new Error("Unsupported version: " + p);
    this._sources = new n(), this._names = new n();
    var m = {
      line: -1,
      column: 0
    };
    this._sections = h.map(function(_) {
      if (_.url)
        throw new Error("Support for url field in sections not implemented.");
      var b = t.getArg(_, "offset"), C = t.getArg(b, "line"), O = t.getArg(b, "column");
      if (C < m.line || C === m.line && O < m.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return m = b, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: C + 1,
          generatedColumn: O + 1
        },
        consumer: new i(t.getArg(_, "map"), d)
      };
    });
  }
  return u.prototype = Object.create(i.prototype), u.prototype.constructor = i, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
    get: function() {
      for (var l = [], d = 0; d < this._sections.length; d++)
        for (var f = 0; f < this._sections[d].consumer.sources.length; f++)
          l.push(this._sections[d].consumer.sources[f]);
      return l;
    }
  }), u.prototype.originalPositionFor = function(d) {
    var f = {
      generatedLine: t.getArg(d, "line"),
      generatedColumn: t.getArg(d, "column")
    }, p = e.search(
      f,
      this._sections,
      function(m, _) {
        var b = m.generatedLine - _.generatedOffset.generatedLine;
        return b || m.generatedColumn - _.generatedOffset.generatedColumn;
      }
    ), h = this._sections[p];
    return h ? h.consumer.originalPositionFor({
      line: f.generatedLine - (h.generatedOffset.generatedLine - 1),
      column: f.generatedColumn - (h.generatedOffset.generatedLine === f.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
      bias: d.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, u.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(d) {
      return d.consumer.hasContentsOfAllSources();
    });
  }, u.prototype.sourceContentFor = function(d, f) {
    for (var p = 0; p < this._sections.length; p++) {
      var h = this._sections[p], m = h.consumer.sourceContentFor(d, !0);
      if (m)
        return m;
    }
    if (f)
      return null;
    throw new Error('"' + d + '" is not in the SourceMap.');
  }, u.prototype.generatedPositionFor = function(d) {
    for (var f = 0; f < this._sections.length; f++) {
      var p = this._sections[f];
      if (p.consumer._findSourceIndex(t.getArg(d, "source")) !== -1) {
        var h = p.consumer.generatedPositionFor(d);
        if (h) {
          var m = {
            line: h.line + (p.generatedOffset.generatedLine - 1),
            column: h.column + (p.generatedOffset.generatedLine === h.line ? p.generatedOffset.generatedColumn - 1 : 0)
          };
          return m;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, u.prototype._parseMappings = function(d, f) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var p = 0; p < this._sections.length; p++)
      for (var h = this._sections[p], m = h.consumer._generatedMappings, _ = 0; _ < m.length; _++) {
        var b = m[_], C = h.consumer._sources.at(b.source);
        C = t.computeSourceURL(h.consumer.sourceRoot, C, this._sourceMapURL), this._sources.add(C), C = this._sources.indexOf(C);
        var O = null;
        b.name && (O = h.consumer._names.at(b.name), this._names.add(O), O = this._names.indexOf(O));
        var A = {
          source: C,
          generatedLine: b.generatedLine + (h.generatedOffset.generatedLine - 1),
          generatedColumn: b.generatedColumn + (h.generatedOffset.generatedLine === b.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
          originalLine: b.originalLine,
          originalColumn: b.originalColumn,
          name: O
        };
        this.__generatedMappings.push(A), typeof A.originalLine == "number" && this.__originalMappings.push(A);
      }
    s(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), s(this.__originalMappings, t.compareByOriginalPositions);
  }, cr.IndexedSourceMapConsumer = u, cr;
}
var sa = {}, Nc;
function vA() {
  if (Nc)
    return sa;
  Nc = 1;
  var t = Eh().SourceMapGenerator, e = us(), n = /(\r?\n)/, r = 10, s = "$$$isSourceNode$$$";
  function i(a, o, u, l, d) {
    this.children = [], this.sourceContents = {}, this.line = a == null ? null : a, this.column = o == null ? null : o, this.source = u == null ? null : u, this.name = d == null ? null : d, this[s] = !0, l != null && this.add(l);
  }
  return i.fromStringWithSourceMap = function(o, u, l) {
    var d = new i(), f = o.split(n), p = 0, h = function() {
      var O = T(), A = T() || "";
      return O + A;
      function T() {
        return p < f.length ? f[p++] : void 0;
      }
    }, m = 1, _ = 0, b = null;
    return u.eachMapping(function(O) {
      if (b !== null)
        if (m < O.generatedLine)
          C(b, h()), m++, _ = 0;
        else {
          var A = f[p] || "", T = A.substr(0, O.generatedColumn - _);
          f[p] = A.substr(O.generatedColumn - _), _ = O.generatedColumn, C(b, T), b = O;
          return;
        }
      for (; m < O.generatedLine; )
        d.add(h()), m++;
      if (_ < O.generatedColumn) {
        var A = f[p] || "";
        d.add(A.substr(0, O.generatedColumn)), f[p] = A.substr(O.generatedColumn), _ = O.generatedColumn;
      }
      b = O;
    }, this), p < f.length && (b && C(b, h()), d.add(f.splice(p).join(""))), u.sources.forEach(function(O) {
      var A = u.sourceContentFor(O);
      A != null && (l != null && (O = e.join(l, O)), d.setSourceContent(O, A));
    }), d;
    function C(O, A) {
      if (O === null || O.source === void 0)
        d.add(A);
      else {
        var T = l ? e.join(l, O.source) : O.source;
        d.add(new i(
          O.originalLine,
          O.originalColumn,
          T,
          A,
          O.name
        ));
      }
    }
  }, i.prototype.add = function(o) {
    if (Array.isArray(o))
      o.forEach(function(u) {
        this.add(u);
      }, this);
    else if (o[s] || typeof o == "string")
      o && this.children.push(o);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + o
      );
    return this;
  }, i.prototype.prepend = function(o) {
    if (Array.isArray(o))
      for (var u = o.length - 1; u >= 0; u--)
        this.prepend(o[u]);
    else if (o[s] || typeof o == "string")
      this.children.unshift(o);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + o
      );
    return this;
  }, i.prototype.walk = function(o) {
    for (var u, l = 0, d = this.children.length; l < d; l++)
      u = this.children[l], u[s] ? u.walk(o) : u !== "" && o(u, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, i.prototype.join = function(o) {
    var u, l, d = this.children.length;
    if (d > 0) {
      for (u = [], l = 0; l < d - 1; l++)
        u.push(this.children[l]), u.push(o);
      u.push(this.children[l]), this.children = u;
    }
    return this;
  }, i.prototype.replaceRight = function(o, u) {
    var l = this.children[this.children.length - 1];
    return l[s] ? l.replaceRight(o, u) : typeof l == "string" ? this.children[this.children.length - 1] = l.replace(o, u) : this.children.push("".replace(o, u)), this;
  }, i.prototype.setSourceContent = function(o, u) {
    this.sourceContents[e.toSetString(o)] = u;
  }, i.prototype.walkSourceContents = function(o) {
    for (var u = 0, l = this.children.length; u < l; u++)
      this.children[u][s] && this.children[u].walkSourceContents(o);
    for (var d = Object.keys(this.sourceContents), u = 0, l = d.length; u < l; u++)
      o(e.fromSetString(d[u]), this.sourceContents[d[u]]);
  }, i.prototype.toString = function() {
    var o = "";
    return this.walk(function(u) {
      o += u;
    }), o;
  }, i.prototype.toStringWithSourceMap = function(o) {
    var u = {
      code: "",
      line: 1,
      column: 0
    }, l = new t(o), d = !1, f = null, p = null, h = null, m = null;
    return this.walk(function(_, b) {
      u.code += _, b.source !== null && b.line !== null && b.column !== null ? ((f !== b.source || p !== b.line || h !== b.column || m !== b.name) && l.addMapping({
        source: b.source,
        original: {
          line: b.line,
          column: b.column
        },
        generated: {
          line: u.line,
          column: u.column
        },
        name: b.name
      }), f = b.source, p = b.line, h = b.column, m = b.name, d = !0) : d && (l.addMapping({
        generated: {
          line: u.line,
          column: u.column
        }
      }), f = null, d = !1);
      for (var C = 0, O = _.length; C < O; C++)
        _.charCodeAt(C) === r ? (u.line++, u.column = 0, C + 1 === O ? (f = null, d = !1) : d && l.addMapping({
          source: b.source,
          original: {
            line: b.line,
            column: b.column
          },
          generated: {
            line: u.line,
            column: u.column
          },
          name: b.name
        })) : u.column++;
    }), this.walkSourceContents(function(_, b) {
      l.setSourceContent(_, b);
    }), { code: u.code, map: l };
  }, sa.SourceNode = i, sa;
}
var wc;
function Lc() {
  return wc || (wc = 1, or.SourceMapGenerator = Eh().SourceMapGenerator, or.SourceMapConsumer = yA().SourceMapConsumer, or.SourceNode = vA().SourceNode), or;
}
var ei = {}, SA = {
  get exports() {
    return ei;
  },
  set exports(t) {
    ei = t;
  }
}, Dc;
function CA() {
  return Dc || (Dc = 1, function(t) {
    (function(e) {
      function n(s) {
        return typeof s == "function" ? s : typeof Buffer == "function" ? function(a) {
          //!! Deliberately using an API that's deprecated in node.js because
          //!! this file is for browsers and we expect them to cope with it.
          //!! Discussion: github.com/node-browser-compat/atob/pull/9
          return new Buffer(a, "base64").toString("binary");
        } : typeof e.base64js == "object" ? function(a) {
          var o = e.base64js.b64ToByteArray(a);
          return Array.prototype.map.call(o, function(u) {
            return String.fromCharCode(u);
          }).join("");
        } : function() {
          throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js.");
        };
      }
      var r = n(e.atob);
      e.atob = r, t && t.exports && (t.exports = r);
    })(window);
  }(SA)), ei;
}
const OA = {}, RA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OA
}, Symbol.toStringTag, { value: "Module" })), ti = /* @__PURE__ */ fA(RA);
var ia, Mc;
function NA() {
  if (Mc)
    return ia;
  Mc = 1;
  var t = "%[a-f0-9]{2}", e = new RegExp(t, "gi"), n = new RegExp("(" + t + ")+", "gi");
  function r(a, o) {
    try {
      return decodeURIComponent(a.join(""));
    } catch (d) {
    }
    if (a.length === 1)
      return a;
    o = o || 1;
    var u = a.slice(0, o), l = a.slice(o);
    return Array.prototype.concat.call([], r(u), r(l));
  }
  function s(a) {
    try {
      return decodeURIComponent(a);
    } catch (l) {
      for (var o = a.match(e), u = 1; u < o.length; u++)
        a = r(o, u).join(""), o = a.match(e);
      return a;
    }
  }
  function i(a) {
    for (var o = {
      "%FE%FF": "��",
      "%FF%FE": "��"
    }, u = n.exec(a); u; ) {
      try {
        o[u[0]] = decodeURIComponent(u[0]);
      } catch (h) {
        var l = s(u[0]);
        l !== u[0] && (o[u[0]] = l);
      }
      u = n.exec(a);
    }
    o["%C2"] = "�";
    for (var d = Object.keys(o), f = 0; f < d.length; f++) {
      var p = d[f];
      a = a.replace(new RegExp(p, "g"), o[p]);
    }
    return a;
  }
  return ia = function(a) {
    if (typeof a != "string")
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof a + "`");
    try {
      return a = a.replace(/\+/g, " "), decodeURIComponent(a);
    } catch (o) {
      return i(a);
    }
  }, ia;
}
var aa, Pc;
function wA() {
  if (Pc)
    return aa;
  Pc = 1;
  var t = CA(), e = ti, n = ti, r = NA();
  function s() {
    return Array.prototype.reduce.call(arguments, function(V, x) {
      return e.resolve(V, x);
    });
  }
  function i(V) {
    return n.sep === "\\" ? V.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : V;
  }
  function a(V) {
    return r(V.replace(/\+/g, "%2B"));
  }
  function o(V, x, J) {
    setImmediate(function() {
      V(x, J);
    });
  }
  function u(V, x) {
    try {
      return JSON.parse(V.replace(/^\)\]\}'/, ""));
    } catch (J) {
      throw J.sourceMapData = x, J;
    }
  }
  function l(V, x, J) {
    var X = a(x);
    try {
      return String(V(X));
    } catch (P) {
      throw P.sourceMapData = J, P;
    }
  }
  var d = /[#@] sourceMappingURL=([^\s'"]*)/, f = RegExp(
    `(?:/\\*(?:\\s*\r?
(?://)?)?(?:` + d.source + ")\\s*\\*/|//(?:" + d.source + "))\\s*"
  );
  function p(V) {
    var x = V.match(f);
    return x ? x[1] || x[2] || "" : null;
  }
  function h(V, x, J, X) {
    var P;
    try {
      P = T(V, x);
    } catch (ne) {
      return o(X, ne);
    }
    if (!P || P.map)
      return o(X, null, P);
    var re = a(P.url);
    J(re, function(ne, ue) {
      if (ne)
        return ne.sourceMapData = P, X(ne);
      P.map = String(ue);
      try {
        P.map = u(P.map, P);
      } catch (k) {
        return X(k);
      }
      X(null, P);
    });
  }
  function m(V, x, J) {
    var X = T(V, x);
    return !X || X.map || (X.map = l(J, X.url, X), X.map = u(X.map, X)), X;
  }
  var _ = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/, b = /^(?:application|text)\/json$/, C = "utf-8";
  function O(V) {
    for (var x = t(V), J = x.length, X = new Uint8Array(J), P = 0; P < J; P++)
      X[P] = x.charCodeAt(P);
    return X;
  }
  function A(V) {
    if (typeof TextDecoder == "undefined" || typeof Uint8Array == "undefined")
      return t(V);
    var x = O(V), J = new TextDecoder(C, { fatal: !0 });
    return J.decode(x);
  }
  function T(V, x) {
    x = i(x);
    var J = p(V);
    if (!J)
      return null;
    var X = J.match(_);
    if (X) {
      var P = X[1] || "text/plain", re = X[2] || "", ne = X[3] || "", ue = {
        sourceMappingURL: J,
        url: null,
        sourcesRelativeTo: x,
        map: ne
      };
      if (!b.test(P)) {
        var k = new Error("Unuseful data uri mime type: " + P);
        throw k.sourceMapData = ue, k;
      }
      try {
        ue.map = u(
          re === ";base64" ? A(ne) : decodeURIComponent(ne),
          ue
        );
      } catch (Z) {
        throw Z.sourceMapData = ue, Z;
      }
      return ue;
    }
    var F = s(x, J);
    return {
      sourceMappingURL: J,
      url: F,
      sourcesRelativeTo: F,
      map: null
    };
  }
  function v(V, x, J, X, P) {
    typeof X == "function" && (P = X, X = {});
    var re = V.sources ? V.sources.length : 0, ne = {
      sourcesResolved: [],
      sourcesContent: []
    };
    if (re === 0) {
      o(P, null, ne);
      return;
    }
    var ue = function() {
      re--, re === 0 && P(null, ne);
    };
    B(V, x, X, function(k, F, Z) {
      if (ne.sourcesResolved[Z] = k, typeof F == "string")
        ne.sourcesContent[Z] = F, o(ue, null);
      else {
        var Ee = a(k);
        J(Ee, function(et, Sn) {
          ne.sourcesContent[Z] = et || String(Sn), ue();
        });
      }
    });
  }
  function S(V, x, J, X) {
    var P = {
      sourcesResolved: [],
      sourcesContent: []
    };
    return !V.sources || V.sources.length === 0 || B(V, x, X, function(re, ne, ue) {
      if (P.sourcesResolved[ue] = re, J !== null)
        if (typeof ne == "string")
          P.sourcesContent[ue] = ne;
        else {
          var k = a(re);
          try {
            P.sourcesContent[ue] = String(J(k));
          } catch (F) {
            P.sourcesContent[ue] = F;
          }
        }
    }), P;
  }
  var R = /\/?$/;
  function B(V, x, J, X) {
    J = J || {}, x = i(x);
    for (var P, re, ne, ue = 0, k = V.sources.length; ue < k; ue++)
      ne = null, typeof J.sourceRoot == "string" ? ne = J.sourceRoot : typeof V.sourceRoot == "string" && J.sourceRoot !== !1 && (ne = V.sourceRoot), ne === null || ne === "" ? P = s(x, V.sources[ue]) : P = s(x, ne.replace(R, "/"), V.sources[ue]), re = (V.sourcesContent || [])[ue], X(P, re, ue);
  }
  function H(V, x, J, X, P) {
    if (typeof X == "function" && (P = X, X = {}), V === null) {
      var re = x, ne = {
        sourceMappingURL: null,
        url: re,
        sourcesRelativeTo: re,
        map: null
      }, ue = a(re);
      J(ue, function(F, Z) {
        if (F)
          return F.sourceMapData = ne, P(F);
        ne.map = String(Z);
        try {
          ne.map = u(ne.map, ne);
        } catch (Ee) {
          return P(Ee);
        }
        k(ne);
      });
    } else
      h(V, x, J, function(F, Z) {
        if (F)
          return P(F);
        if (!Z)
          return P(null, null);
        k(Z);
      });
    function k(F) {
      v(F.map, F.sourcesRelativeTo, J, X, function(Z, Ee) {
        if (Z)
          return P(Z);
        F.sourcesResolved = Ee.sourcesResolved, F.sourcesContent = Ee.sourcesContent, P(null, F);
      });
    }
  }
  function q(V, x, J, X) {
    var P;
    if (V === null) {
      var re = x;
      P = {
        sourceMappingURL: null,
        url: re,
        sourcesRelativeTo: re,
        map: null
      }, P.map = l(J, re, P), P.map = u(P.map, P);
    } else if (P = m(V, x, J), !P)
      return null;
    var ne = S(P.map, P.sourcesRelativeTo, J, X);
    return P.sourcesResolved = ne.sourcesResolved, P.sourcesContent = ne.sourcesContent, P;
  }
  return aa = {
    resolveSourceMap: h,
    resolveSourceMapSync: m,
    resolveSources: v,
    resolveSourcesSync: S,
    resolve: H,
    resolveSync: q,
    parseMapToJSON: u
  }, aa;
}
var kc;
function LA() {
  return kc || (kc = 1, function(t, e) {
    var n = Lc().SourceMapGenerator, r = Lc().SourceMapConsumer, s = wA(), i = ti, a = ti;
    t.exports = u;
    const o = function(l) {
      return a.sep === "\\" ? l.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : l;
    };
    function u(l) {
      l._comment = l.comment, l.map = new n(), l.position = { line: 1, column: 1 }, l.files = {};
      for (var d in e)
        l[d] = e[d];
    }
    e.updatePosition = function(l) {
      var d = l.match(/\n/g);
      d && (this.position.line += d.length);
      var f = l.lastIndexOf(`
`);
      this.position.column = ~f ? l.length - f : this.position.column + l.length;
    }, e.emit = function(l, d) {
      if (d) {
        var f = o(d.source || "source.css");
        this.map.addMapping({
          source: f,
          generated: {
            line: this.position.line,
            column: Math.max(this.position.column - 1, 0)
          },
          original: {
            line: d.start.line,
            column: d.start.column - 1
          }
        }), this.addFile(f, d);
      }
      return this.updatePosition(l), l;
    }, e.addFile = function(l, d) {
      typeof d.content == "string" && (Object.prototype.hasOwnProperty.call(this.files, l) || (this.files[l] = d.content));
    }, e.applySourceMaps = function() {
      Object.keys(this.files).forEach(function(l) {
        var d = this.files[l];
        if (this.map.setSourceContent(l, d), this.options.inputSourcemaps !== !1) {
          var f = s.resolveSync(
            d,
            l,
            i.readFileSync
          );
          if (f) {
            var p = new r(f.map), h = f.sourcesRelativeTo;
            this.map.applySourceMap(p, l, o(a.dirname(h)));
          }
        }
      }, this);
    }, e.comment = function(l) {
      return /^# sourceMappingURL=/.test(l.comment) ? this.emit("", l.position) : this._comment(l);
    };
  }(gA, Cr)), Cr;
}
var DA = mA, MA = EA, PA = function(t, e) {
  e = e || {};
  var n = e.compress ? new DA(e) : new MA(e);
  if (e.sourcemap) {
    var r = LA();
    r(n);
    var i = n.compile(t);
    n.applySourceMaps();
    var s = e.sourcemap === "generator" ? n.map : n.map.toJSON();
    return { code: i, map: s };
  }
  var i = n.compile(t);
  return i;
};
Js.parse = hA;
Js.stringify = PA;
function An(t, e, n) {
  var i;
  let r = t != null ? t : "";
  return `<style>${(i = Fc(r, n)) != null ? i : Fc(e, n)}</style>`;
}
function Fc(t, e) {
  var n = null;
  try {
    n = Js.parse(t);
  } catch (s) {
    return null;
  }
  return n.stylesheet.rules.forEach((s, i) => {
    s.type == "rule" ? s.selectors = s.selectors.map((a) => "." + e + " " + a) : s.type == "comment" || s.type == "keyframes" || s.rules.forEach((a) => {
      a.selectors = a.selectors.map((o) => "." + e + " " + o);
    });
  }), Js.stringify(n);
}
function Bc(t) {
  let e, n = (
    /*$comp*/
    t[2].title + ""
  ), r;
  return {
    c() {
      e = Y("div"), r = ve(n), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 });
      var i = Q(e);
      r = Ne(i, n), i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "osb-title");
    },
    m(s, i) {
      j(s, e, i), G(e, r);
    },
    p(s, i) {
      i & /*$comp*/
      4 && n !== (n = /*$comp*/
      s[2].title + "") && Qe(r, n);
    },
    d(s) {
      s && w(e);
    }
  };
}
function Uc(t) {
  let e, n = (
    /*$comp*/
    t[2].description + ""
  ), r;
  return {
    c() {
      e = Y("div"), r = ve(n), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 });
      var i = Q(e);
      r = Ne(i, n), i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "osb-desc");
    },
    m(s, i) {
      j(s, e, i), G(e, r);
    },
    p(s, i) {
      i & /*$comp*/
      4 && n !== (n = /*$comp*/
      s[2].description + "") && Qe(r, n);
    },
    d(s) {
      s && w(e);
    }
  };
}
function kA(t) {
  let e, n, r = (
    /*$comp*/
    t[2].title && /*viewOpt*/
    t[1].showTitle && Bc(t)
  ), s = (
    /*$comp*/
    t[2].description && /*viewOpt*/
    t[1].showDesc && Uc(t)
  );
  return {
    c() {
      r && r.c(), e = le(), s && s.c(), n = ce();
    },
    l(i) {
      r && r.l(i), e = de(i), s && s.l(i), n = ce();
    },
    m(i, a) {
      r && r.m(i, a), j(i, e, a), s && s.m(i, a), j(i, n, a);
    },
    p(i, [a]) {
      /*$comp*/
      i[2].title && /*viewOpt*/
      i[1].showTitle ? r ? r.p(i, a) : (r = Bc(i), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), /*$comp*/
      i[2].description && /*viewOpt*/
      i[1].showDesc ? s ? s.p(i, a) : (s = Uc(i), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    i: $,
    o: $,
    d(i) {
      r && r.d(i), i && w(e), s && s.d(i), i && w(n);
    }
  };
}
function FA(t, e, n) {
  let r, s = $, i = () => (s(), s = fe(a, (u) => n(2, r = u)), a);
  t.$$.on_destroy.push(() => s());
  let { comp: a } = e;
  i();
  let { viewOpt: o } = e;
  return t.$$set = (u) => {
    "comp" in u && i(n(0, a = u.comp)), "viewOpt" in u && n(1, o = u.viewOpt);
  }, [a, o, r];
}
class yn extends De {
  constructor(e) {
    super(), Le(this, e, FA, kA, Oe, { comp: 0, viewOpt: 1 });
  }
}
function BA(t) {
  let e, n, r, s, i, a, o, u, l, d, f, p, h = (
    /*$comp*/
    t[3].properties.name + ""
  ), m, _, b, C, O;
  return s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  }), {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), a = Y("div"), o = Y("input"), f = le(), p = Y("label"), m = ve(h), this.h();
    },
    l(A) {
      e = _n(A, !1), n = de(A), r = W(A, "DIV", { class: !0 });
      var T = Q(r);
      we(s.$$.fragment, T), i = de(T), a = W(T, "DIV", { class: !0 });
      var v = Q(a);
      o = W(v, "INPUT", {
        id: !0,
        name: !0,
        type: !0,
        class: !0
      }), f = de(v), p = W(v, "LABEL", { for: !0, class: !0 });
      var S = Q(p);
      m = Ne(S, h), S.forEach(w), v.forEach(w), T.forEach(w), this.h();
    },
    h() {
      var A;
      e.a = n, D(o, "id", u = /*$comp*/
      t[3].id), D(o, "name", l = /*$comp*/
      t[3].id), D(o, "type", "checkbox"), o.checked = /*value*/
      t[4], o.disabled = d = !/*$state*/
      ((A = t[6].ui[
        /*id*/
        t[7]
      ]) != null && A.enabled), D(o, "class", "osb-checkbox"), D(p, "for", _ = /*$comp*/
      t[3].id), D(p, "class", "osb-label"), D(a, "class", "osb-form-control"), D(
        r,
        "class",
        /*baseClassName*/
        t[8] + " osb-container"
      );
    },
    m(A, T) {
      e.m(
        /*compStyle*/
        t[5],
        A,
        T
      ), j(A, n, T), j(A, r, T), Ae(s, r, null), G(r, i), G(r, a), G(a, o), G(a, f), G(a, p), G(p, m), b = !0, C || (O = Ie(
        o,
        "change",
        /*onChecked*/
        t[9]
      ), C = !0);
    },
    p(A, [T]) {
      var S;
      (!b || T & /*compStyle*/
      32) && e.p(
        /*compStyle*/
        A[5]
      );
      const v = {};
      T & /*comp*/
      1 && (v.comp = /*comp*/
      A[0]), T & /*viewOpt*/
      4 && (v.viewOpt = /*viewOpt*/
      A[2]), s.$set(v), (!b || T & /*$comp*/
      8 && u !== (u = /*$comp*/
      A[3].id)) && D(o, "id", u), (!b || T & /*$comp*/
      8 && l !== (l = /*$comp*/
      A[3].id)) && D(o, "name", l), (!b || T & /*value*/
      16) && (o.checked = /*value*/
      A[4]), (!b || T & /*$state*/
      64 && d !== (d = !/*$state*/
      ((S = A[6].ui[
        /*id*/
        A[7]
      ]) != null && S.enabled))) && (o.disabled = d), (!b || T & /*$comp*/
      8) && h !== (h = /*$comp*/
      A[3].properties.name + "") && Qe(m, h), (!b || T & /*$comp*/
      8 && _ !== (_ = /*$comp*/
      A[3].id)) && D(p, "for", _);
    },
    i(A) {
      b || (K(s.$$.fragment, A), b = !0);
    },
    o(A) {
      z(s.$$.fragment, A), b = !1;
    },
    d(A) {
      A && e.d(), A && w(n), A && w(r), ye(s), C = !1, O();
    }
  };
}
function UA(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(h, (T) => n(6, i = T)), h), u, l = $, d = () => (l(), l = fe(p, (T) => n(3, u = T)), p);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  const f = En("stateReducer");
  if (f == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: p } = e;
  d();
  let { state: h } = e;
  o();
  let { editMode: m } = e, { viewOpt: _ } = e;
  const b = u.id, C = `osb-${b}`, O = h.subscribe((T) => {
    T.ui[b] && n(4, r = T.ui[b].value);
  });
  Ot(() => {
    i.ui[b] === void 0 ? st(
      h,
      i.ui[b] = {
        enabled: u.enabled,
        show: u.show,
        value: r
      },
      i
    ) : n(4, r = i.ui[b].value);
  }), lt(() => {
    O();
  });
  function A(T) {
    let v = {
      id: b,
      previousValue: i.ui[b].value,
      currentValue: T.currentTarget.checked
    };
    h.update((S) => (Object.assign(S.ui[b], { value: T.currentTarget.checked }), S)), m || f.resolveUIState(v);
  }
  return t.$$set = (T) => {
    "comp" in T && d(n(0, p = T.comp)), "state" in T && o(n(1, h = T.state)), "editMode" in T && n(10, m = T.editMode), "viewOpt" in T && n(2, _ = T.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    8 && n(4, r = u.properties.value), t.$$.dirty & /*$comp*/
    8 && n(5, s = An(u.css, Lf, C));
  }, [
    p,
    h,
    _,
    u,
    r,
    s,
    i,
    b,
    C,
    A,
    m
  ];
}
class xA extends De {
  constructor(e) {
    super(), Le(this, e, UA, BA, Oe, {
      comp: 0,
      state: 1,
      editMode: 10,
      viewOpt: 2
    });
  }
}
function xc(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r[18] = n, r;
}
function Hc(t) {
  let e, n = (
    /*$comp*/
    t[4].properties.placeholder + ""
  ), r, s;
  return {
    c() {
      e = Y("option"), r = ve(n), s = le(), this.h();
    },
    l(i) {
      e = W(i, "OPTION", {});
      var a = Q(e);
      r = Ne(a, n), s = de(a), a.forEach(w), this.h();
    },
    h() {
      e.disabled = !0, e.selected = !0, e.__value = "", e.value = e.__value;
    },
    m(i, a) {
      j(i, e, a), G(e, r), G(e, s);
    },
    p(i, a) {
      a & /*$comp*/
      16 && n !== (n = /*$comp*/
      i[4].properties.placeholder + "") && Qe(r, n);
    },
    d(i) {
      i && w(e);
    }
  };
}
function Vc(t) {
  let e, n = (
    /*option*/
    t[16].displayName + ""
  ), r, s, i, a;
  return {
    c() {
      e = Y("option"), r = ve(n), s = le(), this.h();
    },
    l(o) {
      e = W(o, "OPTION", {});
      var u = Q(e);
      r = Ne(u, n), s = de(u), u.forEach(w), this.h();
    },
    h() {
      e.__value = i = /*option*/
      t[16].value, e.value = e.__value, e.disabled = a = !/*option*/
      t[16].enabled;
    },
    m(o, u) {
      j(o, e, u), G(e, r), G(e, s);
    },
    p(o, u) {
      u & /*$comp*/
      16 && n !== (n = /*option*/
      o[16].displayName + "") && Qe(r, n), u & /*$comp*/
      16 && i !== (i = /*option*/
      o[16].value) && (e.__value = i, e.value = e.__value), u & /*$comp*/
      16 && a !== (a = !/*option*/
      o[16].enabled) && (e.disabled = a);
    },
    d(o) {
      o && w(e);
    }
  };
}
function jc(t) {
  let e, n = (
    /*option*/
    t[16].show && Vc(t)
  );
  return {
    c() {
      n && n.c(), e = ce();
    },
    l(r) {
      n && n.l(r), e = ce();
    },
    m(r, s) {
      n && n.m(r, s), j(r, e, s);
    },
    p(r, s) {
      /*option*/
      r[16].show ? n ? n.p(r, s) : (n = Vc(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && w(e);
    }
  };
}
function HA(t) {
  let e, n, r, s, i, a, o, u, l, d, f, p;
  i = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  });
  let h = (
    /*$comp*/
    t[4].properties.placeholder !== "" && Hc(t)
  ), m = (
    /*$comp*/
    t[4].properties.options
  ), _ = [];
  for (let b = 0; b < m.length; b += 1)
    _[b] = jc(xc(t, m, b));
  return {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), s = Y("div"), Ce(i.$$.fragment), a = le(), o = Y("select"), h && h.c(), u = ce();
      for (let b = 0; b < _.length; b += 1)
        _[b].c();
      this.h();
    },
    l(b) {
      e = _n(b, !1), n = de(b), r = W(b, "DIV", { class: !0 });
      var C = Q(r);
      s = W(C, "DIV", { class: !0 });
      var O = Q(s);
      we(i.$$.fragment, O), a = de(O), o = W(O, "SELECT", { class: !0 });
      var A = Q(o);
      h && h.l(A), u = ce();
      for (let T = 0; T < _.length; T += 1)
        _[T].l(A);
      A.forEach(w), O.forEach(w), C.forEach(w), this.h();
    },
    h() {
      var b;
      e.a = n, D(o, "class", "osb-select"), o.disabled = l = !/*$state*/
      ((b = t[3].ui[
        /*id*/
        t[7]
      ]) != null && b.enabled), /*valueOfSelectElement*/
      t[5] === void 0 && Ps(() => (
        /*select_change_handler*/
        t[11].call(o)
      )), D(s, "class", "osb-container"), D(
        r,
        "class",
        /*baseClassName*/
        t[8]
      );
    },
    m(b, C) {
      e.m(
        /*compStyle*/
        t[6],
        b,
        C
      ), j(b, n, C), j(b, r, C), G(r, s), Ae(i, s, null), G(s, a), G(s, o), h && h.m(o, null), G(o, u);
      for (let O = 0; O < _.length; O += 1)
        _[O].m(o, null);
      Fn(
        o,
        /*valueOfSelectElement*/
        t[5]
      ), d = !0, f || (p = [
        Ie(
          o,
          "change",
          /*select_change_handler*/
          t[11]
        ),
        Ie(
          o,
          "change",
          /*handleOnChange*/
          t[9]
        )
      ], f = !0);
    },
    p(b, [C]) {
      var A;
      (!d || C & /*compStyle*/
      64) && e.p(
        /*compStyle*/
        b[6]
      );
      const O = {};
      if (C & /*comp*/
      1 && (O.comp = /*comp*/
      b[0]), C & /*viewOpt*/
      4 && (O.viewOpt = /*viewOpt*/
      b[2]), i.$set(O), /*$comp*/
      b[4].properties.placeholder !== "" ? h ? h.p(b, C) : (h = Hc(b), h.c(), h.m(o, u)) : h && (h.d(1), h = null), C & /*$comp*/
      16) {
        m = /*$comp*/
        b[4].properties.options;
        let T;
        for (T = 0; T < m.length; T += 1) {
          const v = xc(b, m, T);
          _[T] ? _[T].p(v, C) : (_[T] = jc(v), _[T].c(), _[T].m(o, null));
        }
        for (; T < _.length; T += 1)
          _[T].d(1);
        _.length = m.length;
      }
      (!d || C & /*$state*/
      8 && l !== (l = !/*$state*/
      ((A = b[3].ui[
        /*id*/
        b[7]
      ]) != null && A.enabled))) && (o.disabled = l), C & /*valueOfSelectElement, $comp*/
      48 && Fn(
        o,
        /*valueOfSelectElement*/
        b[5]
      );
    },
    i(b) {
      d || (K(i.$$.fragment, b), d = !0);
    },
    o(b) {
      z(i.$$.fragment, b), d = !1;
    },
    d(b) {
      b && e.d(), b && w(n), b && w(r), ye(i), h && h.d(), Kt(_, b), f = !1, ut(p);
    }
  };
}
function VA(t, e, n) {
  let r, s, i = $, a = () => (i(), i = fe(p, (S) => n(3, s = S)), p), o, u = $, l = () => (u(), u = fe(f, (S) => n(4, o = S)), f);
  t.$$.on_destroy.push(() => i()), t.$$.on_destroy.push(() => u());
  const d = En("stateReducer");
  if (d == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: f } = e;
  l();
  let { state: p } = e;
  a();
  let { editMode: h } = e, { viewOpt: m } = e;
  const _ = o.id, b = `osb-${_}`;
  let C = o.properties.value;
  function O(S) {
    if (S === "")
      return;
    if (o.properties.options.find((B) => B.value === S))
      C != S && n(5, C = S);
    else if (typeof window != "undefined")
      window.alert(`no such value in options: received value is "${S}" in ${o.id}`);
    else
      throw Error(`no such value in options: received value is "${S}" in ${o.id}`);
  }
  const A = p.subscribe((S) => {
    S.ui[_] && o.properties.options.findIndex((R) => R.value === S.ui[_].value);
  });
  Ot(() => {
    s.ui[_] === void 0 ? st(
      p,
      s.ui[_] = {
        enabled: o.enabled,
        show: o.show,
        value: o.properties.value
      },
      s
    ) : (st(f, o.properties.value = s.ui[_].value, o), n(5, C = o.properties.value));
  }), lt(() => {
    A();
  });
  function T(S) {
    let R = {
      id: _,
      previousValue: s.ui[_].value,
      currentValue: S.currentTarget.value
    };
    p.update((B) => (Object.assign(B.ui[_], { value: S.currentTarget.value }), B)), h || d.resolveUIState(R);
  }
  function v() {
    C = c0(this), n(5, C);
  }
  return t.$$set = (S) => {
    "comp" in S && l(n(0, f = S.comp)), "state" in S && a(n(1, p = S.state)), "editMode" in S && n(10, h = S.editMode), "viewOpt" in S && n(2, m = S.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    16 && o.properties.selectedIndex, t.$$.dirty & /*$comp*/
    16 && n(6, r = An(o.css, Df, b)), t.$$.dirty & /*$state*/
    8 && s.ui.hasOwnProperty(_) && O(s.ui[_].value);
  }, [
    f,
    p,
    m,
    s,
    o,
    C,
    r,
    _,
    b,
    T,
    h,
    v
  ];
}
class jA extends De {
  constructor(e) {
    super(), Le(this, e, VA, HA, Oe, {
      comp: 0,
      state: 1,
      editMode: 10,
      viewOpt: 2
    });
  }
}
function qc(t, e, n) {
  const r = t.slice();
  return r[19] = e[n], r[21] = n, r;
}
function $c(t) {
  let e, n, r, s, i, a, o, u, l, d = (
    /*property*/
    t[3].placeholder !== "" && Yc(t)
  ), f = (
    /*property*/
    t[3].options
  ), p = [];
  for (let _ = 0; _ < f.length; _ += 1)
    p[_] = Gc(qc(t, f, _));
  let h = (
    /*property*/
    t[3].allowManual && Wc()
  ), m = (
    /*showManualInput*/
    t[6] && /*property*/
    t[3].allowManual && Qc(t)
  );
  return {
    c() {
      e = Y("div"), n = Y("select"), d && d.c(), r = ce();
      for (let _ = 0; _ < p.length; _ += 1)
        p[_].c();
      s = ce(), h && h.c(), o = le(), m && m.c(), this.h();
    },
    l(_) {
      e = W(_, "DIV", { class: !0 });
      var b = Q(e);
      n = W(b, "SELECT", { class: !0 });
      var C = Q(n);
      d && d.l(C), r = ce();
      for (let O = 0; O < p.length; O += 1)
        p[O].l(C);
      s = ce(), h && h.l(C), C.forEach(w), o = de(b), m && m.l(b), b.forEach(w), this.h();
    },
    h() {
      D(n, "class", "osb-select"), n.disabled = a = !/*$comp*/
      t[4].enabled, D(e, "class", "osb-form-control");
    },
    m(_, b) {
      j(_, e, b), G(e, n), d && d.m(n, null), G(n, r);
      for (let C = 0; C < p.length; C += 1)
        p[C].m(n, null);
      G(n, s), h && h.m(n, null), Fn(
        n,
        /*property*/
        t[3].value
      ), G(e, o), m && m.m(e, null), u || (l = Ie(
        n,
        "change",
        /*handleOnChange*/
        t[12]("value1")
      ), u = !0);
    },
    p(_, b) {
      if (/*property*/
      _[3].placeholder !== "" ? d ? d.p(_, b) : (d = Yc(_), d.c(), d.m(n, r)) : d && (d.d(1), d = null), b & /*property, value*/
      136) {
        f = /*property*/
        _[3].options;
        let C;
        for (C = 0; C < f.length; C += 1) {
          const O = qc(_, f, C);
          p[C] ? p[C].p(O, b) : (p[C] = Gc(O), p[C].c(), p[C].m(n, s));
        }
        for (; C < p.length; C += 1)
          p[C].d(1);
        p.length = f.length;
      }
      /*property*/
      _[3].allowManual ? h || (h = Wc(), h.c(), h.m(n, null)) : h && (h.d(1), h = null), b & /*property*/
      8 && i !== (i = /*property*/
      _[3].value) && Fn(
        n,
        /*property*/
        _[3].value
      ), b & /*$comp*/
      16 && a !== (a = !/*$comp*/
      _[4].enabled) && (n.disabled = a), /*showManualInput*/
      _[6] && /*property*/
      _[3].allowManual ? m ? m.p(_, b) : (m = Qc(_), m.c(), m.m(e, null)) : m && (m.d(1), m = null);
    },
    d(_) {
      _ && w(e), d && d.d(), Kt(p, _), h && h.d(), m && m.d(), u = !1, l();
    }
  };
}
function Yc(t) {
  let e, n = (
    /*property*/
    t[3].placeholder + ""
  ), r, s, i;
  return {
    c() {
      e = Y("option"), r = ve(n), s = le(), this.h();
    },
    l(a) {
      e = W(a, "OPTION", {});
      var o = Q(e);
      r = Ne(o, n), s = de(o), o.forEach(w), this.h();
    },
    h() {
      e.disabled = !0, e.selected = !0, e.__value = i = `
                        ` + /*property*/
      t[3].placeholder + `
                    `, e.value = e.__value;
    },
    m(a, o) {
      j(a, e, o), G(e, r), G(e, s);
    },
    p(a, o) {
      o & /*property*/
      8 && n !== (n = /*property*/
      a[3].placeholder + "") && Qe(r, n), o & /*property*/
      8 && i !== (i = `
                        ` + /*property*/
      a[3].placeholder + `
                    `) && (e.__value = i, e.value = e.__value);
    },
    d(a) {
      a && w(e);
    }
  };
}
function Gc(t) {
  let e, n = (
    /*option*/
    t[19] + /*property*/
    t[3].unit + ""
  ), r, s, i, a;
  return {
    c() {
      e = Y("option"), r = ve(n), s = le(), this.h();
    },
    l(o) {
      e = W(o, "OPTION", {});
      var u = Q(e);
      r = Ne(u, n), s = de(u), u.forEach(w), this.h();
    },
    h() {
      e.__value = i = /*option*/
      t[19], e.value = e.__value, e.selected = a = /*option*/
      t[19] === /*value*/
      t[7];
    },
    m(o, u) {
      j(o, e, u), G(e, r), G(e, s);
    },
    p(o, u) {
      u & /*property*/
      8 && n !== (n = /*option*/
      o[19] + /*property*/
      o[3].unit + "") && Qe(r, n), u & /*property*/
      8 && i !== (i = /*option*/
      o[19]) && (e.__value = i, e.value = e.__value), u & /*property, value*/
      136 && a !== (a = /*option*/
      o[19] === /*value*/
      o[7]) && (e.selected = a);
    },
    d(o) {
      o && w(e);
    }
  };
}
function Wc(t) {
  let e, n;
  return {
    c() {
      e = Y("option"), n = ve("직접 입력"), this.h();
    },
    l(r) {
      e = W(r, "OPTION", {});
      var s = Q(e);
      n = Ne(s, "직접 입력"), s.forEach(w), this.h();
    },
    h() {
      e.__value = "manual", e.value = e.__value;
    },
    m(r, s) {
      j(r, e, s), G(e, n);
    },
    d(r) {
      r && w(e);
    }
  };
}
function Qc(t) {
  let e, n, r, s, i, a = (
    /*property*/
    t[3].unit + ""
  ), o, u, l;
  return {
    c() {
      e = Y("div"), n = Y("input"), s = le(), i = Y("span"), o = ve(a), this.h();
    },
    l(d) {
      e = W(d, "DIV", { class: !0 });
      var f = Q(e);
      n = W(f, "INPUT", { type: !0, min: !0, class: !0 }), s = de(f), i = W(f, "SPAN", {});
      var p = Q(i);
      o = Ne(p, a), p.forEach(w), f.forEach(w), this.h();
    },
    h() {
      var d;
      D(n, "type", "number"), D(n, "min", "1"), D(n, "class", "osb-input"), n.disabled = r = !/*$state*/
      ((d = t[9].ui[
        /*id*/
        t[10]
      ]) != null && d.enabled), D(e, "class", "osb-input-group");
    },
    m(d, f) {
      j(d, e, f), G(e, n), Mu(
        n,
        /*manualQuantity*/
        t[5]
      ), G(e, s), G(e, i), G(i, o), u || (l = [
        Ie(
          n,
          "input",
          /*input_input_handler*/
          t[16]
        ),
        Ie(
          n,
          "change",
          /*handleInput*/
          t[13]
        )
      ], u = !0);
    },
    p(d, f) {
      var p;
      f & /*$state*/
      512 && r !== (r = !/*$state*/
      ((p = d[9].ui[
        /*id*/
        d[10]
      ]) != null && p.enabled)) && (n.disabled = r), f & /*manualQuantity*/
      32 && Bl(n.value) !== /*manualQuantity*/
      d[5] && Mu(
        n,
        /*manualQuantity*/
        d[5]
      ), f & /*property*/
      8 && a !== (a = /*property*/
      d[3].unit + "") && Qe(o, a);
    },
    d(d) {
      d && w(e), u = !1, ut(l);
    }
  };
}
function qA(t) {
  let e, n, r, s, i, a;
  s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  });
  let o = (
    /*property*/
    t[3] && $c(t)
  );
  return {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), o && o.c(), this.h();
    },
    l(u) {
      e = _n(u, !1), n = de(u), r = W(u, "DIV", { class: !0 });
      var l = Q(r);
      we(s.$$.fragment, l), i = de(l), o && o.l(l), l.forEach(w), this.h();
    },
    h() {
      e.a = n, D(
        r,
        "class",
        /*baseClassName*/
        t[11] + " osb-container"
      );
    },
    m(u, l) {
      e.m(
        /*compStyle*/
        t[8],
        u,
        l
      ), j(u, n, l), j(u, r, l), Ae(s, r, null), G(r, i), o && o.m(r, null), a = !0;
    },
    p(u, [l]) {
      (!a || l & /*compStyle*/
      256) && e.p(
        /*compStyle*/
        u[8]
      );
      const d = {};
      l & /*comp*/
      1 && (d.comp = /*comp*/
      u[0]), l & /*viewOpt*/
      4 && (d.viewOpt = /*viewOpt*/
      u[2]), s.$set(d), /*property*/
      u[3] ? o ? o.p(u, l) : (o = $c(u), o.c(), o.m(r, null)) : o && (o.d(1), o = null);
    },
    i(u) {
      a || (K(s.$$.fragment, u), a = !0);
    },
    o(u) {
      z(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && e.d(), u && w(n), u && w(r), ye(s), o && o.d();
    }
  };
}
function $A(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(h, (q) => n(9, i = q)), h), u, l = $, d = () => (l(), l = fe(p, (q) => n(4, u = q)), p);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  const f = En("stateReducer");
  if (f == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: p } = e;
  d();
  let { state: h } = e;
  o();
  let { editMode: m } = e, { viewOpt: _ } = e, b = 1, C = !1, O = u.properties.selectedQuantitySetId;
  const A = u.id, T = `osb-${A}`;
  let v;
  const S = h.subscribe((q) => {
    q.ui[A] && (n(7, r = +q.ui[A].value), n(15, O = q.ui[A].selectedQuantitySetId));
  });
  Ot(() => {
    i.ui[A] === void 0 ? st(
      h,
      i.ui[A] = {
        enabled: u.enabled,
        show: u.show,
        value: r,
        selectedQuantitySetId: u.properties.selectedQuantitySetId
      },
      i
    ) : (n(7, r = i.ui[A].value), n(15, O = i.ui[A].selectedQuantitySetId));
  }), lt(() => {
    S();
  });
  const R = (q) => (V) => {
    let x, J = {
      id: A,
      previousValue: i.ui[A].value,
      currentValue: null
    };
    h.update((X) => {
      let P = V.currentTarget.value;
      return P !== "manual" ? (x = +P, Object.assign(X.ui[A], { value: x }), n(6, C = !1)) : (x = b, Object.assign(X.ui[A], { value: x }), n(6, C = !0)), X;
    }), J.currentValue = x, m || f.resolveUIState(J);
  }, B = (q) => {
    h.update((V) => (Object.assign(V.ui[A], { value: +b }), V));
  };
  function H() {
    b = Bl(this.value), n(5, b);
  }
  return t.$$set = (q) => {
    "comp" in q && d(n(0, p = q.comp)), "state" in q && o(n(1, h = q.state)), "editMode" in q && n(14, m = q.editMode), "viewOpt" in q && n(2, _ = q.viewOpt);
  }, t.$$.update = () => {
    var q;
    if (t.$$.dirty & /*$comp, selectedQuantitySetId, property*/
    32792) {
      n(3, v = (q = u.properties.array.find((x) => x.id === O)) != null ? q : u.properties.array[0]), st(p, u.properties.selectedQuantitySetId = v.id, u);
      let V = u.properties.array.find((x) => x.id === u.properties.selectedQuantitySetId);
      st(p, u.properties.value = V.value, u);
    }
    t.$$.dirty & /*$comp*/
    16 && n(7, r = u.properties.value), t.$$.dirty & /*$comp*/
    16 && n(8, s = An(u.css, Pf, T));
  }, [
    p,
    h,
    _,
    v,
    u,
    b,
    C,
    r,
    s,
    i,
    A,
    T,
    R,
    B,
    m,
    O,
    H
  ];
}
class YA extends De {
  constructor(e) {
    super(), Le(this, e, $A, qA, Oe, {
      comp: 0,
      state: 1,
      editMode: 14,
      viewOpt: 2
    });
  }
}
function GA(t) {
  let e, n, r, s, i, a, o, u;
  return s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  }), {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), a = Y("div"), o = ve(
        /*value*/
        t[3]
      ), this.h();
    },
    l(l) {
      e = _n(l, !1), n = de(l), r = W(l, "DIV", { class: !0 });
      var d = Q(r);
      we(s.$$.fragment, d), i = de(d), a = W(d, "DIV", { class: !0 });
      var f = Q(a);
      o = Ne(
        f,
        /*value*/
        t[3]
      ), f.forEach(w), d.forEach(w), this.h();
    },
    h() {
      e.a = n, D(a, "class", "osb-label"), D(
        r,
        "class",
        /*baseClassName*/
        t[5] + " osb-container"
      );
    },
    m(l, d) {
      e.m(
        /*compStyle*/
        t[4],
        l,
        d
      ), j(l, n, d), j(l, r, d), Ae(s, r, null), G(r, i), G(r, a), G(a, o), u = !0;
    },
    p(l, [d]) {
      (!u || d & /*compStyle*/
      16) && e.p(
        /*compStyle*/
        l[4]
      );
      const f = {};
      d & /*comp*/
      1 && (f.comp = /*comp*/
      l[0]), d & /*viewOpt*/
      4 && (f.viewOpt = /*viewOpt*/
      l[2]), s.$set(f), (!u || d & /*value*/
      8) && Qe(
        o,
        /*value*/
        l[3]
      );
    },
    i(l) {
      u || (K(s.$$.fragment, l), u = !0);
    },
    o(l) {
      z(s.$$.fragment, l), u = !1;
    },
    d(l) {
      l && e.d(), l && w(n), l && w(r), ye(s);
    }
  };
}
function WA(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(p, (O) => n(8, i = O)), p), u, l = $, d = () => (l(), l = fe(f, (O) => n(7, u = O)), f);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  let { comp: f } = e;
  d();
  let { state: p } = e;
  o();
  const h = !1;
  let { viewOpt: m } = e;
  const _ = u.id, b = `osb-${_}`, C = p.subscribe((O) => {
    O.ui[_] && n(3, r = O.ui[_].value);
  });
  return Ot(() => {
    i.ui[_] === void 0 ? st(
      p,
      i.ui[_] = {
        enabled: u.enabled,
        show: u.show,
        value: r
      },
      i
    ) : n(3, r = i.ui[_].value);
  }), lt(() => {
    C();
  }), t.$$set = (O) => {
    "comp" in O && d(n(0, f = O.comp)), "state" in O && o(n(1, p = O.state)), "viewOpt" in O && n(2, m = O.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    128 && n(3, r = u.properties.value), t.$$.dirty & /*$comp*/
    128 && n(4, s = An(u.css, kf, b));
  }, [f, p, m, r, s, b, h, u];
}
class QA extends De {
  constructor(e) {
    super(), Le(this, e, WA, GA, Oe, {
      comp: 0,
      state: 1,
      editMode: 6,
      viewOpt: 2
    });
  }
  get editMode() {
    return this.$$.ctx[6];
  }
}
function KA(t) {
  let e, n, r, s, i, a, o, u, l, d, f, p, h, m, _, b, C, O;
  return s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  }), {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), a = Y("div"), o = Y("input"), this.h();
    },
    l(A) {
      e = _n(A, !1), n = de(A), r = W(A, "DIV", { class: !0 });
      var T = Q(r);
      we(s.$$.fragment, T), i = de(T), a = W(T, "DIV", { class: !0 });
      var v = Q(a);
      o = W(v, "INPUT", {
        id: !0,
        name: !0,
        type: !0,
        maxlength: !0,
        min: !0,
        max: !0,
        placeholder: !0,
        class: !0
      }), v.forEach(w), T.forEach(w), this.h();
    },
    h() {
      var A;
      e.a = n, D(o, "id", u = /*$comp*/
      t[3].id), D(o, "name", l = /*$comp*/
      t[3].id), D(o, "type", d = /*$comp*/
      t[3].properties.type), D(o, "maxlength", f = /*$comp*/
      t[3].properties.maxlength), D(o, "min", p = /*$comp*/
      t[3].properties.min), D(o, "max", h = /*$comp*/
      t[3].properties.max), D(o, "placeholder", m = /*$comp*/
      t[3].properties.placeholder), D(o, "class", "osb-input"), o.value = /*value*/
      t[5], o.disabled = _ = !/*$state*/
      ((A = t[7].ui[
        /*id*/
        t[8]
      ]) != null && A.enabled), D(a, "class", "osb-form-control"), D(
        r,
        "class",
        /*baseClassName*/
        t[9] + " osb-container svelte-9qtmd6"
      ), Je(
        r,
        "error-indicator",
        /*showErrorIndicator*/
        t[4]
      );
    },
    m(A, T) {
      e.m(
        /*compStyle*/
        t[6],
        A,
        T
      ), j(A, n, T), j(A, r, T), Ae(s, r, null), G(r, i), G(r, a), G(a, o), b = !0, C || (O = Ie(
        o,
        "change",
        /*handleOnChange*/
        t[10]
      ), C = !0);
    },
    p(A, [T]) {
      var S;
      (!b || T & /*compStyle*/
      64) && e.p(
        /*compStyle*/
        A[6]
      );
      const v = {};
      T & /*comp*/
      1 && (v.comp = /*comp*/
      A[0]), T & /*viewOpt*/
      4 && (v.viewOpt = /*viewOpt*/
      A[2]), s.$set(v), (!b || T & /*$comp*/
      8 && u !== (u = /*$comp*/
      A[3].id)) && D(o, "id", u), (!b || T & /*$comp*/
      8 && l !== (l = /*$comp*/
      A[3].id)) && D(o, "name", l), (!b || T & /*$comp*/
      8 && d !== (d = /*$comp*/
      A[3].properties.type)) && D(o, "type", d), (!b || T & /*$comp*/
      8 && f !== (f = /*$comp*/
      A[3].properties.maxlength)) && D(o, "maxlength", f), (!b || T & /*$comp*/
      8 && p !== (p = /*$comp*/
      A[3].properties.min)) && D(o, "min", p), (!b || T & /*$comp*/
      8 && h !== (h = /*$comp*/
      A[3].properties.max)) && D(o, "max", h), (!b || T & /*$comp*/
      8 && m !== (m = /*$comp*/
      A[3].properties.placeholder)) && D(o, "placeholder", m), (!b || T & /*value*/
      32 && o.value !== /*value*/
      A[5]) && (o.value = /*value*/
      A[5]), (!b || T & /*$state*/
      128 && _ !== (_ = !/*$state*/
      ((S = A[7].ui[
        /*id*/
        A[8]
      ]) != null && S.enabled))) && (o.disabled = _), (!b || T & /*showErrorIndicator*/
      16) && Je(
        r,
        "error-indicator",
        /*showErrorIndicator*/
        A[4]
      );
    },
    i(A) {
      b || (K(s.$$.fragment, A), b = !0);
    },
    o(A) {
      z(s.$$.fragment, A), b = !1;
    },
    d(A) {
      A && e.d(), A && w(n), A && w(r), ye(s), C = !1, O();
    }
  };
}
function zA(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(h, (S) => n(7, i = S)), h), u, l = $, d = () => (l(), l = fe(p, (S) => n(3, u = S)), p);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  const f = En("stateReducer");
  if (f == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: p } = e;
  d();
  let { state: h } = e;
  o();
  let { editMode: m } = e, { viewOpt: _ } = e;
  const b = u.id, C = `osb-${b}`;
  let O = !1, A = null;
  const T = h.subscribe((S) => {
    S.ui[b] && n(5, r = S.ui[b].value);
  });
  Ot(() => {
    i.ui[b] === void 0 ? st(
      h,
      i.ui[b] = {
        enabled: u.enabled,
        show: u.show,
        value: r
      },
      i
    ) : n(5, r = i.ui[b].value), A = f.output$.subscribe((S) => {
      var R;
      n(4, O = (R = S.validation) == null ? void 0 : R.errors.some((B) => B.targetClass === b));
    });
  }), lt(() => {
    T(), A && A(), A = null;
  });
  function v(S) {
    let R = {
      id: b,
      previousValue: i.ui[b].value,
      currentValue: S.currentTarget.value
    };
    h.update((B) => (B.ui[b].value = S.currentTarget.value, B)), m || f.resolveUIState(R);
  }
  return t.$$set = (S) => {
    "comp" in S && d(n(0, p = S.comp)), "state" in S && o(n(1, h = S.state)), "editMode" in S && n(11, m = S.editMode), "viewOpt" in S && n(2, _ = S.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    8 && n(5, r = u.properties.value), t.$$.dirty & /*$comp*/
    8 && n(6, s = An(u.css, Ff, C));
  }, [
    p,
    h,
    _,
    u,
    O,
    r,
    s,
    i,
    b,
    C,
    v,
    m
  ];
}
class XA extends De {
  constructor(e) {
    super(), Le(this, e, zA, KA, Oe, {
      comp: 0,
      state: 1,
      editMode: 11,
      viewOpt: 2
    });
  }
}
function Kc(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r[18] = n, r;
}
function zc(t) {
  let e, n, r, s, i, a, o, u = (
    /*option*/
    t[16].displayName + ""
  ), l, d, f, p, h;
  return {
    c() {
      e = Y("label"), n = Y("input"), o = le(), l = ve(u), d = le(), this.h();
    },
    l(m) {
      e = W(m, "LABEL", { class: !0, for: !0 });
      var _ = Q(e);
      n = W(_, "INPUT", {
        type: !0,
        class: !0,
        id: !0,
        name: !0
      }), o = de(_), l = Ne(_, u), d = de(_), _.forEach(w), this.h();
    },
    h() {
      D(n, "type", "radio"), D(n, "class", "osb-radio"), D(n, "id", r = /*option*/
      t[16].value), n.__value = s = /*option*/
      t[16].value, n.value = n.__value, D(n, "name", i = /*$comp*/
      t[3].id), n.disabled = a = !/*option*/
      t[16].enabled, t[11][0].push(n), D(e, "class", "osb-label"), D(e, "for", f = /*option*/
      t[16].value), Je(e, "disabled", !/*option*/
      t[16].enabled);
    },
    m(m, _) {
      j(m, e, _), G(e, n), n.checked = n.__value === /*$state*/
      t[5].ui[
        /*id*/
        t[6]
      ].value, G(e, o), G(e, l), G(e, d), p || (h = [
        Ie(
          n,
          "change",
          /*input_change_handler*/
          t[10]
        ),
        Ie(
          n,
          "change",
          /*handleOnChange*/
          t[8]
        )
      ], p = !0);
    },
    p(m, _) {
      _ & /*$comp*/
      8 && r !== (r = /*option*/
      m[16].value) && D(n, "id", r), _ & /*$comp*/
      8 && s !== (s = /*option*/
      m[16].value) && (n.__value = s, n.value = n.__value), _ & /*$comp*/
      8 && i !== (i = /*$comp*/
      m[3].id) && D(n, "name", i), _ & /*$comp*/
      8 && a !== (a = !/*option*/
      m[16].enabled) && (n.disabled = a), _ & /*$state, id*/
      96 && (n.checked = n.__value === /*$state*/
      m[5].ui[
        /*id*/
        m[6]
      ].value), _ & /*$comp*/
      8 && u !== (u = /*option*/
      m[16].displayName + "") && Qe(l, u), _ & /*$comp*/
      8 && f !== (f = /*option*/
      m[16].value) && D(e, "for", f), _ & /*$comp*/
      8 && Je(e, "disabled", !/*option*/
      m[16].enabled);
    },
    d(m) {
      m && w(e), t[11][0].splice(
        /*$$binding_groups*/
        t[11][0].indexOf(n),
        1
      ), p = !1, ut(h);
    }
  };
}
function Xc(t) {
  let e, n = (
    /*option*/
    t[16].show && /*$state*/
    t[5].ui[
      /*id*/
      t[6]
    ] !== void 0 && zc(t)
  );
  return {
    c() {
      n && n.c(), e = ce();
    },
    l(r) {
      n && n.l(r), e = ce();
    },
    m(r, s) {
      n && n.m(r, s), j(r, e, s);
    },
    p(r, s) {
      /*option*/
      r[16].show && /*$state*/
      r[5].ui[
        /*id*/
        r[6]
      ] !== void 0 ? n ? n.p(r, s) : (n = zc(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && w(e);
    }
  };
}
function JA(t) {
  let e, n, r, s, i, a, o;
  s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  });
  let u = (
    /*$comp*/
    t[3].properties.options
  ), l = [];
  for (let d = 0; d < u.length; d += 1)
    l[d] = Xc(Kc(t, u, d));
  return {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), a = Y("div");
      for (let d = 0; d < l.length; d += 1)
        l[d].c();
      this.h();
    },
    l(d) {
      e = _n(d, !1), n = de(d), r = W(d, "DIV", { class: !0 });
      var f = Q(r);
      we(s.$$.fragment, f), i = de(f), a = W(f, "DIV", { class: !0 });
      var p = Q(a);
      for (let h = 0; h < l.length; h += 1)
        l[h].l(p);
      p.forEach(w), f.forEach(w), this.h();
    },
    h() {
      e.a = n, D(a, "class", "osb-radio-group"), D(
        r,
        "class",
        /*baseClassName*/
        t[7] + " osb-container"
      );
    },
    m(d, f) {
      e.m(
        /*compStyle*/
        t[4],
        d,
        f
      ), j(d, n, f), j(d, r, f), Ae(s, r, null), G(r, i), G(r, a);
      for (let p = 0; p < l.length; p += 1)
        l[p].m(a, null);
      o = !0;
    },
    p(d, [f]) {
      (!o || f & /*compStyle*/
      16) && e.p(
        /*compStyle*/
        d[4]
      );
      const p = {};
      if (f & /*comp*/
      1 && (p.comp = /*comp*/
      d[0]), f & /*viewOpt*/
      4 && (p.viewOpt = /*viewOpt*/
      d[2]), s.$set(p), f & /*$comp, $state, id, handleOnChange, undefined*/
      360) {
        u = /*$comp*/
        d[3].properties.options;
        let h;
        for (h = 0; h < u.length; h += 1) {
          const m = Kc(d, u, h);
          l[h] ? l[h].p(m, f) : (l[h] = Xc(m), l[h].c(), l[h].m(a, null));
        }
        for (; h < l.length; h += 1)
          l[h].d(1);
        l.length = u.length;
      }
    },
    i(d) {
      o || (K(s.$$.fragment, d), o = !0);
    },
    o(d) {
      z(s.$$.fragment, d), o = !1;
    },
    d(d) {
      d && e.d(), d && w(n), d && w(r), ye(s), Kt(l, d);
    }
  };
}
function ZA(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(h, (S) => n(5, i = S)), h), u, l = $, d = () => (l(), l = fe(p, (S) => n(3, u = S)), p);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  const f = En("stateReducer");
  if (f == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: p } = e;
  d();
  let { state: h } = e;
  o();
  let { editMode: m } = e, { viewOpt: _ } = e;
  const b = u.id, C = `osb-${b}`, O = h.subscribe((S) => {
    S.ui[b] && u.properties.options.findIndex((R) => R.value === S.ui[b].value);
  });
  Ot(() => {
    i.ui[b] === void 0 ? st(
      h,
      i.ui[b] = {
        enabled: u.enabled,
        show: u.show,
        value: r
      },
      i
    ) : r = i.ui[b].value;
  }), lt(() => {
    O();
  });
  function A(S) {
    let R = {
      id: b,
      previousValue: i.ui[b].value,
      currentValue: S.currentTarget.value
    };
    h.update((B) => (Object.assign(B.ui[b], { value: S.currentTarget.value }), B)), m || f.resolveUIState(R);
  }
  const T = [[]];
  function v() {
    i.ui[b].value = this.__value, h.set(i);
  }
  return t.$$set = (S) => {
    "comp" in S && d(n(0, p = S.comp)), "state" in S && o(n(1, h = S.state)), "editMode" in S && n(9, m = S.editMode), "viewOpt" in S && n(2, _ = S.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    8 && u.properties.selectedIndex, t.$$.dirty & /*$comp*/
    8 && (r = u.properties.value), t.$$.dirty & /*$comp*/
    8 && n(4, s = An(u.css, Bf, C));
  }, [
    p,
    h,
    _,
    u,
    s,
    i,
    b,
    C,
    A,
    m,
    v,
    T
  ];
}
class ey extends De {
  constructor(e) {
    super(), Le(this, e, ZA, JA, Oe, {
      comp: 0,
      state: 1,
      editMode: 9,
      viewOpt: 2
    });
  }
}
function Jc(t, e, n) {
  const r = t.slice();
  return r[12] = e[n], r[14] = n, r;
}
function Zc(t) {
  let e, n = (
    /*option*/
    t[12].displayName + ""
  ), r, s, i;
  return {
    c() {
      e = Y("option"), r = ve(n), s = le(), this.h();
    },
    l(a) {
      e = W(a, "OPTION", {});
      var o = Q(e);
      r = Ne(o, n), s = de(o), o.forEach(w), this.h();
    },
    h() {
      e.__value = /*index*/
      t[14], e.value = e.__value, e.disabled = i = !/*option*/
      t[12].enabled;
    },
    m(a, o) {
      j(a, e, o), G(e, r), G(e, s);
    },
    p(a, o) {
      o & /*$comp*/
      8 && n !== (n = /*option*/
      a[12].displayName + "") && Qe(r, n), o & /*$comp*/
      8 && i !== (i = !/*option*/
      a[12].enabled) && (e.disabled = i);
    },
    d(a) {
      a && w(e);
    }
  };
}
function el(t) {
  let e, n = (
    /*option*/
    t[12].show && Zc(t)
  );
  return {
    c() {
      n && n.c(), e = ce();
    },
    l(r) {
      n && n.l(r), e = ce();
    },
    m(r, s) {
      n && n.m(r, s), j(r, e, s);
    },
    p(r, s) {
      /*option*/
      r[12].show ? n ? n.p(r, s) : (n = Zc(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && w(e);
    }
  };
}
function ty(t) {
  let e, n, r, s, i, a = (
    /*$comp*/
    t[3].properties.options
  ), o = [];
  for (let u = 0; u < a.length; u += 1)
    o[u] = el(Jc(t, a, u));
  return {
    c() {
      e = Y("div"), n = Y("select");
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      this.h();
    },
    l(u) {
      e = W(u, "DIV", {});
      var l = Q(e);
      n = W(l, "SELECT", { class: !0 });
      var d = Q(n);
      for (let f = 0; f < o.length; f += 1)
        o[f].l(d);
      d.forEach(w), l.forEach(w), this.h();
    },
    h() {
      var u;
      D(n, "class", "osb-select"), n.disabled = r = !/*$state*/
      ((u = t[5].ui[
        /*id*/
        t[6]
      ]) != null && u.enabled);
    },
    m(u, l) {
      j(u, e, l), G(e, n);
      for (let d = 0; d < o.length; d += 1)
        o[d].m(n, null);
      Fn(
        n,
        /*selectedIndex*/
        t[4]
      ), s || (i = Ie(
        n,
        "change",
        /*onChange*/
        t[7]
      ), s = !0);
    },
    p(u, [l]) {
      var d;
      if (l & /*$comp*/
      8) {
        a = /*$comp*/
        u[3].properties.options;
        let f;
        for (f = 0; f < a.length; f += 1) {
          const p = Jc(u, a, f);
          o[f] ? o[f].p(p, l) : (o[f] = el(p), o[f].c(), o[f].m(n, null));
        }
        for (; f < o.length; f += 1)
          o[f].d(1);
        o.length = a.length;
      }
      l & /*selectedIndex*/
      16 && Fn(
        n,
        /*selectedIndex*/
        u[4]
      ), l & /*$state*/
      32 && r !== (r = !/*$state*/
      ((d = u[5].ui[
        /*id*/
        u[6]
      ]) != null && d.enabled)) && (n.disabled = r);
    },
    i: $,
    o: $,
    d(u) {
      u && w(e), Kt(o, u), s = !1, i();
    }
  };
}
function ny(t, e, n) {
  let r, s, i = $, a = () => (i(), i = fe(m, (v) => n(3, s = v)), m), o, u = $, l = () => (u(), u = fe(O, (v) => n(10, o = v)), O), d, f = $, p = () => (f(), f = fe(_, (v) => n(5, d = v)), _);
  t.$$.on_destroy.push(() => i()), t.$$.on_destroy.push(() => u()), t.$$.on_destroy.push(() => f());
  const h = Vl();
  let { comp: m } = e;
  a();
  let { state: _ } = e;
  p();
  let { editMode: b } = e, { viewOpt: C } = e, { valueOfSelectElement: O } = e;
  l();
  const A = s.id;
  function T(v) {
    n(4, r = v.target.value);
    let S = s.properties.options[r].value;
    O.set(S), h("change", S);
  }
  return t.$$set = (v) => {
    "comp" in v && a(n(0, m = v.comp)), "state" in v && p(n(1, _ = v.state)), "editMode" in v && n(8, b = v.editMode), "viewOpt" in v && n(9, C = v.viewOpt), "valueOfSelectElement" in v && l(n(2, O = v.valueOfSelectElement));
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp, $valueOfSelectElement*/
    1032 && n(4, r = s.properties.options.findIndex((v) => JSON.stringify(v.value) === JSON.stringify(o)));
  }, [
    m,
    _,
    O,
    s,
    r,
    d,
    A,
    T,
    b,
    C,
    o
  ];
}
class ry extends De {
  constructor(e) {
    super(), Le(this, e, ny, ty, Oe, {
      comp: 0,
      state: 1,
      editMode: 8,
      viewOpt: 9,
      valueOfSelectElement: 2
    });
  }
}
function tl(t, e, n) {
  const r = t.slice();
  return r[13] = e[n], r[15] = n, r;
}
function nl(t, e, n) {
  const r = t.slice();
  return r[16] = e[n], r;
}
function rl(t) {
  let e, n, r, s, i = (
    /*option*/
    t[13].displayName + ""
  ), a, o, u, l, d, f = (
    /*option*/
    t[13].details && /*option*/
    t[13].details.imgUrl && sl(t)
  ), p = (
    /*option*/
    t[13].details && /*option*/
    t[13].details.list && il(t)
  );
  function h(...m) {
    return (
      /*click_handler*/
      t[10](
        /*option*/
        t[13],
        ...m
      )
    );
  }
  return {
    c() {
      e = Y("div"), f && f.c(), n = le(), r = Y("div"), s = Y("div"), a = ve(i), o = le(), p && p.c(), u = le(), this.h();
    },
    l(m) {
      e = W(m, "DIV", { class: !0 });
      var _ = Q(e);
      f && f.l(_), n = de(_), r = W(_, "DIV", { class: !0 });
      var b = Q(r);
      s = W(b, "DIV", { class: !0 });
      var C = Q(s);
      a = Ne(C, i), C.forEach(w), o = de(b), p && p.l(b), b.forEach(w), u = de(_), _.forEach(w), this.h();
    },
    h() {
      D(s, "class", "osb-option-name"), D(r, "class", "osb-option-text"), D(e, "class", "osb-option-item cursor-pointer svelte-1wvkfu6"), Je(
        e,
        "active",
        /*index*/
        t[15] === /*selectedIndex*/
        t[4]
      );
    },
    m(m, _) {
      j(m, e, _), f && f.m(e, null), G(e, n), G(e, r), G(r, s), G(s, a), G(r, o), p && p.m(r, null), G(e, u), l || (d = Ie(e, "click", h), l = !0);
    },
    p(m, _) {
      t = m, /*option*/
      t[13].details && /*option*/
      t[13].details.imgUrl ? f ? f.p(t, _) : (f = sl(t), f.c(), f.m(e, n)) : f && (f.d(1), f = null), _ & /*$comp*/
      4 && i !== (i = /*option*/
      t[13].displayName + "") && Qe(a, i), /*option*/
      t[13].details && /*option*/
      t[13].details.list ? p ? p.p(t, _) : (p = il(t), p.c(), p.m(r, null)) : p && (p.d(1), p = null), _ & /*selectedIndex*/
      16 && Je(
        e,
        "active",
        /*index*/
        t[15] === /*selectedIndex*/
        t[4]
      );
    },
    d(m) {
      m && w(e), f && f.d(), p && p.d(), l = !1, d();
    }
  };
}
function sl(t) {
  let e, n;
  function r(a, o) {
    return o & /*$comp*/
    4 && (n = null), n == null && (n = !!uy(
      /*option*/
      a[13].details.imgUrl
    )), n ? iy : sy;
  }
  let s = r(t, -1), i = s(t);
  return {
    c() {
      e = Y("div"), i.c(), this.h();
    },
    l(a) {
      e = W(a, "DIV", { class: !0 });
      var o = Q(e);
      i.l(o), o.forEach(w), this.h();
    },
    h() {
      D(e, "class", "osb-option-thumbnail");
    },
    m(a, o) {
      j(a, e, o), i.m(e, null);
    },
    p(a, o) {
      s === (s = r(a, o)) && i ? i.p(a, o) : (i.d(1), i = s(a), i && (i.c(), i.m(e, null)));
    },
    d(a) {
      a && w(e), i.d();
    }
  };
}
function sy(t) {
  let e, n;
  return {
    c() {
      e = Y("div"), n = ve("이미지 URL이 올바르지 않습니다."), this.h();
    },
    l(r) {
      e = W(r, "DIV", { class: !0 });
      var s = Q(e);
      n = Ne(s, "이미지 URL이 올바르지 않습니다."), s.forEach(w), this.h();
    },
    h() {
      D(e, "class", "text-xs text-gray-500");
    },
    m(r, s) {
      j(r, e, s), G(e, n);
    },
    p: $,
    d(r) {
      r && w(e);
    }
  };
}
function iy(t) {
  let e, n;
  return {
    c() {
      e = Y("img"), this.h();
    },
    l(r) {
      e = W(r, "IMG", { src: !0, alt: !0 }), this.h();
    },
    h() {
      wu(e.src, n = /*option*/
      t[13].details.imgUrl) || D(e, "src", n), D(e, "alt", "imgUrl");
    },
    m(r, s) {
      j(r, e, s);
    },
    p(r, s) {
      s & /*$comp*/
      4 && !wu(e.src, n = /*option*/
      r[13].details.imgUrl) && D(e, "src", n);
    },
    d(r) {
      r && w(e);
    }
  };
}
function il(t) {
  let e, n = (
    /*option*/
    t[13].details.list
  ), r = [];
  for (let s = 0; s < n.length; s += 1)
    r[s] = al(nl(t, n, s));
  return {
    c() {
      e = Y("ul");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      this.h();
    },
    l(s) {
      e = W(s, "UL", { class: !0 });
      var i = Q(e);
      for (let a = 0; a < r.length; a += 1)
        r[a].l(i);
      i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "osb-option-desc pl-4 list-outside list-disc text-sm");
    },
    m(s, i) {
      j(s, e, i);
      for (let a = 0; a < r.length; a += 1)
        r[a].m(e, null);
    },
    p(s, i) {
      if (i & /*$comp*/
      4) {
        n = /*option*/
        s[13].details.list;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const o = nl(s, n, a);
          r[a] ? r[a].p(o, i) : (r[a] = al(o), r[a].c(), r[a].m(e, null));
        }
        for (; a < r.length; a += 1)
          r[a].d(1);
        r.length = n.length;
      }
    },
    d(s) {
      s && w(e), Kt(r, s);
    }
  };
}
function al(t) {
  let e, n = (
    /*listItem*/
    t[16] + ""
  ), r;
  return {
    c() {
      e = Y("li"), r = ve(n);
    },
    l(s) {
      e = W(s, "LI", {});
      var i = Q(e);
      r = Ne(i, n), i.forEach(w);
    },
    m(s, i) {
      j(s, e, i), G(e, r);
    },
    p(s, i) {
      i & /*$comp*/
      4 && n !== (n = /*listItem*/
      s[16] + "") && Qe(r, n);
    },
    d(s) {
      s && w(e);
    }
  };
}
function ul(t) {
  let e, n = (
    /*option*/
    t[13].show && rl(t)
  );
  return {
    c() {
      n && n.c(), e = ce();
    },
    l(r) {
      n && n.l(r), e = ce();
    },
    m(r, s) {
      n && n.m(r, s), j(r, e, s);
    },
    p(r, s) {
      /*option*/
      r[13].show ? n ? n.p(r, s) : (n = rl(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      n && n.d(r), r && w(e);
    }
  };
}
function ay(t) {
  let e, n = (
    /*$comp*/
    t[2].properties.options
  ), r = [];
  for (let s = 0; s < n.length; s += 1)
    r[s] = ul(tl(t, n, s));
  return {
    c() {
      e = Y("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0, style: !0 });
      var i = Q(e);
      for (let a = 0; a < r.length; a += 1)
        r[a].l(i);
      i.forEach(w), this.h();
    },
    h() {
      D(e, "class", "grid grid-cols-2 gap-4 osb-option-container"), D(
        e,
        "style",
        /*grid_cols_num_style*/
        t[3]
      );
    },
    m(s, i) {
      j(s, e, i);
      for (let a = 0; a < r.length; a += 1)
        r[a].m(e, null);
    },
    p(s, [i]) {
      if (i & /*selectedIndex, onChange, $comp, isValidHttpUrl*/
      52) {
        n = /*$comp*/
        s[2].properties.options;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const o = tl(s, n, a);
          r[a] ? r[a].p(o, i) : (r[a] = ul(o), r[a].c(), r[a].m(e, null));
        }
        for (; a < r.length; a += 1)
          r[a].d(1);
        r.length = n.length;
      }
      i & /*grid_cols_num_style*/
      8 && D(
        e,
        "style",
        /*grid_cols_num_style*/
        s[3]
      );
    },
    i: $,
    o: $,
    d(s) {
      s && w(e), Kt(r, s);
    }
  };
}
function uy(t) {
  let e;
  try {
    e = new URL(t);
  } catch (n) {
    return !1;
  }
  return e.protocol === "http:" || e.protocol === "https:";
}
function oy(t, e, n) {
  let r, s, i, a = $, o = () => (a(), a = fe(p, (A) => n(2, i = A)), p), u, l = $, d = () => (l(), l = fe(b, (A) => n(9, u = A)), b);
  t.$$.on_destroy.push(() => a()), t.$$.on_destroy.push(() => l());
  const f = Vl();
  let { comp: p } = e;
  o();
  let { state: h } = e, { editMode: m } = e, { viewOpt: _ } = e, { valueOfSelectElement: b } = e;
  d(), i.id, console.log("selectedIndex", r);
  function C(A) {
    b.set(A), f("change", A);
  }
  const O = (A, T) => C(A.value);
  return t.$$set = (A) => {
    "comp" in A && o(n(0, p = A.comp)), "state" in A && n(6, h = A.state), "editMode" in A && n(7, m = A.editMode), "viewOpt" in A && n(8, _ = A.viewOpt), "valueOfSelectElement" in A && d(n(1, b = A.valueOfSelectElement));
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp, $valueOfSelectElement*/
    516 && n(4, r = i.properties.options.findIndex((A) => JSON.stringify(A.value) === JSON.stringify(u))), t.$$.dirty & /*$comp*/
    4 && n(3, s = `grid-template-columns: repeat(${i.properties.columns}, minmax(0, 1fr));`);
  }, [
    p,
    b,
    i,
    s,
    r,
    C,
    h,
    m,
    _,
    u,
    O
  ];
}
class cy extends De {
  constructor(e) {
    super(), Le(this, e, oy, ay, Oe, {
      comp: 0,
      state: 6,
      editMode: 7,
      viewOpt: 8,
      valueOfSelectElement: 1
    });
  }
}
function ol(t) {
  switch (t) {
    case "dropdown":
      return ry;
    case "grid":
      return cy;
    default:
      throw new Error(`no such view: ${t}`);
  }
}
function ly(t) {
  let e, n, r, s, i, a, o;
  s = new yn({
    props: {
      comp: (
        /*comp*/
        t[0]
      ),
      viewOpt: (
        /*viewOpt*/
        t[3]
      )
    }
  });
  var u = ol(
    /*$comp*/
    t[4].properties.view
  );
  function l(d) {
    return {
      props: {
        comp: (
          /*comp*/
          d[0]
        ),
        state: (
          /*state*/
          d[1]
        ),
        editMode: (
          /*editMode*/
          d[2]
        ),
        viewOpt: (
          /*viewOpt*/
          d[3]
        ),
        valueOfSelectElement: (
          /*valueOfSelectElement*/
          d[6]
        )
      }
    };
  }
  return u && (a = new u(l(t)), a.$on(
    "change",
    /*change_handler*/
    t[9]
  )), {
    c() {
      e = new kt(!1), n = le(), r = Y("div"), Ce(s.$$.fragment), i = le(), a && Ce(a.$$.fragment), this.h();
    },
    l(d) {
      e = _n(d, !1), n = de(d), r = W(d, "DIV", { class: !0 });
      var f = Q(r);
      we(s.$$.fragment, f), i = de(f), a && we(a.$$.fragment, f), f.forEach(w), this.h();
    },
    h() {
      e.a = n, D(
        r,
        "class",
        /*baseClassName*/
        t[8] + " osb-container"
      );
    },
    m(d, f) {
      e.m(
        /*compStyle*/
        t[5],
        d,
        f
      ), j(d, n, f), j(d, r, f), Ae(s, r, null), G(r, i), a && Ae(a, r, null), o = !0;
    },
    p(d, [f]) {
      (!o || f & /*compStyle*/
      32) && e.p(
        /*compStyle*/
        d[5]
      );
      const p = {};
      f & /*comp*/
      1 && (p.comp = /*comp*/
      d[0]), f & /*viewOpt*/
      8 && (p.viewOpt = /*viewOpt*/
      d[3]), s.$set(p);
      const h = {};
      if (f & /*comp*/
      1 && (h.comp = /*comp*/
      d[0]), f & /*state*/
      2 && (h.state = /*state*/
      d[1]), f & /*editMode*/
      4 && (h.editMode = /*editMode*/
      d[2]), f & /*viewOpt*/
      8 && (h.viewOpt = /*viewOpt*/
      d[3]), u !== (u = ol(
        /*$comp*/
        d[4].properties.view
      ))) {
        if (a) {
          je();
          const m = a;
          z(m.$$.fragment, 1, 0, () => {
            ye(m, 1);
          }), qe();
        }
        u ? (a = new u(l(d)), a.$on(
          "change",
          /*change_handler*/
          d[9]
        ), Ce(a.$$.fragment), K(a.$$.fragment, 1), Ae(a, r, null)) : a = null;
      } else
        u && a.$set(h);
    },
    i(d) {
      o || (K(s.$$.fragment, d), a && K(a.$$.fragment, d), o = !0);
    },
    o(d) {
      z(s.$$.fragment, d), a && z(a.$$.fragment, d), o = !1;
    },
    d(d) {
      d && e.d(), d && w(n), d && w(r), ye(s), a && ye(a);
    }
  };
}
function dy(t, e, n) {
  let r, s, i = $, a = () => (i(), i = fe(p, (R) => n(4, s = R)), p), o, u = $, l = () => (u(), u = fe(h, (R) => n(11, o = R)), h), d;
  t.$$.on_destroy.push(() => i()), t.$$.on_destroy.push(() => u());
  const f = En("stateReducer");
  if (f == null)
    throw new Error("stateReducer is null. Check if stateReducer is provided in the parent component.");
  let { comp: p } = e;
  a();
  let { state: h } = e;
  l();
  let { editMode: m } = e, { viewOpt: _ } = e;
  const b = s.id;
  let C = me(s.properties.value);
  Yn(t, C, (R) => n(12, d = R));
  let O = 0;
  function A(R) {
    if (R === "")
      return;
    s.properties.options.find((H) => JSON.stringify(H.value) === JSON.stringify(R)) !== void 0 ? d != R && st(C, d = R, d) : window.alert(`no such value in options: received value is "${R}" in ${s.id}`);
  }
  Ot(() => {
    const R = p.subscribe((H) => {
      O = H.properties.selectedIndex, st(C, d = H.properties.options[O != null ? O : 0].value, d);
    }), B = h.subscribe((H) => {
      H.ui.hasOwnProperty(b) && (A(H.ui[b].value), O = s.properties.options.findIndex((q) => q.value === H.ui[b].value));
    });
    return o.ui[b] === void 0 && st(
      h,
      o.ui[b] = {
        enabled: s.enabled,
        show: s.show,
        value: s.properties.value
      },
      o
    ), () => {
      R(), B();
    };
  }), lt(() => {
  });
  function T(R) {
    let B = {
      id: b,
      previousValue: o.ui[b].value,
      currentValue: R
    };
    h.update((H) => (H.ui[b].value = R, H)), m || f.resolveUIState(B);
  }
  const v = `osb-${b}`, S = (R) => {
    T(R.detail);
  };
  return t.$$set = (R) => {
    "comp" in R && a(n(0, p = R.comp)), "state" in R && l(n(1, h = R.state)), "editMode" in R && n(2, m = R.editMode), "viewOpt" in R && n(3, _ = R.viewOpt);
  }, t.$$.update = () => {
    t.$$.dirty & /*$comp*/
    16 && n(5, r = An(s.css, Mf, v));
  }, [
    p,
    h,
    m,
    _,
    s,
    r,
    C,
    T,
    v,
    S
  ];
}
class fy extends De {
  constructor(e) {
    super(), Le(this, e, dy, ly, Oe, {
      comp: 0,
      state: 1,
      editMode: 2,
      viewOpt: 3
    });
  }
}
const cl = me(null);
function hy(t) {
  let e, n, r, s, i;
  var a = (
    /*cc*/
    t[5][
      /*uiType*/
      t[0]
    ]
  );
  function o(u) {
    return {
      props: {
        comp: (
          /*comp*/
          u[1]
        ),
        state: (
          /*state*/
          u[2]
        ),
        editMode: (
          /*editMode*/
          u[3]
        ),
        viewOpt: (
          /*viewOpt*/
          u[4]
        )
      }
    };
  }
  return a && (n = new a(o(t))), {
    c() {
      e = Y("div"), n && Ce(n.$$.fragment), this.h();
    },
    l(u) {
      e = W(u, "DIV", { class: !0 });
      var l = Q(e);
      n && we(n.$$.fragment, l), l.forEach(w), this.h();
    },
    h() {
      D(e, "class", "");
    },
    m(u, l) {
      j(u, e, l), n && Ae(n, e, null), r = !0, s || (i = [
        Ie(
          e,
          "click",
          /*click_handler*/
          t[7]
        ),
        Ie(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          t[6]
        )
      ], s = !0);
    },
    p(u, [l]) {
      const d = {};
      if (l & /*comp*/
      2 && (d.comp = /*comp*/
      u[1]), l & /*state*/
      4 && (d.state = /*state*/
      u[2]), l & /*editMode*/
      8 && (d.editMode = /*editMode*/
      u[3]), l & /*viewOpt*/
      16 && (d.viewOpt = /*viewOpt*/
      u[4]), a !== (a = /*cc*/
      u[5][
        /*uiType*/
        u[0]
      ])) {
        if (n) {
          je();
          const f = n;
          z(f.$$.fragment, 1, 0, () => {
            ye(f, 1);
          }), qe();
        }
        a ? (n = new a(o(u)), Ce(n.$$.fragment), K(n.$$.fragment, 1), Ae(n, e, null)) : n = null;
      } else
        a && n.$set(d);
    },
    i(u) {
      r || (n && K(n.$$.fragment, u), r = !0);
    },
    o(u) {
      n && z(n.$$.fragment, u), r = !1;
    },
    d(u) {
      u && w(e), n && ye(n), s = !1, ut(i);
    }
  };
}
function py(t, e, n) {
  let r, s = $, i = () => (s(), s = fe(u, (_) => n(8, r = _)), u), a;
  Yn(t, cl, (_) => n(9, a = _)), t.$$.on_destroy.push(() => s());
  let { uiType: o } = e, { comp: u } = e;
  i();
  let { state: l } = e, { editMode: d = !1 } = e, { viewOpt: f = { showTitle: !0, showDesc: !0 } } = e, p = {
    Checkbox: xA,
    Dropdown: jA,
    Quantity: YA,
    Label: QA,
    Input: XA,
    Radio: ey,
    SingleSelect: fy
  };
  function h() {
    st(cl, a = r, a);
  }
  function m(_) {
    fr.call(this, t, _);
  }
  return t.$$set = (_) => {
    "uiType" in _ && n(0, o = _.uiType), "comp" in _ && i(n(1, u = _.comp)), "state" in _ && n(2, l = _.state), "editMode" in _ && n(3, d = _.editMode), "viewOpt" in _ && n(4, f = _.viewOpt);
  }, [o, u, l, d, f, p, h, m];
}
class yu extends De {
  constructor(e) {
    super(), Le(this, e, py, hy, Oe, {
      uiType: 0,
      comp: 1,
      state: 2,
      editMode: 3,
      viewOpt: 4
    });
  }
}
class my {
  constructor(e) {
    Re(this, "items");
    this.items = e;
  }
  /**
   *
   * @param id
   * @param requirements key-value 형태의 객체
   * 		예) { "sizeno": "1423", "paperno": "4993" }
   * @returns
   */
  selectQuantitySet(e, n, r) {
    let s = this.items.find((o) => o.uiType === "Quantity" && o.id === e);
    if (s === void 0) {
      console.error(`selectQuantitySet: id "${e}" not found`);
      return;
    }
    let a = ee(s.comp).properties.array.find((o) => {
      let u = !1;
      return o.requirements && (u = Object.keys(o.requirements).every((l) => Array.isArray(o.requirements[l]) ? o.requirements[l].find((d) => d == r[l]) !== void 0 : o.requirements[l].toString() === r[l])), u;
    });
    return a && (console.log("selectedQuantitySetId -->", a.id), n.ui[e].selectedQuantitySetId !== a.id && (n.ui[e].selectedQuantitySetId = a.id, n.ui[e].value = a.value)), a;
  }
  /**
   * dropdown의 option 목록을 가져옴
   * @param id
   * @returns
   */
  getDropdownOptions(e) {
    let n = this.items.find((r) => r.uiType === "Dropdown" && r.id === e);
    if (n === void 0) {
      console.error(`enableDropdownOption: id "${e}" not found`);
      return;
    }
    return ee(n.comp).properties.options;
  }
  /**
   * dropdown의 option 하나를 가져옴
   * @param id
   * @returns
   */
  getDropdownOption(e, n) {
    let r = this.findComp(e, "Dropdown", n);
    if (r !== void 0)
      return ee(r.comp).properties.options[n];
  }
  /**
   * dropdown의 optionIndex번째 option을 활성화/비활성화함
   * @param id
   * @param optionIndex
   * @param value
   * @returns
   */
  enableDropdownOption(e, n, r) {
    let s = this.findComp(e, "Dropdown", n);
    s !== void 0 && s.comp.update((i) => (i.properties.options[n].enabled = r, i));
  }
  /**
   * dropdown의 optionIndex번째 option을 표시/숨김
   * @param id
   * @param optionIndex
   * @param value
   * @returns
   */
  showDropdownOption(e, n, r) {
    let s = this.findComp(e, "Dropdown", n);
    s !== void 0 && s.comp.update((i) => (i.properties.options[n].show = r, i));
  }
  /**
   * radio의 optionIndex번째 option을 활성화/비활성화함
   * @param id
   * @param optionIndex
   * @param value
   * @returns
   */
  enableRadioOption(e, n, r) {
    let s = this.findComp(e, "Radio", n);
    s !== void 0 && s.comp.update((i) => (i.properties.options[n].enabled = r, i));
  }
  /**
   * radio의 optionIndex번째 option을 표시/숨김
   * @param id
   * @param optionIndex
   * @param value
   * @returns
   */
  showRadioOption(e, n, r) {
    let s = this.findComp(e, "Radio", n);
    s !== void 0 && s.comp.update((i) => (i.properties.options[n].show = r, i));
  }
  /* ---------------------------------- uiType AGNOSTIC METHODS ---------------------------------- */
  /**
   * option 목록을 가져옴
   * @param id
   * @returns
   */
  getOptions(e, n) {
    let r = this.items.find((s) => s.id === e && s.uiType === n);
    if (r === void 0) {
      console.error(`getOptions: id "${e}" not found`);
      return;
    }
    return ee(r.comp).properties.options;
  }
  /**
   * option 하나를 가져옴
   * @param id
   * @returns
   */
  getOption(e, n, r) {
    let s = this.findComp(e, n, r);
    if (s !== void 0)
      return ee(s.comp).properties.options[r];
  }
  /**
   * optionIndex번째 옵션을 표시/숨김
   * @param {string} id
   * @param {string} uiType
   * @param {number} optionIndex
   * @param {boolean} value
   * @returns {void}
   */
  showOption(e, n, r, s) {
    let i = this.findComp(e, n, r);
    i !== void 0 && i.comp.update((a) => (a.properties.options[r].show = s, a));
  }
  /**
   * optionIndex번째 옵션을 활성화/비활성화
   * @param {string} id
   * @param {string} uiType
   * @param {number} optionIndex
   * @param {boolean} value
   * @returns {void}
   */
  enableOption(e, n, r, s) {
    let i = this.findComp(e, n, r);
    i !== void 0 && i.comp.update((a) => (a.properties.options[r].enabled = s, a));
  }
  findComp(e, n, r) {
    let s = this.items.find((a) => a.uiType === n && a.id === e);
    if (s === void 0) {
      console.error(`findComp: id "${e}" not found`);
      return;
    }
    let i = ee(s.comp).properties.options.length;
    if (r < 0 || r >= i) {
      console.log(`findComp: optionIndex "${r}" is out of range`);
      return;
    }
    return s;
  }
  getSerialNum() {
    return Math.floor(Math.random() * Math.pow(10, 10));
  }
  generateId(e = 4) {
    const s = "ABCDEFGHJKLMNPQRSTUVWXYZ" + "23456789";
    let i = "", a = !1, o = !1;
    for (; i.length < e; ) {
      const u = s[Math.floor(Math.random() * s.length)];
      /[0-9]/.test(u) && (a = !0), /[A-Z]/.test(u) && (o = !0), i += u;
    }
    return !a || !o ? this.generateId(e) : i;
  }
}
class gh {
  constructor() {
    Re(this, "opItems$");
    Re(this, "masterDoc$");
    Re(this, "masterReducer", "");
    Re(this, "state$");
    // = writable({})
    Re(this, "productTablesForBrowser");
    Re(this, "output$", me({}));
    Re(this, "comps");
    Re(this, "masterReducerFnModule", null);
  }
  setup(e, n, r, s, i) {
    return y(this, null, function* () {
      this.opItems$ = e, this.masterDoc$ = n, this.state$ = r, this.productTablesForBrowser = i, this.output$.update((u) => ({}));
      let a = {
        ui: {}
        // price: {},
        // editor: {}
      }, o = ee(this.opItems$);
      this.comps = new my(o), o.forEach((u) => {
        let l = ee(u.comp), d = this.getReducerFn_legacy(l.reducer, l.id);
        a.ui[l.id] = {
          enabled: l.enabled,
          show: l.show,
          value: l.properties.value
          // 1/3. value의 최초값은 comp.properties.value로 설정함.
        }, d && d.initState(l.id, l, a), s && s.ui[l.id] && (a.ui[l.id].value = s.ui[l.id].value);
      }), this.state$.set(a), console.log("initial draftState:", a), console.log("initial state$:", ee(this.state$)), this.masterReducerFnModule = this.getMasterReducerFn(), yield this.resolveUIState(null);
    });
  }
  /*
      ui component가 변경될 때 마다 호출되어야 함.
      valueChange:
          이 값이 null이 아니면 특정 컴포넌트의 onChange에 의해 resolveUIState()가 호출된 것임.
  */
  resolveUIState(e) {
    return y(this, null, function* () {
      let n = ee(this.opItems$), r = ee(this.state$);
      n.forEach((s) => {
        let i = ee(s.comp), a = this.getReducerFn_legacy(i.reducer, i.id), { onChange: o, updateState: u } = a || {};
        e && e.id === i.id && o && o(i.id, i, r, e, this.comps), u && u(i.id, i, r);
      }), n.forEach((s) => {
        let i = ee(s.comp), a = this.getReducerFn_legacy(i.reducer, i.id), { afterAllStateUpdated: o } = a || {};
        o && o(i.id, i, r, this.comps);
      }), this.masterReducerFnModule && this.masterReducerFnModule.generateVendorData && (r.vendorData = this.masterReducerFnModule.generateVendorData(r, this.comps)), this.state$.update((s) => r), yield this.produceOutput(r);
    });
  }
  /*
      결과물에 미리 포함될 항목을 제공함.
  */
  makeInitialState() {
    return ee(this.masterDoc$), {
      // edicus: {
      // 	pscode: masterData.pscode,
      // 	templateUri: masterData.templateUri
      // }
    };
  }
  produceOutput(e) {
    return y(this, null, function* () {
      let n = this.makeInitialState();
      this.masterReducerFnModule && this.masterReducerFnModule.preProcess(n, e, this.productTablesForBrowser, this.comps);
      let r = ee(this.opItems$), s = {};
      r.forEach((i) => {
        let a = ee(i.comp);
        s[a.id] = a.properties;
        let o = this.getReducerFn_legacy(a.reducer, a.id);
        o && o.produce(n, a.id, a, e);
      }), this.masterReducerFnModule && this.masterReducerFnModule.postProcess(n, e, this.productTablesForBrowser, s, this.comps), this.output$.update((i) => n);
    });
  }
  getMasterReducerFn() {
    let e = ee(this.masterDoc$);
    if (e.hasOwnProperty("masterReducerJs"))
      return this.getReducerFn_legacy(e.masterReducerJs, "masterReducer");
    if (e.hasOwnProperty("masterReducer"))
      return this.getReducerFn_legacy(e.masterReducer, "masterReducer");
    throw new Error("masterReducer is not defined");
  }
  getReducerFn_legacy(e, n) {
    let r = `
			"use strict";
			// console.log(arguments)
			return function() {
				${e}
			} 
		`, s = null;
    try {
      s = Function(r)()();
    } catch (i) {
      console.error(i), console.error("script_string:", e), console.error(`Error in reducer id:"${n}"`);
    }
    return s;
  }
}
const _y = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), Te = "�";
var E;
(function(t) {
  t[t.EOF = -1] = "EOF", t[t.NULL = 0] = "NULL", t[t.TABULATION = 9] = "TABULATION", t[t.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", t[t.LINE_FEED = 10] = "LINE_FEED", t[t.FORM_FEED = 12] = "FORM_FEED", t[t.SPACE = 32] = "SPACE", t[t.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", t[t.QUOTATION_MARK = 34] = "QUOTATION_MARK", t[t.NUMBER_SIGN = 35] = "NUMBER_SIGN", t[t.AMPERSAND = 38] = "AMPERSAND", t[t.APOSTROPHE = 39] = "APOSTROPHE", t[t.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", t[t.SOLIDUS = 47] = "SOLIDUS", t[t.DIGIT_0 = 48] = "DIGIT_0", t[t.DIGIT_9 = 57] = "DIGIT_9", t[t.SEMICOLON = 59] = "SEMICOLON", t[t.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", t[t.EQUALS_SIGN = 61] = "EQUALS_SIGN", t[t.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", t[t.QUESTION_MARK = 63] = "QUESTION_MARK", t[t.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", t[t.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", t[t.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", t[t.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", t[t.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", t[t.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", t[t.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", t[t.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", t[t.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", t[t.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", t[t.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER";
})(E = E || (E = {}));
const ze = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function bh(t) {
  return t >= 55296 && t <= 57343;
}
function Ey(t) {
  return t >= 56320 && t <= 57343;
}
function gy(t, e) {
  return (t - 55296) * 1024 + 9216 + e;
}
function Th(t) {
  return t !== 32 && t !== 10 && t !== 13 && t !== 9 && t !== 12 && t >= 1 && t <= 31 || t >= 127 && t <= 159;
}
function Ih(t) {
  return t >= 64976 && t <= 65007 || _y.has(t);
}
var L;
(function(t) {
  t.controlCharacterInInputStream = "control-character-in-input-stream", t.noncharacterInInputStream = "noncharacter-in-input-stream", t.surrogateInInputStream = "surrogate-in-input-stream", t.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", t.endTagWithAttributes = "end-tag-with-attributes", t.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", t.unexpectedSolidusInTag = "unexpected-solidus-in-tag", t.unexpectedNullCharacter = "unexpected-null-character", t.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", t.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", t.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", t.missingEndTagName = "missing-end-tag-name", t.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", t.unknownNamedCharacterReference = "unknown-named-character-reference", t.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", t.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", t.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", t.eofBeforeTagName = "eof-before-tag-name", t.eofInTag = "eof-in-tag", t.missingAttributeValue = "missing-attribute-value", t.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", t.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", t.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", t.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", t.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", t.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", t.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", t.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", t.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", t.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", t.cdataInHtmlContent = "cdata-in-html-content", t.incorrectlyOpenedComment = "incorrectly-opened-comment", t.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", t.eofInDoctype = "eof-in-doctype", t.nestedComment = "nested-comment", t.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", t.eofInComment = "eof-in-comment", t.incorrectlyClosedComment = "incorrectly-closed-comment", t.eofInCdata = "eof-in-cdata", t.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", t.nullCharacterReference = "null-character-reference", t.surrogateCharacterReference = "surrogate-character-reference", t.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", t.controlCharacterReference = "control-character-reference", t.noncharacterCharacterReference = "noncharacter-character-reference", t.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", t.missingDoctypeName = "missing-doctype-name", t.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", t.duplicateAttribute = "duplicate-attribute", t.nonConformingDoctype = "non-conforming-doctype", t.missingDoctype = "missing-doctype", t.misplacedDoctype = "misplaced-doctype", t.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", t.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", t.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", t.openElementsLeftAfterEof = "open-elements-left-after-eof", t.abandonedHeadElementChild = "abandoned-head-element-child", t.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", t.nestedNoscriptInHead = "nested-noscript-in-head", t.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(L = L || (L = {}));
const by = 1 << 16;
class Ty {
  constructor(e) {
    this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = by, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(e) {
    const { line: n, col: r, offset: s } = this;
    return {
      code: e,
      startLine: n,
      endLine: n,
      startCol: r,
      endCol: r,
      startOffset: s,
      endOffset: s
    };
  }
  _err(e) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(e) {
    if (this.pos !== this.html.length - 1) {
      const n = this.html.charCodeAt(this.pos + 1);
      if (Ey(n))
        return this.pos++, this._addGap(), gy(e, n);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, E.EOF;
    return this._err(L.surrogateInInputStream), e;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(e, n) {
    this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = n;
  }
  insertHtmlAtCurrentPos(e) {
    this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(e, n) {
    if (this.pos + e.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (n)
      return this.html.startsWith(e, this.pos);
    for (let r = 0; r < e.length; r++)
      if ((this.html.charCodeAt(this.pos + r) | 32) !== e.charCodeAt(r))
        return !1;
    return !0;
  }
  peek(e) {
    const n = this.pos + e;
    return n >= this.html.length ? (this.endOfChunkHit = !this.lastChunkWritten, E.EOF) : this.html.charCodeAt(n);
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, E.EOF;
    let e = this.html.charCodeAt(this.pos);
    return e === E.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, E.LINE_FEED) : e === E.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, bh(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === E.LINE_FEED || e === E.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
  }
  _checkForProblematicCharacters(e) {
    Th(e) ? this._err(L.controlCharacterInInputStream) : Ih(e) && this._err(L.noncharacterInInputStream);
  }
  retreat(e) {
    for (this.pos -= e; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var pe;
(function(t) {
  t[t.CHARACTER = 0] = "CHARACTER", t[t.NULL_CHARACTER = 1] = "NULL_CHARACTER", t[t.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", t[t.START_TAG = 3] = "START_TAG", t[t.END_TAG = 4] = "END_TAG", t[t.COMMENT = 5] = "COMMENT", t[t.DOCTYPE = 6] = "DOCTYPE", t[t.EOF = 7] = "EOF", t[t.HIBERNATION = 8] = "HIBERNATION";
})(pe = pe || (pe = {}));
function Ah(t, e) {
  for (let n = t.attrs.length - 1; n >= 0; n--)
    if (t.attrs[n].name === e)
      return t.attrs[n].value;
  return null;
}
const Jt = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t) => t.charCodeAt(0))
);
var ll;
(function(t) {
  t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.To_LOWER_BIT = 32] = "To_LOWER_BIT";
})(ll || (ll = {}));
var qn;
(function(t) {
  t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
})(qn || (qn = {}));
function Iy(t, e, n, r) {
  const s = (e & qn.BRANCH_LENGTH) >> 7, i = e & qn.JUMP_TABLE;
  if (s === 0)
    return i !== 0 && r === i ? n : -1;
  if (i) {
    const u = r - i;
    return u < 0 || u >= s ? -1 : t[n + u] - 1;
  }
  let a = n, o = a + s - 1;
  for (; a <= o; ) {
    const u = a + o >>> 1, l = t[u];
    if (l < r)
      a = u + 1;
    else if (l > r)
      o = u - 1;
    else
      return t[u + s];
  }
  return -1;
}
var M;
(function(t) {
  t.HTML = "http://www.w3.org/1999/xhtml", t.MATHML = "http://www.w3.org/1998/Math/MathML", t.SVG = "http://www.w3.org/2000/svg", t.XLINK = "http://www.w3.org/1999/xlink", t.XML = "http://www.w3.org/XML/1998/namespace", t.XMLNS = "http://www.w3.org/2000/xmlns/";
})(M = M || (M = {}));
var Qt;
(function(t) {
  t.TYPE = "type", t.ACTION = "action", t.ENCODING = "encoding", t.PROMPT = "prompt", t.NAME = "name", t.COLOR = "color", t.FACE = "face", t.SIZE = "size";
})(Qt = Qt || (Qt = {}));
var tt;
(function(t) {
  t.NO_QUIRKS = "no-quirks", t.QUIRKS = "quirks", t.LIMITED_QUIRKS = "limited-quirks";
})(tt = tt || (tt = {}));
var N;
(function(t) {
  t.A = "a", t.ADDRESS = "address", t.ANNOTATION_XML = "annotation-xml", t.APPLET = "applet", t.AREA = "area", t.ARTICLE = "article", t.ASIDE = "aside", t.B = "b", t.BASE = "base", t.BASEFONT = "basefont", t.BGSOUND = "bgsound", t.BIG = "big", t.BLOCKQUOTE = "blockquote", t.BODY = "body", t.BR = "br", t.BUTTON = "button", t.CAPTION = "caption", t.CENTER = "center", t.CODE = "code", t.COL = "col", t.COLGROUP = "colgroup", t.DD = "dd", t.DESC = "desc", t.DETAILS = "details", t.DIALOG = "dialog", t.DIR = "dir", t.DIV = "div", t.DL = "dl", t.DT = "dt", t.EM = "em", t.EMBED = "embed", t.FIELDSET = "fieldset", t.FIGCAPTION = "figcaption", t.FIGURE = "figure", t.FONT = "font", t.FOOTER = "footer", t.FOREIGN_OBJECT = "foreignObject", t.FORM = "form", t.FRAME = "frame", t.FRAMESET = "frameset", t.H1 = "h1", t.H2 = "h2", t.H3 = "h3", t.H4 = "h4", t.H5 = "h5", t.H6 = "h6", t.HEAD = "head", t.HEADER = "header", t.HGROUP = "hgroup", t.HR = "hr", t.HTML = "html", t.I = "i", t.IMG = "img", t.IMAGE = "image", t.INPUT = "input", t.IFRAME = "iframe", t.KEYGEN = "keygen", t.LABEL = "label", t.LI = "li", t.LINK = "link", t.LISTING = "listing", t.MAIN = "main", t.MALIGNMARK = "malignmark", t.MARQUEE = "marquee", t.MATH = "math", t.MENU = "menu", t.META = "meta", t.MGLYPH = "mglyph", t.MI = "mi", t.MO = "mo", t.MN = "mn", t.MS = "ms", t.MTEXT = "mtext", t.NAV = "nav", t.NOBR = "nobr", t.NOFRAMES = "noframes", t.NOEMBED = "noembed", t.NOSCRIPT = "noscript", t.OBJECT = "object", t.OL = "ol", t.OPTGROUP = "optgroup", t.OPTION = "option", t.P = "p", t.PARAM = "param", t.PLAINTEXT = "plaintext", t.PRE = "pre", t.RB = "rb", t.RP = "rp", t.RT = "rt", t.RTC = "rtc", t.RUBY = "ruby", t.S = "s", t.SCRIPT = "script", t.SECTION = "section", t.SELECT = "select", t.SOURCE = "source", t.SMALL = "small", t.SPAN = "span", t.STRIKE = "strike", t.STRONG = "strong", t.STYLE = "style", t.SUB = "sub", t.SUMMARY = "summary", t.SUP = "sup", t.TABLE = "table", t.TBODY = "tbody", t.TEMPLATE = "template", t.TEXTAREA = "textarea", t.TFOOT = "tfoot", t.TD = "td", t.TH = "th", t.THEAD = "thead", t.TITLE = "title", t.TR = "tr", t.TRACK = "track", t.TT = "tt", t.U = "u", t.UL = "ul", t.SVG = "svg", t.VAR = "var", t.WBR = "wbr", t.XMP = "xmp";
})(N = N || (N = {}));
var c;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.A = 1] = "A", t[t.ADDRESS = 2] = "ADDRESS", t[t.ANNOTATION_XML = 3] = "ANNOTATION_XML", t[t.APPLET = 4] = "APPLET", t[t.AREA = 5] = "AREA", t[t.ARTICLE = 6] = "ARTICLE", t[t.ASIDE = 7] = "ASIDE", t[t.B = 8] = "B", t[t.BASE = 9] = "BASE", t[t.BASEFONT = 10] = "BASEFONT", t[t.BGSOUND = 11] = "BGSOUND", t[t.BIG = 12] = "BIG", t[t.BLOCKQUOTE = 13] = "BLOCKQUOTE", t[t.BODY = 14] = "BODY", t[t.BR = 15] = "BR", t[t.BUTTON = 16] = "BUTTON", t[t.CAPTION = 17] = "CAPTION", t[t.CENTER = 18] = "CENTER", t[t.CODE = 19] = "CODE", t[t.COL = 20] = "COL", t[t.COLGROUP = 21] = "COLGROUP", t[t.DD = 22] = "DD", t[t.DESC = 23] = "DESC", t[t.DETAILS = 24] = "DETAILS", t[t.DIALOG = 25] = "DIALOG", t[t.DIR = 26] = "DIR", t[t.DIV = 27] = "DIV", t[t.DL = 28] = "DL", t[t.DT = 29] = "DT", t[t.EM = 30] = "EM", t[t.EMBED = 31] = "EMBED", t[t.FIELDSET = 32] = "FIELDSET", t[t.FIGCAPTION = 33] = "FIGCAPTION", t[t.FIGURE = 34] = "FIGURE", t[t.FONT = 35] = "FONT", t[t.FOOTER = 36] = "FOOTER", t[t.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", t[t.FORM = 38] = "FORM", t[t.FRAME = 39] = "FRAME", t[t.FRAMESET = 40] = "FRAMESET", t[t.H1 = 41] = "H1", t[t.H2 = 42] = "H2", t[t.H3 = 43] = "H3", t[t.H4 = 44] = "H4", t[t.H5 = 45] = "H5", t[t.H6 = 46] = "H6", t[t.HEAD = 47] = "HEAD", t[t.HEADER = 48] = "HEADER", t[t.HGROUP = 49] = "HGROUP", t[t.HR = 50] = "HR", t[t.HTML = 51] = "HTML", t[t.I = 52] = "I", t[t.IMG = 53] = "IMG", t[t.IMAGE = 54] = "IMAGE", t[t.INPUT = 55] = "INPUT", t[t.IFRAME = 56] = "IFRAME", t[t.KEYGEN = 57] = "KEYGEN", t[t.LABEL = 58] = "LABEL", t[t.LI = 59] = "LI", t[t.LINK = 60] = "LINK", t[t.LISTING = 61] = "LISTING", t[t.MAIN = 62] = "MAIN", t[t.MALIGNMARK = 63] = "MALIGNMARK", t[t.MARQUEE = 64] = "MARQUEE", t[t.MATH = 65] = "MATH", t[t.MENU = 66] = "MENU", t[t.META = 67] = "META", t[t.MGLYPH = 68] = "MGLYPH", t[t.MI = 69] = "MI", t[t.MO = 70] = "MO", t[t.MN = 71] = "MN", t[t.MS = 72] = "MS", t[t.MTEXT = 73] = "MTEXT", t[t.NAV = 74] = "NAV", t[t.NOBR = 75] = "NOBR", t[t.NOFRAMES = 76] = "NOFRAMES", t[t.NOEMBED = 77] = "NOEMBED", t[t.NOSCRIPT = 78] = "NOSCRIPT", t[t.OBJECT = 79] = "OBJECT", t[t.OL = 80] = "OL", t[t.OPTGROUP = 81] = "OPTGROUP", t[t.OPTION = 82] = "OPTION", t[t.P = 83] = "P", t[t.PARAM = 84] = "PARAM", t[t.PLAINTEXT = 85] = "PLAINTEXT", t[t.PRE = 86] = "PRE", t[t.RB = 87] = "RB", t[t.RP = 88] = "RP", t[t.RT = 89] = "RT", t[t.RTC = 90] = "RTC", t[t.RUBY = 91] = "RUBY", t[t.S = 92] = "S", t[t.SCRIPT = 93] = "SCRIPT", t[t.SECTION = 94] = "SECTION", t[t.SELECT = 95] = "SELECT", t[t.SOURCE = 96] = "SOURCE", t[t.SMALL = 97] = "SMALL", t[t.SPAN = 98] = "SPAN", t[t.STRIKE = 99] = "STRIKE", t[t.STRONG = 100] = "STRONG", t[t.STYLE = 101] = "STYLE", t[t.SUB = 102] = "SUB", t[t.SUMMARY = 103] = "SUMMARY", t[t.SUP = 104] = "SUP", t[t.TABLE = 105] = "TABLE", t[t.TBODY = 106] = "TBODY", t[t.TEMPLATE = 107] = "TEMPLATE", t[t.TEXTAREA = 108] = "TEXTAREA", t[t.TFOOT = 109] = "TFOOT", t[t.TD = 110] = "TD", t[t.TH = 111] = "TH", t[t.THEAD = 112] = "THEAD", t[t.TITLE = 113] = "TITLE", t[t.TR = 114] = "TR", t[t.TRACK = 115] = "TRACK", t[t.TT = 116] = "TT", t[t.U = 117] = "U", t[t.UL = 118] = "UL", t[t.SVG = 119] = "SVG", t[t.VAR = 120] = "VAR", t[t.WBR = 121] = "WBR", t[t.XMP = 122] = "XMP";
})(c = c || (c = {}));
const Ay = /* @__PURE__ */ new Map([
  [N.A, c.A],
  [N.ADDRESS, c.ADDRESS],
  [N.ANNOTATION_XML, c.ANNOTATION_XML],
  [N.APPLET, c.APPLET],
  [N.AREA, c.AREA],
  [N.ARTICLE, c.ARTICLE],
  [N.ASIDE, c.ASIDE],
  [N.B, c.B],
  [N.BASE, c.BASE],
  [N.BASEFONT, c.BASEFONT],
  [N.BGSOUND, c.BGSOUND],
  [N.BIG, c.BIG],
  [N.BLOCKQUOTE, c.BLOCKQUOTE],
  [N.BODY, c.BODY],
  [N.BR, c.BR],
  [N.BUTTON, c.BUTTON],
  [N.CAPTION, c.CAPTION],
  [N.CENTER, c.CENTER],
  [N.CODE, c.CODE],
  [N.COL, c.COL],
  [N.COLGROUP, c.COLGROUP],
  [N.DD, c.DD],
  [N.DESC, c.DESC],
  [N.DETAILS, c.DETAILS],
  [N.DIALOG, c.DIALOG],
  [N.DIR, c.DIR],
  [N.DIV, c.DIV],
  [N.DL, c.DL],
  [N.DT, c.DT],
  [N.EM, c.EM],
  [N.EMBED, c.EMBED],
  [N.FIELDSET, c.FIELDSET],
  [N.FIGCAPTION, c.FIGCAPTION],
  [N.FIGURE, c.FIGURE],
  [N.FONT, c.FONT],
  [N.FOOTER, c.FOOTER],
  [N.FOREIGN_OBJECT, c.FOREIGN_OBJECT],
  [N.FORM, c.FORM],
  [N.FRAME, c.FRAME],
  [N.FRAMESET, c.FRAMESET],
  [N.H1, c.H1],
  [N.H2, c.H2],
  [N.H3, c.H3],
  [N.H4, c.H4],
  [N.H5, c.H5],
  [N.H6, c.H6],
  [N.HEAD, c.HEAD],
  [N.HEADER, c.HEADER],
  [N.HGROUP, c.HGROUP],
  [N.HR, c.HR],
  [N.HTML, c.HTML],
  [N.I, c.I],
  [N.IMG, c.IMG],
  [N.IMAGE, c.IMAGE],
  [N.INPUT, c.INPUT],
  [N.IFRAME, c.IFRAME],
  [N.KEYGEN, c.KEYGEN],
  [N.LABEL, c.LABEL],
  [N.LI, c.LI],
  [N.LINK, c.LINK],
  [N.LISTING, c.LISTING],
  [N.MAIN, c.MAIN],
  [N.MALIGNMARK, c.MALIGNMARK],
  [N.MARQUEE, c.MARQUEE],
  [N.MATH, c.MATH],
  [N.MENU, c.MENU],
  [N.META, c.META],
  [N.MGLYPH, c.MGLYPH],
  [N.MI, c.MI],
  [N.MO, c.MO],
  [N.MN, c.MN],
  [N.MS, c.MS],
  [N.MTEXT, c.MTEXT],
  [N.NAV, c.NAV],
  [N.NOBR, c.NOBR],
  [N.NOFRAMES, c.NOFRAMES],
  [N.NOEMBED, c.NOEMBED],
  [N.NOSCRIPT, c.NOSCRIPT],
  [N.OBJECT, c.OBJECT],
  [N.OL, c.OL],
  [N.OPTGROUP, c.OPTGROUP],
  [N.OPTION, c.OPTION],
  [N.P, c.P],
  [N.PARAM, c.PARAM],
  [N.PLAINTEXT, c.PLAINTEXT],
  [N.PRE, c.PRE],
  [N.RB, c.RB],
  [N.RP, c.RP],
  [N.RT, c.RT],
  [N.RTC, c.RTC],
  [N.RUBY, c.RUBY],
  [N.S, c.S],
  [N.SCRIPT, c.SCRIPT],
  [N.SECTION, c.SECTION],
  [N.SELECT, c.SELECT],
  [N.SOURCE, c.SOURCE],
  [N.SMALL, c.SMALL],
  [N.SPAN, c.SPAN],
  [N.STRIKE, c.STRIKE],
  [N.STRONG, c.STRONG],
  [N.STYLE, c.STYLE],
  [N.SUB, c.SUB],
  [N.SUMMARY, c.SUMMARY],
  [N.SUP, c.SUP],
  [N.TABLE, c.TABLE],
  [N.TBODY, c.TBODY],
  [N.TEMPLATE, c.TEMPLATE],
  [N.TEXTAREA, c.TEXTAREA],
  [N.TFOOT, c.TFOOT],
  [N.TD, c.TD],
  [N.TH, c.TH],
  [N.THEAD, c.THEAD],
  [N.TITLE, c.TITLE],
  [N.TR, c.TR],
  [N.TRACK, c.TRACK],
  [N.TT, c.TT],
  [N.U, c.U],
  [N.UL, c.UL],
  [N.SVG, c.SVG],
  [N.VAR, c.VAR],
  [N.WBR, c.WBR],
  [N.XMP, c.XMP]
]);
function Ni(t) {
  var e;
  return (e = Ay.get(t)) !== null && e !== void 0 ? e : c.UNKNOWN;
}
const U = c, yy = {
  [M.HTML]: /* @__PURE__ */ new Set([
    U.ADDRESS,
    U.APPLET,
    U.AREA,
    U.ARTICLE,
    U.ASIDE,
    U.BASE,
    U.BASEFONT,
    U.BGSOUND,
    U.BLOCKQUOTE,
    U.BODY,
    U.BR,
    U.BUTTON,
    U.CAPTION,
    U.CENTER,
    U.COL,
    U.COLGROUP,
    U.DD,
    U.DETAILS,
    U.DIR,
    U.DIV,
    U.DL,
    U.DT,
    U.EMBED,
    U.FIELDSET,
    U.FIGCAPTION,
    U.FIGURE,
    U.FOOTER,
    U.FORM,
    U.FRAME,
    U.FRAMESET,
    U.H1,
    U.H2,
    U.H3,
    U.H4,
    U.H5,
    U.H6,
    U.HEAD,
    U.HEADER,
    U.HGROUP,
    U.HR,
    U.HTML,
    U.IFRAME,
    U.IMG,
    U.INPUT,
    U.LI,
    U.LINK,
    U.LISTING,
    U.MAIN,
    U.MARQUEE,
    U.MENU,
    U.META,
    U.NAV,
    U.NOEMBED,
    U.NOFRAMES,
    U.NOSCRIPT,
    U.OBJECT,
    U.OL,
    U.P,
    U.PARAM,
    U.PLAINTEXT,
    U.PRE,
    U.SCRIPT,
    U.SECTION,
    U.SELECT,
    U.SOURCE,
    U.STYLE,
    U.SUMMARY,
    U.TABLE,
    U.TBODY,
    U.TD,
    U.TEMPLATE,
    U.TEXTAREA,
    U.TFOOT,
    U.TH,
    U.THEAD,
    U.TITLE,
    U.TR,
    U.TRACK,
    U.UL,
    U.WBR,
    U.XMP
  ]),
  [M.MATHML]: /* @__PURE__ */ new Set([U.MI, U.MO, U.MN, U.MS, U.MTEXT, U.ANNOTATION_XML]),
  [M.SVG]: /* @__PURE__ */ new Set([U.TITLE, U.FOREIGN_OBJECT, U.DESC]),
  [M.XLINK]: /* @__PURE__ */ new Set(),
  [M.XML]: /* @__PURE__ */ new Set(),
  [M.XMLNS]: /* @__PURE__ */ new Set()
};
function yh(t) {
  return t === U.H1 || t === U.H2 || t === U.H3 || t === U.H4 || t === U.H5 || t === U.H6;
}
N.STYLE, N.SCRIPT, N.XMP, N.IFRAME, N.NOEMBED, N.NOFRAMES, N.PLAINTEXT;
const vy = /* @__PURE__ */ new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var g;
(function(t) {
  t[t.DATA = 0] = "DATA", t[t.RCDATA = 1] = "RCDATA", t[t.RAWTEXT = 2] = "RAWTEXT", t[t.SCRIPT_DATA = 3] = "SCRIPT_DATA", t[t.PLAINTEXT = 4] = "PLAINTEXT", t[t.TAG_OPEN = 5] = "TAG_OPEN", t[t.END_TAG_OPEN = 6] = "END_TAG_OPEN", t[t.TAG_NAME = 7] = "TAG_NAME", t[t.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", t[t.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", t[t.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", t[t.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", t[t.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", t[t.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", t[t.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", t[t.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", t[t.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", t[t.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", t[t.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", t[t.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", t[t.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", t[t.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", t[t.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", t[t.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", t[t.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", t[t.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", t[t.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", t[t.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", t[t.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", t[t.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", t[t.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", t[t.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", t[t.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", t[t.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", t[t.COMMENT_START = 42] = "COMMENT_START", t[t.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", t[t.COMMENT = 44] = "COMMENT", t[t.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", t[t.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", t[t.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", t[t.COMMENT_END = 50] = "COMMENT_END", t[t.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", t[t.DOCTYPE = 52] = "DOCTYPE", t[t.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", t[t.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", t[t.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", t[t.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", t[t.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", t[t.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", t[t.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", t[t.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", t[t.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", t[t.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", t[t.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", t[t.CDATA_SECTION = 68] = "CDATA_SECTION", t[t.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", t[t.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", t[t.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", t[t.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", t[t.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", t[t.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", t[t.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", t[t.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", t[t.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", t[t.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(g || (g = {}));
const Xe = {
  DATA: g.DATA,
  RCDATA: g.RCDATA,
  RAWTEXT: g.RAWTEXT,
  SCRIPT_DATA: g.SCRIPT_DATA,
  PLAINTEXT: g.PLAINTEXT,
  CDATA_SECTION: g.CDATA_SECTION
};
function Or(t) {
  return t >= E.DIGIT_0 && t <= E.DIGIT_9;
}
function _r(t) {
  return t >= E.LATIN_CAPITAL_A && t <= E.LATIN_CAPITAL_Z;
}
function Sy(t) {
  return t >= E.LATIN_SMALL_A && t <= E.LATIN_SMALL_Z;
}
function Vt(t) {
  return Sy(t) || _r(t);
}
function Fa(t) {
  return Vt(t) || Or(t);
}
function vh(t) {
  return t >= E.LATIN_CAPITAL_A && t <= E.LATIN_CAPITAL_F;
}
function Sh(t) {
  return t >= E.LATIN_SMALL_A && t <= E.LATIN_SMALL_F;
}
function Cy(t) {
  return Or(t) || vh(t) || Sh(t);
}
function Is(t) {
  return t + 32;
}
function Ch(t) {
  return t === E.SPACE || t === E.LINE_FEED || t === E.TABULATION || t === E.FORM_FEED;
}
function Oy(t) {
  return t === E.EQUALS_SIGN || Fa(t);
}
function dl(t) {
  return Ch(t) || t === E.SOLIDUS || t === E.GREATER_THAN_SIGN;
}
class Ry {
  constructor(e, n) {
    this.options = e, this.handler = n, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = g.DATA, this.returnState = g.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new Ty(n), this.currentLocation = this.getCurrentLocation(-1);
  }
  //Errors
  _err(e) {
    var n, r;
    (r = (n = this.handler).onParseError) === null || r === void 0 || r.call(n, this.preprocessor.getError(e));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(e) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - e,
      startOffset: this.preprocessor.offset - e,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const e = this._consume();
        this._ensureHibernation() || this._callState(e);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(e) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e == null || e());
  }
  write(e, n, r) {
    this.active = !0, this.preprocessor.write(e, n), this._runParsingLoop(), this.paused || r == null || r();
  }
  insertHtmlAtCurrentPos(e) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this._unconsume(this.consumedAfterSnapshot), this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _unconsume(e) {
    this.consumedAfterSnapshot -= e, this.preprocessor.retreat(e);
  }
  _reconsumeInState(e, n) {
    this.state = e, this._callState(n);
  }
  _advanceBy(e) {
    this.consumedAfterSnapshot += e;
    for (let n = 0; n < e; n++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(e, n) {
    return this.preprocessor.startsWith(e, n) ? (this._advanceBy(e.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: pe.START_TAG,
      tagName: "",
      tagID: c.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: pe.END_TAG,
      tagName: "",
      tagID: c.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(e) {
    this.currentToken = {
      type: pe.COMMENT,
      data: "",
      location: this.getCurrentLocation(e)
    };
  }
  _createDoctypeToken(e) {
    this.currentToken = {
      type: pe.DOCTYPE,
      name: e,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(e, n) {
    this.currentCharacterToken = {
      type: e,
      chars: n,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(e) {
    this.currentAttr = {
      name: e,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var e, n;
    const r = this.currentToken;
    if (Ah(r, this.currentAttr.name) === null) {
      if (r.attrs.push(this.currentAttr), r.location && this.currentLocation) {
        const s = (e = (n = r.location).attrs) !== null && e !== void 0 ? e : n.attrs = /* @__PURE__ */ Object.create(null);
        s[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(L.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(e) {
    this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const e = this.currentToken;
    this.prepareToken(e), e.tagID = Ni(e.tagName), e.type === pe.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(L.endTagWithAttributes), e.selfClosing && this._err(L.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(e) {
    this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(e) {
    this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(e) {
    if (this.currentCharacterToken) {
      switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
        case pe.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case pe.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case pe.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const e = this.getCurrentLocation(0);
    e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({ type: pe.EOF, location: e }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(e, n) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type !== e)
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      else {
        this.currentCharacterToken.chars += n;
        return;
      }
    this._createCharacterToken(e, n);
  }
  _emitCodePoint(e) {
    const n = Ch(e) ? pe.WHITESPACE_CHARACTER : e === E.NULL ? pe.NULL_CHARACTER : pe.CHARACTER;
    this._appendCharToCurrentCharacterToken(n, String.fromCodePoint(e));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(e) {
    this._appendCharToCurrentCharacterToken(pe.CHARACTER, e);
  }
  // Character reference helpers
  _matchNamedCharacterReference(e) {
    let n = null, r = 0, s = !1;
    for (let i = 0, a = Jt[0]; i >= 0 && (i = Iy(Jt, a, i + 1, e), !(i < 0)); e = this._consume()) {
      r += 1, a = Jt[i];
      const o = a & qn.VALUE_LENGTH;
      if (o) {
        const u = (o >> 14) - 1;
        if (e !== E.SEMICOLON && this._isCharacterReferenceInAttribute() && Oy(this.preprocessor.peek(1)) ? (n = [E.AMPERSAND], i += u) : (n = u === 0 ? [Jt[i] & ~qn.VALUE_LENGTH] : u === 1 ? [Jt[++i]] : [Jt[++i], Jt[++i]], r = 0, s = e !== E.SEMICOLON), u === 0) {
          this._consume();
          break;
        }
      }
    }
    return this._unconsume(r), s && !this.preprocessor.endOfChunkHit && this._err(L.missingSemicolonAfterCharacterReference), this._unconsume(1), n;
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === g.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === g.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === g.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(e) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(e) {
    switch (this.state) {
      case g.DATA: {
        this._stateData(e);
        break;
      }
      case g.RCDATA: {
        this._stateRcdata(e);
        break;
      }
      case g.RAWTEXT: {
        this._stateRawtext(e);
        break;
      }
      case g.SCRIPT_DATA: {
        this._stateScriptData(e);
        break;
      }
      case g.PLAINTEXT: {
        this._statePlaintext(e);
        break;
      }
      case g.TAG_OPEN: {
        this._stateTagOpen(e);
        break;
      }
      case g.END_TAG_OPEN: {
        this._stateEndTagOpen(e);
        break;
      }
      case g.TAG_NAME: {
        this._stateTagName(e);
        break;
      }
      case g.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(e);
        break;
      }
      case g.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(e);
        break;
      }
      case g.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(e);
        break;
      }
      case g.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(e);
        break;
      }
      case g.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(e);
        break;
      }
      case g.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(e);
        break;
      }
      case g.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(e);
        break;
      }
      case g.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(e);
        break;
      }
      case g.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(e);
        break;
      }
      case g.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(e);
        break;
      }
      case g.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(e);
        break;
      }
      case g.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(e);
        break;
      }
      case g.ATTRIBUTE_NAME: {
        this._stateAttributeName(e);
        break;
      }
      case g.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(e);
        break;
      }
      case g.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(e);
        break;
      }
      case g.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(e);
        break;
      }
      case g.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(e);
        break;
      }
      case g.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(e);
        break;
      }
      case g.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(e);
        break;
      }
      case g.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(e);
        break;
      }
      case g.BOGUS_COMMENT: {
        this._stateBogusComment(e);
        break;
      }
      case g.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(e);
        break;
      }
      case g.COMMENT_START: {
        this._stateCommentStart(e);
        break;
      }
      case g.COMMENT_START_DASH: {
        this._stateCommentStartDash(e);
        break;
      }
      case g.COMMENT: {
        this._stateComment(e);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(e);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(e);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(e);
        break;
      }
      case g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(e);
        break;
      }
      case g.COMMENT_END_DASH: {
        this._stateCommentEndDash(e);
        break;
      }
      case g.COMMENT_END: {
        this._stateCommentEnd(e);
        break;
      }
      case g.COMMENT_END_BANG: {
        this._stateCommentEndBang(e);
        break;
      }
      case g.DOCTYPE: {
        this._stateDoctype(e);
        break;
      }
      case g.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(e);
        break;
      }
      case g.DOCTYPE_NAME: {
        this._stateDoctypeName(e);
        break;
      }
      case g.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(e);
        break;
      }
      case g.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(e);
        break;
      }
      case g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(e);
        break;
      }
      case g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(e);
        break;
      }
      case g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(e);
        break;
      }
      case g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(e);
        break;
      }
      case g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
        break;
      }
      case g.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(e);
        break;
      }
      case g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(e);
        break;
      }
      case g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(e);
        break;
      }
      case g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(e);
        break;
      }
      case g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(e);
        break;
      }
      case g.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(e);
        break;
      }
      case g.CDATA_SECTION: {
        this._stateCdataSection(e);
        break;
      }
      case g.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(e);
        break;
      }
      case g.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(e);
        break;
      }
      case g.CHARACTER_REFERENCE: {
        this._stateCharacterReference(e);
        break;
      }
      case g.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(e);
        break;
      }
      case g.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(e);
        break;
      }
      case g.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(e);
        break;
      }
      case g.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(e);
        break;
      }
      case g.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(e);
        break;
      }
      case g.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(e);
        break;
      }
      case g.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(e);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(e) {
    switch (e) {
      case E.LESS_THAN_SIGN: {
        this.state = g.TAG_OPEN;
        break;
      }
      case E.AMPERSAND: {
        this.returnState = g.DATA, this.state = g.CHARACTER_REFERENCE;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitCodePoint(e);
        break;
      }
      case E.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(e) {
    switch (e) {
      case E.AMPERSAND: {
        this.returnState = g.RCDATA, this.state = g.CHARACTER_REFERENCE;
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(e) {
    switch (e) {
      case E.LESS_THAN_SIGN: {
        this.state = g.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(e) {
    switch (e) {
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(e) {
    switch (e) {
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(e) {
    if (Vt(e))
      this._createStartTagToken(), this.state = g.TAG_NAME, this._stateTagName(e);
    else
      switch (e) {
        case E.EXCLAMATION_MARK: {
          this.state = g.MARKUP_DECLARATION_OPEN;
          break;
        }
        case E.SOLIDUS: {
          this.state = g.END_TAG_OPEN;
          break;
        }
        case E.QUESTION_MARK: {
          this._err(L.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = g.BOGUS_COMMENT, this._stateBogusComment(e);
          break;
        }
        case E.EOF: {
          this._err(L.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(L.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = g.DATA, this._stateData(e);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(e) {
    if (Vt(e))
      this._createEndTagToken(), this.state = g.TAG_NAME, this._stateTagName(e);
    else
      switch (e) {
        case E.GREATER_THAN_SIGN: {
          this._err(L.missingEndTagName), this.state = g.DATA;
          break;
        }
        case E.EOF: {
          this._err(L.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(L.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = g.BOGUS_COMMENT, this._stateBogusComment(e);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case E.SOLIDUS: {
        this.state = g.SELF_CLOSING_START_TAG;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.tagName += Te;
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        n.tagName += String.fromCodePoint(_r(e) ? Is(e) : e);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(e) {
    e === E.SOLIDUS ? this.state = g.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = g.RCDATA, this._stateRcdata(e));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(e) {
    Vt(e) ? (this.state = g.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = g.RCDATA, this._stateRcdata(e));
  }
  handleSpecialEndTag(e) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const n = this.currentToken;
    switch (n.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = g.BEFORE_ATTRIBUTE_NAME, !1;
      case E.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = g.SELF_CLOSING_START_TAG, !1;
      case E.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = g.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(e) {
    this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = g.RCDATA, this._stateRcdata(e));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(e) {
    e === E.SOLIDUS ? this.state = g.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = g.RAWTEXT, this._stateRawtext(e));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(e) {
    Vt(e) ? (this.state = g.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = g.RAWTEXT, this._stateRawtext(e));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(e) {
    this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = g.RAWTEXT, this._stateRawtext(e));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(e) {
    switch (e) {
      case E.SOLIDUS: {
        this.state = g.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case E.EXCLAMATION_MARK: {
        this.state = g.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = g.SCRIPT_DATA, this._stateScriptData(e);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(e) {
    Vt(e) ? (this.state = g.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = g.SCRIPT_DATA, this._stateScriptData(e));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(e) {
    this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = g.SCRIPT_DATA, this._stateScriptData(e));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(e) {
    e === E.HYPHEN_MINUS ? (this.state = g.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = g.SCRIPT_DATA, this._stateScriptData(e));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(e) {
    e === E.HYPHEN_MINUS ? (this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = g.SCRIPT_DATA, this._stateScriptData(e));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.state = g.SCRIPT_DATA_ESCAPED, this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = g.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.state = g.SCRIPT_DATA_ESCAPED, this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = g.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(e) {
    e === E.SOLIDUS ? this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Vt(e) ? (this._emitChars("<"), this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = g.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(e) {
    Vt(e) ? (this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = g.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(e) {
    this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = g.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(e) {
    if (this.preprocessor.startsWith(ze.SCRIPT, !1) && dl(this.preprocessor.peek(ze.SCRIPT.length))) {
      this._emitCodePoint(e);
      for (let n = 0; n < ze.SCRIPT.length; n++)
        this._emitCodePoint(this._consume());
      this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else
      this._ensureHibernation() || (this.state = g.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case E.LESS_THAN_SIGN: {
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(Te);
        break;
      }
      case E.EOF: {
        this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(e) {
    e === E.SOLIDUS ? (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(e) {
    if (this.preprocessor.startsWith(ze.SCRIPT, !1) && dl(this.preprocessor.peek(ze.SCRIPT.length))) {
      this._emitCodePoint(e);
      for (let n = 0; n < ze.SCRIPT.length; n++)
        this._emitCodePoint(this._consume());
      this.state = g.SCRIPT_DATA_ESCAPED;
    } else
      this._ensureHibernation() || (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.SOLIDUS:
      case E.GREATER_THAN_SIGN:
      case E.EOF: {
        this.state = g.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
        break;
      }
      case E.EQUALS_SIGN: {
        this._err(L.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = g.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = g.ATTRIBUTE_NAME, this._stateAttributeName(e);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
      case E.SOLIDUS:
      case E.GREATER_THAN_SIGN:
      case E.EOF: {
        this._leaveAttrName(), this.state = g.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
        break;
      }
      case E.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = g.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case E.QUOTATION_MARK:
      case E.APOSTROPHE:
      case E.LESS_THAN_SIGN: {
        this._err(L.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.currentAttr.name += Te;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(_r(e) ? Is(e) : e);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.SOLIDUS: {
        this.state = g.SELF_CLOSING_START_TAG;
        break;
      }
      case E.EQUALS_SIGN: {
        this.state = g.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = g.ATTRIBUTE_NAME, this._stateAttributeName(e);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.QUOTATION_MARK: {
        this.state = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        this.state = g.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.missingAttributeValue), this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = g.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(e) {
    switch (e) {
      case E.QUOTATION_MARK: {
        this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case E.AMPERSAND: {
        this.returnState = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = g.CHARACTER_REFERENCE;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.currentAttr.value += Te;
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(e) {
    switch (e) {
      case E.APOSTROPHE: {
        this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case E.AMPERSAND: {
        this.returnState = g.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = g.CHARACTER_REFERENCE;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.currentAttr.value += Te;
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this._leaveAttrValue(), this.state = g.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case E.AMPERSAND: {
        this.returnState = g.ATTRIBUTE_VALUE_UNQUOTED, this.state = g.CHARACTER_REFERENCE;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), this.currentAttr.value += Te;
        break;
      }
      case E.QUOTATION_MARK:
      case E.APOSTROPHE:
      case E.LESS_THAN_SIGN:
      case E.EQUALS_SIGN:
      case E.GRAVE_ACCENT: {
        this._err(L.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this._leaveAttrValue(), this.state = g.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case E.SOLIDUS: {
        this._leaveAttrValue(), this.state = g.SELF_CLOSING_START_TAG;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingWhitespaceBetweenAttributes), this.state = g.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(e) {
    switch (e) {
      case E.GREATER_THAN_SIGN: {
        const n = this.currentToken;
        n.selfClosing = !0, this.state = g.DATA, this.emitCurrentTagToken();
        break;
      }
      case E.EOF: {
        this._err(L.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.unexpectedSolidusInTag), this.state = g.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(e) {
    const n = this.currentToken;
    switch (e) {
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentComment(n);
        break;
      }
      case E.EOF: {
        this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.data += Te;
        break;
      }
      default:
        n.data += String.fromCodePoint(e);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(e) {
    this._consumeSequenceIfMatch(ze.DASH_DASH, !0) ? (this._createCommentToken(ze.DASH_DASH.length + 1), this.state = g.COMMENT_START) : this._consumeSequenceIfMatch(ze.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(ze.DOCTYPE.length + 1), this.state = g.DOCTYPE) : this._consumeSequenceIfMatch(ze.CDATA_START, !0) ? this.inForeignNode ? this.state = g.CDATA_SECTION : (this._err(L.cdataInHtmlContent), this._createCommentToken(ze.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = g.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(L.incorrectlyOpenedComment), this._createCommentToken(2), this.state = g.BOGUS_COMMENT, this._stateBogusComment(e));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(e) {
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.COMMENT_START_DASH;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptClosingOfEmptyComment), this.state = g.DATA;
        const n = this.currentToken;
        this.emitCurrentComment(n);
        break;
      }
      default:
        this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(e) {
    const n = this.currentToken;
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.COMMENT_END;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptClosingOfEmptyComment), this.state = g.DATA, this.emitCurrentComment(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "-", this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(e) {
    const n = this.currentToken;
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.COMMENT_END_DASH;
        break;
      }
      case E.LESS_THAN_SIGN: {
        n.data += "<", this.state = g.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.data += Te;
        break;
      }
      case E.EOF: {
        this._err(L.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += String.fromCodePoint(e);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(e) {
    const n = this.currentToken;
    switch (e) {
      case E.EXCLAMATION_MARK: {
        n.data += "!", this.state = g.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case E.LESS_THAN_SIGN: {
        n.data += "<";
        break;
      }
      default:
        this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(e) {
    e === E.HYPHEN_MINUS ? this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = g.COMMENT, this._stateComment(e));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(e) {
    e === E.HYPHEN_MINUS ? this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = g.COMMENT_END_DASH, this._stateCommentEndDash(e));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(e) {
    e !== E.GREATER_THAN_SIGN && e !== E.EOF && this._err(L.nestedComment), this.state = g.COMMENT_END, this._stateCommentEnd(e);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(e) {
    const n = this.currentToken;
    switch (e) {
      case E.HYPHEN_MINUS: {
        this.state = g.COMMENT_END;
        break;
      }
      case E.EOF: {
        this._err(L.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "-", this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(e) {
    const n = this.currentToken;
    switch (e) {
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentComment(n);
        break;
      }
      case E.EXCLAMATION_MARK: {
        this.state = g.COMMENT_END_BANG;
        break;
      }
      case E.HYPHEN_MINUS: {
        n.data += "-";
        break;
      }
      case E.EOF: {
        this._err(L.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "--", this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(e) {
    const n = this.currentToken;
    switch (e) {
      case E.HYPHEN_MINUS: {
        n.data += "--!", this.state = g.COMMENT_END_DASH;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.incorrectlyClosedComment), this.state = g.DATA, this.emitCurrentComment(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
        break;
      }
      default:
        n.data += "--!", this.state = g.COMMENT, this._stateComment(e);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(e) {
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_NAME;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), this._createDoctypeToken(null);
        const n = this.currentToken;
        n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingWhitespaceBeforeDoctypeName), this.state = g.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(e) {
    if (_r(e))
      this._createDoctypeToken(String.fromCharCode(Is(e))), this.state = g.DOCTYPE_NAME;
    else
      switch (e) {
        case E.SPACE:
        case E.LINE_FEED:
        case E.TABULATION:
        case E.FORM_FEED:
          break;
        case E.NULL: {
          this._err(L.unexpectedNullCharacter), this._createDoctypeToken(Te), this.state = g.DOCTYPE_NAME;
          break;
        }
        case E.GREATER_THAN_SIGN: {
          this._err(L.missingDoctypeName), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = g.DATA;
          break;
        }
        case E.EOF: {
          this._err(L.eofInDoctype), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(e)), this.state = g.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.AFTER_DOCTYPE_NAME;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.name += Te;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.name += String.fromCodePoint(_r(e) ? Is(e) : e);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(ze.PUBLIC, !1) ? this.state = g.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(ze.SYSTEM, !1) ? this.state = g.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(L.invalidCharacterSequenceAfterDoctypeName), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case E.QUOTATION_MARK: {
        this._err(L.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        this._err(L.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.missingDoctypePublicIdentifier), n.forceQuirks = !0, this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.QUOTATION_MARK: {
        n.publicId = "", this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        n.publicId = "", this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.missingDoctypePublicIdentifier), n.forceQuirks = !0, this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(e) {
    const n = this.currentToken;
    switch (e) {
      case E.QUOTATION_MARK: {
        this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.publicId += Te;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptDoctypePublicIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.publicId += String.fromCodePoint(e);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(e) {
    const n = this.currentToken;
    switch (e) {
      case E.APOSTROPHE: {
        this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.publicId += Te;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptDoctypePublicIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.publicId += String.fromCodePoint(e);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.QUOTATION_MARK: {
        this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.QUOTATION_MARK: {
        n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED: {
        this.state = g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case E.QUOTATION_MARK: {
        this._err(L.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        this._err(L.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.missingDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.QUOTATION_MARK: {
        n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case E.APOSTROPHE: {
        n.systemId = "", this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.missingDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.DATA, this.emitCurrentDoctype(n);
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = !0, this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(e) {
    const n = this.currentToken;
    switch (e) {
      case E.QUOTATION_MARK: {
        this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.systemId += Te;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptDoctypeSystemIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.systemId += String.fromCodePoint(e);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(e) {
    const n = this.currentToken;
    switch (e) {
      case E.APOSTROPHE: {
        this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter), n.systemId += Te;
        break;
      }
      case E.GREATER_THAN_SIGN: {
        this._err(L.abruptDoctypeSystemIdentifier), n.forceQuirks = !0, this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        n.systemId += String.fromCodePoint(e);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(e) {
    const n = this.currentToken;
    switch (e) {
      case E.SPACE:
      case E.LINE_FEED:
      case E.TABULATION:
      case E.FORM_FEED:
        break;
      case E.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.EOF: {
        this._err(L.eofInDoctype), n.forceQuirks = !0, this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
      default:
        this._err(L.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = g.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(e) {
    const n = this.currentToken;
    switch (e) {
      case E.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(n), this.state = g.DATA;
        break;
      }
      case E.NULL: {
        this._err(L.unexpectedNullCharacter);
        break;
      }
      case E.EOF: {
        this.emitCurrentDoctype(n), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(e) {
    switch (e) {
      case E.RIGHT_SQUARE_BRACKET: {
        this.state = g.CDATA_SECTION_BRACKET;
        break;
      }
      case E.EOF: {
        this._err(L.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(e) {
    e === E.RIGHT_SQUARE_BRACKET ? this.state = g.CDATA_SECTION_END : (this._emitChars("]"), this.state = g.CDATA_SECTION, this._stateCdataSection(e));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(e) {
    switch (e) {
      case E.GREATER_THAN_SIGN: {
        this.state = g.DATA;
        break;
      }
      case E.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = g.CDATA_SECTION, this._stateCdataSection(e);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference(e) {
    e === E.NUMBER_SIGN ? this.state = g.NUMERIC_CHARACTER_REFERENCE : Fa(e) ? (this.state = g.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(e)) : (this._flushCodePointConsumedAsCharacterReference(E.AMPERSAND), this._reconsumeInState(this.returnState, e));
  }
  // Named character reference state
  //------------------------------------------------------------------
  _stateNamedCharacterReference(e) {
    const n = this._matchNamedCharacterReference(e);
    if (!this._ensureHibernation())
      if (n) {
        for (let r = 0; r < n.length; r++)
          this._flushCodePointConsumedAsCharacterReference(n[r]);
        this.state = this.returnState;
      } else
        this._flushCodePointConsumedAsCharacterReference(E.AMPERSAND), this.state = g.AMBIGUOUS_AMPERSAND;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(e) {
    Fa(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === E.SEMICOLON && this._err(L.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, e));
  }
  // Numeric character reference state
  //------------------------------------------------------------------
  _stateNumericCharacterReference(e) {
    this.charRefCode = 0, e === E.LATIN_SMALL_X || e === E.LATIN_CAPITAL_X ? this.state = g.HEXADEMICAL_CHARACTER_REFERENCE_START : Or(e) ? (this.state = g.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(e)) : (this._err(L.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(E.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(E.NUMBER_SIGN), this._reconsumeInState(this.returnState, e));
  }
  // Hexademical character reference start state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReferenceStart(e) {
    Cy(e) ? (this.state = g.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(e)) : (this._err(L.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(E.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(E.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState);
  }
  // Hexademical character reference state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReference(e) {
    vh(e) ? this.charRefCode = this.charRefCode * 16 + e - 55 : Sh(e) ? this.charRefCode = this.charRefCode * 16 + e - 87 : Or(e) ? this.charRefCode = this.charRefCode * 16 + e - 48 : e === E.SEMICOLON ? this.state = g.NUMERIC_CHARACTER_REFERENCE_END : (this._err(L.missingSemicolonAfterCharacterReference), this.state = g.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e));
  }
  // Decimal character reference state
  //------------------------------------------------------------------
  _stateDecimalCharacterReference(e) {
    Or(e) ? this.charRefCode = this.charRefCode * 10 + e - 48 : e === E.SEMICOLON ? this.state = g.NUMERIC_CHARACTER_REFERENCE_END : (this._err(L.missingSemicolonAfterCharacterReference), this.state = g.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e));
  }
  // Numeric character reference end state
  //------------------------------------------------------------------
  _stateNumericCharacterReferenceEnd(e) {
    if (this.charRefCode === E.NULL)
      this._err(L.nullCharacterReference), this.charRefCode = E.REPLACEMENT_CHARACTER;
    else if (this.charRefCode > 1114111)
      this._err(L.characterReferenceOutsideUnicodeRange), this.charRefCode = E.REPLACEMENT_CHARACTER;
    else if (bh(this.charRefCode))
      this._err(L.surrogateCharacterReference), this.charRefCode = E.REPLACEMENT_CHARACTER;
    else if (Ih(this.charRefCode))
      this._err(L.noncharacterCharacterReference);
    else if (Th(this.charRefCode) || this.charRefCode === E.CARRIAGE_RETURN) {
      this._err(L.controlCharacterReference);
      const n = vy.get(this.charRefCode);
      n !== void 0 && (this.charRefCode = n);
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, e);
  }
}
const Oh = /* @__PURE__ */ new Set([c.DD, c.DT, c.LI, c.OPTGROUP, c.OPTION, c.P, c.RB, c.RP, c.RT, c.RTC]), fl = /* @__PURE__ */ new Set([
  ...Oh,
  c.CAPTION,
  c.COLGROUP,
  c.TBODY,
  c.TD,
  c.TFOOT,
  c.TH,
  c.THEAD,
  c.TR
]), As = /* @__PURE__ */ new Map([
  [c.APPLET, M.HTML],
  [c.CAPTION, M.HTML],
  [c.HTML, M.HTML],
  [c.MARQUEE, M.HTML],
  [c.OBJECT, M.HTML],
  [c.TABLE, M.HTML],
  [c.TD, M.HTML],
  [c.TEMPLATE, M.HTML],
  [c.TH, M.HTML],
  [c.ANNOTATION_XML, M.MATHML],
  [c.MI, M.MATHML],
  [c.MN, M.MATHML],
  [c.MO, M.MATHML],
  [c.MS, M.MATHML],
  [c.MTEXT, M.MATHML],
  [c.DESC, M.SVG],
  [c.FOREIGN_OBJECT, M.SVG],
  [c.TITLE, M.SVG]
]), Ny = [c.H1, c.H2, c.H3, c.H4, c.H5, c.H6], wy = [c.TR, c.TEMPLATE, c.HTML], Ly = [c.TBODY, c.TFOOT, c.THEAD, c.TEMPLATE, c.HTML], Dy = [c.TABLE, c.TEMPLATE, c.HTML], My = [c.TD, c.TH];
class Py {
  constructor(e, n, r) {
    this.treeAdapter = n, this.handler = r, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = c.UNKNOWN, this.current = e;
  }
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  //Index of element
  _indexOf(e) {
    return this.items.lastIndexOf(e, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === c.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === M.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(e, n) {
    this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = n, this.currentTagId = n, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, n, !0);
  }
  pop() {
    const e = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
  }
  replace(e, n) {
    const r = this._indexOf(e);
    this.items[r] = n, r === this.stackTop && (this.current = n);
  }
  insertAfter(e, n, r) {
    const s = this._indexOf(e) + 1;
    this.items.splice(s, 0, n), this.tagIDs.splice(s, 0, r), this.stackTop++, s === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, s === this.stackTop);
  }
  popUntilTagNamePopped(e) {
    let n = this.stackTop + 1;
    do
      n = this.tagIDs.lastIndexOf(e, n - 1);
    while (n > 0 && this.treeAdapter.getNamespaceURI(this.items[n]) !== M.HTML);
    this.shortenToLength(n < 0 ? 0 : n);
  }
  shortenToLength(e) {
    for (; this.stackTop >= e; ) {
      const n = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(n, this.stackTop < e);
    }
  }
  popUntilElementPopped(e) {
    const n = this._indexOf(e);
    this.shortenToLength(n < 0 ? 0 : n);
  }
  popUntilPopped(e, n) {
    const r = this._indexOfTagNames(e, n);
    this.shortenToLength(r < 0 ? 0 : r);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(Ny, M.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(My, M.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(e, n) {
    for (let r = this.stackTop; r >= 0; r--)
      if (e.includes(this.tagIDs[r]) && this.treeAdapter.getNamespaceURI(this.items[r]) === n)
        return r;
    return -1;
  }
  clearBackTo(e, n) {
    const r = this._indexOfTagNames(e, n);
    this.shortenToLength(r + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(Dy, M.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(Ly, M.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(wy, M.HTML);
  }
  remove(e) {
    const n = this._indexOf(e);
    n >= 0 && (n === this.stackTop ? this.pop() : (this.items.splice(n, 1), this.tagIDs.splice(n, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === c.BODY ? this.items[1] : null;
  }
  contains(e) {
    return this._indexOf(e) > -1;
  }
  getCommonAncestor(e) {
    const n = this._indexOf(e) - 1;
    return n >= 0 ? this.items[n] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === c.HTML;
  }
  //Element in scope
  hasInScope(e) {
    for (let n = this.stackTop; n >= 0; n--) {
      const r = this.tagIDs[n], s = this.treeAdapter.getNamespaceURI(this.items[n]);
      if (r === e && s === M.HTML)
        return !0;
      if (As.get(r) === s)
        return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let e = this.stackTop; e >= 0; e--) {
      const n = this.tagIDs[e], r = this.treeAdapter.getNamespaceURI(this.items[e]);
      if (yh(n) && r === M.HTML)
        return !0;
      if (As.get(n) === r)
        return !1;
    }
    return !0;
  }
  hasInListItemScope(e) {
    for (let n = this.stackTop; n >= 0; n--) {
      const r = this.tagIDs[n], s = this.treeAdapter.getNamespaceURI(this.items[n]);
      if (r === e && s === M.HTML)
        return !0;
      if ((r === c.UL || r === c.OL) && s === M.HTML || As.get(r) === s)
        return !1;
    }
    return !0;
  }
  hasInButtonScope(e) {
    for (let n = this.stackTop; n >= 0; n--) {
      const r = this.tagIDs[n], s = this.treeAdapter.getNamespaceURI(this.items[n]);
      if (r === e && s === M.HTML)
        return !0;
      if (r === c.BUTTON && s === M.HTML || As.get(r) === s)
        return !1;
    }
    return !0;
  }
  hasInTableScope(e) {
    for (let n = this.stackTop; n >= 0; n--) {
      const r = this.tagIDs[n];
      if (this.treeAdapter.getNamespaceURI(this.items[n]) === M.HTML) {
        if (r === e)
          return !0;
        if (r === c.TABLE || r === c.TEMPLATE || r === c.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let e = this.stackTop; e >= 0; e--) {
      const n = this.tagIDs[e];
      if (this.treeAdapter.getNamespaceURI(this.items[e]) === M.HTML) {
        if (n === c.TBODY || n === c.THEAD || n === c.TFOOT)
          return !0;
        if (n === c.TABLE || n === c.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasInSelectScope(e) {
    for (let n = this.stackTop; n >= 0; n--) {
      const r = this.tagIDs[n];
      if (this.treeAdapter.getNamespaceURI(this.items[n]) === M.HTML) {
        if (r === e)
          return !0;
        if (r !== c.OPTION && r !== c.OPTGROUP)
          return !1;
      }
    }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; Oh.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; fl.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(e) {
    for (; this.currentTagId !== e && fl.has(this.currentTagId); )
      this.pop();
  }
}
const ua = 3;
var mt;
(function(t) {
  t[t.Marker = 0] = "Marker", t[t.Element = 1] = "Element";
})(mt = mt || (mt = {}));
const hl = { type: mt.Marker };
class ky {
  constructor(e) {
    this.treeAdapter = e, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(e, n) {
    const r = [], s = n.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
    for (let o = 0; o < this.entries.length; o++) {
      const u = this.entries[o];
      if (u.type === mt.Marker)
        break;
      const { element: l } = u;
      if (this.treeAdapter.getTagName(l) === i && this.treeAdapter.getNamespaceURI(l) === a) {
        const d = this.treeAdapter.getAttrList(l);
        d.length === s && r.push({ idx: o, attrs: d });
      }
    }
    return r;
  }
  _ensureNoahArkCondition(e) {
    if (this.entries.length < ua)
      return;
    const n = this.treeAdapter.getAttrList(e), r = this._getNoahArkConditionCandidates(e, n);
    if (r.length < ua)
      return;
    const s = new Map(n.map((a) => [a.name, a.value]));
    let i = 0;
    for (let a = 0; a < r.length; a++) {
      const o = r[a];
      o.attrs.every((u) => s.get(u.name) === u.value) && (i += 1, i >= ua && this.entries.splice(o.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(hl);
  }
  pushElement(e, n) {
    this._ensureNoahArkCondition(e), this.entries.unshift({
      type: mt.Element,
      element: e,
      token: n
    });
  }
  insertElementAfterBookmark(e, n) {
    const r = this.entries.indexOf(this.bookmark);
    this.entries.splice(r, 0, {
      type: mt.Element,
      element: e,
      token: n
    });
  }
  removeEntry(e) {
    const n = this.entries.indexOf(e);
    n >= 0 && this.entries.splice(n, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const e = this.entries.indexOf(hl);
    e >= 0 ? this.entries.splice(0, e + 1) : this.entries.length = 0;
  }
  //Search
  getElementEntryInScopeWithTagName(e) {
    const n = this.entries.find((r) => r.type === mt.Marker || this.treeAdapter.getTagName(r.element) === e);
    return n && n.type === mt.Element ? n : null;
  }
  getElementEntry(e) {
    return this.entries.find((n) => n.type === mt.Element && n.element === e);
  }
}
function pl(t) {
  return {
    nodeName: "#text",
    value: t,
    parentNode: null
  };
}
const Nn = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: tt.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(t, e, n) {
    return {
      nodeName: t,
      tagName: t,
      attrs: n,
      namespaceURI: e,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(t) {
    return {
      nodeName: "#comment",
      data: t,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(t, e) {
    t.childNodes.push(e), e.parentNode = t;
  },
  insertBefore(t, e, n) {
    const r = t.childNodes.indexOf(n);
    t.childNodes.splice(r, 0, e), e.parentNode = t;
  },
  setTemplateContent(t, e) {
    t.content = e;
  },
  getTemplateContent(t) {
    return t.content;
  },
  setDocumentType(t, e, n, r) {
    const s = t.childNodes.find((i) => i.nodeName === "#documentType");
    if (s)
      s.name = e, s.publicId = n, s.systemId = r;
    else {
      const i = {
        nodeName: "#documentType",
        name: e,
        publicId: n,
        systemId: r,
        parentNode: null
      };
      Nn.appendChild(t, i);
    }
  },
  setDocumentMode(t, e) {
    t.mode = e;
  },
  getDocumentMode(t) {
    return t.mode;
  },
  detachNode(t) {
    if (t.parentNode) {
      const e = t.parentNode.childNodes.indexOf(t);
      t.parentNode.childNodes.splice(e, 1), t.parentNode = null;
    }
  },
  insertText(t, e) {
    if (t.childNodes.length > 0) {
      const n = t.childNodes[t.childNodes.length - 1];
      if (Nn.isTextNode(n)) {
        n.value += e;
        return;
      }
    }
    Nn.appendChild(t, pl(e));
  },
  insertTextBefore(t, e, n) {
    const r = t.childNodes[t.childNodes.indexOf(n) - 1];
    r && Nn.isTextNode(r) ? r.value += e : Nn.insertBefore(t, pl(e), n);
  },
  adoptAttributes(t, e) {
    const n = new Set(t.attrs.map((r) => r.name));
    for (let r = 0; r < e.length; r++)
      n.has(e[r].name) || t.attrs.push(e[r]);
  },
  //Tree traversing
  getFirstChild(t) {
    return t.childNodes[0];
  },
  getChildNodes(t) {
    return t.childNodes;
  },
  getParentNode(t) {
    return t.parentNode;
  },
  getAttrList(t) {
    return t.attrs;
  },
  //Node data
  getTagName(t) {
    return t.tagName;
  },
  getNamespaceURI(t) {
    return t.namespaceURI;
  },
  getTextNodeContent(t) {
    return t.value;
  },
  getCommentNodeContent(t) {
    return t.data;
  },
  getDocumentTypeNodeName(t) {
    return t.name;
  },
  getDocumentTypeNodePublicId(t) {
    return t.publicId;
  },
  getDocumentTypeNodeSystemId(t) {
    return t.systemId;
  },
  //Node types
  isTextNode(t) {
    return t.nodeName === "#text";
  },
  isCommentNode(t) {
    return t.nodeName === "#comment";
  },
  isDocumentTypeNode(t) {
    return t.nodeName === "#documentType";
  },
  isElementNode(t) {
    return Object.prototype.hasOwnProperty.call(t, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(t, e) {
    t.sourceCodeLocation = e;
  },
  getNodeSourceCodeLocation(t) {
    return t.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(t, e) {
    t.sourceCodeLocation = Ke(Ke({}, t.sourceCodeLocation), e);
  }
}, Rh = "html", Fy = "about:legacy-compat", By = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Nh = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], Uy = [
  ...Nh,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], xy = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), wh = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Hy = [
  ...wh,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function ml(t, e) {
  return e.some((n) => t.startsWith(n));
}
function Vy(t) {
  return t.name === Rh && t.publicId === null && (t.systemId === null || t.systemId === Fy);
}
function jy(t) {
  if (t.name !== Rh)
    return tt.QUIRKS;
  const { systemId: e } = t;
  if (e && e.toLowerCase() === By)
    return tt.QUIRKS;
  let { publicId: n } = t;
  if (n !== null) {
    if (n = n.toLowerCase(), xy.has(n))
      return tt.QUIRKS;
    let r = e === null ? Uy : Nh;
    if (ml(n, r))
      return tt.QUIRKS;
    if (r = e === null ? wh : Hy, ml(n, r))
      return tt.LIMITED_QUIRKS;
  }
  return tt.NO_QUIRKS;
}
const _l = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, qy = "definitionurl", $y = "definitionURL", Yy = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((t) => [t.toLowerCase(), t])), Gy = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: M.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: M.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: M.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: M.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: M.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: M.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: M.XLINK }],
  ["xml:base", { prefix: "xml", name: "base", namespace: M.XML }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: M.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: M.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: M.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: M.XMLNS }]
]), Wy = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((t) => [t.toLowerCase(), t])), Qy = /* @__PURE__ */ new Set([
  c.B,
  c.BIG,
  c.BLOCKQUOTE,
  c.BODY,
  c.BR,
  c.CENTER,
  c.CODE,
  c.DD,
  c.DIV,
  c.DL,
  c.DT,
  c.EM,
  c.EMBED,
  c.H1,
  c.H2,
  c.H3,
  c.H4,
  c.H5,
  c.H6,
  c.HEAD,
  c.HR,
  c.I,
  c.IMG,
  c.LI,
  c.LISTING,
  c.MENU,
  c.META,
  c.NOBR,
  c.OL,
  c.P,
  c.PRE,
  c.RUBY,
  c.S,
  c.SMALL,
  c.SPAN,
  c.STRONG,
  c.STRIKE,
  c.SUB,
  c.SUP,
  c.TABLE,
  c.TT,
  c.U,
  c.UL,
  c.VAR
]);
function Ky(t) {
  const e = t.tagID;
  return e === c.FONT && t.attrs.some(({ name: r }) => r === Qt.COLOR || r === Qt.SIZE || r === Qt.FACE) || Qy.has(e);
}
function Lh(t) {
  for (let e = 0; e < t.attrs.length; e++)
    if (t.attrs[e].name === qy) {
      t.attrs[e].name = $y;
      break;
    }
}
function Dh(t) {
  for (let e = 0; e < t.attrs.length; e++) {
    const n = Yy.get(t.attrs[e].name);
    n != null && (t.attrs[e].name = n);
  }
}
function vu(t) {
  for (let e = 0; e < t.attrs.length; e++) {
    const n = Gy.get(t.attrs[e].name);
    n && (t.attrs[e].prefix = n.prefix, t.attrs[e].name = n.name, t.attrs[e].namespace = n.namespace);
  }
}
function zy(t) {
  const e = Wy.get(t.tagName);
  e != null && (t.tagName = e, t.tagID = Ni(t.tagName));
}
function Xy(t, e) {
  return e === M.MATHML && (t === c.MI || t === c.MO || t === c.MN || t === c.MS || t === c.MTEXT);
}
function Jy(t, e, n) {
  if (e === M.MATHML && t === c.ANNOTATION_XML) {
    for (let r = 0; r < n.length; r++)
      if (n[r].name === Qt.ENCODING) {
        const s = n[r].value.toLowerCase();
        return s === _l.TEXT_HTML || s === _l.APPLICATION_XML;
      }
  }
  return e === M.SVG && (t === c.FOREIGN_OBJECT || t === c.DESC || t === c.TITLE);
}
function Zy(t, e, n, r) {
  return (!r || r === M.HTML) && Jy(t, e, n) || (!r || r === M.MATHML) && Xy(t, e);
}
const ev = "hidden", tv = 8, nv = 3;
var I;
(function(t) {
  t[t.INITIAL = 0] = "INITIAL", t[t.BEFORE_HTML = 1] = "BEFORE_HTML", t[t.BEFORE_HEAD = 2] = "BEFORE_HEAD", t[t.IN_HEAD = 3] = "IN_HEAD", t[t.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", t[t.AFTER_HEAD = 5] = "AFTER_HEAD", t[t.IN_BODY = 6] = "IN_BODY", t[t.TEXT = 7] = "TEXT", t[t.IN_TABLE = 8] = "IN_TABLE", t[t.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", t[t.IN_CAPTION = 10] = "IN_CAPTION", t[t.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", t[t.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", t[t.IN_ROW = 13] = "IN_ROW", t[t.IN_CELL = 14] = "IN_CELL", t[t.IN_SELECT = 15] = "IN_SELECT", t[t.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", t[t.IN_TEMPLATE = 17] = "IN_TEMPLATE", t[t.AFTER_BODY = 18] = "AFTER_BODY", t[t.IN_FRAMESET = 19] = "IN_FRAMESET", t[t.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", t[t.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", t[t.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(I || (I = {}));
const rv = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, Mh = /* @__PURE__ */ new Set([c.TABLE, c.TBODY, c.TFOOT, c.THEAD, c.TR]), El = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: Nn,
  onParseError: null
};
class sv {
  constructor(e, n, r = null, s = null) {
    this.fragmentContext = r, this.scriptHandler = s, this.currentToken = null, this.stopped = !1, this.insertionMode = I.INITIAL, this.originalInsertionMode = I.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = Ke(Ke({}, El), e), this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = n != null ? n : this.treeAdapter.createDocument(), this.tokenizer = new Ry(this.options, this), this.activeFormattingElements = new ky(this.treeAdapter), this.fragmentContextID = r ? Ni(this.treeAdapter.getTagName(r)) : c.UNKNOWN, this._setContextModes(r != null ? r : this.document, this.fragmentContextID), this.openElements = new Py(this.document, this.treeAdapter, this);
  }
  // API
  static parse(e, n) {
    const r = new this(n);
    return r.tokenizer.write(e, !0), r.document;
  }
  static getFragmentParser(e, n) {
    const r = Ke(Ke({}, El), n);
    e != null || (e = r.treeAdapter.createElement(N.TEMPLATE, M.HTML, []));
    const s = r.treeAdapter.createElement("documentmock", M.HTML, []), i = new this(r, s, e);
    return i.fragmentContextID === c.TEMPLATE && i.tmplInsertionModeStack.unshift(I.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
  }
  getFragment() {
    const e = this.treeAdapter.getFirstChild(this.document), n = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(e, n), n;
  }
  //Errors
  _err(e, n, r) {
    var s;
    if (!this.onParseError)
      return;
    const i = (s = e.location) !== null && s !== void 0 ? s : rv, a = {
      code: n,
      startLine: i.startLine,
      startCol: i.startCol,
      startOffset: i.startOffset,
      endLine: r ? i.startLine : i.endLine,
      endCol: r ? i.startCol : i.endCol,
      endOffset: r ? i.startOffset : i.endOffset
    };
    this.onParseError(a);
  }
  //Stack events
  onItemPush(e, n, r) {
    var s, i;
    (i = (s = this.treeAdapter).onItemPush) === null || i === void 0 || i.call(s, e), r && this.openElements.stackTop > 0 && this._setContextModes(e, n);
  }
  onItemPop(e, n) {
    var r, s;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (s = (r = this.treeAdapter).onItemPop) === null || s === void 0 || s.call(r, e, this.openElements.current), n) {
      let i, a;
      this.openElements.stackTop === 0 && this.fragmentContext ? (i = this.fragmentContext, a = this.fragmentContextID) : { current: i, currentTagId: a } = this.openElements, this._setContextModes(i, a);
    }
  }
  _setContextModes(e, n) {
    const r = e === this.document || this.treeAdapter.getNamespaceURI(e) === M.HTML;
    this.currentNotInHTML = !r, this.tokenizer.inForeignNode = !r && !this._isIntegrationPoint(n, e);
  }
  _switchToTextParsing(e, n) {
    this._insertElement(e, M.HTML), this.tokenizer.state = n, this.originalInsertionMode = this.insertionMode, this.insertionMode = I.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = I.TEXT, this.originalInsertionMode = I.IN_BODY, this.tokenizer.state = Xe.PLAINTEXT;
  }
  //Fragment parsing
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let e = this.fragmentContext;
    for (; e; ) {
      if (this.treeAdapter.getTagName(e) === N.FORM) {
        this.formElement = e;
        break;
      }
      e = this.treeAdapter.getParentNode(e);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== M.HTML))
      switch (this.fragmentContextID) {
        case c.TITLE:
        case c.TEXTAREA: {
          this.tokenizer.state = Xe.RCDATA;
          break;
        }
        case c.STYLE:
        case c.XMP:
        case c.IFRAME:
        case c.NOEMBED:
        case c.NOFRAMES:
        case c.NOSCRIPT: {
          this.tokenizer.state = Xe.RAWTEXT;
          break;
        }
        case c.SCRIPT: {
          this.tokenizer.state = Xe.SCRIPT_DATA;
          break;
        }
        case c.PLAINTEXT: {
          this.tokenizer.state = Xe.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  _setDocumentType(e) {
    const n = e.name || "", r = e.publicId || "", s = e.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, n, r, s), e.location) {
      const a = this.treeAdapter.getChildNodes(this.document).find((o) => this.treeAdapter.isDocumentTypeNode(o));
      a && this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
    }
  }
  _attachElementToTree(e, n) {
    if (this.options.sourceCodeLocationInfo) {
      const r = n && cs(Ke({}, n), {
        startTag: n
      });
      this.treeAdapter.setNodeSourceCodeLocation(e, r);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(e);
    else {
      const r = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(r, e);
    }
  }
  _appendElement(e, n) {
    const r = this.treeAdapter.createElement(e.tagName, n, e.attrs);
    this._attachElementToTree(r, e.location);
  }
  _insertElement(e, n) {
    const r = this.treeAdapter.createElement(e.tagName, n, e.attrs);
    this._attachElementToTree(r, e.location), this.openElements.push(r, e.tagID);
  }
  _insertFakeElement(e, n) {
    const r = this.treeAdapter.createElement(e, M.HTML, []);
    this._attachElementToTree(r, null), this.openElements.push(r, n);
  }
  _insertTemplate(e) {
    const n = this.treeAdapter.createElement(e.tagName, M.HTML, e.attrs), r = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(n, r), this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, null);
  }
  _insertFakeRootElement() {
    const e = this.treeAdapter.createElement(N.HTML, M.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, c.HTML);
  }
  _appendCommentNode(e, n) {
    const r = this.treeAdapter.createCommentNode(e.data);
    this.treeAdapter.appendChild(n, r), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, e.location);
  }
  _insertCharacters(e) {
    let n, r;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: n, beforeElement: r } = this._findFosterParentingLocation(), r ? this.treeAdapter.insertTextBefore(n, e.chars, r) : this.treeAdapter.insertText(n, e.chars)) : (n = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(n, e.chars)), !e.location)
      return;
    const s = this.treeAdapter.getChildNodes(n), i = r ? s.lastIndexOf(r) : s.length, a = s[i - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(a)) {
      const { endLine: u, endCol: l, endOffset: d } = e.location;
      this.treeAdapter.updateNodeSourceCodeLocation(a, { endLine: u, endCol: l, endOffset: d });
    } else
      this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
  }
  _adoptNodes(e, n) {
    for (let r = this.treeAdapter.getFirstChild(e); r; r = this.treeAdapter.getFirstChild(e))
      this.treeAdapter.detachNode(r), this.treeAdapter.appendChild(n, r);
  }
  _setEndLocation(e, n) {
    if (this.treeAdapter.getNodeSourceCodeLocation(e) && n.location) {
      const r = n.location, s = this.treeAdapter.getTagName(e), i = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        n.type === pe.END_TAG && s === n.tagName ? {
          endTag: Ke({}, r),
          endLine: r.endLine,
          endCol: r.endCol,
          endOffset: r.endOffset
        } : {
          endLine: r.startLine,
          endCol: r.startCol,
          endOffset: r.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(e, i);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(e) {
    if (!this.currentNotInHTML)
      return !1;
    let n, r;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (n = this.fragmentContext, r = this.fragmentContextID) : { current: n, currentTagId: r } = this.openElements, e.tagID === c.SVG && this.treeAdapter.getTagName(n) === N.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(n) === M.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (e.tagID === c.MGLYPH || e.tagID === c.MALIGNMARK) && !this._isIntegrationPoint(r, n, M.HTML)
    );
  }
  _processToken(e) {
    switch (e.type) {
      case pe.CHARACTER: {
        this.onCharacter(e);
        break;
      }
      case pe.NULL_CHARACTER: {
        this.onNullCharacter(e);
        break;
      }
      case pe.COMMENT: {
        this.onComment(e);
        break;
      }
      case pe.DOCTYPE: {
        this.onDoctype(e);
        break;
      }
      case pe.START_TAG: {
        this._processStartTag(e);
        break;
      }
      case pe.END_TAG: {
        this.onEndTag(e);
        break;
      }
      case pe.EOF: {
        this.onEof(e);
        break;
      }
      case pe.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(e);
        break;
      }
    }
  }
  //Integration points
  _isIntegrationPoint(e, n, r) {
    const s = this.treeAdapter.getNamespaceURI(n), i = this.treeAdapter.getAttrList(n);
    return Zy(e, s, i, r);
  }
  //Active formatting elements reconstruction
  _reconstructActiveFormattingElements() {
    const e = this.activeFormattingElements.entries.length;
    if (e) {
      const n = this.activeFormattingElements.entries.findIndex((s) => s.type === mt.Marker || this.openElements.contains(s.element)), r = n < 0 ? e - 1 : n - 1;
      for (let s = r; s >= 0; s--) {
        const i = this.activeFormattingElements.entries[s];
        this._insertElement(i.token, this.treeAdapter.getNamespaceURI(i.element)), i.element = this.openElements.current;
      }
    }
  }
  //Close elements
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = I.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(c.P), this.openElements.popUntilTagNamePopped(c.P);
  }
  //Insertion modes
  _resetInsertionMode() {
    for (let e = this.openElements.stackTop; e >= 0; e--)
      switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
        case c.TR:
          this.insertionMode = I.IN_ROW;
          return;
        case c.TBODY:
        case c.THEAD:
        case c.TFOOT:
          this.insertionMode = I.IN_TABLE_BODY;
          return;
        case c.CAPTION:
          this.insertionMode = I.IN_CAPTION;
          return;
        case c.COLGROUP:
          this.insertionMode = I.IN_COLUMN_GROUP;
          return;
        case c.TABLE:
          this.insertionMode = I.IN_TABLE;
          return;
        case c.BODY:
          this.insertionMode = I.IN_BODY;
          return;
        case c.FRAMESET:
          this.insertionMode = I.IN_FRAMESET;
          return;
        case c.SELECT:
          this._resetInsertionModeForSelect(e);
          return;
        case c.TEMPLATE:
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        case c.HTML:
          this.insertionMode = this.headElement ? I.AFTER_HEAD : I.BEFORE_HEAD;
          return;
        case c.TD:
        case c.TH:
          if (e > 0) {
            this.insertionMode = I.IN_CELL;
            return;
          }
          break;
        case c.HEAD:
          if (e > 0) {
            this.insertionMode = I.IN_HEAD;
            return;
          }
          break;
      }
    this.insertionMode = I.IN_BODY;
  }
  _resetInsertionModeForSelect(e) {
    if (e > 0)
      for (let n = e - 1; n > 0; n--) {
        const r = this.openElements.tagIDs[n];
        if (r === c.TEMPLATE)
          break;
        if (r === c.TABLE) {
          this.insertionMode = I.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = I.IN_SELECT;
  }
  //Foster parenting
  _isElementCausesFosterParenting(e) {
    return Mh.has(e);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let e = this.openElements.stackTop; e >= 0; e--) {
      const n = this.openElements.items[e];
      switch (this.openElements.tagIDs[e]) {
        case c.TEMPLATE:
          if (this.treeAdapter.getNamespaceURI(n) === M.HTML)
            return { parent: this.treeAdapter.getTemplateContent(n), beforeElement: null };
          break;
        case c.TABLE: {
          const r = this.treeAdapter.getParentNode(n);
          return r ? { parent: r, beforeElement: n } : { parent: this.openElements.items[e - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(e) {
    const n = this._findFosterParentingLocation();
    n.beforeElement ? this.treeAdapter.insertBefore(n.parent, e, n.beforeElement) : this.treeAdapter.appendChild(n.parent, e);
  }
  //Special elements
  _isSpecialElement(e, n) {
    const r = this.treeAdapter.getNamespaceURI(e);
    return yy[r].has(n);
  }
  onCharacter(e) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      PS(this, e);
      return;
    }
    switch (this.insertionMode) {
      case I.INITIAL:
        lr(this, e);
        break;
      case I.BEFORE_HTML:
        Rr(this, e);
        break;
      case I.BEFORE_HEAD:
        Nr(this, e);
        break;
      case I.IN_HEAD:
        wr(this, e);
        break;
      case I.IN_HEAD_NO_SCRIPT:
        Lr(this, e);
        break;
      case I.AFTER_HEAD:
        Dr(this, e);
        break;
      case I.IN_BODY:
      case I.IN_CAPTION:
      case I.IN_CELL:
      case I.IN_TEMPLATE:
        kh(this, e);
        break;
      case I.TEXT:
      case I.IN_SELECT:
      case I.IN_SELECT_IN_TABLE:
        this._insertCharacters(e);
        break;
      case I.IN_TABLE:
      case I.IN_TABLE_BODY:
      case I.IN_ROW:
        oa(this, e);
        break;
      case I.IN_TABLE_TEXT:
        Vh(this, e);
        break;
      case I.IN_COLUMN_GROUP:
        ni(this, e);
        break;
      case I.AFTER_BODY:
        ri(this, e);
        break;
      case I.AFTER_AFTER_BODY:
        Ds(this, e);
        break;
    }
  }
  onNullCharacter(e) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      MS(this, e);
      return;
    }
    switch (this.insertionMode) {
      case I.INITIAL:
        lr(this, e);
        break;
      case I.BEFORE_HTML:
        Rr(this, e);
        break;
      case I.BEFORE_HEAD:
        Nr(this, e);
        break;
      case I.IN_HEAD:
        wr(this, e);
        break;
      case I.IN_HEAD_NO_SCRIPT:
        Lr(this, e);
        break;
      case I.AFTER_HEAD:
        Dr(this, e);
        break;
      case I.TEXT:
        this._insertCharacters(e);
        break;
      case I.IN_TABLE:
      case I.IN_TABLE_BODY:
      case I.IN_ROW:
        oa(this, e);
        break;
      case I.IN_COLUMN_GROUP:
        ni(this, e);
        break;
      case I.AFTER_BODY:
        ri(this, e);
        break;
      case I.AFTER_AFTER_BODY:
        Ds(this, e);
        break;
    }
  }
  onComment(e) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      Ba(this, e);
      return;
    }
    switch (this.insertionMode) {
      case I.INITIAL:
      case I.BEFORE_HTML:
      case I.BEFORE_HEAD:
      case I.IN_HEAD:
      case I.IN_HEAD_NO_SCRIPT:
      case I.AFTER_HEAD:
      case I.IN_BODY:
      case I.IN_TABLE:
      case I.IN_CAPTION:
      case I.IN_COLUMN_GROUP:
      case I.IN_TABLE_BODY:
      case I.IN_ROW:
      case I.IN_CELL:
      case I.IN_SELECT:
      case I.IN_SELECT_IN_TABLE:
      case I.IN_TEMPLATE:
      case I.IN_FRAMESET:
      case I.AFTER_FRAMESET:
        Ba(this, e);
        break;
      case I.IN_TABLE_TEXT:
        dr(this, e);
        break;
      case I.AFTER_BODY:
        dv(this, e);
        break;
      case I.AFTER_AFTER_BODY:
      case I.AFTER_AFTER_FRAMESET:
        fv(this, e);
        break;
    }
  }
  onDoctype(e) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case I.INITIAL:
        hv(this, e);
        break;
      case I.BEFORE_HEAD:
      case I.IN_HEAD:
      case I.IN_HEAD_NO_SCRIPT:
      case I.AFTER_HEAD:
        this._err(e, L.misplacedDoctype);
        break;
      case I.IN_TABLE_TEXT:
        dr(this, e);
        break;
    }
  }
  onStartTag(e) {
    this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, L.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   */
  _processStartTag(e) {
    this.shouldProcessStartTagTokenInForeignContent(e) ? kS(this, e) : this._startTagOutsideForeignContent(e);
  }
  _startTagOutsideForeignContent(e) {
    switch (this.insertionMode) {
      case I.INITIAL:
        lr(this, e);
        break;
      case I.BEFORE_HTML:
        pv(this, e);
        break;
      case I.BEFORE_HEAD:
        _v(this, e);
        break;
      case I.IN_HEAD:
        Tt(this, e);
        break;
      case I.IN_HEAD_NO_SCRIPT:
        bv(this, e);
        break;
      case I.AFTER_HEAD:
        Iv(this, e);
        break;
      case I.IN_BODY:
        Ge(this, e);
        break;
      case I.IN_TABLE:
        $n(this, e);
        break;
      case I.IN_TABLE_TEXT:
        dr(this, e);
        break;
      case I.IN_CAPTION:
        ES(this, e);
        break;
      case I.IN_COLUMN_GROUP:
        Ou(this, e);
        break;
      case I.IN_TABLE_BODY:
        Di(this, e);
        break;
      case I.IN_ROW:
        Mi(this, e);
        break;
      case I.IN_CELL:
        TS(this, e);
        break;
      case I.IN_SELECT:
        $h(this, e);
        break;
      case I.IN_SELECT_IN_TABLE:
        AS(this, e);
        break;
      case I.IN_TEMPLATE:
        vS(this, e);
        break;
      case I.AFTER_BODY:
        CS(this, e);
        break;
      case I.IN_FRAMESET:
        OS(this, e);
        break;
      case I.AFTER_FRAMESET:
        NS(this, e);
        break;
      case I.AFTER_AFTER_BODY:
        LS(this, e);
        break;
      case I.AFTER_AFTER_FRAMESET:
        DS(this, e);
        break;
    }
  }
  onEndTag(e) {
    this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? FS(this, e) : this._endTagOutsideForeignContent(e);
  }
  _endTagOutsideForeignContent(e) {
    switch (this.insertionMode) {
      case I.INITIAL:
        lr(this, e);
        break;
      case I.BEFORE_HTML:
        mv(this, e);
        break;
      case I.BEFORE_HEAD:
        Ev(this, e);
        break;
      case I.IN_HEAD:
        gv(this, e);
        break;
      case I.IN_HEAD_NO_SCRIPT:
        Tv(this, e);
        break;
      case I.AFTER_HEAD:
        Av(this, e);
        break;
      case I.IN_BODY:
        Li(this, e);
        break;
      case I.TEXT:
        uS(this, e);
        break;
      case I.IN_TABLE:
        Yr(this, e);
        break;
      case I.IN_TABLE_TEXT:
        dr(this, e);
        break;
      case I.IN_CAPTION:
        gS(this, e);
        break;
      case I.IN_COLUMN_GROUP:
        bS(this, e);
        break;
      case I.IN_TABLE_BODY:
        Ua(this, e);
        break;
      case I.IN_ROW:
        qh(this, e);
        break;
      case I.IN_CELL:
        IS(this, e);
        break;
      case I.IN_SELECT:
        Yh(this, e);
        break;
      case I.IN_SELECT_IN_TABLE:
        yS(this, e);
        break;
      case I.IN_TEMPLATE:
        SS(this, e);
        break;
      case I.AFTER_BODY:
        Wh(this, e);
        break;
      case I.IN_FRAMESET:
        RS(this, e);
        break;
      case I.AFTER_FRAMESET:
        wS(this, e);
        break;
      case I.AFTER_AFTER_BODY:
        Ds(this, e);
        break;
    }
  }
  onEof(e) {
    switch (this.insertionMode) {
      case I.INITIAL:
        lr(this, e);
        break;
      case I.BEFORE_HTML:
        Rr(this, e);
        break;
      case I.BEFORE_HEAD:
        Nr(this, e);
        break;
      case I.IN_HEAD:
        wr(this, e);
        break;
      case I.IN_HEAD_NO_SCRIPT:
        Lr(this, e);
        break;
      case I.AFTER_HEAD:
        Dr(this, e);
        break;
      case I.IN_BODY:
      case I.IN_TABLE:
      case I.IN_CAPTION:
      case I.IN_COLUMN_GROUP:
      case I.IN_TABLE_BODY:
      case I.IN_ROW:
      case I.IN_CELL:
      case I.IN_SELECT:
      case I.IN_SELECT_IN_TABLE:
        xh(this, e);
        break;
      case I.TEXT:
        oS(this, e);
        break;
      case I.IN_TABLE_TEXT:
        dr(this, e);
        break;
      case I.IN_TEMPLATE:
        Gh(this, e);
        break;
      case I.AFTER_BODY:
      case I.IN_FRAMESET:
      case I.AFTER_FRAMESET:
      case I.AFTER_AFTER_BODY:
      case I.AFTER_AFTER_FRAMESET:
        Cu(this, e);
        break;
    }
  }
  onWhitespaceCharacter(e) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === E.LINE_FEED)) {
      if (e.chars.length === 1)
        return;
      e.chars = e.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(e);
      return;
    }
    switch (this.insertionMode) {
      case I.IN_HEAD:
      case I.IN_HEAD_NO_SCRIPT:
      case I.AFTER_HEAD:
      case I.TEXT:
      case I.IN_COLUMN_GROUP:
      case I.IN_SELECT:
      case I.IN_SELECT_IN_TABLE:
      case I.IN_FRAMESET:
      case I.AFTER_FRAMESET:
        this._insertCharacters(e);
        break;
      case I.IN_BODY:
      case I.IN_CAPTION:
      case I.IN_CELL:
      case I.IN_TEMPLATE:
      case I.AFTER_BODY:
      case I.AFTER_AFTER_BODY:
      case I.AFTER_AFTER_FRAMESET:
        Ph(this, e);
        break;
      case I.IN_TABLE:
      case I.IN_TABLE_BODY:
      case I.IN_ROW:
        oa(this, e);
        break;
      case I.IN_TABLE_TEXT:
        Hh(this, e);
        break;
    }
  }
}
function iv(t, e) {
  let n = t.activeFormattingElements.getElementEntryInScopeWithTagName(e.tagName);
  return n ? t.openElements.contains(n.element) ? t.openElements.hasInScope(e.tagID) || (n = null) : (t.activeFormattingElements.removeEntry(n), n = null) : Uh(t, e), n;
}
function av(t, e) {
  let n = null, r = t.openElements.stackTop;
  for (; r >= 0; r--) {
    const s = t.openElements.items[r];
    if (s === e.element)
      break;
    t._isSpecialElement(s, t.openElements.tagIDs[r]) && (n = s);
  }
  return n || (t.openElements.shortenToLength(r < 0 ? 0 : r), t.activeFormattingElements.removeEntry(e)), n;
}
function uv(t, e, n) {
  let r = e, s = t.openElements.getCommonAncestor(e);
  for (let i = 0, a = s; a !== n; i++, a = s) {
    s = t.openElements.getCommonAncestor(a);
    const o = t.activeFormattingElements.getElementEntry(a), u = o && i >= nv;
    !o || u ? (u && t.activeFormattingElements.removeEntry(o), t.openElements.remove(a)) : (a = ov(t, o), r === e && (t.activeFormattingElements.bookmark = o), t.treeAdapter.detachNode(r), t.treeAdapter.appendChild(a, r), r = a);
  }
  return r;
}
function ov(t, e) {
  const n = t.treeAdapter.getNamespaceURI(e.element), r = t.treeAdapter.createElement(e.token.tagName, n, e.token.attrs);
  return t.openElements.replace(e.element, r), e.element = r, r;
}
function cv(t, e, n) {
  const r = t.treeAdapter.getTagName(e), s = Ni(r);
  if (t._isElementCausesFosterParenting(s))
    t._fosterParentElement(n);
  else {
    const i = t.treeAdapter.getNamespaceURI(e);
    s === c.TEMPLATE && i === M.HTML && (e = t.treeAdapter.getTemplateContent(e)), t.treeAdapter.appendChild(e, n);
  }
}
function lv(t, e, n) {
  const r = t.treeAdapter.getNamespaceURI(n.element), { token: s } = n, i = t.treeAdapter.createElement(s.tagName, r, s.attrs);
  t._adoptNodes(e, i), t.treeAdapter.appendChild(e, i), t.activeFormattingElements.insertElementAfterBookmark(i, s), t.activeFormattingElements.removeEntry(n), t.openElements.remove(n.element), t.openElements.insertAfter(e, i, s.tagID);
}
function Su(t, e) {
  for (let n = 0; n < tv; n++) {
    const r = iv(t, e);
    if (!r)
      break;
    const s = av(t, r);
    if (!s)
      break;
    t.activeFormattingElements.bookmark = r;
    const i = uv(t, s, r.element), a = t.openElements.getCommonAncestor(r.element);
    t.treeAdapter.detachNode(i), a && cv(t, a, i), lv(t, s, r);
  }
}
function Ba(t, e) {
  t._appendCommentNode(e, t.openElements.currentTmplContentOrNode);
}
function dv(t, e) {
  t._appendCommentNode(e, t.openElements.items[0]);
}
function fv(t, e) {
  t._appendCommentNode(e, t.document);
}
function Cu(t, e) {
  if (t.stopped = !0, e.location) {
    const n = t.fragmentContext ? 0 : 2;
    for (let r = t.openElements.stackTop; r >= n; r--)
      t._setEndLocation(t.openElements.items[r], e);
    if (!t.fragmentContext && t.openElements.stackTop >= 0) {
      const r = t.openElements.items[0], s = t.treeAdapter.getNodeSourceCodeLocation(r);
      if (s && !s.endTag && (t._setEndLocation(r, e), t.openElements.stackTop >= 1)) {
        const i = t.openElements.items[1], a = t.treeAdapter.getNodeSourceCodeLocation(i);
        a && !a.endTag && t._setEndLocation(i, e);
      }
    }
  }
}
function hv(t, e) {
  t._setDocumentType(e);
  const n = e.forceQuirks ? tt.QUIRKS : jy(e);
  Vy(e) || t._err(e, L.nonConformingDoctype), t.treeAdapter.setDocumentMode(t.document, n), t.insertionMode = I.BEFORE_HTML;
}
function lr(t, e) {
  t._err(e, L.missingDoctype, !0), t.treeAdapter.setDocumentMode(t.document, tt.QUIRKS), t.insertionMode = I.BEFORE_HTML, t._processToken(e);
}
function pv(t, e) {
  e.tagID === c.HTML ? (t._insertElement(e, M.HTML), t.insertionMode = I.BEFORE_HEAD) : Rr(t, e);
}
function mv(t, e) {
  const n = e.tagID;
  (n === c.HTML || n === c.HEAD || n === c.BODY || n === c.BR) && Rr(t, e);
}
function Rr(t, e) {
  t._insertFakeRootElement(), t.insertionMode = I.BEFORE_HEAD, t._processToken(e);
}
function _v(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.HEAD: {
      t._insertElement(e, M.HTML), t.headElement = t.openElements.current, t.insertionMode = I.IN_HEAD;
      break;
    }
    default:
      Nr(t, e);
  }
}
function Ev(t, e) {
  const n = e.tagID;
  n === c.HEAD || n === c.BODY || n === c.HTML || n === c.BR ? Nr(t, e) : t._err(e, L.endTagWithoutMatchingOpenElement);
}
function Nr(t, e) {
  t._insertFakeElement(N.HEAD, c.HEAD), t.headElement = t.openElements.current, t.insertionMode = I.IN_HEAD, t._processToken(e);
}
function Tt(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META: {
      t._appendElement(e, M.HTML), e.ackSelfClosing = !0;
      break;
    }
    case c.TITLE: {
      t._switchToTextParsing(e, Xe.RCDATA);
      break;
    }
    case c.NOSCRIPT: {
      t.options.scriptingEnabled ? t._switchToTextParsing(e, Xe.RAWTEXT) : (t._insertElement(e, M.HTML), t.insertionMode = I.IN_HEAD_NO_SCRIPT);
      break;
    }
    case c.NOFRAMES:
    case c.STYLE: {
      t._switchToTextParsing(e, Xe.RAWTEXT);
      break;
    }
    case c.SCRIPT: {
      t._switchToTextParsing(e, Xe.SCRIPT_DATA);
      break;
    }
    case c.TEMPLATE: {
      t._insertTemplate(e), t.activeFormattingElements.insertMarker(), t.framesetOk = !1, t.insertionMode = I.IN_TEMPLATE, t.tmplInsertionModeStack.unshift(I.IN_TEMPLATE);
      break;
    }
    case c.HEAD: {
      t._err(e, L.misplacedStartTagForHeadElement);
      break;
    }
    default:
      wr(t, e);
  }
}
function gv(t, e) {
  switch (e.tagID) {
    case c.HEAD: {
      t.openElements.pop(), t.insertionMode = I.AFTER_HEAD;
      break;
    }
    case c.BODY:
    case c.BR:
    case c.HTML: {
      wr(t, e);
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
    default:
      t._err(e, L.endTagWithoutMatchingOpenElement);
  }
}
function vn(t, e) {
  t.openElements.tmplCount > 0 ? (t.openElements.generateImpliedEndTagsThoroughly(), t.openElements.currentTagId !== c.TEMPLATE && t._err(e, L.closingOfElementWithOpenChildElements), t.openElements.popUntilTagNamePopped(c.TEMPLATE), t.activeFormattingElements.clearToLastMarker(), t.tmplInsertionModeStack.shift(), t._resetInsertionMode()) : t._err(e, L.endTagWithoutMatchingOpenElement);
}
function wr(t, e) {
  t.openElements.pop(), t.insertionMode = I.AFTER_HEAD, t._processToken(e);
}
function bv(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.BASEFONT:
    case c.BGSOUND:
    case c.HEAD:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.STYLE: {
      Tt(t, e);
      break;
    }
    case c.NOSCRIPT: {
      t._err(e, L.nestedNoscriptInHead);
      break;
    }
    default:
      Lr(t, e);
  }
}
function Tv(t, e) {
  switch (e.tagID) {
    case c.NOSCRIPT: {
      t.openElements.pop(), t.insertionMode = I.IN_HEAD;
      break;
    }
    case c.BR: {
      Lr(t, e);
      break;
    }
    default:
      t._err(e, L.endTagWithoutMatchingOpenElement);
  }
}
function Lr(t, e) {
  const n = e.type === pe.EOF ? L.openElementsLeftAfterEof : L.disallowedContentInNoscriptInHead;
  t._err(e, n), t.openElements.pop(), t.insertionMode = I.IN_HEAD, t._processToken(e);
}
function Iv(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.BODY: {
      t._insertElement(e, M.HTML), t.framesetOk = !1, t.insertionMode = I.IN_BODY;
      break;
    }
    case c.FRAMESET: {
      t._insertElement(e, M.HTML), t.insertionMode = I.IN_FRAMESET;
      break;
    }
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.SCRIPT:
    case c.STYLE:
    case c.TEMPLATE:
    case c.TITLE: {
      t._err(e, L.abandonedHeadElementChild), t.openElements.push(t.headElement, c.HEAD), Tt(t, e), t.openElements.remove(t.headElement);
      break;
    }
    case c.HEAD: {
      t._err(e, L.misplacedStartTagForHeadElement);
      break;
    }
    default:
      Dr(t, e);
  }
}
function Av(t, e) {
  switch (e.tagID) {
    case c.BODY:
    case c.HTML:
    case c.BR: {
      Dr(t, e);
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
    default:
      t._err(e, L.endTagWithoutMatchingOpenElement);
  }
}
function Dr(t, e) {
  t._insertFakeElement(N.BODY, c.BODY), t.insertionMode = I.IN_BODY, wi(t, e);
}
function wi(t, e) {
  switch (e.type) {
    case pe.CHARACTER: {
      kh(t, e);
      break;
    }
    case pe.WHITESPACE_CHARACTER: {
      Ph(t, e);
      break;
    }
    case pe.COMMENT: {
      Ba(t, e);
      break;
    }
    case pe.START_TAG: {
      Ge(t, e);
      break;
    }
    case pe.END_TAG: {
      Li(t, e);
      break;
    }
    case pe.EOF: {
      xh(t, e);
      break;
    }
  }
}
function Ph(t, e) {
  t._reconstructActiveFormattingElements(), t._insertCharacters(e);
}
function kh(t, e) {
  t._reconstructActiveFormattingElements(), t._insertCharacters(e), t.framesetOk = !1;
}
function yv(t, e) {
  t.openElements.tmplCount === 0 && t.treeAdapter.adoptAttributes(t.openElements.items[0], e.attrs);
}
function vv(t, e) {
  const n = t.openElements.tryPeekProperlyNestedBodyElement();
  n && t.openElements.tmplCount === 0 && (t.framesetOk = !1, t.treeAdapter.adoptAttributes(n, e.attrs));
}
function Sv(t, e) {
  const n = t.openElements.tryPeekProperlyNestedBodyElement();
  t.framesetOk && n && (t.treeAdapter.detachNode(n), t.openElements.popAllUpToHtmlElement(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_FRAMESET);
}
function Cv(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML);
}
function Ov(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), yh(t.openElements.currentTagId) && t.openElements.pop(), t._insertElement(e, M.HTML);
}
function Rv(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML), t.skipNextNewLine = !0, t.framesetOk = !1;
}
function Nv(t, e) {
  const n = t.openElements.tmplCount > 0;
  (!t.formElement || n) && (t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML), n || (t.formElement = t.openElements.current));
}
function wv(t, e) {
  t.framesetOk = !1;
  const n = e.tagID;
  for (let r = t.openElements.stackTop; r >= 0; r--) {
    const s = t.openElements.tagIDs[r];
    if (n === c.LI && s === c.LI || (n === c.DD || n === c.DT) && (s === c.DD || s === c.DT)) {
      t.openElements.generateImpliedEndTagsWithExclusion(s), t.openElements.popUntilTagNamePopped(s);
      break;
    }
    if (s !== c.ADDRESS && s !== c.DIV && s !== c.P && t._isSpecialElement(t.openElements.items[r], s))
      break;
  }
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML);
}
function Lv(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML), t.tokenizer.state = Xe.PLAINTEXT;
}
function Dv(t, e) {
  t.openElements.hasInScope(c.BUTTON) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(c.BUTTON)), t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML), t.framesetOk = !1;
}
function Mv(t, e) {
  const n = t.activeFormattingElements.getElementEntryInScopeWithTagName(N.A);
  n && (Su(t, e), t.openElements.remove(n.element), t.activeFormattingElements.removeEntry(n)), t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML), t.activeFormattingElements.pushElement(t.openElements.current, e);
}
function Pv(t, e) {
  t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML), t.activeFormattingElements.pushElement(t.openElements.current, e);
}
function kv(t, e) {
  t._reconstructActiveFormattingElements(), t.openElements.hasInScope(c.NOBR) && (Su(t, e), t._reconstructActiveFormattingElements()), t._insertElement(e, M.HTML), t.activeFormattingElements.pushElement(t.openElements.current, e);
}
function Fv(t, e) {
  t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML), t.activeFormattingElements.insertMarker(), t.framesetOk = !1;
}
function Bv(t, e) {
  t.treeAdapter.getDocumentMode(t.document) !== tt.QUIRKS && t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._insertElement(e, M.HTML), t.framesetOk = !1, t.insertionMode = I.IN_TABLE;
}
function Fh(t, e) {
  t._reconstructActiveFormattingElements(), t._appendElement(e, M.HTML), t.framesetOk = !1, e.ackSelfClosing = !0;
}
function Bh(t) {
  const e = Ah(t, Qt.TYPE);
  return e != null && e.toLowerCase() === ev;
}
function Uv(t, e) {
  t._reconstructActiveFormattingElements(), t._appendElement(e, M.HTML), Bh(e) || (t.framesetOk = !1), e.ackSelfClosing = !0;
}
function xv(t, e) {
  t._appendElement(e, M.HTML), e.ackSelfClosing = !0;
}
function Hv(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._appendElement(e, M.HTML), t.framesetOk = !1, e.ackSelfClosing = !0;
}
function Vv(t, e) {
  e.tagName = N.IMG, e.tagID = c.IMG, Fh(t, e);
}
function jv(t, e) {
  t._insertElement(e, M.HTML), t.skipNextNewLine = !0, t.tokenizer.state = Xe.RCDATA, t.originalInsertionMode = t.insertionMode, t.framesetOk = !1, t.insertionMode = I.TEXT;
}
function qv(t, e) {
  t.openElements.hasInButtonScope(c.P) && t._closePElement(), t._reconstructActiveFormattingElements(), t.framesetOk = !1, t._switchToTextParsing(e, Xe.RAWTEXT);
}
function $v(t, e) {
  t.framesetOk = !1, t._switchToTextParsing(e, Xe.RAWTEXT);
}
function gl(t, e) {
  t._switchToTextParsing(e, Xe.RAWTEXT);
}
function Yv(t, e) {
  t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML), t.framesetOk = !1, t.insertionMode = t.insertionMode === I.IN_TABLE || t.insertionMode === I.IN_CAPTION || t.insertionMode === I.IN_TABLE_BODY || t.insertionMode === I.IN_ROW || t.insertionMode === I.IN_CELL ? I.IN_SELECT_IN_TABLE : I.IN_SELECT;
}
function Gv(t, e) {
  t.openElements.currentTagId === c.OPTION && t.openElements.pop(), t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML);
}
function Wv(t, e) {
  t.openElements.hasInScope(c.RUBY) && t.openElements.generateImpliedEndTags(), t._insertElement(e, M.HTML);
}
function Qv(t, e) {
  t.openElements.hasInScope(c.RUBY) && t.openElements.generateImpliedEndTagsWithExclusion(c.RTC), t._insertElement(e, M.HTML);
}
function Kv(t, e) {
  t._reconstructActiveFormattingElements(), Lh(e), vu(e), e.selfClosing ? t._appendElement(e, M.MATHML) : t._insertElement(e, M.MATHML), e.ackSelfClosing = !0;
}
function zv(t, e) {
  t._reconstructActiveFormattingElements(), Dh(e), vu(e), e.selfClosing ? t._appendElement(e, M.SVG) : t._insertElement(e, M.SVG), e.ackSelfClosing = !0;
}
function bl(t, e) {
  t._reconstructActiveFormattingElements(), t._insertElement(e, M.HTML);
}
function Ge(t, e) {
  switch (e.tagID) {
    case c.I:
    case c.S:
    case c.B:
    case c.U:
    case c.EM:
    case c.TT:
    case c.BIG:
    case c.CODE:
    case c.FONT:
    case c.SMALL:
    case c.STRIKE:
    case c.STRONG: {
      Pv(t, e);
      break;
    }
    case c.A: {
      Mv(t, e);
      break;
    }
    case c.H1:
    case c.H2:
    case c.H3:
    case c.H4:
    case c.H5:
    case c.H6: {
      Ov(t, e);
      break;
    }
    case c.P:
    case c.DL:
    case c.OL:
    case c.UL:
    case c.DIV:
    case c.DIR:
    case c.NAV:
    case c.MAIN:
    case c.MENU:
    case c.ASIDE:
    case c.CENTER:
    case c.FIGURE:
    case c.FOOTER:
    case c.HEADER:
    case c.HGROUP:
    case c.DIALOG:
    case c.DETAILS:
    case c.ADDRESS:
    case c.ARTICLE:
    case c.SECTION:
    case c.SUMMARY:
    case c.FIELDSET:
    case c.BLOCKQUOTE:
    case c.FIGCAPTION: {
      Cv(t, e);
      break;
    }
    case c.LI:
    case c.DD:
    case c.DT: {
      wv(t, e);
      break;
    }
    case c.BR:
    case c.IMG:
    case c.WBR:
    case c.AREA:
    case c.EMBED:
    case c.KEYGEN: {
      Fh(t, e);
      break;
    }
    case c.HR: {
      Hv(t, e);
      break;
    }
    case c.RB:
    case c.RTC: {
      Wv(t, e);
      break;
    }
    case c.RT:
    case c.RP: {
      Qv(t, e);
      break;
    }
    case c.PRE:
    case c.LISTING: {
      Rv(t, e);
      break;
    }
    case c.XMP: {
      qv(t, e);
      break;
    }
    case c.SVG: {
      zv(t, e);
      break;
    }
    case c.HTML: {
      yv(t, e);
      break;
    }
    case c.BASE:
    case c.LINK:
    case c.META:
    case c.STYLE:
    case c.TITLE:
    case c.SCRIPT:
    case c.BGSOUND:
    case c.BASEFONT:
    case c.TEMPLATE: {
      Tt(t, e);
      break;
    }
    case c.BODY: {
      vv(t, e);
      break;
    }
    case c.FORM: {
      Nv(t, e);
      break;
    }
    case c.NOBR: {
      kv(t, e);
      break;
    }
    case c.MATH: {
      Kv(t, e);
      break;
    }
    case c.TABLE: {
      Bv(t, e);
      break;
    }
    case c.INPUT: {
      Uv(t, e);
      break;
    }
    case c.PARAM:
    case c.TRACK:
    case c.SOURCE: {
      xv(t, e);
      break;
    }
    case c.IMAGE: {
      Vv(t, e);
      break;
    }
    case c.BUTTON: {
      Dv(t, e);
      break;
    }
    case c.APPLET:
    case c.OBJECT:
    case c.MARQUEE: {
      Fv(t, e);
      break;
    }
    case c.IFRAME: {
      $v(t, e);
      break;
    }
    case c.SELECT: {
      Yv(t, e);
      break;
    }
    case c.OPTION:
    case c.OPTGROUP: {
      Gv(t, e);
      break;
    }
    case c.NOEMBED: {
      gl(t, e);
      break;
    }
    case c.FRAMESET: {
      Sv(t, e);
      break;
    }
    case c.TEXTAREA: {
      jv(t, e);
      break;
    }
    case c.NOSCRIPT: {
      t.options.scriptingEnabled ? gl(t, e) : bl(t, e);
      break;
    }
    case c.PLAINTEXT: {
      Lv(t, e);
      break;
    }
    case c.COL:
    case c.TH:
    case c.TD:
    case c.TR:
    case c.HEAD:
    case c.FRAME:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.CAPTION:
    case c.COLGROUP:
      break;
    default:
      bl(t, e);
  }
}
function Xv(t, e) {
  if (t.openElements.hasInScope(c.BODY) && (t.insertionMode = I.AFTER_BODY, t.options.sourceCodeLocationInfo)) {
    const n = t.openElements.tryPeekProperlyNestedBodyElement();
    n && t._setEndLocation(n, e);
  }
}
function Jv(t, e) {
  t.openElements.hasInScope(c.BODY) && (t.insertionMode = I.AFTER_BODY, Wh(t, e));
}
function Zv(t, e) {
  const n = e.tagID;
  t.openElements.hasInScope(n) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(n));
}
function eS(t) {
  const e = t.openElements.tmplCount > 0, { formElement: n } = t;
  e || (t.formElement = null), (n || e) && t.openElements.hasInScope(c.FORM) && (t.openElements.generateImpliedEndTags(), e ? t.openElements.popUntilTagNamePopped(c.FORM) : n && t.openElements.remove(n));
}
function tS(t) {
  t.openElements.hasInButtonScope(c.P) || t._insertFakeElement(N.P, c.P), t._closePElement();
}
function nS(t) {
  t.openElements.hasInListItemScope(c.LI) && (t.openElements.generateImpliedEndTagsWithExclusion(c.LI), t.openElements.popUntilTagNamePopped(c.LI));
}
function rS(t, e) {
  const n = e.tagID;
  t.openElements.hasInScope(n) && (t.openElements.generateImpliedEndTagsWithExclusion(n), t.openElements.popUntilTagNamePopped(n));
}
function sS(t) {
  t.openElements.hasNumberedHeaderInScope() && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilNumberedHeaderPopped());
}
function iS(t, e) {
  const n = e.tagID;
  t.openElements.hasInScope(n) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(n), t.activeFormattingElements.clearToLastMarker());
}
function aS(t) {
  t._reconstructActiveFormattingElements(), t._insertFakeElement(N.BR, c.BR), t.openElements.pop(), t.framesetOk = !1;
}
function Uh(t, e) {
  const n = e.tagName, r = e.tagID;
  for (let s = t.openElements.stackTop; s > 0; s--) {
    const i = t.openElements.items[s], a = t.openElements.tagIDs[s];
    if (r === a && (r !== c.UNKNOWN || t.treeAdapter.getTagName(i) === n)) {
      t.openElements.generateImpliedEndTagsWithExclusion(r), t.openElements.stackTop >= s && t.openElements.shortenToLength(s);
      break;
    }
    if (t._isSpecialElement(i, a))
      break;
  }
}
function Li(t, e) {
  switch (e.tagID) {
    case c.A:
    case c.B:
    case c.I:
    case c.S:
    case c.U:
    case c.EM:
    case c.TT:
    case c.BIG:
    case c.CODE:
    case c.FONT:
    case c.NOBR:
    case c.SMALL:
    case c.STRIKE:
    case c.STRONG: {
      Su(t, e);
      break;
    }
    case c.P: {
      tS(t);
      break;
    }
    case c.DL:
    case c.UL:
    case c.OL:
    case c.DIR:
    case c.DIV:
    case c.NAV:
    case c.PRE:
    case c.MAIN:
    case c.MENU:
    case c.ASIDE:
    case c.BUTTON:
    case c.CENTER:
    case c.FIGURE:
    case c.FOOTER:
    case c.HEADER:
    case c.HGROUP:
    case c.DIALOG:
    case c.ADDRESS:
    case c.ARTICLE:
    case c.DETAILS:
    case c.SECTION:
    case c.SUMMARY:
    case c.LISTING:
    case c.FIELDSET:
    case c.BLOCKQUOTE:
    case c.FIGCAPTION: {
      Zv(t, e);
      break;
    }
    case c.LI: {
      nS(t);
      break;
    }
    case c.DD:
    case c.DT: {
      rS(t, e);
      break;
    }
    case c.H1:
    case c.H2:
    case c.H3:
    case c.H4:
    case c.H5:
    case c.H6: {
      sS(t);
      break;
    }
    case c.BR: {
      aS(t);
      break;
    }
    case c.BODY: {
      Xv(t, e);
      break;
    }
    case c.HTML: {
      Jv(t, e);
      break;
    }
    case c.FORM: {
      eS(t);
      break;
    }
    case c.APPLET:
    case c.OBJECT:
    case c.MARQUEE: {
      iS(t, e);
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
    default:
      Uh(t, e);
  }
}
function xh(t, e) {
  t.tmplInsertionModeStack.length > 0 ? Gh(t, e) : Cu(t, e);
}
function uS(t, e) {
  var n;
  e.tagID === c.SCRIPT && ((n = t.scriptHandler) === null || n === void 0 || n.call(t, t.openElements.current)), t.openElements.pop(), t.insertionMode = t.originalInsertionMode;
}
function oS(t, e) {
  t._err(e, L.eofInElementThatCanContainOnlyText), t.openElements.pop(), t.insertionMode = t.originalInsertionMode, t.onEof(e);
}
function oa(t, e) {
  if (Mh.has(t.openElements.currentTagId))
    switch (t.pendingCharacterTokens.length = 0, t.hasNonWhitespacePendingCharacterToken = !1, t.originalInsertionMode = t.insertionMode, t.insertionMode = I.IN_TABLE_TEXT, e.type) {
      case pe.CHARACTER: {
        Vh(t, e);
        break;
      }
      case pe.WHITESPACE_CHARACTER: {
        Hh(t, e);
        break;
      }
    }
  else
    os(t, e);
}
function cS(t, e) {
  t.openElements.clearBackToTableContext(), t.activeFormattingElements.insertMarker(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_CAPTION;
}
function lS(t, e) {
  t.openElements.clearBackToTableContext(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_COLUMN_GROUP;
}
function dS(t, e) {
  t.openElements.clearBackToTableContext(), t._insertFakeElement(N.COLGROUP, c.COLGROUP), t.insertionMode = I.IN_COLUMN_GROUP, Ou(t, e);
}
function fS(t, e) {
  t.openElements.clearBackToTableContext(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_TABLE_BODY;
}
function hS(t, e) {
  t.openElements.clearBackToTableContext(), t._insertFakeElement(N.TBODY, c.TBODY), t.insertionMode = I.IN_TABLE_BODY, Di(t, e);
}
function pS(t, e) {
  t.openElements.hasInTableScope(c.TABLE) && (t.openElements.popUntilTagNamePopped(c.TABLE), t._resetInsertionMode(), t._processStartTag(e));
}
function mS(t, e) {
  Bh(e) ? t._appendElement(e, M.HTML) : os(t, e), e.ackSelfClosing = !0;
}
function _S(t, e) {
  !t.formElement && t.openElements.tmplCount === 0 && (t._insertElement(e, M.HTML), t.formElement = t.openElements.current, t.openElements.pop());
}
function $n(t, e) {
  switch (e.tagID) {
    case c.TD:
    case c.TH:
    case c.TR: {
      hS(t, e);
      break;
    }
    case c.STYLE:
    case c.SCRIPT:
    case c.TEMPLATE: {
      Tt(t, e);
      break;
    }
    case c.COL: {
      dS(t, e);
      break;
    }
    case c.FORM: {
      _S(t, e);
      break;
    }
    case c.TABLE: {
      pS(t, e);
      break;
    }
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      fS(t, e);
      break;
    }
    case c.INPUT: {
      mS(t, e);
      break;
    }
    case c.CAPTION: {
      cS(t, e);
      break;
    }
    case c.COLGROUP: {
      lS(t, e);
      break;
    }
    default:
      os(t, e);
  }
}
function Yr(t, e) {
  switch (e.tagID) {
    case c.TABLE: {
      t.openElements.hasInTableScope(c.TABLE) && (t.openElements.popUntilTagNamePopped(c.TABLE), t._resetInsertionMode());
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TBODY:
    case c.TD:
    case c.TFOOT:
    case c.TH:
    case c.THEAD:
    case c.TR:
      break;
    default:
      os(t, e);
  }
}
function os(t, e) {
  const n = t.fosterParentingEnabled;
  t.fosterParentingEnabled = !0, wi(t, e), t.fosterParentingEnabled = n;
}
function Hh(t, e) {
  t.pendingCharacterTokens.push(e);
}
function Vh(t, e) {
  t.pendingCharacterTokens.push(e), t.hasNonWhitespacePendingCharacterToken = !0;
}
function dr(t, e) {
  let n = 0;
  if (t.hasNonWhitespacePendingCharacterToken)
    for (; n < t.pendingCharacterTokens.length; n++)
      os(t, t.pendingCharacterTokens[n]);
  else
    for (; n < t.pendingCharacterTokens.length; n++)
      t._insertCharacters(t.pendingCharacterTokens[n]);
  t.insertionMode = t.originalInsertionMode, t._processToken(e);
}
const jh = /* @__PURE__ */ new Set([c.CAPTION, c.COL, c.COLGROUP, c.TBODY, c.TD, c.TFOOT, c.TH, c.THEAD, c.TR]);
function ES(t, e) {
  const n = e.tagID;
  jh.has(n) ? t.openElements.hasInTableScope(c.CAPTION) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(c.CAPTION), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = I.IN_TABLE, $n(t, e)) : Ge(t, e);
}
function gS(t, e) {
  const n = e.tagID;
  switch (n) {
    case c.CAPTION:
    case c.TABLE: {
      t.openElements.hasInTableScope(c.CAPTION) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(c.CAPTION), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = I.IN_TABLE, n === c.TABLE && Yr(t, e));
      break;
    }
    case c.BODY:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TBODY:
    case c.TD:
    case c.TFOOT:
    case c.TH:
    case c.THEAD:
    case c.TR:
      break;
    default:
      Li(t, e);
  }
}
function Ou(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.COL: {
      t._appendElement(e, M.HTML), e.ackSelfClosing = !0;
      break;
    }
    case c.TEMPLATE: {
      Tt(t, e);
      break;
    }
    default:
      ni(t, e);
  }
}
function bS(t, e) {
  switch (e.tagID) {
    case c.COLGROUP: {
      t.openElements.currentTagId === c.COLGROUP && (t.openElements.pop(), t.insertionMode = I.IN_TABLE);
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
    case c.COL:
      break;
    default:
      ni(t, e);
  }
}
function ni(t, e) {
  t.openElements.currentTagId === c.COLGROUP && (t.openElements.pop(), t.insertionMode = I.IN_TABLE, t._processToken(e));
}
function Di(t, e) {
  switch (e.tagID) {
    case c.TR: {
      t.openElements.clearBackToTableBodyContext(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_ROW;
      break;
    }
    case c.TH:
    case c.TD: {
      t.openElements.clearBackToTableBodyContext(), t._insertFakeElement(N.TR, c.TR), t.insertionMode = I.IN_ROW, Mi(t, e);
      break;
    }
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      t.openElements.hasTableBodyContextInTableScope() && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE, $n(t, e));
      break;
    }
    default:
      $n(t, e);
  }
}
function Ua(t, e) {
  const n = e.tagID;
  switch (e.tagID) {
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      t.openElements.hasInTableScope(n) && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE);
      break;
    }
    case c.TABLE: {
      t.openElements.hasTableBodyContextInTableScope() && (t.openElements.clearBackToTableBodyContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE, Yr(t, e));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TD:
    case c.TH:
    case c.TR:
      break;
    default:
      Yr(t, e);
  }
}
function Mi(t, e) {
  switch (e.tagID) {
    case c.TH:
    case c.TD: {
      t.openElements.clearBackToTableRowContext(), t._insertElement(e, M.HTML), t.insertionMode = I.IN_CELL, t.activeFormattingElements.insertMarker();
      break;
    }
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.TR: {
      t.openElements.hasInTableScope(c.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE_BODY, Di(t, e));
      break;
    }
    default:
      $n(t, e);
  }
}
function qh(t, e) {
  switch (e.tagID) {
    case c.TR: {
      t.openElements.hasInTableScope(c.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE_BODY);
      break;
    }
    case c.TABLE: {
      t.openElements.hasInTableScope(c.TR) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE_BODY, Ua(t, e));
      break;
    }
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD: {
      (t.openElements.hasInTableScope(e.tagID) || t.openElements.hasInTableScope(c.TR)) && (t.openElements.clearBackToTableRowContext(), t.openElements.pop(), t.insertionMode = I.IN_TABLE_BODY, Ua(t, e));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
    case c.TD:
    case c.TH:
      break;
    default:
      Yr(t, e);
  }
}
function TS(t, e) {
  const n = e.tagID;
  jh.has(n) ? (t.openElements.hasInTableScope(c.TD) || t.openElements.hasInTableScope(c.TH)) && (t._closeTableCell(), Mi(t, e)) : Ge(t, e);
}
function IS(t, e) {
  const n = e.tagID;
  switch (n) {
    case c.TD:
    case c.TH: {
      t.openElements.hasInTableScope(n) && (t.openElements.generateImpliedEndTags(), t.openElements.popUntilTagNamePopped(n), t.activeFormattingElements.clearToLastMarker(), t.insertionMode = I.IN_ROW);
      break;
    }
    case c.TABLE:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
    case c.TR: {
      t.openElements.hasInTableScope(n) && (t._closeTableCell(), qh(t, e));
      break;
    }
    case c.BODY:
    case c.CAPTION:
    case c.COL:
    case c.COLGROUP:
    case c.HTML:
      break;
    default:
      Li(t, e);
  }
}
function $h(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.OPTION: {
      t.openElements.currentTagId === c.OPTION && t.openElements.pop(), t._insertElement(e, M.HTML);
      break;
    }
    case c.OPTGROUP: {
      t.openElements.currentTagId === c.OPTION && t.openElements.pop(), t.openElements.currentTagId === c.OPTGROUP && t.openElements.pop(), t._insertElement(e, M.HTML);
      break;
    }
    case c.INPUT:
    case c.KEYGEN:
    case c.TEXTAREA:
    case c.SELECT: {
      t.openElements.hasInSelectScope(c.SELECT) && (t.openElements.popUntilTagNamePopped(c.SELECT), t._resetInsertionMode(), e.tagID !== c.SELECT && t._processStartTag(e));
      break;
    }
    case c.SCRIPT:
    case c.TEMPLATE: {
      Tt(t, e);
      break;
    }
  }
}
function Yh(t, e) {
  switch (e.tagID) {
    case c.OPTGROUP: {
      t.openElements.stackTop > 0 && t.openElements.currentTagId === c.OPTION && t.openElements.tagIDs[t.openElements.stackTop - 1] === c.OPTGROUP && t.openElements.pop(), t.openElements.currentTagId === c.OPTGROUP && t.openElements.pop();
      break;
    }
    case c.OPTION: {
      t.openElements.currentTagId === c.OPTION && t.openElements.pop();
      break;
    }
    case c.SELECT: {
      t.openElements.hasInSelectScope(c.SELECT) && (t.openElements.popUntilTagNamePopped(c.SELECT), t._resetInsertionMode());
      break;
    }
    case c.TEMPLATE: {
      vn(t, e);
      break;
    }
  }
}
function AS(t, e) {
  const n = e.tagID;
  n === c.CAPTION || n === c.TABLE || n === c.TBODY || n === c.TFOOT || n === c.THEAD || n === c.TR || n === c.TD || n === c.TH ? (t.openElements.popUntilTagNamePopped(c.SELECT), t._resetInsertionMode(), t._processStartTag(e)) : $h(t, e);
}
function yS(t, e) {
  const n = e.tagID;
  n === c.CAPTION || n === c.TABLE || n === c.TBODY || n === c.TFOOT || n === c.THEAD || n === c.TR || n === c.TD || n === c.TH ? t.openElements.hasInTableScope(n) && (t.openElements.popUntilTagNamePopped(c.SELECT), t._resetInsertionMode(), t.onEndTag(e)) : Yh(t, e);
}
function vS(t, e) {
  switch (e.tagID) {
    case c.BASE:
    case c.BASEFONT:
    case c.BGSOUND:
    case c.LINK:
    case c.META:
    case c.NOFRAMES:
    case c.SCRIPT:
    case c.STYLE:
    case c.TEMPLATE:
    case c.TITLE:
      Tt(t, e);
      break;
    case c.CAPTION:
    case c.COLGROUP:
    case c.TBODY:
    case c.TFOOT:
    case c.THEAD:
      t.tmplInsertionModeStack[0] = I.IN_TABLE, t.insertionMode = I.IN_TABLE, $n(t, e);
      break;
    case c.COL:
      t.tmplInsertionModeStack[0] = I.IN_COLUMN_GROUP, t.insertionMode = I.IN_COLUMN_GROUP, Ou(t, e);
      break;
    case c.TR:
      t.tmplInsertionModeStack[0] = I.IN_TABLE_BODY, t.insertionMode = I.IN_TABLE_BODY, Di(t, e);
      break;
    case c.TD:
    case c.TH:
      t.tmplInsertionModeStack[0] = I.IN_ROW, t.insertionMode = I.IN_ROW, Mi(t, e);
      break;
    default:
      t.tmplInsertionModeStack[0] = I.IN_BODY, t.insertionMode = I.IN_BODY, Ge(t, e);
  }
}
function SS(t, e) {
  e.tagID === c.TEMPLATE && vn(t, e);
}
function Gh(t, e) {
  t.openElements.tmplCount > 0 ? (t.openElements.popUntilTagNamePopped(c.TEMPLATE), t.activeFormattingElements.clearToLastMarker(), t.tmplInsertionModeStack.shift(), t._resetInsertionMode(), t.onEof(e)) : Cu(t, e);
}
function CS(t, e) {
  e.tagID === c.HTML ? Ge(t, e) : ri(t, e);
}
function Wh(t, e) {
  var n;
  if (e.tagID === c.HTML) {
    if (t.fragmentContext || (t.insertionMode = I.AFTER_AFTER_BODY), t.options.sourceCodeLocationInfo && t.openElements.tagIDs[0] === c.HTML) {
      t._setEndLocation(t.openElements.items[0], e);
      const r = t.openElements.items[1];
      r && !(!((n = t.treeAdapter.getNodeSourceCodeLocation(r)) === null || n === void 0) && n.endTag) && t._setEndLocation(r, e);
    }
  } else
    ri(t, e);
}
function ri(t, e) {
  t.insertionMode = I.IN_BODY, wi(t, e);
}
function OS(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.FRAMESET: {
      t._insertElement(e, M.HTML);
      break;
    }
    case c.FRAME: {
      t._appendElement(e, M.HTML), e.ackSelfClosing = !0;
      break;
    }
    case c.NOFRAMES: {
      Tt(t, e);
      break;
    }
  }
}
function RS(t, e) {
  e.tagID === c.FRAMESET && !t.openElements.isRootHtmlElementCurrent() && (t.openElements.pop(), !t.fragmentContext && t.openElements.currentTagId !== c.FRAMESET && (t.insertionMode = I.AFTER_FRAMESET));
}
function NS(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.NOFRAMES: {
      Tt(t, e);
      break;
    }
  }
}
function wS(t, e) {
  e.tagID === c.HTML && (t.insertionMode = I.AFTER_AFTER_FRAMESET);
}
function LS(t, e) {
  e.tagID === c.HTML ? Ge(t, e) : Ds(t, e);
}
function Ds(t, e) {
  t.insertionMode = I.IN_BODY, wi(t, e);
}
function DS(t, e) {
  switch (e.tagID) {
    case c.HTML: {
      Ge(t, e);
      break;
    }
    case c.NOFRAMES: {
      Tt(t, e);
      break;
    }
  }
}
function MS(t, e) {
  e.chars = Te, t._insertCharacters(e);
}
function PS(t, e) {
  t._insertCharacters(e), t.framesetOk = !1;
}
function Qh(t) {
  for (; t.treeAdapter.getNamespaceURI(t.openElements.current) !== M.HTML && !t._isIntegrationPoint(t.openElements.currentTagId, t.openElements.current); )
    t.openElements.pop();
}
function kS(t, e) {
  if (Ky(e))
    Qh(t), t._startTagOutsideForeignContent(e);
  else {
    const n = t._getAdjustedCurrentElement(), r = t.treeAdapter.getNamespaceURI(n);
    r === M.MATHML ? Lh(e) : r === M.SVG && (zy(e), Dh(e)), vu(e), e.selfClosing ? t._appendElement(e, r) : t._insertElement(e, r), e.ackSelfClosing = !0;
  }
}
function FS(t, e) {
  if (e.tagID === c.P || e.tagID === c.BR) {
    Qh(t), t._endTagOutsideForeignContent(e);
    return;
  }
  for (let n = t.openElements.stackTop; n > 0; n--) {
    const r = t.openElements.items[n];
    if (t.treeAdapter.getNamespaceURI(r) === M.HTML) {
      t._endTagOutsideForeignContent(e);
      break;
    }
    const s = t.treeAdapter.getTagName(r);
    if (s.toLowerCase() === e.tagName) {
      e.tagName = s, t.openElements.shortenToLength(n);
      break;
    }
  }
}
N.AREA, N.BASE, N.BASEFONT, N.BGSOUND, N.BR, N.COL, N.EMBED, N.FRAME, N.HR, N.IMG, N.INPUT, N.KEYGEN, N.LINK, N.META, N.PARAM, N.SOURCE, N.TRACK, N.WBR;
function BS(t, e, n) {
  typeof t == "string" && (n = e, e = t, t = null);
  const r = sv.getFragmentParser(t, n);
  return r.tokenizer.write(e, !0), r.getFragment();
}
function Tl(t) {
  let e;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(n) {
      e = W(n, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "absolute inset-0 cursor-pointer bg-white/80");
    },
    m(n, r) {
      j(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Il(t) {
  let e, n, r;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(s) {
      e = W(s, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "absolute inset-0 cursor-pointer rounded-lg");
    },
    m(s, i) {
      j(s, e, i), n || (r = Ie(
        e,
        "click",
        /*select*/
        t[8]
      ), n = !0);
    },
    p: $,
    d(s) {
      s && w(e), n = !1, r();
    }
  };
}
function US(t) {
  let e;
  return {
    c() {
      e = ve("Component");
    },
    l(n) {
      e = Ne(n, "Component");
    },
    m(n, r) {
      j(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function xS(t) {
  let e, n, r, s, i, a, o, u = !/*$data*/
  t[1].enabled && Tl(), l = !/*selected*/
  t[5] && Il(t);
  const d = (
    /*#slots*/
    t[12].default
  ), f = Gn(
    d,
    t,
    /*$$scope*/
    t[11],
    null
  ), p = f || US();
  return {
    c() {
      e = Y("div"), u && u.c(), n = le(), l && l.c(), r = le(), p && p.c(), this.h();
    },
    l(h) {
      e = W(h, "DIV", { class: !0, style: !0 });
      var m = Q(e);
      u && u.l(m), n = de(m), l && l.l(m), r = de(m), p && p.l(m), m.forEach(w), this.h();
    },
    h() {
      D(e, "class", "relative svelte-z0osz6"), D(e, "style", s = /*$isListView*/
      t[6] ? `padding: ${/*padding*/
      t[3]}px 0` : ""), Je(e, "hover:bg-gray-100", !/*selected*/
      t[5]), Je(
        e,
        "selected",
        /*selected*/
        t[5]
      );
    },
    m(h, m) {
      j(h, e, m), u && u.m(e, null), G(e, n), l && l.m(e, null), G(e, r), p && p.m(e, null), i = !0, a || (o = [
        Ie(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        Ie(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        )
      ], a = !0);
    },
    p(h, [m]) {
      /*$data*/
      h[1].enabled ? u && (u.d(1), u = null) : u || (u = Tl(), u.c(), u.m(e, n)), /*selected*/
      h[5] ? l && (l.d(1), l = null) : l ? l.p(h, m) : (l = Il(h), l.c(), l.m(e, r)), f && f.p && (!i || m & /*$$scope*/
      2048) && Qn(
        f,
        d,
        h,
        /*$$scope*/
        h[11],
        i ? Wn(
          d,
          /*$$scope*/
          h[11],
          m,
          null
        ) : Kn(
          /*$$scope*/
          h[11]
        ),
        null
      ), (!i || m & /*$isListView, padding*/
      72 && s !== (s = /*$isListView*/
      h[6] ? `padding: ${/*padding*/
      h[3]}px 0` : "")) && D(e, "style", s), (!i || m & /*selected*/
      32) && Je(e, "hover:bg-gray-100", !/*selected*/
      h[5]), (!i || m & /*selected*/
      32) && Je(
        e,
        "selected",
        /*selected*/
        h[5]
      );
    },
    i(h) {
      i || (K(p, h), i = !0);
    },
    o(h) {
      z(p, h), i = !1;
    },
    d(h) {
      h && w(e), u && u.d(), l && l.d(), p && p.d(h), a = !1, ut(o);
    }
  };
}
function HS(t, e, n) {
  let r, s = $, i = () => (s(), s = fe(h, (x) => n(1, r = x)), h), a, o = $, u = () => (o(), o = fe(A, (x) => n(10, a = x)), A), l;
  t.$$.on_destroy.push(() => s()), t.$$.on_destroy.push(() => o());
  let { $$slots: d = {}, $$scope: f } = e, p = En("autoSave"), { data: h } = e;
  i();
  let { docId: m } = e;
  const { isEdit: _, isPreview: b, isListView: C, isFormView: O } = Au;
  Yn(t, C, (x) => n(6, l = x));
  let A, T, v = !1;
  const S = Sr.subscribe((x) => {
    u(n(2, A = x.item));
  }), R = ch.subscribe((x) => {
    n(3, T = x);
  });
  lt(() => {
    S(), R();
  });
  let B;
  function H() {
    return y(this, null, function* () {
      p && (yield p.save()), console.log("docId", m), console.log("data", h), lh.selectOption(h, m);
    });
  }
  const q = () => {
    n(4, v = !0);
  }, V = () => {
    n(4, v = !1);
  };
  return t.$$set = (x) => {
    "data" in x && i(n(0, h = x.data)), "docId" in x && n(9, m = x.docId), "$$scope" in x && n(11, f = x.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$data*/
    2 && r.show, t.$$.dirty & /*$hotItem, $data*/
    1026 && n(5, B = a.id === r.id);
  }, [
    h,
    r,
    A,
    T,
    v,
    B,
    l,
    C,
    H,
    m,
    a,
    f,
    d,
    q,
    V
  ];
}
class VS extends De {
  constructor(e) {
    super(), Le(this, e, HS, xS, Oe, { data: 0, docId: 9 });
  }
}
function jS(t) {
  let e;
  return {
    c() {
      e = Y("div"), this.h();
    },
    l(n) {
      e = W(n, "DIV", { class: !0 }), Q(e).forEach(w), this.h();
    },
    h() {
      D(e, "class", "mt-[-16px]");
    },
    m(n, r) {
      j(n, e, r);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && w(e);
    }
  };
}
function qS(t) {
  let e, n, r, s;
  const i = [YS, $S], a = [];
  function o(u, l) {
    return (
      /*selectorMode*/
      u[0] === "preview" || /*selectorMode*/
      u[0] === "run" ? 0 : 1
    );
  }
  return n = o(t), r = a[n] = i[n](t), {
    c() {
      e = Y("div"), r.c(), this.h();
    },
    l(u) {
      e = W(u, "DIV", { class: !0 });
      var l = Q(e);
      r.l(l), l.forEach(w), this.h();
    },
    h() {
      D(e, "class", "relative");
    },
    m(u, l) {
      j(u, e, l), a[n].m(e, null), s = !0;
    },
    p(u, l) {
      let d = n;
      n = o(u), n === d ? a[n].p(u, l) : (je(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), qe(), r = a[n], r ? r.p(u, l) : (r = a[n] = i[n](u), r.c()), K(r, 1), r.m(e, null));
    },
    i(u) {
      s || (K(r), s = !0);
    },
    o(u) {
      z(r), s = !1;
    },
    d(u) {
      u && w(e), a[n].d();
    }
  };
}
function $S(t) {
  let e, n;
  return e = new VS({
    props: {
      data: (
        /*data*/
        t[1]
      ),
      docId: (
        /*docId*/
        t[2]
      ),
      $$slots: { default: [GS] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*data*/
      2 && (i.data = /*data*/
      r[1]), s & /*docId*/
      4 && (i.docId = /*docId*/
      r[2]), s & /*$$scope, selectorMode, $isListView*/
      16417 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function YS(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = Gn(
    n,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      16384) && Qn(
        r,
        n,
        s,
        /*$$scope*/
        s[14],
        e ? Wn(
          n,
          /*$$scope*/
          s[14],
          i,
          null
        ) : Kn(
          /*$$scope*/
          s[14]
        ),
        null
      );
    },
    i(s) {
      e || (K(r, s), e = !0);
    },
    o(s) {
      z(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Al(t) {
  let e, n, r, s, i;
  return {
    c() {
      e = Y("div"), n = kn("svg"), r = kn("path"), this.h();
    },
    l(a) {
      e = W(a, "DIV", { class: !0 });
      var o = Q(e);
      n = Ms(o, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0
      });
      var u = Q(n);
      r = Ms(u, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0
      }), Q(r).forEach(w), u.forEach(w), o.forEach(w), this.h();
    },
    h() {
      D(r, "fill-rule", "evenodd"), D(r, "clip-rule", "evenodd"), D(r, "d", "M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"), D(r, "fill", "currentColor"), D(n, "width", "20px"), D(n, "height", "20px"), D(n, "viewBox", "0 0 16 16"), D(n, "fill", "none"), D(n, "xmlns", "http://www.w3.org/2000/svg"), D(e, "class", "handle flex items-center justify-center rounded-full transition-all hover:bg-gray-200 absolute -left-6 inset-y-0 cursor-move");
    },
    m(a, o) {
      j(a, e, o), G(e, n), G(n, r), s || (i = [
        Ie(
          e,
          "mousedown",
          /*mousedown_handler*/
          t[10]
        ),
        Ie(
          e,
          "touchstart",
          /*touchstart_handler*/
          t[11]
        ),
        Ie(
          e,
          "mouseup",
          /*mouseup_handler*/
          t[12]
        ),
        Ie(
          e,
          "touchend",
          /*touchend_handler*/
          t[13]
        )
      ], s = !0);
    },
    d(a) {
      a && w(e), s = !1, ut(i);
    }
  };
}
function GS(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[9].default
  ), i = Gn(
    s,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let a = (
    /*selectorMode*/
    t[0] === "edit" && /*$isListView*/
    t[5] && Al(t)
  );
  return {
    c() {
      i && i.c(), e = le(), a && a.c(), n = ce();
    },
    l(o) {
      i && i.l(o), e = de(o), a && a.l(o), n = ce();
    },
    m(o, u) {
      i && i.m(o, u), j(o, e, u), a && a.m(o, u), j(o, n, u), r = !0;
    },
    p(o, u) {
      i && i.p && (!r || u & /*$$scope*/
      16384) && Qn(
        i,
        s,
        o,
        /*$$scope*/
        o[14],
        r ? Wn(
          s,
          /*$$scope*/
          o[14],
          u,
          null
        ) : Kn(
          /*$$scope*/
          o[14]
        ),
        null
      ), /*selectorMode*/
      o[0] === "edit" && /*$isListView*/
      o[5] ? a || (a = Al(o), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    i(o) {
      r || (K(i, o), r = !0);
    },
    o(o) {
      z(i, o), r = !1;
    },
    d(o) {
      i && i.d(o), o && w(e), a && a.d(o), o && w(n);
    }
  };
}
function WS(t) {
  let e, n, r, s;
  const i = [qS, jS], a = [];
  function o(u, l) {
    return (
      /*show*/
      u[4] ? 0 : 1
    );
  }
  return e = o(t), n = a[e] = i[e](t), {
    c() {
      n.c(), r = ce();
    },
    l(u) {
      n.l(u), r = ce();
    },
    m(u, l) {
      a[e].m(u, l), j(u, r, l), s = !0;
    },
    p(u, [l]) {
      let d = e;
      e = o(u), e === d ? a[e].p(u, l) : (je(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), qe(), n = a[e], n ? n.p(u, l) : (n = a[e] = i[e](u), n.c()), K(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      s || (K(n), s = !0);
    },
    o(u) {
      z(n), s = !1;
    },
    d(u) {
      a[e].d(u), u && w(r);
    }
  };
}
function QS(t, e, n) {
  let r, s = $, i = () => (s(), s = fe(h, (H) => n(7, r = H)), h), a, o = $, u = () => (o(), o = fe(_, (H) => n(8, a = H)), _), l;
  t.$$.on_destroy.push(() => s()), t.$$.on_destroy.push(() => o());
  let { $$slots: d = {}, $$scope: f } = e, { selectorMode: p } = e, { data: h } = e;
  i();
  let { docId: m } = e, { state: _ } = e;
  u();
  const { isEdit: b, isPreview: C, isListView: O, isFormView: A } = Au;
  Yn(t, O, (H) => n(5, l = H));
  let T;
  function v(H) {
    fr.call(this, t, H);
  }
  function S(H) {
    fr.call(this, t, H);
  }
  function R(H) {
    fr.call(this, t, H);
  }
  function B(H) {
    fr.call(this, t, H);
  }
  return t.$$set = (H) => {
    "selectorMode" in H && n(0, p = H.selectorMode), "data" in H && i(n(1, h = H.data)), "docId" in H && n(2, m = H.docId), "state" in H && u(n(3, _ = H.state)), "$$scope" in H && n(14, f = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*selectorMode, $state, $data*/
    385 && (p === "preview" || p === "run" ? n(4, T = a.ui[r.id].show) : n(4, T = r.show));
  }, [
    p,
    h,
    m,
    _,
    T,
    l,
    O,
    r,
    a,
    d,
    v,
    S,
    R,
    B,
    f
  ];
}
class KS extends De {
  constructor(e) {
    super(), Le(this, e, QS, WS, Oe, {
      selectorMode: 0,
      data: 1,
      docId: 2,
      state: 3
    });
  }
}
function yl(t, e, n) {
  const r = t.slice();
  return r[17] = e[n], r;
}
function vl(t) {
  let e, n, r, s;
  const i = [ZS, JS, XS, zS], a = [];
  function o(u, l) {
    return (
      /*node*/
      u[0].nodeName === "#text" ? 0 : (
        /*node*/
        u[0].nodeName[0] === "#" ? 1 : (
          /*item*/
          u[4] !== void 0 ? 2 : (
            /*showElement*/
            u[6] === !0 ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = o(t)) && (n = a[e] = i[e](t)), {
    c() {
      n && n.c(), r = ce();
    },
    l(u) {
      n && n.l(u), r = ce();
    },
    m(u, l) {
      ~e && a[e].m(u, l), j(u, r, l), s = !0;
    },
    p(u, l) {
      let d = e;
      e = o(u), e === d ? ~e && a[e].p(u, l) : (n && (je(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), qe()), ~e ? (n = a[e], n ? n.p(u, l) : (n = a[e] = i[e](u), n.c()), K(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(u) {
      s || (K(n), s = !0);
    },
    o(u) {
      z(n), s = !1;
    },
    d(u) {
      ~e && a[e].d(u), u && w(r);
    }
  };
}
function zS(t) {
  let e = (
    /*node*/
    t[0].nodeName
  ), n, r = (
    /*node*/
    t[0].nodeName && ca(t)
  );
  return {
    c() {
      r && r.c(), n = ce();
    },
    l(s) {
      r && r.l(s), n = ce();
    },
    m(s, i) {
      r && r.m(s, i), j(s, n, i);
    },
    p(s, i) {
      /*node*/
      s[0].nodeName ? e ? Oe(
        e,
        /*node*/
        s[0].nodeName
      ) ? (r.d(1), r = ca(s), r.c(), r.m(n.parentNode, n)) : r.p(s, i) : (r = ca(s), r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null), e = /*node*/
      s[0].nodeName;
    },
    i: $,
    o(s) {
      z(r);
    },
    d(s) {
      s && w(n), r && r.d(s);
    }
  };
}
function XS(t) {
  let e, n, r, s, i;
  return n = new KS({
    props: {
      data: (
        /*item*/
        t[4].comp
      ),
      docId: (
        /*item*/
        t[4].docId
      ),
      state: (
        /*state*/
        t[1]
      ),
      selectorMode: (
        /*selectorMode*/
        t[3]
      ),
      $$slots: { default: [eC] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = Y("div"), Ce(n.$$.fragment), this.h();
    },
    l(a) {
      e = W(a, "DIV", { class: !0, style: !0 });
      var o = Q(e);
      we(n.$$.fragment, o), o.forEach(w), this.h();
    },
    h() {
      var a;
      D(e, "class", r = /*attrMap*/
      t[7].class), D(e, "style", s = /*attrMap*/
      (a = t[7].style) != null ? a : "");
    },
    m(a, o) {
      j(a, e, o), Ae(n, e, null), i = !0;
    },
    p(a, o) {
      var l;
      const u = {};
      o & /*item*/
      16 && (u.data = /*item*/
      a[4].comp), o & /*item*/
      16 && (u.docId = /*item*/
      a[4].docId), o & /*state*/
      2 && (u.state = /*state*/
      a[1]), o & /*selectorMode*/
      8 && (u.selectorMode = /*selectorMode*/
      a[3]), o & /*$$scope, item, state, selectorMode, viewOpt*/
      4194362 && (u.$$scope = { dirty: o, ctx: a }), n.$set(u), (!i || o & /*attrMap*/
      128 && r !== (r = /*attrMap*/
      a[7].class)) && D(e, "class", r), (!i || o & /*attrMap*/
      128 && s !== (s = /*attrMap*/
      (l = a[7].style) != null ? l : "")) && D(e, "style", s);
    },
    i(a) {
      i || (K(n.$$.fragment, a), i = !0);
    },
    o(a) {
      z(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && w(e), ye(n);
    }
  };
}
function JS(t) {
  return {
    c: $,
    l: $,
    m: $,
    p: $,
    i: $,
    o: $,
    d: $
  };
}
function ZS(t) {
  let e;
  return {
    c() {
      e = ve(
        /*interpolatedText*/
        t[8]
      );
    },
    l(n) {
      e = Ne(
        n,
        /*interpolatedText*/
        t[8]
      );
    },
    m(n, r) {
      j(n, e, r);
    },
    p(n, r) {
      r & /*interpolatedText*/
      256 && Qe(
        e,
        /*interpolatedText*/
        n[8]
      );
    },
    i: $,
    o: $,
    d(n) {
      n && w(e);
    }
  };
}
function Sl(t) {
  let e, n, r = (
    /*node*/
    t[0].childNodes
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = Cl(yl(t, r, a));
  const i = (a) => z(s[a], 1, 1, () => {
    s[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      e = ce();
    },
    l(a) {
      for (let o = 0; o < s.length; o += 1)
        s[o].l(a);
      e = ce();
    },
    m(a, o) {
      for (let u = 0; u < s.length; u += 1)
        s[u].m(a, o);
      j(a, e, o), n = !0;
    },
    p(a, o) {
      if (o & /*opItems, node, state, selectorMode*/
      15) {
        r = /*node*/
        a[0].childNodes;
        let u;
        for (u = 0; u < r.length; u += 1) {
          const l = yl(a, r, u);
          s[u] ? (s[u].p(l, o), K(s[u], 1)) : (s[u] = Cl(l), s[u].c(), K(s[u], 1), s[u].m(e.parentNode, e));
        }
        for (je(), u = r.length; u < s.length; u += 1)
          i(u);
        qe();
      }
    },
    i(a) {
      if (!n) {
        for (let o = 0; o < r.length; o += 1)
          K(s[o]);
        n = !0;
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1)
        z(s[o]);
      n = !1;
    },
    d(a) {
      Kt(s, a), a && w(e);
    }
  };
}
function Cl(t) {
  let e, n;
  return e = new Kh({
    props: {
      opItems: (
        /*opItems*/
        t[2]
      ),
      node: (
        /*childNode*/
        t[17]
      ),
      state: (
        /*state*/
        t[1]
      ),
      selectorMode: (
        /*selectorMode*/
        t[3]
      )
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*opItems*/
      4 && (i.opItems = /*opItems*/
      r[2]), s & /*node*/
      1 && (i.node = /*childNode*/
      r[17]), s & /*state*/
      2 && (i.state = /*state*/
      r[1]), s & /*selectorMode*/
      8 && (i.selectorMode = /*selectorMode*/
      r[3]), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function ca(t) {
  let e, n, r, s, i = (
    /*node*/
    t[0].childNodes && Sl(t)
  ), a = [
    {
      class: n = /*attrMap*/
      t[7].class
    },
    {
      style: r = /*attrMap*/
      t[7].style
    }
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = Ml(o, a[u]);
  return {
    c() {
      e = Y(
        /*node*/
        t[0].nodeName
      ), i && i.c(), this.h();
    },
    l(u) {
      e = W(
        u,
        /*node*/
        (t[0].nodeName || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var l = Q(e);
      i && i.l(l), l.forEach(w), this.h();
    },
    h() {
      Lu(e, o);
    },
    m(u, l) {
      j(u, e, l), i && i.m(e, null), s = !0;
    },
    p(u, l) {
      /*node*/
      u[0].childNodes ? i ? (i.p(u, l), l & /*node*/
      1 && K(i, 1)) : (i = Sl(u), i.c(), K(i, 1), i.m(e, null)) : i && (je(), z(i, 1, 1, () => {
        i = null;
      }), qe()), Lu(e, o = E0(a, [
        (!s || l & /*attrMap*/
        128 && n !== (n = /*attrMap*/
        u[7].class)) && { class: n },
        (!s || l & /*attrMap*/
        128 && r !== (r = /*attrMap*/
        u[7].style)) && { style: r }
      ]));
    },
    i(u) {
      s || (K(i), s = !0);
    },
    o(u) {
      z(i), s = !1;
    },
    d(u) {
      u && w(e), i && i.d();
    }
  };
}
function eC(t) {
  let e, n;
  return e = new yu({
    props: {
      uiType: (
        /*item*/
        t[4].uiType
      ),
      comp: (
        /*item*/
        t[4].comp
      ),
      state: (
        /*state*/
        t[1]
      ),
      editMode: (
        /*selectorMode*/
        t[3] === "edit"
      ),
      viewOpt: (
        /*viewOpt*/
        t[5]
      )
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*item*/
      16 && (i.uiType = /*item*/
      r[4].uiType), s & /*item*/
      16 && (i.comp = /*item*/
      r[4].comp), s & /*state*/
      2 && (i.state = /*state*/
      r[1]), s & /*selectorMode*/
      8 && (i.editMode = /*selectorMode*/
      r[3] === "edit"), s & /*viewOpt*/
      32 && (i.viewOpt = /*viewOpt*/
      r[5]), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function tC(t) {
  let e, n, r = (
    /*node*/
    t[0] && vl(t)
  );
  return {
    c() {
      r && r.c(), e = ce();
    },
    l(s) {
      r && r.l(s), e = ce();
    },
    m(s, i) {
      r && r.m(s, i), j(s, e, i), n = !0;
    },
    p(s, [i]) {
      /*node*/
      s[0] ? r ? (r.p(s, i), i & /*node*/
      1 && K(r, 1)) : (r = vl(s), r.c(), K(r, 1), r.m(e.parentNode, e)) : r && (je(), z(r, 1, 1, () => {
        r = null;
      }), qe());
    },
    i(s) {
      n || (K(r), n = !0);
    },
    o(s) {
      z(r), n = !1;
    },
    d(s) {
      r && r.d(s), s && w(e);
    }
  };
}
function Ol(t) {
  let e = `
			return function(ui) {
				return ${t}
			} 
		`, n = null;
  try {
    n = Function(e)();
  } catch (r) {
    console.error("error Function evaluation at ", t);
  }
  return n;
}
function nC(t, e, n) {
  let r, s, i = $, a = () => (i(), i = fe(l, (v) => n(14, s = v)), l);
  t.$$.on_destroy.push(() => i());
  let { node: o } = e, { state: u } = e, { opItems: l } = e;
  a();
  let { selectorMode: d } = e, f = null, p, h = { showTitle: !0, showDesc: !0 }, m = !0, _ = !1, b = null, C = {};
  o.attrs && (C = o.attrs.reduce(
    (v, S) => (v[S.name] = S.value, v),
    {}
  )), C.obif !== void 0 && (_ = !0, b = Ol(C.obif));
  let O = o.value, A = "unknown";
  f = u.subscribe((v) => {
    if (r = v.ui, _)
      try {
        n(6, m = b(v.ui));
      } catch (S) {
        console.error("error at ", C.obif);
      }
    if (o.nodeName === "#text")
      if (A === "unknown" || A === "yes") {
        let S = T(o.value);
        S.processed ? (A = "yes", n(8, O = S.str)) : (A = "no", n(8, O = o.value));
      } else
        n(8, O = o.value);
  }), _ === !1 && C.comp !== void 0 && (p = s.find((v) => v.id === C.comp)), C.hasOwnProperty("hide-title") && (h.showTitle = !1), C.hasOwnProperty("hide-desc") && (h.showDesc = !1), C.hasOwnProperty("hide-all") && (h.showTitle = !1, h.showDesc = !1), lt(() => {
    f && f(), f = null;
  });
  function T(v) {
    let S = [], R, B = "", H = !1;
    if (v.includes("{{")) {
      const q = /{{.*?}}/gm;
      for (; (R = q.exec(v)) !== null; )
        S.length > 0 && (S[S.length - 1].next_start = R.index), S.push({
          start: R.index,
          end: q.lastIndex,
          next_start: void 0,
          content: R[0].slice(2, -2).trim()
          // {{ }} 내부의 내용
        });
      if (S.length == 0)
        return H = !1, { processed: H, str: v };
      B = v.slice(0, S[0].start), B = S.reduce(
        (V, x) => {
          let J = null, X = "";
          try {
            J = Ol(x.content), X = J(r);
          } catch (re) {
            console.error("error at ", x.content);
          }
          let P = v.slice(x.end, x.next_start);
          return V + X + P;
        },
        B
      ), H = !0;
    } else
      B = v;
    return { processed: H, str: B };
  }
  return t.$$set = (v) => {
    "node" in v && n(0, o = v.node), "state" in v && n(1, u = v.state), "opItems" in v && a(n(2, l = v.opItems)), "selectorMode" in v && n(3, d = v.selectorMode);
  }, r = null, [
    o,
    u,
    l,
    d,
    p,
    h,
    m,
    C,
    O
  ];
}
class Kh extends De {
  constructor(e) {
    super(), Le(this, e, nC, tC, Oe, {
      node: 0,
      state: 1,
      opItems: 2,
      selectorMode: 3
    });
  }
}
function Rl(t, e, n) {
  const r = t.slice();
  return r[14] = e[n], r;
}
function Nl(t) {
  let e, n;
  return e = new Kh({
    props: {
      opItems: (
        /*opItems*/
        t[0]
      ),
      node: (
        /*node*/
        t[14]
      ),
      state: (
        /*state*/
        t[2]
      ),
      selectorMode: (
        /*selectorMode*/
        t[3]
      )
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*opItems*/
      1 && (i.opItems = /*opItems*/
      r[0]), s & /*childNodes*/
      16 && (i.node = /*node*/
      r[14]), s & /*state*/
      4 && (i.state = /*state*/
      r[2]), s & /*selectorMode*/
      8 && (i.selectorMode = /*selectorMode*/
      r[3]), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function rC(t) {
  let e, n, r = (
    /*childNodes*/
    t[4]
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = Nl(Rl(t, r, a));
  const i = (a) => z(s[a], 1, 1, () => {
    s[a] = null;
  });
  return {
    c() {
      e = Y("div");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      this.h();
    },
    l(a) {
      e = W(a, "DIV", { class: !0 });
      var o = Q(e);
      for (let u = 0; u < s.length; u += 1)
        s[u].l(o);
      o.forEach(w), this.h();
    },
    h() {
      D(e, "class", "w-full");
    },
    m(a, o) {
      j(a, e, o);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(e, null);
      n = !0;
    },
    p(a, [o]) {
      if (o & /*opItems, childNodes, state, selectorMode*/
      29) {
        r = /*childNodes*/
        a[4];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const l = Rl(a, r, u);
          s[u] ? (s[u].p(l, o), K(s[u], 1)) : (s[u] = Nl(l), s[u].c(), K(s[u], 1), s[u].m(e, null));
        }
        for (je(), u = r.length; u < s.length; u += 1)
          i(u);
        qe();
      }
    },
    i(a) {
      if (!n) {
        for (let o = 0; o < r.length; o += 1)
          K(s[o]);
        n = !0;
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let o = 0; o < s.length; o += 1)
        z(s[o]);
      n = !1;
    },
    d(a) {
      a && w(e), Kt(s, a);
    }
  };
}
function sC(t, e, n) {
  let r, s = $, i = () => (s(), s = fe(o, (A) => n(10, r = A)), o);
  t.$$.on_destroy.push(() => s());
  let { opItems: a } = e, { layoutDoc: o } = e;
  i();
  let { state: u } = e, { selectorMode: l } = e, { formLayoutError: d } = e, f = "", p, h, m = !1, _ = [];
  lt(() => {
    p();
  }), Ot(() => {
    f = r.html, b(), p = o.subscribe((A) => {
      f !== A.html && (f = A.html, clearTimeout(h), h = setTimeout(b, 700));
    });
  });
  function b() {
    let A = { onParseError: C };
    m = !0;
    let T = BS(f, A);
    m && O(T);
  }
  function C(A) {
    console.log("err", A), m = !1, d && d.update((T) => (T.error = !0, T.message = `${A.code} (${A.startLine}:${A.startCol})`, T));
  }
  function O(A) {
    console.log(A), d && d.update((T) => (T.error = !1, T.message = "", T)), n(4, _ = []), setTimeout(
      () => {
        n(4, _ = A.childNodes);
      },
      0
    );
  }
  return t.$$set = (A) => {
    "opItems" in A && n(0, a = A.opItems), "layoutDoc" in A && i(n(1, o = A.layoutDoc)), "state" in A && n(2, u = A.state), "selectorMode" in A && n(3, l = A.selectorMode), "formLayoutError" in A && n(5, d = A.formLayoutError);
  }, [a, o, u, l, _, d];
}
class iC extends De {
  constructor(e) {
    super(), Le(this, e, sC, rC, Oe, {
      opItems: 0,
      layoutDoc: 1,
      state: 2,
      selectorMode: 3,
      formLayoutError: 5
    });
  }
}
function aC(t, e, n, r, s, i, a) {
  return y(this, null, function* () {
    var f;
    let o = Object.keys(t.ui).reduce((p, h) => (p[h] = t.ui[h].value, p), {}), u = i != null ? i : hu.optionset_api_host;
    const l = yield fetch(`${u}/api/price`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partnerId: e,
        provider: n,
        key: r,
        target: s,
        input: o,
        vendorData: (f = t.vendorData) != null ? f : null,
        priceType: a
      })
    });
    if (!l.ok)
      throw new Error(l.statusText);
    const d = yield l.json();
    return console.log("target ===>", s), d;
  });
}
function wl(t, e, n) {
  const r = t.slice();
  return r[25] = e[n], r;
}
function Ll(t) {
  let e, n, r, s, i, a, o;
  const u = [oC, uC], l = [];
  function d(f, p) {
    return (
      /*$layoutDoc*/
      f[5].use === !1 ? 0 : 1
    );
  }
  return s = d(t), i = l[s] = u[s](t), {
    c() {
      e = Y("div"), n = Y("div"), r = Y("div"), i.c(), this.h();
    },
    l(f) {
      e = W(f, "DIV", { style: !0 });
      var p = Q(e);
      n = W(p, "DIV", { class: !0 });
      var h = Q(n);
      r = W(h, "DIV", { class: !0 });
      var m = Q(r);
      i.l(m), m.forEach(w), h.forEach(w), p.forEach(w), this.h();
    },
    h() {
      D(r, "class", "w-full flex flex-col gap-y-4"), D(n, "class", "min-h-[100px]"), D(e, "style", a = `width: ${/*containerWidth*/
      t[0]}px`);
    },
    m(f, p) {
      j(f, e, p), G(e, n), G(n, r), l[s].m(r, null), o = !0;
    },
    p(f, p) {
      let h = s;
      s = d(f), s === h ? l[s].p(f, p) : (je(), z(l[h], 1, 1, () => {
        l[h] = null;
      }), qe(), i = l[s], i ? i.p(f, p) : (i = l[s] = u[s](f), i.c()), K(i, 1), i.m(r, null)), (!o || p & /*containerWidth*/
      1 && a !== (a = `width: ${/*containerWidth*/
      f[0]}px`)) && D(e, "style", a);
    },
    i(f) {
      o || (K(i), o = !0);
    },
    o(f) {
      z(i), o = !1;
    },
    d(f) {
      f && w(e), l[s].d();
    }
  };
}
function uC(t) {
  let e, n;
  return e = new iC({
    props: {
      opItems: (
        /*opItems*/
        t[1]
      ),
      layoutDoc: (
        /*layoutDoc*/
        t[2]
      ),
      state: (
        /*state*/
        t[6]
      ),
      formLayoutError: null,
      selectorMode: "run"
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*opItems*/
      2 && (i.opItems = /*opItems*/
      r[1]), s & /*layoutDoc*/
      4 && (i.layoutDoc = /*layoutDoc*/
      r[2]), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function oC(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = (
    /*$opItems*/
    t[4]
  );
  const a = (o) => (
    /*item*/
    o[25].id
  );
  for (let o = 0; o < i.length; o += 1) {
    let u = wl(t, i, o), l = a(u);
    n.set(l, e[o] = Dl(l, u));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
      r = ce();
    },
    l(o) {
      for (let u = 0; u < e.length; u += 1)
        e[u].l(o);
      r = ce();
    },
    m(o, u) {
      for (let l = 0; l < e.length; l += 1)
        e[l].m(o, u);
      j(o, r, u), s = !0;
    },
    p(o, u) {
      u & /*$opItems, state*/
      80 && (i = /*$opItems*/
      o[4], je(), e = _0(e, u, a, 1, o, i, n, r.parentNode, m0, Dl, r, wl), qe());
    },
    i(o) {
      if (!s) {
        for (let u = 0; u < i.length; u += 1)
          K(e[u]);
        s = !0;
      }
    },
    o(o) {
      for (let u = 0; u < e.length; u += 1)
        z(e[u]);
      s = !1;
    },
    d(o) {
      for (let u = 0; u < e.length; u += 1)
        e[u].d(o);
      o && w(r);
    }
  };
}
function cC(t) {
  let e, n, r;
  return e = new yu({
    props: {
      uiType: (
        /*item*/
        t[25].uiType
      ),
      comp: (
        /*item*/
        t[25].comp
      ),
      state: (
        /*state*/
        t[6]
      )
    }
  }), {
    c() {
      Ce(e.$$.fragment), n = le();
    },
    l(s) {
      we(e.$$.fragment, s), n = de(s);
    },
    m(s, i) {
      Ae(e, s, i), j(s, n, i), r = !0;
    },
    p(s, i) {
      const a = {};
      i & /*$opItems*/
      16 && (a.uiType = /*item*/
      s[25].uiType), i & /*$opItems*/
      16 && (a.comp = /*item*/
      s[25].comp), e.$set(a);
    },
    i(s) {
      r || (K(e.$$.fragment, s), r = !0);
    },
    o(s) {
      z(e.$$.fragment, s), r = !1;
    },
    d(s) {
      ye(e, s), s && w(n);
    }
  };
}
function Dl(t, e) {
  let n, r, s;
  return r = new dA({
    props: {
      data: (
        /*item*/
        e[25].comp
      ),
      state: (
        /*state*/
        e[6]
      ),
      docId: (
        /*item*/
        e[25].docId
      ),
      selector: !1,
      $$slots: { default: [cC] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = ce(), Ce(r.$$.fragment), this.h();
    },
    l(i) {
      n = ce(), we(r.$$.fragment, i), this.h();
    },
    h() {
      this.first = n;
    },
    m(i, a) {
      j(i, n, a), Ae(r, i, a), s = !0;
    },
    p(i, a) {
      e = i;
      const o = {};
      a & /*$opItems*/
      16 && (o.data = /*item*/
      e[25].comp), a & /*$opItems*/
      16 && (o.docId = /*item*/
      e[25].docId), a & /*$$scope, $opItems*/
      268435472 && (o.$$scope = { dirty: a, ctx: e }), r.$set(o);
    },
    i(i) {
      s || (K(r.$$.fragment, i), s = !0);
    },
    o(i) {
      z(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), ye(r, i);
    }
  };
}
function lC(t) {
  let e, n, r = (
    /*ready*/
    t[3] && Ll(t)
  );
  return {
    c() {
      r && r.c(), e = ce();
    },
    l(s) {
      r && r.l(s), e = ce();
    },
    m(s, i) {
      r && r.m(s, i), j(s, e, i), n = !0;
    },
    p(s, [i]) {
      /*ready*/
      s[3] ? r ? (r.p(s, i), i & /*ready*/
      8 && K(r, 1)) : (r = Ll(s), r.c(), K(r, 1), r.m(e.parentNode, e)) : r && (je(), z(r, 1, 1, () => {
        r = null;
      }), qe());
    },
    i(s) {
      n || (K(r), n = !0);
    },
    o(s) {
      z(r), n = !1;
    },
    d(s) {
      r && r.d(s), s && w(e);
    }
  };
}
function dC(t, e, n) {
  let r, s, i = $, a = () => (i(), i = fe(q, (P) => n(4, s = P)), q), o, u = $, l = () => (u(), u = fe(x, (P) => n(5, o = P)), x);
  t.$$.on_destroy.push(() => i()), t.$$.on_destroy.push(() => u());
  const d = new gh();
  jl("stateReducer", d);
  let { partnerId: f } = e, { provider: p } = e, { key: h } = e, { stateSnapshot: m } = e, { callback: _ } = e, { target: b } = e, { containerWidth: C } = e;
  const O = () => ({
    state: ee(d.state$),
    output: ee(d.output$)
  }), A = () => ee(d.state$), T = () => ee(d.output$);
  function v(P, re) {
    return y(this, null, function* () {
      let { host: ne } = re || {}, ue = ee(H);
      return aC(ue, f, p, h, b, ne, P);
    });
  }
  function S(P, re) {
    H.update((ne) => (ne.ui[P] && (ne.ui[P].enabled = re), ne)), d.resolveUIState(null);
  }
  function R(P) {
    return y(this, null, function* () {
      J(P), H.update((re) => P);
    });
  }
  function B(P, re) {
    if (s.find((ue) => ue.id === P && ue.uiType === "Input") === void 0) {
      console.error(`id of setPageCount() not found. id should be Input type. id=${P}`);
      return;
    }
    H.update((ue) => (ue.ui[P] && (ue.ui[P].value = re), ue));
  }
  let H = me({ ui: {} }), q, V, x;
  Ot(() => y(this, null, function* () {
    console.log("optionset-widget mounted."), f && f.length > 1 && h && h.length > 0 && (yield J(m));
  })), lt(() => {
  });
  function J(P) {
    return y(this, null, function* () {
      let re = yield ht.getPublishedOptionSet(f, h);
      if (re !== void 0) {
        re.title, V = me(re.master), l(n(2, x = me(re.layout)));
        let ne = re.options.map((k) => ({
          docId: h,
          id: k.id,
          uiType: k.uiType,
          comp: me(k)
        }));
        a(n(1, q = me(ne))), X();
        let ue = {};
        re.tableBaseId !== void 0 && re.tableBaseId !== null && (ue = yield ht.getProductTablesForBrowser(re.tableBaseId, b === "production")), yield d.setup(q, V, H, P, ue), n(3, r = !0);
      }
    });
  }
  function X() {
    d.output$.subscribe((P) => {
      let re = ee(H);
      Ln(re) === !1 && Ln(P) === !1 && _ && _(re, P);
    });
  }
  return t.$$set = (P) => {
    "partnerId" in P && n(7, f = P.partnerId), "provider" in P && n(8, p = P.provider), "key" in P && n(9, h = P.key), "stateSnapshot" in P && n(10, m = P.stateSnapshot), "callback" in P && n(11, _ = P.callback), "target" in P && n(12, b = P.target), "containerWidth" in P && n(0, C = P.containerWidth);
  }, n(3, r = !1), [
    C,
    q,
    x,
    r,
    s,
    o,
    H,
    f,
    p,
    h,
    m,
    _,
    b,
    O,
    A,
    T,
    v,
    S,
    R,
    B
  ];
}
class bC extends De {
  constructor(e) {
    super(), Le(this, e, dC, lC, Oe, {
      partnerId: 7,
      provider: 8,
      key: 9,
      stateSnapshot: 10,
      callback: 11,
      target: 12,
      containerWidth: 0,
      getResult: 13,
      getState: 14,
      getOutput: 15,
      getPrice: 16,
      enableComponent: 17,
      loadWithStateSnapshot: 18,
      setPageCount: 19
    });
  }
  get partnerId() {
    return this.$$.ctx[7];
  }
  set partnerId(e) {
    this.$$set({ partnerId: e }), We();
  }
  get provider() {
    return this.$$.ctx[8];
  }
  set provider(e) {
    this.$$set({ provider: e }), We();
  }
  get key() {
    return this.$$.ctx[9];
  }
  set key(e) {
    this.$$set({ key: e }), We();
  }
  get stateSnapshot() {
    return this.$$.ctx[10];
  }
  set stateSnapshot(e) {
    this.$$set({ stateSnapshot: e }), We();
  }
  get callback() {
    return this.$$.ctx[11];
  }
  set callback(e) {
    this.$$set({ callback: e }), We();
  }
  get target() {
    return this.$$.ctx[12];
  }
  set target(e) {
    this.$$set({ target: e }), We();
  }
  get containerWidth() {
    return this.$$.ctx[0];
  }
  set containerWidth(e) {
    this.$$set({ containerWidth: e }), We();
  }
  get getResult() {
    return this.$$.ctx[13];
  }
  get getState() {
    return this.$$.ctx[14];
  }
  get getOutput() {
    return this.$$.ctx[15];
  }
  get getPrice() {
    return this.$$.ctx[16];
  }
  get enableComponent() {
    return this.$$.ctx[17];
  }
  get loadWithStateSnapshot() {
    return this.$$.ctx[18];
  }
  get setPageCount() {
    return this.$$.ctx[19];
  }
}
function fC(t) {
  let e, n;
  return {
    c() {
      e = Y("div"), n = ve("...");
    },
    l(r) {
      e = W(r, "DIV", {});
      var s = Q(e);
      n = Ne(s, "..."), s.forEach(w);
    },
    m(r, s) {
      j(r, e, s), G(e, n);
    },
    p: $,
    i: $,
    o: $,
    d(r) {
      r && w(e);
    }
  };
}
function hC(t) {
  let e, n;
  return e = new yu({
    props: {
      uiType: (
        /*opQuantiyItem*/
        t[0].uiType
      ),
      comp: (
        /*opQuantiyItem*/
        t[0].comp
      ),
      state: (
        /*state*/
        t[1]
      ),
      viewOpt: (
        /*viewOpt*/
        t[2]
      )
    }
  }), {
    c() {
      Ce(e.$$.fragment);
    },
    l(r) {
      we(e.$$.fragment, r);
    },
    m(r, s) {
      Ae(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*opQuantiyItem*/
      1 && (i.uiType = /*opQuantiyItem*/
      r[0].uiType), s & /*opQuantiyItem*/
      1 && (i.comp = /*opQuantiyItem*/
      r[0].comp), e.$set(i);
    },
    i(r) {
      n || (K(e.$$.fragment, r), n = !0);
    },
    o(r) {
      z(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ye(e, r);
    }
  };
}
function pC(t) {
  let e, n, r, s;
  const i = [hC, fC], a = [];
  function o(u, l) {
    return (
      /*opQuantiyItem*/
      u[0] ? 0 : 1
    );
  }
  return n = o(t), r = a[n] = i[n](t), {
    c() {
      e = Y("div"), r.c(), this.h();
    },
    l(u) {
      e = W(u, "DIV", { class: !0 });
      var l = Q(e);
      r.l(l), l.forEach(w), this.h();
    },
    h() {
      D(e, "class", "w-full");
    },
    m(u, l) {
      j(u, e, l), a[n].m(e, null), s = !0;
    },
    p(u, [l]) {
      let d = n;
      n = o(u), n === d ? a[n].p(u, l) : (je(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), qe(), r = a[n], r ? r.p(u, l) : (r = a[n] = i[n](u), r.c()), K(r, 1), r.m(e, null));
    },
    i(u) {
      s || (K(r), s = !0);
    },
    o(u) {
      z(r), s = !1;
    },
    d(u) {
      u && w(e), a[n].d();
    }
  };
}
function mC(t, e, n) {
  let r;
  const s = new gh();
  jl("stateReducer", s);
  let { partnerId: i } = e, { key: a } = e, { stateSnapshot: o } = e, { callback: u } = e, { production: l = !0 } = e, { cache: d } = e;
  const f = () => ({
    state: ee(s.state$),
    output: ee(s.output$)
  }), p = () => C ? (console.log(C.id, r.ui), console.log("$state.ui[opQuantiyItem.id]", r.ui[C.id]), parseInt(r.ui[C.id].value)) : null;
  let h = me({ ui: {} });
  Yn(t, h, (R) => n(16, r = R));
  let m, _, b = { showTitle: !1, showDesc: !1 }, C, O = !0;
  Ot(() => y(this, null, function* () {
    yield A(o);
  }));
  function A(R) {
    return y(this, null, function* () {
      let B = yield v(i, a);
      if (B !== void 0) {
        console.log(B), B.title, _ = me(B.master), me(B.layout);
        let H = B.options.map((V) => ({
          docId: a,
          id: V.id,
          uiType: V.uiType,
          comp: me(V)
        }));
        m = me(H), S();
        let q = yield T(B.tableBaseId);
        yield s.setup(m, _, h, R, q), n(0, C = H.find((V) => ee(V.comp).isQuantity)), console.log("opQuantiyItem", C, ee(C.comp));
      }
    });
  }
  function T(R) {
    return y(this, null, function* () {
      if (Ln(d.productTables) && n(3, d.productTables = {}, d), d.productTables[R] === void 0) {
        console.log("[productTables] CAHCE MISS"), n(3, d.productTables[R] = new wa(null), d);
        let B = yield ht.getProductTablesForBrowser(R, l);
        d.productTables[R].next(B);
      } else
        console.log("[productTables] CAHCE HIT");
      return new Promise((B, H) => {
        d.productTables[R].pipe(xo((q) => q !== null), Ho(1)).subscribe((q) => {
          B(q);
        });
      });
    });
  }
  function v(R, B) {
    return y(this, null, function* () {
      Ln(d.publishedOptionSets) && n(3, d.publishedOptionSets = {}, d);
      let H = `${R}/${B}`;
      if (d.publishedOptionSets[H] === void 0) {
        console.log("[getPublishedOptionSet] CAHCE MISS"), n(3, d.publishedOptionSets[H] = new wa(null), d);
        let q = yield ht.getPublishedOptionSet(R, B);
        d.publishedOptionSets[H].next(q);
      } else
        console.log("[getPublishedOptionSet] CAHCE HIT");
      return new Promise((q, V) => {
        d.publishedOptionSets[H].pipe(xo((x) => x !== null), Ho(1)).subscribe((x) => {
          q(x);
        });
      });
    });
  }
  function S() {
    s.output$.subscribe((R) => {
      let B = ee(h);
      Ln(B) === !1 && Ln(R) === !1 && (u && u({
        state: B,
        output: R,
        isFirstShot: O
      }), O = !1);
    });
  }
  return t.$$set = (R) => {
    "partnerId" in R && n(4, i = R.partnerId), "key" in R && n(5, a = R.key), "stateSnapshot" in R && n(6, o = R.stateSnapshot), "callback" in R && n(7, u = R.callback), "production" in R && n(8, l = R.production), "cache" in R && n(3, d = R.cache);
  }, [
    C,
    h,
    b,
    d,
    i,
    a,
    o,
    u,
    l,
    f,
    p
  ];
}
class TC extends De {
  constructor(e) {
    super(), Le(this, e, mC, pC, Oe, {
      partnerId: 4,
      key: 5,
      stateSnapshot: 6,
      callback: 7,
      production: 8,
      cache: 3,
      getResult: 9,
      getQuantity: 10
    });
  }
  get partnerId() {
    return this.$$.ctx[4];
  }
  set partnerId(e) {
    this.$$set({ partnerId: e }), We();
  }
  get key() {
    return this.$$.ctx[5];
  }
  set key(e) {
    this.$$set({ key: e }), We();
  }
  get stateSnapshot() {
    return this.$$.ctx[6];
  }
  set stateSnapshot(e) {
    this.$$set({ stateSnapshot: e }), We();
  }
  get callback() {
    return this.$$.ctx[7];
  }
  set callback(e) {
    this.$$set({ callback: e }), We();
  }
  get production() {
    return this.$$.ctx[8];
  }
  set production(e) {
    this.$$set({ production: e }), We();
  }
  get cache() {
    return this.$$.ctx[3];
  }
  set cache(e) {
    this.$$set({ cache: e }), We();
  }
  get getResult() {
    return this.$$.ctx[9];
  }
  get getQuantity() {
    return this.$$.ctx[10];
  }
}
export {
  EC as Hello,
  bC as OptionsetWidget,
  TC as QuantityWidget
};
//# sourceMappingURL=optionset-lib.js.map
