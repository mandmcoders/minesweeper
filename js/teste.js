!function (n, t) {
    function o(n, t) {
        return typeof n === t
    }

    function y() {
        var r, n, u, f, s, h, t;
        for (var c in e) if (e.hasOwnProperty(c)) {
            if (r = [], n = e[c], n.name && (r.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (u = 0; u < n.options.aliases.length; u++) r.push(n.options.aliases[u].toLowerCase());
            for (f = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < r.length; s++) h = r[s], t = h.split("."), 1 === t.length ? i[t[0]] = f : (!i[t[0]] || i[t[0]] instanceof Boolean || (i[t[0]] = new Boolean(i[t[0]])), i[t[0]][t[1]] = f), a.push((f ? "" : "no-") + t.join("-"))
        }
    }

    function l(n) {
        var t = u.className, r = i._config.classPrefix || "", f;
        (h && (t = t.baseVal), i._config.enableJSClass) && (f = new RegExp("(^|\\s)" + r + "no-js(\\s|$)"), t = t.replace(f, "$1" + r + "js$2"));
        i._config.enableClasses && (t += " " + r + n.join(" " + r), h ? u.className.baseVal = t : u.className = t)
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : h ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function p() {
        var n = t.body;
        return n || (n = s(h ? "svg" : "body"), n.fake = !0), n
    }

    function w(n, i, r, f) {
        var o, a, c, v, l = "modernizr", h = s("div"), e = p();
        if (parseInt(r, 10)) for (; r--;) c = s("div"), c.id = f ? f[r] : l + (r + 1), h.appendChild(c);
        return o = s("style"), o.type = "text/css", o.id = "s" + l, (e.fake ? e : h).appendChild(o), e.appendChild(h), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(t.createTextNode(n)), h.id = l, e.fake && (e.style.background = "", e.style.overflow = "hidden", v = u.style.overflow, u.style.overflow = "hidden", u.appendChild(e)), a = i(h, n), e.fake ? (e.parentNode.removeChild(e), u.style.overflow = v, u.offsetHeight) : h.parentNode.removeChild(h), !!a
    }

    function r(n, t) {
        var f, u, e;
        if ("object" == typeof n) for (f in n) v(n, f) && r(f, n[f]); else {
            if (n = n.toLowerCase(), u = n.split("."), e = i[u[0]], 2 == u.length && (e = e[u[1]]), "undefined" != typeof e) return i;
            t = "function" == typeof t ? t() : t;
            1 == u.length ? i[u[0]] = t : (!i[u[0]] || i[u[0]] instanceof Boolean || (i[u[0]] = new Boolean(i[u[0]])), i[u[0]][u[1]] = t);
            l([(t && 0 != t ? "" : "no-") + u.join("-")]);
            i._trigger(n, t)
        }
        return i
    }

    var a = [], e = [], f = {
        _version: "3.6.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (n, t) {
            var i = this;
            setTimeout(function () {
                t(i[n])
            }, 0)
        },
        addTest: function (n, t, i) {
            e.push({name: n, fn: t, options: i})
        },
        addAsyncTest: function (n) {
            e.push({name: null, fn: n})
        }
    }, i = function () {
    }, v, c;
    i.prototype = f;
    i = new i;
    var u = t.documentElement, h = "svg" === u.nodeName.toLowerCase(), b = function () {
        var t = n.matchMedia || n.msMatchMedia;
        return t ? function (n) {
            var i = t(n);
            return i && i.matches || !1
        } : function (t) {
            var i = !1;
            return w("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                i = "absolute" == (n.getComputedStyle ? n.getComputedStyle(t, null) : t.currentStyle).position
            }), i
        }
    }();
    for (f.mq = b, !function () {
        var n = {}.hasOwnProperty;
        v = o(n, "undefined") || o(n.call, "undefined") ? function (n, t) {
            return t in n && o(n.constructor.prototype[t], "undefined")
        } : function (t, i) {
            return n.call(t, i)
        }
    }(), f._l = {}, f.on = function (n, t) {
        this._l[n] || (this._l[n] = []);
        this._l[n].push(t);
        i.hasOwnProperty(n) && setTimeout(function () {
            i._trigger(n, i[n])
        }, 0)
    }, f._trigger = function (n, t) {
        if (this._l[n]) {
            var i = this._l[n];
            setTimeout(function () {
                for (var r, n = 0; n < i.length; n++) (r = i[n])(t)
            }, 0);
            delete this._l[n]
        }
    }, i._q.push(function () {
        f.addTest = r
    }), i.addAsyncTest(function () {
        var n = new Image;
        n.onerror = function () {
            r("webpalpha", !1, {aliases: ["webp-alpha"]})
        };
        n.onload = function () {
            r("webpalpha", 1 == n.width, {aliases: ["webp-alpha"]})
        };
        n.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
    }), i.addAsyncTest(function () {
        var n = new Image;
        n.onerror = function () {
            r("webpanimation", !1, {aliases: ["webp-animation"]})
        };
        n.onload = function () {
            r("webpanimation", 1 == n.width, {aliases: ["webp-animation"]})
        };
        n.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    }), i.addAsyncTest(function () {
        var n = new Image;
        n.onerror = function () {
            r("webplossless", !1, {aliases: ["webp-lossless"]})
        };
        n.onload = function () {
            r("webplossless", 1 == n.width, {aliases: ["webp-lossless"]})
        };
        n.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    }), i.addAsyncTest(function () {
        function t(n, t, i) {
            function f(t) {
                var f = t && "load" === t.type ? 1 == u.width : !1, e = "webp" === n;
                r(n, e && f ? new Boolean(f) : f);
                i && i(t)
            }

            var u = new Image;
            u.onerror = f;
            u.onload = f;
            u.src = t
        }

        var n = [{
                uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                name: "webp"
            }, {
                uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                name: "webp.alpha"
            }, {
                uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                name: "webp.animation"
            }, {uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless"}],
            i = n.shift();
        t(i.name, i.uri, function (i) {
            if (i && "load" === i.type) for (var r = 0; r < n.length; r++) t(n[r].name, n[r].uri)
        })
    }), y(), l(a), delete f.addTest, delete f.addAsyncTest, c = 0; c < i._q.length; c++) i._q[c]();
    n.Modernizr = i
}(window, document)