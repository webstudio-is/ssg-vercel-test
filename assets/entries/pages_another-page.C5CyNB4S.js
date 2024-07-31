import {
  j as e,
  B as p,
  H as c,
  i as l,
  a as n,
  R as m,
  b as u,
  c as g,
} from "../chunks/chunk-BytN19Ck.js";
const i = "",
  x = void 0,
  f = [],
  h = [],
  j = ({}) =>
    e.jsx(p, {
      className: "w-body",
      children: e.jsx(c, { className: "w-heading", children: "Another page" }),
    }),
  y = ({ data: o }) => {
    const { pageMeta: t } = o,
      { origin: s } = new URL(o.url);
    let r = t.socialImageUrl;
    return (
      t.socialImageAssetName &&
        (r = `${s}${l({ src: t.socialImageAssetName, format: "raw" })}`),
      e.jsxs(e.Fragment, {
        children: [
          o.url && e.jsx("meta", { property: "og:url", content: o.url }),
          e.jsx("title", { children: t.title }),
          e.jsx("meta", { property: "og:title", content: t.title }),
          t.description &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("meta", { name: "description", content: t.description }),
                e.jsx("meta", {
                  property: "og:description",
                  content: t.description,
                }),
              ],
            }),
          e.jsx("meta", { property: "og:type", content: "website" }),
          i,
          r &&
            e.jsx("meta", { property: "og:image", content: t.socialImageUrl }),
          i,
          t.excludePageFromSearch &&
            e.jsx("meta", { name: "robots", content: "noindex, nofollow" }),
          t.custom.map(({ property: a, content: d }) =>
            e.jsx("meta", { property: a, content: d }, a)
          ),
          x,
          f.map((a) =>
            e.jsx(
              "link",
              {
                rel: "preload",
                href: `${n}${a.name}`,
                as: "font",
                crossOrigin: "anonymous",
              },
              a.id
            )
          ),
          h.map((a) =>
            e.jsx(
              "link",
              { rel: "preload", href: `${n}${a.name}`, as: "image" },
              a.id
            )
          ),
        ],
      })
    );
  },
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: y }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  v = ({ data: o }) => {
    const { system: t, resources: s, url: r } = o;
    return e.jsx(m.Provider, {
      value: { imageLoader: l, assetBaseUrl: n, imageBaseUrl: u, resources: s },
      children: e.jsx(j, { system: t }, r),
    });
  },
  P = Object.freeze(
    Object.defineProperty({ __proto__: null, default: v }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  w = {
    onBeforeRenderEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: null },
    },
    dataEnv: {
      type: "computed",
      definedAtData: null,
      valueSerialized: { type: "js-serialized", value: { server: !0 } },
    },
    onRenderClient: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/renderer/+onRenderClient.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: g },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/another-page/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: S },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/another-page/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: P },
    },
  };
export { w as configValuesSerialized };
