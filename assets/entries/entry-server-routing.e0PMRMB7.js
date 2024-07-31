const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/entries/pages_another-page.C5CyNB4S.js",
      "assets/chunks/chunk-BytN19Ck.js",
      "assets/static/index.CKPgriBt.css",
      "assets/entries/pages_index.tqQeoKd5.js",
    ])
) => i.map((i) => d[i]);
function ye(e) {
  return Array.from(new Set(e));
}
const Oe = "0.4.180",
  q = { projectName: "Vike", projectVersion: Oe },
  te = `_${q.projectName.toLowerCase()}`;
function R(e, t) {
  const n = Le();
  return (n[e] = n[e] || t);
}
function Le() {
  return (globalThis[te] = globalThis[te] || {});
}
const E = new Proxy(
    {},
    {
      get: (e, t) => (n) =>
        t === "code" ? `\`${n}\`` : t === "string" ? `'${n}'` : n,
    }
  ),
  P = R("assertPackageInstances.ts", {
    instances: [],
    alreadyLogged: new Set(),
  }),
  Fe =
    "The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",
  me =
    "Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";
function Ee() {
  {
    const e = ye(P.instances);
    ze(
      e.length <= 1,
      `vike@${E.bold(e[0])} and vike@${E.bold(e[1])} loaded but only one version should be loaded`
    );
  }
  P.checkSingleInstance &&
    P.instances.length > 1 &&
    U(!1, me, { onlyOnce: !0, showStackTrace: !0 });
}
function Ie(e) {
  U(P.isClientRouting !== !0, Fe, { onlyOnce: !0, showStackTrace: !0 }),
    U(P.isClientRouting === void 0, me, { onlyOnce: !0, showStackTrace: !0 }),
    (P.isClientRouting = !1),
    e && (P.checkSingleInstance = !0),
    Ee();
}
function We() {
  P.instances.push(q.projectVersion), Ee();
}
function ze(e, t) {
  if (e) return;
  const n = `[vike][Wrong Usage] ${t}`;
  throw new Error(n);
}
function U(e, t, { onlyOnce: n, showStackTrace: r }) {
  if (e) return;
  const i = `[vike][Warning] ${t}`;
  if (n) {
    const { alreadyLogged: s } = P,
      a = n === !0 ? i : n;
    if (s.has(a)) return;
    s.add(a);
  }
  console.warn(r ? new Error(i) : i);
}
function Ae() {
  return !(
    typeof process > "u" ||
    !process.cwd ||
    !process.versions ||
    typeof process.versions.node > "u" ||
    !process.release ||
    process.release.name !== "node"
  );
}
function W(e, t) {
  const n = new Error(e);
  return Ae() && (n.stack = De(n.stack, t)), n;
}
function De(e, t) {
  if (!e) return e;
  const n = He(e);
  let r = 0;
  return n.filter((s) =>
    s.includes(" (internal/") || s.includes(" (node:internal")
      ? !1
      : r < t && Ve(s)
        ? (r++, !1)
        : !0
  ).join(`
`);
}
function Ve(e) {
  return e.startsWith("    at ");
}
function He(e) {
  return e.split(/\r?\n/);
}
function b(e) {
  return typeof e == "object" && e !== null;
}
const S = R("utils/assert.ts", {
  alreadyLogged: new Set(),
  logger(e, t) {
    t === "info" ? console.log(e) : console.warn(e);
  },
  showStackTraceList: new WeakSet(),
});
We();
const Ue = "[vike]",
  Be = `[vike@${q.projectVersion}]`,
  z = 2;
