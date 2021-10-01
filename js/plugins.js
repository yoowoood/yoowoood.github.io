(function() {
    var c;
    var e = function() {};
    var d = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"];
    var b = d.length;
    var a = (window.console = window.console || {});
    while (b--) {
        c = d[b];
        if (!a[c]) {
            a[c] = e
        }
    }
}());
/*
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
! function(b, c, a) {
    b.fn.scrollUp = function(d) {
        b.data(a.body, "scrollUp") || (b.data(a.body, "scrollUp", !0), b.fn.scrollUp.init(d))
    }, b.fn.scrollUp.init = function(o) {
        var q, u, g, k, l, e, h, m = b.fn.scrollUp.settings = b.extend({}, b.fn.scrollUp.defaults, o),
            j = !1;
        switch (h = m.scrollTrigger ? b(m.scrollTrigger) : b("<a/>", {
            id: m.scrollName,
            href: "#top"
        }), m.scrollTitle && h.attr("title", m.scrollTitle), h.appendTo("body"), m.scrollImg || m.scrollTrigger || h.html(m.scrollText), h.css({
            display: "none",
            position: "fixed",
            zIndex: m.zIndex
        }), m.activeOverlay && b("<div/>", {
            id: m.scrollName + "-active"
        }).css({
            position: "absolute",
            top: m.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + m.activeOverlay,
            zIndex: m.zIndex
        }).appendTo("body"), m.animation) {
            case "fade":
                q = "fadeIn", u = "fadeOut", g = m.animationSpeed;
                break;
            case "slide":
                q = "slideDown", u = "slideUp", g = m.animationSpeed;
                break;
            default:
                q = "show", u = "hide", g = 0
        }
        k = "top" === m.scrollFrom ? m.scrollDistance : b(a).height() - b(c).height() - m.scrollDistance, l = b(c).scroll(function() {
            b(c).scrollTop() > k ? j || (h[q](g), j = !0) : j && (h[u](g), j = !1)
        }), m.scrollTarget ? "number" == typeof m.scrollTarget ? e = m.scrollTarget : "string" == typeof m.scrollTarget && (e = Math.floor(b(m.scrollTarget).offset().top)) : e = 0, h.click(function(d) {
            d.preventDefault(), b("html, body").animate({
                scrollTop: e
            }, m.scrollSpeed, m.easingType)
        })
    }, b.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, b.fn.scrollUp.destroy = function(d) {
        b.removeData(a.body, "scrollUp"), b("#" + b.fn.scrollUp.settings.scrollName).remove(), b("#" + b.fn.scrollUp.settings.scrollName + "-active").remove(), b.fn.jquery.split(".")[1] >= 7 ? b(c).off("scroll", d) : b(c).unbind("scroll", d)
    }, b.scrollUp = b.fn.scrollUp
}(jQuery, window, document);