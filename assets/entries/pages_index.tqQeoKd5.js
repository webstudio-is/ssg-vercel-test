import {
  i as l,
  j as e,
  s as i,
  f as p,
  p as c,
  a as n,
  d as m,
  R as u,
  b as g,
  P as x,
  c as f,
} from "../chunks/chunk-BytN19Ck.js";
const j = ({ data: o }) => {
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
          p,
          c.map((a) =>
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
          m.map((a) =>
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
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, Head: j }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  h = ({ data: o }) => {
    const { system: t, resources: s, url: r } = o;
    return e.jsx(u.Provider, {
      value: { imageLoader: l, assetBaseUrl: n, imageBaseUrl: g, resources: s },
      children: e.jsx(x, { system: t }, r),
    });
  },
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, default: h }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  P = {
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
      valueSerialized: { type: "plus-file", exportValues: f },
    },
    Head: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/index/+Head.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: y },
    },
    Page: {
      type: "standard",
      definedAtData: {
        filePathToShowToUser: "/pages/index/+Page.tsx",
        fileExportPathToShowToUser: [],
      },
      valueSerialized: { type: "plus-file", exportValues: S },
    },
  };
export { P as configValuesSerialized };
