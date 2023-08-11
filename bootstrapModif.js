// Copyright 2019 Google LLC. All Rights Reserved.
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
"use strict";

console.log("Github version 2.2! ");
var l,
  ba = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  },
  ca =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        },
  da = function (a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  },
  ea = da(this),
  fa = function (a, b) {
    if (b)
      a: {
        var c = ea;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          ca(c, a, { configurable: !0, writable: !0, value: b });
      }
  };
fa("Symbol", function (a) {
  if (a) return a;
  var b = function (f, g) {
    this.W = f;
    ca(this, "description", { configurable: !0, writable: !0, value: g });
  };
  b.prototype.toString = function () {
    return this.W;
  };
  var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
    d = 0,
    e = function (f) {
      if (this instanceof e) throw new TypeError("Symbol is not a constructor");
      return new b(c + (f || "") + "_" + d++, f);
    };
  return e;
});
fa("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");
  for (
    var b =
        "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
      c = 0;
    c < b.length;
    c++
  ) {
    var d = ea[b[c]];
    "function" === typeof d &&
      "function" != typeof d.prototype[a] &&
      ca(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ha(ba(this));
        },
      });
  }
  return a;
});
var ha = function (a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  },
  x = function (a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  },
  y = this || self,
  ia = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.oa = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.base = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  },
  ja = function (a) {
    return a;
  };
function qa(a) {
  const b = Buffer.from(a, "base64");
  if (b.toString("base64") === a) return b.toString();
}
function ra(a, b, c = !1) {
  a = (a || "")
    .split(";")
    .map((d) => d.replace(/^\s+/, ""))
    .filter((d) => d.startsWith(b + "="))
    .map((d) => d.substring(b.length + 1));
  return c ? a : a.map(decodeURIComponent);
}
function z(a, b, c = !1) {
  return ra(a.headers.cookie || "", b, c)[0] || "";
}
function sa(a, b) {
  var c = a.headers;
  if (c["x-gtm-server-preview"]) {
    a = Object;
    var d = a.assign;
    c = c["x-gtm-server-preview"];
    Array.isArray(c) && (c = c[0] || "");
    c = (qa(c) || "").split("|");
    if (3 !== c.length)
      throw Error("Invalid 'x-gtm-server-preview' header value.");
    return d.call(a, { containerId: b }, { l: c[0], m: c[1], o: c[2] });
  }
  d = {
    containerId: b,
    m: A(ta(c["x-gtm-auth"]), b),
    o: A(ta(c["x-gtm-debug"]), b),
    l: A(ta(c["x-gtm-preview"]), b),
  };
  if (void 0 !== d.m || void 0 !== d.o || void 0 !== d.l) return d;
  c = z(a, "gtm_auth");
  const e = z(a, "gtm_debug");
  a = z(a, "gtm_preview");
  d.m = A(c, b);
  d.o = A(e, b);
  d.l = A(a, b);
  return d;
}
function A(a, b) {
  const c = `${b}=`;
  a = a.split(":").find((d) => !d.indexOf(c));
  if (void 0 !== a) return a.substring(c.length);
}
function ua(a, b, c) {
  const d = `${b}=`;
  a = a.split(":").filter((e) => e.length && e.indexOf(d));
  c && a.push(`${d}${c}`);
  return a.join(":");
}
function ta(a) {
  Array.isArray(a) && (a = a[0]);
  return a || "";
}
var va = {
  "Cache-Control": "no-store",
  "Content-Disposition": 'attachment; filename="f.txt"',
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
};
var C = require("flags");
var wa = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("console");
var D = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("process");
var xa = class {
  constructor(a, b, c) {
    this.flag = a;
    this.I = b;
    this.s = c;
  }
  isSet() {
    return C.isSet(this.I) || !!(this.s && this.s in D.env);
  }
  get() {
    if (this.s && this.s in D.env)
      if (C.isSet(this.I))
        wa.warn(
          `Ignored environment variable ${this.s}=${
            D.env[this.s]
          } because command-line flag --${this.I}=${this.flag.get()} was given.`
        );
      else return this.flag.parseInput(D.env[this.s]);
    return this.flag.get();
  }
  setSecret(a) {
    this.flag.setSecret(a);
  }
};
function ya(a, b) {
  a.endsWith(".") || (a += ".");
  return b ? `${a} May also be set by ${b} environment variable.` : a;
}
function E(a, b, c, d) {
  b = ya(b, d);
  return new xa(C.defineString(a, c, b), a, d);
}
function G(a, b, c) {
  b = ya(b, c);
  return new xa(C.defineBoolean(a, !1, b), a, c);
}
function I(a, b, c, d) {
  b = ya(b, d);
  return new xa(C.defineInteger(a, c, b), a, d);
}
var za = C.parse;
var Aa = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("url");
var J = function (a, b) {
    return a.url.query[b];
  },
  Ba = function (a) {
    const b = {
      protocol: a.url.protocol,
      hostname: a.url.hostname,
      hash: a.url.hash,
      search: a.url.search,
      pathname: a.url.pathname,
      path: a.url.path,
      href: a.url.href,
    };
    a.url.port && (b.port = a.url.port);
    a.url.auth && (b.auth = a.url.auth);
    return b;
  },
  K = class {
    constructor(a) {
      this.url = Aa.parse(a, !0);
    }
    hostname() {
      return this.url.hostname;
    }
    host() {
      return this.url.host;
    }
    pathname() {
      return this.url.pathname;
    }
    search() {
      return this.url.search;
    }
  };
const Ca = Date.now() + 10368e5 + Math.floor(1728e5 * Math.random());
var Da = 0,
  Ea = 0;
