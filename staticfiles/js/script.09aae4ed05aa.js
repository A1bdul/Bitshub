/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["static/js/app"], function (e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("static/js/app"), window) : t(jQuery, window)
}(function (s, n) {
    "use strict";

    function e(e) {
        return 0 <= function (e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+o[i] < +n[i]) return 1;
                if (+n[i] < +o[i]) return -1
            }
            return 0
        }(s.fn.jquery, e)
    }

    s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};

    function u(e) {
        var t = n.console;
        s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
    }

    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0, enumerable: !0, get: function () {
                return u(n), r
            }, set: function (e) {
                u(n), r = e
            }
        })
    }

    function o(e, t, r, n) {
        e[t] = function () {
            return u(n), r.apply(this, arguments)
        }
    }

    s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
        r = {}, s.migrateWarnings.length = 0
    }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in s.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
    }, s.fn.init.prototype = s.fn, s.find = function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t)) try {
            n.document.querySelector(t)
        } catch (e) {
            t = t.replace(y, function (e, t, r, n) {
                return "[" + t + r + '"' + n + '"]'
            });
            try {
                n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
            } catch (e) {
                u("Attribute selector with '#' was not fixed: " + r[0])
            }
        }
        return p.apply(this, r)
    }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function () {
        return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function () {
        return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function (e) {
        return null == e ? "" : (e + "").replace(m, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function (e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    }), o(s, "type", function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "jQuery.type is deprecated"), o(s, "isFunction", function (e) {
        return "function" == typeof e
    }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function (e) {
        return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function () {
        var e = a.apply(this, arguments);
        return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
    }, e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
        !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var g = s.fn.removeAttr, h = s.fn.toggleClass, v = /\S+/g;

    function j(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    s.fn.removeAttr = function (e) {
        var r = this;
        return s.each(e.match(v), function (e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
        }), g.apply(this, arguments)
    };
    var Q, b = !(s.fn.toggleClass = function (t) {
            return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }), w = /^[a-z]/,
        x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function () {
            var e;
            return b = !0, e = r.apply(this, arguments), b = !1, e
        })
    }), s.swap = function (e, t, r, n) {
        var o, i, a = {};
        for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
        for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
        return o
    }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
        set: function () {
            return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
        }
    })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function (e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
            s.fn.css.call(o, e, t)
        }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
    };
    var A, k, S, M, N = s.data;
    s.data = function (e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
            return N.call(this, e, o), t
        }
        return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
    }, s.fx && (S = s.Tween.prototype.run, M = function (e) {
        return e
    }, s.Tween.prototype.run = function () {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
    }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return n.document.hidden || u(k), A
        },
        set: function (e) {
            u(k), A = e
        }
    }));
    var R = s.fn.load, H = s.event.add, C = s.event.fix;
    s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length) s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
        return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
    }, s.event.add = function (e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
    }, s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }
    }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
        s.fn[r] = function (e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }
    }), s(function () {
        s(n.document).triggerHandler("ready")
    }), s.event.special.ready = {
        setup: function () {
            this === n.document && u("'ready' event is deprecated")
        }
    }, s.fn.extend({
        bind: function (e, t, r) {
            return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
        }, unbind: function (e, t) {
            return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
        }, delegate: function (e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
        }, undelegate: function (e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, hover: function (e, t) {
            return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
        }
    });

    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e, t.body && t.body.innerHTML
    }

    function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
    }

    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        q = s.htmlPrefilter;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        s.htmlPrefilter = function (e) {
            return P(e), e.replace(O, "<$1></$2>")
        }
    }, s.htmlPrefilter = function (e) {
        return P(e), q(e)
    };
    var D, _ = s.fn.offset;
    s.fn.offset = function () {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
    }, s.ajax && (D = s.param, s.param = function (e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
    });
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return s.fn.andSelf = function () {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
    }, s.Deferred && (E = s.Deferred, F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], s.Deferred = function (e) {
        var i = E(), a = i.promise();
        return i.pipe = a.pipe = function () {
            var o = arguments;
            return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
                s.each(F, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    i[t[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                    })
                }), o = null
            }).promise()
        }, e && e.call(i, i), i
    }, s.Deferred.exceptionHook = E.exceptionHook), s
});
"use strict";
jQuery(document).ready(function ($) {
    var adpPopup = {};
    (function () {
        var $this;
        adpPopup = {
            sPrevious: window.scrollY, sDirection: 'down', init: function (e) {
                $this = adpPopup;
                $this.popupInit(e);
                $this.events(e);
            }, events: function (e) {
                $(document).on('click', '.adp-popup-close', $this.closePopup);
                $(document).on('click', '.adp-popup-accept', $this.acceptPopup);
                $(document).on('click', '.adp-popup-accept', $this.closePopup);
                $(document).keyup(function (e) {
                    if (e.key === 'Escape') {
                        $('.adp-popup-open[data-esc-close="true"]').each(function (index, popup) {
                            $this.closePopup(popup);
                        });
                    }
                    if (e.key === 'F4') {
                        $('.adp-popup-open[data-esc-close="true"]').each(function (index, popup) {
                            $this.closePopup(popup);
                        });
                    }
                });
                $(document).on('click', '.adp-popup-overlay', function (e) {
                    $this.closePopup($(this).prev());
                });
            }, popupInit: function (e) {
                $(document).on('scroll', function () {
                    let scrollCurrent = window.scrollY;
                    if (scrollCurrent > $this.sPrevious) {
                        $this.sDirection = 'down';
                    } else {
                        $this.sDirection = 'up';
                    }
                    $this.sPrevious = scrollCurrent;
                });
                $('.adp-popup').each(function (index, popup) {
                    if ('manual' === $(popup).data('open-trigger')) {
                        let selector = $(popup).data('open-manual-selector');
                        if (selector) {
                            $(document).on('click', selector, function (e) {
                                event.preventDefault();
                                $(popup).removeClass('adp-popup-already-opened');
                                $this.openPopup(popup);
                            });
                        }
                    }
                    if (!$this.isAllowPopup(popup)) {
                        return;
                    }
                    $this.openTriggerPopup(popup);
                });
            }, openTriggerPopup: function (e) {
                let popup = (e.originalEvent) ? this : e;
                var trigger = $(popup).data('open-trigger');
                if ('viewed' === trigger) {
                    $this.openPopup(popup);
                }
                if ('delay' === trigger) {
                    setTimeout(function () {
                        $this.openPopup(popup);
                    }, $(popup).data('open-delay-number') * 1000);
                }
                if ('exit' === trigger) {
                    var showExit = true;
                    document.addEventListener("mousemove", function (e) {
                        var scroll = window.pageYOffset || document.documentElement.scrollTop;
                        if ((e.pageY - scroll) < 7 && showExit) {
                            $this.openPopup(popup);
                            showExit = false;
                        }
                    });
                }
                if ('read' === trigger || 'scroll' === trigger) {
                    var pointScrollType = $(popup).data('open-scroll-type');
                    var pointScrollPosition = $(popup).data('open-scroll-position');
                    if ('read' === trigger) {
                        pointScrollType = '%';
                        pointScrollPosition = 100;
                    }
                    $(document).on('scroll', function () {
                        if ('px' === pointScrollType) {
                            if (window.scrollY >= pointScrollPosition) {
                                $this.openPopup(popup);
                            }
                        }
                        if ('%' === pointScrollType) {
                            if ($this.getScrollPercent() >= pointScrollPosition) {
                                $this.openPopup(popup);
                            }
                        }
                    });
                }
                if ('accept' === trigger) {
                    let accept = $this.getCookie('adp-popup-accept-' + $(popup).data('id') || 0);
                    if (!accept) {
                        $this.openPopup(popup);
                    }
                }
            }, closeTriggerPopup: function (e) {
                let popup = (e.originalEvent) ? this : e;
                var trigger = $(popup).data('close-trigger');
                if ('delay' === trigger) {
                    setTimeout(function () {
                        $this.closePopup(popup);
                    }, $(popup).data('close-delay-number') * 1000);
                }
                if ('scroll' === trigger) {
                    var pointScrollType = $(popup).data('close-scroll-type');
                    var pointScrollPosition = $(popup).data('close-scroll-position');
                    var initScrollPx = $(popup).data('init-scroll-px');
                    var initScrollPercent = $(popup).data('init-scroll-percent');
                    $(document).on('scroll', function () {
                        if ('px' === pointScrollType) {
                            if ('up' === $this.sDirection && window.scrollY < (initScrollPx - pointScrollPosition)) {
                                $this.closePopup(popup);
                            }
                            if ('down' === $this.sDirection && window.scrollY >= (initScrollPx + pointScrollPosition)) {
                                $this.closePopup(popup);
                            }
                        }
                        if ('%' === pointScrollType) {
                            if ('up' === $this.sDirection && $this.getScrollPercent() < (initScrollPercent - pointScrollPosition)) {
                                $this.closePopup(popup);
                            }
                            if ('down' === $this.sDirection && $this.getScrollPercent() >= (initScrollPercent + pointScrollPosition)) {
                                $this.closePopup(popup);
                            }
                        }
                    });
                }
            }, openPopup: function (e) {
                let popup = (e.originalEvent) ? this : e;
                if ($(popup).hasClass('adp-popup-open')) {
                    return;
                }
                if ($(popup).hasClass('adp-popup-already-opened')) {
                    return;
                }
                $(popup).addClass('adp-popup-open');
                $(popup).data('init-scroll-px', window.scrollY);
                $(popup).data('init-scroll-percent', $this.getScrollPercent());
                if ($(popup).is('[data-body-scroll-disable="true"]')) {
                    $('body').addClass('adp-popup-scroll-hidden');
                }
                let limit = parseInt($this.getCookie('adp-popup-' + $(popup).data('id')) || 0) + 1;
                $this.setCookie('adp-popup-' + $(popup).data('id'), limit, {expires: $(popup).data('limit-lifetime')});
                let animation = $(popup).data('open-animation');
                $this.applyAnimation(popup, animation);
                $this.closeTriggerPopup(popup);
            }, acceptPopup: function (e) {
                let $el = (e.originalEvent) ? this : e;
                let popup = $($el).closest('.adp-popup');
                $this.setCookie('adp-popup-accept-' + $(popup).data('id'), 1, {expires: 360});
            }, closePopup: function (e) {
                let $el = (e.originalEvent) ? this : e;
                let popup = $($el).closest('.adp-popup');
                let animation = $(popup).data('exit-animation');
                $this.applyAnimation(popup, animation, function () {
                    $(popup).addClass('adp-popup-already-opened');
                    $(popup).removeClass('adp-popup-open');
                    $('body').removeClass('adp-popup-scroll-hidden');
                });
            }, isAllowPopup: function (e) {
                let popup = (e.originalEvent) ? this : e;
                let limitDisplay = parseInt($(popup).data('limit-display') || 0);
                let limitDisplayCookie = parseInt($this.getCookie('adp-popup-' + $(popup).data('id')));
                if (limitDisplay && limitDisplayCookie && limitDisplayCookie >= limitDisplay) {
                    return;
                }
                return true;
            }, applyAnimation: function (el, name, callback) {
                var popup = $(el).closest('.adp-popup');
                if (typeof callback === 'function') {
                    var overlayName = 'popupExitFade';
                } else {
                    var overlayName = 'popupOpenFade';
                }
                $(popup).next('.adp-popup-overlay').addClass('adp-popup-animated ' + overlayName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('adp-popup-animated ' + overlayName);
                });
                $(popup).find('.adp-popup-wrap').addClass('adp-popup-animated ' + name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('adp-popup-animated ' + name);
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }, getCookie: function (name) {
                var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            }, setCookie: function (name, value, options) {
                options = options || {};
                options.path = options.hasOwnProperty('path') ? options.path : '/';
                options.expires = parseInt(options.expires);
                if (typeof options.expires == "number" && options.expires) {
                    options.expires = new Date().setDate(new Date().getDate() + options.expires);
                    options.expires = new Date(options.expires).toUTCString();
                }
                value = encodeURIComponent(value);
                var updatedCookie = name + "=" + value;
                for (var propName in options) {
                    updatedCookie += "; " + propName;
                    var propValue = options[propName];
                    if (propValue !== true) {
                        updatedCookie += "=" + propValue;
                    }
                }
                document.cookie = updatedCookie;
            }, getScrollPercent: function () {
                var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
                return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            }
        };
    })();
    adpPopup.init();
});
var _SEARCHWP_LIVE_AJAX_SEARCH_BLOCKS = true;
var _SEARCHWP_LIVE_AJAX_SEARCH_ENGINE = 'default';
var _SEARCHWP_LIVE_AJAX_SEARCH_CONFIG = 'default';
(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})();
(function ($) {
    $(document).ready(function () {
        $(document).on('click', '.cnvs-block-alert .cnvs-close', function () {
            $(this).closest('.cnvs-block-alert').remove();
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $('.cnvs-block-collapsible-opened > .cnvs-block-collapsible-content').css('display', 'block');
        $(document).on('click', '.cnvs-block-collapsibles .cnvs-block-collapsible-title a', function (e) {
            e.preventDefault();
            var $collapsible = $(this).closest('.cnvs-block-collapsible');
            $collapsible.siblings('.cnvs-block-collapsible-opened').removeClass('cnvs-block-collapsible-opened').children('.cnvs-block-collapsible-content').stop().slideUp();
            $collapsible.children('.cnvs-block-collapsible-content').stop().slideToggle();
            $collapsible.toggleClass('cnvs-block-collapsible-opened');
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $(document).on('click', '.cnvs-block-tabs .cnvs-block-tabs-button a', function (e) {
            e.preventDefault();
            var $tab = $(this).closest('.cnvs-block-tabs-button');
            var $tabs = $tab.closest('.cnvs-block-tabs');
            $tab.addClass('cnvs-block-tabs-button-active').siblings().removeClass('cnvs-block-tabs-button-active');
            $tabs.find('.cnvs-block-tabs-content').children('.cnvs-block-tab:eq(' + $tab.index() + ')').addClass('cnvs-block-tab-active').siblings().removeClass('cnvs-block-tab-active');
        });
        $('.cnvs-block-tabs .cnvs-block-tabs-button-active a').click();
    });
})(jQuery);
/*!
 * justifiedGallery - v3.7.0
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2018 Miro Mannino
 * Licensed under the MIT license.
 */

!function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o], s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var h = e.jQuery, a = e.console, d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {1: !0, 9: !0, 11: !0};
    return o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var o = n && n[2];
            o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
        }
    }, o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }

        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
