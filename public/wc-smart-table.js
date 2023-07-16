function ca(e, t) {
  const r = /* @__PURE__ */ Object.create(null), i = e.split(",");
  for (let n = 0; n < i.length; n++)
    r[i[n]] = !0;
  return t ? (n) => !!r[n.toLowerCase()] : (n) => !!r[n];
}
const Je = {}, gn = [], ar = () => {
}, ic = () => !1, sc = /^on[^a-z]/, cs = (e) => sc.test(e), ha = (e) => e.startsWith("onUpdate:"), ft = Object.assign, ua = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ac = Object.prototype.hasOwnProperty, Me = (e, t) => ac.call(e, t), Se = Array.isArray, _n = (e) => di(e) === "[object Map]", hs = (e) => di(e) === "[object Set]", e0 = (e) => di(e) === "[object Date]", Pe = (e) => typeof e == "function", ct = (e) => typeof e == "string", ti = (e) => typeof e == "symbol", qe = (e) => e !== null && typeof e == "object", To = (e) => qe(e) && Pe(e.then) && Pe(e.catch), wo = Object.prototype.toString, di = (e) => wo.call(e), oc = (e) => di(e).slice(8, -1), So = (e) => di(e) === "[object Object]", da = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mi = /* @__PURE__ */ ca(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, lc = /-(\w)/g, Er = us((e) => e.replace(lc, (t, r) => r ? r.toUpperCase() : "")), fc = /\B([A-Z])/g, Yt = us(
  (e) => e.replace(fc, "-$1").toLowerCase()
), Co = us(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Ns = us(
  (e) => e ? `on${Co(e)}` : ""
), Vi = (e, t) => !Object.is(e, t), Li = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, Gi = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, ji = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, t0 = (e) => {
  const t = ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let r0;
const Ks = () => r0 || (r0 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function er(e) {
  if (Se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r], n = ct(i) ? dc(i) : er(i);
      if (n)
        for (const s in n)
          t[s] = n[s];
    }
    return t;
  } else {
    if (ct(e))
      return e;
    if (qe(e))
      return e;
  }
}
const cc = /;(?![^(]*\))/g, hc = /:([^]+)/, uc = /\/\*[^]*?\*\//g;
function dc(e) {
  const t = {};
  return e.replace(uc, "").split(cc).forEach((r) => {
    if (r) {
      const i = r.split(hc);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (ct(e))
    t = e;
  else if (Se(e))
    for (let r = 0; r < e.length; r++) {
      const i = st(e[r]);
      i && (t += i + " ");
    }
  else if (qe(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const pc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xc = /* @__PURE__ */ ca(pc);
function Ao(e) {
  return !!e || e === "";
}
function mc(e, t) {
  if (e.length !== t.length)
    return !1;
  let r = !0;
  for (let i = 0; r && i < e.length; i++)
    r = ds(e[i], t[i]);
  return r;
}
function ds(e, t) {
  if (e === t)
    return !0;
  let r = e0(e), i = e0(t);
  if (r || i)
    return r && i ? e.getTime() === t.getTime() : !1;
  if (r = ti(e), i = ti(t), r || i)
    return e === t;
  if (r = Se(e), i = Se(t), r || i)
    return r && i ? mc(e, t) : !1;
  if (r = qe(e), i = qe(t), r || i) {
    if (!r || !i)
      return !1;
    const n = Object.keys(e).length, s = Object.keys(t).length;
    if (n !== s)
      return !1;
    for (const a in e) {
      const o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !ds(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function gc(e, t) {
  return e.findIndex((r) => ds(r, t));
}
const re = (e) => ct(e) ? e : e == null ? "" : Se(e) || qe(e) && (e.toString === wo || !Pe(e.toString)) ? JSON.stringify(e, yo, 2) : String(e), yo = (e, t) => t && t.__v_isRef ? yo(e, t.value) : _n(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((r, [i, n]) => (r[`${i} =>`] = n, r), {})
} : hs(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : qe(t) && !Se(t) && !So(t) ? String(t) : t;
let $t;
class _c {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $t, !t && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = $t;
      try {
        return $t = this, t();
      } finally {
        $t = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $t = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $t = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, i;
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].stop();
      for (r = 0, i = this.cleanups.length; r < i; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function vc(e, t = $t) {
  t && t.active && t.effects.push(e);
}
function Ec() {
  return $t;
}
const pa = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fo = (e) => (e.w & Lr) > 0, Oo = (e) => (e.n & Lr) > 0, Tc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Lr;
}, wc = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let r = 0;
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      Fo(n) && !Oo(n) ? n.delete(e) : t[r++] = n, n.w &= ~Lr, n.n &= ~Lr;
    }
    t.length = r;
  }
}, Ys = /* @__PURE__ */ new WeakMap();
let jn = 0, Lr = 1;
const Js = 30;
let tr;
const Zr = Symbol(""), qs = Symbol("");
class xa {
  constructor(t, r = null, i) {
    this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, vc(this, i);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = tr, r = kr;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = tr, tr = this, kr = !0, Lr = 1 << ++jn, jn <= Js ? Tc(this) : n0(this), this.fn();
    } finally {
      jn <= Js && wc(this), Lr = 1 << --jn, tr = this.parent, kr = r, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    tr === this ? this.deferStop = !0 : this.active && (n0(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function n0(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++)
      t[r].delete(e);
    t.length = 0;
  }
}
let kr = !0;
const Do = [];
function On() {
  Do.push(kr), kr = !1;
}
function Dn() {
  const e = Do.pop();
  kr = e === void 0 ? !0 : e;
}
function Lt(e, t, r) {
  if (kr && tr) {
    let i = Ys.get(e);
    i || Ys.set(e, i = /* @__PURE__ */ new Map());
    let n = i.get(r);
    n || i.set(r, n = pa()), Ro(n);
  }
}
function Ro(e, t) {
  let r = !1;
  jn <= Js ? Oo(e) || (e.n |= Lr, r = !Fo(e)) : r = !e.has(tr), r && (e.add(tr), tr.deps.push(e));
}
function Cr(e, t, r, i, n, s) {
  const a = Ys.get(e);
  if (!a)
    return;
  let o = [];
  if (t === "clear")
    o = [...a.values()];
  else if (r === "length" && Se(e)) {
    const l = Number(i);
    a.forEach((f, c) => {
      (c === "length" || c >= l) && o.push(f);
    });
  } else
    switch (r !== void 0 && o.push(a.get(r)), t) {
      case "add":
        Se(e) ? da(r) && o.push(a.get("length")) : (o.push(a.get(Zr)), _n(e) && o.push(a.get(qs)));
        break;
      case "delete":
        Se(e) || (o.push(a.get(Zr)), _n(e) && o.push(a.get(qs)));
        break;
      case "set":
        _n(e) && o.push(a.get(Zr));
        break;
    }
  if (o.length === 1)
    o[0] && Zs(o[0]);
  else {
    const l = [];
    for (const f of o)
      f && l.push(...f);
    Zs(pa(l));
  }
}
function Zs(e, t) {
  const r = Se(e) ? e : [...e];
  for (const i of r)
    i.computed && i0(i);
  for (const i of r)
    i.computed || i0(i);
}
function i0(e, t) {
  (e !== tr || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Sc = /* @__PURE__ */ ca("__proto__,__v_isRef,__isVue"), Po = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ti)
), Cc = /* @__PURE__ */ ma(), Ac = /* @__PURE__ */ ma(!1, !0), yc = /* @__PURE__ */ ma(!0), s0 = /* @__PURE__ */ Fc();
function Fc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const i = ze(this);
      for (let s = 0, a = this.length; s < a; s++)
        Lt(i, "get", s + "");
      const n = i[t](...r);
      return n === -1 || n === !1 ? i[t](...r.map(ze)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      On();
      const i = ze(this)[t].apply(this, r);
      return Dn(), i;
    };
  }), e;
}
function Oc(e) {
  const t = ze(this);
  return Lt(t, "has", e), t.hasOwnProperty(e);
}
function ma(e = !1, t = !1) {
  return function(i, n, s) {
    if (n === "__v_isReactive")
      return !e;
    if (n === "__v_isReadonly")
      return e;
    if (n === "__v_isShallow")
      return t;
    if (n === "__v_raw" && s === (e ? t ? jc : Mo : t ? ko : bo).get(i))
      return i;
    const a = Se(i);
    if (!e) {
      if (a && Me(s0, n))
        return Reflect.get(s0, n, s);
      if (n === "hasOwnProperty")
        return Oc;
    }
    const o = Reflect.get(i, n, s);
    return (ti(n) ? Po.has(n) : Sc(n)) || (e || Lt(i, "get", n), t) ? o : Nt(o) ? a && da(n) ? o : o.value : qe(o) ? e ? Lo(o) : va(o) : o;
  };
}
const Dc = /* @__PURE__ */ No(), Rc = /* @__PURE__ */ No(!0);
function No(e = !1) {
  return function(r, i, n, s) {
    let a = r[i];
    if (ri(a) && Nt(a) && !Nt(n))
      return !1;
    if (!e && (!Qs(n) && !ri(n) && (a = ze(a), n = ze(n)), !Se(r) && Nt(a) && !Nt(n)))
      return a.value = n, !0;
    const o = Se(r) && da(i) ? Number(i) < r.length : Me(r, i), l = Reflect.set(r, i, n, s);
    return r === ze(s) && (o ? Vi(n, a) && Cr(r, "set", i, n) : Cr(r, "add", i, n)), l;
  };
}
function Pc(e, t) {
  const r = Me(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && r && Cr(e, "delete", t, void 0), i;
}
function Nc(e, t) {
  const r = Reflect.has(e, t);
  return (!ti(t) || !Po.has(t)) && Lt(e, "has", t), r;
}
function Ic(e) {
  return Lt(e, "iterate", Se(e) ? "length" : Zr), Reflect.ownKeys(e);
}
const Io = {
  get: Cc,
  set: Dc,
  deleteProperty: Pc,
  has: Nc,
  ownKeys: Ic
}, bc = {
  get: yc,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, kc = /* @__PURE__ */ ft(
  {},
  Io,
  {
    get: Ac,
    set: Rc
  }
), ga = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function wi(e, t, r = !1, i = !1) {
  e = e.__v_raw;
  const n = ze(e), s = ze(t);
  r || (t !== s && Lt(n, "get", t), Lt(n, "get", s));
  const { has: a } = ps(n), o = i ? ga : r ? wa : Ta;
  if (a.call(n, t))
    return o(e.get(t));
  if (a.call(n, s))
    return o(e.get(s));
  e !== n && e.get(t);
}
function Si(e, t = !1) {
  const r = this.__v_raw, i = ze(r), n = ze(e);
  return t || (e !== n && Lt(i, "has", e), Lt(i, "has", n)), e === n ? r.has(e) : r.has(e) || r.has(n);
}
function Ci(e, t = !1) {
  return e = e.__v_raw, !t && Lt(ze(e), "iterate", Zr), Reflect.get(e, "size", e);
}
function a0(e) {
  e = ze(e);
  const t = ze(this);
  return ps(t).has.call(t, e) || (t.add(e), Cr(t, "add", e, e)), this;
}
function o0(e, t) {
  t = ze(t);
  const r = ze(this), { has: i, get: n } = ps(r);
  let s = i.call(r, e);
  s || (e = ze(e), s = i.call(r, e));
  const a = n.call(r, e);
  return r.set(e, t), s ? Vi(t, a) && Cr(r, "set", e, t) : Cr(r, "add", e, t), this;
}
function l0(e) {
  const t = ze(this), { has: r, get: i } = ps(t);
  let n = r.call(t, e);
  n || (e = ze(e), n = r.call(t, e)), i && i.call(t, e);
  const s = t.delete(e);
  return n && Cr(t, "delete", e, void 0), s;
}
function f0() {
  const e = ze(this), t = e.size !== 0, r = e.clear();
  return t && Cr(e, "clear", void 0, void 0), r;
}
function Ai(e, t) {
  return function(i, n) {
    const s = this, a = s.__v_raw, o = ze(a), l = t ? ga : e ? wa : Ta;
    return !e && Lt(o, "iterate", Zr), a.forEach((f, c) => i.call(n, l(f), l(c), s));
  };
}
function yi(e, t, r) {
  return function(...i) {
    const n = this.__v_raw, s = ze(n), a = _n(s), o = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, f = n[e](...i), c = r ? ga : t ? wa : Ta;
    return !t && Lt(
      s,
      "iterate",
      l ? qs : Zr
    ), {
      // iterator protocol
      next() {
        const { value: h, done: u } = f.next();
        return u ? { value: h, done: u } : {
          value: o ? [c(h[0]), c(h[1])] : c(h),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Rr(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Mc() {
  const e = {
    get(s) {
      return wi(this, s);
    },
    get size() {
      return Ci(this);
    },
    has: Si,
    add: a0,
    set: o0,
    delete: l0,
    clear: f0,
    forEach: Ai(!1, !1)
  }, t = {
    get(s) {
      return wi(this, s, !1, !0);
    },
    get size() {
      return Ci(this);
    },
    has: Si,
    add: a0,
    set: o0,
    delete: l0,
    clear: f0,
    forEach: Ai(!1, !0)
  }, r = {
    get(s) {
      return wi(this, s, !0);
    },
    get size() {
      return Ci(this, !0);
    },
    has(s) {
      return Si.call(this, s, !0);
    },
    add: Rr("add"),
    set: Rr("set"),
    delete: Rr("delete"),
    clear: Rr("clear"),
    forEach: Ai(!0, !1)
  }, i = {
    get(s) {
      return wi(this, s, !0, !0);
    },
    get size() {
      return Ci(this, !0);
    },
    has(s) {
      return Si.call(this, s, !0);
    },
    add: Rr("add"),
    set: Rr("set"),
    delete: Rr("delete"),
    clear: Rr("clear"),
    forEach: Ai(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = yi(
      s,
      !1,
      !1
    ), r[s] = yi(
      s,
      !0,
      !1
    ), t[s] = yi(
      s,
      !1,
      !0
    ), i[s] = yi(
      s,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    i
  ];
}
const [
  Lc,
  Bc,
  Uc,
  Wc
] = /* @__PURE__ */ Mc();
function _a(e, t) {
  const r = t ? e ? Wc : Uc : e ? Bc : Lc;
  return (i, n, s) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    Me(r, n) && n in i ? r : i,
    n,
    s
  );
}
const Hc = {
  get: /* @__PURE__ */ _a(!1, !1)
}, Vc = {
  get: /* @__PURE__ */ _a(!1, !0)
}, Gc = {
  get: /* @__PURE__ */ _a(!0, !1)
}, bo = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), jc = /* @__PURE__ */ new WeakMap();
function zc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Xc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zc(oc(e));
}
function va(e) {
  return ri(e) ? e : Ea(
    e,
    !1,
    Io,
    Hc,
    bo
  );
}
function Kc(e) {
  return Ea(
    e,
    !1,
    kc,
    Vc,
    ko
  );
}
function Lo(e) {
  return Ea(
    e,
    !0,
    bc,
    Gc,
    Mo
  );
}
function Ea(e, t, r, i, n) {
  if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = n.get(e);
  if (s)
    return s;
  const a = Xc(e);
  if (a === 0)
    return e;
  const o = new Proxy(
    e,
    a === 2 ? i : r
  );
  return n.set(e, o), o;
}
function vn(e) {
  return ri(e) ? vn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ri(e) {
  return !!(e && e.__v_isReadonly);
}
function Qs(e) {
  return !!(e && e.__v_isShallow);
}
function Bo(e) {
  return vn(e) || ri(e);
}
function ze(e) {
  const t = e && e.__v_raw;
  return t ? ze(t) : e;
}
function Uo(e) {
  return Gi(e, "__v_skip", !0), e;
}
const Ta = (e) => qe(e) ? va(e) : e, wa = (e) => qe(e) ? Lo(e) : e;
function Yc(e) {
  kr && tr && (e = ze(e), Ro(e.dep || (e.dep = pa())));
}
function Jc(e, t) {
  e = ze(e);
  const r = e.dep;
  r && Zs(r);
}
function Nt(e) {
  return !!(e && e.__v_isRef === !0);
}
function qc(e) {
  return Nt(e) ? e.value : e;
}
const Zc = {
  get: (e, t, r) => qc(Reflect.get(e, t, r)),
  set: (e, t, r, i) => {
    const n = e[t];
    return Nt(n) && !Nt(r) ? (n.value = r, !0) : Reflect.set(e, t, r, i);
  }
};
function Wo(e) {
  return vn(e) ? e : new Proxy(e, Zc);
}
class Qc {
  constructor(t, r, i, n) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new xa(t, () => {
      this._dirty || (this._dirty = !0, Jc(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = i;
  }
  get value() {
    const t = ze(this);
    return Yc(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function $c(e, t, r = !1) {
  let i, n;
  const s = Pe(e);
  return s ? (i = e, n = ar) : (i = e.get, n = e.set), new Qc(i, n, s || !n, r);
}
function Mr(e, t, r, i) {
  let n;
  try {
    n = i ? e(...i) : e();
  } catch (s) {
    xs(s, t, r);
  }
  return n;
}
function or(e, t, r, i) {
  if (Pe(e)) {
    const s = Mr(e, t, r, i);
    return s && To(s) && s.catch((a) => {
      xs(a, t, r);
    }), s;
  }
  const n = [];
  for (let s = 0; s < e.length; s++)
    n.push(or(e[s], t, r, i));
  return n;
}
function xs(e, t, r, i = !0) {
  const n = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const a = t.proxy, o = r;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, o) === !1)
            return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Mr(
        l,
        null,
        10,
        [e, a, o]
      );
      return;
    }
  }
  eh(e, r, n, i);
}
function eh(e, t, r, i = !0) {
  console.error(e);
}
let ni = !1, $s = !1;
const At = [];
let pr = 0;
const En = [];
let _r = null, zr = 0;
const Ho = /* @__PURE__ */ Promise.resolve();
let Sa = null;
function Vo(e) {
  const t = Sa || Ho;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function th(e) {
  let t = pr + 1, r = At.length;
  for (; t < r; ) {
    const i = t + r >>> 1;
    ii(At[i]) < e ? t = i + 1 : r = i;
  }
  return t;
}
function Ca(e) {
  (!At.length || !At.includes(
    e,
    ni && e.allowRecurse ? pr + 1 : pr
  )) && (e.id == null ? At.push(e) : At.splice(th(e.id), 0, e), Go());
}
function Go() {
  !ni && !$s && ($s = !0, Sa = Ho.then(zo));
}
function rh(e) {
  const t = At.indexOf(e);
  t > pr && At.splice(t, 1);
}
function nh(e) {
  Se(e) ? En.push(...e) : (!_r || !_r.includes(
    e,
    e.allowRecurse ? zr + 1 : zr
  )) && En.push(e), Go();
}
function c0(e, t = ni ? pr + 1 : 0) {
  for (; t < At.length; t++) {
    const r = At[t];
    r && r.pre && (At.splice(t, 1), t--, r());
  }
}
function jo(e) {
  if (En.length) {
    const t = [...new Set(En)];
    if (En.length = 0, _r) {
      _r.push(...t);
      return;
    }
    for (_r = t, _r.sort((r, i) => ii(r) - ii(i)), zr = 0; zr < _r.length; zr++)
      _r[zr]();
    _r = null, zr = 0;
  }
}
const ii = (e) => e.id == null ? 1 / 0 : e.id, ih = (e, t) => {
  const r = ii(e) - ii(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function zo(e) {
  $s = !1, ni = !0, At.sort(ih);
  const t = ar;
  try {
    for (pr = 0; pr < At.length; pr++) {
      const r = At[pr];
      r && r.active !== !1 && Mr(r, null, 14);
    }
  } finally {
    pr = 0, At.length = 0, jo(), ni = !1, Sa = null, (At.length || En.length) && zo();
  }
}
function sh(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || Je;
  let n = r;
  const s = t.startsWith("update:"), a = s && t.slice(7);
  if (a && a in i) {
    const c = `${a === "modelValue" ? "model" : a}Modifiers`, { number: h, trim: u } = i[c] || Je;
    u && (n = r.map((p) => ct(p) ? p.trim() : p)), h && (n = r.map(ji));
  }
  let o, l = i[o = Ns(t)] || // also try camelCase event handler (#2249)
  i[o = Ns(Er(t))];
  !l && s && (l = i[o = Ns(Yt(t))]), l && or(
    l,
    e,
    6,
    n
  );
  const f = i[o + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, or(
      f,
      e,
      6,
      n
    );
  }
}
function Xo(e, t, r = !1) {
  const i = t.emitsCache, n = i.get(e);
  if (n !== void 0)
    return n;
  const s = e.emits;
  let a = {}, o = !1;
  if (!Pe(e)) {
    const l = (f) => {
      const c = Xo(f, t, !0);
      c && (o = !0, ft(a, c));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (qe(e) && i.set(e, null), null) : (Se(s) ? s.forEach((l) => a[l] = null) : ft(a, s), qe(e) && i.set(e, a), a);
}
function ms(e, t) {
  return !e || !cs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, Yt(t)) || Me(e, t));
}
let nr = null, gs = null;
function zi(e) {
  const t = nr;
  return nr = e, gs = e && e.type.__scopeId || null, t;
}
function ah(e) {
  gs = e;
}
function oh() {
  gs = null;
}
function lh(e, t = nr, r) {
  if (!t || e._n)
    return e;
  const i = (...n) => {
    i._d && E0(-1);
    const s = zi(t);
    let a;
    try {
      a = e(...n);
    } finally {
      zi(s), i._d && E0(1);
    }
    return a;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Is(e) {
  const {
    type: t,
    vnode: r,
    proxy: i,
    withProxy: n,
    props: s,
    propsOptions: [a],
    slots: o,
    attrs: l,
    emit: f,
    render: c,
    renderCache: h,
    data: u,
    setupState: p,
    ctx: g,
    inheritAttrs: d
  } = e;
  let v, O;
  const R = zi(e);
  try {
    if (r.shapeFlag & 4) {
      const P = n || i;
      v = dr(
        c.call(
          P,
          P,
          h,
          s,
          p,
          u,
          g
        )
      ), O = l;
    } else {
      const P = t;
      v = dr(
        P.length > 1 ? P(
          s,
          { attrs: l, slots: o, emit: f }
        ) : P(
          s,
          null
          /* we know it doesn't need it */
        )
      ), O = t.props ? l : fh(l);
    }
  } catch (P) {
    Yn.length = 0, xs(P, e, 1), v = lr(en);
  }
  let y = v;
  if (O && d !== !1) {
    const P = Object.keys(O), { shapeFlag: ie } = y;
    P.length && ie & 7 && (a && P.some(ha) && (O = ch(
      O,
      a
    )), y = An(y, O));
  }
  return r.dirs && (y = An(y), y.dirs = y.dirs ? y.dirs.concat(r.dirs) : r.dirs), r.transition && (y.transition = r.transition), v = y, zi(R), v;
}
const fh = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || cs(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ch = (e, t) => {
  const r = {};
  for (const i in e)
    (!ha(i) || !(i.slice(9) in t)) && (r[i] = e[i]);
  return r;
};
function hh(e, t, r) {
  const { props: i, children: n, component: s } = e, { props: a, children: o, patchFlag: l } = t, f = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? h0(i, a, f) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const u = c[h];
        if (a[u] !== i[u] && !ms(f, u))
          return !0;
      }
    }
  } else
    return (n || o) && (!o || !o.$stable) ? !0 : i === a ? !1 : i ? a ? h0(i, a, f) : !0 : !!a;
  return !1;
}
function h0(e, t, r) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const s = i[n];
    if (t[s] !== e[s] && !ms(r, s))
      return !0;
  }
  return !1;
}
function uh({ vnode: e, parent: t }, r) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = r, t = t.parent;
}
const dh = (e) => e.__isSuspense;
function ph(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : nh(e);
}
const Fi = {};
function bs(e, t, r) {
  return Ko(e, t, r);
}
function Ko(e, t, { immediate: r, deep: i, flush: n, onTrack: s, onTrigger: a } = Je) {
  var o;
  const l = Ec() === ((o = yt) == null ? void 0 : o.scope) ? yt : null;
  let f, c = !1, h = !1;
  if (Nt(e) ? (f = () => e.value, c = Qs(e)) : vn(e) ? (f = () => e, i = !0) : Se(e) ? (h = !0, c = e.some((P) => vn(P) || Qs(P)), f = () => e.map((P) => {
    if (Nt(P))
      return P.value;
    if (vn(P))
      return qr(P);
    if (Pe(P))
      return Mr(P, l, 2);
  })) : Pe(e) ? t ? f = () => Mr(e, l, 2) : f = () => {
    if (!(l && l.isUnmounted))
      return u && u(), or(
        e,
        l,
        3,
        [p]
      );
  } : f = ar, t && i) {
    const P = f;
    f = () => qr(P());
  }
  let u, p = (P) => {
    u = R.onStop = () => {
      Mr(P, l, 4);
    };
  }, g;
  if (ai)
    if (p = ar, t ? r && or(t, l, 3, [
      f(),
      h ? [] : void 0,
      p
    ]) : f(), n === "sync") {
      const P = hu();
      g = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return ar;
  let d = h ? new Array(e.length).fill(Fi) : Fi;
  const v = () => {
    if (R.active)
      if (t) {
        const P = R.run();
        (i || c || (h ? P.some(
          (ie, de) => Vi(ie, d[de])
        ) : Vi(P, d))) && (u && u(), or(t, l, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          d === Fi ? void 0 : h && d[0] === Fi ? [] : d,
          p
        ]), d = P);
      } else
        R.run();
  };
  v.allowRecurse = !!t;
  let O;
  n === "sync" ? O = v : n === "post" ? O = () => kt(v, l && l.suspense) : (v.pre = !0, l && (v.id = l.uid), O = () => Ca(v));
  const R = new xa(f, O);
  t ? r ? v() : d = R.run() : n === "post" ? kt(
    R.run.bind(R),
    l && l.suspense
  ) : R.run();
  const y = () => {
    R.stop(), l && l.scope && ua(l.scope.effects, R);
  };
  return g && g.push(y), y;
}
function xh(e, t, r) {
  const i = this.proxy, n = ct(e) ? e.includes(".") ? Yo(i, e) : () => i[e] : e.bind(i, i);
  let s;
  Pe(t) ? s = t : (s = t.handler, r = t);
  const a = yt;
  yn(this);
  const o = Ko(n, s.bind(i), r);
  return a ? yn(a) : Qr(), o;
}
function Yo(e, t) {
  const r = t.split(".");
  return () => {
    let i = e;
    for (let n = 0; n < r.length && i; n++)
      i = i[r[n]];
    return i;
  };
}
function qr(e, t) {
  if (!qe(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Nt(e))
    qr(e.value, t);
  else if (Se(e))
    for (let r = 0; r < e.length; r++)
      qr(e[r], t);
  else if (hs(e) || _n(e))
    e.forEach((r) => {
      qr(r, t);
    });
  else if (So(e))
    for (const r in e)
      qr(e[r], t);
  return e;
}
function cn(e, t) {
  const r = nr;
  if (r === null)
    return e;
  const i = Ts(r) || r.proxy, n = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [a, o, l, f = Je] = t[s];
    a && (Pe(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && qr(o), n.push({
      dir: a,
      instance: i,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function Gr(e, t, r, i) {
  const n = e.dirs, s = t && t.dirs;
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[i];
    l && (On(), or(l, r, 8, [
      e.el,
      o,
      e,
      t
    ]), Dn());
  }
}
function mh(e, t) {
  return Pe(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ft({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Bi = (e) => !!e.type.__asyncLoader, Jo = (e) => e.type.__isKeepAlive;
function gh(e, t) {
  qo(e, "a", t);
}
function _h(e, t) {
  qo(e, "da", t);
}
function qo(e, t, r = yt) {
  const i = e.__wdc || (e.__wdc = () => {
    let n = r;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (_s(t, i, r), r) {
    let n = r.parent;
    for (; n && n.parent; )
      Jo(n.parent.vnode) && vh(i, t, r, n), n = n.parent;
  }
}
function vh(e, t, r, i) {
  const n = _s(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Zo(() => {
    ua(i[t], n);
  }, r);
}
function _s(e, t, r = yt, i = !1) {
  if (r) {
    const n = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...a) => {
      if (r.isUnmounted)
        return;
      On(), yn(r);
      const o = or(t, r, e, a);
      return Qr(), Dn(), o;
    });
    return i ? n.unshift(s) : n.push(s), s;
  }
}
const Fr = (e) => (t, r = yt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ai || e === "sp") && _s(e, (...i) => t(...i), r)
), Eh = Fr("bm"), Th = Fr("m"), wh = Fr("bu"), Sh = Fr("u"), Ch = Fr("bum"), Zo = Fr("um"), Ah = Fr("sp"), yh = Fr(
  "rtg"
), Fh = Fr(
  "rtc"
);
function Oh(e, t = yt) {
  _s("ec", e, t);
}
const Dh = Symbol.for("v-ndc");
function St(e, t, r, i) {
  let n;
  const s = r && r[i];
  if (Se(e) || ct(e)) {
    n = new Array(e.length);
    for (let a = 0, o = e.length; a < o; a++)
      n[a] = t(e[a], a, void 0, s && s[a]);
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let a = 0; a < e; a++)
      n[a] = t(a + 1, a, void 0, s && s[a]);
  } else if (qe(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (a, o) => t(a, o, void 0, s && s[o])
      );
    else {
      const a = Object.keys(e);
      n = new Array(a.length);
      for (let o = 0, l = a.length; o < l; o++) {
        const f = a[o];
        n[o] = t(e[f], f, o, s && s[o]);
      }
    }
  else
    n = [];
  return r && (r[i] = n), n;
}
const ea = (e) => e ? ll(e) ? Ts(e) || e.proxy : ea(e.parent) : null, Kn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ea(e.parent),
    $root: (e) => ea(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Aa(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ca(e.update)),
    $nextTick: (e) => e.n || (e.n = Vo.bind(e.proxy)),
    $watch: (e) => xh.bind(e)
  })
), ks = (e, t) => e !== Je && !e.__isScriptSetup && Me(e, t), Rh = {
  get({ _: e }, t) {
    const { ctx: r, setupState: i, data: n, props: s, accessCache: a, type: o, appContext: l } = e;
    let f;
    if (t[0] !== "$") {
      const p = a[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return i[t];
          case 2:
            return n[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (ks(i, t))
          return a[t] = 1, i[t];
        if (n !== Je && Me(n, t))
          return a[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Me(f, t)
        )
          return a[t] = 3, s[t];
        if (r !== Je && Me(r, t))
          return a[t] = 4, r[t];
        ta && (a[t] = 0);
      }
    }
    const c = Kn[t];
    let h, u;
    if (c)
      return t === "$attrs" && Lt(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[t])
    )
      return h;
    if (r !== Je && Me(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, Me(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: i, setupState: n, ctx: s } = e;
    return ks(n, t) ? (n[t] = r, !0) : i !== Je && Me(i, t) ? (i[t] = r, !0) : Me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: n, propsOptions: s }
  }, a) {
    let o;
    return !!r[a] || e !== Je && Me(e, a) || ks(t, a) || (o = s[0]) && Me(o, a) || Me(i, a) || Me(Kn, a) || Me(n.config.globalProperties, a);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Me(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function u0(e) {
  return Se(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ta = !0;
function Ph(e) {
  const t = Aa(e), r = e.proxy, i = e.ctx;
  ta = !1, t.beforeCreate && d0(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: u,
    beforeUpdate: p,
    updated: g,
    activated: d,
    deactivated: v,
    beforeDestroy: O,
    beforeUnmount: R,
    destroyed: y,
    unmounted: P,
    render: ie,
    renderTracked: de,
    renderTriggered: N,
    errorCaptured: j,
    serverPrefetch: W,
    // public API
    expose: Y,
    inheritAttrs: q,
    // assets
    components: te,
    directives: pe,
    filters: Le
  } = t;
  if (f && Nh(f, i, null), a)
    for (const ye in a) {
      const Ne = a[ye];
      Pe(Ne) && (i[ye] = Ne.bind(r));
    }
  if (n) {
    const ye = n.call(r, r);
    qe(ye) && (e.data = va(ye));
  }
  if (ta = !0, s)
    for (const ye in s) {
      const Ne = s[ye], Ye = Pe(Ne) ? Ne.bind(r, r) : Pe(Ne.get) ? Ne.get.bind(r, r) : ar, pt = !Pe(Ne) && Pe(Ne.set) ? Ne.set.bind(r) : ar, nt = fu({
        get: Ye,
        set: pt
      });
      Object.defineProperty(i, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (C) => nt.value = C
      });
    }
  if (o)
    for (const ye in o)
      Qo(o[ye], i, r, ye);
  if (l) {
    const ye = Pe(l) ? l.call(r) : l;
    Reflect.ownKeys(ye).forEach((Ne) => {
      Bh(Ne, ye[Ne]);
    });
  }
  c && d0(c, e, "c");
  function ke(ye, Ne) {
    Se(Ne) ? Ne.forEach((Ye) => ye(Ye.bind(r))) : Ne && ye(Ne.bind(r));
  }
  if (ke(Eh, h), ke(Th, u), ke(wh, p), ke(Sh, g), ke(gh, d), ke(_h, v), ke(Oh, j), ke(Fh, de), ke(yh, N), ke(Ch, R), ke(Zo, P), ke(Ah, W), Se(Y))
    if (Y.length) {
      const ye = e.exposed || (e.exposed = {});
      Y.forEach((Ne) => {
        Object.defineProperty(ye, Ne, {
          get: () => r[Ne],
          set: (Ye) => r[Ne] = Ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ie && e.render === ar && (e.render = ie), q != null && (e.inheritAttrs = q), te && (e.components = te), pe && (e.directives = pe);
}
function Nh(e, t, r = ar) {
  Se(e) && (e = ra(e));
  for (const i in e) {
    const n = e[i];
    let s;
    qe(n) ? "default" in n ? s = Ui(
      n.from || i,
      n.default,
      !0
      /* treat default function as factory */
    ) : s = Ui(n.from || i) : s = Ui(n), Nt(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[i] = s;
  }
}
function d0(e, t, r) {
  or(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Qo(e, t, r, i) {
  const n = i.includes(".") ? Yo(r, i) : () => r[i];
  if (ct(e)) {
    const s = t[e];
    Pe(s) && bs(n, s);
  } else if (Pe(e))
    bs(n, e.bind(r));
  else if (qe(e))
    if (Se(e))
      e.forEach((s) => Qo(s, t, r, i));
    else {
      const s = Pe(e.handler) ? e.handler.bind(r) : t[e.handler];
      Pe(s) && bs(n, s, e);
    }
}
function Aa(e) {
  const t = e.type, { mixins: r, extends: i } = t, {
    mixins: n,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !n.length && !r && !i ? l = t : (l = {}, n.length && n.forEach(
    (f) => Xi(l, f, a, !0)
  ), Xi(l, t, a)), qe(t) && s.set(t, l), l;
}
function Xi(e, t, r, i = !1) {
  const { mixins: n, extends: s } = t;
  s && Xi(e, s, r, !0), n && n.forEach(
    (a) => Xi(e, a, r, !0)
  );
  for (const a in t)
    if (!(i && a === "expose")) {
      const o = Ih[a] || r && r[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Ih = {
  data: p0,
  props: x0,
  emits: x0,
  // objects
  methods: zn,
  computed: zn,
  // lifecycle
  beforeCreate: Dt,
  created: Dt,
  beforeMount: Dt,
  mounted: Dt,
  beforeUpdate: Dt,
  updated: Dt,
  beforeDestroy: Dt,
  beforeUnmount: Dt,
  destroyed: Dt,
  unmounted: Dt,
  activated: Dt,
  deactivated: Dt,
  errorCaptured: Dt,
  serverPrefetch: Dt,
  // assets
  components: zn,
  directives: zn,
  // watch
  watch: kh,
  // provide / inject
  provide: p0,
  inject: bh
};
function p0(e, t) {
  return t ? e ? function() {
    return ft(
      Pe(e) ? e.call(this, this) : e,
      Pe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bh(e, t) {
  return zn(ra(e), ra(t));
}
function ra(e) {
  if (Se(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Dt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zn(e, t) {
  return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function x0(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ft(
    /* @__PURE__ */ Object.create(null),
    u0(e),
    u0(t ?? {})
  ) : t;
}
function kh(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = ft(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    r[i] = Dt(e[i], t[i]);
  return r;
}
function $o() {
  return {
    app: null,
    config: {
      isNativeTag: ic,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Mh = 0;
function Lh(e, t) {
  return function(i, n = null) {
    Pe(i) || (i = ft({}, i)), n != null && !qe(n) && (n = null);
    const s = $o(), a = /* @__PURE__ */ new Set();
    let o = !1;
    const l = s.app = {
      _uid: Mh++,
      _component: i,
      _props: n,
      _container: null,
      _context: s,
      _instance: null,
      version: uu,
      get config() {
        return s.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return a.has(f) || (f && Pe(f.install) ? (a.add(f), f.install(l, ...c)) : Pe(f) && (a.add(f), f(l, ...c))), l;
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), l;
      },
      component(f, c) {
        return c ? (s.components[f] = c, l) : s.components[f];
      },
      directive(f, c) {
        return c ? (s.directives[f] = c, l) : s.directives[f];
      },
      mount(f, c, h) {
        if (!o) {
          const u = lr(
            i,
            n
          );
          return u.appContext = s, c && t ? t(u, f) : e(u, f, h), o = !0, l._container = f, f.__vue_app__ = l, Ts(u.component) || u.component.proxy;
        }
      },
      unmount() {
        o && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, c) {
        return s.provides[f] = c, l;
      },
      runWithContext(f) {
        Ki = l;
        try {
          return f();
        } finally {
          Ki = null;
        }
      }
    };
    return l;
  };
}
let Ki = null;
function Bh(e, t) {
  if (yt) {
    let r = yt.provides;
    const i = yt.parent && yt.parent.provides;
    i === r && (r = yt.provides = Object.create(i)), r[e] = t;
  }
}
function Ui(e, t, r = !1) {
  const i = yt || nr;
  if (i || Ki) {
    const n = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Ki._context.provides;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return r && Pe(t) ? t.call(i && i.proxy) : t;
  }
}
function Uh(e, t, r, i = !1) {
  const n = {}, s = {};
  Gi(s, Es, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), el(e, t, n, s);
  for (const a in e.propsOptions[0])
    a in n || (n[a] = void 0);
  r ? e.props = i ? n : Kc(n) : e.type.props ? e.props = n : e.props = s, e.attrs = s;
}
function Wh(e, t, r, i) {
  const {
    props: n,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, o = ze(n), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let u = c[h];
        if (ms(e.emitsOptions, u))
          continue;
        const p = t[u];
        if (l)
          if (Me(s, u))
            p !== s[u] && (s[u] = p, f = !0);
          else {
            const g = Er(u);
            n[g] = na(
              l,
              o,
              g,
              p,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          p !== s[u] && (s[u] = p, f = !0);
      }
    }
  } else {
    el(e, t, n, s) && (f = !0);
    let c;
    for (const h in o)
      (!t || // for camelCase
      !Me(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Yt(h)) === h || !Me(t, c))) && (l ? r && // for camelCase
      (r[h] !== void 0 || // for kebab-case
      r[c] !== void 0) && (n[h] = na(
        l,
        o,
        h,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete n[h]);
    if (s !== o)
      for (const h in s)
        (!t || !Me(t, h)) && (delete s[h], f = !0);
  }
  f && Cr(e, "set", "$attrs");
}
function el(e, t, r, i) {
  const [n, s] = e.propsOptions;
  let a = !1, o;
  if (t)
    for (let l in t) {
      if (Mi(l))
        continue;
      const f = t[l];
      let c;
      n && Me(n, c = Er(l)) ? !s || !s.includes(c) ? r[c] = f : (o || (o = {}))[c] = f : ms(e.emitsOptions, l) || (!(l in i) || f !== i[l]) && (i[l] = f, a = !0);
    }
  if (s) {
    const l = ze(r), f = o || Je;
    for (let c = 0; c < s.length; c++) {
      const h = s[c];
      r[h] = na(
        n,
        l,
        h,
        f[h],
        e,
        !Me(f, h)
      );
    }
  }
  return a;
}
function na(e, t, r, i, n, s) {
  const a = e[r];
  if (a != null) {
    const o = Me(a, "default");
    if (o && i === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && Pe(l)) {
        const { propsDefaults: f } = n;
        r in f ? i = f[r] : (yn(n), i = f[r] = l.call(
          null,
          t
        ), Qr());
      } else
        i = l;
    }
    a[
      0
      /* shouldCast */
    ] && (s && !o ? i = !1 : a[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Yt(r)) && (i = !0));
  }
  return i;
}
function tl(e, t, r = !1) {
  const i = t.propsCache, n = i.get(e);
  if (n)
    return n;
  const s = e.props, a = {}, o = [];
  let l = !1;
  if (!Pe(e)) {
    const c = (h) => {
      l = !0;
      const [u, p] = tl(h, t, !0);
      ft(a, u), p && o.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l)
    return qe(e) && i.set(e, gn), gn;
  if (Se(s))
    for (let c = 0; c < s.length; c++) {
      const h = Er(s[c]);
      m0(h) && (a[h] = Je);
    }
  else if (s)
    for (const c in s) {
      const h = Er(c);
      if (m0(h)) {
        const u = s[c], p = a[h] = Se(u) || Pe(u) ? { type: u } : ft({}, u);
        if (p) {
          const g = v0(Boolean, p.type), d = v0(String, p.type);
          p[
            0
            /* shouldCast */
          ] = g > -1, p[
            1
            /* shouldCastTrue */
          ] = d < 0 || g < d, (g > -1 || Me(p, "default")) && o.push(h);
        }
      }
    }
  const f = [a, o];
  return qe(e) && i.set(e, f), f;
}
function m0(e) {
  return e[0] !== "$";
}
function g0(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function _0(e, t) {
  return g0(e) === g0(t);
}
function v0(e, t) {
  return Se(t) ? t.findIndex((r) => _0(r, e)) : Pe(t) && _0(t, e) ? 0 : -1;
}
const rl = (e) => e[0] === "_" || e === "$stable", ya = (e) => Se(e) ? e.map(dr) : [dr(e)], Hh = (e, t, r) => {
  if (t._n)
    return t;
  const i = lh((...n) => ya(t(...n)), r);
  return i._c = !1, i;
}, nl = (e, t, r) => {
  const i = e._ctx;
  for (const n in e) {
    if (rl(n))
      continue;
    const s = e[n];
    if (Pe(s))
      t[n] = Hh(n, s, i);
    else if (s != null) {
      const a = ya(s);
      t[n] = () => a;
    }
  }
}, il = (e, t) => {
  const r = ya(t);
  e.slots.default = () => r;
}, Vh = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = ze(t), Gi(t, "_", r)) : nl(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && il(e, t);
  Gi(e.slots, Es, 1);
}, Gh = (e, t, r) => {
  const { vnode: i, slots: n } = e;
  let s = !0, a = Je;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? r && o === 1 ? s = !1 : (ft(n, t), !r && o === 1 && delete n._) : (s = !t.$stable, nl(t, n)), a = t;
  } else
    t && (il(e, t), a = { default: 1 });
  if (s)
    for (const o in n)
      !rl(o) && !(o in a) && delete n[o];
};
function ia(e, t, r, i, n = !1) {
  if (Se(e)) {
    e.forEach(
      (u, p) => ia(
        u,
        t && (Se(t) ? t[p] : t),
        r,
        i,
        n
      )
    );
    return;
  }
  if (Bi(i) && !n)
    return;
  const s = i.shapeFlag & 4 ? Ts(i.component) || i.component.proxy : i.el, a = n ? null : s, { i: o, r: l } = e, f = t && t.r, c = o.refs === Je ? o.refs = {} : o.refs, h = o.setupState;
  if (f != null && f !== l && (ct(f) ? (c[f] = null, Me(h, f) && (h[f] = null)) : Nt(f) && (f.value = null)), Pe(l))
    Mr(l, o, 12, [a, c]);
  else {
    const u = ct(l), p = Nt(l);
    if (u || p) {
      const g = () => {
        if (e.f) {
          const d = u ? Me(h, l) ? h[l] : c[l] : l.value;
          n ? Se(d) && ua(d, s) : Se(d) ? d.includes(s) || d.push(s) : u ? (c[l] = [s], Me(h, l) && (h[l] = c[l])) : (l.value = [s], e.k && (c[e.k] = l.value));
        } else
          u ? (c[l] = a, Me(h, l) && (h[l] = a)) : p && (l.value = a, e.k && (c[e.k] = a));
      };
      a ? (g.id = -1, kt(g, r)) : g();
    }
  }
}
const kt = ph;
function jh(e) {
  return zh(e);
}
function zh(e, t) {
  const r = Ks();
  r.__VUE__ = !0;
  const {
    insert: i,
    remove: n,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: f,
    setElementText: c,
    parentNode: h,
    nextSibling: u,
    setScopeId: p = ar,
    insertStaticContent: g
  } = e, d = (S, A, I, X = null, V = null, L = null, ce = !1, ne = null, oe = !!A.dynamicChildren) => {
    if (S === A)
      return;
    S && !Un(S, A) && (X = _e(S), C(S, V, L, !0), S = null), A.patchFlag === -2 && (oe = !1, A.dynamicChildren = null);
    const { type: Z, ref: we, shapeFlag: ve } = A;
    switch (Z) {
      case vs:
        v(S, A, I, X);
        break;
      case en:
        O(S, A, I, X);
        break;
      case Wi:
        S == null && R(A, I, X, ce);
        break;
      case be:
        te(
          S,
          A,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe
        );
        break;
      default:
        ve & 1 ? ie(
          S,
          A,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe
        ) : ve & 6 ? pe(
          S,
          A,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe
        ) : (ve & 64 || ve & 128) && Z.process(
          S,
          A,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe,
          me
        );
    }
    we != null && V && ia(we, S && S.ref, L, A || S, !A);
  }, v = (S, A, I, X) => {
    if (S == null)
      i(
        A.el = o(A.children),
        I,
        X
      );
    else {
      const V = A.el = S.el;
      A.children !== S.children && f(V, A.children);
    }
  }, O = (S, A, I, X) => {
    S == null ? i(
      A.el = l(A.children || ""),
      I,
      X
    ) : A.el = S.el;
  }, R = (S, A, I, X) => {
    [S.el, S.anchor] = g(
      S.children,
      A,
      I,
      X,
      S.el,
      S.anchor
    );
  }, y = ({ el: S, anchor: A }, I, X) => {
    let V;
    for (; S && S !== A; )
      V = u(S), i(S, I, X), S = V;
    i(A, I, X);
  }, P = ({ el: S, anchor: A }) => {
    let I;
    for (; S && S !== A; )
      I = u(S), n(S), S = I;
    n(A);
  }, ie = (S, A, I, X, V, L, ce, ne, oe) => {
    ce = ce || A.type === "svg", S == null ? de(
      A,
      I,
      X,
      V,
      L,
      ce,
      ne,
      oe
    ) : W(
      S,
      A,
      V,
      L,
      ce,
      ne,
      oe
    );
  }, de = (S, A, I, X, V, L, ce, ne) => {
    let oe, Z;
    const { type: we, props: ve, shapeFlag: Ee, transition: Ce, dirs: De } = S;
    if (oe = S.el = a(
      S.type,
      L,
      ve && ve.is,
      ve
    ), Ee & 8 ? c(oe, S.children) : Ee & 16 && j(
      S.children,
      oe,
      null,
      X,
      V,
      L && we !== "foreignObject",
      ce,
      ne
    ), De && Gr(S, null, X, "created"), N(oe, S, S.scopeId, ce, X), ve) {
      for (const Ie in ve)
        Ie !== "value" && !Mi(Ie) && s(
          oe,
          Ie,
          null,
          ve[Ie],
          L,
          S.children,
          X,
          V,
          z
        );
      "value" in ve && s(oe, "value", null, ve.value), (Z = ve.onVnodeBeforeMount) && cr(Z, X, S);
    }
    De && Gr(S, null, X, "beforeMount");
    const He = (!V || V && !V.pendingBranch) && Ce && !Ce.persisted;
    He && Ce.beforeEnter(oe), i(oe, A, I), ((Z = ve && ve.onVnodeMounted) || He || De) && kt(() => {
      Z && cr(Z, X, S), He && Ce.enter(oe), De && Gr(S, null, X, "mounted");
    }, V);
  }, N = (S, A, I, X, V) => {
    if (I && p(S, I), X)
      for (let L = 0; L < X.length; L++)
        p(S, X[L]);
    if (V) {
      let L = V.subTree;
      if (A === L) {
        const ce = V.vnode;
        N(
          S,
          ce,
          ce.scopeId,
          ce.slotScopeIds,
          V.parent
        );
      }
    }
  }, j = (S, A, I, X, V, L, ce, ne, oe = 0) => {
    for (let Z = oe; Z < S.length; Z++) {
      const we = S[Z] = ne ? Nr(S[Z]) : dr(S[Z]);
      d(
        null,
        we,
        A,
        I,
        X,
        V,
        L,
        ce,
        ne
      );
    }
  }, W = (S, A, I, X, V, L, ce) => {
    const ne = A.el = S.el;
    let { patchFlag: oe, dynamicChildren: Z, dirs: we } = A;
    oe |= S.patchFlag & 16;
    const ve = S.props || Je, Ee = A.props || Je;
    let Ce;
    I && jr(I, !1), (Ce = Ee.onVnodeBeforeUpdate) && cr(Ce, I, A, S), we && Gr(A, S, I, "beforeUpdate"), I && jr(I, !0);
    const De = V && A.type !== "foreignObject";
    if (Z ? Y(
      S.dynamicChildren,
      Z,
      ne,
      I,
      X,
      De,
      L
    ) : ce || Ne(
      S,
      A,
      ne,
      null,
      I,
      X,
      De,
      L,
      !1
    ), oe > 0) {
      if (oe & 16)
        q(
          ne,
          A,
          ve,
          Ee,
          I,
          X,
          V
        );
      else if (oe & 2 && ve.class !== Ee.class && s(ne, "class", null, Ee.class, V), oe & 4 && s(ne, "style", ve.style, Ee.style, V), oe & 8) {
        const He = A.dynamicProps;
        for (let Ie = 0; Ie < He.length; Ie++) {
          const et = He[Ie], bt = ve[et], mr = Ee[et];
          (mr !== bt || et === "value") && s(
            ne,
            et,
            bt,
            mr,
            V,
            S.children,
            I,
            X,
            z
          );
        }
      }
      oe & 1 && S.children !== A.children && c(ne, A.children);
    } else
      !ce && Z == null && q(
        ne,
        A,
        ve,
        Ee,
        I,
        X,
        V
      );
    ((Ce = Ee.onVnodeUpdated) || we) && kt(() => {
      Ce && cr(Ce, I, A, S), we && Gr(A, S, I, "updated");
    }, X);
  }, Y = (S, A, I, X, V, L, ce) => {
    for (let ne = 0; ne < A.length; ne++) {
      const oe = S[ne], Z = A[ne], we = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oe.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Un(oe, Z) || // - In the case of a component, it could contain anything.
        oe.shapeFlag & 70) ? h(oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      d(
        oe,
        Z,
        we,
        null,
        X,
        V,
        L,
        ce,
        !0
      );
    }
  }, q = (S, A, I, X, V, L, ce) => {
    if (I !== X) {
      if (I !== Je)
        for (const ne in I)
          !Mi(ne) && !(ne in X) && s(
            S,
            ne,
            I[ne],
            null,
            ce,
            A.children,
            V,
            L,
            z
          );
      for (const ne in X) {
        if (Mi(ne))
          continue;
        const oe = X[ne], Z = I[ne];
        oe !== Z && ne !== "value" && s(
          S,
          ne,
          Z,
          oe,
          ce,
          A.children,
          V,
          L,
          z
        );
      }
      "value" in X && s(S, "value", I.value, X.value);
    }
  }, te = (S, A, I, X, V, L, ce, ne, oe) => {
    const Z = A.el = S ? S.el : o(""), we = A.anchor = S ? S.anchor : o("");
    let { patchFlag: ve, dynamicChildren: Ee, slotScopeIds: Ce } = A;
    Ce && (ne = ne ? ne.concat(Ce) : Ce), S == null ? (i(Z, I, X), i(we, I, X), j(
      A.children,
      I,
      we,
      V,
      L,
      ce,
      ne,
      oe
    )) : ve > 0 && ve & 64 && Ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren ? (Y(
      S.dynamicChildren,
      Ee,
      I,
      V,
      L,
      ce,
      ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || V && A === V.subTree) && sl(
      S,
      A,
      !0
      /* shallow */
    )) : Ne(
      S,
      A,
      I,
      we,
      V,
      L,
      ce,
      ne,
      oe
    );
  }, pe = (S, A, I, X, V, L, ce, ne, oe) => {
    A.slotScopeIds = ne, S == null ? A.shapeFlag & 512 ? V.ctx.activate(
      A,
      I,
      X,
      ce,
      oe
    ) : Le(
      A,
      I,
      X,
      V,
      L,
      ce,
      oe
    ) : Ae(S, A, oe);
  }, Le = (S, A, I, X, V, L, ce) => {
    const ne = S.component = nu(
      S,
      X,
      V
    );
    if (Jo(S) && (ne.ctx.renderer = me), iu(ne), ne.asyncDep) {
      if (V && V.registerDep(ne, ke), !S.el) {
        const oe = ne.subTree = lr(en);
        O(null, oe, A, I);
      }
      return;
    }
    ke(
      ne,
      S,
      A,
      I,
      V,
      L,
      ce
    );
  }, Ae = (S, A, I) => {
    const X = A.component = S.component;
    if (hh(S, A, I))
      if (X.asyncDep && !X.asyncResolved) {
        ye(X, A, I);
        return;
      } else
        X.next = A, rh(X.update), X.update();
    else
      A.el = S.el, X.vnode = A;
  }, ke = (S, A, I, X, V, L, ce) => {
    const ne = () => {
      if (S.isMounted) {
        let { next: we, bu: ve, u: Ee, parent: Ce, vnode: De } = S, He = we, Ie;
        jr(S, !1), we ? (we.el = De.el, ye(S, we, ce)) : we = De, ve && Li(ve), (Ie = we.props && we.props.onVnodeBeforeUpdate) && cr(Ie, Ce, we, De), jr(S, !0);
        const et = Is(S), bt = S.subTree;
        S.subTree = et, d(
          bt,
          et,
          // parent may have changed if it's in a teleport
          h(bt.el),
          // anchor may have changed if it's in a fragment
          _e(bt),
          S,
          V,
          L
        ), we.el = et.el, He === null && uh(S, et.el), Ee && kt(Ee, V), (Ie = we.props && we.props.onVnodeUpdated) && kt(
          () => cr(Ie, Ce, we, De),
          V
        );
      } else {
        let we;
        const { el: ve, props: Ee } = A, { bm: Ce, m: De, parent: He } = S, Ie = Bi(A);
        if (jr(S, !1), Ce && Li(Ce), !Ie && (we = Ee && Ee.onVnodeBeforeMount) && cr(we, He, A), jr(S, !0), ve && Ue) {
          const et = () => {
            S.subTree = Is(S), Ue(
              ve,
              S.subTree,
              S,
              V,
              null
            );
          };
          Ie ? A.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !S.isUnmounted && et()
          ) : et();
        } else {
          const et = S.subTree = Is(S);
          d(
            null,
            et,
            I,
            X,
            S,
            V,
            L
          ), A.el = et.el;
        }
        if (De && kt(De, V), !Ie && (we = Ee && Ee.onVnodeMounted)) {
          const et = A;
          kt(
            () => cr(we, He, et),
            V
          );
        }
        (A.shapeFlag & 256 || He && Bi(He.vnode) && He.vnode.shapeFlag & 256) && S.a && kt(S.a, V), S.isMounted = !0, A = I = X = null;
      }
    }, oe = S.effect = new xa(
      ne,
      () => Ca(Z),
      S.scope
      // track it in component's effect scope
    ), Z = S.update = () => oe.run();
    Z.id = S.uid, jr(S, !0), Z();
  }, ye = (S, A, I) => {
    A.component = S;
    const X = S.vnode.props;
    S.vnode = A, S.next = null, Wh(S, A.props, X, I), Gh(S, A.children, I), On(), c0(), Dn();
  }, Ne = (S, A, I, X, V, L, ce, ne, oe = !1) => {
    const Z = S && S.children, we = S ? S.shapeFlag : 0, ve = A.children, { patchFlag: Ee, shapeFlag: Ce } = A;
    if (Ee > 0) {
      if (Ee & 128) {
        pt(
          Z,
          ve,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe
        );
        return;
      } else if (Ee & 256) {
        Ye(
          Z,
          ve,
          I,
          X,
          V,
          L,
          ce,
          ne,
          oe
        );
        return;
      }
    }
    Ce & 8 ? (we & 16 && z(Z, V, L), ve !== Z && c(I, ve)) : we & 16 ? Ce & 16 ? pt(
      Z,
      ve,
      I,
      X,
      V,
      L,
      ce,
      ne,
      oe
    ) : z(Z, V, L, !0) : (we & 8 && c(I, ""), Ce & 16 && j(
      ve,
      I,
      X,
      V,
      L,
      ce,
      ne,
      oe
    ));
  }, Ye = (S, A, I, X, V, L, ce, ne, oe) => {
    S = S || gn, A = A || gn;
    const Z = S.length, we = A.length, ve = Math.min(Z, we);
    let Ee;
    for (Ee = 0; Ee < ve; Ee++) {
      const Ce = A[Ee] = oe ? Nr(A[Ee]) : dr(A[Ee]);
      d(
        S[Ee],
        Ce,
        I,
        null,
        V,
        L,
        ce,
        ne,
        oe
      );
    }
    Z > we ? z(
      S,
      V,
      L,
      !0,
      !1,
      ve
    ) : j(
      A,
      I,
      X,
      V,
      L,
      ce,
      ne,
      oe,
      ve
    );
  }, pt = (S, A, I, X, V, L, ce, ne, oe) => {
    let Z = 0;
    const we = A.length;
    let ve = S.length - 1, Ee = we - 1;
    for (; Z <= ve && Z <= Ee; ) {
      const Ce = S[Z], De = A[Z] = oe ? Nr(A[Z]) : dr(A[Z]);
      if (Un(Ce, De))
        d(
          Ce,
          De,
          I,
          null,
          V,
          L,
          ce,
          ne,
          oe
        );
      else
        break;
      Z++;
    }
    for (; Z <= ve && Z <= Ee; ) {
      const Ce = S[ve], De = A[Ee] = oe ? Nr(A[Ee]) : dr(A[Ee]);
      if (Un(Ce, De))
        d(
          Ce,
          De,
          I,
          null,
          V,
          L,
          ce,
          ne,
          oe
        );
      else
        break;
      ve--, Ee--;
    }
    if (Z > ve) {
      if (Z <= Ee) {
        const Ce = Ee + 1, De = Ce < we ? A[Ce].el : X;
        for (; Z <= Ee; )
          d(
            null,
            A[Z] = oe ? Nr(A[Z]) : dr(A[Z]),
            I,
            De,
            V,
            L,
            ce,
            ne,
            oe
          ), Z++;
      }
    } else if (Z > Ee)
      for (; Z <= ve; )
        C(S[Z], V, L, !0), Z++;
    else {
      const Ce = Z, De = Z, He = /* @__PURE__ */ new Map();
      for (Z = De; Z <= Ee; Z++) {
        const Tt = A[Z] = oe ? Nr(A[Z]) : dr(A[Z]);
        Tt.key != null && He.set(Tt.key, Z);
      }
      let Ie, et = 0;
      const bt = Ee - De + 1;
      let mr = !1, bn = 0;
      const Dr = new Array(bt);
      for (Z = 0; Z < bt; Z++)
        Dr[Z] = 0;
      for (Z = Ce; Z <= ve; Z++) {
        const Tt = S[Z];
        if (et >= bt) {
          C(Tt, V, L, !0);
          continue;
        }
        let zt;
        if (Tt.key != null)
          zt = He.get(Tt.key);
        else
          for (Ie = De; Ie <= Ee; Ie++)
            if (Dr[Ie - De] === 0 && Un(Tt, A[Ie])) {
              zt = Ie;
              break;
            }
        zt === void 0 ? C(Tt, V, L, !0) : (Dr[zt - De] = Z + 1, zt >= bn ? bn = zt : mr = !0, d(
          Tt,
          A[zt],
          I,
          null,
          V,
          L,
          ce,
          ne,
          oe
        ), et++);
      }
      const kn = mr ? Xh(Dr) : gn;
      for (Ie = kn.length - 1, Z = bt - 1; Z >= 0; Z--) {
        const Tt = De + Z, zt = A[Tt], Ei = Tt + 1 < we ? A[Tt + 1].el : X;
        Dr[Z] === 0 ? d(
          null,
          zt,
          I,
          Ei,
          V,
          L,
          ce,
          ne,
          oe
        ) : mr && (Ie < 0 || Z !== kn[Ie] ? nt(zt, I, Ei, 2) : Ie--);
      }
    }
  }, nt = (S, A, I, X, V = null) => {
    const { el: L, type: ce, transition: ne, children: oe, shapeFlag: Z } = S;
    if (Z & 6) {
      nt(S.component.subTree, A, I, X);
      return;
    }
    if (Z & 128) {
      S.suspense.move(A, I, X);
      return;
    }
    if (Z & 64) {
      ce.move(S, A, I, me);
      return;
    }
    if (ce === be) {
      i(L, A, I);
      for (let ve = 0; ve < oe.length; ve++)
        nt(oe[ve], A, I, X);
      i(S.anchor, A, I);
      return;
    }
    if (ce === Wi) {
      y(S, A, I);
      return;
    }
    if (X !== 2 && Z & 1 && ne)
      if (X === 0)
        ne.beforeEnter(L), i(L, A, I), kt(() => ne.enter(L), V);
      else {
        const { leave: ve, delayLeave: Ee, afterLeave: Ce } = ne, De = () => i(L, A, I), He = () => {
          ve(L, () => {
            De(), Ce && Ce();
          });
        };
        Ee ? Ee(L, De, He) : He();
      }
    else
      i(L, A, I);
  }, C = (S, A, I, X = !1, V = !1) => {
    const {
      type: L,
      props: ce,
      ref: ne,
      children: oe,
      dynamicChildren: Z,
      shapeFlag: we,
      patchFlag: ve,
      dirs: Ee
    } = S;
    if (ne != null && ia(ne, null, I, S, !0), we & 256) {
      A.ctx.deactivate(S);
      return;
    }
    const Ce = we & 1 && Ee, De = !Bi(S);
    let He;
    if (De && (He = ce && ce.onVnodeBeforeUnmount) && cr(He, A, S), we & 6)
      F(S.component, I, X);
    else {
      if (we & 128) {
        S.suspense.unmount(I, X);
        return;
      }
      Ce && Gr(S, null, A, "beforeUnmount"), we & 64 ? S.type.remove(
        S,
        A,
        I,
        V,
        me,
        X
      ) : Z && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== be || ve > 0 && ve & 64) ? z(
        Z,
        A,
        I,
        !1,
        !0
      ) : (L === be && ve & 384 || !V && we & 16) && z(oe, A, I), X && U(S);
    }
    (De && (He = ce && ce.onVnodeUnmounted) || Ce) && kt(() => {
      He && cr(He, A, S), Ce && Gr(S, null, A, "unmounted");
    }, I);
  }, U = (S) => {
    const { type: A, el: I, anchor: X, transition: V } = S;
    if (A === be) {
      D(I, X);
      return;
    }
    if (A === Wi) {
      P(S);
      return;
    }
    const L = () => {
      n(I), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (S.shapeFlag & 1 && V && !V.persisted) {
      const { leave: ce, delayLeave: ne } = V, oe = () => ce(I, L);
      ne ? ne(S.el, L, oe) : oe();
    } else
      L();
  }, D = (S, A) => {
    let I;
    for (; S !== A; )
      I = u(S), n(S), S = I;
    n(A);
  }, F = (S, A, I) => {
    const { bum: X, scope: V, update: L, subTree: ce, um: ne } = S;
    X && Li(X), V.stop(), L && (L.active = !1, C(ce, S, A, I)), ne && kt(ne, A), kt(() => {
      S.isUnmounted = !0;
    }, A), A && A.pendingBranch && !A.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === A.pendingId && (A.deps--, A.deps === 0 && A.resolve());
  }, z = (S, A, I, X = !1, V = !1, L = 0) => {
    for (let ce = L; ce < S.length; ce++)
      C(S[ce], A, I, X, V);
  }, _e = (S) => S.shapeFlag & 6 ? _e(S.component.subTree) : S.shapeFlag & 128 ? S.suspense.next() : u(S.anchor || S.el), Te = (S, A, I) => {
    S == null ? A._vnode && C(A._vnode, null, null, !0) : d(A._vnode || null, S, A, null, null, null, I), c0(), jo(), A._vnode = S;
  }, me = {
    p: d,
    um: C,
    m: nt,
    r: U,
    mt: Le,
    mc: j,
    pc: Ne,
    pbc: Y,
    n: _e,
    o: e
  };
  let ue, Ue;
  return t && ([ue, Ue] = t(
    me
  )), {
    render: Te,
    hydrate: ue,
    createApp: Lh(Te, ue)
  };
}
function jr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function sl(e, t, r = !1) {
  const i = e.children, n = t.children;
  if (Se(i) && Se(n))
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      let o = n[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = n[s] = Nr(n[s]), o.el = a.el), r || sl(a, o)), o.type === vs && (o.el = a.el);
    }
}
function Xh(e) {
  const t = e.slice(), r = [0];
  let i, n, s, a, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const f = e[i];
    if (f !== 0) {
      if (n = r[r.length - 1], e[n] < f) {
        t[i] = n, r.push(i);
        continue;
      }
      for (s = 0, a = r.length - 1; s < a; )
        o = s + a >> 1, e[r[o]] < f ? s = o + 1 : a = o;
      f < e[r[s]] && (s > 0 && (t[i] = r[s - 1]), r[s] = i);
    }
  }
  for (s = r.length, a = r[s - 1]; s-- > 0; )
    r[s] = a, a = t[a];
  return r;
}
const Kh = (e) => e.__isTeleport, be = Symbol.for("v-fgt"), vs = Symbol.for("v-txt"), en = Symbol.for("v-cmt"), Wi = Symbol.for("v-stc"), Yn = [];
let ir = null;
function Q(e = !1) {
  Yn.push(ir = e ? null : []);
}
function Yh() {
  Yn.pop(), ir = Yn[Yn.length - 1] || null;
}
let si = 1;
function E0(e) {
  si += e;
}
function al(e) {
  return e.dynamicChildren = si > 0 ? ir || gn : null, Yh(), si > 0 && ir && ir.push(e), e;
}
function ee(e, t, r, i, n, s) {
  return al(
    K(
      e,
      t,
      r,
      i,
      n,
      s,
      !0
      /* isBlock */
    )
  );
}
function Jh(e, t, r, i, n) {
  return al(
    lr(
      e,
      t,
      r,
      i,
      n,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function qh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Un(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Es = "__vInternal", ol = ({ key: e }) => e ?? null, Hi = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || Nt(e) || Pe(e) ? { i: nr, r: e, k: t, f: !!r } : e : null);
function K(e, t = null, r = null, i = 0, n = null, s = e === be ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ol(t),
    ref: t && Hi(t),
    scopeId: gs,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: nr
  };
  return o ? (Fa(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= ct(r) ? 8 : 16), si > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  ir && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ir.push(l), l;
}
const lr = Zh;
function Zh(e, t = null, r = null, i = 0, n = null, s = !1) {
  if ((!e || e === Dh) && (e = en), qh(e)) {
    const o = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Fa(o, r), si > 0 && !s && ir && (o.shapeFlag & 6 ? ir[ir.indexOf(e)] = o : ir.push(o)), o.patchFlag |= -2, o;
  }
  if (lu(e) && (e = e.__vccOpts), t) {
    t = Qh(t);
    let { class: o, style: l } = t;
    o && !ct(o) && (t.class = st(o)), qe(l) && (Bo(l) && !Se(l) && (l = ft({}, l)), t.style = er(l));
  }
  const a = ct(e) ? 1 : dh(e) ? 128 : Kh(e) ? 64 : qe(e) ? 4 : Pe(e) ? 2 : 0;
  return K(
    e,
    t,
    r,
    i,
    n,
    a,
    s,
    !0
  );
}
function Qh(e) {
  return e ? Bo(e) || Es in e ? ft({}, e) : e : null;
}
function An(e, t, r = !1) {
  const { props: i, ref: n, patchFlag: s, children: a } = e, o = t ? eu(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: o,
    key: o && ol(o),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && n ? Se(n) ? n.concat(Hi(t)) : [n, Hi(t)] : Hi(t)
    ) : n,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && An(e.ssContent),
    ssFallback: e.ssFallback && An(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ct(e = " ", t = 0) {
  return lr(vs, null, e, t);
}
function $h(e, t) {
  const r = lr(Wi, null, e);
  return r.staticCount = t, r;
}
function Oe(e = "", t = !1) {
  return t ? (Q(), Jh(en, null, e)) : lr(en, null, e);
}
function dr(e) {
  return e == null || typeof e == "boolean" ? lr(en) : Se(e) ? lr(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Nr(e) : lr(vs, null, String(e));
}
function Nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e);
}
function Fa(e, t) {
  let r = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    r = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), Fa(e, n()), n._c && (n._d = !0));
      return;
    } else {
      r = 32;
      const n = t._;
      !n && !(Es in t) ? t._ctx = nr : n === 3 && nr && (nr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Pe(t) ? (t = { default: t, _ctx: nr }, r = 32) : (t = String(t), i & 64 ? (r = 16, t = [Ct(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function eu(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (const n in i)
      if (n === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (n === "style")
        t.style = er([t.style, i.style]);
      else if (cs(n)) {
        const s = t[n], a = i[n];
        a && s !== a && !(Se(s) && s.includes(a)) && (t[n] = s ? [].concat(s, a) : a);
      } else
        n !== "" && (t[n] = i[n]);
  }
  return t;
}
function cr(e, t, r, i = null) {
  or(e, t, 7, [
    r,
    i
  ]);
}
const tu = $o();
let ru = 0;
function nu(e, t, r) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || tu, s = {
    uid: ru++,
    vnode: e,
    type: i,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new _c(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: tl(i, n),
    emitsOptions: Xo(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Je,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Je,
    data: Je,
    props: Je,
    attrs: Je,
    slots: Je,
    refs: Je,
    setupState: Je,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = sh.bind(null, s), e.ce && e.ce(s), s;
}
let yt = null, Oa, hn, T0 = "__VUE_INSTANCE_SETTERS__";
(hn = Ks()[T0]) || (hn = Ks()[T0] = []), hn.push((e) => yt = e), Oa = (e) => {
  hn.length > 1 ? hn.forEach((t) => t(e)) : hn[0](e);
};
const yn = (e) => {
  Oa(e), e.scope.on();
}, Qr = () => {
  yt && yt.scope.off(), Oa(null);
};
function ll(e) {
  return e.vnode.shapeFlag & 4;
}
let ai = !1;
function iu(e, t = !1) {
  ai = t;
  const { props: r, children: i } = e.vnode, n = ll(e);
  Uh(e, r, n, t), Vh(e, i);
  const s = n ? su(e, t) : void 0;
  return ai = !1, s;
}
function su(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Uo(new Proxy(e.ctx, Rh));
  const { setup: i } = r;
  if (i) {
    const n = e.setupContext = i.length > 1 ? ou(e) : null;
    yn(e), On();
    const s = Mr(
      i,
      e,
      0,
      [e.props, n]
    );
    if (Dn(), Qr(), To(s)) {
      if (s.then(Qr, Qr), t)
        return s.then((a) => {
          w0(e, a, t);
        }).catch((a) => {
          xs(a, e, 0);
        });
      e.asyncDep = s;
    } else
      w0(e, s, t);
  } else
    fl(e, t);
}
function w0(e, t, r) {
  Pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = Wo(t)), fl(e, r);
}
let S0;
function fl(e, t, r) {
  const i = e.type;
  if (!e.render) {
    if (!t && S0 && !i.render) {
      const n = i.template || Aa(e).template;
      if (n) {
        const { isCustomElement: s, compilerOptions: a } = e.appContext.config, { delimiters: o, compilerOptions: l } = i, f = ft(
          ft(
            {
              isCustomElement: s,
              delimiters: o
            },
            a
          ),
          l
        );
        i.render = S0(n, f);
      }
    }
    e.render = i.render || ar;
  }
  yn(e), On(), Ph(e), Dn(), Qr();
}
function au(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return Lt(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function ou(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return au(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ts(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Wo(Uo(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in Kn)
          return Kn[r](e);
      },
      has(t, r) {
        return r in t || r in Kn;
      }
    }));
}
function lu(e) {
  return Pe(e) && "__vccOpts" in e;
}
const fu = (e, t) => $c(e, t, ai), cu = Symbol.for("v-scx"), hu = () => Ui(cu), uu = "3.3.4", du = "http://www.w3.org/2000/svg", Xr = typeof document < "u" ? document : null, C0 = Xr && /* @__PURE__ */ Xr.createElement("template"), pu = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, i) => {
    const n = t ? Xr.createElementNS(du, e) : Xr.createElement(e, r ? { is: r } : void 0);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => Xr.createTextNode(e),
  createComment: (e) => Xr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, i, n, s) {
    const a = r ? r.previousSibling : t.lastChild;
    if (n && (n === s || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), r), !(n === s || !(n = n.nextSibling)); )
        ;
    else {
      C0.innerHTML = i ? `<svg>${e}</svg>` : e;
      const o = C0.content;
      if (i) {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
};
function xu(e, t, r) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
function mu(e, t, r) {
  const i = e.style, n = ct(r);
  if (r && !n) {
    if (t && !ct(t))
      for (const s in t)
        r[s] == null && sa(i, s, "");
    for (const s in r)
      sa(i, s, r[s]);
  } else {
    const s = i.display;
    n ? t !== r && (i.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (i.display = s);
  }
}
const A0 = /\s*!important$/;
function sa(e, t, r) {
  if (Se(r))
    r.forEach((i) => sa(e, t, i));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const i = gu(e, t);
    A0.test(r) ? e.setProperty(
      Yt(i),
      r.replace(A0, ""),
      "important"
    ) : e[i] = r;
  }
}
const y0 = ["Webkit", "Moz", "ms"], Ms = {};
function gu(e, t) {
  const r = Ms[t];
  if (r)
    return r;
  let i = Er(t);
  if (i !== "filter" && i in e)
    return Ms[t] = i;
  i = Co(i);
  for (let n = 0; n < y0.length; n++) {
    const s = y0[n] + i;
    if (s in e)
      return Ms[t] = s;
  }
  return t;
}
const F0 = "http://www.w3.org/1999/xlink";
function _u(e, t, r, i, n) {
  if (i && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(F0, t.slice(6, t.length)) : e.setAttributeNS(F0, t, r);
  else {
    const s = xc(t);
    r == null || s && !Ao(r) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : r);
  }
}
function vu(e, t, r, i, n, s, a) {
  if (t === "innerHTML" || t === "textContent") {
    i && a(i, n, s), e[t] = r ?? "";
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    e._value = r;
    const f = o === "OPTION" ? e.getAttribute("value") : e.value, c = r ?? "";
    f !== c && (e.value = c), r == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (r === "" || r == null) {
    const f = typeof e[t];
    f === "boolean" ? r = Ao(r) : r == null && f === "string" ? (r = "", l = !0) : f === "number" && (r = 0, l = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Kr(e, t, r, i) {
  e.addEventListener(t, r, i);
}
function Eu(e, t, r, i) {
  e.removeEventListener(t, r, i);
}
function Tu(e, t, r, i, n = null) {
  const s = e._vei || (e._vei = {}), a = s[t];
  if (i && a)
    a.value = i;
  else {
    const [o, l] = wu(t);
    if (i) {
      const f = s[t] = Au(i, n);
      Kr(e, o, f, l);
    } else
      a && (Eu(e, o, a, l), s[t] = void 0);
  }
}
const O0 = /(?:Once|Passive|Capture)$/;
function wu(e) {
  let t;
  if (O0.test(e)) {
    t = {};
    let i;
    for (; i = e.match(O0); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Yt(e.slice(2)), t];
}
let Ls = 0;
const Su = /* @__PURE__ */ Promise.resolve(), Cu = () => Ls || (Su.then(() => Ls = 0), Ls = Date.now());
function Au(e, t) {
  const r = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= r.attached)
      return;
    or(
      yu(i, r.value),
      t,
      5,
      [i]
    );
  };
  return r.value = e, r.attached = Cu(), r;
}
function yu(e, t) {
  if (Se(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((i) => (n) => !n._stopped && i && i(n));
  } else
    return t;
}
const D0 = /^on[a-z]/, Fu = (e, t, r, i, n = !1, s, a, o, l) => {
  t === "class" ? xu(e, i, n) : t === "style" ? mu(e, r, i) : cs(t) ? ha(t) || Tu(e, t, r, i, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ou(e, t, i, n)) ? vu(
    e,
    t,
    i,
    s,
    a,
    o,
    l
  ) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), _u(e, t, i, n));
};
function Ou(e, t, r, i) {
  return i ? !!(t === "innerHTML" || t === "textContent" || t in e && D0.test(t) && Pe(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || D0.test(t) && ct(r) ? !1 : t in e;
}
function Du(e, t) {
  const r = mh(e);
  class i extends Da {
    constructor(s) {
      super(r, s, t);
    }
  }
  return i.def = r, i;
}
const Ru = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Da extends Ru {
  constructor(t, r = {}, i) {
    super(), this._def = t, this._props = r, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Vo(() => {
      this._connected || (I0(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const n of i)
        this._setAttr(n.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (i, n = !1) => {
      const { props: s, styles: a } = i;
      let o;
      if (s && !Se(s))
        for (const l in s) {
          const f = s[l];
          (f === Number || f && f.type === Number) && (l in this._props && (this._props[l] = t0(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[Er(l)] = !0);
        }
      this._numberProps = o, n && this._resolveProps(i), this._applyStyles(a), this._update();
    }, r = this._def.__asyncLoader;
    r ? r().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: r } = t, i = Se(r) ? r : Object.keys(r || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of i.map(Er))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(s) {
          this._setProp(n, s);
        }
      });
  }
  _setAttr(t) {
    let r = this.getAttribute(t);
    const i = Er(t);
    this._numberProps && this._numberProps[i] && (r = t0(r)), this._setProp(i, r, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, r, i = !0, n = !0) {
    r !== this._props[t] && (this._props[t] = r, n && this._instance && this._update(), i && (r === !0 ? this.setAttribute(Yt(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(Yt(t), r + "") : r || this.removeAttribute(Yt(t))));
  }
  _update() {
    I0(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = lr(this._def, ft({}, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.isCE = !0;
      const i = (s, a) => {
        this.dispatchEvent(
          new CustomEvent(s, {
            detail: a
          })
        );
      };
      r.emit = (s, ...a) => {
        i(s, a), Yt(s) !== s && i(Yt(s), a);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof Da) {
          r.parent = n._instance, r.provides = n._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((r) => {
      const i = document.createElement("style");
      i.textContent = r, this.shadowRoot.appendChild(i);
    });
  }
}
const Yi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (r) => Li(t, r) : t;
};
function Pu(e) {
  e.target.composing = !0;
}
function R0(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wn = {
  created(e, { modifiers: { lazy: t, trim: r, number: i } }, n) {
    e._assign = Yi(n);
    const s = i || n.props && n.props.type === "number";
    Kr(e, t ? "change" : "input", (a) => {
      if (a.target.composing)
        return;
      let o = e.value;
      r && (o = o.trim()), s && (o = ji(o)), e._assign(o);
    }), r && Kr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Kr(e, "compositionstart", Pu), Kr(e, "compositionend", R0), Kr(e, "change", R0));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: r, trim: i, number: n } }, s) {
    if (e._assign = Yi(s), e.composing || document.activeElement === e && e.type !== "range" && (r || i && e.value.trim() === t || (n || e.type === "number") && ji(e.value) === t))
      return;
    const a = t ?? "";
    e.value !== a && (e.value = a);
  }
}, Nu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, i) {
    const n = hs(t);
    Kr(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => r ? ji(Ji(a)) : Ji(a)
      );
      e._assign(
        e.multiple ? n ? new Set(s) : s : s[0]
      );
    }), e._assign = Yi(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    P0(e, t);
  },
  beforeUpdate(e, t, r) {
    e._assign = Yi(r);
  },
  updated(e, { value: t }) {
    P0(e, t);
  }
};
function P0(e, t) {
  const r = e.multiple;
  if (!(r && !Se(t) && !hs(t))) {
    for (let i = 0, n = e.options.length; i < n; i++) {
      const s = e.options[i], a = Ji(s);
      if (r)
        Se(t) ? s.selected = gc(t, a) > -1 : s.selected = t.has(a);
      else if (ds(Ji(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ji(e) {
  return "_value" in e ? e._value : e.value;
}
const Iu = ["ctrl", "shift", "alt", "meta"], bu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Iu.some((r) => e[`${r}Key`] && !t.includes(r))
}, Hn = (e, t) => (r, ...i) => {
  for (let n = 0; n < t.length; n++) {
    const s = bu[t[n]];
    if (s && s(r, t))
      return;
  }
  return e(r, ...i);
}, ku = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Vn = (e, t) => (r) => {
  if (!("key" in r))
    return;
  const i = Yt(r.key);
  if (t.some((n) => n === i || ku[n] === i))
    return e(r);
}, Mu = /* @__PURE__ */ ft({ patchProp: Fu }, pu);
let N0;
function Lu() {
  return N0 || (N0 = jh(Mu));
}
const I0 = (...e) => {
  Lu().render(...e);
};
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var qi = {};
qi.version = "0.18.5";
var cl = 1252, Bu = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], hl = function(e) {
  Bu.indexOf(e) != -1 && (cl = e);
};
function Uu() {
  hl(1252);
}
var oi = function(e) {
  hl(e);
};
function Wu() {
  oi(1200), Uu();
}
function Hu(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var Oi = function(t) {
  return String.fromCharCode(t);
}, b0 = function(t) {
  return String.fromCharCode(t);
}, Yr, Ir = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function li(e) {
  for (var t = "", r = 0, i = 0, n = 0, s = 0, a = 0, o = 0, l = 0, f = 0; f < e.length; )
    r = e.charCodeAt(f++), s = r >> 2, i = e.charCodeAt(f++), a = (r & 3) << 4 | i >> 4, n = e.charCodeAt(f++), o = (i & 15) << 2 | n >> 6, l = n & 63, isNaN(i) ? o = l = 64 : isNaN(n) && (l = 64), t += Ir.charAt(s) + Ir.charAt(a) + Ir.charAt(o) + Ir.charAt(l);
  return t;
}
function Ar(e) {
  var t = "", r = 0, i = 0, n = 0, s = 0, a = 0, o = 0, l = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var f = 0; f < e.length; )
    s = Ir.indexOf(e.charAt(f++)), a = Ir.indexOf(e.charAt(f++)), r = s << 2 | a >> 4, t += String.fromCharCode(r), o = Ir.indexOf(e.charAt(f++)), i = (a & 15) << 4 | o >> 2, o !== 64 && (t += String.fromCharCode(i)), l = Ir.indexOf(e.charAt(f++)), n = (o & 3) << 6 | l, l !== 64 && (t += String.fromCharCode(n));
  return t;
}
var We = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Or = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function tn(e) {
  return We ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function k0(e) {
  return We ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var rr = function(t) {
  return We ? Or(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function ws(e) {
  if (typeof ArrayBuffer > "u")
    return rr(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i != e.length; ++i)
    r[i] = e.charCodeAt(i) & 255;
  return t;
}
function pi(e) {
  if (Array.isArray(e))
    return e.map(function(i) {
      return String.fromCharCode(i);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function Vu(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
var gt = We ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Or(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var i = new Uint8Array(r), n = 0;
    for (t = 0, r = 0; t < e.length; r += n, ++t)
      if (n = e[t].length, e[t] instanceof Uint8Array)
        i.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        i.set(new Uint8Array(e[t]), r);
      }
    return i;
  }
  return [].concat.apply([], e.map(function(s) {
    return Array.isArray(s) ? s : [].slice.call(s);
  }));
};
function Gu(e) {
  for (var t = [], r = 0, i = e.length + 250, n = tn(e.length + 255), s = 0; s < e.length; ++s) {
    var a = e.charCodeAt(s);
    if (a < 128)
      n[r++] = a;
    else if (a < 2048)
      n[r++] = 192 | a >> 6 & 31, n[r++] = 128 | a & 63;
    else if (a >= 55296 && a < 57344) {
      a = (a & 1023) + 64;
      var o = e.charCodeAt(++s) & 1023;
      n[r++] = 240 | a >> 8 & 7, n[r++] = 128 | a >> 2 & 63, n[r++] = 128 | o >> 6 & 15 | (a & 3) << 4, n[r++] = 128 | o & 63;
    } else
      n[r++] = 224 | a >> 12 & 15, n[r++] = 128 | a >> 6 & 63, n[r++] = 128 | a & 63;
    r > i && (t.push(n.slice(0, r)), r = 0, n = tn(65535), i = 65530);
  }
  return t.push(n.slice(0, r)), gt(t);
}
var Jn = /\u0000/g, Di = /[\u0001-\u0006]/g;
function Tn(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function sr(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tt("0", t - r.length) + r;
}
function Ra(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tt(" ", t - r.length) + r;
}
function Zi(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + tt(" ", t - r.length);
}
function ju(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : tt("0", t - r.length) + r;
}
function zu(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tt("0", t - r.length) + r;
}
var M0 = /* @__PURE__ */ Math.pow(2, 32);
function un(e, t) {
  if (e > M0 || e < -M0)
    return ju(e, t);
  var r = Math.round(e);
  return zu(r, t);
}
function Qi(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var L0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Bs = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Xu(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var rt = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, B0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, Ku = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function $i(e, t, r) {
  for (var i = e < 0 ? -1 : 1, n = e * i, s = 0, a = 1, o = 0, l = 1, f = 0, c = 0, h = Math.floor(n); f < t && (h = Math.floor(n), o = h * a + s, c = h * f + l, !(n - h < 5e-8)); )
    n = 1 / (n - h), s = a, a = o, l = f, f = c;
  if (c > t && (f > t ? (c = l, o = s) : (c = f, o = a)), !r)
    return [0, i * o, c];
  var u = Math.floor(i * o / c);
  return [u, i * o - u * c, c];
}
function Ri(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var i = e | 0, n = Math.floor(86400 * (e - i)), s = 0, a = [], o = { D: i, T: n, u: 86400 * (e - i) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(o.u) < 1e-6 && (o.u = 0), t && t.date1904 && (i += 1462), o.u > 0.9999 && (o.u = 0, ++n == 86400 && (o.T = n = 0, ++i, ++o.D)), i === 60)
    a = r ? [1317, 10, 29] : [1900, 2, 29], s = 3;
  else if (i === 0)
    a = r ? [1317, 8, 29] : [1900, 1, 0], s = 6;
  else {
    i > 60 && --i;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + i - 1), a = [l.getFullYear(), l.getMonth() + 1, l.getDate()], s = l.getDay(), i < 60 && (s = (s + 6) % 7), r && (s = e1(l, a));
  }
  return o.y = a[0], o.m = a[1], o.d = a[2], o.S = n % 60, n = Math.floor(n / 60), o.M = n % 60, n = Math.floor(n / 60), o.H = n, o.q = s, o;
}
var ul = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Yu = /* @__PURE__ */ ul.getTime(), Ju = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function dl(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Ju && (r += 24 * 60 * 60 * 1e3), (r - (Yu + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ ul.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function Pa(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function qu(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Zu(e) {
  var t = e < 0 ? 12 : 11, r = Pa(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function Qu(e) {
  var t = Pa(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function $u(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = Zu(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = Qu(e), Pa(qu(r.toUpperCase()));
}
function aa(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : $u(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return Br(14, dl(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function e1(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function t1(e, t, r, i) {
  var n = "", s = 0, a = 0, o = r.y, l, f = 0;
  switch (e) {
    case 98:
      o = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          l = o % 100, f = 2;
          break;
        default:
          l = o % 1e4, f = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          l = r.m, f = t.length;
          break;
        case 3:
          return Bs[r.m - 1][1];
        case 5:
          return Bs[r.m - 1][0];
        default:
          return Bs[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          l = r.d, f = t.length;
          break;
        case 3:
          return L0[r.q][0];
        default:
          return L0[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          l = 1 + (r.H + 11) % 12, f = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          l = r.H, f = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          l = r.M, f = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? sr(r.S, t.length) : (i >= 2 ? a = i === 3 ? 1e3 : 100 : a = i === 1 ? 10 : 1, s = Math.round(a * (r.S + r.u)), s >= 60 * a && (s = 0), t === "s" ? s === 0 ? "0" : "" + s / a : (n = sr(s, 2 + i), t === "ss" ? n.substr(0, 2) : "." + n.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          l = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      f = t.length === 3 ? 1 : 2;
      break;
    case 101:
      l = o, f = 1;
      break;
  }
  var c = f > 0 ? sr(l, f) : "";
  return c;
}
function br(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, i = e.substr(0, r); r != e.length; r += t)
    i += (i.length > 0 ? "," : "") + e.substr(r, t);
  return i;
}
var pl = /%/g;
function r1(e, t, r) {
  var i = t.replace(pl, ""), n = t.length - i.length;
  return Tr(e, i, r * Math.pow(10, 2 * n)) + tt("%", n);
}
function n1(e, t, r) {
  for (var i = t.length - 1; t.charCodeAt(i - 1) === 44; )
    --i;
  return Tr(e, t.substr(0, i), r / Math.pow(10, 3 * (t.length - i)));
}
function xl(e, t) {
  var r, i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + xl(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0 && (s += n), r = (t / Math.pow(10, s)).toPrecision(i + 1 + (n + s) % n), r.indexOf("e") === -1) {
      var a = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (a - r.length + s) : r += "E+" + (a - s); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, l, f, c) {
      return l + f + c.substr(0, (n + s) % n) + "." + c.substr(s) + "E";
    });
  } else
    r = t.toExponential(i);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var ml = /# (\?+)( ?)\/( ?)(\d+)/;
function i1(e, t, r) {
  var i = parseInt(e[4], 10), n = Math.round(t * i), s = Math.floor(n / i), a = n - s * i, o = i;
  return r + (s === 0 ? "" : "" + s) + " " + (a === 0 ? tt(" ", e[1].length + 1 + e[4].length) : Ra(a, e[1].length) + e[2] + "/" + e[3] + sr(o, e[4].length));
}
function s1(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + tt(" ", e[1].length + 2 + e[4].length);
}
var gl = /^#*0*\.([0#]+)/, _l = /\).*[0#]/, vl = /\(###\) ###\\?-####/;
function Rt(e) {
  for (var t = "", r, i = 0; i != e.length; ++i)
    switch (r = e.charCodeAt(i)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function U0(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function W0(e, t) {
  var r = e - Math.floor(e), i = Math.pow(10, t);
  return t < ("" + Math.round(r * i)).length ? 0 : Math.round(r * i);
}
function a1(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function o1(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function Xt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(_l)) {
    var i = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Xt("n", i, r) : "(" + Xt("n", i, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return n1(e, t, r);
  if (t.indexOf("%") !== -1)
    return r1(e, t, r);
  if (t.indexOf("E") !== -1)
    return xl(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Xt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, s, a, o, l = Math.abs(r), f = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return f + un(l, t.length);
  if (t.match(/^[#?]+$/))
    return n = un(r, 0), n === "0" && (n = ""), n.length > t.length ? n : Rt(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(ml))
    return i1(s, l, f);
  if (t.match(/^#+0+$/))
    return f + un(l, t.length - t.indexOf("0"));
  if (s = t.match(gl))
    return n = U0(r, s[1].length).replace(/^([^\.]+)$/, "$1." + Rt(s[1])).replace(/\.$/, "." + Rt(s[1])).replace(/\.(\d*)$/, function(g, d) {
      return "." + d + tt("0", Rt(
        /*::(*/
        s[1]
      ).length - d.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), s = t.match(/^(0*)\.(#*)$/))
    return f + U0(l, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = t.match(/^#{1,3},##0(\.?)$/))
    return f + br(un(l, 0));
  if (s = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Xt(e, t, -r) : br("" + (Math.floor(r) + a1(r, s[1].length))) + "." + sr(W0(r, s[1].length), s[1].length);
  if (s = t.match(/^#,#*,#0/))
    return Xt(e, t.replace(/^#,#*,/, ""), r);
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Tn(Xt(e, t.replace(/[\\-]/g, ""), r)), a = 0, Tn(Tn(t.replace(/\\/g, "")).replace(/[0#]/g, function(g) {
      return a < n.length ? n.charAt(a++) : g === "0" ? "0" : "";
    }));
  if (t.match(vl))
    return n = Xt(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var c = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return a = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), o = $i(l, Math.pow(10, a) - 1, !1), n = "" + f, c = Tr(
      "n",
      /*::String(*/
      s[1],
      o[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), n += c + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], c = Zi(o[2], a), c.length < s[4].length && (c = Rt(s[4].substr(s[4].length - c.length)) + c), n += c, n;
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return a = Math.min(Math.max(s[1].length, s[4].length), 7), o = $i(l, Math.pow(10, a) - 1, !0), f + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Ra(o[1], a) + s[2] + "/" + s[3] + Zi(o[2], a) : tt(" ", 2 * a + 1 + s[2].length + s[3].length));
  if (s = t.match(/^[#0?]+$/))
    return n = un(r, 0), t.length <= n.length ? n : Rt(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), a = n.indexOf(".");
    var h = t.indexOf(".") - a, u = t.length - n.length - h;
    return Rt(t.substr(0, h) + n + t.substr(t.length - u));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/))
    return a = W0(r, s[1].length), r < 0 ? "-" + Xt(e, t, -r) : br(o1(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(g) {
      return "00," + (g.length < 3 ? sr(0, 3 - g.length) : "") + g;
    }) + "." + sr(a, s[1].length);
  switch (t) {
    case "###,##0.00":
      return Xt(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var p = br(un(l, 0));
      return p !== "0" ? f + p : "";
    case "###,###.00":
      return Xt(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Xt(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function l1(e, t, r) {
  for (var i = t.length - 1; t.charCodeAt(i - 1) === 44; )
    --i;
  return Tr(e, t.substr(0, i), r / Math.pow(10, 3 * (t.length - i)));
}
function f1(e, t, r) {
  var i = t.replace(pl, ""), n = t.length - i.length;
  return Tr(e, i, r * Math.pow(10, 2 * n)) + tt("%", n);
}
function El(e, t) {
  var r, i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + El(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (s < 0 && (s += n), r = (t / Math.pow(10, s)).toPrecision(i + 1 + (n + s) % n), !r.match(/[Ee]/)) {
      var a = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (a - r.length + s) : r += "E+" + (a - s), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, l, f, c) {
      return l + f + c.substr(0, (n + s) % n) + "." + c.substr(s) + "E";
    });
  } else
    r = t.toExponential(i);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function hr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(_l)) {
    var i = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? hr("n", i, r) : "(" + hr("n", i, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return l1(e, t, r);
  if (t.indexOf("%") !== -1)
    return f1(e, t, r);
  if (t.indexOf("E") !== -1)
    return El(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + hr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, s, a, o, l = Math.abs(r), f = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return f + sr(l, t.length);
  if (t.match(/^[#?]+$/))
    return n = "" + r, r === 0 && (n = ""), n.length > t.length ? n : Rt(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(ml))
    return s1(s, l, f);
  if (t.match(/^#+0+$/))
    return f + sr(l, t.length - t.indexOf("0"));
  if (s = t.match(gl))
    return n = ("" + r).replace(/^([^\.]+)$/, "$1." + Rt(s[1])).replace(/\.$/, "." + Rt(s[1])), n = n.replace(/\.(\d*)$/, function(g, d) {
      return "." + d + tt("0", Rt(s[1]).length - d.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), s = t.match(/^(0*)\.(#*)$/))
    return f + ("" + l).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = t.match(/^#{1,3},##0(\.?)$/))
    return f + br("" + l);
  if (s = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + hr(e, t, -r) : br("" + r) + "." + tt("0", s[1].length);
  if (s = t.match(/^#,#*,#0/))
    return hr(e, t.replace(/^#,#*,/, ""), r);
  if (s = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Tn(hr(e, t.replace(/[\\-]/g, ""), r)), a = 0, Tn(Tn(t.replace(/\\/g, "")).replace(/[0#]/g, function(g) {
      return a < n.length ? n.charAt(a++) : g === "0" ? "0" : "";
    }));
  if (t.match(vl))
    return n = hr(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var c = "";
  if (s = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return a = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), o = $i(l, Math.pow(10, a) - 1, !1), n = "" + f, c = Tr(
      "n",
      /*::String(*/
      s[1],
      o[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), n += c + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], c = Zi(o[2], a), c.length < s[4].length && (c = Rt(s[4].substr(s[4].length - c.length)) + c), n += c, n;
  if (s = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return a = Math.min(Math.max(s[1].length, s[4].length), 7), o = $i(l, Math.pow(10, a) - 1, !0), f + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Ra(o[1], a) + s[2] + "/" + s[3] + Zi(o[2], a) : tt(" ", 2 * a + 1 + s[2].length + s[3].length));
  if (s = t.match(/^[#0?]+$/))
    return n = "" + r, t.length <= n.length ? n : Rt(t.substr(0, t.length - n.length)) + n;
  if (s = t.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), a = n.indexOf(".");
    var h = t.indexOf(".") - a, u = t.length - n.length - h;
    return Rt(t.substr(0, h) + n + t.substr(t.length - u));
  }
  if (s = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + hr(e, t, -r) : br("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(g) {
      return "00," + (g.length < 3 ? sr(0, 3 - g.length) : "") + g;
    }) + "." + sr(0, s[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var p = br("" + l);
      return p !== "0" ? f + p : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return hr(e, t.slice(0, t.lastIndexOf(".")), r) + Rt(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function Tr(e, t, r) {
  return (r | 0) === r ? hr(e, t, r) : Xt(e, t, r);
}
function c1(e) {
  for (var t = [], r = !1, i = 0, n = 0; i < e.length; ++i)
    switch (
      /*cc=*/
      e.charCodeAt(i)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++i;
        break;
      case 59:
        t[t.length] = e.substr(n, i - n), n = i + 1;
    }
  if (t[t.length] = e.substr(n), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var Tl = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function wl(e) {
  for (var t = 0, r = "", i = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        Qi(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午")
          return !0;
        ++t;
        break;
      case "[":
        for (i = r; e.charAt(t++) !== "]" && t < e.length; )
          i += e.charAt(t);
        if (i.match(Tl))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function h1(e, t, r, i) {
  for (var n = [], s = "", a = 0, o = "", l = "t", f, c, h, u = "H"; a < e.length; )
    switch (o = e.charAt(a)) {
      case "G":
        if (!Qi(e, a))
          throw new Error("unrecognized character " + o + " in " + e);
        n[n.length] = { t: "G", v: "General" }, a += 7;
        break;
      case '"':
        for (s = ""; (h = e.charCodeAt(++a)) !== 34 && a < e.length; )
          s += String.fromCharCode(h);
        n[n.length] = { t: "t", v: s }, ++a;
        break;
      case "\\":
        var p = e.charAt(++a), g = p === "(" || p === ")" ? p : "t";
        n[n.length] = { t: g, v: p }, ++a;
        break;
      case "_":
        n[n.length] = { t: "t", v: " " }, a += 2;
        break;
      case "@":
        n[n.length] = { t: "T", v: t }, ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") {
          if (f == null && (f = Ri(t, r, e.charAt(a + 1) === "2"), f == null))
            return "";
          n[n.length] = { t: "X", v: e.substr(a, 2) }, l = o, a += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        o = o.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || f == null && (f = Ri(t, r), f == null))
          return "";
        for (s = o; ++a < e.length && e.charAt(a).toLowerCase() === o; )
          s += o;
        o === "m" && l.toLowerCase() === "h" && (o = "M"), o === "h" && (o = u), n[n.length] = { t: o, v: s }, l = o;
        break;
      case "A":
      case "a":
      case "上":
        var d = { t: o, v: o };
        if (f == null && (f = Ri(t, r)), e.substr(a, 3).toUpperCase() === "A/P" ? (f != null && (d.v = f.H >= 12 ? "P" : "A"), d.t = "T", u = "h", a += 3) : e.substr(a, 5).toUpperCase() === "AM/PM" ? (f != null && (d.v = f.H >= 12 ? "PM" : "AM"), d.t = "T", a += 5, u = "h") : e.substr(a, 5).toUpperCase() === "上午/下午" ? (f != null && (d.v = f.H >= 12 ? "下午" : "上午"), d.t = "T", a += 5, u = "h") : (d.t = "t", ++a), f == null && d.t === "T")
          return "";
        n[n.length] = d, l = o;
        break;
      case "[":
        for (s = o; e.charAt(a++) !== "]" && a < e.length; )
          s += e.charAt(a);
        if (s.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + s + "|";
        if (s.match(Tl)) {
          if (f == null && (f = Ri(t, r), f == null))
            return "";
          n[n.length] = { t: "Z", v: s.toLowerCase() }, l = s.charAt(1);
        } else
          s.indexOf("$") > -1 && (s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$", wl(e) || (n[n.length] = { t: "t", v: s }));
        break;
      case ".":
        if (f != null) {
          for (s = o; ++a < e.length && (o = e.charAt(a)) === "0"; )
            s += o;
          n[n.length] = { t: "s", v: s };
          break;
        }
      case "0":
      case "#":
        for (s = o; ++a < e.length && "0#?.,E+-%".indexOf(o = e.charAt(a)) > -1; )
          s += o;
        n[n.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = o; e.charAt(++a) === o; )
          s += o;
        n[n.length] = { t: o, v: s }, l = o;
        break;
      case "*":
        ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
        break;
      case "(":
      case ")":
        n[n.length] = { t: i === 1 ? "t" : o, v: o }, ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = o; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; )
          s += e.charAt(a);
        n[n.length] = { t: "D", v: s };
        break;
      case " ":
        n[n.length] = { t: o, v: o }, ++a;
        break;
      case "$":
        n[n.length] = { t: "t", v: "$" }, ++a;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o) === -1)
          throw new Error("unrecognized character " + o + " in " + e);
        n[n.length] = { t: "t", v: o }, ++a;
        break;
    }
  var v = 0, O = 0, R;
  for (a = n.length - 1, l = "t"; a >= 0; --a)
    switch (n[a].t) {
      case "h":
      case "H":
        n[a].t = u, l = "h", v < 1 && (v = 1);
        break;
      case "s":
        (R = n[a].v.match(/\.0+$/)) && (O = Math.max(O, R[0].length - 1)), v < 3 && (v = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        l = n[a].t;
        break;
      case "m":
        l === "s" && (n[a].t = "M", v < 2 && (v = 2));
        break;
      case "X":
        break;
      case "Z":
        v < 1 && n[a].v.match(/[Hh]/) && (v = 1), v < 2 && n[a].v.match(/[Mm]/) && (v = 2), v < 3 && n[a].v.match(/[Ss]/) && (v = 3);
    }
  switch (v) {
    case 0:
      break;
    case 1:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M), f.M >= 60 && (f.M = 0, ++f.H);
      break;
    case 2:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M);
      break;
  }
  var y = "", P;
  for (a = 0; a < n.length; ++a)
    switch (n[a].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[a].v = "", n[a].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[a].v = t1(n[a].t.charCodeAt(0), n[a].v, f, O), n[a].t = "t";
        break;
      case "n":
      case "?":
        for (P = a + 1; n[P] != null && ((o = n[P].t) === "?" || o === "D" || (o === " " || o === "t") && n[P + 1] != null && (n[P + 1].t === "?" || n[P + 1].t === "t" && n[P + 1].v === "/") || n[a].t === "(" && (o === " " || o === "n" || o === ")") || o === "t" && (n[P].v === "/" || n[P].v === " " && n[P + 1] != null && n[P + 1].t == "?")); )
          n[a].v += n[P].v, n[P] = { v: "", t: ";" }, ++P;
        y += n[a].v, a = P - 1;
        break;
      case "G":
        n[a].t = "t", n[a].v = aa(t, r);
        break;
    }
  var ie = "", de, N;
  if (y.length > 0) {
    y.charCodeAt(0) == 40 ? (de = t < 0 && y.charCodeAt(0) === 45 ? -t : t, N = Tr("n", y, de)) : (de = t < 0 && i > 1 ? -t : t, N = Tr("n", y, de), de < 0 && n[0] && n[0].t == "t" && (N = N.substr(1), n[0].v = "-" + n[0].v)), P = N.length - 1;
    var j = n.length;
    for (a = 0; a < n.length; ++a)
      if (n[a] != null && n[a].t != "t" && n[a].v.indexOf(".") > -1) {
        j = a;
        break;
      }
    var W = n.length;
    if (j === n.length && N.indexOf("E") === -1) {
      for (a = n.length - 1; a >= 0; --a)
        n[a] == null || "n?".indexOf(n[a].t) === -1 || (P >= n[a].v.length - 1 ? (P -= n[a].v.length, n[a].v = N.substr(P + 1, n[a].v.length)) : P < 0 ? n[a].v = "" : (n[a].v = N.substr(0, P + 1), P = -1), n[a].t = "t", W = a);
      P >= 0 && W < n.length && (n[W].v = N.substr(0, P + 1) + n[W].v);
    } else if (j !== n.length && N.indexOf("E") === -1) {
      for (P = N.indexOf(".") - 1, a = j; a >= 0; --a)
        if (!(n[a] == null || "n?".indexOf(n[a].t) === -1)) {
          for (c = n[a].v.indexOf(".") > -1 && a === j ? n[a].v.indexOf(".") - 1 : n[a].v.length - 1, ie = n[a].v.substr(c + 1); c >= 0; --c)
            P >= 0 && (n[a].v.charAt(c) === "0" || n[a].v.charAt(c) === "#") && (ie = N.charAt(P--) + ie);
          n[a].v = ie, n[a].t = "t", W = a;
        }
      for (P >= 0 && W < n.length && (n[W].v = N.substr(0, P + 1) + n[W].v), P = N.indexOf(".") + 1, a = j; a < n.length; ++a)
        if (!(n[a] == null || "n?(".indexOf(n[a].t) === -1 && a !== j)) {
          for (c = n[a].v.indexOf(".") > -1 && a === j ? n[a].v.indexOf(".") + 1 : 0, ie = n[a].v.substr(0, c); c < n[a].v.length; ++c)
            P < N.length && (ie += N.charAt(P++));
          n[a].v = ie, n[a].t = "t", W = a;
        }
    }
  }
  for (a = 0; a < n.length; ++a)
    n[a] != null && "n?".indexOf(n[a].t) > -1 && (de = i > 1 && t < 0 && a > 0 && n[a - 1].v === "-" ? -t : t, n[a].v = Tr(n[a].t, n[a].v, de), n[a].t = "t");
  var Y = "";
  for (a = 0; a !== n.length; ++a)
    n[a] != null && (Y += n[a].v);
  return Y;
}
var H0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function V0(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function u1(e, t) {
  var r = c1(e), i = r.length, n = r[i - 1].indexOf("@");
  if (i < 4 && n > -1 && --i, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || n > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var s = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [i, s];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var a = r[0].match(H0), o = r[1].match(H0);
    return V0(t, a) ? [i, r[0]] : V0(t, o) ? [i, r[1]] : [i, r[a != null && o != null ? 2 : 1]];
  }
  return [i, s];
}
function Br(e, t, r) {
  r == null && (r = {});
  var i = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? i = r.dateNF : i = e;
      break;
    case "number":
      e == 14 && r.dateNF ? i = r.dateNF : i = (r.table != null ? r.table : rt)[e], i == null && (i = r.table && r.table[B0[e]] || rt[B0[e]]), i == null && (i = Ku[e] || "General");
      break;
  }
  if (Qi(i, 0))
    return aa(t, r);
  t instanceof Date && (t = dl(t, r.date1904));
  var n = u1(i, t);
  if (Qi(n[1]))
    return aa(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return h1(n[1], t, r, n[0]);
}
function Sl(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (rt[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (rt[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return rt[t] = e, t;
}
function Ss(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && Sl(e[t], t);
}
function Cs() {
  rt = Xu();
}
var Cl = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function d1(e) {
  var t = typeof e == "number" ? rt[e] : e;
  return t = t.replace(Cl, "(\\d+)"), new RegExp("^" + t + "$");
}
function p1(e, t, r) {
  var i = -1, n = -1, s = -1, a = -1, o = -1, l = -1;
  (t.match(Cl) || []).forEach(function(h, u) {
    var p = parseInt(r[u + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case "y":
        i = p;
        break;
      case "d":
        s = p;
        break;
      case "h":
        a = p;
        break;
      case "s":
        l = p;
        break;
      case "m":
        a >= 0 ? o = p : n = p;
        break;
    }
  }), l >= 0 && o == -1 && n >= 0 && (o = n, n = -1);
  var f = ("" + (i >= 0 ? i : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  f.length == 7 && (f = "0" + f), f.length == 8 && (f = "20" + f);
  var c = ("00" + (a >= 0 ? a : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2);
  return a == -1 && o == -1 && l == -1 ? f : i == -1 && n == -1 && s == -1 ? c : f + "T" + c;
}
var x1 = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var N = 0, j = new Array(256), W = 0; W != 256; ++W)
      N = W, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, N = N & 1 ? -306674912 ^ N >>> 1 : N >>> 1, j[W] = N;
    return typeof Int32Array < "u" ? new Int32Array(j) : j;
  }
  var r = t();
  function i(N) {
    var j = 0, W = 0, Y = 0, q = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (Y = 0; Y != 256; ++Y)
      q[Y] = N[Y];
    for (Y = 0; Y != 256; ++Y)
      for (W = N[Y], j = 256 + Y; j < 4096; j += 256)
        W = q[j] = W >>> 8 ^ N[W & 255];
    var te = [];
    for (Y = 1; Y != 16; ++Y)
      te[Y - 1] = typeof Int32Array < "u" ? q.subarray(Y * 256, Y * 256 + 256) : q.slice(Y * 256, Y * 256 + 256);
    return te;
  }
  var n = i(r), s = n[0], a = n[1], o = n[2], l = n[3], f = n[4], c = n[5], h = n[6], u = n[7], p = n[8], g = n[9], d = n[10], v = n[11], O = n[12], R = n[13], y = n[14];
  function P(N, j) {
    for (var W = j ^ -1, Y = 0, q = N.length; Y < q; )
      W = W >>> 8 ^ r[(W ^ N.charCodeAt(Y++)) & 255];
    return ~W;
  }
  function ie(N, j) {
    for (var W = j ^ -1, Y = N.length - 15, q = 0; q < Y; )
      W = y[N[q++] ^ W & 255] ^ R[N[q++] ^ W >> 8 & 255] ^ O[N[q++] ^ W >> 16 & 255] ^ v[N[q++] ^ W >>> 24] ^ d[N[q++]] ^ g[N[q++]] ^ p[N[q++]] ^ u[N[q++]] ^ h[N[q++]] ^ c[N[q++]] ^ f[N[q++]] ^ l[N[q++]] ^ o[N[q++]] ^ a[N[q++]] ^ s[N[q++]] ^ r[N[q++]];
    for (Y += 15; q < Y; )
      W = W >>> 8 ^ r[(W ^ N[q++]) & 255];
    return ~W;
  }
  function de(N, j) {
    for (var W = j ^ -1, Y = 0, q = N.length, te = 0, pe = 0; Y < q; )
      te = N.charCodeAt(Y++), te < 128 ? W = W >>> 8 ^ r[(W ^ te) & 255] : te < 2048 ? (W = W >>> 8 ^ r[(W ^ (192 | te >> 6 & 31)) & 255], W = W >>> 8 ^ r[(W ^ (128 | te & 63)) & 255]) : te >= 55296 && te < 57344 ? (te = (te & 1023) + 64, pe = N.charCodeAt(Y++) & 1023, W = W >>> 8 ^ r[(W ^ (240 | te >> 8 & 7)) & 255], W = W >>> 8 ^ r[(W ^ (128 | te >> 2 & 63)) & 255], W = W >>> 8 ^ r[(W ^ (128 | pe >> 6 & 15 | (te & 3) << 4)) & 255], W = W >>> 8 ^ r[(W ^ (128 | pe & 63)) & 255]) : (W = W >>> 8 ^ r[(W ^ (224 | te >> 12 & 15)) & 255], W = W >>> 8 ^ r[(W ^ (128 | te >> 6 & 63)) & 255], W = W >>> 8 ^ r[(W ^ (128 | te & 63)) & 255]);
    return ~W;
  }
  return e.table = r, e.bstr = P, e.buf = ie, e.str = de, e;
}(), Ke = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(x, E) {
    for (var m = x.split("/"), _ = E.split("/"), T = 0, w = 0, k = Math.min(m.length, _.length); T < k; ++T) {
      if (w = m[T].length - _[T].length)
        return w;
      if (m[T] != _[T])
        return m[T] < _[T] ? -1 : 1;
    }
    return m.length - _.length;
  }
  function i(x) {
    if (x.charAt(x.length - 1) == "/")
      return x.slice(0, -1).indexOf("/") === -1 ? x : i(x.slice(0, -1));
    var E = x.lastIndexOf("/");
    return E === -1 ? x : x.slice(0, E + 1);
  }
  function n(x) {
    if (x.charAt(x.length - 1) == "/")
      return n(x.slice(0, -1));
    var E = x.lastIndexOf("/");
    return E === -1 ? x : x.slice(E + 1);
  }
  function s(x, E) {
    typeof E == "string" && (E = new Date(E));
    var m = E.getHours();
    m = m << 6 | E.getMinutes(), m = m << 5 | E.getSeconds() >>> 1, x.write_shift(2, m);
    var _ = E.getFullYear() - 1980;
    _ = _ << 4 | E.getMonth() + 1, _ = _ << 5 | E.getDate(), x.write_shift(2, _);
  }
  function a(x) {
    var E = x.read_shift(2) & 65535, m = x.read_shift(2) & 65535, _ = /* @__PURE__ */ new Date(), T = m & 31;
    m >>>= 5;
    var w = m & 15;
    m >>>= 4, _.setMilliseconds(0), _.setFullYear(m + 1980), _.setMonth(w - 1), _.setDate(T);
    var k = E & 31;
    E >>>= 5;
    var G = E & 63;
    return E >>>= 6, _.setHours(E), _.setMinutes(G), _.setSeconds(k << 1), _;
  }
  function o(x) {
    Ht(x, 0);
    for (var E = (
      /*::(*/
      {}
    ), m = 0; x.l <= x.length - 4; ) {
      var _ = x.read_shift(2), T = x.read_shift(2), w = x.l + T, k = {};
      switch (_) {
        case 21589:
          m = x.read_shift(1), m & 1 && (k.mtime = x.read_shift(4)), T > 5 && (m & 2 && (k.atime = x.read_shift(4)), m & 4 && (k.ctime = x.read_shift(4))), k.mtime && (k.mt = new Date(k.mtime * 1e3));
          break;
      }
      x.l = w, E[_] = k;
    }
    return E;
  }
  var l;
  function f() {
    return l || (l = {});
  }
  function c(x, E) {
    if (x[0] == 80 && x[1] == 75)
      return $a(x, E);
    if ((x[0] | 32) == 109 && (x[1] | 32) == 105)
      return Qf(x, E);
    if (x.length < 512)
      throw new Error("CFB file size " + x.length + " < 512");
    var m = 3, _ = 512, T = 0, w = 0, k = 0, G = 0, b = 0, M = [], B = (
      /*::(*/
      x.slice(0, 512)
    );
    Ht(B, 0);
    var se = h(B);
    switch (m = se[0], m) {
      case 3:
        _ = 512;
        break;
      case 4:
        _ = 4096;
        break;
      case 0:
        if (se[1] == 0)
          return $a(x, E);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + m);
    }
    _ !== 512 && (B = /*::(*/
    x.slice(0, _), Ht(
      B,
      28
      /* blob.l */
    ));
    var he = x.slice(0, _);
    u(B, m);
    var ge = B.read_shift(4, "i");
    if (m === 3 && ge !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + ge);
    B.l += 4, k = B.read_shift(4, "i"), B.l += 4, B.chk("00100000", "Mini Stream Cutoff Size: "), G = B.read_shift(4, "i"), T = B.read_shift(4, "i"), b = B.read_shift(4, "i"), w = B.read_shift(4, "i");
    for (var ae = -1, xe = 0; xe < 109 && (ae = B.read_shift(4, "i"), !(ae < 0)); ++xe)
      M[xe] = ae;
    var Fe = p(x, _);
    v(b, w, Fe, _, M);
    var Qe = R(Fe, k, M, _);
    Qe[k].name = "!Directory", T > 0 && G !== pe && (Qe[G].name = "!MiniFAT"), Qe[M[0]].name = "!FAT", Qe.fat_addrs = M, Qe.ssz = _;
    var $e = {}, wt = [], Mn = [], Ln = [];
    y(k, Qe, Fe, wt, T, $e, Mn, G), g(Mn, Ln, wt), wt.shift();
    var Bn = {
      FileIndex: Mn,
      FullPaths: Ln
    };
    return E && E.raw && (Bn.raw = { header: he, sectors: Fe }), Bn;
  }
  function h(x) {
    if (x[x.l] == 80 && x[x.l + 1] == 75)
      return [0, 0];
    x.chk(Le, "Header Signature: "), x.l += 16;
    var E = x.read_shift(2, "u");
    return [x.read_shift(2, "u"), E];
  }
  function u(x, E) {
    var m = 9;
    switch (x.l += 2, m = x.read_shift(2)) {
      case 9:
        if (E != 3)
          throw new Error("Sector Shift: Expected 9 saw " + m);
        break;
      case 12:
        if (E != 4)
          throw new Error("Sector Shift: Expected 12 saw " + m);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + m);
    }
    x.chk("0600", "Mini Sector Shift: "), x.chk("000000000000", "Reserved: ");
  }
  function p(x, E) {
    for (var m = Math.ceil(x.length / E) - 1, _ = [], T = 1; T < m; ++T)
      _[T - 1] = x.slice(T * E, (T + 1) * E);
    return _[m - 1] = x.slice(m * E), _;
  }
  function g(x, E, m) {
    for (var _ = 0, T = 0, w = 0, k = 0, G = 0, b = m.length, M = [], B = []; _ < b; ++_)
      M[_] = B[_] = _, E[_] = m[_];
    for (; G < B.length; ++G)
      _ = B[G], T = x[_].L, w = x[_].R, k = x[_].C, M[_] === _ && (T !== -1 && M[T] !== T && (M[_] = M[T]), w !== -1 && M[w] !== w && (M[_] = M[w])), k !== -1 && (M[k] = _), T !== -1 && _ != M[_] && (M[T] = M[_], B.lastIndexOf(T) < G && B.push(T)), w !== -1 && _ != M[_] && (M[w] = M[_], B.lastIndexOf(w) < G && B.push(w));
    for (_ = 1; _ < b; ++_)
      M[_] === _ && (w !== -1 && M[w] !== w ? M[_] = M[w] : T !== -1 && M[T] !== T && (M[_] = M[T]));
    for (_ = 1; _ < b; ++_)
      if (x[_].type !== 0) {
        if (G = _, G != M[G])
          do
            G = M[G], E[_] = E[G] + "/" + E[_];
          while (G !== 0 && M[G] !== -1 && G != M[G]);
        M[_] = -1;
      }
    for (E[0] += "/", _ = 1; _ < b; ++_)
      x[_].type !== 2 && (E[_] += "/");
  }
  function d(x, E, m) {
    for (var _ = x.start, T = x.size, w = [], k = _; m && T > 0 && k >= 0; )
      w.push(E.slice(k * te, k * te + te)), T -= te, k = Jr(m, k * 4);
    return w.length === 0 ? H(0) : gt(w).slice(0, x.size);
  }
  function v(x, E, m, _, T) {
    var w = pe;
    if (x === pe) {
      if (E !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (x !== -1) {
      var k = m[x], G = (_ >>> 2) - 1;
      if (!k)
        return;
      for (var b = 0; b < G && (w = Jr(k, b * 4)) !== pe; ++b)
        T.push(w);
      v(Jr(k, _ - 4), E - 1, m, _, T);
    }
  }
  function O(x, E, m, _, T) {
    var w = [], k = [];
    T || (T = []);
    var G = _ - 1, b = 0, M = 0;
    for (b = E; b >= 0; ) {
      T[b] = !0, w[w.length] = b, k.push(x[b]);
      var B = m[Math.floor(b * 4 / _)];
      if (M = b * 4 & G, _ < 4 + M)
        throw new Error("FAT boundary crossed: " + b + " 4 " + _);
      if (!x[B])
        break;
      b = Jr(x[B], M);
    }
    return { nodes: w, data: q0([k]) };
  }
  function R(x, E, m, _) {
    var T = x.length, w = [], k = [], G = [], b = [], M = _ - 1, B = 0, se = 0, he = 0, ge = 0;
    for (B = 0; B < T; ++B)
      if (G = [], he = B + E, he >= T && (he -= T), !k[he]) {
        b = [];
        var ae = [];
        for (se = he; se >= 0; ) {
          ae[se] = !0, k[se] = !0, G[G.length] = se, b.push(x[se]);
          var xe = m[Math.floor(se * 4 / _)];
          if (ge = se * 4 & M, _ < 4 + ge)
            throw new Error("FAT boundary crossed: " + se + " 4 " + _);
          if (!x[xe] || (se = Jr(x[xe], ge), ae[se]))
            break;
        }
        w[he] = { nodes: G, data: q0([b]) };
      }
    return w;
  }
  function y(x, E, m, _, T, w, k, G) {
    for (var b = 0, M = _.length ? 2 : 0, B = E[x].data, se = 0, he = 0, ge; se < B.length; se += 128) {
      var ae = (
        /*::(*/
        B.slice(se, se + 128)
      );
      Ht(ae, 64), he = ae.read_shift(2), ge = Ma(ae, 0, he - M), _.push(ge);
      var xe = {
        name: ge,
        type: ae.read_shift(1),
        color: ae.read_shift(1),
        L: ae.read_shift(4, "i"),
        R: ae.read_shift(4, "i"),
        C: ae.read_shift(4, "i"),
        clsid: ae.read_shift(16),
        state: ae.read_shift(4, "i"),
        start: 0,
        size: 0
      }, Fe = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      Fe !== 0 && (xe.ct = P(ae, ae.l - 8));
      var Qe = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      Qe !== 0 && (xe.mt = P(ae, ae.l - 8)), xe.start = ae.read_shift(4, "i"), xe.size = ae.read_shift(4, "i"), xe.size < 0 && xe.start < 0 && (xe.size = xe.type = 0, xe.start = pe, xe.name = ""), xe.type === 5 ? (b = xe.start, T > 0 && b !== pe && (E[b].name = "!StreamData")) : xe.size >= 4096 ? (xe.storage = "fat", E[xe.start] === void 0 && (E[xe.start] = O(m, xe.start, E.fat_addrs, E.ssz)), E[xe.start].name = xe.name, xe.content = E[xe.start].data.slice(0, xe.size)) : (xe.storage = "minifat", xe.size < 0 ? xe.size = 0 : b !== pe && xe.start !== pe && E[b] && (xe.content = d(xe, E[b].data, (E[G] || {}).data))), xe.content && Ht(xe.content, 0), w[ge] = xe, k.push(xe);
    }
  }
  function P(x, E) {
    return new Date((Gt(x, E + 4) / 1e7 * Math.pow(2, 32) + Gt(x, E) / 1e7 - 11644473600) * 1e3);
  }
  function ie(x, E) {
    return f(), c(l.readFileSync(x), E);
  }
  function de(x, E) {
    var m = E && E.type;
    switch (m || We && Buffer.isBuffer(x) && (m = "buffer"), m || "base64") {
      case "file":
        return ie(x, E);
      case "base64":
        return c(rr(Ar(x)), E);
      case "binary":
        return c(rr(x), E);
    }
    return c(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      x,
      E
    );
  }
  function N(x, E) {
    var m = E || {}, _ = m.root || "Root Entry";
    if (x.FullPaths || (x.FullPaths = []), x.FileIndex || (x.FileIndex = []), x.FullPaths.length !== x.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    x.FullPaths.length === 0 && (x.FullPaths[0] = _ + "/", x.FileIndex[0] = { name: _, type: 5 }), m.CLSID && (x.FileIndex[0].clsid = m.CLSID), j(x);
  }
  function j(x) {
    var E = "Sh33tJ5";
    if (!Ke.find(x, "/" + E)) {
      var m = H(4);
      m[0] = 55, m[1] = m[3] = 50, m[2] = 54, x.FileIndex.push({ name: E, type: 2, content: m, size: 4, L: 69, R: 69, C: 69 }), x.FullPaths.push(x.FullPaths[0] + E), W(x);
    }
  }
  function W(x, E) {
    N(x);
    for (var m = !1, _ = !1, T = x.FullPaths.length - 1; T >= 0; --T) {
      var w = x.FileIndex[T];
      switch (w.type) {
        case 0:
          _ ? m = !0 : (x.FileIndex.pop(), x.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          _ = !0, isNaN(w.R * w.L * w.C) && (m = !0), w.R > -1 && w.L > -1 && w.R == w.L && (m = !0);
          break;
        default:
          m = !0;
          break;
      }
    }
    if (!(!m && !E)) {
      var k = new Date(1987, 1, 19), G = 0, b = Object.create ? /* @__PURE__ */ Object.create(null) : {}, M = [];
      for (T = 0; T < x.FullPaths.length; ++T)
        b[x.FullPaths[T]] = !0, x.FileIndex[T].type !== 0 && M.push([x.FullPaths[T], x.FileIndex[T]]);
      for (T = 0; T < M.length; ++T) {
        var B = i(M[T][0]);
        _ = b[B], _ || (M.push([B, {
          name: n(B).replace("/", ""),
          type: 1,
          clsid: ke,
          ct: k,
          mt: k,
          content: null
        }]), b[B] = !0);
      }
      for (M.sort(function(ge, ae) {
        return r(ge[0], ae[0]);
      }), x.FullPaths = [], x.FileIndex = [], T = 0; T < M.length; ++T)
        x.FullPaths[T] = M[T][0], x.FileIndex[T] = M[T][1];
      for (T = 0; T < M.length; ++T) {
        var se = x.FileIndex[T], he = x.FullPaths[T];
        if (se.name = n(he).replace("/", ""), se.L = se.R = se.C = -(se.color = 1), se.size = se.content ? se.content.length : 0, se.start = 0, se.clsid = se.clsid || ke, T === 0)
          se.C = M.length > 1 ? 1 : -1, se.size = 0, se.type = 5;
        else if (he.slice(-1) == "/") {
          for (G = T + 1; G < M.length && i(x.FullPaths[G]) != he; ++G)
            ;
          for (se.C = G >= M.length ? -1 : G, G = T + 1; G < M.length && i(x.FullPaths[G]) != i(he); ++G)
            ;
          se.R = G >= M.length ? -1 : G, se.type = 1;
        } else
          i(x.FullPaths[T + 1] || "") == i(he) && (se.R = T + 1), se.type = 2;
      }
    }
  }
  function Y(x, E) {
    var m = E || {};
    if (m.fileType == "mad")
      return $f(x, m);
    switch (W(x), m.fileType) {
      case "zip":
        return Xf(x, m);
    }
    var _ = function(ge) {
      for (var ae = 0, xe = 0, Fe = 0; Fe < ge.FileIndex.length; ++Fe) {
        var Qe = ge.FileIndex[Fe];
        if (Qe.content) {
          var $e = Qe.content.length;
          $e > 0 && ($e < 4096 ? ae += $e + 63 >> 6 : xe += $e + 511 >> 9);
        }
      }
      for (var wt = ge.FullPaths.length + 3 >> 2, Mn = ae + 7 >> 3, Ln = ae + 127 >> 7, Bn = Mn + xe + wt + Ln, Vr = Bn + 127 >> 7, Ps = Vr <= 109 ? 0 : Math.ceil((Vr - 109) / 127); Bn + Vr + Ps + 127 >> 7 > Vr; )
        Ps = ++Vr <= 109 ? 0 : Math.ceil((Vr - 109) / 127);
      var gr = [1, Ps, Vr, Ln, wt, xe, ae, 0];
      return ge.FileIndex[0].size = ae << 6, gr[7] = (ge.FileIndex[0].start = gr[0] + gr[1] + gr[2] + gr[3] + gr[4] + gr[5]) + (gr[6] + 7 >> 3), gr;
    }(x), T = H(_[7] << 9), w = 0, k = 0;
    {
      for (w = 0; w < 8; ++w)
        T.write_shift(1, Ae[w]);
      for (w = 0; w < 8; ++w)
        T.write_shift(2, 0);
      for (T.write_shift(2, 62), T.write_shift(2, 3), T.write_shift(2, 65534), T.write_shift(2, 9), T.write_shift(2, 6), w = 0; w < 3; ++w)
        T.write_shift(2, 0);
      for (T.write_shift(4, 0), T.write_shift(4, _[2]), T.write_shift(4, _[0] + _[1] + _[2] + _[3] - 1), T.write_shift(4, 0), T.write_shift(4, 4096), T.write_shift(4, _[3] ? _[0] + _[1] + _[2] - 1 : pe), T.write_shift(4, _[3]), T.write_shift(-4, _[1] ? _[0] - 1 : pe), T.write_shift(4, _[1]), w = 0; w < 109; ++w)
        T.write_shift(-4, w < _[2] ? _[1] + w : -1);
    }
    if (_[1])
      for (k = 0; k < _[1]; ++k) {
        for (; w < 236 + k * 127; ++w)
          T.write_shift(-4, w < _[2] ? _[1] + w : -1);
        T.write_shift(-4, k === _[1] - 1 ? pe : k + 1);
      }
    var G = function(ge) {
      for (k += ge; w < k - 1; ++w)
        T.write_shift(-4, w + 1);
      ge && (++w, T.write_shift(-4, pe));
    };
    for (k = w = 0, k += _[1]; w < k; ++w)
      T.write_shift(-4, ye.DIFSECT);
    for (k += _[2]; w < k; ++w)
      T.write_shift(-4, ye.FATSECT);
    G(_[3]), G(_[4]);
    for (var b = 0, M = 0, B = x.FileIndex[0]; b < x.FileIndex.length; ++b)
      B = x.FileIndex[b], B.content && (M = B.content.length, !(M < 4096) && (B.start = k, G(M + 511 >> 9)));
    for (G(_[6] + 7 >> 3); T.l & 511; )
      T.write_shift(-4, ye.ENDOFCHAIN);
    for (k = w = 0, b = 0; b < x.FileIndex.length; ++b)
      B = x.FileIndex[b], B.content && (M = B.content.length, !(!M || M >= 4096) && (B.start = k, G(M + 63 >> 6)));
    for (; T.l & 511; )
      T.write_shift(-4, ye.ENDOFCHAIN);
    for (w = 0; w < _[4] << 2; ++w) {
      var se = x.FullPaths[w];
      if (!se || se.length === 0) {
        for (b = 0; b < 17; ++b)
          T.write_shift(4, 0);
        for (b = 0; b < 3; ++b)
          T.write_shift(4, -1);
        for (b = 0; b < 12; ++b)
          T.write_shift(4, 0);
        continue;
      }
      B = x.FileIndex[w], w === 0 && (B.start = B.size ? B.start - 1 : pe);
      var he = w === 0 && m.root || B.name;
      if (M = 2 * (he.length + 1), T.write_shift(64, he, "utf16le"), T.write_shift(2, M), T.write_shift(1, B.type), T.write_shift(1, B.color), T.write_shift(-4, B.L), T.write_shift(-4, B.R), T.write_shift(-4, B.C), B.clsid)
        T.write_shift(16, B.clsid, "hex");
      else
        for (b = 0; b < 4; ++b)
          T.write_shift(4, 0);
      T.write_shift(4, B.state || 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, B.start), T.write_shift(4, B.size), T.write_shift(4, 0);
    }
    for (w = 1; w < x.FileIndex.length; ++w)
      if (B = x.FileIndex[w], B.size >= 4096)
        if (T.l = B.start + 1 << 9, We && Buffer.isBuffer(B.content))
          B.content.copy(T, T.l, 0, B.size), T.l += B.size + 511 & -512;
        else {
          for (b = 0; b < B.size; ++b)
            T.write_shift(1, B.content[b]);
          for (; b & 511; ++b)
            T.write_shift(1, 0);
        }
    for (w = 1; w < x.FileIndex.length; ++w)
      if (B = x.FileIndex[w], B.size > 0 && B.size < 4096)
        if (We && Buffer.isBuffer(B.content))
          B.content.copy(T, T.l, 0, B.size), T.l += B.size + 63 & -64;
        else {
          for (b = 0; b < B.size; ++b)
            T.write_shift(1, B.content[b]);
          for (; b & 63; ++b)
            T.write_shift(1, 0);
        }
    if (We)
      T.l = T.length;
    else
      for (; T.l < T.length; )
        T.write_shift(1, 0);
    return T;
  }
  function q(x, E) {
    var m = x.FullPaths.map(function(b) {
      return b.toUpperCase();
    }), _ = m.map(function(b) {
      var M = b.split("/");
      return M[M.length - (b.slice(-1) == "/" ? 2 : 1)];
    }), T = !1;
    E.charCodeAt(0) === 47 ? (T = !0, E = m[0].slice(0, -1) + E) : T = E.indexOf("/") !== -1;
    var w = E.toUpperCase(), k = T === !0 ? m.indexOf(w) : _.indexOf(w);
    if (k !== -1)
      return x.FileIndex[k];
    var G = !w.match(Di);
    for (w = w.replace(Jn, ""), G && (w = w.replace(Di, "!")), k = 0; k < m.length; ++k)
      if ((G ? m[k].replace(Di, "!") : m[k]).replace(Jn, "") == w || (G ? _[k].replace(Di, "!") : _[k]).replace(Jn, "") == w)
        return x.FileIndex[k];
    return null;
  }
  var te = 64, pe = -2, Le = "d0cf11e0a1b11ae1", Ae = [208, 207, 17, 224, 161, 177, 26, 225], ke = "00000000000000000000000000000000", ye = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: pe,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: Le,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ke,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function Ne(x, E, m) {
    f();
    var _ = Y(x, m);
    l.writeFileSync(E, _);
  }
  function Ye(x) {
    for (var E = new Array(x.length), m = 0; m < x.length; ++m)
      E[m] = String.fromCharCode(x[m]);
    return E.join("");
  }
  function pt(x, E) {
    var m = Y(x, E);
    switch (E && E.type || "buffer") {
      case "file":
        return f(), l.writeFileSync(E.filename, m), m;
      case "binary":
        return typeof m == "string" ? m : Ye(m);
      case "base64":
        return li(typeof m == "string" ? m : Ye(m));
      case "buffer":
        if (We)
          return Buffer.isBuffer(m) ? m : Or(m);
      case "array":
        return typeof m == "string" ? rr(m) : m;
    }
    return m;
  }
  var nt;
  function C(x) {
    try {
      var E = x.InflateRaw, m = new E();
      if (m._processChunk(new Uint8Array([3, 0]), m._finishFlushFlag), m.bytesRead)
        nt = x;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (_) {
      console.error("cannot use native zlib: " + (_.message || _));
    }
  }
  function U(x, E) {
    if (!nt)
      return Za(x, E);
    var m = nt.InflateRaw, _ = new m(), T = _._processChunk(x.slice(x.l), _._finishFlushFlag);
    return x.l += _.bytesRead, T;
  }
  function D(x) {
    return nt ? nt.deflateRawSync(x) : bt(x);
  }
  var F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], _e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function Te(x) {
    var E = (x << 1 | x << 11) & 139536 | (x << 5 | x << 15) & 558144;
    return (E >> 16 | E >> 8 | E) & 255;
  }
  for (var me = typeof Uint8Array < "u", ue = me ? new Uint8Array(256) : [], Ue = 0; Ue < 256; ++Ue)
    ue[Ue] = Te(Ue);
  function S(x, E) {
    var m = ue[x & 255];
    return E <= 8 ? m >>> 8 - E : (m = m << 8 | ue[x >> 8 & 255], E <= 16 ? m >>> 16 - E : (m = m << 8 | ue[x >> 16 & 255], m >>> 24 - E));
  }
  function A(x, E) {
    var m = E & 7, _ = E >>> 3;
    return (x[_] | (m <= 6 ? 0 : x[_ + 1] << 8)) >>> m & 3;
  }
  function I(x, E) {
    var m = E & 7, _ = E >>> 3;
    return (x[_] | (m <= 5 ? 0 : x[_ + 1] << 8)) >>> m & 7;
  }
  function X(x, E) {
    var m = E & 7, _ = E >>> 3;
    return (x[_] | (m <= 4 ? 0 : x[_ + 1] << 8)) >>> m & 15;
  }
  function V(x, E) {
    var m = E & 7, _ = E >>> 3;
    return (x[_] | (m <= 3 ? 0 : x[_ + 1] << 8)) >>> m & 31;
  }
  function L(x, E) {
    var m = E & 7, _ = E >>> 3;
    return (x[_] | (m <= 1 ? 0 : x[_ + 1] << 8)) >>> m & 127;
  }
  function ce(x, E, m) {
    var _ = E & 7, T = E >>> 3, w = (1 << m) - 1, k = x[T] >>> _;
    return m < 8 - _ || (k |= x[T + 1] << 8 - _, m < 16 - _) || (k |= x[T + 2] << 16 - _, m < 24 - _) || (k |= x[T + 3] << 24 - _), k & w;
  }
  function ne(x, E, m) {
    var _ = E & 7, T = E >>> 3;
    return _ <= 5 ? x[T] |= (m & 7) << _ : (x[T] |= m << _ & 255, x[T + 1] = (m & 7) >> 8 - _), E + 3;
  }
  function oe(x, E, m) {
    var _ = E & 7, T = E >>> 3;
    return m = (m & 1) << _, x[T] |= m, E + 1;
  }
  function Z(x, E, m) {
    var _ = E & 7, T = E >>> 3;
    return m <<= _, x[T] |= m & 255, m >>>= 8, x[T + 1] = m, E + 8;
  }
  function we(x, E, m) {
    var _ = E & 7, T = E >>> 3;
    return m <<= _, x[T] |= m & 255, m >>>= 8, x[T + 1] = m & 255, x[T + 2] = m >>> 8, E + 16;
  }
  function ve(x, E) {
    var m = x.length, _ = 2 * m > E ? 2 * m : E + 5, T = 0;
    if (m >= E)
      return x;
    if (We) {
      var w = k0(_);
      if (x.copy)
        x.copy(w);
      else
        for (; T < x.length; ++T)
          w[T] = x[T];
      return w;
    } else if (me) {
      var k = new Uint8Array(_);
      if (k.set)
        k.set(x);
      else
        for (; T < m; ++T)
          k[T] = x[T];
      return k;
    }
    return x.length = _, x;
  }
  function Ee(x) {
    for (var E = new Array(x), m = 0; m < x; ++m)
      E[m] = 0;
    return E;
  }
  function Ce(x, E, m) {
    var _ = 1, T = 0, w = 0, k = 0, G = 0, b = x.length, M = me ? new Uint16Array(32) : Ee(32);
    for (w = 0; w < 32; ++w)
      M[w] = 0;
    for (w = b; w < m; ++w)
      x[w] = 0;
    b = x.length;
    var B = me ? new Uint16Array(b) : Ee(b);
    for (w = 0; w < b; ++w)
      M[T = x[w]]++, _ < T && (_ = T), B[w] = 0;
    for (M[0] = 0, w = 1; w <= _; ++w)
      M[w + 16] = G = G + M[w - 1] << 1;
    for (w = 0; w < b; ++w)
      G = x[w], G != 0 && (B[w] = M[G + 16]++);
    var se = 0;
    for (w = 0; w < b; ++w)
      if (se = x[w], se != 0)
        for (G = S(B[w], _) >> _ - se, k = (1 << _ + 4 - se) - 1; k >= 0; --k)
          E[G | k << se] = se & 15 | w << 4;
    return _;
  }
  var De = me ? new Uint16Array(512) : Ee(512), He = me ? new Uint16Array(32) : Ee(32);
  if (!me) {
    for (var Ie = 0; Ie < 512; ++Ie)
      De[Ie] = 0;
    for (Ie = 0; Ie < 32; ++Ie)
      He[Ie] = 0;
  }
  (function() {
    for (var x = [], E = 0; E < 32; E++)
      x.push(5);
    Ce(x, He, 32);
    var m = [];
    for (E = 0; E <= 143; E++)
      m.push(8);
    for (; E <= 255; E++)
      m.push(9);
    for (; E <= 279; E++)
      m.push(7);
    for (; E <= 287; E++)
      m.push(8);
    Ce(m, De, 288);
  })();
  var et = /* @__PURE__ */ function() {
    for (var E = me ? new Uint8Array(32768) : [], m = 0, _ = 0; m < _e.length - 1; ++m)
      for (; _ < _e[m + 1]; ++_)
        E[_] = m;
    for (; _ < 32768; ++_)
      E[_] = 29;
    var T = me ? new Uint8Array(259) : [];
    for (m = 0, _ = 0; m < z.length - 1; ++m)
      for (; _ < z[m + 1]; ++_)
        T[_] = m;
    function w(G, b) {
      for (var M = 0; M < G.length; ) {
        var B = Math.min(65535, G.length - M), se = M + B == G.length;
        for (b.write_shift(1, +se), b.write_shift(2, B), b.write_shift(2, ~B & 65535); B-- > 0; )
          b[b.l++] = G[M++];
      }
      return b.l;
    }
    function k(G, b) {
      for (var M = 0, B = 0, se = me ? new Uint16Array(32768) : []; B < G.length; ) {
        var he = (
          /* data.length - boff; */
          Math.min(65535, G.length - B)
        );
        if (he < 10) {
          for (M = ne(b, M, +(B + he == G.length)), M & 7 && (M += 8 - (M & 7)), b.l = M / 8 | 0, b.write_shift(2, he), b.write_shift(2, ~he & 65535); he-- > 0; )
            b[b.l++] = G[B++];
          M = b.l * 8;
          continue;
        }
        M = ne(b, M, +(B + he == G.length) + 2);
        for (var ge = 0; he-- > 0; ) {
          var ae = G[B];
          ge = (ge << 5 ^ ae) & 32767;
          var xe = -1, Fe = 0;
          if ((xe = se[ge]) && (xe |= B & -32768, xe > B && (xe -= 32768), xe < B))
            for (; G[xe + Fe] == G[B + Fe] && Fe < 250; )
              ++Fe;
          if (Fe > 2) {
            ae = T[Fe], ae <= 22 ? M = Z(b, M, ue[ae + 1] >> 1) - 1 : (Z(b, M, 3), M += 5, Z(b, M, ue[ae - 23] >> 5), M += 3);
            var Qe = ae < 8 ? 0 : ae - 4 >> 2;
            Qe > 0 && (we(b, M, Fe - z[ae]), M += Qe), ae = E[B - xe], M = Z(b, M, ue[ae] >> 3), M -= 3;
            var $e = ae < 4 ? 0 : ae - 2 >> 1;
            $e > 0 && (we(b, M, B - xe - _e[ae]), M += $e);
            for (var wt = 0; wt < Fe; ++wt)
              se[ge] = B & 32767, ge = (ge << 5 ^ G[B]) & 32767, ++B;
            he -= Fe - 1;
          } else
            ae <= 143 ? ae = ae + 48 : M = oe(b, M, 1), M = Z(b, M, ue[ae]), se[ge] = B & 32767, ++B;
        }
        M = Z(b, M, 0) - 1;
      }
      return b.l = (M + 7) / 8 | 0, b.l;
    }
    return function(b, M) {
      return b.length < 8 ? w(b, M) : k(b, M);
    };
  }();
  function bt(x) {
    var E = H(50 + Math.floor(x.length * 1.1)), m = et(x, E);
    return E.slice(0, m);
  }
  var mr = me ? new Uint16Array(32768) : Ee(32768), bn = me ? new Uint16Array(32768) : Ee(32768), Dr = me ? new Uint16Array(128) : Ee(128), kn = 1, Tt = 1;
  function zt(x, E) {
    var m = V(x, E) + 257;
    E += 5;
    var _ = V(x, E) + 1;
    E += 5;
    var T = X(x, E) + 4;
    E += 4;
    for (var w = 0, k = me ? new Uint8Array(19) : Ee(19), G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], b = 1, M = me ? new Uint8Array(8) : Ee(8), B = me ? new Uint8Array(8) : Ee(8), se = k.length, he = 0; he < T; ++he)
      k[F[he]] = w = I(x, E), b < w && (b = w), M[w]++, E += 3;
    var ge = 0;
    for (M[0] = 0, he = 1; he <= b; ++he)
      B[he] = ge = ge + M[he - 1] << 1;
    for (he = 0; he < se; ++he)
      (ge = k[he]) != 0 && (G[he] = B[ge]++);
    var ae = 0;
    for (he = 0; he < se; ++he)
      if (ae = k[he], ae != 0) {
        ge = ue[G[he]] >> 8 - ae;
        for (var xe = (1 << 7 - ae) - 1; xe >= 0; --xe)
          Dr[ge | xe << ae] = ae & 7 | he << 3;
      }
    var Fe = [];
    for (b = 1; Fe.length < m + _; )
      switch (ge = Dr[L(x, E)], E += ge & 7, ge >>>= 3) {
        case 16:
          for (w = 3 + A(x, E), E += 2, ge = Fe[Fe.length - 1]; w-- > 0; )
            Fe.push(ge);
          break;
        case 17:
          for (w = 3 + I(x, E), E += 3; w-- > 0; )
            Fe.push(0);
          break;
        case 18:
          for (w = 11 + L(x, E), E += 7; w-- > 0; )
            Fe.push(0);
          break;
        default:
          Fe.push(ge), b < ge && (b = ge);
          break;
      }
    var Qe = Fe.slice(0, m), $e = Fe.slice(m);
    for (he = m; he < 286; ++he)
      Qe[he] = 0;
    for (he = _; he < 30; ++he)
      $e[he] = 0;
    return kn = Ce(Qe, mr, 286), Tt = Ce($e, bn, 30), E;
  }
  function Ei(x, E) {
    if (x[0] == 3 && !(x[1] & 3))
      return [tn(E), 2];
    for (var m = 0, _ = 0, T = k0(E || 1 << 18), w = 0, k = T.length >>> 0, G = 0, b = 0; !(_ & 1); ) {
      if (_ = I(x, m), m += 3, _ >>> 1)
        _ >> 1 == 1 ? (G = 9, b = 5) : (m = zt(x, m), G = kn, b = Tt);
      else {
        m & 7 && (m += 8 - (m & 7));
        var M = x[m >>> 3] | x[(m >>> 3) + 1] << 8;
        if (m += 32, M > 0)
          for (!E && k < w + M && (T = ve(T, w + M), k = T.length); M-- > 0; )
            T[w++] = x[m >>> 3], m += 8;
        continue;
      }
      for (; ; ) {
        !E && k < w + 32767 && (T = ve(T, w + 32767), k = T.length);
        var B = ce(x, m, G), se = _ >>> 1 == 1 ? De[B] : mr[B];
        if (m += se & 15, se >>>= 4, !(se >>> 8 & 255))
          T[w++] = se;
        else {
          if (se == 256)
            break;
          se -= 257;
          var he = se < 8 ? 0 : se - 4 >> 2;
          he > 5 && (he = 0);
          var ge = w + z[se];
          he > 0 && (ge += ce(x, m, he), m += he), B = ce(x, m, b), se = _ >>> 1 == 1 ? He[B] : bn[B], m += se & 15, se >>>= 4;
          var ae = se < 4 ? 0 : se - 2 >> 1, xe = _e[se];
          for (ae > 0 && (xe += ce(x, m, ae), m += ae), !E && k < ge && (T = ve(T, ge + 100), k = T.length); w < ge; )
            T[w] = T[w - xe], ++w;
        }
      }
    }
    return E ? [T, m + 7 >>> 3] : [T.slice(0, w), m + 7 >>> 3];
  }
  function Za(x, E) {
    var m = x.slice(x.l || 0), _ = Ei(m, E);
    return x.l += _[1], _[0];
  }
  function Qa(x, E) {
    if (x)
      typeof console < "u" && console.error(E);
    else
      throw new Error(E);
  }
  function $a(x, E) {
    var m = (
      /*::(*/
      x
    );
    Ht(m, 0);
    var _ = [], T = [], w = {
      FileIndex: _,
      FullPaths: T
    };
    N(w, { root: E.root });
    for (var k = m.length - 4; (m[k] != 80 || m[k + 1] != 75 || m[k + 2] != 5 || m[k + 3] != 6) && k >= 0; )
      --k;
    m.l = k + 4, m.l += 4;
    var G = m.read_shift(2);
    m.l += 6;
    var b = m.read_shift(4);
    for (m.l = b, k = 0; k < G; ++k) {
      m.l += 20;
      var M = m.read_shift(4), B = m.read_shift(4), se = m.read_shift(2), he = m.read_shift(2), ge = m.read_shift(2);
      m.l += 8;
      var ae = m.read_shift(4), xe = o(
        /*::(*/
        m.slice(m.l + se, m.l + se + he)
        /*:: :any)*/
      );
      m.l += se + he + ge;
      var Fe = m.l;
      m.l = ae + 4, zf(m, M, B, w, xe), m.l = Fe;
    }
    return w;
  }
  function zf(x, E, m, _, T) {
    x.l += 2;
    var w = x.read_shift(2), k = x.read_shift(2), G = a(x);
    if (w & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var b = x.read_shift(4), M = x.read_shift(4), B = x.read_shift(4), se = x.read_shift(2), he = x.read_shift(2), ge = "", ae = 0; ae < se; ++ae)
      ge += String.fromCharCode(x[x.l++]);
    if (he) {
      var xe = o(
        /*::(*/
        x.slice(x.l, x.l + he)
        /*:: :any)*/
      );
      (xe[21589] || {}).mt && (G = xe[21589].mt), ((T || {})[21589] || {}).mt && (G = T[21589].mt);
    }
    x.l += he;
    var Fe = x.slice(x.l, x.l + M);
    switch (k) {
      case 8:
        Fe = U(x, B);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + k);
    }
    var Qe = !1;
    w & 8 && (b = x.read_shift(4), b == 134695760 && (b = x.read_shift(4), Qe = !0), M = x.read_shift(4), B = x.read_shift(4)), M != E && Qa(Qe, "Bad compressed size: " + E + " != " + M), B != m && Qa(Qe, "Bad uncompressed size: " + m + " != " + B), Rs(_, ge, Fe, { unsafe: !0, mt: G });
  }
  function Xf(x, E) {
    var m = E || {}, _ = [], T = [], w = H(1), k = m.compression ? 8 : 0, G = 0, b = 0, M = 0, B = 0, se = 0, he = x.FullPaths[0], ge = he, ae = x.FileIndex[0], xe = [], Fe = 0;
    for (b = 1; b < x.FullPaths.length; ++b)
      if (ge = x.FullPaths[b].slice(he.length), ae = x.FileIndex[b], !(!ae.size || !ae.content || ge == "Sh33tJ5")) {
        var Qe = B, $e = H(ge.length);
        for (M = 0; M < ge.length; ++M)
          $e.write_shift(1, ge.charCodeAt(M) & 127);
        $e = $e.slice(0, $e.l), xe[se] = x1.buf(
          /*::((*/
          ae.content,
          0
        );
        var wt = ae.content;
        k == 8 && (wt = D(wt)), w = H(30), w.write_shift(4, 67324752), w.write_shift(2, 20), w.write_shift(2, G), w.write_shift(2, k), ae.mt ? s(w, ae.mt) : w.write_shift(4, 0), w.write_shift(-4, xe[se]), w.write_shift(4, wt.length), w.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), w.write_shift(2, $e.length), w.write_shift(2, 0), B += w.length, _.push(w), B += $e.length, _.push($e), B += wt.length, _.push(wt), w = H(46), w.write_shift(4, 33639248), w.write_shift(2, 0), w.write_shift(2, 20), w.write_shift(2, G), w.write_shift(2, k), w.write_shift(4, 0), w.write_shift(-4, xe[se]), w.write_shift(4, wt.length), w.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), w.write_shift(2, $e.length), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(4, 0), w.write_shift(4, Qe), Fe += w.l, T.push(w), Fe += $e.length, T.push($e), ++se;
      }
    return w = H(22), w.write_shift(4, 101010256), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, se), w.write_shift(2, se), w.write_shift(4, Fe), w.write_shift(4, B), w.write_shift(2, 0), gt([gt(_), gt(T), w]);
  }
  var Ti = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Kf(x, E) {
    if (x.ctype)
      return x.ctype;
    var m = x.name || "", _ = m.match(/\.([^\.]+)$/);
    return _ && Ti[_[1]] || E && (_ = (m = E).match(/[\.\\]([^\.\\])+$/), _ && Ti[_[1]]) ? Ti[_[1]] : "application/octet-stream";
  }
  function Yf(x) {
    for (var E = li(x), m = [], _ = 0; _ < E.length; _ += 76)
      m.push(E.slice(_, _ + 76));
    return m.join(`\r
`) + `\r
`;
  }
  function Jf(x) {
    var E = x.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(M) {
      var B = M.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (B.length == 1 ? "0" + B : B);
    });
    E = E.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), E.charAt(0) == `
` && (E = "=0D" + E.slice(1)), E = E.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var m = [], _ = E.split(`\r
`), T = 0; T < _.length; ++T) {
      var w = _[T];
      if (w.length == 0) {
        m.push("");
        continue;
      }
      for (var k = 0; k < w.length; ) {
        var G = 76, b = w.slice(k, k + G);
        b.charAt(G - 1) == "=" ? G-- : b.charAt(G - 2) == "=" ? G -= 2 : b.charAt(G - 3) == "=" && (G -= 3), b = w.slice(k, k + G), k += G, k < w.length && (b += "="), m.push(b);
      }
    }
    return m.join(`\r
`);
  }
  function qf(x) {
    for (var E = [], m = 0; m < x.length; ++m) {
      for (var _ = x[m]; m <= x.length && _.charAt(_.length - 1) == "="; )
        _ = _.slice(0, _.length - 1) + x[++m];
      E.push(_);
    }
    for (var T = 0; T < E.length; ++T)
      E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function(w) {
        return String.fromCharCode(parseInt(w.slice(1), 16));
      });
    return rr(E.join(`\r
`));
  }
  function Zf(x, E, m) {
    for (var _ = "", T = "", w = "", k, G = 0; G < 10; ++G) {
      var b = E[G];
      if (!b || b.match(/^\s*$/))
        break;
      var M = b.match(/^(.*?):\s*([^\s].*)$/);
      if (M)
        switch (M[1].toLowerCase()) {
          case "content-location":
            _ = M[2].trim();
            break;
          case "content-type":
            w = M[2].trim();
            break;
          case "content-transfer-encoding":
            T = M[2].trim();
            break;
        }
    }
    switch (++G, T.toLowerCase()) {
      case "base64":
        k = rr(Ar(E.slice(G).join("")));
        break;
      case "quoted-printable":
        k = qf(E.slice(G));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + T);
    }
    var B = Rs(x, _.slice(m.length), k, { unsafe: !0 });
    w && (B.ctype = w);
  }
  function Qf(x, E) {
    if (Ye(x.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var m = E && E.root || "", _ = (We && Buffer.isBuffer(x) ? x.toString("binary") : Ye(x)).split(`\r
`), T = 0, w = "";
    for (T = 0; T < _.length; ++T)
      if (w = _[T], !!/^Content-Location:/i.test(w) && (w = w.slice(w.indexOf("file")), m || (m = w.slice(0, w.lastIndexOf("/") + 1)), w.slice(0, m.length) != m))
        for (; m.length > 0 && (m = m.slice(0, m.length - 1), m = m.slice(0, m.lastIndexOf("/") + 1), w.slice(0, m.length) != m); )
          ;
    var k = (_[1] || "").match(/boundary="(.*?)"/);
    if (!k)
      throw new Error("MAD cannot find boundary");
    var G = "--" + (k[1] || ""), b = [], M = [], B = {
      FileIndex: b,
      FullPaths: M
    };
    N(B);
    var se, he = 0;
    for (T = 0; T < _.length; ++T) {
      var ge = _[T];
      ge !== G && ge !== G + "--" || (he++ && Zf(B, _.slice(se, T), m), se = T);
    }
    return B;
  }
  function $f(x, E) {
    var m = E || {}, _ = m.boundary || "SheetJS";
    _ = "------=" + _;
    for (var T = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + _.slice(2) + '"',
      "",
      "",
      ""
    ], w = x.FullPaths[0], k = w, G = x.FileIndex[0], b = 1; b < x.FullPaths.length; ++b)
      if (k = x.FullPaths[b].slice(w.length), G = x.FileIndex[b], !(!G.size || !G.content || k == "Sh33tJ5")) {
        k = k.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Fe) {
          return "_x" + Fe.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(Fe) {
          return "_u" + Fe.charCodeAt(0).toString(16) + "_";
        });
        for (var M = G.content, B = We && Buffer.isBuffer(M) ? M.toString("binary") : Ye(M), se = 0, he = Math.min(1024, B.length), ge = 0, ae = 0; ae <= he; ++ae)
          (ge = B.charCodeAt(ae)) >= 32 && ge < 128 && ++se;
        var xe = se >= he * 4 / 5;
        T.push(_), T.push("Content-Location: " + (m.root || "file:///C:/SheetJS/") + k), T.push("Content-Transfer-Encoding: " + (xe ? "quoted-printable" : "base64")), T.push("Content-Type: " + Kf(G, k)), T.push(""), T.push(xe ? Jf(B) : Yf(B));
      }
    return T.push(_ + `--\r
`), T.join(`\r
`);
  }
  function ec(x) {
    var E = {};
    return N(E, x), E;
  }
  function Rs(x, E, m, _) {
    var T = _ && _.unsafe;
    T || N(x);
    var w = !T && Ke.find(x, E);
    if (!w) {
      var k = x.FullPaths[0];
      E.slice(0, k.length) == k ? k = E : (k.slice(-1) != "/" && (k += "/"), k = (k + E).replace("//", "/")), w = { name: n(E), type: 2 }, x.FileIndex.push(w), x.FullPaths.push(k), T || Ke.utils.cfb_gc(x);
    }
    return w.content = m, w.size = m ? m.length : 0, _ && (_.CLSID && (w.clsid = _.CLSID), _.mt && (w.mt = _.mt), _.ct && (w.ct = _.ct)), w;
  }
  function tc(x, E) {
    N(x);
    var m = Ke.find(x, E);
    if (m) {
      for (var _ = 0; _ < x.FileIndex.length; ++_)
        if (x.FileIndex[_] == m)
          return x.FileIndex.splice(_, 1), x.FullPaths.splice(_, 1), !0;
    }
    return !1;
  }
  function rc(x, E, m) {
    N(x);
    var _ = Ke.find(x, E);
    if (_) {
      for (var T = 0; T < x.FileIndex.length; ++T)
        if (x.FileIndex[T] == _)
          return x.FileIndex[T].name = n(m), x.FullPaths[T] = m, !0;
    }
    return !1;
  }
  function nc(x) {
    W(x, !0);
  }
  return t.find = q, t.read = de, t.parse = c, t.write = pt, t.writeFile = Ne, t.utils = {
    cfb_new: ec,
    cfb_add: Rs,
    cfb_del: tc,
    cfb_mov: rc,
    cfb_gc: nc,
    ReadShift: Zn,
    CheckField: Vl,
    prep_blob: Ht,
    bconcat: gt,
    use_zlib: C,
    _deflateRaw: bt,
    _inflateRaw: Za,
    consts: ye
  }, t;
}();
function m1(e) {
  return typeof e == "string" ? ws(e) : Array.isArray(e) ? Vu(e) : e;
}
function xi(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = ws(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var i = r == "utf8" ? vr(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(i, e);
  if (typeof Blob < "u") {
    var n = new Blob([m1(i)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(n, e);
    if (typeof saveAs < "u")
      return saveAs(n, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var s = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(s);
        }, 6e4), chrome.downloads.download({ url: s, filename: e, saveAs: !0 });
      var a = document.createElement("a");
      if (a.download != null)
        return a.download = e, a.href = s, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(s);
        }, 6e4), s;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var o = File(e);
      return o.open("w"), o.encoding = "binary", Array.isArray(t) && (t = pi(t)), o.write(t), o.close(), t;
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/))
        throw l;
    }
  throw new Error("cannot save file " + e);
}
function Et(e) {
  for (var t = Object.keys(e), r = [], i = 0; i < t.length; ++i)
    Object.prototype.hasOwnProperty.call(e, t[i]) && r.push(t[i]);
  return r;
}
function G0(e, t) {
  for (var r = [], i = Et(e), n = 0; n !== i.length; ++n)
    r[e[i[n]][t]] == null && (r[e[i[n]][t]] = i[n]);
  return r;
}
function Na(e) {
  for (var t = [], r = Et(e), i = 0; i !== r.length; ++i)
    t[e[r[i]]] = r[i];
  return t;
}
function As(e) {
  for (var t = [], r = Et(e), i = 0; i !== r.length; ++i)
    t[e[r[i]]] = parseInt(r[i], 10);
  return t;
}
function g1(e) {
  for (var t = [], r = Et(e), i = 0; i !== r.length; ++i)
    t[e[r[i]]] == null && (t[e[r[i]]] = []), t[e[r[i]]].push(r[i]);
  return t;
}
var es = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function Bt(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var i = /* @__PURE__ */ es.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ es.getTimezoneOffset()) * 6e4;
  return (r - i) / (24 * 60 * 60 * 1e3);
}
var Al = /* @__PURE__ */ new Date(), _1 = /* @__PURE__ */ es.getTime() + (/* @__PURE__ */ Al.getTimezoneOffset() - /* @__PURE__ */ es.getTimezoneOffset()) * 6e4, j0 = /* @__PURE__ */ Al.getTimezoneOffset();
function yl(e) {
  var t = /* @__PURE__ */ new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + _1), t.getTimezoneOffset() !== j0 && t.setTime(t.getTime() + (t.getTimezoneOffset() - j0) * 6e4), t;
}
var z0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Fl = /* @__PURE__ */ isNaN(/* @__PURE__ */ z0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : z0, v1 = /* @__PURE__ */ Fl.getFullYear() == 2017;
function It(e, t) {
  var r = new Date(e);
  if (v1)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (Fl.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var i = r.getFullYear();
    return e.indexOf("" + i) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], s = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)), s;
}
function ys(e, t) {
  if (We && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return vr(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return vr(Hu(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return vr(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return vr(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(s) {
        return r[s] || s;
      });
    } catch {
    }
  for (var i = [], n = 0; n != e.length; ++n)
    i.push(String.fromCharCode(e[n]));
  return i.join("");
}
function Ut(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Ut(e[r]));
  return t;
}
function tt(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function wr(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, i = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(i)) || (i = i.replace(/[(](.*)[)]/, function(n, s) {
    return r = -r, s;
  }), !isNaN(t = Number(i))) ? t / r : t;
}
var E1 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function fi(e) {
  var t = new Date(e), r = /* @__PURE__ */ new Date(NaN), i = t.getYear(), n = t.getMonth(), s = t.getDate();
  if (isNaN(s))
    return r;
  var a = e.toLowerCase();
  if (a.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (a = a.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), a.length > 3 && E1.indexOf(a) == -1)
      return r;
  } else if (a.match(/[a-z]/))
    return r;
  return i < 0 || i > 8099 ? r : (n > 0 || s > 1) && i != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
function Re(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var i;
      return We ? i = Or(r) : i = Gu(r), Ke.utils.cfb_add(e, t, i);
    }
    Ke.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function Ia() {
  return Ke.utils.cfb_new();
}
var ot = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, T1 = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, ba = /* @__PURE__ */ Na(T1), ka = /[&<>'"]/g, w1 = /[\u0000-\u0008\u000b-\u001f]/g;
function je(e) {
  var t = e + "";
  return t.replace(ka, function(r) {
    return ba[r];
  }).replace(w1, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function X0(e) {
  return je(e).replace(/ /g, "_x0020_");
}
var Ol = /[\u0000-\u001f]/g;
function S1(e) {
  var t = e + "";
  return t.replace(ka, function(r) {
    return ba[r];
  }).replace(/\n/g, "<br/>").replace(Ol, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function C1(e) {
  var t = e + "";
  return t.replace(ka, function(r) {
    return ba[r];
  }).replace(Ol, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function A1(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function y1(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  for (var t = "", r = 0, i = 0, n = 0, s = 0, a = 0, o = 0; r < e.length; ) {
    if (i = e.charCodeAt(r++), i < 128) {
      t += String.fromCharCode(i);
      continue;
    }
    if (n = e.charCodeAt(r++), i > 191 && i < 224) {
      a = (i & 31) << 6, a |= n & 63, t += String.fromCharCode(a);
      continue;
    }
    if (s = e.charCodeAt(r++), i < 240) {
      t += String.fromCharCode((i & 15) << 12 | (n & 63) << 6 | s & 63);
      continue;
    }
    a = e.charCodeAt(r++), o = ((i & 7) << 18 | (n & 63) << 12 | (s & 63) << 6 | a & 63) - 65536, t += String.fromCharCode(55296 + (o >>> 10 & 1023)), t += String.fromCharCode(56320 + (o & 1023));
  }
  return t;
}
function K0(e) {
  var t = tn(2 * e.length), r, i, n = 1, s = 0, a = 0, o;
  for (i = 0; i < e.length; i += n)
    n = 1, (o = e.charCodeAt(i)) < 128 ? r = o : o < 224 ? (r = (o & 31) * 64 + (e.charCodeAt(i + 1) & 63), n = 2) : o < 240 ? (r = (o & 15) * 4096 + (e.charCodeAt(i + 1) & 63) * 64 + (e.charCodeAt(i + 2) & 63), n = 3) : (n = 4, r = (o & 7) * 262144 + (e.charCodeAt(i + 1) & 63) * 4096 + (e.charCodeAt(i + 2) & 63) * 64 + (e.charCodeAt(i + 3) & 63), r -= 65536, a = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), a !== 0 && (t[s++] = a & 255, t[s++] = a >>> 8, a = 0), t[s++] = r % 256, t[s++] = r >>> 8;
  return t.slice(0, s).toString("ucs2");
}
function Y0(e) {
  return Or(e, "binary").toString("utf8");
}
var Pi = "foo bar bazâð£", qn = We && (/* @__PURE__ */ Y0(Pi) == /* @__PURE__ */ Us(Pi) && Y0 || /* @__PURE__ */ K0(Pi) == /* @__PURE__ */ Us(Pi) && K0) || Us, vr = We ? function(e) {
  return Or(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, i = 0, n = 0; r < e.length; )
    switch (i = e.charCodeAt(r++), !0) {
      case i < 128:
        t.push(String.fromCharCode(i));
        break;
      case i < 2048:
        t.push(String.fromCharCode(192 + (i >> 6))), t.push(String.fromCharCode(128 + (i & 63)));
        break;
      case (i >= 55296 && i < 57344):
        i -= 55296, n = e.charCodeAt(r++) - 56320 + (i << 10), t.push(String.fromCharCode(240 + (n >> 18 & 7))), t.push(String.fromCharCode(144 + (n >> 12 & 63))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (i >> 12))), t.push(String.fromCharCode(128 + (i >> 6 & 63))), t.push(String.fromCharCode(128 + (i & 63)));
    }
  return t.join("");
}, F1 = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var i = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n)
      i = i.replace(e[n][0], e[n][1]);
    return i;
  };
}(), Dl = /(^\s|\s$|\n)/;
function _t(e, t) {
  return "<" + e + (t.match(Dl) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function ci(e) {
  return Et(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function le(e, t, r) {
  return "<" + e + (r != null ? ci(r) : "") + (t != null ? (t.match(Dl) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function oa(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function O1(e, t) {
  switch (typeof e) {
    case "string":
      var r = le("vt:lpwstr", je(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return le((e | 0) == e ? "vt:i4" : "vt:r8", je(String(e)));
    case "boolean":
      return le("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return le("vt:filetime", oa(e));
  throw new Error("Unable to serialize " + e);
}
var ht = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Rn = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Vt = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function D1(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), i = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), n = e[t + 6] & 15, s = 5; s >= 0; --s)
    n = n * 256 + e[t + s];
  return i == 2047 ? n == 0 ? r * (1 / 0) : NaN : (i == 0 ? i = -1022 : (i -= 1023, n += Math.pow(2, 52)), r * Math.pow(2, i - 52) * n);
}
function R1(e, t, r) {
  var i = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, n = 0, s = 0, a = i ? -t : t;
  isFinite(a) ? a == 0 ? n = s = 0 : (n = Math.floor(Math.log(a) / Math.LN2), s = a * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? n = -1022 : (s -= Math.pow(2, 52), n += 1023)) : (n = 2047, s = isNaN(t) ? 26985 : 0);
  for (var o = 0; o <= 5; ++o, s /= 256)
    e[r + o] = s & 255;
  e[r + 6] = (n & 15) << 4 | s & 15, e[r + 7] = n >> 4 | i;
}
var J0 = function(e) {
  for (var t = [], r = 10240, i = 0; i < e[0].length; ++i)
    if (e[0][i])
      for (var n = 0, s = e[0][i].length; n < s; n += r)
        t.push.apply(t, e[0][i].slice(n, n + r));
  return t;
}, q0 = We ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Or(t);
  })) : J0(e);
} : J0, Z0 = function(e, t, r) {
  for (var i = [], n = t; n < r; n += 2)
    i.push(String.fromCharCode(Xn(e, n)));
  return i.join("").replace(Jn, "");
}, Ma = We ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Jn, "") : Z0(e, t, r);
} : Z0, Q0 = function(e, t, r) {
  for (var i = [], n = t; n < t + r; ++n)
    i.push(("0" + e[n].toString(16)).slice(-2));
  return i.join("");
}, Rl = We ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Q0(e, t, r);
} : Q0, $0 = function(e, t, r) {
  for (var i = [], n = t; n < r; n++)
    i.push(String.fromCharCode(xn(e, n)));
  return i.join("");
}, mi = We ? function(t, r, i) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, i) : $0(t, r, i);
} : $0, Pl = function(e, t) {
  var r = Gt(e, t);
  return r > 0 ? mi(e, t + 4, t + 4 + r - 1) : "";
}, Nl = Pl, Il = function(e, t) {
  var r = Gt(e, t);
  return r > 0 ? mi(e, t + 4, t + 4 + r - 1) : "";
}, bl = Il, kl = function(e, t) {
  var r = 2 * Gt(e, t);
  return r > 0 ? mi(e, t + 4, t + 4 + r - 1) : "";
}, Ml = kl, Ll = function(t, r) {
  var i = Gt(t, r);
  return i > 0 ? Ma(t, r + 4, r + 4 + i) : "";
}, Bl = Ll, Ul = function(e, t) {
  var r = Gt(e, t);
  return r > 0 ? mi(e, t + 4, t + 4 + r) : "";
}, Wl = Ul, Hl = function(e, t) {
  return D1(e, t);
}, ts = Hl, La = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
We && (Nl = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Pl(t, r);
  var i = t.readUInt32LE(r);
  return i > 0 ? t.toString("utf8", r + 4, r + 4 + i - 1) : "";
}, bl = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Il(t, r);
  var i = t.readUInt32LE(r);
  return i > 0 ? t.toString("utf8", r + 4, r + 4 + i - 1) : "";
}, Ml = function(t, r) {
  if (!Buffer.isBuffer(t))
    return kl(t, r);
  var i = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + i - 1);
}, Bl = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ll(t, r);
  var i = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + i);
}, Wl = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ul(t, r);
  var i = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + i);
}, ts = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Hl(t, r);
}, La = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var xn = function(e, t) {
  return e[t];
}, Xn = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, P1 = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, Gt = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, Jr = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, N1 = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function Zn(e, t) {
  var r = "", i, n, s = [], a, o, l, f;
  switch (t) {
    case "dbcs":
      if (f = this.l, We && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (l = 0; l < e; ++l)
          r += String.fromCharCode(Xn(this, f)), f += 2;
      e *= 2;
      break;
    case "utf8":
      r = mi(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = Ma(this, this.l, this.l + e);
      break;
    case "wstr":
      return Zn.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = Nl(this, this.l), e = 4 + Gt(this, this.l);
      break;
    case "lpstr-cp":
      r = bl(this, this.l), e = 4 + Gt(this, this.l);
      break;
    case "lpwstr":
      r = Ml(this, this.l), e = 4 + 2 * Gt(this, this.l);
      break;
    case "lpp4":
      e = 4 + Gt(this, this.l), r = Bl(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Gt(this, this.l), r = Wl(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (a = xn(this, this.l + e++)) !== 0; )
        s.push(Oi(a));
      r = s.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (a = Xn(this, this.l + e)) !== 0; )
        s.push(Oi(a)), e += 2;
      e += 2, r = s.join("");
      break;
    case "dbcs-cont":
      for (r = "", f = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return a = xn(this, f), this.l = f + 1, o = Zn.call(this, e - l, a ? "dbcs-cont" : "sbcs-cont"), s.join("") + o;
        s.push(Oi(Xn(this, f))), f += 2;
      }
      r = s.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", f = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return a = xn(this, f), this.l = f + 1, o = Zn.call(this, e - l, a ? "dbcs-cont" : "sbcs-cont"), s.join("") + o;
        s.push(Oi(xn(this, f))), f += 1;
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return i = xn(this, this.l), this.l++, i;
        case 2:
          return i = (t === "i" ? P1 : Xn)(this, this.l), this.l += 2, i;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128) ? (i = (e > 0 ? Jr : N1)(this, this.l), this.l += 4, i) : (n = Gt(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? n = ts(this, this.l) : n = ts([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          r = Rl(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var I1 = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, b1 = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, k1 = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function M1(e, t, r) {
  var i = 0, n = 0;
  if (r === "dbcs") {
    for (n = 0; n != t.length; ++n)
      k1(this, t.charCodeAt(n), this.l + 2 * n);
    i = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != t.length; ++n)
      this[this.l + n] = t.charCodeAt(n) & 255;
    i = t.length;
  } else if (r === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(t.length, e); ++n) {
      var a = t.charCodeAt(n);
      this[this.l++] = a & 255, this[this.l++] = a >> 8;
    }
    for (; this.l < s; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        i = 1, this[this.l] = t & 255;
        break;
      case 2:
        i = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        i = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        i = 4, I1(this, t, this.l);
        break;
      case 8:
        if (i = 8, r === "f") {
          R1(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        i = 4, b1(this, t, this.l);
        break;
    }
  return this.l += i, this;
}
function Vl(e, t) {
  var r = Rl(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function Ht(e, t) {
  e.l = t, e.read_shift = /*::(*/
  Zn, e.chk = Vl, e.write_shift = M1;
}
function xr(e, t) {
  e.l += t;
}
function H(e) {
  var t = tn(e);
  return Ht(t, 0), t;
}
function Mt() {
  var e = [], t = We ? 256 : 2048, r = function(f) {
    var c = H(f);
    return Ht(c, 0), c;
  }, i = r(t), n = function() {
    i && (i.length > i.l && (i = i.slice(0, i.l), i.l = i.length), i.length > 0 && e.push(i), i = null);
  }, s = function(f) {
    return i && f < i.length - i.l ? i : (n(), i = r(Math.max(f + 1, t)));
  }, a = function() {
    return n(), gt(e);
  }, o = function(f) {
    n(), i = f, i.l == null && (i.l = i.length), s(t);
  };
  return { next: s, push: o, end: a, _bufs: e };
}
function J(e, t, r, i) {
  var n = +t, s;
  if (!isNaN(n)) {
    i || (i = D2[n].p || (r || []).length || 0), s = 1 + (n >= 128 ? 1 : 0) + 1, i >= 128 && ++s, i >= 16384 && ++s, i >= 2097152 && ++s;
    var a = e.next(s);
    n <= 127 ? a.write_shift(1, n) : (a.write_shift(1, (n & 127) + 128), a.write_shift(1, n >> 7));
    for (var o = 0; o != 4; ++o)
      if (i >= 128)
        a.write_shift(1, (i & 127) + 128), i >>= 7;
      else {
        a.write_shift(1, i);
        break;
      }
    /*:: length != null &&*/
    i > 0 && La(r) && e.push(r);
  }
}
function Qn(e, t, r) {
  var i = Ut(e);
  if (t.s ? (i.cRel && (i.c += t.s.c), i.rRel && (i.r += t.s.r)) : (i.cRel && (i.c += t.c), i.rRel && (i.r += t.r)), !r || r.biff < 12) {
    for (; i.c >= 256; )
      i.c -= 256;
    for (; i.r >= 65536; )
      i.r -= 65536;
  }
  return i;
}
function eo(e, t, r) {
  var i = Ut(e);
  return i.s = Qn(i.s, t.s, r), i.e = Qn(i.e, t.s, r), i;
}
function $n(e, t) {
  if (e.cRel && e.c < 0)
    for (e = Ut(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Ut(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = Xe(e);
  return !e.cRel && e.cRel != null && (r = U1(r)), !e.rRel && e.rRel != null && (r = L1(r)), r;
}
function Ws(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ft(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ft(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + vt(e.s.r) + ":" + (e.e.rRel ? "" : "$") + vt(e.e.r) : $n(e.s, t.biff) + ":" + $n(e.e, t.biff);
}
function Ba(e) {
  return parseInt(B1(e), 10) - 1;
}
function vt(e) {
  return "" + (e + 1);
}
function L1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function B1(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Ua(e) {
  for (var t = W1(e), r = 0, i = 0; i !== t.length; ++i)
    r = 26 * r + t.charCodeAt(i) - 64;
  return r - 1;
}
function Ft(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function U1(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function W1(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function H1(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function ut(e) {
  for (var t = 0, r = 0, i = 0; i < e.length; ++i) {
    var n = e.charCodeAt(i);
    n >= 48 && n <= 57 ? t = 10 * t + (n - 48) : n >= 65 && n <= 90 && (r = 26 * r + (n - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function Xe(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function jt(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: ut(e), e: ut(e) } : { s: ut(e.slice(0, t)), e: ut(e.slice(t + 1)) };
}
function at(e, t) {
  return typeof t > "u" || typeof t == "number" ? at(e.s, e.e) : (typeof e != "string" && (e = Xe(e)), typeof t != "string" && (t = Xe(t)), e == t ? e : e + ":" + t);
}
function Ze(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, i = 0, n = 0, s = e.length;
  for (r = 0; i < s && !((n = e.charCodeAt(i) - 64) < 1 || n > 26); ++i)
    r = 26 * r + n;
  for (t.s.c = --r, r = 0; i < s && !((n = e.charCodeAt(i) - 48) < 0 || n > 9); ++i)
    r = 10 * r + n;
  if (t.s.r = --r, i === s || n != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++i, r = 0; i != s && !((n = e.charCodeAt(i) - 64) < 1 || n > 26); ++i)
    r = 26 * r + n;
  for (t.e.c = --r, r = 0; i != s && !((n = e.charCodeAt(i) - 48) < 0 || n > 9); ++i)
    r = 10 * r + n;
  return t.e.r = --r, t;
}
function to(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = Br(e.z, r ? Bt(t) : t);
    } catch {
    }
  try {
    return e.w = Br((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Bt(t) : t);
  } catch {
    return "" + t;
  }
}
function yr(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? gi[e.v] || e.v : t == null ? to(e, e.v) : to(e, t));
}
function sn(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", i = {};
  return i[r] = e, { SheetNames: [r], Sheets: i };
}
function Gl(e, t, r) {
  var i = r || {}, n = e ? Array.isArray(e) : i.dense, s = e || (n ? [] : {}), a = 0, o = 0;
  if (s && i.origin != null) {
    if (typeof i.origin == "number")
      a = i.origin;
    else {
      var l = typeof i.origin == "string" ? ut(i.origin) : i.origin;
      a = l.r, o = l.c;
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var c = Ze(s["!ref"]);
    f.s.c = c.s.c, f.s.r = c.s.r, f.e.c = Math.max(f.e.c, c.e.c), f.e.r = Math.max(f.e.r, c.e.r), a == -1 && (f.e.r = a = c.e.r + 1);
  }
  for (var h = 0; h != t.length; ++h)
    if (t[h]) {
      if (!Array.isArray(t[h]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var u = 0; u != t[h].length; ++u)
        if (!(typeof t[h][u] > "u")) {
          var p = { v: t[h][u] }, g = a + h, d = o + u;
          if (f.s.r > g && (f.s.r = g), f.s.c > d && (f.s.c = d), f.e.r < g && (f.e.r = g), f.e.c < d && (f.e.c = d), t[h][u] && typeof t[h][u] == "object" && !Array.isArray(t[h][u]) && !(t[h][u] instanceof Date))
            p = t[h][u];
          else if (Array.isArray(p.v) && (p.f = t[h][u][1], p.v = p.v[0]), p.v === null)
            if (p.f)
              p.t = "n";
            else if (i.nullError)
              p.t = "e", p.v = 0;
            else if (i.sheetStubs)
              p.t = "z";
            else
              continue;
          else
            typeof p.v == "number" ? p.t = "n" : typeof p.v == "boolean" ? p.t = "b" : p.v instanceof Date ? (p.z = i.dateNF || rt[14], i.cellDates ? (p.t = "d", p.w = Br(p.z, Bt(p.v))) : (p.t = "n", p.v = Bt(p.v), p.w = Br(p.z, p.v))) : p.t = "s";
          if (n)
            s[g] || (s[g] = []), s[g][d] && s[g][d].z && (p.z = s[g][d].z), s[g][d] = p;
          else {
            var v = Xe({ c: d, r: g });
            s[v] && s[v].z && (p.z = s[v].z), s[v] = p;
          }
        }
    }
  return f.s.c < 1e7 && (s["!ref"] = at(f)), s;
}
function Pn(e, t) {
  return Gl(null, e, t);
}
function V1(e) {
  return e.read_shift(4, "i");
}
function fr(e, t) {
  return t || (t = H(4)), t.write_shift(4, e), t;
}
function Ot(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function dt(e, t) {
  var r = !1;
  return t == null && (r = !0, t = H(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function G1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function j1(e, t) {
  return t || (t = H(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function Wa(e, t) {
  var r = e.l, i = e.read_shift(1), n = Ot(e), s = [], a = { t: n, h: n };
  if (i & 1) {
    for (var o = e.read_shift(4), l = 0; l != o; ++l)
      s.push(G1(e));
    a.r = s;
  } else
    a.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, a;
}
function z1(e, t) {
  var r = !1;
  return t == null && (r = !0, t = H(15 + 4 * e.t.length)), t.write_shift(1, 0), dt(e.t, t), r ? t.slice(0, t.l) : t;
}
var X1 = Wa;
function K1(e, t) {
  var r = !1;
  return t == null && (r = !0, t = H(23 + 4 * e.t.length)), t.write_shift(1, 1), dt(e.t, t), t.write_shift(4, 1), j1({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function Jt(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function an(e, t) {
  return t == null && (t = H(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function on(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function ln(e, t) {
  return t == null && (t = H(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var Y1 = Ot, jl = dt;
function Ha(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function rs(e, t) {
  var r = !1;
  return t == null && (r = !0, t = H(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var J1 = Ot, la = Ha, Va = rs;
function zl(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, i = t[0] & 2;
  e.l += 4;
  var n = i === 0 ? ts([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Jr(t, 0) >> 2;
  return r ? n / 100 : n;
}
function Xl(e, t) {
  t == null && (t = H(4));
  var r = 0, i = 0, n = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? i = 1 : n == (n | 0) && n >= -(1 << 29) && n < 1 << 29 && (i = 1, r = 1), i)
    t.write_shift(-4, ((r ? n : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function Kl(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function q1(e, t) {
  return t || (t = H(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var fn = Kl, Nn = q1;
function In(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function rn(e, t) {
  return (t || H(8)).write_shift(8, e, "f");
}
function Z1(e) {
  var t = {}, r = e.read_shift(1), i = r >>> 1, n = e.read_shift(1), s = e.read_shift(2, "i"), a = e.read_shift(1), o = e.read_shift(1), l = e.read_shift(1);
  switch (e.l++, i) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = n;
      var f = ad[n];
      f && (t.rgb = uo(f));
      break;
    case 2:
      t.rgb = uo([a, o, l]);
      break;
    case 3:
      t.theme = n;
      break;
  }
  return s != 0 && (t.tint = s > 0 ? s / 32767 : s / 32768), t;
}
function ns(e, t) {
  if (t || (t = H(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var i = e.rgb || "FFFFFF";
    typeof i == "number" && (i = ("000000" + i.toString(16)).slice(-6)), t.write_shift(1, parseInt(i.slice(0, 2), 16)), t.write_shift(1, parseInt(i.slice(2, 4), 16)), t.write_shift(1, parseInt(i.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function Q1(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function $1(e, t) {
  t || (t = H(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Yl = 2, Wt = 3, Ni = 11, is = 19, Ii = 64, ed = 65, td = 71, rd = 4108, nd = 4126, mt = 80, ro = {
  /*::[*/
  1: { n: "CodePage", t: Yl },
  /*::[*/
  2: { n: "Category", t: mt },
  /*::[*/
  3: { n: "PresentationFormat", t: mt },
  /*::[*/
  4: { n: "ByteCount", t: Wt },
  /*::[*/
  5: { n: "LineCount", t: Wt },
  /*::[*/
  6: { n: "ParagraphCount", t: Wt },
  /*::[*/
  7: { n: "SlideCount", t: Wt },
  /*::[*/
  8: { n: "NoteCount", t: Wt },
  /*::[*/
  9: { n: "HiddenCount", t: Wt },
  /*::[*/
  10: { n: "MultimediaClipCount", t: Wt },
  /*::[*/
  11: { n: "ScaleCrop", t: Ni },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: rd
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: nd
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: mt },
  /*::[*/
  15: { n: "Company", t: mt },
  /*::[*/
  16: { n: "LinksUpToDate", t: Ni },
  /*::[*/
  17: { n: "CharacterCount", t: Wt },
  /*::[*/
  19: { n: "SharedDoc", t: Ni },
  /*::[*/
  22: { n: "HyperlinksChanged", t: Ni },
  /*::[*/
  23: { n: "AppVersion", t: Wt, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: ed },
  /*::[*/
  26: { n: "ContentType", t: mt },
  /*::[*/
  27: { n: "ContentStatus", t: mt },
  /*::[*/
  28: { n: "Language", t: mt },
  /*::[*/
  29: { n: "Version", t: mt },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: is },
  /*::[*/
  2147483651: { n: "Behavior", t: is },
  /*::[*/
  1919054434: {}
}, no = {
  /*::[*/
  1: { n: "CodePage", t: Yl },
  /*::[*/
  2: { n: "Title", t: mt },
  /*::[*/
  3: { n: "Subject", t: mt },
  /*::[*/
  4: { n: "Author", t: mt },
  /*::[*/
  5: { n: "Keywords", t: mt },
  /*::[*/
  6: { n: "Comments", t: mt },
  /*::[*/
  7: { n: "Template", t: mt },
  /*::[*/
  8: { n: "LastAuthor", t: mt },
  /*::[*/
  9: { n: "RevNumber", t: mt },
  /*::[*/
  10: { n: "EditTime", t: Ii },
  /*::[*/
  11: { n: "LastPrinted", t: Ii },
  /*::[*/
  12: { n: "CreatedDate", t: Ii },
  /*::[*/
  13: { n: "ModifiedDate", t: Ii },
  /*::[*/
  14: { n: "PageCount", t: Wt },
  /*::[*/
  15: { n: "WordCount", t: Wt },
  /*::[*/
  16: { n: "CharCount", t: Wt },
  /*::[*/
  17: { n: "Thumbnail", t: td },
  /*::[*/
  18: { n: "Application", t: mt },
  /*::[*/
  19: { n: "DocSecurity", t: Wt },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: is },
  /*::[*/
  2147483651: { n: "Behavior", t: is },
  /*::[*/
  1919054434: {}
};
function id(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var sd = /* @__PURE__ */ id([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), ad = /* @__PURE__ */ Ut(sd), gi = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, od = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, bi = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Jl() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function ql(e, t) {
  var r = g1(od), i = [], n;
  i[i.length] = ot, i[i.length] = le("Types", null, {
    xmlns: ht.CT,
    "xmlns:xsd": ht.xsd,
    "xmlns:xsi": ht.xsi
  }), i = i.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(l) {
    return le("Default", null, { Extension: l[0], ContentType: l[1] });
  }));
  var s = function(l) {
    e[l] && e[l].length > 0 && (n = e[l][0], i[i.length] = le("Override", null, {
      PartName: (n[0] == "/" ? "" : "/") + n,
      ContentType: bi[l][t.bookType] || bi[l].xlsx
    }));
  }, a = function(l) {
    (e[l] || []).forEach(function(f) {
      i[i.length] = le("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: bi[l][t.bookType] || bi[l].xlsx
      });
    });
  }, o = function(l) {
    (e[l] || []).forEach(function(f) {
      i[i.length] = le("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: r[l][0]
      });
    });
  };
  return s("workbooks"), a("sheets"), a("charts"), o("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(o), o("vba"), o("comments"), o("threadedcomments"), o("drawings"), a("metadata"), o("people"), i.length > 2 && (i[i.length] = "</Types>", i[1] = i[1].replace("/>", ">")), i.join("");
}
var Be = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Zl(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function wn(e) {
  var t = [ot, le("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: ht.RELS
  })];
  return Et(e["!id"]).forEach(function(r) {
    t[t.length] = le("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Ge(e, t, r, i, n, s) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, n.Id = "rId" + t, n.Type = i, n.Target = r, s ? n.TargetMode = s : [Be.HLINK, Be.XPATH, Be.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, t;
}
function ld(e) {
  var t = [ot];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function io(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function fd(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function cd(e) {
  var t = [ot];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(io(e[r][0], e[r][1])), t.push(fd("", e[r][0]));
  return t.push(io("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function Ql() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + qi.version + "</meta:generator></office:meta></office:document-meta>";
}
var $r = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function Hs(e, t, r, i, n) {
  n[e] != null || t == null || t === "" || (n[e] = t, t = je(t), i[i.length] = r ? le(e, t, r) : _t(e, t));
}
function $l(e, t) {
  var r = t || {}, i = [ot, le("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": ht.CORE_PROPS,
    "xmlns:dc": ht.dc,
    "xmlns:dcterms": ht.dcterms,
    "xmlns:dcmitype": ht.dcmitype,
    "xmlns:xsi": ht.xsi
  })], n = {};
  if (!e && !r.Props)
    return i.join("");
  e && (e.CreatedDate != null && Hs("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : oa(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, i, n), e.ModifiedDate != null && Hs("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : oa(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, i, n));
  for (var s = 0; s != $r.length; ++s) {
    var a = $r[s], o = r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e ? e[a[1]] : null;
    o === !0 ? o = "1" : o === !1 ? o = "0" : typeof o == "number" && (o = String(o)), o != null && Hs(a[0], o, null, i, n);
  }
  return i.length > 2 && (i[i.length] = "</cp:coreProperties>", i[1] = i[1].replace("/>", ">")), i.join("");
}
var Sn = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], ef = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function tf(e) {
  var t = [], r = le;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = ot, t[t.length] = le("Properties", null, {
    xmlns: ht.EXT_PROPS,
    "xmlns:vt": ht.vt
  }), Sn.forEach(function(i) {
    if (e[i[1]] !== void 0) {
      var n;
      switch (i[2]) {
        case "string":
          n = je(String(e[i[1]]));
          break;
        case "bool":
          n = e[i[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (t[t.length] = r(i[0], n));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(i) {
    return "<vt:lpstr>" + je(i) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function rf(e) {
  var t = [ot, le("Properties", null, {
    xmlns: ht.CUST_PROPS,
    "xmlns:vt": ht.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return Et(e).forEach(function(n) {
    ++r, t[t.length] = le("property", O1(e[n], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: je(n)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var so = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function hd(e, t) {
  var r = [];
  return Et(so).map(function(i) {
    for (var n = 0; n < $r.length; ++n)
      if ($r[n][1] == i)
        return $r[n];
    for (n = 0; n < Sn.length; ++n)
      if (Sn[n][1] == i)
        return Sn[n];
    throw i;
  }).forEach(function(i) {
    if (e[i[1]] != null) {
      var n = t && t.Props && t.Props[i[1]] != null ? t.Props[i[1]] : e[i[1]];
      switch (i[2]) {
        case "date":
          n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof n == "number" ? n = String(n) : n === !0 || n === !1 ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), r.push(_t(so[i[1]] || i[1], n));
    }
  }), le("DocumentProperties", r.join(""), { xmlns: Vt.o });
}
function ud(e, t) {
  var r = ["Worksheets", "SheetNames"], i = "CustomDocumentProperties", n = [];
  return e && Et(e).forEach(function(s) {
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      for (var a = 0; a < $r.length; ++a)
        if (s == $r[a][1])
          return;
      for (a = 0; a < Sn.length; ++a)
        if (s == Sn[a][1])
          return;
      for (a = 0; a < r.length; ++a)
        if (s == r[a])
          return;
      var o = e[s], l = "string";
      typeof o == "number" ? (l = "float", o = String(o)) : o === !0 || o === !1 ? (l = "boolean", o = o ? "1" : "0") : o = String(o), n.push(le(X0(s), o, { "dt:dt": l }));
    }
  }), t && Et(t).forEach(function(s) {
    if (Object.prototype.hasOwnProperty.call(t, s) && !(e && Object.prototype.hasOwnProperty.call(e, s))) {
      var a = t[s], o = "string";
      typeof a == "number" ? (o = "float", a = String(a)) : a === !0 || a === !1 ? (o = "boolean", a = a ? "1" : "0") : a instanceof Date ? (o = "dateTime.tz", a = a.toISOString()) : a = String(a), n.push(le(X0(s), a, { "dt:dt": o }));
    }
  }), "<" + i + ' xmlns="' + Vt.o + '">' + n.join("") + "</" + i + ">";
}
function dd(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, i = r % Math.pow(2, 32), n = (r - i) / Math.pow(2, 32);
  i *= 1e7, n *= 1e7;
  var s = i / Math.pow(2, 32) | 0;
  s > 0 && (i = i % Math.pow(2, 32), n += s);
  var a = H(8);
  return a.write_shift(4, i), a.write_shift(4, n), a;
}
function ao(e, t) {
  var r = H(4), i = H(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      i.write_shift(-4, t);
      break;
    case 5:
      i = H(8), i.write_shift(8, t, "f");
      break;
    case 11:
      i.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      i = dd(t);
      break;
    case 31:
    case 80:
      for (i = H(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), i.write_shift(4, t.length + 1), i.write_shift(0, t, "dbcs"); i.l != i.length; )
        i.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return gt([r, i]);
}
var nf = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function pd(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function oo(e, t, r) {
  var i = H(8), n = [], s = [], a = 8, o = 0, l = H(8), f = H(8);
  if (l.write_shift(4, 2), l.write_shift(4, 1200), f.write_shift(4, 1), s.push(l), n.push(f), a += 8 + l.length, !t) {
    f = H(8), f.write_shift(4, 0), n.unshift(f);
    var c = [H(4)];
    for (c[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
      var h = e[o][0];
      for (l = H(4 + 4 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)), l.write_shift(4, o + 2), l.write_shift(4, h.length + 1), l.write_shift(0, h, "dbcs"); l.l != l.length; )
        l.write_shift(1, 0);
      c.push(l);
    }
    l = gt(c), s.unshift(l), a += 8 + l.length;
  }
  for (o = 0; o < e.length; ++o)
    if (!(t && !t[e[o][0]]) && !(nf.indexOf(e[o][0]) > -1 || ef.indexOf(e[o][0]) > -1) && e[o][1] != null) {
      var u = e[o][1], p = 0;
      if (t) {
        p = +t[e[o][0]];
        var g = r[p];
        if (g.p == "version" && typeof u == "string") {
          var d = u.split(".");
          u = (+d[0] << 16) + (+d[1] || 0);
        }
        l = ao(g.t, u);
      } else {
        var v = pd(u);
        v == -1 && (v = 31, u = String(u)), l = ao(v, u);
      }
      s.push(l), f = H(8), f.write_shift(4, t ? p : 2 + o), n.push(f), a += 8 + l.length;
    }
  var O = 8 * (s.length + 1);
  for (o = 0; o < s.length; ++o)
    n[o].write_shift(4, O), O += s[o].length;
  return i.write_shift(4, a), i.write_shift(4, s.length), gt([i].concat(n).concat(s));
}
function lo(e, t, r, i, n, s) {
  var a = H(n ? 68 : 48), o = [a];
  a.write_shift(2, 65534), a.write_shift(2, 0), a.write_shift(4, 842412599), a.write_shift(16, Ke.utils.consts.HEADER_CLSID, "hex"), a.write_shift(4, n ? 2 : 1), a.write_shift(16, t, "hex"), a.write_shift(4, n ? 68 : 48);
  var l = oo(e, r, i);
  if (o.push(l), n) {
    var f = oo(n, null, null);
    a.write_shift(16, s, "hex"), a.write_shift(4, 68 + l.length), o.push(f);
  }
  return gt(o);
}
function xd(e, t) {
  t || (t = H(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function md(e, t) {
  return e.read_shift(t) === 1;
}
function Pt(e, t) {
  return t || (t = H(2)), t.write_shift(2, +!!e), t;
}
function sf(e) {
  return e.read_shift(2, "u");
}
function Kt(e, t) {
  return t || (t = H(2)), t.write_shift(2, e), t;
}
function af(e, t, r) {
  return r || (r = H(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function of(e, t, r) {
  var i = e.read_shift(r && r.biff >= 12 ? 2 : 1), n = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else
    r.biff == 12 && (n = "wstr");
  r.biff >= 2 && r.biff <= 5 && (n = "cpstr");
  var a = i ? e.read_shift(i, n) : "";
  return a;
}
function gd(e) {
  var t = e.t || "", r = H(3 + 0);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var i = H(2 * t.length);
  i.write_shift(2 * t.length, t, "utf16le");
  var n = [r, i];
  return gt(n);
}
function _d(e, t, r) {
  var i;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? i = e.read_shift(t, "sbcs-cont") : i = e.read_shift(t, "dbcs-cont"), i;
}
function vd(e, t, r) {
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return i === 0 ? (e.l++, "") : _d(e, i, r);
}
function Ed(e, t, r) {
  if (r.biff > 5)
    return vd(e, t, r);
  var i = e.read_shift(1);
  return i === 0 ? (e.l++, "") : e.read_shift(i, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function lf(e, t, r) {
  return r || (r = H(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function fo(e, t) {
  t || (t = H(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function Td(e) {
  var t = H(512), r = 0, i = e.Target;
  i.slice(0, 7) == "file://" && (i = i.slice(7));
  var n = i.indexOf("#"), s = n > -1 ? 31 : 23;
  switch (i.charAt(0)) {
    case "#":
      s = 28;
      break;
    case ".":
      s &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, s);
  var a = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < a.length; ++r)
    t.write_shift(4, a[r]);
  if (s == 28)
    i = i.slice(1), fo(i, t);
  else if (s & 2) {
    for (a = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < a.length; ++r)
      t.write_shift(1, parseInt(a[r], 16));
    var o = n > -1 ? i.slice(0, n) : i;
    for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r)
      t.write_shift(2, o.charCodeAt(r));
    t.write_shift(2, 0), s & 8 && fo(n > -1 ? i.slice(n + 1) : "", t);
  } else {
    for (a = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < a.length; ++r)
      t.write_shift(1, parseInt(a[r], 16));
    for (var l = 0; i.slice(l * 3, l * 3 + 3) == "../" || i.slice(l * 3, l * 3 + 3) == "..\\"; )
      ++l;
    for (t.write_shift(2, l), t.write_shift(4, i.length - 3 * l + 1), r = 0; r < i.length - 3 * l; ++r)
      t.write_shift(1, i.charCodeAt(r + 3 * l) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function nn(e, t, r, i) {
  return i || (i = H(6)), i.write_shift(2, e), i.write_shift(2, t), i.write_shift(2, r || 0), i;
}
function wd(e, t, r) {
  var i = r.biff > 8 ? 4 : 2, n = e.read_shift(i), s = e.read_shift(i, "i"), a = e.read_shift(i, "i");
  return [n, s, a];
}
function Sd(e) {
  var t = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: i, r: t }, e: { c: n, r } };
}
function ff(e, t) {
  return t || (t = H(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function Ga(e, t, r) {
  var i = 1536, n = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      i = 1280, n = 8;
      break;
    case "biff4":
      i = 4, n = 6;
      break;
    case "biff3":
      i = 3, n = 6;
      break;
    case "biff2":
      i = 2, n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var s = H(n);
  return s.write_shift(2, i), s.write_shift(2, t), n > 4 && s.write_shift(2, 29282), n > 6 && s.write_shift(2, 1997), n > 8 && (s.write_shift(2, 49161), s.write_shift(2, 1), s.write_shift(2, 1798), s.write_shift(2, 0)), s;
}
function Cd(e, t) {
  var r = !t || t.biff == 8, i = H(r ? 112 : 54);
  for (i.write_shift(t.biff == 8 ? 2 : 1, 7), r && i.write_shift(1, 0), i.write_shift(4, 859007059), i.write_shift(4, 5458548 | (r ? 0 : 536870912)); i.l < i.length; )
    i.write_shift(1, r ? 0 : 32);
  return i;
}
function Ad(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, i = H(8 + r * e.name.length);
  i.write_shift(4, e.pos), i.write_shift(1, e.hs || 0), i.write_shift(1, e.dt), i.write_shift(1, e.name.length), t.biff >= 8 && i.write_shift(1, 1), i.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var n = i.slice(0, i.l);
  return n.l = i.l, n;
}
function yd(e, t) {
  var r = H(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var i = [], n = 0; n < e.length; ++n)
    i[n] = gd(e[n]);
  var s = gt([r].concat(i));
  return s.parts = [r.length].concat(i.map(function(a) {
    return a.length;
  })), s;
}
function Fd() {
  var e = H(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Od(e) {
  var t = H(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function Dd(e, t) {
  var r = e.name || "Arial", i = t && t.biff == 5, n = i ? 15 + r.length : 16 + 2 * r.length, s = H(n);
  return s.write_shift(2, (e.sz || 12) * 20), s.write_shift(4, 0), s.write_shift(2, 400), s.write_shift(4, 0), s.write_shift(2, 0), s.write_shift(1, r.length), i || s.write_shift(1, 1), s.write_shift((i ? 1 : 2) * r.length, r, i ? "sbcs" : "utf16le"), s;
}
function Rd(e, t, r, i) {
  var n = H(10);
  return nn(e, t, i, n), n.write_shift(4, r), n;
}
function Pd(e, t, r, i, n) {
  var s = !n || n.biff == 8, a = H(6 + 2 + +s + (1 + s) * r.length);
  return nn(e, t, i, a), a.write_shift(2, r.length), s && a.write_shift(1, 1), a.write_shift((1 + s) * r.length, r, s ? "utf16le" : "sbcs"), a;
}
function Nd(e, t, r, i) {
  var n = r && r.biff == 5;
  i || (i = H(n ? 3 + t.length : 5 + 2 * t.length)), i.write_shift(2, e), i.write_shift(n ? 1 : 2, t.length), n || i.write_shift(1, 1), i.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
  var s = i.length > i.l ? i.slice(0, i.l) : i;
  return s.l == null && (s.l = s.length), s;
}
function Id(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, i = H(2 * r + 6);
  return i.write_shift(r, e.s.r), i.write_shift(r, e.e.r + 1), i.write_shift(2, e.s.c), i.write_shift(2, e.e.c + 1), i.write_shift(2, 0), i;
}
function co(e, t, r, i) {
  var n = r && r.biff == 5;
  i || (i = H(n ? 16 : 20)), i.write_shift(2, 0), e.style ? (i.write_shift(2, e.numFmtId || 0), i.write_shift(2, 65524)) : (i.write_shift(2, e.numFmtId || 0), i.write_shift(2, t << 4));
  var s = 0;
  return e.numFmtId > 0 && n && (s |= 1024), i.write_shift(4, s), i.write_shift(4, 0), n || i.write_shift(4, 0), i.write_shift(2, 0), i;
}
function bd(e) {
  var t = H(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function kd(e, t, r, i, n, s) {
  var a = H(8);
  return nn(e, t, i, a), af(r, s, a), a;
}
function Md(e, t, r, i) {
  var n = H(14);
  return nn(e, t, i, n), rn(r, n), n;
}
function Ld(e, t, r) {
  if (r.biff < 8)
    return Bd(e, t, r);
  for (var i = [], n = e.l + t, s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0; )
    i.push(wd(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != n)
    throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return i;
}
function Bd(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var i = of(e, t, r);
  return i.charCodeAt(0) == 3 ? i.slice(1) : i;
}
function Ud(e) {
  var t = H(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    ff(e[r], t);
  return t;
}
function Wd(e) {
  var t = H(24), r = ut(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var i = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n)
    t.write_shift(1, parseInt(i[n], 16));
  return gt([t, Td(e[1])]);
}
function Hd(e) {
  var t = e[1].Tooltip, r = H(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var i = ut(e[0]);
  r.write_shift(2, i.r), r.write_shift(2, i.r), r.write_shift(2, i.c), r.write_shift(2, i.c);
  for (var n = 0; n < t.length; ++n)
    r.write_shift(2, t.charCodeAt(n));
  return r.write_shift(2, 0), r;
}
function Vd(e) {
  return e || (e = H(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Gd(e, t, r) {
  if (!r.cellStyles)
    return xr(e, t);
  var i = r && r.biff >= 12 ? 4 : 2, n = e.read_shift(i), s = e.read_shift(i), a = e.read_shift(i), o = e.read_shift(i), l = e.read_shift(2);
  i == 2 && (e.l += 2);
  var f = { s: n, e: s, w: a, ixfe: o, flags: l };
  return (r.biff >= 5 || !r.biff) && (f.level = l >> 8 & 7), f;
}
function jd(e, t) {
  var r = H(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var i = 0;
  return e.hidden && (i |= 1), r.write_shift(1, i), i = e.level || 0, r.write_shift(1, i), r.write_shift(2, 0), r;
}
function zd(e) {
  for (var t = H(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
function Xd(e, t, r) {
  var i = H(15);
  return vi(i, e, t), i.write_shift(8, r, "f"), i;
}
function Kd(e, t, r) {
  var i = H(9);
  return vi(i, e, t), i.write_shift(2, r), i;
}
var Yd = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = Na({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(o, l) {
    var f = [], c = tn(1);
    switch (l.type) {
      case "base64":
        c = rr(Ar(o));
        break;
      case "binary":
        c = rr(o);
        break;
      case "buffer":
      case "array":
        c = o;
        break;
    }
    Ht(c, 0);
    var h = c.read_shift(1), u = !!(h & 136), p = !1, g = !1;
    switch (h) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        p = !0, u = !0;
        break;
      case 49:
        p = !0, u = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        g = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + h.toString(16));
    }
    var d = 0, v = 521;
    h == 2 && (d = c.read_shift(2)), c.l += 3, h != 2 && (d = c.read_shift(4)), d > 1048576 && (d = 1e6), h != 2 && (v = c.read_shift(2));
    var O = c.read_shift(2), R = l.codepage || 1252;
    h != 2 && (c.l += 16, c.read_shift(1), c[c.l] !== 0 && (R = e[c[c.l]]), c.l += 1, c.l += 2), g && (c.l += 36);
    for (var y = [], P = {}, ie = Math.min(c.length, h == 2 ? 521 : v - 10 - (p ? 264 : 0)), de = g ? 32 : 11; c.l < ie && c[c.l] != 13; )
      switch (P = {}, P.name = Yr.utils.decode(R, c.slice(c.l, c.l + de)).replace(/[\u0000\r\n].*$/g, ""), c.l += de, P.type = String.fromCharCode(c.read_shift(1)), h != 2 && !g && (P.offset = c.read_shift(4)), P.len = c.read_shift(1), h == 2 && (P.offset = c.read_shift(2)), P.dec = c.read_shift(1), P.name.length && y.push(P), h != 2 && (c.l += g ? 13 : 14), P.type) {
        case "B":
          (!p || P.len != 8) && l.WTF && console.log("Skipping " + P.name + ":" + P.type);
          break;
        case "G":
        case "P":
          l.WTF && console.log("Skipping " + P.name + ":" + P.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + P.type);
      }
    if (c[c.l] !== 13 && (c.l = v - 1), c.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
    c.l = v;
    var N = 0, j = 0;
    for (f[0] = [], j = 0; j != y.length; ++j)
      f[0][j] = y[j].name;
    for (; d-- > 0; ) {
      if (c[c.l] === 42) {
        c.l += O;
        continue;
      }
      for (++c.l, f[++N] = [], j = 0, j = 0; j != y.length; ++j) {
        var W = c.slice(c.l, c.l + y[j].len);
        c.l += y[j].len, Ht(W, 0);
        var Y = Yr.utils.decode(R, W);
        switch (y[j].type) {
          case "C":
            Y.trim().length && (f[N][j] = Y.replace(/\s+$/, ""));
            break;
          case "D":
            Y.length === 8 ? f[N][j] = new Date(+Y.slice(0, 4), +Y.slice(4, 6) - 1, +Y.slice(6, 8)) : f[N][j] = Y;
            break;
          case "F":
            f[N][j] = parseFloat(Y.trim());
            break;
          case "+":
          case "I":
            f[N][j] = g ? W.read_shift(-4, "i") ^ 2147483648 : W.read_shift(4, "i");
            break;
          case "L":
            switch (Y.trim().toUpperCase()) {
              case "Y":
              case "T":
                f[N][j] = !0;
                break;
              case "N":
              case "F":
                f[N][j] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + Y + "|");
            }
            break;
          case "M":
            if (!u)
              throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
            f[N][j] = "##MEMO##" + (g ? parseInt(Y.trim(), 10) : W.read_shift(4));
            break;
          case "N":
            Y = Y.replace(/\u0000/g, "").trim(), Y && Y != "." && (f[N][j] = +Y || 0);
            break;
          case "@":
            f[N][j] = new Date(W.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            f[N][j] = new Date((W.read_shift(4) - 2440588) * 864e5 + W.read_shift(4));
            break;
          case "Y":
            f[N][j] = W.read_shift(4, "i") / 1e4 + W.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            f[N][j] = -W.read_shift(-8, "f");
            break;
          case "B":
            if (p && y[j].len == 8) {
              f[N][j] = W.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            W.l += y[j].len;
            break;
          case "0":
            if (y[j].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + y[j].type);
        }
      }
    }
    if (h != 2 && c.l < c.length && c[c.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
    return l && l.sheetRows && (f = f.slice(0, l.sheetRows)), l.DBF = y, f;
  }
  function i(o, l) {
    var f = l || {};
    f.dateNF || (f.dateNF = "yyyymmdd");
    var c = Pn(r(o, f), f);
    return c["!cols"] = f.DBF.map(function(h) {
      return {
        wch: h.len,
        DBF: h
      };
    }), delete f.DBF, c;
  }
  function n(o, l) {
    try {
      return sn(i(o, l), l);
    } catch (f) {
      if (l && l.WTF)
        throw f;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function a(o, l) {
    var f = l || {};
    if (+f.codepage >= 0 && oi(+f.codepage), f.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var c = Mt(), h = fs(o, { header: 1, raw: !0, cellDates: !0 }), u = h[0], p = h.slice(1), g = o["!cols"] || [], d = 0, v = 0, O = 0, R = 1;
    for (d = 0; d < u.length; ++d) {
      if (((g[d] || {}).DBF || {}).name) {
        u[d] = g[d].DBF.name, ++O;
        continue;
      }
      if (u[d] != null) {
        if (++O, typeof u[d] == "number" && (u[d] = u[d].toString(10)), typeof u[d] != "string")
          throw new Error("DBF Invalid column name " + u[d] + " |" + typeof u[d] + "|");
        if (u.indexOf(u[d]) !== d) {
          for (v = 0; v < 1024; ++v)
            if (u.indexOf(u[d] + "_" + v) == -1) {
              u[d] += "_" + v;
              break;
            }
        }
      }
    }
    var y = Ze(o["!ref"]), P = [], ie = [], de = [];
    for (d = 0; d <= y.e.c - y.s.c; ++d) {
      var N = "", j = "", W = 0, Y = [];
      for (v = 0; v < p.length; ++v)
        p[v][d] != null && Y.push(p[v][d]);
      if (Y.length == 0 || u[d] == null) {
        P[d] = "?";
        continue;
      }
      for (v = 0; v < Y.length; ++v) {
        switch (typeof Y[v]) {
          case "number":
            j = "B";
            break;
          case "string":
            j = "C";
            break;
          case "boolean":
            j = "L";
            break;
          case "object":
            j = Y[v] instanceof Date ? "D" : "C";
            break;
          default:
            j = "C";
        }
        W = Math.max(W, String(Y[v]).length), N = N && N != j ? "C" : j;
      }
      W > 250 && (W = 250), j = ((g[d] || {}).DBF || {}).type, j == "C" && g[d].DBF.len > W && (W = g[d].DBF.len), N == "B" && j == "N" && (N = "N", de[d] = g[d].DBF.dec, W = g[d].DBF.len), ie[d] = N == "C" || j == "N" ? W : s[N] || 0, R += ie[d], P[d] = N;
    }
    var q = c.next(32);
    for (q.write_shift(4, 318902576), q.write_shift(4, p.length), q.write_shift(2, 296 + 32 * O), q.write_shift(2, R), d = 0; d < 4; ++d)
      q.write_shift(4, 0);
    for (q.write_shift(4, 0 | (+t[
      /*::String(*/
      cl
      /*::)*/
    ] || 3) << 8), d = 0, v = 0; d < u.length; ++d)
      if (u[d] != null) {
        var te = c.next(32), pe = (u[d].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        te.write_shift(1, pe, "sbcs"), te.write_shift(1, P[d] == "?" ? "C" : P[d], "sbcs"), te.write_shift(4, v), te.write_shift(1, ie[d] || s[P[d]] || 0), te.write_shift(1, de[d] || 0), te.write_shift(1, 2), te.write_shift(4, 0), te.write_shift(1, 0), te.write_shift(4, 0), te.write_shift(4, 0), v += ie[d] || s[P[d]] || 0;
      }
    var Le = c.next(264);
    for (Le.write_shift(4, 13), d = 0; d < 65; ++d)
      Le.write_shift(4, 0);
    for (d = 0; d < p.length; ++d) {
      var Ae = c.next(R);
      for (Ae.write_shift(1, 0), v = 0; v < u.length; ++v)
        if (u[v] != null)
          switch (P[v]) {
            case "L":
              Ae.write_shift(1, p[d][v] == null ? 63 : p[d][v] ? 84 : 70);
              break;
            case "B":
              Ae.write_shift(8, p[d][v] || 0, "f");
              break;
            case "N":
              var ke = "0";
              for (typeof p[d][v] == "number" && (ke = p[d][v].toFixed(de[v] || 0)), O = 0; O < ie[v] - ke.length; ++O)
                Ae.write_shift(1, 32);
              Ae.write_shift(1, ke, "sbcs");
              break;
            case "D":
              p[d][v] ? (Ae.write_shift(4, ("0000" + p[d][v].getFullYear()).slice(-4), "sbcs"), Ae.write_shift(2, ("00" + (p[d][v].getMonth() + 1)).slice(-2), "sbcs"), Ae.write_shift(2, ("00" + p[d][v].getDate()).slice(-2), "sbcs")) : Ae.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ye = String(p[d][v] != null ? p[d][v] : "").slice(0, ie[v]);
              for (Ae.write_shift(1, ye, "sbcs"), O = 0; O < ie[v] - ye.length; ++O)
                Ae.write_shift(1, 32);
              break;
          }
    }
    return c.next(1).write_shift(1, 26), c.end();
  }
  return {
    to_workbook: n,
    to_sheet: i,
    from_sheet: a
  };
}(), Jd = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + Et(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(u, p) {
    var g = e[p];
    return typeof g == "number" ? b0(g) : g;
  }, i = function(u, p, g) {
    var d = p.charCodeAt(0) - 32 << 4 | g.charCodeAt(0) - 48;
    return d == 59 ? u : b0(d);
  };
  e["|"] = 254;
  function n(u, p) {
    switch (p.type) {
      case "base64":
        return s(Ar(u), p);
      case "binary":
        return s(u, p);
      case "buffer":
        return s(We && Buffer.isBuffer(u) ? u.toString("binary") : pi(u), p);
      case "array":
        return s(ys(u), p);
    }
    throw new Error("Unrecognized type " + p.type);
  }
  function s(u, p) {
    var g = u.split(/[\n\r]+/), d = -1, v = -1, O = 0, R = 0, y = [], P = [], ie = null, de = {}, N = [], j = [], W = [], Y = 0, q;
    for (+p.codepage >= 0 && oi(+p.codepage); O !== g.length; ++O) {
      Y = 0;
      var te = g[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i).replace(t, r), pe = te.replace(/;;/g, "\0").split(";").map(function(F) {
        return F.replace(/\u0000/g, ";");
      }), Le = pe[0], Ae;
      if (te.length > 0)
        switch (Le) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            pe[1].charAt(0) == "P" && P.push(te.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var ke = !1, ye = !1, Ne = !1, Ye = !1, pt = -1, nt = -1;
            for (R = 1; R < pe.length; ++R)
              switch (pe[R].charAt(0)) {
                case "A":
                  break;
                case "X":
                  v = parseInt(pe[R].slice(1)) - 1, ye = !0;
                  break;
                case "Y":
                  for (d = parseInt(pe[R].slice(1)) - 1, ye || (v = 0), q = y.length; q <= d; ++q)
                    y[q] = [];
                  break;
                case "K":
                  Ae = pe[R].slice(1), Ae.charAt(0) === '"' ? Ae = Ae.slice(1, Ae.length - 1) : Ae === "TRUE" ? Ae = !0 : Ae === "FALSE" ? Ae = !1 : isNaN(wr(Ae)) ? isNaN(fi(Ae).getDate()) || (Ae = It(Ae)) : (Ae = wr(Ae), ie !== null && wl(ie) && (Ae = yl(Ae))), ke = !0;
                  break;
                case "E":
                  Ye = !0;
                  var C = Kp(pe[R].slice(1), { r: d, c: v });
                  y[d][v] = [y[d][v], C];
                  break;
                case "S":
                  Ne = !0, y[d][v] = [y[d][v], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  pt = parseInt(pe[R].slice(1)) - 1;
                  break;
                case "C":
                  nt = parseInt(pe[R].slice(1)) - 1;
                  break;
                default:
                  if (p && p.WTF)
                    throw new Error("SYLK bad record " + te);
              }
            if (ke && (y[d][v] && y[d][v].length == 2 ? y[d][v][0] = Ae : y[d][v] = Ae, ie = null), Ne) {
              if (Ye)
                throw new Error("SYLK shared formula cannot have own formula");
              var U = pt > -1 && y[pt][nt];
              if (!U || !U[1])
                throw new Error("SYLK shared formula cannot find base");
              y[d][v][1] = Yp(U[1], { r: d - pt, c: v - nt });
            }
            break;
          case "F":
            var D = 0;
            for (R = 1; R < pe.length; ++R)
              switch (pe[R].charAt(0)) {
                case "X":
                  v = parseInt(pe[R].slice(1)) - 1, ++D;
                  break;
                case "Y":
                  for (d = parseInt(pe[R].slice(1)) - 1, q = y.length; q <= d; ++q)
                    y[q] = [];
                  break;
                case "M":
                  Y = parseInt(pe[R].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  ie = P[parseInt(pe[R].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (W = pe[R].slice(1).split(" "), q = parseInt(W[0], 10); q <= parseInt(W[1], 10); ++q)
                    Y = parseInt(W[2], 10), j[q - 1] = Y === 0 ? { hidden: !0 } : { wch: Y }, ja(j[q - 1]);
                  break;
                case "C":
                  v = parseInt(pe[R].slice(1)) - 1, j[v] || (j[v] = {});
                  break;
                case "R":
                  d = parseInt(pe[R].slice(1)) - 1, N[d] || (N[d] = {}), Y > 0 ? (N[d].hpt = Y, N[d].hpx = pf(Y)) : Y === 0 && (N[d].hidden = !0);
                  break;
                default:
                  if (p && p.WTF)
                    throw new Error("SYLK bad record " + te);
              }
            D < 1 && (ie = null);
            break;
          default:
            if (p && p.WTF)
              throw new Error("SYLK bad record " + te);
        }
    }
    return N.length > 0 && (de["!rows"] = N), j.length > 0 && (de["!cols"] = j), p && p.sheetRows && (y = y.slice(0, p.sheetRows)), [y, de];
  }
  function a(u, p) {
    var g = n(u, p), d = g[0], v = g[1], O = Pn(d, p);
    return Et(v).forEach(function(R) {
      O[R] = v[R];
    }), O;
  }
  function o(u, p) {
    return sn(a(u, p), p);
  }
  function l(u, p, g, d) {
    var v = "C;Y" + (g + 1) + ";X" + (d + 1) + ";K";
    switch (u.t) {
      case "n":
        v += u.v || 0, u.f && !u.F && (v += ";E" + Xa(u.f, { r: g, c: d }));
        break;
      case "b":
        v += u.v ? "TRUE" : "FALSE";
        break;
      case "e":
        v += u.w || u.v;
        break;
      case "d":
        v += '"' + (u.w || u.v) + '"';
        break;
      case "s":
        v += '"' + u.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return v;
  }
  function f(u, p) {
    p.forEach(function(g, d) {
      var v = "F;W" + (d + 1) + " " + (d + 1) + " ";
      g.hidden ? v += "0" : (typeof g.width == "number" && !g.wpx && (g.wpx = ss(g.width)), typeof g.wpx == "number" && !g.wch && (g.wch = as(g.wpx)), typeof g.wch == "number" && (v += Math.round(g.wch))), v.charAt(v.length - 1) != " " && u.push(v);
    });
  }
  function c(u, p) {
    p.forEach(function(g, d) {
      var v = "F;";
      g.hidden ? v += "M0;" : g.hpt ? v += "M" + 20 * g.hpt + ";" : g.hpx && (v += "M" + 20 * os(g.hpx) + ";"), v.length > 2 && u.push(v + "R" + (d + 1));
    });
  }
  function h(u, p) {
    var g = ["ID;PWXL;N;E"], d = [], v = Ze(u["!ref"]), O, R = Array.isArray(u), y = `\r
`;
    g.push("P;PGeneral"), g.push("F;P0;DG0G8;M255"), u["!cols"] && f(g, u["!cols"]), u["!rows"] && c(g, u["!rows"]), g.push("B;Y" + (v.e.r - v.s.r + 1) + ";X" + (v.e.c - v.s.c + 1) + ";D" + [v.s.c, v.s.r, v.e.c, v.e.r].join(" "));
    for (var P = v.s.r; P <= v.e.r; ++P)
      for (var ie = v.s.c; ie <= v.e.c; ++ie) {
        var de = Xe({ r: P, c: ie });
        O = R ? (u[P] || [])[ie] : u[de], !(!O || O.v == null && (!O.f || O.F)) && d.push(l(O, u, P, ie));
      }
    return g.join(y) + y + d.join(y) + y + "E" + y;
  }
  return {
    to_workbook: o,
    to_sheet: a,
    from_sheet: h
  };
}(), qd = /* @__PURE__ */ function() {
  function e(s, a) {
    switch (a.type) {
      case "base64":
        return t(Ar(s), a);
      case "binary":
        return t(s, a);
      case "buffer":
        return t(We && Buffer.isBuffer(s) ? s.toString("binary") : pi(s), a);
      case "array":
        return t(ys(s), a);
    }
    throw new Error("Unrecognized type " + a.type);
  }
  function t(s, a) {
    for (var o = s.split(`
`), l = -1, f = -1, c = 0, h = []; c !== o.length; ++c) {
      if (o[c].trim() === "BOT") {
        h[++l] = [], f = 0;
        continue;
      }
      if (!(l < 0)) {
        var u = o[c].trim().split(","), p = u[0], g = u[1];
        ++c;
        for (var d = o[c] || ""; (d.match(/["]/g) || []).length & 1 && c < o.length - 1; )
          d += `
` + o[++c];
        switch (d = d.trim(), +p) {
          case -1:
            if (d === "BOT") {
              h[++l] = [], f = 0;
              continue;
            } else if (d !== "EOD")
              throw new Error("Unrecognized DIF special command " + d);
            break;
          case 0:
            d === "TRUE" ? h[l][f] = !0 : d === "FALSE" ? h[l][f] = !1 : isNaN(wr(g)) ? isNaN(fi(g).getDate()) ? h[l][f] = g : h[l][f] = It(g) : h[l][f] = wr(g), ++f;
            break;
          case 1:
            d = d.slice(1, d.length - 1), d = d.replace(/""/g, '"'), d && d.match(/^=".*"$/) && (d = d.slice(2, -1)), h[l][f++] = d !== "" ? d : null;
            break;
        }
        if (d === "EOD")
          break;
      }
    }
    return a && a.sheetRows && (h = h.slice(0, a.sheetRows)), h;
  }
  function r(s, a) {
    return Pn(e(s, a), a);
  }
  function i(s, a) {
    return sn(r(s, a), a);
  }
  var n = /* @__PURE__ */ function() {
    var s = function(l, f, c, h, u) {
      l.push(f), l.push(c + "," + h), l.push('"' + u.replace(/"/g, '""') + '"');
    }, a = function(l, f, c, h) {
      l.push(f + "," + c), l.push(f == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
    };
    return function(l) {
      var f = [], c = Ze(l["!ref"]), h, u = Array.isArray(l);
      s(f, "TABLE", 0, 1, "sheetjs"), s(f, "VECTORS", 0, c.e.r - c.s.r + 1, ""), s(f, "TUPLES", 0, c.e.c - c.s.c + 1, ""), s(f, "DATA", 0, 0, "");
      for (var p = c.s.r; p <= c.e.r; ++p) {
        a(f, -1, 0, "BOT");
        for (var g = c.s.c; g <= c.e.c; ++g) {
          var d = Xe({ r: p, c: g });
          if (h = u ? (l[p] || [])[g] : l[d], !h) {
            a(f, 1, 0, "");
            continue;
          }
          switch (h.t) {
            case "n":
              var v = h.w;
              !v && h.v != null && (v = h.v), v == null ? h.f && !h.F ? a(f, 1, 0, "=" + h.f) : a(f, 1, 0, "") : a(f, 0, v, "V");
              break;
            case "b":
              a(f, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
              break;
            case "s":
              a(f, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
              break;
            case "d":
              h.w || (h.w = Br(h.z || rt[14], Bt(It(h.v)))), a(f, 0, h.w, "V");
              break;
            default:
              a(f, 1, 0, "");
          }
        }
      }
      a(f, -1, 0, "EOD");
      var O = `\r
`, R = f.join(O);
      return R;
    };
  }();
  return {
    to_workbook: i,
    to_sheet: r,
    from_sheet: n
  };
}(), cf = /* @__PURE__ */ function() {
  function e(h) {
    return h.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(h) {
    return h.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(h, u) {
    for (var p = h.split(`
`), g = -1, d = -1, v = 0, O = []; v !== p.length; ++v) {
      var R = p[v].trim().split(":");
      if (R[0] === "cell") {
        var y = ut(R[1]);
        if (O.length <= y.r)
          for (g = O.length; g <= y.r; ++g)
            O[g] || (O[g] = []);
        switch (g = y.r, d = y.c, R[2]) {
          case "t":
            O[g][d] = e(R[3]);
            break;
          case "v":
            O[g][d] = +R[3];
            break;
          case "vtf":
            var P = R[R.length - 1];
          case "vtc":
            switch (R[3]) {
              case "nl":
                O[g][d] = !!+R[4];
                break;
              default:
                O[g][d] = +R[4];
                break;
            }
            R[2] == "vtf" && (O[g][d] = [O[g][d], P]);
        }
      }
    }
    return u && u.sheetRows && (O = O.slice(0, u.sheetRows)), O;
  }
  function i(h, u) {
    return Pn(r(h, u), u);
  }
  function n(h, u) {
    return sn(i(h, u), u);
  }
  var s = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), a = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, o = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), l = "--SocialCalcSpreadsheetControlSave--";
  function f(h) {
    if (!h || !h["!ref"])
      return "";
    for (var u = [], p = [], g, d = "", v = jt(h["!ref"]), O = Array.isArray(h), R = v.s.r; R <= v.e.r; ++R)
      for (var y = v.s.c; y <= v.e.c; ++y)
        if (d = Xe({ r: R, c: y }), g = O ? (h[R] || [])[y] : h[d], !(!g || g.v == null || g.t === "z")) {
          switch (p = ["cell", d, "t"], g.t) {
            case "s":
            case "str":
              p.push(t(g.v));
              break;
            case "n":
              g.f ? (p[2] = "vtf", p[3] = "n", p[4] = g.v, p[5] = t(g.f)) : (p[2] = "v", p[3] = g.v);
              break;
            case "b":
              p[2] = "vt" + (g.f ? "f" : "c"), p[3] = "nl", p[4] = g.v ? "1" : "0", p[5] = t(g.f || (g.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var P = Bt(It(g.v));
              p[2] = "vtc", p[3] = "nd", p[4] = "" + P, p[5] = g.w || Br(g.z || rt[14], P);
              break;
            case "e":
              continue;
          }
          u.push(p.join(":"));
        }
    return u.push("sheet:c:" + (v.e.c - v.s.c + 1) + ":r:" + (v.e.r - v.s.r + 1) + ":tvf:1"), u.push("valueformat:1:text-wiki"), u.join(`
`);
  }
  function c(h) {
    return [s, a, o, a, f(h), l].join(`
`);
  }
  return {
    to_workbook: n,
    to_sheet: i,
    from_sheet: c
  };
}(), Zd = /* @__PURE__ */ function() {
  function e(c, h, u, p, g) {
    g.raw ? h[u][p] = c : c === "" || (c === "TRUE" ? h[u][p] = !0 : c === "FALSE" ? h[u][p] = !1 : isNaN(wr(c)) ? isNaN(fi(c).getDate()) ? h[u][p] = c : h[u][p] = It(c) : h[u][p] = wr(c));
  }
  function t(c, h) {
    var u = h || {}, p = [];
    if (!c || c.length === 0)
      return p;
    for (var g = c.split(/[\r\n]/), d = g.length - 1; d >= 0 && g[d].length === 0; )
      --d;
    for (var v = 10, O = 0, R = 0; R <= d; ++R)
      O = g[R].indexOf(" "), O == -1 ? O = g[R].length : O++, v = Math.max(v, O);
    for (R = 0; R <= d; ++R) {
      p[R] = [];
      var y = 0;
      for (e(g[R].slice(0, v).trim(), p, R, y, u), y = 1; y <= (g[R].length - v) / 10 + 1; ++y)
        e(g[R].slice(v + (y - 1) * 10, v + y * 10).trim(), p, R, y, u);
    }
    return u.sheetRows && (p = p.slice(0, u.sheetRows)), p;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, i = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function n(c) {
    for (var h = {}, u = !1, p = 0, g = 0; p < c.length; ++p)
      (g = c.charCodeAt(p)) == 34 ? u = !u : !u && g in r && (h[g] = (h[g] || 0) + 1);
    g = [];
    for (p in h)
      Object.prototype.hasOwnProperty.call(h, p) && g.push([h[p], p]);
    if (!g.length) {
      h = i;
      for (p in h)
        Object.prototype.hasOwnProperty.call(h, p) && g.push([h[p], p]);
    }
    return g.sort(function(d, v) {
      return d[0] - v[0] || i[d[1]] - i[v[1]];
    }), r[g.pop()[1]] || 44;
  }
  function s(c, h) {
    var u = h || {}, p = "", g = u.dense ? [] : {}, d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    c.slice(0, 4) == "sep=" ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10 ? (p = c.charAt(4), c = c.slice(7)) : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10 ? (p = c.charAt(4), c = c.slice(6)) : p = n(c.slice(0, 1024)) : u && u.FS ? p = u.FS : p = n(c.slice(0, 1024));
    var v = 0, O = 0, R = 0, y = 0, P = 0, ie = p.charCodeAt(0), de = !1, N = 0, j = c.charCodeAt(0);
    c = c.replace(/\r\n/mg, `
`);
    var W = u.dateNF != null ? d1(u.dateNF) : null;
    function Y() {
      var q = c.slice(y, P), te = {};
      if (q.charAt(0) == '"' && q.charAt(q.length - 1) == '"' && (q = q.slice(1, -1).replace(/""/g, '"')), q.length === 0)
        te.t = "z";
      else if (u.raw)
        te.t = "s", te.v = q;
      else if (q.trim().length === 0)
        te.t = "s", te.v = q;
      else if (q.charCodeAt(0) == 61)
        q.charCodeAt(1) == 34 && q.charCodeAt(q.length - 1) == 34 ? (te.t = "s", te.v = q.slice(2, -1).replace(/""/g, '"')) : Jp(q) ? (te.t = "n", te.f = q.slice(1)) : (te.t = "s", te.v = q);
      else if (q == "TRUE")
        te.t = "b", te.v = !0;
      else if (q == "FALSE")
        te.t = "b", te.v = !1;
      else if (!isNaN(R = wr(q)))
        te.t = "n", u.cellText !== !1 && (te.w = q), te.v = R;
      else if (!isNaN(fi(q).getDate()) || W && q.match(W)) {
        te.z = u.dateNF || rt[14];
        var pe = 0;
        W && q.match(W) && (q = p1(q, u.dateNF, q.match(W) || []), pe = 1), u.cellDates ? (te.t = "d", te.v = It(q, pe)) : (te.t = "n", te.v = Bt(It(q, pe))), u.cellText !== !1 && (te.w = Br(te.z, te.v instanceof Date ? Bt(te.v) : te.v)), u.cellNF || delete te.z;
      } else
        te.t = "s", te.v = q;
      if (te.t == "z" || (u.dense ? (g[v] || (g[v] = []), g[v][O] = te) : g[Xe({ c: O, r: v })] = te), y = P + 1, j = c.charCodeAt(y), d.e.c < O && (d.e.c = O), d.e.r < v && (d.e.r = v), N == ie)
        ++O;
      else if (O = 0, ++v, u.sheetRows && u.sheetRows <= v)
        return !0;
    }
    e:
      for (; P < c.length; ++P)
        switch (N = c.charCodeAt(P)) {
          case 34:
            j === 34 && (de = !de);
            break;
          case ie:
          case 10:
          case 13:
            if (!de && Y())
              break e;
            break;
        }
    return P - y > 0 && Y(), g["!ref"] = at(d), g;
  }
  function a(c, h) {
    return !(h && h.PRN) || h.FS || c.slice(0, 4) == "sep=" || c.indexOf("	") >= 0 || c.indexOf(",") >= 0 || c.indexOf(";") >= 0 ? s(c, h) : Pn(t(c, h), h);
  }
  function o(c, h) {
    var u = "", p = h.type == "string" ? [0, 0, 0, 0] : f_(c, h);
    switch (h.type) {
      case "base64":
        u = Ar(c);
        break;
      case "binary":
        u = c;
        break;
      case "buffer":
        h.codepage == 65001 ? u = c.toString("utf8") : h.codepage && typeof Yr < "u" ? u = Yr.utils.decode(h.codepage, c) : u = We && Buffer.isBuffer(c) ? c.toString("binary") : pi(c);
        break;
      case "array":
        u = ys(c);
        break;
      case "string":
        u = c;
        break;
      default:
        throw new Error("Unrecognized type " + h.type);
    }
    return p[0] == 239 && p[1] == 187 && p[2] == 191 ? u = qn(u.slice(3)) : h.type != "string" && h.type != "buffer" && h.codepage == 65001 ? u = qn(u) : h.type == "binary" && typeof Yr < "u" && h.codepage && (u = Yr.utils.decode(h.codepage, Yr.utils.encode(28591, u))), u.slice(0, 19) == "socialcalc:version:" ? cf.to_sheet(h.type == "string" ? u : qn(u), h) : a(u, h);
  }
  function l(c, h) {
    return sn(o(c, h), h);
  }
  function f(c) {
    for (var h = [], u = Ze(c["!ref"]), p, g = Array.isArray(c), d = u.s.r; d <= u.e.r; ++d) {
      for (var v = [], O = u.s.c; O <= u.e.c; ++O) {
        var R = Xe({ r: d, c: O });
        if (p = g ? (c[d] || [])[O] : c[R], !p || p.v == null) {
          v.push("          ");
          continue;
        }
        for (var y = (p.w || (yr(p), p.w) || "").slice(0, 10); y.length < 10; )
          y += " ";
        v.push(y + (O === 0 ? " " : ""));
      }
      h.push(v.join(""));
    }
    return h.join(`
`);
  }
  return {
    to_workbook: l,
    to_sheet: o,
    from_sheet: f
  };
}(), ho = /* @__PURE__ */ function() {
  function e(C, U, D) {
    if (C) {
      Ht(C, C.l || 0);
      for (var F = D.Enum || pt; C.l < C.length; ) {
        var z = C.read_shift(2), _e = F[z] || F[65535], Te = C.read_shift(2), me = C.l + Te, ue = _e.f && _e.f(C, Te, D);
        if (C.l = me, U(ue, _e, z))
          return;
      }
    }
  }
  function t(C, U) {
    switch (U.type) {
      case "base64":
        return r(rr(Ar(C)), U);
      case "binary":
        return r(rr(C), U);
      case "buffer":
      case "array":
        return r(C, U);
    }
    throw "Unsupported type " + U.type;
  }
  function r(C, U) {
    if (!C)
      return C;
    var D = U || {}, F = D.dense ? [] : {}, z = "Sheet1", _e = "", Te = 0, me = {}, ue = [], Ue = [], S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, A = D.sheetRows || 0;
    if (C[2] == 0 && (C[3] == 8 || C[3] == 9) && C.length >= 16 && C[14] == 5 && C[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (C[2] == 2)
      D.Enum = pt, e(C, function(L, ce, ne) {
        switch (ne) {
          case 0:
            D.vers = L, L >= 4096 && (D.qpro = !0);
            break;
          case 6:
            S = L;
            break;
          case 204:
            L && (_e = L);
            break;
          case 222:
            _e = L;
            break;
          case 15:
          case 51:
            D.qpro || (L[1].v = L[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            ne == 14 && (L[2] & 112) == 112 && (L[2] & 15) > 1 && (L[2] & 15) < 15 && (L[1].z = D.dateNF || rt[14], D.cellDates && (L[1].t = "d", L[1].v = yl(L[1].v))), D.qpro && L[3] > Te && (F["!ref"] = at(S), me[z] = F, ue.push(z), F = D.dense ? [] : {}, S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Te = L[3], z = _e || "Sheet" + (Te + 1), _e = "");
            var oe = D.dense ? (F[L[0].r] || [])[L[0].c] : F[Xe(L[0])];
            if (oe) {
              oe.t = L[1].t, oe.v = L[1].v, L[1].z != null && (oe.z = L[1].z), L[1].f != null && (oe.f = L[1].f);
              break;
            }
            D.dense ? (F[L[0].r] || (F[L[0].r] = []), F[L[0].r][L[0].c] = L[1]) : F[Xe(L[0])] = L[1];
            break;
        }
      }, D);
    else if (C[2] == 26 || C[2] == 14)
      D.Enum = nt, C[2] == 14 && (D.qpro = !0, C.l = 0), e(C, function(L, ce, ne) {
        switch (ne) {
          case 204:
            z = L;
            break;
          case 22:
            L[1].v = L[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (L[3] > Te && (F["!ref"] = at(S), me[z] = F, ue.push(z), F = D.dense ? [] : {}, S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Te = L[3], z = "Sheet" + (Te + 1)), A > 0 && L[0].r >= A)
              break;
            D.dense ? (F[L[0].r] || (F[L[0].r] = []), F[L[0].r][L[0].c] = L[1]) : F[Xe(L[0])] = L[1], S.e.c < L[0].c && (S.e.c = L[0].c), S.e.r < L[0].r && (S.e.r = L[0].r);
            break;
          case 27:
            L[14e3] && (Ue[L[14e3][0]] = L[14e3][1]);
            break;
          case 1537:
            Ue[L[0]] = L[1], L[0] == Te && (z = L[1]);
            break;
        }
      }, D);
    else
      throw new Error("Unrecognized LOTUS BOF " + C[2]);
    if (F["!ref"] = at(S), me[_e || z] = F, ue.push(_e || z), !Ue.length)
      return { SheetNames: ue, Sheets: me };
    for (var I = {}, X = [], V = 0; V < Ue.length; ++V)
      me[ue[V]] ? (X.push(Ue[V] || ue[V]), I[Ue[V]] = me[Ue[V]] || me[ue[V]]) : (X.push(Ue[V]), I[Ue[V]] = { "!ref": "A1" });
    return { SheetNames: X, Sheets: I };
  }
  function i(C, U) {
    var D = U || {};
    if (+D.codepage >= 0 && oi(+D.codepage), D.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var F = Mt(), z = Ze(C["!ref"]), _e = Array.isArray(C), Te = [];
    fe(F, 0, s(1030)), fe(F, 6, l(z));
    for (var me = Math.min(z.e.r, 8191), ue = z.s.r; ue <= me; ++ue)
      for (var Ue = vt(ue), S = z.s.c; S <= z.e.c; ++S) {
        ue === z.s.r && (Te[S] = Ft(S));
        var A = Te[S] + Ue, I = _e ? (C[ue] || [])[S] : C[A];
        if (!(!I || I.t == "z"))
          if (I.t == "n")
            (I.v | 0) == I.v && I.v >= -32768 && I.v <= 32767 ? fe(F, 13, p(ue, S, I.v)) : fe(F, 14, d(ue, S, I.v));
          else {
            var X = yr(I);
            fe(F, 15, h(ue, S, X.slice(0, 239)));
          }
      }
    return fe(F, 1), F.end();
  }
  function n(C, U) {
    var D = U || {};
    if (+D.codepage >= 0 && oi(+D.codepage), D.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var F = Mt();
    fe(F, 0, a(C));
    for (var z = 0, _e = 0; z < C.SheetNames.length; ++z)
      (C.Sheets[C.SheetNames[z]] || {})["!ref"] && fe(F, 27, Ye(C.SheetNames[z], _e++));
    var Te = 0;
    for (z = 0; z < C.SheetNames.length; ++z) {
      var me = C.Sheets[C.SheetNames[z]];
      if (!(!me || !me["!ref"])) {
        for (var ue = Ze(me["!ref"]), Ue = Array.isArray(me), S = [], A = Math.min(ue.e.r, 8191), I = ue.s.r; I <= A; ++I)
          for (var X = vt(I), V = ue.s.c; V <= ue.e.c; ++V) {
            I === ue.s.r && (S[V] = Ft(V));
            var L = S[V] + X, ce = Ue ? (me[I] || [])[V] : me[L];
            if (!(!ce || ce.t == "z"))
              if (ce.t == "n")
                fe(F, 23, Y(I, V, Te, ce.v));
              else {
                var ne = yr(ce);
                fe(F, 22, N(I, V, Te, ne.slice(0, 239)));
              }
          }
        ++Te;
      }
    }
    return fe(F, 1), F.end();
  }
  function s(C) {
    var U = H(2);
    return U.write_shift(2, C), U;
  }
  function a(C) {
    var U = H(26);
    U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
    for (var D = 0, F = 0, z = 0, _e = 0; _e < C.SheetNames.length; ++_e) {
      var Te = C.SheetNames[_e], me = C.Sheets[Te];
      if (!(!me || !me["!ref"])) {
        ++z;
        var ue = jt(me["!ref"]);
        D < ue.e.r && (D = ue.e.r), F < ue.e.c && (F = ue.e.c);
      }
    }
    return D > 8191 && (D = 8191), U.write_shift(2, D), U.write_shift(1, z), U.write_shift(1, F), U.write_shift(2, 0), U.write_shift(2, 0), U.write_shift(1, 1), U.write_shift(1, 2), U.write_shift(4, 0), U.write_shift(4, 0), U;
  }
  function o(C, U, D) {
    var F = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return U == 8 && D.qpro ? (F.s.c = C.read_shift(1), C.l++, F.s.r = C.read_shift(2), F.e.c = C.read_shift(1), C.l++, F.e.r = C.read_shift(2), F) : (F.s.c = C.read_shift(2), F.s.r = C.read_shift(2), U == 12 && D.qpro && (C.l += 2), F.e.c = C.read_shift(2), F.e.r = C.read_shift(2), U == 12 && D.qpro && (C.l += 2), F.s.c == 65535 && (F.s.c = F.e.c = F.s.r = F.e.r = 0), F);
  }
  function l(C) {
    var U = H(8);
    return U.write_shift(2, C.s.c), U.write_shift(2, C.s.r), U.write_shift(2, C.e.c), U.write_shift(2, C.e.r), U;
  }
  function f(C, U, D) {
    var F = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return D.qpro && D.vers != 20768 ? (F[0].c = C.read_shift(1), F[3] = C.read_shift(1), F[0].r = C.read_shift(2), C.l += 2) : (F[2] = C.read_shift(1), F[0].c = C.read_shift(2), F[0].r = C.read_shift(2)), F;
  }
  function c(C, U, D) {
    var F = C.l + U, z = f(C, U, D);
    if (z[1].t = "s", D.vers == 20768) {
      C.l++;
      var _e = C.read_shift(1);
      return z[1].v = C.read_shift(_e, "utf8"), z;
    }
    return D.qpro && C.l++, z[1].v = C.read_shift(F - C.l, "cstr"), z;
  }
  function h(C, U, D) {
    var F = H(7 + D.length);
    F.write_shift(1, 255), F.write_shift(2, U), F.write_shift(2, C), F.write_shift(1, 39);
    for (var z = 0; z < F.length; ++z) {
      var _e = D.charCodeAt(z);
      F.write_shift(1, _e >= 128 ? 95 : _e);
    }
    return F.write_shift(1, 0), F;
  }
  function u(C, U, D) {
    var F = f(C, U, D);
    return F[1].v = C.read_shift(2, "i"), F;
  }
  function p(C, U, D) {
    var F = H(7);
    return F.write_shift(1, 255), F.write_shift(2, U), F.write_shift(2, C), F.write_shift(2, D, "i"), F;
  }
  function g(C, U, D) {
    var F = f(C, U, D);
    return F[1].v = C.read_shift(8, "f"), F;
  }
  function d(C, U, D) {
    var F = H(13);
    return F.write_shift(1, 255), F.write_shift(2, U), F.write_shift(2, C), F.write_shift(8, D, "f"), F;
  }
  function v(C, U, D) {
    var F = C.l + U, z = f(C, U, D);
    if (z[1].v = C.read_shift(8, "f"), D.qpro)
      C.l = F;
    else {
      var _e = C.read_shift(2);
      P(C.slice(C.l, C.l + _e), z), C.l += _e;
    }
    return z;
  }
  function O(C, U, D) {
    var F = U & 32768;
    return U &= -32769, U = (F ? C : 0) + (U >= 8192 ? U - 16384 : U), (F ? "" : "$") + (D ? Ft(U) : vt(U));
  }
  var R = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, y = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function P(C, U) {
    Ht(C, 0);
    for (var D = [], F = 0, z = "", _e = "", Te = "", me = ""; C.l < C.length; ) {
      var ue = C[C.l++];
      switch (ue) {
        case 0:
          D.push(C.read_shift(8, "f"));
          break;
        case 1:
          _e = O(U[0].c, C.read_shift(2), !0), z = O(U[0].r, C.read_shift(2), !1), D.push(_e + z);
          break;
        case 2:
          {
            var Ue = O(U[0].c, C.read_shift(2), !0), S = O(U[0].r, C.read_shift(2), !1);
            _e = O(U[0].c, C.read_shift(2), !0), z = O(U[0].r, C.read_shift(2), !1), D.push(Ue + S + ":" + _e + z);
          }
          break;
        case 3:
          if (C.l < C.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          D.push("(" + D.pop() + ")");
          break;
        case 5:
          D.push(C.read_shift(2));
          break;
        case 6:
          {
            for (var A = ""; ue = C[C.l++]; )
              A += String.fromCharCode(ue);
            D.push('"' + A.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          D.push("-" + D.pop());
          break;
        case 23:
          D.push("+" + D.pop());
          break;
        case 22:
          D.push("NOT(" + D.pop() + ")");
          break;
        case 20:
        case 21:
          me = D.pop(), Te = D.pop(), D.push(["AND", "OR"][ue - 20] + "(" + Te + "," + me + ")");
          break;
        default:
          if (ue < 32 && y[ue])
            me = D.pop(), Te = D.pop(), D.push(Te + y[ue] + me);
          else if (R[ue]) {
            if (F = R[ue][1], F == 69 && (F = C[C.l++]), F > D.length) {
              console.error("WK1 bad formula parse 0x" + ue.toString(16) + ":|" + D.join("|") + "|");
              return;
            }
            var I = D.slice(-F);
            D.length -= F, D.push(R[ue][0] + "(" + I.join(",") + ")");
          } else
            return ue <= 7 ? console.error("WK1 invalid opcode " + ue.toString(16)) : ue <= 24 ? console.error("WK1 unsupported op " + ue.toString(16)) : ue <= 30 ? console.error("WK1 invalid opcode " + ue.toString(16)) : ue <= 115 ? console.error("WK1 unsupported function opcode " + ue.toString(16)) : console.error("WK1 unrecognized opcode " + ue.toString(16));
      }
    }
    D.length == 1 ? U[1].f = "" + D[0] : console.error("WK1 bad formula parse |" + D.join("|") + "|");
  }
  function ie(C) {
    var U = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return U[0].r = C.read_shift(2), U[3] = C[C.l++], U[0].c = C[C.l++], U;
  }
  function de(C, U) {
    var D = ie(C);
    return D[1].t = "s", D[1].v = C.read_shift(U - 4, "cstr"), D;
  }
  function N(C, U, D, F) {
    var z = H(6 + F.length);
    z.write_shift(2, C), z.write_shift(1, D), z.write_shift(1, U), z.write_shift(1, 39);
    for (var _e = 0; _e < F.length; ++_e) {
      var Te = F.charCodeAt(_e);
      z.write_shift(1, Te >= 128 ? 95 : Te);
    }
    return z.write_shift(1, 0), z;
  }
  function j(C, U) {
    var D = ie(C);
    D[1].v = C.read_shift(2);
    var F = D[1].v >> 1;
    if (D[1].v & 1)
      switch (F & 7) {
        case 0:
          F = (F >> 3) * 5e3;
          break;
        case 1:
          F = (F >> 3) * 500;
          break;
        case 2:
          F = (F >> 3) / 20;
          break;
        case 3:
          F = (F >> 3) / 200;
          break;
        case 4:
          F = (F >> 3) / 2e3;
          break;
        case 5:
          F = (F >> 3) / 2e4;
          break;
        case 6:
          F = (F >> 3) / 16;
          break;
        case 7:
          F = (F >> 3) / 64;
          break;
      }
    return D[1].v = F, D;
  }
  function W(C, U) {
    var D = ie(C), F = C.read_shift(4), z = C.read_shift(4), _e = C.read_shift(2);
    if (_e == 65535)
      return F === 0 && z === 3221225472 ? (D[1].t = "e", D[1].v = 15) : F === 0 && z === 3489660928 ? (D[1].t = "e", D[1].v = 42) : D[1].v = 0, D;
    var Te = _e & 32768;
    return _e = (_e & 32767) - 16446, D[1].v = (1 - Te * 2) * (z * Math.pow(2, _e + 32) + F * Math.pow(2, _e)), D;
  }
  function Y(C, U, D, F) {
    var z = H(14);
    if (z.write_shift(2, C), z.write_shift(1, D), z.write_shift(1, U), F == 0)
      return z.write_shift(4, 0), z.write_shift(4, 0), z.write_shift(2, 65535), z;
    var _e = 0, Te = 0, me = 0, ue = 0;
    return F < 0 && (_e = 1, F = -F), Te = Math.log2(F) | 0, F /= Math.pow(2, Te - 31), ue = F >>> 0, ue & 2147483648 || (F /= 2, ++Te, ue = F >>> 0), F -= ue, ue |= 2147483648, ue >>>= 0, F *= Math.pow(2, 32), me = F >>> 0, z.write_shift(4, me), z.write_shift(4, ue), Te += 16383 + (_e ? 32768 : 0), z.write_shift(2, Te), z;
  }
  function q(C, U) {
    var D = W(C);
    return C.l += U - 14, D;
  }
  function te(C, U) {
    var D = ie(C), F = C.read_shift(4);
    return D[1].v = F >> 6, D;
  }
  function pe(C, U) {
    var D = ie(C), F = C.read_shift(8, "f");
    return D[1].v = F, D;
  }
  function Le(C, U) {
    var D = pe(C);
    return C.l += U - 10, D;
  }
  function Ae(C, U) {
    return C[C.l + U - 1] == 0 ? C.read_shift(U, "cstr") : "";
  }
  function ke(C, U) {
    var D = C[C.l++];
    D > U - 1 && (D = U - 1);
    for (var F = ""; F.length < D; )
      F += String.fromCharCode(C[C.l++]);
    return F;
  }
  function ye(C, U, D) {
    if (!(!D.qpro || U < 21)) {
      var F = C.read_shift(1);
      C.l += 17, C.l += 1, C.l += 2;
      var z = C.read_shift(U - 21, "cstr");
      return [F, z];
    }
  }
  function Ne(C, U) {
    for (var D = {}, F = C.l + U; C.l < F; ) {
      var z = C.read_shift(2);
      if (z == 14e3) {
        for (D[z] = [0, ""], D[z][0] = C.read_shift(2); C[C.l]; )
          D[z][1] += String.fromCharCode(C[C.l]), C.l++;
        C.l++;
      }
    }
    return D;
  }
  function Ye(C, U) {
    var D = H(5 + C.length);
    D.write_shift(2, 14e3), D.write_shift(2, U);
    for (var F = 0; F < C.length; ++F) {
      var z = C.charCodeAt(F);
      D[D.l++] = z > 127 ? 95 : z;
    }
    return D[D.l++] = 0, D;
  }
  var pt = {
    /*::[*/
    0: { n: "BOF", f: sf },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: o },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: u },
    /*::[*/
    14: { n: "NUMBER", f: g },
    /*::[*/
    15: { n: "LABEL", f: c },
    /*::[*/
    16: { n: "FORMULA", f: v },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: c },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: Ae },
    /*::[*/
    222: { n: "SHEETNAMELP", f: ke },
    /*::[*/
    65535: { n: "" }
  }, nt = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: de },
    /*::[*/
    23: { n: "NUMBER17", f: W },
    /*::[*/
    24: { n: "NUMBER18", f: j },
    /*::[*/
    25: { n: "FORMULA19", f: q },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: Ne },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: te },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: pe },
    /*::[*/
    40: { n: "FORMULA28", f: Le },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: Ae },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: ye },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: i,
    book_to_wk3: n,
    to_workbook: t
  };
}(), Qd = /^\s|\s$|[\t\n\r]/;
function hf(e, t) {
  if (!t.bookSST)
    return "";
  var r = [ot];
  r[r.length] = le("sst", null, {
    xmlns: Rn[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var i = 0; i != e.length; ++i)
    if (e[i] != null) {
      var n = e[i], s = "<si>";
      n.r ? s += n.r : (s += "<t", n.t || (n.t = ""), n.t.match(Qd) && (s += ' xml:space="preserve"'), s += ">" + je(n.t) + "</t>"), s += "</si>", r[r.length] = s;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function $d(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function ep(e, t) {
  return t || (t = H(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var tp = z1;
function rp(e) {
  var t = Mt();
  J(t, 159, ep(e));
  for (var r = 0; r < e.length; ++r)
    J(t, 19, tp(e[r]));
  return J(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function np(e) {
  for (var t = [], r = e.split(""), i = 0; i < r.length; ++i)
    t[i] = r[i].charCodeAt(0);
  return t;
}
function uf(e) {
  var t = 0, r, i = np(e), n = i.length + 1, s, a, o, l, f;
  for (r = tn(n), r[0] = i.length, s = 1; s != n; ++s)
    r[s] = i[s - 1];
  for (s = n - 1; s >= 0; --s)
    a = r[s], o = t & 16384 ? 1 : 0, l = t << 1 & 32767, f = o | l, t = f ^ a;
  return t ^ 52811;
}
var ip = /* @__PURE__ */ function() {
  function e(n, s) {
    switch (s.type) {
      case "base64":
        return t(Ar(n), s);
      case "binary":
        return t(n, s);
      case "buffer":
        return t(We && Buffer.isBuffer(n) ? n.toString("binary") : pi(n), s);
      case "array":
        return t(ys(n), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(n, s) {
    var a = s || {}, o = a.dense ? [] : {}, l = n.match(/\\trowd.*?\\row\b/g);
    if (!l.length)
      throw new Error("RTF missing table");
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return l.forEach(function(c, h) {
      Array.isArray(o) && (o[h] = []);
      for (var u = /\\\w+\b/g, p = 0, g, d = -1; g = u.exec(c); ) {
        switch (g[0]) {
          case "\\cell":
            var v = c.slice(p, u.lastIndex - g[0].length);
            if (v[0] == " " && (v = v.slice(1)), ++d, v.length) {
              var O = { v, t: "s" };
              Array.isArray(o) ? o[h][d] = O : o[Xe({ r: h, c: d })] = O;
            }
            break;
        }
        p = u.lastIndex;
      }
      d > f.e.c && (f.e.c = d);
    }), o["!ref"] = at(f), o;
  }
  function r(n, s) {
    return sn(e(n, s), s);
  }
  function i(n) {
    for (var s = ["{\\rtf1\\ansi"], a = Ze(n["!ref"]), o, l = Array.isArray(n), f = a.s.r; f <= a.e.r; ++f) {
      s.push("\\trowd\\trautofit1");
      for (var c = a.s.c; c <= a.e.c; ++c)
        s.push("\\cellx" + (c + 1));
      for (s.push("\\pard\\intbl"), c = a.s.c; c <= a.e.c; ++c) {
        var h = Xe({ r: f, c });
        o = l ? (n[f] || [])[c] : n[h], !(!o || o.v == null && (!o.f || o.F)) && (s.push(" " + (o.w || (yr(o), o.w))), s.push("\\cell"));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: i
  };
}();
function uo(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var sp = 6, Sr = sp;
function ss(e) {
  return Math.floor((e + Math.round(128 / Sr) / 256) * Sr);
}
function as(e) {
  return Math.floor((e - 5) / Sr * 100 + 0.5) / 100;
}
function fa(e) {
  return Math.round((e * Sr + 5) / Sr * 256) / 256;
}
function ja(e) {
  e.width ? (e.wpx = ss(e.width), e.wch = as(e.wpx), e.MDW = Sr) : e.wpx ? (e.wch = as(e.wpx), e.width = fa(e.wch), e.MDW = Sr) : typeof e.wch == "number" && (e.width = fa(e.wch), e.wpx = ss(e.width), e.MDW = Sr), e.customWidth && delete e.customWidth;
}
var ap = 96, df = ap;
function os(e) {
  return e * 96 / df;
}
function pf(e) {
  return e * df / 96;
}
function op(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var i = r[0]; i <= r[1]; ++i)
      e[i] != null && (t[t.length] = le("numFmt", null, { numFmtId: i, formatCode: je(e[i]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = le("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function lp(e) {
  var t = [];
  return t[t.length] = le("cellXfs", null), e.forEach(function(r) {
    t[t.length] = le("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = le("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function xf(e, t) {
  var r = [ot, le("styleSheet", null, {
    xmlns: Rn[0],
    "xmlns:vt": ht.vt
  })], i;
  return e.SSF && (i = op(e.SSF)) != null && (r[r.length] = i), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (i = lp(t.cellXfs)) && (r[r.length] = i), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function fp(e, t) {
  var r = e.read_shift(2), i = Ot(e);
  return [r, i];
}
function cp(e, t, r) {
  r || (r = H(6 + 4 * t.length)), r.write_shift(2, e), dt(t, r);
  var i = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), i;
}
function hp(e, t, r) {
  var i = {};
  i.sz = e.read_shift(2) / 20;
  var n = Q1(e);
  n.fItalic && (i.italic = 1), n.fCondense && (i.condense = 1), n.fExtend && (i.extend = 1), n.fShadow && (i.shadow = 1), n.fOutline && (i.outline = 1), n.fStrikeout && (i.strike = 1);
  var s = e.read_shift(2);
  switch (s === 700 && (i.bold = 1), e.read_shift(2)) {
    case 1:
      i.vertAlign = "superscript";
      break;
    case 2:
      i.vertAlign = "subscript";
      break;
  }
  var a = e.read_shift(1);
  a != 0 && (i.underline = a);
  var o = e.read_shift(1);
  o > 0 && (i.family = o);
  var l = e.read_shift(1);
  switch (l > 0 && (i.charset = l), e.l++, i.color = Z1(e), e.read_shift(1)) {
    case 1:
      i.scheme = "major";
      break;
    case 2:
      i.scheme = "minor";
      break;
  }
  return i.name = Ot(e), i;
}
function up(e, t) {
  t || (t = H(25 + 4 * 32)), t.write_shift(2, e.sz * 20), $1(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), ns(e.color, t);
  var i = 0;
  return e.scheme == "major" && (i = 1), e.scheme == "minor" && (i = 2), t.write_shift(1, i), dt(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var dp = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], Vs, pp = xr;
function po(e, t) {
  t || (t = H(4 * 3 + 8 * 7 + 16 * 1)), Vs || (Vs = Na(dp));
  var r = Vs[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var i = 0;
  if (r != 40)
    for (ns({ auto: 1 }, t), ns({ auto: 1 }, t); i < 12; ++i)
      t.write_shift(4, 0);
  else {
    for (; i < 4; ++i)
      t.write_shift(4, 0);
    for (; i < 12; ++i)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function xp(e, t) {
  var r = e.l + t, i = e.read_shift(2), n = e.read_shift(2);
  return e.l = r, { ixfe: i, numFmtId: n };
}
function mf(e, t, r) {
  r || (r = H(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var i = 0;
  return r.write_shift(1, i), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function Gn(e, t) {
  return t || (t = H(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var mp = xr;
function gp(e, t) {
  return t || (t = H(51)), t.write_shift(1, 0), Gn(null, t), Gn(null, t), Gn(null, t), Gn(null, t), Gn(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function _p(e, t) {
  return t || (t = H(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), rs(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function vp(e, t, r) {
  var i = H(2052);
  return i.write_shift(4, e), rs(t, i), rs(r, i), i.length > i.l ? i.slice(0, i.l) : i;
}
function Ep(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(i) {
      for (var n = i[0]; n <= i[1]; ++n)
        t[n] != null && ++r;
    }), r != 0 && (J(e, 615, fr(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(i) {
      for (var n = i[0]; n <= i[1]; ++n)
        t[n] != null && J(e, 44, cp(n, t[n]));
    }), J(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function Tp(e) {
  var t = 1;
  J(e, 611, fr(t)), J(e, 43, up({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), J(
    e,
    612
    /* BrtEndFonts */
  );
}
function wp(e) {
  var t = 2;
  J(e, 603, fr(t)), J(e, 45, po({ patternType: "none" })), J(e, 45, po({ patternType: "gray125" })), J(
    e,
    604
    /* BrtEndFills */
  );
}
function Sp(e) {
  var t = 1;
  J(e, 613, fr(t)), J(e, 46, gp()), J(
    e,
    614
    /* BrtEndBorders */
  );
}
function Cp(e) {
  var t = 1;
  J(e, 626, fr(t)), J(e, 47, mf({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), J(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function Ap(e, t) {
  J(e, 617, fr(t.length)), t.forEach(function(r) {
    J(e, 47, mf(r, 0));
  }), J(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function yp(e) {
  var t = 1;
  J(e, 619, fr(t)), J(e, 48, _p({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), J(
    e,
    620
    /* BrtEndStyles */
  );
}
function Fp(e) {
  var t = 0;
  J(e, 505, fr(t)), J(
    e,
    506
    /* BrtEndDXFs */
  );
}
function Op(e) {
  var t = 0;
  J(e, 508, vp(t, "TableStyleMedium9", "PivotStyleMedium4")), J(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function Dp(e, t) {
  var r = Mt();
  return J(
    r,
    278
    /* BrtBeginStyleSheet */
  ), Ep(r, e.SSF), Tp(r), wp(r), Sp(r), Cp(r), Ap(r, t.cellXfs), yp(r), Fp(r), Op(r), J(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
function gf(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [ot];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function Rp(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Ot(e)
  };
}
function Pp(e) {
  var t = H(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), dt(e.name, t), t.slice(0, t.l);
}
function Np(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Ip(e) {
  var t = H(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function bp(e, t) {
  var r = H(8 + 2 * t.length);
  return r.write_shift(4, e), dt(t, r), r.slice(0, r.l);
}
function kp(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Mp(e, t) {
  var r = H(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function Lp() {
  var e = Mt();
  return J(e, 332), J(e, 334, fr(1)), J(e, 335, Pp({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), J(e, 336), J(e, 339, bp(1, "XLDAPR")), J(e, 52), J(e, 35, fr(514)), J(e, 4096, fr(0)), J(e, 4097, Kt(1)), J(e, 36), J(e, 53), J(e, 340), J(e, 337, Mp(1, !0)), J(e, 51, Ip([[1, 0]])), J(e, 338), J(e, 333), e.end();
}
function _f() {
  var e = [ot];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function Bp(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = Xe(r);
  var i = e.read_shift(1);
  return i & 2 && (t.l = "1"), i & 8 && (t.a = "1"), t;
}
var mn = 1024;
function vf(e, t) {
  for (var r = [21600, 21600], i = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), n = [
    le("xml", null, { "xmlns:v": Vt.v, "xmlns:o": Vt.o, "xmlns:x": Vt.x, "xmlns:mv": Vt.mv }).replace(/\/>/, ">"),
    le("o:shapelayout", le("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    le("v:shapetype", [
      le("v:stroke", null, { joinstyle: "miter" }),
      le("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: i })
  ]; mn < e * 1e3; )
    mn += 1e3;
  return t.forEach(function(s) {
    var a = ut(s[0]), o = (
      /*::(*/
      { color2: "#BEFF82", type: "gradient" }
    );
    o.type == "gradient" && (o.angle = "-180");
    var l = o.type == "gradient" ? le("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, f = le("v:fill", l, o), c = { on: "t", obscured: "t" };
    ++mn, n = n.concat([
      "<v:shape" + ci({
        id: "_x0000_s" + mn,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (s[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      f,
      le("v:shadow", null, c),
      le("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      _t("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")),
      _t("x:AutoFill", "False"),
      _t("x:Row", String(a.r)),
      _t("x:Column", String(a.c)),
      s[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), n.push("</xml>"), n.join("");
}
function Ef(e) {
  var t = [ot, le("comments", null, { xmlns: Rn[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(i) {
    i[1].forEach(function(n) {
      var s = je(n.a);
      r.indexOf(s) == -1 && (r.push(s), t.push("<author>" + s + "</author>")), n.T && n.ID && r.indexOf("tc=" + n.ID) == -1 && (r.push("tc=" + n.ID), t.push("<author>tc=" + n.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(i) {
    var n = 0, s = [];
    if (i[1][0] && i[1][0].T && i[1][0].ID ? n = r.indexOf("tc=" + i[1][0].ID) : i[1].forEach(function(l) {
      l.a && (n = r.indexOf(je(l.a))), s.push(l.t || "");
    }), t.push('<comment ref="' + i[0] + '" authorId="' + n + '"><text>'), s.length <= 1)
      t.push(_t("t", je(s[0] || "")));
    else {
      for (var a = `Comment:
    ` + s[0] + `
`, o = 1; o < s.length; ++o)
        a += `Reply:
    ` + s[o] + `
`;
      t.push(_t("t", je(a)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Up(e, t, r) {
  var i = [ot, le("ThreadedComments", null, { xmlns: ht.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var s = "";
    (n[1] || []).forEach(function(a, o) {
      if (!a.T) {
        delete a.ID;
        return;
      }
      a.a && t.indexOf(a.a) == -1 && t.push(a.a);
      var l = {
        ref: n[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      o == 0 ? s = l.id : l.parentId = s, a.ID = l.id, a.a && (l.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(a.a)).slice(-12) + "}"), i.push(le("threadedComment", _t("text", a.t || ""), l));
    });
  }), i.push("</ThreadedComments>"), i.join("");
}
function Wp(e) {
  var t = [ot, le("personList", null, {
    xmlns: ht.TCMNT,
    "xmlns:x": Rn[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, i) {
    t.push(le("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + i).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function Hp(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = fn(e);
  return t.rfx = r.s, t.ref = Xe(r.s), e.l += 16, t;
}
function Vp(e, t) {
  return t == null && (t = H(36)), t.write_shift(4, e[1].iauthor), Nn(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Gp = Ot;
function jp(e) {
  return dt(e.slice(0, 54));
}
function zp(e) {
  var t = Mt(), r = [];
  return J(
    t,
    628
    /* BrtBeginComments */
  ), J(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(i) {
    i[1].forEach(function(n) {
      r.indexOf(n.a) > -1 || (r.push(n.a.slice(0, 54)), J(t, 632, jp(n.a)));
    });
  }), J(
    t,
    631
    /* BrtEndCommentAuthors */
  ), J(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(i) {
    i[1].forEach(function(n) {
      n.iauthor = r.indexOf(n.a);
      var s = { s: ut(i[0]), e: ut(i[0]) };
      J(t, 635, Vp([s, n])), n.t && n.t.length > 0 && J(t, 637, K1(n)), J(
        t,
        636
        /* BrtEndComment */
      ), delete n.iauthor;
    });
  }), J(
    t,
    634
    /* BrtEndCommentList */
  ), J(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
function Xp(e, t) {
  t.FullPaths.forEach(function(r, i) {
    if (i != 0) {
      var n = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && Ke.utils.cfb_add(e, n, t.FileIndex[i].content);
    }
  });
}
var Tf = ["xlsb", "xlsm", "xlam", "biff8", "xla"], Kp = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(i, n, s, a) {
    var o = !1, l = !1;
    s.length == 0 ? l = !0 : s.charAt(0) == "[" && (l = !0, s = s.slice(1, -1)), a.length == 0 ? o = !0 : a.charAt(0) == "[" && (o = !0, a = a.slice(1, -1));
    var f = s.length > 0 ? parseInt(s, 10) | 0 : 0, c = a.length > 0 ? parseInt(a, 10) | 0 : 0;
    return o ? c += t.c : --c, l ? f += t.r : --f, n + (o ? "" : "$") + Ft(c) + (l ? "" : "$") + vt(f);
  }
  return function(n, s) {
    return t = s, n.replace(e, r);
  };
}(), za = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Xa = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(za, function(i, n, s, a, o, l) {
      var f = Ua(a) - (s ? 0 : r.c), c = Ba(l) - (o ? 0 : r.r), h = c == 0 ? "" : o ? c + 1 : "[" + c + "]", u = f == 0 ? "" : s ? f + 1 : "[" + f + "]";
      return n + "R" + h + "C" + u;
    });
  };
}();
function Yp(e, t) {
  return e.replace(za, function(r, i, n, s, a, o) {
    return i + (n == "$" ? n + s : Ft(Ua(s) + t.c)) + (a == "$" ? a + o : vt(Ba(o) + t.r));
  });
}
function Jp(e) {
  return e.length != 1;
}
function it(e) {
  e.l += 1;
}
function Ur(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function wf(e, t, r) {
  var i = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return Sf(e);
    r.biff == 12 && (i = 4);
  }
  var n = e.read_shift(i), s = e.read_shift(i), a = Ur(e, 2), o = Ur(e, 2);
  return { s: { r: n, c: a[0], cRel: a[1], rRel: a[2] }, e: { r: s, c: o[0], cRel: o[1], rRel: o[2] } };
}
function Sf(e) {
  var t = Ur(e, 2), r = Ur(e, 2), i = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: t[0], c: i, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: n, cRel: r[1], rRel: r[2] } };
}
function qp(e, t, r) {
  if (r.biff < 8)
    return Sf(e);
  var i = e.read_shift(r.biff == 12 ? 4 : 2), n = e.read_shift(r.biff == 12 ? 4 : 2), s = Ur(e, 2), a = Ur(e, 2);
  return { s: { r: i, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: n, c: a[0], cRel: a[1], rRel: a[2] } };
}
function Cf(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return Zp(e);
  var i = e.read_shift(r && r.biff == 12 ? 4 : 2), n = Ur(e, 2);
  return { r: i, c: n[0], cRel: n[1], rRel: n[2] };
}
function Zp(e) {
  var t = Ur(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function Qp(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function $p(e, t, r) {
  var i = r && r.biff ? r.biff : 8;
  if (i >= 2 && i <= 5)
    return ex(e);
  var n = e.read_shift(i >= 12 ? 4 : 2), s = e.read_shift(2), a = (s & 16384) >> 14, o = (s & 32768) >> 15;
  if (s &= 16383, o == 1)
    for (; n > 524287; )
      n -= 1048576;
  if (a == 1)
    for (; s > 8191; )
      s = s - 16384;
  return { r: n, c: s, cRel: a, rRel: o };
}
function ex(e) {
  var t = e.read_shift(2), r = e.read_shift(1), i = (t & 32768) >> 15, n = (t & 16384) >> 14;
  return t &= 16383, i == 1 && t >= 8192 && (t = t - 16384), n == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: n, rRel: i };
}
function tx(e, t, r) {
  var i = (e[e.l++] & 96) >> 5, n = wf(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [i, n];
}
function rx(e, t, r) {
  var i = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  var a = wf(e, s, r);
  return [i, n, a];
}
function nx(e, t, r) {
  var i = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [i];
}
function ix(e, t, r) {
  var i = (e[e.l++] & 96) >> 5, n = e.read_shift(2), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  return e.l += s, [i, n];
}
function sx(e, t, r) {
  var i = (e[e.l++] & 96) >> 5, n = qp(e, t - 1, r);
  return [i, n];
}
function ax(e, t, r) {
  var i = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [i];
}
function xo(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function ox(e, t, r) {
  e.l += 2;
  for (var i = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], s = 0; s <= i; ++s)
    n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return n;
}
function lx(e, t, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function fx(e, t, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function cx(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function hx(e, t, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [i];
}
function Af(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function ux(e) {
  return e.read_shift(2), Af(e);
}
function dx(e) {
  return e.read_shift(2), Af(e);
}
function px(e, t, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Cf(e, 0, r);
  return [i, n];
}
function xx(e, t, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = $p(e, 0, r);
  return [i, n];
}
function mx(e, t, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var s = Cf(e, 0, r);
  return [i, n, s];
}
function gx(e, t, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [gm[n], Of[n], i];
}
function _x(e, t, r) {
  var i = e[e.l++], n = e.read_shift(1), s = r && r.biff <= 3 ? [i == 88 ? -1 : 0, e.read_shift(1)] : vx(e);
  return [n, (s[0] === 0 ? Of : mm)[s[1]]];
}
function vx(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Ex(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Tx(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var i = e.read_shift(2), n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, n];
}
function wx(e) {
  return e.l++, gi[e.read_shift(1)];
}
function Sx(e) {
  return e.l++, e.read_shift(2);
}
function Cx(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Ax(e) {
  return e.l++, In(e);
}
function yx(e, t, r) {
  return e.l++, of(e, t - 1, r);
}
function Fx(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = md(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = gi[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = In(e);
      break;
    case 2:
      r[1] = Ed(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Ox(e, t, r) {
  for (var i = e.read_shift(r.biff == 12 ? 4 : 2), n = [], s = 0; s != i; ++s)
    n.push((r.biff == 12 ? fn : Sd)(e));
  return n;
}
function Dx(e, t, r) {
  var i = 0, n = 0;
  r.biff == 12 ? (i = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), i = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--i, --n == 0 && (n = 256));
  for (var s = 0, a = []; s != i && (a[s] = []); ++s)
    for (var o = 0; o != n; ++o)
      a[s][o] = Fx(e, r.biff);
  return a;
}
function Rx(e, t, r) {
  var i = e.read_shift(1) >>> 5 & 3, n = !r || r.biff >= 8 ? 4 : 2, s = e.read_shift(n);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [i, 0, s];
}
function Px(e, t, r) {
  if (r.biff == 5)
    return Nx(e);
  var i = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), s = e.read_shift(4);
  return [i, n, s];
}
function Nx(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var i = e.read_shift(2);
  return e.l += 12, [t, r, i];
}
function Ix(e, t, r) {
  var i = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, n];
}
function bx(e, t, r) {
  var i = e.read_shift(1) >>> 5 & 3, n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, n];
}
function kx(e, t, r) {
  var i = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [i];
}
function Mx(e, t, r) {
  var i = (e[e.l++] & 96) >> 5, n = e.read_shift(2), s = 4;
  if (r)
    switch (r.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  return e.l += s, [i, n];
}
var Lx = xr, Bx = xr, Ux = xr;
function _i(e, t, r) {
  return e.l += 2, [Qp(e)];
}
function Ka(e) {
  return e.l += 6, [];
}
var Wx = _i, Hx = Ka, Vx = Ka, Gx = _i;
function yf(e) {
  return e.l += 2, [sf(e), e.read_shift(2) & 1];
}
var jx = _i, zx = yf, Xx = Ka, Kx = _i, Yx = _i, Jx = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function qx(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(4), n = e.read_shift(2), s = e.read_shift(2), a = Jx[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: a, idx: i, c: n, C: s };
}
function Zx(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Qx(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function $x(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function em(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function tm(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function rm(e) {
  return e.l += 4, [0, 0];
}
var mo = {
  /*::[*/
  1: { n: "PtgExp", f: Tx },
  /*::[*/
  2: { n: "PtgTbl", f: Ux },
  /*::[*/
  3: { n: "PtgAdd", f: it },
  /*::[*/
  4: { n: "PtgSub", f: it },
  /*::[*/
  5: { n: "PtgMul", f: it },
  /*::[*/
  6: { n: "PtgDiv", f: it },
  /*::[*/
  7: { n: "PtgPower", f: it },
  /*::[*/
  8: { n: "PtgConcat", f: it },
  /*::[*/
  9: { n: "PtgLt", f: it },
  /*::[*/
  10: { n: "PtgLe", f: it },
  /*::[*/
  11: { n: "PtgEq", f: it },
  /*::[*/
  12: { n: "PtgGe", f: it },
  /*::[*/
  13: { n: "PtgGt", f: it },
  /*::[*/
  14: { n: "PtgNe", f: it },
  /*::[*/
  15: { n: "PtgIsect", f: it },
  /*::[*/
  16: { n: "PtgUnion", f: it },
  /*::[*/
  17: { n: "PtgRange", f: it },
  /*::[*/
  18: { n: "PtgUplus", f: it },
  /*::[*/
  19: { n: "PtgUminus", f: it },
  /*::[*/
  20: { n: "PtgPercent", f: it },
  /*::[*/
  21: { n: "PtgParen", f: it },
  /*::[*/
  22: { n: "PtgMissArg", f: it },
  /*::[*/
  23: { n: "PtgStr", f: yx },
  /*::[*/
  26: { n: "PtgSheet", f: Qx },
  /*::[*/
  27: { n: "PtgEndSheet", f: $x },
  /*::[*/
  28: { n: "PtgErr", f: wx },
  /*::[*/
  29: { n: "PtgBool", f: Cx },
  /*::[*/
  30: { n: "PtgInt", f: Sx },
  /*::[*/
  31: { n: "PtgNum", f: Ax },
  /*::[*/
  32: { n: "PtgArray", f: ax },
  /*::[*/
  33: { n: "PtgFunc", f: gx },
  /*::[*/
  34: { n: "PtgFuncVar", f: _x },
  /*::[*/
  35: { n: "PtgName", f: Rx },
  /*::[*/
  36: { n: "PtgRef", f: px },
  /*::[*/
  37: { n: "PtgArea", f: tx },
  /*::[*/
  38: { n: "PtgMemArea", f: Ix },
  /*::[*/
  39: { n: "PtgMemErr", f: Lx },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Bx },
  /*::[*/
  41: { n: "PtgMemFunc", f: bx },
  /*::[*/
  42: { n: "PtgRefErr", f: kx },
  /*::[*/
  43: { n: "PtgAreaErr", f: nx },
  /*::[*/
  44: { n: "PtgRefN", f: xx },
  /*::[*/
  45: { n: "PtgAreaN", f: sx },
  /*::[*/
  46: { n: "PtgMemAreaN", f: em },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: tm },
  /*::[*/
  57: { n: "PtgNameX", f: Px },
  /*::[*/
  58: { n: "PtgRef3d", f: mx },
  /*::[*/
  59: { n: "PtgArea3d", f: rx },
  /*::[*/
  60: { n: "PtgRefErr3d", f: Mx },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: ix },
  /*::[*/
  255: {}
}, nm = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, im = {
  /*::[*/
  1: { n: "PtgElfLel", f: yf },
  /*::[*/
  2: { n: "PtgElfRw", f: Kx },
  /*::[*/
  3: { n: "PtgElfCol", f: Wx },
  /*::[*/
  6: { n: "PtgElfRwV", f: Yx },
  /*::[*/
  7: { n: "PtgElfColV", f: Gx },
  /*::[*/
  10: { n: "PtgElfRadical", f: jx },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: Xx },
  /*::[*/
  13: { n: "PtgElfColS", f: Hx },
  /*::[*/
  15: { n: "PtgElfColSV", f: Vx },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: zx },
  /*::[*/
  25: { n: "PtgList", f: qx },
  /*::[*/
  29: { n: "PtgSxName", f: Zx },
  /*::[*/
  255: {}
}, sm = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: rm },
  /*::[*/
  1: { n: "PtgAttrSemi", f: hx },
  /*::[*/
  2: { n: "PtgAttrIf", f: fx },
  /*::[*/
  4: { n: "PtgAttrChoose", f: ox },
  /*::[*/
  8: { n: "PtgAttrGoto", f: lx },
  /*::[*/
  16: { n: "PtgAttrSum", f: Ex },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: xo },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: xo },
  /*::[*/
  64: { n: "PtgAttrSpace", f: ux },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: dx },
  /*::[*/
  128: { n: "PtgAttrIfError", f: cx },
  /*::[*/
  255: {}
};
function am(e, t, r, i) {
  if (i.biff < 8)
    return xr(e, t);
  for (var n = e.l + t, s = [], a = 0; a !== r.length; ++a)
    switch (r[a][0]) {
      case "PtgArray":
        r[a][1] = Dx(e, 0, i), s.push(r[a][1]);
        break;
      case "PtgMemArea":
        r[a][2] = Ox(e, r[a][1], i), s.push(r[a][2]);
        break;
      case "PtgExp":
        i && i.biff == 12 && (r[a][1][1] = e.read_shift(4), s.push(r[a][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[a][0];
    }
  return t = n - e.l, t !== 0 && s.push(xr(e, t)), s;
}
function om(e, t, r) {
  for (var i = e.l + t, n, s, a = []; i != e.l; )
    t = i - e.l, s = e[e.l], n = mo[s] || mo[nm[s]], (s === 24 || s === 25) && (n = (s === 24 ? im : sm)[e[e.l + 1]]), !n || !n.f ? xr(e, t) : a.push([n.n, n.f(e, t, r)]);
  return a;
}
function lm(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var i = e[r], n = [], s = 0; s < i.length; ++s) {
      var a = i[s];
      if (a)
        switch (a[0]) {
          case 2:
            n.push('"' + a[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(a[1]);
        }
      else
        n.push("");
    }
    t.push(n.join(","));
  }
  return t.join(";");
}
var fm = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function cm(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Ff(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var i = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!i)
    return "SH33TJSERR1";
  var n = "";
  if (r.biff > 8)
    switch (e[i[0]][0]) {
      case 357:
        return n = i[1] == -1 ? "#REF" : e.SheetNames[i[1]], i[1] == i[2] ? n : n + ":" + e.SheetNames[i[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[i[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[i[0]][0];
    }
  switch (e[i[0]][0][0]) {
    case 1025:
      return n = i[1] == -1 ? "#REF" : e.SheetNames[i[1]] || "SH33TJSERR3", i[1] == i[2] ? n : n + ":" + e.SheetNames[i[2]];
    case 14849:
      return e[i[0]].slice(1).map(function(s) {
        return s.Name;
      }).join(";;");
    default:
      return e[i[0]][0][3] ? (n = i[1] == -1 ? "#REF" : e[i[0]][0][3][i[1]] || "SH33TJSERR4", i[1] == i[2] ? n : n + ":" + e[i[0]][0][3][i[2]]) : "SH33TJSERR2";
  }
}
function go(e, t, r) {
  var i = Ff(e, t, r);
  return i == "#REF" ? i : cm(i, r);
}
function Fn(e, t, r, i, n) {
  var s = n && n.biff || 8, a = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), o = [], l, f, c, h = 0, u = 0, p, g = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var d = -1, v = "", O = 0, R = e[0].length; O < R; ++O) {
    var y = e[0][O];
    switch (y[0]) {
      case "PtgUminus":
        o.push("-" + o.pop());
        break;
      case "PtgUplus":
        o.push("+" + o.pop());
        break;
      case "PtgPercent":
        o.push(o.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (l = o.pop(), f = o.pop(), d >= 0) {
          switch (e[0][d][1][0]) {
            case 0:
              v = tt(" ", e[0][d][1][1]);
              break;
            case 1:
              v = tt("\r", e[0][d][1][1]);
              break;
            default:
              if (v = "", n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][d][1][0]);
          }
          f = f + v, d = -1;
        }
        o.push(f + fm[y[0]] + l);
        break;
      case "PtgIsect":
        l = o.pop(), f = o.pop(), o.push(f + " " + l);
        break;
      case "PtgUnion":
        l = o.pop(), f = o.pop(), o.push(f + "," + l);
        break;
      case "PtgRange":
        l = o.pop(), f = o.pop(), o.push(f + ":" + l);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = Qn(y[1][1], a, n), o.push($n(c, s));
        break;
      case "PtgRefN":
        c = r ? Qn(y[1][1], r, n) : y[1][1], o.push($n(c, s));
        break;
      case "PtgRef3d":
        h = /*::Number(*/
        y[1][1], c = Qn(y[1][2], a, n), g = go(i, h, n), o.push(g + "!" + $n(c, s));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var P = y[1][0], ie = y[1][1];
        P || (P = 0), P &= 127;
        var de = P == 0 ? [] : o.slice(-P);
        o.length -= P, ie === "User" && (ie = de.shift()), o.push(ie + "(" + de.join(",") + ")");
        break;
      case "PtgBool":
        o.push(y[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        o.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        o.push(String(y[1]));
        break;
      case "PtgStr":
        o.push('"' + y[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        o.push(
          /*::String(*/
          y[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        p = eo(y[1][1], r ? { s: r } : a, n), o.push(Ws(p, n));
        break;
      case "PtgArea":
        p = eo(y[1][1], a, n), o.push(Ws(p, n));
        break;
      case "PtgArea3d":
        h = /*::Number(*/
        y[1][1], p = y[1][2], g = go(i, h, n), o.push(g + "!" + Ws(p, n));
        break;
      case "PtgAttrSum":
        o.push("SUM(" + o.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        u = y[1][2];
        var N = (i.names || [])[u - 1] || (i[0] || [])[u], j = N ? N.Name : "SH33TJSNAME" + String(u);
        j && j.slice(0, 6) == "_xlfn." && !n.xlfn && (j = j.slice(6)), o.push(j);
        break;
      case "PtgNameX":
        var W = y[1][1];
        u = y[1][2];
        var Y;
        if (n.biff <= 5)
          W < 0 && (W = -W), i[W] && (Y = i[W][u]);
        else {
          var q = "";
          if (((i[W] || [])[0] || [])[0] == 14849 || (((i[W] || [])[0] || [])[0] == 1025 ? i[W][u] && i[W][u].itab > 0 && (q = i.SheetNames[i[W][u].itab - 1] + "!") : q = i.SheetNames[u - 1] + "!"), i[W] && i[W][u])
            q += i[W][u].Name;
          else if (i[0] && i[0][u])
            q += i[0][u].Name;
          else {
            var te = (Ff(i, W, n) || "").split(";;");
            te[u - 1] ? q = te[u - 1] : q += "SH33TJSERRX";
          }
          o.push(q);
          break;
        }
        Y || (Y = { Name: "SH33TJSERRY" }), o.push(Y.Name);
        break;
      case "PtgParen":
        var pe = "(", Le = ")";
        if (d >= 0) {
          switch (v = "", e[0][d][1][0]) {
            case 2:
              pe = tt(" ", e[0][d][1][1]) + pe;
              break;
            case 3:
              pe = tt("\r", e[0][d][1][1]) + pe;
              break;
            case 4:
              Le = tt(" ", e[0][d][1][1]) + Le;
              break;
            case 5:
              Le = tt("\r", e[0][d][1][1]) + Le;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][d][1][0]);
          }
          d = -1;
        }
        o.push(pe + o.pop() + Le);
        break;
      case "PtgRefErr":
        o.push("#REF!");
        break;
      case "PtgRefErr3d":
        o.push("#REF!");
        break;
      case "PtgExp":
        c = { c: y[1][1], r: y[1][0] };
        var Ae = { c: r.c, r: r.r };
        if (i.sharedf[Xe(c)]) {
          var ke = i.sharedf[Xe(c)];
          o.push(Fn(ke, a, Ae, i, n));
        } else {
          var ye = !1;
          for (l = 0; l != i.arrayf.length; ++l)
            if (f = i.arrayf[l], !(c.c < f[0].s.c || c.c > f[0].e.c) && !(c.r < f[0].s.r || c.r > f[0].e.r)) {
              o.push(Fn(f[1], a, Ae, i, n)), ye = !0;
              break;
            }
          ye || o.push(
            /*::String(*/
            y[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        o.push("{" + lm(
          /*::(*/
          y[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        d = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        o.push("");
        break;
      case "PtgAreaErr":
        o.push("#REF!");
        break;
      case "PtgAreaErr3d":
        o.push("#REF!");
        break;
      case "PtgList":
        o.push("Table" + y[1].idx + "[#" + y[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(y));
      default:
        throw new Error("Unrecognized Formula Token: " + String(y));
    }
    var Ne = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && d >= 0 && Ne.indexOf(e[0][O][0]) == -1) {
      y = e[0][d];
      var Ye = !0;
      switch (y[1][0]) {
        case 4:
          Ye = !1;
        case 0:
          v = tt(" ", y[1][1]);
          break;
        case 5:
          Ye = !1;
        case 1:
          v = tt("\r", y[1][1]);
          break;
        default:
          if (v = "", n.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + y[1][0]);
      }
      o.push((Ye ? v : "") + o.pop() + (Ye ? "" : v)), d = -1;
    }
  }
  if (o.length > 1 && n.WTF)
    throw new Error("bad formula stack");
  return o[0];
}
function hm(e) {
  if (e == null) {
    var t = H(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return rn(e);
  return rn(0);
}
function um(e, t, r, i, n) {
  var s = nn(t, r, n), a = hm(e.v), o = H(6), l = 33;
  o.write_shift(2, l), o.write_shift(4, 0);
  for (var f = H(e.bf.length), c = 0; c < e.bf.length; ++c)
    f[c] = e.bf[c];
  var h = gt([s, a, o, f]);
  return h;
}
function Fs(e, t, r) {
  var i = e.read_shift(4), n = om(e, i, r), s = e.read_shift(4), a = s > 0 ? am(e, s, n, r) : null;
  return [n, a];
}
var dm = Fs, Os = Fs, pm = Fs, xm = Fs, mm = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Of = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, gm = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function _m(e) {
  var t = "of:=" + e.replace(za, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function vm(e) {
  return e.replace(/\./, "!");
}
var ei = typeof Map < "u";
function Ya(e, t, r) {
  var i = 0, n = e.length;
  if (r) {
    if (ei ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var s = ei ? r.get(t) : r[t]; i < s.length; ++i)
        if (e[s[i]].t === t)
          return e.Count++, s[i];
    }
  } else
    for (; i < n; ++i)
      if (e[i].t === t)
        return e.Count++, i;
  return e[n] = { t }, e.Count++, e.Unique++, r && (ei ? (r.has(t) || r.set(t, []), r.get(t).push(n)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(n))), n;
}
function Ds(e, t) {
  var r = { min: e + 1, max: e + 1 }, i = -1;
  return t.MDW && (Sr = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? i = as(t.wpx) : t.wch != null && (i = t.wch), i > -1 ? (r.width = fa(i), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Df(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Hr(e, t, r) {
  var i = r.revssf[t.z != null ? t.z : "General"], n = 60, s = e.length;
  if (i == null && r.ssf) {
    for (; n < 392; ++n)
      if (r.ssf[n] == null) {
        Sl(t.z, n), r.ssf[n] = t.z, r.revssf[t.z] = i = n;
        break;
      }
  }
  for (n = 0; n != s; ++n)
    if (e[n].numFmtId === i)
      return n;
  return e[s] = {
    numFmtId: i,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, s;
}
function Em(e, t, r) {
  if (e && e["!ref"]) {
    var i = Ze(e["!ref"]);
    if (i.e.c < i.s.c || i.e.r < i.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function Tm(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + at(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function wm(e, t, r, i, n) {
  var s = !1, a = {}, o = null;
  if (i.bookType !== "xlsx" && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {
    }
    s = !0, a.codeName = vr(je(l));
  }
  if (e && e["!outline"]) {
    var f = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (f.summaryBelow = 0), e["!outline"].left && (f.summaryRight = 0), o = (o || "") + le("outlinePr", null, f);
  }
  !s && !o || (n[n.length] = le("sheetPr", o, a));
}
var Sm = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Cm = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function Am(e) {
  var t = { sheet: 1 };
  return Sm.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), Cm.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = uf(e.password).toString(16).toUpperCase()), le("sheetProtection", null, t);
}
function ym(e) {
  return Df(e), le("pageMargins", null, e);
}
function Fm(e, t) {
  for (var r = ["<cols>"], i, n = 0; n != t.length; ++n)
    (i = t[n]) && (r[r.length] = le("col", null, Ds(n, i)));
  return r[r.length] = "</cols>", r.join("");
}
function Om(e, t, r, i) {
  var n = typeof e.ref == "string" ? e.ref : at(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var s = r.Workbook.Names, a = jt(n);
  a.s.r == a.e.r && (a.e.r = jt(t["!ref"]).e.r, n = at(a));
  for (var o = 0; o < s.length; ++o) {
    var l = s[o];
    if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == i) {
      l.Ref = "'" + r.SheetNames[i] + "'!" + n;
      break;
    }
  }
  return o == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: i, Ref: "'" + r.SheetNames[i] + "'!" + n }), le("autoFilter", null, { ref: n });
}
function Dm(e, t, r, i) {
  var n = { workbookViewId: "0" };
  return (((i || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = i.Workbook.Views[0].RTL ? "1" : "0"), le("sheetViews", le("sheetView", null, n), {});
}
function Rm(e, t, r, i) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var n = "", s = e.t, a = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        n = e.v ? "1" : "0";
        break;
      case "n":
        n = "" + e.v;
        break;
      case "e":
        n = gi[e.v];
        break;
      case "d":
        i && i.cellDates ? n = It(e.v, -1).toISOString() : (e = Ut(e), e.t = "n", n = "" + (e.v = Bt(It(e.v)))), typeof e.z > "u" && (e.z = rt[14]);
        break;
      default:
        n = e.v;
        break;
    }
  var o = _t("v", je(n)), l = { r: t }, f = Hr(i.cellXfs, e, i);
  switch (f !== 0 && (l.s = f), e.t) {
    case "n":
      break;
    case "d":
      l.t = "d";
      break;
    case "b":
      l.t = "b";
      break;
    case "e":
      l.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (i && i.bookSST) {
        o = _t("v", "" + Ya(i.Strings, e.v, i.revStrings)), l.t = "s";
        break;
      }
      l.t = "str";
      break;
  }
  if (e.t != s && (e.t = s, e.v = a), typeof e.f == "string" && e.f) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    o = le("f", je(e.f), c) + (e.v != null ? o : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (l.cm = 1), le("c", o, l);
}
function Pm(e, t, r, i) {
  var n = [], s = [], a = Ze(e["!ref"]), o = "", l, f = "", c = [], h = 0, u = 0, p = e["!rows"], g = Array.isArray(e), d = { r: f }, v, O = -1;
  for (u = a.s.c; u <= a.e.c; ++u)
    c[u] = Ft(u);
  for (h = a.s.r; h <= a.e.r; ++h) {
    for (s = [], f = vt(h), u = a.s.c; u <= a.e.c; ++u) {
      l = c[u] + f;
      var R = g ? (e[h] || [])[u] : e[l];
      R !== void 0 && (o = Rm(R, l, e, t)) != null && s.push(o);
    }
    (s.length > 0 || p && p[h]) && (d = { r: f }, p && p[h] && (v = p[h], v.hidden && (d.hidden = 1), O = -1, v.hpx ? O = os(v.hpx) : v.hpt && (O = v.hpt), O > -1 && (d.ht = O, d.customHeight = 1), v.level && (d.outlineLevel = v.level)), n[n.length] = le("row", s.join(""), d));
  }
  if (p)
    for (; h < p.length; ++h)
      p && p[h] && (d = { r: h + 1 }, v = p[h], v.hidden && (d.hidden = 1), O = -1, v.hpx ? O = os(v.hpx) : v.hpt && (O = v.hpt), O > -1 && (d.ht = O, d.customHeight = 1), v.level && (d.outlineLevel = v.level), n[n.length] = le("row", "", d));
  return n.join("");
}
function Rf(e, t, r, i) {
  var n = [ot, le("worksheet", null, {
    xmlns: Rn[0],
    "xmlns:r": ht.r
  })], s = r.SheetNames[e], a = 0, o = "", l = r.Sheets[s];
  l == null && (l = {});
  var f = l["!ref"] || "A1", c = Ze(f);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + f + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575), f = at(c);
  }
  i || (i = {}), l["!comments"] = [];
  var h = [];
  wm(l, r, e, t, n), n[n.length] = le("dimension", null, { ref: f }), n[n.length] = Dm(l, t, e, r), t.sheetFormat && (n[n.length] = le("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), l["!cols"] != null && l["!cols"].length > 0 && (n[n.length] = Fm(l, l["!cols"])), n[a = n.length] = "<sheetData/>", l["!links"] = [], l["!ref"] != null && (o = Pm(l, t), o.length > 0 && (n[n.length] = o)), n.length > a + 1 && (n[n.length] = "</sheetData>", n[a] = n[a].replace("/>", ">")), l["!protect"] && (n[n.length] = Am(l["!protect"])), l["!autofilter"] != null && (n[n.length] = Om(l["!autofilter"], l, r, e)), l["!merges"] != null && l["!merges"].length > 0 && (n[n.length] = Tm(l["!merges"]));
  var u = -1, p, g = -1;
  return (
    /*::(*/
    l["!links"].length > 0 && (n[n.length] = "<hyperlinks>", l["!links"].forEach(function(d) {
      d[1].Target && (p = { ref: d[0] }, d[1].Target.charAt(0) != "#" && (g = Ge(i, -1, je(d[1].Target).replace(/#.*$/, ""), Be.HLINK), p["r:id"] = "rId" + g), (u = d[1].Target.indexOf("#")) > -1 && (p.location = je(d[1].Target.slice(u + 1))), d[1].Tooltip && (p.tooltip = je(d[1].Tooltip)), n[n.length] = le("hyperlink", null, p));
    }), n[n.length] = "</hyperlinks>"), delete l["!links"], l["!margins"] != null && (n[n.length] = ym(l["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (n[n.length] = _t("ignoredErrors", le("ignoredError", null, { numberStoredAsText: 1, sqref: f }))), h.length > 0 && (g = Ge(i, -1, "../drawings/drawing" + (e + 1) + ".xml", Be.DRAW), n[n.length] = le("drawing", null, { "r:id": "rId" + g }), l["!drawing"] = h), l["!comments"].length > 0 && (g = Ge(i, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Be.VML), n[n.length] = le("legacyDrawing", null, { "r:id": "rId" + g }), l["!legacy"] = g), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("")
  );
}
function Nm(e, t) {
  var r = {}, i = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return e.l = i, s & 7 && (r.level = s & 7), s & 16 && (r.hidden = !0), s & 32 && (r.hpt = n / 20), r;
}
function Im(e, t, r) {
  var i = H(145), n = (r["!rows"] || [])[e] || {};
  i.write_shift(4, e), i.write_shift(4, 0);
  var s = 320;
  n.hpx ? s = os(n.hpx) * 20 : n.hpt && (s = n.hpt * 20), i.write_shift(2, s), i.write_shift(1, 0);
  var a = 0;
  n.level && (a |= n.level), n.hidden && (a |= 16), (n.hpx || n.hpt) && (a |= 32), i.write_shift(1, a), i.write_shift(1, 0);
  var o = 0, l = i.l;
  i.l += 4;
  for (var f = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > c + 1 << 10 || t.e.c < c << 10)) {
      for (var h = -1, u = -1, p = c << 10; p < c + 1 << 10; ++p) {
        f.c = p;
        var g = Array.isArray(r) ? (r[f.r] || [])[f.c] : r[Xe(f)];
        g && (h < 0 && (h = p), u = p);
      }
      h < 0 || (++o, i.write_shift(4, h), i.write_shift(4, u));
    }
  var d = i.l;
  return i.l = l, i.write_shift(4, o), i.l = d, i.length > i.l ? i.slice(0, i.l) : i;
}
function bm(e, t, r, i) {
  var n = Im(i, r, t);
  (n.length > 17 || (t["!rows"] || [])[i]) && J(e, 0, n);
}
var km = fn, Mm = Nn;
function Lm() {
}
function Bm(e, t) {
  var r = {}, i = e[e.l];
  return ++e.l, r.above = !(i & 64), r.left = !(i & 128), e.l += 18, r.name = Y1(e), r;
}
function Um(e, t, r) {
  r == null && (r = H(84 + 4 * e.length));
  var i = 192;
  t && (t.above && (i &= -65), t.left && (i &= -129)), r.write_shift(1, i);
  for (var n = 1; n < 3; ++n)
    r.write_shift(1, 0);
  return ns({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), jl(e, r), r.slice(0, r.l);
}
function Wm(e) {
  var t = Jt(e);
  return [t];
}
function Hm(e, t, r) {
  return r == null && (r = H(8)), an(t, r);
}
function Vm(e) {
  var t = on(e);
  return [t];
}
function Gm(e, t, r) {
  return r == null && (r = H(4)), ln(t, r);
}
function jm(e) {
  var t = Jt(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function zm(e, t, r) {
  return r == null && (r = H(9)), an(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Xm(e) {
  var t = on(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function Km(e, t, r) {
  return r == null && (r = H(5)), ln(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Ym(e) {
  var t = Jt(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Jm(e, t, r) {
  return r == null && (r = H(9)), an(t, r), r.write_shift(1, e.v), r;
}
function qm(e) {
  var t = on(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Zm(e, t, r) {
  return r == null && (r = H(8)), ln(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function Qm(e) {
  var t = Jt(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function $m(e, t, r) {
  return r == null && (r = H(12)), an(t, r), r.write_shift(4, t.v), r;
}
function eg(e) {
  var t = on(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function tg(e, t, r) {
  return r == null && (r = H(8)), ln(t, r), r.write_shift(4, t.v), r;
}
function rg(e) {
  var t = Jt(e), r = In(e);
  return [t, r, "n"];
}
function ng(e, t, r) {
  return r == null && (r = H(16)), an(t, r), rn(e.v, r), r;
}
function ig(e) {
  var t = on(e), r = In(e);
  return [t, r, "n"];
}
function sg(e, t, r) {
  return r == null && (r = H(12)), ln(t, r), rn(e.v, r), r;
}
function ag(e) {
  var t = Jt(e), r = zl(e);
  return [t, r, "n"];
}
function og(e, t, r) {
  return r == null && (r = H(12)), an(t, r), Xl(e.v, r), r;
}
function lg(e) {
  var t = on(e), r = zl(e);
  return [t, r, "n"];
}
function fg(e, t, r) {
  return r == null && (r = H(8)), ln(t, r), Xl(e.v, r), r;
}
function cg(e) {
  var t = Jt(e), r = Wa(e);
  return [t, r, "is"];
}
function hg(e) {
  var t = Jt(e), r = Ot(e);
  return [t, r, "str"];
}
function ug(e, t, r) {
  return r == null && (r = H(12 + 4 * e.v.length)), an(t, r), dt(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function dg(e) {
  var t = on(e), r = Ot(e);
  return [t, r, "str"];
}
function pg(e, t, r) {
  return r == null && (r = H(8 + 4 * e.v.length)), ln(t, r), dt(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function xg(e, t, r) {
  var i = e.l + t, n = Jt(e);
  n.r = r["!row"];
  var s = e.read_shift(1), a = [n, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Os(e, i - e.l, r);
    a[3] = Fn(o, null, n, r.supbooks, r);
  } else
    e.l = i;
  return a;
}
function mg(e, t, r) {
  var i = e.l + t, n = Jt(e);
  n.r = r["!row"];
  var s = e.read_shift(1), a = [n, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Os(e, i - e.l, r);
    a[3] = Fn(o, null, n, r.supbooks, r);
  } else
    e.l = i;
  return a;
}
function gg(e, t, r) {
  var i = e.l + t, n = Jt(e);
  n.r = r["!row"];
  var s = In(e), a = [n, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Os(e, i - e.l, r);
    a[3] = Fn(o, null, n, r.supbooks, r);
  } else
    e.l = i;
  return a;
}
function _g(e, t, r) {
  var i = e.l + t, n = Jt(e);
  n.r = r["!row"];
  var s = Ot(e), a = [n, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Os(e, i - e.l, r);
    a[3] = Fn(o, null, n, r.supbooks, r);
  } else
    e.l = i;
  return a;
}
var vg = fn, Eg = Nn;
function Tg(e, t) {
  return t == null && (t = H(4)), t.write_shift(4, e), t;
}
function wg(e, t) {
  var r = e.l + t, i = fn(e), n = Ha(e), s = Ot(e), a = Ot(e), o = Ot(e);
  e.l = r;
  var l = { rfx: i, relId: n, loc: s, display: o };
  return a && (l.Tooltip = a), l;
}
function Sg(e, t) {
  var r = H(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  Nn({ s: ut(e[0]), e: ut(e[0]) }, r), Va("rId" + t, r);
  var i = e[1].Target.indexOf("#"), n = i == -1 ? "" : e[1].Target.slice(i + 1);
  return dt(n || "", r), dt(e[1].Tooltip || "", r), dt("", r), r.slice(0, r.l);
}
function Cg() {
}
function Ag(e, t, r) {
  var i = e.l + t, n = Kl(e), s = e.read_shift(1), a = [n];
  if (a[2] = s, r.cellFormula) {
    var o = dm(e, i - e.l, r);
    a[1] = o;
  } else
    e.l = i;
  return a;
}
function yg(e, t, r) {
  var i = e.l + t, n = fn(e), s = [n];
  if (r.cellFormula) {
    var a = xm(e, i - e.l, r);
    s[1] = a, e.l = i;
  } else
    e.l = i;
  return s;
}
function Fg(e, t, r) {
  r == null && (r = H(18));
  var i = Ds(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (i.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var n = 0;
  return t.hidden && (n |= 1), typeof i.width == "number" && (n |= 2), t.level && (n |= t.level << 8), r.write_shift(2, n), r;
}
var Pf = ["left", "right", "top", "bottom", "header", "footer"];
function Og(e) {
  var t = {};
  return Pf.forEach(function(r) {
    t[r] = In(e);
  }), t;
}
function Dg(e, t) {
  return t == null && (t = H(6 * 8)), Df(e), Pf.forEach(function(r) {
    rn(e[r], t);
  }), t;
}
function Rg(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function Pg(e, t, r) {
  r == null && (r = H(30));
  var i = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (i |= 32), r.write_shift(2, i), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function Ng(e) {
  var t = H(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), Nn(e, t), t;
}
function Ig(e, t) {
  return t == null && (t = H(16 * 4 + 2)), t.write_shift(2, e.password ? uf(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function bg() {
}
function kg() {
}
function Mg(e, t, r, i, n, s, a) {
  if (t.v === void 0)
    return !1;
  var o = "";
  switch (t.t) {
    case "b":
      o = t.v ? "1" : "0";
      break;
    case "d":
      t = Ut(t), t.z = t.z || rt[14], t.v = Bt(It(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      o = "" + t.v;
      break;
    default:
      o = t.v;
      break;
  }
  var l = { r, c: i };
  switch (l.s = Hr(n.cellXfs, t, n), t.l && s["!links"].push([Xe(l), t.l]), t.c && s["!comments"].push([Xe(l), t.c]), t.t) {
    case "s":
    case "str":
      return n.bookSST ? (o = Ya(n.Strings, t.v, n.revStrings), l.t = "s", l.v = o, a ? J(e, 18, tg(t, l)) : J(e, 7, $m(t, l))) : (l.t = "str", a ? J(e, 17, pg(t, l)) : J(e, 6, ug(t, l))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? a ? J(e, 13, fg(t, l)) : J(e, 2, og(t, l)) : a ? J(e, 16, sg(t, l)) : J(e, 5, ng(t, l)), !0;
    case "b":
      return l.t = "b", a ? J(e, 15, Km(t, l)) : J(e, 4, zm(t, l)), !0;
    case "e":
      return l.t = "e", a ? J(e, 14, Zm(t, l)) : J(e, 3, Jm(t, l)), !0;
  }
  return a ? J(e, 12, Gm(t, l)) : J(e, 1, Hm(t, l)), !0;
}
function Lg(e, t, r, i) {
  var n = Ze(t["!ref"] || "A1"), s, a = "", o = [];
  J(
    e,
    145
    /* BrtBeginSheetData */
  );
  var l = Array.isArray(t), f = n.e.r;
  t["!rows"] && (f = Math.max(n.e.r, t["!rows"].length - 1));
  for (var c = n.s.r; c <= f; ++c) {
    a = vt(c), bm(e, t, n, c);
    var h = !1;
    if (c <= n.e.r)
      for (var u = n.s.c; u <= n.e.c; ++u) {
        c === n.s.r && (o[u] = Ft(u)), s = o[u] + a;
        var p = l ? (t[c] || [])[u] : t[s];
        if (!p) {
          h = !1;
          continue;
        }
        h = Mg(e, p, c, u, i, t, h);
      }
  }
  J(
    e,
    146
    /* BrtEndSheetData */
  );
}
function Bg(e, t) {
  !t || !t["!merges"] || (J(e, 177, Tg(t["!merges"].length)), t["!merges"].forEach(function(r) {
    J(e, 176, Eg(r));
  }), J(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function Ug(e, t) {
  !t || !t["!cols"] || (J(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, i) {
    r && J(e, 60, Fg(i, r));
  }), J(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function Wg(e, t) {
  !t || !t["!ref"] || (J(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), J(e, 649, Ng(Ze(t["!ref"]))), J(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function Hg(e, t, r) {
  t["!links"].forEach(function(i) {
    if (i[1].Target) {
      var n = Ge(r, -1, i[1].Target.replace(/#.*$/, ""), Be.HLINK);
      J(e, 494, Sg(i, n));
    }
  }), delete t["!links"];
}
function Vg(e, t, r, i) {
  if (t["!comments"].length > 0) {
    var n = Ge(i, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Be.VML);
    J(e, 551, Va("rId" + n)), t["!legacy"] = n;
  }
}
function Gg(e, t, r, i) {
  if (t["!autofilter"]) {
    var n = t["!autofilter"], s = typeof n.ref == "string" ? n.ref : at(n.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var a = r.Workbook.Names, o = jt(s);
    o.s.r == o.e.r && (o.e.r = jt(t["!ref"]).e.r, s = at(o));
    for (var l = 0; l < a.length; ++l) {
      var f = a[l];
      if (f.Name == "_xlnm._FilterDatabase" && f.Sheet == i) {
        f.Ref = "'" + r.SheetNames[i] + "'!" + s;
        break;
      }
    }
    l == a.length && a.push({ Name: "_xlnm._FilterDatabase", Sheet: i, Ref: "'" + r.SheetNames[i] + "'!" + s }), J(e, 161, Nn(Ze(s))), J(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function jg(e, t, r) {
  J(
    e,
    133
    /* BrtBeginWsViews */
  ), J(e, 137, Pg(t, r)), J(
    e,
    138
    /* BrtEndWsView */
  ), J(
    e,
    134
    /* BrtEndWsViews */
  );
}
function zg(e, t) {
  t["!protect"] && J(e, 535, Ig(t["!protect"]));
}
function Xg(e, t, r, i) {
  var n = Mt(), s = r.SheetNames[e], a = r.Sheets[s] || {}, o = s;
  try {
    r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o);
  } catch {
  }
  var l = Ze(a["!ref"] || "A1");
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (a["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575);
  }
  return a["!links"] = [], a["!comments"] = [], J(
    n,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || a["!outline"]) && J(n, 147, Um(o, a["!outline"])), J(n, 148, Mm(l)), jg(n, a, r.Workbook), Ug(n, a), Lg(n, a, e, t), zg(n, a), Gg(n, a, r, e), Bg(n, a), Hg(n, a, i), a["!margins"] && J(n, 476, Dg(a["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && Wg(n, a), Vg(n, a, e, i), J(
    n,
    130
    /* BrtEndSheet */
  ), n.end();
}
function Kg(e, t) {
  e.l += 10;
  var r = Ot(e);
  return { name: r };
}
var Yg = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function Jg(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : y1(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var qg = /* @__PURE__ */ "][*?/\\".split("");
function Nf(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return qg.forEach(function(i) {
    if (e.indexOf(i) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function Zg(e, t, r) {
  e.forEach(function(i, n) {
    Nf(i);
    for (var s = 0; s < n; ++s)
      if (i == e[s])
        throw new Error("Duplicate Sheet Name: " + i);
    if (r) {
      var a = t && t[n] && t[n].CodeName || i;
      if (a.charCodeAt(0) == 95 && a.length > 22)
        throw new Error("Bad Code Name: Worksheet" + a);
    }
  });
}
function Qg(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  Zg(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    Em(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function If(e) {
  var t = [ot];
  t[t.length] = le("workbook", null, {
    xmlns: Rn[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": ht.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, i = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Yg.forEach(function(o) {
    e.Workbook.WBProps[o[0]] != null && e.Workbook.WBProps[o[0]] != o[1] && (i[o[0]] = e.Workbook.WBProps[o[0]]);
  }), e.Workbook.WBProps.CodeName && (i.codeName = e.Workbook.WBProps.CodeName, delete i.CodeName)), t[t.length] = le("workbookPr", null, i);
  var n = e.Workbook && e.Workbook.Sheets || [], s = 0;
  if (n && n[0] && n[0].Hidden) {
    for (t[t.length] = "<bookViews>", s = 0; s != e.SheetNames.length && !(!n[s] || !n[s].Hidden); ++s)
      ;
    s == e.SheetNames.length && (s = 0), t[t.length] = '<workbookView firstSheet="' + s + '" activeTab="' + s + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", s = 0; s != e.SheetNames.length; ++s) {
    var a = { name: je(e.SheetNames[s].slice(0, 31)) };
    if (a.sheetId = "" + (s + 1), a["r:id"] = "rId" + (s + 1), n[s])
      switch (n[s].Hidden) {
        case 1:
          a.state = "hidden";
          break;
        case 2:
          a.state = "veryHidden";
          break;
      }
    t[t.length] = le("sheet", null, a);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(o) {
    var l = { name: o.Name };
    o.Comment && (l.comment = o.Comment), o.Sheet != null && (l.localSheetId = "" + o.Sheet), o.Hidden && (l.hidden = "1"), o.Ref && (t[t.length] = le("definedName", je(o.Ref), l));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function $g(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = la(e), r.name = Ot(e), r;
}
function e2(e, t) {
  return t || (t = H(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Va(e.strRelID, t), dt(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function t2(e, t) {
  var r = {}, i = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var n = t > 8 ? Ot(e) : "";
  return n.length > 0 && (r.CodeName = n), r.autoCompressPictures = !!(i & 65536), r.backupFile = !!(i & 64), r.checkCompatibility = !!(i & 4096), r.date1904 = !!(i & 1), r.filterPrivacy = !!(i & 8), r.hidePivotFieldList = !!(i & 1024), r.promptedSolutions = !!(i & 16), r.publishItems = !!(i & 2048), r.refreshAllConnections = !!(i & 262144), r.saveExternalLinkValues = !!(i & 128), r.showBorderUnselectedTables = !!(i & 4), r.showInkAnnotation = !!(i & 32), r.showObjects = ["all", "placeholders", "none"][i >> 13 & 3], r.showPivotChartFilter = !!(i & 32768), r.updateLinks = ["userSet", "never", "always"][i >> 8 & 3], r;
}
function r2(e, t) {
  t || (t = H(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), jl(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function n2(e, t, r) {
  var i = e.l + t;
  e.l += 4, e.l += 1;
  var n = e.read_shift(4), s = J1(e), a = pm(e, 0, r), o = Ha(e);
  e.l = i;
  var l = { Name: s, Ptg: a };
  return n < 268435455 && (l.Sheet = n), o && (l.Comment = o), l;
}
function i2(e, t) {
  J(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var i = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, n = { Hidden: i, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    J(e, 156, e2(n));
  }
  J(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function s2(e, t) {
  t || (t = H(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return dt("SheetJS", t), dt(qi.version, t), dt(qi.version, t), dt("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function a2(e, t) {
  t || (t = H(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function o2(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, i = 0, n = -1, s = -1; i < r.length; ++i)
      !r[i] || !r[i].Hidden && n == -1 ? n = i : r[i].Hidden == 1 && s == -1 && (s = i);
    s > n || (J(
      e,
      135
      /* BrtBeginBookViews */
    ), J(e, 158, a2(n)), J(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function l2(e, t) {
  var r = Mt();
  return J(
    r,
    131
    /* BrtBeginBook */
  ), J(r, 128, s2()), J(r, 153, r2(e.Workbook && e.Workbook.WBProps || null)), o2(r, e), i2(r, e), J(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function f2(e, t, r) {
  return (t.slice(-4) === ".bin" ? l2 : If)(e);
}
function c2(e, t, r, i, n) {
  return (t.slice(-4) === ".bin" ? Xg : Rf)(e, r, i, n);
}
function h2(e, t, r) {
  return (t.slice(-4) === ".bin" ? Dp : xf)(e, r);
}
function u2(e, t, r) {
  return (t.slice(-4) === ".bin" ? rp : hf)(e, r);
}
function d2(e, t, r) {
  return (t.slice(-4) === ".bin" ? zp : Ef)(e);
}
function p2(e) {
  return (e.slice(-4) === ".bin" ? Lp : _f)();
}
function x2(e, t) {
  var r = [];
  return e.Props && r.push(hd(e.Props, t)), e.Custprops && r.push(ud(e.Props, e.Custprops)), r.join("");
}
function m2() {
  return "";
}
function g2(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(i, n) {
    var s = [];
    s.push(le("NumberFormat", null, { "ss:Format": je(rt[i.numFmtId]) }));
    var a = (
      /*::(*/
      { "ss:ID": "s" + (21 + n) }
    );
    r.push(le("Style", s.join(""), a));
  }), le("Styles", r.join(""));
}
function bf(e) {
  return le("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + Xa(e.Ref, { r: 0, c: 0 }) });
}
function _2(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], i = 0; i < t.length; ++i) {
    var n = t[i];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || r.push(bf(n)));
  }
  return le("Names", r.join(""));
}
function v2(e, t, r, i) {
  if (!e || !((i || {}).Workbook || {}).Names)
    return "";
  for (var n = i.Workbook.Names, s = [], a = 0; a < n.length; ++a) {
    var o = n[a];
    o.Sheet == r && (o.Name.match(/^_xlfn\./) || s.push(bf(o)));
  }
  return s.join("");
}
function E2(e, t, r, i) {
  if (!e)
    return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(le("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(le("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(le("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), n.push("</PageSetup>")), i && i.Workbook && i.Workbook.Sheets && i.Workbook.Sheets[r])
    if (i.Workbook.Sheets[r].Hidden)
      n.push(le("Visible", i.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var s = 0; s < r && !(i.Workbook.Sheets[s] && !i.Workbook.Sheets[s].Hidden); ++s)
        ;
      s == r && n.push("<Selected/>");
    }
  return ((((i || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(_t("ProtectContents", "True")), e["!protect"].objects && n.push(_t("ProtectObjects", "True")), e["!protect"].scenarios && n.push(_t("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(_t("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(_t("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(a) {
    e["!protect"][a[0]] && n.push("<" + a[1] + "/>");
  })), n.length == 0 ? "" : le("WorksheetOptions", n.join(""), { xmlns: Vt.x });
}
function T2(e) {
  return e.map(function(t) {
    var r = A1(t.t || ""), i = le("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return le("Comment", i, { "ss:Author": t.a });
  }).join("");
}
function w2(e, t, r, i, n, s, a) {
  if (!e || e.v == null && e.f == null)
    return "";
  var o = {};
  if (e.f && (o["ss:Formula"] = "=" + je(Xa(e.f, a))), e.F && e.F.slice(0, t.length) == t) {
    var l = ut(e.F.slice(t.length + 1));
    o["ss:ArrayRange"] = "RC:R" + (l.r == a.r ? "" : "[" + (l.r - a.r) + "]") + "C" + (l.c == a.c ? "" : "[" + (l.c - a.c) + "]");
  }
  if (e.l && e.l.Target && (o["ss:HRef"] = je(e.l.Target), e.l.Tooltip && (o["x:HRefScreenTip"] = je(e.l.Tooltip))), r["!merges"])
    for (var f = r["!merges"], c = 0; c != f.length; ++c)
      f[c].s.c != a.c || f[c].s.r != a.r || (f[c].e.c > f[c].s.c && (o["ss:MergeAcross"] = f[c].e.c - f[c].s.c), f[c].e.r > f[c].s.r && (o["ss:MergeDown"] = f[c].e.r - f[c].s.r));
  var h = "", u = "";
  switch (e.t) {
    case "z":
      if (!i.sheetStubs)
        return "";
      break;
    case "n":
      h = "Number", u = String(e.v);
      break;
    case "b":
      h = "Boolean", u = e.v ? "1" : "0";
      break;
    case "e":
      h = "Error", u = gi[e.v];
      break;
    case "d":
      h = "DateTime", u = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || rt[14]);
      break;
    case "s":
      h = "String", u = C1(e.v || "");
      break;
  }
  var p = Hr(i.cellXfs, e, i);
  o["ss:StyleID"] = "s" + (21 + p), o["ss:Index"] = a.c + 1;
  var g = e.v != null ? u : "", d = e.t == "z" ? "" : '<Data ss:Type="' + h + '">' + g + "</Data>";
  return (e.c || []).length > 0 && (d += T2(e.c)), le("Cell", d, o);
}
function S2(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = pf(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function C2(e, t, r, i) {
  if (!e["!ref"])
    return "";
  var n = Ze(e["!ref"]), s = e["!merges"] || [], a = 0, o = [];
  e["!cols"] && e["!cols"].forEach(function(v, O) {
    ja(v);
    var R = !!v.width, y = Ds(O, v), P = { "ss:Index": O + 1 };
    R && (P["ss:Width"] = ss(y.width)), v.hidden && (P["ss:Hidden"] = "1"), o.push(le("Column", null, P));
  });
  for (var l = Array.isArray(e), f = n.s.r; f <= n.e.r; ++f) {
    for (var c = [S2(f, (e["!rows"] || [])[f])], h = n.s.c; h <= n.e.c; ++h) {
      var u = !1;
      for (a = 0; a != s.length; ++a)
        if (!(s[a].s.c > h) && !(s[a].s.r > f) && !(s[a].e.c < h) && !(s[a].e.r < f)) {
          (s[a].s.c != h || s[a].s.r != f) && (u = !0);
          break;
        }
      if (!u) {
        var p = { r: f, c: h }, g = Xe(p), d = l ? (e[f] || [])[h] : e[g];
        c.push(w2(d, g, e, t, r, i, p));
      }
    }
    c.push("</Row>"), c.length > 2 && o.push(c.join(""));
  }
  return o.join("");
}
function A2(e, t, r) {
  var i = [], n = r.SheetNames[e], s = r.Sheets[n], a = s ? v2(s, t, e, r) : "";
  return a.length > 0 && i.push("<Names>" + a + "</Names>"), a = s ? C2(s, t, e, r) : "", a.length > 0 && i.push("<Table>" + a + "</Table>"), i.push(E2(s, t, e, r)), i.join("");
}
function y2(e, t) {
  t || (t = {}), e.SSF || (e.SSF = Ut(rt)), e.SSF && (Cs(), Ss(e.SSF), t.revssf = As(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(x2(e, t)), r.push(m2()), r.push(""), r.push("");
  for (var i = 0; i < e.SheetNames.length; ++i)
    r.push(le("Worksheet", A2(i, t, e), { "ss:Name": je(e.SheetNames[i]) }));
  return r[2] = g2(e, t), r[3] = _2(e), ot + le("Workbook", r.join(""), {
    xmlns: Vt.ss,
    "xmlns:o": Vt.o,
    "xmlns:x": Vt.x,
    "xmlns:ss": Vt.ss,
    "xmlns:dt": Vt.dt,
    "xmlns:html": Vt.html
  });
}
var Gs = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function F2(e, t) {
  var r = [], i = [], n = [], s = 0, a, o = G0(ro, "n"), l = G0(no, "n");
  if (e.Props)
    for (a = Et(e.Props), s = 0; s < a.length; ++s)
      (Object.prototype.hasOwnProperty.call(o, a[s]) ? r : Object.prototype.hasOwnProperty.call(l, a[s]) ? i : n).push([a[s], e.Props[a[s]]]);
  if (e.Custprops)
    for (a = Et(e.Custprops), s = 0; s < a.length; ++s)
      Object.prototype.hasOwnProperty.call(e.Props || {}, a[s]) || (Object.prototype.hasOwnProperty.call(o, a[s]) ? r : Object.prototype.hasOwnProperty.call(l, a[s]) ? i : n).push([a[s], e.Custprops[a[s]]]);
  var f = [];
  for (s = 0; s < n.length; ++s)
    nf.indexOf(n[s][0]) > -1 || ef.indexOf(n[s][0]) > -1 || n[s][1] != null && f.push(n[s]);
  i.length && Ke.utils.cfb_add(t, "/SummaryInformation", lo(i, Gs.SI, l, no)), (r.length || f.length) && Ke.utils.cfb_add(t, "/DocumentSummaryInformation", lo(r, Gs.DSI, o, ro, f.length ? f : null, Gs.UDI));
}
function O2(e, t) {
  var r = t || {}, i = Ke.utils.cfb_new({ root: "R" }), n = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      n = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      n = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return Ke.utils.cfb_add(i, n, kf(e, r)), r.biff == 8 && (e.Props || e.Custprops) && F2(e, i), r.biff == 8 && e.vbaraw && Xp(i, Ke.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), i;
}
var D2 = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: Nm
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: Wm
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: ag
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: Ym
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: jm
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: rg
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: hg
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: Qm
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: _g
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: gg
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: xg
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: mg
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: Vm
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: lg
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: qm
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: Xm
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: ig
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: dg
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: eg
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: Wa
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: n2
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: hp
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: fp
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: pp
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: mp
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: xp
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: V1
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: Np
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: Gd
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: cg
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: Bp
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: bg
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: xr,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Rg
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: Bm
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: km,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: Cg
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: t2
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: $g
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: $d
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: fn
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: vg
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: Rp
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: kp,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: la
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Ld
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: Ag
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: yg
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: Og
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: Lm
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: wg
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: la
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: Gp
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: Hp
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: X1
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: Kg
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: kg
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
function fe(e, t, r, i) {
  var n = t;
  if (!isNaN(n)) {
    var s = i || (r || []).length || 0, a = e.next(4);
    a.write_shift(2, n), a.write_shift(2, s), /*:: len != null &&*/
    s > 0 && La(r) && e.push(r);
  }
}
function R2(e, t, r, i) {
  var n = i || (r || []).length || 0;
  if (n <= 8224)
    return fe(e, t, r, n);
  var s = t;
  if (!isNaN(s)) {
    for (var a = r.parts || [], o = 0, l = 0, f = 0; f + (a[o] || 8224) <= 8224; )
      f += a[o] || 8224, o++;
    var c = e.next(4);
    for (c.write_shift(2, s), c.write_shift(2, f), e.push(r.slice(l, l + f)), l += f; l < n; ) {
      for (c = e.next(4), c.write_shift(2, 60), f = 0; f + (a[o] || 8224) <= 8224; )
        f += a[o] || 8224, o++;
      c.write_shift(2, f), e.push(r.slice(l, l + f)), l += f;
    }
  }
}
function vi(e, t, r) {
  return e || (e = H(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function P2(e, t, r, i) {
  var n = H(9);
  return vi(n, e, t), af(r, i || "b", n), n;
}
function N2(e, t, r) {
  var i = H(8 + 2 * r.length);
  return vi(i, e, t), i.write_shift(1, r.length), i.write_shift(r.length, r, "sbcs"), i.l < i.length ? i.slice(0, i.l) : i;
}
function I2(e, t, r, i) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var n = t.t == "d" ? Bt(It(t.v)) : t.v;
        n == (n | 0) && n >= 0 && n < 65536 ? fe(e, 2, Kd(r, i, n)) : fe(e, 3, Xd(r, i, n));
        return;
      case "b":
      case "e":
        fe(e, 5, P2(r, i, t.v, t.t));
        return;
      case "s":
      case "str":
        fe(e, 4, N2(r, i, (t.v || "").slice(0, 255)));
        return;
    }
  fe(e, 1, vi(null, r, i));
}
function b2(e, t, r, i) {
  var n = Array.isArray(t), s = Ze(t["!ref"] || "A1"), a, o = "", l = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (i.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.c, 16383), a = at(s);
  }
  for (var f = s.s.r; f <= s.e.r; ++f) {
    o = vt(f);
    for (var c = s.s.c; c <= s.e.c; ++c) {
      f === s.s.r && (l[c] = Ft(c)), a = l[c] + o;
      var h = n ? (t[f] || [])[c] : t[a];
      h && I2(e, h, f, c);
    }
  }
}
function k2(e, t) {
  for (var r = t || {}, i = Mt(), n = 0, s = 0; s < e.SheetNames.length; ++s)
    e.SheetNames[s] == r.sheet && (n = s);
  if (n == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return fe(i, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Ga(e, 16, r)), b2(i, e.Sheets[e.SheetNames[n]], n, r), fe(i, 10), i.end();
}
function M2(e, t, r) {
  fe(e, 49, Dd({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function L2(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(i) {
    for (var n = i[0]; n <= i[1]; ++n)
      t[n] != null && fe(e, 1054, Nd(n, t[n], r));
  });
}
function B2(e, t) {
  var r = H(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), fe(e, 2151, r), r = H(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), ff(Ze(t["!ref"] || "A1"), r), r.write_shift(4, 4), fe(e, 2152, r);
}
function U2(e, t) {
  for (var r = 0; r < 16; ++r)
    fe(e, 224, co({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(i) {
    fe(e, 224, co(i, 0, t));
  });
}
function W2(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var i = t["!links"][r];
    fe(e, 440, Wd(i)), i[1].Tooltip && fe(e, 2048, Hd(i));
  }
  delete t["!links"];
}
function H2(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(i, n) {
      ++r <= 256 && i && fe(e, 125, jd(Ds(n, i), n));
    });
  }
}
function V2(e, t, r, i, n) {
  var s = 16 + Hr(n.cellXfs, t, n);
  if (t.v == null && !t.bf) {
    fe(e, 513, nn(r, i, s));
    return;
  }
  if (t.bf)
    fe(e, 6, um(t, r, i, n, s));
  else
    switch (t.t) {
      case "d":
      case "n":
        var a = t.t == "d" ? Bt(It(t.v)) : t.v;
        fe(e, 515, Md(r, i, a, s));
        break;
      case "b":
      case "e":
        fe(e, 517, kd(r, i, t.v, s, n, t.t));
        break;
      case "s":
      case "str":
        if (n.bookSST) {
          var o = Ya(n.Strings, t.v, n.revStrings);
          fe(e, 253, Rd(r, i, o, s));
        } else
          fe(e, 516, Pd(r, i, (t.v || "").slice(0, 255), s, n));
        break;
      default:
        fe(e, 513, nn(r, i, s));
    }
}
function G2(e, t, r) {
  var i = Mt(), n = r.SheetNames[e], s = r.Sheets[n] || {}, a = (r || {}).Workbook || {}, o = (a.Sheets || [])[e] || {}, l = Array.isArray(s), f = t.biff == 8, c, h = "", u = [], p = Ze(s["!ref"] || "A1"), g = f ? 65536 : 16384;
  if (p.e.c > 255 || p.e.r >= g) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    p.e.c = Math.min(p.e.c, 255), p.e.r = Math.min(p.e.c, g - 1);
  }
  fe(i, 2057, Ga(r, 16, t)), fe(i, 13, Kt(1)), fe(i, 12, Kt(100)), fe(i, 15, Pt(!0)), fe(i, 17, Pt(!1)), fe(i, 16, rn(1e-3)), fe(i, 95, Pt(!0)), fe(i, 42, Pt(!1)), fe(i, 43, Pt(!1)), fe(i, 130, Kt(1)), fe(i, 128, bd([0, 0])), fe(i, 131, Pt(!1)), fe(i, 132, Pt(!1)), f && H2(i, s["!cols"]), fe(i, 512, Id(p, t)), f && (s["!links"] = []);
  for (var d = p.s.r; d <= p.e.r; ++d) {
    h = vt(d);
    for (var v = p.s.c; v <= p.e.c; ++v) {
      d === p.s.r && (u[v] = Ft(v)), c = u[v] + h;
      var O = l ? (s[d] || [])[v] : s[c];
      O && (V2(i, O, d, v, t), f && O.l && s["!links"].push([c, O.l]));
    }
  }
  var R = o.CodeName || o.name || n;
  return f && fe(i, 574, Od((a.Views || [])[0])), f && (s["!merges"] || []).length && fe(i, 229, Ud(s["!merges"])), f && W2(i, s), fe(i, 442, lf(R)), f && B2(i, s), fe(
    i,
    10
    /* EOF */
  ), i.end();
}
function j2(e, t, r) {
  var i = Mt(), n = (e || {}).Workbook || {}, s = n.Sheets || [], a = (
    /*::((*/
    n.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), o = r.biff == 8, l = r.biff == 5;
  if (fe(i, 2057, Ga(e, 5, r)), r.bookType == "xla" && fe(
    i,
    135
    /* Addin */
  ), fe(i, 225, o ? Kt(1200) : null), fe(i, 193, xd(2)), l && fe(
    i,
    191
    /* ToolbarHdr */
  ), l && fe(
    i,
    192
    /* ToolbarEnd */
  ), fe(
    i,
    226
    /* InterfaceEnd */
  ), fe(i, 92, Cd("SheetJS", r)), fe(i, 66, Kt(o ? 1200 : 1252)), o && fe(i, 353, Kt(0)), o && fe(
    i,
    448
    /* Excel9File */
  ), fe(i, 317, zd(e.SheetNames.length)), o && e.vbaraw && fe(
    i,
    211
    /* ObProj */
  ), o && e.vbaraw) {
    var f = a.CodeName || "ThisWorkbook";
    fe(i, 442, lf(f));
  }
  fe(i, 156, Kt(17)), fe(i, 25, Pt(!1)), fe(i, 18, Pt(!1)), fe(i, 19, Kt(0)), o && fe(i, 431, Pt(!1)), o && fe(i, 444, Kt(0)), fe(i, 61, Fd()), fe(i, 64, Pt(!1)), fe(i, 141, Kt(0)), fe(i, 34, Pt(Jg(e) == "true")), fe(i, 14, Pt(!0)), o && fe(i, 439, Pt(!1)), fe(i, 218, Kt(0)), M2(i, e, r), L2(i, e.SSF, r), U2(i, r), o && fe(i, 352, Pt(!1));
  var c = i.end(), h = Mt();
  o && fe(h, 140, Vd()), o && r.Strings && R2(h, 252, yd(r.Strings)), fe(
    h,
    10
    /* EOF */
  );
  var u = h.end(), p = Mt(), g = 0, d = 0;
  for (d = 0; d < e.SheetNames.length; ++d)
    g += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[d].length;
  var v = c.length + g + u.length;
  for (d = 0; d < e.SheetNames.length; ++d) {
    var O = s[d] || {};
    fe(p, 133, Ad({ pos: v, hs: O.Hidden || 0, dt: 0, name: e.SheetNames[d] }, r)), v += t[d].length;
  }
  var R = p.end();
  if (g != R.length)
    throw new Error("BS8 " + g + " != " + R.length);
  var y = [];
  return c.length && y.push(c), R.length && y.push(R), u.length && y.push(u), gt(y);
}
function z2(e, t) {
  var r = t || {}, i = [];
  e && !e.SSF && (e.SSF = Ut(rt)), e && e.SSF && (Cs(), Ss(e.SSF), r.revssf = As(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, Ja(r), r.cellXfs = [], Hr(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n)
    i[i.length] = G2(n, r, e);
  return i.unshift(j2(e, i, r)), gt(i);
}
function kf(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var i = e.Sheets[e.SheetNames[r]];
    if (!(!i || !i["!ref"])) {
      var n = jt(i["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var s = t || {};
  switch (s.biff || 2) {
    case 8:
    case 5:
      return z2(e, t);
    case 4:
    case 3:
    case 2:
      return k2(e, t);
  }
  throw new Error("invalid type " + s.bookType + " for BIFF");
}
function X2(e, t, r, i) {
  for (var n = e["!merges"] || [], s = [], a = t.s.c; a <= t.e.c; ++a) {
    for (var o = 0, l = 0, f = 0; f < n.length; ++f)
      if (!(n[f].s.r > r || n[f].s.c > a) && !(n[f].e.r < r || n[f].e.c < a)) {
        if (n[f].s.r < r || n[f].s.c < a) {
          o = -1;
          break;
        }
        o = n[f].e.r - n[f].s.r + 1, l = n[f].e.c - n[f].s.c + 1;
        break;
      }
    if (!(o < 0)) {
      var c = Xe({ r, c: a }), h = i.dense ? (e[r] || [])[a] : e[c], u = h && h.v != null && (h.h || S1(h.w || (yr(h), h.w) || "")) || "", p = {};
      o > 1 && (p.rowspan = o), l > 1 && (p.colspan = l), i.editable ? u = '<span contenteditable="true">' + u + "</span>" : h && (p["data-t"] = h && h.t || "z", h.v != null && (p["data-v"] = h.v), h.z != null && (p["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (u = '<a href="' + h.l.Target + '">' + u + "</a>")), p.id = (i.id || "sjs") + "-" + c, s.push(le("td", u, p));
    }
  }
  var g = "<tr>";
  return g + s.join("") + "</tr>";
}
var K2 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Y2 = "</body></html>";
function J2(e, t, r) {
  var i = [];
  return i.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Mf(e, t) {
  var r = t || {}, i = r.header != null ? r.header : K2, n = r.footer != null ? r.footer : Y2, s = [i], a = jt(e["!ref"]);
  r.dense = Array.isArray(e), s.push(J2(e, a, r));
  for (var o = a.s.r; o <= a.e.r; ++o)
    s.push(X2(e, a, o, r));
  return s.push("</table>" + n), s.join("");
}
function Lf(e, t, r) {
  var i = r || {}, n = 0, s = 0;
  if (i.origin != null)
    if (typeof i.origin == "number")
      n = i.origin;
    else {
      var a = typeof i.origin == "string" ? ut(i.origin) : i.origin;
      n = a.r, s = a.c;
    }
  var o = t.getElementsByTagName("tr"), l = Math.min(i.sheetRows || 1e7, o.length), f = { s: { r: 0, c: 0 }, e: { r: n, c: s } };
  if (e["!ref"]) {
    var c = jt(e["!ref"]);
    f.s.r = Math.min(f.s.r, c.s.r), f.s.c = Math.min(f.s.c, c.s.c), f.e.r = Math.max(f.e.r, c.e.r), f.e.c = Math.max(f.e.c, c.e.c), n == -1 && (f.e.r = n = c.e.r + 1);
  }
  var h = [], u = 0, p = e["!rows"] || (e["!rows"] = []), g = 0, d = 0, v = 0, O = 0, R = 0, y = 0;
  for (e["!cols"] || (e["!cols"] = []); g < o.length && d < l; ++g) {
    var P = o[g];
    if (_o(P)) {
      if (i.display)
        continue;
      p[d] = { hidden: !0 };
    }
    var ie = P.children;
    for (v = O = 0; v < ie.length; ++v) {
      var de = ie[v];
      if (!(i.display && _o(de))) {
        var N = de.hasAttribute("data-v") ? de.getAttribute("data-v") : de.hasAttribute("v") ? de.getAttribute("v") : F1(de.innerHTML), j = de.getAttribute("data-z") || de.getAttribute("z");
        for (u = 0; u < h.length; ++u) {
          var W = h[u];
          W.s.c == O + s && W.s.r < d + n && d + n <= W.e.r && (O = W.e.c + 1 - s, u = -1);
        }
        y = +de.getAttribute("colspan") || 1, ((R = +de.getAttribute("rowspan") || 1) > 1 || y > 1) && h.push({ s: { r: d + n, c: O + s }, e: { r: d + n + (R || 1) - 1, c: O + s + (y || 1) - 1 } });
        var Y = { t: "s", v: N }, q = de.getAttribute("data-t") || de.getAttribute("t") || "";
        N != null && (N.length == 0 ? Y.t = q || "z" : i.raw || N.trim().length == 0 || q == "s" || (N === "TRUE" ? Y = { t: "b", v: !0 } : N === "FALSE" ? Y = { t: "b", v: !1 } : isNaN(wr(N)) ? isNaN(fi(N).getDate()) || (Y = { t: "d", v: It(N) }, i.cellDates || (Y = { t: "n", v: Bt(Y.v) }), Y.z = i.dateNF || rt[14]) : Y = { t: "n", v: wr(N) })), Y.z === void 0 && j != null && (Y.z = j);
        var te = "", pe = de.getElementsByTagName("A");
        if (pe && pe.length)
          for (var Le = 0; Le < pe.length && !(pe[Le].hasAttribute("href") && (te = pe[Le].getAttribute("href"), te.charAt(0) != "#")); ++Le)
            ;
        te && te.charAt(0) != "#" && (Y.l = { Target: te }), i.dense ? (e[d + n] || (e[d + n] = []), e[d + n][O + s] = Y) : e[Xe({ c: O + s, r: d + n })] = Y, f.e.c < O + s && (f.e.c = O + s), O += y;
      }
    }
    ++d;
  }
  return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), f.e.r = Math.max(f.e.r, d - 1 + n), e["!ref"] = at(f), d >= l && (e["!fullref"] = at((f.e.r = o.length - g + d - 1 + n, f))), e;
}
function Bf(e, t) {
  var r = t || {}, i = r.dense ? [] : {};
  return Lf(i, e, t);
}
function q2(e, t) {
  return sn(Bf(e, t), t);
}
function _o(e) {
  var t = "", r = Z2(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function Z2(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var Q2 = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + ci({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return ot + t;
  };
}(), vo = /* @__PURE__ */ function() {
  var e = function(s) {
    return je(s).replace(/  +/g, function(a) {
      return '<text:s text:c="' + a.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, i = function(s, a, o) {
    var l = [];
    l.push('      <table:table table:name="' + je(a.SheetNames[o]) + `" table:style-name="ta1">
`);
    var f = 0, c = 0, h = jt(s["!ref"] || "A1"), u = s["!merges"] || [], p = 0, g = Array.isArray(s);
    if (s["!cols"])
      for (c = 0; c <= h.e.c; ++c)
        l.push("        <table:table-column" + (s["!cols"][c] ? ' table:style-name="co' + s["!cols"][c].ods + '"' : "") + `></table:table-column>
`);
    var d = "", v = s["!rows"] || [];
    for (f = 0; f < h.s.r; ++f)
      d = v[f] ? ' table:style-name="ro' + v[f].ods + '"' : "", l.push("        <table:table-row" + d + `></table:table-row>
`);
    for (; f <= h.e.r; ++f) {
      for (d = v[f] ? ' table:style-name="ro' + v[f].ods + '"' : "", l.push("        <table:table-row" + d + `>
`), c = 0; c < h.s.c; ++c)
        l.push(t);
      for (; c <= h.e.c; ++c) {
        var O = !1, R = {}, y = "";
        for (p = 0; p != u.length; ++p)
          if (!(u[p].s.c > c) && !(u[p].s.r > f) && !(u[p].e.c < c) && !(u[p].e.r < f)) {
            (u[p].s.c != c || u[p].s.r != f) && (O = !0), R["table:number-columns-spanned"] = u[p].e.c - u[p].s.c + 1, R["table:number-rows-spanned"] = u[p].e.r - u[p].s.r + 1;
            break;
          }
        if (O) {
          l.push(r);
          continue;
        }
        var P = Xe({ r: f, c }), ie = g ? (s[f] || [])[c] : s[P];
        if (ie && ie.f && (R["table:formula"] = je(_m(ie.f)), ie.F && ie.F.slice(0, P.length) == P)) {
          var de = jt(ie.F);
          R["table:number-matrix-columns-spanned"] = de.e.c - de.s.c + 1, R["table:number-matrix-rows-spanned"] = de.e.r - de.s.r + 1;
        }
        if (!ie) {
          l.push(t);
          continue;
        }
        switch (ie.t) {
          case "b":
            y = ie.v ? "TRUE" : "FALSE", R["office:value-type"] = "boolean", R["office:boolean-value"] = ie.v ? "true" : "false";
            break;
          case "n":
            y = ie.w || String(ie.v || 0), R["office:value-type"] = "float", R["office:value"] = ie.v || 0;
            break;
          case "s":
          case "str":
            y = ie.v == null ? "" : ie.v, R["office:value-type"] = "string";
            break;
          case "d":
            y = ie.w || It(ie.v).toISOString(), R["office:value-type"] = "date", R["office:date-value"] = It(ie.v).toISOString(), R["table:style-name"] = "ce1";
            break;
          default:
            l.push(t);
            continue;
        }
        var N = e(y);
        if (ie.l && ie.l.Target) {
          var j = ie.l.Target;
          j = j.charAt(0) == "#" ? "#" + vm(j.slice(1)) : j, j.charAt(0) != "#" && !j.match(/^\w+:/) && (j = "../" + j), N = le("text:a", N, { "xlink:href": j.replace(/&/g, "&amp;") });
        }
        l.push("          " + le("table:table-cell", le("text:p", N, {}), R) + `
`);
      }
      l.push(`        </table:table-row>
`);
    }
    return l.push(`      </table:table>
`), l.join("");
  }, n = function(s, a) {
    s.push(` <office:automatic-styles>
`), s.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), s.push(`   <number:month number:style="long"/>
`), s.push(`   <number:text>/</number:text>
`), s.push(`   <number:day number:style="long"/>
`), s.push(`   <number:text>/</number:text>
`), s.push(`   <number:year/>
`), s.push(`  </number:date-style>
`);
    var o = 0;
    a.SheetNames.map(function(f) {
      return a.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!cols"]) {
        for (var c = 0; c < f["!cols"].length; ++c)
          if (f["!cols"][c]) {
            var h = f["!cols"][c];
            if (h.width == null && h.wpx == null && h.wch == null)
              continue;
            ja(h), h.ods = o;
            var u = f["!cols"][c].wpx + "px";
            s.push('  <style:style style:name="co' + o + `" style:family="table-column">
`), s.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + u + `"/>
`), s.push(`  </style:style>
`), ++o;
          }
      }
    });
    var l = 0;
    a.SheetNames.map(function(f) {
      return a.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!rows"]) {
        for (var c = 0; c < f["!rows"].length; ++c)
          if (f["!rows"][c]) {
            f["!rows"][c].ods = l;
            var h = f["!rows"][c].hpx + "px";
            s.push('  <style:style style:name="ro' + l + `" style:family="table-row">
`), s.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + h + `"/>
`), s.push(`  </style:style>
`), ++l;
          }
      }
    }), s.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), s.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), s.push(`  </style:style>
`), s.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), s.push(` </office:automatic-styles>
`);
  };
  return function(a, o) {
    var l = [ot], f = ci({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), c = ci({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    o.bookType == "fods" ? (l.push("<office:document" + f + c + `>
`), l.push(Ql().replace(/office:document-meta/g, "office:meta"))) : l.push("<office:document-content" + f + `>
`), n(l, a), l.push(`  <office:body>
`), l.push(`    <office:spreadsheet>
`);
    for (var h = 0; h != a.SheetNames.length; ++h)
      l.push(i(a.Sheets[a.SheetNames[h]], a, h));
    return l.push(`    </office:spreadsheet>
`), l.push(`  </office:body>
`), o.bookType == "fods" ? l.push("</office:document>") : l.push("</office:document-content>"), l.join("");
  };
}();
function Uf(e, t) {
  if (t.bookType == "fods")
    return vo(e, t);
  var r = Ia(), i = "", n = [], s = [];
  return i = "mimetype", Re(r, i, "application/vnd.oasis.opendocument.spreadsheet"), i = "content.xml", Re(r, i, vo(e, t)), n.push([i, "text/xml"]), s.push([i, "ContentFile"]), i = "styles.xml", Re(r, i, Q2(e, t)), n.push([i, "text/xml"]), s.push([i, "StylesFile"]), i = "meta.xml", Re(r, i, ot + Ql(
    /*::wb, opts*/
  )), n.push([i, "text/xml"]), s.push([i, "MetadataFile"]), i = "manifest.rdf", Re(r, i, cd(
    s
    /*, opts*/
  )), n.push([i, "application/rdf+xml"]), i = "META-INF/manifest.xml", Re(r, i, ld(
    n
    /*, opts*/
  )), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function ls(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function $2(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : rr(vr(e));
}
function e_(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var i = 0; i < t.length; ++i)
        if (e[r + i] != t[i])
          continue e;
      return !0;
    }
  return !1;
}
function Wr(e) {
  var t = e.reduce(function(n, s) {
    return n + s.length;
  }, 0), r = new Uint8Array(t), i = 0;
  return e.forEach(function(n) {
    r.set(n, i), i += n.length;
  }), r;
}
function t_(e, t, r) {
  var i = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, n = r / Math.pow(10, i - 6176);
  e[t + 15] |= i >> 7, e[t + 14] |= (i & 127) << 1;
  for (var s = 0; n >= 1; ++s, n /= 256)
    e[t + s] = n & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function hi(e, t) {
  var r = t ? t[0] : 0, i = e[r] & 127;
  e:
    if (e[r++] >= 128 && (i |= (e[r] & 127) << 7, e[r++] < 128 || (i |= (e[r] & 127) << 14, e[r++] < 128) || (i |= (e[r] & 127) << 21, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), i;
}
function Ve(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function Cn(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function lt(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var i = r[0], n = hi(e, r), s = n & 7;
    n = Math.floor(n / 8);
    var a = 0, o;
    if (n == 0)
      break;
    switch (s) {
      case 0:
        {
          for (var l = r[0]; e[r[0]++] >= 128; )
            ;
          o = e.slice(l, r[0]);
        }
        break;
      case 5:
        a = 4, o = e.slice(r[0], r[0] + a), r[0] += a;
        break;
      case 1:
        a = 8, o = e.slice(r[0], r[0] + a), r[0] += a;
        break;
      case 2:
        a = hi(e, r), o = e.slice(r[0], r[0] + a), r[0] += a;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(s, " for Field ").concat(n, " at offset ").concat(i));
    }
    var f = { data: o, type: s };
    t[n] == null ? t[n] = [f] : t[n].push(f);
  }
  return t;
}
function xt(e) {
  var t = [];
  return e.forEach(function(r, i) {
    r.forEach(function(n) {
      n.data && (t.push(Ve(i * 8 + n.type)), n.type == 2 && t.push(Ve(n.data.length)), t.push(n.data));
    });
  }), Wr(t);
}
function Zt(e) {
  for (var t, r = [], i = [0]; i[0] < e.length; ) {
    var n = hi(e, i), s = lt(e.slice(i[0], i[0] + n));
    i[0] += n;
    var a = {
      id: Cn(s[1][0].data),
      messages: []
    };
    s[2].forEach(function(o) {
      var l = lt(o.data), f = Cn(l[3][0].data);
      a.messages.push({
        meta: l,
        data: e.slice(i[0], i[0] + f)
      }), i[0] += f;
    }), (t = s[3]) != null && t[0] && (a.merge = Cn(s[3][0].data) >>> 0 > 0), r.push(a);
  }
  return r;
}
function dn(e) {
  var t = [];
  return e.forEach(function(r) {
    var i = [];
    i[1] = [{ data: Ve(r.id), type: 0 }], i[2] = [], r.merge != null && (i[3] = [{ data: Ve(+!!r.merge), type: 0 }]);
    var n = [];
    r.messages.forEach(function(a) {
      n.push(a.data), a.meta[3] = [{ type: 0, data: Ve(a.data.length) }], i[2].push({ data: xt(a.meta), type: 2 });
    });
    var s = xt(i);
    t.push(Ve(s.length)), t.push(s), n.forEach(function(a) {
      return t.push(a);
    });
  }), Wr(t);
}
function r_(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], i = hi(t, r), n = []; r[0] < t.length; ) {
    var s = t[r[0]] & 3;
    if (s == 0) {
      var a = t[r[0]++] >> 2;
      if (a < 60)
        ++a;
      else {
        var o = a - 59;
        a = t[r[0]], o > 1 && (a |= t[r[0] + 1] << 8), o > 2 && (a |= t[r[0] + 2] << 16), o > 3 && (a |= t[r[0] + 3] << 24), a >>>= 0, a++, r[0] += o;
      }
      n.push(t.slice(r[0], r[0] + a)), r[0] += a;
      continue;
    } else {
      var l = 0, f = 0;
      if (s == 1 ? (f = (t[r[0]] >> 2 & 7) + 4, l = (t[r[0]++] & 224) << 3, l |= t[r[0]++]) : (f = (t[r[0]++] >> 2) + 1, s == 2 ? (l = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (l = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), n = [Wr(n)], l == 0)
        throw new Error("Invalid offset 0");
      if (l > n[0].length)
        throw new Error("Invalid offset beyond length");
      if (f >= l)
        for (n.push(n[0].slice(-l)), f -= l; f >= n[n.length - 1].length; )
          n.push(n[n.length - 1]), f -= n[n.length - 1].length;
      n.push(n[0].slice(-l, -l + f));
    }
  }
  var c = Wr(n);
  if (c.length != i)
    throw new Error("Unexpected length: ".concat(c.length, " != ").concat(i));
  return c;
}
function Qt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var i = e[r++], n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(r_(i, e.slice(r, r + n))), r += n;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return Wr(t);
}
function pn(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var i = Math.min(e.length - r, 268435455), n = new Uint8Array(4);
    t.push(n);
    var s = Ve(i), a = s.length;
    t.push(s), i <= 60 ? (a++, t.push(new Uint8Array([i - 1 << 2]))) : i <= 256 ? (a += 2, t.push(new Uint8Array([240, i - 1 & 255]))) : i <= 65536 ? (a += 3, t.push(new Uint8Array([244, i - 1 & 255, i - 1 >> 8 & 255]))) : i <= 16777216 ? (a += 4, t.push(new Uint8Array([248, i - 1 & 255, i - 1 >> 8 & 255, i - 1 >> 16 & 255]))) : i <= 4294967296 && (a += 5, t.push(new Uint8Array([252, i - 1 & 255, i - 1 >> 8 & 255, i - 1 >> 16 & 255, i - 1 >>> 24 & 255]))), t.push(e.slice(r, r + i)), a += i, n[0] = 0, n[1] = a & 255, n[2] = a >> 8 & 255, n[3] = a >> 16 & 255, r += i;
  }
  return Wr(t);
}
function js(e, t) {
  var r = new Uint8Array(32), i = ls(r), n = 12, s = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, t_(r, n, e.v), s |= 1, n += 16;
      break;
    case "b":
      r[1] = 6, i.setFloat64(n, e.v ? 1 : 0, !0), s |= 2, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, i.setUint32(n, t.indexOf(e.v), !0), s |= 8, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return i.setUint32(8, s, !0), r.slice(0, n);
}
function zs(e, t) {
  var r = new Uint8Array(32), i = ls(r), n = 12, s = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, i.setFloat64(n, e.v, !0), s |= 32, n += 8;
      break;
    case "b":
      r[2] = 6, i.setFloat64(n, e.v ? 1 : 0, !0), s |= 32, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, i.setUint32(n, t.indexOf(e.v), !0), s |= 16, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return i.setUint32(4, s, !0), r.slice(0, n);
}
function Pr(e) {
  var t = lt(e);
  return hi(t[1][0].data);
}
function n_(e, t, r) {
  var i, n, s, a;
  if (!((i = e[6]) != null && i[0]) || !((n = e[7]) != null && n[0]))
    throw "Mutation only works on post-BNC storages!";
  var o = ((a = (s = e[8]) == null ? void 0 : s[0]) == null ? void 0 : a.data) && Cn(e[8][0].data) > 0 || !1;
  if (o)
    throw "Math only works with normal offsets";
  for (var l = 0, f = ls(e[7][0].data), c = 0, h = [], u = ls(e[4][0].data), p = 0, g = [], d = 0; d < t.length; ++d) {
    if (t[d] == null) {
      f.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535);
      continue;
    }
    f.setUint16(d * 2, c, !0), u.setUint16(d * 2, p, !0);
    var v, O;
    switch (typeof t[d]) {
      case "string":
        v = js({ t: "s", v: t[d] }, r), O = zs({ t: "s", v: t[d] }, r);
        break;
      case "number":
        v = js({ t: "n", v: t[d] }, r), O = zs({ t: "n", v: t[d] }, r);
        break;
      case "boolean":
        v = js({ t: "b", v: t[d] }, r), O = zs({ t: "b", v: t[d] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[d]);
    }
    h.push(v), c += v.length, g.push(O), p += O.length, ++l;
  }
  for (e[2][0].data = Ve(l); d < e[7][0].data.length / 2; ++d)
    f.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535, !0);
  return e[6][0].data = Wr(h), e[3][0].data = Wr(g), l;
}
function i_(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var i = jt(r["!ref"]);
  i.s.r = i.s.c = 0;
  var n = !1;
  i.e.c > 9 && (n = !0, i.e.c = 9), i.e.r > 49 && (n = !0, i.e.r = 49), n && console.error("The Numbers writer is currently limited to ".concat(at(i)));
  var s = fs(r, { range: i, header: 1 }), a = ["~Sh33tJ5~"];
  s.forEach(function(U) {
    return U.forEach(function(D) {
      typeof D == "string" && a.push(D);
    });
  });
  var o = {}, l = [], f = Ke.read(t.numbers, { type: "base64" });
  f.FileIndex.map(function(U, D) {
    return [U, f.FullPaths[D]];
  }).forEach(function(U) {
    var D = U[0], F = U[1];
    if (D.type == 2 && D.name.match(/\.iwa/)) {
      var z = D.content, _e = Qt(z), Te = Zt(_e);
      Te.forEach(function(me) {
        l.push(me.id), o[me.id] = { deps: [], location: F, type: Cn(me.messages[0].meta[1][0].data) };
      });
    }
  }), l.sort(function(U, D) {
    return U - D;
  });
  var c = l.filter(function(U) {
    return U > 1;
  }).map(function(U) {
    return [U, Ve(U)];
  });
  f.FileIndex.map(function(U, D) {
    return [U, f.FullPaths[D]];
  }).forEach(function(U) {
    var D = U[0];
    if (U[1], !!D.name.match(/\.iwa/)) {
      var F = Zt(Qt(D.content));
      F.forEach(function(z) {
        z.messages.forEach(function(_e) {
          c.forEach(function(Te) {
            z.messages.some(function(me) {
              return Cn(me.meta[1][0].data) != 11006 && e_(me.data, Te[1]);
            }) && o[Te[0]].deps.push(z.id);
          });
        });
      });
    }
  });
  for (var h = Ke.find(f, o[1].location), u = Zt(Qt(h.content)), p, g = 0; g < u.length; ++g) {
    var d = u[g];
    d.id == 1 && (p = d);
  }
  var v = Pr(lt(p.messages[0].data)[1][0].data);
  for (h = Ke.find(f, o[v].location), u = Zt(Qt(h.content)), g = 0; g < u.length; ++g)
    d = u[g], d.id == v && (p = d);
  for (v = Pr(lt(p.messages[0].data)[2][0].data), h = Ke.find(f, o[v].location), u = Zt(Qt(h.content)), g = 0; g < u.length; ++g)
    d = u[g], d.id == v && (p = d);
  for (v = Pr(lt(p.messages[0].data)[2][0].data), h = Ke.find(f, o[v].location), u = Zt(Qt(h.content)), g = 0; g < u.length; ++g)
    d = u[g], d.id == v && (p = d);
  var O = lt(p.messages[0].data);
  {
    O[6][0].data = Ve(i.e.r + 1), O[7][0].data = Ve(i.e.c + 1);
    var R = Pr(O[46][0].data), y = Ke.find(f, o[R].location), P = Zt(Qt(y.content));
    {
      for (var ie = 0; ie < P.length && P[ie].id != R; ++ie)
        ;
      if (P[ie].id != R)
        throw "Bad ColumnRowUIDMapArchive";
      var de = lt(P[ie].messages[0].data);
      de[1] = [], de[2] = [], de[3] = [];
      for (var N = 0; N <= i.e.c; ++N) {
        var j = [];
        j[1] = j[2] = [{ type: 0, data: Ve(N + 420690) }], de[1].push({ type: 2, data: xt(j) }), de[2].push({ type: 0, data: Ve(N) }), de[3].push({ type: 0, data: Ve(N) });
      }
      de[4] = [], de[5] = [], de[6] = [];
      for (var W = 0; W <= i.e.r; ++W)
        j = [], j[1] = j[2] = [{ type: 0, data: Ve(W + 726270) }], de[4].push({ type: 2, data: xt(j) }), de[5].push({ type: 0, data: Ve(W) }), de[6].push({ type: 0, data: Ve(W) });
      P[ie].messages[0].data = xt(de);
    }
    y.content = pn(dn(P)), y.size = y.content.length, delete O[46];
    var Y = lt(O[4][0].data);
    {
      Y[7][0].data = Ve(i.e.r + 1);
      var q = lt(Y[1][0].data), te = Pr(q[2][0].data);
      y = Ke.find(f, o[te].location), P = Zt(Qt(y.content));
      {
        if (P[0].id != te)
          throw "Bad HeaderStorageBucket";
        var pe = lt(P[0].messages[0].data);
        for (W = 0; W < s.length; ++W) {
          var Le = lt(pe[2][0].data);
          Le[1][0].data = Ve(W), Le[4][0].data = Ve(s[W].length), pe[2][W] = { type: pe[2][0].type, data: xt(Le) };
        }
        P[0].messages[0].data = xt(pe);
      }
      y.content = pn(dn(P)), y.size = y.content.length;
      var Ae = Pr(Y[2][0].data);
      y = Ke.find(f, o[Ae].location), P = Zt(Qt(y.content));
      {
        if (P[0].id != Ae)
          throw "Bad HeaderStorageBucket";
        for (pe = lt(P[0].messages[0].data), N = 0; N <= i.e.c; ++N)
          Le = lt(pe[2][0].data), Le[1][0].data = Ve(N), Le[4][0].data = Ve(i.e.r + 1), pe[2][N] = { type: pe[2][0].type, data: xt(Le) };
        P[0].messages[0].data = xt(pe);
      }
      y.content = pn(dn(P)), y.size = y.content.length;
      var ke = Pr(Y[4][0].data);
      (function() {
        for (var U = Ke.find(f, o[ke].location), D = Zt(Qt(U.content)), F, z = 0; z < D.length; ++z) {
          var _e = D[z];
          _e.id == ke && (F = _e);
        }
        var Te = lt(F.messages[0].data);
        {
          Te[3] = [];
          var me = [];
          a.forEach(function(S, A) {
            me[1] = [{ type: 0, data: Ve(A) }], me[2] = [{ type: 0, data: Ve(1) }], me[3] = [{ type: 2, data: $2(S) }], Te[3].push({ type: 2, data: xt(me) });
          });
        }
        F.messages[0].data = xt(Te);
        var ue = dn(D), Ue = pn(ue);
        U.content = Ue, U.size = U.content.length;
      })();
      var ye = lt(Y[3][0].data);
      {
        var Ne = ye[1][0];
        delete ye[2];
        var Ye = lt(Ne.data);
        {
          var pt = Pr(Ye[2][0].data);
          (function() {
            for (var U = Ke.find(f, o[pt].location), D = Zt(Qt(U.content)), F, z = 0; z < D.length; ++z) {
              var _e = D[z];
              _e.id == pt && (F = _e);
            }
            var Te = lt(F.messages[0].data);
            {
              delete Te[6], delete ye[7];
              var me = new Uint8Array(Te[5][0].data);
              Te[5] = [];
              for (var ue = 0, Ue = 0; Ue <= i.e.r; ++Ue) {
                var S = lt(me);
                ue += n_(S, s[Ue], a), S[1][0].data = Ve(Ue), Te[5].push({ data: xt(S), type: 2 });
              }
              Te[1] = [{ type: 0, data: Ve(i.e.c + 1) }], Te[2] = [{ type: 0, data: Ve(i.e.r + 1) }], Te[3] = [{ type: 0, data: Ve(ue) }], Te[4] = [{ type: 0, data: Ve(i.e.r + 1) }];
            }
            F.messages[0].data = xt(Te);
            var A = dn(D), I = pn(A);
            U.content = I, U.size = U.content.length;
          })();
        }
        Ne.data = xt(Ye);
      }
      Y[3][0].data = xt(ye);
    }
    O[4][0].data = xt(Y);
  }
  p.messages[0].data = xt(O);
  var nt = dn(u), C = pn(nt);
  return h.content = C, h.size = h.content.length, f;
}
function s_(e) {
  return function(r) {
    for (var i = 0; i != e.length; ++i) {
      var n = e[i];
      r[n[0]] === void 0 && (r[n[0]] = n[1]), n[2] === "n" && (r[n[0]] = Number(r[n[0]]));
    }
  };
}
function Ja(e) {
  s_([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function a_(e, t) {
  return t.bookType == "ods" ? Uf(e, t) : t.bookType == "numbers" ? i_(e, t) : t.bookType == "xlsb" ? o_(e, t) : l_(e, t);
}
function o_(e, t) {
  mn = 1024, e && !e.SSF && (e.SSF = Ut(rt)), e && e.SSF && (Cs(), Ss(e.SSF), t.revssf = As(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, ei ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", i = Tf.indexOf(t.bookType) > -1, n = Jl();
  Ja(t = t || {});
  var s = Ia(), a = "", o = 0;
  if (t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), a = "docProps/core.xml", Re(s, a, $l(e.Props, t)), n.coreprops.push(a), Ge(t.rels, 2, a, Be.CORE_PROPS), a = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], f = 0; f < e.SheetNames.length; ++f)
        (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f]);
      e.Props.SheetNames = l;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, Re(s, a, tf(e.Props)), n.extprops.push(a), Ge(t.rels, 3, a, Be.EXT_PROPS), e.Custprops !== e.Props && Et(e.Custprops || {}).length > 0 && (a = "docProps/custom.xml", Re(s, a, rf(e.Custprops)), n.custprops.push(a), Ge(t.rels, 4, a, Be.CUST_PROPS)), o = 1; o <= e.SheetNames.length; ++o) {
    var c = { "!id": {} }, h = e.Sheets[e.SheetNames[o - 1]], u = (h || {})["!type"] || "sheet";
    switch (u) {
      case "chart":
      default:
        a = "xl/worksheets/sheet" + o + "." + r, Re(s, a, c2(o - 1, a, t, e, c)), n.sheets.push(a), Ge(t.wbrels, -1, "worksheets/sheet" + o + "." + r, Be.WS[0]);
    }
    if (h) {
      var p = h["!comments"], g = !1, d = "";
      p && p.length > 0 && (d = "xl/comments" + o + "." + r, Re(s, d, d2(p, d)), n.comments.push(d), Ge(c, -1, "../comments" + o + "." + r, Be.CMNT), g = !0), h["!legacy"] && g && Re(s, "xl/drawings/vmlDrawing" + o + ".vml", vf(o, h["!comments"])), delete h["!comments"], delete h["!legacy"];
    }
    c["!id"].rId1 && Re(s, Zl(a), wn(c));
  }
  return t.Strings != null && t.Strings.length > 0 && (a = "xl/sharedStrings." + r, Re(s, a, u2(t.Strings, a, t)), n.strs.push(a), Ge(t.wbrels, -1, "sharedStrings." + r, Be.SST)), a = "xl/workbook." + r, Re(s, a, f2(e, a)), n.workbooks.push(a), Ge(t.rels, 1, a, Be.WB), a = "xl/theme/theme1.xml", Re(s, a, gf(e.Themes, t)), n.themes.push(a), Ge(t.wbrels, -1, "theme/theme1.xml", Be.THEME), a = "xl/styles." + r, Re(s, a, h2(e, a, t)), n.styles.push(a), Ge(t.wbrels, -1, "styles." + r, Be.STY), e.vbaraw && i && (a = "xl/vbaProject.bin", Re(s, a, e.vbaraw), n.vba.push(a), Ge(t.wbrels, -1, "vbaProject.bin", Be.VBA)), a = "xl/metadata." + r, Re(s, a, p2(a)), n.metadata.push(a), Ge(t.wbrels, -1, "metadata." + r, Be.XLMETA), Re(s, "[Content_Types].xml", ql(n, t)), Re(s, "_rels/.rels", wn(t.rels)), Re(s, "xl/_rels/workbook." + r + ".rels", wn(t.wbrels)), delete t.revssf, delete t.ssf, s;
}
function l_(e, t) {
  mn = 1024, e && !e.SSF && (e.SSF = Ut(rt)), e && e.SSF && (Cs(), Ss(e.SSF), t.revssf = As(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, ei ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", i = Tf.indexOf(t.bookType) > -1, n = Jl();
  Ja(t = t || {});
  var s = Ia(), a = "", o = 0;
  if (t.cellXfs = [], Hr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), a = "docProps/core.xml", Re(s, a, $l(e.Props, t)), n.coreprops.push(a), Ge(t.rels, 2, a, Be.CORE_PROPS), a = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], f = 0; f < e.SheetNames.length; ++f)
        (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f]);
      e.Props.SheetNames = l;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, Re(s, a, tf(e.Props)), n.extprops.push(a), Ge(t.rels, 3, a, Be.EXT_PROPS), e.Custprops !== e.Props && Et(e.Custprops || {}).length > 0 && (a = "docProps/custom.xml", Re(s, a, rf(e.Custprops)), n.custprops.push(a), Ge(t.rels, 4, a, Be.CUST_PROPS));
  var c = ["SheetJ5"];
  for (t.tcid = 0, o = 1; o <= e.SheetNames.length; ++o) {
    var h = { "!id": {} }, u = e.Sheets[e.SheetNames[o - 1]], p = (u || {})["!type"] || "sheet";
    switch (p) {
      case "chart":
      default:
        a = "xl/worksheets/sheet" + o + "." + r, Re(s, a, Rf(o - 1, t, e, h)), n.sheets.push(a), Ge(t.wbrels, -1, "worksheets/sheet" + o + "." + r, Be.WS[0]);
    }
    if (u) {
      var g = u["!comments"], d = !1, v = "";
      if (g && g.length > 0) {
        var O = !1;
        g.forEach(function(R) {
          R[1].forEach(function(y) {
            y.T == !0 && (O = !0);
          });
        }), O && (v = "xl/threadedComments/threadedComment" + o + "." + r, Re(s, v, Up(g, c, t)), n.threadedcomments.push(v), Ge(h, -1, "../threadedComments/threadedComment" + o + "." + r, Be.TCMNT)), v = "xl/comments" + o + "." + r, Re(s, v, Ef(g)), n.comments.push(v), Ge(h, -1, "../comments" + o + "." + r, Be.CMNT), d = !0;
      }
      u["!legacy"] && d && Re(s, "xl/drawings/vmlDrawing" + o + ".vml", vf(o, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    h["!id"].rId1 && Re(s, Zl(a), wn(h));
  }
  return t.Strings != null && t.Strings.length > 0 && (a = "xl/sharedStrings." + r, Re(s, a, hf(t.Strings, t)), n.strs.push(a), Ge(t.wbrels, -1, "sharedStrings." + r, Be.SST)), a = "xl/workbook." + r, Re(s, a, If(e)), n.workbooks.push(a), Ge(t.rels, 1, a, Be.WB), a = "xl/theme/theme1.xml", Re(s, a, gf(e.Themes, t)), n.themes.push(a), Ge(t.wbrels, -1, "theme/theme1.xml", Be.THEME), a = "xl/styles." + r, Re(s, a, xf(e, t)), n.styles.push(a), Ge(t.wbrels, -1, "styles." + r, Be.STY), e.vbaraw && i && (a = "xl/vbaProject.bin", Re(s, a, e.vbaraw), n.vba.push(a), Ge(t.wbrels, -1, "vbaProject.bin", Be.VBA)), a = "xl/metadata." + r, Re(s, a, _f()), n.metadata.push(a), Ge(t.wbrels, -1, "metadata." + r, Be.XLMETA), c.length > 1 && (a = "xl/persons/person.xml", Re(s, a, Wp(c)), n.people.push(a), Ge(t.wbrels, -1, "persons/person.xml", Be.PEOPLE)), Re(s, "[Content_Types].xml", ql(n, t)), Re(s, "_rels/.rels", wn(t.rels)), Re(s, "xl/_rels/workbook." + r + ".rels", wn(t.wbrels)), delete t.revssf, delete t.ssf, s;
}
function f_(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = Ar(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Wf(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return xi(t.file, Ke.write(e, { type: We ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return Ke.write(e, t);
}
function c_(e, t) {
  var r = Ut(t || {}), i = a_(e, r);
  return h_(i, r);
}
function h_(e, t) {
  var r = {}, i = We ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = i;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = i;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var n = e.FullPaths ? Ke.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof n == "string") {
    if (t.type == "binary" || t.type == "base64")
      return n;
    n = new Uint8Array(ws(n));
  }
  return t.password && typeof encrypt_agile < "u" ? Wf(encrypt_agile(n, t.password), t) : t.type === "file" ? xi(t.file, n) : t.type == "string" ? qn(
    /*::(*/
    n
    /*:: :any)*/
  ) : n;
}
function u_(e, t) {
  var r = t || {}, i = O2(e, r);
  return Wf(i, r);
}
function ur(e, t, r) {
  r || (r = "");
  var i = r + e;
  switch (t.type) {
    case "base64":
      return li(vr(i));
    case "binary":
      return vr(i);
    case "string":
      return e;
    case "file":
      return xi(t.file, i, "utf8");
    case "buffer":
      return We ? Or(i, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(i) : ur(i, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function d_(e, t) {
  switch (t.type) {
    case "base64":
      return li(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return xi(t.file, e, "binary");
    case "buffer":
      return We ? Or(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function ki(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", i = 0; i < e.length; ++i)
        r += String.fromCharCode(e[i]);
      return t.type == "base64" ? li(r) : t.type == "string" ? qn(r) : r;
    case "file":
      return xi(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Hf(e, t) {
  Wu(), Qg(e);
  var r = Ut(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var i = Hf(e, r);
    return r.type = "array", ws(i);
  }
  var n = 0;
  if (r.sheet && (typeof r.sheet == "number" ? n = r.sheet : n = e.SheetNames.indexOf(r.sheet), !e.SheetNames[n]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return ur(y2(e, r), r);
    case "slk":
    case "sylk":
      return ur(Jd.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "htm":
    case "html":
      return ur(Mf(e.Sheets[e.SheetNames[n]], r), r);
    case "txt":
      return d_(Vf(e.Sheets[e.SheetNames[n]], r), r);
    case "csv":
      return ur(qa(e.Sheets[e.SheetNames[n]], r), r, "\uFEFF");
    case "dif":
      return ur(qd.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "dbf":
      return ki(Yd.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "prn":
      return ur(Zd.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "rtf":
      return ur(ip.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "eth":
      return ur(cf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "fods":
      return ur(Uf(e, r), r);
    case "wk1":
      return ki(ho.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
    case "wk3":
      return ki(ho.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), ki(kf(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), u_(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return c_(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function p_(e, t, r, i, n, s, a, o) {
  var l = vt(r), f = o.defval, c = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"), h = !0, u = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        u.__rowNum__ = r;
      }
    else
      u.__rowNum__ = r;
  if (!a || e[r])
    for (var p = t.s.c; p <= t.e.c; ++p) {
      var g = a ? e[r][p] : e[i[p] + l];
      if (g === void 0 || g.t === void 0) {
        if (f === void 0)
          continue;
        s[p] != null && (u[s[p]] = f);
        continue;
      }
      var d = g.v;
      switch (g.t) {
        case "z":
          if (d == null)
            break;
          continue;
        case "e":
          d = d == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + g.t);
      }
      if (s[p] != null) {
        if (d == null)
          if (g.t == "e" && d === null)
            u[s[p]] = null;
          else if (f !== void 0)
            u[s[p]] = f;
          else if (c && d === null)
            u[s[p]] = null;
          else
            continue;
        else
          u[s[p]] = c && (g.t !== "n" || g.t === "n" && o.rawNumbers !== !1) ? d : yr(g, d, o);
        d != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function fs(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, i = 0, n = 1, s = [], a = 0, o = "", l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, f = t || {}, c = f.range != null ? f.range : e["!ref"];
  switch (f.header === 1 ? i = 1 : f.header === "A" ? i = 2 : Array.isArray(f.header) ? i = 3 : f.header == null && (i = 0), typeof c) {
    case "string":
      l = Ze(c);
      break;
    case "number":
      l = Ze(e["!ref"]), l.s.r = c;
      break;
    default:
      l = c;
  }
  i > 0 && (n = 0);
  var h = vt(l.s.r), u = [], p = [], g = 0, d = 0, v = Array.isArray(e), O = l.s.r, R = 0, y = {};
  v && !e[O] && (e[O] = []);
  var P = f.skipHidden && e["!cols"] || [], ie = f.skipHidden && e["!rows"] || [];
  for (R = l.s.c; R <= l.e.c; ++R)
    if (!(P[R] || {}).hidden)
      switch (u[R] = Ft(R), r = v ? e[O][R] : e[u[R] + h], i) {
        case 1:
          s[R] = R - l.s.c;
          break;
        case 2:
          s[R] = u[R];
          break;
        case 3:
          s[R] = f.header[R - l.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), o = a = yr(r, null, f), d = y[a] || 0, !d)
            y[a] = 1;
          else {
            do
              o = a + "_" + d++;
            while (y[o]);
            y[a] = d, y[o] = 1;
          }
          s[R] = o;
      }
  for (O = l.s.r + n; O <= l.e.r; ++O)
    if (!(ie[O] || {}).hidden) {
      var de = p_(e, l, O, u, i, s, v, f);
      (de.isempty === !1 || (i === 1 ? f.blankrows !== !1 : f.blankrows)) && (p[g++] = de.row);
    }
  return p.length = g, p;
}
var Eo = /"/g;
function x_(e, t, r, i, n, s, a, o) {
  for (var l = !0, f = [], c = "", h = vt(r), u = t.s.c; u <= t.e.c; ++u)
    if (i[u]) {
      var p = o.dense ? (e[r] || [])[u] : e[i[u] + h];
      if (p == null)
        c = "";
      else if (p.v != null) {
        l = !1, c = "" + (o.rawNumbers && p.t == "n" ? p.v : yr(p, null, o));
        for (var g = 0, d = 0; g !== c.length; ++g)
          if ((d = c.charCodeAt(g)) === n || d === s || d === 34 || o.forceQuotes) {
            c = '"' + c.replace(Eo, '""') + '"';
            break;
          }
        c == "ID" && (c = '"ID"');
      } else
        p.f != null && !p.F ? (l = !1, c = "=" + p.f, c.indexOf(",") >= 0 && (c = '"' + c.replace(Eo, '""') + '"')) : c = "";
      f.push(c);
    }
  return o.blankrows === !1 && l ? null : f.join(a);
}
function qa(e, t) {
  var r = [], i = t ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var n = Ze(e["!ref"]), s = i.FS !== void 0 ? i.FS : ",", a = s.charCodeAt(0), o = i.RS !== void 0 ? i.RS : `
`, l = o.charCodeAt(0), f = new RegExp((s == "|" ? "\\|" : s) + "+$"), c = "", h = [];
  i.dense = Array.isArray(e);
  for (var u = i.skipHidden && e["!cols"] || [], p = i.skipHidden && e["!rows"] || [], g = n.s.c; g <= n.e.c; ++g)
    (u[g] || {}).hidden || (h[g] = Ft(g));
  for (var d = 0, v = n.s.r; v <= n.e.r; ++v)
    (p[v] || {}).hidden || (c = x_(e, n, v, h, a, l, s, i), c != null && (i.strip && (c = c.replace(f, "")), (c || i.blankrows !== !1) && r.push((d++ ? o : "") + c)));
  return delete i.dense, r.join("");
}
function Vf(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = qa(e, t);
  return r;
}
function m_(e) {
  var t = "", r, i = "";
  if (e == null || e["!ref"] == null)
    return [];
  var n = Ze(e["!ref"]), s = "", a = [], o, l = [], f = Array.isArray(e);
  for (o = n.s.c; o <= n.e.c; ++o)
    a[o] = Ft(o);
  for (var c = n.s.r; c <= n.e.r; ++c)
    for (s = vt(c), o = n.s.c; o <= n.e.c; ++o)
      if (t = a[o] + s, r = f ? (e[c] || [])[o] : e[t], i = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          i = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          i = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            i = "" + r.v;
          else if (r.t == "b")
            i = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            i = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? i = "'" + r.v : i = "" + r.v;
          }
        }
        l[l.length] = t + "=" + i;
      }
  return l;
}
function Gf(e, t, r) {
  var i = r || {}, n = +!i.skipHeader, s = e || {}, a = 0, o = 0;
  if (s && i.origin != null)
    if (typeof i.origin == "number")
      a = i.origin;
    else {
      var l = typeof i.origin == "string" ? ut(i.origin) : i.origin;
      a = l.r, o = l.c;
    }
  var f, c = { s: { c: 0, r: 0 }, e: { c: o, r: a + t.length - 1 + n } };
  if (s["!ref"]) {
    var h = Ze(s["!ref"]);
    c.e.c = Math.max(c.e.c, h.e.c), c.e.r = Math.max(c.e.r, h.e.r), a == -1 && (a = h.e.r + 1, c.e.r = a + t.length - 1 + n);
  } else
    a == -1 && (a = 0, c.e.r = t.length - 1 + n);
  var u = i.header || [], p = 0;
  t.forEach(function(d, v) {
    Et(d).forEach(function(O) {
      (p = u.indexOf(O)) == -1 && (u[p = u.length] = O);
      var R = d[O], y = "z", P = "", ie = Xe({ c: o + p, r: a + v + n });
      f = ui(s, ie), R && typeof R == "object" && !(R instanceof Date) ? s[ie] = R : (typeof R == "number" ? y = "n" : typeof R == "boolean" ? y = "b" : typeof R == "string" ? y = "s" : R instanceof Date ? (y = "d", i.cellDates || (y = "n", R = Bt(R)), P = i.dateNF || rt[14]) : R === null && i.nullError && (y = "e", R = 0), f ? (f.t = y, f.v = R, delete f.w, delete f.R, P && (f.z = P)) : s[ie] = f = { t: y, v: R }, P && (f.z = P));
    });
  }), c.e.c = Math.max(c.e.c, o + u.length - 1);
  var g = vt(a);
  if (n)
    for (p = 0; p < u.length; ++p)
      s[Ft(p + o) + g] = { t: "s", v: u[p] };
  return s["!ref"] = at(c), s;
}
function g_(e, t) {
  return Gf(null, e, t);
}
function ui(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var i = ut(t);
      return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? ui(e, Xe(t)) : ui(e, Xe({ r: t, c: r || 0 }));
}
function __(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function v_() {
  return { SheetNames: [], Sheets: {} };
}
function E_(e, t, r, i) {
  var n = 1;
  if (!r)
    for (; n <= 65535 && e.SheetNames.indexOf(r = "Sheet" + n) != -1; ++n, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (i && e.SheetNames.indexOf(r) >= 0) {
    var s = r.match(/(^.*?)(\d+)$/);
    n = s && +s[2] || 0;
    var a = s && s[1] || r;
    for (++n; n <= 65535 && e.SheetNames.indexOf(r = a + n) != -1; ++n)
      ;
  }
  if (Nf(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function T_(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var i = __(e, t);
  switch (e.Workbook.Sheets[i] || (e.Workbook.Sheets[i] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[i].Hidden = r;
}
function w_(e, t) {
  return e.z = t, e;
}
function jf(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function S_(e, t, r) {
  return jf(e, "#" + t, r);
}
function C_(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function A_(e, t, r, i) {
  for (var n = typeof t != "string" ? t : Ze(t), s = typeof t == "string" ? t : at(t), a = n.s.r; a <= n.e.r; ++a)
    for (var o = n.s.c; o <= n.e.c; ++o) {
      var l = ui(e, a, o);
      l.t = "n", l.F = s, delete l.v, a == n.s.r && o == n.s.c && (l.f = r, i && (l.D = !0));
    }
  return e;
}
var Xs = {
  encode_col: Ft,
  encode_row: vt,
  encode_cell: Xe,
  encode_range: at,
  decode_col: Ua,
  decode_row: Ba,
  split_cell: H1,
  decode_cell: ut,
  decode_range: jt,
  format_cell: yr,
  sheet_add_aoa: Gl,
  sheet_add_json: Gf,
  sheet_add_dom: Lf,
  aoa_to_sheet: Pn,
  json_to_sheet: g_,
  table_to_sheet: Bf,
  table_to_book: q2,
  sheet_to_csv: qa,
  sheet_to_txt: Vf,
  sheet_to_json: fs,
  sheet_to_html: Mf,
  sheet_to_formulae: m_,
  sheet_to_row_object_array: fs,
  sheet_get_cell: ui,
  book_new: v_,
  book_append_sheet: E_,
  book_set_sheet_visibility: T_,
  cell_set_number_format: w_,
  cell_set_hyperlink: jf,
  cell_set_internal_link: S_,
  cell_add_comment: C_,
  sheet_set_array_formula: A_,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
const y_ = `.smart-table-main[data-v-a16dce74]{height:fit-content;padding:0 0 98px;position:relative}.smart-table__wrapper[data-v-a16dce74]{color:#2d353c;overflow-x:auto;padding:0 12px 48px;position:relative;width:calc(100% - 24px);z-index:100}thead[data-v-a16dce74]{position:sticky;top:0}.smart-table[data-v-a16dce74]{width:100%;position:relative}table[data-v-a16dce74]{border-collapse:collapse}th[data-v-a16dce74]{background-color:#e1e5e8;outline:1px solid white;background:radial-gradient(at top left,#cdd1d4,#e1e5e8)}th[data-v-a16dce74],td[data-v-a16dce74]{padding:3px 8px}tr[data-v-a16dce74]:nth-child(even){background-color:#f3f5f7}tr td[data-v-a16dce74]{outline:1px solid white}.th-numeric[data-v-a16dce74]{text-align:right;font-variant-numeric:tabular-nums}.th-filter[data-v-a16dce74]{align-items:center;display:flex;flex-direction:row;gap:6px;justify-content:center;position:relative}.th-fusion[data-v-a16dce74]{align-items:center;background:radial-gradient(at top left,#cdd1d4,#e1e5e8);display:flex;height:83px;justify-content:center;left:0px;outline:1px solid white;position:absolute;top:0px;width:100%;z-index:10}button[data-v-a16dce74]{align-items:center;cursor:pointer;display:flex;justify-content:center;width:32px}input[data-v-a16dce74]{padding:0 6px;font-family:Satoshi}button[data-v-a16dce74],input[data-v-a16dce74]{border-radius:6px;border:1px solid grey;height:32px}button[data-v-a16dce74]:hover,button[data-v-a16dce74]:focus,input[data-v-a16dce74]:hover,input[data-v-a16dce74]:focus{outline:3px solid rgba(128,128,128,.432)}button.clicked[data-v-a16dce74]{animation:clicked-a16dce74 .15s ease-in-out}button[disabled][data-v-a16dce74]{cursor:not-allowed}button[disabled][data-v-a16dce74]:focus,button[disabled][data-v-a16dce74]:hover{outline:none}button.th-reset[data-v-a16dce74]:not(:disabled){background:radial-gradient(at top,#f19a71,#F17171);border:1px solid #F17171;color:#fff}button.th-reset[data-v-a16dce74]:not(:disabled):hover,button.th-reset[data-v-a16dce74]:not(:disabled):focus{outline:3px solid #f171717e}[data-is-open=false][data-v-a16dce74]{transform:scale(0)}.th-dropdown[data-is-open=true][data-v-a16dce74]{animation:open-dropdown-a16dce74 .2s ease-in}.th-dropdown[data-is-open=false][data-v-a16dce74]{animation:close-dropdown-a16dce74 .2s ease-in}.th-dropdown[data-v-a16dce74]{align-items:center;background:radial-gradient(at top left,#d2d7db,#e1e5e8);border-radius:8px;border:1px solid white;box-shadow:0 6px 12px -6px #00000080;display:flex;flex-direction:column;justify-content:flex-start;left:0;max-width:300px;min-width:150px;padding:24px 12px 12px;position:absolute;top:calc(100% + 12px)}.th-option[data-v-a16dce74]{border-radius:6px;cursor:pointer;padding:2px 6px;text-align:left;-webkit-user-select:none;user-select:none;width:100%;font-weight:400}.th-option[data-v-a16dce74]:hover{background-color:#fafafa;box-shadow:0 3px 6px -3px #00000080;z-index:1}.th-icon-green[data-v-a16dce74]{text-shadow:0 2px 4px rgba(0,128,0,.486)}.th-icon-red[data-v-a16dce74]{text-shadow:0 2px 4px rgba(255,0,0,.486)}button.close-dropdown[data-v-a16dce74],button.close-chart-modal[data-v-a16dce74]{align-items:center;background:transparent;border-radius:50%;border:none;color:#2d353c;display:flex;height:20px;padding:2px;position:absolute;right:6px;top:6px;width:20px}button.close-dropdown[data-v-a16dce74]:hover,button.close-dropdown[data-v-a16dce74]:focus,button.close-chart-modal[data-v-a16dce74]:hover,button.close-char-modal[data-v-a16dce74]:focus{outline:3px solid #2d353c71}.th-button-active[data-v-a16dce74]{background:radial-gradient(at top,#968bf1,#6376DD);color:#fff}.th-button-active[data-v-a16dce74]:hover,.th-button-active[data-v-a16dce74]:focus{outline:3px solid #6375dd7a}.th-date[data-v-a16dce74]{align-items:center;display:flex;flex-direction:row;gap:6px;justify-content:center;width:100%}.date-wrapper--inputs[data-v-a16dce74]{align-items:center;display:flex;flex-direction:column;gap:6px;justify-content:center;width:100%}.date-wrapper--button[data-v-a16dce74]{display:flex;gap:3px}input[type=date][data-v-a16dce74]{border-radius:4px;font-size:12px;font-variant-numeric:tabular-nums;height:20px!important;width:100px}.date-fieldset[data-v-a16dce74]{align-items:center;display:flex;flex-direction:row;gap:6px;justify-content:center;width:100%}.date-fieldset label[data-v-a16dce74]{font-size:12px;font-weight:400}@keyframes clicked-a16dce74{0%{transform:scale(.9)}90%{transform:scale(1.03)}to{transform:scale(1)}}td.td-numeric[data-v-a16dce74]{cursor:pointer}td.smart-td-selected-neighbor[data-v-a16dce74]{background:radial-gradient(at top left,#82ecc41e,#63dd821e)}td.smart-td-selected[data-v-a16dce74]{background:radial-gradient(at top left,#9986ec5b,#6375dd5b)}td.smart-td-selected-first[data-v-a16dce74]{box-shadow:3px 0 #6376dd inset}td.smart-td-selected-last[data-v-a16dce74]{box-shadow:-3px 0 #6376dd inset}.td-selector-info[data-v-a16dce74]{align-items:center;background:linear-gradient(to right,transparent,#e1e5e8);border-radius:0 0 6px 6px;bottom:76px;display:flex;font-size:14px;justify-content:flex-end;min-height:20px;padding:2px 4px 2px 2px;position:absolute;right:0;text-align:right;width:100%;z-index:1}.td-selector-info--active[data-v-a16dce74]{background:linear-gradient(to right,transparent,#6375dd4f)}button.td-selector-info-reset[data-v-a16dce74]{background:transparent;border:none;color:#f17171;height:14px;margin-left:24px;padding:0;width:14px}button.td-selector-info-reset[data-v-a16dce74]:hover,button.td-selector-info-reset[data-v-a16dce74]:focus{outline:3px solid #f171717e}.format-num[data-v-a16dce74]{font-variant-numeric:tabular-nums}.td-selector-icon[data-v-a16dce74]{margin-bottom:-5px;margin-right:6px}.smart-table-pagination[data-v-a16dce74]{align-items:center;bottom:24px;display:flex;flex-direction:row;gap:12px;height:40px;justify-content:center;position:absolute;width:100%;z-index:1}button.smart-table-navigation[data-v-a16dce74]{height:36px;padding:1px;width:36px}.smart-table-navigation-indicator[data-v-a16dce74]{background:linear-gradient(to right,#6375dd88,#6376DD);border-radius:6px;bottom:70px;height:6px;position:absolute;transition:all .1s ease-in-out}.smart-table-page-scroller-wrapper[data-v-a16dce74]{align-items:center;display:flex;flex-direction:column;justify-content:center}input.smart-table-page-scroller[data-v-a16dce74]{cursor:pointer;height:24px;padding:0}.smart-table-paginator[data-v-a16dce74]{position:absolute;bottom:0;z-index:2;left:12px;display:flex;flex-direction:row;gap:6px;font-size:14px;justify-content:center;align-items:center;width:calc(100% - 24px)}.smart-table-paginator select[data-v-a16dce74]{border-radius:3px}.smart-table-size-warning[data-v-a16dce74]{align-items:center;bottom:-24px;color:#f17171;display:flex;flex-direction:row;flex-wrap:wrap;font-size:12px;gap:6px;justify-content:center;position:absolute;text-align:center;width:100%}th.smart-table-col-selector[data-v-a16dce74]{height:12px;background:#e1e5e8}.col-selector[data-v-a16dce74]{align-items:center;cursor:pointer;display:flex;height:100%;justify-content:center;width:100%}th.col-selector--selected[data-v-a16dce74]{background:radial-gradient(at top left,#9586eb,#6376DD);color:#fff}th.col-selector--selected div[data-v-a16dce74]{background:transparent;color:#fff}.smart-table-chart-modal[data-v-a16dce74]{align-items:center;background:radial-gradient(at top left,#e1e5e8,#eceef0);border-radius:8px;border:1px solid white;box-shadow:0 6px 12px -6px #0000004d;display:flex;flex-direction:column;justify-content:center;min-height:200px;min-width:300px;max-width:800px;overflow:hidden;padding:12px;position:fixed;resize:horizontal;-webkit-user-select:none;user-select:none;z-index:10000}.smart-table-chart-svg[data-v-a16dce74]{background:white;border-radius:6px;margin-bottom:12px;overflow:visible;padding:12px;width:calc(100% - 24px);box-shadow:0 2px 4px -2px #80808099}.smart-table-donut-chart[data-v-a16dce74]{background:white;border-radius:6px;box-shadow:0 2px 4px -2px #80808099}th.invisible-cell[data-v-a16dce74]{background:white;border-right:2px solid white}td.smart-table-td-iteration[data-v-a16dce74]{background:#E1E5E8;font-size:12px;font-variant-numeric:tabular-nums;text-align:right;-webkit-user-select:none;user-select:none}.chart-trend[data-v-a16dce74]{color:gray;font-size:12px;padding-left:12px}.chart-modal-options[data-v-a16dce74]{bottom:12px;display:flex;flex-direction:row;gap:8px;position:absolute;right:24px}.chart-modal-options button[data-v-a16dce74]{height:24px;padding:3px;width:24px}.chart-modal-options button.is-active-chart[data-v-a16dce74]{background:radial-gradient(at top,#968bf1,#6376DD);border:1px solid #6376DD;color:#fff}.th-range-filter[data-v-a16dce74]{display:flex;align-items:center;justify-content:center;gap:2px;flex-direction:column}.th-range-filter input[data-v-a16dce74]{height:20px;width:60px;font-variant-numeric:tabular-nums;font-size:12px}.th-range-filter label[data-v-a16dce74]{font-size:12px;font-weight:400;margin-bottom:-3px}.smart-table-fieldset-wrapper[data-v-a16dce74]{display:flex;flex-direction:row;flex-wrap:wrap;gap:24px;margin-bottom:12px}.smart-table-fieldset[data-v-a16dce74]{border-radius:6px;margin-bottom:24px;border:1px solid white}.smart-table-fieldset legend[data-v-a16dce74]{color:gray}.smart-table-fieldset-option[data-v-a16dce74]{display:flex;align-items:center}.smart-table-fieldset-option input[data-v-a16dce74]{height:14px;width:14px;border-radius:50%}button.smart-table-generate-donut[data-v-a16dce74]{align-items:center;background:radial-gradient(at top,#968bf1,#6376DD);color:#fff;display:flex;gap:3px;justify-content:center;margin:24px auto 12px;padding-left:12px;padding-right:12px;width:fit-content}input[type=radio][data-v-a16dce74],input[type=range][data-v-a16dce74]{accent-color:#6376DD}button.smart-table-generate-donut[disabled][data-v-a16dce74]{opacity:.5}.smart-table-donut-legend[data-v-a16dce74]{align-items:center;column-gap:12px;display:flex;flex-wrap:wrap;font-size:12px;justify-content:center;margin:0 auto;max-width:400px;padding-bottom:36px}.smart-table-donut-legend-item[data-v-a16dce74]{align-items:center;display:flex;flex-direction:row;gap:3px;justify-content:center}.smart-table-donut-label[data-v-a16dce74]{align-items:center;display:flex;flex-direction:column;font-size:4px;height:100%;justify-content:center;text-align:center;width:100%}.smart-table-donut-label-name[data-v-a16dce74]{font-size:3px;line-height:3px}td[data-v-a16dce74]:focus{outline:3px solid #202d7470}.smart-table-export-hub[data-v-a16dce74]{left:5px;position:absolute;top:0;z-index:1001}.smart-table-export-hub-dropdown[data-v-a16dce74]{position:absolute;top:40px;left:0px;padding:24px;background:radial-gradient(at top left,#d2d7db,#e1e5e8);border-radius:8px;border:1px solid white;box-shadow:0 6px 12px -6px #00000080;transform:scale(0);opacity:0}.smart-table-export-hub-dropdown[data-is-open=true][data-v-a16dce74]{animation:open-dropdown-a16dce74 .2s ease-in forwards}.smart-table-export-hub-dropdown[data-is-open=false][data-v-a16dce74]{animation:close-dropdown-a16dce74 .2s ease-in}.smart-table-export-hub-options[data-v-a16dce74]{margin-top:12px;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center}.smart-table-export-hub-options button[data-v-a16dce74]{width:fit-content;display:flex;align-items:center;justify-content:center;gap:3px;min-width:130px}.smart-table-export-hub-option-wrapper[data-v-a16dce74]{align-items:center;display:flex;flex-direction:row;gap:12px;justify-content:flex-start}.smart-table-export-hub-option-wrapper .label[data-v-a16dce74]{font-size:12px;line-height:12px;margin-bottom:6px;width:100px}.td-nan[data-v-a16dce74]{background:#F17171}.td-has-nan[data-v-a16dce74],.th-has-nan[data-v-a16dce74]{background:#F17171;min-width:100px;color:#fff}@keyframes open-dropdown-a16dce74{0%{transform:scaleY(.9);opacity:0}50%{transform:scaleY(1.05);opacity:1}to{transform:scale(1);opacity:1}}@keyframes close-dropdown-a16dce74{0%{transform:scale(1.05);opacity:1}to{transform:scale(0);opacity:0}}
`, F_ = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, n] of t)
    r[i] = n;
  return r;
}, O_ = {
  name: "SmartTable",
  props: {
    locale: {
      type: String,
      default: "fr-fr"
    },
    header: {
      /** Defines the shape of table columns
       *  Datastructure is an array of objects with one object for each column:
       * 
       *  [
       *      {
       *          name: string; (displayed name)
       *          type: string; "text" | "numeric" | "date"
       *          average: boolean;
       *          decimals: number | undefined;
       *          sum: boolean; (if true, will display the sum in the table head)
       *          isSort: boolean; (if true, will show a sort button in the table head)
       *          isSearch: boolean; (if true, will show a search input in the table head)
       *          isMultiselect: boolean; (if true, will build a dropdown based on categories provided in the body at this column index)
       *          isPercentage: boolean; (if true, will push to the row a percentage based on the targeted column)
       *          percentageTo: string; (must be the exact name of another column). If isPercentage = false; will show quantites with percentage / target column in the same cell
       *          suffix: string; (append any string to all values related to this column, like €, $ etc)
       *          prefix: string; (prepend any string to all values related to this column, like €, $ etc)
       *          rangeFilter: boolean; (show min max inputs to filter numeric columns)
       *      },
       *      {...}
       *  ]
       * 
       * 
       */
      type: Array,
      default() {
        return JSON.stringify([]);
      }
    },
    body: {
      /** Defines the rows of the table
       *  Datastructure is an array of objects, containing an optional meta attribute to manage icon insertions:
       * 
       *  [
       *      {
       *          meta: {
       *              color: string;
       *              markerIndices: number[]; (lists all column indices where an icon will be prepended)
       *              unicodeIcon: string; (for example: '★')
       *          },
       *          td: array; (Must contain all data corresponding to each column designed in the header. IMPORTANT: if a column has isPercentage: true; set this index to an empty string, as data will be calculated and pushed to this index on mounted)
       *      }
       *  ]
       */
      type: Array,
      default() {
        return JSON.stringify([]);
      }
    },
    fontFamily: {
      type: String,
      default: "inherit"
    },
    maxHeight: {
      type: String,
      default: "500px"
    },
    rowsPerPage: {
      type: Number,
      default: 25
    },
    translations: {
      type: Object,
      default() {
        return JSON.stringify({
          average: "Average",
          by: "by",
          chooseCategoryColumn: "Choose category column",
          exportAllButton: "XLSX all",
          exportAllLabel: "Export all rows of your current filtered dataset",
          exportPageButton: "XLSX page",
          exportPageLabel: "Export rows of the current page",
          from: "Du",
          inputPlaceholder: "Search...",
          makeDonut: "Generate",
          nb: "Nb",
          page: "Page",
          paginatorLabel: "Rows per page",
          sizeWarning: "Displaying too many rows at a time can lead to slower performance",
          sum: "Somme",
          to: "Au",
          total: "Total",
          totalRows: "Total rows"
        });
      }
    },
    useChart: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      bodyCopy: JSON.parse(this.body).map((e, t) => ({
        ...e,
        absoluteIndex: t
      })),
      buttonTimeout: null,
      canMoveChart: !1,
      chart: {
        height: 316,
        type: "bar",
        width: 512
      },
      constants: {
        ASC: 1,
        BAR: "bar",
        DATE: "date",
        DESC: -1,
        DONUT: "donut",
        LINE: "line",
        NUMERIC: "numeric",
        PERCENTAGE: "percentage",
        TEXT: "text"
      },
      clientX: 100,
      clientY: 100,
      cssClass: {
        CELL: "smart-td-selected",
        FIRST_TD: "smart-td-selected-first",
        LAST_TD: "smart-td-selected-last",
        ROW: "smart-td-selected-neighbor"
      },
      currentDonut: void 0,
      currentFilter: void 0,
      currentSearch: void 0,
      currentSelectionSpan: {
        col: void 0,
        rows: []
      },
      currentPage: 0,
      dates: {},
      filteredDatesIndexes: {},
      hasNaN: {},
      headRef: JSON.parse(this.header),
      iconColor: "#2D353C",
      iconSize: 20,
      immutableRangeFilters: {},
      isExportRequest: !1,
      isLoading: !1,
      itemsPerPage: this.rowsPerPage,
      multiselects: {},
      paginatorOptions: [.../* @__PURE__ */ new Set([10, 25, 50, 100, 250, 500, this.rowsPerPage, JSON.parse(this.body).length])].sort((e, t) => e - t),
      palette: [
        "#3366cc",
        "#dc3912",
        "#ff9900",
        "#109618",
        "#990099",
        "#0099c6",
        "#dd4477",
        "#66aa00",
        "#b82e2e",
        "#316395",
        "#994499",
        "#22aa99",
        "#aaaa11",
        "#6633cc",
        "#e67300",
        "#8b0707",
        "#651067",
        "#329262",
        "#5574a6",
        "#3b3eac",
        "#b77322",
        "#16d620",
        "#b91383",
        "#f4359e",
        "#9c5935",
        "#a9c413",
        "#2a778d",
        "#668d1c",
        "#bea413",
        "#0c5922",
        "#743411"
      ],
      percentages: {},
      rafId: null,
      rangeFilters: {},
      searches: {},
      selectedColumn: void 0,
      selectedDonutCategory: void 0,
      selectedPlot: void 0,
      showChart: !1,
      showDonutOptions: !1,
      sorts: {},
      tableBody: JSON.parse(this.body).map((e, t) => ({
        ...e,
        absoluteIndex: t
      })),
      tableHead: JSON.parse(this.header).map((e) => ({
        average: Object.hasOwn(e, "average") ? e.average : !1,
        decimals: Object.hasOwn(e, "decimals") ? e.decimals : 0,
        isMultiselect: Object.hasOwn(e, "isMultiselect") ? e.isMultiselect : !1,
        isPercentage: Object.hasOwn(e, "isPercentage") ? e.isPercentage : !1,
        isSearch: Object.hasOwn(e, "isSearch") ? e.isSearch : !1,
        isSort: Object.hasOwn(e, "isSort") ? e.isSort : !1,
        name: e.name,
        // this attribute is mandatory
        percentageTo: Object.hasOwn(e, "percentageTo") ? e.percentageTo : void 0,
        prefix: Object.hasOwn(e, "prefix") ? e.prefix : "",
        rangeFilter: Object.hasOwn(e, "rangeFilter") ? e.rangeFilter : !1,
        suffix: Object.hasOwn(e, "suffix") ? e.suffix : "",
        sum: Object.hasOwn(e, "sum") ? e.sum : !1,
        type: e.type
        // this attribute is mandatory
      })),
      parsedTranslations: JSON.parse(this.translations)
    };
  },
  mounted() {
    if (this.headRef.length === 0)
      throw new Error(`SmartTable error: missing header data.
Provide a JSON format with an array of objects of type:
{
 name: string;
 type: string; ('text' | 'numeric' | 'date')
 average: boolean;
 decimals: number | undefined;
 sum: boolean;
 isSort:boolean;
 isSearch: boolean;
 isMultiselect: boolean;
 isPercentage: boolean;
 percentageTo: string; (or '')
}`);
    if (JSON.parse(this.body).length === 0)
      throw new Error("SmartTable error: missing body data");
    this.isLoading = !0, this.promiseWithAsyncFunction(this.prepareBodyCopy, () => {
      this.$forceUpdate(), this.isLoading = !1, this.$nextTick(() => {
        this.$el.querySelectorAll(".td-numeric")[0].focus();
      });
    }), this.$el.addEventListener("keydown", (e) => {
      const t = this.$el.activeElement;
      (t && Array.from(t.classList).includes("td-focusable") && e.key.includes("Arrow") || e.code === "Space") && e.preventDefault();
    });
  },
  watch: {
    showChart: function(e) {
      e && this.$nextTick(() => {
        this.closeDragElement();
        const t = this.$refs.chartModal;
        t.onmousedown = this.dragMouseDown;
      });
    }
  },
  computed: {
    availableDonutCategories() {
      return Object.keys(this.multiselects).map((e) => ({
        index: e,
        name: this.headRef[e].name,
        options: this.multiselects[e]
      }));
    },
    canChart() {
      return this.computedProps.useChart && this.currentSelectionSpan.rows.length > 1;
    },
    chartData() {
      if (!this.canChart)
        return [];
      const e = 316, t = 512, r = this.currentSelectionSpan.rows.length, i = t / r, n = Math.max(...this.currentSelectionSpan.rows.map((o) => o.value)), s = this.headRef[this.currentSelectionSpan.col].isPercentage, a = this.currentSelectionSpan.rows.map((o, l) => ({
        x: i * l + i / 2,
        y: (1 - o.value / n) * e,
        value: s ? o.value * 100 : o.value,
        suffix: s ? "%" : this.headRef[this.currentSelectionSpan.col].suffix ? this.headRef[this.currentSelectionSpan.col].suffix : "",
        prefix: this.headRef[this.currentSelectionSpan.col].prefix ? this.headRef[this.currentSelectionSpan.col].prefix : "",
        index: o.index
      }));
      return { plots: a, slot: i, progression: a.length >= 2 ? this.calcChartProgression(a) : !1 };
    },
    computedProps() {
      return {
        useChart: ["true", !0].includes(this.useChart)
      };
    },
    donutHollowLabels() {
      return {
        total: Number((this.currentDonut.map((e) => e.value).reduce((e, t) => e + t, 0) * (this.headRef[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        average: Number((this.currentDonut.map((e) => e.value).reduce((e, t) => e + t, 0) / this.currentSelectionSpan.rows.length * (this.headRef[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString()
      };
    },
    hasNumericTypes() {
      return this.headRef.map((e) => e.type).includes(this.constants.NUMERIC);
    },
    icons() {
      return {
        arrowSort: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9l4 -4l4 4m-4 -4v14" /><path d="M21 15l-4 4l-4 -4m4 4v-14" /></svg>`,
        bar: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20l14 0" /></svg>`,
        chart: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19l16 0" /><path d="M4 15l4 -6l4 2l4 -5l4 4" /></svg>`,
        chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`,
        chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 1.6}" height="${this.iconSize * 1.6}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>`,
        chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 1.6}" height="${this.iconSize * 1.6}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>`,
        donut: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 0.8}" height="${this.iconSize * 0.8}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3v5m4 4h5" /><path d="M8.929 14.582l-3.429 2.918" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`,
        export: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 10h18" /><path d="M10 3v18" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /></svg>`,
        fileDownload: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>`,
        filter: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" /></svg>`,
        move: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3" /><path d="M15 12h6" /><path d="M6 9l-3 3l3 3" /><path d="M3 12h6" /><path d="M9 18l3 3l3 -3" /><path d="M12 15v6" /><path d="M15 6l-3 -3l-3 3" /><path d="M12 3v6" /></svg>`,
        sort09: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /><path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" /><path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" /></svg>`,
        sort90: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /><path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" /><path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" /></svg>`,
        sortAZ: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" /><path d="M19 21h-4l4 -7h-4" /><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /></svg>`,
        sortZA: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" /><path d="M19 10h-4l4 -7h-4" /><path d="M4 15l3 3l3 -3" /><path d="M7 6v12" /></svg>`,
        sum: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" /></svg>`,
        table: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize}" height="${this.iconSize}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" fill="white" d="M 10 2, 21 2, 21 21, 10 21Z"/><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" width="${this.iconSize * 0.8}" height="${this.iconSize * 0.8}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`
      };
    },
    pages() {
      const e = [];
      if (this.bodyCopy.length)
        for (let t = 0; t < this.bodyCopy.length; t += this.itemsPerPage)
          e.push(this.bodyCopy.slice(t, t + this.itemsPerPage));
      return e;
    },
    rows() {
      return this.bodyCopy.map((e) => e.td);
    },
    selectedCellsCalculations() {
      return {
        sumPercentage: Number((this.currentSelectionSpan.rows.map((e) => e.value).reduce((e, t) => e + t, 0) * 100).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        sumRegular: Number(this.currentSelectionSpan.rows.map((e) => e.value).reduce((e, t) => e + t, 0).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        averagePercentage: Number((this.currentSelectionSpan.rows.map((e) => e.value).reduce((e, t) => e + t, 0) / this.currentSelectionSpan.rows.length * 100).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString(),
        averageRegular: Number((this.currentSelectionSpan.rows.map((e) => e.value).reduce((e, t) => e + t, 0) / this.currentSelectionSpan.rows.length).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString()
      };
    },
    visibleRows() {
      return this.pages[this.currentPage];
    }
  },
  methods: {
    applyDonutOption() {
      const e = this.selectedDonutCategory.options.map((t, r) => ({
        name: t,
        color: this.palette[r] || this.palette[r % this.palette.length],
        value: this.visibleRows.filter((i, n) => i.td[this.selectedDonutCategory.index] === t && this.currentSelectionSpan.rows.map((s) => s.index).includes(n)).map((i) => i.td[this.currentSelectionSpan.col]).reduce((i, n) => i + n, 0)
      })).sort((t, r) => r.value - t.value);
      this.currentDonut = this.makeDonut({ series: e }, 50, 50, 30, 30), this.$nextTick(() => {
        this.chart.type = this.constants.DONUT, this.showDonutOptions = !1;
      });
    },
    canResetColumn(e, t) {
      return !this.hasNaN[e] && (t.isSort || t.isSearch || t.isMultiselect || t.rangeFilter) && ![this.constants.DATE].includes(t.type);
    },
    createXls(e = "all") {
      const t = this.headRef.map((c) => c.name), r = e === "all" ? this.bodyCopy.map((c) => c.td) : this.visibleRows.map((c) => c.td), i = [t].concat(r);
      function n(c) {
        let h = new ArrayBuffer(c.length), u = new Uint8Array(h);
        for (let p = 0; p < c.length; p++)
          u[p] = c.charCodeAt(p) & 255;
        return h;
      }
      const s = Xs.book_new(), a = Xs.aoa_to_sheet(i);
      Xs.book_append_sheet(s, a, "Sheet1");
      const o = Hf(s, { bookType: "xlsx", type: "binary" }), l = new Blob([n(o)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), f = document.createElement("a");
      f.href = window.URL.createObjectURL(l), f.download = "data.xlsx", f.click(), window.URL.revokeObjectURL(f.href), this.isExportRequest = !1;
    },
    calcChartProgression(e) {
      let t, r, i, n;
      const s = e.length;
      let a = 0, o = 0, l = 0, f = 0;
      for (const { x: u, y: p } of e)
        a += u, o += p, l += u * p, f += u * u;
      const c = (s * l - a * o) / (s * f - a * a), h = (o - c * a) / s;
      return t = e[0].x, i = e[s - 1].x, r = c * t + h, n = c * i + h, { x1: t, y1: r, x2: i, y2: n, slope: c };
    },
    closeAllDropdowns() {
      const e = this.$el.querySelectorAll(".th-dropdown");
      e.length && Array.from(e).forEach((t) => {
        t.dataset.isOpen = !1;
      });
    },
    debounce(e, t) {
      let r;
      clearTimeout(r), r = setTimeout(e, t);
    },
    filterBody() {
      this.bodyCopy = this.tableBody.filter((e) => {
        for (const t in this.searches)
          if (!e.td[t].toUpperCase().includes(this.searches[t].toUpperCase()))
            return !1;
        for (const t in this.multiselects)
          if (!this.multiselects[t].some((i) => i === e.td[t]))
            return !1;
        for (const t in this.dates) {
          const r = new Date(e.td[t]), i = new Date(this.dates[t].from), n = new Date(this.dates[t].to);
          if (r < i || r > n)
            return !1;
        }
        return !0;
      }), this.sortBody();
    },
    getAverage(e) {
      return this.rows.map((t) => t[e]).map((t) => isNaN(Number(t)) ? 0 : t).reduce((t, r) => t + r, 0) / this.bodyCopy.length;
    },
    getDatesRange(e) {
      const t = JSON.parse(this.body).map((u) => new Date(u.td[e])), r = new Date(Math.min(...t)), i = new Date(Math.max(...t)), n = r.getFullYear(), s = i.getFullYear(), a = String(r.getMonth() + 1).padStart(2, "0"), o = String(i.getMonth() + 1).padStart(2, "0"), l = String(r.getDate()).padStart(2, "0"), f = String(i.getDate()).padStart(2, "0"), c = `${n}-${a}-${l}`, h = `${s}-${o}-${f}`;
      return {
        from: c,
        to: h
      };
    },
    getDonutLegendValue(e) {
      return Number((e * (this.headRef[this.currentSelectionSpan.col].isPercentage ? 100 : 1)).toFixed(this.headRef[this.currentSelectionSpan.col].decimals)).toLocaleString();
    },
    getDropdownOptions(e) {
      return [...new Set(JSON.parse(this.body).map((t) => t.td[e]))];
    },
    getSum(e) {
      return this.rows.map((t) => t[e]).map((t) => isNaN(Number(t)) ? 0 : t).reduce((t, r) => t + r, 0);
    },
    includesNaN(e) {
      return e.includes(NaN);
    },
    isDropdownOptionSelected(e, t) {
      return this.multiselects[t] ? this.multiselects[t].includes(e) : !0;
    },
    isNumeric(e) {
      return !isNaN(Number(String(e).replaceAll("%", "")));
    },
    isResetDisabled(e, t) {
      const r = t.isSort, i = t.isSearch, n = t.isMultiselect && this.multiselects[e], s = t.rangeFilter, a = (o) => {
        if (s && this.rangeFilters[o])
          return Math.round(this.rangeFilters[o].min) === this.immutableRangeFilters[o].min && Math.round(this.rangeFilters[o].max) === this.immutableRangeFilters[o].max;
      };
      if (r && i && n && s)
        return ["", void 0].includes(this.searches[e]) && [void 0].includes(this.sorts[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length && a(e);
      if (r && i && n)
        return ["", void 0].includes(this.searches[e]) && [void 0].includes(this.sorts[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length;
      if (r && i && s)
        return ["", void 0].includes(this.searches[e]) && [void 0].includes(this.sorts[e]) && a(e);
      if (r && i)
        return ["", void 0].includes(this.searches[e]) && [void 0].includes(this.sorts[e]);
      if (r && n && s)
        return [void 0].includes(this.sorts[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length && a(e);
      if (r && n)
        return [void 0].includes(this.sorts[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length;
      if (i && n && s)
        return ["", void 0].includes(this.searches[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length && a(e);
      if (i && n)
        return ["", void 0].includes(this.searches[e]) && this.multiselects[e].length === this.getDropdownOptions(e).length;
      if (i && s)
        return ["", void 0].includes(this.searches[e]) && a(e);
      if (i)
        return ["", void 0].includes(this.searches[e]);
      if (r && s)
        return [void 0].includes(this.sorts[e]) && a(e);
      if (r)
        return [void 0].includes(this.sorts[e]);
      if (n && s)
        return this.multiselects[e].length === this.getDropdownOptions(e).length && a(e);
      if (n)
        return this.multiselects[e].length === this.getDropdownOptions(e).length;
    },
    navigate(e) {
      this.resetSelection(), e === "next" && this.currentPage < this.pages.length ? this.currentPage += 1 : e === "previous" && this.currentPage >= 1 ? this.currentPage -= 1 : this.currentPage = e - 1, this.$refs.tableWrapper.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    navigateCell(e) {
      e.preventDefault();
      const t = e.keyCode, r = 38, i = 40, n = 37, s = 39;
      if (![r, i, n, s].includes(t))
        return;
      const a = e.target.id, o = /cell_(\d+)_(\d+)/, l = a.match(o), f = parseInt(l[1]), c = parseInt(l[2]), h = this.$el.querySelector(`#cell_${f}_${c + 1}`), u = this.$el.querySelector(`#cell_${f}_${c - 1}`), p = this.$el.querySelector(`#cell_${f + 1}_${c}`), g = this.$el.querySelector(`#cell_${f - 1}_${c}`);
      let d;
      switch (!0) {
        case t === s:
          d = h;
          break;
        case t === n:
          d = u;
          break;
        case t === r:
          d = g;
          break;
        case t === i:
          d = p;
          break;
        default:
          return;
      }
      d && (d.focus(), d.scrollIntoView({ behavior: "smooth", block: "center" }));
    },
    placeLabelOnTopOrBottom({ previousPlot: e, currentPlot: t, nextPlot: r }) {
      const i = t.y - 38, n = t.y + 16;
      return e && r ? e.value < t.value && r.value < t.value ? i : e.value > t.value && r.value > t.value ? n : (e.value > t.value && r.value < t.value || e.value < t.value && r.value > t.value, i) : e && !r ? e.value > t.value ? n : i : !e && r && r.value > t.value ? n : i;
    },
    async prepareBodyCopy() {
      return new Promise((e) => {
        const t = [];
        this.tableHead.forEach((r, i) => {
          if (r.isSearch && Object.assign(this.searches, { [i]: "" }), r.isMultiselect && Object.assign(this.multiselects, { [i]: this.getDropdownOptions(i) }), r.type === this.constants.DATE && (Object.assign(this.dates, { [i]: this.getDatesRange(i) }), Object.assign(this.filteredDatesIndexes, { [i]: !1 })), (r.isPercentage || r.percentageTo) && Object.assign(this.percentages, { [i]: {
            reference: r.percentageTo,
            referenceIndex: this.headRef.map((n) => n.name).indexOf(r.percentageTo)
          } }), r.rangeFilter && (Object.assign(this.rangeFilters, { [i]: {
            min: Math.round(Math.min(...JSON.parse(this.body).map((n) => n.td).map((n) => n[i]))),
            max: Math.round(Math.max(...JSON.parse(this.body).map((n) => n.td).map((n) => n[i])))
          } }), Object.assign(this.immutableRangeFilters, { [i]: {
            min: Math.round(Math.min(...JSON.parse(this.body).map((n) => n.td).map((n) => n[i]))),
            max: Math.round(Math.max(...JSON.parse(this.body).map((n) => n.td).map((n) => n[i])))
          } })), r.isPercentage) {
            const n = this.headRef.map((a) => a.name).indexOf(r.percentageTo), s = JSON.parse(this.body).map((a) => a.td[n]).reduce((a, o) => a + o, 0);
            t.push([i, n, s]);
          }
          r.type === this.constants.NUMERIC && !r.isPercentage && Object.assign(this.hasNaN, { [i]: this.includesNaN(JSON.parse(this.body).map((n) => Number(n.td[i]))) });
        }), this.bodyCopy.forEach((r, i) => {
          t.map((n) => {
            const [s, a, o] = n;
            r.td[s] = r.td[a] / o;
          }), r.td.forEach((n, s) => {
            this.headRef[s].type === this.constants.TEXT && this.headRef[s].isSearch && (r[s] = this.stringToNumber(n)), this.headRef[s].type === this.constants.DATE && (r[s] = new Date(n).getTime()), this.headRef[s].type === this.constants.NUMERIC && (r[s] = isNaN(Number(n)) ? s : n), this.tableBody[i][s] = r[s];
          });
        }), e(!0);
      });
    },
    promiseWithAsyncFunction(e, t) {
      return new Promise((r, i) => {
        e().then((n) => {
          try {
            const s = t(n);
            r(s);
          } catch (s) {
            i(s);
          }
        }).catch((n) => {
          i(n);
        });
      });
    },
    resetDates(e) {
      this.dates[e] = {
        from: this.getDatesRange(e).from,
        to: this.getDatesRange(e).to
      }, this.filteredDatesIndexes[e] = !1, this.$forceUpdate(), this.filterBody();
    },
    resetFilter(e, t, r) {
      const i = r.currentTarget;
      clearTimeout(this.buttonTimeout), i.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        i.classList.remove("clicked");
      }, 200), this.currentFilter = void 0, t.rangeFilter && (this.rangeFilters[e].min = this.immutableRangeFilters[e].min, this.rangeFilters[e].max = this.immutableRangeFilters[e].max), t.isMultiselect ? (this.multiselects[e] = this.getDropdownOptions(e), t.type === this.constants.TEXT && (this.sorts[e] = void 0), t.isSearch && (this.searches[e] = "")) : t.type === this.constants.NUMERIC ? this.sorts[e] = void 0 : t.type === this.constants.TEXT ? (this.sorts[e] = void 0, this.searches[e] = "") : t.type === this.constants.DATE && (this.sorts[e] = void 0), this.filterBody();
    },
    resetSelection() {
      const e = this.$el.querySelectorAll(`.${this.cssClass.ROW}`);
      Array.from(e).forEach((t) => {
        t.classList.remove(this.cssClass.CELL), t.classList.remove(this.cssClass.ROW), t.classList.remove(this.cssClass.FIRST_TD), t.classList.remove(this.cssClass.LAST_TD);
      }), this.currentPage > this.pages.length - 1 && (this.currentPage = this.pages.length - 1), this.showChart = !1, this.currentDonut = void 0, this.selectedColumn = void 0, this.chart.type = this.constants.BAR, this.currentSelectionSpan = {
        col: void 0,
        rows: []
      }, this.clientX = 100, this.clientY = 100;
    },
    selectColumn(e) {
      this.currentSelectionSpan.col !== e ? (this.visibleRows.forEach((t, r) => {
        this.selectTd({
          td: t.td[e],
          rowIndex: r,
          colIndex: e,
          headerType: this.constants.NUMERIC,
          event: {
            currentTarget: this.$el.querySelector(`#cell_${r}_${e}`)
          }
        });
      }), this.selectedColumn = e) : (this.selectedColumn = void 0, this.resetSelection());
    },
    selectDropdownOption(e, t) {
      this.multiselects[t].includes(e) ? this.multiselects[t] = this.multiselects[t].filter((r) => r !== e) : this.multiselects[t].push(e), this.$forceUpdate(), this.filterBody();
    },
    selectTd({ td: e, rowIndex: t, colIndex: r, headerType: i, event: n }) {
      if (i !== this.constants.NUMERIC || isNaN(Number(e))) {
        this.resetSelection();
        return;
      }
      this.currentSelectionSpan.col !== r && this.resetSelection();
      const s = n.currentTarget.parentNode;
      this.currentSelectionSpan.col = r, this.currentSelectionSpan.rows.map((a) => a.index).includes(t) ? (this.currentSelectionSpan.rows = this.currentSelectionSpan.rows.filter((a) => a.index !== t), n.currentTarget.classList.remove(this.cssClass.CELL), Array.from(s.children).forEach((a, o) => {
        a.classList.remove(this.cssClass.ROW), o === 0 && a.classList.remove(this.cssClass.FIRST_TD), o === s.children.length - 1 && a.classList.remove(this.cssClass.LAST_TD);
      })) : (this.currentSelectionSpan.rows.push({
        index: t,
        value: e
      }), n.currentTarget.classList.add(this.cssClass.CELL), Array.from(s.children).forEach((a, o) => {
        a.classList.add(this.cssClass.ROW), o === 0 && a.classList.add(this.cssClass.FIRST_TD), o === s.children.length - 1 && a.classList.add(this.cssClass.LAST_TD);
      })), this.currentSelectionSpan.rows = this.currentSelectionSpan.rows.sort((a, o) => a.index - o.index), this.chart.type === this.constants.DONUT && this.currentSelectionSpan.rows.length > 0 && this.applyDonutOption();
    },
    setFilterDatesIndexes(e) {
      this.filteredDatesIndexes[e] = !(this.getDatesRange(e).from === this.dates[e].from && this.getDatesRange(e).to === this.dates[e].to);
    },
    sortBody() {
      this.resetSelection(), Object.keys(this.rangeFilters).forEach((e) => {
        this.filterByRange(this.bodyCopy, e);
      }), Object.keys(this.sorts).forEach((e) => {
        this.sortByNumber(this.bodyCopy, e);
      }), this.currentFilter !== void 0 && this.sortByNumber(this.bodyCopy, this.currentFilter), this.headRef.forEach((e, t) => {
        if (e.isPercentage) {
          const r = this.percentages[t].referenceIndex, i = this.bodyCopy.map((n) => n.td[r]).reduce((n, s) => n + s, 0);
          this.bodyCopy.forEach((n) => {
            n.td[t] = n.td[r] / i;
          });
        }
      }), this.currentPage > this.pages.length - 1 && (this.currentPage = this.pages.length - 1), [-1].includes(this.currentPage) && (this.currentPage = 0), this.$forceUpdate();
    },
    filterByRange(e, t) {
      this.bodyCopy = e.filter((r) => r.td[t] >= this.rangeFilters[t].min && r[t] <= this.rangeFilters[t].max);
    },
    sortByNumber(e, t) {
      if (this.sorts[t] === this.constants.ASC && (e = e.sort((r, i) => r[t] - i[t])), this.sorts[t] === this.constants.DESC)
        e = e.sort((r, i) => i[t] - r[t]);
      else
        return 0;
    },
    sortTh(e, t) {
      this.currentFilter = e;
      const r = t.currentTarget;
      clearTimeout(this.buttonTimeout), r.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        r.classList.remove("clicked");
      }, 200), this.sorts[e] === 1 ? this.sorts[e] = this.constants.DESC : this.sorts[e] = this.constants.ASC, this.sortBody();
    },
    stringToNumber(e) {
      let t = 0;
      for (let r = 0; r < e.length; r += 1)
        t += e.charCodeAt(r);
      return t;
    },
    toggleMultiselect(e, t, r) {
      const i = r.currentTarget;
      clearTimeout(this.buttonTimeout), i.classList.add("clicked"), this.buttonTimeout = setTimeout(() => {
        i.classList.remove("clicked");
      }, 200);
      const n = this.$el.querySelector(`#th_dropdown_${e}`);
      n.dataset.isOpen === "false" ? n.dataset.isOpen = "true" : n.dataset.isOpen = "false";
    },
    updateCurrentPage(e) {
      this.resetSelection(), this.currentPage = Number(e.target.value);
    },
    // DONUTS
    addVector([e, t], [r, i]) {
      return [e + r, t + i];
    },
    calcDonutMarkerConnectorColor(e) {
      return e.proportion * 100 > 3 ? e.color : "transparent";
    },
    calcDonutMarkerLabelPositionX(e) {
      return e.center.endX + this.calcMarkerOffset(e, 50);
    },
    calcMarkerOffset(e, t) {
      return e.center.endX - t >= 0 ? 3 : -2;
    },
    createArc([e, t], [r, i], [n, s], a) {
      s = s % (2 * Math.PI);
      const o = this.rotateMatrix(a), [l, f] = this.addVector(
        this.matrixTimes(o, [
          r * Math.cos(n),
          i * Math.sin(n)
        ]),
        [e, t]
      ), [c, h] = this.addVector(
        this.matrixTimes(o, [
          r * Math.cos(n + s),
          i * Math.sin(n + s)
        ]),
        [e, t]
      ), u = s > Math.PI ? 1 : 0, p = s > 0 ? 1 : 0;
      return {
        startX: l,
        startY: f,
        endX: c,
        endY: h,
        path: `M${l} ${f} A ${[
          r,
          i,
          a / (2 * Math.PI) * 360,
          u,
          p,
          c,
          h
        ].join(" ")}`
      };
    },
    displayArcPercentage(e, t) {
      return isNaN(e.value / this.sumValues(t)) ? 0 : (e.value / this.sumValues(t) * 100).toFixed(0) + "%";
    },
    isArcBigEnough(e) {
      return e.proportion * 100 > 3;
    },
    makeDonut(e, t, r, i, n) {
      let { series: s } = e;
      if (!s || e.base === 0)
        return {
          ...s,
          proportion: 0,
          ratio: 0,
          path: "",
          startX: 0,
          startY: 0,
          endX: 0,
          center: {}
        };
      const a = [...s].map((f) => f.value).reduce((f, c) => f + c, 0), o = [];
      let l = 0;
      for (let f = 0; f < s.length; f += 1) {
        let c = s[f].value / a;
        const h = c * (Math.PI * 1.9999), p = s[f].value / 2 / a * (Math.PI * 2), { startX: g, startY: d, endX: v, endY: O, path: R } = this.createArc(
          [t, r],
          [i, n],
          [l, h],
          110
        );
        o.push({
          ...s[f],
          proportion: c,
          ratio: h,
          path: R,
          startX: g,
          startY: d,
          endX: v,
          endY: O,
          center: this.createArc(
            [t, r],
            [i * 1.45, n * 1.45],
            [l, p],
            110
          )
          // center of the arc, to display the marker. rx & ry are larger to be displayed with a slight offset
        }), l += h;
      }
      return o;
    },
    matrixTimes([[e, t], [r, i]], [n, s]) {
      return [e * n + t * s, r * n + i * s];
    },
    rotateMatrix(e) {
      return [
        [Math.cos(e), -Math.sin(e)],
        [Math.sin(e), Math.cos(e)]
      ];
    },
    sumValues(e) {
      return [...e].map((t) => t.value).reduce((t, r) => t + r, 0);
    },
    // CHART DRAGGING METHODS
    closeDragElement() {
      document.onmouseup = null, document.onmousemove = null;
    },
    dragMouseDown(e) {
      e = e || window.event, e.preventDefault(), document.onmouseup = this.closeDragElement, document.onmousemove = this.elementDrag;
    },
    elementDrag(e) {
      this.rafId || (this.rafId = window.requestAnimationFrame(() => this.onElementDrag(e)));
    },
    onElementDrag(e) {
      e = e || window.event, e.preventDefault();
      const r = this.$refs.chartModal.getBoundingClientRect();
      this.clientX = e.clientX - r.width / 2, this.clientY = e.clientY - r.height / 2, this.rafId = null;
    }
  }
}, qt = (e) => (ah("data-v-a16dce74"), e = e(), oh(), e), D_ = { class: "smart-table-export-hub" }, R_ = ["innerHTML"], P_ = ["data-is-open"], N_ = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("b", { class: "smart-table-export-hub-title" }, " Export ", -1)), I_ = { class: "smart-table-export-hub-options" }, b_ = { class: "smart-table-export-hub-option-wrapper" }, k_ = { class: "label" }, M_ = ["innerHTML"], L_ = { class: "smart-table-export-hub-option-wrapper" }, B_ = { class: "label" }, U_ = ["innerHTML"], W_ = { class: "smart-table" }, H_ = { id: "tableHead" }, V_ = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("th", { class: "invisible-cell" }, null, -1)), G_ = {
  key: 0,
  class: "th-fusion"
}, j_ = { key: 0 }, z_ = { key: 1 }, X_ = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("th", { class: "invisible-cell" }, null, -1)), K_ = {
  key: 0,
  style: { display: "flex", "align-items": "center", "justify-content": "flex-end" }
}, Y_ = ["innerHTML"], J_ = {
  key: 0,
  style: { "margin-left": "3px" }
}, q_ = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("th", { class: "invisible-cell" }, null, -1)), Z_ = { key: 0 }, Q_ = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("th", { class: "invisible-cell" }, null, -1)), $_ = { class: "th-filter" }, ev = {
  key: 0,
  class: "th-date"
}, tv = { class: "date-wrapper--inputs" }, rv = { class: "date-fieldset" }, nv = ["for"], iv = ["id", "onUpdate:modelValue", "onInput"], sv = { class: "date-fieldset" }, av = ["for"], ov = ["id", "onUpdate:modelValue", "onInput"], lv = { class: "date-wrapper--button" }, fv = ["onClick"], cv = ["innerHTML"], hv = ["innerHTML"], uv = ["innerHTML"], dv = ["onClick", "disabled"], pv = ["placeholder", "onUpdate:modelValue", "name"], xv = ["onClick"], mv = ["innerHTML"], gv = ["innerHTML"], _v = ["innerHTML"], vv = ["onClick", "innerHTML"], Ev = ["innerHTML"], Tv = {
  key: 5,
  class: "th-range-filter"
}, wv = ["for"], Sv = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("span", { style: { color: "grey" } }, "ᒥ", -1)), Cv = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("span", { style: { color: "grey" } }, "ᒣ", -1)), Av = ["id", "max", "min", "onUpdate:modelValue"], yv = ["id", "max", "min", "onUpdate:modelValue"], Fv = ["for"], Ov = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("span", { style: { color: "grey" } }, "ᒪ", -1)), Dv = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("span", { style: { color: "grey" } }, "ᒧ", -1)), Rv = ["onClick", "disabled"], Pv = ["id"], Nv = ["onClick"], Iv = ["onClick", "onKeyup"], bv = {
  key: 0,
  style: { color: "green" },
  class: "th-icon-green"
}, kv = {
  key: 1,
  style: { color: "red" },
  class: "th-icon-red"
}, Mv = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("th", { class: "invisible-cell" }, null, -1)), Lv = ["innerHTML", "onClick", "onKeyup"], Bv = { class: "smart-table-td-iteration" }, Uv = ["onClick", "onKeyup", "id"], Wv = ["innerHTML"], Hv = { key: 1 }, Vv = { key: 2 }, Gv = { key: 5 }, jv = ["innerHTML"], zv = { key: 0 }, Xv = { style: { "margin-left": "12px" } }, Kv = { class: "format-num" }, Yv = { style: { "margin-left": "12px" } }, Jv = {
  key: 0,
  class: "format-num"
}, qv = {
  key: 1,
  class: "format-num"
}, Zv = { key: 2 }, Qv = { style: { "margin-left": "12px" } }, $v = {
  key: 0,
  class: "format-num"
}, eE = {
  key: 1,
  class: "format-num"
}, tE = { key: 2 }, rE = {
  key: 0,
  class: "smart-table-paginator format-num"
}, nE = {
  key: 1,
  class: "smart-table-size-warning"
}, iE = ["innerHTML"], sE = {
  key: 3,
  class: "smart-table-pagination format-num"
}, aE = ["innerHTML", "disabled"], oE = ["disabled"], lE = {
  key: 0,
  class: "smart-table-page-scroller-wrapper"
}, fE = {
  for: "pageScroller",
  style: { "font-size": "14px" }
}, cE = ["max", "value"], hE = { key: 1 }, uE = ["disabled"], dE = ["innerHTML", "disabled"], pE = { class: "chart-modal-options" }, xE = ["innerHTML"], mE = ["innerHTML"], gE = ["innerHTML"], _E = { style: { "margin-bottom": "12px" } }, vE = { key: 0 }, EE = { key: 1 }, TE = {
  style: { width: "100%", height: "fit-content", cursor: "move" },
  ref: "chartModal"
}, wE = { key: 0 }, SE = { class: "smart-table-fieldset" }, CE = { class: "smart-table-fieldset-wrapper" }, AE = ["name", "id", "checked", "onInput"], yE = ["for"], FE = ["disabled"], OE = ["innerHTML"], DE = ["viewBox"], RE = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("defs", null, [
  /* @__PURE__ */ K("marker", {
    id: "arrowhead",
    markerWidth: "7",
    markerHeight: "7",
    refX: "0",
    refY: "3.5",
    orient: "auto"
  }, [
    /* @__PURE__ */ K("polygon", {
      points: "0 0, 7 3.5, 0 7",
      fill: "grey"
    })
  ])
], -1)), PE = ["x2", "y1", "y2"], NE = ["y2"], IE = ["x", "width", "height", "fill"], bE = /* @__PURE__ */ $h('<linearGradient id="barGradientSelected" x2="0%" y2="100%" data-v-a16dce74><stop offset="0.2" stop-color="#6376DD" data-v-a16dce74></stop><stop offset="1" stop-color="#6376DD80" data-v-a16dce74></stop></linearGradient><linearGradient id="barGradient" x2="0%" y2="100%" data-v-a16dce74><stop offset="0.2" stop-color="#6376DDB3" data-v-a16dce74></stop><stop offset="1" stop-color="#6376DD66" data-v-a16dce74></stop></linearGradient>', 2), kE = ["x", "y", "height", "width", "fill"], ME = ["x", "y", "width"], LE = { style: { width: "100%", "text-align": "center", "font-size": "20px" } }, BE = ["x1", "y1", "x2", "y2"], UE = ["x1", "y1", "x2", "y2"], WE = ["cx", "cy", "r"], HE = ["x", "y", "width"], VE = { style: { width: "100%", "text-align": "center", "font-size": "20px" } }, GE = ["x", "width", "height", "onMouseenter"], jE = ["x1", "y1", "x2", "y2"], zE = {
  key: 0,
  class: "chart-trend"
}, XE = /* @__PURE__ */ qt(() => /* @__PURE__ */ K("span", null, "---", -1)), KE = {
  viewBox: "0 0 100 100",
  style: { overflow: "visible", padding: "0 24px" },
  class: "smart-table-donut-chart"
}, YE = ["d", "stroke"], JE = ["x", "y"], qE = {
  key: 0,
  class: "smart-table-donut-label"
}, ZE = { class: "smart-table-donut-label-name" }, QE = {
  x: 50,
  y: 42,
  "text-anchor": "middle",
  "font-size": "6"
}, $E = {
  x: 50,
  y: 48,
  "text-anchor": "middle",
  "font-size": "4"
}, eT = {
  x: 50,
  y: 56,
  "text-anchor": "middle",
  "font-size": "6"
}, tT = {
  x: 50,
  y: 62,
  "text-anchor": "middle",
  "font-size": "4"
}, rT = { class: "smart-table-donut-legend" };
function nT(e, t, r, i, n, s) {
  return Q(), ee("div", {
    class: "smart-table-main",
    style: er(`font-family: ${r.fontFamily}`)
  }, [
    K("div", D_, [
      K("button", {
        onClick: t[0] || (t[0] = (a) => n.isExportRequest = !n.isExportRequest),
        innerHTML: s.icons.export
      }, null, 8, R_),
      K("div", {
        class: "smart-table-export-hub-dropdown",
        "data-is-open": n.isExportRequest || "false"
      }, [
        N_,
        K("button", {
          class: "close-dropdown",
          onClick: t[1] || (t[1] = (a) => n.isExportRequest = !1)
        }, " ✖ "),
        K("div", I_, [
          K("div", b_, [
            K("div", k_, re(n.parsedTranslations.exportAllLabel) + " (" + re(n.bodyCopy.length) + ") ", 1),
            K("button", {
              id: "exportAll",
              onClick: t[2] || (t[2] = (a) => s.createXls("all"))
            }, [
              K("div", {
                innerHTML: s.icons.fileDownload
              }, null, 8, M_),
              K("span", null, re(n.parsedTranslations.exportAllButton), 1)
            ])
          ]),
          K("div", L_, [
            K("div", B_, re(n.parsedTranslations.exportPageLabel), 1),
            K("button", {
              id: "exportPage",
              onClick: t[3] || (t[3] = (a) => s.createXls("page"))
            }, [
              K("div", {
                innerHTML: s.icons.fileDownload
              }, null, 8, U_),
              K("span", null, re(n.parsedTranslations.exportPageButton), 1)
            ])
          ])
        ])
      ], 8, P_)
    ]),
    K("div", {
      class: "smart-table__wrapper",
      style: er(`max-height:${r.maxHeight}`),
      ref: "tableWrapper"
    }, [
      K("table", W_, [
        K("thead", H_, [
          K("tr", null, [
            V_,
            (Q(!0), ee(be, null, St(n.tableHead, (a, o) => (Q(), ee("th", {
              key: `thead_${o}`,
              style: { overflow: "visible", position: "relative" },
              class: st({ "th-has-nan": n.hasNaN[o] })
            }, [
              s.hasNumericTypes && ([n.constants.TEXT, n.constants.DATE].includes(a.type) || a.isPercentage) ? (Q(), ee("div", G_, [
                K("span", null, [
                  Ct(re(a.name) + " ", 1),
                  a.isPercentage ? (Q(), ee("span", j_, " / " + re(a.percentageTo), 1)) : Oe("", !0)
                ])
              ])) : (Q(), ee("span", z_, re(a.name), 1))
            ], 2))), 128))
          ]),
          s.hasNumericTypes ? (Q(), ee(be, { key: 0 }, [
            K("tr", null, [
              X_,
              (Q(!0), ee(be, null, St(n.tableHead, (a, o) => (Q(), ee("th", {
                key: `thead_${o}`,
                class: st({ "th-numeric": !0, "th-has-nan": n.hasNaN[o] })
              }, [
                a.sum && !n.hasNaN[o] ? (Q(), ee("span", K_, [
                  K("span", {
                    innerHTML: s.icons.sum,
                    style: { "margin-bottom": "-4px", "margin-right": "3px" }
                  }, null, 8, Y_),
                  Ct(" " + re(a.prefix) + " " + re(Number(s.getSum(o).toFixed(a.decimals)).toLocaleString()) + " " + re(a.suffix) + " ", 1),
                  n.percentages[o] && a.percentageTo && !a.isPercentage ? (Q(), ee("span", J_, " (" + re(isNaN(s.getSum(o) / s.getSum(n.percentages[o].referenceIndex)) ? "-" : (s.getSum(o) / s.getSum(n.percentages[o].referenceIndex) * 100).toFixed(a.decimals)) + "%) ", 1)) : Oe("", !0)
                ])) : Oe("", !0)
              ], 2))), 128))
            ]),
            K("tr", null, [
              q_,
              (Q(!0), ee(be, null, St(n.tableHead, (a, o) => (Q(), ee("th", {
                key: `thead_${o}`,
                class: st({ "th-numeric": !0, "th-has-nan": n.hasNaN[o] })
              }, [
                a.average && !n.hasNaN[o] ? (Q(), ee("span", Z_, " ~ " + re(a.prefix) + " " + re(isNaN(s.getAverage(o)) ? "" : Number(s.getAverage(o).toFixed(a.decimals)).toLocaleString()) + " " + re(a.suffix), 1)) : Oe("", !0)
              ], 2))), 128))
            ]),
            K("tr", null, [
              Q_,
              (Q(!0), ee(be, null, St(n.tableHead, (a, o) => (Q(), ee("th", {
                key: `thead_${o}`,
                class: st({ "th-has-nan": n.hasNaN[o] })
              }, [
                K("div", $_, [
                  a.type === n.constants.DATE && n.dates[o] ? (Q(), ee("div", ev, [
                    K("div", tv, [
                      K("div", rv, [
                        K("label", {
                          for: `from_${o}`
                        }, re(n.parsedTranslations.from), 9, nv),
                        cn(K("input", {
                          id: `from_${o}`,
                          type: "date",
                          "onUpdate:modelValue": (l) => n.dates[o].from = l,
                          onInput: (l) => {
                            s.filterBody(), s.setFilterDatesIndexes(o);
                          }
                        }, null, 40, iv), [
                          [Wn, n.dates[o].from]
                        ])
                      ]),
                      K("div", sv, [
                        K("label", {
                          for: `to_${o}`
                        }, re(n.parsedTranslations.to), 9, av),
                        cn(K("input", {
                          id: `to_${o}`,
                          type: "date",
                          "onUpdate:modelValue": (l) => n.dates[o].to = l,
                          onInput: (l) => {
                            s.filterBody(), s.setFilterDatesIndexes(o);
                          }
                        }, null, 40, ov), [
                          [Wn, n.dates[o].to]
                        ])
                      ])
                    ]),
                    K("div", lv, [
                      a.isSort ? (Q(), ee("button", {
                        key: 0,
                        onClick: (l) => s.sortTh(o, l),
                        class: st({ "th-button-active": [n.constants.DESC, n.constants.ASC].includes(n.sorts[o]) })
                      }, [
                        n.sorts[o] === n.constants.ASC ? (Q(), ee("span", {
                          key: 0,
                          innerHTML: [n.constants.DATE].includes(a.type) ? s.icons.sort09 : s.icons.sortAZ
                        }, null, 8, cv)) : n.sorts[o] === n.constants.DESC ? (Q(), ee("span", {
                          key: 1,
                          innerHTML: [n.constants.DATE].includes(a.type) ? s.icons.sort90 : s.icons.sortZA
                        }, null, 8, hv)) : (Q(), ee("span", {
                          key: 2,
                          innerHTML: s.icons.arrowSort
                        }, null, 8, uv))
                      ], 10, fv)) : Oe("", !0),
                      K("button", {
                        onClick: (l) => {
                          s.resetDates(o), s.resetFilter(o, a, l);
                        },
                        disabled: !n.filteredDatesIndexes[o] && s.isResetDisabled(o, a),
                        class: "th-reset"
                      }, " ✖ ", 8, dv)
                    ])
                  ])) : Oe("", !0),
                  a.isSearch ? cn((Q(), ee("input", {
                    key: 1,
                    placeholder: n.parsedTranslations.inputPlaceholder,
                    "onUpdate:modelValue": (l) => n.searches[o] = l,
                    onInput: t[4] || (t[4] = (l) => s.debounce(s.filterBody, 400)),
                    name: `search_${o}`
                  }, null, 40, pv)), [
                    [Wn, n.searches[o]]
                  ]) : Oe("", !0),
                  !n.hasNaN[o] && a.isSort && a.type !== n.constants.DATE ? (Q(), ee("button", {
                    key: 2,
                    onClick: (l) => s.sortTh(o, l),
                    class: st({ "th-button-active": [n.constants.DESC, n.constants.ASC].includes(n.sorts[o]) })
                  }, [
                    n.sorts[o] === n.constants.ASC ? (Q(), ee("span", {
                      key: 0,
                      innerHTML: [n.constants.NUMERIC].includes(a.type) ? s.icons.sort09 : s.icons.sortZA
                    }, null, 8, mv)) : n.sorts[o] === n.constants.DESC ? (Q(), ee("span", {
                      key: 1,
                      innerHTML: [n.constants.NUMERIC].includes(a.type) ? s.icons.sort90 : s.icons.sortAZ
                    }, null, 8, gv)) : (Q(), ee("span", {
                      key: 2,
                      innerHTML: s.icons.arrowSort
                    }, null, 8, _v))
                  ], 10, xv)) : Oe("", !0),
                  a.isMultiselect ? (Q(), ee("button", {
                    key: 3,
                    onClick: (l) => s.toggleMultiselect(o, a, l),
                    innerHTML: s.icons.filter,
                    class: st({ "th-button-active": n.multiselects[o] && n.multiselects[o].length !== s.getDropdownOptions(o).length })
                  }, null, 10, vv)) : Oe("", !0),
                  n.currentSelectionSpan.col === o && s.canChart ? (Q(), ee("button", {
                    key: 4,
                    onClick: t[5] || (t[5] = (l) => n.showChart = !n.showChart),
                    innerHTML: s.icons.chart,
                    class: st({ "th-button-active": n.showChart })
                  }, null, 10, Ev)) : Oe("", !0),
                  a.rangeFilter && n.rangeFilters[o] && !n.hasNaN[o] ? (Q(), ee("div", Tv, [
                    K("label", {
                      for: `rangeMin${o}`
                    }, [
                      Sv,
                      Ct(" min "),
                      Cv
                    ], 8, wv),
                    cn(K("input", {
                      type: "number",
                      id: `rangeMin${o}`,
                      max: n.immutableRangeFilters[o].max,
                      min: n.immutableRangeFilters[o].min,
                      "onUpdate:modelValue": (l) => n.rangeFilters[o].min = l,
                      onInput: t[6] || (t[6] = (l) => s.debounce(s.filterBody, 400))
                    }, null, 40, Av), [
                      [
                        Wn,
                        n.rangeFilters[o].min,
                        void 0,
                        { number: !0 }
                      ]
                    ]),
                    cn(K("input", {
                      type: "number",
                      id: `rangeMax${o}`,
                      max: n.immutableRangeFilters[o].max,
                      min: n.immutableRangeFilters[o].min,
                      "onUpdate:modelValue": (l) => n.rangeFilters[o].max = l,
                      onInput: t[7] || (t[7] = (l) => s.debounce(s.filterBody, 400))
                    }, null, 40, yv), [
                      [
                        Wn,
                        n.rangeFilters[o].max,
                        void 0,
                        { number: !0 }
                      ]
                    ]),
                    K("label", {
                      for: `rangeMax${o}`
                    }, [
                      Ov,
                      Ct(" max "),
                      Dv
                    ], 8, Fv)
                  ])) : Oe("", !0),
                  s.canResetColumn(o, a) ? (Q(), ee("button", {
                    key: 6,
                    onClick: (l) => s.resetFilter(o, a, l),
                    disabled: s.isResetDisabled(o, a),
                    class: "th-reset"
                  }, " ✖ ", 8, Rv)) : Oe("", !0),
                  a.isMultiselect ? (Q(), ee("div", {
                    key: 7,
                    class: "th-dropdown",
                    "data-is-open": "false",
                    id: `th_dropdown_${o}`
                  }, [
                    K("button", {
                      class: "close-dropdown",
                      onClick: (l) => s.toggleMultiselect(o, a, l)
                    }, " ✖ ", 8, Nv),
                    (Q(!0), ee(be, null, St(s.getDropdownOptions(o), (l, f) => (Q(), ee("span", {
                      class: "th-option",
                      key: `th_option_${o}_${f}`,
                      onClick: (c) => s.selectDropdownOption(l, o),
                      onKeyup: [
                        Vn((c) => s.selectDropdownOption(l, o), ["enter"]),
                        Vn((c) => s.selectDropdownOption(l, o), ["space"])
                      ],
                      style: er(`opacity:${s.isDropdownOptionSelected(l, o) ? 1 : 0.5}`),
                      tabindex: "0"
                    }, [
                      s.isDropdownOptionSelected(l, o) ? (Q(), ee("span", bv, " ✔ ")) : (Q(), ee("span", kv, " ✖ ")),
                      K("span", null, re(l), 1)
                    ], 44, Iv))), 128))
                  ], 8, Pv)) : Oe("", !0)
                ])
              ], 2))), 128))
            ])
          ], 64)) : Oe("", !0),
          K("tr", null, [
            Mv,
            (Q(!0), ee(be, null, St(n.tableHead, (a, o) => (Q(), ee("th", {
              key: `col_selector_${o}`,
              class: st({ "smart-table-col-selector": !n.hasNaN[o], "col-selector--selected": o === n.selectedColumn && !n.hasNaN[o], "th-has-nan": n.hasNaN[o] })
            }, [
              n.hasNaN[o] ? Oe("", !0) : (Q(), ee("div", {
                key: 0,
                innerHTML: n.tableHead[o].type === n.constants.NUMERIC ? s.icons.chevronDown : "",
                class: st({ "col-selector": n.tableHead[o].type === n.constants.NUMERIC }),
                tabindex: "0",
                onClick: Hn((l) => s.selectColumn(o), ["stop"]),
                onKeyup: Vn((l) => s.selectColumn(o), ["enter"])
              }, null, 42, Lv))
            ], 2))), 128))
          ])
        ]),
        K("tbody", {
          onClick: t[8] || (t[8] = (...a) => s.closeAllDropdowns && s.closeAllDropdowns(...a)),
          onKeydown: t[9] || (t[9] = (a) => s.navigateCell(a))
        }, [
          (Q(!0), ee(be, null, St(s.visibleRows, (a, o) => (Q(), ee("tr", {
            key: `tbody_${o}`
          }, [
            K("td", Bv, re(a.absoluteIndex + 1), 1),
            (Q(!0), ee(be, null, St(a.td, (l, f) => (Q(), ee("td", {
              key: `td_${o}_${f}`,
              style: er(s.isNumeric(l) || n.headRef[f].type === n.constants.DATE ? "text-align:right;font-variant-numeric: tabular-nums;" : ""),
              onClick: (c) => s.selectTd({
                td: l,
                rowIndex: o,
                colIndex: f,
                headerType: n.headRef[f].type,
                event: c
              }),
              onKeyup: [
                Vn((c) => s.selectTd({
                  td: l,
                  rowIndex: o,
                  colIndex: f,
                  headerType: n.headRef[f].type,
                  event: c
                }), ["enter"]),
                Vn((c) => s.selectTd({
                  td: l,
                  rowIndex: o,
                  colIndex: f,
                  headerType: n.headRef[f].type,
                  event: c
                }), ["space"])
              ],
              class: st({ "td-numeric": n.headRef[f].type === n.constants.NUMERIC, "td-focusable": !0, "td-has-nan": n.hasNaN[f] }),
              id: `cell_${o}_${f}`,
              tabindex: "0"
            }, [
              a.meta && a.meta.markerIndices.includes(f) && a.meta.unicodeIcon ? (Q(), ee("span", {
                key: 0,
                style: er(`color:${a.meta.color};margin-right:3px`),
                innerHTML: a.meta.unicodeIcon
              }, null, 12, Wv)) : Oe("", !0),
              n.headRef[f].type === n.constants.DATE ? (Q(), ee("span", Hv, re(n.headRef[f].prefix) + " " + re(new Date(l).toLocaleString().slice(0, 10)) + " " + re(n.headRef[f].suffix), 1)) : n.headRef[f].isPercentage ? (Q(), ee("span", Vv, re(Number((l * 100).toFixed(n.headRef[f].decimals)).toLocaleString()) + "% ", 1)) : n.percentages[f] && n.headRef[f].percentageTo && !n.headRef[f].isPercentage ? (Q(), ee("span", {
                key: 3,
                class: st({ "td-nan": isNaN(Number(l)) })
              }, re(n.headRef[f].prefix) + " " + re(isNaN(Number(l)) ? `${l} is not ${n.constants.NUMERIC}` : Number(l.toFixed(n.headRef[f].decimals)).toLocaleString()) + " " + re(n.headRef[f].suffix) + " (" + re(isNaN(Number(l)) ? "" : Number((l / s.getSum(n.percentages[f].referenceIndex) * 100).toFixed(n.headRef[f].decimals)).toLocaleString()) + "%) ", 3)) : n.headRef[f].type === n.constants.NUMERIC ? (Q(), ee("span", {
                key: 4,
                class: st({ "td-nan": isNaN(Number(l)) })
              }, re(n.headRef[f].prefix) + " " + re(isNaN(Number(l)) ? `${l} is not ${n.constants.NUMERIC}` : Number(l.toFixed(n.headRef[f].decimals)).toLocaleString()) + " " + re(n.headRef[f].suffix), 3)) : (Q(), ee("span", Gv, re(n.headRef[f].prefix) + " " + re(l) + " " + re(n.headRef[f].suffix), 1))
            ], 46, Uv))), 128))
          ]))), 128))
        ], 32)
      ])
    ], 4),
    K("div", {
      class: st({ "td-selector-info": !0, "td-selector-info--active": n.currentSelectionSpan.col !== void 0 && n.currentSelectionSpan.rows.length })
    }, [
      n.currentSelectionSpan.col !== void 0 && n.currentSelectionSpan.rows.length ? (Q(), ee(be, { key: 0 }, [
        K("div", {
          innerHTML: s.icons.table,
          class: "td-selector-icon"
        }, null, 8, jv),
        K("span", null, [
          K("b", null, [
            Ct(re(n.headRef[n.currentSelectionSpan.col].name) + " ", 1),
            n.headRef[n.currentSelectionSpan.col].isPercentage ? (Q(), ee("span", zv, " / " + re(n.headRef[n.percentages[n.currentSelectionSpan.col].referenceIndex].name), 1)) : Oe("", !0)
          ]),
          K("span", Xv, [
            Ct(re(n.parsedTranslations.nb) + " : ", 1),
            K("b", Kv, re(n.currentSelectionSpan.rows.length), 1)
          ]),
          K("span", Yv, [
            Ct(re(n.parsedTranslations.sum) + " : ", 1),
            n.headRef[n.currentSelectionSpan.col].isPercentage ? (Q(), ee("b", Jv, re(s.selectedCellsCalculations.sumPercentage), 1)) : (Q(), ee("b", qv, re(n.headRef[n.currentSelectionSpan.col].prefix) + " " + re(s.selectedCellsCalculations.sumRegular) + " " + re(n.headRef[n.currentSelectionSpan.col].suffix), 1)),
            n.headRef[n.currentSelectionSpan.col].isPercentage ? (Q(), ee("b", Zv, "%")) : Oe("", !0)
          ]),
          K("span", Qv, [
            Ct(re(n.parsedTranslations.average) + " : ", 1),
            n.headRef[n.currentSelectionSpan.col].isPercentage ? (Q(), ee("b", $v, re(s.selectedCellsCalculations.averagePercentage), 1)) : (Q(), ee("b", eE, re(n.headRef[n.currentSelectionSpan.col].prefix) + " " + re(s.selectedCellsCalculations.averageRegular) + " " + re(n.headRef[n.currentSelectionSpan.col].suffix), 1)),
            n.headRef[n.currentSelectionSpan.col].isPercentage ? (Q(), ee("b", tE, "%")) : Oe("", !0)
          ])
        ]),
        K("button", {
          onClick: t[10] || (t[10] = (...a) => s.resetSelection && s.resetSelection(...a)),
          class: "td-selector-info-reset"
        }, " ✖ ")
      ], 64)) : Oe("", !0)
    ], 2),
    n.bodyCopy.length > 10 ? (Q(), ee("div", rE, [
      Ct(re(n.parsedTranslations.totalRows) + " : " + re(JSON.parse(r.body).length) + " | " + re(n.parsedTranslations.paginatorLabel) + " : ", 1),
      n.bodyCopy.length > 10 ? cn((Q(), ee("select", {
        key: 0,
        id: "paginatorSelector",
        "onUpdate:modelValue": t[11] || (t[11] = (a) => n.itemsPerPage = a),
        onChange: t[12] || (t[12] = (...a) => s.resetSelection && s.resetSelection(...a))
      }, [
        (Q(!0), ee(be, null, St(n.paginatorOptions, (a, o) => (Q(), ee(be, null, [
          n.bodyCopy.length > a || JSON.parse(r.body).length === a ? (Q(), ee("option", {
            key: `paginator_option_${o}`
          }, re(a), 1)) : Oe("", !0)
        ], 64))), 256))
      ], 544)), [
        [
          Nu,
          n.itemsPerPage,
          void 0,
          { number: !0 }
        ]
      ]) : Oe("", !0)
    ])) : Oe("", !0),
    n.itemsPerPage >= 250 ? (Q(), ee("div", nE, [
      K("span", {
        innerHTML: s.icons.warning
      }, null, 8, iE),
      Ct(re(n.parsedTranslations.sizeWarning), 1)
    ])) : Oe("", !0),
    s.pages.length > 1 && s.pages.length <= 10 ? (Q(), ee("div", {
      key: 2,
      class: "smart-table-navigation-indicator",
      style: er(`width:calc(${n.currentPage / (s.pages.length - 1) * 100}%)`)
    }, null, 4)) : Oe("", !0),
    s.pages.length > 1 ? (Q(), ee("div", sE, [
      K("button", {
        class: "smart-table-navigation",
        onClick: t[13] || (t[13] = Hn((a) => s.navigate("previous"), ["stop"])),
        innerHTML: s.icons.chevronLeft,
        disabled: n.currentPage === 0
      }, null, 8, aE),
      s.pages.length > 3 ? (Q(), ee(be, { key: 0 }, [
        K("button", {
          class: "smart-table-navigation",
          onClick: t[14] || (t[14] = Hn((a) => s.navigate(1), ["stop"])),
          disabled: n.currentPage === 0
        }, " 1 ", 8, oE),
        s.pages.length > 10 ? (Q(), ee("div", lE, [
          K("label", fE, re(n.parsedTranslations.page) + " " + re(n.currentPage + 1) + " / " + re(s.pages.length), 1),
          K("input", {
            class: "smart-table-page-scroller",
            id: "pageScroller",
            type: "range",
            step: "1",
            min: 0,
            max: s.pages.length - 1,
            onInput: t[15] || (t[15] = (a) => s.updateCurrentPage(a)),
            value: n.currentPage
          }, null, 40, cE)
        ])) : (Q(), ee("span", hE, re(n.parsedTranslations.page) + " " + re(n.currentPage + 1) + " / " + re(s.pages.length), 1)),
        K("button", {
          class: "smart-table-navigation",
          onClick: t[16] || (t[16] = Hn((a) => s.navigate(s.pages.length), ["stop"])),
          disabled: n.currentPage === s.pages.length - 1
        }, re(s.pages.length), 9, uE)
      ], 64)) : (Q(), ee(be, { key: 1 }, [
        Ct(re(n.parsedTranslations.page) + " " + re(n.currentPage + 1) + " / " + re(s.pages.length), 1)
      ], 64)),
      K("button", {
        class: "smart-table-navigation",
        onClick: t[17] || (t[17] = Hn((a) => s.navigate("next"), ["stop"])),
        innerHTML: s.icons.chevronRight,
        disabled: n.currentPage === s.pages.length - 1
      }, null, 8, dE)
    ])) : Oe("", !0),
    n.showChart && s.canChart ? (Q(), ee("div", {
      key: 4,
      class: "smart-table-chart-modal",
      style: er(`top:${n.clientY}px; left:${n.clientX}px`)
    }, [
      K("button", {
        class: "close-chart-modal",
        onClick: t[18] || (t[18] = (a) => n.showChart = !1)
      }, " ✖ "),
      K("div", pE, [
        s.availableDonutCategories.length ? (Q(), ee("button", {
          key: 0,
          onClick: t[19] || (t[19] = (a) => n.showDonutOptions = !0),
          innerHTML: s.icons.donut,
          class: st({ "is-active-chart": n.chart.type === n.constants.DONUT || n.showDonutOptions })
        }, null, 10, xE)) : Oe("", !0),
        K("button", {
          onClick: t[20] || (t[20] = (a) => {
            n.chart.type = n.constants.LINE, n.showDonutOptions = !1;
          }),
          innerHTML: s.icons.chart,
          class: st({ "is-active-chart": n.chart.type === n.constants.LINE && !n.showDonutOptions })
        }, null, 10, mE),
        K("button", {
          onClick: t[21] || (t[21] = (a) => {
            n.chart.type = n.constants.BAR, n.showDonutOptions = !1;
          }),
          innerHTML: s.icons.bar,
          class: st({ "is-active-chart": n.chart.type === n.constants.BAR && !n.showDonutOptions })
        }, null, 10, gE)
      ]),
      K("div", _E, [
        K("b", null, [
          Ct(re(n.headRef[n.currentSelectionSpan.col].name) + " ", 1),
          n.headRef[n.currentSelectionSpan.col].isPercentage && n.headRef[n.currentSelectionSpan.col].percentageTo ? (Q(), ee("span", vE, " / " + re(n.headRef[n.percentages[n.currentSelectionSpan.col].referenceIndex].name), 1)) : Oe("", !0),
          n.chart.type === n.constants.DONUT && n.selectedDonutCategory && n.selectedDonutCategory.name ? (Q(), ee("span", EE, re(n.parsedTranslations.by) + " " + re(n.selectedDonutCategory.name), 1)) : Oe("", !0)
        ])
      ]),
      K("div", TE, [
        n.showDonutOptions && s.availableDonutCategories.length ? (Q(), ee("div", wE, [
          K("fieldset", SE, [
            K("legend", null, re(n.parsedTranslations.chooseCategoryColumn), 1),
            K("div", CE, [
              (Q(!0), ee(be, null, St(s.availableDonutCategories, (a, o) => (Q(), ee("div", {
                class: "smart-table-fieldset-option",
                key: `donut_radio_${o}`
              }, [
                K("input", {
                  type: "radio",
                  name: a.name,
                  id: a.name,
                  checked: n.selectedDonutCategory && a.name === n.selectedDonutCategory.name,
                  onInput: (l) => n.selectedDonutCategory = s.availableDonutCategories[o]
                }, null, 40, AE),
                K("label", {
                  for: a.name
                }, re(a.name), 9, yE)
              ]))), 128))
            ]),
            K("button", {
              class: "smart-table-generate-donut",
              disabled: !n.selectedDonutCategory,
              onClick: t[22] || (t[22] = (...a) => s.applyDonutOption && s.applyDonutOption(...a))
            }, [
              K("div", {
                style: { "margin-bottom": "-3px" },
                innerHTML: s.icons.donut
              }, null, 8, OE),
              Ct(" " + re(n.parsedTranslations.makeDonut), 1)
            ], 8, FE)
          ])
        ])) : Oe("", !0),
        [n.constants.BAR, n.constants.LINE].includes(n.chart.type) && !n.showDonutOptions ? (Q(), ee(be, { key: 1 }, [
          (Q(), ee("svg", {
            viewBox: `0 0 ${n.chart.width} ${n.chart.height}`,
            class: "smart-table-chart-svg"
          }, [
            RE,
            K("g", null, [
              K("line", {
                x1: 0,
                x2: n.chart.width,
                y1: n.chart.height,
                y2: n.chart.height,
                stroke: "#ccd1d4",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, null, 8, PE),
              K("line", {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: n.chart.height,
                stroke: "#ccd1d4",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, null, 8, NE)
            ]),
            n.chart.type === n.constants.LINE ? (Q(!0), ee(be, { key: 0 }, St(s.chartData.plots, (a, o) => (Q(), ee("g", {
              key: `trap_fill_${o}`
            }, [
              K("rect", {
                x: o * s.chartData.slot,
                y: 0,
                width: s.chartData.slot,
                height: n.chart.height,
                fill: n.selectedPlot === o ? "rgba(0,0,0,0.03)" : "transparent"
              }, null, 8, IE)
            ]))), 128)) : Oe("", !0),
            (Q(!0), ee(be, null, St(s.chartData.plots, (a, o) => (Q(), ee("g", {
              key: `plot_${o}`
            }, [
              n.chart.type === n.constants.BAR ? (Q(), ee(be, { key: 0 }, [
                bE,
                K("rect", {
                  x: a.x - s.chartData.slot / 2,
                  y: a.y,
                  height: n.chart.height - a.y,
                  width: s.chartData.slot,
                  fill: n.selectedPlot === o ? "url(#barGradientSelected)" : "url(#barGradient)",
                  stroke: "white",
                  "stroke-width": "1"
                }, null, 8, kE),
                n.selectedPlot === o ? (Q(), ee("foreignObject", {
                  key: 0,
                  x: a.x - (s.chartData.slot < 100 ? 50 : s.chartData.slot / 2),
                  y: a.y - 32,
                  height: "20",
                  width: s.chartData.slot < 100 ? 100 : s.chartData.slot,
                  style: { overflow: "visible" }
                }, [
                  K("div", LE, re(a.prefix) + " " + re(Number(a.value.toFixed(n.headRef[n.currentSelectionSpan.col].decimals)).toLocaleString()) + " " + re(a.suffix), 1)
                ], 8, ME)) : Oe("", !0)
              ], 64)) : Oe("", !0),
              n.chart.type === n.constants.LINE ? (Q(), ee(be, { key: 1 }, [
                o + 1 < s.chartData.plots.length ? (Q(), ee("line", {
                  key: 0,
                  x1: a.x,
                  y1: a.y,
                  x2: s.chartData.plots[o + 1].x,
                  y2: s.chartData.plots[o + 1].y,
                  "stroke-width": "3",
                  stroke: "#6376DD75"
                }, null, 8, BE)) : Oe("", !0),
                n.selectedPlot === o ? (Q(), ee("line", {
                  key: 1,
                  x1: a.x,
                  y1: a.y,
                  x2: a.x,
                  y2: n.chart.height,
                  stroke: "grey",
                  "stroke-width": "1",
                  "stroke-dasharray": "3"
                }, null, 8, UE)) : Oe("", !0),
                K("circle", {
                  cx: a.x,
                  cy: a.y,
                  r: n.selectedPlot === o ? 6 : 4,
                  fill: "#22348f",
                  stroke: "white",
                  "stroke-width": "1"
                }, null, 8, WE),
                n.selectedPlot === o ? (Q(), ee("foreignObject", {
                  key: 2,
                  x: a.x - (s.chartData.slot < 100 ? 50 : s.chartData.slot / 2),
                  y: s.placeLabelOnTopOrBottom({
                    previousPlot: s.chartData.plots[o - 1],
                    currentPlot: a,
                    nextPlot: s.chartData.plots[o + 1]
                  }),
                  height: "20",
                  width: s.chartData.slot < 100 ? 100 : s.chartData.slot,
                  style: { overflow: "visible" }
                }, [
                  K("div", VE, re(a.prefix) + " " + re(Number(a.value.toFixed(n.headRef[n.currentSelectionSpan.col].decimals)).toLocaleString()) + " " + re(a.suffix), 1)
                ], 8, HE)) : Oe("", !0)
              ], 64)) : Oe("", !0)
            ]))), 128)),
            (Q(!0), ee(be, null, St(s.chartData.plots, (a, o) => (Q(), ee("g", {
              key: `trap_${o}`
            }, [
              K("rect", {
                x: o * s.chartData.slot,
                y: 0,
                width: s.chartData.slot,
                height: n.chart.height,
                fill: "transparent",
                onMouseenter: (l) => n.selectedPlot = o,
                onMouseleave: t[23] || (t[23] = (l) => n.selectedPlot = void 0)
              }, null, 40, GE)
            ]))), 128)),
            s.chartData.progression && s.chartData.plots.length > 2 ? (Q(), ee("line", {
              key: 1,
              x1: s.chartData.progression.x1,
              y1: s.chartData.progression.y1,
              x2: s.chartData.progression.x2,
              y2: s.chartData.progression.y2,
              stroke: "grey",
              "stroke-width": "2",
              "stroke-dasharray": "4",
              "marker-end": "url(#arrowhead)"
            }, null, 8, jE)) : Oe("", !0)
          ], 8, DE)),
          s.chartData.plots.length >= 2 ? (Q(), ee("div", zE, [
            XE,
            Ct(" Trend: "),
            K("span", null, re(s.chartData.progression.slope < 0 ? "+" : "-"), 1),
            Ct(" " + re((Math.abs(s.chartData.progression.slope) * 100).toFixed(1)) + " % ", 1)
          ])) : Oe("", !0)
        ], 64)) : Oe("", !0),
        [n.constants.DONUT].includes(n.chart.type) && !n.showDonutOptions ? (Q(), ee(be, { key: 2 }, [
          (Q(), ee("svg", KE, [
            (Q(!0), ee(be, null, St(n.currentDonut, (a, o) => (Q(), ee("path", {
              key: `arc_${o}`,
              d: a.path,
              stroke: `${a.color}CC`,
              "stroke-width": 20,
              fill: "none"
            }, null, 8, YE))), 128)),
            (Q(!0), ee(be, null, St(n.currentDonut, (a, o) => (Q(), ee("foreignObject", {
              key: `text_marker_${o}`,
              x: s.calcDonutMarkerLabelPositionX(a) - 15,
              y: a.center.endY - 15,
              height: "30",
              width: "30",
              style: { overflow: "visible", display: "flex", "align-items": "center", "justify-content": "center" }
            }, [
              s.isArcBigEnough(a) ? (Q(), ee("div", qE, [
                K("b", null, re(s.displayArcPercentage(a, n.currentDonut)), 1),
                K("span", ZE, re(a.name), 1)
              ])) : Oe("", !0)
            ], 8, JE))), 128)),
            K("text", QE, re(n.parsedTranslations.total), 1),
            K("text", $E, re(n.headRef[n.currentSelectionSpan.col].prefix) + " " + re(s.donutHollowLabels.total) + " " + re(n.headRef[n.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + re(n.headRef[n.currentSelectionSpan.col].suffix), 1),
            K("text", eT, re(n.parsedTranslations.average), 1),
            K("text", tT, re(n.headRef[n.currentSelectionSpan.col].prefix) + " " + re(s.donutHollowLabels.average) + " " + re(n.headRef[n.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + re(n.headRef[n.currentSelectionSpan.col].suffix), 1)
          ])),
          K("div", rT, [
            (Q(!0), ee(be, null, St(n.currentDonut.filter((a) => a.value > 0), (a, o) => (Q(), ee("div", {
              class: "smart-table-donut-legend-item",
              key: `donut_legend_${o}`
            }, [
              K("span", {
                style: er(`color:${a.color}`)
              }, "●", 4),
              K("span", null, re(a.name) + " : ", 1),
              K("b", null, re(n.headRef[n.currentSelectionSpan.col].prefix) + " " + re(s.getDonutLegendValue(a.value)) + " " + re(n.headRef[n.currentSelectionSpan.col].isPercentage ? "%" : "") + " " + re(n.headRef[n.currentSelectionSpan.col].suffix), 1),
              K("span", null, "(" + re((a.proportion * 100).toFixed(1)) + "%)", 1)
            ]))), 128))
          ])
        ], 64)) : Oe("", !0)
      ], 512)
    ], 4)) : Oe("", !0)
  ], 4);
}
const iT = /* @__PURE__ */ F_(O_, [["render", nT], ["styles", [y_]], ["__scopeId", "data-v-a16dce74"]]), sT = Du(iT);
customElements.define("wc-smart-table", sT);