const Fa = G(
  "enable_probe_image_version",
  "Enable to turn on a healthz command that verifies the server is running the passed in version.",
  "ENABLE_PROBE_IMAGE_VERSION"
);
Fa.setSecret(!0);
function Ga(a, b) {
  if ("GET" !== a.method) return !1;
  var c = new K(a.url);
  const d = c.pathname();
  return (null == d ? 0 : d.endsWith("/healthz")) ||
    (null == d ? 0 : d.endsWith("/healthy"))
    ? (c = J(c, "servertype")) && "serverjs" !== c
      ? L(b, 500)
      : Ha(a, b)
      ? !0
      : Date.now() > Ca
      ? L(b, 503)
      : L(b, 200, "ok")
    : !1;
}
function Ha(a, b) {
  a = a.headers["x-sgtm-healthz"];
  if (!a) return !1;
  const c = a.split(",")[0].split("=");
  a = c[0];
  if (Fa.get() && "probe_running_version" === a) {
    if (!/\d+\.\d+\.\d+\-\d+/.test(c[1])) return L(b, 400);
    const [e, f] = c[1].split("-");
    var d;
    a = null != (d = global.sst_bootstrap_version) ? d : 0;
    const [g, h, n] = e.split("."),
      [t, q, u] = (global.sst_image_version || "0.0.0").split(".");
    return Number(t) >= Number(g) &&
      Number(q) >= Number(h) &&
      Number(u) >= Number(n) &&
      Number(a) >= Number(f)
      ? L(b, 200, "ok")
      : L(b, 500);
  }
  d = Number(c[1]);
  return isNaN(d)
    ? L(b, 500)
    : "server_start_millis" === a
    ? Date.now() - Da > d
      ? L(b, 500)
      : L(b, 200, "ok")
    : "container_refresh_millis" === a
    ? Date.now() - Ea > d
      ? L(b, 500)
      : L(b, 200, "ok")
    : !1;
}
function L(a, b, c = "") {
  a.writeHead(b, { "Content-Type": "text/plain" });
  a.end(c);
  return !0;
}
var Ia = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("http");
var Ja = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("https");
var Ka = class extends Error {
    constructor(a) {
      super(a);
      this.name = "HttpTimeoutError";
      Error.captureStackTrace(this, Ka);
    }
  },
  La = class extends Error {
    constructor(a) {
      super(a);
      this.name = "HttpNotFoundError";
      Error.captureStackTrace(this, La);
    }
  },
  Ma = class extends Error {
    constructor(a) {
      super(a);
      this.name = "HttpClientSideError";
      Error.captureStackTrace(this, Ma);
    }
  },
  Na = class extends Error {
    constructor(a) {
      super(a);
      this.name = "HttpServerSideError";
      Error.captureStackTrace(this, Na);
    }
  };