!function (e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["static/js/app"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("static/js/app")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function (t, e) {
    "use strict";
    var i = Array.prototype.slice, n = t.console, d = void 0 === n ? function () {
    } : function (t) {
        n.error(t)
    };

    function s(h, s, c) {
        (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }), c.fn[h] = function (t) {
            return "string" == typeof t ? function (t, o, r) {
                var a, l = "$()." + h + '("' + o + '")';
                return t.each(function (t, e) {
                    var i = c.data(e, h);
                    if (i) {
                        var n = i[o];
                        if (n && "_" != o.charAt(0)) {
                            var s = n.apply(i, r);
                            a = void 0 === a ? s : a
                        } else d(l + " is not a valid method")
                    } else d(h + " not initialized. Cannot call methods, i.e. " + l)
                }), void 0 !== a ? a : t
            }(this, t, i.call(arguments, 1)) : (function (t, n) {
                t.each(function (t, e) {
                    var i = c.data(e, h);
                    i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i))
                })
            }(this, t), this)
        }, o(c))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = s)
    }

    return o(e || t.jQuery), s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s];
                n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    var i = "undefined" == typeof console ? function () {
        } : function (t) {
            console.error(t)
        },
        y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        b = y.length;

    function E(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    var S, C = !1;

    function x(t) {
        if (function () {
            if (!C) {
                C = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var e = document.body || document.documentElement;
                e.appendChild(t);
                var i = E(t);
                S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t)
            }
        }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = E(t);
            if ("none" == e.display) return function () {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < b; e++) {
                    t[y[e]] = 0
                }
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) {
                var o = y[s], r = e[o], a = parseFloat(r);
                i[o] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight, h = i.paddingTop + i.paddingBottom,
                c = i.marginLeft + i.marginRight, d = i.marginTop + i.marginBottom,
                u = i.borderLeftWidth + i.borderRightWidth, f = i.borderTopWidth + i.borderBottomWidth, p = n && S,
                g = m(e.width);
            !1 !== g && (i.width = g + (p ? 0 : l + u));
            var v = m(e.height);
            return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, i
        }
    }

    return x
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var i = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (t, e) {
        return t[i](e)
    }
}), function (e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function (h, o) {
    var c = {
        extend: function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }
    }, e = Array.prototype.slice;
    c.makeArray = function (t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }, c.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, c.getParent = function (t, e) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, o(t, e)) return t
    }, c.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, c.filterFindElements = function (t, n) {
        t = c.makeArray(t);
        var s = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) s.push(e[i])
            } else s.push(t)
        }), s
    }, c.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, i = this;
            this[o] = setTimeout(function () {
                s.apply(i, e), delete i[o]
            }, n)
        }
    }, c.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, c.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var d = h.console;
    return c.htmlInit = function (a, l) {
        c.docReady(function () {
            var t = c.toDashed(l), s = "data-" + t, e = document.querySelectorAll("[" + s + "]"),
                i = document.querySelectorAll(".js-" + t), n = c.makeArray(e).concat(c.makeArray(i)),
                o = s + "-options", r = h.jQuery;
            n.forEach(function (e) {
                var t, i = e.getAttribute(s) || e.getAttribute(o);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void (d && d.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var n = new a(e, t);
                r && r.data(e, l, n)
            })
        })
    }, c
}), function (e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = i(e, e.getSize))
}(window, function (t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create()
    }

    var n = i.prototype;
    return n.create = function () {
        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
    }, n.destroy = function () {
        this.unselect(), this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }, n.getSize = function () {
        this.size = e(this.element)
    }, n.setPosition = function (t) {
        this.x = t, this.updateTarget(), this.renderPosition(t)
    }, n.updateTarget = n.setDefaultTarget = function () {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, n.select = function () {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
    }, n.unselect = function () {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
    }, n.wrapShift = function (t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, n.remove = function () {
        this.element.parentNode.removeChild(this.element)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function () {
    "use strict";

    function t(t) {
        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
    }

    var e = t.prototype;
    return e.addCell = function (t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }, e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft", e = this.getLastCell(), i = e ? e.size[t] : 0,
            n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }, e.getLastCell = function () {
        return this.cells[this.cells.length - 1]
    }, e.select = function () {
        this.cells.forEach(function (t) {
            t.select()
        })
    }, e.unselect = function () {
        this.cells.forEach(function (t) {
            t.unselect()
        })
    }, e.getCellElements = function () {
        return this.cells.map(function (t) {
            return t.element
        })
    }, t
}), function (e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = i(e, e.fizzyUIUtils))
}(window, function (t, e) {
    var i = {
        startAnimation: function () {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, animate: function () {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame(function () {
                    e.animate()
                })
            }
        }, positionSlider: function () {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
        }, setTranslateX: function (t, e) {
            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
            var i = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
        }, dispatchScrollEvent: function () {
            var t = this.slides[0];
            if (t) {
                var e = -this.x - t.target, i = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [i, e])
            }
        }, positionSliderAtSelected: function () {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        }, getPositionValue: function (t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, settle: function (t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        }, shiftWrapCells: function (t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, _shiftCells: function (t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n], o = 0 < e ? i : 0;
                s.wrapShift(o), e -= s.size.outerWidth
            }
        }, _unshiftCells: function (t) {
            if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        }, integratePhysics: function () {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        }, applyForce: function (t) {
            this.velocity += t
        }, getFrictionFactor: function () {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, getRestingPosition: function () {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, applyDragForce: function () {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
            }
        }, applySelectedAttraction: function () {
            if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }
    };
    return i
}), function (r, a) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o)
    }); else if ("object" == typeof module && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")); else {
        var t = r.Flickity;
        r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
    }
}(window, function (n, t, e, a, i, r, s) {
    var l = n.jQuery, o = n.getComputedStyle, h = n.console;

    function c(t, e) {
        for (t = a.makeArray(t); t.length;) e.appendChild(t.shift())
    }

    var d = 0, u = {};

    function f(t, e) {
        var i = a.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var n = u[this.element.flickityGUID];
                return n.option(e), n
            }
            l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(e), this._create()
        } else h && h.error("Bad element for Flickity: " + (i || t))
    }

    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, f.createMethods = [];
    var p = f.prototype;
    a.extend(p, t.prototype), p._create = function () {
        var t = this.guid = ++d;
        for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
            var i = this.options.on[e];
            this.on(e, i)
        }
        f.createMethods.forEach(function (t) {
            this[t]()
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, p.option = function (t) {
        a.extend(this.options, t)
    }, p.activate = function () {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
    }, p._createSlider = function () {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, p._filterFindCellElements = function (t) {
        return a.filterFindElements(t, this.options.cellSelector)
    }, p.reloadCells = function () {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
            return new i(t, this)
        }, this)
    }, p.getLastCell = function () {
        return this.cells[this.cells.length - 1]
    }, p.getLastSlide = function () {
        return this.slides[this.slides.length - 1]
    }, p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0)
    }, p._positionCells = function (t) {
        t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }, p._sizeCells = function (t) {
        t.forEach(function (t) {
            t.getSize()
        })
    }, p.updateSlides = function () {
        if (this.slides = [], this.cells.length) {
            var n = new r(this);
            this.slides.push(n);
            var s = "left" == this.originSide ? "marginRight" : "marginLeft", o = this._getCanCellFit();
            this.cells.forEach(function (t, e) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
                    o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), n.addCell(t)
                } else n.addCell(t)
            }, this), n.updateTarget(), this.updateSelectedSlide()
        }
    }, p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t) return function () {
            return !1
        };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function (t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/), n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }, p._init = p.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected()
    }, p.getSize = function () {
        this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var g = {center: {left: .5, right: .5}, left: {left: 0, right: 1}, right: {right: 0, left: 1}};
    return p.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function () {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }, p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition, e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, p._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t;) {
            var s = this.cells[e];
            if (!s) break;
            n.push(s), e += i, t -= s.size.outerWidth
        }
        return n
    }, p._containSlides = function () {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft, e = t ? "marginRight" : "marginLeft",
                i = t ? "marginLeft" : "marginRight", n = this.slideableWidth - this.getLastCell().size[i],
                s = n < this.size.innerWidth, o = this.cursorPosition + this.cells[0].size[e],
                r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function (t) {
                s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r))
            }, this)
        }
    }, p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l && this.$element) {
            var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var o = l.Event(e);
                o.type = t, s = o
            }
            this.$element.trigger(s, i)
        }
    }, p.select = function (t, e, i) {
        if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), this.slides[t])) {
            var n = this.selectedIndex;
            this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != n && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
        }
    }, p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e), n = Math.abs(i - this.selectedIndex), s = Math.abs(i + e - this.selectedIndex),
            o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }, p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }, p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }, p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect()
    }, p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0); else {
            if (t && "string" == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t), this.select(e, !1, !0)
        }
    }, p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var s = this.getCellSlideIndex(n);
            this.select(s, e, i)
        }
    }, p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
            if (-1 != this.slides[e].cells.indexOf(t)) return e
        }
    }, p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t) return i
        }
    }, p.getCells = function (t) {
        t = a.makeArray(t);
        var i = [];
        return t.forEach(function (t) {
            var e = this.getCell(t);
            e && i.push(e)
        }, this), i
    }, p.getCellElements = function () {
        return this.cells.map(function (t) {
            return t.element
        })
    }, p.getParentCell = function (t) {
        var e = this.getCell(t);
        return e || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
            var o = this.options.wrapAround ? a.modulo(s, i) : s, r = this.slides[o];
            r && (n = n.concat(r.getCellElements()))
        }
        return n
    }, p.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#\.]?[\d\/]/)) return;
            t = this.element.querySelector(t)
        }
        return this.getCell(t)
    }, p.uiChange = function () {
        this.emitEvent("uiChange")
    }, p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus()
    }, p.onresize = function () {
        this.watchCSS(), this.resize()
    }, a.debounceMethod(f, "onresize", 150), p.resize = function () {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }, p.watchCSS = function () {
        this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }, p.onkeydown = function (t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = f.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    }, f.keyboardHandlers = {
        37: function () {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[t]()
        }, 39: function () {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[t]()
        }
    }, p.focus = function () {
        var t = n.pageYOffset;
        this.element.focus({preventScroll: !0}), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t)
    }, p.deactivate = function () {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
            t.destroy()
        }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, p.destroy = function () {
        this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
    }, a.extend(p, s), f.data = function (t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e]
    }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function (t) {
        l = t
    }, f.Cell = i, f.Slide = r, f
}), function (e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function (s, t) {
    function e() {
    }

    var i = e.prototype = Object.create(t.prototype);
    i.bindStartEvent = function (t) {
        this._bindStartEvent(t, !0)
    }, i.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1)
    }, i._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = "mousedown";
        s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), t[i](n, this)
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i
        }
    }, i.onmousedown = function (t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, i.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0])
    }, i.onpointerdown = function (t) {
        this._pointerDown(t, t)
    }, i._pointerDown = function (t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, i.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var n = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return i._bindPostStartEvents = function (t) {
        if (t) {
            var e = n[t.type];
            e.forEach(function (t) {
                s.addEventListener(t, this)
            }, this), this._boundPointerEvents = e
        }
    }, i._unbindPostStartEvents = function () {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
            s.removeEventListener(t, this)
        }, this), delete this._boundPointerEvents)
    }, i.onmousemove = function (t) {
        this._pointerMove(t, t)
    }, i.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, i.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, i._pointerMove = function (t, e) {
        this.pointerMove(t, e)
    }, i.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, i.onmouseup = function (t) {
        this._pointerUp(t, t)
    }, i.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, i.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, i._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, i._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
    }, i._pointerReset = function () {
        this.isPointerDown = !1, delete this.pointerIdentifier
    }, i.pointerDone = function () {
    }, i.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, i.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, i._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, i.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, e.getPointerPoint = function (t) {
        return {x: t.pageX, y: t.pageY}
    }, e
}), function (e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function (o, t) {
    function e() {
    }

    var i = e.prototype = Object.create(t.prototype);
    i.bindHandles = function () {
        this._bindHandles(!0)
    }, i.unbindHandles = function () {
        this._bindHandles(!1)
    }, i._bindHandles = function (t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var s = this.handles[n];
            this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i)
        }
    }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
    };
    var s = {TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0},
        r = {radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0};
    return i.okayPointerDown = function (t) {
        var e = s[t.target.nodeName], i = r[t.target.type], n = !e || i;
        return n || this._pointerReset(), n
    }, i.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }, i.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, i._dragPointerMove = function (t, e) {
        var i = {x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY};
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
    }, i.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }, i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, i._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, i._dragStart = function (t, e) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
    }, i.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e])
    }, i._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, i.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
    }, i._dragEnd = function (t, e) {
        this.isDragging = !1, setTimeout(function () {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(t, e)
    }, i.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, i.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault()
    }, i._staticClick = function (t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
            delete this.isIgnoringMouseUp
        }.bind(this), 400)))
    }, i.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e])
    }, e.getPointerPoint = t.getPointerPoint, e
}), function (n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function (i, t, e, a) {
    a.extend(t.defaults, {draggable: ">1", dragThreshold: 3}), t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), n._touchActionValue = "pan-y";
    var s = "createTouch" in document, o = !1;
    n._createDrag = function () {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (i.addEventListener("touchmove", function () {
        }), o = !0)
    }, n.onActivateDrag = function () {
        this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
    }, n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable")
    }, n.updateDraggable = function () {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }, n.bindDrag = function () {
        this.options.draggable = !0, this.updateDraggable()
    }, n.unbindDrag = function () {
        this.options.draggable = !1, this.updateDraggable()
    }, n._uiChangeDrag = function () {
        delete this.isFreeScrolling
    }, n.pointerDown = function (t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
    }, n._pointerDownDefault = function (t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
    };
    var r = {INPUT: !0, TEXTAREA: !0, SELECT: !0};

    function l() {
        return {x: i.pageXOffset, y: i.pageYOffset}
    }

    return n.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus()
    }, n._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type, i = "touch" == t.pointerType, n = r[t.target.nodeName];
        e || i || n || t.preventDefault()
    }, n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }, n.pointerUp = function (t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
    }, n.pointerDone = function () {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, n.dragStart = function (t, e) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
    }, n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
    }, n.dragMove = function (t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var s = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                s = o < s ? .5 * (s + o) : s;
                var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                s = s < r ? .5 * (s + r) : s
            }
            this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }
    }, n.dragEnd = function (t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
        }
    }, n.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(), e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    }, n._getClosestResting = function (t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (t, e) {
            return t <= e
        } : function (t, e) {
            return t < e
        }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
        return {distance: s, index: n - i}
    }, n.getSlideDistance = function (t, e) {
        var i = this.slides.length, n = this.options.wrapAround && 1 < i, s = n ? a.modulo(e, i) : e,
            o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r)
    }, n.dragEndBoostSelect = function () {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }, n.staticClick = function (t, e) {
        var i = this.getParentCell(t.target), n = i && i.element, s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }, n.onscroll = function () {
        var t = l(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
    }, t
}), function (n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function (t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";

    function o(t, e) {
        this.direction = t, this.parent = e, this._create()
    }

    (o.prototype = Object.create(i.prototype))._create = function () {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, o.prototype.activate = function () {
        this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
    }, o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
    }, o.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"), i = function (t) {
            return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t
        }(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
    }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function () {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }, o.prototype.enable = function () {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, o.prototype.disable = function () {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, o.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable(); else {
            var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    }, o.prototype.destroy = function () {
        this.deactivate(), this.allOff()
    }, n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30}
    }), e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return r._createPrevNextButtons = function () {
        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
    }, r.activatePrevNextButtons = function () {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, r.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, e.PrevNextButton = o, e
}), function (n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function (t, e, i, n) {
    function s(t) {
        this.parent = t, this._create()
    }

    (s.prototype = Object.create(i.prototype))._create = function () {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, s.prototype.activate = function () {
        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
    }, s.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
    }, s.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }, s.prototype.addDots = function (t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
            var r = document.createElement("li");
            r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, s.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
            this.holder.removeChild(t)
        }, this)
    }, s.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    }, s.prototype.onTap = s.prototype.onClick = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }, s.prototype.destroy = function () {
        this.deactivate(), this.allOff()
    }, e.PageDots = s, n.extend(e.defaults, {pageDots: !0}), e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function () {
        this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, o.activatePageDots = function () {
        this.pageDots.activate()
    }, o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected()
    }, o.updatePageDots = function () {
        this.pageDots.setDots()
    }, o.deactivatePageDots = function () {
        this.pageDots.deactivate()
    }, e.PageDots = s, e
}), function (t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) {
        return n(t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function (t, e, i) {
    function n(t) {
        this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }

    (n.prototype = Object.create(t.prototype)).play = function () {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
    }, n.prototype.tick = function () {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout(function () {
                e.parent.next(!0), e.tick()
            }, t)
        }
    }, n.prototype.stop = function () {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }, n.prototype.clear = function () {
        clearTimeout(this.timeout)
    }, n.prototype.pause = function () {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, n.prototype.unpause = function () {
        "paused" == this.state && this.play()
    }, n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]()
    }, n.prototype.visibilityPlay = function () {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }, e.extend(i.defaults, {pauseAutoPlayOnHover: !0}), i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return s._createPlayer = function () {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, s.activatePlayer = function () {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, s.playPlayer = function () {
        this.player.play()
    }, s.stopPlayer = function () {
        this.player.stop()
    }, s.pausePlayer = function () {
        this.player.pause()
    }, s.unpausePlayer = function () {
        this.player.unpause()
    }, s.deactivatePlayer = function () {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, s.onmouseleave = function () {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, i.Player = n, i
}), function (i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function (t, e, n) {
    var i = e.prototype;
    return i.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var n = this.cells.length;
            e = void 0 === e ? n : e;
            var s = function (t) {
                var e = document.createDocumentFragment();
                return t.forEach(function (t) {
                    e.appendChild(t.element)
                }), e
            }(i), o = e == n;
            if (o) this.slider.appendChild(s); else {
                var r = this.cells[e].element;
                this.slider.insertBefore(s, r)
            }
            if (0 === e) this.cells = i.concat(this.cells); else if (o) this.cells = this.cells.concat(i); else {
                var a = this.cells.splice(e, n - e);
                this.cells = this.cells.concat(i).concat(a)
            }
            this._sizeCells(i), this.cellChange(e, !0)
        }
    }, i.append = function (t) {
        this.insert(t, this.cells.length)
    }, i.prepend = function (t) {
        this.insert(t, 0)
    }, i.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var i = this.cells.length - 1;
            e.forEach(function (t) {
                t.remove();
                var e = this.cells.indexOf(t);
                i = Math.min(e, i), n.removeFrom(this.cells, t)
            }, this), this.cellChange(i, !0)
        }
    }, i.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }, i.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
    }, e
}), function (i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function (t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;

    function s(t, e) {
        this.img = t, this.flickity = e, this.load()
    }

    return i._createLazyload = function () {
        this.on("select", this.lazyLoad)
    }, i.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [];
            i.forEach(function (t) {
                var e = function (t) {
                    if ("IMG" == t.nodeName) {
                        var e = t.getAttribute("data-flickity-lazyload"),
                            i = t.getAttribute("data-flickity-lazyload-src"),
                            n = t.getAttribute("data-flickity-lazyload-srcset");
                        if (e || i || n) return [t]
                    }
                    var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return o.makeArray(s)
                }(t);
                n = n.concat(e)
            }), n.forEach(function (t) {
                new s(t, this)
            }, this)
        }
    }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
            e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
    }, s.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded")
    }, s.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror")
    }, s.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img), n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
    }, e.LazyLoader = s, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function (t) {
    return t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function (n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function () {
                e.setNavCompanion(t)
            })
        }
    }, t.setNavCompanion = function (t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var i = this;
            this.onNavCompanionSelect = function () {
                i.navCompanionSelect()
            }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
        }
    }, t.navCompanionSelect = function (t) {
        var e = this.navCompanion && this.navCompanion.selectedCells;
        if (e) {
            var i = e[0], n = this.navCompanion.cells.indexOf(i), s = n + e.length - 1,
                o = Math.floor(function (t, e, i) {
                    return (e - t) * i + t
                }(n, s, this.navCompanion.cellAlign));
            if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
                var r = this.cells.slice(n, 1 + s);
                this.navSelectedElements = r.map(function (t) {
                    return t.element
                }), this.changeNavSelectedClass("add")
            }
        }
    }, t.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
            t.classList[e]("is-nav-selected")
        })
    }, t.activateAsNavFor = function () {
        this.navCompanionSelect(!0)
    }, t.removeNavSelectedElements = function () {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, t.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }, t.deactivateAsNavFor = function () {
        this.removeNavSelectedElements()
    }, t.destroyAsNavFor = function () {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, n
}), function (e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    var s = e.jQuery, o = e.console;

    function r(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    var a = Array.prototype.slice;

    function l(t, e, i) {
        if (!(this instanceof l)) return new l(t, e, i);
        var n = t;
        "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = function (t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? a.call(t) : [t]
        }(n), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (n || t))
    }

    (l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, l.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var h = {1: !0, 9: !0, 11: !0};

    function i(t) {
        this.img = t
    }

    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    return l.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var s = n && n[2];
            s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
        }
    }, l.prototype.addImage = function (t) {
        var e = new i(t);
        this.images.push(e)
    }, l.prototype.addBackground = function (t, e) {
        var i = new n(t, e);
        this.images.push(i)
    }, l.prototype.check = function () {
        var n = this;

        function e(t, e, i) {
            setTimeout(function () {
                n.progress(t, e, i)
            })
        }

        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : this.complete()
    }, l.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e)
    }, l.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, (i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, l.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
            return new l(this, t, e).jqDeferred.promise(s(this))
        })
    }, l.makeJQueryPlugin(), l
}), function (i, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded)
    }, n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", function (t, e) {
                var i = n.getParentCell(e.img);
                n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected()
            })
        }
    }, e
});
var canvas_sg_flickity = {"page_info_sep": " of "};
(function ($) {
    function canvasInitSliderGallery() {
        function canvasSliderPageInfo(cellNumber, cellsLength) {
            var sep = canvas_sg_flickity.page_info_sep;
            return '<span class="current">' + (cellNumber + 1) + '</span><span class="sep">' + sep + '</span><span class="cells">' + cellsLength + '</span>';
        }

        $('.cnvs-gallery-type-slider:not(.cnvs-gallery-type-slider-ready)').imagesLoaded(function (instance) {
            $(instance.elements).each(function (index, el) {
                var $el = $(el);
                $el.filter(':not(.cnvs-gallery-type-slider-ready)').addClass('cnvs-gallery-type-slider-ready').flickity({
                    pageDots: $el.data('sg-page-dots'),
                    prevNextButtons: $el.data('sg-nav'),
                    adaptiveHeight: true,
                    cellAlign: 'left',
                    contain: true,
                    on: {
                        ready: function () {
                            var data = Flickity.data(el);
                            $el.addClass('is-animate slider-loaded');
                            if ($el.data('sg-page-info')) {
                                if ($el.data('sg-page-dots')) {
                                    $el.find('.flickity-page-dots').wrap('<div class="flickity-pages"></div>');
                                } else {
                                    $el.append('<div class="flickity-pages"></div>');
                                }
                                var cellNumber = data.selectedIndex;
                                $el.find('.flickity-pages').append('<div class="flickity-page-info">' + canvasSliderPageInfo(cellNumber, data.cells.length) + '</div>');
                            }
                            $(document.body).trigger('image-load');
                        }, change: function (cellNumber) {
                            var data = Flickity.data(el);
                            if ($el.data('sg-page-info')) {
                                $el.find('.flickity-page-info').html(canvasSliderPageInfo(cellNumber, data.cells.length));
                            }
                        }
                    }
                });
            });
        });
    }

    $(document).ready(function () {
        canvasInitSliderGallery();
        $(document.body).on('post-load', function () {
            canvasInitSliderGallery();
        });
        if ('undefined' !== typeof wp && 'undefined' !== typeof wp.hooks) {
            wp.hooks.addAction('canvas.components.serverSideRender.onChange', 'canvas/slider-gallery.init', function (props) {
                if ('canvas/slider-gallery' === props.block) {
                    canvasInitSliderGallery();
                }
            });
        }
    });
})(jQuery);
var wpcf7 = {"api": {"root": "https:\/\/networkertheme.com\/gearbox\/wp-json\/", "namespace": "contact-form-7\/v1"}};
!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    var r = n(2);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, o, a = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (o = 0; o < c.length; o++) n = c[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, o = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function (e) {
        return Math.abs(parseInt(e, 10))
    }, o = function (e, t) {
        var n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"]]);
        n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"), t = "custom-".concat(t));
        var r = e.getAttribute("data-status");
        return e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t
    }, a = function (e, t, n) {
        var r = new CustomEvent("wpcf7".concat(t), {bubbles: !0, detail: n});
        "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r)
    }, c = n(0), i = n.n(c), s = n(1), u = n.n(s);

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function (t) {
                i()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    var p = function (e) {
        var t = wpcf7.api, n = t.root, r = t.namespace, o = void 0 === r ? "contact-form-7/v1" : r;
        return d.reduceRight((function (e, t) {
            return function (n) {
                return t(n, e)
            }
        }), (function (e) {
            var t, r, a = e.url, c = e.path, i = e.endpoint, s = e.headers, l = e.body, p = e.data,
                d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
            "string" == typeof i && (t = o.replace(/^\/|\/$/g, ""), c = (r = i.replace(/^\//, "")) ? t + "/" + r : t), "string" == typeof c && (-1 !== n.indexOf("?") && (c = c.replace("?", "&")), c = c.replace(/^\//, ""), a = n + c), delete (s = f({Accept: "application/json, */*;q=0.1"}, s))["X-WP-Nonce"], p && (l = JSON.stringify(p), s["Content-Type"] = "application/json");
            var v = {code: "fetch_error", message: "You are probably offline."},
                b = {code: "invalid_json", message: "The response is not a valid JSON response."};
            return window.fetch(a || c || window.location.href, f(f({}, d), {}, {
                headers: s,
                body: l
            })).then((function (e) {
                return Promise.resolve(e).then((function (e) {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e
                })).then((function (e) {
                    if (204 === e.status) return null;
                    if (e && e.json) return e.json().catch((function () {
                        throw b
                    }));
                    throw b
                }))
            }), (function () {
                throw v
            }))
        }))(e)
    }, d = [];

    function v(e, t = {}) {
        const n = new FormData(e);
        t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
        const r = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(n, e => {
                const t = e[0], n = e[1];
                return !t.match(/^_/) && {name: t, value: n}
            }).filter(e => !1 !== e),
            formData: n
        }, c = t => {
            const n = document.createElement("li");
            n.setAttribute("id", t.error_id), t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)
        }, i = t => {
            const n = e.querySelector(t.into), r = n.querySelector(".wpcf7-form-control");
            r.classList.add("wpcf7-not-valid"), r.setAttribute("aria-describedby", t.error_id);
            const o = document.createElement("span");
            o.setAttribute("class", "wpcf7-not-valid-tip"), o.setAttribute("aria-hidden", "true"), o.insertAdjacentText("beforeend", t.message), n.appendChild(o), n.querySelectorAll("[aria-invalid]").forEach(e => {
                e.setAttribute("aria-invalid", "true")
            }), r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", e => {
                o.setAttribute("style", "display: none")
            }), o.addEventListener("mouseover", e => {
                o.setAttribute("style", "display: none")
            }))
        };
        p({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: n,
            wpcf7: {endpoint: "feedback", form: e, detail: r}
        }).then(t => {
            const n = o(e, t.status);
            return r.status = t.status, r.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? a(e, n, r) : ["sent", "failed"].includes(n) && a(e, "mail" + n, r), a(e, "submit", r), t
        }).then(t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && (t.invalid_fields.forEach(c), t.invalid_fields.forEach(i)), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach(e => {
                e.innerText = t.message
            })
        }).catch(e => console.error(e))
    }

    p.use = function (e) {
        d.unshift(e)
    }, p.use((e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {form: t, detail: n} = e.wpcf7;
            b(t), a(t, "beforesubmit", n), o(t, "submitting")
        }
        return t(e)
    });
    const b = e => {
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = "", e.querySelectorAll(".wpcf7-not-valid-tip").forEach(e => {
            e.remove()
        }), e.querySelectorAll("[aria-invalid]").forEach(e => {
            e.setAttribute("aria-invalid", "false")
        }), e.querySelectorAll(".wpcf7-form-control").forEach(e => {
            e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid")
        }), e.querySelectorAll(".wpcf7-response-output").forEach(e => {
            e.innerText = ""
        })
    };

    function w(e) {
        var t = new FormData(e), n = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(t, (function (e) {
                var t = e[0], n = e[1];
                return !t.match(/^_/) && {name: t, value: n}
            })).filter((function (e) {
                return !1 !== e
            })),
            formData: t
        };
        p({
            endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
            method: "GET",
            wpcf7: {endpoint: "refill", form: e, detail: n}
        }).then((function (t) {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, o(e, "mail_sent")) : o(e, "init"), n.apiResponse = t, a(e, "reset", n)
        })).catch((function (e) {
            return console.error(e)
        }))
    }

    p.use((function (e, t) {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            var n = e.wpcf7, r = n.form;
            n.detail, b(r), o(r, "resetting")
        }
        return t(e)
    }));
    var m = function (e, t) {
        var n = function (n) {
            var r = t[n];
            e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function (e) {
                e.value = ""
            })), e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function (e) {
                e.setAttribute("src", r)
            }));
            var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
            o && e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach((function (e) {
                e.value = o[1]
            }))
        };
        for (var r in t) n(r)
    }, h = function (e, t) {
        var n = function (n) {
            var r = t[n][0], o = t[n][1];
            e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function (e) {
                e.querySelector('input[name="'.concat(n, '"]')).value = "", e.querySelector(".wpcf7-quiz-label").textContent = r, e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = o
            }))
        };
        for (var r in t) n(r)
    };

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        var t = new FormData(e);
        e.wpcf7 = {
            id: r(t.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: t.get("_wpcf7_version"),
            locale: t.get("_wpcf7_locale"),
            unitTag: t.get("_wpcf7_unit_tag"),
            containerPost: r(t.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7")
        }, e.querySelectorAll(".wpcf7-submit").forEach((function (e) {
            e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>')
        })), function (e) {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function (t) {
                t.addEventListener("change", (function (t) {
                    var n = t.target.getAttribute("name");
                    e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function (e) {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        }(e), function (e) {
            e.querySelectorAll(".has-free-text").forEach((function (t) {
                var n = t.querySelector("input.wpcf7-free-text"),
                    r = t.querySelector('input[type="checkbox"], input[type="radio"]');
                n.disabled = !r.checked, e.addEventListener("change", (function (e) {
                    n.disabled = !r.checked, e.target === r && r.checked && n.focus()
                }))
            }))
        }(e), function (e) {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((function (e) {
                e.addEventListener("change", (function (t) {
                    var n = e.value.trim();
                    n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), e.value = n
                }))
            }))
        }(e), function (e) {
            if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
                var t = function () {
                    var t = !0;
                    e.querySelectorAll(".wpcf7-acceptance").forEach((function (e) {
                        if (t && !e.classList.contains("optional")) {
                            var n = e.querySelector('input[type="checkbox"]');
                            (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                        }
                    })), e.querySelectorAll(".wpcf7-submit").forEach((function (e) {
                        e.disabled = !t
                    }))
                };
                t(), e.addEventListener("change", (function (e) {
                    t()
                })), e.addEventListener("wpcf7reset", (function (e) {
                    t()
                }))
            }
        }(e), function (e) {
            var t = function (e, t) {
                var n = r(e.getAttribute("data-starting-value")), o = r(e.getAttribute("data-maximum-value")),
                    a = r(e.getAttribute("data-minimum-value")),
                    c = e.classList.contains("down") ? n - t.value.length : t.value.length;
                e.setAttribute("data-current-value", c), e.innerText = c, o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), a && t.value.length < a ? e.classList.add("too-short") : e.classList.remove("too-short")
            }, n = function (n) {
                n = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function (t) {
                            i()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({init: !1}, n), e.querySelectorAll(".wpcf7-character-count").forEach((function (r) {
                    var o = r.getAttribute("data-target-name"), a = e.querySelector('[name="'.concat(o, '"]'));
                    a && (a.value = a.defaultValue, t(r, a), n.init && a.addEventListener("keyup", (function (e) {
                        t(r, a)
                    })))
                }))
            };
            n({init: !0}), e.addEventListener("wpcf7reset", (function (e) {
                n()
            }))
        }(e), window.addEventListener("load", (function (t) {
            wpcf7.cached && e.reset()
        })), e.addEventListener("reset", (function (t) {
            wpcf7.reset(e)
        })), e.addEventListener("submit", (function (t) {
            var n = t.submitter;
            wpcf7.submit(e, {submitter: n}), t.preventDefault()
        })), e.addEventListener("wpcf7submit", (function (t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("wpcf7reset", (function (t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        }))
    }

    document.addEventListener("DOMContentLoaded", e => {
        var t;
        if ("undefined" == typeof wpcf7) return void console.error("wpcf7 is not defined.");
        if (void 0 === wpcf7.api) return void console.error("wpcf7.api is not defined.");
        if ("function" != typeof window.fetch) return void console.error("Your browser doesn't support window.fetch().");
        if ("function" != typeof window.FormData) return void console.error("Your browser doesn't support window.FormData().");
        const n = document.querySelectorAll(".wpcf7 > form");
        "function" == typeof n.forEach ? (wpcf7 = {
            init: g,
            submit: v,
            reset: w, ...null !== (t = wpcf7) && void 0 !== t ? t : {}
        }, n.forEach(e => wpcf7.init(e))) : console.error("Your browser doesn't support NodeList.forEach().")
    })
}]);
(function ($) {
    $(document).ready(function () {
        $(document).on('click', '.pk-alert .pk-close', function () {
            $(this).closest('.pk-alert').remove();
        });
        $('.pk-tab-pane').removeClass('pk-fade');
        $(document).on('click', '.pk-tabs .pk-nav-item .pk-nav-link', function () {
            $(this).parent().siblings().find('.pk-active').removeClass('pk-active');
            $(this).addClass('pk-active');
            $(this).closest('.pk-tabs').find('.pk-tab-pane').removeClass('pk-show pk-active');
            $(this).closest('.pk-tabs').find('.pk-tab-content').find($(this).attr('href')).addClass('pk-show pk-active');
            return false;
        });
        $(document).on('click', '.pk-card a[data-toggle="collapse"]', function () {
            if ($(this).closest('.pk-collapsibles').length > 0) {
                $(this).closest('.pk-card').siblings().removeClass('expanded');
                $(this).closest('.pk-card').siblings().find('.pk-collapse').slideUp();
            }
            $(this).closest('.pk-card').toggleClass('expanded').find($(this).attr('href')).slideToggle();
            return false;
        });
    });
})(jQuery);
var powerkitJG = {"rtl": ""};
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.lazyClass = 'pk-lazyload';
window.lazySizesConfig.loadedClass = 'pk-lazyloaded';
window.lazySizesConfig.preloadClass = 'pk-lazypreload';
window.lazySizesConfig.loadingClass = 'pk-lazyloading';
window.lazySizesConfig.srcAttr = 'data-pk-src';
window.lazySizesConfig.srcsetAttr = 'data-pk-srcset';
window.lazySizesConfig.sizesAttr = 'data-pk-sizes';
document.addEventListener('lazyloaded', function (e) {
    if (!e.target.getAttribute('width')) {
        e.target.setAttribute('sizes', e.target.getAttribute('data-ls-sizes'));
    }
});
/*! lazysizes - v4.1.8 */
!function (a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function (a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener",
            i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback,
            n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach,
            r = function (a, b) {
                return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
            }, s = function (a, b) {
                r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
            }, t = function (a, b) {
                var c;
                (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
            }, u = function (a, b, c) {
                var d = c ? h : "removeEventListener";
                c && u(a, b), o.forEach(function (c) {
                    a[d](c, b)
                })
            }, v = function (a, d, e, f, g) {
                var h = b.createEvent("Event");
                return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h
            }, w = function (b, c) {
                var e;
                !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({
                    reevaluate: !0,
                    elements: [b]
                })) : c && c.src && (b.src = c.src)
            }, x = function (a, b) {
                return (getComputedStyle(a, null) || {})[b]
            }, y = function (a, b, c) {
                for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
                return c
            }, z = function () {
                var a, c, d = [], e = [], f = d, g = function () {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                    a = !1
                }, h = function (d, e) {
                    a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
                };
                return h._lsFlush = g, h
            }(), A = function (a, b) {
                return b ? function () {
                    z(a)
                } : function () {
                    var b = this, c = arguments;
                    z(function () {
                        a.apply(b, c)
                    })
                }
            }, B = function (a) {
                var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () {
                    b = !1, c = f.now(), a()
                }, i = m && g > 49 ? function () {
                    m(h, {timeout: g}), g !== d.ricTimeout && (g = d.ricTimeout)
                } : A(function () {
                    k(h)
                }, !0);
                return function (a) {
                    var d;
                    (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d))
                }
            }, C = function (a) {
                var b, c, d = 99, e = function () {
                    b = null, a()
                }, g = function () {
                    var a = f.now() - c;
                    a < d ? k(g, d - a) : (m || e)(e)
                };
                return function () {
                    c = f.now(), b || (b = k(g, d))
                }
            };
        !function () {
            var b, c = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            d = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in d || (d[b] = c[b]);
            a.lazySizesConfig = d, k(function () {
                d.init && F()
            })
        }();
        var D = function () {
            var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i,
                M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1,
                R = function (a) {
                    P--, (!a || P < 0 || !a.target) && (P = 0)
                }, S = function (a) {
                    return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility")
                }, T = function (a, c) {
                    var d, f = a, g = S(a);
                    for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) (g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
                    return g
                }, U = function () {
                    var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements;
                    if ((o = d.loadMode) && P < 8 && (a = u.length)) {
                        for (f = 0, Q++, r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N; f < a; f++) if (u[f] && !u[f]._lazyRace) if (M) if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) {
                            if (aa(u[f]), k = !0, P > 9) break
                        } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); else aa(u[f]);
                        j && !k && aa(j)
                    }
                }, V = B(U), W = function (a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded")
                }, X = A(W), Y = function (a) {
                    X({target: a.target})
                }, Z = function (a, b) {
                    try {
                        a.contentWindow.location.replace(b)
                    } catch (c) {
                        a.src = b
                    }
                }, $ = function (a) {
                    var b, c = a[i](d.srcsetAttr);
                    (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                }, _ = A(function (a, b, c, e, f) {
                    var g, h, j, l, o, p;
                    (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {target: a}, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, {src: g})), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {
                        var b = a.complete && a.naturalWidth > 1;
                        p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () {
                            "_lazyCache" in a && delete a._lazyCache
                        }, 9))
                    }, !0)
                }), aa = function (a) {
                    var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e;
                    (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++, _(a, b, f, e, c))
                }, ba = function () {
                    if (!l) {
                        if (f.now() - p < 999) return void k(ba, 999);
                        var a = C(function () {
                            d.loadMode = 3, V()
                        });
                        l = !0, d.loadMode = 3, V(), j("scroll", function () {
                            3 == d.loadMode && (d.loadMode = 2), a()
                        }, !0)
                    }
                };
            return {
                _: function () {
                    p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
                        b[h](a, V, !0)
                    }), /d$|^c/.test(b.readyState) ? ba() : (j("load", ba), b[h]("DOMContentLoaded", V), k(ba, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V()
                }, checkElems: V, unveil: aa
            }
        }(), E = function () {
            var a, c = A(function (a, b, c, d) {
                var e, f, g;
                if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                c.detail.dataAttr || w(a, c.detail)
            }), e = function (a, b, d) {
                var e, f = a.parentNode;
                f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
                    width: d,
                    dataAttr: !!b
                }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
            }, f = function () {
                var b, c = a.length;
                if (c) for (b = 0; b < c; b++) e(a[b])
            }, g = C(f);
            return {
                _: function () {
                    a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
                }, checkElems: g, updateElem: e
            }
        }(), F = function () {
            F.i || (F.i = !0, E._(), D._())
        };
        return c = {cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z}
    }
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["static/js/app"], a) : a("object" == typeof exports ? require("static/js/app") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse",
        m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close",
        t = function () {
        }, u = !!window.jQuery, v = a(window), w = function (a, c) {
            b.ev.on(o + a + p, c)
        }, x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        }, y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        }, z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        }, A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        }, B = function () {
            var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;) if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0
                } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c) if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
