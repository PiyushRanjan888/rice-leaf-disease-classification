var iu = (e) => {
  throw TypeError(e);
};
var ei = (e, t, n) => t.has(e) || iu("Cannot " + n);
var A = (e, t, n) => (
    ei(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  q = (e, t, n) =>
    t.has(e)
      ? iu("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  W = (e, t, n, o) => (
    ei(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n
  ),
  Ae = (e, t, n) => (ei(e, t, "access private method"), n);
var sa = (e, t, n, o) => ({
  set _(r) {
    W(e, t, r, n);
  },
  get _() {
    return A(e, t, o);
  },
});
function wv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const r in o)
        if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(o, r);
          a &&
            Object.defineProperty(
              e,
              r,
              a.get ? a : { enumerable: !0, get: () => o[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = n(r);
    fetch(r.href, a);
  }
})();
function sp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ip = { exports: {} },
  js = {},
  lp = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for("react.element"),
  jv = Symbol.for("react.portal"),
  Sv = Symbol.for("react.fragment"),
  Cv = Symbol.for("react.strict_mode"),
  Ev = Symbol.for("react.profiler"),
  Nv = Symbol.for("react.provider"),
  kv = Symbol.for("react.context"),
  Av = Symbol.for("react.forward_ref"),
  Tv = Symbol.for("react.suspense"),
  bv = Symbol.for("react.memo"),
  Pv = Symbol.for("react.lazy"),
  lu = Symbol.iterator;
function Dv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  up = Object.assign,
  dp = {};
function Go(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dp),
    (this.updater = n || cp);
}
Go.prototype.isReactComponent = {};
Go.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Go.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pp() {}
pp.prototype = Go.prototype;
function Hl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dp),
    (this.updater = n || cp);
}
var Wl = (Hl.prototype = new pp());
Wl.constructor = Hl;
up(Wl, Go.prototype);
Wl.isPureReactComponent = !0;
var cu = Array.isArray,
  fp = Object.prototype.hasOwnProperty,
  Vl = { current: null },
  mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function hp(e, t, n) {
  var o,
    r = {},
    a = null,
    s = null;
  if (t != null)
    for (o in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      fp.call(t, o) && !mp.hasOwnProperty(o) && (r[o] = t[o]);
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    for (var l = Array(i), c = 0; c < i; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  if (e && e.defaultProps)
    for (o in ((i = e.defaultProps), i)) r[o] === void 0 && (r[o] = i[o]);
  return {
    $$typeof: Yr,
    type: e,
    key: a,
    ref: s,
    props: r,
    _owner: Vl.current,
  };
}
function Rv(e, t) {
  return {
    $$typeof: Yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ql(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function Iv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var uu = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Iv("" + e.key)
    : t.toString(36);
}
function ba(e, t, n, o, r) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (a) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yr:
          case jv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (r = r(s)),
      (e = o === "" ? "." + ti(s, 0) : o),
      cu(r)
        ? ((n = ""),
          e != null && (n = e.replace(uu, "$&/") + "/"),
          ba(r, t, n, "", function (c) {
            return c;
          }))
        : r != null &&
          (Ql(r) &&
            (r = Rv(
              r,
              n +
                (!r.key || (s && s.key === r.key)
                  ? ""
                  : ("" + r.key).replace(uu, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((s = 0), (o = o === "" ? "." : o + ":"), cu(e)))
    for (var i = 0; i < e.length; i++) {
      a = e[i];
      var l = o + ti(a, i);
      s += ba(a, t, n, l, r);
    }
  else if (((l = Dv(e)), typeof l == "function"))
    for (e = l.call(e), i = 0; !(a = e.next()).done; )
      (a = a.value), (l = o + ti(a, i++)), (s += ba(a, t, n, l, r));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ia(e, t, n) {
  if (e == null) return e;
  var o = [],
    r = 0;
  return (
    ba(e, o, "", "", function (a) {
      return t.call(n, a, r++);
    }),
    o
  );
}
function Fv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Pa = { transition: null },
  _v = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Pa,
    ReactCurrentOwner: Vl,
  };
function vp() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: ia,
  forEach: function (e, t, n) {
    ia(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ia(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ia(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ql(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Go;
G.Fragment = Sv;
G.Profiler = Ev;
G.PureComponent = Hl;
G.StrictMode = Cv;
G.Suspense = Tv;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _v;
G.act = vp;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var o = up({}, e.props),
    r = e.key,
    a = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (s = Vl.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (l in t)
      fp.call(t, l) &&
        !mp.hasOwnProperty(l) &&
        (o[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    i = Array(l);
    for (var c = 0; c < l; c++) i[c] = arguments[c + 2];
    o.children = i;
  }
  return { $$typeof: Yr, type: e.type, key: r, ref: a, props: o, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: kv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nv, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = hp;
G.createFactory = function (e) {
  var t = hp.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Av, render: e };
};
G.isValidElement = Ql;
G.lazy = function (e) {
  return { $$typeof: Pv, _payload: { _status: -1, _result: e }, _init: Fv };
};
G.memo = function (e, t) {
  return { $$typeof: bv, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Pa.transition;
  Pa.transition = {};
  try {
    e();
  } finally {
    Pa.transition = t;
  }
};
G.unstable_act = vp;
G.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Oe.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
G.useId = function () {
  return Oe.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Oe.current.useRef(e);
};
G.useState = function (e) {
  return Oe.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Oe.current.useTransition();
};
G.version = "18.3.1";
lp.exports = G;
var j = lp.exports;
const P = sp(j),
  Bv = wv({ __proto__: null, default: P }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ov = j,
  Lv = Symbol.for("react.element"),
  Mv = Symbol.for("react.fragment"),
  zv = Object.prototype.hasOwnProperty,
  Uv = Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $v = { key: !0, ref: !0, __self: !0, __source: !0 };
function gp(e, t, n) {
  var o,
    r = {},
    a = null,
    s = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (o in t) zv.call(t, o) && !$v.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in ((t = e.defaultProps), t)) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: Lv,
    type: e,
    key: a,
    ref: s,
    props: r,
    _owner: Uv.current,
  };
}
js.Fragment = Mv;
js.jsx = gp;
js.jsxs = gp;
ip.exports = js;
var v = ip.exports,
  xp = { exports: {} },
  et = {},
  yp = { exports: {} },
  wp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, D) {
    var L = E.length;
    E.push(D);
    e: for (; 0 < L; ) {
      var _ = (L - 1) >>> 1,
        M = E[_];
      if (0 < r(M, D)) (E[_] = D), (E[L] = M), (L = _);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function o(E) {
    if (E.length === 0) return null;
    var D = E[0],
      L = E.pop();
    if (L !== D) {
      E[0] = L;
      e: for (var _ = 0, M = E.length, Y = M >>> 1; _ < Y; ) {
        var ie = 2 * (_ + 1) - 1,
          Ve = E[ie],
          Z = ie + 1,
          ct = E[Z];
        if (0 > r(Ve, L))
          Z < M && 0 > r(ct, Ve)
            ? ((E[_] = ct), (E[Z] = L), (_ = Z))
            : ((E[_] = Ve), (E[ie] = L), (_ = ie));
        else if (Z < M && 0 > r(ct, L)) (E[_] = ct), (E[Z] = L), (_ = Z);
        else break e;
      }
    }
    return D;
  }
  function r(E, D) {
    var L = E.sortIndex - D.sortIndex;
    return L !== 0 ? L : E.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var s = Date,
      i = s.now();
    e.unstable_now = function () {
      return s.now() - i;
    };
  }
  var l = [],
    c = [],
    d = 1,
    p = null,
    u = 3,
    x = !1,
    w = !1,
    g = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) o(c);
      else if (D.startTime <= E)
        o(c), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(c);
    }
  }
  function S(E) {
    if (((g = !1), h(E), !w))
      if (n(l) !== null) (w = !0), U(C);
      else {
        var D = n(c);
        D !== null && K(S, D.startTime - E);
      }
  }
  function C(E, D) {
    (w = !1), g && ((g = !1), m(T), (T = -1)), (x = !0);
    var L = u;
    try {
      for (
        h(D), p = n(l);
        p !== null && (!(p.expirationTime > D) || (E && !z()));

      ) {
        var _ = p.callback;
        if (typeof _ == "function") {
          (p.callback = null), (u = p.priorityLevel);
          var M = _(p.expirationTime <= D);
          (D = e.unstable_now()),
            typeof M == "function" ? (p.callback = M) : p === n(l) && o(l),
            h(D);
        } else o(l);
        p = n(l);
      }
      if (p !== null) var Y = !0;
      else {
        var ie = n(c);
        ie !== null && K(S, ie.startTime - D), (Y = !1);
      }
      return Y;
    } finally {
      (p = null), (u = L), (x = !1);
    }
  }
  var N = !1,
    k = null,
    T = -1,
    B = 5,
    R = -1;
  function z() {
    return !(e.unstable_now() - R < B);
  }
  function O() {
    if (k !== null) {
      var E = e.unstable_now();
      R = E;
      var D = !0;
      try {
        D = k(!0, E);
      } finally {
        D ? V() : ((N = !1), (k = null));
      }
    } else N = !1;
  }
  var V;
  if (typeof f == "function")
    V = function () {
      f(O);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      Q = I.port2;
    (I.port1.onmessage = O),
      (V = function () {
        Q.postMessage(null);
      });
  } else
    V = function () {
      y(O, 0);
    };
  function U(E) {
    (k = E), N || ((N = !0), V());
  }
  function K(E, D) {
    T = y(function () {
      E(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return u;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = u;
      }
      var L = u;
      u = D;
      try {
        return E();
      } finally {
        u = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, D) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var L = u;
      u = E;
      try {
        return D();
      } finally {
        u = L;
      }
    }),
    (e.unstable_scheduleCallback = function (E, D, L) {
      var _ = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? _ + L : _))
          : (L = _),
        E)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = L + M),
        (E = {
          id: d++,
          callback: D,
          priorityLevel: E,
          startTime: L,
          expirationTime: M,
          sortIndex: -1,
        }),
        L > _
          ? ((E.sortIndex = L),
            t(c, E),
            n(l) === null &&
              E === n(c) &&
              (g ? (m(T), (T = -1)) : (g = !0), K(S, L - _)))
          : ((E.sortIndex = M), t(l, E), w || x || ((w = !0), U(C))),
        E
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (E) {
      var D = u;
      return function () {
        var L = u;
        u = D;
        try {
          return E.apply(this, arguments);
        } finally {
          u = L;
        }
      };
    });
})(wp);
yp.exports = wp;
var Hv = yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wv = j,
  Je = Hv;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var jp = new Set(),
  Nr = {};
function eo(e, t) {
  Mo(e, t), Mo(e + "Capture", t);
}
function Mo(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) jp.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fi = Object.prototype.hasOwnProperty,
  Vv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  pu = {};
function Qv(e) {
  return Fi.call(pu, e)
    ? !0
    : Fi.call(du, e)
      ? !1
      : Vv.test(e)
        ? (pu[e] = !0)
        : ((du[e] = !0), !1);
}
function Kv(e, t, n, o) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gv(e, t, n, o) {
  if (t === null || typeof t > "u" || Kv(e, t, n, o)) return !0;
  if (o) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Le(e, t, n, o, r, a, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = o),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = s);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kl = /[\-:]([a-z])/g;
function Gl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Gl);
    Ce[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Gl);
    Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Kl, Gl);
  Ce[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yl(e, t, n, o) {
  var r = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (r !== null
    ? r.type !== 0
    : o ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gv(t, n, r, o) && (n = null),
    o || r === null
      ? Qv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
        ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((t = r.attributeName),
          (o = r.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
}
var Xt = Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  la = Symbol.for("react.element"),
  io = Symbol.for("react.portal"),
  lo = Symbol.for("react.fragment"),
  Xl = Symbol.for("react.strict_mode"),
  _i = Symbol.for("react.profiler"),
  Sp = Symbol.for("react.provider"),
  Cp = Symbol.for("react.context"),
  ql = Symbol.for("react.forward_ref"),
  Bi = Symbol.for("react.suspense"),
  Oi = Symbol.for("react.suspense_list"),
  Zl = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  Ep = Symbol.for("react.offscreen"),
  fu = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  ni;
function dr(e) {
  if (ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ni = (t && t[1]) || "";
    }
  return (
    `
` +
    ni +
    e
  );
}
var oi = !1;
function ri(e, t) {
  if (!e || oi) return "";
  oi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var o = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          o = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        o = c;
      }
      e();
    }
  } catch (c) {
    if (c && o && typeof c.stack == "string") {
      for (
        var r = c.stack.split(`
`),
          a = o.stack.split(`
`),
          s = r.length - 1,
          i = a.length - 1;
        1 <= s && 0 <= i && r[s] !== a[i];

      )
        i--;
      for (; 1 <= s && 0 <= i; s--, i--)
        if (r[s] !== a[i]) {
          if (s !== 1 || i !== 1)
            do
              if ((s--, i--, 0 > i || r[s] !== a[i])) {
                var l =
                  `
` + r[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= i);
          break;
        }
    }
  } finally {
    (oi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Yv(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ri(e.type, !1)), e;
    case 11:
      return (e = ri(e.type.render, !1)), e;
    case 1:
      return (e = ri(e.type, !0)), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case lo:
      return "Fragment";
    case io:
      return "Portal";
    case _i:
      return "Profiler";
    case Xl:
      return "StrictMode";
    case Bi:
      return "Suspense";
    case Oi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cp:
        return (e.displayName || "Context") + ".Consumer";
      case Sp:
        return (e._context.displayName || "Context") + ".Provider";
      case ql:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zl:
        return (
          (t = e.displayName || null), t !== null ? t : Li(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function Xv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Li(t);
    case 8:
      return t === Xl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function An(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Np(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qv(e) {
  var t = Np(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    o = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (s) {
          (o = "" + s), a.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (s) {
          o = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ca(e) {
  e._valueTracker || (e._valueTracker = qv(e));
}
function kp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    o = "";
  return (
    e && (o = Np(e) ? (e.checked ? "true" : "false") : e.value),
    (e = o),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    o = t.checked != null ? t.checked : t.defaultChecked;
  (n = An(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: o,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ap(e, t) {
  (t = t.checked), t != null && Yl(e, "checked", t, !1);
}
function zi(e, t) {
  Ap(e, t);
  var n = An(t.value),
    o = t.type;
  if (n != null)
    o === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ui(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ui(e, t.type, An(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var o = t.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ui(e, t, n) {
  (t !== "number" || Wa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function wo(e, t, n, o) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && o && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + An(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), o && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function $i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: An(n) };
}
function Tp(e, t) {
  var n = An(t.value),
    o = An(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    o != null && (e.defaultValue = "" + o);
}
function gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ua,
  Pp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, o, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, o, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ua = ua || document.createElement("div"),
          ua.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ua.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zv = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function (e) {
  Zv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hr[t] = hr[e]);
  });
});
function Dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hr.hasOwnProperty(e) && hr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Rp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0,
        r = Dp(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, r) : (e[n] = r);
    }
}
var Jv = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Wi(e, t) {
  if (t) {
    if (Jv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function Vi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qi = null;
function Jl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ki = null,
  jo = null,
  So = null;
function xu(e) {
  if ((e = Zr(e))) {
    if (typeof Ki != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = ks(t)), Ki(e.stateNode, e.type, t));
  }
}
function Ip(e) {
  jo ? (So ? So.push(e) : (So = [e])) : (jo = e);
}
function Fp() {
  if (jo) {
    var e = jo,
      t = So;
    if (((So = jo = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
  }
}
function _p(e, t) {
  return e(t);
}
function Bp() {}
var ai = !1;
function Op(e, t, n) {
  if (ai) return e(t, n);
  ai = !0;
  try {
    return _p(e, t, n);
  } finally {
    (ai = !1), (jo !== null || So !== null) && (Bp(), Fp());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var o = ks(n);
  if (o === null) return null;
  n = o[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((e = e.type),
        (o = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !o);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var Gi = !1;
if (Ht)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    Gi = !1;
  }
function e2(e, t, n, o, r, a, s, i, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var vr = !1,
  Va = null,
  Qa = !1,
  Yi = null,
  t2 = {
    onError: function (e) {
      (vr = !0), (Va = e);
    },
  };
function n2(e, t, n, o, r, a, s, i, l) {
  (vr = !1), (Va = null), e2.apply(t2, arguments);
}
function o2(e, t, n, o, r, a, s, i, l) {
  if ((n2.apply(this, arguments), vr)) {
    if (vr) {
      var c = Va;
      (vr = !1), (Va = null);
    } else throw Error(b(198));
    Qa || ((Qa = !0), (Yi = c));
  }
}
function to(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yu(e) {
  if (to(e) !== e) throw Error(b(188));
}
function r2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = to(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, o = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var a = r.alternate;
    if (a === null) {
      if (((o = r.return), o !== null)) {
        n = o;
        continue;
      }
      break;
    }
    if (r.child === a.child) {
      for (a = r.child; a; ) {
        if (a === n) return yu(r), e;
        if (a === o) return yu(r), t;
        a = a.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== o.return) (n = r), (o = a);
    else {
      for (var s = !1, i = r.child; i; ) {
        if (i === n) {
          (s = !0), (n = r), (o = a);
          break;
        }
        if (i === o) {
          (s = !0), (o = r), (n = a);
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = a.child; i; ) {
          if (i === n) {
            (s = !0), (n = a), (o = r);
            break;
          }
          if (i === o) {
            (s = !0), (o = a), (n = r);
            break;
          }
          i = i.sibling;
        }
        if (!s) throw Error(b(189));
      }
    }
    if (n.alternate !== o) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Mp(e) {
  return (e = r2(e)), e !== null ? zp(e) : null;
}
function zp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Up = Je.unstable_scheduleCallback,
  wu = Je.unstable_cancelCallback,
  a2 = Je.unstable_shouldYield,
  s2 = Je.unstable_requestPaint,
  fe = Je.unstable_now,
  i2 = Je.unstable_getCurrentPriorityLevel,
  ec = Je.unstable_ImmediatePriority,
  $p = Je.unstable_UserBlockingPriority,
  Ka = Je.unstable_NormalPriority,
  l2 = Je.unstable_LowPriority,
  Hp = Je.unstable_IdlePriority,
  Ss = null,
  Dt = null;
function c2(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : p2,
  u2 = Math.log,
  d2 = Math.LN2;
function p2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((u2(e) / d2) | 0)) | 0;
}
var da = 64,
  pa = 4194304;
function fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ga(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var o = 0,
    r = e.suspendedLanes,
    a = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var i = s & ~r;
    i !== 0 ? (o = fr(i)) : ((a &= s), a !== 0 && (o = fr(a)));
  } else (s = n & ~r), s !== 0 ? (o = fr(s)) : a !== 0 && (o = fr(a));
  if (o === 0) return 0;
  if (
    t !== 0 &&
    t !== o &&
    !(t & r) &&
    ((r = o & -o), (a = t & -t), r >= a || (r === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((o & 4 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= o; 0 < t; )
      (n = 31 - vt(t)), (r = 1 << n), (o |= e[n]), (t &= ~r);
  return o;
}
function f2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function m2(e, t) {
  for (
    var n = e.suspendedLanes,
      o = e.pingedLanes,
      r = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var s = 31 - vt(a),
      i = 1 << s,
      l = r[s];
    l === -1
      ? (!(i & n) || i & o) && (r[s] = f2(i, t))
      : l <= t && (e.expiredLanes |= i),
      (a &= ~i);
  }
}
function Xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wp() {
  var e = da;
  return (da <<= 1), !(da & 4194240) && (da = 64), e;
}
function si(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function h2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - vt(n),
      a = 1 << r;
    (t[r] = 0), (o[r] = -1), (e[r] = -1), (n &= ~a);
  }
}
function tc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var o = 31 - vt(n),
      r = 1 << o;
    (r & t) | (e[o] & t) && (e[o] |= t), (n &= ~r);
  }
}
var J = 0;
function Vp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qp,
  nc,
  Kp,
  Gp,
  Yp,
  qi = !1,
  fa = [],
  yn = null,
  wn = null,
  jn = null,
  Tr = new Map(),
  br = new Map(),
  cn = [],
  v2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ju(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      br.delete(t.pointerId);
  }
}
function or(e, t, n, o, r, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: o,
        nativeEvent: a,
        targetContainers: [r],
      }),
      t !== null && ((t = Zr(t)), t !== null && nc(t)),
      e)
    : ((e.eventSystemFlags |= o),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function g2(e, t, n, o, r) {
  switch (t) {
    case "focusin":
      return (yn = or(yn, e, t, n, o, r)), !0;
    case "dragenter":
      return (wn = or(wn, e, t, n, o, r)), !0;
    case "mouseover":
      return (jn = or(jn, e, t, n, o, r)), !0;
    case "pointerover":
      var a = r.pointerId;
      return Tr.set(a, or(Tr.get(a) || null, e, t, n, o, r)), !0;
    case "gotpointercapture":
      return (
        (a = r.pointerId), br.set(a, or(br.get(a) || null, e, t, n, o, r)), !0
      );
  }
  return !1;
}
function Xp(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = to(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lp(n)), t !== null)) {
          (e.blockedOn = t),
            Yp(e.priority, function () {
              Kp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Da(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var o = new n.constructor(n.type, n);
      (Qi = o), n.target.dispatchEvent(o), (Qi = null);
    } else return (t = Zr(n)), t !== null && nc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, n) {
  Da(e) && n.delete(t);
}
function x2() {
  (qi = !1),
    yn !== null && Da(yn) && (yn = null),
    wn !== null && Da(wn) && (wn = null),
    jn !== null && Da(jn) && (jn = null),
    Tr.forEach(Su),
    br.forEach(Su);
}
function rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi ||
      ((qi = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, x2)));
}
function Pr(e) {
  function t(r) {
    return rr(r, e);
  }
  if (0 < fa.length) {
    rr(fa[0], e);
    for (var n = 1; n < fa.length; n++) {
      var o = fa[n];
      o.blockedOn === e && (o.blockedOn = null);
    }
  }
  for (
    yn !== null && rr(yn, e),
      wn !== null && rr(wn, e),
      jn !== null && rr(jn, e),
      Tr.forEach(t),
      br.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (o = cn[n]), o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    Xp(n), n.blockedOn === null && cn.shift();
}
var Co = Xt.ReactCurrentBatchConfig,
  Ya = !0;
function y2(e, t, n, o) {
  var r = J,
    a = Co.transition;
  Co.transition = null;
  try {
    (J = 1), oc(e, t, n, o);
  } finally {
    (J = r), (Co.transition = a);
  }
}
function w2(e, t, n, o) {
  var r = J,
    a = Co.transition;
  Co.transition = null;
  try {
    (J = 4), oc(e, t, n, o);
  } finally {
    (J = r), (Co.transition = a);
  }
}
function oc(e, t, n, o) {
  if (Ya) {
    var r = Zi(e, t, n, o);
    if (r === null) vi(e, t, o, Xa, n), ju(e, o);
    else if (g2(r, e, t, n, o)) o.stopPropagation();
    else if ((ju(e, o), t & 4 && -1 < v2.indexOf(e))) {
      for (; r !== null; ) {
        var a = Zr(r);
        if (
          (a !== null && Qp(a),
          (a = Zi(e, t, n, o)),
          a === null && vi(e, t, o, Xa, n),
          a === r)
        )
          break;
        r = a;
      }
      r !== null && o.stopPropagation();
    } else vi(e, t, o, null, n);
  }
}
var Xa = null;
function Zi(e, t, n, o) {
  if (((Xa = null), (e = Jl(o)), (e = Mn(e)), e !== null))
    if (((t = to(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xa = e), null;
}
function qp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (i2()) {
        case ec:
          return 1;
        case $p:
          return 4;
        case Ka:
        case l2:
          return 16;
        case Hp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vn = null,
  rc = null,
  Ra = null;
function Zp() {
  if (Ra) return Ra;
  var e,
    t = rc,
    n = t.length,
    o,
    r = "value" in vn ? vn.value : vn.textContent,
    a = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var s = n - e;
  for (o = 1; o <= s && t[n - o] === r[a - o]; o++);
  return (Ra = r.slice(e, 1 < o ? 1 - o : void 0));
}
function Ia(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ma() {
  return !0;
}
function Cu() {
  return !1;
}
function tt(e) {
  function t(n, o, r, a, s) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = o),
      (this.nativeEvent = a),
      (this.target = s),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(a) : a[i]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? ma
        : Cu),
      (this.isPropagationStopped = Cu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ma));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ma));
      },
      persist: function () {},
      isPersistent: ma,
    }),
    t
  );
}
var Yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ac = tt(Yo),
  qr = ue({}, Yo, { view: 0, detail: 0 }),
  j2 = tt(qr),
  ii,
  li,
  ar,
  Cs = ue({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === "mousemove"
              ? ((ii = e.screenX - ar.screenX), (li = e.screenY - ar.screenY))
              : (li = ii = 0),
            (ar = e)),
          ii);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : li;
    },
  }),
  Eu = tt(Cs),
  S2 = ue({}, Cs, { dataTransfer: 0 }),
  C2 = tt(S2),
  E2 = ue({}, qr, { relatedTarget: 0 }),
  ci = tt(E2),
  N2 = ue({}, Yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k2 = tt(N2),
  A2 = ue({}, Yo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  T2 = tt(A2),
  b2 = ue({}, Yo, { data: 0 }),
  Nu = tt(b2),
  P2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  D2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  R2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function I2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = R2[e]) ? !!t[e] : !1;
}
function sc() {
  return I2;
}
var F2 = ue({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = P2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ia(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? D2[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function (e) {
      return e.type === "keypress" ? Ia(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ia(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  _2 = tt(F2),
  B2 = ue({}, Cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ku = tt(B2),
  O2 = ue({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc,
  }),
  L2 = tt(O2),
  M2 = ue({}, Yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z2 = tt(M2),
  U2 = ue({}, Cs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $2 = tt(U2),
  H2 = [9, 13, 27, 32],
  ic = Ht && "CompositionEvent" in window,
  gr = null;
Ht && "documentMode" in document && (gr = document.documentMode);
var W2 = Ht && "TextEvent" in window && !gr,
  Jp = Ht && (!ic || (gr && 8 < gr && 11 >= gr)),
  Au = " ",
  Tu = !1;
function ef(e, t) {
  switch (e) {
    case "keyup":
      return H2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var co = !1;
function V2(e, t) {
  switch (e) {
    case "compositionend":
      return tf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tu = !0), Au);
    case "textInput":
      return (e = t.data), e === Au && Tu ? null : e;
    default:
      return null;
  }
}
function Q2(e, t) {
  if (co)
    return e === "compositionend" || (!ic && ef(e, t))
      ? ((e = Zp()), (Ra = rc = vn = null), (co = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var K2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K2[e.type] : t === "textarea";
}
function nf(e, t, n, o) {
  Ip(o),
    (t = qa(t, "onChange")),
    0 < t.length &&
      ((n = new ac("onChange", "change", null, n, o)),
      e.push({ event: n, listeners: t }));
}
var xr = null,
  Dr = null;
function G2(e) {
  mf(e, 0);
}
function Es(e) {
  var t = fo(e);
  if (kp(t)) return e;
}
function Y2(e, t) {
  if (e === "change") return t;
}
var of = !1;
if (Ht) {
  var ui;
  if (Ht) {
    var di = "oninput" in document;
    if (!di) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"),
        (di = typeof Pu.oninput == "function");
    }
    ui = di;
  } else ui = !1;
  of = ui && (!document.documentMode || 9 < document.documentMode);
}
function Du() {
  xr && (xr.detachEvent("onpropertychange", rf), (Dr = xr = null));
}
function rf(e) {
  if (e.propertyName === "value" && Es(Dr)) {
    var t = [];
    nf(t, Dr, e, Jl(e)), Op(G2, t);
  }
}
function X2(e, t, n) {
  e === "focusin"
    ? (Du(), (xr = t), (Dr = n), xr.attachEvent("onpropertychange", rf))
    : e === "focusout" && Du();
}
function q2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es(Dr);
}
function Z2(e, t) {
  if (e === "click") return Es(t);
}
function J2(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function e0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : e0;
function Rr(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (o = 0; o < n.length; o++) {
    var r = n[o];
    if (!Fi.call(t, r) || !xt(e[r], t[r])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Ru(e);
  e = 0;
  for (var o; n; ) {
    if (n.nodeType === 3) {
      if (((o = e + n.textContent.length), e <= t && o >= t))
        return { node: n, offset: t - e };
      e = o;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function af(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? af(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sf() {
  for (var e = window, t = Wa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wa(e.document);
  }
  return t;
}
function lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function t0(e) {
  var t = sf(),
    n = e.focusedElem,
    o = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    af(n.ownerDocument.documentElement, n)
  ) {
    if (o !== null && lc(n)) {
      if (
        ((t = o.start),
        (e = o.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          a = Math.min(o.start, r);
        (o = o.end === void 0 ? a : Math.min(o.end, r)),
          !e.extend && a > o && ((r = o), (o = a), (a = r)),
          (r = Iu(n, a));
        var s = Iu(n, o);
        r &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          a > o
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var n0 = Ht && "documentMode" in document && 11 >= document.documentMode,
  uo = null,
  Ji = null,
  yr = null,
  el = !1;
function Fu(e, t, n) {
  var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  el ||
    uo == null ||
    uo !== Wa(o) ||
    ((o = uo),
    "selectionStart" in o && lc(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (yr && Rr(yr, o)) ||
      ((yr = o),
      (o = qa(Ji, "onSelect")),
      0 < o.length &&
        ((t = new ac("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: o }),
        (t.target = uo))));
}
function ha(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var po = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionend: ha("Transition", "TransitionEnd"),
  },
  pi = {},
  lf = {};
Ht &&
  ((lf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete po.animationend.animation,
    delete po.animationiteration.animation,
    delete po.animationstart.animation),
  "TransitionEvent" in window || delete po.transitionend.transition);
function Ns(e) {
  if (pi[e]) return pi[e];
  if (!po[e]) return e;
  var t = po[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lf) return (pi[e] = t[n]);
  return e;
}
var cf = Ns("animationend"),
  uf = Ns("animationiteration"),
  df = Ns("animationstart"),
  pf = Ns("transitionend"),
  ff = new Map(),
  _u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function In(e, t) {
  ff.set(e, t), eo(t, [e]);
}
for (var fi = 0; fi < _u.length; fi++) {
  var mi = _u[fi],
    o0 = mi.toLowerCase(),
    r0 = mi[0].toUpperCase() + mi.slice(1);
  In(o0, "on" + r0);
}
In(cf, "onAnimationEnd");
In(uf, "onAnimationIteration");
In(df, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(pf, "onTransitionEnd");
Mo("onMouseEnter", ["mouseout", "mouseover"]);
Mo("onMouseLeave", ["mouseout", "mouseover"]);
Mo("onPointerEnter", ["pointerout", "pointerover"]);
Mo("onPointerLeave", ["pointerout", "pointerover"]);
eo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
eo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
eo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  a0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function Bu(e, t, n) {
  var o = e.type || "unknown-event";
  (e.currentTarget = n), o2(o, t, void 0, e), (e.currentTarget = null);
}
function mf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var o = e[n],
      r = o.event;
    o = o.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var s = o.length - 1; 0 <= s; s--) {
          var i = o[s],
            l = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), l !== a && r.isPropagationStopped())) break e;
          Bu(r, i, c), (a = l);
        }
      else
        for (s = 0; s < o.length; s++) {
          if (
            ((i = o[s]),
            (l = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            l !== a && r.isPropagationStopped())
          )
            break e;
          Bu(r, i, c), (a = l);
        }
    }
  }
  if (Qa) throw ((e = Yi), (Qa = !1), (Yi = null), e);
}
function re(e, t) {
  var n = t[al];
  n === void 0 && (n = t[al] = new Set());
  var o = e + "__bubble";
  n.has(o) || (hf(t, e, 2, !1), n.add(o));
}
function hi(e, t, n) {
  var o = 0;
  t && (o |= 4), hf(n, e, o, t);
}
var va = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[va]) {
    (e[va] = !0),
      jp.forEach(function (n) {
        n !== "selectionchange" && (a0.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[va] || ((t[va] = !0), hi("selectionchange", !1, t));
  }
}
function hf(e, t, n, o) {
  switch (qp(t)) {
    case 1:
      var r = y2;
      break;
    case 4:
      r = w2;
      break;
    default:
      r = oc;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !Gi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    o
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
        ? e.addEventListener(t, n, { passive: r })
        : e.addEventListener(t, n, !1);
}
function vi(e, t, n, o, r) {
  var a = o;
  if (!(t & 1) && !(t & 2) && o !== null)
    e: for (;;) {
      if (o === null) return;
      var s = o.tag;
      if (s === 3 || s === 4) {
        var i = o.stateNode.containerInfo;
        if (i === r || (i.nodeType === 8 && i.parentNode === r)) break;
        if (s === 4)
          for (s = o.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            s = s.return;
          }
        for (; i !== null; ) {
          if (((s = Mn(i)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            o = a = s;
            continue e;
          }
          i = i.parentNode;
        }
      }
      o = o.return;
    }
  Op(function () {
    var c = a,
      d = Jl(n),
      p = [];
    e: {
      var u = ff.get(e);
      if (u !== void 0) {
        var x = ac,
          w = e;
        switch (e) {
          case "keypress":
            if (Ia(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = _2;
            break;
          case "focusin":
            (w = "focus"), (x = ci);
            break;
          case "focusout":
            (w = "blur"), (x = ci);
            break;
          case "beforeblur":
          case "afterblur":
            x = ci;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = C2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = L2;
            break;
          case cf:
          case uf:
          case df:
            x = k2;
            break;
          case pf:
            x = z2;
            break;
          case "scroll":
            x = j2;
            break;
          case "wheel":
            x = $2;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = T2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ku;
        }
        var g = (t & 4) !== 0,
          y = !g && e === "scroll",
          m = g ? (u !== null ? u + "Capture" : null) : u;
        g = [];
        for (var f = c, h; f !== null; ) {
          h = f;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              m !== null && ((S = Ar(f, m)), S != null && g.push(Fr(f, S, h)))),
            y)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((u = new x(u, w, null, n, d)), p.push({ event: u, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((u = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          u &&
            n !== Qi &&
            (w = n.relatedTarget || n.fromElement) &&
            (Mn(w) || w[Wt]))
        )
          break e;
        if (
          (x || u) &&
          ((u =
            d.window === d
              ? d
              : (u = d.ownerDocument)
                ? u.defaultView || u.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? Mn(w) : null),
              w !== null &&
                ((y = to(w)), w !== y || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((g = Eu),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ku),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (y = x == null ? u : fo(x)),
            (h = w == null ? u : fo(w)),
            (u = new g(S, f + "leave", x, n, d)),
            (u.target = y),
            (u.relatedTarget = h),
            (S = null),
            Mn(d) === c &&
              ((g = new g(m, f + "enter", w, n, d)),
              (g.target = h),
              (g.relatedTarget = y),
              (S = g)),
            (y = S),
            x && w)
          )
            t: {
              for (g = x, m = w, f = 0, h = g; h; h = so(h)) f++;
              for (h = 0, S = m; S; S = so(S)) h++;
              for (; 0 < f - h; ) (g = so(g)), f--;
              for (; 0 < h - f; ) (m = so(m)), h--;
              for (; f--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = so(g)), (m = so(m));
              }
              g = null;
            }
          else g = null;
          x !== null && Ou(p, u, x, g, !1),
            w !== null && y !== null && Ou(p, y, w, g, !0);
        }
      }
      e: {
        if (
          ((u = c ? fo(c) : window),
          (x = u.nodeName && u.nodeName.toLowerCase()),
          x === "select" || (x === "input" && u.type === "file"))
        )
          var C = Y2;
        else if (bu(u))
          if (of) C = J2;
          else {
            C = q2;
            var N = X2;
          }
        else
          (x = u.nodeName) &&
            x.toLowerCase() === "input" &&
            (u.type === "checkbox" || u.type === "radio") &&
            (C = Z2);
        if (C && (C = C(e, c))) {
          nf(p, C, n, d);
          break e;
        }
        N && N(e, u, c),
          e === "focusout" &&
            (N = u._wrapperState) &&
            N.controlled &&
            u.type === "number" &&
            Ui(u, "number", u.value);
      }
      switch (((N = c ? fo(c) : window), e)) {
        case "focusin":
          (bu(N) || N.contentEditable === "true") &&
            ((uo = N), (Ji = c), (yr = null));
          break;
        case "focusout":
          yr = Ji = uo = null;
          break;
        case "mousedown":
          el = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (el = !1), Fu(p, n, d);
          break;
        case "selectionchange":
          if (n0) break;
        case "keydown":
        case "keyup":
          Fu(p, n, d);
      }
      var k;
      if (ic)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        co
          ? ef(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Jp &&
          n.locale !== "ko" &&
          (co || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && co && (k = Zp())
            : ((vn = d),
              (rc = "value" in vn ? vn.value : vn.textContent),
              (co = !0))),
        (N = qa(c, T)),
        0 < N.length &&
          ((T = new Nu(T, e, null, n, d)),
          p.push({ event: T, listeners: N }),
          k ? (T.data = k) : ((k = tf(n)), k !== null && (T.data = k)))),
        (k = W2 ? V2(e, n) : Q2(e, n)) &&
          ((c = qa(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Nu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    mf(p, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qa(e, t) {
  for (var n = t + "Capture", o = []; e !== null; ) {
    var r = e,
      a = r.stateNode;
    r.tag === 5 &&
      a !== null &&
      ((r = a),
      (a = Ar(e, n)),
      a != null && o.unshift(Fr(e, a, r)),
      (a = Ar(e, t)),
      a != null && o.push(Fr(e, a, r))),
      (e = e.return);
  }
  return o;
}
function so(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, o, r) {
  for (var a = t._reactName, s = []; n !== null && n !== o; ) {
    var i = n,
      l = i.alternate,
      c = i.stateNode;
    if (l !== null && l === o) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      r
        ? ((l = Ar(n, a)), l != null && s.unshift(Fr(n, l, i)))
        : r || ((l = Ar(n, a)), l != null && s.push(Fr(n, l, i)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var s0 = /\r\n?/g,
  i0 = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      s0,
      `
`
    )
    .replace(i0, "");
}
function ga(e, t, n) {
  if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(b(425));
}
function Za() {}
var tl = null,
  nl = null;
function ol(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rl = typeof setTimeout == "function" ? setTimeout : void 0,
  l0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mu = typeof Promise == "function" ? Promise : void 0,
  c0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mu < "u"
        ? function (e) {
            return Mu.resolve(null).then(e).catch(u0);
          }
        : rl;
function u0(e) {
  setTimeout(function () {
    throw e;
  });
}
function gi(e, t) {
  var n = t,
    o = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (o === 0) {
          e.removeChild(r), Pr(t);
          return;
        }
        o--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || o++;
    n = r;
  } while (n);
  Pr(t);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xo = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Xo,
  _r = "__reactProps$" + Xo,
  Wt = "__reactContainer$" + Xo,
  al = "__reactEvents$" + Xo,
  d0 = "__reactListeners$" + Xo,
  p0 = "__reactHandles$" + Xo;
function Mn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[Pt] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function ks(e) {
  return e[_r] || null;
}
var sl = [],
  mo = -1;
function Fn(e) {
  return { current: e };
}
function ae(e) {
  0 > mo || ((e.current = sl[mo]), (sl[mo] = null), mo--);
}
function te(e, t) {
  mo++, (sl[mo] = e.current), (e.current = t);
}
var Tn = {},
  Re = Fn(Tn),
  Ue = Fn(!1),
  Gn = Tn;
function zo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
    return o.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    a;
  for (a in n) r[a] = t[a];
  return (
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function Ja() {
  ae(Ue), ae(Re);
}
function Uu(e, t, n) {
  if (Re.current !== Tn) throw Error(b(168));
  te(Re, t), te(Ue, n);
}
function vf(e, t, n) {
  var o = e.stateNode;
  if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
    return n;
  o = o.getChildContext();
  for (var r in o) if (!(r in t)) throw Error(b(108, Xv(e) || "Unknown", r));
  return ue({}, n, o);
}
function es(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Gn = Re.current),
    te(Re, e),
    te(Ue, Ue.current),
    !0
  );
}
function $u(e, t, n) {
  var o = e.stateNode;
  if (!o) throw Error(b(169));
  n
    ? ((e = vf(e, t, Gn)),
      (o.__reactInternalMemoizedMergedChildContext = e),
      ae(Ue),
      ae(Re),
      te(Re, e))
    : ae(Ue),
    te(Ue, n);
}
var Lt = null,
  As = !1,
  xi = !1;
function gf(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function f0(e) {
  (As = !0), gf(e);
}
function _n() {
  if (!xi && Lt !== null) {
    xi = !0;
    var e = 0,
      t = J;
    try {
      var n = Lt;
      for (J = 1; e < n.length; e++) {
        var o = n[e];
        do o = o(!0);
        while (o !== null);
      }
      (Lt = null), (As = !1);
    } catch (r) {
      throw (Lt !== null && (Lt = Lt.slice(e + 1)), Up(ec, _n), r);
    } finally {
      (J = t), (xi = !1);
    }
  }
  return null;
}
var ho = [],
  vo = 0,
  ts = null,
  ns = 0,
  ot = [],
  rt = 0,
  Yn = null,
  Mt = 1,
  zt = "";
function On(e, t) {
  (ho[vo++] = ns), (ho[vo++] = ts), (ts = e), (ns = t);
}
function xf(e, t, n) {
  (ot[rt++] = Mt), (ot[rt++] = zt), (ot[rt++] = Yn), (Yn = e);
  var o = Mt;
  e = zt;
  var r = 32 - vt(o) - 1;
  (o &= ~(1 << r)), (n += 1);
  var a = 32 - vt(t) + r;
  if (30 < a) {
    var s = r - (r % 5);
    (a = (o & ((1 << s) - 1)).toString(32)),
      (o >>= s),
      (r -= s),
      (Mt = (1 << (32 - vt(t) + r)) | (n << r) | o),
      (zt = a + e);
  } else (Mt = (1 << a) | (n << r) | o), (zt = e);
}
function cc(e) {
  e.return !== null && (On(e, 1), xf(e, 1, 0));
}
function uc(e) {
  for (; e === ts; )
    (ts = ho[--vo]), (ho[vo] = null), (ns = ho[--vo]), (ho[vo] = null);
  for (; e === Yn; )
    (Yn = ot[--rt]),
      (ot[rt] = null),
      (zt = ot[--rt]),
      (ot[rt] = null),
      (Mt = ot[--rt]),
      (ot[rt] = null);
}
var qe = null,
  Xe = null,
  se = !1,
  ht = null;
function yf(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Xe = Sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: Mt, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function il(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ll(e) {
  if (se) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (il(e)) throw Error(b(418));
        t = Sn(n.nextSibling);
        var o = qe;
        t && Hu(e, t)
          ? yf(o, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
      }
    } else {
      if (il(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e);
    }
  }
}
function Wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function xa(e) {
  if (e !== qe) return !1;
  if (!se) return Wu(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (il(e)) throw (wf(), Error(b(418)));
    for (; t; ) yf(e, t), (t = Sn(t.nextSibling));
  }
  if ((Wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = qe ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function wf() {
  for (var e = Xe; e; ) e = Sn(e.nextSibling);
}
function Uo() {
  (Xe = qe = null), (se = !1);
}
function dc(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var m0 = Xt.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var o = n.stateNode;
      }
      if (!o) throw Error(b(147, e));
      var r = o,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (s) {
            var i = r.refs;
            s === null ? delete i[a] : (i[a] = s);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function ya(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function jf(e) {
  function t(m, f) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [f]), (m.flags |= 16)) : h.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function o(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function r(m, f) {
    return (m = kn(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function a(m, f, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((m.flags |= 2), f) : h)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, f, h, S) {
    return f === null || f.tag !== 6
      ? ((f = Ni(h, m.mode, S)), (f.return = m), f)
      : ((f = r(f, h)), (f.return = m), f);
  }
  function l(m, f, h, S) {
    var C = h.type;
    return C === lo
      ? d(m, f, h.props.children, S, h.key)
      : f !== null &&
          (f.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === sn &&
              Vu(C) === f.type))
        ? ((S = r(f, h.props)), (S.ref = sr(m, f, h)), (S.return = m), S)
        : ((S = za(h.type, h.key, h.props, null, m.mode, S)),
          (S.ref = sr(m, f, h)),
          (S.return = m),
          S);
  }
  function c(m, f, h, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = ki(h, m.mode, S)), (f.return = m), f)
      : ((f = r(f, h.children || [])), (f.return = m), f);
  }
  function d(m, f, h, S, C) {
    return f === null || f.tag !== 7
      ? ((f = Kn(h, m.mode, S, C)), (f.return = m), f)
      : ((f = r(f, h)), (f.return = m), f);
  }
  function p(m, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ni("" + f, m.mode, h)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case la:
          return (
            (h = za(f.type, f.key, f.props, null, m.mode, h)),
            (h.ref = sr(m, null, f)),
            (h.return = m),
            h
          );
        case io:
          return (f = ki(f, m.mode, h)), (f.return = m), f;
        case sn:
          var S = f._init;
          return p(m, S(f._payload), h);
      }
      if (pr(f) || tr(f))
        return (f = Kn(f, m.mode, h, null)), (f.return = m), f;
      ya(m, f);
    }
    return null;
  }
  function u(m, f, h, S) {
    var C = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : i(m, f, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case la:
          return h.key === C ? l(m, f, h, S) : null;
        case io:
          return h.key === C ? c(m, f, h, S) : null;
        case sn:
          return (C = h._init), u(m, f, C(h._payload), S);
      }
      if (pr(h) || tr(h)) return C !== null ? null : d(m, f, h, S, null);
      ya(m, h);
    }
    return null;
  }
  function x(m, f, h, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(h) || null), i(f, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case la:
          return (m = m.get(S.key === null ? h : S.key) || null), l(f, m, S, C);
        case io:
          return (m = m.get(S.key === null ? h : S.key) || null), c(f, m, S, C);
        case sn:
          var N = S._init;
          return x(m, f, h, N(S._payload), C);
      }
      if (pr(S) || tr(S)) return (m = m.get(h) || null), d(f, m, S, C, null);
      ya(f, S);
    }
    return null;
  }
  function w(m, f, h, S) {
    for (
      var C = null, N = null, k = f, T = (f = 0), B = null;
      k !== null && T < h.length;
      T++
    ) {
      k.index > T ? ((B = k), (k = null)) : (B = k.sibling);
      var R = u(m, k, h[T], S);
      if (R === null) {
        k === null && (k = B);
        break;
      }
      e && k && R.alternate === null && t(m, k),
        (f = a(R, f, T)),
        N === null ? (C = R) : (N.sibling = R),
        (N = R),
        (k = B);
    }
    if (T === h.length) return n(m, k), se && On(m, T), C;
    if (k === null) {
      for (; T < h.length; T++)
        (k = p(m, h[T], S)),
          k !== null &&
            ((f = a(k, f, T)), N === null ? (C = k) : (N.sibling = k), (N = k));
      return se && On(m, T), C;
    }
    for (k = o(m, k); T < h.length; T++)
      (B = x(k, m, T, h[T], S)),
        B !== null &&
          (e && B.alternate !== null && k.delete(B.key === null ? T : B.key),
          (f = a(B, f, T)),
          N === null ? (C = B) : (N.sibling = B),
          (N = B));
    return (
      e &&
        k.forEach(function (z) {
          return t(m, z);
        }),
      se && On(m, T),
      C
    );
  }
  function g(m, f, h, S) {
    var C = tr(h);
    if (typeof C != "function") throw Error(b(150));
    if (((h = C.call(h)), h == null)) throw Error(b(151));
    for (
      var N = (C = null), k = f, T = (f = 0), B = null, R = h.next();
      k !== null && !R.done;
      T++, R = h.next()
    ) {
      k.index > T ? ((B = k), (k = null)) : (B = k.sibling);
      var z = u(m, k, R.value, S);
      if (z === null) {
        k === null && (k = B);
        break;
      }
      e && k && z.alternate === null && t(m, k),
        (f = a(z, f, T)),
        N === null ? (C = z) : (N.sibling = z),
        (N = z),
        (k = B);
    }
    if (R.done) return n(m, k), se && On(m, T), C;
    if (k === null) {
      for (; !R.done; T++, R = h.next())
        (R = p(m, R.value, S)),
          R !== null &&
            ((f = a(R, f, T)), N === null ? (C = R) : (N.sibling = R), (N = R));
      return se && On(m, T), C;
    }
    for (k = o(m, k); !R.done; T++, R = h.next())
      (R = x(k, m, T, R.value, S)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? T : R.key),
          (f = a(R, f, T)),
          N === null ? (C = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        k.forEach(function (O) {
          return t(m, O);
        }),
      se && On(m, T),
      C
    );
  }
  function y(m, f, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === lo &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case la:
          e: {
            for (var C = h.key, N = f; N !== null; ) {
              if (N.key === C) {
                if (((C = h.type), C === lo)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (f = r(N, h.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === sn &&
                    Vu(C) === N.type)
                ) {
                  n(m, N.sibling),
                    (f = r(N, h.props)),
                    (f.ref = sr(m, N, h)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            h.type === lo
              ? ((f = Kn(h.props.children, m.mode, S, h.key)),
                (f.return = m),
                (m = f))
              : ((S = za(h.type, h.key, h.props, null, m.mode, S)),
                (S.ref = sr(m, f, h)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case io:
          e: {
            for (N = h.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(m, f.sibling),
                    (f = r(f, h.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = ki(h, m.mode, S)), (f.return = m), (m = f);
          }
          return s(m);
        case sn:
          return (N = h._init), y(m, f, N(h._payload), S);
      }
      if (pr(h)) return w(m, f, h, S);
      if (tr(h)) return g(m, f, h, S);
      ya(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = r(f, h)), (f.return = m), (m = f))
          : (n(m, f), (f = Ni(h, m.mode, S)), (f.return = m), (m = f)),
        s(m))
      : n(m, f);
  }
  return y;
}
var $o = jf(!0),
  Sf = jf(!1),
  os = Fn(null),
  rs = null,
  go = null,
  pc = null;
function fc() {
  pc = go = rs = null;
}
function mc(e) {
  var t = os.current;
  ae(os), (e._currentValue = t);
}
function cl(e, t, n) {
  for (; e !== null; ) {
    var o = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
        : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Eo(e, t) {
  (rs = e),
    (pc = go = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (pc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), go === null)) {
      if (rs === null) throw Error(b(308));
      (go = e), (rs.dependencies = { lanes: 0, firstContext: e });
    } else go = go.next = e;
  return t;
}
var zn = null;
function hc(e) {
  zn === null ? (zn = [e]) : zn.push(e);
}
function Cf(e, t, n, o) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), hc(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Vt(e, o)
  );
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ln = !1;
function vc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ef(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cn(e, t, n) {
  var o = e.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), X & 2)) {
    var r = o.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (o.pending = t),
      Vt(e, n)
    );
  }
  return (
    (r = o.interleaved),
    r === null ? ((t.next = t), hc(o)) : ((t.next = r.next), (r.next = t)),
    (o.interleaved = t),
    Vt(e, n)
  );
}
function Fa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var o = t.lanes;
    (o &= e.pendingLanes), (n |= o), (t.lanes = n), tc(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    o = e.alternate;
  if (o !== null && ((o = o.updateQueue), n === o)) {
    var r = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (r = a = s) : (a = a.next = s), (n = n.next);
      } while (n !== null);
      a === null ? (r = a = t) : (a = a.next = t);
    } else r = a = t;
    (n = {
      baseState: o.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: a,
      shared: o.shared,
      effects: o.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function as(e, t, n, o) {
  var r = e.updateQueue;
  ln = !1;
  var a = r.firstBaseUpdate,
    s = r.lastBaseUpdate,
    i = r.shared.pending;
  if (i !== null) {
    r.shared.pending = null;
    var l = i,
      c = l.next;
    (l.next = null), s === null ? (a = c) : (s.next = c), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (i = d.lastBaseUpdate),
      i !== s &&
        (i === null ? (d.firstBaseUpdate = c) : (i.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var p = r.baseState;
    (s = 0), (d = c = l = null), (i = a);
    do {
      var u = i.lane,
        x = i.eventTime;
      if ((o & u) === u) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            g = i;
          switch (((u = t), (x = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                p = w.call(x, p, u);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (u = typeof w == "function" ? w.call(x, p, u) : w),
                u == null)
              )
                break e;
              p = ue({}, p, u);
              break e;
            case 2:
              ln = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (u = r.effects),
          u === null ? (r.effects = [i]) : u.push(i));
      } else
        (x = {
          eventTime: x,
          lane: u,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          d === null ? ((c = d = x), (l = p)) : (d = d.next = x),
          (s |= u);
      if (((i = i.next), i === null)) {
        if (((i = r.shared.pending), i === null)) break;
        (u = i),
          (i = u.next),
          (u.next = null),
          (r.lastBaseUpdate = u),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = p),
      (r.baseState = l),
      (r.firstBaseUpdate = c),
      (r.lastBaseUpdate = d),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (s |= r.lane), (r = r.next);
      while (r !== t);
    } else a === null && (r.shared.lanes = 0);
    (qn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var o = e[t],
        r = o.callback;
      if (r !== null) {
        if (((o.callback = null), (o = n), typeof r != "function"))
          throw Error(b(191, r));
        r.call(o);
      }
    }
}
var Jr = {},
  Rt = Fn(Jr),
  Br = Fn(Jr),
  Or = Fn(Jr);
function Un(e) {
  if (e === Jr) throw Error(b(174));
  return e;
}
function gc(e, t) {
  switch ((te(Or, t), te(Br, e), te(Rt, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hi(t, e));
  }
  ae(Rt), te(Rt, t);
}
function Ho() {
  ae(Rt), ae(Br), ae(Or);
}
function Nf(e) {
  Un(Or.current);
  var t = Un(Rt.current),
    n = Hi(t, e.type);
  t !== n && (te(Br, e), te(Rt, n));
}
function xc(e) {
  Br.current === e && (ae(Rt), ae(Br));
}
var le = Fn(0);
function ss(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var yi = [];
function yc() {
  for (var e = 0; e < yi.length; e++)
    yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var _a = Xt.ReactCurrentDispatcher,
  wi = Xt.ReactCurrentBatchConfig,
  Xn = 0,
  ce = null,
  he = null,
  xe = null,
  is = !1,
  wr = !1,
  Lr = 0,
  h0 = 0;
function Te() {
  throw Error(b(321));
}
function wc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function jc(e, t, n, o, r, a) {
  if (
    ((Xn = a),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_a.current = e === null || e.memoizedState === null ? y0 : w0),
    (e = n(o, r)),
    wr)
  ) {
    a = 0;
    do {
      if (((wr = !1), (Lr = 0), 25 <= a)) throw Error(b(301));
      (a += 1),
        (xe = he = null),
        (t.updateQueue = null),
        (_a.current = j0),
        (e = n(o, r));
    } while (wr);
  }
  if (
    ((_a.current = ls),
    (t = he !== null && he.next !== null),
    (Xn = 0),
    (xe = he = ce = null),
    (is = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function Sc() {
  var e = Lr !== 0;
  return (Lr = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function lt() {
  if (he === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = xe === null ? ce.memoizedState : xe.next;
  if (t !== null) (xe = t), (he = e);
  else {
    if (e === null) throw Error(b(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ji(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var o = he,
    r = o.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (r !== null) {
      var s = r.next;
      (r.next = a.next), (a.next = s);
    }
    (o.baseQueue = r = a), (n.pending = null);
  }
  if (r !== null) {
    (a = r.next), (o = o.baseState);
    var i = (s = null),
      l = null,
      c = a;
    do {
      var d = c.lane;
      if ((Xn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (o = c.hasEagerState ? c.eagerState : e(o, c.action));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((i = l = p), (s = o)) : (l = l.next = p),
          (ce.lanes |= d),
          (qn |= d);
      }
      c = c.next;
    } while (c !== null && c !== a);
    l === null ? (s = o) : (l.next = i),
      xt(o, t.memoizedState) || (ze = !0),
      (t.memoizedState = o),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = o);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (a = r.lane), (ce.lanes |= a), (qn |= a), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Si(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var o = n.dispatch,
    r = n.pending,
    a = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var s = (r = r.next);
    do (a = e(a, s.action)), (s = s.next);
    while (s !== r);
    xt(a, t.memoizedState) || (ze = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, o];
}
function kf() {}
function Af(e, t) {
  var n = ce,
    o = lt(),
    r = t(),
    a = !xt(o.memoizedState, r);
  if (
    (a && ((o.memoizedState = r), (ze = !0)),
    (o = o.queue),
    Cc(Pf.bind(null, n, o, e), [e]),
    o.getSnapshot !== t || a || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, bf.bind(null, n, o, r, t), void 0, null),
      ye === null)
    )
      throw Error(b(349));
    Xn & 30 || Tf(n, t, r);
  }
  return r;
}
function Tf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bf(e, t, n, o) {
  (t.value = n), (t.getSnapshot = o), Df(t) && Rf(e);
}
function Pf(e, t, n) {
  return n(function () {
    Df(t) && Rf(e);
  });
}
function Df(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function Rf(e) {
  var t = Vt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Gu(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = x0.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, o) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
    e
  );
}
function If() {
  return lt().memoizedState;
}
function Ba(e, t, n, o) {
  var r = kt();
  (ce.flags |= e),
    (r.memoizedState = zr(1 | t, n, void 0, o === void 0 ? null : o));
}
function Ts(e, t, n, o) {
  var r = lt();
  o = o === void 0 ? null : o;
  var a = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (((a = s.destroy), o !== null && wc(o, s.deps))) {
      r.memoizedState = zr(t, n, a, o);
      return;
    }
  }
  (ce.flags |= e), (r.memoizedState = zr(1 | t, n, a, o));
}
function Yu(e, t) {
  return Ba(8390656, 8, e, t);
}
function Cc(e, t) {
  return Ts(2048, 8, e, t);
}
function Ff(e, t) {
  return Ts(4, 2, e, t);
}
function _f(e, t) {
  return Ts(4, 4, e, t);
}
function Bf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ts(4, 4, Bf.bind(null, t, e), n)
  );
}
function Ec() {}
function Lf(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && wc(t, o[1])
    ? o[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mf(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var o = n.memoizedState;
  return o !== null && t !== null && wc(t, o[1])
    ? o[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t, n) {
  return Xn & 21
    ? (xt(n, t) || ((n = Wp()), (ce.lanes |= n), (qn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function v0(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var o = wi.transition;
  wi.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (wi.transition = o);
  }
}
function Uf() {
  return lt().memoizedState;
}
function g0(e, t, n) {
  var o = Nn(e);
  if (
    ((n = {
      lane: o,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $f(e))
  )
    Hf(t, n);
  else if (((n = Cf(e, t, n, o)), n !== null)) {
    var r = Be();
    gt(n, e, o, r), Wf(n, t, o);
  }
}
function x0(e, t, n) {
  var o = Nn(e),
    r = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e)) Hf(t, r);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var s = t.lastRenderedState,
          i = a(s, n);
        if (((r.hasEagerState = !0), (r.eagerState = i), xt(i, s))) {
          var l = t.interleaved;
          l === null
            ? ((r.next = r), hc(t))
            : ((r.next = l.next), (l.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cf(e, t, r, o)),
      n !== null && ((r = Be()), gt(n, e, o, r), Wf(n, t, o));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function Hf(e, t) {
  wr = is = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wf(e, t, n) {
  if (n & 4194240) {
    var o = t.lanes;
    (o &= e.pendingLanes), (n |= o), (t.lanes = n), tc(e, n);
  }
}
var ls = {
    readContext: it,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  y0 = {
    readContext: it,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ba(4194308, 4, Bf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ba(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ba(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var o = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (o.memoizedState = o.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (o.queue = e),
        (e = e.dispatch = g0.bind(null, ce, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gu,
    useDebugValue: Ec,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Gu(!1),
        t = e[0];
      return (e = v0.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var o = ce,
        r = kt();
      if (se) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(b(349));
        Xn & 30 || Tf(o, t, n);
      }
      r.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (r.queue = a),
        Yu(Pf.bind(null, o, a, e), [e]),
        (o.flags |= 2048),
        zr(9, bf.bind(null, o, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = ye.identifierPrefix;
      if (se) {
        var n = zt,
          o = Mt;
        (n = (o & ~(1 << (32 - vt(o) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = h0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w0 = {
    readContext: it,
    useCallback: Lf,
    useContext: it,
    useEffect: Cc,
    useImperativeHandle: Of,
    useInsertionEffect: Ff,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: ji,
    useRef: If,
    useState: function () {
      return ji(Mr);
    },
    useDebugValue: Ec,
    useDeferredValue: function (e) {
      var t = lt();
      return zf(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = ji(Mr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Af,
    useId: Uf,
    unstable_isNewReconciler: !1,
  },
  j0 = {
    readContext: it,
    useCallback: Lf,
    useContext: it,
    useEffect: Cc,
    useImperativeHandle: Of,
    useInsertionEffect: Ff,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Si,
    useRef: If,
    useState: function () {
      return Si(Mr);
    },
    useDebugValue: Ec,
    useDeferredValue: function (e) {
      var t = lt();
      return he === null ? (t.memoizedState = e) : zf(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(Mr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Af,
    useId: Uf,
    unstable_isNewReconciler: !1,
  };
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ul(e, t, n, o) {
  (t = e.memoizedState),
    (n = n(o, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? to(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var o = Be(),
      r = Nn(e),
      a = $t(o, r);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Cn(e, a, r)),
      t !== null && (gt(t, e, r, o), Fa(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var o = Be(),
      r = Nn(e),
      a = $t(o, r);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Cn(e, a, r)),
      t !== null && (gt(t, e, r, o), Fa(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      o = Nn(e),
      r = $t(n, o);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = Cn(e, r, o)),
      t !== null && (gt(t, e, o, n), Fa(t, e, o));
  },
};
function Xu(e, t, n, o, r, a, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(o, a, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Rr(n, o) || !Rr(r, a)
        : !0
  );
}
function Vf(e, t, n) {
  var o = !1,
    r = Tn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = it(a))
      : ((r = $e(t) ? Gn : Re.current),
        (o = t.contextTypes),
        (a = (o = o != null) ? zo(e, r) : Tn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bs),
    (e.stateNode = t),
    (t._reactInternals = e),
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function qu(e, t, n, o) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, o),
    t.state !== e && bs.enqueueReplaceState(t, t.state, null);
}
function dl(e, t, n, o) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = {}), vc(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (r.context = it(a))
    : ((a = $e(t) ? Gn : Re.current), (r.context = zo(e, a))),
    (r.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (ul(e, t, a, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && bs.enqueueReplaceState(r, r.state, null),
      as(e, n, r, o),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wo(e, t) {
  try {
    var n = "",
      o = t;
    do (n += Yv(o)), (o = o.return);
    while (o);
    var r = n;
  } catch (a) {
    r =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var S0 = typeof WeakMap == "function" ? WeakMap : Map;
function Qf(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var o = t.value;
  return (
    (n.callback = function () {
      us || ((us = !0), (Sl = o)), pl(e, t);
    }),
    n
  );
}
function Kf(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var r = t.value;
    (n.payload = function () {
      return o(r);
    }),
      (n.callback = function () {
        pl(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        pl(e, t),
          typeof o != "function" &&
            (En === null ? (En = new Set([this])) : En.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new S0();
    var r = new Set();
    o.set(t, r);
  } else (r = o.get(t)), r === void 0 && ((r = new Set()), o.set(t, r));
  r.has(n) || (r.add(n), (e = B0.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ed(e, t, n, o, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var C0 = Xt.ReactCurrentOwner,
  ze = !1;
function Fe(e, t, n, o) {
  t.child = e === null ? Sf(t, null, n, o) : $o(t, e.child, n, o);
}
function td(e, t, n, o, r) {
  n = n.render;
  var a = t.ref;
  return (
    Eo(t, r),
    (o = jc(e, t, n, o, a, r)),
    (n = Sc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Qt(e, t, r))
      : (se && n && cc(t), (t.flags |= 1), Fe(e, t, o, r), t.child)
  );
}
function nd(e, t, n, o, r) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Rc(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Gf(e, t, a, o, r))
      : ((e = za(n.type, null, o, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & r))) {
    var s = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rr), n(s, o) && e.ref === t.ref)
    )
      return Qt(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = kn(a, o)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gf(e, t, n, o, r) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Rr(a, o) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = o = a), (e.lanes & r) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), Qt(e, t, r);
  }
  return fl(e, t, n, o, r);
}
function Yf(e, t, n) {
  var o = t.pendingProps,
    r = o.children,
    a = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(yo, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(yo, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = a !== null ? a.baseLanes : n),
        te(yo, Ge),
        (Ge |= o);
    }
  else
    a !== null ? ((o = a.baseLanes | n), (t.memoizedState = null)) : (o = n),
      te(yo, Ge),
      (Ge |= o);
  return Fe(e, t, r, n), t.child;
}
function Xf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fl(e, t, n, o, r) {
  var a = $e(n) ? Gn : Re.current;
  return (
    (a = zo(t, a)),
    Eo(t, r),
    (n = jc(e, t, n, o, a, r)),
    (o = Sc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Qt(e, t, r))
      : (se && o && cc(t), (t.flags |= 1), Fe(e, t, n, r), t.child)
  );
}
function od(e, t, n, o, r) {
  if ($e(n)) {
    var a = !0;
    es(t);
  } else a = !1;
  if ((Eo(t, r), t.stateNode === null))
    Oa(e, t), Vf(t, n, o), dl(t, n, o, r), (o = !0);
  else if (e === null) {
    var s = t.stateNode,
      i = t.memoizedProps;
    s.props = i;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = $e(n) ? Gn : Re.current), (c = zo(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== o || l !== c) && qu(t, s, o, c)),
      (ln = !1);
    var u = t.memoizedState;
    (s.state = u),
      as(t, o, s, r),
      (l = t.memoizedState),
      i !== o || u !== l || Ue.current || ln
        ? (typeof d == "function" && (ul(t, n, d, o), (l = t.memoizedState)),
          (i = ln || Xu(t, n, i, o, u, l, c))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = o),
              (t.memoizedState = l)),
          (s.props = o),
          (s.state = l),
          (s.context = c),
          (o = i))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (o = !1));
  } else {
    (s = t.stateNode),
      Ef(e, t),
      (i = t.memoizedProps),
      (c = t.type === t.elementType ? i : dt(t.type, i)),
      (s.props = c),
      (p = t.pendingProps),
      (u = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = it(l))
        : ((l = $e(n) ? Gn : Re.current), (l = zo(t, l)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== p || u !== l) && qu(t, s, o, l)),
      (ln = !1),
      (u = t.memoizedState),
      (s.state = u),
      as(t, o, s, r);
    var w = t.memoizedState;
    i !== p || u !== w || Ue.current || ln
      ? (typeof x == "function" && (ul(t, n, x, o), (w = t.memoizedState)),
        (c = ln || Xu(t, n, c, o, u, w, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(o, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(o, w, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (i === e.memoizedProps && u === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && u === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = o),
            (t.memoizedState = w)),
        (s.props = o),
        (s.state = w),
        (s.context = l),
        (o = c))
      : (typeof s.componentDidUpdate != "function" ||
          (i === e.memoizedProps && u === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && u === e.memoizedState) ||
          (t.flags |= 1024),
        (o = !1));
  }
  return ml(e, t, n, o, a, r);
}
function ml(e, t, n, o, r, a) {
  Xf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!o && !s) return r && $u(t, n, !1), Qt(e, t, a);
  (o = t.stateNode), (C0.current = t);
  var i =
    s && typeof n.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = $o(t, e.child, null, a)), (t.child = $o(t, null, i, a)))
      : Fe(e, t, i, a),
    (t.memoizedState = o.state),
    r && $u(t, n, !0),
    t.child
  );
}
function qf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uu(e, t.context, !1),
    gc(e, t.containerInfo);
}
function rd(e, t, n, o, r) {
  return Uo(), dc(r), (t.flags |= 256), Fe(e, t, n, o), t.child;
}
var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
function vl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zf(e, t, n) {
  var o = t.pendingProps,
    r = le.current,
    a = !1,
    s = (t.flags & 128) !== 0,
    i;
  if (
    ((i = s) ||
      (i = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    i
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    te(le, r & 1),
    e === null)
  )
    return (
      ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = o.children),
          (e = o.fallback),
          a
            ? ((o = t.mode),
              (a = t.child),
              (s = { mode: "hidden", children: s }),
              !(o & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = s))
                : (a = Rs(s, o, 0, null)),
              (e = Kn(e, o, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = vl(n)),
              (t.memoizedState = hl),
              e)
            : Nc(t, s))
    );
  if (((r = e.memoizedState), r !== null && ((i = r.dehydrated), i !== null)))
    return E0(e, t, s, o, i, r, n);
  if (a) {
    (a = o.fallback), (s = t.mode), (r = e.child), (i = r.sibling);
    var l = { mode: "hidden", children: o.children };
    return (
      !(s & 1) && t.child !== r
        ? ((o = t.child),
          (o.childLanes = 0),
          (o.pendingProps = l),
          (t.deletions = null))
        : ((o = kn(r, l)), (o.subtreeFlags = r.subtreeFlags & 14680064)),
      i !== null ? (a = kn(i, a)) : ((a = Kn(a, s, n, null)), (a.flags |= 2)),
      (a.return = t),
      (o.return = t),
      (o.sibling = a),
      (t.child = o),
      (o = a),
      (a = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (a.memoizedState = s),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = hl),
      o
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (o = kn(a, { mode: "visible", children: o.children })),
    !(t.mode & 1) && (o.lanes = n),
    (o.return = t),
    (o.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = o),
    (t.memoizedState = null),
    o
  );
}
function Nc(e, t) {
  return (
    (t = Rs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wa(e, t, n, o) {
  return (
    o !== null && dc(o),
    $o(t, e.child, null, n),
    (e = Nc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function E0(e, t, n, o, r, a, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (o = Ci(Error(b(422)))), wa(e, t, s, o))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = o.fallback),
          (r = t.mode),
          (o = Rs({ mode: "visible", children: o.children }, r, 0, null)),
          (a = Kn(a, r, s, null)),
          (a.flags |= 2),
          (o.return = t),
          (a.return = t),
          (o.sibling = a),
          (t.child = o),
          t.mode & 1 && $o(t, e.child, null, s),
          (t.child.memoizedState = vl(s)),
          (t.memoizedState = hl),
          a);
  if (!(t.mode & 1)) return wa(e, t, s, null);
  if (r.data === "$!") {
    if (((o = r.nextSibling && r.nextSibling.dataset), o)) var i = o.dgst;
    return (o = i), (a = Error(b(419))), (o = Ci(a, o, void 0)), wa(e, t, s, o);
  }
  if (((i = (s & e.childLanes) !== 0), ze || i)) {
    if (((o = ye), o !== null)) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (o.suspendedLanes | s) ? 0 : r),
        r !== 0 &&
          r !== a.retryLane &&
          ((a.retryLane = r), Vt(e, r), gt(o, e, r, -1));
    }
    return Dc(), (o = Ci(Error(b(421)))), wa(e, t, s, o);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = O0.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Xe = Sn(r.nextSibling)),
      (qe = t),
      (se = !0),
      (ht = null),
      e !== null &&
        ((ot[rt++] = Mt),
        (ot[rt++] = zt),
        (ot[rt++] = Yn),
        (Mt = e.id),
        (zt = e.overflow),
        (Yn = t)),
      (t = Nc(t, o.children)),
      (t.flags |= 4096),
      t);
}
function ad(e, t, n) {
  e.lanes |= t;
  var o = e.alternate;
  o !== null && (o.lanes |= t), cl(e.return, t, n);
}
function Ei(e, t, n, o, r) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: n,
        tailMode: r,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = o),
      (a.tail = n),
      (a.tailMode = r));
}
function Jf(e, t, n) {
  var o = t.pendingProps,
    r = o.revealOrder,
    a = o.tail;
  if ((Fe(e, t, o.children, n), (o = le.current), o & 2))
    (o = (o & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
        else if (e.tag === 19) ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    o &= 1;
  }
  if ((te(le, o), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && ss(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Ei(t, !1, r, n, a);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && ss(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        Ei(t, !0, n, null, a);
        break;
      case "together":
        Ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function N0(e, t, n) {
  switch (t.tag) {
    case 3:
      qf(t), Uo();
      break;
    case 5:
      Nf(t);
      break;
    case 1:
      $e(t.type) && es(t);
      break;
    case 4:
      gc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var o = t.type._context,
        r = t.memoizedProps.value;
      te(os, o._currentValue), (o._currentValue = r);
      break;
    case 13:
      if (((o = t.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (te(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Zf(e, t, n)
            : (te(le, le.current & 1),
              (e = Qt(e, t, n)),
              e !== null ? e.sibling : null);
      te(le, le.current & 1);
      break;
    case 19:
      if (((o = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (o) return Jf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        te(le, le.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yf(e, t, n);
  }
  return Qt(e, t, n);
}
var em, gl, tm, nm;
em = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
gl = function () {};
tm = function (e, t, n, o) {
  var r = e.memoizedProps;
  if (r !== o) {
    (e = t.stateNode), Un(Rt.current);
    var a = null;
    switch (n) {
      case "input":
        (r = Mi(e, r)), (o = Mi(e, o)), (a = []);
        break;
      case "select":
        (r = ue({}, r, { value: void 0 })),
          (o = ue({}, o, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (r = $i(e, r)), (o = $i(e, o)), (a = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof o.onClick == "function" &&
          (e.onclick = Za);
    }
    Wi(n, o);
    var s;
    n = null;
    for (c in r)
      if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
        if (c === "style") {
          var i = r[c];
          for (s in i) i.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Nr.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in o) {
      var l = o[c];
      if (
        ((i = r != null ? r[c] : void 0),
        o.hasOwnProperty(c) && l !== i && (l != null || i != null))
      )
        if (c === "style")
          if (i) {
            for (s in i)
              !i.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                i[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (a || (a = []), a.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (i = i ? i.__html : void 0),
              l != null && i !== l && (a = a || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (a = a || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Nr.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && re("scroll", e),
                    a || i === l || (a = []))
                  : (a = a || []).push(c, l));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
nm = function (e, t, n, o) {
  n !== o && (t.flags |= 4);
};
function ir(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; )
          n.alternate !== null && (o = n), (n = n.sibling);
        o === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (o.sibling = null);
    }
}
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    o = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (o |= r.subtreeFlags & 14680064),
        (o |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (o |= r.subtreeFlags),
        (o |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= o), (e.childLanes = n), t;
}
function k0(e, t, n) {
  var o = t.pendingProps;
  switch ((uc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return be(t), null;
    case 1:
      return $e(t.type) && Ja(), be(t), null;
    case 3:
      return (
        (o = t.stateNode),
        Ho(),
        ae(Ue),
        ae(Re),
        yc(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (e === null || e.child === null) &&
          (xa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (Nl(ht), (ht = null)))),
        gl(e, t),
        be(t),
        null
      );
    case 5:
      xc(t);
      var r = Un(Or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tm(e, t, n, o, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!o) {
          if (t.stateNode === null) throw Error(b(166));
          return be(t), null;
        }
        if (((e = Un(Rt.current)), xa(t))) {
          (o = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((o[Pt] = t), (o[_r] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", o), re("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", o);
              break;
            case "video":
            case "audio":
              for (r = 0; r < mr.length; r++) re(mr[r], o);
              break;
            case "source":
              re("error", o);
              break;
            case "img":
            case "image":
            case "link":
              re("error", o), re("load", o);
              break;
            case "details":
              re("toggle", o);
              break;
            case "input":
              mu(o, a), re("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!a.multiple }),
                re("invalid", o);
              break;
            case "textarea":
              vu(o, a), re("invalid", o);
          }
          Wi(n, a), (r = null);
          for (var s in a)
            if (a.hasOwnProperty(s)) {
              var i = a[s];
              s === "children"
                ? typeof i == "string"
                  ? o.textContent !== i &&
                    (a.suppressHydrationWarning !== !0 &&
                      ga(o.textContent, i, e),
                    (r = ["children", i]))
                  : typeof i == "number" &&
                    o.textContent !== "" + i &&
                    (a.suppressHydrationWarning !== !0 &&
                      ga(o.textContent, i, e),
                    (r = ["children", "" + i]))
                : Nr.hasOwnProperty(s) &&
                  i != null &&
                  s === "onScroll" &&
                  re("scroll", o);
            }
          switch (n) {
            case "input":
              ca(o), hu(o, a, !0);
              break;
            case "textarea":
              ca(o), gu(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (o.onclick = Za);
          }
          (o = r), (t.updateQueue = o), o !== null && (t.flags |= 4);
        } else {
          (s = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof o.is == "string"
                  ? (e = s.createElement(n, { is: o.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      o.multiple
                        ? (s.multiple = !0)
                        : o.size && (s.size = o.size)))
              : (e = s.createElementNS(e, n)),
            (e[Pt] = t),
            (e[_r] = o),
            em(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Vi(n, o)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (r = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (r = o);
                break;
              case "video":
              case "audio":
                for (r = 0; r < mr.length; r++) re(mr[r], e);
                r = o;
                break;
              case "source":
                re("error", e), (r = o);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (r = o);
                break;
              case "details":
                re("toggle", e), (r = o);
                break;
              case "input":
                mu(e, o), (r = Mi(e, o)), re("invalid", e);
                break;
              case "option":
                r = o;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!o.multiple }),
                  (r = ue({}, o, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                vu(e, o), (r = $i(e, o)), re("invalid", e);
                break;
              default:
                r = o;
            }
            Wi(n, r), (i = r);
            for (a in i)
              if (i.hasOwnProperty(a)) {
                var l = i[a];
                a === "style"
                  ? Rp(e, l)
                  : a === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Pp(e, l))
                    : a === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && kr(e, l)
                        : typeof l == "number" && kr(e, "" + l)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (Nr.hasOwnProperty(a)
                          ? l != null && a === "onScroll" && re("scroll", e)
                          : l != null && Yl(e, a, l, s));
              }
            switch (n) {
              case "input":
                ca(e), hu(e, o, !1);
                break;
              case "textarea":
                ca(e), gu(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + An(o.value));
                break;
              case "select":
                (e.multiple = !!o.multiple),
                  (a = o.value),
                  a != null
                    ? wo(e, !!o.multiple, a, !1)
                    : o.defaultValue != null &&
                      wo(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Za);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) nm(e, t, e.memoizedProps, o);
      else {
        if (typeof o != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = Un(Or.current)), Un(Rt.current), xa(t))) {
          if (
            ((o = t.stateNode),
            (n = t.memoizedProps),
            (o[Pt] = t),
            (a = o.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                ga(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ga(o.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
            (o[Pt] = t),
            (t.stateNode = o);
      }
      return be(t), null;
    case 13:
      if (
        (ae(le),
        (o = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Xe !== null && t.mode & 1 && !(t.flags & 128))
          wf(), Uo(), (t.flags |= 98560), (a = !1);
        else if (((a = xa(t)), o !== null && o.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(b(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(b(317));
            a[Pt] = t;
          } else
            Uo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (a = !1);
        } else ht !== null && (Nl(ht), (ht = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((o = o !== null),
          o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? ge === 0 && (ge = 3) : Dc())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return (
        Ho(), gl(e, t), e === null && Ir(t.stateNode.containerInfo), be(t), null
      );
    case 10:
      return mc(t.type._context), be(t), null;
    case 17:
      return $e(t.type) && Ja(), be(t), null;
    case 19:
      if ((ae(le), (a = t.memoizedState), a === null)) return be(t), null;
      if (((o = (t.flags & 128) !== 0), (s = a.rendering), s === null))
        if (o) ir(a, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ss(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ir(a, !1),
                    o = s.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    o = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = o),
                    (a.flags &= 14680066),
                    (s = a.alternate),
                    s === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = s.childLanes),
                        (a.lanes = s.lanes),
                        (a.child = s.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = s.memoizedProps),
                        (a.memoizedState = s.memoizedState),
                        (a.updateQueue = s.updateQueue),
                        (a.type = s.type),
                        (e = s.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(le, (le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            fe() > Vo &&
            ((t.flags |= 128), (o = !0), ir(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!o)
          if (((e = ss(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (o = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(a, !0),
              a.tail === null && a.tailMode === "hidden" && !s.alternate && !se)
            )
              return be(t), null;
          } else
            2 * fe() - a.renderingStartTime > Vo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (o = !0), ir(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = a.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (a.last = s));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = fe()),
          (t.sibling = null),
          (n = le.current),
          te(le, o ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (o = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
        o && t.mode & 1
          ? Ge & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function A0(e, t) {
  switch ((uc(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && Ja(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ho(),
        ae(Ue),
        ae(Re),
        yc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xc(t), null;
    case 13:
      if (
        (ae(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(b(340));
        Uo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(le), null;
    case 4:
      return Ho(), null;
    case 10:
      return mc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ja = !1,
  De = !1,
  T0 = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (o) {
        pe(e, t, o);
      }
    else n.current = null;
}
function xl(e, t, n) {
  try {
    n();
  } catch (o) {
    pe(e, t, o);
  }
}
var sd = !1;
function b0(e, t) {
  if (((tl = Ya), (e = sf()), lc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var r = o.anchorOffset,
            a = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            i = -1,
            l = -1,
            c = 0,
            d = 0,
            p = e,
            u = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (r !== 0 && p.nodeType !== 3) || (i = s + r),
                p !== a || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (u = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (u === n && ++c === r && (i = s),
                u === a && ++d === o && (l = s),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = u), (u = p.parentNode);
            }
            p = x;
          }
          n = i === -1 || l === -1 ? null : { start: i, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nl = { focusedElem: e, selectionRange: n }, Ya = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    y = w.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : dt(t.type, g),
                      y
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (S) {
          pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (w = sd), (sd = !1), w;
}
function jr(e, t, n) {
  var o = t.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var r = (o = o.next);
    do {
      if ((r.tag & e) === e) {
        var a = r.destroy;
        (r.destroy = void 0), a !== void 0 && xl(t, n, a);
      }
      r = r.next;
    } while (r !== o);
  }
}
function Ps(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var o = n.create;
        n.destroy = o();
      }
      n = n.next;
    } while (n !== t);
  }
}
function yl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function om(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), om(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[_r], delete t[al], delete t[d0], delete t[p0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wl(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Za));
  else if (o !== 4 && ((e = e.child), e !== null))
    for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling);
}
function jl(e, t, n) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (o !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling);
}
var je = null,
  mt = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) am(e, t, n), (n = n.sibling);
}
function am(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(Ss, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || xo(n, t);
    case 6:
      var o = je,
        r = mt;
      (je = null),
        nn(e, t, n),
        (je = o),
        (mt = r),
        je !== null &&
          (mt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (mt
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? gi(e.parentNode, n)
              : e.nodeType === 1 && gi(e, n),
            Pr(e))
          : gi(je, n.stateNode));
      break;
    case 4:
      (o = je),
        (r = mt),
        (je = n.stateNode.containerInfo),
        (mt = !0),
        nn(e, t, n),
        (je = o),
        (mt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        r = o = o.next;
        do {
          var a = r,
            s = a.destroy;
          (a = a.tag),
            s !== void 0 && (a & 2 || a & 4) && xl(n, t, s),
            (r = r.next);
        } while (r !== o);
      }
      nn(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (xo(n, t),
        (o = n.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = n.memoizedProps),
            (o.state = n.memoizedState),
            o.componentWillUnmount();
        } catch (i) {
          pe(n, t, i);
        }
      nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (o = De) || n.memoizedState !== null), nn(e, t, n), (De = o))
        : nn(e, t, n);
      break;
    default:
      nn(e, t, n);
  }
}
function ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new T0()),
      t.forEach(function (o) {
        var r = L0.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(r, r));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      try {
        var a = e,
          s = t,
          i = s;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (je = i.stateNode), (mt = !1);
              break e;
            case 3:
              (je = i.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (je = i.stateNode.containerInfo), (mt = !0);
              break e;
          }
          i = i.return;
        }
        if (je === null) throw Error(b(160));
        am(a, s, r), (je = null), (mt = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (c) {
        pe(r, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sm(t, e), (t = t.sibling);
}
function sm(e, t) {
  var n = e.alternate,
    o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), Nt(e), o & 4)) {
        try {
          jr(3, e, e.return), Ps(3, e);
        } catch (g) {
          pe(e, e.return, g);
        }
        try {
          jr(5, e, e.return);
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 1:
      ut(t, e), Nt(e), o & 512 && n !== null && xo(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        Nt(e),
        o & 512 && n !== null && xo(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          kr(r, "");
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      if (o & 4 && ((r = e.stateNode), r != null)) {
        var a = e.memoizedProps,
          s = n !== null ? n.memoizedProps : a,
          i = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            i === "input" && a.type === "radio" && a.name != null && Ap(r, a),
              Vi(i, s);
            var c = Vi(i, a);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                p = l[s + 1];
              d === "style"
                ? Rp(r, p)
                : d === "dangerouslySetInnerHTML"
                  ? Pp(r, p)
                  : d === "children"
                    ? kr(r, p)
                    : Yl(r, d, p, c);
            }
            switch (i) {
              case "input":
                zi(r, a);
                break;
              case "textarea":
                Tp(r, a);
                break;
              case "select":
                var u = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? wo(r, !!a.multiple, x, !1)
                  : u !== !!a.multiple &&
                    (a.defaultValue != null
                      ? wo(r, !!a.multiple, a.defaultValue, !0)
                      : wo(r, !!a.multiple, a.multiple ? [] : "", !1));
            }
            r[_r] = a;
          } catch (g) {
            pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ut(t, e), Nt(e), o & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        (r = e.stateNode), (a = e.memoizedProps);
        try {
          r.nodeValue = a;
        } catch (g) {
          pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), Nt(e), o & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pr(t.containerInfo);
        } catch (g) {
          pe(e, e.return, g);
        }
      break;
    case 4:
      ut(t, e), Nt(e);
      break;
    case 13:
      ut(t, e),
        Nt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((a = r.memoizedState !== null),
          (r.stateNode.isHidden = a),
          !a ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Tc = fe())),
        o & 4 && ld(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (c = De) || d), ut(t, e), (De = c)) : ut(t, e),
        Nt(e),
        o & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (p = F = d; F !== null; ) {
              switch (((u = F), (x = u.child), u.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, u, u.return);
                  break;
                case 1:
                  xo(u, u.return);
                  var w = u.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (o = u), (n = u.return);
                    try {
                      (t = o),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      pe(o, n, g);
                    }
                  }
                  break;
                case 5:
                  xo(u, u.return);
                  break;
                case 22:
                  if (u.memoizedState !== null) {
                    ud(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = u), (F = x)) : ud(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (r = p.stateNode),
                  c
                    ? ((a = r.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((i = p.stateNode),
                      (l = p.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (i.style.display = Dp("display", s)));
              } catch (g) {
                pe(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (g) {
                pe(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), Nt(e), o & 4 && ld(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rm(n)) {
            var o = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (o.tag) {
        case 5:
          var r = o.stateNode;
          o.flags & 32 && (kr(r, ""), (o.flags &= -33));
          var a = id(e);
          jl(e, a, r);
          break;
        case 3:
        case 4:
          var s = o.stateNode.containerInfo,
            i = id(e);
          wl(e, i, s);
          break;
        default:
          throw Error(b(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function P0(e, t, n) {
  (F = e), im(e);
}
function im(e, t, n) {
  for (var o = (e.mode & 1) !== 0; F !== null; ) {
    var r = F,
      a = r.child;
    if (r.tag === 22 && o) {
      var s = r.memoizedState !== null || ja;
      if (!s) {
        var i = r.alternate,
          l = (i !== null && i.memoizedState !== null) || De;
        i = ja;
        var c = De;
        if (((ja = s), (De = l) && !c))
          for (F = r; F !== null; )
            (s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? dd(r)
                : l !== null
                  ? ((l.return = s), (F = l))
                  : dd(r);
        for (; a !== null; ) (F = a), im(a), (a = a.sibling);
        (F = r), (ja = i), (De = c);
      }
      cd(e);
    } else
      r.subtreeFlags & 8772 && a !== null ? ((a.return = r), (F = a)) : cd(e);
  }
}
function cd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Ps(5, t);
              break;
            case 1:
              var o = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) o.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  o.componentDidUpdate(
                    r,
                    n.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Ku(t, a, o);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ku(t, s, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Pr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        De || (t.flags & 512 && yl(t));
      } catch (u) {
        pe(t, t.return, u);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function ud(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function dd(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var o = t.stateNode;
          if (typeof o.componentDidMount == "function") {
            var r = t.return;
            try {
              o.componentDidMount();
            } catch (l) {
              pe(t, r, l);
            }
          }
          var a = t.return;
          try {
            yl(t);
          } catch (l) {
            pe(t, a, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            yl(t);
          } catch (l) {
            pe(t, s, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (F = i);
      break;
    }
    F = t.return;
  }
}
var D0 = Math.ceil,
  cs = Xt.ReactCurrentDispatcher,
  kc = Xt.ReactCurrentOwner,
  st = Xt.ReactCurrentBatchConfig,
  X = 0,
  ye = null,
  me = null,
  Se = 0,
  Ge = 0,
  yo = Fn(0),
  ge = 0,
  Ur = null,
  qn = 0,
  Ds = 0,
  Ac = 0,
  Sr = null,
  Me = null,
  Tc = 0,
  Vo = 1 / 0,
  Ot = null,
  us = !1,
  Sl = null,
  En = null,
  Sa = !1,
  gn = null,
  ds = 0,
  Cr = 0,
  Cl = null,
  La = -1,
  Ma = 0;
function Be() {
  return X & 6 ? fe() : La !== -1 ? La : (La = fe());
}
function Nn(e) {
  return e.mode & 1
    ? X & 2 && Se !== 0
      ? Se & -Se
      : m0.transition !== null
        ? (Ma === 0 && (Ma = Wp()), Ma)
        : ((e = J),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qp(e.type))),
          e)
    : 1;
}
function gt(e, t, n, o) {
  if (50 < Cr) throw ((Cr = 0), (Cl = null), Error(b(185)));
  Xr(e, n, o),
    (!(X & 2) || e !== ye) &&
      (e === ye && (!(X & 2) && (Ds |= n), ge === 4 && un(e, Se)),
      He(e, o),
      n === 1 && X === 0 && !(t.mode & 1) && ((Vo = fe() + 500), As && _n()));
}
function He(e, t) {
  var n = e.callbackNode;
  m2(e, t);
  var o = Ga(e, e === ye ? Se : 0);
  if (o === 0)
    n !== null && wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = o & -o), e.callbackPriority !== t)) {
    if ((n != null && wu(n), t === 1))
      e.tag === 0 ? f0(pd.bind(null, e)) : gf(pd.bind(null, e)),
        c0(function () {
          !(X & 6) && _n();
        }),
        (n = null);
    else {
      switch (Vp(o)) {
        case 1:
          n = ec;
          break;
        case 4:
          n = $p;
          break;
        case 16:
          n = Ka;
          break;
        case 536870912:
          n = Hp;
          break;
        default:
          n = Ka;
      }
      n = hm(n, lm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lm(e, t) {
  if (((La = -1), (Ma = 0), X & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (No() && e.callbackNode !== n) return null;
  var o = Ga(e, e === ye ? Se : 0);
  if (o === 0) return null;
  if (o & 30 || o & e.expiredLanes || t) t = ps(e, o);
  else {
    t = o;
    var r = X;
    X |= 2;
    var a = um();
    (ye !== e || Se !== t) && ((Ot = null), (Vo = fe() + 500), Qn(e, t));
    do
      try {
        F0();
        break;
      } catch (i) {
        cm(e, i);
      }
    while (!0);
    fc(),
      (cs.current = a),
      (X = r),
      me !== null ? (t = 0) : ((ye = null), (Se = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Xi(e)), r !== 0 && ((o = r), (t = El(e, r)))), t === 1)
    )
      throw ((n = Ur), Qn(e, 0), un(e, o), He(e, fe()), n);
    if (t === 6) un(e, o);
    else {
      if (
        ((r = e.current.alternate),
        !(o & 30) &&
          !R0(r) &&
          ((t = ps(e, o)),
          t === 2 && ((a = Xi(e)), a !== 0 && ((o = a), (t = El(e, a)))),
          t === 1))
      )
        throw ((n = Ur), Qn(e, 0), un(e, o), He(e, fe()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = o), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Ln(e, Me, Ot);
          break;
        case 3:
          if (
            (un(e, o), (o & 130023424) === o && ((t = Tc + 500 - fe()), 10 < t))
          ) {
            if (Ga(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & o) !== o)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = rl(Ln.bind(null, e, Me, Ot), t);
            break;
          }
          Ln(e, Me, Ot);
          break;
        case 4:
          if ((un(e, o), (o & 4194240) === o)) break;
          for (t = e.eventTimes, r = -1; 0 < o; ) {
            var s = 31 - vt(o);
            (a = 1 << s), (s = t[s]), s > r && (r = s), (o &= ~a);
          }
          if (
            ((o = r),
            (o = fe() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                  ? 480
                  : 1080 > o
                    ? 1080
                    : 1920 > o
                      ? 1920
                      : 3e3 > o
                        ? 3e3
                        : 4320 > o
                          ? 4320
                          : 1960 * D0(o / 1960)) - o),
            10 < o)
          ) {
            e.timeoutHandle = rl(Ln.bind(null, e, Me, Ot), o);
            break;
          }
          Ln(e, Me, Ot);
          break;
        case 5:
          Ln(e, Me, Ot);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return He(e, fe()), e.callbackNode === n ? lm.bind(null, e) : null;
}
function El(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256),
    (e = ps(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Nl(t)),
    e
  );
}
function Nl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function R0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var o = 0; o < n.length; o++) {
          var r = n[o],
            a = r.getSnapshot;
          r = r.value;
          try {
            if (!xt(a(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~Ac,
      t &= ~Ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      o = 1 << n;
    (e[n] = -1), (t &= ~o);
  }
}
function pd(e) {
  if (X & 6) throw Error(b(327));
  No();
  var t = Ga(e, 0);
  if (!(t & 1)) return He(e, fe()), null;
  var n = ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var o = Xi(e);
    o !== 0 && ((t = o), (n = El(e, o)));
  }
  if (n === 1) throw ((n = Ur), Qn(e, 0), un(e, t), He(e, fe()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ln(e, Me, Ot),
    He(e, fe()),
    null
  );
}
function bc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Vo = fe() + 500), As && _n());
  }
}
function Zn(e) {
  gn !== null && gn.tag === 0 && !(X & 6) && No();
  var t = X;
  X |= 1;
  var n = st.transition,
    o = J;
  try {
    if (((st.transition = null), (J = 1), e)) return e();
  } finally {
    (J = o), (st.transition = n), (X = t), !(X & 6) && _n();
  }
}
function Pc() {
  (Ge = yo.current), ae(yo);
}
function Qn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), l0(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var o = n;
      switch ((uc(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && Ja();
          break;
        case 3:
          Ho(), ae(Ue), ae(Re), yc();
          break;
        case 5:
          xc(o);
          break;
        case 4:
          Ho();
          break;
        case 13:
          ae(le);
          break;
        case 19:
          ae(le);
          break;
        case 10:
          mc(o.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (me = e = kn(e.current, null)),
    (Se = Ge = t),
    (ge = 0),
    (Ur = null),
    (Ac = Ds = qn = 0),
    (Me = Sr = null),
    zn !== null)
  ) {
    for (t = 0; t < zn.length; t++)
      if (((n = zn[t]), (o = n.interleaved), o !== null)) {
        n.interleaved = null;
        var r = o.next,
          a = n.pending;
        if (a !== null) {
          var s = a.next;
          (a.next = r), (o.next = s);
        }
        n.pending = o;
      }
    zn = null;
  }
  return e;
}
function cm(e, t) {
  do {
    var n = me;
    try {
      if ((fc(), (_a.current = ls), is)) {
        for (var o = ce.memoizedState; o !== null; ) {
          var r = o.queue;
          r !== null && (r.pending = null), (o = o.next);
        }
        is = !1;
      }
      if (
        ((Xn = 0),
        (xe = he = ce = null),
        (wr = !1),
        (Lr = 0),
        (kc.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Ur = t), (me = null);
        break;
      }
      e: {
        var a = e,
          s = n.return,
          i = n,
          l = t;
        if (
          ((t = Se),
          (i.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = i,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var u = d.alternate;
            u
              ? ((d.updateQueue = u.updateQueue),
                (d.memoizedState = u.memoizedState),
                (d.lanes = u.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = Ju(s);
          if (x !== null) {
            (x.flags &= -257),
              ed(x, s, i, a, t),
              x.mode & 1 && Zu(a, c, t),
              (t = x),
              (l = c);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(a, c, t), Dc();
              break e;
            }
            l = Error(b(426));
          }
        } else if (se && i.mode & 1) {
          var y = Ju(s);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256),
              ed(y, s, i, a, t),
              dc(Wo(l, i));
            break e;
          }
        }
        (a = l = Wo(l, i)),
          ge !== 4 && (ge = 2),
          Sr === null ? (Sr = [a]) : Sr.push(a),
          (a = s);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var m = Qf(a, l, t);
              Qu(a, m);
              break e;
            case 1:
              i = l;
              var f = a.type,
                h = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (En === null || !En.has(h))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var S = Kf(a, i, t);
                Qu(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      pm(n);
    } catch (C) {
      (t = C), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function um() {
  var e = cs.current;
  return (cs.current = ls), e === null ? ls : e;
}
function Dc() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    ye === null || (!(qn & 268435455) && !(Ds & 268435455)) || un(ye, Se);
}
function ps(e, t) {
  var n = X;
  X |= 2;
  var o = um();
  (ye !== e || Se !== t) && ((Ot = null), Qn(e, t));
  do
    try {
      I0();
      break;
    } catch (r) {
      cm(e, r);
    }
  while (!0);
  if ((fc(), (X = n), (cs.current = o), me !== null)) throw Error(b(261));
  return (ye = null), (Se = 0), ge;
}
function I0() {
  for (; me !== null; ) dm(me);
}
function F0() {
  for (; me !== null && !a2(); ) dm(me);
}
function dm(e) {
  var t = mm(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? pm(e) : (me = t),
    (kc.current = null);
}
function pm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = A0(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (me = null);
        return;
      }
    } else if (((n = k0(n, t, Ge)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function Ln(e, t, n) {
  var o = J,
    r = st.transition;
  try {
    (st.transition = null), (J = 1), _0(e, t, n, o);
  } finally {
    (st.transition = r), (J = o);
  }
  return null;
}
function _0(e, t, n, o) {
  do No();
  while (gn !== null);
  if (X & 6) throw Error(b(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (h2(e, a),
    e === ye && ((me = ye = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sa ||
      ((Sa = !0),
      hm(Ka, function () {
        return No(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = st.transition), (st.transition = null);
    var s = J;
    J = 1;
    var i = X;
    (X |= 4),
      (kc.current = null),
      b0(e, n),
      sm(n, e),
      t0(nl),
      (Ya = !!tl),
      (nl = tl = null),
      (e.current = n),
      P0(n),
      s2(),
      (X = i),
      (J = s),
      (st.transition = a);
  } else e.current = n;
  if (
    (Sa && ((Sa = !1), (gn = e), (ds = r)),
    (a = e.pendingLanes),
    a === 0 && (En = null),
    c2(n.stateNode),
    He(e, fe()),
    t !== null)
  )
    for (o = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), o(r.value, { componentStack: r.stack, digest: r.digest });
  if (us) throw ((us = !1), (e = Sl), (Sl = null), e);
  return (
    ds & 1 && e.tag !== 0 && No(),
    (a = e.pendingLanes),
    a & 1 ? (e === Cl ? Cr++ : ((Cr = 0), (Cl = e))) : (Cr = 0),
    _n(),
    null
  );
}
function No() {
  if (gn !== null) {
    var e = Vp(ds),
      t = st.transition,
      n = J;
    try {
      if (((st.transition = null), (J = 16 > e ? 16 : e), gn === null))
        var o = !1;
      else {
        if (((e = gn), (gn = null), (ds = 0), X & 6)) throw Error(b(331));
        var r = X;
        for (X |= 4, F = e.current; F !== null; ) {
          var a = F,
            s = a.child;
          if (F.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var l = 0; l < i.length; l++) {
                var c = i[l];
                for (F = c; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, d, a);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (F = p);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var u = d.sibling,
                        x = d.return;
                      if ((om(d), d === c)) {
                        F = null;
                        break;
                      }
                      if (u !== null) {
                        (u.return = x), (F = u);
                        break;
                      }
                      F = x;
                    }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var y = g.sibling;
                    (g.sibling = null), (g = y);
                  } while (g !== null);
                }
              }
              F = a;
            }
          }
          if (a.subtreeFlags & 2064 && s !== null) (s.return = a), (F = s);
          else
            e: for (; F !== null; ) {
              if (((a = F), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jr(9, a, a.return);
                }
              var m = a.sibling;
              if (m !== null) {
                (m.return = a.return), (F = m);
                break e;
              }
              F = a.return;
            }
        }
        var f = e.current;
        for (F = f; F !== null; ) {
          s = F;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (F = h);
          else
            e: for (s = f; F !== null; ) {
              if (((i = F), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(9, i);
                  }
                } catch (C) {
                  pe(i, i.return, C);
                }
              if (i === s) {
                F = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                (S.return = i.return), (F = S);
                break e;
              }
              F = i.return;
            }
        }
        if (
          ((X = r), _n(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(Ss, e);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (J = n), (st.transition = t);
    }
  }
  return !1;
}
function fd(e, t, n) {
  (t = Wo(n, t)),
    (t = Qf(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = Be()),
    e !== null && (Xr(e, 1, t), He(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) fd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (En === null || !En.has(o)))
        ) {
          (e = Wo(n, e)),
            (e = Kf(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = Be()),
            t !== null && (Xr(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function B0(e, t, n) {
  var o = e.pingCache;
  o !== null && o.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (Se & n) === n &&
      (ge === 4 || (ge === 3 && (Se & 130023424) === Se && 500 > fe() - Tc)
        ? Qn(e, 0)
        : (Ac |= n)),
    He(e, t);
}
function fm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pa), (pa <<= 1), !(pa & 130023424) && (pa = 4194304))
      : (t = 1));
  var n = Be();
  (e = Vt(e, t)), e !== null && (Xr(e, t, n), He(e, n));
}
function O0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fm(e, n);
}
function L0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  o !== null && o.delete(t), fm(e, n);
}
var mm;
mm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), N0(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), se && t.flags & 1048576 && xf(t, ns, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var o = t.type;
      Oa(e, t), (e = t.pendingProps);
      var r = zo(t, Re.current);
      Eo(t, n), (r = jc(null, t, o, e, r, n));
      var a = Sc();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(o) ? ((a = !0), es(t)) : (a = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            vc(t),
            (r.updater = bs),
            (t.stateNode = r),
            (r._reactInternals = t),
            dl(t, o, e, n),
            (t = ml(null, t, o, !0, a, n)))
          : ((t.tag = 0), se && a && cc(t), Fe(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      o = t.elementType;
      e: {
        switch (
          (Oa(e, t),
          (e = t.pendingProps),
          (r = o._init),
          (o = r(o._payload)),
          (t.type = o),
          (r = t.tag = z0(o)),
          (e = dt(o, e)),
          r)
        ) {
          case 0:
            t = fl(null, t, o, e, n);
            break e;
          case 1:
            t = od(null, t, o, e, n);
            break e;
          case 11:
            t = td(null, t, o, e, n);
            break e;
          case 14:
            t = nd(null, t, o, dt(o.type, e), n);
            break e;
        }
        throw Error(b(306, o, ""));
      }
      return t;
    case 0:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : dt(o, r)),
        fl(e, t, o, r, n)
      );
    case 1:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : dt(o, r)),
        od(e, t, o, r, n)
      );
    case 3:
      e: {
        if ((qf(t), e === null)) throw Error(b(387));
        (o = t.pendingProps),
          (a = t.memoizedState),
          (r = a.element),
          Ef(e, t),
          as(t, o, null, n);
        var s = t.memoizedState;
        if (((o = s.element), a.isDehydrated))
          if (
            ((a = {
              element: o,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (r = Wo(Error(b(423)), t)), (t = rd(e, t, o, n, r));
            break e;
          } else if (o !== r) {
            (r = Wo(Error(b(424)), t)), (t = rd(e, t, o, n, r));
            break e;
          } else
            for (
              Xe = Sn(t.stateNode.containerInfo.firstChild),
                qe = t,
                se = !0,
                ht = null,
                n = Sf(t, null, o, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Uo(), o === r)) {
            t = Qt(e, t, n);
            break e;
          }
          Fe(e, t, o, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nf(t),
        e === null && ll(t),
        (o = t.type),
        (r = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (s = r.children),
        ol(o, r) ? (s = null) : a !== null && ol(o, a) && (t.flags |= 32),
        Xf(e, t),
        Fe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ll(t), null;
    case 13:
      return Zf(e, t, n);
    case 4:
      return (
        gc(t, t.stateNode.containerInfo),
        (o = t.pendingProps),
        e === null ? (t.child = $o(t, null, o, n)) : Fe(e, t, o, n),
        t.child
      );
    case 11:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : dt(o, r)),
        td(e, t, o, r, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((o = t.type._context),
          (r = t.pendingProps),
          (a = t.memoizedProps),
          (s = r.value),
          te(os, o._currentValue),
          (o._currentValue = s),
          a !== null)
        )
          if (xt(a.value, s)) {
            if (a.children === r.children && !Ue.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var i = a.dependencies;
              if (i !== null) {
                s = a.child;
                for (var l = i.firstContext; l !== null; ) {
                  if (l.context === o) {
                    if (a.tag === 1) {
                      (l = $t(-1, n & -n)), (l.tag = 2);
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (a.lanes |= n),
                      (l = a.alternate),
                      l !== null && (l.lanes |= n),
                      cl(a.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) s = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((s = a.return), s === null)) throw Error(b(341));
                (s.lanes |= n),
                  (i = s.alternate),
                  i !== null && (i.lanes |= n),
                  cl(s, n, t),
                  (s = a.sibling);
              } else s = a.child;
              if (s !== null) s.return = a;
              else
                for (s = a; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((a = s.sibling), a !== null)) {
                    (a.return = s.return), (s = a);
                    break;
                  }
                  s = s.return;
                }
              a = s;
            }
        Fe(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (o = t.pendingProps.children),
        Eo(t, n),
        (r = it(r)),
        (o = o(r)),
        (t.flags |= 1),
        Fe(e, t, o, n),
        t.child
      );
    case 14:
      return (
        (o = t.type),
        (r = dt(o, t.pendingProps)),
        (r = dt(o.type, r)),
        nd(e, t, o, r, n)
      );
    case 15:
      return Gf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (o = t.type),
        (r = t.pendingProps),
        (r = t.elementType === o ? r : dt(o, r)),
        Oa(e, t),
        (t.tag = 1),
        $e(o) ? ((e = !0), es(t)) : (e = !1),
        Eo(t, n),
        Vf(t, o, r),
        dl(t, o, r, n),
        ml(null, t, o, !0, e, n)
      );
    case 19:
      return Jf(e, t, n);
    case 22:
      return Yf(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function hm(e, t) {
  return Up(e, t);
}
function M0(e, t, n, o) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, o) {
  return new M0(e, t, n, o);
}
function Rc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function z0(e) {
  if (typeof e == "function") return Rc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ql)) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function kn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function za(e, t, n, o, r, a) {
  var s = 2;
  if (((o = e), typeof e == "function")) Rc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case lo:
        return Kn(n.children, r, a, t);
      case Xl:
        (s = 8), (r |= 8);
        break;
      case _i:
        return (
          (e = at(12, n, t, r | 2)), (e.elementType = _i), (e.lanes = a), e
        );
      case Bi:
        return (e = at(13, n, t, r)), (e.elementType = Bi), (e.lanes = a), e;
      case Oi:
        return (e = at(19, n, t, r)), (e.elementType = Oi), (e.lanes = a), e;
      case Ep:
        return Rs(n, r, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sp:
              s = 10;
              break e;
            case Cp:
              s = 9;
              break e;
            case ql:
              s = 11;
              break e;
            case Zl:
              s = 14;
              break e;
            case sn:
              (s = 16), (o = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = at(s, n, t, r)), (t.elementType = e), (t.type = o), (t.lanes = a), t
  );
}
function Kn(e, t, n, o) {
  return (e = at(7, e, o, t)), (e.lanes = n), e;
}
function Rs(e, t, n, o) {
  return (
    (e = at(22, e, o, t)),
    (e.elementType = Ep),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ni(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function ki(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function U0(e, t, n, o, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = si(0)),
    (this.expirationTimes = si(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = si(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Ic(e, t, n, o, r, a, s, i, l) {
  return (
    (e = new U0(e, t, n, i, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = at(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: o,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vc(a),
    e
  );
}
function $0(e, t, n) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: io,
    key: o == null ? null : "" + o,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function vm(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (to(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return vf(e, n, t);
  }
  return t;
}
function gm(e, t, n, o, r, a, s, i, l) {
  return (
    (e = Ic(n, o, !0, e, r, a, s, i, l)),
    (e.context = vm(null)),
    (n = e.current),
    (o = Be()),
    (r = Nn(n)),
    (a = $t(o, r)),
    (a.callback = t ?? null),
    Cn(n, a, r),
    (e.current.lanes = r),
    Xr(e, r, o),
    He(e, o),
    e
  );
}
function Is(e, t, n, o) {
  var r = t.current,
    a = Be(),
    s = Nn(r);
  return (
    (n = vm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(a, s)),
    (t.payload = { element: e }),
    (o = o === void 0 ? null : o),
    o !== null && (t.callback = o),
    (e = Cn(r, t, s)),
    e !== null && (gt(e, r, s, a), Fa(e, r, s)),
    s
  );
}
function fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function md(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fc(e, t) {
  md(e, t), (e = e.alternate) && md(e, t);
}
function H0() {
  return null;
}
var xm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
Fs.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Is(e, t, null, null);
};
Fs.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      Is(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function Fs(e) {
  this._internalRoot = e;
}
Fs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && Xp(e);
  }
};
function Bc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _s(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hd() {}
function W0(e, t, n, o, r) {
  if (r) {
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var c = fs(s);
        a.call(c);
      };
    }
    var s = gm(t, o, e, 0, null, !1, !1, "", hd);
    return (
      (e._reactRootContainer = s),
      (e[Wt] = s.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      s
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof o == "function") {
    var i = o;
    o = function () {
      var c = fs(l);
      i.call(c);
    };
  }
  var l = Ic(e, 0, !1, null, null, !1, !1, "", hd);
  return (
    (e._reactRootContainer = l),
    (e[Wt] = l.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      Is(t, l, n, o);
    }),
    l
  );
}
function Bs(e, t, n, o, r) {
  var a = n._reactRootContainer;
  if (a) {
    var s = a;
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var l = fs(s);
        i.call(l);
      };
    }
    Is(t, s, e, r);
  } else s = W0(n, t, e, r, o);
  return fs(s);
}
Qp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 &&
          (tc(t, n | 1), He(t, fe()), !(X & 6) && ((Vo = fe() + 500), _n()));
      }
      break;
    case 13:
      Zn(function () {
        var o = Vt(e, 1);
        if (o !== null) {
          var r = Be();
          gt(o, e, 1, r);
        }
      }),
        Fc(e, 1);
  }
};
nc = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = Be();
      gt(t, e, 134217728, n);
    }
    Fc(e, 134217728);
  }
};
Kp = function (e) {
  if (e.tag === 13) {
    var t = Nn(e),
      n = Vt(e, t);
    if (n !== null) {
      var o = Be();
      gt(n, e, t, o);
    }
    Fc(e, t);
  }
};
Gp = function () {
  return J;
};
Yp = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
Ki = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var o = n[t];
          if (o !== e && o.form === e.form) {
            var r = ks(o);
            if (!r) throw Error(b(90));
            kp(o), zi(o, r);
          }
        }
      }
      break;
    case "textarea":
      Tp(e, n);
      break;
    case "select":
      (t = n.value), t != null && wo(e, !!n.multiple, t, !1);
  }
};
_p = bc;
Bp = Zn;
var V0 = { usingClientEntryPoint: !1, Events: [Zr, fo, ks, Ip, Fp, bc] },
  lr = {
    findFiberByHostInstance: Mn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Q0 = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || H0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ca.isDisabled && Ca.supportsFiber)
    try {
      (Ss = Ca.inject(Q0)), (Dt = Ca);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bc(t)) throw Error(b(200));
  return $0(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Bc(e)) throw Error(b(299));
  var n = !1,
    o = "",
    r = xm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Ic(e, 1, !1, null, null, n, !1, o, r)),
    (e[Wt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return (e = Mp(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Zn(e);
};
et.hydrate = function (e, t, n) {
  if (!_s(t)) throw Error(b(200));
  return Bs(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Bc(e)) throw Error(b(405));
  var o = (n != null && n.hydratedSources) || null,
    r = !1,
    a = "",
    s = xm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = gm(t, null, e, 1, n ?? null, r, !1, a, s)),
    (e[Wt] = t.current),
    Ir(e),
    o)
  )
    for (e = 0; e < o.length; e++)
      (n = o[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new Fs(t);
};
et.render = function (e, t, n) {
  if (!_s(t)) throw Error(b(200));
  return Bs(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!_s(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (Zn(function () {
        Bs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = bc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
  if (!_s(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Bs(e, t, n, !1, o);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function ym() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym);
    } catch (e) {
      console.error(e);
    }
}
ym(), (xp.exports = et);
var ea = xp.exports;
const wm = sp(ea);
var jm,
  vd = ea;
(jm = vd.createRoot), vd.hydrateRoot;
const K0 = 1,
  G0 = 1e6,
  Ut = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
  };
let Ai = 0;
function Y0() {
  return (Ai = (Ai + 1) % Number.MAX_SAFE_INTEGER), Ai.toString();
}
const Ti = new Map(),
  gd = (e) => {
    if (Ti.has(e)) return;
    const t = setTimeout(() => {
      Ti.delete(e), Er({ type: Ut.REMOVE_TOAST, toastId: e });
    }, G0);
    Ti.set(e, t);
  },
  X0 = (e, t) => {
    switch (t.type) {
      case Ut.ADD_TOAST:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, K0) };
      case Ut.UPDATE_TOAST:
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case Ut.DISMISS_TOAST: {
        const { toastId: n } = t;
        return (
          n
            ? gd(n)
            : e.toasts.forEach((o) => {
                gd(o.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              n === void 0 || o.id === n ? { ...o, open: !1 } : o
            ),
          }
        );
      }
      case Ut.REMOVE_TOAST:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
      default:
        return e;
    }
  },
  Ua = [];
let $a = { toasts: [] };
function Er(e) {
  ($a = X0($a, e)),
    Ua.forEach((t) => {
      t($a);
    });
}
function q0(e) {
  const t = Y0(),
    n = (r) => Er({ type: Ut.UPDATE_TOAST, toast: { ...r, id: t } }),
    o = () => Er({ type: Ut.DISMISS_TOAST, toastId: t });
  return (
    Er({
      type: Ut.ADD_TOAST,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (r) => {
          r || o();
        },
      },
    }),
    { id: t, dismiss: o, update: n }
  );
}
function Sm() {
  const [e, t] = j.useState($a);
  return (
    j.useEffect(
      () => (
        Ua.push(t),
        () => {
          const n = Ua.indexOf(t);
          n > -1 && Ua.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: q0,
      dismiss: (n) => Er({ type: Ut.DISMISS_TOAST, toastId: n }),
    }
  );
}
function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e == null || e(r), n === !1 || !r.defaultPrevented))
      return t == null ? void 0 : t(r);
  };
}
function Z0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cm(...e) {
  return (t) => e.forEach((n) => Z0(n, t));
}
function yt(...e) {
  return j.useCallback(Cm(...e), e);
}
function J0(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = j.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(p) {
      const { scope: u, children: x, ...w } = p,
        g = (u == null ? void 0 : u[e][l]) || i,
        y = j.useMemo(() => w, Object.values(w));
      return v.jsx(g.Provider, { value: y, children: x });
    }
    function d(p, u) {
      const x = (u == null ? void 0 : u[e][l]) || i,
        w = j.useContext(x);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return (c.displayName = a + "Provider"), [c, d];
  }
  const r = () => {
    const a = n.map((s) => j.createContext(s));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return j.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (r.scopeName = e), [o, eg(r, ...t)];
}
function eg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...i, ...p };
      }, {});
      return j.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var $r = j.forwardRef((e, t) => {
  const { children: n, ...o } = e,
    r = j.Children.toArray(n),
    a = r.find(tg);
  if (a) {
    const s = a.props.children,
      i = r.map((l) =>
        l === a
          ? j.Children.count(s) > 1
            ? j.Children.only(null)
            : j.isValidElement(s)
              ? s.props.children
              : null
          : l
      );
    return v.jsx(kl, {
      ...o,
      ref: t,
      children: j.isValidElement(s) ? j.cloneElement(s, void 0, i) : null,
    });
  }
  return v.jsx(kl, { ...o, ref: t, children: n });
});
$r.displayName = "Slot";
var kl = j.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (j.isValidElement(n)) {
    const r = og(n);
    return j.cloneElement(n, { ...ng(o, n.props), ref: t ? Cm(t, r) : r });
  }
  return j.Children.count(n) > 1 ? j.Children.only(null) : null;
});
kl.displayName = "SlotClone";
var Em = ({ children: e }) => v.jsx(v.Fragment, { children: e });
function tg(e) {
  return j.isValidElement(e) && e.type === Em;
}
function ng(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      a = t[o];
    /^on[A-Z]/.test(o)
      ? r && a
        ? (n[o] = (...i) => {
            a(...i), r(...i);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...a })
        : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function og(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function rg(e) {
  const t = e + "CollectionProvider",
    [n, o] = J0(t),
    [r, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (x) => {
      const { scope: w, children: g } = x,
        y = P.useRef(null),
        m = P.useRef(new Map()).current;
      return v.jsx(r, { scope: w, itemMap: m, collectionRef: y, children: g });
    };
  s.displayName = t;
  const i = e + "CollectionSlot",
    l = P.forwardRef((x, w) => {
      const { scope: g, children: y } = x,
        m = a(i, g),
        f = yt(w, m.collectionRef);
      return v.jsx($r, { ref: f, children: y });
    });
  l.displayName = i;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    p = P.forwardRef((x, w) => {
      const { scope: g, children: y, ...m } = x,
        f = P.useRef(null),
        h = yt(w, f),
        S = a(c, g);
      return (
        P.useEffect(
          () => (
            S.itemMap.set(f, { ref: f, ...m }), () => void S.itemMap.delete(f)
          )
        ),
        v.jsx($r, { [d]: "", ref: h, children: y })
      );
    });
  p.displayName = c;
  function u(x) {
    const w = a(e + "CollectionConsumer", x);
    return P.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const m = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (S, C) => m.indexOf(S.ref.current) - m.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: p }, u, o];
}
function Oc(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = j.createContext(s),
      l = n.length;
    n = [...n, s];
    const c = (p) => {
      var m;
      const { scope: u, children: x, ...w } = p,
        g = ((m = u == null ? void 0 : u[e]) == null ? void 0 : m[l]) || i,
        y = j.useMemo(() => w, Object.values(w));
      return v.jsx(g.Provider, { value: y, children: x });
    };
    c.displayName = a + "Provider";
    function d(p, u) {
      var g;
      const x = ((g = u == null ? void 0 : u[e]) == null ? void 0 : g[l]) || i,
        w = j.useContext(x);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [c, d];
  }
  const r = () => {
    const a = n.map((s) => j.createContext(s));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return j.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (r.scopeName = e), [o, ag(r, ...t)];
}
function ag(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...i, ...p };
      }, {});
      return j.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var sg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ee = sg.reduce((e, t) => {
    const n = j.forwardRef((o, r) => {
      const { asChild: a, ...s } = o,
        i = a ? $r : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(i, { ...s, ref: r })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Nm(e, t) {
  e && ea.flushSync(() => e.dispatchEvent(t));
}
function wt(e) {
  const t = j.useRef(e);
  return (
    j.useEffect(() => {
      t.current = e;
    }),
    j.useMemo(
      () =>
        (...n) => {
          var o;
          return (o = t.current) == null ? void 0 : o.call(t, ...n);
        },
      []
    )
  );
}
function ig(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e);
  j.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return (
      t.addEventListener("keydown", o, { capture: !0 }),
      () => t.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, t]);
}
var lg = "DismissableLayer",
  Al = "dismissableLayer.update",
  cg = "dismissableLayer.pointerDownOutside",
  ug = "dismissableLayer.focusOutside",
  xd,
  km = j.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Lc = j.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: a,
        onInteractOutside: s,
        onDismiss: i,
        ...l
      } = e,
      c = j.useContext(km),
      [d, p] = j.useState(null),
      u =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, x] = j.useState({}),
      w = yt(t, (k) => p(k)),
      g = Array.from(c.layers),
      [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(y),
      f = d ? g.indexOf(d) : -1,
      h = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = f >= m,
      C = pg((k) => {
        const T = k.target,
          B = [...c.branches].some((R) => R.contains(T));
        !S ||
          B ||
          (r == null || r(k),
          s == null || s(k),
          k.defaultPrevented || i == null || i());
      }, u),
      N = fg((k) => {
        const T = k.target;
        [...c.branches].some((R) => R.contains(T)) ||
          (a == null || a(k),
          s == null || s(k),
          k.defaultPrevented || i == null || i());
      }, u);
    return (
      ig((k) => {
        f === c.layers.size - 1 &&
          (o == null || o(k),
          !k.defaultPrevented && i && (k.preventDefault(), i()));
      }, u),
      j.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((xd = u.body.style.pointerEvents),
                (u.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            yd(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (u.body.style.pointerEvents = xd);
            }
          );
      }, [d, u, n, c]),
      j.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            yd());
        },
        [d, c]
      ),
      j.useEffect(() => {
        const k = () => x({});
        return (
          document.addEventListener(Al, k),
          () => document.removeEventListener(Al, k)
        );
      }, []),
      v.jsx(Ee.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: h ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ve(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: ve(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
Lc.displayName = lg;
var dg = "DismissableLayerBranch",
  Am = j.forwardRef((e, t) => {
    const n = j.useContext(km),
      o = j.useRef(null),
      r = yt(t, o);
    return (
      j.useEffect(() => {
        const a = o.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      v.jsx(Ee.div, { ...e, ref: r })
    );
  });
Am.displayName = dg;
function pg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    o = j.useRef(!1),
    r = j.useRef(() => {});
  return (
    j.useEffect(() => {
      const a = (i) => {
          if (i.target && !o.current) {
            let l = function () {
              Tm(cg, n, c, { discrete: !0 });
            };
            const c = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", r.current),
                (r.current = l),
                t.addEventListener("click", r.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", r.current);
          o.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", r.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function fg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    o = j.useRef(!1);
  return (
    j.useEffect(() => {
      const r = (a) => {
        a.target &&
          !o.current &&
          Tm(ug, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function yd() {
  const e = new CustomEvent(Al);
  document.dispatchEvent(e);
}
function Tm(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }),
    o ? Nm(r, a) : r.dispatchEvent(a);
}
var mg = Lc,
  hg = Am,
  Kt = globalThis != null && globalThis.document ? j.useLayoutEffect : () => {},
  vg = "Portal",
  bm = j.forwardRef((e, t) => {
    var i;
    const { container: n, ...o } = e,
      [r, a] = j.useState(!1);
    Kt(() => a(!0), []);
    const s =
      n ||
      (r &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return s ? wm.createPortal(v.jsx(Ee.div, { ...o, ref: t }), s) : null;
  });
bm.displayName = vg;
function gg(e, t) {
  return j.useReducer((n, o) => t[n][o] ?? n, e);
}
var Mc = (e) => {
  const { present: t, children: n } = e,
    o = xg(t),
    r =
      typeof n == "function" ? n({ present: o.isPresent }) : j.Children.only(n),
    a = yt(o.ref, yg(r));
  return typeof n == "function" || o.isPresent
    ? j.cloneElement(r, { ref: a })
    : null;
};
Mc.displayName = "Presence";
function xg(e) {
  const [t, n] = j.useState(),
    o = j.useRef({}),
    r = j.useRef(e),
    a = j.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [i, l] = gg(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    j.useEffect(() => {
      const c = Ea(o.current);
      a.current = i === "mounted" ? c : "none";
    }, [i]),
    Kt(() => {
      const c = o.current,
        d = r.current;
      if (d !== e) {
        const u = a.current,
          x = Ea(c);
        e
          ? l("MOUNT")
          : x === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(d && u !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (r.current = e);
      }
    }, [e, l]),
    Kt(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          p = (x) => {
            const g = Ea(o.current).includes(x.animationName);
            if (x.target === t && g && (l("ANIMATION_END"), !r.current)) {
              const y = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = y);
                }));
            }
          },
          u = (x) => {
            x.target === t && (a.current = Ea(o.current));
          };
        return (
          t.addEventListener("animationstart", u),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            d.clearTimeout(c),
              t.removeEventListener("animationstart", u),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: j.useCallback((c) => {
        c && (o.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function Ea(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function yg(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function wg({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [o, r] = jg({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    s = a ? e : o,
    i = wt(n),
    l = j.useCallback(
      (c) => {
        if (a) {
          const p = typeof c == "function" ? c(e) : c;
          p !== e && i(p);
        } else r(c);
      },
      [a, e, r, i]
    );
  return [s, l];
}
function jg({ defaultProp: e, onChange: t }) {
  const n = j.useState(e),
    [o] = n,
    r = j.useRef(o),
    a = wt(t);
  return (
    j.useEffect(() => {
      r.current !== o && (a(o), (r.current = o));
    }, [o, r, a]),
    n
  );
}
var Sg = "VisuallyHidden",
  Os = j.forwardRef((e, t) =>
    v.jsx(Ee.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Os.displayName = Sg;
var Cg = Os,
  zc = "ToastProvider",
  [Uc, Eg, Ng] = rg("Toast"),
  [Pm, Cj] = Oc("Toast", [Ng]),
  [kg, Ls] = Pm(zc),
  Dm = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: o = 5e3,
        swipeDirection: r = "right",
        swipeThreshold: a = 50,
        children: s,
      } = e,
      [i, l] = j.useState(null),
      [c, d] = j.useState(0),
      p = j.useRef(!1),
      u = j.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${zc}\`. Expected non-empty \`string\`.`
        ),
      v.jsx(Uc.Provider, {
        scope: t,
        children: v.jsx(kg, {
          scope: t,
          label: n,
          duration: o,
          swipeDirection: r,
          swipeThreshold: a,
          toastCount: c,
          viewport: i,
          onViewportChange: l,
          onToastAdd: j.useCallback(() => d((x) => x + 1), []),
          onToastRemove: j.useCallback(() => d((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: u,
          children: s,
        }),
      })
    );
  };
Dm.displayName = zc;
var Rm = "ToastViewport",
  Ag = ["F8"],
  Tl = "toast.viewportPause",
  bl = "toast.viewportResume",
  Im = j.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: o = Ag,
        label: r = "Notifications ({hotkey})",
        ...a
      } = e,
      s = Ls(Rm, n),
      i = Eg(n),
      l = j.useRef(null),
      c = j.useRef(null),
      d = j.useRef(null),
      p = j.useRef(null),
      u = yt(t, p, s.onViewportChange),
      x = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    j.useEffect(() => {
      const y = (m) => {
        var h;
        o.length !== 0 &&
          o.every((S) => m[S] || m.code === S) &&
          ((h = p.current) == null || h.focus());
      };
      return (
        document.addEventListener("keydown", y),
        () => document.removeEventListener("keydown", y)
      );
    }, [o]),
      j.useEffect(() => {
        const y = l.current,
          m = p.current;
        if (w && y && m) {
          const f = () => {
              if (!s.isClosePausedRef.current) {
                const N = new CustomEvent(Tl);
                m.dispatchEvent(N), (s.isClosePausedRef.current = !0);
              }
            },
            h = () => {
              if (s.isClosePausedRef.current) {
                const N = new CustomEvent(bl);
                m.dispatchEvent(N), (s.isClosePausedRef.current = !1);
              }
            },
            S = (N) => {
              !y.contains(N.relatedTarget) && h();
            },
            C = () => {
              y.contains(document.activeElement) || h();
            };
          return (
            y.addEventListener("focusin", f),
            y.addEventListener("focusout", S),
            y.addEventListener("pointermove", f),
            y.addEventListener("pointerleave", C),
            window.addEventListener("blur", f),
            window.addEventListener("focus", h),
            () => {
              y.removeEventListener("focusin", f),
                y.removeEventListener("focusout", S),
                y.removeEventListener("pointermove", f),
                y.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", h);
            }
          );
        }
      }, [w, s.isClosePausedRef]);
    const g = j.useCallback(
      ({ tabbingDirection: y }) => {
        const f = i().map((h) => {
          const S = h.ref.current,
            C = [S, ...zg(S)];
          return y === "forwards" ? C : C.reverse();
        });
        return (y === "forwards" ? f.reverse() : f).flat();
      },
      [i]
    );
    return (
      j.useEffect(() => {
        const y = p.current;
        if (y) {
          const m = (f) => {
            var C, N, k;
            const h = f.altKey || f.ctrlKey || f.metaKey;
            if (f.key === "Tab" && !h) {
              const T = document.activeElement,
                B = f.shiftKey;
              if (f.target === y && B) {
                (C = c.current) == null || C.focus();
                return;
              }
              const O = g({ tabbingDirection: B ? "backwards" : "forwards" }),
                V = O.findIndex((I) => I === T);
              bi(O.slice(V + 1))
                ? f.preventDefault()
                : B
                  ? (N = c.current) == null || N.focus()
                  : (k = d.current) == null || k.focus();
            }
          };
          return (
            y.addEventListener("keydown", m),
            () => y.removeEventListener("keydown", m)
          );
        }
      }, [i, g]),
      v.jsxs(hg, {
        ref: l,
        role: "region",
        "aria-label": r.replace("{hotkey}", x),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            v.jsx(Pl, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const y = g({ tabbingDirection: "forwards" });
                bi(y);
              },
            }),
          v.jsx(Uc.Slot, {
            scope: n,
            children: v.jsx(Ee.ol, { tabIndex: -1, ...a, ref: u }),
          }),
          w &&
            v.jsx(Pl, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const y = g({ tabbingDirection: "backwards" });
                bi(y);
              },
            }),
        ],
      })
    );
  });
Im.displayName = Rm;
var Fm = "ToastFocusProxy",
  Pl = j.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: o, ...r } = e,
      a = Ls(Fm, n);
    return v.jsx(Os, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...r,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var c;
        const i = s.relatedTarget;
        !((c = a.viewport) != null && c.contains(i)) && o();
      },
    });
  });
Pl.displayName = Fm;
var Ms = "Toast",
  Tg = "toast.swipeStart",
  bg = "toast.swipeMove",
  Pg = "toast.swipeCancel",
  Dg = "toast.swipeEnd",
  _m = j.forwardRef((e, t) => {
    const { forceMount: n, open: o, defaultOpen: r, onOpenChange: a, ...s } = e,
      [i = !0, l] = wg({ prop: o, defaultProp: r, onChange: a });
    return v.jsx(Mc, {
      present: n || i,
      children: v.jsx(Fg, {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: wt(e.onPause),
        onResume: wt(e.onResume),
        onSwipeStart: ve(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ve(e.onSwipeMove, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: ve(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ve(e.onSwipeEnd, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            l(!1);
        }),
      }),
    });
  });
_m.displayName = Ms;
var [Rg, Ig] = Pm(Ms, { onClose() {} }),
  Fg = j.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: a,
        onClose: s,
        onEscapeKeyDown: i,
        onPause: l,
        onResume: c,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: u,
        onSwipeEnd: x,
        ...w
      } = e,
      g = Ls(Ms, n),
      [y, m] = j.useState(null),
      f = yt(t, (I) => m(I)),
      h = j.useRef(null),
      S = j.useRef(null),
      C = r || g.duration,
      N = j.useRef(0),
      k = j.useRef(C),
      T = j.useRef(0),
      { onToastAdd: B, onToastRemove: R } = g,
      z = wt(() => {
        var Q;
        (y == null ? void 0 : y.contains(document.activeElement)) &&
          ((Q = g.viewport) == null || Q.focus()),
          s();
      }),
      O = j.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(T.current),
            (N.current = new Date().getTime()),
            (T.current = window.setTimeout(z, I)));
        },
        [z]
      );
    j.useEffect(() => {
      const I = g.viewport;
      if (I) {
        const Q = () => {
            O(k.current), c == null || c();
          },
          U = () => {
            const K = new Date().getTime() - N.current;
            (k.current = k.current - K),
              window.clearTimeout(T.current),
              l == null || l();
          };
        return (
          I.addEventListener(Tl, U),
          I.addEventListener(bl, Q),
          () => {
            I.removeEventListener(Tl, U), I.removeEventListener(bl, Q);
          }
        );
      }
    }, [g.viewport, C, l, c, O]),
      j.useEffect(() => {
        a && !g.isClosePausedRef.current && O(C);
      }, [a, C, g.isClosePausedRef, O]),
      j.useEffect(() => (B(), () => R()), [B, R]);
    const V = j.useMemo(() => (y ? $m(y) : null), [y]);
    return g.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            V &&
              v.jsx(_g, {
                __scopeToast: n,
                role: "status",
                "aria-live": o === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            v.jsx(Rg, {
              scope: n,
              onClose: z,
              children: ea.createPortal(
                v.jsx(Uc.ItemSlot, {
                  scope: n,
                  children: v.jsx(mg, {
                    asChild: !0,
                    onEscapeKeyDown: ve(i, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || z(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: v.jsx(Ee.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": a ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...w,
                      ref: f,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ve(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (i == null || i(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ve(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (h.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: ve(e.onPointerMove, (I) => {
                        if (!h.current) return;
                        const Q = I.clientX - h.current.x,
                          U = I.clientY - h.current.y,
                          K = !!S.current,
                          E = ["left", "right"].includes(g.swipeDirection),
                          D = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = E ? D(0, Q) : 0,
                          _ = E ? 0 : D(0, U),
                          M = I.pointerType === "touch" ? 10 : 2,
                          Y = { x: L, y: _ },
                          ie = { originalEvent: I, delta: Y };
                        K
                          ? ((S.current = Y), Na(bg, p, ie, { discrete: !1 }))
                          : wd(Y, g.swipeDirection, M)
                            ? ((S.current = Y),
                              Na(Tg, d, ie, { discrete: !1 }),
                              I.target.setPointerCapture(I.pointerId))
                            : (Math.abs(Q) > M || Math.abs(U) > M) &&
                              (h.current = null);
                      }),
                      onPointerUp: ve(e.onPointerUp, (I) => {
                        const Q = S.current,
                          U = I.target;
                        if (
                          (U.hasPointerCapture(I.pointerId) &&
                            U.releasePointerCapture(I.pointerId),
                          (S.current = null),
                          (h.current = null),
                          Q)
                        ) {
                          const K = I.currentTarget,
                            E = { originalEvent: I, delta: Q };
                          wd(Q, g.swipeDirection, g.swipeThreshold)
                            ? Na(Dg, x, E, { discrete: !0 })
                            : Na(Pg, u, E, { discrete: !0 }),
                            K.addEventListener(
                              "click",
                              (D) => D.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  _g = (e) => {
    const { __scopeToast: t, children: n, ...o } = e,
      r = Ls(Ms, t),
      [a, s] = j.useState(!1),
      [i, l] = j.useState(!1);
    return (
      Lg(() => s(!0)),
      j.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      i
        ? null
        : v.jsx(bm, {
            asChild: !0,
            children: v.jsx(Os, {
              ...o,
              children:
                a && v.jsxs(v.Fragment, { children: [r.label, " ", n] }),
            }),
          })
    );
  },
  Bg = "ToastTitle",
  Bm = j.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e;
    return v.jsx(Ee.div, { ...o, ref: t });
  });
Bm.displayName = Bg;
var Og = "ToastDescription",
  Om = j.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e;
    return v.jsx(Ee.div, { ...o, ref: t });
  });
Om.displayName = Og;
var Lm = "ToastAction",
  Mm = j.forwardRef((e, t) => {
    const { altText: n, ...o } = e;
    return n.trim()
      ? v.jsx(Um, {
          altText: n,
          asChild: !0,
          children: v.jsx($c, { ...o, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Lm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Mm.displayName = Lm;
var zm = "ToastClose",
  $c = j.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e,
      r = Ig(zm, n);
    return v.jsx(Um, {
      asChild: !0,
      children: v.jsx(Ee.button, {
        type: "button",
        ...o,
        ref: t,
        onClick: ve(e.onClick, r.onClose),
      }),
    });
  });
$c.displayName = zm;
var Um = j.forwardRef((e, t) => {
  const { __scopeToast: n, altText: o, ...r } = e;
  return v.jsx(Ee.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": o || void 0,
    ...r,
    ref: t,
  });
});
function $m(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((o) => {
      if (
        (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent),
        Mg(o))
      ) {
        const r = o.ariaHidden || o.hidden || o.style.display === "none",
          a = o.dataset.radixToastAnnounceExclude === "";
        if (!r)
          if (a) {
            const s = o.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...$m(o));
      }
    }),
    t
  );
}
function Na(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }),
    o ? Nm(r, a) : r.dispatchEvent(a);
}
var wd = (e, t, n = 0) => {
  const o = Math.abs(e.x),
    r = Math.abs(e.y),
    a = o > r;
  return t === "left" || t === "right" ? a && o > n : !a && r > n;
};
function Lg(e = () => {}) {
  const t = wt(e);
  Kt(() => {
    let n = 0,
      o = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (o = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
      }
    );
  }, [t]);
}
function Mg(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function zg(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function bi(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var Ug = Dm,
  Hm = Im,
  Wm = _m,
  Vm = Bm,
  Qm = Om,
  Km = Mm,
  Gm = $c;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $g = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ym = (...e) =>
    e
      .filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = j.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: o,
      className: r = "",
      children: a,
      iconNode: s,
      ...i
    },
    l
  ) =>
    j.createElement(
      "svg",
      {
        ref: l,
        ...Hg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: o ? (Number(n) * 24) / Number(t) : n,
        className: Ym("lucide", r),
        ...i,
      },
      [
        ...s.map(([c, d]) => j.createElement(c, d)),
        ...(Array.isArray(a) ? a : [a]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ne = (e, t) => {
  const n = j.forwardRef(({ className: o, ...r }, a) =>
    j.createElement(Wg, {
      ref: a,
      iconNode: t,
      className: Ym(`lucide-${$g(e)}`, o),
      ...r,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = Ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = Ne("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = Ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = Ne("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = Ne("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = Ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = Ne("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = Ne("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = Ne("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xm = Ne("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = Ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = Ne("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = Ne("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = Ne("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rx = Ne("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = Ne("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = Ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function qm(e) {
  var t,
    n,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = qm(e[t])) && (o && (o += " "), (o += n));
    } else for (n in e) e[n] && (o && (o += " "), (o += n));
  return o;
}
function Zm() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = qm(e)) && (o && (o += " "), (o += t));
  return o;
}
const Hc = "-",
  ix = (e) => {
    const t = cx(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (s) => {
        const i = s.split(Hc);
        return i[0] === "" && i.length !== 1 && i.shift(), Jm(i, t) || lx(s);
      },
      getConflictingClassGroupIds: (s, i) => {
        const l = n[s] || [];
        return i && o[s] ? [...l, ...o[s]] : l;
      },
    };
  },
  Jm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      o = t.nextPart.get(n),
      r = o ? Jm(e.slice(1), o) : void 0;
    if (r) return r;
    if (t.validators.length === 0) return;
    const a = e.join(Hc);
    return (s = t.validators.find(({ validator: i }) => i(a))) == null
      ? void 0
      : s.classGroupId;
  },
  jd = /^\[(.+)\]$/,
  lx = (e) => {
    if (jd.test(e)) {
      const t = jd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  cx = (e) => {
    const { theme: t, prefix: n } = e,
      o = { nextPart: new Map(), validators: [] };
    return (
      dx(Object.entries(e.classGroups), n).forEach(([a, s]) => {
        Dl(s, o, a, t);
      }),
      o
    );
  },
  Dl = (e, t, n, o) => {
    e.forEach((r) => {
      if (typeof r == "string") {
        const a = r === "" ? t : Sd(t, r);
        a.classGroupId = n;
        return;
      }
      if (typeof r == "function") {
        if (ux(r)) {
          Dl(r(o), t, n, o);
          return;
        }
        t.validators.push({ validator: r, classGroupId: n });
        return;
      }
      Object.entries(r).forEach(([a, s]) => {
        Dl(s, Sd(t, a), n, o);
      });
    });
  },
  Sd = (e, t) => {
    let n = e;
    return (
      t.split(Hc).forEach((o) => {
        n.nextPart.has(o) ||
          n.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(o));
      }),
      n
    );
  },
  ux = (e) => e.isThemeGetter,
  dx = (e, t) =>
    t
      ? e.map(([n, o]) => {
          const r = o.map((a) =>
            typeof a == "string"
              ? t + a
              : typeof a == "object"
                ? Object.fromEntries(
                    Object.entries(a).map(([s, i]) => [t + s, i])
                  )
                : a
          );
          return [n, r];
        })
      : e,
  px = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      o = new Map();
    const r = (a, s) => {
      n.set(a, s), t++, t > e && ((t = 0), (o = n), (n = new Map()));
    };
    return {
      get(a) {
        let s = n.get(a);
        if (s !== void 0) return s;
        if ((s = o.get(a)) !== void 0) return r(a, s), s;
      },
      set(a, s) {
        n.has(a) ? n.set(a, s) : r(a, s);
      },
    };
  },
  eh = "!",
  fx = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      o = t.length === 1,
      r = t[0],
      a = t.length,
      s = (i) => {
        const l = [];
        let c = 0,
          d = 0,
          p;
        for (let y = 0; y < i.length; y++) {
          let m = i[y];
          if (c === 0) {
            if (m === r && (o || i.slice(y, y + a) === t)) {
              l.push(i.slice(d, y)), (d = y + a);
              continue;
            }
            if (m === "/") {
              p = y;
              continue;
            }
          }
          m === "[" ? c++ : m === "]" && c--;
        }
        const u = l.length === 0 ? i : i.substring(d),
          x = u.startsWith(eh),
          w = x ? u.substring(1) : u,
          g = p && p > d ? p - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: x,
          baseClassName: w,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (i) => n({ className: i, parseClassName: s }) : s;
  },
  mx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((o) => {
        o[0] === "[" ? (t.push(...n.sort(), o), (n = [])) : n.push(o);
      }),
      t.push(...n.sort()),
      t
    );
  },
  hx = (e) => ({ cache: px(e.cacheSize), parseClassName: fx(e), ...ix(e) }),
  vx = /\s+/,
  gx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: o,
        getConflictingClassGroupIds: r,
      } = t,
      a = [],
      s = e.trim().split(vx);
    let i = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const c = s[l],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: u,
          maybePostfixModifierPosition: x,
        } = n(c);
      let w = !!x,
        g = o(w ? u.substring(0, x) : u);
      if (!g) {
        if (!w) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((g = o(u)), !g)) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w = !1;
      }
      const y = mx(d).join(":"),
        m = p ? y + eh : y,
        f = m + g;
      if (a.includes(f)) continue;
      a.push(f);
      const h = r(g, w);
      for (let S = 0; S < h.length; ++S) {
        const C = h[S];
        a.push(m + C);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function xx() {
  let e = 0,
    t,
    n,
    o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = th(t)) && (o && (o += " "), (o += n));
  return o;
}
const th = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = th(e[o])) && (n && (n += " "), (n += t));
  return n;
};
function yx(e, ...t) {
  let n,
    o,
    r,
    a = s;
  function s(l) {
    const c = t.reduce((d, p) => p(d), e());
    return (n = hx(c)), (o = n.cache.get), (r = n.cache.set), (a = i), i(l);
  }
  function i(l) {
    const c = o(l);
    if (c) return c;
    const d = gx(l, n);
    return r(l, d), d;
  }
  return function () {
    return a(xx.apply(null, arguments));
  };
}
const oe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  nh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  wx = /^\d+\/\d+$/,
  jx = new Set(["px", "full", "screen"]),
  Sx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Cx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  kx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  _t = (e) => ko(e) || jx.has(e) || wx.test(e),
  on = (e) => qo(e, "length", Fx),
  ko = (e) => !!e && !Number.isNaN(Number(e)),
  Pi = (e) => qo(e, "number", ko),
  cr = (e) => !!e && Number.isInteger(Number(e)),
  Ax = (e) => e.endsWith("%") && ko(e.slice(0, -1)),
  H = (e) => nh.test(e),
  rn = (e) => Sx.test(e),
  Tx = new Set(["length", "size", "percentage"]),
  bx = (e) => qo(e, Tx, oh),
  Px = (e) => qo(e, "position", oh),
  Dx = new Set(["image", "url"]),
  Rx = (e) => qo(e, Dx, Bx),
  Ix = (e) => qo(e, "", _x),
  ur = () => !0,
  qo = (e, t, n) => {
    const o = nh.exec(e);
    return o
      ? o[1]
        ? typeof t == "string"
          ? o[1] === t
          : t.has(o[1])
        : n(o[2])
      : !1;
  },
  Fx = (e) => Cx.test(e) && !Ex.test(e),
  oh = () => !1,
  _x = (e) => Nx.test(e),
  Bx = (e) => kx.test(e),
  Ox = () => {
    const e = oe("colors"),
      t = oe("spacing"),
      n = oe("blur"),
      o = oe("brightness"),
      r = oe("borderColor"),
      a = oe("borderRadius"),
      s = oe("borderSpacing"),
      i = oe("borderWidth"),
      l = oe("contrast"),
      c = oe("grayscale"),
      d = oe("hueRotate"),
      p = oe("invert"),
      u = oe("gap"),
      x = oe("gradientColorStops"),
      w = oe("gradientColorStopPositions"),
      g = oe("inset"),
      y = oe("margin"),
      m = oe("opacity"),
      f = oe("padding"),
      h = oe("saturate"),
      S = oe("scale"),
      C = oe("sepia"),
      N = oe("skew"),
      k = oe("space"),
      T = oe("translate"),
      B = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", H, t],
      O = () => [H, t],
      V = () => ["", _t, on],
      I = () => ["auto", ko, H],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      K = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      E = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      D = () => ["", "0", H],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      _ = () => [ko, H];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ur],
        spacing: [_t, on],
        blur: ["none", "", rn, H],
        brightness: _(),
        borderColor: [e],
        borderRadius: ["none", "", "full", rn, H],
        borderSpacing: O(),
        borderWidth: V(),
        contrast: _(),
        grayscale: D(),
        hueRotate: _(),
        invert: D(),
        gap: O(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ax, on],
        inset: z(),
        margin: z(),
        opacity: _(),
        padding: O(),
        saturate: _(),
        scale: _(),
        sepia: D(),
        skew: _(),
        space: O(),
        translate: O(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", H] }],
        container: ["container"],
        columns: [{ columns: [rn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), H] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: B() }],
        "overscroll-x": [{ "overscroll-x": B() }],
        "overscroll-y": [{ "overscroll-y": B() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", cr, H] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", H] }],
        grow: [{ grow: D() }],
        shrink: [{ shrink: D() }],
        order: [{ order: ["first", "last", "none", cr, H] }],
        "grid-cols": [{ "grid-cols": [ur] }],
        "col-start-end": [{ col: ["auto", { span: ["full", cr, H] }, H] }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": [ur] }],
        "row-start-end": [{ row: ["auto", { span: [cr, H] }, H] }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
        gap: [{ gap: [u] }],
        "gap-x": [{ "gap-x": [u] }],
        "gap-y": [{ "gap-y": [u] }],
        "justify-content": [{ justify: ["normal", ...E()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...E(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...E(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [y] }],
        mx: [{ mx: [y] }],
        my: [{ my: [y] }],
        ms: [{ ms: [y] }],
        me: [{ me: [y] }],
        mt: [{ mt: [y] }],
        mr: [{ mr: [y] }],
        mb: [{ mb: [y] }],
        ml: [{ ml: [y] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
        "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              H,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [rn] },
              rn,
            ],
          },
        ],
        h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", rn, on] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Pi,
            ],
          },
        ],
        "font-family": [{ font: [ur] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              H,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ko, Pi] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              _t,
              H,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", H] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", _t, on] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", _t, H] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: O() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", H] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), Px] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", bx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Rx,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [a] }],
        "rounded-s": [{ "rounded-s": [a] }],
        "rounded-e": [{ "rounded-e": [a] }],
        "rounded-t": [{ "rounded-t": [a] }],
        "rounded-r": [{ "rounded-r": [a] }],
        "rounded-b": [{ "rounded-b": [a] }],
        "rounded-l": [{ "rounded-l": [a] }],
        "rounded-ss": [{ "rounded-ss": [a] }],
        "rounded-se": [{ "rounded-se": [a] }],
        "rounded-ee": [{ "rounded-ee": [a] }],
        "rounded-es": [{ "rounded-es": [a] }],
        "rounded-tl": [{ "rounded-tl": [a] }],
        "rounded-tr": [{ "rounded-tr": [a] }],
        "rounded-br": [{ "rounded-br": [a] }],
        "rounded-bl": [{ "rounded-bl": [a] }],
        "border-w": [{ border: [i] }],
        "border-w-x": [{ "border-x": [i] }],
        "border-w-y": [{ "border-y": [i] }],
        "border-w-s": [{ "border-s": [i] }],
        "border-w-e": [{ "border-e": [i] }],
        "border-w-t": [{ "border-t": [i] }],
        "border-w-r": [{ "border-r": [i] }],
        "border-w-b": [{ "border-b": [i] }],
        "border-w-l": [{ "border-l": [i] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [i] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [i] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [r] }],
        "border-color-x": [{ "border-x": [r] }],
        "border-color-y": [{ "border-y": [r] }],
        "border-color-s": [{ "border-s": [r] }],
        "border-color-e": [{ "border-e": [r] }],
        "border-color-t": [{ "border-t": [r] }],
        "border-color-r": [{ "border-r": [r] }],
        "border-color-b": [{ "border-b": [r] }],
        "border-color-l": [{ "border-l": [r] }],
        "divide-color": [{ divide: [r] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [_t, H] }],
        "outline-w": [{ outline: [_t, on] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [_t, on] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", rn, Ix] }],
        "shadow-color": [{ shadow: [ur] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...K(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": K() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [o] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", rn, H] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [h] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [h] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              H,
            ],
          },
        ],
        duration: [{ duration: _() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
        delay: [{ delay: _() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [cr, H] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              H,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": O() }],
        "scroll-mx": [{ "scroll-mx": O() }],
        "scroll-my": [{ "scroll-my": O() }],
        "scroll-ms": [{ "scroll-ms": O() }],
        "scroll-me": [{ "scroll-me": O() }],
        "scroll-mt": [{ "scroll-mt": O() }],
        "scroll-mr": [{ "scroll-mr": O() }],
        "scroll-mb": [{ "scroll-mb": O() }],
        "scroll-ml": [{ "scroll-ml": O() }],
        "scroll-p": [{ "scroll-p": O() }],
        "scroll-px": [{ "scroll-px": O() }],
        "scroll-py": [{ "scroll-py": O() }],
        "scroll-ps": [{ "scroll-ps": O() }],
        "scroll-pe": [{ "scroll-pe": O() }],
        "scroll-pt": [{ "scroll-pt": O() }],
        "scroll-pr": [{ "scroll-pr": O() }],
        "scroll-pb": [{ "scroll-pb": O() }],
        "scroll-pl": [{ "scroll-pl": O() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", H] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [_t, on, Pi] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Lx = yx(Ox);
function ke(...e) {
  return Lx(Zm(e));
}
const Cd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Ed = Zm,
  rh = (e, t) => (n) => {
    var o;
    if ((t == null ? void 0 : t.variants) == null)
      return Ed(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: r, defaultVariants: a } = t,
      s = Object.keys(r).map((c) => {
        const d = n == null ? void 0 : n[c],
          p = a == null ? void 0 : a[c];
        if (d === null) return null;
        const u = Cd(d) || Cd(p);
        return r[c][u];
      }),
      i =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [p, u] = d;
          return u === void 0 || (c[p] = u), c;
        }, {}),
      l =
        t == null || (o = t.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((c, d) => {
              let { class: p, className: u, ...x } = d;
              return Object.entries(x).every((w) => {
                let [g, y] = w;
                return Array.isArray(y)
                  ? y.includes({ ...a, ...i }[g])
                  : { ...a, ...i }[g] === y;
              })
                ? [...c, p, u]
                : c;
            }, []);
    return Ed(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Mx = Ug,
  ah = P.forwardRef(({ className: e, ...t }, n) =>
    v.jsx(Hm, {
      "data-lov-id": "src/components/ui/toast.jsx:10:2",
      "data-lov-name": "ToastPrimitives.Viewport",
      "data-component-path": "src/components/ui/toast.jsx",
      "data-component-line": "10",
      "data-component-file": "toast.jsx",
      "data-component-name": "ToastPrimitives.Viewport",
      "data-component-content": "%7B%7D",
      ref: n,
      className: ke(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
ah.displayName = Hm.displayName;
const zx = rh(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  sh = P.forwardRef(({ className: e, variant: t, ...n }, o) =>
    v.jsx(Wm, {
      "data-lov-id": "src/components/ui/toast.jsx:38:2",
      "data-lov-name": "ToastPrimitives.Root",
      "data-component-path": "src/components/ui/toast.jsx",
      "data-component-line": "38",
      "data-component-file": "toast.jsx",
      "data-component-name": "ToastPrimitives.Root",
      "data-component-content": "%7B%7D",
      ref: o,
      className: ke(zx({ variant: t }), e),
      ...n,
    })
  );
sh.displayName = Wm.displayName;
const Ux = P.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Km, {
    "data-lov-id": "src/components/ui/toast.jsx:47:2",
    "data-lov-name": "ToastPrimitives.Action",
    "data-component-path": "src/components/ui/toast.jsx",
    "data-component-line": "47",
    "data-component-file": "toast.jsx",
    "data-component-name": "ToastPrimitives.Action",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
Ux.displayName = Km.displayName;
const ih = P.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Gm, {
    "data-lov-id": "src/components/ui/toast.jsx:59:2",
    "data-lov-name": "ToastPrimitives.Close",
    "data-component-path": "src/components/ui/toast.jsx",
    "data-component-line": "59",
    "data-component-file": "toast.jsx",
    "data-component-name": "ToastPrimitives.Close",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: v.jsx(sx, {
      "data-lov-id": "src/components/ui/toast.jsx:68:4",
      "data-lov-name": "X",
      "data-component-path": "src/components/ui/toast.jsx",
      "data-component-line": "68",
      "data-component-file": "toast.jsx",
      "data-component-name": "X",
      "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
      className: "h-4 w-4",
    }),
  })
);
ih.displayName = Gm.displayName;
const lh = P.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Vm, {
    "data-lov-id": "src/components/ui/toast.jsx:74:2",
    "data-lov-name": "ToastPrimitives.Title",
    "data-component-path": "src/components/ui/toast.jsx",
    "data-component-line": "74",
    "data-component-file": "toast.jsx",
    "data-component-name": "ToastPrimitives.Title",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("text-sm font-semibold", e),
    ...t,
  })
);
lh.displayName = Vm.displayName;
const ch = P.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Qm, {
    "data-lov-id": "src/components/ui/toast.jsx:83:2",
    "data-lov-name": "ToastPrimitives.Description",
    "data-component-path": "src/components/ui/toast.jsx",
    "data-component-line": "83",
    "data-component-file": "toast.jsx",
    "data-component-name": "ToastPrimitives.Description",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("text-sm opacity-90", e),
    ...t,
  })
);
ch.displayName = Qm.displayName;
function $x() {
  const { toasts: e } = Sm();
  return v.jsxs(Mx, {
    "data-lov-id": "src/components/ui/toaster.jsx:15:4",
    "data-lov-name": "ToastProvider",
    "data-component-path": "src/components/ui/toaster.jsx",
    "data-component-line": "15",
    "data-component-file": "toaster.jsx",
    "data-component-name": "ToastProvider",
    "data-component-content": "%7B%7D",
    children: [
      e.map(function ({ id: t, title: n, description: o, action: r, ...a }) {
        return v.jsxs(
          sh,
          {
            "data-lov-id": "src/components/ui/toaster.jsx:18:10",
            "data-lov-name": "Toast",
            "data-component-path": "src/components/ui/toaster.jsx",
            "data-component-line": "18",
            "data-component-file": "toaster.jsx",
            "data-component-name": "Toast",
            "data-component-content": "%7B%7D",
            ...a,
            children: [
              v.jsxs("div", {
                "data-lov-id": "src/components/ui/toaster.jsx:19:12",
                "data-lov-name": "div",
                "data-component-path": "src/components/ui/toaster.jsx",
                "data-component-line": "19",
                "data-component-file": "toaster.jsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                className: "grid gap-1",
                children: [
                  n &&
                    v.jsx(lh, {
                      "data-lov-id": "src/components/ui/toaster.jsx:20:24",
                      "data-lov-name": "ToastTitle",
                      "data-component-path": "src/components/ui/toaster.jsx",
                      "data-component-line": "20",
                      "data-component-file": "toaster.jsx",
                      "data-component-name": "ToastTitle",
                      "data-component-content": "%7B%7D",
                      children: n,
                    }),
                  o &&
                    v.jsx(ch, {
                      "data-lov-id": "src/components/ui/toaster.jsx:22:16",
                      "data-lov-name": "ToastDescription",
                      "data-component-path": "src/components/ui/toaster.jsx",
                      "data-component-line": "22",
                      "data-component-file": "toaster.jsx",
                      "data-component-name": "ToastDescription",
                      "data-component-content": "%7B%7D",
                      children: o,
                    }),
                ],
              }),
              r,
              v.jsx(ih, {
                "data-lov-id": "src/components/ui/toaster.jsx:26:12",
                "data-lov-name": "ToastClose",
                "data-component-path": "src/components/ui/toaster.jsx",
                "data-component-line": "26",
                "data-component-file": "toaster.jsx",
                "data-component-name": "ToastClose",
                "data-component-content": "%7B%7D",
              }),
            ],
          },
          t
        );
      }),
      v.jsx(ah, {
        "data-lov-id": "src/components/ui/toaster.jsx:30:6",
        "data-lov-name": "ToastViewport",
        "data-component-path": "src/components/ui/toaster.jsx",
        "data-component-line": "30",
        "data-component-file": "toaster.jsx",
        "data-component-name": "ToastViewport",
        "data-component-content": "%7B%7D",
      }),
    ],
  });
}
var Nd = ["light", "dark"],
  Hx = "(prefers-color-scheme: dark)",
  Wx = j.createContext(void 0),
  Vx = { setTheme: (e) => {}, themes: [] },
  Qx = () => {
    var e;
    return (e = j.useContext(Wx)) != null ? e : Vx;
  };
j.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: o,
    enableColorScheme: r,
    defaultTheme: a,
    value: s,
    attrs: i,
    nonce: l,
  }) => {
    let c = a === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = r
        ? Nd.includes(a) && a
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      u = (w, g = !1, y = !0) => {
        let m = s ? s[w] : w,
          f = g ? w + "|| ''" : `'${m}'`,
          h = "";
        return (
          r &&
            y &&
            !g &&
            Nd.includes(w) &&
            (h += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? g || m
              ? (h += `c.add(${f})`)
              : (h += "null")
            : m && (h += `d[s](n,${f})`),
          h
        );
      },
      x = e
        ? `!function(){${d}${u(e)}}()`
        : o
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${Hx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${u(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + u(a, !1, !1) + "}"}${p}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${u(s ? "x[e]" : "e", !0)}}else{${u(a, !1, !1)};}${p}}catch(t){}}();`;
    return j.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: x },
    });
  }
);
var Kx = (e) => {
    switch (e) {
      case "success":
        return Xx;
      case "info":
        return Zx;
      case "warning":
        return qx;
      case "error":
        return Jx;
      default:
        return null;
    }
  },
  Gx = Array(12).fill(0),
  Yx = ({ visible: e }) =>
    P.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      P.createElement(
        "div",
        { className: "sonner-spinner" },
        Gx.map((t, n) =>
          P.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Xx = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  qx = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Zx = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Jx = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  ey = () => {
    let [e, t] = P.useState(document.hidden);
    return (
      P.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Rl = 1,
  ty = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...o } = e,
            r =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Rl++,
            a = this.toasts.find((i) => i.id === r),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            a
              ? (this.toasts = this.toasts.map((i) =>
                  i.id === r
                    ? (this.publish({ ...i, ...e, id: r, title: n }),
                      { ...i, ...e, id: r, dismissible: s, title: n })
                    : i
                ))
              : this.addToast({ title: n, ...o, dismissible: s, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let o = e instanceof Promise ? e : e(),
            r = n !== void 0;
          return (
            o
              .then(async (a) => {
                if (oy(a) && !a.ok) {
                  r = !1;
                  let s =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    i =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: i,
                  });
                } else if (t.success !== void 0) {
                  r = !1;
                  let s =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    i =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: s,
                    description: i,
                  });
                }
              })
              .catch(async (a) => {
                if (t.error !== void 0) {
                  r = !1;
                  let s =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    i =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: i,
                  });
                }
              })
              .finally(() => {
                var a;
                r && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Rl++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Ke = new ty(),
  ny = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Rl++;
    return Ke.addToast({ title: e, ...t, id: n }), n;
  },
  oy = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  ry = ny,
  ay = () => Ke.toasts;
Object.assign(
  ry,
  {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading,
  },
  { getHistory: ay }
);
function sy(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  (o.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(o, n.firstChild)
      : n.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = e)
      : o.appendChild(document.createTextNode(e));
}
sy(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ka(e) {
  return e.label !== void 0;
}
var iy = 3,
  ly = "32px",
  cy = 4e3,
  uy = 356,
  dy = 14,
  py = 20,
  fy = 200;
function my(...e) {
  return e.filter(Boolean).join(" ");
}
var hy = (e) => {
  var t, n, o, r, a, s, i, l, c, d;
  let {
      invert: p,
      toast: u,
      unstyled: x,
      interacting: w,
      setHeights: g,
      visibleToasts: y,
      heights: m,
      index: f,
      toasts: h,
      expanded: S,
      removeToast: C,
      defaultRichColors: N,
      closeButton: k,
      style: T,
      cancelButtonStyle: B,
      actionButtonStyle: R,
      className: z = "",
      descriptionClassName: O = "",
      duration: V,
      position: I,
      gap: Q,
      loadingIcon: U,
      expandByDefault: K,
      classNames: E,
      icons: D,
      closeButtonAriaLabel: L = "Close toast",
      pauseWhenPageIsHidden: _,
      cn: M,
    } = e,
    [Y, ie] = P.useState(!1),
    [Ve, Z] = P.useState(!1),
    [ct, qt] = P.useState(!1),
    [Zt, Jt] = P.useState(!1),
    [na, no] = P.useState(0),
    [Bn, er] = P.useState(0),
    oa = P.useRef(null),
    en = P.useRef(null),
    Xs = f === 0,
    qs = f + 1 <= y,
    we = u.type,
    oo = u.dismissible !== !1,
    fv = u.className || "",
    mv = u.descriptionClassName || "",
    ra = P.useMemo(
      () => m.findIndex(($) => $.toastId === u.id) || 0,
      [m, u.id]
    ),
    hv = P.useMemo(() => {
      var $;
      return ($ = u.closeButton) != null ? $ : k;
    }, [u.closeButton, k]),
    nu = P.useMemo(() => u.duration || V || cy, [u.duration, V]),
    Zs = P.useRef(0),
    ro = P.useRef(0),
    ou = P.useRef(0),
    ao = P.useRef(null),
    [ru, vv] = I.split("-"),
    au = P.useMemo(
      () => m.reduce(($, ne, ee) => (ee >= ra ? $ : $ + ne.height), 0),
      [m, ra]
    ),
    su = ey(),
    gv = u.invert || p,
    Js = we === "loading";
  (ro.current = P.useMemo(() => ra * Q + au, [ra, au])),
    P.useEffect(() => {
      ie(!0);
    }, []),
    P.useLayoutEffect(() => {
      if (!Y) return;
      let $ = en.current,
        ne = $.style.height;
      $.style.height = "auto";
      let ee = $.getBoundingClientRect().height;
      ($.style.height = ne),
        er(ee),
        g((Ct) =>
          Ct.find((Et) => Et.toastId === u.id)
            ? Ct.map((Et) => (Et.toastId === u.id ? { ...Et, height: ee } : Et))
            : [{ toastId: u.id, height: ee, position: u.position }, ...Ct]
        );
    }, [Y, u.title, u.description, g, u.id]);
  let tn = P.useCallback(() => {
    Z(!0),
      no(ro.current),
      g(($) => $.filter((ne) => ne.toastId !== u.id)),
      setTimeout(() => {
        C(u);
      }, fy);
  }, [u, C, g, ro]);
  P.useEffect(() => {
    if (
      (u.promise && we === "loading") ||
      u.duration === 1 / 0 ||
      u.type === "loading"
    )
      return;
    let $,
      ne = nu;
    return (
      S || w || (_ && su)
        ? (() => {
            if (ou.current < Zs.current) {
              let ee = new Date().getTime() - Zs.current;
              ne = ne - ee;
            }
            ou.current = new Date().getTime();
          })()
        : ne !== 1 / 0 &&
          ((Zs.current = new Date().getTime()),
          ($ = setTimeout(() => {
            var ee;
            (ee = u.onAutoClose) == null || ee.call(u, u), tn();
          }, ne))),
      () => clearTimeout($)
    );
  }, [S, w, K, u, nu, tn, u.promise, we, _, su]),
    P.useEffect(() => {
      let $ = en.current;
      if ($) {
        let ne = $.getBoundingClientRect().height;
        return (
          er(ne),
          g((ee) => [
            { toastId: u.id, height: ne, position: u.position },
            ...ee,
          ]),
          () => g((ee) => ee.filter((Ct) => Ct.toastId !== u.id))
        );
      }
    }, [g, u.id]),
    P.useEffect(() => {
      u.delete && tn();
    }, [tn, u.delete]);
  function xv() {
    return D != null && D.loading
      ? P.createElement(
          "div",
          { className: "sonner-loader", "data-visible": we === "loading" },
          D.loading
        )
      : U
        ? P.createElement(
            "div",
            { className: "sonner-loader", "data-visible": we === "loading" },
            U
          )
        : P.createElement(Yx, { visible: we === "loading" });
  }
  return P.createElement(
    "li",
    {
      "aria-live": u.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: en,
      className: M(
        z,
        fv,
        E == null ? void 0 : E.toast,
        (t = u == null ? void 0 : u.classNames) == null ? void 0 : t.toast,
        E == null ? void 0 : E.default,
        E == null ? void 0 : E[we],
        (n = u == null ? void 0 : u.classNames) == null ? void 0 : n[we]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (o = u.richColors) != null ? o : N,
      "data-styled": !(u.jsx || u.unstyled || x),
      "data-mounted": Y,
      "data-promise": !!u.promise,
      "data-removed": Ve,
      "data-visible": qs,
      "data-y-position": ru,
      "data-x-position": vv,
      "data-index": f,
      "data-front": Xs,
      "data-swiping": ct,
      "data-dismissible": oo,
      "data-type": we,
      "data-invert": gv,
      "data-swipe-out": Zt,
      "data-expanded": !!(S || (K && Y)),
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": h.length - f,
        "--offset": `${Ve ? na : ro.current}px`,
        "--initial-height": K ? "auto" : `${Bn}px`,
        ...T,
        ...u.style,
      },
      onPointerDown: ($) => {
        Js ||
          !oo ||
          ((oa.current = new Date()),
          no(ro.current),
          $.target.setPointerCapture($.pointerId),
          $.target.tagName !== "BUTTON" &&
            (qt(!0), (ao.current = { x: $.clientX, y: $.clientY })));
      },
      onPointerUp: () => {
        var $, ne, ee, Ct;
        if (Zt || !oo) return;
        ao.current = null;
        let Et = Number(
            (($ = en.current) == null
              ? void 0
              : $.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          aa =
            new Date().getTime() -
            ((ne = oa.current) == null ? void 0 : ne.getTime()),
          yv = Math.abs(Et) / aa;
        if (Math.abs(Et) >= py || yv > 0.11) {
          no(ro.current),
            (ee = u.onDismiss) == null || ee.call(u, u),
            tn(),
            Jt(!0);
          return;
        }
        (Ct = en.current) == null ||
          Ct.style.setProperty("--swipe-amount", "0px"),
          qt(!1);
      },
      onPointerMove: ($) => {
        var ne;
        if (!ao.current || !oo) return;
        let ee = $.clientY - ao.current.y,
          Ct = $.clientX - ao.current.x,
          Et = (ru === "top" ? Math.min : Math.max)(0, ee),
          aa = $.pointerType === "touch" ? 10 : 2;
        Math.abs(Et) > aa
          ? (ne = en.current) == null ||
            ne.style.setProperty("--swipe-amount", `${ee}px`)
          : Math.abs(Ct) > aa && (ao.current = null);
      },
    },
    hv && !u.jsx
      ? P.createElement(
          "button",
          {
            "aria-label": L,
            "data-disabled": Js,
            "data-close-button": !0,
            onClick:
              Js || !oo
                ? () => {}
                : () => {
                    var $;
                    tn(), ($ = u.onDismiss) == null || $.call(u, u);
                  },
            className: M(
              E == null ? void 0 : E.closeButton,
              (r = u == null ? void 0 : u.classNames) == null
                ? void 0
                : r.closeButton
            ),
          },
          P.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            P.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            P.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    u.jsx || P.isValidElement(u.title)
      ? u.jsx || u.title
      : P.createElement(
          P.Fragment,
          null,
          we || u.icon || u.promise
            ? P.createElement(
                "div",
                {
                  "data-icon": "",
                  className: M(
                    E == null ? void 0 : E.icon,
                    (a = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : a.icon
                  ),
                },
                u.promise || (u.type === "loading" && !u.icon)
                  ? u.icon || xv()
                  : null,
                u.type !== "loading"
                  ? u.icon || (D == null ? void 0 : D[we]) || Kx(we)
                  : null
              )
            : null,
          P.createElement(
            "div",
            {
              "data-content": "",
              className: M(
                E == null ? void 0 : E.content,
                (s = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : s.content
              ),
            },
            P.createElement(
              "div",
              {
                "data-title": "",
                className: M(
                  E == null ? void 0 : E.title,
                  (i = u == null ? void 0 : u.classNames) == null
                    ? void 0
                    : i.title
                ),
              },
              u.title
            ),
            u.description
              ? P.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: M(
                      O,
                      mv,
                      E == null ? void 0 : E.description,
                      (l = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : l.description
                    ),
                  },
                  u.description
                )
              : null
          ),
          P.isValidElement(u.cancel)
            ? u.cancel
            : u.cancel && ka(u.cancel)
              ? P.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: u.cancelButtonStyle || B,
                    onClick: ($) => {
                      var ne, ee;
                      ka(u.cancel) &&
                        oo &&
                        ((ee = (ne = u.cancel).onClick) == null ||
                          ee.call(ne, $),
                        tn());
                    },
                    className: M(
                      E == null ? void 0 : E.cancelButton,
                      (c = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : c.cancelButton
                    ),
                  },
                  u.cancel.label
                )
              : null,
          P.isValidElement(u.action)
            ? u.action
            : u.action && ka(u.action)
              ? P.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: u.actionButtonStyle || R,
                    onClick: ($) => {
                      var ne, ee;
                      ka(u.action) &&
                        ($.defaultPrevented ||
                          ((ee = (ne = u.action).onClick) == null ||
                            ee.call(ne, $),
                          tn()));
                    },
                    className: M(
                      E == null ? void 0 : E.actionButton,
                      (d = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : d.actionButton
                    ),
                  },
                  u.action.label
                )
              : null
        )
  );
};
function kd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var vy = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: r,
      closeButton: a,
      className: s,
      offset: i,
      theme: l = "light",
      richColors: c,
      duration: d,
      style: p,
      visibleToasts: u = iy,
      toastOptions: x,
      dir: w = kd(),
      gap: g = dy,
      loadingIcon: y,
      icons: m,
      containerAriaLabel: f = "Notifications",
      pauseWhenPageIsHidden: h,
      cn: S = my,
    } = e,
    [C, N] = P.useState([]),
    k = P.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(C.filter((_) => _.position).map((_) => _.position))
          )
        ),
      [C, n]
    ),
    [T, B] = P.useState([]),
    [R, z] = P.useState(!1),
    [O, V] = P.useState(!1),
    [I, Q] = P.useState(
      l !== "system"
        ? l
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
    ),
    U = P.useRef(null),
    K = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    E = P.useRef(null),
    D = P.useRef(!1),
    L = P.useCallback(
      (_) => {
        var M;
        ((M = C.find((Y) => Y.id === _.id)) != null && M.delete) ||
          Ke.dismiss(_.id),
          N((Y) => Y.filter(({ id: ie }) => ie !== _.id));
      },
      [C]
    );
  return (
    P.useEffect(
      () =>
        Ke.subscribe((_) => {
          if (_.dismiss) {
            N((M) => M.map((Y) => (Y.id === _.id ? { ...Y, delete: !0 } : Y)));
            return;
          }
          setTimeout(() => {
            wm.flushSync(() => {
              N((M) => {
                let Y = M.findIndex((ie) => ie.id === _.id);
                return Y !== -1
                  ? [...M.slice(0, Y), { ...M[Y], ..._ }, ...M.slice(Y + 1)]
                  : [_, ...M];
              });
            });
          });
        }),
      []
    ),
    P.useEffect(() => {
      if (l !== "system") {
        Q(l);
        return;
      }
      l === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? Q("dark")
          : Q("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: _ }) => {
              Q(_ ? "dark" : "light");
            });
    }, [l]),
    P.useEffect(() => {
      C.length <= 1 && z(!1);
    }, [C]),
    P.useEffect(() => {
      let _ = (M) => {
        var Y, ie;
        o.every((Ve) => M[Ve] || M.code === Ve) &&
          (z(!0), (Y = U.current) == null || Y.focus()),
          M.code === "Escape" &&
            (document.activeElement === U.current ||
              ((ie = U.current) != null &&
                ie.contains(document.activeElement))) &&
            z(!1);
      };
      return (
        document.addEventListener("keydown", _),
        () => document.removeEventListener("keydown", _)
      );
    }, [o]),
    P.useEffect(() => {
      if (U.current)
        return () => {
          E.current &&
            (E.current.focus({ preventScroll: !0 }),
            (E.current = null),
            (D.current = !1));
        };
    }, [U.current]),
    C.length
      ? P.createElement(
          "section",
          { "aria-label": `${f} ${K}`, tabIndex: -1 },
          k.map((_, M) => {
            var Y;
            let [ie, Ve] = _.split("-");
            return P.createElement(
              "ol",
              {
                key: _,
                dir: w === "auto" ? kd() : w,
                tabIndex: -1,
                ref: U,
                className: s,
                "data-sonner-toaster": !0,
                "data-theme": I,
                "data-y-position": ie,
                "data-x-position": Ve,
                style: {
                  "--front-toast-height": `${((Y = T[0]) == null ? void 0 : Y.height) || 0}px`,
                  "--offset": typeof i == "number" ? `${i}px` : i || ly,
                  "--width": `${uy}px`,
                  "--gap": `${g}px`,
                  ...p,
                },
                onBlur: (Z) => {
                  D.current &&
                    !Z.currentTarget.contains(Z.relatedTarget) &&
                    ((D.current = !1),
                    E.current &&
                      (E.current.focus({ preventScroll: !0 }),
                      (E.current = null)));
                },
                onFocus: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    D.current ||
                    ((D.current = !0), (E.current = Z.relatedTarget));
                },
                onMouseEnter: () => z(!0),
                onMouseMove: () => z(!0),
                onMouseLeave: () => {
                  O || z(!1);
                },
                onPointerDown: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    V(!0);
                },
                onPointerUp: () => V(!1),
              },
              C.filter((Z) => (!Z.position && M === 0) || Z.position === _).map(
                (Z, ct) => {
                  var qt, Zt;
                  return P.createElement(hy, {
                    key: Z.id,
                    icons: m,
                    index: ct,
                    toast: Z,
                    defaultRichColors: c,
                    duration:
                      (qt = x == null ? void 0 : x.duration) != null ? qt : d,
                    className: x == null ? void 0 : x.className,
                    descriptionClassName:
                      x == null ? void 0 : x.descriptionClassName,
                    invert: t,
                    visibleToasts: u,
                    closeButton:
                      (Zt = x == null ? void 0 : x.closeButton) != null
                        ? Zt
                        : a,
                    interacting: O,
                    position: _,
                    style: x == null ? void 0 : x.style,
                    unstyled: x == null ? void 0 : x.unstyled,
                    classNames: x == null ? void 0 : x.classNames,
                    cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                    actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                    removeToast: L,
                    toasts: C.filter((Jt) => Jt.position == Z.position),
                    heights: T.filter((Jt) => Jt.position == Z.position),
                    setHeights: B,
                    expandByDefault: r,
                    gap: g,
                    loadingIcon: y,
                    expanded: R,
                    pauseWhenPageIsHidden: h,
                    cn: S,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
const gy = (e) => {
    const { theme: t = "system" } = Qx();
    return v.jsx(vy, {
      "data-lov-id": "src/components/ui/sonner.jsx:8:4",
      "data-lov-name": "Sonner",
      "data-component-path": "src/components/ui/sonner.jsx",
      "data-component-line": "8",
      "data-component-file": "sonner.jsx",
      "data-component-name": "Sonner",
      "data-component-content": "%7B%22className%22%3A%22toaster%20group%22%7D",
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  xy = ["top", "right", "bottom", "left"],
  bn = Math.min,
  Ye = Math.max,
  ms = Math.round,
  Aa = Math.floor,
  Pn = (e) => ({ x: e, y: e }),
  yy = { left: "right", right: "left", bottom: "top", top: "bottom" },
  wy = { start: "end", end: "start" };
function Il(e, t, n) {
  return Ye(e, bn(t, n));
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Yt(e) {
  return e.split("-")[0];
}
function Zo(e) {
  return e.split("-")[1];
}
function Wc(e) {
  return e === "x" ? "y" : "x";
}
function Vc(e) {
  return e === "y" ? "height" : "width";
}
function Dn(e) {
  return ["top", "bottom"].includes(Yt(e)) ? "y" : "x";
}
function Qc(e) {
  return Wc(Dn(e));
}
function jy(e, t, n) {
  n === void 0 && (n = !1);
  const o = Zo(e),
    r = Qc(e),
    a = Vc(r);
  let s =
    r === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return t.reference[a] > t.floating[a] && (s = hs(s)), [s, hs(s)];
}
function Sy(e) {
  const t = hs(e);
  return [Fl(e), t, Fl(t)];
}
function Fl(e) {
  return e.replace(/start|end/g, (t) => wy[t]);
}
function Cy(e, t, n) {
  const o = ["left", "right"],
    r = ["right", "left"],
    a = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? r : o) : t ? o : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Ey(e, t, n, o) {
  const r = Zo(e);
  let a = Cy(Yt(e), n === "start", o);
  return (
    r && ((a = a.map((s) => s + "-" + r)), t && (a = a.concat(a.map(Fl)))), a
  );
}
function hs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yy[t]);
}
function Ny(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function uh(e) {
  return typeof e != "number"
    ? Ny(e)
    : { top: e, right: e, bottom: e, left: e };
}
function vs(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n,
  };
}
function Ad(e, t, n) {
  let { reference: o, floating: r } = e;
  const a = Dn(t),
    s = Qc(t),
    i = Vc(s),
    l = Yt(t),
    c = a === "y",
    d = o.x + o.width / 2 - r.width / 2,
    p = o.y + o.height / 2 - r.height / 2,
    u = o[i] / 2 - r[i] / 2;
  let x;
  switch (l) {
    case "top":
      x = { x: d, y: o.y - r.height };
      break;
    case "bottom":
      x = { x: d, y: o.y + o.height };
      break;
    case "right":
      x = { x: o.x + o.width, y: p };
      break;
    case "left":
      x = { x: o.x - r.width, y: p };
      break;
    default:
      x = { x: o.x, y: o.y };
  }
  switch (Zo(t)) {
    case "start":
      x[s] -= u * (n && c ? -1 : 1);
      break;
    case "end":
      x[s] += u * (n && c ? -1 : 1);
      break;
  }
  return x;
}
const ky = async (e, t, n) => {
  const {
      placement: o = "bottom",
      strategy: r = "absolute",
      middleware: a = [],
      platform: s,
    } = n,
    i = a.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: d, y: p } = Ad(c, o, l),
    u = o,
    x = {},
    w = 0;
  for (let g = 0; g < i.length; g++) {
    const { name: y, fn: m } = i[g],
      {
        x: f,
        y: h,
        data: S,
        reset: C,
      } = await m({
        x: d,
        y: p,
        initialPlacement: o,
        placement: u,
        strategy: r,
        middlewareData: x,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = f ?? d),
      (p = h ?? p),
      (x = { ...x, [y]: { ...x[y], ...S } }),
      C &&
        w <= 50 &&
        (w++,
        typeof C == "object" &&
          (C.placement && (u = C.placement),
          C.rects &&
            (c =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : C.rects),
          ({ x: d, y: p } = Ad(c, u, l))),
        (g = -1));
  }
  return { x: d, y: p, placement: u, strategy: r, middlewareData: x };
};
async function Hr(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: a, rects: s, elements: i, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: u = !1,
      padding: x = 0,
    } = Gt(t, e),
    w = uh(x),
    y = i[u ? (p === "floating" ? "reference" : "floating") : p],
    m = vs(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(i.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: l,
      })
    ),
    f =
      p === "floating"
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    h = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(i.floating)),
    S = (await (a.isElement == null ? void 0 : a.isElement(h)))
      ? (await (a.getScale == null ? void 0 : a.getScale(h))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = vs(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: f,
            offsetParent: h,
            strategy: l,
          })
        : f
    );
  return {
    top: (m.top - C.top + w.top) / S.y,
    bottom: (C.bottom - m.bottom + w.bottom) / S.y,
    left: (m.left - C.left + w.left) / S.x,
    right: (C.right - m.right + w.right) / S.x,
  };
}
const Ay = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: a,
          platform: s,
          elements: i,
          middlewareData: l,
        } = t,
        { element: c, padding: d = 0 } = Gt(e, t) || {};
      if (c == null) return {};
      const p = uh(d),
        u = { x: n, y: o },
        x = Qc(r),
        w = Vc(x),
        g = await s.getDimensions(c),
        y = x === "y",
        m = y ? "top" : "left",
        f = y ? "bottom" : "right",
        h = y ? "clientHeight" : "clientWidth",
        S = a.reference[w] + a.reference[x] - u[x] - a.floating[w],
        C = u[x] - a.reference[x],
        N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let k = N ? N[h] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(N)))) &&
        (k = i.floating[h] || a.floating[w]);
      const T = S / 2 - C / 2,
        B = k / 2 - g[w] / 2 - 1,
        R = bn(p[m], B),
        z = bn(p[f], B),
        O = R,
        V = k - g[w] - z,
        I = k / 2 - g[w] / 2 + T,
        Q = Il(O, I, V),
        U =
          !l.arrow &&
          Zo(r) != null &&
          I !== Q &&
          a.reference[w] / 2 - (I < O ? R : z) - g[w] / 2 < 0,
        K = U ? (I < O ? I - O : I - V) : 0;
      return {
        [x]: u[x] + K,
        data: {
          [x]: Q,
          centerOffset: I - Q - K,
          ...(U && { alignmentOffset: K }),
        },
        reset: U,
      };
    },
  }),
  Ty = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: a,
              rects: s,
              initialPlacement: i,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: u,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: g = !0,
              ...y
            } = Gt(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const m = Yt(r),
            f = Dn(i),
            h = Yt(i) === i,
            S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = u || (h || !g ? [hs(i)] : Sy(i)),
            N = w !== "none";
          !u && N && C.push(...Ey(i, g, w, S));
          const k = [i, ...C],
            T = await Hr(t, y),
            B = [];
          let R = ((o = a.flip) == null ? void 0 : o.overflows) || [];
          if ((d && B.push(T[m]), p)) {
            const I = jy(r, s, S);
            B.push(T[I[0]], T[I[1]]);
          }
          if (
            ((R = [...R, { placement: r, overflows: B }]),
            !B.every((I) => I <= 0))
          ) {
            var z, O;
            const I = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = k[I];
            if (Q)
              return {
                data: { index: I, overflows: R },
                reset: { placement: Q },
              };
            let U =
              (O = R.filter((K) => K.overflows[0] <= 0).sort(
                (K, E) => K.overflows[1] - E.overflows[1]
              )[0]) == null
                ? void 0
                : O.placement;
            if (!U)
              switch (x) {
                case "bestFit": {
                  var V;
                  const K =
                    (V = R.filter((E) => {
                      if (N) {
                        const D = Dn(E.placement);
                        return D === f || D === "y";
                      }
                      return !0;
                    })
                      .map((E) => [
                        E.placement,
                        E.overflows
                          .filter((D) => D > 0)
                          .reduce((D, L) => D + L, 0),
                      ])
                      .sort((E, D) => E[1] - D[1])[0]) == null
                      ? void 0
                      : V[0];
                  K && (U = K);
                  break;
                }
                case "initialPlacement":
                  U = i;
                  break;
              }
            if (r !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Td(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function bd(e) {
  return xy.some((t) => e[t] >= 0);
}
const by = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: o = "referenceHidden", ...r } = Gt(e, t);
        switch (o) {
          case "referenceHidden": {
            const a = await Hr(t, { ...r, elementContext: "reference" }),
              s = Td(a, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: bd(s) },
            };
          }
          case "escaped": {
            const a = await Hr(t, { ...r, altBoundary: !0 }),
              s = Td(a, n.floating);
            return { data: { escapedOffsets: s, escaped: bd(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Py(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = Yt(n),
    i = Zo(n),
    l = Dn(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    d = a && l ? -1 : 1,
    p = Gt(t, e);
  let {
    mainAxis: u,
    crossAxis: x,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    i && typeof w == "number" && (x = i === "end" ? w * -1 : w),
    l ? { x: x * d, y: u * c } : { x: u * c, y: x * d }
  );
}
const Dy = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: a, placement: s, middlewareData: i } = t,
            l = await Py(t, e);
          return s === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + l.x, y: a + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  Ry = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: a = !0,
              crossAxis: s = !1,
              limiter: i = {
                fn: (y) => {
                  let { x: m, y: f } = y;
                  return { x: m, y: f };
                },
              },
              ...l
            } = Gt(e, t),
            c = { x: n, y: o },
            d = await Hr(t, l),
            p = Dn(Yt(r)),
            u = Wc(p);
          let x = c[u],
            w = c[p];
          if (a) {
            const y = u === "y" ? "top" : "left",
              m = u === "y" ? "bottom" : "right",
              f = x + d[y],
              h = x - d[m];
            x = Il(f, x, h);
          }
          if (s) {
            const y = p === "y" ? "top" : "left",
              m = p === "y" ? "bottom" : "right",
              f = w + d[y],
              h = w - d[m];
            w = Il(f, w, h);
          }
          const g = i.fn({ ...t, [u]: x, [p]: w });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - o, enabled: { [u]: a, [p]: s } },
          };
        },
      }
    );
  },
  Iy = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: a, middlewareData: s } = t,
            { offset: i = 0, mainAxis: l = !0, crossAxis: c = !0 } = Gt(e, t),
            d = { x: n, y: o },
            p = Dn(r),
            u = Wc(p);
          let x = d[u],
            w = d[p];
          const g = Gt(i, t),
            y =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const h = u === "y" ? "height" : "width",
              S = a.reference[u] - a.floating[h] + y.mainAxis,
              C = a.reference[u] + a.reference[h] - y.mainAxis;
            x < S ? (x = S) : x > C && (x = C);
          }
          if (c) {
            var m, f;
            const h = u === "y" ? "width" : "height",
              S = ["top", "left"].includes(Yt(r)),
              C =
                a.reference[p] -
                a.floating[h] +
                ((S && ((m = s.offset) == null ? void 0 : m[p])) || 0) +
                (S ? 0 : y.crossAxis),
              N =
                a.reference[p] +
                a.reference[h] +
                (S ? 0 : ((f = s.offset) == null ? void 0 : f[p]) || 0) -
                (S ? y.crossAxis : 0);
            w < C ? (w = C) : w > N && (w = N);
          }
          return { [u]: x, [p]: w };
        },
      }
    );
  },
  Fy = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: a, platform: s, elements: i } = t,
            { apply: l = () => {}, ...c } = Gt(e, t),
            d = await Hr(t, c),
            p = Yt(r),
            u = Zo(r),
            x = Dn(r) === "y",
            { width: w, height: g } = a.floating;
          let y, m;
          p === "top" || p === "bottom"
            ? ((y = p),
              (m =
                u ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = p), (y = u === "end" ? "top" : "bottom"));
          const f = g - d.top - d.bottom,
            h = w - d.left - d.right,
            S = bn(g - d[y], f),
            C = bn(w - d[m], h),
            N = !t.middlewareData.shift;
          let k = S,
            T = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = h),
            (o = t.middlewareData.shift) != null && o.enabled.y && (k = f),
            N && !u)
          ) {
            const R = Ye(d.left, 0),
              z = Ye(d.right, 0),
              O = Ye(d.top, 0),
              V = Ye(d.bottom, 0);
            x
              ? (T = w - 2 * (R !== 0 || z !== 0 ? R + z : Ye(d.left, d.right)))
              : (k =
                  g - 2 * (O !== 0 || V !== 0 ? O + V : Ye(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: k });
          const B = await s.getDimensions(i.floating);
          return w !== B.width || g !== B.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function zs() {
  return typeof window < "u";
}
function Jo(e) {
  return dh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ft(e) {
  var t;
  return (t = (dh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function dh(e) {
  return zs() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function jt(e) {
  return zs() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function It(e) {
  return zs() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function Pd(e) {
  return !zs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function ta(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = St(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !["inline", "contents"].includes(r)
  );
}
function _y(e) {
  return ["table", "td", "th"].includes(Jo(e));
}
function Us(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Kc(e) {
  const t = Gc(),
    n = jt(e) ? St(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o)
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o)
    )
  );
}
function By(e) {
  let t = Rn(e);
  for (; It(t) && !Qo(t); ) {
    if (Kc(t)) return t;
    if (Us(t)) return null;
    t = Rn(t);
  }
  return null;
}
function Gc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qo(e) {
  return ["html", "body", "#document"].includes(Jo(e));
}
function St(e) {
  return Ze(e).getComputedStyle(e);
}
function $s(e) {
  return jt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Rn(e) {
  if (Jo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Pd(e) && e.host) || Ft(e);
  return Pd(t) ? t.host : t;
}
function ph(e) {
  const t = Rn(e);
  return Qo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : It(t) && ta(t)
      ? t
      : ph(t);
}
function Wr(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ph(e),
    a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = Ze(r);
  if (a) {
    const i = _l(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ta(r) ? r : [],
      i && n ? Wr(i) : []
    );
  }
  return t.concat(r, Wr(r, [], n));
}
function _l(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fh(e) {
  const t = St(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = It(e),
    a = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    i = ms(n) !== a || ms(o) !== s;
  return i && ((n = a), (o = s)), { width: n, height: o, $: i };
}
function Yc(e) {
  return jt(e) ? e : e.contextElement;
}
function Ao(e) {
  const t = Yc(e);
  if (!It(t)) return Pn(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: a } = fh(t);
  let s = (a ? ms(n.width) : n.width) / o,
    i = (a ? ms(n.height) : n.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: s, y: i }
  );
}
const Oy = Pn(0);
function mh(e) {
  const t = Ze(e);
  return !Gc() || !t.visualViewport
    ? Oy
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ly(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ze(e)) ? !1 : t;
}
function Jn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    a = Yc(e);
  let s = Pn(1);
  t && (o ? jt(o) && (s = Ao(o)) : (s = Ao(e)));
  const i = Ly(a, n, o) ? mh(a) : Pn(0);
  let l = (r.left + i.x) / s.x,
    c = (r.top + i.y) / s.y,
    d = r.width / s.x,
    p = r.height / s.y;
  if (a) {
    const u = Ze(a),
      x = o && jt(o) ? Ze(o) : o;
    let w = u,
      g = _l(w);
    for (; g && o && x !== w; ) {
      const y = Ao(g),
        m = g.getBoundingClientRect(),
        f = St(g),
        h = m.left + (g.clientLeft + parseFloat(f.paddingLeft)) * y.x,
        S = m.top + (g.clientTop + parseFloat(f.paddingTop)) * y.y;
      (l *= y.x),
        (c *= y.y),
        (d *= y.x),
        (p *= y.y),
        (l += h),
        (c += S),
        (w = Ze(g)),
        (g = _l(w));
    }
  }
  return vs({ width: d, height: p, x: l, y: c });
}
function My(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const a = r === "fixed",
    s = Ft(o),
    i = t ? Us(t.floating) : !1;
  if (o === s || (i && a)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = Pn(1);
  const d = Pn(0),
    p = It(o);
  if (
    (p || (!p && !a)) &&
    ((Jo(o) !== "body" || ta(s)) && (l = $s(o)), It(o))
  ) {
    const u = Jn(o);
    (c = Ao(o)), (d.x = u.x + o.clientLeft), (d.y = u.y + o.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y,
  };
}
function zy(e) {
  return Array.from(e.getClientRects());
}
function Bl(e, t) {
  const n = $s(e).scrollLeft;
  return t ? t.left + n : Jn(Ft(e)).left + n;
}
function Uy(e) {
  const t = Ft(e),
    n = $s(e),
    o = e.ownerDocument.body,
    r = Ye(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    a = Ye(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Bl(e);
  const i = -n.scrollTop;
  return (
    St(o).direction === "rtl" && (s += Ye(t.clientWidth, o.clientWidth) - r),
    { width: r, height: a, x: s, y: i }
  );
}
function $y(e, t) {
  const n = Ze(e),
    o = Ft(e),
    r = n.visualViewport;
  let a = o.clientWidth,
    s = o.clientHeight,
    i = 0,
    l = 0;
  if (r) {
    (a = r.width), (s = r.height);
    const c = Gc();
    (!c || (c && t === "fixed")) && ((i = r.offsetLeft), (l = r.offsetTop));
  }
  return { width: a, height: s, x: i, y: l };
}
function Hy(e, t) {
  const n = Jn(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    a = It(e) ? Ao(e) : Pn(1),
    s = e.clientWidth * a.x,
    i = e.clientHeight * a.y,
    l = r * a.x,
    c = o * a.y;
  return { width: s, height: i, x: l, y: c };
}
function Dd(e, t, n) {
  let o;
  if (t === "viewport") o = $y(e, n);
  else if (t === "document") o = Uy(Ft(e));
  else if (jt(t)) o = Hy(t, n);
  else {
    const r = mh(e);
    o = { ...t, x: t.x - r.x, y: t.y - r.y };
  }
  return vs(o);
}
function hh(e, t) {
  const n = Rn(e);
  return n === t || !jt(n) || Qo(n)
    ? !1
    : St(n).position === "fixed" || hh(n, t);
}
function Wy(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = Wr(e, [], !1).filter((i) => jt(i) && Jo(i) !== "body"),
    r = null;
  const a = St(e).position === "fixed";
  let s = a ? Rn(e) : e;
  for (; jt(s) && !Qo(s); ) {
    const i = St(s),
      l = Kc(s);
    !l && i.position === "fixed" && (r = null),
      (
        a
          ? !l && !r
          : (!l &&
              i.position === "static" &&
              !!r &&
              ["absolute", "fixed"].includes(r.position)) ||
            (ta(s) && !l && hh(e, s))
      )
        ? (o = o.filter((d) => d !== s))
        : (r = i),
      (s = Rn(s));
  }
  return t.set(e, o), o;
}
function Vy(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Us(t)
          ? []
          : Wy(t, this._c)
        : [].concat(n)),
      o,
    ],
    i = s[0],
    l = s.reduce(
      (c, d) => {
        const p = Dd(t, d, r);
        return (
          (c.top = Ye(p.top, c.top)),
          (c.right = bn(p.right, c.right)),
          (c.bottom = bn(p.bottom, c.bottom)),
          (c.left = Ye(p.left, c.left)),
          c
        );
      },
      Dd(t, i, r)
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Qy(e) {
  const { width: t, height: n } = fh(e);
  return { width: t, height: n };
}
function Ky(e, t, n) {
  const o = It(t),
    r = Ft(t),
    a = n === "fixed",
    s = Jn(e, !0, a, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = Pn(0);
  if (o || (!o && !a))
    if (((Jo(t) !== "body" || ta(r)) && (i = $s(t)), o)) {
      const x = Jn(t, !0, a, t);
      (l.x = x.x + t.clientLeft), (l.y = x.y + t.clientTop);
    } else r && (l.x = Bl(r));
  let c = 0,
    d = 0;
  if (r && !o && !a) {
    const x = r.getBoundingClientRect();
    (d = x.top + i.scrollTop), (c = x.left + i.scrollLeft - Bl(r, x));
  }
  const p = s.left + i.scrollLeft - l.x - c,
    u = s.top + i.scrollTop - l.y - d;
  return { x: p, y: u, width: s.width, height: s.height };
}
function Di(e) {
  return St(e).position === "static";
}
function Rd(e, t) {
  if (!It(e) || St(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Ft(e) === n && (n = n.ownerDocument.body), n;
}
function vh(e, t) {
  const n = Ze(e);
  if (Us(e)) return n;
  if (!It(e)) {
    let r = Rn(e);
    for (; r && !Qo(r); ) {
      if (jt(r) && !Di(r)) return r;
      r = Rn(r);
    }
    return n;
  }
  let o = Rd(e, t);
  for (; o && _y(o) && Di(o); ) o = Rd(o, t);
  return o && Qo(o) && Di(o) && !Kc(o) ? n : o || By(e) || n;
}
const Gy = async function (e) {
  const t = this.getOffsetParent || vh,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: Ky(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Yy(e) {
  return St(e).direction === "rtl";
}
const Xy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: My,
  getDocumentElement: Ft,
  getClippingRect: Vy,
  getOffsetParent: vh,
  getElementRects: Gy,
  getClientRects: zy,
  getDimensions: Qy,
  getScale: Ao,
  isElement: jt,
  isRTL: Yy,
};
function qy(e, t) {
  let n = null,
    o;
  const r = Ft(e);
  function a() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), (n = null);
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const { left: c, top: d, width: p, height: u } = e.getBoundingClientRect();
    if ((i || t(), !p || !u)) return;
    const x = Aa(d),
      w = Aa(r.clientWidth - (c + p)),
      g = Aa(r.clientHeight - (d + u)),
      y = Aa(c),
      f = {
        rootMargin: -x + "px " + -w + "px " + -g + "px " + -y + "px",
        threshold: Ye(0, bn(1, l)) || 1,
      };
    let h = !0;
    function S(C) {
      const N = C[0].intersectionRatio;
      if (N !== l) {
        if (!h) return s();
        N
          ? s(!1, N)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      h = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...f, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, f);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Zy(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: a = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = o,
    c = Yc(e),
    d = r || a ? [...(c ? Wr(c) : []), ...Wr(t)] : [];
  d.forEach((m) => {
    r && m.addEventListener("scroll", n, { passive: !0 }),
      a && m.addEventListener("resize", n);
  });
  const p = c && i ? qy(c, n) : null;
  let u = -1,
    x = null;
  s &&
    ((x = new ResizeObserver((m) => {
      let [f] = m;
      f &&
        f.target === c &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(u),
        (u = requestAnimationFrame(() => {
          var h;
          (h = x) == null || h.observe(t);
        }))),
        n();
    })),
    c && !l && x.observe(c),
    x.observe(t));
  let w,
    g = l ? Jn(e) : null;
  l && y();
  function y() {
    const m = Jn(e);
    g &&
      (m.x !== g.x ||
        m.y !== g.y ||
        m.width !== g.width ||
        m.height !== g.height) &&
      n(),
      (g = m),
      (w = requestAnimationFrame(y));
  }
  return (
    n(),
    () => {
      var m;
      d.forEach((f) => {
        r && f.removeEventListener("scroll", n),
          a && f.removeEventListener("resize", n);
      }),
        p == null || p(),
        (m = x) == null || m.disconnect(),
        (x = null),
        l && cancelAnimationFrame(w);
    }
  );
}
const Jy = Dy,
  e1 = Ry,
  t1 = Ty,
  n1 = Fy,
  o1 = by,
  Id = Ay,
  r1 = Iy,
  a1 = (e, t, n) => {
    const o = new Map(),
      r = { platform: Xy, ...n },
      a = { ...r.platform, _c: o };
    return ky(e, t, { ...r, platform: a });
  };
var Ha = typeof document < "u" ? j.useLayoutEffect : j.useEffect;
function gs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!gs(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !gs(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function gh(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fd(e, t) {
  const n = gh(e);
  return Math.round(t * n) / n;
}
function Ri(e) {
  const t = j.useRef(e);
  return (
    Ha(() => {
      t.current = e;
    }),
    t
  );
}
function s1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: r,
      elements: { reference: a, floating: s } = {},
      transform: i = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [d, p] = j.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [u, x] = j.useState(o);
  gs(u, o) || x(o);
  const [w, g] = j.useState(null),
    [y, m] = j.useState(null),
    f = j.useCallback((E) => {
      E !== N.current && ((N.current = E), g(E));
    }, []),
    h = j.useCallback((E) => {
      E !== k.current && ((k.current = E), m(E));
    }, []),
    S = a || w,
    C = s || y,
    N = j.useRef(null),
    k = j.useRef(null),
    T = j.useRef(d),
    B = l != null,
    R = Ri(l),
    z = Ri(r),
    O = Ri(c),
    V = j.useCallback(() => {
      if (!N.current || !k.current) return;
      const E = { placement: t, strategy: n, middleware: u };
      z.current && (E.platform = z.current),
        a1(N.current, k.current, E).then((D) => {
          const L = { ...D, isPositioned: O.current !== !1 };
          I.current &&
            !gs(T.current, L) &&
            ((T.current = L),
            ea.flushSync(() => {
              p(L);
            }));
        });
    }, [u, t, n, z, O]);
  Ha(() => {
    c === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), p((E) => ({ ...E, isPositioned: !1 })));
  }, [c]);
  const I = j.useRef(!1);
  Ha(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    Ha(() => {
      if ((S && (N.current = S), C && (k.current = C), S && C)) {
        if (R.current) return R.current(S, C, V);
        V();
      }
    }, [S, C, V, R, B]);
  const Q = j.useMemo(
      () => ({ reference: N, floating: k, setReference: f, setFloating: h }),
      [f, h]
    ),
    U = j.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    K = j.useMemo(() => {
      const E = { position: n, left: 0, top: 0 };
      if (!U.floating) return E;
      const D = Fd(U.floating, d.x),
        L = Fd(U.floating, d.y);
      return i
        ? {
            ...E,
            transform: "translate(" + D + "px, " + L + "px)",
            ...(gh(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: D, top: L };
    }, [n, i, U.floating, d.x, d.y]);
  return j.useMemo(
    () => ({ ...d, update: V, refs: Q, elements: U, floatingStyles: K }),
    [d, V, Q, U, K]
  );
}
const i1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? Id({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? Id({ element: o, padding: r }).fn(n)
            : {};
      },
    };
  },
  l1 = (e, t) => ({ ...Jy(e), options: [e, t] }),
  c1 = (e, t) => ({ ...e1(e), options: [e, t] }),
  u1 = (e, t) => ({ ...r1(e), options: [e, t] }),
  d1 = (e, t) => ({ ...t1(e), options: [e, t] }),
  p1 = (e, t) => ({ ...n1(e), options: [e, t] }),
  f1 = (e, t) => ({ ...o1(e), options: [e, t] }),
  m1 = (e, t) => ({ ...i1(e), options: [e, t] });
var h1 = "Arrow",
  xh = j.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...a } = e;
    return v.jsx(Ee.svg, {
      ...a,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
xh.displayName = h1;
var v1 = xh;
function g1(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = j.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(p) {
      const { scope: u, children: x, ...w } = p,
        g = (u == null ? void 0 : u[e][l]) || i,
        y = j.useMemo(() => w, Object.values(w));
      return v.jsx(g.Provider, { value: y, children: x });
    }
    function d(p, u) {
      const x = (u == null ? void 0 : u[e][l]) || i,
        w = j.useContext(x);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return (c.displayName = a + "Provider"), [c, d];
  }
  const r = () => {
    const a = n.map((s) => j.createContext(s));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return j.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (r.scopeName = e), [o, x1(r, ...t)];
}
function x1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...i, ...p };
      }, {});
      return j.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function y1(e) {
  const [t, n] = j.useState(void 0);
  return (
    Kt(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return;
          const a = r[0];
          let s, i;
          if ("borderBoxSize" in a) {
            const l = a.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (s = c.inlineSize), (i = c.blockSize);
          } else (s = e.offsetWidth), (i = e.offsetHeight);
          n({ width: s, height: i });
        });
        return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var yh = "Popper",
  [wh, jh] = g1(yh),
  [Ej, Sh] = wh(yh),
  Ch = "PopperAnchor",
  Eh = j.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      a = Sh(Ch, n),
      s = j.useRef(null),
      i = yt(t, s);
    return (
      j.useEffect(() => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current);
      }),
      o ? null : v.jsx(Ee.div, { ...r, ref: i })
    );
  });
Eh.displayName = Ch;
var Xc = "PopperContent",
  [w1, j1] = wh(Xc),
  Nh = j.forwardRef((e, t) => {
    var ct, qt, Zt, Jt, na, no;
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: a = "center",
        alignOffset: s = 0,
        arrowPadding: i = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: u = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: w,
        ...g
      } = e,
      y = Sh(Xc, n),
      [m, f] = j.useState(null),
      h = yt(t, (Bn) => f(Bn)),
      [S, C] = j.useState(null),
      N = y1(S),
      k = (N == null ? void 0 : N.width) ?? 0,
      T = (N == null ? void 0 : N.height) ?? 0,
      B = o + (a !== "center" ? "-" + a : ""),
      R =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      z = Array.isArray(c) ? c : [c],
      O = z.length > 0,
      V = { padding: R, boundary: z.filter(C1), altBoundary: O },
      {
        refs: I,
        floatingStyles: Q,
        placement: U,
        isPositioned: K,
        middlewareData: E,
      } = s1({
        strategy: "fixed",
        placement: B,
        whileElementsMounted: (...Bn) =>
          Zy(...Bn, { animationFrame: x === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          l1({ mainAxis: r + T, alignmentAxis: s }),
          l &&
            c1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? u1() : void 0,
              ...V,
            }),
          l && d1({ ...V }),
          p1({
            ...V,
            apply: ({
              elements: Bn,
              rects: er,
              availableWidth: oa,
              availableHeight: en,
            }) => {
              const { width: Xs, height: qs } = er.reference,
                we = Bn.floating.style;
              we.setProperty("--radix-popper-available-width", `${oa}px`),
                we.setProperty("--radix-popper-available-height", `${en}px`),
                we.setProperty("--radix-popper-anchor-width", `${Xs}px`),
                we.setProperty("--radix-popper-anchor-height", `${qs}px`);
            },
          }),
          S && m1({ element: S, padding: i }),
          E1({ arrowWidth: k, arrowHeight: T }),
          u && f1({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [D, L] = Th(U),
      _ = wt(w);
    Kt(() => {
      K && (_ == null || _());
    }, [K, _]);
    const M = (ct = E.arrow) == null ? void 0 : ct.x,
      Y = (qt = E.arrow) == null ? void 0 : qt.y,
      ie = ((Zt = E.arrow) == null ? void 0 : Zt.centerOffset) !== 0,
      [Ve, Z] = j.useState();
    return (
      Kt(() => {
        m && Z(window.getComputedStyle(m).zIndex);
      }, [m]),
      v.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: K ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ve,
          "--radix-popper-transform-origin": [
            (Jt = E.transformOrigin) == null ? void 0 : Jt.x,
            (na = E.transformOrigin) == null ? void 0 : na.y,
          ].join(" "),
          ...(((no = E.hide) == null ? void 0 : no.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: v.jsx(w1, {
          scope: n,
          placedSide: D,
          onArrowChange: C,
          arrowX: M,
          arrowY: Y,
          shouldHideArrow: ie,
          children: v.jsx(Ee.div, {
            "data-side": D,
            "data-align": L,
            ...g,
            ref: h,
            style: { ...g.style, animation: K ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Nh.displayName = Xc;
var kh = "PopperArrow",
  S1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ah = j.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      a = j1(kh, o),
      s = S1[a.placedSide];
    return v.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(v1, {
        ...r,
        ref: n,
        style: { ...r.style, display: "block" },
      }),
    });
  });
Ah.displayName = kh;
function C1(e) {
  return e !== null;
}
var E1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, m, f;
    const { placement: n, rects: o, middlewareData: r } = t,
      s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0,
      i = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [c, d] = Th(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      u = (((m = r.arrow) == null ? void 0 : m.x) ?? 0) + i / 2,
      x = (((f = r.arrow) == null ? void 0 : f.y) ?? 0) + l / 2;
    let w = "",
      g = "";
    return (
      c === "bottom"
        ? ((w = s ? p : `${u}px`), (g = `${-l}px`))
        : c === "top"
          ? ((w = s ? p : `${u}px`), (g = `${o.floating.height + l}px`))
          : c === "right"
            ? ((w = `${-l}px`), (g = s ? p : `${x}px`))
            : c === "left" &&
              ((w = `${o.floating.width + l}px`), (g = s ? p : `${x}px`)),
      { data: { x: w, y: g } }
    );
  },
});
function Th(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var N1 = Eh,
  k1 = Nh,
  A1 = Ah,
  [Hs, Nj] = Oc("Tooltip", [jh]),
  qc = jh(),
  bh = "TooltipProvider",
  T1 = 700,
  _d = "tooltip.open",
  [b1, Ph] = Hs(bh),
  Dh = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = T1,
        skipDelayDuration: o = 300,
        disableHoverableContent: r = !1,
        children: a,
      } = e,
      [s, i] = j.useState(!0),
      l = j.useRef(!1),
      c = j.useRef(0);
    return (
      j.useEffect(() => {
        const d = c.current;
        return () => window.clearTimeout(d);
      }, []),
      v.jsx(b1, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: j.useCallback(() => {
          window.clearTimeout(c.current), i(!1);
        }, []),
        onClose: j.useCallback(() => {
          window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => i(!0), o));
        }, [o]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: j.useCallback((d) => {
          l.current = d;
        }, []),
        disableHoverableContent: r,
        children: a,
      })
    );
  };
Dh.displayName = bh;
var Rh = "Tooltip",
  [kj, Ws] = Hs(Rh),
  Ol = "TooltipTrigger",
  P1 = j.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = Ws(Ol, n),
      a = Ph(Ol, n),
      s = qc(n),
      i = j.useRef(null),
      l = yt(t, i, r.onTriggerChange),
      c = j.useRef(!1),
      d = j.useRef(!1),
      p = j.useCallback(() => (c.current = !1), []);
    return (
      j.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      v.jsx(N1, {
        asChild: !0,
        ...s,
        children: v.jsx(Ee.button, {
          "aria-describedby": r.open ? r.contentId : void 0,
          "data-state": r.stateAttribute,
          ...o,
          ref: l,
          onPointerMove: ve(e.onPointerMove, (u) => {
            u.pointerType !== "touch" &&
              !d.current &&
              !a.isPointerInTransitRef.current &&
              (r.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: ve(e.onPointerLeave, () => {
            r.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: ve(e.onPointerDown, () => {
            (c.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: ve(e.onFocus, () => {
            c.current || r.onOpen();
          }),
          onBlur: ve(e.onBlur, r.onClose),
          onClick: ve(e.onClick, r.onClose),
        }),
      })
    );
  });
P1.displayName = Ol;
var D1 = "TooltipPortal",
  [Aj, R1] = Hs(D1, { forceMount: void 0 }),
  Ko = "TooltipContent",
  Ih = j.forwardRef((e, t) => {
    const n = R1(Ko, e.__scopeTooltip),
      { forceMount: o = n.forceMount, side: r = "top", ...a } = e,
      s = Ws(Ko, e.__scopeTooltip);
    return v.jsx(Mc, {
      present: o || s.open,
      children: s.disableHoverableContent
        ? v.jsx(Fh, { side: r, ...a, ref: t })
        : v.jsx(I1, { side: r, ...a, ref: t }),
    });
  }),
  I1 = j.forwardRef((e, t) => {
    const n = Ws(Ko, e.__scopeTooltip),
      o = Ph(Ko, e.__scopeTooltip),
      r = j.useRef(null),
      a = yt(t, r),
      [s, i] = j.useState(null),
      { trigger: l, onClose: c } = n,
      d = r.current,
      { onPointerInTransitChange: p } = o,
      u = j.useCallback(() => {
        i(null), p(!1);
      }, [p]),
      x = j.useCallback(
        (w, g) => {
          const y = w.currentTarget,
            m = { x: w.clientX, y: w.clientY },
            f = O1(m, y.getBoundingClientRect()),
            h = L1(m, f),
            S = M1(g.getBoundingClientRect()),
            C = U1([...h, ...S]);
          i(C), p(!0);
        },
        [p]
      );
    return (
      j.useEffect(() => () => u(), [u]),
      j.useEffect(() => {
        if (l && d) {
          const w = (y) => x(y, d),
            g = (y) => x(y, l);
          return (
            l.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", g),
            () => {
              l.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [l, d, x, u]),
      j.useEffect(() => {
        if (s) {
          const w = (g) => {
            const y = g.target,
              m = { x: g.clientX, y: g.clientY },
              f =
                (l == null ? void 0 : l.contains(y)) ||
                (d == null ? void 0 : d.contains(y)),
              h = !z1(m, s);
            f ? u() : h && (u(), c());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, d, s, c, u]),
      v.jsx(Fh, { ...e, ref: a })
    );
  }),
  [F1, _1] = Hs(Rh, { isInside: !1 }),
  Fh = j.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: o,
        "aria-label": r,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        ...i
      } = e,
      l = Ws(Ko, n),
      c = qc(n),
      { onClose: d } = l;
    return (
      j.useEffect(
        () => (
          document.addEventListener(_d, d),
          () => document.removeEventListener(_d, d)
        ),
        [d]
      ),
      j.useEffect(() => {
        if (l.trigger) {
          const p = (u) => {
            const x = u.target;
            x != null && x.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      v.jsx(Lc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: v.jsxs(k1, {
          "data-state": l.stateAttribute,
          ...c,
          ...i,
          ref: t,
          style: {
            ...i.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            v.jsx(Em, { children: o }),
            v.jsx(F1, {
              scope: n,
              isInside: !0,
              children: v.jsx(Cg, {
                id: l.contentId,
                role: "tooltip",
                children: r || o,
              }),
            }),
          ],
        }),
      })
    );
  });
Ih.displayName = Ko;
var _h = "TooltipArrow",
  B1 = j.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...o } = e,
      r = qc(n);
    return _1(_h, n).isInside ? null : v.jsx(A1, { ...r, ...o, ref: t });
  });
B1.displayName = _h;
function O1(e, t) {
  const n = Math.abs(t.top - e.y),
    o = Math.abs(t.bottom - e.y),
    r = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, a)) {
    case a:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function L1(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      o.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      o.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return o;
}
function M1(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o },
  ];
}
function z1(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x,
      l = t[a].y,
      c = t[s].x,
      d = t[s].y;
    l > o != d > o && n < ((c - i) * (o - l)) / (d - l) + i && (r = !r);
  }
  return r;
}
function U1(e) {
  const t = e.slice();
  return (
    t.sort((n, o) =>
      n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0
    ),
    $1(t)
  );
}
function $1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1],
        s = t[t.length - 2];
      if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1],
        s = n[n.length - 2];
      if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var H1 = Dh,
  Bh = Ih;
const W1 = H1,
  V1 = j.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) =>
    v.jsx(Bh, {
      "data-lov-id": "src/components/ui/tooltip.jsx:12:4",
      "data-lov-name": "TooltipPrimitive.Content",
      "data-component-path": "src/components/ui/tooltip.jsx",
      "data-component-line": "12",
      "data-component-file": "tooltip.jsx",
      "data-component-name": "TooltipPrimitive.Content",
      "data-component-content": "%7B%7D",
      ref: o,
      sideOffset: t,
      className: ke(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
V1.displayName = Bh.displayName;
var Vs = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Qs = typeof window > "u" || "Deno" in globalThis;
function pt() {}
function Q1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function K1(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function G1(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Bd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Y1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Od(e, t) {
  const {
    type: n = "all",
    exact: o,
    fetchStatus: r,
    predicate: a,
    queryKey: s,
    stale: i,
  } = e;
  if (s) {
    if (o) {
      if (t.queryHash !== Zc(s, t.options)) return !1;
    } else if (!Qr(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof i == "boolean" && t.isStale() !== i) ||
    (r && r !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Ld(e, t) {
  const { exact: n, status: o, predicate: r, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Vr(t.options.mutationKey) !== Vr(a)) return !1;
    } else if (!Qr(t.options.mutationKey, a)) return !1;
  }
  return !((o && t.state.status !== o) || (r && !r(t)));
}
function Zc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Vr)(e);
}
function Vr(e) {
  return JSON.stringify(e, (t, n) =>
    Ll(n)
      ? Object.keys(n)
          .sort()
          .reduce((o, r) => ((o[r] = n[r]), o), {})
      : n
  );
}
function Qr(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !Qr(e[n], t[n]))
        : !1;
}
function Oh(e, t) {
  if (e === t) return e;
  const n = Md(e) && Md(t);
  if (n || (Ll(e) && Ll(t))) {
    const o = n ? e : Object.keys(e),
      r = o.length,
      a = n ? t : Object.keys(t),
      s = a.length,
      i = n ? [] : {};
    let l = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : a[c];
      ((!n && o.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((i[d] = void 0), l++)
        : ((i[d] = Oh(e[d], t[d])), i[d] === e[d] && e[d] !== void 0 && l++);
    }
    return r === s && l === r ? e : i;
  }
  return t;
}
function Md(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ll(e) {
  if (!zd(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !zd(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function zd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function X1(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function q1(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Oh(e, t)
      : t;
}
function Z1(e, t, n = 0) {
  const o = [...e, t];
  return n && o.length > n ? o.slice(1) : o;
}
function J1(e, t, n = 0) {
  const o = [t, ...e];
  return n && o.length > n ? o.slice(0, -1) : o;
}
var Jc = Symbol();
function Lh(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Jc
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var $n,
  dn,
  Po,
  Zd,
  ew =
    ((Zd = class extends Vs {
      constructor() {
        super();
        q(this, $n);
        q(this, dn);
        q(this, Po);
        W(this, Po, (t) => {
          if (!Qs && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, dn) || this.setEventListener(A(this, Po));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, dn)) == null || t.call(this), W(this, dn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, Po, t),
          (n = A(this, dn)) == null || n.call(this),
          W(
            this,
            dn,
            t((o) => {
              typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        A(this, $n) !== t && (W(this, $n, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof A(this, $n) == "boolean"
          ? A(this, $n)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    ($n = new WeakMap()),
    (dn = new WeakMap()),
    (Po = new WeakMap()),
    Zd),
  Mh = new ew(),
  Do,
  pn,
  Ro,
  Jd,
  tw =
    ((Jd = class extends Vs {
      constructor() {
        super();
        q(this, Do, !0);
        q(this, pn);
        q(this, Ro);
        W(this, Ro, (t) => {
          if (!Qs && window.addEventListener) {
            const n = () => t(!0),
              o = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", o, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", o);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, pn) || this.setEventListener(A(this, Ro));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, pn)) == null || t.call(this), W(this, pn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, Ro, t),
          (n = A(this, pn)) == null || n.call(this),
          W(this, pn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        A(this, Do) !== t &&
          (W(this, Do, t),
          this.listeners.forEach((o) => {
            o(t);
          }));
      }
      isOnline() {
        return A(this, Do);
      }
    }),
    (Do = new WeakMap()),
    (pn = new WeakMap()),
    (Ro = new WeakMap()),
    Jd),
  xs = new tw();
function nw() {
  let e, t;
  const n = new Promise((r, a) => {
    (e = r), (t = a);
  });
  (n.status = "pending"), n.catch(() => {});
  function o(r) {
    Object.assign(n, r), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (r) => {
      o({ status: "fulfilled", value: r }), e(r);
    }),
    (n.reject = (r) => {
      o({ status: "rejected", reason: r }), t(r);
    }),
    n
  );
}
function ow(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function zh(e) {
  return (e ?? "online") === "online" ? xs.isOnline() : !0;
}
var Uh = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ii(e) {
  return e instanceof Uh;
}
function $h(e) {
  let t = !1,
    n = 0,
    o = !1,
    r;
  const a = nw(),
    s = (g) => {
      var y;
      o || (u(new Uh(g)), (y = e.abort) == null || y.call(e));
    },
    i = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      Mh.isFocused() &&
      (e.networkMode === "always" || xs.isOnline()) &&
      e.canRun(),
    d = () => zh(e.networkMode) && e.canRun(),
    p = (g) => {
      var y;
      o ||
        ((o = !0),
        (y = e.onSuccess) == null || y.call(e, g),
        r == null || r(),
        a.resolve(g));
    },
    u = (g) => {
      var y;
      o ||
        ((o = !0),
        (y = e.onError) == null || y.call(e, g),
        r == null || r(),
        a.reject(g));
    },
    x = () =>
      new Promise((g) => {
        var y;
        (r = (m) => {
          (o || c()) && g(m);
        }),
          (y = e.onPause) == null || y.call(e);
      }).then(() => {
        var g;
        (r = void 0), o || (g = e.onContinue) == null || g.call(e);
      }),
    w = () => {
      if (o) return;
      let g;
      const y = n === 0 ? e.initialPromise : void 0;
      try {
        g = y ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(p)
        .catch((m) => {
          var N;
          if (o) return;
          const f = e.retry ?? (Qs ? 0 : 3),
            h = e.retryDelay ?? ow,
            S = typeof h == "function" ? h(n, m) : h,
            C =
              f === !0 ||
              (typeof f == "number" && n < f) ||
              (typeof f == "function" && f(n, m));
          if (t || !C) {
            u(m);
            return;
          }
          n++,
            (N = e.onFail) == null || N.call(e, n, m),
            X1(S)
              .then(() => (c() ? void 0 : x()))
              .then(() => {
                t ? u(m) : w();
              });
        });
    };
  return {
    promise: a,
    cancel: s,
    continue: () => (r == null || r(), a),
    cancelRetry: i,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? w() : x().then(w), a),
  };
}
function rw() {
  let e = [],
    t = 0,
    n = (i) => {
      i();
    },
    o = (i) => {
      i();
    },
    r = (i) => setTimeout(i, 0);
  const a = (i) => {
      t
        ? e.push(i)
        : r(() => {
            n(i);
          });
    },
    s = () => {
      const i = e;
      (e = []),
        i.length &&
          r(() => {
            o(() => {
              i.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (i) => {
      let l;
      t++;
      try {
        l = i();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (i) =>
      (...l) => {
        a(() => {
          i(...l);
        });
      },
    schedule: a,
    setNotifyFunction: (i) => {
      n = i;
    },
    setBatchNotifyFunction: (i) => {
      o = i;
    },
    setScheduler: (i) => {
      r = i;
    },
  };
}
var _e = rw(),
  Hn,
  ep,
  Hh =
    ((ep = class {
      constructor() {
        q(this, Hn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          K1(this.gcTime) &&
            W(
              this,
              Hn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Qs ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        A(this, Hn) && (clearTimeout(A(this, Hn)), W(this, Hn, void 0));
      }
    }),
    (Hn = new WeakMap()),
    ep),
  Io,
  Fo,
  nt,
  Pe,
  Kr,
  Wn,
  ft,
  Bt,
  tp,
  aw =
    ((tp = class extends Hh {
      constructor(t) {
        super();
        q(this, ft);
        q(this, Io);
        q(this, Fo);
        q(this, nt);
        q(this, Pe);
        q(this, Kr);
        q(this, Wn);
        W(this, Wn, !1),
          W(this, Kr, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          W(this, nt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          W(this, Io, iw(this.options)),
          (this.state = t.state ?? A(this, Io)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = A(this, Pe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...A(this, Kr), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          A(this, nt).remove(this);
      }
      setData(t, n) {
        const o = q1(this.state.data, t, this.options);
        return (
          Ae(this, ft, Bt).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          o
        );
      }
      setState(t, n) {
        Ae(this, ft, Bt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var o, r;
        const n = (o = A(this, Pe)) == null ? void 0 : o.promise;
        return (
          (r = A(this, Pe)) == null || r.cancel(t),
          n ? n.then(pt).catch(pt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(A(this, Io));
      }
      isActive() {
        return this.observers.some((t) => Y1(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Jc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !G1(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((o) => o.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Pe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((o) => o.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Pe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          A(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (A(this, Pe) &&
              (A(this, Wn)
                ? A(this, Pe).cancel({ revert: !0 })
                : A(this, Pe).cancelRetry()),
            this.scheduleGc()),
          A(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ae(this, ft, Bt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (A(this, Pe))
            return A(this, Pe).continueRetry(), A(this, Pe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((u) => u.options.queryFn);
          p && this.setOptions(p.options);
        }
        const o = new AbortController(),
          r = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (W(this, Wn, !0), o.signal),
            });
          },
          a = () => {
            const p = Lh(this.options, n),
              u = { queryKey: this.queryKey, meta: this.meta };
            return (
              r(u),
              W(this, Wn, !1),
              this.options.persister ? this.options.persister(p, u, this) : p(u)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a,
          };
        r(s),
          (l = this.options.behavior) == null || l.onFetch(s, this),
          W(this, Fo, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = s.fetchOptions) == null ? void 0 : c.meta)) &&
            Ae(this, ft, Bt).call(this, {
              type: "fetch",
              meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
            });
        const i = (p) => {
          var u, x, w, g;
          (Ii(p) && p.silent) ||
            Ae(this, ft, Bt).call(this, { type: "error", error: p }),
            Ii(p) ||
              ((x = (u = A(this, nt).config).onError) == null ||
                x.call(u, p, this),
              (g = (w = A(this, nt).config).onSettled) == null ||
                g.call(w, this.state.data, p, this)),
            this.scheduleGc();
        };
        return (
          W(
            this,
            Pe,
            $h({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: o.abort.bind(o),
              onSuccess: (p) => {
                var u, x, w, g;
                if (p === void 0) {
                  i(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (y) {
                  i(y);
                  return;
                }
                (x = (u = A(this, nt).config).onSuccess) == null ||
                  x.call(u, p, this),
                  (g = (w = A(this, nt).config).onSettled) == null ||
                    g.call(w, p, this.state.error, this),
                  this.scheduleGc();
              },
              onError: i,
              onFail: (p, u) => {
                Ae(this, ft, Bt).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: u,
                });
              },
              onPause: () => {
                Ae(this, ft, Bt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ae(this, ft, Bt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          A(this, Pe).start()
        );
      }
    }),
    (Io = new WeakMap()),
    (Fo = new WeakMap()),
    (nt = new WeakMap()),
    (Pe = new WeakMap()),
    (Kr = new WeakMap()),
    (Wn = new WeakMap()),
    (ft = new WeakSet()),
    (Bt = function (t) {
      const n = (o) => {
        switch (t.type) {
          case "failed":
            return {
              ...o,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...o, fetchStatus: "paused" };
          case "continue":
            return { ...o, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...o,
              ...sw(o.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...o,
              data: t.data,
              dataUpdateCount: o.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const r = t.error;
            return Ii(r) && r.revert && A(this, Fo)
              ? { ...A(this, Fo), fetchStatus: "idle" }
              : {
                  ...o,
                  error: r,
                  errorUpdateCount: o.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: o.fetchFailureCount + 1,
                  fetchFailureReason: r,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...o, isInvalidated: !0 };
          case "setState":
            return { ...o, ...t.state };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          this.observers.forEach((o) => {
            o.onQueryUpdate();
          }),
            A(this, nt).notify({ query: this, type: "updated", action: t });
        });
    }),
    tp);
function sw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: zh(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function iw(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    o = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (o ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var At,
  np,
  lw =
    ((np = class extends Vs {
      constructor(t = {}) {
        super();
        q(this, At);
        (this.config = t), W(this, At, new Map());
      }
      build(t, n, o) {
        const r = n.queryKey,
          a = n.queryHash ?? Zc(r, n);
        let s = this.get(a);
        return (
          s ||
            ((s = new aw({
              cache: this,
              queryKey: r,
              queryHash: a,
              options: t.defaultQueryOptions(n),
              state: o,
              defaultOptions: t.getQueryDefaults(r),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        A(this, At).has(t.queryHash) ||
          (A(this, At).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = A(this, At).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && A(this, At).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return A(this, At).get(t);
      }
      getAll() {
        return [...A(this, At).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((o) => Od(n, o));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((o) => Od(t, o)) : n;
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (At = new WeakMap()),
    np),
  Tt,
  Ie,
  Vn,
  bt,
  an,
  op,
  cw =
    ((op = class extends Hh {
      constructor(t) {
        super();
        q(this, bt);
        q(this, Tt);
        q(this, Ie);
        q(this, Vn);
        (this.mutationId = t.mutationId),
          W(this, Ie, t.mutationCache),
          W(this, Tt, []),
          (this.state = t.state || uw()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        A(this, Tt).includes(t) ||
          (A(this, Tt).push(t),
          this.clearGcTimeout(),
          A(this, Ie).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        W(
          this,
          Tt,
          A(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          A(this, Ie).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        A(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : A(this, Ie).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = A(this, Vn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var r, a, s, i, l, c, d, p, u, x, w, g, y, m, f, h, S, C, N, k;
        W(
          this,
          Vn,
          $h({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, B) => {
              Ae(this, bt, an).call(this, {
                type: "failed",
                failureCount: T,
                error: B,
              });
            },
            onPause: () => {
              Ae(this, bt, an).call(this, { type: "pause" });
            },
            onContinue: () => {
              Ae(this, bt, an).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, Ie).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          o = !A(this, Vn).canStart();
        try {
          if (!n) {
            Ae(this, bt, an).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((a = (r = A(this, Ie).config).onMutate) == null
                ? void 0
                : a.call(r, t, this));
            const B = await ((i = (s = this.options).onMutate) == null
              ? void 0
              : i.call(s, t));
            B !== this.state.context &&
              Ae(this, bt, an).call(this, {
                type: "pending",
                context: B,
                variables: t,
                isPaused: o,
              });
          }
          const T = await A(this, Vn).start();
          return (
            await ((c = (l = A(this, Ie).config).onSuccess) == null
              ? void 0
              : c.call(l, T, t, this.state.context, this)),
            await ((p = (d = this.options).onSuccess) == null
              ? void 0
              : p.call(d, T, t, this.state.context)),
            await ((x = (u = A(this, Ie).config).onSettled) == null
              ? void 0
              : x.call(
                  u,
                  T,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((g = (w = this.options).onSettled) == null
              ? void 0
              : g.call(w, T, null, t, this.state.context)),
            Ae(this, bt, an).call(this, { type: "success", data: T }),
            T
          );
        } catch (T) {
          try {
            throw (
              (await ((m = (y = A(this, Ie).config).onError) == null
                ? void 0
                : m.call(y, T, t, this.state.context, this)),
              await ((h = (f = this.options).onError) == null
                ? void 0
                : h.call(f, T, t, this.state.context)),
              await ((C = (S = A(this, Ie).config).onSettled) == null
                ? void 0
                : C.call(
                    S,
                    void 0,
                    T,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((k = (N = this.options).onSettled) == null
                ? void 0
                : k.call(N, void 0, T, t, this.state.context)),
              T)
            );
          } finally {
            Ae(this, bt, an).call(this, { type: "error", error: T });
          }
        } finally {
          A(this, Ie).runNext(this);
        }
      }
    }),
    (Tt = new WeakMap()),
    (Ie = new WeakMap()),
    (Vn = new WeakMap()),
    (bt = new WeakSet()),
    (an = function (t) {
      const n = (o) => {
        switch (t.type) {
          case "failed":
            return {
              ...o,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...o, isPaused: !0 };
          case "continue":
            return { ...o, isPaused: !1 };
          case "pending":
            return {
              ...o,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...o,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...o,
              data: void 0,
              error: t.error,
              failureCount: o.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          A(this, Tt).forEach((o) => {
            o.onMutationUpdate(t);
          }),
            A(this, Ie).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    op);
function uw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Qe,
  Gr,
  rp,
  dw =
    ((rp = class extends Vs {
      constructor(t = {}) {
        super();
        q(this, Qe);
        q(this, Gr);
        (this.config = t), W(this, Qe, new Map()), W(this, Gr, Date.now());
      }
      build(t, n, o) {
        const r = new cw({
          mutationCache: this,
          mutationId: ++sa(this, Gr)._,
          options: t.defaultMutationOptions(n),
          state: o,
        });
        return this.add(r), r;
      }
      add(t) {
        const n = Ta(t),
          o = A(this, Qe).get(n) ?? [];
        o.push(t),
          A(this, Qe).set(n, o),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var o;
        const n = Ta(t);
        if (A(this, Qe).has(n)) {
          const r =
            (o = A(this, Qe).get(n)) == null
              ? void 0
              : o.filter((a) => a !== t);
          r && (r.length === 0 ? A(this, Qe).delete(n) : A(this, Qe).set(n, r));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var o;
        const n =
          (o = A(this, Qe).get(Ta(t))) == null
            ? void 0
            : o.find((r) => r.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var o;
        const n =
          (o = A(this, Qe).get(Ta(t))) == null
            ? void 0
            : o.find((r) => r !== t && r.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...A(this, Qe).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((o) => Ld(n, o));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Ld(t, n));
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return _e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(pt)))
        );
      }
    }),
    (Qe = new WeakMap()),
    (Gr = new WeakMap()),
    rp);
function Ta(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Ud(e) {
  return {
    onFetch: (t, n) => {
      var d, p, u, x, w;
      const o = t.options,
        r =
          (u =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : u.direction,
        a = ((x = t.state.data) == null ? void 0 : x.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let i = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let g = !1;
        const y = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = Lh(t.options, t.fetchOptions),
          f = async (h, S, C) => {
            if (g) return Promise.reject();
            if (S == null && h.pages.length) return Promise.resolve(h);
            const N = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            y(N);
            const k = await m(N),
              { maxPages: T } = t.options,
              B = C ? J1 : Z1;
            return {
              pages: B(h.pages, k, T),
              pageParams: B(h.pageParams, S, T),
            };
          };
        if (r && a.length) {
          const h = r === "backward",
            S = h ? pw : $d,
            C = { pages: a, pageParams: s },
            N = S(o, C);
          i = await f(C, N, h);
        } else {
          const h = e ?? a.length;
          do {
            const S = l === 0 ? (s[0] ?? o.initialPageParam) : $d(o, i);
            if (l > 0 && S == null) break;
            (i = await f(i, S)), l++;
          } while (l < h);
        }
        return i;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, y;
            return (y = (g = t.options).persister) == null
              ? void 0
              : y.call(
                  g,
                  c,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function $d(e, { pages: t, pageParams: n }) {
  const o = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[o], t, n[o], n) : void 0;
}
function pw(e, { pages: t, pageParams: n }) {
  var o;
  return t.length > 0
    ? (o = e.getPreviousPageParam) == null
      ? void 0
      : o.call(e, t[0], t, n[0], n)
    : void 0;
}
var de,
  fn,
  mn,
  _o,
  Bo,
  hn,
  Oo,
  Lo,
  ap,
  fw =
    ((ap = class {
      constructor(e = {}) {
        q(this, de);
        q(this, fn);
        q(this, mn);
        q(this, _o);
        q(this, Bo);
        q(this, hn);
        q(this, Oo);
        q(this, Lo);
        W(this, de, e.queryCache || new lw()),
          W(this, fn, e.mutationCache || new dw()),
          W(this, mn, e.defaultOptions || {}),
          W(this, _o, new Map()),
          W(this, Bo, new Map()),
          W(this, hn, 0);
      }
      mount() {
        sa(this, hn)._++,
          A(this, hn) === 1 &&
            (W(
              this,
              Oo,
              Mh.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), A(this, de).onFocus());
              })
            ),
            W(
              this,
              Lo,
              xs.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), A(this, de).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        sa(this, hn)._--,
          A(this, hn) === 0 &&
            ((e = A(this, Oo)) == null || e.call(this),
            W(this, Oo, void 0),
            (t = A(this, Lo)) == null || t.call(this),
            W(this, Lo, void 0));
      }
      isFetching(e) {
        return A(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return A(this, fn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, de).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            o = A(this, de).build(this, n);
          return (
            e.revalidateIfStale &&
              o.isStaleByTime(Bd(n.staleTime, o)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return A(this, de)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const o = n.data;
            return [t, o];
          });
      }
      setQueryData(e, t, n) {
        const o = this.defaultQueryOptions({ queryKey: e }),
          r = A(this, de).get(o.queryHash),
          a = r == null ? void 0 : r.state.data,
          s = Q1(t, a);
        if (s !== void 0)
          return A(this, de)
            .build(this, o)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return _e.batch(() =>
          A(this, de)
            .findAll(e)
            .map(({ queryKey: o }) => [o, this.setQueryData(o, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, de).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = A(this, de);
        _e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = A(this, de),
          o = { type: "active", ...e };
        return _e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries(o, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          o = _e.batch(() =>
            A(this, de)
              .findAll(e)
              .map((r) => r.cancel(n))
          );
        return Promise.all(o).then(pt).catch(pt);
      }
      invalidateQueries(e = {}, t = {}) {
        return _e.batch(() => {
          if (
            (A(this, de)
              .findAll(e)
              .forEach((o) => {
                o.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          o = _e.batch(() =>
            A(this, de)
              .findAll(e)
              .filter((r) => !r.isDisabled())
              .map((r) => {
                let a = r.fetch(void 0, n);
                return (
                  n.throwOnError || (a = a.catch(pt)),
                  r.state.fetchStatus === "paused" ? Promise.resolve() : a
                );
              })
          );
        return Promise.all(o).then(pt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, de).build(this, t);
        return n.isStaleByTime(Bd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Ud(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Ud(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return xs.isOnline()
          ? A(this, fn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return A(this, de);
      }
      getMutationCache() {
        return A(this, fn);
      }
      getDefaultOptions() {
        return A(this, mn);
      }
      setDefaultOptions(e) {
        W(this, mn, e);
      }
      setQueryDefaults(e, t) {
        A(this, _o).set(Vr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...A(this, _o).values()];
        let n = {};
        return (
          t.forEach((o) => {
            Qr(e, o.queryKey) && (n = { ...n, ...o.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        A(this, Bo).set(Vr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...A(this, Bo).values()];
        let n = {};
        return (
          t.forEach((o) => {
            Qr(e, o.mutationKey) && (n = { ...n, ...o.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...A(this, mn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Zc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Jc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...A(this, mn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        A(this, de).clear(), A(this, fn).clear();
      }
    }),
    (de = new WeakMap()),
    (fn = new WeakMap()),
    (mn = new WeakMap()),
    (_o = new WeakMap()),
    (Bo = new WeakMap()),
    (hn = new WeakMap()),
    (Oo = new WeakMap()),
    (Lo = new WeakMap()),
    ap),
  mw = j.createContext(void 0),
  hw = ({ client: e, children: t }) => (
    j.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    v.jsx(mw.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ys() {
  return (
    (ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    ys.apply(this, arguments)
  );
}
var xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xn || (xn = {}));
const Hd = "popstate";
function vw(e) {
  e === void 0 && (e = {});
  function t(o, r) {
    let { pathname: a, search: s, hash: i } = o.location;
    return Ml(
      "",
      { pathname: a, search: s, hash: i },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function n(o, r) {
    return typeof r == "string" ? r : Vh(r);
  }
  return xw(t, n, null, e);
}
function We(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Wh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gw() {
  return Math.random().toString(36).substr(2, 8);
}
function Wd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ml(e, t, n, o) {
  return (
    n === void 0 && (n = null),
    ys(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ks(t) : t,
      { state: n, key: (t && t.key) || o || gw() }
    )
  );
}
function Vh(e) {
  let { pathname: t = "/", search: n = "", hash: o = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
  );
}
function Ks(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let o = e.indexOf("?");
    o >= 0 && ((t.search = e.substr(o)), (e = e.substr(0, o))),
      e && (t.pathname = e);
  }
  return t;
}
function xw(e, t, n, o) {
  o === void 0 && (o = {});
  let { window: r = document.defaultView, v5Compat: a = !1 } = o,
    s = r.history,
    i = xn.Pop,
    l = null,
    c = d();
  c == null && ((c = 0), s.replaceState(ys({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    i = xn.Pop;
    let y = d(),
      m = y == null ? null : y - c;
    (c = y), l && l({ action: i, location: g.location, delta: m });
  }
  function u(y, m) {
    i = xn.Push;
    let f = Ml(g.location, y, m);
    c = d() + 1;
    let h = Wd(f, c),
      S = g.createHref(f);
    try {
      s.pushState(h, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      r.location.assign(S);
    }
    a && l && l({ action: i, location: g.location, delta: 1 });
  }
  function x(y, m) {
    i = xn.Replace;
    let f = Ml(g.location, y, m);
    c = d();
    let h = Wd(f, c),
      S = g.createHref(f);
    s.replaceState(h, "", S),
      a && l && l({ action: i, location: g.location, delta: 0 });
  }
  function w(y) {
    let m = r.location.origin !== "null" ? r.location.origin : r.location.href,
      f = typeof y == "string" ? y : Vh(y);
    return (
      (f = f.replace(/ $/, "%20")),
      We(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, m)
    );
  }
  let g = {
    get action() {
      return i;
    },
    get location() {
      return e(r, s);
    },
    listen(y) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(Hd, p),
        (l = y),
        () => {
          r.removeEventListener(Hd, p), (l = null);
        }
      );
    },
    createHref(y) {
      return t(r, y);
    },
    createURL: w,
    encodeLocation(y) {
      let m = w(y);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: u,
    replace: x,
    go(y) {
      return s.go(y);
    },
  };
  return g;
}
var Vd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Vd || (Vd = {}));
function yw(e, t, n) {
  return n === void 0 && (n = "/"), ww(e, t, n, !1);
}
function ww(e, t, n, o) {
  let r = typeof t == "string" ? Ks(t) : t,
    a = Gh(r.pathname || "/", n);
  if (a == null) return null;
  let s = Qh(e);
  jw(s);
  let i = null;
  for (let l = 0; i == null && l < s.length; ++l) {
    let c = Rw(a);
    i = Pw(s[l], c, o);
  }
  return i;
}
function Qh(e, t, n, o) {
  t === void 0 && (t = []), n === void 0 && (n = []), o === void 0 && (o = "");
  let r = (a, s, i) => {
    let l = {
      relativePath: i === void 0 ? a.path || "" : i,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: s,
      route: a,
    };
    l.relativePath.startsWith("/") &&
      (We(
        l.relativePath.startsWith(o),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(o.length)));
    let c = To([o, l.relativePath]),
      d = n.concat(l);
    a.children &&
      a.children.length > 0 &&
      (We(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Qh(a.children, t, d, c)),
      !(a.path == null && !a.index) &&
        t.push({ path: c, score: Tw(c, a.index), routesMeta: d });
  };
  return (
    e.forEach((a, s) => {
      var i;
      if (a.path === "" || !((i = a.path) != null && i.includes("?"))) r(a, s);
      else for (let l of Kh(a.path)) r(a, s, l);
    }),
    t
  );
}
function Kh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...o] = t,
    r = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (o.length === 0) return r ? [a, ""] : [a];
  let s = Kh(o.join("/")),
    i = [];
  return (
    i.push(...s.map((l) => (l === "" ? a : [a, l].join("/")))),
    r && i.push(...s),
    i.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function jw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : bw(
          t.routesMeta.map((o) => o.childrenIndex),
          n.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
const Sw = /^:[\w-]+$/,
  Cw = 3,
  Ew = 2,
  Nw = 1,
  kw = 10,
  Aw = -2,
  Qd = (e) => e === "*";
function Tw(e, t) {
  let n = e.split("/"),
    o = n.length;
  return (
    n.some(Qd) && (o += Aw),
    t && (o += Ew),
    n
      .filter((r) => !Qd(r))
      .reduce((r, a) => r + (Sw.test(a) ? Cw : a === "" ? Nw : kw), o)
  );
}
function bw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, r) => o === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Pw(e, t, n) {
  let { routesMeta: o } = e,
    r = {},
    a = "/",
    s = [];
  for (let i = 0; i < o.length; ++i) {
    let l = o[i],
      c = i === o.length - 1,
      d = a === "/" ? t : t.slice(a.length) || "/",
      p = Kd(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d
      ),
      u = l.route;
    if (
      (!p &&
        c &&
        n &&
        !o[o.length - 1].route.index &&
        (p = Kd(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !p)
    )
      return null;
    Object.assign(r, p.params),
      s.push({
        params: r,
        pathname: To([a, p.pathname]),
        pathnameBase: Iw(To([a, p.pathnameBase])),
        route: u,
      }),
      p.pathnameBase !== "/" && (a = To([a, p.pathnameBase]));
  }
  return s;
}
function Kd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, o] = Dw(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let a = r[0],
    s = a.replace(/(.)\/+$/, "$1"),
    i = r.slice(1);
  return {
    params: o.reduce((c, d, p) => {
      let { paramName: u, isOptional: x } = d;
      if (u === "*") {
        let g = i[p] || "";
        s = a.slice(0, a.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = i[p];
      return (
        x && !w ? (c[u] = void 0) : (c[u] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: a,
    pathnameBase: s,
    pattern: e,
  };
}
function Dw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Wh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let o = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, i, l) => (
            o.push({ paramName: i, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (r += "\\/*$")
        : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), o]
  );
}
function Rw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Wh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Gh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    o = e.charAt(n);
  return o && o !== "/" ? null : e.slice(n) || "/";
}
const To = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Iw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Fw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Yh = ["post", "put", "patch", "delete"];
new Set(Yh);
const _w = ["get", ...Yh];
new Set(_w);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ws() {
  return (
    (ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }),
    ws.apply(this, arguments)
  );
}
const Bw = j.createContext(null),
  Ow = j.createContext(null),
  Xh = j.createContext(null),
  Gs = j.createContext(null),
  Ys = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qh = j.createContext(null);
function eu() {
  return j.useContext(Gs) != null;
}
function Zh() {
  return eu() || We(!1), j.useContext(Gs).location;
}
function Lw(e, t) {
  return Mw(e, t);
}
function Mw(e, t, n, o) {
  eu() || We(!1);
  let { navigator: r } = j.useContext(Xh),
    { matches: a } = j.useContext(Ys),
    s = a[a.length - 1],
    i = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Zh(),
    d;
  if (t) {
    var p;
    let y = typeof t == "string" ? Ks(t) : t;
    l === "/" || ((p = y.pathname) != null && p.startsWith(l)) || We(!1),
      (d = y);
  } else d = c;
  let u = d.pathname || "/",
    x = u;
  if (l !== "/") {
    let y = l.replace(/^\//, "").split("/");
    x = "/" + u.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let w = yw(e, { pathname: x }),
    g = Ww(
      w &&
        w.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: To([
              l,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? l
                : To([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      o
    );
  return t && g
    ? j.createElement(
        Gs.Provider,
        {
          value: {
            location: ws(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: xn.Pop,
          },
        },
        g
      )
    : g;
}
function zw() {
  let e = Gw(),
    t = Fw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: r }, n) : null,
    null
  );
}
const Uw = j.createElement(zw, null);
class $w extends j.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Ys.Provider,
          { value: this.props.routeContext },
          j.createElement(qh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Hw(e) {
  let { routeContext: t, match: n, children: o } = e,
    r = j.useContext(Bw);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Ys.Provider, { value: t }, o)
  );
}
function Ww(e, t, n, o) {
  var r;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    o === void 0 && (o = null),
    e == null)
  ) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (a = o) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let d = s.findIndex(
      (p) => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0
    );
    d >= 0 || We(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let l = !1,
    c = -1;
  if (n && o && o.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let p = s[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = d),
        p.route.id)
      ) {
        let { loaderData: u, errors: x } = n,
          w =
            p.route.loader &&
            u[p.route.id] === void 0 &&
            (!x || x[p.route.id] === void 0);
        if (p.route.lazy || w) {
          (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, p, u) => {
    let x,
      w = !1,
      g = null,
      y = null;
    n &&
      ((x = i && p.route.id ? i[p.route.id] : void 0),
      (g = p.route.errorElement || Uw),
      l &&
        (c < 0 && u === 0
          ? ((w = !0), (y = null))
          : c === u &&
            ((w = !0), (y = p.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, u + 1)),
      f = () => {
        let h;
        return (
          x
            ? (h = g)
            : w
              ? (h = y)
              : p.route.Component
                ? (h = j.createElement(p.route.Component, null))
                : p.route.element
                  ? (h = p.route.element)
                  : (h = d),
          j.createElement(Hw, {
            match: p,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || u === 0)
      ? j.createElement($w, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var zl = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(zl || {});
function Vw(e) {
  let t = j.useContext(Ow);
  return t || We(!1), t;
}
function Qw(e) {
  let t = j.useContext(Ys);
  return t || We(!1), t;
}
function Kw(e) {
  let t = Qw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || We(!1), n.route.id;
}
function Gw() {
  var e;
  let t = j.useContext(qh),
    n = Vw(zl.UseRouteError),
    o = Kw(zl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[o];
}
function Ul(e) {
  We(!1);
}
function Yw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: o,
    navigationType: r = xn.Pop,
    navigator: a,
    static: s = !1,
    future: i,
  } = e;
  eu() && We(!1);
  let l = t.replace(/^\/*/, "/"),
    c = j.useMemo(
      () => ({
        basename: l,
        navigator: a,
        static: s,
        future: ws({ v7_relativeSplatPath: !1 }, i),
      }),
      [l, i, a, s]
    );
  typeof o == "string" && (o = Ks(o));
  let {
      pathname: d = "/",
      search: p = "",
      hash: u = "",
      state: x = null,
      key: w = "default",
    } = o,
    g = j.useMemo(() => {
      let y = Gh(d, l);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: u, state: x, key: w },
            navigationType: r,
          };
    }, [l, d, p, u, x, w, r]);
  return g == null
    ? null
    : j.createElement(
        Xh.Provider,
        { value: c },
        j.createElement(Gs.Provider, { children: n, value: g })
      );
}
function Xw(e) {
  let { children: t, location: n } = e;
  return Lw($l(t), n);
}
new Promise(() => {});
function $l(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (o, r) => {
      if (!j.isValidElement(o)) return;
      let a = [...t, r];
      if (o.type === j.Fragment) {
        n.push.apply(n, $l(o.props.children, a));
        return;
      }
      o.type !== Ul && We(!1), !o.props.index || !o.props.children || We(!1);
      let s = {
        id: o.props.id || a.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (s.children = $l(o.props.children, a)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const qw = "6";
try {
  window.__reactRouterVersion = qw;
} catch {}
const Zw = "startTransition",
  Gd = Bv[Zw];
function Jw(e) {
  let { basename: t, children: n, future: o, window: r } = e,
    a = j.useRef();
  a.current == null && (a.current = vw({ window: r, v5Compat: !0 }));
  let s = a.current,
    [i, l] = j.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = o || {},
    d = j.useCallback(
      (p) => {
        c && Gd ? Gd(() => l(p)) : l(p);
      },
      [l, c]
    );
  return (
    j.useLayoutEffect(() => s.listen(d), [s, d]),
    j.createElement(Yw, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: s,
      future: o,
    })
  );
}
var Yd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Yd || (Yd = {}));
var Xd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xd || (Xd = {}));
const ej = () =>
    v.jsx("header", {
      "data-lov-id": "src/components/NavBar.jsx:6:4",
      "data-lov-name": "header",
      "data-component-path": "src/components/NavBar.jsx",
      "data-component-line": "6",
      "data-component-file": "NavBar.jsx",
      "data-component-name": "header",
      "data-component-content":
        "%7B%22className%22%3A%22w-full%20py-4%20px-4%20sm%3Apx-6%20lg%3Apx-8%20border-b%22%7D",
      className: "w-full py-4 px-4 sm:px-6 lg:px-8 border-b",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/NavBar.jsx:7:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/NavBar.jsx",
        "data-component-line": "7",
        "data-component-file": "NavBar.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20flex%20justify-between%20items-center%22%7D",
        className: "max-w-7xl mx-auto flex justify-between items-center",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/NavBar.jsx:8:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/NavBar.jsx",
            "data-component-line": "8",
            "data-component-file": "NavBar.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
            className: "flex items-center space-x-2",
            children: [
              v.jsx(Xm, {
                "data-lov-id": "src/components/NavBar.jsx:9:10",
                "data-lov-name": "Leaf",
                "data-component-path": "src/components/NavBar.jsx",
                "data-component-line": "9",
                "data-component-file": "NavBar.jsx",
                "data-component-name": "Leaf",
                "data-component-content":
                  "%7B%22className%22%3A%22w-8%20h-8%20text-leaf%22%7D",
                className: "w-8 h-8 text-leaf",
              }),
              v.jsx("span", {
                "data-lov-id": "src/components/NavBar.jsx:10:10",
                "data-lov-name": "span",
                "data-component-path": "src/components/NavBar.jsx",
                "data-component-line": "10",
                "data-component-file": "NavBar.jsx",
                "data-component-name": "span",
                "data-component-content":
                  "%7B%22text%22%3A%22PaddyGuard%22%2C%22className%22%3A%22text-xl%20font-bold%22%7D",
                className: "text-xl font-bold",
                children: "PaddyGuard",
              }),
            ],
          }),
          v.jsxs("nav", {
            "data-lov-id": "src/components/NavBar.jsx:12:8",
            "data-lov-name": "nav",
            "data-component-path": "src/components/NavBar.jsx",
            "data-component-line": "12",
            "data-component-file": "NavBar.jsx",
            "data-component-name": "nav",
            "data-component-content":
              "%7B%22className%22%3A%22hidden%20md%3Aflex%20items-center%20space-x-8%22%7D",
            className: "hidden md:flex items-center space-x-8",
            children: [
              v.jsx("a", {
                "data-lov-id": "src/components/NavBar.jsx:13:10",
                "data-lov-name": "a",
                "data-component-path": "src/components/NavBar.jsx",
                "data-component-line": "13",
                "data-component-file": "NavBar.jsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22text%22%3A%22How%20It%20Works%22%2C%22className%22%3A%22text-gray-600%20hover%3Atext-leaf%20transition-colors%22%7D",
                href: "#how-it-works",
                className: "text-gray-600 hover:text-leaf transition-colors",
                children: "How It Works",
              }),
              v.jsx("a", {
                "data-lov-id": "src/components/NavBar.jsx:19:10",
                "data-lov-name": "a",
                "data-component-path": "src/components/NavBar.jsx",
                "data-component-line": "19",
                "data-component-file": "NavBar.jsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22text%22%3A%22Benefits%22%2C%22className%22%3A%22text-gray-600%20hover%3Atext-leaf%20transition-colors%22%7D",
                href: "#benefits",
                className: "text-gray-600 hover:text-leaf transition-colors",
                children: "Benefits",
              }),
              v.jsx("a", {
                "data-lov-id": "src/components/NavBar.jsx:25:10",
                "data-lov-name": "a",
                "data-component-path": "src/components/NavBar.jsx",
                "data-component-line": "25",
                "data-component-file": "NavBar.jsx",
                "data-component-name": "a",
                "data-component-content":
                  "%7B%22text%22%3A%22Try%20Now%22%2C%22className%22%3A%22text-gray-600%20hover%3Atext-leaf%20transition-colors%22%7D",
                href: "#try-now",
                className: "text-gray-600 hover:text-leaf transition-colors",
                children: "Try Now",
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/NavBar.jsx:32:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/NavBar.jsx",
            "data-component-line": "32",
            "data-component-file": "NavBar.jsx",
            "data-component-name": "div",
            "data-component-content": "%7B%7D",
            children: v.jsx("a", {
              "data-lov-id": "src/components/NavBar.jsx:33:10",
              "data-lov-name": "a",
              "data-component-path": "src/components/NavBar.jsx",
              "data-component-line": "33",
              "data-component-file": "NavBar.jsx",
              "data-component-name": "a",
              "data-component-content":
                "%7B%22text%22%3A%22Get%20Started%22%2C%22className%22%3A%22bg-leaf%20hover%3Abg-leaf-dark%20text-white%20px-4%20py-2%20rounded-md%20transition-colors%22%7D",
              href: "#try-now",
              className:
                "bg-leaf hover:bg-leaf-dark text-white px-4 py-2 rounded-md transition-colors",
              children: "Get Started",
            }),
          }),
        ],
      }),
    }),
  tj = rh(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  bo = j.forwardRef(
    ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, a) => {
      const s = o ? $r : "button";
      return v.jsx(s, {
        "data-lov-id": "src/components/ui/button.jsx:40:6",
        "data-lov-name": "Comp",
        "data-component-path": "src/components/ui/button.jsx",
        "data-component-line": "40",
        "data-component-file": "button.jsx",
        "data-component-name": "Comp",
        "data-component-content": "%7B%7D",
        className: ke(tj({ variant: t, size: n, className: e })),
        ref: a,
        ...r,
      });
    }
  );
bo.displayName = "Button";
const nj = () =>
    v.jsx("section", {
      "data-lov-id": "src/components/HeroSection.jsx:7:4",
      "data-lov-name": "section",
      "data-component-path": "src/components/HeroSection.jsx",
      "data-component-line": "7",
      "data-component-file": "HeroSection.jsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-16%20md%3Apy-24%20px-4%22%7D",
      className: "py-16 md:py-24 px-4",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/HeroSection.jsx:8:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/HeroSection.jsx",
        "data-component-line": "8",
        "data-component-file": "HeroSection.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20grid%20md%3Agrid-cols-2%20gap-12%20items-center%22%7D",
        className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/HeroSection.jsx:9:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-line": "9",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              v.jsxs("h1", {
                "data-lov-id": "src/components/HeroSection.jsx:10:10",
                "data-lov-name": "h1",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-line": "10",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "h1",
                "data-component-content":
                  "%7B%22text%22%3A%22Detect%20Plant%20Diseases%22%2C%22className%22%3A%22text-4xl%20md%3Atext-5xl%20lg%3Atext-6xl%20font-bold%20leading-tight%22%7D",
                className:
                  "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                children: [
                  "Detect Plant Diseases ",
                  v.jsx("span", {
                    "data-lov-id": "src/components/HeroSection.jsx:11:34",
                    "data-lov-name": "span",
                    "data-component-path": "src/components/HeroSection.jsx",
                    "data-component-line": "11",
                    "data-component-file": "HeroSection.jsx",
                    "data-component-name": "span",
                    "data-component-content":
                      "%7B%22text%22%3A%22Instantly%22%2C%22className%22%3A%22text-leaf%22%7D",
                    className: "text-leaf",
                    children: "Instantly",
                  }),
                ],
              }),
              v.jsx("p", {
                "data-lov-id": "src/components/HeroSection.jsx:13:10",
                "data-lov-name": "p",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-line": "13",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22text%22%3A%22Upload%20a%20photo%20of%20your%20plant's%20leaves%20and%20get%20accurate%20disease%5Cn%20%20%20%20%20%20%20%20%20%20%20%20diagnosis%20powered%20by%20AI.%20Save%20your%20plants%20before%20it's%20too%20late.%22%2C%22className%22%3A%22text-xl%20text-gray-600%20md%3Apr-12%22%7D",
                className: "text-xl text-gray-600 md:pr-12",
                children:
                  "Upload a photo of your plant's leaves and get accurate disease diagnosis powered by AI. Save your plants before it's too late.",
              }),
              v.jsxs("div", {
                "data-lov-id": "src/components/HeroSection.jsx:17:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-line": "17",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22pt-4%20flex%20flex-col%20sm%3Aflex-row%20gap-4%22%7D",
                className: "pt-4 flex flex-col sm:flex-row gap-4",
                children: [
                  v.jsx(bo, {
                    "data-lov-id": "src/components/HeroSection.jsx:18:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src/components/HeroSection.jsx",
                    "data-component-line": "18",
                    "data-component-file": "HeroSection.jsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22bg-leaf%20hover%3Abg-leaf-dark%22%7D",
                    size: "lg",
                    className: "bg-leaf hover:bg-leaf-dark",
                    children: v.jsxs("a", {
                      "data-lov-id": "src/components/HeroSection.jsx:19:14",
                      "data-lov-name": "a",
                      "data-component-path": "src/components/HeroSection.jsx",
                      "data-component-line": "19",
                      "data-component-file": "HeroSection.jsx",
                      "data-component-name": "a",
                      "data-component-content":
                        "%7B%22text%22%3A%22Try%20Now%22%2C%22className%22%3A%22flex%20items-center%22%7D",
                      href: "#try-now",
                      className: "flex items-center",
                      children: [
                        "Try Now",
                        v.jsx(Vg, {
                          "data-lov-id": "src/components/HeroSection.jsx:21:16",
                          "data-lov-name": "ArrowRight",
                          "data-component-path":
                            "src/components/HeroSection.jsx",
                          "data-component-line": "21",
                          "data-component-file": "HeroSection.jsx",
                          "data-component-name": "ArrowRight",
                          "data-component-content":
                            "%7B%22className%22%3A%22ml-2%20h-4%20w-4%22%7D",
                          className: "ml-2 h-4 w-4",
                        }),
                      ],
                    }),
                  }),
                  v.jsx(bo, {
                    "data-lov-id": "src/components/HeroSection.jsx:24:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src/components/HeroSection.jsx",
                    "data-component-line": "24",
                    "data-component-file": "HeroSection.jsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Learn%20More%22%7D",
                    variant: "outline",
                    size: "lg",
                    children: "Learn More",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            "data-lov-id": "src/components/HeroSection.jsx:29:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/HeroSection.jsx",
            "data-component-line": "29",
            "data-component-file": "HeroSection.jsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
            className: "relative",
            children: [
              v.jsx("div", {
                "data-lov-id": "src/components/HeroSection.jsx:30:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-line": "30",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22absolute%20-inset-0.5%20bg-gradient-to-r%20from-leaf%20to-leaf-light%20rounded-2xl%20blur%20opacity-30%22%7D",
                className:
                  "absolute -inset-0.5 bg-gradient-to-r from-leaf to-leaf-light rounded-2xl blur opacity-30",
              }),
              v.jsx("div", {
                "data-lov-id": "src/components/HeroSection.jsx:31:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.jsx",
                "data-component-line": "31",
                "data-component-file": "HeroSection.jsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22relative%20overflow-hidden%20rounded-2xl%20shadow-xl%20animate-float%22%7D",
                className:
                  "relative overflow-hidden rounded-2xl shadow-xl animate-float",
                children: v.jsx("img", {
                  "data-lov-id": "src/components/HeroSection.jsx:32:12",
                  "data-lov-name": "img",
                  "data-component-path": "src/components/HeroSection.jsx",
                  "data-component-line": "32",
                  "data-component-file": "HeroSection.jsx",
                  "data-component-name": "img",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-full%20h-auto%20object-cover%20rounded-2xl%20shadow-lg%22%7D",
                  src: "https://plus.unsplash.com/premium_photo-1675694940212-4c7b5f49f514?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhZnxlbnwwfDB8MHx8fDA%3D",
                  alt: "Healthy and unhealthy plant leaves",
                  className: "w-full h-auto object-cover rounded-2xl shadow-lg",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  oj = [
    {
      icon: v.jsx(Qg, {
        "data-lov-id": "src/components/HowItWorks.jsx:7:10",
        "data-lov-name": "Camera",
        "data-component-path": "src/components/HowItWorks.jsx",
        "data-component-line": "7",
        "data-component-file": "HowItWorks.jsx",
        "data-component-name": "Camera",
        "data-component-content":
          "%7B%22className%22%3A%22w-12%20h-12%20text-leaf%22%7D",
        className: "w-12 h-12 text-leaf",
      }),
      title: "Take a Photo",
      description:
        "Snap a clear picture of the affected leaf or plant part showing visible symptoms.",
    },
    {
      icon: v.jsx(ex, {
        "data-lov-id": "src/components/HowItWorks.jsx:13:10",
        "data-lov-name": "Search",
        "data-component-path": "src/components/HowItWorks.jsx",
        "data-component-line": "13",
        "data-component-file": "HowItWorks.jsx",
        "data-component-name": "Search",
        "data-component-content":
          "%7B%22className%22%3A%22w-12%20h-12%20text-leaf%22%7D",
        className: "w-12 h-12 text-leaf",
      }),
      title: "AI Analysis",
      description:
        "Our powerful AI analyzes the image, comparing it against thousands of known plant diseases.",
    },
    {
      icon: v.jsx(Yg, {
        "data-lov-id": "src/components/HowItWorks.jsx:19:10",
        "data-lov-name": "CheckCircle",
        "data-component-path": "src/components/HowItWorks.jsx",
        "data-component-line": "19",
        "data-component-file": "HowItWorks.jsx",
        "data-component-name": "CheckCircle",
        "data-component-content":
          "%7B%22className%22%3A%22w-12%20h-12%20text-leaf%22%7D",
        className: "w-12 h-12 text-leaf",
      }),
      title: "Get Results",
      description:
        "Receive a detailed diagnosis with suggested treatments and prevention tips.",
    },
  ],
  rj = () =>
    v.jsx("section", {
      "data-lov-id": "src/components/HowItWorks.jsx:28:4",
      "data-lov-name": "section",
      "data-component-path": "src/components/HowItWorks.jsx",
      "data-component-line": "28",
      "data-component-file": "HowItWorks.jsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-16%20bg-gray-50%20leaf-pattern-bg%22%7D",
      id: "how-it-works",
      className: "py-16 bg-gray-50 leaf-pattern-bg",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/HowItWorks.jsx:29:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/HowItWorks.jsx",
        "data-component-line": "29",
        "data-component-file": "HowItWorks.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%22%7D",
        className: "max-w-7xl mx-auto px-4",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/HowItWorks.jsx:30:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/HowItWorks.jsx",
            "data-component-line": "30",
            "data-component-file": "HowItWorks.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                "data-lov-id": "src/components/HowItWorks.jsx:31:10",
                "data-lov-name": "h2",
                "data-component-path": "src/components/HowItWorks.jsx",
                "data-component-line": "31",
                "data-component-file": "HowItWorks.jsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22text%22%3A%22How%20It%20Works%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                className: "text-3xl md:text-4xl font-bold mb-4",
                children: "How It Works",
              }),
              v.jsx("p", {
                "data-lov-id": "src/components/HowItWorks.jsx:32:10",
                "data-lov-name": "p",
                "data-component-path": "src/components/HowItWorks.jsx",
                "data-component-line": "32",
                "data-component-file": "HowItWorks.jsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22text%22%3A%22Identifying%20plant%20diseases%20has%20never%20been%20easier.%20Three%20simple%20steps%20to%20diagnose%20and%20save%20your%20plants.%22%2C%22className%22%3A%22text-xl%20text-gray-600%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children:
                  "Identifying plant diseases has never been easier. Three simple steps to diagnose and save your plants.",
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/HowItWorks.jsx:37:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/HowItWorks.jsx",
            "data-component-line": "37",
            "data-component-file": "HowItWorks.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
            className: "grid md:grid-cols-3 gap-8",
            children: oj.map((e, t) =>
              v.jsxs(
                "div",
                {
                  "data-lov-id": "src/components/HowItWorks.jsx:39:12",
                  "data-lov-name": "div",
                  "data-component-path": "src/components/HowItWorks.jsx",
                  "data-component-line": "39",
                  "data-component-file": "HowItWorks.jsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22leaf-card%20p-8%20flex%20flex-col%20items-center%20text-center%22%7D",
                  className:
                    "leaf-card p-8 flex flex-col items-center text-center",
                  children: [
                    v.jsx("div", {
                      "data-lov-id": "src/components/HowItWorks.jsx:43:14",
                      "data-lov-name": "div",
                      "data-component-path": "src/components/HowItWorks.jsx",
                      "data-component-line": "43",
                      "data-component-file": "HowItWorks.jsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22mb-6%20p-4%20rounded-full%20bg-leaf%2F10%22%7D",
                      className: "mb-6 p-4 rounded-full bg-leaf/10",
                      children: e.icon,
                    }),
                    v.jsx("h3", {
                      "data-lov-id": "src/components/HowItWorks.jsx:44:14",
                      "data-lov-name": "h3",
                      "data-component-path": "src/components/HowItWorks.jsx",
                      "data-component-line": "44",
                      "data-component-file": "HowItWorks.jsx",
                      "data-component-name": "h3",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xl%20font-semibold%20mb-3%22%7D",
                      className: "text-xl font-semibold mb-3",
                      children: e.title,
                    }),
                    v.jsx("p", {
                      "data-lov-id": "src/components/HowItWorks.jsx:45:14",
                      "data-lov-name": "p",
                      "data-component-path": "src/components/HowItWorks.jsx",
                      "data-component-line": "45",
                      "data-component-file": "HowItWorks.jsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-gray-600%22%7D",
                      className: "text-gray-600",
                      children: e.description,
                    }),
                    v.jsxs("div", {
                      "data-lov-id": "src/components/HowItWorks.jsx:46:14",
                      "data-lov-name": "div",
                      "data-component-path": "src/components/HowItWorks.jsx",
                      "data-component-line": "46",
                      "data-component-file": "HowItWorks.jsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22text%22%3A%22Step%22%2C%22className%22%3A%22mt-6%20text-leaf%20font-bold%22%7D",
                      className: "mt-6 text-leaf font-bold",
                      children: ["Step ", t + 1],
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    }),
  aj = [
    {
      icon: v.jsx(Xg, {
        "data-lov-id": "src/components/Benefits.jsx:6:10",
        "data-lov-name": "Clock",
        "data-component-path": "src/components/Benefits.jsx",
        "data-component-line": "6",
        "data-component-file": "Benefits.jsx",
        "data-component-name": "Clock",
        "data-component-content":
          "%7B%22className%22%3A%22w-8%20h-8%20text-leaf%22%7D",
        className: "w-8 h-8 text-leaf",
      }),
      title: "Save Time",
      description:
        "Get instant results without waiting for lab tests or expert consultations.",
    },
    {
      icon: v.jsx(nx, { className: "w-8 h-8 text-leaf" }),
      title: "High Accuracy",
      description:
        "Our AI is trained on millions of images for precise diagnosis of 50+ plant diseases.",
    },
    {
      icon: v.jsx(ox, {
        "data-lov-id": "src/components/Benefits.jsx:18:10",
        "data-lov-name": "TrendingUp",
        "data-component-path": "src/components/Benefits.jsx",
        "data-component-line": "18",
        "data-component-file": "Benefits.jsx",
        "data-component-name": "TrendingUp",
        "data-component-content":
          "%7B%22className%22%3A%22w-8%20h-8%20text-leaf%22%7D",
        className: "w-8 h-8 text-leaf",
      }),
      title: "Improve Yield",
      description:
        "Early detection helps prevent crop loss and increases your harvest yield.",
    },
    {
      icon: v.jsx(tx, {
        "data-lov-id": "src/components/Benefits.jsx:24:10",
        "data-lov-name": "ShieldCheck",
        "data-component-path": "src/components/Benefits.jsx",
        "data-component-line": "24",
        "data-component-file": "Benefits.jsx",
        "data-component-name": "ShieldCheck",
        "data-component-content":
          "%7B%22className%22%3A%22w-8%20h-8%20text-leaf%22%7D",
        className: "w-8 h-8 text-leaf",
      }),
      title: "Reduce Pesticide Use",
      description:
        "Targeted treatment recommendations help minimize unnecessary chemical use.",
    },
  ],
  sj = () =>
    v.jsx("section", {
      "data-lov-id": "src/components/Benefits.jsx:33:4",
      "data-lov-name": "section",
      "data-component-path": "src/components/Benefits.jsx",
      "data-component-line": "33",
      "data-component-file": "Benefits.jsx",
      "data-component-name": "section",
      "data-component-content": "%7B%22className%22%3A%22py-16%20px-4%22%7D",
      id: "benefits",
      className: "py-16 px-4",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/Benefits.jsx:34:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/Benefits.jsx",
        "data-component-line": "34",
        "data-component-file": "Benefits.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%22%7D",
        className: "max-w-7xl mx-auto",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/Benefits.jsx:35:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Benefits.jsx",
            "data-component-line": "35",
            "data-component-file": "Benefits.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                "data-lov-id": "src/components/Benefits.jsx:36:10",
                "data-lov-name": "h2",
                "data-component-path": "src/components/Benefits.jsx",
                "data-component-line": "36",
                "data-component-file": "Benefits.jsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22text%22%3A%22Why%20Choose%20PaddyGuard%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                className: "text-3xl md:text-4xl font-bold mb-4",
                children: "Why Choose PaddyGuard",
              }),
              v.jsx("p", {
                "data-lov-id": "src/components/Benefits.jsx:39:10",
                "data-lov-name": "p",
                "data-component-path": "src/components/Benefits.jsx",
                "data-component-line": "39",
                "data-component-file": "Benefits.jsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22text%22%3A%22Our%20advanced%20plant%20disease%20detection%20offers%20numerous%20advantages%20for%5Cn%20%20%20%20%20%20%20%20%20%20%20%20gardeners%2C%20farmers%20and%20plant%20enthusiasts.%22%2C%22className%22%3A%22text-xl%20text-gray-600%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children:
                  "Our advanced plant disease detection offers numerous advantages for gardeners, farmers and plant enthusiasts.",
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/Benefits.jsx:45:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Benefits.jsx",
            "data-component-line": "45",
            "data-component-file": "Benefits.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
            className: "grid md:grid-cols-2 gap-8",
            children: aj.map((e, t) =>
              v.jsxs(
                "div",
                {
                  "data-lov-id": "src/components/Benefits.jsx:47:12",
                  "data-lov-name": "div",
                  "data-component-path": "src/components/Benefits.jsx",
                  "data-component-line": "47",
                  "data-component-file": "Benefits.jsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-8%20border%20rounded-lg%20hover%3Aborder-leaf%20transition-colors%20flex%20items-start%20space-x-5%22%7D",
                  className:
                    "p-8 border rounded-lg hover:border-leaf transition-colors flex items-start space-x-5",
                  children: [
                    v.jsx("div", {
                      "data-lov-id": "src/components/Benefits.jsx:51:14",
                      "data-lov-name": "div",
                      "data-component-path": "src/components/Benefits.jsx",
                      "data-component-line": "51",
                      "data-component-file": "Benefits.jsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-3%20rounded-full%20bg-leaf%2F10%20flex-shrink-0%22%7D",
                      className: "p-3 rounded-full bg-leaf/10 flex-shrink-0",
                      children: e.icon,
                    }),
                    v.jsxs("div", {
                      "data-lov-id": "src/components/Benefits.jsx:54:14",
                      "data-lov-name": "div",
                      "data-component-path": "src/components/Benefits.jsx",
                      "data-component-line": "54",
                      "data-component-file": "Benefits.jsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        v.jsx("h3", {
                          "data-lov-id": "src/components/Benefits.jsx:55:16",
                          "data-lov-name": "h3",
                          "data-component-path": "src/components/Benefits.jsx",
                          "data-component-line": "55",
                          "data-component-file": "Benefits.jsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
                          className: "text-xl font-semibold mb-2",
                          children: e.title,
                        }),
                        v.jsx("p", {
                          "data-lov-id": "src/components/Benefits.jsx:56:16",
                          "data-lov-name": "p",
                          "data-component-path": "src/components/Benefits.jsx",
                          "data-component-line": "56",
                          "data-component-file": "Benefits.jsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-gray-600%22%7D",
                          className: "text-gray-600",
                          children: e.description,
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    }),
  ij = () => {
    const [e, t] = j.useState(null),
      [n, o] = j.useState(!1),
      [r, a] = j.useState(!1),
      [s, i] = j.useState(null),
      { toast: l } = Sm(),
      c = j.useRef(null),
      d = (y) => {
        y.preventDefault(), o(!0);
      },
      p = () => {
        o(!1);
      },
      u = (y) => {
        y.preventDefault(),
          o(!1),
          y.dataTransfer.files &&
            y.dataTransfer.files[0] &&
            w(y.dataTransfer.files[0]);
      },
      x = (y) => {
        y.target.files && y.target.files[0] && w(y.target.files[0]);
      },
      w = (y) => {
        if (!y.type.match("image.*")) {
          l({
            title: "Invalid file type",
            description: "Please upload an image file (JPEG, PNG, etc.)",
            variant: "destructive",
          });
          return;
        }
        const m = new FileReader();
        (m.onload = (f) => {
          var h;
          (h = f.target) != null && h.result && (t(f.target.result), i(null));
        }),
          m.readAsDataURL(y);
      },
      g = async () => {
        if (e) {
          a(!0), i(null);
          try {
            const y = new FormData(),
              f = await (await fetch(e)).blob();
            y.append("file", f, "leaf-image.jpg");
            const S = await (
              await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                body: y,
              })
            ).json();
            if (S.prediction)
              i(S.prediction),
                l({
                  title: "Analysis Complete",
                  description: `Prediction: ${S.prediction}`,
                });
            else throw new Error("No prediction received");
          } catch (y) {
            console.error("Error analyzing image:", y),
              l({
                title: "Error",
                description: "Something went wrong during image analysis.",
                variant: "destructive",
              });
          } finally {
            a(!1);
          }
        }
      };
    return v.jsx("section", {
      "data-lov-id": "src/components/ImageUploadSection.jsx:104:4",
      "data-lov-name": "section",
      "data-component-path": "src/components/ImageUploadSection.jsx",
      "data-component-line": "104",
      "data-component-file": "ImageUploadSection.jsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-white%20to-gray-50%20px-4%22%7D",
      id: "try-now",
      className: "py-16 bg-gradient-to-b from-white to-gray-50 px-4",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/ImageUploadSection.jsx:108:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/ImageUploadSection.jsx",
        "data-component-line": "108",
        "data-component-file": "ImageUploadSection.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
        className: "max-w-4xl mx-auto",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/ImageUploadSection.jsx:109:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/ImageUploadSection.jsx",
            "data-component-line": "109",
            "data-component-file": "ImageUploadSection.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-12%22%7D",
            className: "text-center mb-12",
            children: [
              v.jsx("h2", {
                "data-lov-id": "src/components/ImageUploadSection.jsx:110:10",
                "data-lov-name": "h2",
                "data-component-path": "src/components/ImageUploadSection.jsx",
                "data-component-line": "110",
                "data-component-file": "ImageUploadSection.jsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22text%22%3A%22Try%20PaddyGuard%20Now%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                className: "text-3xl md:text-4xl font-bold mb-4",
                children: "Try PaddyGuard Now",
              }),
              v.jsx("p", {
                "data-lov-id": "src/components/ImageUploadSection.jsx:113:10",
                "data-lov-name": "p",
                "data-component-path": "src/components/ImageUploadSection.jsx",
                "data-component-line": "113",
                "data-component-file": "ImageUploadSection.jsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22text%22%3A%22Upload%20a%20photo%20of%20your%20plant's%20leaves%20to%20get%20an%20instant%20diagnosis.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20It's%20free%20and%20no%20registration%20required.%22%2C%22className%22%3A%22text-xl%20text-gray-600%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children:
                  "Upload a photo of your plant's leaves to get an instant diagnosis. It's free and no registration required.",
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/ImageUploadSection.jsx:119:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/ImageUploadSection.jsx",
            "data-component-line": "119",
            "data-component-file": "ImageUploadSection.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22bg-white%20rounded-xl%20shadow-lg%20p-6%20md%3Ap-8%22%7D",
            className: "bg-white rounded-xl shadow-lg p-6 md:p-8",
            children: e
              ? v.jsxs("div", {
                  "data-lov-id": "src/components/ImageUploadSection.jsx:154:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src/components/ImageUploadSection.jsx",
                  "data-component-line": "154",
                  "data-component-file": "ImageUploadSection.jsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-8%22%7D",
                  className: "space-y-8",
                  children: [
                    v.jsxs("div", {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:155:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "155",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22relative%20rounded-lg%20overflow-hidden%22%7D",
                      className: "relative rounded-lg overflow-hidden",
                      children: [
                        v.jsx("img", {
                          "data-lov-id":
                            "src/components/ImageUploadSection.jsx:156:16",
                          "data-lov-name": "img",
                          "data-component-path":
                            "src/components/ImageUploadSection.jsx",
                          "data-component-line": "156",
                          "data-component-file": "ImageUploadSection.jsx",
                          "data-component-name": "img",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%20h-auto%22%7D",
                          src: e,
                          alt: "Uploaded leaf",
                          className: "w-full h-auto",
                        }),
                        v.jsx(bo, {
                          "data-lov-id":
                            "src/components/ImageUploadSection.jsx:161:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src/components/ImageUploadSection.jsx",
                          "data-component-line": "161",
                          "data-component-file": "ImageUploadSection.jsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22text%22%3A%22Change%20Image%22%2C%22className%22%3A%22absolute%20top-4%20right-4%22%7D",
                          variant: "outline",
                          size: "sm",
                          className: "absolute top-4 right-4",
                          onClick: () => t(null),
                          children: "Change Image",
                        }),
                      ],
                    }),
                    s
                      ? v.jsx("div", {
                          "data-lov-id":
                            "src/components/ImageUploadSection.jsx:190:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src/components/ImageUploadSection.jsx",
                          "data-component-line": "190",
                          "data-component-file": "ImageUploadSection.jsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22bg-leaf%2F10%20border%20border-leaf%20p-6%20rounded-lg%22%7D",
                          className:
                            "bg-leaf/10 border border-leaf p-6 rounded-lg",
                          children: v.jsxs("div", {
                            "data-lov-id":
                              "src/components/ImageUploadSection.jsx:191:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src/components/ImageUploadSection.jsx",
                            "data-component-line": "191",
                            "data-component-file": "ImageUploadSection.jsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20items-start%20space-x-4%22%7D",
                            className: "flex items-start space-x-4",
                            children: [
                              v.jsx(Kg, {
                                "data-lov-id":
                                  "src/components/ImageUploadSection.jsx:192:20",
                                "data-lov-name": "Check",
                                "data-component-path":
                                  "src/components/ImageUploadSection.jsx",
                                "data-component-line": "192",
                                "data-component-file": "ImageUploadSection.jsx",
                                "data-component-name": "Check",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-6%20h-6%20text-leaf%20mt-1%20flex-shrink-0%22%7D",
                                className:
                                  "w-6 h-6 text-leaf mt-1 flex-shrink-0",
                              }),
                              v.jsxs("div", {
                                "data-lov-id":
                                  "src/components/ImageUploadSection.jsx:193:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src/components/ImageUploadSection.jsx",
                                "data-component-line": "193",
                                "data-component-file": "ImageUploadSection.jsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  v.jsx("h3", {
                                    "data-lov-id":
                                      "src/components/ImageUploadSection.jsx:194:22",
                                    "data-lov-name": "h3",
                                    "data-component-path":
                                      "src/components/ImageUploadSection.jsx",
                                    "data-component-line": "194",
                                    "data-component-file":
                                      "ImageUploadSection.jsx",
                                    "data-component-name": "h3",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Diagnosis%20Result%22%2C%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
                                    className: "text-xl font-semibold mb-2",
                                    children: "Diagnosis Result",
                                  }),
                                  v.jsx("p", {
                                    "data-lov-id":
                                      "src/components/ImageUploadSection.jsx:197:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src/components/ImageUploadSection.jsx",
                                    "data-component-line": "197",
                                    "data-component-file":
                                      "ImageUploadSection.jsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-gray-700%22%7D",
                                    className: "text-gray-700",
                                    children: s,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : v.jsx("div", {
                          "data-lov-id":
                            "src/components/ImageUploadSection.jsx:172:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src/components/ImageUploadSection.jsx",
                          "data-component-line": "172",
                          "data-component-file": "ImageUploadSection.jsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20justify-center%22%7D",
                          className: "flex justify-center",
                          children: v.jsx(bo, {
                            "data-lov-id":
                              "src/components/ImageUploadSection.jsx:173:18",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src/components/ImageUploadSection.jsx",
                            "data-component-line": "173",
                            "data-component-file": "ImageUploadSection.jsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22bg-leaf%20hover%3Abg-leaf-dark%22%7D",
                            size: "lg",
                            className: "bg-leaf hover:bg-leaf-dark",
                            onClick: g,
                            disabled: r,
                            children: r
                              ? v.jsxs(v.Fragment, {
                                  children: [
                                    "Analyzing...",
                                    v.jsx("div", {
                                      "data-lov-id":
                                        "src/components/ImageUploadSection.jsx:182:24",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src/components/ImageUploadSection.jsx",
                                      "data-component-line": "182",
                                      "data-component-file":
                                        "ImageUploadSection.jsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22ml-2%20animate-spin%20h-4%20w-4%20border-2%20border-white%20border-t-transparent%20rounded-full%22%7D",
                                      className:
                                        "ml-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full",
                                    }),
                                  ],
                                })
                              : v.jsx(v.Fragment, {
                                  children: "Analyze Image",
                                }),
                          }),
                        }),
                  ],
                })
              : v.jsxs("div", {
                  "data-lov-id": "src/components/ImageUploadSection.jsx:121:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src/components/ImageUploadSection.jsx",
                  "data-component-line": "121",
                  "data-component-file": "ImageUploadSection.jsx",
                  "data-component-name": "div",
                  "data-component-content": "%7B%7D",
                  className: `leaf-image-upload border-2 border-dashed rounded-lg p-6 text-center transition-all ${n ? "border-leaf bg-leaf/5" : "border-gray-300"}`,
                  onDragOver: d,
                  onDragLeave: p,
                  onDrop: u,
                  children: [
                    v.jsx("input", {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:129:14",
                      "data-lov-name": "input",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "129",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "input",
                      "data-component-content":
                        "%7B%22className%22%3A%22hidden%22%7D",
                      type: "file",
                      ref: c,
                      className: "hidden",
                      accept: "image/*",
                      onChange: x,
                    }),
                    v.jsx(ax, {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:137:14",
                      "data-lov-name": "Upload",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "137",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "Upload",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-16%20h-16%20text-leaf%20mb-4%20mx-auto%22%7D",
                      className: "w-16 h-16 text-leaf mb-4 mx-auto",
                    }),
                    v.jsx("h3", {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:138:14",
                      "data-lov-name": "h3",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "138",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "h3",
                      "data-component-content":
                        "%7B%22text%22%3A%22Upload%20Your%20Leaf%20Image%22%2C%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
                      className: "text-xl font-semibold mb-2",
                      children: "Upload Your Leaf Image",
                    }),
                    v.jsx("p", {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:141:14",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "141",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22text%22%3A%22Drag%20and%20drop%20an%20image%20here%2C%20or%20click%20the%20button%20below%22%2C%22className%22%3A%22text-gray-500%20mb-4%22%7D",
                      className: "text-gray-500 mb-4",
                      children:
                        "Drag and drop an image here, or click the button below",
                    }),
                    v.jsxs(bo, {
                      "data-lov-id":
                        "src/components/ImageUploadSection.jsx:145:14",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src/components/ImageUploadSection.jsx",
                      "data-component-line": "145",
                      "data-component-file": "ImageUploadSection.jsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Select%20Image%22%2C%22className%22%3A%22bg-leaf%20hover%3Abg-leaf-dark%22%7D",
                      type: "button",
                      className: "bg-leaf hover:bg-leaf-dark",
                      onClick: () => {
                        var y;
                        return (y = c.current) == null ? void 0 : y.click();
                      },
                      children: [
                        v.jsx(Zg, {
                          "data-lov-id":
                            "src/components/ImageUploadSection.jsx:150:16",
                          "data-lov-name": "ImageIcon",
                          "data-component-path":
                            "src/components/ImageUploadSection.jsx",
                          "data-component-line": "150",
                          "data-component-file": "ImageUploadSection.jsx",
                          "data-component-name": "ImageIcon",
                          "data-component-content":
                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                          className: "mr-2 h-4 w-4",
                        }),
                        " Select Image",
                      ],
                    }),
                  ],
                }),
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/ImageUploadSection.jsx:206:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/ImageUploadSection.jsx",
            "data-component-line": "206",
            "data-component-file": "ImageUploadSection.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22mt-10%20flex%20justify-center%22%7D",
            className: "mt-10 flex justify-center",
            children: v.jsxs("div", {
              "data-lov-id": "src/components/ImageUploadSection.jsx:207:10",
              "data-lov-name": "div",
              "data-component-path": "src/components/ImageUploadSection.jsx",
              "data-component-line": "207",
              "data-component-file": "ImageUploadSection.jsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
              className: "flex items-center text-sm text-gray-500",
              children: [
                v.jsx(Gg, {
                  "data-lov-id": "src/components/ImageUploadSection.jsx:208:12",
                  "data-lov-name": "AlertCircle",
                  "data-component-path":
                    "src/components/ImageUploadSection.jsx",
                  "data-component-line": "208",
                  "data-component-file": "ImageUploadSection.jsx",
                  "data-component-name": "AlertCircle",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                  className: "w-4 h-4 mr-2",
                }),
                v.jsx("p", {
                  "data-lov-id": "src/components/ImageUploadSection.jsx:209:12",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src/components/ImageUploadSection.jsx",
                  "data-component-line": "209",
                  "data-component-file": "ImageUploadSection.jsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22text%22%3A%22For%20demonstration%20purposes%20only.%20In%20a%20real%20app%2C%20analysis%20would%20be%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20performed%20by%20our%20AI.%22%7D",
                  children:
                    "For demonstration purposes only. In a real app, analysis would be performed by our AI.",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
var tu = "Avatar",
  [lj, Tj] = Oc(tu),
  [cj, Jh] = lj(tu),
  ev = j.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...o } = e,
      [r, a] = j.useState("idle");
    return v.jsx(cj, {
      scope: n,
      imageLoadingStatus: r,
      onImageLoadingStatusChange: a,
      children: v.jsx(Ee.span, { ...o, ref: t }),
    });
  });
ev.displayName = tu;
var tv = "AvatarImage",
  nv = j.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: o,
        onLoadingStatusChange: r = () => {},
        ...a
      } = e,
      s = Jh(tv, n),
      i = uj(o, a.referrerPolicy),
      l = wt((c) => {
        r(c), s.onImageLoadingStatusChange(c);
      });
    return (
      Kt(() => {
        i !== "idle" && l(i);
      }, [i, l]),
      i === "loaded" ? v.jsx(Ee.img, { ...a, ref: t, src: o }) : null
    );
  });
nv.displayName = tv;
var ov = "AvatarFallback",
  rv = j.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: o, ...r } = e,
      a = Jh(ov, n),
      [s, i] = j.useState(o === void 0);
    return (
      j.useEffect(() => {
        if (o !== void 0) {
          const l = window.setTimeout(() => i(!0), o);
          return () => window.clearTimeout(l);
        }
      }, [o]),
      s && a.imageLoadingStatus !== "loaded"
        ? v.jsx(Ee.span, { ...r, ref: t })
        : null
    );
  });
rv.displayName = ov;
function uj(e, t) {
  const [n, o] = j.useState("idle");
  return (
    Kt(() => {
      if (!e) {
        o("error");
        return;
      }
      let r = !0;
      const a = new window.Image(),
        s = (i) => () => {
          r && o(i);
        };
      return (
        o("loading"),
        (a.onload = s("loaded")),
        (a.onerror = s("error")),
        (a.src = e),
        t && (a.referrerPolicy = t),
        () => {
          r = !1;
        }
      );
    }, [e, t]),
    n
  );
}
var av = ev,
  sv = nv,
  iv = rv;
const lv = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(av, {
    "data-lov-id": "src/components/ui/avatar.jsx:7:2",
    "data-lov-name": "AvatarPrimitive.Root",
    "data-component-path": "src/components/ui/avatar.jsx",
    "data-component-line": "7",
    "data-component-file": "avatar.jsx",
    "data-component-name": "AvatarPrimitive.Root",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  })
);
lv.displayName = av.displayName;
const cv = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(sv, {
    "data-lov-id": "src/components/ui/avatar.jsx:19:2",
    "data-lov-name": "AvatarPrimitive.Image",
    "data-component-path": "src/components/ui/avatar.jsx",
    "data-component-line": "19",
    "data-component-file": "avatar.jsx",
    "data-component-name": "AvatarPrimitive.Image",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("aspect-square h-full w-full", e),
    ...t,
  })
);
cv.displayName = sv.displayName;
const uv = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(iv, {
    "data-lov-id": "src/components/ui/avatar.jsx:28:2",
    "data-lov-name": "AvatarPrimitive.Fallback",
    "data-component-path": "src/components/ui/avatar.jsx",
    "data-component-line": "28",
    "data-component-file": "avatar.jsx",
    "data-component-name": "AvatarPrimitive.Fallback",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
uv.displayName = iv.displayName;
const dv = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    "data-lov-id": "src/components/ui/card.jsx:6:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "6",
    "data-component-file": "card.jsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
dv.displayName = "Card";
const dj = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    "data-lov-id": "src/components/ui/card.jsx:18:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "18",
    "data-component-file": "card.jsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
dj.displayName = "CardHeader";
const pj = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("h3", {
    "data-lov-id": "src/components/ui/card.jsx:27:2",
    "data-lov-name": "h3",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "27",
    "data-component-file": "card.jsx",
    "data-component-name": "h3",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
pj.displayName = "CardTitle";
const fj = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("p", {
    "data-lov-id": "src/components/ui/card.jsx:39:2",
    "data-lov-name": "p",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "39",
    "data-component-file": "card.jsx",
    "data-component-name": "p",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("text-sm text-muted-foreground", e),
    ...t,
  })
);
fj.displayName = "CardDescription";
const pv = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    "data-lov-id": "src/components/ui/card.jsx:48:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "48",
    "data-component-file": "card.jsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("p-6 pt-0", e),
    ...t,
  })
);
pv.displayName = "CardContent";
const mj = j.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    "data-lov-id": "src/components/ui/card.jsx:53:2",
    "data-lov-name": "div",
    "data-component-path": "src/components/ui/card.jsx",
    "data-component-line": "53",
    "data-component-file": "card.jsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    ref: n,
    className: ke("flex items-center p-6 pt-0", e),
    ...t,
  })
);
mj.displayName = "CardFooter";
const hj = [
    {
      quote:
        "PaddyGuard saved my tomato crop! The app identified early blight before it spread to my entire garden.",
      name: "Sarah Johnson",
      role: "Home Gardener",
      avatar: "SJ",
    },
    {
      quote:
        "As a commercial farmer, time is money. This tool helps me spot issues early and take targeted action.",
      name: "Michael Rodriguez",
      role: "Organic Farmer",
      avatar: "MR",
    },
    {
      quote:
        "I've tried several plant apps, but PaddyGuard is the most accurate. It correctly identified a rare fungus on my orchids.",
      name: "Emma Chen",
      role: "Plant Enthusiast",
      avatar: "EC",
    },
  ],
  vj = () =>
    v.jsx("section", {
      "data-lov-id": "src/components/Testimonials.jsx:29:4",
      "data-lov-name": "section",
      "data-component-path": "src/components/Testimonials.jsx",
      "data-component-line": "29",
      "data-component-file": "Testimonials.jsx",
      "data-component-name": "section",
      "data-component-content":
        "%7B%22className%22%3A%22py-16%20bg-gray-50%20px-4%22%7D",
      className: "py-16 bg-gray-50 px-4",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/Testimonials.jsx:30:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/Testimonials.jsx",
        "data-component-line": "30",
        "data-component-file": "Testimonials.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%22%7D",
        className: "max-w-7xl mx-auto",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/Testimonials.jsx:31:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Testimonials.jsx",
            "data-component-line": "31",
            "data-component-file": "Testimonials.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                "data-lov-id": "src/components/Testimonials.jsx:32:10",
                "data-lov-name": "h2",
                "data-component-path": "src/components/Testimonials.jsx",
                "data-component-line": "32",
                "data-component-file": "Testimonials.jsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22text%22%3A%22What%20Users%20Say%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                className: "text-3xl md:text-4xl font-bold mb-4",
                children: "What Users Say",
              }),
              v.jsx("p", {
                "data-lov-id": "src/components/Testimonials.jsx:33:10",
                "data-lov-name": "p",
                "data-component-path": "src/components/Testimonials.jsx",
                "data-component-line": "33",
                "data-component-file": "Testimonials.jsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22text%22%3A%22Join%20thousands%20of%20satisfied%20gardeners%20and%20farmers%20who%20trust%20PaddyGuard%20for%20their%20plant%20care.%22%2C%22className%22%3A%22text-xl%20text-gray-600%20max-w-3xl%20mx-auto%22%7D",
                className: "text-xl text-gray-600 max-w-3xl mx-auto",
                children:
                  "Join thousands of satisfied gardeners and farmers who trust PaddyGuard for their plant care.",
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/Testimonials.jsx:38:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Testimonials.jsx",
            "data-component-line": "38",
            "data-component-file": "Testimonials.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
            className: "grid md:grid-cols-3 gap-8",
            children: hj.map((e, t) =>
              v.jsx(
                dv,
                {
                  "data-lov-id": "src/components/Testimonials.jsx:40:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src/components/Testimonials.jsx",
                  "data-component-line": "40",
                  "data-component-file": "Testimonials.jsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22leaf-card%22%7D",
                  className: "leaf-card",
                  children: v.jsx(pv, {
                    "data-lov-id": "src/components/Testimonials.jsx:41:14",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/components/Testimonials.jsx",
                    "data-component-line": "41",
                    "data-component-file": "Testimonials.jsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22pt-6%22%7D",
                    className: "pt-6",
                    children: v.jsxs("div", {
                      "data-lov-id": "src/components/Testimonials.jsx:42:16",
                      "data-lov-name": "div",
                      "data-component-path": "src/components/Testimonials.jsx",
                      "data-component-line": "42",
                      "data-component-file": "Testimonials.jsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20flex-col%20h-full%22%7D",
                      className: "flex flex-col h-full",
                      children: [
                        v.jsxs("blockquote", {
                          "data-lov-id":
                            "src/components/Testimonials.jsx:43:18",
                          "data-lov-name": "blockquote",
                          "data-component-path":
                            "src/components/Testimonials.jsx",
                          "data-component-line": "43",
                          "data-component-file": "Testimonials.jsx",
                          "data-component-name": "blockquote",
                          "data-component-content":
                            "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-gray-700%20mb-6%20flex-grow%22%7D",
                          className: "text-gray-700 mb-6 flex-grow",
                          children: ['"', e.quote, '"'],
                        }),
                        v.jsxs("div", {
                          "data-lov-id":
                            "src/components/Testimonials.jsx:46:18",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src/components/Testimonials.jsx",
                          "data-component-line": "46",
                          "data-component-file": "Testimonials.jsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%22%7D",
                          className: "flex items-center",
                          children: [
                            v.jsxs(lv, {
                              "data-lov-id":
                                "src/components/Testimonials.jsx:47:20",
                              "data-lov-name": "Avatar",
                              "data-component-path":
                                "src/components/Testimonials.jsx",
                              "data-component-line": "47",
                              "data-component-file": "Testimonials.jsx",
                              "data-component-name": "Avatar",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-10%20w-10%20mr-4%20border-2%20border-leaf%2F20%22%7D",
                              className:
                                "h-10 w-10 mr-4 border-2 border-leaf/20",
                              children: [
                                v.jsx(cv, {
                                  "data-lov-id":
                                    "src/components/Testimonials.jsx:48:22",
                                  "data-lov-name": "AvatarImage",
                                  "data-component-path":
                                    "src/components/Testimonials.jsx",
                                  "data-component-line": "48",
                                  "data-component-file": "Testimonials.jsx",
                                  "data-component-name": "AvatarImage",
                                  "data-component-content": "%7B%7D",
                                  src: "",
                                  alt: e.name,
                                }),
                                v.jsx(uv, {
                                  "data-lov-id":
                                    "src/components/Testimonials.jsx:49:22",
                                  "data-lov-name": "AvatarFallback",
                                  "data-component-path":
                                    "src/components/Testimonials.jsx",
                                  "data-component-line": "49",
                                  "data-component-file": "Testimonials.jsx",
                                  "data-component-name": "AvatarFallback",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22bg-leaf%2F10%20text-leaf%22%7D",
                                  className: "bg-leaf/10 text-leaf",
                                  children: e.avatar,
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              "data-lov-id":
                                "src/components/Testimonials.jsx:53:20",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src/components/Testimonials.jsx",
                              "data-component-line": "53",
                              "data-component-file": "Testimonials.jsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              children: [
                                v.jsx("div", {
                                  "data-lov-id":
                                    "src/components/Testimonials.jsx:54:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src/components/Testimonials.jsx",
                                  "data-component-line": "54",
                                  "data-component-file": "Testimonials.jsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22font-semibold%22%7D",
                                  className: "font-semibold",
                                  children: e.name,
                                }),
                                v.jsx("div", {
                                  "data-lov-id":
                                    "src/components/Testimonials.jsx:55:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src/components/Testimonials.jsx",
                                  "data-component-line": "55",
                                  "data-component-file": "Testimonials.jsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%20text-gray-500%22%7D",
                                  className: "text-sm text-gray-500",
                                  children: e.role,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                t
              )
            ),
          }),
        ],
      }),
    }),
  gj = () =>
    v.jsx("footer", {
      "data-lov-id": "src/components/Footer.jsx:7:4",
      "data-lov-name": "footer",
      "data-component-path": "src/components/Footer.jsx",
      "data-component-line": "7",
      "data-component-file": "Footer.jsx",
      "data-component-name": "footer",
      "data-component-content":
        "%7B%22className%22%3A%22bg-gray-900%20text-white%20py-12%20px-4%22%7D",
      className: "bg-gray-900 text-white py-12 px-4",
      children: v.jsxs("div", {
        "data-lov-id": "src/components/Footer.jsx:8:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/Footer.jsx",
        "data-component-line": "8",
        "data-component-file": "Footer.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22max-w-7xl%20mx-auto%22%7D",
        className: "max-w-7xl mx-auto",
        children: [
          v.jsxs("div", {
            "data-lov-id": "src/components/Footer.jsx:9:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-line": "9",
            "data-component-file": "Footer.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-4%20gap-12%22%7D",
            className: "grid grid-cols-1 md:grid-cols-4 gap-12",
            children: [
              v.jsxs("div", {
                "data-lov-id": "src/components/Footer.jsx:10:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-line": "10",
                "data-component-file": "Footer.jsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                className: "space-y-4",
                children: [
                  v.jsxs("div", {
                    "data-lov-id": "src/components/Footer.jsx:11:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "11",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                    className: "flex items-center space-x-2",
                    children: [
                      v.jsx(Xm, {
                        "data-lov-id": "src/components/Footer.jsx:12:14",
                        "data-lov-name": "Leaf",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "12",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "Leaf",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-leaf%22%7D",
                        className: "w-8 h-8 text-leaf",
                      }),
                      v.jsx("span", {
                        "data-lov-id": "src/components/Footer.jsx:13:14",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "13",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "span",
                        "data-component-content":
                          "%7B%22text%22%3A%22PaddyGuard%22%2C%22className%22%3A%22text-xl%20font-bold%22%7D",
                        className: "text-xl font-bold",
                        children: "PaddyGuard",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    "data-lov-id": "src/components/Footer.jsx:15:12",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "15",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22text%22%3A%22Empowering%20gardeners%20and%20farmers%20with%20AI-powered%20plant%20disease%20detection.%22%2C%22className%22%3A%22text-gray-400%20pr-4%22%7D",
                    className: "text-gray-400 pr-4",
                    children:
                      "Empowering gardeners and farmers with AI-powered plant disease detection.",
                  }),
                  v.jsxs("div", {
                    "data-lov-id": "src/components/Footer.jsx:18:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "18",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20space-x-4%20pt-2%22%7D",
                    className: "flex space-x-4 pt-2",
                    children: [
                      v.jsx("a", {
                        "data-lov-id": "src/components/Footer.jsx:19:14",
                        "data-lov-name": "a",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "19",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "a",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: v.jsx(rx, {
                          "data-lov-id": "src/components/Footer.jsx:20:16",
                          "data-lov-name": "Twitter",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "20",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "Twitter",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                          className: "w-5 h-5",
                        }),
                      }),
                      v.jsx("a", {
                        "data-lov-id": "src/components/Footer.jsx:22:14",
                        "data-lov-name": "a",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "22",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "a",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: v.jsx(Jg, {
                          "data-lov-id": "src/components/Footer.jsx:23:16",
                          "data-lov-name": "Instagram",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "23",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "Instagram",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                          className: "w-5 h-5",
                        }),
                      }),
                      v.jsx("a", {
                        "data-lov-id": "src/components/Footer.jsx:25:14",
                        "data-lov-name": "a",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "25",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "a",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition-colors",
                        children: v.jsx(qg, {
                          "data-lov-id": "src/components/Footer.jsx:26:16",
                          "data-lov-name": "Github",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "26",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "Github",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                          className: "w-5 h-5",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                "data-lov-id": "src/components/Footer.jsx:31:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-line": "31",
                "data-component-file": "Footer.jsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  v.jsx("h3", {
                    "data-lov-id": "src/components/Footer.jsx:32:12",
                    "data-lov-name": "h3",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "32",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "h3",
                    "data-component-content":
                      "%7B%22text%22%3A%22Product%22%2C%22className%22%3A%22font-semibold%20text-lg%20mb-4%22%7D",
                    className: "font-semibold text-lg mb-4",
                    children: "Product",
                  }),
                  v.jsxs("ul", {
                    "data-lov-id": "src/components/Footer.jsx:33:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "33",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:34:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "34",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:35:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "35",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Features%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Features",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:39:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "39",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:40:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "40",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22How%20It%20Works%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "How It Works",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:44:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "44",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:45:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "45",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Pricing%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Pricing",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:49:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "49",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:50:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "50",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22FAQ%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "FAQ",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                "data-lov-id": "src/components/Footer.jsx:57:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-line": "57",
                "data-component-file": "Footer.jsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  v.jsx("h3", {
                    "data-lov-id": "src/components/Footer.jsx:58:12",
                    "data-lov-name": "h3",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "58",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "h3",
                    "data-component-content":
                      "%7B%22text%22%3A%22Resources%22%2C%22className%22%3A%22font-semibold%20text-lg%20mb-4%22%7D",
                    className: "font-semibold text-lg mb-4",
                    children: "Resources",
                  }),
                  v.jsxs("ul", {
                    "data-lov-id": "src/components/Footer.jsx:59:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "59",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:60:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "60",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:61:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "61",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Plant%20Care%20Guide%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Plant Care Guide",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:65:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "65",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:66:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "66",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Disease%20Library%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Disease Library",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:70:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "70",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:71:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "71",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Blog%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Blog",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:75:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "75",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:76:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "76",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Community%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Community",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                "data-lov-id": "src/components/Footer.jsx:83:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.jsx",
                "data-component-line": "83",
                "data-component-file": "Footer.jsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  v.jsx("h3", {
                    "data-lov-id": "src/components/Footer.jsx:84:12",
                    "data-lov-name": "h3",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "84",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "h3",
                    "data-component-content":
                      "%7B%22text%22%3A%22Company%22%2C%22className%22%3A%22font-semibold%20text-lg%20mb-4%22%7D",
                    className: "font-semibold text-lg mb-4",
                    children: "Company",
                  }),
                  v.jsxs("ul", {
                    "data-lov-id": "src/components/Footer.jsx:85:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src/components/Footer.jsx",
                    "data-component-line": "85",
                    "data-component-file": "Footer.jsx",
                    "data-component-name": "ul",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:86:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "86",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:87:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "87",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22About%20Us%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "About Us",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:91:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "91",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:92:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "92",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Contact%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Contact",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:96:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "96",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:97:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "97",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Privacy%20Policy%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Privacy Policy",
                        }),
                      }),
                      v.jsx("li", {
                        "data-lov-id": "src/components/Footer.jsx:101:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Footer.jsx",
                        "data-component-line": "101",
                        "data-component-file": "Footer.jsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: v.jsx("a", {
                          "data-lov-id": "src/components/Footer.jsx:102:16",
                          "data-lov-name": "a",
                          "data-component-path": "src/components/Footer.jsx",
                          "data-component-line": "102",
                          "data-component-file": "Footer.jsx",
                          "data-component-name": "a",
                          "data-component-content":
                            "%7B%22text%22%3A%22Terms%20of%20Service%22%2C%22className%22%3A%22text-gray-400%20hover%3Atext-white%20transition-colors%22%7D",
                          href: "#",
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "Terms of Service",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            "data-lov-id": "src/components/Footer.jsx:110:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Footer.jsx",
            "data-component-line": "110",
            "data-component-file": "Footer.jsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22border-t%20border-gray-800%20mt-12%20pt-8%20text-center%20text-gray-400%22%7D",
            className:
              "border-t border-gray-800 mt-12 pt-8 text-center text-gray-400",
            children: v.jsxs("p", {
              "data-lov-id": "src/components/Footer.jsx:111:10",
              "data-lov-name": "p",
              "data-component-path": "src/components/Footer.jsx",
              "data-component-line": "111",
              "data-component-file": "Footer.jsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22text%22%3A%22%C2%A9%20PaddyGuard.%20All%20rights%20reserved.%22%7D",
              children: [
                "© ",
                new Date().getFullYear(),
                " PaddyGuard. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    }),
  xj = () =>
    v.jsxs("div", {
      "data-lov-id": "src/pages/Index.jsx:12:4",
      "data-lov-name": "div",
      "data-component-path": "src/pages/Index.jsx",
      "data-component-line": "12",
      "data-component-file": "Index.jsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22min-h-screen%20flex%20flex-col%22%7D",
      className: "min-h-screen flex flex-col",
      children: [
        v.jsx(ej, {
          "data-lov-id": "src/pages/Index.jsx:13:6",
          "data-lov-name": "NavBar",
          "data-component-path": "src/pages/Index.jsx",
          "data-component-line": "13",
          "data-component-file": "Index.jsx",
          "data-component-name": "NavBar",
          "data-component-content": "%7B%7D",
        }),
        v.jsxs("main", {
          "data-lov-id": "src/pages/Index.jsx:14:6",
          "data-lov-name": "main",
          "data-component-path": "src/pages/Index.jsx",
          "data-component-line": "14",
          "data-component-file": "Index.jsx",
          "data-component-name": "main",
          "data-component-content": "%7B%22className%22%3A%22flex-grow%22%7D",
          className: "flex-grow",
          children: [
            v.jsx(nj, {
              "data-lov-id": "src/pages/Index.jsx:15:8",
              "data-lov-name": "HeroSection",
              "data-component-path": "src/pages/Index.jsx",
              "data-component-line": "15",
              "data-component-file": "Index.jsx",
              "data-component-name": "HeroSection",
              "data-component-content": "%7B%7D",
            }),
            v.jsx(ij, {
              "data-lov-id": "src/pages/Index.jsx:16:8",
              "data-lov-name": "ImageUploadSection",
              "data-component-path": "src/pages/Index.jsx",
              "data-component-line": "16",
              "data-component-file": "Index.jsx",
              "data-component-name": "ImageUploadSection",
              "data-component-content": "%7B%7D",
            }),
            v.jsx(rj, {
              "data-lov-id": "src/pages/Index.jsx:17:8",
              "data-lov-name": "HowItWorks",
              "data-component-path": "src/pages/Index.jsx",
              "data-component-line": "17",
              "data-component-file": "Index.jsx",
              "data-component-name": "HowItWorks",
              "data-component-content": "%7B%7D",
            }),
            v.jsx(sj, {
              "data-lov-id": "src/pages/Index.jsx:18:8",
              "data-lov-name": "Benefits",
              "data-component-path": "src/pages/Index.jsx",
              "data-component-line": "18",
              "data-component-file": "Index.jsx",
              "data-component-name": "Benefits",
              "data-component-content": "%7B%7D",
            }),
            v.jsx(vj, {
              "data-lov-id": "src/pages/Index.jsx:19:8",
              "data-lov-name": "Testimonials",
              "data-component-path": "src/pages/Index.jsx",
              "data-component-line": "19",
              "data-component-file": "Index.jsx",
              "data-component-name": "Testimonials",
              "data-component-content": "%7B%7D",
            }),
          ],
        }),
        v.jsx(gj, {
          "data-lov-id": "src/pages/Index.jsx:21:6",
          "data-lov-name": "Footer",
          "data-component-path": "src/pages/Index.jsx",
          "data-component-line": "21",
          "data-component-file": "Index.jsx",
          "data-component-name": "Footer",
          "data-component-content": "%7B%7D",
        }),
      ],
    }),
  yj = () => {
    const e = Zh();
    return (
      j.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      v.jsx("div", {
        "data-lov-id": "src/pages/NotFound.jsx:15:4",
        "data-lov-name": "div",
        "data-component-path": "src/pages/NotFound.jsx",
        "data-component-line": "15",
        "data-component-file": "NotFound.jsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-gray-100%22%7D",
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: v.jsxs("div", {
          "data-lov-id": "src/pages/NotFound.jsx:16:6",
          "data-lov-name": "div",
          "data-component-path": "src/pages/NotFound.jsx",
          "data-component-line": "16",
          "data-component-file": "NotFound.jsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
          className: "text-center",
          children: [
            v.jsx("h1", {
              "data-lov-id": "src/pages/NotFound.jsx:17:8",
              "data-lov-name": "h1",
              "data-component-path": "src/pages/NotFound.jsx",
              "data-component-line": "17",
              "data-component-file": "NotFound.jsx",
              "data-component-name": "h1",
              "data-component-content":
                "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-4xl%20font-bold%20mb-4%22%7D",
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            v.jsx("p", {
              "data-lov-id": "src/pages/NotFound.jsx:18:8",
              "data-lov-name": "p",
              "data-component-path": "src/pages/NotFound.jsx",
              "data-component-line": "18",
              "data-component-file": "NotFound.jsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22text-xl%20text-gray-600%20mb-4%22%7D",
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            v.jsx("a", {
              "data-lov-id": "src/pages/NotFound.jsx:19:8",
              "data-lov-name": "a",
              "data-component-path": "src/pages/NotFound.jsx",
              "data-component-line": "19",
              "data-component-file": "NotFound.jsx",
              "data-component-name": "a",
              "data-component-content":
                "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20hover%3Atext-blue-700%20underline%22%7D",
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  wj = new fw(),
  jj = () =>
    v.jsx(hw, {
      "data-lov-id": "src/App.jsx:12:2",
      "data-lov-name": "QueryClientProvider",
      "data-component-path": "src/App.jsx",
      "data-component-line": "12",
      "data-component-file": "App.jsx",
      "data-component-name": "QueryClientProvider",
      "data-component-content": "%7B%7D",
      client: wj,
      children: v.jsxs(W1, {
        "data-lov-id": "src/App.jsx:13:4",
        "data-lov-name": "TooltipProvider",
        "data-component-path": "src/App.jsx",
        "data-component-line": "13",
        "data-component-file": "App.jsx",
        "data-component-name": "TooltipProvider",
        "data-component-content": "%7B%7D",
        children: [
          v.jsx($x, {
            "data-lov-id": "src/App.jsx:14:6",
            "data-lov-name": "Toaster",
            "data-component-path": "src/App.jsx",
            "data-component-line": "14",
            "data-component-file": "App.jsx",
            "data-component-name": "Toaster",
            "data-component-content": "%7B%7D",
          }),
          v.jsx(gy, {
            "data-lov-id": "src/App.jsx:15:6",
            "data-lov-name": "Sonner",
            "data-component-path": "src/App.jsx",
            "data-component-line": "15",
            "data-component-file": "App.jsx",
            "data-component-name": "Sonner",
            "data-component-content": "%7B%7D",
          }),
          v.jsx(Jw, {
            "data-lov-id": "src/App.jsx:16:6",
            "data-lov-name": "BrowserRouter",
            "data-component-path": "src/App.jsx",
            "data-component-line": "16",
            "data-component-file": "App.jsx",
            "data-component-name": "BrowserRouter",
            "data-component-content": "%7B%7D",
            children: v.jsxs(Xw, {
              "data-lov-id": "src/App.jsx:17:8",
              "data-lov-name": "Routes",
              "data-component-path": "src/App.jsx",
              "data-component-line": "17",
              "data-component-file": "App.jsx",
              "data-component-name": "Routes",
              "data-component-content": "%7B%7D",
              children: [
                v.jsx(Ul, {
                  "data-lov-id": "src/App.jsx:18:10",
                  "data-lov-name": "Route",
                  "data-component-path": "src/App.jsx",
                  "data-component-line": "18",
                  "data-component-file": "App.jsx",
                  "data-component-name": "Route",
                  "data-component-content": "%7B%7D",
                  path: "/",
                  element: v.jsx(xj, {
                    "data-lov-id": "src/App.jsx:18:35",
                    "data-lov-name": "Index",
                    "data-component-path": "src/App.jsx",
                    "data-component-line": "18",
                    "data-component-file": "App.jsx",
                    "data-component-name": "Index",
                    "data-component-content": "%7B%7D",
                  }),
                }),
                v.jsx(Ul, {
                  "data-lov-id": "src/App.jsx:20:10",
                  "data-lov-name": "Route",
                  "data-component-path": "src/App.jsx",
                  "data-component-line": "20",
                  "data-component-file": "App.jsx",
                  "data-component-name": "Route",
                  "data-component-content": "%7B%7D",
                  path: "*",
                  element: v.jsx(yj, {
                    "data-lov-id": "src/App.jsx:20:35",
                    "data-lov-name": "NotFound",
                    "data-component-path": "src/App.jsx",
                    "data-component-line": "20",
                    "data-component-file": "App.jsx",
                    "data-component-name": "NotFound",
                    "data-component-content": "%7B%7D",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  qd = document.getElementById("root");
qd &&
  jm(qd).render(
    v.jsx(jj, {
      "data-lov-id": "src/main.jsx:8:33",
      "data-lov-name": "App",
      "data-component-path": "src/main.jsx",
      "data-component-line": "8",
      "data-component-file": "main.jsx",
      "data-component-name": "App",
      "data-component-content": "%7B%7D",
    })
  );
