function Ty(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var _h = { exports: {} },
  gl = {},
  Uu = { exports: {} },
  te = {},
  Jp;
function Py() {
  if (Jp) return te;
  Jp = 1;
  var s = Symbol.for("react.element"),
    l = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    v = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    M = Symbol.iterator;
  function V(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (M && k[M]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var Le = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ne = Object.assign,
    Qe = {};
  function tt(k, T, X) {
    (this.props = k),
      (this.context = T),
      (this.refs = Qe),
      (this.updater = X || Le);
  }
  (tt.prototype.isReactComponent = {}),
    (tt.prototype.setState = function (k, T) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, T, "setState");
    }),
    (tt.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function Ft() {}
  Ft.prototype = tt.prototype;
  function Vt(k, T, X) {
    (this.props = k),
      (this.context = T),
      (this.refs = Qe),
      (this.updater = X || Le);
  }
  var xt = (Vt.prototype = new Ft());
  (xt.constructor = Vt), Ne(xt, tt.prototype), (xt.isPureReactComponent = !0);
  var Ve = Array.isArray,
    he = { current: null },
    ot = { current: null },
    st = { transition: null },
    Ut = {
      ReactCurrentDispatcher: he,
      ReactCurrentCache: ot,
      ReactCurrentBatchConfig: st,
      ReactCurrentOwner: { current: null },
    },
    Je = Object.prototype.hasOwnProperty,
    ht = Ut.ReactCurrentOwner;
  function at(k, T, X) {
    var H,
      q = {},
      oe = null,
      ge = null;
    if (T != null)
      for (H in (T.ref !== void 0 && (ge = T.ref),
      T.key !== void 0 && (oe = "" + T.key),
      T))
        Je.call(T, H) &&
          H !== "key" &&
          H !== "ref" &&
          H !== "__self" &&
          H !== "__source" &&
          (q[H] = T[H]);
    var Ce = arguments.length - 2;
    if (Ce === 1) q.children = X;
    else if (1 < Ce) {
      for (var me = Array(Ce), ct = 0; ct < Ce; ct++)
        me[ct] = arguments[ct + 2];
      q.children = me;
    }
    if (k && k.defaultProps)
      for (H in ((Ce = k.defaultProps), Ce)) q[H] === void 0 && (q[H] = Ce[H]);
    return {
      $$typeof: s,
      type: k,
      key: oe,
      ref: ge,
      props: q,
      _owner: ht.current,
    };
  }
  function fn(k, T) {
    return {
      $$typeof: s,
      type: k.type,
      key: T,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function Et(k) {
    return typeof k == "object" && k !== null && k.$$typeof === s;
  }
  function Xt(k) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (X) {
        return T[X];
      })
    );
  }
  var nt = /\/+/g;
  function O(k, T) {
    return typeof k == "object" && k !== null && k.key != null
      ? Xt("" + k.key)
      : T.toString(36);
  }
  function G() {}
  function Y(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (
          (typeof k.status == "string"
            ? k.then(G, G)
            : ((k.status = "pending"),
              k.then(
                function (T) {
                  k.status === "pending" &&
                    ((k.status = "fulfilled"), (k.value = T));
                },
                function (T) {
                  k.status === "pending" &&
                    ((k.status = "rejected"), (k.reason = T));
                }
              )),
          k.status)
        ) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function ue(k, T, X, H, q) {
    var oe = typeof k;
    (oe === "undefined" || oe === "boolean") && (k = null);
    var ge = !1;
    if (k === null) ge = !0;
    else
      switch (oe) {
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case s:
            case l:
              ge = !0;
              break;
            case I:
              return (ge = k._init), ue(ge(k._payload), T, X, H, q);
          }
      }
    if (ge)
      return (
        (q = q(k)),
        (ge = H === "" ? "." + O(k, 0) : H),
        Ve(q)
          ? ((X = ""),
            ge != null && (X = ge.replace(nt, "$&/") + "/"),
            ue(q, T, X, "", function (ct) {
              return ct;
            }))
          : q != null &&
            (Et(q) &&
              (q = fn(
                q,
                X +
                  (!q.key || (k && k.key === q.key)
                    ? ""
                    : ("" + q.key).replace(nt, "$&/") + "/") +
                  ge
              )),
            T.push(q)),
        1
      );
    ge = 0;
    var Ce = H === "" ? "." : H + ":";
    if (Ve(k))
      for (var me = 0; me < k.length; me++)
        (H = k[me]), (oe = Ce + O(H, me)), (ge += ue(H, T, X, oe, q));
    else if (((me = V(k)), typeof me == "function"))
      for (k = me.call(k), me = 0; !(H = k.next()).done; )
        (H = H.value), (oe = Ce + O(H, me++)), (ge += ue(H, T, X, oe, q));
    else if (oe === "object") {
      if (typeof k.then == "function") return ue(Y(k), T, X, H, q);
      throw (
        ((T = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ge;
  }
  function ye(k, T, X) {
    if (k == null) return k;
    var H = [],
      q = 0;
    return (
      ue(k, H, "", "", function (oe) {
        return T.call(X, oe, q++);
      }),
      H
    );
  }
  function Jt(k) {
    if (k._status === -1) {
      var T = k._result;
      (T = T()),
        T.then(
          function (X) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = X));
          },
          function (X) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = X));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = T));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  function mt() {
    return new WeakMap();
  }
  function $t() {
    return { s: 0, v: void 0, o: null, p: null };
  }
  function ut() {}
  var Zt =
    typeof reportError == "function"
      ? reportError
      : function (k) {
          console.error(k);
        };
  return (
    (te.Children = {
      map: ye,
      forEach: function (k, T, X) {
        ye(
          k,
          function () {
            T.apply(this, arguments);
          },
          X
        );
      },
      count: function (k) {
        var T = 0;
        return (
          ye(k, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (k) {
        return (
          ye(k, function (T) {
            return T;
          }) || []
        );
      },
      only: function (k) {
        if (!Et(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (te.Component = tt),
    (te.Fragment = a),
    (te.Profiler = d),
    (te.PureComponent = Vt),
    (te.StrictMode = u),
    (te.Suspense = P),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ut),
    (te.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (te.cache = function (k) {
      return function () {
        var T = ot.current;
        if (!T) return k.apply(null, arguments);
        var X = T.getCacheForType(mt);
        (T = X.get(k)), T === void 0 && ((T = $t()), X.set(k, T)), (X = 0);
        for (var H = arguments.length; X < H; X++) {
          var q = arguments[X];
          if (typeof q == "function" || (typeof q == "object" && q !== null)) {
            var oe = T.o;
            oe === null && (T.o = oe = new WeakMap()),
              (T = oe.get(q)),
              T === void 0 && ((T = $t()), oe.set(q, T));
          } else
            (oe = T.p),
              oe === null && (T.p = oe = new Map()),
              (T = oe.get(q)),
              T === void 0 && ((T = $t()), oe.set(q, T));
        }
        if (T.s === 1) return T.v;
        if (T.s === 2) throw T.v;
        try {
          var ge = k.apply(null, arguments);
          return (X = T), (X.s = 1), (X.v = ge);
        } catch (Ce) {
          throw ((ge = T), (ge.s = 2), (ge.v = Ce), Ce);
        }
      };
    }),
    (te.cloneElement = function (k, T, X) {
      if (k == null)
        throw Error(
          "The argument must be a React element, but you passed " + k + "."
        );
      var H = Ne({}, k.props),
        q = k.key,
        oe = k.ref,
        ge = k._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((oe = T.ref), (ge = ht.current)),
          T.key !== void 0 && (q = "" + T.key),
          k.type && k.type.defaultProps)
        )
          var Ce = k.type.defaultProps;
        for (me in T)
          Je.call(T, me) &&
            me !== "key" &&
            me !== "ref" &&
            me !== "__self" &&
            me !== "__source" &&
            (H[me] = T[me] === void 0 && Ce !== void 0 ? Ce[me] : T[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) H.children = X;
      else if (1 < me) {
        Ce = Array(me);
        for (var ct = 0; ct < me; ct++) Ce[ct] = arguments[ct + 2];
        H.children = Ce;
      }
      return {
        $$typeof: s,
        type: k.type,
        key: q,
        ref: oe,
        props: H,
        _owner: ge,
      };
    }),
    (te.createContext = function (k) {
      return (
        (k = {
          $$typeof: v,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (te.createElement = at),
    (te.createFactory = function (k) {
      var T = at.bind(null, k);
      return (T.type = k), T;
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (k) {
      return { $$typeof: g, render: k };
    }),
    (te.isValidElement = Et),
    (te.lazy = function (k) {
      return { $$typeof: I, _payload: { _status: -1, _result: k }, _init: Jt };
    }),
    (te.memo = function (k, T) {
      return { $$typeof: E, type: k, compare: T === void 0 ? null : T };
    }),
    (te.startTransition = function (k) {
      var T = st.transition,
        X = new Set();
      st.transition = { _callbacks: X };
      var H = st.transition;
      try {
        var q = k();
        typeof q == "object" &&
          q !== null &&
          typeof q.then == "function" &&
          (X.forEach(function (oe) {
            return oe(H, q);
          }),
          q.then(ut, Zt));
      } catch (oe) {
        Zt(oe);
      } finally {
        st.transition = T;
      }
    }),
    (te.unstable_useCacheRefresh = function () {
      return he.current.useCacheRefresh();
    }),
    (te.use = function (k) {
      return he.current.use(k);
    }),
    (te.useCallback = function (k, T) {
      return he.current.useCallback(k, T);
    }),
    (te.useContext = function (k) {
      return he.current.useContext(k);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (k, T) {
      return he.current.useDeferredValue(k, T);
    }),
    (te.useEffect = function (k, T) {
      return he.current.useEffect(k, T);
    }),
    (te.useId = function () {
      return he.current.useId();
    }),
    (te.useImperativeHandle = function (k, T, X) {
      return he.current.useImperativeHandle(k, T, X);
    }),
    (te.useInsertionEffect = function (k, T) {
      return he.current.useInsertionEffect(k, T);
    }),
    (te.useLayoutEffect = function (k, T) {
      return he.current.useLayoutEffect(k, T);
    }),
    (te.useMemo = function (k, T) {
      return he.current.useMemo(k, T);
    }),
    (te.useOptimistic = function (k, T) {
      return he.current.useOptimistic(k, T);
    }),
    (te.useReducer = function (k, T, X) {
      return he.current.useReducer(k, T, X);
    }),
    (te.useRef = function (k) {
      return he.current.useRef(k);
    }),
    (te.useState = function (k) {
      return he.current.useState(k);
    }),
    (te.useSyncExternalStore = function (k, T, X) {
      return he.current.useSyncExternalStore(k, T, X);
    }),
    (te.useTransition = function () {
      return he.current.useTransition();
    }),
    (te.version = "18.3.0-canary-14898b6a9-20240318"),
    te
  );
}
var qp;
function rc() {
  return qp || ((qp = 1), (Uu.exports = Py())), Uu.exports;
}
var bp;
function Ry() {
  if (bp) return gl;
  bp = 1;
  var s = rc(),
    l = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  function f(v, g, P) {
    var E,
      I = {},
      M = null,
      V = null;
    P !== void 0 && (M = "" + P),
      g.key !== void 0 && (M = "" + g.key),
      g.ref !== void 0 && (V = g.ref);
    for (E in g) u.call(g, E) && E !== "key" && E !== "ref" && (I[E] = g[E]);
    if (v && v.defaultProps)
      for (E in ((g = v.defaultProps), g)) I[E] === void 0 && (I[E] = g[E]);
    return {
      $$typeof: l,
      type: v,
      key: M,
      ref: V,
      props: I,
      _owner: d.current,
    };
  }
  return (gl.Fragment = a), (gl.jsx = f), (gl.jsxs = f), gl;
}
_h.exports = Ry();
var z = _h.exports,
  Sh = { exports: {} },
  je = {},
  $u = { exports: {} },
  Zu = {},
  eh;
function jy() {
  return (
    eh ||
      ((eh = 1),
      (function (s) {
        function l(O, G) {
          var Y = O.length;
          O.push(G);
          e: for (; 0 < Y; ) {
            var ue = (Y - 1) >>> 1,
              ye = O[ue];
            if (0 < d(ye, G)) (O[ue] = G), (O[Y] = ye), (Y = ue);
            else break e;
          }
        }
        function a(O) {
          return O.length === 0 ? null : O[0];
        }
        function u(O) {
          if (O.length === 0) return null;
          var G = O[0],
            Y = O.pop();
          if (Y !== G) {
            O[0] = Y;
            e: for (var ue = 0, ye = O.length, Jt = ye >>> 1; ue < Jt; ) {
              var mt = 2 * (ue + 1) - 1,
                $t = O[mt],
                ut = mt + 1,
                Zt = O[ut];
              if (0 > d($t, Y))
                ut < ye && 0 > d(Zt, $t)
                  ? ((O[ue] = Zt), (O[ut] = Y), (ue = ut))
                  : ((O[ue] = $t), (O[mt] = Y), (ue = mt));
              else if (ut < ye && 0 > d(Zt, Y))
                (O[ue] = Zt), (O[ut] = Y), (ue = ut);
              else break e;
            }
          }
          return G;
        }
        function d(O, G) {
          var Y = O.sortIndex - G.sortIndex;
          return Y !== 0 ? Y : O.id - G.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          s.unstable_now = function () {
            return f.now();
          };
        } else {
          var v = Date,
            g = v.now();
          s.unstable_now = function () {
            return v.now() - g;
          };
        }
        var P = [],
          E = [],
          I = 1,
          M = null,
          V = 3,
          Le = !1,
          Ne = !1,
          Qe = !1,
          tt = typeof setTimeout == "function" ? setTimeout : null,
          Ft = typeof clearTimeout == "function" ? clearTimeout : null,
          Vt = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function xt(O) {
          for (var G = a(E); G !== null; ) {
            if (G.callback === null) u(E);
            else if (G.startTime <= O)
              u(E), (G.sortIndex = G.expirationTime), l(P, G);
            else break;
            G = a(E);
          }
        }
        function Ve(O) {
          if (((Qe = !1), xt(O), !Ne))
            if (a(P) !== null) (Ne = !0), Xt();
            else {
              var G = a(E);
              G !== null && nt(Ve, G.startTime - O);
            }
        }
        var he = !1,
          ot = -1,
          st = 5,
          Ut = -1;
        function Je() {
          return !(s.unstable_now() - Ut < st);
        }
        function ht() {
          if (he) {
            var O = s.unstable_now();
            Ut = O;
            var G = !0;
            try {
              e: {
                (Ne = !1), Qe && ((Qe = !1), Ft(ot), (ot = -1)), (Le = !0);
                var Y = V;
                try {
                  t: {
                    for (
                      xt(O), M = a(P);
                      M !== null && !(M.expirationTime > O && Je());

                    ) {
                      var ue = M.callback;
                      if (typeof ue == "function") {
                        (M.callback = null), (V = M.priorityLevel);
                        var ye = ue(M.expirationTime <= O);
                        if (((O = s.unstable_now()), typeof ye == "function")) {
                          (M.callback = ye), xt(O), (G = !0);
                          break t;
                        }
                        M === a(P) && u(P), xt(O);
                      } else u(P);
                      M = a(P);
                    }
                    if (M !== null) G = !0;
                    else {
                      var Jt = a(E);
                      Jt !== null && nt(Ve, Jt.startTime - O), (G = !1);
                    }
                  }
                  break e;
                } finally {
                  (M = null), (V = Y), (Le = !1);
                }
                G = void 0;
              }
            } finally {
              G ? at() : (he = !1);
            }
          }
        }
        var at;
        if (typeof Vt == "function")
          at = function () {
            Vt(ht);
          };
        else if (typeof MessageChannel < "u") {
          var fn = new MessageChannel(),
            Et = fn.port2;
          (fn.port1.onmessage = ht),
            (at = function () {
              Et.postMessage(null);
            });
        } else
          at = function () {
            tt(ht, 0);
          };
        function Xt() {
          he || ((he = !0), at());
        }
        function nt(O, G) {
          ot = tt(function () {
            O(s.unstable_now());
          }, G);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            Ne || Le || ((Ne = !0), Xt());
          }),
          (s.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (st = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return V;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return a(P);
          }),
          (s.unstable_next = function (O) {
            switch (V) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = V;
            }
            var Y = V;
            V = G;
            try {
              return O();
            } finally {
              V = Y;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (O, G) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Y = V;
            V = O;
            try {
              return G();
            } finally {
              V = Y;
            }
          }),
          (s.unstable_scheduleCallback = function (O, G, Y) {
            var ue = s.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? ue + Y : ue))
                : (Y = ue),
              O)
            ) {
              case 1:
                var ye = -1;
                break;
              case 2:
                ye = 250;
                break;
              case 5:
                ye = 1073741823;
                break;
              case 4:
                ye = 1e4;
                break;
              default:
                ye = 5e3;
            }
            return (
              (ye = Y + ye),
              (O = {
                id: I++,
                callback: G,
                priorityLevel: O,
                startTime: Y,
                expirationTime: ye,
                sortIndex: -1,
              }),
              Y > ue
                ? ((O.sortIndex = Y),
                  l(E, O),
                  a(P) === null &&
                    O === a(E) &&
                    (Qe ? (Ft(ot), (ot = -1)) : (Qe = !0), nt(Ve, Y - ue)))
                : ((O.sortIndex = ye), l(P, O), Ne || Le || ((Ne = !0), Xt())),
              O
            );
          }),
          (s.unstable_shouldYield = Je),
          (s.unstable_wrapCallback = function (O) {
            var G = V;
            return function () {
              var Y = V;
              V = G;
              try {
                return O.apply(this, arguments);
              } finally {
                V = Y;
              }
            };
          });
      })(Zu)),
    Zu
  );
}
var th;
function Ly() {
  return th || ((th = 1), ($u.exports = jy())), $u.exports;
}
var nh;
function Oy() {
  if (nh) return je;
  nh = 1;
  var s = rc(),
    l = Ly(),
    a = {
      usingClientEntryPoint: !1,
      Events: null,
      Dispatcher: { current: null },
    };
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = Object.assign,
    f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    v = f.ReactCurrentDispatcher,
    g = { pending: !1, data: null, method: null, action: null },
    P = [],
    E = -1;
  function I(e) {
    return { current: e };
  }
  function M(e) {
    0 > E || ((e.current = P[E]), (P[E] = null), E--);
  }
  function V(e, t) {
    E++, (P[E] = e.current), (e.current = t);
  }
  var Le = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    Qe = Symbol.for("react.fragment"),
    tt = Symbol.for("react.strict_mode"),
    Ft = Symbol.for("react.profiler"),
    Vt = Symbol.for("react.provider"),
    xt = Symbol.for("react.consumer"),
    Ve = Symbol.for("react.context"),
    he = Symbol.for("react.forward_ref"),
    ot = Symbol.for("react.suspense"),
    st = Symbol.for("react.suspense_list"),
    Ut = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    ht = Symbol.for("react.scope"),
    at = Symbol.for("react.offscreen"),
    fn = Symbol.for("react.legacy_hidden"),
    Et = Symbol.for("react.cache"),
    Xt = Symbol.iterator;
  function nt(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Xt && e[Xt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = I(null),
    G = I(null),
    Y = I(null),
    ue = I(null),
    ye = {
      $$typeof: Ve,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    };
  function Jt(e, t) {
    switch ((V(Y, t), V(G, e), V(O, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Mp(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = Mp(e)), (t = Ap(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(O), V(O, t);
  }
  function mt() {
    M(O), M(G), M(Y);
  }
  function $t(e) {
    e.memoizedState !== null && V(ue, e);
    var t = O.current,
      n = Ap(t, e.type);
    t !== n && (V(G, e), V(O, n));
  }
  function ut(e) {
    G.current === e && (M(O), M(G)),
      ue.current === e && (M(ue), (ye._currentValue = null));
  }
  var Zt = l.unstable_scheduleCallback,
    k = l.unstable_cancelCallback,
    T = l.unstable_shouldYield,
    X = l.unstable_requestPaint,
    H = l.unstable_now,
    q = l.unstable_getCurrentPriorityLevel,
    oe = l.unstable_ImmediatePriority,
    ge = l.unstable_UserBlockingPriority,
    Ce = l.unstable_NormalPriority,
    me = l.unstable_LowPriority,
    ct = l.unstable_IdlePriority,
    qh = l.log,
    bh = l.unstable_setDisableYieldValue,
    ki = null,
    vt = null;
  function em(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
      try {
        vt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Pn(e) {
    if (
      (typeof qh == "function" && bh(e),
      vt && typeof vt.setStrictMode == "function")
    )
      try {
        vt.setStrictMode(ki, e);
      } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : rm,
    tm = Math.log,
    nm = Math.LN2;
  function rm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((tm(e) / nm) | 0)) | 0;
  }
  var Al = 128,
    Dl = 4194304;
  function wi(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Fl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes;
    e = e.pingedLanes;
    var o = n & 134217727;
    return (
      o !== 0
        ? ((n = o & ~i),
          n !== 0 ? (r = wi(n)) : ((e &= o), e !== 0 && (r = wi(e))))
        : ((n &= ~i), n !== 0 ? (r = wi(n)) : e !== 0 && (r = wi(e))),
      r === 0
        ? 0
        : t !== 0 &&
            t !== r &&
            !(t & i) &&
            ((i = r & -r),
            (e = t & -t),
            i >= e || (i === 32 && (e & 4194176) !== 0))
          ? t
          : r
    );
  }
  function im(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pc(e, t) {
    return e.errorRecoveryDisabledLanes & t
      ? 0
      : ((e = e.pendingLanes & -536870913),
        e !== 0 ? e : e & 536870912 ? 536870912 : 0);
  }
  function hc() {
    var e = Al;
    return (Al <<= 1), !(Al & 4194176) && (Al = 128), e;
  }
  function mc() {
    var e = Dl;
    return (Dl <<= 1), !(Dl & 62914560) && (Dl = 4194304), e;
  }
  function Rs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function lm(e, t, n) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.entangledLanes &= t),
      (e.errorRecoveryDisabledLanes &= t),
      (e.shellSuspendCounter = 0),
      (t = e.entanglements);
    for (var i = e.expirationTimes, o = e.hiddenUpdates; 0 < r; ) {
      var c = 31 - Ct(r),
        p = 1 << c;
      (t[c] = 0), (i[c] = -1);
      var m = o[c];
      if (m !== null)
        for (o[c] = null, c = 0; c < m.length; c++) {
          var _ = m[c];
          _ !== null && (_.lane &= -536870913);
        }
      r &= ~p;
    }
    n !== 0 && vc(e, n, 0);
  }
  function vc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - Ct(t);
    (e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194218));
  }
  function yc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Ct(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  function om(e, t) {
    for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
      var n = 1 << (31 - Ct(t));
      (e.entanglements[1] |= n), (t &= ~n);
    }
  }
  var _e = 0;
  function sm(e, t) {
    var n = _e;
    try {
      return (_e = e), t();
    } finally {
      _e = n;
    }
  }
  function gc(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  var js = Object.prototype.hasOwnProperty,
    Rn = Math.random().toString(36).slice(2),
    qe = "__reactFiber$" + Rn,
    jn = "__reactProps$" + Rn,
    pn = "__reactContainer$" + Rn,
    Ls = "__reactEvents$" + Rn,
    am = "__reactListeners$" + Rn,
    um = "__reactHandles$" + Rn,
    kc = "__reactResources$" + Rn,
    _i = "__reactMarker$" + Rn;
  function Os(e) {
    delete e[qe], delete e[jn], delete e[Ls], delete e[am], delete e[um];
  }
  function nr(e) {
    var t = e[qe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[pn] || n[qe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = $p(e); e !== null; ) {
            if ((n = e[qe])) return n;
            e = $p(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Nr(e) {
    if ((e = e[qe] || e[pn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Tr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Ln(e) {
    return e[jn] || null;
  }
  function Pr(e) {
    var t = e[kc];
    return (
      t ||
        (t = e[kc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ue(e) {
    e[_i] = !0;
  }
  var wc = new Set(),
    _c = {};
  function rr(e, t) {
    Rr(e, t), Rr(e + "Capture", t);
  }
  function Rr(e, t) {
    for (_c[e] = t, e = 0; e < t.length; e++) wc.add(t[e]);
  }
  var hn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Sc = {},
    xc = {};
  function dm(e) {
    return js.call(xc, e)
      ? !0
      : js.call(Sc, e)
        ? !1
        : cm.test(e)
          ? (xc[e] = !0)
          : ((Sc[e] = !0), !1);
  }
  function zs(e, t, n) {
    if (dm(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Is(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function mn(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  var Ms;
  function Si(e) {
    if (Ms === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ms = (t && t[1]) || "";
      }
    return (
      `
` +
      Ms +
      e
    );
  }
  var As = !1;
  function Ds(e, t) {
    if (!e || As) return "";
    As = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var r = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var j = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(j.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(j, []);
              } catch (C) {
                var x = C;
              }
              Reflect.construct(e, [], j);
            } else {
              try {
                j.call();
              } catch (C) {
                x = C;
              }
              e.call(j.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (C) {
              x = C;
            }
            (j = e()) &&
              typeof j.catch == "function" &&
              j.catch(function () {});
          }
        } catch (C) {
          if (C && x && typeof C.stack == "string") return [C.stack, x.stack];
        }
        return [null, null];
      },
    };
    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var i = Object.getOwnPropertyDescriptor(
      r.DetermineComponentFrameRoot,
      "name"
    );
    i &&
      i.configurable &&
      Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    try {
      var o = r.DetermineComponentFrameRoot(),
        c = o[0],
        p = o[1];
      if (c && p) {
        var m = c.split(`
`),
          _ = p.split(`
`);
        for (
          i = r = 0;
          r < m.length && !m[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; i < _.length && !_[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (r === m.length || i === _.length)
          for (
            r = m.length - 1, i = _.length - 1;
            1 <= r && 0 <= i && m[r] !== _[i];

          )
            i--;
        for (; 1 <= r && 0 <= i; r--, i--)
          if (m[r] !== _[i]) {
            if (r !== 1 || i !== 1)
              do
                if ((r--, i--, 0 > i || m[r] !== _[i])) {
                  var N =
                    `
` + m[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= r && 0 <= i);
            break;
          }
      }
    } finally {
      (As = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Si(n) : "";
  }
  function fm(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Si(e.type);
      case 16:
        return Si("Lazy");
      case 13:
        return Si("Suspense");
      case 19:
        return Si("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ds(e.type, !1)), e;
      case 11:
        return (e = Ds(e.type.render, !1)), e;
      case 1:
        return (e = Ds(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Ec(e) {
    try {
      var t = "";
      do (t += fm(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var pm = Symbol.for("react.client.reference");
  function Fs(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pm ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Qe:
        return "Fragment";
      case Ne:
        return "Portal";
      case Ft:
        return "Profiler";
      case tt:
        return "StrictMode";
      case ot:
        return "Suspense";
      case st:
        return "SuspenseList";
      case Et:
        return "Cache";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Vt:
          return (e._context.displayName || "Context") + ".Provider";
        case Ve:
          return (e.displayName || "Context") + ".Consumer";
        case he:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ut:
          return (
            (t = e.displayName || null), t !== null ? t : Fs(e.type) || "Memo"
          );
        case Je:
          (t = e._payload), (e = e._init);
          try {
            return Fs(e(t));
          } catch {}
      }
    return null;
  }
  function hm(e) {
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
      case 26:
      case 27:
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Fs(t);
      case 8:
        return t === tt ? "StrictMode" : "Mode";
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
  function Nt(e) {
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
  function Cc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function mm(e) {
    var t = Cc(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (c) {
            (r = "" + c), o.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = "" + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Vl(e) {
    e._valueTracker || (e._valueTracker = mm(e));
  }
  function Nc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Cc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ul(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var vm = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(vm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vs(e, t, n, r, i, o, c, p) {
    (e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Nt(t))
          : e.value !== "" + Nt(t) && (e.value = "" + Nt(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? Us(e, c, Nt(t))
        : n != null
          ? Us(e, c, Nt(n))
          : r != null && e.removeAttribute("value"),
      i == null && o != null && (e.defaultChecked = !!o),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + Nt(p))
        : e.removeAttribute("name");
  }
  function Tc(e, t, n, r, i, o, c, p) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) return;
      (n = n != null ? "" + Nt(n) : ""),
        (t = t != null ? "" + Nt(t) : n),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = r ?? i),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = p ? e.checked : !!r),
      (e.defaultChecked = !!r),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c);
  }
  function Us(e, t, n) {
    (t === "number" && Ul(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  var xi = Array.isArray;
  function jr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Pc(e, t, n) {
    if (
      t != null &&
      ((t = "" + Nt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Nt(n) : "";
  }
  function Rc(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(u(92));
        if (xi(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Nt(t)),
      (e.defaultValue = n),
      (r = e.textContent),
      r === n && r !== "" && r !== null && (e.value = r);
  }
  var $l;
  function jc(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $l = $l || document.createElement("div"),
          $l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  }
  var Lc = jc;
  typeof MSApp < "u" &&
    MSApp.execUnsafeLocalFunction &&
    (Lc = function (e, t) {
      return MSApp.execUnsafeLocalFunction(function () {
        return jc(e, t);
      });
    });
  var Oc = Lc;
  function Lr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ym = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zc(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : r
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || ym.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Ic(e, t, n) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var r in n)
        !n.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""));
      for (var i in t)
        (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && zc(e, i, r);
    } else for (var o in t) t.hasOwnProperty(o) && zc(e, o, t[o]);
  }
  function Mc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var gm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    $s = null;
  function Zs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Or = null,
    zr = null;
  function Ac(e) {
    var t = Nr(e);
    if (t && (e = t.stateNode)) {
      var n = Ln(e);
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Vs(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Tt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = Ln(r);
                if (!i) throw Error(u(90));
                Vs(
                  r,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (r = n[t]), r.form === e.form && Nc(r);
          }
          break e;
        case "textarea":
          Pc(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && jr(e, !!n.multiple, t, !1);
      }
    }
  }
  function Dc(e) {
    Or ? (zr ? zr.push(e) : (zr = [e])) : (Or = e);
  }
  function Fc() {
    if (Or) {
      var e = Or,
        t = zr;
      if (((zr = Or = null), Ac(e), t)) for (e = 0; e < t.length; e++) Ac(t[e]);
    }
  }
  function ir(e) {
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
  function Vc(e) {
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
  function Uc(e) {
    if (ir(e) !== e) throw Error(u(188));
  }
  function km(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ir(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return Uc(i), e;
          if (o === r) return Uc(i), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = i), (r = o);
      else {
        for (var c = !1, p = i.child; p; ) {
          if (p === n) {
            (c = !0), (n = i), (r = o);
            break;
          }
          if (p === r) {
            (c = !0), (r = i), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!c) {
          for (p = o.child; p; ) {
            if (p === n) {
              (c = !0), (n = o), (r = i);
              break;
            }
            if (p === r) {
              (c = !0), (r = o), (n = i);
              break;
            }
            p = p.sibling;
          }
          if (!c) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function $c(e) {
    return (e = km(e)), e !== null ? Zc(e) : null;
  }
  function Zc(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = Zc(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var On = {},
    Ge = I(On),
    dt = I(!1),
    zn = On;
  function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return On;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Zl() {
    M(dt), M(Ge);
  }
  function Bc(e, t, n) {
    if (Ge.current !== On) throw Error(u(168));
    V(Ge, t), V(dt, n);
  }
  function Hc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(u(108, hm(e) || "Unknown", i));
    return d({}, n, r);
  }
  function Bl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        On),
      (zn = Ge.current),
      V(Ge, e),
      V(dt, dt.current),
      !0
    );
  }
  function Wc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = Hc(e, t, zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        M(dt),
        M(Ge),
        V(Ge, e))
      : M(dt),
      V(dt, n);
  }
  function wm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : wm,
    Ir = [],
    Mr = 0,
    Hl = null,
    Wl = 0,
    Rt = [],
    jt = 0,
    or = null,
    vn = 1,
    yn = "";
  function sr(e, t) {
    (Ir[Mr++] = Wl), (Ir[Mr++] = Hl), (Hl = e), (Wl = t);
  }
  function Qc(e, t, n) {
    (Rt[jt++] = vn), (Rt[jt++] = yn), (Rt[jt++] = or), (or = e);
    var r = vn;
    e = yn;
    var i = 32 - Ct(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Ct(t) + i;
    if (30 < o) {
      var c = i - (i % 5);
      (o = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (i -= c),
        (vn = (1 << (32 - Ct(t) + i)) | (n << i) | r),
        (yn = o + e);
    } else (vn = (1 << o) | (n << i) | r), (yn = e);
  }
  function Ql(e) {
    e.return !== null && (sr(e, 1), Qc(e, 1, 0));
  }
  function Bs(e) {
    for (; e === Hl; )
      (Hl = Ir[--Mr]), (Ir[Mr] = null), (Wl = Ir[--Mr]), (Ir[Mr] = null);
    for (; e === or; )
      (or = Rt[--jt]),
        (Rt[jt] = null),
        (yn = Rt[--jt]),
        (Rt[jt] = null),
        (vn = Rt[--jt]),
        (Rt[jt] = null);
  }
  var pe = null,
    se = null,
    re = !1,
    Bt = null,
    qt = !1;
  function Gl(e, t) {
    var n = _t(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ar(e, t) {
    t.flags = (t.flags & -4097) | 2;
  }
  function Gc(e, t) {
    return (
      (t = ay(t, e.type, e.pendingProps, qt)),
      t !== null
        ? ((e.stateNode = t), (pe = e), (se = pl(t.firstChild)), (qt = !1), !0)
        : !1
    );
  }
  function Yc(e, t) {
    return (
      (t = uy(t, e.pendingProps, qt)),
      t !== null ? ((e.stateNode = t), (pe = e), (se = null), !0) : !1
    );
  }
  function Kc(e, t) {
    e: {
      var n = t;
      for (t = qt; n.nodeType !== 8; ) {
        if (!t) {
          t = null;
          break e;
        }
        if (((n = Mt(n)), n === null)) {
          t = null;
          break e;
        }
      }
      t = n;
    }
    return t !== null
      ? ((n = or !== null ? { id: vn, overflow: yn } : null),
        (e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 536870912,
        }),
        (n = _t(18, null, null, 0)),
        (n.stateNode = t),
        (n.return = e),
        (e.child = n),
        (pe = e),
        (se = null),
        !0)
      : !1;
  }
  function ar(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function In() {
    throw Error(u(418));
  }
  function Xc(e) {
    for (pe = e.return; pe; )
      switch (pe.tag) {
        case 3:
        case 27:
          qt = !0;
          return;
        case 5:
        case 13:
          qt = !1;
          return;
        default:
          pe = pe.return;
      }
  }
  function Ei(e) {
    if (e !== pe) return !1;
    if (!re) return Xc(e), (re = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Ru(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && (t = se))
    )
      if (ar(e)) Jc(), In();
      else for (; t; ) Gl(e, t), (t = Mt(t));
    if ((Xc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                se = Mt(e);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        se = null;
      }
    } else se = pe ? Mt(e.stateNode) : null;
    return !0;
  }
  function Jc() {
    for (var e = se; e; ) e = Mt(e);
  }
  function Dr() {
    (se = pe = null), (re = !1);
  }
  function Hs(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  var Lt = [],
    Fr = 0,
    Ws = 0;
  function Yl() {
    for (var e = Fr, t = (Ws = Fr = 0); t < e; ) {
      var n = Lt[t];
      Lt[t++] = null;
      var r = Lt[t];
      Lt[t++] = null;
      var i = Lt[t];
      Lt[t++] = null;
      var o = Lt[t];
      if (((Lt[t++] = null), r !== null && i !== null)) {
        var c = r.pending;
        c === null ? (i.next = i) : ((i.next = c.next), (c.next = i)),
          (r.pending = i);
      }
      o !== 0 && qc(n, i, o);
    }
  }
  function Kl(e, t, n, r) {
    (Lt[Fr++] = e),
      (Lt[Fr++] = t),
      (Lt[Fr++] = n),
      (Lt[Fr++] = r),
      (Ws |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r);
  }
  function Qs(e, t, n, r) {
    return Kl(e, t, n, r), Xl(e);
  }
  function Mn(e, t) {
    return Kl(e, null, null, t), Xl(e);
  }
  function qc(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var i = !1, o = e.return; o !== null; )
      (o.childLanes |= n),
        (r = o.alternate),
        r !== null && (r.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = o),
        (o = o.return);
    i &&
      t !== null &&
      e.tag === 3 &&
      ((o = e.stateNode),
      (i = 31 - Ct(n)),
      (o = o.hiddenUpdates),
      (e = o[i]),
      e === null ? (o[i] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function Xl(e) {
    Xa();
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Jl = null,
    Vr = null,
    Gs = !1,
    ql = !1,
    Ys = !1,
    Ur = 0;
  function yt(e) {
    e !== Vr &&
      e.next === null &&
      (Vr === null ? (Jl = Vr = e) : (Vr = Vr.next = e)),
      (ql = !0),
      Gs || ((Gs = !0), ed(Sm));
  }
  function ur(e) {
    if (!Ys && ql) {
      var t = null;
      Ys = !0;
      do
        for (var n = !1, r = Jl; r !== null; ) {
          if (!e || r.tag === 0) {
            var i = ce,
              o = Fl(r, r === ke ? i : 0);
            if (o & 3)
              try {
                if (((n = !0), (i = r), ie & 6)) throw Error(u(327));
                if (!li()) {
                  var c = Mo(i, o);
                  if (i.tag !== 0 && c === 2) {
                    var p = o,
                      m = pc(i, p);
                    m !== 0 && ((o = m), (c = zf(i, p, m)));
                  }
                  if (c === 1)
                    throw ((p = ti), wr(i, 0), an(i, o, 0), yt(i), p);
                  c === 6
                    ? an(i, o, pt)
                    : ((i.finishedWork = i.current.alternate),
                      (i.finishedLanes = o),
                      Ya(i, sn, Gi, ri, pt));
                }
                yt(i);
              } catch (_) {
                t === null ? (t = [_]) : t.push(_);
              }
          }
          r = r.next;
        }
      while (n);
      if (((Ys = !1), t !== null)) {
        if (1 < t.length) {
          if (typeof AggregateError == "function") throw new AggregateError(t);
          for (e = 1; e < t.length; e++) ed(_m.bind(null, t[e]));
        }
        throw t[0];
      }
    }
  }
  function _m(e) {
    throw e;
  }
  function Sm() {
    ql = Gs = !1;
    for (var e = H(), t = null, n = Jl; n !== null; ) {
      var r = n.next;
      if (Ur !== 0 && iy()) {
        var i = n,
          o = Ur;
        (i.pendingLanes |= 2),
          (i.entangledLanes |= 2),
          (i.entanglements[1] |= o);
      }
      (i = bc(n, e)),
        i === 0
          ? ((n.next = null),
            t === null ? (Jl = r) : (t.next = r),
            r === null && (Vr = t))
          : ((t = n), i & 3 && (ql = !0)),
        (n = r);
    }
    (Ur = 0), ur(!1);
  }
  function bc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var c = 31 - Ct(o),
        p = 1 << c,
        m = i[c];
      m === -1
        ? (!(p & n) || p & r) && (i[c] = im(p, t))
        : m <= t && (e.expiredLanes |= p),
        (o &= ~p);
    }
    if (
      ((t = ke),
      (n = ce),
      (n = Fl(e, e === t ? n : 0)),
      (r = e.callbackNode),
      n === 0 || (e === t && Pe === 2) || e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && k(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (n & 3)
      return (
        r !== null && r !== null && k(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    if (((t = n & -n), t === e.callbackPriority)) return t;
    switch ((r !== null && k(r), gc(n))) {
      case 2:
        n = oe;
        break;
      case 8:
        n = ge;
        break;
      case 32:
        n = Ce;
        break;
      case 268435456:
        n = ct;
        break;
      default:
        n = Ce;
    }
    return (
      (r = Of.bind(null, e)),
      (n = Zt(n, r)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  function ed(e) {
    oy(function () {
      ie & 6 ? Zt(oe, e) : e();
    });
  }
  function Ks() {
    return Ur === 0 && (Ur = hc()), Ur;
  }
  var Ci = null,
    Xs = 0,
    $r = 0,
    Zr = null;
  function xm(e, t) {
    if (Ci === null) {
      var n = (Ci = []);
      (Xs = 0),
        ($r = Ks()),
        (Zr = {
          status: "pending",
          value: void 0,
          then: function (r) {
            n.push(r);
          },
        });
    }
    return Xs++, t.then(td, td), t;
  }
  function td() {
    if (Ci !== null && --Xs === 0) {
      Zr !== null && (Zr.status = "fulfilled");
      var e = Ci;
      (Ci = null), ($r = 0), (Zr = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Em(e, t) {
    var n = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          (r.status = "fulfilled"), (r.value = t);
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (r.status = "rejected", r.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        }
      ),
      r
    );
  }
  var An = !1;
  function bl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Js(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function bt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ie & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        (t = Xl(e)),
        qc(e, null, n),
        t
      );
    }
    return Kl(e, r, t, n), Xl(e);
  }
  function Ni(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), yc(e, n);
    }
  }
  function nd(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (i = o = c) : (o = o.next = c), (n = n.next);
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var qs = !1;
  function Ti() {
    if (qs) {
      var e = Zr;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, n, r) {
    qs = !1;
    var i = e.updateQueue;
    An = !1;
    var o = i.firstBaseUpdate,
      c = i.lastBaseUpdate,
      p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var m = p,
        _ = m.next;
      (m.next = null), c === null ? (o = _) : (c.next = _), (c = m);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (p = N.lastBaseUpdate),
        p !== c &&
          (p === null ? (N.firstBaseUpdate = _) : (p.next = _),
          (N.lastBaseUpdate = m)));
    }
    if (o !== null) {
      var j = i.baseState;
      (c = 0), (N = _ = m = null), (p = o);
      do {
        var x = p.lane & -536870913,
          C = x !== p.lane;
        if (C ? (ce & x) === x : (r & x) === x) {
          x !== 0 && x === $r && (qs = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var $ = e,
              J = p;
            x = t;
            var Ee = n;
            switch (J.tag) {
              case 1:
                if ((($ = J.payload), typeof $ == "function")) {
                  j = $.call(Ee, j, x);
                  break e;
                }
                j = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = J.payload),
                  (x = typeof $ == "function" ? $.call(Ee, j, x) : $),
                  x == null)
                )
                  break e;
                j = d({}, j, x);
                break e;
              case 2:
                An = !0;
            }
          }
          (x = p.callback),
            x !== null &&
              ((e.flags |= 64),
              C && (e.flags |= 8192),
              (C = i.callbacks),
              C === null ? (i.callbacks = [x]) : C.push(x));
        } else
          (C = {
            lane: x,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            N === null ? ((_ = N = C), (m = j)) : (N = N.next = C),
            (c |= x);
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break;
          (C = p),
            (p = C.next),
            (C.next = null),
            (i.lastBaseUpdate = C),
            (i.shared.pending = null);
        }
      } while (!0);
      N === null && (m = j),
        (i.baseState = m),
        (i.firstBaseUpdate = _),
        (i.lastBaseUpdate = N),
        o === null && (i.shared.lanes = 0),
        (Zn |= c),
        (e.lanes = c),
        (e.memoizedState = j);
    }
  }
  function rd(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function id(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) rd(n[e], t);
  }
  function Ri(e, t) {
    if (Pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!js.call(t, i) || !Pt(e[i], t[i])) return !1;
    }
    return !0;
  }
  var eo = Error(u(460)),
    ld = Error(u(474)),
    bs = { then: function () {} };
  function od(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function to() {}
  function sd(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(to, to), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === eo ? Error(u(483)) : e);
      default:
        if (typeof t.status == "string") t.then(to, to);
        else {
          if (((e = ke), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "fulfilled"), (i.value = r);
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var i = t;
                  (i.status = "rejected"), (i.reason = r);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === eo ? Error(u(483)) : e);
        }
        throw ((ji = t), eo);
    }
  }
  var ji = null;
  function ad() {
    if (ji === null) throw Error(u(459));
    var e = ji;
    return (ji = null), e;
  }
  var Br = null,
    Li = 0;
  function no(e) {
    var t = Li;
    return (Li += 1), Br === null && (Br = []), sd(Br, e, t);
  }
  function Cm(e, t, n, r) {
    function i(p) {
      var m = c.refs;
      p === null ? delete m[o] : (m[o] = p);
    }
    if (((e = n._owner), !e))
      throw Error(typeof r != "string" ? u(284) : u(290, r));
    if (e.tag !== 1) throw Error(u(309));
    var o = "" + r,
      c = e.stateNode;
    if (!c) throw Error(u(147, o));
    return t !== null &&
      t.ref !== null &&
      typeof t.ref == "function" &&
      t.ref._stringRef === o
      ? t.ref
      : ((i._stringRef = o), i);
  }
  function Oi(e, t, n, r) {
    var i = r.ref;
    (e =
      i !== null && typeof i != "function" && typeof i != "object"
        ? Cm(e, t, r, i)
        : i),
      (n.ref = e);
  }
  function ro(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ud(e) {
    var t = e._init;
    return t(e._payload);
  }
  function cd(e) {
    function t(w, y) {
      if (e) {
        var S = w.deletions;
        S === null ? ((w.deletions = [y]), (w.flags |= 16)) : S.push(y);
      }
    }
    function n(w, y) {
      if (!e) return null;
      for (; y !== null; ) t(w, y), (y = y.sibling);
      return null;
    }
    function r(w, y) {
      for (w = new Map(); y !== null; )
        y.key !== null ? w.set(y.key, y) : w.set(y.index, y), (y = y.sibling);
      return w;
    }
    function i(w, y) {
      return (w = Hn(w, y)), (w.index = 0), (w.sibling = null), w;
    }
    function o(w, y, S) {
      return (
        (w.index = S),
        e
          ? ((S = w.alternate),
            S !== null
              ? ((S = S.index), S < y ? ((w.flags |= 33554434), y) : S)
              : ((w.flags |= 33554434), y))
          : ((w.flags |= 1048576), y)
      );
    }
    function c(w) {
      return e && w.alternate === null && (w.flags |= 33554434), w;
    }
    function p(w, y, S, R) {
      return y === null || y.tag !== 6
        ? ((y = ba(S, w.mode, R)), (y.return = w), y)
        : ((y = i(y, S)), (y.return = w), y);
    }
    function m(w, y, S, R) {
      var U = S.type;
      return U === Qe
        ? N(w, y, S.props.children, R, S.key)
        : y !== null &&
            (y.elementType === U ||
              (typeof U == "object" &&
                U !== null &&
                U.$$typeof === Je &&
                ud(U) === y.type))
          ? ((R = i(y, S.props)), Oi(w, y, R, S), (R.return = w), R)
          : ((R = Do(S.type, S.key, S.props, null, w.mode, R)),
            Oi(w, y, R, S),
            (R.return = w),
            R);
    }
    function _(w, y, S, R) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== S.containerInfo ||
        y.stateNode.implementation !== S.implementation
        ? ((y = eu(S, w.mode, R)), (y.return = w), y)
        : ((y = i(y, S.children || [])), (y.return = w), y);
    }
    function N(w, y, S, R, U) {
      return y === null || y.tag !== 7
        ? ((y = _r(S, w.mode, R, U)), (y.return = w), y)
        : ((y = i(y, S)), (y.return = w), y);
    }
    function j(w, y, S) {
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return (y = ba("" + y, w.mode, S)), (y.return = w), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Le:
            return (
              (S = Do(y.type, y.key, y.props, null, w.mode, S)),
              Oi(w, null, S, y),
              (S.return = w),
              S
            );
          case Ne:
            return (y = eu(y, w.mode, S)), (y.return = w), y;
          case Je:
            var R = y._init;
            return j(w, R(y._payload), S);
        }
        if (xi(y) || nt(y))
          return (y = _r(y, w.mode, S, null)), (y.return = w), y;
        if (typeof y.then == "function") return j(w, no(y), S);
        if (y.$$typeof === Ve) return j(w, xo(w, y, S), S);
        ro(w, y);
      }
      return null;
    }
    function x(w, y, S, R) {
      var U = y !== null ? y.key : null;
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return U !== null ? null : p(w, y, "" + S, R);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Le:
            return S.key === U ? m(w, y, S, R) : null;
          case Ne:
            return S.key === U ? _(w, y, S, R) : null;
          case Je:
            return (U = S._init), x(w, y, U(S._payload), R);
        }
        if (xi(S) || nt(S)) return U !== null ? null : N(w, y, S, R, null);
        if (typeof S.then == "function") return x(w, y, no(S), R);
        if (S.$$typeof === Ve) return x(w, y, xo(w, S, R), R);
        ro(w, S);
      }
      return null;
    }
    function C(w, y, S, R, U) {
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return (w = w.get(S) || null), p(y, w, "" + R, U);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Le:
            return (
              (w = w.get(R.key === null ? S : R.key) || null), m(y, w, R, U)
            );
          case Ne:
            return (
              (w = w.get(R.key === null ? S : R.key) || null), _(y, w, R, U)
            );
          case Je:
            var Z = R._init;
            return C(w, y, S, Z(R._payload), U);
        }
        if (xi(R) || nt(R)) return (w = w.get(S) || null), N(y, w, R, U, null);
        if (typeof R.then == "function") return C(w, y, S, no(R), U);
        if (R.$$typeof === Ve) return C(w, y, S, xo(y, R, U), U);
        ro(y, R);
      }
      return null;
    }
    function $(w, y, S, R) {
      for (
        var U = null, Z = null, W = y, Q = (y = 0), Be = null;
        W !== null && Q < S.length;
        Q++
      ) {
        W.index > Q ? ((Be = W), (W = null)) : (Be = W.sibling);
        var de = x(w, W, S[Q], R);
        if (de === null) {
          W === null && (W = Be);
          break;
        }
        e && W && de.alternate === null && t(w, W),
          (y = o(de, y, Q)),
          Z === null ? (U = de) : (Z.sibling = de),
          (Z = de),
          (W = Be);
      }
      if (Q === S.length) return n(w, W), re && sr(w, Q), U;
      if (W === null) {
        for (; Q < S.length; Q++)
          (W = j(w, S[Q], R)),
            W !== null &&
              ((y = o(W, y, Q)),
              Z === null ? (U = W) : (Z.sibling = W),
              (Z = W));
        return re && sr(w, Q), U;
      }
      for (W = r(w, W); Q < S.length; Q++)
        (Be = C(W, w, Q, S[Q], R)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              W.delete(Be.key === null ? Q : Be.key),
            (y = o(Be, y, Q)),
            Z === null ? (U = Be) : (Z.sibling = Be),
            (Z = Be));
      return (
        e &&
          W.forEach(function (Jn) {
            return t(w, Jn);
          }),
        re && sr(w, Q),
        U
      );
    }
    function J(w, y, S, R) {
      var U = nt(S);
      if (typeof U != "function") throw Error(u(150));
      if (((S = U.call(S)), S == null)) throw Error(u(151));
      for (
        var Z = (U = null), W = y, Q = (y = 0), Be = null, de = S.next();
        W !== null && !de.done;
        Q++, de = S.next()
      ) {
        W.index > Q ? ((Be = W), (W = null)) : (Be = W.sibling);
        var Jn = x(w, W, de.value, R);
        if (Jn === null) {
          W === null && (W = Be);
          break;
        }
        e && W && Jn.alternate === null && t(w, W),
          (y = o(Jn, y, Q)),
          Z === null ? (U = Jn) : (Z.sibling = Jn),
          (Z = Jn),
          (W = Be);
      }
      if (de.done) return n(w, W), re && sr(w, Q), U;
      if (W === null) {
        for (; !de.done; Q++, de = S.next())
          (de = j(w, de.value, R)),
            de !== null &&
              ((y = o(de, y, Q)),
              Z === null ? (U = de) : (Z.sibling = de),
              (Z = de));
        return re && sr(w, Q), U;
      }
      for (W = r(w, W); !de.done; Q++, de = S.next())
        (de = C(W, w, Q, de.value, R)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              W.delete(de.key === null ? Q : de.key),
            (y = o(de, y, Q)),
            Z === null ? (U = de) : (Z.sibling = de),
            (Z = de));
      return (
        e &&
          W.forEach(function (Ny) {
            return t(w, Ny);
          }),
        re && sr(w, Q),
        U
      );
    }
    function Ee(w, y, S, R) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === Qe &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case Le:
            e: {
              for (var U = S.key, Z = y; Z !== null; ) {
                if (Z.key === U) {
                  if (((U = S.type), U === Qe)) {
                    if (Z.tag === 7) {
                      n(w, Z.sibling),
                        (y = i(Z, S.props.children)),
                        (y.return = w),
                        (w = y);
                      break e;
                    }
                  } else if (
                    Z.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Je &&
                      ud(U) === Z.type)
                  ) {
                    n(w, Z.sibling),
                      (y = i(Z, S.props)),
                      Oi(w, Z, y, S),
                      (y.return = w),
                      (w = y);
                    break e;
                  }
                  n(w, Z);
                  break;
                } else t(w, Z);
                Z = Z.sibling;
              }
              S.type === Qe
                ? ((y = _r(S.props.children, w.mode, R, S.key)),
                  (y.return = w),
                  (w = y))
                : ((R = Do(S.type, S.key, S.props, null, w.mode, R)),
                  Oi(w, y, R, S),
                  (R.return = w),
                  (w = R));
            }
            return c(w);
          case Ne:
            e: {
              for (Z = S.key; y !== null; ) {
                if (y.key === Z)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === S.containerInfo &&
                    y.stateNode.implementation === S.implementation
                  ) {
                    n(w, y.sibling),
                      (y = i(y, S.children || [])),
                      (y.return = w),
                      (w = y);
                    break e;
                  } else {
                    n(w, y);
                    break;
                  }
                else t(w, y);
                y = y.sibling;
              }
              (y = eu(S, w.mode, R)), (y.return = w), (w = y);
            }
            return c(w);
          case Je:
            return (Z = S._init), Ee(w, y, Z(S._payload), R);
        }
        if (xi(S)) return $(w, y, S, R);
        if (nt(S)) return J(w, y, S, R);
        if (typeof S.then == "function") return Ee(w, y, no(S), R);
        if (S.$$typeof === Ve) return Ee(w, y, xo(w, S, R), R);
        ro(w, S);
      }
      return (typeof S == "string" && S !== "") || typeof S == "number"
        ? ((S = "" + S),
          y !== null && y.tag === 6
            ? (n(w, y.sibling), (y = i(y, S)), (y.return = w), (w = y))
            : (n(w, y), (y = ba(S, w.mode, R)), (y.return = w), (w = y)),
          c(w))
        : n(w, y);
    }
    return function (w, y, S, R) {
      return (Li = 0), (w = Ee(w, y, S, R)), (Br = null), w;
    };
  }
  var cr = cd(!0),
    dd = cd(!1),
    Hr = I(null),
    io = I(0);
  function fd(e, t) {
    (e = Sn), V(io, e), V(Hr, t), (Sn = e | t.baseLanes);
  }
  function lo() {
    V(io, Sn), V(Hr, Hr.current);
  }
  function ea() {
    (Sn = io.current), M(Hr), M(io);
  }
  var en = I(null),
    tn = null;
  function Dn(e) {
    var t = e.alternate;
    V(Ae, Ae.current & 1),
      V(en, e),
      tn === null &&
        (t === null || Hr.current !== null || t.memoizedState !== null) &&
        (tn = e);
  }
  function ta(e) {
    if (e.tag === 22) {
      if ((V(Ae, Ae.current), V(en, e), tn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (tn = e);
      }
    } else Fn();
  }
  function Fn() {
    V(Ae, Ae.current), V(en, en.current);
  }
  function dr(e) {
    M(en), tn === e && (tn = null), M(Ae);
  }
  var Ae = I(0);
  function oo(e) {
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
  var Wr = f.ReactCurrentDispatcher,
    Qr = f.ReactCurrentBatchConfig,
    fr = 0,
    ae = null,
    Se = null,
    Oe = null,
    so = !1,
    Gr = !1,
    pr = !1,
    ao = 0,
    zi = 0,
    Yr = null,
    Nm = 0;
  function De() {
    throw Error(u(321));
  }
  function na(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function uo(e, t, n, r, i, o) {
    return (
      (fr = o),
      (ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Wr.current = e === null || e.memoizedState === null ? Ai : Di),
      (pr = !1),
      (e = n(r, i)),
      (pr = !1),
      Gr && (e = hd(t, n, r, i)),
      pd(),
      e
    );
  }
  function pd() {
    Wr.current = Vn;
    var e = Se !== null && Se.next !== null;
    if (((fr = 0), (Oe = Se = ae = null), (so = !1), (zi = 0), (Yr = null), e))
      throw Error(u(300));
  }
  function hd(e, t, n, r) {
    ae = e;
    var i = 0;
    do {
      if ((Gr && (Yr = null), (zi = 0), (Gr = !1), 25 <= i))
        throw Error(u(301));
      (i += 1), (Oe = Se = null), (e.updateQueue = null), (Wr.current = Fi);
      var o = t(n, r);
    } while (Gr);
    return o;
  }
  function Tm() {
    var e = Wr.current.useState()[0];
    return typeof e.then == "function" ? Ii(e) : e;
  }
  function co() {
    var e = ao !== 0;
    return (ao = 0), e;
  }
  function ra(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function ia(e) {
    if (so) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      so = !1;
    }
    (fr = 0), (Oe = Se = ae = null), (Gr = !1), (zi = ao = 0), (Yr = null);
  }
  function ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Oe === null ? (ae.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
  }
  function Fe() {
    if (Se === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = Oe === null ? ae.memoizedState : Oe.next;
    if (t !== null) (Oe = t), (Se = e);
    else {
      if (e === null)
        throw ae.alternate === null ? Error(u(467)) : Error(u(310));
      (Se = e),
        (e = {
          memoizedState: Se.memoizedState,
          baseState: Se.baseState,
          baseQueue: Se.baseQueue,
          queue: Se.queue,
          next: null,
        }),
        Oe === null ? (ae.memoizedState = Oe = e) : (Oe = Oe.next = e);
    }
    return Oe;
  }
  var la;
  la = function () {
    return { lastEffect: null, events: null, stores: null };
  };
  function Ii(e) {
    var t = zi;
    return (
      (zi += 1),
      Yr === null && (Yr = []),
      (e = sd(Yr, e, t)),
      ae.alternate === null &&
        (Oe === null ? ae.memoizedState === null : Oe.next === null) &&
        (Wr.current = Ai),
      e
    );
  }
  function fo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ii(e);
      if (e.$$typeof === Ve) return Ke(e);
    }
    throw Error(u(438, String(e)));
  }
  function hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function oa(e) {
    var t = Fe();
    return sa(t, Se, e);
  }
  function sa(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = n;
    var i = e.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (i !== null) {
        var c = i.next;
        (i.next = o.next), (o.next = c);
      }
      (t.baseQueue = i = o), (r.pending = null);
    }
    if (((o = e.baseState), i === null)) e.memoizedState = o;
    else {
      t = i.next;
      var p = (c = null),
        m = null,
        _ = t,
        N = !1;
      do {
        var j = _.lane & -536870913;
        if (j !== _.lane ? (ce & j) === j : (fr & j) === j) {
          var x = _.revertLane;
          if (x === 0)
            m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              j === $r && (N = !0);
          else if ((fr & x) === x) {
            (_ = _.next), x === $r && (N = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              m === null ? ((p = m = j), (c = o)) : (m = m.next = j),
              (ae.lanes |= x),
              (Zn |= x);
          (j = _.action),
            pr && n(o, j),
            (o = _.hasEagerState ? _.eagerState : n(o, j));
        } else
          (x = {
            lane: j,
            revertLane: _.revertLane,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            m === null ? ((p = m = x), (c = o)) : (m = m.next = x),
            (ae.lanes |= j),
            (Zn |= j);
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (
        (m === null ? (c = o) : (m.next = p),
        !Pt(o, e.memoizedState) && ((Ye = !0), N && ((n = Zr), n !== null)))
      )
        throw n;
      (e.memoizedState = o),
        (e.baseState = c),
        (e.baseQueue = m),
        (r.lastRenderedState = o);
    }
    return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function aa(e) {
    var t = Fe(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var c = (i = i.next);
      do (o = e(o, c.action)), (c = c.next);
      while (c !== i);
      Pt(o, t.memoizedState) || (Ye = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function md(e, t, n) {
    var r = ae,
      i = Fe(),
      o = re;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var c = !Pt((Se || i).memoizedState, n);
    if (
      (c && ((i.memoizedState = n), (Ye = !0)),
      (i = i.queue),
      ua(gd.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || c || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Kr(9, yd.bind(null, r, i, n, t), { destroy: void 0 }, null),
        ke === null)
      )
        throw Error(u(349));
      o || fr & 60 || vd(r, t, n);
    }
    return n;
  }
  function vd(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ae.updateQueue),
      t === null
        ? ((t = la()), (ae.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function yd(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), kd(t) && wd(e);
  }
  function gd(e, t, n) {
    return n(function () {
      kd(t) && wd(e);
    });
  }
  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Pt(e, n);
    } catch {
      return !0;
    }
  }
  function wd(e) {
    var t = Mn(e, 2);
    t !== null && it(t, e, 2);
  }
  function _d(e) {
    var t = ft();
    if (typeof e == "function") {
      var n = e;
      (e = n()), pr && (Pn(!0), n(), Pn(!1));
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hr,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Sd(e, t, n, r) {
    return (e.baseState = n), sa(e, Se, typeof r == "function" ? r : hr);
  }
  function Pm(e, t, n, r) {
    if (vo(e)) throw Error(u(485));
    (e = t.pending),
      e === null
        ? ((e = { payload: r, next: null }),
          (e.next = t.pending = e),
          xd(t, n, r))
        : (t.pending = e.next = { payload: r, next: e.next });
  }
  function xd(e, t, n) {
    var r = e.action,
      i = e.state,
      o = Qr.transition,
      c = { _callbacks: new Set() };
    Qr.transition = c;
    try {
      var p = r(i, n);
      p !== null && typeof p == "object" && typeof p.then == "function"
        ? (df(c, p),
          p.then(
            function (m) {
              (e.state = m), po(e, t);
            },
            function () {
              return po(e, t);
            }
          ),
          t(p))
        : (t(p), (e.state = p), po(e, t));
    } catch (m) {
      t({ then: function () {}, status: "rejected", reason: m }), po(e, t);
    } finally {
      Qr.transition = o;
    }
  }
  function po(e, t) {
    var n = e.pending;
    if (n !== null) {
      var r = n.next;
      r === n
        ? (e.pending = null)
        : ((r = r.next), (n.next = r), xd(e, t, r.payload));
    }
  }
  function Ed(e, t) {
    return t;
  }
  function Cd(e, t, n) {
    (e = sa(e, t, Ed)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Ii(e)
          : e),
      (t = Fe());
    var r = t.queue,
      i = r.dispatch;
    return (
      n !== t.memoizedState &&
        ((ae.flags |= 2048),
        Kr(9, Rm.bind(null, r, n), { destroy: void 0 }, null)),
      [e, i]
    );
  }
  function Rm(e, t) {
    e.action = t;
  }
  function Kr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, inst: n, deps: r, next: null }),
      (t = ae.updateQueue),
      t === null
        ? ((t = la()), (ae.updateQueue = t), (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Nd() {
    return Fe().memoizedState;
  }
  function ho(e, t, n, r) {
    var i = ft();
    (ae.flags |= e),
      (i.memoizedState = Kr(
        1 | t,
        n,
        { destroy: void 0 },
        r === void 0 ? null : r
      ));
  }
  function mo(e, t, n, r) {
    var i = Fe();
    r = r === void 0 ? null : r;
    var o = i.memoizedState.inst;
    Se !== null && r !== null && na(r, Se.memoizedState.deps)
      ? (i.memoizedState = Kr(t, n, o, r))
      : ((ae.flags |= e), (i.memoizedState = Kr(1 | t, n, o, r)));
  }
  function Td(e, t) {
    ho(8390656, 8, e, t);
  }
  function ua(e, t) {
    mo(2048, 8, e, t);
  }
  function Pd(e, t) {
    return mo(4, 2, e, t);
  }
  function Rd(e, t) {
    return mo(4, 4, e, t);
  }
  function jd(e, t) {
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
  function Ld(e, t, n) {
    (n = n != null ? n.concat([e]) : null), mo(4, 4, jd.bind(null, t, e), n);
  }
  function ca() {}
  function Od(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && na(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function zd(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && na(t, r[1])
      ? r[0]
      : ((r = e()), pr && (Pn(!0), e(), Pn(!1)), (n.memoizedState = [r, t]), r);
  }
  function Id(e, t, n) {
    return Pt(n, t)
      ? n
      : Hr.current !== null
        ? ((e.memoizedState = n), Pt(n, t) || (Ye = !0), n)
        : fr & 42
          ? (pt === 0 && (pt = !(ce & 536870912) || re ? hc() : 536870912),
            (e = en.current),
            e !== null && (e.flags |= 32),
            (e = pt),
            (ae.lanes |= e),
            (Zn |= e),
            t)
          : ((Ye = !0), (e.memoizedState = n));
  }
  function Md(e, t, n, r, i) {
    var o = _e;
    _e = o !== 0 && 8 > o ? o : 8;
    var c = Qr.transition,
      p = { _callbacks: new Set() };
    (Qr.transition = p), Vd(e, !1, t, n);
    try {
      var m = i();
      if (m !== null && typeof m == "object" && typeof m.then == "function") {
        df(p, m);
        var _ = Em(m, r);
        Mi(e, t, _);
      } else Mi(e, t, r);
    } catch (N) {
      Mi(e, t, { then: function () {}, status: "rejected", reason: N });
    } finally {
      (_e = o), (Qr.transition = c);
    }
  }
  function Ad(e, t, n, r) {
    if (e.tag !== 5) throw Error(u(476));
    if (e.memoizedState === null) {
      var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hr,
          lastRenderedState: g,
        },
        o = i;
      (i = {
        memoizedState: g,
        baseState: g,
        baseQueue: null,
        queue: i,
        next: null,
      }),
        (e.memoizedState = i);
      var c = e.alternate;
      c !== null && (c.memoizedState = i);
    } else o = e.memoizedState.queue;
    Md(e, o, t, g, function () {
      return n(r);
    });
  }
  function da() {
    var e = Ke(ye);
    return e !== null ? e : g;
  }
  function Dd() {
    return Fe().memoizedState;
  }
  function Fd() {
    return Fe().memoizedState;
  }
  function jm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = En(t);
          e = bt(n);
          var r = gn(t, e, n);
          r !== null && (it(r, t, n), Ni(r, t, n)),
            (t = { cache: Na() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Lm(e, t, n) {
    var r = En(e);
    (n = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vo(e)
        ? Ud(t, n)
        : ((n = Qs(e, t, n, r)), n !== null && (it(n, e, r), $d(n, t, r)));
  }
  function Mi(e, t, n) {
    var r = En(e),
      i = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (vo(e)) Ud(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var c = t.lastRenderedState,
            p = o(c, n);
          if (((i.hasEagerState = !0), (i.eagerState = p), Pt(p, c))) {
            Kl(e, t, i, 0), ke === null && Yl();
            return;
          }
        } catch {
        } finally {
        }
      (n = Qs(e, t, i, r)), n !== null && (it(n, e, r), $d(n, t, r));
    }
  }
  function Vd(e, t, n, r) {
    if (
      (cf(),
      (r = {
        lane: 2,
        revertLane: Ks(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vo(e))
    ) {
      if (t) throw Error(u(479));
    } else (t = Qs(e, n, r, 2)), t !== null && it(t, e, 2);
  }
  function vo(e) {
    var t = e.alternate;
    return e === ae || (t !== null && t === ae);
  }
  function Ud(e, t) {
    Gr = so = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function $d(e, t, n) {
    if (n & 4194176) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), yc(e, n);
    }
  }
  var Vn = {
    readContext: Ke,
    use: fo,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useSyncExternalStore: De,
    useId: De,
  };
  (Vn.useCacheRefresh = De),
    (Vn.useHostTransitionStatus = De),
    (Vn.useFormState = De),
    (Vn.useOptimistic = De);
  var Ai = {
    readContext: Ke,
    use: fo,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: Td,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null),
        ho(4194308, 4, jd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      t = t === void 0 ? null : t;
      var r = e();
      return pr && (Pn(!0), e(), Pn(!1)), (n.memoizedState = [r, t]), r;
    },
    useReducer: function (e, t, n) {
      var r = ft();
      if (n !== void 0) {
        var i = n(t);
        pr && (Pn(!0), n(t), Pn(!1));
      } else i = t;
      return (
        (r.memoizedState = r.baseState = i),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: i,
        }),
        (r.queue = e),
        (e = e.dispatch = Lm.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = _d(e);
      var t = e.queue,
        n = Mi.bind(null, ae, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: ca,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e), e;
    },
    useTransition: function () {
      var e = _d(!1);
      return (
        (e = Md.bind(null, ae, e.queue, !0, !1)),
        (ft().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        i = ft();
      if (re) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(u(349));
        ce & 60 || vd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Td(gd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kr(9, yd.bind(null, r, o, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = ke.identifierPrefix;
      if (re) {
        var n = yn,
          r = vn;
        (n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (ft().memoizedState = jm.bind(null, ae));
    },
  };
  (Ai.useHostTransitionStatus = da),
    (Ai.useFormState = function (e, t) {
      if (re) {
        var n = ke.formState;
        if (n !== null) {
          e: {
            if (re) {
              if (se) {
                t: {
                  for (var r = se, i = qt; r.nodeType !== 8; ) {
                    if (!i) {
                      r = null;
                      break t;
                    }
                    if (((r = Mt(r)), r === null)) {
                      r = null;
                      break t;
                    }
                  }
                  (i = r.data), (r = i === "F!" || i === "F" ? r : null);
                }
                if (r) {
                  (se = Mt(r)), (r = r.data === "F!");
                  break e;
                }
              }
              In();
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = ft()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ed,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Mi.bind(null, ae, r)),
        (r.dispatch = n),
        (r = ft()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Pm.bind(null, ae, i, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n]
      );
    }),
    (Ai.useOptimistic = function (e) {
      var t = ft();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = Vd.bind(null, ae, !0, n)), (n.dispatch = t), [e, t]
      );
    });
  var Di = {
    readContext: Ke,
    use: fo,
    useCallback: Od,
    useContext: Ke,
    useEffect: ua,
    useImperativeHandle: Ld,
    useInsertionEffect: Pd,
    useLayoutEffect: Rd,
    useMemo: zd,
    useReducer: oa,
    useRef: Nd,
    useState: function () {
      return oa(hr);
    },
    useDebugValue: ca,
    useDeferredValue: function (e) {
      var t = Fe();
      return Id(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(hr)[0],
        t = Fe().memoizedState;
      return [typeof e == "boolean" ? e : Ii(e), t];
    },
    useSyncExternalStore: md,
    useId: Dd,
  };
  (Di.useCacheRefresh = Fd),
    (Di.useHostTransitionStatus = da),
    (Di.useFormState = function (e) {
      var t = Fe();
      return Cd(t, Se, e);
    }),
    (Di.useOptimistic = function (e, t) {
      var n = Fe();
      return Sd(n, Se, e, t);
    });
  var Fi = {
    readContext: Ke,
    use: fo,
    useCallback: Od,
    useContext: Ke,
    useEffect: ua,
    useImperativeHandle: Ld,
    useInsertionEffect: Pd,
    useLayoutEffect: Rd,
    useMemo: zd,
    useReducer: aa,
    useRef: Nd,
    useState: function () {
      return aa(hr);
    },
    useDebugValue: ca,
    useDeferredValue: function (e) {
      var t = Fe();
      return Se === null
        ? ((t.memoizedState = e), e)
        : Id(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = aa(hr)[0],
        t = Fe().memoizedState;
      return [typeof e == "boolean" ? e : Ii(e), t];
    },
    useSyncExternalStore: md,
    useId: Dd,
  };
  (Fi.useCacheRefresh = Fd),
    (Fi.useHostTransitionStatus = da),
    (Fi.useFormState = function (e) {
      var t = Fe(),
        n = Se;
      if (n !== null) return Cd(t, n, e);
      (t = t.memoizedState), (n = Fe());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r];
    }),
    (Fi.useOptimistic = function (e, t) {
      var n = Fe();
      return Se !== null
        ? Sd(n, Se, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function gt(e, t) {
    if (e && e.defaultProps) {
      (t = d({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function fa(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : d({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var yo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ir(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = En(e),
        i = bt(r);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = gn(e, i, r)),
        t !== null && (it(t, e, r), Ni(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = En(e),
        i = bt(r);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = gn(e, i, r)),
        t !== null && (it(t, e, r), Ni(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = En(e),
        r = bt(n);
      (r.tag = 2),
        t != null && (r.callback = t),
        (t = gn(e, r, n)),
        t !== null && (it(t, e, n), Ni(t, e, n));
    },
  };
  function Zd(e, t, n, r, i, o, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ri(n, r) || !Ri(i, o)
          : !0
    );
  }
  function Bd(e, t, n) {
    var r = !1,
      i = On,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ke(o))
        : ((i = rt(t) ? zn : Ge.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? lr(e, i) : On)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = yo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Hd(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && yo.enqueueReplaceState(t, t.state, null);
  }
  function pa(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), bl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = Ke(o))
      : ((o = rt(t) ? zn : Ge.current), (i.context = lr(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (fa(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && yo.enqueueReplaceState(i, i.state, null),
        Pi(e, n, i, r),
        Ti(),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  var ha = new WeakMap();
  function Xr(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ha.get(e);
      typeof n != "string" && ((n = Ec(t)), ha.set(e, n));
    } else n = Ec(t);
    return { value: e, source: t, stack: n, digest: null };
  }
  function Wd(e, t, n) {
    return (
      typeof n == "string" && ha.set(e, n),
      { value: e, source: null, stack: n ?? null, digest: t ?? null }
    );
  }
  function ma(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Qd(e, t, n) {
    (n = bt(n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        zo || ((zo = !0), (Ua = r)), ma(e, t);
      }),
      n
    );
  }
  function Gd(e, t, n) {
    (n = bt(n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          ma(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          ma(e, t),
            typeof r != "function" &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function Yd(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = bt(2)), (t.tag = 2), gn(n, t, 2))),
            (n.lanes |= 2)),
        e);
  }
  function Om(e, t, n, r, i) {
    if (
      ((n.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      var o = n.tag;
      if (
        (n.mode & 1 ||
          (o !== 0 && o !== 11 && o !== 15) ||
          ((o = n.alternate)
            ? ((n.updateQueue = o.updateQueue),
              (n.memoizedState = o.memoizedState),
              (n.lanes = o.lanes))
            : ((n.updateQueue = null), (n.memoizedState = null))),
        (o = en.current),
        o !== null)
      ) {
        switch (o.tag) {
          case 13:
            return (
              n.mode & 1 &&
                (tn === null
                  ? Ga()
                  : o.alternate === null && Me === 0 && (Me = 3)),
              (o.flags &= -257),
              Yd(o, t, n, e, i),
              r === bs
                ? (o.flags |= 16384)
                : ((t = o.updateQueue),
                  t === null ? (o.updateQueue = new Set([r])) : t.add(r),
                  o.mode & 1 && Ka(e, r, i)),
              !1
            );
          case 22:
            if (o.mode & 1)
              return (
                (o.flags |= 65536),
                r === bs
                  ? (o.flags |= 16384)
                  : ((t = o.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (o.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Ka(e, r, i)),
                !1
              );
        }
        throw Error(u(435, o.tag));
      }
      if (e.tag === 1) return Ka(e, r, i), Ga(), !1;
      r = Error(u(426));
    }
    if (re && n.mode & 1 && ((o = en.current), o !== null))
      return (
        !(o.flags & 65536) && (o.flags |= 256),
        Yd(o, t, n, e, i),
        Hs(Xr(r, n)),
        !1
      );
    if (
      ((e = r = Xr(r, n)),
      Me !== 4 && (Me = 2),
      Qi === null ? (Qi = [e]) : Qi.push(e),
      t === null)
    )
      return !0;
    e = t;
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (i = Qd(e, r, i)),
            nd(e, i),
            !1
          );
        case 1:
          if (
            ((t = r),
            (n = e.type),
            (o = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Bn === null || !Bn.has(o)))))
          )
            return (
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (i = Gd(e, t, i)),
              nd(e, i),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var zm = f.ReactCurrentOwner,
    Kd = Error(u(461)),
    Ye = !1;
  function $e(e, t, n, r) {
    t.child = e === null ? dd(t, null, n, r) : cr(t, e.child, n, r);
  }
  function Xd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      wn(t, i),
      (r = uo(e, t, n, r, o, i)),
      (n = co()),
      e !== null && !Ye
        ? (ra(e, t, i), nn(e, t, i))
        : (re && n && Ql(t), (t.flags |= 1), $e(e, t, r, i), t.child)
    );
  }
  function Jd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !qa(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), qd(e, t, o, r, i))
        : ((e = Do(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var c = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ri), n(c, r) && e.ref === t.ref)
      )
        return nn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Hn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function qd(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ri(o, r) && e.ref === t.ref)
        if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (Ye = !0);
        else return (t.lanes = e.lanes), nn(e, t, i);
    }
    return va(e, t, n, r, i);
  }
  function bd(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = (t.stateNode._pendingVisibility & 2) !== 0,
      c = e !== null ? e.memoizedState : null;
    if ((Vi(e, t), r.mode === "hidden" || o)) {
      if (t.flags & 128) {
        if (((n = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (r = t.child = e.child, i = 0; r !== null; )
            (i = i | r.lanes | r.childLanes), (r = r.sibling);
          t.childLanes = i & ~n;
        } else (t.childLanes = 0), (t.child = null);
        return ef(e, t, n);
      }
      if (!(t.mode & 1))
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $i(t, null),
          lo(),
          ta(t);
      else if (n & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $i(t, c !== null ? c.cachePool : null),
          c !== null ? fd(t, c) : lo(),
          ta(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ef(e, t, c !== null ? c.baseLanes | n : n)
        );
    } else
      c !== null
        ? ($i(t, c.cachePool), fd(t, c), Fn(), (t.memoizedState = null))
        : (e !== null && $i(t, null), lo(), Fn());
    return $e(e, t, i, n), t.child;
  }
  function ef(e, t, n) {
    var r = Ta();
    return (
      (r = r === null ? null : { parent: ze._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: n, cachePool: r }),
      e !== null && $i(t, null),
      lo(),
      ta(t),
      null
    );
  }
  function Vi(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function va(e, t, n, r, i) {
    var o = rt(n) ? zn : Ge.current;
    return (
      (o = lr(t, o)),
      wn(t, i),
      (n = uo(e, t, n, r, o, i)),
      (r = co()),
      e !== null && !Ye
        ? (ra(e, t, i), nn(e, t, i))
        : (re && r && Ql(t), (t.flags |= 1), $e(e, t, n, i), t.child)
    );
  }
  function tf(e, t, n, r, i, o) {
    return (
      wn(t, o),
      (n = hd(t, r, n, i)),
      pd(),
      (r = co()),
      e !== null && !Ye
        ? (ra(e, t, o), nn(e, t, o))
        : (re && r && Ql(t), (t.flags |= 1), $e(e, t, n, o), t.child)
    );
  }
  function nf(e, t, n, r, i) {
    if (rt(n)) {
      var o = !0;
      Bl(t);
    } else o = !1;
    if ((wn(t, i), t.stateNode === null))
      ko(e, t), Bd(t, n, r), pa(t, n, r, i), (r = !0);
    else if (e === null) {
      var c = t.stateNode,
        p = t.memoizedProps;
      c.props = p;
      var m = c.context,
        _ = n.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Ke(_))
        : ((_ = rt(n) ? zn : Ge.current), (_ = lr(t, _)));
      var N = n.getDerivedStateFromProps,
        j =
          typeof N == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      j ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== r || m !== _) && Hd(t, c, r, _)),
        (An = !1);
      var x = t.memoizedState;
      (c.state = x),
        Pi(t, r, c, i),
        Ti(),
        (m = t.memoizedState),
        p !== r || x !== m || dt.current || An
          ? (typeof N == "function" && (fa(t, n, N, r), (m = t.memoizedState)),
            (p = An || Zd(t, n, p, r, x, m, _))
              ? (j ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (c.props = r),
            (c.state = m),
            (c.context = _),
            (r = p))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (c = t.stateNode),
        Js(e, t),
        (p = t.memoizedProps),
        (_ = t.type === t.elementType ? p : gt(t.type, p)),
        (c.props = _),
        (j = t.pendingProps),
        (x = c.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = Ke(m))
          : ((m = rt(n) ? zn : Ge.current), (m = lr(t, m)));
      var C = n.getDerivedStateFromProps;
      (N =
        typeof C == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== j || x !== m) && Hd(t, c, r, m)),
        (An = !1),
        (x = t.memoizedState),
        (c.state = x),
        Pi(t, r, c, i),
        Ti();
      var $ = t.memoizedState;
      p !== j || x !== $ || dt.current || An
        ? (typeof C == "function" && (fa(t, n, C, r), ($ = t.memoizedState)),
          (_ = An || Zd(t, n, _, r, x, $, m) || !1)
            ? (N ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(r, $, m),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(r, $, m)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (p === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && x === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = $)),
          (c.props = r),
          (c.state = $),
          (c.context = m),
          (r = _))
        : (typeof c.componentDidUpdate != "function" ||
            (p === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && x === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ya(e, t, n, r, o, i);
  }
  function ya(e, t, n, r, i, o) {
    Vi(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return i && Wc(t, n, !1), nn(e, t, o);
    (r = t.stateNode), (zm.current = t);
    var p =
      c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = cr(t, e.child, null, o)), (t.child = cr(t, null, p, o)))
        : $e(e, t, p, o),
      (t.memoizedState = r.state),
      i && Wc(t, n, !0),
      t.child
    );
  }
  function rf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Bc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Bc(e, t.context, !1),
      Jt(e, t.containerInfo);
  }
  function lf(e, t, n, r, i) {
    return Dr(), Hs(i), (t.flags |= 256), $e(e, t, n, r), t.child;
  }
  var ga = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ka(e) {
    return { baseLanes: e, cachePool: ff() };
  }
  function wa(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= pt), e;
  }
  function of(e, t, n) {
    var r = t.pendingProps,
      i = !1,
      o = (t.flags & 128) !== 0,
      c;
    if (
      ((c = o) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (Ae.current & 2) !== 0),
      c && ((i = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (re) {
        if ((i ? Dn(t) : Fn(), re)) {
          var p = (o = se);
          if (!p) ar(t) && In(), Ar(pe, t), (re = !1), (pe = t), (se = o);
          else if (!Kc(t, p)) {
            ar(t) && In(), (se = Mt(p));
            var m = pe;
            se && Kc(t, se)
              ? Gl(m, p)
              : (Ar(pe, t), (re = !1), (pe = t), (se = o));
          }
        }
        if (
          ((o = t.memoizedState),
          o !== null && ((o = o.dehydrated), o !== null))
        )
          return (
            t.mode & 1
              ? o.data === "$!"
                ? (t.lanes = 16)
                : (t.lanes = 536870912)
              : (t.lanes = 2),
            null
          );
        dr(t);
      }
      return (
        (o = r.children),
        (r = r.fallback),
        i
          ? (Fn(),
            (i = t.mode),
            (p = t.child),
            (o = { mode: "hidden", children: o }),
            !(i & 1) && p !== null
              ? ((p.childLanes = 0), (p.pendingProps = o))
              : (p = Fo(o, i, 0, null)),
            (r = _r(r, i, n, null)),
            (p.return = t),
            (r.return = t),
            (p.sibling = r),
            (t.child = p),
            (i = t.child),
            (i.memoizedState = ka(n)),
            (i.childLanes = wa(e, c, n)),
            (t.memoizedState = ga),
            r)
          : (Dn(t), _a(t, o))
      );
    }
    if (((p = e.memoizedState), p !== null && ((m = p.dehydrated), m !== null)))
      return Im(e, t, o, c, r, m, p, n);
    if (i) {
      Fn(), (i = r.fallback), (o = t.mode), (p = e.child), (m = p.sibling);
      var _ = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== p
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = _),
            (t.deletions = null))
          : ((r = Hn(p, _)), (r.subtreeFlags = p.subtreeFlags & 31457280)),
        m !== null ? (i = Hn(m, i)) : ((i = _r(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        o === null
          ? (o = ka(n))
          : ((p = o.cachePool),
            p !== null
              ? ((m = ze._currentValue),
                (p = p.parent !== m ? { parent: m, pool: m } : p))
              : (p = ff()),
            (o = { baseLanes: o.baseLanes | n, cachePool: p })),
        (i.memoizedState = o),
        (i.childLanes = wa(e, c, n)),
        (t.memoizedState = ga),
        r
      );
    }
    return (
      Dn(t),
      (c = e.child),
      (e = c.sibling),
      (c = Hn(c, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (c.lanes = n),
      (c.return = t),
      (c.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = c),
      (t.memoizedState = null),
      c
    );
  }
  function _a(e, t) {
    return (
      (t = Fo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function go(e, t, n, r) {
    return (
      r !== null && Hs(r),
      cr(t, e.child, null, n),
      (e = _a(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Im(e, t, n, r, i, o, c, p) {
    if (n)
      return t.flags & 256
        ? (Dn(t), (t.flags &= -257), (o = Wd(Error(u(422)))), go(e, t, p, o))
        : t.memoizedState !== null
          ? (Fn(), (t.child = e.child), (t.flags |= 128), null)
          : (Fn(),
            (o = i.fallback),
            (c = t.mode),
            (i = Fo({ mode: "visible", children: i.children }, c, 0, null)),
            (o = _r(o, c, p, null)),
            (o.flags |= 2),
            (i.return = t),
            (o.return = t),
            (i.sibling = o),
            (t.child = i),
            t.mode & 1 && cr(t, e.child, null, p),
            (c = t.child),
            (c.memoizedState = ka(p)),
            (c.childLanes = wa(e, r, p)),
            (t.memoizedState = ga),
            o);
    if ((Dn(t), !(t.mode & 1))) return go(e, t, p, null);
    if (o.data === "$!") {
      if (((o = o.nextSibling && o.nextSibling.dataset), o)) var m = o.dgst;
      return (
        (o = m),
        (r = Error(u(419))),
        (r.digest = o),
        (o = Wd(r, o, void 0)),
        go(e, t, p, o)
      );
    }
    if (((r = (p & e.childLanes) !== 0), Ye || r)) {
      if (((r = ke), r !== null)) {
        if (((i = p & -p), i & 42)) i = 1;
        else
          switch (i) {
            case 2:
              i = 1;
              break;
            case 8:
              i = 4;
              break;
            case 32:
              i = 16;
              break;
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
              i = 64;
              break;
            case 268435456:
              i = 134217728;
              break;
            default:
              i = 0;
          }
        if (
          ((i = i & (r.suspendedLanes | p) ? 0 : i),
          i !== 0 && i !== c.retryLane)
        )
          throw ((c.retryLane = i), Mn(e, i), it(r, e, i), Kd);
      }
      return o.data !== "$?" && Ga(), go(e, t, p, null);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = rv.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (se = pl(o.nextSibling)),
        (pe = t),
        (re = !0),
        (Bt = null),
        (qt = !1),
        e !== null &&
          ((Rt[jt++] = vn),
          (Rt[jt++] = yn),
          (Rt[jt++] = or),
          (vn = e.id),
          (yn = e.overflow),
          (or = t)),
        (t = _a(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function sf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ca(e.return, t, n);
  }
  function Sa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = i));
  }
  function af(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if (($e(e, t, r.children, n), (r = Ae.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && sf(e, n, t);
          else if (e.tag === 19) sf(e, n, t);
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
      r &= 1;
    }
    if ((V(Ae, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && oo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Sa(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && oo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Sa(t, !0, n, null, o);
          break;
        case "together":
          Sa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ko(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function nn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Zn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Hn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Mm(e, t, n) {
    switch (t.tag) {
      case 3:
        rf(t), Un(t, ze, e.memoizedState.cache), Dr();
        break;
      case 27:
      case 5:
        $t(t);
        break;
      case 1:
        rt(t.type) && Bl(t);
        break;
      case 4:
        Jt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Un(t, t.type._context, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (Dn(t), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? of(e, t, n)
              : (Dn(t), (e = nn(e, t, n)), e !== null ? e.sibling : null);
        Dn(t);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return af(e, t, n);
          t.flags |= 128;
        }
        var i = t.memoizedState;
        if (
          (i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          V(Ae, Ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), bd(e, t, n);
      case 24:
        Un(t, ze, e.memoizedState.cache);
    }
    return nn(e, t, n);
  }
  var xa = I(null),
    wo = null,
    Jr = null,
    Ea = null;
  function _o() {
    Ea = Jr = wo = null;
  }
  function Un(e, t, n) {
    V(xa, t._currentValue), (t._currentValue = n);
  }
  function kn(e) {
    (e._currentValue = xa.current), M(xa);
  }
  function Ca(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function So(e, t, n) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var i = r.dependencies;
      if (i !== null)
        for (var o = r.child, c = i.firstContext; c !== null; ) {
          if (c.context === t) {
            if (r.tag === 1) {
              (c = bt(n & -n)), (c.tag = 2);
              var p = r.updateQueue;
              if (p !== null) {
                p = p.shared;
                var m = p.pending;
                m === null ? (c.next = c) : ((c.next = m.next), (m.next = c)),
                  (p.pending = c);
              }
            }
            (r.lanes |= n),
              (c = r.alternate),
              c !== null && (c.lanes |= n),
              Ca(r.return, n, e),
              (i.lanes |= n);
            break;
          }
          c = c.next;
        }
      else if (r.tag === 10) o = r.type === e.type ? null : r.child;
      else if (r.tag === 18) {
        if (((o = r.return), o === null)) throw Error(u(341));
        (o.lanes |= n),
          (i = o.alternate),
          i !== null && (i.lanes |= n),
          Ca(o, n, e),
          (o = r.sibling);
      } else o = r.child;
      if (o !== null) o.return = r;
      else
        for (o = r; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((r = o.sibling), r !== null)) {
            (r.return = o.return), (o = r);
            break;
          }
          o = o.return;
        }
      r = o;
    }
  }
  function wn(e, t) {
    (wo = e),
      (Ea = Jr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ye = !0), (e.firstContext = null));
  }
  function Ke(e) {
    return uf(wo, e);
  }
  function xo(e, t, n) {
    return wo === null && wn(e, n), uf(e, t);
  }
  function uf(e, t) {
    var n = t._currentValue;
    if (Ea !== t)
      if (((t = { context: t, memoizedValue: n, next: null }), Jr === null)) {
        if (e === null) throw Error(u(308));
        (Jr = t), (e.dependencies = { lanes: 0, firstContext: t });
      } else Jr = Jr.next = t;
    return n;
  }
  var Am =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Dm = l.unstable_scheduleCallback,
    Fm = l.unstable_NormalPriority,
    ze = {
      $$typeof: Ve,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Na() {
    return { controller: new Am(), data: new Map(), refCount: 0 };
  }
  function Ui(e) {
    e.refCount--,
      e.refCount === 0 &&
        Dm(Fm, function () {
          e.controller.abort();
        });
  }
  var Vm = f.ReactCurrentBatchConfig;
  function cf() {
    var e = Vm.transition;
    return e !== null && e._callbacks.add(Um), e;
  }
  function Um(e, t) {
    xm(e, t);
  }
  function df(e, t) {
    e._callbacks.forEach(function (n) {
      return n(e, t);
    });
  }
  var mr = I(null);
  function Ta() {
    var e = mr.current;
    return e !== null ? e : ke.pooledCache;
  }
  function $i(e, t) {
    t === null ? V(mr, mr.current) : V(mr, t.pool);
  }
  function ff() {
    var e = Ta();
    return e === null ? null : { parent: ze._currentValue, pool: e };
  }
  function rn(e) {
    e.flags |= 4;
  }
  function pf(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (
      ((e.flags |= 16777216),
      (ce & 42) === 0 &&
        ((t = !(t.type === "stylesheet" && !(t.state.loading & 3))), !t))
    )
      if (Af()) e.flags |= 8192;
      else throw ((ji = bs), ld);
  }
  function Eo(e, t) {
    t !== null
      ? (e.flags |= 4)
      : e.flags & 16384 &&
        ((t = e.tag !== 22 ? mc() : 536870912), (e.lanes |= t));
  }
  function Zi(e, t) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 31457280),
          (r |= i.flags & 31457280),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function $m(e, t, n) {
    var r = t.pendingProps;
    switch ((Bs(t), t.tag)) {
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
        return Te(t), null;
      case 1:
        return rt(t.type) && Zl(), Te(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          kn(ze),
          mt(),
          M(dt),
          M(Ge),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ei(t)
              ? rn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Bt !== null && (Ha(Bt), (Bt = null)))),
          Te(t),
          null
        );
      case 26:
        if (((n = t.memoizedState), e === null))
          rn(t),
            n !== null ? (Te(t), pf(t, n)) : (Te(t), (t.flags &= -16777217));
        else {
          var i = e.memoizedState;
          n !== i && rn(t),
            n !== null
              ? (Te(t), n === i ? (t.flags &= -16777217) : pf(t, n))
              : (e.memoizedProps !== r && rn(t), Te(t), (t.flags &= -16777217));
        }
        return null;
      case 27:
        if (
          (ut(t),
          (n = Y.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== r && rn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Te(t), null;
          }
          (e = O.current),
            Ei(t)
              ? Up(t.stateNode, t.type, t.memoizedProps, e, t)
              : ((e = Zp(i, r, n)), (t.stateNode = e), rn(t));
        }
        return Te(t), null;
      case 5:
        if ((ut(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && rn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Te(t), null;
          }
          if (((e = O.current), Ei(t)))
            Up(t.stateNode, t.type, t.memoizedProps, e, t);
          else {
            switch (((i = rs(Y.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = i.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof r.is == "string"
                        ? i.createElement("select", { is: r.is })
                        : i.createElement("select")),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size);
                    break;
                  default:
                    e =
                      typeof r.is == "string"
                        ? i.createElement(n, { is: r.is })
                        : i.createElement(n);
                }
            }
            (e[qe] = t), (e[jn] = r);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = e;
            e: switch ((Xe(e, n, r), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && rn(t);
          }
        }
        return Te(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && rn(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = Y.current), Ei(t))) {
            e: {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (e[qe] = t),
                (r = e.nodeValue !== n) && ((i = pe), i !== null))
              )
                switch (i.tag) {
                  case 3:
                    if (((i = (i.mode & 1) !== 0), Cu(e.nodeValue, n, i), i)) {
                      e = !1;
                      break e;
                    }
                    break;
                  case 27:
                  case 5:
                    var o = (i.mode & 1) !== 0;
                    if (
                      (i.memoizedProps.suppressHydrationWarning !== !0 &&
                        Cu(e.nodeValue, n, o),
                      o)
                    ) {
                      e = !1;
                      break e;
                    }
                }
              e = r;
            }
            e && rn(t);
          } else (e = rs(e).createTextNode(r)), (e[qe] = t), (t.stateNode = e);
        }
        return Te(t), null;
      case 13:
        if (
          (dr(t),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && se !== null && t.mode & 1 && !(t.flags & 128))
            Jc(), Dr(), (t.flags |= 384), (i = !1);
          else if (((i = Ei(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[qe] = t;
            } else
              Dr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Te(t), (i = !1);
          } else Bt !== null && (Ha(Bt), (Bt = null)), (i = !0);
          if (!i) return t.flags & 256 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((n = r !== null),
            (e = e !== null && e.memoizedState !== null),
            n &&
              ((r = t.child),
              (i = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (i = r.alternate.memoizedState.cachePool.pool),
              (o = null),
              r.memoizedState !== null &&
                r.memoizedState.cachePool !== null &&
                (o = r.memoizedState.cachePool.pool),
              o !== i && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Eo(t, t.updateQueue),
            Te(t),
            null);
      case 4:
        return mt(), e === null && dl(t.stateNode.containerInfo), Te(t), null;
      case 10:
        return kn(t.type._context), Te(t), null;
      case 17:
        return rt(t.type) && Zl(), Te(t), null;
      case 19:
        if ((M(Ae), (i = t.memoizedState), i === null)) return Te(t), null;
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) Zi(i, !1);
          else {
            if (Me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = oo(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Zi(i, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      Eo(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Hf(n, e), (n = n.sibling);
                  return V(Ae, (Ae.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              H() > ii &&
              ((t.flags |= 128), (r = !0), Zi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = oo(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Eo(t, e),
                Zi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !re)
              )
                return Te(t), null;
            } else
              2 * H() - i.renderingStartTime > ii &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), Zi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = i.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = H()),
            (t.sibling = null),
            (e = Ae.current),
            V(Ae, r ? (e & 1) | 2 : e & 1),
            t)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          dr(t),
          ea(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r && t.mode & 1
            ? n & 536870912 &&
              !(t.flags & 128) &&
              (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          (n = t.updateQueue),
          n !== null && Eo(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== n && (t.flags |= 2048),
          e !== null && M(mr),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          kn(ze),
          Te(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Zm(e, t) {
    switch ((Bs(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Zl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kn(ze),
          mt(),
          M(dt),
          M(Ge),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return ut(t), null;
      case 13:
        if (
          (dr(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Dr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return M(Ae), null;
      case 4:
        return mt(), null;
      case 10:
        return kn(t.type._context), null;
      case 22:
      case 23:
        return (
          dr(t),
          ea(),
          e !== null && M(mr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kn(ze), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hf(e, t) {
    switch ((Bs(t), t.tag)) {
      case 1:
        (e = t.type.childContextTypes), e != null && Zl();
        break;
      case 3:
        kn(ze), mt(), M(dt), M(Ge);
        break;
      case 26:
      case 27:
      case 5:
        ut(t);
        break;
      case 4:
        mt();
        break;
      case 13:
        dr(t);
        break;
      case 19:
        M(Ae);
        break;
      case 10:
        kn(t.type._context);
        break;
      case 22:
      case 23:
        dr(t), ea(), e !== null && M(mr);
        break;
      case 24:
        kn(ze);
    }
  }
  function Bm(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, r);
    } catch (i) {
      this.onError(i);
    }
  }
  var Bi = !1,
    Co = null,
    No = !1,
    Pa = null,
    Hm = {
      onError: function (e) {
        (Bi = !0), (Co = e);
      },
    };
  function Wm(e, t, n, r, i, o, c, p, m) {
    (Bi = !1), (Co = null), Bm.apply(Hm, arguments);
  }
  function Qm(e, t, n, r, i, o, c, p, m) {
    if ((Wm.apply(this, arguments), Bi)) {
      if (Bi) {
        var _ = Co;
        (Bi = !1), (Co = null);
      } else throw Error(u(198));
      No || ((No = !0), (Pa = _));
    }
  }
  var _n = !1,
    be = !1,
    mf = typeof WeakSet == "function" ? WeakSet : Set,
    Ze = null;
  function vr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = r;
            break;
          default:
            i = r;
        }
        typeof n == "function" ? (e.refCleanup = n(i)) : (n.current = i);
      }
    } catch (o) {
      we(e, t, o);
    }
  }
  function kt(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          we(e, t, i);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          we(e, t, i);
        }
      else n.current = null;
  }
  function Ra(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var vf = !1;
  function Gm(e, t) {
    if (((Tu = Yo), (e = wp()), yu(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              p = -1,
              m = -1,
              _ = 0,
              N = 0,
              j = e,
              x = null;
            t: for (;;) {
              for (
                var C;
                j !== n || (i !== 0 && j.nodeType !== 3) || (p = c + i),
                  j !== o || (r !== 0 && j.nodeType !== 3) || (m = c + r),
                  j.nodeType === 3 && (c += j.nodeValue.length),
                  (C = j.firstChild) !== null;

              )
                (x = j), (j = C);
              for (;;) {
                if (j === e) break t;
                if (
                  (x === n && ++_ === i && (p = c),
                  x === o && ++N === r && (m = c),
                  (C = j.nextSibling) !== null)
                )
                  break;
                (j = x), (x = j.parentNode);
              }
              j = C;
            }
            n = p === -1 || m === -1 ? null : { start: p, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Pu = { focusedElem: e, selectionRange: n }, Yo = !1, Ze = t;
      Ze !== null;

    )
      if (
        ((t = Ze), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Ze = e);
      else
        for (; Ze !== null; ) {
          t = Ze;
          try {
            var $ = t.alternate,
              J = t.flags;
            switch (t.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (J & 1024 && $ !== null) {
                  var Ee = $.memoizedProps,
                    w = $.memoizedState,
                    y = t.stateNode,
                    S = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? Ee : gt(t.type, Ee),
                      w
                    );
                  y.__reactInternalSnapshotBeforeUpdate = S;
                }
                break;
              case 3:
                J & 1024 && Vp(t.stateNode.containerInfo);
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (J & 1024) throw Error(u(163));
            }
          } catch (R) {
            we(t, t.return, R);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ze = e);
            break;
          }
          Ze = t.return;
        }
    return ($ = vf), (vf = !1), $;
  }
  function qr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.inst,
            c = o.destroy;
          c !== void 0 && ((o.destroy = void 0), Ra(t, n, c));
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function ja(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create,
            i = n.inst;
          (r = r()), (i.destroy = r);
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function yf(e, t) {
    try {
      ja(t, e);
    } catch (n) {
      we(e, e.return, n);
    }
  }
  function gf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        id(t, n);
      } catch (r) {
        we(e, e.return, r);
      }
    }
  }
  function kf(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src && (r.src = n.src);
      }
    } catch (i) {
      we(e, e.return, i);
    }
  }
  function wf(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        on(e, n), r & 4 && yf(n, 5);
        break;
      case 1:
        if ((on(e, n), r & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              we(n, n.return, p);
            }
          else {
            var i =
              n.elementType === n.type
                ? t.memoizedProps
                : gt(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              we(n, n.return, p);
            }
          }
        r & 64 && gf(n), r & 512 && vr(n, n.return);
        break;
      case 3:
        if ((on(e, n), r & 64 && ((r = n.updateQueue), r !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            id(r, e);
          } catch (p) {
            we(n, n.return, p);
          }
        }
        break;
      case 26:
        on(e, n), r & 512 && vr(n, n.return);
        break;
      case 27:
      case 5:
        on(e, n), t === null && r & 4 && kf(n), r & 512 && vr(n, n.return);
        break;
      case 12:
        on(e, n);
        break;
      case 13:
        on(e, n), r & 4 && Ef(e, n);
        break;
      case 22:
        if (n.mode & 1) {
          if (((i = n.memoizedState !== null || _n), !i)) {
            t = (t !== null && t.memoizedState !== null) || be;
            var o = _n,
              c = be;
            (_n = i),
              (be = t) && !c
                ? $n(e, n, (n.subtreeFlags & 8772) !== 0)
                : on(e, n),
              (_n = o),
              (be = c);
          }
        } else on(e, n);
        r & 512 &&
          (n.memoizedProps.mode === "manual"
            ? vr(n, n.return)
            : kt(n, n.return));
        break;
      default:
        on(e, n);
    }
  }
  function _f(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), _f(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Os(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Sf(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function La(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Oa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ns));
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Oa(e, t, n), e = e.sibling; e !== null; )
        Oa(e, t, n), (e = e.sibling);
  }
  function To(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (To(e, t, n), e = e.sibling; e !== null; )
        To(e, t, n), (e = e.sibling);
  }
  var Ie = null,
    wt = !1;
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) xf(e, t, n), (n = n.sibling);
  }
  function xf(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(ki, n);
      } catch {}
    switch (n.tag) {
      case 26:
        be || kt(n, t),
          ln(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        be || kt(n, t);
        var r = Ie,
          i = wt;
        for (
          Ie = n.stateNode, ln(e, t, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        Os(n), (Ie = r), (wt = i);
        break;
      case 5:
        be || kt(n, t);
      case 6:
        (r = Ie),
          (i = wt),
          (Ie = null),
          ln(e, t, n),
          (Ie = r),
          (wt = i),
          Ie !== null &&
            (wt
              ? ((e = Ie),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ie.removeChild(n.stateNode));
        break;
      case 18:
        Ie !== null &&
          (wt
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8
                ? Lu(e.parentNode, n)
                : e.nodeType === 1 && Lu(e, n),
              ll(e))
            : Lu(Ie, n.stateNode));
        break;
      case 4:
        (r = Ie),
          (i = wt),
          (Ie = n.stateNode.containerInfo),
          (wt = !0),
          ln(e, t, n),
          (Ie = r),
          (wt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var o = i.tag,
              c = i.inst,
              p = c.destroy;
            p !== void 0 &&
              (o & 2 || o & 4) &&
              ((c.destroy = void 0), Ra(n, t, p)),
              (i = i.next);
          } while (i !== r);
        }
        ln(e, t, n);
        break;
      case 1:
        if (
          !be &&
          (kt(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (m) {
            we(n, t, m);
          }
        ln(e, t, n);
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        kt(n, t),
          n.mode & 1
            ? ((be = (r = be) || n.memoizedState !== null),
              ln(e, t, n),
              (be = r))
            : ln(e, t, n);
        break;
      default:
        ln(e, t, n);
    }
  }
  function Ef(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ll(e);
      } catch (n) {
        we(t, t.return, n);
      }
  }
  function Ym(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mf()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new mf()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function za(e, t) {
    var n = Ym(e);
    t.forEach(function (r) {
      var i = iv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            c = t,
            p = c;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 27:
              case 5:
                (Ie = p.stateNode), (wt = !1);
                break e;
              case 3:
                (Ie = p.stateNode.containerInfo), (wt = !0);
                break e;
              case 4:
                (Ie = p.stateNode.containerInfo), (wt = !0);
                break e;
            }
            p = p.return;
          }
          if (Ie === null) throw Error(u(160));
          xf(o, c, i), (Ie = null), (wt = !1);
          var m = i.alternate;
          m !== null && (m.return = null), (i.return = null);
        } catch (_) {
          we(i, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Cf(t, e), (t = t.sibling);
  }
  var Ht = null;
  function Cf(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(t, e), Wt(e), r & 4)) {
          try {
            qr(3, e, e.return), ja(3, e);
          } catch (C) {
            we(e, e.return, C);
          }
          try {
            qr(5, e, e.return);
          } catch (C) {
            we(e, e.return, C);
          }
        }
        break;
      case 1:
        Ot(t, e),
          Wt(e),
          r & 512 && n !== null && kt(n, n.return),
          r & 64 &&
            _n &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? n : r.concat(n)))));
        break;
      case 26:
        var i = Ht;
        if (
          (Ot(t, e), Wt(e), r & 512 && n !== null && kt(n, n.return), r & 4)
        ) {
          if (
            ((t = n !== null ? n.memoizedState : null),
            (r = e.memoizedState),
            n === null)
          )
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  (n = e.type),
                    (r = e.memoizedProps),
                    (t = i.ownerDocument || i);
                  t: switch (n) {
                    case "title":
                      (i = t.getElementsByTagName("title")[0]),
                        (!i ||
                          i[_i] ||
                          i[qe] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = t.createElement(n)),
                          t.head.insertBefore(
                            i,
                            t.querySelector("head > title")
                          )),
                        Xe(i, n, r),
                        (i[qe] = e),
                        Ue(i),
                        (n = i);
                      break e;
                    case "link":
                      var o = Gp("link", "href", t).get(n + (r.href || ""));
                      if (o) {
                        for (var c = 0; c < o.length; c++)
                          if (
                            ((i = o[c]),
                            i.getAttribute("href") ===
                              (r.href == null ? null : r.href) &&
                              i.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              i.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              i.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            o.splice(c, 1);
                            break t;
                          }
                      }
                      (i = t.createElement(n)),
                        Xe(i, n, r),
                        t.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (o = Gp("meta", "content", t).get(
                          n + (r.content || "")
                        ))
                      ) {
                        for (c = 0; c < o.length; c++)
                          if (
                            ((i = o[c]),
                            i.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              i.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              i.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              i.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            o.splice(c, 1);
                            break t;
                          }
                      }
                      (i = t.createElement(n)),
                        Xe(i, n, r),
                        t.head.appendChild(i);
                      break;
                    default:
                      throw Error(u(468, n));
                  }
                  (i[qe] = e), Ue(i), (n = i);
                }
                e.stateNode = n;
              } else Yp(i, e.type, e.stateNode);
            else e.stateNode = Qp(i, r, e.memoizedProps);
          else if (t !== r)
            t === null
              ? n.stateNode !== null &&
                ((n = n.stateNode), n.parentNode.removeChild(n))
              : t.count--,
              r === null
                ? Yp(i, e.type, e.stateNode)
                : Qp(i, r, e.memoizedProps);
          else if (r === null && e.stateNode !== null) {
            e.updateQueue = null;
            try {
              var p = e.stateNode,
                m = e.memoizedProps;
              Ip(p, e.type, n.memoizedProps, m), (p[jn] = m);
            } catch (C) {
              we(e, e.return, C);
            }
          }
        }
        break;
      case 27:
        if (r & 4 && e.alternate === null) {
          for (i = e.stateNode, o = e.memoizedProps, c = i.firstChild; c; ) {
            var _ = c.nextSibling,
              N = c.nodeName;
            c[_i] ||
              N === "HEAD" ||
              N === "BODY" ||
              N === "SCRIPT" ||
              N === "STYLE" ||
              (N === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              i.removeChild(c),
              (c = _);
          }
          for (c = e.type, _ = i.attributes; _.length; )
            i.removeAttributeNode(_[0]);
          Xe(i, c, o), (i[qe] = e), (i[jn] = o);
        }
      case 5:
        if (
          (Ot(t, e),
          Wt(e),
          r & 512 && n !== null && kt(n, n.return),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            Lr(t, "");
          } catch (C) {
            we(e, e.return, C);
          }
        }
        if (r & 4 && ((r = e.stateNode), r != null)) {
          (t = e.memoizedProps),
            (n = n !== null ? n.memoizedProps : t),
            (i = e.type),
            (e.updateQueue = null);
          try {
            Ip(r, i, n, t), (r[jn] = t);
          } catch (C) {
            we(e, e.return, C);
          }
        }
        break;
      case 6:
        if ((Ot(t, e), Wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (n = e.stateNode), (r = e.memoizedProps);
          try {
            n.nodeValue = r;
          } catch (C) {
            we(e, e.return, C);
          }
        }
        break;
      case 3:
        if (
          ((os = null),
          (i = Ht),
          (Ht = is(t.containerInfo)),
          Ot(t, e),
          (Ht = i),
          Wt(e),
          r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ll(t.containerInfo);
          } catch (C) {
            we(e, e.return, C);
          }
        break;
      case 4:
        (n = Ht),
          (Ht = is(e.stateNode.containerInfo)),
          Ot(t, e),
          Wt(e),
          (Ht = n);
        break;
      case 13:
        Ot(t, e),
          Wt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Va = H()),
          r & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), za(e, n)));
        break;
      case 22:
        if (
          (r & 512 && n !== null && kt(n, n.return),
          (p = e.memoizedState !== null),
          (m = n !== null && n.memoizedState !== null),
          e.mode & 1)
        ) {
          var j = _n,
            x = be;
          (_n = j || p), (be = x || m), Ot(t, e), (be = x), (_n = j);
        } else Ot(t, e);
        if (
          (Wt(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          r & 8192 &&
            ((t._visibility = p ? t._visibility & -2 : t._visibility | 1),
            p &&
              ((t = _n || be), n === null || m || t || (e.mode & 1 && br(e))),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                n = t;
                try {
                  (i = t.stateNode),
                    p
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = t.stateNode),
                        (_ = t.memoizedProps.style),
                        (N =
                          _ != null && _.hasOwnProperty("display")
                            ? _.display
                            : null),
                        (c.style.display =
                          N == null || typeof N == "boolean"
                            ? ""
                            : ("" + N).trim()));
                } catch (C) {
                  we(e, e.return, C);
                }
              }
            } else if (t.tag === 6) {
              if (n === null)
                try {
                  t.stateNode.nodeValue = p ? "" : t.memoizedProps;
                } catch (C) {
                  we(e, e.return, C);
                }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        r & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((r = n.retryQueue),
            r !== null && ((n.retryQueue = null), za(e, r))));
        break;
      case 19:
        Ot(t, e),
          Wt(e),
          r & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), za(e, n)));
        break;
      case 21:
        break;
      default:
        Ot(t, e), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Sf(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(u(160));
          }
          switch (r.tag) {
            case 27:
              var i = r.stateNode,
                o = La(e);
              To(e, o, i);
              break;
            case 5:
              var c = r.stateNode;
              r.flags & 32 && (Lr(c, ""), (r.flags &= -33));
              var p = La(e);
              To(e, p, c);
              break;
            case 3:
            case 4:
              var m = r.stateNode.containerInfo,
                _ = La(e);
              Oa(e, _, m);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (N) {
        we(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function on(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) wf(e, t.alternate, t), (t = t.sibling);
  }
  function br(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qr(4, t, t.return), br(t);
          break;
        case 1:
          kt(t, t.return);
          var n = t.stateNode;
          if (typeof n.componentWillUnmount == "function") {
            var r = t,
              i = t.return;
            try {
              var o = r;
              (n.props = o.memoizedProps),
                (n.state = o.memoizedState),
                n.componentWillUnmount();
            } catch (c) {
              we(r, i, c);
            }
          }
          br(t);
          break;
        case 26:
        case 27:
        case 5:
          kt(t, t.return), br(t);
          break;
        case 22:
          kt(t, t.return), t.memoizedState === null && br(t);
          break;
        default:
          br(t);
      }
      e = e.sibling;
    }
  }
  function $n(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        i = e,
        o = t,
        c = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          $n(i, o, n), yf(o, 4);
          break;
        case 1:
          if (
            ($n(i, o, n),
            (i = o.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (m) {
              we(o, o.return, m);
            }
          if (((r = o.updateQueue), r !== null)) {
            var p = r.shared.hiddenCallbacks;
            if (p !== null)
              for (r.shared.hiddenCallbacks = null, r = 0; r < p.length; r++)
                rd(p[r], i);
          }
          n && c & 64 && gf(o), vr(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          $n(i, o, n), n && r === null && c & 4 && kf(o), vr(o, o.return);
          break;
        case 12:
          $n(i, o, n);
          break;
        case 13:
          $n(i, o, n), n && c & 4 && Ef(i, o);
          break;
        case 22:
          o.memoizedState === null && $n(i, o, n), vr(o, o.return);
          break;
        default:
          $n(i, o, n);
      }
      t = t.sibling;
    }
  }
  function Nf(e, t) {
    try {
      ja(t, e);
    } catch (n) {
      we(e, e.return, n);
    }
  }
  function Ia(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ui(n));
  }
  function Ma(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ui(e));
  }
  function yr(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Tf(e, t, n, r), (t = t.sibling);
  }
  function Tf(e, t, n, r) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yr(e, t, n, r), i & 2048 && Nf(t, 9);
        break;
      case 3:
        yr(e, t, n, r),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ui(e)));
        break;
      case 23:
        break;
      case 22:
        var o = t.stateNode;
        t.memoizedState !== null
          ? o._visibility & 4
            ? yr(e, t, n, r)
            : t.mode & 1
              ? Hi(e, t)
              : ((o._visibility |= 4), yr(e, t, n, r))
          : o._visibility & 4
            ? yr(e, t, n, r)
            : ((o._visibility |= 4),
              gr(e, t, n, r, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Ia(t.alternate, t);
        break;
      case 24:
        yr(e, t, n, r), i & 2048 && Ma(t.alternate, t);
        break;
      default:
        yr(e, t, n, r);
    }
  }
  function gr(e, t, n, r, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var o = e,
        c = t,
        p = n,
        m = r,
        _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          gr(o, c, p, m, i), Nf(c, 8);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null
            ? N._visibility & 4
              ? gr(o, c, p, m, i)
              : c.mode & 1
                ? Hi(o, c)
                : ((N._visibility |= 4), gr(o, c, p, m, i))
            : ((N._visibility |= 4), gr(o, c, p, m, i)),
            i && _ & 2048 && Ia(c.alternate, c);
          break;
        case 24:
          gr(o, c, p, m, i), i && _ & 2048 && Ma(c.alternate, c);
          break;
        default:
          gr(o, c, p, m, i);
      }
      t = t.sibling;
    }
  }
  function Hi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          r = t,
          i = r.flags;
        switch (r.tag) {
          case 22:
            Hi(n, r), i & 2048 && Ia(r.alternate, r);
            break;
          case 24:
            Hi(n, r), i & 2048 && Ma(r.alternate, r);
            break;
          default:
            Hi(n, r);
        }
        t = t.sibling;
      }
  }
  var Wi = 8192;
  function ei(e) {
    if (e.subtreeFlags & Wi)
      for (e = e.child; e !== null; ) Pf(e), (e = e.sibling);
  }
  function Pf(e) {
    switch (e.tag) {
      case 26:
        ei(e),
          e.flags & Wi &&
            e.memoizedState !== null &&
            _y(Ht, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ei(e);
        break;
      case 3:
      case 4:
        var t = Ht;
        (Ht = is(e.stateNode.containerInfo)), ei(e), (Ht = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Wi), (Wi = 16777216), ei(e), (Wi = t))
            : ei(e));
        break;
      default:
        ei(e);
    }
  }
  function Rf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Aa(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (Ze = r), Lf(r, e);
        }
      Rf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) jf(e), (e = e.sibling);
  }
  function jf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Aa(e), e.flags & 2048 && qr(9, e, e.return);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Po(e))
          : Aa(e);
        break;
      default:
        Aa(e);
    }
  }
  function Po(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (Ze = r), Lf(r, e);
        }
      Rf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          qr(8, t, t.return), Po(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), Po(t));
          break;
        default:
          Po(t);
      }
      e = e.sibling;
    }
  }
  function Lf(e, t) {
    for (; Ze !== null; ) {
      var n = Ze;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qr(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Ui(n.memoizedState.cache);
      }
      if (((r = n.child), r !== null)) (r.return = n), (Ze = r);
      else
        e: for (n = e; Ze !== null; ) {
          r = Ze;
          var i = r.sibling,
            o = r.return;
          if ((_f(r), r === n)) {
            Ze = null;
            break e;
          }
          if (i !== null) {
            (i.return = o), (Ze = i);
            break e;
          }
          Ze = o;
        }
    }
  }
  var Km = {
      getCacheSignal: function () {
        return Ke(ze).controller.signal;
      },
      getCacheForType: function (e) {
        var t = Ke(ze),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    Xm = typeof WeakMap == "function" ? WeakMap : Map,
    Ro = f.ReactCurrentDispatcher,
    jo = f.ReactCurrentCache,
    Lo = f.ReactCurrentOwner,
    zt = f.ReactCurrentBatchConfig,
    ie = 0,
    ke = null,
    le = null,
    ce = 0,
    Pe = 0,
    It = null,
    Da = !1,
    Sn = 0,
    Me = 0,
    ti = null,
    Zn = 0,
    ni = 0,
    Fa = 0,
    pt = 0,
    Qi = null,
    sn = null,
    ri = !1,
    Oo = !1,
    Va = 0,
    ii = 1 / 0,
    Gi = null,
    zo = !1,
    Ua = null,
    Bn = null,
    Io = !1,
    xn = null,
    Yi = 0,
    $a = 0,
    Za = null,
    Ki = 0,
    Ba = null;
  function En(e) {
    return e.mode & 1
      ? ie & 2 && ce !== 0
        ? ce & -ce
        : cf() !== null
          ? ((e = $r), e !== 0 ? e : Ks())
          : ((e = _e),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 32 : ip(e.type))),
            e)
      : 2;
  }
  function it(e, t, n) {
    ((e === ke && Pe === 2) || e.cancelPendingCommit !== null) &&
      (wr(e, 0), an(e, ce, pt)),
      Xi(e, n),
      (!(ie & 2) || e !== ke) &&
        (e === ke && (!(ie & 2) && (ni |= n), Me === 4 && an(e, ce, pt)),
        yt(e),
        n === 2 && ie === 0 && !(t.mode & 1) && ((ii = H() + 500), ur(!0)));
  }
  function Of(e, t) {
    if (ie & 6) throw Error(u(327));
    var n = e.callbackNode;
    if (li() && e.callbackNode !== n) return null;
    var r = Fl(e, e === ke ? ce : 0);
    if (r === 0) return null;
    var i = (r & 60) === 0 && (r & e.expiredLanes) === 0 && !t;
    if (((t = i ? bm(e, r) : Mo(e, r)), t !== 0)) {
      var o = i;
      do {
        if (t === 6) an(e, r, 0);
        else {
          if (((i = e.current.alternate), o && !Jm(i))) {
            (t = Mo(e, r)), (o = !1);
            continue;
          }
          if (t === 2) {
            o = r;
            var c = pc(e, o);
            c !== 0 && ((r = c), (t = zf(e, o, c)));
          }
          if (t === 1) throw ((n = ti), wr(e, 0), an(e, r, 0), yt(e), n);
          (e.finishedWork = i), (e.finishedLanes = r);
          e: {
            switch (((o = e), t)) {
              case 0:
              case 1:
                throw Error(u(345));
              case 4:
                if ((r & 4194176) === r) {
                  an(o, r, pt);
                  break e;
                }
                break;
              case 2:
              case 3:
              case 5:
                break;
              default:
                throw Error(u(329));
            }
            if ((r & 62914560) === r && ((t = Va + 300 - H()), 10 < t)) {
              if ((an(o, r, pt), Fl(o, 0) !== 0)) break e;
              o.timeoutHandle = Dp(If.bind(null, o, i, sn, Gi, ri, r, pt), t);
              break e;
            }
            If(o, i, sn, Gi, ri, r, pt);
          }
        }
        break;
      } while (!0);
    }
    return (
      yt(e), bc(e, H()), (e = e.callbackNode === n ? Of.bind(null, e) : null), e
    );
  }
  function zf(e, t, n) {
    var r = Qi,
      i = e.current.memoizedState.isDehydrated;
    if ((i && (wr(e, n).flags |= 256), (n = Mo(e, n)), n !== 2)) {
      if (Da && !i) return (e.errorRecoveryDisabledLanes |= t), (ni |= t), 4;
      (e = sn), (sn = r), e !== null && Ha(e);
    }
    return n;
  }
  function Ha(e) {
    sn === null ? (sn = e) : sn.push.apply(sn, e);
  }
  function If(e, t, n, r, i, o, c) {
    if (
      !(o & 42) &&
      ((vl = { stylesheets: null, count: 0, unsuspend: wy }),
      Pf(t),
      (t = Sy()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Ya.bind(null, e, n, r, i))), an(e, o, c);
      return;
    }
    Ya(e, n, r, i, c);
  }
  function Jm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!Pt(o(), i)) return !1;
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
  function Xi(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ie & 2 ? (ri = !0) : ie & 4 && (Oo = !0),
      Xa();
  }
  function an(e, t, n) {
    (t &= ~Fa), (t &= ~ni), (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
    for (var r = e.expirationTimes, i = t; 0 < i; ) {
      var o = 31 - Ct(i),
        c = 1 << o;
      (r[o] = -1), (i &= ~c);
    }
    n !== 0 && vc(e, n, t);
  }
  function Wa(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((ii = H() + 500), ur(!0));
    }
  }
  function kr(e) {
    xn !== null && xn.tag === 0 && !(ie & 6) && li();
    var t = ie;
    ie |= 1;
    var n = zt.transition,
      r = _e;
    try {
      if (((zt.transition = null), (_e = 2), e)) return e();
    } finally {
      (_e = r), (zt.transition = n), (ie = t), !(ie & 6) && ur(!1);
    }
  }
  function Qa() {
    if (le !== null) {
      if (Pe === 0) var e = le.return;
      else (e = le), _o(), ia(e), (Br = null), (Li = 0), (e = le);
      for (; e !== null; ) hf(e.alternate, e), (e = e.return);
      le = null;
    }
  }
  function wr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), ly(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Qa(),
      (ke = e),
      (le = n = Hn(e.current, null)),
      (ce = t),
      (Pe = 0),
      (It = null),
      (Da = !1),
      (Me = 0),
      (ti = null),
      (pt = Fa = ni = Zn = 0),
      (sn = Qi = null),
      (ri = !1),
      t & 8 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var i = 31 - Ct(r),
          o = 1 << i;
        (t |= e[i]), (r &= ~o);
      }
    return (Sn = t), Yl(), n;
  }
  function Mf(e, t) {
    (ae = null),
      (Wr.current = Vn),
      (Lo.current = null),
      t === eo
        ? ((t = ad()),
          (Pe = Af() && !(Zn & 134217727) && !(ni & 134217727) ? 2 : 3))
        : t === ld
          ? ((t = ad()), (Pe = 4))
          : (Pe =
              t === Kd
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (It = t),
      le === null && ((Me = 1), (ti = t));
  }
  function Af() {
    var e = en.current;
    return e === null
      ? !0
      : (ce & 4194176) === ce
        ? tn === null
        : (ce & 62914560) === ce || ce & 536870912
          ? e === tn
          : !1;
  }
  function Df() {
    var e = Ro.current;
    return (Ro.current = Vn), e === null ? Vn : e;
  }
  function Ff() {
    var e = jo.current;
    return (jo.current = Km), e;
  }
  function Ga() {
    (Me = 4),
      (!(Zn & 134217727) && !(ni & 134217727)) || ke === null || an(ke, ce, pt);
  }
  function Mo(e, t) {
    var n = ie;
    ie |= 2;
    var r = Df(),
      i = Ff();
    (ke !== e || ce !== t) && ((Gi = null), wr(e, t)), (t = !1);
    e: do
      try {
        if (Pe !== 0 && le !== null) {
          var o = le,
            c = It;
          switch (Pe) {
            case 8:
              Qa(), (Me = 6);
              break e;
            case 3:
            case 2:
              t || en.current !== null || (t = !0);
            default:
              (Pe = 0), (It = null), Ji(e, o, c);
          }
        }
        qm();
        break;
      } catch (p) {
        Mf(e, p);
      }
    while (!0);
    if (
      (t && e.shellSuspendCounter++,
      _o(),
      (ie = n),
      (Ro.current = r),
      (jo.current = i),
      le !== null)
    )
      throw Error(u(261));
    return (ke = null), (ce = 0), Yl(), Me;
  }
  function qm() {
    for (; le !== null; ) Vf(le);
  }
  function bm(e, t) {
    var n = ie;
    ie |= 2;
    var r = Df(),
      i = Ff();
    (ke !== e || ce !== t) && ((Gi = null), (ii = H() + 500), wr(e, t));
    e: do
      try {
        if (Pe !== 0 && le !== null) {
          t = le;
          var o = It;
          t: switch (Pe) {
            case 1:
              (Pe = 0), (It = null), Ji(e, t, o);
              break;
            case 2:
              if (od(o)) {
                (Pe = 0), (It = null), Uf(t);
                break;
              }
              (t = function () {
                Pe === 2 && ke === e && (Pe = 7), yt(e);
              }),
                o.then(t, t);
              break e;
            case 3:
              Pe = 7;
              break e;
            case 4:
              Pe = 5;
              break e;
            case 7:
              od(o)
                ? ((Pe = 0), (It = null), Uf(t))
                : ((Pe = 0), (It = null), Ji(e, t, o));
              break;
            case 5:
              switch (le.tag) {
                case 5:
                case 26:
                case 27:
                  (t = le), (Pe = 0), (It = null);
                  var c = t.sibling;
                  if (c !== null) le = c;
                  else {
                    var p = t.return;
                    p !== null ? ((le = p), Ao(p)) : (le = null);
                  }
                  break t;
              }
              (Pe = 0), (It = null), Ji(e, t, o);
              break;
            case 6:
              (Pe = 0), (It = null), Ji(e, t, o);
              break;
            case 8:
              Qa(), (Me = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        ev();
        break;
      } catch (m) {
        Mf(e, m);
      }
    while (!0);
    return (
      _o(),
      (Ro.current = r),
      (jo.current = i),
      (ie = n),
      le !== null ? 0 : ((ke = null), (ce = 0), Yl(), Me)
    );
  }
  function ev() {
    for (; le !== null && !T(); ) Vf(le);
  }
  function Vf(e) {
    var t = Ja(e.alternate, e, Sn);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ao(e) : (le = t),
      (Lo.current = null);
  }
  function Uf(e) {
    var t = e.alternate;
    switch (e.tag) {
      case 2:
        e.tag = 0;
      case 15:
      case 0:
        var n = e.type,
          r = e.pendingProps;
        r = e.elementType === n ? r : gt(n, r);
        var i = rt(n) ? zn : Ge.current;
        (i = lr(e, i)), (t = tf(t, e, r, n, i, ce));
        break;
      case 11:
        (n = e.type.render),
          (r = e.pendingProps),
          (r = e.elementType === n ? r : gt(n, r)),
          (t = tf(t, e, r, n, e.ref, ce));
        break;
      case 5:
        ia(e);
      default:
        hf(t, e), (e = le = Hf(e, Sn)), (t = Ja(t, e, Sn));
    }
    (e.memoizedProps = e.pendingProps),
      t === null ? Ao(e) : (le = t),
      (Lo.current = null);
  }
  function Ji(e, t, n) {
    _o(), ia(t), (Br = null), (Li = 0);
    var r = t.return;
    try {
      if (Om(e, r, t, n, ce)) {
        (Me = 1), (ti = n), (le = null);
        return;
      }
    } catch (i) {
      if (r !== null) throw ((le = r), i);
      (Me = 1), (ti = n), (le = null);
      return;
    }
    if (t.flags & 32768)
      e: {
        e = t;
        do {
          if (((t = Zm(e.alternate, e)), t !== null)) {
            (t.flags &= 32767), (le = t);
            break e;
          }
          (e = e.return),
            e !== null &&
              ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
            (le = e);
        } while (e !== null);
        (Me = 6), (le = null);
      }
    else Ao(t);
  }
  function Ao(e) {
    var t = e;
    do {
      e = t.return;
      var n = $m(t.alternate, t, Sn);
      if (n !== null) {
        le = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        le = t;
        return;
      }
      le = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Ya(e, t, n, r, i) {
    var o = _e,
      c = zt.transition;
    try {
      (zt.transition = null), (_e = 2), tv(e, t, n, r, o, i);
    } finally {
      (zt.transition = c), (_e = o);
    }
    return null;
  }
  function tv(e, t, n, r, i, o) {
    do li();
    while (xn !== null);
    if (ie & 6) throw Error(u(327));
    var c = e.finishedWork,
      p = e.finishedLanes;
    if (c === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), c === e.current))
      throw Error(u(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var m = c.lanes | c.childLanes;
    if (
      ((m |= Ws),
      lm(e, m, o),
      (Oo = !1),
      e === ke && ((le = ke = null), (ce = 0)),
      (!(c.subtreeFlags & 10256) && !(c.flags & 10256)) ||
        Io ||
        ((Io = !0),
        ($a = m),
        (Za = n),
        lv(Ce, function () {
          return li(), null;
        })),
      (n = (c.flags & 15990) !== 0),
      c.subtreeFlags & 15990 || n)
    ) {
      (n = zt.transition), (zt.transition = null), (o = _e), (_e = 2);
      var _ = ie;
      (ie |= 4),
        (Lo.current = null),
        Gm(e, c),
        Cf(c, e),
        Jv(Pu),
        (Yo = !!Tu),
        (Pu = Tu = null),
        (e.current = c),
        wf(e, c.alternate, c),
        X(),
        (ie = _),
        (_e = o),
        (zt.transition = n);
    } else e.current = c;
    if (
      (Io ? ((Io = !1), (xn = e), (Yi = p)) : $f(e, m),
      (m = e.pendingLanes),
      m === 0 && (Bn = null),
      em(c.stateNode),
      yt(e),
      t !== null)
    )
      for (i = e.onRecoverableError, c = 0; c < t.length; c++)
        (m = t[c]),
          (n = { digest: m.digest, componentStack: m.stack }),
          i(m.value, n);
    if (zo) throw ((zo = !1), (e = Ua), (Ua = null), e);
    return (
      Yi & 3 && e.tag !== 0 && li(),
      (m = e.pendingLanes),
      r || Oo || (p & 4194218 && m & 42)
        ? e === Ba
          ? Ki++
          : ((Ki = 0), (Ba = e))
        : (Ki = 0),
      ur(!1),
      null
    );
  }
  function $f(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ui(t)));
  }
  function li() {
    if (xn !== null) {
      var e = xn,
        t = $a;
      $a = 0;
      var n = gc(Yi),
        r = 32 > n ? 32 : n;
      n = zt.transition;
      var i = _e;
      try {
        if (((zt.transition = null), (_e = r), xn === null)) var o = !1;
        else {
          (r = Za), (Za = null);
          var c = xn,
            p = Yi;
          if (((xn = null), (Yi = 0), ie & 6)) throw Error(u(331));
          var m = ie;
          if (
            ((ie |= 4),
            jf(c.current),
            Tf(c, c.current, p, r),
            (ie = m),
            ur(!1),
            vt && typeof vt.onPostCommitFiberRoot == "function")
          )
            try {
              vt.onPostCommitFiberRoot(ki, c);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (_e = i), (zt.transition = n), $f(e, t);
      }
    }
    return !1;
  }
  function Zf(e, t, n) {
    (t = Xr(n, t)),
      (t = Qd(e, t, 2)),
      (e = gn(e, t, 2)),
      e !== null && (Xi(e, 2), yt(e));
  }
  function we(e, t, n) {
    if (e.tag === 3) Zf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(r)))
          ) {
            (e = Xr(n, e)),
              (e = Gd(t, e, 2)),
              (t = gn(t, e, 2)),
              t !== null && (Xi(t, 2), yt(t));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ka(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Xm();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) ||
      ((Da = !0), i.add(n), (e = nv.bind(null, e, t, n)), t.then(e, e));
  }
  function nv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      ie & 2 ? (ri = !0) : ie & 4 && (Oo = !0),
      Xa(),
      ke === e &&
        (ce & n) === n &&
        (Me === 4 || (Me === 3 && (ce & 62914560) === ce && 300 > H() - Va)
          ? !(ie & 2) && wr(e, 0)
          : (Fa |= n)),
      yt(e);
  }
  function Bf(e, t) {
    t === 0 && (t = e.mode & 1 ? mc() : 2),
      (e = Mn(e, t)),
      e !== null && (Xi(e, t), yt(e));
  }
  function rv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Bf(e, n);
  }
  function iv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Bf(e, n);
  }
  function Xa() {
    if (50 < Ki)
      throw (
        ((Ki = 0),
        (Ba = null),
        ie & 2 && ke !== null && (ke.errorRecoveryDisabledLanes |= ce),
        Error(u(185)))
      );
  }
  var Ja;
  Ja = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || dt.current) Ye = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), Mm(e, t, n);
        Ye = !!(e.flags & 131072);
      }
    else (Ye = !1), re && t.flags & 1048576 && Qc(t, Wl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ko(e, t), (e = t.pendingProps);
        var i = lr(t, Ge.current);
        wn(t, n), (i = uo(null, t, r, e, i, n));
        var o = co();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(r) ? ((o = !0), Bl(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              bl(t),
              (i.updater = yo),
              (t.stateNode = i),
              (i._reactInternals = t),
              pa(t, r, e, n),
              (t = ya(null, t, r, !0, o, n)))
            : ((t.tag = 0), re && o && Ql(t), $e(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ko(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = sv(r)),
            (e = gt(r, e)),
            i)
          ) {
            case 0:
              t = va(null, t, r, e, n);
              break e;
            case 1:
              t = nf(null, t, r, e, n);
              break e;
            case 11:
              t = Xd(null, t, r, e, n);
              break e;
            case 14:
              t = Jd(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          va(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          nf(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((rf(t), e === null)) throw Error(u(387));
          (i = t.pendingProps),
            (o = t.memoizedState),
            (r = o.element),
            Js(e, t),
            Pi(t, i, null, n);
          var c = t.memoizedState;
          if (
            ((i = c.cache),
            Un(t, ze, i),
            i !== o.cache && So(t, ze, n),
            Ti(),
            (i = c.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: i, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (r = Xr(Error(u(423)), t)), (t = lf(e, t, i, n, r));
              break e;
            } else if (i !== r) {
              (r = Xr(Error(u(424)), t)), (t = lf(e, t, i, n, r));
              break e;
            } else
              for (
                se = pl(t.stateNode.containerInfo.firstChild),
                  pe = t,
                  re = !0,
                  Bt = null,
                  qt = !0,
                  n = dd(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Dr(), i === r)) {
              t = nn(e, t, n);
              break e;
            }
            $e(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Vi(e, t),
          (n = t.memoizedState =
            yy(t.type, e === null ? null : e.memoizedProps, t.pendingProps)),
          e !== null ||
            re ||
            n !== null ||
            ((n = t.type),
            (e = t.pendingProps),
            (r = rs(Y.current).createElement(n)),
            (r[qe] = t),
            (r[jn] = e),
            Xe(r, n, e),
            Ue(r),
            (t.stateNode = r)),
          null
        );
      case 27:
        return (
          $t(t),
          e === null &&
            re &&
            ((r = t.stateNode = Zp(t.type, t.pendingProps, Y.current)),
            (pe = t),
            (qt = !0),
            (se = pl(r.firstChild))),
          (r = t.pendingProps.children),
          e !== null || re ? $e(e, t, r, n) : (t.child = cr(t, null, r, n)),
          Vi(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            re &&
            ((i = r = se),
            i
              ? Gc(t, i) ||
                (ar(t) && In(),
                (se = Mt(i)),
                (o = pe),
                se && Gc(t, se)
                  ? Gl(o, i)
                  : (Ar(pe, t), (re = !1), (pe = t), (se = r)))
              : (ar(t) && In(), Ar(pe, t), (re = !1), (pe = t), (se = r))),
          $t(t),
          (i = t.type),
          (o = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (r = o.children),
          Ru(i, o) ? (r = null) : c !== null && Ru(i, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = uo(e, t, Tm, null, null, n)),
            (ye._currentValue = i),
            Ye &&
              e !== null &&
              e.memoizedState.memoizedState !== i &&
              So(t, ye, n)),
          Vi(e, t),
          $e(e, t, r, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            re &&
            ((r = t.pendingProps !== ""),
            (e = n = se),
            e && r
              ? Yc(t, e) ||
                (ar(t) && In(),
                (se = Mt(e)),
                (r = pe),
                se && Yc(t, se)
                  ? Gl(r, e)
                  : (Ar(pe, t), (re = !1), (pe = t), (se = n)))
              : (ar(t) && In(), Ar(pe, t), (re = !1), (pe = t), (se = n))),
          null
        );
      case 13:
        return of(e, t, n);
      case 4:
        return (
          Jt(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = cr(t, null, r, n)) : $e(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          Xd(e, t, r, i, n)
        );
      case 7:
        return $e(e, t, t.pendingProps, n), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (c = i.value),
            Un(t, r, c),
            o !== null)
          )
            if (Pt(o.value, c)) {
              if (o.children === i.children && !dt.current) {
                t = nn(e, t, n);
                break e;
              }
            } else So(t, r, n);
          $e(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          wn(t, n),
          (i = Ke(i)),
          (r = r(i)),
          (t.flags |= 1),
          $e(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = gt(r, t.pendingProps)),
          (i = gt(r.type, i)),
          Jd(e, t, r, i, n)
        );
      case 15:
        return qd(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          ko(e, t),
          (t.tag = 1),
          rt(r) ? ((e = !0), Bl(t)) : (e = !1),
          wn(t, n),
          Bd(t, r, i),
          pa(t, r, i, n),
          ya(null, t, r, !0, e, n)
        );
      case 19:
        return af(e, t, n);
      case 22:
        return bd(e, t, n);
      case 24:
        return (
          wn(t, n),
          (r = Ke(ze)),
          e === null
            ? ((i = Ta()),
              i === null &&
                ((i = ke),
                (o = Na()),
                (i.pooledCache = o),
                o.refCount++,
                o !== null && (i.pooledCacheLanes |= n),
                (i = o)),
              (t.memoizedState = { parent: r, cache: i }),
              bl(t),
              Un(t, ze, i))
            : (e.lanes & n && (Js(e, t), Pi(t, null, null, n), Ti()),
              (i = e.memoizedState),
              (o = t.memoizedState),
              i.parent !== r
                ? ((i = { parent: r, cache: r }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Un(t, ze, r))
                : ((r = o.cache), Un(t, ze, r), r !== i.cache && So(t, ze, n))),
          $e(e, t, t.pendingProps.children, n),
          t.child
        );
    }
    throw Error(u(156, t.tag));
  };
  function lv(e, t) {
    return Zt(e, t);
  }
  function ov(e, t, n, r) {
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
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _t(e, t, n, r) {
    return new ov(e, t, n, r);
  }
  function qa(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function sv(e) {
    if (typeof e == "function") return qa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === he)) return 11;
      if (e === Ut) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = _t(e.tag, t, e.key, e.mode)),
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
      (n.flags = e.flags & 31457280),
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
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Hf(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Do(e, t, n, r, i, o) {
    var c = 2;
    if (((r = e), typeof e == "function")) qa(e) && (c = 1);
    else if (typeof e == "string")
      c = ky(e, n, O.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Qe:
          return _r(n.children, i, o, t);
        case tt:
          (c = 8), (i |= 8), i & 1 && (i |= 16);
          break;
        case Ft:
          return (
            (e = _t(12, n, t, i | 2)), (e.elementType = Ft), (e.lanes = o), e
          );
        case ot:
          return (e = _t(13, n, t, i)), (e.elementType = ot), (e.lanes = o), e;
        case st:
          return (e = _t(19, n, t, i)), (e.elementType = st), (e.lanes = o), e;
        case at:
          return Fo(n, i, o, t);
        case fn:
        case ht:
        case Et:
          return (e = _t(24, n, t, i)), (e.elementType = Et), (e.lanes = o), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Vt:
                c = 10;
                break e;
              case Ve:
                c = 9;
                break e;
              case xt:
              case he:
                c = 11;
                break e;
              case Ut:
                c = 14;
                break e;
              case Je:
                (c = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = _t(c, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function _r(e, t, n, r) {
    return (e = _t(7, e, r, t)), (e.lanes = n), e;
  }
  function Fo(e, t, n, r) {
    (e = _t(22, e, r, t)), (e.elementType = at), (e.lanes = n);
    var i = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var o = i._current;
        if (o === null) throw Error(u(456));
        if (!(i._pendingVisibility & 2)) {
          var c = Mn(o, 2);
          c !== null && ((i._pendingVisibility |= 2), it(c, o, 2));
        }
      },
      attach: function () {
        var o = i._current;
        if (o === null) throw Error(u(456));
        if (i._pendingVisibility & 2) {
          var c = Mn(o, 2);
          c !== null && ((i._pendingVisibility &= -3), it(c, o, 2));
        }
      },
    };
    return (e.stateNode = i), e;
  }
  function ba(e, t, n) {
    return (e = _t(6, e, null, t)), (e.lanes = n), e;
  }
  function eu(e, t, n) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function av(e, t, n, r, i, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Rs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Rs(0)),
      (this.hiddenUpdates = Rs(null)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map());
  }
  function tu(e, t, n, r, i, o, c, p, m, _, N) {
    return (
      (e = new av(e, t, n, p, m, N)),
      t === 1 ? ((t = 1), o === !0 && (t |= 24)) : (t = 0),
      (o = _t(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Na()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
      bl(o),
      e
    );
  }
  function uv(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Wf(e) {
    if (!e) return On;
    e = e._reactInternals;
    e: {
      if (ir(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (rt(n)) return Hc(e, n, t);
    }
    return t;
  }
  function Qf(e, t, n, r, i, o, c, p, m, _, N) {
    return (
      (e = tu(n, r, !0, e, i, o, c, p, m, _, N)),
      (e.context = Wf(null)),
      (n = e.current),
      (r = En(n)),
      (i = bt(r)),
      (i.callback = t ?? null),
      gn(n, i, r),
      (e.current.lanes = r),
      Xi(e, r),
      yt(e),
      e
    );
  }
  function Vo(e, t, n, r) {
    var i = t.current,
      o = En(i);
    return (
      (n = Wf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = bt(o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = gn(i, t, o)),
      e !== null && (it(e, i, o), Ni(e, i, o)),
      o
    );
  }
  function Uo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 27:
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cv(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = wi(t.pendingLanes);
          n !== 0 && (om(t, n), yt(t), !(ie & 6) && ((ii = H() + 500), ur(!1)));
        }
        break;
      case 13:
        kr(function () {
          var r = Mn(e, 2);
          r !== null && it(r, e, 2);
        }),
          nu(e, 2);
    }
  }
  function Gf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function nu(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t);
  }
  function Yf(e) {
    if (e.tag === 13) {
      var t = Mn(e, 67108864);
      t !== null && it(t, e, 67108864), nu(e, 67108864);
    }
  }
  function dv() {
    return null;
  }
  var ru = !1;
  function Kf(e, t, n) {
    if (ru) return e(t, n);
    ru = !0;
    try {
      return Wa(e, t, n);
    } finally {
      (ru = !1), (Or !== null || zr !== null) && (kr(), Fc());
    }
  }
  function qi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ln(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var iu = !1;
  if (hn)
    try {
      var bi = {};
      Object.defineProperty(bi, "passive", {
        get: function () {
          iu = !0;
        },
      }),
        window.addEventListener("test", bi, bi),
        window.removeEventListener("test", bi, bi);
    } catch {
      iu = !1;
    }
  function $o(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zo() {
    return !0;
  }
  function Xf() {
    return !1;
  }
  function St(e) {
    function t(n, r, i, o, c) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = c),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Zo
          : Xf),
        (this.isPropagationStopped = Xf),
        this
      );
    }
    return (
      d(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Zo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zo));
        },
        persist: function () {},
        isPersistent: Zo,
      }),
      t
    );
  }
  var oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bo = St(oi),
    el = d({}, oi, { view: 0, detail: 0 }),
    fv = St(el),
    lu,
    ou,
    tl,
    Ho = d({}, el, {
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
      getModifierState: au,
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
          : (e !== tl &&
              (tl && e.type === "mousemove"
                ? ((lu = e.screenX - tl.screenX), (ou = e.screenY - tl.screenY))
                : (ou = lu = 0),
              (tl = e)),
            lu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ou;
      },
    }),
    Jf = St(Ho),
    pv = d({}, Ho, { dataTransfer: 0 }),
    hv = St(pv),
    mv = d({}, el, { relatedTarget: 0 }),
    su = St(mv),
    vv = d({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yv = St(vv),
    gv = d({}, oi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kv = St(gv),
    wv = d({}, oi, { data: 0 }),
    qf = St(wv),
    _v = {
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
    Sv = {
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
    xv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ev(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = xv[e])
        ? !!t[e]
        : !1;
  }
  function au() {
    return Ev;
  }
  var Cv = d({}, el, {
      key: function (e) {
        if (e.key) {
          var t = _v[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Sv[e.keyCode] || "Unidentified"
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
      getModifierState: au,
      charCode: function (e) {
        return e.type === "keypress" ? $o(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $o(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Nv = St(Cv),
    Tv = d({}, Ho, {
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
    bf = St(Tv),
    Pv = d({}, el, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: au,
    }),
    Rv = St(Pv),
    jv = d({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lv = St(jv),
    Ov = d({}, Ho, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    zv = St(Ov);
  function Iv(e, t, n, r, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var o = Ln(i).action,
        c = r.submitter;
      if (
        (c &&
          ((t = (t = Ln(c)) ? t.formAction : c.getAttribute("formAction")),
          t != null && ((o = t), (c = null))),
        typeof o == "function")
      ) {
        var p = new Bo("action", "action", null, r, i);
        e.push({
          event: p,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (!r.defaultPrevented) {
                  if ((p.preventDefault(), c)) {
                    var m = c.ownerDocument.createElement("input");
                    (m.name = c.name),
                      (m.value = c.value),
                      c.parentNode.insertBefore(m, c);
                    var _ = new FormData(i);
                    m.parentNode.removeChild(m);
                  } else _ = new FormData(i);
                  Ad(
                    n,
                    { pending: !0, data: _, method: i.method, action: o },
                    o,
                    _
                  );
                }
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
  }
  var uu = !1,
    Wn = null,
    Qn = null,
    Gn = null,
    nl = new Map(),
    rl = new Map(),
    Yn = [],
    Mv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function ep(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Gn = null;
        break;
      case "pointerover":
      case "pointerout":
        nl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rl.delete(t.pointerId);
    }
  }
  function il(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = Nr(t)), t !== null && Yf(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Av(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Wn = il(Wn, e, t, n, r, i)), !0;
      case "dragenter":
        return (Qn = il(Qn, e, t, n, r, i)), !0;
      case "mouseover":
        return (Gn = il(Gn, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return nl.set(o, il(nl.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), rl.set(o, il(rl.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function tp(e) {
    var t = nr(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Vc(n)), t !== null)) {
            (e.blockedOn = t),
              sm(e.priority, function () {
                if (n.tag === 13) {
                  var r = En(n),
                    i = Mn(n, r);
                  i !== null && it(i, n, r), nu(n, r);
                }
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
  function Wo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = du(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ($s = r), n.target.dispatchEvent(r), ($s = null);
      } else return (t = Nr(n)), t !== null && Yf(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function np(e, t, n) {
    Wo(e) && n.delete(t);
  }
  function Dv() {
    (uu = !1),
      Wn !== null && Wo(Wn) && (Wn = null),
      Qn !== null && Wo(Qn) && (Qn = null),
      Gn !== null && Wo(Gn) && (Gn = null),
      nl.forEach(np),
      rl.forEach(np);
  }
  function Qo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      uu ||
        ((uu = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Dv)));
  }
  var Go = null;
  function rp(e) {
    Go !== e &&
      ((Go = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Go === e && (Go = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            i = e[t + 2];
          if (typeof r != "function") {
            if (fu(r || n) === null) continue;
            break;
          }
          var o = Nr(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ad(o, { pending: !0, data: i, method: n.method, action: r }, r, i));
        }
      }));
  }
  function ll(e) {
    function t(m) {
      return Qo(m, e);
    }
    Wn !== null && Qo(Wn, e),
      Qn !== null && Qo(Qn, e),
      Gn !== null && Qo(Gn, e),
      nl.forEach(t),
      rl.forEach(t);
    for (var n = 0; n < Yn.length; n++) {
      var r = Yn[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); )
      tp(n), n.blockedOn === null && Yn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (r = 0; r < n.length; r += 3) {
        var i = n[r],
          o = n[r + 1],
          c = Ln(i);
        if (typeof o == "function") c || rp(n);
        else if (c) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (((i = o), (c = Ln(o)))) p = c.formAction;
            else if (fu(i) !== null) continue;
          } else p = c.action;
          typeof p == "function" ? (n[r + 1] = p) : (n.splice(r, 3), (r -= 3)),
            rp(n);
        }
      }
  }
  var si = f.ReactCurrentBatchConfig,
    Yo = !0;
  function Fv(e, t, n, r) {
    var i = _e,
      o = si.transition;
    si.transition = null;
    try {
      (_e = 2), cu(e, t, n, r);
    } finally {
      (_e = i), (si.transition = o);
    }
  }
  function Vv(e, t, n, r) {
    var i = _e,
      o = si.transition;
    si.transition = null;
    try {
      (_e = 8), cu(e, t, n, r);
    } finally {
      (_e = i), (si.transition = o);
    }
  }
  function cu(e, t, n, r) {
    if (Yo) {
      var i = du(r);
      if (i === null) Eu(e, t, r, Ko, n), ep(e, r);
      else if (Av(i, e, t, n, r)) r.stopPropagation();
      else if ((ep(e, r), t & 4 && -1 < Mv.indexOf(e))) {
        for (; i !== null; ) {
          var o = Nr(i);
          if (
            (o !== null && cv(o),
            (o = du(r)),
            o === null && Eu(e, t, r, Ko, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else Eu(e, t, r, null, n);
    }
  }
  function du(e) {
    return (e = Zs(e)), fu(e);
  }
  var Ko = null;
  function fu(e) {
    if (((Ko = null), (e = nr(e)), e !== null)) {
      var t = ir(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = Vc(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Ko = e), null;
  }
  function ip(e) {
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
        return 2;
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
        return 8;
      case "message":
        switch (q()) {
          case oe:
            return 2;
          case ge:
            return 8;
          case Ce:
          case me:
            return 32;
          case ct:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kn = null,
    pu = null,
    Xo = null;
  function lp() {
    if (Xo) return Xo;
    var e,
      t = pu,
      n = t.length,
      r,
      i = "value" in Kn ? Kn.value : Kn.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === i[o - r]; r++);
    return (Xo = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  var Uv = [9, 13, 27, 32],
    hu = hn && "CompositionEvent" in window,
    ol = null;
  hn && "documentMode" in document && (ol = document.documentMode);
  var $v = hn && "TextEvent" in window && !ol,
    op = hn && (!hu || (ol && 8 < ol && 11 >= ol)),
    sp = " ",
    ap = !1;
  function up(e, t) {
    switch (e) {
      case "keyup":
        return Uv.indexOf(t.keyCode) !== -1;
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
  function cp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ai = !1;
  function Zv(e, t) {
    switch (e) {
      case "compositionend":
        return cp(t);
      case "keypress":
        return t.which !== 32 ? null : ((ap = !0), sp);
      case "textInput":
        return (e = t.data), e === sp && ap ? null : e;
      default:
        return null;
    }
  }
  function Bv(e, t) {
    if (ai)
      return e === "compositionend" || (!hu && up(e, t))
        ? ((e = lp()), (Xo = pu = Kn = null), (ai = !1), e)
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
        return op && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hv = {
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
  function dp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hv[e.type] : t === "textarea";
  }
  function fp(e, t, n, r) {
    Dc(r),
      (t = ts(t, "onChange")),
      0 < t.length &&
        ((n = new Bo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var sl = null,
    al = null;
  function Wv(e) {
    jp(e, 0);
  }
  function Jo(e) {
    var t = Tr(e);
    if (Nc(t)) return e;
  }
  function Qv(e, t) {
    if (e === "change") return t;
  }
  var pp = !1;
  if (hn) {
    var mu;
    if (hn) {
      var vu = "oninput" in document;
      if (!vu) {
        var hp = document.createElement("div");
        hp.setAttribute("oninput", "return;"),
          (vu = typeof hp.oninput == "function");
      }
      mu = vu;
    } else mu = !1;
    pp = mu && (!document.documentMode || 9 < document.documentMode);
  }
  function mp() {
    sl && (sl.detachEvent("onpropertychange", vp), (al = sl = null));
  }
  function vp(e) {
    if (e.propertyName === "value" && Jo(al)) {
      var t = [];
      fp(t, al, e, Zs(e)), Kf(Wv, t);
    }
  }
  function Gv(e, t, n) {
    e === "focusin"
      ? (mp(), (sl = t), (al = n), sl.attachEvent("onpropertychange", vp))
      : e === "focusout" && mp();
  }
  function Yv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jo(al);
  }
  function Kv(e, t) {
    if (e === "click") return Jo(t);
  }
  function Xv(e, t) {
    if (e === "input" || e === "change") return Jo(t);
  }
  function yp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gp(e, t) {
    var n = yp(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
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
      n = yp(n);
    }
  }
  function kp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? kp(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function wp() {
    for (var e = window, t = Ul(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ul(e.document);
    }
    return t;
  }
  function yu(e) {
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
  function Jv(e) {
    var t = wp(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      kp(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && yu(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          (r = r.end === void 0 ? o : Math.min(r.end, i)),
            !e.extend && o > r && ((i = r), (r = o), (o = i)),
            (i = gp(n, o));
          var c = gp(n, r);
          i &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
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
  var qv = hn && "documentMode" in document && 11 >= document.documentMode,
    ui = null,
    gu = null,
    ul = null,
    ku = !1;
  function _p(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ku ||
      ui == null ||
      ui !== Ul(r) ||
      ((r = ui),
      "selectionStart" in r && yu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ul && Ri(ul, r)) ||
        ((ul = r),
        (r = ts(gu, "onSelect")),
        0 < r.length &&
          ((t = new Bo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ui))));
  }
  function qo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var ci = {
      animationend: qo("Animation", "AnimationEnd"),
      animationiteration: qo("Animation", "AnimationIteration"),
      animationstart: qo("Animation", "AnimationStart"),
      transitionend: qo("Transition", "TransitionEnd"),
    },
    wu = {},
    Sp = {};
  hn &&
    ((Sp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ci.animationend.animation,
      delete ci.animationiteration.animation,
      delete ci.animationstart.animation),
    "TransitionEvent" in window || delete ci.transitionend.transition);
  function bo(e) {
    if (wu[e]) return wu[e];
    if (!ci[e]) return e;
    var t = ci[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sp) return (wu[e] = t[n]);
    return e;
  }
  var xp = bo("animationend"),
    Ep = bo("animationiteration"),
    Cp = bo("animationstart"),
    Np = bo("transitionend"),
    Tp = new Map(),
    Pp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Xn(e, t) {
    Tp.set(e, t), rr(t, [e]);
  }
  for (var _u = 0; _u < Pp.length; _u++) {
    var Su = Pp[_u],
      bv = Su.toLowerCase(),
      ey = Su[0].toUpperCase() + Su.slice(1);
    Xn(bv, "on" + ey);
  }
  Xn(xp, "onAnimationEnd"),
    Xn(Ep, "onAnimationIteration"),
    Xn(Cp, "onAnimationStart"),
    Xn("dblclick", "onDoubleClick"),
    Xn("focusin", "onFocus"),
    Xn("focusout", "onBlur"),
    Xn(Np, "onTransitionEnd"),
    Rr("onMouseEnter", ["mouseout", "mouseover"]),
    Rr("onMouseLeave", ["mouseout", "mouseover"]),
    Rr("onPointerEnter", ["pointerout", "pointerover"]),
    Rr("onPointerLeave", ["pointerout", "pointerover"]),
    rr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    rr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    rr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    rr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    rr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ty = new Set(
      "cancel close invalid load scroll scrollend toggle".split(" ").concat(cl)
    );
  function Rp(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Qm(r, t, void 0, e), (e.currentTarget = null);
  }
  function jp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var p = r[c],
              m = p.instance,
              _ = p.currentTarget;
            if (((p = p.listener), m !== o && i.isPropagationStopped()))
              break e;
            Rp(i, p, _), (o = m);
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((p = r[c]),
              (m = p.instance),
              (_ = p.currentTarget),
              (p = p.listener),
              m !== o && i.isPropagationStopped())
            )
              break e;
            Rp(i, p, _), (o = m);
          }
      }
    }
    if (No) throw ((e = Pa), (No = !1), (Pa = null), e);
  }
  function ve(e, t) {
    var n = t[Ls];
    n === void 0 && (n = t[Ls] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Lp(t, e, 2, !1), n.add(r));
  }
  function xu(e, t, n) {
    var r = 0;
    t && (r |= 4), Lp(n, e, r, t);
  }
  var es = "_reactListening" + Math.random().toString(36).slice(2);
  function dl(e) {
    if (!e[es]) {
      (e[es] = !0),
        wc.forEach(function (n) {
          n !== "selectionchange" && (ty.has(n) || xu(n, !1, e), xu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[es] || ((t[es] = !0), xu("selectionchange", !1, t));
    }
  }
  function Lp(e, t, n, r) {
    switch (ip(t)) {
      case 2:
        var i = Fv;
        break;
      case 8:
        i = Vv;
        break;
      default:
        i = cu;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !iu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function Eu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var p = r.stateNode.containerInfo;
          if (p === i || (p.nodeType === 8 && p.parentNode === i)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var m = c.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = c.stateNode.containerInfo),
                m === i || (m.nodeType === 8 && m.parentNode === i))
              )
                return;
              c = c.return;
            }
          for (; p !== null; ) {
            if (((c = nr(p)), c === null)) return;
            if (((m = c.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              r = o = c;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    Kf(function () {
      var _ = o,
        N = Zs(n),
        j = [];
      e: {
        var x = Tp.get(e);
        if (x !== void 0) {
          var C = Bo,
            $ = e;
          switch (e) {
            case "keypress":
              if ($o(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Nv;
              break;
            case "focusin":
              ($ = "focus"), (C = su);
              break;
            case "focusout":
              ($ = "blur"), (C = su);
              break;
            case "beforeblur":
            case "afterblur":
              C = su;
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
              C = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = hv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Rv;
              break;
            case xp:
            case Ep:
            case Cp:
              C = yv;
              break;
            case Np:
              C = Lv;
              break;
            case "scroll":
            case "scrollend":
              C = fv;
              break;
            case "wheel":
              C = zv;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = kv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = bf;
          }
          var J = (t & 4) !== 0,
            Ee = !J && (e === "scroll" || e === "scrollend"),
            w = J ? (x !== null ? x + "Capture" : null) : x;
          J = [];
          for (var y = _, S; y !== null; ) {
            var R = y;
            if (
              ((S = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                S === null ||
                w === null ||
                ((R = qi(y, w)), R != null && J.push(fl(y, R, S))),
              Ee)
            )
              break;
            y = y.return;
          }
          0 < J.length &&
            ((x = new C(x, $, null, n, N)), j.push({ event: x, listeners: J }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((x = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            x &&
              n !== $s &&
              ($ = n.relatedTarget || n.fromElement) &&
              (nr($) || $[pn]))
          )
            break e;
          if (
            (C || x) &&
            ((x =
              N.window === N
                ? N
                : (x = N.ownerDocument)
                  ? x.defaultView || x.parentWindow
                  : window),
            C
              ? (($ = n.relatedTarget || n.toElement),
                (C = _),
                ($ = $ ? nr($) : null),
                $ !== null &&
                  ((Ee = ir($)),
                  (J = $.tag),
                  $ !== Ee || (J !== 5 && J !== 27 && J !== 6)) &&
                  ($ = null))
              : ((C = null), ($ = _)),
            C !== $)
          ) {
            if (
              ((J = Jf),
              (R = "onMouseLeave"),
              (w = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = bf),
                (R = "onPointerLeave"),
                (w = "onPointerEnter"),
                (y = "pointer")),
              (Ee = C == null ? x : Tr(C)),
              (S = $ == null ? x : Tr($)),
              (x = new J(R, y + "leave", C, n, N)),
              (x.target = Ee),
              (x.relatedTarget = S),
              (R = null),
              nr(N) === _ &&
                ((J = new J(w, y + "enter", $, n, N)),
                (J.target = S),
                (J.relatedTarget = Ee),
                (R = J)),
              (Ee = R),
              C && $)
            )
              t: {
                for (J = C, w = $, y = 0, S = J; S; S = di(S)) y++;
                for (S = 0, R = w; R; R = di(R)) S++;
                for (; 0 < y - S; ) (J = di(J)), y--;
                for (; 0 < S - y; ) (w = di(w)), S--;
                for (; y--; ) {
                  if (J === w || (w !== null && J === w.alternate)) break t;
                  (J = di(J)), (w = di(w));
                }
                J = null;
              }
            else J = null;
            C !== null && Op(j, x, C, J, !1),
              $ !== null && Ee !== null && Op(j, Ee, $, J, !0);
          }
        }
        e: {
          if (
            ((x = _ ? Tr(_) : window),
            (C = x.nodeName && x.nodeName.toLowerCase()),
            C === "select" || (C === "input" && x.type === "file"))
          )
            var U = Qv;
          else if (dp(x))
            if (pp) U = Xv;
            else {
              U = Yv;
              var Z = Gv;
            }
          else
            (C = x.nodeName) &&
              C.toLowerCase() === "input" &&
              (x.type === "checkbox" || x.type === "radio") &&
              (U = Kv);
          if (U && (U = U(e, _))) {
            fp(j, U, n, N);
            break e;
          }
          Z && Z(e, x, _),
            e === "focusout" &&
              _ &&
              x.type === "number" &&
              _.memoizedProps.value != null &&
              Us(x, "number", x.value);
        }
        switch (((Z = _ ? Tr(_) : window), e)) {
          case "focusin":
            (dp(Z) || Z.contentEditable === "true") &&
              ((ui = Z), (gu = _), (ul = null));
            break;
          case "focusout":
            ul = gu = ui = null;
            break;
          case "mousedown":
            ku = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ku = !1), _p(j, n, N);
            break;
          case "selectionchange":
            if (qv) break;
          case "keydown":
          case "keyup":
            _p(j, n, N);
        }
        var W;
        if (hu)
          e: {
            switch (e) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break e;
              case "compositionend":
                Q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break e;
            }
            Q = void 0;
          }
        else
          ai
            ? up(e, n) && (Q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (op &&
            n.locale !== "ko" &&
            (ai || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && ai && (W = lp())
              : ((Kn = N),
                (pu = "value" in Kn ? Kn.value : Kn.textContent),
                (ai = !0))),
          (Z = ts(_, Q)),
          0 < Z.length &&
            ((Q = new qf(Q, e, null, n, N)),
            j.push({ event: Q, listeners: Z }),
            W ? (Q.data = W) : ((W = cp(n)), W !== null && (Q.data = W)))),
          (W = $v ? Zv(e, n) : Bv(e, n)) &&
            ((Q = ts(_, "onBeforeInput")),
            0 < Q.length &&
              ((Z = new qf("onBeforeInput", "beforeinput", null, n, N)),
              j.push({ event: Z, listeners: Q }),
              (Z.data = W))),
          Iv(j, e, _, n, N);
      }
      jp(j, t);
    });
  }
  function fl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ts(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      (i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          o === null ||
          ((i = qi(e, n)),
          i != null && r.unshift(fl(e, i, o)),
          (i = qi(e, t)),
          i != null && r.push(fl(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function di(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Op(e, t, n, r, i) {
    for (var o = t._reactName, c = []; n !== null && n !== r; ) {
      var p = n,
        m = p.alternate,
        _ = p.stateNode;
      if (((p = p.tag), m !== null && m === r)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        _ === null ||
        ((m = _),
        i
          ? ((_ = qi(n, o)), _ != null && c.unshift(fl(n, _, m)))
          : i || ((_ = qi(n, o)), _ != null && c.push(fl(n, _, m)))),
        (n = n.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var ny = /\r\n?/g,
    ry = /\u0000|\uFFFD/g;
  function zp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ny,
        `
`
      )
      .replace(ry, "");
  }
  function Cu(e, t, n) {
    if (((t = zp(t)), zp(e) !== t && n)) throw Error(u(425));
  }
  function ns() {}
  function xe(e, t, n, r, i, o) {
    switch (n) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || Lr(e, r)
          : typeof r == "number" && t !== "body" && Lr(e, "" + r);
        break;
      case "className":
        Is(e, "class", r);
        break;
      case "tabIndex":
        Is(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Is(e, n, r);
        break;
      case "style":
        Ic(e, r, o);
        break;
      case "src":
      case "href":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        e.setAttribute(n, "" + r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && xe(e, t, "name", i.name, i, null),
                xe(e, t, "formEncType", i.formEncType, i, null),
                xe(e, t, "formMethod", i.formMethod, i, null),
                xe(e, t, "formTarget", i.formTarget, i, null))
              : (xe(e, t, "encType", i.encType, i, null),
                xe(e, t, "method", i.method, i, null),
                xe(e, t, "target", i.target, i, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        e.setAttribute(n, "" + r);
        break;
      case "onClick":
        r != null && (e.onclick = ns);
        break;
      case "onScroll":
        r != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (((r = r.__html), r != null)) {
            if (i.children != null) throw Error(u(60));
            Oc(e, r);
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "" + r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "" + r)
          : e.removeAttribute(n);
        break;
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(n, "")
          : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(n)
          : e.setAttribute(n, r);
        break;
      case "xlinkActuate":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        mn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        mn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        mn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        mn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        zs(e, "is", r);
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((i = gm.get(n) || n), zs(e, i, r));
    }
  }
  function Nu(e, t, n, r, i, o) {
    switch (n) {
      case "style":
        Ic(e, r, o);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (((t = r.__html), t != null)) {
            if (i.children != null) throw Error(u(60));
            Oc(e, t);
          }
        }
        break;
      case "children":
        typeof r == "string" ? Lr(e, r) : typeof r == "number" && Lr(e, "" + r);
        break;
      case "onScroll":
        r != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        r != null && ve("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = ns);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      default:
        _c.hasOwnProperty(n) ||
          (typeof r == "boolean" && (r = "" + r), zs(e, n, r));
    }
  }
  function Xe(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        ve("invalid", e);
        var r = null,
          i = null,
          o = null,
          c = null,
          p = null,
          m = null;
        for (N in n)
          if (n.hasOwnProperty(N)) {
            var _ = n[N];
            if (_ != null)
              switch (N) {
                case "name":
                  r = _;
                  break;
                case "type":
                  i = _;
                  break;
                case "checked":
                  p = _;
                  break;
                case "defaultChecked":
                  m = _;
                  break;
                case "value":
                  o = _;
                  break;
                case "defaultValue":
                  c = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(u(137, t));
                  break;
                default:
                  xe(e, t, N, _, n, null);
              }
          }
        Tc(e, o, c, p, m, i, r, !1), Vl(e);
        return;
      case "select":
        ve("invalid", e);
        var N = (i = o = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((c = n[r]), c != null))
            switch (r) {
              case "value":
                o = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                N = c;
              default:
                xe(e, t, r, c, n, null);
            }
        (t = o),
          (n = i),
          (e.multiple = !!N),
          t != null ? jr(e, !!N, t, !1) : n != null && jr(e, !!N, n, !0);
        return;
      case "textarea":
        ve("invalid", e), (o = r = N = null);
        for (i in n)
          if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
            switch (i) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                r = c;
                break;
              case "children":
                o = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(u(91));
                break;
              default:
                xe(e, t, i, c, n, null);
            }
        Rc(e, N, r, o), Vl(e);
        return;
      case "option":
        for (c in n)
          if (n.hasOwnProperty(c) && ((N = n[c]), N != null))
            switch (c) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                xe(e, t, c, N, n, null);
            }
        return;
      case "dialog":
        ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (N = 0; N < cl.length; N++) ve(cl[N], e);
        break;
      case "image":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "img":
      case "link":
        ve("error", e), ve("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (p in n)
          if (n.hasOwnProperty(p) && ((N = n[p]), N != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                xe(e, t, p, N, n, null);
            }
        return;
      default:
        if (Mc(t)) {
          for (m in n)
            n.hasOwnProperty(m) &&
              ((N = n[m]), N != null && Nu(e, t, m, N, n, null));
          return;
        }
    }
    for (o in n)
      n.hasOwnProperty(o) && ((N = n[o]), N != null && xe(e, t, o, N, n, null));
  }
  function Ip(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          o = null,
          c = null,
          p = null,
          m = null,
          _ = null,
          N = null;
        for (C in n) {
          var j = n[C];
          if (n.hasOwnProperty(C) && j != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = j;
              default:
                r.hasOwnProperty(C) || xe(e, t, C, null, r, j);
            }
        }
        for (var x in r) {
          var C = r[x];
          if (((j = n[x]), r.hasOwnProperty(x) && (C != null || j != null)))
            switch (x) {
              case "type":
                o = C;
                break;
              case "name":
                i = C;
                break;
              case "checked":
                _ = C;
                break;
              case "defaultChecked":
                N = C;
                break;
              case "value":
                c = C;
                break;
              case "defaultValue":
                p = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, t));
                break;
              default:
                C !== j && xe(e, t, x, C, r, j);
            }
        }
        Vs(e, c, p, m, _, N, o, i);
        return;
      case "select":
        C = c = p = x = null;
        for (o in n)
          if (((m = n[o]), n.hasOwnProperty(o) && m != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                C = m;
              default:
                r.hasOwnProperty(o) || xe(e, t, o, null, r, m);
            }
        for (i in r)
          if (
            ((o = r[i]),
            (m = n[i]),
            r.hasOwnProperty(i) && (o != null || m != null))
          )
            switch (i) {
              case "value":
                x = o;
                break;
              case "defaultValue":
                p = o;
                break;
              case "multiple":
                c = o;
              default:
                o !== m && xe(e, t, i, o, r, m);
            }
        (t = p),
          (n = c),
          (r = C),
          x != null
            ? jr(e, !!n, x, !1)
            : !!r != !!n &&
              (t != null ? jr(e, !!n, t, !0) : jr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = x = null;
        for (p in n)
          if (
            ((i = n[p]),
            n.hasOwnProperty(p) && i != null && !r.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(e, t, p, null, r, i);
            }
        for (c in r)
          if (
            ((i = r[c]),
            (o = n[c]),
            r.hasOwnProperty(c) && (i != null || o != null))
          )
            switch (c) {
              case "value":
                x = i;
                break;
              case "defaultValue":
                C = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== o && xe(e, t, c, i, r, o);
            }
        Pc(e, x, C);
        return;
      case "option":
        for (var $ in n)
          if (
            ((x = n[$]),
            n.hasOwnProperty($) && x != null && !r.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                e.selected = !1;
                break;
              default:
                xe(e, t, $, null, r, x);
            }
        for (m in r)
          if (
            ((x = r[m]),
            (C = n[m]),
            r.hasOwnProperty(m) && x !== C && (x != null || C != null))
          )
            switch (m) {
              case "selected":
                e.selected =
                  x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                xe(e, t, m, x, r, C);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in n)
          (x = n[J]),
            n.hasOwnProperty(J) &&
              x != null &&
              !r.hasOwnProperty(J) &&
              xe(e, t, J, null, r, x);
        for (_ in r)
          if (
            ((x = r[_]),
            (C = n[_]),
            r.hasOwnProperty(_) && x !== C && (x != null || C != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(u(137, t));
                break;
              default:
                xe(e, t, _, x, r, C);
            }
        return;
      default:
        if (Mc(t)) {
          for (var Ee in n)
            (x = n[Ee]),
              n.hasOwnProperty(Ee) &&
                x != null &&
                !r.hasOwnProperty(Ee) &&
                Nu(e, t, Ee, null, r, x);
          for (N in r)
            (x = r[N]),
              (C = n[N]),
              !r.hasOwnProperty(N) ||
                x === C ||
                (x == null && C == null) ||
                Nu(e, t, N, x, r, C);
          return;
        }
    }
    for (var w in n)
      (x = n[w]),
        n.hasOwnProperty(w) &&
          x != null &&
          !r.hasOwnProperty(w) &&
          xe(e, t, w, null, r, x);
    for (j in r)
      (x = r[j]),
        (C = n[j]),
        !r.hasOwnProperty(j) ||
          x === C ||
          (x == null && C == null) ||
          xe(e, t, j, x, r, C);
  }
  var Tu = null,
    Pu = null;
  function rs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ap(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ru(e, t) {
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
  var ju = null;
  function iy() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ju
        ? !1
        : ((ju = e), !0)
      : ((ju = null), !1);
  }
  var Dp = typeof setTimeout == "function" ? setTimeout : void 0,
    ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fp = typeof Promise == "function" ? Promise : void 0,
    oy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fp < "u"
          ? function (e) {
              return Fp.resolve(null).then(e).catch(sy);
            }
          : Dp;
  function sy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Lu(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), ll(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    ll(t);
  }
  function Vp(e) {
    var t = e.nodeType;
    if (t === 9) Ou(e);
    else if (t === 1)
      switch (e.nodeName) {
        case "HEAD":
        case "HTML":
        case "BODY":
          Ou(e);
          break;
        default:
          e.textContent = "";
      }
  }
  function Ou(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ou(n), Os(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function ay(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[_i])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== i.rel ||
                e.getAttribute("href") !== (i.href == null ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Mt(e)), e === null)) break;
    }
    return null;
  }
  function uy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Mt(e)), e === null)
      )
        return null;
    return e;
  }
  function pl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Mt(e) {
    return pl(e.nextSibling);
  }
  function Up(e, t, n, r, i) {
    switch (((e[qe] = i), (e[jn] = n), (r = (i.mode & 1) !== 0), t)) {
      case "dialog":
        ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < cl.length; i++) ve(cl[i], e);
        break;
      case "source":
        ve("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "input":
        ve("invalid", e),
          Tc(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ),
          Vl(e);
        break;
      case "select":
        ve("invalid", e);
        break;
      case "textarea":
        ve("invalid", e), Rc(e, n.value, n.defaultValue, n.children), Vl(e);
    }
    (i = n.children),
      (typeof i != "string" && typeof i != "number") ||
        e.textContent === "" + i ||
        (n.suppressHydrationWarning !== !0 && Cu(e.textContent, i, r),
        r || t === "body" || (e.textContent = i)),
      n.onScroll != null && ve("scroll", e),
      n.onScrollEnd != null && ve("scrollend", e),
      n.onClick != null && (e.onclick = ns);
  }
  function $p(e) {
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
  function Zp(e, t, n) {
    switch (((t = rs(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  var At = new Map(),
    Bp = new Set();
  function is(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var zu = {
    prefetchDNS: cy,
    preconnect: dy,
    preload: fy,
    preloadModule: py,
    preinitStyle: hy,
    preinitScript: my,
    preinitModuleScript: vy,
  };
  function Hp(e, t, n) {
    var r = document;
    if (typeof t == "string" && t) {
      var i = Tt(t);
      (i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        Bp.has(i) ||
          (Bp.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          r.querySelector(i) === null &&
            ((t = r.createElement("link")),
            Xe(t, "link", e),
            Ue(t),
            r.head.appendChild(t)));
    }
  }
  function cy(e) {
    Hp("dns-prefetch", e, null);
  }
  function dy(e, t) {
    Hp("preconnect", e, t);
  }
  function fy(e, t, n) {
    var r = document;
    if (e && t && r) {
      var i = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Tt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + Tt(n.imageSizes) + '"]'))
        : (i += '[href="' + Tt(e) + '"]');
      var o = i;
      switch (t) {
        case "style":
          o = fi(e);
          break;
        case "script":
          o = pi(e);
      }
      At.has(o) ||
        ((e = d(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        At.set(o, e),
        r.querySelector(i) !== null ||
          (t === "style" && r.querySelector(hl(o))) ||
          (t === "script" && r.querySelector(ml(o))) ||
          ((t = r.createElement("link")),
          Xe(t, "link", e),
          Ue(t),
          r.head.appendChild(t)));
    }
  }
  function py(e, t) {
    var n = document;
    if (e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Tt(r) + '"][href="' + Tt(e) + '"]',
        o = i;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = pi(e);
      }
      if (
        !At.has(o) &&
        ((e = d({ rel: "modulepreload", href: e }, t)),
        At.set(o, e),
        n.querySelector(i) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ml(o))) return;
        }
        (r = n.createElement("link")),
          Xe(r, "link", e),
          Ue(r),
          n.head.appendChild(r);
      }
    }
  }
  function hy(e, t, n) {
    var r = document;
    if (e) {
      var i = Pr(r).hoistableStyles,
        o = fi(e);
      t = t || "default";
      var c = i.get(o);
      if (!c) {
        var p = { loading: 0, preload: null };
        if ((c = r.querySelector(hl(o)))) p.loading = 5;
        else {
          (e = d({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = At.get(o)) && Iu(e, n);
          var m = (c = r.createElement("link"));
          Ue(m),
            Xe(m, "link", e),
            (m._p = new Promise(function (_, N) {
              (m.onload = _), (m.onerror = N);
            })),
            m.addEventListener("load", function () {
              p.loading |= 1;
            }),
            m.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            ls(c, t, r);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: p }),
          i.set(o, c);
      }
    }
  }
  function my(e, t) {
    var n = document;
    if (e) {
      var r = Pr(n).hoistableScripts,
        i = pi(e),
        o = r.get(i);
      o ||
        ((o = n.querySelector(ml(i))),
        o ||
          ((e = d({ src: e, async: !0 }, t)),
          (t = At.get(i)) && Mu(e, t),
          (o = n.createElement("script")),
          Ue(o),
          Xe(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        r.set(i, o));
    }
  }
  function vy(e, t) {
    var n = document;
    if (e) {
      var r = Pr(n).hoistableScripts,
        i = pi(e),
        o = r.get(i);
      o ||
        ((o = n.querySelector(ml(i))),
        o ||
          ((e = d({ src: e, async: !0, type: "module" }, t)),
          (t = At.get(i)) && Mu(e, t),
          (o = n.createElement("script")),
          Ue(o),
          Xe(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        r.set(i, o));
    }
  }
  function yy(e, t, n) {
    if (((t = (t = Y.current) ? is(t) : null), !t)) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((n = fi(n.href)),
            (t = Pr(t).hoistableStyles),
            (e = t.get(n)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              t.set(n, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = fi(n.href);
          var r = Pr(t).hoistableStyles,
            i = r.get(e);
          return (
            i ||
              ((t = t.ownerDocument || t),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, i),
              At.has(e) ||
                gy(
                  t,
                  e,
                  {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  },
                  i.state
                )),
            i
          );
        }
        return null;
      case "script":
        return typeof n.src == "string" && n.async === !0
          ? ((n = pi(n.src)),
            (t = Pr(t).hoistableScripts),
            (e = t.get(n)),
            e ||
              ((e = { type: "script", instance: null, count: 0, state: null }),
              t.set(n, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function fi(e) {
    return 'href="' + Tt(e) + '"';
  }
  function hl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Wp(e) {
    return d({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function gy(e, t, n, r) {
    At.set(t, n),
      e.querySelector(hl(t)) ||
        (e.querySelector('link[rel="preload"][as="style"][' + t + "]")
          ? (r.loading = 1)
          : ((t = e.createElement("link")),
            (r.preload = t),
            t.addEventListener("load", function () {
              return (r.loading |= 1);
            }),
            t.addEventListener("error", function () {
              return (r.loading |= 2);
            }),
            Xe(t, "link", n),
            Ue(t),
            e.head.appendChild(t)));
  }
  function pi(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function ml(e) {
    return "script[async]" + e;
  }
  function Qp(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + Tt(n.href) + '"]');
          if (r) return (t.instance = r), Ue(r), r;
          var i = d({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            Ue(r),
            Xe(r, "style", i),
            ls(r, n.precedence, e),
            (t.instance = r)
          );
        case "stylesheet":
          i = fi(n.href);
          var o = e.querySelector(hl(i));
          if (o) return (t.state.loading |= 4), (t.instance = o), Ue(o), o;
          (r = Wp(n)),
            (i = At.get(i)) && Iu(r, i),
            (o = (e.ownerDocument || e).createElement("link")),
            Ue(o);
          var c = o;
          return (
            (c._p = new Promise(function (p, m) {
              (c.onload = p), (c.onerror = m);
            })),
            Xe(o, "link", r),
            (t.state.loading |= 4),
            ls(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = pi(n.src)),
            (i = e.querySelector(ml(o)))
              ? ((t.instance = i), Ue(i), i)
              : ((r = n),
                (i = At.get(o)) && ((r = d({}, n)), Mu(r, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Ue(i),
                Xe(i, "link", r),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((r = t.instance), (t.state.loading |= 4), ls(r, n.precedence, e));
    return t.instance;
  }
  function ls(e, t, n) {
    for (
      var r = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = r.length ? r[r.length - 1] : null,
        o = i,
        c = 0;
      c < r.length;
      c++
    ) {
      var p = r[c];
      if (p.dataset.precedence === t) o = p;
      else if (o !== i) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Iu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Mu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var os = null;
  function Gp(e, t, n) {
    if (os === null) {
      var r = new Map(),
        i = (os = new Map());
      i.set(n, r);
    } else (i = os), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
    if (r.has(e)) return r;
    for (
      r.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var o = n[i];
      if (
        !(
          o[_i] ||
          o[qe] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = o.getAttribute(t) || "";
        c = e + c;
        var p = r.get(c);
        p ? p.push(o) : r.set(c, [o]);
      }
    }
    return r;
  }
  function Yp(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function ky(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async === !0 &&
          !t.onLoad &&
          !t.onError &&
          typeof t.src == "string" &&
          t.src
        )
          return !0;
    }
    return !1;
  }
  var vl = null;
  function wy() {}
  function _y(e, t, n) {
    if (vl === null) throw Error(u(475));
    var r = vl;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var i = fi(n.href),
          o = e.querySelector(hl(i));
        if (o) {
          (e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (r.count++, (r = ss.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = o),
            Ue(o);
          return;
        }
        (o = e.ownerDocument || e),
          (n = Wp(n)),
          (i = At.get(i)) && Iu(n, i),
          (o = o.createElement("link")),
          Ue(o);
        var c = o;
        (c._p = new Promise(function (p, m) {
          (c.onload = p), (c.onerror = m);
        })),
          Xe(o, "link", n),
          (t.instance = o);
      }
      r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (r.count++,
          (t = ss.bind(r)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Sy() {
    if (vl === null) throw Error(u(475));
    var e = vl;
    return (
      e.stylesheets && e.count === 0 && Au(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Au(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                (e.unsuspend = null), r();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function ss() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Au(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var as = null;
  function Au(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (as = new Map()),
        t.forEach(xy, e),
        (as = null),
        ss.call(e));
  }
  function xy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = as.get(e);
      if (n) var r = n.get(null);
      else {
        (n = new Map()), as.set(e, n);
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < i.length;
          o++
        ) {
          var c = i[o];
          (c.nodeName === "link" || c.getAttribute("media") !== "not all") &&
            (n.set(c.dataset.precedence, c), (r = c));
        }
        r && n.set(null, r);
      }
      (i = t.instance),
        (c = i.getAttribute("data-precedence")),
        (o = n.get(c) || r),
        o === r && n.set(null, i),
        n.set(c, i),
        this.count++,
        (r = ss.bind(this)),
        i.addEventListener("load", r),
        i.addEventListener("error", r),
        o
          ? o.parentNode.insertBefore(i, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Du = a.Dispatcher;
  typeof document < "u" && (Du.current = zu);
  var Kp =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Fu(e) {
    this._internalRoot = e;
  }
  (us.prototype.render = Fu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Vo(e, t, null, null);
    }),
    (us.prototype.unmount = Fu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          kr(function () {
            Vo(null, e, null, null);
          }),
            (t[pn] = null);
        }
      });
  function us(e) {
    this._internalRoot = e;
  }
  us.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _e;
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++);
      Yn.splice(n, 0, e), n === 0 && tp(e);
    }
  };
  function Vu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function cs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Xp() {}
  function Ey(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var _ = Uo(c);
          o.call(_);
        };
      }
      var c = Qf(t, r, e, 0, null, !1, !1, "", Xp, null, null);
      return (
        (e._reactRootContainer = c),
        (e[pn] = c.current),
        dl(e.nodeType === 8 ? e.parentNode : e),
        kr(),
        c
      );
    }
    if ((Vp(e), typeof r == "function")) {
      var p = r;
      r = function () {
        var _ = Uo(m);
        p.call(_);
      };
    }
    var m = tu(e, 0, !1, null, null, !1, !1, "", Xp, null, null);
    return (
      (e._reactRootContainer = m),
      (e[pn] = m.current),
      dl(e.nodeType === 8 ? e.parentNode : e),
      kr(function () {
        Vo(t, m, n, r);
      }),
      m
    );
  }
  function ds(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var c = o;
      if (typeof i == "function") {
        var p = i;
        i = function () {
          var m = Uo(c);
          p.call(m);
        };
      }
      Vo(t, c, e, i);
    } else c = Ey(n, t, e, i, r);
    return Uo(c);
  }
  function fs(e, t) {
    if (e === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  var hi = a.Dispatcher;
  a.Events = [Nr, Tr, Ln, Dc, Fc, Wa];
  var yl = {
      findFiberByHostInstance: nr,
      bundleType: 0,
      version: "18.3.0-canary-14898b6a9-20240318",
      rendererPackageName: "react-dom",
    },
    Cy = {
      bundleType: yl.bundleType,
      version: yl.version,
      rendererPackageName: yl.rendererPackageName,
      rendererConfig: yl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: f.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $c(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yl.findFiberByHostInstance || dv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.0-canary-14898b6a9-20240318",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ps.isDisabled && ps.supportsFiber)
      try {
        (ki = ps.inject(Cy)), (vt = ps);
      } catch {}
  }
  return (
    (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a),
    (je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vu(t)) throw Error(u(299));
      return uv(e, t, null, n);
    }),
    (je.createRoot = function (e, t) {
      if (!Vu(e)) throw Error(u(299));
      var n = !1,
        r = "",
        i = Kp,
        o = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (o = t.unstable_transitionCallbacks)),
        (t = tu(e, 1, !1, null, null, n, !1, r, i, o, null)),
        (e[pn] = t.current),
        (Du.current = zu),
        dl(e.nodeType === 8 ? e.parentNode : e),
        new Fu(t)
      );
    }),
    (je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = $c(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (je.flushSync = function (e) {
      return kr(e);
    }),
    (je.hydrate = function (e, t, n) {
      if (!cs(t)) throw Error(u(299));
      return ds(null, e, t, !0, n);
    }),
    (je.hydrateRoot = function (e, t, n) {
      if (!Vu(e)) throw Error(u(299));
      var r = !1,
        i = "",
        o = Kp,
        c = null,
        p = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (c = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (p = n.formState)),
        (t = Qf(t, null, e, 1, n ?? null, r, !1, i, o, c, p)),
        (e[pn] = t.current),
        (Du.current = zu),
        dl(e),
        new us(t)
      );
    }),
    (je.preconnect = function (e, t) {
      var n = hi.current;
      n &&
        typeof e == "string" &&
        (t
          ? ((t = t.crossOrigin),
            (t =
              typeof t == "string"
                ? t === "use-credentials"
                  ? t
                  : ""
                : void 0))
          : (t = null),
        n.preconnect(e, t));
    }),
    (je.prefetchDNS = function (e) {
      var t = hi.current;
      t && typeof e == "string" && t.prefetchDNS(e);
    }),
    (je.preinit = function (e, t) {
      var n = hi.current;
      if (n && typeof e == "string" && t && typeof t.as == "string") {
        var r = t.as,
          i = fs(r, t.crossOrigin),
          o = typeof t.integrity == "string" ? t.integrity : void 0,
          c = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
        r === "style"
          ? n.preinitStyle(
              e,
              typeof t.precedence == "string" ? t.precedence : void 0,
              { crossOrigin: i, integrity: o, fetchPriority: c }
            )
          : r === "script" &&
            n.preinitScript(e, {
              crossOrigin: i,
              integrity: o,
              fetchPriority: c,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
      }
    }),
    (je.preinitModule = function (e, t) {
      var n = hi.current;
      if (n && typeof e == "string")
        if (typeof t == "object" && t !== null) {
          if (t.as == null || t.as === "script") {
            var r = fs(t.as, t.crossOrigin);
            n.preinitModuleScript(e, {
              crossOrigin: r,
              integrity: typeof t.integrity == "string" ? t.integrity : void 0,
              nonce: typeof t.nonce == "string" ? t.nonce : void 0,
            });
          }
        } else t == null && n.preinitModuleScript(e);
    }),
    (je.preload = function (e, t) {
      var n = hi.current;
      if (
        n &&
        typeof e == "string" &&
        typeof t == "object" &&
        t !== null &&
        typeof t.as == "string"
      ) {
        var r = t.as,
          i = fs(r, t.crossOrigin);
        n.preload(e, r, {
          crossOrigin: i,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
          type: typeof t.type == "string" ? t.type : void 0,
          fetchPriority:
            typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
          referrerPolicy:
            typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
          imageSrcSet:
            typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
          imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        });
      }
    }),
    (je.preloadModule = function (e, t) {
      var n = hi.current;
      if (n && typeof e == "string")
        if (t) {
          var r = fs(t.as, t.crossOrigin);
          n.preloadModule(e, {
            as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
            crossOrigin: r,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          });
        } else n.preloadModule(e);
    }),
    (je.render = function (e, t, n) {
      if (!cs(t)) throw Error(u(299));
      return ds(null, e, t, !1, n);
    }),
    (je.unmountComponentAtNode = function (e) {
      if (!cs(e)) throw Error(u(299));
      return e._reactRootContainer
        ? (kr(function () {
            ds(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[pn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (je.unstable_batchedUpdates = Wa),
    (je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!cs(n)) throw Error(u(299));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return ds(e, t, n, !1, r);
    }),
    (je.useFormState = function (e, t, n) {
      return v.current.useFormState(e, t, n);
    }),
    (je.useFormStatus = function () {
      return v.current.useHostTransitionStatus();
    }),
    (je.version = "18.3.0-canary-14898b6a9-20240318"),
    je
  );
}
function xh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xh);
    } catch (s) {
      console.error(s);
    }
}
xh(), (Sh.exports = Oy());
var zy = Sh.exports,
  Eh,
  rh = zy;
(Eh = rh.createRoot), rh.hydrateRoot;
var F = rc();
const Iy = Ty(F);
typeof document < "u" && Iy.useLayoutEffect;
function My(...s) {
  return s.length === 1
    ? s[0]
    : (l) => {
        for (let a of s)
          typeof a == "function" ? a(l) : a != null && (a.current = l);
      };
}
let kl = new Map(),
  ih = new Set();
function lh() {
  if (typeof window > "u") return;
  let s = (a) => {
      let u = kl.get(a.target);
      u ||
        ((u = new Set()),
        kl.set(a.target, u),
        a.target.addEventListener("transitioncancel", l)),
        u.add(a.propertyName);
    },
    l = (a) => {
      let u = kl.get(a.target);
      if (
        u &&
        (u.delete(a.propertyName),
        u.size === 0 &&
          (a.target.removeEventListener("transitioncancel", l),
          kl.delete(a.target)),
        kl.size === 0)
      ) {
        for (let d of ih) d();
        ih.clear();
      }
    };
  document.body.addEventListener("transitionrun", s),
    document.body.addEventListener("transitionend", l);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? lh()
    : document.addEventListener("DOMContentLoaded", lh));
var fe;
(function (s) {
  s.assertEqual = (d) => d;
  function l(d) {}
  s.assertIs = l;
  function a(d) {
    throw new Error();
  }
  (s.assertNever = a),
    (s.arrayToEnum = (d) => {
      const f = {};
      for (const v of d) f[v] = v;
      return f;
    }),
    (s.getValidEnumValues = (d) => {
      const f = s.objectKeys(d).filter((g) => typeof d[d[g]] != "number"),
        v = {};
      for (const g of f) v[g] = d[g];
      return s.objectValues(v);
    }),
    (s.objectValues = (d) =>
      s.objectKeys(d).map(function (f) {
        return d[f];
      })),
    (s.objectKeys =
      typeof Object.keys == "function"
        ? (d) => Object.keys(d)
        : (d) => {
            const f = [];
            for (const v in d)
              Object.prototype.hasOwnProperty.call(d, v) && f.push(v);
            return f;
          }),
    (s.find = (d, f) => {
      for (const v of d) if (f(v)) return v;
    }),
    (s.isInteger =
      typeof Number.isInteger == "function"
        ? (d) => Number.isInteger(d)
        : (d) => typeof d == "number" && isFinite(d) && Math.floor(d) === d);
  function u(d, f = " | ") {
    return d.map((v) => (typeof v == "string" ? `'${v}'` : v)).join(f);
  }
  (s.joinValues = u),
    (s.jsonStringifyReplacer = (d, f) =>
      typeof f == "bigint" ? f.toString() : f);
})(fe || (fe = {}));
var qu;
(function (s) {
  s.mergeShapes = (l, a) => ({ ...l, ...a });
})(qu || (qu = {}));
const A = fe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  qn = (s) => {
    switch (typeof s) {
      case "undefined":
        return A.undefined;
      case "string":
        return A.string;
      case "number":
        return isNaN(s) ? A.nan : A.number;
      case "boolean":
        return A.boolean;
      case "function":
        return A.function;
      case "bigint":
        return A.bigint;
      case "symbol":
        return A.symbol;
      case "object":
        return Array.isArray(s)
          ? A.array
          : s === null
            ? A.null
            : s.then &&
                typeof s.then == "function" &&
                s.catch &&
                typeof s.catch == "function"
              ? A.promise
              : typeof Map < "u" && s instanceof Map
                ? A.map
                : typeof Set < "u" && s instanceof Set
                  ? A.set
                  : typeof Date < "u" && s instanceof Date
                    ? A.date
                    : A.object;
      default:
        return A.unknown;
    }
  },
  L = fe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Ay = (s) => JSON.stringify(s, null, 2).replace(/"([^"]+)":/g, "$1:");
class Gt extends Error {
  constructor(l) {
    super(),
      (this.issues = []),
      (this.addIssue = (u) => {
        this.issues = [...this.issues, u];
      }),
      (this.addIssues = (u = []) => {
        this.issues = [...this.issues, ...u];
      });
    const a = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, a)
      : (this.__proto__ = a),
      (this.name = "ZodError"),
      (this.issues = l);
  }
  get errors() {
    return this.issues;
  }
  format(l) {
    const a =
        l ||
        function (f) {
          return f.message;
        },
      u = { _errors: [] },
      d = (f) => {
        for (const v of f.issues)
          if (v.code === "invalid_union") v.unionErrors.map(d);
          else if (v.code === "invalid_return_type") d(v.returnTypeError);
          else if (v.code === "invalid_arguments") d(v.argumentsError);
          else if (v.path.length === 0) u._errors.push(a(v));
          else {
            let g = u,
              P = 0;
            for (; P < v.path.length; ) {
              const E = v.path[P];
              P === v.path.length - 1
                ? ((g[E] = g[E] || { _errors: [] }), g[E]._errors.push(a(v)))
                : (g[E] = g[E] || { _errors: [] }),
                (g = g[E]),
                P++;
            }
          }
      };
    return d(this), u;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, fe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(l = (a) => a.message) {
    const a = {},
      u = [];
    for (const d of this.issues)
      d.path.length > 0
        ? ((a[d.path[0]] = a[d.path[0]] || []), a[d.path[0]].push(l(d)))
        : u.push(l(d));
    return { formErrors: u, fieldErrors: a };
  }
  get formErrors() {
    return this.flatten();
  }
}
Gt.create = (s) => new Gt(s);
const xl = (s, l) => {
  let a;
  switch (s.code) {
    case L.invalid_type:
      s.received === A.undefined
        ? (a = "Required")
        : (a = `Expected ${s.expected}, received ${s.received}`);
      break;
    case L.invalid_literal:
      a = `Invalid literal value, expected ${JSON.stringify(s.expected, fe.jsonStringifyReplacer)}`;
      break;
    case L.unrecognized_keys:
      a = `Unrecognized key(s) in object: ${fe.joinValues(s.keys, ", ")}`;
      break;
    case L.invalid_union:
      a = "Invalid input";
      break;
    case L.invalid_union_discriminator:
      a = `Invalid discriminator value. Expected ${fe.joinValues(s.options)}`;
      break;
    case L.invalid_enum_value:
      a = `Invalid enum value. Expected ${fe.joinValues(s.options)}, received '${s.received}'`;
      break;
    case L.invalid_arguments:
      a = "Invalid function arguments";
      break;
    case L.invalid_return_type:
      a = "Invalid function return type";
      break;
    case L.invalid_date:
      a = "Invalid date";
      break;
    case L.invalid_string:
      typeof s.validation == "object"
        ? "includes" in s.validation
          ? ((a = `Invalid input: must include "${s.validation.includes}"`),
            typeof s.validation.position == "number" &&
              (a = `${a} at one or more positions greater than or equal to ${s.validation.position}`))
          : "startsWith" in s.validation
            ? (a = `Invalid input: must start with "${s.validation.startsWith}"`)
            : "endsWith" in s.validation
              ? (a = `Invalid input: must end with "${s.validation.endsWith}"`)
              : fe.assertNever(s.validation)
        : s.validation !== "regex"
          ? (a = `Invalid ${s.validation}`)
          : (a = "Invalid");
      break;
    case L.too_small:
      s.type === "array"
        ? (a = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)`)
        : s.type === "string"
          ? (a = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)`)
          : s.type === "number"
            ? (a = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}`)
            : s.type === "date"
              ? (a = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}`)
              : (a = "Invalid input");
      break;
    case L.too_big:
      s.type === "array"
        ? (a = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)`)
        : s.type === "string"
          ? (a = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)`)
          : s.type === "number"
            ? (a = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
            : s.type === "bigint"
              ? (a = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
              : s.type === "date"
                ? (a = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}`)
                : (a = "Invalid input");
      break;
    case L.custom:
      a = "Invalid input";
      break;
    case L.invalid_intersection_types:
      a = "Intersection results could not be merged";
      break;
    case L.not_multiple_of:
      a = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case L.not_finite:
      a = "Number must be finite";
      break;
    default:
      (a = l.defaultError), fe.assertNever(s);
  }
  return { message: a };
};
let Ch = xl;
function Dy(s) {
  Ch = s;
}
function vs() {
  return Ch;
}
const ys = (s) => {
    const { data: l, path: a, errorMaps: u, issueData: d } = s,
      f = [...a, ...(d.path || [])],
      v = { ...d, path: f };
    let g = "";
    const P = u
      .filter((E) => !!E)
      .slice()
      .reverse();
    for (const E of P) g = E(v, { data: l, defaultError: g }).message;
    return { ...d, path: f, message: d.message || g };
  },
  Fy = [];
function D(s, l) {
  const a = ys({
    issueData: l,
    data: s.data,
    path: s.path,
    errorMaps: [s.common.contextualErrorMap, s.schemaErrorMap, vs(), xl].filter(
      (u) => !!u
    ),
  });
  s.common.issues.push(a);
}
class et {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(l, a) {
    const u = [];
    for (const d of a) {
      if (d.status === "aborted") return b;
      d.status === "dirty" && l.dirty(), u.push(d.value);
    }
    return { status: l.value, value: u };
  }
  static async mergeObjectAsync(l, a) {
    const u = [];
    for (const d of a) u.push({ key: await d.key, value: await d.value });
    return et.mergeObjectSync(l, u);
  }
  static mergeObjectSync(l, a) {
    const u = {};
    for (const d of a) {
      const { key: f, value: v } = d;
      if (f.status === "aborted" || v.status === "aborted") return b;
      f.status === "dirty" && l.dirty(),
        v.status === "dirty" && l.dirty(),
        f.value !== "__proto__" &&
          (typeof v.value < "u" || d.alwaysSet) &&
          (u[f.value] = v.value);
    }
    return { status: l.value, value: u };
  }
}
const b = Object.freeze({ status: "aborted" }),
  Nh = (s) => ({ status: "dirty", value: s }),
  lt = (s) => ({ status: "valid", value: s }),
  bu = (s) => s.status === "aborted",
  ec = (s) => s.status === "dirty",
  El = (s) => s.status === "valid",
  gs = (s) => typeof Promise < "u" && s instanceof Promise;
var B;
(function (s) {
  (s.errToObj = (l) => (typeof l == "string" ? { message: l } : l || {})),
    (s.toString = (l) =>
      typeof l == "string" ? l : l == null ? void 0 : l.message);
})(B || (B = {}));
class cn {
  constructor(l, a, u, d) {
    (this._cachedPath = []),
      (this.parent = l),
      (this.data = a),
      (this._path = u),
      (this._key = d);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const oh = (s, l) => {
  if (El(l)) return { success: !0, data: l.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const a = new Gt(s.common.issues);
      return (this._error = a), this._error;
    },
  };
};
function ee(s) {
  if (!s) return {};
  const {
    errorMap: l,
    invalid_type_error: a,
    required_error: u,
    description: d,
  } = s;
  if (l && (a || u))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return l
    ? { errorMap: l, description: d }
    : {
        errorMap: (v, g) =>
          v.code !== "invalid_type"
            ? { message: g.defaultError }
            : typeof g.data > "u"
              ? { message: u ?? g.defaultError }
              : { message: a ?? g.defaultError },
        description: d,
      };
}
class ne {
  constructor(l) {
    (this.spa = this.safeParseAsync),
      (this._def = l),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(l) {
    return qn(l.data);
  }
  _getOrReturnCtx(l, a) {
    return (
      a || {
        common: l.parent.common,
        data: l.data,
        parsedType: qn(l.data),
        schemaErrorMap: this._def.errorMap,
        path: l.path,
        parent: l.parent,
      }
    );
  }
  _processInputParams(l) {
    return {
      status: new et(),
      ctx: {
        common: l.parent.common,
        data: l.data,
        parsedType: qn(l.data),
        schemaErrorMap: this._def.errorMap,
        path: l.path,
        parent: l.parent,
      },
    };
  }
  _parseSync(l) {
    const a = this._parse(l);
    if (gs(a)) throw new Error("Synchronous parse encountered promise.");
    return a;
  }
  _parseAsync(l) {
    const a = this._parse(l);
    return Promise.resolve(a);
  }
  parse(l, a) {
    const u = this.safeParse(l, a);
    if (u.success) return u.data;
    throw u.error;
  }
  safeParse(l, a) {
    var u;
    const d = {
        common: {
          issues: [],
          async:
            (u = a == null ? void 0 : a.async) !== null && u !== void 0
              ? u
              : !1,
          contextualErrorMap: a == null ? void 0 : a.errorMap,
        },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: l,
        parsedType: qn(l),
      },
      f = this._parseSync({ data: l, path: d.path, parent: d });
    return oh(d, f);
  }
  async parseAsync(l, a) {
    const u = await this.safeParseAsync(l, a);
    if (u.success) return u.data;
    throw u.error;
  }
  async safeParseAsync(l, a) {
    const u = {
        common: {
          issues: [],
          contextualErrorMap: a == null ? void 0 : a.errorMap,
          async: !0,
        },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: l,
        parsedType: qn(l),
      },
      d = this._parse({ data: l, path: u.path, parent: u }),
      f = await (gs(d) ? d : Promise.resolve(d));
    return oh(u, f);
  }
  refine(l, a) {
    const u = (d) =>
      typeof a == "string" || typeof a > "u"
        ? { message: a }
        : typeof a == "function"
          ? a(d)
          : a;
    return this._refinement((d, f) => {
      const v = l(d),
        g = () => f.addIssue({ code: L.custom, ...u(d) });
      return typeof Promise < "u" && v instanceof Promise
        ? v.then((P) => (P ? !0 : (g(), !1)))
        : v
          ? !0
          : (g(), !1);
    });
  }
  refinement(l, a) {
    return this._refinement((u, d) =>
      l(u) ? !0 : (d.addIssue(typeof a == "function" ? a(u, d) : a), !1)
    );
  }
  _refinement(l) {
    return new Kt({
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "refinement", refinement: l },
    });
  }
  superRefine(l) {
    return this._refinement(l);
  }
  optional() {
    return Nn.create(this, this._def);
  }
  nullable() {
    return Cr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yt.create(this, this._def);
  }
  promise() {
    return gi.create(this, this._def);
  }
  or(l) {
    return Pl.create([this, l], this._def);
  }
  and(l) {
    return Rl.create(this, l, this._def);
  }
  transform(l) {
    return new Kt({
      ...ee(this._def),
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "transform", transform: l },
    });
  }
  default(l) {
    const a = typeof l == "function" ? l : () => l;
    return new Il({
      ...ee(this._def),
      innerType: this,
      defaultValue: a,
      typeName: K.ZodDefault,
    });
  }
  brand() {
    return new Ph({ typeName: K.ZodBranded, type: this, ...ee(this._def) });
  }
  catch(l) {
    const a = typeof l == "function" ? l : () => l;
    return new Ss({
      ...ee(this._def),
      innerType: this,
      catchValue: a,
      typeName: K.ZodCatch,
    });
  }
  describe(l) {
    const a = this.constructor;
    return new a({ ...this._def, description: l });
  }
  pipe(l) {
    return Ml.create(this, l);
  }
  readonly() {
    return Es.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Vy = /^c[^\s-]{8,}$/i,
  Uy = /^[a-z][a-z0-9]*$/,
  $y = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Zy =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  By =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Hy = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Bu;
const Wy =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Qy =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Gy = (s) =>
    s.precision
      ? s.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${s.precision}}Z$`
          )
      : s.precision === 0
        ? s.offset
          ? new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
            )
          : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
        : s.offset
          ? new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
            )
          : new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"
            );
function Yy(s, l) {
  return !!(
    ((l === "v4" || !l) && Wy.test(s)) ||
    ((l === "v6" || !l) && Qy.test(s))
  );
}
class Qt extends ne {
  _parse(l) {
    if (
      (this._def.coerce && (l.data = String(l.data)),
      this._getType(l) !== A.string)
    ) {
      const f = this._getOrReturnCtx(l);
      return (
        D(f, {
          code: L.invalid_type,
          expected: A.string,
          received: f.parsedType,
        }),
        b
      );
    }
    const u = new et();
    let d;
    for (const f of this._def.checks)
      if (f.kind === "min")
        l.data.length < f.value &&
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            code: L.too_small,
            minimum: f.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "max")
        l.data.length > f.value &&
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            code: L.too_big,
            maximum: f.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "length") {
        const v = l.data.length > f.value,
          g = l.data.length < f.value;
        (v || g) &&
          ((d = this._getOrReturnCtx(l, d)),
          v
            ? D(d, {
                code: L.too_big,
                maximum: f.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: f.message,
              })
            : g &&
              D(d, {
                code: L.too_small,
                minimum: f.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: f.message,
              }),
          u.dirty());
      } else if (f.kind === "email")
        By.test(l.data) ||
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            validation: "email",
            code: L.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "emoji")
        Bu || (Bu = new RegExp(Hy, "u")),
          Bu.test(l.data) ||
            ((d = this._getOrReturnCtx(l, d)),
            D(d, {
              validation: "emoji",
              code: L.invalid_string,
              message: f.message,
            }),
            u.dirty());
      else if (f.kind === "uuid")
        Zy.test(l.data) ||
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            validation: "uuid",
            code: L.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "cuid")
        Vy.test(l.data) ||
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            validation: "cuid",
            code: L.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "cuid2")
        Uy.test(l.data) ||
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            validation: "cuid2",
            code: L.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "ulid")
        $y.test(l.data) ||
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            validation: "ulid",
            code: L.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "url")
        try {
          new URL(l.data);
        } catch {
          (d = this._getOrReturnCtx(l, d)),
            D(d, {
              validation: "url",
              code: L.invalid_string,
              message: f.message,
            }),
            u.dirty();
        }
      else
        f.kind === "regex"
          ? ((f.regex.lastIndex = 0),
            f.regex.test(l.data) ||
              ((d = this._getOrReturnCtx(l, d)),
              D(d, {
                validation: "regex",
                code: L.invalid_string,
                message: f.message,
              }),
              u.dirty()))
          : f.kind === "trim"
            ? (l.data = l.data.trim())
            : f.kind === "includes"
              ? l.data.includes(f.value, f.position) ||
                ((d = this._getOrReturnCtx(l, d)),
                D(d, {
                  code: L.invalid_string,
                  validation: { includes: f.value, position: f.position },
                  message: f.message,
                }),
                u.dirty())
              : f.kind === "toLowerCase"
                ? (l.data = l.data.toLowerCase())
                : f.kind === "toUpperCase"
                  ? (l.data = l.data.toUpperCase())
                  : f.kind === "startsWith"
                    ? l.data.startsWith(f.value) ||
                      ((d = this._getOrReturnCtx(l, d)),
                      D(d, {
                        code: L.invalid_string,
                        validation: { startsWith: f.value },
                        message: f.message,
                      }),
                      u.dirty())
                    : f.kind === "endsWith"
                      ? l.data.endsWith(f.value) ||
                        ((d = this._getOrReturnCtx(l, d)),
                        D(d, {
                          code: L.invalid_string,
                          validation: { endsWith: f.value },
                          message: f.message,
                        }),
                        u.dirty())
                      : f.kind === "datetime"
                        ? Gy(f).test(l.data) ||
                          ((d = this._getOrReturnCtx(l, d)),
                          D(d, {
                            code: L.invalid_string,
                            validation: "datetime",
                            message: f.message,
                          }),
                          u.dirty())
                        : f.kind === "ip"
                          ? Yy(l.data, f.version) ||
                            ((d = this._getOrReturnCtx(l, d)),
                            D(d, {
                              validation: "ip",
                              code: L.invalid_string,
                              message: f.message,
                            }),
                            u.dirty())
                          : fe.assertNever(f);
    return { status: u.value, value: l.data };
  }
  _regex(l, a, u) {
    return this.refinement((d) => l.test(d), {
      validation: a,
      code: L.invalid_string,
      ...B.errToObj(u),
    });
  }
  _addCheck(l) {
    return new Qt({ ...this._def, checks: [...this._def.checks, l] });
  }
  email(l) {
    return this._addCheck({ kind: "email", ...B.errToObj(l) });
  }
  url(l) {
    return this._addCheck({ kind: "url", ...B.errToObj(l) });
  }
  emoji(l) {
    return this._addCheck({ kind: "emoji", ...B.errToObj(l) });
  }
  uuid(l) {
    return this._addCheck({ kind: "uuid", ...B.errToObj(l) });
  }
  cuid(l) {
    return this._addCheck({ kind: "cuid", ...B.errToObj(l) });
  }
  cuid2(l) {
    return this._addCheck({ kind: "cuid2", ...B.errToObj(l) });
  }
  ulid(l) {
    return this._addCheck({ kind: "ulid", ...B.errToObj(l) });
  }
  ip(l) {
    return this._addCheck({ kind: "ip", ...B.errToObj(l) });
  }
  datetime(l) {
    var a;
    return typeof l == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: l,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (l == null ? void 0 : l.precision) > "u"
              ? null
              : l == null
                ? void 0
                : l.precision,
          offset:
            (a = l == null ? void 0 : l.offset) !== null && a !== void 0
              ? a
              : !1,
          ...B.errToObj(l == null ? void 0 : l.message),
        });
  }
  regex(l, a) {
    return this._addCheck({ kind: "regex", regex: l, ...B.errToObj(a) });
  }
  includes(l, a) {
    return this._addCheck({
      kind: "includes",
      value: l,
      position: a == null ? void 0 : a.position,
      ...B.errToObj(a == null ? void 0 : a.message),
    });
  }
  startsWith(l, a) {
    return this._addCheck({ kind: "startsWith", value: l, ...B.errToObj(a) });
  }
  endsWith(l, a) {
    return this._addCheck({ kind: "endsWith", value: l, ...B.errToObj(a) });
  }
  min(l, a) {
    return this._addCheck({ kind: "min", value: l, ...B.errToObj(a) });
  }
  max(l, a) {
    return this._addCheck({ kind: "max", value: l, ...B.errToObj(a) });
  }
  length(l, a) {
    return this._addCheck({ kind: "length", value: l, ...B.errToObj(a) });
  }
  nonempty(l) {
    return this.min(1, B.errToObj(l));
  }
  trim() {
    return new Qt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Qt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Qt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((l) => l.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((l) => l.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((l) => l.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((l) => l.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((l) => l.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((l) => l.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((l) => l.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((l) => l.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((l) => l.kind === "ip");
  }
  get minLength() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "min" && (l === null || a.value > l) && (l = a.value);
    return l;
  }
  get maxLength() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "max" && (l === null || a.value < l) && (l = a.value);
    return l;
  }
}
Qt.create = (s) => {
  var l;
  return new Qt({
    checks: [],
    typeName: K.ZodString,
    coerce:
      (l = s == null ? void 0 : s.coerce) !== null && l !== void 0 ? l : !1,
    ...ee(s),
  });
};
function Ky(s, l) {
  const a = (s.toString().split(".")[1] || "").length,
    u = (l.toString().split(".")[1] || "").length,
    d = a > u ? a : u,
    f = parseInt(s.toFixed(d).replace(".", "")),
    v = parseInt(l.toFixed(d).replace(".", ""));
  return (f % v) / Math.pow(10, d);
}
class bn extends ne {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(l) {
    if (
      (this._def.coerce && (l.data = Number(l.data)),
      this._getType(l) !== A.number)
    ) {
      const f = this._getOrReturnCtx(l);
      return (
        D(f, {
          code: L.invalid_type,
          expected: A.number,
          received: f.parsedType,
        }),
        b
      );
    }
    let u;
    const d = new et();
    for (const f of this._def.checks)
      f.kind === "int"
        ? fe.isInteger(l.data) ||
          ((u = this._getOrReturnCtx(l, u)),
          D(u, {
            code: L.invalid_type,
            expected: "integer",
            received: "float",
            message: f.message,
          }),
          d.dirty())
        : f.kind === "min"
          ? (f.inclusive ? l.data < f.value : l.data <= f.value) &&
            ((u = this._getOrReturnCtx(l, u)),
            D(u, {
              code: L.too_small,
              minimum: f.value,
              type: "number",
              inclusive: f.inclusive,
              exact: !1,
              message: f.message,
            }),
            d.dirty())
          : f.kind === "max"
            ? (f.inclusive ? l.data > f.value : l.data >= f.value) &&
              ((u = this._getOrReturnCtx(l, u)),
              D(u, {
                code: L.too_big,
                maximum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message,
              }),
              d.dirty())
            : f.kind === "multipleOf"
              ? Ky(l.data, f.value) !== 0 &&
                ((u = this._getOrReturnCtx(l, u)),
                D(u, {
                  code: L.not_multiple_of,
                  multipleOf: f.value,
                  message: f.message,
                }),
                d.dirty())
              : f.kind === "finite"
                ? Number.isFinite(l.data) ||
                  ((u = this._getOrReturnCtx(l, u)),
                  D(u, { code: L.not_finite, message: f.message }),
                  d.dirty())
                : fe.assertNever(f);
    return { status: d.value, value: l.data };
  }
  gte(l, a) {
    return this.setLimit("min", l, !0, B.toString(a));
  }
  gt(l, a) {
    return this.setLimit("min", l, !1, B.toString(a));
  }
  lte(l, a) {
    return this.setLimit("max", l, !0, B.toString(a));
  }
  lt(l, a) {
    return this.setLimit("max", l, !1, B.toString(a));
  }
  setLimit(l, a, u, d) {
    return new bn({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: l, value: a, inclusive: u, message: B.toString(d) },
      ],
    });
  }
  _addCheck(l) {
    return new bn({ ...this._def, checks: [...this._def.checks, l] });
  }
  int(l) {
    return this._addCheck({ kind: "int", message: B.toString(l) });
  }
  positive(l) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: B.toString(l),
    });
  }
  negative(l) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: B.toString(l),
    });
  }
  nonpositive(l) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: B.toString(l),
    });
  }
  nonnegative(l) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: B.toString(l),
    });
  }
  multipleOf(l, a) {
    return this._addCheck({
      kind: "multipleOf",
      value: l,
      message: B.toString(a),
    });
  }
  finite(l) {
    return this._addCheck({ kind: "finite", message: B.toString(l) });
  }
  safe(l) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: B.toString(l),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: B.toString(l),
    });
  }
  get minValue() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "min" && (l === null || a.value > l) && (l = a.value);
    return l;
  }
  get maxValue() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "max" && (l === null || a.value < l) && (l = a.value);
    return l;
  }
  get isInt() {
    return !!this._def.checks.find(
      (l) =>
        l.kind === "int" || (l.kind === "multipleOf" && fe.isInteger(l.value))
    );
  }
  get isFinite() {
    let l = null,
      a = null;
    for (const u of this._def.checks) {
      if (u.kind === "finite" || u.kind === "int" || u.kind === "multipleOf")
        return !0;
      u.kind === "min"
        ? (a === null || u.value > a) && (a = u.value)
        : u.kind === "max" && (l === null || u.value < l) && (l = u.value);
    }
    return Number.isFinite(a) && Number.isFinite(l);
  }
}
bn.create = (s) =>
  new bn({
    checks: [],
    typeName: K.ZodNumber,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...ee(s),
  });
class er extends ne {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(l) {
    if (
      (this._def.coerce && (l.data = BigInt(l.data)),
      this._getType(l) !== A.bigint)
    ) {
      const f = this._getOrReturnCtx(l);
      return (
        D(f, {
          code: L.invalid_type,
          expected: A.bigint,
          received: f.parsedType,
        }),
        b
      );
    }
    let u;
    const d = new et();
    for (const f of this._def.checks)
      f.kind === "min"
        ? (f.inclusive ? l.data < f.value : l.data <= f.value) &&
          ((u = this._getOrReturnCtx(l, u)),
          D(u, {
            code: L.too_small,
            type: "bigint",
            minimum: f.value,
            inclusive: f.inclusive,
            message: f.message,
          }),
          d.dirty())
        : f.kind === "max"
          ? (f.inclusive ? l.data > f.value : l.data >= f.value) &&
            ((u = this._getOrReturnCtx(l, u)),
            D(u, {
              code: L.too_big,
              type: "bigint",
              maximum: f.value,
              inclusive: f.inclusive,
              message: f.message,
            }),
            d.dirty())
          : f.kind === "multipleOf"
            ? l.data % f.value !== BigInt(0) &&
              ((u = this._getOrReturnCtx(l, u)),
              D(u, {
                code: L.not_multiple_of,
                multipleOf: f.value,
                message: f.message,
              }),
              d.dirty())
            : fe.assertNever(f);
    return { status: d.value, value: l.data };
  }
  gte(l, a) {
    return this.setLimit("min", l, !0, B.toString(a));
  }
  gt(l, a) {
    return this.setLimit("min", l, !1, B.toString(a));
  }
  lte(l, a) {
    return this.setLimit("max", l, !0, B.toString(a));
  }
  lt(l, a) {
    return this.setLimit("max", l, !1, B.toString(a));
  }
  setLimit(l, a, u, d) {
    return new er({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: l, value: a, inclusive: u, message: B.toString(d) },
      ],
    });
  }
  _addCheck(l) {
    return new er({ ...this._def, checks: [...this._def.checks, l] });
  }
  positive(l) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(l),
    });
  }
  negative(l) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(l),
    });
  }
  nonpositive(l) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(l),
    });
  }
  nonnegative(l) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(l),
    });
  }
  multipleOf(l, a) {
    return this._addCheck({
      kind: "multipleOf",
      value: l,
      message: B.toString(a),
    });
  }
  get minValue() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "min" && (l === null || a.value > l) && (l = a.value);
    return l;
  }
  get maxValue() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "max" && (l === null || a.value < l) && (l = a.value);
    return l;
  }
}
er.create = (s) => {
  var l;
  return new er({
    checks: [],
    typeName: K.ZodBigInt,
    coerce:
      (l = s == null ? void 0 : s.coerce) !== null && l !== void 0 ? l : !1,
    ...ee(s),
  });
};
class Cl extends ne {
  _parse(l) {
    if (
      (this._def.coerce && (l.data = !!l.data), this._getType(l) !== A.boolean)
    ) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.boolean,
          received: u.parsedType,
        }),
        b
      );
    }
    return lt(l.data);
  }
}
Cl.create = (s) =>
  new Cl({
    typeName: K.ZodBoolean,
    coerce: (s == null ? void 0 : s.coerce) || !1,
    ...ee(s),
  });
class xr extends ne {
  _parse(l) {
    if (
      (this._def.coerce && (l.data = new Date(l.data)),
      this._getType(l) !== A.date)
    ) {
      const f = this._getOrReturnCtx(l);
      return (
        D(f, {
          code: L.invalid_type,
          expected: A.date,
          received: f.parsedType,
        }),
        b
      );
    }
    if (isNaN(l.data.getTime())) {
      const f = this._getOrReturnCtx(l);
      return D(f, { code: L.invalid_date }), b;
    }
    const u = new et();
    let d;
    for (const f of this._def.checks)
      f.kind === "min"
        ? l.data.getTime() < f.value &&
          ((d = this._getOrReturnCtx(l, d)),
          D(d, {
            code: L.too_small,
            message: f.message,
            inclusive: !0,
            exact: !1,
            minimum: f.value,
            type: "date",
          }),
          u.dirty())
        : f.kind === "max"
          ? l.data.getTime() > f.value &&
            ((d = this._getOrReturnCtx(l, d)),
            D(d, {
              code: L.too_big,
              message: f.message,
              inclusive: !0,
              exact: !1,
              maximum: f.value,
              type: "date",
            }),
            u.dirty())
          : fe.assertNever(f);
    return { status: u.value, value: new Date(l.data.getTime()) };
  }
  _addCheck(l) {
    return new xr({ ...this._def, checks: [...this._def.checks, l] });
  }
  min(l, a) {
    return this._addCheck({
      kind: "min",
      value: l.getTime(),
      message: B.toString(a),
    });
  }
  max(l, a) {
    return this._addCheck({
      kind: "max",
      value: l.getTime(),
      message: B.toString(a),
    });
  }
  get minDate() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "min" && (l === null || a.value > l) && (l = a.value);
    return l != null ? new Date(l) : null;
  }
  get maxDate() {
    let l = null;
    for (const a of this._def.checks)
      a.kind === "max" && (l === null || a.value < l) && (l = a.value);
    return l != null ? new Date(l) : null;
  }
}
xr.create = (s) =>
  new xr({
    checks: [],
    coerce: (s == null ? void 0 : s.coerce) || !1,
    typeName: K.ZodDate,
    ...ee(s),
  });
class ks extends ne {
  _parse(l) {
    if (this._getType(l) !== A.symbol) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.symbol,
          received: u.parsedType,
        }),
        b
      );
    }
    return lt(l.data);
  }
}
ks.create = (s) => new ks({ typeName: K.ZodSymbol, ...ee(s) });
class Nl extends ne {
  _parse(l) {
    if (this._getType(l) !== A.undefined) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.undefined,
          received: u.parsedType,
        }),
        b
      );
    }
    return lt(l.data);
  }
}
Nl.create = (s) => new Nl({ typeName: K.ZodUndefined, ...ee(s) });
class Tl extends ne {
  _parse(l) {
    if (this._getType(l) !== A.null) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.null,
          received: u.parsedType,
        }),
        b
      );
    }
    return lt(l.data);
  }
}
Tl.create = (s) => new Tl({ typeName: K.ZodNull, ...ee(s) });
class yi extends ne {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(l) {
    return lt(l.data);
  }
}
yi.create = (s) => new yi({ typeName: K.ZodAny, ...ee(s) });
class Sr extends ne {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(l) {
    return lt(l.data);
  }
}
Sr.create = (s) => new Sr({ typeName: K.ZodUnknown, ...ee(s) });
class Tn extends ne {
  _parse(l) {
    const a = this._getOrReturnCtx(l);
    return (
      D(a, { code: L.invalid_type, expected: A.never, received: a.parsedType }),
      b
    );
  }
}
Tn.create = (s) => new Tn({ typeName: K.ZodNever, ...ee(s) });
class ws extends ne {
  _parse(l) {
    if (this._getType(l) !== A.undefined) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.void,
          received: u.parsedType,
        }),
        b
      );
    }
    return lt(l.data);
  }
}
ws.create = (s) => new ws({ typeName: K.ZodVoid, ...ee(s) });
class Yt extends ne {
  _parse(l) {
    const { ctx: a, status: u } = this._processInputParams(l),
      d = this._def;
    if (a.parsedType !== A.array)
      return (
        D(a, {
          code: L.invalid_type,
          expected: A.array,
          received: a.parsedType,
        }),
        b
      );
    if (d.exactLength !== null) {
      const v = a.data.length > d.exactLength.value,
        g = a.data.length < d.exactLength.value;
      (v || g) &&
        (D(a, {
          code: v ? L.too_big : L.too_small,
          minimum: g ? d.exactLength.value : void 0,
          maximum: v ? d.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: d.exactLength.message,
        }),
        u.dirty());
    }
    if (
      (d.minLength !== null &&
        a.data.length < d.minLength.value &&
        (D(a, {
          code: L.too_small,
          minimum: d.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: d.minLength.message,
        }),
        u.dirty()),
      d.maxLength !== null &&
        a.data.length > d.maxLength.value &&
        (D(a, {
          code: L.too_big,
          maximum: d.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: d.maxLength.message,
        }),
        u.dirty()),
      a.common.async)
    )
      return Promise.all(
        [...a.data].map((v, g) => d.type._parseAsync(new cn(a, v, a.path, g)))
      ).then((v) => et.mergeArray(u, v));
    const f = [...a.data].map((v, g) =>
      d.type._parseSync(new cn(a, v, a.path, g))
    );
    return et.mergeArray(u, f);
  }
  get element() {
    return this._def.type;
  }
  min(l, a) {
    return new Yt({
      ...this._def,
      minLength: { value: l, message: B.toString(a) },
    });
  }
  max(l, a) {
    return new Yt({
      ...this._def,
      maxLength: { value: l, message: B.toString(a) },
    });
  }
  length(l, a) {
    return new Yt({
      ...this._def,
      exactLength: { value: l, message: B.toString(a) },
    });
  }
  nonempty(l) {
    return this.min(1, l);
  }
}
Yt.create = (s, l) =>
  new Yt({
    type: s,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: K.ZodArray,
    ...ee(l),
  });
function mi(s) {
  if (s instanceof Re) {
    const l = {};
    for (const a in s.shape) {
      const u = s.shape[a];
      l[a] = Nn.create(mi(u));
    }
    return new Re({ ...s._def, shape: () => l });
  } else
    return s instanceof Yt
      ? new Yt({ ...s._def, type: mi(s.element) })
      : s instanceof Nn
        ? Nn.create(mi(s.unwrap()))
        : s instanceof Cr
          ? Cr.create(mi(s.unwrap()))
          : s instanceof dn
            ? dn.create(s.items.map((l) => mi(l)))
            : s;
}
class Re extends ne {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const l = this._def.shape(),
      a = fe.objectKeys(l);
    return (this._cached = { shape: l, keys: a });
  }
  _parse(l) {
    if (this._getType(l) !== A.object) {
      const E = this._getOrReturnCtx(l);
      return (
        D(E, {
          code: L.invalid_type,
          expected: A.object,
          received: E.parsedType,
        }),
        b
      );
    }
    const { status: u, ctx: d } = this._processInputParams(l),
      { shape: f, keys: v } = this._getCached(),
      g = [];
    if (
      !(this._def.catchall instanceof Tn && this._def.unknownKeys === "strip")
    )
      for (const E in d.data) v.includes(E) || g.push(E);
    const P = [];
    for (const E of v) {
      const I = f[E],
        M = d.data[E];
      P.push({
        key: { status: "valid", value: E },
        value: I._parse(new cn(d, M, d.path, E)),
        alwaysSet: E in d.data,
      });
    }
    if (this._def.catchall instanceof Tn) {
      const E = this._def.unknownKeys;
      if (E === "passthrough")
        for (const I of g)
          P.push({
            key: { status: "valid", value: I },
            value: { status: "valid", value: d.data[I] },
          });
      else if (E === "strict")
        g.length > 0 &&
          (D(d, { code: L.unrecognized_keys, keys: g }), u.dirty());
      else if (E !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const E = this._def.catchall;
      for (const I of g) {
        const M = d.data[I];
        P.push({
          key: { status: "valid", value: I },
          value: E._parse(new cn(d, M, d.path, I)),
          alwaysSet: I in d.data,
        });
      }
    }
    return d.common.async
      ? Promise.resolve()
          .then(async () => {
            const E = [];
            for (const I of P) {
              const M = await I.key;
              E.push({ key: M, value: await I.value, alwaysSet: I.alwaysSet });
            }
            return E;
          })
          .then((E) => et.mergeObjectSync(u, E))
      : et.mergeObjectSync(u, P);
  }
  get shape() {
    return this._def.shape();
  }
  strict(l) {
    return (
      B.errToObj,
      new Re({
        ...this._def,
        unknownKeys: "strict",
        ...(l !== void 0
          ? {
              errorMap: (a, u) => {
                var d, f, v, g;
                const P =
                  (v =
                    (f = (d = this._def).errorMap) === null || f === void 0
                      ? void 0
                      : f.call(d, a, u).message) !== null && v !== void 0
                    ? v
                    : u.defaultError;
                return a.code === "unrecognized_keys"
                  ? {
                      message:
                        (g = B.errToObj(l).message) !== null && g !== void 0
                          ? g
                          : P,
                    }
                  : { message: P };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Re({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Re({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(l) {
    return new Re({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...l }),
    });
  }
  merge(l) {
    return new Re({
      unknownKeys: l._def.unknownKeys,
      catchall: l._def.catchall,
      shape: () => ({ ...this._def.shape(), ...l._def.shape() }),
      typeName: K.ZodObject,
    });
  }
  setKey(l, a) {
    return this.augment({ [l]: a });
  }
  catchall(l) {
    return new Re({ ...this._def, catchall: l });
  }
  pick(l) {
    const a = {};
    return (
      fe.objectKeys(l).forEach((u) => {
        l[u] && this.shape[u] && (a[u] = this.shape[u]);
      }),
      new Re({ ...this._def, shape: () => a })
    );
  }
  omit(l) {
    const a = {};
    return (
      fe.objectKeys(this.shape).forEach((u) => {
        l[u] || (a[u] = this.shape[u]);
      }),
      new Re({ ...this._def, shape: () => a })
    );
  }
  deepPartial() {
    return mi(this);
  }
  partial(l) {
    const a = {};
    return (
      fe.objectKeys(this.shape).forEach((u) => {
        const d = this.shape[u];
        l && !l[u] ? (a[u] = d) : (a[u] = d.optional());
      }),
      new Re({ ...this._def, shape: () => a })
    );
  }
  required(l) {
    const a = {};
    return (
      fe.objectKeys(this.shape).forEach((u) => {
        if (l && !l[u]) a[u] = this.shape[u];
        else {
          let f = this.shape[u];
          for (; f instanceof Nn; ) f = f._def.innerType;
          a[u] = f;
        }
      }),
      new Re({ ...this._def, shape: () => a })
    );
  }
  keyof() {
    return Th(fe.objectKeys(this.shape));
  }
}
Re.create = (s, l) =>
  new Re({
    shape: () => s,
    unknownKeys: "strip",
    catchall: Tn.create(),
    typeName: K.ZodObject,
    ...ee(l),
  });
Re.strictCreate = (s, l) =>
  new Re({
    shape: () => s,
    unknownKeys: "strict",
    catchall: Tn.create(),
    typeName: K.ZodObject,
    ...ee(l),
  });
Re.lazycreate = (s, l) =>
  new Re({
    shape: s,
    unknownKeys: "strip",
    catchall: Tn.create(),
    typeName: K.ZodObject,
    ...ee(l),
  });
class Pl extends ne {
  _parse(l) {
    const { ctx: a } = this._processInputParams(l),
      u = this._def.options;
    function d(f) {
      for (const g of f) if (g.result.status === "valid") return g.result;
      for (const g of f)
        if (g.result.status === "dirty")
          return a.common.issues.push(...g.ctx.common.issues), g.result;
      const v = f.map((g) => new Gt(g.ctx.common.issues));
      return D(a, { code: L.invalid_union, unionErrors: v }), b;
    }
    if (a.common.async)
      return Promise.all(
        u.map(async (f) => {
          const v = { ...a, common: { ...a.common, issues: [] }, parent: null };
          return {
            result: await f._parseAsync({
              data: a.data,
              path: a.path,
              parent: v,
            }),
            ctx: v,
          };
        })
      ).then(d);
    {
      let f;
      const v = [];
      for (const P of u) {
        const E = { ...a, common: { ...a.common, issues: [] }, parent: null },
          I = P._parseSync({ data: a.data, path: a.path, parent: E });
        if (I.status === "valid") return I;
        I.status === "dirty" && !f && (f = { result: I, ctx: E }),
          E.common.issues.length && v.push(E.common.issues);
      }
      if (f) return a.common.issues.push(...f.ctx.common.issues), f.result;
      const g = v.map((P) => new Gt(P));
      return D(a, { code: L.invalid_union, unionErrors: g }), b;
    }
  }
  get options() {
    return this._def.options;
  }
}
Pl.create = (s, l) => new Pl({ options: s, typeName: K.ZodUnion, ...ee(l) });
const ms = (s) =>
  s instanceof Ll
    ? ms(s.schema)
    : s instanceof Kt
      ? ms(s.innerType())
      : s instanceof Ol
        ? [s.value]
        : s instanceof tr
          ? s.options
          : s instanceof zl
            ? Object.keys(s.enum)
            : s instanceof Il
              ? ms(s._def.innerType)
              : s instanceof Nl
                ? [void 0]
                : s instanceof Tl
                  ? [null]
                  : null;
class Ns extends ne {
  _parse(l) {
    const { ctx: a } = this._processInputParams(l);
    if (a.parsedType !== A.object)
      return (
        D(a, {
          code: L.invalid_type,
          expected: A.object,
          received: a.parsedType,
        }),
        b
      );
    const u = this.discriminator,
      d = a.data[u],
      f = this.optionsMap.get(d);
    return f
      ? a.common.async
        ? f._parseAsync({ data: a.data, path: a.path, parent: a })
        : f._parseSync({ data: a.data, path: a.path, parent: a })
      : (D(a, {
          code: L.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [u],
        }),
        b);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(l, a, u) {
    const d = new Map();
    for (const f of a) {
      const v = ms(f.shape[l]);
      if (!v)
        throw new Error(
          `A discriminator value for key \`${l}\` could not be extracted from all schema options`
        );
      for (const g of v) {
        if (d.has(g))
          throw new Error(
            `Discriminator property ${String(l)} has duplicate value ${String(g)}`
          );
        d.set(g, f);
      }
    }
    return new Ns({
      typeName: K.ZodDiscriminatedUnion,
      discriminator: l,
      options: a,
      optionsMap: d,
      ...ee(u),
    });
  }
}
function tc(s, l) {
  const a = qn(s),
    u = qn(l);
  if (s === l) return { valid: !0, data: s };
  if (a === A.object && u === A.object) {
    const d = fe.objectKeys(l),
      f = fe.objectKeys(s).filter((g) => d.indexOf(g) !== -1),
      v = { ...s, ...l };
    for (const g of f) {
      const P = tc(s[g], l[g]);
      if (!P.valid) return { valid: !1 };
      v[g] = P.data;
    }
    return { valid: !0, data: v };
  } else if (a === A.array && u === A.array) {
    if (s.length !== l.length) return { valid: !1 };
    const d = [];
    for (let f = 0; f < s.length; f++) {
      const v = s[f],
        g = l[f],
        P = tc(v, g);
      if (!P.valid) return { valid: !1 };
      d.push(P.data);
    }
    return { valid: !0, data: d };
  } else
    return a === A.date && u === A.date && +s == +l
      ? { valid: !0, data: s }
      : { valid: !1 };
}
class Rl extends ne {
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l),
      d = (f, v) => {
        if (bu(f) || bu(v)) return b;
        const g = tc(f.value, v.value);
        return g.valid
          ? ((ec(f) || ec(v)) && a.dirty(), { status: a.value, value: g.data })
          : (D(u, { code: L.invalid_intersection_types }), b);
      };
    return u.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: u.data, path: u.path, parent: u }),
          this._def.right._parseAsync({
            data: u.data,
            path: u.path,
            parent: u,
          }),
        ]).then(([f, v]) => d(f, v))
      : d(
          this._def.left._parseSync({ data: u.data, path: u.path, parent: u }),
          this._def.right._parseSync({ data: u.data, path: u.path, parent: u })
        );
  }
}
Rl.create = (s, l, a) =>
  new Rl({ left: s, right: l, typeName: K.ZodIntersection, ...ee(a) });
class dn extends ne {
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l);
    if (u.parsedType !== A.array)
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.array,
          received: u.parsedType,
        }),
        b
      );
    if (u.data.length < this._def.items.length)
      return (
        D(u, {
          code: L.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        b
      );
    !this._def.rest &&
      u.data.length > this._def.items.length &&
      (D(u, {
        code: L.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      a.dirty());
    const f = [...u.data]
      .map((v, g) => {
        const P = this._def.items[g] || this._def.rest;
        return P ? P._parse(new cn(u, v, u.path, g)) : null;
      })
      .filter((v) => !!v);
    return u.common.async
      ? Promise.all(f).then((v) => et.mergeArray(a, v))
      : et.mergeArray(a, f);
  }
  get items() {
    return this._def.items;
  }
  rest(l) {
    return new dn({ ...this._def, rest: l });
  }
}
dn.create = (s, l) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new dn({ items: s, typeName: K.ZodTuple, rest: null, ...ee(l) });
};
class jl extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l);
    if (u.parsedType !== A.object)
      return (
        D(u, {
          code: L.invalid_type,
          expected: A.object,
          received: u.parsedType,
        }),
        b
      );
    const d = [],
      f = this._def.keyType,
      v = this._def.valueType;
    for (const g in u.data)
      d.push({
        key: f._parse(new cn(u, g, u.path, g)),
        value: v._parse(new cn(u, u.data[g], u.path, g)),
      });
    return u.common.async
      ? et.mergeObjectAsync(a, d)
      : et.mergeObjectSync(a, d);
  }
  get element() {
    return this._def.valueType;
  }
  static create(l, a, u) {
    return a instanceof ne
      ? new jl({ keyType: l, valueType: a, typeName: K.ZodRecord, ...ee(u) })
      : new jl({
          keyType: Qt.create(),
          valueType: l,
          typeName: K.ZodRecord,
          ...ee(a),
        });
  }
}
class _s extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l);
    if (u.parsedType !== A.map)
      return (
        D(u, { code: L.invalid_type, expected: A.map, received: u.parsedType }),
        b
      );
    const d = this._def.keyType,
      f = this._def.valueType,
      v = [...u.data.entries()].map(([g, P], E) => ({
        key: d._parse(new cn(u, g, u.path, [E, "key"])),
        value: f._parse(new cn(u, P, u.path, [E, "value"])),
      }));
    if (u.common.async) {
      const g = new Map();
      return Promise.resolve().then(async () => {
        for (const P of v) {
          const E = await P.key,
            I = await P.value;
          if (E.status === "aborted" || I.status === "aborted") return b;
          (E.status === "dirty" || I.status === "dirty") && a.dirty(),
            g.set(E.value, I.value);
        }
        return { status: a.value, value: g };
      });
    } else {
      const g = new Map();
      for (const P of v) {
        const E = P.key,
          I = P.value;
        if (E.status === "aborted" || I.status === "aborted") return b;
        (E.status === "dirty" || I.status === "dirty") && a.dirty(),
          g.set(E.value, I.value);
      }
      return { status: a.value, value: g };
    }
  }
}
_s.create = (s, l, a) =>
  new _s({ valueType: l, keyType: s, typeName: K.ZodMap, ...ee(a) });
class Er extends ne {
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l);
    if (u.parsedType !== A.set)
      return (
        D(u, { code: L.invalid_type, expected: A.set, received: u.parsedType }),
        b
      );
    const d = this._def;
    d.minSize !== null &&
      u.data.size < d.minSize.value &&
      (D(u, {
        code: L.too_small,
        minimum: d.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: d.minSize.message,
      }),
      a.dirty()),
      d.maxSize !== null &&
        u.data.size > d.maxSize.value &&
        (D(u, {
          code: L.too_big,
          maximum: d.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: d.maxSize.message,
        }),
        a.dirty());
    const f = this._def.valueType;
    function v(P) {
      const E = new Set();
      for (const I of P) {
        if (I.status === "aborted") return b;
        I.status === "dirty" && a.dirty(), E.add(I.value);
      }
      return { status: a.value, value: E };
    }
    const g = [...u.data.values()].map((P, E) =>
      f._parse(new cn(u, P, u.path, E))
    );
    return u.common.async ? Promise.all(g).then((P) => v(P)) : v(g);
  }
  min(l, a) {
    return new Er({
      ...this._def,
      minSize: { value: l, message: B.toString(a) },
    });
  }
  max(l, a) {
    return new Er({
      ...this._def,
      maxSize: { value: l, message: B.toString(a) },
    });
  }
  size(l, a) {
    return this.min(l, a).max(l, a);
  }
  nonempty(l) {
    return this.min(1, l);
  }
}
Er.create = (s, l) =>
  new Er({
    valueType: s,
    minSize: null,
    maxSize: null,
    typeName: K.ZodSet,
    ...ee(l),
  });
class vi extends ne {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(l) {
    const { ctx: a } = this._processInputParams(l);
    if (a.parsedType !== A.function)
      return (
        D(a, {
          code: L.invalid_type,
          expected: A.function,
          received: a.parsedType,
        }),
        b
      );
    function u(g, P) {
      return ys({
        data: g,
        path: a.path,
        errorMaps: [
          a.common.contextualErrorMap,
          a.schemaErrorMap,
          vs(),
          xl,
        ].filter((E) => !!E),
        issueData: { code: L.invalid_arguments, argumentsError: P },
      });
    }
    function d(g, P) {
      return ys({
        data: g,
        path: a.path,
        errorMaps: [
          a.common.contextualErrorMap,
          a.schemaErrorMap,
          vs(),
          xl,
        ].filter((E) => !!E),
        issueData: { code: L.invalid_return_type, returnTypeError: P },
      });
    }
    const f = { errorMap: a.common.contextualErrorMap },
      v = a.data;
    if (this._def.returns instanceof gi) {
      const g = this;
      return lt(async function (...P) {
        const E = new Gt([]),
          I = await g._def.args.parseAsync(P, f).catch((Le) => {
            throw (E.addIssue(u(P, Le)), E);
          }),
          M = await Reflect.apply(v, this, I);
        return await g._def.returns._def.type.parseAsync(M, f).catch((Le) => {
          throw (E.addIssue(d(M, Le)), E);
        });
      });
    } else {
      const g = this;
      return lt(function (...P) {
        const E = g._def.args.safeParse(P, f);
        if (!E.success) throw new Gt([u(P, E.error)]);
        const I = Reflect.apply(v, this, E.data),
          M = g._def.returns.safeParse(I, f);
        if (!M.success) throw new Gt([d(I, M.error)]);
        return M.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...l) {
    return new vi({ ...this._def, args: dn.create(l).rest(Sr.create()) });
  }
  returns(l) {
    return new vi({ ...this._def, returns: l });
  }
  implement(l) {
    return this.parse(l);
  }
  strictImplement(l) {
    return this.parse(l);
  }
  static create(l, a, u) {
    return new vi({
      args: l || dn.create([]).rest(Sr.create()),
      returns: a || Sr.create(),
      typeName: K.ZodFunction,
      ...ee(u),
    });
  }
}
class Ll extends ne {
  get schema() {
    return this._def.getter();
  }
  _parse(l) {
    const { ctx: a } = this._processInputParams(l);
    return this._def.getter()._parse({ data: a.data, path: a.path, parent: a });
  }
}
Ll.create = (s, l) => new Ll({ getter: s, typeName: K.ZodLazy, ...ee(l) });
class Ol extends ne {
  _parse(l) {
    if (l.data !== this._def.value) {
      const a = this._getOrReturnCtx(l);
      return (
        D(a, {
          received: a.data,
          code: L.invalid_literal,
          expected: this._def.value,
        }),
        b
      );
    }
    return { status: "valid", value: l.data };
  }
  get value() {
    return this._def.value;
  }
}
Ol.create = (s, l) => new Ol({ value: s, typeName: K.ZodLiteral, ...ee(l) });
function Th(s, l) {
  return new tr({ values: s, typeName: K.ZodEnum, ...ee(l) });
}
class tr extends ne {
  _parse(l) {
    if (typeof l.data != "string") {
      const a = this._getOrReturnCtx(l),
        u = this._def.values;
      return (
        D(a, {
          expected: fe.joinValues(u),
          received: a.parsedType,
          code: L.invalid_type,
        }),
        b
      );
    }
    if (this._def.values.indexOf(l.data) === -1) {
      const a = this._getOrReturnCtx(l),
        u = this._def.values;
      return (
        D(a, { received: a.data, code: L.invalid_enum_value, options: u }), b
      );
    }
    return lt(l.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const l = {};
    for (const a of this._def.values) l[a] = a;
    return l;
  }
  get Values() {
    const l = {};
    for (const a of this._def.values) l[a] = a;
    return l;
  }
  get Enum() {
    const l = {};
    for (const a of this._def.values) l[a] = a;
    return l;
  }
  extract(l) {
    return tr.create(l);
  }
  exclude(l) {
    return tr.create(this.options.filter((a) => !l.includes(a)));
  }
}
tr.create = Th;
class zl extends ne {
  _parse(l) {
    const a = fe.getValidEnumValues(this._def.values),
      u = this._getOrReturnCtx(l);
    if (u.parsedType !== A.string && u.parsedType !== A.number) {
      const d = fe.objectValues(a);
      return (
        D(u, {
          expected: fe.joinValues(d),
          received: u.parsedType,
          code: L.invalid_type,
        }),
        b
      );
    }
    if (a.indexOf(l.data) === -1) {
      const d = fe.objectValues(a);
      return (
        D(u, { received: u.data, code: L.invalid_enum_value, options: d }), b
      );
    }
    return lt(l.data);
  }
  get enum() {
    return this._def.values;
  }
}
zl.create = (s, l) =>
  new zl({ values: s, typeName: K.ZodNativeEnum, ...ee(l) });
class gi extends ne {
  unwrap() {
    return this._def.type;
  }
  _parse(l) {
    const { ctx: a } = this._processInputParams(l);
    if (a.parsedType !== A.promise && a.common.async === !1)
      return (
        D(a, {
          code: L.invalid_type,
          expected: A.promise,
          received: a.parsedType,
        }),
        b
      );
    const u = a.parsedType === A.promise ? a.data : Promise.resolve(a.data);
    return lt(
      u.then((d) =>
        this._def.type.parseAsync(d, {
          path: a.path,
          errorMap: a.common.contextualErrorMap,
        })
      )
    );
  }
}
gi.create = (s, l) => new gi({ type: s, typeName: K.ZodPromise, ...ee(l) });
class Kt extends ne {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === K.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l),
      d = this._def.effect || null,
      f = {
        addIssue: (v) => {
          D(u, v), v.fatal ? a.abort() : a.dirty();
        },
        get path() {
          return u.path;
        },
      };
    if (((f.addIssue = f.addIssue.bind(f)), d.type === "preprocess")) {
      const v = d.transform(u.data, f);
      return u.common.issues.length
        ? { status: "dirty", value: u.data }
        : u.common.async
          ? Promise.resolve(v).then((g) =>
              this._def.schema._parseAsync({ data: g, path: u.path, parent: u })
            )
          : this._def.schema._parseSync({ data: v, path: u.path, parent: u });
    }
    if (d.type === "refinement") {
      const v = (g) => {
        const P = d.refinement(g, f);
        if (u.common.async) return Promise.resolve(P);
        if (P instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return g;
      };
      if (u.common.async === !1) {
        const g = this._def.schema._parseSync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        return g.status === "aborted"
          ? b
          : (g.status === "dirty" && a.dirty(),
            v(g.value),
            { status: a.value, value: g.value });
      } else
        return this._def.schema
          ._parseAsync({ data: u.data, path: u.path, parent: u })
          .then((g) =>
            g.status === "aborted"
              ? b
              : (g.status === "dirty" && a.dirty(),
                v(g.value).then(() => ({ status: a.value, value: g.value })))
          );
    }
    if (d.type === "transform")
      if (u.common.async === !1) {
        const v = this._def.schema._parseSync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        if (!El(v)) return v;
        const g = d.transform(v.value, f);
        if (g instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: a.value, value: g };
      } else
        return this._def.schema
          ._parseAsync({ data: u.data, path: u.path, parent: u })
          .then((v) =>
            El(v)
              ? Promise.resolve(d.transform(v.value, f)).then((g) => ({
                  status: a.value,
                  value: g,
                }))
              : v
          );
    fe.assertNever(d);
  }
}
Kt.create = (s, l, a) =>
  new Kt({ schema: s, typeName: K.ZodEffects, effect: l, ...ee(a) });
Kt.createWithPreprocess = (s, l, a) =>
  new Kt({
    schema: l,
    effect: { type: "preprocess", transform: s },
    typeName: K.ZodEffects,
    ...ee(a),
  });
class Nn extends ne {
  _parse(l) {
    return this._getType(l) === A.undefined
      ? lt(void 0)
      : this._def.innerType._parse(l);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nn.create = (s, l) =>
  new Nn({ innerType: s, typeName: K.ZodOptional, ...ee(l) });
class Cr extends ne {
  _parse(l) {
    return this._getType(l) === A.null
      ? lt(null)
      : this._def.innerType._parse(l);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Cr.create = (s, l) =>
  new Cr({ innerType: s, typeName: K.ZodNullable, ...ee(l) });
class Il extends ne {
  _parse(l) {
    const { ctx: a } = this._processInputParams(l);
    let u = a.data;
    return (
      a.parsedType === A.undefined && (u = this._def.defaultValue()),
      this._def.innerType._parse({ data: u, path: a.path, parent: a })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Il.create = (s, l) =>
  new Il({
    innerType: s,
    typeName: K.ZodDefault,
    defaultValue: typeof l.default == "function" ? l.default : () => l.default,
    ...ee(l),
  });
class Ss extends ne {
  _parse(l) {
    const { ctx: a } = this._processInputParams(l),
      u = { ...a, common: { ...a.common, issues: [] } },
      d = this._def.innerType._parse({
        data: u.data,
        path: u.path,
        parent: { ...u },
      });
    return gs(d)
      ? d.then((f) => ({
          status: "valid",
          value:
            f.status === "valid"
              ? f.value
              : this._def.catchValue({
                  get error() {
                    return new Gt(u.common.issues);
                  },
                  input: u.data,
                }),
        }))
      : {
          status: "valid",
          value:
            d.status === "valid"
              ? d.value
              : this._def.catchValue({
                  get error() {
                    return new Gt(u.common.issues);
                  },
                  input: u.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ss.create = (s, l) =>
  new Ss({
    innerType: s,
    typeName: K.ZodCatch,
    catchValue: typeof l.catch == "function" ? l.catch : () => l.catch,
    ...ee(l),
  });
class xs extends ne {
  _parse(l) {
    if (this._getType(l) !== A.nan) {
      const u = this._getOrReturnCtx(l);
      return (
        D(u, { code: L.invalid_type, expected: A.nan, received: u.parsedType }),
        b
      );
    }
    return { status: "valid", value: l.data };
  }
}
xs.create = (s) => new xs({ typeName: K.ZodNaN, ...ee(s) });
const Xy = Symbol("zod_brand");
class Ph extends ne {
  _parse(l) {
    const { ctx: a } = this._processInputParams(l),
      u = a.data;
    return this._def.type._parse({ data: u, path: a.path, parent: a });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ml extends ne {
  _parse(l) {
    const { status: a, ctx: u } = this._processInputParams(l);
    if (u.common.async)
      return (async () => {
        const f = await this._def.in._parseAsync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        return f.status === "aborted"
          ? b
          : f.status === "dirty"
            ? (a.dirty(), Nh(f.value))
            : this._def.out._parseAsync({
                data: f.value,
                path: u.path,
                parent: u,
              });
      })();
    {
      const d = this._def.in._parseSync({
        data: u.data,
        path: u.path,
        parent: u,
      });
      return d.status === "aborted"
        ? b
        : d.status === "dirty"
          ? (a.dirty(), { status: "dirty", value: d.value })
          : this._def.out._parseSync({
              data: d.value,
              path: u.path,
              parent: u,
            });
    }
  }
  static create(l, a) {
    return new Ml({ in: l, out: a, typeName: K.ZodPipeline });
  }
}
class Es extends ne {
  _parse(l) {
    const a = this._def.innerType._parse(l);
    return El(a) && (a.value = Object.freeze(a.value)), a;
  }
}
Es.create = (s, l) =>
  new Es({ innerType: s, typeName: K.ZodReadonly, ...ee(l) });
const Rh = (s, l = {}, a) =>
    s
      ? yi.create().superRefine((u, d) => {
          var f, v;
          if (!s(u)) {
            const g =
                typeof l == "function"
                  ? l(u)
                  : typeof l == "string"
                    ? { message: l }
                    : l,
              P =
                (v = (f = g.fatal) !== null && f !== void 0 ? f : a) !== null &&
                v !== void 0
                  ? v
                  : !0,
              E = typeof g == "string" ? { message: g } : g;
            d.addIssue({ code: "custom", ...E, fatal: P });
          }
        })
      : yi.create(),
  Jy = { object: Re.lazycreate };
var K;
(function (s) {
  (s.ZodString = "ZodString"),
    (s.ZodNumber = "ZodNumber"),
    (s.ZodNaN = "ZodNaN"),
    (s.ZodBigInt = "ZodBigInt"),
    (s.ZodBoolean = "ZodBoolean"),
    (s.ZodDate = "ZodDate"),
    (s.ZodSymbol = "ZodSymbol"),
    (s.ZodUndefined = "ZodUndefined"),
    (s.ZodNull = "ZodNull"),
    (s.ZodAny = "ZodAny"),
    (s.ZodUnknown = "ZodUnknown"),
    (s.ZodNever = "ZodNever"),
    (s.ZodVoid = "ZodVoid"),
    (s.ZodArray = "ZodArray"),
    (s.ZodObject = "ZodObject"),
    (s.ZodUnion = "ZodUnion"),
    (s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (s.ZodIntersection = "ZodIntersection"),
    (s.ZodTuple = "ZodTuple"),
    (s.ZodRecord = "ZodRecord"),
    (s.ZodMap = "ZodMap"),
    (s.ZodSet = "ZodSet"),
    (s.ZodFunction = "ZodFunction"),
    (s.ZodLazy = "ZodLazy"),
    (s.ZodLiteral = "ZodLiteral"),
    (s.ZodEnum = "ZodEnum"),
    (s.ZodEffects = "ZodEffects"),
    (s.ZodNativeEnum = "ZodNativeEnum"),
    (s.ZodOptional = "ZodOptional"),
    (s.ZodNullable = "ZodNullable"),
    (s.ZodDefault = "ZodDefault"),
    (s.ZodCatch = "ZodCatch"),
    (s.ZodPromise = "ZodPromise"),
    (s.ZodBranded = "ZodBranded"),
    (s.ZodPipeline = "ZodPipeline"),
    (s.ZodReadonly = "ZodReadonly");
})(K || (K = {}));
const qy = (s, l = { message: `Input not instance of ${s.name}` }) =>
    Rh((a) => a instanceof s, l),
  jh = Qt.create,
  Lh = bn.create,
  by = xs.create,
  eg = er.create,
  Oh = Cl.create,
  tg = xr.create,
  ng = ks.create,
  rg = Nl.create,
  ig = Tl.create,
  lg = yi.create,
  og = Sr.create,
  sg = Tn.create,
  ag = ws.create,
  ug = Yt.create,
  cg = Re.create,
  dg = Re.strictCreate,
  fg = Pl.create,
  pg = Ns.create,
  hg = Rl.create,
  mg = dn.create,
  vg = jl.create,
  yg = _s.create,
  gg = Er.create,
  kg = vi.create,
  wg = Ll.create,
  _g = Ol.create,
  Sg = tr.create,
  xg = zl.create,
  Eg = gi.create,
  sh = Kt.create,
  Cg = Nn.create,
  Ng = Cr.create,
  Tg = Kt.createWithPreprocess,
  Pg = Ml.create,
  Rg = () => jh().optional(),
  jg = () => Lh().optional(),
  Lg = () => Oh().optional(),
  Og = {
    string: (s) => Qt.create({ ...s, coerce: !0 }),
    number: (s) => bn.create({ ...s, coerce: !0 }),
    boolean: (s) => Cl.create({ ...s, coerce: !0 }),
    bigint: (s) => er.create({ ...s, coerce: !0 }),
    date: (s) => xr.create({ ...s, coerce: !0 }),
  },
  zg = b;
var h = Object.freeze({
    __proto__: null,
    defaultErrorMap: xl,
    setErrorMap: Dy,
    getErrorMap: vs,
    makeIssue: ys,
    EMPTY_PATH: Fy,
    addIssueToContext: D,
    ParseStatus: et,
    INVALID: b,
    DIRTY: Nh,
    OK: lt,
    isAborted: bu,
    isDirty: ec,
    isValid: El,
    isAsync: gs,
    get util() {
      return fe;
    },
    get objectUtil() {
      return qu;
    },
    ZodParsedType: A,
    getParsedType: qn,
    ZodType: ne,
    ZodString: Qt,
    ZodNumber: bn,
    ZodBigInt: er,
    ZodBoolean: Cl,
    ZodDate: xr,
    ZodSymbol: ks,
    ZodUndefined: Nl,
    ZodNull: Tl,
    ZodAny: yi,
    ZodUnknown: Sr,
    ZodNever: Tn,
    ZodVoid: ws,
    ZodArray: Yt,
    ZodObject: Re,
    ZodUnion: Pl,
    ZodDiscriminatedUnion: Ns,
    ZodIntersection: Rl,
    ZodTuple: dn,
    ZodRecord: jl,
    ZodMap: _s,
    ZodSet: Er,
    ZodFunction: vi,
    ZodLazy: Ll,
    ZodLiteral: Ol,
    ZodEnum: tr,
    ZodNativeEnum: zl,
    ZodPromise: gi,
    ZodEffects: Kt,
    ZodTransformer: Kt,
    ZodOptional: Nn,
    ZodNullable: Cr,
    ZodDefault: Il,
    ZodCatch: Ss,
    ZodNaN: xs,
    BRAND: Xy,
    ZodBranded: Ph,
    ZodPipeline: Ml,
    ZodReadonly: Es,
    custom: Rh,
    Schema: ne,
    ZodSchema: ne,
    late: Jy,
    get ZodFirstPartyTypeKind() {
      return K;
    },
    coerce: Og,
    any: lg,
    array: ug,
    bigint: eg,
    boolean: Oh,
    date: tg,
    discriminatedUnion: pg,
    effect: sh,
    enum: Sg,
    function: kg,
    instanceof: qy,
    intersection: hg,
    lazy: wg,
    literal: _g,
    map: yg,
    nan: by,
    nativeEnum: xg,
    never: sg,
    null: ig,
    nullable: Ng,
    number: Lh,
    object: cg,
    oboolean: Lg,
    onumber: jg,
    optional: Cg,
    ostring: Rg,
    pipeline: Pg,
    preprocess: Tg,
    promise: Eg,
    record: vg,
    set: gg,
    strictObject: dg,
    string: jh,
    symbol: ng,
    transformer: sh,
    tuple: mg,
    undefined: rg,
    union: fg,
    unknown: og,
    void: ag,
    NEVER: zg,
    ZodIssueCode: L,
    quotelessJson: Ay,
    ZodError: Gt,
  }),
  Ig = h.string(),
  ic = h.object({
    type: h.literal("unit"),
    unit: Ig,
    value: h.number(),
    hidden: h.boolean().optional(),
  }),
  lc = h.object({
    type: h.literal("keyword"),
    value: h.string(),
    hidden: h.boolean().optional(),
  }),
  oc = h.object({
    type: h.literal("unparsed"),
    value: h.string(),
    hidden: h.boolean().optional(),
  }),
  Mg = h.object({
    type: h.literal("fontFamily"),
    value: h.array(h.string()),
    hidden: h.boolean().optional(),
  }),
  sc = h.object({
    type: h.literal("rgb"),
    r: h.number(),
    g: h.number(),
    b: h.number(),
    alpha: h.number(),
    hidden: h.boolean().optional(),
  }),
  ac = h.object({
    type: h.literal("function"),
    name: h.string(),
    args: h.lazy(() => cc),
    hidden: h.boolean().optional(),
  }),
  uc = h.object({
    type: h.literal("image"),
    value: h.union([
      h.object({ type: h.literal("asset"), value: h.string() }),
      h.object({ type: h.literal("url"), url: h.string() }),
    ]),
    hidden: h.boolean().optional(),
  }),
  Ag = h.object({
    type: h.literal("guaranteedInvalid"),
    hidden: h.boolean().optional(),
  }),
  zh = h.object({
    type: h.literal("invalid"),
    value: h.string(),
    hidden: h.boolean().optional(),
  }),
  Dg = h.object({
    type: h.literal("unset"),
    value: h.literal(""),
    hidden: h.boolean().optional(),
  }),
  Fg = h.union([ic, lc, oc, uc, sc, ac]),
  Ih = h.object({
    type: h.literal("tuple"),
    value: h.array(Fg),
    hidden: h.boolean().optional(),
  }),
  Vg = h.union([ic, lc, oc, uc, Ih, sc, zh, ac]),
  Ug = h.object({
    type: h.literal("layers"),
    value: h.array(Vg),
    hidden: h.boolean().optional(),
  }),
  Mh = h.union([uc, Ug, ic, lc, Mg, sc, oc, Ih, ac, Ag]),
  $g = h.object({
    type: h.literal("var"),
    value: h.string(),
    fallbacks: h.array(Mh),
    hidden: h.boolean().optional(),
  }),
  cc = h.union([Mh, zh, Dg, $g]);
h.record(h.string(), cc);
var Ts = F.createContext({
    assetBaseUrl: "/",
    imageBaseUrl: "/",
    imageLoader: ({ src: s }) => s,
    resources: {},
  }),
  We = {
    label: h.string().optional(),
    description: h.string().optional(),
    required: h.boolean(),
  },
  Zg = h.object({
    ...We,
    control: h.literal("number"),
    type: h.literal("number"),
    defaultValue: h.number().optional(),
  }),
  Bg = h.object({
    ...We,
    control: h.literal("range"),
    type: h.literal("number"),
    defaultValue: h.number().optional(),
  }),
  Hg = h.object({
    ...We,
    control: h.literal("text"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
    rows: h.number().optional(),
  }),
  Ah = h.object({
    ...We,
    control: h.literal("code"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
  }),
  Wg = Ah.extend({ control: h.literal("codetext") }),
  Qg = h.object({
    ...We,
    control: h.literal("color"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
  }),
  Gg = h.object({
    ...We,
    control: h.literal("boolean"),
    type: h.literal("boolean"),
    defaultValue: h.boolean().optional(),
  }),
  Yg = h.object({
    ...We,
    control: h.literal("radio"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
    options: h.array(h.string()),
  }),
  Kg = h.object({
    ...We,
    control: h.literal("inline-radio"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
    options: h.array(h.string()),
  }),
  Xg = h.object({
    ...We,
    control: h.literal("select"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
    options: h.array(h.string()),
  }),
  Jg = h.object({
    ...We,
    control: h.literal("check"),
    type: h.literal("string[]"),
    defaultValue: h.array(h.string()).optional(),
    options: h.array(h.string()),
  }),
  qg = h.object({
    ...We,
    control: h.literal("inline-check"),
    type: h.literal("string[]"),
    defaultValue: h.array(h.string()).optional(),
    options: h.array(h.string()),
  }),
  bg = h.object({
    ...We,
    control: h.literal("multi-select"),
    type: h.literal("string[]"),
    defaultValue: h.array(h.string()).optional(),
    options: h.array(h.string()),
  }),
  e0 = h.object({
    ...We,
    control: h.literal("file"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
    accept: h.string().optional(),
  }),
  t0 = h.object({
    ...We,
    control: h.literal("url"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
  }),
  n0 = h.object({
    ...We,
    control: h.literal("json"),
    type: h.literal("json"),
    defaultValue: h.unknown().optional(),
  }),
  r0 = h.object({
    ...We,
    control: h.literal("date"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
  }),
  i0 = h.object({
    ...We,
    control: h.literal("action"),
    type: h.literal("action"),
    defaultValue: h.undefined().optional(),
  }),
  l0 = h.object({
    ...We,
    control: h.literal("textContent"),
    type: h.literal("string"),
    defaultValue: h.string().optional(),
  }),
  o0 = h.union([
    Zg,
    Bg,
    Hg,
    Ah,
    Wg,
    Qg,
    Gg,
    Yg,
    Kg,
    Xg,
    bg,
    Jg,
    qg,
    e0,
    t0,
    n0,
    r0,
    i0,
    l0,
  ]),
  s0 = h.object({
    type: h.literal("text"),
    value: h.string(),
    placeholder: h.boolean().optional(),
  }),
  a0 = h.object({ type: h.literal("expression"), value: h.string() }),
  u0 = h.object({ alias: h.optional(h.string()), initialValue: h.unknown() }),
  c0 = h.union([
    h.object({
      type: h.literal("number"),
      name: h.string(),
      value: h.number(),
    }),
    h.object({
      type: h.literal("string"),
      name: h.string(),
      value: h.string(),
    }),
    h.object({
      type: h.literal("boolean"),
      name: h.string(),
      value: h.boolean(),
    }),
    h.object({
      type: h.literal("string[]"),
      name: h.string(),
      value: h.array(h.string()),
    }),
    h.object({ type: h.literal("json"), name: h.string(), value: h.unknown() }),
    h.object({
      type: h.literal("expression"),
      name: h.string(),
      code: h.string(),
    }),
    h.object({
      type: h.literal("parameter"),
      name: h.string(),
      variableName: h.string(),
      variableAlias: h.optional(h.string()),
    }),
    h.object({
      type: h.literal("action"),
      name: h.string(),
      value: h.array(
        h.object({
          type: h.literal("execute"),
          args: h.optional(h.array(h.string())),
          code: h.string(),
        })
      ),
    }),
  ]),
  d0 = h.object({
    state: h.optional(h.string()),
    property: h.string(),
    value: cc,
  }),
  dc = d0,
  f0 = h.lazy(() =>
    h.object({
      type: h.literal("instance"),
      component: h.string(),
      label: h.optional(h.string()),
      variables: h.optional(h.record(h.string(), u0)),
      props: h.optional(h.array(c0)),
      tokens: h.optional(h.array(h.string())),
      styles: h.optional(h.array(dc)),
      children: Dh,
    })
  ),
  Dh = h.lazy(() => h.array(h.union([f0, s0, a0])));
h.object({ props: h.record(o0), initialProps: h.array(h.string()).optional() });
var p0 = [
    "general",
    "text",
    "data",
    "media",
    "forms",
    "radix",
    "xml",
    "hidden",
    "internal",
  ],
  h0 = ["states", "component-states"],
  m0 = h.object({
    category: h.enum(h0).optional(),
    selector: h.string(),
    label: h.string(),
  }),
  v0 = h.object({ variant: h.optional(h.string()), styles: h.array(dc) });
h.object({
  category: h.enum(p0).optional(),
  type: h.enum(["container", "control", "embed", "rich-text-child"]),
  requiredAncestors: h.optional(h.array(h.string())),
  invalidAncestors: h.optional(h.array(h.string())),
  indexWithinAncestor: h.optional(h.string()),
  stylable: h.optional(h.boolean()),
  detachable: h.optional(h.boolean()),
  label: h.optional(h.string()),
  description: h.string().optional(),
  icon: h.string(),
  presetStyle: h.optional(h.record(h.string(), h.array(dc))),
  presetTokens: h.optional(h.record(h.string(), v0)),
  states: h.optional(h.array(m0)),
  template: h.optional(Dh),
  order: h.number().optional(),
});
var y0 = [16, 32, 48, 64, 96, 128, 256, 384],
  nc = [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  wl = [...y0, ...nc],
  g0 = (s, l) => {
    if (l) {
      const d = /(^|\s)(1?\d?\d)vw/g,
        f = [];
      for (let v; (v = d.exec(l)); v) f.push(Number.parseInt(v[2], 10));
      if (f.length) {
        const v = Math.min(...f) * 0.01;
        return { widths: wl.filter((g) => g >= nc[0] * v), kind: "w" };
      }
      return { widths: wl, kind: "w" };
    }
    if (s == null) return { widths: nc, kind: "w" };
    const a = 2;
    let u = wl.findIndex((d) => d >= a * s);
    return (
      (u = u < 0 ? wl.length : u), { widths: wl.slice(0, u + 1), kind: "w" }
    );
  },
  k0 = ({ src: s, width: l, quality: a, sizes: u, loader: d }) => {
    const { widths: f, kind: v } = g0(l, u);
    return {
      sizes: !u && v === "w" ? "100vw" : u,
      srcSet: f
        .map(
          (g, P) =>
            `${d({ src: s, quality: a, width: g })} ${v === "w" ? g : P + 1}${v}`
        )
        .join(", "),
      src: d({ src: s, quality: a, width: f[f.length - 1] }),
    };
  },
  ah = (s) => {
    if (typeof s == "number") return Math.round(s);
    if (typeof s == "string") {
      const l = Number.parseFloat(s);
      if (!Number.isNaN(l)) return Math.round(l);
    }
  },
  w0 = "(min-width: 1280px) 50vw, 100vw",
  _0 = 80,
  S0 = (s) => {
    const l = ah(s.width),
      a = Math.max(Math.min(ah(s.quality) ?? _0, 100), 0);
    if (s.src != null && s.src !== "") {
      if (s.srcSet == null && s.optimize) {
        const d = s.sizes ?? (s.width == null ? w0 : void 0);
        return k0({
          src: s.src,
          width: l,
          quality: a,
          sizes: d,
          loader: s.loader,
        });
      }
      const u = { src: s.src };
      return (
        s.srcSet != null && (u.srcSet = s.srcSet),
        s.sizes != null && (u.sizes = s.sizes),
        u
      );
    }
  },
  Fh = F.forwardRef(
    (
      {
        quality: s,
        loader: l,
        optimize: a = !0,
        loading: u = "lazy",
        decoding: d = "async",
        ...f
      },
      v
    ) => {
      const g = S0({
        src: f.src,
        srcSet: f.srcSet,
        sizes: f.sizes,
        width: f.width,
        quality: s,
        loader: l,
        optimize: a,
      }) ?? { src: x0 };
      return z.jsx("img", {
        alt: "",
        ...f,
        ...g,
        decoding: d,
        loading: u,
        ref: v,
      });
    }
  );
Fh.displayName = "Image";
var x0 = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="hsla(0, 0%, 80%, 0.2)" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`,
  E0 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  Cn = function (s) {
    return typeof s == "string" ? s.length > 0 : typeof s == "number";
  },
  He = function (s, l, a) {
    return (
      l === void 0 && (l = 0),
      a === void 0 && (a = Math.pow(10, l)),
      Math.round(a * s) / a + 0
    );
  },
  Dt = function (s, l, a) {
    return (
      l === void 0 && (l = 0),
      a === void 0 && (a = 1),
      s > a ? a : s > l ? s : l
    );
  },
  Vh = function (s) {
    return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360;
  },
  uh = function (s) {
    return {
      r: Dt(s.r, 0, 255),
      g: Dt(s.g, 0, 255),
      b: Dt(s.b, 0, 255),
      a: Dt(s.a),
    };
  },
  Hu = function (s) {
    return { r: He(s.r), g: He(s.g), b: He(s.b), a: He(s.a, 3) };
  },
  C0 = /^#([0-9a-f]{3,8})$/i,
  hs = function (s) {
    var l = s.toString(16);
    return l.length < 2 ? "0" + l : l;
  },
  Uh = function (s) {
    var l = s.r,
      a = s.g,
      u = s.b,
      d = s.a,
      f = Math.max(l, a, u),
      v = f - Math.min(l, a, u),
      g = v
        ? f === l
          ? (a - u) / v
          : f === a
            ? 2 + (u - l) / v
            : 4 + (l - a) / v
        : 0;
    return {
      h: 60 * (g < 0 ? g + 6 : g),
      s: f ? (v / f) * 100 : 0,
      v: (f / 255) * 100,
      a: d,
    };
  },
  $h = function (s) {
    var l = s.h,
      a = s.s,
      u = s.v,
      d = s.a;
    (l = (l / 360) * 6), (a /= 100), (u /= 100);
    var f = Math.floor(l),
      v = u * (1 - a),
      g = u * (1 - (l - f) * a),
      P = u * (1 - (1 - l + f) * a),
      E = f % 6;
    return {
      r: 255 * [u, g, v, v, P, u][E],
      g: 255 * [P, u, u, g, v, v][E],
      b: 255 * [v, v, P, u, u, g][E],
      a: d,
    };
  },
  ch = function (s) {
    return { h: Vh(s.h), s: Dt(s.s, 0, 100), l: Dt(s.l, 0, 100), a: Dt(s.a) };
  },
  dh = function (s) {
    return { h: He(s.h), s: He(s.s), l: He(s.l), a: He(s.a, 3) };
  },
  fh = function (s) {
    return $h(
      ((a = (l = s).s),
      {
        h: l.h,
        s:
          (a *= ((u = l.l) < 50 ? u : 100 - u) / 100) > 0
            ? ((2 * a) / (u + a)) * 100
            : 0,
        v: u + a,
        a: l.a,
      })
    );
    var l, a, u;
  },
  _l = function (s) {
    return {
      h: (l = Uh(s)).h,
      s:
        (d = ((200 - (a = l.s)) * (u = l.v)) / 100) > 0 && d < 200
          ? ((a * u) / 100 / (d <= 100 ? d : 200 - d)) * 100
          : 0,
      l: d / 2,
      a: l.a,
    };
    var l, a, u, d;
  },
  N0 =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  T0 =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  P0 =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  R0 =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  ph = {
    string: [
      [
        function (s) {
          var l = C0.exec(s);
          return l
            ? (s = l[1]).length <= 4
              ? {
                  r: parseInt(s[0] + s[0], 16),
                  g: parseInt(s[1] + s[1], 16),
                  b: parseInt(s[2] + s[2], 16),
                  a:
                    s.length === 4 ? He(parseInt(s[3] + s[3], 16) / 255, 2) : 1,
                }
              : s.length === 6 || s.length === 8
                ? {
                    r: parseInt(s.substr(0, 2), 16),
                    g: parseInt(s.substr(2, 2), 16),
                    b: parseInt(s.substr(4, 2), 16),
                    a:
                      s.length === 8
                        ? He(parseInt(s.substr(6, 2), 16) / 255, 2)
                        : 1,
                  }
                : null
            : null;
        },
        "hex",
      ],
      [
        function (s) {
          var l = P0.exec(s) || R0.exec(s);
          return l
            ? l[2] !== l[4] || l[4] !== l[6]
              ? null
              : uh({
                  r: Number(l[1]) / (l[2] ? 100 / 255 : 1),
                  g: Number(l[3]) / (l[4] ? 100 / 255 : 1),
                  b: Number(l[5]) / (l[6] ? 100 / 255 : 1),
                  a: l[7] === void 0 ? 1 : Number(l[7]) / (l[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var l = N0.exec(s) || T0.exec(s);
          if (!l) return null;
          var a,
            u,
            d = ch({
              h:
                ((a = l[1]),
                (u = l[2]),
                u === void 0 && (u = "deg"),
                Number(a) * (E0[u] || 1)),
              s: Number(l[3]),
              l: Number(l[4]),
              a: l[5] === void 0 ? 1 : Number(l[5]) / (l[6] ? 100 : 1),
            });
          return fh(d);
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (s) {
          var l = s.r,
            a = s.g,
            u = s.b,
            d = s.a,
            f = d === void 0 ? 1 : d;
          return Cn(l) && Cn(a) && Cn(u)
            ? uh({ r: Number(l), g: Number(a), b: Number(u), a: Number(f) })
            : null;
        },
        "rgb",
      ],
      [
        function (s) {
          var l = s.h,
            a = s.s,
            u = s.l,
            d = s.a,
            f = d === void 0 ? 1 : d;
          if (!Cn(l) || !Cn(a) || !Cn(u)) return null;
          var v = ch({
            h: Number(l),
            s: Number(a),
            l: Number(u),
            a: Number(f),
          });
          return fh(v);
        },
        "hsl",
      ],
      [
        function (s) {
          var l = s.h,
            a = s.s,
            u = s.v,
            d = s.a,
            f = d === void 0 ? 1 : d;
          if (!Cn(l) || !Cn(a) || !Cn(u)) return null;
          var v = (function (g) {
            return {
              h: Vh(g.h),
              s: Dt(g.s, 0, 100),
              v: Dt(g.v, 0, 100),
              a: Dt(g.a),
            };
          })({ h: Number(l), s: Number(a), v: Number(u), a: Number(f) });
          return $h(v);
        },
        "hsv",
      ],
    ],
  },
  hh = function (s, l) {
    for (var a = 0; a < l.length; a++) {
      var u = l[a][0](s);
      if (u) return [u, l[a][1]];
    }
    return [null, void 0];
  },
  j0 = function (s) {
    return typeof s == "string"
      ? hh(s.trim(), ph.string)
      : typeof s == "object" && s !== null
        ? hh(s, ph.object)
        : [null, void 0];
  },
  Wu = function (s, l) {
    var a = _l(s);
    return { h: a.h, s: Dt(a.s + 100 * l, 0, 100), l: a.l, a: a.a };
  },
  Qu = function (s) {
    return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255;
  },
  mh = function (s, l) {
    var a = _l(s);
    return { h: a.h, s: a.s, l: Dt(a.l + 100 * l, 0, 100), a: a.a };
  },
  vh = (function () {
    function s(l) {
      (this.parsed = j0(l)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (s.prototype.isValid = function () {
        return this.parsed !== null;
      }),
      (s.prototype.brightness = function () {
        return He(Qu(this.rgba), 2);
      }),
      (s.prototype.isDark = function () {
        return Qu(this.rgba) < 0.5;
      }),
      (s.prototype.isLight = function () {
        return Qu(this.rgba) >= 0.5;
      }),
      (s.prototype.toHex = function () {
        return (
          (l = Hu(this.rgba)),
          (a = l.r),
          (u = l.g),
          (d = l.b),
          (v = (f = l.a) < 1 ? hs(He(255 * f)) : ""),
          "#" + hs(a) + hs(u) + hs(d) + v
        );
        var l, a, u, d, f, v;
      }),
      (s.prototype.toRgb = function () {
        return Hu(this.rgba);
      }),
      (s.prototype.toRgbString = function () {
        return (
          (l = Hu(this.rgba)),
          (a = l.r),
          (u = l.g),
          (d = l.b),
          (f = l.a) < 1
            ? "rgba(" + a + ", " + u + ", " + d + ", " + f + ")"
            : "rgb(" + a + ", " + u + ", " + d + ")"
        );
        var l, a, u, d, f;
      }),
      (s.prototype.toHsl = function () {
        return dh(_l(this.rgba));
      }),
      (s.prototype.toHslString = function () {
        return (
          (l = dh(_l(this.rgba))),
          (a = l.h),
          (u = l.s),
          (d = l.l),
          (f = l.a) < 1
            ? "hsla(" + a + ", " + u + "%, " + d + "%, " + f + ")"
            : "hsl(" + a + ", " + u + "%, " + d + "%)"
        );
        var l, a, u, d, f;
      }),
      (s.prototype.toHsv = function () {
        return (
          (l = Uh(this.rgba)),
          { h: He(l.h), s: He(l.s), v: He(l.v), a: He(l.a, 3) }
        );
        var l;
      }),
      (s.prototype.invert = function () {
        return un({
          r: 255 - (l = this.rgba).r,
          g: 255 - l.g,
          b: 255 - l.b,
          a: l.a,
        });
        var l;
      }),
      (s.prototype.saturate = function (l) {
        return l === void 0 && (l = 0.1), un(Wu(this.rgba, l));
      }),
      (s.prototype.desaturate = function (l) {
        return l === void 0 && (l = 0.1), un(Wu(this.rgba, -l));
      }),
      (s.prototype.grayscale = function () {
        return un(Wu(this.rgba, -1));
      }),
      (s.prototype.lighten = function (l) {
        return l === void 0 && (l = 0.1), un(mh(this.rgba, l));
      }),
      (s.prototype.darken = function (l) {
        return l === void 0 && (l = 0.1), un(mh(this.rgba, -l));
      }),
      (s.prototype.rotate = function (l) {
        return l === void 0 && (l = 15), this.hue(this.hue() + l);
      }),
      (s.prototype.alpha = function (l) {
        return typeof l == "number"
          ? un({ r: (a = this.rgba).r, g: a.g, b: a.b, a: l })
          : He(this.rgba.a, 3);
        var a;
      }),
      (s.prototype.hue = function (l) {
        var a = _l(this.rgba);
        return typeof l == "number"
          ? un({ h: l, s: a.s, l: a.l, a: a.a })
          : He(a.h);
      }),
      (s.prototype.isEqual = function (l) {
        return this.toHex() === un(l).toHex();
      }),
      s
    );
  })(),
  un = function (s) {
    return s instanceof vh ? s : new vh(s);
  },
  L0 = F.forwardRef((s, l) =>
    z.jsx("div", {
      ...s,
      ref: l,
      style: { display: s.children ? "contents" : "block" },
    })
  );
L0.displayName = "Slot";
var O0 = F.forwardRef((s, l) =>
  z.jsx("div", { ...s, ref: l, style: { display: "contents" } })
);
O0.displayName = "Fragment";
var z0 = () =>
    document.readyState === "complete" || document.readyState === "interactive",
  Sl = [],
  yh = !1,
  I0 = () => {
    if (z0() === !1) {
      console.error("DOMContentLoaded event has not been fired yet");
      return;
    }
    if (yh) return;
    yh = !0;
    const s = document.addEventListener,
      l = window.addEventListener,
      a = new Event("DOMContentLoaded"),
      u = new Event("load");
    (window.addEventListener = (d, f, v) => {
      d === "DOMContentLoaded"
        ? Sl.push(() => f.call(window, a))
        : (d === "load" && Sl.push(() => f.call(window, u)),
          l.call(window, d, f, v));
    }),
      (document.addEventListener = (d, f, v) => {
        d === "DOMContentLoaded"
          ? Sl.push(() => f.call(document, a))
          : s.call(document, d, f, v);
      });
  },
  M0 = () => {
    for (const s of Sl) s();
    Sl.length = 0;
  },
  A0 = { scriptTestIdPrefix: "client-" },
  D0 = (s) =>
    new Promise((l, a) => {
      const u = document.createElement("script"),
        d = s.hasAttribute("src"),
        f = s.type === "module";
      for (const { name: v, value: g } of s.attributes) u.setAttribute(v, g);
      if (
        (u.dataset.testid !== void 0 &&
          (u.dataset.testid = `${A0.scriptTestIdPrefix}${u.dataset.testid}`),
        d)
      )
        u.addEventListener("load", () => {
          l();
        }),
          u.addEventListener("error", a);
      else {
        if (f) {
          const v = new Blob([s.innerText], { type: "text/javascript" }),
            g = URL.createObjectURL(v);
          import(g)
            .then(l)
            .catch(a)
            .finally(() => {
              URL.revokeObjectURL(g);
            });
          return;
        }
        u.textContent = s.innerText;
      }
      s.replaceWith(u), d === !1 && l();
    }),
  Gu = [],
  Yu = !1,
  F0 = async (s) => {
    if ((Gu.push(...s), await Promise.resolve(), !Yu)) {
      for (I0(), Yu = !0; Gu.length > 0; ) await Gu.shift()();
      M0(), (Yu = !1);
    }
  },
  V0 = (s) => {
    const l = s.querySelectorAll("script"),
      a = [],
      u = [];
    l.forEach((d) => {
      (d.hasAttribute("async") ? u : a).push(() => D0(d));
    });
    for (const d of u) d();
    F0(a);
  },
  U0 = (s) => {
    const { code: l, innerRef: a, ...u } = s;
    return z.jsx("div", {
      ref: a,
      ...u,
      style: { display: "block", padding: 20 },
      children: 'Open the "Settings" panel to insert HTML code.',
    });
  },
  Zh = () =>
    F.useSyncExternalStore(
      () => () => {},
      () => !1,
      () => !0
    ),
  Ku = (s) => {
    if (!Zh()) return s.children;
  },
  gh = (s) => {
    const { code: l, innerRef: a, ...u } = s,
      d = F.useRef(null),
      f = F.useRef(!0),
      v = F.useMemo(() => ({ __html: l ?? "" }), [l]);
    return (
      F.useEffect(() => {
        const g = d.current;
        g && f.current && ((f.current = !1), V0(g));
      }, []),
      z.jsx("div", { ...u, ref: My(a, d), dangerouslySetInnerHTML: v })
    );
  },
  Bh = (s) => {
    const { code: l, innerRef: a, ...u } = s;
    return z.jsx("div", {
      ...u,
      ref: a,
      dangerouslySetInnerHTML: { __html: l ?? "" },
    });
  },
  $0 = Bh,
  Z0 = F.forwardRef((s, l) => {
    const {
        code: a,
        executeScriptOnCanvas: u,
        clientOnly: d,
        children: f,
        ...v
      } = s,
      { renderer: g } = F.useContext(Ts),
      P = Zh(),
      [E] = F.useState(P);
    return a === void 0 || String(a).trim().length === 0
      ? z.jsx(U0, { innerRef: l, ...v })
      : E
        ? d !== !0
          ? z.jsx(Bh, { innerRef: l, code: a, ...v })
          : z.jsx(Ku, { children: z.jsx(gh, { innerRef: l, code: a, ...v }) })
        : g === "canvas" && u !== !0
          ? z.jsx(Ku, { children: z.jsx($0, { innerRef: l, code: a, ...v }) })
          : z.jsx(Ku, {
              children: z.jsx(gh, { innerRef: l, code: a, ...v }, a),
            });
  });
Z0.displayName = "HtmlEmbed";
var Hh = F.forwardRef((s, l) => z.jsx("body", { ...s, ref: l }));
Hh.displayName = "Body";
var B0 = "div",
  H0 = F.forwardRef(({ tag: s = B0, ...l }, a) =>
    F.createElement(s, { ...l, ref: a })
  );
H0.displayName = "Box";
var W0 = "div",
  Wh = F.forwardRef(({ tag: s = W0, children: l, ...a }, u) => {
    const d = s;
    return z.jsx(d, { ...a, ref: u, children: l });
  });
Wh.displayName = "Text";
var Q0 = "h1",
  Qh = F.forwardRef(({ tag: s = Q0, children: l, ...a }, u) => {
    const d = s;
    return z.jsx(d, { ...a, ref: u, children: l });
  });
Qh.displayName = "Heading";
var G0 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("p", { ...l, ref: a, children: s })
);
G0.displayName = "Paragraph";
var fc = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("a", { ...l, href: l.href ?? "#", ref: a, children: s })
);
fc.displayName = "Link";
var Y0 = F.forwardRef((s, l) => z.jsx(fc, { ...s, ref: l }));
Y0.displayName = "RichTextLink";
var K0 = F.forwardRef((s, l) => z.jsx("span", { ...s, ref: l }));
K0.displayName = "Span";
var X0 = F.forwardRef((s, l) => z.jsx("b", { ...s, ref: l }));
X0.displayName = "Bold";
var J0 = F.forwardRef((s, l) => z.jsx("i", { ...s, ref: l }));
J0.displayName = "Italic";
var q0 = F.forwardRef((s, l) => z.jsx("sup", { ...s, ref: l }));
q0.displayName = "Bold";
var b0 = F.forwardRef((s, l) => z.jsx("sub", { ...s, ref: l }));
b0.displayName = "Subscript";
var Gh = F.forwardRef(({ type: s = "submit", children: l, ...a }, u) =>
  z.jsx("button", { type: s, ...a, ref: u, children: l })
);
Gh.displayName = "Button";
var e1 = F.forwardRef(({ children: s, type: l = "text", ...a }, u) =>
  z.jsx("input", { ...a, type: l, ref: u })
);
e1.displayName = "Input";
var t1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("form", { ...l, ref: a, children: s })
);
t1.displayName = "Form";
var Cs = F.forwardRef(
  (
    {
      loading: s = "lazy",
      width: l,
      height: a,
      optimize: u = !0,
      decoding: d,
      $webstudio$canvasOnly$assetId: f,
      ...v
    },
    g
  ) => {
    const P = String(v.src ?? ""),
      { imageLoader: E, renderer: I, assetBaseUrl: M } = F.useContext(Ts);
    let V = d,
      Le = P;
    I === "canvas" &&
      ((s = "eager"),
      (V = "sync"),
      (Le = f ?? P),
      l !== void 0 &&
        a !== void 0 &&
        Number.isNaN(l) &&
        Number.isNaN(a) &&
        ((u = !1), (l = void 0), (a = void 0)));
    let Ne = P;
    return (
      P.startsWith(M) && (Ne = P.slice(M.length)),
      console.info("assetName", Ne, "src", P, "assetBaseUrl", M),
      z.jsx(
        Fh,
        {
          loading: s,
          decoding: V,
          optimize: u,
          width: l,
          height: a,
          ...v,
          loader: E,
          src: Ne,
          ref: g,
        },
        Le
      )
    );
  }
);
Cs.displayName = "Image";
var n1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("blockquote", { ...l, ref: a, children: s })
);
n1.displayName = "Blockquote";
var r1 = "ul",
  i1 = "ol",
  l1 = F.forwardRef(({ ordered: s = !1, ...l }, a) => {
    const u = s ? i1 : r1;
    return F.createElement(u, { ...l, ref: a });
  });
l1.displayName = "List";
var o1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("li", { ...l, ref: a, children: s })
);
o1.displayName = "ListItem";
var s1 = "hr",
  a1 = F.forwardRef((s, l) => F.createElement(s1, { ...s, ref: l }));
a1.displayName = "Separator";
var u1 = ({ innerRef: s, ...l }) =>
    z.jsx("code", {
      ...l,
      style: { padding: 20 },
      ref: s,
      children: 'Open the "Settings" panel to edit the code.',
    }),
  c1 = F.forwardRef(({ code: s, children: l, ...a }, u) =>
    (l === void 0 && s === void 0) || String(s).trim().length === 0
      ? z.jsx(u1, { innerRef: u, ...a })
      : z.jsx("code", { ...a, ref: u, children: s ?? l })
  );
c1.displayName = "CodeText";
var d1 = F.forwardRef((s, l) => z.jsx("label", { ...s, ref: l }));
d1.displayName = "Label";
var f1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("textarea", { ...l, ref: a })
);
f1.displayName = "Textarea";
var p1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("input", { ...l, type: "radio", ref: a })
);
p1.displayName = "RadioButton";
var h1 = F.forwardRef(({ children: s, ...l }, a) =>
  z.jsx("input", { ...l, type: "checkbox", ref: a })
);
h1.displayName = "Checkbox";
var m1 = (s) => {
    if (s.url === void 0) return;
    let l;
    try {
      const d = new URL(s.url);
      (l = new URL(Yh)), (l.pathname = `/video${d.pathname}`);
    } catch {}
    if (l === void 0) return;
    const a = {
      showPortrait: "portrait",
      showByline: "byline",
      showTitle: "title",
      controlsColor: "color",
      showControls: "controls",
      interactiveParams: "interactive_params",
      backgroundMode: "background",
      doNotTrack: "dnt",
    };
    let u;
    for (u in s) {
      const d = s[u];
      if (u === "url" || d === void 0) continue;
      const f = a[u] ?? u;
      l.searchParams.append(f, d.toString());
    }
    if (
      (l.searchParams.set("autoplay", "true"),
      typeof s.controlsColor == "string")
    ) {
      const d = un(s.controlsColor).toHex().replace("#", "");
      l.searchParams.set("color", d);
    }
    return (
      s.showPortrait && l.searchParams.set("title", "true"),
      s.showByline &&
        (l.searchParams.set("portrait", "true"),
        l.searchParams.set("title", "true")),
      l.toString()
    );
  },
  Xu = (s) => {
    const l = document.createElement("link");
    (l.rel = "preconnect"),
      (l.href = s),
      (l.crossOrigin = "true"),
      document.head.appendChild(l);
  },
  kh = !1,
  v1 = "https://f.vimeocdn.com",
  Yh = "https://player.vimeo.com",
  Kh = "https://i.vimeocdn.com",
  y1 = () => {
    kh ||
      window.matchMedia("(hover: none)").matches ||
      (Xu(v1), Xu(Yh), Xu(Kh), (kh = !0));
  },
  g1 = (s) => {
    try {
      const a = new URL(s).pathname.split("/")[2];
      return a === "" || a == null ? void 0 : a;
    } catch {}
  },
  k1 = async (s) => {
    const a = `https://vimeo.com/api/v2/video/${g1(s)}.json`,
      d = (await (await fetch(a)).json())[0].thumbnail_large,
      f = d.substr(d.lastIndexOf("/") + 1).split("_")[0],
      v = new URL(Kh);
    return (
      (v.pathname = `/video/${f}.webp`),
      v.searchParams.append("mw", "1100"),
      v.searchParams.append("mh", "619"),
      v.searchParams.append("q", "70"),
      v
    );
  },
  w1 = () =>
    z.jsx("div", {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2em",
      },
      children:
        'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.',
    }),
  _1 = ({
    status: s,
    loading: l,
    videoUrl: a,
    previewImageUrl: u,
    autoplay: d,
    renderer: f,
    showPreview: v,
    onStatusChange: g,
    onPreviewImageUrlChange: P,
  }) => {
    const [E, I] = F.useState(0);
    if (
      (F.useEffect(() => {
        d && f !== "canvas" && s === "initial" && g("loading");
      }, [d, s, f, g]),
      F.useEffect(() => {
        f !== "canvas" && y1();
      }, [f]),
      F.useEffect(() => {
        if (a !== void 0) {
          if (v === !1) {
            P(void 0);
            return;
          }
          u === void 0 &&
            k1(a)
              .then(P)
              .catch(() => {
                console.error(`Could not load preview image for ${a}`);
              });
        }
      }, [P, v, a, u]),
      !(f === "canvas" || s === "initial"))
    )
      return z.jsx("iframe", {
        src: a,
        loading: l,
        allow:
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",
        allowFullScreen: !0,
        style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: E,
          transition: "opacity 1s",
          border: "none",
        },
        onLoad: () => {
          g("ready"), I(1);
        },
      });
  },
  Ps = F.createContext({ onInitPlayer: () => {}, status: "initial" }),
  S1 = F.forwardRef(
    (
      {
        url: s,
        loading: l = "lazy",
        autoplay: a = !1,
        autopause: u = !0,
        backgroundMode: d = !1,
        showByline: f = !1,
        showControls: v = !0,
        doNotTrack: g = !1,
        keyboard: P = !0,
        loop: E = !1,
        muted: I = !1,
        pip: M = !1,
        playsinline: V = !0,
        showPortrait: Le = !0,
        quality: Ne = "auto",
        responsive: Qe = !0,
        speed: tt = !1,
        showTitle: Ft = !1,
        transparent: Vt = !0,
        showPreview: xt = !1,
        autopip: Ve,
        controlsColor: he,
        interactiveParams: ot,
        texttrack: st,
        children: Ut,
        ...Je
      },
      ht
    ) => {
      const [at, fn] = F.useState("initial"),
        [Et, Xt] = F.useState(),
        { renderer: nt } = F.useContext(Ts),
        O = m1({
          url: s,
          autoplay: a,
          autopause: u,
          backgroundMode: d,
          showControls: v,
          controlsColor: he,
          doNotTrack: g,
          interactiveParams: ot,
          keyboard: P,
          loop: E,
          muted: I,
          pip: M,
          playsinline: V,
          quality: Ne,
          responsive: Qe,
          speed: tt,
          texttrack: st,
          showTitle: Ft,
          transparent: Vt,
          showPortrait: Le,
          autopip: Ve,
        });
      return z.jsx(Ps.Provider, {
        value: {
          status: at,
          previewImageUrl: Et,
          onInitPlayer() {
            nt !== "canvas" && fn("loading");
          },
        },
        children: z.jsx("div", {
          ...Je,
          ref: (G) => {
            ht !== null && (typeof ht == "function" ? ht(G) : (ht.current = G));
          },
          children:
            O === void 0
              ? z.jsx(w1, {})
              : z.jsxs(z.Fragment, {
                  children: [
                    Ut,
                    z.jsx(_1, {
                      autoplay: a,
                      videoUrl: O,
                      previewImageUrl: Et,
                      loading: l,
                      showPreview: xt,
                      renderer: nt,
                      status: at,
                      onStatusChange: fn,
                      onPreviewImageUrlChange: Xt,
                    }),
                  ],
                }),
        }),
      });
    }
  );
S1.displayName = "Vimeo";
var x1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=",
  E1 = F.forwardRef(({ src: s, ...l }, a) => {
    const u = F.useContext(Ps);
    return z.jsx(Cs, {
      ...l,
      src: String(u.previewImageUrl ?? s ?? x1),
      ref: a,
    });
  });
E1.displayName = "VimeoPreviewImage";
var C1 = F.forwardRef((s, l) => {
  const a = F.useContext(Ps);
  if (a.status === "initial")
    return z.jsx(Gh, { ...s, onClick: a.onInitPlayer, ref: l });
});
C1.displayName = "VimeoPlayButton";
var N1 = F.forwardRef((s, l) => {
  if (F.useContext(Ps).status === "loading")
    return z.jsx("div", { ...s, ref: l });
});
N1.displayName = "VimeoSpinner";
var T1 = F.forwardRef(({ tag: s = "", children: l, ...a }, u) => {
  const { renderer: d } = F.useContext(Ts),
    f = Object.entries(a)
      .filter(
        ([E]) => E.startsWith("data-") === !1 && E.startsWith("aria-") === !1
      )
      .filter(([E]) => E !== "tabIndex")
      .filter(([, E]) => typeof E != "function");
  if (d === void 0) {
    const E = Object.fromEntries(f);
    return F.createElement(s, E, l);
  }
  const v = F.Children.toArray(l).every((E) => typeof E == "string"),
    g = s.replace(/^[^\p{L}_]+/u, "").replaceAll(/[^\p{L}\p{N}\-._]+/gu, ""),
    P = f.map(([E, I]) => `${E}=${JSON.stringify(I)}`);
  return z.jsxs("div", {
    style: { display: v ? "flex" : "contents" },
    ...a,
    children: [
      z.jsxs("div", {
        style: { color: "rgb(16, 23, 233)" },
        children: ["<", [g, ...P].join(" "), ">"],
      }),
      z.jsx("div", {
        ref: u,
        style: { marginLeft: v ? 0 : "1rem" },
        children: l,
      }),
      z.jsxs("div", {
        style: { color: "rgb(16, 23, 233)" },
        children: ["</", g, ">"],
      }),
    ],
  });
});
T1.displayName = "XmlNode";
var P1 = [
    "af",
    "am",
    "ar",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "ca",
    "cs",
    "cy",
    "da",
    "de",
    "el",
    "en",
    "es",
    "et",
    "eu",
    "fa",
    "fi",
    "fr",
    "ga",
    "gl",
    "gu",
    "he",
    "hi",
    "hr",
    "hu",
    "hy",
    "id",
    "is",
    "it",
    "ja",
    "ka",
    "kk",
    "km",
    "kn",
    "ko",
    "ky",
    "lb",
    "lt",
    "lv",
    "mk",
    "ml",
    "mn",
    "mr",
    "ms",
    "mt",
    "nb",
    "nl",
    "nn",
    "pl",
    "pt",
    "ro",
    "ru",
    "si",
    "sk",
    "sl",
    "sq",
    "sr",
    "sv",
    "sw",
    "ta",
    "te",
    "th",
    "tr",
    "uk",
    "ur",
    "uz",
    "vi",
    "zh",
  ],
  R1 = [
    "AF",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BA",
    "BW",
    "BR",
    "BN",
    "BG",
    "BF",
    "BI",
    "CV",
    "KH",
    "CM",
    "CA",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CO",
    "KM",
    "CG",
    "CD",
    "CR",
    "HR",
    "CU",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "SZ",
    "ET",
    "FJ",
    "FI",
    "FR",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GR",
    "GD",
    "GT",
    "GN",
    "GW",
    "GY",
    "HT",
    "HN",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IL",
    "IT",
    "JM",
    "JP",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MR",
    "MU",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NO",
    "OM",
    "PK",
    "PW",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RU",
    "RW",
    "KN",
    "LC",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "SS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UY",
    "UZ",
    "VU",
    "VA",
    "VE",
    "VN",
    "YE",
    "ZM",
    "ZW",
  ],
  j1 = "dateTime attribute is not set",
  L1 = "",
  Xh = "en",
  Jh = "GB",
  O1 = "medium",
  z1 = "none",
  I1 = (s) => (P1.includes(s) ? s : Xh),
  M1 = (s) => (R1.includes(s) ? s : Jh),
  A1 = (s) => {
    if (["full", "long", "medium", "short"].includes(s)) return s;
  },
  D1 = (s) => {
    if (["full", "long", "medium", "short"].includes(s)) return s;
  };
F.forwardRef(
  (
    {
      language: s = Xh,
      country: l = Jh,
      dateStyle: a = O1,
      timeStyle: u = z1,
      datetime: d = j1,
      ...f
    },
    v
  ) => {
    const g = `${I1(s)}-${M1(l)}`,
      P = { dateStyle: A1(a), timeStyle: D1(u) },
      E = d === null ? L1 : d.toString(),
      I = new Date(E),
      M = Number.isNaN(I.getTime()) === !1;
    let V = E;
    if (M)
      try {
        V = new Intl.DateTimeFormat(g, P).format(I);
      } catch {}
    return z.jsx("time", { ref: v, dateTime: E, ...f, children: V });
  }
);
var F1 = F.forwardRef((s, l) => z.jsx("select", { ...s, ref: l }));
F1.displayName = "Select";
var V1 = F.forwardRef((s, l) => z.jsx("option", { ...s, ref: l }));
V1.displayName = "Option";
const Z1 = "",
  B1 = void 0,
  H1 = [],
  W1 = [],
  U1 = () => z.jsx(z.Fragment, {}),
  Q1 = ({}) =>
    z.jsxs(Hh, {
      className: "w-body c1jaw2zx cbipm55 ctniqj4 ctgx88l",
      children: [
        z.jsx(Qh, {
          className: "w-heading",
          children: "Simple Project to test CLI",
        }),
        z.jsx(Wh, {
          className: "w-text cn3rfux",
          children: "Please don't change directly in the fixture",
        }),
        z.jsx(fc, {
          href: "/another-page",
          className: "w-link",
          children: "Test another page link",
        }),
        z.jsx(Cs, {
          src: "/assets/iconly_svg_converted-converted_zMaMiAAutUl8XrITgz7d1.svg",
          width: 14,
          height: 16,
          className: "w-image c161qeci",
        }),
        z.jsx(Cs, {
          src: "https://picsum.photos/id/237/100/100.jpg?blur=4&grayscale",
          className: "w-image",
        }),
      ],
    });
let Ju;
const $1 = (s) => {
    const l = s.data.pageMeta.language || "en",
      a = s.config.Head ?? (() => z.jsx(z.Fragment, {})),
      u = s.Page ?? (() => z.jsx(z.Fragment, {})),
      d = z.jsxs(z.Fragment, {
        children: [
          z.jsxs("head", {
            children: [
              z.jsx("meta", { charSet: "UTF-8" }),
              z.jsx("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1",
              }),
              z.jsx(a, { data: s.data }),
              z.jsx(U1, {}),
            ],
          }),
          z.jsx(u, { data: s.data }),
        ],
      });
    Ju === void 0 && (Ju = Eh(document.documentElement)),
      (document.documentElement.lang = l),
      Ju.render(d);
  },
  G1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, onRenderClient: $1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Y1 = "/assets/",
  wh = "/assets/",
  K1 = (s) =>
    URL.canParse(s.src)
      ? s.src
      : s.format === "raw"
        ? wh + s.src
        : "/.netlify/images?url=" +
          encodeURIComponent(wh + s.src) +
          "&w=" +
          s.width +
          "&q=" +
          s.quality;
export {
  Hh as B,
  Qh as H,
  Q1 as P,
  Ts as R,
  Y1 as a,
  wh as b,
  G1 as c,
  W1 as d,
  B1 as f,
  K1 as i,
  z as j,
  H1 as p,
  Z1 as s,
};