function o(e, t) {
  var a;
  if (e) return;
  const n = (() => {
    if (!t) return null;
    const c = typeof t == "string" ? t : JSON.stringify(t);
    return E.dim(
      `Debug info (for Vike maintainers; you can ignore this): ${c}`
    );
  })();
  let i = [
    `You stumbled upon a Vike bug. Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,
    n,
  ]
    .filter(Boolean)
    .join(" ");
  (i = D(i)), (i = A(i, "Bug")), (i = V(i, !0));
  const s = W(i, z);
  throw ((a = S.onBeforeLog) == null || a.call(S), s);
}
function y(e, t, { showStackTrace: n } = {}) {
  var i;
  if (e) return;
  (n = n || S.alwaysShowStackTrace),
    (t = D(t)),
    (t = A(t, "Wrong Usage")),
    (t = V(t));
  const r = W(t, z);
  throw (
    (n && S.showStackTraceList.add(r),
    (i = S.onBeforeLog) == null || i.call(S),
    r)
  );
}
function Ne(e) {
  return (e = D(e)), (e = A(e, "Error")), (e = V(e)), W(e, z);
}
function x(e, t, { onlyOnce: n, showStackTrace: r }) {
  var i;
  if (!e) {
    if (
      ((r = r || S.alwaysShowStackTrace),
      (t = D(t)),
      (t = A(t, "Warning")),
      (t = V(t)),
      n)
    ) {
      const { alreadyLogged: s } = S,
        a = n === !0 ? t : n;
      if (s.has(a)) return;
      s.add(a);
    }
    if (((i = S.onBeforeLog) == null || i.call(S), r)) {
      const s = W(t, z);
      S.showStackTraceList.add(s), S.logger(s, "warn");
    } else S.logger(t, "warn");
  }
}
function A(e, t) {
  let n = `[${t}]`;
  const r = t === "Warning" ? "yellow" : "red";
  return (n = E.bold(E[r](n))), `${n}${e}`;
}
function D(e) {
  return e.startsWith("[") ? e : ` ${e}`;
}
function V(e, t = !1) {
  return `${t ? Be : Ue}${e}`;
}
function K() {
  return typeof window < "u" && typeof window.scrollY == "number";
}
const ne = R("utils/assertRouterType.ts", {});
function Ge() {
  Je(ne.isClientRouting !== !0), (ne.isClientRouting = !1);
}
function Je(e) {
  y(
    K(),
    `${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,
    { showStackTrace: !0 }
  ),
    x(
      e,
      "You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",
      { showStackTrace: !0, onlyOnce: !0 }
    );
}
function F(e, t, n) {
  return typeof e == "string" ? re(e.split(""), t, n).join("") : re(e, t, n);
}
function re(e, t, n) {
  const r = [];
  let i = t >= 0 ? t : e.length + t;
  o(i >= 0 && i <= e.length);
  let s = n >= 0 ? n : e.length + n;
  for (
    o(s >= 0 && s <= e.length);
    !(i === s || (i === e.length && (i = 0), i === s));

  ) {
    const a = e[i];
    o(a !== void 0), r.push(a), i++;
  }
  return r;
}
function Ye(e) {
  return (
    ve(e) ||
    e.startsWith("/") ||
    e.startsWith(".") ||
    e.startsWith("?") ||
    e.startsWith("#") ||
    e === ""
  );
}
function Me(e, t) {
  o(Ye(e)), o(t.startsWith("/"));
  const [n, ...r] = e.split("#");
  o(n !== void 0);
  const i = ["", ...r].join("#") || null;
  o(i === null || i.startsWith("#"));
  const s = i === null ? "" : B(i.slice(1)),
    [a, ...c] = n.split("?");
  o(a !== void 0);
  const l = ["", ...c].join("?") || null;
  o(l === null || l.startsWith("?"));
  const u = {},
    g = {};
  Array.from(new URLSearchParams(l || "")).forEach(([w, _]) => {
    (u[w] = _), (g[w] = [...(g.hasOwnProperty(w) ? g[w] : []), _]);
  });
  const { origin: p, pathname: d } = Ke(a, t);
  o(p === null || p === B(p)),
    o(d.startsWith("/")),
    o(p === null || e.startsWith(p));
  const f = a.slice((p || "").length);
  tt(e, p, f, l, i);
  let { pathname: h, hasBaseServer: v } = Ze(d, t);
  return (
    (h = qe(h)),
    o(h.startsWith("/")),
    {
      origin: p,
      pathname: h,
      pathnameOriginal: f,
      hasBaseServer: v,
      search: u,
      searchAll: g,
      searchOriginal: l,
      hash: s,
      hashOriginal: i,
    }
  );
}
function B(e) {
  try {
    return decodeURIComponent(e);
  } catch {}
  try {
    return decodeURI(e);
  } catch {}
  return e;
}
function qe(e) {
  return (
    (e = e.replace(/\s+$/, "")),
    (e = e
      .split("/")
      .map((t) => B(t).split("/").join("%2F"))
      .join("/")),
    e
  );
}
function Ke(e, t) {
  var n;
  o(!e.includes("?") && !e.includes("#"));
  {
    const { origin: r, pathname: i } = ie(e);
    if (r) return { origin: r, pathname: i };
    o(i === e);
  }
  if (e.startsWith("/")) return { origin: null, pathname: e };
  {
    const r =
      typeof window < "u"
        ? (n = window == null ? void 0 : window.document) == null
          ? void 0
          : n.baseURI
        : void 0;
    let i;
    return (
      r ? (i = ie(r.split("?")[0]).pathname) : (i = t),
      { origin: null, pathname: Xe(e, i) }
    );
  }
}
function ie(e) {
  if (ve(e)) {
    const [t, n, r, ...i] = e.split("/"),
      s = [t, n, r].join("/"),
      a = ["", ...i].join("/") || "/";
    return { origin: s, pathname: a };
  } else return o(!rt(e)), { pathname: e, origin: null };
}
function Xe(e, t) {
  const n = t.split("/"),
    r = e.split("/");
  let i = t.endsWith("/");
  e.startsWith(".") && n.pop();
  for (const a in r) {
    const c = r[a];
    (c == "" && a === "0") ||
      (c != "." && (c == ".." ? n.pop() : ((i = !1), n.push(c))));
  }
  let s = n.join("/");
  return (
    i && !s.endsWith("/") && (s += "/"), s.startsWith("/") || (s = "/" + s), s
  );
}
function Qe(e) {
  o(e.startsWith("/")), o(!e.includes("?")), o(!e.includes("#"));
}
function Ze(e, t) {
  Qe(e), o(et(t));
  let n = e;
  if ((o(n.startsWith("/")), o(t.startsWith("/")), t === "/"))
    return { pathname: e, hasBaseServer: !0 };
  let r = t;
  return (
    t.endsWith("/") && n === F(t, 0, -1) && ((r = F(t, 0, -1)), o(n === r)),
    n.startsWith(r)
      ? (o(n.startsWith("/") || n.startsWith("http")),
        o(n.startsWith(r)),
        (n = n.slice(r.length)),
        n.startsWith("/") || (n = "/" + n),
        o(n.startsWith("/")),
        { pathname: n, hasBaseServer: !0 })
      : { pathname: e, hasBaseServer: !1 }
  );
}
function et(e) {
  return e.startsWith("/");
}
function tt(e, t, n, r, i) {
  const s = nt(t, n, r, i);
  o(e === s);
}
function nt(e, t, n, r) {
  return `${e || ""}${t}${n || ""}${r || ""}`;
}
function rt(e) {
  return /^[a-z][a-z0-9\+\-]*:/i.test(e);
}
function ve(e) {
  return /^[a-z][a-z0-9\+\-]*:\/\//i.test(e);
}
function C(e, t) {
  t &&
    (o(!("_isPageContextObject" in t)),
    Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)));
}
function H(e) {
  return e instanceof Function || typeof e == "function";
}
function it(e) {
  return (t, n) => {
    const r = e(t),
      i = e(n);
    if ((o([!0, !1, null].includes(r)), o([!0, !1, null].includes(i)), r === i))
      return 0;
    if (r === !0 || i === !1) return -1;
    if (i === !0 || r === !1) return 1;
    o(!1);
  };
}
function st(e) {
  return it((t) => {
    const n = e(t);
    return n === null ? null : !n;
  });
}
function j(e) {
  return Array.isArray(e);
}
function ot(e) {
  return j(e) && e.every((t) => typeof t == "string");
}
function at(e) {
  return b(e) && Object.values(e).every((t) => typeof t == "string");
}
function m(e, t, n) {
  if (!b(e)) return !1;
  if (!(t in e)) return n === "undefined";
  if (n === void 0) return !0;
  const r = e[t];
  return n === "undefined"
    ? r === void 0
    : n === "array"
      ? j(r)
      : n === "object"
        ? b(r)
        : n === "string[]"
          ? ot(r)
          : n === "string{}"
            ? at(r)
            : n === "function"
              ? H(r)
              : j(n)
                ? typeof r == "string" && n.includes(r)
                : n === "null"
                  ? r === null
                  : n === "true"
                    ? r === !0
                    : n === "false"
                      ? r === !1
                      : typeof r === n;
}
function lt(e, t) {
  return e.toLowerCase() < t.toLowerCase()
    ? -1
    : e.toLowerCase() > t.toLowerCase()
      ? 1
      : 0;
}
const ct = (e) => e != null;
function we(e) {
  const t = (n) => `Not a posix path: ${n}`;
  o(e !== null, t("null")),
    o(typeof e == "string", t(`typeof path === ${JSON.stringify(typeof e)}`)),
    o(e !== "", t("(empty string)")),
    o(e),
    o(!e.includes("\\"), t(e));
}
const ut = ["clientRouting"];
function ft(e) {
  ut.forEach((t) => {
    if ((o(e.fileExports), !(t in e.fileExports))) return;
    const n = `The value of \`${t}\` is only allowed to be \`true\`.`;
    y(
      e.fileExports[t] !== !1,
      `${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`
    ),
      y(
        e.fileExports[t] === !0,
        `${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`
      );
  });
}
const Se = ["render", "clientRouting", "prerender", "doNotPrerender"];
function dt(e, t) {
  y(
    !Se.includes(e),
    `${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`
  );
}
function gt(e) {
  const t = ".page.",
    n = F(e.split(t), 0, -1).join(t);
  return o(!n.includes("\\")), n;
}
function k(e) {
  we(e);
}
function X(e, t) {
  return o(!e.includes("\\")), e.includes("/_error");
}
function ht(e, t) {
  if (t.length > 0) {
    const n = t.find((r) => r.pageId === e);
    return o(n), !!n.isErrorPage;
  } else return X(e);
}
const be = ["js", "ts", "cjs", "cts", "mjs", "mts"],
  pt = ["jsx", "tsx", "cjsx", "ctsx", "mjsx", "mtsx"],
  Pe = ["vue", "svelte", "marko", "md", "mdx"],
  yt = [...be, ...pt, ...Pe];
