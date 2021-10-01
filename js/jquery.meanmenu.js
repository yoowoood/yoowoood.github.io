/*
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
(function(a) {
    a.fn.meanmenu = function(d) {
        var c = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-menu-area .container",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "767",
            meanNavPush: "",
            meanShowChildren: true,
            meanExpandableChildren: true,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: false,
            onePage: false,
            meanDisplay: "block",
            removeElements: ""
        };
        d = a.extend(c, d);
        var b = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = d.meanMenuTarget;
            var h = d.meanMenuContainer;
            var o = d.meanMenuClose;
            var p = d.meanMenuCloseSize;
            var r = d.meanMenuOpen;
            var y = d.meanRevealPosition;
            var z = d.meanRevealPositionDistance;
            var w = d.meanRevealColour;
            var A = d.meanScreenWidth;
            var s = d.meanNavPush;
            var v = ".meanmenu-reveal";
            var B = d.meanShowChildren;
            var l = d.meanExpandableChildren;
            var k = d.meanExpand;
            var i = d.meanContract;
            var u = d.meanRemoveAttrs;
            var D = d.onePage;
            var j = d.meanDisplay;
            var E = d.removeElements;
            var f = false;
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
                f = true
            }
            if ((navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i))) {
                jQuery("html").css("overflow-y", "scroll")
            }
            var x = "";
            var g = function() {
                if (y === "center") {
                    var H = window.innerWidth || document.documentElement.clientWidth;
                    var G = ((H / 2) - 22) + "px";
                    x = "left:" + G + ";right:auto;";
                    if (!f) {
                        jQuery(".meanmenu-reveal").css("left", G)
                    } else {
                        jQuery(".meanmenu-reveal").animate({
                            left: G
                        })
                    }
                }
            };
            var C = false;
            var q = false;
            if (y === "right") {
                x = "right:" + z + ";left:auto;"
            }
            if (y === "left") {
                x = "left:" + z + ";right:auto;"
            }
            g();
            var e = "";
            var m = function() {
                if (jQuery(e).is(".meanmenu-reveal.meanclose")) {
                    e.html(o)
                } else {
                    e.html(r)
                }
            };
            var t = function() {
                jQuery(".mean-bar,.mean-push").remove();
                jQuery(h).removeClass("mean-container");
                jQuery(n).css("display", j);
                C = false;
                q = false;
                jQuery(E).removeClass("mean-remove")
            };
            var F = function() {
                var H = "background:" + w + ";color:" + w + ";" + x;
                if (b <= A) {
                    jQuery(E).addClass("mean-remove");
                    q = true;
                    jQuery(h).addClass("mean-container");
                    jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + H + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var G = jQuery(n).html();
                    jQuery(".mean-nav").html(G);
                    if (u) {
                        jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            if (jQuery(this).is(".mean-remove")) {
                                jQuery(this).attr("class", "mean-remove")
                            } else {
                                jQuery(this).removeAttr("class")
                            }
                            jQuery(this).removeAttr("id")
                        })
                    }
                    jQuery(n).before('<div class="mean-push" />');
                    jQuery(".mean-push").css("margin-top", s);
                    jQuery(n).hide();
                    jQuery(".meanmenu-reveal").show();
                    jQuery(v).html(r);
                    e = jQuery(v);
                    jQuery(".mean-nav ul").hide();
                    if (B) {
                        if (l) {
                            jQuery(".mean-nav ul ul").each(function() {
                                if (jQuery(this).children().length) {
                                    jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + p + '">' + k + "</a>")
                                }
                            });
                            jQuery(".mean-expand").on("click", function(I) {
                                I.preventDefault();
                                if (jQuery(this).hasClass("mean-clicked")) {
                                    jQuery(this).text(k);
                                    jQuery(this).prev("ul").slideUp(300, function() {})
                                } else {
                                    jQuery(this).text(i);
                                    jQuery(this).prev("ul").slideDown(300, function() {})
                                }
                                jQuery(this).toggleClass("mean-clicked")
                            })
                        } else {
                            jQuery(".mean-nav ul ul").show()
                        }
                    } else {
                        jQuery(".mean-nav ul ul").hide()
                    }
                    jQuery(".mean-nav ul li").last().addClass("mean-last");
                    e.removeClass("meanclose");
                    jQuery(e).click(function(I) {
                        I.preventDefault();
                        if (C === false) {
                            e.css("text-align", "center");
                            e.css("text-indent", "0");
                            e.css("font-size", p);
                            jQuery(".mean-nav ul:first").slideDown();
                            C = true
                        } else {
                            jQuery(".mean-nav ul:first").slideUp();
                            C = false
                        }
                        e.toggleClass("meanclose");
                        m();
                        jQuery(E).addClass("mean-remove")
                    });
                    if (D) {
                        jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp();
                            C = false;
                            jQuery(e).toggleClass("meanclose").html(r)
                        })
                    }
                } else {
                    t()
                }
            };
            if (!f) {
                jQuery(window).resize(function() {
                    b = window.innerWidth || document.documentElement.clientWidth;
                    if (b > A) {
                        t()
                    } else {
                        t()
                    }
                    if (b <= A) {
                        F();
                        g()
                    } else {
                        t()
                    }
                })
            }
            jQuery(window).resize(function() {
                b = window.innerWidth || document.documentElement.clientWidth;
                if (!f) {
                    t();
                    if (b <= A) {
                        F();
                        g()
                    }
                } else {
                    g();
                    if (b <= A) {
                        if (q === false) {
                            F()
                        }
                    } else {
                        t()
                    }
                }
            });
            F()
        })
    }
})(jQuery);