function Oa(a, b, c) {
  const d = !!b.followRedirects,
    e = Number(b.maxRedirects),
    f = isNaN(e) ? 3 : e;
  if (d && 0 > f) return Promise.reject(Error("Too many redirects."));
  let g, h;
  return new Promise((n, t) => {
    var q = Number(b.timeout);
    let u = b.timeoutCallbacks;
    0 < q &&
      ((u = u || []),
      (h = setTimeout(() => {
        for (const p of u) p();
      }, q)));
    u &&
      u.push(() => {
        let p;
        null == (p = g) || p.abort();
        t(new Ka("Request timed out."));
      });
    const w = Object.assign({}, b);
    b.headers && (w.headers = Object.assign({}, b.headers));
    delete w.timeout;
    global.server_js_dev_only &&
      (w.headers || (w.headers = {}),
      (w.headers["X-Google-GFE-Frontline-Info"] = "ssl"));
    c &&
      (w.headers || (w.headers = {}),
      (w.headers["content-length"] = Buffer.byteLength(c)));
    q = Object.assign(Ba(new K(a)), w);
    g = Pa(a).request(q, (p) => {
      if (
        d &&
        p.statusCode &&
        300 <= p.statusCode &&
        400 > p.statusCode &&
        p.headers.location
      ) {
        p.resume();
        const B = p.headers.location;
        Ua(a) && !Ua(B)
          ? t(Error("Unable to follow HTTPS -> HTTP redirect."))
          : n(
              Oa(
                p.headers.location,
                Object.assign(w, {
                  timeoutCallbacks: u,
                  followRedirects: d,
                  maxRedirects: f - 1,
                }),
                c
              )
            );
      } else {
        var H = [];
        p.on("data", (B) => {
          H.push(B);
        });
        p.on("end", () => {
          const B = {
            statusCode: p.statusCode,
            headers: p.headers,
            body: 0 === H.length ? void 0 : Buffer.concat(H).toString(),
          };
          n(B);
        });
      }
    });
    let F;
    null == (F = g) || F.on("error", t);
    let M;
    null == (M = g) || M.end(c);
  }).finally(() => void clearTimeout(h));
}
function Va(a) {
  return Oa(a, Object.assign({}, { method: "GET" }));
}
function Wa(a) {
  if (500 <= a.statusCode)
    throw new Na(`Received HTTP status code ${a.statusCode}.`);
  if (404 === a.statusCode)
    throw new La(`Received HTTP status code ${a.statusCode}.`);
  if (400 <= a.statusCode)
    throw new Ma(`Received HTTP status code ${a.statusCode}.`);
}
function Ua(a) {
  return a.toLowerCase().startsWith("https://");
}
function Pa(a) {
  if (Ua(a)) return { request: Ja.request, get: Ja.get };
  if (a.toLowerCase().startsWith("http://"))
    return { request: Ia.request, get: Ia.get };
  throw Error(`URL ${a} uses unsupported protocol; must be HTTP or HTTPS.`);
}
class Xa {
  constructor(a, b) {
    this.X = a[y.Symbol.iterator]();
    this.da = b;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const a = this.X.next();
    return {
      value: a.done ? void 0 : this.da.call(void 0, a.value),
      done: a.done,
    };
  }
}
var Ya = function (a, b) {
  return new Xa(a, b);
};
function N(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, N);
  else {
    const c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
ia(N, Error);
N.prototype.name = "CustomError";
function Za(a, b) {
  a = a.split("%s");
  let c = "";
  const d = a.length - 1;
  for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
  N.call(this, c + a[d]);
}
ia(Za, N);
Za.prototype.name = "AssertionError";
var $a = function (a, b) {
  throw new Za(
    "Failure" + (a ? ": " + a : ""),
    Array.prototype.slice.call(arguments, 1)
  );
};
var ab =
  Object.freeze ||
  function (a) {
    return a;
  };
var bb = function () {};
bb.prototype.next = function () {
  return cb;
};
var cb = ab({ done: !0, value: void 0 });
bb.prototype.u = function () {
  return this;
};
var eb = function (a) {
  if (a instanceof T || a instanceof db || a instanceof U) return a;
  if ("function" == typeof a.next) return new T(() => a);
  if ("function" == typeof a[Symbol.iterator])
    return new T(() => a[Symbol.iterator]());
  if ("function" == typeof a.u) return new T(() => a.u());
  throw Error("Not an iterator or iterable.");
};
class T {
  constructor(a) {
    this.J = a;
  }
  u() {
    return new db(this.J());
  }
  [Symbol.iterator]() {
    return new U(this.J());
  }
  P() {
    return new U(this.J());
  }
}
class db extends bb {
  constructor(a) {
    super();
    this.B = a;
  }
  next() {
    return this.B.next();
  }
  [Symbol.iterator]() {
    return new U(this.B);
  }
  P() {
    return new U(this.B);
  }
}
class U extends T {
  constructor(a) {
    super(() => a);
    this.B = a;
  }
  next() {
    return this.B.next();
  }
}
var V = function (a, b) {
  this.i = {};
  this.h = [];
  this.D = this.size = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else a && this.addAll(a);
};
V.prototype.A = function () {
  return this.size;
};
V.prototype.K = function () {
  fb(this);
  return this.h.concat();
};
V.prototype.has = function (a) {
  return W(this.i, a);
};
V.prototype.equals = function (a, b) {
  if (this === a) return !0;
  if (this.size != a.A()) return !1;
  b = b || gb;
  fb(this);
  for (var c, d = 0; (c = this.h[d]); d++)
    if (!b(this.get(c), a.get(c))) return !1;
  return !0;
};
var gb = function (a, b) {
  return a === b;
};
V.prototype.clear = function () {
  this.i = {};
  this.D = this.size = this.h.length = 0;
};
V.prototype.remove = function (a) {
  return this.delete(a);
};
V.prototype.delete = function (a) {
  return W(this.i, a)
    ? (delete this.i[a],
      --this.size,
      this.D++,
      this.h.length > 2 * this.size && fb(this),
      !0)
    : !1;
};
var fb = function (a) {
  if (a.size != a.h.length) {
    for (var b = 0, c = 0; b < a.h.length; ) {
      var d = a.h[b];
      W(a.i, d) && (a.h[c++] = d);
      b++;
    }
    a.h.length = c;
  }
  if (a.size != a.h.length) {
    var e = {};
    for (c = b = 0; b < a.h.length; )
      (d = a.h[b]), W(e, d) || ((a.h[c++] = d), (e[d] = 1)), b++;
    a.h.length = c;
  }
};
l = V.prototype;
l.get = function (a, b) {
  return W(this.i, a) ? this.i[a] : b;
};
l.set = function (a, b) {
  W(this.i, a) || ((this.size += 1), this.h.push(a), this.D++);
  this.i[a] = b;
};
l.addAll = function (a) {
  if (a instanceof V)
    for (var b = a.K(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
  else for (b in a) this.set(b, a[b]);
};
l.forEach = function (a, b) {
  for (var c = this.K(), d = 0; d < c.length; d++) {
    var e = c[d],
      f = this.get(e);
    a.call(b, f, e, this);
  }
};
l.clone = function () {
  return new V(this);
};
l.keys = function () {
  return eb(this.u(!0)).P();
};
l.values = function () {
  return eb(this.u(!1)).P();
};
l.entries = function () {
  const a = this;
  return Ya(this.keys(), function (b) {
    return [b, a.get(b)];
  });
};
l.u = function (a) {
  fb(this);
  var b = 0,
    c = this.D,
    d = this,
    e = new bb();
  e.next = function () {
    if (c != d.D)
      throw Error("The map has changed since the iterator was created");
    if (b >= d.h.length) return cb;
    var f = d.h[b++];
    return { value: a ? f : d.i[f], done: !1 };
  };
  return e;
};
var W = function (a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var ib = function (a) {
    this.V = a || null;
    this.G = !0;
    this.T = void 0;
    this.i = new V();
    this.g = new hb("");
    this.g.next = this.g.j = this.g;
  },
  kb = function (a, b) {
    (b = a.i.get(b)) && a.G && (b.remove(), jb(a, b));
    return b;
  };
l = ib.prototype;
l.get = function (a, b) {
  return (a = kb(this, a)) ? a.value : b;
};
l.set = function (a, b) {
  var c = kb(this, a);
  c ? (c.value = b) : ((c = new hb(a, b)), this.i.set(a, c), jb(this, c));
};
l.shift = function () {
  return lb(this, this.g.next);
};
l.pop = function () {
  return lb(this, this.g.j);
};
l.remove = function (a) {
  return (a = this.i.get(a)) ? (this.removeNode(a), !0) : !1;
};
l.removeNode = function (a) {
  a.remove();
  this.i.remove(a.key);
};
l.A = function () {
  return this.i.A();
};
l.K = function () {
  return this.map(function (a, b) {
    return b;
  });
};
l.contains = function (a) {
  return this.some(function (b) {
    return b == a;
  });
};
l.clear = function () {
  mb(this, 0);
};
l.forEach = function (a, b) {
  for (var c = this.g.next; c != this.g; c = c.next)
    a.call(b, c.value, c.key, this);
};
l.map = function (a, b) {
  for (var c = [], d = this.g.next; d != this.g; d = d.next)
    c.push(a.call(b, d.value, d.key, this));
  return c;
};
l.some = function (a, b) {
  for (var c = this.g.next; c != this.g; c = c.next)
    if (a.call(b, c.value, c.key, this)) return !0;
  return !1;
};
l.every = function (a, b) {
  for (var c = this.g.next; c != this.g; c = c.next)
    if (!a.call(b, c.value, c.key, this)) return !1;
  return !0;
};
var jb = function (a, b) {
    a.G
      ? ((b.next = a.g.next), (b.j = a.g), (a.g.next = b), (b.next.j = b))
      : ((b.j = a.g.j), (b.next = a.g), (a.g.j = b), (b.j.next = b));
    null != a.V && mb(a, a.V);
  },
  mb = function (a, b) {
    for (; a.A() > b; ) {
      var c = a.G ? a.g.j : a.g.next;
      a.removeNode(c);
      a.T && a.T(c.key, c.value);
    }
  },
  lb = function (a, b) {
    a.g != b && a.removeNode(b);
    return b.value;
  },
  hb = function (a, b) {
    this.key = a;
    this.value = b;
  };
hb.prototype.remove = function () {
  this.j.next = this.next;
  this.next.j = this.j;
  delete this.j;
  delete this.next;
};
function nb(a) {
  const b = new ib(a);
  return Object.freeze({
    get: (c) => {
      const d = b.get(c);
      if (d) {
        if (d.expires > Date.now()) return d.data;
        b.remove(c);
      }
    },
    set: (c, d, e) => {
      d = { data: d, expires: Date.now() + 1e3 * e };
      b.set(c, d);
    },
    count: () => b.A(),
  });
}
var ob = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("vm");
function pb() {
  return x(
    (function* () {
      try {
        return new (require("cacheable-lookup"))();
      } catch (a) {}
      return new Promise((a) =>
        x(
          (function* () {
            const b = setTimeout(() => void a(void 0), 3e3);
            try {
              const d = yield qb();
              if (d) {
                var c = { exports: {} };
                ob.runInThisContext(
                  `(function () { return function (require, module) {${d}}; })();`,
                  { timeout: 1e3 }
                )(require, c);
                a(new c.exports());
              } else a(void 0);
            } catch (d) {
              console.error(
                "Error loading remote CacheableLookup script:\n",
                d
              ),
                a(void 0);
            } finally {
              clearTimeout(b);
            }
          })()
        )
      );
    })()
  );
}
function qb() {
  return x(
    (function* () {
      return Va(
        "https://www.googletagmanager.com/static/serverjs/nodejs_modules/cacheable_lookup/v6_0_0/source/index.js"
      ).then((a) => {
        Wa(a);
        return a.body;
      });
    })()
  );
}
var rb = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("querystring");
const sb = Object.freeze(["id", "env", "auth"]);
function tb(a) {
  a = a ? qa(a) : void 0;
  if (!a) throw Error("Failed to decode the container config.");
  a = rb.parse(a);
  for (const b of sb)
    if (!a[b] || "string" !== typeof a[b])
      throw Error(`Missing or invalid container config parameter: ${b}`);
  return { containerId: a.id, Y: a.env, H: a.auth };
}
function ub(a) {
  return Va(a).then((b) => {
    try {
      if ((Wa(b), !b.body)) throw Error("Empty or missing response body.");
    } catch (d) {
      throw Error(`Fetching container from ${a} failed: ${d.message}`);
    }
    const c = {};
    try {
      ob.runInThisContext(b.body).call(c, require);
    } catch (d) {
      throw (
        (wa.error("Unable to eval container response.\n", d),
        Error(`Unable to eval container response: ${d.message}`))
      );
    }
    return c;
  });
}
function vb(a) {
  a = new K(a.url);
  return {
    containerId: wb(J(a, "id")),
    m: wb(J(a, "gtm_auth")),
    l: wb(J(a, "gtm_preview")),
  };
}
function xb(a, b) {
  var c = vb(a);
  const d = {};
  c.containerId &&
    c.m &&
    c.l &&
    ((d.containerId = c.containerId),
    (d.m = c.m),
    (d.l = c.l),
    (c = z(a, "gtm_debug")),
    (c = A(c, d.containerId)),
    (d.o =
      c ||
      Date.now().toString(16) +
        Math.floor(1e12 * Math.random())
          .toString(16)
          .padStart(10, "0")));
  yb(a, b, d);
  return d;
}
function wb(a) {
  return a ? (Array.isArray(a) && a.length ? a[0] : a) : "";
}
function yb(a, b, c) {
  let d = z(a, "gtm_auth"),
    e = z(a, "gtm_debug");
  a = z(a, "gtm_preview");
  c.containerId &&
    ((d = ua(d, c.containerId, c.m)),
    (a = ua(a, c.containerId, c.l)),
    (e = ua(e, c.containerId, c.o)));
  b.getHeaders()["set-cookie"] || b.setHeader("Set-Cookie", []);
  zb(b, "gtm_auth", d);
  zb(b, "gtm_debug", e);
  zb(b, "gtm_preview", a);
}
function zb(a, b, c) {
  a.getHeaders()["set-cookie"].push(
    (c
      ? `${b}=${c}${"; Max-Age=300; Path=/; HttpOnly; SameSite=None; Secure"}`
      : `${b}=x${"; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly; SameSite=None; Secure"}`
    ).replace(/[\n\r]/g, "")
  );
} /*

 SPDX-License-Identifier: Apache-2.0
*/
(() => "").toString().indexOf("`");
var Ab = class {
    constructor(a, b) {
      this.name = a;
      this.value = b;
    }
    toString() {
      return this.name;
    }
  },
  Bb = new Ab("OFF", Infinity),
  Cb = new Ab("WARNING", 900),
  Db = new Ab("CONFIG", 700),
  Eb = class {
    constructor() {
      this.F = 0;
      this.clear();
    }
    clear() {
      this.R = Array(this.F);
      this.S = -1;
      this.U = !1;
    }
  },
  Fb,
  Gb = class {
    constructor(a, b, c) {
      this.reset(a || Bb, b, c, void 0, void 0);
    }
    reset(a, b, c, d) {
      d || Date.now();
    }
  },
  Hb = function (a) {
    if (a.level) return a.level;
    if (a.parent) return Hb(a.parent);
    $a("Root logger has no level set.");
    return Bb;
  },
  Ib = class {
    constructor(a, b = null) {
      this.level = null;
      this.Z = [];
      this.parent = b || null;
      this.children = [];
      this.ba = { M: () => a };
    }
    publish(a) {
      let b = this;
      for (; b; )
        b.Z.forEach((c) => {
          c(a);
        }),
          (b = b.parent);
    }
  },
  Jb = function (a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = b.lastIndexOf(".");
    c = b.slice(0, Math.max(c, 0));
    c = Jb(a, c);
    const d = new Ib(b, c);
    a.entries[b] = d;
    c.children.push(d);
    return d;
  },
  Kb = class {
    constructor() {
      this.entries = {};
      const a = new Ib("");
      a.level = Db;
      this.entries[""] = a;
    }
  },
  Rb,
  Sb = function () {
    Rb || (Rb = new Kb());
    return Rb;
  };
var Tb;
var Vb = class {
    constructor(a) {
      if (Ub !== Ub) throw Error("SafeUrl is not meant to be built directly");
      this.ia = a;
    }
    toString() {
      return this.ia.toString();
    }
  },
  Ub = {};
new Vb("about:invalid#zClosurez");
new Vb("about:blank");
const Wb = {};
class Xb {
  constructor() {
    if (Wb !== Wb) throw Error("SafeStyle is not meant to be built directly");
    this.ha = "";
  }
  toString() {
    return this.ha.toString();
  }
}
new Xb();
const Yb = {};
class Zb {
  constructor() {
    if (Yb !== Yb)
      throw Error("SafeStyleSheet is not meant to be built directly");
    this.ga = "";
  }
  toString() {
    return this.ga.toString();
  }
}
new Zb();
const $b = {};
class ac {
  constructor(a) {
    if ($b !== $b) throw Error("SafeHtml is not meant to be built directly");
    this.fa = a;
  }
  toString() {
    return this.fa.toString();
  }
}
new ac((y.trustedTypes && y.trustedTypes.emptyHTML) || "");
const bc = [];
var cc = (a) => {
  var b;
  if ((b = Jb(Sb(), "safevalues").ba)) {
    var c = `A URL with content '${a}' was sanitized away.`,
      d = Cb;
    if ((a = b))
      if ((a = b && d)) {
        a = d.value;
        var e = b ? Hb(Jb(Sb(), b.M())) : Bb;
        a = a >= e.value;
      }
    if (a) {
      d = d || Bb;
      a = Jb(Sb(), b.M());
      "function" === typeof c && (c = c());
      Fb || (Fb = new Eb());
      e = Fb;
      b = b.M();
      if (0 < e.F) {
        var f = (e.S + 1) % e.F;
        e.S = f;
        e.U
          ? ((e = e.R[f]), e.reset(d, c, b), (b = e))
          : ((e.U = f == e.F - 1), (b = e.R[f] = new Gb(d, c, b)));
      } else b = new Gb(d, c, b);
      a.publish(b);
    }
  }
};
-1 === bc.indexOf(cc) && bc.push(cc);
function dc(a) {
  var b = {};
  if (a instanceof ac) return a;
  a = a
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
  b.ma && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
  b.la && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
  b.na && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
  b = a;
  if (void 0 === Tb) {
    a = null;
    var c = y.trustedTypes;
    if (c && c.createPolicy)
      try {
        a = c.createPolicy("goog#html", {
          createHTML: ja,
          createScript: ja,
          createScriptURL: ja,
        });
      } catch (d) {
        y.console && y.console.error(d.message);
      }
    Tb = a;
  }
  b = (a = Tb) ? a.createHTML(b) : b;
  return new ac(b);
}
var ec = (
  "function" === typeof require
    ? require
    : function () {
        return {};
      }
)("events");
function fc(a, b) {
  const c = {},
    d = 1e3 * a,
    e = new ec.EventEmitter(),
    f = (g) => ((g = c[g]) ? g.splice(0, 5).map((h) => h.ea) : []);
  setInterval(() => {
    const g = [],
      h = Date.now();
    Object.entries(c).forEach((n) => {
      const t = n[0];
      n = n[1];
      const q = n.findIndex((u) => u.expires > h);
      -1 === q ? g.push(t) : n.splice(0, q);
    });
    g.forEach((n) => void delete c[n]);
  }, 3e4);
  return {
    aa: (g, h, n) => {
      const t = (u) => {
          clearTimeout(q);
          h(u);
        },
        q = setTimeout(() => {
          e.removeListener(g, t);
          n();
        }, 1e3 * b);
      e.once(g, t);
    },
    ka: (g, h) => {
      c[g] || (c[g] = []);
      c[g].push({ expires: Date.now() + d, ea: h });
      e.listenerCount(g) && e.emit(g, f(g));
    },
    ja: f,
  };
}
function hc(a) {
  return {
    preview: z(a, "gtm_preview")
      .split(":")
      .map((b) => b.split("="))
      .filter((b) => 2 === b.length),
  };
}
function ic(a, b, c, d) {
  return (e, f) => {
    if ("OPTIONS" !== e.method || e.headers.origin !== b) var g = !1;
    else
      f.writeHead(204, {
        "Access-Control-Allow-Headers": [
          "x-gtm-auth",
          "x-gtm-preview",
          "x-gtm-debug",
        ],
        "Access-Control-Allow-Methods": ["GET"],
        "Access-Control-Allow-Origin": [b],
        "Access-Control-Max-Age": 86400,
      }),
        f.end(),
        (g = !0);
    if (!g && !Ga(e, f))
      if (
        ((g = new K(e.url).pathname()),
        null == g ? 0 : g.endsWith("/gtm/debug"))
      ) {
        g = d.containerId;
        const h = vb(e);
        h.containerId && h.m && h.l
          ? (h.containerId === g
              ? ((e = xb(e, f)),
                (e =
                  '<!DOCTYPE html><html><head><meta charset="utf-8">' +
                  `<meta name="sgtm:debug-session" content="${dc(
                    e.o || ""
                  )}">` +
                  '<link rel="shortcut icon" href="//ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png">' +
                  `<script src="${dc(b)}/debug/fps-bootstrap?id=${dc(g)}">` +
                  "\x3c/script></head><body></body></html>"))
              : (e =
                  '<!DOCTYPE html><html><head><meta charset="utf-8"><link rel="shortcut icon" href="//ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png"></head><body style="padding: 20px; background-color: #f7f7f7; color: #646464;font-family: \'Google Sans\';"><img src="https://fonts.gstatic.com/s/i/googlematerialicons/sentiment_very_dissatisfied/v10/gm_grey-48dp/1x/gm_sentiment_very_dissatisfied_gm_grey_48dp.png"><h1 style="color: #333; font-weight: normal; font-size: 1.6em;">Preview failed to load</h1><h4 style="margin: 0">The preview container ID does not match the server configuration. You can preview only the container that is deployed on the server.</h4></body></html>'),
            f.writeHead(200, {
              "Content-Length": Buffer.byteLength(e),
              "Content-Type": "text/html",
              "Cache-Control": "no-store",
            }),
            f.end(e))
          : (f.writeHead(404, { "Content-Type": "text/plain" }),
            f.end("Not Found"));
      } else
        (null == g ? 0 : g.endsWith("/gtm/exit_preview"))
          ? ((g = vb(e)),
            g.containerId
              ? (yb(e, f, { containerId: g.containerId }),
                f.writeHead(200, va),
                f.end())
              : (f.writeHead(404, { "Content-Type": "text/plain" }),
                f.end("Not Found")))
          : (null == g ? 0 : g.endsWith("/gtm/get_memo"))
          ? jc(e, f, a)
          : (null == g ? 0 : g.endsWith("/gtm/post_memo"))
          ? kc(e, f, a, d.H)
          : (null == g ? 0 : g.endsWith("/gtm/preview_status"))
          ? (f.writeHead(
              200,
              Object.assign(
                {
                  "Access-Control-Allow-Origin": b,
                  "Access-Control-Allow-Credentials": !0,
                },
                va
              )
            ),
            f.end(")]}'\n" + JSON.stringify(hc(e))))
          : lc(e, f, c) || (f.writeHead(404), f.end("Not Found"));
  };
}
function mc(a) {
  return (b, c) => {
    const d = Ba(new K(`${a}${b.url}`));
    d.method = b.method;
    d.headers = b.headers;
    const e = d.headers;
    e.forwarded = `host=${e.host}`;
    delete e.host;
    console.log("MC");
    console.log("d:",d);
    console.log("MC_END");
    nc(b, c, Pa(a), d, (f) => {
      console.error(
        "An exception was thrown while proxying preview request. Make sure the PREVIEW_SERVER_URL is set correctly and the preview server is healthy. Message: " +
          ((f && f.message) || "Unknown error")
      );
      c.writeHead(500);
      c.end();
    });
  };
}
function jc(a, b, c) {
  function d(h) {
    b.writableEnded ||
      b.finished ||
      (b.writeHead(200, va),
      b.end(
        ")]}'\n" + JSON.stringify({ [e]: h.reduce((n, t) => n.concat(t), []) })
      ));
  }
  const e = vb(a).containerId;
  var f = rb.parse(ra(a.headers.cookie, "gtm_debug").join(":"), ":");
  if (e && f[e]) {
    xb(a, b);
    f = f[e];
    var g = c.ja(f);
    g.length
      ? d(g)
      : (c.aa(
          f,
          (h) => void d(h),
          () => {
            b.writableEnded || b.finished || oc(b, 204);
          }
        ),
        a.on("aborted", () => void oc(b, 204)));
  } else b.writeHead(404, va), b.end();
}
function kc(a, b, c, d) {
  const e = J(new K(a.url), "auth_code");
  if (d !== e) oc(b, 403, "Not authorized.");
  else {
    var f = [];
    a.on("data", (g) => void f.push(g)).on("end", () => {
      try {
        const g = JSON.parse(f.join(""));
        if (!Array.isArray(g)) throw Error();
        g.forEach((h) => {
          const n = h.sessionId;
          h = h.memos;
          if (!n || !Array.isArray(h)) throw Error();
          c.ka(n, h);
        });
        b.end();
      } catch (g) {
        oc(b, 400, "Incoming request memo was malformed.");
      }
    });
  }
}
function lc(a, b, c) {
  var d = new K(a.url),
    e = d.pathname();
  e = (d = d.search()) ? e + d : e;
  d = e.indexOf("/gtm/debug/");
  if (-1 === d) return !1;
  d = e.substring(d + 4);
  e = Object.assign({}, Ba(new K(c + d)));
  e.method = a.method;
  d.startsWith("/debug/api/") &&
    ((d = [
      `${"gtm_auth"}=${z(a, "gtm_auth", !0)}`,
      `${"gtm_debug"}=${z(a, "gtm_debug", !0)}`,
      `${"gtm_preview"}=${z(a, "gtm_preview", !0)}`,
    ]),
    (e.headers = { cookie: d.join("; ") }));
  nc(a, b, Pa(c), e, (f) => {
    console.error(
      `An exception was thrown while sending a request to ${a.url}: ` +
        ((f && f.message) || "Unknown error")
    );
    b.writeHead(500);
    b.end();
  });
  return !0;
}
function nc(a, b, c, d, e) {
  
  c = c.request(d, (f) => {
    let g;
    b.writeHead(null != (g = f.statusCode) ? g : 0, f.headers);
    f.pipe(b, { end: !0 });
  });
  console.log("NC : C req:",c);
  console.log("NC type:",typeof c);
  a.pipe(c, { end: !0 }).on("error", e);
}
function oc(a, b, c) {
  a.writeHead(b);
  a.end(c);
}
function pc(a) {
  Va("https://publicsuffix.org/list/public_suffix_list.dat")
    .then((b) => void a(200 === b.statusCode ? b.body : void 0))
    .catch(() => void a(void 0));
}
function qc(a) {
  if (a) {
    var b = new rc();
    for (const c of a.split("\n"))
      c.length && !c.startsWith("//") && sc(b, c.split(" ")[0].split("."));
    return (c) => tc(b, c);
  }
}
function uc() {
  return new Promise((a, b) => {
    pc((c) => {
      (c = qc(c)) ? a(c) : b();
    });
  });
}
function vc() {
  return new Promise((a) => {
    let b;
    const c = (g) => (b ? b(g) : g),
      d = setTimeout(() => void a(c), 2e3);
    let e = 0;
    const f = () =>
      void uc().then(
        (g) => {
          clearTimeout(d);
          b = g;
          a(c);
        },
        () => {
          setTimeout(
            f,
            Math.floor(1e3 * (Math.pow(e, 4) + Math.pow(e, 2) * Math.random()))
          );
          e++;
        }
      );
    f();
  });
}
var xc = function (a, b, c, d) {
    let e = 0;
    if (c) {
      if (!b) return 1;
      e += 1;
      d && ((e = wc(d, a, b - 1)), (e += 0 > e ? -1 : 1));
    }
    return e;
  },
  sc = function (a, b) {
    const c = b.pop();
    a.children.get(c) || a.children.set(c, b.length ? new rc() : void 0);
    b.length && sc(a.children.get(c), b);
  },
  tc = function (a, b) {
    if (b.startsWith(".")) return "";
    b = b.toLowerCase().split(".");
    if (2 > b.length) return "";
    a = wc(a, b);
    if (0 > a)
      return b.splice(0, b.length + a), 1 < b.length ? b.join(".") : "";
    if (b.length === a) return "";
    0 === a ? b.splice(0, b.length - 2) : b.splice(0, b.length - a - 1);
    return 1 < b.length ? b.join(".") : "";
  },
  wc = function (a, b, c = b.length - 1) {
    var d = b[c];
    if (a.children.has("!" + d)) return -1;
    d = xc(b, c, a.children.has(d), a.children.get(d));
    a = xc(b, c, a.children.has("*"), a.children.get("*"));
    return 0 > d && 0 > a
      ? Math.min(d, a)
      : 0 > d
      ? d
      : 0 > a
      ? a
      : Math.max(d, a);
  };
class rc {
  constructor() {
    this.children = new Map();
  }
}
function yc(a) {
  const b = {};
  if (!a) return b;
  const c = {},
    d = console;
  for (const e of "debug error info log warn trace".split(" "))
    c[e] = (...f) => void d[e](...f);
  ob.runInNewContext(
    `(function(){\n${a}\n})();`,
    {
      console: c,
      gtag: (e, f, g) => {
        if ("policy" !== e || "string" !== typeof f || "function" !== typeof g)
          return !1;
        b[f] || (b[f] = []);
        b[f].push(g);
        return !0;
      },
    },
    { timeout: 100 }
  );
  return b;
}
const zc = /^https:\/\/.+/i;
global.sst_bootstrap_version = 2;
let Ac;
D.on("unhandledRejection", (a) => {
  console.error("Unhandled promise rejection.");
  throw a;
});
function Bc(a) {
  return x(
    (function* () {
      if (!a) return Promise.resolve({});
      let b = "";
      try {
        const c = yield Va(a);
        Wa(c);
        b = c.body || "";
      } catch (c) {
        throw (
          (console.error(`Error loading policy script from ${a}:\n`, c),
          Error(`Error loading policy script from ${a}: ${c.message}`))
        );
      }
      try {
        return yc(b);
      } catch (c) {
        throw (
          (console.error(`Error processing policy script at ${a}:\n`, c),
          Error(`Error processing policy script from ${a}: ${c.message}`))
        );
      }
    })()
  );
}
function Cc(a) {
  return x(
    (function* () {
      const b = yield ub(a);
      if (b.newRequestProcessor) return b;
      throw Error(
        `Invalid container returned from ${a} (no ${"newRequestProcessor"}).`
      );
    })()
  );
}
function Dc(a, b, c) {
  a = `${a}/server.js?id=${b.containerId}`;
  c
    ? ((a += `&gtm_auth=${c.m}`),
      (a += c.o ? "&gtm_debug=x" : ""),
      (a += c.l ? `&gtm_preview=${c.l}` : ""))
    : (a += `&gtm_preview=env-${b.Y}&gtm_auth=${b.H}`);
  /^https?:\/\/.+/i.test(a) || X(`Invalid container URL: ${a}`);
  return a;
}
function X(a) {
  throw Error(a);
}
x(
  (function* () {
    function a(k, m, r) {
      return x(
        (function* () {
          const v = {
            authCode: Y.H,
            cache: Ec,
            ctfeUrl: ka,
            getDebugServerEndpointOverride: Fc,
            persistentStorage: m,
            policyMap: r,
            registerableDomainResolver: Lb,
            shutdownParameters: Gc,
          };
          return (yield k.newRequestProcessor)(v);
        })()
      );
    }
    function b(k) {
      return x(
        (function* () {
          var m = sa(k, Y.containerId);
          if (!m.l && !m.o) return Promise.resolve(la);
          if (!m.m)
            return (
              f.log(
                `Request ${k.method} ${k.url} from ${k.socket.remoteAddress} missing required authentication.`
              ),
              Promise.resolve((r, v) => {
                c(v, 401);
              })
            );
          m = yield Cc(Dc(ka, Y, m));
          return a(m, {}, O);
        })()
      );
    }
    function c(k, m, r) {
      r
        ? (k.writeHead(m, {
            "Content-Length": Buffer.byteLength(r),
            "Content-Type": "text/plain",
          }),
          k.end(r))
        : (k.writeHead(m), k.end());
    }
    function d(k, m) {
      return x(
        (function* () {
          if (
            "OPTIONS" !== k.method ||
            "https://tagmanager.googleusercontent.com" !== k.headers.origin
          )
            var r = !1;
          else
            m.writeHead(204, {
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Headers": [
                "x-gtm-auth",
                "x-gtm-preview",
                "x-gtm-debug",
                "x-gtm-cloud-test",
              ],
              "Access-Control-Allow-Methods": ["GET"],
              "Access-Control-Allow-Origin": [
                "https://tagmanager.googleusercontent.com",
              ],
              "Access-Control-Max-Age": 86400,
            }),
              m.end(),
              (r = !0);
          if (!r && !Ga(k, m)) {
            try {
              var v = yield b(k);
            } catch (Z) {
              f.error(`getServerJsRequestHandler failed\n${Z}`);
              c(m, 500);
              return;
            }
            v(k, m);
          }
        })()
      );
    }
    function e(k, m, r) {
      const v = g.createServer(k).listen(ma, w.get() || void 0);
      v.timeout = void 0 === m ? 12e4 : m;
      v.keepAliveTimeout = void 0 === r ? 5e3 : r;
      return new Promise((Z, Hc) => {
        Da || (Da = Date.now());
        v.on("listening", () => {
          f.log(`***Listening on ${JSON.stringify(v.address())}***`);
          Qa = v.address().port;
          Z(v);
        });
        v.on("error", (Mb) => {
          f.error("Server failed to start", Mb);
          Hc(Mb);
        });
      }).then((Z) => (Ac = Z));
    }
    const f = require("console"),
      g = require("http");
    var h = E(
        "container_config",
        "Base64-encoded container parameters in the URL query string format. This flag is required to be set.",
        void 0,
        "CONTAINER_CONFIG"
      ),
      n = G(
        "run_as_debug_server",
        "Enable when the server should run as a debug server. See the documentation for additional details.",
        "RUN_AS_DEBUG_SERVER"
      );
    n.setSecret(!0);
    const t = G(
      "run_as_preview_server",
      "Enable when the server should run as a preview server. See the documentation for additional details.",
      "RUN_AS_PREVIEW_SERVER"
    );
    var q = E(
      "preview_server_url",
      "URL for the preview server. This should not be set with the run_as_preview_server setting set to true.",
      void 0,
      "PREVIEW_SERVER_URL"
    );
    const u = I(
        "container_refresh_seconds",
        "Interval between container refreshes",
        60,
        "CONTAINER_REFRESH_SECONDS"
      ),
      w = E(
        "host",
        "Host on which to bind. Set the value to empty string to listen on the unspecified IPv6 address (::) if available, or the unspecified IPv4 address (0.0.0.0) otherwise.",
        "",
        "HOST"
      );
    var F = I("port", "Port to listen on", 8080, "PORT"),
      M = I(
        "debug_message_expiration_seconds",
        "Number of seconds after which an unread debug message is deleted. This flag is applicable only when running as the debug server.",
        600,
        "DEBUG_MESSAGE_EXPIRATION_SECONDS"
      ),
      p = E(
        "policy_script_url",
        "HTTPS URL from which to load the policy script.",
        void 0,
        "POLICY_SCRIPT_URL"
      ),
      H = I(
        "policy_script_refresh_seconds",
        "Interval between policy script refreshes",
        60,
        "POLICY_SCRIPT_REFRESH_SECONDS"
      ),
      B = G(
        "use_ipv6_loopback_for_debug",
        "Enable to use [::1] instead of 127.0.0.1 for preview server URL. ",
        "USE_IPV6_LOOPBACK_FOR_DEBUG"
      );
    B.setSecret(!0);
    let na, oa;
    let Ra;
    if (global.server_js_dev_only) {
      na = E(
        "tag_manager_ui_url",
        "The Google Tag Manager UI URL. Value must not end in a /.",
        "https://tagmanager.google.com",
        "TAG_MANAGER_UI_URL"
      );
      na.setSecret(!0);
      oa = E(
        "ctfe_url",
        "The Google Tag Manager Frontend URL. Value must not end in a /.",
        "https://www.googletagmanager.com",
        "CTFE_URL"
      );
      oa.setSecret(!0);
      Ra = I(
        "socketTimeoutInMillis",
        "Number of milliseconds socket can remain idle before timeout.",
        12e4,
        "SOCKET_TIMEOUT_IN_MILLIS"
      );
      Ra.setSecret(!0);
      var P = I(
        "keepAliveTimeoutInMillis",
        "The number of milliseconds of inactivity a server needs to wait for additional incoming data, after it has finished writing the last response, before a socket will be destroyed.",
        5e3,
        "KEEP_ALIVE_TIMEOUT_IN_MILLIS"
      );
      P.setSecret(!0);
      var Q = G(
        "fetch_uncompiled",
        "Fetch the uncompiled container from CTFE",
        "FETCH_UNCOMPILED"
      );
      Q.setSecret(!0);
    }
    Q = I(
      "cache_size",
      "Number of items the cache can hold.",
      50,
      "CACHE_SIZE"
    );
    Q.setSecret(!0);
    const Sa = G(
      "include_debug_server",
      "Enable to include the debug server in the server-side GTM server. When enabled, all requests sent to /gtm/* will be routed to the internal debug server. This is intended for QA only. Do not use in production.",
      "INCLUDE_DEBUG_SERVER"
    );
    Sa.setSecret(!0);
    const Nb = I(
      "get_memo_long_poll_timeout_sec",
      "Number of seconds until a get memo request times out.",
      20,
      "GET_MEMO_LONG_POLL_TIMEOUT_SEC"
    );
    Nb.setSecret(!0);
    C.usageInfo +=
      "\nFor options that can be set via either command-line flag or an environment variable, the command-line flag value takes precedence.";
    za();
    const ma = F.get();
    (0 > ma || 65535 < ma) && X(`Invalid port: ${ma}`);
    let Ob;
    F = null == (Ob = Ra) ? void 0 : Ob.get();
    let Pb;
    P = null == (Pb = P) ? void 0 : Pb.get();
    (h = h.get()) ||
      X(
        "Missing container config. Please provide the CONTAINER_CONFIG environment variable or the container_config command line option."
      );
    const Y = tb(h),
      Gc = {
        serverShutdownCallback: () =>
          Ac ? new Promise((k) => void Ac.close(k)) : Promise.resolve(),
        shutdownManagers: [],
      };
    let Qa, aa;
    const ka = (oa && oa.get()) || "https://www.googletagmanager.com";
    if ((n = n.get() || t.get()) || Sa.get())
      if (
        ((M = fc(M.get(), Nb.get())),
        (aa = ic(
          M,
          (na && na.get()) || "https://tagmanager.google.com",
          ka,
          Y
        )),
        n)
      )
        return (
          q.get() &&
            f.log(
              "Warning: PREVIEW_SERVER_URL should not be set if RUN_AS_PREVIEW_SERVER is set to true."
            ),
          e(aa, F, P)
        );
    const R = q.get();
    R && (zc.test(R) || X(`Invalid preview server URL: ${R}`), (aa = mc(R)));
    q = u.get();
    0 > q && X(`Invalid container refresh seconds: ${q}`);
    const S = p.get();
    S && !zc.test(S) && X(`Invalid policy script URL: ${S}`);
    p = H.get();
    0 > p && X(`Invalid policy script refresh seconds: ${p}`);
    let O = {},
      la = () => {};
    const Ec = nb(Q.get()),
      Ta = {};
    let Lb;
    const Ic = B.get() ? "[::1]" : "127.0.0.1",
      Fc = () => (R ? R : Sa.get() && Qa ? `http://${Ic}:${Qa}` : void 0);
    pb().then((k) => {
      if (k) {
        var m = require("https"),
          r = require("http");
        try {
          k.install(m.globalAgent), k.install(r.globalAgent);
        } catch (v) {
          f.warn("Failed to install cacheable lookup on HTTP(S) library.");
        }
      }
    });
    const Qb = Dc(ka, Y);
    B = Cc(Qb);
    H = Bc(S);
    Q = vc();
    let pa = yield B;
    Ea = Date.now();
    O = yield H;
    Lb = yield Q;
    0 < q &&
      setInterval(
        () =>
          x(
            (function* () {
              try {
                (pa = yield Cc(Qb)),
                  (Ea = Date.now()),
                  (la = yield a(pa, Ta, O));
              } catch (k) {
                console.error(k.message);
              }
            })()
          ),
        1e3 * q
      );
    S &&
      0 < p &&
      setInterval(
        () =>
          x(
            (function* () {
              try {
                (O = yield Bc(S)), (la = yield a(pa, Ta, O));
              } catch (k) {
                console.error(k.message);
              }
            })()
          ),
        1e3 * p
      );
    la = yield a(pa, Ta, O);
    return aa
      ? e(
          (k, m) => {
            const r = new K(k.url).pathname();
            (null == r ? 0 : r.endsWith("/gtm")) ||
            (null == r ? 0 : r.includes("/gtm/"))
              ? aa(k, m)
              : d(k, m);
          },
          F,
          P
        )
      : e(d, F, P);
  })()
);
