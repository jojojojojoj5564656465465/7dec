/*! For license information please see player.js.LICENSE.txt */
var __webpack_modules__ = [
    ,
    ,
    (t, e, n) => {
      n.d(e, {
        Component: () => k,
        Fragment: () => O,
        createContext: () => U,
        h: () => _,
        options: () => i,
        render: () => F
      })
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        l,
        f,
        h,
        d,
        p = {},
        v = [],
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        m = Array.isArray
      function g(t, e) {
        for (var n in e) t[n] = e[n]
        return t
      }
      function b(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
      }
      function _(t, e, n) {
        var i,
          o,
          a,
          s = {}
        for (a in e)
          'key' == a ? (i = e[a]) : 'ref' == a ? (o = e[a]) : (s[a] = e[a])
        if (
          (arguments.length > 2 &&
            (s.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          'function' == typeof t && null != t.defaultProps)
        )
          for (a in t.defaultProps)
            void 0 === s[a] && (s[a] = t.defaultProps[a])
        return w(t, s, i, o, null)
      }
      function w(t, e, n, r, a) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++o : a,
          __i: -1,
          __u: 0
        }
        return null == a && null != i.vnode && i.vnode(s), s
      }
      function O(t) {
        return t.children
      }
      function k(t, e) {
        ;(this.props = t), (this.context = e)
      }
      function E(t, e) {
        if (null == e) return t.__ ? E(t.__, t.__i + 1) : null
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e
        return 'function' == typeof t.type ? E(t) : null
      }
      function S(t) {
        var e, n
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e
              break
            }
          return S(t)
        }
      }
      function P(t) {
        ;((!t.__d && (t.__d = !0) && a.push(t) && !T.__r++) ||
          s !== i.debounceRendering) &&
          ((s = i.debounceRendering) || u)(T)
      }
      function T() {
        var t, e, n, r, o, s, u, l
        for (a.sort(c); (t = a.shift()); )
          t.__d &&
            ((e = a.length),
            (r = void 0),
            (s = (o = (n = t).__v).__e),
            (u = []),
            (l = []),
            n.__P &&
              (((r = g({}, o)).__v = o.__v + 1),
              i.vnode && i.vnode(r),
              M(
                n.__P,
                r,
                o,
                n.__n,
                n.__P.namespaceURI,
                32 & o.__u ? [s] : null,
                u,
                null == s ? E(o) : s,
                !!(32 & o.__u),
                l
              ),
              (r.__v = o.__v),
              (r.__.__k[r.__i] = r),
              I(u, r, l),
              r.__e != s && S(r)),
            a.length > e && a.sort(c))
        T.__r = 0
      }
      function x(t, e, n, r, i, o, a, s, u, c, l) {
        var f,
          h,
          d,
          y,
          m,
          g = (r && r.__k) || v,
          b = e.length
        for (n.__d = u, j(n, e, g), u = n.__d, f = 0; f < b; f++)
          null != (d = n.__k[f]) &&
            ((h = -1 === d.__i ? p : g[d.__i] || p),
            (d.__i = f),
            M(t, d, h, i, o, a, s, u, c, l),
            (y = d.__e),
            d.ref &&
              h.ref != d.ref &&
              (h.ref && N(h.ref, null, d), l.push(d.ref, d.__c || y, d)),
            null == m && null != y && (m = y),
            65536 & d.__u || h.__k === d.__k
              ? (u = A(d, u, t))
              : 'function' == typeof d.type && void 0 !== d.__d
                ? (u = d.__d)
                : y && (u = y.nextSibling),
            (d.__d = void 0),
            (d.__u &= -196609))
        ;(n.__d = u), (n.__e = m)
      }
      function j(t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          u = e.length,
          c = n.length,
          l = c,
          f = 0
        for (t.__k = [], r = 0; r < u; r++)
          null != (i = e[r]) && 'boolean' != typeof i && 'function' != typeof i
            ? ((a = r + f),
              ((i = t.__k[r] =
                'string' == typeof i ||
                'number' == typeof i ||
                'bigint' == typeof i ||
                i.constructor == String
                  ? w(null, i, null, null, null)
                  : m(i)
                    ? w(O, { children: i }, null, null, null)
                    : void 0 === i.constructor && i.__b > 0
                      ? w(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                      : i).__ = t),
              (i.__b = t.__b + 1),
              (o = null),
              -1 !== (s = i.__i = L(i, n, a, l)) &&
                (l--, (o = n[s]) && (o.__u |= 131072)),
              null == o || null === o.__v
                ? (-1 == s && f--,
                  'function' != typeof i.type && (i.__u |= 65536))
                : s !== a &&
                  (s == a - 1
                    ? f--
                    : s == a + 1
                      ? f++
                      : (s > a ? f-- : f++, (i.__u |= 65536))))
            : (i = t.__k[r] = null)
        if (l)
          for (r = 0; r < c; r++)
            null != (o = n[r]) &&
              !(131072 & o.__u) &&
              (o.__e == t.__d && (t.__d = E(o)), R(o, o))
      }
      function A(t, e, n) {
        var r, i
        if ('function' == typeof t.type) {
          for (r = t.__k, i = 0; r && i < r.length; i++)
            r[i] && ((r[i].__ = t), (e = A(r[i], e, n)))
          return e
        }
        t.__e != e &&
          (e && t.type && !n.contains(e) && (e = E(t)),
          n.insertBefore(t.__e, e || null),
          (e = t.__e))
        do {
          e = e && e.nextSibling
        } while (null != e && 8 === e.nodeType)
        return e
      }
      function L(t, e, n, r) {
        var i = t.key,
          o = t.type,
          a = n - 1,
          s = n + 1,
          u = e[n]
        if (
          null === u ||
          (u && i == u.key && o === u.type && !(131072 & u.__u))
        )
          return n
        if (r > (null == u || 131072 & u.__u ? 0 : 1))
          for (; a >= 0 || s < e.length; ) {
            if (a >= 0) {
              if ((u = e[a]) && !(131072 & u.__u) && i == u.key && o === u.type)
                return a
              a--
            }
            if (s < e.length) {
              if ((u = e[s]) && !(131072 & u.__u) && i == u.key && o === u.type)
                return s
              s++
            }
          }
        return -1
      }
      function C(t, e, n) {
        '-' === e[0]
          ? t.setProperty(e, null == n ? '' : n)
          : (t[e] =
              null == n ? '' : 'number' != typeof n || y.test(e) ? n : n + 'px')
      }
      function W(t, e, n, r, i) {
        var o
        t: if ('style' === e)
          if ('string' == typeof n) t.style.cssText = n
          else {
            if (('string' == typeof r && (t.style.cssText = r = ''), r))
              for (e in r) (n && e in n) || C(t.style, e, '')
            if (n) for (e in n) (r && n[e] === r[e]) || C(t.style, e, n[e])
          }
        else if ('o' === e[0] && 'n' === e[1])
          (o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, '$1'))),
            (e =
              e.toLowerCase() in t || 'onFocusOut' === e || 'onFocusIn' === e
                ? e.toLowerCase().slice(2)
                : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + o] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = l), t.addEventListener(e, o ? h : f, o))
              : t.removeEventListener(e, o ? h : f, o)
        else {
          if ('http://www.w3.org/2000/svg' == i)
            e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
          else if (
            'width' != e &&
            'height' != e &&
            'href' != e &&
            'list' != e &&
            'form' != e &&
            'tabIndex' != e &&
            'download' != e &&
            'rowSpan' != e &&
            'colSpan' != e &&
            'role' != e &&
            'popover' != e &&
            e in t
          )
            try {
              t[e] = null == n ? '' : n
              break t
            } catch (t) {}
          'function' == typeof n ||
            (null == n || (!1 === n && '-' !== e[4])
              ? t.removeAttribute(e)
              : t.setAttribute(e, 'popover' == e && 1 == n ? '' : n))
        }
      }
      function D(t) {
        return function (e) {
          if (this.l) {
            var n = this.l[e.type + t]
            if (null == e.t) e.t = l++
            else if (e.t < n.u) return
            return n(i.event ? i.event(e) : e)
          }
        }
      }
      function M(t, e, n, r, o, a, s, u, c, l) {
        var f,
          h,
          d,
          p,
          v,
          y,
          b,
          _,
          w,
          E,
          S,
          P,
          T,
          j,
          A,
          L,
          C = e.type
        if (void 0 !== e.constructor) return null
        128 & n.__u && ((c = !!(32 & n.__u)), (a = [(u = e.__e = n.__e)])),
          (f = i.__b) && f(e)
        t: if ('function' == typeof C)
          try {
            if (
              ((_ = e.props),
              (w = 'prototype' in C && C.prototype.render),
              (E = (f = C.contextType) && r[f.__c]),
              (S = f ? (E ? E.props.value : f.__) : r),
              n.__c
                ? (b = (h = e.__c = n.__c).__ = h.__E)
                : (w
                    ? (e.__c = h = new C(_, S))
                    : ((e.__c = h = new k(_, S)),
                      (h.constructor = C),
                      (h.render = H)),
                  E && E.sub(h),
                  (h.props = _),
                  h.state || (h.state = {}),
                  (h.context = S),
                  (h.__n = r),
                  (d = h.__d = !0),
                  (h.__h = []),
                  (h._sb = [])),
              w && null == h.__s && (h.__s = h.state),
              w &&
                null != C.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = g({}, h.__s)),
                g(h.__s, C.getDerivedStateFromProps(_, h.__s))),
              (p = h.props),
              (v = h.state),
              (h.__v = e),
              d)
            )
              w &&
                null == C.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                w &&
                  null != h.componentDidMount &&
                  h.__h.push(h.componentDidMount)
            else {
              if (
                (w &&
                  null == C.getDerivedStateFromProps &&
                  _ !== p &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(_, S),
                !h.__e &&
                  ((null != h.shouldComponentUpdate &&
                    !1 === h.shouldComponentUpdate(_, h.__s, S)) ||
                    e.__v === n.__v))
              ) {
                for (
                  e.__v !== n.__v &&
                    ((h.props = _), (h.state = h.__s), (h.__d = !1)),
                    e.__e = n.__e,
                    e.__k = n.__k,
                    e.__k.some(function (t) {
                      t && (t.__ = e)
                    }),
                    P = 0;
                  P < h._sb.length;
                  P++
                )
                  h.__h.push(h._sb[P])
                ;(h._sb = []), h.__h.length && s.push(h)
                break t
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(_, h.__s, S),
                w &&
                  null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(p, v, y)
                  })
            }
            if (
              ((h.context = S),
              (h.props = _),
              (h.__P = t),
              (h.__e = !1),
              (T = i.__r),
              (j = 0),
              w)
            ) {
              for (
                h.state = h.__s,
                  h.__d = !1,
                  T && T(e),
                  f = h.render(h.props, h.state, h.context),
                  A = 0;
                A < h._sb.length;
                A++
              )
                h.__h.push(h._sb[A])
              h._sb = []
            } else
              do {
                ;(h.__d = !1),
                  T && T(e),
                  (f = h.render(h.props, h.state, h.context)),
                  (h.state = h.__s)
              } while (h.__d && ++j < 25)
            ;(h.state = h.__s),
              null != h.getChildContext &&
                (r = g(g({}, r), h.getChildContext())),
              w &&
                !d &&
                null != h.getSnapshotBeforeUpdate &&
                (y = h.getSnapshotBeforeUpdate(p, v)),
              x(
                t,
                m(
                  (L =
                    null != f && f.type === O && null == f.key
                      ? f.props.children
                      : f)
                )
                  ? L
                  : [L],
                e,
                n,
                r,
                o,
                a,
                s,
                u,
                c,
                l
              ),
              (h.base = e.__e),
              (e.__u &= -161),
              h.__h.length && s.push(h),
              b && (h.__E = h.__ = null)
          } catch (t) {
            if (((e.__v = null), c || null != a)) {
              for (
                e.__u |= c ? 160 : 128;
                u && 8 === u.nodeType && u.nextSibling;

              )
                u = u.nextSibling
              ;(a[a.indexOf(u)] = null), (e.__e = u)
            } else (e.__e = n.__e), (e.__k = n.__k)
            i.__e(t, e, n)
          }
        else
          null == a && e.__v === n.__v
            ? ((e.__k = n.__k), (e.__e = n.__e))
            : (e.__e = B(n.__e, e, n, r, o, a, s, c, l))
        ;(f = i.diffed) && f(e)
      }
      function I(t, e, n) {
        e.__d = void 0
        for (var r = 0; r < n.length; r++) N(n[r], n[++r], n[++r])
        i.__c && i.__c(e, t),
          t.some(function (e) {
            try {
              ;(t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e)
                })
            } catch (t) {
              i.__e(t, e.__v)
            }
          })
      }
      function B(t, e, n, o, a, s, u, c, l) {
        var f,
          h,
          d,
          v,
          y,
          g,
          _,
          w = n.props,
          O = e.props,
          k = e.type
        if (
          ('svg' === k
            ? (a = 'http://www.w3.org/2000/svg')
            : 'math' === k
              ? (a = 'http://www.w3.org/1998/Math/MathML')
              : a || (a = 'http://www.w3.org/1999/xhtml'),
          null != s)
        )
          for (f = 0; f < s.length; f++)
            if (
              (y = s[f]) &&
              'setAttribute' in y == !!k &&
              (k ? y.localName === k : 3 === y.nodeType)
            ) {
              ;(t = y), (s[f] = null)
              break
            }
        if (null == t) {
          if (null === k) return document.createTextNode(O)
          ;(t = document.createElementNS(a, k, O.is && O)),
            c && (i.__m && i.__m(e, s), (c = !1)),
            (s = null)
        }
        if (null === k) w === O || (c && t.data === O) || (t.data = O)
        else {
          if (
            ((s = s && r.call(t.childNodes)),
            (w = n.props || p),
            !c && null != s)
          )
            for (w = {}, f = 0; f < t.attributes.length; f++)
              w[(y = t.attributes[f]).name] = y.value
          for (f in w)
            if (((y = w[f]), 'children' == f));
            else if ('dangerouslySetInnerHTML' == f) d = y
            else if (!(f in O)) {
              if (
                ('value' == f && 'defaultValue' in O) ||
                ('checked' == f && 'defaultChecked' in O)
              )
                continue
              W(t, f, null, y, a)
            }
          for (f in O)
            (y = O[f]),
              'children' == f
                ? (v = y)
                : 'dangerouslySetInnerHTML' == f
                  ? (h = y)
                  : 'value' == f
                    ? (g = y)
                    : 'checked' == f
                      ? (_ = y)
                      : (c && 'function' != typeof y) ||
                        w[f] === y ||
                        W(t, f, y, w[f], a)
          if (h)
            c ||
              (d && (h.__html === d.__html || h.__html === t.innerHTML)) ||
              (t.innerHTML = h.__html),
              (e.__k = [])
          else if (
            (d && (t.innerHTML = ''),
            x(
              t,
              m(v) ? v : [v],
              e,
              n,
              o,
              'foreignObject' === k ? 'http://www.w3.org/1999/xhtml' : a,
              s,
              u,
              s ? s[0] : n.__k && E(n, 0),
              c,
              l
            ),
            null != s)
          )
            for (f = s.length; f--; ) b(s[f])
          c ||
            ((f = 'value'),
            'progress' === k && null == g
              ? t.removeAttribute('value')
              : void 0 !== g &&
                (g !== t[f] ||
                  ('progress' === k && !g) ||
                  ('option' === k && g !== w[f])) &&
                W(t, f, g, w[f], a),
            (f = 'checked'),
            void 0 !== _ && _ !== t[f] && W(t, f, _, w[f], a))
        }
        return t
      }
      function N(t, e, n) {
        try {
          if ('function' == typeof t) {
            var r = 'function' == typeof t.__u
            r && t.__u(), (r && null == e) || (t.__u = t(e))
          } else t.current = e
        } catch (t) {
          i.__e(t, n)
        }
      }
      function R(t, e, n) {
        var r, o
        if (
          (i.unmount && i.unmount(t),
          (r = t.ref) && ((r.current && r.current !== t.__e) || N(r, null, e)),
          null != (r = t.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount()
            } catch (t) {
              i.__e(t, e)
            }
          r.base = r.__P = null
        }
        if ((r = t.__k))
          for (o = 0; o < r.length; o++)
            r[o] && R(r[o], e, n || 'function' != typeof t.type)
        n || b(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0)
      }
      function H(t, e, n) {
        return this.constructor(t, n)
      }
      function F(t, e, n) {
        var o, a, s, u
        i.__ && i.__(t, e),
          (a = (o = 'function' == typeof n) ? null : (n && n.__k) || e.__k),
          (s = []),
          (u = []),
          M(
            e,
            (t = ((!o && n) || e).__k = _(O, null, [t])),
            a || p,
            p,
            e.namespaceURI,
            !o && n
              ? [n]
              : a
                ? null
                : e.firstChild
                  ? r.call(e.childNodes)
                  : null,
            s,
            !o && n ? n : a ? a.__e : e.firstChild,
            o,
            u
          ),
          I(s, t, u)
      }
      function U(t, e) {
        var n = {
          __c: (e = '__cC' + d++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e)
          },
          Provider: function (t) {
            var n, r
            return (
              this.getChildContext ||
                ((n = new Set()),
                ((r = {})[e] = this),
                (this.getChildContext = function () {
                  return r
                }),
                (this.componentWillUnmount = function () {
                  n = null
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value &&
                    n.forEach(function (t) {
                      ;(t.__e = !0), P(t)
                    })
                }),
                (this.sub = function (t) {
                  n.add(t)
                  var e = t.componentWillUnmount
                  t.componentWillUnmount = function () {
                    n && n.delete(t), e && e.call(t)
                  }
                })),
              t.children
            )
          }
        }
        return (n.Provider.__ = n.Consumer.contextType = n)
      }
      ;(r = v.slice),
        (i = {
          __e: function (t, e, n, r) {
            for (var i, o, a; (e = e.__); )
              if ((i = e.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (i.setState(o.getDerivedStateFromError(t)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(t, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i)
                } catch (e) {
                  t = e
                }
            throw t
          }
        }),
        (o = 0),
        (k.prototype.setState = function (t, e) {
          var n
          ;(n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = g({}, this.state))),
            'function' == typeof t && (t = t(g({}, n), this.props)),
            t && g(n, t),
            null != t && this.__v && (e && this._sb.push(e), P(this))
        }),
        (k.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), P(this))
        }),
        (k.prototype.render = O),
        (a = []),
        (u =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (c = function (t, e) {
          return t.__v.__b - e.__v.__b
        }),
        (T.__r = 0),
        (l = 0),
        (f = D(!1)),
        (h = D(!0)),
        (d = 0)
    },
    (t, e, n) => {
      n.d(e, {
        addInlineCss: () => f,
        elemInDom: () => g,
        elemStyle: () => h,
        elemWidth: () => m,
        pageLoaded: () => o.pageLoaded
      })
      var r,
        i = n(4),
        o = (n(6), n(8)),
        a = n(9),
        s = n(13),
        u = (n(17), n(18), n(24)),
        c = n(11),
        l = (c.Wistia, (0, a.cachedDetect)()),
        f = function (t, e) {
          var n = t || document.body || document.head,
            r = document.createElement('style')
          return (
            (r.id = (0, u.seqId)('wistia_', '_style')),
            r.setAttribute('type', 'text/css'),
            (r.className = 'wistia_injected_style'),
            n.appendChild(r, n.nextSibling),
            r.styleSheet
              ? (r.styleSheet.cssText = e)
              : r.appendChild(document.createTextNode(e)),
            r
          )
        },
        h = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          if ((0, i.isArray)(t) || (window.NodeList && t instanceof NodeList)) {
            for (var o = [], a = 0; a < t.length; a++) {
              var u = t[a]
              1 === u.nodeType && o.push(h.apply(void 0, [u].concat(n)))
            }
            return o
          }
          if (2 === n.length) {
            var c = n[0],
              l = n[1]
            t.style[c] = l
          } else if (1 === n.length)
            if ('string' == typeof n[0]) {
              var f = n[0]
              try {
                return t.currentStyle
                  ? t.currentStyle[f]
                  : window.getComputedStyle
                    ? window.getComputedStyle(t, null).getPropertyValue(f)
                    : null
              } catch (t) {
                s.wlog.notice(t)
              }
            } else {
              var d = v(n[0])
              for (var p in d) {
                var y = d[p]
                t.style[p] = y
              }
            }
          else s.wlog.apply(void 0, ['Unexpected args', t].concat(n))
        },
        d = {
          borderImage: !0,
          mixBlendMode: !0,
          transform: !0,
          transition: !0,
          transitionDuration: !0
        },
        p = ['webkit', 'moz', 'o', 'ms'],
        v = function (t) {
          if (l.chrome) return t
          var e = {}
          for (var n in t) {
            var r = t[n]
            if (((e[n] = r), d[n]))
              for (var i = p, o = 0; o < i.length; o++) {
                var a = i[o] + n.charAt(0).toUpperCase() + n.slice(1)
                n[a] || (e[a] = r)
              }
          }
          return e
        },
        y = function (t, e) {
          if (!window.getComputedStyle) return null
          var n = window.getComputedStyle(t, null)
          return null == n ? null : null != e ? n[e] : n
        },
        m = function (t) {
          if (t === window)
            return window.innerWidth
              ? window.innerWidth
              : document.documentElement
                ? document.documentElement.offsetWidth
                : document.body.offsetWidth
          if (t === document) {
            var e = document.body,
              n = document.documentElement
            return Math.max(
              e.scrollWidth,
              e.offsetWidth,
              n.clientWidth,
              n.scrollWidth,
              n.offsetWidth
            )
          }
          var r
          return (r = y(t, 'width')) && null != r
            ? parseFloat(r)
            : t.currentStyle
              ? t.offsetWidth
              : -1
        },
        g = function (t) {
          for (; t; ) {
            if (t === document) return !0
            t = t.parentNode || t.getRootNode().host
          }
          return !1
        },
        b = function (t, e, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = function (r) {
              ;(r = r || window.event).pageX ||
                r.pageY ||
                (!r.clientX && !r.clientY) ||
                ((r.pageX = r.clientX + k()), (r.pageY = r.clientY + O())),
                r.preventDefault ||
                  (r.preventDefault = function () {
                    r.returnValue = !1
                  }),
                r.stopPropagation ||
                  (r.stopPropagation = function () {
                    r.cancelBubble = !0
                  }),
                null == r.which &&
                  (r.which = null != r.charCode ? r.charCode : r.keyCode),
                null == r.which &&
                  null != r.button &&
                  (1 & r.button
                    ? (r.which = 1)
                    : 2 & r.button
                      ? (r.which = 3)
                      : 4 & r.button
                        ? (r.which = 2)
                        : (r.which = 0)),
                r.target || (r.srcElement && (r.target = r.srcElement)),
                r.target &&
                  3 === r.target.nodeType &&
                  (r.target = r.target.parentNode)
              for (
                var i = arguments.length,
                  o = new Array(i > 1 ? i - 1 : 0),
                  a = 1;
                a < i;
                a++
              )
                o[a - 1] = arguments[a]
              var s = n.apply(r.target, [r].concat(o))
              return s === _ && _(t, e, n), s
            }
          c.Wistia._elemBind = c.Wistia._elemBind || {}
          var o = w(t, e, n)
          return (
            (c.Wistia._elemBind[o] = i),
            (i.elem = t),
            (i.event = e),
            t.addEventListener(e, i, r),
            function () {
              _(t, e, n, r)
            }
          )
        },
        _ = function (t, e, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          if (
            null != t &&
            null != t._wistiaElemId &&
            null != n &&
            n._wistiaBindId
          ) {
            var i = w(t, e, n),
              o = c.Wistia._elemBind[i]
            return (
              o &&
                (t.removeEventListener(e, o, r),
                (o.elem = null),
                (o.event = null)),
              delete c.Wistia._elemBind[i]
            )
          }
        },
        w = function (t, e, n) {
          return (
            (t._wistiaElemId = t._wistiaElemId || (0, u.seqId)('wistia_elem_')),
            (n._wistiaBindId = n._wistiaBindId || (0, u.seqId)('wistia_bind_')),
            ''
              .concat(t._wistiaElemId, '.')
              .concat(e, '.')
              .concat(n._wistiaBindId)
          )
        },
        O = function (t) {
          var e = document.body,
            n = document.documentElement
          if (null == t) return (n && n.scrollTop) || (e && e.scrollTop) || 0
          e && (e.scrollTop = t), n && (n.scrollTop = t)
        },
        k = function (t) {
          var e = document.body,
            n = document.documentElement
          if (null == t) return (n && n.scrollLeft) || (e && e.scrollLeft) || 0
          e && (e.scrollLeft = t), n && (n.scrollLeft = t)
        }
      ;[
        'auxclick',
        'click',
        'contextmenu',
        'dblclick',
        'focus',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
        'mouseup',
        'reset',
        'submit',
        'touchend',
        'touchstart'
      ].forEach(function (t) {
        b(
          document,
          t,
          function (t) {
            ;(r = t),
              Date.now(),
              setTimeout(function () {
                r === t && (r = void 0)
              }, 0)
          },
          !l.passiveSupported || { capture: !0, passive: !0 }
        )
      })
    },
    (t, e, n) => {
      n.d(e, {
        assign: () => r.assign,
        cast: () => y,
        clone: () => l,
        eachLeaf: () => W,
        except: () => _,
        getDeep: () => f,
        indexOf: () => D,
        isArray: () => S,
        isEmpty: () => L,
        isObject: () => T,
        merge: () => a,
        only: () => b,
        select: () => w,
        setAndPreserveUndefined: () => d,
        setDeep: () => h,
        sort: () => k,
        unsetDeep: () => v
      })
      var r = n(5),
        i = function (t, e) {
          if (null == t)
            throw new TypeError('Cannot convert undefined or null to object')
          return Object.prototype.hasOwnProperty.call(Object(t), e)
        },
        o = Array.prototype.slice,
        a = function (t) {
          if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1)) return t
          for (
            var e = 0;
            e < (arguments.length <= 1 ? 0 : arguments.length - 1);
            e++
          )
            s(
              t,
              e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]
            )
          return t
        },
        s = function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : u,
            r =
              arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c
          if (S(e)) {
            S(t) || (t = [])
            for (var o = 0; o < e.length; o++) {
              var a = e[o]
              null == t[o] &&
                null != a &&
                (S(a) ? (t[o] = []) : T(a) && (t[o] = {}))
              var l = s(t[o], a, n)
              r(e, o, l) ? delete t[o] : (t[o] = l)
            }
            return n(t)
          }
          if (T(e)) {
            for (var f in e)
              if (i(e, f) && (i(t, f) || null == t[f])) {
                var h = e[f]
                S(h)
                  ? (S(t[f]) || (t[f] = []), s(t[f], h, n), (t[f] = n(t[f])))
                  : T(h)
                    ? (T(t[f]) || (t[f] = {}), s(t[f], h, n), (t[f] = n(t[f])))
                    : null == t
                      ? ((t = {}), r(e, f, h) || (t[f] = n(h)))
                      : r(e, f, h)
                        ? delete t[f]
                        : (t[f] = n(h))
              }
            return n(t)
          }
          return n(e)
        },
        u = function (t) {
          return t
        },
        c = function (t, e, n) {
          return null == n
        },
        l = function (t, e) {
          return S(t) ? s([], t, e) : s({}, t, e)
        },
        f = function (t, e, n) {
          e = 'string' == typeof e ? e.split('.') : o.call(e)
          for (var r, a = t; null != t && e.length; ) {
            var s = e.shift()
            ;(void 0 !== t[s] && (T(t[s]) || S(t[s]))) ||
              !n ||
              (0 === s ? ((t = a[r] = [])[s] = {}) : (t[s] = {})),
              (a = t),
              (r = s),
              (t = i(t, s) ? t[s] : void 0)
          }
          return t
        },
        h = function (t, e, n) {
          return p(t, e, n, !0)
        },
        d = function (t, e, n) {
          return p(t, e, n, !1)
        },
        p = function (t, e, n) {
          var r =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            i = (e = 'string' == typeof e ? e.split('.') : o.call(e)).pop()
          null != (t = f(t, e, !0)) &&
            (T(t) || S(t)) &&
            null != i &&
            (r && null == n ? delete t[i] : (t[i] = n))
        },
        v = function (t, e) {
          return h(t, e)
        },
        y = function (t) {
          return null == t ? t : T(t) || S(t) ? g(t) : m(''.concat(t), t)
        },
        m = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
          return /^-?[1-9]\d*?$/.test(t)
            ? parseInt(t, 10)
            : '0' === t || '-0' === t
              ? 0
              : /^-?\d*\.\d+$/.test(t)
                ? parseFloat(t)
                : !!/^true$/i.test(t) || (!/^false$/i.test(t) && e)
        },
        g = function (t) {
          return s(
            t,
            t,
            function (t) {
              return 'string' == typeof t ? m(t) : t
            },
            function () {
              return !1
            }
          )
        },
        b = function (t, e) {
          for (var n = {}, r = {}, i = 0; i < e.length; i++) r[e[i]] = !0
          for (var o in t) r[o] && (n[o] = t[o])
          return n
        },
        _ = function (t, e) {
          for (var n = {}, r = {}, i = 0; i < e.length; i++) r[e[i]] = !0
          for (var o in t) r[o] || (n[o] = t[o])
          return n
        },
        w = function (t, e) {
          for (
            var n = [], r = 'function' == typeof e, i = r ? e : null, o = 0;
            o < t.length;
            o++
          ) {
            var a = t[o]
            if (r) i(a) && n.push(a)
            else {
              var s = !0
              for (var u in e) {
                var c = e[u]
                if (c instanceof Array) {
                  if (!a[u] || a[u] < c[0] || a[u] > c[1]) {
                    s = !1
                    break
                  }
                } else if (c instanceof RegExp) {
                  if (!c.test(a[u])) {
                    s = !1
                    break
                  }
                } else if (c instanceof O) {
                  for (var l = !1, f = 0; f < c.values.length; f++) {
                    var h = c.values[f]
                    if (a[u] === h) {
                      l = !0
                      break
                    }
                  }
                  if (!l) {
                    s = !1
                    break
                  }
                } else if ('function' == typeof c) {
                  if (null == a[u] || !c(a[u])) {
                    s = !1
                    break
                  }
                } else if (a[u] !== c) {
                  s = !1
                  break
                }
              }
              s && n.push(a)
            }
          }
          return n
        },
        O = function (t) {
          var e = this
          return (e.values = t), e
        },
        k = function (t, e) {
          var n = 'function' == typeof e,
            r = n ? e : null,
            i = o.call(t)
          return (
            n
              ? i.sort(r)
              : i.sort(function (t, n) {
                  var r
                  r = e instanceof Array ? l(e) : e.split(/\s*,\s*/)
                  for (var i = 0; 0 === i && r.length > 0; ) {
                    var o = r.shift().split(/\s+/),
                      a = o[0],
                      s = o[1]
                    if (((s = 'desc' === s ? -1 : 1), t[a] < n[a])) {
                      i = -1 * s
                      break
                    }
                    if (t[a] !== n[a]) {
                      i = 1 * s
                      break
                    }
                    i = 0
                  }
                  return i
                }),
            i
          )
        },
        E = /^\s*function Array()/,
        S = function (t) {
          return null != t && t.push && E.test(t.constructor)
        },
        P = /^\s*function Object()/,
        T = function (t) {
          return null != t && 'object' == typeof t && P.test(t.constructor)
        },
        x = /^\s*function RegExp()/,
        j = /^string|number|boolean|function$/i,
        A = function (t) {
          return (
            null != t &&
            (j.test(typeof t) ||
              (function (t) {
                return null != t && x.test(t.constructor)
              })(t))
          )
        },
        L = function (t) {
          return (
            null == t ||
            !(!S(t) || t.length) ||
            (!!T(t) && !Object.keys(t).length)
          )
        },
        C = function (t, e, n, r, a) {
          if ((null == n && (n = []), A(t))) e(t, n, r, a)
          else if (T(t) || S(t)) {
            for (var s in (e(t, n, r, a), t))
              if (i(t, s)) {
                var u = o.call(n)
                u.push(s), C(t[s], e, u, t, s)
              }
          } else e(t, n, r, a)
        },
        W = function (t, e) {
          C(t, function (t, n, r, i) {
            S(t) || T(t) || e(t, n, r, i)
          })
        },
        D = function (t, e) {
          for (var n = 0; n < t.length; n++) if (t[n] === e) return n
          return -1
        }
    },
    (t, e, n) => {
      n.d(e, { assign: () => i })
      var r = function (t, e) {
          if (null == t)
            throw new TypeError('Cannot convert undefined or null to object')
          return Object.prototype.hasOwnProperty.call(Object(t), e)
        },
        i = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          if (Object.assign) return Object.assign.apply(Object, [t].concat(n))
          for (var i = 0; i < n.length; i++) o(t, n[i])
          return t
        },
        o = function (t, e) {
          for (var n in e) r(e, n) && (t[n] = e[n])
          return t
        }
    },
    (t, e, n) => {
      n(7)
    },
    (t, e, n) => {
      n.d(e, { poll: () => r })
      var r = function (t, e, n, r, i) {
        var o = null,
          a = new Date().getTime(),
          s = function () {
            new Date().getTime() - a > r
              ? 'function' == typeof i && i()
              : t()
                ? e()
                : (clearTimeout(o), (o = setTimeout(s, n)))
          }
        o = setTimeout(s, 1)
      }
    },
    (t, e, n) => {
      n.d(e, { pageLoaded: () => r })
      var r = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 4e3,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : document,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : window
        if (/loaded|complete/.test(n.readyState)) setTimeout(t, 0)
        else {
          var i = function () {
              r.removeEventListener('load', o, !1)
            },
            o = function () {
              clearTimeout(a), i(), t()
            }
          r.addEventListener('load', o, !1)
          var a = setTimeout(function () {
            i(), t()
          }, e)
        }
      }
    },
    (t, e, n) => {
      n.d(e, { cachedDetect: () => q, detectIsMobile: () => G })
      var r,
        i = n(10),
        o = n(11),
        a = n(12),
        s = navigator.userAgent,
        u = /(webkit)[ /]([^\s]+)/i,
        c = /OPR\/([^\s]+)/i,
        l = /(edge)\/(\d+(?:\.\d+)?)/i,
        f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
        h = /(android) ([^;]+)/i,
        d = /(iphone)/i,
        p = /(Windows Phone OS (\d+(?:\.\d+)?))/,
        v = /OS (\d+)_(\d+)/i,
        y = /(playstation 3)/i,
        m = /BlackBerry|BB10/i,
        g = /(firefox)/i,
        b = /Mobile VR/i,
        _ = /Version\/([^\s]+)/i,
        w = function () {
          return (k()[1] || 'webkit').toLowerCase()
        },
        O = function () {
          return k()[2]
        },
        k = function () {
          var t
          return (t = s.match(l)) || (t = s.match(u)) || (t = s.match(c))
            ? t
            : t
              ? (null != document.documentMode &&
                  (t[2] = document.documentMode),
                t)
              : (t = s.match(f)) || []
        },
        E = function () {
          var t = s.match(h)
          return null != t && { version: t[2] }
        },
        S = function () {
          return d.test(s)
        },
        P = function () {
          return M() > 0 || E() || j()
        },
        T = function () {
          try {
            var t = matchMedia('(hover:hover)')
            if ('not all' !== t.media) return t.matches
          } catch (t) {}
          return !P()
        },
        x = function () {
          return m.test(s)
        },
        j = function () {
          return (
            /Macintosh/i.test(navigator.userAgent) &&
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 1
          )
        },
        A = function () {
          return u.test(s) && !/chrome/i.test(s) && !j() && !S()
        },
        L = function () {
          return (
            !(!/Chrome/.test(s) || !/Google Inc/.test(navigator.vendor)) && {
              version: W()
            }
          )
        },
        C = function () {
          var t = s.match(/\bSilk\/([^\s]+)/)
          return t && t[1]
        },
        W = function () {
          var t = s.match(/\bChrome\/([^\s]+)/)
          return t && t[1]
        },
        D = function () {
          return c.test(s)
        },
        M = function () {
          var t = s.match(v),
            e = s.match(_)
          return null != t
            ? parseFloat(''.concat(t[1], '.').concat(t[2]))
            : null != e && e[1] && j()
              ? parseFloat(e[1])
              : 0
        },
        I = function () {
          return l.test(s)
        },
        B = function () {
          return g.test(s)
        },
        N = function () {
          var t = document.createElement('video'),
            e = !1
          try {
            if (t.canPlayType) {
              var n = 'video/mp4; codecs="avc1.42E01E'
              ;((e = {}).h264 =
                !!t.canPlayType(''.concat(n, '"')) ||
                !!t.canPlayType(''.concat(n, ', mp4a.40.2"'))),
                (e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"')),
                (e.nativeHls = !!t.canPlayType('application/vnd.apple.mpegURL'))
            }
          } catch (t) {
            e = { ogg: !1, h264: !1, webm: !1, nativeHls: !1 }
          }
          return e
        },
        R = function () {
          try {
            return 'localStorage' in i.root && null != i.root.localStorage
          } catch (t) {
            return !1
          }
        },
        H = ['WebKit', 'Moz', 'O', 'Ms', ''],
        F = function () {
          for (var t = 0; t < H.length; t++) {
            var e = ''.concat(H[t], 'MutationObserver')
            if (i.root[e]) return e
          }
          return null
        },
        U = function () {
          if (null != r) return r
          try {
            var t = Object.defineProperty({}, 'passive', {
              get: function () {
                r = !0
              }
            })
            window.addEventListener('test', null, t)
          } catch (t) {
            r = !1
          }
          return r
        },
        q = function () {
          return (
            o.Wistia._detectCache || (o.Wistia._detectCache = V()),
            o.Wistia._detectCache
          )
        },
        V = function () {
          var t,
            e,
            n,
            r,
            o,
            u,
            c,
            l,
            f,
            h,
            d,
            v,
            m = {
              amazonSilk: !!/Silk/.test(s) && { version: C() },
              browser: { version: O() },
              edge: I(),
              firefox: B(),
              gearvr: b.test(s),
              android: E(),
              oldandroid: E() && parseFloat(E().version) < 4.1,
              iphone: S(),
              ipad: j(),
              blackberry: x(),
              safari: A(),
              chrome: L(),
              opera: D(),
              winphone: { version: p.test(s)[2] },
              ios: { version: M() },
              windows: /win/i.test(navigator.platform),
              mac: /mac/i.test(navigator.platform),
              linux: /linux/i.test(navigator.platform),
              retina:
                null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
              hoverIsNatural: T(),
              touchScreen: P(),
              ps3: y.test(s),
              video: N(),
              mediaSource:
                i.root.MediaSource &&
                i.root.MediaSource.isTypeSupported(
                  ''.concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')
                ),
              nativeHls: (S() || j() || A()) && N().nativeHls,
              localstorage: R(),
              json: !(!i.root.JSON || 'function' != typeof JSON.parse),
              backgroundSize:
                ((v = document.createElement('div')),
                '' === v.style.backgroundSize ||
                  '' === v.style.webkitBackgroundSize ||
                  '' === v.style.mozBackgroundSize ||
                  '' === v.style.oBackgroundSize),
              fullscreenEnabled:
                document.fullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.msFullscreenEnabled,
              vulcanSupport:
                ((d = /webkit|mozilla|edge/.test(w())),
                Boolean(
                  !S() &&
                    !j() &&
                    !E() &&
                    !x() &&
                    d &&
                    N().h264 &&
                    Object.defineProperties
                )),
              mutationObserver: F(),
              callingPlayRequiresEventContext: M() > 0 || E() || A(),
              passiveSupported: U(),
              webp:
                ((t = L()),
                (e = B()),
                (n = I()),
                (r = D()),
                (o = t && O() >= 32),
                (u = t && O() >= 75 && E()),
                (c = e && O() >= 65),
                (l = e && O() >= 67 && E()),
                (f = n && O() >= 18),
                (h = r && O() >= 19),
                o || u || c || l || f || h),
              performanceMeasure: (0, a.hasPerformanceMeasureSupport)()
            }
          return (m.browser[w()] = !0), m
        },
        G = function () {
          var t = E(),
            e = j(),
            n = S()
          return t || e || n
        }
    },
    (t, e, n) => {
      var r
      n.d(e, { root: () => i })
      try {
        ;(r = self).self !== r &&
          void 0 !== r.self &&
          'undefined' != typeof window &&
          (r = window)
      } catch (t) {
        r = 'undefined' != typeof globalThis ? globalThis : window
      }
      var i = r
    },
    (t, e, n) => {
      n.d(e, { Wistia: () => i })
      var r = n(10)
      null == r.root.Wistia && (r.root.Wistia = {}),
        null == r.root.Wistia._destructors && (r.root.Wistia._destructors = {}),
        null == r.root.Wistia._initializers &&
          (r.root.Wistia._initializers = {}),
        null == r.root.Wistia._remoteData &&
          (r.root.Wistia._remoteData = new Map()),
        null == r.root.Wistia.api &&
          (r.root.Wistia.api = function () {
            return (
              console.error('Accessed Wistia.api() before it was initialized'),
              null
            )
          }),
        null == r.root.Wistia.defineControl &&
          (r.root.Wistia.defineControl = function () {
            return (
              console.error(
                'Accessed Wistia.defineControl() before it was initialized'
              ),
              null
            )
          }),
        null == r.root.Wistia.mixin &&
          (r.root.Wistia.mixin = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            Object.keys(e).forEach(function (n) {
              ;(function (t, e) {
                if (null == t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  )
                return Object.prototype.hasOwnProperty.call(Object(t), e)
              })(e, n) && (t[n] = e[n])
            })
          }),
        null == r.root.Wistia.playlistMethods &&
          (r.root.Wistia.playlistMethods = new Map()),
        null == r.root.Wistia.PublicApi && (r.root.Wistia.PublicApi = null),
        null == r.root.Wistia.uncacheMedia &&
          (r.root.Wistia.uncacheMedia = function () {
            return (
              console.error(
                'Accessed Wistia.uncacheMedia() before it was initialized'
              ),
              null
            )
          }),
        null == r.root.Wistia.VisitorKey && (r.root.Wistia.VisitorKey = null),
        null == r.root.Wistia.visitorKey && (r.root.Wistia.visitorKey = null),
        null == r.root.Wistia.wistia && (r.root.Wistia.wistia = void 0),
        null == r.root.Wistia._mediaDataPromises &&
          (r.root.Wistia._mediaDataPromises = {}),
        null == r.root.Wistia._liveStreamPollingPromises &&
          (r.root.Wistia._liveStreamPollingPromises = {})
      var i = r.root.Wistia
    },
    (t, e, n) => {
      n.d(e, { hasPerformanceMeasureSupport: () => r })
      var r = function () {
        var t = window.performance
        return Boolean(t) && Boolean(t.measure)
      }
    },
    (t, e, n) => {
      n.d(e, { wlog: () => y })
      var r = n(14),
        i = n(11)
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return a(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return a(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function a(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var s = {
          ERROR: 0,
          WARNING: 1,
          NOTICE: 2,
          INFO: 3,
          DEBUG: 4,
          error: 0,
          warning: 1,
          notice: 2,
          info: 3,
          debug: 4
        },
        u = function () {},
        c = function (t) {
          var e = this
          null == t && (t = {})
          return (
            (e.error = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return e.log(0, n)
            }),
            (e.warn = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return e.log(1, n)
            }),
            (e.notice = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return e.log(1, n)
            }),
            (e.info = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return e.log(3, n)
            }),
            (e.debug = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return e.log(4, n)
            }),
            (e.ctx = t),
            e.ctx.initializedAt || e.reset(),
            e
          )
        },
        l = c.prototype
      ;(l.reset = function () {
        ;(this.ctx.level = 0),
          (this.ctx.grep = null),
          (this.ctx.grepv = null),
          (this.ctx.first1000LogLines = []),
          (this.ctx.last1000LogLines = []),
          (this.ctx.initializedAt = new Date().getTime())
      }),
        (l.setLevel = function (t) {
          var e = this.logFunc(3)
          null != s[t]
            ? ((this.ctx.level = s[t]),
              e('Log level set to "'.concat(t, '" (').concat(s[t], ')')))
            : e('Unknown log level "'.concat(t, '"'))
        }),
        (l.setGrep = function (t) {
          this.ctx.grep = t
        }),
        (l.setGrepv = function (t) {
          this.ctx.grepv = t
        }),
        (l.first1000LogLines = function () {
          return this.ctx.first1000LogLines
        }),
        (l.last1000LogLines = function () {
          return this.ctx.last1000LogLines
        }),
        (l.matchedGrep = function (t) {
          var e = !1
          if (this.ctx.grep || this.ctx.grepv) {
            for (var n = [], r = 0; r < t.length; r++)
              try {
                var i = t[r]
                n.push(i.toString && i.toString())
              } catch (t) {
                n.push('')
              }
            var o = n.join(' '),
              a = !this.ctx.grep || o.match(this.ctx.grep),
              s = !this.ctx.grepv || !o.match(this.ctx.grepv)
            e = a && s
          } else e = !0
          return e
        }),
        (l.now = function () {
          return 'undefined' != typeof performance &&
            'function' == typeof performance.now
            ? performance.now().toFixed(3)
            : Date.now
              ? Date.now() - this.ctx.initializedAt
              : new Date().getTime() - this.ctx.initializedAt
        }),
        (l.messagesToLogLine = function (t, e, n) {
          var r,
            i = [t, e]
          i = i.concat(n)
          try {
            ;(r = i.join(' ') || '').length > 200 && (r = r.slice(0, 200))
          } catch (t) {
            r = 'could not serialize'
          }
          return r
        }),
        (l.persistLine = function (t) {
          this.ctx.first1000LogLines.length < 1e3
            ? this.ctx.first1000LogLines.push(t)
            : (this.ctx.last1000LogLines.length >= 1e3 &&
                this.ctx.last1000LogLines.shift(),
              this.ctx.last1000LogLines.push(t))
        }),
        (l.log = function (t, e) {
          var n,
            i = t <= this.ctx.level,
            a = t < 4,
            s = (i || a) && this.matchedGrep(e)
          if (
            (0 === t &&
              (0, r.globalTrigger)('problem', {
                type: 'error-logged',
                data: { messages: e }
              }),
            s && (i || a) && (n = this.now()),
            a && s)
          ) {
            var u = this.messagesToLogLine(t, n, e)
            this.persistLine(u)
          }
          if (i && s) {
            var c,
              l = this.logFunc(t)
            1 === e.length && (c = e[0]) instanceof Error
              ? (l(c.message), c.stack && l(c.stack))
              : l.apply(void 0, o(e))
          }
        })
      var f = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]
          console.error.apply(console, e)
        },
        h = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]
          console.warn.apply(console, e)
        },
        d = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]
          console.info.apply(console, e)
        },
        p = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]
          console.debug.apply(console, e)
        },
        v = function (t) {
          console.log.apply(console, t)
        }
      ;(l.logFunc = function (t) {
        return (
          null == t && (t = this.level),
          console
            ? (0 === t
                ? (e = f)
                : 1 === t
                  ? (e = h)
                  : 3 === t
                    ? (e = d)
                    : 4 === t && (e = p),
              e || (e = v),
              'function' != typeof e && ((this.noConsoleLog = !0), (e = u)),
              e)
            : u
        )
        var e
      }),
        (l.maybePrefix = function (t, e) {
          if (t) {
            if ('function' == typeof t)
              try {
                t = t()
              } catch (e) {
                t = 'prefix err "'.concat(e.message, '"')
              }
            return t instanceof Array ? t.concat(e) : [t].concat(e)
          }
          return e
        }),
        (l.getPrefixedFunctions = function (t) {
          var e = this
          return {
            log: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(0, e.maybePrefix(t, r))
            },
            error: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(0, e.maybePrefix(t, r))
            },
            warn: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(1, e.maybePrefix(t, r))
            },
            notice: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(1, e.maybePrefix(t, r))
            },
            info: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(3, e.maybePrefix(t, r))
            },
            debug: function () {
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i]
              return e.log(4, e.maybePrefix(t, r))
            }
          }
        }),
        i.Wistia && null == i.Wistia.wlogCtx && (i.Wistia.wlogCtx = {})
      var y = new c(i.Wistia.wlogCtx)
    },
    (t, e, n) => {
      n.d(e, { globalTrigger: () => o })
      var r = n(15),
        i = n(11)
      ;(0, r.makeWbindable)(i.Wistia)
      i.Wistia.bind.bind(i.Wistia),
        i.Wistia.on.bind(i.Wistia),
        i.Wistia.off.bind(i.Wistia),
        i.Wistia.rebind.bind(i.Wistia)
      var o = i.Wistia.trigger.bind(i.Wistia)
      i.Wistia.unbind.bind(i.Wistia)
    },
    (t, e, n) => {
      n.d(e, { makeWbindable: () => o })
      var r = n(16),
        i = n(11)
      i.Wistia.bindable ||
        (i.Wistia.bindable = {
          bind: function (t, e) {
            return 'crosstime' === t && this.crossTime
              ? (this.crossTime.addBinding(arguments[1], arguments[2]), this)
              : 'betweentimes' === t && this.betweenTimes
                ? (this.betweenTimes.addBinding(
                    arguments[1],
                    arguments[2],
                    arguments[3]
                  ),
                  this)
                : e
                  ? (r.bind.call(this, t, e), this)
                  : void (
                      i.Wistia.warn &&
                      i.Wistia.warn(
                        this.constructor.name,
                        'bind',
                        'falsey value passed in as callback:',
                        e
                      )
                    )
          },
          unbind: function (t, e) {
            return 'crosstime' === t && this.crossTime
              ? (e
                  ? this.crossTime.removeBinding(arguments[1], arguments[2])
                  : this.crossTime.removeAllBindings(),
                this)
              : 'betweentimes' === t && this.betweenTimes
                ? (e
                    ? this.betweenTimes.removeBinding(
                        arguments[1],
                        arguments[2],
                        arguments[3]
                      )
                    : this.betweenTimes.removeAllBindings(),
                  this)
                : (e
                    ? r.unbind.call(this, t, e)
                    : this._bindings && (this._bindings[t] = []),
                  this._bindings &&
                    this._bindings[t] &&
                    !this._bindings[t].length &&
                    ((this._bindings[t] = null), delete this._bindings[t]),
                  this)
          },
          on: function (t, e) {
            var n = arguments,
              i = this
            return 'crosstime' === t && this.crossTime
              ? (this.crossTime.addBinding(arguments[1], arguments[2]),
                function () {
                  i.crossTime.removeBinding(n[1], n[2])
                })
              : 'betweentimes' === t && this.betweenTimes
                ? (this.betweenTimes.addBinding(
                    arguments[1],
                    arguments[2],
                    arguments[3]
                  ),
                  function () {
                    i.betweenTimes.removeBinding(n[1], n[2], n[3])
                  })
                : r.bind.call(this, t, e)
          },
          off: function (t, e) {
            return 'crosstime' === t && this.crossTime
              ? this.crossTime.removeBinding(arguments[1], arguments[2])
              : 'betweentimes' === t && this.betweenTimes
                ? this.betweenTimes.removeBinding(
                    arguments[1],
                    arguments[2],
                    arguments[3]
                  )
                : r.unbind.call(this, t, e)
          },
          rebind: function (t, e) {
            return this.unbind(t, e), this.bind(t, e), this
          },
          trigger: function (t) {
            for (
              var e,
                n = arguments.length,
                i = new Array(n > 1 ? n - 1 : 0),
                o = 1;
              o < n;
              o++
            )
              i[o - 1] = arguments[o]
            return (e = r.trigger).call.apply(e, [this, t].concat(i)), this
          },
          bindNamed: function () {
            return r.bindNamed.apply(this, arguments)
          },
          unbindNamed: function () {
            return r.unbindNamed.apply(this, arguments)
          },
          unbindAllInNamespace: function () {
            return r.unbindAllInNamespace.apply(this, arguments)
          }
        })
      var o = function (t) {
        for (var e in i.Wistia.bindable) {
          var n = i.Wistia.bindable[e]
          t[e] || (t[e] = n)
        }
      }
    },
    (t, e, n) => {
      n.d(e, {
        bind: () => c,
        bindNamed: () => v,
        trigger: () => h,
        unbind: () => l,
        unbindAllInNamespace: () => m,
        unbindNamed: () => y
      })
      var r = n(11),
        i = function (t, e) {
          if (null == t)
            throw new TypeError('Cannot convert undefined or null to object')
          return Object.prototype.hasOwnProperty.call(Object(t), e)
        }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return a(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return a(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function a(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var s,
        u = Array.prototype.slice,
        c = function (t, e) {
          var n = this
          return (
            n._bindings || (n._bindings = {}),
            n._bindings[t] || (n._bindings[t] = []),
            n._bindings[t].push(e),
            function () {
              n.unbind(t, e)
            }
          )
        },
        l = function (t, e) {
          if (!this._bindings) return this
          if (!this._bindings[t]) return this
          for (var n = [], r = 0; r < this._bindings[t].length; r++) {
            var i = this._bindings[t][r]
            i !== e && n.push(i)
          }
          this._bindings[t] = n
        },
        f = function (t, e) {
          return this.unbind(t, e), this.bind(t, e), { event: t, fn: e }
        },
        h = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            this._bindings &&
              null != this._bindings.all &&
              d.apply(this, ['all', t].concat(n)),
            d.apply(this, [t].concat(n))
          )
        },
        d = function (t) {
          if (!this._bindings) return this
          if (!this._bindings[t]) return this
          for (
            var e, n = u.call(arguments, 1), i = o(this._bindings[t]), a = 0;
            a < i.length;
            a++
          ) {
            var s = i[a]
            try {
              s.apply(this, n) === this.unbind &&
                (null == e && (e = []), e.push({ event: t, fn: s }))
            } catch (t) {
              if (this._throwTriggerErrors) throw t
              r.Wistia.error && r.Wistia.error(t)
            }
          }
          if (e)
            for (var c = 0; c < e.length; c++) {
              var l = e[c]
              this.unbind(l.event, l.fn)
            }
          return this
        },
        p = function (t, e) {
          null == t._namedBindings && (t._namedBindings = {}),
            null == t._namedBindings[e] && (t._namedBindings[e] = {})
        },
        v = function (t, e, n, r) {
          return (
            this.unbindNamed(t, e),
            (function (t, e, n, r, i) {
              p(t, e), (t._namedBindings[e][n] = { event: r, fn: i })
            })(this, t, e, n, r),
            this.bind(n, r),
            function () {
              this.unbindNamed(t, e)
            }
          )
        },
        y = function (t, e) {
          p(this, t)
          var n = (function (t, e, n) {
            return p(t, e), t._namedBindings[e][n]
          })(this, t, e)
          if (n) {
            var r = n.event,
              i = n.fn
            this.unbind(r, i)
          }
          var o = this._namedBindings
          return delete o[t][e], g(o[t]) && delete o[t], this
        },
        m = function (t) {
          var e = this._namedBindings && this._namedBindings[t]
          if (null == e) return this
          for (var n in e) i(e, n) && this.unbindNamed(t, n)
        },
        g = function (t) {
          for (var e in t) if (i(t, e)) return !1
          return !0
        }
      ;((s = function () {}.prototype).bind = c),
        (s.unbind = l),
        (s.on = c),
        (s.off = l),
        (s.rebind = f),
        (s.trigger = h),
        (s.bindNamed = v),
        (s.unbindNamed = y),
        (s.unbindAllInNamespace = m)
    },
    (t, e, n) => {
      var r
      n.d(e, { elemOffset: () => o })
      var i = function () {
          if (null != r) return r
          var t = document.createElement('div')
          return (
            (t.style.paddingLeft = t.style.width = '1px'),
            document.body.appendChild(t),
            (r = 2 === t.offsetWidth),
            document.body.removeChild(t),
            r
          )
        },
        o = function (t) {
          var e,
            n,
            r = document.body,
            o = document.defaultView,
            s = document.documentElement,
            u = t.getBoundingClientRect(),
            c = s.clientTop || r.clientTop || 0,
            l = s.clientLeft || r.clientLeft || 0
          ;(e =
            o && null != o.pageYOffset
              ? o.pageYOffset
              : i() && s && null != s.scrollTop
                ? s.scrollTop
                : r.scrollTop),
            (n =
              o && null != o.pageXOffset
                ? o.pageXOffset
                : i() && s && null != s.scrollLeft
                  ? s.scrollLeft
                  : r.scrollLeft)
          var f = a(t)
          return {
            height: u.height * f,
            top: u.top * f + e - c,
            left: u.left * f + n - l,
            width: u.width * f,
            zoom: f
          }
        },
        a = function (t) {
          return t && t !== document.documentElement
            ? a(t.parentElement) * (getComputedStyle(t).zoom || 1)
            : 1
        }
    },
    (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        execScriptTags: () => execScriptTags,
        getScriptTags: () => getScriptTags,
        removeScriptTags: () => removeScriptTags
      })
      var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(19),
        getScriptTags = function (t) {
          return (
            t.match(
              /<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi
            ) || []
          )
        },
        scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(
          scriptTags
        ) {
          if (!scriptTags) return []
          scriptTags instanceof Array ||
            (scriptTags = getScriptTags(scriptTags))
          for (
            var hashes = [],
              _loop = function _loop() {
                var scriptTag = scriptTags[i],
                  hash = {},
                  matches = scriptTag.match(/<script.*?>/i)
                if (
                  (matches &&
                    ((matches = matches[0].match(/src="([^"]+)"/i)),
                    matches &&
                      ((hash.src = matches[1]),
                      (hash.async = /async/i.test(
                        scriptTag.replace(hash.src, '')
                      )))),
                  !matches &&
                    ((matches = scriptTag.match(
                      /<script>([\s\S]+?)<\/script>/i
                    )),
                    matches))
                ) {
                  var src = matches[1]
                  hash.fn = function () {
                    return eval(src)
                  }
                }
                hashes.push(hash)
              },
              i = 0;
            i < scriptTags.length;
            i++
          )
            _loop()
          return hashes
        },
        execScriptTags = function (t, e) {
          if (!t) return null
          var n = scriptTagsToRunScriptsInput(t)
          return (0,
          utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(
            n
          ).then(e)
        },
        removeScriptTags = function (t) {
          return t.replace(
            /<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g,
            ''
          )
        }
    },
    (t, e, n) => {
      n.d(e, {
        findScriptInDomBySrc: () => u,
        removeScriptsBySrc: () => c,
        runScripts: () => f
      })
      var r = n(13),
        i = n(4),
        o = n(20)
      function a(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != typeof t || !t) return t
              var n = t[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(t, e || 'default')
                if ('object' != typeof r) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return ('string' === e ? String : Number)(t)
            })(t, 'string')
            return 'symbol' == typeof e ? e : e + ''
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      var u = function (t) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = document.getElementsByTagName('script'),
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r],
              o = i.getAttribute('src') || ''
            if (e.ignoreQueryParams) {
              var a = o.split('?')
              o = a[0]
            }
            if (
              (!e.scriptRegex &&
                e.ignoreProtocol &&
                ((o = o.replace(/^https?:/, '')),
                (t = t.replace(/^https?:/, ''))),
              e.scriptRegex && e.scriptRegex.test(o))
            )
              return i
            if (e.testStartsWith && 0 === o.indexOf(t)) return i
            if (o === t) return i
          }
          return null
        },
        c = function (t) {
          for (
            var e,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = function () {
                if (
                  e &&
                  ((e.onload = e.onreadystatechange = e.onerror = null),
                  e.parentNode && (e.parentNode.removeChild, 1))
                )
                  try {
                    e.parentNode.removeChild(e)
                  } catch (t) {
                    setTimeout(function () {
                      throw t
                    }, 0)
                  }
              };
            (e = u(t, n));

          )
            r()
        },
        l = function (t) {
          var e,
            n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8e3,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
          return (
            null == r && (r = 8e3),
            null == i && (i = {}),
            new Promise(function (a) {
              !0 === i.once && (e = u(t)) && (n = !0),
                i.once && n
                  ? (e.readyState && !/loaded|complete/.test(e.readyState)) ||
                    setTimeout(function () {
                      a()
                    }, 1)
                  : (0, o.runScript)(t, r)
                      .then(a)
                      .catch(function (t) {
                        a(t),
                          setTimeout(function () {
                            console.error(t)
                          }, 1)
                      })
            })
          )
        },
        f = function () {
          for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++)
            n[i] = arguments[i]
          ;(t = n[0] instanceof Array ? n[0] : n), (t = h(t))
          var o = [],
            u = [],
            c = []
          return (
            t.forEach(function (t) {
              var e = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                    e % 2
                      ? a(Object(n), !0).forEach(function (e) {
                          s(t, e, n[e])
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : a(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            )
                          })
                  }
                  return t
                })({}, t),
                n = new Promise(function (t) {
                  e.resolve = t
                })
              ;(e.promise = n),
                c.push(e.promise),
                t.async ? o.push(e) : u.push(e)
            }),
            u.reduce(function (t, e) {
              if (e.fn)
                try {
                  e.fn()
                } catch (t) {
                  r.wlog.error(t)
                } finally {
                  e.resolve()
                }
              else e.src && l(e.src, null, e).then(e.resolve)
              return t.then(e.promise)
            }, Promise.resolve()),
            setTimeout(function () {
              o.forEach(function (t) {
                if (t.fn)
                  try {
                    t.fn()
                  } catch (t) {
                    r.wlog.error(t)
                  } finally {
                    t.resolve()
                  }
                else t.src && l(t.src, null, t).then(t.resolve)
              })
            }, 1),
            Promise.all(c)
          )
        },
        h = function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n]
            'string' == typeof r
              ? e.push({ src: r, async: !1 })
              : (0, i.isObject)(r)
                ? e.push(r)
                : e.push({ fn: r, async: !1 })
          }
          return e
        }
    },
    (t, e, n) => {
      n.d(e, { runScript: () => i })
      var r = n(21),
        i = function (t, e) {
          var n = r.TAGGED_VERSION
          return new Promise(function (r, i) {
            var o
            null == e && (e = 8e3),
              ((o = document.createElement('script')).src = t),
              (o.async = !0),
              (o.type = 'text/javascript'),
              /https?:\/\/fast\.wistia\./.test(o.src) &&
                '' !== n &&
                n.length > 0 &&
                (o.src = ''.concat(o.src, '@').concat(n))
            var a = null,
              s = !1,
              u = function () {
                ;(o.onerror = o.onreadystatechange = o.onload = null),
                  clearTimeout(a),
                  clearTimeout(l),
                  (a = setTimeout(function () {
                    o && o.parentNode && o.parentNode.removeChild(o)
                  }, 500))
              },
              c = function () {
                var t = o.readyState
                s ||
                  (t && !/loaded|complete/.test(t)) ||
                  ((s = !0),
                  setTimeout(function () {
                    r(), u()
                  }, 1))
              },
              l = setTimeout(function () {
                ;(s = !0), u(), i(new Error('timeout'))
              }, e)
            ;(o.onerror = function (t) {
              ;(s = !0), u(), i(t)
            }),
              (o.onreadystatechange = c),
              (o.onload = c),
              (document.body || document.head).appendChild(o)
          })
        }
    },
    (t, e, n) => {
      n.d(e, {
        EMBED_HOST: () => s,
        PROD_EMBED_HOST: () => l,
        PROD_FASTLY_SSL_HOST: () => h,
        PROD_FAST_HOSTNAME_COM: () => c,
        PROD_FAST_HOSTNAME_NET: () => u,
        PROD_SSL_EMBED_HOST: () => f,
        SSL_EMBED_HOST: () => d,
        TAGGED_VERSION: () => p,
        cdnFastWistiaComHost: () => m,
        cdnFastWistiaNetHost: () => g,
        deliveryHost: () => y,
        eV1Host: () => _,
        eV1HostWithPort: () => w,
        eV1Protocol: () => O,
        mediaDataHost: () => k,
        metricsHost: () => E
      })
      var r = n(10),
        i = n(22),
        o = n(23),
        a =
          ((0, o.appHostname)('app'),
          (0, o.appHostname)('fast-protected'),
          (0, o.appHostname)('fast')),
        s = 'embed.wistia.com',
        u = 'fast.wistia.net',
        c = 'fast.wistia.com',
        l = 'embed.wistia.com',
        f = 'embed-ssl.wistia.com',
        h = 'embed-fastly.wistia.com',
        d = 'embed-ssl.wistia.com',
        p = '',
        v =
          'undefined' != typeof window && r.root === window && r.root.location
            ? r.root.location.protocol
            : 'https:',
        y = function () {
          return (function (t, e, n) {
            return 'https:' === t ? e : n
          })(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            d,
            s
          )
        },
        m = function (t) {
          return t || a
        },
        g = function () {
          return 'fast.'.concat('wistia.net')
        },
        b = (function () {
          for (
            var t = document.getElementsByTagName('script'), e = 0;
            e < t.length;
            e++
          ) {
            var n = t[e]
            if (n.src) {
              var r = new i.Url(n.src),
                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                a =
                  r.host === m() ||
                  r.host === g() ||
                  'fast-canary.wistia.net' === r.host,
                s = 'https:' === location.protocol && 'https:' === r.protocol,
                u = '' === r.protocol || null == r.protocol,
                c = s || u || 'http:' === location.protocol,
                l = !n.readyState || /loaded|complete/.test(n.readyState)
              if (o && a && c && l) return r
            }
          }
          return new i.Url(
            ''.concat((0, i.proto)(), '//').concat(g(), '/E-v1.js')
          )
        })(),
        _ = function () {
          return b.host
        },
        w = function () {
          return b.port ? ''.concat(_(), ':').concat(b.port) : _()
        },
        O = function () {
          return b.protocol
        },
        k = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return t.embedHost ? T(t.embedHost) : w()
        },
        E = function () {
          return 'pipedream.'.concat('wistia.com')
        },
        S = [].concat(
          ['wistia.net', 'wistia.com'],
          [
            'wistia.mx',
            'wistia.dev',
            'wistia.tech',
            'wistia.am',
            'wistia.se',
            'wistia.io',
            'wistia.st'
          ]
        ),
        P = new RegExp(
          '('.concat(
            S.map(function (t) {
              return '\\.'.concat(t.replace('.', '\\.'))
            }).join('|'),
            ')$'
          )
        ),
        T = function (t) {
          return t && P.test(t) ? t : w()
        }
    },
    (t, e, n) => {
      n.d(e, { Url: () => l, proto: () => o })
      var r = n(4),
        i = n(13),
        o = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : location.href
          return /^http:\/\//.test(t) ? 'http:' : 'https:'
        },
        a = function (t) {
          if (null == t) return t
          var e
          try {
            e = decodeURIComponent(t)
          } catch (n) {
            setTimeout(function () {
              i.wlog.notice(n)
            }, 50),
              (e = t)
          }
          return e
        },
        s = function (t) {
          for (var e = t[0], n = 1; n < t.length; n++)
            e += '['.concat(t[n], ']')
          return e
        },
        u = function (t) {
          return t.match(/([\w\-_]+)/g)
        },
        c = ['protocol', 'host', 'port', 'params', 'path'],
        l = function (t) {
          var e = this
          return (
            (e.params = {}),
            (e.path = []),
            (e.host = ''),
            'object' == typeof t ? e.fromOptions(t) : t && e.fromRaw(t),
            e
          )
        },
        f = l.prototype
      ;(f.fromOptions = function (t) {
        for (var e = 0; e < c.length; e++) {
          var n = c[e]
          null != t[n] && (this[n] = t[n])
        }
        return this
      }),
        (f.fromRaw = function (t) {
          var e
          return (
            (this.rawUrl = t),
            (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) &&
              (this.protocol = e[1] || void 0),
            (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0),
            (e =
              t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) &&
              this.setPath(e[1]),
            (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)),
            (e = t.match(/\?([^#]+)/)) &&
              ((this.rawParams = e[1]),
              (this.params = (function (t) {
                var e = {}
                if (!t) return e
                for (
                  var n = t.split('&'),
                    o = function () {
                      var t = n[s].split('='),
                        o = t[0],
                        c = t[1]
                      try {
                        o = u(decodeURIComponent(o)) || ''
                      } catch (t) {
                        setTimeout(function () {
                          i.wlog.notice(t)
                        }, 50),
                          (o = '')
                      }
                      ;(0, r.cast)(o)
                      var l = (0, r.getDeep)(e, o)
                      if (null != l)
                        if ((0, r.isArray)(l)) l.push(a(c))
                        else {
                          var f = [l]
                          f.push(a(c)), (0, r.setAndPreserveUndefined)(e, o, f)
                        }
                      else (0, r.setAndPreserveUndefined)(e, o, a(c))
                    },
                    s = 0;
                  s < n.length;
                  s++
                )
                  o()
                return e
              })(this.rawParams))),
            (e = t.match(/#(.*)$/)) && (this.anchor = e[1]),
            this
          )
        }),
        (f.clone = function () {
          return new l({
            protocol: this.protocol,
            host: this.host,
            port: this.port,
            path: (0, r.clone)(this.path),
            params: (0, r.clone)(this.params),
            anchor: this.anchor
          })
        }),
        (f.ext = function (t) {
          if (null != t) {
            var e = this.ext(),
              n = this.path.length - 1,
              r = new RegExp('\\.'.concat(e), 'g')
            return (
              e && (this.path[n] = ''.concat(this.path[n].replace(r, ''))),
              (this.path[n] = ''.concat(this.path[n], '.').concat(t))
            )
          }
          var i = this.path[this.path.length - 1].match(/\.(.*)$/)
          return (null != i && i[1]) || null
        }),
        (f.isRelative = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window.location,
            e = this.protocol,
            n = this.host
          return !(
            (null != e && '' !== e && e !== t.protocol) ||
            (n && n !== t.hostname)
          )
        }),
        (f.toString = function () {
          return this.isRelative() ? this.relative() : this.absolute()
        }),
        (f.absolute = function () {
          var t = ''
          null != this.protocol && (t = this.protocol)
          var e = ''
          return (
            null != this.port && (e = ':'.concat(this.port)),
            ''
              .concat(t, '//')
              .concat(this.host || location.host)
              .concat(e)
              .concat(this.relative())
          )
        }),
        (f.relative = function () {
          var t,
            e = ''
          this.path.length > 0 &&
            ('string' == typeof (t = this.path) && (t = t.split('/')),
            (e = null == t ? '' : '/'.concat(t.join('/'))),
            this._hasTrailingSlash && (e += '/'))
          var n,
            i,
            o = '?'.concat(
              ((n = this.params),
              (i = []),
              (0, r.eachLeaf)(n, function (t, e) {
                null != t
                  ? i.push(
                      ''
                        .concat(encodeURIComponent(s(e)), '=')
                        .concat(encodeURIComponent(t))
                    )
                  : i.push(encodeURIComponent(s(e)))
              }),
              i.join('&'))
            )
          return (
            1 === o.length && (o = ''),
            ''.concat(e).concat(o).concat(this.relativeAnchor())
          )
        }),
        (f.authority = function () {
          var t = null != this.port ? ':'.concat(this.port) : ''
          return ''.concat(this.host).concat(t)
        }),
        (f.relativeProtocol = function () {
          var t = ''
          return (
            null != this.port && (t = ':'.concat(this.port)),
            '//'.concat(this.host).concat(t).concat(this.relative())
          )
        }),
        (f.relativeAnchor = function () {
          var t = ''
          return (
            null != this.anchor && (t = '#'.concat(this.anchor)), ''.concat(t)
          )
        }),
        (f.setPath = function (t) {
          ;(this.rawPath = t),
            (this._hasTrailingSlash = /\/$/.test(this.rawPath)),
            (this.path = (function (t) {
              var e = []
              if (null == t) return e
              for (var n = t.split(/\/+/), r = 0; r < n.length; r++) {
                var i = n[r]
                null != i && '' !== i && e.push(i)
              }
              return e
            })(this.rawPath))
        }),
        (l.create = function (t) {
          return new l(t)
        })
      l.create
      l.parse = function (t) {
        return new l(t)
      }
      l.parse
    },
    (t, e, n) => {
      n.d(e, { appHostname: () => r })
      var r = function () {
        return ''
          .concat(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'app',
            '.'
          )
          .concat('wistia.com')
      }
    },
    (t, e, n) => {
      n.d(e, { seqId: () => i })
      var r = n(11),
        i = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'wistia_',
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            n = r.Wistia._sequenceVal || 1,
            i = ''.concat(t).concat(n).concat(e)
          return (r.Wistia._sequenceVal = n + 1), i
        }
    },
    (t, e, n) => {
      n.d(e, { mediaDataScriptRegExp: () => o, mediaDataUrl: () => i })
      n(10), n(4), n(13), n(19), n(26)
      var r = n(21)
      n(28), n(30)
      var i = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = (0, r.mediaDataHost)(e)
          return ''
            .concat((0, r.eV1Protocol)(), '//')
            .concat(n, '/embed/medias/')
            .concat(t, '.json')
        },
        o = function (t) {
          var e = 'https:' === location.protocol ? 'https' : 'https?'
          return new RegExp(
            '^('
              .concat(e, ':)?//((')
              .concat((0, r.cdnFastWistiaComHost)().replace('.', '\\.'), ')|(')
              .concat(
                (0, r.cdnFastWistiaNetHost)().replace('.', '\\.'),
                '))/embed/medias/'
              )
              .concat(t, '\\.jsonp\\??')
          )
        }
    },
    (t, e, n) => {
      n.d(e, {
        cacheMediaData: () => s,
        getMediaDataFromCache: () => a,
        uncacheMediaData: () => u
      })
      var r = n(27),
        i = n(11),
        o = n(13),
        a = function (t) {
          var e = i.Wistia._remoteData.get('media_'.concat(t))
          return (0, r.isNil)(e)
            ? null
            : ((function (t, e) {
                if (null == t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  )
                return Object.prototype.hasOwnProperty.call(Object(t), e)
              })(e, 'error') &&
                o.wlog.error(
                  'Received cached error response instead of MediaData when retrieving cached mediaData for '.concat(
                    t
                  )
                ),
              e)
        },
        s = function (t, e) {
          i.Wistia._remoteData.set('media_'.concat(t), e)
        },
        u = function (t) {
          i.Wistia._remoteData.delete('media_'.concat(t))
        }
    },
    (t, e) => {
      e.isBoolean =
        e.isFunction =
        e.isArray =
        e.isNonEmptyRecord =
        e.isRecord =
        e.isNumber =
        e.isEmptyString =
        e.isString =
        e.isNotNil =
        e.isNil =
        e.isUndefined =
        e.isNull =
          void 0
      e.isNull = (t) => null === t
      e.isUndefined = (t) => void 0 === t
      e.isNil = (t) => (0, e.isNull)(t) || (0, e.isUndefined)(t)
      e.isNotNil = (t) => !(0, e.isNil)(t)
      e.isString = (t) => 'string' == typeof t
      e.isEmptyString = (t) => (0, e.isString)(t) && '' === t
      e.isNumber = (t) => 'number' == typeof t
      e.isRecord = (t) =>
        (0, e.isNotNil)(t) && 'object' == typeof t && !(t instanceof Array)
      e.isNonEmptyRecord = (t) =>
        (0, e.isRecord)(t) && Object.keys(t).length > 0
      e.isArray = (t) =>
        (0, e.isNotNil)(t) && 'object' == typeof t && t instanceof Array
      e.isFunction = (t) => (0, e.isNotNil)(t) && 'function' == typeof t
      e.isBoolean = (t) => (0, e.isNotNil)(t) && 'boolean' == typeof t
    },
    (t, e, n) => {
      n.d(e, { mediaDataTransforms: () => l })
      var r = n(4),
        i = n(22),
        o = n(9),
        a = n(29)
      function s(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return u(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return u(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(t, e)
                    : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function u(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var c = (0, o.cachedDetect)(),
        l = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = (0, r.assign)({}, t)
          return (
            (n = (function (t) {
              if (
                !0 !==
                (arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
                ).allowOriginalAsMp4
              )
                return t
              var e = t.assets.filter(function (t) {
                return 'original' === t.type
              })[0]
              return (
                (0, a.readyPublicOver400)(t.assets).length > 0 ||
                  (t.assets = [].concat(s(t.assets), [
                    (0, r.assign)({}, e, {
                      display_name: ''.concat(e.display_name, ' copy'),
                      container: 'mp4',
                      codec: 'h264',
                      type: 'mp4_video'
                    })
                  ])),
                t
              )
            })(n, e)),
            (n = (function (t) {
              return (
                t.assets &&
                  c.webp &&
                  (t.assets = t.assets.map(function (t) {
                    if ('still_image' === t.type && Object(t).url) {
                      var e = new i.Url(t.url)
                      e.ext('webp'), (t.url = e.absolute())
                    }
                    return t
                  })),
                t
              )
            })(n)),
            n
          )
        }
    },
    (t, e, n) => {
      n.d(e, {
        READY: () => f,
        filter: () => d,
        findClosestAssetByQuality: () => k,
        nonfailedPublicOver400: () => _,
        readyPublicM3u8s: () => m,
        readyPublicMp3s: () => v,
        readyPublicMp4s: () => y,
        readyPublicOver400: () => b,
        stillUrl: () => x,
        thumbnailAssets: () => P
      })
      var r = n(4),
        i = n(22),
        o = (n(9), n(21)),
        a = n(13),
        s = n(23)
      function u(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return c(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? c(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function c(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var l = Array.prototype.slice,
        f = 2,
        h = ['select', 'sortFn', 'sortBy', 'unique'],
        d = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          if (!t) return []
          t.assets && (t = t.assets),
            (null == e.qualityMin && null == e.qualityMax) ||
              ((t = w(t, e.qualityMin, e.qualityMax)),
              (e = (0, r.except)(e, ['qualityMin', 'qualityMax'])))
          var n = (0, r.only)(e, h),
            i = n.select || (0, r.except)(e, h)
          i && (n.select = i)
          var o = n.select ? (0, r.select)(t, n.select) : (0, r.clone)(t)
          if (
            ((n.sortFn || n.sortBy) &&
              (o = (0, r.sort)(o, n.sortFn || n.sortBy)),
            n.unique)
          ) {
            for (var a = {}, s = 0; s < o.length; s++) {
              var u = o[s],
                c = u[''.concat(n.unique)] || '__undefined__'
              a[c] || (a[c] = u)
            }
            for (var l in ((o = []), a)) o.push(a[l])
          }
          return o
        },
        p = function (t, e) {
          return d(t, e)[0] || null
        },
        v = function (t) {
          return d(t, { ext: 'mp3', status: f, public: !0 })
        },
        y = function (t) {
          return d(t, { container: 'mp4', status: f, public: !0 })
        },
        m = function (t) {
          return d(t, { container: 'm3u8', status: f, public: !0 })
        },
        g = function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n],
              i =
                null != r.opt_vbitrate &&
                r.opt_vbitrate >= 500 &&
                r.opt_vbitrate <= 1e5,
              o = null != r.width && r.width > 400
            ;(i || o) && e.push(r)
          }
          return e
        },
        b = function (t) {
          return g(d(t, { container: /mp4/, public: !0, status: f }))
        },
        _ = function (t) {
          return g(
            d(t, {
              container: /mp4/,
              public: !0,
              status: function (t) {
                return -1 !== t
              }
            })
          )
        },
        w = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 100,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e4
          return d(t, {
            select: function (t) {
              var r = O(t.width, t.height)
              return e <= r && r <= n
            }
          })
        },
        O = function (t, e) {
          if (e > t) {
            var n = t
            ;(t = e), (e = n)
          }
          return (
            t / e < 1.05 && (t = e * (16 / 9)),
            t >= 3740
              ? 2160
              : t >= 2460
                ? 1440
                : t >= 1820
                  ? 1080
                  : t >= 1180
                    ? 720
                    : t >= 860
                      ? 540
                      : t >= 540
                        ? 360
                        : e
          )
        },
        k = function (t, e) {
          var n
          n = '4k' === e ? 2160 : parseInt(e, 10)
          var r = w(t, n, n)[0]
          if (r) return r
          var i = B(t, n, n)
          if (1 === i.length) return i[0]
          var o = I(t),
            a = Math.round(o * n),
            s = u(i, 2),
            c = s[0],
            l = s[1]
          return Math.abs(c.width - a) < Math.abs(l.width - a) ? c : l
        },
        E = function (t) {
          var e = p(t, { type: /^still_image$/, sortBy: 'created_at desc' })
          return (
            e || (e = S(t)),
            e || (e = p(t, { container: /mp4/, sortBy: 'width desc' })),
            e
          )
        },
        S = function (t) {
          return p(t, {
            type: /^channel_still_image$/,
            sortBy: 'created_at desc'
          })
        },
        P = function (t, e) {
          if (e.stillUrl)
            return [{ height: null, url: e.stillUrl, width: null }]
          var n = E(t)
          if (null != e.instantHlsStillAsset && (!n || /mp4/.test(n.container)))
            return [e.instantHlsStillAsset]
          if (!n) return []
          var r = n.width / n.height
          return [320, 640, 960, 1280, 1920, 3840].map(function (e) {
            var n = Math.round(e / r)
            return {
              height: n,
              url: x(t, { videoWidth: e, videoHeight: n, playButton: !1 }),
              width: e
            }
          })
        },
        T = (0, s.appHostname)('fast'),
        x = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = E(t)
          if (n) {
            if (n.status !== f) {
              var a = S()
              return a && a.status === f
                ? a.url
                : '//'.concat(T, '/assets/images/blank.gif')
            }
            var s = (e = (0, r.merge)(
                {
                  aspect: n.width / n.height || 1,
                  stillUrl: n.url,
                  playButton: !1,
                  playerColor: e.playerColor || '636155',
                  videoWidth: n.width || 640,
                  videoHeight: n.height || 360,
                  stillSnap: !0
                },
                e
              )).videoWidth,
              u = e.videoHeight,
              c = new i.Url(e.stillUrl)
            return (
              e.retina &&
                ((c.params.image_play_button_size = '2x'), (s *= 2), (u *= 2)),
              e.stillSnap &&
                ((s = j({ videoWidth: s, stillAssetWidth: n.width || 640 })),
                (u = Math.round(s / e.aspect))),
              L(e.stillUrl)
                ? ('https:' === e.protocol &&
                    ((c.protocol = 'https:'),
                    (c.host =
                      e.embedHost === o.PROD_FAST_HOSTNAME_COM ||
                      e.embedHost === o.PROD_FAST_HOSTNAME_NET
                        ? o.PROD_SSL_EMBED_HOST
                        : o.SSL_EMBED_HOST)),
                  (c.params.image_crop_resized = ''.concat(s, 'x').concat(u)),
                  (null == e.playButton || e.playButton) &&
                    (e.newRoundedIcons
                      ? (c.params.image_play_button_rounded = 1)
                      : (c.params.image_play_button = 1),
                    (c.params.image_play_button_color = ''.concat(
                      ''.concat(e.playerColor).replace(/^#+/, ''),
                      'e0'
                    ))),
                  e.ext && c.ext(e.ext),
                  'bin' === c.ext() && c.ext('jpg'),
                  c.absolute())
                : e.stillUrl
            )
          }
        },
        j = function (t) {
          var e = [640, 960, 1280, 1920, 3840]
          t.stillAssetWidth < 3840 && e.push(t.stillAssetWidth)
          for (var n = [], r = 0; r < e.length; r++) {
            var i = e[r]
            i <= t.stillAssetWidth && n.push(i)
          }
          n.sort(function (t, e) {
            return t - e
          })
          for (var o = 0; o < n.length; o++) {
            var a = n[o]
            if (t.videoWidth <= a) return a
          }
          return Math.max.apply(Math, n)
        },
        A = [
          o.EMBED_HOST,
          o.SSL_EMBED_HOST,
          (0, s.appHostname)('embed'),
          (0, s.appHostname)('prime'),
          (0, s.appHostname)('mixergy-cdn'),
          (0, s.appHostname)('embed-fastly'),
          o.PROD_EMBED_HOST,
          o.PROD_SSL_EMBED_HOST,
          o.PROD_FASTLY_SSL_HOST
        ],
        L = function (t) {
          if (null == t) return !1
          var e = new i.Url(t)
          return !!e.host && A.join(',').indexOf(e.host) >= 0
        },
        C = function (t, e, n) {
          return (
            (n = (0, r.merge)({ container: e, public: !0, status: f }, n)),
            p(t, n)
          )
        },
        W = function (t, e) {
          return C(t, 'mp4', e)
        },
        D = function (t, e) {
          return C(t, 'webm', e)
        },
        M = function (t) {
          return p(t, { type: 'original' })
        },
        I = function (t) {
          var e =
            W(t) ||
            (function (t, e) {
              return C(t, 'm3u8', e)
            })(t) ||
            D(t) ||
            M(t)
          return e && e.height ? e.width / e.height : 640 / 360
        },
        B = function (t, e, n) {
          if (0 === t.length) return []
          for (
            var r,
              i,
              o = l.call(t).sort(function (t, e) {
                return O(t.width, t.height) - O(e.width, e.height)
              }),
              s = 0;
            s < o.length;
            s++
          ) {
            var u = o[s],
              c = O(u.width, u.height)
            if ((c < e && (r = u), c >= n)) {
              i = u
              break
            }
          }
          var f = []
          return (
            r && f.push(r),
            i && f.push(i),
            0 === f.length &&
              (a.wlog.error(
                'nearestOutsideRange: no nearby assets found, using first in list',
                o[0]
              ),
              f.push(o[0])),
            f
          )
        }
    },
    (t, e, n) => {
      n.d(e, { countMetric: () => c })
      var r = n(5),
        i = n(8),
        o = n(31),
        a = n(21),
        s = n(11)
      null == s.Wistia._simpleMetricsCache &&
        (s.Wistia._simpleMetricsCache = {}),
        null == s.Wistia._simpleMetricsDebounceInterval &&
          (s.Wistia._simpleMetricsDebounceInterval = 500)
      var u = s.Wistia._simpleMetricsCache,
        c = function (t) {
          return f(
            'count',
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          )
        },
        l = function () {
          if ((0, o.isVisitorTrackingEnabled)()) {
            for (
              var t = 'https://'.concat(
                  (0, a.metricsHost)(),
                  '/mput?topic=metrics'
                ),
                e = arguments.length,
                n = new Array(e),
                r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r]
            return fetch(t, {
              method: 'POST',
              mode: 'cors',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: n.join('\n')
            })
              .then(function (t) {
                t.ok || console.error(t)
              })
              .catch(function (t) {
                console.error(t)
              })
          }
        },
        f = function (t, e, n) {
          var a,
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          if ((0, o.isVisitorTrackingEnabled)())
            try {
              null == u.toMput && (u.toMput = [])
              var f = (0, r.assign)(
                  { type: t, key: e, value: null != n ? n : null },
                  c
                ),
                h = JSON.stringify(
                  f,
                  ((a = new WeakSet()),
                  function (t, e) {
                    if ('object' == typeof e && null !== e) {
                      if (a.has(e)) return '[Circular]'
                      a.add(e)
                    }
                    return e
                  })
                )
              u.toMput.push(h),
                clearTimeout(s.Wistia._msendTimeout),
                (s.Wistia._msendTimeout = setTimeout(function () {
                  ;(0, i.pageLoaded)(function () {
                    l.apply(undefined, u.toMput), (u.toMput = [])
                  })
                }, s.Wistia._simpleMetricsDebounceInterval))
            } catch (t) {
              console.error(t.message), console.error(t.stack)
            }
        }
    },
    (t, e, n) => {
      n.d(e, { isVisitorTrackingEnabled: () => f })
      var r = n(14),
        i = n(32),
        o = n(34),
        a = n(11)
      function s(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return u(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return u(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(t, e)
                    : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function u(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var c
      a.Wistia._visitorTrackingDomain ||
        (a.Wistia._visitorTrackingDomain = location.hostname || ''),
        a.Wistia._visitorTracking ||
          (null !=
            (c = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) &&
            ((0, i.updateWistiaLocalStorage)(function (t) {
              return delete t.visitorTrackingEnabled
            }),
            (a.Wistia._visitorTracking = {}),
            (a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
              isEnabled: c,
              updatedAt: Date.now()
            }),
            (0, i.updateWistiaLocalStorage)(function (t) {
              return (t.visitorTracking = a.Wistia._visitorTracking)
            })),
          (a.Wistia._visitorTracking =
            (0, i.getWistiaLocalStorage)().visitorTracking || {}))
      a.Wistia.consent = function (t) {
        return null == t ? f() : l(t)
      }
      var l = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.Wistia._visitorTrackingDomain
          'default' === t
            ? delete a.Wistia._visitorTracking[e]
            : (a.Wistia._visitorTracking[e] = {
                isEnabled: 'true' === ''.concat(t),
                updatedAt: Date.now()
              }),
            (0, i.updateWistiaLocalStorage)(function (t) {
              return (t.visitorTracking = a.Wistia._visitorTracking)
            }),
            (0, r.globalTrigger)('visitortrackingchange', t),
            s(document.getElementsByTagName('wistia-player')).forEach(
              function (e) {
                e.dispatchEvent(
                  new CustomEvent('visitor-tracking-change', {
                    detail: { isTrackingEnabled: t }
                  })
                )
              }
            )
        },
        f = function () {
          if ('boolean' == typeof a.Wistia._visitorTracking)
            return a.Wistia._visitorTracking
          if (a.Wistia._visitorTracking) {
            var t = (function () {
              if (a.Wistia._visitorTrackingDomain)
                for (
                  var t = a.Wistia._visitorTrackingDomain.split('.');
                  t.length > 0;

                ) {
                  var e = a.Wistia._visitorTracking[t.join('.')],
                    n = e && e.isEnabled
                  if (null != n) return n
                  t.shift()
                }
            })()
            if (null != t) return Boolean(t)
          }
          var e = (0, o.getAllApiHandles)()
          if (a.Wistia.channel && a.Wistia.channel.all)
            try {
              e.push.apply(e, s(a.Wistia.channel.all()))
            } catch (t) {}
          return !e.some(function (t) {
            return !0 === (t._mediaData || t._galleryData || {}).privacyMode
          })
        }
    },
    (t, e, n) => {
      n.d(e, {
        getWistiaLocalStorage: () => a,
        removeWistiaLocalStorage: () => s,
        updateWistiaLocalStorage: () => u
      })
      var r = n(33),
        i = n(11),
        o = 'wistia',
        a = function () {
          return (0, r.getLocalStorage)(o)
        },
        s = function () {
          return (
            (i.Wistia._localStorage = (0, r.removeLocalStorage)(o)),
            i.Wistia._localStorage
          )
        },
        u = function (t) {
          return (
            (i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t)),
            i.Wistia._localStorage
          )
        }
    },
    (t, e, n) => {
      n.d(e, {
        getLocalStorage: () => u,
        removeLocalStorage: () => c,
        setLocalStorage: () => l,
        updateLocalStorage: () => f
      })
      var r = n(11),
        i = function (t) {
          setTimeout(function () {
            throw t
          }, 0)
        },
        o = '_namespacedLocalStorage',
        a = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'wistia-test-localstorage'
          if (null != r.Wistia._localStorageWorks)
            return r.Wistia._localStorageWorks
          try {
            var e = localStorage.getItem(t)
            localStorage.removeItem(t),
              localStorage.setItem(t, e),
              localStorage.removeItem(t),
              (r.Wistia._localStorageWorks = !0)
          } catch (t) {
            r.Wistia._localStorageWorks = !1
          }
          return r.Wistia._localStorageWorks
        },
        s = function () {
          return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
        },
        u = function (t) {
          if (!a()) return s()[t] || {}
          if (localStorage[t])
            try {
              return 'null' === localStorage[t]
                ? {}
                : JSON.parse(localStorage[t])
            } catch (t) {
              i(t)
            }
          return {}
        },
        c = function (t) {
          if (a())
            try {
              localStorage.removeItem(t)
            } catch (t) {
              i(t)
            }
          else s()[t] = {}
        },
        l = function (t, e) {
          if (!a()) return null != e && 'object' == typeof e && (s()[t] = e), e
          try {
            ;(s()[t] = e), (localStorage[t] = JSON.stringify(e))
          } catch (t) {
            i(t)
          }
          return e
        },
        f = function (t, e) {
          var n = u(t)
          try {
            e(n)
          } catch (t) {
            i(t)
          }
          return l(t, n)
        }
    },
    (t, e, n) => {
      n.d(e, { getAllApiHandles: () => o, getOneApiHandle: () => a })
      n(35)
      var r = n(13),
        i = n(36)
      var o = function () {
          return (
            void 0 === (0, i.wData)('video')
              ? []
              : Object.values((0, i.wData)('video'))
          ).concat(
            void 0 === (0, i.wData)('iframe_api')
              ? []
              : Object.values((0, i.wData)('iframe_api'))
          )
        },
        a = function (t) {
          var e, n, i
          if (void 0 === t)
            return null !== (i = o()[0]) && void 0 !== i ? i : null
          var a = null
          if ('string' == typeof t) {
            var s,
              u = t
            if (
              null ===
              (a =
                null !==
                  (s = document.querySelector(
                    "[unique-id='".concat(u, "']")
                  )) && void 0 !== s
                  ? s
                  : document.getElementById(u))
            ) {
              var c,
                l = o().find(function (t) {
                  var e, n
                  return (null !== (e = t.hashedId()) &&
                    void 0 !== e &&
                    e.startsWith(u)) ||
                    (null !== (n = t.container) &&
                      void 0 !== n &&
                      n.id.startsWith(u))
                    ? t
                    : null
                })
              if ('removed' !== l)
                a =
                  null !== (c = null == l ? void 0 : l.container) &&
                  void 0 !== c
                    ? c
                    : null
            }
          } else if ('number' == typeof t) {
            var f = t,
              h = o()
            f < 0 && (f = h.length + f)
            var d,
              p = h[f]
            if (void 0 !== p && 'removed' !== p)
              a = null !== (d = p.container) && void 0 !== d ? d : null
          } else
            t instanceof HTMLElement
              ? (a = t)
              : r.wlog.error('Unrecognized matcher', t)
          return 'WISTIA-PLAYER' ===
            (null === (e = a) || void 0 === e ? void 0 : e.tagName)
            ? a.deprecatedApiDoNotUse
            : void 0 !==
                  (null === (n = a) || void 0 === n ? void 0 : n.wistiaApi) &&
                'removed' !== a.wistiaApi
              ? a.wistiaApi
              : null
        }
    },
    (t, e, n) => {
      n.d(e, { getAllApiEmbedElements: () => r })
      var r = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'wistia_embed',
          e = document.querySelectorAll(
            'div.'.concat(t, ',span.').concat(t, ',iframe.').concat(t)
          )
        return Array.from(e).map(function (t) {
          var e
          return 'WISTIA-PLAYER' ===
            (null === (e = t.lastChild) || void 0 === e ? void 0 : e.nodeName)
            ? t.lastChild
            : t
        })
      }
    },
    (t, e, n) => {
      n.d(e, { wData: () => o, wRemoveData: () => a })
      var r = n(4),
        i = n(11),
        o = function (t, e) {
          return (
            (0, r.isArray)(t) || (t = t.split('.')),
            null != e && (0, r.setDeep)(i.Wistia, ['_data'].concat(t), e),
            (0, r.getDeep)(i.Wistia, ['_data'].concat(t))
          )
        },
        a = function (t) {
          return (
            (0, r.isArray)(t) || (t = t.split('.')),
            (0, r.unsetDeep)(i.Wistia, ['_data'].concat(t))
          )
        }
    },
    ,
    (t, e, n) => {
      n.d(e, { interNumbersSemiBold: () => r })
      var r = 'WistiaPlayerInterNumbersSemiBold, Helvetica, Sans-Serif'
    },
    ,
    (t, e, n) => {
      function r(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                o(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  )
                })
        }
        return t
      }
      function o(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != typeof t || !t) return t
              var n = t[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(t, e || 'default')
                if ('object' != typeof r) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return ('string' === e ? String : Number)(t)
            })(t, 'string')
            return 'symbol' == typeof e ? e : e + ''
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      n.d(e, { standardSvgAttrs: () => a })
      var a = function (t) {
        var e = t.width,
          n = void 0 === e ? 40 : e,
          r = t.height,
          o = void 0 === r ? 34 : r,
          a = t.styleOverride,
          s = void 0 === a ? {} : a,
          u = t.ariaHidden,
          c = void 0 !== u && u,
          l = t.fillColor,
          f = void 0 === l ? '#ffffff' : l
        return {
          x: '0px',
          y: '0px',
          viewBox: '0 0 '.concat(n, ' ').concat(o),
          'enable-background': 'new 0 0 '.concat(n, ' ').concat(o),
          'aria-hidden': ''.concat(!!c),
          style: i(
            {
              fill: f,
              height: '100%',
              left: 0,
              strokeWidth: 0,
              top: 0,
              width: '100%'
            },
            s
          )
        }
      }
    },
    ,
    ,
    (t, e, n) => {
      n.d(e, {
        defineTranslations: () => l,
        getLanguage: () => c,
        getTranslation: () => d
      })
      var r = n(4),
        i = (n(44), n(11)),
        o = (i.Wistia.languages = i.Wistia.languages || {}),
        a = (i.Wistia.translations = i.Wistia.translations || {})
      i.Wistia._translationPromises || (i.Wistia._translationPromises = {})
      var s,
        u = function (t, e, n) {
          ;(o[t] = { code: t, text: h(e) }), n && l(t, n)
        },
        c = function (t) {
          return o[t]
        },
        l = function (t, e) {
          if (null == o[t])
            throw new Error(
              'Must define a language with code '.concat(
                t,
                ' before defining its translations.'
              )
            )
          var n = a[t]
          n ? (0, r.merge)(n, e) : (a[t] = (0, r.clone)(e))
        },
        f = (i.Wistia.cachedDecodings = i.Wistia.cachedDecodings || {}),
        h = function (t) {
          return (
            s || (s = document.createElement('textarea')),
            null != f[t] ? f[t] : ((s.innerHTML = t), (f[t] = s.value), s.value)
          )
        },
        d = function (t, e) {
          var n
          return (
            (n = a[t] && a[t][e] ? a[t][e] : a['en-US'][e]),
            h(
              (function (t) {
                return null == t ? '?' : t
              })(n)
            )
          )
        }
      u('en-US', 'English'),
        l('en-US', {
          PLAY: 'Play',
          PLAY_BUTTON_LIVE_NOT_STARTED: 'Livestream has not started',
          PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: 'Play Video',
          PLAY_BUTTON_TITLE_WHEN_PLAYING: 'Pause',
          REWATCH: 'Rewatch',
          SKIP: 'Skip'
        })
    },
    (t, e, n) => {
      n.d(e, { dynamicImport: () => a })
      var r = n(21)
      function i() {
        i = function () {
          return e
        }
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          s = a.iterator || '@@iterator',
          u = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag'
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[e]
          )
        }
        try {
          l({}, '')
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function f(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            s = new L(r || [])
          return o(a, '_invoke', { value: T(t, n, s) }), a
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        e.wrap = f
        var d = 'suspendedStart',
          p = 'suspendedYield',
          v = 'executing',
          y = 'completed',
          m = {}
        function g() {}
        function b() {}
        function _() {}
        var w = {}
        l(w, s, function () {
          return this
        })
        var O = Object.getPrototypeOf,
          k = O && O(O(C([])))
        k && k !== n && r.call(k, s) && (w = k)
        var E = (_.prototype = g.prototype = Object.create(w))
        function S(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var u = h(t[i], t, o)
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value
              return l && 'object' == typeof l && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, s)
                    },
                    function (t) {
                      n('throw', t, a, s)
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      ;(c.value = t), a(c)
                    },
                    function (t) {
                      return n('throw', t, a, s)
                    }
                  )
            }
            s(u.arg)
          }
          var i
          o(this, '_invoke', {
            value: function (t, r) {
              function o() {
                return new e(function (e, i) {
                  n(t, r, e, i)
                })
              }
              return (i = i ? i.then(o, o) : o())
            }
          })
        }
        function T(e, n, r) {
          var i = d
          return function (o, a) {
            if (i === v) throw Error('Generator is already running')
            if (i === y) {
              if ('throw' === o) throw a
              return { value: t, done: !0 }
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate
              if (s) {
                var u = x(s, r)
                if (u) {
                  if (u === m) continue
                  return u
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if (i === d) throw ((i = y), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              i = v
              var c = h(e, n, r)
              if ('normal' === c.type) {
                if (((i = r.done ? y : p), c.arg === m)) continue
                return { value: c.arg, done: r.done }
              }
              'throw' === c.type &&
                ((i = y), (r.method = 'throw'), (r.arg = c.arg))
            }
          }
        }
        function x(e, n) {
          var r = n.method,
            i = e.iterator[r]
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                x(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            )
          var o = h(i, e.iterator, n.arg)
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
          var a = o.arg
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              m)
        }
        function j(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function A(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function L(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(j, this),
            this.reset(!0)
        }
        function C(e) {
          if (e || '' === e) {
            var n = e[s]
            if (n) return n.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n
                  return (n.value = t), (n.done = !0), n
                }
              return (o.next = o)
            }
          }
          throw new TypeError(typeof e + ' is not iterable')
        }
        return (
          (b.prototype = _),
          o(E, 'constructor', { value: _, configurable: !0 }),
          o(_, 'constructor', { value: b, configurable: !0 }),
          (b.displayName = l(_, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === b || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), l(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            )
          }),
          (e.awrap = function (t) {
            return { __await: t }
          }),
          S(P.prototype),
          l(P.prototype, u, function () {
            return this
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new P(f(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          S(E),
          l(E, c, 'Generator'),
          l(E, s, function () {
            return this
          }),
          l(E, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = []
            for (var r in e) n.push(r)
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in e) return (t.value = r), (t.done = !1), t
                }
                return (t.done = !0), t
              }
            )
          }),
          (e.values = C),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var n = this
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc')
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                m
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), m
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var i = r.arg
                    A(n)
                  }
                  return i
                }
              }
              throw Error('illegal catch attempt')
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                m
              )
            }
          }),
          e
        )
      }
      function o(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (t) {
          return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
      }
      var a = (function () {
        var t,
          e =
            ((t = i().mark(function t(e) {
              var n,
                o,
                a,
                s,
                u = arguments
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a =
                          null !==
                            (n = (o =
                              u.length > 1 && void 0 !== u[1] ? u[1] : {})
                              .host) && void 0 !== n
                            ? n
                            : (0, r.eV1HostWithPort)()),
                        !(
                          '' !== (s = r.TAGGED_VERSION) &&
                          s.length > 0 &&
                          !0 !== o.mediaData
                        ))
                      ) {
                        t.next = 5
                        break
                      }
                      return t.abrupt(
                        'return',
                        import(
                          ''
                            .concat((0, r.eV1Protocol)(), '//')
                            .concat(a, '/')
                            .concat(e, '@')
                            .concat(s)
                        )
                      )
                    case 5:
                      return t.abrupt(
                        'return',
                        import(
                          ''
                            .concat((0, r.eV1Protocol)(), '//')
                            .concat(a, '/')
                            .concat(e)
                        )
                      )
                    case 6:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })),
            function () {
              var e = this,
                n = arguments
              return new Promise(function (r, i) {
                var a = t.apply(e, n)
                function s(t) {
                  o(a, r, i, s, u, 'next', t)
                }
                function u(t) {
                  o(a, r, i, s, u, 'throw', t)
                }
                s(void 0)
              })
            })
        return function (t) {
          return e.apply(this, arguments)
        }
      })()
    },
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { base64Decode: () => i, unescapeHtml: () => r.unescapeHtml })
      n(7), n(51)
      var r = n(52),
        i =
          (n(11),
          function (t) {
            return decodeURIComponent(
              atob(t)
                .split('')
                .map(function (t) {
                  return '%'.concat(
                    '00'.concat(t.charCodeAt(0).toString(16)).slice(-2)
                  )
                })
                .join('')
            )
          })
    },
    (t, e, n) => {},
    (t, e, n) => {
      n.d(e, { unescapeHtml: () => i })
      var r = {},
        i = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          if (!t) return ''
          if (e.cache) {
            var n = r[t]
            if (r[t]) return n
          }
          var i,
            o = document.createElement('div')
          return (
            (o.innerHTML = t
              .toString()
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')),
            (i = o.childNodes.length > 0 ? o.childNodes[0].nodeValue : ''),
            e.cache && (r[t] = i),
            i
          )
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { doTimeout: () => o })
      var r = n(4),
        i = n(11)
      i.Wistia
      null == i.Wistia._timeouts && (i.Wistia._timeouts = {})
      var o = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          ;(0, r.isArray)(t) && (t = t.join('.'))
          var o = u(t)
          if ((a(t, o), e)) {
            var s = i.Wistia._timeouts[o]
            null == s && (s = i.Wistia._timeouts[o] = {})
            var c = setTimeout(function () {
              delete s[t], e()
            }, n)
            return (s[t] = c), c
          }
          return i.Wistia._timeouts[o][t]
        },
        a = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null
          if (
            ((0, r.isArray)(t) && (t = t.join('.')),
            '__global__' === (n = n || u(t)) && (e = i.Wistia._timeouts[t]))
          )
            for (var o in e) {
              var a = e[o]
              clearTimeout(a), delete e[o]
            }
          if ((e = i.Wistia._timeouts[n]))
            for (var c in e) {
              var l = e[c]
              !c.indexOf ||
                0 !== c.indexOf(t) ||
                (c.length !== t.length && '.' !== c.charAt(t.length)) ||
                (clearTimeout(l), delete e[c])
            }
          i.Wistia.blockSweepTimeouts ||
            ((i.Wistia.blockSweepTimeouts = !0),
            setTimeout(s, 0),
            setTimeout(function () {
              i.Wistia.blockSweepTimeouts = !1
            }, 5e3))
        },
        s = function () {
          for (var t in i.Wistia._timeouts) {
            var e = i.Wistia._timeouts[t]
            ;(0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
          }
        },
        u = function (t) {
          var e = t.indexOf('.')
          return e > 0 ? t.substring(0, e) : '__global__'
        }
    },
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { flexibleDuration: () => o, secondsConverter: () => i })
      n(71), n(27)
      var r = function (t) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = ''.concat(t);
            n.length < e;

          )
            n = '0'.concat(n)
          return n
        },
        i = function (t, e) {
          var n = 0,
            r = 0,
            i = 0,
            o = t,
            a = e.includes('h'),
            s = e.includes('m')
          return (
            a && o > 0 && ((n += Math.floor(o / 3600)), (o %= 3600)),
            s && o > 0 && ((r += Math.floor(o / 60)), (o %= 60)),
            (i = Math.round(o)),
            a && 60 === r && ((n += 1), (r = 0)),
            s && 60 === i && ((r += 1), (i = 0)),
            { hours: n, minutes: r, seconds: i }
          )
        },
        o = function (t) {
          var e = i(t, 'hms'),
            n = e.hours,
            o = e.minutes,
            a = e.seconds
          return 0 === n
            ? ''.concat(o, ':').concat(r(a, 2))
            : ''.concat(n, ':').concat(r(o, 2), ':').concat(r(a, 2))
        }
    },
    (t, e) => {
      e.toSeconds = e.end = e.parse = e.pattern = void 0
      var n = '\\d+',
        r = ''.concat(n, '(?:[\\.,]').concat(n, ')?'),
        i = '('
          .concat(n, 'Y)?(')
          .concat(n, 'M)?(')
          .concat(n, 'W)?(')
          .concat(n, 'D)?'),
        o = 'T('.concat(r, 'H)?(').concat(r, 'M)?(').concat(r, 'S)?'),
        a = 'P(?:'.concat(i, '(?:').concat(o, ')?)'),
        s = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
        u = Object.freeze({
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      e.pattern = new RegExp(a)
      e.parse = function (t) {
        var n = t.replace(/,/g, '.').match(e.pattern)
        if (!n) throw new RangeError('invalid duration: '.concat(t))
        var r = n.slice(1)
        if (
          0 ===
          r.filter(function (t) {
            return null != t
          }).length
        )
          throw new RangeError('invalid duration: '.concat(t))
        if (
          r.filter(function (t) {
            return /\./.test(t || '')
          }).length > 1
        )
          throw new RangeError('only the smallest unit can be fractional')
        return r.reduce(function (t, e, n) {
          return (t[s[n]] = parseFloat(e || '0') || 0), t
        }, {})
      }
      e.end = function (t, e) {
        void 0 === e && (e = new Date())
        var n = Object.assign({}, u, t),
          r = e.getTime(),
          i = new Date(r)
        i.setFullYear(i.getFullYear() + n.years),
          i.setMonth(i.getMonth() + n.months),
          i.setDate(i.getDate() + n.days)
        var o = 3600 * n.hours * 1e3,
          a = 60 * n.minutes * 1e3
        return (
          i.setMilliseconds(i.getMilliseconds() + 1e3 * n.seconds + o + a),
          i.setDate(i.getDate() + 7 * n.weeks),
          i
        )
      }
      ;(e.toSeconds = function (t, n) {
        void 0 === n && (n = new Date())
        var r = Object.assign({}, u, t),
          i = n.getTime(),
          o = new Date(i),
          a = (0, e.end)(r, o),
          s = 60 * (n.getTimezoneOffset() - a.getTimezoneOffset())
        return (a.getTime() - o.getTime()) / 1e3 + s
      }),
        e.end,
        e.toSeconds,
        e.pattern,
        e.parse
    },
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { Color: () => h })
      var r = n(76)
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, o(r.key), r)
        }
      }
      function o(t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, e || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === e ? String : Number)(t)
        })(t, 'string')
        return 'symbol' == typeof e ? e : e + ''
      }
      var a = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
        s =
          /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
        u = /^\d+(\.\d+)*%$/,
        c = /([0-9a-f])/gi,
        l = function (t) {
          return u.test(t) ? 2.55 * parseFloat(t) : t
        },
        f = function (t, e, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6
              ? t + 6 * (e - t) * n
              : n < 0.5
                ? e
                : n < 2 / 3
                  ? t + (e - t) * (2 / 3 - n) * 6
                  : t
          )
        },
        h = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
              e instanceof t
                ? ((this.r = e.r),
                  (this.g = e.g),
                  (this.b = e.b),
                  (this.a = e.a))
                : e
                  ? this.parse(e)
                  : ((this.r = this.g = this.b = 0), (this.a = 1))
          }
          return (
            (e = t),
            (n = [
              {
                key: 'parse',
                value: function (t) {
                  var e
                  if (Array.isArray(t))
                    (this.r = t[0]),
                      (this.g = t[1]),
                      (this.b = t[2]),
                      (this.a = null !== (e = t[3]) && void 0 !== e ? e : 1)
                  else if (a.test(t)) {
                    var n = (t = String(t)).replace(/^#/, '')
                    ;(3 !== n.length && 4 !== n.length) ||
                      (n = n.replace(c, '$1$1')),
                      (this.r = parseInt(n.substr(0, 2), 16)),
                      (this.g = parseInt(n.substr(2, 2), 16)),
                      (this.b = parseInt(n.substr(4, 2), 16)),
                      8 === n.length
                        ? (this.a = parseInt(n.substr(6, 2), 16) / 255)
                        : (this.a = 1)
                  } else if (s.test(t)) {
                    var r = (t = String(t)).match(s)
                    ;(this.r = parseFloat(l(r[1]))),
                      (this.g = parseFloat(l(r[2]))),
                      (this.b = parseFloat(l(r[3]))),
                      r[4] ? (this.a = parseFloat(r[4])) : (this.a = 1)
                  }
                  return this
                }
              },
              {
                key: 'clone',
                value: function () {
                  return new t(this)
                }
              },
              {
                key: '_hslFromRgb',
                value: function () {
                  var t = (0, r.rgbToHsl)([this.r, this.g, this.b]),
                    e = t.hue,
                    n = t.saturation,
                    i = t.lightness
                  return (this._h = e), (this._s = n), (this._l = i), this
                }
              },
              {
                key: '_rgbFromHsl',
                value: function () {
                  var t = this._h / 360,
                    e = this._s / 100,
                    n = this._l / 100,
                    r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                    i = 2 * n - r
                  return (
                    (this.r = 255 * f(i, r, t + 1 / 3)),
                    (this.g = 255 * f(i, r, t)),
                    (this.b = 255 * f(i, r, t - 1 / 3)),
                    this
                  )
                }
              },
              {
                key: 'blendChannel',
                value: function (t, e, n, r) {
                  return r
                    ? ((this[t] = Math.sqrt(
                        Math.pow(this[t], 2) * (1 - n) + Math.pow(e, 2) * n
                      )),
                      this)
                    : ((this[t] = n * e + (1 - n) * this[t]), this)
                }
              },
              {
                key: 'blend',
                value: function (e, n, r) {
                  return (
                    (e = new t(e)),
                    this.blendChannel('r', e.r, n, r),
                    this.blendChannel('g', e.g, n, r),
                    this.blendChannel('b', e.b, n, r),
                    this
                  )
                }
              },
              {
                key: 'getContrastRatio',
                value: function (e) {
                  return (0, r.getContrast)(
                    this.toHexWithHash(),
                    new t(e).toHexWithHash()
                  )
                }
              },
              {
                key: 'hasAccessibleContrast',
                value: function (t, e) {
                  return (
                    this.getContrastRatio(t) >= r.colorContrastRatiosByShape[e]
                  )
                }
              },
              {
                key: 'hue',
                value: function () {
                  return this._hslFromRgb(), this._h
                }
              },
              {
                key: 'lightenChannel',
                value: function (t, e) {
                  return (
                    (this[t] += e),
                    this[t] < 0
                      ? (this[t] = 0)
                      : this[t] > 255 && (this[t] = 255),
                    this
                  )
                }
              },
              {
                key: 'lighten',
                value: function (t) {
                  return (
                    this.looksLikePercent(t)
                      ? this.lightness(this.lightness() + parseFloat(t))
                      : (this.lightenChannel('r', t),
                        this.lightenChannel('g', t),
                        this.lightenChannel('b', t)),
                    this
                  )
                }
              },
              {
                key: 'darken',
                value: function (t) {
                  return 'string' == typeof t
                    ? this.lighten('-'.concat(t))
                    : this.lighten(-t)
                }
              },
              {
                key: 'looksLikePercent',
                value: function (t) {
                  return /^-?\d+(\.\d+)?%$/.test(t)
                }
              },
              {
                key: 'lightness',
                value: function (t) {
                  return (
                    this._hslFromRgb(),
                    null != t
                      ? ((this._l = Math.max(0, Math.min(100, t))),
                        this._rgbFromHsl(),
                        this)
                      : this._l
                  )
                }
              },
              {
                key: 'saturation',
                value: function (t) {
                  return (
                    this._hslFromRgb(),
                    null != t
                      ? ((this._s = Math.max(0, Math.min(100, t))),
                        this._rgbFromHsl(),
                        this)
                      : this._s
                  )
                }
              },
              {
                key: 'setHue',
                value: function (t) {
                  if ((this._hslFromRgb(), null != t))
                    return (
                      (this._h = Math.max(0, Math.min(360, t))),
                      this._rgbFromHsl(),
                      this
                    )
                }
              },
              {
                key: 'shade',
                value: function (t, e) {
                  return this.blend('#000000', t, e)
                }
              },
              {
                key: 'grayLevel',
                value: function () {
                  return (
                    (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / 255
                  )
                }
              },
              {
                key: 'tint',
                value: function (t, e) {
                  return this.blend('#ffffff', t, e)
                }
              },
              {
                key: 'whiteLevel',
                value: function () {
                  return Math.min(Math.min(this.r, this.g), this.b)
                }
              },
              {
                key: 'getRelativeLuminance',
                value: function () {
                  var t = function (t) {
                    var e = 0.003921569 * t
                    return e <= 0.03928
                      ? e / 12.92
                      : Math.pow((e + 0.055) / 1.055, 2.4)
                  }
                  return (
                    0.2126 * t(this.r) + 0.7152 * t(this.g) + 0.0722 * t(this.b)
                  )
                }
              },
              {
                key: 'isDark',
                value: function (t) {
                  return t
                    ? this.getRelativeLuminance() < 0.15
                    : this.grayLevel() <= 0.4
                }
              },
              {
                key: 'isLight',
                value: function (t) {
                  return t
                    ? this.getRelativeLuminance() >= 0.8
                    : this.grayLevel() > 0.4
                }
              },
              {
                key: 'isGrayscale',
                value: function () {
                  return this.r === this.g && this.g === this.b
                }
              },
              {
                key: 'distanceFrom',
                value: function (t) {
                  return Math.sqrt(
                    Math.pow(this.r - t.r, 2) +
                      Math.pow(this.g - t.g, 2) +
                      Math.pow(this.b - t.b, 2)
                  )
                }
              },
              {
                key: 'channelDominance',
                value: function () {
                  var t = this
                  return ['r', 'g', 'b'].sort(function (e, n) {
                    return t[n] - t[e]
                  })
                }
              },
              {
                key: 'alpha',
                value: function (t) {
                  return null != t ? ((this.a = t), this) : this.a
                }
              },
              {
                key: 'red',
                value: function (t) {
                  return null != t ? ((this.r = t), this) : this.r
                }
              },
              {
                key: 'green',
                value: function (t) {
                  return null != t ? ((this.g = t), this) : this.g
                }
              },
              {
                key: 'blue',
                value: function (t) {
                  return null != t ? ((this.b = t), this) : this.b
                }
              },
              {
                key: 'toHex',
                value: function () {
                  var t = Math.round(this.r).toString(16),
                    e = Math.round(this.g).toString(16),
                    n = Math.round(this.b).toString(16)
                  return (
                    1 === t.length && (t = '0'.concat(t)),
                    1 === e.length && (e = '0'.concat(e)),
                    1 === n.length && (n = '0'.concat(n)),
                    ''.concat(t).concat(e).concat(n)
                  )
                }
              },
              {
                key: 'toHexWithAlpha',
                value: function () {
                  var t = Math.round(255 * this.a).toString(16)
                  return (
                    1 === t.length && (t = '0'.concat(t)),
                    ''.concat(t).concat(this.toHex())
                  )
                }
              },
              {
                key: 'toHexWithHash',
                value: function () {
                  return '#'.concat(this.toHex())
                }
              },
              {
                key: 'toRgb',
                value: function () {
                  return 'rgb('
                    .concat(Math.round(this.r), ',')
                    .concat(Math.round(this.g), ',')
                    .concat(Math.round(this.b), ')')
                }
              },
              {
                key: 'toRgba',
                value: function () {
                  return 'rgba('
                    .concat(Math.round(this.r), ',')
                    .concat(Math.round(this.g), ',')
                    .concat(Math.round(this.b), ',')
                    .concat(this.a, ')')
                }
              },
              {
                key: 'toRgbaOrHex',
                value: function () {
                  return this.toRgba()
                }
              },
              {
                key: 'toPercent',
                value: function () {
                  return 'rgba('
                    .concat((this.r / 255) * 100, '%,')
                    .concat((this.g / 255) * 100, '%,')
                    .concat((this.b / 255) * 100, '%,')
                    .concat(this.a, ')')
                }
              },
              {
                key: 'toIeGradient',
                value: function () {
                  return "progid:DXImageTransform.Microsoft.gradient(startColorStr='#"
                    .concat(this.toHexWithAlpha(), "', endColorStr='#")
                    .concat(this.toHexWithAlpha(), "')")
                }
              },
              {
                key: 'toString',
                value: function () {
                  return this.toPercent()
                }
              }
            ]) && i(e.prototype, n),
            o && i(e, o),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          )
          var e, n, o
        })()
    },
    (t, e, n) => {
      n.d(e, {
        colorContrastRatiosByShape: () => o,
        getContrast: () => s,
        rgbToHsl: () => a
      })
      var r = n(27),
        i = n(75),
        o =
          (n(77),
          { nonText: 3, largeText: 3, paragraphText: 4.5, smallText: 5.5 }),
        a = function (t) {
          var e = t
          if (t instanceof i.Color) {
            if ((0, r.isNil)(t.r) || (0, r.isNil)(t.g) || (0, r.isNil)(t.b))
              throw new Error('Color does not contain required RGB values')
            e = [t.r, t.g, t.b]
          } else if ('string' == typeof t) {
            var n = new i.Color(t)
            if ((0, r.isNil)(n.r) || (0, r.isNil)(n.g) || (0, r.isNil)(n.b))
              throw new Error('Color does not contain required RGB values')
            e = [n.r, n.g, n.b]
          }
          var o = e[0] / 255,
            a = e[1] / 255,
            s = e[2] / 255,
            u = Math.max(o, a, s),
            c = Math.min(o, a, s),
            l = 0,
            f = 0,
            h = (u + c) / 2
          u === c && ((l = 0), (f = 0))
          var d = u - c
          return 0 === d
            ? { hue: l, saturation: f, lightness: 100 * o }
            : ((l =
                u === o
                  ? (a - s) / d + (a < s ? 6 : 0)
                  : u === a
                    ? (s - o) / d + 2
                    : (o - a) / d + 4),
              {
                hue: 360 * (l /= 6),
                saturation: 100 * (f = h > 0.5 ? d / (2 - u - c) : d / (u + c)),
                lightness: 100 * h
              })
        },
        s = function (t, e) {
          var n = new i.Color(t),
            r = new i.Color(e),
            o = n.getRelativeLuminance(),
            a = r.getRelativeLuminance()
          return o > a ? (o + 0.05) / (a + 0.05) : (a + 0.05) / (o + 0.05)
        }
    },
    (t, e, n) => {
      n.d(e, { reportError: () => a })
      var r = n(27),
        i = n(31),
        o = n(11),
        a = function (t, e, n) {
          try {
            if (!o.Wistia.isSentryInitialized) return
            var a = (function (t) {
              switch (t) {
                case 'carousel':
                case 'playlist':
                  return 1
                case 'channel':
                case 'form':
                case 'transcript':
                  return 0.25
                default:
                  return 1e-4
              }
            })(t)
            false
            var s = !1,
              u = (0, r.isNil)(window.crypto) ? window.msCrypto : window.crypto
            if (void 0 !== u)
              s = u.getRandomValues(new Uint32Array(1))[0] / 4294967296 < a
            else s = Math.random() < a
            if (s) {
              if ((0, i.isVisitorTrackingEnabled)()) {
                var c
                null === (c = window.Sentry) ||
                  void 0 === c ||
                  c.withScope(function (i) {
                    var o
                    i.setTag('product', t),
                      (0, r.isNonEmptyRecord)(n) && i.setTags(n),
                      null === (o = window.Sentry) ||
                        void 0 === o ||
                        o.captureException(e)
                  })
              }
            } else console.error(e)
          } catch (t) {
            console.error(t)
          }
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { buildContext: () => E, choosePlayer: () => P })
      var r = n(4),
        i = n(9),
        o = n(91),
        a = n(92),
        s = n(10),
        u = n(13),
        c = n(29)
      n(11)
      function l(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                h(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  )
                })
        }
        return t
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != typeof t || !t) return t
              var n = t[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(t, e || 'default')
                if ('object' != typeof r) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return ('string' === e ? String : Number)(t)
            })(t, 'string')
            return 'symbol' == typeof e ? e : e + ''
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      var d,
        p = u.wlog.getPrefixedFunctions('judy'),
        v = 'auto',
        y = 'external',
        m = 'html5',
        g = 'notplayable',
        b = 'passwordprotected',
        _ = 'simplehtml5',
        w = 'vulcan-v2',
        O = [w, m, _, y, g, b],
        k = function (t, e, n) {
          var r = t.detect,
            i = t.logger
          H({ mediaData: e, options: n }, r)
          return r.oldandroid
            ? (i.info('external on old android'), y)
            : S(t, w, e)
              ? (i.info('default, ret', w), w)
              : 'Audio' === e.mediaType || 'LiveStream' === e.mediaType
                ? w
                : S(t, m, e)
                  ? (i.info('default, ret', m), m)
                  : (i.info('nothing left, use', y), y)
        },
        E = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = T(t)
          return f(f(f({}, j()), t), {}, { pageUrl: e })
        },
        S = function (t, e, n) {
          return F(t, e) && L(t, e, n)
        },
        P = function (t, e, n) {
          var r = t.detect,
            i = t.logger,
            o = n.playerForce
          i.info('choosePlayer input', e.hashedId)
          var a = x(t, e, n)
          if (
            (o &&
              !U(t, o) &&
              (i.error(
                'Invalid playerForce option: "'.concat(o, '", ignoring')
              ),
              (o = null)),
            a &&
              a !== v &&
              !U(t, a) &&
              (i.error(
                'Invalid playerPreference option: "'.concat(a, '", ignoring')
              ),
              (a = v)),
            i.info('playerPreference is', a),
            o)
          )
            return i.info('"playerForce" used, return', o), o
          if (R(t, n)) return i.info('return', b), b
          if (N(t, e, n)) return i.info('return', g), g
          if (e.protected) return w
          if (a !== v && S(t, a, e)) {
            var s = H({ mediaData: e, options: n }, r)
            return a !== w && s
              ? (i.info("this player doesn't support spherical, return", w), w)
              : (i.info('"playerPreference" used, return', a), a)
          }
          return i.info('choosing player with no preference'), k(t, e, n)
        },
        T = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return t.pageUrl
            ? t.pageUrl
            : Object(window.FreshUrl).originalUrl
              ? window.FreshUrl.originalUrl
              : window.top === window.self
                ? location.href || ''
                : document.referrer || ''
        },
        x = function (t, e, n) {
          var r = n.playerPreference || n.platformPreference
          return r && r !== v ? (r === m ? (B(t) ? m : w) : r === _ ? m : r) : v
        },
        j = function () {
          return (
            d ||
            (d = {
              detect: (0, r.clone)((0, i.cachedDetect)()),
              inIframe: top !== self,
              location: window.location,
              logger: p,
              pageUrl: location.href,
              silenceGlobalWarnings: s.root.wistiaSilenceGlobalWarnings,
              userAgent: navigator.userAgent
            })
          )
        },
        A = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          return !1 !== n.instantHls && e.instantHlsAssetsReady && q(t, e, n)
        },
        L = function (t, e, n) {
          if (!U(t, e)) return !1
          if (e === g || e === b) return !0
          var r = n.assets
          if (e === w) return A(t, n) || C(r) || W(r)
          if (e === m) return (0, c.readyPublicMp4s)(r).length > 0
          if (e === y) return (0, c.readyPublicMp4s)(r).length > 0
          throw new Error("Unhandled player type '".concat(e, "'"))
        },
        C = function (t) {
          return (
            (0, c.readyPublicMp4s)(t).length > 0 ||
            (0, c.readyPublicM3u8s)(t).length > 0
          )
        },
        W = function (t) {
          return (0, c.readyPublicMp3s)(t).length > 0
        },
        D = function (t) {
          if (
            !1 !==
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
              ).instantHls &&
            t.instantHlsAssetsReady
          )
            return !0
          var e,
            n,
            r =
              ((e = t.assets),
              (n = (0, c.filter)(e, {
                container: 'mp4',
                metadata: function (t) {
                  return t && t.max_bitrate
                },
                public: !0,
                sortBy: 'width desc',
                status: c.READY,
                type: /\b(?!captioned_video)\S+/
              })),
              Boolean(n[0] && n[0].width >= 400))
          return (
            r ||
              (0, o.count)('player/originV2/media-has-no-metadata', 1, {
                hashedId: t.hashedId
              }),
            r
          )
        },
        M = function (t, e) {
          var n = t.pageUrl,
            r = I(n)
          if (null != r) return r
          var i = (0, a.setOrGet)('forceHls')
          return null != i ? i : e.hls
        },
        I = function (t) {
          var e = t && t.match && t.match(/[&?]whls=([^&]+)/),
            n = e && e[1]
          return null != n ? (0, r.cast)(n) : null
        },
        B = function (t) {
          var e = t.detect
          return e.iphone || e.ipad || e.android
        },
        N = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = e.assets
          if (!e.protected && A(t, e, r)) return !1
          var o =
            'Audio' === e.type
              ? 0 == (0, c.readyPublicMp3s)(i).length
              : 0 == (0, c.readyPublicMp4s)(i).length
          if ('LiveStream' === e.mediaType) return !1
          if (
            e.protected &&
            (null === (n = r.authorization) || void 0 === n || !n.jwt)
          )
            return (
              (r.notPlayableOptions = {
                fadeIn: !1,
                message: 'This video is set to private.',
                shouldRefresh: !1
              }),
              !0
            )
          var a = q(t, e, r)
          return e.protected && !1 === a
            ? ((r.notPlayableOptions = {
                fadeIn: !1,
                message: 'This video is not playable.',
                shouldRefresh: !1
              }),
              !0)
            : 0 === i.length ||
                (1 === i.length && 'original' === i[0].type) ||
                o ||
                ((0, c.nonfailedPublicOver400)(i).length > 0 &&
                  0 === (0, c.readyPublicOver400)(i).length)
        },
        R = function (t, e) {
          var n = (0, r.getDeep)(e, 'plugin.passwordProtectedVideo')
          return null != n && !1 !== n.on
        },
        H = function () {
          var t,
            e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
          if (n.options.overrideSpherical) return !1
          var r = String(
              null === (t = n.mediaData) || void 0 === t ? void 0 : t.spherical
            ),
            i = String(
              null === (e = n.opts) || void 0 === e ? void 0 : e.spherical
            )
          return 'true' === r || 'true' === i
        },
        F = function (t, e) {
          return !!U(t, e) && (0, r.indexOf)(V(t), e) >= 0
        },
        U = function (t, e) {
          return (0, r.indexOf)(O, e) >= 0
        },
        q = function (t, e, n) {
          if ('LiveStream' === e.type) return !0
          var r = t.detect
          return (
            (function (t) {
              var e = Boolean(window.Promise)
              return (t.mediaSource || t.nativeHls) && e
            })(r) &&
            !(function (t) {
              return t.chrome && parseInt(t.chrome.version, 10) < 50
            })(r) &&
            !(function (t, e) {
              return t.android && (!1 === e.playsinline || !0 === e.nativeMode)
            })(r, n) &&
            (function (t, e, n) {
              var r = M(t, n)
              return !0 === r || !1 === r ? r : !1 !== e.hls_enabled
            })(t, e, n) &&
            D(e) &&
            ((!Y(t) && !G(t)) || M(t, n))
          )
        },
        V = function (t) {
          var e = t.detect,
            n = [g, b, y]
          return (
            (e.vulcanSupport || e.iphone || e.ipad || e.android) && n.push(w),
            e.video.h264 && n.push(m),
            n
          )
        },
        G = function () {
          return 'function' != typeof (window.URL && window.URL.createObjectURL)
        },
        z = /\s*function\s+XMLHttpRequest\(\)\s*{\s*\[native code\]\s*}\s*/m,
        $ = /\[object XMLHttpRequestConstructor\]/m,
        Y = function () {
          if (
            XMLHttpRequest &&
            XMLHttpRequest.prototype &&
            XMLHttpRequest.prototype.constructor
          ) {
            var t = XMLHttpRequest.prototype.constructor.toString()
            return !(z.test(t) || $.test(t))
          }
          return !0
        }
    },
    (t, e, n) => {
      n.d(e, { count: () => p })
      var r = n(66),
        i = n(13),
        o = n(4),
        a = n(3),
        s = n(22),
        u = n(21),
        c = n(31),
        l = n(11)
      l.Wistia
      null == l.Wistia._metricsCache && (l.Wistia._metricsCache = {})
      var f = l.Wistia._metricsCache,
        h = function (t, e, n) {
          var s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          try {
            null == f.toMput && (f.toMput = []),
              null == f.requestId && (f.requestId = 0)
            var u = (0, o.merge)(
                {
                  type: t,
                  key: e,
                  value: null != n ? n : null,
                  request_id: f.requestId
                },
                s
              ),
              c = JSON.stringify(u)
            i.wlog.debug('send metrics', c),
              f.toMput.push(c),
              (0, r.doTimeout)(
                'metrics.debounce',
                function () {
                  ;(0, a.pageLoaded)(function () {
                    d.apply(undefined, f.toMput),
                      (f.toMput = []),
                      (f.requestId += 1)
                  })
                },
                500
              )
          } catch (t) {
            i.wlog.error(t)
          }
        },
        d = function () {
          if ((0, c.isVisitorTrackingEnabled)()) {
            for (
              var t = ''
                  .concat((0, s.proto)(), '//')
                  .concat((0, u.metricsHost)(), '/mput?topic=metrics'),
                e = arguments.length,
                n = new Array(e),
                r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r]
            return fetch(t, {
              method: 'POST',
              mode: 'cors',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: n.join('\n')
            })
              .then(function (t) {
                t.ok || console.error(t)
              })
              .catch(function (t) {
                console.error(t)
              })
          }
        },
        p = function (t) {
          return h(
            'count',
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          )
        }
    },
    (t, e, n) => {
      n.d(e, { setOrGet: () => a })
      var r = n(32),
        i = n(4),
        o = n(11)
      o.Wistia._localStorage ||
        (o.Wistia._localStorage = (0, r.getWistiaLocalStorage)())
      var a = function (t, e) {
        if (null != e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              ? i.unsetDeep
              : i.setDeep
          return (
            (o.Wistia._localStorage = (0, r.updateWistiaLocalStorage)(
              function (r) {
                return n(r, t, e)
              }
            )),
            e
          )
        }
        return null != t
          ? (0, i.getDeep)(o.Wistia._localStorage, t)
          : o.Wistia._localStorage
      }
      r.removeWistiaLocalStorage
    },
    ,
    (t, e, n) => {
      n.d(e, { removeEmbedOptionStore: () => s, setEmbedOptionStore: () => a })
      var r = n(4),
        i = n(36),
        o = (n(34), 'wistia_embed_options_'),
        a = function (t, e) {
          return null !== e
            ? (0, i.wData)([o, t], (0, r.cast)((0, r.clone)(e)))
            : {}
        },
        s = function (t) {
          ;(0, i.wRemoveData)([o, t])
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, {
        AFTER_REPLACE_EVENT: () => a,
        API_READY_EVENT: () => o,
        BEFORE_REPLACE_EVENT: () => s,
        IMPL_CREATED_EVENT: () => r,
        INPUT_CONTEXT_CHANGE_EVENT: () => c,
        INTERNAL_API_ON_FIND_EVENT: () => i,
        LOADED_MEDIA_DATA_EVENT: () => u
      })
      var r = 'impl-created',
        i = 'internal-api-on-find',
        o = 'api-ready',
        a = 'after-replace',
        s = 'before-replace',
        u = 'loaded-media-data',
        c = 'input-context-change'
    },
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { didWinCoinFlip: () => r })
      var r = function (t) {
        var e = window.crypto
        return void 0 !== e
          ? e.getRandomValues(new Uint32Array(1))[0] / 4294967296 < t
          : Math.random() >= t
      }
    },
    (t, e, n) => {
      n.d(e, { MUX_PERCENTAGE_TO_ENABLE: () => r, shouldEnableMux: () => i })
      var r = 0.1,
        i = function (t, e) {
          var n = !0 !== window.wistiaDisableMux,
            r = !t._opts || !1 !== t._opts.mux,
            i = !t.iframe,
            o = e,
            a = !(!t._mediaData || 'LiveStream' !== t._mediaData.type)
          return n && r && i && (o || a)
        }
    },
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { injectJsonLd: () => h, removeInjectedJsonLd: () => d })
      var r = n(116),
        i = n(4),
        o = n(21),
        a = n(29),
        s = n(22),
        u = n(118),
        c = n(117),
        l = function (t, e) {
          var n,
            i = 'https://'
              .concat((0, o.cdnFastWistiaNetHost)(), '/embed/iframe/')
              .concat(t.hashedId)
          return (0, r.shouldAddKeyMoments)(t, e) &&
            !(0, r.shouldAddClipsFromChapters)(e) &&
            null !== (n = t.embedOptions.plugin) &&
            void 0 !== n &&
            n.videoThumbnail
            ? ''.concat(i, '?wseektoaction=true')
            : i
        },
        f = function (t) {
          var e,
            n = t.assets
          if ('Audio' === t.mediaType)
            return null === (e = (0, a.readyPublicMp3s)(n)[0]) || void 0 === e
              ? void 0
              : e.url
          var r = (0, a.readyPublicMp4s)(n)
          if (0 !== r.length) {
            var i = (0, a.findClosestAssetByQuality)(r, 1080)
            if (i) {
              var o = new s.Url(i.url)
              return o.ext('m3u8'), o.absolute()
            }
          }
        },
        h = function (t, e) {
          var n,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
          n =
            'Audio' === e.mediaType
              ? (function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.videoWidth,
                    r = e.videoHeight,
                    s = e.embedOptions
                  s || (s = (0, i.cast)((0, i.clone)(t.embedOptions)))
                  var c = {
                    '@context': 'http://schema.org/',
                    '@id': 'https://'
                      .concat((0, o.cdnFastWistiaNetHost)(), '/embed/iframe/')
                      .concat(t.hashedId),
                    '@type': 'AudioObject',
                    duration: 'PT'.concat(
                      (0, u.secondsToIso8601Duration)(t.duration)
                    ),
                    name: t.name,
                    thumbnailUrl: (0, a.stillUrl)(t.assets, {
                      ext: 'jpg',
                      protocol: 'https:',
                      videoWidth: n,
                      videoHeight: r,
                      embedHost: s.embedHost
                    }),
                    contentUrl: f(t),
                    embedUrl: l(t, s),
                    uploadDate: new Date(1e3 * t.createdAt).toISOString(),
                    description: t.seoDescription
                  }
                  return (
                    t.captions &&
                      t.captions[0] &&
                      (c.transcript = t.captions[0].text),
                    c
                  )
                })(e, s)
              : (function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.videoWidth,
                    s = e.videoHeight,
                    h = e.embedOptions
                  h || (h = (0, i.cast)((0, i.clone)(t.embedOptions)))
                  var d = {
                    '@context': 'http://schema.org/',
                    '@id': 'https://'
                      .concat((0, o.cdnFastWistiaNetHost)(), '/embed/iframe/')
                      .concat(t.hashedId),
                    '@type': 'VideoObject',
                    duration: 'PT'.concat(
                      (0, u.secondsToIso8601Duration)(t.duration)
                    ),
                    name: t.name,
                    thumbnailUrl: (0, a.stillUrl)(t.assets, {
                      ext: 'jpg',
                      protocol: 'https:',
                      videoWidth: n,
                      videoHeight: s,
                      embedHost: h.embedHost
                    }),
                    embedUrl: l(t, h),
                    uploadDate: new Date(1e3 * t.createdAt).toISOString(),
                    description: t.seoDescription
                  }
                  if (
                    ('Video' === t.mediaType && (d.contentUrl = f(t)),
                    t.captions &&
                      t.captions[0] &&
                      (d.transcript = t.captions[0].text),
                    (0, r.shouldAddKeyMoments)(t, h))
                  )
                    if ((0, r.shouldAddClipsFromChapters)(h)) {
                      var p = (0, c.normalizeChapters)(h).chapterList
                      d.hasPart = (0, r.clipsFromChapters)(
                        p,
                        location.href,
                        t.duration
                      )
                    } else d.potentialAction = (0, r.seekToAction)()
                  return d
                })(e, s)
          var h = JSON.stringify(n),
            p = document.createElement('script')
          ;(p.className = 'w-json-ld'),
            (p.type = 'application/ld+json'),
            (p.innerHTML = h),
            (p._wistia = !0),
            p.setAttribute('id', t),
            d(t)
          var v = document.querySelectorAll('script.w-json-ld'),
            y = v[v.length - 1]
          y
            ? y.parentNode.insertBefore(p, y.nextSibling)
            : document.head.insertBefore(p, document.head.childNodes[0])
        },
        d = function (t) {
          if (t) {
            var e = document.getElementById(t)
            e && e.remove()
          }
        }
    },
    (t, e, n) => {
      n.d(e, {
        clipsFromChapters: () => c,
        seekToAction: () => l,
        shouldAddClipsFromChapters: () => s,
        shouldAddKeyMoments: () => u
      })
      var r = n(27),
        i = n(117)
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return a(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return a(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
              )
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function a(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var s = function (t) {
          var e = (0, i.normalizeChapters)(t)
          if (!e) return !1
          var n = e.chapterList
          return (
            !1 !== e.on && 'false' !== e.on && Array.isArray(n) && n.length > 0
          )
        },
        u = function (t, e) {
          var n
          if (!1 === e.keyMoments) return !1
          var r = t.duration,
            i = t.type,
            o = null !== (n = e.plugin) && void 0 !== n ? n : {},
            a = o.passwordProtectedVideo,
            s = o['requireEmail-v1'],
            u = 'LiveStream' === i,
            c =
              !0 === (null == a ? void 0 : a.on) ||
              'true' === (null == a ? void 0 : a.on),
            l = s && !1 !== s.on && 'end' !== s.time && !s.persistentTurnstile
          return Boolean(!c && !l && !u && 'number' == typeof r && r >= 30)
        },
        c = function (t, e, n) {
          if (!Array.isArray(t) || 0 === t.length) return []
          var i = (function (t) {
            var e = {}
            return o(t)
              .sort(function (t, e) {
                return t.time - e.time
              })
              .filter(function (t) {
                var n = t.time,
                  r = t.title,
                  i = t.deleted
                return (
                  !Boolean(e[n]) &&
                  !i &&
                  'Chapter Title' !== r &&
                  ((e[n] = !0), !0)
                )
              })
          })(t).map(function (t, i, o) {
            var a = t.time,
              s = t.title,
              u = new window.URL(e),
              c = Math.floor(a),
              l = o[i + 1],
              f = (0, r.isNotNil)(l) ? l.time : n
            return (
              u.searchParams.set('wtime', ''.concat(c, 's')),
              {
                '@type': 'Clip',
                endOffset: Math.floor(f),
                name: s,
                startOffset: c,
                url: u.toString()
              }
            )
          })
          return i
        },
        l = function () {
          var t = new window.URL(window.location.href)
          return (
            t.searchParams.set('wtime', '{seek_to_second_number}'),
            {
              '@type': 'SeekToAction',
              target: t
                .toString()
                .replace(
                  '%7Bseek_to_second_number%7D',
                  '{seek_to_second_number}'
                ),
              'startOffset-input': 'required name=seek_to_second_number'
            }
          )
        }
    },
    (t, e, n) => {
      n.d(e, { normalizeChapters: () => i })
      var r = n(27),
        i = function (t) {
          var e = t.plugin,
            n = t.chaptersOn,
            i = t.chapterList
          if (null != e && e.chapters) return e.chapters
          var o = !0 === n || 'true' === n
          return (0, r.isNotNil)(i) || o
            ? {
                on: n,
                chapterList: (0, r.isNotNil)(i) && i.length > 0 ? i : []
              }
            : void 0
        }
    },
    (t, e, n) => {
      n.d(e, { secondsToIso8601Duration: () => i })
      var r = n(70),
        i = function (t) {
          var e = (0, r.secondsConverter)(t, 'hms'),
            n = e.hours,
            i = e.minutes,
            o = e.seconds,
            a = ''
          return (
            n && (a += ''.concat(n, 'H')),
            (i || (t > 60 && 0 !== o)) && (a += ''.concat(i, 'M')),
            (o || 0 === t) && (a += ''.concat(o, 'S')),
            a
          )
        }
    },
    ,
    ,
    (t, e, n) => {
      n.d(e, { extractEmailFromParams: () => o })
      var r = n(50),
        i = n(13),
        o = function (t) {
          var e,
            n,
            o =
              null !== (e = /wemail=([^&#]+)/.exec(t)) && void 0 !== e
                ? e
                : null
          if (o) return o[1]
          var a =
            null !== (n = /wkey=([^&#]+)/.exec(t)) && void 0 !== n ? n : null
          if (a) {
            var s = a[1]
            try {
              return (0, r.base64Decode)(s)
            } catch (t) {
              i.wlog.info('Failed to decode email from wkey', t)
            }
          }
          return null
        }
    },
    (t, e, n) => {
      n.d(e, { inferPageUrl: () => r })
      var r = function () {
        var t
        return null !=
          (null === (t = window.FreshUrl) || void 0 === t
            ? void 0
            : t.originalUrl)
          ? window.FreshUrl.originalUrl
          : window.top === window.self
            ? window.location.href || ''
            : document.referrer || ''
      }
    },
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { CONTROL_BAR_HEIGHT: () => r, DEFAULT_ASPECT: () => i })
      var r = 34,
        i = 16 / 9
    },
    ,
    ,
    (t, e, n) => {
      n.d(e, {
        getDefaultBigPlayButtonBorderRadius: () => i,
        getDefaultControlBarDistance: () => o,
        getDefaultPlayerBorderRadius: () => r
      })
      var r = function (t) {
          var e = t.playerBorderRadius,
            n = t.roundedPlayer
          return void 0 !== n ? n : void 0 !== e ? e : 0
        },
        i = function (t) {
          var e = t.bigPlayButtonBorderRadius,
            n = t.roundedPlayer
          return void 0 !== e ? e : void 0 !== n ? 0.75 * n : 0
        },
        o = function (t) {
          var e = t.controlBarBorderRadius,
            n = t.floatingControlBar,
            r = t.roundedPlayer
          return void 0 !== r ? r / 4 : void 0 !== e ? e / 2 : !0 === n ? 6 : 0
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { getCssGradient: () => o, getGradientColor: () => a })
      var r = n(140),
        i = n(75),
        o = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.9
          return 0 === t.colors.length
            ? null
            : t.colors.every(function (t) {
                  return t[0] && t[1] >= 0 && t[1] <= 1
                })
              ? 'linear-gradient(90deg, '.concat(
                  t.colors
                    .map(function (t) {
                      return ''
                        .concat(
                          (function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0.9
                            return new i.Color(t).alpha(e).toRgba()
                          })(t[0], e),
                          ' '
                        )
                        .concat(100 * t[1], '%')
                    })
                    .join(', '),
                  ')'
                )
              : null
        },
        a = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          return (0, r.isGradient)(t) ? t.colors[e][0] : null
        }
    },
    (t, e, n) => {
      n.d(e, { isGradient: () => r })
      var r = function (t) {
        if ('object' != typeof t || null === t) return !1
        var e = t,
          n = e.colors,
          r = e.on
        return (
          !r ||
          (!(!Array.isArray(n) || 'boolean' != typeof r) &&
            0 !== n.length &&
            n.every(function (t) {
              return 'string' == typeof t[0] && 'number' == typeof t[1]
            }))
        )
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { controlMultiplierEstimatedByWidth: () => c })
      n(3), n(66)
      var r = n(9),
        i = n(4)
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return a(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function a(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var s = (0, r.cachedDetect)(),
        u = function (t) {
          if (!(s.iphone || s.ipad || s.android)) return [640, 960]
          if (null != t && t.isAudio()) return [500, 960]
          var e,
            n,
            r,
            o,
            a =
              ((e = document.querySelector('meta[name=viewport]')),
              (n = e && e.getAttribute('content')),
              (r = {}),
              n &&
                n.split(/[\s,]+/).forEach(function (t) {
                  var e = t.split('=')
                  2 === e.length && (r[e[0]] = (0, i.cast)(e[1]))
                }),
              r)
          if (a.width) {
            o =
              'number' == typeof a.width
                ? 0 + a.width
                : screen.width || window.innerWidth
            var u = Math.max(
              a['minimum-scale'] || 0,
              Math.min(a['maximum-scale'] || 10, a['initial-scale'] || 1)
            )
            u < 1 && (o /= u)
          } else o = window.innerWidth
          return [o, (2 * o) / 3]
        },
        c = function (t, e) {
          var n = o(e || u(), 2),
            r = n[0],
            i = n[1]
          return t <= r ? t / r : t > i ? t / i : 1
        }
    },
    (t, e, n) => {
      n.d(e, { BigPlayButton: () => b })
      var r = n(2),
        i = n(185),
        o = n(186),
        a = n(188),
        s = n(43),
        u = n(75),
        c = n(50),
        l = n(9),
        f = n(70),
        h = n(38)
      function d(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                v(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  )
                })
        }
        return t
      }
      function v(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ('object' != typeof t || !t) return t
              var n = t[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(t, e || 'default')
                if ('object' != typeof r) return r
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return ('string' === e ? String : Number)(t)
            })(t, 'string')
            return 'symbol' == typeof e ? e : e + ''
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      function y(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return m(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? m(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function m(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var g = (0, l.cachedDetect)(),
        b = function (t) {
          var e,
            n = t.backgroundGradientCss,
            l = t.baseHeight,
            d = void 0 === l ? 80 : l,
            v = t.baseWidth,
            m = void 0 === v ? 125 : v,
            b = t.borderRadius,
            _ = t.buttonTabIndex,
            w = t.color,
            O = t.controlBarDistance,
            k = void 0 === O ? 0 : O,
            E = t.duration,
            S = t.elemRef,
            P = t.hasNewRoundedIcons,
            T = void 0 !== P && P,
            x = t.isLiveMedia,
            j = t.isLoading,
            A = void 0 !== j && j,
            L = t.isVisible,
            C = t.leftNudgeFraction,
            W = void 0 === C ? 0 : C,
            D = t.noMixBlendMode,
            M = void 0 !== D && D,
            I = t.onClick,
            B = t.playerLanguage,
            N = t.scale,
            R = t.showBpbTime,
            H = t.topNudgeFraction,
            F = void 0 === H ? 0 : H,
            U = t.videoName,
            q = t.videoWidth,
            V = y((0, i.useState)(!1), 2),
            G = V[0],
            z = V[1],
            $ = m * N,
            Y = d * N,
            X = (0, c.unescapeHtml)(U),
            K = ''
              .concat(
                ((e = 'TITLE_WHEN_NOT_PLAYING'),
                (0, s.getTranslation)(B.code, 'PLAY_BUTTON_'.concat(e))),
                ': '
              )
              .concat(X),
            J = {
              borderRadius: ''.concat(b, 'px'),
              display: L ? 'block' : 'none',
              left: 'calc(50% + '.concat(100 * (W || 0), '%)'),
              marginLeft: '-'.concat($ / 2, 'px'),
              marginTop: '-'.concat(Y / 2, 'px'),
              overflow: 'hidden',
              position: 'absolute',
              top: 'calc(50% + '.concat(100 * (F || 0), '% - ').concat(k, 'px)')
            },
            Q = {
              backgroundColor: 'transparent',
              border: 0,
              cursor: 'pointer',
              height: ''.concat(Y, 'px'),
              boxShadow: 'none',
              width: ''.concat($, 'px')
            },
            Z = !g.edge && !M,
            tt = {
              background: new u.Color(null != w ? w : '#000').alpha(1).toRgba(),
              display: Z ? 'block' : 'none',
              left: 0,
              height: ''.concat(Y, 'px'),
              mixBlendMode: 'darken',
              position: 'absolute',
              top: 0,
              width: ''.concat($, 'px')
            },
            et = new u.Color(null != w ? w : '#000'),
            nt = Z ? 0.7 : 0.85
          et.alpha(nt), G && et.lighten('15%')
          var rt = p(
              p(
                { backgroundColor: et.toRgba() },
                null != n
                  ? {
                      background: n,
                      backgroundSize: ''.concat(q, 'px 100%'),
                      backgroundPositionX: 'center'
                    }
                  : {}
              ),
              {},
              {
                height: ''.concat(Y, 'px'),
                left: 0,
                position: 'absolute',
                top: 0,
                transition: 'background-color 150ms',
                width: ''.concat($, 'px')
              }
            ),
            it = R && !x,
            ot = {
              background: 'rgba(0,0,0,.4)',
              color: '#fff',
              fontFamily: h.interNumbersSemiBold,
              fontSize: ''.concat(18 * N, 'px'),
              lineHeight: ''.concat(30 * N, 'px'),
              pointerEvents: 'none',
              textAlign: 'center'
            },
            at = function () {
              z(!0)
            },
            st = function () {
              z(!1)
            }
          return (0, r.h)(
            'div',
            {
              class: 'w-bpb-wrapper w-css-reset w-css-reset-tree',
              ref: S,
              style: J
            },
            (0, r.h)(
              'button',
              {
                class:
                  'w-big-play-button w-css-reset-button-important w-vulcan-v2-button',
                style: Q,
                onMouseEnter: at,
                onMouseLeave: st,
                onFocusIn: at,
                onFocusOut: st,
                onClick: I,
                'aria-label': K,
                tabIndex: _,
                type: 'button'
              },
              (0, r.h)('div', { style: tt }),
              (0, r.h)('div', { style: rt }),
              T
                ? (0, r.h)(a.BigPlayButtonSVG, {
                    width: m,
                    height: d,
                    scale: N,
                    isLoading: A
                  })
                : (0, r.h)(o.OldBigPlayButtonSVG, {
                    width: m,
                    height: d,
                    scale: N,
                    isLoading: A
                  })
            ),
            it
              ? (0, r.h)(
                  'div',
                  { class: 'w-bpb-time', style: ot },
                  (0, f.flexibleDuration)(E)
                )
              : null
          )
        }
    },
    (t, e, n) => {
      n.d(e, {
        useContext: () => O,
        useEffect: () => b,
        useRef: () => _,
        useState: () => g
      })
      var r,
        i,
        o,
        a,
        s = n(2),
        u = 0,
        c = [],
        l = s.options,
        f = l.__b,
        h = l.__r,
        d = l.diffed,
        p = l.__c,
        v = l.unmount,
        y = l.__
      function m(t, e) {
        l.__h && l.__h(i, t, u || e), (u = 0)
        var n = i.__H || (i.__H = { __: [], __h: [] })
        return t >= n.__.length && n.__.push({}), n.__[t]
      }
      function g(t) {
        return (
          (u = 1),
          (function (t, e, n) {
            var o = m(r++, 2)
            if (
              ((o.t = t),
              !o.__c &&
                ((o.__ = [
                  n ? n(e) : j(void 0, e),
                  function (t) {
                    var e = o.__N ? o.__N[0] : o.__[0],
                      n = o.t(e, t)
                    e !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}))
                  }
                ]),
                (o.__c = i),
                !i.u))
            ) {
              var a = function (t, e, n) {
                if (!o.__c.__H) return !0
                var r = o.__c.__H.__.filter(function (t) {
                  return !!t.__c
                })
                if (
                  r.every(function (t) {
                    return !t.__N
                  })
                )
                  return !s || s.call(this, t, e, n)
                var i = !1
                return (
                  r.forEach(function (t) {
                    if (t.__N) {
                      var e = t.__[0]
                      ;(t.__ = t.__N),
                        (t.__N = void 0),
                        e !== t.__[0] && (i = !0)
                    }
                  }),
                  !(!i && o.__c.props === t) && (!s || s.call(this, t, e, n))
                )
              }
              i.u = !0
              var s = i.shouldComponentUpdate,
                u = i.componentWillUpdate
              ;(i.componentWillUpdate = function (t, e, n) {
                if (this.__e) {
                  var r = s
                  ;(s = void 0), a(t, e, n), (s = r)
                }
                u && u.call(this, t, e, n)
              }),
                (i.shouldComponentUpdate = a)
            }
            return o.__N || o.__
          })(j, t)
        )
      }
      function b(t, e) {
        var n = m(r++, 3)
        !l.__s && x(n.__H, e) && ((n.__ = t), (n.i = e), i.__H.__h.push(n))
      }
      function _(t) {
        return (
          (u = 5),
          w(function () {
            return { current: t }
          }, [])
        )
      }
      function w(t, e) {
        var n = m(r++, 7)
        return x(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__
      }
      function O(t) {
        var e = i.context[t.__c],
          n = m(r++, 9)
        return (
          (n.c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
        )
      }
      function k() {
        for (var t; (t = c.shift()); )
          if (t.__P && t.__H)
            try {
              t.__H.__h.forEach(P), t.__H.__h.forEach(T), (t.__H.__h = [])
            } catch (e) {
              ;(t.__H.__h = []), l.__e(e, t.__v)
            }
      }
      ;(l.__b = function (t) {
        ;(i = null), f && f(t)
      }),
        (l.__ = function (t, e) {
          t && e.__k && e.__k.__m && (t.__m = e.__k.__m), y && y(t, e)
        }),
        (l.__r = function (t) {
          h && h(t), (r = 0)
          var e = (i = t.__c).__H
          e &&
            (o === i
              ? ((e.__h = []),
                (i.__h = []),
                e.__.forEach(function (t) {
                  t.__N && (t.__ = t.__N), (t.i = t.__N = void 0)
                }))
              : (e.__h.forEach(P), e.__h.forEach(T), (e.__h = []), (r = 0))),
            (o = i)
        }),
        (l.diffed = function (t) {
          d && d(t)
          var e = t.__c
          e &&
            e.__H &&
            (e.__H.__h.length &&
              ((1 !== c.push(e) && a === l.requestAnimationFrame) ||
                ((a = l.requestAnimationFrame) || S)(k)),
            e.__H.__.forEach(function (t) {
              t.i && (t.__H = t.i), (t.i = void 0)
            })),
            (o = i = null)
        }),
        (l.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(P),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || T(t)
                }))
            } catch (n) {
              e.some(function (t) {
                t.__h && (t.__h = [])
              }),
                (e = []),
                l.__e(n, t.__v)
            }
          }),
            p && p(t, e)
        }),
        (l.unmount = function (t) {
          v && v(t)
          var e,
            n = t.__c
          n &&
            n.__H &&
            (n.__H.__.forEach(function (t) {
              try {
                P(t)
              } catch (t) {
                e = t
              }
            }),
            (n.__H = void 0),
            e && l.__e(e, n.__v))
        })
      var E = 'function' == typeof requestAnimationFrame
      function S(t) {
        var e,
          n = function () {
            clearTimeout(r), E && cancelAnimationFrame(e), setTimeout(t)
          },
          r = setTimeout(n, 100)
        E && (e = requestAnimationFrame(n))
      }
      function P(t) {
        var e = i,
          n = t.__c
        'function' == typeof n && ((t.__c = void 0), n()), (i = e)
      }
      function T(t) {
        var e = i
        ;(t.__c = t.__()), (i = e)
      }
      function x(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n]
          })
        )
      }
      function j(t, e) {
        return 'function' == typeof e ? e(t) : e
      }
    },
    (t, e, n) => {
      n.d(e, { OldBigPlayButtonSVG: () => s })
      var r = n(2),
        i = n(187),
        o = n(40)
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e]
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
              }),
          a.apply(null, arguments)
        )
      }
      var s = function (t) {
        var e = t.width,
          n = t.height,
          s = t.scale,
          u = t.isLoading,
          c = void 0 !== u && u,
          l = n * s,
          f = (0, o.standardSvgAttrs)({
            width: e,
            height: n,
            styleOverride: { position: 'absolute', height: ''.concat(l, 'px') },
            ariaHidden: !0
          })
        return (0, r.h)(
          'svg',
          a({}, f, { alt: '' }),
          (0, r.h)('rect', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            fill: 'none',
            width: e,
            height: n
          }),
          (0, r.h)('polygon', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            fill: '#FFFFFF',
            opacity: c ? 0.5 : 1,
            points: '53,22 53,58 79,40'
          }),
          c && (0, r.h)(i.BigPlayButtonLoadingAnim, null)
        )
      }
    },
    (t, e, n) => {
      n.d(e, { BigPlayButtonLoadingAnim: () => u })
      var r = n(2),
        i = n(185),
        o = n(3)
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return s(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? s(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function s(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var u = function () {
        var t = (0, i.useRef)(null),
          e = a((0, i.useState)(!1), 2),
          n = e[0],
          s = e[1]
        return (
          (0, i.useEffect)(function () {
            ;(0, o.addInlineCss)(
              t.current,
              '\n        @keyframes w-loading-pulse {\n          from {\n            stroke-dashoffset: 55;\n          }\n          to {\n            stroke-dashoffset: -175;\n          }\n        }\n        .w-big-play-button-loading-anim {\n          stroke-dasharray: 50 260;\n          stroke-dashoffset: 55;\n          animation: w-loading-pulse 1.2s infinite cubic-bezier(0.65, 0, 0, 1);\n        }\n      '
            ),
              s(!0)
          }, []),
          (0, r.h)('line', {
            ref: t,
            class: 'w-big-play-button-loading-anim',
            x1: '0',
            y1: '78',
            x2: '125',
            y2: '78',
            style: {
              stroke: '#FFFFFF',
              strokeWidth: 4,
              strokeLinecap: 'round',
              opacity: n ? 1 : 0
            }
          })
        )
      }
    },
    (t, e, n) => {
      n.d(e, { BigPlayButtonSVG: () => s })
      var r = n(2),
        i = n(187),
        o = n(40)
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e]
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
              }),
          a.apply(null, arguments)
        )
      }
      var s = function (t) {
        var e = t.width,
          n = t.height,
          s = t.scale,
          u = t.isLoading,
          c = void 0 !== u && u,
          l = n * s,
          f = (0, o.standardSvgAttrs)({
            width: e,
            height: n,
            styleOverride: { position: 'absolute', height: ''.concat(l, 'px') },
            ariaHidden: !0
          }),
          h = e / 2 - 18.5,
          d = n / 2 - 18
        return (0, r.h)(
          'svg',
          a({}, f, { alt: '' }),
          (0, r.h)('path', {
            'fill-rule': 'evenodd',
            'clip-rule': 'evenodd',
            fill: '#FFFFFF',
            opacity: c ? 0.5 : 1,
            transform: 'translate('.concat(h, ', ').concat(d, ')'),
            d: 'M12.138 2.173C10.812 1.254 9 2.203 9 3.817v28.366c0 1.613 1.812 2.563 3.138 1.644l20.487-14.183a2 2 0 0 0 0-3.288L12.138 2.173Z'
          }),
          c && (0, r.h)(i.BigPlayButtonLoadingAnim, null)
        )
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      n.d(e, { ProgressiveThumbnail: () => v })
      var r = n(4),
        i = n(2),
        o = n(21),
        a = n(220)
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e]
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
              }),
          s.apply(null, arguments)
        )
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, p(r.key), r)
        }
      }
      function c(t, e, n) {
        return (
          (e = f(e)),
          (function (t, e) {
            if (e && ('object' == typeof e || 'function' == typeof e)) return e
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t
            })(t)
          })(
            t,
            l()
              ? Reflect.construct(e, n || [], f(t).constructor)
              : e.apply(t, n)
          )
        )
      }
      function l() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          )
        } catch (t) {}
        return (l = function () {
          return !!t
        })()
      }
      function f(t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          f(t)
        )
      }
      function h(t, e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t
              }),
          h(t, e)
        )
      }
      function d(t, e, n) {
        return (
          (e = p(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      function p(t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, e || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === e ? String : Number)(t)
        })(t, 'string')
        return 'symbol' == typeof e ? e : e + ''
      }
      var v = (function (t) {
        function e(t) {
          var n
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            d((n = c(this, e, [t])), 'afterTwoSeconds', function () {
              n._displayed ||
                1 !== n.state.normalThumbOpacity ||
                n.setState({ normalThumbOpacity: 0 })
            }),
            d(n, 'onDisplayNormalThumb', function () {
              n.setState({ normalThumbOpacity: 1 }),
                (n._displayed = !0),
                n.onDisplay && n.onDisplay()
            }),
            (n.state = { normalThumbOpacity: t.isVisible ? 1 : 0 }),
            (n.onDisplay = t.onDisplay),
            n
          )
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && h(t, e)
          })(e, t),
          (n = e),
          (l = [
            {
              key: 'componentWillReceiveProps',
              value: function (t) {
                !this.onDisplay && t.onDisplay && (this.onDisplay = t.onDisplay)
              }
            },
            {
              key: 'render',
              value: function () {
                this.props.isVisible && (this._hasRenderedVisible = !0)
                var t = {
                    backgroundColor: this.props.backgroundColor,
                    fitStrategy: this.props.fitStrategy,
                    isVisible: this.props.isVisible,
                    stillSnap: this.props.stillSnap,
                    stretchLimit: this.props.stretchLimit,
                    videoHeight: this.props.videoHeight,
                    videoWidth: this.props.videoWidth,
                    thumbnailAltText: this.props.thumbnailAltText,
                    playerBorderRadius: this.props.playerBorderRadius
                  },
                  e = (0, r.assign)({}, t, {
                    ariaHidden: !0,
                    images: [
                      {
                        url: ''
                          .concat((0, o.eV1Protocol)(), '//')
                          .concat((0, o.eV1Host)(), '/embed/medias/')
                          .concat(this.props.hashedId, '/swatch')
                      }
                    ]
                  }),
                  n = (0, r.assign)({}, t, {
                    onDisplay: this.onDisplayNormalThumb,
                    images: this.props.images
                  })
                return (0, i.h)(
                  'div',
                  { ref: this.props.elemRef },
                  this.props.swatchEnabled && this._hasRenderedVisible
                    ? (0, i.h)(
                        a.Thumbnail,
                        s({}, e, { wrapperStyle: this.swatchWrapperStyle() })
                      )
                    : null,
                  this._hasRenderedVisible
                    ? (0, i.h)(
                        a.Thumbnail,
                        s({}, n, {
                          wrapperStyle: this.normalThumbWrapperStyle()
                        })
                      )
                    : null
                )
              }
            },
            {
              key: 'componentDidMount',
              value: function () {
                setTimeout(this.afterTwoSeconds, 2e3)
              }
            },
            {
              key: 'normalThumbWrapperStyle',
              value: function () {
                var t =
                  this.props.swatchEnabled &&
                  this.props.uiHasRendered &&
                  1 === this.state.normalThumbOpacity
                    ? 'opacity 3s'
                    : ''
                return {
                  height: '100%',
                  left: 0,
                  opacity: this.state.normalThumbOpacity,
                  position:
                    'naturalHeight' === this.props.fitStrategy
                      ? 'relative'
                      : 'absolute',
                  top: 0,
                  transition: t,
                  width: '100%'
                }
              }
            },
            {
              key: 'swatchWrapperStyle',
              value: function () {
                return {
                  filter: 'blur(5px)',
                  height: '100%',
                  left: 0,
                  position:
                    'naturalHeight' === this.props.fitStrategy
                      ? 'relative'
                      : 'absolute',
                  top: 0,
                  width: '100%'
                }
              }
            }
          ]) && u(n.prototype, l),
          f && u(n, f),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        )
        var n, l, f
      })(i.Component)
    },
    (t, e, n) => {
      n.d(e, { Thumbnail: () => p })
      var r = n(221),
        i = n(2),
        o = n(4),
        a = n(3),
        s = n(43)
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, c(r.key), r)
        }
      }
      function c(t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, e || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === e ? String : Number)(t)
        })(t, 'string')
        return 'symbol' == typeof e ? e : e + ''
      }
      function l(t, e, n) {
        return (
          (e = h(e)),
          (function (t, e) {
            if (e && ('object' == typeof e || 'function' == typeof e)) return e
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t
            })(t)
          })(
            t,
            f()
              ? Reflect.construct(e, n || [], h(t).constructor)
              : e.apply(t, n)
          )
        )
      }
      function f() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          )
        } catch (t) {}
        return (f = function () {
          return !!t
        })()
      }
      function h(t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          h(t)
        )
      }
      function d(t, e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t
              }),
          d(t, e)
        )
      }
      ;(0, s.defineTranslations)('en-US', {
        THUMBNAIL_VIDEO_THUMBNAIL: 'Video Thumbnail'
      })
      var p = (function (t) {
        function e(t) {
          var n
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            ((n = l(this, e, [t])).initialState = n.state =
              { isLoaded: !1, isDisplaying: !1 }),
            (n.onDisplay = n.props.onDisplay),
            n
          )
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && d(t, e)
          })(e, t),
          (n = e),
          (c = [
            {
              key: 'componentWillReceiveProps',
              value: function (t) {
                t.images !== this.props.images &&
                  ((this._sortedImages = null),
                  this.setState({ isLoaded: !1, isDisplaying: !1 })),
                  !this.onDisplay &&
                    t.onDisplay &&
                    (this.onDisplay = t.onDisplay)
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e =
                    void 0 !== this.props.thumbnailAltText
                      ? this.props.thumbnailAltText
                      : this.translate('VIDEO_THUMBNAIL')
                return (0, i.h)(
                  'div',
                  { style: this.wrapperStyle(), class: 'w-css-reset' },
                  (0, i.h)('img', {
                    class: 'w-css-reset',
                    srcset: this.props.images.length > 1 ? this.srcSet() : null,
                    src: this.bestSrc(),
                    style: this.imgStyle(),
                    alt: e,
                    ref: function (e) {
                      return (t.imgElem = e)
                    },
                    'aria-hidden': this.props.ariaHidden ? 'true' : null
                  })
                )
              }
            },
            {
              key: 'translate',
              value: function (t) {
                return (0, s.getTranslation)(
                  this.props.playerLanguage,
                  'THUMBNAIL_'.concat(t)
                )
              }
            },
            {
              key: 'componentDidMount',
              value: function () {
                this.setStateBasedOnImgStatus(),
                  this.maybeCallOnDisplay(this.initialState)
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (t, e) {
                this.setStateBasedOnImgStatus(), this.maybeCallOnDisplay(e)
              }
            },
            {
              key: 'maybeCallOnDisplay',
              value: function () {
                this.onDisplay &&
                  this.state.isDisplaying &&
                  !this.calledOnDisplay &&
                  ((this.calledOnDisplay = !0), this.onDisplay())
              }
            },
            {
              key: 'setStateBasedOnImgStatus',
              value: function () {
                var t = this,
                  e = this.state,
                  n = this.imgElem
                e.isLoaded ||
                  (n.onload ||
                    (n.onload = function () {
                      ;(0, a.elemInDom)(n) &&
                        t.setState({ isLoaded: !0, isDisplaying: !0 })
                    }),
                  n.complete &&
                    this.setState({ isLoaded: !0, isDisplaying: !0 }))
              }
            },
            {
              key: 'wrapperStyle',
              value: function () {
                var t = this.state.isDisplaying && this.props.isVisible
                return (0, o.assign)({}, this.props.wrapperStyle, {
                  display: this.state.isLoaded && !t ? 'none' : 'block'
                })
              }
            },
            {
              key: 'baseStyle',
              value: function () {
                var t = this.props.fitStrategy
                return 'cover' === t
                  ? this.coverStyle()
                  : 'contain' === t
                    ? this.containStyle()
                    : 'fill' === t
                      ? this.fillStyle()
                      : 'naturalHeight' === t
                        ? this.naturalHeightStyle()
                        : this.containStyle()
              }
            },
            {
              key: 'imgStyle',
              value: function () {
                var t = this.state.isDisplaying && this.props.isVisible
                return (0, o.assign)(this.baseStyle(), {
                  clip: t ? 'auto' : 'rect(0,0,0,0)',
                  display: this.state.isLoaded && !t ? 'none' : 'block',
                  borderRadius: ''.concat(this.props.playerBorderRadius, 'px')
                })
              }
            },
            {
              key: 'containStyle',
              value: function () {
                return {
                  backgroundColor: this.props.backgroundColor || '#000',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  width: '100%',
                  top: 0,
                  left: 0
                }
              }
            },
            {
              key: 'coverStyle',
              value: function () {
                return {
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  width: '100%'
                }
              }
            },
            {
              key: 'fillStyle',
              value: function () {
                return {
                  height: '100%',
                  objectFit: 'fill',
                  position: 'absolute',
                  width: '100%'
                }
              }
            },
            {
              key: 'naturalHeightStyle',
              value: function () {
                return { width: '100%', position: 'relative' }
              }
            },
            {
              key: 'bestSrc',
              value: function () {
                return (0, r.bestImage)(this.props.images, {
                  videoWidth: this.props.videoWidth,
                  videoHeight: this.props.videoHeight
                }).url
              }
            },
            {
              key: 'srcSet',
              value: function () {
                var t = this.sortedImages()
                return (
                  0 === t.length &&
                    (t = [
                      (0, r.blankImage)(
                        this.props.videoWidth,
                        this.props.videoHeight
                      )
                    ]),
                  t
                    .map(function (t) {
                      return ''.concat(t.url, ' ').concat(t.width, 'w')
                    })
                    .join(', ')
                )
              }
            },
            {
              key: 'sortedImages',
              value: function () {
                return (
                  this._sortedImages ||
                    (this._sortedImages = (0, r.sortedImages)(
                      this.props.images
                    )),
                  this._sortedImages
                )
              }
            },
            {
              key: 'stretchLimit',
              value: function () {
                var t = this.props.stretchLimit
                return null != t ? t : 10
              }
            }
          ]),
          c && u(n.prototype, c),
          f && u(n, f),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        )
        var n, c, f
      })(i.Component)
    },
    (t, e, n) => {
      n.d(e, { bestImage: () => i, blankImage: () => o, sortedImages: () => a })
      var r = n(21),
        i = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = a(t)
          if (0 === n.length) return o(e.videoWith, e.videoHeight)
          var r = e.videoWidth,
            i = (window.devicePixelRatio || 1) * r
          if (i <= n[0].width) return n[0]
          for (var s = 0; s < n.length; s++) {
            var u = n[s]
            if (u.width >= i) return u
          }
          return n[n.length - 1]
        },
        o = function (t, e) {
          return {
            height: e,
            url: 'https://'.concat(
              (0, r.eV1HostWithPort)(),
              '/assets/images/blank.gif'
            ),
            width: t
          }
        },
        a = function (t) {
          return t.map(function (t) {
            return (t.aspect = t.width / t.height), t
          })
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    (t, e, n) => {
      var r = n(2),
        i = n(139),
        o = n(11),
        a = n(249),
        s = n(250),
        u = n(127),
        c = n(251),
        l = n(23),
        f = n(29),
        h = n(108),
        d = n(9),
        p = n(44),
        v = n(94),
        y = n(3),
        m = n(102),
        g = n(121),
        b = n(21),
        _ = n(122),
        w = n(90),
        O = n(130),
        k = n(20),
        E = n(24),
        S = n(109),
        P = n(30),
        T = n(31),
        x = n(22),
        j = n(32),
        A = n(254),
        L = n(255),
        C = n(13),
        W = n(115),
        D = n(256),
        M = n(258),
        I = n(26),
        B = n(259),
        N = n(140)
      function R(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return H(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? H(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function H(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function F() {
        F = function () {
          return e
        }
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          u = o.toStringTag || '@@toStringTag'
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[e]
          )
        }
        try {
          c({}, '')
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof m ? e : m,
            a = Object.create(o.prototype),
            s = new A(r || [])
          return i(a, '_invoke', { value: P(t, n, s) }), a
        }
        function f(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        e.wrap = l
        var h = 'suspendedStart',
          d = 'suspendedYield',
          p = 'executing',
          v = 'completed',
          y = {}
        function m() {}
        function g() {}
        function b() {}
        var _ = {}
        c(_, a, function () {
          return this
        })
        var w = Object.getPrototypeOf,
          O = w && w(w(L([])))
        O && O !== n && r.call(O, a) && (_ = O)
        var k = (b.prototype = m.prototype = Object.create(_))
        function E(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function S(t, e) {
          function n(i, o, a, s) {
            var u = f(t[i], t, o)
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value
              return l && 'object' == typeof l && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, s)
                    },
                    function (t) {
                      n('throw', t, a, s)
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      ;(c.value = t), a(c)
                    },
                    function (t) {
                      return n('throw', t, a, s)
                    }
                  )
            }
            s(u.arg)
          }
          var o
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i)
                })
              }
              return (o = o ? o.then(i, i) : i())
            }
          })
        }
        function P(e, n, r) {
          var i = h
          return function (o, a) {
            if (i === p) throw Error('Generator is already running')
            if (i === v) {
              if ('throw' === o) throw a
              return { value: t, done: !0 }
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate
              if (s) {
                var u = T(s, r)
                if (u) {
                  if (u === y) continue
                  return u
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if (i === h) throw ((i = v), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              i = p
              var c = f(e, n, r)
              if ('normal' === c.type) {
                if (((i = r.done ? v : d), c.arg === y)) continue
                return { value: c.arg, done: r.done }
              }
              'throw' === c.type &&
                ((i = v), (r.method = 'throw'), (r.arg = c.arg))
            }
          }
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r]
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                T(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              y
            )
          var o = f(i, e.iterator, n.arg)
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), y
          var a = o.arg
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                y)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              y)
        }
        function x(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function j(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function A(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(x, this),
            this.reset(!0)
        }
        function L(e) {
          if (e || '' === e) {
            var n = e[a]
            if (n) return n.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n
                  return (n.value = t), (n.done = !0), n
                }
              return (o.next = o)
            }
          }
          throw new TypeError(typeof e + ' is not iterable')
        }
        return (
          (g.prototype = b),
          i(k, 'constructor', { value: b, configurable: !0 }),
          i(b, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = c(b, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), c(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(k)),
              t
            )
          }),
          (e.awrap = function (t) {
            return { __await: t }
          }),
          E(S.prototype),
          c(S.prototype, s, function () {
            return this
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new S(l(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          E(k),
          c(k, u, 'Generator'),
          c(k, a, function () {
            return this
          }),
          c(k, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = []
            for (var r in e) n.push(r)
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in e) return (t.value = r), (t.done = !1), t
                }
                return (t.done = !0), t
              }
            )
          }),
          (e.values = L),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var n = this
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc')
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), y)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                y
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), j(n), y
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var i = r.arg
                    j(n)
                  }
                  return i
                }
              }
              throw Error('illegal catch attempt')
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: L(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                y
              )
            }
          }),
          e
        )
      }
      function U(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (t) {
          return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
      }
      function q(t) {
        return function () {
          var e = this,
            n = arguments
          return new Promise(function (r, i) {
            var o = t.apply(e, n)
            function a(t) {
              U(o, r, i, a, s, 'next', t)
            }
            function s(t) {
              U(o, r, i, a, s, 'throw', t)
            }
            a(void 0)
          })
        }
      }
      function V(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? V(Object(n), !0).forEach(function (e) {
                z(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : V(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  )
                })
        }
        return t
      }
      function z(t, e, n) {
        return (
          (e = Y(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        )
      }
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Y(r.key), r)
        }
      }
      function Y(t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, e || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === e ? String : Number)(t)
        })(t, 'string')
        return 'symbol' == typeof e ? e : e + ''
      }
      function X(t, e, n) {
        return (
          (e = Z(e)),
          (function (t, e) {
            if (e && ('object' == typeof e || 'function' == typeof e)) return e
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t
            })(t)
          })(
            t,
            J()
              ? Reflect.construct(e, n || [], Z(t).constructor)
              : e.apply(t, n)
          )
        )
      }
      function K(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
          (K = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf('[native code]')
                  )
                } catch (e) {
                  return 'function' == typeof t
                }
              })(t)
            )
              return t
            if ('function' != typeof t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t)
              e.set(t, n)
            }
            function n() {
              return (function (t, e, n) {
                if (J()) return Reflect.construct.apply(null, arguments)
                var r = [null]
                r.push.apply(r, e)
                var i = new (t.bind.apply(t, r))()
                return n && Q(i, n.prototype), i
              })(t, arguments, Z(this).constructor)
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              Q(n, t)
            )
          }),
          K(t)
        )
      }
      function J() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          )
        } catch (t) {}
        return (J = function () {
          return !!t
        })()
      }
      function Q(t, e) {
        return (
          (Q = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t
              }),
          Q(t, e)
        )
      }
      function Z(t) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          Z(t)
        )
      }
      function tt(t, e, n) {
        et(t, e), e.set(t, n)
      }
      function et(t, e) {
        if (e.has(t))
          throw new TypeError(
            'Cannot initialize the same private elements twice on an object'
          )
      }
      function nt(t, e, n) {
        return n(ot(t, e))
      }
      function rt(t, e) {
        return t.get(ot(t, e))
      }
      function it(t, e, n) {
        return t.set(ot(t, e), n), n
      }
      function ot(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n
        throw new TypeError('Private element is not present on this object')
      }
      var at = ['media-id'],
        st = [
          'aspect',
          'audio-description-control',
          'autoplay',
          'big-play-button',
          'branding',
          'controls-visible-on-load',
          'copy-link-and-thumbnail',
          'current-time',
          'do-not-track',
          'email',
          'end-video-behavior',
          'fullscreen-control',
          'muted',
          'playback-rate-control',
          'play-bar-control',
          'player-color',
          'playlist-links',
          'playlist-loop',
          'play-pause-control',
          'play-pause-notifier',
          'popover-animate-thumbnail',
          'popover-animation',
          'popover-border-color',
          'popover-border-radius',
          'popover-border-width',
          'popover-box-shadow',
          'popover-caption',
          'popover-caption-container',
          'popover-content',
          'popover-disable-autoplay',
          'popover-overlay-color',
          'popover-overlay-opacity',
          'popover-prevent-scroll',
          'popover-show-on-load',
          'poster',
          'preload',
          'quality-control',
          'quality-max',
          'quality-min',
          'resumable',
          'rounded-player',
          'seo',
          'settings-control',
          'silent-autoplay',
          'transparent-letterbox',
          'video-quality',
          'volume',
          'volume-control',
          'wistia-popover'
        ],
        ut = [
          'big-play-button-border-radius',
          'control-bar-border-radius',
          'embed-host',
          'hls',
          'page-url',
          'player-border-radius',
          'player-force',
          'stats-url',
          'swatch',
          'unique-id',
          'use-web-component'
        ],
        ct = {
          audioDescriptionControl: !1,
          autoplay: !1,
          bigPlayButton: !0,
          bigPlayButtonBorderRadius: void 0,
          controlBarBorderRadius: void 0,
          controlsVisibleOnLoad: !0,
          copyLinkAndThumbnail: !0,
          currentTime: 0,
          doNotTrack: !1,
          endVideoBehavior: 'default',
          fullscreenControl: !0,
          hls: !0,
          playBarControl: !0,
          playerBorderRadius: void 0,
          playerColor: '636155',
          playPauseControl: !0,
          playPauseNotifier: !0,
          playbackRateControl: !0,
          playlistLinks: '',
          playlistLoop: !1,
          popoverAnimateThumbnail: !1,
          popoverAnimation: 'slide',
          popoverBorderColor: 'ffffff',
          popoverBorderRadius: 0,
          popoverBorderWidth: 0,
          popoverBoxShadow: !0,
          popoverCaption: '',
          popoverCaptionContainer: '',
          popoverContent: void 0,
          popoverDisableAutoplay: !1,
          popoverOverlayColor: '000000',
          popoverOverlayOpacity: 0.5,
          popoverPreventScroll: !1,
          popoverShowOnLoad: !1,
          poster: '',
          qualityControl: !0,
          qualityMax: void 0,
          qualityMin: void 0,
          resumable: 'auto',
          roundedPlayer: void 0,
          seo: !0,
          settingsControl: !0,
          silentAutoplay: !1,
          state: 'beforeplay',
          statsUrl: null,
          transparentLetterbox: !1,
          volume: 1,
          volumeControl: !0,
          wistiaPopover: !1
        },
        lt = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '',
            n = (0, b.cdnFastWistiaComHost)(e)
          return 'https://'.concat(n, '/embed/medias/').concat(t, '/swatch')
        },
        ft = new WeakMap(),
        ht = new WeakMap(),
        dt = new WeakMap(),
        pt = new WeakMap(),
        vt = new WeakMap(),
        yt = new WeakMap(),
        mt = new WeakMap(),
        gt = new WeakMap(),
        bt = new WeakMap(),
        _t = new WeakMap(),
        wt = new WeakMap(),
        Ot = new WeakMap(),
        kt = new WeakMap(),
        Et = new WeakMap(),
        St = new WeakMap(),
        Pt = new WeakMap(),
        Tt = new WeakMap(),
        xt = new WeakMap(),
        jt = new WeakSet(),
        At = new WeakMap(),
        Lt = (function (t) {
          function e() {
            var t, n, r
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
              (t = X(this, e)),
              et((n = t), (r = jt)),
              r.add(n),
              tt(t, ft, void 0),
              tt(t, ht, {
                heightBeforeFullscreen: void 0,
                inFullscreen: !1,
                nativeFullscreen: !1,
                widthBeforeFullscreen: void 0
              }),
              tt(t, dt, void 0),
              tt(t, pt, void 0),
              tt(t, vt, void 0),
              tt(t, yt, null),
              tt(t, mt, void 0),
              tt(t, gt, void 0),
              tt(t, bt, void 0),
              tt(t, _t, void 0),
              tt(t, wt, []),
              tt(t, Ot, !1),
              tt(t, kt, '0px'),
              tt(t, Et, !1),
              tt(t, St, null),
              tt(t, Pt, null),
              tt(
                t,
                Tt,
                (0, k.runScript)(
                  ''
                    .concat((0, x.proto)(), '//')
                    .concat(
                      (0, l.appHostname)('fast'),
                      '/assets/external/publicApi.js'
                    )
                )
              ),
              tt(t, xt, null),
              tt(t, At, function () {
                it(Et, t, !0), ot(jt, t, Gt).call(t)
              }),
              'attachInternals' in HTMLElement.prototype &&
                'states' in ElementInternals.prototype &&
                (it(pt, t, t.attachInternals()),
                rt(pt, t).states.add('--initializing')),
              t.attachShadow({ mode: 'open' }),
              t.dispatchEvent(new CustomEvent('load-start')),
              (t.paddingTop = getComputedStyle(t).paddingTop),
              it(mt, t, C.wlog.getPrefixedFunctions('WistiaPlayer')),
              it(bt, t, new c.PlayerDataHandler()),
              void 0 === o.Wistia.wistia && (o.Wistia.wistia = Date.now()),
              t
            )
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && Q(t, e)
            })(e, t),
            (n = e),
            (r = [
              {
                key: '_fullscreenState',
                get: function () {
                  return rt(ht, this)
                },
                set: function (t) {
                  it(ht, this, t)
                }
              },
              {
                key: '_oldEngine',
                get: function () {
                  return rt(gt, this)
                },
                set: function (t) {
                  it(gt, this, t)
                }
              },
              {
                key: 'aspect',
                get: function () {
                  var t,
                    e,
                    n,
                    r,
                    i =
                      !Number.isNaN(this.offsetWidth / this.offsetHeight) &&
                      Number.isFinite(this.offsetWidth / this.offsetHeight)
                        ? this.offsetWidth / this.offsetHeight
                        : u.DEFAULT_ASPECT
                  return null !==
                    (t =
                      null !==
                        (e =
                          null !==
                            (n =
                              null === (r = rt(dt, this)) || void 0 === r
                                ? void 0
                                : r.aspect()) && void 0 !== n
                            ? n
                            : this.embedOptions.aspect) && void 0 !== e
                        ? e
                        : ot(jt, this, Mt).call(this, 'aspect')) && void 0 !== t
                    ? t
                    : i
                },
                set: function (t) {
                  var e
                  ot(jt, this, Yt).call(this, 'aspect', t),
                    null === (e = rt(dt, this)) ||
                      void 0 === e ||
                      e.width((0, y.elemWidth)(this), { constrain: !0 })
                }
              },
              {
                key: 'audioDescriptionControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'audioDescriptionControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.audioDescriptionControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'audioDescriptionControl', t)
                }
              },
              {
                key: 'authorization',
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'authorization', t)
                }
              },
              {
                key: 'autoplay',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'autoplay')
                },
                set: function (t) {
                  'boolean' == typeof t &&
                    (ot(jt, this, Yt).call(this, 'autoplay', t),
                    t
                      ? this.setAttribute('autoplay', '')
                      : this.removeAttribute('autoplay'))
                }
              },
              {
                key: 'bigPlayButton',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'bigPlayButton')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.bigPlayButtonEnabled(t),
                    ot(jt, this, Yt).call(this, 'bigPlayButton', t)
                }
              },
              {
                key: 'bigPlayButtonBorderRadius',
                get: function () {
                  return ot(jt, this, Dt).call(
                    this,
                    'bigPlayButtonBorderRadius'
                  )
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setBigPlayButtonBorderRadius(Number(t)),
                    ot(jt, this, Yt).call(this, 'bigPlayButtonBorderRadius', t)
                }
              },
              {
                key: 'branding',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'branding')
                },
                set: function (t) {
                  ;('true' !== t && !0 !== t) ||
                    ot(jt, this, Yt).call(this, 'branding', !0)
                }
              },
              {
                key: 'buffered',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.getStandardBuffered()) && void 0 !== t
                    ? t
                    : {}
                }
              },
              {
                key: 'controlBarBorderRadius',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'controlBarBorderRadius')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setControlBarBorderRadius(Number(t)),
                    ot(jt, this, Yt).call(this, 'controlBarBorderRadius', t)
                }
              },
              {
                key: 'controls',
                get: function () {
                  return rt(dt, this)
                    ? Object.seal(G({}, rt(dt, this).controls))
                    : {}
                }
              },
              {
                key: 'controlsVisibleOnLoad',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'controlsVisibleOnLoad')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) || void 0 === e || e.renderUI(),
                    ot(jt, this, Yt).call(this, 'controlsVisibleOnLoad', t)
                }
              },
              {
                key: 'copyLinkAndThumbnail',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'copyLinkAndThumbnail')
                },
                set: function (t) {
                  var e = this.copyLinkAndThumbnail
                  ot(jt, this, Yt).call(this, 'copyLinkAndThumbnail', t),
                    e !== t &&
                      this.dispatchEvent(
                        new CustomEvent('copy-link-and-thumbnail-change', {
                          detail: { copyLinkAndThumbnail: t }
                        })
                      )
                }
              },
              {
                key: 'currentTime',
                get: function () {
                  var t, e, n
                  return null !==
                    (t =
                      null !==
                        (e =
                          null === (n = rt(dt, this)) || void 0 === n
                            ? void 0
                            : n.time()) && void 0 !== e
                        ? e
                        : this.embedOptions.currentTime) && void 0 !== t
                    ? t
                    : 0
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) || void 0 === e || e.time(t),
                    ot(jt, this, Yt).call(this, 'currentTime', t)
                }
              },
              {
                key: 'debug',
                get: function () {
                  var t
                  return {
                    impl: rt(dt, this),
                    engine:
                      null === (t = rt(dt, this)) || void 0 === t
                        ? void 0
                        : t.engine
                  }
                }
              },
              {
                key: 'deprecatedApiDoNotUse',
                get: function () {
                  return rt(ft, this)
                }
              },
              {
                key: 'doNotTrack',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'doNotTrack')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'doNotTrack', t)
                }
              },
              {
                key: 'duration',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.duration()) && void 0 !== t
                    ? t
                    : 0
                }
              },
              {
                key: 'email',
                get: function () {
                  var t, e, n, r
                  return null !==
                    (t =
                      null !==
                        (e =
                          null !==
                            (n = (0, g.extractEmailFromParams)(
                              nt(jt, this, Ct)
                            )) && void 0 !== n
                            ? n
                            : null ===
                                  (r = (0, j.getWistiaLocalStorage)()[
                                    nt(jt, this, Ct)
                                  ]) || void 0 === r
                              ? void 0
                              : r.trackEmail) && void 0 !== e
                        ? e
                        : this.embedOptions.email) && void 0 !== t
                    ? t
                    : void 0
                },
                set: function (t) {
                  this.email !== t &&
                    (ot(jt, this, Jt).call(this, t),
                    ot(jt, this, Yt).call(this, 'email', t))
                }
              },
              {
                key: 'embedHost',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'embedHost')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'embedHost', t)
                }
              },
              {
                key: 'embedOptions',
                get: function () {
                  return rt(bt, this).embedOptions
                }
              },
              {
                key: 'ended',
                get: function () {
                  var t
                  return (
                    'ended' ===
                    (null === (t = rt(dt, this)) || void 0 === t
                      ? void 0
                      : t.state())
                  )
                }
              },
              {
                key: 'endVideoBehavior',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'endVideoBehavior')
                },
                set: function (t) {
                  var e, n
                  'loop' === t
                    ? null === (e = rt(dt, this)) ||
                      void 0 === e ||
                      e.addLoopBehavior()
                    : null === (n = rt(dt, this)) ||
                      void 0 === n ||
                      n.removeLoopBehavior(),
                    ot(jt, this, Yt).call(this, 'endVideoBehavior', t)
                }
              },
              {
                key: 'eventKey',
                get: function () {
                  var t
                  return null === (t = rt(dt, this)) || void 0 === t
                    ? void 0
                    : t.eventKey()
                }
              },
              {
                key: 'fullscreenControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'fullscreenControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.fullscreenControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'fullscreenControl', t)
                }
              },
              {
                key: 'hls',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'hls')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'hls', t)
                }
              },
              {
                key: 'inFullscreen',
                get: function () {
                  var t, e
                  return (
                    null !==
                      (t =
                        null === (e = rt(dt, this)) || void 0 === e
                          ? void 0
                          : e.inFullscreen()) &&
                    void 0 !== t &&
                    t
                  )
                }
              },
              {
                key: 'inputContext',
                get: function () {
                  var t
                  return null === (t = rt(dt, this)) || void 0 === t
                    ? void 0
                    : t.getInputContext()
                }
              },
              {
                key: 'instantHls',
                get: function () {
                  var t, e
                  return (
                    null !==
                      (t =
                        null === (e = rt(dt, this)) || void 0 === e
                          ? void 0
                          : e.isInstantHls()) &&
                    void 0 !== t &&
                    t
                  )
                }
              },
              {
                key: 'mediaData',
                get: function () {
                  return rt(bt, this).mediaData
                }
              },
              {
                key: 'mediaId',
                get: function () {
                  var t
                  return null !== (t = this.getAttribute('media-id')) &&
                    void 0 !== t
                    ? t
                    : ''
                },
                set: function (t) {
                  this.mediaId !== t &&
                    (rt(mt, this).info('set mediaId', t),
                    this.setAttribute('media-id', t))
                }
              },
              {
                key: 'muted',
                get: function () {
                  var t, e, n
                  return (
                    null !==
                      (t =
                        null !==
                          (e =
                            null === (n = rt(dt, this)) || void 0 === n
                              ? void 0
                              : n.isMuted()) && void 0 !== e
                          ? e
                          : this.embedOptions.muted) &&
                    void 0 !== t &&
                    t
                  )
                },
                set: function (t) {
                  rt(dt, this) &&
                    (t ? rt(dt, this).mute() : rt(dt, this).unmute()),
                    ot(jt, this, Yt).call(this, 'muted', t)
                }
              },
              {
                key: 'name',
                get: function () {
                  var t, e, n, r
                  return null !==
                    (t =
                      null !== (e = rt(bt, this).mediaData.name) && void 0 !== e
                        ? e
                        : null === (n = rt(ft, this)) ||
                            void 0 === n ||
                            null === (r = n._mediaData) ||
                            void 0 === r
                          ? void 0
                          : r.name) && void 0 !== t
                    ? t
                    : void 0
                }
              },
              {
                key: 'paddingTop',
                get: function () {
                  return rt(kt, this)
                },
                set: function (t) {
                  it(kt, this, t)
                }
              },
              {
                key: 'paused',
                get: function () {
                  var t
                  return (
                    'paused' ===
                    (null === (t = rt(dt, this)) || void 0 === t
                      ? void 0
                      : t.state())
                  )
                }
              },
              {
                key: 'percentWatched',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.percentWatched()) && void 0 !== t
                    ? t
                    : 0
                }
              },
              {
                key: 'playbackRate',
                get: function () {
                  var t, e, n
                  return null !==
                    (t =
                      null !==
                        (e =
                          null === (n = rt(dt, this)) || void 0 === n
                            ? void 0
                            : n.playbackRate()) && void 0 !== e
                        ? e
                        : this.embedOptions.playbackRate) && void 0 !== t
                    ? t
                    : 1
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playbackRate(t),
                    ot(jt, this, Yt).call(this, 'playbackRate', t)
                }
              },
              {
                key: 'playbackRateControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playbackRateControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playbackRateControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'playbackRateControl', t)
                }
              },
              {
                key: 'playBarControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playBarControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playbarControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'playBarControl', t)
                }
              },
              {
                key: 'playerBorderRadius',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playerBorderRadius')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setPlayerBorderRadius(Number(t)),
                    ot(jt, this, Yt).call(this, 'playerBorderRadius', t)
                }
              },
              {
                key: 'playerColor',
                get: function () {
                  var t, e
                  return null !== (t = this.playerColorGradient) &&
                    void 0 !== t &&
                    t.on &&
                    null !==
                      (e = (0, i.getGradientColor)(this.playerColorGradient)) &&
                    void 0 !== e
                    ? e
                    : ot(jt, this, Dt).call(this, 'playerColor')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playerColor(t),
                    ot(jt, this, Yt).call(this, 'playerColor', t)
                }
              },
              {
                key: 'playerColorGradient',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playerColorGradient')
                },
                set: function (t) {
                  var e
                  if (!(0, N.isGradient)(t))
                    throw new Error(
                      'playerColorGradient must be a valid gradient object'
                    )
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playerColorGradient(t),
                    ot(jt, this, Yt).call(this, 'playerColorGradient', t)
                }
              },
              {
                key: 'playerForce',
                get: function () {
                  var t
                  return null !== (t = this.getAttribute('player-force')) &&
                    void 0 !== t
                    ? t
                    : void 0
                },
                set: function (t) {
                  rt(mt, this).info('set playerForce', t),
                    this.setAttribute('player-force', t)
                }
              },
              {
                key: 'playlistLinks',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playlistLinks')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'playlistLinks', t)
                }
              },
              {
                key: 'playlistLoop',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playlistLoop')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'playlistLoop', t)
                }
              },
              {
                key: 'playPauseControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playPauseControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playPauseControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'playPauseControl', t)
                }
              },
              {
                key: 'playPauseNotifier',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'playPauseNotifier')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.playPauseNotifierEnabled(t),
                    ot(jt, this, Yt).call(this, 'playPauseNotifier', t)
                }
              },
              {
                key: 'plugins',
                get: function () {
                  return rt(dt, this)
                    ? Object.seal(G({}, rt(dt, this).plugin))
                    : {}
                }
              },
              {
                key: 'popoverAnimateThumbnail',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverAnimateThumbnail')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverAnimateThumbnail', t)
                }
              },
              {
                key: 'popoverAnimation',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverAnimation')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverAnimation', t)
                }
              },
              {
                key: 'popoverBorderColor',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverBorderColor')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverBorderColor', t)
                }
              },
              {
                key: 'popoverBorderRadius',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverBorderRadius')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverBorderRadius', t)
                }
              },
              {
                key: 'popoverBorderWidth',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverBorderWidth')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverBorderWidth', t)
                }
              },
              {
                key: 'popoverBoxShadow',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverBoxShadow')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverBoxShadow', t)
                }
              },
              {
                key: 'popoverCaption',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverCaption')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverCaption', t)
                }
              },
              {
                key: 'popoverCaptionContainer',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverCaptionContainer')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverCaptionContainer', t)
                }
              },
              {
                key: 'popoverContent',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverContent')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverContent', t)
                }
              },
              {
                key: 'popoverDisableAutoplay',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverDisableAutoplay')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverDisableAutoplay', t)
                }
              },
              {
                key: 'popoverOverlayColor',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverOverlayColor')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverOverlayColor', t)
                }
              },
              {
                key: 'popoverOverlayOpacity',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverOverlayOpacity')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverOverlayOpacity', t)
                }
              },
              {
                key: 'popoverPreventScroll',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverPreventScroll')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverPreventScroll', t)
                }
              },
              {
                key: 'popoverShowOnLoad',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'popoverShowOnLoad')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'popoverShowOnLoad', t)
                }
              },
              {
                key: 'poster',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'poster')
                },
                set: function (t) {
                  if (this.poster !== t) {
                    var e = this.poster
                    ot(jt, this, Yt).call(this, 'poster', t),
                      this.setAttribute('poster', t),
                      e !== t &&
                        this.dispatchEvent(new CustomEvent('thumbnailchange'))
                  }
                }
              },
              {
                key: 'preload',
                get: function () {
                  var t, e, n
                  return null !==
                    (t =
                      null !==
                        (e =
                          null === (n = rt(dt, this)) || void 0 === n
                            ? void 0
                            : n.preloadValue()) && void 0 !== e
                        ? e
                        : this.embedOptions.preload) && void 0 !== t
                    ? t
                    : void 0
                },
                set: function (t) {
                  this.preload !== t &&
                    (ot(jt, this, Yt).call(this, 'preload', t),
                    this.setAttribute('preload', t))
                }
              },
              {
                key: 'qualityControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'qualityControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.qualityControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'qualityControl', t)
                }
              },
              {
                key: 'qualityMax',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'qualityMax')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.qualityMax(t),
                    ot(jt, this, Yt).call(this, 'qualityMax', t)
                }
              },
              {
                key: 'qualityMin',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'qualityMin')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.qualityMin(t),
                    ot(jt, this, Yt).call(this, 'qualityMin', t)
                }
              },
              {
                key: 'readyState',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.getReadyState()) && void 0 !== t
                    ? t
                    : 0
                }
              },
              {
                key: 'resumable',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'resumable')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setResumable(t),
                    ot(jt, this, Yt).call(this, 'resumable', t)
                }
              },
              {
                key: 'roundedPlayer',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'roundedPlayer')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setRoundedPlayer(Number(t)),
                    ot(jt, this, Yt).call(this, 'roundedPlayer', t)
                }
              },
              {
                key: 'secondsWatched',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.secondsWatched()) && void 0 !== t
                    ? t
                    : 0
                }
              },
              {
                key: 'secondsWatchedVector',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(dt, this)) || void 0 === e
                        ? void 0
                        : e.secondsWatchedVector()) && void 0 !== t
                    ? t
                    : []
                }
              },
              {
                key: 'seo',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'seo')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'seo', t)
                }
              },
              {
                key: 'settingsControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'settingsControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.settingsControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'settingsControl', t)
                }
              },
              {
                key: 'silentAutoplay',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'silentAutoplay')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'silentAutoplay', t)
                }
              },
              {
                key: 'state',
                get: function () {
                  var t, e
                  return null !==
                    (t =
                      null === (e = rt(ft, this)) || void 0 === e
                        ? void 0
                        : e.state()) && void 0 !== t
                    ? t
                    : ct.state
                }
              },
              {
                key: 'statsUrl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'statsUrl')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'statsUrl', t)
                }
              },
              {
                key: 'swatch',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'swatch')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'swatch', t)
                }
              },
              {
                key: 'transparentLetterbox',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'transparentLetterbox')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'transparentLetterbox', t)
                }
              },
              {
                key: 'uniqueId',
                get: function () {
                  var t
                  return null !== (t = this.getAttribute('unique-id')) &&
                    void 0 !== t
                    ? t
                    : ''
                },
                set: function (t) {
                  this.setAttribute('unique-id', t)
                }
              },
              {
                key: 'useWebComponent',
                get: function () {
                  return 'true' === this.getAttribute('use-web-component')
                },
                set: function (t) {
                  t
                    ? this.setAttribute('use-web-component', String(t))
                    : this.removeAttribute('use-web-component')
                }
              },
              {
                key: 'videoQuality',
                get: function () {
                  var t, e, n
                  return null !==
                    (t =
                      null !==
                        (e =
                          null === (n = rt(dt, this)) || void 0 === n
                            ? void 0
                            : n.getVideoQuality()) && void 0 !== e
                        ? e
                        : this.embedOptions.videoQuality) && void 0 !== t
                    ? t
                    : 'auto'
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.setVideoQuality(t),
                    ot(jt, this, Yt).call(this, 'videoQuality', t)
                }
              },
              {
                key: 'visitorKey',
                get: function () {
                  var t
                  return null === (t = o.Wistia.visitorKey) || void 0 === t
                    ? void 0
                    : t.value()
                }
              },
              {
                key: 'volume',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'volume')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) || void 0 === e || e.volume(t),
                    ot(jt, this, Yt).call(this, 'volume', t)
                }
              },
              {
                key: 'volumeControl',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'volumeControl')
                },
                set: function (t) {
                  var e
                  null === (e = rt(dt, this)) ||
                    void 0 === e ||
                    e.volumeControlEnabled(t),
                    ot(jt, this, Yt).call(this, 'volumeControl', t)
                }
              },
              {
                key: 'wistiaPopover',
                get: function () {
                  return ot(jt, this, Dt).call(this, 'wistiaPopover')
                },
                set: function (t) {
                  ot(jt, this, Yt).call(this, 'wistiaPopover', t)
                }
              },
              {
                key: 'cancelFullscreen',
                value:
                  ((Z = q(
                    F().mark(function t() {
                      var e,
                        n = this
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  null === (e = rt(dt, this)) || void 0 === e
                                    ? void 0
                                    : e.cancelFullscreen().then(function () {
                                        ;(n._fullscreenState.heightBeforeFullscreen =
                                          void 0),
                                          (n._fullscreenState.widthBeforeFullscreen =
                                            void 0)
                                      })
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function () {
                    return Z.apply(this, arguments)
                  })
              },
              {
                key: 'createOverlay',
                value:
                  ((J = q(
                    F().mark(function t(e, n) {
                      var r
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (r = rt(dt, this)) ||
                                  void 0 === r ||
                                  !r.defineOverlay
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).defineOverlay(e, n)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'overlay '.concat(
                                        e,
                                        ' cannot be defined at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t, e) {
                    return J.apply(this, arguments)
                  })
              },
              {
                key: 'definePlugin',
                value:
                  ((K = q(
                    F().mark(function t(e, n) {
                      var r,
                        i = this
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((r = (function () {
                                    var t = q(
                                      F().mark(function t() {
                                        var r, o
                                        return F().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return t.abrupt(
                                                  'return',
                                                  null !==
                                                    (r =
                                                      null ===
                                                        (o = rt(ft, i)) ||
                                                      void 0 === o
                                                        ? void 0
                                                        : o.addPlugin(e, n)) &&
                                                    void 0 !== r
                                                    ? r
                                                    : Promise.reject(
                                                        new Error(
                                                          'plugin '.concat(
                                                            e,
                                                            ' cannot be defined'
                                                          )
                                                        )
                                                      )
                                                )
                                              case 1:
                                              case 'end':
                                                return t.stop()
                                            }
                                        }, t)
                                      })
                                    )
                                    return function () {
                                      return t.apply(this, arguments)
                                    }
                                  })()),
                                  !rt(ft, this))
                                ) {
                                  t.next = 3
                                  break
                                }
                                return t.abrupt('return', r())
                              case 3:
                                return t.abrupt(
                                  'return',
                                  new Promise(function (t, e) {
                                    i.whenApiReady()
                                      .then(function () {
                                        r()
                                          .then(function (e) {
                                            return t(e)
                                          })
                                          .catch(function (t) {
                                            t instanceof Error
                                              ? e(t)
                                              : e(
                                                  new Error(
                                                    'Promise rejected with non-Error value'
                                                  )
                                                )
                                          })
                                      })
                                      .catch(function (t) {})
                                  })
                                )
                              case 4:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t, e) {
                    return K.apply(this, arguments)
                  })
              },
              {
                key: 'deleteOverlay',
                value:
                  ((Y = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.undefineOverlay
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).undefineOverlay(e)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'overlay '.concat(
                                        e,
                                        ' cannot be deleted at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return Y.apply(this, arguments)
                  })
              },
              {
                key: 'disableControl',
                value:
                  ((z = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.setControlEnabled
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).setControlEnabled(e, !1)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'control "'.concat(
                                        e,
                                        '" cannot be disabled at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return z.apply(this, arguments)
                  })
              },
              {
                key: 'enableControl',
                value:
                  ((V = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.setControlEnabled
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).setControlEnabled(e, !0)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'control "'.concat(
                                        e,
                                        '" cannot be enabled at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return V.apply(this, arguments)
                  })
              },
              {
                key: 'enterInputContext',
                value:
                  ((U = q(
                    F().mark(function t(e) {
                      var n,
                        r = this
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.enterInputContext
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  new Promise(function (t) {
                                    var n,
                                      i = function (n) {
                                        n.detail.context === e && t(),
                                          r.removeEventListener(
                                            m.INPUT_CONTEXT_CHANGE_EVENT,
                                            i
                                          )
                                      }
                                    r.addEventListener(
                                      m.INPUT_CONTEXT_CHANGE_EVENT,
                                      i
                                    ),
                                      null === (n = rt(dt, r)) ||
                                        void 0 === n ||
                                        n.enterInputContext(e)
                                  })
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'input context of name "'.concat(
                                        e,
                                        '" cannot be enabled at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return U.apply(this, arguments)
                  })
              },
              {
                key: 'exitInputContext',
                value:
                  ((H = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.exitInputContext
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  Promise.resolve(
                                    rt(dt, this).exitInputContext(e)
                                  )
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'control "'.concat(
                                        e,
                                        '" cannot be enabled at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return H.apply(this, arguments)
                  })
              },
              {
                key: 'getPlugin',
                value:
                  ((R = q(
                    F().mark(function t(e) {
                      var n = this
                      return F().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                new Promise(function (t, r) {
                                  var i
                                  null !== (i = rt(ft, n)) &&
                                    void 0 !== i &&
                                    i.plugin(e) &&
                                    t(rt(ft, n).plugin(e)),
                                    r(
                                      new Error(
                                        'plugin '.concat(e, ' is not defined')
                                      )
                                    )
                                })
                              )
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )),
                  function (t) {
                    return R.apply(this, arguments)
                  })
              },
              {
                key: 'hideOverlay',
                value:
                  ((M = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.cancelOverlay
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).cancelOverlay(e)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'overlay '.concat(
                                        e,
                                        ' cannot be cancelled at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return M.apply(this, arguments)
                  })
              },
              {
                key: 'hidePopover',
                value:
                  ((T = q(
                    F().mark(function t() {
                      var e = this
                      return F().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                new Promise(function (t, n) {
                                  var r
                                  null !== (r = rt(ft, e)) &&
                                    void 0 !== r &&
                                    r.popover &&
                                    (rt(ft, e).popover.hide(), t()),
                                    n(new Error('Popover cannot be accessed'))
                                })
                              )
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )),
                  function () {
                    return T.apply(this, arguments)
                  })
              },
              {
                key: 'pause',
                value:
                  ((S = q(
                    F().mark(function t() {
                      var e
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  null === (e = rt(dt, this)) || void 0 === e
                                    ? void 0
                                    : e.pause()
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function () {
                    return S.apply(this, arguments)
                  })
              },
              {
                key: 'play',
                value:
                  ((E = q(
                    F().mark(function t() {
                      var e
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  null === (e = rt(dt, this)) || void 0 === e
                                    ? void 0
                                    : e.play()
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function () {
                    return E.apply(this, arguments)
                  })
              },
              {
                key: 'releaseControls',
                value:
                  ((O = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  null === (n = rt(dt, this)) || void 0 === n
                                    ? void 0
                                    : n.releaseControls(e)
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return O.apply(this, arguments)
                  })
              },
              {
                key: 'replaceWithMedia',
                value:
                  ((_ = q(
                    F().mark(function t(e) {
                      var n,
                        r = this,
                        i = arguments
                      return F().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n =
                                  i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                                t.abrupt(
                                  'return',
                                  new Promise(function (t, i) {
                                    var o
                                    rt(ft, r) ||
                                      i(new Error('api not ready to replace'))
                                    var a = function () {
                                        ;(r.uniqueId = ot(jt, r, Wt).call(
                                          r,
                                          e
                                        )),
                                          r.removeEventListener(
                                            m.BEFORE_REPLACE_EVENT,
                                            a
                                          )
                                      },
                                      s = function () {
                                        ;(r.mediaId = e),
                                          ot(jt, r, Ut).call(r),
                                          (0, v.setEmbedOptionStore)(
                                            '__'.concat(
                                              r.uniqueId,
                                              '_dom_options__'
                                            ),
                                            rt(bt, r).embedOptions
                                          ),
                                          r.removeEventListener(
                                            m.AFTER_REPLACE_EVENT,
                                            s
                                          ),
                                          r.whenApiReady().then(function () {
                                            t()
                                          })
                                      }
                                    r.addEventListener(
                                      m.BEFORE_REPLACE_EVENT,
                                      a
                                    ),
                                      r.addEventListener(
                                        m.AFTER_REPLACE_EVENT,
                                        s
                                      ),
                                      (0, W.removeInjectedJsonLd)(rt(vt, r)),
                                      null === (o = rt(ft, r)) ||
                                        void 0 === o ||
                                        o.replaceWith(e, n)
                                  })
                                )
                              )
                            case 2:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )),
                  function (t) {
                    return _.apply(this, arguments)
                  })
              },
              {
                key: 'requestControls',
                value:
                  ((b = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  null === (n = rt(dt, this)) || void 0 === n
                                    ? void 0
                                    : n.requestControls(e)
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return b.apply(this, arguments)
                  })
              },
              {
                key: 'requestFullscreen',
                value:
                  ((p = q(
                    F().mark(function t() {
                      var e
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (e = rt(dt, this)) ||
                                  void 0 === e ||
                                  !e.requestFullscreen
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).requestFullscreen()
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error('Fullscreen cannot be accessed')
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function () {
                    return p.apply(this, arguments)
                  })
              },
              {
                key: 'showOverlay',
                value:
                  ((d = q(
                    F().mark(function t(e) {
                      var n
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  null === (n = rt(dt, this)) ||
                                  void 0 === n ||
                                  !n.requestOverlay
                                ) {
                                  t.next = 2
                                  break
                                }
                                return t.abrupt(
                                  'return',
                                  rt(dt, this).requestOverlay(e)
                                )
                              case 2:
                                return t.abrupt(
                                  'return',
                                  Promise.reject(
                                    new Error(
                                      'overlay '.concat(
                                        e,
                                        ' cannot be requested at this time'
                                      )
                                    )
                                  )
                                )
                              case 3:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return d.apply(this, arguments)
                  })
              },
              {
                key: 'showPopover',
                value:
                  ((h = q(
                    F().mark(function t() {
                      var e = this
                      return F().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                new Promise(function (t, n) {
                                  var r
                                  null !== (r = rt(ft, e)) &&
                                    void 0 !== r &&
                                    r.popover &&
                                    (rt(ft, e).popover.show(), t()),
                                    n(new Error('Popover cannot be accessed'))
                                })
                              )
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )),
                  function () {
                    return h.apply(this, arguments)
                  })
              },
              {
                key: 'whenApiReady',
                value:
                  ((f = q(
                    F().mark(function t() {
                      var e = this
                      return F().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                new Promise(function (t) {
                                  rt(ft, e) &&
                                    rt(ft, e).ready(function () {
                                      t()
                                    })
                                  var n = function () {
                                    e.removeEventListener(m.API_READY_EVENT, n),
                                      t()
                                  }
                                  e.addEventListener(m.API_READY_EVENT, n)
                                })
                              )
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    })
                  )),
                  function () {
                    return f.apply(this, arguments)
                  })
              },
              {
                key: 'whenControlMounted',
                value:
                  ((s = q(
                    F().mark(function t(e) {
                      var n, r
                      return F().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.whenApiReady()
                              case 2:
                                return (
                                  (t.next = 4),
                                  null === (n = rt(ft, this)) || void 0 === n
                                    ? void 0
                                    : n.whenControlMounted(e)
                                )
                              case 4:
                                if ((r = t.sent)) {
                                  t.next = 7
                                  break
                                }
                                throw new Error('Control not found')
                              case 7:
                                return t.abrupt('return', r)
                              case 8:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )),
                  function (t) {
                    return s.apply(this, arguments)
                  })
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  if (rt(Ot, this) && e !== n && (null !== e || '' !== n)) {
                    var r = n
                    switch (n) {
                      case 'true':
                        r = !0
                        break
                      case 'false':
                        r = !1
                    }
                    this[(0, B.kebabCaseToCamelCase)(t)] = r
                  }
                }
              },
              {
                key: 'connectedCallback',
                value: function () {
                  var t,
                    e,
                    n = this
                  if (!rt(Ot, this)) {
                    it(Ot, this, !0)
                    var r = this.getAttribute('media-id')
                    if (null == r)
                      throw (
                        ((0, P.countMetric)('player/failure/init-failed'),
                        new Error('media-id attribute is required'))
                      )
                    window.wistiaOptions =
                      null !== (t = window.wistiaOptions) && void 0 !== t
                        ? t
                        : {}
                    var i = (0, A.getWistiaOptions)(this.mediaId)
                    if (
                      (rt(bt, this).setWistiaWindowEmbedOptionSource(i),
                      it(
                        mt,
                        this,
                        C.wlog.getPrefixedFunctions('WistiaPlayer '.concat(r))
                      ),
                      it(yt, this, (0, w.buildContext)()),
                      'true' === this.getAttribute('react') &&
                        (0, P.countMetric)('player/initembed.react'),
                      ot(jt, this, Xt).call(this),
                      rt(mt, this).info('initialize embed'),
                      this.useWebComponent || (0, L.maybeStartWistiaQueue)(),
                      (this.uniqueId = ot(jt, this, Wt).call(this, r)),
                      ot(jt, this, qt).call(this),
                      ot(jt, this, zt).call(this),
                      ot(jt, this, $t).call(this),
                      it(
                        xt,
                        this,
                        new ResizeObserver(function () {
                          ot(jt, n, Gt).call(n)
                        })
                      ),
                      rt(xt, this).observe(this),
                      (0, D.getInitialMediaData)(r, {
                        embedHost:
                          null !== (e = this.embedHost) && void 0 !== e ? e : ''
                      })
                        .then(function (t) {
                          rt(bt, n).setMediaDataSource(t),
                            n.dispatchEvent(
                              new CustomEvent(m.LOADED_MEDIA_DATA_EVENT, {
                                detail: { mediaData: rt(bt, n).mediaData }
                              })
                            ),
                            ot(jt, n, It).call(n, {
                              container: n.uniqueId,
                              mediaData: rt(bt, n).mediaData
                            })
                        })
                        .catch(function (t) {
                          throw (
                            ((0, P.countMetric)('player/failure/init-failed'),
                            new Error(t.message))
                          )
                        }),
                      this.shadowRoot)
                    ) {
                      if (
                        this.wistiaPopover &&
                        'link' === this.popoverContent
                      ) {
                        var o = document.createElement('slot')
                        ;(o.name = ''.concat(this.uniqueId, '-popover-link')),
                          this.shadowRoot.appendChild(o)
                      }
                      it(St, this, document.createElement('div')),
                        ot(jt, this, Vt).call(this),
                        this.shadowRoot.insertBefore(
                          rt(St, this),
                          this.shadowRoot.firstChild
                        )
                    }
                  }
                }
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  var t, e, n
                  rt(wt, this).forEach(function (t) {
                    return t()
                  }),
                    (0, W.removeInjectedJsonLd)(rt(vt, this)),
                    (0, I.uncacheMediaData)(this.mediaId),
                    null === (t = rt(xt, this)) ||
                      void 0 === t ||
                      t.disconnect(),
                    it(xt, this, null),
                    (0, v.removeEmbedOptionStore)(
                      '__'.concat(this.uniqueId, '_dom_options__')
                    ),
                    null === (e = rt(ft, this)) || void 0 === e || e.remove(),
                    it(ft, this, null),
                    null === (n = this.shadowRoot) ||
                      void 0 === n ||
                      n.replaceChildren(),
                    it(St, this, null),
                    it(Pt, this, null),
                    it(Ot, this, !1)
                }
              }
            ]),
            (a = [
              {
                key: 'observedAttributes',
                get: function () {
                  return [].concat(at, st, ut)
                }
              }
            ]),
            r && $(n.prototype, r),
            a && $(n, a),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
          )
          var n,
            r,
            a,
            s,
            f,
            h,
            d,
            p,
            b,
            _,
            O,
            E,
            S,
            T,
            M,
            R,
            H,
            U,
            V,
            z,
            Y,
            K,
            J,
            Z
        })(K(HTMLElement))
      function Ct(t) {
        var e
        return null !== (e = t.getAttribute('page-url')) && void 0 !== e
          ? e
          : (0, _.inferPageUrl)()
      }
      function Wt(t) {
        var e = 'wistia-'.concat(t, '-')
        return (0, E.seqId)(e)
      }
      function Dt(t) {
        var e, n
        return rt(dt, this) && t in rt(dt, this)._attrs
          ? rt(dt, this)._attrs[t]
          : null !==
                (e =
                  null !== (n = this.embedOptions[t]) && void 0 !== n
                    ? n
                    : ot(jt, this, Mt).call(
                        this,
                        (0, B.camelCaseToKebabCase)(t)
                      )) && void 0 !== e
            ? e
            : ct[t]
      }
      function Mt(t) {
        if (!this.hasAttribute(t)) return null
        switch (this.getAttribute(t)) {
          case 'true':
          case '':
            return !0
          case 'false':
            return !1
          default:
            return this.getAttribute(t)
        }
      }
      function It(t) {
        var e = t.container,
          n = t.mediaData
        if (rt(Ot, this)) {
          var r
          if (
            (rt(bt, this).updateEmbedOptionOverrides({ videoFoam: !0 }),
            n &&
              !(0, M.isMediaDataError)(n) &&
              (it(
                _t,
                this,
                (0, w.choosePlayer)(
                  rt(yt, this),
                  rt(bt, this).mediaData,
                  rt(bt, this).embedOptions
                )
              ),
              ot(jt, this, Gt).call(this),
              ot(jt, this, Ut).call(this)),
            'attachInternals' in HTMLElement.prototype &&
              'states' in ElementInternals.prototype)
          )
            null === (r = rt(pt, this)) ||
              void 0 === r ||
              r.states.delete('--initializing')
          ot(jt, this, Bt).call(this, this.mediaId, {
            container: e,
            mediaData: n
          })
        }
      }
      function Bt(t, e) {
        return Nt.apply(this, arguments)
      }
      function Nt() {
        return (Nt = q(
          F().mark(function t(e, n) {
            var r,
              i = this
            return F().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), rt(Tt, this)
                    case 2:
                      if (o.Wistia.PublicApi) {
                        t.next = 5
                        break
                      }
                      throw (
                        ((0, P.countMetric)('player/failure/init-failed'),
                        new Error('Wistia.PublicApi is not defined'))
                      )
                    case 5:
                      ;(r = function () {
                        var t
                        ot(jt, i, Ht).call(i),
                          ot(jt, i, Vt).call(i),
                          null === (t = rt(xt, i)) ||
                            void 0 === t ||
                            t.disconnect(),
                          it(xt, i, null),
                          rt(Et, i) && i.play()
                      }),
                        this.addEventListener('embedded', r),
                        rt(wt, this).push(function () {
                          i.removeEventListener('embedded', r)
                        }),
                        it(ft, this, new o.Wistia.PublicApi(e, n)),
                        rt(ft, this).ready(function () {
                          var t
                          null === (t = rt(Pt, i)) ||
                            void 0 === t ||
                            t.remove(),
                            i.removeEventListener('click', rt(At, i)),
                            i.dispatchEvent(
                              new CustomEvent(m.API_READY_EVENT, {
                                detail: { mediaId: e }
                              })
                            ),
                            i.dispatchEvent(
                              new CustomEvent(m.INTERNAL_API_ON_FIND_EVENT, {
                                detail: { mediaId: e, api: rt(ft, i) }
                              })
                            ),
                            rt(dt, i) &&
                              Object.entries(rt(dt, i)._attrs).forEach(
                                function (t) {
                                  var e = R(t, 2),
                                    n = e[0],
                                    r = e[1]
                                  rt(bt, i).updateEmbedOptionOverrides(
                                    z({}, n, r)
                                  )
                                }
                              ),
                            ot(jt, i, Gt).call(i)
                        })
                    case 10:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      function Rt() {
        return (
          this.wistiaPopover &&
          (void 0 === this.popoverContent ||
            '' === this.popoverContent ||
            'thumbnail' === this.popoverContent)
        )
      }
      function Ht() {
        return Ft.apply(this, arguments)
      }
      function Ft() {
        return (Ft = q(
          F().mark(function t() {
            var e,
              n,
              r,
              i = this
            return F().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (rt(ft, this)) {
                        t.next = 2
                        break
                      }
                      return t.abrupt('return')
                    case 2:
                      if (
                        ((e = (0, h.didWinCoinFlip)(
                          S.MUX_PERCENTAGE_TO_ENABLE
                        )),
                        (n =
                          (0, S.shouldEnableMux)(rt(ft, this), e) &&
                          (0, T.isVisitorTrackingEnabled)()),
                        (r = this.useWebComponent
                          ? 'translated-web-component'
                          : 'web-component'),
                        !n)
                      ) {
                        t.next = 11
                        break
                      }
                      return (
                        (t.next = 8),
                        (0, p.dynamicImport)('assets/external/wistia-mux.js')
                      )
                    case 8:
                      t.sent.init(rt(ft, this), { embedType: r }),
                        this.addEventListener(
                          'visitor-tracking-change',
                          function (t) {
                            var e, n
                            t.detail.isTrackingEnabled ||
                              null === (e = rt(ft, i)) ||
                              void 0 === e ||
                              null === (n = e.mux) ||
                              void 0 === n ||
                              n.destroy()
                          }
                        )
                    case 11:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )).apply(this, arguments)
      }
      function Ut() {
        this.seo &&
          'notplayable' !== rt(_t, this) &&
          'passwordprotected' !== rt(_t, this) &&
          (it(vt, this, 'w-json-ld-'.concat(this.uniqueId)),
          (0, W.removeInjectedJsonLd)(rt(vt, this)),
          (0, W.injectJsonLd)(rt(vt, this), rt(bt, this).mediaData, {
            embedOptions: rt(bt, this).embedOptions,
            videoHeight: this.offsetHeight,
            videoWidth: this.offsetWidth
          }))
      }
      function qt() {
        if (window._inWistiaIframe) {
          var t = new URLSearchParams(window.location.search),
            e = Object.fromEntries(t.entries())
          ;(e.pageTitle = document.title),
            (e._inIframe = !0),
            rt(bt, this).setIframeEmbedOptionSource(e)
        }
      }
      function Vt() {
        var t,
          e = this
        if (rt(St, this)) {
          var n = rt(bt, this).mediaData.mediaType,
            i = lt(
              this.mediaId,
              null !== (t = this.embedHost) && void 0 !== t ? t : ''
            ),
            o = '100%'
          0 !== parseFloat(rt(kt, this)) &&
            '' !== rt(kt, this) &&
            (o = ''.concat(parseFloat(rt(kt, this)), 'px'))
          var a = (0, O.getDefaultPlayerBorderRadius)({
            playerBorderRadius: this.playerBorderRadius,
            roundedPlayer: this.roundedPlayer
          })
          ;(0, r.render)(
            (0, r.h)(
              r.Fragment,
              null,
              (0, r.h)(
                'style',
                null,
                ':host {\n              display: flex;\n              position: relative;\n              width: 100%;\n              '.concat(
                  'Audio' === n ? 'min-height: 45px;' : '',
                  '\n            }'
                )
              ),
              ot(jt, this, Kt).call(this) &&
                (0, r.h)(
                  'div',
                  {
                    style: {
                      height: o,
                      left: 0,
                      position: 'absolute',
                      top: 0,
                      width: '100%'
                    },
                    class: 'wistia_swatch'
                  },
                  (0, r.h)(
                    'div',
                    {
                      style: {
                        height: '100%',
                        position: 'relative',
                        width: '100%'
                      }
                    },
                    (0, r.h)(
                      'div',
                      {
                        style: {
                          height: '100%',
                          left: 0,
                          overflow: 'hidden',
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          borderRadius: ''.concat(a, 'px')
                        }
                      },
                      (0, r.h)('img', {
                        src: i,
                        style: {
                          filter: 'blur(5px)',
                          height: '100%',
                          objectFit: 'contain',
                          width: '100%'
                        },
                        alt: '',
                        'aria-hidden': 'true'
                      })
                    )
                  )
                ),
              (0, r.h)('div', {
                ref: function (t) {
                  it(Pt, e, t)
                }
              })
            ),
            rt(St, this)
          )
        }
      }
      function Gt() {
        var t
        if (rt(Pt, this)) {
          var e = rt(bt, this).mediaData,
            n = e.assets,
            i = e.mediaType,
            o = rt(bt, this).embedOptions,
            u = o.autoPlay,
            c = o.plugin,
            l = (0, f.thumbnailAssets)(n, {}),
            h = this.autoplay || u,
            d = void 0 !== (null == c ? void 0 : c.videoThumbnail)
          ;(!this.wistiaPopover || ot(jt, this, Rt).call(this)) &&
            'Audio' !== i &&
            l.length > 0 &&
            !h &&
            !d &&
            (0, r.render)(
              (0, r.h)(
                s.PlayerDataProvider,
                {
                  embedOptions: rt(bt, this).embedOptions,
                  mediaData: rt(bt, this).mediaData
                },
                (0, r.h)(a.PreloadThumbnail, {
                  mediaId: this.mediaId,
                  playerType:
                    null !== (t = this.playerForce) && void 0 !== t
                      ? t
                      : rt(_t, this),
                  playerWidth: this.offsetWidth,
                  isPlayPending: rt(Et, this)
                })
              ),
              rt(Pt, this)
            )
        }
      }
      function zt() {
        var t = this
        null !== ot(jt, this, Mt).call(this, 'current-time') &&
          this.whenApiReady()
            .then(function () {
              var e,
                n,
                r,
                i = Number(ot(jt, t, Mt).call(t, 'current-time')),
                o =
                  null !==
                    (e =
                      (null === (n = rt(ft, t)) || void 0 === n
                        ? void 0
                        : n.popover) && !rt(ft, t).popover.isVisible()) &&
                  void 0 !== e &&
                  e,
                a = (0, d.detectIsMobile)(),
                s = 'playing' !== t.state && (a || o)
              null === (r = rt(dt, t)) ||
                void 0 === r ||
                r.time(i, { lazy: s }),
                ot(jt, t, Yt).call(t, 'currentTime', i)
            })
            .catch(function (t) {}),
          null !== ot(jt, this, Mt).call(this, 'email') &&
            ot(jt, this, Jt).call(this, ot(jt, this, Mt).call(this, 'email')),
          null !== ot(jt, this, Mt).call(this, 'video-quality') &&
            this.whenApiReady()
              .then(function () {
                var e,
                  n = ot(jt, t, Mt).call(t, 'video-quality')
                null === (e = rt(dt, t)) ||
                  void 0 === e ||
                  e.setVideoQuality(n),
                  ot(jt, t, Yt).call(t, 'videoQuality', n)
              })
              .catch(function (t) {})
      }
      function $t() {
        var t = this,
          e = Object.fromEntries(
            Object.entries(this.attributes).map(function (e) {
              var n = R(e, 2)[1]
              return [
                (0, B.kebabCaseToCamelCase)(n.name),
                ot(jt, t, Mt).call(t, n.name)
              ]
            })
          )
        rt(bt, this).setDomEmbedOptionSource(e),
          (0, v.setEmbedOptionStore)(
            '__'.concat(this.uniqueId, '_dom_options__'),
            rt(bt, this).embedOptions
          )
      }
      function Yt(t, e) {
        rt(mt, this).info('set '.concat(t), e.toString()),
          rt(dt, this) && (rt(dt, this)._attrs[t] = e),
          rt(bt, this).updateEmbedOptionOverrides(z({}, t, e)),
          ot(jt, this, Gt).call(this)
      }
      function Xt() {
        var t = this,
          e = function (e) {
            var n = e.detail.mediaData
            ot(jt, t, Qt).call(t, n)
          },
          n = function (e) {
            it(dt, t, e.detail.impl)
          }
        this.addEventListener(m.LOADED_MEDIA_DATA_EVENT, e),
          this.addEventListener(m.IMPL_CREATED_EVENT, n),
          rt(wt, this).push(
            function () {
              t.removeEventListener(m.LOADED_MEDIA_DATA_EVENT, e)
            },
            function () {
              t.removeEventListener(m.IMPL_CREATED_EVENT, n)
            }
          ),
          this.addEventListener('click', rt(At, this), { once: !0 })
      }
      function Kt() {
        return (
          !1 !== this.swatch &&
          (!this.wistiaPopover || ot(jt, this, Rt).call(this))
        )
      }
      function Jt(t) {
        var e = this
        ;(0, j.updateWistiaLocalStorage)(function (n) {
          n[nt(jt, e, Ct)] = G(G({}, n[nt(jt, e, Ct)]), {}, { trackEmail: t })
        }),
          this.dispatchEvent(
            new CustomEvent('emailchange', { detail: { email: t } })
          )
      }
      function Qt(t) {
        rt(bt, this).setMediaDataSource(t),
          it(
            _t,
            this,
            (0, w.choosePlayer)(
              rt(yt, this),
              rt(bt, this).mediaData,
              rt(bt, this).embedOptions
            )
          ),
          ot(jt, this, Gt).call(this)
      }
      void 0 === customElements.get('wistia-player') &&
        customElements.define('wistia-player', Lt)
    },
    (t, e, n) => {
      n.d(e, { PreloadThumbnail: () => m })
      var r = n(2),
        i = n(185),
        o = n(250),
        a = n(127),
        s = n(184),
        u = n(219),
        c = n(43),
        l = n(29),
        f = n(183),
        h = n(130),
        d = n(139),
        p = n(140)
      function v(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(c = !0), (i = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return y(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? y(t, e)
                    : void 0
              )
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function y(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      var m = function (t) {
        var e,
          n,
          y,
          m = t.isPlayPending,
          g = t.mediaId,
          b = t.playerType,
          _ = t.playerWidth,
          w = v((0, i.useState)(!1), 2),
          O = w[0],
          k = w[1]
        ;(0, i.useEffect)(
          function () {
            m && k(!0)
          },
          [m]
        )
        var E = (0, o.usePlayerData)(),
          S = E.embedOptions,
          P = E.mediaData,
          T = S.aspect,
          x = S.bigPlayButton,
          j = S.bpbTime,
          A = S.bigPlayButtonBorderRadius,
          L = S.controlBarBorderRadius,
          C = S.controlsVisibleOnLoad,
          W = S.floatingControlBar,
          D = S.newRoundedIcons,
          M = S.noMixBlendMode,
          I = S.playButton,
          B = S.playerBorderRadius,
          N = S.playerColor,
          R = S.playerColorGradient,
          H = S.playerLanguage,
          F = S.roundedPlayer,
          U = S.thumbnailAltText,
          q = S.transparentLetterbox,
          V = P.aspectRatio,
          G = P.assets,
          z = P.duration,
          $ = P.mediaType,
          Y = P.name,
          X =
            _ /
            (null !== (e = null != T ? T : V) && void 0 !== e
              ? e
              : a.DEFAULT_ASPECT),
          K = Math.min(
            1.3,
            Math.max(
              0.3,
              (0, f.controlMultiplierEstimatedByWidth)(_, [640, 960])
            )
          ),
          J = C && 'vulcan-v2' === b,
          Q = (0, h.getDefaultControlBarDistance)({
            controlBarBorderRadius: L,
            floatingControlBar: W,
            roundedPlayer: F
          }),
          Z = J ? (a.CONTROL_BAR_HEIGHT / 2 + Q) * K : Q * K,
          tt =
            (0, h.getDefaultBigPlayButtonBorderRadius)({
              bigPlayButtonBorderRadius: A,
              roundedPlayer: F
            }) * K,
          et =
            (0, h.getDefaultPlayerBorderRadius)({
              playerBorderRadius: B,
              roundedPlayer: F
            }) * K,
          nt = !0 === q || et > 0 ? 'transparent' : void 0,
          rt = (0, l.thumbnailAssets)(G, {}),
          it =
            null !== (n = (0, c.getLanguage)(H)) && void 0 !== n
              ? n
              : (0, c.getLanguage)('en-US'),
          ot = !1 !== x && !1 !== I,
          at = !0 === j || 'true' === j,
          st = null != R && R.on ? (0, d.getCssGradient)(R) : void 0,
          ut =
            null != R &&
            R.on &&
            (0, p.isGradient)(R) &&
            null !== (y = (0, d.getGradientColor)(R)) &&
            void 0 !== y
              ? y
              : N,
          ct = function () {
            k(!0)
          }
        return (0, r.h)(
          r.Fragment,
          null,
          (0, r.h)(
            'div',
            {
              class: 'w-css-reset',
              style: {
                cursor: 'pointer',
                width: '100%',
                height: ''.concat(X, 'px')
              },
              onClick: ct,
              tabIndex: ot ? -1 : 0
            },
            (0, r.h)(u.ProgressiveThumbnail, {
              backgroundColor: nt,
              images: rt,
              isVisible: !0,
              hashedId: g,
              playerBorderRadius: et,
              swatchEnabled: !1,
              uiHasRendered: !1,
              thumbnailAltText: null != U ? U : '',
              height: ''.concat(X, 'px')
            })
          ),
          ot &&
            (0, r.h)(s.BigPlayButton, {
              borderRadius: tt,
              buttonTabIndex: 0,
              color: ut,
              controlBarDistance: Z,
              duration: null != z ? z : 0,
              hasNewRoundedIcons: D,
              isLiveMedia: 'LiveStream' === $,
              isLoading: O,
              isVisible: !0,
              noMixBlendMode: M,
              onClick: ct,
              playerLanguage: it,
              scale: K,
              showBpbTime: at,
              videoName: null != Y ? Y : '',
              videoWidth: _,
              backgroundGradientCss: st
            })
        )
      }
    },
    (t, e, n) => {
      n.d(e, { PlayerDataProvider: () => a, usePlayerData: () => s })
      var r = n(2),
        i = n(185),
        o = (0, r.createContext)(null),
        a = function (t) {
          var e = t.children,
            n = t.embedOptions,
            i = t.mediaData
          return (0, r.h)(
            o.Provider,
            { value: { embedOptions: n, mediaData: i } },
            e
          )
        },
        s = function () {
          var t = (0, i.useContext)(o)
          if (null == t)
            throw new Error(
              'usePlayerData must be used within a PlayerDataProvider'
            )
          return t
        }
    },
    (t, e, n) => {
      n.d(e, { PlayerDataHandler: () => w })
      var r = n(252),
        i = n.n(r),
        o = n(253),
        a = n.n(o),
        s = n(4)
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, c(r.key), r)
        }
      }
      function c(t) {
        var e = (function (t, e) {
          if ('object' != typeof t || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, e || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === e ? String : Number)(t)
        })(t, 'string')
        return 'symbol' == typeof e ? e : e + ''
      }
      function l(t, e, n) {
        f(t, e), e.set(t, n)
      }
      function f(t, e) {
        if (e.has(t))
          throw new TypeError(
            'Cannot initialize the same private elements twice on an object'
          )
      }
      function h(t, e, n) {
        return t.set(p(t, e), n), n
      }
      function d(t, e) {
        return t.get(p(t, e))
      }
      function p(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : n
        throw new TypeError('Private element is not present on this object')
      }
      var v = new WeakMap(),
        y = new WeakMap(),
        m = new WeakMap(),
        g = new WeakMap(),
        b = new WeakMap(),
        _ = new WeakSet(),
        w = (function () {
          return (
            (t = function t() {
              var e, n
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, t),
                f((e = this), (n = _)),
                n.add(e),
                l(this, v, {}),
                l(this, y, {}),
                l(this, m, {}),
                l(this, g, {
                  domOptions: {},
                  iframeOptions: {},
                  mediaDataOptions: {},
                  wistiaWindowOptions: {}
                }),
                l(this, b, {})
            }),
            (e = [
              {
                key: 'embedOptions',
                get: function () {
                  return d(y, this)
                }
              },
              {
                key: 'mediaData',
                get: function () {
                  return (d(m, this).embedOptions = d(y, this)), d(m, this)
                }
              },
              {
                key: 'setDomEmbedOptionSource',
                value: function (t) {
                  ;(d(g, this).domOptions = t), p(_, this, O).call(this)
                }
              },
              {
                key: 'setIframeEmbedOptionSource',
                value: function (t) {
                  ;(d(g, this).iframeOptions = t), p(_, this, O).call(this)
                }
              },
              {
                key: 'setMediaDataSource',
                value: function (t) {
                  var e
                  h(b, this, t),
                    h(m, this, (0, s.cast)(a()(d(b, this)))),
                    (d(g, this).mediaDataOptions =
                      null !== (e = a()(d(m, this).embedOptions)) &&
                      void 0 !== e
                        ? e
                        : {}),
                    p(_, this, O).call(this)
                }
              },
              {
                key: 'setWistiaWindowEmbedOptionSource',
                value: function (t) {
                  ;(d(g, this).wistiaWindowOptions = t),
                    p(_, this, O).call(this)
                }
              },
              {
                key: 'updateEmbedOptionOverrides',
                value: function (t) {
                  h(v, this, i()(d(v, this), t)),
                    h(y, this, i()(d(y, this), d(v, this)))
                }
              }
            ]) && u(t.prototype, e),
            n && u(t, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          )
          var t, e, n
        })()
      function O() {
        var t = d(g, this),
          e = t.mediaDataOptions,
          n = t.wistiaWindowOptions,
          r = t.domOptions,
          o = t.iframeOptions
        h(
          y,
          this,
          (0, s.cast)(
            i()(
              {},
              null != e ? e : {},
              null != n ? n : {},
              null != r ? r : {},
              null != o ? o : {},
              d(v, this)
            )
          )
        ),
          (d(m, this).embedOptions = d(y, this))
      }
    },
    (t, e, n) => {
      t = n.nmd(t)
      var r = '__lodash_hash_undefined__',
        i = 9007199254740991,
        o = '[object Arguments]',
        a = '[object AsyncFunction]',
        s = '[object Function]',
        u = '[object GeneratorFunction]',
        c = '[object Null]',
        l = '[object Object]',
        f = '[object Proxy]',
        h = '[object Undefined]',
        d = /^\[object .+?Constructor\]$/,
        p = /^(?:0|[1-9]\d*)$/,
        v = {}
      ;(v['[object Float32Array]'] =
        v['[object Float64Array]'] =
        v['[object Int8Array]'] =
        v['[object Int16Array]'] =
        v['[object Int32Array]'] =
        v['[object Uint8Array]'] =
        v['[object Uint8ClampedArray]'] =
        v['[object Uint16Array]'] =
        v['[object Uint32Array]'] =
          !0),
        (v[o] =
          v['[object Array]'] =
          v['[object ArrayBuffer]'] =
          v['[object Boolean]'] =
          v['[object DataView]'] =
          v['[object Date]'] =
          v['[object Error]'] =
          v[s] =
          v['[object Map]'] =
          v['[object Number]'] =
          v[l] =
          v['[object RegExp]'] =
          v['[object Set]'] =
          v['[object String]'] =
          v['[object WeakMap]'] =
            !1)
      var y = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        m = 'object' == typeof self && self && self.Object === Object && self,
        g = y || m || Function('return this')(),
        b = e && !e.nodeType && e,
        _ = b && t && !t.nodeType && t,
        w = _ && _.exports === b,
        O = w && y.process,
        k = (function () {
          try {
            var t = _ && _.require && _.require('util').types
            return t || (O && O.binding && O.binding('util'))
          } catch (t) {}
        })(),
        E = k && k.isTypedArray
      var S,
        P,
        T,
        x = Array.prototype,
        j = Function.prototype,
        A = Object.prototype,
        L = g['__core-js_shared__'],
        C = j.toString,
        W = A.hasOwnProperty,
        D = (S = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + S
          : '',
        M = A.toString,
        I = C.call(Object),
        B = RegExp(
          '^' +
            C.call(W)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        N = w ? g.Buffer : void 0,
        R = g.Symbol,
        H = g.Uint8Array,
        F = N ? N.allocUnsafe : void 0,
        U =
          ((P = Object.getPrototypeOf),
          (T = Object),
          function (t) {
            return P(T(t))
          }),
        q = Object.create,
        V = A.propertyIsEnumerable,
        G = x.splice,
        z = R ? R.toStringTag : void 0,
        $ = (function () {
          try {
            var t = bt(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (t) {}
        })(),
        Y = N ? N.isBuffer : void 0,
        X = Math.max,
        K = Date.now,
        J = bt(g, 'Map'),
        Q = bt(Object, 'create'),
        Z = (function () {
          function t() {}
          return function (e) {
            if (!Lt(e)) return {}
            if (q) return q(e)
            t.prototype = e
            var n = new t()
            return (t.prototype = void 0), n
          }
        })()
      function tt(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function et(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function nt(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function rt(t) {
        var e = (this.__data__ = new et(t))
        this.size = e.size
      }
      function it(t, e) {
        var n = Pt(t),
          r = !n && St(t),
          i = !n && !r && xt(t),
          o = !n && !r && !i && Wt(t),
          a = n || r || i || o,
          s = a
            ? (function (t, e) {
                for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
                return r
              })(t.length, String)
            : [],
          u = s.length
        for (var c in t)
          (!e && !W.call(t, c)) ||
            (a &&
              ('length' == c ||
                (i && ('offset' == c || 'parent' == c)) ||
                (o &&
                  ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
                _t(c, u))) ||
            s.push(c)
        return s
      }
      function ot(t, e, n) {
        ;((void 0 !== n && !Et(t[e], n)) || (void 0 === n && !(e in t))) &&
          ut(t, e, n)
      }
      function at(t, e, n) {
        var r = t[e]
        ;(W.call(t, e) && Et(r, n) && (void 0 !== n || e in t)) || ut(t, e, n)
      }
      function st(t, e) {
        for (var n = t.length; n--; ) if (Et(t[n][0], e)) return n
        return -1
      }
      function ut(t, e, n) {
        '__proto__' == e && $
          ? $(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0
            })
          : (t[e] = n)
      }
      ;(tt.prototype.clear = function () {
        ;(this.__data__ = Q ? Q(null) : {}), (this.size = 0)
      }),
        (tt.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t]
          return (this.size -= e ? 1 : 0), e
        }),
        (tt.prototype.get = function (t) {
          var e = this.__data__
          if (Q) {
            var n = e[t]
            return n === r ? void 0 : n
          }
          return W.call(e, t) ? e[t] : void 0
        }),
        (tt.prototype.has = function (t) {
          var e = this.__data__
          return Q ? void 0 !== e[t] : W.call(e, t)
        }),
        (tt.prototype.set = function (t, e) {
          var n = this.__data__
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = Q && void 0 === e ? r : e),
            this
          )
        }),
        (et.prototype.clear = function () {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (et.prototype.delete = function (t) {
          var e = this.__data__,
            n = st(e, t)
          return (
            !(n < 0) &&
            (n == e.length - 1 ? e.pop() : G.call(e, n, 1), --this.size, !0)
          )
        }),
        (et.prototype.get = function (t) {
          var e = this.__data__,
            n = st(e, t)
          return n < 0 ? void 0 : e[n][1]
        }),
        (et.prototype.has = function (t) {
          return st(this.__data__, t) > -1
        }),
        (et.prototype.set = function (t, e) {
          var n = this.__data__,
            r = st(n, t)
          return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
        }),
        (nt.prototype.clear = function () {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new tt(),
              map: new (J || et)(),
              string: new tt()
            })
        }),
        (nt.prototype.delete = function (t) {
          var e = gt(this, t).delete(t)
          return (this.size -= e ? 1 : 0), e
        }),
        (nt.prototype.get = function (t) {
          return gt(this, t).get(t)
        }),
        (nt.prototype.has = function (t) {
          return gt(this, t).has(t)
        }),
        (nt.prototype.set = function (t, e) {
          var n = gt(this, t),
            r = n.size
          return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
        }),
        (rt.prototype.clear = function () {
          ;(this.__data__ = new et()), (this.size = 0)
        }),
        (rt.prototype.delete = function (t) {
          var e = this.__data__,
            n = e.delete(t)
          return (this.size = e.size), n
        }),
        (rt.prototype.get = function (t) {
          return this.__data__.get(t)
        }),
        (rt.prototype.has = function (t) {
          return this.__data__.has(t)
        }),
        (rt.prototype.set = function (t, e) {
          var n = this.__data__
          if (n instanceof et) {
            var r = n.__data__
            if (!J || r.length < 199)
              return r.push([t, e]), (this.size = ++n.size), this
            n = this.__data__ = new nt(r)
          }
          return n.set(t, e), (this.size = n.size), this
        })
      var ct,
        lt = function (t, e, n) {
          for (var r = -1, i = Object(t), o = n(t), a = o.length; a--; ) {
            var s = o[ct ? a : ++r]
            if (!1 === e(i[s], s, i)) break
          }
          return t
        }
      function ft(t) {
        return null == t
          ? void 0 === t
            ? h
            : c
          : z && z in Object(t)
            ? (function (t) {
                var e = W.call(t, z),
                  n = t[z]
                try {
                  t[z] = void 0
                  var r = !0
                } catch (t) {}
                var i = M.call(t)
                r && (e ? (t[z] = n) : delete t[z])
                return i
              })(t)
            : (function (t) {
                return M.call(t)
              })(t)
      }
      function ht(t) {
        return Ct(t) && ft(t) == o
      }
      function dt(t) {
        return (
          !(
            !Lt(t) ||
            (function (t) {
              return !!D && D in t
            })(t)
          ) &&
          (jt(t) ? B : d).test(
            (function (t) {
              if (null != t) {
                try {
                  return C.call(t)
                } catch (t) {}
                try {
                  return t + ''
                } catch (t) {}
              }
              return ''
            })(t)
          )
        )
      }
      function pt(t) {
        if (!Lt(t))
          return (function (t) {
            var e = []
            if (null != t) for (var n in Object(t)) e.push(n)
            return e
          })(t)
        var e = wt(t),
          n = []
        for (var r in t)
          ('constructor' != r || (!e && W.call(t, r))) && n.push(r)
        return n
      }
      function vt(t, e, n, r, i) {
        t !== e &&
          lt(
            e,
            function (o, a) {
              if ((i || (i = new rt()), Lt(o)))
                !(function (t, e, n, r, i, o, a) {
                  var s = Ot(t, n),
                    u = Ot(e, n),
                    c = a.get(u)
                  if (c) return void ot(t, n, c)
                  var f = o ? o(s, u, n + '', t, e, a) : void 0,
                    h = void 0 === f
                  if (h) {
                    var d = Pt(u),
                      p = !d && xt(u),
                      v = !d && !p && Wt(u)
                    ;(f = u),
                      d || p || v
                        ? Pt(s)
                          ? (f = s)
                          : Ct((_ = s)) && Tt(_)
                            ? (f = (function (t, e) {
                                var n = -1,
                                  r = t.length
                                e || (e = Array(r))
                                for (; ++n < r; ) e[n] = t[n]
                                return e
                              })(s))
                            : p
                              ? ((h = !1),
                                (f = (function (t, e) {
                                  if (e) return t.slice()
                                  var n = t.length,
                                    r = F ? F(n) : new t.constructor(n)
                                  return t.copy(r), r
                                })(u, !0)))
                              : v
                                ? ((h = !1),
                                  (y = u),
                                  (m = !0
                                    ? ((g = y.buffer),
                                      (b = new g.constructor(g.byteLength)),
                                      new H(b).set(new H(g)),
                                      b)
                                    : y.buffer),
                                  (f = new y.constructor(
                                    m,
                                    y.byteOffset,
                                    y.length
                                  )))
                                : (f = [])
                        : (function (t) {
                              if (!Ct(t) || ft(t) != l) return !1
                              var e = U(t)
                              if (null === e) return !0
                              var n = W.call(e, 'constructor') && e.constructor
                              return (
                                'function' == typeof n &&
                                n instanceof n &&
                                C.call(n) == I
                              )
                            })(u) || St(u)
                          ? ((f = s),
                            St(s)
                              ? (f = (function (t) {
                                  return (function (t, e, n, r) {
                                    var i = !n
                                    n || (n = {})
                                    var o = -1,
                                      a = e.length
                                    for (; ++o < a; ) {
                                      var s = e[o],
                                        u = r ? r(n[s], t[s], s, n, t) : void 0
                                      void 0 === u && (u = t[s]),
                                        i ? ut(n, s, u) : at(n, s, u)
                                    }
                                    return n
                                  })(t, Dt(t))
                                })(s))
                              : (Lt(s) && !jt(s)) ||
                                (f = (function (t) {
                                  return 'function' != typeof t.constructor ||
                                    wt(t)
                                    ? {}
                                    : Z(U(t))
                                })(u)))
                          : (h = !1)
                  }
                  var y, m, g, b
                  var _
                  h && (a.set(u, f), i(f, u, r, o, a), a.delete(u))
                  ot(t, n, f)
                })(t, e, a, n, vt, r, i)
              else {
                var s = r ? r(Ot(t, a), o, a + '', t, e, i) : void 0
                void 0 === s && (s = o), ot(t, a, s)
              }
            },
            Dt
          )
      }
      function yt(t, e) {
        return kt(
          (function (t, e, n) {
            return (
              (e = X(void 0 === e ? t.length - 1 : e, 0)),
              function () {
                for (
                  var r = arguments,
                    i = -1,
                    o = X(r.length - e, 0),
                    a = Array(o);
                  ++i < o;

                )
                  a[i] = r[e + i]
                i = -1
                for (var s = Array(e + 1); ++i < e; ) s[i] = r[i]
                return (
                  (s[e] = n(a)),
                  (function (t, e, n) {
                    switch (n.length) {
                      case 0:
                        return t.call(e)
                      case 1:
                        return t.call(e, n[0])
                      case 2:
                        return t.call(e, n[0], n[1])
                      case 3:
                        return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                  })(t, this, s)
                )
              }
            )
          })(t, e, Bt),
          t + ''
        )
      }
      var mt = $
        ? function (t, e) {
            return $(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                ((n = e),
                function () {
                  return n
                }),
              writable: !0
            })
            var n
          }
        : Bt
      function gt(t, e) {
        var n,
          r,
          i = t.__data__
        return (
          'string' == (r = typeof (n = e)) ||
          'number' == r ||
          'symbol' == r ||
          'boolean' == r
            ? '__proto__' !== n
            : null === n
        )
          ? i['string' == typeof e ? 'string' : 'hash']
          : i.map
      }
      function bt(t, e) {
        var n = (function (t, e) {
          return null == t ? void 0 : t[e]
        })(t, e)
        return dt(n) ? n : void 0
      }
      function _t(t, e) {
        var n = typeof t
        return (
          !!(e = null == e ? i : e) &&
          ('number' == n || ('symbol' != n && p.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function wt(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || A)
      }
      function Ot(t, e) {
        if (
          ('constructor' !== e || 'function' != typeof t[e]) &&
          '__proto__' != e
        )
          return t[e]
      }
      var kt = (function (t) {
        var e = 0,
          n = 0
        return function () {
          var r = K(),
            i = 16 - (r - n)
          if (((n = r), i > 0)) {
            if (++e >= 800) return arguments[0]
          } else e = 0
          return t.apply(void 0, arguments)
        }
      })(mt)
      function Et(t, e) {
        return t === e || (t != t && e != e)
      }
      var St = ht(
          (function () {
            return arguments
          })()
        )
          ? ht
          : function (t) {
              return Ct(t) && W.call(t, 'callee') && !V.call(t, 'callee')
            },
        Pt = Array.isArray
      function Tt(t) {
        return null != t && At(t.length) && !jt(t)
      }
      var xt =
        Y ||
        function () {
          return !1
        }
      function jt(t) {
        if (!Lt(t)) return !1
        var e = ft(t)
        return e == s || e == u || e == a || e == f
      }
      function At(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= i
      }
      function Lt(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      function Ct(t) {
        return null != t && 'object' == typeof t
      }
      var Wt = E
        ? (function (t) {
            return function (e) {
              return t(e)
            }
          })(E)
        : function (t) {
            return Ct(t) && At(t.length) && !!v[ft(t)]
          }
      function Dt(t) {
        return Tt(t) ? it(t, !0) : pt(t)
      }
      var Mt,
        It =
          ((Mt = function (t, e, n) {
            vt(t, e, n)
          }),
          yt(function (t, e) {
            var n = -1,
              r = e.length,
              i = r > 1 ? e[r - 1] : void 0,
              o = r > 2 ? e[2] : void 0
            for (
              i = Mt.length > 3 && 'function' == typeof i ? (r--, i) : void 0,
                o &&
                  (function (t, e, n) {
                    if (!Lt(n)) return !1
                    var r = typeof e
                    return (
                      !!('number' == r
                        ? Tt(n) && _t(e, n.length)
                        : 'string' == r && (e in n)) && Et(n[e], t)
                    )
                  })(e[0], e[1], o) &&
                  ((i = r < 3 ? void 0 : i), (r = 1)),
                t = Object(t);
              ++n < r;

            ) {
              var a = e[n]
              a && Mt(t, a, n, i)
            }
            return t
          }))
      function Bt(t) {
        return t
      }
      t.exports = It
    },
    (t, e, n) => {
      t = n.nmd(t)
      var r = '__lodash_hash_undefined__',
        i = 9007199254740991,
        o = '[object Arguments]',
        a = '[object Boolean]',
        s = '[object Date]',
        u = '[object Function]',
        c = '[object GeneratorFunction]',
        l = '[object Map]',
        f = '[object Number]',
        h = '[object Object]',
        d = '[object Promise]',
        p = '[object RegExp]',
        v = '[object Set]',
        y = '[object String]',
        m = '[object Symbol]',
        g = '[object WeakMap]',
        b = '[object ArrayBuffer]',
        _ = '[object DataView]',
        w = '[object Float32Array]',
        O = '[object Float64Array]',
        k = '[object Int8Array]',
        E = '[object Int16Array]',
        S = '[object Int32Array]',
        P = '[object Uint8Array]',
        T = '[object Uint8ClampedArray]',
        x = '[object Uint16Array]',
        j = '[object Uint32Array]',
        A = /\w*$/,
        L = /^\[object .+?Constructor\]$/,
        C = /^(?:0|[1-9]\d*)$/,
        W = {}
      ;(W[o] =
        W['[object Array]'] =
        W[b] =
        W[_] =
        W[a] =
        W[s] =
        W[w] =
        W[O] =
        W[k] =
        W[E] =
        W[S] =
        W[l] =
        W[f] =
        W[h] =
        W[p] =
        W[v] =
        W[y] =
        W[m] =
        W[P] =
        W[T] =
        W[x] =
        W[j] =
          !0),
        (W['[object Error]'] = W[u] = W[g] = !1)
      var D = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        M = 'object' == typeof self && self && self.Object === Object && self,
        I = D || M || Function('return this')(),
        B = e && !e.nodeType && e,
        N = B && t && !t.nodeType && t,
        R = N && N.exports === B
      function H(t, e) {
        return t.set(e[0], e[1]), t
      }
      function F(t, e) {
        return t.add(e), t
      }
      function U(t, e, n, r) {
        var i = -1,
          o = t ? t.length : 0
        for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t)
        return n
      }
      function q(t) {
        var e = !1
        if (null != t && 'function' != typeof t.toString)
          try {
            e = !!(t + '')
          } catch (t) {}
        return e
      }
      function V(t) {
        var e = -1,
          n = Array(t.size)
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t]
          }),
          n
        )
      }
      function G(t, e) {
        return function (n) {
          return t(e(n))
        }
      }
      function z(t) {
        var e = -1,
          n = Array(t.size)
        return (
          t.forEach(function (t) {
            n[++e] = t
          }),
          n
        )
      }
      var $,
        Y = Array.prototype,
        X = Function.prototype,
        K = Object.prototype,
        J = I['__core-js_shared__'],
        Q = ($ = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + $
          : '',
        Z = X.toString,
        tt = K.hasOwnProperty,
        et = K.toString,
        nt = RegExp(
          '^' +
            Z.call(tt)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        rt = R ? I.Buffer : void 0,
        it = I.Symbol,
        ot = I.Uint8Array,
        at = G(Object.getPrototypeOf, Object),
        st = Object.create,
        ut = K.propertyIsEnumerable,
        ct = Y.splice,
        lt = Object.getOwnPropertySymbols,
        ft = rt ? rt.isBuffer : void 0,
        ht = G(Object.keys, Object),
        dt = Nt(I, 'DataView'),
        pt = Nt(I, 'Map'),
        vt = Nt(I, 'Promise'),
        yt = Nt(I, 'Set'),
        mt = Nt(I, 'WeakMap'),
        gt = Nt(Object, 'create'),
        bt = qt(dt),
        _t = qt(pt),
        wt = qt(vt),
        Ot = qt(yt),
        kt = qt(mt),
        Et = it ? it.prototype : void 0,
        St = Et ? Et.valueOf : void 0
      function Pt(t) {
        var e = -1,
          n = t ? t.length : 0
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function Tt(t) {
        var e = -1,
          n = t ? t.length : 0
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function xt(t) {
        var e = -1,
          n = t ? t.length : 0
        for (this.clear(); ++e < n; ) {
          var r = t[e]
          this.set(r[0], r[1])
        }
      }
      function jt(t) {
        this.__data__ = new Tt(t)
      }
      function At(t, e) {
        var n =
            Gt(t) ||
            (function (t) {
              return (
                (function (t) {
                  return (
                    (function (t) {
                      return !!t && 'object' == typeof t
                    })(t) && zt(t)
                  )
                })(t) &&
                tt.call(t, 'callee') &&
                (!ut.call(t, 'callee') || et.call(t) == o)
              )
            })(t)
              ? (function (t, e) {
                  for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
                  return r
                })(t.length, String)
              : [],
          r = n.length,
          i = !!r
        for (var a in t)
          (!e && !tt.call(t, a)) ||
            (i && ('length' == a || Ft(a, r))) ||
            n.push(a)
        return n
      }
      function Lt(t, e, n) {
        var r = t[e]
        ;(tt.call(t, e) && Vt(r, n) && (void 0 !== n || e in t)) || (t[e] = n)
      }
      function Ct(t, e) {
        for (var n = t.length; n--; ) if (Vt(t[n][0], e)) return n
        return -1
      }
      function Wt(t, e, n, r, i, d, g) {
        var L
        if ((r && (L = d ? r(t, i, d, g) : r(t)), void 0 !== L)) return L
        if (!Xt(t)) return t
        var C = Gt(t)
        if (C) {
          if (
            ((L = (function (t) {
              var e = t.length,
                n = t.constructor(e)
              e &&
                'string' == typeof t[0] &&
                tt.call(t, 'index') &&
                ((n.index = t.index), (n.input = t.input))
              return n
            })(t)),
            !e)
          )
            return (function (t, e) {
              var n = -1,
                r = t.length
              e || (e = Array(r))
              for (; ++n < r; ) e[n] = t[n]
              return e
            })(t, L)
        } else {
          var D = Ht(t),
            M = D == u || D == c
          if ($t(t))
            return (function (t, e) {
              if (e) return t.slice()
              var n = new t.constructor(t.length)
              return t.copy(n), n
            })(t, e)
          if (D == h || D == o || (M && !d)) {
            if (q(t)) return d ? t : {}
            if (
              ((L = (function (t) {
                return 'function' != typeof t.constructor || Ut(t)
                  ? {}
                  : ((e = at(t)), Xt(e) ? st(e) : {})
                var e
              })(M ? {} : t)),
              !e)
            )
              return (function (t, e) {
                return It(t, Rt(t), e)
              })(
                t,
                (function (t, e) {
                  return t && It(e, Kt(e), t)
                })(L, t)
              )
          } else {
            if (!W[D]) return d ? t : {}
            L = (function (t, e, n, r) {
              var i = t.constructor
              switch (e) {
                case b:
                  return Mt(t)
                case a:
                case s:
                  return new i(+t)
                case _:
                  return (function (t, e) {
                    var n = e ? Mt(t.buffer) : t.buffer
                    return new t.constructor(n, t.byteOffset, t.byteLength)
                  })(t, r)
                case w:
                case O:
                case k:
                case E:
                case S:
                case P:
                case T:
                case x:
                case j:
                  return (function (t, e) {
                    var n = e ? Mt(t.buffer) : t.buffer
                    return new t.constructor(n, t.byteOffset, t.length)
                  })(t, r)
                case l:
                  return (function (t, e, n) {
                    var r = e ? n(V(t), !0) : V(t)
                    return U(r, H, new t.constructor())
                  })(t, r, n)
                case f:
                case y:
                  return new i(t)
                case p:
                  return (function (t) {
                    var e = new t.constructor(t.source, A.exec(t))
                    return (e.lastIndex = t.lastIndex), e
                  })(t)
                case v:
                  return (function (t, e, n) {
                    var r = e ? n(z(t), !0) : z(t)
                    return U(r, F, new t.constructor())
                  })(t, r, n)
                case m:
                  return (o = t), St ? Object(St.call(o)) : {}
              }
              var o
            })(t, D, Wt, e)
          }
        }
        g || (g = new jt())
        var I = g.get(t)
        if (I) return I
        if ((g.set(t, L), !C))
          var B = n
            ? (function (t) {
                return (function (t, e, n) {
                  var r = e(t)
                  return Gt(t)
                    ? r
                    : (function (t, e) {
                        for (var n = -1, r = e.length, i = t.length; ++n < r; )
                          t[i + n] = e[n]
                        return t
                      })(r, n(t))
                })(t, Kt, Rt)
              })(t)
            : Kt(t)
        return (
          (function (t, e) {
            for (
              var n = -1, r = t ? t.length : 0;
              ++n < r && !1 !== e(t[n], n, t);

            );
          })(B || t, function (i, o) {
            B && (i = t[(o = i)]), Lt(L, o, Wt(i, e, n, r, o, t, g))
          }),
          L
        )
      }
      function Dt(t) {
        return (
          !(!Xt(t) || ((e = t), Q && Q in e)) &&
          (Yt(t) || q(t) ? nt : L).test(qt(t))
        )
        var e
      }
      function Mt(t) {
        var e = new t.constructor(t.byteLength)
        return new ot(e).set(new ot(t)), e
      }
      function It(t, e, n, r) {
        n || (n = {})
        for (var i = -1, o = e.length; ++i < o; ) {
          var a = e[i],
            s = r ? r(n[a], t[a], a, n, t) : void 0
          Lt(n, a, void 0 === s ? t[a] : s)
        }
        return n
      }
      function Bt(t, e) {
        var n,
          r,
          i = t.__data__
        return (
          'string' == (r = typeof (n = e)) ||
          'number' == r ||
          'symbol' == r ||
          'boolean' == r
            ? '__proto__' !== n
            : null === n
        )
          ? i['string' == typeof e ? 'string' : 'hash']
          : i.map
      }
      function Nt(t, e) {
        var n = (function (t, e) {
          return null == t ? void 0 : t[e]
        })(t, e)
        return Dt(n) ? n : void 0
      }
      ;(Pt.prototype.clear = function () {
        this.__data__ = gt ? gt(null) : {}
      }),
        (Pt.prototype.delete = function (t) {
          return this.has(t) && delete this.__data__[t]
        }),
        (Pt.prototype.get = function (t) {
          var e = this.__data__
          if (gt) {
            var n = e[t]
            return n === r ? void 0 : n
          }
          return tt.call(e, t) ? e[t] : void 0
        }),
        (Pt.prototype.has = function (t) {
          var e = this.__data__
          return gt ? void 0 !== e[t] : tt.call(e, t)
        }),
        (Pt.prototype.set = function (t, e) {
          return (this.__data__[t] = gt && void 0 === e ? r : e), this
        }),
        (Tt.prototype.clear = function () {
          this.__data__ = []
        }),
        (Tt.prototype.delete = function (t) {
          var e = this.__data__,
            n = Ct(e, t)
          return (
            !(n < 0) && (n == e.length - 1 ? e.pop() : ct.call(e, n, 1), !0)
          )
        }),
        (Tt.prototype.get = function (t) {
          var e = this.__data__,
            n = Ct(e, t)
          return n < 0 ? void 0 : e[n][1]
        }),
        (Tt.prototype.has = function (t) {
          return Ct(this.__data__, t) > -1
        }),
        (Tt.prototype.set = function (t, e) {
          var n = this.__data__,
            r = Ct(n, t)
          return r < 0 ? n.push([t, e]) : (n[r][1] = e), this
        }),
        (xt.prototype.clear = function () {
          this.__data__ = {
            hash: new Pt(),
            map: new (pt || Tt)(),
            string: new Pt()
          }
        }),
        (xt.prototype.delete = function (t) {
          return Bt(this, t).delete(t)
        }),
        (xt.prototype.get = function (t) {
          return Bt(this, t).get(t)
        }),
        (xt.prototype.has = function (t) {
          return Bt(this, t).has(t)
        }),
        (xt.prototype.set = function (t, e) {
          return Bt(this, t).set(t, e), this
        }),
        (jt.prototype.clear = function () {
          this.__data__ = new Tt()
        }),
        (jt.prototype.delete = function (t) {
          return this.__data__.delete(t)
        }),
        (jt.prototype.get = function (t) {
          return this.__data__.get(t)
        }),
        (jt.prototype.has = function (t) {
          return this.__data__.has(t)
        }),
        (jt.prototype.set = function (t, e) {
          var n = this.__data__
          if (n instanceof Tt) {
            var r = n.__data__
            if (!pt || r.length < 199) return r.push([t, e]), this
            n = this.__data__ = new xt(r)
          }
          return n.set(t, e), this
        })
      var Rt = lt
          ? G(lt, Object)
          : function () {
              return []
            },
        Ht = function (t) {
          return et.call(t)
        }
      function Ft(t, e) {
        return (
          !!(e = null == e ? i : e) &&
          ('number' == typeof t || C.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function Ut(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || K)
      }
      function qt(t) {
        if (null != t) {
          try {
            return Z.call(t)
          } catch (t) {}
          try {
            return t + ''
          } catch (t) {}
        }
        return ''
      }
      function Vt(t, e) {
        return t === e || (t != t && e != e)
      }
      ;((dt && Ht(new dt(new ArrayBuffer(1))) != _) ||
        (pt && Ht(new pt()) != l) ||
        (vt && Ht(vt.resolve()) != d) ||
        (yt && Ht(new yt()) != v) ||
        (mt && Ht(new mt()) != g)) &&
        (Ht = function (t) {
          var e = et.call(t),
            n = e == h ? t.constructor : void 0,
            r = n ? qt(n) : void 0
          if (r)
            switch (r) {
              case bt:
                return _
              case _t:
                return l
              case wt:
                return d
              case Ot:
                return v
              case kt:
                return g
            }
          return e
        })
      var Gt = Array.isArray
      function zt(t) {
        return (
          null != t &&
          (function (t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= i
          })(t.length) &&
          !Yt(t)
        )
      }
      var $t =
        ft ||
        function () {
          return !1
        }
      function Yt(t) {
        var e = Xt(t) ? et.call(t) : ''
        return e == u || e == c
      }
      function Xt(t) {
        var e = typeof t
        return !!t && ('object' == e || 'function' == e)
      }
      function Kt(t) {
        return zt(t)
          ? At(t)
          : (function (t) {
              if (!Ut(t)) return ht(t)
              var e = []
              for (var n in Object(t))
                tt.call(t, n) && 'constructor' != n && e.push(n)
              return e
            })(t)
      }
      t.exports = function (t) {
        return Wt(t, !0, !0)
      }
    },
    (t, e, n) => {
      n.d(e, { getWistiaOptions: () => o })
      var r = n(252),
        i = n.n(r),
        o = function (t) {
          var e, n
          if (!window.wistiaOptions) return {}
          var r =
              null !== (e = window.wistiaOptions._all) && void 0 !== e ? e : {},
            o = null !== (n = window.wistiaOptions[t]) && void 0 !== n ? n : {}
          return i()(r, o)
        }
    },
    (t, e, n) => {
      n.d(e, { maybeStartWistiaQueue: () => o })
      var r = n(11),
        i = null,
        o = function () {
          i ||
            (i = setInterval(function () {
              var t = window._wq
              t &&
                0 !== t.length &&
                t.slice(0).forEach(function (e) {
                  'function' == typeof e
                    ? (e(r.Wistia), t.splice(t.indexOf(e), 1))
                    : r.Wistia.flushInitQueue ||
                      (t.splice(t.indexOf(e), 1),
                      console.warn(
                        '<wistia-player> elements must be configured via window.wistiaOptions instead of window._wq. Config not applied',
                        e
                      ))
                })
            }, 500))
        }
    },
    (t, e, n) => {
      n.d(e, { getInitialMediaData: () => w })
      var r = n(11),
        i = n(19),
        o = n(25),
        a = n(21),
        s = n(257),
        u = n(28),
        c = n(26),
        l = n(258)
      function f() {
        f = function () {
          return e
        }
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          u = o.toStringTag || '@@toStringTag'
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[e]
          )
        }
        try {
          c({}, '')
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof g ? e : g,
            a = Object.create(o.prototype),
            s = new L(r || [])
          return i(a, '_invoke', { value: T(t, n, s) }), a
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        e.wrap = l
        var d = 'suspendedStart',
          p = 'suspendedYield',
          v = 'executing',
          y = 'completed',
          m = {}
        function g() {}
        function b() {}
        function _() {}
        var w = {}
        c(w, a, function () {
          return this
        })
        var O = Object.getPrototypeOf,
          k = O && O(O(C([])))
        k && k !== n && r.call(k, a) && (w = k)
        var E = (_.prototype = g.prototype = Object.create(w))
        function S(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var u = h(t[i], t, o)
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value
              return l && 'object' == typeof l && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, s)
                    },
                    function (t) {
                      n('throw', t, a, s)
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      ;(c.value = t), a(c)
                    },
                    function (t) {
                      return n('throw', t, a, s)
                    }
                  )
            }
            s(u.arg)
          }
          var o
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i)
                })
              }
              return (o = o ? o.then(i, i) : i())
            }
          })
        }
        function T(e, n, r) {
          var i = d
          return function (o, a) {
            if (i === v) throw Error('Generator is already running')
            if (i === y) {
              if ('throw' === o) throw a
              return { value: t, done: !0 }
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate
              if (s) {
                var u = x(s, r)
                if (u) {
                  if (u === m) continue
                  return u
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if (i === d) throw ((i = y), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              i = v
              var c = h(e, n, r)
              if ('normal' === c.type) {
                if (((i = r.done ? y : p), c.arg === m)) continue
                return { value: c.arg, done: r.done }
              }
              'throw' === c.type &&
                ((i = y), (r.method = 'throw'), (r.arg = c.arg))
            }
          }
        }
        function x(e, n) {
          var r = n.method,
            i = e.iterator[r]
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                x(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            )
          var o = h(i, e.iterator, n.arg)
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
          var a = o.arg
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              m)
        }
        function j(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function A(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function L(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(j, this),
            this.reset(!0)
        }
        function C(e) {
          if (e || '' === e) {
            var n = e[a]
            if (n) return n.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n
                  return (n.value = t), (n.done = !0), n
                }
              return (o.next = o)
            }
          }
          throw new TypeError(typeof e + ' is not iterable')
        }
        return (
          (b.prototype = _),
          i(E, 'constructor', { value: _, configurable: !0 }),
          i(_, 'constructor', { value: b, configurable: !0 }),
          (b.displayName = c(_, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === b || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), c(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            )
          }),
          (e.awrap = function (t) {
            return { __await: t }
          }),
          S(P.prototype),
          c(P.prototype, s, function () {
            return this
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new P(l(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          S(E),
          c(E, u, 'Generator'),
          c(E, a, function () {
            return this
          }),
          c(E, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = []
            for (var r in e) n.push(r)
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in e) return (t.value = r), (t.done = !1), t
                }
                return (t.done = !0), t
              }
            )
          }),
          (e.values = C),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var n = this
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc')
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                m
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), m
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var i = r.arg
                    A(n)
                  }
                  return i
                }
              }
              throw Error('illegal catch attempt')
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                m
              )
            }
          }),
          e
        )
      }
      function h(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (t) {
          return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
      }
      function d(t) {
        return function () {
          var e = this,
            n = arguments
          return new Promise(function (r, i) {
            var o = t.apply(e, n)
            function a(t) {
              h(o, r, i, a, s, 'next', t)
            }
            function s(t) {
              h(o, r, i, a, s, 'throw', t)
            }
            a(void 0)
          })
        }
      }
      var p = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = (0, o.mediaDataUrl)(t, e)
              .replace(/\.json(?!p)/, '.jsonp')
              .replace(/&$/, ''),
            r = (0, i.findScriptInDomBySrc)(n, {
              ignoreProtocol: !0,
              scriptRegex: (0, o.mediaDataScriptRegExp)(t)
            })
          return Boolean(r)
        },
        v = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = (0, a.mediaDataHost)(e)
          return ''
            .concat((0, a.eV1Protocol)(), '//')
            .concat(n, '/embed/')
            .concat(t, '.js')
        },
        y = function (t) {
          var e = v(
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ),
            n = (0, i.findScriptInDomBySrc)(e, { ignoreProtocol: !0 })
          return Boolean(n)
        },
        m = (function () {
          var t = d(
            f().mark(function t(e) {
              var n
              return f().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = 0),
                        t.abrupt(
                          'return',
                          new Promise(function (t, r) {
                            var i =
                              window[
                                'wistiajsonp-/embed/medias/'.concat(e, '.jsonp')
                              ]
                            if (i) {
                              if (i.media) return void t(i.media)
                              ;(0, l.isMediaDataError)(i) && t(i)
                            }
                            var o = setInterval(function () {
                              var i =
                                window[
                                  'wistiajsonp-/embed/medias/'.concat(
                                    e,
                                    '.jsonp'
                                  )
                                ]
                              i &&
                                (clearInterval(o),
                                i.media && t(i.media),
                                (0, l.isMediaDataError)(i) && t(i)),
                                n > 3 &&
                                  (clearInterval(o),
                                  r(
                                    new Error('Failed to load jsonp media data')
                                  )),
                                (n += 1)
                            }, 15)
                          })
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        g = (function () {
          var t = d(
            f().mark(function t(e) {
              return f().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, n) {
                          import(e)
                            .then(function (e) {
                              var n = e.mediaData
                              t(n)
                            })
                            .catch(function () {
                              n(new Error('Failed to load js media data'))
                            })
                        })
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        b = (function () {
          var t = d(
            f().mark(function t(e, n) {
              return f().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, r) {
                          ;(0, s.fetchMediaData)(e, n)
                            .then(function (e) {
                              t(e)
                            })
                            .catch(function () {
                              r(new Error('Failed to load json mediaData'))
                            })
                        })
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e, n) {
            return t.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var t = d(
            f().mark(function t(e) {
              return f().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, n) {
                          var i
                          null !== (i = r.Wistia._inlineMediaData) &&
                            void 0 !== i &&
                            i[e] &&
                            t(r.Wistia._inlineMediaData[e]),
                            n(new Error('Failed to load inline media data'))
                        })
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        w = (function () {
          var t = d(
            f().mark(function t(e) {
              var n,
                r,
                i = arguments
              return f().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = [
                          b(
                            e,
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {})
                          ),
                          _(e)
                        ]),
                        p(e, n) && r.push(m(e)),
                        y(e, n) && r.push(g(v(e, n))),
                        t.abrupt(
                          'return',
                          Promise.any(r).then(function (t) {
                            return (
                              (0, l.isMediaDataError)(t) ||
                                ((0, u.mediaDataTransforms)(t, n),
                                (0, c.cacheMediaData)(e, t)),
                              t
                            )
                          })
                        )
                      )
                    case 5:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
    },
    (t, e, n) => {
      n.d(e, { fetchMediaData: () => f })
      var r = n(27),
        i = n(11),
        o = n(21),
        a = n(28),
        s = n(26),
        u = n(258)
      function c() {
        c = function () {
          return e
        }
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          u = o.toStringTag || '@@toStringTag'
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[e]
          )
        }
        try {
          l({}, '')
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function f(t, e, n, r) {
          var o = e && e.prototype instanceof g ? e : g,
            a = Object.create(o.prototype),
            s = new L(r || [])
          return i(a, '_invoke', { value: T(t, n, s) }), a
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        e.wrap = f
        var d = 'suspendedStart',
          p = 'suspendedYield',
          v = 'executing',
          y = 'completed',
          m = {}
        function g() {}
        function b() {}
        function _() {}
        var w = {}
        l(w, a, function () {
          return this
        })
        var O = Object.getPrototypeOf,
          k = O && O(O(C([])))
        k && k !== n && r.call(k, a) && (w = k)
        var E = (_.prototype = g.prototype = Object.create(w))
        function S(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var u = h(t[i], t, o)
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value
              return l && 'object' == typeof l && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, s)
                    },
                    function (t) {
                      n('throw', t, a, s)
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      ;(c.value = t), a(c)
                    },
                    function (t) {
                      return n('throw', t, a, s)
                    }
                  )
            }
            s(u.arg)
          }
          var o
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i)
                })
              }
              return (o = o ? o.then(i, i) : i())
            }
          })
        }
        function T(e, n, r) {
          var i = d
          return function (o, a) {
            if (i === v) throw Error('Generator is already running')
            if (i === y) {
              if ('throw' === o) throw a
              return { value: t, done: !0 }
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate
              if (s) {
                var u = x(s, r)
                if (u) {
                  if (u === m) continue
                  return u
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if (i === d) throw ((i = y), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              i = v
              var c = h(e, n, r)
              if ('normal' === c.type) {
                if (((i = r.done ? y : p), c.arg === m)) continue
                return { value: c.arg, done: r.done }
              }
              'throw' === c.type &&
                ((i = y), (r.method = 'throw'), (r.arg = c.arg))
            }
          }
        }
        function x(e, n) {
          var r = n.method,
            i = e.iterator[r]
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                x(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              m
            )
          var o = h(i, e.iterator, n.arg)
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
          var a = o.arg
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              m)
        }
        function j(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function A(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function L(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(j, this),
            this.reset(!0)
        }
        function C(e) {
          if (e || '' === e) {
            var n = e[a]
            if (n) return n.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n
                  return (n.value = t), (n.done = !0), n
                }
              return (o.next = o)
            }
          }
          throw new TypeError(typeof e + ' is not iterable')
        }
        return (
          (b.prototype = _),
          i(E, 'constructor', { value: _, configurable: !0 }),
          i(_, 'constructor', { value: b, configurable: !0 }),
          (b.displayName = l(_, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === b || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), l(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(E)),
              t
            )
          }),
          (e.awrap = function (t) {
            return { __await: t }
          }),
          S(P.prototype),
          l(P.prototype, s, function () {
            return this
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new P(f(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          S(E),
          l(E, u, 'Generator'),
          l(E, a, function () {
            return this
          }),
          l(E, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = []
            for (var r in e) n.push(r)
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in e) return (t.value = r), (t.done = !1), t
                }
                return (t.done = !0), t
              }
            )
          }),
          (e.values = C),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var n = this
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc')
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                m
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), m
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var i = r.arg
                    A(n)
                  }
                  return i
                }
              }
              throw Error('illegal catch attempt')
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                m
              )
            }
          }),
          e
        )
      }
      function l(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (t) {
          return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
      }
      var f = (function () {
        var t,
          e =
            ((t = c().mark(function t(e) {
              var n,
                l,
                f,
                h,
                d,
                p,
                v = arguments
              return c().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                        (l = e),
                        !(f = (0, s.getMediaDataFromCache)(l)) ||
                          !0 === n.skipCache)
                      ) {
                        t.next = 5
                        break
                      }
                      return t.abrupt('return', Promise.resolve(f))
                    case 5:
                      if (!(0, r.isNotNil)(i.Wistia._mediaDataPromises[l])) {
                        t.next = 7
                        break
                      }
                      return t.abrupt('return', i.Wistia._mediaDataPromises[l])
                    case 7:
                      return (
                        (h = (0, o.mediaDataHost)(n)),
                        (d = 'https://'
                          .concat(h, '/embed/medias/')
                          .concat(e, '.json')),
                        (p = fetch(d)
                          .then(function (t) {
                            return t.json()
                          })
                          .then(function (t) {
                            var e
                            if ((0, u.isMediaDataError)(t)) return t
                            var r = t.media
                            return (
                              (0, a.mediaDataTransforms)(r, n),
                              (0, s.cacheMediaData)(
                                null !== (e = r.hashedId) && void 0 !== e
                                  ? e
                                  : '',
                                r
                              ),
                              r
                            )
                          })
                          .finally(function () {
                            Reflect.deleteProperty(
                              i.Wistia._mediaDataPromises,
                              l
                            )
                          })),
                        (i.Wistia._mediaDataPromises[l] = p),
                        t.abrupt('return', p)
                      )
                    case 12:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })),
            function () {
              var e = this,
                n = arguments
              return new Promise(function (r, i) {
                var o = t.apply(e, n)
                function a(t) {
                  l(o, r, i, a, s, 'next', t)
                }
                function s(t) {
                  l(o, r, i, a, s, 'throw', t)
                }
                a(void 0)
              })
            })
        return function (t) {
          return e.apply(this, arguments)
        }
      })()
    },
    (t, e, n) => {
      n.d(e, { isMediaDataError: () => i })
      var r = n(27),
        i = function (t) {
          return (
            !(0, r.isNil)(t.error) && ('true' === t.error || !0 === t.error)
          )
        }
    },
    (t, e, n) => {
      n.d(e, { camelCaseToKebabCase: () => r, kebabCaseToCamelCase: () => i })
      var r = function (t) {
          return t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (t, e) {
            return (void 0 !== e ? '-' : '') + t.toLowerCase()
          })
        },
        i = function (t) {
          return t.replace(/-./g, function (t) {
            return t[1].toUpperCase()
          })
        }
    }
  ],
  __webpack_module_cache__ = {}
function __webpack_require__(t) {
  var e = __webpack_module_cache__[t]
  if (void 0 !== e) return e.exports
  var n = (__webpack_module_cache__[t] = { id: t, loaded: !1, exports: {} })
  return (
    __webpack_modules__[t](n, n.exports, __webpack_require__),
    (n.loaded = !0),
    n.exports
  )
}
;(__webpack_require__.n = (t) => {
  var e = t && t.__esModule ? () => t.default : () => t
  return __webpack_require__.d(e, { a: e }), e
}),
  (__webpack_require__.d = (t, e) => {
    for (var n in e)
      __webpack_require__.o(e, n) &&
        !__webpack_require__.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] })
  }),
  (__webpack_require__.g = (function () {
    if ('object' == typeof globalThis) return globalThis
    try {
      return this || new Function('return this')()
    } catch (t) {
      if ('object' == typeof window) return window
    }
  })()),
  (__webpack_require__.o = (t, e) =>
    Object.prototype.hasOwnProperty.call(t, e)),
  (__webpack_require__.nmd = (t) => (
    (t.paths = []), t.children || (t.children = []), t
  ))
var __webpack_exports__ = {}
;(() => {
  __webpack_require__(248)
  var t,
    e = __webpack_require__(44)
  function n(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return r(t)
      })(t) ||
      (function (t) {
        if (
          ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t['@@iterator']
        )
          return Array.from(t)
      })(t) ||
      (function (t, e) {
        if (t) {
          if ('string' == typeof t) return r(t, e)
          var n = {}.toString.call(t).slice(8, -1)
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(t, e)
                : void 0
          )
        }
      })(t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function r(t, e) {
    ;(null == e || e > t.length) && (e = t.length)
    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
    return r
  }
  ;(t = document.querySelectorAll(
    'iframe.wistia_embed,iframe[name=wistia_embed]'
  )).length > 0 &&
    n(t).some(function (t) {
      var e = new URL(t.src),
        n = new URLSearchParams(e.search)
      return 'true' === Object.fromEntries(n.entries()).web_component
    }) &&
    (0, e.dynamicImport)('assets/external/publicApi.js').then(function () {
      ;(0, e.dynamicImport)('assets/external/iframeApi.js')
    })
})()
//# sourceMappingURL=player.js.map