var powerkit_lightbox_localize = {
    "text_previous": "Previous",
    "text_next": "Next",
    "text_close": "Close",
    "text_loading": "Loading",
    "text_counter": "of",
    "single_image_selectors": ".entry-content img",
    "gallery_selectors": ".wp-block-gallery, .gallery",
    "exclude_selectors": "",
    "zoom_icon": "true"
};
(function ($) {
    $.fn.powerkitLightbox = function (options) {
        var settings = $.extend({gallery: false,}, options);
        var objSelector = this;
        var imageSelector = null;
        var containerSelector = null;
        $(objSelector).each(function () {
            if ($(this).is('img')) {
                imageSelector = this;
            } else {
                imageSelector = $(this).find('img');
            }
            $(imageSelector).each(function () {
                var container = $(this).parent();
                if (!$(container).is('a')) {
                    return;
                }
                var imagehref = $(container).attr('href');
                if (!imagehref.match(/\.(gif|jpeg|jpg|png)/)) {
                    return;
                }
                if (!($(container).closest('figure').length)) {
                    $(container).wrap('<figure class="pk-lightbox-container"></figure>');
                }
                if (!$(container).closest('figure').hasClass('pk-lightbox-container')) {
                    $(container).closest('figure').addClass('pk-lightbox-container');
                }
                var imgClasses = ['alignnone', 'aligncenter', 'alignleft', 'alignright'];
                imgClasses.forEach(function (el) {
                    if ($(container).find('img').hasClass(el)) {
                        $(container).find('img').removeClass(el);
                        $(container).find('img').closest('figure').addClass(el);
                        var imgWidth = $(container).find('img').attr('width');
                        if (parseInt(imgWidth) !== 'NaN') {
                            $(container).find('img').closest('figure').width(imgWidth);
                        }
                    }
                });
                container = $(container).parent();
                $('> a', container).not('.pk-pin-it').addClass('pk-image-popup');
                if (powerkit_lightbox_localize.zoom_icon) {
                    $('> a', container).not('.pk-pin-it').addClass('pk-zoom-icon-popup');
                }
                if ($(objSelector).is('img')) {
                    containerSelector = container;
                }
            });
            if (!$(objSelector).is('img')) {
                containerSelector = this;
            }
            $(containerSelector).magnificPopup({
                delegate: '.pk-image-popup',
                type: 'image',
                tClose: powerkit_lightbox_localize.text_close + '(Esc)',
                tLoading: powerkit_lightbox_localize.text_loading,
                gallery: {
                    enabled: settings.gallery,
                    tPrev: powerkit_lightbox_localize.text_previous,
                    tNext: powerkit_lightbox_localize.text_next,
                    tCounter: '<span class="mfp-counter">%curr% ' + powerkit_lightbox_localize.text_counter + ' %total%</span>'
                },
                image: {
                    titleSrc: function (item) {
                        let figure = item.el.closest('figure');
                        let description = $(figure).find('img').data('lightbox-description');
                        if (!description) {
                            description = $(figure).find('.wp-caption-text').text();
                        }
                        if (!description) {
                            description = $(figure).find('figcaption').text();
                        }
                        return description;
                    }
                },
            });
        });
    };

    function initPowerkitLightbox() {
        var excludeSelectors = powerkit_lightbox_localize.exclude_selectors;
        var imageSelectors = powerkit_lightbox_localize.single_image_selectors;
        var gallerySelectors = powerkit_lightbox_localize.gallery_selectors
        var filterSelectors = null;
        var filterPowerkitLightbox = function () {
            if (filterSelectors) {
                if ($(this).closest(filterSelectors).length > 0) {
                    return false;
                }
            }
            return true;
        }
        $(imageSelectors).imagesLoaded(function () {
            var exSplit = excludeSelectors.split(',');
            var glSplit = gallerySelectors.split(',');
            filterSelectors = exSplit.concat(glSplit).filter(function (value) {
                return !!value;
            }).filter(function (value) {
                return !this[value] && (this[value] = true);
            }, Object.create(null)).join(',');
            $(imageSelectors).filter(filterPowerkitLightbox).powerkitLightbox();
        });
        $(gallerySelectors).imagesLoaded(function () {
            filterSelectors = excludeSelectors;
            $(gallerySelectors).filter(filterPowerkitLightbox).powerkitLightbox({gallery: true});
        });
    }

    $(document).ready(function () {
        initPowerkitLightbox();
        $(document.body).on('post-load image-load', function () {
            initPowerkitLightbox();
        });
    });
})(jQuery);
var opt_in = {
    "ajax_url": "https:\/\/networkertheme.com\/gearbox\/wp-admin\/admin-ajax.php",
    "warning_privacy": "Please confirm that you agree with our policies."
};
"use strict";
(function ($) {
    $(document).on('submit', '.pk-subscribe-form-wrap form', function (e) {
        var form = $(this);
        $(form).closest('.pk-subscribe-form-wrap').find('.pk-alert').remove();
        var privacy = $(form).closest('.pk-subscribe-form-wrap').find('input[name="pk-privacy"]');
        if ($(privacy).length > 0 && !$(privacy).prop('checked')) {
            $(privacy).parent().after('<p class="pk-alert pk-alert-warning">' + window.opt_in.warning_privacy + '</p>');
            return false;
        }
        if (!$(form).hasClass('pk-loading')) {
            $.ajax({
                type: 'POST', url: '/create-newsletter/email', data: $(form).serialize(), beforeSend: function () {
                    $(form).addClass('pk-loading');
                }, success: function (data) {
                    $(form).removeClass('pk-loading');
                    if (data.success) {
                        $(form).after('<p class="pk-alert pk-alert-success">' + data.data + '</p>');
                    } else {
                        $(form).after('<p class="pk-alert pk-alert-warning">' + data.data + '</p>');
                    }
                }, error: function () {
                    $(form).after('<p class="pk-alert pk-alert-warning">Error server!</p>');
                    $(form).removeClass('pk-loading');
                }
            });
        }
        return false;
    });
})(jQuery);
var powerkit_pinit_localize = {
    "image_selectors": ".entry-content img",
    "exclude_selectors": ".cnvs-block-row,.cnvs-block-section,.cnvs-block-posts .entry-thumbnail,.cnvs-post-thumbnail,.pk-block-author,.pk-featured-categories img,.pk-inline-posts-container img,.pk-instagram-image,.pk-subscribe-image,.wp-block-cover,.pk-block-posts,.cs-posts-area__main,.cs-entry,.woocommerce .products img,.woocommerce-product-gallery img,.woocommerce-cart-form .product-thumbnail img,.wc-block-featured-category,.wc-block-featured-product,.wp-block-handpicked-products,.wc-block-grid",
    "only_hover": "true"
};
(function ($) {
    $.fn.powerkitPinIt = function () {
        $(this).each(function () {
            if ($(this).hasClass('pk-pin-it-ready')) {
                return;
            }
            var width = $(this).attr('width');
            var height = $(this).attr('height');
            if (typeof width === 'undefined') {
                width = $(this).width();
            }
            if (typeof height === 'undefined') {
                height = $(this).height();
            }
            if (!(parseInt(width) > 120 && parseInt(height) > 120)) {
                $(this).addClass('pk-pin-it-ready');
                return;
            }
            var container = $(this).parent(), postURL = $(location).attr('href'), pinURL;
            if ($(container).is('a')) {
                var imagehref = $(container).attr('href');
                if (typeof imagehref !== 'undefined' && imagehref.match(/\.(gif|jpeg|jpg|png)/)) {
                    pinURL = imagehref;
                }
                if (!($(container).closest('figure').length)) {
                    $(container).wrap('<figure class="pk-pin-it-container"></figure>');
                }
                container = $(container).parent();
            } else {
                if (!($(container).is('figure') || $(container).closest('figure').length)) {
                    $(this).wrap('<figure class="pk-pin-it-container"></figure>');
                }
                container = $(this).parent();
            }
            if (!$(this).closest('figure').hasClass('pk-pin-it-container')) {
                $(this).closest('figure').addClass('pk-pin-it-container');
            }
            if (!pinURL) {
                if ($(this).is('img')) {
                    pinURL = (typeof $(this).data('pk-src') !== 'undefined') ? $(this).data('pk-src') : $(this).attr('src');
                } else {
                    pinURL = (typeof $(container).find('img').data('src') !== 'undefined') ? $(container).find('img').data('src') : $(container).find('img').attr('src');
                }
            }
            pinURL = encodeURIComponent(pinURL);
            postURL = encodeURIComponent(postURL);
            var figure = container;
            if (!$(container).is('figure')) {
                figure = $(container).closest('figure');
            }
            var imgDescription = $(figure).find('img').data('pin-description');
            if (!imgDescription) {
                imgDescription = $(figure).find('.wp-caption-text').text();
            }
            if (!imgDescription) {
                imgDescription = $(figure).find('figcaption').text();
            }
            if (!imgDescription) {
                imgDescription = $(figure).find('img').attr('alt');
            }
            if (imgDescription) {
                imgDescription = '&amp;description=' + encodeURIComponent(imgDescription);
            }
            var imgClasses = ['alignnone', 'aligncenter', 'alignleft', 'alignright'];
            imgClasses.forEach(function (el) {
                if ($(container).find('img').hasClass(el)) {
                    $(container).find('img').removeClass(el);
                    $(container).find('img').closest('figure').addClass(el);
                    var imgWidth = $(container).find('img').attr('width');
                    if (parseInt(imgWidth) !== 'NaN') {
                        $(container).find('img').closest('figure').width(imgWidth);
                    }
                }
            });
            var addPowerkitPintIt = function (container) {
                if (!$(container).find('.pk-pin-it').length) {
                    $('<a class="pk-pin-it" href="http://www.pinterest.com/pin/create/bookmarklet/?url=' + postURL + '&amp;media=' + pinURL + imgDescription + '&is_video=false" target="_blank"><span>Pin</span><span><i class="pk-icon pk-icon-pinterest"></i></span></a>').appendTo(container).addClass('pk-pin-it-visible');
                }
            }
            if (powerkit_pinit_localize.only_hover) {
                $(container).mousemove(function () {
                    addPowerkitPintIt(this);
                });
                $(container).mouseleave(function () {
                    var $this = this;
                    $($this).children('.pk-pin-it').fadeOut(200, function () {
                        $($this).children('.pk-pin-it').remove();
                    });
                });
            } else {
                addPowerkitPintIt(container);
            }
            $(this).addClass('pk-pin-it-ready');
        });
    };

    function initPowerkitPinIt() {
        var filterPowerkitPinIt = function () {
            var exclude = powerkit_pinit_localize.exclude_selectors;
            if (exclude) {
                if ($(this).closest(exclude).length > 0) {
                    return false;
                }
            }
            return true;
        }
        $(powerkit_pinit_localize.image_selectors).imagesLoaded(function () {
            $(powerkit_pinit_localize.image_selectors).filter(filterPowerkitPinIt).powerkitPinIt();
        });
    }

    $(document).ready(function () {
        initPowerkitPinIt();
        $(document.body).on('post-load image-load', function () {
            initPowerkitPinIt();
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $(window).scroll(function () {
            var offset = $('body').innerHeight() * 0.1;
            if ($(this).scrollTop() > offset) {
                $('.pk-scroll-to-top').addClass('pk-active');
            } else {
                $('.pk-scroll-to-top').removeClass('pk-active');
            }
        });
        $('.pk-scroll-to-top').on('click', function () {
            $('body, html').animate({scrollTop: 0}, 400);
            return false;
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        let blockquoteLength = $('.pk-share-buttons-blockquote').length;
        if (blockquoteLength) {
            $('.entry-content').find('blockquote').each(function (index, item) {
                if ($(item).closest('.wp-block-embed').length) {
                    return;
                }
                if ($(item).closest('.twitter-tweet').length) {
                    return;
                }
                var text = $(this).find('p').text();
                if (!text) {
                    text = $(this).text();
                }
                let container = $('.pk-share-buttons-blockquote').not('.pk-share-buttons-blockquote-clone').clone().appendTo(item);
                container.addClass('pk-share-buttons-blockquote-clone');
                container.find('.pk-share-buttons-link').each(function (index, item) {
                    let url = $(this).attr('href').replace('--SHARETEXT--', encodeURIComponent(text));
                    $(this).attr('href', url);
                });
            });
        }
        let highlightLength = $('.pk-share-buttons-highlight-text').length;
        if (highlightLength) {
            $('body').on('mouseup', function (e) {
                if (!$(e.target).closest('.entry-content').length && !$(e.target).closest('.pk-share-buttons-wrap').length) {
                    highlightRemove();
                }
            });
            $('body').on('mouseup', '.entry-content', function (e) {
                e.preventDefault();
                highlightRemove();
                let selection = window.getSelection();
                let text = selection.toString();
                this.title = '';
                if ('' != text) {
                    highlightDisplay(text, e);

                }
            });
            var highlightRemove = function () {
                $('.pk-share-buttons-highlight-clone').remove();
            };
            var highlightDisplay = function (text, e) {
                highlightRemove();
                let container = $('.pk-share-buttons-highlight-text').not('.pk-share-buttons-highlight-clone').clone().appendTo('body');
                let wrapper_x = e.pageX + 10;
                let wrapper_y = e.pageY + 10;
                container.addClass('pk-share-buttons-highlight-clone');
                container.css({left: wrapper_x, top: wrapper_y});
                container.find('.pk-share-buttons-link').each(function (index, item) {
                    let url = $(this).attr('href').replace('--SHARETEXT--', encodeURIComponent(text));
                    $(this).attr('href', url);
                });
            }
        }
        let mobileShare = $('.pk-share-buttons-layout-right-side, .pk-share-buttons-layout-left-side, .pk-share-buttons-layout-popup');
        $(mobileShare).each(function (index, elem) {
            $(elem).find('.pk-share-buttons-total, .pk-share-buttons-link').on('click', function (e) {
                $('body').toggleClass('pk-mobile-share-active');
            });
        });
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.pk-share-buttons-total').length) {
                $('body').removeClass('pk-mobile-share-active');
            }
        });
    });
})(jQuery);
var powerkit_sg_flickity = {"page_info_sep": " of "};
(function ($) {
    function powerkitInitSliderGallery() {
        function powerkitSliderPageInfo(cellNumber, cellsLength) {
            var sep = powerkit_sg_flickity.page_info_sep;
            return '<span class="current">' + (cellNumber + 1) + '</span><span class="sep">' + sep + '</span><span class="cells">' + cellsLength + '</span>';
        }

        $('.gallery-type-slider:not(.gallery-type-slider-ready)').imagesLoaded(function (instance) {
            $(instance.elements).each(function (index, el) {
                var $el = $(el);
                $el.filter(':not(.gallery-type-slider-ready)').addClass('gallery-type-slider-ready').flickity({
                    pageDots: $el.data('sg-page-dots'),
                    prevNextButtons: $el.data('sg-nav'),
                    adaptiveHeight: true,
                    cellAlign: 'left',
                    contain: true,
                    on: {
                        ready: function () {
                            var data = Flickity.data(el);
                            $el.addClass('is-animate slider-loaded');
                            if ($el.data('sg-page-info')) {
                                if ($el.data('sg-page-dots')) {
                                    $el.find('.flickity-page-dots').wrap('<div class="flickity-pages"></div>');
                                } else {
                                    $el.append('<div class="flickity-pages"></div>');
                                }
                                var cellNumber = data.selectedIndex;
                                $el.find('.flickity-pages').append('<div class="flickity-page-info">' + powerkitSliderPageInfo(cellNumber, data.cells.length) + '</div>');
                            }
                            $(document.body).trigger('image-load');
                        }, change: function (cellNumber) {
                            var data = Flickity.data(el);
                            if ($el.data('sg-page-info')) {
                                $el.find('.flickity-page-info').html(powerkitSliderPageInfo(cellNumber, data.cells.length));
                            }
                        }
                    }
                });
            });
        });
    }

    $(document).ready(function () {
        powerkitInitSliderGallery();
        $(document.body).on('post-load', function () {
            powerkitInitSliderGallery();
        });
        if ('undefined' !== typeof wp && 'undefined' !== typeof wp.hooks) {
            wp.hooks.addAction('canvas.components.serverSideRender.onChange', 'canvas/slider-gallery.init', function (props) {
                if ('canvas/slider-gallery' === props.block) {
                    powerkitInitSliderGallery();
                }
            });
        }
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        var pk_toc_container = '.entry-content';
        var pk_toc_wpadminbar = 0;
        var pk_toc_offset = 80;
        if ($('#wpadminbar').length > 0) {
            pk_toc_wpadminbar = $('#wpadminbar').outerHeight();
            if ('absolute' === $('#wpadminbar').css('position')) {
                pk_toc_wpadminbar = 0;
            }
        }
        $(document).on('click', '.pk-toc-btn-hide', function () {
            if ($(this).closest('.pk-toc').hasClass('pk-toc-hide')) {
                $(this).closest('.pk-toc').removeClass('pk-toc-hide');
                $(this).closest('.pk-toc').find('> ol, > ul').slideDown(200, function () {
                    $(this).animate({opacity: 1}, 150, 'swing');
                });
            } else {
                $(this).closest('.pk-toc').addClass('pk-toc-hide');
                $(this).closest('.pk-toc').find('> ol, > ul').animate({opacity: 0}, 150, 'swing', function () {
                    $(this).slideUp(200);
                });
            }
        });
        $(document).on('click', '.pk-toc a', function () {
            var objContent = $(pk_toc_container);
            if ($(this).closest(pk_toc_container).length > 0) {
                objContent = $(this).closest(pk_toc_container);
            }
            var offsetHeading = $(objContent).find($(this).attr('href')).offset();
            if (typeof offsetHeading === 'undefined') {
                return;
            }
            var positionHeading = offsetHeading.top;
            $('body, html').animate({scrollTop: positionHeading - pk_toc_wpadminbar - pk_toc_offset}, 400);
            return false;
        });
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            $('.powerkit_toc_widget').first().find('.pk-toc a').each(function (index, elem) {
                var offsetHeading = $($(elem).attr('href')).offset();
                if (typeof offsetHeading === 'undefined') {
                    return;
                }
                var positionHeading = offsetHeading.top;
                if (positionHeading - scrollTop - pk_toc_wpadminbar - pk_toc_offset <= 0) {
                    var filterElem = '[href="%1s"]'.replace('%1s', $(elem).attr('href'));
                    var menuElem = $('.powerkit_toc_widget .pk-toc').find('a').filter(filterElem);
                    $('.powerkit_toc_widget .pk-toc li').removeClass('active active-child');
                    $(menuElem).parents('li').addClass('active-child');
                    $(menuElem).parent('li').addClass('active');
                }
            });
        });
    });
})(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function () {
    "use strict";

    function e(p) {
        p.fn._fadeIn = p.fn.fadeIn;
        var b = p.noop || function () {
            }, h = /MSIE/.test(navigator.userAgent),
            k = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            y = (document.documentMode, "function" == typeof document.createElement("div").style.setExpression && document.createElement("div").style.setExpression);
        p.blockUI = function (e) {
            o(window, e)
        }, p.unblockUI = function (e) {
            v(window, e)
        }, p.growlUI = function (e, t, o, n) {
            var i = p('<div class="growlUI"></div>');
            e && i.append("<h1>" + e + "</h1>"), t && i.append("<h2>" + t + "</h2>"), o === undefined && (o = 3e3);
            var s = function (e) {
                e = e || {}, p.blockUI({
                    message: i,
                    fadeIn: "undefined" != typeof e.fadeIn ? e.fadeIn : 700,
                    fadeOut: "undefined" != typeof e.fadeOut ? e.fadeOut : 1e3,
                    timeout: "undefined" != typeof e.timeout ? e.timeout : o,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: n,
                    css: p.blockUI.defaults.growlCSS
                })
            };
            s();
            i.css("opacity");
            i.on("mouseover", function () {
                s({fadeIn: 0, timeout: 3e4});
                var e = p(".blockMsg");
                e.stop(), e.fadeTo(300, 1)
            }).on("mouseout", function () {
                p(".blockMsg").fadeOut(1e3)
            })
        }, p.fn.block = function (e) {
            if (this[0] === window) return p.blockUI(e), this;
            var t = p.extend({}, p.blockUI.defaults, e || {});
            return this.each(function () {
                var e = p(this);
                t.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == p.css(this, "position") && (this.style.position = "relative", p(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, e)
            })
        }, p.fn.unblock = function (e) {
            return this[0] === window ? (p.unblockUI(e), this) : this.each(function () {
                v(this, e)
            })
        }, p.blockUI.version = 2.7, p.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {width: "30%", top: "40%", left: "35%"},
            overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"},
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var m = null, g = [];

        function o(e, o) {
            var t, n, i, s, l, d, a, c, r, u = e == window, f = o && o.message !== undefined ? o.message : undefined;
            (o = p.extend({}, p.blockUI.defaults, o || {})).ignoreIfBlocked && p(e).data("blockUI.isBlocked") || (o.overlayCSS = p.extend({}, p.blockUI.defaults.overlayCSS, o.overlayCSS || {}), i = p.extend({}, p.blockUI.defaults.css, o.css || {}), o.onOverlayClick && (o.overlayCSS.cursor = "pointer"), s = p.extend({}, p.blockUI.defaults.themedCSS, o.themedCSS || {}), f = f === undefined ? o.message : f, u && m && v(window, {fadeOut: 0}), f && "string" != typeof f && (f.parentNode || f.jquery) && (t = f.jquery ? f[0] : f, a = {}, p(e).data("blockUI.history", a), a.el = t, a.parent = t.parentNode, a.display = t.style.display, a.position = t.style.position, a.parent && a.parent.removeChild(t)), p(e).data("blockUI.onUnblock", o.onUnblock), r = o.baseZ, a = h || o.forceIframe ? p('<iframe class="blockUI" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + o.iframeSrc + '"></iframe>') : p('<div class="blockUI" style="display:none"></div>'), t = o.theme ? p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + r++ + ';display:none"></div>') : p('<div class="blockUI blockOverlay" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), o.theme && u ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:fixed">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : o.theme ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:absolute">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : c = u ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage" style="z-index:' + (r + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + o.blockMsgClass + ' blockElement" style="z-index:' + (r + 10) + ';display:none;position:absolute"></div>', r = p(c), f && (o.theme ? (r.css(s), r.addClass("ui-widget-content")) : r.css(i)), o.theme || t.css(o.overlayCSS), t.css("position", u ? "fixed" : "absolute"), (h || o.forceIframe) && a.css("opacity", 0), c = [a, t, r], n = p(u ? "body" : e), p.each(c, function () {
                this.appendTo(n)
            }), o.theme && o.draggable && p.fn.draggable && r.draggable({
                handle: ".ui-dialog-titlebar",
                cancel: "li"
            }), s = y && (!p.support.boxModel || 0 < p("object,embed", u ? null : e).length), (k || s) && (u && o.allowBodyStretch && p.support.boxModel && p("html,body").css("height", "100%"), !k && p.support.boxModel || u || (i = U(e, "borderTopWidth"), s = U(e, "borderLeftWidth"), l = i ? "(0 - " + i + ")" : 0, d = s ? "(0 - " + s + ")" : 0), p.each(c, function (e, t) {
                t = t[0].style;
                t.position = "absolute", e < 2 ? (u ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + o.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), u ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), d && t.setExpression("left", d), l && t.setExpression("top", l)) : o.centerY ? (u && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0) : !o.centerY && u && (e = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (o.css && o.css.top ? parseInt(o.css.top, 10) : 0) + ') + "px"', t.setExpression("top", e))
            })), f && ((o.theme ? r.find(".ui-widget-content") : r).append(f), (f.jquery || f.nodeType) && p(f).show()), (h || o.forceIframe) && o.showOverlay && a.show(), o.fadeIn ? (c = o.onBlock ? o.onBlock : b, a = o.showOverlay && !f ? c : b, c = f ? c : b, o.showOverlay && t._fadeIn(o.fadeIn, a), f && r._fadeIn(o.fadeIn, c)) : (o.showOverlay && t.show(), f && r.show(), o.onBlock && o.onBlock.bind(r)()), I(1, e, o), u ? (m = r[0], g = p(o.focusableElements, m), o.focusInput && setTimeout(w, 20)) : function (e, t, o) {
                var n = e.parentNode, i = e.style, s = (n.offsetWidth - e.offsetWidth) / 2 - U(n, "borderLeftWidth"),
                    n = (n.offsetHeight - e.offsetHeight) / 2 - U(n, "borderTopWidth");
                t && (i.left = 0 < s ? s + "px" : "0");
                o && (i.top = 0 < n ? n + "px" : "0")
            }(r[0], o.centerX, o.centerY), o.timeout && (r = setTimeout(function () {
                u ? p.unblockUI(o) : p(e).unblock(o)
            }, o.timeout), p(e).data("blockUI.timeout", r)))
        }

        function v(e, t) {
            var o, n, i = e == window, s = p(e), l = s.data("blockUI.history"), d = s.data("blockUI.timeout");
            d && (clearTimeout(d), s.removeData("blockUI.timeout")), t = p.extend({}, p.blockUI.defaults, t || {}), I(0, e, t), null === t.onUnblock && (t.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock")), n = i ? p(document.body).children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"), t.cursorReset && (1 < n.length && (n[1].style.cursor = t.cursorReset), 2 < n.length && (n[2].style.cursor = t.cursorReset)), i && (m = g = null), t.fadeOut ? (o = n.length, n.stop().fadeOut(t.fadeOut, function () {
                0 == --o && a(n, l, t, e)
            })) : a(n, l, t, e)
        }

        function a(e, t, o, n) {
            var i = p(n);
            i.data("blockUI.isBlocked") || (e.each(function (e, t) {
                this.parentNode && this.parentNode.removeChild(this)
            }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), i.removeData("blockUI.history")), i.data("blockUI.static") && i.css("position", "static"), "function" == typeof o.onUnblock && o.onUnblock(n, o), n = (i = p(document.body)).width(), o = i[0].style.width, i.width(n - 1).width(n), i[0].style.width = o)
        }

        function I(e, t, o) {
            var n = t == window, t = p(t);
            !e && (n && !m || !n && !t.data("blockUI.isBlocked")) || (t.data("blockUI.isBlocked", e), n && o.bindEvents && (!e || o.showOverlay) && (n = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", e ? p(document).on(n, o, i) : p(document).off(n, i)))
        }

        function i(e) {
            if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && m && e.data.constrainTabKey) {
                var t = !e.shiftKey && e.target === g[g.length - 1], o = e.shiftKey && e.target === g[0];
                if (t || o) return setTimeout(function () {
                    w(o)
                }, 10), !1
            }
            var n = e.data, t = p(e.target);
            return t.hasClass("blockOverlay") && n.onOverlayClick && n.onOverlayClick(e), 0 < t.parents("div." + n.blockMsgClass).length || 0 === t.parents().children().filter("div.blockUI").length
        }

        function w(e) {
            !g || (e = g[!0 === e ? g.length - 1 : 0]) && e.trigger("focus")
        }

        function U(e, t) {
            return parseInt(p.css(e, t), 10) || 0
        }
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["static/js/app"], e) : e(jQuery)
}();
var wc_add_to_cart_params = {
    "ajax_url": "\/gearbox\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/gearbox\/?wc-ajax=%%endpoint%%",
    "i18n_view_cart": "View cart",
    "cart_url": "https:\/\/networkertheme.com\/gearbox\/cart\/",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
jQuery(function (d) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;
    var t = function () {
        this.requests = [], this.addRequest = this.addRequest.bind(this), this.run = this.run.bind(this), d(document.body).on("click", ".add_to_cart_button", {addToCartHandler: this}, this.onAddToCart).on("click", ".remove_from_cart_button", {addToCartHandler: this}, this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("ajax_request_not_sent.adding_to_cart", this.updateButton).on("added_to_cart removed_from_cart", {addToCartHandler: this}, this.updateFragments)
    };
    t.prototype.addRequest = function (t) {
        this.requests.push(t), 1 === this.requests.length && this.run()
    }, t.prototype.run = function () {
        var t = this, a = t.requests[0].complete;
        t.requests[0].complete = function () {
            "function" == typeof a && a(), t.requests.shift(), 0 < t.requests.length && t.run()
        }, d.ajax(this.requests[0])
    }, t.prototype.onAddToCart = function (t) {
        var a = d(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            if (t.preventDefault(), a.removeClass("added"), a.addClass("loading"), !1 === d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart", [a])) return d(document.body).trigger("ajax_request_not_sent.adding_to_cart", [!1, !1, a]), !0;
            var e = {};
            d.each(a.data(), function (t, a) {
                e[t] = a
            }), d.each(a[0].dataset, function (t, a) {
                e[t] = a
            }), d(document.body).trigger("adding_to_cart", [a, e]), t.data.addToCartHandler.addRequest({
                type: "POST",
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"),
                data: e,
                success: function (t) {
                    t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? d(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
                },
                dataType: "json"
            })
        }
    }, t.prototype.onRemoveFromCart = function (t) {
        var a = d(this), e = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), e.block({
            message: null,
            overlayCSS: {opacity: .6}
        }), t.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"),
            data: {cart_item_key: a.data("cart_item_key")},
            success: function (t) {
                t && t.fragments ? d(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
            },
            error: function () {
                window.location = a.attr("href")
            },
            dataType: "json"
        })
    }, t.prototype.updateButton = function (t, a, e, r) {
        (r = void 0 !== r && r) && (r.removeClass("loading"), a && r.addClass("added"), a && !wc_add_to_cart_params.is_cart && 0 === r.parent().find(".added_to_cart").length && r.after('<a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), d(document.body).trigger("wc_cart_button_updated", [r]))
    }, t.prototype.updateFragments = function (t, a) {
        a && (d.each(a, function (t) {
            d(t).addClass("updating").fadeTo("400", "0.6").block({message: null, overlayCSS: {opacity: .6}})
        }), d.each(a, function (t, a) {
            d(t).replaceWith(a), d(t).stop(!0).css("opacity", "1").unblock()
        }), d(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    var n, o, t = !1;
    "function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), t || (n = window.Cookies, (o = window.Cookies = e()).noConflict = function () {
        return window.Cookies = n, o
    })
}(function () {
    function m() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o, t = arguments[e];
            for (o in t) n[o] = t[o]
        }
        return n
    }

    return function e(C) {
        function g(e, n, o) {
            var t, r;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    "number" == typeof (o = m({path: "/"}, g.defaults, o)).expires && ((r = new Date).setMilliseconds(r.getMilliseconds() + 864e5 * o.expires), o.expires = r), o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        t = JSON.stringify(n), /^[\{\[]/.test(t) && (n = t)
                    } catch (l) {
                    }
                    n = C.write ? C.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var i, c = "";
                    for (i in o) o[i] && (c += "; " + i, !0 !== o[i] && (c += "=" + o[i]));
                    return document.cookie = e + "=" + n + c
                }
                e || (t = {});
                for (var s = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                    var a = s[p].split("=");
                    '"' === (u = a.slice(1).join("=")).charAt(0) && (u = u.slice(1, -1));
                    try {
                        var d = a[0].replace(f, decodeURIComponent),
                            u = C.read ? C.read(u, d) : C(u, d) || u.replace(f, decodeURIComponent);
                        if (this.json) try {
                            u = JSON.parse(u)
                        } catch (l) {
                        }
                        if (e === d) {
                            t = u;
                            break
                        }
                        e || (t[d] = u)
                    } catch (l) {
                    }
                }
                return t
            }
        }

        return (g.set = g).get = function (e) {
            return g.call(g, e)
        }, g.getJSON = function () {
            return g.apply({json: !0}, [].slice.call(arguments))
        }, g.defaults = {}, g.remove = function (e, n) {
            g(e, "", m(n, {expires: -1}))
        }, g.withConverter = e, g
    }(function () {
    })
});
var woocommerce_params = {
    "ajax_url": "\/gearbox\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/gearbox\/?wc-ajax=%%endpoint%%"
};
jQuery(function (s) {
    s(".woocommerce-ordering").on("change", "select.orderby", function () {
        s(this).closest("form").trigger("submit")
    }), s("input.qty:not(.product-quantity input.qty)").each(function () {
        var o = parseFloat(s(this).attr("min"));
        0 <= o && parseFloat(s(this).val()) < o && s(this).val(o)
    });
    var e = "store_notice" + (s(".woocommerce-store-notice").data("noticeId") || "");
    "hidden" === Cookies.get(e) ? s(".woocommerce-store-notice").hide() : s(".woocommerce-store-notice").show(), s(".woocommerce-store-notice__dismiss-link").on("click", function (o) {
        Cookies.set(e, "hidden", {path: "/"}), s(".woocommerce-store-notice").hide(), o.preventDefault()
    }), s(".woocommerce-input-wrapper span.description").length && s(document.body).on("click", function () {
        s(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), s(".woocommerce-input-wrapper").on("click", function (o) {
        o.stopPropagation()
    }), s(".woocommerce-input-wrapper :input").on("keydown", function (o) {
        var e = s(this).parent().find("span.description");
        if (27 === o.which && e.length && e.is(":visible")) return e.prop("aria-hidden", !0).slideUp(250), o.preventDefault(), !1
    }).on("click focus", function () {
        var o = s(this).parent(), e = o.find("span.description");
        o.addClass("currentTarget"), s(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), e.length && e.is(":hidden") && e.prop("aria-hidden", !1).slideDown(250), o.removeClass("currentTarget")
    }), s.scroll_to_notices = function (o) {
        o.length && s("html, body").animate({scrollTop: o.offset().top - 100}, 1e3)
    }, s('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'), s(".woocommerce form input").filter(":password").parent("span").addClass("password-input"), s(".password-input").append('<span class="show-password-input"></span>'), s(".show-password-input").on("click", function () {
        s(this).hasClass("display-password") ? s(this).removeClass("display-password") : s(this).addClass("display-password"), s(this).hasClass("display-password") ? s(this).siblings(['input[type="password"]']).prop("type", "text") : s(this).siblings('input[type="text"]').prop("type", "password")
    })
});
var wc_cart_fragments_params = {
    "ajax_url": "\/gearbox\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/gearbox\/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_f92594a63ac4529a8f7fdfc4efaeb901",
    "fragment_name": "wc_fragments_f92594a63ac4529a8f7fdfc4efaeb901",
    "request_timeout": "5000"
};
jQuery(function (r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0, o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (w) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }

    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {time: (new Date).getTime()},
        timeout: wc_cart_fragments_params.request_timeout,
        success: function (e) {
            e && e.fragments && (r.each(e.fragments, function (e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function () {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }

    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function () {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function (e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function () {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function (e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function (e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o), g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw"No cart_created";
            if (m) {
                var d = +m + 864e5, m = (new Date).getTime();
                if (d < m) throw"Fragment expired";
                i = setTimeout(n, d - m)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw"No fragment";
            r.each(c, function (e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (w) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function () {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function () {
        n()
    })
});
var csLocalize = {"siteSchemeMode": "system", "siteSchemeToogle": "1"};
var csco_mega_menu = {"rest_url": "https:\/\/networkertheme.com\/gearbox\/wp-json\/csco\/v1\/menu-posts"};
(function (modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {i: moduleId, l: false, exports: {}};
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }

    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {configurable: false, enumerable: true, get: getter});
        }
    };
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 1);
})
([(function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.csThrottleScroll = csThrottleScroll;
    exports.csGetCookie = csGetCookie;
    exports.csSetCookie = csSetCookie;
    exports.docH = exports.wndH = exports.wndW = exports.csco = exports.$body = exports.$doc = exports.$window = exports.$ = void 0;
    var csco = {
        addAction: function addAction(x, y, z) {

        }
    };
    exports.csco = csco;
    if ('undefined' !== typeof wp && 'undefined' !== typeof wp.hooks) {
        csco.addAction = wp.hooks.addAction;
    }
    var $ = jQuery;
    exports.$ = $;
    var $window = $(window);
    exports.$window = $window;
    var $doc = $(document);
    exports.$doc = $doc;
    var $body = $('body');
    exports.$body = $body;
    var wndW = 0;
    exports.wndW = wndW;
    var wndH = 0;
    exports.wndH = wndH;
    var docH = 0;
    exports.docH = docH;

    function csGetWndSize() {
        exports.wndW = wndW = $window.width();
        exports.wndH = wndH = $window.height();
        exports.docH = docH = $doc.height();
    }

    $window.on('resize load orientationchange', csGetWndSize);
    csGetWndSize();
    var csHideOnScrollList = [];
    var csDidScroll;
    var csLastST = 0;
    $window.on('scroll load resize orientationchange', function () {
        if (csHideOnScrollList.length) {
            csDidScroll = true;
        }
    });

    function csHasScrolled() {
        var ST = $window.scrollTop();
        var type = null;
        if (ST > csLastST) {
            type = 'down';
        } else if (ST < csLastST) {
            type = 'up';
        } else {
            type = 'none';
        }
        if (ST === 0) {
            type = 'start';
        } else if (ST >= docH - wndH) {
            type = 'end';
        }
        csHideOnScrollList.forEach(function (item) {
            if (typeof item === 'function') {
                item(type, ST, csLastST, $window);
            }
        });
        csLastST = ST;
    }

    setInterval(function () {
        if (csDidScroll) {
            csDidScroll = false;
            window.requestAnimationFrame(csHasScrolled);
        }
    }, 250);

    function csThrottleScroll(callback) {
        csHideOnScrollList.push(callback);
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function csGetCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function csSetCookie(name, value) {
        var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        props = {path: '/'};
        if (props.expires instanceof Date) {
            props.expires = props.expires.toUTCString();
        }
        var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (var optionKey in props) {
            updatedCookie += "; " + optionKey;
            var optionValue = props[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
}), (function (module, exports, __webpack_require__) {
    __webpack_require__(2);
    __webpack_require__(3);
    __webpack_require__(4);
    __webpack_require__(5);
    __webpack_require__(6);
    __webpack_require__(7);
    __webpack_require__(8);
    __webpack_require__(9);
    __webpack_require__(10);
    __webpack_require__(11);
    __webpack_require__(12);
    __webpack_require__(13);
    __webpack_require__(14);
    __webpack_require__(15);
    __webpack_require__(16);
    module.exports = __webpack_require__(17);
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        function initCarousel() {
            (0, _utility.$)('.cnvs-block-posts-layout-carousel-type-1').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-carousel__items');
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        console.log(autoPlay);
                        var settings = {
                            wrapAround: wrapAround ? true : false,
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            pageDots: pageDots ? true : false,
                            rightToLeft: rtl,
                            resize: true
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-carousel__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-carousel__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-carousel__cell').length;
                        if (elCount >= 2) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
            (0, _utility.$)('.cnvs-block-posts-layout-wide-type-2').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-wide-carousel__items');
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        var settings = {
                            wrapAround: wrapAround ? true : false,
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            pageDots: pageDots ? true : false,
                            rightToLeft: rtl,
                            resize: true
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-wide-carousel__cell').length;
                        if (elCount >= 2) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
            (0, _utility.$)('.cnvs-block-posts-layout-wide-type-3 ').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-wide-carousel__items');
                        var $current;
                        var point = function point() {
                            var points = [340, 370, 480, 565, 640, 720, 1020, 1200, 1440, 1660, 1920];
                            var current = 0;
                            for (var i in points) {
                                if (window.innerWidth >= points[i]) {
                                    current = points[i];
                                }
                            }
                            return current;
                        };
                        var carouselColumns = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        var settings = {
                            cellAlign: rtl ? 'right' : 'left',
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            rightToLeft: rtl,
                            wrapAround: wrapAround ? true : false,
                            pageDots: pageDots ? true : false,
                            resize: true
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-wide-carousel__cell').length;
                        if (elCount >= carouselColumns + 1) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $current = point();
                        (0, _utility.$)(window).resize(function () {
                            var carouselColumnsResize = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                            if ($current !== point() && elCount >= carouselColumnsResize + 1) {
                                (0, _utility.$)(objectSlider).flickity(settings);
                                $current = point();
                                if ((0, _utility.$)(objectSlider).flickity(settings)) {
                                    (0, _utility.$)(objectSlider).flickity('destroy');
                                    (0, _utility.$)(objectSlider).flickity(settings);
                                }
                            } else if ($current !== point() && elCount <= carouselColumnsResize && (0, _utility.$)(objectSlider).flickity(settings)) {
                                (0, _utility.$)(objectSlider).flickity('destroy');
                                $current = point();
                            }
                        });
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
            (0, _utility.$)('.cnvs-block-posts-layout-wide-type-4 ').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-wide-carousel__items');
                        var $current;
                        var point = function point() {
                            var points = [340, 370, 480, 565, 640, 720, 1020, 1200, 1440, 1660, 1920];
                            var current = 0;
                            for (var i in points) {
                                if (window.innerWidth >= points[i]) {
                                    current = points[i];
                                }
                            }
                            return current;
                        };
                        var carouselColumns = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        var settings = {
                            cellAlign: rtl ? 'right' : 'left',
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            wrapAround: wrapAround ? true : false,
                            pageDots: pageDots ? true : false,
                            rightToLeft: rtl,
                            resize: true
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-wide-carousel__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-wide-carousel__cell').length;
                        if (elCount >= carouselColumns + 1) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $current = point();
                        (0, _utility.$)(window).resize(function () {
                            var carouselColumnsResize = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                            if ($current !== point() && elCount >= carouselColumnsResize + 1) {
                                (0, _utility.$)(objectSlider).flickity(settings);
                                $current = point();
                                if ((0, _utility.$)(objectSlider).flickity(settings)) {
                                    (0, _utility.$)(objectSlider).flickity('destroy');
                                    (0, _utility.$)(objectSlider).flickity(settings);
                                }
                            } else if ($current !== point() && elCount <= carouselColumnsResize && (0, _utility.$)(objectSlider).flickity(settings)) {
                                (0, _utility.$)(objectSlider).flickity('destroy');
                                $current = point();
                            }
                        });
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
            (0, _utility.$)('.cnvs-block-posts-layout-large-type-1').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-slider__items');
                        var $current;
                        var point = function point() {
                            var points = [340, 370, 480, 565, 640, 720, 1020, 1200, 1440, 1660, 1920];
                            var current = 0;
                            for (var i in points) {
                                if (window.innerWidth >= points[i]) {
                                    current = points[i];
                                }
                            }
                            return current;
                        };
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        var settings = {
                            wrapAround: wrapAround ? true : false,
                            contain: false,
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            pageDots: pageDots ? true : false,
                            rightToLeft: rtl,
                            resize: true,
                            selectedAttraction: 0.006,
                            friction: 0.14
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-slider__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-slider__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-slider__cell').length;
                        if (elCount >= 2) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $current = point();
                        (0, _utility.$)(window).resize(function () {
                            if ($current !== point() && elCount >= 2) {
                                (0, _utility.$)(objectSlider).flickity(settings);
                                $current = point();
                                if ((0, _utility.$)(objectSlider).flickity(settings)) {
                                    (0, _utility.$)(objectSlider).flickity('destroy');
                                    (0, _utility.$)(objectSlider).flickity(settings);
                                }
                            } else if ($current !== point() && elCount <= 2 && (0, _utility.$)(objectSlider).flickity(settings)) {
                                (0, _utility.$)(objectSlider).flickity('destroy');
                                $current = point();
                            }
                        });
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
            (0, _utility.$)('.cnvs-block-posts-layout-large-type-2').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.cs-slider__items');
                        var $current;
                        var point = function point() {
                            var points = [340, 370, 480, 565, 640, 720, 1020, 1200, 1440, 1660, 1920];
                            var current = 0;
                            for (var i in points) {
                                if (window.innerWidth >= points[i]) {
                                    current = points[i];
                                }
                            }
                            return current;
                        };
                        var carouselColumns = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            pageDots = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('pagedots'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound'),
                            groupCells = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('groupcells');
                        var settings = {
                            wrapAround: wrapAround ? true : false,
                            groupCells: groupCells ? true : false,
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            pageDots: pageDots ? true : false,
                            rightToLeft: rtl,
                            resize: true,
                            selectedAttraction: 0.006,
                            friction: 0.14
                        };
                        if (settings.groupCells) {
                            settings.groupCells = carouselColumns;
                            (0, _utility.$)(objectSlider).addClass('cs-groupcells-active');
                        }
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.cs-slider__arrow-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.cs-slider__arrow-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.cs-slider__cell').length;
                        if (elCount >= carouselColumns + 1) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $current = point();
                        (0, _utility.$)(window).resize(function () {
                            var carouselColumnsResize = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                            if ($current !== point() && elCount >= carouselColumnsResize + 1) {
                                if (settings.groupCells) {
                                    settings.groupCells = carouselColumnsResize;
                                }
                                (0, _utility.$)(objectSlider).flickity(settings);
                                $current = point();
                                if ((0, _utility.$)(objectSlider).flickity(settings)) {
                                    (0, _utility.$)(objectSlider).flickity('destroy');
                                    if (settings.groupCells) {
                                        settings.groupCells = carouselColumnsResize;
                                    }
                                    (0, _utility.$)(objectSlider).flickity(settings);
                                }
                            } else if ($current !== point() && elCount <= carouselColumnsResize && (0, _utility.$)(objectSlider).flickity(settings)) {
                                (0, _utility.$)(objectSlider).flickity('destroy');
                                $current = point();
                            }
                        });
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
        }

        function initIstagramWidgetCarousel() {
            (0, _utility.$)('.pk-instagram-template-slider .pk-slider-instagram-items').imagesLoaded(function (instance) {
                var requestId;
                var rtl = (0, _utility.$)('body').hasClass('rtl') ? true : false;
                (0, _utility.$)(instance.elements).each(function (index, el) {
                    var mainTicker = new Flickity(el, {
                        freeScroll: true,
                        accessibility: true,
                        resize: true,
                        wrapAround: true,
                        prevNextButtons: false,
                        pageDots: false,
                        percentPosition: true,
                        setGallerySize: true,
                        adaptiveHeight: true,
                        rightToLeft: rtl,
                        on: {
                            ready: function ready() {
                                (0, _utility.$)(el).addClass('is-animate');
                            }
                        }
                    });
                    mainTicker.initAnimation = false;
                    mainTicker.x = 0;

                    function flickity_play() {
                        mainTicker.x = mainTicker.x - 0.5;
                        mainTicker.settle(mainTicker.x);
                        requestId = window.requestAnimationFrame(flickity_play);
                    }

                    function flickity_pause() {
                        if (requestId) {
                            window.cancelAnimationFrame(requestId);
                            requestId = undefined;
                        }
                    }

                    function flickity_init() {
                        var isInView = (0, _utility.$)(el).isInViewport();
                        if (isInView) {
                            if (!mainTicker.initAnimation) {
                                flickity_play();
                                mainTicker.initAnimation = true;
                            }
                        } else {
                            flickity_pause();
                            mainTicker.initAnimation = false;
                        }
                    }

                    (0, _utility.$)(window).on('load scroll resize scrollstop', function () {
                        flickity_init();
                    });
                    (0, _utility.$)(document).ready(function () {
                        flickity_init();
                    });
                    (0, _utility.$)(el).on('mouseenter focusin', function (e) {
                        flickity_pause();
                    });
                    (0, _utility.$)(el).on('mouseleave', function (e) {
                        flickity_play();
                    });
                });
            });
        }

        function initIstagramFooterCarousel() {
            (0, _utility.$)('.pk-instagram-carousel ').each(function (indexBlock, objectBlock) {
                (0, _utility.$)(objectBlock).imagesLoaded(function (instance) {
                    var rtl = _utility.$body.hasClass('rtl') ? true : false;
                    (0, _utility.$)(instance.elements).each(function (index, el) {
                        var objectSlider = (0, _utility.$)(el).find('.pk-alt-instagram-items');
                        var carouselColumns = parseInt(window.getComputedStyle((0, _utility.$)(objectBlock)[0]).getPropertyValue('--cs-carousel-columns'));
                        var autoPlay = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('autoplay'),
                            wrapAround = (0, _utility.$)(objectBlock).find('.cs-flickity-init').data('wraparound');
                        var settings = {
                            cellAlign: rtl ? 'right' : 'left',
                            wrapAround: wrapAround ? true : false,
                            autoPlay: autoPlay ? 5000 : false,
                            prevNextButtons: false,
                            pageDots: false,
                            rightToLeft: rtl,
                            resize: true
                        };
                        (0, _utility.$)(objectSlider).flickity(settings);
                        var flkty = (0, _utility.$)(objectSlider).data('flickity');
                        var $prev = (0, _utility.$)(objectBlock).find('.carousel-previous');
                        var $next = (0, _utility.$)(objectBlock).find('.carousel-next');
                        var elCount = (0, _utility.$)(objectSlider).find('.pk-alt-instagram-item').length;
                        if (elCount >= carouselColumns + 1) {
                            (0, _utility.$)(objectSlider).flickity(settings);
                        } else {
                            (0, _utility.$)(objectSlider).flickity('destroy');
                        }
                        $prev.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'next' : 'previous';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        $next.on('click', function (event) {
                            event.preventDefault();
                            var type = rtl ? 'previous' : 'next';
                            (0, _utility.$)(objectSlider).flickity(type);
                        });
                        if (!settings.wrapAround) {
                            (0, _utility.$)(objectSlider).on('select.flickity', function () {
                                if (!flkty.slides[flkty.selectedIndex - 1]) {
                                    $prev.addClass('disabled');
                                    $next.removeClass('disabled');
                                } else if (!flkty.slides[flkty.selectedIndex + 1]) {
                                    $next.addClass('disabled');
                                    $prev.removeClass('disabled');
                                } else {
                                    $prev.removeClass('disabled');
                                    $next.removeClass('disabled');
                                }
                            });
                        }
                    });
                });
            });
        }

        initCarousel();
        initIstagramWidgetCarousel();
        initIstagramFooterCarousel();
        (0, _utility.$)(document).ready(function () {
            (0, _utility.$)(document.body).on('post-load', function () {
                initCarousel();
            });
            _utility.csco.addAction('canvas.components.serverSideRender.onChange', 'init-carousel', function (props) {
                if ('canvas/posts' === props.block) {
                    initCarousel();
                }
            });
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        (0, _utility.$)(document).on('click', '.cs-entry__comments-show button', function (e) {
            (0, _utility.$)('.cs-entry__comments-collapse').show();
            (0, _utility.$)('.cs-entry__comments-show').remove();
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        var ticking = false;
        var update = function update() {
            (0, _utility.$)('.cs-site-primary').each(function () {
                var content = (0, _utility.$)(this).find('.entry-content');
                var sidebar = (0, _utility.$)(this).find('.cs-entry__metabar-inner');
                var offsetTop = 20;
                var offsetBottom = -20;
                var elements = [];
                elements.push('> .alignfull');
                elements.push('> .alignwide');
                var layouts = (0, _utility.$)(content).find(elements.join(','));
                if (0 === sidebar.length) {
                    return;
                }
                if (0 === layouts.length) {
                    return;
                }
                var disabled = false;
                var sidebarTop = (0, _utility.$)(sidebar).offset().top;
                var sidebarHeight = (0, _utility.$)(sidebar).outerHeight(true);
                for (var i = 0; i < (0, _utility.$)(layouts).length; ++i) {
                    if ('none' === (0, _utility.$)(layouts[i]).css('transform')) {
                        continue;
                    }
                    var layoutTop = (0, _utility.$)(layouts[i]).offset().top;
                    var layoutHeight = (0, _utility.$)(layouts[i]).outerHeight(true);
                    var pointTop = layoutTop - offsetTop;
                    var pointBottom = layoutTop + layoutHeight + offsetBottom;
                    if (sidebarTop + sidebarHeight >= pointTop && sidebarTop <= pointBottom) {
                        disabled = true;
                    }
                }
                if (disabled) {
                    (0, _utility.$)(sidebar).css('opacity', '0');
                } else {
                    (0, _utility.$)(sidebar).css('opacity', '1');
                }
            });
            ticking = false;
        };
        var requestTick = function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };
        var onProcess = function onProcess() {
            requestTick();
        };
        (0, _utility.$)(window).on('scroll', onProcess);
        (0, _utility.$)(window).on('resize', onProcess);
        (0, _utility.$)(window).on('image-load', onProcess);
        (0, _utility.$)(window).on('post-load', onProcess);
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        (0, _utility.$)(".cs-header__nav-inner > .menu-item").hover(function () {
            (0, _utility.$)(this).addClass('active').siblings('.menu-item').addClass('disable');
        }, function () {
            (0, _utility.$)(this).removeClass('active').siblings('.menu-item').removeClass('disable');
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        (0, _utility.$)('.cs-layout-large__col').hover(function () {
            (0, _utility.$)(this).addClass('active').siblings().removeClass('active').closest('.cs-layout-large__wrap').find('.cs-overlay-background').removeClass('active').eq((0, _utility.$)(this).index()).addClass('active');
        }, function () {
            (0, _utility.$)(this).closest('.cs-layout-large__wrap').find('.cs-overlay-background').removeClass('active').eq((0, _utility.$)(this).index()).addClass('active');
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    if ('undefined' === typeof window.load_more_query) {
        window.load_more_query = [];
    }

    function csco_ajax_get_posts(object) {
        var container = (0, _utility.$)(object).closest('.cs-posts-area');
        var settings = (0, _utility.$)(object).data('settings');
        var page = (0, _utility.$)(object).data('page');
        (0, _utility.$)(object).data('loading', true);
        (0, _utility.$)(object).text(settings.translation.loading);
        var data = {
            action: 'csco_ajax_load_more',
            page: page,
            posts_per_page: settings.posts_per_page,
            query_data: settings.query_data,
            attributes: settings.attributes,
            options: settings.options,
            _ajax_nonce: settings.nonce
        };
        var csco_pagination_url;
        if ('ajax_restapi' === settings.type) {
            csco_pagination_url = settings.rest_url;
        } else {
            csco_pagination_url = settings.url;
        }
        _utility.$.post(csco_pagination_url, data, function (res) {
            if (res.success) {
                var data = (0, _utility.$)(res.data.content);
                if (data.length) {
                    var cscoAppendEnd = function cscoAppendEnd() {
                        (0, _utility.$)(document.body).trigger('post-load');
                        if ((0, _utility.$)('#fb-root').length) {
                            FB.XFBML.parse();
                        }
                        (0, _utility.$)(object).text(settings.translation.load_more);
                        page = page + 1;
                        (0, _utility.$)(object).data('page', page);
                        (0, _utility.$)(object).data('loading', false);
                    };
                    if ((0, _utility.$)(container).find('.cs-posts-area__outer').hasClass('cs-posts-area__type-mixed')) {
                        for (var key in data) {
                            if (key % 1 !== 0) {
                                continue;
                            }
                            var last_section = (0, _utility.$)(container).find('.cs-posts-area__outer .cs-posts-area__main ').last();
                            var last_posts = (0, _utility.$)(last_section).find('article').length;
                            var last_class = (0, _utility.$)(last_section).attr('class');
                            var new_section = false;
                            var point_end = window.getComputedStyle((0, _utility.$)(last_section)[0]).getPropertyValue('--cs-posts-area-grid-columns-const') * 2;
                            if ((0, _utility.$)(last_section).hasClass('cs-posts-area__alt')) {
                                new_section = 'cs-posts-area__grid';
                            }
                            if ((0, _utility.$)(last_section).hasClass('cs-posts-area__grid') && last_posts === point_end) {
                                new_section = 'cs-posts-area__alt';
                            }
                            if (new_section) {
                                (0, _utility.$)('<div></div>').appendTo((0, _utility.$)(container).find('.cs-posts-area__outer')).addClass(last_class).removeClass('cs-posts-area__alt cs-posts-area__grid').addClass(new_section);
                            }
                            (0, _utility.$)(container).find('.cs-posts-area__outer .cs-posts-area__main').last().append(data[key]);
                        }
                        cscoAppendEnd();
                    } else {
                        (0, _utility.$)(container).find('.cs-posts-area__main').append(data);
                        cscoAppendEnd();
                    }
                }
                if (res.data.posts_end || !data.length) {
                    (0, _utility.$)(object).remove();
                }
            } else {
            }
        }).fail(function (xhr, textStatus, e) {
        });
    }

    function csco_load_more_init(infinite) {
        (0, _utility.$)('.cs-posts-area').each(function () {
            if ((0, _utility.$)(this).data('init')) {
                return false;
            }
            var csco_ajax_settings;
            if (typeof csco_ajax_pagination !== 'undefined') {
                csco_ajax_settings = csco_ajax_pagination;
            }
            var archive_data = (0, _utility.$)(this).data('posts-area');
            if (archive_data) {
                csco_ajax_settings = JSON.parse(window.atob(archive_data));
            }
            if (csco_ajax_settings) {
                if (!infinite && csco_ajax_settings.infinite_load) {
                    return false;
                }
                (0, _utility.$)(this).append('<div class="cs-posts-area__pagination"><button class="cs-load-more">' + csco_ajax_settings.translation.load_more + '</button></div>');
                (0, _utility.$)(this).find('.cs-load-more').data('settings', csco_ajax_settings);
                (0, _utility.$)(this).find('.cs-load-more').data('page', 2);
                (0, _utility.$)(this).find('.cs-load-more').data('loading', false);
                (0, _utility.$)(this).find('.cs-load-more').data('scrollHandling', {
                    allow: _utility.$.parseJSON(csco_ajax_settings.infinite_load),
                    delay: 400
                });
            }
            (0, _utility.$)(this).data('init', true);
        });
    }

    csco_load_more_init(true);
    _utility.csco.addAction('canvas.components.serverSideRender.onChange', 'posts-init-loadmore', function (props) {
        if ('canvas/posts' === props.block) {
            csco_load_more_init(false);
        }
    });
    (0, _utility.$)(window).scroll(function () {
        (0, _utility.$)('.cs-posts-area .cs-load-more').each(function () {
            var loading = (0, _utility.$)(this).data('loading');
            var scrollHandling = (0, _utility.$)(this).data('scrollHandling');
            if ('undefined' === typeof scrollHandling) {
                return;
            }
            if ((0, _utility.$)(this).length && !loading && scrollHandling.allow) {
                scrollHandling.allow = false;
                (0, _utility.$)(this).data('scrollHandling', scrollHandling);
                var object = this;
                setTimeout(function () {
                    var scrollHandling = (0, _utility.$)(object).data('scrollHandling');
                    if ('undefined' === typeof scrollHandling) {
                        return;
                    }
                    scrollHandling.allow = true;
                    (0, _utility.$)(object).data('scrollHandling', scrollHandling);
                }, scrollHandling.delay);
                var offset = (0, _utility.$)(this).offset().top - (0, _utility.$)(window).scrollTop();
                if (4000 > offset) {
                    csco_ajax_get_posts(this);
                }
            }
        });
    });
    (0, _utility.$)('body').on('click', '.cs-load-more', function () {
        var loading = (0, _utility.$)(this).data('loading');
        if (!loading) {
            csco_ajax_get_posts(this);
        }
    });
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);

    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }

    if (typeof csco_ajax_nextpost !== 'undefined') {
        var objNextparent = (0, _utility.$)('.cs-site-primary > .cs-site-content'),
            objNextsect = '.cs-nextpost-section', objNextpost = null, currentNTitle = document.title,
            currentNLink = window.location.href, loadingNextpost = false, scrollNextpost = {
                allow: true, reallow: function reallow() {
                    scrollNextpost.allow = true;
                }, delay: 400
            };
        if (csco_ajax_nextpost.next_post) {
            (0, _utility.$)(objNextparent).after('<div class="cs-nextpost-inner"></div>');
            objNextpost = (0, _utility.$)('.cs-nextpost-inner');
        }
    }

    function csco_ajax_get_nextpost() {
        loadingNextpost = true;
        var data = {
            action: 'csco_ajax_load_nextpost',
            not_in: csco_ajax_nextpost.not_in,
            current_user: csco_ajax_nextpost.current_user,
            nonce: csco_ajax_nextpost.nonce,
            next_post: csco_ajax_nextpost.next_post
        };
        var csco_ajax_nextpost_url;
        if ('ajax_restapi' === csco_ajax_nextpost.type) {
            csco_ajax_nextpost_url = csco_ajax_nextpost.rest_url;
        } else {
            csco_ajax_nextpost_url = csco_ajax_nextpost.url;
        }
        _utility.$.post(csco_ajax_nextpost_url, data, function (res) {
            csco_ajax_nextpost.next_post = false;
            if (res.success) {
                var data = (0, _utility.$)(res.data.content);
                if (data.length) {
                    loadingNextpost = false;
                    csco_ajax_nextpost.not_in = res.data.not_in;
                    csco_ajax_nextpost.next_post = res.data.next_post;
                    (0, _utility.$)(objNextpost).siblings('.cs-nextpost-loading').remove();
                    (0, _utility.$)(objNextpost).append(data);
                    if ((0, _utility.$)('#fb-root').length) {
                        FB.XFBML.parse();
                    }
                    (0, _utility.$)(document.body).trigger('post-load');
                }
            } else {
            }
        }).fail(function (xhr, textStatus, e) {
        });
    }

    if (typeof csco_ajax_nextpost !== 'undefined') {
        (0, _utility.$)(window).scroll(function () {
            var scrollTop = (0, _utility.$)(window).scrollTop();
            if (csco_ajax_nextpost.next_post) {
                if (objNextpost.length && !loadingNextpost && scrollNextpost.allow) {
                    scrollNextpost.allow = false;
                    setTimeout(scrollNextpost.reallow, scrollNextpost.delay);
                    var offset = objNextpost.offset().top + objNextpost.innerHeight() - scrollTop;
                    if (4000 > offset) {
                        (0, _utility.$)(objNextpost).after('<div class="cs-nextpost-loading"></div>');
                        csco_ajax_get_nextpost();
                    }
                }
            }
            var objFirst = (0, _utility.$)(objNextsect).first();
            if (objFirst.length) {
                var firstTop = (0, _utility.$)(objFirst).offset().top;
                if (scrollTop < firstTop && window.location.href !== currentNLink) {
                    document.title = currentNTitle;
                    window.history.pushState(null, currentNTitle, currentNLink);
                }
            }
            (0, _utility.$)(objNextsect).each(function (index, elem) {
                var elemTop = (0, _utility.$)(elem).offset().top;
                var elemHeight = (0, _utility.$)(elem).innerHeight();
                if (scrollTop > elemTop && scrollTop < elemTop + elemHeight) {
                    if (window.location.href !== (0, _utility.$)(elem).data('url')) {
                        document.title = (0, _utility.$)(elem).data('title');
                        window.history.pushState(null, (0, _utility.$)(elem).data('title'), (0, _utility.$)(elem).data('url'));
                        if (typeof gtag === 'function' && _typeof(window.gaData) === 'object') {
                            var trackingId = Object.keys(window.gaData)[0];
                            if (trackingId) {
                                gtag('config', trackingId, {
                                    'page_title': (0, _utility.$)(elem).data('title'),
                                    'page_location': (0, _utility.$)(elem).data('url')
                                });
                                gtag('event', 'page_view', {'send_to': trackingId});
                            }
                        }
                    }
                }
            });
        });
    }
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        function cscoLoadMenuPosts(menuItem) {
            var dataTerm = menuItem.children('a').data('term'), dataPosts = menuItem.children('a').data('posts'),
                dataNumberposts = menuItem.children('a').data('numberposts'), menuContainer, postsContainer;
            if (menuItem.hasClass('cs-mega-menu-term')) {
                menuContainer = menuItem;
                postsContainer = menuContainer.find('.cs-mm__posts');
            }
            if (menuItem.hasClass('cs-mega-menu-posts')) {
                menuContainer = menuItem;
                postsContainer = menuContainer.find('.cs-mm__posts');
            }
            if (menuItem.hasClass('cs-mega-menu-child-term')) {
                menuContainer = menuItem.closest('.sub-menu');
                postsContainer = menuContainer.find('.cs-mm__posts[data-term="' + dataTerm + '"]');
            }
            if (!menuContainer || typeof menuContainer === 'undefined') {
                return false;
            }
            if (!postsContainer || typeof postsContainer === 'undefined') {
                return false;
            }
            menuContainer.find('.menu-item, .cs-mm__posts').removeClass('cs-active-item');
            menuItem.addClass('cs-active-item');
            if (postsContainer) {
                postsContainer.addClass('cs-active-item');
            }
            if (menuItem.hasClass('cs-mm-loading') || menuItem.hasClass('loaded')) {
                return false;
            }
            var data = {'term': dataTerm, 'posts': dataPosts, 'per_page': dataNumberposts};
            if ('undefined' === typeof csco_mega_menu) {
                return;
            }
            _utility.$.ajax({
                url: csco_mega_menu.rest_url,
                type: 'GET',
                data: data,
                global: false,
                async: true,
                beforeSend: function beforeSend() {
                    menuItem.addClass('cs-mm-loading');
                    postsContainer.addClass('cs-mm-loading');
                },
                success: function success(res) {
                    if (res.status && 'success' === res.status) {
                        menuItem.addClass('loaded');
                        postsContainer.addClass('loaded');
                        if (res.content && res.content.length) {
                            (0, _utility.$)(res.content).imagesLoaded(function () {
                                postsContainer.html(res.content);
                            });
                        }
                    }
                },
                complete: function complete() {
                    menuItem.removeClass('cs-mm-loading');
                    postsContainer.removeClass('cs-mm-loading');
                }
            });
        }

        function cscoGetFirstTab(container) {
            var firstTab = false;
            container.find('.cs-mega-menu-child').each(function (index, el) {
                if ((0, _utility.$)(el).hasClass('cs-mega-menu-child')) {
                    firstTab = (0, _utility.$)(el);
                    return false;
                }
            });
            return firstTab;
        }

        (0, _utility.$)(document).ready(function () {
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-posts').on('mouseenter', function () {
                cscoLoadMenuPosts((0, _utility.$)(this));
            });
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-term').on('mouseenter', function () {
                cscoLoadMenuPosts((0, _utility.$)(this));
            });
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-child').on('mouseenter', function () {
                cscoLoadMenuPosts((0, _utility.$)(this));
            });
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-terms').on('mouseenter', function () {
                var tab = cscoGetFirstTab((0, _utility.$)(this));
                if (tab) {
                    cscoLoadMenuPosts(tab);
                }
            });
        });
        (0, _utility.$)(document, '.cs-header__nav').ready(function () {
            var tab = false;
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-terms').each(function (index, el) {
                tab = cscoGetFirstTab((0, _utility.$)(this));
                if (tab) {
                    cscoLoadMenuPosts(tab);
                }
            });
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-posts').each(function (index, el) {
                cscoLoadMenuPosts((0, _utility.$)(this));
            });
            (0, _utility.$)('.cs-header__nav .menu-item.cs-mega-menu-term').each(function (index, el) {
                cscoLoadMenuPosts((0, _utility.$)(this));
            });
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    var cscoNavigation = {};
    (function () {
        var $this;
        cscoNavigation = {
            init: function init(e) {
                if ((0, _utility.$)('body').hasClass('wp-admin')) {
                    return;
                }
                $this = cscoNavigation;
                $this.events(e);
            }, events: function events(e) {
                window.addEventListener('load', function (e) {
                    $this.smartLevels(e);
                    $this.adaptTablet(e);
                    $this.stickyScroll(e);
                });
                window.addEventListener('resize', function (e) {
                    $this.smartLevels(e);
                    $this.adaptTablet(e);
                    $this.stickyScroll(e);
                });
            }, smartLevels: function smartLevels(e) {
                var windowWidth = _utility.$window.width();
                (0, _utility.$)('.cs-header__nav-inner li').removeClass('cs-sm__level');
                (0, _utility.$)('.cs-header__nav-inner li').removeClass('cs-sm-position-left cs-sm-position-right');
                (0, _utility.$)('.cs-header__nav-inner li .sub-menu').removeClass('cs-mm__position-init');
                (0, _utility.$)('.cs-header__nav-inner > li.menu-item').not('.cs-mm').each(function (index, parent) {
                    var position = 'cs-sm-position-right';
                    var objPrevWidth = 0;
                    (0, _utility.$)(parent).find('.sub-menu').each(function (index, el) {
                        (0, _utility.$)(el).parent().next('li').addClass('cs-sm__level');
                        if ((0, _utility.$)(el).parent().hasClass('cs-sm__level')) {
                            (0, _utility.$)(el).parent().removeClass('cs-mm-level');
                            position = 'cs-sm-position-right';
                            objPrevWidth = 0;
                        }
                        var offset = (0, _utility.$)(el).offset();
                        var objOffset = offset.left;
                        if ('cs-sm-position-right' === position && (0, _utility.$)(el).outerWidth() + objOffset > windowWidth) {
                            position = 'cs-sm-position-left';
                        }
                        if ('cs-sm-position-left' === position && objOffset - ((0, _utility.$)(el).outerWidth() + objPrevWidth) < 0) {
                            position = 'cs-sm-position-right';
                        }
                        objPrevWidth = (0, _utility.$)(el).outerWidth();
                        (0, _utility.$)(el).addClass('cs-sm-position-init').parent().addClass(position);
                    });
                });
            }, adaptTablet: function adaptTablet(e) {
                (0, _utility.$)(document).on('touchstart', function (e) {
                    if (!(0, _utility.$)(e.target).closest('.cs-header__nav-inner').length) {
                        (0, _utility.$)('.cs-header__nav-inner .menu-item-has-children').removeClass('submenu-visible');
                    } else {
                        (0, _utility.$)(e.target).parents('.menu-item').siblings().find('.menu-item').removeClass('submenu-visible');
                        (0, _utility.$)(e.target).parents('.menu-item').siblings().closest('.menu-item').removeClass('submenu-visible');
                    }
                });
                (0, _utility.$)('.cs-header__nav-inner .menu-item-has-children').each(function (e) {
                    (0, _utility.$)(this).removeClass('submenu-visible');
                    (0, _utility.$)(this).find('> a > .expanded').remove();
                    if ('ontouchstart' in document.documentElement) {
                        (0, _utility.$)(this).find('> a').append('<span class="expanded"></span>');
                    }
                    (0, _utility.$)(this).addClass('ontouchstart' in document.documentElement ? 'touch-device' : '');
                    (0, _utility.$)('> a .expanded', this).on('touchstart', function (e) {
                        e.preventDefault();
                        (0, _utility.$)(this).closest('.menu-item-has-children').toggleClass('submenu-visible');
                    });
                    if ('#' === (0, _utility.$)('> a', this).attr('href')) {
                        (0, _utility.$)('> a', this).on('touchstart', function (e) {
                            e.preventDefault();
                            if (!(0, _utility.$)(e.target).hasClass('expanded')) {
                                (0, _utility.$)(this).closest('.menu-item-has-children').toggleClass('submenu-visible');
                            }
                        });
                    }
                });
            }, stickyScroll: function stickyScroll(e) {
                var headerLargeHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-initial-height')),
                    headerCompactHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height'));
                var headerStick = (0, _utility.$)('.cs-navbar-sticky-enabled .cs-header'),
                    headerBefore = (0, _utility.$)('.cs-header-before'),
                    headerStretch = (0, _utility.$)('.cs-header-stretch'),
                    headerStretchInaccuracy = headerStretch.length > 0 ? 10 : 0,
                    headerStickHeight = (0, _utility.$)('.cs-navbar-sticky-enabled .cs-header-stretch'),
                    wpAdminBar = (0, _utility.$)('#wpadminbar'), headerSearch = (0, _utility.$)('.cs-search'),
                    offCanvas = (0, _utility.$)('.cs-offcanvas');
                var headerDelta = headerStickHeight.length > 0 ? headerLargeHeight - headerCompactHeight : 0,
                    wpAdminBarHeight = wpAdminBar.length > 0 ? wpAdminBar.outerHeight() : 0,
                    smartStart = headerBefore.length > 0 ? headerBefore.offset().top : headerStick.length > 0 ? headerStick.offset().top + wpAdminBarHeight : wpAdminBarHeight;
                var scrollPoint = 200, scrollPrev = 200, scrollUpAmount = 0, windowWidth = _utility.$window.width();
                (0, _utility.$)(window).scroll(function () {
                    var scrolled = (0, _utility.$)(window).scrollTop(),
                        headerStickPosition = headerStick.length > 0 ? headerStick.offset().top : 0;
                    if (scrolled > smartStart + headerDelta + scrollPoint + headerStretchInaccuracy && scrolled > scrollPrev) {
                        headerStick.addClass('cs-scroll-active');
                        headerSearch.slideUp();
                        (0, _utility.$)(document).trigger('sticky-nav-hide');
                    } else {
                        if (scrollUpAmount >= scrollPoint || scrolled === 0) {
                            headerStick.removeClass('cs-scroll-active');
                            (0, _utility.$)(document).trigger('sticky-nav-visible');
                        }
                    }
                    if (headerStickHeight.length > 0) {
                        if (headerStickPosition <= scrolled + wpAdminBarHeight && scrolled > smartStart + headerDelta) {
                            headerStick.addClass('cs-scroll-sticky');
                            (0, _utility.$)(document).trigger('stretch-nav-to-small');
                        } else {
                            if (scrolled <= smartStart) {
                                headerStick.removeClass('cs-scroll-sticky');
                                (0, _utility.$)(document).trigger('stretch-nav-to-big');
                            }
                        }
                    } else {
                        if (headerStickPosition <= scrolled + wpAdminBarHeight && scrolled + wpAdminBarHeight > smartStart) {
                            headerStick.addClass('cs-scroll-sticky');
                            if (headerStretch.length > 0) {
                                (0, _utility.$)(document).trigger('stretch-nav-to-small');
                            }
                        } else {
                            headerStick.removeClass('cs-scroll-sticky');
                            if (headerStretch.length > 0) {
                                (0, _utility.$)(document).trigger('stretch-nav-to-big');
                            }
                        }
                    }
                    if (scrolled < scrollPrev) {
                        scrollUpAmount += scrollPrev - scrolled;
                    } else {
                        scrollUpAmount = 0;
                    }
                    if (wpAdminBar.length > 0 && _utility.wndW <= 600 && scrolled >= wpAdminBarHeight) {
                        offCanvas.addClass('cs-offcanvas_scrolled');
                    } else {
                        offCanvas.removeClass('cs-offcanvas_scrolled');
                    }
                    scrollPrev = scrolled;
                });
            }
        };
    })();
    cscoNavigation.init();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        (0, _utility.$)('.cs-header__offcanvas-toggle, .cs-site-overlay, .cs-offcanvas__toggle').on('click', function (e) {
            e.preventDefault();
            if (!_utility.$body.hasClass('cs-offcanvas-active')) {
                _utility.$body.addClass('cs-offcanvas-transition');
            } else {
                setTimeout(function () {
                    _utility.$body.removeClass('cs-offcanvas-transition');
                }, 400);
            }
            _utility.$body.toggleClass('cs-offcanvas-active');
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        function initResponsiveEmbeds() {
            var proportion, parentWidth;
            (0, _utility.$)('.entry-content').find('iframe').each(function (index, iframe) {
                if ((0, _utility.$)(iframe).closest('div').is('[data-video-start], [data-video-end]')) {
                    return;
                }
                if (iframe.width && iframe.height) {
                    proportion = parseFloat(iframe.width) / parseFloat(iframe.height);
                    parentWidth = parseFloat(window.getComputedStyle(iframe.parentElement, null).width.replace('px', ''));
                    iframe.style.maxWidth = '100%';
                    iframe.style.maxHeight = Math.round(parentWidth / proportion).toString() + 'px';
                }
            });
        }

        _utility.$doc.ready(function () {
            initResponsiveEmbeds();
        });
        _utility.$body.on('post-load', function () {
            initResponsiveEmbeds();
        });
        _utility.$window.on('resize', function () {
            initResponsiveEmbeds();
        });
        initResponsiveEmbeds();
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    var cscoDarkMode = {};
    (function () {
        var $this;
        cscoDarkMode = {
            init: function init(e) {
                $this = cscoDarkMode;
                $this.events(e);
            }, events: function events(e) {
                if ((0, _utility.$)('body').hasClass('wp-admin')) {
                    return;
                }
                window.addEventListener('load', function (e) {
                    $this.initMode(e);
                });
                window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
                    $this.initMode(e);
                });
                (0, _utility.$)(document).on('click', '.cs-site-scheme-toggle', function (e) {
                    $this.changeMode(e);
                });
            }, detectColorScheme: function detectColorScheme(color) {
                var level = 190;
                var alpha = 1;
                var rgba = [255, 255, 255];
                var color_rgba = false;
                color = color.trim();
                if ('#' === color[0]) {
                    color = color.replace('#', '').trim();
                    if (3 === color.length) {
                        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
                    }
                    rgba[0] = parseInt(color.substr(0, 2), 16);
                    rgba[1] = parseInt(color.substr(2, 2), 16);
                    rgba[2] = parseInt(color.substr(4, 2), 16);
                } else if (color_rgba = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)) {
                    rgba[0] = parseInt(color_rgba[1]);
                    rgba[1] = parseInt(color_rgba[2]);
                    rgba[2] = parseInt(color_rgba[3]);
                    if (color_rgba[4] !== undefined) {
                        alpha = parseFloat(color_rgba[4]);
                    }
                }
                rgba.forEach(function myFunction(channel, key, stack) {
                    stack[key] = String(channel + Math.ceil((255 - channel) * (1 - alpha))).padStart(2, '0');
                });
                var scheme = 'default';
                var brightness = (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;
                if (rgba[0] === rgba[1] && rgba[1] === rgba[2]) {
                    if (brightness < level) {
                        scheme = 'dark';
                    }
                } else {
                    if (brightness < level) {
                        scheme = 'inverse';
                    }
                }
                return scheme;
            }, setIndividualScheme: function setIndividualScheme() {
                var list = {
                    'body': '--cs-color-site-background',
                    '.cs-topbar': '--cs-color-topbar-background',
                    '.cs-header': '--cs-color-header-background',
                    '.cs-header__nav-inner .sub-menu': '--cs-color-submenu-background',
                    '.cs-header__multi-column-container': '--cs-color-submenu-background',
                    '.cs-header__widgets': '--cs-color-submenu-background',
                    '.cs-offcanvas__header': '--cs-color-header-background',
                    '.cs-search': '--cs-color-search-background',
                    '.cs-footer': '--cs-color-footer-background'
                };
                for (var key in list) {
                    if ((0, _utility.$)(key).length <= 0) {
                        continue;
                    }
                    (0, _utility.$)(key).each(function (index, element) {
                        var color = window.getComputedStyle((0, _utility.$)(element)[0]).getPropertyValue(list[key]);
                        var scheme = $this.detectColorScheme(color);
                        (0, _utility.$)(element).attr('data-scheme', scheme);
                    });
                }
            }, initMode: function initMode(e) {
                var systemSchema = 'default';
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    systemSchema = 'dark';
                }
                (0, _utility.csSetCookie)('_color_system_schema', systemSchema, {expires: 2592000});
                var siteScheme = 'default';
                switch (csLocalize.siteSchemeMode) {
                    case'dark':
                        siteScheme = 'dark';
                        break;
                    case'light':
                        siteScheme = 'default';
                        break;
                    case'system':
                        siteScheme = systemSchema;
                        break;
                }
                if (csLocalize.siteSchemeToogle) {
                    if ('default' === (0, _utility.csGetCookie)('_color_schema')) {
                        siteScheme = 'default';
                    }
                    if ('dark' === (0, _utility.csGetCookie)('_color_schema')) {
                        siteScheme = 'dark';
                    }
                }
                if (siteScheme !== _utility.$body.attr('data-site-scheme')) {
                    $this.changeScheme(siteScheme, false);
                }
            }, changeMode: function changeMode(e) {
                if ('dark' === _utility.$body.attr('data-site-scheme')) {
                    $this.changeScheme('default', true);
                } else {
                    $this.changeScheme('dark', true);
                }
            }, changeScheme: function changeScheme(scheme, cookie) {
                _utility.$body.addClass('cs-scheme-toggled');
                _utility.$body.attr('data-site-scheme', scheme);
                $this.setIndividualScheme();
                if (cookie) {
                    (0, _utility.csSetCookie)('_color_schema', scheme, {expires: 2592000});
                    (0, _utility.csSetCookie)('_color_system_schema', null, {expires: 2592000});
                }
                setTimeout(function () {
                    _utility.$body.removeClass('cs-scheme-toggled');
                }, 100);
            }
        };
    })();
    cscoDarkMode.init();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        var focusSearchTimeout;
        (0, _utility.$)('.cs-header__search-toggle').click(function (e) {
            if (!(0, _utility.$)('.cs-search').is(":visible")) {
                focusSearchTimeout = setTimeout(function () {
                    (0, _utility.$)('.cs-search .cs-search__input').focus();
                }, 300);
            } else {
                clearTimeout(focusSearchTimeout);
            }
            (0, _utility.$)('.cs-search').stop().slideToggle();
            e.preventDefault();
        });
        (0, _utility.$)('.cs-search__close').click(function (e) {
            (0, _utility.$)('.cs-search').slideUp();
            e.preventDefault();
            clearTimeout(focusSearchTimeout);
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        var stickyElementsSmart = [], stickyElements = [];
        stickyElementsSmart.push('.cs-navbar-smart-enabled .cs-entry__metabar-inner');
        stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled.cs-stick-to-top .cs-sidebar__inner');
        stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled.cs-stick-last .cs-sidebar__inner .widget:last-child');
        stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled .cnvs-block-section-sidebar-sticky-top .cnvs-block-section-sidebar-inner');
        stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled .cnvs-block-section-sidebar-sticky-top-last-block .cnvs-block-section-sidebar-inner > :last-child');
        stickyElements.push('.cs-navbar-sticky-enabled .cs-entry__metabar-inner');
        stickyElements.push('.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled.cs-stick-to-top .cs-sidebar__inner');
        stickyElements.push('.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled.cs-stick-last .cs-sidebar__inner .widget:last-child');
        stickyElements.push('.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled .cnvs-block-section-sidebar-sticky-top .cnvs-block-section-sidebar-inner');
        stickyElements.push('.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled .cnvs-block-section-sidebar-sticky-top-last-block .cnvs-block-section-sidebar-inner > :last-child');
        _utility.$doc.ready(function () {
            var headerStick = (0, _utility.$)('.cs-header'), wpAdminBar = (0, _utility.$)('#wpadminbar'),
                headerStickHeight = headerStick.outerHeight(), wpAdminBarHeight = wpAdminBar.outerHeight(),
                headerStretch = (0, _utility.$)('.cs-header-stretch'),
                headerStretchHeight = headerStretch.outerHeight(),
                allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20,
                windowWidth = (0, _utility.$)(window).width();
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-stick-to-bottom .cs-sidebar__inner');
                stickyElements.push('.cs-sticky-sidebar-enabled.cs-stick-to-bottom .cs-sidebar__inner');
                stickyElementsSmart.push('.cnvs-block-section-sidebar-sticky-bottom .cnvs-block-section-sidebar-inner');
                stickyElements.push('.cnvs-block-section-sidebar-sticky-bottom .cnvs-block-section-sidebar-inner');
            }
            stickyElementsSmart = stickyElementsSmart.join(',');
            stickyElements = stickyElements.join(',');
            _utility.$doc.on('sticky-nav-visible', function () {
                headerStickHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height'));
                if (headerStretchHeight) {
                    allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
                } else {
                    allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
                }
                (0, _utility.$)(stickyElementsSmart).css('top', allHeight + 'px');
            });
            _utility.$doc.on('sticky-nav-hide', function () {
                headerStickHeight = 0;
                allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
                (0, _utility.$)(stickyElementsSmart).css('top', allHeight + 'px');
            });
            _utility.$doc.on('stretch-nav-to-small', function () {
                headerStretchHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height'));
                if (headerStretchHeight) {
                    allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
                } else {
                    allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
                }
                if (headerStretch.hasClass("cs-scroll-sticky") && !headerStretch.hasClass("cs-scroll-active")) {
                    (0, _utility.$)(stickyElementsSmart).css('top', allHeight + 'px');
                }
            });
            _utility.$doc.on('stretch-nav-to-big', function () {
                headerStretchHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-initial-height'));
            });
            if (_utility.$body.hasClass('cs-navbar-smart-enabled') && windowWidth >= 1020) {
                if (headerStretchHeight) {
                    allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
                } else {
                    allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
                }
                (0, _utility.$)(stickyElementsSmart).css('top', allHeight + 'px');
            } else if (_utility.$body.hasClass('cs-navbar-sticky-enabled') && windowWidth >= 1020) {
                if (headerStretchHeight) {
                    allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
                } else {
                    allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
                }
                (0, _utility.$)(stickyElements).css('top', allHeight + 'px');
            }
            _utility.$window.resize(function () {
                var windowWidthResize = _utility.$window.width();
                if (windowWidthResize < 1020) {
                    (0, _utility.$)(stickyElements).removeAttr('style');
                    (0, _utility.$)(stickyElementsSmart).removeAttr('style');
                }
            });
        });
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        var initAPI = false;
        var process = false;
        var contex = [];
        var players = [];
        var attrs = [];
        var YTdeferred = _utility.$.Deferred();
        window.onYouTubePlayerAPIReady = function () {
            YTdeferred.resolve(window.YT);
        };

        function embedYoutubeAPI() {
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        function rescaleVideoBackground() {
            (0, _utility.$)('.cs-video-init').each(function () {
                var w = (0, _utility.$)(this).parent().width();
                var h = (0, _utility.$)(this).parent().height();
                var hideControl = 400;
                var id = (0, _utility.$)(this).attr('data-uid');
                if (w / h > 16 / 9) {
                    players[id].setSize(w, w / 16 * 9 + hideControl);
                } else {
                    players[id].setSize(h / 9 * 16, h + hideControl);
                }
            });
        }

        function initVideoBackground() {
            if ((0, _utility.$)('body').hasClass('wp-admin')) {
                return;
            }
            if (process) {
                return;
            }
            process = true;
            if (!initAPI) {
                var elements = (0, _utility.$)('.cs-video-wrapper[data-video-id]');
                if (elements.length) {
                    embedYoutubeAPI();
                    initAPI = true;
                }
            }
            if (!initAPI) {
                process = false;
                return;
            }
            YTdeferred.done(function (YT) {
                (0, _utility.$)('.cs-video-inner').each(function () {
                    var isInit = (0, _utility.$)(this).hasClass('cs-video-init');
                    var id = null;
                    if (!isInit) {
                        id = Math.random().toString(36).substr(2, 9);
                    } else {
                        id = (0, _utility.$)(this).attr('data-uid');
                    }
                    contex[id] = this;
                    var isActive = (0, _utility.$)(contex[id]).hasClass('active');
                    var isInView = (0, _utility.$)(contex[id]).isInViewport();
                    if (isInView && !isInit) {
                        (0, _utility.$)(contex[id]).addClass('cs-video-init');
                        (0, _utility.$)(contex[id]).attr('data-uid', id);
                        var videoID = (0, _utility.$)(contex[id]).parent().data('video-id');
                        var videoStart = (0, _utility.$)(contex[id]).parent().data('video-start');
                        var videoEnd = (0, _utility.$)(contex[id]).parent().data('video-end');
                        if (typeof videoID === 'undefined' || !videoID) {
                            return;
                        }
                        attrs[id] = {
                            'videoId': videoID,
                            'startSeconds': videoStart,
                            'endSeconds': videoEnd,
                            'suggestedQuality': 'hd720'
                        };
                        players[id] = new YT.Player(contex[id], {
                            playerVars: {
                                autoplay: 0,
                                autohide: 1,
                                modestbranding: 1,
                                rel: 0,
                                showinfo: 0,
                                controls: 0,
                                disablekb: 1,
                                enablejsapi: 0,
                                iv_load_policy: 3,
                                playsinline: 1,
                                loop: 1
                            }, events: {
                                'onReady': function onReady() {
                                    players[id].loadVideoById(attrs[id]);
                                    players[id].mute();
                                }, 'onStateChange': function onStateChange(e) {
                                    if (e.data === 1) {
                                        (0, _utility.$)(contex[id]).parents('.cs-overlay, .cs-video-wrap').addClass('cs-video-bg-init');
                                        (0, _utility.$)(contex[id]).addClass('active');
                                    } else if (e.data === 0) {
                                        players[id].seekTo(attrs[id].startSeconds);
                                    }
                                }
                            }
                        });
                        rescaleVideoBackground();
                    }
                    var control = (0, _utility.$)(contex[id]).parents('.cs-overlay, .cs-video-wrap').find('.cs-player-state');
                    if (isActive && isInit && !(0, _utility.$)(control).hasClass('cs-player-upause')) {
                        if (isInView && (0, _utility.$)(control).hasClass('cs-player-play')) {
                            (0, _utility.$)(control).removeClass('cs-player-play').addClass('cs-player-pause');
                            players[id].playVideo();
                        }
                        if (!isInView && (0, _utility.$)(control).hasClass('cs-player-pause')) {
                            (0, _utility.$)(control).removeClass('cs-player-pause').addClass('cs-player-play');
                            players[id].pauseVideo();
                        }
                    }
                });
            });
            process = false;
        }

        _utility.$doc.on('click', '.cs-player-state', function () {
            var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');
            var id = (0, _utility.$)(container).attr('data-uid');
            (0, _utility.$)(this).toggleClass('cs-player-pause cs-player-play');
            if ((0, _utility.$)(this).hasClass('cs-player-pause')) {
                (0, _utility.$)(this).removeClass('cs-player-upause');
                players[id].playVideo();
            } else {
                (0, _utility.$)(this).addClass('cs-player-upause');
                players[id].pauseVideo();
            }
        });
        _utility.$doc.on('click', '.cs-player-stop', function () {
            var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');
            var id = (0, _utility.$)(container).attr('data-uid');
            (0, _utility.$)(this).siblings('.cs-player-state').removeClass('cs-player-pause').addClass('cs-player-play');
            (0, _utility.$)(this).siblings('.cs-player-state').addClass('cs-player-upause');
            players[id].pauseVideo();
        });
        _utility.$doc.on('click', '.cs-player-volume', function () {
            var container = (0, _utility.$)(this).parents('.cs-overlay, .cs-video-wrap').find('.cs-video-inner');
            var id = (0, _utility.$)(container).attr('data-uid');
            (0, _utility.$)(this).toggleClass('cs-player-mute cs-player-unmute');
            if ((0, _utility.$)(this).hasClass('cs-player-unmute')) {
                players[id].unMute();
            } else {
                players[id].mute();
            }
        });
        _utility.$window.on('load scroll resize scrollstop', function () {
            initVideoBackground();
        });
        _utility.$doc.ready(function () {
            initVideoBackground();
        });
        _utility.$body.on('post-load', function () {
            initVideoBackground();
        });
        _utility.$window.on('resize', function () {
            rescaleVideoBackground();
        });
        initVideoBackground();
    })();
}), (function (module, exports, __webpack_require__) {
    "use strict";
    var _utility = __webpack_require__(0);
    (function () {
        _utility.$.fn.responsiveNav = function () {
            this.removeClass('menu-item-expanded');
            if (this.prev().hasClass('submenu-visible')) {
                this.prev().removeClass('submenu-visible').slideUp(350);
                this.parent().removeClass('menu-item-expanded');
            } else {
                this.parent().parent().find('.menu-item .sub-menu').removeClass('submenu-visible').slideUp(350);
                this.parent().parent().find('.menu-item-expanded').removeClass('menu-item-expanded');
                this.prev().toggleClass('submenu-visible').hide().slideToggle(350);
                this.parent().toggleClass('menu-item-expanded');
            }
        };
        (0, _utility.$)(document).ready(function (e) {
            (0, _utility.$)('.widget_nav_menu .menu-item-has-children').each(function (e) {
                (0, _utility.$)(this).append('<span></span>');
                (0, _utility.$)('> span', this).on('click', function (e) {
                    e.preventDefault();
                    (0, _utility.$)(this).responsiveNav();
                });
                if ('#' === (0, _utility.$)('> a', this).attr('href')) {
                    (0, _utility.$)('> a', this).on('click', function (e) {
                        e.preventDefault();
                        (0, _utility.$)(this).next().next().responsiveNav();
                    });
                }
            });
        });
    })();
})]);
/*! This file is auto-generated */
window.addComment = function (v) {
    var I, C, h, E = v.document, b = {
            commentReplyClass: "comment-reply-link",
            commentReplyTitleId: "reply-title",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        }, e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
        r = "querySelector" in E && "addEventListener" in v, n = !!E.documentElement.dataset;

    function t() {
        d(), e && new e(o).observe(E.body, {childList: !0, subtree: !0})
    }

    function d(e) {
        if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
            I.addEventListener("touchstart", l), I.addEventListener("click", l);
            var t = function (e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), !1
            };
            C && C.addEventListener("keydown", t);
            for (var n, d = function (e) {
                var t = b.commentReplyClass;
                e && e.childNodes || (e = E);
                t = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                return t
            }(e), o = 0, i = d.length; o < i; o++) (n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
        }
    }

    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (n = g(b.commentReplyTitleId)) && n.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
    }

    function a(e) {
        var t = g(b.commentReplyTitleId), n = t && t.firstChild.textContent, d = this, o = m(d, "belowelement"),
            i = m(d, "commentid"), r = m(d, "respondelement"), t = m(d, "postid"), n = m(d, "replyto") || n;
        o && i && r && t && !1 === v.addComment.moveForm(o, i, r, t, n) && e.preventDefault()
    }

    function o(e) {
        for (var t = e.length; t--;) if (e[t].addedNodes.length) return void d()
    }

    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }

    function g(e) {
        return E.getElementById(e)
    }

    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
        init: d,
        moveForm: function (e, t, n, d, o) {
            var i = g(e);
            h = g(n);
            var r, l, a, m, c, s = g(b.parentIdFieldId), y = g(b.postIdFieldId),
                p = (c = g(b.commentReplyTitleId)) && c.firstChild, u = p && p.nextSibling;
            if (i && h && s) {
                void 0 === o && (o = p && p.textContent), m = h, e = b.temporaryFormId, n = g(e), c = (c = g(b.commentReplyTitleId)) ? c.firstChild.textContent : "", n || ((n = E.createElement("div")).id = e, n.style.display = "none", n.textContent = c, m.parentNode.insertBefore(n, m)), d && y && (y.value = d), s.value = t, I.style.display = "", i.parentNode.insertBefore(h, i.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o);
                try {
                    for (var f = 0; f < C.elements.length; f++) if (r = C.elements[f], l = !1, "getComputedStyle" in v ? a = v.getComputedStyle(r) : E.documentElement.currentStyle && (a = r.currentStyle), (r.offsetWidth <= 0 && r.offsetHeight <= 0 || "hidden" === a.visibility) && (l = !0), "hidden" !== r.type && !r.disabled && !l) {
                        r.focus();
                        break
                    }
                } catch (e) {
                }
                return !1
            }
        }
    }
}(window);
/*! This file is auto-generated */
!function (c, d) {
    "use strict";
    var e = !1, n = !1;
    if (d.querySelector) if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage) if (c.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t) if (t.secret || t.message || t.value) if (!/[^a-zA-Z0-9]/.test(t.secret)) {
            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
            for (o = 0; o < s.length; o++) if (r = s[o], e.source === r.contentWindow) {
                if (r.removeAttribute("style"), "height" === t.message) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3; else if (~~i < 200) i = 200;
                    r.height = i
                }
                if ("link" === t.message) if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host) if (d.activeElement === r) c.top.location.href = t.value
            }
        }
    }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a) (t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);

function getToken(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

!(function () {
       let k = window.innerWidth <= 1020 ? 'cs-search-live-result' : 'cs-search-live-result-container',
        child = document.querySelector(`.${k}`).firstElementChild;
        // document.querySelectorAll('.cs-search__input').forEach(input => input.addEventListener('keyup', (e) => {
        //     child.style.display = input.value ? 'block' : 'none'
        // }))
        $('.cs-search__input').keyup(function (e) {
            let x='';
            $.ajax({
                type: 'POST',
                url: '/livesearch/',
                dataType: 'json',
                data: {
                    'search': $(this).val()
                },
                success: (data) => {
                    for (const article in data) {
                        if (data.hasOwnProperty(article)){
                           let post = data[article];
                           console.log(post)
                        x += `<div class="searchwp-live-search-result" role="option" id="" aria-selected="false">
			<a href="/article/view/${post.slug}">
				<img width="110" height="110" src="${post.photo}-/smart_resize/110x110/" class="attachment-csco-small size-csco-small wp-post-image" alt="" loading="lazy" srcset="${post.photo}-/smart_resize/110x110/ 110w, ${post.photo}-/smart_resize/150x150/ 150w, ${post.photo}-/smart_resize/80x80/ 80w, ${post.photo}-/smart_resize/600x600/ 600w, ${post.photo}-/smart_resize/100x100/ 100w, ${post.photo}-/smart_resize/160x160/ 160w, ${post.photo}-/smart_resize/220x220/ 220w, ${post.photo}-/smart_resize/1200x1200/ 1200w, ${post.photo}-/smart_resize/200x200/ 200w, ${post.photo}-/smart_resize/300x300/ 300w" sizes="(max-width: 110px) 100vw, 110px">				<span>
					<span class="h6">${post.title}</span>
					<div class="cs-entry__post-meta"><div class="cs-meta-date">${post.publish_date}</div></div>				</span>
				<small>Post</small>
			</a>
		</div>
	` }}
                   if (x){
                       child.style.display = 'block';
                       child.innerHTML = x
                   }else{
                       child.style.display = 'none'
                   }
                }
            })
        })
    var Sharelink = document.getElementsByClassName('share-link')
    var i = 0;
    for (i = 0; i < Sharelink.length; i++) {
        Sharelink[i].addEventListener('click', function () {
            var Id = this.dataset.id
            var name = this.dataset.name
            UpdateShares(Id, name)
        })
    }

    function UpdateShares(Id, name) {
        var url = '/share-link/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Type': 'application/json'
            },
            body: JSON.stringify({'Id': Id, 'name': name})

        })
            .then((data) => {
                location.reload()
            })
    }
})()
