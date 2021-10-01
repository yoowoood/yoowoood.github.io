function hexToRgb(c) {
    var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    c = c.replace(b, function(g, f, j, h) {
        return f + f + j + j + h + h
    });
    var d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return d ? {
        r: parseInt(d[1], 16),
        g: parseInt(d[2], 16),
        b: parseInt(d[3], 16)
    } : null
}

function clamp(c, b, d) {
    return Math.min(Math.max(c, b), d)
}

function isInArray(c, b) {
    return b.indexOf(c) > -1
}
var pJS = function(c, b) {
    var f = document.querySelector("#" + c + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: f,
            w: f.offsetWidth,
            h: f.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var d = this.pJS;
    b && Object.deepExtend(d, b), d.tmp.obj = {
        size_value: d.particles.size.value,
        size_anim_speed: d.particles.size.anim.speed,
        move_speed: d.particles.move.speed,
        line_linked_distance: d.particles.line_linked.distance,
        line_linked_width: d.particles.line_linked.width,
        mode_grab_distance: d.interactivity.modes.grab.distance,
        mode_bubble_distance: d.interactivity.modes.bubble.distance,
        mode_bubble_size: d.interactivity.modes.bubble.size,
        mode_repulse_distance: d.interactivity.modes.repulse.distance
    }, d.fn.retinaInit = function() {
        d.retina_detect && window.devicePixelRatio > 1 ? (d.canvas.pxratio = window.devicePixelRatio, d.tmp.retina = !0) : (d.canvas.pxratio = 1, d.tmp.retina = !1), d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio, d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio, d.particles.size.value = d.tmp.obj.size_value * d.canvas.pxratio, d.particles.size.anim.speed = d.tmp.obj.size_anim_speed * d.canvas.pxratio, d.particles.move.speed = d.tmp.obj.move_speed * d.canvas.pxratio, d.particles.line_linked.distance = d.tmp.obj.line_linked_distance * d.canvas.pxratio, d.interactivity.modes.grab.distance = d.tmp.obj.mode_grab_distance * d.canvas.pxratio, d.interactivity.modes.bubble.distance = d.tmp.obj.mode_bubble_distance * d.canvas.pxratio, d.particles.line_linked.width = d.tmp.obj.line_linked_width * d.canvas.pxratio, d.interactivity.modes.bubble.size = d.tmp.obj.mode_bubble_size * d.canvas.pxratio, d.interactivity.modes.repulse.distance = d.tmp.obj.mode_repulse_distance * d.canvas.pxratio
    }, d.fn.canvasInit = function() {
        d.canvas.ctx = d.canvas.el.getContext("2d")
    }, d.fn.canvasSize = function() {
        d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d && d.interactivity.events.resize && window.addEventListener("resize", function() {
            d.canvas.w = d.canvas.el.offsetWidth, d.canvas.h = d.canvas.el.offsetHeight, d.tmp.retina && (d.canvas.w *= d.canvas.pxratio, d.canvas.h *= d.canvas.pxratio), d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d.particles.move.enable || (d.fn.particlesEmpty(), d.fn.particlesCreate(), d.fn.particlesDraw(), d.fn.vendors.densityAutoParticles()), d.fn.vendors.densityAutoParticles()
        })
    }, d.fn.canvasPaint = function() {
        d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.canvasClear = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.particle = function(i, g, p) {
        if (this.radius = (d.particles.size.random ? Math.random() : 1) * d.particles.size.value, d.particles.size.anim.enable && (this.size_status = !1, this.vs = d.particles.size.anim.speed / 100, d.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = p ? p.x : Math.random() * d.canvas.w, this.y = p ? p.y : Math.random() * d.canvas.h, this.x > d.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > d.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), d.particles.move.bounce && d.fn.vendors.checkOverlap(this, p), this.color = {}, "object" == typeof i.value) {
            if (i.value instanceof Array) {
                var m = i.value[Math.floor(Math.random() * d.particles.color.value.length)];
                this.color.rgb = hexToRgb(m)
            } else {
                void 0 != i.value.r && void 0 != i.value.g && void 0 != i.value.b && (this.color.rgb = {
                    r: i.value.r,
                    g: i.value.g,
                    b: i.value.b
                }), void 0 != i.value.h && void 0 != i.value.s && void 0 != i.value.l && (this.color.hsl = {
                    h: i.value.h,
                    s: i.value.s,
                    l: i.value.l
                })
            }
        } else {
            "random" == i.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof i.value && (this.color = i, this.color.rgb = hexToRgb(this.color.value))
        }
        this.opacity = (d.particles.opacity.random ? Math.random() : 1) * d.particles.opacity.value, d.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = d.particles.opacity.anim.speed / 100, d.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var j = {};
        switch (d.particles.move.direction) {
            case "top":
                j = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                j = {
                    x: 0.5,
                    y: -0.5
                };
                break;
            case "right":
                j = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                j = {
                    x: 0.5,
                    y: 0.5
                };
                break;
            case "bottom":
                j = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                j = {
                    x: -0.5,
                    y: 1
                };
                break;
            case "left":
                j = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                j = {
                    x: -0.5,
                    y: -0.5
                };
                break;
            default:
                j = {
                    x: 0,
                    y: 0
                }
        }
        d.particles.move.straight ? (this.vx = j.x, this.vy = j.y, d.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = j.x + Math.random() - 0.5, this.vy = j.y + Math.random() - 0.5), this.vx_i = this.vx, this.vy_i = this.vy;
        var l = d.particles.shape.type;
        if ("object" == typeof l) {
            if (l instanceof Array) {
                var h = l[Math.floor(Math.random() * l.length)];
                this.shape = h
            }
        } else {
            this.shape = l
        }
        if ("image" == this.shape) {
            var k = d.particles.shape;
            this.img = {
                src: k.image.src,
                ratio: k.image.width / k.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == d.tmp.img_type && void 0 != d.tmp.source_svg && (d.fn.vendors.createSvgImg(this), d.tmp.pushing && (this.img.loaded = !1))
        }
    }, d.fn.particle.prototype.draw = function() {
        function h() {
            d.canvas.ctx.drawImage(j, g.x - l, g.y - l, 2 * l, 2 * l / g.img.ratio)
        }
        var g = this;
        if (void 0 != g.radius_bubble) {
            var l = g.radius_bubble
        } else {
            var l = g.radius
        }
        if (void 0 != g.opacity_bubble) {
            var k = g.opacity_bubble
        } else {
            var k = g.opacity
        }
        if (g.color.rgb) {
            var i = "rgba(" + g.color.rgb.r + "," + g.color.rgb.g + "," + g.color.rgb.b + "," + k + ")"
        } else {
            var i = "hsla(" + g.color.hsl.h + "," + g.color.hsl.s + "%," + g.color.hsl.l + "%," + k + ")"
        }
        switch (d.canvas.ctx.fillStyle = i, d.canvas.ctx.beginPath(), g.shape) {
            case "circle":
                d.canvas.ctx.arc(g.x, g.y, l, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                d.canvas.ctx.rect(g.x - l, g.y - l, 2 * l, 2 * l);
                break;
            case "triangle":
                d.fn.vendors.drawShape(d.canvas.ctx, g.x - l, g.y + l / 1.66, 2 * l, 3, 2);
                break;
            case "polygon":
                d.fn.vendors.drawShape(d.canvas.ctx, g.x - l / (d.particles.shape.polygon.nb_sides / 3.5), g.y - l / 0.76, 2.66 * l / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                d.fn.vendors.drawShape(d.canvas.ctx, g.x - 2 * l / (d.particles.shape.polygon.nb_sides / 4), g.y - l / 1.52, 2 * l * 2.66 / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == d.tmp.img_type) {
                    var j = g.img.obj
                } else {
                    var j = d.tmp.img_obj
                }
                j && h()
        }
        d.canvas.ctx.closePath(), d.particles.shape.stroke.width > 0 && (d.canvas.ctx.strokeStyle = d.particles.shape.stroke.color, d.canvas.ctx.lineWidth = d.particles.shape.stroke.width, d.canvas.ctx.stroke()), d.canvas.ctx.fill()
    }, d.fn.particlesCreate = function() {
        for (var a = 0; a < d.particles.number.value; a++) {
            d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value))
        }
    }, d.fn.particlesUpdate = function() {
        for (var h = 0; h < d.particles.array.length; h++) {
            var g = d.particles.array[h];
            if (d.particles.move.enable) {
                var l = d.particles.move.speed / 2;
                g.x += g.vx * l, g.y += g.vy * l
            }
            if (d.particles.opacity.anim.enable && (1 == g.opacity_status ? (g.opacity >= d.particles.opacity.value && (g.opacity_status = !1), g.opacity += g.vo) : (g.opacity <= d.particles.opacity.anim.opacity_min && (g.opacity_status = !0), g.opacity -= g.vo), g.opacity < 0 && (g.opacity = 0)), d.particles.size.anim.enable && (1 == g.size_status ? (g.radius >= d.particles.size.value && (g.size_status = !1), g.radius += g.vs) : (g.radius <= d.particles.size.anim.size_min && (g.size_status = !0), g.radius -= g.vs), g.radius < 0 && (g.radius = 0)), "bounce" == d.particles.move.out_mode) {
                var k = {
                    x_left: g.radius,
                    x_right: d.canvas.w,
                    y_top: g.radius,
                    y_bottom: d.canvas.h
                }
            } else {
                var k = {
                    x_left: -g.radius,
                    x_right: d.canvas.w + g.radius,
                    y_top: -g.radius,
                    y_bottom: d.canvas.h + g.radius
                }
            }
            switch (g.x - g.radius > d.canvas.w ? (g.x = k.x_left, g.y = Math.random() * d.canvas.h) : g.x + g.radius < 0 && (g.x = k.x_right, g.y = Math.random() * d.canvas.h), g.y - g.radius > d.canvas.h ? (g.y = k.y_top, g.x = Math.random() * d.canvas.w) : g.y + g.radius < 0 && (g.y = k.y_bottom, g.x = Math.random() * d.canvas.w), d.particles.move.out_mode) {
                case "bounce":
                    g.x + g.radius > d.canvas.w ? g.vx = -g.vx : g.x - g.radius < 0 && (g.vx = -g.vx), g.y + g.radius > d.canvas.h ? g.vy = -g.vy : g.y - g.radius < 0 && (g.vy = -g.vy)
            }
            if (isInArray("grab", d.interactivity.events.onhover.mode) && d.fn.modes.grabParticle(g), (isInArray("bubble", d.interactivity.events.onhover.mode) || isInArray("bubble", d.interactivity.events.onclick.mode)) && d.fn.modes.bubbleParticle(g), (isInArray("repulse", d.interactivity.events.onhover.mode) || isInArray("repulse", d.interactivity.events.onclick.mode)) && d.fn.modes.repulseParticle(g), d.particles.line_linked.enable || d.particles.move.attract.enable) {
                for (var i = h + 1; i < d.particles.array.length; i++) {
                    var j = d.particles.array[i];
                    d.particles.line_linked.enable && d.fn.interact.linkParticles(g, j), d.particles.move.attract.enable && d.fn.interact.attractParticles(g, j), d.particles.move.bounce && d.fn.interact.bounceParticles(g, j)
                }
            }
        }
    }, d.fn.particlesDraw = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h), d.fn.particlesUpdate();
        for (var h = 0; h < d.particles.array.length; h++) {
            var g = d.particles.array[h];
            g.draw()
        }
    }, d.fn.particlesEmpty = function() {
        d.particles.array = []
    }, d.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(d.fn.checkAnimFrame), cancelRequestAnimFrame(d.fn.drawAnimFrame), d.tmp.source_svg = void 0, d.tmp.img_obj = void 0, d.tmp.count_svg = 0, d.fn.particlesEmpty(), d.fn.canvasClear(), d.fn.vendors.start()
    }, d.fn.interact.linkParticles = function(i, g) {
        var m = i.x - g.x,
            l = i.y - g.y,
            j = Math.sqrt(m * m + l * l);
        if (j <= d.particles.line_linked.distance) {
            var k = d.particles.line_linked.opacity - j / (1 / d.particles.line_linked.opacity) / d.particles.line_linked.distance;
            if (k > 0) {
                var h = d.particles.line_linked.color_rgb_line;
                d.canvas.ctx.strokeStyle = "rgba(" + h.r + "," + h.g + "," + h.b + "," + k + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(i.x, i.y), d.canvas.ctx.lineTo(g.x, g.y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
            }
        }
    }, d.fn.interact.attractParticles = function(i, g) {
        var m = i.x - g.x,
            l = i.y - g.y,
            j = Math.sqrt(m * m + l * l);
        if (j <= d.particles.line_linked.distance) {
            var k = m / (1000 * d.particles.move.attract.rotateX),
                h = l / (1000 * d.particles.move.attract.rotateY);
            i.vx -= k, i.vy -= h, g.vx += k, g.vy += h
        }
    }, d.fn.interact.bounceParticles = function(h, g) {
        var m = h.x - g.x,
            j = h.y - g.y,
            l = Math.sqrt(m * m + j * j),
            k = h.radius + g.radius;
        k >= l && (h.vx = -h.vx, h.vy = -h.vy, g.vx = -g.vx, g.vy = -g.vy)
    }, d.fn.modes.pushParticles = function(h, g) {
        d.tmp.pushing = !0;
        for (var i = 0; h > i; i++) {
            d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value, {
                x: g ? g.pos_x : Math.random() * d.canvas.w,
                y: g ? g.pos_y : Math.random() * d.canvas.h
            })), i == h - 1 && (d.particles.move.enable || d.fn.particlesDraw(), d.tmp.pushing = !1)
        }
    }, d.fn.modes.removeParticles = function(a) {
        d.particles.array.splice(0, a), d.particles.move.enable || d.fn.particlesDraw()
    }, d.fn.modes.bubbleParticle = function(i) {
        function g() {
            i.opacity_bubble = i.opacity, i.radius_bubble = i.radius
        }

        function x(e, D, C, A, p) {
            if (e != D) {
                if (d.tmp.bubble_duration_end) {
                    if (void 0 != C) {
                        var B = A - q * (A - e) / d.interactivity.modes.bubble.duration,
                            z = e - B;
                        r = e + z, "size" == p && (i.radius_bubble = r), "opacity" == p && (i.opacity_bubble = r)
                    }
                } else {
                    if (u <= d.interactivity.modes.bubble.distance) {
                        if (void 0 != C) {
                            var E = C
                        } else {
                            var E = A
                        }
                        if (E != e) {
                            var r = A - q * (A - e) / d.interactivity.modes.bubble.duration;
                            "size" == p && (i.radius_bubble = r), "opacity" == p && (i.opacity_bubble = r)
                        }
                    } else {
                        "size" == p && (i.radius_bubble = void 0), "opacity" == p && (i.opacity_bubble = void 0)
                    }
                }
            }
        }
        if (d.interactivity.events.onhover.enable && isInArray("bubble", d.interactivity.events.onhover.mode)) {
            var w = i.x - d.interactivity.mouse.pos_x,
                k = i.y - d.interactivity.mouse.pos_y,
                u = Math.sqrt(w * w + k * k),
                h = 1 - u / d.interactivity.modes.bubble.distance;
            if (u <= d.interactivity.modes.bubble.distance) {
                if (h >= 0 && "mousemove" == d.interactivity.status) {
                    if (d.interactivity.modes.bubble.size != d.particles.size.value) {
                        if (d.interactivity.modes.bubble.size > d.particles.size.value) {
                            var m = i.radius + d.interactivity.modes.bubble.size * h;
                            m >= 0 && (i.radius_bubble = m)
                        } else {
                            var j = i.radius - d.interactivity.modes.bubble.size,
                                m = i.radius - j * h;
                            m > 0 ? i.radius_bubble = m : i.radius_bubble = 0
                        }
                    }
                    if (d.interactivity.modes.bubble.opacity != d.particles.opacity.value) {
                        if (d.interactivity.modes.bubble.opacity > d.particles.opacity.value) {
                            var y = d.interactivity.modes.bubble.opacity * h;
                            y > i.opacity && y <= d.interactivity.modes.bubble.opacity && (i.opacity_bubble = y)
                        } else {
                            var y = i.opacity - (d.particles.opacity.value - d.interactivity.modes.bubble.opacity) * h;
                            y < i.opacity && y >= d.interactivity.modes.bubble.opacity && (i.opacity_bubble = y)
                        }
                    }
                }
            } else {
                g()
            }
            "mouseleave" == d.interactivity.status && g()
        } else {
            if (d.interactivity.events.onclick.enable && isInArray("bubble", d.interactivity.events.onclick.mode)) {
                if (d.tmp.bubble_clicking) {
                    var w = i.x - d.interactivity.mouse.click_pos_x,
                        k = i.y - d.interactivity.mouse.click_pos_y,
                        u = Math.sqrt(w * w + k * k),
                        q = ((new Date).getTime() - d.interactivity.mouse.click_time) / 1000;
                    q > d.interactivity.modes.bubble.duration && (d.tmp.bubble_duration_end = !0), q > 2 * d.interactivity.modes.bubble.duration && (d.tmp.bubble_clicking = !1, d.tmp.bubble_duration_end = !1)
                }
                d.tmp.bubble_clicking && (x(d.interactivity.modes.bubble.size, d.particles.size.value, i.radius_bubble, i.radius, "size"), x(d.interactivity.modes.bubble.opacity, d.particles.opacity.value, i.opacity_bubble, i.opacity, "opacity"))
            }
        }
    }, d.fn.modes.repulseParticle = function(j) {
        function g() {
            var e = Math.atan2(i, y);
            if (j.vx = C * Math.cos(e), j.vy = C * Math.sin(e), "bounce" == d.particles.move.out_mode) {
                var l = {
                    x: j.x + j.vx,
                    y: j.y + j.vy
                };
                l.x + j.radius > d.canvas.w ? j.vx = -j.vx : l.x - j.radius < 0 && (j.vx = -j.vx), l.y + j.radius > d.canvas.h ? j.vy = -j.vy : l.y - j.radius < 0 && (j.vy = -j.vy)
            }
        }
        if (d.interactivity.events.onhover.enable && isInArray("repulse", d.interactivity.events.onhover.mode) && "mousemove" == d.interactivity.status) {
            var B = j.x - d.interactivity.mouse.pos_x,
                A = j.y - d.interactivity.mouse.pos_y,
                w = Math.sqrt(B * B + A * A),
                z = {
                    x: B / w,
                    y: A / w
                },
                h = d.interactivity.modes.repulse.distance,
                x = 100,
                k = clamp(1 / h * (-1 * Math.pow(w / h, 2) + 1) * h * x, 0, 50),
                D = {
                    x: j.x + z.x * k,
                    y: j.y + z.y * k
                };
            "bounce" == d.particles.move.out_mode ? (D.x - j.radius > 0 && D.x + j.radius < d.canvas.w && (j.x = D.x), D.y - j.radius > 0 && D.y + j.radius < d.canvas.h && (j.y = D.y)) : (j.x = D.x, j.y = D.y)
        } else {
            if (d.interactivity.events.onclick.enable && isInArray("repulse", d.interactivity.events.onclick.mode)) {
                if (d.tmp.repulse_finish || (d.tmp.repulse_count++, d.tmp.repulse_count == d.particles.array.length && (d.tmp.repulse_finish = !0)), d.tmp.repulse_clicking) {
                    var h = Math.pow(d.interactivity.modes.repulse.distance / 6, 3),
                        y = d.interactivity.mouse.click_pos_x - j.x,
                        i = d.interactivity.mouse.click_pos_y - j.y,
                        q = y * y + i * i,
                        C = -h / q * 1;
                    h >= q && g()
                } else {
                    0 == d.tmp.repulse_clicking && (j.vx = j.vx_i, j.vy = j.vy_i)
                }
            }
        }
    }, d.fn.modes.grabParticle = function(h) {
        if (d.interactivity.events.onhover.enable && "mousemove" == d.interactivity.status) {
            var g = h.x - d.interactivity.mouse.pos_x,
                l = h.y - d.interactivity.mouse.pos_y,
                k = Math.sqrt(g * g + l * l);
            if (k <= d.interactivity.modes.grab.distance) {
                var i = d.interactivity.modes.grab.line_linked.opacity - k / (1 / d.interactivity.modes.grab.line_linked.opacity) / d.interactivity.modes.grab.distance;
                if (i > 0) {
                    var j = d.particles.line_linked.color_rgb_line;
                    d.canvas.ctx.strokeStyle = "rgba(" + j.r + "," + j.g + "," + j.b + "," + i + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(h.x, h.y), d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x, d.interactivity.mouse.pos_y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
                }
            }
        }
    }, d.fn.vendors.eventsListeners = function() {
        "window" == d.interactivity.detect_on ? d.interactivity.el = window : d.interactivity.el = d.canvas.el, (d.interactivity.events.onhover.enable || d.interactivity.events.onclick.enable) && (d.interactivity.el.addEventListener("mousemove", function(h) {
            if (d.interactivity.el == window) {
                var g = h.clientX,
                    i = h.clientY
            } else {
                var g = h.offsetX || h.clientX,
                    i = h.offsetY || h.clientY
            }
            d.interactivity.mouse.pos_x = g, d.interactivity.mouse.pos_y = i, d.tmp.retina && (d.interactivity.mouse.pos_x *= d.canvas.pxratio, d.interactivity.mouse.pos_y *= d.canvas.pxratio), d.interactivity.status = "mousemove"
        }), d.interactivity.el.addEventListener("mouseleave", function(a) {
            d.interactivity.mouse.pos_x = null, d.interactivity.mouse.pos_y = null, d.interactivity.status = "mouseleave"
        })), d.interactivity.events.onclick.enable && d.interactivity.el.addEventListener("click", function() {
            if (d.interactivity.mouse.click_pos_x = d.interactivity.mouse.pos_x, d.interactivity.mouse.click_pos_y = d.interactivity.mouse.pos_y, d.interactivity.mouse.click_time = (new Date).getTime(), d.interactivity.events.onclick.enable) {
                switch (d.interactivity.events.onclick.mode) {
                    case "push":
                        d.particles.move.enable ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : 1 == d.interactivity.modes.push.particles_nb ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : d.interactivity.modes.push.particles_nb > 1 && d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);
                        break;
                    case "remove":
                        d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);
                        break;
                    case "bubble":
                        d.tmp.bubble_clicking = !0;
                        break;
                    case "repulse":
                        d.tmp.repulse_clicking = !0, d.tmp.repulse_count = 0, d.tmp.repulse_finish = !1, setTimeout(function() {
                            d.tmp.repulse_clicking = !1
                        }, 1000 * d.interactivity.modes.repulse.duration)
                }
            }
        })
    }, d.fn.vendors.densityAutoParticles = function() {
        if (d.particles.number.density.enable) {
            var h = d.canvas.el.width * d.canvas.el.height / 1000;
            d.tmp.retina && (h /= 2 * d.canvas.pxratio);
            var g = h * d.particles.number.value / d.particles.number.density.value_area,
                i = d.particles.array.length - g;
            0 > i ? d.fn.modes.pushParticles(Math.abs(i)) : d.fn.modes.removeParticles(i)
        }
    }, d.fn.vendors.checkOverlap = function(i, g) {
        for (var m = 0; m < d.particles.array.length; m++) {
            var l = d.particles.array[m],
                j = i.x - l.x,
                k = i.y - l.y,
                h = Math.sqrt(j * j + k * k);
            h <= i.radius + l.radius && (i.x = g ? g.x : Math.random() * d.canvas.w, i.y = g ? g.y : Math.random() * d.canvas.h, d.fn.vendors.checkOverlap(i))
        }
    }, d.fn.vendors.createSvgImg = function(i) {
        var g = d.tmp.source_svg,
            p = /#([0-9A-F]{3,6})/gi,
            m = g.replace(p, function(e, u, o, r) {
                if (i.color.rgb) {
                    var q = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + i.opacity + ")"
                } else {
                    var q = "hsla(" + i.color.hsl.h + "," + i.color.hsl.s + "%," + i.color.hsl.l + "%," + i.opacity + ")"
                }
                return q
            }),
            j = new Blob([m], {
                type: "image/svg+xml;charset=utf-8"
            }),
            l = window.URL || window.webkitURL || window,
            h = l.createObjectURL(j),
            k = new Image;
        k.addEventListener("load", function() {
            i.img.obj = k, i.img.loaded = !0, l.revokeObjectURL(h), d.tmp.count_svg++
        }), k.src = h
    }, d.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(d.fn.drawAnimFrame), f.remove(), pJSDom = null
    }, d.fn.vendors.drawShape = function(j, g, x, k, w, p) {
        var u = w * p,
            h = w / p,
            q = 180 * (h - 2) / h,
            m = Math.PI - Math.PI * q / 180;
        j.save(), j.beginPath(), j.translate(g, x), j.moveTo(0, 0);
        for (var y = 0; u > y; y++) {
            j.lineTo(k, 0), j.translate(k, 0), j.rotate(m)
        }
        j.fill(), j.restore()
    }, d.fn.vendors.exportImg = function() {
        window.open(d.canvas.el.toDataURL("image/png"), "_blank")
    }, d.fn.vendors.loadImg = function(h) {
        if (d.tmp.img_error = void 0, "" != d.particles.shape.image.src) {
            if ("svg" == h) {
                var g = new XMLHttpRequest;
                g.open("GET", d.particles.shape.image.src), g.onreadystatechange = function(a) {
                    4 == g.readyState && (200 == g.status ? (d.tmp.source_svg = a.currentTarget.response, d.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), d.tmp.img_error = !0))
                }, g.send()
            } else {
                var i = new Image;
                i.addEventListener("load", function() {
                    d.tmp.img_obj = i, d.fn.vendors.checkBeforeDraw()
                }), i.src = d.particles.shape.image.src
            }
        } else {
            console.log("Error pJS - No image.src"), d.tmp.img_error = !0
        }
    }, d.fn.vendors.draw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type ? d.tmp.count_svg >= d.particles.number.value ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : void 0 != d.tmp.img_obj ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame))
    }, d.fn.vendors.checkBeforeDraw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type && void 0 == d.tmp.source_svg ? d.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(d.tmp.checkAnimFrame), d.tmp.img_error || (d.fn.vendors.init(), d.fn.vendors.draw())) : (d.fn.vendors.init(), d.fn.vendors.draw())
    }, d.fn.vendors.init = function() {
        d.fn.retinaInit(), d.fn.canvasInit(), d.fn.canvasSize(), d.fn.canvasPaint(), d.fn.particlesCreate(), d.fn.vendors.densityAutoParticles(), d.particles.line_linked.color_rgb_line = hexToRgb(d.particles.line_linked.color)
    }, d.fn.vendors.start = function() {
        isInArray("image", d.particles.shape.type) ? (d.tmp.img_type = d.particles.shape.image.src.substr(d.particles.shape.image.src.length - 3), d.fn.vendors.loadImg(d.tmp.img_type)) : d.fn.vendors.checkBeforeDraw()
    }, d.fn.vendors.eventsListeners(), d.fn.vendors.start()
};
Object.deepExtend = function(c, b) {
    for (var d in b) {
        b[d] && b[d].constructor && b[d].constructor === Object ? (c[d] = c[d] || {}, arguments.callee(c[d], b[d])) : c[d] = b[d]
    }
    return c
}, window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1000 / 60)
    }
}(), window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function(c, b) {
    "string" != typeof c && (b = c, c = "particles-js"), c || (c = "particles-js");
    var j = document.getElementById(c),
        d = "particles-js-canvas-el",
        h = j.getElementsByClassName(d);
    if (h.length) {
        for (; h.length > 0;) {
            j.removeChild(h[0])
        }
    }
    var f = document.createElement("canvas");
    f.className = d, f.style.width = "100%", f.style.height = "100%";
    var g = document.getElementById(c).appendChild(f);
    null != g && pJSDom.push(new pJS(c, b))
}, window.particlesJS.load = function(c, b, f) {
    var d = new XMLHttpRequest;
    d.open("GET", b), d.onreadystatechange = function(e) {
        if (4 == d.readyState) {
            if (200 == d.status) {
                var g = JSON.parse(e.currentTarget.response);
                window.particlesJS(c, g), f && f()
            } else {
                console.log("Error pJS - XMLHttpRequest status: " + d.status), console.log("Error pJS - File config not found")
            }
        }
    }, d.send()
};