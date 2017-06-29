(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (DV5a) {
        if (!DV5a || !DV5a.length)return null;
        var SX9O = window;
        for (var a = DV5a.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; SX9O = SX9O[a[i]] = SX9O[a[i]] || {}, i++);
        return SX9O
    };
    NEJ.Q = function (bL6F, DV5a) {
        bL6F = bL6F || NEJ.O;
        var bs5x = DV5a.split(".");
        for (var i = 0, l = bs5x.length; i < l; i++) {
            bL6F = bL6F[bs5x[i]];
            if (!bL6F)break
        }
        return bL6F
    };
    NEJ.C = function () {
        var bMQ9H = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bHA8s = function (A5F, bv5A) {
            for (var x in bv5A)if (A5F == bv5A[x])return x;
            return null
        };
        var bqX4b = {cm6g: 0, bk5p: 1, bC5H: 2, bR6L: 3, bJ6D: 4, eS7L: 5, jW9N: 6, eh7a: 7},
            tT2x = {ct6n: 0, bl5q: 1, bH6B: 2, cb6V: 3, bM6G: 4, gw7p: 5, kQ9H: 6, fQ7J: 7};
        return function () {
            var fd7W = function () {
                this.bHP8H();
                return this.cm6g.apply(this, arguments)
            };
            fd7W.prototype.bHP8H = NEJ.F;
            fd7W.prototype.cm6g = NEJ.F;
            fd7W.O5T = function (AB4F, bro4s) {
                if (bMQ9H(AB4F))return;
                if (bro4s == null || !!bro4s) NEJ.X(this, AB4F, bMQ9H);
                this.bOa9R = AB4F;
                this.cg6a = AB4F.prototype;
                var bB5G = function () {
                };
                bB5G.prototype = AB4F.prototype;
                this.prototype = new bB5G;
                var El5q = this.prototype;
                El5q.constructor = this;
                var dO7H;
                for (var x in bqX4b) {
                    dO7H = bHA8s(bqX4b[x], tT2x);
                    if (!dO7H || !this.cg6a[x])continue;
                    El5q[x] = function (T5Y) {
                        return function () {
                            this[T5Y].apply(this, arguments)
                        }
                    }(dO7H)
                }
                var Dq5v = {};
                for (var x in tT2x) {
                    dO7H = bHA8s(tT2x[x], bqX4b);
                    if (!dO7H || !this.cg6a[dO7H])continue;
                    Dq5v[dO7H] = AB4F;
                    El5q[x] = function (T5Y) {
                        return function () {
                            var m5r, bB5G = this.bqP4T[T5Y], ZZ1x = bB5G.prototype[T5Y];
                            this.bqP4T[T5Y] = bB5G.bOa9R || AB4F;
                            if (!!ZZ1x) m5r = ZZ1x.apply(this, arguments);
                            this.bqP4T[T5Y] = AB4F;
                            return m5r
                        }
                    }(dO7H)
                }
                El5q.bHP8H = function () {
                    this.bqP4T = NEJ.X({}, Dq5v)
                };
                El5q.cxH6B = El5q.ct6n;
                return El5q
            };
            return fd7W
        }
    }();
    NEJ.X = function (gc7V, bN6H, dC7v) {
        if (!gc7V || !bN6H)return gc7V;
        dC7v = dC7v || NEJ.F;
        for (var x in bN6H) {
            if (bN6H.hasOwnProperty(x) && !dC7v(bN6H[x], x)) gc7V[x] = bN6H[x]
        }
        return gc7V
    };
    NEJ.EX = function (gc7V, bN6H) {
        if (!gc7V || !bN6H)return gc7V;
        for (var x in gc7V) {
            if (gc7V.hasOwnProperty(x) && bN6H[x] != null) gc7V[x] = bN6H[x]
        }
        return gc7V
    };
    var EH5M = Function.prototype;
    EH5M.ef7Y = function (lQ0x, bqd4h) {
        var f = NEJ.F, bqd4h = bqd4h || f, lQ0x = lQ0x || f, db6V = this;
        return function () {
            var d5i = {args: NEJ.R.slice.call(arguments, 0)};
            lQ0x(d5i);
            if (!d5i.stopped) {
                d5i.value = db6V.apply(this, d5i.args);
                bqd4h(d5i)
            }
            return d5i.value
        }
    };
    EH5M.g5l = function () {
        var bg5l = arguments, gc7V = arguments[0], bpR4V = this;
        return function () {
            var vn2x = NEJ.R.slice.call(bg5l, 1);
            NEJ.R.push.apply(vn2x, arguments);
            return bpR4V.apply(gc7V || window, vn2x)
        }
    };
    EH5M.ec7V = function () {
        var bg5l = arguments, gc7V = NEJ.R.shift.call(bg5l), bpR4V = this;
        return function () {
            NEJ.R.push.apply(arguments, bg5l);
            return bpR4V.apply(gc7V || window, arguments)
        }
    };
    var EH5M = String.prototype;
    if (!EH5M.trim) {
        EH5M.trim = function () {
            var cM6G = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cM6G, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, N5S = c5h("nej.p"), ZF1x = window.navigator.platform,
        tM2x = window.navigator.userAgent;
    var jY9P = {mac: ZF1x, win: ZF1x, linux: ZF1x, ipad: tM2x, ipod: tM2x, iphone: ZF1x, android: tM2x};
    N5S.Ky7r = jY9P;
    for (var x in jY9P)jY9P[x] = (new RegExp(x, "i")).test(jY9P[x]);
    jY9P.ios = jY9P.ipad || jY9P.iphone || jY9P.ipod;
    jY9P.tablet = jY9P.ipad;
    jY9P.desktop = jY9P.mac || jY9P.win || jY9P.linux && !jY9P.android;
    var hE8w = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N5S.cS6M = hE8w;
    if (/msie\s+(.*?);/i.test(tM2x) || /trident\/.+rv:([\d\.]+)/i.test(tM2x)) {
        hE8w.engine = "trident";
        hE8w.browser = "ie";
        hE8w.version = RegExp.$1;
        hE8w.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var nR0x = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        hE8w.release = nR0x[document.documentMode] || nR0x[parseInt(hE8w.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tM2x)) {
        hE8w.engine = "webkit";
        hE8w.release = RegExp.$1 || "";
        hE8w.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tM2x)) {
        hE8w.engine = "gecko";
        hE8w.release = RegExp.$1 || "";
        hE8w.browser = "firefox";
        hE8w.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(tM2x)) hE8w.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tM2x)) {
        hE8w.engine = "presto";
        hE8w.release = RegExp.$1 || "";
        hE8w.browser = "opera";
        hE8w.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(tM2x)) hE8w.version = RegExp.$1 || ""
    }
    if (hE8w.browser == "unknow") {
        var nR0x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nR0x.length, T5Y; i < l; i++) {
            T5Y = nR0x[i] == "safari" ? "version" : nR0x[i];
            if ((new RegExp(T5Y + "/(.*?)(?=\\s|$)", "i")).test(tM2x)) {
                hE8w.browser = nR0x[i];
                hE8w.version = RegExp.$1.trim();
                break
            }
        }
    }
    N5S.but5y = {};
    var ZB1x = hE8w.engine != "trident";
    N5S.ma0x = {
        gecko: hE8w.engine != "gecko",
        webkit: hE8w.engine != "webkit",
        presto: hE8w.engine != "presto",
        trident0: ZB1x || hE8w.release > "2.0",
        trident1: ZB1x || hE8w.release < "6.0",
        trident2: ZB1x || hE8w.release > "3.0",
        trident: ZB1x || hE8w.release >= "6.0"
    }
})();
(function () {
    var is8k = NEJ.P("nej.c"), R5W = {};
    var bpD4H = function () {
        var cM6G = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V5a) {
            V5a = V5a || "";
            if (cM6G.test(V5a))return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var KK7D = function () {
        var bvy5D = function (i5n, bv5A) {
            if (!i5n || !i5n.length)return;
            for (var i = 0, l = i5n.length, kA9r; i < l; i++) {
                kA9r = i5n[i];
                if (kA9r.indexOf("://") > 0) bv5A[bpD4H(kA9r)] = kA9r
            }
        };
        var bc5h = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bN6H) {
            is8k.EL5Q("root", bN6H.root || "/res/");
            var bpw4A, fo7h = is8k.y5D("root");
            for (var x in bc5h) {
                bpw4A = bc5h[x];
                is8k.EL5Q(x, bN6H[bpw4A.name] || fo7h + bpw4A.dft)
            }
            var Ay4C = bN6H.p_csrf;
            if (Ay4C == !0) {
                Ay4C = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            is8k.EL5Q("csrf", NEJ.EX({cookie: "", param: ""}, Ay4C));
            R5W.frames = {};
            bvy5D(bN6H.p_frame, R5W.frames);
            R5W.flashs = {};
            bvy5D(bN6H.p_flash, R5W.flashs)
        }
    }();
    is8k.EL5Q = function (J5O, A5F) {
        R5W[J5O] = A5F
    };
    is8k.y5D = function (J5O) {
        return R5W[J5O]
    };
    is8k.bOj9a = function (V5a) {
        var vi2x = bpD4H(V5a);
        return R5W.frames[vi2x] || vi2x + "/res/nej_proxy_frame.html"
    };
    is8k.bOw9n = function (V5a) {
        return R5W.flashs[bpD4H(V5a)]
    };
    KK7D(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), is8k = c5h("nej.c"), bN6H = window.NEJ_CONF || NEJ.O;
    if (N5S.ma0x.trident)return;
    is8k.EL5Q("storage.swf", bN6H.storage || is8k.y5D("root") + "nej_storage.swf");
    if (N5S.cS6M.release < "4.0") {
        is8k.EL5Q("blank.png", bN6H.blank || is8k.y5D("root") + "nej_blank.gif")
    }
    var i5n = bN6H.xdr, fT7M = /^(https?:\/\/.*?)(?=\/|$)/i, ji9Z = /[\/?=&]/i;
    var bNd9U = function (V5a) {
        return (fT7M.test(V5a) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i5n && !!i5n.length)for (var i = i5n.length - 1, V5a, J5O; i >= 0; i--) {
        V5a = i5n[i];
        J5O = bNd9U(V5a);
        if (!!J5O) is8k.EL5Q(J5O, V5a)
    }
    is8k.cxC6w = function (V5a) {
        var J5O = bNd9U(V5a);
        if (!J5O) {
            if (ji9Z.test(V5a)) {
                J5O = location.protocol + "//" + location.host
            } else if (V5a.indexOf("://") < 0) {
                J5O = location.protocol + "//" + V5a
            } else {
                J5O = V5a
            }
        }
        return is8k.y5D(J5O) || J5O + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c5h = NEJ.P, is8k = c5h("nej.c"), N5S = c5h("nej.g"), fR7K = +(new Date);
    N5S.cxB6v = 1e4 - fR7K;
    N5S.bpu4y = 10001 - fR7K;
    N5S.cxz6t = 10002 - fR7K;
    N5S.bym6g = 10003 - fR7K;
    N5S.bOG9x = 10004 - fR7K;
    N5S.cxx6r = 10005 - fR7K;
    N5S.bpq4u = 10006 - fR7K;
    N5S.bPb9S = 10007 - fR7K;
    N5S.wI3x = "Content-Type";
    N5S.cxt6n = "text/plain";
    N5S.CB5G = "multipart/form-data";
    N5S.bPd9U = "application/x-www-form-urlencoded";
    N5S.bpm4q = is8k.y5D("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c5h = NEJ.P, eY7R = NEJ.R, N5S = c5h("nej.p"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        ba5f = c5h("nej.h");
    var ld9U = N5S.cS6M.prefix, bwk5p = N5S.but5y,
        bPg9X = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bPk9b = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Nw7p = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var KK7D = function () {
        var sa1x = ba5f.bCt7m();
        bwk5p.css3d = !!sa1x && sa1x.m41 != null;
        var cM6G = /-([a-z])/g;
        for (var x in Nw7p) {
            Nw7p[bCw7p(x)] = Nw7p[x]
        }
    };
    var bCw7p = function () {
        var cM6G = /-([a-z])/g;
        return function (T5Y) {
            T5Y = T5Y || "";
            return T5Y.replace(cM6G, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bCG7z = function (T5Y) {
        return (!bwk5p.css3d ? bPg9X : bPk9b)[T5Y]
    };
    var bCP7I = function () {
        var cM6G = /\s+/;
        return function (fd7W) {
            fd7W = (fd7W || "").trim();
            return !!fd7W ? fd7W.split(cM6G) : null
        }
    }();
    var Zs1x = function (E5J, t5y, fd7W) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return;
        k5p.be5j(bCP7I(fd7W), function (dH7A) {
            E5J.classList[t5y](dH7A)
        })
    };
    ba5f.EP5U = function (i5n) {
        return eY7R.slice.call(i5n, 0)
    };
    ba5f.bpi4m = function (E5J) {
        return ba5f.EP5U(E5J.children)
    };
    ba5f.bpg4k = function (E5J, fd7W) {
        return ba5f.EP5U(E5J.getElementsByClassName(fd7W))
    };
    ba5f.bpf4j = function (E5J, ER5W) {
        Zs1x(E5J, "add", ER5W)
    };
    ba5f.bpd4h = function (E5J, EV5a) {
        Zs1x(E5J, "remove", EV5a)
    };
    ba5f.PK8C = function (E5J, EV5a, ER5W) {
        Zs1x(E5J, "remove", EV5a);
        Zs1x(E5J, "add", ER5W)
    };
    ba5f.boX4b = function (E5J, fd7W) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return !1;
        var i5n = E5J.classList;
        if (!i5n || !i5n.length)return !1;
        return k5p.cV6P(bCP7I(fd7W), function (dH7A) {
                return i5n.contains(dH7A)
            }) >= 0
    };
    ba5f.boS4W = function (E5J, dH7A) {
    };
    ba5f.boP4T = function (E5J) {
    };
    ba5f.boM4Q = function (fE7x, mT0x) {
        fE7x.selectionEnd = mT0x.end || 0;
        fE7x.selectionStart = mT0x.start || 0;
        fE7x.focus()
    };
    ba5f.boL4P = function (fE7x) {
        return {end: fE7x.selectionEnd, start: fE7x.selectionStart}
    };
    ba5f.boK4O = function () {
        var Ey5D = function (dH7A, d5i) {
            var E5J = h5m.U5Z(d5i);
            if (!E5J.value) a4e.w5B(E5J, dH7A)
        };
        var Fa5f = function (dH7A, d5i) {
            a4e.x5C(h5m.U5Z(d5i), dH7A)
        };
        return function (E5J, eI7B, dH7A) {
            if (eI7B == 1) {
                h5m.q5v(E5J, "blur", Ey5D.g5l(null, dH7A))
            }
            if (eI7B == 1 || eI7B == -1) {
                h5m.q5v(E5J, "focus", Fa5f.g5l(null, dH7A))
            }
        }
    }();
    ba5f.boE4I = function (G5L) {
        return (new XMLSerializer).serializeToString(G5L) || ""
    };
    ba5f.boD4H = function (Av4z) {
        var fo7h = (new DOMParser).parseFromString(Av4z, "text/xml").documentElement;
        return fo7h.nodeName == "parsererror" ? null : fo7h
    };
    ba5f.boC4G = function (E5J) {
    };
    ba5f.mH0x = function (E5J) {
        return null
    };
    ba5f.bos4w = function (E5J) {
        return null
    };
    ba5f.bor4v = function (dE7x) {
    };
    ba5f.boj4n = function () {
        var bg5l = ba5f.EP5U(arguments);
        bg5l[0] = a4e.y5D(bg5l[0]);
        if (!bg5l[0])return null;
        bg5l[1] = (bg5l[1] || "").toLowerCase();
        if (!bg5l[1])return null;
        return bg5l
    };
    ba5f.As4w = function () {
        var uQ2x = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, iy9p = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bPl9c = function (t5y) {
            return (ld9U.evt || ld9U.pro) + t5y
        };
        return function () {
            var bg5l = ba5f.boj4n.apply(ba5f, arguments);
            if (!bg5l)return;
            var YQ1x = iy9p[bg5l[1]], YP0x = uQ2x[bg5l[1]];
            if (!!YQ1x) {
                bg5l[4] = bg5l[1];
                bg5l[1] = bPl9c(YQ1x)
            } else if (!!YP0x) {
                var T5Y = "on" + bg5l[1];
                if (!(T5Y in bg5l[0])) {
                    bg5l[4] = bg5l[1];
                    bg5l[1] = YP0x
                }
            }
            return bg5l
        }
    }();
    ba5f.bod4h = function () {
        var bg5l = arguments;
        bg5l[0].addEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    };
    ba5f.YK0x = function () {
        var bg5l = arguments;
        bg5l[0].removeEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    };
    ba5f.bnY4c = function (E5J, t5y, e5j) {
        var d5i = document.createEvent("Event");
        d5i.initEvent(t5y, !0, !0);
        NEJ.X(d5i, e5j);
        E5J.dispatchEvent(d5i)
    };
    ba5f.bCt7m = function () {
        var fT7M = /\((.*?)\)/, ji9Z = /\s*,\s*/, i5n = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var YJ0x = function (sa1x) {
            var id8V = {};
            if (fT7M.test(sa1x || "")) {
                k5p.be5j(RegExp.$1.split(ji9Z), function (A5F, s5x) {
                    id8V[i5n[s5x]] = A5F || ""
                })
            }
            return id8V
        };
        return function (sa1x) {
            if (!!window.CSSMatrix)return new CSSMatrix(sa1x);
            var T5Y = ld9U.clz + "CSSMatrix";
            if (!!window[T5Y])return new window[T5Y](sa1x || "");
            return YJ0x(sa1x)
        }
    }();
    ba5f.bKv8n = function () {
        var cM6G = /\{(.*?)\}/g;
        return function (T5Y, bv5A) {
            bv5A = bv5A || o;
            var oZ0x = bCG7z(T5Y);
            return !oZ0x ? "" : oZ0x.replace(cM6G, function ($1, $2) {
                var bs5x = $2.split("|");
                return bv5A[bs5x[0]] || bs5x[1] || "0"
            })
        }
    }();
    ba5f.bnV4Z = function (E5J, T5Y, A5F) {
        E5J.style[ba5f.bMN9E(T5Y)] = A5F
    };
    ba5f.bMN9E = function () {
        var cM6G = /^[a-z]/, bnU4Y = ld9U.css;
        var bPm9d = function (T5Y) {
            return T5Y.replace(cM6G, function ($1) {
                return bnU4Y + $1.toUpperCase()
            })
        };
        return function (T5Y) {
            T5Y = bCw7p(T5Y);
            var bPv9m = ba5f.bPx9o(T5Y, Nw7p);
            return bPv9m ? bPm9d(T5Y) : T5Y
        }
    }();
    ba5f.bPx9o = function () {
        var cM6G = /^([a-z]+?)[A-Z]/;
        return function (T5Y, bv5A) {
            if (!bv5A[T5Y]) {
                if (cM6G.test(T5Y)) T5Y = RegExp.$1
            }
            return !!bv5A[T5Y]
        }
    }();
    ba5f.bPy9p = function () {
        var cM6G = /\$<(.*?)>/gi, bnU4Y = "-" + ld9U.css.toLowerCase() + "-";
        return function (jh9Y) {
            return jh9Y.replace(cM6G, function ($1, $2) {
                var eJ7C = $2, bs5x = eJ7C.split("|"), oZ0x = bCG7z(bs5x[0]);
                if (!!oZ0x) {
                    return ba5f.bKv8n(bs5x[0], k5p.hq8i(bs5x[1]))
                }
                return !ba5f.bPz9q(eJ7C, Nw7p) ? eJ7C : bnU4Y + eJ7C
            })
        }
    }();
    ba5f.bPz9q = function (T5Y, bv5A) {
        return !!bv5A[T5Y]
    };
    ba5f.bnI4M = function (cc6W, jh9Y) {
        cc6W.textContent = jh9Y
    };
    ba5f.bnC4G = function (cc6W, jh9Y) {
        var vS3x = cc6W.sheet, bq5v = vS3x.cssRules.length;
        vS3x.insertRule(jh9Y, bq5v);
        return vS3x.cssRules[bq5v]
    };
    ba5f.cxh6b = function (E5J, e5j) {
    };
    ba5f.YD0x = function (YC0x) {
        return (YC0x || "").toLowerCase() != "transparent"
    };
    ba5f.bPB9s = function (E5J) {
    };
    ba5f.bnt4x = function (E5J, T5Y) {
        if (!!E5J.getAttribute)return E5J.getAttribute(T5Y);
        return ""
    };
    ba5f.Yy0x = function (fa7T) {
        a4e.cE6y(fa7T)
    };
    KK7D()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), N5S = c5h("nej.p"), ba5f = c5h("nej.h");
    if (N5S.ma0x.trident0)return;
    var fR7K = +(new Date);
    R5W = {};
    ba5f.boS4W = ba5f.boS4W.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var bg5l = d5i.args, C5H = a4e.ks9j(bg5l[0]), J5O = "hover-" + C5H;
        if (!C5H || !!R5W[J5O])return;
        R5W[J5O] = !0;
        h5m.q5v(C5H, "mouseenter", a4e.x5C.g5l(a4e, C5H, bg5l[1]));
        h5m.q5v(C5H, "mouseleave", a4e.w5B.g5l(a4e, C5H, bg5l[1]))
    });
    ba5f.boP4T = function () {
        var cxf6Z = function () {
        };
        return ba5f.boP4T.ef7Y(function (d5i) {
            d5i.stopped = !0;
            var E5J = d5i.args[0], C5H = "fixed-" + a4e.ks9j(E5J);
            if (!!R5W[C5H])return;
            var bc5h = {};
            R5W[C5H] = bc5h
        })
    }();
    ba5f.boC4G = ba5f.boC4G.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var E5J = d5i.args[0], cc6W = E5J.style, bKh8Z = a4e.oz0x();
        cc6W.width = bKh8Z.scrollWidth + "px";
        cc6W.height = bKh8Z.scrollHeight + "px"
    });
    ba5f.mH0x = ba5f.mH0x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var E5J = d5i.args[0], jX9O = R5W[E5J.msk];
        if (!jX9O) {
            E5J.msk = fR7K++;
            jX9O = a4e.cU6O("iframe");
            jX9O.style.position = "absolute";
            R5W[E5J.msk] = jX9O
        }
        d5i.value = jX9O;
        var cc6W = jX9O.style;
        cc6W.top = (parseInt(a4e.cZ6T(E5J, "top")) || 0) + "px";
        cc6W.left = (parseInt(a4e.cZ6T(E5J, "left")) || 0) + "px";
        cc6W.width = E5J.offsetWidth + "px";
        cc6W.height = E5J.offsetHeight + "px";
        E5J.insertAdjacentElement("beforeBegin", jX9O)
    });
    ba5f.bos4w = ba5f.bos4w.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var jX9O = R5W[d5i.args[0].msk];
        if (!!jX9O) a4e.lV0x(jX9O)
    })
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), a4e = c5h("nej.e"), ba5f = c5h("nej.h");
    if (N5S.ma0x.trident1)return;
    ba5f.As4w = function () {
        var uQ2x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return ba5f.As4w.ef7Y(function (d5i) {
            var bg5l = ba5f.boj4n.apply(ba5f, d5i.args);
            if (!bg5l) {
                d5i.stopped = !0;
                return
            }
            var t5y = uQ2x[bg5l[1]];
            if (!!t5y && ("on" + t5y).toLowerCase() in bg5l[0]) {
                bg5l[4] = bg5l[1];
                bg5l[1] = t5y;
                d5i.stopped = !0;
                d5i.value = bg5l
            }
        })
    }();
    ba5f.YD0x = function (YC0x) {
        return !0
    };
    ba5f.Yy0x = ba5f.Yy0x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var fa7T = d5i.args[0];
        a4e.X5c(fa7T, "display", "none");
        try {
            fa7T.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, N5S = c5h("nej.p"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        ba5f = c5h("nej.h"), bnd4h = {};
    if (N5S.ma0x.trident)return;
    ba5f.EP5U = ba5f.EP5U.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var i5n = d5i.args[0];
        if (!i5n) {
            d5i.value = null;
            return
        }
        var s5x = 0, m5r = [];
        while (!!i5n[s5x]) {
            m5r.push(i5n[s5x++])
        }
        d5i.value = m5r
    });
    ba5f.bpi4m = ba5f.bpi4m.ef7Y(function (d5i) {
        d5i.stopped = !0;
        var bs5x = [];
        k5p.be5j(d5i.args[0].childNodes, function (f5k) {
            if (f5k.nodeType == 1) bs5x.push(f5k)
        });
        d5i.value = bs5x
    });
    ba5f.bpg4k = ba5f.bpg4k.ef7Y(function (d5i) {
        var E5J = d5i.args[0];
        if (!!E5J.getElementsByClassName)return;
        d5i.stopped = !0;
        var m5r = [], bnc4g = new RegExp("(\\s|^)(?:" + d5i.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k5p.be5j(E5J.getElementsByTagName("*"), function (f5k) {
            if (bnc4g.test(f5k.className)) m5r.push(f5k)
        });
        d5i.value = m5r
    });
    ba5f.boM4Q = ba5f.boM4Q.ef7Y(function (d5i) {
        var fE7x = d5i.args[0], mT0x = d5i.args[1];
        if (fE7x.selectionStart == null) {
            d5i.stopped = !0;
            var cF6z = fE7x.createTextRange();
            cF6z.collapse(!0);
            cF6z.moveStart("character", mT0x.start);
            cF6z.moveEnd("character", mT0x.end - mT0x.start);
            cF6z.select();
            fE7x.focus()
        }
    });
    ba5f.boL4P = ba5f.boL4P.ef7Y(function (d5i) {
        var fE7x = d5i.args[0];
        fE7x.focus();
        if (fE7x.selectionStart == null) {
            d5i.stopped = !0;
            var buW5b = document.selection.createRange();
            var bvp5u = fE7x.createTextRange();
            bvp5u.moveToBookmark(buW5b.getBookmark());
            var bmX4b = fE7x.createTextRange();
            bmX4b.collapse(!0);
            bmX4b.setEndPoint("EndToStart", bvp5u);
            var iu8m = bmX4b.text.length;
            d5i.value = {start: iu8m, end: iu8m + buW5b.text.length}
        }
    });
    ba5f.boE4I = ba5f.boE4I.ef7Y(function (d5i) {
        if (!!window.XMLSerializer)return;
        d5i.stopped = !0;
        var E5J = d5i.args[0];
        d5i.value = E5J.xml != null ? E5J.xml : E5J.outHTML
    });
    ba5f.boD4H = function () {
        var Ly7r = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bPD9u = function () {
            try {
                for (var i = 0, l = Ly7r.length; i < l; i++)return new ActiveXObject(Ly7r[i])
            } catch (ex) {
                return null
            }
        };
        return ba5f.boD4H.ef7Y(function (d5i) {
            if (!!window.DOMParser)return;
            d5i.stopped = !0;
            var DU5Z = bPD9u();
            if (!!DU5Z && DU5Z.loadXML(d5i.args[0]) && !DU5Z.parseError.errorCode) d5i.value = DU5Z.documentElement
        })
    }();
    ba5f.As4w = function () {
        var iy9p = {input: "propertychange", load: "readystatechange"};
        for (var x in iy9p)bnd4h[iy9p[x]] = !0;
        var bPE9v = function (E5J, t5y) {
            if ("on" + t5y in E5J)return null;
            return iy9p[t5y] || ""
        };
        var bPF9w = function (t5y, db6V) {
            var dn6h = db6V;
            switch (t5y) {
                case"readystatechange":
                    dn6h = function (d5i) {
                        var E5J = h5m.U5Z(d5i) || this;
                        if (E5J.readyState == "loaded" || E5J.readyState == "complete") {
                            d5i.target = E5J;
                            db6V.call(E5J, d5i)
                        }
                    };
                    break;
                case"propertychange":
                    dn6h = function (d5i) {
                        var E5J = h5m.U5Z(d5i) || this;
                        if ("value" in E5J && d5i.propertyName == "value") {
                            d5i.target = E5J;
                            db6V.call(E5J, d5i)
                        }
                    };
                    break
            }
            return dn6h
        };
        return ba5f.As4w.ef7Y(function (d5i) {
            var bg5l = ba5f.boj4n.apply(ba5f, d5i.args);
            if (!bg5l) {
                d5i.stopped = !0;
                return
            }
            var t5y = bPE9v(bg5l[0], bg5l[1]);
            if (!!t5y) {
                d5i.stopped = !0;
                bg5l[4] = bg5l[1];
                bg5l[1] = t5y;
                if (!!bg5l[2]) {
                    bg5l[5] = bg5l[2];
                    bg5l[2] = bPF9w(bg5l[1], bg5l[2])
                }
                d5i.value = bg5l
            }
        }, function (d5i) {
            var bg5l = d5i.value;
            if (!bg5l[0] || !k5p.gd7W(bg5l[2]))return;
            if (!k5p.gd7W(bg5l[5])) bg5l[5] = bg5l[2];
            bg5l[2] = bg5l[2].g5l(bg5l[0])
        })
    }();
    ba5f.bod4h = ba5f.bod4h.ef7Y(function (d5i) {
        var bg5l = d5i.args;
        if (!!bnd4h[bg5l[1]] || !document.addEventListener) {
            d5i.stopped = !0;
            bg5l[0].attachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    ba5f.YK0x = ba5f.YK0x.ef7Y(function (d5i) {
        var bg5l = d5i.args;
        if (!!bnd4h[bg5l[1]] || !document.removeEventListener) {
            d5i.stopped = !0;
            bg5l[0].detachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    ba5f.bnY4c = ba5f.bnY4c.ef7Y(function (d5i) {
        if (!document.createEvent) {
            d5i.stopped = !0;
            var bg5l = d5i.args, byE6y = document.createEventObject();
            NEJ.X(byE6y, bg5l[2]);
            try {
                bg5l[0].fireEvent("on" + bg5l[1], byE6y)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba5f.bnV4Z = ba5f.bnV4Z.ef7Y(function (d5i) {
        var bg5l = d5i.args, T5Y = bg5l[1].toLowerCase();
        if (T5Y == "opacity" && !(T5Y in document.body.style)) {
            bg5l[1] = "filter";
            bg5l[2] = "alpha(opacity=" + bg5l[2] * 100 + ")"
        }
    });
    ba5f.bnI4M = function () {
        var ge7X = 30;
        return ba5f.bnI4M.ef7Y(function (d5i) {
            var E5J = d5i.args[0];
            if (!E5J.styleSheet)return;
            d5i.stopped = !0;
            var jh9Y = d5i.args[1];
            var i5n = document.styleSheets;
            if (i5n.length > ge7X) {
                E5J = i5n[ge7X];
                jh9Y = E5J.cssText + jh9Y
            } else {
                E5J = E5J.styleSheet
            }
            E5J.cssText = jh9Y
        })
    }();
    ba5f.bnC4G = ba5f.bnC4G.ef7Y(function (d5i) {
        var bg5l = d5i.args, vS3x = bg5l[0].sheet;
        if (!!vS3x)return;
        d5i.stopped = !0;
        var vS3x = bg5l[0].styleSheet, bq5v = vS3x.rules.length, bs5x = bg5l[1].split(/[\{\}]/);
        vS3x.addRule(bs5x[0], bs5x[1], bq5v);
        d5i.value = vS3x.rules[bq5v]
    });
    ba5f.boK4O = function () {
        var Ey5D = function (dH7A, d5i) {
            a4e.w5B(h5m.U5Z(d5i), dH7A)
        };
        return ba5f.boK4O.ef7Y(function (d5i) {
            if (N5S.cS6M.release >= "4.0")return;
            var bg5l = d5i.args;
            if (bg5l[1] != 1) {
                h5m.q5v(bg5l[0], "blur", Ey5D.g5l(null, bg5l[2]));
                bg5l[1] = -1
            }
        })
    }();
    ba5f.YD0x = function (YC0x) {
        return !0
    };
    ba5f.bnt4x = ba5f.bnt4x.ef7Y(function (d5i) {
        var bg5l = d5i.args, f5k = (bg5l[0].attributes || Y5d)[bg5l[1]];
        if (!!f5k) {
            d5i.stopped = !0;
            d5i.value = f5k.value
        }
    }, function (d5i) {
        var bg5l = d5i.args;
        if (bg5l[1] == "maxlength" && d5i.value == 2147483647) d5i.value = ""
    });
    if (N5S.cS6M.release < 5) {
        ba5f.bor4v = function () {
            var eR7K, fa7T, jl9c = [], bmv4z = "cb-" + +(new Date),
                bi5n = '<script>parent.nej.h["' + bmv4z + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCK7D = function () {
                eR7K = window.clearTimeout(eR7K);
                if (!jl9c.length)return;
                var dE7x = jl9c.shift();
                try {
                    var uE2x = fa7T.contentWindow.document;
                    uE2x.open();
                    uE2x.write("<head><title>");
                    uE2x.write(document.title);
                    uE2x.write("</title>");
                    uE2x.write(bi5n.replace("#<HASH>", encodeURIComponent(dE7x)));
                    uE2x.write("</head><body></body>");
                    if (location.hostname != document.domain) uE2x.domain = document.domain;
                    uE2x.close();
                    ba5f[bmv4z] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jl9c.unshift(dE7x)
                }
                eR7K = window.setTimeout(bCK7D, 50)
            };
            return ba5f.bor4v.ef7Y(function (d5i) {
                d5i.stopped = !0;
                var dE7x = d5i.args[0];
                if (!!ba5f[bmv4z] || !fa7T && !dE7x)return;
                jl9c.push(dE7x);
                if (!fa7T) fa7T = a4e.XV0x();
                bCK7D()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c5h = NEJ.P, h5m = c5h("nej.v"), ba5f = c5h("nej.h"), N5S = c5h("nej.p"), XS0x = N5S.but5y;
    if (N5S.ma0x.gecko)return;
    var KK7D = function () {
        XS0x.css3d = XS0x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (hJ8B, E5J) {
            if (!hJ8B || !E5J)return;
            switch (hJ8B) {
                case"beforeEnd":
                    this.appendChild(E5J);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(E5J, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(E5J) : this.insertBefore(E5J, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E5J) : this.parentNode.insertBefore(E5J, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bi5n) {
                this.textContent = bi5n
            })
        }
    };
    ba5f.As4w = function () {
        var fT7M = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba5f.As4w.ef7Y(function (d5i) {
            var bg5l = d5i.args;
            if (fT7M.test(bg5l[1] || "")) {
                d5i.stopped = !0;
                d5i.value = bg5l
            }
        })
    }();
    ba5f.bPB9s = function () {
        var bPH9y = function (d5i) {
            h5m.bh5m(d5i);
            h5m.U5Z(d5i).control.click()
        };
        return function (E5J) {
            h5m.q5v(E5J, "click", bPH9y)
        }
    }();
    KK7D()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), ba5f = c5h("nej.h");
    var XK0x = function () {
        var nR0x = !!document.body.classList;
        return function () {
            return nR0x
        }
    }();
    var bJL8D = function () {
        var cM6G = /\s+/g;
        return function (fd7W) {
            fd7W = (fd7W || "").trim();
            return !fd7W ? null : new RegExp("(\\s|^)(?:" + fd7W.replace(cM6G, "|") + ")(?=\\s|$)", "g")
        }
    }();
    ba5f.PK8C = ba5f.PK8C.ef7Y(function (d5i) {
        if (XK0x())return;
        d5i.stopped = !0;
        var bg5l = d5i.args, E5J = a4e.y5D(bg5l[0]);
        if (!E5J || !bg5l[1] && !bg5l[2])return;
        var fd7W = E5J.className || "";
        var ER5W = " " + (bg5l[2] || ""), EV5a = bJL8D((bg5l[1] || "") + ER5W);
        !!EV5a && (fd7W = fd7W.replace(EV5a, "$1"));
        E5J.className = (fd7W + ER5W).replace(/\s+/g, " ").trim()
    });
    ba5f.bpf4j = ba5f.bpf4j.ef7Y(function (d5i) {
        if (XK0x())return;
        d5i.stopped = !0;
        var bg5l = d5i.args;
        ba5f.PK8C(bg5l[0], "", bg5l[1])
    });
    ba5f.bpd4h = ba5f.bpd4h.ef7Y(function (d5i) {
        if (XK0x())return;
        d5i.stopped = !0;
        var bg5l = d5i.args;
        ba5f.PK8C(bg5l[0], bg5l[1], "")
    });
    ba5f.boX4b = ba5f.boX4b.ef7Y(function (d5i) {
        if (XK0x())return;
        d5i.stopped = !0;
        var bg5l = d5i.args, E5J = a4e.y5D(bg5l[0]);
        if (!E5J) {
            d5i.value = !1;
            return
        }
        var cM6G = bJL8D(bg5l[1]);
        d5i.value = !cM6G ? !1 : cM6G.test(E5J.className || "")
    })
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), ba5f = c5h("nej.h");
    if (N5S.ma0x.webkit)return;
    ba5f.YD0x = function (YC0x) {
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, ba5f = c5h("nej.h"), a4e = c5h("nej.e"), k5p = c5h("nej.u"), h5m = c5h("nej.v"),
        cP6J = c5h("nej.x"), R5W = {};
    var bKr8j = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J || !R5W[E5J.id])return;
        var XI0x = !0, C5H = E5J.id;
        k5p.ed7W(R5W[C5H], function () {
            XI0x = !1;
            return !0
        });
        if (XI0x) delete R5W[C5H]
    };
    h5m.q5v = cP6J.q5v = function () {
        var bPJ9A = function () {
            var bg5l = ba5f.As4w.apply(ba5f, arguments);
            if (!bg5l || !bg5l[2])return;
            var tn1x = a4e.ks9j(bg5l[0]), nD0x = R5W[tn1x] || {};
            R5W[tn1x] = nD0x;
            tn1x = bg5l[4] || bg5l[1];
            var Am4q = nD0x[tn1x] || [];
            nD0x[tn1x] = Am4q;
            Am4q.push({type: bg5l[1], func: bg5l[2], capt: !!bg5l[3], sfun: bg5l[5] || bg5l[2]});
            return bg5l.slice(0, 4)
        };
        return function () {
            var bg5l = bPJ9A.apply(null, arguments);
            if (!!bg5l) ba5f.bod4h.apply(ba5f, bg5l);
            return this
        }
    }();
    h5m.mg0x = cP6J.mg0x = function () {
        var bPK9B = function () {
            var vn2x = arguments, tn1x = a4e.ks9j(vn2x[0]), nD0x = R5W[tn1x], t5y = (vn2x[1] || "").toLowerCase(),
                d5i = vn2x[2];
            if (!nD0x || !t5y || !d5i)return;
            nD0x = nD0x[t5y];
            if (!nD0x)return;
            var bPP9G = !!vn2x[3], s5x = k5p.cV6P(nD0x, function (iy9p) {
                return d5i == iy9p.sfun && bPP9G == iy9p.capt
            });
            if (s5x < 0)return;
            var iy9p = nD0x.splice(s5x, 1)[0];
            return !iy9p ? null : [a4e.y5D(tn1x), iy9p.type, iy9p.func, iy9p.capt]
        };
        return function () {
            var bg5l = bPK9B.apply(null, arguments);
            if (!!bg5l) {
                ba5f.YK0x.apply(ba5f, bg5l);
                bKr8j(bg5l[0])
            }
            return this
        }
    }();
    h5m.iA9r = cP6J.iA9r = function () {
        var brR5W = function () {
            var vn2x = arguments, tn1x = a4e.ks9j(vn2x[0]), nD0x = R5W[tn1x], Am4q = (vn2x[1] || "").toLowerCase();
            if (!nD0x || !Am4q)return;
            var E5J = a4e.y5D(tn1x);
            k5p.mn0x(nD0x[Am4q], function (iy9p, s5x, i5n) {
                ba5f.YK0x(E5J, iy9p.type, iy9p.func, iy9p.capt);
                i5n.splice(s5x, 1)
            });
            delete nD0x[Am4q]
        };
        var bPQ9H = function (E5J) {
            E5J = a4e.y5D(E5J);
            if (!E5J)return;
            var C5H = E5J.id;
            k5p.ed7W(R5W[C5H], function (i5n, t5y) {
                brR5W(C5H, t5y)
            });
            delete R5W[C5H]
        };
        return function (E5J, t5y) {
            !t5y ? bPQ9H(E5J) : brR5W(E5J, t5y);
            bKr8j(E5J);
            return this
        }
    }();
    h5m.U5Z = function () {
        var blI3x;
        var FB5G = function (T5Y, E5J) {
            var bs5x = T5Y.split(":");
            if (bs5x.length > 1) {
                if (!blI3x) blI3x = {c: a4e.by5D, d: a4e.u5z, a: a4e.gv7o};
                var FC5H = blI3x[bs5x[0]];
                if (!!FC5H)return !!FC5H(E5J, bs5x[1]);
                T5Y = bs5x[1]
            }
            return !!a4e.gv7o(E5J, T5Y) || !!a4e.u5z(E5J, T5Y) || a4e.by5D(E5J, T5Y)
        };
        return function (d5i) {
            if (!d5i)return null;
            var E5J = d5i.target || d5i.srcElement, dC7v = arguments[1];
            if (!dC7v)return E5J;
            if (k5p.fh7a(dC7v)) dC7v = FB5G.g5l(null, dC7v);
            if (k5p.gd7W(dC7v)) {
                while (E5J) {
                    if (!!dC7v(E5J))return E5J;
                    E5J = E5J.parentNode
                }
                return null
            }
            return E5J
        }
    }();
    h5m.bh5m = function (d5i) {
        h5m.rP1x(d5i);
        h5m.cd6X(d5i);
        return this
    };
    h5m.rP1x = function (d5i) {
        if (!!d5i) {
            !!d5i.stopPropagation ? d5i.stopPropagation() : d5i.cancelBubble = !0
        }
        return this
    };
    h5m.cd6X = function (d5i) {
        if (!!d5i) {
            !!d5i.preventDefault ? d5i.preventDefault() : d5i.returnValue = !1
        }
        return this
    };
    h5m.cwV6P = function () {
        var pz0x = !1;
        var bQl9c = function () {
            if (pz0x)return;
            pz0x = !0;
            h5m.q5v(document, "click", bQt9k, !0)
        };
        var bQt9k = function (d5i) {
            var E5J = h5m.U5Z(d5i), bQw9n = a4e.u5z(E5J, "stopped");
            if (bQw9n == "true") {
                h5m.bh5m(d5i);
                a4e.u5z(E5J, "stopped", "false")
            }
        };
        return function (d5i) {
            if (!d5i)return;
            if (d5i.type == "click") {
                h5m.bh5m(d5i);
                return
            }
            bQl9c();
            a4e.u5z(h5m.U5Z(d5i), "stopped", "true")
        }
    }();
    h5m.kF9w = function (d5i) {
        return d5i.pageX != null ? d5i.pageX : d5i.clientX + a4e.oz0x().scrollLeft
    };
    h5m.nY0x = function (d5i) {
        return d5i.pageY != null ? d5i.pageY : d5i.clientY + a4e.oz0x().scrollTop
    };
    h5m.z5E = cP6J.z5E = function (E5J, t5y, e5j) {
        var bg5l = ba5f.As4w(E5J, t5y);
        if (!!bg5l) ba5f.bnY4c(bg5l[0], bg5l[1], e5j);
        return this
    };
    c5h("dbg").dumpEV = function () {
        return R5W
    };
    cP6J.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a)return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e)try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c)return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h)p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a)!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a)!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)!(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w)return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]")return "" + g;
                        if (i == "[object Number]")return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]")return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)if (e[a] === g)throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34)break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;)e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@")return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]")break;
                                    if (c)if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}")break;
                                    if (c)if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d)if (m.call(d) == "[object Array]")for (h = d.length; h--;)I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p");
    if (N5S.ma0x.trident0)return;
    JSON.parse = JSON.parse.ef7Y(function (d5i) {
        var cN6H = d5i.args[0] || "";
        if (cN6H.length >= 5e5) {
            d5i.stopped = !0;
            d5i.value = eval("(" + cN6H + ")")
        }
    })
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, dP7I = c5h("nej.g"), a4e = c5h("nej.e"), k5p = c5h("nej.u"),
        h5m = c5h("nej.v"), ba5f = c5h("nej.h"), cP6J = c5h("nej.x"), FG5L, blt3x = {},
        R5W = document.createDocumentFragment();
    a4e.ks9j = cP6J.ks9j = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return;
        var C5H = !!E5J.id ? E5J.id : "auto-id-" + k5p.bls3x(16);
        E5J.id = C5H;
        if (a4e.y5D(C5H) != E5J) blt3x[C5H] = E5J;
        return C5H
    };
    a4e.y5D = cP6J.y5D = function (E5J) {
        var f5k = blt3x["" + E5J];
        if (!!f5k)return f5k;
        if (!k5p.fh7a(E5J) && !k5p.ux2x(E5J))return E5J;
        return document.getElementById(E5J)
    };
    a4e.cQ6K = cP6J.cQ6K = function (E5J, dH7A) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return null;
        var i5n = ba5f.bpi4m(E5J);
        if (!!dH7A) k5p.mn0x(i5n, function (f5k, s5x) {
            if (!a4e.by5D(f5k, dH7A)) i5n.splice(s5x, 1)
        });
        return i5n
    };
    a4e.I5N = cP6J.I5N = function (E5J, fd7W) {
        E5J = a4e.y5D(E5J);
        return !E5J ? null : ba5f.bpg4k(E5J, fd7W.trim())
    };
    a4e.bJn8f = cP6J.bJn8f = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) {
            E5J = E5J.parentNode;
            while (!!E5J) {
                if (E5J.scrollHeight > E5J.clientHeight)break;
                E5J = E5J.parentNode
            }
            if (!!E5J)return E5J
        }
        var nD0x = document.body.scrollHeight, Am4q = document.documentElement.scrollHeight;
        return Am4q >= nD0x ? document.documentElement : document.body
    };
    a4e.oz0x = function () {
        var bJu8m = function (i5n) {
            var m5r = 0;
            k5p.be5j(i5n, function (gj7c) {
                if (!gj7c)return;
                if (!m5r) {
                    m5r = gj7c
                } else {
                    m5r = Math.min(m5r, gj7c)
                }
            });
            return m5r
        };
        return function (uE2x) {
            var FH5M = uE2x || document, Ai4m = FH5M.body, Ah4l = FH5M.documentElement, m5r = {
                scrollTop: Math.max(Ai4m.scrollTop, Ah4l.scrollTop),
                scrollLeft: Math.max(Ai4m.scrollLeft, Ah4l.scrollLeft),
                clientWidth: bJu8m([Ai4m.clientWidth, Ai4m.offsetWidth, Ah4l.clientWidth, Ah4l.offsetWidth]),
                clientHeight: bJu8m([Ai4m.clientHeight, Ai4m.offsetHeight, Ah4l.clientHeight, Ah4l.offsetHeight])
            };
            m5r.scrollWidth = Math.max(m5r.clientWidth, Ai4m.scrollWidth, Ah4l.scrollWidth);
            m5r.scrollHeight = Math.max(m5r.clientHeight, Ai4m.scrollHeight, Ah4l.scrollHeight);
            return m5r
        }
    }();
    a4e.cwP6J = function (ge7X, nn0x) {
        var m5r = NEJ.X({}, nn0x), bLI8A = ge7X.width / ge7X.height, Xm0x = nn0x.width / nn0x.height;
        if (bLI8A > Xm0x && nn0x.height > ge7X.height) {
            m5r.height = ge7X.height;
            m5r.width = m5r.height * Xm0x
        }
        if (bLI8A < Xm0x && nn0x.width > ge7X.width) {
            m5r.width = ge7X.width;
            m5r.height = m5r.width / Xm0x
        }
        return m5r
    };
    a4e.cwO6I = function () {
        var cM6G = /\s+/;
        var te1x = {
            left: function () {
                return 0
            }, center: function (gC7v, nn0x) {
                return (gC7v.width - nn0x.width) / 2
            }, right: function (gC7v, nn0x) {
                return gC7v.width - nn0x.width
            }, top: function () {
                return 0
            }, middle: function (gC7v, nn0x) {
                return (gC7v.height - nn0x.height) / 2
            }, bottom: function (gC7v, nn0x) {
                return gC7v.height - nn0x.height
            }
        };
        return function (gC7v, nn0x, mQ0x) {
            var m5r = {}, bs5x = (mQ0x || "").split(cM6G), gg7Z = te1x[bs5x[1]] || te1x.middle,
                gG8y = te1x[bs5x[0]] || te1x.center;
            m5r.top = gg7Z(gC7v, nn0x);
            m5r.left = gG8y(gC7v, nn0x);
            return m5r
        }
    }();
    a4e.rJ1x = cP6J.rJ1x = function (E5J, dH7A) {
        ba5f.boS4W(E5J, dH7A || a4e.u5z(E5J, "hover") || "js-hover");
        return this
    };
    a4e.FK5P = cP6J.FK5P = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return;
        ba5f.boP4T(E5J)
    };
    a4e.bQT9K = cP6J.bQT9K = function () {
        var R5W = {}, bta5f = 2;
        var bRB9s = function (C5H, dH7A, d5i) {
            R5W[C5H] = [h5m.kF9w(d5i), h5m.nY0x(d5i)];
            a4e.x5C(C5H, dH7A)
        };
        var bRQ9H = function (C5H, dH7A, d5i) {
            var bE5J = R5W[C5H];
            if (!k5p.ep7i(bE5J))return;
            var bSg0x = Math.abs(h5m.kF9w(d5i) - bE5J[0]), bSn0x = Math.abs(h5m.nY0x(d5i) - bE5J[1]);
            if (bSg0x > bta5f || bSn0x > bta5f) bkK3x(C5H, dH7A)
        };
        var bkK3x = function (C5H, dH7A) {
            if (k5p.ep7i(R5W[C5H])) {
                R5W[C5H] = -1;
                a4e.w5B(C5H, dH7A)
            }
        };
        return function (E5J, dH7A) {
            var C5H = a4e.ks9j(E5J);
            if (!C5H || R5W[C5H] != null)return;
            R5W[C5H] = -1;
            dH7A = dH7A || a4e.u5z(C5H, "highlight") || "js-highlight";
            h5m.q5v(C5H, "touchstart", bRB9s.g5l(null, C5H, dH7A));
            h5m.q5v(document, "touchmove", bRQ9H.g5l(null, C5H, dH7A));
            h5m.q5v(document, "touchend", bkK3x.g5l(null, C5H, dH7A));
            h5m.q5v(document, "touchcancel", bkK3x.g5l(null, C5H, dH7A))
        }
    }();
    a4e.Ag4k = cP6J.Ag4k = function () {
        var bSC0x = function (C5H, dH7A, bSG0x) {
            var E5J = a4e.y5D(C5H), d5i = {clazz: dH7A, target: E5J};
            if (a4e.by5D(E5J, dH7A)) {
                d5i.toggled = !1;
                a4e.w5B(E5J, dH7A)
            } else {
                d5i.toggled = !0;
                a4e.x5C(E5J, dH7A)
            }
            bSG0x.call(null, d5i)
        };
        return function (E5J, e5j) {
            E5J = a4e.y5D(E5J);
            if (!!E5J) {
                var id8V = {ontoggle: bm5r, clazz: "js-toggle", element: E5J.parentNode};
                if (k5p.fh7a(e5j)) {
                    var f5k = a4e.y5D(e5j);
                    !!f5k ? id8V.element = f5k : id8V.clazz = e5j
                } else {
                    NEJ.EX(id8V, e5j);
                    id8V.element = a4e.y5D(id8V.element)
                }
                var C5H = a4e.ks9j(id8V.element);
                h5m.q5v(E5J, "click", bSC0x.g5l(null, C5H, id8V.clazz, id8V.ontoggle || bm5r))
            }
            return this
        }
    }();
    a4e.lT0x = cP6J.lT0x = function (E5J, e5j) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return;
        var eI7B = 0, dH7A = "js-focus";
        if (k5p.ux2x(e5j)) {
            eI7B = e5j
        } else if (k5p.fh7a(e5j)) {
            dH7A = e5j
        } else if (k5p.kf9W(e5j)) {
            eI7B = e5j.mode || eI7B;
            dH7A = e5j.clazz || dH7A
        }
        var A5F = parseInt(a4e.u5z(E5J, "mode"));
        if (!isNaN(A5F)) eI7B = A5F;
        A5F = a4e.u5z(E5J, "focus");
        if (!!A5F) dH7A = A5F;
        ba5f.boK4O(E5J, eI7B, dH7A);
        return this
    };
    a4e.cU6O = function () {
        var bv5A = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (eV7O, fd7W, bB5G) {
            var E5J = document.createElement(eV7O);
            NEJ.X(E5J, bv5A[eV7O.toLowerCase()]);
            if (!!fd7W) E5J.className = fd7W;
            bB5G = a4e.y5D(bB5G);
            if (!!bB5G) bB5G.appendChild(E5J);
            return E5J
        }
    }();
    a4e.XV0x = function () {
        var bUc0x = function () {
            if (location.hostname == document.domain)return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bUK0x = function (T5Y) {
            T5Y = T5Y.trim();
            if (!T5Y)return a4e.cU6O("iframe");
            var fa7T;
            try {
                fa7T = document.createElement('<iframe name="' + T5Y + '"></iframe>');
                fa7T.frameBorder = 0
            } catch (e) {
                fa7T = a4e.cU6O("iframe");
                fa7T.name = T5Y
            }
            return fa7T
        };
        return function (e5j) {
            e5j = e5j || Y5d;
            var fa7T = bUK0x(e5j.name || "");
            if (!e5j.visible) fa7T.style.display = "none";
            if (k5p.gd7W(e5j.onload)) h5m.q5v(fa7T, "load", function (d5i) {
                if (!fa7T.src)return;
                h5m.iA9r(fa7T, "load");
                e5j.onload(d5i)
            });
            var bB5G = e5j.parent;
            if (k5p.gd7W(bB5G)) {
                try {
                    bB5G(fa7T)
                } catch (e) {
                }
            } else {
                (a4e.y5D(bB5G) || document.body).appendChild(fa7T)
            }
            var dt7m = e5j.src || bUc0x();
            window.setTimeout(function () {
                fa7T.src = dt7m
            }, 0);
            return fa7T
        }
    }();
    a4e.cE6y = cP6J.cE6y = function () {
        var byB6v = function (PF8x) {
            PF8x.src = dP7I.bpm4q
        };
        var byM6G = function (ui2x) {
            ui2x.src = "about:blank"
        };
        return function (E5J, bUQ0x) {
            E5J = a4e.y5D(E5J);
            if (!E5J)return this;
            if (!bUQ0x) h5m.iA9r(E5J);
            delete blt3x[E5J.id];
            var eV7O = E5J.tagName;
            if (eV7O == "IFRAME") {
                byM6G(E5J)
            } else if (eV7O == "IMG") {
                byB6v(E5J)
            } else if (!!E5J.getElementsByTagName) {
                k5p.be5j(E5J.getElementsByTagName("img"), byB6v);
                k5p.be5j(E5J.getElementsByTagName("iframe"), byM6G)
            }
            if (!!E5J.parentNode) {
                E5J.parentNode.removeChild(E5J)
            }
            return this
        }
    }();
    a4e.lV0x = cP6J.lV0x = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) R5W.appendChild(E5J);
        return this
    };
    a4e.bAi6c = cP6J.bAi6c = function (E5J) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return;
        k5p.mn0x(E5J.childNodes, function (f5k) {
            a4e.cE6y(f5k)
        })
    };
    a4e.FT5Y = cP6J.FT5Y = function () {
        var dH7A, fT7M = /\s+/;
        var bVa0x = function () {
            if (!!dH7A)return;
            dH7A = a4e.rH1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a4e.bBx6r()
        };
        return function (E5J, e5j) {
            E5J = a4e.y5D(E5J);
            if (!E5J)return;
            bVa0x();
            e5j = e5j || Y5d;
            var bB5G = E5J.parentNode;
            if (!a4e.by5D(bB5G, dH7A)) {
                bB5G = a4e.cU6O("span", dH7A);
                E5J.insertAdjacentElement("beforeBegin", bB5G);
                bB5G.appendChild(E5J)
            }
            var bCr7k = e5j.nid || "", f5k = a4e.I5N(bB5G, bCr7k || dH7A + "-show")[0];
            if (!f5k) {
                var dB7u = ((e5j.clazz || "") + " " + bCr7k).trim();
                dB7u = dH7A + "-show" + (!dB7u ? "" : " ") + dB7u;
                f5k = a4e.cU6O(e5j.tag || "span", dB7u);
                bB5G.appendChild(f5k)
            }
            var dB7u = e5j.clazz;
            if (!!dB7u) {
                dB7u = (dB7u || "").trim().split(fT7M)[0] + "-parent";
                a4e.x5C(bB5G, dB7u)
            }
            return f5k
        }
    }();
    a4e.u5z = cP6J.u5z = function () {
        var bkx3x = {}, eV7O = "data-", cM6G = /\-(.{1})/gi;
        var CD5I = function (E5J) {
            var C5H = a4e.ks9j(E5J);
            if (!!bkx3x[C5H])return;
            var bv5A = {};
            k5p.be5j(E5J.attributes, function (f5k) {
                var J5O = f5k.nodeName;
                if (J5O.indexOf(eV7O) != 0)return;
                J5O = J5O.replace(eV7O, "").replace(cM6G, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv5A[J5O] = f5k.nodeValue || ""
            });
            bkx3x[C5H] = bv5A
        };
        return function (E5J, J5O, A5F) {
            E5J = a4e.y5D(E5J);
            if (!E5J)return null;
            var WH9y = E5J.dataset;
            if (!WH9y) {
                CD5I(E5J);
                WH9y = bkx3x[E5J.id]
            }
            if (A5F !== undefined) WH9y[J5O] = A5F;
            return WH9y[J5O]
        }
    }();
    a4e.gv7o = cP6J.gv7o = function (E5J, T5Y, A5F) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return "";
        if (A5F !== undefined && !!E5J.setAttribute) E5J.setAttribute(T5Y, A5F);
        return ba5f.bnt4x(E5J, T5Y)
    };
    a4e.na0x = function (dq6k) {
        var qQ1x = document.createElement("div");
        qQ1x.innerHTML = dq6k;
        var i5n = a4e.cQ6K(qQ1x);
        return i5n.length > 1 ? qQ1x : i5n[0]
    };
    a4e.bVo0x = cP6J.bVo0x = function (E5J) {
        E5J = a4e.y5D(E5J);
        return !E5J ? "" : ba5f.boE4I(E5J)
    };
    a4e.bHs7l = function (Av4z) {
        Av4z = (Av4z || "").trim();
        return !Av4z ? null : ba5f.boD4H(Av4z)
    };
    a4e.bVs0x = function (cY6S, t5y) {
        cY6S = cY6S || "";
        switch (t5y) {
            case"xml":
                cY6S = a4e.bHs7l(cY6S);
                break;
            case"json":
                try {
                    cY6S = JSON.parse(cY6S)
                } catch (ex) {
                    cY6S = null
                }
                break
        }
        return cY6S
    };
    a4e.hL8D = cP6J.hL8D = function () {
        var bWO0x = function (E5J) {
            return E5J == document.body || E5J == document.documentElement
        };
        return function (dI7B, nT0x) {
            dI7B = a4e.y5D(dI7B);
            if (!dI7B)return null;
            nT0x = a4e.y5D(nT0x) || null;
            var m5r = {x: 0, y: 0}, bko3x, df6Z, WD9u;
            while (!!dI7B && dI7B != nT0x) {
                bko3x = bWO0x(dI7B);
                df6Z = bko3x ? 0 : dI7B.scrollLeft;
                WD9u = parseInt(a4e.cZ6T(dI7B, "borderLeftWidth")) || 0;
                m5r.x += dI7B.offsetLeft + WD9u - df6Z;
                df6Z = bko3x ? 0 : dI7B.scrollTop;
                WD9u = parseInt(a4e.cZ6T(dI7B, "borderTopWidth")) || 0;
                m5r.y += dI7B.offsetTop + WD9u - df6Z;
                dI7B = dI7B.offsetParent
            }
            return m5r
        }
    }();
    a4e.mZ0x = cP6J.mZ0x = function (E5J) {
        var bj5o = a4e.hL8D(E5J);
        window.scrollTo(bj5o.x, bj5o.y);
        return this
    };
    a4e.cwn6h = function (sa1x) {
        sa1x = (sa1x || "").trim();
        return ba5f.bCt7m(sa1x)
    };
    a4e.bWP0x = cP6J.bWP0x = function (E5J, T5Y, bv5A) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return this;
        var A5F = ba5f.bKv8n(T5Y, bv5A);
        if (!A5F)return this;
        a4e.X5c(E5J, "transform", A5F);
        return this
    };
    a4e.fy7r = cP6J.fy7r = function (E5J, bv5A) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) k5p.ed7W(bv5A, function (A5F, T5Y) {
            a4e.X5c(E5J, T5Y, A5F)
        });
        return this
    };
    a4e.bWV0x = cP6J.bWV0x = function (fE7x, e5j) {
        fE7x = a4e.y5D(fE7x);
        if (!fE7x)return {start: 0, end: 0};
        if (k5p.ux2x(e5j)) e5j = {start: e5j, end: e5j};
        if (e5j != null) {
            if (e5j.end == null) e5j.end = e5j.start || 0;
            ba5f.boM4Q(fE7x, e5j)
        } else {
            e5j = ba5f.boL4P(fE7x)
        }
        return e5j
    };
    a4e.X5c = cP6J.X5c = function (E5J, T5Y, A5F) {
        E5J = a4e.y5D(E5J);
        if (!!E5J) ba5f.bnV4Z(E5J, T5Y, A5F);
        return this
    };
    a4e.cZ6T = cP6J.cZ6T = function (E5J, T5Y) {
        E5J = a4e.y5D(E5J);
        if (!E5J)return "";
        var gq7j = !window.getComputedStyle ? E5J.currentStyle || Y5d : window.getComputedStyle(E5J, null);
        return gq7j[ba5f.bMN9E(T5Y)] || ""
    };
    a4e.bLM8E = function () {
        var cM6G = /[\s\r\n]+/gi;
        return function (cc6W) {
            cc6W = (cc6W || "").trim().replace(cM6G, " ");
            if (!cc6W)return;
            var f5k = a4e.cU6O("style");
            document.head.appendChild(f5k);
            ba5f.bnI4M(f5k, ba5f.bPy9p(cc6W));
            return f5k
        }
    }();
    a4e.bMt8l = function (vM3x) {
        try {
            vM3x = vM3x.trim();
            if (!!vM3x)return (new Function(vM3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a4e.rH1x = function () {
        var cM6G = /#<.*?>/g, fR7K = +(new Date);
        return function (jh9Y) {
            if (!FG5L) FG5L = [];
            var fd7W = "auto-" + fR7K++;
            FG5L.push(jh9Y.replace(cM6G, fd7W));
            return fd7W
        }
    }();
    a4e.bBx6r = function () {
        if (!!FG5L) {
            a4e.bLM8E(FG5L.join(""));
            FG5L = null
        }
        return this
    };
    a4e.cwk6e = function (cc6W, jh9Y) {
        cc6W = a4e.y5D(cc6W);
        return !cc6W ? null : ba5f.bnC4G(cc6W, jh9Y)
    };
    a4e.x5C = cP6J.x5C = function () {
        ba5f.bpf4j.apply(ba5f, arguments);
        return this
    };
    a4e.w5B = cP6J.w5B = function () {
        ba5f.bpd4h.apply(ba5f, arguments);
        return this
    };
    a4e.ev7o = cP6J.ev7o = function () {
        ba5f.PK8C.apply(ba5f, arguments);
        return this
    };
    a4e.by5D = cP6J.by5D = function () {
        return ba5f.boX4b.apply(ba5f, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cP6J.isChange = !0
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, bm5r = NEJ.F, a4e = c5h("nej.e"), ba5f = c5h("nej.h"),
        k5p = c5h("nej.u");
    var Bd4h = function (j5o, t5y) {
        try {
            t5y = t5y.toLowerCase();
            if (j5o === null)return t5y == "null";
            if (j5o === undefined)return t5y == "undefined";
            return Y5d.toString.call(j5o).toLowerCase() == "[object " + t5y + "]"
        } catch (e) {
            return !1
        }
    };
    k5p.gd7W = function (j5o) {
        return Bd4h(j5o, "function")
    };
    k5p.fh7a = function (j5o) {
        return Bd4h(j5o, "string")
    };
    k5p.ux2x = function (j5o) {
        return Bd4h(j5o, "number")
    };
    k5p.cwj6d = function (j5o) {
        return Bd4h(j5o, "boolean")
    };
    k5p.FZ5e = function (j5o) {
        return Bd4h(j5o, "date")
    };
    k5p.ep7i = function (j5o) {
        return Bd4h(j5o, "array")
    };
    k5p.kf9W = function (j5o) {
        return Bd4h(j5o, "object")
    };
    k5p.fv7o = function () {
        var cM6G = /[^\x00-\xfff]/g;
        return function (bi5n) {
            return ("" + (bi5n || "")).replace(cM6G, "**").length
        }
    }();
    k5p.cV6P = function (i5n, r5w) {
        var dC7v = k5p.gd7W(r5w) ? r5w : function (A5F) {
            return A5F === r5w
        }, s5x = k5p.ed7W(i5n, dC7v);
        return s5x != null ? s5x : -1
    };
    k5p.cwf6Z = function () {
        var bsG5L;
        var Rc8U = function (i5n, nX0x, nk0x) {
            if (nX0x > nk0x)return -1;
            var CS5X = Math.ceil((nX0x + nk0x) / 2), m5r = bsG5L(i5n[CS5X], CS5X, i5n);
            if (m5r == 0)return CS5X;
            if (m5r < 0)return Rc8U(i5n, nX0x, CS5X - 1);
            return Rc8U(i5n, CS5X + 1, nk0x)
        };
        return function (i5n, FC5H) {
            bsG5L = FC5H || bm5r;
            return Rc8U(i5n, 0, i5n.length - 1)
        }
    }();
    k5p.mn0x = function (i5n, dn6h, if8X) {
        if (!i5n || !i5n.length || !k5p.gd7W(dn6h))return null;
        for (var i = i5n.length - 1; i >= 0; i--)if (!!dn6h.call(if8X, i5n[i], i, i5n))return i;
        return null
    };
    k5p.be5j = function (i5n, dn6h, if8X) {
        if (!i5n || !i5n.length || !k5p.gd7W(dn6h))return this;
        if (!!i5n.forEach) {
            i5n.forEach(dn6h, if8X);
            return this
        }
        for (var i = 0, l = i5n.length; i < l; i++)dn6h.call(if8X, i5n[i], i, i5n);
        return this
    };
    k5p.ed7W = function (i5n, dn6h, if8X) {
        if (!i5n || !k5p.gd7W(dn6h))return null;
        if (i5n.length != null) {
            if (i5n.length > 0)for (var i = 0, l = i5n.length; i < l; i++)if (!!dn6h.call(if8X, i5n[i], i, i5n))return i
        }
        if (k5p.kf9W(i5n)) {
            for (var x in i5n)if (i5n.hasOwnProperty(x) && !!dn6h.call(if8X, i5n[x], x, i5n))return x
        }
        return null
    };
    k5p.bXN1x = function (ii8a, bXP1x, e5j) {
        ii8a = ii8a || [];
        e5j = e5j || Y5d;
        var bvP5U = !!e5j.union, ub2x = !!e5j.begin, Wp9g = e5j.compare, bXY1x = bvP5U && ub2x ? k5p.mn0x : k5p.be5j;
        bXY1x(bXP1x, function (r5w) {
            if (!!Wp9g) Wp9g = Wp9g.ec7V(r5w);
            var s5x = k5p.cV6P(ii8a, Wp9g || r5w);
            if (s5x >= 0) ii8a.splice(s5x, 1);
            if (bvP5U) ii8a[ub2x ? "unshift" : "push"](r5w)
        });
        return ii8a
    };
    k5p.DI5N = function (bv5A, bi5n) {
        if (!bv5A || !bi5n || !bi5n.replace)return bi5n || "";
        return bi5n.replace(bv5A.r, function ($1) {
            var m5r = bv5A[!bv5A.i ? $1.toLowerCase() : $1];
            return m5r != null ? m5r : $1
        })
    };
    k5p.dM7F = function () {
        var bv5A = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bi5n) {
            return k5p.DI5N(bv5A, bi5n)
        }
    }();
    k5p.JD6x = function () {
        var bv5A = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bi5n) {
            return k5p.DI5N(bv5A, bi5n)
        }
    }();
    k5p.iU9L = function () {
        var bv5A = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, bYk1x = ["上午", "下午"],
            bYp1x = ["A.M.", "P.M."], bjJ3x = ["日", "一", "二", "三", "四", "五", "六"],
            bYq1x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            bYr1x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var JG6A = function (ft7m) {
            ft7m = parseInt(ft7m) || 0;
            return (ft7m < 10 ? "0" : "") + ft7m
        };
        var bYB1x = function (ok0x) {
            return ok0x < 12 ? 0 : 1
        };
        return function (bA5F, Gq6k, bYL1x) {
            if (!bA5F || !Gq6k)return "";
            bA5F = k5p.Wi9Z(bA5F);
            bv5A.yyyy = bA5F.getFullYear();
            bv5A.yy = ("" + bv5A.yyyy).substr(2);
            bv5A.M = bA5F.getMonth() + 1;
            bv5A.MM = JG6A(bv5A.M);
            bv5A.eM = bYr1x[bv5A.M - 1];
            bv5A.cM = bYq1x[bv5A.M - 1];
            bv5A.d = bA5F.getDate();
            bv5A.dd = JG6A(bv5A.d);
            bv5A.H = bA5F.getHours();
            bv5A.HH = JG6A(bv5A.H);
            bv5A.m = bA5F.getMinutes();
            bv5A.mm = JG6A(bv5A.m);
            bv5A.s = bA5F.getSeconds();
            bv5A.ss = JG6A(bv5A.s);
            bv5A.ms = bA5F.getMilliseconds();
            bv5A.w = bjJ3x[bA5F.getDay()];
            var bAO6I = bYB1x(bv5A.H);
            bv5A.ct = bYk1x[bAO6I];
            bv5A.et = bYp1x[bAO6I];
            if (!!bYL1x) {
                bv5A.H = bv5A.H % 12
            }
            return k5p.DI5N(bv5A, Gq6k)
        }
    }();
    k5p.Wi9Z = function (bA5F) {
        var cC6w = bA5F;
        if (k5p.fh7a(bA5F)) cC6w = new Date(Date.parse(bA5F));
        if (!k5p.FZ5e(bA5F)) cC6w = new Date(bA5F);
        return cC6w
    };
    k5p.FK5P = function (bZl1x, bZp1x) {
        return (new Number(bZl1x)).toFixed(bZp1x)
    };
    k5p.bjt3x = function () {
        var fT7M = /([^\/:])\/.*$/, ji9Z = /\/[^\/]+$/, BQ4U = /[#\?]/, bjm3x = location.href.split(/[?#]/)[0],
            rz1x = document.createElement("a");
        var bjj3x = function (lo9f) {
            return (lo9f || "").indexOf("://") > 0
        };
        var bDR7K = function (lo9f) {
            return (lo9f || "").split(BQ4U)[0].replace(ji9Z, "/")
        };
        var bZx1x = function (lo9f, fo7h) {
            if (lo9f.indexOf("/") == 0)return fo7h.replace(fT7M, "$1") + lo9f;
            return bDR7K(fo7h) + lo9f
        };
        bjm3x = bDR7K(bjm3x);
        return function (lo9f, fo7h) {
            lo9f = (lo9f || "").trim();
            if (!bjj3x(fo7h)) fo7h = bjm3x;
            if (!lo9f)return fo7h;
            if (bjj3x(lo9f))return lo9f;
            lo9f = bZx1x(lo9f, fo7h);
            rz1x.href = lo9f;
            lo9f = rz1x.href;
            return bjj3x(lo9f) ? lo9f : rz1x.getAttribute("href", 4)
        }
    }();
    k5p.cav1x = function () {
        var cM6G = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V5a) {
            if (cM6G.test(V5a || ""))return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k5p.bFv7o = function (G5L, id8V) {
        if (!G5L)return id8V;
        var T5Y = G5L.tagName.toLowerCase(), i5n = a4e.cQ6K(G5L);
        if (!i5n || !i5n.length) {
            id8V[T5Y] = G5L.textContent || G5L.text || "";
            return id8V
        }
        var dO7H = {};
        id8V[T5Y] = dO7H;
        k5p.be5j(i5n, function (f5k) {
            k5p.bFv7o(f5k, dO7H)
        });
        return id8V
    };
    k5p.cvM6G = function (Av4z) {
        try {
            return k5p.bFv7o(a4e.bHs7l(Av4z), {})
        } catch (ex) {
            return null
        }
    };
    k5p.bFz7s = function (hA8s, Kc6W) {
        var id8V = {};
        k5p.be5j((hA8s || "").split(Kc6W), function (T5Y) {
            var VW9N = T5Y.split("=");
            if (!VW9N || !VW9N.length)return;
            var J5O = VW9N.shift();
            if (!J5O)return;
            id8V[decodeURIComponent(J5O)] = decodeURIComponent(VW9N.join("="))
        });
        return id8V
    };
    k5p.vt2x = function (gc7V, Kc6W, cbk1x) {
        if (!gc7V)return "";
        var bs5x = [];
        for (var x in gc7V) {
            bs5x.push(encodeURIComponent(x) + "=" + (!!cbk1x ? encodeURIComponent(gc7V[x]) : gc7V[x]))
        }
        return bs5x.join(Kc6W || ",")
    };
    k5p.hq8i = function (bD5I) {
        return k5p.bFz7s(bD5I, "&")
    };
    k5p.de6Y = function (gc7V) {
        return k5p.vt2x(gc7V, "&", !0)
    };
    k5p.cvG6A = function (gc7V) {
        return ba5f.EP5U(gc7V)
    };
    k5p.cvF6z = function (i5n, dC7v) {
        var m5r = {};
        k5p.be5j(i5n, function (r5w) {
            var J5O = r5w;
            if (!!dC7v) {
                J5O = dC7v(r5w)
            }
            m5r[J5O] = r5w
        });
        return m5r
    };
    k5p.cvE6y = function (ft7m, fW7P) {
        var cbq1x = ("" + ft7m).length, cbt1x = Math.max(1, parseInt(fW7P) || 0), df6Z = cbt1x - cbq1x;
        if (df6Z > 0) {
            ft7m = (new Array(df6Z + 1)).join("0") + ft7m
        }
        return "" + ft7m
    };
    k5p.VO9F = function (gc7V, T5Y) {
        if (!k5p.ep7i(T5Y)) {
            try {
                delete gc7V[T5Y]
            } catch (e) {
                gc7V[T5Y] = undefined
            }
            return this
        }
        k5p.be5j(T5Y, k5p.VO9F.g5l(k5p, gc7V));
        return this
    };
    k5p.bls3x = function () {
        var bKO8G = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq5v) {
            bq5v = bq5v || 10;
            var m5r = [];
            for (var i = 0, bKV8N; i < bq5v; ++i) {
                bKV8N = Math.floor(Math.random() * bKO8G.length);
                m5r.push(bKO8G.charAt(bKV8N))
            }
            return m5r.join("")
        }
    }();
    k5p.Ks7l = function (hg8Y, ge7X) {
        return Math.floor(Math.random() * (ge7X - hg8Y) + hg8Y)
    };
    k5p.mU0x = function (bq5v) {
        bq5v = Math.max(0, Math.min(bq5v || 8, 30));
        var hg8Y = Math.pow(10, bq5v - 1), ge7X = hg8Y * 10;
        return k5p.Ks7l(hg8Y, ge7X).toString()
    };
    k5p.VD9u = function () {
        var fR7K = +(new Date);
        return function () {
            return "" + fR7K++
        }
    }()
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, bm5r = NEJ.F, h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        N5S = c5h("nej.ut"), nV0x;
    if (!!N5S.cz6t)return;
    N5S.cz6t = NEJ.C();
    nV0x = N5S.cz6t.prototype;
    N5S.cz6t.B5G = function (e5j) {
        e5j = e5j || {};
        var cq6k = !!this.zX4b && this.zX4b.shift();
        if (!cq6k) {
            cq6k = new this(e5j);
            this.cbR1x = (this.cbR1x || 0) + 1
        }
        cq6k.bk5p(e5j);
        return cq6k
    };
    N5S.cz6t.S5X = function () {
        var KD7w = function (r5w, s5x, i5n) {
            r5w.S5X();
            i5n.splice(s5x, 1)
        };
        return function (cq6k) {
            if (!cq6k)return null;
            if (!k5p.ep7i(cq6k)) {
                if (!(cq6k instanceof this)) {
                    var fd7W = cq6k.constructor;
                    if (!!fd7W.S5X) fd7W.S5X(cq6k);
                    return null
                }
                if (cq6k == this.eL7E) delete this.eL7E;
                if (cq6k == this.zV4Z) delete this.zV4Z;
                cq6k.bC5H();
                if (!this.zX4b) this.zX4b = [];
                if (k5p.cV6P(this.zX4b, cq6k) < 0) {
                    this.zX4b.push(cq6k)
                }
                return null
            }
            k5p.mn0x(cq6k, KD7w, this)
        }
    }();
    N5S.cz6t.fX7Q = function (e5j) {
        e5j = e5j || {};
        if (!this.eL7E) this.eL7E = this.B5G(e5j);
        return this.eL7E
    };
    N5S.cz6t.ccp1x = function (e5j, qM1x) {
        e5j = e5j || {};
        if (!!qM1x && !!this.zV4Z) {
            this.zV4Z.S5X();
            delete this.zV4Z
        }
        if (!this.zV4Z) {
            this.zV4Z = this.B5G(e5j)
        } else {
            this.zV4Z.bk5p(e5j)
        }
        return this.zV4Z
    };
    nV0x.cm6g = function () {
        var fR7K = +(new Date);
        return function () {
            this.id = fR7K++;
            this.kW9N = {};
            this.bsa5f = {}
        }
    }();
    nV0x.bk5p = function (e5j) {
        this.bin3x(e5j)
    };
    nV0x.bC5H = function () {
        this.iA9r();
        this.GM6G()
    };
    nV0x.bT6N = function () {
        var fR7K = +(new Date);
        var ccw1x = function (bg5l) {
            if (!bg5l || bg5l.length < 3)return;
            this.bsa5f["de-" + fR7K++] = bg5l;
            h5m.q5v.apply(h5m, bg5l)
        };
        return function (i5n) {
            k5p.be5j(i5n, ccw1x, this)
        }
    }();
    nV0x.GM6G = function () {
        var ccx1x = function (bg5l, J5O, bv5A) {
            delete bv5A[J5O];
            h5m.mg0x.apply(h5m, bg5l)
        };
        return function () {
            k5p.ed7W(this.bsa5f, ccx1x)
        }
    }();
    nV0x.cvw6q = function (dC7v) {
        dC7v = dC7v || bm5r;
        k5p.ed7W(this, function (Cy5D, J5O, bv5A) {
            if (!!Cy5D && !!Cy5D.S5X && !dC7v(Cy5D)) {
                delete bv5A[J5O];
                Cy5D.S5X()
            }
        })
    };
    nV0x.S5X = function () {
        this.constructor.S5X(this)
    };
    nV0x.bvm5r = function (t5y) {
        var d5i = this.kW9N[t5y.toLowerCase()];
        return !!d5i && d5i !== bm5r
    };
    nV0x.q5v = function (t5y, d5i) {
        this.vg2x.apply(this, arguments);
        return this
    };
    nV0x.mg0x = function (t5y, d5i) {
        var t5y = (t5y || "").toLowerCase(), dF7y = this.kW9N[t5y];
        if (!k5p.ep7i(dF7y)) {
            if (dF7y == d5i) delete this.kW9N[t5y];
            return
        }
        k5p.mn0x(dF7y, function (eF7y, s5x, i5n) {
            if (eF7y == d5i) i5n.splice(s5x, 1)
        })
    };
    nV0x.vg2x = function (t5y, d5i) {
        if (!!t5y && k5p.gd7W(d5i)) this.kW9N[t5y.toLowerCase()] = d5i;
        return this
    };
    nV0x.bin3x = function () {
        var ccU2x = function (d5i, t5y) {
            this.vg2x(t5y, d5i)
        };
        return function (dF7y) {
            k5p.ed7W(dF7y, ccU2x, this);
            return this
        }
    }();
    nV0x.iA9r = function () {
        var big3x = function (d5i, t5y) {
            this.iA9r(t5y)
        };
        return function (t5y) {
            var t5y = (t5y || "").toLowerCase();
            if (!!t5y) {
                delete this.kW9N[t5y]
            } else {
                k5p.ed7W(this.kW9N, big3x, this)
            }
            return this
        }
    }();
    nV0x.bid3x = function (t5y, d5i) {
        if (!t5y || !k5p.gd7W(d5i))return this;
        t5y = t5y.toLowerCase();
        var dF7y = this.kW9N[t5y];
        if (!dF7y) {
            this.kW9N[t5y] = d5i;
            return this
        }
        if (!k5p.ep7i(dF7y)) {
            this.kW9N[t5y] = [dF7y]
        }
        this.kW9N[t5y].push(d5i);
        return this
    };
    nV0x.z5E = function (t5y) {
        var d5i = this.kW9N[(t5y || "").toLowerCase()];
        if (!d5i)return this;
        var bg5l = eY7R.slice.call(arguments, 1);
        if (!k5p.ep7i(d5i))return d5i.apply(this, bg5l);
        k5p.be5j(d5i, function (db6V) {
            try {
                db6V.apply(this, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N5S.Vn9e = function () {
        var R5W = {};
        return function (C5H, fd7W, e5j) {
            var eA7t = fd7W.ccW2x;
            if (!eA7t) {
                eA7t = k5p.bls3x(10);
                fd7W.ccW2x = eA7t
            }
            var J5O = C5H + "-" + eA7t, cq6k = R5W[J5O];
            if (!!e5j && !cq6k) {
                cq6k = fd7W.B5G(e5j);
                cq6k.S5X = cq6k.S5X.ef7Y(function (d5i) {
                    delete R5W[J5O];
                    delete cq6k.S5X
                });
                R5W[J5O] = cq6k
            }
            return cq6k
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gB7u = function () {
        var cC6w = new Date, ccX2x = +cC6w, bhO3x = 864e5;
        var ccY2x = function (T5Y) {
            var qL1x = document.cookie, rs1x = "\\b" + T5Y + "=", Vg9X = qL1x.search(rs1x);
            if (Vg9X < 0)return "";
            Vg9X += rs1x.length - 2;
            var zR4V = qL1x.indexOf(";", Vg9X);
            if (zR4V < 0) zR4V = qL1x.length;
            return qL1x.substring(Vg9X, zR4V) || ""
        };
        return function (T5Y, j5o) {
            if (j5o === undefined)return ccY2x(T5Y);
            if (u.fh7a(j5o)) {
                if (!!j5o) {
                    document.cookie = T5Y + "=" + j5o + ";";
                    return j5o
                }
                j5o = {expires: -100}
            }
            j5o = j5o || o;
            var qL1x = T5Y + "=" + (j5o.value || "") + ";";
            delete j5o.value;
            if (j5o.expires !== undefined) {
                cC6w.setTime(ccX2x + j5o.expires * bhO3x);
                j5o.expires = cC6w.toGMTString()
            }
            qL1x += u.vt2x(j5o, ";");
            document.cookie = qL1x
        }
    }()
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, is8k = c5h("nej.c"), dP7I = c5h("nej.g"), a4e = c5h("nej.e"), v5A = c5h("nej.j"),
        H5M = c5h("nej.ut"), N5S = c5h("nej.ut.j"), k5p = c5h("nej.u"), b5g;
    if (!!N5S.GX6R)return;
    N5S.GX6R = NEJ.C();
    b5g = N5S.GX6R.O5T(H5M.cz6t);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.oH0x = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.oH0x, e5j);
        var Ay4C = is8k.y5D("csrf");
        if ((/^\/[^\/]/.test(this.oH0x.url) || this.oH0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Ay4C.cookie && !!Ay4C.param) {
            var bD5I = encodeURIComponent(Ay4C.param) + "=" + encodeURIComponent(v5A.gB7u(Ay4C.cookie) || ""),
                Kc6W = this.oH0x.url.indexOf("?") < 0 ? "?" : "&";
            this.oH0x.url += Kc6W + bD5I
        }
        this.Va9R = e5j.headers || {};
        var bi5n = this.Va9R[dP7I.wI3x];
        if (bi5n == null) this.Va9R[dP7I.wI3x] = dP7I.bPd9U
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.zP4T;
        delete this.oH0x;
        delete this.Va9R
    };
    b5g.ccZ2x = function (bi5n) {
        var bv5A = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.oH0x.noescape) {
            return k5p.DI5N(bv5A, bi5n)
        } else {
            return bi5n
        }
    };
    b5g.sF1x = function (d5i) {
        var dX7Q = d5i.status;
        if (dX7Q == -1) {
            this.z5E("onerror", {code: dP7I.bym6g, message: "请求[" + this.oH0x.url + "]超时！"});
            return
        }
        if (("" + dX7Q).indexOf("2") != 0) {
            this.z5E("onerror", {data: dX7Q, code: dP7I.bpq4u, message: "服务器返回异常状态[" + dX7Q + "]!"});
            return
        }
        this.z5E("onload", a4e.bVs0x(this.ccZ2x(d5i.result), this.oH0x.type))
    };
    b5g.cl6f = bm5r;
    b5g.bhw3x = function (j5o) {
        var V5a = this.oH0x.url;
        if (!V5a) {
            this.z5E("onerror", {code: dP7I.bpu4y, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.oH0x.data = j5o == null ? null : j5o;
            var d5i = {request: this.oH0x, headers: this.Va9R};
            try {
                this.z5E("onbeforerequest", d5i)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cl6f(d5i)
        } catch (e) {
            this.z5E("onerror", {code: dP7I.bpq4u, message: "请求[" + V5a + "]失败:" + e.message + "！"})
        }
        return this
    };
    b5g.js9j = bm5r
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, ba5f = c5h("nej.h"), dP7I = c5h("nej.g"), k5p = c5h("nej.u"), N5S = c5h("nej.ut.j"),
        R5W = {}, LK7D;
    if (!!N5S.US9J)return;
    N5S.US9J = NEJ.C();
    LK7D = N5S.US9J.O5T(N5S.GX6R);
    LK7D.bC5H = function () {
        this.bH6B();
        window.clearTimeout(this.dK7D);
        delete this.dK7D;
        try {
            this.qK1x.onreadystatechange = bm5r;
            this.qK1x.abort()
        } catch (e) {
        }
        delete this.qK1x
    };
    LK7D.cl6f = function () {
        var cdb2x = function (A5F, J5O) {
            this.qK1x.setRequestHeader(J5O, A5F)
        };
        return function (e5j) {
            var fC7v = e5j.request, nr0x = e5j.headers;
            this.qK1x = ba5f.bho3x();
            if (nr0x[dP7I.wI3x] === dP7I.CB5G) {
                delete nr0x[dP7I.wI3x];
                this.qK1x.upload.onprogress = this.hh8Z.g5l(this, 1);
                if (fC7v.data.tagName === "FORM") fC7v.data = new FormData(fC7v.data)
            }
            this.qK1x.onreadystatechange = this.hh8Z.g5l(this, 2);
            if (fC7v.timeout != 0) {
                this.dK7D = window.setTimeout(this.hh8Z.g5l(this, 3), fC7v.timeout)
            }
            this.qK1x.open(fC7v.method, fC7v.url, !fC7v.sync);
            k5p.ed7W(nr0x, cdb2x, this);
            if (!!this.oH0x.cookie && "withCredentials" in this.qK1x) this.qK1x.withCredentials = !0;
            this.qK1x.send(fC7v.data)
        }
    }();
    LK7D.hh8Z = function (t5y) {
        switch (t5y) {
            case 1:
                this.z5E("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qK1x.readyState == 4) this.sF1x({
                    status: this.qK1x.status,
                    result: this.qK1x.responseText || ""
                });
                break;
            case 3:
                this.sF1x({status: -1});
                break
        }
    };
    LK7D.js9j = function () {
        this.sF1x({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Mj7c = {}, UO9F = [], bGj7c = /\s+/g, fR7K = +(new Date), Hm6g, bN6H, lR0x;
    var Cz5E = function () {
        var fT7M = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, ji9Z = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            BQ4U = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bhi3x = /^new\s+/,
            cdE2x = /['"]/;
        var ceu2x = function (A5F) {
            if (fT7M.test(A5F))return;
            A5F = A5F.split(".")[0].trim();
            if (!A5F || cdE2x.test(A5F))return;
            A5F = A5F.replace(bhi3x, "");
            try {
                if (BQ4U.test(A5F))return;
                lR0x[A5F] = 1
            } catch (e) {
            }
        };
        return function (bi5n) {
            bi5n = bi5n || "";
            if (!bi5n || fT7M.test(bi5n))return;
            var bs5x = bi5n.split(ji9Z);
            for (var i = 0, l = bs5x.length; i < l; i++)ceu2x(bs5x[i])
        }
    }();
    var ceQ2x = function (dl6f) {
        if (dl6f[2] != "in")throw"bad for loop statement: " + dl6f.join(" ");
        UO9F.push(dl6f[1]);
        Cz5E(dl6f[3]);
        return "var __HASH__" + dl6f[1] + " = " + dl6f[3] + "," + dl6f[1] + "," + dl6f[1] + "_count=0;" + "if (!!__HASH__" + dl6f[1] + ")" + "for(var " + dl6f[1] + "_key in __HASH__" + dl6f[1] + "){" + dl6f[1] + " = __HASH__" + dl6f[1] + "[" + dl6f[1] + "_key];" + "if (typeof(" + dl6f[1] + ')=="function") continue;' + dl6f[1] + "_count++;"
    };
    var ceT2x = function () {
        var dl6f = UO9F[UO9F.length - 1];
        return "}; if(!__HASH__" + dl6f + "||!" + dl6f + "_count){"
    };
    var cgb2x = function () {
        UO9F.pop();
        return "};"
    };
    var cgd2x = function (dl6f) {
        if (dl6f[2] != "as")throw"bad for list loop statement: " + dl6f.join(" ");
        var Mz7s = dl6f[1].split("..");
        if (Mz7s.length > 1) {
            Cz5E(Mz7s[0]);
            Cz5E(Mz7s[1]);
            return "for(var " + dl6f[3] + "," + dl6f[3] + "_index=0," + dl6f[3] + "_beg=" + Mz7s[0] + "," + dl6f[3] + "_end=" + Mz7s[1] + "," + dl6f[3] + "_length=parseInt(" + dl6f[3] + "_end-" + dl6f[3] + "_beg+1);" + dl6f[3] + "_index<" + dl6f[3] + "_length;" + dl6f[3] + "_index++){" + dl6f[3] + " = " + dl6f[3] + "_beg+" + dl6f[3] + "_index;"
        } else {
            Cz5E(dl6f[1]);
            return "for(var __LIST__" + dl6f[3] + " = " + dl6f[1] + "," + dl6f[3] + "," + dl6f[3] + "_index=0," + dl6f[3] + "_length=__LIST__" + dl6f[3] + ".length;" + dl6f[3] + "_index<" + dl6f[3] + "_length;" + dl6f[3] + "_index++){" + dl6f[3] + " = __LIST__" + dl6f[3] + "[" + dl6f[3] + "_index];"
        }
    };
    var cge2x = function (dl6f) {
        if (!dl6f || !dl6f.length)return;
        dl6f.shift();
        var T5Y = dl6f[0].split("(")[0];
        return "var " + T5Y + " = function" + dl6f.join("").replace(T5Y, "") + "{var __OUT=[];"
    };
    var cgh2x = function (dl6f) {
        if (!dl6f[1])throw"bad include statement: " + dl6f.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bgY2x = function (ld9U, dl6f) {
        Cz5E(dl6f.slice(1).join(" "));
        return ld9U
    };
    var cgk2x = function (dl6f) {
        return bgY2x("if(", dl6f)
    };
    var cgl2x = function (dl6f) {
        return bgY2x("}else if(", dl6f)
    };
    var cgm2x = function (dl6f) {
        return bgY2x("var ", dl6f)
    };
    bN6H = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cgk2x, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cgl2x, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: ceQ2x, pmin: 3},
            forelse: {pfix: ceT2x},
            "/for": {pfix: cgb2x},
            list: {pfix: cgd2x, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cgm2x, sfix: ";"},
            macro: {pfix: cge2x},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    Hm6g = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Hm6g = null
                }
            },
            inline: {pfix: cgh2x, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (ld9U) {
                return (ld9U || "") + "" + fR7K
            }, "default": function (A5F, kr9i) {
                return A5F || kr9i
            }
        }
    };
    var cgn2x = function () {
        var cgo2x = /\\([\{\}])/g;
        return function (bi5n, iD9u) {
            bi5n = bi5n.replace(cgo2x, "$1");
            var dl6f = bi5n.slice(1, -1).split(bGj7c), bc5h = bN6H.def[dl6f[0]];
            if (!bc5h) {
                Uv9m(bi5n, iD9u);
                return
            }
            if (!!bc5h.pmin && bc5h.pmin >= dl6f.length)throw"Statement needs more parameters:" + bi5n;
            iD9u.push(!!bc5h.pfix && typeof bc5h.pfix != "string" ? bc5h.pfix(dl6f) : bc5h.pfix || "");
            if (!!bc5h.sfix) {
                if (dl6f.length <= 1) {
                    if (!!bc5h.pdft) iD9u.push(bc5h.pdft)
                } else {
                    for (var i = 1, l = dl6f.length; i < l; i++) {
                        if (i > 1) iD9u.push(" ");
                        iD9u.push(dl6f[i])
                    }
                }
                iD9u.push(bc5h.sfix)
            }
        }
    }();
    var bMm8e = function (Hv6p, iD9u) {
        if (!Hv6p || !Hv6p.length)return;
        if (Hv6p.length == 1) {
            var bgC2x = Hv6p.pop();
            Cz5E(bgC2x);
            iD9u.push(bgC2x == "" ? '""' : bgC2x);
            return
        }
        var bgB2x = Hv6p.pop().split(":");
        iD9u.push("__MDF['" + bgB2x.shift() + "'](");
        bMm8e(Hv6p, iD9u);
        if (bgB2x.length > 0) {
            var bg5l = bgB2x.join(":");
            Cz5E(bg5l);
            iD9u.push("," + bg5l)
        }
        iD9u.push(")")
    };
    var Uv9m = function (bi5n, iD9u) {
        if (!bi5n)return;
        var uO2x = bi5n.split("\n");
        if (!uO2x || !uO2x.length)return;
        for (var i = 0, l = uO2x.length, ha8S; i < l; i++) {
            ha8S = uO2x[i];
            if (!!Hm6g) {
                ha8S = ha8S.trim();
                if (!ha8S)continue
            }
            cgs2x(ha8S, iD9u);
            if (!!Hm6g && i < l - 1) iD9u.push("__OUT.push('\\n');")
        }
    };
    var cgs2x = function () {
        var cgt2x = /\|\|/g, cgx2x = /#@@#/g;
        return function (bi5n, iD9u) {
            var Nn7g = "}", Nu7n = -1, bq5v = bi5n.length, ub2x, gs7l, HK6E, Ui9Z, NO7H;
            while (Nu7n + Nn7g.length < bq5v) {
                ub2x = "${";
                gs7l = "}";
                HK6E = bi5n.indexOf(ub2x, Nu7n + Nn7g.length);
                if (HK6E < 0)break;
                if (bi5n.charAt(HK6E + 2) == "%") {
                    ub2x = "${%";
                    gs7l = "%}"
                }
                Ui9Z = bi5n.indexOf(gs7l, HK6E + ub2x.length);
                if (Ui9Z < 0)break;
                Ub9S(bi5n.substring(Nu7n + Nn7g.length, HK6E), iD9u);
                NO7H = bi5n.substring(HK6E + ub2x.length, Ui9Z).replace(cgt2x, "#@@#").split("|");
                for (var i = 0, l = NO7H.length; i < l; NO7H[i] = NO7H[i].replace(cgx2x, "||"), i++);
                iD9u.push("__OUT.push(");
                bMm8e(NO7H, iD9u);
                iD9u.push(");");
                Nn7g = gs7l;
                Nu7n = Ui9Z
            }
            Ub9S(bi5n.substring(Nu7n + Nn7g.length), iD9u)
        }
    }();
    var Ub9S = function () {
        var bv5A = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cgz2x = function (bi5n) {
            return (bi5n || "").replace(bv5A.r, function ($1) {
                return bv5A[$1] || $1
            })
        };
        return function (bi5n, iD9u) {
            if (!bi5n)return;
            iD9u.push("__OUT.push('" + cgz2x(bi5n) + "');")
        }
    }();
    var cgC2x = function () {
        var cgU2x = /\t/g, cgV2x = /\n/g, cgW2x = /\r\n?/g;
        var buJ5O = function (bi5n, ub2x) {
            var s5x = bi5n.indexOf("}", ub2x + 1);
            while (bi5n.charAt(s5x - 1) == "\\") {
                s5x = bi5n.indexOf("}", s5x + 1)
            }
            return s5x
        };
        var cgX2x = function () {
            var bs5x = [], Bu4y = arguments[0];
            for (var x in Bu4y) {
                x = (x || "").trim();
                if (!x)continue;
                bs5x.push(x + "=$v('" + x + "')")
            }
            return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
        };
        return function (bi5n) {
            lR0x = {};
            bi5n = bi5n.replace(cgW2x, "\n").replace(cgU2x, "    ");
            var qG1x = ["if(!__CTX) return '';", ""];
            qG1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qG1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qG1x.push("__OUT=[];");
            var BF4J = -1, bq5v = bi5n.length;
            var mx0x, HY6S, Om7f, Oq7j, zL4P, Or7k, bfB2x, Ov7o;
            while (BF4J + 1 < bq5v) {
                mx0x = BF4J;
                mx0x = bi5n.indexOf("{", mx0x + 1);
                while (mx0x >= 0) {
                    HY6S = buJ5O(bi5n, mx0x);
                    Om7f = bi5n.substring(mx0x, HY6S);
                    Oq7j = Om7f.match(bN6H.blk);
                    if (!!Oq7j) {
                        zL4P = Oq7j[1].length + 1;
                        Or7k = bi5n.indexOf("}", mx0x + zL4P);
                        if (Or7k >= 0) {
                            bfB2x = Or7k - mx0x - zL4P <= 0 ? "{/" + Oq7j[1] + "}" : Om7f.substr(zL4P + 1);
                            zL4P = bi5n.indexOf(bfB2x, Or7k + 1);
                            if (zL4P >= 0) {
                                Uv9m(bi5n.substring(BF4J + 1, mx0x), qG1x);
                                Ov7o = bi5n.substring(Or7k + 1, zL4P);
                                switch (Oq7j[1]) {
                                    case"cdata":
                                        Ub9S(Ov7o, qG1x);
                                        break;
                                    case"minify":
                                        Ub9S(Ov7o.replace(cgV2x, " ").replace(bGj7c, " "), qG1x);
                                        break;
                                    case"eval":
                                        if (!!Ov7o) qG1x.push("__OUT.push((function(){" + Ov7o + "})());");
                                        break
                                }
                                mx0x = BF4J = zL4P + bfB2x.length - 1
                            }
                        }
                    } else if (bi5n.charAt(mx0x - 1) != "$" && bi5n.charAt(mx0x - 1) != "\\" && Om7f.substr(Om7f.charAt(1) == "/" ? 2 : 1).search(bN6H.tag) == 0) {
                        break
                    }
                    mx0x = bi5n.indexOf("{", mx0x + 1)
                }
                if (mx0x < 0)break;
                HY6S = buJ5O(bi5n, mx0x);
                if (HY6S < 0)break;
                Uv9m(bi5n.substring(BF4J + 1, mx0x), qG1x);
                cgn2x(bi5n.substring(mx0x, HY6S + 1), qG1x);
                BF4J = HY6S
            }
            Uv9m(bi5n.substring(BF4J + 1), qG1x);
            qG1x.push(';return __OUT.join("");');
            qG1x[1] = cgX2x(lR0x);
            lR0x = null;
            return new Function("__CTX", "__MDF", qG1x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return fR7K
    };
    TrimPath.merge = function () {
        var Ox7q = {};
        TrimPath.dump = function () {
            return {func: Ox7q, text: Mj7c}
        };
        return function (eA7t, j5o, iP9G) {
            try {
                j5o = j5o || {};
                if (!Ox7q[eA7t] && !Mj7c[eA7t])return "";
                if (!Ox7q[eA7t]) {
                    Ox7q[eA7t] = cgC2x(Mj7c[eA7t]);
                    delete Mj7c[eA7t]
                }
                if (!!iP9G) {
                    for (var x in bN6H.ext)if (!iP9G[x]) iP9G[x] = bN6H.ext[x]
                }
                return Ox7q[eA7t](j5o, iP9G || bN6H.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var chd2x = +(new Date);
        return function (bi5n, eA7t) {
            if (!bi5n)return "";
            eA7t = eA7t || "ck_" + chd2x++;
            Mj7c[eA7t] = bi5n;
            return eA7t
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k5p = c5h("nej.u"), ff7Y = {};
    a4e.Ih6b = TrimPath.seed;
    a4e.bP6J = function () {
        var byr6l = function (C5H) {
            return !a4e.ig8Y ? "" : a4e.ig8Y(C5H)
        };
        return function (eA7t, j5o, iP9G) {
            j5o = j5o || {};
            j5o.inline = byr6l;
            iP9G = NEJ.X(NEJ.X({}, ff7Y), iP9G);
            iP9G.rand = k5p.mU0x;
            iP9G.format = k5p.iU9L;
            iP9G.escape = k5p.dM7F;
            iP9G.inline = byr6l;
            return TrimPath.merge(eA7t, j5o, iP9G)
        }
    }();
    a4e.ej7c = function (bi5n, chG2x) {
        if (!bi5n)return "";
        var eA7t, E5J = a4e.y5D(bi5n);
        if (!!E5J) {
            eA7t = E5J.id;
            bi5n = E5J.value || E5J.innerText;
            if (!chG2x) a4e.cE6y(E5J)
        }
        return TrimPath.parse(bi5n, eA7t)
    };
    a4e.dS7L = function (bB5G, eA7t, j5o, iP9G) {
        bB5G = a4e.y5D(bB5G);
        if (!!bB5G) bB5G.innerHTML = a4e.bP6J(eA7t, j5o, iP9G);
        return this
    };
    a4e.cuK6E = function (bv5A) {
        NEJ.X(ff7Y, bv5A)
    };
    c5h("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var cK6E = NEJ.P("nej.p"), N5S = window, jY9P = cK6E.Ky7r, bzp6j = jY9P.ipad || jY9P.iphone;
    if (!bzp6j && !!N5S.requestAnimationFrame && !!N5S.cancelRequestAnimationFrame)return;
    var ld9U = cK6E.cS6M.prefix.pro;
    if (!bzp6j && !!N5S[ld9U + "RequestAnimationFrame"] && !!N5S[ld9U + "CancelRequestAnimationFrame"]) {
        N5S.requestAnimationFrame = N5S[ld9U + "RequestAnimationFrame"];
        N5S.cancelRequestAnimationFrame = N5S[ld9U + "CancelRequestAnimationFrame"];
        return
    }
    var TD9u = jY9P.desktop ? 80 : jY9P.ios ? 50 : 30;
    N5S.requestAnimationFrame = function (dn6h) {
        return window.setTimeout(function () {
            try {
                dn6h(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / TD9u)
    };
    N5S.cancelRequestAnimationFrame = function (C5H) {
        window.clearTimeout(C5H);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, k5p = c5h("nej.u"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), ba5f = c5h("nej.h"),
        cP6J = c5h("nej.x"), Ty9p = c5h("nej.ut.j.cb"), fY7R;
    if (!!a4e.qC1x)return;
    a4e.qC1x = cP6J.qC1x = function () {
        var R5W = {}, fT7M = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d5i) {
            var C5H = decodeURIComponent(d5i.target), t5y = d5i.type.toLowerCase();
            var db6V = R5W[C5H + "-on" + t5y];
            if (!!db6V) {
                try {
                    db6V(d5i)
                } catch (e) {
                }
                return
            }
            var cI6C = R5W[C5H + "-tgt"];
            if (!!cI6C && fT7M.test(t5y)) {
                bAp6j(cI6C, d5i)
            }
        };
        var bfk2x = function (e5j) {
            var bB5G = a4e.y5D(e5j.parent) || document.body, dq6k = a4e.bP6J(fY7R, e5j);
            bB5G.insertAdjacentHTML(!e5j.hidden ? "beforeEnd" : "afterBegin", dq6k)
        };
        var bAp6j = function (C5H, d5i) {
            var t5y = d5i.type.toLowerCase();
            requestAnimationFrame(function () {
                h5m.z5E(C5H, t5y)
            })
        };
        var cih3x = function (hc8U) {
            return !!hc8U && !!hc8U.inited && !!hc8U.inited()
        };
        var OS8K = function (C5H) {
            var bs5x = [document.embeds[C5H], a4e.y5D(C5H), document[C5H], window[C5H]], s5x = k5p.ed7W(bs5x, cih3x),
                hc8U = bs5x[s5x], beY2x = C5H + "-count";
            R5W[beY2x]++;
            if (!!hc8U || R5W[beY2x] > 100) {
                R5W[C5H](hc8U);
                delete R5W[C5H];
                delete R5W[beY2x];
                return
            }
            window.setTimeout(OS8K.g5l(null, C5H), 300)
        };
        var ciX3x = function (e5j) {
            var C5H = e5j.id, fP7I = e5j.params;
            if (!fP7I) {
                fP7I = {};
                e5j.params = fP7I
            }
            var lR0x = fP7I.flashvars || "";
            lR0x += (!lR0x ? "" : "&") + ("id=" + C5H);
            if (!e5j.hidden && (!!e5j.target || ba5f.YD0x(fP7I.wmode))) {
                var hf8X = a4e.ks9j(e5j.target) || a4e.ks9j(e5j.parent), Tm9d = k5p.VD9u();
                Ty9p["cb" + Tm9d] = bAp6j.g5l(null, hf8X);
                lR0x += "&onevent=nej.ut.j.cb.cb" + Tm9d;
                R5W[C5H + "-tgt"] = hf8X
            }
            fP7I.flashvars = lR0x;
            k5p.ed7W(e5j, function (A5F, J5O) {
                if (k5p.gd7W(A5F) && J5O != "onready") {
                    R5W[C5H + "-" + J5O] = A5F
                }
            })
        };
        return function (e5j) {
            e5j = NEJ.X({}, e5j);
            if (!e5j.src)return;
            var C5H = "flash_" + k5p.VD9u();
            e5j.id = C5H;
            ciX3x(e5j);
            bfk2x(e5j);
            if (!e5j.onready)return;
            R5W[C5H] = e5j.onready;
            R5W[C5H + "-count"] = 0;
            OS8K(C5H)
        }
    }();
    fY7R = a4e.ej7c('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cP6J.isChange = !0
})();
(function () {
    var c5h = NEJ.P, is8k = c5h("nej.c"), a4e = c5h("nej.e"), k5p = c5h("nej.u"), N5S = c5h("nej.ut.j"),
        Ty9p = c5h("nej.ut.j.cb"), R5W = {}, fR7K = +(new Date), beS2x;
    if (!!N5S.beR2x)return;
    Ty9p["ld" + fR7K] = function (J5O, cY6S) {
        var iW9N = R5W[J5O];
        if (!iW9N)return;
        delete R5W[J5O];
        iW9N.sF1x({status: 200, result: cY6S})
    };
    Ty9p["er" + fR7K] = function (J5O, dX7Q) {
        var iW9N = R5W[J5O];
        if (!iW9N)return;
        delete R5W[J5O];
        iW9N.sF1x({status: dX7Q || 0})
    };
    N5S.beR2x = NEJ.C();
    beS2x = N5S.beR2x.O5T(N5S.GX6R);
    beS2x.cl6f = function (e5j) {
        var hc8U = R5W.flash;
        if (k5p.ep7i(hc8U)) {
            hc8U.push(this.cl6f.g5l(this, e5j));
            return
        }
        if (!hc8U) {
            R5W.flash = [this.cl6f.g5l(this, e5j)];
            a4e.qC1x({
                hidden: !0, src: is8k.y5D("ajax.swf"), onready: function (hc8U) {
                    if (!hc8U)return;
                    var i5n = R5W.flash;
                    R5W.flash = hc8U;
                    k5p.mn0x(i5n, function (db6V) {
                        try {
                            db6V()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zP4T = "swf-" + k5p.mU0x();
        R5W[this.zP4T] = this;
        var j5o = NEJ.EX({url: "", data: null, method: "GET"}, e5j.request);
        j5o.key = this.zP4T;
        j5o.headers = e5j.headers;
        j5o.onerror = "nej.ut.j.cb.er" + fR7K;
        j5o.onloaded = "nej.ut.j.cb.ld" + fR7K;
        var bCU7N = is8k.bOw9n(j5o.url);
        if (!!bCU7N) j5o.policyURL = bCU7N;
        hc8U.request(j5o)
    };
    beS2x.js9j = function () {
        delete R5W[this.zP4T];
        this.sF1x({status: 0});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, ba5f = c5h("nej.h");
    ba5f.bDQ7J = function () {
        var cM6G = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (hz8r) {
            hz8r = hz8r || "";
            if (cM6G.test(hz8r))return RegExp.$1;
            return "*"
        }
    }();
    ba5f.beM2x = function (j5o) {
        return j5o
    };
    ba5f.beI2x = function (bFg7Z, e5j) {
        if (!bFg7Z.postMessage)return;
        e5j = e5j || Y5d;
        bFg7Z.postMessage(ba5f.beM2x(e5j.data), ba5f.bDQ7J(e5j.origin))
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), N5S = c5h("nej.ut"), b5g;
    if (!!N5S.fr7k)return;
    N5S.fr7k = NEJ.C();
    b5g = N5S.fr7k.O5T(N5S.cz6t);
    b5g.cm6g = function () {
        this.P5U = {};
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.Pg8Y = a4e.y5D(e5j.element) || window;
        this.bFG7z(e5j.event);
        this.cjJ3x();
        this.z5E("oninit")
    };
    b5g.bC5H = function () {
        var Ep5u = function (A5F, J5O, bv5A) {
            if (!k5p.ep7i(A5F)) {
                k5p.VO9F(this.Pg8Y, J5O)
            }
            delete bv5A[J5O]
        };
        return function () {
            this.bH6B();
            k5p.ed7W(this.P5U, Ep5u, this);
            delete this.Pg8Y
        }
    }();
    b5g.Te9V = function (E5J, t5y) {
        E5J = a4e.y5D(E5J);
        return E5J == this.Pg8Y && (!t5y || !!this.P5U["on" + t5y])
    };
    b5g.bFG7z = function (d5i) {
        if (k5p.fh7a(d5i)) {
            var T5Y = "on" + d5i;
            if (!this.P5U[T5Y]) {
                this.P5U[T5Y] = this.ckm3x.g5l(this, d5i)
            }
            this.bGw7p(d5i);
            return
        }
        if (k5p.ep7i(d5i)) {
            k5p.be5j(d5i, this.bFG7z, this)
        }
    };
    b5g.bGw7p = function (t5y) {
        var d5i = "on" + t5y, db6V = this.Pg8Y[d5i], bGK7D = this.P5U[d5i];
        if (db6V != bGK7D) {
            this.Tc9T(t5y);
            if (!!db6V && db6V != bm5r) this.bMI9z(t5y, db6V);
            this.Pg8Y[d5i] = bGK7D
        }
    };
    b5g.bMI9z = function (t5y, db6V, ckz3x) {
        var i5n = this.P5U[t5y];
        if (!i5n) {
            i5n = [];
            this.P5U[t5y] = i5n
        }
        if (k5p.gd7W(db6V)) {
            !ckz3x ? i5n.push(db6V) : i5n.unshift(db6V)
        }
    };
    b5g.Tc9T = function (t5y, db6V) {
        var i5n = this.P5U[t5y];
        if (!i5n || !i5n.length)return;
        if (!db6V) {
            delete this.P5U[t5y];
            return
        }
        k5p.mn0x(i5n, function (A5F, s5x, Iv6p) {
            if (db6V === A5F) {
                Iv6p.splice(s5x, 1);
                return !0
            }
        })
    };
    b5g.ckm3x = function (t5y, d5i) {
        d5i = d5i || {noargs: !0};
        d5i.type = t5y;
        this.z5E("ondispatch", d5i);
        if (!!d5i.stopped)return;
        k5p.be5j(this.P5U[t5y], function (db6V) {
            try {
                db6V(d5i)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b5g.cjJ3x = function () {
        var bel2x = function (d5i) {
            var bg5l = d5i.args, t5y = bg5l[1].toLowerCase();
            if (this.Te9V(bg5l[0], t5y)) {
                d5i.stopped = !0;
                this.bGw7p(t5y);
                this.bMI9z(t5y, bg5l[2], bg5l[3]);
                this.z5E("oneventadd", {type: t5y, listener: bg5l[2]})
            }
        };
        var ckA3x = function (d5i) {
            var bg5l = d5i.args, t5y = bg5l[1].toLowerCase();
            if (this.Te9V(bg5l[0], t5y)) {
                d5i.stopped = !0;
                this.Tc9T(t5y, bg5l[2])
            }
        };
        var big3x = function (d5i) {
            var bg5l = d5i.args, t5y = (bg5l[1] || "").toLowerCase();
            if (this.Te9V(bg5l[0])) {
                if (!!t5y) {
                    this.Tc9T(t5y);
                    return
                }
                k5p.ed7W(this.P5U, function (A5F, J5O) {
                    if (k5p.ep7i(A5F)) {
                        this.Tc9T(J5O)
                    }
                }, this)
            }
        };
        var ckB3x = function (d5i) {
            var bg5l = d5i.args, t5y = bg5l[1].toLowerCase();
            if (this.Te9V(bg5l[0], t5y)) {
                d5i.stopped = !0;
                bg5l[0]["on" + t5y].apply(bg5l[0], bg5l.slice(2))
            }
        };
        return function () {
            if (!!this.ckC3x)return;
            this.ckC3x = true;
            h5m.q5v = h5m.q5v.ef7Y(bel2x.g5l(this));
            h5m.mg0x = h5m.mg0x.ef7Y(ckA3x.g5l(this));
            h5m.iA9r = h5m.iA9r.ef7Y(big3x.g5l(this));
            h5m.z5E = h5m.z5E.ef7Y(ckB3x.g5l(this))
        }
    }()
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), ba5f = c5h("nej.h"), k5p = c5h("nej.u"), h5m = c5h("nej.v"),
        H5M = c5h("nej.ut");
    if (N5S.ma0x.trident)return;
    if (!!window.postMessage) {
        ba5f.beM2x = ba5f.beM2x.ef7Y(function (d5i) {
            d5i.stopped = !0;
            d5i.value = JSON.stringify(d5i.args[0])
        });
        return
    }
    var J5O = "MSG|", jl9c = [];
    var ckI3x = function () {
        var T5Y = unescape(window.name || "").trim();
        if (!T5Y || T5Y.indexOf(J5O) != 0)return;
        window.name = "";
        var m5r = k5p.bFz7s(T5Y.replace(J5O, ""), "|"), hz8r = (m5r.origin || "").toLowerCase();
        if (!!hz8r && hz8r != "*" && location.href.toLowerCase().indexOf(hz8r) != 0)return;
        h5m.z5E(window, "message", {
            data: JSON.parse(m5r.data || "null"),
            source: window.frames[m5r.self] || m5r.self,
            origin: ba5f.bDQ7J(m5r.ref || document.referrer)
        })
    };
    var ckN3x = function () {
        var SO9F;
        var clx3x = function (bv5A, s5x, i5n) {
            if (k5p.cV6P(SO9F, bv5A.w) < 0) {
                SO9F.push(bv5A.w);
                i5n.splice(s5x, 1);
                bv5A.w.name = bv5A.d
            }
        };
        return function () {
            SO9F = [];
            k5p.mn0x(jl9c, clx3x);
            SO9F = null
        }
    }();
    ba5f.beI2x = function () {
        var clO3x = function (j5o) {
            var m5r = {};
            j5o = j5o || Y5d;
            m5r.origin = j5o.origin || "";
            m5r.ref = location.href;
            m5r.self = j5o.source;
            m5r.data = JSON.stringify(j5o.data);
            return J5O + k5p.vt2x(m5r, "|", !0)
        };
        return ba5f.beI2x.ef7Y(function (d5i) {
            d5i.stopped = !0;
            var bg5l = d5i.args;
            jl9c.unshift({w: bg5l[0], d: escape(clO3x(bg5l[1]))})
        })
    }();
    H5M.fr7k.B5G({element: window, event: "message"});
    window.setInterval(ckN3x, 100);
    window.setInterval(ckI3x, 20)
})();
(function () {
    var c5h = NEJ.P, ba5f = c5h("nej.h"), a4e = c5h("nej.e"), v5A = c5h("nej.j");
    v5A.clP3x = function () {
        var iB9s = window.name || "_parent", clW3x = {gg7Z: window.top, iB9s: window, bB5G: window.parent};
        return function (cI6C, e5j) {
            if (typeof cI6C == "string") {
                cI6C = clW3x[cI6C] || window.frames[cI6C];
                if (!cI6C)return this
            }
            var j5o = NEJ.X({origin: "*", source: iB9s}, e5j);
            ba5f.beI2x(cI6C, j5o);
            return this
        }
    }()
})();
(function () {
    var c5h = NEJ.P, is8k = c5h("nej.c"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        v5A = c5h("nej.j"), N5S = c5h("nej.ut.j"), R5W = {}, SH8z;
    if (!!N5S.bdF2x)return;
    N5S.bdF2x = NEJ.C();
    SH8z = N5S.bdF2x.O5T(N5S.GX6R);
    SH8z.cm6g = function () {
        var ex7q = "NEJ-AJAX-DATA:", CD5I = !1;
        var bdB2x = function (d5i) {
            var j5o = d5i.data;
            if (j5o.indexOf(ex7q) != 0)return;
            j5o = JSON.parse(j5o.replace(ex7q, ""));
            var iW9N = R5W[j5o.key];
            if (!iW9N)return;
            delete R5W[j5o.key];
            j5o.result = decodeURIComponent(j5o.result || "");
            iW9N.sF1x(j5o)
        };
        var bdy2x = function () {
            if (!CD5I) {
                CD5I = !0;
                h5m.q5v(window, "message", bdB2x)
            }
        };
        return function () {
            this.ct6n();
            bdy2x()
        }
    }();
    SH8z.cl6f = function (e5j) {
        var fC7v = e5j.request, iW9N = is8k.bOj9a(fC7v.url), ui2x = R5W[iW9N];
        if (k5p.ep7i(ui2x)) {
            ui2x.push(this.cl6f.g5l(this, e5j));
            return
        }
        if (!ui2x) {
            R5W[iW9N] = [this.cl6f.g5l(this, e5j)];
            a4e.XV0x({
                src: iW9N, visible: !1, onload: function (d5i) {
                    var i5n = R5W[iW9N];
                    R5W[iW9N] = h5m.U5Z(d5i).contentWindow;
                    k5p.mn0x(i5n, function (db6V) {
                        try {
                            db6V()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zP4T = "frm-" + k5p.mU0x();
        R5W[this.zP4T] = this;
        var j5o = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, fC7v);
        j5o.key = this.zP4T;
        j5o.headers = e5j.headers;
        v5A.clP3x(R5W[iW9N], {data: j5o})
    };
    SH8z.js9j = function () {
        delete R5W[this.zP4T];
        this.sF1x({status: 0});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, dP7I = c5h("nej.g"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        v5A = c5h("nej.j"), N5S = c5h("nej.ut.j"), R5W = {}, ID6x;
    if (!!N5S.bdu2x)return;
    N5S.bdu2x = NEJ.C();
    ID6x = N5S.bdu2x.O5T(N5S.GX6R);
    ID6x.cm6g = function () {
        var ex7q = "NEJ-UPLOAD-RESULT:", CD5I = !1;
        var bdB2x = function (d5i) {
            var j5o = d5i.data;
            if (j5o.indexOf(ex7q) != 0)return;
            j5o = JSON.parse(j5o.replace(ex7q, ""));
            var iW9N = R5W[j5o.key];
            if (!iW9N)return;
            delete R5W[j5o.key];
            iW9N.sF1x(decodeURIComponent(j5o.result))
        };
        var bdy2x = function () {
            if (!CD5I) {
                CD5I = !0;
                h5m.q5v(window, "message", bdB2x)
            }
        };
        return function () {
            this.ct6n();
            bdy2x()
        }
    }();
    ID6x.bC5H = function () {
        this.bH6B();
        a4e.cE6y(this.bdq2x);
        delete this.bdq2x;
        window.clearTimeout(this.dK7D);
        delete this.dK7D
    };
    ID6x.sF1x = function (cY6S) {
        var Q5V;
        try {
            Q5V = JSON.parse(cY6S);
            this.z5E("onload", Q5V)
        } catch (e) {
            this.z5E("onerror", {code: dP7I.bOG9x, message: cY6S})
        }
    };
    ID6x.cl6f = function () {
        var clX3x = function () {
            var lq9h, cY6S;
            try {
                var lq9h = this.bdq2x.contentWindow.document.body, cY6S = lq9h.innerText || lq9h.textContent
            } catch (e) {
                return
            }
            this.sF1x(cY6S)
        };
        var bdo2x = function (V5a, eI7B, qL1x) {
            v5A.br5w(V5a, {
                type: "json",
                method: "POST",
                cookie: qL1x,
                mode: parseInt(eI7B) || 0,
                onload: function (j5o) {
                    if (!this.dK7D)return;
                    this.z5E("onuploading", j5o);
                    this.dK7D = window.setTimeout(bdo2x.g5l(this, V5a, eI7B, qL1x), 1e3)
                }.g5l(this),
                onerror: function (bQ6K) {
                    if (!this.dK7D)return;
                    this.dK7D = window.setTimeout(bdo2x.g5l(this, V5a, eI7B, qL1x), 1e3)
                }.g5l(this)
            })
        };
        return function (e5j) {
            var fC7v = e5j.request, nr0x = e5j.headers, eG7z = fC7v.data, T5Y = "fom-" + k5p.mU0x();
            R5W[T5Y] = this;
            eG7z.target = T5Y;
            eG7z.method = "POST";
            eG7z.enctype = dP7I.CB5G;
            eG7z.encoding = dP7I.CB5G;
            var V5a = eG7z.action || "", lr9i = V5a.indexOf("?") <= 0 ? "?" : "&";
            eG7z.action = V5a + lr9i + "_proxy_=form";
            this.bdq2x = a4e.XV0x({
                name: T5Y, onload: function (d5i) {
                    var ui2x = h5m.U5Z(d5i);
                    h5m.q5v(ui2x, "load", clX3x.g5l(this));
                    eG7z.submit();
                    var bra4e = (eG7z.nej_query || Y5d).value;
                    if (!bra4e)return;
                    var eI7B = (eG7z.nej_mode || Y5d).value, qL1x = (eG7z.nej_cookie || Y5d).value == "true";
                    this.dK7D = window.setTimeout(bdo2x.g5l(this, bra4e, eI7B, qL1x), 100)
                }.g5l(this)
            })
        }
    }();
    ID6x.js9j = function () {
        this.z5E("onerror", {code: dP7I.bPb9S, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, ba5f = c5h("nej.h"), N5S = c5h("nej.ut.j");
    ba5f.bho3x = function () {
        return new XMLHttpRequest
    };
    ba5f.bdn2x = function (eI7B, Sy8q, e5j) {
        var bv5A = !!Sy8q ? {2: N5S.bdu2x} : {2: N5S.bdF2x, 3: N5S.beR2x};
        return (bv5A[eI7B] || N5S.US9J).B5G(e5j)
    }
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), ba5f = c5h("nej.h");
    if (N5S.ma0x.trident)return;
    ba5f.bho3x = function () {
        var Ly7r = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var clY3x = function () {
            for (var i = 0, l = Ly7r.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ly7r[i])
                } catch (e) {
                }
            }
            return null
        };
        return ba5f.bho3x.ef7Y(function (d5i) {
            if (!!window.XMLHttpRequest)return;
            d5i.stopped = !0;
            d5i.value = clY3x()
        })
    }();
    ba5f.bdn2x = function () {
        var Dq5v = {0: 2, 1: 3};
        return ba5f.bdn2x.ef7Y(function (d5i) {
            var bg5l = d5i.args, eI7B = bg5l[0] || 0;
            bg5l[0] = !!bg5l[1] ? 2 : Dq5v[eI7B] || eI7B
        })
    }()
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, ba5f = c5h("nej.h"), dP7I = c5h("nej.g"), k5p = c5h("nej.u"),
        v5A = c5h("nej.j"), N5S = c5h("nej.ut.j"), nf0x = {}, FB5G = bm5r;
    v5A.js9j = function (eA7t) {
        var R5W = nf0x[eA7t];
        if (!R5W)return this;
        R5W.req.js9j();
        return this
    };
    v5A.Sw8o = function (dC7v) {
        FB5G = dC7v || bm5r;
        return this
    };
    v5A.br5w = function () {
        var iG9x = (location.protocol + "//" + location.host).toLowerCase();
        var cme3x = function (V5a) {
            var hz8r = k5p.cav1x(V5a);
            return !!hz8r && hz8r != iG9x
        };
        var cmz3x = function (nr0x) {
            return (nr0x || Y5d)[dP7I.wI3x] == dP7I.CB5G
        };
        var cmA3x = function (e5j) {
            var Sy8q = cmz3x(e5j.headers);
            if (!cme3x(e5j.url) && !Sy8q)return N5S.US9J.B5G(e5j);
            return ba5f.bdn2x(e5j.mode, Sy8q, e5j)
        };
        var Ep5u = function (eA7t) {
            var R5W = nf0x[eA7t];
            if (!R5W)return;
            if (!!R5W.req) R5W.req.S5X();
            delete nf0x[eA7t]
        };
        var btt5y = function (eA7t, t5y) {
            var R5W = nf0x[eA7t];
            if (!R5W)return;
            Ep5u(eA7t);
            try {
                var d5i = {type: t5y, result: arguments[2]};
                FB5G(d5i);
                if (!d5i.stopped) (R5W[t5y] || bm5r)(d5i.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var vx3x = function (eA7t, j5o) {
            btt5y(eA7t, "onload", j5o)
        };
        var zF4J = function (eA7t, bQ6K) {
            btt5y(eA7t, "onerror", bQ6K)
        };
        return function (V5a, e5j) {
            e5j = e5j || {};
            var eA7t = k5p.mU0x(), R5W = {onload: e5j.onload || bm5r, onerror: e5j.onerror || bm5r};
            nf0x[eA7t] = R5W;
            e5j.onload = vx3x.g5l(null, eA7t);
            e5j.onerror = zF4J.g5l(null, eA7t);
            if (!!e5j.query) {
                var lr9i = V5a.indexOf("?") < 0 ? "?" : "&", bD5I = e5j.query;
                if (k5p.kf9W(bD5I)) bD5I = k5p.de6Y(bD5I);
                if (!!bD5I) V5a += lr9i + bD5I
            }
            e5j.url = V5a;
            R5W.req = cmA3x(e5j);
            R5W.req.bhw3x(e5j.data);
            return eA7t
        }
    }();
    v5A.fZ7S = function (eG7z, e5j) {
        var gz7s = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gz7s, e5j);
        gz7s.data = eG7z;
        gz7s.method = "POST";
        gz7s.timeout = 0;
        gz7s.headers[dP7I.wI3x] = dP7I.CB5G;
        return v5A.br5w(eG7z.action, gz7s)
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, dP7I = c5h("nej.g"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        N5S = c5h("nej.ut.j"), lv9m, jp9g = 6e4;
    if (!!N5S.PR8J)return;
    N5S.PR8J = NEJ.C();
    lv9m = N5S.PR8J.O5T(H5M.cz6t);
    lv9m.cm6g = function () {
        this.ct6n();
        this.Qc8U = {onerror: this.cmC3x.g5l(this), onloaded: this.cnw3x.g5l(this)};
        if (!this.constructor.P5U) this.constructor.P5U = {loaded: {}}
    };
    lv9m.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.IN6H = e5j.version;
        this.bcQ2x = e5j.timeout;
        this.Qc8U.version = this.IN6H;
        this.Qc8U.timeout = this.bcQ2x
    };
    lv9m.bwn5s = function (J5O) {
        delete this.constructor.P5U[J5O]
    };
    lv9m.zD4H = function (J5O) {
        return this.constructor.P5U[J5O]
    };
    lv9m.bwy5D = function (J5O, j5o) {
        this.constructor.P5U[J5O] = j5o
    };
    lv9m.Sf8X = bm5r;
    lv9m.bwK5P = function (fC7v) {
        h5m.iA9r(fC7v)
    };
    lv9m.bcN2x = function (fC7v) {
        fC7v.src = this.kk9b;
        document.head.appendChild(fC7v)
    };
    lv9m.zC4G = function () {
        var R5W = this.zD4H(this.kk9b);
        if (!R5W)return;
        window.clearTimeout(R5W.timer);
        this.bwK5P(R5W.request);
        delete R5W.bind;
        delete R5W.timer;
        delete R5W.request;
        this.bwn5s(this.kk9b);
        this.zD4H("loaded")[this.kk9b] = !0
    };
    lv9m.Se8W = function (T5Y) {
        var R5W = this.zD4H(this.kk9b);
        if (!R5W)return;
        var i5n = R5W.bind;
        this.zC4G();
        if (!!i5n && i5n.length > 0) {
            var cq6k;
            while (i5n.length) {
                cq6k = i5n.shift();
                try {
                    cq6k.z5E(T5Y, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cq6k.S5X()
            }
        }
    };
    lv9m.eo7h = function (bQ6K) {
        this.Se8W("onerror", bQ6K)
    };
    lv9m.bxF6z = function () {
        this.Se8W("onloaded")
    };
    lv9m.cnS4W = function (V5a) {
        this.constructor.B5G(this.Qc8U).IU6O(V5a)
    };
    lv9m.byk6e = function (bQ6K) {
        var R5W = this.zD4H(this.vf2x);
        if (!R5W)return;
        if (!!bQ6K) R5W.error++;
        R5W.loaded++;
        if (R5W.loaded < R5W.total)return;
        this.bwn5s(this.vf2x);
        this.z5E(R5W.error > 0 ? "onerror" : "onloaded")
    };
    lv9m.cmC3x = function (bQ6K) {
        this.byk6e(!0)
    };
    lv9m.cnw3x = function () {
        this.byk6e()
    };
    lv9m.IU6O = function (V5a) {
        V5a = k5p.bjt3x(V5a);
        if (!V5a) {
            this.z5E("onerror", {code: dP7I.bpu4y, message: "请指定要载入的资源地址！"});
            return this
        }
        this.kk9b = V5a;
        if (!!this.IN6H) this.kk9b += (this.kk9b.indexOf("?") < 0 ? "?" : "&") + this.IN6H;
        if (this.zD4H("loaded")[this.kk9b]) {
            try {
                this.z5E("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S5X();
            return this
        }
        var R5W = this.zD4H(this.kk9b), fC7v;
        if (!!R5W) {
            R5W.bind.unshift(this);
            R5W.timer = window.clearTimeout(R5W.timer)
        } else {
            fC7v = this.Sf8X();
            R5W = {request: fC7v, bind: [this]};
            this.bwy5D(this.kk9b, R5W);
            h5m.q5v(fC7v, "load", this.bxF6z.g5l(this));
            h5m.q5v(fC7v, "error", this.eo7h.g5l(this, {code: dP7I.bpq4u, message: "无法加载指定资源文件[" + this.kk9b + "]！"}))
        }
        if (this.bcQ2x != 0) R5W.timer = window.setTimeout(this.eo7h.g5l(this, {
            code: dP7I.bym6g,
            message: "指定资源文件[" + this.kk9b + "]载入超时！"
        }), this.bcQ2x || jp9g);
        if (!!fC7v) this.bcN2x(fC7v);
        this.z5E("onloading");
        return this
    };
    lv9m.byo6i = function (i5n) {
        if (!i5n || !i5n.length) {
            this.z5E("onerror", {code: dP7I.bpu4y, message: "请指定要载入的资源队列！"});
            return this
        }
        this.vf2x = k5p.mU0x();
        var R5W = {error: 0, loaded: 0, total: i5n.length};
        this.bwy5D(this.vf2x, R5W);
        for (var i = 0, l = i5n.length; i < l; i++) {
            if (!i5n[i]) {
                R5W.total--;
                continue
            }
            this.cnS4W(i5n[i])
        }
        this.z5E("onloading");
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), ba5f = c5h("nej.h"), N5S = c5h("nej.ut.j"), QI8A;
    if (!!N5S.bcw2x)return;
    N5S.bcw2x = NEJ.C();
    QI8A = N5S.bcw2x.O5T(N5S.PR8J);
    QI8A.Sf8X = function () {
        var fa7T = a4e.cU6O("iframe");
        fa7T.width = 0;
        fa7T.height = 0;
        fa7T.style.display = "none";
        return fa7T
    };
    QI8A.bcN2x = function (fC7v) {
        fC7v.src = this.kk9b;
        document.body.appendChild(fC7v)
    };
    QI8A.eo7h = function (bQ6K) {
        var fa7T = (this.zD4H(this.kk9b) || Y5d).request;
        this.Se8W("onerror", bQ6K);
        ba5f.Yy0x(fa7T)
    };
    QI8A.bxF6z = function () {
        var lq9h = null, fa7T = (this.zD4H(this.kk9b) || Y5d).request;
        try {
            lq9h = fa7T.contentWindow.document.body
        } catch (ex) {
        }
        this.Se8W("onloaded", lq9h);
        ba5f.Yy0x(fa7T)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), N5S = c5h("nej.ut.j"), bcu2x;
    if (!!N5S.RS8K)return;
    N5S.RS8K = NEJ.C();
    bcu2x = N5S.RS8K.O5T(N5S.PR8J);
    bcu2x.Sf8X = function () {
        return a4e.cU6O("link")
    };
    bcu2x.bcN2x = function (fC7v) {
        fC7v.href = this.kk9b;
        document.head.appendChild(fC7v)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), N5S = c5h("nej.ut.j"), RQ8I;
    if (!!N5S.RM8E)return;
    N5S.RM8E = NEJ.C();
    RQ8I = N5S.RM8E.O5T(N5S.PR8J);
    RQ8I.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.byJ6D = e5j.async;
        this.bbZ2x = e5j.charset;
        this.Qc8U.async = !1;
        this.Qc8U.charset = this.bbZ2x
    };
    RQ8I.Sf8X = function () {
        var fC7v = a4e.cU6O("script");
        if (this.byJ6D != null) fC7v.async = !!this.byJ6D;
        if (this.bbZ2x != null) fC7v.charset = this.bbZ2x;
        return fC7v
    };
    RQ8I.bwK5P = function (fC7v) {
        a4e.cE6y(fC7v)
    }
})();
(function () {
    var c5h = NEJ.P, v5A = c5h("nej.j"), N5S = c5h("nej.ut.j");
    v5A.cnV4Z = function (V5a, e5j) {
        N5S.RM8E.B5G(e5j).IU6O(V5a);
        return this
    };
    v5A.com4q = function (i5n, e5j) {
        N5S.RM8E.B5G(e5j).byo6i(i5n);
        return this
    };
    v5A.ctJ5O = function (V5a, e5j) {
        N5S.RS8K.B5G(e5j).IU6O(V5a);
        return this
    };
    v5A.con4r = function (i5n, e5j) {
        N5S.RS8K.B5G(e5j).byo6i(i5n);
        return this
    };
    v5A.bAd6X = function (V5a, e5j) {
        N5S.bcw2x.B5G(e5j).IU6O(V5a);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), v5A = c5h("nej.j"),
        H5M = c5h("nej.ut"), R5W = {}, rK1x = +(new Date) + "-";
    a4e.cH6B = function () {
        var cv6p = 0;
        var Rn8f = function () {
            if (cv6p > 0)return;
            cv6p = 0;
            h5m.z5E(document, "templateready");
            h5m.iA9r(document, "templateready")
        };
        var RC8u = function (fE7x, e5j) {
            var dt7m = a4e.u5z(fE7x, "src");
            if (!dt7m)return;
            e5j = e5j || Y5d;
            var fo7h = e5j.root;
            if (!fo7h) {
                fo7h = fE7x.ownerDocument.location.href
            } else {
                fo7h = k5p.bjt3x(fo7h)
            }
            dt7m = dt7m.split(",");
            k5p.be5j(dt7m, function (A5F, s5x, i5n) {
                i5n[s5x] = k5p.bjt3x(A5F, fo7h)
            });
            return dt7m
        };
        var coS4W = function (fE7x, e5j) {
            if (!fE7x)return;
            var dt7m = RC8u(fE7x, e5j);
            if (!!dt7m) v5A.con4r(dt7m, {version: a4e.u5z(fE7x, "version")});
            a4e.bLM8E(fE7x.value)
        };
        var cpx5C = function (A5F) {
            cv6p--;
            a4e.bMt8l(A5F);
            Rn8f()
        };
        var cpR5W = function (fE7x, e5j) {
            if (!fE7x)return;
            var dt7m = RC8u(fE7x, e5j), eJ7C = fE7x.value;
            if (!!dt7m) {
                cv6p++;
                var e5j = {version: a4e.u5z(fE7x, "version"), onloaded: cpx5C.g5l(null, eJ7C)};
                window.setTimeout(v5A.com4q.g5l(v5A, dt7m, e5j), 0);
                return
            }
            a4e.bMt8l(eJ7C)
        };
        var cpW5b = function (lq9h) {
            cv6p--;
            a4e.cH6B(lq9h);
            Rn8f()
        };
        var cpZ5e = function (fE7x, e5j) {
            if (!fE7x)return;
            var dt7m = RC8u(fE7x, e5j)[0];
            if (!!dt7m) {
                cv6p++;
                var e5j = {version: a4e.u5z(fE7x, "version"), onloaded: cpW5b};
                window.setTimeout(v5A.bAd6X.g5l(v5A, dt7m, e5j), 0)
            }
        };
        var cqa5f = function (C5H, cY6S) {
            cv6p--;
            a4e.Ji6c(C5H, cY6S || "");
            Rn8f()
        };
        var cqc5h = function (fE7x, e5j) {
            if (!fE7x || !fE7x.id)return;
            var C5H = fE7x.id, dt7m = RC8u(fE7x, e5j)[0];
            if (!!dt7m) {
                cv6p++;
                var V5a = dt7m + (dt7m.indexOf("?") < 0 ? "?" : "&") + (a4e.u5z(fE7x, "version") || ""),
                    e5j = {type: "text", method: "GET", onload: cqa5f.g5l(null, C5H)};
                window.setTimeout(v5A.br5w.g5l(v5A, V5a, e5j), 0)
            }
        };
        var cqf5k = function (f5k, e5j) {
            var t5y = f5k.name.toLowerCase();
            switch (t5y) {
                case"jst":
                    a4e.ej7c(f5k, !0);
                    return;
                case"txt":
                    a4e.Ji6c(f5k.id, f5k.value || "");
                    return;
                case"ntp":
                    a4e.hV8N(f5k.value || "", f5k.id);
                    return;
                case"js":
                    cpR5W(f5k, e5j);
                    return;
                case"css":
                    coS4W(f5k, e5j);
                    return;
                case"html":
                    cpZ5e(f5k, e5j);
                    return;
                case"res":
                    cqc5h(f5k, e5j);
                    return
            }
        };
        H5M.fr7k.B5G({element: document, event: "templateready", oneventadd: Rn8f});
        return function (E5J, e5j) {
            E5J = a4e.y5D(E5J);
            if (!!E5J) {
                var i5n = E5J.tagName == "TEXTAREA" ? [E5J] : E5J.getElementsByTagName("textarea");
                k5p.be5j(i5n, function (f5k) {
                    cqf5k(f5k, e5j)
                });
                a4e.cE6y(E5J, !0)
            }
            Rn8f();
            return this
        }
    }();
    a4e.Ji6c = function (J5O, A5F) {
        R5W[J5O] = A5F || "";
        return this
    };
    a4e.ig8Y = function (J5O) {
        return R5W[J5O] || ""
    };
    a4e.hV8N = function (E5J, J5O) {
        J5O = J5O || k5p.mU0x();
        E5J = a4e.y5D(E5J) || E5J;
        a4e.Ji6c(rK1x + J5O, E5J);
        a4e.lV0x(E5J);
        return J5O
    };
    a4e.dr7k = function (J5O) {
        if (!J5O)return null;
        J5O = rK1x + J5O;
        var A5F = a4e.ig8Y(J5O);
        if (!A5F)return null;
        if (k5p.fh7a(A5F)) {
            A5F = a4e.na0x(A5F);
            a4e.Ji6c(J5O, A5F)
        }
        return A5F.cloneNode(!0)
    };
    a4e.zx4B = function () {
        var FB5G = function (A5F, J5O) {
            return J5O == "offset" || J5O == "limit"
        };
        return function (i5n, r5w, e5j) {
            var bs5x = [];
            if (!i5n || !i5n.length || !r5w)return bs5x;
            e5j = e5j || Y5d;
            var dJ7C = i5n.length, iZ9Q = parseInt(e5j.offset) || 0,
                gs7l = Math.min(dJ7C, iZ9Q + (parseInt(e5j.limit) || dJ7C)),
                cn6h = {total: i5n.length, range: [iZ9Q, gs7l]};
            NEJ.X(cn6h, e5j, FB5G);
            for (var i = iZ9Q, cq6k; i < gs7l; i++) {
                cn6h.index = i;
                cn6h.data = i5n[i];
                cq6k = r5w.B5G(cn6h);
                var C5H = cq6k.BS4W();
                R5W[C5H] = cq6k;
                cq6k.S5X = cq6k.S5X.ef7Y(function (C5H, cq6k) {
                    delete R5W[C5H];
                    delete cq6k.S5X
                }.g5l(null, C5H, cq6k));
                bs5x.push(cq6k)
            }
            return bs5x
        }
    }();
    a4e.bCX7Q = function (C5H) {
        return R5W[C5H]
    };
    a4e.ctq5v = function (dB7u, e5j) {
        e5j = e5j || Y5d;
        a4e.cH6B(e5j.tid || "template-box");
        h5m.q5v(document, "templateready", function () {
            dB7u.B5G().z5E("onshow", e5j)
        })
    };
    c5h("dbg").dumpTC = function () {
        return R5W
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        N5S = c5h("nej.ui"), b5g;
    if (!!N5S.eq7j)return;
    N5S.eq7j = NEJ.C();
    b5g = N5S.eq7j.O5T(H5M.cz6t);
    b5g.cm6g = function () {
        this.ct6n();
        a4e.bBx6r();
        this.bZ6T();
        this.bR6L()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.cqu5z(e5j.clazz);
        this.bEk7d(e5j.parent)
    };
    b5g.bC5H = function () {
        this.bH6B();
        this.bEQ7J();
        delete this.fB7u;
        a4e.lV0x(this.o5t);
        a4e.w5B(this.o5t, this.bbu1x);
        delete this.bbu1x
    };
    b5g.bZ6T = bm5r;
    b5g.bR6L = function () {
        if (!this.ca6U) this.Rv8n();
        this.o5t = a4e.dr7k(this.ca6U);
        if (!this.o5t) this.o5t = a4e.cU6O("div", this.kU9L);
        a4e.x5C(this.o5t, this.kU9L)
    };
    b5g.Rv8n = bm5r;
    b5g.cqu5z = function (dH7A) {
        this.bbu1x = dH7A || "";
        a4e.x5C(this.o5t, this.bbu1x)
    };
    b5g.cqN5S = function () {
        if (!this.kU9L)return;
        a4e.x5C(this.fB7u, this.kU9L + "-parent")
    };
    b5g.bEQ7J = function () {
        if (!this.kU9L)return;
        a4e.w5B(this.fB7u, this.kU9L + "-parent")
    };
    b5g.kh9Y = function () {
        return this.o5t
    };
    b5g.bEk7d = function (bB5G) {
        if (!this.o5t)return this;
        this.bEQ7J();
        if (k5p.gd7W(bB5G)) {
            this.fB7u = bB5G(this.o5t)
        } else {
            this.fB7u = a4e.y5D(bB5G);
            if (!!this.fB7u) this.fB7u.appendChild(this.o5t)
        }
        this.cqN5S();
        return this
    };
    b5g.M5R = function () {
        if (!this.fB7u || !this.o5t || this.o5t.parentNode == this.fB7u)return this;
        this.fB7u.appendChild(this.o5t);
        return this
    };
    b5g.bp5u = function () {
        a4e.lV0x(this.o5t);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), k5p = c5h("nej.u"), ba5f = c5h("nej.h"),
        N5S = c5h("nej.ui"), uI2x, bGG7z;
    if (!!N5S.Rp8h)return;
    N5S.Rp8h = NEJ.C();
    uI2x = N5S.Rp8h.O5T(N5S.eq7j);
    bGG7z = N5S.Rp8h.cg6a;
    uI2x.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.vg2x("oncontentready", e5j.oncontentready || this.cqV5a.g5l(this));
        this.crl5q = !!e5j.nohack;
        this.crv5A = !!e5j.destroyable;
        this.Jh6b(e5j.content)
    };
    uI2x.bC5H = function () {
        this.z5E("onbeforerecycle");
        this.bH6B();
        this.RG8y();
        this.Jh6b("");
        a4e.fy7r(this.o5t, {top: "", left: ""})
    };
    uI2x.cqV5a = bm5r;
    uI2x.Jf6Z = bm5r;
    uI2x.RG8y = function () {
        a4e.lV0x(this.o5t);
        if (!!this.mH0x) {
            this.mH0x = ba5f.bos4w(this.o5t);
            delete this.mH0x
        }
    };
    uI2x.Jh6b = function (bi5n) {
        if (!this.o5t || !this.zv4z || bi5n == null)return this;
        bi5n = bi5n || "";
        k5p.fh7a(bi5n) ? this.zv4z.innerHTML = bi5n : this.zv4z.appendChild(bi5n);
        this.z5E("oncontentready", this.zv4z);
        return this
    };
    uI2x.fS7L = function (bj5o) {
        var A5F = bj5o.top;
        if (A5F != null) {
            A5F += "px";
            a4e.X5c(this.o5t, "top", A5F);
            a4e.X5c(this.mH0x, "top", A5F)
        }
        var A5F = bj5o.left;
        if (A5F != null) {
            A5F += "px";
            a4e.X5c(this.o5t, "left", A5F);
            a4e.X5c(this.mH0x, "left", A5F)
        }
        return this
    };
    uI2x.M5R = function () {
        a4e.X5c(this.o5t, "visibility", "hidden");
        bGG7z.M5R.apply(this, arguments);
        this.Jf6Z();
        a4e.X5c(this.o5t, "visibility", "");
        if (!this.crl5q) {
            this.mH0x = ba5f.mH0x(this.o5t)
        }
        return this
    };
    uI2x.bp5u = function () {
        this.crv5A ? this.S5X() : this.RG8y();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, k5p = c5h("nej.u"), a4e = c5h("nej.e"), N5S = c5h("nej.ui"), zu4y;
    if (!!N5S.RI8A)return;
    N5S.RI8A = NEJ.C();
    zu4y = N5S.RI8A.O5T(N5S.eq7j);
    zu4y.bk5p = function (e5j) {
        this.Re8W();
        this.bl5q(this.crC5H(e5j));
        this.bS6M.onbeforerecycle = this.S5X.g5l(this);
        this.nH0x = this.baN1x()
    };
    zu4y.bC5H = function () {
        this.z5E("onbeforerecycle");
        this.bH6B();
        delete this.bS6M;
        a4e.lV0x(this.o5t);
        var zt4x = this.nH0x;
        if (!!zt4x) {
            delete this.nH0x;
            zt4x.S5X()
        }
    };
    zu4y.baN1x = bm5r;
    zu4y.crC5H = function (e5j) {
        var m5r = {};
        k5p.ed7W(e5j, function (r5w, J5O) {
            this.bS6M.hasOwnProperty(J5O) ? this.bS6M[J5O] = r5w : m5r[J5O] = r5w
        }, this);
        return m5r
    };
    zu4y.Re8W = function () {
        this.bS6M = {clazz: "", parent: null, content: this.o5t, destroyable: !1, oncontentready: null, nohack: !1}
    };
    zu4y.M5R = function () {
        if (!!this.nH0x) this.nH0x.M5R();
        this.z5E("onaftershow");
        return this
    };
    zu4y.bp5u = function () {
        if (!!this.nH0x) this.nH0x.bp5u();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, dP7I = c5h("nej.g"), ba5f = c5h("nej.h"), a4e = c5h("nej.e"), k5p = c5h("nej.u"),
        h5m = c5h("nej.v"), N5S = c5h("nej.ui"), Rd8V, bLl8d;
    if (!!N5S.Jb6V)return;
    var hO8G = a4e.rH1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dP7I.bpm4q + ");}");
    N5S.Jb6V = NEJ.C();
    Rd8V = N5S.Jb6V.O5T(N5S.eq7j);
    bLl8d = N5S.Jb6V.cg6a;
    Rd8V.bk5p = function (e5j) {
        this.bl5q(e5j);
        var bi5n = e5j.content || "&nbsp;";
        k5p.fh7a(bi5n) ? this.o5t.innerHTML = bi5n : this.o5t.appendChild(bi5n)
    };
    Rd8V.bC5H = function () {
        this.bH6B();
        this.o5t.innerHTML = "&nbsp;"
    };
    Rd8V.bZ6T = function () {
        this.kU9L = hO8G
    };
    Rd8V.M5R = function () {
        ba5f.boC4G(this.o5t);
        bLl8d.M5R.apply(this, arguments);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), N5S = c5h("nej.ut"), uu2x;
    if (!!N5S.xi3x)return;
    N5S.xi3x = NEJ.C();
    uu2x = N5S.xi3x.O5T(N5S.cz6t);
    uu2x.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.crI5N = !!e5j.overflow;
        this.o5t = a4e.y5D(e5j.body);
        this.zs4w = a4e.y5D(e5j.view) || a4e.bJn8f(this.o5t);
        this.bLK8C = a4e.y5D(e5j.mbar) || this.o5t;
        this.RL8D = parseInt(e5j.direction) || 0;
        if (!!e5j.isRelative) {
            this.o5t.style.position = "relative";
            this.baF1x = true;
            this.baE1x()
        }
        this.bT6N([[document, "mouseup", this.baC1x.g5l(this)], [document, "mousemove", this.baB1x.g5l(this)], [this.bLK8C, "mousedown", this.QY8Q.g5l(this)]])
    };
    uu2x.baE1x = function () {
        if (!!this.baF1x) {
            this.Ja6U = a4e.hL8D(this.o5t, this.zs4w);
            this.Ja6U.x -= parseInt(a4e.cZ6T(this.o5t, "left")) || 0;
            this.Ja6U.y -= parseInt(a4e.cZ6T(this.o5t, "top")) || 0
        }
    };
    uu2x.bC5H = function () {
        this.bH6B();
        delete this.o5t;
        delete this.bLK8C;
        delete this.zs4w
    };
    uu2x.bay1x = function () {
        return {
            x: Math.max(this.zs4w.clientWidth, this.zs4w.scrollWidth) - this.o5t.offsetWidth,
            y: Math.max(this.zs4w.clientHeight, this.zs4w.scrollHeight) - this.o5t.offsetHeight
        }
    };
    uu2x.QY8Q = function (d5i) {
        h5m.bh5m(d5i);
        if (!!this.hQ8I)return;
        this.hQ8I = {x: h5m.kF9w(d5i), y: h5m.nY0x(d5i)};
        this.bMX9O = this.bay1x();
        this.z5E("ondragstart", d5i)
    };
    uu2x.baB1x = function (d5i) {
        if (!this.hQ8I)return;
        var bj5o = {x: h5m.kF9w(d5i), y: h5m.nY0x(d5i)};
        var rv1x = bj5o.x - this.hQ8I.x, rt1x = bj5o.y - this.hQ8I.y, A5F = {
            top: (parseInt(a4e.cZ6T(this.o5t, "top")) || 0) + rt1x,
            left: (parseInt(a4e.cZ6T(this.o5t, "left")) || 0) + rv1x
        };
        if (this.baF1x) {
            this.baE1x();
            A5F.top = A5F.top + this.Ja6U.y;
            A5F.left = A5F.left + this.Ja6U.x
        }
        this.hQ8I = bj5o;
        this.fS7L(A5F)
    };
    uu2x.baC1x = function (d5i) {
        if (!this.hQ8I)return;
        delete this.bMX9O;
        delete this.hQ8I;
        this.z5E("ondragend", this.bax1x())
    };
    uu2x.fS7L = function (d5i) {
        if (!this.crI5N) {
            var brb4f = this.bMX9O || this.bay1x();
            d5i.top = Math.min(brb4f.y, Math.max(0, d5i.top));
            d5i.left = Math.min(brb4f.x, Math.max(0, d5i.left))
        }
        var cc6W = this.o5t.style;
        if (this.baF1x) {
            this.baE1x();
            d5i.top = d5i.top - this.Ja6U.y;
            d5i.left = d5i.left - this.Ja6U.x
        }
        if (this.RL8D == 0 || this.RL8D == 2) cc6W.top = d5i.top + "px";
        if (this.RL8D == 0 || this.RL8D == 1) cc6W.left = d5i.left + "px";
        this.z5E("onchange", d5i);
        return this
    };
    uu2x.bax1x = function () {
        return {left: parseInt(a4e.cZ6T(this.o5t, "left")) || 0, top: parseInt(a4e.cZ6T(this.o5t, "top")) || 0}
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = NEJ.P("nej.e"), h5m = NEJ.P("nej.v"), k5p = NEJ.P("nej.u"),
        H5M = NEJ.P("nej.ut"), N5S = NEJ.P("nej.ui"), hO8G, fY7R, b5g, K5P;
    if (!!N5S.RP8H)return;
    N5S.RP8H = NEJ.C();
    b5g = N5S.RP8H.O5T(N5S.Rp8h);
    K5P = N5S.RP8H.cg6a;
    b5g.cm6g = function () {
        this.qs1x = {};
        this.jH9y = {onchange: this.baB1x.g5l(this)};
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.crO5T(e5j.mask);
        this.crR5W(e5j.align);
        this.zq4u(e5j.title);
        if (!e5j.draggable)return;
        this.iX9O = H5M.xi3x.B5G(this.jH9y)
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.pI0x;
        delete this.QU8M;
        if (!!this.zp4t) {
            this.zp4t.S5X();
            delete this.zp4t
        }
        if (!!this.iX9O) {
            this.iX9O.S5X();
            delete this.iX9O
        }
    };
    b5g.bZ6T = function () {
        this.kU9L = hO8G;
        this.ca6U = fY7R
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.cQ6K(this.o5t);
        this.zv4z = i5n[1];
        this.jH9y.mbar = i5n[0];
        this.jH9y.body = this.o5t;
        h5m.q5v(i5n[2], "mousedown", this.csj5o.g5l(this));
        h5m.q5v(this.jH9y.mbar, "mousedown", this.QY8Q.g5l(this));
        this.btS5X = a4e.cQ6K(this.jH9y.mbar)[0]
    };
    b5g.csj5o = function (d5i) {
        h5m.bh5m(d5i);
        this.z5E("onclose", d5i);
        if (!d5i.stopped) {
            this.bp5u()
        }
    };
    b5g.QY8Q = function (d5i) {
        h5m.z5E(document, "click")
    };
    b5g.baB1x = function (d5i) {
        if (!this.mH0x)return;
        a4e.fy7r(this.mH0x, {top: d5i.top + "px", left: d5i.left + "px"})
    };
    b5g.Jf6Z = function () {
        var eF7y = [function () {
            return 0
        }, function (mW0x, Be4i, bj5o, J5O) {
            if (J5O == "top" && window.top != window.self) {
                var RX8P = 0, Bi4m = 0;
                if (top.g_topBarHeight) RX8P = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Bi4m = top.g_bottomBarHeight;
                if (mW0x.top <= RX8P) {
                    var baj1x = Math.max(0, (Be4i.height - (RX8P - mW0x.top) - Bi4m - bj5o.height) / 2);
                    return baj1x + RX8P
                } else {
                    var baj1x = Math.max(0, (Be4i.height - Bi4m - bj5o.height) / 2);
                    return baj1x + mW0x.top
                }
            }
            return Math.max(0, mW0x[J5O] + (Be4i[hD8v[J5O]] - bj5o[hD8v[J5O]]) / 2)
        }, function (mW0x, Be4i, bj5o, J5O) {
            return mW0x[J5O] + (Be4i[hD8v[J5O]] - bj5o[hD8v[J5O]])
        }], csm5r = ["left", "top"], hD8v = {left: "width", top: "height"};
        return function () {
            var A5F = {}, cc6W = this.o5t.style, iK9B = a4e.oz0x(), mW0x = {left: iK9B.scrollLeft, top: iK9B.scrollTop},
                Be4i = {width: iK9B.clientWidth, height: iK9B.clientHeight},
                bj5o = {width: this.o5t.offsetWidth, height: this.o5t.offsetHeight},
                df6Z = {left: iK9B.clientWidth - this.o5t.offsetWidth, top: iK9B.clientHeight - this.o5t.offsetHeight};
            k5p.be5j(csm5r, function (J5O, s5x) {
                var db6V = eF7y[this.pI0x[s5x]];
                if (!db6V)return;
                A5F[J5O] = db6V(mW0x, Be4i, bj5o, J5O)
            }, this);
            this.fS7L(A5F)
        }
    }();
    b5g.csT5Y = function () {
        if (!this.zp4t) {
            if (!this.QU8M)return;
            this.qs1x.parent = this.fB7u;
            this.zp4t = this.QU8M.B5G(this.qs1x)
        }
        this.zp4t.M5R()
    };
    b5g.RG8y = function () {
        if (!!this.zp4t) this.zp4t.bp5u();
        K5P.RG8y.apply(this, arguments)
    };
    b5g.crO5T = function (jX9O) {
        if (!!jX9O) {
            if (jX9O instanceof N5S.Jb6V) {
                this.zp4t = jX9O;
                return
            }
            if (k5p.gd7W(jX9O)) {
                this.QU8M = jX9O;
                return
            }
            this.QU8M = N5S.Jb6V;
            if (k5p.fh7a(jX9O)) this.qs1x.clazz = jX9O;
            return
        }
        this.QU8M = null
    };
    b5g.zq4u = function (eC7v, dq6k) {
        if (!!this.btS5X) {
            var ZZ1x = !dq6k ? "innerText" : "innerHTML";
            this.btS5X[ZZ1x] = eC7v || "标题"
        }
        return this
    };
    b5g.crR5W = function () {
        var cM6G = /\s+/, csR5W = {left: 0, center: 1, right: 2, auto: 3},
            csP5U = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (mQ0x) {
            this.pI0x = (mQ0x || "").split(cM6G);
            var dO7H = csR5W[this.pI0x[0]];
            if (dO7H == null) dO7H = 1;
            this.pI0x[0] = dO7H;
            var dO7H = csP5U[this.pI0x[1]];
            if (dO7H == null) dO7H = 1;
            this.pI0x[1] = dO7H;
            return this
        }
    }();
    b5g.M5R = function () {
        K5P.M5R.apply(this, arguments);
        this.csT5Y();
        return this
    };
    hO8G = a4e.rH1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    fY7R = a4e.hV8N('<div class="' + hO8G + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c5h = NEJ.P, k5p = c5h("nej.u"), N5S = c5h("nej.ui"), bqD4H;
    if (!!N5S.Sa8S)return;
    N5S.Sa8S = NEJ.C();
    bqD4H = N5S.Sa8S.O5T(N5S.RI8A);
    bqD4H.baN1x = function () {
        return N5S.RP8H.B5G(this.bS6M)
    };
    bqD4H.Re8W = function () {
        N5S.Sa8S.cg6a.Re8W.apply(this, arguments);
        this.bS6M.mask = null;
        this.bS6M.title = "标题";
        this.bS6M.align = "";
        this.bS6M.draggable = !1;
        this.bS6M.onclose = null
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), bd5i = c5h("nej.ui"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.dU7N = NEJ.C();
    b5g = n5s.dU7N.O5T(bd5i.Sa8S);
    b5g.bk5p = function (e5j) {
        e5j.clazz = "m-layer z-show " + (e5j.clazz || "");
        e5j.nohack = true;
        e5j.draggable = true;
        this.bl5q(e5j)
    };
    b5g.dv7o = function (f5k, bF6z) {
        if (!f5k)return;
        a4e.X5c(f5k, "display", !bF6z ? "none" : "");
        f5k.lastChild.innerText = bF6z || ""
    };
    b5g.dL7E = function (gh7a, cD6x, QE8w, QC8u) {
        var dB7u = "js-lock";
        if (cD6x === undefined)return a4e.by5D(gh7a, dB7u);
        !cD6x ? a4e.w5B(gh7a, dB7u) : a4e.x5C(gh7a, dB7u);
        gh7a.firstChild.innerText = !cD6x ? QE8w : QC8u
    };
    n5s.dU7N.M5R = function (e5j) {
        e5j = e5j || {};
        if (e5j.mask === undefined) e5j.mask = "m-mask";
        if (e5j.parent === undefined) e5j.parent = document.body;
        if (e5j.draggable === undefined) e5j.draggable = true;
        !!this.eL7E && this.eL7E.S5X();
        this.eL7E = this.B5G(e5j);
        this.eL7E.M5R(e5j);
        return this.eL7E
    };
    n5s.dU7N.bp5u = function () {
        !!this.eL7E && this.eL7E.S5X()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), p5u = c5h("nm.d"),
        l5q = c5h("nm.x"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.bqi4m = NEJ.C();
    b5g = n5s.bqi4m.O5T(n5s.dU7N);
    K5P = n5s.bqi4m.cg6a;
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        if (e5j.bubble === undefined) e5j.bubble = true;
        this.Qy8q = e5j.bubble;
        this.ps0x = e5j.message || ""
    };
    b5g.bZ6T = function () {
        this.ca6U = a4e.hV8N('<div class="lyct f-cb f-tc"></div>')
    };
    b5g.bR6L = function () {
        this.cb6V();
        h5m.q5v(this.o5t, "click", this.cy6s.g5l(this))
    };
    b5g.cy6s = function (d5i) {
        var f5k = h5m.U5Z(d5i, "d:action");
        if (!f5k)return;
        if (f5k.href) h5m.cd6X(d5i);
        if (a4e.u5z(f5k, "action") == "close") this.bp5u();
        if (this.Qy8q === !1) h5m.rP1x(d5i);
        this.z5E("onaction", a4e.u5z(f5k, "action"))
    };
    b5g.M5R = function () {
        K5P.M5R.call(this);
        this.o5t.innerHTML = this.ps0x
    };
    var fR7K = a4e.ej7c('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l5q.lY0x = function () {
        var eR7K;
        var cq6k;
        var bpS4W = function (gb7U, W5b) {
            if (k5p.gd7W(gb7U, "function") && gb7U(W5b) != -1) cq6k.S5X()
        };
        var zk4o = function () {
            !!cq6k && cq6k.bp5u()
        };
        return function (e5j) {
            clearTimeout(eR7K);
            e5j = e5j || {};
            e5j.title = e5j.title || "提示";
            e5j.clazz = e5j.clazz || "";
            e5j.parent = e5j.parent || document.body;
            e5j.buttons = e5j.buttons || [];
            e5j.message = a4e.bP6J(fR7K, e5j);
            e5j.onaction = bpS4W.g5l(null, e5j.action);
            if (e5j.mask === undefined) e5j.mask = true;
            if (e5j.draggable === undefined) e5j.draggable = true;
            !!cq6k && cq6k.S5X();
            cq6k = n5s.bqi4m.B5G(e5j);
            cq6k.M5R();
            if (e5j.autoclose) eR7K = setTimeout(zk4o.g5l(null), 2e3);
            return cq6k
        }
    }();
    l5q.fb7U = function (e5j) {
        e5j = e5j || {};
        e5j.clazz = e5j.clazz || "m-layer-w1";
        e5j.buttons = [{klass: "u-btn2-2", action: "close", text: e5j.btntxt || "确定"}];
        var cq6k = l5q.lY0x(e5j);
        return cq6k
    };
    l5q.gQ8I = function (e5j) {
        e5j = e5j || {};
        e5j.clazz = e5j.clazz || "m-layer-w2";
        e5j.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e5j.btnok || "确定",
            style: e5j.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e5j.btncc || "取消", style: e5j.ccstyle || ""}];
        var cq6k = l5q.lY0x(e5j);
        return cq6k
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u");
    a4e.csM5R = function () {
        var fT7M = /[\r\n]/gi, R5W = {};
        var csL5Q = function (cN6H) {
            return (cN6H || "").replace(fT7M, "aa").length
        };
        var byU6O = function (C5H) {
            var bc5h = R5W[C5H], bzk6e = a4e.y5D(C5H), xB3x = a4e.y5D(C5H + "-counter");
            if (!bzk6e || !bc5h)return;
            var d5i = {input: bzk6e.value};
            d5i.length = bc5h.onlength(d5i.input);
            d5i.delta = bc5h.max - d5i.length;
            bc5h.onchange(d5i);
            xB3x.innerHTML = d5i.value || "剩余" + d5i.delta + "个字"
        };
        return function (E5J, e5j) {
            var C5H = a4e.ks9j(E5J);
            if (!C5H || !!R5W[C5H])return;
            var bc5h = NEJ.X({}, e5j);
            bc5h.onchange = bc5h.onchange || bm5r;
            bc5h.onlength = csL5Q;
            if (!bc5h.max) {
                var bzv6p = parseInt(a4e.gv7o(C5H, "maxlength")), bzC6w = parseInt(a4e.u5z(C5H, "maxLength"));
                bc5h.max = bzv6p || bzC6w || 100;
                if (!bzv6p && !!bzC6w) bc5h.onlength = k5p.fv7o
            }
            R5W[C5H] = bc5h;
            h5m.q5v(C5H, "input", byU6O.g5l(null, C5H));
            var f5k = a4e.FT5Y(C5H, {nid: bc5h.nid || "js-counter", clazz: bc5h.clazz});
            bc5h.xid = C5H + "-counter";
            f5k.id = bc5h.xid;
            byU6O(C5H)
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), ba5f = c5h("nej.h");
    ba5f.bpL4P = function (E5J, dH7A) {
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, N5S = c5h("nej.p"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), ba5f = c5h("nej.h");
    if (N5S.ma0x.trident)return;
    ba5f.bpL4P = function () {
        var R5W = {};
        var Fa5f = function (d5i) {
            var cL6F = h5m.U5Z(d5i);
            if (!!cL6F.value)return;
            a4e.X5c(a4e.FT5Y(cL6F), "display", "none")
        };
        var Ey5D = function (d5i) {
            var cL6F = h5m.U5Z(d5i);
            if (!!cL6F.value)return;
            a4e.X5c(a4e.FT5Y(cL6F), "display", "")
        };
        var csK5P = function (cL6F, dH7A) {
            var C5H = a4e.ks9j(cL6F), jz9q = a4e.FT5Y(cL6F, {tag: "label", clazz: dH7A});
            jz9q.htmlFor = C5H;
            var cY6S = a4e.gv7o(cL6F, "placeholder") || "";
            jz9q.innerText = cY6S == "null" ? "" : cY6S;
            var cr6l = cL6F.offsetHeight + "px";
            a4e.fy7r(jz9q, {left: 0, display: !cL6F.value ? "" : "none"})
        };
        return ba5f.bpL4P.ef7Y(function (d5i) {
            d5i.stopped = !0;
            var bg5l = d5i.args, cL6F = a4e.y5D(bg5l[0]);
            if (!!R5W[cL6F.id])return;
            csK5P(cL6F, bg5l[1]);
            R5W[cL6F.id] = !0;
            h5m.q5v(cL6F, "blur", Ey5D.g5l(null));
            h5m.q5v(cL6F, "focus", Fa5f.g5l(null))
        })
    }()
})();
(function () {
    var c5h = NEJ.P, ba5f = c5h("nej.h"), a4e = c5h("nej.e"), cP6J = c5h("nej.x");
    a4e.fD7w = cP6J.fD7w = function (E5J, dH7A) {
        ba5f.bpL4P(E5J, a4e.u5z(E5J, "holder") || dH7A || "js-placeholder");
        return this
    };
    cP6J.isChange = !0
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        N5S = c5h("nej.ut"), he8W;
    if (!!N5S.Qv8n)return;
    N5S.Qv8n = NEJ.C();
    he8W = N5S.Qv8n.O5T(N5S.cz6t);
    he8W.cm6g = function () {
        this.ct6n();
        this.Db5g = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    he8W.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.fI7B = document.forms[e5j.form] || a4e.y5D(e5j.form);
        this.bT6N([[this.fI7B, "keypress", this.csJ5O.g5l(this)]]);
        this.ps0x = e5j.message || {};
        this.ps0x.pass = this.ps0x.pass || "&nbsp;";
        var eI7B = this.op0x(this.fI7B, "focusMode", 1);
        if (!isNaN(eI7B)) {
            this.bAL6F = {mode: eI7B, clazz: e5j.focus}
        }
        this.zj4n = e5j.holder;
        this.Db5g.tp.clazz = "js-mhd " + (e5j.tip || "js-tip");
        this.Db5g.ok.clazz = "js-mhd " + (e5j.pass || "js-pass");
        this.Db5g.er.clazz = "js-mhd " + (e5j.error || "js-error");
        this.bBf6Z = e5j.invalid || "js-invalid";
        this.csI5N(e5j);
        this.go7h();
        if (!!this.zg4k) this.zg4k.focus()
    };
    he8W.bC5H = function () {
        this.bH6B();
        delete this.ps0x;
        delete this.zg4k;
        delete this.DB5G;
        delete this.fI7B;
        delete this.bCi7b;
        delete this.Qt8l
    };
    he8W.op0x = function (f5k, DH5M, t5y) {
        var A5F = a4e.u5z(f5k, DH5M);
        switch (t5y) {
            case 1:
                return parseInt(A5F);
            case 2:
                return (A5F || "").toLowerCase() == "true";
            case 3:
                return this.bps4w(A5F)
        }
        return A5F
    };
    he8W.zf4j = function (A5F, t5y) {
        if (t5y == "date")return this.bps4w(A5F);
        return parseInt(A5F)
    };
    he8W.Sc8U = function () {
        var ji9Z = /^button|submit|reset|image|hidden|file$/i;
        return function (f5k) {
            f5k = this.y5D(f5k) || f5k;
            var t5y = f5k.type;
            return !!f5k.name && !ji9Z.test(f5k.type || "")
        }
    }();
    he8W.csH5M = function () {
        var ji9Z = /^hidden$/i;
        return function (f5k) {
            if (this.Sc8U(f5k))return !0;
            f5k = this.y5D(f5k) || f5k;
            var t5y = f5k.type || "";
            return ji9Z.test(t5y)
        }
    }();
    he8W.bps4w = function () {
        var cM6G = /[-\/]/;
        var csF5K = function (A5F) {
            if (!A5F)return "";
            A5F = A5F.split(cM6G);
            A5F.push(A5F.shift());
            return A5F.join("/")
        };
        return function (A5F) {
            if ((A5F || "").toLowerCase() == "now")return +(new Date);
            return Date.parse(csF5K(A5F))
        }
    }();
    he8W.csJ5O = function (d5i) {
        if (d5i.keyCode != 13)return;
        this.z5E("onenter", d5i)
    };
    he8W.csE5J = function (C5H, T5Y) {
        var qo1x = this.Qt8l[T5Y], A5F = this.op0x(C5H, T5Y);
        if (!A5F || !qo1x)return;
        this.Sj8b(C5H, qo1x);
        this.boI4M(C5H, T5Y, A5F)
    };
    he8W.csB5G = function (C5H, T5Y) {
        try {
            var bDi7b = this.op0x(C5H, T5Y);
            if (!bDi7b)return;
            var A5F = new RegExp(bDi7b);
            this.boI4M(C5H, T5Y, A5F);
            this.Sj8b(C5H, this.Qt8l[T5Y])
        } catch (e) {
        }
    };
    he8W.csA5F = function (C5H, T5Y) {
        var qo1x = this.Qt8l[T5Y];
        if (!!qo1x && this.op0x(C5H, T5Y, 2)) this.Sj8b(C5H, qo1x)
    };
    he8W.boH4L = function (C5H, T5Y, A5F) {
        A5F = parseInt(A5F);
        if (isNaN(A5F))return;
        this.boI4M(C5H, T5Y, A5F);
        this.Sj8b(C5H, this.Qt8l[T5Y])
    };
    he8W.bDC7v = function (C5H, T5Y) {
        this.boH4L(C5H, T5Y, this.op0x(C5H, T5Y))
    };
    he8W.bDK7D = function (C5H, T5Y) {
        this.boH4L(C5H, T5Y, a4e.gv7o(C5H, T5Y))
    };
    he8W.bDM7F = function (C5H, T5Y, t5y) {
        var A5F = this.zf4j(this.op0x(C5H, T5Y), this.op0x(C5H, "type"));
        this.boH4L(C5H, T5Y, A5F)
    };
    he8W.csz5E = function () {
        var fT7M = /^input|textarea$/i;
        var Fa5f = function (d5i) {
            this.oG0x(h5m.U5Z(d5i))
        };
        var Ey5D = function (d5i) {
            var f5k = h5m.U5Z(d5i);
            if (!this.op0x(f5k, "ignore", 2)) {
                this.bEh7a(f5k)
            }
        };
        return function (f5k) {
            if (this.op0x(f5k, "autoFocus", 2)) this.zg4k = f5k;
            var px0x = a4e.gv7o(f5k, "placeholder");
            if (!!px0x && px0x != "null") a4e.fD7w(f5k, this.zj4n);
            if (!!this.bAL6F && fT7M.test(f5k.tagName)) a4e.lT0x(f5k, this.bAL6F);
            var C5H = a4e.ks9j(f5k);
            this.csA5F(C5H, "required");
            this.csE5J(C5H, "type");
            this.csB5G(C5H, "pattern");
            this.bDK7D(C5H, "maxlength");
            this.bDK7D(C5H, "minlength");
            this.bDC7v(C5H, "maxLength");
            this.bDC7v(C5H, "minLength");
            this.bDM7F(C5H, "min");
            this.bDM7F(C5H, "max");
            var T5Y = f5k.name;
            this.ps0x[T5Y + "-tip"] = this.op0x(f5k, "tip");
            this.ps0x[T5Y + "-error"] = this.op0x(f5k, "message");
            this.oG0x(f5k);
            var bt5y = this.DB5G[C5H], j5o = (bt5y || Y5d).data || Y5d, Qg8Y = this.op0x(f5k, "counter", 2);
            if (Qg8Y && (j5o.maxlength || j5o.maxLength)) {
                a4e.csM5R(C5H, {nid: this.Db5g.tp.nid, clazz: "js-counter"})
            }
            if (!!bt5y && fT7M.test(f5k.tagName)) {
                this.bT6N([[f5k, "focus", Fa5f.g5l(this)], [f5k, "blur", Ey5D.g5l(this)]])
            } else if (this.op0x(f5k, "focus", 2)) {
                this.bT6N([[f5k, "focus", Fa5f.g5l(this)]])
            }
        }
    }();
    he8W.csI5N = function () {
        var Es5x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bps4w(v))
            }
        };
        var csy5D = {
            required: function (f5k) {
                var t5y = f5k.type, csx5C = !f5k.value, csw5B = (t5y == "checkbox" || t5y == "radio") && !f5k.checked;
                if (csw5B || csx5C)return -1
            }, type: function (f5k, e5j) {
                var cM6G = this.bCi7b[e5j.type], eJ7C = f5k.value.trim(), csv5A = !!cM6G.test && !cM6G.test(eJ7C),
                    cst5y = k5p.gd7W(cM6G) && !cM6G.call(this, eJ7C);
                if (csv5A || cst5y)return -2
            }, pattern: function (f5k, e5j) {
                if (!e5j.pattern.test(f5k.value))return -3
            }, maxlength: function (f5k, e5j) {
                if (f5k.value.length > e5j.maxlength)return -4
            }, minlength: function (f5k, e5j) {
                if (f5k.value.length < e5j.minlength)return -5
            }, maxLength: function (f5k, e5j) {
                if (k5p.fv7o(f5k.value) > e5j.maxLength)return -4
            }, minLength: function (f5k, e5j) {
                if (k5p.fv7o(f5k.value) < e5j.minLength)return -5
            }, min: function (f5k, e5j) {
                var ft7m = this.zf4j(f5k.value, e5j.type);
                if (isNaN(ft7m) || ft7m < e5j.min)return -6
            }, max: function (f5k, e5j) {
                var ft7m = this.zf4j(f5k.value, e5j.type);
                if (isNaN(ft7m) || ft7m > e5j.max)return -7
            }
        };
        return function (e5j) {
            this.bCi7b = NEJ.X(NEJ.X({}, Es5x), e5j.type);
            this.Qt8l = NEJ.X(NEJ.X({}, csy5D), e5j.attr)
        }
    }();
    he8W.Sj8b = function (C5H, wr3x) {
        if (!k5p.gd7W(wr3x))return;
        var bt5y = this.DB5G[C5H];
        if (!bt5y || !bt5y.func) {
            bt5y = bt5y || {};
            bt5y.func = [];
            this.DB5G[C5H] = bt5y
        }
        bt5y.func.push(wr3x)
    };
    he8W.boI4M = function (C5H, T5Y, A5F) {
        if (!T5Y)return;
        var bt5y = this.DB5G[C5H];
        if (!bt5y || !bt5y.data) {
            bt5y = bt5y || {};
            bt5y.data = {};
            this.DB5G[C5H] = bt5y
        }
        bt5y.data[T5Y] = A5F
    };
    he8W.bEh7a = function (f5k) {
        f5k = this.y5D(f5k) || f5k;
        var bt5y = this.DB5G[a4e.ks9j(f5k)];
        if (!f5k || !bt5y || !this.Sc8U(f5k))return !0;
        var m5r;
        k5p.ed7W(bt5y.func, function (eF7y) {
            m5r = eF7y.call(this, f5k, bt5y.data);
            return m5r != null
        }, this);
        if (m5r == null) {
            var d5i = {target: f5k, form: this.fI7B};
            this.z5E("oncheck", d5i);
            m5r = d5i.value
        }
        var d5i = {target: f5k, form: this.fI7B};
        if (m5r != null) {
            d5i.code = m5r;
            this.z5E("oninvalid", d5i);
            if (!d5i.stopped) {
                this.css5x(f5k, d5i.value || this.ps0x[f5k.name + m5r])
            }
        } else {
            this.z5E("onvalid", d5i);
            if (!d5i.stopped) this.csq5v(f5k, d5i.value)
        }
        return m5r == null
    };
    he8W.wz3x = function () {
        var csp5u = function (YQ1x, YP0x) {
            return YQ1x == YP0x ? "block" : "none"
        };
        var cso5t = function (f5k, t5y, bF6z) {
            var px0x = bGB7u.call(this, f5k, t5y);
            if (!px0x && !!bF6z) px0x = a4e.FT5Y(f5k, this.Db5g[t5y]);
            return px0x
        };
        var bGB7u = function (f5k, t5y) {
            var px0x;
            if (t5y == "tp") px0x = a4e.y5D(f5k.name + "-tip");
            if (!px0x) px0x = a4e.I5N(f5k.parentNode, this.Db5g[t5y].nid)[0];
            return px0x
        };
        return function (f5k, bF6z, t5y) {
            f5k = this.y5D(f5k) || f5k;
            if (!f5k)return;
            t5y == "er" ? a4e.x5C(f5k, this.bBf6Z) : a4e.w5B(f5k, this.bBf6Z);
            var px0x = cso5t.call(this, f5k, t5y, bF6z);
            if (!!px0x && !!bF6z) px0x.innerHTML = bF6z;
            k5p.ed7W(this.Db5g, function (A5F, J5O) {
                a4e.X5c(bGB7u.call(this, f5k, J5O), "display", csp5u(t5y, J5O))
            }, this)
        }
    }();
    he8W.oG0x = function (f5k, bF6z) {
        this.wz3x(f5k, bF6z || this.ps0x[f5k.name + "-tip"], "tp");
        return this
    };
    he8W.csq5v = function (f5k, bF6z) {
        this.wz3x(f5k, bF6z || this.ps0x[f5k.name + "-pass"] || this.ps0x.pass, "ok");
        return this
    };
    he8W.css5x = function (f5k, bF6z) {
        this.wz3x(f5k, bF6z || this.ps0x[f5k.name + "-error"], "er");
        return this
    };
    he8W.hM8E = function () {
        var fT7M = /^(?:radio|checkbox)$/i;
        var csn5s = function (A5F) {
            return A5F == null ? "" : A5F
        };
        var bGL7E = function (A5F, f5k) {
            if (fT7M.test(f5k.type || "")) {
                f5k.checked = A5F == f5k.value
            } else {
                f5k.value = csn5s(A5F)
            }
        };
        return function (T5Y, A5F) {
            var f5k = this.y5D(T5Y);
            if (!f5k)return this;
            if (f5k.tagName == "SELECT" || !f5k.length) {
                bGL7E(A5F, f5k)
            } else {
                k5p.be5j(f5k, bGL7E.g5l(null, A5F))
            }
            return this
        }
    }();
    he8W.y5D = function (T5Y) {
        return this.fI7B.elements[T5Y]
    };
    he8W.csX5c = function () {
        return this.fI7B
    };
    he8W.So8g = function () {
        var fT7M = /^radio|checkbox$/i, ji9Z = /^number|date$/;
        var csl5q = function (bv5A, f5k) {
            var T5Y = f5k.name, A5F = f5k.value, bt5y = bv5A[T5Y], t5y = this.op0x(f5k, "type");
            if (ji9Z.test(t5y)) A5F = this.zf4j(A5F, t5y);
            if (fT7M.test(f5k.type) && !f5k.checked) {
                A5F = this.op0x(f5k, "value");
                if (!A5F)return
            }
            if (!!bt5y) {
                if (!k5p.ep7i(bt5y)) {
                    bt5y = [bt5y];
                    bv5A[T5Y] = bt5y
                }
                bt5y.push(A5F)
            } else {
                bv5A[T5Y] = A5F
            }
        };
        return function () {
            var m5r = {};
            k5p.be5j(this.fI7B.elements, function (f5k) {
                if (this.csH5M(f5k)) csl5q.call(this, m5r, f5k)
            }, this);
            return m5r
        }
    }();
    he8W.Sq8i = function () {
        var csk5p = function (f5k) {
            if (this.Sc8U(f5k)) this.oG0x(f5k)
        };
        return function () {
            this.fI7B.reset();
            k5p.be5j(this.fI7B.elements, csk5p, this);
            return this
        }
    }();
    he8W.csZ5e = function () {
        this.fI7B.submit();
        return this
    };
    he8W.go7h = function () {
        var crX5c = function (f5k) {
            if (this.Sc8U(f5k)) this.csz5E(f5k)
        };
        return function () {
            this.DB5G = {};
            k5p.be5j(this.fI7B.elements, crX5c, this);
            return this
        }
    }();
    he8W.crW5b = function (f5k) {
        f5k = this.y5D(f5k) || f5k;
        if (!!f5k)return this.bEh7a(f5k);
        var m5r = !0;
        k5p.be5j(this.fI7B.elements, function (f5k) {
            var kj9a = this.crW5b(f5k);
            m5r = m5r && kj9a
        }, this);
        return m5r
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), H5M = c5h("nej.ut"), k5p = c5h("nej.u"),
        l5q = c5h("nm.x"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.Su8m = NEJ.C();
    b5g = n5s.Su8m.O5T(n5s.dU7N);
    K5P = n5s.Su8m.cg6a;
    b5g.bR6L = function () {
        this.cb6V();
        h5m.q5v(this.o5t, "click", this.cy6s.g5l(this));
        h5m.q5v(document, "mousewheel", this.zd4h.g5l(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.zd4h.g5l(this))
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        if (e5j.jst) {
            this.o5t.innerHTML = a4e.bP6J(e5j.jst, e5j.data)
        } else if (e5j.ntp) {
            this.o5t.appendChild(a4e.dr7k(e5j.ntp))
        } else if (e5j.txt) {
            this.o5t.innerHTML = a4e.ig8Y(e5j.txt)
        } else if (e5j.html) {
            this.o5t.innerHTML = e5j.html
        }
        var PE8w = this.o5t.getElementsByTagName("form");
        if (PE8w.length) {
            this.fI7B = H5M.Qv8n.B5G({form: PE8w[0]})
        }
        this.Bo4s = a4e.cQ6K(this.o5t)[0]
    };
    b5g.bC5H = function () {
        this.z5E("ondestroy");
        this.bH6B();
        this.o5t.innerHTML = "";
        delete this.Bo4s
    };
    b5g.cy6s = function (d5i) {
        var f5k = h5m.U5Z(d5i, "d:action"), j5o = this.fI7B ? this.fI7B.So8g() : null,
            d5i = {action: a4e.u5z(f5k, "action")};
        if (j5o) d5i.data = j5o;
        if (d5i.action) {
            this.z5E("onaction", d5i);
            if (d5i.stopped)return;
            this.bp5u()
        }
    };
    b5g.zd4h = function (d5i) {
        if (!this.Bo4s)return;
        h5m.bh5m(d5i);
        var df6Z = d5i.wheelDelta || -d5i.detail;
        this.Bo4s.scrollTop -= df6Z
    };
    l5q.jf9W = function (e5j) {
        e5j.destroyable = e5j.destroyable || true;
        e5j.title = e5j.title || "提示";
        e5j.draggable = true;
        e5j.parent = document.body;
        e5j.mask = e5j.mask || true;
        var zt4x = n5s.Su8m.B5G(e5j);
        zt4x.M5R();
        return zt4x
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bKi8a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", PD8v = {}, Bv4z = {};
    for (var i = 0, l = bKi8a.length, c; i < l; i++) {
        c = bKi8a.charAt(i);
        PD8v[i] = c;
        Bv4z[c] = i
    }
    var crV5a = function (iJ9A) {
        var s5x = 0, c, m5r = [];
        while (s5x < iJ9A.length) {
            c = iJ9A[s5x];
            if (c < 128) {
                m5r.push(String.fromCharCode(c));
                s5x++
            } else if (c > 191 && c < 224) {
                m5r.push(String.fromCharCode((c & 31) << 6 | iJ9A[s5x + 1] & 63));
                s5x += 2
            } else {
                m5r.push(String.fromCharCode((c & 15) << 12 | (iJ9A[s5x + 1] & 63) << 6 | iJ9A[s5x + 2] & 63));
                s5x += 3
            }
        }
        return m5r.join("")
    };
    var crS5X = function () {
        var ha8S = /\r\n/g;
        return function (j5o) {
            j5o = j5o.replace(ha8S, "\n");
            var m5r = [], nR0x = String.fromCharCode(237);
            if (nR0x.charCodeAt(0) < 0)for (var i = 0, l = j5o.length, c; i < l; i++) {
                c = j5o.charCodeAt(i);
                c > 0 ? m5r.push(c) : m5r.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j5o.length, c; i < l; i++) {
                c = j5o.charCodeAt(i);
                if (c < 128) m5r.push(c); else if (c > 127 && c < 2048) m5r.push(c >> 6 | 192, c & 63 | 128); else m5r.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m5r
        }
    }();
    var IC6w = function (iJ9A) {
        var s5x = 0, m5r = [], eI7B = iJ9A.length % 3;
        if (eI7B == 1) iJ9A.push(0, 0);
        if (eI7B == 2) iJ9A.push(0);
        while (s5x < iJ9A.length) {
            m5r.push(PD8v[iJ9A[s5x] >> 2], PD8v[(iJ9A[s5x] & 3) << 4 | iJ9A[s5x + 1] >> 4], PD8v[(iJ9A[s5x + 1] & 15) << 2 | iJ9A[s5x + 2] >> 6], PD8v[iJ9A[s5x + 2] & 63]);
            s5x += 3
        }
        if (eI7B == 1) m5r[m5r.length - 1] = m5r[m5r.length - 2] = "=";
        if (eI7B == 2) m5r[m5r.length - 1] = "=";
        return m5r.join("")
    };
    var crP5U = function () {
        var qM1x = /\n|\r|=/g;
        return function (j5o) {
            var s5x = 0, m5r = [];
            j5o = j5o.replace(qM1x, "");
            for (var i = 0, l = j5o.length; i < l; i += 4)m5r.push(Bv4z[j5o.charAt(i)] << 2 | Bv4z[j5o.charAt(i + 1)] >> 4, (Bv4z[j5o.charAt(i + 1)] & 15) << 4 | Bv4z[j5o.charAt(i + 2)] >> 2, (Bv4z[j5o.charAt(i + 2)] & 3) << 6 | Bv4z[j5o.charAt(i + 3)]);
            var bq5v = m5r.length, eI7B = j5o.length % 4;
            if (eI7B == 2) m5r = m5r.slice(0, bq5v - 2);
            if (eI7B == 3) m5r = m5r.slice(0, bq5v - 1);
            return m5r
        }
    }();
    p.ctd5i = function (j5o) {
        return crV5a(crP5U(j5o))
    };
    p.crM5R = function (j5o) {
        try {
            return window.btoa(j5o)
        } catch (ex) {
            return IC6w(crS5X(j5o))
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, h5m = c5h("nej.v"), a4e = c5h("nej.e"), v5A = c5h("nej.j"), N5S = c5h("nej.p"),
        k5p = c5h("nej.u"), n5s = c5h("nm.l"), D5I = c5h("nm.w"), bI6C = c5h("nej.ui"), p5u = c5h("nm.d"),
        l5q = c5h("nm.x"), b5g, K5P;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n5s.bLt8l = NEJ.C();
    b5g = n5s.bLt8l.O5T(n5s.dU7N);
    b5g.bZ6T = function () {
        this.ca6U = "m-download-layer"
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.bmr4v = i5n[0];
        this.bmf3x = i5n[1];
        this.bLE8w = i5n[2];
        v5A.br5w("/client/version/get", {type: "json", onload: this.crL5Q.g5l(this)});
        if (N5S.Ky7r.mac) {
            a4e.w5B(this.bmr4v.parentNode, "f-hide");
            a4e.x5C(this.bmf3x.parentNode, "f-hide");
            a4e.x5C(this.bLE8w, "f-hide")
        } else {
            a4e.x5C(this.bmr4v.parentNode, "f-hide");
            a4e.w5B(this.bmf3x.parentNode, "f-hide");
            a4e.w5B(this.bLE8w, "f-hide")
        }
    };
    b5g.bk5p = function (e5j) {
        e5j.clazz = " m-layer-down";
        e5j.parent = e5j.parent || document.body;
        e5j.title = "下载";
        e5j.draggable = !0;
        e5j.destroyalbe = !0;
        e5j.mask = true;
        this.bl5q(e5j);
        this.bT6N([[this.o5t, "click", this.bO6I.g5l(this)]]);
        this.er7k = TYPE_MAP[e5j.type];
        this.gA7t = e5j.id
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    b5g.za4e = function () {
        this.bp5u()
    };
    b5g.Ch5m = function (d5i) {
        this.z5E("onok", A5F);
        this.bp5u()
    };
    b5g.bO6I = function (d5i) {
        var f5k = h5m.U5Z(d5i, "d:action");
        switch (a4e.u5z(f5k, "action")) {
            case"download":
                this.bp5u();
                window.open(a4e.u5z(f5k, "src"));
                break;
            case"orpheus":
                this.bp5u();
                location.href = "orpheus://" + k5p.crM5R(JSON.stringify({
                        type: this.er7k,
                        id: this.gA7t,
                        cmd: "download"
                    }));
                break
        }
    };
    b5g.crL5Q = function (d5i) {
        if (d5i.code == 200) {
            this.IN6H = d5i.data;
            this.bmr4v.innerText = "V" + this.IN6H.mac;
            this.bmf3x.innerText = "V" + this.IN6H.pc
        }
    };
    l5q.SN9E = function (e5j) {
        n5s.bLt8l.B5G(e5j).M5R()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, k5p = c5h("nej.u"), p5u = c5h("nm.d"), bN6H = {};
    p5u.y5D = function (J5O) {
        return bN6H[J5O]
    };
    p5u.oo0x = function (J5O, bc5h) {
        bN6H[J5O] = bc5h
    };
    p5u.eQ7J = function (j5o) {
        k5p.ed7W(j5o, function (r5w, J5O) {
            var bc5h = bN6H[J5O] || {};
            NEJ.X(bc5h, r5w);
            bN6H[J5O] = bc5h
        })
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, ba5f = c5h("nej.h");
    ba5f.ST9K = function (J5O) {
        return localStorage.getItem(J5O)
    };
    ba5f.SU9L = function (J5O, A5F) {
        localStorage.setItem(J5O, A5F)
    };
    ba5f.blK3x = function (J5O) {
        localStorage.removeItem(J5O)
    };
    ba5f.blJ3x = function () {
        localStorage.clear()
    };
    ba5f.crK5P = function () {
        var m5r = [];
        for (var i = 0, l = localStorage.length; i < l; i++)m5r.push(localStorage.key(i));
        return m5r
    };
    ba5f.blx3x = function () {
        (document.onstorageready || bm5r)()
    };
    ba5f.blq3x = function () {
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, N5S = c5h("nej.p"), is8k = c5h("nej.c"), ba5f = c5h("nej.h"), ra1x;
    if (N5S.ma0x.trident || !!window.localStorage)return;
    var crJ5O = function () {
        var qQ1x, eR7K;
        var bfk2x = function () {
            qQ1x = document.createElement("div");
            NEJ.X(qQ1x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qQ1x);
            qQ1x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + is8k.y5D("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var OS8K = function () {
            eR7K = window.clearTimeout(eR7K);
            var hc8U = qQ1x.getElementsByTagName("object")[0];
            if (!!hc8U.initStorage) {
                delete qQ1x;
                ra1x = hc8U;
                ra1x.initStorage("nej-storage");
                (document.onstorageready || bm5r)();
                return
            }
            eR7K = window.setTimeout(OS8K, 500)
        };
        return function () {
            if (!!ra1x)return;
            bfk2x();
            OS8K()
        }
    }();
    ba5f.ST9K = ba5f.ST9K.ef7Y(function (d5i) {
        d5i.stopped = !0;
        if (!ra1x)return;
        d5i.value = ra1x.getItem(d5i.args[0])
    });
    ba5f.SU9L = ba5f.SU9L.ef7Y(function (d5i) {
        d5i.stopped = !0;
        if (!ra1x)return;
        var bg5l = d5i.args;
        ra1x.setItem(bg5l[0], bg5l[1])
    });
    ba5f.blK3x = ba5f.blK3x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        if (!ra1x)return;
        ra1x.removeItem(d5i.args[0])
    });
    ba5f.blJ3x = ba5f.blJ3x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        if (!!ra1x) ra1x.clear()
    });
    ba5f.blx3x = ba5f.blx3x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        crJ5O()
    });
    ba5f.blq3x = ba5f.blq3x.ef7Y(function (d5i) {
        d5i.stopped = !0;
        d5i.value = !!ra1x
    })
})();
(function () {
    var c5h = NEJ.P, k5p = c5h("nej.u"), h5m = c5h("nej.v"), ba5f = c5h("nej.h"), v5A = c5h("nej.j"),
        H5M = c5h("nej.ut"), R5W = {};
    v5A.uk2x = function (J5O, A5F) {
        var brp4t = JSON.stringify(A5F);
        try {
            ba5f.SU9L(J5O, brp4t)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (brp4t != ba5f.ST9K(J5O)) R5W[J5O] = A5F;
        return this
    };
    v5A.tD1x = function (J5O) {
        var j5o = JSON.parse(ba5f.ST9K(J5O) || "null");
        return j5o == null ? R5W[J5O] : j5o
    };
    v5A.brz4D = function (J5O, A5F) {
        var j5o = v5A.tD1x(J5O);
        if (j5o == null) {
            j5o = A5F;
            v5A.uk2x(J5O, j5o)
        }
        return j5o
    };
    v5A.Pe8W = function (J5O) {
        delete R5W[J5O];
        ba5f.blK3x(J5O);
        return this
    };
    v5A.cte5j = function () {
        var blk3x = function (r5w, J5O, bv5A) {
            delete bv5A[J5O]
        };
        return function () {
            k5p.ed7W(R5W, blk3x);
            ba5f.blJ3x();
            return this
        }
    }();
    v5A.ctf5k = function (m5r) {
        m5r = m5r || {};
        k5p.be5j(ba5f.crK5P(), function (J5O) {
            m5r[J5O] = v5A.tD1x(J5O)
        });
        return m5r
    };
    H5M.fr7k.B5G({
        element: document, event: "storageready", oneventadd: function () {
            if (ba5f.blq3x()) {
                document.onstorageready()
            }
        }
    });
    var crG5L = function () {
        var crE5J = function (A5F, J5O, bv5A) {
            ba5f.SU9L(J5O, JSON.stringify(A5F));
            delete bv5A[J5O]
        };
        return function () {
            k5p.ed7W(R5W, crE5J)
        }
    }();
    h5m.q5v(document, "storageready", crG5L);
    ba5f.blx3x()
})();
(function () {
    var c5h = NEJ.P, h5m = c5h("nej.v"), k5p = c5h("nej.u"), N5S = c5h("nej.ut"), Is6m;
    if (!!N5S.bld3x)return;
    N5S.bld3x = NEJ.C();
    Is6m = N5S.bld3x.O5T(N5S.cz6t);
    Is6m.cm6g = function () {
        var fR7K = +(new Date), mk0x = "dat-" + fR7K;
        return function () {
            this.ct6n();
            var R5W = this.constructor[mk0x];
            if (!R5W) {
                R5W = {};
                this.constructor[mk0x] = R5W
            }
            this.P5U = R5W
        }
    }();
    Is6m.y5D = function (J5O) {
        return this.P5U[J5O]
    };
    Is6m.oo0x = function (J5O, A5F) {
        var lu9l = this.P5U[J5O];
        this.P5U[J5O] = A5F;
        h5m.z5E(localCache, "cachechange", {key: J5O, type: "set", oldValue: lu9l, newValue: A5F});
        return this
    };
    Is6m.cE6y = function (J5O) {
        var lu9l = this.P5U[J5O];
        k5p.VO9F(this.P5U, J5O);
        h5m.z5E(localCache, "cachechange", {key: J5O, type: "delete", oldValue: lu9l, newValue: undefined});
        return lu9l
    };
    Is6m.Tk9b = function (DV5a) {
        return NEJ.Q(this.P5U, DV5a)
    };
    window.localCache = N5S.bld3x.B5G();
    N5S.fr7k.B5G({element: localCache, event: "cachechange"})
})();
(function () {
    var c5h = NEJ.P, eY7R = NEJ.R, bm5r = NEJ.F, k5p = c5h("nej.u"), v5A = c5h("nej.j"), N5S = c5h("nej.ut"),
        mk0x = "dat-" + +(new Date), mp0x;
    if (!!N5S.bkX3x)return;
    N5S.bkX3x = NEJ.C();
    mp0x = N5S.bkX3x.O5T(N5S.cz6t);
    mp0x.cm6g = function () {
        this.ct6n();
        this.P5U = this.constructor[mk0x];
        if (!this.P5U) {
            this.P5U = {};
            this.P5U[mk0x + "-l"] = {};
            this.constructor[mk0x] = this.P5U
        }
    };
    mp0x.qi1x = function (J5O) {
        return this.P5U[J5O]
    };
    mp0x.oe0x = function (J5O, A5F) {
        this.P5U[J5O] = A5F
    };
    mp0x.kG9x = function (J5O, kr9i) {
        var j5o = this.qi1x(J5O);
        if (j5o == null) {
            j5o = kr9i;
            this.oe0x(J5O, j5o)
        }
        return j5o
    };
    mp0x.crD5I = function (J5O) {
        if (J5O != null) {
            delete this.P5U[J5O];
            return
        }
        k5p.ed7W(this.P5U, function (r5w, J5O) {
            if (J5O == mk0x + "-l")return;
            this.crD5I(J5O)
        }, this)
    };
    mp0x.ctg5l = function (J5O) {
        if (!!v5A.Pe8W)return v5A.Pe8W(J5O)
    };
    mp0x.cry5D = function (J5O) {
        if (!!v5A.tD1x)return v5A.tD1x(J5O)
    };
    mp0x.crx5C = function (J5O, A5F) {
        if (!!v5A.uk2x) v5A.uk2x(J5O, A5F)
    };
    mp0x.DA5F = function (J5O, kr9i) {
        var j5o = this.OT8L(J5O);
        if (j5o == null) {
            j5o = kr9i;
            this.uY2x(J5O, j5o)
        }
        return j5o
    };
    mp0x.OT8L = function (J5O) {
        var j5o = this.qi1x(J5O);
        if (j5o != null)return j5o;
        j5o = this.cry5D(J5O);
        if (j5o != null) this.oe0x(J5O, j5o);
        return j5o
    };
    mp0x.uY2x = function (J5O, A5F) {
        this.crx5C(J5O, A5F);
        this.oe0x(J5O, A5F)
    };
    mp0x.bvT5Y = function (J5O) {
        if (J5O != null) {
            delete this.P5U[J5O];
            if (!!v5A.Pe8W) v5A.Pe8W(J5O);
            return
        }
        k5p.ed7W(this.P5U, function (r5w, J5O) {
            if (J5O == mk0x + "-l")return;
            this.bvT5Y(J5O)
        }, this)
    };
    mp0x.cth5m = function () {
        this.bvT5Y();
        return this
    };
    mp0x.cti5n = function (J5O) {
        var j5o = this.P5U[mk0x + "-l"];
        delete j5o[J5O]
    };
    mp0x.bkF3x = function (J5O) {
        var j5o = this.P5U[mk0x + "-l"], bg5l = eY7R.slice.call(arguments, 1);
        k5p.be5j(j5o[J5O], function (dn6h) {
            try {
                dn6h.apply(null, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j5o[J5O]
    };
    mp0x.bkC3x = function (J5O, dn6h) {
        dn6h = dn6h || bm5r;
        var i5n = this.P5U[mk0x + "-l"][J5O];
        if (!i5n) {
            i5n = [dn6h];
            this.P5U[mk0x + "-l"][J5O] = i5n;
            return !1
        }
        i5n.push(dn6h);
        return !0
    };
    mp0x.crs5x = function (i5n, bj5o, fW7P) {
        if (!i5n)return !1;
        bj5o = parseInt(bj5o) || 0;
        fW7P = parseInt(fW7P) || 0;
        if (!fW7P) {
            if (!i5n.loaded)return !1;
            fW7P = i5n.length
        }
        if (!!i5n.loaded) fW7P = Math.min(fW7P, i5n.length - bj5o);
        for (var i = 0; i < fW7P; i++)if (!i5n[bj5o + i])return !1;
        return !0
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, k5p = c5h("nej.u"), N5S = c5h("nej.ut"), b5g, K5P;
    if (!!N5S.OQ8I)return;
    N5S.OQ8I = NEJ.C();
    b5g = N5S.OQ8I.O5T(N5S.bkX3x);
    K5P = N5S.OQ8I.cg6a;
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.vf2x = e5j.key || "id";
        this.bb5g = e5j.data || Y5d;
        this.crr5w = !!e5j.autogc;
        this.crp5u(e5j.id)
    };
    b5g.bC5H = function () {
        this.bH6B();
        if (!!this.dK7D) {
            this.bwH5M()
        }
    };
    b5g.crp5u = function (C5H) {
        var R5W;
        if (!!C5H) {
            R5W = this.P5U[C5H];
            if (!R5W) {
                R5W = {};
                this.P5U[C5H] = R5W
            }
        }
        R5W = R5W || this.P5U;
        R5W.hash = R5W.hash || {};
        this.OP8H = R5W
    };
    b5g.bwH5M = function () {
        this.dK7D = window.clearTimeout(this.dK7D);
        var bv5A = {};
        k5p.ed7W(this.OP8H, function (i5n, J5O) {
            if (J5O == "hash")return;
            if (!k5p.ep7i(i5n))return;
            k5p.be5j(i5n, function (r5w) {
                if (!r5w)return;
                bv5A[r5w[this.vf2x]] = !0
            }, this)
        }, this);
        k5p.ed7W(this.Tr9i(), function (r5w, C5H, dE7x) {
            if (!bv5A[C5H]) {
                delete dE7x[C5H]
            }
        })
    };
    b5g.cro5t = function () {
        if (!!this.dK7D) {
            this.dK7D = window.clearTimeout(this.dK7D)
        }
        this.dK7D = window.setTimeout(this.bwH5M.g5l(this), 150)
    };
    b5g.yW4a = function (r5w, Ts9j) {
        r5w = this.bxz6t(r5w, Ts9j) || r5w;
        if (!r5w)return null;
        var J5O = r5w[this.vf2x];
        if (J5O != null) {
            var hy8q = this.Tr9i()[J5O];
            if (!!hy8q) r5w = NEJ.X(hy8q, r5w);
            this.Tr9i()[J5O] = r5w
        }
        delete r5w.bxC6w;
        return r5w
    };
    b5g.bxz6t = bm5r;
    b5g.bkm3x = function (J5O, r5w) {
        if (!r5w)return;
        if (!k5p.ep7i(r5w)) {
            var i5n = this.gS8K(J5O), r5w = this.yW4a(r5w, J5O);
            if (!!r5w) i5n.unshift(r5w);
            return
        }
        k5p.mn0x(r5w, this.bkm3x.g5l(this, J5O))
    };
    b5g.OL8D = function (J5O, cp6j) {
        var i5n = this.gS8K(J5O);
        i5n.length = Math.max(i5n.length, cp6j);
        this.bkk3x(J5O);
        return this
    };
    b5g.jI9z = function (J5O) {
        return this.gS8K(J5O).length
    };
    b5g.bkk3x = function (J5O, np0x) {
        this.gS8K(J5O).loaded = np0x != !1;
        return this
    };
    b5g.Tw9n = function (J5O) {
        return !!this.gS8K(J5O).loaded
    };
    b5g.rj1x = function (J5O, i5n) {
        this.sI1x(J5O);
        this.bjV3x({key: J5O, offset: 0, limit: i5n.length + 1}, {list: i5n, total: i5n.length})
    };
    b5g.gS8K = function () {
        var AJ4N = function (J5O) {
            return (J5O || "") + (!J5O ? "" : "-") + "list"
        };
        return function (J5O) {
            var J5O = AJ4N(J5O), i5n = this.OP8H[J5O];
            if (!i5n) {
                i5n = [];
                this.OP8H[J5O] = i5n
            }
            return i5n
        }
    }();
    b5g.Tr9i = function () {
        var dE7x = this.OP8H.hash;
        if (!dE7x) {
            dE7x = {};
            this.OP8H.hash = dE7x
        }
        return dE7x
    };
    b5g.bjI3x = function () {
        var AJ4N = function (e5j) {
            return "r-" + e5j.key
        };
        return function (e5j) {
            var hT8L = NEJ.X({}, e5j), ng0x = AJ4N(hT8L);
            if (!this.bkC3x(ng0x, this.z5E.g5l(this))) {
                hT8L.rkey = ng0x;
                hT8L.onload = this.crn5s.g5l(this, hT8L);
                this.z5E("dopullrefresh", hT8L)
            }
            return this
        }
    }();
    b5g.crn5s = function (e5j, i5n) {
        this.bkm3x(e5j.key, i5n);
        this.bkF3x(e5j.rkey, "onpullrefresh", e5j)
    };
    b5g.nj0x = function () {
        var AJ4N = function (e5j) {
            return "r-" + e5j.key + "-" + e5j.offset + "-" + e5j.limit
        };
        return function (e5j) {
            e5j = e5j || Y5d;
            var hT8L = {
                key: "" + e5j.key || "",
                ext: e5j.ext || null,
                data: e5j.data || null,
                offset: parseInt(e5j.offset) || 0,
                limit: parseInt(e5j.limit) || 0
            }, i5n = this.gS8K(hT8L.key);
            if (this.crs5x(i5n, hT8L.offset, hT8L.limit)) {
                this.z5E("onlistload", hT8L);
                return this
            }
            var ng0x = AJ4N(hT8L);
            if (!this.bkC3x(ng0x, this.z5E.g5l(this))) {
                hT8L.rkey = ng0x;
                hT8L.onload = this.bjV3x.g5l(this, hT8L);
                this.z5E("doloadlist", hT8L)
            }
            return this
        }
    }();
    b5g.bjV3x = function () {
        var Ep5u = function (r5w, s5x, i5n) {
            if (!!r5w) {
                return !0
            }
            i5n.splice(s5x, 1)
        };
        return function (e5j, m5r) {
            e5j = e5j || Y5d;
            var J5O = e5j.key, bj5o = e5j.offset, byZ6T = this.gS8K(J5O);
            var i5n = m5r || [];
            if (!k5p.ep7i(i5n)) {
                i5n = m5r.result || m5r.list || [];
                var cp6j = parseInt(m5r.total);
                if (!isNaN(cp6j) || cp6j > i5n.length) {
                    this.OL8D(J5O, cp6j)
                }
            }
            k5p.be5j(i5n, function (r5w, s5x) {
                byZ6T[bj5o + s5x] = this.yW4a(r5w, J5O)
            }, this);
            if (i5n.length < e5j.limit) {
                this.bkk3x(J5O);
                k5p.mn0x(byZ6T, Ep5u)
            }
            this.bkF3x(e5j.rkey, "onlistload", e5j)
        }
    }();
    b5g.sI1x = function () {
        var Ep5u = function (r5w, s5x, i5n) {
            i5n.splice(s5x, 1)
        };
        return function (J5O) {
            var i5n = this.gS8K(J5O);
            k5p.mn0x(i5n, Ep5u);
            this.bkk3x(J5O, !1);
            if (this.crr5w) {
                this.cro5t()
            }
            return this
        }
    }();
    b5g.bzf6Z = function (r5w, Ts9j) {
        return !r5w.bxC6w
    };
    b5g.ei7b = function (C5H) {
        return this.Tr9i()[C5H]
    };
    b5g.ctj5o = function (C5H) {
        var r5w = this.ei7b(C5H);
        if (!!r5w) r5w.bxC6w = !0
    };
    b5g.TE9v = function () {
        var AJ4N = function (e5j) {
            return "r-" + e5j.key + "-" + e5j.id
        };
        return function (e5j) {
            e5j = e5j || Y5d;
            var C5H = e5j[this.vf2x], hT8L = {id: C5H, ext: e5j.ext, data: e5j.data || {}, key: "" + e5j.key || ""};
            r5w = this.ei7b(C5H);
            hT8L.data[this.vf2x] = C5H;
            if (!!r5w && this.bzf6Z(r5w, hT8L.key)) {
                this.z5E("onitemload", hT8L);
                return this
            }
            var ng0x = AJ4N(hT8L);
            if (!this.bkC3x(ng0x, this.z5E.g5l(this))) {
                hT8L.rkey = ng0x;
                hT8L.onload = this.crk5p.g5l(this, hT8L);
                this.z5E("doloaditem", hT8L)
            }
            return this
        }
    }();
    b5g.crk5p = function (e5j, r5w) {
        e5j = e5j || Y5d;
        this.yW4a(r5w, e5j.key);
        this.bkF3x(e5j.rkey, "onitemload", e5j)
    };
    b5g.iC9t = function (e5j) {
        e5j = NEJ.X({}, e5j);
        e5j.onload = this.xC3x.g5l(this, e5j);
        this.z5E("doadditem", e5j)
    };
    b5g.xC3x = function (e5j, r5w) {
        var J5O = e5j.key;
        r5w = this.yW4a(r5w, J5O);
        if (!!r5w) {
            var ex7q = 0, i5n = this.gS8K(J5O);
            if (!e5j.push) {
                ex7q = -1;
                var bj5o = e5j.offset || 0;
                i5n.splice(bj5o, 0, r5w)
            } else if (i5n.loaded) {
                ex7q = 1;
                i5n.push(r5w)
            } else {
                i5n.length++
            }
        }
        var d5i = {key: J5O, flag: ex7q, data: r5w, action: "add", ext: e5j.ext};
        this.z5E("onitemadd", d5i);
        return d5i
    };
    b5g.If6Z = function (e5j) {
        e5j = NEJ.X({}, e5j);
        e5j.onload = this.bjf3x.g5l(this, e5j);
        this.z5E("dodeleteitem", e5j)
    };
    b5g.bjf3x = function (e5j, bAa6U) {
        var r5w, J5O = e5j.key;
        if (!!bAa6U) {
            r5w = this.ei7b(e5j.id) || null;
            var C5H = e5j.id, crj5o = this.vf2x, i5n = this.gS8K(J5O), s5x = k5p.cV6P(i5n, function (hy8q) {
                return !!hy8q && hy8q[crj5o] == C5H
            });
            if (s5x >= 0) i5n.splice(s5x, 1)
        }
        var d5i = {key: J5O, data: r5w, action: "delete", ext: e5j.ext};
        this.z5E("onitemdelete", d5i);
        return d5i
    };
    b5g.TJ9A = function (e5j) {
        e5j = NEJ.X({}, e5j);
        e5j.onload = this.crh5m.g5l(this, e5j);
        this.z5E("doupdateitem", e5j)
    };
    b5g.crh5m = function (e5j, r5w) {
        var J5O = e5j.key;
        if (!!r5w) r5w = this.yW4a(r5w, J5O);
        var d5i = {key: J5O, data: r5w, action: "update", ext: e5j.ext};
        this.z5E("onitemupdate", d5i);
        return d5i
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, k5p = c5h("nej.u"), N5S = c5h("nej.ut"), b5g;
    if (!!N5S.biG3x)return;
    N5S.biG3x = NEJ.C();
    b5g = N5S.biG3x.O5T(N5S.OQ8I);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.bin3x({
            doloadlist: this.TM9D.g5l(this),
            doloaditem: this.biB3x.g5l(this),
            doadditem: this.bAB6v.g5l(this),
            dodeleteitem: this.TN9E.g5l(this),
            doupdateitem: this.TP9G.g5l(this),
            dopullrefresh: this.bAI6C.g5l(this)
        })
    };
    b5g.TM9D = bm5r;
    b5g.bAI6C = bm5r;
    b5g.biB3x = bm5r;
    b5g.bAB6v = bm5r;
    b5g.TN9E = bm5r;
    b5g.TP9G = bm5r
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, k5p = c5h("nej.u"), h5m = c5h("nej.v"), v5A = c5h("nej.j"),
        H5M = c5h("nej.ut"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), b5g, K5P;
    p5u.hd8V = NEJ.C();
    b5g = p5u.hd8V.O5T(H5M.biG3x);
    b5g.cl6f = function () {
        var Og7Z = location.protocol + "//" + location.host;
        var crg5l = function (bs5x, j5o) {
            var bv5A = {conf: {}, data: {}, urls: []};
            k5p.be5j(bs5x, function (J5O, s5x, i5n) {
                var bc5h = p5u.y5D(J5O);
                if (!bc5h)return;
                var bie3x = bAW6Q(bc5h.url, j5o[J5O]);
                bv5A.urls.push(bie3x);
                bv5A.conf[bie3x] = bc5h;
                bv5A.data[bie3x] = JSON.stringify(j5o[J5O] == null ? "" : j5o[J5O])
            });
            return bv5A
        };
        var bAW6Q = function (V5a, j5o) {
            return V5a.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j5o[$2] || $1
            })
        };
        var bBe6Y = function (bc5h, e5j, d5i) {
            h5m.z5E(window, "requesterror", d5i);
            if (!!d5i.stopped)return;
            var HV6P = bc5h.onerror || e5j.onerror;
            if (k5p.fh7a(HV6P)) {
                this.z5E(HV6P, d5i, e5j)
            } else {
                (HV6P || bm5r).call(this, d5i, e5j)
            }
            var d5i = {result: d5i, option: e5j};
            this.z5E("onerror", d5i);
            if (!d5i.stopped) (bc5h.onmessage || bm5r).call(this, d5i.result.code, d5i.result)
        };
        var bBl6f = function (Q5V, bc5h, e5j) {
            var m5r = Q5V;
            if (k5p.gd7W(bc5h.format)) {
                m5r = bc5h.format.call(this, Q5V, e5j)
            }
            return m5r
        };
        var vx3x = function (Q5V, bc5h, e5j, tT2x) {
            if (k5p.gd7W(bc5h.beforeload)) {
                bc5h.beforeload.call(this, Q5V, e5j, bc5h)
            }
            if (Q5V && Q5V.code != null && Q5V.code != 200) {
                bBe6Y.call(this, bc5h, e5j, {
                    key: e5j.key,
                    code: Q5V.code,
                    message: Q5V.message || "",
                    captchaId: Q5V.captchaId,
                    ext: Q5V
                });
                return
            }
            var m5r = Q5V;
            if (!tT2x) {
                m5r = bBl6f.call(this, Q5V, bc5h, e5j)
            } else if (k5p.gd7W(bc5h.format)) {
                var bhW3x = [];
                k5p.be5j(tT2x.urls, function (V5a) {
                    bhW3x.push(bBl6f.call(this, Q5V[V5a], tT2x.conf[V5a], e5j))
                }, this);
                bhW3x.push(e5j);
                m5r = bc5h.format.apply(this, bhW3x)
            }
            var sB1x = bc5h.onload || e5j.onload, bBB6v = bc5h.finaly || e5j.finaly || bm5r;
            if (k5p.fh7a(sB1x)) {
                bBB6v.call(this, this.z5E(sB1x, m5r), e5j)
            } else {
                bBB6v.call(this, (sB1x || bm5r).call(this, m5r), e5j)
            }
        };
        var zF4J = function (bc5h, e5j, bQ6K) {
            bBe6Y.call(this, bc5h, e5j, {key: e5j.key, code: bQ6K.code || -1, message: bQ6K.message || ""})
        };
        return function (bc5h, e5j) {
            if (k5p.fh7a(bc5h)) {
                bc5h = p5u.y5D(bc5h)
            }
            delete e5j.value;
            (bc5h.filter || bm5r).call(this, e5j, bc5h);
            var Q5V = e5j.value;
            if (!!Q5V) {
                vx3x.call(this, Q5V, bc5h, e5j);
                return
            }
            var V5a, j5o = e5j.data || Y5d, vI3x = {
                cookie: !0,
                type: bc5h.rtype || "json",
                method: bc5h.type || "POST",
                onerror: zF4J.g5l(this, bc5h, e5j),
                noescape: bc5h.noescape
            };
            if (k5p.ep7i(bc5h.url)) {
                var tT2x = crg5l(bc5h.url, j5o);
                V5a = Og7Z + "/api/batch";
                vI3x.data = k5p.de6Y(tT2x.data);
                vI3x.onload = vx3x.ec7V(this, bc5h, e5j, tT2x);
                vI3x.headers = {"batch-method": "POST"};
                delete tT2x.data
            } else {
                var ld9U = bc5h.url.indexOf(":") < 0 ? Og7Z : "";
                V5a = bAW6Q(ld9U + bc5h.url, j5o);
                vI3x.data = k5p.de6Y(e5j.data);
                vI3x.onload = vx3x.ec7V(this, bc5h, e5j)
            }
            if (vI3x.method == "GET") vI3x.query = vI3x.data;
            return v5A.br5w(V5a, vI3x)
        }
    }();
    b5g.BM4Q = function () {
        var fT7M = /^get|list|pull$/i;
        return function (bBT6N, e5j) {
            var J5O = e5j.key, bc5h = p5u.y5D(J5O.split("-")[0] + "-" + bBT6N);
            if (fT7M.test(bBT6N) && J5O.indexOf("post-") < 0) bc5h.type = "GET";
            this.cl6f(bc5h, e5j)
        }
    }();
    b5g.ctk5p = function (J5O, i5n) {
        var cp6j = i5n.length;
        this.bjV3x({key: J5O, offset: 0, limit: cp6j + 1}, {list: i5n, total: cp6j})
    };
    b5g.TM9D = function (e5j) {
        this.BM4Q("list", e5j)
    };
    b5g.biB3x = function (e5j) {
        this.BM4Q("get", e5j)
    };
    b5g.bAI6C = function (e5j) {
        this.BM4Q("pull", e5j)
    };
    b5g.bAB6v = function (e5j) {
        this.BM4Q("add", e5j)
    };
    b5g.TN9E = function (e5j) {
        this.BM4Q("del", e5j)
    };
    b5g.TP9G = function (e5j) {
        this.BM4Q("update", e5j)
    };
    b5g.crb5g = function (r5w) {
        this.yW4a(r5w)
    };
    H5M.fr7k.B5G({element: window, event: "requesterror"})
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), H5M = c5h("nej.ut"), p5u = c5h("nm.d"), bhV3x = {},
        b5g, K5P;
    var sy1x = function (m5r, e5j) {
        m5r.conf = e5j.conf;
        return m5r
    };
    p5u.eQ7J({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q5V, e5j) {
                return sy1x({mv: Q5V}, e5j)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (m5r, e5j) {
                if (!!m5r.songs && m5r.songs.length > 0) m5r.song = m5r.songs[0]; else m5r.song = bhV3x;
                delete m5r.songs;
                return sy1x(m5r, e5j)
            }, filter: function (e5j) {
                e5j.data.ids = "[" + e5j.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: sy1x},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: sy1x},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (m5r, e5j) {
                m5r.playlist = m5r.result;
                delete m5r.result;
                return sy1x(m5r, e5j)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: sy1x},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: sy1x},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: sy1x},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e5j) {
                var i5n = e5j.data.id.split("-");
                e5j.data.radioId = i5n[0];
                e5j.data.asc = i5n[1] == 2;
                e5j.data.limit = 1e3;
                delete e5j.data.id
            }, format: function (Q5V, e5j) {
                var cra5f = {id: e5j.data.radioId, programs: Q5V.programs};
                return sy1x({djradio: cra5f}, e5j)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: sy1x},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e5j) {
                e5j.data.lv = 0;
                e5j.data.tv = 0
            }, format: function (m5r, e5j) {
                var ue2x = {lyric: "", nolyric: true};
                if (m5r.code == 200 && m5r.lrc && m5r.lrc.lyric) {
                    ue2x.lyric = m5r.lrc.lyric;
                    ue2x.nolyric = false
                } else {
                    ue2x.nolyric = true
                }
                return sy1x({lyric: ue2x}, e5j)
            }
        }
    });
    p5u.tW2x = NEJ.C();
    b5g = p5u.tW2x.O5T(p5u.hd8V);
    b5g.cqY5d = function (t5y, cG6A) {
        return this.qi1x(this.TT9K(t5y, cG6A))
    };
    b5g.NW7P = function (t5y, cG6A, e5j) {
        e5j = e5j || {};
        var j5o = this.qi1x(this.TT9K(t5y, cG6A));
        if (j5o && (t5y != 13 && t5y != 19 || e5j.conf && e5j.conf.useCache)) {
            this.z5E("onresourceload", t5y, cG6A, j5o, e5j.conf);
            return
        }
        e5j.data = {id: cG6A};
        e5j.onload = this.cqX5c.g5l(this, t5y, cG6A);
        e5j.onerror = this.cqW5b.g5l(this, t5y, cG6A);
        this.cl6f("res-" + this.yS4W(t5y) + "-get", e5j)
    };
    b5g.cqX5c = function (t5y, cG6A, m5r) {
        var j5o = m5r[this.yS4W(t5y)];
        this.oe0x(this.TT9K(t5y, cG6A), j5o);
        this.z5E("onresourceload", t5y, cG6A, j5o, m5r.conf)
    };
    b5g.cqW5b = function (t5y, cG6A, m5r, e5j) {
        if (m5r.code != 404) {
            this.z5E("onresourceerror", t5y, cG6A, m5r.code);
            return
        }
        this.oe0x(this.TT9K(t5y, cG6A), bhV3x);
        this.z5E("onresourceload", t5y, cG6A, bhV3x, e5j.conf)
    };
    b5g.ctl5q = function (t5y, e5j) {
        this.cl6f("res-" + this.yS4W(t5y) + "-play", e5j)
    };
    b5g.TT9K = function (t5y, cG6A) {
        return "res-" + this.yS4W(t5y) + "-" + cG6A
    };
    b5g.yS4W = function (t5y) {
        var bv5A = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv5A[t5y]
    };
    p5u.tW2x.HR6L = function (t5y, cG6A) {
        if (!this.eL7E) this.eL7E = p5u.tW2x.B5G({});
        return this.eL7E.cqY5d(t5y, cG6A)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        p5u = c5h("nm.d"), bhC3x = /^[1-9][0-9]*$/, b5g, K5P;
    var LOCAL_LOG_KEY = "local-log";
    p5u.eQ7J({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    p5u.hK8C = NEJ.C();
    b5g = p5u.hK8C.O5T(p5u.hd8V);
    b5g.gl7e = function (W5b, bc5h) {
        if (!W5b || !bc5h)return;
        if (k5p.fh7a(bc5h)) {
            try {
                bc5h = JSON.parse(bc5h)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a4e)
                }
            }
        }
        if (!k5p.kf9W(bc5h))return;
        this.cl6f("bi-log", {data: {logs: JSON.stringify([{action: W5b, json: bc5h}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W5b + ", json=" + JSON.stringify(bc5h))
        }
    };
    b5g.TV9M = function (mG0x) {
        if (!k5p.ep7i(mG0x))return;
        this.cl6f("bi-batch-log", {data: {logs: JSON.stringify(mG0x)}})
    };
    b5g.bDN7G = function (bc5h) {
        if (!bc5h || !bc5h.type || !bc5h.rid)return;
        var mF0x = bc5h.type;
        if (bhC3x.test(mF0x)) {
            mF0x = this.yS4W(mF0x)
        }
        if (!mF0x)return;
        if (mF0x == "playlist") mF0x = "list";
        this.gl7e("search", {type: mF0x, id: bc5h.rid || null, keyword: bc5h.keyword || null})
    };
    b5g.NQ7J = function () {
        var cqR5W = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bc5h) {
            if (!bc5h || !bc5h.type || !bc5h.rid)return;
            if (bc5h.play === undefined) bc5h.play = true;
            var mF0x = bc5h.type;
            if (bhC3x.test(mF0x)) {
                mF0x = this.yS4W(mF0x)
            }
            if (!mF0x)return;
            if (mF0x == "playlist") mF0x = "list";
            var Q5V = {id: bc5h.rid, type: mF0x};
            if (mF0x == "song" && bc5h.source) {
                Q5V.source = this.bEb7U(bc5h.source);
                if (!!bc5h.sourceid) Q5V.sourceid = bc5h.sourceid
            }
            this.gl7e(!bc5h.play ? "addto" : "play", Q5V);
            if (mF0x == "song" && bc5h.hash && bc5h.hash.match(cqR5W)) {
                this.gl7e(!bc5h.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b5g.bhx3x = function (C5H, bA5F, dI7B, Cw5B) {
        var Q5V = {type: "song", wifi: 0, download: 0};
        var cqO5T = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q5V.id = C5H;
        Q5V.time = Math.round(bA5F);
        Q5V.end = k5p.fh7a(Cw5B) ? Cw5B : cqO5T[Cw5B] || "";
        if (dI7B && dI7B.fid) {
            Q5V.source = this.bEb7U(dI7B.fid);
            Q5V.sourceId = dI7B.fdata
        }
        this.gl7e("play", Q5V)
    };
    b5g.bEz7s = function (t5y, cG6A) {
        if (!t5y || !cG6A)return;
        if (bhC3x.test(t5y)) t5y = this.yS4W(t5y);
        if (t5y != "playlist" && t5y != "dj")return;
        var bc5h = p5u.y5D("plus-" + t5y + "-count");
        if (!bc5h)return !1;
        this.cl6f(bc5h, {data: {id: cG6A}});
        var R5W = this.kG9x("play-hist-" + t5y, []);
        if (k5p.cV6P(R5W, cG6A) < 0) {
            R5W.push(cG6A);
            return !0
        }
        return !1
    };
    b5g.yS4W = function (t5y) {
        var bv5A = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bv5A[t5y]
    };
    b5g.bEb7U = function (HQ6K) {
        var bv5A = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv5A[HQ6K]
    };
    b5g.cqM5R = function (gP8H) {
        var mG0x = this.DA5F(LOCAL_LOG_KEY, []);
        mG0x.unshift(gP8H);
        if (mG0x.length > 200) {
            mG0x.length = 200
        }
        this.uY2x(LOCAL_LOG_KEY, mG0x)
    };
    b5g.cqK5P = function () {
        return this.OT8L(LOCAL_LOG_KEY)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), v5A = c5h("nej.j"), H5M = c5h("nej.ut"),
        a4e = c5h("nej.e"), k5p = c5h("nej.u"), n5s = c5h("nm.l"), l5q = c5h("nm.x"), p5u = c5h("nm.d");
    if (!p5u.tW2x)return;
    var R5W = p5u.tW2x.B5G({onresourceload: cqJ5O});
    var CC5H = p5u.hK8C.fX7Q();

    function cqJ5O(t5y, cG6A, j5o, bc5h) {
        var i5n = [];
        switch (parseInt(t5y)) {
            case 2:
                i5n = j5o;
                break;
            case 13:
                i5n = j5o.tracks;
                break;
            case 18:
                i5n.push(j5o);
                break;
            case 19:
                i5n = j5o.songs;
                break;
            case 21:
                if (j5o.mp && j5o.mp.fee && j5o.mp.pl <= 0) {
                    l5q.bhp3x(j5o.data.id, j5o.mp.fee);
                    return
                }
                break
        }
        if (l5q.HO6I(i5n, true, null, t5y == 19 ? {source: "album", sourceid: cG6A} : null) == 0) {
            return
        }
        l5q.fb7U({clazz: "m-layer-w2", bubble: !1, message: bc5h.message})
    }

    function cqH5M(d5i, qd1x, wo3x, ff7Y) {
        ff7Y = ff7Y || {};
        if (d5i.action == "ok") {
            if (wo3x) {
                location.dispatch2("/payfee?songId=" + wo3x)
            } else {
                location.dispatch2("/payfee?fee=" + qd1x || 1)
            }
            CC5H.gl7e("click", {
                type: "tobuyvip",
                name: "box",
                source: ff7Y.source || "song",
                sourceid: ff7Y.sourceid || wo3x || 0
            })
        } else if (d5i.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + wo3x);
            CC5H.gl7e("click", {
                type: "tobuyone",
                name: "box",
                source: ff7Y.source || "song",
                sourceid: ff7Y.sourceid || wo3x || 0
            })
        }
    }

    function NH7A(bF6z) {
        l5q.fb7U({clazz: "m-layer-w2", bubble: !1, message: bF6z, btntxt: "知道了"})
    }

    function NG7z(bF6z, Q5V) {
        NH7A((Q5V || Y5d).toast || bF6z)
    }

    l5q.hS8K = function (bF6z, C5H, t5y, cqG5L, bf5k) {
        bF6z = bF6z || "由于版权保护，您所在的地区暂时无法使用。";
        if (cqG5L && bf5k && bf5k.privilege && bf5k.privilege.toast) {
            v5A.br5w("/api/song/toast", {
                query: {id: bf5k.id},
                type: "json",
                onload: NG7z.g5l(this, bF6z),
                onerror: NG7z.g5l(this, bF6z)
            })
        } else if (C5H && t5y) {
            R5W.NW7P(t5y, C5H, {conf: {message: bF6z, useCache: t5y != 18}})
        } else {
            NH7A(bF6z)
        }
    };
    l5q.tB1x = function (qd1x, wo3x, t5y, ff7Y, mu0x) {
        var bN6H, oZ0x = "m-popup-info", bgV2x = "单首购买", bgU2x = "马上去开通", cA6u = "唱片公司要求，当前歌曲须付费使用。", bHd7W = true;
        try {
            bN6H = top.api.feeMessage || {}
        } catch (e) {
            bN6H = {}
        }
        if (qd1x == 1 || qd1x == 8 || qd1x == 16) {
            if (t5y == "song") {
                oZ0x = "m-popup-song-buy";
                cA6u = bN6H["vip2"] || cA6u;
                bgU2x = bN6H["vip2button"] || "包月购买";
                bgV2x = bN6H["vip2link"] || bgV2x;
                if (mu0x && mu0x.flag !== undefined) {
                    var bs5x = mu0x.flag.toString(2).split("");
                    if (parseInt(bs5x.pop(), 10) == 1) {
                        bHd7W = false
                    }
                }
            } else {
                cA6u = bN6H["vip"] || cA6u
            }
        } else if (qd1x == 4) {
            cA6u = bN6H["album"] || cA6u;
            bgU2x = "立即订购"
        } else {
            cA6u = bN6H["unknow"] || cA6u
        }
        l5q.jf9W({
            clazz: "m-layer-w5",
            html: a4e.bP6J(oZ0x, {songTxt: bgV2x, tip: cA6u, oktext: bgU2x, cctext: "以后再说", showSongText: bHd7W}),
            onaction: cqH5M.ec7V(null, qd1x, wo3x, ff7Y)
        })
    };
    l5q.bHr7k = function (hj8b, gW8O) {
        l5q.gQ8I({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t5y) {
                if (t5y == "ok") {
                    l5q.SN9E({id: hj8b, type: gW8O})
                }
            }
        })
    };
    l5q.bhp3x = function (nx0x, qd1x) {
        var bN6H, cA6u = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN6H = top.api.feeMessage || {}
        } catch (e) {
            bN6H = {}
        }
        if (qd1x == 1 || qd1x == 8) {
            cA6u = bN6H["vip"] || cA6u
        } else if (qd1x == 4) {
            cA6u = bN6H["album"] || cA6u
        } else {
            cA6u = bN6H["unknow"] || cA6u
        }
        return l5q.jf9W({
            clazz: "m-layer-w5",
            html: a4e.bP6J("m-popup-info", {tip: cA6u, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d5i) {
                if (d5i.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nx0x);
                    CC5H.gl7e("click", {type: "tobuyone", name: "box", source: "mv", sourceid: nx0x || 0})
                }
            }
        })
    };
    l5q.HO6I = function () {
        function compareFee(cqD5I, cqB5G) {
            var bv5A = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bv5A[cqD5I] || 0) - (bv5A[cqB5G] || 0)
        }

        return function (i5n, cA6u, tq1x, ff7Y) {
            tq1x = tq1x || {};
            var wr3x = [], HN6H = {}, bIp8h = 0, bIG8y = 0, HM6G = null;
            if (!i5n || !i5n.length)return wr3x;
            k5p.be5j(i5n, function (bf5k) {
                var eU7N = l5q.oh0x(bf5k);
                if (eU7N == 0) {
                    wr3x.push(bf5k)
                } else if (eU7N == 10) {
                    if (bf5k.privilege) {
                        bf5k.fee = bf5k.privilege.fee
                    }
                    if (compareFee(bf5k.fee, HN6H.fee) > 0) {
                        HN6H = bf5k
                    }
                } else if (eU7N == 11) {
                    ++bIp8h;
                    if (!tq1x.play) wr3x.push(bf5k)
                } else if (eU7N == 1e3) {
                    ++bIG8y;
                    if (!tq1x.download) wr3x.push(bf5k)
                } else if (eU7N == 100) {
                    HM6G = bf5k
                }
            });
            if (wr3x.length == 0 && cA6u) {
                if (bIp8h == i5n.length) {
                    var re1x = i5n[0].privilege || {};
                    if (re1x.payed) {
                        l5q.hS8K("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l5q.tB1x(re1x.fee, null, null, ff7Y)
                    }
                } else if (bIG8y == i5n.length) {
                    l5q.hS8K("因版权方要求，该歌曲不支持下载")
                } else if (HN6H.id) {
                    l5q.tB1x(HN6H.fee, HN6H.id, null, ff7Y, HN6H.privilege)
                } else {
                    if (HM6G && i5n.length == 1 && HM6G.privilege && HM6G.privilege.st < 0 && HM6G.privilege.toast) {
                        l5q.hS8K(null, null, null, true, HM6G)
                    } else {
                        l5q.hS8K()
                    }
                }
            }
            return wr3x
        }
    }();
    l5q.oh0x = function (bf5k) {
        if (!bf5k)return 0;
        var eU7N = bf5k.privilege;
        if (bf5k.program)return 0;
        if (window.GAbroad)return 100;
        if (eU7N) {
            if (eU7N.st != null && eU7N.st < 0) {
                return 100
            }
            if (eU7N.fee > 0 && eU7N.fee != 8 && eU7N.payed == 0 && eU7N.pl <= 0)return 10;
            if (eU7N.fee == 16)return 11;
            if ((eU7N.fee == 0 || eU7N.payed) && eU7N.pl > 0 && eU7N.dl == 0)return 1e3;
            if (eU7N.pl == 0 && eU7N.dl == 0)return 100;
            return 0
        } else {
            var dX7Q = bf5k.status != null ? bf5k.status : bf5k.st != null ? bf5k.st : 0;
            if (bf5k.status >= 0)return 0;
            if (bf5k.fee > 0)return 10;
            return 100
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, h5m = c5h("nej.v"), a4e = c5h("nej.e"), N5S = c5h("nej.ui"), b5g;
    if (!!N5S.Uf9W)return;
    var hO8G = a4e.rH1x(".#<uispace>{position:absolute;background:#fff;}");
    N5S.Uf9W = NEJ.C();
    b5g = N5S.Uf9W.O5T(N5S.Rp8h);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.bT6N([[document, "click", this.rb1x.g5l(this)]]);
        this.cqz5E = !!e5j.nostop;
        this.bJN8F = {top: e5j.top, left: e5j.left}
    };
    b5g.bC5H = function () {
        delete this.wS3x;
        delete this.bgJ2x;
        delete this.pI0x;
        delete this.bKm8e;
        delete this.Ug9X;
        delete this.bJN8F;
        this.bH6B()
    };
    b5g.bZ6T = function () {
        this.kU9L = hO8G
    };
    b5g.bR6L = function () {
        this.cb6V();
        this.zv4z = this.o5t;
        h5m.q5v(this.o5t, "click", this.cqy5D.g5l(this))
    };
    b5g.rb1x = function (d5i) {
        if (d5i.button != 2) this.bp5u()
    };
    b5g.cqy5D = function (d5i) {
        if (this.cqz5E)return;
        h5m.rP1x(d5i);
        var E5J = h5m.U5Z(d5i);
        if (E5J.tagName == "A") h5m.cd6X(d5i)
    };
    b5g.cqx5C = function () {
        var cM6G = /\s+/i;
        return function (mQ0x) {
            mQ0x = (mQ0x || "").trim().toLowerCase().split(cM6G);
            mQ0x[0] = mQ0x[0] || "bottom";
            mQ0x[1] = mQ0x[1] || "left";
            this.pI0x = mQ0x
        }
    }();
    b5g.cqw5B = function (mQ0x) {
        var m5r = {}, me0x = this.bgJ2x, ctn5s = a4e.oz0x(), dk6e = this.o5t.offsetWidth, cr6l = this.o5t.offsetHeight;
        switch (mQ0x[0]) {
            case"top":
                m5r.top = me0x.top - cr6l;
                m5r.left = mQ0x[1] == "right" ? me0x.left + me0x.width - dk6e : me0x.left;
                break;
            case"left":
                m5r.left = me0x.left - dk6e;
                m5r.top = mQ0x[1] == "bottom" ? me0x.top + me0x.height - cr6l : me0x.top;
                break;
            case"right":
                m5r.left = me0x.left + me0x.width;
                m5r.top = mQ0x[1] == "bottom" ? me0x.top + me0x.height - cr6l : me0x.top;
                break;
            default:
                m5r.top = me0x.top + me0x.height;
                m5r.left = mQ0x[1] == "right" ? me0x.left + me0x.width - dk6e : me0x.left;
                break
        }
        return m5r
    };
    b5g.Jf6Z = function () {
        if (!this.bKm8e) {
            this.fS7L(this.bJN8F);
            return
        }
        if (!!this.Ug9X) {
            this.fS7L(this.wS3x);
            return
        }
        if (!!this.bgJ2x) this.fS7L(this.cqw5B(this.pI0x))
    };
    b5g.cqs5x = function (E5J, df6Z, d5i) {
        df6Z = df6Z || Y5d;
        var bLa8S = a4e.oz0x(), cP6J = h5m.kF9w(d5i) + (df6Z.left || 0), gE7x = h5m.nY0x(d5i) + (df6Z.top || 0),
            dk6e = E5J.offsetWidth + (df6Z.right || 0), cr6l = E5J.offsetHeight + (df6Z.bottom || 0),
            HI6C = bLa8S.scrollWidth, bgd2x = bLa8S.scrollHeight, bgb2x = cP6J + dk6e, bga2x = gE7x + cr6l;
        switch (this.pI0x[0]) {
            case"top":
                gE7x = bga2x > bgd2x ? gE7x - cr6l : gE7x;
                if (this.pI0x[1] == "right") {
                    cP6J = cP6J - dk6e < 0 ? 0 : cP6J - dk6e
                } else {
                    cP6J = bgb2x > HI6C ? HI6C - dk6e : cP6J
                }
                break;
            case"left":
                cP6J = bgb2x > HI6C ? HI6C - dk6e : cP6J;
                if (this.pI0x[1] == "top") {
                    gE7x = bga2x > bgd2x ? gE7x - cr6l : gE7x
                } else {
                    gE7x = gE7x - cr6l < 0 ? gE7x : gE7x - cr6l
                }
                break;
            case"right":
                cP6J = cP6J - dk6e < 0 ? 0 : cP6J - dk6e;
                if (this.pI0x[1] == "top") {
                    gE7x = bga2x > bgd2x ? gE7x - cr6l : gE7x
                } else {
                    gE7x = gE7x - cr6l < 0 ? gE7x : gE7x - cr6l
                }
                break;
            default:
                gE7x = gE7x - cr6l < 0 ? gE7x : gE7x - cr6l;
                if (this.pI0x[1] == "left") {
                    cP6J = bgb2x > HI6C ? HI6C - dk6e : cP6J
                } else {
                    cP6J = cP6J - dk6e < 0 ? 0 : cP6J - dk6e
                }
                break
        }
        return {top: gE7x, left: cP6J}
    };
    b5g.bfZ2x = function () {
        var cqr5w = function (E5J, df6Z) {
            E5J = a4e.y5D(E5J);
            if (!E5J)return;
            df6Z = df6Z || Y5d;
            var bj5o = a4e.hL8D(E5J);
            return {
                top: bj5o.y - (df6Z.top || 0),
                left: bj5o.x - (df6Z.left || 0),
                width: E5J.offsetWidth + (df6Z.right || 0),
                height: E5J.offsetHeight + (df6Z.bottom || 0)
            }
        };
        return function (e5j) {
            e5j = e5j || Y5d;
            this.Ug9X = e5j.event;
            this.cqx5C(e5j.align);
            if (!!this.Ug9X) this.wS3x = this.cqs5x(e5j.target, e5j.delta, this.Ug9X);
            this.bgJ2x = cqr5w(e5j.target, e5j.delta);
            this.bKm8e = !!e5j.fitable;
            this.M5R();
            return this
        }
    }()
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), N5S = c5h("nej.ui"), b5g,
        K5P;
    if (!!N5S.yO4S)return;
    N5S.yO4S = NEJ.C();
    b5g = N5S.yO4S.O5T(N5S.RI8A);
    K5P = N5S.yO4S.cg6a;
    N5S.yO4S.cto5t = function () {
        var cqn5s = function (d5i, C5H, fd7W, jr9i, No7h) {
            var cq6k, J5O = C5H + "-i", R5W = fd7W.xq3x, bLP8H = !!jr9i.noclear, bMg8Y = !!jr9i.toggled;
            if (k5p.gd7W(jr9i.onbeforeclick)) {
                var Um9d = jr9i.noclear, cqm5r = jr9i.toggled;
                try {
                    jr9i.onbeforeclick(jr9i)
                } catch (e) {
                }
                bLP8H = !!jr9i.noclear;
                bMg8Y = !!jr9i.toggled;
                jr9i.toggled = cqm5r;
                jr9i.noclear = Um9d
            }
            var Cy5D = R5W[J5O];
            if (bMg8Y && !!Cy5D) {
                Cy5D.bp5u();
                return
            }
            h5m.bh5m(d5i);
            if (!bLP8H) {
                h5m.z5E(document, "click");
                cq6k = fd7W.B5G(jr9i)
            } else {
                cq6k = fd7W.ccp1x(jr9i, !0)
            }
            R5W[J5O] = cq6k;
            cq6k.vg2x("onbeforerecycle", function () {
                delete R5W[J5O]
            });
            cq6k.bfZ2x(No7h)
        };
        return function (f5k, e5j) {
            f5k = a4e.y5D(f5k);
            if (!f5k)return this;
            if (!this.xq3x) this.xq3x = {};
            var C5H = a4e.ks9j(f5k);
            if (!!this.xq3x[C5H])return this;
            e5j = NEJ.X({}, e5j);
            var No7h = NEJ.EX({align: "", delta: null, fitable: !1}, e5j);
            No7h.target = C5H;
            e5j.destroyable = !0;
            if (!e5j.fixed) {
                No7h.fitable = !0;
                e5j.parent = document.body
            }
            this.xq3x[C5H] = [C5H, e5j.event || "click", cqn5s.ec7V(null, C5H, this, e5j, No7h)];
            h5m.q5v.apply(h5m, this.xq3x[C5H]);
            return this
        }
    }();
    N5S.yO4S.ctp5u = function (f5k) {
        if (!this.xq3x)return this;
        var C5H = a4e.ks9j(f5k), d5i = this.xq3x[C5H];
        if (!d5i)return this;
        delete this.xq3x[C5H];
        h5m.mg0x.apply(h5m, d5i);
        var cq6k = this.xq3x[C5H + "-i"];
        if (!!cq6k) cq6k.bp5u();
        return this
    };
    b5g.baN1x = function () {
        return N5S.Uf9W.B5G(this.bS6M)
    };
    b5g.Re8W = function () {
        K5P.Re8W.apply(this, arguments);
        this.bS6M.top = null;
        this.bS6M.left = null;
        this.bS6M.nostop = !1
    };
    b5g.bfZ2x = function (e5j) {
        if (!!this.nH0x) this.nH0x.bfZ2x(e5j);
        return this
    }
})();
(function () {
    var c5h = NEJ.P, bd5i = c5h("nej.ui"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.bfJ2x = NEJ.C();
    b5g = n5s.bfJ2x.O5T(bd5i.yO4S);
    b5g.bk5p = function (e5j) {
        e5j.nohack = true;
        this.bl5q(e5j)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.Z5e = NEJ.C();
    b5g = n5s.Z5e.O5T(n5s.bfJ2x);
    K5P = n5s.Z5e.cg6a;
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.er7k = e5j.type || 1
    };
    b5g.bR6L = function () {
        this.cb6V();
        this.o5t = a4e.na0x(this.cqk5p());
        var i5n = a4e.cQ6K(this.o5t);
        this.pb0x = i5n[0];
        this.ch6b = i5n[1]
    };
    b5g.cqk5p = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b5g.Jf6Z = function () {
        var A5F = {}, cc6W = this.o5t.style, iK9B = a4e.oz0x(), mW0x = {left: iK9B.scrollLeft, top: iK9B.scrollTop},
            df6Z = {left: iK9B.clientWidth - this.o5t.offsetWidth, top: iK9B.clientHeight - this.o5t.offsetHeight};
        A5F.top = Math.max(0, mW0x.top + df6Z.top / 2);
        A5F.left = Math.max(0, mW0x.left + df6Z.left / 2);
        this.nH0x.fS7L(A5F)
    };
    b5g.M5R = function (e5j) {
        K5P.M5R.call(this);
        this.Jf6Z();
        this.er7k == 1 ? a4e.ev7o(this.pb0x, "u-icn-32", "u-icn-31") : a4e.ev7o(this.pb0x, "u-icn-31", "u-icn-32");
        this.ch6b.innerHTML = e5j.tip || ""
    };
    n5s.Z5e.M5R = function () {
        var eR7K;
        return function (e5j) {
            clearTimeout(eR7K);
            if (e5j.parent === undefined) e5j.parent = document.body;
            if (e5j.autoclose === undefined) e5j.autoclose = true;
            e5j.clazz = "m-sysmsg";
            !!this.eL7E && this.eL7E.S5X();
            this.eL7E = this.B5G(e5j);
            this.eL7E.M5R(e5j);
            if (e5j.autoclose) eR7K = setTimeout(this.bp5u.g5l(this), 2e3)
        }
    }();
    n5s.Z5e.bp5u = function () {
        !!this.eL7E && this.eL7E.bp5u()
    }
})();
(function () {
    var c5h = NEJ.P, v5A = c5h("nej.j"), k5p = c5h("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v5A.br5w = v5A.br5w.ef7Y(function (d5i) {
            e5j = d5i.args[1];
            e5j.query = e5j.query || {};
            if (k5p.fh7a(e5j.query)) e5j.query = k5p.hq8i(e5j.query);
            e5j.query.ref = "mail"
        })
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, eY7R = NEJ.R, H5M = c5h("nej.ut"), k5p = c5h("nej.u"), h5m = c5h("nej.v"),
        v5A = c5h("nej.j"), p5u = c5h("nm.d"), n5s = c5h("nm.l"), J5O = "playlist-tracks_", b5g;
    p5u.eQ7J({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q5V, e5j) {
                this.cqj5o(Q5V.playlist);
                return {total: 0, list: eY7R}
            }, onerror: function () {
                this.z5E("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q5V, e5j) {
                var iH9y = Q5V.playlist;
                iH9y.creator = GUser;
                iH9y.isHost = !0;
                iH9y.typeFlag = "playlist";
                return iH9y
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.hk8c, "listchange", d5i)
            }, onmessage: function () {
                var ly9p = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    n5s.Z5e.M5R({tip: ly9p[ci6c] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e5j) {
                e5j.id = e5j.data.pid
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.hk8c, "listchange", d5i)
            }, onmessage: function () {
                var ly9p = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    n5s.Z5e.M5R({tip: ly9p[ci6c] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e5j) {
                var ff7Y = e5j.ext || {};
                e5j.ext = NEJ.X(ff7Y, e5j.data);
                e5j.data = {id: e5j.ext.id}
            }, format: function (Q5V, e5j) {
                n5s.Z5e.M5R({tip: "收藏成功" + (Q5V.point > 0 ? ' 获得<em class="s-fc6">' + Q5V.point + "积分</em>" : "")});
                var r5w = e5j.ext;
                r5w.subscribedCount++;
                return r5w
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.cqi5n, "listchange", d5i);
                h5m.z5E(p5u.cqi5n, "itemchange", {attr: "subscribedCount", data: d5i.data})
            }, onmessage: function () {
                var ly9p = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (ci6c) {
                    n5s.Z5e.M5R({type: 2, tip: ly9p[ci6c] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e5j) {
                e5j.id = e5j.data.id = e5j.data.pid
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.hk8c, "listchange", d5i)
            }, onmessage: function () {
                var ly9p = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (ci6c) {
                    n5s.Z5e.M5R({tip: ly9p[ci6c], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e5j) {
                var j5o = e5j.data, Uq9h = {};
                Uq9h["playlist-update-name"] = {id: j5o.id, name: j5o.name};
                Uq9h["playlist-update-tag"] = {id: j5o.id, tags: j5o.tags.join(";")};
                Uq9h["playlist-update-desc"] = {id: j5o.id, desc: j5o.description};
                e5j.data = Uq9h;
                e5j.ext = j5o
            },
            format: function (T5Y, pi0x, Nd7W, e5j) {
                if (T5Y.code == 200 && pi0x.code == 200 && Nd7W.code == 200) {
                    e5j.ext.allSuccess = true;
                    n5s.Z5e.M5R({tip: "保存成功"})
                } else if (T5Y.code == 407 || pi0x.code == 407 || Nd7W.code == 407) {
                    e5j.ext.allSuccess = false;
                    n5s.Z5e.M5R({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e5j.ext.allSuccess = false;
                    n5s.Z5e.M5R({type: 2, tip: "保存失败"})
                }
                return this.ei7b(e5j.ext.id)
            },
            finaly: function (d5i, e5j) {
                h5m.z5E(p5u.hk8c, "listchange", d5i)
            },
            onmessage: function (ci6c) {
                n5s.Z5e.M5R({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q5V, e5j) {
                var r5w = this.ei7b(e5j.ext.id);
                if (Q5V.code == 200) r5w.name = e5j.ext.name;
                return Q5V
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q5V, e5j) {
                var r5w = this.ei7b(e5j.ext.id);
                if (Q5V.code == 200) r5w.tags = e5j.ext.tags;
                return Q5V
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q5V, e5j) {
                var r5w = this.ei7b(e5j.ext.id);
                if (Q5V.code == 200) r5w.description = e5j.ext.description;
                return Q5V
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e5j) {
                e5j.url = e5j.data.url;
                delete e5j.data.url
            }, format: function (Q5V, e5j) {
                n5s.Z5e.M5R({tip: "保存成功"});
                var r5w = this.ei7b(e5j.data.id);
                r5w.coverImgUrl = e5j.url;
                e5j.ext = r5w;
                return r5w
            }, onmessage: function (ci6c) {
                n5s.Z5e.M5R({type: 2, tip: "保存失败"})
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.hk8c, "itemchange", {attr: "coverImgUrl", data: e5j.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q5V, e5j) {
                var iH9y = this.ei7b(e5j.data.id);
                if (!iH9y)return;
                iH9y.playCount++;
                h5m.z5E(p5u.hk8c, "itemchange", {attr: "playcount", data: iH9y})
            }
        }
    });
    p5u.hk8c = NEJ.C();
    b5g = p5u.hk8c.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.brv4z = function () {
        var cT6N = GUser.userId;
        this.nj0x({limit: 1001, key: "playlist_my-" + cT6N, data: {offset: 0, limit: 1001, uid: cT6N}})
    };
    b5g.cqj5o = function (i5n) {
        var cT6N = GUser.userId, iR9I = [], brC4G = [];
        k5p.be5j(i5n, function (r5w) {
            r5w.typeFlag = "playlist";
            if (r5w.creator && r5w.creator.userId == cT6N) {
                if (r5w.specialType == 5) r5w.name = "我喜欢的音乐";
                r5w.isHost = !0;
                iR9I.push(r5w)
            } else {
                brC4G.push(r5w)
            }
        });
        this.rj1x("playlist_new-" + cT6N, iR9I);
        this.rj1x("playlist_fav-" + cT6N, brC4G)
    };
    b5g.cqg5l = function (j5o) {
        this.cl6f("playlist-update-cover", {data: j5o})
    };
    b5g.ctr5w = function () {
        var Nb7U = this.cqe5j.y5D("host-plist");
        if (Nb7U.length == 0) {
            return
        }
        if (Nb7U.length == 1 && Nb7U[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Nb7U.length; i < len; i++) {
            var r5w = Nb7U[i];
            if (r5w.trackCount > 0)return r5w.id
        }
        return this.cqe5j.y5D("host-plist")[0].id
    };
    b5g.cqd5i = function (C5H) {
        if (GUser && GUser.userId > 0) {
            this.cl6f("playlist-upcount", {data: {id: C5H}})
        }
    };
    b5g.AZ4d = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b5g.cts5x = function () {
        return GUser.userId
    };
    b5g.bfs2x = function (r5w) {
        if (r5w.userId == GUser.userId && r5w.specialType == 5) r5w.name = "我喜欢的音乐";
        h5m.z5E(this.constructor, "itemchange", {data: this.yW4a(r5w)});
        return r5w
    };
    H5M.fr7k.B5G({element: p5u.hk8c, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c5h = NEJ.P, eY7R = NEJ.R, bm5r = NEJ.F, Y5d = NEJ.O, H5M = c5h("nej.ut"), h5m = c5h("nej.v"),
        k5p = c5h("nej.u"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), n5s = c5h("nm.l"), b5g, K5P;
    p5u.eQ7J({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q5V) {
                return Q5V.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e5j) {
                e5j.data.limit = 1e3;
                delete e5j.data.id
            }, format: function (Q5V, e5j) {
                var bsN5S = [], yN4R = Q5V.programs;
                if (yN4R) {
                    for (var i = 0, l = yN4R.length; i < l; i++) {
                        if (yN4R[i].programFeeType < 10 || yN4R[i].buyed) {
                            bsN5S.push(yN4R[i])
                        }
                    }
                }
                return bsN5S
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q5V, e5j) {
                return Q5V.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e5j) {
                e5j.ext = e5j.data;
                e5j.data = {id: e5j.ext.id};
                e5j.id = e5j.data.id
            }, format: function (Q5V, e5j) {
                n5s.Z5e.M5R({tip: "收藏成功"});
                var r5w = e5j.ext;
                r5w.subscribedCount++;
                r5w.subscribed = !0;
                return r5w
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.po0x, "listchange", d5i)
            }, onmessage: function () {
                var ly9p = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (ci6c) {
                    n5s.Z5e.M5R({type: 2, tip: ly9p[ci6c] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d5i, e5j) {
                h5m.z5E(p5u.po0x, "listchange", d5i)
            }, onmessage: function () {
                var ly9p = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (ci6c) {
                    l5q.bfr2x({txt: ly9p[ci6c] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e5j) {
                var r5w = this.ei7b(e5j.data.id) || Y5d;
                e5j.ext = (r5w.listenerCount || 0) + 1
            }, format: function (Q5V, e5j) {
                var r5w = this.ei7b(e5j.data.id);
                if (!!r5w) {
                    r5w.listenerCount = Math.max(e5j.ext, r5w.listenerCount || 0)
                }
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.po0x, "itemchange", {attr: "playCount", data: this.ei7b(e5j.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e5j) {
                e5j.data = {threadId: "A_DJ_1_" + e5j.id}
            }, format: function (Q5V, e5j) {
                var r5w = e5j.ext.data || this.ei7b(e5j.id);
                r5w.liked = true;
                r5w.likedCount++;
                e5j.ext.data = r5w;
                try {
                    top.player.setLike(r5w)
                } catch (e) {
                }
                return r5w
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.po0x, "itemchange", {attr: "likedCount", data: e5j.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e5j) {
                e5j.data = {threadId: "A_DJ_1_" + e5j.id}
            }, format: function (Q5V, e5j) {
                var r5w = e5j.ext.data || this.ei7b(e5j.id);
                r5w.liked = false;
                r5w.likedCount--;
                e5j.ext.data = r5w;
                try {
                    top.player.setLike(r5w)
                } catch (e) {
                }
                return r5w
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.po0x, "itemchange", {attr: "likedCount", data: e5j.ext.data})
            }
        }
    });
    p5u.po0x = NEJ.C();
    b5g = p5u.po0x.O5T(p5u.hd8V);
    b5g.ctt5y = function () {
        var cT6N = GUser.userId;
        this.nj0x({limit: 1001, key: "program_fav-" + cT6N, data: {offset: 0, limit: 1e3, uid: cT6N}})
    };
    b5g.ctu5z = function (cR6L) {
        var oC0x = cR6L[this.vf2x];
        l5q.cpY5d(4, function (R5W) {
            R5W.rj1x("track_program-" + oC0x, cR6L.songs)
        });
        delete cR6L.songs;
        var bK6E = cR6L.mainSong;
        l5q.cpY5d(4, function (R5W) {
            R5W.rj1x("track_program_main-" + oC0x, !bK6E ? [] : [bK6E])
        });
        cR6L.mainSong = (bK6E || Y5d).id
    };
    b5g.ctv5A = function (C5H) {
        var cR6L = this.ei7b(C5H), cT6N = localCache.Tk9b("host.profile.userId");
        return !!cR6L && cR6L.dj.userId == cT6N
    };
    b5g.ctw5B = function (C5H) {
        return !1
    };
    b5g.bfs2x = function (r5w) {
        h5m.z5E(this.constructor, "itemchange", {attr: "detail", data: this.yW4a(r5w)});
        return r5w
    };
    b5g.cqd5i = function (C5H) {
        this.cl6f("program-update-count", {data: {id: C5H}})
    };
    l5q.buA5F = function (e5j) {
        var R5W = p5u.po0x.B5G({
            onitemadd: function () {
                (e5j.onsuccess || bm5r)()
            }, onerror: function () {
                (e5j.onerror || bm5r)()
            }
        });
        if (e5j.data.liked) {
            R5W.MZ7S(e5j.data)
        } else {
            R5W.uU2x(e5j.data)
        }
    };
    b5g.uU2x = function (cR6L) {
        if (!l5q.hb8T())return;
        var cn6h = {ext: {}};
        if (k5p.kf9W(cR6L)) {
            cn6h.id = cR6L.id;
            cn6h.ext.data = cR6L
        } else {
            cn6h.id = cR6L
        }
        this.cl6f("program-like", cn6h)
    };
    b5g.MZ7S = function (cR6L) {
        if (!l5q.hb8T())return;
        var cn6h = {ext: {}};
        if (k5p.kf9W(cR6L)) {
            cn6h.id = cR6L.id;
            cn6h.ext.data = cR6L
        } else {
            cn6h.id = cR6L
        }
        this.cl6f("program-unlike", cn6h)
    };
    H5M.fr7k.B5G({element: p5u.po0x, event: ["listchange", "itemchange"]})
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, eY7R = NEJ.R, H5M = c5h("nej.ut"), k5p = c5h("nej.u"), h5m = c5h("nej.v"),
        v5A = c5h("nej.j"), p5u = c5h("nm.d"), n5s = c5h("nm.l"), l5q = c5h("nm.x"), J5O = "playlist-tracks_",
        l5q = c5h("nm.x"), b5g;
    p5u.eQ7J({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e5j) {
                e5j.data.c = JSON.stringify([{id: e5j.data.id}])
            }, format: function (Q5V, e5j) {
                var bf5k = l5q.Br4v(Q5V.songs[0]);
                bf5k.privilege = Q5V.privileges[0];
                return bf5k
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e5j) {
                e5j.data.n = 1e3
            }, format: function (Q5V, e5j) {
                var gD7w = [];
                this.rp1x.bfs2x(Q5V.playlist);
                k5p.be5j(Q5V.playlist.tracks, function (bK6E, s5x) {
                    var bvq5v = l5q.Br4v(bK6E);
                    bvq5v.privilege = Q5V.privileges[s5x];
                    gD7w.push(bvq5v)
                }, this);
                return gD7w
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q5V, e5j) {
                var gD7w = [];
                k5p.be5j(Q5V.songs, function (bf5k) {
                    gD7w.push(l5q.Br4v(bf5k))
                });
                return gD7w
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e5j) {
                var bv5A = {}, j5o = e5j.data, cpV5a = this.gS8K(e5j.key) || [];
                By4C = [];
                k5p.be5j(cpV5a, function (bK6E) {
                    var C5H = k5p.kf9W(bK6E) ? bK6E.id : bK6E;
                    bv5A[C5H] = true
                });
                e5j.ext = [];
                k5p.be5j(j5o.tracks, function (bK6E) {
                    var C5H = k5p.kf9W(bK6E) ? bK6E.id : bK6E;
                    if (!bv5A[C5H]) {
                        By4C.push(C5H);
                        bv5A[C5H] = true;
                        e5j.ext.push(bK6E)
                    }
                });
                j5o.trackIds = JSON.stringify(By4C);
                j5o.op = "add";
                if (!By4C.length) {
                    e5j.value = {code: 502}
                }
            }, format: function (Q5V, e5j) {
                n5s.Z5e.M5R({tip: "已添加至歌单"});
                var iH9y = this.rp1x.ei7b(e5j.data.pid);
                if (!!Q5V.coverImgUrl) iH9y.coverImgUrl = Q5V.coverImgUrl;
                k5p.mn0x(e5j.ext, function (bK6E) {
                    this.xC3x(e5j, k5p.kf9W(bK6E) ? bK6E : null);
                    if (!!iH9y) iH9y.trackCount++
                }, this);
                h5m.z5E(p5u.hk8c, "itemchange", {data: iH9y || {}, cmd: "add"});
                this.z5E("onaddsuccess");
                return null
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.ur2x, "listchange", {key: e5j.key, action: "refresh"});
                var oC0x = e5j.data.pid, cp6j = this.jI9z(e5j.key)
            }, onmessage: function () {
                var ly9p = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (ci6c) {
                    setTimeout(function () {
                        n5s.Z5e.M5R({tip: ly9p[ci6c] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e5j) {
                var j5o = e5j.data;
                e5j.ext = j5o.trackIds;
                j5o.trackIds = JSON.stringify(j5o.trackIds);
                j5o.op = "del"
            }, format: function (Q5V, e5j) {
                var iH9y = this.rp1x.ei7b(e5j.data.pid);
                k5p.be5j(e5j.ext, function (C5H) {
                    this.bjf3x({id: C5H, key: "track_playlist-" + e5j.data.pid}, !0);
                    if (!!iH9y) iH9y.trackCount = Math.max(0, iH9y.trackCount - 1)
                }, this);
                h5m.z5E(p5u.hk8c, "itemchange", {data: iH9y || {}, cmd: "del"});
                return null
            }, finaly: function (d5i, e5j) {
                h5m.z5E(p5u.ur2x, "listchange", {key: e5j.key, action: "refresh"})
            }, onmessage: function (ci6c) {
                l5q.bfr2x({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q5V, e5j) {
                return this.bvJ5O.bfs2x(Q5V.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q5V, e5j) {
                var i5n = [];
                if (e5j.data.type == -1) {
                    if (Q5V.weekData && Q5V.weekData.length) {
                        e5j.data.type = 1
                    } else {
                        e5j.data.type = 0
                    }
                }
                if (e5j.data.type == 1) {
                    i5n = this.bvK5P(Q5V.weekData)
                } else {
                    i5n = this.bvK5P(Q5V.allData)
                }
                return i5n
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q5V) {
                var mG0x = [];
                k5p.be5j(Q5V.recommend, function (bf5k, s5x) {
                    mG0x.push({
                        action: "recommendimpress",
                        json: {alg: bf5k.alg, scene: "user-song", position: s5x, id: bf5k.id}
                    })
                });
                this.kB9s.TV9M(mG0x);
                return Q5V.recommend
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e5j) {
                e5j.data.lv = 0;
                e5j.data.tv = 0
            }, format: function (m5r, e5j) {
                return m5r
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    p5u.ur2x = NEJ.C();
    b5g = p5u.ur2x.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        this.ct6n();
        this.rp1x = p5u.hk8c.B5G();
        this.bvJ5O = p5u.po0x.B5G();
        this.kB9s = p5u.hK8C.B5G()
    };
    b5g.bvK5P = function (i5n) {
        var m5r = [], ge7X = 0;
        k5p.be5j(i5n, function (r5w, s5x) {
            var bf5k = l5q.Br4v(r5w.song);
            if (s5x == 0) {
                ge7X = r5w.score
            }
            bf5k.max = ge7X;
            bf5k.playCount = r5w.playCount;
            bf5k.score = r5w.score;
            m5r.push(bf5k)
        });
        return m5r
    };
    H5M.fr7k.B5G({element: p5u.ur2x, event: ["listchange"]})
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f)return f;
            if (0 != f.length % 2)throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b)return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b)return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)for (var l = a[15]; l < h.length; l++)c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++)l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)throw Error(b[131]);
                        if (h.length < f)throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h)return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)if (h.charAt(d) == b[27])if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15])return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290])return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])return c;
                    if (c > a[282])return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width)return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a)return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]])return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a])return b[0];
                            a = y[b[4]][a];
                            if (!a)return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a)return c;
                        if (I && a.map === I)return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length)for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++); else for (c in b)if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e)try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;)k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43])throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)throw Error(b[87]);
                    if (a.length == c)return a;
                    for (var e = [], f = a.length; f < c; f++)e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15])return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))return !1;
                    try {
                        if (r(window[a.f]))return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c))return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q))for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a))return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h)return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262], k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t)throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({ec: b[43], em: ga.message}), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b)return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g))return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c)return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++)f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bvR5W;
    var so1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cpU5Z = 0;
    var bvV5a = 0;
    var bvW5b = 1;
    var bvX5c = 0;
    var bfl2x = "";
    var bwa5f = "";
    var bwb5g = "";
    var Ur9i = "";
    var Us9j = "";
    var bfh2x = "";
    var bwp5u = 0;
    var bwq5v = "";
    var Hw6q = "";
    var BL4P = 0;
    var bfd2x = ntes_get_domain();
    var bfb2x = null;
    var ctx5C = "//analytics.163.com";
    var cpQ5V = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfd2x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfd2x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfd2x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "", n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var cpP5U = 0;
    var MV7O = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * MV7O))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << MV7O) - 1;
        for (var b = 0; b < d.length * MV7O; b += MV7O) {
            c[b >> 5] |= (d.charCodeAt(b / MV7O) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cpP5U ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        Ur9i = "-";
        bfh2x = "-";
        Us9j = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            Ur9i = b.width + "x" + b.height;
            bfh2x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Ur9i = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Us9j = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Us9j = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bwp5u = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function ctz5E(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cpQ5V;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bvR5W;
        bfl2x = escape(a || document.location);
        bwa5f = escape(m || document.title);
        bwb5g = l === true ? "" : escape(l || document.referrer);
        bwq5v = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfb2x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfb2x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bfl2x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfb2x) {
                so1x = fetch_visitor_hash();
                bvV5a = 1;
                ntes_set_cookie_long("_ntes_nnid", so1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", so1x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            so1x = h.substr(0, o);
            BL4P = h.substr(o + 1, p - o - 1);
            if (BL4P == 0) {
                BL4P = (new Date).getTime();
                f = true
            }
            if (!so1x) {
                so1x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", so1x + "," + BL4P);
                ntes_set_cookie_long("_ntes_nuid", so1x)
            }
            if (BL4P != 0 && b - BL4P > 365 * 86400 * 1e3) {
                BL4P = 0;
                ntes_set_cookie_long("_ntes_nnid", so1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", so1x)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        Hw6q = c("P_INFO", "P_OINFO");
        Hw6q = Hw6q ? Hw6q.substr(0, Hw6q.indexOf("|")) : "";
        bvX5c = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", so1x, "&_nvtm=", cpU5Z, "&_nvsf=", bvW5b, "&_nvfi=", bvV5a, "&_nlag=", Us9j, "&_nlmf=", bwp5u, "&_nres=", Ur9i, "&_nscd=", bfh2x, "&_nstm=", bvX5c, "&_nurl=", bfl2x, "&_ntit=", bwa5f, "&_nref=", bwb5g, "&_nfla=", bwq5v, "&_nssn=", Hw6q, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bvW5b = 0;
        neteaseTracker.callback = null
    }

    bvR5W = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
        var d = {}, l = d.lib = {}, s = function () {
        }, t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init: function () {
            }, mixIn: function (a) {
                for (var c in a)a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            }, clone: function () {
                return this.init.prototype.extend(this)
            }
        }, r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            }, toString: function (a) {
                return (a || v).stringify(this)
            }, concat: function (a) {
                var c = this.words, e = a.words, j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)for (var k = 0; k < a; k++)c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length)for (k = 0; k < a; k += 4)c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            }, clamp: function () {
                var a = this.words, c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            }, clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            }, random: function (a) {
                for (var c = [], e = 0; e < a; e += 4)c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }), w = d.enc = {}, v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2)e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        }, b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++)e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            }, parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++)e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        }, x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        }, q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j5o = new r.init;
                this.bxl6f = 0
            }, Uu9l: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j5o.concat(a);
                this.bxl6f += a.sigBytes
            }, yL4P: function (a) {
                var c = this.j5o, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bxe6Y, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k)this.bxu6o(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            }, clone: function () {
                var a = t.clone.call(this);
                a.j5o = this.j5o.clone();
                return a
            }, bxe6Y: 0
        });
        l.Hasher = q.extend({
            cfg: t.extend(), init: function (a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            }, reset: function () {
                q.reset.call(this);
                this.beT2x()
            }, update: function (a) {
                this.Uu9l(a);
                this.yL4P();
                return this
            }, finalize: function (a) {
                a && this.Uu9l(a);
                return this.Uw9n()
            }, blockSize: 16, beW2x: function (a) {
                return function (b, e) {
                    return (new a.init(e)).finalize(b)
                }
            }, cpM5R: function (a) {
                return function (b, e) {
                    return (new n.HMAC.init(a, e)).finalize(b)
                }
            }
        });
        var n = d.algo = {};
        return d
    }(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bv5A;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))for (; d.length % 4;)d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bv5A, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bv5A: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        beT2x: function () {
            this.dE7x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bxu6o: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dE7x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, Uw9n: function () {
            var b = this.j5o, n = b.words, a = 8 * this.bxl6f, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.yL4P();
            b = this.dE7x;
            n = b.words;
            for (a = 0; 4 > a; a++)c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dE7x = this.dE7x.clone();
            return b
        }
    });
    t.MD5 = v.beW2x(r);
    t.HmacMD5 = v.cpM5R(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.beN2x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cpL5Q, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bxN6H = e;
                this.J5O = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.beT2x()
            }, process: function (e) {
                this.Uu9l(e);
                return this.yL4P()
            }, finalize: function (e) {
                e && this.Uu9l(e);
                return this.Uw9n()
            }, keySize: 4, ivSize: 4, beN2x: 1, cpL5Q: 2, beW2x: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Uw9n: function () {
            return this.yL4P(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bxT6N;
        c ? this.bxT6N = u : c = this.bxW6Q;
        for (var d = 0; d < b; d++)e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bxX6R = e;
            this.bxT6N = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bxX6R, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bxW6Q = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bxX6R, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bxW6Q = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bxN6H == this.beN2x)var c = a.createEncryptor; else c = a.createDecryptor, this.bxe6Y = 1;
            this.eI7B = c.call(a, this, b && b.words)
        }, bxu6o: function (a, b) {
            this.eI7B.processBlock(a, b)
        }, Uw9n: function () {
            var a = this.cfg.padding;
            if (this.bxN6H == this.beN2x) {
                a.pad(this.j5o, this.blockSize);
                var b = this.yL4P(!0)
            } else b = this.yL4P(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.YJ0x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, YJ0x: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.YJ0x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        beT2x: function () {
            for (var a = this.J5O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cpJ5O = d + 6) + 1), e = this.cpB5G = [], j = 0; j < a; j++)if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cpA5F = [];
            for (d = 0; d < a; d++)j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bya6U(a, b, this.cpB5G, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bya6U(a, c, this.cpA5F, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bya6U: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cpJ5O, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.beW2x(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;)c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h)j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f)d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}
function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;)d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;)b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i)c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d)b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e)b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f)e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f)d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f)d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i)h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h)c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h)d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h)d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)if (a.digits[c] != b.digits[c])return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;)b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b)break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f))break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;)h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e))break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c5h = NEJ.P, dP7I = c5h("nej.g"), v5A = c5h("nej.j"), k5p = c5h("nej.u"), MR7K = c5h("nm.x.ek");
    MR7K.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    MR7K.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c5h = NEJ.P, dP7I = c5h("nej.g"), v5A = c5h("nej.j"), k5p = c5h("nej.u"), MR7K = c5h("nm.x.ek"),
        l5q = c5h("nm.x");
    if (v5A.br5w.redefine)return;
    window.GEnc = true;
    var beB2x = function (cpz5E) {
        var m5r = [];
        k5p.be5j(cpz5E, function (cpw5B) {
            m5r.push(MR7K.emj[cpw5B])
        });
        return m5r.join("")
    };
    var cpv5A = v5A.br5w;
    v5A.br5w = function (V5a, e5j) {
        var j5o = {}, e5j = NEJ.X({}, e5j), lr9i = V5a.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V5a) && !(e5j.headers && e5j.headers[dP7I.wI3x] == dP7I.CB5G) && !e5j.noEnc) {
            if (lr9i != -1) {
                j5o = k5p.hq8i(V5a.substring(lr9i + 1));
                V5a = V5a.substring(0, lr9i)
            }
            if (e5j.query) {
                j5o = NEJ.X(j5o, k5p.fh7a(e5j.query) ? k5p.hq8i(e5j.query) : e5j.query)
            }
            if (e5j.data) {
                j5o = NEJ.X(j5o, k5p.fh7a(e5j.data) ? k5p.hq8i(e5j.data) : e5j.data)
            }
            j5o["csrf_token"] = v5A.gB7u("__csrf");
            V5a = V5a.replace("api", "weapi");
            e5j.method = "post";
            delete e5j.query;
            var byw6q = window.asrsea(JSON.stringify(j5o), beB2x(["流泪", "强"]), beB2x(MR7K.md), beB2x(["爱心", "女孩", "惊恐", "大笑"]));
            e5j.data = k5p.de6Y({params: byw6q.encText, encSecKey: byw6q.encSecKey})
        }
        cpv5A(V5a, e5j)
    };
    v5A.br5w.redefine = true
})();
(function () {
    window.setTimeout(function () {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), cK6E = c5h("nej.p"), k5p = c5h("nej.u"), h5m = c5h("nej.v"),
        v5A = c5h("nej.j"), dh6b = c5h("nm.u"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), n5s = c5h("nm.l"),
        bey2x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j5o = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, cpu5z = function () {
            if (h5m && h5m.z5E) {
                h5m.dispatchEventalias = h5m.z5E
            }
        };
    cpu5z();
    l5q.bew2x = function (bK6E) {
        if (!bK6E || bK6E.copyrightId === undefined || !!bK6E.program)return false;
        if (window.GAbroad) {
            bK6E.fee = 0;
            return true
        }
        if (bK6E.status < 0)return true;
        var MP7I;
        if (typeof GCopyrights !== "undefined") MP7I = GCopyrights;
        try {
            if (!MP7I && !!top.GCopyrights) MP7I = top.GCopyrights
        } catch (e) {
        }
        if (MP7I) {
            var s5x = k5p.cV6P(MP7I, bK6E.copyrightId);
            if (s5x >= 0)return true
        }
        return false
    };
    l5q.bet2x = function () {
        var yK4O = /^\/m\/(song|album|artist|playlist|dj|search)\?/, uQ2x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }, cpr5w = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var cpp5u = function (J5O, j5o, MK7D) {
            switch (J5O) {
                case"event":
                    j5o = j5o.split("|");
                    return "/event?id=" + j5o[0] + "&uid=" + j5o[1];
                case"searchsong":
                case"searchlyric":
                    var t5y = J5O == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j5o) + "&type=" + t5y;
                case"toplist":
                    return "/discover/toplist?id=" + j5o + "&_hash=songlist-" + MK7D;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + MK7D;
                    ;
                case"record":
                    j5o = j5o.split("|");
                    return "/user/songs/rank?id=" + j5o[0] + "&cat=" + j5o[1];
                    break;
                default:
                    return "/" + J5O + "?id=" + j5o + "&_hash=songlist-" + MK7D
            }
        };
        return function (dI7B, MK7D) {
            if (!dI7B)return null;
            var HQ6K = dI7B.fid || (dI7B.type != 18 ? dI7B.type : null), bdR2x = dI7B.fdata || dI7B.rid,
                bzj6d = dI7B.page || dI7B.fhref;
            var J5O = uQ2x[HQ6K];
            if (!J5O) {
                var wN3x = (bzj6d || "").match(yK4O);
                if (wN3x) J5O = wN3x[1]
            }
            if (!J5O)return null;
            return {title: cpr5w[J5O], link: !uQ2x[HQ6K] ? bzj6d : cpp5u(J5O, bdR2x, MK7D), fid: HQ6K, fdata: bdR2x}
        }
    }();
    l5q.UF9w = function (kr9i) {
        var do6i = kr9i;
        if (typeof GUser !== "undefined" && GUser.userId > 0) do6i = GUser;
        return do6i
    };
    l5q.hb8T = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l5q.Hp6j = function () {
        var yK4O = /#(.*?)$/;
        return function (gg7Z) {
            var iG9x = gg7Z === false ? location : top.location;
            return yK4O.test(iG9x.href) ? RegExp.$1 : ""
        }
    }();
    l5q.yH4L = function () {
        var bzE6y = l5q.bdp2x().supported, yG4K = a4e.cU6O("audio"),
            bzQ6K = yG4K.canPlayType && yG4K.canPlayType("audio/mpeg");
        if (cK6E.Ky7r.mac) {
            if (bzQ6K)return 2;
            if (bzE6y)return 1;
            return 0
        } else {
            if (bzE6y)return 1;
            if (bzQ6K)return 2;
            return 0
        }
    };
    l5q.bdp2x = function () {
        var gc7V, bdm2x = !1, bdk2x = "";
        if (cK6E.cS6M.browser == "ie") {
            try {
                gc7V = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gc7V = null
            }
            if (gc7V) {
                bdm2x = !0;
                bdk2x = gc7V.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gc7V = navigator.plugins["Shockwave Flash"];
                if (gc7V) {
                    bdm2x = !0;
                    bdk2x = gc7V.description
                }
            }
        }
        return {supported: bdm2x, version: bdk2x}
    };
    l5q.pT1x = function () {
        return "网易云音乐"
    };
    l5q.cpo5t = function () {
        return j5o
    };
    l5q.bAe6Y = function (cY6S) {
        var C5H = j5o[cY6S];
        return C5H == null ? "" : bey2x.replace("{ID}", C5H)
    };
    l5q.sD1x = function (bi5n, dB7u, Ho6i) {
        if (!bi5n)return "";
        if (!!Ho6i) {
            bi5n = l5q.cph5m(bi5n)
        }
        return l5q.bcX2x(l5q.cpg5l(bi5n, dB7u))
    };
    l5q.bcV2x = function () {
        var Mr7k = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bcO2x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cpf5k = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, coZ5e = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var coY5d = function (dW7P, bcB2x) {
            dW7P = Hl6f(dW7P);
            if (!!bcB2x) {
                dW7P = dW7P.replace(Mr7k.MLINE, "\n\n").replace(Mr7k.LING, "</br>")
            }
            dW7P = l5q.bcX2x(dW7P);
            return dW7P
        };
        var Hl6f = function (bi5n) {
            return k5p.DI5N(cpf5k, bi5n)
        };
        return function (dW7P, e5j, ea7T) {
            e5j = e5j || {};
            ea7T = ea7T || {};
            ea7T.actHash = {};
            var coP4T = !!e5j.parseLink, coN4R = !!e5j.parseAct, coM4Q = e5j.linkTpl || bcO2x.LINK,
                coL4P = e5j.atTpl || bcO2x.AT, coJ4N = e5j.actTpl || bcO2x.ACT, bcB2x = !!e5j.keepSpace,
                bcx2x = e5j.linkKlass || "s-fc7";
            ctE5J = e5j.actBiJson || "";
            if (!dW7P)return "";
            dW7P = dW7P.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var km9d = coZ5e[coP4T + 2 * coN4R], cM6G = Mr7k[km9d], bs5x = null, kO9F = null, gy7r = 0, ctF5K = "",
                ctG5L = "";
            var yE4I = [];
            cM6G.lastIndex = 0;
            while (bs5x = cM6G.exec(dW7P)) {
                var fJ7C = {html: "", before: bs5x.index - 1, after: bs5x.index + bs5x[0].length};
                if (bs5x[1]) {
                    var kO9F = bs5x[2].replace(/[^\x00-\xff]/g, "**");
                    if (kO9F.length < 4 || kO9F.length > 32) {
                    } else {
                        var Mh7a = a4e.ej7c(coL4P);
                        fJ7C.html = a4e.bP6J(Mh7a, {
                            value: Hl6f(bs5x[2]),
                            url: encodeURI("/user/home?nickname=" + bs5x[2]),
                            klass: bcx2x
                        });
                        yE4I.push(fJ7C)
                    }
                } else if (bs5x.length > 8 && bs5x[4]) {
                    var Mh7a = a4e.ej7c(coM4Q);
                    fJ7C.html = a4e.bP6J(Mh7a, {value: Hl6f(bs5x[4]), url: encodeURI(bs5x[4]), klass: bcx2x});
                    yE4I.push(fJ7C)
                } else {
                    var bCp7i = km9d == "ACT_NOLINK" ? 4 : 9;
                    var Mh7a = a4e.ej7c(coJ4N);
                    fJ7C.html = a4e.bP6J(Mh7a, {value: Hl6f(bs5x[bCp7i]), klass: bcx2x});
                    yE4I.push(fJ7C);
                    ea7T.actHash[bs5x[bCp7i].slice(1, -1)] = true
                }
            }
            var coB4F = yE4I.length, kr9i = {before: dW7P.length - 1, after: 0}, bbW2x = "";
            for (var i = 0; i <= coB4F; i++) {
                var iu8m, gs7l;
                iu8m = (yE4I[i - 1] || kr9i).after;
                gs7l = (yE4I[i] || kr9i).before;
                if (gs7l >= iu8m && iu8m >= 0 && gs7l <= dW7P.length - 1) {
                    bbW2x += coY5d(dW7P.substring(iu8m, gs7l + 1), bcB2x)
                }
                if (yE4I[i]) {
                    bbW2x += yE4I[i].html
                }
            }
            return bbW2x
        }
    }();
    l5q.cph5m = function () {
        var cM6G = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bi5n) {
            return (bi5n || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cM6G, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l5q.cpg5l = function () {
        var cM6G = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eF7y = function (kO9F, dB7u) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kO9F) + '" class="' + (dB7u || "") + '">@' + kO9F + "</a>"
        };
        return function (bi5n, dB7u) {
            return (bi5n || "").replace(cM6G, function ($0, $1) {
                return eF7y($1, dB7u)
            })
        }
    }();
    l5q.bcX2x = function () {
        var cM6G = /\[(.*?)\]/g;
        return function (bi5n) {
            return (bi5n || "").replace(cM6G, function ($1, $2) {
                var V5a = l5q.bAe6Y($2);
                return !V5a ? $1 : '<img src="' + V5a + '"/>'
            })
        }
    }();
    l5q.Ag4k = function (E5J, dB7u) {
        a4e.by5D(E5J, dB7u) ? a4e.w5B(E5J, dB7u) : a4e.x5C(E5J, dB7u)
    };
    l5q.Mc7V = function (cI6C, hz8r) {
        cI6C = a4e.y5D(cI6C);
        hz8r = a4e.y5D(hz8r);
        if (!cI6C || !hz8r)return !1;
        for (hz8r = hz8r.parentNode; !!hz8r && hz8r != cI6C; hz8r = hz8r.parentNode);
        return hz8r == cI6C
    };
    l5q.lU0x = function () {
        var bCE7x = function (ft7m) {
            return (ft7m < 10 ? "0" : "") + ft7m
        };
        return function (jS9J) {
            jS9J = parseInt(jS9J) || 0;
            if (!jS9J)return "00:00";
            var Ma7T = Math.floor(jS9J % 60), cox4B = Math.floor(jS9J / 60);
            return bCE7x(cox4B) + ":" + bCE7x(Ma7T)
        }
    }();
    l5q.vC3x = function (fj7c, uL2x) {
        if (!fj7c || fj7c.length == 0)return "";
        uL2x = uL2x || "/";
        var bs5x = [];
        for (var i = fj7c.length - 1; i >= 0; i--) {
            bs5x.unshift(fj7c[i].name)
        }
        return bs5x.join(uL2x)
    };
    l5q.pO1x = function () {
        var LV7O = function (hi8a, dB7u, cI6C) {
            if (!hi8a || !hi8a.name)return "";
            if (!hi8a.id)return '<span class="' + dB7u + '">' + k5p.dM7F(hi8a.name) + "</span>";
            return "<a" + (cI6C ? ' target="_blank"' : "") + ' class="' + dB7u + '" href="/artist?id=' + hi8a.id + '" hidefocus="true">' + k5p.dM7F(hi8a.name) + "</a>"
        };
        return function (fj7c, T5Y, uL2x, cI6C, bDs7l) {
            if (!fj7c || !fj7c.length)return "";
            uL2x = uL2x || "/";
            T5Y = T5Y || "";
            Hb6V = "";
            var eC7v = [];
            for (var i = 0, i5n = [], qY1x = [], fc7V; i < fj7c.length; ++i) {
                eC7v.push(fj7c[i].name);
                if (!fj7c[i] || fj7c[i].id <= 0) {
                    qY1x.push(fj7c[i]);
                    continue
                }
                if (k5p.gd7W(T5Y)) {
                    fc7V = T5Y(fj7c[i])
                } else {
                    fc7V = LV7O(fj7c[i], T5Y, cI6C)
                }
                if (fc7V && bDs7l && fj7c[i].tns && fj7c[i].tns.length > 0) {
                    Hb6V = k5p.dM7F(fj7c[i].tns[0]);
                    fc7V += '<span class="s-fc8" title="' + Hb6V + '"> - (' + Hb6V + ")</span>"
                }
                !!fc7V && i5n.push(fc7V)
            }
            for (var i = 0, fc7V; i < qY1x.length; ++i) {
                if (k5p.gd7W(T5Y)) {
                    fc7V = T5Y(qY1x[i])
                } else {
                    fc7V = LV7O(qY1x[i], T5Y, cI6C)
                }
                if (fc7V && bDs7l && qY1x[i].tns && qY1x[i].tns.length > 0) {
                    Hb6V = k5p.dM7F(qY1x[i].tns[0]);
                    fc7V += '<span class="s-fc8" title="' + Hb6V + '"> - (' + Hb6V + ")</span>"
                }
                !!fc7V && i5n.push(fc7V)
            }
            return '<span title="' + eC7v.join(uL2x) + '">' + i5n.join(uL2x) + "</span>"
        }
    }();
    l5q.vL3x = function (eT7M) {
        return !!eT7M && /^[0-9]{11}$/.test(eT7M)
    };
    l5q.ctH5M = function (eT7M) {
        if (!l5q.vL3x(eT7M))return eT7M;
        return eT7M.substring(0, 3) + "****" + eT7M.substr(7)
    };
    l5q.iO9F = function () {
        var cM6G = /^\s+$/g;
        return function (hA8s) {
            return !hA8s || cM6G.test(hA8s)
        }
    }();
    l5q.Ha6U = function () {
        var bbq1x = /[^\x00-\xfff]/g;
        return function (hA8s) {
            var cot4x = hA8s.match(bbq1x) || [], dJ7C = cot4x.length;
            return hA8s.length + dJ7C
        }
    }();
    l5q.yC3x = function () {
        var bbq1x = /[^\x00-\xfff]/;
        return function (hA8s, gj7c) {
            for (var i = 0, len = hA8s.length; i < len && gj7c > 0; i++) {
                if (bbq1x.test(hA8s.charAt(i))) {
                    gj7c -= 2;
                    if (gj7c < 0) {
                        break
                    }
                } else {
                    gj7c -= 1
                }
            }
            return hA8s.substring(0, i)
        }
    }();
    l5q.AF4J = function (hA8s, gj7c, Qg8Y) {
        gj7c = gj7c || 10;
        Qg8Y = Qg8Y || nej.p.cS6M.engine == "trident" && parseInt(nej.p.cS6M.release) < 5;
        if (Qg8Y && l5q.Ha6U(hA8s) > gj7c) {
            return l5q.yC3x(hA8s, gj7c) + "..."
        } else {
            return hA8s
        }
    };
    l5q.bEl7e = function (f5k) {
        return f5k === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f5k.type || f5k.href || ~f5k.tabIndex)
    };
    l5q.cor4v = function (d5i, cI6C) {
        if (!d5i || !cI6C)return !0;
        var f5k, t5y = d5i.type.toLowerCase();
        if (t5y == "mouseout") {
            f5k = d5i.relatedTarget || d5i.toElement
        } else if (t5y == "mouseover") {
            f5k = d5i.relatedTarget || d5i.fromElement
        }
        return !f5k || f5k !== cI6C && !l5q.Mc7V(cI6C, f5k)
    };
    l5q.rJ1x = function () {
        R5W = {};
        return function (f5k, dH7A) {
            var C5H = a4e.ks9j(f5k), J5O = "hover-" + C5H;
            if (!dH7A || !C5H || !!R5W[J5O])return;
            R5W[J5O] = !0;
            h5m.q5v(C5H, "mouseover", function () {
                var bbi1x = a4e.I5N(f5k, "hshow") || [];
                var bbd1x = a4e.I5N(f5k, "icn-dislike") || [];
                a4e.x5C(C5H, "z-hover");
                a4e.X5c(bbi1x[0], "display", "block");
                a4e.X5c(bbd1x[0], "display", "block")
            });
            h5m.q5v(C5H, "mouseout", function () {
                var bbi1x = a4e.I5N(f5k, "hshow") || [];
                var bbd1x = a4e.I5N(f5k, "icn-dislike") || [];
                a4e.w5B(C5H, "z-hover");
                a4e.X5c(bbi1x[0], "display", "none");
                a4e.X5c(bbd1x[0], "display", "none")
            })
        }
    }();
    l5q.bER7K = function () {
        var bv5A = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (hA8s) {
            return k5p.DI5N(bv5A, hA8s)
        }
    }();
    l5q.th1x = function (bA5F) {
        if (k5p.FZ5e(bA5F)) bA5F = bA5F.getTime();
        var fL7E = new Date, mN0x = fL7E.getTime() - bA5F;
        if (mN0x <= 6e4)return "刚刚";
        var pU1x = fL7E.getHours() * 36e5 + fL7E.getMinutes() * 6e4 + fL7E.getSeconds() * 1e3;
        if (mN0x <= pU1x) {
            if (mN0x < 36e5) {
                var LQ7J = Math.floor(mN0x / 6e4);
                return LQ7J + "分钟前"
            }
            return k5p.iU9L(bA5F, "HH:mm")
        } else {
            if (mN0x < pU1x + 864e5) {
                return "昨天" + k5p.iU9L(bA5F, "HH:mm")
            } else {
                var gi7b = fL7E.getFullYear(), baZ1x = new Date(gi7b, 0, 1);
                var pU1x = fL7E.getTime() - baZ1x.getTime();
                if (mN0x < pU1x) {
                    return k5p.iU9L(bA5F, "M月d日 HH:mm")
                }
                return k5p.iU9L(bA5F, "yyyy年M月d日")
            }
        }
    };
    l5q.coq4u = function (bA5F) {
        if (k5p.FZ5e(bA5F)) bA5F = bA5F.getTime();
        var fL7E = new Date, mN0x = fL7E.getTime() - bA5F;
        var pU1x = fL7E.getHours() * 36e5 + fL7E.getMinutes() * 6e4 + fL7E.getSeconds() * 1e3;
        if (mN0x <= pU1x) {
            return "今天" + k5p.iU9L(bA5F, "HH:mm")
        } else {
            if (mN0x < pU1x + 864e5) {
                return "昨天" + k5p.iU9L(bA5F, "HH:mm")
            } else {
                return k5p.iU9L(bA5F, "yy-MM-dd HH:mm")
            }
        }
    };
    l5q.cop4t = function (bA5F) {
        if (k5p.FZ5e(bA5F)) bA5F = bA5F.getTime();
        var fL7E = new Date, mN0x = fL7E.getTime() - bA5F;
        if (mN0x <= 6e4)return "刚刚";
        var pU1x = fL7E.getHours() * 36e5 + fL7E.getMinutes() * 6e4 + fL7E.getSeconds() * 1e3;
        if (mN0x <= pU1x) {
            if (mN0x < 36e5) {
                var LQ7J = Math.floor(mN0x / 6e4);
                return LQ7J + "分钟前"
            }
            return k5p.iU9L(bA5F, "HH:mm")
        } else {
            if (mN0x < pU1x + 864e5) {
                return "昨天" + k5p.iU9L(bA5F, "HH:mm")
            } else if (mN0x < pU1x + 864e5 * 6) {
                var gi7b = fL7E.getFullYear(), baZ1x = new Date(gi7b, 0, 1);
                var pU1x = fL7E.getTime() - baZ1x.getTime();
                if (mN0x < pU1x) {
                    return k5p.iU9L(bA5F, "M月d日 HH:mm")
                }
                return k5p.iU9L(bA5F, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l5q.LN7G = function () {
        var cM6G = /\{(.*?)\}/gi;
        return function (oZ0x, j5o) {
            return (oZ0x || "").replace(cM6G, function ($1, $2) {
                var A5F = j5o[$2];
                return A5F == null ? $1 : A5F
            })
        }
    }();
    l5q.eQ7J = function () {
        var bg5l = Array.prototype.slice.call(arguments, 0), oZ0x = bg5l.shift();
        if (oZ0x) {
            return oZ0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bg5l.length ? bg5l[$2] : $1
            })
        }
        return ""
    };
    l5q.GZ6T = function (i5n, dB7u, ld9U) {
        return "";
        ld9U = ld9U || " - ";
        if (i5n && i5n.length) {
            return ld9U + (!!dB7u ? '<span class="' + dB7u + '">' + i5n[0] + "</span>" : i5n[0])
        }
        return ""
    };
    l5q.bFX7Q = function () {
        if (window.getSelection) {
            var pY1x = window.getSelection();
            if (pY1x && pY1x.focusNode && pY1x.focusNode.tagName) {
                var yA3x = a4e.cQ6K(pY1x.focusNode);
                for (var i = 0, wk3x; i < yA3x.length; ++i) {
                    wk3x = yA3x[i].tagName;
                    if (!wk3x)continue;
                    wk3x = wk3x.toLowerCase();
                    if (wk3x == "textarea" || wk3x == "input")return !0
                }
            }
        } else if (document.selection) {
            var cF6z = document.selection.createRange();
            if (cF6z) {
                var f5k = cF6z.parentElement();
                if (f5k && f5k.tagName) {
                    var wk3x = f5k.tagName.toLowerCase();
                    if (wk3x == "textarea" || wk3x == "input")return !0
                }
            }
        }
        return !1
    };
    l5q.yz3x = function (fq7j) {
        if (/^[A-Z]\:\\/i.test(fq7j)) {
            fq7j = fq7j.split("\\")
        } else {
            fq7j = fq7j.split("/")
        }
        fq7j = fq7j[fq7j.length - 1];
        return fq7j
    };
    l5q.coo4s = function () {
        var Es5x = [13, 17, 34, 19, 18, 21];
        return function (C5H) {
            var bs5x = (C5H || "").split("_");
            return {type: Es5x[bs5x[2]] || -1, id: bs5x[3] || ""}
        }
    }();
    l5q.bas1x = function (do6i) {
        if (4 == do6i.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (do6i.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (do6i.expertTags && do6i.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l5q.LA7t = function (ft7m) {
        ft7m += "";
        if (ft7m) {
            return ft7m.substr(0, 3) + "****" + ft7m.substr(ft7m.length - 4)
        }
    };
    l5q.ctI5N = function (s5x, cp6j) {
        return (s5x % cp6j + cp6j) % cp6j
    };
    l5q.bGO7H = function () {
        var Es5x = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function (C5H) {
            var bs5x = (C5H || "").split("_"), m5r = {type: Es5x[bs5x[2]] || -1, id: bs5x[3] || ""};
            if (m5r.type == "event") {
                m5r.uid = bs5x[4] || "";
                return "/" + m5r.type + "?id=" + m5r.id + "&uid=" + m5r.uid
            }
            return "/" + m5r.type + "?id=" + m5r.id
        }
    }();
    l5q.bGY7R = function () {
        var Es5x = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function (C5H) {
            var bs5x = (C5H || "").split("_");
            return Es5x[bs5x[2]] || "资源"
        }
    }();
    l5q.coj4n = function (bD5I) {
        var qs = bD5I.length > 0 ? bD5I.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l5q.bHp7i = function (wu3x, Lz7s) {
        var Vf9W = 0, dX7Q = new Array;
        k5p.be5j(wu3x, function (V5a, s5x) {
            var dG7z = a4e.cU6O("img");
            dG7z.src = V5a;
            h5m.q5v(dG7z, "load", function (s5x, d5i) {
                dX7Q[s5x] = 1;
                Vf9W++;
                if (Vf9W == wu3x.length) Lz7s(wu3x, dX7Q)
            }.g5l(this, s5x));
            h5m.q5v(dG7z, "error", function (d5i, s5x) {
                dX7Q[s5x] = 0;
                Vf9W++;
                if (Vf9W == wu3x.length) Lz7s(wu3x, dX7Q)
            }.g5l(this, s5x))
        })
    };
    l5q.Vh9Y = function (i5n, dC7v) {
        var m5r = [];
        k5p.be5j(i5n, function (r5w, s5x, if8X) {
            m5r.push(dC7v(r5w, s5x, if8X))
        });
        return m5r
    };
    l5q.Sw8o = function (i5n, dC7v, if8X) {
        var m5r = [];
        k5p.be5j(i5n, function (r5w, s5x) {
            if (dC7v.call(if8X, r5w, s5x, i5n)) {
                m5r.push(r5w)
            }
        });
        return m5r
    };
    l5q.cog4k = function (bi5n) {
        return k5p.dM7F((bi5n || "").replace(/\s{2,}/g, " ").trim())
    };
    l5q.bqt4x = function (bf5k) {
        if (bf5k.transNames && bf5k.transNames.length) {
            return bf5k.transNames[0]
        } else if (bf5k.alias && bf5k.alias.length) {
            return bf5k.alias[0]
        }
    };
    l5q.bHY8Q = function (Nd7W) {
        if (Nd7W) {
            return Nd7W.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l5q.bpY4c = function (f5k) {
        var f5k = a4e.y5D(f5k), cY6S = f5k && f5k.getElementsByTagName("textarea")[0], J5O = a4e.u5z(f5k, "key"),
            bpU4Y = a4e.u5z(f5k, "simple") == "1", bIl8d = p5u.ur2x.fX7Q();
        if (!(f5k && cY6S && J5O))return;
        if (bpU4Y) {
            bIl8d.rj1x(J5O, l5q.Br4v(JSON.parse(cY6S.value)))
        } else {
            bIl8d.rj1x(J5O, JSON.parse(cY6S.value || cY6S.defaultValue))
        }
        f5k.innerHTML = "";
        return J5O
    };
    l5q.coa4e = function (os0x) {
        if (!os0x.onbeforelistload) {
            os0x.onbeforelistload = function (d5i) {
                d5i.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!os0x.onemptylist) {
            os0x.onemptylist = function (d5i) {
                d5i.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (os0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return os0x
    };
    l5q.Br4v = function (hs8k) {
        if (k5p.ep7i(hs8k)) {
            var ea7T = [];
            k5p.be5j(hs8k, function (bpU4Y) {
                ea7T.push(bIL8D(bpU4Y))
            });
            return ea7T
        } else {
            return bIL8D(hs8k)
        }
        function bIL8D(hs8k) {
            if (!hs8k)return null;
            var ea7T = {
                album: hs8k.al,
                alias: hs8k.alia || hs8k.ala || [],
                artists: hs8k.ar || [],
                commentThreadId: "R_SO_4_" + hs8k.id,
                copyrightId: hs8k.cp || 0,
                duration: hs8k.dt || 0,
                id: hs8k.id,
                mvid: hs8k.mv || 0,
                name: hs8k.name || "",
                cd: hs8k.cd,
                position: hs8k.no || 0,
                ringtone: hs8k.rt,
                rtUrl: hs8k.rtUrl,
                status: hs8k.st || 0,
                pstatus: hs8k.pst || 0,
                fee: hs8k.fee || 0,
                version: hs8k.v || 0,
                eq: hs8k.eq,
                songType: hs8k.t || 0,
                mst: hs8k.mst,
                score: hs8k.pop || 0,
                ftype: hs8k.ftype,
                rtUrls: hs8k.rtUrls,
                transNames: hs8k.tns,
                privilege: hs8k.privilege,
                lyrics: hs8k.lyrics
            };
            return ea7T
        }
    };
    l5q.ctL5Q = function () {
        var f5k = a4e.na0x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f5k);
        h5m.q5v(f5k, "click", function (d5i) {
            h5m.bh5m(d5i);
            a4e.cE6y(f5k)
        })
    };
    l5q.lB9s = function (cv6p) {
        if (cv6p < 1e5) {
            return cv6p
        } else {
            return Math.floor(cv6p / 1e4) + "万"
        }
    };
    l5q.vr2x = function (cv6p, cY6S) {
        return "<i>" + (cv6p ? "(" + cv6p + ")" : cY6S) + "</i>"
    };
    l5q.bJc8U = function (t5y, hp8h) {
        var e5j = {};
        if (!k5p.kf9W(hp8h)) {
            return e5j
        }
        switch (parseInt(t5y)) {
            case 17:
                e5j.title = hp8h.name;
                e5j.author = (hp8h.radio || []).name;
                e5j.picUrl = hp8h.coverUrl;
                e5j.category = hp8h.radio.category;
                break;
            case 19:
                e5j.title = hp8h.name;
                e5j.author = l5q.vC3x(hp8h.artists);
                e5j.authors = l5q.vC3x(hp8h.artists, " / ");
                e5j.picUrl = hp8h.picUrl;
                break;
            case 13:
                e5j.title = hp8h.name;
                e5j.author = (hp8h.creator || []).nickname;
                e5j.picUrl = hp8h.coverImgUrl;
                break;
            case 18:
                e5j.title = hp8h.name;
                e5j.author = l5q.vC3x(hp8h.artists);
                e5j.picUrl = (hp8h.album || []).picUrl;
                break;
            case 20:
                e5j.title = hp8h.name;
                e5j.author = "";
                e5j.picUrl = hp8h.img1v1Url;
                break;
            case 21:
                e5j.title = hp8h.name;
                e5j.author = hp8h.artistName;
                e5j.authors = l5q.vC3x(hp8h.artists, " / ");
                e5j.picUrl = hp8h.newCover || hp8h.cover;
                break;
            case 70:
                e5j.title = hp8h.name;
                e5j.author = (hp8h.dj || []).nickname;
                e5j.picUrl = hp8h.picUrl;
                e5j.category = hp8h.category;
                break;
            default:
                break
        }
        return e5j
    };
    l5q.bJi8a = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l5q.cnU4Y = function (eF7y, ua2x, e5j) {
        var bL6F, bg5l, m5r;
        var jp9g = null;
        var Lm7f = 0;
        if (!e5j) e5j = {};
        var Vl9c = function () {
            Lm7f = e5j.leading === false ? 0 : +(new Date);
            jp9g = null;
            m5r = eF7y.apply(bL6F, bg5l);
            if (!jp9g) bL6F = bg5l = null
        };
        return function () {
            var fL7E = +(new Date);
            if (!Lm7f && e5j.leading === false) Lm7f = fL7E;
            var boR4V = ua2x - (fL7E - Lm7f);
            bL6F = this;
            bg5l = arguments;
            if (boR4V <= 0 || boR4V > ua2x) {
                if (jp9g) {
                    clearTimeout(jp9g);
                    jp9g = null
                }
                Lm7f = fL7E;
                m5r = eF7y.apply(bL6F, bg5l);
                if (!jp9g) bL6F = bg5l = null
            } else if (!jp9g && e5j.trailing !== false) {
                jp9g = setTimeout(Vl9c, boR4V)
            }
            return m5r
        }
    };
    l5q.bJQ8I = function (eF7y, ua2x, qb1x) {
        var jp9g, bg5l, bL6F, Lj7c, m5r;
        var Vl9c = function () {
            var gy7r = new Date - Lj7c;
            if (gy7r < ua2x && gy7r >= 0) {
                jp9g = setTimeout(Vl9c, ua2x - gy7r)
            } else {
                jp9g = null;
                if (!qb1x) {
                    m5r = eF7y.apply(bL6F, bg5l);
                    if (!jp9g) bL6F = bg5l = null
                }
            }
        };
        return function () {
            bL6F = this;
            bg5l = arguments;
            Lj7c = new Date;
            var bol4p = qb1x && !jp9g;
            if (!jp9g) jp9g = setTimeout(Vl9c, ua2x);
            if (bol4p) {
                m5r = eF7y.apply(bL6F, bg5l);
                bL6F = bg5l = null
            }
            return m5r
        }
    };
    l5q.Lg7Z = function (f5k, ir8j) {
        if (f5k) {
            var f5k = f5k.firstElementChild;
            if (f5k) {
                f5k.firstElementChild && (f5k = f5k.firstElementChild);
                f5k.setAttribute("xlink:href", "/style/pc/svg/" + ir8j)
            }
        }
    };
    l5q.bKz8r = function (eC7v) {
        if (!eC7v || !eC7v.length) {
            return
        }
        eC7v = /^#(.+?)#$/.exec(eC7v)[1];
        eC7v = eC7v.replace(/\s/g, " ");
        v5A.br5w("/api/act/detail", {
            type: "json",
            method: "post",
            data: k5p.de6Y({actname: eC7v}),
            onload: function (Q5V) {
                if (!Q5V || Q5V.code != 200 || !Q5V.act) {
                    n5s.Z5e.M5R({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + Q5V.act.actId)
                }
            },
            onerror: function (bQ6K) {
                n5s.Z5e.M5R({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l5q.bof4j = function (Lf7Y, wT3x) {
        if (!Lf7Y || !wT3x)return false;
        if (Lf7Y == wT3x)return true;
        return l5q.bof4j(Lf7Y, wT3x.parentNode)
    };
    a4e.fz7s = function (bB5G, kJ9A) {
        if (!bB5G)return null;
        if (!kJ9A)return bB5G.firstChild;
        return a4e.I5N(bB5G, kJ9A)[0]
    };
    l5q.cnT4X = function (hA8s) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hA8s)
    };
    l5q.ctM5R = function (tQ2x) {
        if (!tQ2x) {
            return "0b"
        }
        var cnR4V = ["Bytes", "KB", "MB", "GB"];
        var bd5i = Math.floor(Math.log(tQ2x) / Math.log(1024));
        return (tQ2x / Math.pow(1024, Math.floor(bd5i))).toFixed(bd5i == 1 ? 0 : 1) + cnR4V[bd5i]
    }
})();
(function () {
    function cnQ4U() {
        var yw3x = function (jo9f) {
            if (jo9f < -128) {
                return yw3x(128 - (-128 - jo9f))
            } else if (jo9f >= -128 && jo9f <= 127) {
                return jo9f
            } else if (jo9f > 127) {
                return yw3x(-129 + jo9f - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cnN4R = function (jo9f, bj5o) {
            return yw3x(jo9f + bj5o)
        };
        var cnL4P = function (Vv9m, bnk4o) {
            if (Vv9m == null) {
                return null
            }
            if (bnk4o == null) {
                return Vv9m
            }
            var oX0x = [];
            var cnH4L = bnk4o.length;
            for (var i = 0, bq5v = Vv9m.length; i < bq5v; i++) {
                oX0x[i] = cnN4R(Vv9m[i], bnk4o[i % cnH4L])
            }
            return oX0x
        };
        var cnG4K = function (Vw9n) {
            if (Vw9n == null) {
                return Vw9n
            }
            var oX0x = [];
            var cnF4J = Vw9n.length;
            for (var i = 0, bq5v = cnF4J; i < bq5v; i++) {
                oX0x[i] = yw3x(0 - Vw9n[i])
            }
            return oX0x
        };
        var cnD4H = function (bmV4Z, KT7M) {
            bmV4Z = yw3x(bmV4Z);
            KT7M = yw3x(KT7M);
            return yw3x(bmV4Z ^ KT7M)
        };
        var bMk8c = function (KO7H, bmC4G) {
            if (KO7H == null || bmC4G == null || KO7H.length != bmC4G.length) {
                return KO7H
            }
            var oX0x = [];
            var cnC4G = KO7H.length;
            for (var i = 0, bq5v = cnC4G; i < bq5v; i++) {
                oX0x[i] = cnD4H(KO7H[i], bmC4G[i])
            }
            return oX0x
        };
        var bMA8s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cnB4F = function (cK6E) {
            var GK6E = [];
            GK6E.push(bMA8s[cK6E >>> 4 & 15]);
            GK6E.push(bMA8s[cK6E & 15]);
            return GK6E.join("")
        };
        var cnA4E = function (tQ2x) {
            var bq5v = tQ2x.length;
            if (tQ2x == null || bq5v < 0) {
                return new String("")
            }
            var GK6E = [];
            for (var i = 0; i < bq5v; i++) {
                GK6E.push(cnB4F(tQ2x[i]))
            }
            return GK6E.join("")
        };
        var bMM9D = function (Vz9q) {
            if (Vz9q == null || Vz9q.length == 0) {
                return Vz9q
            }
            var blX3x = new String(Vz9q);
            var oX0x = [];
            var bq5v = blX3x.length / 2;
            var bj5o = 0;
            for (var i = 0; i < bq5v; i++) {
                var nk0x = parseInt(blX3x.charAt(bj5o++), 16) << 4;
                var nX0x = parseInt(blX3x.charAt(bj5o++), 16);
                oX0x[i] = yw3x(nk0x + nX0x)
            }
            return oX0x
        };
        var cnz4D = function (cN6H) {
            if (cN6H == null || cN6H == undefined) {
                return cN6H
            }
            var KG7z = encodeURIComponent(cN6H);
            var tQ2x = [];
            var bNc9T = KG7z.length;
            for (var i = 0; i < bNc9T; i++) {
                if (KG7z.charAt(i) == "%") {
                    if (i + 2 < bNc9T) {
                        tQ2x.push(bMM9D(KG7z.charAt(++i) + "" + KG7z.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tQ2x.push(KG7z.charCodeAt(i))
                }
            }
            return tQ2x
        };
        var cnx4B = function (uW2x) {
            var bd5i = 0;
            bd5i += (uW2x[0] & 255) << 24;
            bd5i += (uW2x[1] & 255) << 16;
            bd5i += (uW2x[2] & 255) << 8;
            bd5i += uW2x[3] & 255;
            return bd5i
        };
        var ctN5S = function (bd5i) {
            var uW2x = [];
            uW2x[0] = bd5i >>> 24 & 255;
            uW2x[1] = bd5i >>> 16 & 255;
            uW2x[2] = bd5i >>> 8 & 255;
            uW2x[3] = bd5i & 255;
            return uW2x
        };
        var cnt3x = function (dt7m, blE3x, bq5v) {
            var ea7T = [];
            if (dt7m == null || dt7m.length == 0) {
                return ea7T
            }
            if (dt7m.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                ea7T[i] = dt7m[blE3x + i]
            }
            return ea7T
        };
        var blD3x = function (dt7m, blE3x, qj1x, cns3x, bq5v) {
            if (dt7m == null || dt7m.length == 0) {
                return qj1x
            }
            if (qj1x == null) {
                throw new Error("1004")
            }
            if (dt7m.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                qj1x[cns3x + i] = dt7m[blE3x + i]
            }
            return qj1x
        };
        var cnr3x = function (bq5v) {
            var bs5x = [];
            for (var i = 0; i < bq5v; i++) {
                bs5x[i] = 0
            }
            return bs5x
        };
        var cnq3x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var GF6z = 64;
        var VF9w = 64;
        var brx4B = 4;
        var cnp3x = function (pH0x) {
            var brK5P = [];
            if (pH0x == null || pH0x == undefined || pH0x.length == 0) {
                return cnr3x(VF9w)
            }
            if (pH0x.length >= VF9w) {
                return cnt3x(pH0x, 0, VF9w)
            } else {
                for (var i = 0; i < VF9w; i++) {
                    brK5P[i] = pH0x[i % pH0x.length]
                }
            }
            return brK5P
        };
        var cnm3x = function (VG9x) {
            if (VG9x == null || VG9x.length % GF6z != 0) {
                throw new Error("1005")
            }
            var bkH3x = [];
            var bj5o = 0;
            var cnl3x = VG9x.length / GF6z;
            for (var i = 0; i < cnl3x; i++) {
                bkH3x[i] = [];
                for (var j = 0; j < GF6z; j++) {
                    bkH3x[i][j] = VG9x[bj5o++]
                }
            }
            return bkH3x
        };
        var cnk3x = function (bse5j) {
            var nk0x = bse5j >>> 4 & 15;
            var nX0x = bse5j & 15;
            var bj5o = nk0x * 16 + nX0x;
            return cnq3x[bj5o]
        };
        var bsl5q = function (bkz3x) {
            if (bkz3x == null) {
                return null
            }
            var bst5y = [];
            for (var i = 0, bq5v = bkz3x.length; i < bq5v; i++) {
                bst5y[i] = cnk3x(bkz3x[i])
            }
            return bst5y
        };
        var cnj3x = function (GD6x, pH0x) {
            if (GD6x == null) {
                return null
            }
            if (GD6x.length == 0) {
                return []
            }
            if (GD6x.length % GF6z != 0) {
                throw new Error("1005")
            }
            pH0x = cnp3x(pH0x);
            var bkv3x = pH0x;
            var bks3x = cnm3x(GD6x);
            var Kv7o = [];
            var cnh3x = bks3x.length;
            for (var i = 0; i < cnh3x; i++) {
                var bka3x = bsl5q(bks3x[i]);
                bka3x = bsl5q(bka3x);
                var bjO3x = bMk8c(bka3x, bkv3x);
                var cng3x = cnL4P(bjO3x, cnG4K(bkv3x));
                bjO3x = bMk8c(cng3x, pH0x);
                blD3x(bjO3x, 0, Kv7o, i * GF6z, GF6z);
                bkv3x = bks3x[i]
            }
            var btr5w = [];
            blD3x(Kv7o, Kv7o.length - brx4B, btr5w, 0, brx4B);
            var bq5v = cnx4B(btr5w);
            if (bq5v > Kv7o.length) {
                throw new Error("1006")
            }
            var oX0x = [];
            blD3x(Kv7o, 0, oX0x, 0, bq5v);
            return oX0x
        };
        var cnf3x = function (VJ9A, J5O) {
            if (VJ9A == null) {
                return null
            }
            var btu5z = new String(VJ9A);
            if (btu5z.length == 0) {
                return []
            }
            var GD6x = bMM9D(btu5z);
            if (J5O == null || J5O == undefined) {
                throw new Error("1007")
            }
            var pH0x = cnz4D(J5O);
            return cnj3x(GD6x, pH0x)
        };
        this.cnd3x = function (VJ9A, J5O) {
            var cnc3x = cnf3x(VJ9A, J5O);
            var bjA3x = new String(cnA4E(cnc3x));
            var Ru8m = [];
            var cna3x = bjA3x.length / 2;
            var bj5o = 0;
            for (var i = 0; i < cna3x; i++) {
                Ru8m.push("%");
                Ru8m.push(bjA3x.charAt(bj5o++));
                Ru8m.push(bjA3x.charAt(bj5o++))
            }
            return Ru8m.join("")
        }
    }

    window.settmusic = (new cnQ4U).cnd3x
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, H5M = c5h("nej.ut"), k5p = c5h("nej.u"), h5m = c5h("nej.v"), v5A = c5h("nej.j"),
        p5u = c5h("nm.d"), l5q = c5h("nm.x"), J5O = "Search-tracks_", b5g;
    p5u.eQ7J({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q5V) {
                return Q5V
            }, onerror: function (Q5V, e5j) {
                if (Q5V.code == 407) {
                    e5j.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e5j, bc5h) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cmZ3x(parseInt(e5j.data.type)) || "suggest",
                    keyword: e5j.data.s,
                    offset: e5j.offset
                })
            }, format: function (Q5V, e5j) {
                if (Q5V.abroad) {
                    try {
                        Q5V.result = JSON.parse(decodeURIComponent(settmusic(Q5V.result, p5u.sk)))
                    } catch (e) {
                    }
                }
                Q5V.result = Q5V.result || {};
                var i5n, cp6j, jO9F = [], sn1x = e5j.data.s || "", fW7P = e5j.data.limit,
                    t5y = parseInt(e5j.data.type) || 1, m5r = Q5V.result;
                switch (t5y) {
                    case 1:
                        i5n = this.bum5r(m5r.songs, e5j.data.hlpretag, e5j.data.hlposttag);
                        cp6j = m5r.songCount;
                        break;
                    case 10:
                        i5n = m5r.albums;
                        cp6j = m5r.albumCount;
                        break;
                    case 100:
                        i5n = m5r.artists;
                        cp6j = m5r.artistCount;
                        break;
                    case 1e3:
                        i5n = m5r.playlists;
                        cp6j = m5r.playlistCount;
                        break;
                    case 1002:
                        i5n = m5r.userprofiles;
                        cp6j = m5r.userprofileCount;
                        break;
                    case 1004:
                        i5n = m5r.mvs;
                        cp6j = m5r.mvCount;
                        break;
                    case 1006:
                        i5n = this.bum5r(m5r.songs, e5j.data.hlpretag, e5j.data.hlposttag);
                        cp6j = m5r.songCount;
                        break;
                    case 1009:
                        var pm0x = m5r.djRadios;
                        if (!!pm0x) {
                            k5p.be5j(pm0x, function (A5F, s5x, cmY3x) {
                                A5F.xid = A5F.id;
                                A5F.id = A5F.id + "_rad"
                            });
                            if (pm0x.length) {
                                this.rj1x("radio_search-" + e5j.data.s, pm0x)
                            }
                        }
                        cp6j = Math.min(m5r.djprogramCount, 500);
                        i5n = m5r.djprograms || [];
                        if (e5j.data.isPub) {
                            k5p.mn0x(pm0x, function (A5F, s5x, cmY3x) {
                                A5F.stype = 1;
                                i5n.unshift(A5F)
                            });
                            cp6j = Math.min(i5n.length, 500)
                        }
                        break
                }
                this.z5E("onsearchload", Q5V);
                if (i5n && i5n.length) {
                    for (var i = 0; i < fW7P; i++) {
                        if (i < i5n.length) {
                            jO9F.push(i5n[i])
                        } else {
                            jO9F.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cp6j || 0, sn1x.length < 3 ? 500 : 5e3), list: jO9F}
            }, onerror: function (Q5V, e5j) {
                e5j.onload(e5j, []);
                if (k5p.gd7W(e5j.onerror)) {
                    e5j.onerror(Q5V)
                }
            }
        }
    });
    p5u.Du5z = NEJ.C();
    b5g = p5u.Du5z.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.cmX3x = function (J5O, e5j) {
        if (!J5O)return;
        if (!!this.buC5H) v5A.js9j(this.buC5H);
        this.buC5H = this.cl6f("search-suggest", NEJ.X({data: {s: J5O, limit: 8}}, e5j))
    };
    b5g.cmW3x = function (J5O, e5j) {
        if (!J5O)return;
        this.cl6f("search-multimatch", NEJ.X({data: {s: J5O}}, e5j))
    };
    b5g.bum5r = function () {
        var cmV3x = function (ha8S, buK5P, buN5S) {
            var cmT3x = ha8S.match(new RegExp(buK5P + "(.+?)" + buN5S, "gi")), cv6p = 0;
            k5p.be5j(cmT3x, function (r5w) {
                cv6p += r5w.replace(new RegExp(buK5P, "g"), "").replace(new RegExp(buN5S, "g"), "").length
            });
            return cv6p
        };
        return function (iq8i, cmP3x, cmN3x) {
            var bvn5s = [];
            k5p.be5j(iq8i, function (bf5k, bd5i) {
                bf5k = l5q.Br4v(bf5k);
                var VR9I = bf5k.lyrics || [], dJ7C = VR9I.length, iZ9Q = 0, cp6j = 4, VS9J = {l: 0, v: 0}, bih3x;
                if (dJ7C > 4) {
                    k5p.be5j(VR9I, function (ha8S, s5x) {
                        var bvx5C = cmV3x(ha8S, cmP3x, cmN3x);
                        if (bvx5C > VS9J.v) {
                            VS9J.v = bvx5C;
                            VS9J.l = s5x
                        }
                    });
                    iZ9Q = VS9J.l;
                    iZ9Q = Math.max(iZ9Q, 0);
                    bih3x = dJ7C - iZ9Q - 4;
                    if (bih3x < 0) iZ9Q += bih3x;
                    bf5k.lrcAbstractEnd = iZ9Q + cp6j - 1
                } else {
                    bf5k.lrcAbstractEnd = dJ7C - 1
                }
                bf5k.lrcAbstractStart = iZ9Q;
                bf5k.indexId = (VR9I && VR9I.length ? "L" : "NL") + bf5k.id;
                bvn5s.push(bf5k)
            });
            return bvn5s
        }
    }();
    b5g.cmZ3x = function (t5y) {
        switch (t5y) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        v5A = c5h("nej.j"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), F5K = c5h("nm.m"), n5s = c5h("nm.l"),
        cX6R = c5h("nm.i"), L5Q = c5h("nm.m.sch"), b5g, K5P;
    var bhX3x = {songs: 1, artists: 100, albums: 10, playlists: 1e3};
    L5Q.Ka6U = NEJ.C();
    b5g = L5Q.Ka6U.O5T(H5M.cz6t);
    b5g.cm6g = function (f5k) {
        this.ct6n();
        this.bR6L(f5k);
        this.P5U = p5u.Du5z.fX7Q()
    };
    b5g.bR6L = function (f5k) {
        this.o5t = f5k;
        var i5n = a4e.I5N(f5k, "j-flag");
        this.eu7n = i5n[0];
        this.bhD3x = i5n[1];
        this.cf6Z = i5n[2];
        this.mi0x = i5n[3];
        h5m.q5v(this.eu7n, "input", this.fw7p.g5l(this));
        h5m.q5v(this.eu7n, "keyup", this.fw7p.g5l(this));
        h5m.q5v(this.eu7n, "focus", this.fU7N.g5l(this));
        h5m.q5v(this.bhD3x, "click", this.fU7N.g5l(this));
        h5m.q5v(this.eu7n, "blur", this.bhB3x.g5l(this));
        h5m.q5v(this.cf6Z, "click", this.VZ9Q.g5l(this));
        h5m.q5v(this.o5t, "keydown", this.bhq3x.g5l(this));
        h5m.q5v(this.o5t, "keypress", this.Wa9R.g5l(this));
        h5m.q5v(this.mi0x, "mouseover", this.JU6O.g5l(this));
        h5m.q5v(this.mi0x, "mouseout", this.JU6O.g5l(this));
        if (this.eu7n.value) {
            this.eu7n.value = ""
        }
        if (this.eu7n.style.opacity != null) {
            this.eu7n.style.opacity = 1
        }
    };
    b5g.fw7p = function (d5i) {
        if (d5i.type == "keyup" && d5i.keyCode == 8 || d5i.keyCode == 46) {
            this.Eg5l()
        } else if (d5i.type == "input" || d5i.type == "propertychange") {
            setTimeout(this.Eg5l.g5l(this), 0)
        }
    };
    b5g.fU7N = function () {
        this.wn3x(this.bhD3x, !1);
        a4e.x5C(this.o5t, "m-srch-fcs");
        this.eu7n.focus();
        this.Eg5l();
        a4e.x5C(a4e.I5N("g-topbar", "j-showoff")[0], "f-hide")
    };
    b5g.bhB3x = function () {
        if (!this.eu7n.value) {
            this.wn3x(this.bhD3x, !0)
        }
        var Ei5n = a4e.I5N(this.mi0x, "slt");
        if (this.Wb9S(this.mi0x) && Ei5n.length > 0 && a4e.u5z(Ei5n[0], "type")) {
            var ir8j = Ei5n[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(ir8j)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eu7n.value})
            }
            this.bhd3x(Ei5n[0].href)
        }
        this.wn3x(this.mi0x, !1);
        a4e.w5B(this.o5t, "m-srch-fcs")
    };
    b5g.wn3x = function (f5k, le9V) {
        a4e.X5c(f5k, "display", !le9V ? "none" : "")
    };
    b5g.Wb9S = function (f5k) {
        return a4e.cZ6T(f5k, "display") != "none"
    };
    b5g.Eg5l = function () {
        var En5s = function (sP1x, cY6S) {
            if (!cY6S)return;
            return cY6S.replace(new RegExp(l5q.bER7K(sP1x), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cmK3x = function (hA8s) {
            var gj7c = this.o5t.clientWidth > 250 ? 41 : 17;
            if (l5q.Ha6U(hA8s) > gj7c) {
                return l5q.yC3x(hA8s, gj7c) + "..."
            } else {
                return hA8s
            }
        };
        var Wl9c = function (m5r) {
            return m5r.songs && m5r.songs.length || m5r.albums && m5r.albums.length || m5r.artists && m5r.artists.length || m5r.playlists && m5r.playlists.length
        };
        var sB1x = function (sP1x, d5i) {
            if (!l5q.bEl7e(this.eu7n) || l5q.iO9F(this.eu7n.value)) {
                this.wn3x(this.mi0x, !1);
                return
            }
            d5i.keyword = k5p.dM7F(sP1x);
            var dq6k = a4e.bP6J("m-search-suggest", d5i, {mark: En5s.g5l(this, sP1x), cutStr: cmK3x.g5l(this)}),
                sQ1x = d5i.result.order;
            this.mi0x.innerHTML = dq6k;
            this.wn3x(this.mi0x, Wl9c(d5i.result) ? !0 : !1);
            if (!!sQ1x && !!sQ1x.length) {
                this.bfL2x = {keyword: sP1x, type: bhX3x[sQ1x[0]]}
            }
        };
        var cmJ3x = function () {
            this.wn3x(this.mi0x, !1);
            return
        };
        return function () {
            var A5F = this.eu7n.value;
            if (l5q.iO9F(A5F)) {
                this.wn3x(this.mi0x, !1);
                return
            }
            this.P5U.cmX3x(A5F, {onload: sB1x.g5l(this, A5F), onForbidden: cmJ3x.g5l(this)})
        }
    }();
    b5g.Wa9R = function (d5i) {
        if (d5i.keyCode != 13)return;
        var Ei5n = a4e.I5N(this.mi0x, "slt");
        if (this.Wb9S(this.mi0x) && Ei5n.length > 0) {
            this.bhd3x(Ei5n[0].href);
            this.wn3x(this.mi0x, !1);
            return
        }
        this.VZ9Q();
        this.wn3x(this.mi0x, !1)
    };
    b5g.bhq3x = function (d5i) {
        if (!this.Wb9S(this.mi0x))return;
        var i5n = a4e.I5N(this.mi0x, "xtag"), dJ7C = i5n.length, s5x = k5p.cV6P(i5n, function (r5w) {
            return a4e.by5D(r5w, "slt")
        });
        switch (d5i.keyCode) {
            case 38:
                if (s5x >= 0) a4e.w5B(i5n[s5x], "slt");
                a4e.x5C(i5n[s5x <= 0 ? dJ7C - 1 : s5x - 1], "slt");
                break;
            case 40:
                if (s5x >= 0) a4e.w5B(i5n[s5x], "slt");
                a4e.x5C(i5n[(s5x + 1) % dJ7C], "slt");
                break
        }
    };
    b5g.JU6O = function (d5i) {
        if (!this.Wb9S(this.mi0x))return;
        var Jx6r, E5J = h5m.U5Z(d5i), i5n = a4e.I5N(this.mi0x, "xtag");
        if (E5J.tagName.toLowerCase() == "a") Jx6r = E5J; else if (E5J.parentNode.tagName.toLowerCase() == "a") Jx6r = E5J.parentNode;
        if (!Jx6r)return;
        k5p.be5j(i5n, function (r5w) {
            a4e.w5B(r5w, "slt");
            a4e.u5z(r5w, "type", "")
        });
        if (d5i.type == "mouseout")return;
        a4e.x5C(Jx6r, "slt");
        a4e.u5z(Jx6r, "type", "mouse")
    };
    b5g.VZ9Q = function () {
        var dE7x = location.hash, s5x = dE7x.indexOf("?"), bD5I = k5p.hq8i(dE7x.substring(s5x + 1));
        bD5I.s = this.eu7n.value;
        if (l5q.iO9F(bD5I.s))return;
        if (!bD5I.type && this.bfL2x && this.bfL2x.keyword == bD5I.s) {
            bD5I.type = this.bfL2x.type
        }
        this.bhd3x("/search/#/?" + k5p.de6Y(bD5I));
        this.eu7n.blur()
    };
    b5g.bhd3x = function (V5a) {
        if (location.dispatch2) {
            location.dispatch2(V5a)
        } else {
            location.href = V5a
        }
    };
    L5Q.Ka6U.cmG3x = function () {
        var i5n = a4e.I5N(document.body, "j-suggest");
        k5p.be5j(i5n, function (r5w) {
            new L5Q.Ka6U(r5w)
        })
    };
    L5Q.Ka6U.cmG3x()
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, H5M = c5h("nej.ut"), k5p = c5h("nej.u"), h5m = c5h("nej.v"), v5A = c5h("nej.j"),
        p5u = c5h("nm.d"), b5g;
    p5u.eQ7J({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q5V) {
                return {total: Q5V.size || 0, list: Q5V.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q5V) {
                return {total: Q5V.size || 0, list: Q5V.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q5V) {
                return Q5V.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q5V, e5j) {
                if (e5j.offset == 0) {
                    var ox0x = Q5V.data[0];
                    this.z5E("onfirstload", ox0x);
                    Q5V.data.splice(0, 1);
                    return Q5V.data
                } else {
                    return Q5V.data
                }
            }
        }
    });
    p5u.AD4H = NEJ.C();
    b5g = p5u.AD4H.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.Jw6q = function () {
        var rK1x = "LOCAL_FLAG";
        return function (t5y, cmF3x) {
            var j5o = this.DA5F(rK1x, {});
            if (j5o[t5y]) {
                return true
            } else {
                if (!cmF3x) {
                    j5o[t5y] = true;
                    this.uY2x(rK1x, j5o)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k5p = c5h("nej.u"), N5S = c5h("nej.ut"), beZ2x;
    if (!!N5S.nJ0x)return;
    N5S.nJ0x = NEJ.C();
    beZ2x = N5S.nJ0x.O5T(N5S.cz6t);
    beZ2x.bk5p = function () {
        var cmE3x = function (d5i) {
            d5i.matched = d5i.source == d5i.target
        };
        return function (e5j) {
            e5j.oncheck = e5j.oncheck || cmE3x;
            this.bl5q(e5j);
            this.bU6O = e5j.list;
            this.ie8W = e5j.dataset || "id";
            this.jC9t = e5j.selected || "js-selected"
        }
    }();
    beZ2x.nB0x = function (A5F) {
        var E5J, d5i = {target: A5F};
        k5p.be5j(this.bU6O, function (f5k) {
            delete d5i.matched;
            d5i.source = a4e.u5z(f5k, this.ie8W);
            this.z5E("oncheck", d5i);
            if (!d5i.matched) {
                a4e.w5B(f5k, this.jC9t)
            } else {
                E5J = f5k;
                a4e.x5C(f5k, this.jC9t)
            }
        }, this);
        return E5J
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), N5S = c5h("nej.ut"), ot0x;
    if (!!N5S.cO6I)return;
    N5S.cO6I = NEJ.C();
    ot0x = N5S.cO6I.O5T(N5S.cz6t);
    ot0x.cm6g = function () {
        this.iv8n = {};
        this.ct6n();
        this.bJ6D()
    };
    ot0x.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.beQ2x = e5j.umi || "";
        this.yj3x = e5j.dispatcher;
        this.Gm6g = e5j.composite || Y5d;
        this.bin3x({
            onshow: this.eS7L.g5l(this),
            onhide: this.jW9N.g5l(this),
            onrefresh: this.eh7a.g5l(this),
            onmessage: this.qw1x.g5l(this),
            onbeforehide: this.cmD3x.g5l(this)
        })
    };
    ot0x.bC5H = function () {
        delete this.beQ2x;
        this.iv8n = {};
        this.bH6B()
    };
    ot0x.tl1x = function (d5i) {
        if (!!d5i) d5i.stopped = !0
    };
    ot0x.bJ6D = bm5r;
    ot0x.eS7L = bm5r;
    ot0x.jW9N = bm5r;
    ot0x.eh7a = bm5r;
    ot0x.qw1x = bm5r;
    ot0x.cmD3x = bm5r;
    ot0x.pl0x = function (nT0x, bF6z, eI7B) {
        this.yj3x.bex2x({to: nT0x, mode: eI7B || 0, data: bF6z, from: this.beQ2x})
    };
    ot0x.ctO5T = function (t5y, j5o) {
        this.yj3x.yg3x(t5y, {from: this.beQ2x, data: j5o})
    };
    ot0x.ctQ5V = function () {
        this.yj3x.lE9v.apply(this.yj3x, arguments)
    };
    ot0x.cmw3x = function () {
        return this.iv8n
    };
    a4e.Wr9i = function () {
        if (!!window.dispatcher) {
            dispatcher.byN6H.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c5h = NEJ.P, bm5r = NEJ.F, Y5d = NEJ.O, a4e = c5h("nej.e"), k5p = c5h("nej.u"), N5S = c5h("nej.ut"), xa3x;
    if (!!N5S.dj6d)return;
    N5S.dj6d = NEJ.C();
    xa3x = N5S.dj6d.O5T(N5S.cO6I);
    xa3x.cmv3x = function (e5j) {
        var bB5G;
        if (!bB5G) {
            var j5o = e5j.input || Y5d;
            bB5G = a4e.y5D(j5o.parent)
        }
        if (!bB5G) {
            var j5o = e5j.data || Y5d;
            bB5G = a4e.y5D(j5o.parent)
        }
        if (!bB5G) {
            bB5G = a4e.y5D(e5j.parent)
        }
        return bB5G
    };
    xa3x.eS7L = function (e5j) {
        var bB5G = this.cmv3x(e5j);
        if (!!bB5G && !!this.o5t) bB5G.appendChild(this.o5t);
        this.gw7p(e5j);
        this.byW6Q("onshow", e5j);
        this.eh7a(e5j)
    };
    xa3x.eh7a = function (e5j) {
        this.fQ7J(e5j);
        this.byW6Q("onrefresh", e5j)
    };
    xa3x.jW9N = function () {
        this.kQ9H();
        this.cmu3x();
        a4e.lV0x(this.o5t)
    };
    xa3x.byY6S = function () {
        var fT7M = /^onshow|onrefresh|delay$/;
        return function (bW6Q) {
            return fT7M.test(bW6Q)
        }
    }();
    xa3x.bzc6W = bm5r;
    xa3x.byW6Q = function () {
        var bze6Y = function (bD5I, e5j, bW6Q, oC0x) {
            if (this.byY6S(oC0x))return;
            if (!!bD5I) bW6Q += (bW6Q.indexOf("?") > 1 ? "&" : "?") + bD5I;
            var cL6F = this.bzc6W(oC0x, e5j) || {};
            cL6F.location = e5j;
            cL6F.parent = this.iv8n[oC0x];
            this.yj3x.ic8U(bW6Q, {input: cL6F})
        };
        return function (t5y, e5j) {
            if (!e5j.nodelay) {
                if (!!this.Gm6g.delay)return;
                var bzh6b = this.Gm6g[t5y] || Y5d;
                if (bzh6b.delay)return
            }
            var bD5I = k5p.de6Y(e5j.param) || "";
            if (t5y == "onrefresh") {
                k5p.ed7W(this.Gm6g, bze6Y.g5l(this, bD5I, e5j))
            }
            k5p.ed7W(bzh6b, bze6Y.g5l(this, bD5I, e5j))
        }
    }();
    xa3x.cmu3x = function () {
        var zk4o = function (bW6Q, oC0x) {
            if (!this.byY6S(oC0x)) this.yj3x.bp5u(bW6Q)
        };
        return function () {
            k5p.ed7W(this.Gm6g, zk4o, this);
            k5p.ed7W(this.Gm6g.onshow, zk4o, this);
            k5p.ed7W(this.Gm6g.onrefresh, zk4o, this)
        }
    }()
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), H5M = c5h("nej.ut"), v5A = c5h("nej.j"),
        k5p = c5h("nej.u"), F5K = c5h("nm.m"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), b5g, K5P;
    F5K.Jp6j = NEJ.C();
    b5g = F5K.Jp6j.O5T(H5M.cz6t);
    b5g.cm6g = function () {
        this.ct6n();
        this.o5t = a4e.y5D("g-topbar");
        var i5n = a4e.I5N(this.o5t, "j-tflag");
        this.bdv2x = i5n[0];
        this.Gh5m = i5n[1];
        this.tC1x = i5n[2];
        this.bzs6m = i5n[3];
        this.bdf2x = i5n[4];
        this.cmr3x = H5M.nJ0x.B5G({list: this.bdv2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bdd2x = H5M.nJ0x.B5G({list: this.bdf2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bT6N([[this.Gh5m, "click", this.cy6s.g5l(this)], [this.Gh5m, "mouseout", this.bzG6A.g5l(this, 0)], [this.Gh5m, "mouseover", this.bzG6A.g5l(this, 1)]]);
        window.scrollTopbar = this.cmq3x.g5l(this);
        window.matchNav = this.bzL6F.g5l(this);
        window.polling = this.qx1x.g5l(this);
        this.Jk6e = p5u.AD4H.B5G();
        this.cmn3x();
        this.Gg5l();
        var bD5I = k5p.hq8i(location.href.split("?")[1]) || {};
        if (bD5I.market) {
            a4e.y5D("topbar-download-link").href = "/download?market=" + bD5I.market
        }
        var bcT2x = a4e.I5N(this.o5t, "j-showoff");
        if (bcT2x && !this.Jk6e.Jw6q("newMvSearch")) {
            a4e.w5B(bcT2x[0], "f-hide");
            window.setTimeout(function () {
                a4e.x5C(bcT2x[0], "f-hide")
            }, 5e3)
        }
    };
    b5g.qx1x = function (d5i) {
        var dE7x = l5q.Hp6j();
        if (!/^\/msg/.test(dE7x)) {
            var Gf5k = 0;
            Gf5k += d5i.comment;
            Gf5k += d5i.forward;
            Gf5k += d5i.msg;
            Gf5k += d5i.notice;
            if (Gf5k > 0) {
                this.tC1x.innerHTML = a4e.bP6J("m-topbar-mesg-count", {count: Gf5k})
            } else {
                this.tC1x.innerHTML = ""
            }
            var ew7p = "/at";
            if (d5i.notice) ew7p = "/notify";
            if (d5i.comment) ew7p = "/comment";
            if (d5i.msg > 0) ew7p = "/private";
            if (d5i.forward > 0) ew7p = "/at";
            this.tC1x.href = "/msg/#" + ew7p
        } else {
            this.tC1x.innerHTML = ""
        }
        var i5n = a4e.I5N(this.bdv2x, "j-t");
        if (!/^\/friend/.test(dE7x)) {
            if (i5n && i5n.length) {
                a4e.X5c(i5n[0], "display", d5i.event > 0 ? "" : "none")
            }
        } else {
            a4e.X5c(i5n[0], "display", "none")
        }
    };
    b5g.cy6s = function (d5i) {
        var f5k = h5m.U5Z(d5i, "d:action");
        if (f5k) {
            switch (a4e.u5z(f5k, "action")) {
                case"login":
                    h5m.cd6X(d5i);
                    var t5y = a4e.u5z(f5k, "type");
                    if (t5y) {
                        if (t5y == "sina" || t5y == "tencent") top.open(f5k.href); else top.login(t5y == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h5m.cd6X(d5i);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.Jk6e.Jw6q("storeNew")) {
                        a4e.x5C(this.bcC2x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.Jk6e.Jw6q("levelNew")) {
                        a4e.x5C(this.bce2x, "f-vhide")
                    }
                    break
            }
        }
    };
    b5g.bzG6A = function (ya3x, d5i) {
        if (this.bAo6i) {
            this.bAo6i.style.display = !ya3x ? "none" : ""
        }
    };
    b5g.cmq3x = function (fN7G) {
        a4e.X5c(this.o5t, "top", -fN7G + "px")
    };
    b5g.bzL6F = function (ew7p, cmi3x) {
        this.cmr3x.nB0x(ew7p);
        if (ew7p == "discover") {
            a4e.x5C(this.bzs6m, "f-hide");
            a4e.w5B(this.bdf2x, "f-hide");
            window.g_topBarHeight = 105;
            this.bdd2x.nB0x(cmi3x)
        } else {
            a4e.w5B(this.bzs6m, "f-hide");
            a4e.x5C(this.bdf2x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b5g.cmn3x = function () {
        var ui2x = a4e.y5D("g_iframe");
        if (!ui2x)return;
        var gg7Z = ui2x.contentWindow.document.getElementById("g_top");
        this.bzL6F(a4e.u5z(gg7Z, "module"), a4e.u5z(gg7Z, "sub"))
    };
    b5g.Gg5l = function () {
        var do6i = GUser || {}, cmf3x = GUserAcc || {};
        if (do6i && do6i.userId) {
            a4e.dS7L(this.Gh5m, "m-topbar-user-login", NEJ.X(do6i, cmf3x));
            a4e.X5c(this.tC1x, "display", "")
        } else {
            this.Gh5m.innerHTML = a4e.ig8Y("m-topbar-user-unlogin");
            this.tC1x.innerHTML = "";
            var i5n = a4e.I5N(this.bdv2x, "j-t");
            a4e.X5c(i5n[0], "display", "none");
            a4e.X5c(this.tC1x, "display", "none")
        }
        var i5n = a4e.I5N(this.Gh5m, "j-uflag");
        this.bAo6i = i5n[0];
        this.ctR5W = i5n[1];
        this.bce2x = i5n[2];
        this.bcC2x = i5n[3];
        if (!this.Jk6e.Jw6q("storeNew", true)) {
            a4e.w5B(this.bcC2x, "f-vhide")
        } else {
            a4e.x5C(this.bcC2x, "f-vhide")
        }
        if (!this.Jk6e.Jw6q("levelNew", true)) {
            a4e.w5B(this.bce2x, "f-vhide")
        } else {
            a4e.x5C(this.bce2x, "f-vhide")
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), H5M = c5h("nej.ut"), p5u = c5h("nm.d"), b5g, K5P;
    p5u.eQ7J({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q5V) {
                h5m.z5E(p5u.rd1x, "message", Q5V)
            }
        }
    });
    p5u.rd1x = NEJ.C();
    b5g = p5u.rd1x.O5T(p5u.hd8V);
    b5g.Ww9n = function () {
        this.cl6f("polling-get", {})
    };
    b5g.uq2x = function () {
        var eR7K;
        return function () {
            if (!!eR7K)return;
            eR7K = window.setInterval(this.Ww9n.g5l(this), 1e5);
            this.Ww9n()
        }
    }();
    H5M.fr7k.B5G({event: "message", element: p5u.rd1x})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
                return Object.prototype.toString.call(obj) === "[object Array]"
            };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
                try {
                    var a = new XMLHttpRequest
                } catch (e) {
                    return false
                }
                return a.withCredentials != undefined
            }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1)return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces)return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };
        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.Wz9q(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.Wz9q(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.QK8C.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bbL2x();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body)return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject)return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket)return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gA7t = WebSocket.cmd3x++;
            WebSocket.bAP6J[self.gA7t] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kW9N = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.Wz9q(function () {
                    WebSocket.oM0x.create(self.gA7t, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oM0x.send(this.gA7t, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oM0x.close(this.gA7t)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.kW9N)) {
                this.kW9N[type] = []
            }
            this.kW9N[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.kW9N))return;
            var events = this.kW9N[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.kW9N[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cmc3x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bBd6X(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bBd6X("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cmb3x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bBd6X = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cmb3x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oM0x = null;
        WebSocket.bAP6J = {};
        WebSocket.QK8C = [];
        WebSocket.cmd3x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.Wz9q(function () {
                WebSocket.oM0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bbL2x = function () {
            if (WebSocket.oM0x)return;
            if (WebSocket.cma3x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cma3x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.clZ3x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.ctS5X = function () {
            setTimeout(function () {
                WebSocket.oM0x = document.getElementById("webSocketFlash");
                WebSocket.oM0x.setCallerUrl(location.href);
                WebSocket.oM0x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.QK8C.length; ++i) {
                    WebSocket.QK8C[i]()
                }
                WebSocket.QK8C = []
            }, 0)
        };
        WebSocket.ctT5Y = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oM0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bAP6J[events[i].webSocketId].cmc3x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.ctU5Z = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dv7o = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Wz9q = function (task) {
            if (WebSocket.oM0x) {
                task()
            } else {
                WebSocket.QK8C.push(task)
            }
        };
        WebSocket.clZ3x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bbL2x()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bbL2x()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };
        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c5h = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };
        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen)return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c5h(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c5h = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator)return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.dF7y) this.dF7y = {};
        this.bBq6k = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dF7y || !this.dF7y.error || isArray(this.dF7y.error) && !this.dF7y.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dF7y)return false;
        var handler = this.dF7y[type];
        if (!handler)return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++)args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dF7y) this.dF7y = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dF7y[type]) {
            this.dF7y[type] = listener
        } else if (isArray(this.dF7y[type])) {
            this.dF7y[type].push(listener)
        } else {
            this.dF7y[type] = [this.dF7y[type], listener]
        }
        if (isArray(this.dF7y[type]) && !this.dF7y[type].warned) {
            var m;
            if (this.bBq6k !== undefined) {
                m = this.bBq6k
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dF7y[type].length > m) {
                this.dF7y[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dF7y[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dF7y || !this.dF7y[type])return this;
        var list = this.dF7y[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dF7y[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dF7y = {};
            return this
        }
        var events = this.dF7y && this.dF7y[type];
        if (!events)return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dF7y[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dF7y) this.dF7y = {};
        if (!this.dF7y[type]) this.dF7y[type] = [];
        if (!isArray(this.dF7y[type])) {
            this.dF7y[type] = [this.dF7y[type]]
        }
        return this.dF7y[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        l5q = c5h("nm.x"), dh6b = c5h("nm.u"), p5u = c5h("nm.d"), Qx8p = c5h("pomelo"), dm6g = 0, b5g, K5P;
    p5u.eQ7J({
        "polling-init": {
            url: "/api/push/init", format: function (Q5V) {
                dm6g = 2;
                var rl1x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j5o = Q5V.account || Y5d, cT6N = GUser.userId;
                Qx8p.init(rl1x.host, rl1x.port, true, this.clV3x.g5l(this, {
                    user: cT6N,
                    nonce: j5o.nonce,
                    domain: rl1x.domain,
                    productKey: rl1x.key,
                    signature: j5o.signature,
                    expire_time: j5o.expireTime
                }))
            }, onerror: function () {
                return this.bbH1x()
            }
        }
    });
    p5u.xZ3x = NEJ.C();
    b5g = p5u.xZ3x.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        var pz0x = !1;
        return function (e5j) {
            if (!pz0x) {
                pz0x = !0
            }
            this.ct6n(e5j);
            Qx8p.on("specify", this.qw1x.g5l(this));
            Qx8p.on("broadcast", this.qw1x.g5l(this))
        }
    }();
    b5g.qw1x = function (d5i) {
        k5p.be5j(d5i, function (bF6z) {
            h5m.z5E(p5u.xZ3x, "message", bF6z)
        }, this)
    };
    b5g.bbH1x = function () {
        var bA5F = 500;
        return function () {
            dm6g = 0;
            Qx8p.disconnect();
            if (bA5F > 6e4) bA5F = 500;
            bA5F *= 2
        }
    }();
    b5g.clV3x = function (e5j, bQ6K) {
        if (!!bQ6K) {
            return this.bbH1x()
        }
        dm6g = 3;
        Qx8p.registerAndBind(e5j, function (m5r) {
            if (m5r.code != 200) {
                return this.bbH1x()
            }
            dm6g = 4
        }.g5l(this))
    };
    b5g.ctV5a = function () {
        dh6b.clS3x.fX7Q().ctW5b()
    };
    b5g.ctX5c = function () {
        dh6b.clS3x.fX7Q().ctY5d()
    };
    b5g.baw1x = function () {
        var pz0x = !1;
        return function () {
            if (pz0x)return;
            pz0x = !0;
            this.cl6f("polling-init", {})
        }
    }();
    H5M.fr7k.B5G({event: "message", element: p5u.xZ3x})
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), v5A = c5h("nej.j"), cK6E = c5h("nej.p"),
        k5p = c5h("nej.u"), n5s = c5h("nm.l"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), di6c = c5h("api"), b5g, K5P;
    var fY7R = a4e.hV8N('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n5s.bat1x = NEJ.C();
    b5g = n5s.bat1x.O5T(n5s.dU7N);
    K5P = n5s.bat1x.cg6a;
    b5g.bk5p = function (e5j) {
        e5j.title = "意见反馈";
        this.bl5q(e5j)
    };
    b5g.bZ6T = function () {
        this.ca6U = fY7R
    };
    b5g.bR6L = function () {
        this.cb6V();
        this.gJ8B = {};
        var FX5c = a4e.I5N;
        var Cs5x = h5m.q5v;
        this.gJ8B.submit_btn = FX5c(this.o5t, "u-btn2")[0];
        this.gJ8B.cancle_btn = FX5c(this.o5t, "u-btn2")[1];
        this.gJ8B.prompt_msg = FX5c(this.o5t, "u-err")[0];
        this.gJ8B.zs = FX5c(this.o5t, "zs")[0];
        a4e.X5c(this.gJ8B.zs, "display", "none");
        this.gJ8B.fb_txt = FX5c(this.o5t, "u-txt")[0];
        this.gJ8B.contact = FX5c(this.o5t, "u-txt")[1];
        a4e.fD7w(this.gJ8B.fb_txt, "holder");
        a4e.fD7w(this.gJ8B.contact, "holder");
        if (a4e.by5D(this.gJ8B.fb_txt.parentNode, "holder-parent")) {
            a4e.X5c(this.gJ8B.fb_txt.parentNode, "display", "block")
        }
        if (a4e.by5D(this.gJ8B.contact.parentNode, "holder-parent")) {
            a4e.X5c(this.gJ8B.contact.parentNode, "display", "block")
        }
        Cs5x(this.gJ8B.submit_btn, "click", this.clN3x.g5l(this));
        Cs5x(this.gJ8B.cancle_btn, "click", this.clM3x.g5l(this));
        Cs5x(this.gJ8B.prompt_msg, "msgShow", this.clL3x.g5l(this));
        Cs5x(this.gJ8B.fb_txt, "keyup", this.sC1x.g5l(this));
        Cs5x(this.gJ8B.fb_txt, "input", this.fm7f.g5l(this));
        Cs5x(this.gJ8B.contact, "keyup", this.clK3x.g5l(this));
        Cs5x(this.gJ8B.contact, "input", this.bCL7E.g5l(this));
        this.kB9s = p5u.hK8C.B5G()
    };
    b5g.clN3x = function (d5i) {
        h5m.bh5m(d5i);
        if (this.cu6o())return;
        var bi5n = this.gJ8B.fb_txt.value.trim();
        var bq5v = bi5n.length;
        var e5j = {type: "json", method: "post", noEnc: true};
        var bCQ7J = this.gJ8B.contact.value.trim();
        var WJ9A = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l5q.bdp2x(),
            contact: bCQ7J
        };
        var j5o = {content: bi5n, client: "web", xInfo: JSON.stringify(WJ9A)}, mG0x = this.kB9s.cqK5P();
        if (mG0x && mG0x.length) {
            j5o.log = mG0x.join("\n")
        }
        if (bq5v == 0) {
            this.gJ8B.prompt_msg.innerHTML = "反馈内容不能为空";
            a4e.X5c(this.gJ8B.prompt_msg, "display", "block");
            return
        }
        if (bCQ7J.length > 100) {
            this.gJ8B.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a4e.X5c(this.gJ8B.prompt_msg, "display", "block");
            return
        }
        this.cu6o(true);
        e5j.data = k5p.de6Y(j5o);
        e5j.onload = this.clJ3x.g5l(this);
        e5j.onerror = this.hN8F.g5l(this);
        v5A.br5w("/api/feedback/web", e5j)
    };
    b5g.fm7f = function (d5i) {
        var bq5v = this.gJ8B.fb_txt.value.trim().length;
        if (bq5v > 0) a4e.X5c(this.gJ8B.prompt_msg, "display", "none");
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.fw7p.g5l(this), 0) : this.fw7p()
    };
    b5g.sC1x = function (d5i) {
        if (d5i.keyCode === 8) this.fw7p()
    };
    b5g.fw7p = function () {
        var bq5v = this.gJ8B.fb_txt.value.trim().length;
        this.gJ8B.zs.innerHTML = !bq5v ? "0/140" : bq5v + "/140"
    };
    b5g.bCL7E = function (d5i) {
        var bq5v = this.gJ8B.contact.value.trim().length;
        if (bq5v > 0) a4e.X5c(this.gJ8B.prompt_msg, "display", "none")
    };
    b5g.clK3x = function (d5i) {
        if (d5i.keyCode === 8) this.bCL7E()
    };
    b5g.clM3x = function (d5i) {
        h5m.cd6X(d5i);
        this.bp5u()
    };
    b5g.clL3x = function (d5i) {
        var f5k = h5m.U5Z(d5i);
        f5k.innerHTML = "请输入反馈内容"
    };
    b5g.ctZ5e = function (cua5f) {
        var f5k = h5m.U5Z(d5i);
        f5k.innerHTML = ""
    };
    b5g.clJ3x = function (m5r) {
        this.cu6o(false);
        this.bp5u();
        n5s.Z5e.M5R({tip: "意见发送成功", autoclose: true})
    };
    b5g.hN8F = function (m5r) {
        this.cu6o(false);
        n5s.Z5e.M5R({tip: "意见发送失败", autoclose: true})
    };
    b5g.cu6o = function (cD6x) {
        return this.dL7E(this.gJ8B.submit_btn, cD6x, "发送意见", "发送中...")
    };
    b5g.M5R = function () {
        K5P.M5R.call(this);
        this.cu6o(false);
        this.gJ8B.fb_txt.value = "";
        this.gJ8B.contact.value = "";
        a4e.X5c(this.gJ8B.prompt_msg, "display", "none");
        this.fw7p()
    };
    l5q.clF3x = function (e5j) {
        e5j = e5j || {};
        if (e5j.title === undefined) e5j.title = "意见反馈";
        n5s.bat1x.M5R(e5j)
    };
    di6c.feedback = l5q.feedback = l5q.clF3x
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, N5S = c5h("nej.ui"), b5g;
    if (!!N5S.vQ3x)return;
    N5S.vQ3x = NEJ.C();
    b5g = N5S.vQ3x.O5T(N5S.eq7j);
    b5g.cm6g = function () {
        this.gA7t = this.bDt7m();
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.co6i = e5j.index;
        this.fM7F = e5j.total;
        this.gH8z = e5j.range;
        this.go7h(e5j.data)
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.bb5g;
        delete this.co6i;
        delete this.fM7F;
        delete this.gH8z
    };
    b5g.hm8e = bm5r;
    b5g.bDt7m = function () {
        var fR7K = +(new Date);
        return function () {
            return "itm-" + ++fR7K
        }
    }();
    b5g.BS4W = function () {
        return this.gA7t
    };
    b5g.hl8d = function () {
        return this.bb5g
    };
    b5g.go7h = function (j5o) {
        this.bb5g = j5o || {};
        this.hm8e(this.bb5g)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), N5S = c5h("nej.ui"), b5g, K5P;
    if (!!N5S.rw1x)return;
    N5S.rw1x = NEJ.C();
    b5g = N5S.rw1x.O5T(N5S.vQ3x);
    K5P = N5S.rw1x.cg6a;
    b5g.bk5p = function (e5j) {
        this.clE3x = e5j.pkey || "id";
        this.bl5q(e5j)
    };
    b5g.CQ5V = function (j5o) {
        this.z5E("ondelete", {ext: j5o, id: this.BS4W(), data: this.hl8d(), body: this.kh9Y()})
    };
    b5g.PI8A = function (j5o) {
        this.z5E("onupdate", {ext: j5o, id: this.BS4W(), data: this.hl8d(), body: this.kh9Y()})
    };
    b5g.go7h = function (j5o) {
        K5P.go7h.apply(this, arguments);
        this.gA7t = this.bb5g[this.clE3x] || this.bDt7m()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, a4e = c5h("nej.e"), k5p = c5h("nej.u"), N5S = c5h("nej.ui"), b5g, hO8G,
        boZ4d;
    if (!!N5S.boY4c)return;
    N5S.boY4c = NEJ.C();
    b5g = N5S.boY4c.O5T(N5S.eq7j);
    b5g.bk5p = function (e5j) {
        this.WO0x = NEJ.X({}, e5j);
        this.fx7q = NEJ.X({}, e5j);
        delete this.WO0x.onchange;
        this.fx7q.onchange = this.gr7k.g5l(this);
        this.bl5q(e5j);
        this.clA3x({number: e5j.number, label: e5j.label || Y5d})
    };
    b5g.bC5H = function () {
        this.bH6B();
        if (!!this.jT9K) {
            this.jT9K.S5X();
            delete this.jT9K
        }
        delete this.WO0x;
        delete this.fx7q;
        this.cly3x();
        this.o5t.innerHTML = "&nbsp;"
    };
    b5g.bZ6T = function () {
        this.kU9L = hO8G
    };
    b5g.clA3x = function (j5o) {
        a4e.dS7L(this.o5t, boZ4d, j5o);
        var fR7K = a4e.Ih6b();
        this.fx7q.list = a4e.I5N(this.o5t, "js-i-" + fR7K);
        this.fx7q.pbtn = (a4e.I5N(this.o5t, "js-p-" + fR7K) || eY7R)[0];
        this.fx7q.nbtn = (a4e.I5N(this.o5t, "js-n-" + fR7K) || eY7R)[0]
    };
    b5g.bR6L = function () {
        this.cb6V()
    };
    b5g.cub5g = function (j5o) {
        return a4e.bP6J(boZ4d, j5o)
    };
    b5g.gr7k = function (d5i) {
        if (this.Pt8l)return;
        var s5x = d5i.index, cp6j = d5i.total;
        this.Pt8l = !0;
        this.Pl8d(s5x, cp6j);
        k5p.be5j(this.WR0x, function (rB1x) {
            rB1x.Pl8d(s5x, cp6j)
        });
        this.Pt8l = !1;
        this.z5E("onchange", d5i)
    };
    b5g.g5l = function (bB5G) {
        bB5G = a4e.y5D(bB5G);
        if (!bB5G)return this;
        var cn6h = NEJ.X({}, this.WO0x);
        cn6h.parent = bB5G;
        cn6h.index = this.rC1x();
        cn6h.total = this.jI9z();
        var rB1x = this.constructor.B5G(cn6h);
        rB1x.vg2x("onchange", this.fx7q.onchange);
        if (!this.WR0x) this.WR0x = [];
        this.WR0x.push(rB1x);
        return this
    };
    b5g.cly3x = function () {
        var blk3x = function (rB1x, s5x, i5n) {
            rB1x.S5X();
            i5n.splice(s5x, 1)
        };
        return function () {
            k5p.mn0x(this.WR0x, blk3x)
        }
    }();
    b5g.jN9E = function (s5x) {
        if (!this.jT9K)return;
        this.jT9K.jN9E(s5x)
    };
    b5g.rC1x = function () {
        if (!this.jT9K)return 1;
        return this.jT9K.rC1x()
    };
    b5g.jI9z = function () {
        if (!this.jT9K)return 1;
        return this.jT9K.jI9z()
    };
    b5g.Pl8d = function (s5x, cp6j) {
        if (!this.jT9K)return;
        this.jT9K.Pl8d(s5x, cp6j)
    };
    b5g.bnK4O = function (cp6j) {
        if (!this.jT9K)return;
        this.jT9K.bnK4O(cp6j)
    };
    hO8G = a4e.rH1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    boZ4d = a4e.ej7c('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        N5S = c5h("nej.ut"), b5g;
    if (!!N5S.bac1x)return;
    N5S.bac1x = NEJ.C();
    b5g = N5S.bac1x.O5T(N5S.cz6t);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.WU0x = e5j.pbtn;
        this.cf6Z = e5j.nbtn;
        this.WX0x = e5j.sbtn;
        this.WY0x = e5j.ebtn;
        this.ie8W = e5j.event || "click";
        this.jC9t = e5j.selected || "js-selected";
        this.mI0x = e5j.disabled || "js-disabled";
        this.clw3x(e5j.list);
        this.Pl8d(e5j.index || 1, e5j.total || 1)
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.bU6O;
        delete this.ie8W;
        delete this.WU0x;
        delete this.cf6Z;
        delete this.WX0x;
        delete this.WY0x;
        delete this.bFJ7C;
        delete this.fM7F;
        delete this.co6i;
        delete this.jC9t;
        delete this.mI0x
    };
    b5g.clw3x = function () {
        var bmS4W = function (f5k) {
            this.bU6O.push(f5k);
            this.bT6N([[f5k, this.ie8W, this.cJ6D.ec7V(this, 0)]])
        };
        return function (i5n) {
            this.bU6O = [];
            this.bT6N([[this.WU0x, "click", this.cJ6D.ec7V(this, -1)], [this.cf6Z, "click", this.cJ6D.ec7V(this, 1)], [this.WX0x, "click", this.cJ6D.ec7V(this, -2)], [this.WY0x, "click", this.cJ6D.ec7V(this, 2)]]);
            k5p.be5j(i5n, bmS4W, this)
        }
    }();
    b5g.Dr5w = function (f5k, s5x) {
        if (s5x == null) {
            f5k.innerText = "";
            a4e.X5c(f5k, "display", "none");
            a4e.w5B(f5k, this.jC9t)
        } else {
            f5k.innerText = s5x;
            a4e.X5c(f5k, "display", "");
            s5x == this.co6i ? a4e.x5C(f5k, this.jC9t) : a4e.w5B(f5k, this.jC9t)
        }
    };
    b5g.bmR4V = function () {
        if (this.co6i <= 1) {
            a4e.x5C(this.WU0x, this.mI0x);
            a4e.x5C(this.WX0x, this.mI0x)
        } else {
            a4e.w5B(this.WU0x, this.mI0x);
            a4e.w5B(this.WX0x, this.mI0x)
        }
        if (this.co6i >= this.fM7F) {
            a4e.x5C(this.cf6Z, this.mI0x);
            a4e.x5C(this.WY0x, this.mI0x)
        } else {
            a4e.w5B(this.cf6Z, this.mI0x);
            a4e.w5B(this.WY0x, this.mI0x)
        }
    };
    b5g.Xb0x = bm5r;
    b5g.bmg3x = function () {
        this.Xb0x();
        this.bmR4V();
        this.z5E("onchange", {last: this.bFJ7C, total: this.fM7F, index: this.co6i, ext: this.blV3x})
    };
    b5g.bGF7y = function (s5x) {
        s5x = parseInt(s5x);
        if (isNaN(s5x) || this.fM7F == null)return !1;
        s5x = Math.max(1, Math.min(s5x, this.fM7F));
        this.bFJ7C = this.co6i;
        this.co6i = s5x;
        return !0
    };
    b5g.blL3x = function (cp6j) {
        cp6j = parseInt(cp6j);
        if (isNaN(cp6j) || cp6j < 1)return !1;
        this.fM7F = cp6j;
        return !0
    };
    b5g.cJ6D = function (d5i, ex7q) {
        h5m.cd6X(d5i);
        var E5J = h5m.U5Z(d5i);
        if (!E5J || a4e.by5D(E5J, this.jC9t) || a4e.by5D(E5J, this.mI0x))return;
        var s5x = E5J.innerText;
        switch (ex7q) {
            case 1:
            case-1:
                s5x = this.co6i + ex7q;
                break;
            case 2:
                s5x = this.fM7F;
                break;
            case-2:
                s5x = 1;
                break
        }
        this.jN9E(s5x)
    };
    b5g.rC1x = function () {
        return this.co6i
    };
    b5g.jN9E = function (s5x) {
        var clv3x = this.co6i;
        this.bGF7y(s5x);
        if (clv3x != this.co6i) this.bmg3x();
        return this
    };
    b5g.jI9z = function () {
        return this.fM7F
    };
    b5g.OL8D = function (cp6j) {
        if (this.blL3x(cp6j) && this.co6i != null) {
            this.co6i = 1;
            this.bmg3x()
        }
        return this
    };
    b5g.bnK4O = function (cp6j) {
        if (this.blL3x(cp6j)) {
            this.Xb0x();
            this.bmR4V()
        }
        return this
    };
    b5g.Pl8d = function (s5x, cp6j) {
        if (!this.blL3x(cp6j) || !this.bGF7y(s5x))return this;
        this.bmg3x();
        return this
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), k5p = c5h("nej.u"), cP6J = c5h("nej.x"), N5S = c5h("nej.ut"), b5g;
    if (!!N5S.OD8v)return;
    N5S.OD8v = NEJ.C();
    b5g = N5S.OD8v.O5T(N5S.bac1x);
    b5g.cm6g = function () {
        this.ct6n();
        var f5k = a4e.cU6O("span", "zdot");
        f5k.innerText = "...";
        this.Xd0x = [f5k.cloneNode(true), f5k]
    };
    b5g.bC5H = function () {
        this.bH6B();
        this.bGS7L()
    };
    b5g.bGS7L = function () {
        a4e.lV0x(this.Xd0x[0]);
        a4e.lV0x(this.Xd0x[1])
    };
    b5g.Xb0x = function () {
        this.blV3x = {last: !1, first: !1, list: this.bU6O};
        this.bGS7L();
        this.Dr5w(this.bU6O[0], 1);
        var bE5J = 1, bq5v = this.bU6O.length;
        if (this.fM7F < bq5v) {
            for (var oS0x; bE5J < bq5v; bE5J++) {
                oS0x = bE5J + 1;
                this.Dr5w(this.bU6O[bE5J], oS0x > this.fM7F ? null : oS0x)
            }
            return
        }
        if (this.co6i > 1) {
            var cv6p = Math.floor((bq5v - 2) / 2), clu3x = this.fM7F - bq5v + 2, iu8m = Math.max(2, this.co6i - cv6p);
            if (this.fM7F >= bq5v) {
                iu8m = Math.min(iu8m, clu3x)
            }
            if (iu8m > 2) {
                this.bU6O[0].insertAdjacentElement("afterEnd", this.Xd0x[0]);
                this.blV3x.first = !0
            }
            for (var s5x; ; bE5J++) {
                s5x = iu8m + bE5J - 1;
                if (s5x > this.co6i)break;
                this.Dr5w(this.bU6O[bE5J], s5x)
            }
        }
        if (this.co6i < this.fM7F) {
            var s5x, iu8m = this.co6i + 1;
            for (var i = 0, l = bq5v - 2; ; i++, bE5J++) {
                s5x = iu8m + i;
                if (bE5J > l || s5x > this.fM7F)break;
                this.Dr5w(this.bU6O[bE5J], s5x)
            }
            if (s5x < this.fM7F) {
                this.bU6O[bE5J].insertAdjacentElement("beforeBegin", this.Xd0x[1]);
                this.blV3x.last = !0
            }
            if (s5x <= this.fM7F) {
                this.Dr5w(this.bU6O[bE5J++], this.fM7F)
            }
        }
        for (; bE5J < bq5v; bE5J++) {
            this.Dr5w(this.bU6O[bE5J])
        }
    };
    a4e.clt3x = cP6J.clt3x = function (bB5G, e5j) {
        var C5H = a4e.ks9j(bB5G);
        if (!C5H)return null;
        if (!N5S.Vn9e(C5H, N5S.OD8v)) {
            e5j = e5j || {};
            var i5n = !e5j.clazz ? a4e.cQ6K(C5H) : a4e.I5N(C5H, e5j.clazz);
            e5j.pbtn = i5n.shift();
            e5j.nbtn = i5n.pop();
            e5j.list = i5n;
            delete e5j.clazz
        }
        return N5S.Vn9e(C5H, N5S.OD8v, e5j || Y5d)
    };
    cP6J.isChange = !0
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, a4e = c5h("nej.e"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        N5S = c5h("nej.ui"), b5g, K5P, fY7R;
    if (!!N5S.Os7l)return;
    N5S.Os7l = NEJ.C();
    b5g = N5S.Os7l.O5T(N5S.boY4c);
    K5P = N5S.Os7l.cg6a;
    b5g.bk5p = function (e5j) {
        e5j.number = parseInt(e5j.number) || 9;
        this.bl5q(e5j);
        this.jT9K = H5M.OD8v.B5G(this.fx7q)
    };
    b5g.gr7k = function (d5i) {
        if (!!this.WO0x.noend) {
            var bHq7j = d5i.ext || Y5d, i5n = bHq7j.list || eY7R;
            if (bHq7j.last) {
                a4e.X5c(i5n[i5n.length - 1], "display", "none")
            }
        }
        K5P.gr7k.apply(this, arguments)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        bd5i = c5h("nej.ui"), N5S = c5h("nej.ut"), b5g;
    if (!!N5S.Xg0x)return;
    N5S.Xg0x = NEJ.C();
    b5g = N5S.Xg0x.O5T(N5S.cz6t);
    b5g.bk5p = function (e5j) {
        this.ik8c = {};
        this.bl5q(e5j);
        this.hX8P = a4e.y5D(e5j.parent);
        this.eK7D = {parent: this.hX8P};
        this.qS1x = parseInt(e5j.limit) || 10;
        this.wH3x = parseInt(e5j.first) || this.qS1x;
        this.cls3x(e5j.item);
        this.clr3x(e5j.cache || Y5d);
        this.clq3x(e5j.pager || Y5d);
        this.go7h()
    };
    b5g.bC5H = function () {
        this.z5E("onbeforerecycle");
        this.Ok7d();
        this.bH6B();
        if (this.ik8c.clear) {
            this.P5U.sI1x(this.ik8c.key)
        }
        this.P5U.S5X();
        if (!!this.im8e) {
            this.im8e.S5X();
            delete this.im8e
        }
        delete this.bIi8a;
        delete this.fx7q;
        delete this.Xi0x;
        delete this.P5U;
        delete this.hX8P;
        delete this.NU7N;
        delete this.eK7D;
        delete this.ik8c
    };
    b5g.bIn8f = function () {
        var cM6G = /\{(.*?)\}/gi, clp3x = function (oZ0x, j5o) {
            return (oZ0x || "{id}{seed}").replace(cM6G, function ($1, $2) {
                var A5F = j5o[$2];
                return A5F == null ? $1 : A5F
            })
        };
        return function (C5H) {
            var J5O = clp3x(this.eK7D.jstIdTempalte, {id: C5H, seed: a4e.Ih6b()});
            if (!this.eK7D.jstIdType) {
                return a4e.y5D(J5O)
            } else if (this.eK7D.jstIdType == 1) {
                return (a4e.I5N(this.hX8P, J5O) || [])[0]
            }
        }
    }();
    b5g.xU3x = function (bE5J, bj5o, fW7P, bq5v) {
        var m5r = {index: 1, total: 1};
        if (bj5o >= bE5J) {
            m5r.index = Math.floor((bj5o - bE5J) / fW7P) + 2
        }
        if (bq5v > bE5J) {
            m5r.total = Math.ceil((bq5v - bE5J) / fW7P) + 1
        }
        return m5r
    };
    b5g.bIK8C = function (J5O) {
        delete this.NU7N;
        this.FJ5O = J5O;
        this.bT6N([[this.hX8P, "click", this.clo3x.g5l(this)]])
    };
    b5g.cls3x = function (r5w) {
        if (k5p.fh7a(r5w)) {
            this.bIK8C(r5w);
            return
        }
        NEJ.X(this.eK7D, r5w);
        var dB7u = this.eK7D.klass;
        delete this.eK7D.klass;
        if (k5p.fh7a(dB7u)) {
            this.bIK8C(dB7u);
            return
        }
        delete this.FJ5O;
        this.NU7N = dB7u;
        this.eK7D.ondelete = this.z5E.g5l(this, "ondelete");
        this.eK7D.onupdate = this.z5E.g5l(this, "onupdate")
    };
    b5g.clr3x = function (R5W) {
        var dB7u = R5W.klass, jr9i = NEJ.X({}, R5W);
        this.ik8c.key = jr9i.lkey;
        this.ik8c.data = jr9i.data || {};
        this.ik8c.clear = !!jr9i.clear;
        this.eK7D.pkey = jr9i.key || "id";
        jr9i.onlistload = this.bhN3x.g5l(this);
        jr9i.onpullrefresh = this.clk3x.g5l(this);
        if (!!dB7u && "onlistchange" in dB7u) {
            this.bT6N([[dB7u, "listchange", this.bhH3x.g5l(this)]])
        } else {
            jr9i.onitemadd = this.Xp0x.g5l(this);
            jr9i.onitemdelete = this.Xr0x.g5l(this);
            jr9i.onitemupdate = this.bJj8b.g5l(this)
        }
        this.P5U = (dB7u || N5S.OQ8I).B5G(jr9i);
        if (R5W.total != null) {
            this.P5U.OL8D(this.ik8c.key, R5W.total)
        }
        if (!!R5W.list) {
            this.P5U.rj1x(this.ik8c.key, R5W.list)
        }
    };
    b5g.clq3x = function (rB1x) {
        this.bIi8a = rB1x.klass || bd5i.Os7l;
        this.fx7q = NEJ.X({}, rB1x);
        if (k5p.ep7i(rB1x.parent)) {
            this.fx7q.parent = rB1x.parent[0];
            this.NE7x = rB1x.parent.slice(1);
            if (!this.NE7x || !this.NE7x.length) {
                delete this.NE7x
            }
        }
        delete this.fx7q.klass
    };
    b5g.Ok7d = function () {
        var fT7M = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z5E("onbeforelistclear", {parent: this.hX8P});
            if (!!this.fe7X && this.fe7X.length > 0) {
                this.fe7X = this.NU7N.S5X(this.fe7X);
                delete this.fe7X
            }
            if (fT7M.test(this.hX8P.tagName)) {
                a4e.bAi6c(this.hX8P)
            } else {
                this.hX8P.innerHTML = ""
            }
        }
    }();
    b5g.bgZ2x = function (Xu0x) {
        if (!!this.fx7q.fixed)return;
        a4e.X5c(this.fx7q.parent, "display", Xu0x);
        k5p.be5j(this.NE7x, function (bB5G) {
            a4e.X5c(bB5G, "display", Xu0x)
        }, this)
    };
    b5g.bgM2x = function () {
        var s5x = this.fx7q.index || 1;
        delete this.fx7q.index;
        if (!!this.im8e) {
            s5x = this.im8e.rC1x()
        }
        this.xR3x({last: s5x, index: s5x})
    };
    b5g.xR3x = function (d5i) {
        this.z5E("onpagechange", d5i)
    };
    b5g.bKc8U = function (bj5o) {
        this.ik8c.offset = bj5o;
        this.TM9D()
    };
    b5g.bKg8Y = function (e5j) {
        return e5j
    };
    b5g.TM9D = function () {
        this.Nl7e();
        var j5o = this.ik8c.data;
        j5o.offset = this.ik8c.offset;
        var ox0x = j5o.offset == 0;
        j5o.total = ox0x;
        this.ik8c.limit = ox0x ? this.wH3x : this.qS1x;
        j5o.limit = this.ik8c.limit;
        this.P5U.nj0x(this.bKg8Y(NEJ.X({}, this.ik8c)))
    };
    b5g.bhN3x = function (e5j) {
        if (e5j.key != this.ik8c.key || e5j.offset != this.ik8c.offset)return;
        this.Xw0x();
        var i5n = this.P5U.gS8K(e5j.key);
        if (!i5n || !i5n.length) {
            this.bfG2x();
            return
        }
        var fW7P = e5j.limit, bj5o = e5j.offset;
        if (this.bfD2x(i5n, bj5o, fW7P))return;
        this.z5E("onbeforelistrender", {list: i5n, offset: bj5o, parent: this.hX8P});
        if (!!this.FJ5O) {
            this.eK7D.xlist = i5n;
            this.eK7D.beg = bj5o;
            this.eK7D.end = Math.min(i5n.length, bj5o + fW7P) - 1;
            this.eK7D.act = "list";
            var dq6k = a4e.bP6J(this.FJ5O, this.eK7D);
            this.Ne7X(dq6k)
        } else {
            this.eK7D.limit = fW7P;
            this.eK7D.offset = bj5o;
            var gx7q = a4e.zx4B(i5n, this.NU7N, this.eK7D);
            this.Nc7V(gx7q)
        }
        this.z5E("onafterlistrender", {list: i5n, offset: bj5o, parent: this.hX8P})
    };
    b5g.clk3x = function (e5j) {
        if (!this.Xi0x)return;
        delete this.Xi0x;
        this.Xw0x("onafterpullrefresh");
        this.go7h()
    };
    b5g.bKG8y = function (s5x, cp6j) {
        if (!!this.im8e) {
            var zR4V = this.im8e.rC1x(), clj3x = this.im8e.jI9z();
            if (zR4V > cp6j || cp6j != clj3x) {
                this.im8e.S5X();
                delete this.im8e;
                this.xR3x({last: zR4V, index: Math.min(s5x, cp6j)});
                return !0
            }
        } else {
            this.fx7q.index = s5x;
            this.fx7q.total = cp6j;
            this.im8e = this.bIi8a.B5G(this.fx7q);
            this.im8e.vg2x("onchange", this.xR3x.g5l(this));
            k5p.be5j(this.NE7x, function (bB5G) {
                this.im8e.g5l(bB5G)
            }, this)
        }
    };
    b5g.Xy0x = function () {
        var fR7K = +(new Date);
        return function (j5o) {
            var C5H = j5o[this.eK7D.pkey];
            if (!C5H) {
                j5o["dirty-data"] = !0;
                j5o[this.eK7D.pkey] = "dirty-" + fR7K++
            }
            return j5o
        }
    }();
    b5g.Xz0x = function (j5o) {
        var C5H = j5o[this.eK7D.pkey];
        if (!!j5o["dirty-data"]) {
            delete j5o["dirty-data"];
            delete j5o[this.eK7D.pkey]
        }
        return C5H
    };
    b5g.XA0x = function () {
        var cli3x = function (jM9D, lq9h) {
            this.hX8P.insertAdjacentElement(jM9D, lq9h)
        };
        return function (jM9D, j5o) {
            var Iv6p = [j5o];
            if (!!this.FJ5O) {
                this.eK7D.xlist = Iv6p;
                this.eK7D.beg = 0;
                this.eK7D.end = 0;
                this.eK7D.act = "add";
                this.Ne7X(a4e.bP6J(this.FJ5O, this.eK7D), jM9D)
            } else {
                this.eK7D.limit = 1;
                this.eK7D.offset = 0;
                this.eK7D.parent = cli3x.g5l(this, jM9D);
                var gx7q = a4e.zx4B(Iv6p, this.NU7N, this.eK7D);
                this.eK7D.parent = this.hX8P;
                this.Nc7V(gx7q)
            }
        }
    }();
    b5g.Nl7e = bm5r;
    b5g.Xw0x = function (T5Y) {
        var d5i = {parent: this.hX8P};
        this.z5E(T5Y || "onafterlistload", d5i);
        if (!d5i.stopped) {
            a4e.lV0x(this.ch6b)
        }
    };
    b5g.bfD2x = bm5r;
    b5g.XB0x = function (bF6z, jM9D) {
        if (k5p.fh7a(bF6z)) {
            if (!this.ch6b) this.ch6b = a4e.cU6O("div");
            this.ch6b.innerHTML = bF6z
        } else {
            this.ch6b = bF6z
        }
        this.hX8P.insertAdjacentElement(jM9D || "beforeEnd", this.ch6b)
    };
    b5g.wz3x = function (T5Y, kr9i, jM9D) {
        var d5i = {parent: this.hX8P};
        this.z5E(T5Y, d5i);
        if (!d5i.stopped) {
            this.XB0x(d5i.value || kr9i, jM9D)
        }
    };
    b5g.bfG2x = bm5r;
    b5g.Ne7X = bm5r;
    b5g.Nc7V = bm5r;
    b5g.clo3x = function () {
        var fT7M = /^(?:delete|update)$/;
        return function (d5i) {
            var f5k = h5m.U5Z(d5i, "d:action");
            if (!f5k)return;
            var W5b = a4e.u5z(f5k, "action");
            if (!fT7M.test(W5b))return;
            var C5H = a4e.u5z(f5k, "id");
            if (!C5H)return;
            var r5w = this.P5U.ei7b(C5H);
            if (!r5w)return;
            h5m.bh5m(d5i);
            this.z5E("on" + W5b, {data: r5w, id: r5w[this.eK7D.pkey], body: a4e.y5D(this.bIn8f(C5H))})
        }
    }();
    b5g.Xp0x = bm5r;
    b5g.TN9E = function (d5i) {
        var j5o = d5i.data || {}, e5j = {data: j5o, key: this.ik8c.key, id: j5o[this.eK7D.pkey]};
        this.z5E("onbeforedelete", e5j);
        this.P5U.If6Z(e5j)
    };
    b5g.Xr0x = bm5r;
    b5g.TP9G = function (d5i) {
        var j5o = d5i.data || {}, e5j = {data: j5o, key: this.ik8c.key};
        this.z5E("onbeforeupdate", e5j);
        this.P5U.TJ9A(e5j)
    };
    b5g.bJj8b = function (d5i) {
        this.MN7G(d5i, "onafterupdate");
        if (d5i.stopped)return;
        var C5H = d5i.data[this.eK7D.pkey];
        if (!!this.fe7X) {
            var r5w = a4e.bCX7Q(C5H);
            if (!!r5w) r5w.go7h(d5i.data)
        } else {
            var f5k = a4e.y5D(C5H + "" + a4e.Ih6b());
            if (!f5k)return;
            var i5n = this.P5U.gS8K(d5i.key), s5x = k5p.cV6P(i5n, d5i.data);
            if (s5x < 0)return;
            this.eK7D.list = i5n;
            this.eK7D.beg = s5x;
            this.eK7D.end = s5x;
            this.eK7D.act = "update";
            var dq6k = a4e.bP6J(this.FJ5O, this.eK7D);
            f5k.insertAdjacentHTML("afterEnd", dq6k);
            a4e.cE6y(f5k)
        }
    };
    b5g.MN7G = function (d5i, T5Y) {
        var r5w = d5i.data;
        if (!r5w || r5w[this.eK7D.pkey] == null) {
            this.z5E("onerror", d5i);
            d5i.stopped = !0
        }
        if (!d5i.stopped) {
            this.z5E(T5Y, d5i)
        }
    };
    b5g.bef2x = bm5r;
    b5g.bdK2x = bm5r;
    b5g.bhH3x = function (d5i) {
        if (d5i.key != this.ik8c.key)return;
        switch (d5i.action) {
            case"add":
                this.Xp0x(d5i);
                break;
            case"delete":
                this.Xr0x(d5i);
                break;
            case"update":
                this.bJj8b(d5i);
                break;
            case"refresh":
                this.go7h();
                break;
            case"unshift":
                this.bdK2x(d5i.offset, d5i.limit);
                break;
            case"append":
                this.bef2x(d5i.offset, d5i.limit);
                break
        }
    };
    b5g.oA0x = function (r5w) {
        this.TP9G({data: r5w})
    };
    b5g.lA9r = function (r5w) {
        this.TN9E({data: r5w})
    };
    b5g.rX1x = function (r5w) {
        this.P5U.iC9t({data: r5w, key: this.ik8c.key})
    };
    b5g.rY1x = function () {
        return this.P5U
    };
    b5g.bds2x = function (j5o) {
        this.XA0x("afterBegin", this.Xy0x(j5o));
        return this.Xz0x(j5o)
    };
    b5g.bLv8n = function (j5o) {
        this.XA0x("beforeEnd", this.Xy0x(j5o));
        return this.Xz0x(j5o)
    };
    b5g.go7h = function () {
        this.Ok7d();
        this.bgM2x()
    };
    b5g.cuc5h = function () {
        this.P5U.sI1x(this.ik8c.key);
        this.go7h()
    };
    b5g.bjI3x = function () {
        if (!!this.Xi0x)return;
        this.Xi0x = !0;
        this.wz3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.P5U.bjI3x({key: this.ik8c.key, data: this.ik8c.data})
    };
    b5g.jI9z = function () {
        return this.P5U.jI9z(this.ik8c.key)
    };
    b5g.bLx8p = function () {
        return this.im8e
    };
    b5g.Tw9n = function () {
        return this.P5U.Tw9n(this.ik8c.key)
    };
    b5g.cle3x = function () {
        return this.fe7X
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, k5p = c5h("nej.u"), a4e = c5h("nej.e"), N5S = c5h("nej.ut"), b5g, K5P;
    if (!!N5S.ip8h)return;
    N5S.ip8h = NEJ.C();
    b5g = N5S.ip8h.O5T(N5S.Xg0x);
    K5P = N5S.ip8h.cg6a;
    b5g.xU3x = function (bj5o, bq5v) {
        return K5P.xU3x.call(this, this.wH3x, bj5o, this.qS1x, bq5v)
    };
    b5g.bdr2x = function (s5x) {
        var bj5o = 0;
        if (s5x > 1) bj5o = this.wH3x + (s5x - 2) * this.qS1x;
        return bj5o
    };
    b5g.xR3x = function (d5i) {
        K5P.xR3x.apply(this, arguments);
        if (!d5i.stopped) {
            this.bKc8U(this.bdr2x(d5i.index))
        }
    };
    b5g.Nl7e = function () {
        this.Ok7d();
        this.wz3x("onbeforelistload", "列表加载中...")
    };
    b5g.Xw0x = function () {
        K5P.Xw0x.apply(this, arguments);
        this.Ok7d()
    };
    b5g.bfD2x = function (i5n, bj5o, fW7P) {
        var bt5y = this.xU3x(bj5o, i5n.length);
        if (this.bKG8y(bt5y.index, bt5y.total))return !0;
        this.bgZ2x(bt5y.total > 1 ? "" : "none")
    };
    b5g.bfG2x = function () {
        this.wz3x("onemptylist", "没有列表数据！")
    };
    b5g.XB0x = function (bF6z, jM9D) {
        if (!jM9D && k5p.fh7a(bF6z)) {
            this.hX8P.innerHTML = bF6z;
            return
        }
        K5P.XB0x.apply(this, arguments)
    };
    b5g.Ne7X = function (dq6k) {
        this.hX8P.innerHTML = dq6k
    };
    b5g.Nc7V = function (gx7q) {
        this.fe7X = gx7q
    };
    b5g.Xp0x = function (d5i) {
        this.MN7G(d5i, "onafteradd");
        if (!d5i.stopped) this.go7h()
    };
    b5g.Xr0x = function (d5i) {
        this.MN7G(d5i, "onafterdelete");
        if (!d5i.stopped) this.go7h()
    };
    b5g.bef2x = function (bj5o, fW7P) {
        var s5x = 1;
        if (!!this.im8e) {
            s5x = this.im8e.rC1x()
        }
        var iZ9Q = this.bdr2x(s5x), gs7l = iZ9Q + (s5x > 1 ? this.qS1x : this.wH3x);
        if (bj5o >= gs7l && !!this.im8e) {
            var bt5y = this.xU3x(0, this.jI9z());
            this.im8e.bnK4O(bt5y.total);
            this.bgZ2x(bt5y.total > 1 ? "" : "none")
        } else {
            this.go7h()
        }
    };
    b5g.bdK2x = function (bj5o, fW7P) {
        var s5x = 1;
        if (!!this.im8e) {
            s5x = this.im8e.rC1x()
        }
        var iZ9Q = this.bdr2x(s5x), bt5y = this.xU3x(iZ9Q, this.jI9z());
        this.xR3x({last: s5x, index: bt5y.index})
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), H5M = c5h("nej.ut"),
        k5p = c5h("nej.u"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), D5I = c5h("nm.w"), ge7X = 40, b5g, K5P;
    D5I.XE0x = NEJ.C();
    b5g = D5I.XE0x.O5T(H5M.cz6t);
    K5P = D5I.XE0x.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.MD7w = e5j.inputer;
        this.bcU2x = e5j.tipper;
        this.bT6N([[this.MD7w, "input", this.fm7f.g5l(this)]])
    };
    b5g.bC5H = function () {
        this.bH6B();
        this.Fx5C(null, null)
    };
    b5g.fm7f = function (d5i) {
        if (d5i && d5i.type == "keyup" && (d5i.keyCode != 8 || d5i.keyCode != 68))return;
        var T5Y = this.MD7w.value, cud5i;
        if (l5q.Ha6U(T5Y) > ge7X) {
            this.MD7w.value = l5q.yC3x(T5Y, ge7X);
            this.Fx5C("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g5l(this))
        } else if (T5Y.indexOf("#") >= 0 || T5Y.indexOf("@") >= 0) {
            this.Fx5C("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Fx5C(null, null);
            this.z5E("onchange", {value: T5Y})
        }
    };
    b5g.clc3x = function () {
        this.fm7f()
    };
    b5g.Fx5C = function () {
        var C5H = 0;
        return function (dW7P, bLY8Q) {
            if (!!C5H) window.clearTimeout(C5H);
            if (!dW7P) {
                a4e.x5C(this.bcU2x, "f-vhide");
                this.bLZ8R = !1;
                return
            }
            this.bcU2x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dW7P;
            a4e.w5B(this.bcU2x, "f-vhide");
            this.bLZ8R = !0;
            if (k5p.gd7W(bLY8Q)) C5H = window.setTimeout(function () {
                this.Fx5C(null, null);
                bLY8Q()
            }.g5l(this), 1e3)
        }
    }();
    b5g.bMb8T = function () {
        if (this.bLZ8R)return !1;
        if (l5q.iO9F(this.MD7w.value)) {
            this.Fx5C("歌单名不能为空");
            return !1
        }
        return !0
    };
    b5g.fu7n = function () {
        return this.MD7w.value
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, h5m = c5h("nej.v"), a4e = c5h("nej.e"), v5A = c5h("nej.j"), n5s = c5h("nm.l"),
        D5I = c5h("nm.w"), bI6C = c5h("nej.ui"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), b5g, K5P;
    n5s.XQ0x = NEJ.C();
    b5g = n5s.XQ0x.O5T(n5s.dU7N);
    K5P = n5s.XQ0x.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.XW0x = {inputer: i5n[0], tipper: i5n[1]};
        this.gR8J = {onerror: this.bMw8o.g5l(this), onitemadd: this.bMw8o.g5l(this)};
        this.oQ0x = i5n[2];
        h5m.q5v(i5n[2], "click", this.AY4c.g5l(this));
        h5m.q5v(i5n[3], "click", this.za4e.g5l(this));
        h5m.q5v(this.o5t, "keypress", this.bMD8v.g5l(this))
    };
    b5g.bZ6T = function () {
        this.ca6U = "m-wgt-create"
    };
    b5g.bk5p = function (e5j) {
        e5j.clazz = " m-layer-w2";
        e5j.parent = e5j.parent || document.body;
        e5j.title = "新建歌单";
        e5j.draggable = !0;
        e5j.destroyalbe = !0;
        e5j.mask = true;
        this.bl5q(e5j);
        this.XW0x.inputer.value = e5j.name || "";
        this.tN2x = D5I.XE0x.B5G(this.XW0x);
        this.tN2x.clc3x();
        this.P5U = p5u.hk8c.B5G(this.gR8J);
        setTimeout(function () {
            this.XW0x.inputer.focus()
        }.g5l(this), 0)
    };
    b5g.bC5H = function () {
        this.bH6B();
        if (this.tN2x) {
            this.tN2x.S5X();
            delete this.tN2x
        }
        this.sd1x(!1);
        this.XW0x.inputer.value = ""
    };
    b5g.sd1x = function (Md7W) {
        this.nZ0x = Md7W;
        if (Md7W) {
            this.oQ0x.innerHTML = "<i>新建中...</i>";
            a4e.x5C(this.oQ0x, "u-btn2-dis")
        } else {
            this.oQ0x.innerHTML = "<i>新 建</i>";
            a4e.w5B(this.oQ0x, "u-btn2-dis")
        }
    };
    b5g.AY4c = function () {
        if (this.nZ0x || !this.tN2x.bMb8T())return;
        var cn6h = {key: "playlist_new-" + GUser.userId, data: {name: this.tN2x.fu7n()}, offset: 1};
        this.P5U.iC9t(cn6h);
        this.sd1x(!0)
    };
    b5g.bMw8o = function (d5i) {
        var ci6c = (d5i.result || Y5d).code;
        if (!ci6c) {
            this.z5E("onsuccess", d5i.data)
        } else {
            this.z5E("onerror", d5i)
        }
        this.bp5u()
    };
    b5g.za4e = function () {
        this.bp5u()
    };
    b5g.bMD8v = function (d5i) {
        if (d5i.keyCode == 13) this.AY4c()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        H5M = c5h("nej.ut"), v5A = c5h("nej.j"), l5q = c5h("nm.x"), p5u = c5h("nm.d"), n5s = c5h("nm.l"), b5g, K5P;
    n5s.bbM2x = NEJ.C();
    b5g = n5s.bbM2x.O5T(n5s.dU7N);
    K5P = n5s.bbM2x.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.hI8A = {
            limit: 301,
            parent: i5n[1],
            cache: {klass: p5u.hk8c, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bbz1x.g5l(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l5q.AF4J, escape: k5p.dM7F}
        };
        this.gR8J = {onsuccess: this.XX0x.g5l(this), onerror: this.eo7h.g5l(this)};
        h5m.q5v(i5n[0], "click", this.AY4c.g5l(this));
        h5m.q5v(i5n[1], "click", this.lS0x.g5l(this))
    };
    b5g.bZ6T = function () {
        this.ca6U = "m-wgt-subscribe"
    };
    b5g.bk5p = function (e5j) {
        e5j.parent = e5j.parent || document.body;
        e5j.clazz = " m-layer-w2";
        e5j.title = "添加到歌单";
        e5j.draggable = !0;
        e5j.mask = !0;
        this.bl5q(e5j);
        this.XY0x = (e5j.tracks || []).reverse();
        this.hI8A.item.size = this.XY0x.length;
        this.gR8J.name = e5j.name || "";
        this.bNf9W = p5u.ur2x.B5G({onaddsuccess: this.xO3x.g5l(this)});
        this.rp1x = p5u.hk8c.B5G({onlistload: this.clb3x.g5l(this)});
        this.rp1x.brv4z();
        k5p.be5j(this.XY0x, function (r5w, s5x, i5n) {
            if (!k5p.kf9W(r5w)) {
                i5n[s5x] = this.bNf9W.ei7b(r5w) || r5w
            }
        }, this)
    };
    b5g.clb3x = function () {
        if (this.ds7l) this.ds7l.S5X();
        this.ds7l = H5M.ip8h.B5G(this.hI8A)
    };
    b5g.AY4c = function () {
        this.bp5u();
        if (this.Bm4q) this.Bm4q.S5X();
        this.Bm4q = n5s.XQ0x.B5G(this.gR8J);
        this.Bm4q.M5R()
    };
    b5g.lS0x = function () {
        var cla3x = function (f5k) {
            while (f5k && f5k != document) {
                if (f5k.tagName.toLowerCase() == "li") {
                    return f5k
                }
                f5k = f5k.parentNode
            }
        };
        return function (d5i) {
            h5m.cd6X(d5i);
            var E5J = h5m.U5Z(d5i), bap1x = cla3x(E5J);
            if (!!bap1x && !a4e.by5D(bap1x, "dis")) {
                this.XX0x({id: a4e.u5z(bap1x, "id")})
            }
        }
    }();
    b5g.XX0x = function (d5i) {
        var C5H = d5i.id;
        if (!C5H || !this.XY0x.length)return;
        this.bNf9W.iC9t({key: "track_playlist-" + C5H, data: {tracks: this.XY0x, pid: C5H}});
        this.bp5u()
    };
    b5g.xO3x = function () {
        this.z5E("onsuccess");
        n5s.Z5e.M5R({tip: "收藏成功"})
    };
    b5g.eo7h = function (d5i) {
        this.bp5u();
        this.z5E("onerror", d5i);
        var cA6u = "收藏失败";
        switch (d5i.code) {
            case 405:
                cA6u = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cA6u = "歌单数量超过限制";
                break;
            case 502:
                cA6u = "歌曲已经存在"
        }
        n5s.Z5e.M5R({tip: cA6u, type: 2})
    };
    b5g.bbz1x = function () {
        this.bp5u();
        n5s.Z5e.M5R({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l5q.lE9v = function (e5j) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n5s.bbM2x.M5R(e5j)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, cK6E = c5h("nej.p"), a4e = c5h("nej.e"), h5m = c5h("nej.v"),
        v5A = c5h("nej.j"), k5p = c5h("nej.u"), l5q = c5h("nm.x");
    var bpF4J, np0x, V5a = decodeURIComponent(location.href),
        iW9N = /.+(http:\/\/.+\/proxy.html)/.test(V5a) ? RegExp.$1 : "";
    if (!!iW9N) {
        v5A.uk2x("mail_proxy_url", iW9N)
    } else {
        iW9N = v5A.tD1x("mail_proxy_url") || "about:blank"
    }
    bpF4J = a4e.XV0x({
        src: iW9N, onload: function () {
            np0x = true
        }
    });
    var brj4n = function () {
        v5A.gB7u("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var ckZ3x = function () {
        if (cK6E.cS6M.browser == "ie" && parseInt(cK6E.cS6M.version) < 9) {
            l5q.fb7U({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l5q.Yn0x = function (t5y, C5H, W5b) {
        if (!ckZ3x())return;
        brj4n();
        if (W5b == "stop") {
            if (!np0x)throw"proxy not loaded";
            brj4n();
            bpF4J.contentWindow.location.replace(iW9N + "#" + k5p.de6Y({
                    to: "ifrmMusic",
                    message: JSON.stringify({s: +(new Date), action: "stop"})
                }))
        } else {
            bpF4J.contentWindow.location.replace(iW9N + "#" + k5p.de6Y({
                    to: "ifrmMusic",
                    message: JSON.stringify({type: t5y, id: C5H, s: +(new Date), action: W5b})
                }))
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), v5A = c5h("nej.j"),
        k5p = c5h("nej.u"), l5q = c5h("nm.x"), n5s = c5h("nm.l"), p5u = c5h("nm.d");
    var kB9s = p5u.hK8C.B5G();
    var nQ0x = p5u.ur2x.B5G({onlistload: ckX3x, onitemload: ckW3x, onerror: eo7h});
    var Bs4w = p5u.po0x.B5G({onlistload: ckV3x, onitemload: ckU3x, onerror: eo7h});
    var bry4C = {};

    function ug2x(d5i) {
        var f5k = h5m.U5Z(d5i, "d:resAction"), W5b = a4e.u5z(f5k, "resAction");
        if (f5k && (W5b == "play" || W5b == "addto")) {
            brA4E({
                action: W5b,
                type: parseInt(a4e.u5z(f5k, "resType")),
                id: a4e.u5z(f5k, "resId"),
                from: a4e.u5z(f5k, "resFrom"),
                data: a4e.u5z(f5k, "resData"),
                order: a4e.u5z(f5k, "resOrder")
            });
            ckT3x(f5k)
        }
    }

    function brA4E(bN6H) {
        var W5b = bN6H.action, t5y = bN6H.type, C5H = bN6H.id, dI7B = bN6H.from, j5o = bN6H.data, sQ1x = bN6H.order,
            e5j = {
                limit: 1e3,
                offset: 0,
                data: {id: C5H},
                ext: {id: C5H, action: W5b, type: t5y, from: dI7B, data: j5o}
            };
        if (W5b != "play" && W5b != "addto" || !t5y)return;
        if (window.GRef && GRef == "mail") {
            l5q.Yn0x(t5y, C5H, W5b);
            return
        }
        switch (t5y) {
            case 13:
                e5j.key = "track_playlist-" + C5H;
                nQ0x.nj0x(e5j);
                if (W5b == "play") {
                    v5A.br5w("/api/playlist/update/playcount", {query: {id: C5H}})
                }
                break;
            case 17:
                e5j.key = "program";
                e5j.id = C5H;
                Bs4w.TE9v(e5j);
                if (W5b == "play") {
                    v5A.br5w("/api/dj/program/listen", {query: {id: C5H}})
                }
                break;
            case 18:
                e5j.key = "track";
                e5j.id = C5H;
                nQ0x.TE9v(e5j);
                break;
            case 19:
                e5j.key = "track_album-" + C5H;
                nQ0x.nj0x(e5j);
                break;
            case 24:
                e5j.key = "track_day";
                nQ0x.nj0x(e5j);
                break;
            case 2:
                e5j.key = "track_artist_top-" + C5H;
                nQ0x.nj0x(e5j);
                break;
            case 70:
                e5j.key = "program_djradio-" + C5H + "-" + sQ1x;
                e5j.data.radioId = C5H;
                e5j.data.asc = sQ1x == 2;
                Bs4w.nj0x(e5j);
                break
        }
    }

    function brE5J(i5n) {
        var m5r = [];
        k5p.be5j(i5n, function (r5w) {
            if (r5w.mainSong) {
                r5w.mainSong.program = r5w;
                m5r.push(r5w.mainSong);
                r5w.localupdatetime = +(new Date);
                nQ0x.crb5g(r5w.mainSong);
                r5w.mainTrackId = r5w.mainSong.id;
                delete r5w.mainSong
            } else {
                var brH5M = nQ0x.ei7b(r5w.mainTrackId);
                brH5M && m5r.push(brH5M)
            }
        });
        return m5r
    }

    function Yr0x(i5n, e5j) {
        var qM1x = e5j.action == "play" && e5j.type != 17 && e5j.type != 18, eX7Q = e5j.action == "play";
        if (!i5n.length)return;
        if (e5j.type == 19) {
            i5n = l5q.HO6I(i5n, true, {play: true}, {source: "album", sourceid: e5j.id})
        } else {
            i5n = l5q.HO6I(i5n, true, {play: true})
        }
        k5p.be5j(i5n, function (r5w) {
            r5w.source = l5q.bet2x({fid: e5j.from, fdata: e5j.data, type: e5j.type, rid: e5j.id}, r5w.id)
        });
        top.player.addTo(i5n, qM1x, eX7Q);
        kB9s.NQ7J({rid: e5j.id, type: e5j.type, hash: l5q.Hp6j(), play: eX7Q, source: e5j.from, sourceid: e5j.data})
    }

    function ckX3x(d5i) {
        var i5n = nQ0x.gS8K(d5i.key);
        Yr0x(i5n, d5i.ext)
    }

    function ckW3x(d5i) {
        var i5n = [nQ0x.ei7b(d5i.id)], bf5k = i5n[0], pL0x = l5q.oh0x(bf5k), re1x = bf5k.privilege || {};
        if (pL0x == 10) {
            l5q.tB1x(re1x.fee || bf5k.fee, bf5k.id, "song", null, re1x)
        } else if (pL0x == 100) {
            l5q.hS8K(null, null, null, true, bf5k)
        } else if (pL0x == 11) {
            l5q.bHr7k(bf5k.id, 18)
        } else {
            Yr0x(i5n, d5i.ext)
        }
    }

    function ckV3x(d5i) {
        var i5n = brE5J(Bs4w.gS8K(d5i.key));
        Yr0x(i5n, d5i.ext)
    }

    function ckU3x(d5i) {
        var i5n = brE5J([Bs4w.ei7b(d5i.id)]);
        Yr0x(i5n, d5i.ext)
    }

    function eo7h() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function ckT3x(f5k) {
        var t5y = a4e.u5z(f5k, "resType"), C5H = a4e.u5z(f5k, "resId"), J5O = t5y + "-" + C5H;
        if (bry4C[J5O])return;
        var brX5c = a4e.y5D("play-count"), bnJ4N = a4e.I5N(f5k.parentNode, "nb"), Le7X = null;
        if (brX5c) {
            Le7X = brX5c
        } else {
            Le7X = !!bnJ4N && !!bnJ4N[0] ? bnJ4N[0] : null
        }
        if (Le7X) {
            var cv6p = Le7X.innerHTML;
            if (/^\d+$/.test(cv6p)) {
                Le7X.innerText = +cv6p + 1
            }
            bry4C[J5O] = true
        }
    }

    l5q.ckS3x = function (f5k) {
        h5m.q5v(f5k || document.body, "click", ug2x.g5l(this))
    };
    l5q.ckQ3x = function (W5b, t5y, C5H) {
        brA4E({action: W5b, type: t5y, id: C5H})
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), k5p = c5h("nej.u"), v5A = c5h("nej.j"),
        H5M = c5h("nej.ut"), p5u = c5h("nm.d"), b5g, K5P;
    p5u.eQ7J({
        "share-all": {
            url: "/api/share/friends/resource", format: function (m5r, e5j) {
                this.ckP3x(m5r, e5j)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (m5r, e5j) {
                this.z5E("onshareall", e5j.result)
            }, onerror: function (m5r, e5j) {
                this.z5E("onshareall", e5j.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (m5r, e5j) {
                e5j.options.picUrl = m5r.picUrl;
                this.bsi5n(e5j.options, e5j.result)
            }, onerror: function (m5r, e5j) {
                this.z5E("onshareall", e5j.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q5V, e5j) {
                this.oe0x("vid_info-" + e5j.data.nosKey, Q5V);
                return Q5V
            }
        }
    });
    p5u.bnp4t = NEJ.C();
    b5g = p5u.bnp4t.O5T(p5u.hd8V);
    b5g.ckO3x = function () {
        var tU2x = function (Q5V, e5j) {
            e5j.times++;
            if (e5j.times > 10) {
                this.z5E("onvinfoerror", e5j.key, Q5V)
            } else {
                setTimeout(eF7y.g5l(this, e5j), e5j.times * 1e3)
            }
        };
        var wW3x = function (Q5V, e5j) {
            this.z5E("onvinfo", e5j.key, Q5V)
        };
        var eF7y = function (e5j) {
            var V5a = e5j.url;
            v5A.br5w(V5a + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: wW3x.ec7V(this, e5j),
                onerror: tU2x.ec7V(this, e5j)
            })
        };
        return function (e5j) {
            e5j.times = 0;
            eF7y.call(this, e5j)
        }
    }();
    b5g.cuf5k = function () {
        var KU7N;
        var tU2x = function (Q5V, e5j) {
            if (Q5V.code > 0) {
                clearInterval(this.BJ4N);
                this.z5E("onviderror", e5j.data.nosKey)
            }
        };
        var wW3x = function (J5O, Q5V) {
            if (Q5V.vid && Q5V.covers) {
                clearInterval(this.BJ4N);
                this.z5E("onvid", J5O, Q5V)
            }
        };
        var eF7y = function (e5j) {
            if (+(new Date) - KU7N > 60 * 60 * 1e3) {
                clearInterval(this.BJ4N);
                this.z5E("onviderror", e5j.data.nosKey);
                return
            }
            e5j.onload = wW3x.g5l(this, e5j.data.nosKey);
            e5j.onerror = tU2x.g5l(this);
            this.cl6f("vid-get", e5j)
        };
        return function (e5j) {
            if (!e5j || !e5j.data)return;
            KU7N = +(new Date);
            this.BJ4N = clearInterval(this.BJ4N);
            this.BJ4N = setInterval(eF7y.g5l(this, e5j), 1e4);
            eF7y.apply(this, arguments)
        }
    }();
    b5g.ckM3x = function () {
        this.BJ4N = clearInterval(this.BJ4N)
    };
    b5g.ckP3x = function (m5r, mC0x) {
        if (m5r.event && mC0x.snsTypes) {
            if (mC0x.pics) {
                var bsQ5V = [];
                for (var i = 0, len = mC0x.pics.length; i < len; i++) {
                    bsQ5V[i] = mC0x.pics[i].originId
                }
                this.cl6f("share_img_compound", {data: {picIds: bsQ5V.join(",")}, options: mC0x, result: m5r})
            } else {
                mC0x.picUrl = mC0x.picUrl;
                this.bsi5n(mC0x, m5r)
            }
        } else {
            this.z5E("onshareall", m5r)
        }
        var CC5H = p5u.hK8C.B5G();
        CC5H.gl7e(mC0x.isPub ? "pubevent" : "shareevent", {id: m5r.id})
    };
    b5g.bsi5n = function (mC0x, m5r) {
        var cn6h = {};
        cn6h.eventid = m5r.event.id;
        cn6h.eventtype = m5r.event.type;
        mC0x.picUrl && (cn6h.picUrl = mC0x.picUrl);
        cn6h.snsTypes = mC0x.snsTypes;
        cn6h.msg = mC0x.data.msg || "";
        cn6h.type = mC0x.data.type;
        mC0x.data.id && (cn6h.id = mC0x.data.id);
        this.cl6f("share-sns", {data: cn6h, result: m5r})
    };
    b5g.ckK3x = function (e5j) {
        var j5o = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k5p.mU0x(5)
        };
        j5o = NEJ.EX(j5o, e5j);
        if (!(j5o.id > 0)) {
            delete j5o.id;
            j5o.type = "noresource"
        }
        if (!j5o.threadId) {
            delete j5o.threadId
        }
        if (!j5o.actId) {
            delete j5o.actId
        }
        if (!j5o.pics) {
            delete j5o.pics
        } else {
            j5o.pics = JSON.stringify(j5o.pics)
        }
        this.cl6f("share-all", {
            data: j5o,
            snsTypes: e5j.snsTypes,
            picUrl: e5j.picUrl,
            pics: e5j.pics,
            isPub: e5j.isPub
        })
    };
    b5g.ckJ3x = function (e5j) {
        this.cl6f("share-private", e5j)
    };
    b5g.ckH3x = function (e5j) {
        this.cl6f("share-all", e5j)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        p5u = c5h("nm.d"), l5q = c5h("nm.x"), b5g, K5P;
    var ckG3x = {40: !0};
    p5u.eQ7J({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e5j) {
                e5j.data.getcounts = true;
                e5j.data.pagesize = e5j.data.limit;
                if (e5j.data.offset == 0) {
                    e5j.data.lasttime = -1
                }
                delete e5j.data.offset
            }, format: function (Q5V, e5j) {
                Q5V.event = l5q.Sw8o(Q5V.event, function (r5w, s5x) {
                    return !ckG3x[r5w.type]
                });
                this.ckF3x(Q5V.event);
                e5j.data.lasttime = Q5V.lasttime;
                if (Q5V.event.length) {
                    Q5V.event.length = e5j.limit
                }
                return {list: Q5V.event, total: Q5V.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q5V, e5j) {
                return {list: Q5V.events, total: Q5V.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e5j) {
                e5j.data.pagesize = 20
            }, format: function (Q5V, e5j) {
                return Q5V.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e5j) {
                e5j.data.time = -1;
                e5j.data.getcounts = true
            }, format: function (Q5V, e5j) {
                Q5V.events.length = e5j.limit;
                return {list: Q5V.events, total: Q5V.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (m5r, e5j) {
                m5r.conf = e5j.conf;
                return m5r
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e5j, bc5h) {
                if (e5j.like) {
                    if (e5j.comment) {
                        bc5h.url = "/api/v1/comment/like"
                    } else {
                        bc5h.url = "/api/resource/like"
                    }
                    bc5h.onload = "oneventlike";
                    bc5h.onerror = "oneventlikeerr"
                } else {
                    if (e5j.comment) {
                        bc5h.url = "/api/v1/comment/unlike"
                    } else {
                        bc5h.url = "/api/resource/unlike"
                    }
                    bc5h.onload = "oneventunlike";
                    bc5h.onerror = "oneventunlikeerr"
                }
            }, format: function (m5r, e5j) {
                m5r.eid = e5j.eid;
                m5r.origin = e5j.origin;
                m5r.ext = e5j.ext;
                return m5r
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (m5r, e5j) {
                m5r.id = e5j.data.id;
                return m5r
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e5j, bc5h) {
                if (e5j.data.type == "nointer") {
                    bc5h.url = "/api/event/rcmd/reject"
                } else if (e5j.data.transcoding) {
                    bc5h.url = "/api/event/video/transcoding/delete"
                } else {
                    bc5h.url = "/api/event/delete"
                }
            }, format: function (m5r, e5j) {
                m5r.id = e5j.data.id;
                return m5r
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (m5r, e5j) {
                m5r.id = e5j.data.id;
                return m5r
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e5j) {
                e5j.data.lasttime = e5j.data.lasttime || -1;
                e5j.data.pagesize = e5j.data.limit;
                e5j.data.getcounts = true;
                delete e5j.data.offset
            }, format: function (Q5V, e5j) {
                e5j.data.lasttime = Q5V.lasttime;
                var i5n = Q5V.events;
                if (Q5V.more) i5n = this.ckE3x(i5n, e5j.data.pagesize);
                return {list: i5n, total: Q5V.size}
            }, onerror: "onlisterror"
        }
    });
    p5u.yo3x = NEJ.C();
    b5g = p5u.yo3x.O5T(p5u.hd8V);
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.biO3x = function (t5y, cG6A) {
        return t5y + "-" + cG6A
    };
    b5g.cuh5m = function (e5j) {
        this.cl6f("ievent-get", e5j)
    };
    b5g.cui5n = function (e5j) {
        this.cl6f("ievent-new-get", e5j)
    };
    b5g.cuj5o = function (e5j) {
        this.cl6f("ievent-user-get", e5j)
    };
    b5g.cul5q = function (t5y, cG6A) {
        return this.qi1x(this.biO3x(t5y, cG6A))
    };
    b5g.cum5r = function (Fi5n, e5j) {
        if (!Fi5n || !Fi5n.length)return;
        e5j = e5j || {};
        var bv5A = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, By4C = [], btN5S = [], j5o; i < Fi5n.length; ++i) {
            j5o = Fi5n[i];
            j5o = this.qi1x(this.biO3x(j5o.type, j5o.id));
            if (!j5o) {
                By4C.push(Fi5n[i].id);
                btN5S.push(bv5A[Fi5n[i].type] || 0)
            }
        }
        if (!By4C.length) {
            this.z5E("oneventresload", e5j.conf);
            return
        }
        e5j.data = {ids: JSON.stringify(By4C), types: JSON.stringify(btN5S)};
        e5j.onload = this.cky3x.g5l(this);
        this.cl6f("ievent-res-get", e5j)
    };
    b5g.cky3x = function (m5r) {
        if (m5r.code != 200) {
            this.z5E("oneventreserror", m5r.code);
            return
        }
        var bv5A = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i5n = m5r.results; i < i5n.length; ++i) {
            this.oe0x(this.biO3x(bv5A[i5n[i].type], i5n[i].id), i5n[i])
        }
        this.z5E("oneventresload", m5r.conf)
    };
    b5g.btQ5V = function (j5o) {
        var J5O = "event-list";
        this.bkm3x(J5O, j5o);
        this.z5E("onitemadd", {key: J5O, action: "add", data: j5o, flag: -1})
    };
    b5g.uU2x = function (e5j) {
        this.cl6f("ievent-like", e5j)
    };
    b5g.lA9r = function (e5j) {
        this.cl6f("ievent-delete", e5j)
    };
    b5g.ckE3x = function (i5n, fW7P) {
        for (var i = i5n.length; i < fW7P; i++)i5n.push(null);
        return i5n
    };
    b5g.ckF3x = function (i5n) {
        var m5r = [];
        if (!i5n || !i5n.length)return;
        k5p.be5j(i5n, function (d5i) {
            d5i.biData = this.btR5W(d5i)
        }, this)
    };
    b5g.btR5W = function () {
        var bhX3x = {32: "comment", 33: "activity", 34: "recomment_artist"},
            ckx3x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d5i) {
            var Q5V = {
                id: d5i.id,
                sourceid: d5i.user.userId,
                alg: d5i.rcmdInfo ? d5i.rcmdInfo.alg : null,
                contentType: bhX3x[d5i.type] || (k5p.cV6P(ckx3x, d5i.type) != -1 ? "user_event" : "other")
            };
            return Q5V
        }
    }();
    b5g.Ca5f = function (ckw3x, d5i) {
        var Q5V = this.btR5W(d5i);
        Q5V.actionType = ckw3x;
        if (window.log) log("eventclick", Q5V)
    };
    b5g.cun5s = function (e5j) {
        this.cl6f("event_latest-list", e5j)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        v5A = c5h("nej.j"), bI6C = c5h("nej.ui"), l5q = c5h("nm.x"), L5Q = c5h("nm.w"), b5g, K5P;
    L5Q.Yu0x = NEJ.C();
    b5g = L5Q.Yu0x.O5T(bI6C.eq7j);
    K5P = L5Q.Yu0x.cg6a;
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        var gC7v = e5j.box || Y5d;
        a4e.fy7r(this.o5t, {
            position: "absolute",
            width: gC7v.width + "px",
            height: gC7v.height + "px",
            top: gC7v.top + "px",
            left: gC7v.left + "px"
        });
        window.uploader = this
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    b5g.lS0x = function (d5i) {
        this.z5E("onselect", d5i);
        console.log("select", d5i)
    };
    b5g.rk1x = function (d5i) {
        this.z5E("onprogress", d5i);
        console.log("progress", d5i)
    };
    b5g.tj1x = function (d5i) {
        if (d5i.code == 200) {
            this.z5E("oncomplete", d5i)
        } else {
            this.eo7h(d5i)
        }
        console.log("complete", d5i)
    };
    b5g.eo7h = function (d5i) {
        this.z5E("onerror", d5i);
        console.log("error", d5i)
    };
    b5g.fZ7S = bm5r;
    b5g.cku3x = bm5r
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), v5A = c5h("nej.j"),
        bI6C = c5h("nej.ui"), l5q = c5h("nm.x"), L5Q = c5h("nm.w"), gb7U = c5h("cb"), b5g, K5P;
    L5Q.bhz3x = NEJ.C();
    b5g = L5Q.bhz3x.O5T(L5Q.Yu0x);
    K5P = L5Q.bhz3x.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        var J5O = k5p.mU0x(8), je9V = "onselect" + J5O, jq9h = "onprogress" + J5O, buI5N = "oncomplete" + J5O,
            bQ6K = "onerror" + J5O;
        gb7U[je9V] = this.lS0x.g5l(this);
        gb7U[jq9h] = this.rk1x.g5l(this);
        gb7U[buI5N] = this.tj1x.g5l(this);
        gb7U[bQ6K] = this.eo7h.g5l(this);
        var ckt3x = "/style/swf/MusicUpload.swf?v=20150202",
            bv5A = {music: "音频(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;"}, lR0x = {
                url: e5j.api,
                token: e5j.token,
                filter: bv5A[e5j.accept] || e5j.accept || e5j.flashAccept || "",
                multiple: e5j.multiple,
                error: "cb." + bQ6K,
                select: "cb." + je9V,
                progress: "cb." + jq9h,
                complete: "cb." + buI5N
            };
        this.oM0x = a4e.qC1x({
            src: ckt3x,
            hidden: false,
            parent: this.o5t,
            onready: this.Jv6p.g5l(this),
            width: e5j.box.width,
            height: e5j.box.height,
            params: {flashvars: k5p.vt2x(lR0x, "&", false), allowscriptaccess: "always", wmode: "transparent"}
        })
    };
    b5g.bC5H = function () {
        this.bH6B();
        this.o5t.innerHTML = ""
    };
    b5g.Jv6p = function (hc8U) {
        this.oM0x = hc8U
    };
    b5g.fZ7S = function (ix9o) {
        this.oM0x.upload(ix9o)
    };
    b5g.cku3x = function () {
        this.oM0x.cancle()
    };
    b5g.pV1x = function (Cn5s) {
        this.oM0x.disable(Cn5s)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, dP7I = c5h("nej.g"), a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        v5A = c5h("nej.j"), bI6C = c5h("nej.ui"), l5q = c5h("nm.x"), L5Q = c5h("nm.w"), b5g, K5P;
    var hO8G = a4e.rH1x(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var fY7R = a4e.hV8N('<div class="' + hO8G + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L5Q.beE2x = NEJ.C();
    b5g = L5Q.beE2x.O5T(L5Q.Yu0x);
    K5P = L5Q.beE2x.cg6a;
    b5g.bZ6T = function () {
        this.kU9L = hO8G;
        this.ca6U = fY7R
    };
    b5g.bR6L = function () {
        this.cb6V();
        var bo5t = a4e.cQ6K(this.o5t);
        this.bw5B = bo5t[0];
        h5m.q5v(this.bw5B.uploadfile, "change", this.pZ1x.g5l(this))
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.ckr3x = e5j.api || "";
        this.YV1x = e5j.multiple;
        this.bw5B.multiple = this.YV1x ? "coverImgUrl" : "";
        this.bw5B.reset();
        this.YW1x = [];
        this.Zc1x = {};
        var bv5A = {music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*"};
        if (e5j.accept || e5j.htmlAccept) {
            this.bw5B.uploadfile.accept = bv5A[e5j.accept] || e5j.accept || e5j.htmlAccept
        }
        if (e5j.tipTitle) {
            this.bw5B.uploadfile.title = e5j.tipTitle
        }
    };
    b5g.bC5H = function () {
        this.bH6B();
        this.bcq2x();
        this.bw5B.reset();
        delete this.YW1x;
        delete this.Zc1x;
        this.bw5B.uploadfile.accept = "*"
    };
    b5g.pZ1x = function (d5i) {
        var bvD5I = this.bw5B.uploadfile.files, bvE5J = [];
        if (!this.YV1x) {
            this.YW1x = [];
            this.Zc1x = {}
        }
        for (var i = 0, ii = bvD5I.length; i < ii; i++) {
            var Ze1x = this.ckq3x(bvD5I[i]);
            this.YW1x.push(Ze1x);
            this.Zc1x[Ze1x.uuid] = Ze1x;
            bvE5J.push(Ze1x);
            if (!this.YV1x)break
        }
        this.lS0x(bvE5J);
        this.bw5B.reset()
    };
    b5g.bcq2x = function () {
        if (this.bvN5S) {
            this.bvO5T = true;
            v5A.js9j(this.EY5d);
            this.bvO5T = false;
            delete this.bvN5S;
            delete this.EY5d
        }
    };
    b5g.ckq3x = function (dw7p) {
        return {uuid: "file-" + +(new Date) + k5p.mU0x(5), name: dw7p.name, size: dw7p.size, refernce: dw7p}
    };
    b5g.fZ7S = function (ix9o) {
        this.bcq2x();
        var dw7p = this.YV1x ? this.Zc1x[ix9o] : this.YW1x[0], j5o = new FormData, nr0x = {};
        if (dw7p) {
            nr0x[dP7I.wI3x] = dP7I.CB5G;
            j5o.append("fileupload", dw7p.refernce);
            this.bvN5S = dw7p;
            this.EY5d = v5A.br5w(this.ckr3x, {
                type: "json",
                method: "post",
                headers: nr0x,
                data: j5o,
                timeout: 0,
                onload: this.yV4Z.g5l(this, ix9o),
                onerror: this.yV4Z.g5l(this, ix9o),
                onuploading: this.ckp3x.g5l(this, ix9o)
            })
        }
    };
    b5g.yV4Z = function (ix9o, d5i) {
        d5i.uuid = ix9o;
        if (d5i.code == 200) {
            this.tj1x(d5i)
        } else {
            if (!this.bvO5T) {
                this.eo7h(d5i)
            }
        }
    };
    b5g.ckp3x = function (ix9o, d5i) {
        d5i.uuid = ix9o;
        this.rk1x(d5i)
    };
    b5g.cko3x = function () {
        this.bcq2x()
    };
    b5g.pV1x = function (Cn5s) {
        if (Cn5s) {
            this.bp5u()
        } else {
            this.M5R()
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, L5Q = c5h("nm.w"), ckn3x = typeof FormData != "undefined";
    L5Q.CF5K = NEJ.C();
    L5Q.CF5K.O5T(ckn3x ? L5Q.beE2x : L5Q.bhz3x)
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), dP7I = c5h("nej.g"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        fc7V = c5h("nej.n"), H5M = c5h("nej.ut"), bd5i = c5h("nej.ui"), D5I = c5h("nm.w"), n5s = c5h("nm.l"),
        p5u = c5h("nm.d"), l5q = c5h("nm.x"), L5Q = c5h("nm.x.f"), b5g, K5P,
        bpa4e = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, boy4C = 5 * 1024 * 1024, cuo5t = 80,
        ckl3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D5I.bwe5j = NEJ.C();
    b5g = D5I.bwe5j.O5T(H5M.xi3x);
    b5g.bay1x = function () {
        return {x: this.zs4w.clientWidth - this.o5t.offsetWidth, y: this.zs4w.clientHeight - this.o5t.offsetHeight}
    };
    D5I.bog4k = NEJ.C();
    b5g = D5I.bog4k.O5T(bd5i.eq7j);
    b5g.bZ6T = function () {
        this.ca6U = "m-xwgt-share-upload"
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.Zk1x = i5n.shift();
        this.CL5Q = i5n.shift();
        this.ON8F = i5n.shift();
        this.ckj3x = {
            onselect: this.bws5x.ec7V(this, 0),
            onerror: this.eo7h.g5l(this),
            oncomplete: this.tj1x.g5l(this),
            multiple: true,
            parent: this.CL5Q,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {width: 60, height: 60, top: 0, left: 0},
            tipTitle: "上传图片"
        };
        this.bwt5y = {
            onselect: this.bws5x.ec7V(this, 1),
            onerror: this.eo7h.g5l(this),
            oncomplete: this.tj1x.g5l(this),
            multiple: true,
            parent: this.CL5Q,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {width: 20, height: 20, top: 0, left: 0},
            tipTitle: "上传图片"
        };
        this.cki3x = D5I.CF5K.B5G(this.ckj3x)
    };
    b5g.bC5H = function () {
        h5m.iA9r(this.ri1x, "click");
        if (!!this.fk7d) {
            for (var i = this.fk7d.length - 1; i >= 0; i--) {
                a4e.cE6y(this.fk7d[i].element, false);
                if (this.fk7d[i].dragger) this.fk7d[i].dragger.S5X()
            }
        }
        this.fk7d = [];
        this.Zn1x = {};
        if (this.zh4l) {
            clearTimeout(this.zh4l)
        }
        this.zh4l = 0;
        this.ES5X && this.ES5X.S5X();
        delete this.ES5X;
        this.bH6B()
    };
    b5g.bws5x = function (i5n, s5x) {
        if (!i5n)return;
        for (var i = 0, len = i5n.length; i < len; i++) {
            if (!ckl3x.test(i5n[i].name)) {
                this.bhP3x({path: i5n[i].name, index: s5x, uuid: i5n[i].uuid, status: -4, fail: "这不是<br>图片"})
            } else if (i5n[i].size > boy4C) {
                this.bhA3x(-3);
                this.bhP3x({path: i5n[i].name, index: s5x, uuid: i5n[i].uuid, status: -3, fail: "上传<br>失败"})
            } else {
                this.bhP3x({path: i5n[i].name, index: s5x, uuid: i5n[i].uuid, status: 0})
            }
        }
    };
    b5g.eo7h = function (d5i) {
        var dw7p = this.Zn1x[d5i.uuid];
        dw7p.status = -4;
        dw7p.fail = "上传<br>失败";
        this.bwL5Q(dw7p);
        this.zl4p()
    };
    b5g.tj1x = function (d5i) {
        var dw7p = this.Zn1x[d5i.uuid];
        dw7p.status = 2;
        var bt5y = NEJ.X({}, d5i.picInfo);
        bt5y.originId = bt5y.originIdStr;
        bt5y.squareId = bt5y.squareIdStr;
        bt5y.rectangleId = bt5y.rectangleIdStr;
        bt5y.pcSquareId = bt5y.pcSquareIdStr;
        bt5y.pcRectangleId = bt5y.pcRectangleIdStr;
        bt5y.originJpgId = bt5y.originJpgIdStr || bt5y.originJpgId;
        dw7p.picInfo = bt5y;
        dw7p.picUrl = d5i.picInfo.pcSquareUrl;
        this.bwL5Q(dw7p);
        this.zl4p()
    };
    b5g.bhP3x = function (dw7p) {
        if (this.fk7d.length >= 9) {
            this.bhA3x(-10, 3e3, this.bwT6N.g5l(this));
            return
        }
        this.ckh3x(dw7p);
        this.fk7d.push(dw7p);
        this.Zn1x[dw7p.uuid] = dw7p;
        if (!!this.fk7d.length) {
            this.o5t.style.display = ""
        }
        if (this.fk7d.length >= 9) {
            this.CL5Q.style.display = "none"
        } else {
            this.CL5Q.style.display = ""
        }
        this.zl4p()
    };
    b5g.zl4p = function () {
        var bhs3x = -1, bxc6W = 0;
        for (var i = 0, l = this.fk7d.length; i < l; i++) {
            if (this.fk7d[i].status == 1) {
                return
            }
            if (this.fk7d[i].status == 0 && bhs3x < 0) {
                bhs3x = i
            }
            if (this.fk7d[i].status == 2 || this.fk7d[i].status < 0) {
                bxc6W++
            }
        }
        var r5w = this.fk7d[bhs3x];
        if (r5w) {
            (r5w.index == 0 ? this.cki3x : this.ES5X).fZ7S(r5w.uuid);
            r5w.status = 1;
            this.z5E("onstartupload", {})
        } else if (bxc6W == this.fk7d.length) {
            this.z5E("onfinishupload", {})
        }
    };
    b5g.bhA3x = function (s5x, jS9J, gb7U) {
        if (this.NK7D < s5x) {
            return
        }
        if (this.zh4l) {
            clearTimeout(this.zh4l);
            this.zh4l = 0
        }
        if (jS9J) {
            this.ON8F.innerText = bpa4e[s5x * 1];
            this.NK7D = s5x;
            this.zh4l = setTimeout(this.Zt1x.g5l(this, s5x, gb7U), jS9J)
        } else {
            this.ON8F.innerText = bpa4e[s5x];
            this.NK7D = s5x
        }
        this.ON8F.style.display = ""
    };
    b5g.Zt1x = function (s5x, gb7U) {
        if (s5x && this.NK7D !== s5x) {
            return
        }
        this.NK7D = 0;
        this.ON8F.innerText = bpa4e[0];
        this.ON8F.style.display = "none";
        gb7U && gb7U()
    };
    b5g.ckh3x = function (dw7p) {
        var j5o = {};
        if (dw7p.fail) {
            j5o.fail = dw7p.fail
        }
        var dq6k = a4e.bP6J("m-xwgt-share-upload-preview", j5o);
        dw7p.element = a4e.na0x(dq6k);
        h5m.q5v(a4e.I5N(dw7p.element, "del")[0], "mousedown", this.ckg3x.g5l(this, dw7p), false);
        this.Zk1x.insertBefore(dw7p.element, this.Zk1x.lastElementChild);
        dw7p.dragger = D5I.bwe5j.B5G({
            view: this.Zk1x.parentNode,
            body: dw7p.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.QY8Q.g5l(this, dw7p),
            onchange: this.ckf3x.g5l(this, dw7p),
            ondragend: this.baC1x.g5l(this, dw7p)
        })
    };
    b5g.bwL5Q = function (dw7p) {
        if (!dw7p || !dw7p.element) {
            return false
        }
        var j5o = {};
        if (dw7p.fail) {
            j5o.fail = dw7p.fail
        } else {
            j5o.url = dw7p.picUrl
        }
        a4e.x5C(dw7p.element, "z-fail");
        dw7p.element.firstChild.outerHTML = a4e.bP6J("m-xwgt-share-upload-preview-img", j5o)
    };
    b5g.QY8Q = function (r5w, jM9D) {
        a4e.x5C(r5w.element, "z-sel")
    };
    b5g.ckf3x = function (r5w, jM9D) {
        var cup5u, gy7r = this.fk7d.length - 1, od0x;
        for (var i = gy7r; i >= 0; i--) {
            a4e.w5B(this.fk7d[i].element, "z-jump");
            if (this.fk7d[i] == r5w) {
                od0x = i
            } else {
                a4e.fy7r(this.fk7d[i].element, {left: "", top: ""})
            }
        }
        var Ng7Z = {x: 46 + 92 * (od0x % 5) + jM9D.left, y: 46 + 92 * (od0x / 5 >> 0) + jM9D.top};
        var beD2x = Ng7Z.x / 92 >> 0, bek2x = Ng7Z.y / 92 >> 0, wY3x = Math.max(0, Math.min(gy7r, bek2x * 5 + beD2x));
        if (wY3x == od0x) {
            return
        }
        var ckd3x = wY3x < od0x;
        for (var i = Math.min(wY3x, od0x); i <= Math.max(wY3x, od0x); i++) {
            if (i !== od0x) {
                var bxE6y = i % 5;
                if (ckd3x) {
                    if (bxE6y == 4) {
                        a4e.fy7r(this.fk7d[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a4e.fy7r(this.fk7d[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bxE6y == 0) {
                        a4e.fy7r(this.fk7d[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a4e.fy7r(this.fk7d[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b5g.baC1x = function (r5w, jM9D) {
        var cuq5v, gy7r = this.fk7d.length - 1, od0x;
        for (var i = gy7r; i >= 0; i--) {
            a4e.fy7r(this.fk7d[i].element, {left: "", top: ""});
            if (this.fk7d[i] == r5w) {
                od0x = i
            }
        }
        a4e.w5B(r5w.element, "z-sel");
        var Ng7Z = {x: 46 + 92 * (od0x % 5) + jM9D.left, y: 46 + 92 * (od0x / 5 >> 0) + jM9D.top};
        var beD2x = Ng7Z.x / 92 >> 0, bek2x = Ng7Z.y / 92 >> 0, wY3x = Math.max(0, Math.min(gy7r, bek2x * 5 + beD2x));
        if (wY3x == od0x) {
            return
        }
        this.Zk1x.insertBefore(r5w.element, (this.fk7d[wY3x + (wY3x > od0x ? 1 : 0)] || {}).element || this.CL5Q);
        this.fk7d.splice(od0x, 1);
        this.fk7d.splice(wY3x, 0, r5w)
    };
    b5g.ckg3x = function (r5w, d5i) {
        a4e.cE6y(r5w.element, false);
        if (r5w.dragger) r5w.dragger.S5X();
        delete r5w.dragger;
        var s5x = -1;
        for (var i = this.fk7d.length - 1; i >= 0; i--) {
            if (this.fk7d[i] == r5w) {
                s5x = i;
                break
            }
        }
        this.fk7d.splice(s5x, s5x >= 0 ? 1 : 0);
        delete r5w;
        if (this.fk7d.length >= 9) {
            this.CL5Q.style.display = "none"
        } else {
            this.CL5Q.style.display = ""
        }
        if (!this.fk7d.length) {
            this.o5t.style.display = "none";
            this.Zt1x(0)
        } else {
            this.bwT6N()
        }
        this.zl4p()
    };
    b5g.bwT6N = function () {
        var bxG6A = false;
        for (var i = 0, len = this.fk7d.length; i < len; i++) {
            if (this.fk7d[i].status == -3) {
                bxG6A = true
            }
        }
        if (bxG6A) {
            this.bhA3x(-3)
        } else {
            this.Zt1x(-3)
        }
    };
    b5g.Mo7h = function () {
        var ea7T = [];
        for (var i = this.fk7d.length - 1; i >= 0; i--) {
            if (this.fk7d[i].status == 2) {
                ea7T.unshift(this.fk7d[i].picInfo)
            }
        }
        return ea7T
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.bwt5y.parent = e5j.button;
        this.ES5X && this.ES5X.S5X();
        this.ES5X = D5I.CF5K.B5G(this.bwt5y);
        this.o5t.style.display = "none";
        if (!!this.fk7d) {
            for (var i = this.fk7d.length - 1; i >= 0; i--) {
                a4e.cE6y(this.fk7d[i].element, false);
                if (this.fk7d[i].dragger) this.fk7d[i].dragger.S5X()
            }
        }
        this.fk7d = [];
        this.Zn1x = {};
        if (this.zh4l) {
            clearTimeout(this.zh4l)
        }
        this.Zt1x(0);
        this.NK7D = 0
    };
    H5M.fr7k.B5G({element: D5I.bog4k, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, eY7R = NEJ.R, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        bd5i = c5h("nej.ui"), N5S = c5h("nej.ut"), b5g, K5P;
    if (!!N5S.mV0x)return;
    N5S.mV0x = NEJ.C();
    b5g = N5S.mV0x.O5T(N5S.Xg0x);
    K5P = N5S.mV0x.cg6a;
    b5g.bk5p = function (e5j) {
        this.ckb3x(e5j.more);
        this.Zz1x = a4e.y5D(e5j.sbody);
        this.bT6N([[this.Zz1x, "scroll", this.cjZ3x.g5l(this)]]);
        var df6Z = e5j.delta;
        if (df6Z == null) df6Z = 30;
        this.KM7F = Math.max(0, df6Z);
        var cv6p = parseInt(e5j.count) || 0;
        this.iI9z = Math.max(0, cv6p);
        var ft7m = parseInt(e5j.number) || 0;
        if (ft7m > 1 && ft7m <= cv6p) {
            this.zf4j = ft7m
        }
        this.bl5q(e5j)
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.zz4D;
        delete this.Zz1x;
        delete this.rR1x;
        delete this.ZC1x
    };
    b5g.xU3x = function (bj5o, bq5v) {
        var bE5J = this.wH3x + (this.iI9z - 1) * this.qS1x, fW7P = this.iI9z * this.qS1x;
        return K5P.xU3x.call(this, bE5J, bj5o, fW7P, bq5v)
    };
    b5g.ckb3x = function (ZG1x) {
        this.zz4D = a4e.y5D(ZG1x);
        this.bT6N([[this.zz4D, "click", this.nz0x.g5l(this)]])
    };
    b5g.bir3x = function (E5J) {
        E5J = E5J || {};
        if (this.rR1x || !E5J)return;
        if (!E5J.scrollHeight) E5J = a4e.oz0x();
        var bj5o = a4e.hL8D(this.hX8P), df6Z = bj5o.y + this.hX8P.offsetHeight - E5J.scrollTop - E5J.clientHeight,
            biq3x = E5J.scrollHeight <= E5J.clientHeight;
        if (df6Z <= this.KM7F || biq3x && !this.rR1x) {
            this.nz0x()
        }
    };
    b5g.cjZ3x = function (d5i) {
        if (this.rR1x)return;
        this.bir3x(h5m.U5Z(d5i))
    };
    b5g.xR3x = function (d5i) {
        K5P.xR3x.apply(this, arguments);
        if (!d5i.stopped) {
            this.Ok7d();
            var bj5o = 0;
            if (d5i.index > 1) {
                bj5o = this.wH3x + ((d5i.index - 1) * this.iI9z - 1) * this.qS1x
            }
            this.hQ8I = bj5o;
            this.nz0x()
        }
    };
    b5g.bKg8Y = function (e5j) {
        if (!!this.zf4j) {
            var df6Z = e5j.offset > 0 ? this.qS1x : this.wH3x, fW7P = df6Z + this.qS1x * (this.zf4j - 1);
            this.hQ8I = e5j.offset + fW7P;
            e5j.data.limit = fW7P;
            e5j.limit = fW7P;
            delete this.zf4j
        }
        return e5j
    };
    b5g.bhN3x = function (e5j) {
        delete this.ZC1x;
        K5P.bhN3x.apply(this, arguments);
        this.byu6o()
    };
    b5g.bhH3x = function (d5i) {
        if (d5i.key != this.ik8c.key)return;
        switch (d5i.action) {
            case"refresh":
            case"append":
                delete this.ZC1x;
                break
        }
        K5P.bhH3x.apply(this, arguments)
    };
    b5g.Nl7e = function () {
        this.wz3x("onbeforelistload", "列表加载中...");
        a4e.X5c(this.zz4D, "display", "none")
    };
    b5g.bfD2x = function (i5n, bj5o, fW7P) {
        var bq5v = i5n.length, bil3x = i5n.loaded ? bj5o + fW7P >= bq5v : bj5o + fW7P > bq5v;
        this.hQ8I = Math.min(this.hQ8I, bq5v);
        a4e.X5c(this.zz4D, "display", bil3x ? "none" : "");
        if (bil3x) this.rR1x = !0;
        if (this.iI9z > 0) {
            var bt5y = this.xU3x(bj5o, i5n.length);
            if (this.bKG8y(bt5y.index, bt5y.total))return !0;
            var df6Z = this.wH3x - this.qS1x, ft7m = this.iI9z * this.qS1x;
            this.rR1x = (bj5o + fW7P - df6Z) % ft7m == 0 || bil3x;
            a4e.X5c(this.zz4D, "display", this.rR1x ? "none" : "");
            this.bgZ2x(this.rR1x && bt5y.total > 1 ? "" : "none")
        }
    };
    b5g.bfG2x = function () {
        this.hQ8I = 0;
        this.rR1x = !0;
        this.wz3x("onemptylist", "没有列表数据！")
    };
    b5g.Ne7X = function (dq6k, jM9D) {
        this.hX8P.insertAdjacentHTML(jM9D || "beforeEnd", dq6k)
    };
    b5g.Nc7V = function (gx7q) {
        this.fe7X = this.fe7X || [];
        if (k5p.ep7i(gx7q)) {
            eY7R.push.apply(this.fe7X, gx7q)
        } else {
            this.fe7X.push(gx7q)
        }
    };
    b5g.Xp0x = function (d5i) {
        a4e.lV0x(this.ch6b);
        this.MN7G(d5i, "onafteradd");
        var ex7q = d5i.flag;
        if (d5i.stopped || !ex7q)return;
        if (this.iI9z > 0) {
            this.bgM2x();
            return
        }
        this.hQ8I += 1;
        ex7q == -1 ? this.bds2x(d5i.data) : this.bLv8n(d5i.data)
    };
    b5g.Xr0x = function (d5i) {
        this.MN7G(d5i, "onafterdelete");
        if (d5i.stopped)return;
        if (this.iI9z > 0) {
            this.bgM2x();
            return
        }
        var C5H = d5i.data[this.eK7D.pkey];
        if (!!this.fe7X) {
            var r5w = a4e.bCX7Q(C5H), s5x = k5p.cV6P(this.fe7X, r5w);
            if (s5x >= 0) {
                this.fe7X.splice(s5x, 1);
                this.hQ8I -= 1
            }
            if (!!r5w) r5w.S5X()
        } else {
            var f5k = a4e.y5D(this.bIn8f(C5H));
            if (!!f5k) this.hQ8I -= 1;
            a4e.cE6y(f5k)
        }
        if (this.hQ8I <= 0) this.nz0x()
    };
    b5g.bef2x = function (bj5o, fW7P) {
        if (bj5o != this.hQ8I)return;
        if (this.Tw9n()) {
            this.rR1x = !1;
            this.byu6o()
        }
    };
    b5g.bdK2x = function (bj5o, fW7P) {
        if (bj5o != 0)return;
        var Iv6p = this.P5U.gS8K(this.ik8c.key);
        for (var i = fW7P - 1; i >= 0; i--) {
            this.bds2x(Iv6p[i])
        }
    };
    b5g.byu6o = function () {
        var E5J = this.Zz1x;
        if (!E5J || this.rR1x)return;
        this.bir3x(this.Zz1x)
    };
    b5g.go7h = function () {
        delete this.rR1x;
        K5P.go7h.apply(this, arguments)
    };
    b5g.nz0x = function () {
        if (!!this.ZC1x)return;
        this.ZC1x = !0;
        var bj5o = this.hQ8I;
        this.hQ8I += bj5o == 0 ? this.wH3x : this.qS1x;
        this.bKc8U(bj5o)
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), k5p = c5h("nej.u"), h5m = c5h("nej.v"), cP6J = c5h("nej.x"),
        N5S = c5h("nej.ut"), b5g;
    if (!!N5S.Dv5A)return;
    N5S.Dv5A = NEJ.C();
    b5g = N5S.Dv5A.O5T(N5S.cz6t);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.ie8W = e5j.event || "click";
        this.jC9t = e5j.selected || "js-selected";
        this.mI0x = e5j.disabled || "js-disabled";
        this.byy6s = !!e5j.inverse;
        this.cjY3x(e5j.list);
        this.EI5N(e5j.index || 0)
    };
    b5g.bC5H = function () {
        var cjX3x = function (f5k) {
            this.bft2x(f5k, !1)
        };
        return function () {
            this.bH6B();
            k5p.be5j(this.bU6O, cjX3x, this);
            delete this.bU6O;
            delete this.ie8W;
            delete this.co6i;
            delete this.mI0x;
            delete this.jC9t;
            delete this.byy6s
        }
    }();
    b5g.cjY3x = function () {
        var bmS4W = function (r5w) {
            if (!r5w)return;
            this.bU6O.push(r5w);
            var s5x = this.bU6O.length - 1, db6V = this.bcf2x[s5x];
            if (!db6V) {
                db6V = this.EI5N.g5l(this, s5x);
                this.bcf2x[s5x] = db6V
            }
            this.bT6N([[r5w, this.ie8W, db6V]])
        };
        return function (i5n) {
            this.bU6O = [];
            if (!this.bcf2x) this.bcf2x = [];
            k5p.be5j(i5n, bmS4W, this)
        }
    }();
    b5g.bft2x = function (E5J, cjV3x) {
        !!cjV3x && !this.byy6s ? a4e.x5C(E5J, this.jC9t) : a4e.w5B(E5J, this.jC9t)
    };
    b5g.EI5N = function (s5x, Jj6d, j5o) {
        var E5J = this.bU6O[s5x];
        if (Jj6d != !0 && (s5x == this.co6i || !E5J || a4e.by5D(E5J, this.mI0x))) {
            h5m.cd6X(arguments[1]);
            return this
        }
        var d5i = {index: s5x, last: this.co6i, list: this.nj0x(), data: j5o || a4e.u5z(E5J, "value")};
        this.co6i = s5x;
        E5J = this.bU6O[d5i.last];
        if (!!E5J) this.bft2x(E5J, !1);
        E5J = this.bU6O[this.co6i];
        this.bft2x(E5J, !0);
        this.z5E("onchange", d5i);
        if (!d5i.nostop) h5m.cd6X(arguments[1]);
        return this
    };
    b5g.rC1x = function () {
        return this.co6i
    };
    b5g.nj0x = function () {
        return this.bU6O
    };
    a4e.cjU3x = cP6J.cjU3x = function (bB5G, e5j) {
        var C5H = a4e.ks9j(bB5G);
        if (!C5H)return null;
        if (!N5S.Vn9e(C5H, N5S.Dv5A)) {
            e5j = e5j || {};
            e5j.list = !e5j.clazz ? a4e.cQ6K(C5H) : a4e.I5N(C5H, e5j.clazz);
            delete e5j.clazz
        }
        return N5S.Vn9e(C5H, N5S.Dv5A, e5j || Y5d)
    };
    cP6J.isChange = !0
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, k5p = c5h("nej.u"), v5A = c5h("nej.j"), l5q = c5h("nm.x");
    var SETTING_KEY = "player-setting";
    var lZ0x = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    lZ0x = v5A.tD1x(SETTING_KEY) || lZ0x;
    l5q.bpe4i = function () {
        return lZ0x
    };
    l5q.EG5L = function (DG5L) {
        if (DG5L) {
            lZ0x = DG5L;
            v5A.uk2x(SETTING_KEY, DG5L)
        }
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), H5M = c5h("nej.ut"),
        l5q = c5h("nm.x"), p5u = c5h("nm.d"), gP8H = c5h("nm.w.player.log");
    var kB9s = p5u.hK8C.B5G();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var mm0x = function (t5y, bF6z, pL0x) {
        var cY6S = l5q.eQ7J("{0} {1} {2}", k5p.iU9L(new Date, "yyyy-MM-dd HH:mm:ss"), t5y, bF6z);
        if (pL0x == LogLevel.ERROR) {
            kB9s.gl7e("playerror", {message: bF6z})
        }
        if (pL0x >= LogLevel.INFO) {
            kB9s.cqM5R(cY6S)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cY6S)
        }
    };
    gP8H.bX6R = function () {
        mm0x("PLAY_ERROR", l5q.eQ7J.apply(null, arguments), LogLevel.ERROR)
    };
    gP8H.oD0x = function () {
        mm0x("PLAY_INFO", l5q.eQ7J.apply(null, arguments), LogLevel.INFO)
    };
    gP8H.cut5y = function () {
        mm0x("PLAY_DEBUG", l5q.eQ7J.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), H5M = c5h("nej.ut"), k5p = c5h("nej.u"), D5I = c5h("nm.w"),
        gb7U = c5h("flash.cb");
    var dF7y = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var DL5Q, ZN1x, sL1x;
    D5I.cjS3x = function (t5y, dn6h) {
        if (t5y != "flash") {
            if (!DL5Q) {
                DL5Q = a4e.cU6O("audio");
                k5p.be5j(dF7y, function (t5y) {
                    h5m.q5v(DL5Q, t5y, onMediaCallBack)
                })
            }
            if (DL5Q && DL5Q.canPlayType && DL5Q.canPlayType("audio/mpeg")) {
                dn6h(new MediaWrap("audio"));
                return
            }
        }
        if (!ZN1x) {
            a4e.qC1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hc8U) {
                    ZN1x = hc8U;
                    k5p.be5j(dF7y, function (t5y) {
                        gb7U[t5y] = onMediaCallBack;
                        ZN1x.addCallback(t5y, "flash.cb." + t5y)
                    });
                    dn6h(new MediaWrap("flash"))
                }.g5l(this)
            })
        } else {
            dn6h(new MediaWrap("flash"))
        }
    };
    function MediaWrap(DP5U) {
        var lC9t;
        H5M.fr7k.B5G({element: this, event: dF7y.concat(["interrupt", "recover"])});
        lC9t = DP5U == "audio" ? DL5Q : ZN1x;
        this.type = DP5U;
        this.destroy = function () {
        };
        this.setSrc = function (V5a) {
            if (sL1x != this) {
                var gy7r = sL1x;
                if (gy7r) {
                    gy7r.interrupt()
                }
                sL1x = this
            }
            if (DP5U == "flash") {
                lC9t.setSrc(V5a)
            } else {
                lC9t.src = V5a
            }
        };
        this.play = function () {
            if (sL1x != this) {
                var gy7r = sL1x;
                if (gy7r) {
                    gy7r.interrupt();
                    sL1x = this;
                    this.recover()
                } else {
                    sL1x = this
                }
            }
            if (DP5U == "flash") {
                lC9t.as_play()
            } else {
                lC9t.play()
            }
        };
        this.pause = function () {
            if (sL1x != this)return;
            if (DP5U == "flash") {
                lC9t.as_pause()
            } else {
                lC9t.pause()
            }
        };
        this.load = function () {
            if (sL1x != this)return;
            if (DP5U == "flash") {
                lC9t.as_load()
            } else {
                lC9t.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lC9t
        };
        var nh0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k5p.be5j(nh0x, function (T5Y) {
            var NS7L = "get" + T5Y, NN7G = "set" + T5Y;
            if (DP5U == "flash") {
                if (!this[NS7L]) {
                    this[NS7L] = function () {
                        return lC9t[NS7L]()
                    }
                }
                if (!this[NN7G]) {
                    this[NN7G] = function (value) {
                        lC9t[NN7G](value)
                    }
                }
            } else {
                var bzx6r = T5Y.slice(0, 1).toLowerCase() + T5Y.slice(1);
                if (!this[NS7L]) {
                    this[NS7L] = function () {
                        return lC9t[bzx6r]
                    }
                }
                if (!this[NN7G]) {
                    this[NN7G] = function (value) {
                        lC9t[bzx6r] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d5i) {
        if (sL1x) {
            h5m.z5E(sL1x, d5i.type, d5i)
        }
    }
})();
(function () {
    var c5h = NEJ.P, h5m = c5h("nej.v"), v5A = c5h("nej.j"), H5M = c5h("nej.ut"), cK6E = c5h("nej.p"),
        D5I = c5h("nm.w"), l5q = c5h("nm.x"), gP8H = c5h("nm.w.player.log"), b5g;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bzz6t = false;
    D5I.fi7b = NEJ.C();
    b5g = D5I.fi7b.O5T(H5M.cz6t);
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.cs6m = {};
        this.ZQ1x(e5j.media);
        v5A.br5w("/api/cdns", {
            type: "json", onload: function (d5i) {
                if (d5i.code) {
                    this.oN0x = d5i.data
                }
            }.g5l(this)
        })
    };
    b5g.bC5H = function () {
        this.bH6B();
        delete this.cs6m
    };
    b5g.ZS1x = function (bf5k) {
        if (!bf5k)return;
        var Ae4i = this.cs6m.volume;
        if (this.dA7t) {
            this.dA7t.pause()
        }
        this.cs6m = {time: 0, id: bf5k.id, duration: bf5k.duration / 1e3, play: this.cs6m.play, stalledRetryCount: 0};
        if (Ae4i != null) {
            this.cs6m.volume = Ae4i
        }
        this.cs6m.loadState = LoadState.LOAD_START;
        this.bzS6M(bf5k.id);
        gP8H.oD0x("play song id: {0}", bf5k.id)
    };
    b5g.eN7G = function () {
        if (this.cs6m.error) {
            this.cs6m.error = null;
            if (this.cs6m.error == ErrorType.INFO_GET_ERR || this.bzV6P()) {
                this.bzX6R()
            } else {
                this.MU7N()
            }
        } else {
            if (this.dA7t) {
                this.dA7t.play()
            }
        }
        this.cs6m.play = true;
        this.og0x("play")
    };
    b5g.fs7l = function () {
        if (this.dA7t) {
            this.dA7t.pause()
        }
        this.cs6m.play = false;
        this.og0x("pause")
    };
    b5g.nO0x = function (bA5F) {
        if (this.dA7t) {
            this.dA7t.setCurrentTime(bA5F)
        }
        this.cs6m.time = bA5F;
        gP8H.oD0x("seek to: {0}", bA5F)
    };
    b5g.bcc2x = function () {
        return this.cs6m.duration || 0
    };
    b5g.uA2x = function () {
        return !!this.cs6m.play
    };
    b5g.lx9o = function (LU7N) {
        this.cs6m.volume = LU7N;
        if (this.dA7t) {
            this.dA7t.setVolume(LU7N)
        }
    };
    b5g.boa4e = function () {
        return this.cs6m.time
    };
    b5g.ZQ1x = function (t5y) {
        D5I.cjS3x(t5y, function (lC9t) {
            this.dA7t = lC9t;
            gP8H.oD0x("media loaded: {0}", lC9t.type);
            this.bT6N([[this.dA7t, "loadedmetadata", this.cjQ3x.g5l(this)], [this.dA7t, "ended", this.cjP3x.g5l(this)], [this.dA7t, "waiting", this.vP3x.g5l(this)], [this.dA7t, "play", this.tu1x.g5l(this)], [this.dA7t, "pause", this.bmH4L.g5l(this)], [this.dA7t, "playing", this.JV6P.g5l(this)], [this.dA7t, "timeupdate", this.cjO3x.g5l(this)], [this.dA7t, "progress", this.rk1x.g5l(this)], [this.dA7t, "stalled", this.bjM3x.g5l(this)], [this.dA7t, "interrupt", this.fs7l.g5l(this)], [this.dA7t, "recover", this.cjN3x.g5l(this)], [this.dA7t, "error", this.eo7h.g5l(this)]]);
            if (this.cs6m) {
                if (this.cs6m.loadState == LoadState.LOAD_START || this.cs6m.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.baJ1x();
                    if (this.cs6m.volume != null) {
                        this.dA7t.setVolume(this.cs6m.volume)
                    }
                }
            }
        }.g5l(this))
    };
    b5g.cjL3x = function (t5y) {
        this.GM6G();
        this.dA7t.destroy();
        this.cs6m.loadState = LoadState.IN_SWITCH_MEDIA;
        this.vP3x();
        this.ZQ1x(t5y);
        gP8H.oD0x("switch media")
    };
    b5g.cux5C = function () {
        return this.dA7t
    };
    b5g.bzS6M = function () {
        this.vP3x();
        v5A.br5w("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cs6m.id]), br: DEFAULT_BR},
            onload: this.bAQ6K.g5l(this),
            onerror: this.bAQ6K.g5l(this)
        })
    };
    b5g.bAQ6K = function (d5i) {
        if (d5i.code == 200 && d5i.data && d5i.data.length) {
            var bt5y = d5i.data[0];
            if (!bt5y.url) {
                this.cs6m.error = ErrorType.INFO_GET_ERR;
                this.og0x("error", {code: this.cs6m.error});
                return
            }
            this.cs6m.playUrl = bt5y.url;
            this.cs6m.expireTime = (new Date).getTime() + bt5y.expi * 1e3;
            this.baJ1x()
        } else {
            this.cs6m.error = ErrorType.INFO_GET_ERR;
            this.og0x("error", {code: this.cs6m.error});
            gP8H.bX6R("info load error")
        }
    };
    b5g.baJ1x = function () {
        if (this.dA7t) {
            var V5a = this.cs6m.playUrl;
            if (this.cs6m.time > 0 && (this.cs6m.loadState == LoadState.IN_RE_GET_URL || this.cs6m.loadState == LoadState.IN_RE_GET_URL)) {
                V5a += "#t=" + this.cs6m.time
            }
            this.dA7t.setSrc(V5a);
            gP8H.oD0x("load mp3: {0},loadState: {1}.", V5a, this.cs6m.loadState)
        }
    };
    b5g.bAR6L = function () {
        if (/#t=(\d+)$/.test(this.dA7t.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b5g.MU7N = function () {
        var bA5F = parseInt(this.cs6m.time) || 0, cjI3x = this.bAR6L();
        if (bA5F === cjI3x) {
            this.dA7t.load()
        } else {
            this.dA7t.setSrc(this.cs6m.playUrl + "#t=" + bA5F)
        }
        this.cs6m.loadState = LoadState.IN_RELOAD;
        this.vP3x();
        gP8H.oD0x("reload from: {0}", bA5F)
    };
    b5g.bzX6R = function () {
        this.cs6m.loadState = LoadState.IN_RE_GET_URL;
        this.bzS6M()
    };
    b5g.bAX6R = function () {
        var vi2x = getHost(this.cs6m.playUrl);
        if (vi2x) {
            for (var i = 0; i < this.oN0x.length; i++) {
                var jx9o = this.oN0x[i] || [], s5x = jx9o.indexOf(vi2x);
                if (s5x >= 0 && jx9o.length > 1) {
                    return jx9o[(s5x + 1) % jx9o.length]
                }
            }
        }
        function getHost(V5a) {
            if (CDN_HOST_REG.test(V5a))return RegExp.$1
        }
    };
    b5g.cjH3x = function () {
        this.cs6m.playUrl = this.cs6m.playUrl.replace(CDN_HOST_REG, this.bAX6R());
        this.cs6m.loadState = LoadState.IN_SWITCH_CDN;
        this.baJ1x();
        this.vP3x()
    };
    b5g.cjQ3x = function () {
        if (this.cs6m.loadState == LoadState.LOAD_START) {
            this.cs6m.loadState = LoadState.LOADED_META;
            if (this.dA7t.type == "audio") {
                this.cs6m.duration = this.dA7t.getDuration()
            }
            this.og0x("loadedmeta", {duration: this.cs6m.duration})
        } else {
            this.cs6m.loadState = LoadState.LOADED_META
        }
        if (this.cs6m.play) {
            this.dA7t.play()
        } else {
            this.dA7t.pause()
        }
        if (this.cs6m.time && parseInt(this.cs6m.time) != this.bAR6L()) {
            this.dA7t.setCurrentTime(this.cs6m.time)
        }
        this.EB5G();
        this.JV6P();
        bzz6t = true;
        gP8H.oD0x("loaded meta")
    };
    b5g.cjP3x = function () {
        this.cs6m.ended = true;
        this.og0x("ended")
    };
    b5g.vP3x = function () {
        if (!this.cs6m.waiting) {
            this.cs6m.waiting = true;
            this.cs6m.waitTimestamp = +(new Date);
            this.og0x("waiting")
        }
    };
    b5g.JV6P = function () {
        this.cs6m.waiting = false;
        this.cs6m.waitTimestamp = 0;
        this.og0x("playing")
    };
    b5g.tu1x = function () {
        this.og0x("play")
    };
    b5g.bmH4L = function () {
        this.og0x("pause")
    };
    b5g.cjO3x = function () {
        if (this.cs6m.loadState != LoadState.LOADED_META)return;
        var bA5F = this.dA7t.getCurrentTime();
        if (this.cs6m.waiting && bA5F > this.cs6m.time) {
            this.JV6P()
        }
        this.cs6m.time = bA5F;
        this.og0x("timeupdate", {time: this.cs6m.time, duration: this.cs6m.duration})
    };
    b5g.rk1x = function (d5i) {
        if (this.cs6m.loadState != LoadState.LOADED_META)return;
        var m5r = {};
        if (d5i.data) {
            m5r.total = d5i.data.total;
            m5r.loaded = d5i.data.loaded
        } else {
            var wL3x = this.dA7t.getBuffered(), bA5F = this.dA7t.getCurrentTime(), np0x = 0;
            for (var i = 0; i < wL3x.length; i++) {
                if (bA5F > wL3x.start(i) && bA5F < wL3x.end(i)) {
                    np0x = wL3x.end(i);
                    break
                }
            }
            m5r.total = this.cs6m.duration;
            m5r.loaded = Math.min(np0x, m5r.total)
        }
        this.og0x("progress", m5r)
    };
    b5g.EB5G = function () {
        if (this.cs6m.retry) {
            clearTimeout(this.cs6m.retry.tid);
            this.cs6m.retry = null
        }
    };
    b5g.eo7h = function () {
        var bQ6K = this.dA7t.getError();
        gP8H.bX6R("media error code: {0}, netState: {1}", bQ6K.code, this.dA7t.getNetworkState());
        if (bQ6K.code == MediaError.MEDIA_ERR_NETWORK || bQ6K.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var DG5L = l5q.bpe4i();
            if (!this.cs6m.retry) {
                this.cs6m.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cs6m.retry.tid)
            }
            if (this.cs6m.retry.level == RetryLevel.NONE) {
                if (this.bzV6P()) {
                    this.cs6m.retry.level = RetryLevel.GET_URL;
                    this.bzX6R();
                    gP8H.oD0x("Url expired, get url.")
                } else {
                    this.cs6m.retry.level = RetryLevel.RELOAD;
                    this.cs6m.retry.tid = setTimeout(this.MU7N.g5l(this), 3e3);
                    gP8H.oD0x("Reload mp3 3s later.")
                }
            } else if (this.cs6m.retry.level == RetryLevel.GET_URL) {
                this.cs6m.retry.level = RetryLevel.RELOAD;
                this.cs6m.retry.tid = setTimeout(this.MU7N.g5l(this), 3e3);
                gP8H.oD0x("Reload mp3 3s later.")
            } else if (this.cs6m.retry.level == RetryLevel.RELOAD) {
                this.cs6m.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bAX6R()) {
                    this.cs6m.retry.tid = setTimeout(this.cjH3x.g5l(this), 5e3);
                    gP8H.oD0x("Switch CDN 5s later.")
                } else {
                    this.cs6m.retry.tid = setTimeout(this.MU7N.g5l(this), 5e3);
                    gP8H.oD0x("Reload mp3 5s later.")
                }
            } else if (!bzz6t && this.dA7t.type == "audio" && !DG5L.useFlash && !cK6E.Ky7r.mac && l5q.bdp2x().supported) {
                DG5L.useFlash = true;
                l5q.EG5L(DG5L);
                this.cjL3x("flash")
            } else {
                this.EB5G();
                this.fs7l();
                this.cs6m.error = ErrorType.NET_ERR;
                this.og0x("error", {code: this.cs6m.error});
                gP8H.bX6R("error can not retry.")
            }
        } else {
            this.EB5G();
            this.fs7l();
            this.cs6m.error = ErrorType.UNKNOWN_ERR;
            this.og0x("error", {code: this.cs6m.error});
            gP8H.bX6R("error can not retry.")
        }
    };
    b5g.bjM3x = function () {
        var hf8X = 0, bBi6c = 5e3;
        return function () {
            this.vP3x();
            clearTimeout(hf8X);
            setTimeout(function () {
                var fL7E = +(new Date);
                if (this.cs6m.waiting && fL7E - this.cs6m.waitTimestamp >= bBi6c && this.cs6m.stalledRetryCount < MAX_STALLED_RETRY) {
                    gP8H.oD0x("stalled too long retry.");
                    this.cs6m.stalledRetryCount++;
                    this.MU7N()
                }
            }.g5l(this), bBi6c);
            gP8H.oD0x("stalled")
        }
    }();
    b5g.bzV6P = function () {
        var fL7E = +(new Date);
        return fL7E > this.cs6m.expireTime
    };
    b5g.cjN3x = function () {
        var bA5F = parseInt(this.cs6m.time) || 0;
        this.dA7t.setSrc(this.cs6m.playUrl + "#t=" + bA5F);
        this.cs6m.loadState = LoadState.IN_RELOAD;
        this.vP3x();
        gP8H.oD0x("recover from: {0}", bA5F)
    };
    b5g.og0x = function (W5b, j5o) {
        h5m.z5E(D5I.fi7b, "playaction", {action: W5b, data: j5o || {}})
    };
    H5M.fr7k.B5G({element: D5I.fi7b, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c5h = NEJ.P, h5m = c5h("nej.v"), H5M = c5h("nej.ut"), D5I = c5h("nm.w"), b5g;
    D5I.Ew5B = NEJ.C();
    b5g = D5I.Ew5B.O5T(D5I.fi7b);
    K5P = D5I.Ew5B.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.cjG3x = function (bK6E) {
        this.ZS1x(bK6E);
        this.eN7G()
    };
    b5g.bcv2x = function () {
        this.fs7l()
    };
    b5g.ug2x = function (d5i) {
        if (d5i.action == "play") {
            this.fs7l()
        }
    };
    b5g.og0x = function (W5b, j5o) {
        h5m.z5E(D5I.Ew5B, "tmpplayaction", {action: W5b, data: j5o || {}, tmp: true})
    };
    b5g.sc1x = function () {
        return this.cs6m
    };
    H5M.fr7k.B5G({element: D5I.Ew5B, event: ["tmpplayaction"]})
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), fc7V = c5h("nej.n"),
        v5A = c5h("nej.j"), H5M = c5h("nej.ut"), bd5i = c5h("nej.ui"), D5I = c5h("nm.w"), n5s = c5h("nm.l"),
        jL9C = c5h("nm.c"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), b5g, K5P,
        ZY1x = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bfj2x = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    D5I.bgP2x = NEJ.C();
    b5g = D5I.bgP2x.O5T(bd5i.eq7j);
    b5g.cm6g = function (e5j) {
        this.ct6n(e5j);
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.cuz5E = i5n.shift();
        this.cjB3x = i5n.shift();
        this.EC5H = i5n.shift();
        this.bae1x = i5n.shift();
        this.baq1x = [i5n.shift(), i5n.shift(), i5n.shift(), i5n.shift(), i5n.shift(), i5n.shift()];
        this.ZW1x = i5n.shift();
        this.bBZ6T = i5n.shift();
        this.qU1x = {list: this.baq1x, selected: "z-curr", onchange: this.bCd6X.g5l(this)};
        h5m.q5v(this.EC5H, "input", this.ZV1x.g5l(this));
        h5m.q5v(this.EC5H, "propertychange", this.ZV1x.g5l(this));
        h5m.q5v(this.EC5H, "keyup", this.ZV1x.g5l(this));
        h5m.q5v(this.cjB3x, "click", this.ZV1x.g5l(this));
        h5m.q5v(this.ZW1x, "click", this.cy6s.g5l(this));
        h5m.q5v(this.bBZ6T, "click", function () {
            this.z5E("oncancel", {})
        }.g5l(this));
        this.P5U = p5u.Du5z.fX7Q();
        this.JO6I = top.nm.w.Ew5B.fX7Q();
        H5M.fr7k.B5G({element: top.nm.w.Ew5B, event: ["tmpplayaction"]});
        this.qs1x = {limit: 100, offset: 0, parent: this.ZW1x, onbeforelistload: this.pN1x.g5l(this)};
        p5u.sk = "fuck" + a4e.u5z(this.bae1x, "xname") + "458";
        h5m.q5v(top.nm.w.Ew5B, "tmpplayaction", this.ug2x.g5l(this))
    };
    b5g.bZ6T = function () {
        this.ca6U = "m-xwgt-publish-search"
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        if (!!this.Au4y) {
            this.Au4y.S5X();
            delete this.Au4y
        }
        this.qU1x.index = bfj2x[e5j.type || "song"];
        this.Au4y = H5M.Dv5A.B5G(this.qU1x);
        this.EC5H.value = "";
        this.EC5H.focus();
        this.tv1x = "";
        this.cuD6x = 0;
        if (e5j.showMV == true) {
            this.baq1x[bfj2x["mv"]].parentNode.style.display = "";
            a4e.x5C(this.bae1x, "srchtab-1")
        } else {
            this.baq1x[bfj2x["mv"]].parentNode.style.display = "none";
            a4e.w5B(this.bae1x, "srchtab-1")
        }
        if (!!this.ds7l) {
            this.ds7l = this.ds7l.S5X()
        }
        if (e5j.hideBack) {
            a4e.x5C(this.bBZ6T.parentNode, "f-hide")
        }
    };
    b5g.bC5H = function () {
        this.JO6I.bcv2x();
        this.bH6B()
    };
    b5g.ZV1x = function () {
        var value = this.EC5H.value.trim();
        if (value && value.length) {
            if (value != this.tv1x) {
                this.tv1x = value;
                this.bCd6X({index: this.Au4y.rC1x()})
            }
        } else {
            if (this.ds7l) {
                this.ds7l = this.ds7l.S5X()
            }
        }
        this.tv1x = value
    };
    b5g.cy6s = function () {
        var cjz3x = function (E5J) {
            return a4e.by5D(E5J, "sitm") || a4e.by5D(E5J, "itm") || a4e.by5D(E5J, "mv-item")
        }, cjy3x = function (E5J) {
            return a4e.by5D(E5J, "ply")
        }, bCy7r = function () {
            n5s.Z5e.M5R({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cjv3x = function () {
            n5s.Z5e.M5R({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, bqe4i = function (bf5k) {
            if (bf5k && bf5k.privilege && bf5k.privilege.toast) {
                v5A.br5w("/api/song/toast", {
                    query: {id: bf5k.id},
                    type: "json",
                    onload: NG7z.g5l(this),
                    onerror: NG7z.g5l(this)
                })
            } else {
                NH7A()
            }
        }, NG7z = function (Q5V) {
            NH7A((Q5V || Y5d).toast)
        }, NH7A = function (bF6z) {
            n5s.Z5e.M5R({type: 2, tip: bF6z || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d5i) {
            var Ej5o = h5m.U5Z(d5i, cjy3x), i5n = h5m.U5Z(d5i, cjz3x), dX7Q = this.JO6I.sc1x();
            if (!!i5n) {
                h5m.bh5m(d5i);
                this.LX7Q = a4e.u5z(i5n, "id");
                this.Mk7d = a4e.u5z(i5n, "type");
                if (this.Mk7d == 18) {
                    var bK6E = this.P5U.ei7b(this.LX7Q), pL0x = l5q.oh0x(bK6E);
                    if (!Ej5o) {
                        if (pL0x == 10) {
                            bCy7r();
                            return
                        } else if (pL0x == 100) {
                            bqe4i(bK6E);
                            return
                        }
                    } else {
                        if (pL0x == 10) {
                            bCy7r();
                            return
                        } else if (pL0x == 100) {
                            bqe4i(bK6E);
                            return
                        } else if (pL0x == 11) {
                            cjv3x();
                            return
                        } else {
                            a4e.w5B(this.Al4p, "z-pause z-loading");
                            if (Ej5o == this.Al4p && dX7Q.play && !dX7Q.ended) {
                                this.JO6I.bcv2x()
                            } else {
                                this.Al4p = Ej5o;
                                this.JO6I.cjG3x(bK6E)
                            }
                            return
                        }
                    }
                } else if (this.Mk7d == 70) {
                    if (a4e.by5D(i5n, "z-noprogram")) {
                        n5s.Z5e.M5R({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cju3x()
            }
        }
    }();
    b5g.cju3x = function () {
        var hp8h = this.P5U.ei7b(this.LX7Q), rE1x = l5q.bJc8U(this.Mk7d, hp8h);
        rE1x.title = rE1x.title || "";
        rE1x.author = rE1x.author || "";
        rE1x.picUrl = rE1x.picUrl || "";
        rE1x.authors = rE1x.authors || "";
        if (this.Mk7d == 70) {
            this.LX7Q = this.LX7Q.slice(0, -4)
        }
        this.z5E("onfinish", {id: this.LX7Q, type: this.Mk7d, data: rE1x})
    };
    b5g.ug2x = function (d5i) {
        var j5o = d5i.data;
        if (!this.Al4p) {
            return
        }
        switch (d5i.action) {
            case"play":
                a4e.ev7o(this.Al4p, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a4e.w5B(this.Al4p, "z-pause z-loading");
                break;
            case"error":
                n5s.Z5e.M5R({type: 2, tip: "试听遇到问题，播放失败"});
                a4e.w5B(this.Al4p, "z-pause z-loading");
                break;
            case"playing":
                a4e.ev7o(this.Al4p, "z-loading", "z-pause");
                break;
            case"waiting":
                a4e.ev7o(this.Al4p, "z-pause", "z-loading");
                break
        }
    };
    b5g.cjt3x = function (d5i) {
        if (d5i.result.code == 407) {
            this.ZW1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.ZW1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b5g.bCd6X = function (d5i) {
        if (!this.tv1x || d5i.index < 0 || d5i.index > 5) {
            return
        }
        this.JO6I.bcv2x();
        var bc5h = ZY1x[d5i.index], e5j = NEJ.X({}, this.qs1x);
        e5j.cache = {klass: p5u.Du5z, clear: true, onerror: this.cjt3x.g5l(this)};
        e5j.cache.lkey = "search-publish-" + bc5h.type + "-" + this.tv1x;
        e5j.item = {klass: bc5h.item, getRestrictLevel: l5q.oh0x, dur2time: l5q.lU0x};
        if (!e5j.cache.data) {
            e5j.cache.data = {}
        }
        e5j.cache.data.s = this.tv1x;
        e5j.cache.data.type = bc5h.type;
        e5j.cache.data.isPub = true;
        if (bc5h.type == 1) {
            e5j.cache.data.hlpretag = '<span class="s-fc7">';
            e5j.cache.data.hlposttag = "</span>"
        }
        e5j.onemptylist = this.cjs3x.g5l(this, this.tv1x);
        if (!!this.DT5Y) this.P5U.sI1x(this.DT5Y);
        if (!!this.ds7l) {
            this.ds7l = this.ds7l.S5X()
        }
        this.ds7l = H5M.mV0x.B5G(e5j);
        this.DT5Y = e5j.cache.lkey
    };
    b5g.pN1x = function (d5i) {
        d5i.value = a4e.ig8Y("m-publish-search-loading")
    };
    b5g.cjs3x = function (J5O, d5i) {
        a4e.dS7L(d5i.parent, "m-publish-emtpy-message", {key: J5O});
        d5i.stopped = true
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), cK6E = c5h("nej.p"), v5A = c5h("nej.j"),
        cj6d = c5h("nej.ut"), bI6C = c5h("nej.ui"), D5I = c5h("nm.w"), b5g, K5P;
    var cjr3x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D5I.DM5R = NEJ.C();
    b5g = D5I.DM5R.O5T(bI6C.eq7j);
    var fY7R = a4e.ej7c("m-wgt-receiverInput");
    var cjq3x = a4e.ej7c("m-wgt-receiverList");
    var hO8G = a4e.rH1x(cjr3x);
    var cjp3x = a4e.ej7c('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b5g.cm6g = function (e5j) {
        this.bb5g = [];
        this.va2x = e5j.receiver || null;
        this.cjn3x = e5j.unique || false;
        this.md0x = e5j.err;
        this.bDD7w(this.bDI7B, e5j.uid);
        this.ct6n(e5j)
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.Qf8X();
        this.Qn8f();
        this.ZK1x();
        if (e5j.receiver) this.bbQ2x(e5j.receiver.nickname, e5j.receiver.userId);
        a4e.X5c(this.zj4n, "display", "block");
        a4e.X5c(this.bbT2x, "cursor", "text");
        a4e.X5c(this.zj4n, "cursor", "text")
    };
    b5g.bZ6T = function () {
        var j5o = this.bDT7M();
        this.ca6U = a4e.hV8N(a4e.bP6J(fY7R, {receiver: this.va2x, users: j5o}));
        this.kU9L = hO8G
    };
    b5g.bR6L = function () {
        this.cb6V();
        var bx5C = a4e.I5N(this.o5t, "j-flag");
        var gx7q = a4e.I5N(this.o5t, "j-item");
        this.bbT2x = bx5C[0];
        this.bEa7T = bx5C[1];
        this.dD7w = bx5C[2];
        this.zj4n = bx5C[3];
        this.ZH1x = bx5C[4];
        this.beh2x = bx5C[5];
        this.fe7X = gx7q;
        a4e.x5C(this.fe7X[0], "j-selected");
        h5m.q5v(this.dD7w, "keyup", this.bem2x.g5l(this));
        h5m.q5v(this.dD7w, "keydown", this.Jt6n.g5l(this));
        h5m.q5v(this.dD7w, "focus", this.ke9V.g5l(this));
        h5m.q5v(this.ZH1x, "click", this.cjm3x.g5l(this));
        h5m.q5v(this.bbT2x, "click", this.cjl3x.g5l(this));
        h5m.q5v(document.body, "click", this.nC0x.g5l(this));
        h5m.q5v(this.dD7w, "input", this.fm7f.g5l(this));
        h5m.q5v(this.dD7w, "blur", this.oj0x.g5l(this))
    };
    b5g.bC5H = function (e5j) {
        h5m.mg0x(document.body, "click", this.nC0x.g5l(this));
        this.bH6B();
        this.ZK1x();
        this.cji3x();
        this.nC0x()
    };
    b5g.bem2x = function (d5i) {
        h5m.bh5m(d5i);
        var iT9K = d5i.keyCode || d5i.which;
        var bi5n = this.dD7w.value;
        var bq5v = this.fe7X.length;
        var qz1x = a4e.I5N(this.o5t, "j-selected")[0];
        switch (iT9K) {
            case 13:
                var ki9Z = a4e.gv7o(qz1x, "data-username");
                var ht8l = a4e.gv7o(qz1x, "data-userId");
                this.bbQ2x(ki9Z, ht8l);
                this.nC0x();
                this.dD7w.value = "";
                break;
            case 38:
                var s5x = a4e.gv7o(qz1x, "data-index") - 1 < 0 ? bq5v - 1 : a4e.gv7o(qz1x, "data-index") - 1;
                a4e.w5B(qz1x, "j-selected");
                a4e.x5C(this.fe7X[s5x], "j-selected");
                break;
            case 40:
                var s5x = parseInt(a4e.gv7o(qz1x, "data-index")) + 1 >= bq5v ? 0 : parseInt(a4e.gv7o(qz1x, "data-index")) + 1;
                a4e.w5B(qz1x, "j-selected");
                a4e.x5C(this.fe7X[s5x], "j-selected");
                break;
            default:
                this.vj2x()
        }
    };
    b5g.Jt6n = function (d5i) {
        var iT9K = d5i.keyCode || d5i.which;
        var bi5n = this.dD7w.value;
        var s5x = a4e.I5N(this.o5t, "j-receiver").length - 1;
        if (iT9K === 8 && bi5n === "") this.cjh3x(s5x)
    };
    b5g.fm7f = function (d5i) {
        var bi5n = this.dD7w.value;
        if (bi5n.length > 10) {
            this.dD7w.value = bi5n.substring(0, 10);
            return
        }
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.bkl3x.g5l(this), 0) : this.bkl3x();
        this.Qn8f()
    };
    b5g.ke9V = function () {
        if (this.bb5g[0]) this.vj2x(); else this.bDD7w(this.cjf3x);
        a4e.X5c(this.zj4n, "display", "none")
    };
    b5g.oj0x = function () {
        var bq5v = a4e.I5N(this.o5t, "j-receiver").length;
        if (this.dD7w.value.trim() == "" && bq5v <= 0) a4e.X5c(this.zj4n, "display", "block")
    };
    b5g.bbQ2x = function (ki9Z, ht8l) {
        var EK5P = this.Kt7m();
        if (EK5P.length >= 10) {
            this.dv7o();
            return
        }
        var bd5i;
        for (bd5i = 0; bd5i < EK5P.length; bd5i++) {
            if (EK5P[bd5i] == ht8l) {
                this.nC0x();
                return
            }
        }
        if (!ki9Z || !ht8l)return;
        var f5k = a4e.dr7k(a4e.hV8N(a4e.bP6J(cjp3x, {username: ki9Z, userId: ht8l})));
        var bB5G = this.bEa7T.parentNode;
        if (this.cjn3x) {
            this.ZK1x()
        }
        bB5G.insertBefore(f5k, this.bEa7T);
        this.dD7w.value = "";
        var bq5v = a4e.I5N(this.o5t, "j-receiver").length;
        if (bq5v > 1) a4e.X5c(this.zj4n, "display", "none");
        this.bkl3x();
        this.Qn8f()
    };
    b5g.ZK1x = function () {
        var Kw7p = a4e.I5N(this.o5t, "j-receiver");
        var bd5i;
        if (Kw7p.length > 0) {
            for (bd5i = 0; bd5i < Kw7p.length; bd5i++) {
                a4e.cE6y(Kw7p[bd5i], false)
            }
        }
    };
    b5g.cji3x = function () {
        this.dD7w.value = ""
    };
    b5g.cjh3x = function (s5x) {
        this.dv7o(!0);
        var Kw7p = a4e.I5N(this.o5t, "j-receiver");
        a4e.cE6y(Kw7p[s5x], false);
        this.Qn8f()
    };
    b5g.vj2x = function () {
        var bi5n = this.dD7w.value;
        var bD5I = bi5n.trim().toLowerCase();
        var j5o;
        bD5I = bD5I.replace(/\[/g, "\\[");
        bD5I = bD5I.replace(/\]/g, "\\]");
        j5o = this.bDT7M(bD5I);
        this.cje3x(j5o)
    };
    b5g.nC0x = function (d5i) {
        a4e.X5c(this.ZH1x, "display", "none")
    };
    b5g.dv7o = function (gz7s) {
        if (gz7s && this.md0x) {
            a4e.X5c(this.md0x, "display", "none");
            return
        }
        if (this.md0x) a4e.X5c(this.md0x, "display", "block")
    };
    b5g.cjm3x = function (d5i) {
        h5m.cd6X(d5i);
        var dd6X = d5i.target || d5i.srcElement;
        if (a4e.by5D(dd6X, "j-flag"))return;
        var bB5G = dd6X.nodeName.toLowerCase() == "a" ? dd6X.parentNode : dd6X.parentNode.parentNode;
        var ki9Z = a4e.gv7o(bB5G, "data-username");
        var ht8l = a4e.gv7o(bB5G, "data-userId");
        this.bbQ2x(ki9Z, ht8l);
        this.nC0x();
        a4e.X5c(this.zj4n, "display", "none")
    };
    b5g.cjl3x = function (d5i) {
        h5m.bh5m(d5i);
        var dd6X = d5i.target || d5i.srcElement;
        if (a4e.by5D(dd6X.parentNode, "j-receiver")) {
            a4e.cE6y(dd6X.parentNode, false);
            this.dv7o(!0);
            this.Qn8f()
        } else this.dD7w.focus()
    };
    b5g.bkl3x = function () {
        this.beh2x.innerHTML = this.dD7w.value;
        var dk6e = this.beh2x.offsetWidth + 2;
        a4e.X5c(this.dD7w, "width", dk6e + "px")
    };
    b5g.Qn8f = function () {
        var ZA1x = a4e.hL8D(this.dD7w, this.o5t).y;
        var bFP7I = Math.floor((ZA1x - 8) / 27);
        if (bFP7I < 0)return;
        a4e.X5c(this.bbT2x, "height", 19 + bFP7I * 29 + "px")
    };
    b5g.Qf8X = function () {
        var oP0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < oP0x.length; i++) {
            a4e.X5c(this.beh2x, oP0x[i], a4e.cZ6T(this.dD7w, oP0x[i]))
        }
    };
    b5g.bDD7w = function (dn6h, C5H) {
        var cT6N = C5H ? C5H : window.GUser.userId;
        var V5a = "/api/user/getfollows/" + cT6N;
        var fC7v = v5A.br5w(V5a, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dn6h.g5l(this),
            onerror: function (j5o) {
                this.bb5g = []
            },
            onbeforerequest: function (j5o) {
            }
        })
    };
    b5g.bDI7B = function (j5o) {
        this.bb5g = JSON.parse(j5o).follow || [];
        var C5H = GUser.userId;
        for (var i = 0; i < this.bb5g.length; i++) {
            if (this.bb5g[i].userId == C5H) {
                this.bb5g.splice(i, 1);
                continue
            }
            this.bb5g[i].avatarUrl = this.bb5g[i].avatarUrl + "?param=30y30"
        }
    };
    b5g.cjf3x = function (j5o) {
        if (this.bb5g[0])return;
        this.bDI7B(j5o);
        this.vj2x()
    };
    b5g.bDT7M = function (bD5I) {
        var bD5I = bD5I ? bD5I : "";
        this.bb5g = this.bb5g[0] ? this.bb5g : [];
        var bq5v = this.bb5g.length;
        var Lk7d = this.Kt7m();
        var rG1x = [];
        var LH7A, LI7B, bba1x;
        if (!this.bb5g[0])return rG1x;
        for (var bd5i = 0; bd5i < bq5v; bd5i++) {
            bba1x = false;
            for (var v5A = 0; v5A < Lk7d.length; v5A++) {
                if (this.bb5g[bd5i].userId == Lk7d[v5A]) {
                    bba1x = true;
                    break
                }
            }
            if (bba1x)continue;
            LH7A = this.bb5g[bd5i].nickname.toLowerCase().search(bD5I);
            LI7B = this.bb5g[bd5i].py ? this.bb5g[bd5i].py.toLowerCase().search(bD5I) : -1;
            if (LH7A !== -1 || LI7B != -1) rG1x.push(this.bb5g[bd5i])
        }
        return rG1x
    };
    b5g.cje3x = function (j5o) {
        a4e.dS7L(this.ZH1x, cjq3x, {users: j5o});
        a4e.x5C(a4e.I5N(this.o5t, "j-item")[0], "j-selected");
        this.fe7X = a4e.I5N(this.o5t, "j-item");
        a4e.X5c(this.ZH1x, "display", "block")
    };
    b5g.Kt7m = function () {
        var rG1x = a4e.I5N(this.o5t, "j-receiver") || [];
        var ht8l = [];
        for (var i = 0; i < rG1x.length; i++) {
            ht8l.push(a4e.gv7o(rG1x[i], "data-id"))
        }
        return ht8l
    };
    b5g.cuF6z = function () {
        var ht8l = this.Kt7m();
        var rG1x = [];
        for (var i = 0; i < ht8l.length; i++) {
            for (var j = 0; j < this.bb5g.length; j++) {
                if (ht8l[i] == this.bb5g[j].userId) rG1x.push(this.bb5g[j])
            }
        }
        return rG1x
    };
    b5g.ciY3x = function () {
        this.ZK1x()
    };
    D5I.DM5R.M5R = function (e5j) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n5s.nW0x.M5R({title: "登录"});
            return
        }
        e5j = e5j || {};
        if (e5j.parent === undefined) e5j.parent = document.body;
        !!this.eL7E && this.eL7E.S5X();
        this.eL7E = this.B5G(e5j)
    };
    D5I.DM5R.bp5u = function () {
        !!this.eL7E && this.eL7E.S5X()
    };
    D5I.DM5R.EM5R = function () {
        return this.nC0x()
    };
    D5I.DM5R.cuH6B = function () {
        return this.vj2x()
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), k5p = c5h("nej.u"), h5m = c5h("nej.v"), l5q = c5h("nm.x"), n5s = c5h("nm.l"),
        b5g, K5P;
    n5s.EN5S = NEJ.C();
    b5g = n5s.EN5S.O5T(n5s.bfJ2x);
    K5P = n5s.EN5S.cg6a;
    b5g.bk5p = function () {
        var Dh5m;
        var ciW3x = function (A5F, J5O) {
            Dh5m = Dh5m || [];
            if (J5O != "18") Dh5m.push({key: J5O, value: A5F})
        };
        return function (e5j) {
            this.bl5q(e5j);
            if (e5j.upwards) {
                a4e.x5C(this.o5t, "m-emts-up")
            } else {
                a4e.w5B(this.o5t, "m-emts-up")
            }
            if (!Dh5m) {
                var bv5A = l5q.cpo5t();
                k5p.ed7W(bv5A, ciW3x)
            }
            var bq5v = Dh5m.length;
            Dh5m.splice(bq5v - 2, 0, {key: "18", value: "186"});
            this.Zw1x = Dh5m
        }
    }();
    b5g.bZ6T = function () {
        this.ca6U = "ntp-portrait"
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        this.bG6A = i5n[0];
        this.ciV3x = i5n[1];
        this.ciU3x = i5n[2];
        this.ciT3x = i5n[3];
        h5m.q5v(this.bG6A, "click", this.vO3x.g5l(this));
        h5m.q5v(this.ciV3x, "click", this.Da5f.g5l(this, 1));
        h5m.q5v(this.ciT3x, "click", this.Da5f.g5l(this, 2))
    };
    b5g.bfS2x = function (s5x) {
        this.Zu1x = s5x;
        var bj5o = (s5x - 1) * 50;
        var i5n = this.Zw1x.slice(bj5o, Math.min(bj5o + 50, this.Zw1x.length));
        this.bG6A.innerHTML = a4e.bP6J("jst-portrait", {plist: i5n}, {purl: l5q.bAe6Y});
        this.ciU3x.innerText = s5x + "/" + Math.ceil(this.Zw1x.length / 50)
    };
    b5g.Da5f = function (s5x) {
        var ciP3x = Math.ceil(this.Zw1x.length / 50);
        if (s5x == 1 && this.Zu1x == 1 || s5x == 2 && this.Zu1x == ciP3x)return;
        s5x == 1 ? this.bfS2x(this.Zu1x - 1) : this.bfS2x(this.Zu1x + 1)
    };
    b5g.vO3x = function (d5i) {
        var E5J = h5m.U5Z(d5i, "d:text");
        if (!E5J)return;
        var d5i = {url: a4e.u5z(E5J, "url"), text: a4e.u5z(E5J, "text")};
        this.z5E("onselect", d5i);
        if (!d5i.stopped) this.bp5u()
    };
    b5g.M5R = function () {
        K5P.M5R.call(this);
        this.bfS2x(1)
    }
})();
(function () {
    var c5h = NEJ.P, h5m = c5h("nej.v"), k5p = c5h("nej.u"), cK6E = c5h("nej.p"), ba5f = c5h("nej.h"),
        H5M = c5h("nej.ut"), ji9Z = /^[#?]+/, BQ4U = /#(.*?)$/, wb3x = window,
        bgf2x = !history.pushState || cK6E.Ky7r.android || !history.auto;
    var Zr1x = function (V5a, bgI2x) {
        wb3x.history[!bgI2x ? "pushState" : "replaceState"](null, document.title, V5a)
    };
    var Zq1x = function () {
        return location.parse(wb3x.location.href)
    };
    Zr1x = Zr1x.ef7Y(function (d5i) {
        if (!bgf2x)return;
        var bg5l = d5i.args;
        d5i.stopped = !0;
        V5a = bg5l[0].replace(ji9Z, "");
        !bg5l[1] ? wb3x.location.hash = V5a : wb3x.location.replace("#" + V5a)
    });
    Zq1x = Zq1x.ef7Y(function (d5i) {
        if (!bgf2x)return;
        d5i.stopped = !0;
        var dE7x = BQ4U.test(wb3x.location.href) ? RegExp.$1 : "";
        d5i.value = location.parse(dE7x.replace(ji9Z, ""))
    });
    location.redirect = function (V5a, bgI2x) {
        Zr1x(V5a, bgI2x);
        return this
    };
    location.active = function () {
        var eR7K, V5a, iG9x, cD6x, Lz7s;
        var bhg3x = function (ir8j) {
            if (!!cD6x) {
                cD6x = !1;
                return
            }
            var d5i = {oldValue: iG9x, newValue: Zq1x()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h5m.z5E(location, "beforeurlchange", d5i);
                if (d5i.stopped) {
                    if (!!iG9x) {
                        cD6x = !0;
                        Zr1x(iG9x.href, !0)
                    }
                    return
                }
            }
            V5a = wb3x.location.href;
            iG9x = d5i.newValue;
            h5m.z5E(location, "urlchange", iG9x);
            ba5f.bor4v(iG9x.href)
        };
        var bIg8Y = function () {
            if (V5a != wb3x.location.href) bhg3x();
            eR7K = requestAnimationFrame(bIg8Y)
        };
        return function (bL6F) {
            if (!!Lz7s)return this;
            Lz7s = !0;
            wb3x = bL6F || window;
            if (bgf2x && "onhashchange" in window && cK6E.ma0x.trident2) {
                h5m.q5v(wb3x, "hashchange", bhg3x);
                bhg3x()
            } else if (!eR7K) {
                eR7K = requestAnimationFrame(bIg8Y)
            }
            return this
        }
    }();
    location.parse = function () {
        var fT7M = /^https?:\/\/.*?\//i, ji9Z = /[?#]/;
        return function (V5a) {
            var m5r = {href: V5a};
            V5a = (V5a || "").replace(fT7M, "/").split(ji9Z);
            var cv6p = 1;
            if (V5a[0] == "/" && (V5a[1] || "").indexOf("/") == 0) cv6p = 2;
            m5r.path = V5a.splice(0, cv6p).join("?");
            m5r.query = k5p.hq8i(V5a.join("&"));
            return m5r
        }
    }();
    location.same = function (V5a) {
        return Zq1x().href == V5a
    };
    H5M.fr7k.B5G({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), fF7y = c5h("nm.ut");
    fF7y.sz1x = function (ey7r) {
        var gm7f = {text: "", start: 0, end: 0};
        if (ey7r.setSelectionRange) {
            gm7f.start = ey7r.selectionStart;
            gm7f.end = ey7r.selectionEnd;
            gm7f.text = gm7f.start != gm7f.end ? ey7r.value.substring(gm7f.start, gm7f.end) : ""
        } else if (document.selection) {
            var i, Zp1x = document.selection.createRange(), vH3x = document.body.createTextRange();
            vH3x.moveToElementText(ey7r);
            gm7f.text = Zp1x.text;
            gm7f.bookmark = Zp1x.getBookmark();
            for (i = 0; vH3x.compareEndPoints("StartToStart", Zp1x) < 0 && Zp1x.moveStart("character", -1) !== 0; i++) {
                if (ey7r.value.charAt(i) == "\n") {
                    i++
                }
            }
            gm7f.start = i;
            gm7f.end = gm7f.text.length + gm7f.start
        }
        return gm7f
    };
    fF7y.Zo1x = function (ey7r, gm7f) {
        var vH3x;
        if (!gm7f) {
            gm7f = {text: "", start: 0, end: 0}
        }
        ey7r.focus();
        if (ey7r.setSelectionRange) {
            ey7r.setSelectionRange(gm7f.start, gm7f.end)
        } else if (ey7r.createTextRange) {
            vH3x = ey7r.createTextRange();
            if (ey7r.value.length === gm7f.start) {
                vH3x.collapse(false);
                vH3x.select()
            } else {
                vH3x.moveToBookmark(gm7f.bookmark);
                vH3x.select()
            }
        }
    };
    fF7y.EU5Z = function (ey7r, gm7f, cY6S) {
        var gm7f = gm7f || {text: "", start: 0, end: 0};
        var biN3x, bIQ8I, vH3x, Op7i, bIV8N, bIY8Q, CR5W;
        this.Zo1x(ey7r, gm7f);
        if (ey7r.setSelectionRange) {
            biN3x = ey7r.value;
            bIQ8I = biN3x.substring(0, gm7f.start) + cY6S + biN3x.substring(gm7f.end);
            bIV8N = bIY8Q = gm7f.start + cY6S.length;
            CR5W = ey7r.scrollTop;
            ey7r.value = bIQ8I;
            if (ey7r.scrollTop != CR5W) {
                ey7r.scrollTop = CR5W
            }
            ey7r.setSelectionRange(bIV8N, bIY8Q)
        } else if (ey7r.createTextRange) {
            Op7i = document.selection.createRange();
            Op7i.text = cY6S;
            Op7i.setEndPoint("StartToEnd", Op7i);
            Op7i.select()
        }
        h5m.z5E(ey7r, "keyup")
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), cK6E = c5h("nej.p"), k5p = c5h("nej.u"),
        cj6d = c5h("nej.ut"), D5I = c5h("nm.w"), fF7y = c5h("nm.ut"), b5g;
    D5I.bJb8T = NEJ.C();
    b5g = D5I.bJb8T.O5T(cj6d.cz6t);
    b5g.cm6g = function (e5j) {
        this.ct6n(e5j)
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.fH7A = e5j.txt;
        this.CN5S = e5j.sgtsContainer;
        this.bJf8X = e5j.sgtsList[0];
        this.Zm1x = e5j.sgtsItem;
        this.nm0x = e5j.rangeData;
        this.EW5b = e5j.atIndex;
        a4e.x5C(this.Zm1x[0], "selected-item");
        this.Pq8i()
    };
    b5g.bC5H = function () {
        this.bH6B();
        h5m.mg0x(document.body, "keyup", this.bJo8g.g5l(this));
        h5m.mg0x(document.body, "click", this.bJp8h.g5l(this))
    };
    b5g.Pq8i = function () {
        this.bT6N([[document.body, "keyup", this.bJo8g.g5l(this)], [document.body, "click", this.bJp8h.g5l(this)], [this.fH7A, "keydown", this.bJq8i.g5l(this)], [this.fH7A, "keypress", this.bJq8i.g5l(this)], [this.bJf8X, "click", this.bJs8k.g5l(this)], [this.bJf8X, "mouseover", this.CK5P.g5l(this)]])
    };
    b5g.CK5P = function (d5i) {
        var dd6X = h5m.U5Z(d5i);
        var r5w = a4e.I5N(this.CN5S, "selected-item");
        if (a4e.by5D(dd6X, "j-sgt")) {
            a4e.w5B(r5w[0], "selected-item");
            a4e.x5C(dd6X, "selected-item")
        }
    };
    b5g.bJo8g = function (d5i) {
        var r5w = a4e.I5N(this.CN5S, "selected-item");
        var bq5v = this.Zm1x.length;
        var iT9K = d5i.keyCode || d5i.which;
        var s5x, j5o;
        switch (iT9K) {
            case 38:
                s5x = a4e.gv7o(r5w[0], "data-index") - 1 < 0 ? bq5v - 1 : a4e.gv7o(r5w[0], "data-index") - 1;
                a4e.w5B(r5w[0], "selected-item");
                a4e.x5C(this.Zm1x[s5x], "selected-item");
                break;
            case 40:
                s5x = parseInt(a4e.gv7o(r5w[0], "data-index")) + 1 >= bq5v ? 0 : parseInt(a4e.gv7o(r5w[0], "data-index")) + 1;
                a4e.w5B(r5w[0], "selected-item");
                a4e.x5C(this.Zm1x[s5x], "selected-item");
                break;
            case 13:
                this.bJs8k(d5i);
                break;
            case 27:
                this.nC0x();
                break;
            case 32:
                var bi5n = this.fH7A.value;
                var s5x = fF7y.sz1x(this.fH7A);
                if (bi5n.charAt(s5x.start - 1) !== " ")return;
                this.nC0x();
                break
        }
    };
    b5g.bJq8i = function (d5i) {
        var iT9K = d5i.keyCode || d5i.which;
        if (iT9K === 13 || iT9K === 38 || iT9K === 40) {
            h5m.cd6X(d5i);
            d5i.keyCode = 0;
            d5i.which = 0;
            d5i.returnvalue = false
        }
    };
    b5g.bJp8h = function (d5i) {
        var dd6X = d5i.target || d5i.srcElement;
        if (dd6X === this.fH7A)return;
        this.nC0x()
    };
    b5g.bJs8k = function (d5i) {
        h5m.bh5m(d5i);
        var r5w = a4e.I5N(this.CN5S, "selected-item")[0];
        var qz1x = d5i.target || d5i.srcElement;
        var t5y = d5i.type;
        if (a4e.by5D(qz1x, "lst"))return;
        if (t5y == "click") {
            a4e.w5B(r5w, "selected-item");
            a4e.x5C(qz1x, "selected-item")
        } else qz1x = r5w;
        var j5o = qz1x.innerHTML + " ";
        this.nC0x();
        var gm7f = this.nm0x;
        gm7f.start = this.EW5b + 1;
        if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "9.0") {
            this.fH7A.value = this.fH7A.value.substring(0, gm7f.start) + this.fH7A.value.substring(gm7f.end, this.fH7A.value.length);
            gm7f.end = gm7f.start
        }
        fF7y.EU5Z(this.fH7A, gm7f, j5o);
        h5m.z5E(this.fH7A, "keyup")
    };
    b5g.nC0x = function (d5i) {
        if (!!this.CN5S) a4e.X5c(this.CN5S, "display", "none");
        this.S5X()
    };
    b5g.vj2x = function (d5i) {
        if (!!this.CN5S) a4e.X5c(this.CN5S, "display", "block")
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), v5A = c5h("nej.j"), D5I = c5h("nm.w"),
        cj6d = c5h("nej.ut"), bI6C = c5h("nej.ui"), b5g;
    var ciO3x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ciN3x = a4e.ej7c("m-wgt-atlist");
    var hO8G = a4e.rH1x(ciO3x);
    D5I.bJD8v = NEJ.C();
    b5g = D5I.bJD8v.O5T(bI6C.eq7j);
    b5g.cm6g = function (e5j) {
        this.fx7q = {};
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.fx7q.txt = a4e.y5D(e5j.target);
        this.fx7q.data = e5j.data;
        this.fx7q.offset = e5j.offset;
        this.fx7q.rangeData = e5j.rangeData;
        this.fx7q.atIndex = e5j.atIndex;
        this.ciM3x(e5j);
        this.bl5q(e5j);
        this.fx7q.sgtsContainer = this.o5t;
        this.fx7q.sgtsList = a4e.I5N(this.o5t, "lst");
        this.fx7q.sgtsItem = a4e.I5N(this.o5t, "f-thide");
        this.Sq8i(e5j);
        this.ciL3x = D5I.bJb8T.B5G(this.fx7q)
    };
    b5g.bC5H = function (e5j) {
        this.bH6B();
        this.ciL3x.S5X()
    };
    b5g.bZ6T = function () {
        this.kU9L = hO8G
    };
    b5g.bR6L = function () {
        this.cb6V()
    };
    b5g.ciM3x = function (e5j) {
        this.o5t = a4e.dr7k(a4e.hV8N(a4e.bP6J(ciN3x, e5j.data)))
    };
    b5g.Sq8i = function (e5j) {
        var bJJ8B = a4e.I5N(this.o5t, "selected-item")[0];
        if (bJJ8B) a4e.w5B(bJJ8B, "selected-item");
        var cP6J = e5j.offset.x + "px";
        var gE7x = e5j.offset.y + "px";
        a4e.X5c(this.o5t, "left", cP6J);
        a4e.X5c(this.o5t, "top", gE7x)
    }
})();
(function () {
    var c5h = NEJ.P, v5A = c5h("nej.j"), fF7y = c5h("nm.ut");
    fF7y.bJK8C = function (bi5n) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)return;
        var cM6G = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var EX5c = bi5n.match(cM6G) || [];
        for (var bd5i = 0; bd5i < EX5c.length; bd5i++) {
            EX5c[bd5i] = EX5c[bd5i].split("@")[1]
        }
        EX5c = EX5c.reverse();
        var ht8l = GUser.userId;
        var ciK3x = v5A.tD1x("mentioners" + ht8l) || [];
        var ja9R = EX5c.concat(ciK3x);
        if (ja9R.length > 10) ja9R = ja9R.slice(0, 10);
        v5A.uk2x("mentioners" + ht8l, ja9R)
    };
    fF7y.ciI3x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0)return;
        var ht8l = GUser.userId;
        return v5A.tD1x("mentioners" + ht8l) || []
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), cK6E = c5h("nej.p"), v5A = c5h("nej.j"),
        k5p = c5h("nej.u"), cj6d = c5h("nej.ut"), D5I = c5h("nm.w"), fF7y = c5h("nm.ut"), b5g;
    D5I.bJV8N = NEJ.C();
    b5g = D5I.bJV8N.O5T(cj6d.cz6t);
    b5g.cm6g = function (e5j) {
        this.ct6n(e5j);
        this.bKa8S()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.fH7A = e5j.txt;
        this.o5t = e5j.body;
        this.bKb8T = e5j.before;
        this.Pt8l = e5j.flag;
        this.ciH3x = e5j.after;
        this.pw0x = [];
        if (cK6E.cS6M.browser != "ie") {
            setTimeout(function () {
                this.lc9T()
            }.g5l(this), 0)
        }
        this.Pq8i()
    };
    b5g.bC5H = function () {
        this.bH6B();
        if (this.sG1x) this.sG1x.S5X();
        delete this.sG1x
    };
    b5g.Pq8i = function () {
        this.bT6N([[this.fH7A, "keyup", this.bKj8b.g5l(this, this.fH7A)], [this.fH7A, "click", this.bKj8b.g5l(this, this.fH7A)], [this.fH7A, "focus", this.lc9T.g5l(this)]])
    };
    b5g.lc9T = function (d5i) {
        this.nm0x = fF7y.sz1x(this.fH7A)
    };
    b5g.bKa8S = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cT6N = window.GUser.userId;
        var V5a = "/api/user/getfollows/" + cT6N;
        var fC7v = v5A.br5w(V5a, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j5o) {
                window.GFollowers = JSON.parse(j5o).follow
            }.g5l(this),
            onerror: function (j5o) {
            },
            onbeforerequest: function (j5o) {
            }
        })
    };
    b5g.bKl8d = function (index) {
        var A5F = this.fH7A.value, bj5o, bpl4p, bpI4M, Qe8W;
        this.bKb8T.innerHTML = k5p.dM7F(A5F.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nR0x = a4e.I5N(this.bKb8T, "j-test");
        for (var bd5i = 0; bd5i < nR0x.length; bd5i++) {
            nR0x[bd5i].innerText = " "
        }
        this.Pt8l.innerHTML = A5F.charAt(index);
        this.ciH3x.innerHTML = k5p.dM7F(A5F.substr(index + 1, A5F.length));
        Qe8W = parseInt(a4e.cZ6T(this.fH7A, "lineHeight"));
        a4e.X5c(this.o5t, "display", "block");
        bpl4p = a4e.hL8D(this.Pt8l, this.o5t);
        bpI4M = a4e.hL8D(this.fH7A);
        a4e.X5c(this.o5t, "display", "none");
        var cP6J = bpl4p.x + bpI4M.x;
        var gE7x = bpl4p.y + bpI4M.y + Qe8W;
        bj5o = {x: cP6J, y: gE7x};
        this.ciF3x(bj5o)
    };
    b5g.bKj8b = function (ey7r, d5i) {
        h5m.cd6X(d5i);
        var ey7r = ey7r;
        var A5F = ey7r.value;
        var bq5v = A5F.length;
        var s5x = fF7y.sz1x(ey7r).start;
        var bKx8p = 0;
        var iT9K = d5i.keyCode || d5i.which;
        var ja9R;
        this.nm0x = fF7y.sz1x(ey7r);
        var bKy8q = false;
        for (var i = 1; i < 20; i++) {
            ja9R = s5x - i;
            if (A5F.charAt(ja9R) === " ")break;
            if (A5F.charAt(ja9R) === "@") {
                bKy8q = true;
                this.EW5b = bKx8p = ja9R;
                break
            }
        }
        if (bKy8q && d5i.shiftKey === false && iT9K !== 38 && iT9K !== 40) {
            if (iT9K !== 27 && iT9K !== 13) {
                this.sG1x ? this.sG1x.S5X() : null;
                this.bKl8d(bKx8p)
            }
        } else if (iT9K !== 38 && iT9K !== 40 && d5i.keyCode !== 32) {
            this.sG1x ? this.sG1x.S5X() : null
        }
    };
    b5g.ciF3x = function (bj5o) {
        var bj5o = bj5o;
        var j5o = this.EZ5e();
        var e5j = {
            parent: document.body,
            offset: bj5o,
            data: j5o,
            target: this.fH7A,
            rangeData: this.nm0x,
            atIndex: this.EW5b
        };
        this.sG1x ? this.sG1x.S5X() : null;
        this.sG1x = D5I.bJD8v.B5G(e5j)
    };
    b5g.EZ5e = function () {
        var ciE3x = fF7y.sz1x(this.fH7A).start;
        var ciC3x = this.EW5b + 1;
        var bKE8w = fF7y.ciI3x() || [];
        var bKF8x = [];
        var bD5I = this.fH7A.value.substring(ciC3x, ciE3x).toLowerCase();
        bD5I = bD5I.replace(/\[/g, "\\[");
        bD5I = bD5I.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pw0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.pw0x = [];
        if (!this.pw0x[0]) this.bKa8S();
        for (var bd5i = 0; bd5i < bKE8w.length; bd5i++) {
            for (var v5A = 0; v5A < this.pw0x.length; v5A++) {
                if (this.pw0x[v5A].nickname == bKE8w[bd5i]) bKF8x.push(this.pw0x[v5A])
            }
        }
        this.pw0x = k5p.bXN1x(this.pw0x, bKF8x, {union: true, begin: true});
        var ciA3x = this.pw0x.length;
        var Zf1x = [];
        var LH7A, LI7B;
        if (!this.pw0x[0])return {suggests: Zf1x};
        for (var i = 0; i < ciA3x; i++) {
            LH7A = this.pw0x[i].nickname.toLowerCase().search(bD5I);
            LI7B = this.pw0x[i].py ? this.pw0x[i].py.toLowerCase().search(bD5I) : -1;
            if (LH7A !== -1 || LI7B != -1) Zf1x.push(this.pw0x[i]);
            if (Zf1x.length === 10)break
        }
        return {suggests: Zf1x}
    };
    b5g.Qq8i = function () {
        var gm7f = this.nm0x || {text: "", start: 0, end: 0};
        h5m.z5E(this.fH7A, "focus");
        fF7y.EU5Z(this.fH7A, gm7f, "@");
        this.nm0x = fF7y.sz1x(this.fH7A);
        this.EW5b = gm7f.start;
        this.bKl8d(this.EW5b)
    };
    b5g.EM5R = function () {
        if (this.sG1x) this.sG1x.S5X()
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), h5m = c5h("nej.v"), k5p = c5h("nej.u"), v5A = c5h("nej.j"), D5I = c5h("nm.w"),
        cj6d = c5h("nej.ut"), bI6C = c5h("nej.ui"), b5g;
    var ciz3x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var ciw3x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var fY7R = a4e.hV8N(ciw3x);
    var hO8G = a4e.rH1x(ciz3x);
    D5I.QP8H = NEJ.C();
    b5g = D5I.QP8H.O5T(bI6C.eq7j);
    b5g.cm6g = function (e5j) {
        this.fx7q = {};
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j);
        this.fx7q.txt = a4e.y5D(e5j.target);
        this.Qf8X();
        this.QW8O = D5I.bJV8N.B5G(this.fx7q)
    };
    b5g.bC5H = function (e5j) {
        this.bH6B();
        this.QW8O.S5X()
    };
    b5g.bZ6T = function () {
        this.ca6U = fY7R;
        this.kU9L = hO8G
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.cQ6K(a4e.y5D(this.o5t));
        this.fx7q.body = this.o5t;
        this.fx7q.before = i5n[0];
        this.fx7q.flag = i5n[1];
        this.fx7q.after = i5n[2]
    };
    b5g.Qf8X = function () {
        var oP0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < oP0x.length; i++) {
            if (oP0x[i] === "width" && a4e.cZ6T(this.fx7q.txt, oP0x[i]) == "100%") {
                a4e.X5c(this.o5t, oP0x[i], this.fx7q.txt.offsetWidth + "px");
                continue
            }
            a4e.X5c(this.o5t, oP0x[i], a4e.cZ6T(this.fx7q.txt, oP0x[i]))
        }
    };
    b5g.Qq8i = function () {
        this.QW8O.Qq8i()
    };
    b5g.EM5R = function () {
        this.QW8O.EM5R()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, eY7R = NEJ.R, a4e = c5h("nej.e"), h5m = c5h("nej.v"),
        k5p = c5h("nej.u"), H5M = c5h("nej.ut"), jL9C = c5h("nm.c"), R5W = {}, b5g;
    if (!!jL9C.bbS2x)return;
    jL9C.bbS2x = NEJ.C();
    b5g = jL9C.bbS2x.O5T(H5M.cz6t);
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j)
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    b5g.Fb5g = function (eA7t, dn6h) {
        if (R5W[eA7t]) {
            this.hu8m("register commonJST[" + eA7t + "] duplicate");
            return
        }
        if (!k5p.gd7W(dn6h)) {
            dn6h = ctl.comJST.civ3x(eA7t, dn6h)
        }
        R5W[eA7t] = dn6h
    };
    b5g.ciu3x = function (Zd1x) {
        if (k5p.ep7i(Zd1x)) {
            k5p.be5j(Zd1x, function (r5w) {
                ctl.comJST.Fb5g.apply(this, r5w)
            }, this)
        } else if (k5p.kf9W(Zd1x)) {
            k5p.ed7W(Zd1x, function (eJ7C, J5O) {
                ctl.comJST.Fb5g(J5O, eJ7C)
            })
        }
    };
    b5g.civ3x = function (eA7t, tH1x, bLq8i) {
        tH1x = tH1x || {};
        NEJ.X(tH1x, {comJST: this.oU0x});
        if (tH1x.resetDataName && !k5p.ep7i(tH1x.resetDataName)) {
            tH1x.resetDataName = [tH1x.resetDataName]
        }
        return function () {
            var j5o = arguments[0], iP9G = arguments[1];
            if (tH1x.resetDataName) {
                var ja9R = {};
                for (var i = 0, ii = tH1x.resetDataName.length; i < ii; i++) {
                    ja9R[tH1x.resetDataName[i]] = arguments[i]
                }
                j5o = ja9R;
                iP9G = arguments[ii]
            }
            NEJ.X(j5o, tH1x, dC7v);
            if (bLq8i) {
                iP9G = iP9G || {};
                NEJ.X(iP9G, bLq8i)
            }
            return a4e.bP6J(eA7t, j5o, iP9G)
        }
    };
    b5g.oU0x = function (eA7t) {
        if (!R5W[eA7t]) {
            this.hu8m("commonJST[" + eA7t + "] is unregister");
            return ""
        } else {
            return R5W[eA7t].apply(null, eY7R.slice.call(arguments, 1))
        }
    };
    b5g.dump = function () {
        return R5W
    };
    b5g.hu8m = function (cit3x) {
        if (console && console.log) {
            console.log(cit3x)
        }
    };
    var dC7v = function (eJ7C, J5O) {
        return J5O == "resetDataName"
    };
    c5h("ctl").comJST = jL9C.bbS2x.fX7Q()
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, bm5r = NEJ.F, eY7R = NEJ.R, a4e = c5h("nej.e"), h5m = c5h("nej.v"),
        k5p = c5h("nej.u"), H5M = c5h("nej.ut"), jL9C = c5h("nm.c"), R5W = {}, b5g;
    if (!!jL9C.bcE2x)return;
    jL9C.bcE2x = NEJ.C();
    b5g = jL9C.bcE2x.O5T(H5M.cz6t);
    b5g.cm6g = function () {
        this.ct6n();
        var e5j = {
            "com-mv-artists": function (fj7c, dH7A, En5s, bda2x) {
                return a4e.bP6J("com-mv-artists", {
                    artists: fj7c,
                    clazz: dH7A,
                    boxClazz: bda2x,
                    mark: En5s || function (cN6H) {
                        return cN6H
                    },
                    escape: k5p.dM7F,
                    comJST: ctl.comJST.oU0x
                })
            }, "com-album-artists": function (fj7c, dH7A, En5s, bda2x) {
                return a4e.bP6J("com-album-artists", {
                    artists: fj7c,
                    clazz: dH7A,
                    boxClazz: bda2x,
                    mark: En5s || function (cN6H) {
                        return cN6H
                    },
                    escape: k5p.dM7F,
                    comJST: ctl.comJST.oU0x
                })
            }, "com-artists-title": {resetDataName: ["artists"], escape: k5p.dM7F}
        };
        for (var C5H in e5j) {
            ctl.comJST.Fb5g(C5H, e5j[C5H])
        }
    };
    b5g.bk5p = function (e5j) {
        this.bl5q(e5j)
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    c5h("ctl").comJSTUtil = jL9C.bcE2x.fX7Q()
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, a4e = c5h("nej.e"), cK6E = c5h("nej.p"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        H5M = c5h("nej.ut"), v5A = c5h("nej.j"), D5I = c5h("nm.w"), fF7y = c5h("nm.ut"), p5u = c5h("nm.d"),
        l5q = c5h("nm.x"), n5s = c5h("nm.l"), Za1x = [2, 3], dB7u = ["sn", "db"], b5g, K5P, cir3x = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        }, YX1x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频"
        }, bLz8r = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        }, cip3x = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, Cu5z = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n5s.xj3x = NEJ.C();
    b5g = n5s.xj3x.O5T(n5s.dU7N);
    K5P = n5s.xj3x.cg6a;
    b5g.bk5p = function (e5j) {
        if (e5j.onclose === undefined) {
            e5j.onclose = this.bLH8z.g5l(this)
        }
        this.bl5q(e5j);
        this.yJ4N = e5j.isPub;
        this.jP9G = e5j.rid || -1;
        this.er7k = e5j.type || -1;
        this.bfp2x = e5j.purl;
        this.YT1x = e5j.name || "";
        this.Jz6t = e5j.author || "";
        this.bfC2x = e5j.authors || "";
        this.YR1x = e5j.actId;
        this.YO0x = e5j.actName;
        this.bMa8S = e5j.title;
        this.YN0x = {};
        this.cio3x = e5j.mesg || "";
        this.cin3x = e5j.placeholder || "说点什么吧";
        this.bgk2x = e5j.hideTip;
        var i5n, fL7E = +(new Date);
        try {
            i5n = top.localCache.y5D("user") || {}
        } catch (e) {
            i5n = {}
        }
        for (var i = 0, i5n = i5n.bindings || [], es7l; i < i5n.length; ++i) {
            es7l = !i5n[i].tokenJsonStr ? null : JSON.parse(i5n[i].tokenJsonStr);
            if (!es7l || es7l.expires_in === undefined)continue;
            var YL0x = parseInt(es7l.expires_in), YI0x = parseInt(i5n[i].refreshTime),
                cil3x = (YL0x + YI0x) * 1e3 - 5 * 60 * 1e3;
            if (cil3x > fL7E) this.YN0x[i5n[i].type] = !0
        }
        this.va2x = D5I.DM5R.B5G({parent: this.Yv0x, err: this.bMF8x});
        if (this.gZ8R) {
            this.gZ8R.S5X()
        }
        this.gZ8R = D5I.QP8H.B5G({parent: document.body, target: this.eO7H});
        if (this.er7k == 24 || this.er7k == 21 || this.tL2x()) {
            this.vz3x.style.display = "none"
        } else {
            this.vz3x.style.display = "";
            this.nt0x = D5I.bog4k.B5G({
                parent: this.bio3x,
                button: this.vz3x,
                onstartupload: this.bMS9J.g5l(this, true),
                onfinishupload: this.bMS9J.g5l(this, false)
            })
        }
        if (this.tL2x()) {
            this.oy0x.innerText = "";
            a4e.x5C(this.oy0x, "info-video");
            this.Fl5q = D5I.bMZ9Q.B5G({
                parent: this.oy0x,
                windowBody: this.o5t,
                onstepping: this.cik3x.g5l(this),
                oncancel: function () {
                    this.bp5u()
                }.g5l(this)
            });
            if (e5j.extError) {
                this.Fl5q.biC3x({agent: e5j.videoUploadAgent, errorCode: -600})
            } else {
                this.Fl5q.EI5N({agent: e5j.videoUploadAgent, fileName: e5j.videoFileName})
            }
            a4e.x5C(this.biF3x, "f-hide")
        } else {
            a4e.w5B(this.biF3x, "f-hide")
        }
    };
    b5g.bC5H = function () {
        this.bH6B();
        if (this.va2x) {
            this.va2x.S5X();
            delete this.va2x
        }
        if (this.gZ8R) {
            this.gZ8R.S5X();
            delete this.gZ8R
        }
        if (this.nt0x) {
            this.nt0x.S5X();
            delete this.nt0x
        }
        if (this.lN0x) {
            this.lN0x.S5X();
            delete this.lN0x
        }
    };
    b5g.bZ6T = function () {
        this.ca6U = "m-wgt-sharewin"
    };
    b5g.bR6L = function () {
        this.cb6V();
        this.bNi9Z = a4e.cQ6K(this.o5t)[0];
        var bo5t = a4e.I5N(this.o5t, "j-flag");
        this.oT0x = bo5t.shift();
        this.bMF8x = bo5t.shift();
        this.Yv0x = bo5t.shift();
        this.eO7H = bo5t.shift();
        this.oy0x = bo5t.shift();
        this.biX3x = bo5t.shift();
        this.cii3x = bo5t.shift();
        this.vz3x = bo5t.shift();
        this.ch6b = bo5t.shift();
        this.bio3x = bo5t.shift();
        this.ym3x = bo5t.shift();
        this.cuI6C = bo5t.shift();
        this.biF3x = bo5t.shift();
        this.dY7R = bo5t.shift();
        this.Fm5r = a4e.I5N(this.biF3x, "j-t");
        this.Au4y = H5M.Dv5A.B5G({list: a4e.cQ6K(this.oT0x), selected: "z-slt", onchange: this.blj3x.g5l(this)});
        if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "8.0") {
            a4e.X5c(this.Yv0x, "position", "relative");
            a4e.X5c(this.Yv0x, "zIndex", "10")
        }
        h5m.q5v(window, "snsbind", this.KH7A.g5l(this));
        h5m.q5v(this.eO7H, "input", this.fm7f.g5l(this));
        h5m.q5v(this.eO7H, "keyup", this.sC1x.g5l(this));
        h5m.q5v(this.o5t, "click", this.cy6s.g5l(this));
        this.P5U = p5u.bnp4t.B5G();
        this.P5U.q5v("onshareall", this.Yt0x.g5l(this, 0));
        this.P5U.q5v("onshareerror", this.hN8F.g5l(this));
        this.P5U.q5v("onshareprivate", this.Yt0x.g5l(this, 1));
        this.Ys0x = p5u.yo3x.B5G();
        this.hu8m = p5u.hK8C.B5G();
        try {
            this.KS7L = top.api.sharePermission
        } catch (e) {
        }
        if (!this.KS7L) {
            this.KS7L = Cu5z;
            v5A.br5w("/api/event/user/permission", {
                type: "json", onload: function (d5i) {
                    if (d5i.code == 200) {
                        this.KS7L = NEJ.EX(Cu5z, d5i)
                    }
                }.g5l(this)
            })
        }
    };
    b5g.blj3x = function (d5i) {
        d5i.index == 0 ? a4e.w5B(this.bNi9Z, "m-plshare") : a4e.x5C(this.bNi9Z, "m-plshare");
        this.Yv0x.style.display = d5i.index == 0 ? "none" : "";
        this.cii3x.style.display = d5i.index == 0 ? "" : "none";
        this.vz3x.style.display = d5i.index == 0 ? "" : "none";
        if (this.er7k == 24 || this.er7k == 21) {
            this.vz3x.style.display = "none"
        }
        this.bMF8x.style.display = "none";
        this.eO7H.value = "";
        this.bX6R();
        this.BI4M();
        if (d5i.index == 0) {
            var dk6e = a4e.cZ6T(this.eO7H, "width");
            if (dk6e == "auto" || !dk6e) {
                return
            } else {
                if (this.gZ8R) {
                    this.gZ8R.S5X()
                }
                this.gZ8R = D5I.QP8H.B5G({parent: document.body, target: this.eO7H})
            }
            this.bio3x.style.display = ""
        } else {
            if (this.gZ8R) {
                this.gZ8R.S5X();
                delete this.gZ8R
            }
            this.bio3x.style.display = "none"
        }
    };
    b5g.cy6s = function (d5i) {
        var f5k = h5m.U5Z(d5i, "d:action");
        if (!f5k)return;
        if (a4e.u5z(f5k, "action") == "search") {
            if (!this.tL2x()) {
                h5m.cd6X(d5i)
            }
        } else if (a4e.u5z(f5k, "default") === undefined) {
            h5m.cd6X(d5i)
        }
        switch (a4e.u5z(f5k, "action")) {
            case"txt":
                this.lc9T();
                break;
            case"search":
                if (this.tL2x()) {
                } else if (this.yJ4N && this.er7k != 24) {
                    if (this.lN0x) {
                        this.lN0x.S5X()
                    }
                    this.lN0x = D5I.bgP2x.B5G({
                        parent: this.o5t.parentNode,
                        onfinish: this.bmP4T.g5l(this),
                        oncancel: this.cig3x.g5l(this)
                    });
                    this.bng4k = true;
                    this.o5t.style.display = "none";
                    this.ye3x(this.jP9G > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case"at":
                h5m.rP1x(d5i);
                !!this.gM8E && this.gM8E.bp5u();
                this.gZ8R.Qq8i();
                this.fw7p();
                break;
            case"emot":
                h5m.rP1x(d5i);
                !!this.gZ8R && this.gZ8R.EM5R();
                if (!this.gM8E) {
                    this.gM8E = n5s.EN5S.B5G({parent: this.biX3x});
                    this.gM8E.q5v("onselect", this.vO3x.g5l(this))
                }
                this.gM8E.M5R();
                break;
            case"upload":
                break;
            case"sns":
                h5m.bh5m(d5i);
                var bnx4B, bD5I, t5y = a4e.u5z(f5k, "type");
                if (!this.YN0x[t5y]) {
                    bnx4B = f5k.href.split("?");
                    bD5I = k5p.hq8i(bnx4B[1]);
                    bD5I["csrf_token"] = v5A.gB7u("__csrf");
                    top.open(bnx4B[0] + "?" + k5p.de6Y(bD5I));
                    return
                }
                var bv5A = {2: "sn", 3: "db", 4: "rr"};
                l5q.Ag4k(f5k, "u-slg-" + bv5A[t5y] + "-gray");
                break;
            case"close":
                !!this.gM8E && this.gM8E.bp5u();
                this.bLH8z();
                break;
            case"share":
                h5m.bh5m(d5i);
                if (this.tL2x()) {
                    if (!a4e.by5D(f5k, "u-btn2-2-dis")) {
                        this.cif2x()
                    }
                } else if (a4e.by5D(f5k, "u-btn2-2-dis")) {
                    if (!this.KS7L.pubEventWithoutResource && !(this.jP9G > 0)) {
                        this.cie2x()
                    } else {
                    }
                } else if (!(this.jP9G > 0) && !this.eO7H.value && this.nt0x && this.nt0x.Mo7h().length == 0) {
                    n5s.Z5e.M5R({type: 2, tip: "请输入内容"})
                } else {
                    this.cic2x()
                }
                break
        }
    };
    b5g.cie2x = function () {
        var rF1x = 0, bnZ4d = function () {
            if (rF1x % 2) {
                a4e.w5B(this.oy0x, "z-show")
            } else {
                a4e.x5C(this.oy0x, "z-show")
            }
            rF1x++;
            if (rF1x > 5) {
                clearInterval(eR7K)
            }
        }, eR7K;
        return function () {
            rF1x = 0;
            clearInterval(eR7K);
            eR7K = setInterval(bnZ4d.g5l(this), 200)
        }
    }();
    b5g.KH7A = function (m5r) {
        m5r = m5r.result;
        this.YN0x[m5r.type] = !0;
        var s5x = k5p.cV6P(Za1x, m5r.type), cc6W = "u-slg-" + dB7u[s5x] + "-gray";
        a4e.w5B(this.Fm5r[s5x], cc6W)
    };
    b5g.bmP4T = function (bt5y) {
        var j5o = bt5y.data;
        this.jP9G = bt5y.id;
        this.er7k = bt5y.type;
        this.o5t.style.display = "";
        this.ye3x(this.bMa8S);
        this.lN0x && this.lN0x.S5X();
        this.bng4k = false;
        this.bfp2x = j5o.picUrl;
        this.YT1x = j5o.title || "";
        this.Jz6t = j5o.author || "";
        this.bfC2x = j5o.authors || "";
        this.cib2x();
        this.Ll7e()
    };
    b5g.cik3x = function (e5j) {
        this.bfp2x = e5j.coverUrl;
        this.Lp7i = e5j;
        this.Ll7e()
    };
    b5g.cig3x = function () {
        this.lN0x && this.lN0x.S5X();
        this.o5t.style.display = "";
        this.ye3x(this.bMa8S);
        this.bng4k = false;
        this.Ll7e()
    };
    b5g.vO3x = function (d5i) {
        var bi5n = "[" + d5i.text + "]";
        fF7y.EU5Z(this.eO7H, this.nm0x, bi5n);
        this.fw7p()
    };
    b5g.fm7f = function (d5i) {
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.fw7p.g5l(this), 0) : this.fw7p()
    };
    b5g.sC1x = function (d5i) {
        this.lc9T();
        if (d5i.keyCode == 8) this.fw7p()
    };
    b5g.fw7p = function () {
        this.lc9T();
        this.BI4M()
    };
    b5g.BI4M = function () {
        var bq5v = Math.ceil(k5p.fv7o(this.eO7H.value.trim()) / 2);
        this.ch6b.innerText = 140 - bq5v;
        bq5v > 140 ? a4e.ev7o(this.ch6b, "s-fc4", "s-fc6") : a4e.ev7o(this.ch6b, "s-fc6", "s-fc4")
    };
    b5g.cic2x = function () {
        if (this.cu6o())return;
        if (k5p.fv7o(this.eO7H.value.trim()) > 280) {
            this.bX6R("字数超过140个字符");
            return
        }
        var t5y = this.Au4y.rC1x(), j5o;
        if (t5y == 0) {
            for (var i = 0, xV3x = []; i < this.Fm5r.length; ++i) {
                if (!a4e.by5D(this.Fm5r[i], "u-slg-" + dB7u[i] + "-gray")) xV3x.push(Za1x[i])
            }
            this.cu6o(!0);
            j5o = {
                id: this.jP9G,
                msg: this.eO7H.value.trim(),
                type: this.Yo0x(this.er7k),
                picUrl: this.bfp2x,
                snsTypes: xV3x.join(","),
                isPub: this.yJ4N
            };
            if (this.YR1x > 0) {
                j5o.actId = this.YR1x;
                if (this.YO0x) {
                    j5o.msg = "#" + this.YO0x + "#" + j5o.msg
                }
            }
            var mP0x = this.nt0x && this.nt0x.Mo7h();
            if (mP0x && mP0x.length) {
                j5o.pics = mP0x
            }
            this.P5U.ckK3x(j5o)
        } else {
            var rG1x = this.va2x.Kt7m();
            if (rG1x.length <= 0) {
                this.bX6R("请至少选择一位好友");
                return
            }
            this.P5U.ckJ3x({
                data: {
                    id: this.jP9G,
                    msg: this.eO7H.value.trim(),
                    type: this.Yo0x(this.er7k),
                    userIds: "[" + rG1x.join(",") + "]"
                }
            })
        }
    };
    b5g.cif2x = function () {
        if (this.cu6o()) {
            return
        }
        this.hu8m.gl7e("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k5p.fv7o(this.eO7H.value.trim()) > 280) {
            this.bX6R("字数超过140个字符");
            return
        }
        for (var i = 0, xV3x = []; i < this.Fm5r.length; ++i) {
            if (!a4e.by5D(this.Fm5r[i], "u-slg-" + dB7u[i] + "-gray")) xV3x.push(Za1x[i])
        }
        this.cu6o(!0);
        var uK2x = this.Lp7i.fileInfo, j5o = {msg: this.eO7H.value.trim(), type: "video"}, cia2x = {
            vid: uK2x.vid,
            coverId: this.Lp7i.coverId,
            nosKey: uK2x.objectKey,
            size: uK2x.size,
            duration: Math.floor(uK2x.duration / 1e3),
            width: uK2x.width,
            height: uK2x.height
        };
        if (this.YR1x > 0) {
            j5o.actId = this.YR1x;
            if (this.YO0x) {
                j5o.msg = "#" + this.YO0x + "#" + j5o.msg
            }
        }
        j5o.videoinfo = JSON.stringify(cia2x);
        this.P5U.ckH3x({data: j5o, snsTypes: ""})
    };
    b5g.Yt0x = function (t5y, m5r) {
        this.cu6o(!1);
        this.bp5u();
        if (!this.bgk2x) {
            if (this.tL2x()) {
                n5s.Z5e.M5R({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n5s.Z5e.M5R({
                    tip: "分享成功" + (m5r.point > 0 ? ' 获得<em class="s-fc6">' + m5r.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h5m.z5E(n5s.xj3x, "sharesuccess", {isPrivate: t5y, rid: this.jP9G, rtype: this.er7k, data: m5r.event});
        this.z5E("onshare")
    };
    b5g.hN8F = function (m5r) {
        this.cu6o(!1);
        var bF6z = "分享失败";
        if (m5r.code) {
            switch (m5r.code) {
                case 404:
                    bF6z = "分享的资源不存在";
                    break;
                case 407:
                    bF6z = "输入内容包含有关键字";
                    break;
                case 408:
                    bF6z = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF6z = m5r.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l5q.fb7U({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.bX6R(bF6z)
    };
    b5g.lc9T = function () {
        this.nm0x = fF7y.sz1x(this.eO7H)
    };
    b5g.bX6R = function (bF6z) {
        this.dv7o(this.dY7R, bF6z)
    };
    b5g.cu6o = function (cD6x) {
        return this.dL7E(this.ym3x, cD6x, "分享", "分享中...")
    };
    b5g.Yo0x = function (jo9f) {
        return cir3x[jo9f] || ""
    };
    b5g.chZ2x = function () {
        var ey7r, tK1x = this.Yo0x(this.er7k);
        this.oy0x.style.display = "";
        if (this.jP9G <= 0) {
            this.oy0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.YT1x) {
                this.oy0x.style.display = "none";
                return
            }
            var Yl0x = this.yJ4N && this.er7k != 24;
            ey7r = (YX1x[tK1x] ? YX1x[tK1x] + "：" : "") + this.YT1x + (bLz8r[tK1x] || " ") + (tK1x == "mv" || tK1x == "album" ? this.bfC2x || this.Jz6t : this.Jz6t);
            a4e.dS7L(this.oy0x, "m-xwgt-share-infobar", {canChange: Yl0x, info: ey7r});
            if (Yl0x) {
                a4e.w5B(this.oy0x, "z-dis")
            } else {
                a4e.x5C(this.oy0x, "z-dis")
            }
        }
        a4e.w5B(this.oy0x, "info-video")
    };
    b5g.cib2x = function () {
        var tK1x = this.Yo0x(this.er7k),
            ey7r = (YX1x[tK1x] ? YX1x[tK1x] + "：" : "") + this.YT1x + (bLz8r[tK1x] || " ") + (tK1x == "mv" || tK1x == "album" ? this.bfC2x || this.Jz6t : this.Jz6t);
        Yl0x = this.yJ4N && this.er7k != 24;
        if (this.tL2x()) {
            a4e.x5C(this.oy0x, "info-video")
        } else {
            a4e.w5B(this.oy0x, "info-video");
            a4e.dS7L(this.oy0x, "m-xwgt-share-infobar", {canChange: Yl0x, isPub: this.yJ4N, info: ey7r})
        }
    };
    b5g.bsq5v = function () {
        var Fr5w = this.eO7H.value;
        if (this.yJ4N) {
            if (!!this.bng4k) {
                return !!Fr5w && !!Fr5w.length || !!this.nt0x && this.nt0x.Mo7h().length > 0
            } else {
                return this.jP9G > 0 || !!Fr5w && !!Fr5w.length || !!this.nt0x && this.nt0x.Mo7h().length > 0
            }
        } else {
            return !!Fr5w && !!Fr5w.length || !!this.nt0x && this.nt0x.Mo7h().length > 0
        }
    };
    b5g.Ll7e = function () {
        var bqj4n = false;
        if (this.tL2x()) {
            if (this.Lp7i && this.Lp7i.fileInfo && this.Lp7i.coverId) {
                bqj4n = true
            }
        } else if (!this.yJ4N || this.KS7L.pubEventWithoutResource || this.jP9G > 0) {
            bqj4n = true
        }
        if (bqj4n) {
            a4e.w5B(this.ym3x, "u-btn2-2-dis")
        } else {
            a4e.x5C(this.ym3x, "u-btn2-2-dis")
        }
    };
    b5g.bMS9J = function (bqY4c) {
        if (bqY4c) {
            a4e.x5C(this.ym3x, "u-btn2-2-dis")
        } else {
            this.Ll7e()
        }
    };
    b5g.bLH8z = function (d5i) {
        if (d5i) {
            d5i.stopped = true
        }
        if (this.tL2x()) {
            this.hu8m.gl7e("click", {target: d5i ? "cross" : "cancel", targetid: "button", page: "sharevideo"});
            this.Fl5q.chY2x(this.bsq5v())
        } else if (this.bsq5v()) {
            l5q.gQ8I({
                title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function (W5b) {
                    if (W5b == "ok") {
                        this.bp5u()
                    }
                }.g5l(this)
            })
        } else {
            this.bp5u()
        }
    };
    b5g.ye3x = function (eC7v, dq6k) {
        this.nH0x.zq4u(eC7v, dq6k)
    };
    b5g.Yf0x = function (t5y) {
        this.hu8m.gl7e("page", {type: t5y})
    };
    b5g.tL2x = function () {
        return this.er7k == 39
    };
    b5g.M5R = function () {
        var chX2x = function (r5w, s5x) {
            var cc6W = "u-slg-" + dB7u[s5x] + "-gray";
            !this.YN0x[Za1x[s5x]] ? a4e.x5C(r5w, cc6W) : a4e.w5B(r5w, cc6W)
        };
        return function () {
            if (this.tL2x()) {
                this.ye3x("添加视频")
            }
            K5P.M5R.call(this);
            this.o5t.style.display = "";
            this.bX6R();
            this.cu6o(!1);
            this.Au4y.EI5N(0);
            this.eO7H.focus();
            this.eO7H.value = this.cio3x || "";
            this.eO7H.placeholder = this.cin3x || "";
            if (!this.tL2x()) {
                this.chZ2x()
            }
            this.fw7p();
            this.va2x.ciY3x();
            k5p.be5j(this.Fm5r, chX2x, this);
            this.lc9T();
            if (this.yJ4N) {
                this.oT0x.style.display = "none"
            } else {
                this.oT0x.style.display = ""
            }
            this.Ll7e()
        }
    }();
    b5g.bp5u = function (d5i) {
        K5P.bp5u.call(this);
        !!this.gM8E && this.gM8E.bp5u();
        if (this.va2x) {
            this.va2x.S5X();
            delete this.va2x
        }
        if (this.gZ8R) {
            this.gZ8R.S5X();
            delete this.gZ8R
        }
        if (this.nt0x) {
            this.nt0x.S5X();
            delete this.nt0x
        }
        if (this.Fl5q) {
            this.Fl5q = this.Fl5q.S5X()
        }
        if (this.lN0x) {
            this.lN0x.S5X();
            delete this.lN0x
        }
    };
    l5q.ms0x = function (e5j) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e5j.title === undefined) {
            e5j.title = "分享"
        }
        if (e5j.actId) {
            var t5y = cip3x[e5j.resourceType], du7n = e5j.resourceJson, hp8h;
            if (k5p.fh7a(du7n)) {
                try {
                    du7n = JSON.parse(du7n)
                } catch (e) {
                }
            }
            if (t5y) {
                hp8h = l5q.bJc8U(t5y, du7n);
                e5j.name = hp8h.title;
                e5j.author = hp8h.author;
                e5j.picUrl = hp8h.picUrl;
                e5j.type = t5y;
                e5j.rid = (du7n || []).id
            }
        }
        n5s.xj3x.M5R(e5j)
    };
    H5M.fr7k.B5G({element: n5s.xj3x, event: ["sharesuccess"]})
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, h5m = c5h("nej.v"), a4e = c5h("nej.e"), v5A = c5h("nej.j"), n5s = c5h("nm.l"),
        D5I = c5h("nm.w"), bI6C = c5h("nej.ui"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), b5g, K5P;
    n5s.Yd0x = NEJ.C();
    b5g = n5s.Yd0x.O5T(n5s.dU7N);
    K5P = n5s.Yd0x.cg6a;
    b5g.cm6g = function () {
        this.ct6n()
    };
    b5g.bR6L = function () {
        this.cb6V();
        var i5n = a4e.I5N(this.o5t, "j-flag");
        h5m.q5v(i5n[0], "click", this.Ch5m.g5l(this))
    };
    b5g.bZ6T = function () {
        this.ca6U = "m-import-ok"
    };
    b5g.bk5p = function (e5j) {
        e5j.parent = e5j.parent || document.body;
        e5j.title = "歌曲同步完成";
        this.bl5q(e5j)
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    b5g.Ch5m = function (d5i) {
        this.bp5u();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b5g.za4e = function () {
        this.bp5u()
    };
    b5g.bMD8v = function (d5i) {
        if (d5i.keyCode == 13) this.AY4c()
    }
})();
(function () {
    var c5h = NEJ.P, Y5d = NEJ.O, h5m = c5h("nej.v"), a4e = c5h("nej.e"), v5A = c5h("nej.j"), N5S = c5h("nej.p"),
        k5p = c5h("nej.u"), n5s = c5h("nm.l"), D5I = c5h("nm.w"), bI6C = c5h("nej.ui"), p5u = c5h("nm.d"),
        l5q = c5h("nm.x"), b5g, K5P;
    n5s.bsP5U = NEJ.C();
    b5g = n5s.bsP5U.O5T(n5s.dU7N);
    b5g.bZ6T = function () {
        this.ca6U = "m-programtips-layer"
    };
    b5g.bR6L = function () {
        this.cb6V();
        this.bU6O = a4e.I5N(this.o5t, "j-flag")
    };
    b5g.bk5p = function (e5j) {
        e5j.clazz = " m-layer-programtips";
        e5j.parent = e5j.parent || document.body;
        e5j.title = "付费内容提示";
        e5j.draggable = !0;
        e5j.destroyalbe = !0;
        e5j.mask = true;
        this.bl5q(e5j);
        this.gA7t = e5j.id;
        this.chU2x = e5j.radiotype;
        this.kk9b = location.protocol + "//" + (this.chS2x() || "music.163.com") + "/m/" + this.chU2x + "?id=" + this.gA7t;
        this.chR2x()
    };
    b5g.bC5H = function () {
        this.bH6B()
    };
    b5g.za4e = function () {
        this.bp5u()
    };
    b5g.Ch5m = function (d5i) {
        this.z5E("onok", A5F);
        this.bp5u()
    };
    l5q.bsU5Z = function (e5j) {
        n5s.bsP5U.B5G(e5j).M5R()
    };
    b5g.chR2x = function () {
        v5A.br5w("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k5p.de6Y({url: this.kk9b, size: 180}),
            onload: function (j5o) {
                if (j5o.code == 200) {
                    this.chP2x(j5o.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g5l(this)
        })
    };
    b5g.chS2x = function () {
        var chE2x = location.host;
        if (chE2x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b5g.chP2x = function (lf9W) {
        this.bU6O[0].style.backgroundImage = "url(" + lf9W + ")"
    }
})();
(function () {
    var c5h = NEJ.P, a4e = c5h("nej.e"), cK6E = c5h("nej.p"), h5m = c5h("nej.v"), k5p = c5h("nej.u"),
        H5M = c5h("nej.ut"), v5A = c5h("nej.j"), p5u = c5h("nm.d"), l5q = c5h("nm.x"), F5K = c5h("nm.m"),
        n5s = c5h("nm.l"), L5Q = c5h("nm.m.f"), b5g, K5P;
    F5K.cO6I = NEJ.C();
    b5g = F5K.cO6I.O5T(H5M.dj6d);
    b5g.bJ6D = function () {
        var pz0x = !1;
        return function () {
            if (pz0x)return;
            pz0x = !0;
            this.bM6G();
            if (top == self) {
                return
            }
            this.sh1x = a4e.y5D("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.btg5l()
            }
            H5M.fr7k.B5G({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bT6N([[window, "scroll", this.zi4m.g5l(this)], [document, "keyup", this.chB2x.g5l(this)], [document.body, "click", this.rb1x.g5l(this)], [document, "mouseup", this.chz2x.g5l(this)], [this.sh1x, "click", this.Mb7U.g5l(this)], [p5u.rd1x, "message", this.qx1x.g5l(this)]]);
            l5q.ckS3x(document.body);
            this.zi4m();
            if (this.xP3x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p5u.rd1x.fX7Q().uq2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cK6E.cS6M.browser == "ie" && parseInt(cK6E.cS6M.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gq7j = top.player.getPlaying();
                    if (gq7j && gq7j.track && gq7j.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gq7j.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.xE3x.g5l(this);
            this.kg9X = p5u.hK8C.B5G();
            window.log = this.mm0x.g5l(this);
            var rs1x = location.search;
            if (rs1x) {
                var bD5I = rs1x.substr(rs1x.indexOf("?") + 1), gc7V = k5p.hq8i(bD5I);
                if (gc7V && gc7V["_hash"]) location.hash = gc7V["_hash"]
            }
        }
    }();
    b5g.chB2x = function (d5i) {
        var f5k = h5m.U5Z(d5i);
        try {
            if (d5i.keyCode == 80 && l5q.bFX7Q() || ["textarea", "input"].indexOf(f5k.tagName.toLowerCase()) >= 0)return;
            h5m.z5E(top.document, "keyup", {ctrlKey: d5i.ctrlKey, keyCode: d5i.keyCode})
        } catch (e) {
        }
    };
    b5g.rb1x = function (d5i) {
        var f5k = h5m.U5Z(d5i);
        if (f5k && f5k.tagName == "INPUT")return;
        var f5k = h5m.U5Z(d5i, "d:pid");
        if (f5k) {
            h5m.cd6X(d5i);
            var oC0x = a4e.u5z(f5k, "pid"), xQ3x = a4e.u5z(f5k, "ptype"), W5b = a4e.u5z(f5k, "action") || "play";
            switch (W5b) {
                case"subscribe":
                    l5q.lE9v({tracks: [oC0x]});
                    break
            }
        }
        f5k = h5m.U5Z(d5i, "d:resAction");
        if (f5k && f5k.className.indexOf("-dis") == -1) {
            var cG6A = a4e.u5z(f5k, "resId"), t5y = a4e.u5z(f5k, "resType"), bbX2x = a4e.u5z(f5k, "resRadiotype"),
                bbY2x = a4e.u5z(f5k, "resRadioid"), dI7B = a4e.u5z(f5k, "resFrom"), j5o = a4e.u5z(f5k, "resData"),
                W5b = a4e.u5z(f5k, "resAction"), bqe4i = a4e.u5z(f5k, "resCopyright"),
                XP0x = a4e.u5z(f5k, "resAuditstatus");
            if (W5b != "log" && W5b != "bilog") h5m.cd6X(d5i);
            switch (W5b) {
                case"log":
                    j5o = (j5o || "").split("|");
                    if (!!j5o[0]) {
                        var bc5h = {id: cG6A, alg: j5o[2] || "itembased", scene: j5o[3], position: j5o[1] || 0};
                        if (!!j5o[4]) bc5h.srcid = j5o[4];
                        window.log(j5o[0], bc5h)
                    }
                    break;
                case"bilog":
                    var chy2x = a4e.u5z(f5k, "logAction"), chx2x = a4e.u5z(f5k, "logJson");
                    window.log(chy2x, chx2x);
                    break;
                case"share":
                    if (XP0x && XP0x == 1) {
                        l5q.hS8K("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cG6A, t5y, a4e.u5z(f5k, "resPic"), a4e.u5z(f5k, "resName"), a4e.u5z(f5k, "resAuthor"), a4e.u5z(f5k, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (t5y == 18) {
                        var pL0x = a4e.u5z(f5k, "resLevel"), qd1x = a4e.u5z(f5k, "resFee");
                        if (pL0x == 10) {
                            l5q.tB1x(qd1x, cG6A, "song");
                            break
                        }
                        l5q.lE9v({tracks: [cG6A]})
                    }
                    break;
                case"download":
                    l5q.SN9E({id: cG6A, type: t5y});
                    break;
                case"programtips":
                    if (XP0x && XP0x == 1) {
                        l5q.hS8K("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l5q.bsU5Z({id: bbY2x, radiotype: bbX2x})
                    }
                    break
            }
        }
        if (top == self)return;
        try {
            top.onIframeClick(d5i)
        } catch (e) {
        }
    };
    b5g.chz2x = function (d5i) {
        try {
            h5m.z5E(top.document, "mouseup")
        } catch (e) {
        }
    };
    b5g.zi4m = function () {
        var chu2x = function () {
            var cr6l = window.innerHeight;
            if (!k5p.ux2x(cr6l)) cr6l = (document.documentElement || document.body).clientHeight;
            return cr6l
        };
        return function (d5i) {
            if (!this.sh1x)return;
            var XN0x = chu2x(), fN7G = document.documentElement.scrollTop || document.body.scrollTop;
            a4e.X5c(this.sh1x, "display", fN7G > 0 ? "" : "none");
            if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0") {
                var gg7Z = Math.min(document.body.clientHeight, XN0x + fN7G) - 204;
                a4e.X5c(this.sh1x, "top", gg7Z + "px")
            }
        }
    }();
    b5g.Mb7U = function (d5i) {
        h5m.cd6X(d5i);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b5g.xE3x = function () {
        var bcl2x = function (d5i) {
            h5m.z5E(window, "share", d5i)
        };
        return function (cG6A, t5y, AS4W, T5Y, Mw7p, My7r) {
            l5q.ms0x({
                rid: cG6A,
                type: t5y,
                purl: AS4W,
                name: T5Y,
                author: Mw7p,
                authors: My7r,
                onshare: bcl2x.g5l(this)
            })
        }
    }();
    b5g.mm0x = function (W5b, bc5h) {
        try {
            top.log(W5b, bc5h)
        } catch (e) {
            switch (W5b) {
                case"play":
                    this.kg9X.eN7G(bc5h);
                    break;
                case"search":
                    this.kg9X.bDN7G(bc5h);
                    break;
                default:
                    this.kg9X.gl7e(W5b, bc5h)
            }
        }
    };
    b5g.btg5l = function () {
        var XM0x, bcR2x = false, bs5x = [45, 60];
        var cht2x = function (bF6z) {
            if (bF6z.title != "MailBoxImport")return;
            var Q5V = JSON.parse(bF6z.content || "null") || Y5d;
            if (Q5V.status == 10) {
                n5s.Yd0x.B5G().M5R();
                window.clearTimeout(XM0x)
            }
        };
        var sB1x = function (d5i) {
            if (d5i.code == 200) {
                if (d5i.status == 1) {
                    h5m.q5v(p5u.xZ3x, "message", cht2x.g5l(this));
                    p5u.xZ3x.B5G().baw1x();
                    bcR2x = true
                } else {
                    if (bcR2x) {
                        if (d5i.status == 10) {
                            n5s.Yd0x.B5G().M5R();
                            h5m.iA9r(p5u.xZ3x, "message");
                            window.clearTimeout(XM0x);
                            bcR2x = false
                        }
                    } else {
                        window.clearTimeout(XM0x)
                    }
                }
            }
        };
        return function () {
            var sb1x = bs5x.shift() * 1e3;
            v5A.br5w("/api/musicbox/mail/status", {type: "json", method: "get", onload: sB1x.g5l(this)});
            if (sb1x) {
                XM0x = window.setTimeout(arguments.callee, sb1x)
            }
        }
    }();
    b5g.qx1x = function (d5i) {
        try {
            top.polling(d5i)
        } catch (e) {
        }
    }
})()