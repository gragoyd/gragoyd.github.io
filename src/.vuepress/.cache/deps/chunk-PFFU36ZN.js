import {
  M
} from "./chunk-32XCHDCL.js";
import {
  Or
} from "./chunk-H47PLY5I.js";
import {
  S
} from "./chunk-EPCXXMGT.js";
import {
  Ba,
  Ct,
  Di,
  Et,
  Px,
  Qf,
  Xe,
  b
} from "./chunk-4QVIDK45.js";

// node_modules/.pnpm/mermaid@10.2.0/node_modules/mermaid/dist/edges-9aecf713.js
var st = (r, t, e, n) => {
  t.forEach((a) => {
    yt[a](r, e, n);
  });
};
var it = (r, t, e) => {
  b.trace("Making markers for ", e), r.append("defs").append("marker").attr("id", t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
};
var nt = (r, t) => {
  r.append("defs").append("marker").attr("id", t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
var lt = (r, t) => {
  r.append("defs").append("marker").attr("id", t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
var ct = (r, t) => {
  r.append("defs").append("marker").attr("id", t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
var ht = (r, t) => {
  r.append("defs").append("marker").attr("id", t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "white").attr("cx", 6).attr("cy", 7).attr("r", 6);
};
var ot = (r, t) => {
  r.append("marker").attr("id", t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 10).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
var ft = (r, t) => {
  r.append("marker").attr("id", t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
var dt = (r, t) => {
  r.append("marker").attr("id", t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), r.append("marker").attr("id", t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
};
var pt = (r, t) => {
  r.append("defs").append("marker").attr("id", t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
var yt = {
  extension: it,
  composition: nt,
  aggregation: lt,
  dependency: ct,
  lollipop: ht,
  point: ot,
  circle: ft,
  cross: dt,
  barb: pt
};
var Kt = st;
function bt(r, t) {
  t && r.attr("style", t);
}
function xt(r) {
  const t = Ct(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), e = t.append("xhtml:div"), n = r.label, a = r.isNode ? "nodeLabel" : "edgeLabel";
  return e.html(
    '<span class="' + a + '" ' + (r.labelStyle ? 'style="' + r.labelStyle + '"' : "") + ">" + n + "</span>"
  ), bt(e, r.labelStyle), e.style("display", "inline-block"), e.style("white-space", "nowrap"), e.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
var ut = (r, t, e, n) => {
  let a = r || "";
  if (typeof a == "object" && (a = a[0]), Ba(Et().flowchart.htmlLabels)) {
    a = a.replace(/\\n|\n/g, "<br />"), b.info("vertexText" + a);
    const s = {
      isNode: n,
      label: Px(a).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (l) => `<i class='${l.replace(":", " ")}'></i>`
      ),
      labelStyle: t.replace("fill:", "color:")
    };
    return xt(s);
  } else {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "text");
    s.setAttribute("style", t.replace("color:", "fill:"));
    let i = [];
    typeof a == "string" ? i = a.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a) ? i = a : i = [];
    for (const l of i) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), c.setAttribute("dy", "1em"), c.setAttribute("x", "0"), e ? c.setAttribute("class", "title-row") : c.setAttribute("class", "row"), c.textContent = l.trim(), s.appendChild(c);
    }
    return s;
  }
};
var T = ut;
var S2 = async (r, t, e, n) => {
  let a;
  const s = t.useHtmlLabels || Ba(Et().flowchart.htmlLabels);
  e ? a = e : a = "node default";
  const i = r.insert("g").attr("class", a).attr("id", t.domId || t.id), l = i.insert("g").attr("class", "label").attr("style", t.labelStyle);
  let c;
  t.labelText === void 0 ? c = "" : c = typeof t.labelText == "string" ? t.labelText : t.labelText[0];
  const o = l.node();
  let h;
  t.labelType === "markdown" ? h = Or(l, Xe(Px(c), Et()), {
    useHtmlLabels: s,
    width: t.width || Et().flowchart.wrappingWidth,
    classes: "markdown-node-label"
  }) : h = o.appendChild(
    T(
      Xe(Px(c), Et()),
      t.labelStyle,
      false,
      n
    )
  );
  let f = h.getBBox();
  const b2 = t.padding / 2;
  if (Ba(Et().flowchart.htmlLabels)) {
    const d = h.children[0], p = Ct(h), y = d.getElementsByTagName("img");
    if (y) {
      const u = c.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...y].map(
          (g) => new Promise(
            (R) => g.addEventListener("load", function() {
              if (g.style.display = "flex", g.style.flexDirection = "column", u) {
                const I = Et().fontSize ? Et().fontSize : window.getComputedStyle(document.body).fontSize, E = 5;
                g.style.width = parseInt(I, 10) * E + "px";
              } else
                g.style.width = "100%";
              R(g);
            })
          )
        )
      );
    }
    f = d.getBoundingClientRect(), p.attr("width", f.width), p.attr("height", f.height);
  }
  return s ? l.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")") : l.attr("transform", "translate(0, " + -f.height / 2 + ")"), t.centerLabel && l.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), l.insert("rect", ":first-child"), { shapeSvg: i, bbox: f, halfPadding: b2, label: l };
};
var k = (r, t) => {
  const e = t.node().getBBox();
  r.width = e.width, r.height = e.height;
};
function _(r, t, e, n) {
  return r.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(a) {
      return a.x + "," + a.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + e / 2 + ")");
}
function gt(r, t) {
  return r.intersect(t);
}
function tt(r, t, e, n) {
  var a = r.x, s = r.y, i = a - n.x, l = s - n.y, c = Math.sqrt(t * t * l * l + e * e * i * i), o = Math.abs(t * e * i / c);
  n.x < a && (o = -o);
  var h = Math.abs(t * e * l / c);
  return n.y < s && (h = -h), { x: a + o, y: s + h };
}
function wt(r, t, e) {
  return tt(r, t, t, e);
}
function mt(r, t, e, n) {
  var a, s, i, l, c, o, h, f, b2, d, p, y, u, g, R;
  if (a = t.y - r.y, i = r.x - t.x, c = t.x * r.y - r.x * t.y, b2 = a * e.x + i * e.y + c, d = a * n.x + i * n.y + c, !(b2 !== 0 && d !== 0 && V(b2, d)) && (s = n.y - e.y, l = e.x - n.x, o = n.x * e.y - e.x * n.y, h = s * r.x + l * r.y + o, f = s * t.x + l * t.y + o, !(h !== 0 && f !== 0 && V(h, f)) && (p = a * l - s * i, p !== 0)))
    return y = Math.abs(p / 2), u = i * o - l * c, g = u < 0 ? (u - y) / p : (u + y) / p, u = s * c - a * o, R = u < 0 ? (u - y) / p : (u + y) / p, { x: g, y: R };
}
function V(r, t) {
  return r * t > 0;
}
function kt(r, t, e) {
  var n = r.x, a = r.y, s = [], i = Number.POSITIVE_INFINITY, l = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(p) {
    i = Math.min(i, p.x), l = Math.min(l, p.y);
  }) : (i = Math.min(i, t.x), l = Math.min(l, t.y));
  for (var c = n - r.width / 2 - i, o = a - r.height / 2 - l, h = 0; h < t.length; h++) {
    var f = t[h], b2 = t[h < t.length - 1 ? h + 1 : 0], d = mt(
      r,
      e,
      { x: c + f.x, y: o + f.y },
      { x: c + b2.x, y: o + b2.y }
    );
    d && s.push(d);
  }
  return s.length ? (s.length > 1 && s.sort(function(p, y) {
    var u = p.x - e.x, g = p.y - e.y, R = Math.sqrt(u * u + g * g), I = y.x - e.x, E = y.y - e.y, X = Math.sqrt(I * I + E * E);
    return R < X ? -1 : R === X ? 0 : 1;
  }), s[0]) : r;
}
var Lt = (r, t) => {
  var e = r.x, n = r.y, a = t.x - e, s = t.y - n, i = r.width / 2, l = r.height / 2, c, o;
  return Math.abs(s) * i > Math.abs(a) * l ? (s < 0 && (l = -l), c = s === 0 ? 0 : l * a / s, o = l) : (a < 0 && (i = -i), c = i, o = a === 0 ? 0 : i * s / a), { x: e + c, y: n + o };
};
var vt = Lt;
var m = {
  node: gt,
  circle: wt,
  ellipse: tt,
  polygon: kt,
  rect: vt
};
var St = async (r, t) => {
  t.useHtmlLabels || Et().flowchart.htmlLabels || (t.centerLabel = true);
  const { shapeSvg: n, bbox: a, halfPadding: s } = await S2(
    r,
    t,
    "node " + t.classes,
    true
  );
  b.info("Classes = ", t.classes);
  const i = n.insert("rect", ":first-child");
  return i.attr("rx", t.rx).attr("ry", t.ry).attr("x", -a.width / 2 - s).attr("y", -a.height / 2 - s).attr("width", a.width + t.padding).attr("height", a.height + t.padding), k(t, i), t.intersect = function(l) {
    return m.rect(t, l);
  }, n;
};
var Et2 = St;
var q = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = a + s, l = [
    { x: i / 2, y: 0 },
    { x: i, y: -i / 2 },
    { x: i / 2, y: -i },
    { x: 0, y: -i / 2 }
  ];
  b.info("Question main (Circle)");
  const c = _(e, i, i, l);
  return c.attr("style", t.style), k(t, c), t.intersect = function(o) {
    return b.warn("Intersect called"), m.polygon(t, l, o);
  }, e;
};
var Bt = (r, t) => {
  const e = r.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = 28, a = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -n / 2 },
    { x: -n / 2, y: 0 }
  ];
  return e.insert("polygon", ":first-child").attr(
    "points",
    a.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t.width = 28, t.height = 28, t.intersect = function(i) {
    return m.circle(t, 14, i);
  }, e;
};
var Mt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = 4, s = n.height + t.padding, i = s / a, l = n.width + 2 * i + t.padding, c = [
    { x: i, y: 0 },
    { x: l - i, y: 0 },
    { x: l, y: -s / 2 },
    { x: l - i, y: -s },
    { x: i, y: -s },
    { x: 0, y: -s / 2 }
  ], o = _(e, l, s, c);
  return o.attr("style", t.style), k(t, o), t.intersect = function(h) {
    return m.polygon(t, c, h);
  }, e;
};
var Ct2 = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -s / 2, y: 0 },
    { x: a, y: 0 },
    { x: a, y: -s },
    { x: -s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  return _(e, a, s, i).attr("style", t.style), t.width = a + s, t.height = s, t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var Tt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -2 * s / 6, y: 0 },
    { x: a - s / 6, y: 0 },
    { x: a + 2 * s / 6, y: -s },
    { x: s / 6, y: -s }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var Rt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 2 * s / 6, y: 0 },
    { x: a + s / 6, y: 0 },
    { x: a - 2 * s / 6, y: -s },
    { x: -s / 6, y: -s }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var It = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: -2 * s / 6, y: 0 },
    { x: a + 2 * s / 6, y: 0 },
    { x: a - s / 6, y: -s },
    { x: s / 6, y: -s }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var Ht = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: s / 6, y: 0 },
    { x: a - s / 6, y: 0 },
    { x: a + 2 * s / 6, y: -s },
    { x: -2 * s / 6, y: -s }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var Nt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 0, y: 0 },
    { x: a + s / 2, y: 0 },
    { x: a, y: -s / 2 },
    { x: a + s / 2, y: -s },
    { x: 0, y: -s }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var _t = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = a / 2, i = s / (2.5 + a / 50), l = n.height + i + t.padding, c = "M 0," + i + " a " + s + "," + i + " 0,0,0 " + a + " 0 a " + s + "," + i + " 0,0,0 " + -a + " 0 l 0," + l + " a " + s + "," + i + " 0,0,0 " + a + " 0 l 0," + -l, o = e.attr("label-offset-y", i).insert("path", ":first-child").attr("style", t.style).attr("d", c).attr("transform", "translate(" + -a / 2 + "," + -(l / 2 + i) + ")");
  return k(t, o), t.intersect = function(h) {
    const f = m.rect(t, h), b2 = f.x - t.x;
    if (s != 0 && (Math.abs(b2) < t.width / 2 || Math.abs(b2) == t.width / 2 && Math.abs(f.y - t.y) > t.height / 2 - i)) {
      let d = i * i * (1 - b2 * b2 / (s * s));
      d != 0 && (d = Math.sqrt(d)), d = i - d, h.y - t.y > 0 && (d = -d), f.y += d;
    }
    return f;
  }, e;
};
var $t = async (r, t) => {
  const { shapeSvg: e, bbox: n, halfPadding: a } = await S2(
    r,
    t,
    "node " + t.classes,
    true
  ), s = e.insert("rect", ":first-child"), i = n.width + t.padding, l = n.height + t.padding;
  if (s.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", -n.width / 2 - a).attr("y", -n.height / 2 - a).attr("width", i).attr("height", l), t.props) {
    const c = new Set(Object.keys(t.props));
    t.props.borders && (rt(s, t.props.borders, i, l), c.delete("borders")), c.forEach((o) => {
      b.warn(`Unknown node property ${o}`);
    });
  }
  return k(t, s), t.intersect = function(c) {
    return m.rect(t, c);
  }, e;
};
var Wt = async (r, t) => {
  const { shapeSvg: e } = await S2(r, t, "label", true);
  b.trace("Classes = ", t.classes);
  const n = e.insert("rect", ":first-child"), a = 0, s = 0;
  if (n.attr("width", a).attr("height", s), e.attr("class", "label edgeLabel"), t.props) {
    const i = new Set(Object.keys(t.props));
    t.props.borders && (rt(n, t.props.borders, a, s), i.delete("borders")), i.forEach((l) => {
      b.warn(`Unknown node property ${l}`);
    });
  }
  return k(t, n), t.intersect = function(i) {
    return m.rect(t, i);
  }, e;
};
function rt(r, t, e, n) {
  const a = [], s = (l) => {
    a.push(l, 0);
  }, i = (l) => {
    a.push(0, l);
  };
  t.includes("t") ? (b.debug("add top border"), s(e)) : i(e), t.includes("r") ? (b.debug("add right border"), s(n)) : i(n), t.includes("b") ? (b.debug("add bottom border"), s(e)) : i(e), t.includes("l") ? (b.debug("add left border"), s(n)) : i(n), r.attr("stroke-dasharray", a.join(" "));
}
var Xt = (r, t) => {
  let e;
  t.classes ? e = "node " + t.classes : e = "node default";
  const n = r.insert("g").attr("class", e).attr("id", t.domId || t.id), a = n.insert("rect", ":first-child"), s = n.insert("line"), i = n.insert("g").attr("class", "label"), l = t.labelText.flat ? t.labelText.flat() : t.labelText;
  let c = "";
  typeof l == "object" ? c = l[0] : c = l, b.info("Label text abc79", c, l, typeof l == "object");
  const o = i.node().appendChild(T(c, t.labelStyle, true, true));
  let h = { width: 0, height: 0 };
  if (Ba(Et().flowchart.htmlLabels)) {
    const y = o.children[0], u = Ct(o);
    h = y.getBoundingClientRect(), u.attr("width", h.width), u.attr("height", h.height);
  }
  b.info("Text 2", l);
  const f = l.slice(1, l.length);
  let b2 = o.getBBox();
  const d = i.node().appendChild(
    T(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)
  );
  if (Ba(Et().flowchart.htmlLabels)) {
    const y = d.children[0], u = Ct(d);
    h = y.getBoundingClientRect(), u.attr("width", h.width), u.attr("height", h.height);
  }
  const p = t.padding / 2;
  return Ct(d).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width > b2.width ? 0 : (b2.width - h.width) / 2) + ", " + (b2.height + p + 5) + ")"
  ), Ct(o).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width < b2.width ? 0 : -(b2.width - h.width) / 2) + ", 0)"
  ), h = i.node().getBBox(), i.attr(
    "transform",
    "translate(" + -h.width / 2 + ", " + (-h.height / 2 - p + 3) + ")"
  ), a.attr("class", "outer title-state").attr("x", -h.width / 2 - p).attr("y", -h.height / 2 - p).attr("width", h.width + t.padding).attr("height", h.height + t.padding), s.attr("class", "divider").attr("x1", -h.width / 2 - p).attr("x2", h.width / 2 + p).attr("y1", -h.height / 2 - p + b2.height + p).attr("y2", -h.height / 2 - p + b2.height + p), k(t, a), t.intersect = function(y) {
    return m.rect(t, y);
  }, n;
};
var Yt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.height + t.padding, s = n.width + a / 4 + t.padding, i = e.insert("rect", ":first-child").attr("style", t.style).attr("rx", a / 2).attr("ry", a / 2).attr("x", -s / 2).attr("y", -a / 2).attr("width", s).attr("height", a);
  return k(t, i), t.intersect = function(l) {
    return m.rect(t, l);
  }, e;
};
var Dt = async (r, t) => {
  const { shapeSvg: e, bbox: n, halfPadding: a } = await S2(r, t, void 0, true), s = e.insert("circle", ":first-child");
  return s.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + a).attr("width", n.width + t.padding).attr("height", n.height + t.padding), b.info("Circle main"), k(t, s), t.intersect = function(i) {
    return b.info("Circle intersect", t, n.width / 2 + a, i), m.circle(t, n.width / 2 + a, i);
  }, e;
};
var Ut = async (r, t) => {
  const { shapeSvg: e, bbox: n, halfPadding: a } = await S2(r, t, void 0, true), s = 5, i = e.insert("g", ":first-child"), l = i.insert("circle"), c = i.insert("circle");
  return l.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + a + s).attr("width", n.width + t.padding + s * 2).attr("height", n.height + t.padding + s * 2), c.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + a).attr("width", n.width + t.padding).attr("height", n.height + t.padding), b.info("DoubleCircle main"), k(t, l), t.intersect = function(o) {
    return b.info("DoubleCircle intersect", t, n.width / 2 + a + s, o), m.circle(t, n.width / 2 + a + s, o);
  }, e;
};
var jt = async (r, t) => {
  const { shapeSvg: e, bbox: n } = await S2(r, t, void 0, true), a = n.width + t.padding, s = n.height + t.padding, i = [
    { x: 0, y: 0 },
    { x: a, y: 0 },
    { x: a, y: -s },
    { x: 0, y: -s },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: a + 8, y: 0 },
    { x: a + 8, y: -s },
    { x: -8, y: -s },
    { x: -8, y: 0 }
  ], l = _(e, a, s, i);
  return l.attr("style", t.style), k(t, l), t.intersect = function(c) {
    return m.polygon(t, i, c);
  }, e;
};
var At = (r, t) => {
  const e = r.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = e.insert("circle", ":first-child");
  return n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), k(t, n), t.intersect = function(a) {
    return m.circle(t, 7, a);
  }, e;
};
var J = (r, t, e) => {
  const n = r.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a = 70, s = 10;
  e === "LR" && (a = 10, s = 70);
  const i = n.append("rect").attr("x", -1 * a / 2).attr("y", -1 * s / 2).attr("width", a).attr("height", s).attr("class", "fork-join");
  return k(t, i), t.height = t.height + t.padding / 2, t.width = t.width + t.padding / 2, t.intersect = function(l) {
    return m.rect(t, l);
  }, n;
};
var Ot = (r, t) => {
  const e = r.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = e.insert("circle", ":first-child"), a = e.insert("circle", ":first-child");
  return a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), n.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), k(t, a), t.intersect = function(s) {
    return m.circle(t, 7, s);
  }, e;
};
var zt = (r, t) => {
  const e = t.padding / 2, n = 4, a = 8;
  let s;
  t.classes ? s = "node " + t.classes : s = "node default";
  const i = r.insert("g").attr("class", s).attr("id", t.domId || t.id), l = i.insert("rect", ":first-child"), c = i.insert("line"), o = i.insert("line");
  let h = 0, f = n;
  const b2 = i.insert("g").attr("class", "label");
  let d = 0;
  const p = t.classData.annotations && t.classData.annotations[0], y = t.classData.annotations[0] ? "«" + t.classData.annotations[0] + "»" : "", u = b2.node().appendChild(T(y, t.labelStyle, true, true));
  let g = u.getBBox();
  if (Ba(Et().flowchart.htmlLabels)) {
    const B = u.children[0], M2 = Ct(u);
    g = B.getBoundingClientRect(), M2.attr("width", g.width), M2.attr("height", g.height);
  }
  t.classData.annotations[0] && (f += g.height + n, h += g.width);
  let R = t.classData.label;
  t.classData.type !== void 0 && t.classData.type !== "" && (Et().flowchart.htmlLabels ? R += "&lt;" + t.classData.type + "&gt;" : R += "<" + t.classData.type + ">");
  const I = b2.node().appendChild(T(R, t.labelStyle, true, true));
  Ct(I).attr("class", "classTitle");
  let E = I.getBBox();
  if (Ba(Et().flowchart.htmlLabels)) {
    const B = I.children[0], M2 = Ct(I);
    E = B.getBoundingClientRect(), M2.attr("width", E.width), M2.attr("height", E.height);
  }
  f += E.height + n, E.width > h && (h = E.width);
  const X = [];
  t.classData.members.forEach((B) => {
    const M2 = M(B);
    let $ = M2.displayText;
    Et().flowchart.htmlLabels && ($ = $.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const N = b2.node().appendChild(
      T(
        $,
        M2.cssStyle ? M2.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let C = N.getBBox();
    if (Ba(Et().flowchart.htmlLabels)) {
      const A = N.children[0], Y = Ct(N);
      C = A.getBoundingClientRect(), Y.attr("width", C.width), Y.attr("height", C.height);
    }
    C.width > h && (h = C.width), f += C.height + n, X.push(N);
  }), f += a;
  const z = [];
  if (t.classData.methods.forEach((B) => {
    const M2 = M(B);
    let $ = M2.displayText;
    Et().flowchart.htmlLabels && ($ = $.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const N = b2.node().appendChild(
      T(
        $,
        M2.cssStyle ? M2.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let C = N.getBBox();
    if (Ba(Et().flowchart.htmlLabels)) {
      const A = N.children[0], Y = Ct(N);
      C = A.getBoundingClientRect(), Y.attr("width", C.width), Y.attr("height", C.height);
    }
    C.width > h && (h = C.width), f += C.height + n, z.push(N);
  }), f += a, p) {
    let B = (h - g.width) / 2;
    Ct(u).attr(
      "transform",
      "translate( " + (-1 * h / 2 + B) + ", " + -1 * f / 2 + ")"
    ), d = g.height + n;
  }
  let at = (h - E.width) / 2;
  return Ct(I).attr(
    "transform",
    "translate( " + (-1 * h / 2 + at) + ", " + (-1 * f / 2 + d) + ")"
  ), d += E.height + n, c.attr("class", "divider").attr("x1", -h / 2 - e).attr("x2", h / 2 + e).attr("y1", -f / 2 - e + a + d).attr("y2", -f / 2 - e + a + d), d += a, X.forEach((B) => {
    Ct(B).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * f / 2 + d + a / 2) + ")"
    ), d += E.height + n;
  }), d += a, o.attr("class", "divider").attr("x1", -h / 2 - e).attr("x2", h / 2 + e).attr("y1", -f / 2 - e + a + d).attr("y2", -f / 2 - e + a + d), d += a, z.forEach((B) => {
    Ct(B).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * f / 2 + d) + ")"
    ), d += E.height + n;
  }), l.attr("class", "outer title-state").attr("x", -h / 2 - e).attr("y", -(f / 2) - e).attr("width", h + t.padding).attr("height", f + t.padding), k(t, l), t.intersect = function(B) {
    return m.rect(t, B);
  }, i;
};
var K = {
  rhombus: q,
  question: q,
  rect: $t,
  labelRect: Wt,
  rectWithTitle: Xt,
  choice: Bt,
  circle: Dt,
  doublecircle: Ut,
  stadium: Yt,
  hexagon: Mt,
  rect_left_inv_arrow: Ct2,
  lean_right: Tt,
  lean_left: Rt,
  trapezoid: It,
  inv_trapezoid: Ht,
  rect_right_inv_arrow: Nt,
  cylinder: _t,
  start: At,
  end: Ot,
  note: Et2,
  subroutine: jt,
  fork: J,
  join: J,
  class_box: zt
};
var W = {};
var Gt = async (r, t, e) => {
  let n, a;
  if (t.link) {
    let s;
    Et().securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), n = r.insert("svg:a").attr("xlink:href", t.link).attr("target", s), a = await K[t.shape](n, t, e);
  } else
    a = await K[t.shape](r, t, e), n = a;
  return t.tooltip && a.attr("title", t.tooltip), t.class && a.attr("class", "node default " + t.class), W[t.id] = n, t.haveCallback && W[t.id].attr("class", W[t.id].attr("class") + " clickable"), n;
};
var Pt = (r, t) => {
  W[t.id] = r;
};
var tr = () => {
  W = {};
};
var rr = (r) => {
  const t = W[r.id];
  b.trace(
    "Transforming node",
    r.diff,
    r,
    "translate(" + (r.x - r.width / 2 - 5) + ", " + r.width / 2 + ")"
  );
  const e = 8, n = r.diff || 0;
  return r.clusterNode ? t.attr(
    "transform",
    "translate(" + (r.x + n - r.width / 2) + ", " + (r.y - r.height / 2 - e) + ")"
  ) : t.attr("transform", "translate(" + r.x + ", " + r.y + ")"), n;
};
var j = {};
var L = {};
var ar = () => {
  j = {}, L = {};
};
var er = (r, t) => {
  const e = Ba(Et().flowchart.htmlLabels), n = t.labelType === "markdown" ? Or(r, t.label, {
    style: t.labelStyle,
    useHtmlLabels: e,
    addSvgBackground: true
  }) : T(t.label, t.labelStyle);
  b.info("abc82", t, t.labelType);
  const a = r.insert("g").attr("class", "edgeLabel"), s = a.insert("g").attr("class", "label");
  s.node().appendChild(n);
  let i = n.getBBox();
  if (e) {
    const c = n.children[0], o = Ct(n);
    i = c.getBoundingClientRect(), o.attr("width", i.width), o.attr("height", i.height);
  }
  s.attr("transform", "translate(" + -i.width / 2 + ", " + -i.height / 2 + ")"), j[t.id] = a, t.width = i.width, t.height = i.height;
  let l;
  if (t.startLabelLeft) {
    const c = T(t.startLabelLeft, t.labelStyle), o = r.insert("g").attr("class", "edgeTerminals"), h = o.insert("g").attr("class", "inner");
    l = h.node().appendChild(c);
    const f = c.getBBox();
    h.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), L[t.id] || (L[t.id] = {}), L[t.id].startLeft = o, U(l, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const c = T(t.startLabelRight, t.labelStyle), o = r.insert("g").attr("class", "edgeTerminals"), h = o.insert("g").attr("class", "inner");
    l = o.node().appendChild(c), h.node().appendChild(c);
    const f = c.getBBox();
    h.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), L[t.id] || (L[t.id] = {}), L[t.id].startRight = o, U(l, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const c = T(t.endLabelLeft, t.labelStyle), o = r.insert("g").attr("class", "edgeTerminals"), h = o.insert("g").attr("class", "inner");
    l = h.node().appendChild(c);
    const f = c.getBBox();
    h.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), o.node().appendChild(c), L[t.id] || (L[t.id] = {}), L[t.id].endLeft = o, U(l, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const c = T(t.endLabelRight, t.labelStyle), o = r.insert("g").attr("class", "edgeTerminals"), h = o.insert("g").attr("class", "inner");
    l = h.node().appendChild(c);
    const f = c.getBBox();
    h.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), o.node().appendChild(c), L[t.id] || (L[t.id] = {}), L[t.id].endRight = o, U(l, t.endLabelRight);
  }
  return n;
};
function U(r, t) {
  Et().flowchart.htmlLabels && r && (r.style.width = t.length * 9 + "px", r.style.height = "12px");
}
var sr = (r, t) => {
  b.info("Moving label abc78 ", r.id, r.label, j[r.id]);
  let e = t.updatedPath ? t.updatedPath : t.originalPath;
  if (r.label) {
    const n = j[r.id];
    let a = r.x, s = r.y;
    if (e) {
      const i = Di.calcLabelPosition(e);
      b.info(
        "Moving label " + r.label + " from (",
        a,
        ",",
        s,
        ") to (",
        i.x,
        ",",
        i.y,
        ") abc78"
      ), t.updatedPath && (a = i.x, s = i.y);
    }
    n.attr("transform", "translate(" + a + ", " + s + ")");
  }
  if (r.startLabelLeft) {
    const n = L[r.id].startLeft;
    let a = r.x, s = r.y;
    if (e) {
      const i = Di.calcTerminalLabelPosition(r.arrowTypeStart ? 10 : 0, "start_left", e);
      a = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + a + ", " + s + ")");
  }
  if (r.startLabelRight) {
    const n = L[r.id].startRight;
    let a = r.x, s = r.y;
    if (e) {
      const i = Di.calcTerminalLabelPosition(
        r.arrowTypeStart ? 10 : 0,
        "start_right",
        e
      );
      a = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + a + ", " + s + ")");
  }
  if (r.endLabelLeft) {
    const n = L[r.id].endLeft;
    let a = r.x, s = r.y;
    if (e) {
      const i = Di.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_left", e);
      a = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + a + ", " + s + ")");
  }
  if (r.endLabelRight) {
    const n = L[r.id].endRight;
    let a = r.x, s = r.y;
    if (e) {
      const i = Di.calcTerminalLabelPosition(r.arrowTypeEnd ? 10 : 0, "end_right", e);
      a = i.x, s = i.y;
    }
    n.attr("transform", "translate(" + a + ", " + s + ")");
  }
};
var Zt = (r, t) => {
  const e = r.x, n = r.y, a = Math.abs(t.x - e), s = Math.abs(t.y - n), i = r.width / 2, l = r.height / 2;
  return a >= i || s >= l;
};
var Ft = (r, t, e) => {
  b.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(e)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);
  const n = r.x, a = r.y, s = Math.abs(n - e.x), i = r.width / 2;
  let l = e.x < t.x ? i - s : i + s;
  const c = r.height / 2, o = Math.abs(t.y - e.y), h = Math.abs(t.x - e.x);
  if (Math.abs(a - t.y) * i > Math.abs(n - t.x) * c) {
    let f = e.y < t.y ? t.y - c - a : a - c - t.y;
    l = h * f / o;
    const b2 = {
      x: e.x < t.x ? e.x + l : e.x - h + l,
      y: e.y < t.y ? e.y + o - f : e.y - o + f
    };
    return l === 0 && (b2.x = t.x, b2.y = t.y), h === 0 && (b2.x = t.x), o === 0 && (b2.y = t.y), b.warn(`abc89 topp/bott calc, Q ${o}, q ${f}, R ${h}, r ${l}`, b2), b2;
  } else {
    e.x < t.x ? l = t.x - i - n : l = n - i - t.x;
    let f = o * l / h, b2 = e.x < t.x ? e.x + h - l : e.x - h + l, d = e.y < t.y ? e.y + f : e.y - f;
    return b.warn(`sides calc abc89, Q ${o}, q ${f}, R ${h}, r ${l}`, { _x: b2, _y: d }), l === 0 && (b2 = t.x, d = t.y), h === 0 && (b2 = t.x), o === 0 && (d = t.y), { x: b2, y: d };
  }
};
var G = (r, t) => {
  b.warn("abc88 cutPathAtIntersect", r, t);
  let e = [], n = r[0], a = false;
  return r.forEach((s) => {
    if (b.info("abc88 checking point", s, t), !Zt(t, s) && !a) {
      const i = Ft(t, n, s);
      b.warn("abc88 inside", s, n, i), b.warn("abc88 intersection", i);
      let l = false;
      e.forEach((c) => {
        l = l || c.x === i.x && c.y === i.y;
      }), e.some((c) => c.x === i.x && c.y === i.y) ? b.warn("abc88 no intersect", i, e) : e.push(i), a = true;
    } else
      b.warn("abc88 outside", s, n), n = s, a || e.push(s);
  }), b.warn("abc88 returning points", e), e;
};
var ir = function(r, t, e, n, a, s) {
  let i = e.points, l = false;
  const c = s.node(t.v);
  var o = s.node(t.w);
  b.info("abc88 InsertEdge: ", e), o.intersect && c.intersect && (i = i.slice(1, e.points.length - 1), i.unshift(c.intersect(i[0])), b.info(
    "Last point",
    i[i.length - 1],
    o,
    o.intersect(i[i.length - 1])
  ), i.push(o.intersect(i[i.length - 1]))), e.toCluster && (b.info("to cluster abc88", n[e.toCluster]), i = G(e.points, n[e.toCluster].node), l = true), e.fromCluster && (b.info("from cluster abc88", n[e.fromCluster]), i = G(i.reverse(), n[e.fromCluster].node).reverse(), l = true);
  const h = i.filter((g) => !Number.isNaN(g.y));
  let f;
  a === "graph" || a === "flowchart" ? f = e.curve || Qf : f = Qf;
  const b2 = S().x(function(g) {
    return g.x;
  }).y(function(g) {
    return g.y;
  }).curve(f);
  let d;
  switch (e.thickness) {
    case "normal":
      d = "edge-thickness-normal";
      break;
    case "thick":
      d = "edge-thickness-thick";
      break;
    case "invisible":
      d = "edge-thickness-thick";
      break;
    default:
      d = "";
  }
  switch (e.pattern) {
    case "solid":
      d += " edge-pattern-solid";
      break;
    case "dotted":
      d += " edge-pattern-dotted";
      break;
    case "dashed":
      d += " edge-pattern-dashed";
      break;
  }
  const p = r.append("path").attr("d", b2(h)).attr("id", e.id).attr("class", " " + d + (e.classes ? " " + e.classes : "")).attr("style", e.style);
  let y = "";
  switch ((Et().flowchart.arrowMarkerAbsolute || Et().state.arrowMarkerAbsolute) && (y = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, y = y.replace(/\(/g, "\\("), y = y.replace(/\)/g, "\\)")), b.info("arrowTypeStart", e.arrowTypeStart), b.info("arrowTypeEnd", e.arrowTypeEnd), e.arrowTypeStart) {
    case "arrow_cross":
      p.attr("marker-start", "url(" + y + "#" + a + "-crossStart)");
      break;
    case "arrow_point":
      p.attr("marker-start", "url(" + y + "#" + a + "-pointStart)");
      break;
    case "arrow_barb":
      p.attr("marker-start", "url(" + y + "#" + a + "-barbStart)");
      break;
    case "arrow_circle":
      p.attr("marker-start", "url(" + y + "#" + a + "-circleStart)");
      break;
    case "aggregation":
      p.attr("marker-start", "url(" + y + "#" + a + "-aggregationStart)");
      break;
    case "extension":
      p.attr("marker-start", "url(" + y + "#" + a + "-extensionStart)");
      break;
    case "composition":
      p.attr("marker-start", "url(" + y + "#" + a + "-compositionStart)");
      break;
    case "dependency":
      p.attr("marker-start", "url(" + y + "#" + a + "-dependencyStart)");
      break;
    case "lollipop":
      p.attr("marker-start", "url(" + y + "#" + a + "-lollipopStart)");
      break;
  }
  switch (e.arrowTypeEnd) {
    case "arrow_cross":
      p.attr("marker-end", "url(" + y + "#" + a + "-crossEnd)");
      break;
    case "arrow_point":
      p.attr("marker-end", "url(" + y + "#" + a + "-pointEnd)");
      break;
    case "arrow_barb":
      p.attr("marker-end", "url(" + y + "#" + a + "-barbEnd)");
      break;
    case "arrow_circle":
      p.attr("marker-end", "url(" + y + "#" + a + "-circleEnd)");
      break;
    case "aggregation":
      p.attr("marker-end", "url(" + y + "#" + a + "-aggregationEnd)");
      break;
    case "extension":
      p.attr("marker-end", "url(" + y + "#" + a + "-extensionEnd)");
      break;
    case "composition":
      p.attr("marker-end", "url(" + y + "#" + a + "-compositionEnd)");
      break;
    case "dependency":
      p.attr("marker-end", "url(" + y + "#" + a + "-dependencyEnd)");
      break;
    case "lollipop":
      p.attr("marker-end", "url(" + y + "#" + a + "-lollipopEnd)");
      break;
  }
  let u = {};
  return l && (u.updatedPath = i), u.originalPath = e.points, u;
};

export {
  Kt,
  T,
  S2 as S,
  k,
  vt,
  Gt,
  Pt,
  tr,
  rr,
  ar,
  er,
  sr,
  ir
};
//# sourceMappingURL=chunk-PFFU36ZN.js.map
