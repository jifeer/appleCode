window.TMAP_AUTHKEY = "aa303c60a22c95a43fb8b5cd58bd501d";
window.T = window.T || {};
(function () {
    function each(t, i) {
        for (var n in t) t.hasOwnProperty(n) && i(t[n], n, t)
    }

    function find(t, i) {
        if (t.length) {
            for (var n = 0; n < t.length; n++) if (i(t[n])) return t[n]
        } else for (var e in t) if (t.hasOwnProperty(e) && i(t[e])) return t[e]
    }

    function first(t) {
        for (var i in t) if (t.hasOwnProperty(i)) return t[i]
    }

    function length(t) {
        var i = 0;
        for (var n in t) t.hasOwnProperty(n) && i++;
        return i
    }

    function prepend(t, i) {
        t.children.length ? t.insertBefore(i, t.children[0]) : t.appendChild(i)
    }

    T.Version = "4.0.4", T.q = {
        W: function (t, i) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * t + 1);
                case 2:
                    return parseInt(Math.random() * (i - t + 1) + t);
                default:
                    return 0
            }
        }
    }, T.w = {
        TMAP_AUTHKEY: window.TMAP_AUTHKEY,
        E: "http://api.tianditu.com",
        e: "http://api.tianditu.com/v4.0/image",
        R: "http://map.tianditu.com/query.shtml",
        IPSERVER: "http://map.tianditu.com/cityNode/getCityName.shtml",
        r: "http://api.tianditu.com/apiserver/ajaxproxy?proxyReqUrl=",
        T: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/DataServer?T=vec_c&"
        },
        t: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/DataServer?T=cva_c&"
        },
        Y: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/DataServer?T=vec_w&"
        },
        U: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.gov.cn/DataServer?T=cva_w&"
        },
        u: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&"
        },
        I: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&"
        },
        i: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&"
        },
        O: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&"
        },
        o: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/ter_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&"
        },
        P: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/cta_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&"
        },
        p: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&"
        },
        A: function () {
            return "http://t" + T.q.W(0, 7) + ".tianditu.com/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&"
        },
        a: ["/v4.0/components.js", "/v4.0/service.js", "/v4.0/military.js"],
        S: ["/v4.0/css/tianditu4.0.css"],
        TMAP_DEFAULT_MAPTYPES: []
    }, window.T_ANCHOR_TOP_LEFT = "topleft", window.T_ANCHOR_TOP_RIGHT = "topright", window.T_ANCHOR_BOTTOM_LEFT = "bottomleft", window.T_ANCHOR_BOTTOM_RIGHT = "bottomright", window.TMAP_NORMAL_MAP = null, window.TMAP_SATELLITE_MAP = null, window.TMAP_HYBRID_MAP = null, window.TMAP_TERRAIN_MAP = null, window.TMAP_TERRAIN_HYBRID_MAP = null, T.s = {
        extend: function (t) {
            var i, n, e, s;
            for (n = 1, e = arguments.length; n < e; n++) {
                s = arguments[n];
                for (i in s) t[i] = s[i]
            }
            return t
        }, D: Object.create || function () {
            function t() {
            }

            return function (i) {
                return t.prototype = i, new t
            }
        }(), d: function (t, i) {
            var n = Array.prototype.slice;
            if (t.d) return t.d.apply(t, n.call(arguments, 1));
            var e = n.call(arguments, 2);
            return function () {
                return t.apply(i, e.length ? e.concat(n.call(arguments)) : arguments)
            }
        }, F: function (t) {
            return t.f = t.f || ++T.s.G, t.f
        }, G: 0, g: function (t, i, n) {
            var e, s, o, r;
            return r = function () {
                e = !1, s && (o.apply(n, s), s = !1)
            }, o = function () {
                e ? s = arguments : (t.apply(n, arguments), setTimeout(r, i), e = !0)
            }
        }, H: function (t, i, n) {
            var e = i[1], s = i[0], o = e - s;
            return t === e && n ? t : ((t - s) % o + o) % o + s
        }, h: function () {
            return !1
        }, J: function (t, i) {
            var n = Math.pow(10, i || 5);
            return Math.round(t * n) / n
        }, j: function (t) {
            return t.j ? t.j() : t.replace(/^\s+|\s+$/g, "")
        }, K: function (t) {
            return T.s.j(t).split(/\s+/)
        }, setOptions: function (t, i) {
            t.hasOwnProperty("options") || (t.options = t.options ? T.s.D(t.options) : {});
            for (var n in i) t.options[n] = i[n];
            return t.options
        }, k: function (t, i, n) {
            var e = [];
            for (var s in t) e.push(encodeURIComponent(n ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
            return (i && i.indexOf("?") !== -1 ? "&" : "?") + e.join("&")
        }, L: function (t, i) {
            return t.replace(T.s.l, function (t, n) {
                var e = i[n];
                return void 0 === e || "function" == typeof e && (e = e(i)), e
            })
        }, l: /\{ *([\w_\-]+) *\}/g, Z: Array.Z || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, indexOf: function (t, i) {
            for (var n = 0; n < t.length; n++) if (t[n] === i) return n;
            return -1
        }, C: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }, function () {
        function t(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }

        function i(t) {
            var i = +new Date, e = Math.max(0, 16 - (i - n));
            return n = i + e, window.setTimeout(t, e)
        }

        var n = 0, e = window.requestAnimationFrame || t("RequestAnimationFrame") || i,
            s = window.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function (t) {
                window.clearTimeout(t)
            };
        T.s.V = function (t, n, s) {
            return s && e === i ? void t.call(n) : e.call(window, T.d(t, n))
        }, T.s.c = function (t) {
            t && s.call(window, t)
        }
    }(), T.extend = T.s.extend, T.d = T.s.d, T.F = T.s.F, T.setOptions = T.s.setOptions, T.B = function () {
    }, T.B.extend = function (t) {
        var i = function () {
            this.initialize && this.initialize.apply(this, arguments), this.v()
        }, n = i.__super__ = this.prototype, e = T.s.D(n);
        e.constructor = i, i.prototype = e;
        for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (i[s] = this[s]);
        return t.N && (T.extend(i, t.N), delete t.N), t.includes && (T.s.extend.apply(null, [e].concat(t.includes)), delete t.includes), e.options && (t.options = T.s.extend(T.s.D(e.options), t.options)), T.extend(e, t), e.b = [], e.v = function () {
            if (!this.M) {
                n.v && n.v.call(this), this.M = !0;
                for (var t = 0, i = e.b.length; t < i; t++) e.b[t].call(this)
            }
        }, i
    }, T.B.n = function (t) {
        return T.extend(this.prototype, t), this
    }, T.B._ = function (t) {
        return T.extend(this.prototype.options, t), this
    }, T.B.m = function (t) {
        var i = Array.prototype.slice.call(arguments, 1), n = "function" == typeof t ? t : function () {
            this[t].apply(this, i)
        };
        return this.prototype.b = this.prototype.b || [], this.prototype.b.push(n), this
    }, T.QQ = T.B.extend({
        on: function (t, i, n) {
            if ("object" == typeof t) for (var e in t) this.qQ(e, t[e], i); else {
                t = T.s.K(t);
                for (var s = 0, o = t.length; s < o; s++) this.qQ(t[s], i, n)
            }
            return this
        }, off: function (t, i, n) {
            if (t) if ("object" == typeof t) for (var e in t) this.wQ(e, t[e], i); else {
                t = T.s.K(t);
                for (var s = 0, o = t.length; s < o; s++) this.wQ(t[s], i, n)
            } else delete this.WQ;
            return this
        }, qQ: function (t, i, n) {
            var e = this.WQ = this.WQ || {}, s = n && n !== this && T.F(n);
            if (s) {
                var o = t + "_idx", r = t + "_len", h = e[o] = e[o] || {}, a = T.F(i) + "_" + s;
                h[a] || (h[a] = {fn: i, ctx: n}, e[r] = (e[r] || 0) + 1)
            } else e[t] = e[t] || [], e[t].push({fn: i})
        }, wQ: function (t, i, n) {
            var e, s, o, r, h = this.WQ, a = t + "_idx", u = t + "_len";
            if (h) {
                if (!i) {
                    s = h[a];
                    for (o in s) s[o].fn = T.s.h;
                    for (s = h[t] || [], o = 0, r = s.length; o < r; o++) s[o].fn = T.s.h;
                    return delete h[t], delete h[a], void delete h[u]
                }
                var c, l = n && n !== this && T.F(n);
                if (l) c = T.F(i) + "_" + l, s = h[a], s && s[c] && (e = s[c], delete s[c], h[u]--); else if (s = h[t]) {
                    for (o = 0, r = s.length; o < r; o++) if (s[o].fn === i) {
                        e = s[o], s.splice(o, 1);
                        break
                    }
                    0 === s.length && delete h[t]
                }
                e && (e.fn = T.s.h)
            }
        }, EQ: function (t, i, n) {
            if (!this.eQ(t, n)) return this;
            var e = T.s.extend({}, i, {type: t, target: this}), s = this.WQ;
            if (s) {
                var o, r, h, a, u = s[t + "_idx"];
                if (s[t]) for (h = s[t].slice(), o = 0, r = h.length; o < r; o++) h[o].fn.call(this, e);
                for (a in u) u[a].fn.call(u[a].ctx, e)
            }
            return n && this.RQ(e), this
        }, trigger: function (t, i, n) {
            return this.EQ(t, i, n), this
        }, eQ: function (t, i) {
            var n = this.WQ;
            if (n && (n[t] || n[t + "_len"])) return !0;
            if (i) for (var e in this.rQ) if (this.rQ[e].eQ(t, i)) return !0;
            return !1
        }, TQ: function (t, i, n) {
            if ("object" == typeof t) {
                for (var e in t) this.TQ(e, t[e], i);
                return this
            }
            var s = T.d(function () {
                this.off(t, i, n).off(t, s, n)
            }, this);
            return this.on(t, i, n).on(t, s, n)
        }, tQ: function (t) {
            return this.rQ = this.rQ || {}, this.rQ[T.F(t)] = t, this
        }, YQ: function (t) {
            return this.rQ && delete this.rQ[T.F(t)], this
        }, RQ: function (t) {
            for (var i in this.rQ) this.rQ[i].EQ(t.type, T.extend({layer: t.target}, t), !0)
        }
    });
    var pro = T.QQ.prototype;
    pro.addEventListener = pro.on, pro.removeEventListener = pro.UQ = pro.off, pro.uQ = pro.TQ, pro.IQ = pro.trigger, pro.iQ = pro.eQ, T.OQ = {oQ: pro}, function () {
        var t = navigator.userAgent.toLowerCase(), i = document.documentElement, n = "ActiveXObject" in window,
            e = "Microsoft Internet Explorer" == navigator.appName && "MSIE8.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
            s = "Microsoft Internet Explorer" == navigator.appName && "MSIE7.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
            o = "Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
            r = t.indexOf("webkit") !== -1, h = t.indexOf("phantom") !== -1, a = t.search("android [23]") !== -1,
            u = t.indexOf("chrome") !== -1, c = t.indexOf("gecko") !== -1 && !r && !window.opera && !n,
            l = 0 === navigator.platform.indexOf("Win"),
            f = "undefined" != typeof orientation || t.indexOf("mobile") !== -1,
            d = !window.PointerEvent && window.MSPointerEvent, p = window.PointerEvent || d,
            m = n && "transition" in i.style,
            v = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !a,
            y = "MozPerspective" in i.style, w = "OTransition" in i.style,
            g = !window.L_NO_TOUCH && (p || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);
        T.PQ = {
            ie: n,
            ie8: e,
            ie7: s,
            ie6: o,
            ielt9: n && !document.addEventListener,
            edge: "msLaunchUri" in navigator && !("documentMode" in document),
            webkit: r,
            gecko: c,
            android: t.indexOf("android") !== -1,
            android23: a,
            chrome: u,
            safari: !u && t.indexOf("safari") !== -1,
            win: l,
            ie3d: m,
            webkit3d: v,
            gecko3d: y,
            opera12: w,
            any3d: !window.L_DISABLE_3D && (m || v || y) && !w && !h,
            mobile: f,
            mobileWebkit: f && r,
            mobileWebkit3d: f && v,
            mobileOpera: f && window.opera,
            mobileGecko: f && c,
            touch: !!g,
            msPointer: !!d,
            pointer: !!p,
            retina: (window.pQ || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1
        }
    }(), T.Point = function (t, i, n) {
        this.x = n ? Math.round(t) : t, this.y = n ? Math.round(i) : i
    }, T.Point.prototype = {
        AQ: function () {
            return new T.Point(this.x, this.y)
        }, aQ: function (t) {
            return this.AQ().SQ(T.sQ(t))
        }, SQ: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, DQ: function (t) {
            return this.AQ().dQ(T.sQ(t))
        }, dQ: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, FQ: function (t) {
            return this.AQ().fQ(t)
        }, fQ: function (t) {
            return this.x /= t, this.y /= t, this
        }, GQ: function (t) {
            return this.AQ().gQ(t)
        }, gQ: function (t) {
            return this.x *= t, this.y *= t, this
        }, HQ: function (t) {
            return new T.Point(this.x * t.x, this.y * t.y)
        }, hQ: function (t) {
            return new T.Point(this.x / t.x, this.y / t.y)
        }, JQ: function () {
            return this.AQ().jQ()
        }, jQ: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, KQ: function () {
            return this.AQ().kQ()
        }, kQ: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, LQ: function () {
            return this.AQ().lQ()
        }, lQ: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, distanceTo: function (t) {
            t = T.sQ(t);
            var i = t.x - this.x, n = t.y - this.y;
            return Math.sqrt(i * i + n * n)
        }, equals: function (t) {
            return t = T.sQ(t), t.x === this.x && t.y === this.y
        }, contains: function (t) {
            return t = T.sQ(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        }, ZQ: function () {
            return "Point(" + T.s.J(this.x) + ", " + T.s.J(this.y) + ")"
        }
    }, T.sQ = function (t, i, n) {
        return t instanceof T.Point ? t : T.s.Z(t) ? new T.Point(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new T.Point(t.x, t.y) : new T.Point(t, i, n)
    }, T.CQ = function (t, i) {
        if (t) for (var n = i ? [t, i] : t, e = 0, s = n.length; e < s; e++) this.extend(n[e])
    }, T.CQ.prototype = {
        extend: function (t) {
            return t = T.sQ(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.AQ(), this.max = t.AQ()), this
        }, getCenter: function (t) {
            return new T.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        }, VQ: function () {
            return new T.Point(this.min.x, this.max.y)
        }, cQ: function () {
            return new T.Point(this.max.x, this.min.y)
        }, getSize: function () {
            return this.max.DQ(this.min)
        }, contains: function (t) {
            var i, n;
            return t = "number" == typeof t[0] || t instanceof T.Point ? T.sQ(t) : T.BQ(t), t instanceof T.CQ ? (i = t.min, n = t.max) : i = n = t, i.x >= this.min.x && n.x <= this.max.x && i.y >= this.min.y && n.y <= this.max.y
        }, intersects: function (t) {
            t = T.BQ(t);
            var i = this.min, n = this.max, e = t.min, s = t.max, o = s.x >= i.x && e.x <= n.x,
                r = s.y >= i.y && e.y <= n.y;
            return o && r
        }, vQ: function (t) {
            t = T.BQ(t);
            var i = this.min, n = this.max, e = t.min, s = t.max, o = s.x > i.x && e.x < n.x,
                r = s.y > i.y && e.y < n.y;
            return o && r
        }, NQ: function () {
            return !(!this.min || !this.max)
        }
    }, T.BQ = function (t, i) {
        return !t || t instanceof T.CQ ? t : new T.CQ(t, i)
    }, T.bQ = function (t, i, n, e) {
        this._a = t, this._b = i, this._c = n, this._d = e
    }, T.bQ.prototype = {
        MQ: function (t, i) {
            return this.nQ(t.AQ(), i)
        }, nQ: function (t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        }, _Q: function (t, i) {
            return i = i || 1, new T.Point((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    }, T.mQ = {
        Qq: function (t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }, getStyle: function (t, i) {
            var n = t.style[i] || t.currentStyle && t.currentStyle[i];
            if ((!n || "auto" === n) && document.defaultView) {
                var e = document.defaultView.getComputedStyle(t, null);
                n = e ? e[i] : null
            }
            return "auto" === n ? null : n
        }, D: function (t, i, n) {
            var e = document.createElement(t);
            return e.className = i || "", n && n.appendChild(e), e
        }, qq: function (t) {
            var i = t.parentNode;
            i && i.removeChild(t)
        }, Wq: function (t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }, wq: function (t) {
            t.parentNode.appendChild(t)
        }, Eq: function (t) {
            var i = t.parentNode;
            i.insertBefore(t, i.firstChild)
        }, eq: function (t, i) {
            if (void 0 !== t.classList) return t.classList.contains(i);
            var n = T.mQ.Rq(t);
            return n.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(n)
        }, rq: function (t, i) {
            if (void 0 !== t.classList) for (var n = T.s.K(i), e = 0, s = n.length; e < s; e++) t.classList.add(n[e]); else if (!T.mQ.eq(t, i)) {
                var o = T.mQ.Rq(t);
                T.mQ.Tq(t, (o ? o + " " : "") + i)
            }
        }, tq: function (t, i) {
            void 0 !== t.classList ? t.classList.remove(i) : T.mQ.Tq(t, T.s.j((" " + T.mQ.Rq(t) + " ").replace(" " + i + " ", " ")))
        }, Tq: function (t, i) {
            void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
        }, Rq: function (t) {
            return void 0 === t.className.baseVal ? t.className : t.className.baseVal
        }, setOpacity: function (t, i) {
            "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && T.mQ.Yq(t, i)
        }, Yq: function (t, i) {
            var n = !1, e = "DXImageTransform.Microsoft.Alpha";
            try {
                n = t.filters.item(e)
            } catch (sO) {
                if (1 === i) return
            }
            i = Math.round(100 * i), n ? (n.Enabled = 100 !== i, n.Opacity = i) : t.style.filter += " progid:" + e + "(opacity=" + i + ")"
        }, Uq: function (t) {
            for (var i = document.documentElement.style, n = 0; n < t.length; n++) if (t[n] in i) return t[n];
            return !1
        }, uq: function (t, i, n) {
            var e = i || new T.Point(0, 0);
            t.style[T.mQ.Iq] = (T.PQ.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (n ? " scale(" + n + ")" : "")
        }, setPosition: function (t, i) {
            t._tdt_pos = i, T.PQ.any3d ? T.mQ.uq(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
        }, getPosition: function (t) {
            return t._tdt_pos || new T.Point(0, 0)
        }
    }, function () {
        T.mQ.Iq = T.mQ.Uq(["MQ", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
        var t = T.mQ.iq = T.mQ.Uq(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
        if (T.mQ.Oq = "webkitTransition" === t || "OTransition" === t ? t + "End" : "transitionend", "onselectstart" in document) T.mQ.oq = function () {
            T.Pq.on(window, "selectstart", T.Pq.preventDefault)
        }, T.mQ.pq = function () {
            T.Pq.off(window, "selectstart", T.Pq.preventDefault)
        }; else {
            var i = T.mQ.Uq(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            T.mQ.oq = function () {
                if (i) {
                    var t = document.documentElement.style;
                    this.Aq = t[i], t[i] = "none"
                }
            }, T.mQ.pq = function () {
                i && (document.documentElement.style[i] = this.Aq, delete this.Aq)
            }
        }
        T.mQ.aq = function () {
            T.Pq.on(window, "dragstart", T.Pq.preventDefault)
        }, T.mQ.Sq = function () {
            T.Pq.off(window, "dragstart", T.Pq.preventDefault)
        }, T.mQ.sq = function (t) {
            for (; t.tabIndex === -1;) t = t.parentNode;
            t && t.style && (T.mQ.Dq(), this.dq = t, this._outlineStyle = t.style.outline, t.style.outline = "none", T.Pq.on(window, "keydown", T.mQ.Dq, this))
        }, T.mQ.Dq = function () {
            this.dq && (this.dq.style.outline = this._outlineStyle, delete this.dq, delete this._outlineStyle, T.Pq.off(window, "keydown", T.mQ.Dq, this))
        }
    }(), T.Fq = function (t, i, n) {
        isNaN(t) || isNaN(i), this.lat = +parseFloat(t).toFixed(5), this.lng = +parseFloat(i).toFixed(5), void 0 !== n && (this.fq = +n)
    }, T.Fq.prototype = {
        equals: function (t, i) {
            if (!t) return !1;
            t = T.Gq(t);
            var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return n <= (void 0 === i ? 1e-9 : i)
        }, ZQ: function (t) {
            return "LngLat(" + T.s.J(this.lng, t) + ", " + T.s.J(this.lat, t) + ")"
        }, distanceTo: function (t) {
            return T.Hq.gq.distance(this, T.Gq(t))
        }, hq: function () {
            return T.Hq.gq.Jq(this)
        }, jq: function (t) {
            var i = 180 * t / 40075017, n = i / Math.cos(Math.PI / 180 * this.lat);
            return T.Kq([this.lat - i, this.lng - n], [this.lat + i, this.lng + n])
        }, AQ: function () {
            return new T.Fq(this.lat, this.lng, this.fq)
        }, getLng: function () {
            return this.lng
        }, getLat: function () {
            return this.lat
        }
    }, T.Gq = function (t, i, n) {
        return t instanceof T.Fq ? t : T.s.Z(t) && "object" != typeof t[0] ? 3 === t.length ? new T.Fq(t[0], t[1], t[2]) : 2 === t.length ? new T.Fq(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new T.Fq(t.lat, "lng" in t ? t.lng : t.lon, t.fq) : void 0 === i ? null : new T.Fq(t, i, n)
    }, T.LngLat = function (t, i, n) {
        return new T.Fq(i, t, n)
    }, T.kq = function (t, i) {
        if (t) for (var n = i ? [t, i] : t, e = 0, s = n.length; e < s; e++) this.extend(n[e])
    }, T.kq.prototype = {
        extend: function (t) {
            var i, n, e = this.Lq, s = this.lq;
            if (t instanceof T.Fq) i = t, n = t; else {
                if (!(t instanceof T.kq)) return t ? this.extend(T.Gq(t) || T.Kq(t)) : this;
                if (i = t.Lq, n = t.lq, !i || !n) return this
            }
            return e || s ? (e.lat = Math.min(i.lat, e.lat), e.lng = Math.min(i.lng, e.lng), s.lat = Math.max(n.lat, s.lat), s.lng = Math.max(n.lng, s.lng)) : (this.Lq = new T.Fq(i.lat, i.lng), this.lq = new T.Fq(n.lat, n.lng)), this
        }, Zq: function (t) {
            var i = this.Lq, n = this.lq, e = Math.abs(i.lat - n.lat) * t, s = Math.abs(i.lng - n.lng) * t;
            return new T.kq(new T.Fq(i.lat - e, i.lng - s), new T.Fq(n.lat + e, n.lng + s))
        }, getCenter: function () {
            return new T.Fq((this.Lq.lat + this.lq.lat) / 2, (this.Lq.lng + this.lq.lng) / 2)
        }, getSouthWest: function () {
            return this.Lq
        }, getNorthEast: function () {
            return this.lq
        }, Cq: function () {
            return new T.Fq(this.Vq(), this.cq())
        }, Bq: function () {
            return new T.Fq(this.vq(), this.Nq())
        }, cq: function () {
            return this.Lq.lng
        }, vq: function () {
            return this.Lq.lat
        }, Nq: function () {
            return this.lq.lng
        }, Vq: function () {
            return this.lq.lat
        }, contains: function (t) {
            t = "number" == typeof t[0] || t instanceof T.Fq ? T.Gq(t) : T.Kq(t);
            var i, n, e = this.Lq, s = this.lq;
            return t instanceof T.kq ? (i = t.getSouthWest(), n = t.getNorthEast()) : i = n = t, i.lat >= e.lat && n.lat <= s.lat && i.lng >= e.lng && n.lng <= s.lng
        }, intersects: function (t) {
            t = T.Kq(t);
            var i = this.Lq, n = this.lq, e = t.getSouthWest(), s = t.getNorthEast(),
                o = s.lat >= i.lat && e.lat <= n.lat, r = s.lng >= i.lng && e.lng <= n.lng;
            return o && r
        }, vQ: function (t) {
            t = T.Kq(t);
            var i = this.Lq, n = this.lq, e = t.getSouthWest(), s = t.getNorthEast(),
                o = s.lat > i.lat && e.lat < n.lat, r = s.lng > i.lng && e.lng < n.lng;
            return o && r
        }, bq: function () {
            return [this.cq(), this.vq(), this.Nq(), this.Vq()].join(",")
        }, equals: function (t) {
            return !!t && (t = T.Kq(t), this.Lq.equals(t.getSouthWest()) && this.lq.equals(t.getNorthEast()))
        }, NQ: function () {
            return !(!this.Lq || !this.lq)
        }
    }, T.Kq = function (t, i) {
        return t instanceof T.kq ? t : new T.kq(t, i)
    }, T.LngLatBounds = function (t, i) {
        return t instanceof T.kq ? t : new T.kq(t, i)
    }, T.Mq = {}, T.Mq.nq = {
        _q: function (t) {
            return new T.Point(t.lng, t.lat)
        }, mq: function (t) {
            return new T.Fq(t.y, t.x)
        }, bounds: T.BQ([-180, -90], [180, 90])
    }, T.Mq.QW = {
        R: 6378137, qW: 85.0511287798, _q: function (t) {
            var i = Math.PI / 180, n = this.qW, e = Math.max(Math.min(n, t.lat), -n), s = Math.sin(e * i);
            return new T.Point(this.R * t.lng * i, this.R * Math.log((1 + s) / (1 - s)) / 2)
        }, mq: function (t) {
            var i = 180 / Math.PI;
            return new T.Fq((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
        }, bounds: function () {
            var t = 6378137 * Math.PI;
            return T.BQ([-t, -t], [t, t])
        }()
    }, T.Hq = {
        WW: function (t, i) {
            var n = this.projection._q(t), e = this.scale(i);
            return this.wW.nQ(n, e)
        }, EW: function (t, i) {
            var n = this.scale(i), e = this.wW._Q(t, n);
            return this.projection.mq(e)
        }, _q: function (t) {
            return this.projection._q(t)
        }, mq: function (t) {
            return this.projection.mq(t)
        }, scale: function (t) {
            return 256 * Math.pow(2, t - T.Hq.eW)
        }, eW: 0, zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        }, RW: function (t) {
            if (this.rW) return null;
            var i = this.projection.bounds, n = this.scale(t), e = this.wW.MQ(i.min, n), s = this.wW.MQ(i.max, n);
            return T.BQ(e, s)
        }, rW: !1, Jq: function (t) {
            var i = this.TW ? T.s.H(t.lng, this.TW, !0) : t.lng,
                n = this.wrapLat ? T.s.H(t.lat, this.wrapLat, !0) : t.lat, e = t.fq;
            return T.Gq(n, i, e)
        }
    }, T.Hq.tW = T.extend({}, T.Hq, {
        projection: T.Mq.nq, wW: new T.bQ(1, 0, -1, 0), scale: function (t) {
            return Math.pow(2, t)
        }, zoom: function (t) {
            return Math.log(t) / Math.LN2
        }, distance: function (t, i) {
            var n = i.lng - t.lng, e = i.lat - t.lat;
            return Math.sqrt(n * n + e * e)
        }, rW: !0
    }), T.Hq.gq = T.extend({}, T.Hq, {
        TW: [-180, 180], R: 6371e3, distance: function (t, i) {
            var n = Math.PI / 180, e = t.lat * n, s = i.lat * n,
                o = Math.sin(e) * Math.sin(s) + Math.cos(e) * Math.cos(s) * Math.cos((i.lng - t.lng) * n);
            return this.R * Math.acos(Math.min(o, 1))
        }
    }), T.Hq.YW = T.extend({}, T.Hq.gq, {
        code: "UW", projection: T.Mq.QW, wW: function () {
            var t = .5 / (Math.PI * T.Mq.QW.R);
            return new T.bQ(t, .5, -t, .5)
        }()
    }), T.Hq.uW = T.extend({}, T.Hq.YW, {code: "EPSG:900913"}), T.Hq.IW = T.extend({}, T.Hq.gq, {
        code: "EPSG:4326",
        projection: T.Mq.nq,
        wW: new T.bQ(1 / 180, 1, -1 / 180, .5)
    }), T.Map = T.QQ.extend({
        options: {
            iW: T.Hq.uW,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            OW: void 0,
            oW: !0,
            PW: !0,
            pW: !0,
            AW: 8388608,
            aW: 1,
            SW: 1
        }, initialize: function (t, i) {
            i = T.setOptions(this, i), this.sW = "EPSG:900913", i.projection ? "EPSG:4326" == i.projection ? (i.iW = T.Hq.IW, this.sW = "EPSG:4326", T.Hq.eW = 1) : (i.iW = T.Hq.uW, this.sW = "EPSG:900913", i.projection = this.sW, T.Hq.eW = 0) : i.projection = this.sW, this.DW(t), this.dW(), this.FW = T.d(this.FW, this), this.fW(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this.GW = this.gW(i.zoom)), i.center && void 0 !== i.zoom && this.HW(T.Gq(i.center), i.zoom, {reset: !0}), this.hW = [], this.JW = {}, this.jW = [], this.KW = [], this.kW = {}, this.LW = !0, this.initLayers = [], this.v(), this.defaultMapType = null, this.lW(this), this.ZW(this.options.layers)
        }, getCode: function () {
            return this.sW
        }, HW: function (t, i) {
            return i = void 0 === i ? this.getZoom() : i, this.CW(T.Gq(t), i), this
        }, setZoom: function (t, i) {
            return this.VW ? this.HW(this.getCenter(), t, {zoom: i}) : (this.GW = t, this)
        }, zoomIn: function (t, i) {
            return t = t || (T.PQ.any3d ? this.options.SW : 1), this.setZoom(this.GW + t, i)
        }, zoomOut: function (t, i) {
            return t = t || (T.PQ.any3d ? this.options.SW : 1), this.setZoom(this.GW - t, i)
        }, cW: function (t, i, n) {
            var e = this.BW(i), s = this.getSize().FQ(2), o = t instanceof T.Point ? t : this.vW(t),
                r = o.DQ(s).GQ(1 - 1 / e), h = this.NW(s.aQ(r));
            return this.HW(h, i, {zoom: n})
        }, bW: function (t, i) {
            i = i || {}, t = t.getBounds ? t.getBounds() : T.Kq(t);
            var n = T.sQ(i.MW || i.nW || [0, 0]), e = T.sQ(i.paddingBottomRight || i.nW || [0, 0]),
                s = this._W(t, !1, n.aQ(e));
            s = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, s) : s;
            var o = e.DQ(n).FQ(2), r = this._q(t.getSouthWest(), s), h = this._q(t.getNorthEast(), s),
                a = this.mq(r.aQ(h).FQ(2).aQ(o), s);
            return {center: a, zoom: s}
        }, mW: function (t, i) {
            if (t = T.Kq(t), !t.NQ()) throw new Error("Bounds are not valid.");
            var n = this.bW(t, i);
            return this.HW(n.center, n.zoom, i)
        }, Qw: function (t) {
            return this.mW([[-90, -180], [90, 180]], t)
        }, getViewport: function (t) {
            if (T.s.Z(t) && 0 != t.length) {
                var i = this.qw(t);
                return {center: i.getCenter(), zoom: this._W(i, !1)}
            }
        }, setViewport: function (t) {
            if (T.s.Z(t) && 0 != t.length) {
                var i = this.qw(t);
                this.panTo(i.getCenter(), this._W(i, !1))
            }
        }, qw: function (t) {
            for (var i = new T.LngLatBounds(new T.LngLat(0, 0)), n = 0, e = t.length; n < e; n++) {
                var s = T.Gq(t[n]);
                i.extend(s)
            }
            return i
        }, panTo: function (t, i, n) {
            return i && (this.GW = i), this.centerAndZoom(t, this.GW, {Ww: n})
        }, panBy: function (t) {
            return this.EQ("movestart"), this.ww(T.sQ(t)), this.EQ("move"), this.EQ("moveend")
        }, setMaxBounds: function (t) {
            return t = T.Kq(t), t.NQ() ? (this.options.maxBounds && this.off("moveend", this.Ew), this.options.maxBounds = t, this.VW && this.Ew(), this.on("moveend", this.Ew)) : (this.options.maxBounds = null, this.off("moveend", this.Ew))
        }, setMinZoom: function (t) {
            return this.options.minZoom = t, this.VW && this.getZoom() < this.options.minZoom ? this.setZoom(t) : (this.EQ("minzoom", {
                minZoom: this.options.minZoom,
                maxZoom: this.options.maxZoom
            }), this)
        }, setMaxZoom: function (t) {
            return this.options.maxZoom = t, this.VW && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : (this.EQ("maxzoom", {
                minZoom: this.options.minZoom,
                maxZoom: this.options.maxZoom
            }), this)
        }, ew: function (t, i) {
            this.Rw = !0;
            var n = this.getCenter(), e = this.rw(n, this.GW, T.Kq(t));
            return n.equals(e) || this.panTo(e, i), this.Rw = !1, this
        }, Tw: function (t) {
            if (!this.VW) return this;
            t = T.extend({tw: !1, Ww: !0}, t === !0 ? {tw: !0} : t);
            var i = this.getSize();
            this.LW = !0, this.Yw = null;
            var n = this.getSize(), e = i.FQ(2).JQ(), s = n.FQ(2).JQ(), o = e.DQ(s);
            return o.x || o.y ? (t.tw && t.Ww ? this.panBy(o) : (t.Ww && this.ww(o), this.EQ("move"), t.Uw ? (clearTimeout(this.uw), this.uw = setTimeout(T.d(this.EQ, this, "moveend"), 200)) : this.EQ("moveend")), this.EQ("resize", {
                oldSize: i,
                newSize: n
            })) : this
        }, checkResize: function () {
            this.Tw()
        }, Iw: function () {
            return this.setZoom(this.gW(this.GW)), this.options.aW || this.EQ("viewreset"), this.iw()
        }, Ow: function (t, i) {
            if (!i) return this;
            var n = this[t] = new i(this);
            return this.hW.push(n), this.options[t] && n.enable(), this
        }, qq: function () {
            this.fW(!0);
            try {
                delete this.ow._tdt
            } catch (sO) {
                this.ow._tdt = void 0
            }
            T.mQ.qq(this.Pw), this.pw && this.pw(), this.Aw(), this.VW && this.EQ("unload");
            for (var t in this.JW) this.JW[t].qq();
            return this
        }, aw: function (t, i) {
            var n = "tdt-pane" + (t ? " tdt-" + t.replace("Pane", "") + "-pane" : ""),
                e = T.mQ.D("div", n, i || this.Pw);
            return t && (this.Sw[t] = e), e
        }, getCenter: function () {
            return this.sw(), this.Yw && !this.Dw() ? this.Yw : this.dw(this.Fw())
        }, getZoom: function () {
            return this.GW
        }, getBounds: function () {
            var t = this.fw(), i = this.mq(t.VQ()), n = this.mq(t.cQ());
            return new T.kq(i, n)
        }, getMinZoom: function () {
            return void 0 === this.options.minZoom ? this.Gw || 0 : this.options.minZoom
        }, getMaxZoom: function () {
            return void 0 === this.options.maxZoom ? void 0 === this.gw ? 1 / 0 : this.gw : this.options.maxZoom
        }, _W: function (t, i, n) {
            t = T.Kq(t), n = T.sQ(n || [0, 0]);
            var e = this.getZoom() || 0, s = this.getMinZoom(), o = this.getMaxZoom(), r = t.Cq(), h = t.Bq(),
                a = this.getSize().DQ(n), u = this._q(h, e).DQ(this._q(r, e)), c = T.PQ.any3d ? this.options.aW : 1,
                l = Math.min(a.x / u.x, a.y / u.y);
            return e = this.Hw(l, e), c && (e = Math.round(e / (c / 100)) * (c / 100), e = i ? Math.ceil(e / c) * c : Math.floor(e / c) * c), Math.max(s, Math.min(o, e))
        }, getSize: function () {
            return this.hw && !this.LW || (this.hw = new T.Point(this.ow.clientWidth, this.ow.clientHeight), this.LW = !1), this.hw.AQ()
        }, fw: function (t, i) {
            var n = this.Jw(t, i);
            return new T.CQ(n, n.aQ(this.getSize()))
        }, jw: function () {
            return this.sw(), this.Kw
        }, kw: function (t) {
            return this.options.iW.RW(void 0 === t ? this.getZoom() : t)
        }, getPane: function (t) {
            return "string" == typeof t ? this.Sw[t] : t
        }, getPanes: function () {
            return this.Sw
        }, getContainer: function () {
            return this.ow
        }, BW: function (t, i) {
            var n = this.options.iW;
            return i = void 0 === i ? this.GW : i, n.scale(t) / n.scale(i)
        }, Hw: function (t, i) {
            var n = this.options.iW;
            return i = void 0 === i ? this.GW : i, n.zoom(t * n.scale(i + T.Hq.eW))
        }, setCrs: function (t) {
            if (t == this.getCode()) return !1;
            var i = this.getCenter();
            "EPSG:900913" == t ? (this.options.iW = T.Hq.uW, this.sW = t, T.Hq.eW = 0) : (this.options.iW = T.Hq.IW, this.sW = t, T.Hq.eW = 1), this.setMapType(this.getMapType()), this.CW(i, this.getZoom())
        }, switchingMaps: function (t) {
            this.setCrs(t)
        }, _q: function (t, i) {
            return i = void 0 === i ? this.GW : i, this.options.iW.WW(T.Gq(t), i)
        }, mq: function (t, i) {
            return i = void 0 === i ? this.GW : i, this.options.iW.EW(T.sQ(t), i)
        }, dw: function (t) {
            var i = T.sQ(t).aQ(this.jw());
            return this.mq(i)
        }, Lw: function (t) {
            var i = this._q(T.Gq(t)).jQ();
            return i.dQ(this.jw())
        }, layerPointToLngLat: function (t) {
            return this.dw(t)
        }, lngLatToLayerPoint: function (t) {
            return this.Lw(t)
        }, Jq: function (t) {
            return this.options.iW.Jq(T.Gq(t))
        }, distance: function (t, i) {
            return this.options.iW.distance(T.Gq(t), T.Gq(i))
        }, getDistance: function (t, i) {
            return this.distance(t, i)
        }, lw: function (t) {
            return T.sQ(t).DQ(this.Zw())
        }, Cw: function (t) {
            return T.sQ(t).aQ(this.Zw())
        }, NW: function (t) {
            var i = this.lw(T.sQ(t));
            return this.dw(i)
        }, vW: function (t) {
            return this.Cw(this.Lw(T.Gq(t)))
        }, containerPointToLngLat: function (t) {
            return this.NW(t)
        }, lngLatToContainerPoint: function (t) {
            return this.vW(t)
        }, Vw: function (t) {
            return T.Pq.cw(t, this.ow)
        }, Bw: function (t) {
            return this.lw(this.Vw(t))
        }, vw: function (t) {
            return this.dw(this.Bw(t))
        }, DW: function (t) {
            var i = this.ow = T.mQ.Qq(t);
            i && i._tdt, T.Pq.addListener(i, "scroll", this.Nw, this), i._tdt = !0
        }, dW: function () {
            var t = this.ow;
            this.bw = this.options.oW && T.PQ.any3d, T.mQ.rq(t, "tdt-container" + (T.PQ.touch ? " tdt-touch" : "") + (T.PQ.retina ? " tdt-retina" : "") + (T.PQ.ielt9 ? " tdt-oldie" : "") + (T.PQ.safari ? " tdt-safari" : "") + (this.bw ? " tdt-fade-anim" : ""));
            var i = T.mQ.getStyle(t, "position");
            "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this.Mw(), this.nw && this.nw()
        }, Mw: function () {
            var t = this.Sw = {};
            this._w = {}, this.Pw = this.aw("mapPane", this.ow), T.mQ.setPosition(this.Pw, new T.Point(0, 0)), this.aw("tilePane"), this.aw("mw"), this.aw("overlayPane"), this.aw("markerPane"), this.aw("infoWindowPane"), this.options.pW || (T.mQ.rq(t.markerPane, "tdt-zoom-hide"), T.mQ.rq(t.mw, "tdt-zoom-hide"))
        }, CW: function (t, i) {
            T.mQ.setPosition(this.Pw, new T.Point(0, 0));
            var n = !this.VW;
            this.VW = !0, i = this.gW(i), this.EQ("viewprereset");
            var e = this.GW !== i;
            this.WE(e).qE(t, i).QE(e), this.EQ("viewreset"), n && this.EQ("load")
        }, WE: function (t) {
            return t && this.EQ("zoomstart"), this.EQ("movestart")
        }, qE: function (t, i, n) {
            void 0 === i && (i = this.GW);
            var e = this.GW !== i;
            return this.GW = i, this.Yw = t, this.Kw = this.wE(t), (e || n && n.pinch) && this.EQ("zoom", n), this.EQ("move", n)
        }, QE: function (t) {
            return t && this.EQ("zoomend"), this.EQ("moveend")
        }, iw: function () {
            return T.s.c(this.EE), this.eE && this.eE.Iw(), this
        }, ww: function (t) {
            T.mQ.setPosition(this.Pw, this.Zw().DQ(t))
        }, RE: function () {
            return this.getMaxZoom() - this.getMinZoom()
        }, Ew: function () {
            this.Rw || this.ew(this.options.maxBounds)
        }, sw: function () {
            !this.VW
        }, fW: function (t) {
            if (T.Pq) {
                this.rE = {}, this.rE[T.F(this.ow)] = this;
                var i = t ? "off" : "on";
                T.Pq[i](this.ow, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this.TE, this), this.options.PW && T.Pq[i](window, "resize", this.FW, this), T.PQ.any3d && this.options.AW && this[i]("moveend", this.tE)
            }
        }, FW: function () {
            T.s.c(this.YE), this.YE = T.s.V(function () {
                this.Tw({Uw: !0})
            }, this)
        }, Nw: function () {
            this.ow.scrollTop = 0, this.ow.scrollLeft = 0
        }, tE: function () {
            var t = this.Zw();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.AW && this.CW(this.getCenter(), this.getZoom())
        }, UE: function (t, i) {
            for (var n, e = [], s = "mouseout" === i || "mouseover" === i, o = t.target || t.srcElement, r = !1; o;) {
                if (n = this.rE[T.F(o)], n && ("click" === i || "uE" === i) && !t.IE && this.iE(n)) {
                    r = !0;
                    break
                }
                if (n && n.eQ(i, !0)) {
                    if (s && !T.Pq.OE(o, t)) break;
                    if (e.push(n), s) break
                }
                if (o === this.ow) break;
                o = o.parentNode
            }
            return e.length || r || s || !T.Pq.OE(o, t) || (e = [this]), e
        }, TE: function (t) {
            if (this.VW && !T.Pq.oE(t)) {
                var i = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
                "mousedown" === i && T.mQ.sq(t.target || t.srcElement), this.PE(t, i)
            }
        }, PE: function (t, i, n) {
            if ("click" === t.type) {
                var e = T.s.extend({}, t);
                e.type = "uE", this.PE(e, e.type, n)
            }
            if (!t._stopped && (n = (n || []).concat(this.UE(t, i)), n.length)) {
                var s = n[0];
                "contextmenu" === i && s.eQ(i, !0) && T.Pq.preventDefault(t);
                var o = {originalEvent: t};
                if ("keypress" !== t.type) {
                    var r = s instanceof T.Marker;
                    o.containerPoint = r ? this.vW(s.pE()) : this.Vw(t), o.layerPoint = this.lw(o.containerPoint), o.lnglat = r ? s.pE() : this.dw(o.layerPoint)
                }
                for (var h = 0; h < n.length; h++) if (n[h].EQ(i, o, !0), o.originalEvent._stopped || n[h].options.AE && T.s.indexOf(n[h].options.AE, i) !== -1) return
            }
        }, iE: function (t) {
            return t = t.aE && t.aE.SE() ? t : this, t.aE && t.aE.moved() || this.sE && this.sE.moved()
        }, Aw: function () {
            for (var t = 0, i = this.hW.length; t < i; t++) this.hW[t].disable()
        }, DE: function (t, i) {
            return this.VW ? t.call(i || this, {target: this}) : this.on("load", t, i), this
        }, Zw: function () {
            return T.mQ.getPosition(this.Pw) || new T.Point(0, 0)
        }, Dw: function () {
            var t = this.Zw();
            return t && !t.equals([0, 0])
        }, Jw: function (t, i) {
            var n = t && void 0 !== i ? this.wE(t, i) : this.jw();
            return n.DQ(this.Zw())
        }, wE: function (t, i) {
            var n = this.getSize().fQ(2);
            return this._q(t, i).dQ(n).SQ(this.Zw()).jQ()
        }, dE: function (t, i, n) {
            var e = this.wE(n, i);
            return this._q(t, i).dQ(e)
        }, Fw: function () {
            return this.lw(this.getSize().fQ(2))
        }, FE: function (t) {
            return this.Lw(t).DQ(this.Fw())
        }, rw: function (t, i, n) {
            if (!n) return t;
            var e = this._q(t, i), s = this.getSize().FQ(2), o = new T.CQ(e.DQ(s), e.aQ(s)), r = this.fE(o, n, i);
            return r.JQ().equals([0, 0]) ? t : this.mq(e.aQ(r), i)
        }, GE: function (t, i) {
            if (!i) return t;
            var n = this.fw(), e = new T.CQ(n.min.aQ(t), n.max.aQ(t));
            return t.aQ(this.fE(e, i))
        }, fE: function (t, i, n) {
            var e = T.BQ(this._q(i.getNorthEast(), n), this._q(i.getSouthWest(), n)), s = e.min.DQ(t.min),
                o = e.max.DQ(t.max), r = this.gE(s.x, -o.x), h = this.gE(s.y, -o.y);
            return new T.Point(r, h)
        }, gE: function (t, i) {
            return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
        }, gW: function (t) {
            var i = this.getMinZoom(), n = this.getMaxZoom(), e = T.PQ.any3d ? this.options.aW : 1;
            return e && (t = Math.round(t / e) * e), Math.max(i, Math.min(n, t))
        }, enableAutoResize: function () {
            this.options.PW = !0, T.Pq.on(window, "resize", this.FW, this)
        }, disableAutoResize: function () {
            this.options.PW = !1, T.Pq.off(window, "resize", this.FW, this)
        }, getOverlays: function () {
            var t = [];
            for (var i in this.JW) "undefined" != typeof this.JW[i].options.type && t.push(this.JW[i]);
            return t
        }
    }), T.HE = function (t, i) {
        return new T.Map(t, i)
    }, T.hE = T.QQ.extend({
        options: {JE: "overlayPane", AE: []}, addTo: function (t) {
            return t.addLayer(this), this
        }, qq: function () {
            return this.jE(this.KE || this.kE)
        }, jE: function (t) {
            return t && t.removeLayer(this), this
        }, getPane: function (t) {
            return this.KE.getPane(t ? this.options[t] || t : this.options.JE)
        }, LE: function (t) {
            return this.KE.rE[T.F(t)] = this, this
        }, lE: function (t) {
            return delete this.KE.rE[T.F(t)], this
        }, ZE: function (t) {
            var i = t.target;
            if (i.hasLayer(this)) {
                if (this.KE = i, this.CE = i.CE, this.VE) {
                    var n = this.VE();
                    i.on(n, this), this.TQ("remove", function () {
                        i.off(n, this)
                    }, this)
                }
                this.onAdd(i), this.cE && this.KE.BE && this.KE.BE.vE(this.cE()), this.EQ("aQ"), i.EQ("layeradd", {layer: this})
            }
        }
    }), T.Map.n({
        addLayer: function (t) {
            var i = T.F(t);
            return this.JW[i] ? this : (this.JW[i] = t, "undefined" != typeof this.JW[i].options.type && this.jW.push(this.JW[i]), t.kE = this, t.NE && t.NE(this), this.DE(t.ZE, t), this)
        }, removeLayer: function (t) {
            var i = T.F(t);
            return this.JW[i] ? (this.VW && t.onRemove(this), t.cE && this.BE && this.BE.bE(t.cE()), delete this.JW[i], this.VW && (this.EQ("layerremove", {layer: t}), t.EQ("remove")), t.KE = t.kE = null, this) : this
        }, getLayers: function () {
            var t = [];
            for (layer in this.JW) "function" == typeof this.JW[layer].getTileUrl && "tilePane" == this.JW[layer].options.JE && t.push(this.JW[layer]);
            return t
        }, clearLayers: function () {
            for (var t = 0; t < this.KW.length; t++) this.removeOverLay(this.KW[t]);
            for (var t = this.KW.length - 1; t >= 0; t--) this.KW.splice(t, 1);
            return this
        }, addOverLay: function (t) {
            this.addLayer(t), this.EQ("addoverlay", {addoverlay: t})
        }, removeOverLay: function (t) {
            this.removeLayer(t), this.EQ("removeoverlay", {removeoverlay: t})
        }, clearOverLays: function () {
            for (var t = 0; t < this.jW.length; t++) this.removeOverLay(this.jW[t]);
            return this.EQ("clearoverlays"), this
        }, setMapType: function (t) {
            t && (this.defaultMapType && this.clearMapType(this.defaultMapType), this.addLayer(t), this.defaultMapType = t), this.EQ("maptypechange", {mapType: t})
        }, clearMapType: function (t) {
            t && (this.removeLayer(t), this.defaultMapType = null)
        }, addMapType: function (t) {
        }, removeMapType: function (t) {
        }, getMapType: function () {
            return this.defaultMapType
        }, hasLayer: function (t) {
            return !!t && T.F(t) in this.JW
        }, ME: function (t, i) {
            for (var n in this.JW) t.call(i, this.JW[n]);
            return this
        }, ZW: function (t) {
            if (t = t ? T.s.Z(t) ? t : [t] : [], 0 == t.length) this.defaultMapType = TMAP_NORMAL_MAP, t = [TMAP_NORMAL_MAP]; else for (var i = 0, n = t.length; i < n; i++) if (t[i] instanceof T.MapType) {
                this.defaultMapType = t[i];
                break
            }
            for (var i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
        }, nE: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this.kW[T.F(t)] = t, this._E())
        }, mE: function (t) {
            var i = T.F(t);
            this.kW[i] && (delete this.kW[i], this._E())
        }, _E: function () {
            var t = 1 / 0, i = -(1 / 0), n = this.RE();
            for (var e in this.kW) {
                var s = this.kW[e].options;
                t = void 0 === s.minZoom ? t : Math.min(t, s.minZoom), i = void 0 === s.maxZoom ? i : Math.max(i, s.maxZoom)
            }
            this.gw = i === -(1 / 0) ? void 0 : i, this.Gw = t === 1 / 0 ? void 0 : t, n !== this.RE() && this.EQ("zoomlevelschange")
        }
    }), T.Overlay = T.hE.extend({
        options: {type: 0}, show: function () {
            this.getElement().style.display = "block"
        }, hide: function () {
            this.getElement().style.display = "none"
        }, isHidden: function () {
            return "none" == this.getElement().style.display
        }, VE: function () {
            var t = {zoom: this.update, viewreset: this.update};
            return t
        }, update: function () {
        }, getPane: function (t) {
            return this.KE.getPane(t ? this.options[t] || t : this.options.JE)
        }, setOptions: function (t) {
            T.s.extend(this.options, t)
        }
    }), T.ScriptLoader = function () {
    }, T.ScriptLoader.prototype = {
        load: function (t, i, n, e) {
            if (this.objName = "tdt_loadResult", this.win = window, this.charset = i ? i : "utf-8", this.src = t ? t : null, null != this.src) {
                this.callback = e ? T.ScriptLoader.Qe(n, e) : null;
                var s = this.win;
                s[this.objName] = null, this.oScript = document.createElement("script"), this.oScript.type = "text/javascript", this.oScript.async = !0, this.oScript.charset = this.charset, this.oScript.src = this.src, this.running = !0;
                var n = this;
                this.oScript.onload = this.oScript.onreadystatechange = function () {
                    this.readyState && "loaded" != this.readyState && "complete" !== this.readyState || (n.oScript.onload = n.oScript.onreadystatechange = null, n.qe())
                }, s.document.body.insertBefore(this.oScript, s.document.body.firstChild)
            }
        }, qe: function (t) {
            var i = this.win;
            if (i[this.objName]) {
                var n = i[this.objName];
                i[this.objName] = null, this.callback && this.callback(n)
            } else this.callback && this.callback("");
            !document.all && this.oScript && this.oScript.parentNode == i.document.body && (this.oScript.removeAttribute("src"), i.document.body.removeChild(this.oScript), delete this.oScript), this.running = !1
        }
    }, T.ScriptLoader.getObject = function () {
        var t, i = i ? i : window;
        i.scriptLoader_obj || (i.scriptLoader_obj = []);
        for (var n = 0; n < i.scriptLoader_obj.length; n++) if (0 == i.scriptLoader_obj[n].running) {
            t = i.scriptLoader_obj[n], delete t;
            break
        }
        return t ? (t.running = !0, t) : t = new T.ScriptLoader
    }, T.ScriptLoader.We = function (t) {
        return t && t.ownerDocument && t.ownerDocument.parentWindow ? t.ownerDocument.parentWindow : window
    }, T.ScriptLoader.we = function (t) {
        return t || (t = []), t[0] || (t[0] = T.ScriptLoader.We().event), t[0] && !t[0].target && t[0].srcElement && (t[0].target = t[0].srcElement), t
    }, T.ScriptLoader.Qe = function (t, i) {
        return function () {
            i.apply(t, T.ScriptLoader.we(arguments))
        }
    }, T.Mq.Ee = {
        R: 6378137,
        ee: 6356752.314245179,
        bounds: T.BQ([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
        _q: function (t) {
            var i = Math.PI / 180, n = this.R, e = t.lat * i, s = this.ee / n, o = Math.sqrt(1 - s * s),
                r = o * Math.sin(e), h = Math.tan(Math.PI / 4 - e / 2) / Math.pow((1 - r) / (1 + r), o / 2);
            return e = -n * Math.log(Math.max(h, 1e-10)), new T.Point(t.lng * i * n, e)
        },
        mq: function (t) {
            for (var i, n = 180 / Math.PI, e = this.R, s = this.ee / e, o = Math.sqrt(1 - s * s), r = Math.exp(-t.y / e), h = Math.PI / 2 - 2 * Math.atan(r), a = 0, u = .1; a < 15 && Math.abs(u) > 1e-7; a++) i = o * Math.sin(h), i = Math.pow((1 - i) / (1 + i), o / 2), u = Math.PI / 2 - 2 * Math.atan(r * i) - h, h += u;
            return new T.Fq(h * n, t.x * n / e)
        }
    }, T.Hq.Re = T.extend({}, T.Hq.gq, {
        code: "re", projection: T.Mq.Ee, wW: function () {
            var t = .5 / (Math.PI * T.Mq.Ee.R);
            return new T.bQ(t, .5, -t, .5)
        }()
    }), T.Te = T.hE.extend({
        options: {
            JE: "tilePane",
            te: 256,
            opacity: 1,
            zIndex: 1,
            Ye: T.PQ.mobile,
            updateWhenZooming: !0,
            Ue: 200,
            ue: null,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            Ie: !1,
            className: "",
            keepBuffer: 2
        }, initialize: function (t) {
            t = T.setOptions(this, t)
        }, onAdd: function () {
            this.DW(), this.ie = {}, this.Oe = {}, this.CW(), this.oe()
        }, NE: function (t) {
            t.nE(this)
        }, onRemove: function (t) {
            this.Pe(), T.mQ.qq(this.ow), t.mE(this), this.ow = null, this.pe = null
        }, Ae: function () {
            return this.KE && (T.mQ.wq(this.ow), this.ae(Math.max)), this
        }, Se: function () {
            return this.KE && (T.mQ.Eq(this.ow), this.ae(Math.min)), this
        }, cE: function () {
            return this.options.ue
        }, getContainer: function () {
            return this.ow
        }, setOpacity: function (t) {
            return this.options.opacity = t, this.se(), this
        }, setZIndex: function (t) {
            return this.options.zIndex = t, this.De(), this
        }, de: function () {
            return this.Fe
        }, redraw: function () {
            return this.KE && (this.Pe(), this.oe()), this
        }, refresh: function () {
            this.redraw()
        }, VE: function () {
            var t = {viewprereset: this.fe, viewreset: this.CW, zoom: this.CW, moveend: this.tE};
            return this.options.Ye || (this.Ge || (this.Ge = T.s.g(this.tE, this.options.Ue, this)), t.move = this.Ge), this.CE && (t.ge = this.He), t
        }, he: function () {
            return document.createElement("div")
        }, Je: function () {
            var t = this.options.te;
            return t instanceof T.Point ? t : new T.Point(t, t)
        }, De: function () {
            this.ow && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this.ow.style.zIndex = this.options.zIndex)
        }, ae: function (t) {
            for (var i, n = this.getPane().children, e = -t(-(1 / 0), 1 / 0), s = 0, o = n.length; s < o; s++) i = n[s].style.zIndex, n[s] !== this.ow && i && (e = t(e, +i));
            isFinite(e) && (this.options.zIndex = e + t(-1, 1), this.De())
        }, se: function () {
            if (this.KE && !T.PQ.ielt9) {
                T.mQ.setOpacity(this.ow, this.options.opacity);
                var t = +new Date, i = !1, n = !1;
                for (var e in this.Oe) {
                    var s = this.Oe[e];
                    if (s.je && s.loaded) {
                        var o = Math.min(1, (t - s.loaded) / 200);
                        T.mQ.setOpacity(s.el, o), o < 1 ? i = !0 : (s.active && (n = !0), s.active = !0)
                    }
                }
                n && !this.Ke && this.ke(), i && (T.s.c(this.Le), this.Le = T.s.V(this.se, this))
            }
        }, DW: function () {
            this.ow || (this.ow = T.mQ.D("div", "tdt-layer " + (this.options.className || "")), this.De(), this.options.opacity < 1 && this.se(), this.getPane().appendChild(this.ow))
        }, le: function () {
            var t = this.pe, i = this.options.maxZoom;
            if (void 0 !== t) {
                for (var n in this.ie) this.ie[n].el.children.length || n === t ? this.ie[n].el.style.zIndex = i - Math.abs(t - n) : (T.mQ.qq(this.ie[n].el), this.Ze(n), delete this.ie[n]);
                var e = this.ie[t], s = this.KE;
                return e || (e = this.ie[t] = {}, e.el = T.mQ.D("div", "tdt-tile-container tdt-zoom-animated", this.ow), e.el.style.zIndex = i, e.origin = s._q(s.mq(s.jw()), t).JQ(), e.zoom = t, this.Ce(e, s.getCenter(), s.getZoom()), T.s.h(e.el.offsetWidth)), this.Ve = e, e
            }
        }, ke: function () {
            if (this.KE) {
                var t, i, n = this.KE.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom) return void this.Pe();
                for (t in this.Oe) i = this.Oe[t], i.retain = i.je;
                for (t in this.Oe) if (i = this.Oe[t], i.je && !i.active) {
                    var e = i.coords;
                    this.ce(e.x, e.y, e.z, e.z - 5) || this.Be(e.x, e.y, e.z, e.z + 2)
                }
                for (t in this.Oe) this.Oe[t].retain || this.ve(t)
            }
        }, Ze: function (t) {
            for (var i in this.Oe) this.Oe[i].coords.z === t && this.ve(i)
        }, Pe: function () {
            for (var t in this.Oe) this.ve(t)
        }, fe: function () {
            for (var t in this.ie) T.mQ.qq(this.ie[t].el), delete this.ie[t];
            this.Pe(), this.pe = null
        }, ce: function (t, i, n, e) {
            var s = Math.floor(t / 2), o = Math.floor(i / 2), r = n - 1, h = new T.Point(+s, +o);
            h.z = +r;
            var a = this.Ne(h), u = this.Oe[a];
            return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > e && this.ce(s, o, r, e))
        }, Be: function (t, i, n, e) {
            for (var s = 2 * t; s < 2 * t + 2; s++) for (var o = 2 * i; o < 2 * i + 2; o++) {
                var r = new T.Point(s, o);
                r.z = n + 1;
                var h = this.Ne(r), a = this.Oe[h];
                a && a.active ? a.retain = !0 : (a && a.loaded && (a.retain = !0), n + 1 < e && this.Be(s, o, n + 1, e))
            }
        }, CW: function (t) {
            var i = t && (t.pinch || t.be);
            this.Me(this.KE.getCenter(), this.KE.getZoom(), i, i)
        }, He: function (t) {
            this.Me(t.center, t.zoom, !0, t.noUpdate)
        }, Me: function (t, i, n, e) {
            var s = Math.round(i);
            (void 0 !== this.options.maxZoom && s > this.options.maxZoom || void 0 !== this.options.minZoom && s < this.options.minZoom) && (s = void 0);
            var o = this.options.updateWhenZooming && s !== this.pe;
            e && !o || (this.pe = s, this.ne && this.ne(), this.le(), this._e(), void 0 !== s && this.oe(t), n || this.ke(), this.Ke = !!n), this.me(t, i)
        }, me: function (t, i) {
            for (var n in this.ie) this.Ce(this.ie[n], t, i)
        }, Ce: function (t, i, n) {
            var e = this.KE.BW(n, t.zoom), s = t.origin.GQ(e).DQ(this.KE.wE(i, n)).JQ();
            T.PQ.any3d ? T.mQ.uq(t.el, s, e) : T.mQ.setPosition(t.el, s)
        }, _e: function () {
            var t = this.KE, i = t.options.iW, n = this.QR = this.Je(), e = this.pe, s = this.KE.kw(this.pe);
            s && (this.qR = this.WR(s)), this.wR = i.TW && !this.options.Ie && [Math.floor(t._q([0, i.TW[0]], e).x / n.x), Math.ceil(t._q([0, i.TW[1]], e).x / n.y)], this.ER = i.wrapLat && !this.options.Ie && [Math.floor(t._q([i.wrapLat[0], 0], e).y / n.x), Math.ceil(t._q([i.wrapLat[1], 0], e).y / n.y)]
        }, tE: function () {
            this.KE && !this.KE.eR && this.oe()
        }, RR: function (t) {
            var i = this.KE, n = i.eR ? Math.max(i.rR, i.getZoom()) : i.getZoom(), e = i.BW(n, this.pe),
                s = i._q(t, this.pe).KQ(), o = i.getSize().FQ(2 * e);
            return new T.CQ(s.DQ(o), s.aQ(o))
        }, oe: function (t) {
            var i = this.KE;
            if (i) {
                var n = i.getZoom();
                if (void 0 === t && (t = i.getCenter()), void 0 !== this.pe) {
                    var e = this.RR(t), s = this.WR(e), o = s.getCenter(), r = [], h = this.options.keepBuffer,
                        a = new T.CQ(s.VQ().DQ([h, -h]), s.cQ().aQ([h, -h]));
                    for (var u in this.Oe) {
                        var c = this.Oe[u].coords;
                        c.z === this.pe && a.contains(T.sQ(c.x, c.y)) || (this.Oe[u].je = !1)
                    }
                    if (Math.abs(n - this.pe) > 1) return void this.Me(t, n);
                    for (var l = s.min.y; l <= s.max.y; l++) for (var f = s.min.x; f <= s.max.x; f++) {
                        var d = new T.Point(f, l);
                        if (d.z = this.pe, this.TR(d)) {
                            var p = this.Oe[this.Ne(d)];
                            p ? p.je = !0 : r.push(d)
                        }
                    }
                    if (r.sort(function (t, i) {
                        return t.distanceTo(o) - i.distanceTo(o)
                    }), 0 !== r.length) {
                        this.Fe || (this.Fe = !0, this.EQ("loading"));
                        var m = document.createDocumentFragment();
                        for (f = 0; f < r.length; f++) this.tR(r[f], m);
                        this.Ve.el.appendChild(m)
                    }
                }
            }
        }, TR: function (t) {
            var i = this.KE.options.iW;
            if (!i.rW) {
                var n = this.qR;
                if (!i.TW && (t.x < n.min.x || t.x > n.max.x) || !i.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
            }
            if (!this.options.bounds) return !0;
            var e = this.YR(t);
            return T.Kq(this.options.bounds).vQ(e)
        }, UR: function (t) {
            return this.YR(this.uR(t))
        }, YR: function (t) {
            var i = this.KE, n = this.Je(), e = t.HQ(n), s = e.aQ(n), o = i.Jq(i.mq(e, t.z)), r = i.Jq(i.mq(s, t.z));
            return new T.kq(o, r)
        }, Ne: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        }, uR: function (t) {
            var i = t.split(":"), n = new T.Point(+i[0], +i[1]);
            return n.z = +i[2], n
        }, ve: function (t) {
            var i = this.Oe[t];
            i && (T.mQ.qq(i.el), delete this.Oe[t], this.EQ("tileunload", {tile: i.el, coords: this.uR(t)}))
        }, IR: function (t) {
            T.mQ.rq(t, "tdt-tile");
            var i = this.Je();
            t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = T.s.h, t.onmousemove = T.s.h, T.PQ.ielt9 && this.options.opacity < 1 && T.mQ.setOpacity(t, this.options.opacity), T.PQ.android && !T.PQ.android23 && (t.style.WebkitBackfaceVisibility = "hidden")
        }, tR: function (t, i) {
            var n = this.iR(t), e = this.Ne(t), s = this.he(this.OR(t), T.d(this.oR, this, t));
            this.IR(s), this.he.length < 2 && T.s.V(T.d(this.oR, this, t, null, s)), T.mQ.setPosition(s, n), this.Oe[e] = {
                el: s,
                coords: t,
                je: !0
            }, i.appendChild(s), this.EQ("tileloadstart", {tile: s, coords: t})
        }, oR: function (t, i, n) {
            if (this.KE) {
                i && this.EQ("tileerror", {error: i, tile: n, coords: t});
                var e = this.Ne(t);
                n = this.Oe[e], n && (n.loaded = +new Date, this.KE.bw ? (T.mQ.setOpacity(n.el, 0), T.s.c(this.Le), this.Le = T.s.V(this.se, this)) : (n.active = !0, this.ke()), T.mQ.rq(n.el, "tdt-tile-loaded"), this.EQ("tileload", {
                    tile: n.el,
                    coords: t
                }), this.PR() && (this.Fe = !1, this.EQ("load"), T.PQ.ielt9 || !this.KE.bw ? T.s.V(this.ke, this) : setTimeout(T.d(this.ke, this), 250)))
            }
        }, iR: function (t) {
            return t.HQ(this.Je()).DQ(this.Ve.origin)
        }, OR: function (t) {
            var i = new T.Point(this.wR ? T.s.H(t.x, this.wR) : t.x, this.ER ? T.s.H(t.y, this.ER) : t.y);
            return i.z = t.z, i
        }, WR: function (t) {
            var i = this.Je();
            return new T.CQ(t.min.hQ(i).KQ(), t.max.hQ(i).LQ().DQ([1, 1]))
        }, PR: function () {
            for (var t in this.Oe) if (!this.Oe[t].loaded) return !1;
            return !0
        }
    }), T.pR = function (t) {
        return new T.Te(t)
    }, T.TileLayer = T.Te.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            AR: "abc",
            errorTileUrl: "",
            aR: 0,
            SR: null,
            sR: !1,
            DR: !1,
            dR: !1,
            FR: !1
        }, initialize: function (t, i) {
            this.fR = "", t && (this.fR = t), i = T.setOptions(this, i), i.dR && T.PQ.retina && i.maxZoom > 0 && (i.te = Math.floor(i.te / 2), i.DR ? (i.aR--, i.minZoom++) : (i.aR++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.AR && (i.AR = i.AR.split("")), T.PQ.android || this.on("tileunload", this.GR)
        }, setUrl: function (t, i) {
            return this.fR = t, i || this.redraw(), this
        }, he: function (t, i) {
            var n = document.createElement("img");
            return T.Pq.on(n, "load", T.d(this.gR, this, i, n)), T.Pq.on(n, "error", T.d(this.HR, this, i, n)), this.options.FR && (n.FR = ""), n.fq = "", n.src = this.getTileUrl(t), n
        }, getTileUrl: function (t) {
            var i = {r: T.PQ.retina ? "@2x" : "", s: this.hR(t), x: t.x, y: t.y, z: this.JR()};
            if (this.KE && !this.KE.options.iW.rW) {
                var n = this.qR.max.y - t.y;
                this.options.sR && (i.y = n), i["-y"] = n
            }
            return this._url_temp = this.fR, T.s.L(this._url_temp, T.extend(i, this.options))
        }, gR: function (t, i) {
            T.PQ.ielt9 ? setTimeout(T.d(t, this, null, i), 0) : t(null, i)
        }, HR: function (t, i, n) {
            var e = this.options.errorTileUrl;
            e && (i.src = e), t(n, i)
        }, Je: function () {
            var t = this.KE, i = T.Te.prototype.Je.call(this), n = this.pe + this.options.aR, e = this.options.SR;
            return null !== e && n > e ? i.FQ(t.BW(e, n)).JQ() : i
        }, GR: function (t) {
            t.tile.onload = null
        }, JR: function () {
            var t = this.options, i = this.pe;
            return t.DR && (i = t.maxZoom - i), i += t.aR, null !== t.SR ? Math.min(i, t.SR) : i
        }, hR: function (t) {
            var i = Math.abs(t.x + t.y) % this.options.AR.length;
            return this.options.AR[i]
        }, ne: function () {
            var t, i;
            for (t in this.Oe) this.Oe[t].coords.z !== this.pe && (i = this.Oe[t].el, i.onload = T.s.h, i.onerror = T.s.h, i.complete || (i.src = T.s.C, T.mQ.qq(i)))
        }
    }), T.jR = function (t, i) {
        return new T.TileLayer(t, i)
    }, T.TileLayer.WMS = T.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        }, options: {iW: null, srs: null, KR: !1}, initialize: function (t, i) {
            this.fR = t;
            var n = T.extend({}, this.defaultWmsParams);
            for (var e in i) e in this.options || (n[e] = i[e]);
            i = T.setOptions(this, i), this.wmsSrs = "EPSG:900913", i.srs ? "EPSG:4326" == i.srs ? (i.iW = T.Hq.IW, this.wmsSrs = "EPSG:4326") : (i.iW = T.Hq.uW, i.srs = "EPSG:900913", this.wmsSrs = "EPSG:900913") : i.srs = this.wmsSrs, n.width = n.height = i.te * (i.dR && T.PQ.retina ? 2 : 1), this.kR = n
        }, onAdd: function (t) {
            this.LR = this.options.iW || t.options.iW, this.lR = parseFloat(this.kR.version);
            var i = this.lR >= 1.3 ? "iW" : "srs";
            this.kR[i] = this.LR.code, T.TileLayer.prototype.onAdd.call(this, t)
        }, getTileUrl: function (t) {
            var i = this.YR(t), n = this.LR._q(i.Cq()), e = this.LR._q(i.Bq()),
                s = (this.lR >= 1.3 && this.LR === T.Hq.IW ? [e.y, n.x, n.y, e.x] : [n.x, e.y, e.x, n.y]).join(","),
                o = T.TileLayer.prototype.getTileUrl.call(this, t);
            return o + T.s.k(this.kR, o, this.options.KR) + (this.options.KR ? "&BBOX=" : "&bbox=") + s
        }, setParams: function (t, i) {
            return T.extend(this.kR, t), i || this.redraw(), this
        }
    }), T.jR.wms = function (t, i) {
        return new T.TileLayer.WMS(t, i)
    }, T.TileLayer.TDT = T.TileLayer.extend({}), T.jR.tdt = function (t, i) {
        return new T.TileLayer.tdt(t, i)
    }, T.ZR = {
        CR: "201707200946", VR: function (t, i, n) {
            if (window.localStorage) {
                var e, s = localStorage.getItem(t);
                null == s || 0 == s.length || this.CR != localStorage.getItem("TDT_version") ? (document.write('<script type="text/javascript" src="' + i + '"></script>'), window.ActiveXObject ? e = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (e = new XMLHttpRequest), null != e && (e.open("GET", i), e.send(null), e.onreadystatechange = function () {
                    4 == e.readyState && 200 == e.status && (s = e.responseText, localStorage.setItem(t, s), localStorage.setItem("TDT_version", T.ZR.CR), null != n && n())
                })) : (T.ZR.cR(s), null != n && n())
            } else T.ZR.BR(i)
        }, vR: function (t, i) {
            if (T.PQ.ie8) return T.ZR.NR(i), !1;
            if (window.localStorage) {
                var n, e = localStorage.getItem(t);
                null == e || 0 == e.length || this.CR != localStorage.getItem("TDT_version") ? (window.ActiveXObject ? n = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (n = new XMLHttpRequest), null != n && (n.open("GET", i), n.send(null), n.onreadystatechange = function () {
                    4 == n.readyState && 200 == n.status && (e = n.responseText, localStorage.setItem(t, e), localStorage.setItem("TDT_version", T.ZR.CR), e = null == e ? "" : e, T.ZR.bR(e))
                })) : T.ZR.bR(e)
            } else T.ZR.NR(i)
        }, cR: function (t) {
            var i = document.getElementsByTagName("HEAD").item(0), n = document.createElement("script");
            n.type = "text/javascript", n.text = t, i.appendChild(n)
        }, bR: function (t) {
            var i = document.getElementsByTagName("HEAD").item(0), n = document.createElement("style");
            n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.innerHTML = t, i.appendChild(n)
        }, BR: function (t) {
            var i = document.getElementsByTagName("HEAD").item(0), n = document.createElement("script");
            n.type = "text/javascript", n.src = t, i.appendChild(n)
        }, NR: function (t) {
            var i = document.getElementsByTagName("HEAD").item(0), n = document.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = t, i.appendChild(n)
        }, MR: function (t, i) {
            var n = document.createElement("script");
            i && (n.onload = n.onreadystatechange = function () {
                this.readyState && "loaded" != this.readyState && "complete" !== this.readyState || (n.onload = n.onreadystatechange = null, i())
            });
            var e = document.getElementsByTagName("head")[0];
            n.type = "text/javascript", n.src = t, e.appendChild(n)
        }, onLoadJsCallBack: function (t) {
            var i = T.ScriptLoader.getObject();
            i.load(t, "UTF-8", this, function () {
                i = null, delete i
            })
        }, nR: function (t, i) {
            if (T.PQ.ie8) return T.ZR.NR(i), !1;
            if (window.localStorage) {
                var n = localStorage.getItem(t);
                null == n || 0 == n.length || this.CR != localStorage.getItem("TDT_version") ? (T.ZR.NR(i), i.indexOf("tianditu4.0") != -1 && (i = T.w.E + "/api?v=4.0&name=tianditu4.0"), T.ZR.MR(i, function () {
                    T.ObjectData && (n = T.ObjectData), localStorage.setItem(t, n), localStorage.setItem("TDT_version", T.ZR.CR), T.ObjectData = null
                })) : T.ZR.bR(n)
            }
        }, _R: function (t, i) {
            if (T.PQ.ie8) return document.write('<script type="text/javascript" src="' + i + '"></script>'), !1;
            if (window.localStorage) {
                var n = localStorage.getItem(t);
                null == n || 0 == n.length || this.CR != localStorage.getItem("TDT_version") ? (document.write('<script type="text/javascript" src="' + i + '"></script>'), i.indexOf("components") != -1 && (i = T.w.E + "/api?v=4.0&name=components&tk=" + T.w.TMAP_AUTHKEY), i.indexOf("service") != -1 && (i = T.w.E + "/api?v=4.0&name=service&tk=" + T.w.TMAP_AUTHKEY), i.indexOf("military") != -1 && (i = T.w.E + "/api?v=4.0&name=military&tk=" + T.w.TMAP_AUTHKEY), T.ZR.MR(i, function () {
                    T.ObjectData && (n = T.ObjectData), localStorage.setItem(t, n), localStorage.setItem("TDT_version", T.ZR.CR), T.ObjectData = null
                })) : T.ZR.cR(n)
            }
        }
    }, T.qv = function (t) {
        if (t && 0 !== t.code) {
            T = {};
            var i = "天地图密钥错误，可能是因为您提供的Key不是有效的天地图开放平台Key，或此Key未对本应用授予JavaScriptAPI权限。您可以访问如下网址了解如何获得有效的Key：http://console.tianditu.com/api/key";
            alert(i)
        }
    }, T.mR = T.hE.extend({
        options: {opacity: 1, fq: "", Qr: !1, ue: null, FR: !1}, initialize: function (t, i, n) {
            this.fR = t, this.qr = T.Kq(i), T.setOptions(this, n)
        }, onAdd: function () {
            this.Wr || (this.wr(), this.options.opacity < 1 && this.se()), this.options.Qr && (T.mQ.rq(this.Wr, "tdt-interactive"), this.LE(this.Wr)), this.getPane().appendChild(this.Wr), this.Er()
        }, onRemove: function () {
            T.mQ.qq(this.Wr), this.options.Qr && this.lE(this.Wr)
        }, setOpacity: function (t) {
            return this.options.opacity = t, this.Wr && this.se(), this
        }, er: function (t) {
            return t.opacity && this.setOpacity(t.opacity), this
        }, Ae: function () {
            return this.KE && T.mQ.wq(this.Wr), this
        }, Se: function () {
            return this.KE && T.mQ.Eq(this.Wr), this
        }, setUrl: function (t) {
            return this.fR = t, this.Wr && (this.Wr.src = t), this
        }, setBounds: function (t) {
            return this.qr = t, this.KE && this.Er(), this
        }, cE: function () {
            return this.options.ue
        }, VE: function () {
            var t = {zoom: this.Er, viewreset: this.Er};
            return this.CE && (t.ge = this.He), t
        }, getBounds: function () {
            return this.qr
        }, getElement: function () {
            return this.Wr
        }, wr: function () {
            var t = this.Wr = T.mQ.D("img", "tdt-image-layer " + (this.CE ? "tdt-zoom-animated" : ""));
            t.onselectstart = T.s.h, t.onmousemove = T.s.h, t.onload = T.d(this.EQ, this, "load"), this.options.FR && (t.FR = ""), t.src = this.fR, t.fq = this.options.fq
        }, He: function (t) {
            var i = this.KE.BW(t.zoom), n = this.KE.dE(this.qr.Cq(), t.zoom, t.center);
            T.mQ.uq(this.Wr, n, i)
        }, Er: function () {
            var t = this.Wr, i = new T.CQ(this.KE.Lw(this.qr.Cq()), this.KE.Lw(this.qr.Bq())), n = i.getSize();
            T.mQ.setPosition(t, i.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
        }, se: function () {
            T.mQ.setOpacity(this.Wr, this.options.opacity)
        }
    }), T.Rr = function (t, i, n) {
        return new T.mR(t, i, n)
    }, T.Icon = T.B.extend({
        initialize: function (t) {
            T.setOptions(this, t)
        }, setIconUrl: function (t) {
            this.options.iconUrl = t, this.img && (this.img.src = t)
        }, getIconUrl: function (t) {
            if (this.img) return this.img.src
        }, setIconSize: function (t) {
            this.options.iconSize = t, this.img && (this.img.style.width = t.x + "px", this.img.style.height = t.y + "px")
        }, getIconSize: function () {
            return this.options.iconSize
        }, setIconAnchor: function (t) {
            this.options.iconAnchor = t, this.rr(this.img, "icon")
        }, getIconAnchor: function (t) {
            return this.options.iconAnchor
        }, Tr: function (t) {
            return this.tr("icon", t)
        }, Yr: function (t) {
            return this.tr("shadow", t)
        }, tr: function (t, i) {
            var n = this.Ur(t);
            return n ? (this.img = this.ur(n, i && "IMG" === i.tagName ? i : null), this.rr(this.img, t), this.img) : null
        }, rr: function (t, i) {
            var n = this.options, e = n[i + "Size"];
            T.s.Z(e) || e instanceof T.Point || (e = [e, e]);
            var s = T.sQ(e), o = T.sQ("shadow" === i && n.Ir || n.iconAnchor || s && s.FQ(2, !0));
            t.className = "tdt-marker-" + i + " " + (n.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        }, ur: function (t, i) {
            return i = i || document.createElement("img"), i.src = t, i
        }, Ur: function (t) {
            return T.PQ.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    }), T.ir = function (t) {
        return new T.Icon(t)
    }, T.Icon.Default = T.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -41],
            shadowSize: [41, 41]
        }, Ur: function (t) {
            var i = t + "Url";
            if (this.options[i]) return this.options[i];
            var n = T.Icon.Default.imagePath;
            return n + "/marker-" + t + (T.PQ.retina && "icon" === t ? "-2x" : "") + ".png"
        }
    }), T.Icon.Default.imagePath = function () {
        var t, i, n, e, s = document.getElementsByTagName("script"), o = /[\/^]tdt[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0, i = s.length; t < i; t++) if (n = s[t].src || "", n.match(o)) return e = n.split(o)[0], (e ? e + "/" : "") + "image"
    }(), T.Icon.Default.imagePath = T.w.e, T.Marker = T.Overlay.extend({
        options: {
            icon: new T.Icon.Default,
            Qr: !0,
            draggable: !1,
            Or: !0,
            title: "",
            zIndexOffset: 0,
            opacity: 1,
            or: !0,
            Pr: 250,
            type: 2,
            JE: "markerPane",
            AE: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
        }, initialize: function (t, i) {
            T.setOptions(this, i), this.pr = T.Gq(t), this.Ar = null
        }, onAdd: function (t) {
            this.CE = this.CE && t.options.pW, this.CE && t.on("ge", this.He, this), this.ar(), this.update()
        }, onRemove: function (t) {
            this.aE && this.aE.SE() && (this.options.draggable = !0, this.aE.Sr()), this.CE && t.off("ge", this.He, this), this.sr(), this.Dr(), this.Ar = null
        }, VE: function () {
            return {zoom: this.update, viewreset: this.update}
        }, getType: function () {
            return this.options.type
        }, getMap: function () {
            return this.KE
        }, getLngLat: function () {
            return this.pE()
        }, pE: function () {
            return this.pr
        }, setLngLat: function (t) {
            this.dr(t)
        }, dr: function (t) {
            var i = this.pr;
            return this.pr = T.Gq(t), this.update(), this.EQ("move", {oldLngLat: i, lnglat: this.pr})
        }, setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update()
        }, setIcon: function (t) {
            return this.options.icon = t, this.KE && (this.ar(), this.update()), this.Fr && this.fr(this.Fr, this.Fr.options), this
        }, getIcon: function () {
            return this.options.icon
        }, enableDragging: function () {
            this.aE.enable()
        }, disableDragging: function () {
            this.aE.disable()
        }, getElement: function () {
            return this.Gr
        }, update: function () {
            if (this.Gr) {
                var t = this.KE.Lw(this.pr).JQ();
                this.gr(t)
            }
            return this
        }, ar: function () {
            var t = this.options, i = "tdt-zoom-" + (this.CE ? "animated" : "hide"), n = t.icon.Tr(this.Gr), e = !1;
            n !== this.Gr && (this.Gr && this.sr(), e = !0, t.title && (n.title = t.title), t.fq && (n.fq = t.fq)), T.mQ.rq(n, i), t.Or && (n.tabIndex = "0"), this.Gr = n, t.or && this.on({
                mouseover: this.Hr,
                mouseout: this.hr
            });
            var s = t.icon.Yr(this.Jr), o = !1;
            s !== this.Jr && (this.Dr(), o = !0), s && T.mQ.rq(s, i), this.Jr = s, t.opacity < 1 && this.se(), e && this.getPane().appendChild(this.Gr), this.jr(), s && o && this.getPane("mw").appendChild(this.Jr)
        }, sr: function () {
            this.options.or && this.off({
                mouseover: this.Hr,
                mouseout: this.hr
            }), T.mQ.qq(this.Gr), this.lE(this.Gr), this.Gr = null
        }, Dr: function () {
            this.Jr && T.mQ.qq(this.Jr), this.Jr = null
        }, gr: function (t) {
            T.mQ.setPosition(this.Gr, t), this.Jr && T.mQ.setPosition(this.Jr, t), this.Kr = t.y + this.options.zIndexOffset, this.hr()
        }, De: function (t) {
            this.Gr.style.zIndex = this.Kr + t
        }, He: function (t) {
            var i = this.KE.dE(this.pr, t.zoom, t.center).JQ();
            this.gr(i)
        }, jr: function () {
            if (this.options.Qr && (T.mQ.rq(this.Gr, "tdt-interactive"), this.LE(this.Gr), T.Lr.kr)) {
                var t = this.options.draggable;
                this.aE && (t = this.aE.SE(), this.aE.disable()), this.aE = new T.Lr.kr(this), t && this.aE.enable()
            }
        }, setOpacity: function (t) {
            return this.options.opacity = t, this.KE && this.se(), this
        }, se: function () {
            var t = this.options.opacity;
            T.mQ.setOpacity(this.Gr, t), this.Jr && T.mQ.setOpacity(this.Jr, t)
        }, Hr: function () {
            this.De(this.options.Pr)
        }, hr: function () {
            this.De(0)
        }
    }), T.lr = function (t, i) {
        return new T.Marker(t, i)
    }, T.DivIcon = T.Icon.extend({
        options: {iconSize: [12, 12], html: !1, bgPos: null, className: "tdt-div-icon"},
        Tr: function (t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"), n = this.options;
            if (i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
                var e = T.sQ(n.bgPos);
                i.style.backgroundPosition = -e.x + "px " + -e.y + "px"
            }
            return this.rr(i, "icon"), i
        },
        Yr: function () {
            return null
        }
    }), T.Zr = function (t) {
        return new T.DivIcon(t)
    }, T.Map._({Cr: !1}), T.Vr = T.hE.extend({
        options: {
            JE: "infoWindowPane",
            minWidth: 50,
            cr: 300,
            maxHeight: null,
            offset: [0, 7],
            autoPan: !1,
            autoPanPadding: [5, 5],
            Br: null,
            vr: null,
            closeButton: !0,
            Nr: !0,
            br: !1,
            Mr: !0
        }, initialize: function (t, i) {
            T.setOptions(this, t), this.nr = i
        }, onAdd: function (t) {
            this.CE = this.CE && this.options.Mr, this.ow || this.dW(), t.bw && T.mQ.setOpacity(this.ow, 0), clearTimeout(this._r), this.getPane().appendChild(this.ow), this.update(), t.bw && T.mQ.setOpacity(this.ow, 1), t.EQ("mr", {QT: this}), this.EQ("open", {lnglat: this.pr}), this.nr && (this.nr.EQ("mr", {QT: this}, !0), this.nr.on("uE", T.Pq.stopPropagation))
        }, qT: function (t) {
            return t.WT(this), this
        }, onRemove: function (t) {
            t.bw ? (T.mQ.setOpacity(this.ow, 0), this._r = setTimeout(T.d(T.mQ.qq, T.mQ, this.ow), 200)) : T.mQ.qq(this.ow), t.EQ("wT", {QT: this}), this.EQ("close", {
                lnglat: this.pr,
                infowindow: this
            }), this.nr && (this.nr.EQ("wT", {QT: this}, !0), this.nr.off("uE", T.Pq.stopPropagation))
        }, pE: function () {
            return this.pr
        }, dr: function (t) {
            return this.pr = T.Gq(t), this.KE && (this.ET(), this.eT()), this
        }, getContent: function () {
            return this.RT
        }, setContent: function (t) {
            return this.RT = t, this.update(), this
        }, getElement: function () {
            return this.ow
        }, update: function () {
            this.KE && (this.ow.style.visibility = "hidden", this.rT(), this.TT(), this.ET(), this.ow.style.visibility = "", this.eT())
        }, VE: function () {
            var t = {zoom: this.ET, viewreset: this.ET};
            return this.CE && (t.ge = this.He), ("tT" in this.options ? this.options.tT : this.KE.options.Cr) && (t.uE = this.YT), this.options.br && (t.moveend = this.eT), t
        }, isOpen: function () {
            return !!this.KE && this.KE.hasLayer(this)
        }, Ae: function () {
            return this.KE && T.mQ.wq(this.ow), this
        }, Se: function () {
            return this.KE && T.mQ.Eq(this.ow), this
        }, YT: function () {
            this.KE && (this.EQ("clickclose", {}), this.KE.UT(this))
        }, dW: function () {
            var t = "tdt-infowindow",
                i = this.ow = T.mQ.D("div", t + " " + (this.options.className || "") + " tdt-zoom-" + (this.CE ? "animated" : "hide"));
            if (this.options.closeButton) {
                var n = this.uT = T.mQ.D("a", t + "-close-button", i);
                n.href = "#close", n.innerHTML = "&#215;", T.Pq.on(n, "click", this.IT, this)
            }
            var e = this.iT = T.mQ.D("div", t + "-content-wrapper", i);
            this.OT = T.mQ.D("div", t + "-content", e), T.Pq.PT(e).oT(this.OT).on(e, "contextmenu", T.Pq.stopPropagation), this.pT = T.mQ.D("div", t + "-tip-container", i), this.AT = T.mQ.D("div", t + "-tip", this.pT)
        }, rT: function () {
            if (this.RT) {
                var t = this.OT, i = "function" == typeof this.RT ? this.RT(this.nr || this) : this.RT;
                if ("string" == typeof i) t.innerHTML = i; else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(i)
                }
                this.EQ("contentupdate")
            }
        }, TT: function () {
            var t = this.OT, i = t.style;
            i.width = "", i.whiteSpace = "nowrap";
            var n = t.offsetWidth;
            n = Math.min(n, this.options.cr), n = Math.max(n, this.options.minWidth), i.width = n + 1 + "px", i.whiteSpace = "", i.height = "";
            var e = t.offsetHeight, s = this.options.maxHeight, o = "tdt-infowindow-scrolled";
            s && e > s ? (i.height = s + "px", T.mQ.rq(t, o)) : T.mQ.tq(t, o), this.aT = this.ow.offsetWidth
        }, ET: function () {
            if (this.KE) {
                var t = this.KE.Lw(this.pr), i = T.sQ(this.options.offset), n = this._getAnchor();
                this.CE ? T.mQ.setPosition(this.ow, t.aQ(n)) : i = i.aQ(t).aQ(n);
                var e = this.ST = -i.y, s = this.sT = -Math.round(this.aT / 2) + i.x;
                this.ow.style.bottom = e + "px", this.ow.style.left = s + "px"
            }
        }, He: function (t) {
            var i = this.KE.dE(this.pr, t.zoom, t.center), n = this._getAnchor();
            T.mQ.setPosition(this.ow, i.aQ(n))
        }, eT: function () {
            if (!(!this.options.autoPan || this.KE.eE && this.KE.eE.DT)) {
                var t = this.KE, i = this.ow.offsetHeight, n = this.aT, e = new T.Point(this.sT, -i - this.ST);
                this.CE && e.SQ(T.mQ.getPosition(this.ow));
                var s = t.Cw(e), o = T.sQ(this.options.autoPanPadding), r = T.sQ(this.options.Br || o),
                    h = T.sQ(this.options.vr || o), a = t.getSize(), u = 0, c = 0;
                s.x + n + h.x > a.x && (u = s.x + n - a.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + i + h.y > a.y && (c = s.y + i - a.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.EQ("dT").panBy([u, c])
            }
        }, IT: function (t) {
            this.YT(), T.Pq.Iw(t)
        }, _getAnchor: function () {
            return T.sQ(this.nr && this.nr.FT ? this.nr.FT() : [0, 0])
        }
    }), T.QT = function (t, i) {
        return new T.Vr(t, i)
    }, T.Map.n({
        WT: function (t, i, n) {
            return t instanceof T.Vr || (t = new T.Vr(n).setContent(t)), i && t.dr(i), this.hasLayer(t) ? this : (this.Fr && this.Fr.options.Nr && this.UT(), this.Fr = t, this.addLayer(t))
        }, openInfoWindow: function (t, i, n) {
            this.WT(t, i, n)
        }, closeInfoWindow: function (t) {
            this.UT(t)
        }, UT: function (t) {
            return t && t !== this.Fr || (t = this.Fr, this.Fr = null), t && this.removeLayer(t), this
        }, closeInfoWindow: function (t) {
            this.UT(t)
        }
    }), T.hE.n({
        fr: function (t, i) {
            return t instanceof T.Vr ? (T.setOptions(t, i), this.Fr = t, t.nr = this) : (this.Fr && !i || (this.Fr = new T.Vr(i, this)), this.Fr.setContent(t)), this.fT || (this.on({
                qq: this.UT,
                move: this.GT
            }), this.fT = !0), this
        }, gT: function () {
            return this.Fr && (this.off({qq: this.UT, move: this.GT}), this.fT = !1, this.Fr = null), this
        }, openInfoWindow: function (t, i) {
            this.WT(), this.Ar || (this.Ar = this.fr(t, i), this.WT())
        }, closeInfoWindow: function () {
            this.UT()
        }, WT: function (t, i) {
            if (t instanceof T.hE || (i = t, t = this), t instanceof T.HT) for (var n in this.JW) {
                t = this.JW[n];
                break
            }
            return i || (i = t.getCenter ? t.getCenter() : t.pE()), this.Fr && this.KE && (this.Fr.nr = t, this.Fr.update(), this.KE.WT(this.Fr, i)), this
        }, UT: function () {
            return this.Fr && this.Fr.YT(), this
        }, hT: function (t) {
            return this.Fr && (this.Fr.KE ? this.UT() : this.WT(t)), this
        }, JT: function () {
            return this.Fr.isOpen()
        }, isOpen: function () {
            this.JT()
        }, jT: function (t) {
            return this.Fr && this.Fr.setContent(t), this
        }, KT: function () {
            return this.Fr
        }, kT: function (t) {
            var i = t.layer || t.target;
            if (this.Fr && this.KE) return T.Pq.Iw(t), i instanceof T.LT ? void this.WT(t.layer || t.target, t.lT) : void (this.KE.hasLayer(this.Fr) && this.Fr.nr === i ? this.UT() : this.WT(i, t.lT))
        }, GT: function (t) {
            this.Fr.dr(t.lT)
        }
    }), T.Marker.n({
        FT: function () {
            return this.options.icon.options.popupAnchor || (this.options.icon.options.iconAnchor ? T.s.Z(this.options.icon.options.iconAnchor) ? this.options.icon.options.popupAnchor = [0, -this.options.icon.options.iconAnchor[1]] : this.options.icon.options.popupAnchor = [0, -this.options.icon.options.iconAnchor.y] : this.options.icon.options.popupAnchor = [0, 0]), this.options.icon.options.popupAnchor
        }
    }), T.InfoWindow = T.Vr.extend({
        options: {type: 3}, initialize: function (t, i, n) {
            this.RT = t, T.setOptions(this, i), this.nr = n
        }, getType: function () {
            return this.options.type
        }, setMinWidth: function (t) {
            this.options.minWidth = t, this.update()
        }, setMaxWidth: function (t) {
            this.options.cr = t, this.update()
        }, setMaxHeight: function (t) {
            this.options.maxHeight = t, this.update()
        }, setLngLat: function (t) {
            this.dr(t)
        }, setOffset: function (t) {
            this.options.offset = t, this.update()
        }, getOffset: function () {
            return this.options.offset
        }, closeInfoWindow: function () {
            this.YT()
        }
    }), T.LayerGroup = T.hE.extend({
        initialize: function (t) {
            this.JW = {};
            var i, n;
            if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
        }, addLayer: function (t) {
            var i = this.getLayerId(t);
            return this.JW[i] = t, this.KE && this.KE.addLayer(t), this
        }, removeLayer: function (t) {
            var i = t in this.JW ? t : this.getLayerId(t);
            return this.KE && this.JW[i] && this.KE.removeLayer(this.JW[i]), delete this.JW[i], this
        }, hasLayer: function (t) {
            return !!t && (t in this.JW || this.getLayerId(t) in this.JW)
        }, clearLayers: function () {
            for (var t in this.JW) this.removeLayer(this.JW[t]);
            return this
        }, ZT: function (t) {
            var i, n, e = Array.prototype.slice.call(arguments, 1);
            for (i in this.JW) n = this.JW[i], n[t] && n[t].apply(n, e);
            return this
        }, onAdd: function (t) {
            for (var i in this.JW) t.addLayer(this.JW[i])
        }, onRemove: function (t) {
            for (var i in this.JW) t.removeLayer(this.JW[i])
        }, ME: function (t, i) {
            for (var n in this.JW) t.call(i, this.JW[n]);
            return this
        }, getLayer: function (t) {
            return this.JW[t]
        }, getLayers: function () {
            var t = [];
            for (var i in this.JW) t.push(this.JW[i]);
            return t
        }, setZIndex: function (t) {
            return this.ZT("setZIndex", t)
        }, getLayerId: function (t) {
            return T.F(t)
        }
    }), T.CT = function (t) {
        return new T.LayerGroup(t)
    }, T.HT = T.LayerGroup.extend({
        addLayer: function (t) {
            return this.hasLayer(t) ? this : (t.tQ(this), T.LayerGroup.prototype.addLayer.call(this, t), this.EQ("layeradd", {layer: t}))
        }, removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this.JW && (t = this.JW[t]), t.YQ(this), T.LayerGroup.prototype.removeLayer.call(this, t), this.EQ("layerremove", {layer: t})) : this
        }, er: function (t) {
            return this.ZT("er", t)
        }, Ae: function () {
            return this.ZT("Ae")
        }, Se: function () {
            return this.ZT("Se")
        }, getBounds: function () {
            var t = new T.kq;
            for (var i in this.JW) {
                var n = this.JW[i];
                t.extend(n.getBounds ? n.getBounds() : n.pE())
            }
            return t
        }
    }), T.VT = function (t) {
        return new T.HT(t)
    }, T.MapType = T.LayerGroup.extend({
        initialize: function (t, i, n) {
            this.name = i, this.JW = {};
            var e, s;
            if (t) for (e = 0, s = t.length; e < s; e++) this.addLayer(t[e])
        }, getName: function () {
            return this.name
        }
    }), T.Map.n({
        lW: function (t) {
            var i = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            i.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.Y() + "x=" + t.x + "&y=" + t.y + "&l=" + t.z  + "&tk=aa303c60a22c95a43fb8b5cd58bd501d": T.w.T() + "x=" + t.x + "&y=" + t.y + "&l=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            };
            var n = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            n.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.U() + "x=" + t.x + "&y=" + t.y + "&l=" + t.z  + "&tk=aa303c60a22c95a43fb8b5cd58bd501d": T.w.t() + "x=" + t.x + "&y=" + t.y + "&l=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            }, TMAP_NORMAL_MAP = new T.MapType([i, n], "TMAP_NORMAL_MAP", {a: 1});
            var e = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            e.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.i() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z  + "&tk=aa303c60a22c95a43fb8b5cd58bd501d": T.w.u() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            };
            var s = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            s.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.O() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d" : T.w.I() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            }, TMAP_SATELLITE_MAP = new T.MapType([e], "TMAP_SATELLITE_MAP"), TMAP_HYBRID_MAP = new T.MapType([e, s], "TMAP_HYBRID_MAP");
            var o = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            o.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.p() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z  + "&tk=aa303c60a22c95a43fb8b5cd58bd501d": T.w.o() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            };
            var r = new T.TileLayer("", {minZoom: 1, maxZoom: 18});
            r.getTileUrl = function (t) {
                return 0 == T.Hq.eW ? T.w.A() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z  + "&tk=aa303c60a22c95a43fb8b5cd58bd501d": T.w.P() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z + "&tk=aa303c60a22c95a43fb8b5cd58bd501d"
            }, TMAP_TERRAIN_MAP = new T.MapType([o], "TMAP_TERRAIN_MAP"), TMAP_TERRAIN_HYBRID_MAP = new T.MapType([o, r], "TMAP_TERRAIN_HYBRID_MAP")
        }
    }), T.cT = T.hE.extend({
        options: {nW: .1}, initialize: function (t) {
            T.setOptions(this, t), T.F(this)
        }, onAdd: function () {
            this.ow || (this.DW(), this.CE && T.mQ.rq(this.ow, "tdt-zoom-animated")), this.getPane().appendChild(this.ow), this.oe()
        }, onRemove: function () {
            T.mQ.qq(this.ow)
        }, VE: function () {
            var t = {viewreset: this.Er, zoom: this.BT, moveend: this.oe};
            return this.CE && (t.ge = this.vT), t
        }, vT: function (t) {
            this.NT(t.center, t.zoom)
        }, BT: function () {
            this.NT(this.KE.getCenter(), this.KE.getZoom())
        }, NT: function (t, i) {
            var n = this.KE.BW(i, this.GW), e = T.mQ.getPosition(this.ow),
                s = this.KE.getSize().GQ(.5 + this.options.nW), o = this.KE._q(this.bT, i), r = this.KE._q(t, i),
                h = r.DQ(o), a = s.GQ(-n).aQ(e).aQ(s).DQ(h);
            T.PQ.any3d ? T.mQ.uq(this.ow, a, n) : T.mQ.setPosition(this.ow, a)
        }, Er: function () {
            this.oe(), this.NT(this.bT, this.GW)
        }, oe: function () {
            var t = this.options.nW, i = this.KE.getSize(), n = this.KE.lw(i.GQ(-t)).JQ();
            this.qr = new T.CQ(n, n.aQ(i.GQ(1 + 2 * t)).JQ()), this.bT = this.KE.getCenter(), this.GW = this.KE.getZoom()
        }
    }), T.Map.n({
        MT: function (t) {
            var i = t.options.OW || this.nT(t.options.JE) || this.options.OW || this._T;
            return i || (i = this._T = this.options.qt && T.Qt() || T.mT()), this.hasLayer(i) || this.addLayer(i), i
        }, nT: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._w[t];
            return void 0 === i && (i = T.SVG && T.mT({JE: t}) || T.Wt && T.Qt({JE: t}), this._w[t] = i), i
        }
    }), T.LT = T.hE.extend({
        options: {
            stroke: !0,
            color: "#0000FF",
            weight: 3,
            opacity: .5,
            wt: "round",
            Et: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            et: "evenodd",
            Qr: !0
        }, NE: function (t) {
            this._T = t.MT(this)
        }, onAdd: function () {
            this._T.Rt(this), this.Er(), this._T.rt(this)
        }, onRemove: function () {
            this._T.Tt(this)
        }, VE: function () {
            return {zoomend: this.tt, moveend: this.oe, viewreset: this.Er}
        }, redraw: function () {
            return this.KE && this._T.Yt(this), this
        }, er: function (t) {
            return T.setOptions(this, t), this._T && this._T.Ut(this), this
        }, Ae: function () {
            return this._T && this._T.Hr(this), this
        }, Se: function () {
            return this._T && this._T.ut(this), this
        }, getElement: function () {
            return this.It
        }, Er: function () {
            this.tt(), this.oe()
        }, it: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (T.PQ.touch ? 10 : 0)
        }
    }), T.Ot = {
        ot: function (t, i) {
            if (!i || !t.length) return t.slice();
            var n = i * i;
            return t = this.Pt(t, n), t = this.pt(t, n)
        }, At: function (t, i, n) {
            return Math.sqrt(this.at(t, i, n, !0))
        }, St: function (t, i, n) {
            return this.at(t, i, n)
        }, pt: function (t, i) {
            var n = t.length, e = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, s = new e(n);
            s[0] = s[n - 1] = 1, this.st(t, s, i, 0, n - 1);
            var o, r = [];
            for (o = 0; o < n; o++) s[o] && r.push(t[o]);
            return r
        }, st: function (t, i, n, e, s) {
            var o, r, h, a = 0;
            for (r = e + 1; r <= s - 1; r++) h = this.at(t[r], t[e], t[s], !0), h > a && (o = r, a = h);
            a > n && (i[o] = 1, this.st(t, i, n, e, o), this.st(t, i, n, o, s))
        }, Pt: function (t, i) {
            for (var n = [t[0]], e = 1, s = 0, o = t.length; e < o; e++) this.Dt(t[e], t[s]) > i && (n.push(t[e]), s = e);
            return s < o - 1 && n.push(t[o - 1]), n
        }, dt: function (t, i, n, e, s) {
            var o, r, h, a = e ? this.Ft : this.ft(t, n), u = this.ft(i, n);
            for (this.Ft = u; ;) {
                if (!(a | u)) return [t, i];
                if (a & u) return !1;
                o = a || u, r = this.Gt(t, i, o, n, s), h = this.ft(r, n), o === a ? (t = r, a = h) : (i = r, u = h)
            }
        }, Gt: function (t, i, n, e, s) {
            var o, r, h = i.x - t.x, a = i.y - t.y, u = e.min, c = e.max;
            return 8 & n ? (o = t.x + h * (c.y - t.y) / a, r = c.y) : 4 & n ? (o = t.x + h * (u.y - t.y) / a, r = u.y) : 2 & n ? (o = c.x, r = t.y + a * (c.x - t.x) / h) : 1 & n && (o = u.x, r = t.y + a * (u.x - t.x) / h), new T.Point(o, r, s)
        }, ft: function (t, i) {
            var n = 0;
            return t.x < i.min.x ? n |= 1 : t.x > i.max.x && (n |= 2), t.y < i.min.y ? n |= 4 : t.y > i.max.y && (n |= 8), n
        }, Dt: function (t, i) {
            var n = i.x - t.x, e = i.y - t.y;
            return n * n + e * e
        }, at: function (t, i, n, e) {
            var s, o = i.x, r = i.y, h = n.x - o, a = n.y - r, u = h * h + a * a;
            return u > 0 && (s = ((t.x - o) * h + (t.y - r) * a) / u, s > 1 ? (o = n.x, r = n.y) : s > 0 && (o += h * s, r += a * s)), h = t.x - o, a = t.y - r, e ? h * h + a * a : new T.Point(o, r)
        }
    }, T.Polyline = T.LT.extend({
        options: {gt: 1, type: 4, Ht: !1}, initialize: function (t, i) {
            T.setOptions(this, i), this.ht(t), this.Jt = "solid", this.options.lineStyle && this.setLineStyle(this.options.lineStyle)
        }, getType: function () {
            return this.options.type
        }, jt: function () {
            return this.Kt
        }, getLngLats: function () {
            return this.jt()
        }, kt: function (t) {
            return this.ht(t), this.redraw()
        }, setLngLats: function (t) {
            this.kt(t)
        }, setColor: function (t) {
            this.er({color: t})
        }, getColor: function () {
            return this.options.color
        }, setWeight: function (t) {
            this.er({weight: t})
        }, getWeight: function () {
            return this.options.weight
        }, setOpacity: function (t) {
            this.er({opacity: t})
        }, getOpacity: function () {
            return this.options.opacity
        }, setLineStyle: function (t) {
            "dashed" == t ? (this.Jt = "dashed", T.PQ.ie8 || T.PQ.ie7 ? this.er({dashArray: "2,2"}) : this.er({dashArray: "4"})) : (this.Jt = "solid", this.er({dashArray: ""}))
        }, getLineStyle: function () {
            return this.Jt
        }, getMap: function () {
            return this.KE
        }, enableEdit: function () {
            this.Lt && this.Lt.enable()
        }, disableEdit: function () {
            this.Lt && this.Lt.disable()
        }, isEditable: function () {
            return this.Lt.SE()
        }, lt: function () {
            return !this.Kt.length
        }, Zt: function (t) {
            for (var i, n, e = 1 / 0, s = null, o = T.Ot.at, r = 0, h = this.Ct.length; r < h; r++) for (var a = this.Ct[r], u = 1, c = a.length; u < c; u++) {
                i = a[u - 1], n = a[u];
                var l = o(t, i, n, !0);
                l < e && (e = l, s = o(t, i, n))
            }
            return s && (s.distance = Math.sqrt(e)), s
        }, getCenter: function () {
            var t, i, n, e, s, o, r, h = this.Vt[0], a = h.length;
            if (!a) return null;
            for (t = 0, i = 0; t < a - 1; t++) i += h[t].distanceTo(h[t + 1]) / 2;
            if (0 === i) return this.KE.dw(h[0]);
            for (t = 0, e = 0; t < a - 1; t++) if (s = h[t], o = h[t + 1], n = s.distanceTo(o), e += n, e > i) return r = (e - i) / n, this.KE.dw([o.x - r * (o.x - s.x), o.y - r * (o.y - s.y)])
        }, getBounds: function () {
            return this.qr
        }, ct: function (t, i) {
            return i = i || this.Bt(), t = T.Gq(t), i.push(t), this.qr.extend(t), this.redraw()
        }, ht: function (t) {
            this.qr = new T.kq, this.Kt = this.vt(t)
        }, Bt: function () {
            return T.Polyline.Nt(this.Kt) ? this.Kt : this.Kt[0]
        }, vt: function (t) {
            for (var i = [], n = T.Polyline.Nt(t), e = 0, s = t.length; e < s; e++) n ? (i[e] = T.Gq(t[e]), this.qr.extend(i[e])) : i[e] = this.vt(t[e]);
            return i
        }, tt: function () {
            var t = new T.CQ;
            this.Vt = [], this.bt(this.Kt, this.Vt, t);
            var i = this.it(), n = new T.Point(i, i);
            this.qr.NQ() && t.NQ() && (t.min.dQ(n), t.max.SQ(n), this.Mt = t)
        }, bt: function (t, i, n) {
            var e, s, o = t[0] instanceof T.Fq, r = t.length;
            if (o) {
                for (s = [], e = 0; e < r; e++) s[e] = this.KE.Lw(t[e]), n.extend(s[e]);
                i.push(s)
            } else for (e = 0; e < r; e++) this.bt(t[e], i, n)
        }, nt: function () {
            var t = this._T.qr;
            if (this.Ct = [], this.Mt && this.Mt.intersects(t)) {
                if (this.options.Ht) return void (this.Ct = this.Vt);
                var i, n, e, s, o, r, h, a = this.Ct;
                for (i = 0, e = 0, s = this.Vt.length; i < s; i++) for (h = this.Vt[i], n = 0, o = h.length; n < o - 1; n++) r = T.Ot.dt(h[n], h[n + 1], t, n, !0), r && (a[e] = a[e] || [], a[e].push(r[0]), r[1] === h[n + 1] && n !== o - 2 || (a[e].push(r[1]), e++))
            }
        }, _t: function () {
            for (var t = this.Ct, i = this.options.gt, n = 0, e = t.length; n < e; n++) t[n] = T.Ot.ot(t[n], i)
        }, oe: function () {
            this.KE && (this.nt(), this._t(), this.Yt())
        }, Yt: function () {
            this._T.mt(this)
        }, show: function () {
            this.getElement().style.display = "block"
        }, hide: function () {
            this.getElement().style.display = "none"
        }, isHidden: function () {
            return "none" == this.getElement().style.display
        }
    }), T.QY = function (t, i) {
        return new T.Polyline(t, i)
    }, T.Polyline.Nt = function (t) {
        return !T.s.Z(t[0]) || "object" != typeof t[0][0] && "undefined" != typeof t[0][0]
    }, T.qY = {}, T.qY.WY = function (t, i, n) {
        var e, s, o, r, h, a, u, c, l, f = [1, 4, 2, 8], d = T.Ot;
        for (s = 0, u = t.length; s < u; s++) t[s]._code = d.ft(t[s], i);
        for (r = 0; r < 4; r++) {
            for (c = f[r], e = [], s = 0, u = t.length, o = u - 1; s < u; o = s++) h = t[s], a = t[o], h._code & c ? a._code & c || (l = d.Gt(a, h, c, i, n), l._code = d.ft(l, i), e.push(l)) : (a._code & c && (l = d.Gt(a, h, c, i, n), l._code = d.ft(l, i), e.push(l)), e.push(h));
            t = e
        }
        return t
    }, T.Polygon = T.Polyline.extend({
        options: {fill: !0, type: 5}, setFillColor: function (t) {
            this.er({fillColor: t})
        }, getFillColor: function () {
            return this.options.fillColor
        }, setFillOpacity: function (t) {
            this.er({fillOpacity: t})
        }, getFillOpacity: function () {
            return this.options.fillOpacity
        }, lt: function () {
            return !this.Kt.length || !this.Kt[0].length
        }, getCenter: function () {
            var t, i, n, e, s, o, r, h, a, u = this.Vt[0], c = u.length;
            if (!c) return null;
            for (o = r = h = 0, t = 0, i = c - 1; t < c; i = t++) n = u[t], e = u[i], s = n.y * e.x - e.y * n.x, r += (n.x + e.x) * s, h += (n.y + e.y) * s, o += 3 * s;
            return a = 0 === o ? u[0] : [r / o, h / o], this.KE.dw(a)
        }, vt: function (t) {
            var i = T.Polyline.prototype.vt.call(this, t), n = i.length;
            return n >= 2 && i[0] instanceof T.Fq && i[0].equals(i[n - 1]) && i.pop(), i
        }, ht: function (t) {
            T.Polyline.prototype.ht.call(this, t), T.Polyline.Nt(this.Kt) && (this.Kt = [this.Kt])
        }, Bt: function () {
            return T.Polyline.Nt(this.Kt[0]) ? this.Kt[0] : this.Kt[0][0]
        }, nt: function () {
            var t = this._T.qr, i = this.options.weight, n = new T.Point(i, i);
            if (t = new T.CQ(t.min.DQ(n), t.max.aQ(n)), this.Ct = [], this.Mt && this.Mt.intersects(t)) {
                if (this.options.Ht) return void (this.Ct = this.Vt);
                for (var e, s = 0, o = this.Vt.length; s < o; s++) e = T.qY.WY(this.Vt[s], t, !0), e.length && this.Ct.push(e)
            }
        }, Yt: function () {
            this._T.mt(this, !0)
        }
    }), T.wY = function (t, i) {
        return new T.Polygon(t, i)
    }, T.Rectangle = T.Polygon.extend({
        options: {type: 6}, initialize: function (t, i) {
            T.Polygon.prototype.initialize.call(this, this.EY(t), i)
        }, setBounds: function (t) {
            return this.kt(this.EY(t))
        }, EY: function (t) {
            return t = T.Kq(t), [t.getSouthWest(), t.Cq(), t.getNorthEast(), t.Bq()]
        }
    }), T.eY = function (t, i) {
        return new T.Rectangle(t, i)
    }, T.RY = T.LT.extend({
        options: {fill: !0, radius: 10, type: 8}, initialize: function (t, i) {
            T.setOptions(this, i), this.pr = T.Gq(t), this.rY = this.options.radius
        }, dr: function (t) {
            return this.pr = T.Gq(t), this.redraw(), this.EQ("move", {lT: this.pr})
        }, pE: function () {
            return this.pr
        }, setRadius: function (t) {
            return this.options.radius = this.rY = t, this.redraw()
        }, getRadius: function () {
            return this.rY
        }, er: function (t) {
            var i = t && t.radius || this.rY;
            return T.LT.prototype.er.call(this, t), this.setRadius(i), this
        }, tt: function () {
            this.TY = this.KE.Lw(this.pr), this.tY()
        }, tY: function () {
            var t = this.rY, i = this.YY || t, n = this.it(), e = [t + n, i + n];
            this.Mt = new T.CQ(this.TY.DQ(e), this.TY.aQ(e))
        }, oe: function () {
            this.KE && this.Yt()
        }, Yt: function () {
            this._T.UY(this)
        }, uY: function () {
            return this.rY && !this._T.qr.intersects(this.Mt)
        }
    }), T.IY = function (t, i) {
        return new T.RY(t, i)
    }, T.Circle = T.RY.extend({
        initialize: function (t, i, n) {
            "number" == typeof i && (i = T.extend({}, n, {radius: i})), T.setOptions(this, i), this.pr = T.Gq(t), isNaN(this.options.radius), this.iY = this.options.radius, this.Jt = "solid", this.options.lineStyle && this.setLineStyle(this.options.lineStyle)
        }, getType: function () {
            return this.options.type
        }, setCenter: function (t) {
            this.dr(t)
        }, getCenter: function () {
            return this.pE()
        }, setColor: function (t) {
            this.er({color: t})
        }, getColor: function () {
            return this.options.color
        }, setWeight: function (t) {
            this.er({weight: t})
        }, getWeight: function () {
            return this.options.weight
        }, setOpacity: function (t) {
            this.er({opacity: t})
        }, getOpacity: function () {
            return this.options.opacity
        }, setFillColor: function (t) {
            this.er({fillColor: t})
        }, getFillColor: function () {
            return this.options.fillColor
        }, setFillOpacity: function (t) {
            this.er({fillOpacity: t})
        }, getFillOpacity: function () {
            return this.options.fillOpacity
        }, setLineStyle: function (t) {
            "dashed" == t ? (this.Jt = "dashed", T.PQ.ie8 || T.PQ.ie7 ? this.er({dashArray: "2,2"}) : this.er({dashArray: "4"})) : (this.Jt = "solid", this.er({dashArray: ""}))
        }, getLineStyle: function () {
            return this.Jt
        }, enableEdit: function () {
            this.Lt && this.Lt.enable()
        }, isEditable: function () {
            return this.Lt.SE()
        }, disableEdit: function () {
            this.Lt && this.Lt.disable()
        }, getMap: function () {
            return this.KE
        }, setRadius: function (t) {
            return this.iY = t, this.redraw()
        }, getRadius: function () {
            return this.iY
        }, getBounds: function () {
            var t = [this.rY, this.YY || this.rY];
            return new T.kq(this.KE.dw(this.TY.DQ(t)), this.KE.dw(this.TY.aQ(t)))
        }, er: T.LT.prototype.er, tt: function () {
            var t = this.pr.lng, i = this.pr.lat, n = this.KE, e = n.options.iW;
            if (e.distance === T.Hq.gq.distance) {
                var s = Math.PI / 180, o = this.iY / T.Hq.gq.R / s, r = n._q([i + o, t]), h = n._q([i - o, t]),
                    a = r.aQ(h).FQ(2), u = n.mq(a).lat,
                    c = Math.acos((Math.cos(o * s) - Math.sin(i * s) * Math.sin(u * s)) / (Math.cos(i * s) * Math.cos(u * s))) / s;
                (isNaN(c) || 0 === c) && (c = o / Math.cos(Math.PI / 180 * i)), this.TY = a.DQ(n.jw()), this.rY = isNaN(c) ? 0 : Math.max(Math.round(a.x - n._q([u, t - c]).x), 1), this.YY = Math.max(Math.round(a.y - r.y), 1)
            } else {
                var l = e.mq(e._q(this.pr).DQ([this.iY, 0]));
                this.TY = n.Lw(this.pr), this.rY = this.TY.x - n.Lw(l).x
            }
            this.tY()
        }
    }), T.OY = function (t, i, n) {
        return new T.Circle(t, i, n)
    }, T.SVG = T.cT.extend({
        VE: function () {
            var t = T.cT.prototype.VE.call(this);
            return t.zoomstart = this.oY, t
        }, DW: function () {
            this.ow = T.SVG.D("svg"), this.ow.setAttribute("pointer-events", "none"), this._rootGroup = T.SVG.D("g"), this.ow.appendChild(this._rootGroup)
        }, oY: function () {
            this.oe()
        }, oe: function () {
            if (!this.KE.eR || !this.qr) {
                T.cT.prototype.oe.call(this);
                var t = this.qr, i = t.getSize(), n = this.ow;
                this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, n.setAttribute("width", i.x), n.setAttribute("height", i.y)), T.mQ.setPosition(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" "))
            }
        }, Rt: function (t) {
            var i = t.It = T.SVG.D("path");
            t.options.className && T.mQ.rq(i, t.options.className), t.options.Qr && T.mQ.rq(i, "tdt-interactive"), this.Ut(t)
        }, rt: function (t) {
            this._rootGroup.appendChild(t.It), t.LE(t.It)
        }, Tt: function (t) {
            T.mQ.qq(t.It), t.lE(t.It)
        }, Yt: function (t) {
            t.tt(), t.oe()
        }, Ut: function (t) {
            var i = t.It, n = t.options;
            i && (n.stroke ? (i.setAttribute("stroke", n.color), i.setAttribute("stroke-opacity", n.opacity), i.setAttribute("stroke-width", n.weight), i.setAttribute("stroke-linecap", n.wt), i.setAttribute("stroke-linejoin", n.Et), n.dashArray ? i.setAttribute("stroke-dasharray", n.dashArray) : i.removeAttribute("stroke-dasharray"), n.dashOffset ? i.setAttribute("stroke-dashoffset", n.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), n.fill ? (i.setAttribute("fill", n.fillColor || n.color), i.setAttribute("fill-opacity", n.fillOpacity), i.setAttribute("fill-rule", n.et || "evenodd")) : i.setAttribute("fill", "none"))
        }, mt: function (t, i) {
            this.PY(t, T.SVG.pY(t.Ct, i))
        }, UY: function (t) {
            var i = t.TY, n = t.rY, e = t.YY || n, s = "a" + n + "," + e + " 0 1,0 ",
                o = t.uY() ? "M0 0" : "M" + (i.x - n) + "," + i.y + s + 2 * n + ",0 " + s + 2 * -n + ",0 ";
            this.PY(t, o)
        }, PY: function (t, i) {
            t.It.setAttribute("d", i)
        }, Hr: function (t) {
            T.mQ.wq(t.It)
        }, ut: function (t) {
            T.mQ.Eq(t.It)
        }
    }), T.extend(T.SVG, {
        D: function (t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }, pY: function (t, i) {
            var n, e, s, o, r, h, a = "";
            for (n = 0, s = t.length; n < s; n++) {
                for (r = t[n], e = 0, o = r.length; e < o; e++) h = r[e], a += (e ? "L" : "M") + h.x + " " + h.y;
                a += i ? T.PQ.mT ? "z" : "x" : ""
            }
            return a || "M0 0"
        }
    }), T.PQ.mT = !(!document.createElementNS || !T.SVG.D("svg").createSVGRect),T.mT = function (t) {
        return T.PQ.mT || T.PQ.vml ? new T.SVG(t) : null
    },T.PQ.vml = !T.PQ.mT && function () {
        try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var i = t.firstChild;
            return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
        } catch (sO) {
            return !1
        }
    }(),T.SVG.n(T.PQ.vml ? {
        DW: function () {
            this.ow = T.mQ.D("div", "tdt-vml-container")
        }, oe: function () {
            this.KE.eR || T.cT.prototype.oe.call(this)
        }, Rt: function (t) {
            var i = t.ow = T.SVG.D("shape");
            T.mQ.rq(i, "tdt-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t.It = T.SVG.D("path"), i.appendChild(t.It), this.Ut(t)
        }, rt: function (t) {
            var i = t.ow;
            this.ow.appendChild(i), t.options.Qr && t.LE(i)
        }, Tt: function (t) {
            var i = t.ow;
            T.mQ.qq(i), t.lE(i)
        }, Ut: function (t) {
            var i = t._stroke, n = t._fill, e = t.options, s = t.ow;
            s.stroked = !!e.stroke, s.filled = !!e.fill, e.stroke ? (i || (i = t._stroke = T.SVG.D("stroke")), s.appendChild(i), i.weight = e.weight + "px", i.color = e.color, i.opacity = e.opacity, e.dashArray ? i.dashStyle = T.s.Z(e.dashArray) ? e.dashArray.join(" ") : e.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = e.wt.replace("butt", "flat"), i.joinstyle = e.Et) : i && (s.removeChild(i), t._stroke = null), e.fill ? (n || (n = t._fill = T.SVG.D("fill")), s.appendChild(n), n.color = e.fillColor || e.color, n.opacity = e.fillOpacity) : n && (s.removeChild(n), t._fill = null)
        }, UY: function (t) {
            var i = t.TY.JQ(), n = Math.round(t.rY), e = Math.round(t.YY || n);
            this.PY(t, t.uY() ? "M0 0" : "AL " + i.x + "," + i.y + " " + n + "," + e + " 0,23592600")
        }, PY: function (t, i) {
            t.It.v = i
        }, Hr: function (t) {
            T.mQ.wq(t.ow)
        }, ut: function (t) {
            T.mQ.Eq(t.ow)
        }
    } : {}),T.PQ.vml && (T.SVG.D = function () {
        try {
            return document.namespaces.aQ("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (sO) {
            return function (t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }()),T.Wt = T.cT.extend({
        onAdd: function () {
            T.cT.prototype.onAdd.call(this), this.JW = this.JW || {}, this.AY()
        }, DW: function () {
            var t = this.ow = document.createElement("canvas");
            T.Pq.on(t, "mousemove", T.s.g(this.aY, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this.SY, this).on(t, "mouseout", this.sY, this), this.DY = t.getContext("2d")
        }, oe: function () {
            if (!this.KE.eR || !this.qr) {
                this.dY = {}, T.cT.prototype.oe.call(this);
                var t = this.qr, i = this.ow, n = t.getSize(), e = T.PQ.retina ? 2 : 1;
                T.mQ.setPosition(i, t.min), i.width = e * n.x, i.height = e * n.y, i.style.width = n.x + "px", i.style.height = n.y + "px", T.PQ.retina && this.DY.scale(2, 2), this.DY.translate(-t.min.x, -t.min.y)
            }
        }, Rt: function (t) {
            this._updateDashArray(t), this.JW[T.F(t)] = t
        }, rt: T.s.h, Tt: function (t) {
            t.FY = !0, this.fY(t)
        }, Yt: function (t) {
            this.GY = t.Mt, this.AY(!0), t.tt(), t.oe(), this.AY(), this.GY = null
        }, Ut: function (t) {
            this._updateDashArray(t), this.fY(t)
        }, _updateDashArray: function (t) {
            if (t.options.dashArray) {
                var i, n = t.options.dashArray.split(","), e = [];
                for (i = 0; i < n.length; i++) e.push(Number(n[i]));
                t.options._dashArray = e
            }
        }, fY: function (t) {
            if (this.KE) {
                var i = (t.options.weight || 0) + 1;
                this.GY = this.GY || new T.CQ, this.GY.extend(t.Mt.min.DQ([i, i])), this.GY.extend(t.Mt.max.aQ([i, i])), this.gY = this.gY || T.s.V(this.HY, this)
            }
        }, HY: function () {
            this.gY = null, this.AY(!0), this.AY(), this.GY = null
        }, AY: function (t) {
            this.hY = t;
            var i, n = this.GY;
            this.DY.save(), n && (this.DY.beginPath(), this.DY.rect(n.min.x, n.min.y, n.max.x - n.min.x, n.max.y - n.min.y), this.DY.clip());
            for (var e in this.JW) i = this.JW[e], (!n || i.Mt && i.Mt.intersects(n)) && i.Yt(), t && i.FY && (delete i.FY, delete this.JW[e]);
            this.DY.restore()
        }, mt: function (t, i) {
            var n, e, s, o, r = t.Ct, h = r.length, a = this.DY;
            if (h) {
                for (this.dY[t.f] = t, a.beginPath(), a.setLineDash && a.setLineDash(t.options && t.options._dashArray || []), n = 0; n < h; n++) {
                    for (e = 0, s = r[n].length; e < s; e++) o = r[n][e], a[e ? "lineTo" : "moveTo"](o.x, o.y);
                    i && a.closePath()
                }
                this.JY(a, t)
            }
        }, UY: function (t) {
            if (!t.uY()) {
                var i = t.TY, n = this.DY, e = t.rY, s = (t.YY || e) / e;
                this.dY[t.f] = t, 1 !== s && (n.save(), n.scale(1, s)), n.beginPath(), n.arc(i.x, i.y / s, e, 0, 2 * Math.PI, !1), 1 !== s && n.restore(), this.JY(n, t)
            }
        }, JY: function (t, i) {
            var n = this.hY, e = i.options;
            t.globalCompositeOperation = n ? "destination-out" : "source-over", e.fill && (t.globalAlpha = n ? 1 : e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.et || "evenodd")), e.stroke && 0 !== e.weight && (t.globalAlpha = n ? 1 : e.opacity, i._prevWeight = t.lineWidth = n ? i._prevWeight + 1 : e.weight, t.strokeStyle = e.color, t.wt = e.wt, t.Et = e.Et, t.stroke())
        }, SY: function (t) {
            var i, n = this.KE.Bw(t), e = [];
            for (var s in this.JW) i = this.JW[s], i.options.Qr && i.jY(n) && !this.KE.iE(i) && (T.Pq.KY(t), e.push(i));
            e.length && this.kY(e, t)
        }, aY: function (t) {
            if (this.KE && !this.KE.aE.moving() && !this.KE.eR) {
                var i = this.KE.Bw(t);
                this.sY(t, i), this.LY(t, i)
            }
        }, sY: function (t, i) {
            var n = this.lY;
            !n || "mouseout" !== t.type && n.jY(i) || (T.mQ.tq(this.ow, "tdt-interactive"), this.kY([n], t, "mouseout"), this.lY = null)
        }, LY: function (t, i) {
            var n, e;
            for (n in this.dY) e = this.dY[n], e.options.Qr && e.jY(i) && (T.mQ.rq(this.ow, "tdt-interactive"), this.kY([e], t, "mouseover"), this.lY = e);
            this.lY && this.kY([this.lY], t)
        }, kY: function (t, i, n) {
            this.KE.PE(i, n || i.type, t)
        }, Hr: T.s.h, ut: T.s.h
    }),T.PQ.Qt = function () {
        return !!document.createElement("canvas").getContext
    }(),T.Qt = function (t) {
        return T.PQ.Qt ? new T.Wt(t) : null
    },T.Polyline.prototype.jY = function (t, i) {
        var n, e, s, o, r, h, a = this.it();
        if (!this.Mt.contains(t)) return !1;
        for (n = 0, o = this.Ct.length; n < o; n++) for (h = this.Ct[n], e = 0, r = h.length, s = r - 1; e < r; s = e++) if ((i || 0 !== e) && T.Ot.At(t, h[s], h[e]) <= a) return !0;
        return !1
    },T.Polygon.prototype.jY = function (t) {
        var i, n, e, s, o, r, h, a, u = !1;
        if (!this.Mt.contains(t)) return !1;
        for (s = 0, h = this.Ct.length; s < h; s++) for (i = this.Ct[s], o = 0, a = i.length, r = a - 1; o < a; r = o++) n = i[o], e = i[r], n.y > t.y != e.y > t.y && t.x < (e.x - n.x) * (t.y - n.y) / (e.y - n.y) + n.x && (u = !u);
        return u || T.Polyline.prototype.jY.call(this, t, !0)
    },T.RY.prototype.jY = function (t) {
        return t.distanceTo(this.TY) <= this.rY + this.it()
    },T.GeoJSON = T.HT.extend({
        initialize: function (t, i) {
            T.setOptions(this, i), this.JW = {}, t && this.addData(t)
        }, addData: function (t) {
            var i, n, e, s = T.s.Z(t) ? t : t.features;
            if (s) {
                for (i = 0, n = s.length; i < n; i++) e = s[i], (e.geometries || e.geometry || e.features || e.coordinates) && this.addData(e);
                return this
            }
            var o = this.options;
            if (o.filter && !o.filter(t)) return this;
            var r = T.GeoJSON.geometryToLayer(t, o);
            return r ? (r.feature = T.GeoJSON.ZY(t), r.defaultOptions = r.options, this.resetStyle(r), o.onEachFeature && o.onEachFeature(t, r), this.addLayer(r)) : this
        }, resetStyle: function (t) {
            return t.options = T.s.extend({}, t.defaultOptions), this.CY(t, this.options.style), this
        }, er: function (t) {
            return this.ME(function (i) {
                this.CY(i, t)
            }, this)
        }, CY: function (t, i) {
            "function" == typeof i && (i = i(t.feature)), t.er && t.er(i)
        }
    }),T.extend(T.GeoJSON, {
        geometryToLayer: function (t, i) {
            var n, e, s, o, r = "Feature" === t.type ? t.geometry : t, h = r ? r.coordinates : null, a = [],
                u = i && i.pointToLayer, c = i && i.coordsToLatLng || this.coordsToLatLng;
            if (!h && !r) return null;
            switch (r.type) {
                case"Point":
                    return n = c(h), u ? u(t, n) : new T.Marker(n);
                case"MultiPoint":
                    for (s = 0, o = h.length; s < o; s++) n = c(h[s]), a.push(u ? u(t, n) : new T.Marker(n));
                    return new T.HT(a);
                case"LineString":
                case"MultiLineString":
                    return e = this.coordsToLatLngs(h, "LineString" === r.type ? 0 : 1, c), new T.Polyline(e, i);
                case"Polygon":
                case"MultiPolygon":
                    return e = this.coordsToLatLngs(h, "Polygon" === r.type ? 1 : 2, c), new T.Polygon(e, i);
                case"GeometryCollection":
                    for (s = 0, o = r.geometries.length; s < o; s++) {
                        var l = this.geometryToLayer({
                            geometry: r.geometries[s],
                            type: "Feature",
                            properties: t.properties
                        }, i);
                        l && a.push(l)
                    }
                    return new T.HT(a)
            }
        }, coordsToLatLng: function (t) {
            return new T.Fq(t[1], t[0], t[2])
        }, coordsToLatLngs: function (t, i, n) {
            for (var e, s = [], o = 0, r = t.length; o < r; o++) e = i ? this.coordsToLatLngs(t[o], i - 1, n) : (n || this.coordsToLatLng)(t[o]), s.push(e);
            return s
        }, VY: function (t) {
            return void 0 !== t.fq ? [t.lng, t.lat, t.fq] : [t.lng, t.lat]
        }, cY: function (t, i, n) {
            for (var e = [], s = 0, o = t.length; s < o; s++) e.push(i ? T.GeoJSON.cY(t[s], i - 1, n) : T.GeoJSON.VY(t[s]));
            return !i && n && e.push(e[0]), e
        }, BY: function (t, i) {
            return t.feature ? T.extend({}, t.feature, {geometry: i}) : T.GeoJSON.ZY(i)
        }, ZY: function (t) {
            return "Feature" === t.type ? t : {type: "Feature", properties: {}, geometry: t}
        }
    });
    var PointToGeoJSON = {
        toGeoJSON: function () {
            return T.GeoJSON.BY(this, {type: "Point", coordinates: T.GeoJSON.VY(this.pE())})
        }
    };
    T.Marker.n(PointToGeoJSON), T.Circle.n(PointToGeoJSON), T.RY.n(PointToGeoJSON), T.Polyline.prototype.toGeoJSON = function () {
        var t = !T.Polyline.Nt(this.Kt), i = T.GeoJSON.cY(this.Kt, t ? 1 : 0);
        return T.GeoJSON.BY(this, {type: (t ? "Multi" : "") + "LineString", coordinates: i})
    }, T.Polygon.prototype.toGeoJSON = function () {
        var t = !T.Polyline.Nt(this.Kt), i = t && !T.Polyline.Nt(this.Kt[0]),
            n = T.GeoJSON.cY(this.Kt, i ? 2 : t ? 1 : 0, !0);
        return t || (n = [n]), T.GeoJSON.BY(this, {type: (i ? "Multi" : "") + "Polygon", coordinates: n})
    }, T.LayerGroup.n({
        vY: function () {
            var t = [];
            return this.ME(function (i) {
                t.push(i.toGeoJSON().geometry.coordinates)
            }), T.GeoJSON.BY(this, {type: "MultiPoint", coordinates: t})
        }, toGeoJSON: function () {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t) return this.vY();
            var i = "GeometryCollection" === t, n = [];
            return this.ME(function (t) {
                if (t.toGeoJSON) {
                    var e = t.toGeoJSON();
                    n.push(i ? e.geometry : T.GeoJSON.ZY(e))
                }
            }), i ? T.GeoJSON.BY(this, {geometries: n, type: "GeometryCollection"}) : {
                type: "FeatureCollection",
                features: n
            }
        }
    }), T.NY = function (t, i) {
        return new T.GeoJSON(t, i)
    }, T.bY = T.NY;
    var eventsKey = "_tdt_events";
    T.Pq = {
        on: function (t, i, n, e) {
            if ("object" == typeof i) for (var s in i) this.qQ(t, s, i[s], n); else {
                i = T.s.K(i);
                for (var o = 0, r = i.length; o < r; o++) this.qQ(t, i[o], n, e)
            }
            return this
        }, off: function (t, i, n, e) {
            if ("object" == typeof i) for (var s in i) this.wQ(t, s, i[s], n); else {
                i = T.s.K(i);
                for (var o = 0, r = i.length; o < r; o++) this.wQ(t, i[o], n, e)
            }
            return this
        }, qQ: function (t, i, n, e) {
            var s = i + T.F(n) + (e ? "_" + T.F(e) : "");
            if (t[eventsKey] && t[eventsKey][s]) return this;
            var o = function (i) {
                return n.call(e || t, i || window.event)
            }, r = o;
            return T.PQ.pointer && 0 === i.indexOf("touch") ? this.MY(t, i, o, s) : T.PQ.touch && "dblclick" === i && this.nY ? this.nY(t, o, s) : "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", o, !1) : "mouseenter" === i || "mouseleave" === i ? (o = function (i) {
                i = i || window.event, T.Pq.OE(t, i) && r(i)
            }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", o, !1)) : ("click" === i && T.PQ.android && (o = function (t) {
                return T.Pq._Y(t, r)
            }), t.addEventListener(i, o, !1)) : "attachEvent" in t && t.attachEvent("on" + i, o), t[eventsKey] = t[eventsKey] || {}, t[eventsKey][s] = o, this
        }, wQ: function (t, i, n, e) {
            var s = i + T.F(n) + (e ? "_" + T.F(e) : ""), o = t[eventsKey] && t[eventsKey][s];
            return o ? (T.PQ.pointer && 0 === i.indexOf("touch") ? this.removePointerListener(t, i, s) : T.PQ.touch && "dblclick" === i && this.mY ? this.mY(t, s) : "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", o, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, o, !1) : "detachEvent" in t && t.detachEvent("on" + i, o), t[eventsKey][s] = null, this) : this
        }, stopPropagation: function (t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, T.Pq.oE(t), this
        }, oT: function (t) {
            return T.Pq.on(t, "mousewheel", T.Pq.stopPropagation)
        }, PT: function (t) {
            var i = T.Pq.stopPropagation;
            return T.Pq.on(t, T.QU.START.join(" "), i), T.Pq.on(t, {click: T.Pq.KY, dblclick: i})
        }, preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }, Iw: function (t) {
            return T.Pq.preventDefault(t).stopPropagation(t)
        }, cw: function (t, i) {
            if (!i) return new T.Point(t.clientX, t.clientY);
            var n = i.getBoundingClientRect();
            return new T.Point(t.clientX - n.left - i.clientLeft, t.clientY - n.top - i.clientTop)
        }, _wheelPxFactor: T.PQ.win && T.PQ.chrome ? 2 : T.PQ.gecko ? window.pQ : 1, qU: function (t) {
            return T.PQ.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / T.Pq._wheelPxFactor : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        }, WU: {}, KY: function (t) {
            T.Pq.WU[t.type] = !0
        }, oE: function (t) {
            var i = this.WU[t.type];
            return this.WU[t.type] = !1, i
        }, OE: function (t, i) {
            var n = i.relatedTarget;
            if (!n) return !0;
            try {
                for (; n && n !== t;) n = n.parentNode
            } catch (sO) {
                return !1
            }
            return n !== t
        }, _Y: function (t, i) {
            var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp, e = T.Pq.wU && n - T.Pq.wU;
            return e && e > 100 && e < 500 || t.target.EU && !t.IE ? void T.Pq.Iw(t) : (T.Pq.wU = n, void i(t))
        }
    }, T.Pq.addListener = T.Pq.on, T.Pq.removeListener = T.Pq.off, T.QU = T.QQ.extend({
        options: {clickTolerance: 3},
        N: {
            START: T.PQ.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"},
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }
        },
        initialize: function (t, i, n) {
            this.eU = t, this.RU = i || t, this.rU = n
        },
        enable: function () {
            this.TU || (T.Pq.on(this.RU, T.QU.START.join(" "), this.tU, this), this.TU = !0)
        },
        disable: function () {
            this.TU && (T.Pq.off(this.RU, T.QU.START.join(" "), this.tU, this), this.TU = !1, this.Dw = !1)
        },
        tU: function (t) {
            if (!t.IE && this.TU && (this.Dw = !1, !T.mQ.eq(this.eU, "tdt-zoom-anim") && !(T.QU._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches) && this.TU && (T.QU._dragging = !0, this.rU && T.mQ.sq(this.eU), T.mQ.aq(), T.mQ.oq(), !this.YU))) {
                this.EQ("down");
                var i = t.touches ? t.touches[0] : t;
                this.UU = new T.Point(i.clientX, i.clientY), T.Pq.on(document, T.QU.MOVE[t.type], this.Ge, this).on(document, T.QU.END[t.type], this.uU, this)
            }
        },
        Ge: function (t) {
            if (!t.IE && this.TU) {
                if (t.touches && t.touches.length > 1) return void (this.Dw = !0);
                var i = t.touches && 1 === t.touches.length ? t.touches[0] : t, n = new T.Point(i.clientX, i.clientY),
                    e = n.DQ(this.UU);
                (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (T.Pq.preventDefault(t), this.Dw || (this.EQ("dragstart"), this.Dw = !0, this.IU = T.mQ.getPosition(this.eU).DQ(e), T.mQ.rq(document.body, "tdt-dragging"), this.iU = t.target || t.srcElement, window.SVGElementInstance && this.iU instanceof SVGElementInstance && (this.iU = this.iU.correspondingUseElement), T.mQ.rq(this.iU, "tdt-drag-target")), this.OU = this.IU.aQ(e), this.YU = !0, T.s.c(this.oU), this.PU = t, this.oU = T.s.V(this.ET, this, !0)))
            }
        },
        ET: function () {
            var t = {originalEvent: this.PU};
            this.EQ("pU", t), T.mQ.setPosition(this.eU, this.OU), this.EQ("drag", t)
        },
        uU: function (t) {
            if (!t.IE && this.TU) {
                T.mQ.tq(document.body, "tdt-dragging"), this.iU && (T.mQ.tq(this.iU, "tdt-drag-target"), this.iU = null);
                for (var i in T.QU.MOVE) T.Pq.off(document, T.QU.MOVE[i], this.Ge, this).off(document, T.QU.END[i], this.uU, this);
                T.mQ.Sq(), T.mQ.pq(), this.Dw && this.YU && (T.s.c(this.oU), this.EQ("dragend", {})), this.YU = !1, T.QU._dragging = !1
            }
        }
    }), T.Lr = T.B.extend({
        initialize: function (t) {
            this.KE = t
        }, enable: function () {
            return this.TU ? this : (this.TU = !0, this.AU(), this)
        }, disable: function () {
            return this.TU ? (this.TU = !1, this.Sr(), this) : this
        }, SE: function () {
            return !!this.TU
        }
    }), T.Map._({aE: !0, aU: !T.PQ.android23, SU: 3400, sU: 1 / 0, DU: .2, dU: !0, FU: 0}), T.Map.fU = T.Lr.extend({
        AU: function () {
            if (!this.GU) {
                var t = this.KE;
                this.GU = new T.QU(t.Pw, t.ow), this.GU.on({
                    down: this.tU,
                    dragstart: this.gU,
                    drag: this.HU,
                    dragend: this.hU
                }, this), this.GU.on("pU", this.JU, this), t.options.dU && (this.GU.on("pU", this.jU, this), t.on("zoomend", this.KU, this), t.DE(this.KU, this))
            }
            T.mQ.rq(this.KE.ow, "tdt-grab tdt-touch-drag"), this.GU.enable(), this.kU = [], this.LU = []
        }, Sr: function () {
            T.mQ.tq(this.KE.ow, "tdt-grab"), T.mQ.tq(this.KE.ow, "tdt-touch-drag"), this.GU.disable()
        }, moved: function () {
            return this.GU && this.GU.Dw
        }, moving: function () {
            return this.GU && this.GU.YU
        }, tU: function () {
            this.KE.iw()
        }, gU: function () {
            var t = this.KE;
            if (this.KE.options.maxBounds && this.KE.options.FU) {
                var i = T.Kq(this.KE.options.maxBounds);
                this.lU = T.BQ(this.KE.vW(i.Cq()).GQ(-1), this.KE.vW(i.Bq()).GQ(-1).aQ(this.KE.getSize())), this.ZU = Math.min(1, Math.max(0, this.KE.options.FU))
            } else this.lU = null;
            t.EQ("movestart").EQ("dragstart"), t.options.aU && (this.kU = [], this.LU = [])
        }, HU: function (t) {
            if (this.KE.options.aU) {
                var i = this.CU = +new Date, n = this.VU = this.GU.cU || this.GU.OU;
                this.kU.push(n), this.LU.push(i), i - this.LU[0] > 50 && (this.kU.shift(), this.LU.shift())
            }
            this.KE.EQ("move", t).EQ("drag", t)
        }, KU: function () {
            var t = this.KE.getSize().FQ(2), i = this.KE.Lw([0, 0]);
            this.BU = i.DQ(t).x, this.vU = this.KE.kw().getSize().x
        }, NU: function (t, i) {
            return t - (t - i) * this.ZU
        }, JU: function () {
            if (this.ZU && this.lU) {
                var t = this.GU.OU.DQ(this.GU.IU), i = this.lU;
                t.x < i.min.x && (t.x = this.NU(t.x, i.min.x)), t.y < i.min.y && (t.y = this.NU(t.y, i.min.y)), t.x > i.max.x && (t.x = this.NU(t.x, i.max.x)), t.y > i.max.y && (t.y = this.NU(t.y, i.max.y)), this.GU.OU = this.GU.IU.aQ(t)
            }
        }, jU: function () {
            var t = this.vU, i = Math.round(t / 2), n = this.BU, e = this.GU.OU.x, s = (e - i + n) % t + i - n,
                o = (e + i + n) % t - i - n, r = Math.abs(s + n) < Math.abs(o + n) ? s : o;
            this.GU.cU = this.GU.OU.AQ(), this.GU.OU.x = r
        }, hU: function (t) {
            var i = this.KE, n = i.options, e = !n.aU || this.LU.length < 2;
            if (i.EQ("dragend", t), e) i.EQ("moveend"); else {
                var s = this.VU.DQ(this.kU[0]), o = (this.CU - this.LU[0]) / 1e3, r = n.DU, h = s.GQ(r / o),
                    a = h.distanceTo([0, 0]), u = Math.min(n.sU, a), c = h.GQ(u / a), l = u / (n.SU * r),
                    f = c.GQ(-l / 2).JQ();
                f.x || f.y ? (f = i.GE(f, i.options.maxBounds), T.s.V(function () {
                    i.panBy(f, {duration: l, DU: r, bU: !0, tw: !0})
                })) : i.EQ("moveend")
            }
        }
    }), T.Map.n({
        enableDrag: function () {
            this.aE.enable()
        }, disableDrag: function () {
            this.aE.disable()
        }, isDrag: function () {
            return this.aE.TU
        }, enableInertia: function () {
            this.options.aU = !0
        }, disableInertia: function () {
            this.options.aU = !1
        }, isInertia: function () {
            return this.options.aU
        }
    }), T.Map.m("Ow", "aE", T.Map.fU), T.Map._({MU: !0}), T.Map.nU = T.Lr.extend({
        initialize: function (t) {
            this.KE = t, this.ow = t.ow, this.overlayPane = t.Sw.overlayPane, this.mw = t.Sw.mw, this.markerPane = t.Sw.markerPane, this.infoWindowPane = t.Sw.infoWindowPane
        }, AU: function () {
            T.Pq.on(this.KE, "zoomstart", this.oY, this), T.Pq.on(this.KE, "zoomend", this.KU, this)
        }, Sr: function () {
            T.Pq.off(this.KE, "zoomstart", this.oY), T.Pq.off(this.KE, "zoomend", this.KU)
        }, oY: function (t) {
            this.KE.VW && (this.overlayPane.style.visibility = "hidden", this.mw.style.visibility = "hidden", this.markerPane.style.visibility = "hidden", this.infoWindowPane.style.visibility = "hidden")
        }, KU: function (t) {
            this.KE.VW && (this.overlayPane.style.visibility = "inherit", this.mw.style.visibility = "inherit", this.markerPane.style.visibility = "inherit", this.infoWindowPane.style.visibility = "inherit")
        }
    }), T.Map.m("Ow", "MU", T.Map.nU), T.Map._({_U: !0}), T.Map.mU = T.Lr.extend({
        AU: function () {
            this.KE.on("dblclick", this.Qu, this)
        }, Sr: function () {
            this.KE.off("dblclick", this.Qu, this)
        }, Qu: function (t) {
            var i = this.KE, n = i.getZoom(), e = i.options.SW, s = t.originalEvent.shiftKey ? n - e : n + e;
            return !(s > i.getMaxZoom()) && void ("center" === i.options._U ? i.setZoom(s) : i.cW(t.containerPoint, s))
        }
    }), T.Map.n({
        enableDoubleClickZoom: function () {
            this._U.enable()
        }, disableDoubleClickZoom: function () {
            this._U.disable()
        }, isDoubleClickZoom: function () {
            return this._U.TU
        }
    }), T.Map.m("Ow", "_U", T.Map.mU), T.Map._({qu: !0, Wu: 40, wu: 70}), T.Map.Eu = T.Lr.extend({
        AU: function () {
            T.Pq.on(this.KE.ow, "mousewheel", this.eu, this), this.Ru = 0
        }, Sr: function () {
            T.Pq.off(this.KE.ow, "mousewheel", this.eu, this)
        }, eu: function (t) {
            var i = T.Pq.qU(t), n = this.KE.options.Wu;
            this.Ru += i, this.ru = this.KE.Vw(t), this.Tu || (this.Tu = +new Date);
            var e = Math.max(n - (+new Date - this.Tu), 0);
            clearTimeout(this.tu), this.tu = setTimeout(T.d(this.Yu, this), e), T.Pq.Iw(t)
        }, Yu: function () {
            var t = this.KE, i = t.getZoom(), n = this.KE.options.aW || 0;
            t.iw();
            var e = this.Ru / (4 * this.KE.options.wu), s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(e)))) / Math.LN2,
                o = n ? Math.ceil(s / n) * n : s, r = t.gW(i + (this.Ru > 0 ? o : -o)) - i;
            this.Ru = 0, this.Tu = null, r && ("center" === t.options.qu ? t.setZoom(i + r) : t.cW(this.ru, i + r))
        }
    }), T.Map.n({
        enableScrollWheelZoom: function () {
            this.qu.enable()
        }, disableScrollWheelZoom: function () {
            this.qu.disable()
        }, isScrollWheelZoom: function () {
            return this.qu.TU
        }
    }), T.Map.m("Ow", "qu", T.Map.Eu), T.extend(T.Pq, {
        Uu: T.PQ.msPointer ? "MSPointerDown" : T.PQ.pointer ? "pointerdown" : "touchstart",
        uu: T.PQ.msPointer ? "MSPointerUp" : T.PQ.pointer ? "pointerup" : "touchend",
        nY: function (t, i, n) {
            function e(t) {
                var i;
                if (i = T.PQ.pointer ? T.Pq.Iu : t.touches.length, !(i > 1)) {
                    var n = Date.now(), e = n - (o || n);
                    r = t.touches ? t.touches[0] : t, h = e > 0 && e <= a, o = n
                }
            }

            function s() {
                if (h && !r.cancelBubble) {
                    if (T.PQ.pointer) {
                        var t, n, e = {};
                        for (n in r) t = r[n], e[n] = t && t.d ? t.d(r) : t;
                        r = e
                    }
                    r.type = "dblclick", i(r), o = null
                }
            }

            var o, r, h = !1, a = 250, u = "_tdt_", c = this.Uu, l = this.uu;
            return t[u + c + n] = e, t[u + l + n] = s, t[u + "dblclick" + n] = i, t.addEventListener(c, e, !1), t.addEventListener(l, s, !1), T.PQ.edge || t.addEventListener("dblclick", i, !1), this
        },
        mY: function (t, i) {
            var n = "_tdt_", e = t[n + this.Uu + i], s = t[n + this.uu + i], o = t[n + "dblclick" + i];
            return t.removeEventListener(this.Uu, e, !1), t.removeEventListener(this.uu, s, !1), T.PQ.edge || t.removeEventListener("dblclick", o, !1), this
        }
    }), T.extend(T.Pq, {
        iu: T.PQ.msPointer ? "MSPointerDown" : "pointerdown",
        Ou: T.PQ.msPointer ? "MSPointerMove" : "pointermove",
        ou: T.PQ.msPointer ? "MSPointerUp" : "pointerup",
        Pu: T.PQ.msPointer ? "MSPointerCancel" : "pointercancel",
        TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
        pu: {},
        Iu: 0,
        MY: function (t, i, n, e) {
            return "touchstart" === i ? this.Au(t, n, e) : "touchmove" === i ? this.au(t, n, e) : "touchend" === i && this.Su(t, n, e), this
        },
        removePointerListener: function (t, i, n) {
            var e = t["_tdt_" + i + n];
            return "touchstart" === i ? t.removeEventListener(this.iu, e, !1) : "touchmove" === i ? t.removeEventListener(this.Ou, e, !1) : "touchend" === i && (t.removeEventListener(this.ou, e, !1), t.removeEventListener(this.Pu, e, !1)), this
        },
        Au: function (t, i, n) {
            var e = T.d(function (t) {
                if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
                    T.Pq.preventDefault(t)
                }
                this.su(t, i)
            }, this);
            if (t["_tdt_touchstart" + n] = e, t.addEventListener(this.iu, e, !1), !this.Du) {
                var s = T.d(this.du, this);
                document.documentElement.addEventListener(this.iu, T.d(this.Fu, this), !0), document.documentElement.addEventListener(this.Ou, T.d(this.fu, this), !0), document.documentElement.addEventListener(this.ou, s, !0), document.documentElement.addEventListener(this.Pu, s, !0), this.Du = !0
            }
        },
        Fu: function (t) {
            this.pu[t.pointerId] = t, this.Iu++
        },
        fu: function (t) {
            this.pu[t.pointerId] && (this.pu[t.pointerId] = t)
        },
        du: function (t) {
            delete this.pu[t.pointerId], this.Iu--
        },
        su: function (t, i) {
            t.touches = [];
            for (var n in this.pu) t.touches.push(this.pu[n]);
            t.changedTouches = [t], i(t)
        },
        au: function (t, i, n) {
            var e = T.d(function (t) {
                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this.su(t, i)
            }, this);
            t["_tdt_touchmove" + n] = e, t.addEventListener(this.Ou, e, !1)
        },
        Su: function (t, i, n) {
            var e = T.d(function (t) {
                this.su(t, i)
            }, this);
            t["_tdt_touchend" + n] = e, t.addEventListener(this.ou, e, !1), t.addEventListener(this.Pu, e, !1)
        }
    }), T.Map._({Gu: !0}), T.Map.gu = T.Lr.extend({
        initialize: function (t) {
            this.KE = t, this.ow = t.ow, this.Hu = t.Sw.overlayPane
        }, AU: function () {
            T.Pq.on(this.ow, "touchstart", this.hu, this), T.Pq.on(this.ow, "touchmove", this.Ju, this), T.Pq.on(this.ow, "touchend", this.ju, this)
        }, Sr: function () {
            T.Pq.off(this.ow, "touchstart", this.hu), T.Pq.off(this.ow, "touchmove", this.Ju), T.Pq.off(this.ow, "touchend", this.ju)
        }, hu: function (t) {
            if (this.KE.VW) {
                var i = "touchstart";
                this.KE.EQ(i, this.Ku(t));
                var n = this;
                return this.timer = setTimeout(function () {
                    n.KE.EQ("longpress", n.Ku(t))
                }, 600), !1
            }
        }, Ju: function (t) {
            if (this.KE.VW) {
                var i = "touchmove";
                this.KE.EQ(i, this.Ku(t))
            }
        }, ju: function (t) {
            if (this.KE.VW) {
                var i = "touchend";
                return this.KE.EQ(i, this.Ku(t)), clearTimeout(this.timer), !1
            }
        }, Ku: function (t) {
            if (t.touches && 0 != t.changedTouches.length) {
                var i = this.KE.Vw(t.changedTouches[0]), n = this.KE.lw(i), e = this.KE.dw(n),
                    s = {lnglat: e, layerPoint: n, containerPoint: i, originalEvent: t};
                return s
            }
        }
    }), T.Map.m("Ow", "Gu", T.Map.gu), T.Map._({ku: T.PQ.touch && !T.PQ.android23, Lu: !1}), T.Map.lu = T.Lr.extend({
        AU: function () {
            T.mQ.rq(this.KE.ow, "tdt-touch-zoom"), T.Pq.on(this.KE.ow, "touchstart", this.hu, this)
        }, Sr: function () {
            T.mQ.tq(this.KE.ow, "tdt-touch-zoom"), T.Pq.off(this.KE.ow, "touchstart", this.hu, this)
        }, hu: function (t) {
            var i = this.KE;
            if (t.touches && 2 === t.touches.length && !i.eR && !this.Zu) {
                var n = i.Vw(t.touches[0]), e = i.Vw(t.touches[1]);
                this.Cu = i.getSize().fQ(2), this.Vu = i.NW(this.Cu), "center" !== i.options.ku && (this._pinchStartLatLng = i.NW(n.aQ(e).fQ(2))), this._startDist = n.distanceTo(e), this.cu = i.getZoom(), this.Dw = !1, this.Zu = !0, i.iw(), T.Pq.on(document, "touchmove", this.Ju, this).on(document, "touchend", this.ju, this), T.Pq.preventDefault(t)
            }
        }, Ju: function (t) {
            if (t.touches && 2 === t.touches.length && this.Zu) {
                var i = this.KE, n = i.Vw(t.touches[0]), e = i.Vw(t.touches[1]), s = n.distanceTo(e) / this._startDist;
                if (this.GW = i.Hw(s, this.cu), !i.options.Lu && (this.GW < i.getMinZoom() && s < 1 || this.GW > i.getMaxZoom() && s > 1) && (this.GW = i.gW(this.GW)), "center" === i.options.ku) {
                    if (this.bT = this.Vu, 1 === s) return
                } else {
                    var o = n.SQ(e).fQ(2).dQ(this.Cu);
                    if (1 === s && 0 === o.x && 0 === o.y) return;
                    this.bT = i.mq(i._q(this._pinchStartLatLng, this.GW).DQ(o), this.GW)
                }
                this.Dw || (i.WE(!0), this.Dw = !0), T.s.c(this.oU);
                var r = T.d(i.qE, i, this.bT, this.GW, {pinch: !0, JQ: !1});
                this.oU = T.s.V(r, this, !0), T.Pq.preventDefault(t)
            }
        }, ju: function () {
            return this.Dw && this.Zu ? (this.Zu = !1, T.s.c(this.oU), T.Pq.off(document, "touchmove", this.Ju).off(document, "touchend", this.ju), void (this.KE.options.Mr ? this.KE.He(this.bT, this.KE.gW(this.GW), !0, this.KE.options.snapZoom) : this.KE.CW(this.bT, this.KE.gW(this.GW)))) : void (this.Zu = !1)
        }
    }), T.Map.m("Ow", "ku", T.Map.lu), T.Map._({Bu: !0, vu: 15}), T.Map.Nu = T.Lr.extend({
        AU: function () {
            T.Pq.on(this.KE.ow, "touchstart", this.tU, this)
        }, Sr: function () {
            T.Pq.off(this.KE.ow, "touchstart", this.tU, this)
        }, tU: function (t) {
            if (t.touches) {
                if (T.Pq.preventDefault(t), this.bu = !0, t.touches.length > 1) return this.bu = !1, void clearTimeout(this.Mu);
                var i = t.touches[0], n = i.target;
                this.IU = this.OU = new T.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && T.mQ.rq(n, "tdt-active"), this.Mu = setTimeout(T.d(function () {
                    this.nu() && (this.bu = !1, this.uU(), this._u("contextmenu", i))
                }, this), 1e3), this._u("mousedown", i), T.Pq.on(document, {
                    touchmove: this.Ge,
                    touchend: this.uU
                }, this)
            }
        }, uU: function (t) {
            if (clearTimeout(this.Mu), T.Pq.off(document, {
                touchmove: this.Ge,
                touchend: this.uU
            }, this), this.bu && t && t.changedTouches) {
                var i = t.changedTouches[0], n = i.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && T.mQ.tq(n, "tdt-active"), this._u("mouseup", i), this.nu() && this._u("click", i)
            }
        }, nu: function () {
            return this.OU.distanceTo(this.IU) <= this.KE.options.vu
        }, Ge: function (t) {
            var i = t.touches[0];
            this.OU = new T.Point(i.clientX, i.clientY), this._u("mousemove", i)
        }, _u: function (t, i) {
            var n = document.createEvent("MouseEvents");
            n.IE = !0, i.target.EU = !0, n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(n)
        }
    }), T.PQ.touch && !T.PQ.pointer && T.Map.m("Ow", "Bu", T.Map.Nu), T.Map._({sE: !0}), T.Map.mu = T.Lr.extend({
        initialize: function (t) {
            this.KE = t, this.ow = t.ow, this.Hu = t.Sw.overlayPane
        }, AU: function () {
            T.Pq.on(this.ow, "mousedown", this.QI, this)
        }, Sr: function () {
            T.Pq.off(this.ow, "mousedown", this.QI, this)
        }, moved: function () {
            return this.Dw
        }, qI: function () {
            this.Dw = !1
        }, QI: function (t) {
            return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this.qI(), T.mQ.oq(), T.mQ.aq(), this.UU = this.KE.Vw(t), void T.Pq.on(document, {
                contextmenu: T.Pq.Iw,
                mousemove: this.aY,
                mouseup: this.WI,
                keydown: this.wI
            }, this))
        }, aY: function (t) {
            this.Dw || (this.Dw = !0, this.EI = T.mQ.D("div", "tdt-zoom-box", this.ow), T.mQ.rq(this.ow, "tdt-crosshair"), this.KE.EQ("boxzoomstart")), this.TY = this.KE.Vw(t);
            var i = new T.CQ(this.TY, this.UU), n = i.getSize();
            T.mQ.setPosition(this.EI, i.min), this.EI.style.width = n.x + "px", this.EI.style.height = n.y + "px"
        }, eI: function () {
            this.Dw && (T.mQ.qq(this.EI), T.mQ.tq(this.ow, "tdt-crosshair")), T.mQ.pq(), T.mQ.Sq(), T.Pq.off(document, {
                contextmenu: T.Pq.Iw,
                mousemove: this.aY,
                mouseup: this.WI,
                keydown: this.wI
            }, this)
        }, WI: function (t) {
            if ((1 === t.which || 1 === t.button) && (this.eI(), this.Dw)) {
                setTimeout(T.d(this.qI, this), 0);
                var i = new T.kq(this.KE.NW(this.UU), this.KE.NW(this.TY));
                this.KE.mW(i).EQ("boxzoomend", {boxZoomBounds: i})
            }
        }, wI: function (t) {
            27 === t.keyCode && this.eI()
        }
    }), T.Map.m("Ow", "sE", T.Map.mu), T.Map._({Or: !0, RI: 80}), T.Map.rI = T.Lr.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        }, initialize: function (t) {
            this.KE = t, this.TI(t.options.RI), this.tI(t.options.SW)
        }, AU: function () {
            var t = this.KE.ow;
            t.tabIndex <= 0 && (t.tabIndex = "0"), T.Pq.on(t, {
                focus: this.YI,
                blur: this.UI,
                mousedown: this.QI
            }, this), this.KE.on({focus: this.uI, blur: this.II}, this)
        }, Sr: function () {
            this.II(), T.Pq.off(this.KE.ow, {
                focus: this.YI,
                blur: this.UI,
                mousedown: this.QI
            }, this), this.KE.off({focus: this.uI, blur: this.II}, this)
        }, QI: function () {
            if (!this.iI) {
                var t = document.body, i = document.documentElement, n = t.scrollTop || i.scrollTop,
                    e = t.scrollLeft || i.scrollLeft;
                this.KE.ow.focus(), window.scrollTo(e, n)
            }
        }, YI: function () {
            this.iI = !0, this.KE.EQ("focus")
        }, UI: function () {
            this.iI = !1, this.KE.EQ("blur")
        }, TI: function (t) {
            var i, n, e = this._panKeys = {}, s = this.keyCodes;
            for (i = 0, n = s.left.length; i < n; i++) e[s.left[i]] = [-1 * t, 0];
            for (i = 0, n = s.right.length; i < n; i++) e[s.right[i]] = [t, 0];
            for (i = 0, n = s.down.length; i < n; i++) e[s.down[i]] = [0, t];
            for (i = 0, n = s.up.length; i < n; i++) e[s.up[i]] = [0, -1 * t]
        }, tI: function (t) {
            var i, n, e = this.OI = {}, s = this.keyCodes;
            for (i = 0, n = s.zoomIn.length; i < n; i++) e[s.zoomIn[i]] = t;
            for (i = 0, n = s.zoomOut.length; i < n; i++) e[s.zoomOut[i]] = -t
        }, uI: function () {
            T.Pq.on(document, "keydown", this.wI, this)
        }, II: function () {
            T.Pq.off(document, "keydown", this.wI, this)
        }, wI: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, n = t.keyCode, e = this.KE;
                if (n in this._panKeys) {
                    if (e.eE && e.eE.DT) return;
                    i = this._panKeys[n], t.shiftKey && (i = T.sQ(i).GQ(3)), e.panBy(i), e.options.maxBounds && e.ew(e.options.maxBounds)
                } else if (n in this.OI) e.setZoom(e.getZoom() + (t.shiftKey ? 3 : 1) * this.OI[n]); else {
                    if (27 !== n) return;
                    e.UT()
                }
                T.Pq.Iw(t)
            }
        }
    }), T.Map.n({
        enableKeyboard: function () {
            this.Or.enable()
        }, disableKeyboard: function () {
            this.Or.disable()
        }, isKeyboard: function () {
            return this.Or.TU
        }
    }), T.Map.m("Ow", "Or", T.Map.rI), T.Lr.kr = T.Lr.extend({
        initialize: function (t) {
            this.oI = t
        }, AU: function () {
            var t = this.oI.Gr;
            this.GU || (this.GU = new T.QU(t, t, !0)), this.GU.on({
                dragstart: this.gU,
                drag: this.HU,
                dragend: this.hU
            }, this).enable(), T.mQ.rq(t, "tdt-marker-draggable")
        }, Sr: function () {
            this.GU.off({
                dragstart: this.gU,
                drag: this.HU,
                dragend: this.hU
            }, this).disable(), this.oI.Gr && T.mQ.tq(this.oI.Gr, "tdt-marker-draggable")
        }, moved: function () {
            return this.GU && this.GU.Dw
        }, gU: function () {
            this.oI.UT().EQ("movestart").EQ("dragstart")
        }, HU: function (t) {
            var i = this.oI, n = i.Jr, e = T.mQ.getPosition(i.Gr), s = i.KE.dw(e);
            n && T.mQ.setPosition(n, e), i.pr = s, t.lnglat = s, i.EQ("move", t).EQ("drag", t)
        }, hU: function (t) {
            var i = (this.oI.Jr, T.mQ.getPosition(this.oI.Gr)), n = this.oI.KE.dw(i);
            this.oI.pr = n, t.lnglat = n, this.oI.EQ("moveend").EQ("dragend", t)
        }
    }), T.Control = T.B.extend({
        options: {position: T_ANCHOR_TOP_RIGHT}, initialize: function (t) {
            T.setOptions(this, t)
        }, getPosition: function () {
            return this.options.position
        }, setPosition: function (t) {
            var i = this.KE;
            return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
        }, getContainer: function () {
            return this.ow
        }, show: function () {
            this.ow.style.display = "block"
        }, hide: function () {
            this.ow.style.display = "none"
        }, isHidden: function () {
            return "none" == this.ow.style.display
        }, setOptions: function (t) {
            T.s.extend(this.options, t)
        }, setOffset: function (t) {
            this.point = t, this.ow.style.left = t.x + "px", this.ow.style.top = t.y + "px"
        }, getOffset: function () {
            return this.point
        }, addTo: function (t) {
            this.qq(), this.KE = t;
            var i = this.ow = this.onAdd(t), n = this.getPosition(), e = t.PI[n];
            return T.mQ.rq(i, "tdt-control"), n.indexOf("bottom") !== -1 ? e.insertBefore(i, e.firstChild) : e.appendChild(i), this
        }, qq: function () {
            return this.KE ? (T.mQ.qq(this.ow), this.onRemove && this.onRemove(this.KE), this.KE = null, this) : this
        }, pI: function (t) {
            this.KE && t && t.screenX > 0 && t.screenY > 0 && this.KE.getContainer().focus()
        }
    }), T.AI = function (t) {
        return new T.Control(t)
    }, T.Map.n({
        addControl: function (t) {
            return t.addTo(this), this.EQ("addcontrol", {addcontrol: t}), this
        }, removeControl: function (t) {
            return t.qq(), this.EQ("removecontrol", {removecontrol: t}), this
        }, nw: function () {
            function t(t, s) {
                var o = n + t + " " + n + s;
                i[t + s] = T.mQ.D("div", o, e)
            }

            var i = this.PI = {}, n = "tdt-", e = this.aI = T.mQ.D("div", n + "control-container", this.ow);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        }, pw: function () {
            T.mQ.qq(this.aI)
        }
    }), T.Control.Zoom = T.Control.extend({
        options: {
            position: T_ANCHOR_TOP_LEFT,
            zoomInText: "+",
            zoomInTitle: "放大",
            zoomOutText: "-",
            zoomOutTitle: "缩小"
        }, onAdd: function (t) {
            var i = "tdt-control-zoom", n = T.mQ.D("div", i + " tdt-bar"), e = this.options;
            return this.SI = this.sI(e.zoomInText, e.zoomInTitle, i + "-in", n, this.DI), this.dI = this.sI(e.zoomOutText, e.zoomOutTitle, i + "-out", n, this.FI), this.fI(), t.on("zoomend zoomlevelschange", this.fI, this), t.on("minzoom", this.fI, this), t.on("maxzoom", this.fI, this), n
        }, onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this.fI, this), t.off("minzoom", this.fI, this), t.off("maxzoom", this.fI, this)
        }, disable: function () {
            return this.GI = !0, this.fI(), this
        }, enable: function () {
            return this.GI = !1, this.fI(), this
        }, DI: function (t) {
            this.GI || this.KE.zoomIn(this.KE.options.SW * (t.shiftKey ? 3 : 1))
        }, FI: function (t) {
            this.GI || this.KE.zoomOut(this.KE.options.SW * (t.shiftKey ? 3 : 1))
        }, sI: function (t, i, n, e, s) {
            var o = T.mQ.D("a", n, e);
            return o.innerHTML = t, o.href = "#", o.title = i, T.Pq.on(o, "mousedown dblclick", T.Pq.stopPropagation).on(o, "click", T.Pq.Iw).on(o, "click", s, this).on(o, "click", this.pI, this), o
        }, fI: function () {
            var t = this.KE, i = "tdt-disabled";
            T.mQ.tq(this.SI, i), T.mQ.tq(this.dI, i), (this.GI || t.GW === t.getMinZoom()) && T.mQ.rq(this.dI, i), (this.GI || t.GW === t.getMaxZoom()) && T.mQ.rq(this.SI, i)
        }
    }), T.Map._({gI: !1}), T.Map.m(function () {
        this.options.gI && (this.gI = new T.Control.Zoom, this.addControl(this.gI))
    }), T.AI.zoom = function (t) {
        return new T.Control.Zoom(t)
    }, T.Control.HI = T.Control.extend({
        options: {
            position: T_ANCHOR_BOTTOM_LEFT,
            hI: '<div style="height:24px"><img style="background-color:transparent;background-image:url(' + T.w.e + "/logo.png);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src=" + T.w.e + '/logo.png);MozOpacity:1;opacity:1;" src="' + T.w.e + '/logo.png" width="53px" height="22px" opacity="0"/><div style="display:inline;position:relative;bottom:4px;white-space:nowrap;padding:0 0 0 3px;">GS(2017)508号</div></div>'
        }, initialize: function (t) {
            T.setOptions(this, t), this.JI = {}
        }, onAdd: function (t) {
            t.BE = this, this.ow = T.mQ.D("div", "tdt-control-copyright"), T.Pq && T.Pq.PT(this.ow);
            for (var i in t.JW) t.JW[i].cE && this.vE(t.JW[i].cE());
            return this.oe(), this.ow
        }, jI: function (t) {
            return this.options.hI = t, this.oe(), this
        }, vE: function (t) {
            return t ? (this.JI[t] || (this.JI[t] = 0), this.JI[t]++, this.oe(), this) : this
        }, bE: function (t) {
            return t ? (this.JI[t] && (this.JI[t]--, this.oe()), this) : this
        }, oe: function () {
            if (this.KE) {
                var t = [];
                for (var i in this.JI) this.JI[i] && t.push(i);
                var n = [];
                this.options.hI && n.push(this.options.hI), t.length && n.push(t.join(", ")), this.ow.innerHTML = n.join(" | ")
            }
        }
    }), T.Map._({BE: !0}), T.Map.m(function () {
        this.options.BE && (new T.Control.HI).addTo(this)
    }), T.AI.ue = function (t) {
        return new T.Control.HI(t)
    }, T.Control.Copyright = T.Control.HI.extend({
        options: {position: T_ANCHOR_BOTTOM_RIGHT, hI: ""}, initialize: function (t) {
            T.setOptions(this, t), this.KI = []
        }, addCopyright: function (t) {
            if (this.KI["str" + t.id]) return void alert("copyright id 重复");
            this.KI.push(t), this.KI["str" + t.id] = t;
            var i = T.mQ.D("div", "tdt-control-copyright");
            T.Pq && T.Pq.PT(i), i.innerHTML = t.content, t._span = i, this.ow.appendChild(i);
            var n = this.KE.getCenter();
            this.kI(n)
        }, removeCopyright: function (t) {
            this.ow.removeChild(this.KI["str" + t.id]._span), this.KI["str" + t.id] = null;
            for (var i = 0; i < this.KI.length; i++) if (this.KI[i].id == t.id) {
                this.KI.splice(i, 1);
                break
            }
        }, kI: function (t) {
            if (this.KE) {
                if (t instanceof T.Fq) var i = t; else var i = t.target.getCenter();
                for (var n = 0; n < this.KI.length; n++) this.KI[n].bounds && (this.KI[n].bounds.contains(i) ? "none" == this.KI[n]._span.style.display && (this.KI[n]._span.style.display = "") : this.KI[n]._span.style.display = "none")
            }
        }, getCopyright: function (t) {
            return this.KI["str" + t]
        }, getCopyrightCollection: function () {
            return this.KI
        }, onAdd: function (t) {
            return this.KE = t, t.BE = this, this.ow = T.mQ.D("div", "tdt-control-copyright"), T.Pq && T.Pq.PT(this.ow), this.oe(), this.LI = t.on("move", this.kI, this), this.ow
        }, onRemove: function (t) {
            T.mQ.qq(this.ow), this.ow = null, t.off("move"), this.LI = null
        }
    }), T.Control.Scale = T.Control.extend({
        options: {position: T_ANCHOR_BOTTOM_LEFT, cr: 100, lI: !0, ZI: !0, type: 1}, onAdd: function (t) {
            var i = "tdt-control-scale", n = T.mQ.D("div", i), e = this.options;
            return this.CI(e, i + "-line", n), t.on(e.Ye ? "moveend" : "move", this.oe, this), t.DE(this.oe, this), n
        }, onRemove: function (t) {
            t.off(this.options.Ye ? "moveend" : "move", this.oe, this)
        }, setColor: function (t) {
            this.VI && (this.VI.style.borderColor = t, this.cI.style.color = t), this.BI && 1 == this.type && (this.BI.style.borderColor = t, this.vI.style.color = t)
        }, CI: function (t, i, n) {
            this.type = t.type, t.lI && (this.VI = T.mQ.D("div", i, n), this.cI = T.mQ.D("div", "tdt-control-scale-m", this.VI)), t.ZI && 1 == t.type && (this.BI = T.mQ.D("div", "tdt-control-scale-linebottom", n), this.vI = T.mQ.D("div", "tdt-control-scale-i", this.BI))
        }, oe: function () {
            var t = this.KE, i = t.getSize().y / 2, n = t.distance(t.NW([0, i]), t.NW([this.options.cr, i]));
            this.NI(n)
        }, NI: function (t) {
            this.options.lI && t && this.bI(t), this.options.ZI && t && 1 == this.type && this.MI(t)
        }, bI: function (t) {
            var i = this.nI(t), n = i < 1e3 ? i + " 米" : i / 1e3 + " 公里";
            this._I(this.cI, n, i / t, this.VI)
        }, MI: function (t) {
            var i, n, e, s = 3.2808399 * t;
            s > 5280 ? (i = s / 5280, n = this.nI(i), this._I(this.vI, n + " 英里", n / i, this.BI)) : (e = this.nI(s), this._I(this.vI, e + " 英尺", e / s, this.BI))
        }, _I: function (t, i, n, e) {
            e.style.width = Math.round(this.options.cr * n) + "px", t.innerHTML = i
        }, nI: function (t) {
            var i = Math.pow(10, (Math.floor(t) + "").length - 1), n = t / i;
            return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, i * n
        }
    }), T.AI.scale = function (t) {
        return new T.Control.Scale(t)
    }, T.Control.mI = T.Control.extend({
        options: {Qi: !0, position: T_ANCHOR_TOP_RIGHT, qi: !0, Wi: !1}, initialize: function (t, i, n) {
            T.setOptions(this, n), this.JW = [], this.wi = 0, this.Ei = !1;
            for (var e in t) this.ei(t[e], e);
            for (e in i) this.ei(i[e], e, !0)
        }, onAdd: function (t) {
            return this.dW(), this.oe(), this.KE = t, t.on("zoomend", this.Ri, this), this.ow
        }, onRemove: function () {
            this.KE.off("zoomend", this.Ri, this);
            for (var t = 0; t < this.JW.length; t++) this.JW[t].layer.off("add remove", this.ri, this)
        }, addBaseLayer: function (t, i) {
            return this.ei(t, i), this.KE ? this.oe() : this
        }, addOverlay: function (t, i) {
            return this.ei(t, i, !0), this.KE ? this.oe() : this
        }, removeLayer: function (t) {
            t.off("add remove", this.ri, this);
            var i = this._getLayer(T.F(t));
            return i && this.JW.splice(this.JW.indexOf(i), 1), this.KE ? this.oe() : this
        }, expand: function () {
            T.mQ.rq(this.ow, "tdt-control-layers-expanded"), this.Ti.style.height = null;
            var t = this.KE.getSize().y - (this.ow.offsetTop + 50);
            return t < this.Ti.clientHeight ? (T.mQ.rq(this.Ti, "tdt-control-layers-scrollbar"), this.Ti.style.height = t + "px") : T.mQ.tq(this.Ti, "tdt-control-layers-scrollbar"), this.Ri(), this
        }, collapse: function () {
            return L.DomUtil.tq(this.ow, "tdt-control-layers-expanded"), this
        }, dW: function () {
            var t = "tdt-control-layers", i = this.ow = T.mQ.D("div", t);
            i.setAttribute("aria-haspopup", !0), T.Pq.PT(i), T.PQ.touch || T.Pq.oT(i);
            var n = this.Ti = T.mQ.D("form", t + "-list");
            if (this.options.Qi) {
                T.PQ.android || T.Pq.on(i, {mouseenter: this.expand, mouseleave: this.collapse}, this);
                var e = this.ti = T.mQ.D("a", t + "-toggle", i);
                e.href = "#", e.title = "mI", T.PQ.touch ? T.Pq.on(e, "click", T.Pq.Iw).on(e, "click", this.expand, this) : T.Pq.on(e, "focus", this.expand, this), T.Pq.on(n, "click", function () {
                    setTimeout(T.d(this.Yi, this), 0)
                }, this), this.KE.on("click", this.collapse, this)
            } else this.expand();
            this.Ui = T.mQ.D("div", t + "-base", n), this.ui = T.mQ.D("div", t + "-separator", n), this.Ii = T.mQ.D("div", t + "-overlays", n), i.appendChild(n)
        }, _getLayer: function (t) {
            for (var i = 0; i < this.JW.length; i++) if (this.JW[i] && T.F(this.JW[i].layer) === t) return this.JW[i]
        }, ei: function (t, i, n) {
            t.on("add remove", this.ri, this), this.JW.push({
                layer: t,
                name: i,
                overlay: n
            }), this.options.qi && t.setZIndex && (this.wi++, t.setZIndex(this.wi))
        }, oe: function () {
            if (!this.ow) return this;
            T.mQ.Wq(this.Ui), T.mQ.Wq(this.Ii);
            var t, i, n, e, s = 0;
            for (n = 0; n < this.JW.length; n++) e = this.JW[n], this.ii(e), i = i || e.overlay, t = t || !e.overlay, s += e.overlay ? 0 : 1;
            return this.options.Wi && (t = t && s > 1, this.Ui.style.display = t ? "" : "none"), this.ui.style.display = i && t ? "" : "none", this
        }, ri: function (t) {
            this.Ei || this.oe();
            var i = this._getLayer(T.F(t.target)),
                n = i.overlay ? "aQ" === t.type ? "overlayadd" : "overlayremove" : "aQ" === t.type ? "baselayerchange" : null;
            n && this.KE.EQ(n, i)
        }, Oi: function (t, i) {
            var n = '<input type="radio" class="tdt-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                e = document.createElement("div");
            return e.innerHTML = n, e.firstChild
        }, ii: function (t) {
            var i, n = document.createElement("label"), e = this.KE.hasLayer(t.layer);
            t.overlay ? (i = document.createElement("input"), i.type = "checkbox", i.className = "tdt-control-layers-selector", i.defaultChecked = e) : i = this.Oi("tdt-base-layers", e), i.layerId = T.F(t.layer), T.Pq.on(i, "click", this.Yi, this);
            var s = document.createElement("span");
            s.innerHTML = " " + t.name;
            var o = document.createElement("div");
            n.appendChild(o), o.appendChild(i), o.appendChild(s);
            var r = t.overlay ? this.Ii : this.Ui;
            return r.appendChild(n), this.Ri(), n
        }, Yi: function () {
            var t, i, n, e = this.Ti.getElementsByTagName("input"), s = [], o = [];
            this.Ei = !0;
            for (var r = e.length - 1; r >= 0; r--) t = e[r], i = this._getLayer(t.layerId).layer, n = this.KE.hasLayer(i), t.checked && !n ? s.push(i) : !t.checked && n && o.push(i);
            for (r = 0; r < o.length; r++) this.KE.removeLayer(o[r]);
            for (r = 0; r < s.length; r++) this.KE.addLayer(s[r]);
            this.Ei = !1, this.pI()
        }, Ri: function () {
            for (var t, i, n = this.Ti.getElementsByTagName("input"), e = this.KE.getZoom(), s = n.length - 1; s >= 0; s--) t = n[s], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && e < i.options.minZoom || void 0 !== i.options.maxZoom && e > i.options.maxZoom
        }, oi: function () {
            return this.expand()
        }, Pi: function () {
            return this.collapse()
        }
    }), T.AI.layers = function (t, i, n) {
        return new T.Control.mI(t, i, n)
    }, T.Control.MapType = T.Control.extend({
        includes: T.OQ.oQ,
        options: {
            position: T_ANCHOR_TOP_RIGHT,
            behavior: "previous",
            expand: "horizontal",
            qi: !0,
            maxLayersInRow: 5,
            manageLayers: !0
        },
        initialize: function (t, i) {
            T.s.Z(arguments[0]) || (i = t, this.pi(), t = T.w.Ai), T.setOptions(this, i), this._expandDirection = this.options.position.indexOf("left") != -1 ? "right" : "left", this.options.manageLayers && this.on("activelayerchange", this.ai, this), this.Si(t)
        },
        pi: function () {
            T.w.Ai = [{
                title: "地图",
                icon: T.Icon.Default.imagePath + "/map/maptype/vector.png",
                layer: TMAP_NORMAL_MAP
            }, {
                title: "卫星",
                icon: T.Icon.Default.imagePath + "/map/maptype/satellite.png",
                layer: TMAP_SATELLITE_MAP
            }, {
                title: "卫星混合",
                icon: T.Icon.Default.imagePath + "/map/maptype/satellitepoi.png",
                layer: TMAP_HYBRID_MAP
            }, {
                title: "地形",
                icon: T.Icon.Default.imagePath + "/map/maptype/terrain.png",
                layer: TMAP_TERRAIN_MAP
            }, {
                title: "地形混合",
                icon: T.Icon.Default.imagePath + "/map/maptype/terrainpoi.png",
                layer: TMAP_TERRAIN_HYBRID_MAP
            }]
        },
        onAdd: function (t) {
            return this.ow = T.mQ.D("div", "tdt-iconLayers"), T.mQ.rq(this.ow, "tdt-iconLayers_" + this.options.position), this.si(), t.on("click", this.collapse, this), this.options.manageLayers && this.ai(), this.ow
        },
        onRemove: function (t) {
            t.off("click", this.collapse, this)
        },
        Si: function (t) {
            this.JW = {}, t.map(function (t) {
                var i = T.F(t.layer);
                this.JW[i] = T.extend(t, {id: i})
            }.d(this)), this.ow && this.si()
        },
        Di: function (t) {
            var i = t && this.JW[T.F(t)];
            i && i.id !== this._activeLayerId && (this._previousLayerId = this._activeLayerId, this._activeLayerId = i.id, this.ow && this.si(), this.EQ("activelayerchange", {layer: t}))
        },
        expand: function () {
            this.di().slice(1).map(function (t) {
                var i = this.Fi(t.id);
                T.mQ.tq(i, "tdt-iconLayers-layerCell_hidden")
            }.d(this))
        },
        collapse: function () {
            this.di().slice(1).map(function (t) {
                var i = this.Fi(t.id);
                T.mQ.rq(i, "tdt-iconLayers-layerCell_hidden")
            }.d(this))
        },
        fi: function () {
            return this._activeLayerId ? this.JW[this._activeLayerId] : length(this.JW) ? first(this.JW) : null
        },
        Gi: function () {
            var t = this.fi();
            return t ? this._previousLayerId ? this.JW[this._previousLayerId] : find(this.JW, function (i) {
                return i.id !== t.id
            }.d(this)) || null : null
        },
        gi: function () {
            var t = [], i = this.fi() ? this.fi().id : null, n = this.Gi() ? this.Gi().id : null;
            return each(this.JW, function (e) {
                e.id !== i && e.id !== n && t.push(e)
            }), t
        },
        di: function () {
            var t = {};
            return t.previous = function () {
                var t = this.gi();
                return this.fi() && t.unshift(this.fi()), this.Gi() && t.unshift(this.Gi()), t
            }, t[this.options.behavior].apply(this, arguments)
        },
        Fi: function (t) {
            if ("Microsoft Internet Explorer" != navigator.appName || "MSIE8.0" != navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), "")) var i = this.ow.getElementsByClassName("tdt-iconLayers-layerCell"); else var i = document.getElementsByClassName("tdt-iconLayers-layerCell", this.ow);
            for (var n = 0; n < i.length; n++) if (i[n].getAttribute("data-layerid") == t) return i[n]
        },
        Hi: function (t) {
            var i = T.mQ.D("div", "tdt-iconLayers-layer");
            if (i.setAttribute("data-layerid", t.id), t.title) {
                var n = T.mQ.D("div", "tdt-iconLayers-layerTitleContainer"),
                    e = T.mQ.D("div", "tdt-iconLayers-layerTitle"), s = T.mQ.D("div", "tdt-iconLayers-layerCheckIcon");
                e.innerHTML = t.title, n.appendChild(e), i.appendChild(n), i.appendChild(s)
            }
            return t.icon && i.setAttribute("style", "background-image: url('" + t.icon + "')"), i
        },
        hi: function () {
            for (var t, i, n = this.di(), e = this.fi() && this.fi().id, s = 0; s < n.length; s++) s % this.options.maxLayersInRow === 0 && (t = T.mQ.D("div", "tdt-iconLayers-layersRow"), this.options.position.indexOf("bottom") === -1 ? this.ow.appendChild(t) : prepend(this.ow, t)), i = T.mQ.D("div", "tdt-iconLayers-layerCell"), i.setAttribute("data-layerid", n[s].id), 0 !== s && T.mQ.rq(i, "tdt-iconLayers-layerCell_hidden"), n[s].id === e && T.mQ.rq(i, "tdt-iconLayers-layerCell_active"), "left" === this._expandDirection ? T.mQ.rq(i, "tdt-iconLayers-layerCell_expandLeft") : T.mQ.rq(i, "tdt-iconLayers-layerCell_expandRight"), i.appendChild(this.Hi(n[s])), this.options.position.indexOf("right") === -1 ? t.appendChild(i) : prepend(t, i)
        },
        Ji: function (t) {
            T.Pq.stopPropagation(t);
            var i = (t.target || t.srcElement, (t.currentTarget || t.target || t.srcElement).getAttribute("data-layerid")),
                n = this.JW[i];
            "undefined" != typeof n && (this.Di(n.layer), this.expand())
        },
        ji: function () {
            if (each(this.JW, function (t) {
                var i = this.Fi(t.id);
                i && T.Pq.on(i, "click", this.Ji.d(this))
            }.d(this)), "Microsoft Internet Explorer" != navigator.appName || "MSIE8.0" != navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), "")) var t = this.ow.getElementsByClassName("tdt-iconLayers-layersRow"); else var t = document.getElementsByClassName("tdt-iconLayers-layersRow", this.ow);
            for (var i = function (t) {
                T.Pq.stopPropagation(t), this.expand()
            }.d(this), n = function (t) {
                T.Pq.stopPropagation(t), this.collapse()
            }.d(this), e = function (t) {
                T.Pq.stopPropagation(t)
            }, s = 0; s < t.length; s++) {
                var o = t[s];
                T.Pq.on(o, "mouseenter", i), T.Pq.on(o, "mouseleave", n), T.Pq.on(o, "mousemove", e)
            }
        },
        si: function () {
            this.ow.innerHTML = "", this.hi(), this.ji()
        },
        ai: function () {
            if (this.KE) {
                var t = this.fi(), i = this.Gi();
                i ? this.KE.clearMapType(i.layer) : each(this.JW, function (t) {
                    var i = t.layer;
                    this.KE.clearMapType(i)
                }.d(this)), t && this.KE.setMapType(t.layer)
            }
        }
    }), T.AI.maptype = function (t, i) {
        return new T.Control.MapType(t, i)
    }, Array.prototype.map || (Array.prototype.map = function (t, i) {
        var n, e, s;
        if (null == this) throw new TypeError(" this is null or not defined");
        var o = Object(this), r = o.length >>> 0;
        if ("[object Function]" != Object.prototype.toString.call(t)) throw new TypeError(t + " is not a function");
        for (i && (n = i), e = new Array(r), s = 0; s < r;) {
            var h, a;
            s in o && (h = o[s], a = t.call(n, h, s, o), e[s] = a), s++
        }
        return e
    }), Function.prototype.d || (Function.prototype.d = function (t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var i = Array.prototype.slice.call(arguments, 1), n = this, e = function () {
        }, s = function () {
            return n.apply(this instanceof e && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
        };
        return e.prototype = this.prototype, s.prototype = new e, s
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
        var i = -1;
        if (0 == this.length) return i;
        for (var n = 0; n < this.length; n++) if (this[n] === t) {
            i = n;
            break
        }
        return i
    }), document.getElementsByClassName || (document.getElementsByClassName = function (t, i) {
        for (var n = [], e = (i || document).getElementsByTagName("*"), s = e.length, o = t.split(" "), r = o.length, h = 0; h < s; h++) {
            for (var a = e[h].className.split(" "), u = (a.length, []), c = 0; c < r; c++) a.indexOf(o[c]) !== -1 && u.push(!0);
            u.length === r && n.push(e[h])
        }
        return n
    }), T.Ki = T.QQ.extend({
        run: function (t, i, n, e) {
            this.Iw(), this.ki = t, this.DT = !0, this.Li = n || .25, this.li = 1 / Math.max(e || .5, .2), this.IU = T.mQ.getPosition(t), this.Zi = i.DQ(this.IU), this.Tu = +new Date, this.EQ("start"), this.Ci()
        }, Iw: function () {
            this.DT && (this.Vi(!0), this.ci())
        }, Ci: function () {
            this.Bi = T.s.V(this.Ci, this), this.Vi()
        }, Vi: function (t) {
            var i = +new Date - this.Tu, n = 1e3 * this.Li;
            i < n ? this.vi(this.Ni(i / n), t) : (this.vi(1), this.ci())
        }, vi: function (t, i) {
            var n = this.IU.aQ(this.Zi.GQ(t));
            i && n.jQ(), T.mQ.setPosition(this.ki, n), this.EQ("step")
        }, ci: function () {
            T.s.c(this.Bi), this.DT = !1, this.EQ("end")
        }, Ni: function (t) {
            return 1 - Math.pow(1 - t, this.li)
        }
    }), T.Map.n({
        HW: function (t, i, n) {
            if (i = void 0 === i ? this.GW : this.gW(i), t = this.rw(T.Gq(t), i, this.options.maxBounds), n = n || {}, this.iw(), this.VW && !n.reset && n !== !0) {
                void 0 !== n.tw && (n.zoom = T.extend({tw: n.tw}, n.zoom), n.Ww = T.extend({
                    tw: n.tw,
                    duration: n.duration
                }, n.Ww));
                var e = this.GW !== i ? this.bi && this.bi(t, i, n.zoom) : this.Mi(t, n.Ww);
                if (e) return clearTimeout(this.uw), this
            }
            return this.CW(t, i), this
        }, centerAndZoom: function (t, i, n) {
            this.HW(t, i, n)
        }, panBy: function (t, i) {
            if (t = T.sQ(t).JQ(), i = i || {}, !t.x && !t.y) return this.EQ("moveend");
            if (i.tw !== !0 && !this.getSize().contains(t)) return this.CW(this.mq(this._q(this.getCenter()).aQ(t)), this.getZoom()), this;
            if (this.eE || (this.eE = new T.Ki, this.eE.on({
                step: this.ni,
                end: this._i
            }, this)), i.bU || this.EQ("movestart"), i.tw !== !1) {
                T.mQ.rq(this.Pw, "tdt-pan-anim");
                var n = this.Zw().DQ(t).JQ();
                this.eE.run(this.Pw, n, i.duration || .25, i.DU)
            } else this.ww(t), this.EQ("move").EQ("moveend");
            return this
        }, ni: function () {
            this.EQ("move")
        }, _i: function () {
            T.mQ.tq(this.Pw, "tdt-pan-anim"), this.EQ("moveend")
        }, Mi: function (t, i) {
            var n = this.FE(t).kQ();
            return !((i && i.tw) !== !0 && !this.getSize().contains(n)) && (this.panBy(n, i), !0)
        }
    }), T.Map._({Mr: !0, mi: 4});
    var zoomAnimated = T.mQ.iq && T.PQ.any3d && !T.PQ.mobileOpera;
    zoomAnimated && T.Map.m(function () {
        this.CE = this.options.Mr, this.CE && (this.QO(), T.Pq.on(this.qO, T.mQ.Oq, this.WO, this))
    }), T.Map.n(zoomAnimated ? {
        QO: function () {
            var t = this.qO = T.mQ.D("div", "tdt-proxy tdt-zoom-animated");
            this.Sw.mapPane.appendChild(t), this.on("ge", function (i) {
                var n = T.mQ.Iq, e = t.style[n];
                T.mQ.uq(t, this._q(i.center, i.zoom), this.BW(i.zoom, 1)), e === t.style[n] && this.eR && this.wO()
            }, this), this.on("load moveend", function () {
                var i = this.getCenter(), n = this.getZoom();
                T.mQ.uq(t, this._q(i, n), this.BW(n, 1))
            }, this)
        }, WO: function (t) {
            this.eR && t.propertyName.indexOf("MQ") >= 0 && this.wO()
        }, EO: function () {
            return !this.ow.getElementsByClassName("tdt-zoom-animated").length
        }, bi: function (t, i, n) {
            if (this.eR) return !0;
            if (n = n || {}, !this.CE || n.tw === !1 || this.EO() || Math.abs(i - this.GW) > this.options.mi) return !1;
            var e = this.BW(i), s = this.FE(t).fQ(1 - 1 / e);
            return !(n.tw !== !0 && !this.getSize().contains(s)) && (T.s.V(function () {
                this.WE(!0).He(t, i, !0)
            }, this), !0)
        }, He: function (t, i, n, e) {
            n && (this.eR = !0, this.eO = t, this.rR = i, T.mQ.rq(this.Pw, "tdt-zoom-anim")), this.EQ("ge", {
                center: t,
                zoom: i,
                noUpdate: e
            }), setTimeout(T.d(this.wO, this), 250)
        }, wO: function () {
            this.eR && (T.mQ.tq(this.Pw, "tdt-zoom-anim"), this.eR = !1, this.qE(this.eO, this.rR), T.s.V(function () {
                this.QE(!0)
            }, this))
        }
    } : {}), T.Map.n({
        enableContinuousZoom: function () {
            this.options.mi = 4
        }, disableContinuousZoom: function () {
            this.options.mi = 0
        }, isContinuousZoom: function () {
            return 4 == this.options.mi
        }
    }), T.Map.n({
        be: function (t, i, n) {
            function e(t) {
                var i = t ? -1 : 1, n = t ? v : m, e = v * v - m * m + i * g * g * y * y, s = 2 * n * g * y, o = e / s,
                    r = Math.sqrt(o * o + 1) - o, h = r < 1e-9 ? -18 : Math.log(r);
                return h
            }

            function s(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }

            function o(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }

            function r(t) {
                return s(t) / o(t)
            }

            function h(t) {
                return m * (o(E) / o(E + w * t))
            }

            function a(t) {
                return m * (o(E) * r(E + w * t) - s(E)) / g
            }

            function u(t) {
                return 1 - Math.pow(1 - t, 1.5)
            }

            function c() {
                var n = (Date.now() - Q) / x, e = u(n) * q;
                n <= 1 ? (this.EE = T.s.V(c, this), this.qE(this.mq(l.aQ(f.DQ(l).GQ(a(e) / y)), p), this.Hw(m / h(e), p), {be: !0})) : this.qE(t, i).QE(!0)
            }

            if (n = n || {}, n.tw === !1 || !T.PQ.any3d) return this.HW(t, i, n);
            this.iw();
            var l = this._q(this.getCenter()), f = this._q(t), d = this.getSize(), p = this.GW;
            t = T.Gq(t), i = void 0 === i ? p : i;
            var m = Math.max(d.x, d.y), v = m * this.BW(p, i), y = f.distanceTo(l) || 1, w = 1.42, g = w * w, E = e(0),
                Q = Date.now(), q = (e(1) - E) / w, x = n.duration ? 10 * n.duration : 10 * q * .8;
            return this.WE(!0), c.call(this), this
        }, RO: function (t, i) {
            var n = this.bW(t, i);
            return this.be(n.center, n.zoom, i)
        }
    }), T.Map.n({
        rO: {TO: 1e4, watch: !1}, tO: function (t) {
            if (t = this.YO = T.extend({}, this.rO, t), !("geolocation" in navigator)) return this.UO({
                code: 0,
                message: "uO"
            }), this;
            var i = T.d(this.IO, this), n = T.d(this.UO, this);
            return t.watch ? this.iO = navigator.geolocation.watchPosition(i, n, t) : navigator.geolocation.getCurrentPosition(i, n, t), this
        }, OO: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this.iO), this.YO && (this.YO.HW = !1), this
        }, UO: function (t) {
            var i = t.code, n = t.message || (1 === i ? "oO" : 2 === i ? "PO" : "TO");
            this.YO.HW && !this.VW && this.Qw(), this.EQ("pO", {code: i, message: "AO" + n + "."})
        }, IO: function (t) {
            var i = t.coords.latitude, n = t.coords.longitude, e = new T.Fq(i, n), s = e.jq(t.coords.accuracy),
                o = this.YO;
            if (o.HW) {
                var r = this._W(s);
                this.HW(e, o.maxZoom ? Math.min(r, o.maxZoom) : r)
            }
            var h = {lT: e, bounds: s, aO: t.aO};
            for (var a in t.coords) "number" == typeof t.coords[a] && (h[a] = t.coords[a]);
            this.EQ("SO", h)
        }
    });
    for (var n = 0; n < T.w.S.length; n++) T.ZR.nR("TDT_style" + n, T.w.E + T.w.S[n]);
    for (var m = 0; m < T.w.a.length; m++) T.ZR._R("TDT_components" + m, T.w.E + T.w.a[m]);
})();
