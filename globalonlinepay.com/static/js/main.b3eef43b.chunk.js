(this["webpackJsonpfrontend-gop"] = this["webpackJsonpfrontend-gop"] || []).push([
    [0], {
        125: function(e, t, c) {},
        126: function(e, t, c) {},
        127: function(e, t, c) {},
        219: function(e, t, c) {},
        221: function(e, t, c) {
            "use strict";
            c.r(t);
            var n = c(1),
                s = c.n(n),
                a = c(16),
                i = c.n(a),
                r = (c(64), c(14)),
                l = c(4),
                o = c(21),
                d = (c(42), c(26)),
                j = (c(125), c(126), c(127), c(6)),
                m = "https://globalonlinepay.com",
                b = "https://globalonlinepay.org",
                h = "https://merchant.globalonlinepay.com",
                u = "https://user.globalonlinepay.com",
                O = "success",
                x = [{
                    value: "FONEPAY",
                    label: "MOBILE BANKING"
                }, {
                    value: "ESEWA",
                    label: "E-sewa"
                }, {
                    value: "KHALTI",
                    label: "Khalti Wallet || E-banking"
                }, {
                    value: "IMEPAY",
                    label: "IMEPAY"
                }, {
                    value: "PRABHUPAY",
                    label: "PrabhuPay"
                }, {
                    value: "CELLPAY",
                    label: "CellPay"
                }],
                p = [{
                    value: "NIC_ASIA",
                    label: "Debit/Credit Card NPR (\u0930\u0942)"
                }, {
                    value: "NIC_ASIA_INTERNATIONAL",
                    label: "Debit/Credit Card ($)"
                }, {
                    value: "NIC_ASIA_INTERNATIONAL_INR",
                    label: "Debit/Credit Card INR (\u20b9)"
                }, {
                    value: "NIC_ASIA_INTERNATIONAL_AUD",
                    label: "Debit/Credit Card AUD (AU$)"
                }, {
                    value: "NIC_ASIA_INTERNATIONAL_GBP",
                    label: "Debit/Credit Card GBP (\xa3)"
                }, {
                    value: "NIC_ASIA_INTERNATIONAL_EUR",
                    label: "Debit/Credit Card EUR (\u20ac)"
                }],
                v = c(0),
                f = function() {
                    var e = Object(n.useState)(""),
                        t = Object(l.a)(e, 2),
                        c = t[0],
                        s = t[1],
                        a = Object(n.useState)(""),
                        i = Object(l.a)(a, 2),
                        o = i[0],
                        m = i[1],
                        h = Object(r.h)();
                    Object(n.useEffect)((function() {
                        s(""), m("")
                    }), [h]);
                    var O = function() {
                        "active" == c ? (s(""), m("")) : (s("active"), m("outerlayer"))
                    };
                    return Object(v.jsx)("header", {
                        className: "top-bar",
                        children: Object(v.jsx)("div", {
                            className: "container",
                            children: Object(v.jsxs)("div", {
                                className: "row flex-center",
                                children: [Object(v.jsx)("div", {
                                    className: "col-lg-2 col-md-3 order-0 col",
                                    children: Object(v.jsx)("div", {
                                        className: "logo",
                                        children: Object(v.jsx)(j.b, {
                                            to: "/",
                                            children: Object(v.jsx)("img", {
                                                src: "/assets/images/logo/logo.png"
                                            })
                                        })
                                    })
                                }), Object(v.jsxs)("div", {
                                    className: "col-lg-4 col-md-12 order-lg-1 order-3 search-wrapper",
                                    children: [Object(v.jsx)("div", {
                                        className: "search-controller",
                                        children: Object(v.jsx)("form", {
                                            method: "GET",
                                            action: "#",
                                            children: Object(v.jsxs)("div", {
                                                className: "input-group",
                                                children: [Object(v.jsx)("input", {
                                                    type: "search",
                                                    className: "search-input",
                                                    placeholder: "Search "
                                                }), Object(v.jsx)("div", {
                                                    className: "input-group-prepend",
                                                    children: Object(v.jsx)("button", {
                                                        className: "input-group-text  button-control primary-bg search-button",
                                                        children: Object(v.jsx)(d.e, {})
                                                    })
                                                })]
                                            })
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "search-support",
                                        children: " "
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "col-lg-6 col-md-7 order-lg-2 order-1 col",
                                    children: [Object(v.jsxs)("div", {
                                        className: "basic-register sm-none",
                                        children: [Object(v.jsx)("a", {
                                            href: u + "/login",
                                            className: "primary-bg button-control",
                                            children: "Login"
                                        }), Object(v.jsx)("a", {
                                            href: u + "/signup",
                                            className: "primary-bg button-control",
                                            children: "Register"
                                        }), Object(v.jsx)("a", {
                                            href: "https://play.google.com/store/apps/details?id=com.globalonlinepay.GOP_Mobile_App",
                                            className: "primary-bg button-control",
                                            children: "Get App"
                                        }), Object(v.jsx)("a", {
                                            href: "tel:+977 - 1 - 4256 - 218",
                                            className: "primary-bg c-number button-control",
                                            children: "+977 - 1 - 4256 - 218"
                                        })]
                                    }), Object(v.jsxs)("div", {
                                        className: "navigation",
                                        children: [Object(v.jsxs)("div", {
                                            className: "menu-down",
                                            id: "first-nav",
                                            children: [Object(v.jsxs)(j.c, {
                                                exact: !0,
                                                to: "/",
                                                className: "button-control",
                                                children: [Object(v.jsx)("div", {
                                                    className: "mobile-icons",
                                                    children: Object(v.jsx)(d.c, {})
                                                }), "Home"]
                                            }), Object(v.jsxs)(j.c, {
                                                exact: !0,
                                                to: "/events",
                                                className: "button-control",
                                                children: [Object(v.jsx)("div", {
                                                    className: "mobile-icons",
                                                    children: Object(v.jsx)(d.a, {})
                                                }), "Events"]
                                            }), Object(v.jsxs)("a", {
                                                href: b + "/forms",
                                                className: "button-control",
                                                children: [Object(v.jsx)("div", {
                                                    className: "mobile-icons",
                                                    children: Object(v.jsx)(d.f, {})
                                                }), "Forms"]
                                            }), Object(v.jsxs)("a", {
                                                href: b + "/tickets",
                                                className: "button-control",
                                                children: [Object(v.jsx)("div", {
                                                    className: "mobile-icons",
                                                    children: Object(v.jsx)(d.g, {})
                                                }), "Tickets"]
                                            })]
                                        }), Object(v.jsxs)("div", {
                                            className: c,
                                            id: "second-nav",
                                            children: [Object(v.jsx)(j.c, {
                                                exact: !0,
                                                to: "/about",
                                                className: "button-control",
                                                children: "About us"
                                            }), Object(v.jsx)(j.c, {
                                                exact: !0,
                                                to: "/contact",
                                                className: "button-control",
                                                children: "Contact us"
                                            }), Object(v.jsx)(j.c, {
                                                exact: !0,
                                                to: "/support",
                                                className: "button-control extra-nav",
                                                children: " Support "
                                            }), Object(v.jsx)(j.c, {
                                                exact: !0,
                                                to: "/blog",
                                                className: "button-control extra-nav",
                                                children: " Blog "
                                            }), Object(v.jsx)(j.c, {
                                                exact: !0,
                                                to: "/terms_and_conditions",
                                                className: "button-control extra-nav",
                                                children: " Terms and Conditions "
                                            })]
                                        }), Object(v.jsx)("div", {
                                            className: o,
                                            onClick: O
                                        })]
                                    }), Object(v.jsxs)("div", {
                                        className: "mobile-menu",
                                        children: [Object(v.jsx)(j.c, {
                                            to: "#",
                                            className: "search-menu mobile-icons",
                                            children: Object(v.jsx)(d.e, {})
                                        }), Object(v.jsx)("a", {
                                            href: u + "/login",
                                            className: "profile-menu mobile-icons",
                                            children: Object(v.jsx)(d.h, {})
                                        }), Object(v.jsx)("div", {
                                            className: "more-options mobile-icons cursor-pointer",
                                            onClick: function() {
                                                return O()
                                            },
                                            children: Object(v.jsx)(d.b, {})
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                g = c(52),
                N = function(e) {
                    var t = [];
                    "platforms" === e.name ? t = [{
                        link: null,
                        src: "/assets/images/icon/",
                        name: "appstore.png",
                        alt: "appstore"
                    }, {
                        link: "https://play.google.com/store/apps/details?id=com.globalonlinepay.GOP_Mobile_App",
                        src: "/assets/images/icon/",
                        name: "play-store.png",
                        alt: "playstore"
                    }, {
                        link: "/",
                        src: "/assets/images/icon/",
                        name: "web_app.png",
                        alt: "web-app"
                    }] : "weAccept" === e.name ? t = [{
                        link: null,
                        src: "/assets/images/icon/",
                        name: "UnionPay.jpeg",
                        alt: "UnionPay"
                    }, {
                        link: null,
                        src: "/assets/images/icon/",
                        name: "visa.jpeg",
                        alt: "visa"
                    }, {
                        link: null,
                        src: "/assets/images/icon/",
                        name: "mastercard.jpeg",
                        alt: "mastercard"
                    }] : "paymentPartners" === e.name && (t = []);
                    var c = t.map((function(e) {
                        return Object(v.jsx)("a", {
                            href: e.link,
                            children: Object(v.jsx)("img", {
                                className: "ml-10 mt-1",
                                src: e.src + e.name,
                                alt: e.alt
                            })
                        })
                    }));
                    return Object(v.jsx)(n.Fragment, {
                        children: c
                    })
                },
                _ = function() {
                    return Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)("footer", {
                            className: "footer",
                            children: Object(v.jsx)("div", {
                                className: "container",
                                children: Object(v.jsxs)("div", {
                                    className: "row",
                                    children: [Object(v.jsxs)("div", {
                                        className: "col-sm-12 col-md-4",
                                        children: [Object(v.jsxs)("div", {
                                            className: "merchant-footer text-left",
                                            children: [Object(v.jsx)("a", {
                                                href: h + "/merchant",
                                                className: "primary-bg button-control px-3 text-light become-merchant",
                                                children: "Become Merchant"
                                            }), Object(v.jsxs)("div", {
                                                className: "merchant-login mt-2",
                                                children: [Object(v.jsx)("a", {
                                                    href: h + "/login",
                                                    className: "primary-bg button-control text-light",
                                                    children: "Sign In"
                                                }), Object(v.jsx)("a", {
                                                    href: h + "/signup",
                                                    className: "primary-bg button-control text-light",
                                                    children: "Sign Up"
                                                })]
                                            })]
                                        }), Object(v.jsxs)("div", {
                                            className: "merchant-support mt-3",
                                            children: [Object(v.jsx)("span", {
                                                children: Object(v.jsx)("strong", {
                                                    children: " For Merchant Support "
                                                })
                                            }), Object(v.jsx)("span", {
                                                children: " WhatsApp / Viber at + 977 - 9844271872 "
                                            }), Object(v.jsx)("span", {
                                                children: " Or Email at admin@globalonlinepay.com "
                                            })]
                                        })]
                                    }), Object(v.jsx)("div", {
                                        className: "col-sm-12 col-md-4",
                                        children: Object(v.jsxs)("div", {
                                            className: "help",
                                            children: [Object(v.jsx)("span", {
                                                children: Object(v.jsx)("strong", {
                                                    children: " Help & Support "
                                                })
                                            }), Object(v.jsx)("span", {
                                                children: " Toll Free: ** ** ** ** * "
                                            }), Object(v.jsx)("span", {
                                                children: " Call: WhatsApp / Viber at + 977 - 9844271872 "
                                            }), Object(v.jsx)("span", {
                                                children: " Email: support@globalonlinepay.org "
                                            }), Object(v.jsx)("span", {
                                                children: " Phone: 01 - 4256218 "
                                            }), Object(v.jsxs)("div", {
                                                className: "social",
                                                children: [Object(v.jsx)("a", {
                                                    href: "https://www.facebook.com/globalonlinepay",
                                                    children: Object(v.jsx)(o.a, {
                                                        icon: g.a,
                                                        className: "facebook"
                                                    })
                                                }), Object(v.jsx)("a", {
                                                    href: "https://www.instagram.com/globalonlinepay/?hl=en",
                                                    children: Object(v.jsx)(o.a, {
                                                        icon: g.b,
                                                        className: "instagram"
                                                    })
                                                }), Object(v.jsx)("a", {
                                                    href: "https://twitter.com/GlobalOnlinePay",
                                                    children: Object(v.jsx)(o.a, {
                                                        icon: g.d,
                                                        className: "twitter"
                                                    })
                                                }), Object(v.jsx)("a", {
                                                    href: "https://www.linkedin.com/in/global-online-pay-15b6b4216/",
                                                    children: Object(v.jsx)(o.a, {
                                                        icon: g.c,
                                                        className: "linkedin"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "col-sm-12 col-md-4",
                                        children: Object(v.jsxs)("div", {
                                            className: "we-are",
                                            children: [Object(v.jsx)("div", {
                                                children: Object(v.jsx)("strong", {
                                                    children: "Our service platforms"
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "apps-link",
                                                children: Object(v.jsx)(N, {
                                                    name: "platforms"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), Object(v.jsxs)("div", {
                            className: "footer-down",
                            children: [Object(v.jsxs)("div", {
                                className: "footer-menu",
                                children: [Object(v.jsx)(j.c, {
                                    to: "#",
                                    className: "text-white",
                                    children: "Support"
                                }), Object(v.jsx)(j.c, {
                                    to: "#",
                                    className: "text-white",
                                    children: "Blog"
                                }), Object(v.jsx)(j.c, {
                                    exact: !0,
                                    to: "/terms_and_conditions",
                                    className: "text-white",
                                    children: "Terms & conditions"
                                })]
                            }), Object(v.jsxs)("div", {
                                className: "copyright",
                                children: [Object(v.jsx)("div", {
                                    className: "my-1 d-inline",
                                    children: "\xa9 Global Online Pay | Powered by Bytes Panda"
                                }), Object(v.jsx)("div", {
                                    className: "mx-1 d-inline",
                                    children: (new Date).getFullYear()
                                })]
                            }), Object(v.jsx)("div", {
                                className: "we-accept d-inline",
                                children: Object(v.jsx)("div", {
                                    className: "accepts",
                                    children: Object(v.jsx)(N, {
                                        name: "weAccept"
                                    })
                                })
                            })]
                        })]
                    })
                };
            var y = function(e) {
                    return Object(v.jsxs)("section", {
                        className: "text-center",
                        children: [Object(v.jsx)("h3", {
                            children: "OOPS!!!"
                        }), Object(v.jsx)("div", {
                            className: "warning-image",
                            children: Object(v.jsx)("img", {
                                src: "/assets/images/feature/oops.png"
                            })
                        }), Object(v.jsx)("h3", {
                            children: "Page not found"
                        }), Object(v.jsx)(j.b, {
                            to: "/",
                            className: "secondary-bg text-center mt-3 mx-3 d-inline-block open-vote-menu text-white",
                            children: "HomePage"
                        }), Object(v.jsx)(j.b, {
                            to: "/contact",
                            className: "secondary-bg text-center mt-3 d-inline-block open-vote-menu text-white",
                            children: "Contact us"
                        })]
                    })
                },
                w = c(37),
                I = c.n(w),
                E = (c(57), c(58), c(39));
            var S = function(e) {
                var t = Object(n.useState)(!0),
                    c = Object(l.a)(t, 2),
                    s = c[0],
                    a = c[1],
                    i = function() {
                        return a(!1)
                    },
                    r = Object(n.useState)([]),
                    o = Object(l.a)(r, 2),
                    d = o[0],
                    j = o[1];
                if (Object(n.useEffect)((function() {
                        fetch(b + "/api/advertisement/" + e.name).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            j(e)
                        }))
                    }), []), d.length > 0) {
                    var m = d.map((function(t) {
                        var c = t.advertisement_company_link;

                        function n() {
                            return Object(v.jsx)("img", {
                                src: b + "/images/advertisement/" + t.advertisement_image,
                                alt: t.advertisement_name,
                                className: "avatar-img"
                            })
                        }
                        if ("popup" == e.name) {
                            var a = (new Date).getTime(),
                                r = localStorage.getItem("setupTime");
                            return r ? (a - r > 3e5 && localStorage.clear(), null) : (localStorage.setItem("setupTime", a), Object(v.jsx)(E.a, {
                                show: s,
                                onHide: i,
                                size: "lg",
                                children: Object(v.jsxs)(E.a.Body, {
                                    children: [Object(v.jsx)("button", {
                                        className: "btn btn-sm btn-danger popup-skip",
                                        onClick: i,
                                        children: "skip"
                                    }), n(), Object(v.jsxs)("div", {
                                        className: "text-center",
                                        children: [Object(v.jsxs)("span", {
                                            className: "d-block",
                                            children: ["Powered by ", Object(v.jsx)("a", {
                                                href: "https://bytespanda.com",
                                                children: "Bytespanda"
                                            })]
                                        }), c && Object(v.jsx)("span", {
                                            className: "d-block",
                                            children: Object(v.jsx)("a", {
                                                href: c,
                                                className: "text-info",
                                                children: "For more info click here"
                                            })
                                        })]
                                    })]
                                })
                            }))
                        }
                        return "homepage_slider" == e.name || "eventpage_slider" == e.name || "event_detailpage_slider" == e.name || e.name, Object(v.jsxs)("div", {
                            className: "item my-2",
                            children: [c && Object(v.jsxs)("a", {
                                href: c,
                                children: [" ", n()]
                            }), !c && Object(v.jsxs)("div", {
                                children: [" ", n()]
                            })]
                        })
                    }));
                    if ("popup" == e.name) return Object(v.jsx)("div", {
                        className: "",
                        children: m
                    });
                    if ("homepage_slider" == e.name || "eventpage_slider" == e.name || "event_detailpage_slider" == e.name || "votingpage_slider" == e.name) {
                        var h = e.name + " owl-theme";
                        return Object(v.jsx)("div", {
                            className: e.name,
                            children: Object(v.jsx)(I.a, {
                                items: 1,
                                className: h,
                                loop: !0,
                                margin: 5,
                                nav: !1,
                                navClass: ["owl-prev", "owl-next"],
                                navText: ['<img src="assets/images/icon/back.png">', '<img src="assets/images/icon/next.png">'],
                                dots: !1,
                                autoplay: !0,
                                autoplayTimeout: 5e3,
                                children: m
                            })
                        })
                    }
                    return Object(v.jsx)("div", {
                        className: "",
                        children: m
                    })
                }
                return null
            };
            var C = function() {
                    var e = Object(n.useState)([]),
                        t = Object(l.a)(e, 2),
                        c = t[0],
                        s = t[1];
                    if (Object(n.useEffect)((function() {
                            fetch(m + "/publicApi/featuredList").then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                s(e)
                            }))
                        }), []), c.length > 0) {
                        var a = c.map((function(e) {
                            return Object(v.jsx)("div", {
                                className: "item",
                                children: Object(v.jsx)("img", {
                                    src: m + e.adImage[e.adImage.length - 1].filePath,
                                    alt: ""
                                })
                            })
                        }));
                        return Object(v.jsx)("section", {
                            className: "feature_images",
                            children: Object(v.jsx)(I.a, {
                                items: 1,
                                className: "owl-theme",
                                loop: !0,
                                margin: 5,
                                nav: !1,
                                navClass: ["owl-prev", "owl-next"],
                                navText: ['<img src="assets/images/icon/back.png">', '<img src="assets/images/icon/next.png">'],
                                dots: !1,
                                autoplay: !0,
                                autoplayTimeout: 5e3,
                                children: a
                            })
                        })
                    }
                    return null
                },
                A = function() {
                    return Object(v.jsx)("section", {
                        className: "our_moto",
                        children: Object(v.jsx)("div", {
                            className: "container",
                            children: Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsxs)("div", {
                                    className: "col-sm-12",
                                    children: [Object(v.jsx)("div", {
                                        className: "button-control secondary-bg ",
                                        children: "Live Events Votes"
                                    }), Object(v.jsx)("div", {
                                        className: "moto",
                                        children: "Enhance your events ideas with powerful, responsive, global online pay system."
                                    })]
                                })
                            })
                        })
                    })
                },
                T = function() {
                    return Object(v.jsxs)("section", {
                        className: "service primary-bg",
                        children: [Object(v.jsx)("div", {
                            className: "title",
                            children: "Our other online services"
                        }), Object(v.jsxs)("div", {
                            className: "services",
                            children: [Object(v.jsxs)("a", {
                                href: "https://rajyadainik.com/",
                                target: "_blank",
                                className: "service-type mt-1",
                                children: [Object(v.jsx)(o.a, {
                                    icon: ["fas", "newspaper"]
                                }), " News"]
                            }), Object(v.jsxs)("a", {
                                href: "https://gopbazar.com/",
                                className: "service-type mt-1",
                                children: [Object(v.jsx)(o.a, {
                                    icon: ["fas", "shopping-cart"]
                                }), " Shop"]
                            }), Object(v.jsxs)("a", {
                                href: b + "/forms",
                                className: "service-type mt-1",
                                children: [Object(v.jsx)(o.a, {
                                    icon: ["fas", "sticky-note"]
                                }), " Form"]
                            }), Object(v.jsxs)("a", {
                                href: b + "/tickets",
                                className: "service-type mt-1",
                                children: [Object(v.jsx)(o.a, {
                                    icon: ["fas", "ticket-alt"]
                                }), " Tickets"]
                            })]
                        })]
                    })
                },
                P = c(5),
                D = c(53),
                k = 3600,
                M = 86400,
                V = {
                    isPlaying: !0,
                    size: 50,
                    strokeWidth: 6
                },
                R = function(e, t) {
                    return Object(v.jsxs)("div", {
                        className: "time-wrapper",
                        children: [Object(v.jsx)("div", {
                            className: "time",
                            children: t
                        }), Object(v.jsx)("div", {
                            children: e
                        })]
                    })
                };

            function F(e) {
                function t(e) {
                    return e - (new Date).getTime() > 0
                }
                var c = "",
                    s = "",
                    a = Date.now() / 1e3;
                Date.now() > e.startTime ? (c = "CLOSES", s = e.endTime / 1e3) : (c = "STARTS", s = e.startTime / 1e3);
                var i = s - a,
                    r = Math.ceil(i / M) * M;
                return Object(v.jsxs)("div", {
                    className: "countdown-wrapper",
                    children: [t(e.endTime) && Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)("p", {
                            children: Object(v.jsxs)("span", {
                                children: [" VOTING ", c, " IN "]
                            })
                        }), Object(v.jsxs)("div", {
                            className: "classy-countdown-wrapper",
                            children: [Object(v.jsx)(D.a, Object(P.a)(Object(P.a)({}, V), {}, {
                                colors: "#4c5885",
                                duration: r,
                                initialRemainingTime: i,
                                className: "ml-2",
                                children: function(e) {
                                    var t, c = e.elapsedTime,
                                        n = e.color;
                                    return Object(v.jsx)("span", {
                                        style: {
                                            color: n
                                        },
                                        children: R("Days", (t = r - c, t / M | 0))
                                    })
                                }
                            })), Object(v.jsx)(D.a, Object(P.a)(Object(P.a)({}, V), {}, {
                                colors: "#8b473f",
                                duration: M,
                                initialRemainingTime: i % M,
                                onComplete: function(e) {
                                    return {
                                        shouldRepeat: i - e > k
                                    }
                                },
                                children: function(e) {
                                    var t, c = e.elapsedTime,
                                        n = e.color;
                                    return Object(v.jsx)("span", {
                                        style: {
                                            color: n
                                        },
                                        children: R("Hrs", (t = M - c, t % M / k | 0))
                                    })
                                }
                            })), Object(v.jsx)(D.a, Object(P.a)(Object(P.a)({}, V), {}, {
                                colors: "#B6DC76",
                                duration: k,
                                initialRemainingTime: i % k,
                                onComplete: function(e) {
                                    return {
                                        shouldRepeat: i - e > 60
                                    }
                                },
                                children: function(e) {
                                    var t, c = e.elapsedTime,
                                        n = e.color;
                                    return Object(v.jsx)("span", {
                                        style: {
                                            color: n
                                        },
                                        children: R("Min", (t = k - c, t % k / 60 | 0))
                                    })
                                }
                            })), Object(v.jsx)(D.a, Object(P.a)(Object(P.a)({}, V), {}, {
                                colors: "#98B06F",
                                duration: 60,
                                initialRemainingTime: i % 60,
                                onComplete: function(e) {
                                    return {
                                        shouldRepeat: i - e > 0
                                    }
                                },
                                children: function(e) {
                                    var t, c = e.elapsedTime,
                                        n = e.color;
                                    return Object(v.jsx)("span", {
                                        style: {
                                            color: n
                                        },
                                        children: R("Sec", (t = c, 60 - t | 0))
                                    })
                                }
                            }))]
                        })]
                    }), !t(e.endTime) && Object(v.jsx)("div", {
                        className: "text-danger",
                        children: "Voting period has ended!!! "
                    })]
                })
            }
            var U = function(e) {
                    return null == e ? "/assets/images/logo/xllogo.jpeg" : m + e[e.length - 1].filePath
                },
                B = Object(v.jsxs)("div", {
                    className: "success-animation",
                    children: [Object(v.jsxs)("svg", {
                        class: "checkmark",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 52 52",
                        children: [Object(v.jsx)("circle", {
                            class: "checkmark__circle",
                            cx: "26",
                            cy: "26",
                            r: "25",
                            fill: "none"
                        }), Object(v.jsx)("path", {
                            class: "checkmark__check",
                            fill: "none",
                            d: "M14.1 27.2l7.1 7.2 16.7-16.8"
                        })]
                    }), Object(v.jsx)("span", {
                        children: "Vote successful"
                    })]
                }),
                L = function(e) {
                    function t(e) {
                        return e - (new Date).getTime() > 0
                    }
                    var c = Object(n.useState)([]),
                        s = Object(l.a)(c, 2),
                        a = s[0],
                        i = s[1],
                        r = null,
                        o = "vote-timer";
                    if (Object(n.useEffect)((function() {
                            "ongoing" == e.name ? fetch(m + "/publicApi/event/list").then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                i(e)
                            })) : fetch(m + "/publicApi/event/upcomingEvents").then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                i(e)
                            }))
                        }), []), a.length > 0) {
                        "ongoing" == e.name ? r = "YES" : o = "d-none";
                        var d = function(e, c, n, s) {
                                var a = Date.now() > c;
                                return "ongoing" == e ? Object(v.jsxs)("div", {
                                    className: "countdown",
                                    children: [t(n) && Object(v.jsxs)("div", {
                                        className: o,
                                        children: [Object(v.jsx)(F, {
                                            startTime: c,
                                            endTime: n
                                        }), Object(v.jsx)(j.b, {
                                            to: "/event-details/" + s,
                                            className: "primary-bg open-vote-menu text-white",
                                            children: a ? "VOTE NOW" : "REVIEW"
                                        })]
                                    }), !t(n) && Object(v.jsx)("div", {
                                        className: "text-danger",
                                        children: "Voting period has ended!!! "
                                    })]
                                }) : Object(v.jsx)(v.Fragment, {})
                            },
                            b = a.map((function(t) {
                                if (t.isActive == r || "NO" == t.isActive) {
                                    if ("ongoing" == e.name) var c = "/event-details/" + t.id;
                                    else c = "#";
                                    return Object(v.jsx)("div", {
                                        className: "item event-section",
                                        children: Object(v.jsxs)("div", {
                                            className: "cart",
                                            children: [Object(v.jsx)("div", {
                                                className: "cart-img",
                                                children: Object(v.jsx)("img", {
                                                    src: U(t.imageUrl),
                                                    alt: t.eventName
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: e.name,
                                                children: Object(v.jsxs)("div", {
                                                    className: "cart-detail",
                                                    children: [Object(v.jsxs)(j.b, {
                                                        to: c,
                                                        children: [Object(v.jsx)("div", {
                                                            className: "text-center cart-name",
                                                            children: Object(v.jsx)("strong", {
                                                                children: t.eventName
                                                            })
                                                        }), Object(v.jsxs)("div", {
                                                            className: "cart-info sm-none",
                                                            children: [Object(v.jsxs)("p", {
                                                                children: [Object(v.jsx)("strong", {
                                                                    children: "Organizer: "
                                                                }), t.eventOrganizer]
                                                            }), Object(v.jsxs)("p", {
                                                                className: "info-event",
                                                                children: [Object(v.jsx)("strong", {
                                                                    children: "Info: "
                                                                }), t.shortDescription]
                                                            })]
                                                        })]
                                                    }), d(e.name, t.eventStartDate, t.eventEndDate, t.id)]
                                                })
                                            })]
                                        })
                                    })
                                }
                            }));
                        return Object(v.jsxs)("section", {
                            className: "",
                            children: [Object(v.jsxs)("div", {
                                className: "text-center",
                                children: [Object(v.jsxs)("span", {
                                    className: "secondary-bg text-capitalize event-title",
                                    children: [e.name, " event"]
                                }), Object(v.jsx)("span", {
                                    className: "title-underline"
                                })]
                            }), Object(v.jsx)(I.a, {
                                className: "owl-theme",
                                loop: !0,
                                margin: 5,
                                nav: !0,
                                navClass: ["owl-prev", "owl-next"],
                                navText: ['<img src="assets/images/icon/back.png">', '<img src="assets/images/icon/next.png">'],
                                dots: !1,
                                autoplay: !0,
                                autoplayTimeout: 5e3,
                                responsive: {
                                    0: {
                                        items: 1,
                                        dots: !1,
                                        nav: !1
                                    },
                                    768: {
                                        items: 2,
                                        dots: !1,
                                        nav: !1
                                    },
                                    991: {
                                        items: 3
                                    }
                                },
                                children: b
                            })]
                        })
                    }
                    return null
                };
            var G = function() {
                return Object(v.jsx)(L, {
                    name: "upcoming"
                })
            };
            var W = function() {
                    return Object(v.jsx)(L, {
                        name: "ongoing"
                    })
                },
                q = function(e) {
                    var t = "testimonial-wrapper " + e.display,
                        c = Object(n.useState)([]),
                        s = Object(l.a)(c, 2),
                        a = s[0],
                        i = s[1];
                    if (Object(n.useEffect)((function() {
                            fetch(b + "/api/testimonial").then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                i(e)
                            }))
                        }), []), a.length > 0) {
                        var r = a.map((function(e) {
                            var t = null;
                            if (e.testimonial_additional) t = "at " + e.testimonial_additional;
                            return Object(v.jsxs)("div", {
                                className: "testimonial",
                                children: [Object(v.jsx)("div", {
                                    className: "pic",
                                    children: Object(v.jsx)("img", {
                                        src: b + "/images/testimonial/" + e.testimonial_image,
                                        alt: e.testimonial_name,
                                        className: "avatar-img"
                                    })
                                }), Object(v.jsx)("h3", {
                                    className: "title",
                                    children: e.testimonial_name
                                }), Object(v.jsxs)("span", {
                                    className: "post",
                                    children: [e.testimonial_category, " ", t]
                                }), Object(v.jsx)("p", {
                                    className: "description",
                                    children: e.testimonial_detail
                                })]
                            }, e.testimonial_id)
                        }));
                        return Object(v.jsx)("section", {
                            id: "testimonial",
                            className: t,
                            children: Object(v.jsx)(I.a, {
                                className: "testimonial-carousel owl-carousel owl-theme",
                                loop: !0,
                                margin: 5,
                                dots: !0,
                                autoplay: !0,
                                autoplayTimeout: 5e3,
                                responsive: {
                                    0: {
                                        items: 1,
                                        dots: !1,
                                        nav: !1
                                    },
                                    600: {
                                        items: 1,
                                        dots: !1,
                                        nav: !1
                                    },
                                    991: {
                                        items: 1,
                                        margin: 20
                                    },
                                    1e3: {
                                        items: 1
                                    }
                                },
                                children: r
                            })
                        })
                    }
                    return null
                };
            var z = function(e) {
                return Object(v.jsx)("section", {
                    className: "loading",
                    children: Object(v.jsx)("img", {
                        src: "/assets/images/QRcodes/loading1.gif",
                        alt: "loader"
                    })
                })
            };
            var Q = function() {
                    return Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)(S, {
                            name: "popup"
                        }), Object(v.jsx)(C, {}), Object(v.jsx)(A, {}), Object(v.jsx)(T, {}), Object(v.jsx)(S, {
                            name: "homepage_slider"
                        }), Object(v.jsx)(S, {
                            name: "upcoming_top"
                        }), Object(v.jsx)(G, {}), Object(v.jsx)(S, {
                            name: "ongoing_top"
                        }), Object(v.jsx)(W, {}), Object(v.jsx)(S, {
                            name: "testimonial_top"
                        }), Object(v.jsx)(q, {
                            display: "testimonial-wrapper-hidden"
                        })]
                    })
                },
                H = c(44);
            var Y = c(59);
            var K = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1],
                        i = Object(n.useState)([]),
                        r = Object(l.a)(i, 2);
                    return r[0], r[1], Object(n.useEffect)((function() {
                        fetch(b + "/api/page/terms_and_conditions").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []), Object(v.jsx)("section", {
                        children: s.length > 0 ? Object(v.jsx)("div", {
                            className: "container",
                            children: Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsxs)("div", {
                                    className: "col-12",
                                    children: [Object(v.jsx)("div", {
                                        className: "text-center primary-bg title",
                                        children: Object(v.jsx)("h5", {
                                            className: "text-uppercase p-2",
                                            children: s[0].page_title
                                        })
                                    }), Object(v.jsxs)("section", {
                                        children: [" ", Object(Y.a)(s[0].page_detail)]
                                    })]
                                })
                            })
                        }) : null
                    })
                },
                X = (c(109), c(103), c(8)),
                J = function(e) {
                    function t(e) {
                        return e - (new Date).getTime() > 0
                    }
                    var c = Object(n.useState)([]),
                        s = Object(l.a)(c, 2),
                        a = s[0],
                        i = s[1],
                        r = e.match.params.category,
                        o = [];
                    if (Object(n.useEffect)((function() {
                            fetch(m + "/publicApi/event/list").then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                i(e)
                            }))
                        }), []), a.length > 0) {
                        var d = a.map((function(e) {
                                if ("" == e.eventCategory || null == e.eventCategory ? o.push("GENERAL") : o.push(e.eventCategory), "YES" == e.isActive && (e.eventCategory == r || void 0 == r || null == e.eventCategory || "" == e.eventCategory)) {
                                    var c = Date.now() > e.eventStartDate;
                                    return Object(v.jsx)("div", {
                                        className: "col-sm-6 col-12 col-md-6  col-lg-4",
                                        children: Object(v.jsx)("div", {
                                            className: "item event-section",
                                            children: Object(v.jsxs)("div", {
                                                className: "cart",
                                                children: [Object(v.jsx)("div", {
                                                    className: "cart-img",
                                                    children: Object(v.jsx)("img", {
                                                        src: U(e.imageUrl),
                                                        alt: e.eventName
                                                    })
                                                }), Object(v.jsx)("div", {
                                                    className: "events-detail-cart",
                                                    children: Object(v.jsxs)("div", {
                                                        className: "cart-detail",
                                                        children: [Object(v.jsxs)(j.b, {
                                                            to: "/event-details/" + e.id,
                                                            children: [Object(v.jsx)("div", {
                                                                className: "text-center cart-name",
                                                                children: Object(v.jsx)("strong", {
                                                                    children: e.eventName
                                                                })
                                                            }), Object(v.jsxs)("div", {
                                                                className: "cart-info sm-none",
                                                                children: [Object(v.jsxs)("p", {
                                                                    children: [Object(v.jsx)("strong", {
                                                                        children: "Organizer: "
                                                                    }), e.eventOrganizer]
                                                                }), Object(v.jsxs)("p", {
                                                                    className: "info-event",
                                                                    children: [Object(v.jsx)("strong", {
                                                                        children: "Info: "
                                                                    }), e.shortDescription]
                                                                })]
                                                            })]
                                                        }), Object(v.jsxs)("div", {
                                                            className: "countdown",
                                                            children: [t(e.eventEndDate) && Object(v.jsxs)("div", {
                                                                className: "vote-timer",
                                                                children: [Object(v.jsx)(F, {
                                                                    startTime: e.eventStartDate,
                                                                    endTime: e.eventEndDate
                                                                }), Object(v.jsx)(j.b, {
                                                                    to: "/event-details/" + e.id,
                                                                    className: "primary-bg open-vote-menu text-white",
                                                                    children: c ? "VOTE NOW" : "REVIEW"
                                                                })]
                                                            }), !t(e.eventEndDate) && Object(v.jsx)("div", {
                                                                className: "text-danger",
                                                                children: "Voting period has ended!!!"
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }
                            })),
                            b = Object(X.a)(new Set(o)).map((function(e) {
                                var t = e.split("_").join(" ");
                                return Object(v.jsx)("div", {
                                    className: "col-lg-3 col-md-4 col-6",
                                    children: Object(v.jsx)(j.c, {
                                        exact: !0,
                                        className: "sub-category menu-category",
                                        to: "/events/" + e,
                                        children: t
                                    })
                                })
                            }));
                        return Object(v.jsxs)(n.Fragment, {
                            children: [Object(v.jsx)(S, {
                                name: "popup"
                            }), Object(v.jsx)("section", {
                                children: Object(v.jsxs)("div", {
                                    className: "container",
                                    children: [Object(v.jsx)("div", {
                                        className: "row mb-2",
                                        children: Object(v.jsx)("div", {
                                            className: "col-12",
                                            children: Object(v.jsx)("div", {
                                                className: "text-center primary-bg title",
                                                children: Object(v.jsx)("h5", {
                                                    className: "text-uppercase p-2 ",
                                                    children: "Live Events"
                                                })
                                            })
                                        })
                                    }), Object(v.jsxs)("div", {
                                        className: "row mb-2",
                                        children: [Object(v.jsx)("div", {
                                            className: "col-12",
                                            children: Object(v.jsx)(S, {
                                                name: "eventpage_slider"
                                            })
                                        }), Object(v.jsx)("div", {
                                            className: "col-12",
                                            children: Object(v.jsx)(S, {
                                                name: "live_event"
                                            })
                                        })]
                                    }), Object(v.jsx)("div", {
                                        className: "row mb-2",
                                        children: Object(v.jsx)("div", {
                                            className: "col-12",
                                            children: Object(v.jsxs)("div", {
                                                className: "event-category row",
                                                children: [Object(v.jsx)("div", {
                                                    className: "col-lg-3 col-md-4 col-12",
                                                    children: Object(v.jsx)(j.c, {
                                                        exact: !0,
                                                        to: "/events",
                                                        className: "sub-category menu-category",
                                                        children: "ALL"
                                                    })
                                                }), b]
                                            })
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "row mb-2",
                                        children: d
                                    })]
                                })
                            })]
                        })
                    }
                    return null
                },
                Z = c(15),
                $ = c.n(Z),
                ee = c(22),
                te = c.n(ee),
                ce = function() {
                    var e = Object(H.a)(),
                        t = e.register,
                        c = e.handleSubmit,
                        s = (e.reset, Object(n.useState)(!1)),
                        a = Object(l.a)(s, 2),
                        i = a[0],
                        r = a[1],
                        d = Object(n.useState)(Math.floor(10 * Math.random())),
                        j = Object(l.a)(d, 2),
                        m = j[0],
                        h = j[1],
                        u = Object(n.useState)(Math.floor(10 * Math.random())),
                        O = Object(l.a)(u, 2),
                        x = O[0],
                        p = O[1];
                    return Object(v.jsxs)("section", {
                        className: "ftco-section",
                        children: [Object(v.jsx)("div", {
                            className: "container",
                            children: Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsx)("div", {
                                    className: "col-12",
                                    children: Object(v.jsx)("div", {
                                        className: "text-center primary-bg title",
                                        children: Object(v.jsx)("h5", {
                                            className: "text-uppercase p-2",
                                            children: "Contact us"
                                        })
                                    })
                                })
                            })
                        }), Object(v.jsx)("section", {
                            className: "container",
                            children: Object(v.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [Object(v.jsx)("div", {
                                    className: "col-sm-12",
                                    children: Object(v.jsxs)("div", {
                                        className: "contact-wrap d-md-flex",
                                        children: [Object(v.jsx)("div", {
                                            className: "info-contact p-4 p-lg-5 text-left d-flex align-items-center order-md-last",
                                            children: Object(v.jsxs)("div", {
                                                children: [Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)(o.a, {
                                                        icon: ["fas", "location"]
                                                    }), "Bagbazar, Kathmandu, State-3, Nepal"]
                                                }), Object(v.jsx)("p", {
                                                    children: "+977-980-9649-541, +977-01-4256-218"
                                                }), Object(v.jsx)("p", {
                                                    children: "support@globalonlinepay.org"
                                                })]
                                            })
                                        }), Object(v.jsxs)("div", {
                                            className: "contact-wrapper p-4 p-lg-5",
                                            children: [Object(v.jsx)("div", {
                                                className: "d-flex",
                                                children: Object(v.jsx)("div", {
                                                    className: "w-100",
                                                    children: Object(v.jsx)("h3", {
                                                        className: "mb-4",
                                                        children: "Contact Information"
                                                    })
                                                })
                                            }), Object(v.jsxs)("form", {
                                                onSubmit: c((function(e) {
                                                    var t;
                                                    e.solveCaptcha == m + x ? "" != e.fullName && ("" != e.phone || "" != e.email && (t = e.email, /\S+@\S+\.\S+/.test(t))) && "" != e.detail && (h(Math.floor(10 * Math.random())), p(Math.floor(10 * Math.random())), r(!0), $.a.post(b + "/api/add_contact", {
                                                        contact_fullname: e.fullName,
                                                        contact_email: e.email,
                                                        contact_phone: e.phone,
                                                        contact_detail: e.detail
                                                    }).then((function(e) {
                                                        "" != e.data && 201 == e.data.statusCode && "success" == e.data.result ? (te.a.fire("Submitted", "Your message has been send we will reply you soon", "success"), document.getElementById("contact-form").reset(), r(!1)) : (te.a.fire("Sorry", "Somting went wrong please try again later", "error"), r(!1))
                                                    })).catch((function(e) {}))) : te.a.fire("Sorry", "Solve captcha first", "error")
                                                })),
                                                id: "contact-form",
                                                children: [Object(v.jsxs)("div", {
                                                    className: "row",
                                                    children: [Object(v.jsx)("div", {
                                                        className: "col-sm-6",
                                                        children: Object(v.jsx)("div", {
                                                            className: "form-group mb-3",
                                                            children: Object(v.jsx)("input", Object(P.a)(Object(P.a)({
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "Your name"
                                                            }, t("fullName")), {}, {
                                                                required: !0
                                                            }))
                                                        })
                                                    }), Object(v.jsx)("div", {
                                                        className: "col-sm-6",
                                                        children: Object(v.jsx)("div", {
                                                            className: "form-group mb-3",
                                                            children: Object(v.jsx)("input", Object(P.a)(Object(P.a)({
                                                                type: "number",
                                                                className: "form-control",
                                                                placeholder: "Phone"
                                                            }, t("phone")), {}, {
                                                                required: !0
                                                            }))
                                                        })
                                                    }), Object(v.jsx)("div", {
                                                        className: "col-sm-12",
                                                        children: Object(v.jsx)("div", {
                                                            className: "form-group mb-3",
                                                            children: Object(v.jsx)("input", Object(P.a)(Object(P.a)({
                                                                type: "email",
                                                                className: "form-control",
                                                                placeholder: "Email"
                                                            }, t("email")), {}, {
                                                                required: !0
                                                            }))
                                                        })
                                                    }), Object(v.jsx)("div", {
                                                        className: "col-sm-12",
                                                        children: Object(v.jsx)("div", {
                                                            className: "form-group mb-3",
                                                            children: Object(v.jsx)("textarea", Object(P.a)(Object(P.a)({
                                                                rows: 6,
                                                                className: "form-control",
                                                                placeholder: "Message"
                                                            }, t("detail")), {}, {
                                                                required: !0
                                                            }))
                                                        })
                                                    }), Object(v.jsxs)("div", {
                                                        className: "col-sm-12",
                                                        children: [Object(v.jsx)("h6", {
                                                            className: "font-weight-bold text-uppercase",
                                                            children: "Solve Captcha"
                                                        }), Object(v.jsx)("div", {
                                                            className: "row",
                                                            children: Object(v.jsx)("div", {
                                                                className: "col-sm-6",
                                                                children: Object(v.jsxs)("div", {
                                                                    className: "form-group mb-3 d-flex align-items-center",
                                                                    children: [Object(v.jsxs)("span", {
                                                                        className: "text-nowrap",
                                                                        children: [m, " + ", x, " ="]
                                                                    }), Object(v.jsx)("input", Object(P.a)(Object(P.a)({
                                                                        className: "form-control",
                                                                        placeholder: "Answer"
                                                                    }, t("solveCaptcha")), {}, {
                                                                        required: !0
                                                                    }))]
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }), Object(v.jsx)("div", {
                                                    className: "form-group",
                                                    children: Object(v.jsx)("button", {
                                                        disabled: i,
                                                        type: "submit",
                                                        className: "form-control button-control primary-bg submit px-3",
                                                        children: "Send"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }), Object(v.jsx)("div", {
                                    className: "col-12",
                                    children: Object(v.jsx)("div", {
                                        className: "map-location mt-3",
                                        children: Object(v.jsx)("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3582256202403!2d85.3150117143435!3d27.706223832149742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fbd924916d%3A0x4ad5e6e3bb5666a1!2sGlobal%20Online%20Pay!5e0!3m2!1sen!2snp!4v1625549186614!5m2!1sen!2snp",
                                            width: "100%",
                                            height: "450",
                                            frameborder: "0",
                                            allowfullscreen: "",
                                            "aria-hidden": "false",
                                            tabindex: "0",
                                            loading: "lazy"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                ne = function(e) {
                    var t = Object(n.useState)(!1),
                        c = Object(l.a)(t, 2),
                        s = (c[0], c[1], Object(n.useState)([])),
                        a = Object(l.a)(s, 2),
                        i = a[0],
                        r = a[1],
                        o = Object(n.useState)([]),
                        d = Object(l.a)(o, 2);
                    d[0], d[1];
                    Object(n.useEffect)((function() {
                        fetch(b + "/api/page/about_us").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            r(e)
                        }))
                    }), []);
                    return Object(v.jsx)("section", {
                        children: i.length > 0 ? Object(v.jsx)("div", {
                            className: "container",
                            children: Object(v.jsxs)("div", {
                                className: "row",
                                children: [Object(v.jsxs)("div", {
                                    className: "col-12",
                                    children: [Object(v.jsx)("div", {
                                        className: "text-center primary-bg title",
                                        children: Object(v.jsx)("h5", {
                                            className: "text-uppercase p-2",
                                            children: i[0].page_title
                                        })
                                    }), Object(v.jsxs)("section", {
                                        children: [" ", Object(Y.a)(i[0].page_detail)]
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "col-12",
                                    children: [" ", Object(v.jsx)(q, {
                                        display: "show"
                                    })]
                                })]
                            })
                        }) : null
                    })
                },
                se = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1];
                    if (Object(n.useEffect)((function() {
                            fetch(m + "/publicApi/event/childList/" + e.eventId).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                a(e)
                            }))
                        }), []), "" != s) {
                        var i = s.map((function(t) {
                            return Object(v.jsx)("div", {
                                className: "col-lg-3 col-md-4 col-6",
                                children: Object(v.jsx)(j.b, {
                                    className: "sub-category",
                                    to: "/event-details-models/" + e.eventId + "/" + t.id,
                                    children: t.eventName
                                })
                            })
                        }));
                        return Object(v.jsx)("div", {
                            className: "row mb-2",
                            children: Object(v.jsx)("div", {
                                className: "col-12",
                                children: Object(v.jsx)("div", {
                                    className: "event-category row",
                                    children: i
                                })
                            })
                        })
                    }
                    return null
                },
                ae = function(e) {
                    return 1 == e.hasChildren ? Object(v.jsx)(se, {
                        eventId: e.eventId
                    }) : Object(v.jsx)(r.a, {
                        to: "/event-details-models/" + e.eventId + "/" + e.eventId
                    })
                },
                ie = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1],
                        i = Object(n.useState)([]),
                        r = Object(l.a)(i, 2),
                        o = r[0],
                        d = r[1];
                    Object(n.useEffect)((function() {
                        fetch(m + "/publicApi/event/" + e.match.params.id).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []), Object(n.useEffect)((function() {
                        fetch(b + "/api/eventDetail/" + e.match.params.id).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            d(e)
                        }))
                    }), [!!s]);
                    var j = function(e) {
                            if ("" != o) {
                                if ("social_links" == e && o.event_social.length > 0) {
                                    var t = [];
                                    return o.event_social.forEach((function(e, c) {
                                        "yes" == e.social_is_visible && t.push(Object(v.jsx)("a", {
                                            href: e.social_url,
                                            className: "event_social_icon",
                                            target: "_blank",
                                            children: Object(v.jsx)("img", {
                                                src: b + "/images/siteSettings/" + e.social_image,
                                                alt: e.social_name
                                            })
                                        }, c))
                                    })), t
                                }
                                if ("event_feature_videos" == e && o.event_feature_videos.length > 0) {
                                    var c = [];
                                    return o.event_feature_videos.forEach((function(e, t) {
                                        c.push(Object(v.jsxs)("div", {
                                            className: "event_feature_video_single cart",
                                            onClick: function(t) {
                                                return h(e.video_title, e.video_link)
                                            },
                                            children: [Object(v.jsx)("div", {
                                                className: "event_feature_video_image",
                                                children: Object(v.jsx)("img", {
                                                    src: "https://i.ytimg.com/vi/" + e.video_link + "/hqdefault.jpg"
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "video-detail",
                                                children: Object(v.jsxs)("h5", {
                                                    className: "m-2",
                                                    children: [e.video_title.substr(0, 30), e.video_title.length > 30 && "..."]
                                                })
                                            })]
                                        }))
                                    })), c
                                }
                                return []
                            }
                            return []
                        },
                        h = function(e, t) {
                            te.a.fire({
                                html: '<iframe width="100%"  class="model-video-player" src="https://www.youtube.com/embed/' + t + '?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1" title="' + e + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h4>' + e + '</h4><h6 class=" font-weight-normal mt-2">Powered by Bytespanda</h6>',
                                showCloseButton: !0,
                                showConfirmButton: !1
                            }).then((function(e) {
                                document.querySelector("iframe").setAttribute("src", "")
                            }))
                        };
                    return "" != s ? Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)(S, {
                            name: "popup"
                        }), Object(v.jsx)("section", {
                            children: Object(v.jsxs)("div", {
                                className: "container",
                                children: [Object(v.jsx)("div", {
                                    className: "row mb-2",
                                    children: Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)("div", {
                                            className: "text-center primary-bg title",
                                            children: Object(v.jsx)("h5", {
                                                className: "text-uppercase p-2",
                                                children: s.eventName
                                            })
                                        })
                                    })
                                }), Object(v.jsxs)("div", {
                                    className: "row mb-2",
                                    children: [Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)(S, {
                                            name: "event_detailpage_slider"
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)(S, {
                                            name: "event_detail"
                                        })
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "row event-detail mb-2",
                                    children: [Object(v.jsx)("div", {
                                        className: "col-sm-6 col-12 col-md-6 col-lg-6",
                                        children: Object(v.jsx)("div", {
                                            className: "event-detail-img",
                                            children: Object(v.jsx)("img", {
                                                src: U(s.imageUrl),
                                                alt: s.eventName
                                            })
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "col-sm-6 col-12 col-md-6 col-lg-6",
                                        children: Object(v.jsx)("div", {
                                            className: "cart-detail",
                                            children: Object(v.jsxs)("div", {
                                                className: "",
                                                children: [Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Event:"
                                                    }), s.eventName]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Info:"
                                                    }), s.shortDescription]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Org.: "
                                                    }), s.eventOrganizer]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Start Date: "
                                                    }), new Date(s.eventStartDate).toLocaleDateString()]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "End Date: "
                                                    }), new Date(s.eventEndDate).toLocaleDateString()]
                                                }), j("social_links").length > 0 && Object(v.jsxs)("p", {
                                                    className: "d-inline-flex",
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Social media: "
                                                    }), Object(v.jsx)("div", {
                                                        className: "event_social_collection",
                                                        children: j("social_links")
                                                    })]
                                                }), Object(v.jsx)("p", {
                                                    className: "time-left",
                                                    children: Object(v.jsx)(F, {
                                                        startTime: s.eventStartDate,
                                                        endTime: s.eventEndDate
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                }), j("event_feature_videos").length > 0 && Object(v.jsx)("div", {
                                    className: "event_feature_videos_collection_wrapper",
                                    children: Object(v.jsx)("div", {
                                        className: "event_feature_videos_collection",
                                        children: j("event_feature_videos")
                                    })
                                }), Object(v.jsx)(ae, {
                                    hasChildren: s.hasChildren,
                                    eventId: e.match.params.id
                                })]
                            })
                        })]
                    }) : null
                },
                re = c(104),
                le = c.n(re),
                oe = c(105),
                de = c(106),
                je = function(e) {
                    var t = Object(n.useState)(!1),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1],
                        i = Object(n.useState)(),
                        r = Object(l.a)(i, 2),
                        o = r[0],
                        b = r[1],
                        h = Object(n.useState)(""),
                        u = Object(l.a)(h, 2),
                        O = u[0],
                        x = u[1],
                        p = Object(n.useState)(""),
                        f = Object(l.a)(p, 2),
                        g = f[0],
                        N = f[1],
                        _ = Object(n.useState)(""),
                        y = Object(l.a)(_, 2),
                        w = y[0],
                        I = y[1],
                        S = Object(n.useState)([]),
                        C = Object(l.a)(S, 2),
                        A = (C[0], C[1]),
                        T = Object(n.useState)("/assets/images/QRcodes/clickQr.jpeg"),
                        P = Object(l.a)(T, 2),
                        D = P[0],
                        k = P[1],
                        M = Object(n.useState)(""),
                        V = Object(l.a)(M, 2),
                        R = V[0],
                        F = V[1],
                        U = Object(n.useState)(""),
                        L = Object(l.a)(U, 2),
                        G = L[0],
                        W = L[1],
                        q = Object(n.useState)(!1),
                        z = Object(l.a)(q, 2),
                        Q = z[0],
                        H = z[1],
                        Y = function() {
                            x(""), k("/assets/images/QRcodes/clickQr.jpeg"), a(!1), F(""), H(!1)
                        },
                        K = function(e) {
                            fetch(m + "/publicApi/event/" + e).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                b(e), I(e.perVoteCost)
                            })).catch((function(e) {
                                console.log(e)
                            }))
                        };
                    Object(n.useEffect)((function() {
                        K(e.eventId)
                    }), []), Object(n.useEffect)((function() {
                        o && o.hasParent && K(o.parentEventId)
                    }), [!!o]);
                    var X = function(e) {
                        k("/assets/images/QRcodes/loading1.gif"), W("Processing payment...");
                        var t = JSON.parse(e),
                            c = JSON.parse(t.transactionStatus);
                        c.hasOwnProperty("paymentSuccess") && $.a.post(m + "/api/fonepayqr/fonepayQRValidate", c).then((function(e) {
                            F(B), k(""), k("/assets/images/QRcodes/qr.png"), W(""), H(!1)
                        })).catch((function(e) {
                            console.log(e)
                        }))
                    };
                    return Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)("a", {
                            onClick: function() {
                                e.disabled ? te.a.fire({
                                    icon: "error",
                                    title: "Vote has been ended !!!",
                                    showConfirmButton: !1,
                                    timer: 1500
                                }) : a(!0)
                            },
                            className: "secondary-bg button-control mr-2",
                            children: "Get QR"
                        }), Object(v.jsxs)(E.a, {
                            show: s,
                            onHide: function() {
                                Q ? te.a.fire({
                                    title: "Do you want to cancel the voting?",
                                    showCancelButton: !0,
                                    confirmButtonText: "Close vote",
                                    confirmButtonColor: "#503047"
                                }).then((function(e) {
                                    e.isConfirmed && (Y(), te.a.fire({
                                        icon: "success",
                                        title: "Close vote !",
                                        showConfirmButton: !1,
                                        timer: 1500
                                    }))
                                })) : Y()
                            },
                            children: [Object(v.jsx)(E.a.Header, {
                                closeButton: !0,
                                children: Object(v.jsx)(E.a.Title, {
                                    children: "VOTE FROM HERE"
                                })
                            }), Object(v.jsx)(E.a.Body, {
                                children: Object(v.jsx)("div", {
                                    className: "form-card",
                                    children: Object(v.jsxs)("form", {
                                        onSubmit: function(t) {
                                            t.preventDefault(), F(""), o && (O >= 10 ? (N(""), k("/assets/images/QRcodes/loading1.gif"), W("Generating QR code..."), $.a.post(m + "/api/fonepayqr", {
                                                amount: O * o.perVoteCost,
                                                eventId: o.id,
                                                modelId: e.modelId,
                                                noOfVotes: O
                                            }).then((function(e) {
                                                var t;
                                                console.log(e.data), "" != e.data && 201 == e.data.statusCode && (! function(e) {
                                                    var t = new oe.w3cwebsocket(e);
                                                    t.onopen = function() {}, t.onmessage = function(e) {
                                                        X(e.data)
                                                    }
                                                }(e.data.thirdpartyQrWebSocketUrl), A(e.data), W(""), t = e.data.qrMessage, le.a.toDataURL(t).then((function(e) {
                                                    k(e)
                                                })), H(15e4))
                                            })).catch((function(e) {
                                                console.log(e)
                                            }))) : (k("/assets/images/QRcodes/clickQr.jpeg"), N("Please vote more then 10 votes")))
                                        },
                                        children: [Object(v.jsxs)("div", {
                                            className: "form-group mb-3",
                                            children: [Object(v.jsx)("label", {
                                                className: "label",
                                                for: "name",
                                                children: Object(v.jsx)("strong", {
                                                    children: "Number of votes"
                                                })
                                            }), Object(v.jsxs)("div", {
                                                class: "input-group-qr attach-input",
                                                children: [Object(v.jsx)("input", {
                                                    type: "number",
                                                    className: "form-control",
                                                    min: "1",
                                                    placeholder: "Enter No. of vote",
                                                    value: O,
                                                    onChange: function(e) {
                                                        return x(e.target.value)
                                                    }
                                                }), Object(v.jsx)("div", {
                                                    class: "input-group-prepend",
                                                    children: Object(v.jsx)("button", {
                                                        type: "submit",
                                                        class: "input-group-text  button-control primary-bg ",
                                                        children: "Get QR"
                                                    })
                                                })]
                                            })]
                                        }), Object(v.jsxs)("div", {
                                            className: "qr-section",
                                            children: [Object(v.jsx)("div", {
                                                className: "text-center ",
                                                children: Object(v.jsx)("strong", {
                                                    children: "QR code scan via"
                                                })
                                            }), Object(v.jsx)("p", {
                                                className: "text-danger text-uppercase",
                                                children: g
                                            }), Object(v.jsxs)("p", {
                                                className: "text-info text-uppercase",
                                                children: ["We accept minimum 10 Votes and maximum unlimited Votes in one time (1 Vote = NPR. ", w, " /-.)"]
                                            }), Object(v.jsx)("span", {
                                                children: "FonePay, M-Banking, Esewa, IMEpay, UnionPay, Prabhu Pay , Cell Pay, Khalti, mDabali"
                                            }), Object(v.jsx)("div", {
                                                className: "set-qr-timer",
                                                children: Q && Object(v.jsx)(de.a, {
                                                    date: Date.now() + Q,
                                                    renderer: function(e) {
                                                        e.hours;
                                                        var t = e.minutes,
                                                            c = e.seconds;
                                                        return e.completed ? (Y(), null) : Object(v.jsxs)(v.Fragment, {
                                                            children: ["QR expire in", Object(v.jsxs)("span", {
                                                                children: [t, " min: ", c, " sec"]
                                                            })]
                                                        })
                                                    }
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "qr-img text-center mt-2",
                                                children: Object(v.jsxs)("div", {
                                                    className: "qr-image-center",
                                                    children: [Object(v.jsx)("img", {
                                                        src: D
                                                    }), Object(v.jsx)("span", {
                                                        className: "status",
                                                        children: G
                                                    }), R]
                                                })
                                            }), Object(v.jsxs)("div", {
                                                className: "alert alert-warning mt-4 mb-0",
                                                role: "alert",
                                                children: [Object(v.jsx)(d.d, {}), Object(v.jsx)("strong", {
                                                    children: " Note: "
                                                }), "The above QR is valid for 3 mins. Thank you. For assistance please contact:", Object(v.jsx)("strong", {
                                                    children: "+977-01-4256218, Whatsapp +977-9809649541 | +977-9844271872"
                                                }), "in case of confusion.", Object(v.jsxs)("div", {
                                                    children: ["When you vote, you agree to our ", Object(v.jsx)(j.c, {
                                                        exact: !0,
                                                        to: "/terms_and_conditions",
                                                        target: "_blank",
                                                        className: "text-decoration-underline",
                                                        children: Object(v.jsx)("strong", {
                                                            children: "T&C"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                },
                me = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1],
                        i = Object(n.useState)([]),
                        r = Object(l.a)(i, 2),
                        o = r[0],
                        d = r[1];
                    if (Object(n.useEffect)((function() {
                            fetch(m + "/publicApi/model/list/" + e.eventCategoryId).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                a(e)
                            })), fetch(m + "/publicApi/event/" + e.eventCategoryId).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                d(e)
                            }))
                        }), []), s.length > 0) {
                        var b = s.map((function(t) {
                            var c, n = t.modelName.replace(/[0-9]/g, "").replace(".", "").trim(),
                                s = t.modelName.replace(/[a-z]/g, "").replace(/[A-Z]/g, "").replace(".", "").replace(". ", "").replace(" .", "").trim(),
                                a = t.serialNo;
                            a || (a = isNaN(s) ? "" : s);
                            var i = null !== (c = t.isEliminated) && void 0 !== c ? c : "false",
                                r = Date.now() > e.startTime;
                            return Object(v.jsx)("div", {
                                className: "col-sm-6 col-12 col-md-6 col-lg-4",
                                children: Object(v.jsx)("div", {
                                    className: "item",
                                    children: Object(v.jsxs)("div", {
                                        className: "cart event-model-cart",
                                        children: [Object(v.jsxs)("div", {
                                            className: "cart-img",
                                            children: [Object(v.jsx)("img", {
                                                src: U(t.modelImage),
                                                alt: n
                                            }), "true" == i && Object(v.jsx)("div", {
                                                className: "eliminated",
                                                children: "Eliminated"
                                            }), a && Object(v.jsx)("div", {
                                                className: "tag-no",
                                                children: a
                                            })]
                                        }), Object(v.jsxs)("div", {
                                            className: "cart-detail",
                                            children: [Object(v.jsx)("div", {
                                                className: "text-center cart-name",
                                                children: Object(v.jsx)("strong", {
                                                    children: n
                                                })
                                            }), Object(v.jsxs)("div", {
                                                className: "cart-info",
                                                children: [r && "false" == i && Object(v.jsx)("p", {
                                                    children: e.endTime > 0 && Object(v.jsxs)("div", {
                                                        children: [Object(v.jsx)(je, {
                                                            eventId: e.eventCategoryId,
                                                            modelId: t.id
                                                        }), Object(v.jsx)(j.b, {
                                                            to: "/model-details/" + t.id,
                                                            className: "secondary-bg button-control",
                                                            children: "Vote Now"
                                                        })]
                                                    })
                                                }), "true" == i && Object(v.jsx)("span", {
                                                    children: "Vote not available"
                                                }) || !r && "false" == i && Object(v.jsx)("span", {
                                                    children: "Voting opens soon."
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        }));
                        return Object(v.jsxs)(n.Fragment, {
                            children: [1 == o.hasParent ? Object(v.jsx)("div", {
                                className: "row mb-2",
                                children: Object(v.jsx)("div", {
                                    className: "col-12",
                                    children: Object(v.jsxs)("div", {
                                        className: "event-category row",
                                        children: [Object(v.jsx)("div", {
                                            className: "col-lg-3 col-md-4 col-6 ",
                                            children: Object(v.jsx)("div", {
                                                className: "sub-category active",
                                                children: o.eventName
                                            })
                                        }), Object(v.jsx)("div", {
                                            className: "col-lg-3 col-md-4 col-6",
                                            children: Object(v.jsx)(j.b, {
                                                to: "/event-details/" + o.parentEventId,
                                                className: "sub-category",
                                                children: "Other Categories"
                                            })
                                        })]
                                    })
                                })
                            }) : null, Object(v.jsx)("div", {
                                className: "row participate-detail",
                                children: b
                            })]
                        })
                    }
                    return null
                },
                be = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1],
                        i = Object(n.useState)([]),
                        r = Object(l.a)(i, 2),
                        o = r[0],
                        d = r[1];
                    Object(n.useEffect)((function() {
                        fetch(m + "/publicApi/event/" + e.match.params.eventId).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []), Object(n.useEffect)((function() {
                        fetch(b + "/api/eventDetail/" + e.match.params.eventId).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            d(e)
                        }))
                    }), [!!s]);
                    var j = function(e) {
                            if ("" != o) {
                                if ("social_links" == e && o.event_social.length > 0) {
                                    var t = [];
                                    return o.event_social.forEach((function(e, c) {
                                        "yes" == e.social_is_visible && t.push(Object(v.jsx)("a", {
                                            href: e.social_url,
                                            className: "event_social_icon",
                                            target: "_blank",
                                            children: Object(v.jsx)("img", {
                                                src: b + "/images/siteSettings/" + e.social_image,
                                                alt: e.social_name
                                            })
                                        }, c))
                                    })), t
                                }
                                if ("event_feature_videos" == e && o.event_feature_videos.length > 0) {
                                    var c = [];
                                    return o.event_feature_videos.forEach((function(e, t) {
                                        c.push(Object(v.jsxs)("div", {
                                            className: "event_feature_video_single cart",
                                            onClick: function(t) {
                                                return h(e.video_title, e.video_link)
                                            },
                                            children: [Object(v.jsx)("div", {
                                                className: "event_feature_video_image",
                                                children: Object(v.jsx)("img", {
                                                    src: "https://i.ytimg.com/vi/" + e.video_link + "/hqdefault.jpg"
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "video-detail",
                                                children: Object(v.jsxs)("h5", {
                                                    className: "m-2",
                                                    children: [e.video_title.substr(0, 30), e.video_title.length > 30 && "..."]
                                                })
                                            })]
                                        }))
                                    })), c
                                }
                                return []
                            }
                            return []
                        },
                        h = function(e, t) {
                            te.a.fire({
                                html: '<iframe width="100%" class="model-video-player" src="https://www.youtube.com/embed/' + t + '?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1" title="' + e + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h4>' + e + '</h4><h6 class=" font-weight-normal mt-2">Powered by Bytespanda</h6>',
                                showCloseButton: !0,
                                showConfirmButton: !1
                            }).then((function(e) {
                                document.querySelector("iframe").setAttribute("src", "")
                            }))
                        };
                    return "" != s ? Object(v.jsxs)(n.Fragment, {
                        children: [Object(v.jsx)(S, {
                            name: "popup"
                        }), Object(v.jsx)("section", {
                            children: Object(v.jsxs)("div", {
                                className: "container",
                                children: [Object(v.jsx)("div", {
                                    className: "row mb-2",
                                    children: Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)("div", {
                                            className: "primary-bg text-center",
                                            children: Object(v.jsx)("h5", {
                                                className: "text-uppercase p-2",
                                                children: s.eventName
                                            })
                                        })
                                    })
                                }), Object(v.jsxs)("div", {
                                    className: "row mb-2",
                                    children: [Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)(S, {
                                            name: "event_detailpage_slider"
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "col-12",
                                        children: Object(v.jsx)(S, {
                                            name: "event_detail"
                                        })
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "row event-detail mb-2",
                                    children: [Object(v.jsx)("div", {
                                        className: "col-sm-6 col-12 col-md-6 col-lg-6 mb-2",
                                        children: Object(v.jsx)("div", {
                                            className: "event-detail-img",
                                            children: Object(v.jsx)("img", {
                                                src: U(s.imageUrl),
                                                alt: s.eventName
                                            })
                                        })
                                    }), Object(v.jsx)("div", {
                                        className: "col-sm-6 col-12 col-md-6 col-lg-6 mb-2",
                                        children: Object(v.jsx)("div", {
                                            className: "cart-detail",
                                            children: Object(v.jsxs)("div", {
                                                className: "",
                                                children: [Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Event:"
                                                    }), s.eventName]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Info:"
                                                    }), s.shortDescription]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Org.: "
                                                    }), s.eventOrganizer]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Start Date: "
                                                    }), new Date(s.eventStartDate).toLocaleDateString()]
                                                }), Object(v.jsxs)("p", {
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "End Date: "
                                                    }), new Date(s.eventEndDate).toLocaleDateString()]
                                                }), j("social_links").length > 0 && Object(v.jsxs)("p", {
                                                    className: "d-inline-flex",
                                                    children: [Object(v.jsx)("strong", {
                                                        children: "Social media: "
                                                    }), Object(v.jsx)("div", {
                                                        className: "event_social_collection",
                                                        children: j("social_links")
                                                    })]
                                                }), Object(v.jsx)("p", {
                                                    className: "time-left",
                                                    children: Object(v.jsx)(F, {
                                                        startTime: s.eventStartDate,
                                                        endTime: s.eventEndDate
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                }), j("event_feature_videos").length > 0 && Object(v.jsx)("div", {
                                    className: "event_feature_videos_collection_wrapper",
                                    children: Object(v.jsx)("div", {
                                        className: "event_feature_videos_collection",
                                        children: j("event_feature_videos")
                                    })
                                }), Object(v.jsx)(me, {
                                    eventCategoryId: e.match.params.eventCategoryId,
                                    startTime: s.eventStartDate,
                                    endTime: function(e) {
                                        var t = e - (new Date).getTime();
                                        return t <= 0 && (t = 0), t
                                    }(s.eventEndDate)
                                })]
                            })
                        })]
                    }) : null
                },
                he = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1];
                    return Object(n.useEffect)((function() {
                        fetch(m + "/publicApi/event/" + e.eventId).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []), "" != s ? Object(v.jsx)(n.Fragment, {
                        children: Object(v.jsxs)("p", {
                            children: [e.modelName, " is the participate of ", Object(v.jsx)("strong", {
                                children: s.eventName
                            }), " in the category of ", e.category, " which is organized by ", Object(v.jsx)("strong", {
                                children: s.eventOrganizer
                            }), "."]
                        })
                    }) : null
                },
                ue = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1];
                    return Object(n.useEffect)((function() {
                        fetch(m + "/publicApi/event/" + e.eventId).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []), "" != s ? s.hasParent ? Object(v.jsx)(he, {
                        eventId: s.parentEventId,
                        category: s.eventName,
                        modelName: e.modelName
                    }) : Object(v.jsx)(n.Fragment, {
                        children: Object(v.jsxs)("p", {
                            children: [e.modelName, " is the participate of ", Object(v.jsx)("strong", {
                                children: s.eventName
                            }), " which is organized by ", Object(v.jsx)("strong", {
                                children: s.eventOrganizer
                            }), "."]
                        })
                    }) : null
                },
                Oe = function(e) {
                    var t = e.modelInfo,
                        c = e.eventInfo;

                    function n(e) {
                        return e - (new Date).getTime() > 0
                    }
                    if ("" != t) {
                        var s, a = t.modelName.replace(/[0-9]/g, "").replace(".", "").trim(),
                            i = t.modelName.replace(/[a-z]/g, "").replace(/[A-Z]/g, "").replace(".", "").replace(". ", "").replace(" .", "").trim(),
                            r = t.serialNo;
                        r || (r = isNaN(i) ? "" : i);
                        var l = null !== (s = t.isEliminated) && void 0 !== s ? s : "false";
                        return Object(v.jsx)("div", {
                            className: "model-profile",
                            children: Object(v.jsxs)("div", {
                                className: "cart",
                                children: [Object(v.jsx)("div", {
                                    className: "cart-event-image",
                                    children: Object(v.jsx)("img", {
                                        src: U(c.imageUrl),
                                        alt: a
                                    })
                                }), Object(v.jsxs)("div", {
                                    className: "cart-img",
                                    children: [Object(v.jsx)("img", {
                                        src: U(t.modelImage),
                                        alt: a
                                    }), "true" == l && Object(v.jsx)("div", {
                                        className: "eliminated",
                                        children: "Eliminated"
                                    }), r && Object(v.jsx)("div", {
                                        className: "tag-no",
                                        children: r
                                    })]
                                }), Object(v.jsxs)("div", {
                                    className: "cart-detail",
                                    children: [Object(v.jsx)("div", {
                                        className: "text-center cart-name",
                                        children: Object(v.jsx)("h4", {
                                            children: a
                                        })
                                    }), Object(v.jsxs)("div", {
                                        className: "cart-info",
                                        children: [Object(v.jsxs)("p", {
                                            children: [Object(v.jsx)("strong", {
                                                className: "sm-none",
                                                children: "Description:"
                                            }), t.modelInfo]
                                        }), Object(v.jsx)(ue, {
                                            eventId: t.eventId,
                                            modelName: a
                                        }), Object(v.jsxs)("div", {
                                            className: "countdown",
                                            children: [n(c.eventEndDate) && Object(v.jsx)("div", {
                                                className: "vote-timer",
                                                children: Object(v.jsx)(F, {
                                                    startTime: c.eventStartDate,
                                                    endTime: c.eventEndDate
                                                })
                                            }), !n(c.eventEndDate) && Object(v.jsx)("div", {
                                                className: "text-danger",
                                                children: "Voting period has ended!!!"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    }
                    return null
                },
                xe = c(245);

            function pe(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm,
                    i = new Date,
                    r = c.id + "-" + 13 * i.getTime(),
                    l = t * (s && s.perVoteCost ? s.perVoteCost : 5),
                    o = {
                        amt: l,
                        psc: 0,
                        pdc: 0,
                        txAmt: 0,
                        tAmt: l,
                        pid: r,
                        scd: "NP-ES-MODELSONGS",
                        su: m + "/esewa-payment/esewa_payment_success",
                        fu: m + "/esewa-payment/esewa_payment_failed"
                    },
                    d = function() {
                        $.a.post(m + "/esewa-payment?modelId=" + c.id + "&eventId=" + c.eventId + "&numberOfVotes=" + t + "&amount=" + l + "&productId=" + r).then((function(e) {
                            e.data.type === O && function(e, t) {
                                var c = document.createElement("form");
                                for (var n in c.setAttribute("method", "POST"), c.setAttribute("action", e), t) {
                                    var s = document.createElement("input");
                                    s.setAttribute("type", "hidden"), s.setAttribute("name", n), s.setAttribute("value", t[n]), c.appendChild(s)
                                }
                                document.body.appendChild(c), c.submit()
                            }("https://esewa.com.np/epay/main", o)
                        })).catch((function(e) {
                            console.log(e), a()
                        }))
                    };
                return Object(n.useEffect)((function() {
                    d()
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }
            var ve = c(251),
                fe = (c(220), c(107)),
                ge = c.n(fe),
                Ne = c(247),
                _e = c(253),
                ye = c(248),
                we = c(224),
                Ie = c(255),
                Ee = c(249),
                Se = c(252),
                Ce = c(250),
                Ae = c.p + "static/media/logo.ab1c4b2c.png",
                Te = c(108),
                Pe = c.n(Te),
                De = Object(Ne.a)((function(e) {
                    return {
                        modal: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        paper: {
                            backgroundColor: e.palette.background.paper,
                            border: "2px solid #000",
                            boxShadow: e.shadows[5],
                            padding: e.spacing(2, 4, 3)
                        }
                    }
                }));

            function ke(e) {
                var t = e.modelInfo,
                    c = e.responseData,
                    s = e.showModal,
                    a = e.amount,
                    i = Object(n.useRef)(),
                    r = De(),
                    o = Object(n.useState)(s),
                    d = Object(l.a)(o, 2),
                    j = d[0],
                    m = d[1];
                return Object(v.jsx)("div", {
                    children: Object(v.jsx)(_e.a, {
                        "aria-labelledby": "transition-modal-title",
                        "aria-describedby": "transition-modal-description",
                        className: r.modal,
                        open: j,
                        onClose: function() {
                            m(!1)
                        },
                        closeAfterTransition: !0,
                        BackdropComponent: ye.a,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: Object(v.jsx)(we.a, { in: j,
                            children: Object(v.jsx)(xe.a, {
                                children: Object(v.jsxs)("div", {
                                    className: r.paper,
                                    children: [Object(v.jsxs)(Ee.a, {
                                        variant: "h6",
                                        children: ["please print your bill by clicking", Object(v.jsx)(Pe.a, {
                                            trigger: function() {
                                                return Object(v.jsx)(Ie.a, {})
                                            },
                                            content: function() {
                                                return i.current
                                            }
                                        })]
                                    }), Object(v.jsxs)(Se.a, {
                                        ref: i,
                                        children: [Object(v.jsxs)(Se.a, {
                                            justifyContent: "center",
                                            children: [Object(v.jsx)("div", {
                                                className: "logo-area",
                                                children: Object(v.jsx)("a", {
                                                    href: "/",
                                                    children: Object(v.jsx)("img", {
                                                        src: Ae,
                                                        alt: "Global Online Pay",
                                                        width: 150,
                                                        height: 50
                                                    })
                                                })
                                            }), Object(v.jsx)(Ee.a, {
                                                variant: "h4",
                                                children: " Payment Bill"
                                            })]
                                        }), Object(v.jsx)(Ce.a, {}), Object(v.jsx)(Ce.a, {}), Object(v.jsx)(Ee.a, {
                                            vatiant: "h5",
                                            children: " Thank you for casting your vote. Please save this bill as a proof of payment."
                                        }), Object(v.jsx)(Ce.a, {}), Object(v.jsxs)(Se.a, {
                                            mt: 3,
                                            children: [Object(v.jsxs)(Ee.a, {
                                                variant: "h6",
                                                children: ["Model Name: ", t.modelName]
                                            }), Object(v.jsxs)(Ee.a, {
                                                variant: "h6",
                                                children: ["Model Id: ", t.id]
                                            }), Object(v.jsxs)(Ee.a, {
                                                variant: "h6",
                                                children: ["Transaction Id: ", c.id]
                                            }), Object(v.jsxs)(Ee.a, {
                                                variant: "h6",
                                                children: ["Transaction Amount: ", a]
                                            }), Object(v.jsx)(Ee.a, {
                                                variant: "h6",
                                                children: "Transaction Status: Accepted"
                                            })]
                                        }), Object(v.jsx)(Ce.a, {}), Object(v.jsx)(Se.a, {
                                            mt: 4,
                                            alignContent: "center",
                                            children: Object(v.jsx)(Ee.a, {
                                                children: "copyright @ globalonlinepay"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }

            function Me(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm,
                    i = Object(n.useState)(),
                    r = Object(l.a)(i, 2),
                    o = r[0],
                    d = r[1];
                return Object(n.useEffect)((function() {
                    ! function(e, t) {
                        var c = new Date,
                            n = {
                                publicKey: "live_public_key_45c5fd3c972345c595b9627520c9cc7b",
                                productIdentity: "modelId=" + t.id + "-" + 13 * c.getTime() + "-eventId=" + t.eventId,
                                productName: t.modelName,
                                productUrl: "https://globalonlinepay.com/modelInfo/" + t.id,
                                eventHandler: {
                                    onSuccess: function(e) {
                                        console.log(e), $.a.post(m + "/khalti-payment?token=" + e.token + "&amount=" + e.amount + "&modelId=" + t.id + "&eventId=" + s.id).then((function(e) {
                                            e.data.type === O && (console.log(e.data), d(e.data.object))
                                        })).catch((function(e) {
                                            console.log(e)
                                        }))
                                    },
                                    onError: function(e) {
                                        return console.log("Khalti payment failed"), console.log(e), e
                                    },
                                    onClose: function() {
                                        console.log("widget is closing"), a()
                                    }
                                }
                            },
                            i = new ge.a(n);
                        e && i.show({
                            amount: 100 * e * (s && s.perVoteCost ? s.perVoteCost : 5)
                        })
                    }(t, c)
                }), [t, c]), Object(v.jsx)(xe.a, {
                    children: o ? Object(v.jsx)(ke, {
                        modelInfo: c,
                        responseData: o,
                        amount: t * (s && s.perVoteCost ? s.perVoteCost : 5),
                        showModal: !0
                    }) : Object(v.jsx)(xe.a, {
                        children: Object(v.jsx)(ve.a, {})
                    })
                })
            }

            function Ve(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = (e.resetForm, e.currency),
                    a = Object(n.useState)(),
                    i = Object(l.a)(a, 2),
                    r = i[0],
                    o = (i[1], function() {
                        var e = 5 * t * 100;
                        $.a.post(m + "/nabil-payment?modelId=" + c.id + "&eventId=" + c.eventId + "&numberOfVotes=" + t + "&amount=" + e + "&currency=" + s).then((function(e) {
                            200 === e.status && function(e, t) {
                                var c = document.createElement("form");
                                for (var n in document.body.appendChild(c), c.method = "post", c.action = e, t)
                                    if ("responseUrl" !== n) {
                                        var s = document.createElement("input");
                                        s.type = "hidden", s.name = n, s.value = t[n], c.appendChild(s)
                                    }
                                c.submit()
                            }(e.data.responseUrl, e.data)
                        })).catch((function(e) {
                            console.log(e)
                        }))
                    });
                return Object(n.useEffect)((function() {
                    o()
                }), [t, c]), Object(v.jsx)(xe.a, {
                    children: r && Object(v.jsx)(ke, {
                        modelInfo: c,
                        responseData: r,
                        amount: 10 * t,
                        showModal: !0
                    })
                })
            }

            function Re(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm;
                console.log(t);
                return Object(n.useEffect)((function() {
                    console.log(m + "/fonepay-payment?model_Id=" + c.id + "&event_Id=" + s.id + "&no_of_votes=" + t), $.a.post(m + "/fonepay-payment?model_Id=" + c.id + "&event_Id=" + s.id + "&no_of_votes=" + t).then((function(e) {
                        window.location.replace(e.data)
                    })).catch((function(e) {
                        console.log(e), a()
                    }))
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }

            function Fe(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm,
                    i = function() {
                        $.a.post(m + "/imepay-details?model_id=" + c.id + "&event_id=" + c.eventId + "&no_of_votes=" + t).then((function(e) {
                            var t, c, n;
                            (console.log(e), e.data.TokenId) && function(e, t) {
                                var c = document.createElement("form");
                                for (var n in c.setAttribute("method", "POST"), c.setAttribute("action", e), t) {
                                    var s = document.createElement("input");
                                    s.setAttribute("type", "hidden"), s.setAttribute("name", n), s.setAttribute("value", t[n]), c.appendChild(s)
                                }
                                document.body.appendChild(c), c.submit()
                            }("https://payment.imepay.com.np:7979/WebCheckout/Checkout", (t = e.data.TokenId, c = e.data.RefId, n = e.data.Amount, {
                                TokenId: t,
                                MerchantCode: "MODSONGS",
                                RefId: c,
                                TranAmount: n,
                                Method: "POST",
                                RespUrl: m + "/imepay-details/validate",
                                CancelUrl: m + "/imepay-details/cancel"
                            }))
                        })).catch((function(e) {
                            console.log(e), a()
                        }))
                    };
                return Object(n.useEffect)((function() {
                    i()
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }

            function Ue(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm,
                    i = new Date,
                    r = c.id + "-" + 11 * i.getTime(),
                    l = function() {
                        $.a.post(m + "/cellpay?modelId=" + c.id + "&eventId=" + c.eventId + "&numberOfVotes=" + t + "&productId=" + r).then((function(e) {
                            e.data.type === O && (console.log("Thank you for using Cell Pay Amount=" + e.data.amount + ", Invoice= " + e.data.invoiceNo + ", CellPayId= " + e.data.cellPayId), function(e, t, c, n, s) {
                                t.amount = c, t.invoice_number = n, t.success_callback = m + "/cellpay/cellpay_payment_success/" + s, t.failure_callback = m + "/cellpay/cellpay_payment_failure/" + s;
                                var a = document.createElement("form");
                                for (var i in a.setAttribute("method", "POST"), a.setAttribute("action", e), t) {
                                    var r = document.createElement("input");
                                    r.setAttribute("type", "hidden"), r.setAttribute("name", i), r.setAttribute("value", t[i]), a.appendChild(r)
                                }
                                document.body.appendChild(a), a.submit()
                            }("https://app.cellpay.com.np/mpay/", o, e.data.amount, e.data.invoiceNo, e.data.cellPayId))
                        })).catch((function(e) {
                            console.log(e), a()
                        }))
                    },
                    o = {
                        merchant_id: "9851105559",
                        description: "Vote for model: " + c.modelName,
                        cancel_callback: "https://globalonlinepay.com/payment-cancelled"
                    };
                return Object(n.useEffect)((function() {
                    l()
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }

            function Be(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.resetForm;
                return Object(n.useEffect)((function() {
                    $.a.post(m + "/prabhupay?model_id=" + c.id + "&event_id=" + s.id + "&no_of_votes=" + t).then((function(e) {
                        window.location.replace(e.data)
                    })).catch((function(e) {
                        console.log(e), a()
                    }))
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }
            var Le = c(254);
            c(209);

            function Ge(e) {
                var t = e.noOfVotes,
                    c = e.modelInfo,
                    s = e.eventInfo,
                    a = e.currencyCode,
                    i = e.resetForm,
                    r = {
                        modelId: c.id,
                        productId: c.productId,
                        modelName: c.modelName,
                        eventId: c.eventId,
                        numberOfVotes: function() {
                            var e = s && s.votesPerDollar ? s.votesPerDollar : 20,
                                c = s && s.votesPerAUD ? s.votesPerAUD : 20,
                                n = s && s.votesPerGBP ? s.votesPerGBP : 20,
                                i = s && s.votesPerEUR ? s.votesPerEUR : 20,
                                r = 0;
                            "USD" === a ? r = t * e : "NPR" === a || "INR" === a ? r = t : "AUD" === a ? r = t * c : "GBP" === a ? r = t * n : "EUR" === a && (r = t * i);
                            return console.log("Calculated final no of votes:" + r), r
                        }(),
                        finalAmount: d(),
                        access_key: "835e303882c53d8eae9a95140cf4df85",
                        profile_id: "4A21B200-8051-48F2-A744-F49A1B6925EB",
                        signed_field_names: "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code,auth_trans_ref_no",
                        unsigned_field_names: "card_type,card_number,card_expiry_date",
                        locale: "en",
                        transaction_uuid: Object(Le.a)(),
                        signed_date_time: function() {
                            var e = new Date;
                            return e.getUTCFullYear() + "-" + l(e.getUTCMonth() + 1) + "-" + l(e.getUTCDate()) + "T" + l(e.getUTCHours()) + ":" + l(e.getUTCMinutes()) + ":" + l(e.getUTCSeconds()) + "Z"
                        }(),
                        transaction_type: "sale",
                        reference_number: Math.floor(1e4 * Math.random() + 1).toString(),
                        amount: d(),
                        currency: a,
                        payment_method: "card",
                        bill_to_forename: "Some",
                        bill_to_surname: "Name",
                        bill_to_email: "some.name@email.com",
                        bill_to_phone: "9989989",
                        bill_to_address_line1: "Line1",
                        bill_to_address_city: "City1",
                        bill_to_address_state: "State1",
                        bill_to_address_country: "NP",
                        bill_to_address_postal_code: "009",
                        card_type: "001",
                        card_number: "",
                        card_expiry_date: "",
                        signature: "",
                        auth_trans_ref_no: function(e) {
                            for (var t = "", c = "0123456789", n = c.length, s = 0; s < e; s++) t += c.charAt(Math.floor(Math.random() * n));
                            return t
                        }(20)
                    };

                function l(e) {
                    return e < 10 ? "0" + e : e
                }
                var o = function() {
                    $.a.post(m + "/nicasiacybersource/sign", r).then((function(e) {
                        e.data.hash ? (r.signature = e.data.hash, function(e, t) {
                            var c = document.createElement("form");
                            for (var n in c.setAttribute("method", "POST"), c.setAttribute("action", e), t) {
                                var s = document.createElement("input");
                                s.setAttribute("type", "hidden"), s.setAttribute("name", n), s.setAttribute("value", t[n]), c.appendChild(s)
                            }
                            document.body.appendChild(c), c.submit()
                        }("https://secureacceptance.cybersource.com/pay", r)) : (console.log("No proper response from signing front"), console.log(e))
                    })).catch((function(e) {
                        console.log(e), i()
                    }))
                };

                function d() {
                    var e = s && s.perVoteCost ? s.perVoteCost : 5,
                        c = s && s.perVoteCostINR ? s.perVoteCostINR : 5,
                        n = 0;
                    return "NPR" === a ? n = t * e : "USD" === a ? n = t : "INR" === a ? n = t * c : ("AUD" === a || "GBP" === a || "EUR" === a) && (n = t), console.log("Calculated final amount:" + n), n
                }
                return Object(n.useEffect)((function() {
                    console.log("Got in for currency:" + a), null != t && (console.log("Initial noOfVotes:" + t), o())
                }), [t, c, s]), Object(v.jsx)(xe.a, {})
            }
            var We = function(e) {
                    return Object(v.jsxs)("section", {
                        className: "text-center",
                        children: [Object(v.jsx)("div", {
                            className: "warning-image",
                            children: Object(v.jsx)("img", {
                                src: "/assets/images/feature/sorry.png"
                            })
                        }), Object(v.jsx)("h3", {
                            children: e.message
                        })]
                    })
                },
                qe = void 0,
                ze = function(e) {
                    var t = Object(r.g)(),
                        s = e.match.params.id,
                        a = "l",
                        i = c(97).parse(Object(r.h)().search);
                    "m" === i.platform && (a = i.platform), void 0 === s && (s = i.id);
                    var o = Object(n.useState)(0),
                        b = Object(l.a)(o, 2),
                        h = b[0],
                        u = b[1],
                        O = Object(n.useState)("Votes"),
                        f = Object(l.a)(O, 2),
                        g = f[0],
                        N = f[1],
                        _ = Object(n.useState)(""),
                        y = Object(l.a)(_, 2),
                        w = y[0],
                        I = y[1],
                        E = Object(n.useState)(),
                        C = Object(l.a)(E, 2),
                        A = (C[0], C[1]),
                        T = Object(n.useState)(),
                        P = Object(l.a)(T, 2),
                        D = (P[0], P[1]),
                        k = Object(n.useState)(),
                        M = Object(l.a)(k, 2),
                        V = (M[0], M[1]),
                        R = Object(n.useState)(),
                        F = Object(l.a)(R, 2),
                        U = (F[0], F[1]),
                        B = Object(n.useState)(),
                        L = Object(l.a)(B, 2),
                        G = (L[0], L[1]),
                        W = Object(n.useState)(),
                        q = Object(l.a)(W, 2),
                        Q = (q[0], q[1]),
                        Y = Object(n.useState)(),
                        K = Object(l.a)(Y, 2),
                        X = K[0],
                        J = K[1],
                        Z = Object(n.useState)(),
                        $ = Object(l.a)(Z, 2),
                        ee = $[0],
                        ce = $[1],
                        ne = Object(n.useState)(0),
                        se = Object(l.a)(ne, 2),
                        ae = se[0],
                        ie = se[1],
                        re = Object(n.useState)(),
                        le = Object(l.a)(re, 2),
                        oe = le[0],
                        de = le[1],
                        me = Object(n.useState)(),
                        be = Object(l.a)(me, 2),
                        he = be[0],
                        ue = be[1],
                        xe = Object(n.useState)(),
                        ve = Object(l.a)(xe, 2),
                        fe = ve[0],
                        ge = ve[1],
                        Ne = Object(n.useState)(),
                        _e = Object(l.a)(Ne, 2),
                        ye = (_e[0], _e[1], Object(n.useState)(10)),
                        we = Object(l.a)(ye, 2),
                        Ie = we[0],
                        Ee = we[1],
                        Se = Object(n.useState)(),
                        Ce = Object(l.a)(Se, 2),
                        Ae = Ce[0],
                        Te = Ce[1],
                        Pe = Object(H.a)(),
                        De = (Pe.register, Pe.handleSubmit),
                        ke = (Pe.setValue, Pe.reset, Pe.errors, Object(n.useState)(!1)),
                        Le = Object(l.a)(ke, 2),
                        ze = (Le[0], Le[1], Object(n.useState)("Please enter no. of votes")),
                        Qe = Object(l.a)(ze, 2),
                        He = Qe[0],
                        Ye = Qe[1],
                        Ke = Object(n.useState)(0),
                        Xe = Object(l.a)(Ke, 2),
                        Je = Xe[0],
                        Ze = Xe[1],
                        $e = Object(n.useState)(!1),
                        et = Object(l.a)($e, 2),
                        tt = et[0],
                        ct = et[1],
                        nt = ((new Date).getTime(), function(e) {
                            void 0 === e && t.push("/404"), fetch(m + "/publicApi/event/" + e).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                !1 === e.hasParent && (ue(e), Ze(e.eventEndDate - Date.now()), e.eventEndDate - Date.now() <= 0 && ct(!0)), ge(e)
                            })).catch((function(e) {
                                console.log(e)
                            }))
                        }),
                        st = function(e) {
                            document.getElementById("vote-form").reset(), ie(0), J(""), I("")
                        };
                    Object(n.useEffect)((function() {
                        fetch(m + "/publicApi/model/" + s).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            var c;
                            de(e), "true" == (null !== (c = e.isHidden) && void 0 !== c ? c : "false") && t.push("/404")
                        })).catch((function(e) {
                            t.push("/404")
                        }))
                    }), []), Object(n.useEffect)((function() {
                        oe && nt(oe.eventId)
                    }), [!!oe]), Object(n.useEffect)((function() {
                        fe && fe.hasParent && nt(fe.parentEventId)
                    }), [!!fe]);
                    var at = function(e) {
                            Je > 0 && e ? ce(w.toLowerCase()) : te.a.fire({
                                icon: "error",
                                title: "Vote has been ended !!!",
                                showConfirmButton: !1,
                                timer: 1500
                            })
                        },
                        it = x.map((function(e) {
                            return Object(v.jsx)("option", {
                                value: e.value,
                                children: e.label
                            })
                        })),
                        rt = p.map((function(e) {
                            return Object(v.jsx)("option", {
                                value: e.value,
                                children: e.label
                            })
                        })),
                        lt = function() {
                            return X ? Object(v.jsxs)("div", {
                                class: "form-group col-md-12 ",
                                children: [Object(v.jsx)("label", {
                                    for: "inputState",
                                    className: "vote-label",
                                    children: Object(v.jsx)("strong", {
                                        children: " Choose"
                                    })
                                }), Object(v.jsxs)("select", {
                                    id: "inputState",
                                    className: "form-control",
                                    value: w,
                                    onChange: function(e) {
                                        return function(e) {
                                            var t, c, n, s, a, i, r, l, o, d, j, m;
                                            A(null !== (t = he.perVoteCost) && void 0 !== t ? t : 10), V(null !== (c = he.perVoteCostINR) && void 0 !== c ? c : 10), D(null !== (n = he.votesPerDollar) && void 0 !== n ? n : 20), U(null !== (s = he.votesPerAUD) && void 0 !== s ? s : 20), G(null !== (a = he.votesPerGBP) && void 0 !== a ? a : 20), Q(null !== (i = he.votesPerEUR) && void 0 !== i ? i : 20);
                                            var b = null !== (r = he.perVoteCost) && void 0 !== r ? r : 10,
                                                h = null !== (l = he.perVoteCostINR) && void 0 !== l ? l : 10,
                                                O = null !== (o = he.votesPerDollar) && void 0 !== o ? o : 20,
                                                x = null !== (d = he.votesPerAUD) && void 0 !== d ? d : 20,
                                                p = null !== (j = he.votesPerGBP) && void 0 !== j ? j : 20,
                                                v = null !== (m = he.votesPerEUR) && void 0 !== m ? m : 20;
                                            if (Ee(10), I(e), e) {
                                                var f = e.toLowerCase();
                                                "international" === f || "nic_asia_international" === f ? (Te("WE ACCEPT MINIMUM OF 10 USD AND MAXIMUM NO-LIMIT USD IN ONE TIME (1 USD = " + O + " Votes)"), u(O), Ye("Please enter amount for vote"), N("Votes")) : "national" === f || "nic_asia" === f ? (Te("WE ACCEPT MINIMUM 20 VOTES AND MAXIMUM NO-LIMIT VOTES IN ONE TIME (1 VOTE = NPR. " + b + " /-.)"), Ye("Please enter no. of votes"), Ee(20), u(b), N("Amount")) : "nic_asia_international_inr" === f ? (Te("WE ACCEPT MINIMUM 20 VOTES AND MAXIMUM NO-LIMIT VOTES IN ONE TIME (1 VOTE = INR. " + h + " /-.)"), Ye("Please enter no. of votes"), Ee(20), u(h), N("Amount")) : "nic_asia_international_aud" === f ? (Te("WE ACCEPT MINIMUM OF 10 AUD AND MAXIMUM NO-LIMIT AUD IN ONE TIME (1 AUD = " + x + " Votes)"), Ye("Please enter amount for vote"), u(x), N("Votes")) : "nic_asia_international_gbp" === f ? (Te("WE ACCEPT MINIMUM OF 10 GBP AND MAXIMUM NO-LIMIT GBP IN ONE TIME (1 GBP = " + p + " Votes)"), Ye("Please enter amount for vote"), u(p), N("Votes")) : "nic_asia_international_eur" === f ? (Te("WE ACCEPT MINIMUM OF 10 EUR AND MAXIMUM NO-LIMIT EUR IN ONE TIME (1 EUR = " + v + " Votes)"), Ye("Please enter amount for vote"), u(v), N("Votes")) : (Te("WE ACCEPT MINIMUM 10 VOTES AND MAXIMUM NO-LIMIT VOTES IN ONE TIME (1 VOTE = NPR. " + b + " /-.)"), Ye("Please enter no. of votes"), u(b), N("Amount"))
                                            }
                                        }(e.target.value)
                                    },
                                    children: [Object(v.jsx)("option", {
                                        selected: !0,
                                        children: "Please select"
                                    }), "visa" == X ? rt : "wallets" == X ? it : null]
                                }), Object(v.jsx)("div", {
                                    className: "info-msg",
                                    children: Ae
                                })]
                            }) : null
                        },
                        ot = function(e) {
                            ie(0), J(e), I(""), Te("")
                        },
                        dt = function() {
                            return Object(v.jsx)("div", {
                                className: "voting-menu",
                                children: Object(v.jsxs)("div", {
                                    className: "voting-form",
                                    children: [Object(v.jsx)("div", {
                                        className: "form-title text-center py-2",
                                        children: Object(v.jsx)("h2", {
                                            children: tt ? "Vote Has been Ended" : "VOTE FROM HERE"
                                        })
                                    }), Object(v.jsxs)("div", {
                                        className: "form-inputs",
                                        children: [Object(v.jsx)("div", {
                                            className: "card",
                                            children: Object(v.jsx)("div", {
                                                className: "voting-qr",
                                                children: Object(v.jsx)(je, {
                                                    eventId: oe.eventId,
                                                    modelId: e.match.params.id,
                                                    disabled: tt
                                                })
                                            })
                                        }), Object(v.jsx)("span", {
                                            children: "OR"
                                        }), Object(v.jsx)("div", {
                                            className: "card mx-3",
                                            children: Object(v.jsx)("form", {
                                                onSubmit: De(at),
                                                id: "vote-form",
                                                children: Object(v.jsxs)("div", {
                                                    className: "qr-section",
                                                    children: [Object(v.jsx)("h4", {
                                                        className: "text-center ",
                                                        children: Object(v.jsx)("strong", {
                                                            children: "CHOOSE YOUR PREFERRED PAYMENT METHOD"
                                                        })
                                                    }), Object(v.jsx)("fieldset", {
                                                        class: "form-group form-vote",
                                                        children: Object(v.jsx)("div", {
                                                            class: "row",
                                                            children: Object(v.jsxs)("div", {
                                                                class: "col-sm-12",
                                                                children: [Object(v.jsxs)("div", {
                                                                    class: "form-check text-left",
                                                                    children: [Object(v.jsx)("input", {
                                                                        class: "form-check-input",
                                                                        type: "radio",
                                                                        name: "wallets",
                                                                        id: "wallets",
                                                                        checked: "wallets" === X,
                                                                        value: "wallets",
                                                                        onClick: function() {
                                                                            return ot("wallets")
                                                                        }
                                                                    }), Object(v.jsx)("label", {
                                                                        class: "form-check-label",
                                                                        for: "wallets",
                                                                        children: "Wallets/M-Banking/E-Banking"
                                                                    })]
                                                                }), Object(v.jsxs)("div", {
                                                                    class: "form-check text-left",
                                                                    children: [Object(v.jsx)("input", {
                                                                        class: "form-check-input",
                                                                        type: "radio",
                                                                        name: "visa",
                                                                        id: "visa",
                                                                        checked: "visa" === X,
                                                                        value: "visa",
                                                                        onClick: function() {
                                                                            return ot("visa")
                                                                        }
                                                                    }), Object(v.jsx)("label", {
                                                                        class: "form-check-label",
                                                                        for: "visa",
                                                                        children: "Visa/Master Card/Union Pay"
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    }), lt(), w ? Object(v.jsxs)(n.Fragment, {
                                                        children: [Object(v.jsxs)("div", {
                                                            className: "form-group mb-3",
                                                            children: [Object(v.jsx)("label", {
                                                                className: "label vote-label",
                                                                for: "name",
                                                                children: Object(v.jsx)("strong", {
                                                                    children: He
                                                                })
                                                            }), Object(v.jsx)("div", {
                                                                class: "input-group",
                                                                children: Object(v.jsx)("input", {
                                                                    type: "number",
                                                                    className: "form-control",
                                                                    placeholder: "100",
                                                                    min: Ie,
                                                                    onChange: function(e) {
                                                                        return ie(e.target.value)
                                                                    }
                                                                })
                                                            })]
                                                        }), Object(v.jsxs)("div", {
                                                            className: "form-group mb-3",
                                                            children: [Object(v.jsx)("label", {
                                                                className: "label vote-label",
                                                                for: "name",
                                                                children: Object(v.jsxs)("strong", {
                                                                    children: ["Total ", g]
                                                                })
                                                            }), ae * h]
                                                        }), Object(v.jsxs)("div", {
                                                            className: "form-group my-2 text-center",
                                                            children: [Object(v.jsx)("button", {
                                                                type: "submit",
                                                                className: "primary-bg text-center open-vote-menu mx-2",
                                                                children: tt ? "Vote Ended" : "VOTE NOW"
                                                            }), Object(v.jsx)("div", {
                                                                className: "btn-danger text-center open-vote-menu mx-2",
                                                                onClick: st,
                                                                children: "Reset"
                                                            })]
                                                        })]
                                                    }) : null, Object(v.jsxs)("div", {
                                                        className: "alert alert-warning mt-4 mb-0",
                                                        role: "alert",
                                                        children: [Object(v.jsx)(d.d, {}), Object(v.jsx)("strong", {
                                                            children: " Note: "
                                                        }), "When you vote, you agree to our", Object(v.jsx)(j.c, {
                                                            exact: !0,
                                                            to: "/terms_and_conditions",
                                                            target: "_blank",
                                                            className: "text-decoration-underline",
                                                            children: Object(v.jsx)("strong", {
                                                                children: "T&C"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        };
                    if (he && oe) {
                        var jt, mt = null !== (jt = oe.isEliminated) && void 0 !== jt ? jt : "false",
                            bt = Date.now() > he.eventStartDate;
                        return Je > 0 ? Object(v.jsxs)(n.Fragment, {
                            children: ["l" === a && Object(v.jsxs)(v.Fragment, {
                                children: [Object(v.jsx)(S, {
                                    name: "popup"
                                }), Object(v.jsx)("section", {
                                    className: "vote-section",
                                    children: Object(v.jsxs)("div", {
                                        className: "container",
                                        children: [Object(v.jsxs)("div", {
                                            className: "row",
                                            children: [Object(v.jsx)("div", {
                                                className: "col-12",
                                                children: Object(v.jsx)("div", {
                                                    className: "text-center primary-bg title",
                                                    children: Object(v.jsx)("h5", {
                                                        className: "text-uppercase p-2",
                                                        children: "Vote Now"
                                                    })
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "col-12",
                                                children: Object(v.jsx)(S, {
                                                    name: "votingpage_slider"
                                                })
                                            }), Object(v.jsx)("div", {
                                                className: "col-12",
                                                children: Object(v.jsx)(S, {
                                                    name: "vote_page_top"
                                                })
                                            })]
                                        }), Object(v.jsxs)("div", {
                                            className: "row",
                                            children: [Object(v.jsx)("div", {
                                                className: "col-sm-12 col-md-4 ",
                                                children: Object(v.jsx)(Oe, {
                                                    modelInfo: oe,
                                                    eventInfo: he
                                                })
                                            }), bt && "false" == mt && Object(v.jsx)("div", {
                                                className: "col-sm-12 col-md-4 ",
                                                children: dt()
                                            }), Object(v.jsx)("div", {
                                                className: "col-sm-12 col-md-4",
                                                children: Object(v.jsx)(S, {
                                                    name: "vote_page_side"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), "m" === a && Object(v.jsxs)(v.Fragment, {
                                children: [" ", bt && "false" == mt && dt() || !bt && "false" == mt && Object(v.jsx)("h5", {
                                    className: "text-center mt-2 text-primary",
                                    children: "Voting opens soon."
                                }) || "true" == mt && Object(v.jsx)("h5", {
                                    className: "text-center mt-2 text-danger",
                                    children: "Participate has been eliminated"
                                })]
                            }), "esewa" === ee && Object(v.jsx)(pe, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "khalti" === ee && Object(v.jsx)(Me, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "fonepay" === ee && Object(v.jsx)(Re, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "cellpay" === ee && Object(v.jsx)(Ue, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "prabhupay" === ee && Object(v.jsx)(Be, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "imepay" === ee && Object(v.jsx)(Fe, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe)
                            }), "national" === ee && Object(v.jsx)(Ve, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currency: "NPR"
                            }), "international" === ee && Object(v.jsx)(Ve, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currency: "DOLLAR"
                            }), "nic_asia" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "NPR"
                            }), "nic_asia_international" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "USD"
                            }), "nic_asia_international_inr" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "INR"
                            }), "nic_asia_international_aud" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "AUD"
                            }), "nic_asia_international_gbp" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "GBP"
                            }), "nic_asia_international_eur" === ee && Object(v.jsx)(Ge, {
                                noOfVotes: ae,
                                modelInfo: oe,
                                eventInfo: he,
                                resetForm: st.bind(qe),
                                currencyCode: "EUR"
                            })]
                        }) : Object(v.jsx)(We, {
                            message: "The vote has been ended."
                        })
                    }
                    return Object(v.jsx)(z, {})
                },
                Qe = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1];
                    Object(n.useEffect)((function() {
                        e.match.params.id && fetch(m + "/publicApi/model/" + e.match.params.id).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []);
                    var i = function(e, t) {
                        return Object(v.jsxs)("div", {
                            className: "container",
                            children: [Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsx)("div", {
                                    className: "col-12",
                                    children: Object(v.jsx)("div", {
                                        className: "text-center primary-bg title",
                                        children: Object(v.jsx)("h5", {
                                            className: "text-uppercase p-2 ",
                                            children: "Voting Success"
                                        })
                                    })
                                })
                            }), Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsx)("div", {
                                    className: "col-sm-12",
                                    children: Object(v.jsx)("div", {
                                        className: "model-profile",
                                        children: Object(v.jsx)("div", {
                                            className: "cart",
                                            children: Object(v.jsxs)("div", {
                                                className: "cart-detail",
                                                children: [Object(v.jsx)("section", {
                                                    className: "text-center",
                                                    children: Object(v.jsx)("div", {
                                                        className: "warning-image",
                                                        children: Object(v.jsx)("img", {
                                                            src: "/assets/images/feature/success.png"
                                                        })
                                                    })
                                                }), e && t ? Object(v.jsxs)("div", {
                                                    children: [Object(v.jsxs)("p", {
                                                        children: ["Thank you for voting ", Object(v.jsxs)("strong", {
                                                            children: [e, " "]
                                                        })]
                                                    }), Object(v.jsx)("p", {
                                                        children: "Your vote has been accepted via the system. "
                                                    }), Object(v.jsx)("p", {
                                                        children: "Feel free to vote again"
                                                    }), Object(v.jsx)("p", {
                                                        children: Object(v.jsx)(j.b, {
                                                            to: "/model-details/" + t,
                                                            className: "primary-bg text-center open-vote-menu text-white",
                                                            children: "Vote again"
                                                        })
                                                    })]
                                                }) : Object(v.jsxs)("div", {
                                                    children: [Object(v.jsx)("p", {
                                                        children: "Thank you for voting"
                                                    }), Object(v.jsx)("p", {
                                                        children: "Your vote has been accepted via the system. "
                                                    }), Object(v.jsx)("p", {
                                                        children: "Feel free to vote again"
                                                    }), Object(v.jsx)(j.b, {
                                                        to: "/events/",
                                                        className: "primary-bg text-center open-vote-menu text-white",
                                                        children: "Events"
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    };
                    if ("" != s) {
                        var r = s.modelName.replace(/[0-9]/g, "").replace(".", "").trim(),
                            o = s.id;
                        return Object(v.jsx)("section", {
                            className: "vote-section",
                            children: i(r, o)
                        })
                    }
                    return Object(v.jsx)("section", {
                        className: "vote-section",
                        children: i()
                    })
                },
                He = function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = c[0],
                        a = c[1];
                    Object(n.useEffect)((function() {
                        e.match.params.id && fetch(m + "/publicApi/model/" + e.match.params.id).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            a(e)
                        }))
                    }), []);
                    var i = function(e, t) {
                        return Object(v.jsxs)("div", {
                            className: "container",
                            children: [Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsx)("div", {
                                    className: "col-12",
                                    children: Object(v.jsx)("div", {
                                        className: "text-center primary-bg title",
                                        children: Object(v.jsx)("h5", {
                                            className: "text-uppercase p-2 ",
                                            children: "Voting fail"
                                        })
                                    })
                                })
                            }), Object(v.jsx)("div", {
                                className: "row",
                                children: Object(v.jsx)("div", {
                                    className: "col-sm-12",
                                    children: Object(v.jsx)("div", {
                                        className: "model-profile",
                                        children: Object(v.jsx)("div", {
                                            className: "cart",
                                            children: Object(v.jsxs)("div", {
                                                className: "cart-detail",
                                                children: [Object(v.jsx)("section", {
                                                    className: "text-center",
                                                    children: Object(v.jsx)("div", {
                                                        className: "warning-image",
                                                        children: Object(v.jsx)("img", {
                                                            src: "/assets/images/feature/sorry.png"
                                                        })
                                                    })
                                                }), function() {
                                                    var e = "/events/";
                                                    return t && (e = "/model-details/" + t), "failure" == window.location.pathname.split("/")[3] ? Object(v.jsxs)("div", {
                                                        children: [Object(v.jsx)("p", {
                                                            children: "Your vote is not accepted via system "
                                                        }), Object(v.jsx)("p", {
                                                            children: "Please try again !!!"
                                                        }), Object(v.jsx)(j.b, {
                                                            to: e,
                                                            className: "primary-bg text-center open-vote-menu text-white",
                                                            children: "Try again"
                                                        }), Object(v.jsx)(j.b, {
                                                            to: "/contact",
                                                            className: "secondary-bg text-center mx-2 open-vote-menu text-white",
                                                            children: "Contact us"
                                                        })]
                                                    }) : Object(v.jsxs)("div", {
                                                        children: [Object(v.jsx)("p", {
                                                            children: "Thank you for voting"
                                                        }), Object(v.jsx)("p", {
                                                            children: "Your vote has been accept via system. "
                                                        }), Object(v.jsx)("p", {
                                                            children: "Feel free to vote again"
                                                        }), Object(v.jsx)(j.b, {
                                                            to: "/events/",
                                                            className: "primary-bg text-center open-vote-menu text-white",
                                                            children: "Events"
                                                        })]
                                                    })
                                                }()]
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    };
                    if ("" != s) {
                        s.modelName.replace(/[0-9]/g, "").replace(".", "").trim();
                        var r = s.id;
                        return Object(v.jsx)("section", {
                            className: "vote-section",
                            children: i(0, r)
                        })
                    }
                    return Object(v.jsx)("section", {
                        className: "vote-section",
                        children: i()
                    })
                },
                Ye = (c(219), function(e) {
                    var t = Object(n.useState)([]),
                        c = Object(l.a)(t, 2),
                        s = (c[0], c[1]);
                    return Object(n.useEffect)((function() {
                        e.match.params.id && fetch(m + "/publicApi/model/" + e.match.params.id).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            s(e)
                        }))
                    }), []), Object(v.jsx)("div", {
                        class: "banner-wrapper",
                        children: Object(v.jsxs)("div", {
                            class: "banner-container",
                            children: [Object(v.jsxs)("div", {
                                class: "logo-wrap",
                                children: [Object(v.jsx)("div", {
                                    class: "banner-logo",
                                    children: Object(v.jsx)("img", {
                                        src: "/assets/images/logo/logo.png",
                                        alt: ""
                                    })
                                }), Object(v.jsx)("div", {
                                    class: "logo-text",
                                    children: Object(v.jsxs)("h3", {
                                        children: ["Voting ", Object(v.jsx)("br", {}), "partner"]
                                    })
                                })]
                            }), Object(v.jsx)("div", {
                                class: "perfect-text",
                                children: Object(v.jsx)("h1", {
                                    children: "perfect idol 2022"
                                })
                            }), Object(v.jsxs)("div", {
                                class: "vote-wrap",
                                children: [Object(v.jsx)("div", {
                                    class: "contestant-img",
                                    children: Object(v.jsx)("img", {
                                        src: "./img2.jpg",
                                        alt: ""
                                    })
                                }), Object(v.jsx)("div", {
                                    class: "contestant-name",
                                    children: Object(v.jsxs)("p", {
                                        children: ["vote for ", Object(v.jsx)("br", {}), Object(v.jsx)("span", {
                                            children: "contestant name"
                                        }), " ", Object(v.jsx)("br", {}), "from global online pay"]
                                    })
                                })]
                            }), Object(v.jsxs)("div", {
                                class: "online-vote-wrap",
                                children: [Object(v.jsx)("div", {
                                    class: "vote-btn",
                                    children: Object(v.jsx)("a", {
                                        href: "",
                                        children: "VOTE NOW"
                                    })
                                }), Object(v.jsxs)("div", {
                                    class: "vote-app-wrap",
                                    children: [Object(v.jsx)("div", {
                                        class: "qr-scan",
                                        children: Object(v.jsx)("img", {
                                            src: "./img3.png",
                                            alt: ""
                                        })
                                    }), Object(v.jsxs)("div", {
                                        class: "online-vote-title",
                                        children: [Object(v.jsx)("p", {
                                            children: "Online vote"
                                        }), Object(v.jsx)("a", {
                                            href: "",
                                            children: "www.globalonlinepay.com"
                                        })]
                                    }), Object(v.jsx)("div", {
                                        class: "google-btn",
                                        children: Object(v.jsx)("a", {
                                            class: " btn-google",
                                            href: "#",
                                            title: "Google Play",
                                            children: "Google Play"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                });
            var Ke = function(e) {
                return Object(v.jsxs)("section", {
                    className: "text-center",
                    children: [Object(v.jsx)("div", {
                        className: "warning-image",
                        children: Object(v.jsx)("img", {
                            src: "/assets/images/feature/comming_soon.png"
                        })
                    }), Object(v.jsx)("h3", {
                        children: "We are working on this feature stay tune"
                    })]
                })
            };
            var Xe = function() {
                    var e = function() {
                        return Object(v.jsxs)(r.d, {
                            children: [Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/",
                                component: Q
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/terms_and_conditions",
                                component: K
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/login",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/signup",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/user_agreement",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/privacy_statement",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/terms_and_conditions",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/support",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/blog",
                                component: Ke
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/events",
                                component: J
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/events/:category",
                                component: J
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/contact",
                                component: ce
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/about",
                                component: ne
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/event-details/:id",
                                component: ie
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/event-details-models/:eventId/:eventCategoryId",
                                component: be
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model-details/:id",
                                component: ze
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model-details",
                                component: ze
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model/vote/success/:id",
                                component: Qe
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model/vote/failure/:id",
                                component: He
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model/vote/success/",
                                component: Qe
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/model/vote/failure/",
                                component: He
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "/template",
                                component: Ye
                            }), Object(v.jsx)(r.b, {
                                exact: !0,
                                path: "*",
                                component: y
                            })]
                        })
                    };
                    return Object(v.jsx)(n.Fragment, {
                        children: Object(v.jsx)("div", {
                            className: "wrapper",
                            children: function() {
                                var t = "l",
                                    s = c(97).parse(Object(r.h)().search);
                                return "m" === s.platform && (t = s.platform), Object(v.jsxs)(n.Fragment, {
                                    children: ["l" === t && Object(v.jsxs)(v.Fragment, {
                                        children: [Object(v.jsx)(f, {}), Object(v.jsx)("div", {
                                            className: "container content-wrapper",
                                            children: Object(v.jsx)("div", {
                                                className: "row",
                                                children: Object(v.jsx)("div", {
                                                    className: "contain",
                                                    children: e()
                                                })
                                            })
                                        }), Object(v.jsx)(_, {})]
                                    }), "m" === t && Object(v.jsxs)(v.Fragment, {
                                        children: [" ", e()]
                                    })]
                                })
                            }()
                        })
                    })
                },
                Je = function(e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 258)).then((function(t) {
                        var c = t.getCLS,
                            n = t.getFID,
                            s = t.getFCP,
                            a = t.getLCP,
                            i = t.getTTFB;
                        c(e), n(e), s(e), a(e), i(e)
                    }))
                };
            i.a.render(Object(v.jsx)(s.a.StrictMode, {
                children: Object(v.jsx)(j.a, {
                    children: Object(v.jsx)(Xe, {})
                })
            }), document.getElementById("root")), Je()
        }
    },
    [
        [221, 1, 2]
    ]
]);