function $e(e) {
  const t = yt.some((n) => e.endsWith("." + n));
  return mt(e) && o(t), t;
}
function mt(e) {
  const t = /\.(c|m)?(j|t)s$/.test(e),
    n = be.some((r) => e.endsWith("." + r));
  return o(t === n), t;
}
function Et(e) {
  return Pe.some((t) => e.endsWith("." + t));
}
const vt = [".page", ".page.server", ".page.route", ".page.client", ".css"];
function wt(e) {
  if ((we(e), e.endsWith(".css"))) return ".css";
  o($e(e), e);
  const n = e.split("/").slice(-1)[0].split("."),
    r = n.slice(-3)[0],
    i = n.slice(-2)[0];
  if (i === "page") return ".page";
  if ((o(r === "page", e), i === "server")) return ".page.server";
  if (i === "client") return ".page.client";
  if (i === "route") return ".page.route";
  o(!1, e);
}
function Te(e) {
  const t = (s) =>
      i.pageId === s ||
      (i.isDefaultPageFile && (se(i.filePath) || St(s, i.filePath))),
    n = wt(e),
    i = {
      filePath: e,
      fileType: n,
      isEnv: (s) => {
        if ((o(n !== ".page.route"), s === "CLIENT_ONLY"))
          return n === ".page.client" || n === ".css";
        if (s === "SERVER_ONLY") return n === ".page.server";
        if (s === "CLIENT_AND_SERVER") return n === ".page";
        o(!1);
      },
      isRelevant: t,
      isDefaultPageFile: N(e),
      isRendererPageFile: n !== ".css" && N(e) && se(e),
      isErrorPageFile: X(e),
      pageId: gt(e),
    };
  return i;
}
function N(e) {
  return k(e), X(e) ? !1 : e.includes("/_default");
}
function se(e) {
  return k(e), e.includes("/renderer/");
}
function St(e, t) {
  k(e), k(t), o(!e.endsWith("/")), o(!t.endsWith("/")), o(N(t));
  const n = F(t.split("/"), 0, -1)
    .filter((r) => r !== "_default")
    .join("/");
  return e.startsWith(n);
}
function bt(e, t) {
  if (!e) return null;
  let [n, ...r] = e;
  if (!n || (r.length === 0 && ["*", "default", t].includes(n))) return null;
  o(n !== "*");
  let i = "",
    s = "";
  return (
    n === "default"
      ? (i = "export default")
      : ((i = "export"), (r = [n, ...r])),
    r.forEach((c) => {
      (i = `${i} { ${c}`), (s = ` }${s}`);
    }),
    i + s
  );
}
function Pt(e, t, n) {
  return `${G(e, t)} at ${I(n, t)}`;
}
function $t(e, t, n) {
  return n ? `${G(e, t)} at ${I(n, t)}` : `${G(e, t)} internally`;
}
function G(e, t) {
  return `${e} ${E.cyan(t)} defined`;
}
function I(e, t) {
  let n;
  return (
    j(e) ? (n = e) : (n = [e]),
    o(n.length >= 1),
    n
      .map((i) => {
        const { filePathToShowToUser: s, fileExportPathToShowToUser: a } = i;
        let c = s;
        const l = bt(a, t);
        return l && (c = `${c} > ${E.cyan(l)}`), c;
      })
      .join(" / ")
  );
}
const Tt = [
  {
    is: (e) => e === void 0,
    match: (e) => e === "!undefined",
    serialize: () => "!undefined",
    deserialize: () => {},
  },
  {
    is: (e) => e === 1 / 0,
    match: (e) => e === "!Infinity",
    serialize: () => "!Infinity",
    deserialize: () => 1 / 0,
  },
  {
    is: (e) => e === -1 / 0,
    match: (e) => e === "!-Infinity",
    serialize: () => "!-Infinity",
    deserialize: () => -1 / 0,
  },
  {
    is: (e) => typeof e == "number" && isNaN(e),
    match: (e) => e === "!NaN",
    serialize: () => "!NaN",
    deserialize: () => NaN,
  },
  {
    is: (e) => e instanceof Date,
    match: (e) => e.startsWith("!Date:"),
    serialize: (e) => "!Date:" + e.toISOString(),
    deserialize: (e) => new Date(e.slice(6)),
  },
  {
    is: (e) => typeof e == "bigint",
    match: (e) => e.startsWith("!BigInt:"),
    serialize: (e) => "!BigInt:" + e.toString(),
    deserialize: (e) => {
      if (typeof BigInt > "u")
        throw new Error(
          "Your JavaScript environement does not support BigInt. Consider adding a polyfill."
        );
      return BigInt(e.slice(8));
    },
  },
  {
    is: (e) => e instanceof RegExp,
    match: (e) => e.startsWith("!RegExp:"),
    serialize: (e) => "!RegExp:" + e.toString(),
    deserialize: (e) => {
      e = e.slice(8);
      const t = e.match(/\/(.*)\/(.*)?/),
        n = t[1],
        r = t[2];
      return new RegExp(n, r);
    },
  },
  {
    is: (e) => e instanceof Map,
    match: (e) => e.startsWith("!Map:"),
    serialize: (e, t) => "!Map:" + t(Array.from(e.entries())),
    deserialize: (e, t) => new Map(t(e.slice(5))),
  },
  {
    is: (e) => e instanceof Set,
    match: (e) => e.startsWith("!Set:"),
    serialize: (e, t) => "!Set:" + t(Array.from(e.values())),
    deserialize: (e, t) => new Set(t(e.slice(5))),
  },
  {
    is: (e) => typeof e == "string" && e.startsWith("!"),
    match: (e) => e.startsWith("!"),
    serialize: (e) => "!" + e,
    deserialize: (e) => e.slice(1),
  },
];
function xe(e) {
  const t = JSON.parse(e);
  return Q(t);
}
function Q(e) {
  return typeof e == "string"
    ? xt(e)
    : (typeof e == "object" &&
        e !== null &&
        Object.entries(e).forEach(([t, n]) => {
          e[t] = Q(n);
        }),
      e);
}
function xt(e) {
  for (const { match: t, deserialize: n } of Tt) if (t(e)) return n(e, xe);
  return e;
}
const Ct = ["$$registrations", "_rerender_only"],
  Rt = [".md", ".mdx"];
