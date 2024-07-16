"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function w(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function _(l3, u4, t3) {
    var i4, o3, r3, f4 = {};
    for (r3 in u4) "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = u4[r3];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f4[r3] && (f4[r3] = l3.defaultProps[r3]);
    return g(l3, f4, i4, o3, null);
  }
  function g(n2, t3, i4, o3, r3) {
    var f4 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f4), f4;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
        n2.__e = n2.__c.base = u4.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u4, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u4 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u4 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l3, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
    var a3, v3, y3, d3, w3, _2 = t3 && t3.__k || p, g2 = l3.length;
    for (u4.__d = e3, $(u4, l3, _2), e3 = u4.__d, a3 = 0; a3 < g2; a3++) null != (y3 = u4.__k[a3]) && "boolean" != typeof y3 && "function" != typeof y3 && (v3 = -1 === y3.__i ? h : _2[y3.__i] || h, y3.__i = a3, O(n2, y3, v3, i4, o3, r3, f4, e3, c3, s3), d3 = y3.__e, y3.ref && v3.ref != y3.ref && (v3.ref && N(v3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 65536 & y3.__u || v3.__k === y3.__k ? (e3 && "string" == typeof y3.type && !n2.contains(e3) && (e3 = x(v3)), e3 = I(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u4.__d = e3, u4.__e = w3;
  }
  function $(n2, l3, u4) {
    var t3, i4, o3, r3, f4, e3 = l3.length, c3 = u4.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) r3 = t3 + a3, null != (i4 = n2.__k[t3] = null == (i4 = l3[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(k, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f4 = L(i4, u4, r3, s3), i4.__i = f4, o3 = null, -1 !== f4 && (s3--, (o3 = u4[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 == r3 - 1 ? a3 = f4 - r3 : f4 == r3 + 1 ? a3++ : f4 > r3 ? s3 > e3 - r3 ? a3 += f4 - r3 : a3-- : f4 < r3 && a3++, f4 !== t3 + a3 && (i4.__u |= 65536))) : (o3 = u4[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u4[r3] = null, s3--);
    if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u4[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = I(t3[i4], l3, u4));
      return l3;
    }
    n2.__e != l3 && (u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function L(n2, l3, u4, t3) {
    var i4 = n2.key, o3 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l3[u4];
    if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u4;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f4 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return r3;
        r3--;
      }
      if (f4 < l3.length) {
        if ((e3 = l3[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return f4;
        f4++;
      }
    }
    return -1;
  }
  function T(n2, l3, u4) {
    "-" === l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || v.test(l3) ? u4 : u4 + "px";
  }
  function A(n2, l3, u4, t3, i4) {
    var o3;
    n: if ("style" === l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] === t3[l3] || T(n2.style, l3, u4[l3]);
    }
    else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function F(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4.t) u4.t = e++;
        else if (u4.t < t3.u) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function O(n2, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
    var a3, h3, p3, v3, w3, _2, g2, m2, x2, C3, M2, P2, $2, I2, H, L2, T2 = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n: if ("function" == typeof T2) try {
      if (m2 = u4.props, x2 = "prototype" in T2 && T2.prototype.render, C3 = (a3 = T2.contextType) && i4[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i4, t3.__c ? g2 = (h3 = u4.__c = t3.__c).__ = h3.__E : (x2 ? u4.__c = h3 = new T2(m2, M2) : (u4.__c = h3 = new b(m2, M2), h3.constructor = T2, h3.render = q), C3 && C3.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m2, h3.__s))), v3 = h3.props, w3 = h3.state, h3.__v = u4, p3) x2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x2 && null == T2.getDerivedStateFromProps && m2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, M2) || u4.__v === t3.__v)) {
          for (u4.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
            n3 && (n3.__ = u4);
          }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
          h3._sb = [], h3.__h.length && f4.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, M2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, w3, _2);
        });
      }
      if (h3.context = M2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
        for (h3.state = h3.__s, h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
        h3._sb = [];
      } else do {
        h3.__d = false, $2 && $2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, w3)), S(n2, y(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u4, t3, i4, o3, r3, f4, e3, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && f4.push(h3), g2 && (h3.__E = h3.__ = null);
    } catch (n3) {
      u4.__v = null, c3 || null != r3 ? (u4.__e = e3, u4.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u4.__e = t3.__e, u4.__k = t3.__k), l.__e(n3, u4, t3);
    }
    else null == r3 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = z(t3.__e, u4, t3, i4, o3, r3, f4, c3, s3);
    (a3 = l.diffed) && a3(u4);
  }
  function j(n2, u4, t3) {
    u4.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++) N(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function z(l3, u4, t3, i4, o3, r3, f4, e3, c3) {
    var s3, a3, p3, v3, d3, _2, g2, m2 = t3.props, k3 = u4.props, b2 = u4.type;
    if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++) if ((d3 = r3[s3]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
        l3 = d3, r3[s3] = null;
        break;
      }
    }
    if (null == l3) {
      if (null === b2) return document.createTextNode(k3);
      l3 = document.createElementNS(o3, b2, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === b2) m2 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m2 = t3.props || h, !e3 && null != r3) for (m2 = {}, s3 = 0; s3 < l3.attributes.length; s3++) m2[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m2) if (d3 = m2[s3], "children" == s3) ;
      else if ("dangerouslySetInnerHTML" == s3) p3 = d3;
      else if ("key" !== s3 && !(s3 in k3)) {
        if ("value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3) continue;
        A(l3, s3, null, d3, o3);
      }
      for (s3 in k3) d3 = k3[s3], "children" == s3 ? v3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? _2 = d3 : "checked" == s3 ? g2 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m2[s3] === d3 || A(l3, s3, d3, m2[s3], o3);
      if (a3) e3 || p3 && (a3.__html === p3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u4.__k = [];
      else if (p3 && (l3.innerHTML = ""), S(l3, y(v3) ? v3 : [v3], u4, t3, i4, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r3, f4, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3) for (s3 = r3.length; s3--; ) null != r3[s3] && w(r3[s3]);
      e3 || (s3 = "value", void 0 !== _2 && (_2 !== l3[s3] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s3]) && A(l3, s3, _2, m2[s3], o3), s3 = "checked", void 0 !== g2 && g2 !== l3[s3] && A(l3, s3, g2, m2[s3], o3));
    }
    return l3;
  }
  function N(n2, u4, t3) {
    try {
      "function" == typeof n2 ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u4, t3) {
    var i4, o3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u4)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k) for (o3 = 0; o3 < i4.length; o3++) i4[o3] && V(i4[o3], u4, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function B(u4, t3, i4) {
    var o3, r3, f4, e3;
    l.__ && l.__(u4, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f4 = [], e3 = [], O(t3, u4 = (!o3 && i4 || t3).__k = _(k, null, [u4]), r3 || h, h, t3.namespaceURI, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f4, u4, e3);
  }
  n = p.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i4, o3, r3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
      if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3) return i4.__E = i4;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u4), this.props)), n2 && d(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m = c2.unmount;
  var s2 = c2.__;
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function h2(n2) {
    return o2 = 1, p2(D, n2);
  }
  function p2(n2, u4, i4) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i5 = false;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u4) {
    var i4 = d2(t2++, 3);
    !c2.__s && C2(i4.__H, u4) && (i4.__ = n2, i4.i = u4, r2.__H.__h.push(i4));
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m && m(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // src/hooks/useWeather.tsx
  var useWeather = () => {
    const [weather, setWeather] = h2(null);
    const [loading, setLoading] = h2(true);
    const [error, setError] = h2(null);
    y2(() => {
      setTimeout(() => {
        setWeather({
          temperature: 22,
          description: "Partly cloudy"
        });
        setLoading(false);
      }, 1e3);
    }, []);
    return { weather, loading, error };
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o3, i4, u4) {
    t3 || (t3 = {});
    var a3, c3, p3 = t3;
    if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // src/components/widgets/WeatherWidget.tsx
  var WeatherWidget = () => {
    const { weather, loading, error } = useWeather();
    if (loading) return /* @__PURE__ */ u3("div", { children: "Loading weather..." });
    if (error) return /* @__PURE__ */ u3("div", { children: [
      "Error: ",
      error
    ] });
    return /* @__PURE__ */ u3("div", { className: "bg-blue-500 text-white p-6 rounded-lg shadow-lg", children: [
      /* @__PURE__ */ u3("h2", { className: "text-2xl font-bold mb-4", children: "Weather" }),
      /* @__PURE__ */ u3("p", { className: "text-4xl", children: [
        weather.temperature,
        "\xB0C"
      ] }),
      /* @__PURE__ */ u3("p", { children: weather.description })
    ] });
  };

  // src/components/widgets/StockWidget.tsx
  var StockWidget = class extends b {
    constructor() {
      super(...arguments);
      this.state = {
        stocks: [
          { symbol: "AAPL", price: 150.25 },
          { symbol: "GOOGL", price: 2750.5 },
          { symbol: "MSFT", price: 300.75 }
        ]
      };
    }
    render() {
      return /* @__PURE__ */ u3("div", { className: "bg-green-500 text-white p-6 rounded-lg shadow-lg", children: [
        /* @__PURE__ */ u3("h2", { className: "text-2xl font-bold mb-4", children: "Stocks" }),
        /* @__PURE__ */ u3("ul", { children: this.state.stocks.map((stock) => /* @__PURE__ */ u3("li", { className: "mb-2", children: [
          stock.symbol,
          ": $",
          stock.price.toFixed(2)
        ] }, stock.symbol)) })
      ] });
    }
  };

  // src/reducers/todoReducer.tsx
  var todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { id: Date.now(), text: action.payload }];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  // src/components/widgets/TodoWidget.tsx
  var TodoWidget = () => {
    const [todos, dispatch] = p2(todoReducer, []);
    const [newTodo, setNewTodo] = h2("");
    const addTodo = () => {
      if (newTodo.trim()) {
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setNewTodo("");
      }
    };
    return /* @__PURE__ */ u3("div", { className: "bg-yellow-500 text-white p-6 rounded-lg shadow-lg", children: [
      /* @__PURE__ */ u3("h2", { className: "text-2xl font-bold mb-4", children: "Todo List" }),
      /* @__PURE__ */ u3(
        "input",
        {
          type: "text",
          value: newTodo,
          onChange: (e3) => setNewTodo(e3.currentTarget.value),
          className: "w-full p-2 mb-4 text-black rounded",
          placeholder: "Add new todo"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: addTodo,
          className: "bg-white text-yellow-500 px-4 py-2 rounded",
          children: "Add"
        }
      ),
      /* @__PURE__ */ u3("ul", { className: "mt-4", children: todos.map((todo) => /* @__PURE__ */ u3("li", { className: "mb-2 flex justify-between items-center", children: [
        /* @__PURE__ */ u3("span", { children: todo.text }),
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: () => dispatch({ type: "REMOVE_TODO", payload: todo.id }),
            className: "bg-red-500 text-white px-2 py-1 rounded",
            children: "Remove"
          }
        )
      ] }, todo.id)) })
    ] });
  };

  // src/components/Dashboard.tsx
  var Dashboard = () => {
    return /* @__PURE__ */ u3("main", { className: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6", children: /* @__PURE__ */ u3("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ u3(WeatherWidget, {}),
      /* @__PURE__ */ u3(StockWidget, {}),
      /* @__PURE__ */ u3(TodoWidget, {})
    ] }) });
  };

  // src/components/Header.tsx
  var Header = () => {
    return /* @__PURE__ */ u3("header", { className: "bg-white shadow-md", children: /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u3("h1", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }) }) });
  };

  // src/components/Sidebar.tsx
  var Sidebar = () => {
    const [isOpen, setIsOpen] = h2(true);
    return /* @__PURE__ */ u3(
      "div",
      {
        className: `bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition duration-200 ease-in-out`,
        children: [
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className: "absolute right-0 top-0 mt-4 -mr-8 bg-gray-800 rounded-r-lg px-2 py-1",
              children: isOpen ? "\u2190" : "\u2192"
            }
          ),
          /* @__PURE__ */ u3("nav", { children: [
            /* @__PURE__ */ u3(
              "a",
              {
                href: "#",
                className: "block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white",
                children: "Home"
              }
            ),
            /* @__PURE__ */ u3(
              "a",
              {
                href: "#",
                className: "block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white",
                children: "Analytics"
              }
            ),
            /* @__PURE__ */ u3(
              "a",
              {
                href: "#",
                className: "block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white",
                children: "Settings"
              }
            )
          ] })
        ]
      }
    );
  };

  // src/App.tsx
  var App = () => {
    return /* @__PURE__ */ u3("div", { className: "flex h-screen bg-gray-100", children: [
      /* @__PURE__ */ u3(Sidebar, {}),
      /* @__PURE__ */ u3("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ u3(Header, {}),
        /* @__PURE__ */ u3(Dashboard, {})
      ] })
    ] });
  };

  // src/index.tsx
  B(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