function _t(e, t, n) {
  const r = Object.keys(e).filter((u) => !Ct.includes(u)),
    i = (u) => u === "default" || u === n,
    s = r.filter(i),
    a = r.filter((u) => !i(u));
  if (s.length === 1 && a.length === 0) return;
  const c = E.code("export default"),
    l = E.code(`export { ${n} }`);
  s.length === 0 && y(!1, `${t} should have a ${l} or ${c}`),
    s.length === 2 &&
      x(!1, `${t} is ambiguous: remove ${c} or ${l}`, { onlyOnce: !0 }),
    o(s.length === 1),
    o(a.length > 0),
    Rt.some((u) => t.endsWith(u)) ||
      a.forEach((u) => {
        x(!1, `${t} unexpected ${E.cyan(`export { ${u} }`)}`, { onlyOnce: !0 });
      });
}
function J(e) {
  return Ot(e);
}
function jt(e, t) {
  const n = e.map((i) => {
      const s = J(i.configValuesSerialized),
        {
          pageId: a,
          isErrorPage: c,
          routeFilesystem: l,
          loadConfigValuesAll: u,
        } = i;
      return (
        kt(s),
        {
          pageId: a,
          isErrorPage: c,
          routeFilesystem: l,
          configValues: s,
          loadConfigValuesAll: u,
        }
      );
    }),
    r = { configValues: {} };
  {
    const i = J(t.configValuesSerialized);
    Object.assign(r.configValues, i);
  }
  return { pageConfigs: n, pageConfigGlobal: r };
}
function kt(e) {
  const t = "route",
    n = e[t];
  if (!n) return;
  const { value: r, definedAtData: i } = n,
    s = typeof r;
  o(i);
  const a = Pt("Config", t, i);
  y(
    s === "string" || H(r),
    `${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`
  );
}
function Ot(e) {
  const t = {};
  return (
    Object.entries(e).forEach(([r, i]) => {
      let s;
      if (i.type === "cumulative") {
        const { valueSerialized: a, ...c } = i;
        s = {
          value: a.map((u, g) => {
            const { value: p, sideExports: d } = oe(u, r, () => {
              const f = i.definedAtData[g];
              return o(f), f;
            });
            return n(d), p;
          }),
          ...c,
        };
      } else {
        const { valueSerialized: a, ...c } = i,
          { value: l, sideExports: u } = oe(
            a,
            r,
            () => (o(i.type !== "computed"), i.definedAtData)
          );
        n(u), (s = { value: l, ...c });
      }
      t[r] = s;
    }),
    t
  );
  function n(r) {
    r.forEach((i) => {
      const { configName: s, configValue: a } = i;
      t[s] || (t[s] = a);
    });
  }
}
function oe(e, t, n) {
  if (e.type === "js-serialized") {
    let { value: r } = e;
    return (r = Q(r)), { value: r, sideExports: [] };
  }
  if (e.type === "pointer-import") {
    const { value: r } = e;
    return { value: r, sideExports: [] };
  }
  if (e.type === "plus-file") {
    const r = n(),
      { exportValues: i } = e;
    _t(i, r.filePathToShowToUser, t);
    let s,
      a = !1;
    const c = [];
    return (
      Object.entries(i).forEach(([l, u]) => {
        l !== "default" && l !== t
          ? c.push({
              configName: l,
              configValue: {
                type: "standard",
                value: u,
                definedAtData: {
                  filePathToShowToUser: r.filePathToShowToUser,
                  fileExportPathToShowToUser: [l],
                },
              },
            })
          : ((s = u), o(!a), (a = !0));
      }),
      o(a),
      { value: s, sideExports: c }
    );
  }
  o(!1);
}
function Lt(e) {
  o(m(e, "pageFilesLazy", "object")),
    o(m(e, "pageFilesEager", "object")),
    o(m(e, "pageFilesExportNamesLazy", "object")),
    o(m(e, "pageFilesExportNamesEager", "object")),
    o(m(e.pageFilesLazy, ".page")),
    o(m(e.pageFilesLazy, ".page.client") || m(e.pageFilesLazy, ".page.server")),
    o(m(e, "pageFilesList", "string[]")),
    o(m(e, "pageConfigsSerialized")),
    o(m(e, "pageConfigGlobalSerialized"));
  const { pageConfigsSerialized: t, pageConfigGlobalSerialized: n } = e;
  Ft(t), It(n);
  const { pageConfigs: r, pageConfigGlobal: i } = jt(t, n),
    s = {};
  O(e.pageFilesLazy).forEach(({ filePath: c, pageFile: l, globValue: u }) => {
    l = s[c] = s[c] ?? l;
    const g = u;
    ae(g),
      (l.loadFile = async () => {
        "fileExports" in l || ((l.fileExports = await g()), ft(l));
      });
  }),
    O(e.pageFilesExportNamesLazy).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        ae(g),
          (l.loadExportNames = async () => {
            if (!("exportNames" in l)) {
              const p = await g();
              o(m(p, "exportNames", "string[]"), l.filePath),
                (l.exportNames = p.exportNames);
            }
          });
      }
    ),
    O(e.pageFilesEager).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        o(b(g)), (l.fileExports = g);
      }
    ),
    O(e.pageFilesExportNamesEager).forEach(
      ({ filePath: c, pageFile: l, globValue: u }) => {
        l = s[c] = s[c] ?? l;
        const g = u;
        o(b(g)),
          o(m(g, "exportNames", "string[]"), l.filePath),
          (l.exportNames = g.exportNames);
      }
    ),
    e.pageFilesList.forEach((c) => {
      s[c] = s[c] ?? Te(c);
    });
  const a = Object.values(s);
  return (
    a.forEach(({ filePath: c }) => {
      o(!c.includes("\\"));
    }),
    { pageFiles: a, pageConfigs: r, pageConfigGlobal: i }
  );
}
function O(e) {
  const t = [];
  return (
    Object.entries(e).forEach(([n, r]) => {
      o(vt.includes(n)),
        o(b(r)),
        Object.entries(r).forEach(([i, s]) => {
          const a = Te(i);
          o(a.fileType === n),
            t.push({ filePath: i, pageFile: a, globValue: s });
        });
    }),
    t
  );
}
function ae(e) {
  o(H(e));
}
function Ft(e) {
  o(j(e)),
    e.forEach((t) => {
      o(b(t)),
        o(m(t, "pageId", "string")),
        o(m(t, "routeFilesystem")),
        o(m(t, "configValuesSerialized"));
    });
}
function It(e) {
  o(m(e, "configValuesSerialized"));
}
const T = R("setPageFiles.ts", {});
function Wt(e) {
  const { pageFiles: t, pageConfigs: n, pageConfigGlobal: r } = Lt(e);
  (T.pageFilesAll = t), (T.pageConfigs = n), (T.pageConfigGlobal = r);
}
async function zt(e, t) {
  e
    ? (o(!T.pageFilesGetter), o(t === void 0))
    : (o(T.pageFilesGetter),
      o(typeof t == "boolean"),
      (!T.pageFilesAll || !t) && (await T.pageFilesGetter()));
  const { pageFilesAll: n, pageConfigs: r, pageConfigGlobal: i } = T;
  o(n && r && i);
  const s = At(n, r);
  return {
    pageFilesAll: n,
    allPageIds: s,
    pageConfigs: r,
    pageConfigGlobal: i,
  };
}
function At(e, t) {
  const n = e
      .filter(({ isDefaultPageFile: s }) => !s)
      .map(({ pageId: s }) => s),
    r = ye(n),
    i = t.map((s) => s.pageId);
  return [...r, ...i];
}
function Dt(e, t) {
  return Vt(e, t, !0);
}
function Vt(e, t, n) {
  const r = n ? "CLIENT_ONLY" : "SERVER_ONLY",
    i = e
      .filter((f) => f.isRelevant(t) && f.fileType !== ".page.route")
      .sort(Ht(n, t)),
    s = (f) => {
      const h = i.filter(
        (w) => w.pageId === t && w.isEnv(f ? "CLIENT_AND_SERVER" : r)
      );
      y(
        h.length <= 1,
        `Merge the following files into a single file: ${h.map((w) => w.filePath).join(" ")}`
      );
      const v = h[0];
      return o(v === void 0 || !v.isDefaultPageFile), v;
    },
    a = s(!1),
    c = s(!0),
    l = (f) =>
      i.filter(
        (h) => h.isRendererPageFile && h.isEnv(f ? "CLIENT_AND_SERVER" : r)
      )[0],
    u = l(!1),
    g = l(!0),
    p = i.filter(
      (f) =>
        f.isDefaultPageFile &&
        !f.isRendererPageFile &&
        (f.isEnv(r) || f.isEnv("CLIENT_AND_SERVER"))
    );
  return [a, c, ...p, u, g].filter(ct);
}
function Ht(e, t) {
  const n = e ? "CLIENT_ONLY" : "SERVER_ONLY",
    r = -1,
    i = 1,
    s = 0;
  return (a, c) => {
    if (!a.isDefaultPageFile && c.isDefaultPageFile) return r;
    if (!c.isDefaultPageFile && a.isDefaultPageFile) return i;
    {
      const l = a.isRendererPageFile,
        u = c.isRendererPageFile;
      if (!l && u) return r;
      if (!u && l) return i;
      o(l === u);
    }
    {
      const l = le(t, a.filePath),
        u = le(t, c.filePath);
      if (l < u) return r;
      if (u < l) return i;
      o(l === u);
    }
    {
      if (a.isEnv(n) && c.isEnv("CLIENT_AND_SERVER")) return r;
      if (c.isEnv(n) && a.isEnv("CLIENT_AND_SERVER")) return i;
    }
    return s;
  };
}
function le(e, t) {
  k(e), k(t);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++);
  const r = e.slice(n),
    i = t.slice(n),
    s = r.split("/").length,
    a = i.split("/").length;
  return s + a;
}
function Ut(e) {
  if (!e || j(e)) return null;
  const { filePathToShowToUser: t } = e;
  return o(t), t;
}
function Bt(e, t) {
  const n = {},
    r = {},
    i = {};
  e.forEach((d) => {
    Nt(d).forEach(
      ({ exportName: h, exportValue: v, isFromDefaultExport: w }) => {
        o(h !== "default"),
          (i[h] = i[h] ?? []),
          i[h].push({
            exportValue: v,
            exportSource: `${d.filePath} > ${w ? `\`export default { ${h} }\`` : `\`export { ${h} }\``}`,
            filePath: d.filePath,
            _filePath: d.filePath,
            _fileType: d.fileType,
            _isFromDefaultExport: w,
          });
      }
    );
  });
  const s = {},
    a = {},
    c = (d, f) => {
      (s[f] = d), a[f] ?? (a[f] = []), a[f].push(d);
    },
    l = { configsStandard: {}, configsCumulative: {}, configsComputed: {} };
  t &&
    Object.entries(t.configValues).forEach(([d, f]) => {
      const { value: h } = f,
        v = Ut(f.definedAtData),
        w = $t("Config", d, f.definedAtData);
      if (
        ((r[d] = r[d] ?? h),
        (n[d] = n[d] ?? []),
        o(n[d].length === 0),
        n[d].push({
          configValue: h,
          configDefinedAt: w,
          configDefinedByFile: v,
        }),
        f.type === "standard")
      ) {
        const $ = {
          type: "configsStandard",
          value: f.value,
          definedAt: I(f.definedAtData, d),
        };
        c($, d), (l.configsStandard[d] = $);
      }
      if (f.type === "cumulative") {
        const $ = {
          type: "configsCumulative",
          values: f.value.map((_e, je) => {
            const ee = f.definedAtData[je];
            o(ee);
            const ke = I(ee, d);
            return { value: _e, definedAt: ke };
          }),
        };
        c($, d), (l.configsCumulative[d] = $);
      }
      if (f.type === "computed") {
        const $ = { type: "configsComputed", value: f.value };
        c($, d), (l.configsComputed[d] = $);
      }
      const _ = d;
      (i[_] = i[_] ?? []),
        i[_].push({
          exportValue: h,
          exportSource: w,
          filePath: v,
          _filePath: v,
          _fileType: null,
          _isFromDefaultExport: null,
        });
    });
  const u = Gt(),
    g = {};
  return (
    Object.entries(i).forEach(([d, f]) => {
      f.forEach(({ exportValue: h, _fileType: v, _isFromDefaultExport: w }) => {
        (g[d] = g[d] ?? h), v === ".page" && !w && (d in u || (u[d] = h));
      });
    }),
    o(!("default" in g)),
    o(!("default" in i)),
    {
      from: l,
      source: s,
      sources: a,
      config: r,
      configEntries: n,
      exports: g,
      exportsAll: i,
      pageExports: u,
    }
  );
}
function Nt(e) {
  const { filePath: t, fileExports: n } = e;
  o(n), o($e(t));
  const r = [];
  return (
    Object.entries(n)
      .sort(st(([i]) => i === "default"))
      .forEach(([i, s]) => {
        let a = i === "default";
        if (a)
          if (Et(t)) i = "Page";
          else {
            y(
              b(s),
              `The ${E.cyan("export default")} of ${t} should be an object.`
            ),
              Object.entries(s).forEach(([c, l]) => {
                dt(c, t),
                  r.push({
                    exportName: c,
                    exportValue: l,
                    isFromDefaultExport: a,
                  });
              });
            return;
          }
        r.push({ exportName: i, exportValue: s, isFromDefaultExport: a });
      }),
    r.forEach(({ exportName: i, isFromDefaultExport: s }) => {
      o(!(s && Se.includes(i)));
    }),
    r
  );
}
function Gt() {
  return new Proxy(
    {},
    {
      get(...e) {
        return (
          K() ||
            x(
              !1,
              "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",
              { onlyOnce: !0, showStackTrace: !0 }
            ),
          Reflect.get(...e)
        );
      },
    }
  );
}
const Jt = "modulepreload",
  Yt = function (e) {
    return "/" + e;
  },
  ce = {},
  ue = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        c =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      i = Promise.all(
        n.map((l) => {
          if (((l = Yt(l)), l in ce)) return;
          ce[l] = !0;
          const u = l.endsWith(".css"),
            g = u ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let f = s.length - 1; f >= 0; f--) {
              const h = s[f];
              if (h.href === l && (!u || h.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${g}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : Jt),
            u || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = l),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, h) => {
              d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
          throw s;
      });
  },
  Z = {},
  Mt = {},
  qt = {},
  Kt = {},
  Xt = [],
  Ce = {},
  Qt = [
    {
      pageId: "/pages/another-page",
      isErrorPage: void 0,
      routeFilesystem: {
        routeString: "/another-page",
        definedBy: "/pages/another-page/",
      },
      loadConfigValuesAll: () =>
        ue(
          () => import("./pages_another-page.C5CyNB4S.js"),
          __vite__mapDeps([0, 1, 2])
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
    {
      pageId: "/pages/index",
      isErrorPage: void 0,
      routeFilesystem: { routeString: "/", definedBy: "/pages/index/" },
      loadConfigValuesAll: () =>
        ue(
          () => import("./pages_index.tqQeoKd5.js"),
          __vite__mapDeps([3, 1, 2])
        ),
      configValuesSerialized: {
        clientEntryLoaded: {
          type: "computed",
          definedAtData: null,
          valueSerialized: { type: "js-serialized", value: !0 },
        },
      },
    },
  ],
  Zt = { configValuesSerialized: {} },
  en = Object.assign({}),
  tn = { ...en };
Z[".page"] = tn;
const nn = Object.assign({}),
  rn = { ...nn };
Z[".page.client"] = rn;
const sn = Object.assign({}),
  on = { ...sn };
Ce[".page.server"] = on;
const an = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      neverLoaded: Ce,
      pageConfigGlobalSerialized: Zt,
      pageConfigsSerialized: Qt,
      pageFilesEager: Mt,
      pageFilesExportNamesEager: Kt,
      pageFilesExportNamesLazy: qt,
      pageFilesLazy: Z,
      pageFilesList: Xt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
Wt(an);
function ln() {
  o(K());
}
function cn() {
  ln();
}
function fe(e) {
  const t = e / 1e3;
  if (t < 120) {
    const n = de(t);
    return `${n} second${ge(n)}`;
  }
  {
    const n = t / 60,
      r = de(n);
    return `${r} minute${ge(r)}`;
  }
}
function de(e) {
  let t = e.toFixed(1);
  return t.endsWith(".0") && (t = t.slice(0, -2)), t;
}
function ge(e) {
  return e === "1" ? "" : "s";
}
const Y = R("utils/executeHook.ts", {
  userHookErrors: new WeakMap(),
  pageContext: null,
});
function un(e, t, n) {
  const {
    hookName: r,
    hookFilePath: i,
    hookTimeout: { error: s, warning: a },
  } = t;
  let c, l;
  const u = new Promise((f, h) => {
      (c = (v) => {
        g(), f(v);
      }),
        (l = (v) => {
          g(), h(v);
        });
    }),
    g = () => {
      p && clearTimeout(p), d && clearTimeout(d);
    },
    p =
      he(a) &&
      setTimeout(() => {
        x(
          !1,
          `The ${r}() hook defined by ${i} is slow: it's taking more than ${fe(a)} (https://vike.dev/hooksTimeout)`,
          { onlyOnce: !1 }
        );
      }, a),
    d =
      he(s) &&
      setTimeout(() => {
        const f = Ne(
          `The ${r}() hook defined by ${i} timed out: it didn't finish after ${fe(s)} (https://vike.dev/hooksTimeout)`
        );
        l(f);
      }, s);
  return (
    (async () => {
      try {
        fn(n);
        const f = await e();
        c(f);
      } catch (f) {
        b(f) && Y.userHookErrors.set(f, { hookName: r, hookFilePath: i }), l(f);
      }
    })(),
    u
  );
}
function he(e) {
  return !!e && e !== 1 / 0;
}
function fn(e) {
  (Y.pageContext = e),
    Promise.resolve().then(() => {
      Y.pageContext = null;
    });
}
function Re(e) {
  const t = window.location.href,
    { searchOriginal: n, hashOriginal: r, pathname: i } = Me(t, "/");
  let s;
  return (
    e != null && e.withoutHash
      ? (s = `${i}${n || ""}`)
      : (s = `${i}${n || ""}${r || ""}`),
    o(s.startsWith("/")),
    s
  );
}
function dn(e) {
  return typeof e == "string" && gn(e) ? `.${e}` : `[${JSON.stringify(e)}]`;
}
function gn(e) {
  return /^[a-z0-9\$_]+$/i.test(e);
}
cn();
function hn() {
  const e = "vike_pageContext",
    t = document.getElementById(e);
  y(
    t,
    `Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`
  );
  const n = t.textContent;
  o(n);
  const r = xe(n);
  return o(m(r, "_pageId", "string")), o(m(r, "routeParams", "string{}")), r;
}
function pn(e, t) {
  const n = e.filter((i) => i.pageId === t);
  return o(n.length <= 1), n[0] ?? null;
}
async function yn(e, t) {
  if ("isAllLoaded" in e && !t) return e;
  const n = await e.loadConfigValuesAll(),
    r = J(n.configValuesSerialized);
  return Object.assign(e.configValues, r), C(e, { isAllLoaded: !0 }), e;
}
const mn = "__whileFetchingAssets";
async function En(e, t, n) {
  const r = Dt(t, e),
    i = pn(n, e);
  let s;
  const a = !1;
  try {
    s = (
      await Promise.all([
        i && yn(i, a),
        ...r.map((g) => {
          var p;
          return (p = g.loadFile) == null ? void 0 : p.call(g);
        }),
      ])
    )[0];
  } catch (u) {
    throw (vn(u) && Object.assign(u, { [mn]: !0 }), u);
  }
  const c = Bt(r, s),
    l = {};
  return C(l, c), C(l, { _pageFilesLoaded: r }), l;
}
function vn(e) {
  return e instanceof Error
    ? [
        "Failed to fetch dynamically imported module",
        "error loading dynamically imported module",
        "Importing a module script failed",
        "error resolving module specifier",
        "failed to resolve module",
      ].some((n) => e.message.toLowerCase().includes(n.toLowerCase()))
    : !1;
}
const pe = Re({ withoutHash: !0 });
async function wn() {
  const e = hn();
  return (
    C(e, {
      isHydration: !0,
      isBackwardNavigation: null,
      _hasPageContextFromServer: !0,
      _hasPageContextFromClient: !1,
    }),
    C(e, await bn(e._pageId)),
    Sn(),
    e
  );
}
function Sn() {
  const e = Re({ withoutHash: !0 });
  y(
    pe === e,
    `The URL was manipulated before the hydration finished ('${pe}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`
  );
}
async function bn(e) {
  const t = {},
    { pageFilesAll: n, pageConfigs: r } = await zt(!0);
  return (
    C(t, { _pageFilesAll: n, _pageConfigs: r }),
    C(t, await En(e, t._pageFilesAll, t._pageConfigs)),
    n
      .filter((i) => i.fileType !== ".page.server")
      .forEach((i) => {
        var s;
        x(
          !((s = i.fileExports) != null && s.onBeforeRender),
          `export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,
          { onlyOnce: !0 }
        );
      }),
    t
  );
}
const Pn = R("getHook.ts", { isPrerendering: !1 });
function M(e, t) {
  if (!(t in e.exports)) return null;
  const { hooksTimeout: n } = e.config,
    r = xn(n, t),
    i = e.exports[t],
    s = e.exportsAll[t][0];
  if ((o(s.exportValue === i), i === null)) return null;
  const a = s.filePath;
  return (
    o(a),
    o(!a.endsWith(" ")),
    Tn(i, { hookName: t, hookFilePath: a }),
    { hookFn: i, hookName: t, hookFilePath: a, hookTimeout: r }
  );
}
function $n(e, t) {
  M(e, t);
}
function Tn(e, { hookName: t, hookFilePath: n }) {
  o(t && n),
    o(!t.endsWith(")")),
    y(H(e), `Hook ${t}() defined by ${n} should be a function`);
}
function xn(e, t) {
  const n = Cn(e);
  if (n === !1) return { error: !1, warning: !1 };
  const r = n[t],
    i = Rn(t);
  return (
    (r == null ? void 0 : r.error) !== void 0 && (i.error = r.error),
    (r == null ? void 0 : r.warning) !== void 0 && (i.warning = r.warning),
    i
  );
}
function Cn(e) {
  if (e === void 0) return {};
  if (e === !1) return !1;
  y(
    b(e),
    `Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`
  );
  const t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      if (r === !1) {
        t[n] = { error: !1, warning: !1 };
        return;
      }
      y(
        b(r),
        `Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`
      );
      const [i, s] = ["error", "warning"].map((a) => {
        const c = r[a];
        if (c === void 0 || c === !1) return c;
        const l = `Setting ${E.cyan(`hooksTimeout.${n}.${a}`)} should be`;
        return (
          y(typeof c == "number", `${l} ${E.cyan("false")} or a number`),
          y(c > 0, `${l} a positive number`),
          c
        );
      });
      t[n] = { error: i, warning: s };
    }),
    t
  );
}
function Rn(e) {
  return e === "onBeforeRoute"
    ? { error: 5 * 1e3, warning: 1 * 1e3 }
    : Pn.isPrerendering
      ? { error: 2 * 60 * 1e3, warning: 30 * 1e3 }
      : (o(!e.toLowerCase().includes("prerender")),
        { error: 30 * 1e3, warning: 4 * 1e3 });
}
function _n(e) {
  let t = Object.getOwnPropertyDescriptors(e);
  for (const n of Object.keys(e)) delete e[n];
  (t = Object.fromEntries(Object.entries(t).sort(([n], [r]) => lt(n, r)))),
    Object.defineProperties(e, t);
}
function jn(e) {
  kn(e), On(e);
}
function kn(e) {
  ht(e._pageId, e._pageConfigs) && o(m(e, "is404", "boolean"));
}
function On(e) {
  if (e.is404 === void 0 || e.is404 === null) return;
  const t = e.pageProps || {};
  if (!b(t)) {
    x(!1, "pageContext.pageProps should be an object", {
      showStackTrace: !0,
      onlyOnce: !0,
    });
    return;
  }
  (t.is404 = t.is404 || e.is404), (e.pageProps = t);
}
const Ln = "not-serializable",
  L = R("getPageContextProxyForUser.ts", {});
function Fn(e) {
  return (
    o([!0, !1].includes(e._hasPageContextFromServer)),
    o([!0, !1].includes(e._hasPageContextFromClient)),
    new Proxy(e, {
      get(t, n) {
        const r = e[n],
          i = dn(n);
        return (
          y(
            r !== Ln,
            `Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`
          ),
          In(e, n, i),
          r
        );
      },
    })
  );
}
function In(e, t, n) {
  if (An(t) || t in e || zn(t) || !e._hasPageContextFromServer) return;
  const r = `pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;
  e._hasPageContextFromClient
    ? x(!1, r, { onlyOnce: !1, showStackTrace: !0 })
    : y(!1, r);
}
const Wn = ["then", "toJSON"];
function zn(e) {
  return !!(
    Wn.includes(e) ||
    typeof e == "symbol" ||
    typeof e != "string" ||
    e.startsWith("__v_")
  );
}
function An(e) {
  return L.prev === e || L.prev === "__v_raw"
    ? !0
    : ((L.prev = e),
      window.setTimeout(() => {
        L.prev = void 0;
      }, 0),
      !1);
}
function Dn(e, t) {
  if (t) {
    const i = e;
    o([!0, !1].includes(i.isHydration)),
      o([!0, !1, null].includes(i.isBackwardNavigation));
  } else {
    const i = e;
    o(i.isHydration === !0), o(i.isBackwardNavigation === null);
  }
  o("config" in e),
    o("configEntries" in e),
    o("exports" in e),
    o("exportsAll" in e),
    o("pageExports" in e),
    o(b(e.pageExports));
  const n = e.exports.Page;
  C(e, { Page: n }), Vn(e), _n(e);
  const r = Fn(e);
  return jn(e), r;
}
function Vn(e) {
  Object.entries(e).forEach(([t, n]) => {
    delete e[t], (e[t] = n);
  });
}
async function Hn(e, t) {
  const n = Dn(e, t);
  let r = null,
    i;
  (r = M(e, "render")), (i = "render");
  {
    const c = M(e, "onRenderClient");
    c && ((r = c), (i = "onRenderClient"));
  }
  if (!r) {
    const c = Un(e);
    if ((o(c), e._pageConfigs.length > 0))
      y(
        !1,
        `No onRenderClient() hook defined for URL '${c}', but it's needed, see https://vike.dev/onRenderClient`
      );
    else {
      const l = e._pageFilesLoaded.filter((g) => g.fileType === ".page.client");
      let u;
      l.length === 0
        ? (u = "No file `*.page.client.*` found for URL " + c)
        : (u =
            "One of the following files should export a render() hook: " +
            l.map((g) => g.filePath).join(" ")),
        y(!1, u);
    }
  }
  o(r);
  const s = r.hookFn;
  o(i);
  const a = await un(() => s(n), r, e);
  y(
    a === void 0,
    `The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`
  );
}
function Un(e) {
  let t;
  try {
    t = e.urlPathname ?? e.urlOriginal;
  } catch {}
  return (t = t ?? window.location.href), t;
}
Ge();
const Bn = !0;
Ie(Bn);
Nn();
async function Nn() {
  var t, n;
  const e = await wn();
  await Hn(e, !1),
    $n(e, "onHydrationEnd"),
    await ((n = (t = e.exports).onHydrationEnd) == null
      ? void 0
      : n.call(t, e));
}
